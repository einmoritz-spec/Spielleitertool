/* Otherscape: Tab-Leiste, Baum-Ansichten (Gegner, Fraktionen, Tokyo) und große Abenteuer-Kacheln */
["gegner","fraktionen","tokyo","abenteuer"].forEach(k=>delete OS_BANNER_KEYS[k]);

/* ---- Tab-Leiste oben ---- */
const OS_TABS = [["start","Start","#/"],["gegner","Gegner","#/gegner"],["fraktionen","Fraktionen","#/fraktionen"],["tokyo","Tokyo","#/tokyo"],["abenteuer","Abenteuer","#/abenteuer"]];
function osTabKey(){ const p = parseHash();
  if(p[0]==="adv" && p[1]){ if(/^fraktion-/.test(p[1])) return "fraktionen"; if(/^tokyo-/.test(p[1])) return "tokyo"; if(/^gegner-/.test(p[1])) return "gegner"; return "abenteuer"; }
  return ["gegner","fraktionen","tokyo","abenteuer"].includes(p[0]) ? p[0] : (!p[0]||p[0]==="" ? "start" : null); }
function osTabsSync(){
  const app = $("app"); if(!app) return; const k = osTabKey(); let n = document.getElementById("osTabs");
  if(!k){ if(n) n.remove(); return; }
  if(!n){ n = document.createElement("nav"); n.id = "osTabs"; n.className = "os-tabs"; app.parentNode.insertBefore(n, app); }
  n.innerHTML = OS_TABS.map(t=>`<a class="os-tab${t[0]===k?" on":""}" href="${t[2]}">${t[1]}</a>`).join("");
}
window.addEventListener("hashchange",osTabsSync); window.addEventListener("load",osTabsSync); osTabsSync();

/* ---- Baum links (einklappbar), Inhalt rechts ---- */
function osTree(items, main){
  const sub = g => (g.sub||[]).map(s=>`<a href="#" onclick="${s.js};return false">${esc(osShort(s.t))}</a>`).join("");
  const btn = g => `<button class="ocat${g.on?" on":""}" onclick="${g.js}">${esc(osShort(g.t))}${g.n?`<i>${g.n}</i>`:""}</button>`;
  const on = items.find(g=>g.on)||items[0];
  const tree = items.map(g=>btn(g)+(g.on&&(g.sub||[]).length?`<div class="osub">${sub(g)}</div>`:"")).join("");
  const flat = `<div class="orow">${items.map(btn).join("")}</div>${on&&(on.sub||[]).length?`<div class="orow osr">${sub(on)}</div>`:""}`;
  const off = ST.osRail===false ? " rail-off" : "";
  return `<div class="osrail${off}" id="osRail"><nav class="osnav"><button class="orail-x" onclick="osRailToggle()" title="Seitenleiste ein-/ausklappen" aria-label="Seitenleiste umschalten">‹</button><div class="otree">${tree}</div><div class="oflat">${flat}</div></nav><div class="osmain">${main}</div></div>`;
}
function osRailToggle(){ const r = document.getElementById("osRail"); if(!r) return; r.classList.toggle("rail-off"); ST.osRail = !r.classList.contains("rail-off"); saveState(); }
document.addEventListener("keydown",e=>{ if(e.key==="n" && !/INPUT|TEXTAREA|SELECT/.test((e.target||{}).tagName||"")) osRailToggle(); });

/* ---- Fraktionen & Tokyo: alle Abschnitte flach, Baum zeigt Einträge und deren Abschnitte ---- */
async function osSetView(kat, id, base, label){
  const list = OS_ADV_LIST.filter(a=>a.kat===kat); const cur = list.find(a=>a.id===id) || list.find(a=>hasData(a.id)) || list[0];
  $("app").innerHTML = '<div class="missing">Lade …</div>';
  const a = await loadAdv(cur.id);
  const len = s => JSON.stringify(s.bloecke||[]).length;
  const isWide = s => (s.bloecke||[]).some(b=>b.t==="challenge"||b.t==="tabelle"||b.t==="uhr") || len(s)>1400;
  const wideSet = new Set(); { let run = [];
    const end = ()=>{ if(run.length%2===1) wideSet.add(run[run.length-1]); run = []; };
    (a?a.sektionen.slice(1):[]).forEach(s=>{ if(isWide(s)){ wideSet.add(s); end(); } else run.push(s); }); end(); }
  const sec = (s,i) => { const bl = s.bloecke||[]; let out = "", run = "";
    const flush = ()=>{ if(run){ out += `<div class="os-xc">${run}</div>`; run = ""; } };
    bl.forEach((b,j)=>{ const x = renderBlock(a,s,b,j); if(b.t==="challenge") run += x; else { flush(); out += x; } }); flush();
    const wide = wideSet.has(s);
    return `<section class="os-xs${wide?" wide":""}" id="sec_${s.id}"><h2 class="os-xh">${esc(osShort(s.titel))}${osSecPage(a,s.id)}</h2>${osArt(a,i)}${out}</section>`; };
  let body = "";
  if(a){
    const s0 = a.sektionen[0], L0 = (typeof OS_ART!=="undefined" && OS_ART[a.id]) || [], h0 = kat==="fraktion" ? L0[0] : null;
    const art0 = h0 ? `<figure class="os-art"><img src="${h0.src}" alt="${esc(a.titel)}" onclick="osZoom(this.src)"></figure>` : ""; window.OS_HERO_SKIP = h0 ? h0.src : null;
    const bl0 = s0.bloecke||[]; const pi = bl0.findIndex(b=>b.t==="p");
    body = `<div class="os-fh${art0?"":" noart"}">${art0?`<div class="os-fh-img">${art0}</div>`:""}<div class="os-fh-t"><h1>${esc(a.titel)}</h1>${pi>=0?renderBlock(a,s0,bl0[pi],pi):""}</div></div><div class="os-xr">${bl0.map((b,j)=>j===pi?"":renderBlock(a,s0,b,j)).join("")}</div>
    <div class="os-xss">${a.sektionen.slice(1).map((s,i)=>sec(s,i+1)).join("")}</div>`;
  } else body = '<div class="missing">Dieser Eintrag ist noch nicht erfasst.</div>';
  const items = list.map(x=>({t:x.titel, on:x.id===cur.id, js:`location.hash='${base}/${x.id}'`,
    sub: x.id===cur.id && a ? a.sektionen.slice(1).map(s=>({t:s.titel, js:`osGo('sec_${s.id}')`})) : []}));
  const tkHero = (kat==="setting" && cur.id===list[0].id) ? `<header class="os-cine" onclick="osZoom('img/art/banner-tokyo.webp')"><img src="img/art/banner-tokyo.webp" alt="Tokyo Megacity"></header>` : "";
  $("app").innerHTML = tkHero + osTree(items, body);
  if(typeof NotePop!=="undefined" && NotePop.refresh) try{ NotePop.refresh(); }catch(e){}
}
function renderFraktionen(id){ return osSetView("fraktion", id, "#/fraktionen"); }
function renderTokyo(id){ return osSetView("setting", id, "#/tokyo"); }

/* ---- Gegner: Baum nach Kategorie, Karten im Raster ---- */
var GEG_CAT = "";
const GEG_CATS = [["Händler & Waren",/händler|vendor/i],["Power Sets",/power ?set/i],["Cyberspace-Yōkai",/cyberspace-y/i],["Heimgesuchte Orte",/heimgesucht|\(ort|institution/i],
  ["Social-Phenomena-Yōkai",/entstehen|app-y|social|phänomen|gruppe|subkultur/i],["Unterwelt-Yōkai",/unterwelt|underworld|enma|oni\b/i],
  ["Nicht-Yōkai",/mythic|söldner|ronin|gang|paramilit|roboter|gyrocycle|nahkämpf|source-festung|nicht-y/i],["Prowling Yōkai",/./]];
const gegCatOf = x => { const t = (x.b.typ||"")+" "+x.s.titel; return GEG_CATS.find(c=>c[1].test(t))[0]; };
async function renderGegner(){
  $("app").innerHTML = '<div class="missing">Lade Gegner …</div>';
  const items = await buildGegner();
  const cats = [...new Set(items.map(gegCatOf))];
  const tp = x => (x.b.typ||"Challenge").split(" (")[0].trim();
  const tree = [{t:"Alle Gegner", on:!GEG_CAT, n:items.length, js:"gegCat('')"}].concat(cats.map(c=>({t:c, on:GEG_CAT===c, n:items.filter(x=>gegCatOf(x)===c).length, js:`gegCat(${JSON.stringify(c).replace(/"/g,"&quot;")})`})));
  const main = `<div class="geg-bar"><input class="search-input" id="gegQ" placeholder="Filtern nach Name oder Tag …" oninput="gegFilter()" autocomplete="off"></div>
  <div class="geg-list geg-grid" id="gegList">${items.map((x,n)=>`<details class="geg" data-n="${n}" data-c="${esc(gegCatOf(x))}" data-q="${esc((x.b.name+" "+(x.b.typ||"")+" "+(x.b.tags||[]).join(" ")+" "+x.s.titel).toLowerCase())}" data-t="${esc(tp(x))}" ontoggle="gegOpen(this)"><summary>${osAv(x.b.name)}<span class="gn"><b>${esc(x.b.name)}</b><small>${esc(x.b.typ||"Challenge")}</small></span><span class="stars">${esc(x.b.rating||"")}</span></summary><div class="geg-body"></div></details>`).join("")}</div>`;
  $("app").innerHTML = osTree(tree, main); gegFilter();
}
function gegCat(c){ GEG_CAT = c; renderGegner(); }
function gegFilter(){ const qi = $("gegQ"), q = qi ? qi.value.trim().toLowerCase() : "";
  document.querySelectorAll("#gegList .geg").forEach(d=>{ d.style.display = (!q || d.dataset.q.includes(q)) && (!GEG_CAT || d.dataset.c===GEG_CAT) ? "" : "none"; }); }

/* ---- Abenteuer: große Kacheln mit Name im Bild ---- */
function renderAdvList(){
  const list = OS_ADV_LIST.filter(a=>a.kat===undefined);
  $("app").innerHTML = `<div class="os-big-g">${list.map(a=>{ const ok = hasData(a.id), c = OS_COVER[a.id];
    return `<button class="os-big${ok?"":" off"}" ${ok?`onclick="location.hash='#/adv/${a.id}'"`:"disabled"} style="${c?`background-image:url(${c[0]});background-position:${c[1]}`:""}"><span class="ob-t">${esc(a.titel)}</span><span class="ob-p">${esc(ok?a.seiten:"in Arbeit")}</span></button>`; }).join("")}</div>`;
}
if(typeof route==="function") route();
