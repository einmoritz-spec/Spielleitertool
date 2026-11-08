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

function goOverview(){ state.view="overview"; state.districtId=null; render(); window.scrollTo(0,0); }
function goDistrict(id){ state.view="district"; state.districtId=id; state.distTab="overview"; render(); window.scrollTo(0,0); }
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
  buildGlossList();
  buildRulesList();
  const caseBtn = document.getElementById("tb-case-btn");
  if(caseBtn){
    const dist = DISTRICTS.find(d=>d.id===state.districtId);
    const showBtn = (state.view==="district" || state.view==="case") && dist && dist.data;
    caseBtn.style.display = showBtn ? "flex" : "none";
    if(showBtn) caseBtn.textContent = state.view==="case" ? "📁 " + dist.data.case.title : "📁 Fall öffnen";
  }
  markLongTexts();
}
/* Sehr lange Fließtext-Absätze bekommen auf großen Bildschirmen Spalten (CSS: .long-text). */
function markLongTexts(){
  document.querySelectorAll("#app .card > p").forEach(p=>{
    p.classList.toggle("long-text", p.textContent.length > 900);
  });
}

function renderOverview(){
  let tiles = DISTRICTS.map(d=>{
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
    <div class="hero">
      <h1>Local Legends — Fall-Akte</h1>
      <p>Neun Bezirke der Stadt jenseits von Downtown und Industriegebiet — jeder mit eigener Lore, Orten, Locals und einem One-Shot-Fall. Klick auf einen Bezirk, um die Akte zu öffnen.</p>
    </div>
    <div class="grid">${tiles}</div>
    <div class="footer-note">Quelle: City of Mist — Local Legends · Fall-Akte für den Spieltisch, kein Ersatz fürs Regelwerk.</div>
  `;
}

/* ============================================================
   RENDER: BEZIRK
   ============================================================ */
function sectionHTML(id, title, bodyHTML){
  return `<div class="section" id="sec_${id}">
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

function renderThemeCard(o){
  return `<div class="card">
    <h3>${o.name}</h3>
    <div class="sub" style="font-size:11.5px;color:var(--text-faint);font-style:italic;margin-bottom:6px;">${o.kind}</div>
    <p><i>${o.identity}</i></p>
    <span class="taglabel">Power-Tags</span>${tagRow(o.power,"power")}
    <span class="taglabel">Weakness-Tags</span>${tagRow(o.weak,"weak")}
    ${o.improvement?`<p style="margin-top:8px;"><b style="color:var(--brass-bright)">${o.improvement.name}:</b> ${o.improvement.text}</p>`:""}
    ${o.bio?`<p style="margin-top:10px;border-top:1px dashed var(--line);padding-top:8px;">${o.bio}</p>`:""}
  </div>`;
}

function dangerKey(scope,name){ return (scope+"_"+name).replace(/[^a-z0-9]+/gi,"_").toLowerCase(); }

function renderDangerCard(dg, scope){
  const key = dangerKey(scope, dg.name);
  const spectrums = parseStatLine(dg.statLine);
  const spectrumHTML = spectrums.map((s,i)=>renderSpectrum(key, i, s)).join("");
  const isOpen = !!state.openDangers[key];
  const ratingHTML = dg.rating ? `<span class="rating" title="Bedrohungsstufe ${dg.rating}/5">${"⬥".repeat(dg.rating)}${"⬦".repeat(Math.max(0,5-dg.rating))}</span>` : "";
  return `<div class="danger-card ${isOpen?'open':''}" id="dc_${key}">
    <div class="danger-head" onclick="toggleDanger('${key}')">
      <h4>${dg.name}</h4>
      <span class="epithet">${dg.epithet||""}</span>
      ${ratingHTML}
    </div>
    <div class="danger-body">
      ${dg.desc?`<p>${dg.desc}</p>`:""}
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

function renderDistrictView(id){
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
  if(!state.distTab) state.distTab = "overview";
  const active = state.distTab;

  let html = `<div class="crumb"><button onclick="goOverview()">Bezirke</button><span class="sep">/</span>${dist.title}</div>`;
  html += `<div class="hero"><h1>${dist.title}</h1><p class="sub" style="font-style:italic;color:var(--text-faint);margin-bottom:10px;">${dist.sub}</p></div>`;

  html += renderDistrictTabs(c, id, active);

  if(active==="overview"){
    html += `<div class="readaloud">${c.quote.text}<br><span style="font-size:11.5px;opacity:.7;">${c.quote.author}</span></div>
      <div class="card"><p>${c.intro}</p></div>`;
    html += sectionHTML("howto","Wie man diesen Bezirk nutzt", c.howToUse.map(h=>`<div class="card"><h3 style="font-size:14px;">${h.t}</h3><p>${h.x}</p></div>`).join("") + `<p style="font-size:11.5px;color:var(--text-faint);font-style:italic;">${c.namesNote}</p>`);
    if(c.gate) html += sectionHTML("gate","Das Chinatown-Tor", `<div class="card"><p>${c.gate}</p></div>`);
    html += sectionHTML("beyond","Jenseits des Nebels", `<div class="card"><p>${c.beyondMist}</p></div>`);
    if(c.phoropterHistory) html += sectionHTML("phoropter","Geschichte des Phoropters", `<div class="card"><p>${c.phoropterHistory}</p></div>`);
    if(c.otherMythoi) html += sectionHTML("othermyth","Andere chinesische Mythoi in der Stadt", `<div class="card"><p>${c.otherMythoi}</p></div>`);
    if(c.chowsSpoiler) html += sectionHTML("chows","Die Chows (Spoiler-Warnung!)", `<div class="card">${c.chowsSpoiler}</div>`);
    html += sectionHTML("custom","Custom Moves", c.customMoves.map(m=>`<div class="card"><h3>${m.name}</h3><p>${m.text}</p></div>`).join(""));
  }
  else if(active==="options"){
    html += c.playerOptions.map(renderThemeCard).join("");
  }
  else if(active==="places"){
    html += c.places.map(p=>`<div class="card"><h3>${p.name}</h3><p>${p.text}</p></div>`).join("");
  }
  else if(active==="locals"){
    html += c.locals.map(l=>renderDangerCard(l,"local_"+id)).join("");
    if(c.localThemes) html += c.localThemes.map(renderThemeCard).join("");
  }
  else if(active==="chance"){
    html += c.chanceEncounters.map(l=>renderDangerCard(l,"chance_"+id)).join("");
  }
  else if(active==="powersets"){
    html += c.powerSets.map(p=>`<div class="card"><h3>${p.name}</h3><p>${p.text}</p></div>`).join("");
    const tb = c.themebook;
    if(tb){
      html += `<div class="card">
        <h3 style="color:var(--brass-bright);">${tb.name}</h3>
        ${tb.intro?`<p>${tb.intro}</p>`:""}
        <p><b style="color:var(--brass-bright)">Power-Tag-Fragen:</b></p><ul>${tb.questionsPower.map(q=>`<li>${q}</li>`).join("")}</ul>
        <p><b style="color:var(--red-bright)">Weakness-Tag-Fragen:</b></p><ul>${tb.questionsWeak.map(q=>`<li>${q}</li>`).join("")}</ul>
        <p style="font-size:12px;font-style:italic;">${tb.extra}</p>
        <p><b>Identität:</b> ${tb.identity}</p>
        <p><b style="color:var(--brass-bright)">Theme Improvements:</b></p><ul>${tb.improvements.map(i=>`<li>${i}</li>`).join("")}</ul>
        <p><b>Crew-Beziehungen:</b> ${tb.crewRel}</p>
      </div>`;
    }
  }
  else if(active==="heists" && c.heistRules){
    const hr = c.heistRules;
    html += `<div class="card"><p>${hr.intro}</p></div>`;
    html += sectionHTML("heistterm","Heist-Terminologie", hr.terminology.map(t=>`<div class="card"><h3 style="font-size:14px;">${t.t}</h3><p>${t.x}</p></div>`).join(""));
    html += sectionHTML("heistprep","Die Prep Sequence", `<div class="card"><p>${hr.prepSequence}</p></div>`);
    html += sectionHTML("heistcards","Drei Karten entwerfen", `<div class="card"><p>${hr.threeCards}</p></div>`);
    html += sectionHTML("heistquick","Quick Heist Generator", `<div class="card"><p>${hr.quickGenerator}</p></div>`);
  }
  else if(active==="case"){
    html += `<div class="section"><div class="section-head" style="cursor:default;border:none;"><h2 style="color:var(--red-bright);">Der Fall</h2></div>
      <div class="section-body"><button class="tile clickable" style="width:100%;text-align:left;" onclick="goCase('${id}')">
        <div class="num">ONE-SHOT CASE</div><h3>${c.case.title}</h3>
        <div class="sub">${c.case.subtitle}</div>
        <div class="teaser">Fall-Akte öffnen →</div>
      </button></div></div>`;
  }

  html += `<div class="footer-note">Local Legends — Fall-Akte · Bezirk: ${dist.title}</div>`;
  return html;
}
function getDistTabKeys(c){
  const tabs = ["overview","options","places","locals","chance","powersets"];
  if(c.heistRules) tabs.push("heists");
  tabs.push("case");
  return tabs;
}
const DIST_TAB_LABELS = {overview:"Übersicht", options:"Player Options", places:"Orte", locals:"Locals", chance:"Zufallsbeg.", powersets:"Power Sets", heists:"Heists", case:"Der Fall"};
function renderDistrictTabs(c, id, active){
  const tabs = getDistTabKeys(c);
  let html = `<div class="case-tabbar">`;
  tabs.forEach(key=>{
    html += `<button class="case-tab ${active===key?'active':''}" onclick="setDistTab('${key}')">${DIST_TAB_LABELS[key]}</button>`;
  });
  html += `</div>`;
  return html;
}
function setDistTab(tab){ state.distTab = tab; render(); window.scrollTo(0,0); }

/* ============================================================
   RENDER: FALL (CASE)
   ============================================================ */
function locBlock(l, anchorId, scope){
  let html = `<div class="loc-card loc-anchor" id="${anchorId}">`;
  html += `<h4><span class="pin">📍</span> ${l.name}</h4>`;
  if(l.readaloud){
    html += `<div class="readaloud article"><span class="ra-label">Vorlesen</span><div>${l.readaloud}</div></div>`;
  }
  if(l.text){
    html += `<p>${l.text}</p>`;
  }
  if(l.clues){
    html += clueBoxes(l.clues);
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
  html += `</div>`;
  if(l.dangers && l.dangers.length && scope){
    html += l.dangers.map(dg=>renderDangerCard(dg, scope)).join("");
  }
  return html;
}
function hookBlock(h, anchorId){
  let html = `<div class="loc-card loc-anchor" id="${anchorId}"><h4><span class="pin">📌</span> ${h.name}</h4>`;
  if(h.readaloud) html += `<div class="readaloud article"><span class="ra-label">Vorlesen</span><div>${h.readaloud}</div></div>`;
  if(h.text) html += `<p>${h.text}</p>`;
  if(h.clues) html += clueBoxes(h.clues);
  if(h.gmNote) html += gmNote(h.gmNote);
  html += `</div>`;
  return html;
}

function caseAnchor(id, dp, kind, idx){ return `d${dp.n}_${kind}${idx}`; }

function getCaseTabKeys(cs){
  const tabs = ["overview"];
  cs.depths.forEach(dp=>tabs.push("depth"+dp.n));
  tabs.push("aftermath");
  return tabs;
}
function renderCaseTabs(cs, active){
  let tabs = `<button class="case-tab ${active==='overview'?'active':''}" onclick="setCaseTab('overview')">Übersicht</button>`;
  cs.depths.forEach(dp=>{
    tabs += `<button class="case-tab ${active===('depth'+dp.n)?'active':''}" onclick="setCaseTab('depth${dp.n}')">Depth ${dp.n}<br><small>${dp.title}</small></button>`;
  });
  tabs += `<button class="case-tab tab-aftermath ${active==='aftermath'?'active':''}" onclick="setCaseTab('aftermath')">Aftermath</button>`;
  return `<div class="case-tabbar">${tabs}</div>`;
}
function setCaseTab(tab){ state.caseTab = tab; render(); window.scrollTo(0,0); }

function renderCaseView(id){
  const dist = DISTRICTS.find(d=>d.id===id);
  const c = dist.data;
  const cs = c.case;
  const completeKey = id+"__"+cs.title;
  const completeKeyEsc = completeKey.replace(/'/g, "\\'");
  if(!state.caseTab) state.caseTab = "overview";
  const active = state.caseTab;

  let html = `<div class="crumb"><button onclick="goOverview()">Bezirke</button><span class="sep">/</span><button onclick="goDistrict('${id}')">${dist.title}</button><span class="sep">/</span>${cs.title}</div>`;
  html += `<div class="case-hero"><div class="eyebrow">ONE-SHOT CASE · ${dist.title.toUpperCase()}</div><h1 style="margin:0 0 4px;">${cs.title}</h1><p class="sub" style="font-style:italic;color:var(--text-faint);margin:0;">${cs.subtitle}</p></div>`;
  html += renderCaseTabs(cs, active);
  html += `<div class="case-tabpanel">`;

  if(active==="overview"){
    html += `<div class="card"><p>${cs.intro}</p></div>`;
    html += `<div class="section"><div class="section-head" style="cursor:default;"><h2>Hintergrund</h2></div><div class="section-body">${cs.background.map(p=>`<div class="card"><p>${(p && typeof p==="object" && p.text!==undefined)?p.text:p}</p></div>`).join("")}${cs.miniThemeKits?cs.miniThemeKits.map(renderThemeCard).join(""):""}</div></div>`;
    html += `<div class="section"><div class="section-head" style="cursor:default;"><h2>Der Eisberg</h2></div><div class="section-body"><div class="card"><p>${cs.icebergNote}</p></div>${cs.icebergImage?`<div class="card" style="padding:8px;"><img src="${cs.icebergImage}" alt="Eisberg-Diagramm — ${cs.title}" style="width:100%;height:auto;display:block;border-radius:4px;"></div>`:""}</div></div>`;
  } else if(active==="aftermath"){
    const isComplete = !!state.caseComplete[completeKey];
    html += `<div class="section"><div class="section-head" style="cursor:default;"><h2>Aftermath</h2></div><div class="section-body">`;
    if(isComplete){
      html += `<div class="card"><ul>${cs.aftermath.map(a=>`<li style="margin-bottom:10px;">${a}</li>`).join("")}</ul></div>
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
      let body = "";
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
  if(view==="district"){ state.view="district"; state.districtId=distId; state.distTab=tab; }
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
