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
  const doc = await getDoc(book);
  if(!doc){ alert("Das PDF „"+BOOKS[book].name+"“ ist noch nicht geladen. Du wählst es einmal unter ⚙ Einstellungen › Bücher aus; es bleibt nur in diesem Browser."); openSettings(); return; }
  BV = { book, page: Math.max(1,Math.min(doc.numPages, parseInt(page)||1)), n: doc.numPages, zoom:false };
  document.getElementById("bookViewer").hidden = false; document.body.classList.add("menu-open");
  document.getElementById("bvTitle").textContent = BOOKS[book].name;
  bvShow();
}
function closeBook(){ document.getElementById("bookViewer").hidden = true; document.body.classList.remove("menu-open"); }
function bvStep(d){ BV.page = Math.max(1,Math.min(BV.n, BV.page+d)); bvShow(); }
function bvGo(n){ BV.page = Math.max(1,Math.min(BV.n, parseInt(n)||1)); bvShow(); }
function bvZoom(){ BV.zoom = !BV.zoom; bvShow(); }
let bvToken = 0;
async function bvShow(){
  const tok = ++bvToken, doc = await getDoc(BV.book); if(!doc) return;
  document.getElementById("bvNum").value = BV.page; document.getElementById("bvOf").textContent = "/ "+BV.n;
  const page = await doc.getPage(BV.page), stage = document.getElementById("bvStage");
  const base = page.getViewport({scale:1}), avail = Math.max(280, stage.clientWidth-20);
  const scale = (BV.zoom ? avail*2 : avail)/base.width, dpr = Math.min(2, window.devicePixelRatio||1);
  const vp = page.getViewport({scale: scale*dpr}), cv = document.getElementById("bvCanvas");
  cv.width = vp.width; cv.height = vp.height; cv.style.width = (vp.width/dpr)+"px"; cv.style.height = (vp.height/dpr)+"px";
  await page.render({canvasContext: cv.getContext("2d"), viewport: vp}).promise;
  if(tok===bvToken) stage.scrollTop = 0;
}
document.addEventListener("keydown", e=>{ const v = document.getElementById("bookViewer"); if(!v||v.hidden) return; if(e.key==="ArrowRight") bvStep(1); else if(e.key==="ArrowLeft") bvStep(-1); else if(e.key==="Escape") closeBook(); });
