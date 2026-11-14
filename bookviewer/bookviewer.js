/* Gemeinsame Buchansicht für Wake, Local Legends u. a.: Deine eigenen PDFs liegen nur lokal im Browser (IndexedDB),
   nie im Repo. Seitenverweise („S. 315“) im Text werden automatisch anklickbar. Rendering mit pdf.js. */
var BV = (function(){
  let cfg = { books:[], defaultBook:null, root:null }, PDFJS = null; const DOCS = {};
  const offKey = k => "bookviewer_offset_"+k;
  const getOff = k => { try{ const v = localStorage.getItem(offKey(k)); if(v!==null) return parseInt(v)||0; }catch(e){} const b = cfg.books.find(x=>x.key===k); return (b&&b.off)||0; };
  function idb(){ return new Promise((res,rej)=>{ const r = indexedDB.open("bookviewer_books",1); r.onupgradeneeded = ()=>r.result.createObjectStore("b"); r.onsuccess = ()=>res(r.result); r.onerror = ()=>rej(r.error); }); }
  async function dbGet(k){ const db = await idb(); return new Promise(res=>{ const q = db.transaction("b").objectStore("b").get(k); q.onsuccess = ()=>res(q.result||null); q.onerror = ()=>res(null); }); }
  async function dbPut(k,v){ const db = await idb(); return new Promise(res=>{ const t = db.transaction("b","readwrite"); t.objectStore("b").put(v,k); t.oncomplete = ()=>res(true); t.onerror = ()=>res(false); }); }
  async function dbDel(k){ const db = await idb(); return new Promise(res=>{ const t = db.transaction("b","readwrite"); t.objectStore("b").delete(k); t.oncomplete = ()=>res(true); }); }
  const book = k => cfg.books.find(b=>b.key===k);
  async function lib(){ if(PDFJS) return PDFJS; PDFJS = await import(BASE+"pdf.min.mjs"); PDFJS.GlobalWorkerOptions.workerSrc = BASE+"pdf.worker.min.mjs"; return PDFJS; }
  let BASE = "";
  async function doc(k){ if(DOCS[k]) return DOCS[k]; const blob = await dbGet(k); if(!blob) return null; const l = await lib(); return DOCS[k] = await l.getDocument({ data: await blob.arrayBuffer() }).promise; }

  let S = { key:null, page:1, n:0, zoom:false }, tok = 0;
  function build(){
    if(document.getElementById("bvOverlay")) return;
    const d = document.createElement("div"); d.id = "bvOverlay"; d.className = "bvx"; d.hidden = true;
    d.innerHTML = `<div class="bvx-bar"><button class="bvx-b" onclick="BV.step(-1)" aria-label="Vorherige Seite">‹</button><input id="bvxNum" type="number" min="1" onchange="BV.go(this.value)" aria-label="Seitennummer"><span id="bvxOf"></span><button class="bvx-b" onclick="BV.step(1)" aria-label="Nächste Seite">›</button><button class="bvx-b" onclick="BV.zoom()">Zoom</button><span class="bvx-t" id="bvxTitle"></span><button class="bvx-b" onclick="BV.close()">✕</button></div><div class="bvx-stage" id="bvxStage"><div class="bvx-pages" id="bvxPages"></div></div><button class="bvx-handle" aria-label="Leiste einblenden" title="Leiste einblenden" onclick="BV.bar(true)">▾</button>`;
    wireBar(d);
    document.body.appendChild(d);
  }
  async function open(key, printed){
    key = key || cfg.defaultBook; const b = book(key); if(!b) return;
    if(!histOn){ try{ history.pushState({bvx:1}, "", location.href); histOn = true; }catch(e){} }
    const dc = await doc(key);
    if(!dc){ if(histOn){ histOn = false; try{ history.back(); }catch(e){} } askUpload(key, b, printed); return; }
    build();
    const pg = Math.max(1, Math.min(dc.numPages, (parseInt(printed)||1) + getOff(key)));
    S = { key, page:pg, n:dc.numPages, zoom:false };
    document.getElementById("bvOverlay").hidden = false; document.body.style.overflow = "hidden";
    document.getElementById("bvxTitle").textContent = b.name; show(); bar(true);
  }
  function askUpload(key, b, printed){
    var o=document.getElementById("bvAsk"); if(o) o.remove();
    o=document.createElement("div"); o.id="bvAsk"; o.className="bva";
    o.innerHTML='<div class="bva-box"><b>'+b.name+'</b><p>Dieses Buch ist noch nicht hinterlegt. Wähle das PDF einmal aus – es bleibt nur in diesem Browser gespeichert, danach öffnet es sich per Knopfdruck.</p><label class="bvs-btn">PDF wählen<input class="bvs-file" type="file" accept="application/pdf,.pdf"></label><button type="button" class="bva-x">Abbrechen</button></div>';
    document.body.appendChild(o);
    o.querySelector(".bva-x").onclick=function(){ o.remove(); };
    o.addEventListener("click",function(e){ if(e.target===o) o.remove(); });
    o.querySelector("input").onchange=async function(){ var inp=this; await load(key, inp); o.remove(); open(key, printed); };
  }
  function close(fromPop){ const o = document.getElementById("bvOverlay"); if(o) o.hidden = true; document.body.style.overflow = ""; if(histOn){ histOn = false; if(fromPop!==true){ try{ history.back(); }catch(e){} } } }
  var histOn = false;
  window.addEventListener("popstate", function(){ var o = document.getElementById("bvOverlay"); if(o && !o.hidden) close(true); else histOn = false; });
  /* Doppelseiten: Seite 1 einzeln, danach immer (2,3), (4,5) … ; die letzte Seite steht allein, wenn die Seitenzahl gerade ist */
  const lead = p => p<=1 ? 1 : (p%2===0 ? p : p-1);

  /* Obere Leiste blendet sich automatisch aus: Maus an den oberen Rand oder Tippen auf den Griff blendet sie ein */
  let barT = 0;
  function bar(on, keep){
    const o = document.getElementById("bvOverlay"); if(!o) return; clearTimeout(barT);
    o.classList.toggle("bar-on", !!on);
    if(on && !keep) barT = setTimeout(()=>{ const a = document.activeElement; if(o.querySelector(".bvx-bar:hover") || (a && a.closest && a.closest(".bvx-bar") && a.tagName==="INPUT")) { bar(true); return; } o.classList.remove("bar-on"); }, 2200);
  }
  function wireBar(o){
    o.addEventListener("mousemove", e=>{ if(e.clientY<56) bar(true); else if(o.classList.contains("bar-on") && e.clientY>130 && !o.querySelector(".bvx-bar:hover")) bar(true); });
    o.querySelector(".bvx-bar").addEventListener("focusin", ()=>bar(true, true));
    o.querySelector(".bvx-bar").addEventListener("focusout", ()=>bar(true));
    let rz = 0; window.addEventListener("resize", ()=>{ clearTimeout(rz); rz = setTimeout(()=>{ if(!o.hidden) show(); }, 150); });
  }
  function step(d){ const l = lead(S.page); S.page = d>0 ? (l===1 ? 2 : Math.min(S.n, l+2)) : (l<=2 ? 1 : l-2); S.page = Math.max(1,Math.min(S.n,S.page)); show(); }
  function go(n){ S.page = Math.max(1,Math.min(S.n,(parseInt(n)||1))); show(); }
  function zoom(){ S.zoom = !S.zoom; show(); }
  async function show(){
    const t = ++tok, dc = await doc(S.key); if(!dc) return;
    const l = lead(S.page), nums = (l===1) ? [1] : (l+1<=S.n ? [l,l+1] : [l]);
    document.getElementById("bvxNum").value = nums.length>1 ? nums[0] : nums[0]; document.getElementById("bvxOf").textContent = (nums.length>1 ? "–"+nums[1]+" " : "")+"/ "+S.n;
    const stage = document.getElementById("bvxStage"), box = document.getElementById("bvxPages"), pages = await Promise.all(nums.map(n=>dc.getPage(n)));
    const dpr = Math.min(2, window.devicePixelRatio||1), pad = 10, W = Math.max(160, stage.clientWidth-pad), H = Math.max(160, stage.clientHeight-pad);
    const vps = pages.map(pg=>pg.getViewport({scale:1})), sumW = vps.reduce((a,v)=>a+v.width,0), maxH = Math.max(...vps.map(v=>v.height));
    /* Standard: Doppelseite ganz sichtbar (Breite UND Höhe einpassen); Zoom: Seitenbreite = Fensterbreite, scrollen */
    const sc = S.zoom ? W/vps[0].width : Math.min(W/sumW, H/maxH);
    const cvs = pages.map(pg=>{ const vp = pg.getViewport({scale:sc*dpr}), cv = document.createElement("canvas"); cv.width = vp.width; cv.height = vp.height; cv.style.width = (vp.width/dpr)+"px"; cv.style.height = (vp.height/dpr)+"px"; return {pg,vp,cv}; });
    await Promise.all(cvs.map(o=>o.pg.render({canvasContext:o.cv.getContext("2d"), viewport:o.vp}).promise)); if(t!==tok) return;
    box.replaceChildren(...cvs.map(o=>o.cv)); stage.scrollTop = 0; stage.scrollLeft = 0;
  }
  async function refresh(){ for(const b of cfg.books){ const el = document.getElementById("bvs_"+b.key); if(!el) continue; const has = !!(await dbGet(b.key)); el.innerHTML = has ? `✓ geladen <a href="#" onclick="BV.remove('${b.key}');return false">entfernen</a>` : "nicht geladen"; } }
  async function load(k, inp){
    const f = inp.files[0]; if(!f) return; const el = document.getElementById("bvs_"+k);
    if(el) el.textContent = "wird gespeichert … ("+Math.round(f.size/1048576)+" MB)";
    try{
      if(!(await dbPut(k,f))) throw new Error("Speichern fehlgeschlagen");
      delete DOCS[k]; const dc = await doc(k); if(!dc) throw new Error("PDF nicht lesbar");
      if(el) el.innerHTML = "✓ geladen ("+dc.numPages+" Seiten) <a href=\"#\" onclick=\"BV.remove('"+k+"');return false\">entfernen</a>";
    }catch(e){ delete DOCS[k]; await dbDel(k); if(el) el.textContent = "Fehler: "+(e&&e.message||e)+" – evtl. zu wenig Speicherplatz im Browser oder keine gültige PDF."; }
    inp.value = "";
  }
  async function remove(k){ await dbDel(k); delete DOCS[k]; refresh(); }
  function setOffset(k,v){ try{ localStorage.setItem(offKey(k), String(parseInt(v)||0)); }catch(e){} }
  function settingsHTML(){
    return `<div class="bvs"><div class="bvs-title">Bücher (nur lokal)</div>${cfg.books.map(b=>`<div class="bvs-row"><div><b>${b.name}</b><small id="bvs_${b.key}">…</small></div><label class="bvs-btn">PDF wählen<input class="bvs-file" type="file" accept="application/pdf,.pdf" onchange="BV.load('${b.key}',this)"></label></div><div class="bvs-off">Seitenversatz (PDF-Seite minus Buchseite): <input type="number" value="${getOff(b.key)}" onchange="BV.setOffset('${b.key}',this.value)"></div>`).join("")}<p class="bvs-hint">Deine PDFs bleiben nur in diesem Browser (nichts wird hochgeladen). Seitenangaben wie „S. 315“ im Text öffnen dann die Originalseite. Passt die Seite nicht genau, stelle den Seitenversatz ein.</p></div>`;
  }
  /* Seitenverweise im Text automatisch anklickbar machen */
  const RX = /\bCBII?\s?(\d{1,3})|(?:\bS\.|\bSeiten?)\s?(\d{1,3})(?:\s?[–-]\s?(\d{1,3}))?/g;
  /* Core-Book-Verweise: CBI = gedruckte Seite = PDF-Seite; CBII = gedruckte Seite + 240 (Band II beginnt bei PDF-S. 241) */
  function target(m, before, ctxBook){
    const has = k=>cfg.books.some(b=>b.key===k);
    if(m[0].slice(0,2)==="CB" && has("core")) return { book:"core", page:(parseInt(m[1])||1) + (m[0].slice(0,4)==="CBII" ? 240 : 0) };
    const pg = parseInt(m[2]);
    if(ctxBook==="core" && has("core")) return { book:"core", page: pg + (/Vol\. II/.test(before) ? 240 : 0) };
    if(has("core")){
      const mm = before.match(/(Core Book|CBII?|Erzähler-Buch)([^)]{0,45})$/);
      if(mm) return { book:"core", page: pg + (mm[1]!=="Erzähler-Buch" && /Vol\. II|Core Book II|CBII|Kapitel V\b/.test(mm[0]) ? 240 : 0) };
    }
    return { book:cfg.defaultBook, page:pg };
  }

  function linkify(root){
    const w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, { acceptNode(n){
      if(!n.nodeValue || !/(S\.|Seite|CBI)/.test(n.nodeValue)) return NodeFilter.FILTER_REJECT;
      const p = n.parentElement; if(!p || p.closest("script,style,textarea,input,select,a,[contenteditable],.bvx,.pg-link,.bvs")) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT; } });
    const nodes = []; while(w.nextNode()) nodes.push(w.currentNode);
    for(const n of nodes){
      const txt = n.nodeValue; RX.lastIndex = 0; if(!RX.test(txt)) continue; RX.lastIndex = 0;
      const frag = document.createDocumentFragment(); let last = 0, m;
      while((m = RX.exec(txt))){
        frag.appendChild(document.createTextNode(txt.slice(last, m.index)));
        const a = document.createElement("a"); a.className = "pg-link"; a.href = "#"; const cb = n.parentElement && n.parentElement.closest("[data-pgbook]"), tg = target(m, txt.slice(Math.max(0,m.index-70), m.index), cb && cb.dataset.pgbook); a.dataset.page = tg.page; a.dataset.book = tg.book; a.title = "Originalseite im Buch ansehen"; a.textContent = m[0]; frag.appendChild(a); last = m.index + m[0].length;
      }
      frag.appendChild(document.createTextNode(txt.slice(last))); n.parentNode.replaceChild(frag, n);
    }
  }
  function init(c){
    cfg = Object.assign(cfg, c);
    BASE = new URL(c.libBase, location.href.split("#")[0]).href;
    document.addEventListener("click", e=>{ const a = e.target.closest && e.target.closest(".pg-link"); if(!a) return; e.preventDefault(); e.stopPropagation(); open(a.dataset.book || cfg.defaultBook, a.dataset.page); }, true);
    document.addEventListener("keydown", e=>{ const o = document.getElementById("bvOverlay"); if(!o||o.hidden) return; if(e.target && e.target.tagName==="INPUT" && e.key!=="Escape") return; if(e.key==="ArrowRight"||e.key==="PageDown") step(1); else if(e.key==="ArrowLeft"||e.key==="PageUp") step(-1); else if(e.key==="Escape") close(); else if(e.key==="z"||e.key==="Z") zoom(); });
    let pend = 0; const run = ()=>{ pend = 0; try{ linkify(document.body); }catch(e){} };
    new MutationObserver(()=>{ if(!pend) pend = setTimeout(run, 200); }).observe(document.body, { childList:true, subtree:true, characterData:true });
    run();
  }
  function setDefault(k){ if(k) cfg.defaultBook = k; }
  return { setDefault, init, open, close, step, go, zoom, bar, load, remove, refresh, setOffset, settingsHTML, linkify };
})();
