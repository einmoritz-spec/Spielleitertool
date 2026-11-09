/* Gemeinsame Buchansicht für Wake, Local Legends u. a.: Deine eigenen PDFs liegen nur lokal im Browser (IndexedDB),
   nie im Repo. Seitenverweise („S. 315“) im Text werden automatisch anklickbar. Rendering mit pdf.js. */
var BV = (function(){
  let cfg = { books:[], defaultBook:null, root:null }, PDFJS = null; const DOCS = {};
  const offKey = k => "bookviewer_offset_"+k;
  const getOff = k => { try{ return parseInt(localStorage.getItem(offKey(k)))||0; }catch(e){ return 0; } };
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
    d.innerHTML = `<div class="bvx-bar"><button class="bvx-b" onclick="BV.step(-1)" aria-label="Vorherige Seite">‹</button><input id="bvxNum" type="number" min="1" onchange="BV.go(this.value)" aria-label="Seitennummer"><span id="bvxOf"></span><button class="bvx-b" onclick="BV.step(1)" aria-label="Nächste Seite">›</button><button class="bvx-b" onclick="BV.zoom()">Zoom</button><span class="bvx-t" id="bvxTitle"></span><button class="bvx-b" onclick="BV.close()">✕</button></div><div class="bvx-stage" id="bvxStage"><canvas id="bvxCanvas"></canvas></div>`;
    document.body.appendChild(d);
  }
  async function open(key, printed){
    key = key || cfg.defaultBook; const b = book(key); if(!b) return;
    const dc = await doc(key);
    if(!dc){ alert("Das PDF „"+b.name+"“ ist noch nicht geladen. Wähle es einmal in den Einstellungen unter „Bücher (nur lokal)“ aus; es bleibt nur in diesem Browser."); if(cfg.openSettings) cfg.openSettings(); return; }
    build();
    const pg = Math.max(1, Math.min(dc.numPages, (parseInt(printed)||1) + getOff(key)));
    S = { key, page:pg, n:dc.numPages, zoom:false };
    document.getElementById("bvOverlay").hidden = false; document.body.style.overflow = "hidden";
    if(!histOn){ try{ history.pushState({bvx:1}, ""); histOn = true; }catch(e){} }
    document.getElementById("bvxTitle").textContent = b.name; show();
  }
  function close(fromPop){ const o = document.getElementById("bvOverlay"); if(o) o.hidden = true; document.body.style.overflow = ""; if(histOn){ histOn = false; if(fromPop!==true){ try{ history.back(); }catch(e){} } } }
  var histOn = false;
  window.addEventListener("popstate", function(){ var o = document.getElementById("bvOverlay"); if(histOn && o && !o.hidden) close(true); else histOn = false; });
  function step(d){ S.page = Math.max(1,Math.min(S.n,S.page+d)); show(); }
  function go(n){ S.page = Math.max(1,Math.min(S.n,(parseInt(n)||1))); show(); }
  function zoom(){ S.zoom = !S.zoom; show(); }
  async function show(){
    const t = ++tok, dc = await doc(S.key); if(!dc) return;
    document.getElementById("bvxNum").value = S.page; document.getElementById("bvxOf").textContent = "/ "+S.n;
    const page = await dc.getPage(S.page), stage = document.getElementById("bvxStage"), base = page.getViewport({scale:1});
    const avail = Math.max(280, stage.clientWidth-20), sc = (S.zoom ? avail*2 : avail)/base.width, dpr = Math.min(2, window.devicePixelRatio||1);
    const vp = page.getViewport({scale:sc*dpr}), cv = document.getElementById("bvxCanvas");
    cv.width = vp.width; cv.height = vp.height; cv.style.width = (vp.width/dpr)+"px"; cv.style.height = (vp.height/dpr)+"px";
    await page.render({canvasContext:cv.getContext("2d"), viewport:vp}).promise; if(t===tok) stage.scrollTop = 0;
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
  const RX = /(?:\bS\.|\bSeiten?)\s?(\d{1,3})(?:\s?[–-]\s?(\d{1,3}))?/g;
  function linkify(root){
    const w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, { acceptNode(n){
      if(!n.nodeValue || !/(S\.|Seite)/.test(n.nodeValue)) return NodeFilter.FILTER_REJECT;
      const p = n.parentElement; if(!p || p.closest("script,style,textarea,input,select,button,a,[contenteditable],.bvx,.pg-link,.bvs")) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT; } });
    const nodes = []; while(w.nextNode()) nodes.push(w.currentNode);
    for(const n of nodes){
      const txt = n.nodeValue; RX.lastIndex = 0; if(!RX.test(txt)) continue; RX.lastIndex = 0;
      const frag = document.createDocumentFragment(); let last = 0, m;
      while((m = RX.exec(txt))){
        frag.appendChild(document.createTextNode(txt.slice(last, m.index)));
        const a = document.createElement("a"); a.className = "pg-link"; a.href = "#"; a.dataset.page = m[1]; a.title = "Originalseite im Buch ansehen"; a.textContent = m[0]; frag.appendChild(a); last = m.index + m[0].length;
      }
      frag.appendChild(document.createTextNode(txt.slice(last))); n.parentNode.replaceChild(frag, n);
    }
  }
  function init(c){
    cfg = Object.assign(cfg, c);
    BASE = new URL(c.libBase, location.href.split("#")[0]).href;
    document.addEventListener("click", e=>{ const a = e.target.closest && e.target.closest(".pg-link"); if(!a) return; e.preventDefault(); e.stopPropagation(); open(cfg.defaultBook, a.dataset.page); }, true);
    document.addEventListener("keydown", e=>{ const o = document.getElementById("bvOverlay"); if(!o||o.hidden) return; if(e.key==="ArrowRight") step(1); else if(e.key==="ArrowLeft") step(-1); else if(e.key==="Escape") close(); });
    let pend = 0; const run = ()=>{ pend = 0; try{ linkify(document.body); }catch(e){} };
    new MutationObserver(()=>{ if(!pend) pend = setTimeout(run, 200); }).observe(document.body, { childList:true, subtree:true, characterData:true });
    run();
  }
  return { init, open, close, step, go, zoom, load, remove, refresh, setOffset, settingsHTML, linkify };
})();
