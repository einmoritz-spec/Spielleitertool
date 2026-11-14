function renderPrep(){
  const f = (l,fn)=>[l,null,fn];
  const sec = (tab)=>LM_NAV.secs[tab].map(x=>[x.t, x.p, `goBook('${tab}','${x.id}')`]);
  const cards = [
    {t:"Regeln", p:"54–230", go:"goBook('regeln')", rows:sec("regeln")},
    {t:"Die Dales", p:"22–307", go:"goBook('welt')", rows:sec("welt")},
    {t:"Charaktere", go:"openCreator()", rows:[f("Erstellung","openCreator()"),f("Themenbuch-Fragen","openThemebook()"),f("Eigene Charaktere","openCustomChars()"),f("Profile","openProfiles()")]},
    {t:"Werkzeuge", go:"openRulesGloss()", rows:[f("Regelglossar","openRulesGloss()"),f("Rasten","openRestRules()"),f("Grimoire","openGrimoire()"),f("Würfel","openDice()"),f("Shop","openStore()"),f("NPCs","openCharacters()"),f("Lore","openLore()"),f("Challenges","openChallenges()")]}
  ];
  const n = ADVENTURES.filter(a=>!a.tutorial).length;
  app.innerHTML = renderTopbar() + `
  <div class="overview">
    <div class="welcome-dales">
      <h1>Willkommen in den Dales</h1>
      <div class="wd-body">
        <p><span class="wd-dropcap">B</span>lickt empor zum azurblauen Himmel und in die Schatten der Berge. Blickt hinab auf saftig grüne Weiden und das Gold der Gerste. Schmeckt das frische Versprechen von Sommerregen und Winterschnee. Lauscht den beruhigenden Gesängen aus Flussgischt und stillen Wassern; der tiefen Ruhe all dessen, akzentuiert durch den Ruf eines Raben. Riecht die fällfrische Kiefer und das sensengemähte Feld, den Weihrauch der Feste und das wohlverdiente Mahl. Spürt den kühlen Hauch des Herbstes auf euren Wangen und des Frühlings wärmende Flamme, die eure Herzen bewegt.</p>
        <p>Sorgt euch nicht um das, was jenseits nebliger Klippen und kristallener Bäche liegt. Hier, in ihrer tröstenden Umarmung, seid ihr niemals verloren, niemals allein. Kommt und begegnet den Dalish in ihren Landen, auf idyllischen Hügeln, wo das Vieh weidet, und in dichten Wäldern, die kein Fuß zu betreten wagt.</p>
      </div>
    </div>
    ${PREP.html({cards, adv:{t:"Abenteuer", sub:n+" Abenteuer", go:"goOverview()"}})}
  </div>`;
}

function renderOverview(){
  const imgOf = {a1:"shadow-barley",a2:"important-letter",a3:"fox-dales",a4:"green-maiden",a5:"painted-beast",a6:"barleytown-fair",a7:"lost-hermitage"};
  const cards = ADVENTURES.filter(a=>a.id!=="campaign-aftermath" && !a.tutorial).map(a=>{
    const ready = a.status==="ready";
    return `
    <button class="adv-card" ${ready?`onclick="goAdventure('${a.id}')"`:'disabled'}>
      ${imgOf[a.id]?`<img src="assets/hero/adv-${imgOf[a.id]}.webp" alt="" loading="lazy">`:''}
      <div class="b">
        <div class="meta"><span>Abenteuer ${a.num}</span><span>${ready? a.scenes.filter(s=>s.kind==="scene").length+' Szenen' : 'In Vorbereitung'}</span></div>
        <h3>${esc(a.title)}</h3>
        <div class="en">${esc(a.en)}</div>
        <p>${esc(a.teaser.split(/(?<=[.!?])\s/)[0])}</p>
      </div>
    </button>`;
  }).join("");
  const af = ADVENTURES.find(a=>a.id==="campaign-aftermath");
  const sg = ADVENTURES.find(a=>a.id==="sg");
  const stack = (af||sg) ? `<div class="ov2-stack">` + (af ? `
    <button class="adv-card noimg" onclick="goAdventure('campaign-aftermath')">
      <div class="b">
        <div class="meta"><span>Kampagnen-Abschluss</span><span>${af.scenes.length} Szenen</span></div>
        <h3>Campaign Aftermath</h3>
        <div class="en">Personal Journeys &amp; Revelations Oracle</div>
      </div>
    </button>` : "") + (sg ? `
    <button class="adv-card ov2-tut" onclick="goAdventure('sg')">
      <img src="assets/galerie/litm-core/full/lmErzaehler_pdf111_B215ca_Heap-Thing-of-Skunk-Glen_1.webp" alt="" loading="lazy">
      <div class="b">
        <div class="meta"><span>Außerhalb der Kampagne</span></div>
        <h3>Der Heap-Thing von Skunk Glen</h3>
        <div class="en">Einsteiger-Abenteuer · ${sg.scenes.filter(x=>x.kind==="scene").length} Szenen</div>
      </div>
    </button>` : "") + `</div>` : "";
  app.innerHTML = renderTopbar() + `
  <div class="ov2">
    <div class="ov2-hero"><img class="art" src="assets/hero/dales-hero.webp" alt=""></div>
    <div class="ov2-title"><img src="assets/logos/hor.webp" alt="Hearts of Ravensdale"><div class="s">SETTING BOOK I · THE DALES</div></div>
    <div class="ov2-orn"><span>❦</span></div>
    <div class="ov2-grid">${cards}${stack}</div>
  </div>`;
}

function renderPathrail(adv){
  const items = adv.scenes.map((s,i)=>{
    const active = i===state.sceneIdx;
    // Die Übersicht/Intro-Folie ist reine Orientierung für den Spielleiter,
    // keine eigentliche Szene — kein Abhak-Kästchen dafür (Nutzerwunsch).
    const checkable = s.kind!=="intro";
    const done = checkable && !!state.scenesCompleted[sceneCompleteKey(adv.id, i)];
    const eyebrow = s.kind==="intro" ? "Übersicht" : s.kind==="aftermath" ? "Abschluss" : "Szene "+i;
    const checkHtml = checkable
      ? `<button class="trail-check ${done?'done':''}" onclick="event.stopPropagation(); toggleSceneCompleted('${adv.id}', ${i})" title="${done?'Als nicht erledigt markieren':'Als erledigt markieren'}">${done?'✓':''}</button>`
      : "";
    return `
    <div class="trail-item ${active?'active':''} ${done?'done':''}" onclick="goScene(${i})" title="${esc(effTitle(adv.id,s))}">
      <span class="raven-icon raven-mark">${RAVEN_SVG}</span>
      <span class="t-eyebrow">${eyebrow}</span>
      <span class="t-title">${esc(effTitle(adv.id,s))}</span>
      ${checkHtml}
    </div>`;
  }).join("");
  return `
  <div class="pathrail ${state.pathrailCollapsed?'collapsed':''}">
    <button class="pathrail-toggle" onclick="togglePathrail()" title="${state.pathrailCollapsed?'Seitenleiste ausklappen (Taste <)':'Seitenleiste einklappen (Taste <)'}">${state.pathrailCollapsed?'›':'‹'}</button>
    <h2>${esc(adv.title)}</h2>
    <div class="subhead">${adv.scenes.filter(s=>s.kind==="scene").length} Szenen · ${esc(adv.en)}</div>
    <div class="trail">${items}</div>
  </div>`;
}

function renderLimitRow(advId, sceneIdx, chIdx, limIdx, lim){
  if(!lim.max){
    return `<div class="limit-row"><span class="limit-label">${esc(lim.label)}</span><div class="limit-static"><b>${lim.max===0?'–':esc(lim.max)}</b></div>${lim.note?`<span class="limit-note ${lim.secret?'secret':''}">${linkStatuses(esc(lim.note))}</span>`:''}</div>`;
  }
  const uid = limitUid(advId, sceneIdx, chIdx, limIdx);
  const filledArr = getLimitArr(uid, lim.start);
  const fill = getLimitCount(uid, lim.start);
  let pips = "";
  for(let i=1;i<=lim.max;i++){
    pips += `<button class="pip ${filledArr.includes(i)?'filled':''}" onclick="event.stopPropagation(); setLimit('${uid}', ${i}, ${lim.max})" title="${i} von ${lim.max}"></button>`;
  }
  return `
  <div class="limit-row">
    <span class="limit-label">${esc(lim.label)}</span>
    <span class="limit-controls">
      <div class="pips">${pips}</div>
      <span class="limit-count">${fill} / ${lim.max}</span>
      <button class="limit-reset" onclick="event.stopPropagation(); resetLimit('${uid}')" title="Zurücksetzen">↺</button>
    </span>
    ${lim.note?`<span class="limit-note ${lim.secret?'secret':''}">${linkStatuses(esc(lim.note))}</span>`:''}
  </div>`;
}

// ---------- Favoriten: Challenges ----------
// Escaped ein String für die Einbettung in ein einfach-gequotetes JS-
// String-Literal innerhalb eines onclick="..."-Attributs (Attribut selbst
// bleibt doppelt gequotet). Nötig, weil einige Challenge-/Journey-Namen
// Apostrophe enthalten (z. B. "AN HONEST DAY'S WORK", "OL' SCALES").
function jsq(s){ return String(s==null?"":s).replace(/\\/g,"\\\\").replace(/'/g,"\\'"); }

// Schlüssel bewusst der GROSSGESCHRIEBENE Challenge-Name (wie in
// CHALLENGE_INDEX, siehe buildChallengeIndex()) — funktioniert damit
// gleichermaßen für Karten in einer Szene UND in der Challenge-Bibliothek,
// da beide dieselben ch.name-Werte verwenden.
function toggleChallengeFav(name){
  if(!name) return;
  const key = name.toUpperCase();
  if(state.favChallenges[key]) delete state.favChallenges[key];
  else state.favChallenges[key] = true;
  persistFavorites();
  syncChallengeFavButtons(key);
  updateFavBadge();
}
// Aktualisiert JEDEN aktuell im DOM sichtbaren Stern-Button für diese eine
// Challenge direkt (statt eines vollständigen render()) — dieselbe
// Challenge kann gleichzeitig in einer Szene UND in der offenen Challenge-
// Bibliothek sichtbar sein, beide Sterne müssen synchron bleiben, ohne
// Scrollposition oder aufgeklappte Karten zu verlieren.
function syncChallengeFavButtons(key){
  const on = !!state.favChallenges[key];
  document.querySelectorAll(".ch-fav-btn").forEach(el=>{
    if(el.dataset.favKey!==key) return;
    el.classList.toggle("active", on);
    el.textContent = on ? "★" : "☆";
    el.title = on ? "Favorit entfernen" : "Als Favorit markieren";
  });
}

// ---------- Favoriten: Glossar ----------
// Merkt sich, welcher GLOSSARY-Eintrag gerade im #glossModal offen ist,
// damit der Favoriten-Stern dort weiß, wofür er steht. Bleibt null, wenn
// das Modal stattdessen für einen Status-Begriff geöffnet wurde
// (openStatus()) — Status-Begriffe sind keine Glossar-Einträge und daher
// nicht favorisierbar.
let currentGlossId = null;
function toggleGlossFav(id){
  if(!id) return;
  if(state.favGloss[id]) delete state.favGloss[id];
  else state.favGloss[id] = true;
  persistFavorites();
  updateGlossFavBtn();
  updateFavBadge();
}
function updateGlossFavBtn(){
  const btn = document.getElementById("glossFavBtn");
  if(!btn) return;
  if(!currentGlossId){
    btn.style.display = "none";
    return;
  }
  btn.style.display = "";
  const on = !!state.favGloss[currentGlossId];
  btn.classList.toggle("active", on);
  btn.textContent = on ? "★" : "☆";
  btn.title = on ? "Favorit entfernen" : "Als Favorit markieren";
}

// ---------- Favoriten: Header-Badge & Fenster ----------
function favoriteCount(){
  return Object.keys(state.favChallenges).length + Object.keys(state.favGloss).length;
}
function updateFavBadge(){
  const el = document.getElementById("favBadgeCount");
  if(!el) return;
  const n = favoriteCount();
  el.textContent = n>0 ? String(n) : "";
}
function openFavorites(){
  renderFavoritesList();
  document.getElementById("favoritesModal").classList.add("open");
}
function closeFavorites(){
  document.getElementById("favoritesModal").classList.remove("open");
}

// Baut die Favoriten-Liste komplett neu (Challenges zuerst, dann Glossar)
// — analog zu renderChallengeLibrary() aus CHALLENGE_INDEX aufgelöst, aus
// GLOSSARY direkt per Key. Ein Favorit, dessen Quelleintrag nicht mehr
// existiert (z. B. nach künftigen Datenänderungen), wird als "nicht mehr
// gefunden" statt stillschweigend ausgelassen angezeigt, damit nichts
// spurlos verschwindet.
function renderFavoritesList(){
  if(!CHALLENGE_INDEX) buildChallengeIndex();
  const chKeys = Object.keys(state.favChallenges).sort();
  const glossKeys = Object.keys(state.favGloss).sort();

  document.getElementById("favCount").textContent =
    `${chKeys.length} Challenge${chKeys.length===1?'':'s'} · ${glossKeys.length} Glossareintrag${glossKeys.length===1?'':'e'}`;

  const chHtml = chKeys.length ? chKeys.map(key=>{
    const info = CHALLENGE_INDEX[key];
    if(!info){
      return `<div class="fav-missing">${esc(key)} <span class="fav-missing-tag">(nicht mehr gefunden)</span></div>`;
    }
    const ch = CHALLENGE_LIBRARY[info.catIdx].challenges[info.chIdx];
    return `
    <button class="search-item" onclick="closeFavorites(); jumpToChallenge('${info.catKey}', ${info.catIdx}, ${info.chIdx})">
      <div class="search-item-head">
        <span class="search-adv">⚔ Challenge</span>
        <span class="fav-remove" onclick="event.stopPropagation(); toggleChallengeFav('${jsq(ch.name)}'); renderFavoritesList();">✕ entfernen</span>
      </div>
      <div class="search-scene">${esc(ch.name)}${ch.subtitle?` <span style="font-weight:400;">(${esc(ch.subtitle)})</span>`:''}</div>
      <div class="search-snippet">${esc(ch.type||"")}</div>
    </button>`;
  }).join("") : `<div class="fav-empty">Noch keine Challenges favorisiert — klick auf den ☆ in einer Challenge-Karte.</div>`;

  const glossHtml = glossKeys.length ? glossKeys.map(id=>{
    const g = GLOSSARY[id];
    if(!g){
      return `<div class="fav-missing">${esc(id)} <span class="fav-missing-tag">(nicht mehr gefunden)</span></div>`;
    }
    return `
    <button class="search-item" onclick="closeFavorites(); openGloss('${id}')">
      <div class="search-item-head">
        <span class="search-adv">📖 Glossar</span>
        <span class="fav-remove" onclick="event.stopPropagation(); toggleGlossFav('${id}'); renderFavoritesList();">✕ entfernen</span>
      </div>
      <div class="search-scene">${esc(g.term)}</div>
      <div class="search-snippet">${esc(g.page||"")}</div>
    </button>`;
  }).join("") : `<div class="fav-empty">Noch keine Glossareinträge favorisiert — klick auf den ☆ oben in einem Glossarfenster.</div>`;

  document.getElementById("favList").innerHTML = `
    <div class="fav-section">
      <div class="ch-section-label">Challenges</div>
      ${chHtml}
    </div>
    <div class="fav-section">
      <div class="ch-section-label">Glossar</div>
      ${glossHtml}
    </div>`;
}

function difficultyPipsHtml(n){
  if(!n || n<1) return "";
  const filled = "\u2756".repeat(n); // ❖ Diamant, wie im Quellbuch
  return ` <span class="ch-difficulty" title="Schwierigkeit ${n}">${filled}</span>`;
}
function renderChallenge(advId, sceneIdx, chIdx, ch){
  const domId = `ch_${advId}_${sceneIdx}_${chIdx}`;
  const limitsHtml = (ch.limits||[]).map((l,i)=>renderLimitRow(advId, sceneIdx, chIdx, i, l)).join("");
  const tagsHtml = (ch.tags&&ch.tags.length) ? `<div class="chips">${ch.tags.map(t=>`<span class="chip">${linkStatuses(esc(t))}</span>`).join("")}</div>` : "";
  const specialHtml = (ch.special||[]).map(s=>`<div class="special-block"><div class="sp-title">Besonderheit${s.title?' · '+esc(s.title):''}</div><p>${linkStatuses(esc(s.text))}</p></div>`).join("");
  const secretsHtml = (ch.secrets||[]).map(s=>`<div class="secret-block"><div class="s-title">Geheimnis${s.title?' · '+esc(s.title):''}</div><p>${linkStatuses(esc(s.text))}</p></div>`).join("");
  const threatsHtml = (ch.threats||[]).map(t=>`
    <div class="threat">
      <div class="threat-head">
        <span class="th-name">${esc(t.name)}</span>
        <span class="th-flavor">${linkStatuses(esc(t.flavor))}</span>
      </div>
      <ul>${t.options.map(o=>`<li>${linkStatuses(esc(o))}</li>`).join("")}</ul>
    </div>`).join("");
  const threatsWrapHtml = (ch.threats&&ch.threats.length) ? `
    <div class="ch-section-label left">Threats &amp; Consequences</div>
    <div class="ch-threats">${threatsHtml}</div>` : "";
  const secretsWrapHtml = (specialHtml||secretsHtml) ? `
    <details class="ch-lcol-block ch-secrets">
      <summary class="ch-section-label">Geheimnisse</summary>
      <div class="ch-sec-grid">${specialHtml}${secretsHtml}</div>
    </details>` : "";
  const tagsWrapHtml = tagsHtml ? `
    <div class="ch-lcol-block">
      <div class="ch-section-label">Tags &amp; Statuses</div>
      ${tagsHtml}
    </div>` : "";
  const warnHtml = ch.warning ? `<div class="warn"><span>⚠</span><span><strong>Inhaltswarnung.</strong> ${esc(ch.warning.replace(/^Inhaltswarnung:\s*/,''))}</span></div>` : "";
  const isOpen = state.openChallenges.has(domId);
  const favKey = ch.name.toUpperCase();
  const isFav = !!state.favChallenges[favKey];

  return `
  <div class="challenge ${isOpen?'open':''}" id="${domId}">
    <button class="challenge-head" onclick="toggleChallenge('${domId}')">
      <span class="ch-type">${esc(ch.type)}</span>
      ${portraitHtml(ch.img,"ch-portrait")}
      <span class="ch-name-wrap">
        <div class="ch-name">${esc(ch.name)}${difficultyPipsHtml(ch.difficulty)}${ch.optional?' <span class="ch-optional-tag">optional</span>':''}${ch.subtitle?` <span class="ch-subtitle">(${esc(ch.subtitle)})</span>`:''}</div>
        <div class="ch-quicklimits">${(ch.limits||[]).map(l=>esc(l.label.split(' ')[0])+(l.max?(' '+l.max):' –')).join(" · ")}</div>
      </span>
      <span class="ch-fav-btn ${isFav?'active':''}" data-fav-key="${favKey.replace(/"/g,'&quot;')}" onclick="event.stopPropagation(); toggleChallengeFav('${jsq(ch.name)}')" title="${isFav?'Favorit entfernen':'Als Favorit markieren'}">${isFav?'★':'☆'}</span>
      <svg class="ch-chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
    </button>
    <div class="challenge-body">
      <div class="ch-inner">
        ${warnHtml}
        <div class="ch-cols">
          <div class="ch-col-left">
            <div class="ch-lcol-block">
              <div class="ch-section-label">Limits</div>
              <div class="limit-block">${limitsHtml}</div>
            </div>
            ${tagsWrapHtml}
          </div>
          <div class="ch-col-right">
            <div class="ch-desc">${(EDIT.on&&advId!=="lib") ? `<div${EA("challenges."+chIdx+".desc","br")}>${esc(ch.desc)}</div>` : descParagraphs(linkStatuses(esc(ch.desc)))}</div>
            ${threatsWrapHtml}
          </div>
          ${secretsWrapHtml}
        </div>
        ${ch.source?`<div class="ch-source">Quelle: ${esc(ch.source)}</div>`:''}
      </div>
    </div>
  </div>`;
}

const CHALLENGE_ROLES = ["Aggressor","Charge","Countdown","Influence","Mystery","Obstacle","Pursuer","Quarry","Sapper","Support","Watcher","Varies"];

function chMatchesFilter(ch){
  if(state.chRoleFilter && !(ch.type||"").includes(state.chRoleFilter)) return false;
  if(state.chSearch && state.chSearch.trim()){
    const q = state.chSearch.trim().toLowerCase();
    const hay = [ch.name, ch.subtitle, ch.type, ch.desc, (ch.tags||[]).join(" ")].join(" ").toLowerCase();
    if(!hay.includes(q)) return false;
  }
  return true;
}

function toggleChCat(key){
  if(state.openChCats.has(key)) state.openChCats.delete(key);
  else state.openChCats.add(key);
  refreshChallengeLibrary();
}

function scrollToChCat(key){
  state.openChCats.add(key);
  refreshChallengeLibrary();
  requestAnimationFrame(()=>{
    const el = document.querySelector(`[data-chcat="${key}"]`);
    if(el) el.scrollIntoView({behavior:"instant", block:"start"});
  });
}

let CHALLENGE_INDEX = null;
function buildChallengeIndex(){
  CHALLENGE_INDEX = {};
  CHALLENGE_LIBRARY.forEach((cat, catIdx)=>{
    cat.challenges.forEach((ch, chIdx)=>{
      CHALLENGE_INDEX[ch.name.toUpperCase()] = {catKey:cat.key, catIdx, chIdx};
    });
  });
}

function jumpToChallenge(catKey, catIdx, chIdx){
  state.chSearch = "";
  state.chRoleFilter = null;
  state.openChCats.add(catKey);
  const domId = `ch_lib_${catIdx}_${chIdx}`;
  state.openChallenges.add(domId);
  const modalWasClosed = !document.getElementById("challengesModal").classList.contains("open");
  renderChallengeLibrary();
  if(modalWasClosed) document.getElementById("challengesModal").classList.add("open");
  requestAnimationFrame(()=>{
    const el = document.getElementById(domId);
    if(el) el.scrollIntoView({behavior:"instant", block:"center"});
  });
}
// Analog zu openJourneyBySlug — öffnet die Challenge-Bibliothek direkt am
// passenden Profil, per exaktem (Großschreibung-normalisiertem) Namen.
// Für .gloss-Links im Fließtext auf Challenges, die NICHT über das
// "Neue Challenge: X"-Muster automatisch verlinkt werden (siehe
// linkChallengeRefs()), z. B. beiläufige Erwähnungen wie "Heckenhexen
// (S. 125)" ohne das Neue-Challenge-Präfix (neu, Juli 2026).
function openChallengeByName(name){
  if(!CHALLENGE_INDEX) buildChallengeIndex();
  const info = CHALLENGE_INDEX[name.toUpperCase()];
  if(!info) return;
  jumpToChallenge(info.catKey, info.catIdx, info.chIdx);
}

// Analog zu CHALLENGE_INDEX/jumpToChallenge, aber für Journey-Montagen:
// öffnet die Challenge-Bibliothek direkt mit dem vollständigen
// Journey-Profil (inkl. aller Vignetten) aufgeklappt. Wird von
// .gloss-Links wie "Rambling Journey" im Fließtext aufgerufen, statt nur
// eine Kurzbeschreibung im Glossar-Modal zu zeigen.
let JOURNEY_INDEX = null;
function buildJourneyIndex(){
  JOURNEY_INDEX = {};
  JOURNEY_LIBRARY.forEach((cat, catIdx)=>{
    cat.challenges.forEach((j, jIdx)=>{
      if(j.slug) JOURNEY_INDEX[j.slug] = {catKey:cat.key, catIdx, jIdx};
    });
  });
}
function jumpToJourney(catKey, catIdx, jIdx){
  state.chSearch = "";
  state.chRoleFilter = null;
  state.openChCats.add(catKey);
  const domId = `jn_${catIdx}_${jIdx}`;
  state.openChallenges.add(domId);
  const modalWasClosed = !document.getElementById("challengesModal").classList.contains("open");
  renderChallengeLibrary();
  if(modalWasClosed) document.getElementById("challengesModal").classList.add("open");
  requestAnimationFrame(()=>{
    const el = document.getElementById(domId);
    if(el) el.scrollIntoView({behavior:"instant", block:"center"});
  });
}
function openJourneyBySlug(slug){
  if(!JOURNEY_INDEX) buildJourneyIndex();
  const info = JOURNEY_INDEX[slug];
  if(!info) return;
  jumpToJourney(info.catKey, info.catIdx, info.jIdx);
}

// Turns "Neue Challenge: Shrewd Merchant" (etc.) inside already-rendered HTML
// into a clickable jump-link, whenever the referenced name exists in the
// Challenge-Bibliothek. Best-effort text matching — leaves anything it
// can't confidently resolve untouched.
function linkChallengeRefs(html){
  if(!html) return html;
  if(!CHALLENGE_INDEX) buildChallengeIndex();
  return html.replace(/((?:Neue Challenge|New Challenge)(?:\/Neue Challenge)?:\s*)([^)]+)/g, (m, prefix, rest)=>{
    const linked = rest.replace(/[A-Za-zÀ-ÿ][A-Za-zÀ-ÿ' \-]{2,}/g, (candidate)=>{
      const key = candidate.trim().toUpperCase();
      const info = CHALLENGE_INDEX[key];
      if(!info) return candidate;
      return `<a class="ch-jump-link" onclick="event.stopPropagation(); jumpToChallenge('${info.catKey}', ${info.catIdx}, ${info.chIdx})">${candidate}</a>`;
    });
    return prefix + linked;
  });
}

function setChSearch(val){
  state.chSearch = val;
  refreshChallengeLibrary();
}
function setChRoleFilter(role){
  state.chRoleFilter = (state.chRoleFilter===role) ? null : role;
  refreshChallengeLibrary();
}

function journeyMatchesFilter(j){
  if(state.chSearch && state.chSearch.trim()){
    const q = state.chSearch.trim().toLowerCase();
    const vigText = (j.vignettes||[]).map(v=>v.name+" "+v.flavor+" "+v.options.join(" ")).join(" ");
    const hay = [j.name, j.subtitle, j.journeyType, j.desc, (j.tags||[]).join(" "), vigText].join(" ").toLowerCase();
    if(!hay.includes(q)) return false;
  }
  return true;
}

// Journey-Bilder: kleiner Ausschnitt (assets/portraits/jn*.webp) -> Klick zeigt das ganze Bild.
const JOURNEY_IMGS = {
  "harvest-festival":["jnHarvestFestival","core","lmErzaehler_pdf082_B118_Challenges_1"],
  "dark-forest":["jnDarkForest","core","lmErzaehler_pdf089_B144_Challenges_1"],
  "echoing-cavern":["jnEchoingCavern","core","lmErzaehler_pdf090_B146_Challenges_1"],
  "noble-banquet":["jnNobleBanquet","core","lmErzaehler_pdf100_B174_Challenges_1"],
  "ongoing-battle":["jnOngoingBattle","core","lmErzaehler_pdf102_B180_Challenges_1"],
  "desolate-wasteland":["jnDesolateWasteland","core","lmErzaehler_pdf104_B186_Challenges_1"],
  "crafting":["jnCrafting","core","lmErzaehler_pdf106_B194_Challenges_1"],
  "provisioning":["jnProvisioning","core","lmErzaehler_pdf107_B196_Challenges_1"],
  "blood-water-feud":["jnBloodWaterFeud","hr","hr_pdf082_B252_Challenges_1"],
  "common-weal":["jnCommonWeal","hr","hr_pdf083_B254_Challenges_1"],
  "barrow":["jnBarrow","hr","hr_pdf090_B282_Challenges_1"]
};
function jnImgFull(slug){
  const m = JOURNEY_IMGS[slug]; if(!m) return "";
  return "assets/galerie/"+(m[1]==="hr"?"hearts-of-ravensdale":"litm-core")+"/full/"+m[2]+".webp";
}
function openJnImg(slug, ev){
  if(ev) ev.stopPropagation();
  const src = jnImgFull(slug); if(!src) return;
  if(window.Zeigen){ Zeigen.open(0, [{src:new URL(src, location.href).href, el:null}]); return; }
  const ov = document.createElement("div");
  ov.className = "jn-lightbox";
  ov.innerHTML = `<img src="${src}" alt="">`;
  const close = ()=>{ ov.remove(); document.removeEventListener("keydown", onKey); };
  const onKey = e=>{ if(e.key==="Escape") close(); };
  ov.onclick = close;
  document.addEventListener("keydown", onKey);
  document.body.appendChild(ov);
}
function jnThumbHtml(j, cls){
  const m = j.slug && JOURNEY_IMGS[j.slug]; if(!m) return "";
  return `<img class="${cls}" src="assets/portraits/${m[0]}.webp" alt="" data-zg="no" loading="lazy" onclick="openJnImg('${j.slug}',event)" title="Ganzes Bild ansehen">`;
}

function renderJourneyCard(catIdx, jIdx, j){
  const domId = `jn_${catIdx}_${jIdx}`;
  const isOpen = state.openChallenges.has(domId);
  const tagsHtml = (j.tags&&j.tags.length) ? `<div class="chips">${j.tags.map(t=>`<span class="chip">${linkStatuses(esc(t))}</span>`).join("")}</div>` : "";
  const gcHtml = (j.generalConsequences&&j.generalConsequences.length) ? `
    <div class="jn-gc">
      <div class="jn-gc-title">Allgemeine Konsequenzen</div>
      <ul>${j.generalConsequences.map(o=>`<li>${linkChallengeRefs(linkStatuses(esc(o)))}</li>`).join("")}</ul>
    </div>` : "";
  const rewardHtml = j.reward ? `<div class="reward-box" style="margin-bottom:14px;"><strong>Belohnung:</strong> ${linkChallengeRefs(linkStatuses(esc(j.reward)))}</div>` : "";
  const vignettesHtml = (j.vignettes||[]).map(v=>`
    <div class="vignette"><div class="v-name">${esc(v.name)}</div><div class="v-flavor">${linkStatuses(esc(v.flavor))}</div><ul>${v.options.map(o=>`<li>${linkChallengeRefs(linkStatuses(esc(o)))}</li>`).join("")}</ul></div>`).join("");
  const noVignettesNote = (!j.vignettes || j.vignettes.length===0)
    ? `<p class="ch-desc" style="border-top:none; padding-top:0; font-style:italic; opacity:.75;">Keine eigenen Vignetten im Quelltext — dient als Status-/Tag-Vorlage oder wird mit Vignetten anderer Journeys kombiniert.</p>` : "";

  return `
  <div class="challenge ${isOpen?'open':''}" id="${domId}">
    <button class="challenge-head" onclick="toggleChallenge('${domId}')">
      <span class="ch-type">${esc(j.journeyType||'Journey')}</span>
      ${jnThumbHtml(j,"jn-head-img")}
      <span class="ch-name-wrap">
        <div class="ch-name">${esc(j.name)}${j.subtitle?` <span class="ch-subtitle">(${esc(j.subtitle)})</span>`:''}</div>
        <div class="ch-quicklimits">${(j.vignettes||[]).length} Vignette${(j.vignettes||[]).length===1?'':'n'}</div>
      </span>
      <svg class="ch-chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
    </button>
    <div class="challenge-body">
      <div class="ch-inner">
        ${jnThumbHtml(j,"jn-body-img")}
        <div class="ch-desc">${descParagraphs(linkStatuses(esc(j.desc)))}</div>
        ${tagsHtml}
        ${rewardHtml}
        ${gcHtml}
        ${noVignettesNote}
        ${vignettesHtml?`<div class="jn-vgrid">${vignettesHtml}</div>`:''}
        ${j.source?`<div class="ch-source">Quelle: ${esc(j.source)}</div>`:''}
      </div>
    </div>
  </div>`;
}

function loreStatusLabel(status){
  if(status==="found") return "✅ Vollständig";
  if(status==="partial") return "⚠️ Teilweise";
  return "❌ Fehlt";
}

function renderLoreLibrary(){
  const coreHtml = CORE_REVELATIONS.map(r=>`
    <div class="lore-core-card">
      <div class="lore-num">Kern-Enthüllung ${r.num}${r.optional?' <em>(optional)</em>':''}</div>
      <p>${esc(r.text)}</p>
      ${r.context?`<div class="lore-context">${esc(r.context)}</div>`:""}
      <div class="lore-found">Fundort: ${esc(r.foundIn)}</div>
    </div>`).join("");

  const loreHtml = LORE_REVELATIONS.map(r=>`
    <div class="lore-card">
      <div class="lore-letter">${esc(r.id)}</div>
      <div class="lore-card-body">
        <p class="lore-text">${esc(r.text)}</p>
        <div class="lore-threads">${r.threads.map(t=>`<span class="lore-thread-chip">${esc(t)}</span>`).join("")}</div>
        ${r.context?`<div class="lore-context">${esc(r.context)}</div>`:""}
        <div class="lore-found">Fundort: ${esc(r.foundIn)}</div>
      </div>
      <span class="lore-status ${r.status}">${loreStatusLabel(r.status)}</span>
    </div>`).join("");

  document.getElementById("loreLibBody").innerHTML = `
  <div class="ch-library lore-library">
    <div class="ch-lib-hero">
      <div class="eyebrow">Nachschlagewerk</div>
      <h1 class="lore-h1">Lore- &amp; Kern-Enthüllungen</h1>
    </div>

    <div class="ch-section-divider"><span>Kern-Enthüllungen</span></div>
    <p class="ch-section-intro">Diese neun Enthüllungen bilden den roten Faden der Haupthandlung — die Bedrohung der Dales und ihre Rettung. Alle neun sind vollständig und wortgleich in den Abenteuer-Dateien enthalten.</p>
    <div class="lore-core-grid">${coreHtml}</div>

    <div class="ch-section-divider"><span>Lore-Enthüllungen (Hintergrundwissen)</span></div>
    <p class="ch-section-intro">Liefern Hintergrundwissen über die Welt jenseits der Dales, organisiert in sechs thematischen Strängen (General, Creatures, Magic &amp; Thaumaturges, Gwyrdolin, War of Thaumaturges, Winterkönig &amp; Stormhelm, Stars, Miasma). Mit Adventure 7 (Die Mosaiken im Ummauerten Garten) sind jetzt elf der zwölf Lore-Enthüllungen (A–D, F–L) vollständig und eigenständig auffindbar — H, J und L kommen dabei überhaupt erst in Adventure 7 hinzu, K wird dort erstmals vollständig ausgesprochen. Nur Enthüllung E bleibt weiterhin unbenannt mit K verschmolzen in Adventure 3 und gilt als „teilweise" gefunden.</p>
    <div class="lore-thread-list">${loreHtml}</div>
  </div>`;
}

function renderChallengeLibrary(){
  const totalCount = CHALLENGE_LIBRARY.reduce((n,c)=>n+c.challenges.length,0);
  const searching = !!(state.chSearch && state.chSearch.trim()) || !!state.chRoleFilter;

  const roleChips = CHALLENGE_ROLES.map(r=>
    `<button class="ch-role-chip ${state.chRoleFilter===r?'active':''}" onclick="setChRoleFilter('${r}')">${r}</button>`
  ).join("");

  let visibleTotal = 0;
  const catsHtml = CHALLENGE_LIBRARY.map((cat, catIdx)=>{
    const filtered = cat.challenges
      .map((ch, chIdx)=>({ch, chIdx}))
      .filter(x=>chMatchesFilter(x.ch));
    visibleTotal += filtered.length;
    if(searching && filtered.length===0) return "";
    const isOpen = searching || state.openChCats.has(cat.key);
    const cardsHtml = filtered
      .sort((a,b)=>a.ch.name.localeCompare(b.ch.name))
      .map(x=>renderChallenge("lib", catIdx, x.chIdx, x.ch)).join("");
    return `
    <div class="ch-cat ${isOpen?'open':''}" data-chcat="${cat.key}">
      <button class="ch-cat-head" onclick="toggleChCat('${cat.key}')">
        <span class="ch-cat-title">${esc(cat.label)}</span>
        <span class="ch-cat-count">${filtered.length}${filtered.length!==cat.challenges.length?' / '+cat.challenges.length:''}</span>
        <svg class="ch-chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
      </button>
      <div class="ch-cat-body">${cardsHtml}</div>
    </div>`;
  }).join("");

  const totalJourneys = JOURNEY_LIBRARY.reduce((n,c)=>n+c.challenges.length,0);
  let visibleJourneys = 0;
  const journeysHtml = state.chRoleFilter ? "" : JOURNEY_LIBRARY.map((cat, catIdx)=>{
    const filtered = cat.challenges
      .map((j, jIdx)=>({j, jIdx}))
      .filter(x=>journeyMatchesFilter(x.j));
    visibleJourneys += filtered.length;
    if(searching && filtered.length===0) return "";
    const isOpen = searching || state.openChCats.has(cat.key);
    const cardsHtml = filtered
      .sort((a,b)=>a.j.name.localeCompare(b.j.name))
      .map(x=>renderJourneyCard(catIdx, x.jIdx, x.j)).join("");
    return `
    <div class="ch-cat ${isOpen?'open':''}" data-chcat="${cat.key}">
      <button class="ch-cat-head" onclick="toggleChCat('${cat.key}')">
        <span class="ch-cat-title">${esc(cat.label)}</span>
        <span class="ch-cat-count">${filtered.length}${filtered.length!==cat.challenges.length?' / '+cat.challenges.length:''}</span>
        <svg class="ch-chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
      </button>
      <div class="ch-cat-body">${cardsHtml}</div>
    </div>`;
  }).join("");

  document.getElementById("chLibBody").innerHTML = `
  <div class="ch-library chlib2">
    <div class="ch-lib-hero">
      <div class="chl-title">
        <h1>Challenge-Bibliothek</h1>
        <div class="chl-count">${totalCount} Challenges · ${totalJourneys} Journeys</div>
      </div>
      <div class="ch-lib-subnav">
        <button class="ch-subnav-chip" onclick="scrollToChCat('td-adversaries')">Twilight Deck</button>
        <button class="ch-subnav-chip" onclick="scrollToChCat('cb-homestead-village')">Core Book</button>
        <button class="ch-subnav-chip" onclick="scrollToChCat('dalish-village')">Hearts of Ravensdale</button>
        <button class="ch-subnav-chip" onclick="scrollToChCat('jn-corebook')">Journeys</button>
      </div>
    </div>
    <div class="ch-lib-controls">
      <div class="ch-lib-controls-row">
        <input type="text" class="ch-search" placeholder="Suche nach Namen, Tags, Stichworten …" value="${esc(state.chSearch).replace(/"/g,'&quot;')}" oninput="setChSearch(this.value)">
        <button class="collapse-all-btn" onclick="collapseAllChallenges()" title="Alle aufgeklappten Karten einklappen">Alle einklappen</button>
      </div>
      <div class="ch-role-chips">${roleChips}</div>
    </div>
    ${searching?`<div class="ch-search-status">${visibleTotal} Challenge-Treffer${state.chRoleFilter?'':` · ${visibleJourneys} Journey-Treffer`}</div>`:""}
    <div class="ch-cats">${catsHtml}</div>
    ${state.chRoleFilter?'':`
    <div class="ch-section-divider"><span>Journeys &amp; Vignetten</span></div>
    <div class="ch-cats">${journeysHtml}</div>
    `}
  </div>`;
}

function renderScene(adv, scene, idx){
  const regularScenes = adv.scenes.filter(s=>s.kind==="scene");
  const posAmongRegular = adv.scenes.slice(0, idx+1).filter(s=>s.kind==="scene").length;
  const eyebrowKind = scene.kind==="intro" ? "Überblick" : scene.kind==="aftermath" ? "Abschluss" : `Szene ${posAmongRegular} von ${regularScenes.length}`;

  let html = (EDIT.on ? editBarHtml(adv, scene) : "") + `
  <div class="scene-head">${EDIT.on?"":editToggleHtml()}
    <div class="scene-eyebrow"><span class="raven-icon">${RAVEN_SVG}</span>${eyebrowKind}<span class="pg">· ${esc(scene.page)}</span></div>
    <h1><span${EA("title")}>${esc(scene.title)}</span>${scene.optional?' <span style="font-size:.5em; color:var(--text-faint); font-weight:400;">(optional)</span>':''}</h1>
    <div class="en-title"${EA("en")}>${esc(scene.en)}</div>
  </div>`;

  if(false && scene.overview && scene.overview.length){ /* Kurzzusammenfassung am Szenenanfang ausgeblendet (Wunsch) */
    html += `<div class="scene-overview"><ul>${scene.overview.map((o,oi)=>(o===""&&!EDIT.on)?"":`<li${EA("overview."+oi)}>${LS(esc(o))}</li>`).join("")}</ul></div>`;
  }

  // Vorlesetexte, Figuren und Challenges ohne "after"-Feld (oder after:0)
  // erscheinen wie bisher gesammelt in ihrer eigenen Sektion. Ein Eintrag mit
  // after:N wird stattdessen erst NACH dem N-ten flow-Absatz eingeblendet —
  // so tauchen mehrere Vorlesetexte, NPCs oder Challenges einer Szene nicht
  // mehr alle gebündelt auf, sondern erst dann, wenn sie im Ablauf der Szene
  // chronologisch auch wirklich dran wären.
  const topReads = (scene.readAloud||[]).filter(ra=>!ra.after);
  const positionedReads = (scene.readAloud||[]).filter(ra=>ra.after);
  const readsAfter = idx => positionedReads.filter(ra=>ra.after===idx);
  const renderReadBox = ra => {
    if(EDIT.on){
      // Im Bearbeitungsmodus ohne <details>/<summary> (Leertaste würde sonst das Aufklappen umschalten)
      const ri = (scene.readAloud||[]).indexOf(ra);
      return `
      <div class="readaloud ${ra.zusatzfund?'zusatzfund':''}">
        <div class="ra-head static"><span class="ra-label"><span${EA("readAloud."+ri+".label")}>${esc(ra.label)}</span></span><span class="ra-page">${esc(ra.page)}</span></div>
        <div class="ra-body"><div${EA("readAloud."+ri+".text","nl")}>${editDisplayValue("nl", ra.text)}</div></div>
      </div>`;
    }
    return `
      <details class="readaloud ${ra.zusatzfund?'zusatzfund':''}" open>
        <summary class="ra-head"><span class="ra-label"><span class="ra-toggle">▸</span>${/^vorlese/i.test(ra.label||"")?"":esc(ra.label)}</span><span class="ra-page">${esc(ra.page)}</span></summary>
        <div class="ra-body">${ra.text.split(/\n\n+/).map(p=>`<p>${esc(p)}</p>`).join("")}</div>
      </details>`;
  };

  // Figuren-Karten ohne Porträt, deren Name schon im Rest der Szene (Ablauf, Vignetten,
  // Challenges, Vorlesetext …) vorkommt, werden nicht noch einmal gedoppelt gezeigt.
  const sceneText = (()=>{ try{ const c = Object.assign({}, scene); delete c.npcs; return JSON.stringify(c).toLowerCase(); }catch(e){ return ""; } })();
  const npcDup = n => !EDIT.on && !n.img && (()=>{ const nm=(n.name||"").toLowerCase().replace(/\(.*?\)/g,"").split(/[,&\/]| und | oder /).map(x=>x.trim()).filter(x=>x.length>=3); return nm.length>0 && nm.every(x=>sceneText.includes(x.split(" ")[0])); })();
  const shownNpcs = (scene.npcs||[]).filter(n=>!npcDup(n));
  const topNpcs = shownNpcs.filter(n=>!n.after);
  const positionedNpcs = shownNpcs.filter(n=>n.after);
  const npcsAfter = idx => positionedNpcs.filter(n=>n.after===idx);
  const npcBody = (n, pre) => `<div class="npc-body"><div class="npc-top">${npcNameHtml(n.name)}<span class="npc-role"${EA(pre+".role")}>${esc(n.role)}</span></div><p${EA(pre+".text")}>${LS(esc(n.text))}</p></div>`;
  const renderNpcCard = n => `<div class="npc-grid"><div class="npc-card">${portraitHtml(n.img,"npc-portrait")}${npcBody(n,"npcs."+(scene.npcs||[]).indexOf(n))}</div></div>`;

  const allChallenges = (scene.challenges||[]).map((ch,ci)=>({ch,ci}));
  const topChallenges = allChallenges.filter(x=>!x.ch.after);
  const positionedChallenges = allChallenges.filter(x=>x.ch.after);
  const challengesAfter = idx => positionedChallenges.filter(x=>x.ch.after===idx);

  if(topReads.length){
    html += `<div class="section">`;
    topReads.forEach(ra=> html += renderReadBox(ra));
    html += `</div>`;
  }

  if(scene.flow && scene.flow.length){
    const flowLabelHtml = scene.hideFlowLabel ? "" : `<div class="section-label">Ablauf der Szene<div class="line"></div></div>`;
    html += `<div class="section">${flowLabelHtml}<div class="flow">`;
    scene.flow.forEach((p,pi)=>{
      if(p!==""||EDIT.on) html += `<p${EA("flow."+pi)}>${LS(p)}</p>`;
      readsAfter(pi+1).forEach(ra=> html += renderReadBox(ra));
      npcsAfter(pi+1).forEach(n=> html += renderNpcCard(n));
      challengesAfter(pi+1).forEach(x=> html += renderChallenge(adv.id, idx, x.ci, x.ch));
    });
    html += `</div></div>`;
  }

  if(topNpcs.length){
    html += `<div class="section"><div class="section-label">Figuren<div class="line"></div></div><div class="npc-grid">`;
    topNpcs.forEach(n=> html += `<div class="npc-card">${portraitHtml(n.img,"npc-portrait")}${npcBody(n,"npcs."+(scene.npcs||[]).indexOf(n))}</div>`);
    html += `</div></div>`;
  }

  if(scene.extra){
    if(scene.extra.type==="list"){
      html += `<div class="section"><div class="section-label"><span${EA("extra.heading")}>${esc(scene.extra.heading)}</span><div class="line"></div></div><div class="reward-box"><ul style="margin:0; padding-left:18px;">${scene.extra.items.map((i,ii)=>(i===""&&!EDIT.on)?"":`<li${EA("extra.items."+ii)} style="margin-bottom:6px; line-height:1.55;">${LS(esc(i))}</li>`).join("")}</ul></div></div>`;
    } else if(scene.extra.type==="companions"){
      html += `<div class="section"><div class="section-label"><span${EA("extra.heading")}>${esc(scene.extra.heading)}</span><div class="line"></div></div><div class="npc-grid">`;
      scene.extra.items.forEach((n,ii)=> html += `<div class="npc-card companion">${portraitHtml(n.img,"npc-portrait")}${npcBody(n,"extra.items."+ii)}</div>`);
      html += `</div></div>`;
    }
  }
  if(scene.extra2){
    if(scene.extra2.type==="list"){
      html += `<div class="section"><div class="section-label"><span${EA("extra2.heading")}>${esc(scene.extra2.heading)}</span><div class="line"></div></div><div class="reward-box"><ol style="margin:0; padding-left:18px;">${scene.extra2.items.map((i,ii)=>(i===""&&!EDIT.on)?"":`<li${EA("extra2.items."+ii)} style="margin-bottom:6px; line-height:1.55;">${LS(esc(i))}</li>`).join("")}</ol></div></div>`;
    } else if(scene.extra2.type==="companions"){
      html += `<div class="section"><div class="section-label"><span${EA("extra2.heading")}>${esc(scene.extra2.heading)}</span><div class="line"></div></div><div class="npc-grid">`;
      scene.extra2.items.forEach((n,ii)=> html += `<div class="npc-card companion">${portraitHtml(n.img,"npc-portrait")}${npcBody(n,"extra2.items."+ii)}</div>`);
      html += `</div></div>`;
    }
  }

  if(scene.vignettes && scene.vignettes.length){
    html += `<div class="section"><div class="section-label">Vignetten (Journey)<div class="line"></div></div>`;
    scene.vignettes.forEach((v,vIdx)=>{
      const vUid = vignetteUid(adv.id, idx, vIdx);
      const played = !!state.vignettesPlayed[vUid];
      html += `<div class="vignette ${played?'played':''}">
        <button class="v-played-toggle" onclick="event.stopPropagation(); toggleVignettePlayed('${vUid}')" title="${played?'Als nicht gespielt markieren':'Als gespielt markieren — fließt in die PDF-Zusammenfassung ein'}">${played?'✓':''}</button>
        <div class="v-name"${EA("vignettes."+vIdx+".name")}>${esc(v.name)}</div><div class="v-flavor"${EA("vignettes."+vIdx+".flavor")}>${LS(esc(v.flavor))}</div><ul>${v.options.map((o,oi)=>`<li${EA("vignettes."+vIdx+".options."+oi)}>${LS(esc(o))}</li>`).join("")}</ul></div>`;
    });
    html += `</div>`;
  }

  if(topChallenges.length){
    html += `<div class="section"><div class="section-label"><span class="raven-icon">${RAVEN_SVG}</span>Challenges<div class="line"></div><button class="collapse-all-btn" onclick="collapseAllChallenges()" title="Alle aufgeklappten Challenge-Karten einklappen">Alle einklappen</button></div>`;
    topChallenges.forEach(x=> html += renderChallenge(adv.id, idx, x.ci, x.ch));
    html += `</div>`;
  }

  if(scene.revelations && scene.revelations.length){
    html += `<div class="section"><div class="section-label">Revelations<div class="line"></div></div>`;
    scene.revelations.forEach((r,ri)=> html += `<div class="reveal-row"><span class="rk">${esc(r.kind)}${r.ref?' '+esc(r.ref):''}</span><p${EA("revelations."+ri+".text")}>${esc(r.text)}</p></div>`);
    html += `</div>`;
  }

  if(scene.rewards && scene.rewards.length){
    html += `<div class="section"><div class="section-label">Belohnung<div class="line"></div></div><div class="reward-box"><ul style="margin:0; padding-left:18px;">${scene.rewards.map((r,ri)=>(r===""&&!EDIT.on)?"":`<li${EA("rewards."+ri)} style="margin-bottom:6px; line-height:1.55;">${LS(esc(r))}</li>`).join("")}</ul></div></div>`;
  }

  if(scene.tips && scene.tips.length){
    html += `<div class="section">`;
    scene.tips.forEach((t,ti)=>{ if(t!==""||EDIT.on) html += `<div class="tip"><span>🖋</span><span${EA("tips."+ti)}>${LS(esc(t))}</span></div>`; });
    html += `</div>`;
  }

  // Wachstum (Improve/Milestone/Abandon) steht bewusst ganz am Ende der
  // Aftermath-Folie — erst die komplette Nachspiel-Zusammenfassung
  // (Belohnungen, Review-Fragen etc.), dann als letzter Block die
  // Charakter-Entwicklung, siehe Abschnitt 7 der DOKUMENTATION.
  if(scene.showImprovement){
    html += renderImprovementBox();
  }

  return html;
}

// Feste, wiederverwendbare Übersicht über Hero-Development (Improve, Milestone,
// Abandon) — erscheint auf jeder Aftermath-Folie, damit du nach dem Abenteuer
// direkt mit der Gruppe durchgehen kannst, wie sich die Charaktere entwickeln.
function renderImprovementBox(){
  return `
  <div class="section">
    <details class="growth-details">
      <summary class="section-label growth-summary"><span class="raven-icon">${RAVEN_SVG}</span>Wachstum: Improve, Milestone, Abandon<div class="line"></div></summary>
      <div class="reward-box">
        <p style="margin:0 0 12px; font-family:var(--serif-body); font-size:14px; line-height:1.6; color:var(--text-lo);">Guter Moment für eine kurze Runde: Frag jede Person am Tisch, ob sich für ihren Hero in diesem Abenteuer etwas bei Improve, Milestone oder Abandon getan hat.</p>
        <ul style="margin:0; padding-left:18px; font-size:13.5px; line-height:1.65;">
          <li style="margin-bottom:10px;"><strong>IMPROVE (wachsen):</strong> Wurde ein weakness tag in einer Action/Reaction invoked (oder Reflect beim Camping gewählt) → 1 Marke auf dem betroffenen Theme. Beim dritten Improve: Marken zurücksetzen und <em>eine</em> Verbesserung wählen — neuer Power Tag · Weakness Tag hinzufügen/entfernen · eine Special Improvement · Abandon-/Milestone-Marken zurücksetzen · Promise markieren.</li>
          <li style="margin-bottom:10px;"><strong>MILESTONE (Fortschritt im Quest):</strong> Ein bedeutendes Achievement im persönlichen Quest wurde erreicht → 1 Marke auf dessen Theme. Jeder Milestone sollte größer sein als der vorherige. Beim dritten Milestone <strong>evolviert</strong> das Theme: Promise markieren, neuer Titel-Tag, ggf. neuer Theme-Typ oder neue Might, Tags überarbeiten, Quest anpassen.</li>
          <li style="margin-bottom:0;"><strong>ABANDON (einen Quest aufgeben):</strong> Der Quest wurde verraten oder aufgegeben → 1 Marke auf dessen Theme. Beim dritten Abandon wird das Theme <strong>ersetzt</strong>: Promise markieren, Theme-Karte verwerfen, neues „nascent“ Theme mit nur einem Titel-Tag erschaffen (wächst über die nächsten zwei Improves zurück auf drei Power Tags).</li>
        </ul>
      </div>
      <div class="tip"><span>🖋</span><span>Die Entscheidung liegt bei den Spieler:innen — du kannst als Narrator Vorschläge machen oder Momente hervorheben, aber nicht vorschreiben, was als Improve, Milestone oder Abandon zählt.</span></div>
    </details>
  </div>`;
}

function renderSceneNav(adv, idx){
  const prev = idx>0 ? adv.scenes[idx-1] : null;
  const next = idx<adv.scenes.length-1 ? adv.scenes[idx+1] : null;
  const dots = adv.scenes.map((s,i)=>`<span class="d ${i===idx?'active':''}"></span>`).join("");
  return `
  <div class="scenenav">
    <button class="nav-btn" ${!prev?'disabled':''} onclick="goScene(${idx-1})">
      <svg class="arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 18l-6-6 6-6"/></svg>
      <span class="lbl">${prev?esc(effTitle(adv.id,prev)):'Anfang'}</span>
    </button>
    <div class="nav-dots">${dots}</div>
    <button class="nav-btn" ${!next?'disabled':''} onclick="goScene(${idx+1})" style="justify-content:flex-end;">
      <span class="lbl">${next?esc(effTitle(adv.id,next)):'Ende'}</span>
      <svg class="arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
    </button>
  </div>`;
}

// Dauerhaft rechts fixierter Zeit-Limit-Tracker — bisher nur für Abenteuer 2
// ("An Important Letter"). Nutzt exakt dieselbe Pip-/Speicher-Logik wie
// Challenge-Limits (renderLimitRow → state.limits[uid] → setLimit/resetLimit),
// nur mit einer erfundenen, aber eindeutigen uid statt einer echten Challenge
// (sceneIdx:"global", chIdx:"time"), damit der Fortschritt über alle Szenen
// des Abenteuers hinweg erhalten bleibt statt pro Szene zurückgesetzt zu
// werden. Für weitere Abenteuer mit eigenem Zeit-Limit hier einfach per
// adv.id verzweigen.
function renderTimeTracker(adv){
  if(adv.id!=="a2") return "";
  const lim = { label:"ZEIT VERGEHT (Time Passes)", max:5 };
  const tip = "Zeit-Limit — ZEIT VERGEHT (Time Passes): Sammelt sich über das gesamte Abenteuer hinweg an, szenenübergreifend — siehe Callout „TIME PASSES“ in Szene 2. Bei jedem Stand: Erinnerungen an Walric verblassen, seine Notizen werden unleserlicher.";
  const uid = limitUid(adv.id, "global", "time", 0);
  const filledArr = getLimitArr(uid);
  const fill = getLimitCount(uid);
  let pips = "";
  for(let i=1;i<=lim.max;i++){
    pips += `<button class="pip ${filledArr.includes(i)?'filled':''}" onclick="event.stopPropagation(); setLimit('${uid}', ${i}, ${lim.max})" title="${tip} (${i} von ${lim.max})"></button>`;
  }
  return `
  <div class="time-tracker" title="${tip} — Stand: ${fill} / ${lim.max}">
    <div class="tt-head"><span class="tt-clock">${CLOCK_SVG}</span></div>
    <div class="tt-pips">${pips}</div>
    <button class="limit-reset" onclick="event.stopPropagation(); resetLimit('${uid}')" title="Zeit-Limit zurücksetzen">↺</button>
  </div>`;
}

// Auf schmalen Bildschirmen (Handy) ist die Seitenleiste ausgeblendet — dort springt
// diese Auswahlliste direkt zu jeder Szene (auf großen Bildschirmen per CSS versteckt).
function renderScenePicker(adv){
  const chips = adv.scenes.map((s,i)=>{
    const active = i===state.sceneIdx, checkable = s.kind!=="intro";
    const done = checkable && !!state.scenesCompleted[sceneCompleteKey(adv.id, i)];
    const n = s.kind==="intro" ? "Ü" : s.kind==="aftermath" ? "A" : String(i);
    return `<button class="sc-chip ${active?'active':''} ${done?'done':''}" onclick="goScene(${i})" aria-label="${esc(effTitle(adv.id,s))}" ${active?'aria-current="true"':""}><span class="sc-n">${n}</span>${active?`<span class="sc-t">${esc(effTitle(adv.id,s))}</span>`:""}</button>`;
  }).join("");
  return `<div class="scene-picker-wrap"><div class="scene-chips">${chips}</div>${noteTileHere(adv)}
    <button class="edit-toggle edit-toggle-m ${EDIT.on?'active':''}" onclick="toggleEditMode()" title="Szenentext bearbeiten" aria-label="Szenentext bearbeiten"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 6V4.5h14V6"/><path d="M12 4.5V19"/><path d="M9 19h6"/></svg></button>
  </div>`;
}
function sceneTabsOn(){ try{ return localStorage.getItem("wake.sceneTabs")==="1"; }catch(e){ return false; } }
function renderSceneTabs(adv){
  const tabs = adv.scenes.map((s,i)=>{
    const active = i===state.sceneIdx;
    const checkable = s.kind!=="intro";
    const done = checkable && !!state.scenesCompleted[sceneCompleteKey(adv.id, i)];
    const eyebrow = s.kind==="intro" ? "Ü" : s.kind==="aftermath" ? "A" : String(i);
    const chk = checkable ? `<button class="trail-check ${done?'done':''}" onclick="event.stopPropagation(); toggleSceneCompleted('${adv.id}', ${i})" title="${done?'Als nicht erledigt markieren':'Als erledigt markieren'}">${done?'✓':''}</button>` : "";
    return `<div class="case-tab ${active?'active':''} ${done?'done':''}" role="button" tabindex="0" onclick="goScene(${i})" title="${esc(effTitle(adv.id,s))}"><span class="ct-eyebrow">${eyebrow}</span><span class="ct-title">${esc(effTitle(adv.id,s))}</span>${chk}</div>`;
  }).join("");
  return `<div class="wk-head"><div class="crumbs"><a onclick="goPrep()">Start</a> › <a onclick="goOverview()">Abenteuer</a> › ${esc(adv.title)} <span class="wk-meta">· ${adv.scenes.length} Szenen · ${esc(adv.en)}</span></div></div><div class="case-tabbar">${tabs}${noteTileHere(adv)}</div>`;
}
function setSceneTabs(v){ try{ localStorage.setItem("wake.sceneTabs", v?"1":"0"); }catch(e){} document.body.classList.toggle("wk-tabs", v); render(); }
function renderAdventure(){
  const adv = ADVENTURES.find(a=>a.id===state.advId);
  if(!adv || adv.status!=="ready"){ goOverview(); return; }
  const scene = adv.scenes[state.sceneIdx];
  const hasTimeTracker = adv.id==="a2";
  const m2 = (typeof M2!=="undefined") && M2.on();
  app.innerHTML = renderTopbar() + `
  <div class="shell ${hasTimeTracker?'has-time-tracker':''} ${(m2||sceneTabsOn())?'tabs-top':''}">
    ${m2?M2.tabs(adv):sceneTabsOn()?renderSceneTabs(adv):renderPathrail(adv)}
    <div class="content-col">
      ${(m2&&M2.map)?M2.renderMap(adv):`<div class="stage-wrap">${renderScenePicker(adv)}<div class="notes-row">${noteTileHere(adv)}</div>${renderScene(adv, effScene(adv, scene), state.sceneIdx)}</div>`}
      ${renderTimeTracker(adv)}
    </div>
  </div>
  ${renderSceneNav(adv, state.sceneIdx)}
  `;
  document.body.classList.toggle("wk-tabs", !m2 && sceneTabsOn());
  document.body.classList.toggle("m2", !!m2);
  if(m2 && !M2.map) M2.layout(adv);
  { const at=document.querySelector(".case-tab.active"); if(at&&at.scrollIntoView) at.scrollIntoView({inline:"center",block:"nearest"}); }
}

function render(){
  stashEditPending();   // ungespeicherte Textänderungen vor dem Neuaufbau sichern
  if(state.view!=="adventure" && EDIT.on) leaveEditMode();
  document.body.classList.toggle("editing", EDIT.on);
  if(state.view==="prep") state.view="home";
  if(state.view==="overview" && false) renderPrep();
  else if(state.view==="book") renderBook();
  else if(state.view==="themen") renderThemen();
  else if(state.view==="home") renderHome();
  else if(state.view==="overview") renderOverview();
  else renderAdventure();
  updateFavBadge(); // Topbar wird bei jedem render() neu aufgebaut, Badge muss danach neu gesetzt werden
}

function scrollToTop(){
  window.scrollTo({top:0, behavior:"instant"});
}
