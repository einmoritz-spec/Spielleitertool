/* Nights of Paynetown – Oberfläche. Zustand: localStorage nights_state_v1 */
const STATE_KEY = "nights_state_v1";
const PAGES_TOTAL = 296;
const READY = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]; // erfasste Fälle
const $ = id => document.getElementById(id);
const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const pad = (n, l=3) => String(n).padStart(l, "0");
let ST = loadState();
function loadState(){ try{ return Object.assign({ cases:{}, done:{}, notes:{}, last:null, seen:{}, limits:{} }, JSON.parse(localStorage.getItem(STATE_KEY)||"{}")); }catch(e){ return { cases:{}, done:{}, notes:{}, last:null, seen:{}, limits:{} }; } }
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
function renderCase(c, sid){
  CUR = c;
  const gs = groupNav(c);
  const toEis = sid==="__eisberg";
  let ch = toEis ? gs[0] : chapterOf(c, sid);
  CURCH = ch;
  let nav = `<h4>${c.nr<11?"Fall "+c.nr:"Buchteil"}</h4>`;
  gs.forEach((g,i)=>{ nav += `<button class="${g.items[0].id===ch.items[0].id?"on":""}" onclick="location.hash='#/case/${c.nr}/sec/${g.items[0].id}'">${esc(chapterTitle(g))}<small>Seite ${g.items[0].page}${g.items.length>1?" · "+g.items.length+" Abschnitte":""}</small></button>`; });
  const sel = gs.map(g=>`<option value="${g.items[0].id}"${g.items[0].id===ch.items[0].id?" selected":""}>${esc(chapterTitle(g))}</option>`).join("");
  const idx = gs.findIndex(g=>g.items[0].id===ch.items[0].id), prev = gs[idx-1], next = gs[idx+1];
  let body = chapterView(c, ch);
  body += `<div class="notes"><h3 class="blk-sh">Notizen</h3><textarea oninput="setNote('${c.nr}:${ch.items[0].id}',this.value)" placeholder="Eigene Notizen zu diesem Kapitel …">${esc(ST.notes[c.nr+":"+ch.items[0].id]||"")}</textarea></div>`;
  body += `<div class="secfoot">${prev?`<a class="btn" href="#/case/${c.nr}/sec/${prev.items[0].id}">‹ ${esc(chapterTitle(prev))}</a>`:"<span></span>"}${next?`<a class="btn" href="#/case/${c.nr}/sec/${next.items[0].id}">${esc(chapterTitle(next))} ›</a>`:"<span></span>"}</div>`;
  $("app").innerHTML = `<div class="crumbs"><a onclick="goHome()">Kampagne</a> › ${esc(c.level)} › ${c.nr<11?"Fall "+c.nr:esc(c.title)}</div>
  <div class="case-head"><h1>${esc(c.title)}</h1><span class="meta">${c.subtitle?esc(c.subtitle)+" · ":""}Seiten ${c.from}–${c.to}</span></div>
  <div class="navbar"><select onchange="selNav(this.value)" aria-label="Kapitel">${sel}</select></div>
  <div class="case-grid"><aside class="nav">${nav}</aside><main class="content">${body}</main></div>`;
  const target = (!toEis && sid && ch.items[0].id!==sid) ? $("s-"+sid) : (toEis ? $("eisberg") : null);
  if(target) setTimeout(()=>target.scrollIntoView({block:"start"}),30);
}
let CURCH = null;
function selNav(v){ if(v) location.hash = `#/case/${CUR.nr}/sec/${v}`; }
function pageRange(c, sec, nextSec){ const a = sec.page, b = nextSec ? nextSec.page : c.to; return b>a ? `${a}–${b}` : `${a}`; }
function chapterView(c, ch){
  const first = ch.items[0];
  let h = `<div class="sec-title"><h2>${esc(chapterTitle(ch))}</h2></div>`;
  if(ch.items.length>1) h += `<div class="toc">${ch.items.slice(ch.layer||first.kind==="intro"?1:0).map(s=>`<a href="#/case/${c.nr}/sec/${s.id}">${esc(s.title)}</a>`).join("")}</div>`;
  if(c.eisberg && (first.kind==="intro")) h += `<div id="eisberg">${eisbergView(c)}</div>`;
  ch.items.forEach((sec,k)=>{
    const sub = !ch.flat && !(ch.layer && k===0) && !(first.kind==="intro" && k===0);
    const nextSec = c.sections[c.sections.indexOf(sec)+1];
    h += `<section class="chsec" id="s-${sec.id}">`;
    if(sub) h += `<h3 class="sec-sub">${esc(sec.title)}<button class="pagetag" onclick="openPageViewer(${sec.page})">Seite ${pageRange(c,sec,nextSec)}</button></h3>`;
    else h += `<div class="pagetag-row"><button class="pagetag" onclick="openPageViewer(${sec.page})">Seite ${pageRange(c,sec,nextSec)}</button></div>`;
    const blocks = secBlocks(c, sec.id);
    for(const f of (c.figures||[])) if(f.kind!=="eisberg" && figSec(c,f)===sec.id) h += figHtml(f);
    for(const b of blocks) h += blockHtml(c, b);
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
  return (sp||"").split(" / ").map(x=>{ x=x.trim(); const m = x.match(/^\(?(.*?)\s+(\d+)\)?$/); return m ? { label:m[1].replace(/(\S)- (\S)/g,'$1$2').trim(), max:+m[2] } : null; }).filter(Boolean);
}
function cap(t){ return t.charAt(0)+t.slice(1).toLowerCase(); }
function threatHtml(c, b){
  const key = `${c.nr}:${b.name}`;
  const lims = parseLimits(b.spectra);
  const nstars = (b.stars||"").length;
  const rows = lims.map((l,i)=>{
    const k = key+":"+i, cur = ST.limits[k]||0; let pips = "";
    for(let n=1;n<=l.max;n++) pips += `<button class="pip ${n<=cur?"filled":""}" onclick="setLimit('${k.replace(/'/g,"\\'")}',${n},${l.max},this)" aria-label="${n} von ${l.max}"></button>`;
    return `<div class="limit-row"><span class="limit-label">${esc(cap(l.label))}</span><span class="limit-controls"><span class="pips">${pips}</span><span class="limit-count">${cur} / ${l.max}</span><button class="limit-reset" onclick="resetLimit('${k.replace(/'/g,"\\'")}',this)" title="Zurücksetzen">↺</button></span></div>`;
  }).join("");
  const items = b.items||[];
  const specials = items.filter(i=>/^<b>/.test(i)), moves = items.filter(i=>!/^<b>/.test(i));
  return `<div class="blk threat ${nstars>=4?"boss":""}"><span class="pin"></span><div class="threat-head"><b>${esc(b.name)}</b><span class="stars">${esc(b.stars||"")}</span></div>${b.desc?`<p class="th-desc">${b.desc}</p>`:""}${rows?`<div class="limit-block">${rows}</div>`:(b.spectra?`<div class="spectra">${esc(b.spectra)}</div>`:"")}${specials.length?`<ul class="th-spec">${specials.map(i=>`<li>${i}</li>`).join("")}</ul>`:""}${moves.length?`<div class="th-sub">Aktionen der Spielleitung</div><ul class="th-moves">${moves.map(i=>`<li>${i}</li>`).join("")}</ul>`:""}</div>`;
}
function setLimit(k, n, max, btn){ const cur = ST.limits[k]||0; const v = cur===n ? n-1 : n; ST.limits[k] = v; saveState(); const row = btn.closest(".limit-row"); row.querySelectorAll(".pip").forEach((p,i)=>p.classList.toggle("filled", i<v)); row.querySelector(".limit-count").textContent = v+" / "+max; }
function resetLimit(k, btn){ ST.limits[k] = 0; saveState(); const row = btn.closest(".limit-row"); row.querySelectorAll(".pip").forEach(p=>p.classList.remove("filled")); const t = row.querySelector(".limit-count"); t.textContent = "0 / "+t.textContent.split("/")[1].trim(); }
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
  return `<h3 class="sec-sub">Der Eisberg<button class="pagetag" onclick="openPageViewer(${E.page})">Seite ${E.page}</button></h3><p class="hint">Auf ein Foto tippen, um zum Abschnitt zu springen.</p><div class="eis-wrap"><img src="${fig.file}" alt="Eisberg">${hot}</div><div class="nodelist">${list}</div>`;
}
function gotoNode(i){ const n = CUR.eisberg.nodes[i]; ST.seen[CUR.nr+":"+n.label] = 1; saveState(); location.hash = `#/case/${CUR.nr}/sec/${n.target}`; }

/* ---------- Modale ---------- */
function openModal(id){ $(id).classList.add("show"); }
function closeModal(id){ $(id).classList.remove("show"); }
function openSettings(){ openModal("settingsModal"); }
function exportState(){ const a = document.createElement("a"); a.href = URL.createObjectURL(new Blob([JSON.stringify(ST,null,1)],{type:"application/json"})); a.download = "nights-spielstand.json"; a.click(); }
function importState(inp){ const f = inp.files[0]; if(!f) return; f.text().then(t=>{ try{ ST = Object.assign(loadState(), JSON.parse(t)); saveState(); route(); closeModal("settingsModal"); }catch(e){ alert("Datei konnte nicht gelesen werden."); } }); }
function resetState(){ if(confirm("Spielstand wirklich zurücksetzen?")){ ST = { cases:{}, done:{}, notes:{}, last:null, seen:{}, limits:{} }; saveState(); closeModal("settingsModal"); route(); } }

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
function openPageViewer(n, silent){ PV = Math.min(PAGES_TOTAL, Math.max(1, +n||PV)); $("pageViewer").hidden = false; document.body.classList.add("menu-open"); pvShow(); }
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
