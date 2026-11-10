/* ============================================================
   STATE
   ============================================================ */
const state = {
  view:"overview", // overview | district | case
  districtId:null,
  activeDepth:0,
  pips:{}, // key -> array of booleans
  openDangers:{}, // dangerKey -> bool, persists open/closed across renders
  caseComplete:{}, // caseTitle -> bool
};

function loadPips(){
  try{ const raw = localStorage.getItem("ll_pips"); if(raw) state.pips = JSON.parse(raw); }catch(e){}
  try{ const raw2 = localStorage.getItem("ll_complete"); if(raw2) state.caseComplete = JSON.parse(raw2); }catch(e){}
}
function savePips(){
  try{ localStorage.setItem("ll_pips", JSON.stringify(state.pips)); }catch(e){}
}
function saveComplete(){
  try{ localStorage.setItem("ll_complete", JSON.stringify(state.caseComplete)); }catch(e){}
}
loadPips();

/* Seitenlinks hinter Überschriften (Daten: Inhaltsverzeichnis in guide.js) */
function tocEntry(id,isCase){ const es=(GUIDE.tableOfContents&&GUIDE.tableOfContents.entries)||[]; return es.find(x=>x.id===id && !!x.isCase===!!isCase && !x.isVillain); }
function tocPage(id,isCase,prefix){ const e=tocEntry(id,isCase); if(!e) return 0; if(!prefix) return e.page; const m=(e.sub||[]).find(x=>x[0].indexOf(prefix)===0); return m?m[1]:0; }
function pgA(n){ return n?` <a class="pg-link" href="#" data-page="${n}" title="Originalseite im Buch ansehen">S. ${n}</a>`:""; }
let LL_TAIL = null;
function tabHead(title,n){ LL_TAIL = {title:title, n:n}; return ""; }
function llTail(h){ const t = LL_TAIL; LL_TAIL = null; if(!t) return h; const link = `<span class="sep">/</span>` + (t.n ? `<a class="pg-link" href="#" data-page="${t.n}" title="S. ${t.n} im Buch öffnen">${t.title}</a>` : `<span>${t.title}</span>`); return h.replace(/(<div class="crumb">[\s\S]*?)<\/div>/, "$1"+link+"</div>"); }

function goOverview(){ state.view="overview"; state.districtId=null; render(); window.scrollTo(0,0); }
function goDistrict(id){ state.view="district"; state.districtId=id; state.distTab="overview"; render(); window.scrollTo(0,0); }
function goGuide(){ state.view="guide"; render(); window.scrollTo(0,0); }
function goVillain(id){ state.view="villain"; state.villainId=id; render(); window.scrollTo(0,0); }
function goAppendix(tab){ state.view="appendix"; state.appTab=tab||"mythoi"; state.appQ=""; render(); window.scrollTo(0,0); }
function goCase(id){ state.view="case"; state.districtId=id; state.caseTab="overview"; render(); window.scrollTo(0,0); }

/* ============================================================
   RENDER: ÜBERSICHT
   ============================================================ */
function render(){
  const app = document.getElementById("app");
  app.classList.toggle("wide-case", state.view==="case");
  if(state.view==="overview") app.innerHTML = renderOverview();
  else if(state.view==="district") app.innerHTML = renderDistrictView(state.districtId);
  else if(state.view==="case") app.innerHTML = renderCaseView(state.districtId);
  else if(state.view==="guide") app.innerHTML = renderGuide();
  else if(state.view==="villain") app.innerHTML = renderVillain(state.villainId);
  else if(state.view==="appendix") app.innerHTML = renderAppendix();
  else if(state.view==="npcs") app.innerHTML = renderNpcs();
  else if(state.view==="player") app.innerHTML = renderPlayerView();
  { const cr=app.querySelector(".crumb"); if(cr) cr.scrollLeft=cr.scrollWidth; const tb=app.querySelector(".case-tabbar"), at=tb&&tb.querySelector(".case-tab.active"); if(tb&&at) tb.scrollLeft=at.offsetLeft-(tb.clientWidth-at.clientWidth)/2; }
  buildGlossList();
  buildRulesList();
  { const sc = app.querySelector('.case-tabpanel')||app, cs = sc.querySelectorAll('.loc-card'); if(cs.length===1) cs[0].classList.add('single','open'); }
  const caseBtn = document.getElementById("tb-case-btn");
  if(caseBtn){
    const dist = DISTRICTS.find(d=>d.id===state.districtId);
    const showBtn = (state.view==="district" || state.view==="case") && dist && dist.data;
    caseBtn.style.display = showBtn ? "flex" : "none";
    if(showBtn) caseBtn.textContent = state.view==="case" ? "📁 " + dist.data.case.title : "📁 Fall öffnen";
  }
  markLongTexts();
  linkNamePages();
}
/* Hängt an Orte/Locals/Power Sets einen Seitenlink (aus data/pages.js) */
function linkNamePages(){
  if(state.districtId && (state.view==="case"||state.view==="district")){
    const isCase = state.view==="case";
    const H = isCase ? {"Hintergrund":"Background","Der Eisberg":"The Iceberg","Aftermath":"Aftermath"} : {"Wie man diesen Bezirk nutzt":""};
    document.querySelectorAll("#app .section-head h2").forEach(h=>{
      const t=h.textContent.trim(); if(!(t in H) || h.querySelector(".pg-link")) return;
      const n=tocPage(state.districtId,isCase,H[t]); if(n) h.insertAdjacentHTML("beforeend",pgA(n));
    });
  }
  if(typeof LL_PAGES==="undefined" || !state.districtId) return;
  const m = LL_PAGES[state.districtId]; if(!m) return;
  // Seitenbereich des aktuellen Tabs (damit Namen nicht auf Erwähnungen in anderen Kapitelteilen verlinken)
  let lo=0, hi=9999;
  if(state.view==="district"){
    const PRE={options:"Player Options",places:"Places of Interest",locals:"Locals",chance:"Chance Encounters",powersets:"Power Sets",heists:"Heists"}[state.distTab];
    const e=tocEntry(state.districtId,false);
    if(PRE && e){ const subs=e.sub||[], i=subs.findIndex(x=>x[0].indexOf(PRE)===0); if(i>=0){ lo=subs[i][1]; hi=subs[i+1]?subs[i+1][1]:9999; if(state.distTab==="powersets") hi=9999; } }
  }
  document.querySelectorAll("#app h3, #app h4").forEach(h=>{
    if(h.querySelector(".pg-link")) return;
    const t = h.textContent.replace("📍","").replace(/\s+/g," ").trim();
    const pg = m[t]; if(!pg || pg<lo || pg>=hi) return;
    const a = document.createElement("a"); a.className="pg-link"; a.href="#"; a.dataset.page=pg; a.title="Originalseite im Buch ansehen"; a.textContent="S. "+pg;
    h.appendChild(document.createTextNode(" ")); h.appendChild(a);
  });
}
/* Sehr lange Fließtext-Absätze bekommen auf großen Bildschirmen Spalten (CSS: .long-text). */
function markLongTexts(){
  document.querySelectorAll("#app .card > p").forEach(p=>{
    p.classList.toggle("long-text", p.textContent.length > 900);
  });
}

function renderOverview(){
  let tiles = DISTRICTS.filter(d=>!d.hidden).map(d=>{
    if(d.status==="ready"){
      return `<button class="tile clickable" onclick="goDistrict('${d.id}')">
        <div class="num">BEZIRK ${String(d.num).padStart(2,"0")}</div>
        <h3>${d.title}</h3>
        <div class="sub">${d.sub||""}</div>
        <div class="teaser">${d.teaser||""}</div>
      </button>`;
    }
    return `<div class="tile locked"><span class="badge">In Vorbereitung</span>
      <div class="num">BEZIRK ${String(d.num).padStart(2,"0")}</div>
      <h3>${d.title}</h3>
      <div class="sub">${d.sub||""}</div>
      <div class="teaser">${d.teaser||""}</div>
    </div>`;
  }).join("");
  return `
    ${renderCityMap()}
    <div class="grid">${tiles}</div>
    <div class="footer-note">Quelle: City of Mist — Local Legends · Fall-Akte für den Spieltisch, kein Ersatz fürs Regelwerk.</div>
  `;
}

/* ============================================================
   BONUS: Forged & Framed, Kleinschurken, Stadtführer, Anhang
   ============================================================ */
function renderBonusTiles(){
  let h = `<div class="bonus-head"><h2>Bonus-Inhalte</h2></div><div class="grid">`;
  if(typeof FORGED_FRAMED!=="undefined") h += `<button class="tile clickable" onclick="goCase('forged_framed')"><div class="num">LANGFALL</div><h3>Forged &amp; Framed</h3><div class="sub">${FORGED_FRAMED.case.subtitle||""}</div><div class="teaser">Ein Rückwärts-Krimi: Die Crew wird als Täter*innen gejagt (Buchseiten 314–329).</div></button>`;
  if(typeof VILLAINS!=="undefined") VILLAINS.forEach(v=>{ h += `<button class="tile clickable" onclick="goVillain('${v.id}')"><div class="num">KLEINSCHURKE · ${v.mythos||""}</div><h3>${v.title}</h3><div class="sub">${v.villain||""}${v.villainRole?" — "+v.villainRole:""}</div><div class="teaser">${v.subtitle||v.tagline||""}</div></button>`; });
  if(typeof GUIDE!=="undefined") h += `<button class="tile clickable" onclick="goGuide()"><div class="num">EINLEITUNG</div><h3>Einleitung &amp; Stadtführer</h3><div class="sub">Guide to the City von Lance Sullivan</div><div class="teaser">Wie man das Buch nutzt und ein Streifzug durch alle Viertel (S. 4–12).</div></button>`;
  if(typeof APPENDIX!=="undefined") h += `<button class="tile clickable" onclick="goAppendix()"><div class="num">ANHANG</div><h3>Register</h3><div class="sub">Mythoi · Dangers · Theme Kits</div><div class="teaser">Alle Einträge des Buchs mit Seitenzahl, durchsuchbar (S. 330–343).</div></button>`;
  return h + `</div>`;
}
function crumbBonus(label){ return `<div class="crumb"><button onclick="goOverview()">Bezirke</button><span class="sep">/</span>${label}</div>`; }
function paras(a){ return (Array.isArray(a)?a:[a]).filter(Boolean).map(t=>`<p>${t}</p>`).join(""); }
function distLink(id, label){ const d = DISTRICTS.find(x=>x.id===id); return d && d.data && !d.hidden ? `<button class="btn-ghost" onclick="goDistrict('${id}')">${label||d.title} öffnen →</button>` : ""; }

function renderGuide(){
  const g = GUIDE; let h = crumbBonus("Einleitung & Stadtführer");
  h += `<div class="hero"><h1>${g.title||"Einleitung & Guide to the City"}</h1><p class="sub" style="font-style:italic;color:var(--text-faint);">Buchseiten ${g.pages||"4–12"}</p></div>`;
  const i = g.introduction; if(i) h += sectionHTML("g_intro", i.title||"Einleitung", (i.lead?`<div class="readaloud">${i.lead}</div>`:"") + paras(i.paragraphs).replace(/<p>/g,'<div class="card"><p>').replace(/<\/p>/g,"</p></div>"));
  const wb = g.whatsInBook; if(wb) h += sectionHTML("g_what", wb.title, (wb.intro?`<div class="card"><p>${wb.intro}</p></div>`:"") + wb.items.map(x=>`<div class="card">${typeof x==="string"?`<p>${x}</p>`:`<h3 style="font-size:14px;">${x.term||x.t||""}</h3><p>${x.text||x.x||""}</p>`}</div>`).join(""));
  const cb = g.crimeBoardMap; if(cb) h += sectionHTML("g_crime", cb.title, `<div class="card">${paras(cb.text)}</div>` + (cb.exampleBox?`<div class="clue-box">${cb.exampleBox}</div>`:"") + (cb.exampleNote?`<p style="font-size:11.5px;color:var(--text-faint);font-style:italic;">${cb.exampleNote}</p>`:""));
  const bc = g.bonusContent; if(bc) h += sectionHTML("g_bonus", bc.title, (bc.intro?`<div class="card"><p>${bc.intro}</p></div>`:"") + bc.items.map(x=>`<div class="card">${typeof x==="string"?`<p>${x}</p>`:`<h3 style="font-size:14px;">${x.term||x.t||x.title||""}</h3><p>${x.text||x.x||""}</p>`}</div>`).join(""));
  const hb = g.howToUseBook; if(hb) h += sectionHTML("g_how", hb.title, (hb.intro?`<div class="card"><p>${hb.intro}</p></div>`:"") + hb.items.map(x=>`<div class="card">${typeof x==="string"?`<p>${x}</p>`:`<h3 style="font-size:14px;">${x.term||x.t||x.title||""}</h3><p>${x.text||x.x||""}</p>`}</div>`).join("") + (hb.outro?`<div class="card"><p>${hb.outro}</p></div>`:""));
  const cg = g.cityGuide;
  if(cg){
    let b = `<div class="readaloud">${cg.quote||""}${cg.narrator?`<br><span style="font-size:11.5px;opacity:.7;">${cg.narrator}</span>`:""}</div>` + (cg.narratorNote?`<p style="font-size:11.5px;color:var(--text-faint);font-style:italic;">${cg.narratorNote}</p>`:"") + `<div class="card">${paras(cg.intro)}</div>`;
    b += cg.districts.map(d=>`<div class="card"><h3>${d.name} <small style="color:var(--text-faint);">S. ${d.page}</small></h3>${paras(d.text)}${distLink(d.districtId)}</div>`).join("");
    if(cg.alreadyKnow) b += `<div class="card"><h3>${cg.alreadyKnow.title||""}</h3><p style="font-style:italic;color:var(--text-faint);">${cg.alreadyKnow.subtitle||""}</p>${paras(cg.alreadyKnow.intro)}</div>` + (cg.alreadyKnow.areas||[]).map(a=>`<div class="card"><h3>${a.name}</h3>${paras(a.text)}</div>`).join("");
    if(cg.placesWorthSeeing) b += `<div class="card"><h3>${cg.placesWorthSeeing.title}</h3><p style="font-style:italic;color:var(--text-faint);">${cg.placesWorthSeeing.subtitle||""}</p>${paras(cg.placesWorthSeeing.text)}</div>`;
    if(cg.closing) b += `<div class="card">${paras(cg.closing.text)}<p style="text-align:right;font-style:italic;">${cg.closing.signature||""}</p></div>`;
    h += sectionHTML("g_city", cg.title||"Guide to the City", b);
  }
  const toc = g.tableOfContents; if(toc) h += sectionHTML("g_toc", toc.title||"Inhaltsverzeichnis", `<div class="card"><ul>${toc.entries.map(e=>`<li>${e.title}${e.page?` <small style="color:var(--text-faint);">S. ${e.page}</small>`:""}</li>`).join("")}</ul></div>`);
  return h + `<div class="footer-note">Local Legends — Einleitung & Stadtführer</div>`;
}

function renderVillain(id){
  const v = VILLAINS.find(x=>x.id===id); if(!v) return crumbBonus("?");
  let h = crumbBonus(v.title);
  h += `<div class="case-hero"><div class="eyebrow">KLEINSCHURKE · ${v.mythos||""}</div><h1 style="margin:0 0 4px;">${v.title}</h1><p class="sub" style="font-style:italic;color:var(--text-faint);margin:0;">${v.subtitle||v.tagline||""}</p>${v.pages?`<p style="font-size:12px;color:var(--text-faint);margin:6px 0 0;">Buchseiten ${v.pages}</p>`:""}</div>`;
  if(v.intro) h += `<div class="card">${paras(v.intro)}</div>`;
  if(v.howToUse) h += sectionHTML("v_how","Wie man diesen Schurken nutzt", (v.howToUse.intro?`<div class="card"><p>${v.howToUse.intro}</p></div>`:"") + (v.howToUse.items||[]).map(x=>`<div class="card">${typeof x==="string"?`<p>${x}</p>`:`<h3 style="font-size:14px;">${x.t||x.title||x.name||""}</h3><p>${x.x||x.text||""}</p>`}</div>`).join(""));
  if(v.hooks&&v.hooks.length) h += sectionHTML("v_hooks","Hooks", v.hooks.map((x,i)=>hookBlock(x,"vh_"+i)).join(""));
  if(v.background&&v.background.length) h += sectionHTML("v_bg","Hintergrund", v.background.map(t=>`<div class="card"><p>${t}</p></div>`).join(""));
  if(v.operation&&v.operation.length) h += sectionHTML("v_op","Die Operation", v.operation.map(t=>`<div class="card"><p>${t}</p></div>`).join(""));
  if(v.locations&&v.locations.length) h += sectionHTML("v_loc","Schlüsselorte", v.locations.map((l,i)=>locBlock(l,"vl_"+i,null)).join(""));
  if(v.inPerson&&v.inPerson.length) h += sectionHTML("v_in","Persönlich", v.inPerson.map(t=>`<div class="card"><p>${t}</p></div>`).join(""));
  if(v.abilities&&v.abilities.length) h += sectionHTML("v_ab","Fähigkeiten", v.abilities.map(t=>`<div class="card"><p>${t}</p></div>`).join(""));
  if(v.sidebars&&v.sidebars.length) h += v.sidebars.map(sb=>`<div class="card"><h3>${sb.title}</h3>${sb.subtitle?`<p style="font-style:italic;color:var(--text-faint);">${sb.subtitle}</p>`:""}${paras(sb.text)}</div>`).join("");
  if(v.dangers&&v.dangers.length) h += sectionHTML("v_dg","Danger-Profile", v.dangers.map(dg=>renderDangerCard(dg,"vil_"+v.id)).join(""));
  if(v.notes&&v.notes.length) h += v.notes.map(t=>`<div class="gm-note"><span class="gm-label">Hinweis</span>${t}</div>`).join("");
  return h + `<div class="footer-note">Local Legends — Kleinschurken: ${v.title}</div>`;
}

function renderAppendix(){
  const A = APPENDIX, tab = state.appTab||"mythoi", q = (state.appQ||"").toLowerCase();
  const tabs = [["mythoi","Mythoi"],["dangers","Dangers"],["themeKits","Theme Kits"]];
  let h = crumbBonus("Register") + `<div class="hero"><h1>${A.title||"Register"}</h1><p class="sub" style="font-style:italic;color:var(--text-faint);">${A.intro||""}</p></div>`;
  h += `<div class="case-tabbar">${tabs.map(t=>`<button class="case-tab ${tab===t[0]?"active":""}" onclick="goAppendix('${t[0]}')">${t[1]} <small>${A[t[0]].entries.length}</small></button>`).join("")}</div>`;
  h += `<input class="gloss-search" id="appQ" placeholder="Filtern…" value="${(state.appQ||"").replace(/"/g,"&quot;")}" oninput="appFilter(this.value)" style="margin:10px 0;">`;
  h += `<p style="font-size:12px;color:var(--text-faint);">${A[tab].note||""}</p><div id="appList">${appRows(tab,q)}</div>`;
  if(A.backers) h += `<p style="font-size:11.5px;color:var(--text-faint);margin-top:18px;">${A.backers.text}</p>`;
  return h;
}
function appRows(tab,q){
  const A = APPENDIX, e = A[tab].entries.filter(x=>!q || JSON.stringify(x).toLowerCase().includes(q));
  const dn = id => (A.districtNames&&A.districtNames[id])||id||"";
  const link = x => { const d = x.district && DISTRICTS.find(y=>y.id===x.district); return d&&d.data&&!d.hidden ? ` <a class="app-go" onclick="goDistrict('${x.district}')">${dn(x.district)}</a>` : (x.district?` <span class="app-go off">${dn(x.district)}</span>`:""); };
  if(tab==="mythoi") return e.map(x=>`<div class="app-row"><b>${x.mythos}</b> <span class="app-sub">${x.logos||""}</span> <small>${x.type||""} · S. ${x.page}</small>${link(x)}</div>`).join("");
  if(tab==="dangers") return e.map(x=>`<div class="app-row"><b>${x.name}</b> <span class="app-sub">${x.ratingText||x.rating||""} ★</span> <small>S. ${x.page}</small>${link(x)}</div>`).join("");
  return e.map(x=>`<div class="app-row"><b>${x.title}</b> <span class="app-sub">${x.type||""}</span> <small>S. ${x.page}</small>${link(x)}</div>`).join("");
}
function appFilter(v){ state.appQ = v; const el = document.getElementById("appList"); if(el) el.innerHTML = appRows(state.appTab||"mythoi", v.toLowerCase()); }

/* ============================================================
   RENDER: BEZIRK
   ============================================================ */
function sectionHTML(id, title, bodyHTML){
  return `<div class="section collapsed" id="sec_${id}">
    <div class="section-head" onclick="toggleSection('${id}')">
      <span class="chev">▾</span><h2>${title}</h2>
    </div>
    <div class="section-body">${bodyHTML}</div>
  </div>`;
}
function toggleSection(id){
  document.getElementById("sec_"+id).classList.toggle("collapsed");
}

function tagRow(list, cls){
  if(!list || !list.length) return "";
  return `<div class="tags">${list.map(t=>`<span class="tag ${cls}">${t}</span>`).join("")}</div>`;
}

function clueBoxes(list){
  if(!list || !list.length) return "";
  // Einträge können sein: ein reiner String (→ gelbe Hinweis-Box),
  // ein Objekt {text:"..."} (→ normaler Fließtext-Absatz zwischen den
  // Boxen, exakt wie im Original-Layout, wo verbindende Sätze KEINE
  // eigenen Hinweis-Boxen sind), oder ein Objekt {readaloud:"..."}
  // (→ eine WEITERE Vorlesen-Box mitten im Ort — manche Orte haben im
  // Original mehrere getrennte eingerückte Vorlesetext-Blöcke, nicht
  // nur einen am Anfang).
  return list.map(c=>{
    if(c && typeof c === "object" && c.readaloud !== undefined) return `<div class="readaloud article"><span class="ra-label">Vorlesen</span><div>${c.readaloud}</div></div>`;
    if(c && typeof c === "object" && c.text !== undefined) return `<p>${c.text}</p>`;
    return `<div class="clue-box">${c}</div>`;
  }).join("");
}
function gmNote(text){
  if(!text) return "";
  return `<div class="gm-note"><span class="gm-label">Spielleitungs-Hinweis</span>${text}</div>`;
}

function llPortrait(name){ const src=(typeof LL_PORTRAITS!=="undefined")&&LL_PORTRAITS[name]; return src?`<img class="ll-portrait" src="${src}" alt="${name}" loading="lazy" onclick="mapFull(this.src)">`:""; }
state.openThemes = state.openThemes || {};
function toggleTheme(k){ state.openThemes[k]=!state.openThemes[k]; const el=document.getElementById("th_"+k); if(el) el.classList.toggle("open",state.openThemes[k]); }
function renderThemeCard(o){
  const k = dangerKey("theme", o.name+"_"+(o.kind||""));
  return `<div class="card theme-card ${state.openThemes[k]?"open":""}" id="th_${k}">
    <div class="th-head" onclick="toggleTheme('${k}')"><span class="th-chev">▸</span><h3>${o.name}</h3><span class="th-kind">${o.kind||""}${o.role?` · ${o.role}`:""}</span></div>
    <div class="th-body">
    ${llPortrait(o.name)}
    ${o.blurb?`<p>${o.blurb}</p>`:""}
    <p><i>${o.identity}</i></p>
    <span class="taglabel">Power-Tags</span>${tagRow(o.power,"power")}
    <span class="taglabel">Weakness-Tags</span>${tagRow(o.weak,"weak")}
    ${o.improvement?`<p style="margin-top:8px;"><b style="color:var(--brass-bright)">${o.improvement.name}:</b> ${o.improvement.text}</p>`:""}
    ${o.bio?`<p style="margin-top:10px;border-top:1px dashed var(--line);padding-top:8px;">${o.bio}</p>`:""}
    </div>
  </div>`;
}

function dangerKey(scope,name){ return (scope+"_"+name).replace(/[^a-z0-9]+/gi,"_").toLowerCase(); }

let _ratIdx=null;
function dangerRating(dg){
  if(dg.rating) return {text:dg.rating+"/5", html:"⬥".repeat(dg.rating)+"⬦".repeat(Math.max(0,5-dg.rating))};
  if(!_ratIdx){ _ratIdx={}; if(typeof APPENDIX!=="undefined" && APPENDIX.dangers) APPENDIX.dangers.entries.forEach(e=>{ _ratIdx[normName(e.name)]=e; }); }
  const e=_ratIdx[normName(dg.name)]; if(!e) return null;
  const n=e.stars||e.rating||0;
  return {text:(e.plus?"+":"")+n, html:(e.plus?"<b>+</b>":"")+"⬥".repeat(n)};
}
function normName(n){ return String(n||"").toLowerCase().replace(/&amp;/g,"&").replace(/\(.*?\)/g,"").replace(/[^a-z0-9äöüß]+/g," ").trim(); }
function renderDangerCard(dg, scope){
  const key = dangerKey(scope, dg.name);
  const spectrums = parseStatLine(dg.statLine);
  const spectrumHTML = spectrums.map((s,i)=>renderSpectrum(key, i, s)).join("");
  const isOpen = !!state.openDangers[key];
  const rt = dangerRating(dg);
  const ratingHTML = rt ? `<span class="rating" title="Bedrohungsstufe ${rt.text}">${rt.html}</span>` : (window.__noRating=(window.__noRating||[]).concat(dg.name), "");
  const _unused = dg.rating ? `<span class="rating" title="Bedrohungsstufe ${dg.rating}/5">${"⬥".repeat(dg.rating)}${"⬦".repeat(Math.max(0,5-dg.rating))}</span>` : "";
  return `<div class="danger-card ${isOpen?'open':''}" id="dc_${key}">
    <div class="danger-head" onclick="toggleDanger('${key}')">
      <h4>${dg.name}</h4>
      ${ratingHTML}
      <span class="epithet">${dg.epithet||""}</span>
    </div>
    <div class="danger-body">
      ${llPortrait(dg.name)}
      ${dg.tactics?`<p><i>${dg.tactics}</i></p>`:""}
      ${(dg.cardDesc||dg.desc)?`<p>${dg.cardDesc||dg.desc}</p>`:""}
      ${spectrums.length?`<div class="stat-line">${dg.statLine}</div><div id="specs_${key}">${spectrumHTML}</div>`:""}
      ${dg.moves && dg.moves.length?`<div class="movegroup"><div class="mg-label">Custom Moves</div><ul>${dg.moves.map(m=>`<li>${m}</li>`).join("")}</ul></div>`:""}
      ${dg.softMoves && dg.softMoves.length?`<div class="movegroup"><div class="mg-label">Angriffe / Weiche & Harte Züge</div><ul>${dg.softMoves.map(m=>`<li>${m}</li>`).join("")}</ul></div>`:""}
      ${dg.tellMoves && dg.tellMoves.length?`<div class="movegroup"><div class="mg-label">Tell-Züge</div><ul>${dg.tellMoves.map(m=>`<li>${m}</li>`).join("")}</ul></div>`:""}
    </div>
  </div>`;
}
function toggleDanger(key){
  state.openDangers[key] = !state.openDangers[key];
  const el = document.getElementById("dc_"+key);
  if(el) el.classList.toggle("open", state.openDangers[key]);
}

function parseStatLine(line){
  if(!line) return [];
  return line.split("/").map(s=>s.trim()).filter(Boolean).map(s=>{
    const m = s.match(/^(.*)\s(\d+|—)$/);
    if(!m) return {name:s, max:0};
    return {name:m[1].trim(), max:(m[2]==="—"?0:parseInt(m[2],10))};
  });
}
function renderSpectrum(key, idx, spec){
  if(!spec.max) return "";
  const arrKey = key+"_"+idx;
  if(!state.pips[arrKey]) state.pips[arrKey] = Array(spec.max).fill(false);
  const pips = state.pips[arrKey].map((filled,i)=>`<span class="pip ${filled?"filled":""}" onclick="event.stopPropagation();togglePip('${arrKey}',${i})"></span>`).join("");
  return `<div class="spectrum" id="spec_${arrKey}"><span class="sname">${spec.name}</span>${pips}</div>`;
}
function togglePip(arrKey, i){
  // Clock-/Tracker-Verhalten: Klick auf ein noch leeres Kästchen füllt alle
  // vorherigen mit auf (inkl. des angeklickten); Klick auf ein gefülltes
  // Kästchen leert es und alle danach wieder. Kein render() hier — nur das
  // betroffene Spektrum wird im DOM aktualisiert, damit aufgeklappte
  // Danger-Karten/Abschnitte beim Klicken NICHT zuklappen (Bugfix).
  const arr = state.pips[arrKey];
  if(!arr) return;
  const wasFilled = arr[i];
  if(wasFilled){
    for(let k=i;k<arr.length;k++) arr[k] = false;
  } else {
    for(let k=0;k<=i;k++) arr[k] = true;
  }
  savePips();
  const container = document.getElementById("spec_"+arrKey);
  if(container){
    const pipsEls = container.querySelectorAll(".pip");
    pipsEls.forEach((el,idx)=>el.classList.toggle("filled", !!arr[idx]));
  }
}

function renderDistrictView(id){ LL_TAIL = null; return llTail(_renderDistrictView(id)); }
function _renderDistrictView(id){
  const dist = DISTRICTS.find(d=>d.id===id);
  const c = dist.data;
  if(!c){
    return `<div class="crumb"><button onclick="goOverview()">Bezirke</button><span class="sep">/</span>${dist.title}</div>
      <div class="hero"><h1>${dist.title}</h1><p>Dieser Bezirk ist noch nicht eingepflegt. Folgt in einer der nächsten Sitzungen.</p></div>`;
  }
  // Bezirke, bei denen bisher NUR der Fall vollständig eingepflegt wurde
  // (Bezirksteil / Lore / Orte / Locals folgt separat später) zeigen
  // eine reduzierte Seite statt an fehlenden Feldern zu scheitern.
  if(!c.intro){
    let html = `<div class="crumb"><button onclick="goOverview()">Bezirke</button><span class="sep">/</span>${dist.title}</div>`;
    html += `<div class="hero"><h1>${dist.title}</h1><p class="sub" style="font-style:italic;color:var(--text-faint);margin-bottom:10px;">${dist.sub||""}</p>
      <div class="card"><p>Der Bezirksteil (Lore, Orte, Locals, Player Options) für ${dist.title} ist noch nicht eingepflegt — bisher wurde nur der One-Shot-Fall vollständig ausgearbeitet. Der Bezirksteil folgt in einer späteren Sitzung.</p></div>
    </div>`;
    if(c.case){
      html += `<div class="section"><div class="section-head" style="cursor:default;border:none;"><h2 style="color:var(--red-bright);">Der Fall</h2></div>
        <div class="section-body"><button class="tile clickable" style="width:100%;text-align:left;" onclick="goCase('${id}')">
          <div class="num">ONE-SHOT CASE</div><h3>${c.case.title}</h3>
          <div class="sub">${c.case.subtitle}</div>
          <div class="teaser">Fall-Akte öffnen →</div>
        </button></div></div>`;
    }
    html += `<div class="footer-note">Local Legends — Fall-Akte · Bezirk: ${dist.title} (Bezirksteil ausstehend)</div>`;
    return html;
  }
  if(!state.distTab || getDistTabKeys(c).indexOf(state.distTab)<0) state.distTab = "overview";
  const active = state.distTab;

  let html = `<div class="crumb"><button onclick="goOverview()">Bezirke</button><span class="sep">/</span>${dist.title}</div>`;
  if(false) html += `<div class="hero"><h1>${dist.title}</h1><p class="sub" style="font-style:italic;color:var(--text-faint);margin-bottom:10px;">${c.tagline||dist.sub}</p></div>`;

  html += renderDistrictTabs(c, id, active);

  if(active==="overview"){
    html += renderMapPanel(id);
    html += `<div class="readaloud">${c.quote.text}<br><span style="font-size:11.5px;opacity:.7;">${c.quote.author}</span></div>
      <div class="card"><p>${c.intro}</p></div>`;
    if(c.playerOptions) html += sectionHTML("options","Player Options", (c.playerOptionsIntro?`<div class="card"><p>${c.playerOptionsIntro}</p></div>`:"") + c.playerOptions.map(renderThemeCard).join(""));
    html += sectionHTML("howto","Wie man diesen Bezirk nutzt", ((c.howToUseIntro||c.howToIntro)?`<div class="card"><p>${c.howToUseIntro||c.howToIntro}</p></div>`:"") + c.howToUse.map(h=>`<div class="card"><h3 style="font-size:14px;">${h.t}</h3><p>${h.x}</p></div>`).join("") + (c.namesNote?`<p style="font-size:11.5px;color:var(--text-faint);font-style:italic;">${c.namesNote}</p>`:""));
    if(c.gate) html += sectionHTML("gate","Das Chinatown-Tor", `<div class="card"><p>${c.gate}</p></div>`);
    html += sectionHTML("beyond","Jenseits des Nebels", `<div class="card"><p>${c.beyondMist}</p></div>`);
    if(c.phoropterHistory) html += sectionHTML("phoropter","Geschichte des Phoropters", `<div class="card"><p>${c.phoropterHistory}</p></div>`);
    if(c.otherMythoi) html += sectionHTML("othermyth","Andere chinesische Mythoi in der Stadt", `<div class="card"><p>${c.otherMythoi}</p></div>`);
    if(c.chowsSpoiler) html += sectionHTML("chows","Die Chows (Spoiler-Warnung!)", `<div class="card">${llPortrait("_chows")}${c.chowsSpoiler}</div>`);
    html += sectionHTML("custom","Custom Moves", (c.customMovesIntro?`<div class="card"><p>${c.customMovesIntro}</p></div>`:"") + c.customMoves.map(m=>`<div class="card"><h3>${m.name}</h3><p>${m.text}</p></div>`).join(""));
  }
  else if(active==="options"){
    html += tabHead("Player Options", tocPage(id,false,"Player Options"));
    if(c.playerOptionsIntro) html += `<div class="card"><p>${c.playerOptionsIntro}</p></div>`;
    html += c.playerOptions.map(renderThemeCard).join("");
  }
  else if(active==="map"){
    html += renderMapPanel(id);
  }
  else if(active==="places"){
    html += tabHead("Orte", tocPage(id,false,"Places of Interest"));
    html += c.places.map((p,i)=>locBlock(p, "pl_"+i, null)).join("");
  }
  else if(active==="locals"){
    html += tabHead("Locals", tocPage(id,false,"Locals"));
    html += c.locals.map(l=>(l.profile?`<div class="card"><h3>${l.name}</h3><p>${l.profile}</p></div>`:"")+renderDangerCard(l,"local_"+id)).join("");
    if(c.localThemes) html += c.localThemes.map(renderThemeCard).join("");
  }
  else if(active==="chance"){
    html += tabHead("Zufallsbegegnungen", tocPage(id,false,"Chance Encounters"));
    html += c.chanceEncounters.map(l=>renderDangerCard(l,"chance_"+id)).join("");
  }
  else if(active==="powersets"){
    html += tabHead("Power Sets", tocPage(id,false,"Power Sets"));
    html += c.powerSets.map(p=>`<div class="card"><h3>${p.name}</h3><p>${p.text}</p></div>`).join("");
    const tb = c.themebook;
    if(tb){
      html += `<div class="card">
        <h3 style="color:var(--brass-bright);">${tb.name}</h3>
        ${tb.logosLabel?`<div class="sub" style="font-size:11.5px;color:var(--text-faint);font-style:italic;">${tb.logosLabel}</div>`:""}
        ${tb.intro?`<p>${tb.intro}</p>`:""}
        ${tb.examples?`<p><b>Beispiele:</b> ${tb.examples.join(" · ")}</p>`:""}
        <p><b style="color:var(--brass-bright)">Power-Tag-Fragen:</b></p><ul>${tb.questionsPower.map(q=>`<li>${q}</li>`).join("")}</ul>
        <p><b style="color:var(--red-bright)">Weakness-Tag-Fragen:</b></p><ul>${tb.questionsWeak.map(q=>`<li>${q}</li>`).join("")}</ul>
        <p style="font-size:12px;font-style:italic;">${tb.extra}</p>
        <p><b>Identität:</b> ${tb.identity}</p>
        <p><b style="color:var(--brass-bright)">Theme Improvements:</b></p>${tb.improvementsIntro?`<p>${tb.improvementsIntro}</p>`:""}<ul>${tb.improvements.map(i=>`<li>${i}</li>`).join("")}</ul>
        <p><b>Crew-Beziehungen:</b> ${tb.crewRel}</p>
      </div>`;
      if(tb.sampleCard) html += renderThemeCard(tb.sampleCard);
    }
  }
  else if(active==="heists" && c.heistRules){
    html += tabHead("Heists", tocPage(id,false,"Heists"));
    const hr = c.heistRules;
    html += `<div class="card"><p>${hr.intro}</p></div>`;
    html += sectionHTML("heistterm","Heist-Terminologie", hr.terminology.map(t=>`<div class="card"><h3 style="font-size:14px;">${t.t}</h3><p>${t.x}</p></div>`).join(""));
    const hx = a => [].concat(a||[]).map(t=>`<div class="card"><h3 style="font-size:14px;">${t.t}</h3><p>${t.x}</p></div>`).join("");
    html += sectionHTML("heistprep","Die Prep Sequence", `<div class="card"><p>${hr.prepSequence}</p></div>` + (typeof hr.prepIntro==="string"?`<div class="card"><p>${hr.prepIntro}</p></div>`:hx(hr.prepIntro)) + hx(hr.prepMoves) + hx(hr.prepMiss?[].concat(hr.prepMiss):[]) + hx(hr.tickClock?[].concat(hr.tickClock):[]));
    html += sectionHTML("heistcards","Drei Karten entwerfen", `<div class="card"><p>${hr.threeCards}</p></div>`);
    html += sectionHTML("heistquick","Quick Heist Generator", `<div class="card"><p>${hr.quickGenerator}</p></div>` + (hr.quickTable||[]).map(q=>`<div class="card"><h3 style="font-size:14px;">${q.symbol} ${q.suit} — ${q.title}</h3><div class="tbl-wrap"><table class="ll-tbl"><tbody>${q.rows.map(r=>`<tr><td style="width:3em;white-space:nowrap;"><b>${r[0]}${q.symbol}</b></td><td>${r[1]}</td></tr>`).join("")}</tbody></table></div></div>`).join(""));
  }
  else if(active==="case"){
    html += `<div class="section"><div class="section-head" style="cursor:default;border:none;"><h2 style="color:var(--red-bright);">Der Fall</h2></div>
      <div class="section-body"><button class="tile clickable" style="width:100%;text-align:left;" onclick="goCase('${id}')">
        <div class="num">ONE-SHOT CASE</div><h3>${c.case.title}</h3>
        <div class="sub">${c.case.subtitle}</div>
        <div class="teaser">Fall-Akte öffnen →</div>
      </button></div></div>`;
  }

  html += pagerHTML(getDistTabKeys(c).map(k=>[k,DIST_TAB_LABELS[k]]), active, "setDistTab");
  html += `<div class="footer-note">Local Legends — Fall-Akte · Bezirk: ${dist.title}</div>`;
  return html;
}
function getDistTabKeys(c){
  const tabs = ["overview","places","locals","chance","powersets"];
  if(c.heistRules) tabs.push("heists");
  tabs.push("case");
  return tabs;
}
const DIST_TAB_LABELS = {overview:"Übersicht", map:"Karte", options:"Player Options", places:"Orte", locals:"Locals", chance:"Zufallsbeg.", powersets:"Power Sets", heists:"Heists", case:"Der Fall"};
function renderDistrictTabs(c, id, active){
  const tabs = getDistTabKeys(c);
  let html = `<div class="case-tabbar">`;
  tabs.forEach(key=>{
    html += `<button class="case-tab ${active===key?'active':''}" onclick="setDistTab('${key}')">${DIST_TAB_LABELS[key]}</button>`;
  });
  html += `</div>`;
  return html;
}
function llNotes(key){ let n={}; try{ n=JSON.parse(localStorage.getItem("ll_notes")||"{}"); }catch(e){} return `<details class="mini-notes" ${n[key]?"open":""}><summary>✎ Notizen</summary><textarea oninput="llSetNote('${key}',this.value)" placeholder="Eigene Notizen …">${(n[key]||"").replace(/&/g,"&amp;").replace(/</g,"&lt;")}</textarea></details>`; }
function llLegacyKey(k){ const m=/^(dist|case):(.+):overview$/.exec(k); return m?m[1]+":"+m[2]:null; }
NotePop.reg("ll", k=>{ let n={}; try{ n=JSON.parse(localStorage.getItem("ll_notes")||"{}"); }catch(e){} if(n[k]!==undefined) return n[k]; const l=llLegacyKey(k); return l?(n[l]||""):""; }, (k,v)=>llSetNote(k,v));
function llSetNote(k,v){ let n={}; try{ n=JSON.parse(localStorage.getItem("ll_notes")||"{}"); }catch(e){} n[k]=v; try{ localStorage.setItem("ll_notes",JSON.stringify(n)); }catch(e){} }
function pagerHTML(items, active, fn){
  const i = items.findIndex(x=>x[0]===active); if(i<0) return "";
  const pv = items[i-1], nx = items[i+1]; if(!pv && !nx) return "";
  const b=(cls,it,lbl,arr)=>`<button class="${cls}" onclick="${fn}('${it[0]}')"><span class="pg-arrow">${arr}</span><span class="pg-txt"><small>${lbl}</small><b>${it[1]}</b></span></button>`;
  return `<nav class="pager">${pv?b("pg-prev",pv,"Zurück","←"):""}${nx?b("pg-next",nx,"Weiter","→"):""}</nav>`;
}
function setDistTab(tab){ state.distTab = tab; render(); window.scrollTo(0,0); }

/* ============================================================
   RENDER: FALL (CASE)
   ============================================================ */
state.openLoc = {};
function toggleLoc(id){ state.openLoc[id] = !state.openLoc[id]; const el = document.getElementById(id); if(el) el.classList.toggle("open", !!state.openLoc[id]); }
function openLocEl(el){ const c = el && el.closest && el.closest(".loc-card"); if(c && !c.classList.contains("open")){ c.classList.add("open"); state.openLoc[c.id] = true; } }
function locBlock(l, anchorId, scope){
  let html = `<div class="loc-card loc-anchor ${state.openLoc[anchorId]?"open":""}" id="${anchorId}">`;
  html += `<h4 class="loc-h" onclick="toggleLoc('${anchorId}')"><span class="chev">▸</span> ${l.name}</h4><div class="loc-body">`;
  if(l.readaloud){
    html += `<div class="readaloud article"><span class="ra-label">Vorlesen</span><div>${l.readaloud}</div></div>`;
  }
  if(l.mythos){
    html += `<p style="font-size:12px;color:var(--text-faint);font-style:italic;margin:0 0 6px;">${l.mythos}</p>`;
  }
  if(l.text){
    html += Array.isArray(l.text) ? l.text.map(t=>`<p>${t}</p>`).join("") : `<p>${l.text}</p>`;
  }
  if(l.tables){
    html += l.tables.map(t=>`<div class="card"><h3 style="font-size:14px;">${t.title||""}</h3><div class="tbl-wrap"><table class="ll-tbl"><thead><tr>${(t.cols||[]).map(c=>`<th>${c}</th>`).join("")}</tr></thead><tbody>${(t.rows||[]).map(r=>`<tr>${r.map(c=>`<td>${c}</td>`).join("")}</tr>`).join("")}</tbody></table></div></div>`).join("");
  }
  if(l.clues){
    html += clueBoxes(l.clues);
  }
  if(l.images){
    html += l.images.map(im=>`<figure class="ll-fig"><img src="${im.src}" alt="${im.caption||""}" loading="lazy" onclick="mapFull(this.src)"><figcaption>${im.caption||""}${im.page?` · S. ${im.page}`:""}</figcaption></figure>`).join("");
  }
  if(l.handouts){
    html += l.handouts.map(h=>`<div class="handout"><div class="ho-label">${h.kind||"Handout"}${h.page?` · S. ${h.page}`:""}</div><h4>${h.title||""}</h4>${h.img?`<figure class="ll-fig"><img src="${h.img}" alt="${h.title||""}" loading="lazy" onclick="mapFull(this.src)"></figure>`:""}<div class="ho-text">${h.text}</div>${h.note?`<div class="ho-note">${h.note}</div>`:""}</div>`).join("");
  }
  if(l.gmNote){
    html += gmNote(l.gmNote);
  }
  if(l.clues2){
    html += clueBoxes(l.clues2);
  }
  if(l.themes){
    html += l.themes.map(renderThemeCard).join("");
  }
  if(l.moveBox){
    html += `<div class="card"><h3 style="font-size:14px;">${l.moveBox.title}</h3><p>${l.moveBox.text}</p>${l.moveBox.list?`<ul>${l.moveBox.list.map(i=>`<li>${i}</li>`).join("")}</ul>`:""}</div>`;
  }
  if(l.dangers && l.dangers.length && scope){
    html += l.dangers.map(dg=>renderDangerCard(dg, scope)).join("");
  }
  html += `</div></div>`;
  return html;
}
function hookBlock(h, anchorId){
  if(typeof h==="string") return `<div class="card"><p>${h}</p></div>`;
  if(!h.name) return `<div class="card">${h.readaloud?`<div class="readaloud article"><span class="ra-label">Vorlesen</span><div>${h.readaloud}</div></div>`:""}${h.text?`<p>${h.text}</p>`:""}${h.clues?clueBoxes(h.clues):""}${h.gmNote?gmNote(h.gmNote):""}</div>`;
  let html = `<div class="loc-card loc-anchor ${state.openLoc[anchorId]?"open":""}" id="${anchorId}"><h4 class="loc-h" onclick="toggleLoc('${anchorId}')"><span class="chev">▸</span><span class="pin">📌</span> ${h.name}</h4><div class="loc-body">`;
  if(h.readaloud) html += `<div class="readaloud article"><span class="ra-label">Vorlesen</span><div>${h.readaloud}</div></div>`;
  if(h.text) html += `<p>${h.text}</p>`;
  if(h.clues) html += clueBoxes(h.clues);
  if(h.gmNote) html += gmNote(h.gmNote);
  html += `</div></div>`;
  return html;
}

function caseAnchor(id, dp, kind, idx){ return `d${dp.n}_${kind}${idx}`; }

function getCaseTabKeys(cs){
  const tabs = ["overview"];
  cs.depths.forEach(dp=>tabs.push("depth"+dp.n));
  tabs.push("aftermath");
  return tabs;
}
function renderCaseTabs(cs, active, nid){
  let tabs = `<button class="case-tab ${active==='overview'?'active':''}" onclick="setCaseTab('overview')">Übersicht</button>`;
  cs.depths.forEach(dp=>{
    tabs += `<button class="case-tab ${active===('depth'+dp.n)?'active':''}" onclick="setCaseTab('depth${dp.n}')">Depth ${dp.n}<br><small>${dp.title}</small></button>`;
  });
  tabs += `<button class="case-tab tab-aftermath ${active==='aftermath'?'active':''}" onclick="setCaseTab('aftermath')">Aftermath</button>`;
  return `<div class="case-tabbar">${tabs}${NotePop.tile("ll", "case:"+nid+":"+active)}</div>`;
}
function iceHot(id){
  const L = typeof LL_ICE!=="undefined" && LL_ICE[id]; if(!L) return "";
  return L.map(h=>`<button class="ice-hot" style="left:${h[0]}%;top:${h[1]}%;width:${h[2]}%;height:${h[3]}%" aria-label="Zum Abschnitt springen" onclick="iceGo(${h[4]},'${h[5]}')"></button>`).join("");
}
function iceGo(n,t){
  state.caseTab = "depth"+n; render();
  let el = null;
  if(t){ el = document.getElementById("d"+n+"_"+(t[0]==="h"?"hook":"loc")+t.slice(1)); }
  if(el){ openLocEl(el); el.scrollIntoView({block:"start"}); window.scrollBy(0,-70); el.classList.add("flash"); setTimeout(()=>el.classList.remove("flash"),1800); }
  else window.scrollTo(0,0);
}
function setCaseTab(tab){ state.caseTab = tab; render(); window.scrollTo(0,0); }

function renderCaseView(id){ LL_TAIL = null; return llTail(_renderCaseView(id)); }
function _renderCaseView(id){
  const dist = DISTRICTS.find(d=>d.id===id);
  const c = dist.data;
  const cs = c.case;
  const completeKey = id+"__"+cs.title;
  const completeKeyEsc = completeKey.replace(/'/g, "\\'");
  if(!state.caseTab) state.caseTab = "overview";
  const active = state.caseTab;

  let html = `<div class="crumb"><button onclick="goOverview()">Bezirke</button><span class="sep">/</span><button onclick="goDistrict('${id}')">${dist.title}</button><span class="sep">/</span>${cs.title}</div>`;
  if(false) html += `<div class="case-hero"><div class="eyebrow">ONE-SHOT CASE · ${dist.title.toUpperCase()}</div><h1 style="margin:0 0 4px;">${cs.title}</h1><p class="sub" style="font-style:italic;color:var(--text-faint);margin:0;">${cs.subtitle}</p></div>`;
  html += renderCaseTabs(cs, active, id);
  html += `<div class="case-tabpanel">`;

  if(active==="map") state.caseTab = "overview";
  if(active==="overview" || active==="map"){
    html += renderMapPanel(id);
    html += `<div class="card"><p>${cs.intro}</p></div>`;
    if(cs.teaser) html += `<div class="card"><p>${cs.teaser}</p></div>`;
    if(cs.fourthMurder) html += `<div class="card"><h3>${cs.fourthMurder.title}</h3>${cs.fourthMurder.paragraphs.map(p=>`<p>${p}</p>`).join("")}</div>`;
    html += `<div class="section"><div class="section-head" style="cursor:default;"><h2>Hintergrund</h2></div><div class="section-body">${cs.background.map(p=>`<div class="card"><p>${(p && typeof p==="object" && p.text!==undefined)?p.text:p}</p></div>`).join("")}${cs.miniThemeKits?cs.miniThemeKits.map(renderThemeCard).join(""):""}</div></div>`;
    html += `<div class="section"><div class="section-head" style="cursor:default;"><h2>Der Eisberg</h2></div><div class="section-body"><div class="card"><p>${cs.icebergNote}</p></div>${cs.icebergImage?`<div class="card" style="padding:8px;"><p class="hint" style="margin:0 0 6px;font-size:12px;color:var(--text-faint);">Auf ein Foto tippen, um zum Abschnitt zu springen.</p><div class="ice-wrap"><img src="${cs.icebergImage}" alt="Eisberg-Diagramm — ${cs.title}" style="width:100%;height:auto;display:block;border-radius:4px;">${iceHot(id)}</div></div>`:""}${cs.icebergMap?`<div class="card"><h3 style="font-size:14px;">Schauplätze nach Tiefe</h3><ul>${cs.icebergMap.depths.map(d=>`<li><b>Depth ${d.n}:</b> ${d.places.join(", ")}</li>`).join("")}</ul>${cs.icebergMap.links&&cs.icebergMap.links.length?`<p style="font-size:12px;color:var(--text-faint);">Verbindungen: ${cs.icebergMap.links.map(l=>l[0]+" → "+l[1]).join(" · ")}</p>`:""}</div>`:""}</div></div>`;
  } else if(active==="aftermath"){
    const isComplete = !!state.caseComplete[completeKey];
    html += `<div class="section"><div class="section-head" style="cursor:default;"><h2>Aftermath</h2></div><div class="section-body">`;
    if(isComplete){
      html += `${cs.aftermathIntro?`<div class="card"><p>${cs.aftermathIntro}</p></div>`:""}<div class="card"><ul>${cs.aftermath.map(a=>`<li style="margin-bottom:10px;">${a}</li>`).join("")}</ul></div>
        <button class="btn-ghost" onclick="setCaseComplete('${completeKeyEsc}',false)">↺ Fall wieder als offen markieren</button>`;
    } else {
      html += `<div class="aftermath-gate">
        <p>Diese Nachwehen und Folgefragen sind erst gedacht, wenn der Fall am Tisch abgeschlossen ist — sie enthalten Spoiler zu allen möglichen Ausgängen. Blende sie ein, sobald die Sitzung/der Fall beendet ist.</p>
        <button class="btn-primary" onclick="setCaseComplete('${completeKeyEsc}',true)">Fall als abgeschlossen markieren &amp; Aftermath zeigen</button>
      </div>`;
    }
    html += `</div></div>`;
  } else {
    const n = parseInt(active.replace("depth",""),10);
    const dp = cs.depths.find(d=>d.n===n);
    if(dp){
      let body = tabHead("Depth "+dp.n+": "+dp.title, tocPage(id,true,"Depth "+dp.n));
      const scope = "case_"+id+"_d"+dp.n;
      if(dp.intro){ body += `<div class="card"><p>${dp.intro}</p></div>`; }
      if(dp.hooks){ body += dp.hooks.map((h,i)=>hookBlock(h, caseAnchor(id,dp,'hook',i))).join(""); }
      if(dp.prep){
        body += `<div class="card"><h3>${dp.prep.title}</h3><p>${dp.prep.text}</p>${dp.prep.moveBox?`<div class="card" style="margin-top:10px;"><h3 style="font-size:14px;">${dp.prep.moveBox.title}</h3><p>${dp.prep.moveBox.text}</p></div>`:""}</div>`;
        if(dp.prep.dangers){ body += dp.prep.dangers.map(dg=>renderDangerCard(dg,scope)).join(""); }
      }
      if(dp.locations){ body += dp.locations.map((l,i)=>locBlock(l, caseAnchor(id,dp,'loc',i), scope)).join(""); }
      if(dp.text){ body += `<div class="card"><p>${dp.text}</p></div>`; }
      // dp.dangers ist ein Fallback für Danger-Profile, die keinem
      // einzelnen Ort direkt zugeordnet sind (z.B. Antagonist*innen,
      // die erst am Ende einer Tiefe auftreten). Wo immer möglich,
      // werden Danger-Karten stattdessen direkt an ihrem Ort über
      // location.dangers[] gerendert (locBlock), damit sie an der
      // Stelle im Fall erscheinen, an der sie im Original auch stehen.
      if(dp.dangers){
        body += dp.dangers.map(dg=>renderDangerCard(dg,scope)).join("");
      }
      if(dp.powderkeg){ body += locBlock(dp.powderkeg, caseAnchor(id,dp,'pk',0), scope); }
      html += body;
    }
  }

  html += pagerHTML([["overview","Übersicht"]].concat(cs.depths.map(dp=>["depth"+dp.n,"Depth "+dp.n+": "+dp.title])).concat([["aftermath","Aftermath"]]), active, "setCaseTab");
  html += `</div>`;
  html += `<div class="footer-note">Local Legends — Fall-Akte · ${dist.title}: ${cs.title}</div>`;
  return html;
}
function setCaseComplete(key, val){
  state.caseComplete[key] = val;
  saveComplete();
  render();
}

/* ============================================================
   MODALS: GLOSSAR & REGELN
   ============================================================ */
function openModal(id){ document.getElementById(id).classList.add("show"); }
function closeModal(id){ document.getElementById(id).classList.remove("show"); }

function buildRulesList(){
  const el = document.getElementById("rulesList");
  if(!el) return;
  el.innerHTML = RULES_GLOSSARY.map(g=>`<div class="gloss-entry" data-search="${(g.t+" "+g.d).toLowerCase()}"><b>${g.t}</b><p>${g.d}</p></div>`).join("");
}
function buildGlossList(){
  const el = document.getElementById("glossList");
  if(!el) return;
  // Sammle NPC-/Lore-Einträge aus dem aktuell relevanten Bezirk (falls offen), sonst aus Chinatown als Standard
  const dist = DISTRICTS.find(d=>d.id===(state.districtId||"chinatown"));
  const c = dist && dist.data;
  if(!c || !c.locals){ el.innerHTML = "<p style='font-size:12.5px;color:var(--text-faint);'>Für diesen Bezirk ist noch kein Bezirksteil mit Lore/Locals eingepflegt.</p>"; return; }
  const entries = [];
  (c.locals||[]).forEach(l=>entries.push({t:l.name, d:l.desc||l.epithet}));
  (c.localThemes||[]).forEach(l=>entries.push({t:l.name, d:l.bio||l.identity}));
  (c.chanceEncounters||[]).forEach(l=>entries.push({t:l.name, d:l.desc||l.epithet}));
  (c.places||[]).forEach(p=>entries.push({t:p.name, d:p.text.replace(/<[^>]+>/g,"")}));
  el.innerHTML = entries.map(g=>`<div class="gloss-entry" data-search="${(g.t+" "+g.d).toLowerCase()}"><b>${g.t}</b><p>${g.d}</p></div>`).join("");
}
function filterList(id, q){
  q = q.toLowerCase();
  document.querySelectorAll("#"+id+" .gloss-entry").forEach(e=>{
    e.style.display = e.getAttribute("data-search").includes(q) ? "" : "none";
  });
}

/* ============================================================
   VOLLTEXTSUCHE (über alle 9 Bezirke + Fälle)
   ============================================================ */
function flattenText(val){
  if(val===null || val===undefined) return "";
  if(typeof val==="string") return val.replace(/<[^>]+>/g," ");
  if(typeof val==="number" || typeof val==="boolean") return String(val);
  if(Array.isArray(val)) return val.map(flattenText).join(" ");
  if(typeof val==="object") return Object.values(val).map(flattenText).join(" ");
  return "";
}

let SEARCH_INDEX = null;
function buildSearchIndex(){
  if(SEARCH_INDEX) return SEARCH_INDEX;
  const idx = [];
  DISTRICTS.forEach(dist=>{
    const c = dist.data;
    if(!c) return;
    const overviewText = flattenText([c.quote, c.intro, c.beyondMist, c.phoropterHistory, c.otherMythoi, c.chowsSpoiler, c.gate, c.secretSocieties, c.howToUse, c.namesNote]);
    if(overviewText.trim()) idx.push({distId:dist.id, distTitle:dist.title, view:"district", tab:"overview", section:"Übersicht / Jenseits des Nebels", name:dist.title+" — Übersicht", text:overviewText});
    (c.customMoves||[]).forEach(m=> idx.push({distId:dist.id, distTitle:dist.title, view:"district", tab:"overview", section:"Custom Move", name:m.name, text:flattenText(m)}));
    (c.playerOptions||[]).forEach(o=> idx.push({distId:dist.id, distTitle:dist.title, view:"district", tab:"options", section:"Player Option", name:o.name, text:flattenText(o)}));
    (c.places||[]).forEach(p=> idx.push({distId:dist.id, distTitle:dist.title, view:"district", tab:"places", section:"Ort", name:p.name, text:flattenText(p)}));
    (c.locals||[]).forEach(l=> idx.push({distId:dist.id, distTitle:dist.title, view:"district", tab:"locals", section:"Local", name:l.name, text:flattenText(l)}));
    (c.localThemes||[]).forEach(l=> idx.push({distId:dist.id, distTitle:dist.title, view:"district", tab:"locals", section:"Local (Ally-Thema)", name:l.name, text:flattenText(l)}));
    (c.chanceEncounters||[]).forEach(l=> idx.push({distId:dist.id, distTitle:dist.title, view:"district", tab:"chance", section:"Zufallsbegegnung", name:l.name, text:flattenText(l)}));
    (c.powerSets||[]).forEach(p=> idx.push({distId:dist.id, distTitle:dist.title, view:"district", tab:"powersets", section:"Power Set", name:p.name, text:flattenText(p)}));
    if(c.themebook) idx.push({distId:dist.id, distTitle:dist.title, view:"district", tab:"powersets", section:"Themenbuch", name:c.themebook.name||"Themenbuch", text:flattenText(c.themebook)});
    if(c.heistRules) idx.push({distId:dist.id, distTitle:dist.title, view:"district", tab:"heists", section:"Heists", name:"Heists in the City", text:flattenText(c.heistRules)});
    if(c.case){
      const cs = c.case;
      idx.push({distId:dist.id, distTitle:dist.title, view:"case", tab:"overview", section:"Fall · Übersicht", name:cs.title, text:flattenText([cs.subtitle, cs.intro, cs.background, cs.icebergNote, cs.miniThemeKits])});
      (cs.depths||[]).forEach(dp=>{
        idx.push({distId:dist.id, distTitle:dist.title, view:"case", tab:"depth"+dp.n, section:"Fall · Depth "+dp.n, name:cs.title+" — Depth "+dp.n+(dp.title?": "+dp.title:""), text:flattenText(dp)});
      });
      if(cs.aftermath) idx.push({distId:dist.id, distTitle:dist.title, view:"case", tab:"aftermath", section:"Fall · Aftermath", name:cs.title+" — Aftermath", text:flattenText(cs.aftermath)});
    }
  });
  if(typeof VILLAINS!=="undefined") VILLAINS.forEach(v=> idx.push({distId:v.id, distTitle:"Kleinschurken", view:"villain", tab:"", section:"Kleinschurke", name:v.title, text:flattenText(v)}));
  if(typeof GUIDE!=="undefined") idx.push({distId:"guide", distTitle:"Einleitung", view:"guide", tab:"", section:"Stadtführer", name:"Einleitung & Guide to the City", text:flattenText(GUIDE)});
  SEARCH_INDEX = idx;
  return idx;
}
function escapeHtml(s){ return s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"); }
function snippetFor(text, q){
  text = text.replace(/\s+/g," ").trim();
  const lower = text.toLowerCase();
  const i = lower.indexOf(q);
  let snippet;
  if(i<0){ snippet = text.slice(0,150); }
  else{
    const start = Math.max(0, i-70);
    const end = Math.min(text.length, i+q.length+90);
    snippet = (start>0?"…":"") + text.slice(start,end) + (end<text.length?"…":"");
  }
  const esc = escapeHtml(snippet);
  if(!q) return esc;
  const re = new RegExp("("+q.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+")","ig");
  return esc.replace(re, "<mark>$1</mark>");
}
function runSearch(raw){
  const q = raw.trim().toLowerCase();
  const countEl = document.getElementById("searchCount");
  const resEl = document.getElementById("searchResults");
  if(q.length < 2){ countEl.textContent = ""; resEl.innerHTML = ""; return; }
  const idx = buildSearchIndex();
  const hits = idx.filter(e => (e.name.toLowerCase().includes(q) || e.text.toLowerCase().includes(q)));
  hits.sort((a,b)=>{
    const an = a.name.toLowerCase().includes(q) ? 0 : 1;
    const bn = b.name.toLowerCase().includes(q) ? 0 : 1;
    if(an!==bn) return an-bn;
    return a.distTitle.localeCompare(b.distTitle);
  });
  const shown = hits.slice(0, 200);
  countEl.textContent = hits.length===0 ? "Keine Treffer." : (hits.length + " Treffer" + (hits.length>200 ? " (zeige die ersten 200)" : "") + ".");
  resEl.innerHTML = shown.map(h=>{
    const snip = snippetFor(h.text, q);
    return `<div class="search-result" onclick="gotoSearchResult('${h.distId}','${h.view}','${h.tab}')">
      <div class="sr-meta">${h.distTitle} · ${h.section}</div>
      <b>${escapeHtml(h.name)}</b>
      <p>${snip}</p>
    </div>`;
  }).join("");
}
function gotoSearchResult(distId, view, tab){
  closeModal("searchModal");
  if(view==="villain"){ state.view="villain"; state.villainId=distId; }
  else if(view==="guide"){ state.view="guide"; }
  else if(view==="district"){ state.view="district"; state.districtId=distId; state.distTab=tab; }
  else { state.view="case"; state.districtId=distId; state.caseTab=tab; }
  render();
  window.scrollTo(0,0);
}
function openSearchModal(){
  openModal("searchModal");
  buildSearchIndex();
  const inp = document.getElementById("searchInput");
  if(inp){ setTimeout(()=>inp.focus(), 50); }
}

function isModalOpen(){
  return document.querySelectorAll(".modal-overlay.show").length > 0;
}
function isTypingTarget(el){
  if(!el) return false;
  const tag = el.tagName;
  return tag==="INPUT" || tag==="TEXTAREA" || el.isContentEditable;
}
document.addEventListener("keydown", function(e){
  if(e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
  if(isModalOpen() || isTypingTarget(document.activeElement)) return;
  const dir = e.key === "ArrowRight" ? 1 : -1;

  if(state.view === "case"){
    const dist = DISTRICTS.find(d=>d.id===state.districtId);
    const c = dist && dist.data;
    if(!c || !c.case) return;
    const keys = getCaseTabKeys(c.case);
    if(!state.caseTab) state.caseTab = "overview";
    let idx = keys.indexOf(state.caseTab);
    if(idx === -1) idx = 0;
    idx = Math.max(0, Math.min(keys.length-1, idx+dir));
    e.preventDefault();
    setCaseTab(keys[idx]);
  } else if(state.view === "district"){
    const dist = DISTRICTS.find(d=>d.id===state.districtId);
    const c = dist && dist.data;
    if(!c || !c.intro) return; // reduzierte Platzhalterseite ohne Tabs
    const keys = getDistTabKeys(c);
    if(!state.distTab) state.distTab = "overview";
    let idx = keys.indexOf(state.distTab);
    if(idx === -1) idx = 0;
    idx = Math.max(0, Math.min(keys.length-1, idx+dir));
    e.preventDefault();
    setDistTab(keys[idx]);
  }
});

render();


/* ============================================================
   KARTEN (Crime Board City Map 2)
   ============================================================ */
function mapMode(){ let m="sl"; try{ m=localStorage.getItem("ll_mapmode")||"sl"; }catch(e){} return m==="spieler"?"spieler":"sl"; }
function setMapMode(m){ try{ localStorage.setItem("ll_mapmode",m); }catch(e){} render(); }
function mapToggle(){
  const m=mapMode();
  return `<div class="map-toggle"><button class="${m==="sl"?"on":""}" onclick="setMapMode('sl')">SL-Karte</button><button class="${m==="spieler"?"on":""}" onclick="setMapMode('spieler')">Spielerkarte</button></div>`;
}
function mapFull(src){
  let o=document.getElementById("mapLightbox");
  if(!o){ o=document.createElement("div"); o.id="mapLightbox"; o.className="map-lightbox"; o.onclick=()=>o.classList.remove("show"); document.body.appendChild(o); }
  o.innerHTML=`<img src="${src}" alt="Karte"><button class="map-lb-close" aria-label="Schließen">✕</button>`;
  o.classList.add("show");
}
document.addEventListener("keydown",e=>{ if(e.key==="Escape"){ const o=document.getElementById("mapLightbox"); if(o) o.classList.remove("show"); } });
function renderCityMap(){
  if(typeof LL_MAPS==="undefined") return "";
  const m=mapMode(), src=LL_MAPS.dir+"stadt-"+m+".webp";
  const hot=LL_MAPS.hot.map(h=>{ const d=DISTRICTS.find(x=>x.id===h.id); if(!d||d.hidden) return ""; const ok=d.status==="ready";
    return `<button class="city-hot ${ok?"":"off"}" style="left:${h.x}%;top:${h.y}%;width:${h.w}%;height:${h.h}%" ${ok?`onclick="goDistrict('${h.id}')"`:"disabled"} aria-label="${d.title}" title="${d.title}">${h.label?`<span class="city-lbl">${h.label}</span>`:""}</button>`; }).join("");
  return `<div class="city-map-box"><div class="city-map-head">${mapToggle()}</div>
    <div class="city-scroll"><div class="city-map"><img src="${src}" alt="Stadtkarte" draggable="false">${hot}</div></div></div>`;
}
function renderMapPanel(id){
  if(typeof LL_MAPS==="undefined") return "";
  const m=mapMode(), src=LL_MAPS.dir+id+"-"+m+".webp";
  return `<div class="map-panel">${mapToggle()}<img class="map-img" src="${src}" alt="Karte" onclick="mapFull('${src}')"></div>`;
}
