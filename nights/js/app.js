/* Nights of Paynetown – Oberfläche. Zustand: localStorage nights_state_v1 */
const STATE_KEY = "nights_state_v1";
const PAGES_TOTAL = 296;
const READY = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]; // erfasste Fälle
const $ = id => document.getElementById(id);
const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const pad = (n, l=3) => String(n).padStart(l, "0");
let ST = loadState();
function loadState(){ try{ return Object.assign({ cases:{}, done:{}, notes:{}, last:null, seen:{}, limits:{}, dagger:null }, JSON.parse(localStorage.getItem(STATE_KEY)||"{}")); }catch(e){ return { cases:{}, done:{}, notes:{}, last:null, seen:{}, limits:{}, dagger:null }; } }
function saveState(){ try{ localStorage.setItem(STATE_KEY, JSON.stringify(ST)); }catch(e){} }

/* ---------- Daten laden ---------- */
const loading = {};
function loadCase(n){
  if(window.NIGHTS.cases[n]) return Promise.resolve(window.NIGHTS.cases[n]);
  if(loading[n]) return loading[n];
  return loading[n] = new Promise(res => {
    const s = document.createElement("script");
    s.src = `js/data/case${pad(n,2)}.js`;
    s.onload = () => res(window.NIGHTS.cases[n] || null);
    s.onerror = () => res(null);
    document.head.appendChild(s);
  });
}
const camp = () => window.NIGHTS.campaign;

/* ---------- Routing ---------- */
function parseHash(){ const p = (location.hash||"#/").slice(2).split("/"); return p; }
window.addEventListener("hashchange", route);
function goHome(){ location.hash = "#/"; }
function goRegister(){ location.hash = "#/register"; }
function goMap(){ location.hash = "#/map"; }
function goLastCase(){ location.hash = ST.last ? ST.last : "#/case/1"; }
async function route(){
  const p = parseHash();
  window.scrollTo(0,0);
  if(p[0]==="case" && p[1]){
    const n = +p[1];
    ST.last = "#/case/" + n + (p[2]==="sec" && p[3] ? "/sec/" + p[3] : ""); saveState();
    $("app").innerHTML = '<div class="missing">Lade Fall …</div>';
    const c = await loadCase(n);
    if(!c){ const info = camp().cases[n] && Object.assign({nr:n,from:camp().cases[n].pages[0],to:camp().cases[n].pages[1]}, camp().cases[n]); $("app").innerHTML = `<div class="missing"><h2>Fall ${n}${info?": "+esc(info.title):""}</h2><p>Dieser Fall ist noch nicht erfasst. Die Originalseiten ${info?info.from+"–"+info.to:""} kannst du im Seitenviewer ansehen.</p>${info?`<button class="btn" onclick="openPageViewer(${info.from})">Seite ${info.from} öffnen</button>`:""}</div>`; return; }
    renderCase(c, p[2]==="sec" ? p[3] : (p[2]==="eisberg" ? "__eisberg" : c.sections[0].id));
  } else if(p[0]==="pages"){ renderHome(); openPageViewer(+p[1]||1, true); }
  else if(p[0]==="map") renderMap(p[1]==="dolch");
  else if(p[0]==="register") renderRegister(p[1]||"leute");
  else renderHome();
}

/* ---------- Start ---------- */
function caseStatus(n){ return ST.cases[n] || ""; }
function setStatus(n, s){ ST.cases[n] = ST.cases[n]===s ? "" : s; saveState(); renderHome(); }
function renderHome(){
  const C = camp();
  let h = `<div class="hero"><div class="eyebrow">City of Mist · Abenteuerband</div><h1>${esc(C.title)}</h1><p class="hint">Spielleitung-Ansicht · Text wörtlich aus dem Buch · Seiten ${C.intro.pages[0]}–${C.appendix.pages[1]}</p></div>`;
  for(const L of C.levels){
    h += `<section class="level ${L.tone}"><div class="level-head"><h2>${esc(L.name)}</h2><span>${esc(L.sub||"")}</span><span>Seiten ${L.pages[0]}–${L.pages[1]}</span></div><div class="cases">`;
    for(const n of L.cases){
      const ci = C.cases[n]; if(!ci) continue;
      const info = {nr:n, title:ci.title, from:ci.pages[0], to:ci.pages[1], ready:READY.includes(n)};
      const st = caseStatus(n);
      h += `<div class="case-card ${info.ready?"":"off"}" ><a href="#/case/${n}" style="position:absolute;inset:0;border-radius:14px" aria-label="Fall ${n} öffnen"></a><span class="nr">Fall ${n}</span><b>${esc(info.title)}</b><small>Seiten ${info.from}–${info.to}</small>${info.ready?"":'<span class="badge">folgt</span>'}${st==="ok"?'<span class="badge ok">abgeschlossen</span>':st==="run"?'<span class="badge run">läuft</span>':""}<div class="statusrow" style="position:relative;z-index:2"><button class="${st==="run"?"on":""}" onclick="setStatus(${n},'run')">läuft</button><button class="${st==="ok"?"on":""}" onclick="setStatus(${n},'ok')">abgeschlossen</button></div></div>`;
    }
    if(L.intro){ const e = C.extras[L.intro]; h += `<a class="case-card intro" href="#/case/${L.intro}"><span class="nr">Einführung</span><b>${esc(e.title)}</b><small>Seiten ${e.pages[0]}–${e.pages[1]}</small></a>`; }
    h += `</div></section>`;
  }
  h += `<section class="level"><div class="level-head"><h2>Buchteile</h2><span>Einleitung und Anhang</span></div><div class="cases">${C.book.map(n=>{ const e = C.extras[n]; return `<a class="case-card intro" href="#/case/${n}"><span class="nr">Buch</span><b>${esc(e.title)}</b><small>${esc(e.sub||"")} · Seiten ${e.pages[0]}–${e.pages[1]}</small></a>`; }).join("")}</div></section>`;
  $("app").innerHTML = h;
}

/* ---------- Stadtkarte ---------- */
let MZ = 1, MSHOW = false, MDAG = false;
const DAGSVG = `<svg viewBox="0 0 420 70" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><defs><linearGradient id="bl" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f4f7fb"/><stop offset=".5" stop-color="#b9c2cf"/><stop offset="1" stop-color="#7d8794"/></linearGradient><linearGradient id="gd" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f2d27a"/><stop offset="1" stop-color="#9c7424"/></linearGradient></defs><path d="M132 24 L400 33 Q414 35 414 35 Q414 35 400 37 L132 46 Z" fill="url(#bl)" stroke="#2a3140" stroke-width="1.5"/><path d="M140 35 L398 35" stroke="#e9eef5" stroke-width="1"/><rect x="118" y="6" width="16" height="58" rx="5" fill="url(#gd)" stroke="#4d3a10" stroke-width="2"/><rect x="42" y="27" width="76" height="16" rx="4" fill="#4a2f2f" stroke="#1f1212" stroke-width="2"/><path d="M52 27 L52 43 M66 27 L66 43 M80 27 L80 43 M94 27 L94 43 M108 27 L108 43" stroke="#2b1919" stroke-width="2"/><circle cx="24" cy="35" r="19" fill="url(#gd)" stroke="#4d3a10" stroke-width="2"/><circle cx="24" cy="35" r="8" fill="#0b0d14" stroke="#4d3a10" stroke-width="2"/><circle cx="24" cy="35" r="3" fill="#ff3d9a"/></svg>`;
function renderMap(dolch){
  if(dolch) MDAG = true;
  const M = window.NIGHTS.map;
  const spots = M.spots.map((s,i)=>`<button class="mspot" style="left:${s.x}%;top:${s.y}%;width:${s.w}%;height:${s.h}%" title="${esc(s.label)}" aria-label="${esc(s.label)}" onclick="mapSpot(${i},event)"></button>`).join("");
  const byCase = {};
  M.spots.forEach((s,i)=>s.links.forEach(l=>{ (byCase[l.c] = byCase[l.c]||[]).push({l, i, s}); }));
  const list = Object.keys(byCase).sort((a,b)=>a-b).map(c=>`<div class="mlist-case"><h4>Fall ${c}</h4>${byCase[c].map(o=>`<a href="#/case/${o.l.c}/sec/${o.l.s}">${esc(o.s.label)}</a>`).join("")}</div>`).join("");
  $("app").innerHTML = `<div class="crumbs"><a onclick="goHome()">Kampagne</a> › Stadtkarte</div>
  <div class="case-head"><h1>Stadtkarte</h1><span class="meta">Crime Board City Map · tippe auf einen Ort, um zum Abschnitt zu springen</span></div>
  <div class="mtools"><button class="btn" onclick="mapZoom(-1)">−</button><span id="mzl" class="hint">${Math.round(MZ*100)} %</span><button class="btn" onclick="mapZoom(1)">+</button><button class="btn" onclick="mapZoom(0)">Einpassen</button><button class="btn" onclick="toggleDagger()">Galahads Dolch ${MDAG?"ausblenden":"einblenden"}</button><label class="hint"><input type="checkbox" ${MSHOW?"checked":""} onchange="MSHOW=this.checked;$('mapbox').classList.toggle('show',MSHOW)"> Orte markieren</label></div>
  ${MDAG?daggerHtml():""}<div class="mapscroll" id="mapscroll"><div class="mapbox ${MSHOW?"show":""}" id="mapbox" style="width:${MZ*100}%"><img src="${M.image}" alt="Stadtkarte">${spots}${MDAG?daggerEl():""}</div></div>
  <div id="mpop" class="mpop" hidden></div>
  <h3 class="blk-sh" style="margin-top:24px">Orte nach Fall</h3><div class="mlist">${list}</div>`;
  dagDrag();
}
function dagState(){ return ST.dagger || (ST.dagger = { x:50, y:50, rot:-30, size:34 }); }
function daggerEl(){ const d = dagState(); return `<div class="dagger" id="dagger" style="left:${d.x}%;top:${d.y}%;width:${d.size}%;transform:translate(-5%,-50%) rotate(${d.rot}deg);transform-origin:5.7% 50%">${DAGSVG}</div>`; }
function daggerHtml(){ const d = dagState(); return `<div class="dagbar"><b>Galahads Dolch</b><span class="hint">Ziehen = verschieben. Das Loch im Knauf (rosa Punkt) markiert den Standort von Corbin Tower, wenn der Dolch auf die Orte der beiden bekannten Gralsritter:innen ausgerichtet ist.</span><label>Drehung <input type="range" min="-180" max="180" value="${d.rot}" oninput="dagSet('rot',+this.value)"></label><label>Größe <input type="range" min="12" max="80" value="${d.size}" oninput="dagSet('size',+this.value)"></label></div>`; }
function dagSet(k,v){ dagState()[k] = v; saveState(); const e = $("dagger"); if(e){ const d = dagState(); e.style.width = d.size+"%"; e.style.transform = `translate(-5%,-50%) rotate(${d.rot}deg)`; } }
function toggleDagger(){ MDAG = !MDAG; renderMap(); }
function dagDrag(){
  const e = $("dagger"); if(!e) return; const box = $("mapbox");
  e.onpointerdown = ev => { ev.preventDefault(); e.setPointerCapture(ev.pointerId); const d = dagState(); const r = box.getBoundingClientRect(); const sx = ev.clientX, sy = ev.clientY, ox = d.x, oy = d.y;
    e.onpointermove = m => { d.x = Math.min(100, Math.max(0, ox + (m.clientX-sx)/r.width*100)); d.y = Math.min(100, Math.max(0, oy + (m.clientY-sy)/r.height*100)); e.style.left = d.x+"%"; e.style.top = d.y+"%"; };
    e.onpointerup = () => { e.onpointermove = null; saveState(); }; };
}
function mapZoom(d){ MZ = d===0 ? 1 : Math.min(4, Math.max(1, MZ + d*0.5)); $("mapbox").style.width = (MZ*100)+"%"; $("mzl").textContent = Math.round(MZ*100)+" %"; }
function mapSpot(i, ev){
  const s = window.NIGHTS.map.spots[i];
  if(s.links.length===1){ location.hash = `#/case/${s.links[0].c}/sec/${s.links[0].s}`; return; }
  const pop = $("mpop"); pop.hidden = false;
  pop.innerHTML = `<b>${esc(s.label)}</b>` + s.links.map(l=>`<a href="#/case/${l.c}/sec/${l.s}">${esc(l.t)}</a>`).join("") + `<button class="btn" onclick="$('mpop').hidden=true">Schließen</button>`;
}

/* ---------- Fallansicht ---------- */
let CUR = null;
function secBlocks(c, sid){
  const out = [];
  for(const pn of Object.keys(c.pages).map(Number).sort((a,b)=>a-b))
    for(const b of c.pages[pn].blocks) if(b.sec===sid && !b.skip) out.push(Object.assign({}, b, {page:b.p||pn}));
  return out.sort((a,b)=> a.page-b.page || a.i-b.i);
}
function groupNav(c){
  const groups = []; let cur = null;
  if(c.nr>=11) return c.sections.map(s=>({ name:s.title, items:[s], flat:true }));
  for(const s of c.sections){
    if(s.kind==="intro"){ cur = { name:"Überblick", items:[s] }; groups.push(cur); continue; }
    if(s.kind==="abspann"){ groups.push({ name:"Abspann", items:[s] }); cur = null; continue; }
    if(s.kind==="layer"){ cur = { name:s.title, items:[s], layer:true }; groups.push(cur); continue; }
    if(!cur){ cur = { name:"Hintergrund", items:[] }; groups.push(cur); }
    cur.items.push(s);
  }
  return groups;
}
function chapterOf(c, sid){
  const gs = groupNav(c);
  return gs.find(g=>g.items.some(s=>s.id===sid)) || gs[0];
}
function chapterTitle(g){ return g.layer ? g.items[0].title : g.name; }
function navLbl(t){ const m = /^(Schicht\s*\d+)\s*:\s*(.+)$/i.exec(t); return m ? `<small class="lbl">${esc(m[1])}</small>${esc(m[2])}` : esc(t); }
function renderCase(c, sid){
  CUR = c;
  const gs = groupNav(c);
  const toEis = sid==="__eisberg";
  let ch = toEis ? gs[0] : chapterOf(c, sid);
  CURCH = ch;
  let nav = `<div class="nav-head"><h4>${c.nr<11?"Fall "+c.nr:"Buchteil"}</h4><button class="nav-toggle" onclick="toggleNav()" title="Menü einklappen" aria-label="Menü einklappen">«</button></div>`;
  let rail = `<button class="nav-toggle" onclick="toggleNav()" title="Menü ausklappen" aria-label="Menü ausklappen">»</button>`;
  gs.forEach(g=>{ rail += `<button class="dot ${g.items[0].id===ch.items[0].id?"on":""}" title="${esc(chapterTitle(g))}" aria-label="${esc(chapterTitle(g))}" onclick="location.hash='#/case/${c.nr}/sec/${g.items[0].id}'"></button>`; });
  gs.forEach((g,i)=>{ nav += `<button class="${g.items[0].id===ch.items[0].id?"on":""}" onclick="location.hash='#/case/${c.nr}/sec/${g.items[0].id}'">${navLbl(chapterTitle(g))}<small>Seite ${g.items[0].page}</small></button>`; });
  const sel = gs.map(g=>`<option value="${g.items[0].id}"${g.items[0].id===ch.items[0].id?" selected":""}>${esc(chapterTitle(g))}</option>`).join("");
  const idx = gs.findIndex(g=>g.items[0].id===ch.items[0].id), prev = gs[idx-1], next = gs[idx+1];
  OPENSID = (!toEis && sid) ? sid : null;
  let body = chapterView(c, ch);
  { const nk=c.nr+":"+ch.items[0].id; body += `<details class="mini-notes" ${ST.notes[nk]?"open":""}><summary>✎ Notizen</summary><textarea oninput="setNote('${nk}',this.value)" placeholder="Eigene Notizen …">${esc(ST.notes[nk]||"")}</textarea></details>`; }
  const pgA=(cls,href,lbl,t,arr)=>`<a class="${cls}" href="${href}"><span class="pg-arrow">${arr}</span><span class="pg-txt"><small>${lbl}</small><b>${esc(t)}</b></span></a>`;
  body += `<nav class="pager">${prev?pgA("pg-prev",`#/case/${c.nr}/sec/${prev.items[0].id}`,"Zurück",chapterTitle(prev),"←"):""}${next?pgA("pg-next",`#/case/${c.nr}/sec/${next.items[0].id}`,"Weiter",chapterTitle(next),"→"):""}</nav>`;
  $("app").innerHTML = `<div class="crumbs"><a onclick="goHome()">Kampagne</a> › ${esc(c.level)} › ${c.nr<11?"Fall "+c.nr:esc(c.title)}</div>
  ${idx===0?`<div class="case-head"><h1>${esc(c.title)}</h1><span class="meta">${c.subtitle?esc(c.subtitle)+" · ":""}Seiten ${c.from}–${c.to}</span></div>`:""}
  <div class="navbar"><select onchange="selNav(this.value)" aria-label="Kapitel">${sel}</select></div>
  <div class="case-grid ${ST.navHidden?"nav-off":""}"><aside class="nav">${nav}</aside><aside class="rail">${rail}</aside><main class="content">${body}</main></div>`;
  if(window.glossarize) glossarize($("app"));
  const target = (!toEis && sid && ch.items[0].id!==sid) ? $("s-"+sid) : (toEis ? $("eisberg") : null);
  if(target) setTimeout(()=>target.scrollIntoView({block:"start"}),30);
}
let CURCH = null;
function toggleNav(){ ST.navHidden = !ST.navHidden; saveState(); const g = document.querySelector('.case-grid'); if(g) g.classList.toggle('nav-off', !!ST.navHidden); }
function selNav(v){ if(v) location.hash = `#/case/${CUR.nr}/sec/${v}`; }
function pageRange(c, sec, nextSec){ const a = sec.page, b = nextSec ? nextSec.page : c.to; return b>a ? `${a}–${b}` : `${a}`; }
let OPENSID = null;
function toggleSec(el){ el.closest('.chsec').classList.toggle('open'); }
function chapterView(c, ch){
  const first = ch.items[0];
  const k0 = !ch.flat && (ch.layer || first.kind==="intro");
  const ns0 = c.sections[c.sections.indexOf(first)+1];
  let h = `<div class="sec-title"><h2>${esc(chapterTitle(ch))}</h2>${k0?`<button class="pagetag" onclick="openPageViewer(${first.page})">Seite ${pageRange(c,first,ns0)}</button>`:""}</div>`;
  if(ch.items.length>1) h += `<div class="toc">${ch.items.slice(ch.layer||first.kind==="intro"?1:0).map(s=>`<a href="#/case/${c.nr}/sec/${s.id}">${esc(s.title)}</a>`).join("")}</div>`;
  const coverFig = (first.kind==="intro") ? (c.figures||[]).filter(f=>f.kind==="art" && figSec(c,f)===first.id).sort((a,b)=>a.page-b.page)[0] : null;
  if(coverFig) h += `<div class="cover-top">${figHtml(coverFig)}</div>`;
  if(c.eisberg && (first.kind==="intro")) h += `<div id="eisberg">${eisbergView(c)}</div>`;
  ch.items.forEach((sec,k)=>{
    const sub = !ch.flat && !(ch.layer && k===0) && !(first.kind==="intro" && k===0);
    const subCount = ch.items.filter((x,kk)=>!ch.flat && !(ch.layer && kk===0) && !(first.kind==="intro" && kk===0)).length, single = sub && subCount===1;
    const nextSec = c.sections[c.sections.indexOf(sec)+1];
    h += `<section class="chsec${sub&&!single?" coll":""}${sub&&sec.id===OPENSID?" open":""}" id="s-${sec.id}">`;
    if(sub) h += `<h3 class="sec-sub"${single?"":` onclick="toggleSec(this)"`}>${single?"":`<span class="chev">▸</span>`}${esc(sec.title)}<button class="pagetag" onclick="event.stopPropagation();openPageViewer(${sec.page})">Seite ${pageRange(c,sec,nextSec)}</button></h3>${single?"":`<div class="chbody">`}`;
    else if(!(k0 && k===0)) h += `<div class="pagetag-row"><button class="pagetag" onclick="openPageViewer(${sec.page})">Seite ${pageRange(c,sec,nextSec)}</button></div>`;
    const blocks = secBlocks(c, sec.id);
    for(const f of (c.figures||[])) if(f.kind!=="eisberg" && f!==coverFig && figSec(c,f)===sec.id) h += figHtml(f);
    for(const b of blocks) h += blockHtml(c, b);
    if(c.nr===10 && (sec.id==='die-zweite-gralsritter-in' || sec.id==='parkside-cafe')) h += `<a class="btn" href="#/map/dolch">🗺 Galahads Dolch auf der Stadtkarte legen</a>`;
    if(sub&&!single) h += `</div>`;
    h += `</section>`;
  });
  return h;
}
function figSec(c, f){ if(f.sec) return f.sec; let best=null; for(const s of c.sections) if(s.page<=f.page) best=s; return best&&best.id; }
function mark(x){ return x.replace(/<t>/g,"<t>"); }
function blockHtml(c, b, idx){
  const k = `${c.nr}:${b.p||b.page}:${b.i}`;
  switch(b.t){
    case "h": return `<h3 class="blk blk-h">${b.x}</h3>`;
    case "sh": return `<div class="blk blk-sh">${b.x}</div>`;
    case "ro": return `<div class="blk blk-ro">${b.x}</div>`;
    case "card": { const d = ST.done[k]; return `<div class="blk blk-card ${b.k==="pink"?"pink":""} ${d?"done":""}"><button class="tick" onclick="toggleDone('${k}',this)" aria-label="Hinweis abhaken"></button>${b.x}</div>`; }
    case "threat": return threatHtml(c, b);
    default: return `<p class="blk blk-p">${b.x}</p>`;
  }
}
function parseLimits(sp){
  return (sp||"").split(" / ").map(x=>{ x=x.trim(); const fix = l => l.replace(/(\S)- (\S)/g,'$1$2').trim(); const m = x.match(/^\(?(.*?)\s+(\d+)\)?$/); if(m) return { label:fix(m[1]), max:+m[2] }; const d = x.match(/^\(?(.*?)\s+[–—-]\)?$/); return d ? { label:fix(d[1]), max:0 } : null; }).filter(Boolean);
}
function cap(t){ return t.charAt(0)+t.slice(1).toLowerCase(); }
function threatHtml(c, b){
  const key = `${c.nr}:${b.name}`;
  const lims = parseLimits(b.spectra);
  const nstars = (b.stars||"").length;
  const rows = lims.map((l,i)=>{
    if(!l.max) return `<div class="limit-row nolimit"><span class="limit-label">${esc(cap(l.label))}</span><span class="limit-controls"><span class="limit-count" title="Dieser Zustand trifft die Bedrohung nicht">– (kein Limit)</span></span></div>`;
    const k = key+":"+i, arr = limArr(k), cur = arr.length ? Math.max(...arr) : 0; let pips = "";
    for(let n=1;n<=l.max;n++) pips += `<button class="pip ${arr.includes(n)?"filled":""}" onclick="setLimit('${k.replace(/'/g,"\\'")}',${n},${l.max},this)" aria-label="${n} von ${l.max}"></button>`;
    return `<div class="limit-row"><span class="limit-label">${esc(cap(l.label))}</span><span class="limit-controls"><span class="pips">${pips}</span><span class="limit-count">${cur} / ${l.max}</span><button class="limit-reset" onclick="resetLimit('${k.replace(/'/g,"\\'")}',this)" title="Zurücksetzen">↺</button></span></div>`;
  }).join("");
  const sub = i => { const a = i.split(/\s*»\s*/); return a.length>1 ? a[0].replace(/[:\s]+$/,'')+(a[0].trim()?':':'')+`<ul class="th-nest">${a.slice(1).map(x=>`<li>${x}</li>`).join('')}</ul>` : i; };
  const items = (b.items||[]).map(sub);
  const specials = items.filter(i=>/^<b>/.test(i)), moves = items.filter(i=>!/^<b>/.test(i));
  return `<div class="blk threat ${nstars>=4?"boss":""}"><span class="pin"></span><div class="threat-head"><b>${esc(b.name)}</b><span class="stars">${esc(b.stars||"")}</span></div>${b.desc?`<p class="th-desc">${b.desc}</p>`:""}${rows?`<div class="limit-block">${rows}${lims.filter(l=>l.max).length>1?`<button class="limit-all" onclick="resetAllLimits('${esc(key).replace(/'/g,"\\'")}',${lims.length},this)">Alle zurücksetzen (Szenenende)</button>`:""}</div>`:(b.spectra?`<div class="spectra">${esc(b.spectra)}</div>`:"")}${specials.length?`<ul class="th-spec">${specials.map(i=>`<li>${i}</li>`).join("")}</ul>`:""}${moves.length?`<div class="th-sub">Aktionen der Spielleitung</div><ul class="th-moves">${moves.map(i=>`<li>${i}</li>`).join("")}</ul>`:""}</div>`;
}
function limArr(k){ const v = ST.limits[k]; if(Array.isArray(v)) return v; if(typeof v==="number" && v>0){ const a=[]; for(let i=1;i<=v;i++) a.push(i); ST.limits[k]=a; return a; } return []; }
function limSync(row, arr, max){ row.querySelectorAll(".pip").forEach((p,i)=>p.classList.toggle("filled", arr.includes(i+1))); row.querySelector(".limit-count").textContent = (arr.length?Math.max(...arr):0)+" / "+max; }
function setLimit(k, n, max, btn){ const arr = limArr(k).slice(), pos = arr.indexOf(n); if(pos>=0) arr.splice(pos,1); else arr.push(n); ST.limits[k] = arr; saveState(); limSync(btn.closest(".limit-row"), arr, max); }
function resetLimit(k, btn){ ST.limits[k] = []; saveState(); const row = btn.closest(".limit-row"); limSync(row, [], row.querySelectorAll(".pip").length); }
function resetAllLimits(key, n, btn){ const blk = btn.closest(".limit-block"); for(let i=0;i<n;i++) ST.limits[key+":"+i] = []; saveState(); blk.querySelectorAll(".limit-row:not(.nolimit)").forEach(r=>limSync(r, [], r.querySelectorAll(".pip").length)); }
function toggleDone(k, btn){ ST.done[k] = !ST.done[k]; saveState(); btn.parentElement.classList.toggle("done", !!ST.done[k]); }
function setNote(k, v){ ST.notes[k] = v; saveState(); }
function figHtml(f){ return `<figure class="fig ${f.kind}"><img loading="lazy" src="${f.file}" alt="${esc(f.title)}" onclick="openPageViewer(${f.page})"><figcaption>${esc(f.title)} · Seite ${f.page}</figcaption></figure>`; }

/* Eisberg: Seitenprozent -> Ausschnittsprozent */
function eisbergView(c){
  const E = c.eisberg, fig = c.figures.find(f=>f.id===E.fig);
  const size = c.pages[E.page].size || [595, 842];
  const [x0,y0,x1,y1] = fig.box, W = x1-x0, H = y1-y0;
  let hot = "";
  E.nodes.forEach((n,i)=>{
    const cx = n.x/100*size[0], cy = n.y/100*size[1], w = n.w/100*size[0], h = n.h/100*size[1];
    const l = (cx-w/2-x0)/W*100, t = (cy-h/2-y0)/H*100;
    hot += `<button class="hot ${ST.seen[c.nr+":"+n.label]?"seen":""}" style="left:${l}%;top:${t}%;width:${w/W*100}%;height:${h/H*100}%" title="${esc(n.label)}" aria-label="${esc(n.label)}" onclick="gotoNode(${i})"></button>`;
  });
  const list = E.nodes.map((n,i)=>`<button onclick="gotoNode(${i})"><small>Schicht ${n.layer}</small>${esc(n.label)}</button>`).join("");
  return `<h3 class="sec-sub">Der Eisberg<button class="pagetag" onclick="openPageViewer(${E.page})">Seite ${E.page}</button></h3><p class="hint">Auf ein Foto tippen, um zum Abschnitt zu springen.</p><div class="eis-wrap"><img src="${fig.file}" alt="Eisberg">${hot}</div>`;
}
function gotoNode(i){ const n = CUR.eisberg.nodes[i]; ST.seen[CUR.nr+":"+n.label] = 1; saveState(); location.hash = `#/case/${CUR.nr}/sec/${n.target}`; }

/* ---------- Modale ---------- */
function openModal(id){ $(id).classList.add("show"); }
function closeModal(id){ $(id).classList.remove("show"); }
function openSettings(){ openModal("settingsModal"); }
function exportState(){ const a = document.createElement("a"); a.href = URL.createObjectURL(new Blob([JSON.stringify(ST,null,1)],{type:"application/json"})); a.download = "nights-spielstand.json"; a.click(); }
function importState(inp){ const f = inp.files[0]; if(!f) return; f.text().then(t=>{ try{ ST = Object.assign(loadState(), JSON.parse(t)); saveState(); route(); closeModal("settingsModal"); }catch(e){ alert("Datei konnte nicht gelesen werden."); } }); }
function resetState(){ if(confirm("Spielstand wirklich zurücksetzen?")){ ST = { cases:{}, done:{}, notes:{}, last:null, seen:{}, limits:{}, dagger:null }; saveState(); closeModal("settingsModal"); route(); } }

/* ---------- Suche ---------- */
function stripTags(s){ return s.replace(/<[^>]+>/g,""); }
function openSearch(){ openModal("searchModal"); setTimeout(()=>$("searchInput").focus(),50); }
function runSearch(q){
  q = q.trim().toLowerCase(); const out = $("searchResults");
  if(q.length<2){ out.innerHTML=""; $("searchCount").textContent=""; return; }
  const res = [];
  for(const n in window.NIGHTS.cases){ const c = window.NIGHTS.cases[n];
    for(const pn in c.pages) for(const b of c.pages[pn].blocks){
      const txt = stripTags(b.t==="threat" ? [b.name,b.spectra,...(b.items||[])].join(" ") : (b.x||""));
      const i = txt.toLowerCase().indexOf(q);
      if(i>=0) res.push({c, b, sec:b.sec, page:b.p||+pn, snip: txt.slice(Math.max(0,i-50), i+q.length+70), i, q});
    } }
  $("searchCount").textContent = res.length + " Treffer" + (res.length>60?" (die ersten 60)":"") + (Object.keys(window.NIGHTS.cases).length<10?" · nur geladene Fälle":"");
  out.innerHTML = res.slice(0,60).map(r=>{
    const s = esc(r.snip), re = new RegExp(esc(r.q).replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),"ig");
    return `<button class="sr" onclick="closeModal('searchModal');location.hash='#/case/${r.c.nr}/sec/${r.sec}'"><small>Fall ${r.c.nr} · Seite ${r.page}</small><br>…${s.replace(re,m=>`<mark>${m}</mark>`)}…</button>`; }).join("");
}
// Suche braucht alle Fälle: im Hintergrund nachladen
function preloadAll(){ READY.forEach(loadCase); }

/* ---------- Seitenviewer ---------- */
let PV = 1;
function openPageViewer(n, silent){ PV = Math.min(PAGES_TOTAL, Math.max(1, +n||PV)); BV.open("nights", PV); }
function closePageViewer(){ $("pageViewer").hidden = true; document.body.classList.remove("menu-open"); if(parseHash()[0]==="pages") history.back(); }
function pvShow(){ $("pvImg").src = `pages/p${pad(PV)}.webp`; $("pvNum").value = PV; $("pvStage").scrollTop = 0; }
function pvStep(d){ PV = Math.min(PAGES_TOTAL, Math.max(1, PV+d)); pvShow(); }
function pvGo(n){ PV = Math.min(PAGES_TOTAL, Math.max(1, n||1)); pvShow(); }
function pvZoom(){ $("pvStage").classList.toggle("zoom"); }
document.addEventListener("keydown", e=>{
  if(!$("pageViewer").hidden){ if(e.key==="ArrowRight") pvStep(1); else if(e.key==="ArrowLeft") pvStep(-1); else if(e.key==="Escape") closePageViewer(); }
  else if(e.key==="Escape"){ closeModal("searchModal"); closeModal("settingsModal"); }
});

/* ---------- Start ---------- */
if("serviceWorker" in navigator) navigator.serviceWorker.register("../sw.js").catch(()=>{});
try{ localStorage.setItem("gm_tool_mode_v1","paynetown"); }catch(e){}
route();
setTimeout(preloadAll, 800);


/* ---------- Register: Bedrohungen/Personen/Orte + Notizenübersicht ---------- */
var REG = null;
async function buildRegister(){
  if(REG) return REG;
  const items = [], loaded = {};
  for(const n of READY){ const c = await loadCase(n); if(!c) continue; loaded[n] = c;
    const secOf = pg => { let b = null; for(const sc of c.sections) if(sc.page<=pg) b = sc; return b && b.id; };
    const seen = {};
    for(const pg in c.pages){ for(const b of (c.pages[pg].blocks||[])){ if(b.t==="threat" && b.name){ const k = b.name+"|"+pg; if(seen[k]) continue; seen[k]=1; items.push({kind:"leute", name:b.name.replace(/\s+/g," ").replace(/[\s+\/&]+$/,"").trim(), stars:b.stars||"", nr:n, page:+pg, sec:secOf(+pg)}); } } }
    if(c.eisberg) for(const nd of c.eisberg.nodes) items.push({kind:"orte", name:nd.label, stars:"", nr:n, page:c.eisberg.page, sec:nd.target, layer:nd.layer});
  }
  REG = {items, loaded}; return REG;
}
function regLink(it){ return `#/case/${it.nr}/sec/${it.sec}`; }
async function renderRegister(tab){
  $("app").innerHTML = '<div class="missing">Lade Register …</div>';
  const R = await buildRegister();
  const tabs = [["leute","Bedrohungen & Personen"],["orte","Eisberg-Einträge"],["notizen","Notizen"]];
  let h = `<div class="crumbs"><a onclick="goHome()">Kampagne</a> › Register</div><div class="case-head"><h1>Register</h1></div><div class="reg-tabs">${tabs.map(t=>`<button class="${t[0]===tab?"on":""}" onclick="location.hash='#/register/${t[0]}'">${t[1]}</button>`).join("")}</div>`;
  if(tab==="notizen"){
    const rows = Object.keys(ST.notes).filter(k=>(ST.notes[k]||"").trim()).map(k=>{ const [nr,sid] = k.split(":"); const c = R.loaded[+nr]; const sec = c && c.sections.find(x=>x.id===sid); return {nr:+nr, sid, title: sec?sec.title:sid, text:ST.notes[k], page: sec?sec.page:0}; }).sort((a,b)=>a.nr-b.nr||a.page-b.page);
    h += rows.length ? `<div class="reg-list">${rows.map(r=>`<a class="reg-note" href="#/case/${r.nr}/sec/${r.sid}"><small>${r.nr<11?"Fall "+r.nr:"Buch"} · ${esc(r.title)}</small><span>${esc(r.text)}</span></a>`).join("")}</div>` : `<div class="missing">Noch keine Notizen. Notizen schreibst du unten in jedem Kapitel.</div>`;
  } else {
    h += `<input class="search-input reg-filter" id="regFilter" placeholder="Filtern …" oninput="regFilter(this.value)" autocomplete="off"><div class="reg-list" id="regList">${R.items.filter(i=>i.kind===tab).sort((a,b)=>a.name.localeCompare(b.name,"de")).map(it=>`<a class="reg-row" href="${regLink(it)}" data-q="${esc(it.name.toLowerCase())}"><b>${esc(it.name)}</b><span class="stars">${esc(it.stars)}</span><small>${it.nr<11?"Fall "+it.nr:"Buch"} · Seite ${it.page}${it.layer!=null?" · Schicht "+it.layer:""}</small></a>`).join("")}</div>`;
  }
  $("app").innerHTML = h;
}
function regFilter(q){ q = q.trim().toLowerCase(); document.querySelectorAll("#regList .reg-row").forEach(r=>{ r.style.display = !q || r.dataset.q.includes(q) ? "" : "none"; }); }
