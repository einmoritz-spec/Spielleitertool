/* ---------- Volltextsuche über alle Abenteuer (neu, Juli 2026) ---------- */
// Eigenständiges Overlay-Fenster wie #rulesModal/#mapModal, NICHT über
// state.view geroutet. Das Suchfeld (#searchInput) ist statisches
// Body-Markup (siehe #rgSearch-Kommentar oben) — nur #searchResults wird
// pro Tastenanschlag per innerHTML neu befüllt, das Eingabefeld selbst
// bleibt unangetastet und verliert daher nie den Fokus.
let SEARCH_INDEX = null; // lazy gebaut beim ersten Öffnen, danach gecacht
function stripTagsForSearch(html){
  return String(html||"").replace(/<[^>]*>/g," ").replace(/\s+/g," ").trim();
}
// Sammelt sämtliche durchsuchbaren Textfelder EINER Szene (siehe
// Szenen-/Challenge-Schema in DOKUMENTATION.md, Abschnitt 2.2/2.3) zu
// einem einzigen Textblock. Bewusst großzügig (lieber ein Feld zu viel
// als eines zu wenig) — ein GM soll z. B. auch über ein Challenge-Tag
// oder eine Threat-Option fündig werden können, nicht nur über Titel/
// Vorlesetext.
function collectSceneSearchText(scene){
  const parts = [scene.title, scene.en, scene.summary];
  (scene.overview||[]).forEach(o=>parts.push(o));
  (scene.readAloud||[]).forEach(ra=>parts.push(ra.label, stripTagsForSearch(ra.text)));
  (scene.flow||[]).forEach(f=>parts.push(stripTagsForSearch(f)));
  (scene.npcs||[]).forEach(n=>parts.push(n.name, n.role, n.text));
  [scene.companions, scene.extra, scene.extra2].forEach(block=>{
    if(!block) return;
    parts.push(block.heading);
    (block.items||[]).forEach(it=>{
      if(typeof it==="string") parts.push(it);
      else if(it) parts.push(it.name, it.role, it.text);
    });
  });
  (scene.vignettes||[]).forEach(v=>{
    parts.push(v.name, v.flavor);
    (v.options||[]).forEach(o=>parts.push(o));
  });
  (scene.challenges||[]).forEach(ch=>{
    parts.push(ch.name, ch.type, ch.desc, ch.warning, ch.source);
    (ch.tags||[]).forEach(t=>parts.push(t));
    (ch.limits||[]).forEach(l=>parts.push(l.label, l.note));
    (ch.secrets||[]).forEach(s=>parts.push(s.title, s.text));
    (ch.threats||[]).forEach(t=>{
      parts.push(t.name, t.flavor);
      (t.options||[]).forEach(o=>parts.push(o));
    });
  });
  (scene.revelations||[]).forEach(r=>parts.push(r.text));
  (scene.rewards||[]).forEach(r=>parts.push(r));
  (scene.tips||[]).forEach(t=>parts.push(t));
  return parts.filter(Boolean).join(" \n ");
}
function buildSearchIndex(){
  const idx = [];
  // Szenen (bestehend)
  ADVENTURES.filter(a=>a.status==="ready" && a.scenes).forEach(adv=>{
    adv.scenes.forEach((scene0, sceneIdx)=>{
      const scene = effScene(adv, scene0);
      const text = collectSceneSearchText(scene);
      idx.push({
        type:"scene",
        advId:adv.id, advNum:adv.num, advTitle:adv.title,
        sceneIdx, sceneTitle:scene.title, scenePage:scene.page||"",
        text, textLower:text.toLowerCase(),
      });
    });
  });
  // Lore-Glossar (neu, Juli 2026) — bislang komplett unindiziert: ein
  // Ortsname oder Sachbegriff, der nur im Glossar lebt, war über die
  // Volltextsuche unauffindbar. Öffnet direkt den passenden Eintrag.
  Object.keys(GLOSSARY).forEach(id=>{
    const g = GLOSSARY[id];
    const bodyText = (g.body||[]).map(stripTagsForSearch).join(" \n ");
    const text = [g.term, bodyText].filter(Boolean).join(" \n ");
    idx.push({ type:"gloss", id, term:g.term, page:g.page||"", text, textLower:text.toLowerCase() });
  });
  // Regelglossar
  RULES_GLOSSARY.forEach((g,i)=>{
    const bodyText = (g.body||[]).map(stripTagsForSearch).join(" \n ");
    const text = [g.term, g.en, bodyText].filter(Boolean).join(" \n ");
    idx.push({ type:"rule", ruleIdx:i, term:g.term, page:g.page||"", text, textLower:text.toLowerCase() });
  });
  // Challenge-Bibliothek
  CHALLENGE_LIBRARY.forEach((cat, catIdx)=>{
    cat.challenges.forEach((ch, chIdx)=>{
      const parts = [ch.name, ch.subtitle, ch.type, ch.desc];
      (ch.tags||[]).forEach(t=>parts.push(t));
      (ch.limits||[]).forEach(l=>parts.push(l.label, l.note));
      (ch.special||[]).forEach(s=>parts.push(s.title, s.text));
      (ch.secrets||[]).forEach(s=>parts.push(s.title, s.text));
      (ch.threats||[]).forEach(t=>{ parts.push(t.name, t.flavor); (t.options||[]).forEach(o=>parts.push(o)); });
      const text = parts.filter(Boolean).join(" \n ");
      idx.push({ type:"challenge", catKey:cat.key, catIdx, chIdx, term:ch.name, sub:ch.subtitle||"", page:ch.source||"", text, textLower:text.toLowerCase() });
    });
  });
  // Journey-Bibliothek
  JOURNEY_LIBRARY.forEach((cat, catIdx)=>{
    cat.challenges.forEach((j, jIdx)=>{
      const parts = [j.name, j.subtitle, j.journeyType, j.desc];
      (j.tags||[]).forEach(t=>parts.push(t));
      (j.generalConsequences||[]).forEach(c=>parts.push(c));
      (j.vignettes||[]).forEach(v=>{ parts.push(v.name, v.flavor); (v.options||[]).forEach(o=>parts.push(o)); });
      const text = parts.filter(Boolean).join(" \n ");
      idx.push({ type:"journey", catKey:cat.key, catIdx, jIdx, term:j.name, sub:j.subtitle||"", page:j.journeyType||"", text, textLower:text.toLowerCase() });
    });
  });
  // Action Grimoire (neu)
  ACTION_GRIMOIRE.forEach(ch=>{
    ch.items.forEach((it,i)=>{
      let bodyText;
      if(it.kind==="action"){
        bodyText = [it.group||"", (it.examples||[]).join(" "), (it.explanation||[]).map(stripTagsForSearch).join(" "),
          (it.powerHelps||[]).join(" "), (it.powerHinders||[]).join(" "), stripTagsForSearch(it.success||""),
          (it.extraFeats||[]).join(" "), (it.consequences||[]).join(" ")].join(" \n ");
      } else {
        bodyText = (it.body||[]).map(stripTagsForSearch).join(" \n ");
      }
      const text = [it.term, ch.title, bodyText].filter(Boolean).join(" \n ");
      idx.push({ type:"action", uid:ch.num+"_"+i, chapterNum:ch.num, chapterTitle:ch.title, term:it.term, page:"", text, textLower:text.toLowerCase() });
    });
  });
  // Themenbuch-Fragen (neu)
  THEMEBOOK_QUESTIONS.forEach(book=>{
    book.entries.forEach(e=>{
      const parts = [e.term, e.sub, e.aspects, book.title];
      e.power.forEach(([l,q])=>parts.push(q));
      e.weak.forEach(([l,q])=>parts.push(q));
      parts.push(e.quest);
      const text = parts.filter(Boolean).join(" \n ");
      idx.push({ type:"themebook", bookId:book.id, bookTitle:book.title, bookIcon:THEMEBOOK_ICONS[book.icon]||"", catKey:e.key, term:e.term, sub:e.sub, text, textLower:text.toLowerCase() });
    });
  });
  return idx;
}
function openSearch(){
  if(!SEARCH_INDEX) SEARCH_INDEX = buildSearchIndex();
  const input = document.getElementById("searchInput");
  input.value = "";
  document.getElementById("searchResults").innerHTML = "";
  document.getElementById("searchCount").textContent = "Suchbegriff eingeben …";
  document.getElementById("searchModal").classList.add("open");
  setTimeout(()=>input.focus(), 30);
}
function closeSearch(){
  document.getElementById("searchModal").classList.remove("open");
}
function escRegex(s){ return s.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"); }
function searchSnippet(text, terms){
  const lower = text.toLowerCase();
  let pos = -1;
  terms.forEach(t=>{
    const p = lower.indexOf(t);
    if(p!==-1 && (pos===-1 || p<pos)) pos = p;
  });
  if(pos===-1) pos = 0;
  const start = Math.max(0, pos-60);
  const end = Math.min(text.length, pos+150);
  let snippet = escHtml((start>0?"… ":"") + text.slice(start,end).trim() + (end<text.length?" …":""));
  terms.forEach(t=>{
    if(!t) return;
    snippet = snippet.replace(new RegExp("("+escRegex(t)+")","ig"), "<mark>$1</mark>");
  });
  return snippet;
}
function jumpToSearchResult(advId, sceneIdx){
  closeSearch();
  state.view = "adventure"; state.advId = advId; state.sceneIdx = sceneIdx;
  state.openChallenges.clear();
  render(); scrollToTop(); persistState();
}
// Analoge Sprung-Helfer für die übrigen, seit Juli 2026 mitindizierten
// Quellen (Lore-Glossar, Regelglossar, Challenge-/Journey-Bibliothek) —
// schließen zuerst die Suche, öffnen dann das jeweils passende Fenster
// direkt am gefundenen Eintrag.
function jumpToSearchGloss(id){
  closeSearch();
  openGloss(id);
}
function jumpToSearchRule(ruleIdx){
  closeSearch();
  openRuleTerm(ruleIdx);
}
function jumpToSearchChallenge(catKey, catIdx, chIdx){
  closeSearch();
  jumpToChallenge(catKey, catIdx, chIdx);
}
function jumpToSearchAction(uid){
  closeSearch();
  openGrimoireTerm(uid);
}
function jumpToSearchThemebook(bookId, catKey){
  closeSearch();
  openThemebookAt(bookId, catKey);
}
function jumpToSearchJourney(catKey, catIdx, jIdx){
  closeSearch();
  jumpToJourney(catKey, catIdx, jIdx);
}
function filterGlobalSearch(val){
  const q = val.trim().toLowerCase().replace(/\s+/g, " ");
  const resultsEl = document.getElementById("searchResults");
  const countEl = document.getElementById("searchCount");
  if(!q){ resultsEl.innerHTML = ""; countEl.textContent = "Suchbegriff eingeben …"; return; }
  const terms = q.split(" ").filter(Boolean);
  // Sucht primär die eingegebene Wortkombination als zusammenhängende
  // Phrase (z. B. "green maiden" findet nur Stellen, an denen genau diese
  // beiden Wörter direkt hintereinander stehen) — nicht mehr nur "alle
  // Wörter irgendwo im Text verstreut", wie zuvor. Nur wenn die exakte
  // Phrase gar nichts findet UND mehrere Wörter eingegeben wurden, fällt
  // die Suche auf die alte, großzügigere Einzelwort-Suche zurück (z. B.
  // falls die Begriffe über zwei verschiedene Felder verteilt sind).
  let hits = SEARCH_INDEX.filter(entry => entry.textLower.includes(q));
  let fallback = false;
  if(!hits.length && terms.length > 1){
    hits = SEARCH_INDEX.filter(entry => terms.every(t=>entry.textLower.includes(t)));
    fallback = true;
  }
  if(!hits.length){
    countEl.textContent = "Keine Treffer";
    resultsEl.innerHTML = `<div class="search-empty">Nichts gefunden — anderer Begriff?</div>`;
    return;
  }
  const countLabel = hits.length===1 ? "1 Treffer" : `${hits.length} Treffer`;
  countEl.textContent = fallback ? `${countLabel} (einzelne Wörter, keine genaue Wortfolge gefunden)` : countLabel;
  const searchTerms = fallback ? terms : [q];
  resultsEl.innerHTML = hits.slice(0,60).map(h=> renderSearchHit(h, searchTerms)).join("");
}
// Baut die Trefferzeile passend zur Quelle des Eintrags (Szene, Lore-
// Glossar, Regelglossar, Challenge- oder Journey-Bibliothek) — jede Quelle
// bekommt ihren eigenen Sprung-Aufruf, siehe die jumpToSearch*-Helfer oben.
function renderSearchHit(h, terms){
  const snippet = searchSnippet(h.text, terms);
  if(h.type==="gloss"){
    return `<button class="search-item" onclick="jumpToSearchGloss('${h.id}')">
      <div class="search-item-head">
        <span class="search-adv">📖 Lore-Glossar</span>
        <span class="search-page">${escHtml(h.page)}</span>
      </div>
      <div class="search-scene">${escHtml(h.term)}</div>
      <div class="search-snippet">${snippet}</div>
    </button>`;
  }
  if(h.type==="rule"){
    return `<button class="search-item" onclick="jumpToSearchRule(${h.ruleIdx})">
      <div class="search-item-head">
        <span class="search-adv">📜 Regelglossar</span>
        <span class="search-page">${escHtml(h.page)}</span>
      </div>
      <div class="search-scene">${escHtml(h.term)}</div>
      <div class="search-snippet">${snippet}</div>
    </button>`;
  }
  if(h.type==="challenge"){
    return `<button class="search-item" onclick="jumpToSearchChallenge('${h.catKey}', ${h.catIdx}, ${h.chIdx})">
      <div class="search-item-head">
        <span class="search-adv">⚔ Challenge-Bibliothek</span>
        <span class="search-page">${escHtml(h.page)}</span>
      </div>
      <div class="search-scene">${escHtml(h.term)}${h.sub?" · "+escHtml(h.sub):""}</div>
      <div class="search-snippet">${snippet}</div>
    </button>`;
  }
  if(h.type==="journey"){
    return `<button class="search-item" onclick="jumpToSearchJourney('${h.catKey}', ${h.catIdx}, ${h.jIdx})">
      <div class="search-item-head">
        <span class="search-adv">🧭 Journey-Bibliothek</span>
        <span class="search-page">${escHtml(h.page)}</span>
      </div>
      <div class="search-scene">${escHtml(h.term)}${h.sub?" · "+escHtml(h.sub):""}</div>
      <div class="search-snippet">${snippet}</div>
    </button>`;
  }
  if(h.type==="action"){
    return `<button class="search-item" onclick="jumpToSearchAction('${h.uid}')">
      <div class="search-item-head">
        <span class="search-adv">🛠 Action Grimoire</span>
        <span class="search-page">${escHtml(h.chapterTitle)}</span>
      </div>
      <div class="search-scene">${escHtml(h.term)}</div>
      <div class="search-snippet">${snippet}</div>
    </button>`;
  }
  if(h.type==="themebook"){
    return `<button class="search-item" onclick="jumpToSearchThemebook('${h.bookId}', '${h.catKey}')">
      <div class="search-item-head">
        <span class="search-adv">${h.bookIcon} ${escHtml(h.bookTitle)}</span>
        <span class="search-page"></span>
      </div>
      <div class="search-scene">${escHtml(h.term)}${h.sub?" · "+escHtml(h.sub):""}</div>
      <div class="search-snippet">${snippet}</div>
    </button>`;
  }
  // Fallback/Default: Szene
  return `<button class="search-item" onclick="jumpToSearchResult('${h.advId}', ${h.sceneIdx})">
    <div class="search-item-head">
      <span class="search-adv">🎬 Abenteuer ${h.advNum} · ${escHtml(h.advTitle)}</span>
      <span class="search-page">${escHtml(h.scenePage)}</span>
    </div>
    <div class="search-scene">${escHtml(h.sceneTitle)}</div>
    <div class="search-snippet">${snippet}</div>
  </button>`;
}
