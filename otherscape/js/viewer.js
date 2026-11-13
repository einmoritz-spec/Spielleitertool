/* Buchansicht: eigene PDFs (Metro, Tokyo) liegen nur lokal im Browser (IndexedDB), nie im Repo. Rendering mit pdf.js. */
const BOOKS = { Metro:{key:"metro", name:"Corebook Metro"}, Tokyo:{key:"tokyo", name:"Settingbook Tokyo"} };
function idb(){ return new Promise((res,rej)=>{ const r = indexedDB.open("otherscape_books",1); r.onupgradeneeded = ()=>r.result.createObjectStore("b"); r.onsuccess = ()=>res(r.result); r.onerror = ()=>rej(r.error); }); }
async function idbGet(k){ const db = await idb(); return new Promise(res=>{ const q = db.transaction("b").objectStore("b").get(k); q.onsuccess = ()=>res(q.result||null); q.onerror = ()=>res(null); }); }
async function idbPut(k,v){ const db = await idb(); return new Promise(res=>{ const t = db.transaction("b","readwrite"); t.objectStore("b").put(v,k); t.oncomplete = ()=>res(true); t.onerror = ()=>res(false); }); }
async function idbDel(k){ const db = await idb(); return new Promise(res=>{ const t = db.transaction("b","readwrite"); t.objectStore("b").delete(k); t.oncomplete = ()=>res(true); }); }

let PDFJS = null; const DOCS = {};
async function pdfLib(){ if(PDFJS) return PDFJS; const base = new URL("../bookviewer/lib/", location.href.split("#")[0]).href; PDFJS = await import(base+"pdf.min.mjs"); PDFJS.GlobalWorkerOptions.workerSrc = base+"pdf.worker.min.mjs"; return PDFJS; }
async function getDoc(book){
  if(DOCS[book]) return DOCS[book];
  const blob = await idbGet(BOOKS[book].key); if(!blob) return null;
  const lib = await pdfLib();
  return DOCS[book] = await lib.getDocument({ data: await blob.arrayBuffer() }).promise;
}
async function refreshBookStatus(){
  for(const b in BOOKS){ const el = document.getElementById("bk_"+BOOKS[b].key); if(!el) continue; const has = !!(await idbGet(BOOKS[b].key)); el.innerHTML = has ? `✓ geladen <button class="btn" onclick="removeBook('${b}')">Entfernen</button>` : "nicht geladen"; }
}
async function loadBook(book, inp){
  const f = inp.files[0]; if(!f) return;
  await idbPut(BOOKS[book].key, f); delete DOCS[book]; refreshBookStatus();
}
async function removeBook(book){ await idbDel(BOOKS[book].key); delete DOCS[book]; refreshBookStatus(); }

let BV = { book:null, page:1, n:0, zoom:false };
async function openBook(book, page){
  if(!bvHist){ try{ history.pushState({bv:1}, "", location.href); bvHist = true; }catch(e){} }
  const doc = await getDoc(book);
  if(!doc){ if(bvHist){ bvHist = false; try{ history.back(); }catch(e){} } askBookUpload(book, page); return; }
  BV = { book, page: Math.max(1,Math.min(doc.numPages, parseInt(page)||1)), n: doc.numPages, zoom:false };
  document.getElementById("bookViewer").hidden = false; document.body.classList.add("menu-open");
  document.getElementById("bvTitle").textContent = BOOKS[book].name;
  bvShow(); bvBar(true);
}
var bvHist = false;
function closeBook(fromPop){ document.getElementById("bookViewer").hidden = true; document.body.classList.remove("menu-open"); if(bvHist){ bvHist = false; if(fromPop!==true){ try{ history.back(); }catch(e){} } } }
window.addEventListener("popstate", ()=>{ const v = document.getElementById("bookViewer"); if(v && !v.hidden) closeBook(true); else bvHist = false; });
/* Doppelseiten: Seite 1 einzeln, danach immer (2,3), (4,5) … */
const bvLead = p => p<=1 ? 1 : (p%2===0 ? p : p-1);
function bvStep(d){ const l = bvLead(BV.page); BV.page = d>0 ? (l===1 ? 2 : Math.min(BV.n, l+2)) : (l<=2 ? 1 : l-2); BV.page = Math.max(1,Math.min(BV.n,BV.page)); bvShow(); }
function bvGo(n){ BV.page = Math.max(1,Math.min(BV.n, parseInt(n)||1)); bvShow(); }
function bvZoom(){ BV.zoom = !BV.zoom; bvShow(); }
let bvToken = 0;
async function bvShow(){
  const tok = ++bvToken, doc = await getDoc(BV.book); if(!doc) return;
  const l = bvLead(BV.page), nums = (l===1) ? [1] : (l+1<=BV.n ? [l,l+1] : [l]);
  document.getElementById("bvNum").value = nums[0]; document.getElementById("bvOf").textContent = (nums.length>1 ? "–"+nums[1]+" " : "")+"/ "+BV.n;
  const stage = document.getElementById("bvStage"), box = document.getElementById("bvPages"), pages = await Promise.all(nums.map(n=>doc.getPage(n)));
  const dpr = Math.min(2, window.devicePixelRatio||1), pad = 10, W = Math.max(160, stage.clientWidth-pad), H = Math.max(160, stage.clientHeight-pad);
  const vps = pages.map(pg=>pg.getViewport({scale:1})), sumW = vps.reduce((a,v)=>a+v.width,0), maxH = Math.max(...vps.map(v=>v.height));
  /* Standard: Doppelseite ganz sichtbar (Breite und Höhe einpassen); Zoom: Seitenbreite = Fensterbreite, scrollen */
  const scale = BV.zoom ? W/vps[0].width : Math.min(W/sumW, H/maxH);
  const cvs = pages.map(pg=>{ const vp = pg.getViewport({scale: scale*dpr}), cv = document.createElement("canvas"); cv.width = vp.width; cv.height = vp.height; cv.style.width = (vp.width/dpr)+"px"; cv.style.height = (vp.height/dpr)+"px"; return {pg,vp,cv}; });
  await Promise.all(cvs.map(o=>o.pg.render({canvasContext:o.cv.getContext("2d"), viewport:o.vp}).promise)); if(tok!==bvToken) return;
  box.replaceChildren(...cvs.map(o=>o.cv)); stage.scrollTop = 0; stage.scrollLeft = 0;
}

/* Obere Leiste blendet sich automatisch aus: Maus an den oberen Rand oder Tippen auf den Griff blendet sie ein */
let bvBarT = 0;
function bvBar(on, keep){
  const v = document.getElementById("bookViewer"); if(!v) return; clearTimeout(bvBarT);
  v.classList.toggle("bar-on", !!on);
  if(on && !keep) bvBarT = setTimeout(()=>{ const a = document.activeElement; if(v.querySelector(".bv-bar:hover") || (a && a.tagName==="INPUT" && v.contains(a))){ bvBar(true); return; } v.classList.remove("bar-on"); }, 2200);
}
(function(){
  const v = document.getElementById("bookViewer"); if(!v) return;
  if(!v.querySelector(".bv-handle")){ const h = document.createElement("button"); h.className = "bv-handle"; h.textContent = "▾"; h.title = "Leiste einblenden"; h.setAttribute("aria-label","Leiste einblenden"); h.onclick = ()=>bvBar(true); v.appendChild(h); }
  v.addEventListener("mousemove", e=>{ if(e.clientY<56) bvBar(true); else if(v.classList.contains("bar-on") && e.clientY>130 && !v.querySelector(".bv-bar:hover")) bvBar(true); });
  const b = v.querySelector(".bv-bar"); b.addEventListener("focusin", ()=>bvBar(true,true)); b.addEventListener("focusout", ()=>bvBar(true));
  let rz = 0; window.addEventListener("resize", ()=>{ clearTimeout(rz); rz = setTimeout(()=>{ if(!v.hidden) bvShow(); }, 150); });
})();
document.addEventListener("keydown", e=>{ const v = document.getElementById("bookViewer"); if(!v||v.hidden) return; if(e.target && e.target.tagName==="INPUT" && e.key!=="Escape") return; if(e.key==="ArrowRight"||e.key==="PageDown") bvStep(1); else if(e.key==="ArrowLeft"||e.key==="PageUp") bvStep(-1); else if(e.key==="Escape") closeBook(); else if(e.key==="z"||e.key==="Z") bvZoom(); });

function askBookUpload(book, page){
  let o = document.getElementById("osAsk"); if(o) o.remove();
  o = document.createElement("div"); o.id = "osAsk";
  o.style.cssText = "position:fixed;inset:0;z-index:400;background:rgba(0,0,0,.72);display:flex;align-items:center;justify-content:center;padding:16px";
  o.innerHTML = `<div style="max-width:420px;background:var(--panel,#15161c);border:1px solid var(--accent,#e0458b);border-radius:12px;padding:20px;display:flex;flex-direction:column;gap:12px;font:15px/1.5 system-ui,sans-serif;color:var(--text,#eee)"><b style="font-size:17px">${BOOKS[book].name}</b><p style="margin:0">Dieses Buch ist noch nicht hinterlegt. Wähle das PDF einmal aus – es bleibt nur in diesem Browser, danach öffnet es sich per Knopfdruck.</p><label class="btn" style="text-align:center;cursor:pointer">PDF auswählen<input type="file" accept="application/pdf" hidden></label><button class="btn" data-x>Abbrechen</button></div>`;
  document.body.appendChild(o);
  o.addEventListener("click", e=>{ if(e.target===o || e.target.hasAttribute("data-x")) o.remove(); });
  o.querySelector("input").onchange = async function(){ const f = this.files[0]; if(!f) return; await idbPut(BOOKS[book].key, f); delete DOCS[book]; o.remove(); if(typeof refreshBookStatus==="function") refreshBookStatus(); openBook(book, page); };
}
