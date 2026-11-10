/* Zusatzansichten: Bonus-Inhalte (Menü), NSC-Browser, Spieler-Ansicht (nur Bilder) */
function goNpcs(){ state.view="npcs"; render(); window.scrollTo(0,0); }
function goPlayer(){ state.view="player"; render(); window.scrollTo(0,0); }

/* ---------- NSC-Browser: alle Locals aller Bezirke ---------- */
let NPCQ = "", NPCD = "";
function npcList(){
  const out = [];
  DISTRICTS.forEach(d=>{ if(d.hidden||!d.data||!d.data.locals) return; d.data.locals.forEach(l=>out.push({d,l})); });
  return out;
}
function npcRows(){
  const q = NPCQ.trim().toLowerCase();
  const rows = npcList().filter(x=>(!NPCD||x.d.id===NPCD) && (!q || (x.l.name+" "+x.l.epithet+" "+x.d.title+" "+x.l.desc).toLowerCase().includes(q)));
  if(!rows.length) return '<p class="hint">Keine Treffer.</p>';
  let cur = null, h = "";
  rows.forEach(x=>{ if(cur!==x.d.id){ cur = x.d.id; h += `<h3 class="npc-dh">${x.d.title}</h3>`; } h += `<div class="npc-row">${renderDangerCard(x.l, "npc_"+x.d.id)}</div>`; });
  return h;
}
function npcFilter(){ NPCQ = document.getElementById("npcQ").value; NPCD = document.getElementById("npcD").value; document.getElementById("npcList").innerHTML = npcRows(); }
function renderNpcs(){
  const n = npcList().length;
  return `${crumbBonus("Gegner &amp; NSCs")}<div class="hero"><h1>Gegner &amp; NSCs</h1><p>${n} Locals und Dangers aus allen Bezirken auf einen Blick, durchsuchbar und mit Bedrohungsstufe.</p></div>
  <div class="npc-bar"><input class="gloss-search" id="npcQ" placeholder="Name, Mythos oder Stichwort …" value="${esc2(NPCQ)}" oninput="npcFilter()" autocomplete="off"><select id="npcD" onchange="npcFilter()"><option value="">Alle Bezirke</option>${DISTRICTS.filter(d=>!d.hidden&&d.data&&d.data.locals).map(d=>`<option value="${d.id}" ${NPCD===d.id?"selected":""}>${d.title}</option>`).join("")}</select></div>
  <div id="npcList">${npcRows()}</div>`;
}
function esc2(s){ return String(s||"").replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c])); }

/* ---------- Spieler-Ansicht: nur Bilder, ohne Text ---------- */
let PLG = [];
function plCollect(){
  const groups = [], seen = new Set();
  const add = (g, src, cap)=>{ if(!src||seen.has(src)) return; seen.add(src); g.items.push({src, cap:cap||""}); };
  const city = {t:"Stadtkarte", items:[]}; add(city,"img/karten/stadt-spieler.webp","Stadtkarte"); groups.push(city);
  const maps = {t:"Bezirkskarten", items:[]}; DISTRICTS.filter(d=>!d.hidden).forEach(d=>add(maps,`img/karten/${d.id}-spieler.webp`,d.title)); groups.push(maps);
  const walk = (o, g, depth)=>{ if(!o||typeof o!=="object"||depth>9) return; if(Array.isArray(o)){ o.forEach(x=>walk(x,g,depth+1)); return; }
    for(const k in o){ const v = o[k]; if(typeof v==="string" && /^img\/(?!karten)/.test(v) && (k==="src"||k==="img")) add(g, v, o.caption||o.name||o.title||""); else if(v&&typeof v==="object") walk(v,g,depth+1); } };
  DISTRICTS.filter(d=>!d.hidden&&d.data).forEach(d=>{ const g = {t:d.title+" · Handouts & Bilder", items:[]}; walk(d.data, g, 0); if(g.items.length) groups.push(g); });
  const por = {t:"Porträts", items:[]}; if(typeof LL_PORTRAITS!=="undefined") for(const k in LL_PORTRAITS){ const v = LL_PORTRAITS[k]; add(por, v, k==="_chows"?"Die Chows":k.replace(/\s*\(.*\)/,"").toLowerCase().replace(/(^|\s)\S/g,c=>c.toUpperCase())); } if(por.items.length) groups.push(por);
  return groups.filter(g=>g.items.length);
}
function renderPlayerView(){
  const G = plCollect(); PLG = []; G.forEach(g=>g.items.forEach(i=>PLG.push(i)));
  let n = 0;
  return `${crumbBonus("Spieler-Ansicht")}<div class="hero"><h1>Spieler-Ansicht</h1><p>Nur Bilder, ganz ohne Spielleiter-Text: antippen, groß zeigen, mit Pfeilen oder Wischen blättern. Karten sind die Spieler-Versionen.</p></div>
  ${G.map(g=>`<div class="bonus-head"><h2>${esc2(g.t)}</h2></div><div class="pl-grid">${g.items.map(i=>{ const idx = n++; return `<figure class="pl-fig"><img src="${i.src}" alt="${esc2(i.cap)}" loading="lazy" onclick="plZoom(${idx})"><figcaption>${esc2(i.cap)}</figcaption></figure>`; }).join("")}</div>`).join("")}`;
}
let PLI = 0;
function plZoom(i){ PLI = i; let o = document.getElementById("plLightbox");
  if(!o){ o = document.createElement("div"); o.id = "plLightbox"; o.className = "pl-lb"; document.body.appendChild(o);
    o.addEventListener("click", e=>{ if(e.target.closest(".pl-nav")||e.target.closest(".pl-x")) return; plClose(); });
    let x0 = null; o.addEventListener("touchstart", e=>{ x0 = e.touches[0].clientX; },{passive:true});
    o.addEventListener("touchend", e=>{ if(x0===null) return; const dx = e.changedTouches[0].clientX-x0; x0 = null; if(Math.abs(dx)>50) plStep(dx<0?1:-1); }); }
  plShow(); o.classList.add("show"); }
function plShow(){ const o = document.getElementById("plLightbox"); o.innerHTML = `<img src="${PLG[PLI].src}" alt=""><button class="pl-x" aria-label="Schließen" onclick="plClose()">✕</button><button class="pl-nav prev" aria-label="Zurück" onclick="plStep(-1)">‹</button><button class="pl-nav next" aria-label="Weiter" onclick="plStep(1)">›</button>`; }
function plStep(d){ PLI = (PLI+d+PLG.length)%PLG.length; plShow(); }
function plClose(){ const o = document.getElementById("plLightbox"); if(o) o.classList.remove("show"); }
document.addEventListener("keydown", e=>{ const o = document.getElementById("plLightbox"); if(!o||!o.classList.contains("show")) return; if(e.key==="Escape") plClose(); else if(e.key==="ArrowRight") plStep(1); else if(e.key==="ArrowLeft") plStep(-1); });
