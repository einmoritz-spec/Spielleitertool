/* ---------- Charakter-Bibliothek (neu, Juli 2026) ---------- */
// Sammelt alle GLOSSARY-Einträge mit npc:true an einem durchsuchbaren Ort
// — exakt nach demselben Muster wie die Orte-Bibliothek (Kategorien,
// Suche, Karten mit Portrait/Seitenzahl/Teaser), inklusive Sicherheitsnetz
// für nicht kategorisierte Einträge. Ein Klick auf eine Karte schließt
// dieses Fenster und öffnet den vollen Glossareintrag über openGloss().
const CHARACTER_CATEGORIES = [
  { key:"antagonists", label:"Antagonist:innen & Bedrohungen", ids:[
    "winter-king","cold-hearted-cult","thane-codprice-ref","sorrowbalm-ref",
    "sidurg-ref","fork-it","grandfather-crow-ref","crowlings-ref",
  ]},
  { key:"factions", label:"Familien & Fraktionen", ids:[
    "cloudbornes-ref","stillwater-family","red-marshals-ref","craggen-highlanders",
  ]},
  { key:"allies", label:"Verbündete & wiederkehrende NSCs", ids:[
    "riva-skall-ref","knight-lowtower","gajowy-ref",
  ]},
  { key:"legendary", label:"Legendäre & mythische Gestalten", ids:[
    "lady-of-the-dales","eglerion",
  ]},
  { key:"archetypes", label:"Wiederkehrende Bedrohungs-Archetypen", ids:[
    "cold-hearted-stabber-ref","cold-hearted-stormhelm-knight","wanderlands-grave-robber-ref",
  ]},
  { key:"adventure-npcs", label:"Abenteuer-NSCs & Begleiter:innen", ids:[
    "walric-hywell-ref","verdan-ref","rosamund-ref","azeria-ref",
    "milorada-ref","jarko-ref","kerrid-ref","yule-ref",
    "alderman-beaks-ref","rabb-ref","riyori-ref","nochika-ref",
    "gild-ref","maol-ref","ashenepitaph-ref","green-maiden-ref",
    "fleece-oakenfoot-ref","aleonora-ref","ivy-ollo-jurard-ref","lance-tubroot-ref",
    "willow-ravenhome-ref","muddy-med-ref","silverata-ref","bright-tails-ref",
    "radmila-sparrowkin-ref","fablo-roots-ref","pommy-carpenter-ref","svall-ref",
    "bone-tender-filias-ref","barleytown-fair-judges-ref","daisy-woegold-ref","barleytown-fair-color-ref",
    "marshal-rudol-ref","ovistra-ref","sid-bad-apples-ref",
  ]},
  { key:"dale-residents", label:"Bewohner:innen einzelner Dales", ids:[
    "berglitz-der-pfeilmacher-res","deda-houlk-res","gilla-die-fluesterin-res","liafail-mackross-res",
    "ear-to-ground-res","fern-goodhands-res","koral-cloudborne-res","old-soot-lorne-res",
    "phillis-goatblood-res","die-drei-schleicher-res","farkus-steadyoars-res","heather-die-koenigin-bellrose-res",
    "nessie-tarnfolk-res","emille-nasenbrecher-woolglove-res","magenzwicker-oder-amalthea-res","hela-bernsteinblut-grange-res",
    "noxen-kuhkipperin-brand-res","die-moenche-von-nettlevine-abbey-res","gretchen-thorne-res","nevel-shiverborn-res",
    "radym-desimir-res","the-bellflowers-res","veles-und-rowan-hayes-res","yarrow-res",
    "eerik-kallop-res","etch-res","gofer-und-thelma-soaks-res","jaro-der-vereiste-biber-res",
    "radiant-scales-res","alderman-chiselheart-res","borum-the-innkeep-res","greycheeks-res",
    "jarren-cedarborn-res","kirith-haerley-res","worels-supplier-res","cracked-twig-res",
    "wake-runner-res","knight-errant-fosten-res","eligh-shatterhex-res","bayleaf-of-the-firewatch-res",
    "charter-member-rust-res","ferrox-the-flamer-res","marrow-ryoma-res","die-morkin-zwillinge-res",
    "killian-farstride-res","onyx-der-juengere-ein-gemdigger-res","yelizaveta-gin-res","mira-somerkin-res",
    "tillis-nebelclaw-res","vodan-the-drowned-res","cecile-the-exact-res","mirna-buzzardbone-res",
    "nikola-snout-res","samuil-flagstone-res","goran-everwalker-und-hanee-smiles-too-mu-res","old-dinger-res",
    "portent-gold-mender-res","reed-roundshield-res","stares-to-horizon-res","chet-the-ratter-res",
    "liliwen-clipped-wing-res","maxin-the-laughing-one-res","valen-bertrand-res","colin-stillwater-res",
    "emeralda-fogley-res","grand-marshal-karis-hillfell-res","greytail-die-wuehlmaus-res","igraine-demerand-res",
    "maliq-der-laute-res","roasting-mark-res","bait-res","negan-wetfeet-res",
    "shozauka-baba-res","trisha-the-heron-trisha-der-reiher-res",
  ]},
];
// Normalisiert einen NPC-Kartennamen zum Abgleich gegen GLOSSARY-Begriffe:
// entfernt Klammerzusätze ("(nur bei einem Helden)" etc.), Anführungszeichen
// und Groß-/Kleinschreibung, damit z. B. "Rabb (nur bei einem Helden)" auf
// denselben Schlüssel abbildet wie der Glossareintrag "Rabb".
function normNpcName(s){
  return s.replace(/\s*\([^)]*\)\s*/g," ")
    .replace(/[„""'`]/g,"")
    .replace(/\s+/g," ")
    .trim().toLowerCase();
}
// Manuelle Alias-Tabelle für Szenen-NSC-Namen, die nach der Normalisierung
// trotzdem nicht exakt auf einen GLOSSARY-Begriff treffen (z. B. weil ein
// Sammeleintrag mehrere Personen abdeckt, oder der Szenenname von der
// offiziellen Schreibweise abweicht).
const NPC_NAME_ALIASES = {
  "ein wanderlands-grabräuber": "fork-it",
  "crowlings / grandfather crow": "grandfather-crow-ref",
  "sorrowbalm / eglerion": "sorrowbalm-ref",
  "lukas & chiara cloudborne": "cloudbornes-ref",
  "jacobé cloudborne": "cloudbornes-ref",
  "deita cloudborne": "cloudbornes-ref",
  "bäni cloudborne": "cloudbornes-ref",
  "die kombert-zwillinge": "barleytown-fair-color-ref",
  "die lächelnde eddina": "barleytown-fair-color-ref",
  "dullmie": "barleytown-fair-color-ref",
  "böttcherin lisbeth": "barleytown-fair-judges-ref",
  "jamie longwind": "barleytown-fair-judges-ref",
  "küchenmeisterin ostick": "barleytown-fair-judges-ref",
  "merrick & fontell": "die-drei-schleicher-res",
  "riyoris kriegerschar": "riyori-ref",
  "seekerin kerrid": "kerrid-ref",
  "sidurg": "sidurg-ref",
  "borum": "borum-the-innkeep-res",
  "yule": "yule-ref",
};
let CHARACTER_INDEX = null;
function buildCharacterIndex(){
  CHARACTER_INDEX = {};
  Object.keys(GLOSSARY).forEach(id=>{
    if(GLOSSARY[id].npc) CHARACTER_INDEX[normNpcName(GLOSSARY[id].term)] = id;
  });
}
// Findet, falls vorhanden, die GLOSSARY-ID zu einem NSC-Kartennamen —
// zuerst über die Alias-Tabelle, sonst über den normalisierten Begriffs-
// Abgleich. Gibt null zurück, wenn keine Übereinstimmung existiert (dann
// bleibt der Name unverlinkter Klartext).
function findCharacterId(name){
  if(!CHARACTER_INDEX) buildCharacterIndex();
  const norm = normNpcName(name);
  return NPC_NAME_ALIASES[norm] || CHARACTER_INDEX[norm] || null;
}
// Baut den anklickbaren (oder, falls kein Treffer, schlicht escapten)
// Namens-Span für eine NSC-Karte in Szenen — verlinkt auf den passenden
// Glossareintrag via openGloss(), direkt als Pop-up über der aktuellen
// Szene, ohne die Charakter-Bibliothek zu öffnen.
function npcNameHtml(name){
  const id = findCharacterId(name);
  return id
    ? `<span class="npc-name npc-name-linked gloss" onclick="event.stopPropagation(); openGloss('${id}')">${esc(name)}</span>`
    : `<span class="npc-name">${esc(name)}</span>`;
}
function openCharacters(){
  renderCharacterLibrary();
  document.getElementById("charactersModal").classList.add("open");
  document.getElementById("charactersLibBody").scrollTop = 0;
}
function closeCharacters(){
  document.getElementById("charactersModal").classList.remove("open");
}
function setCharSearch(val){
  state.charSearch = val;
  refreshCharacterLibrary();
}
function toggleCharCat(key){
  if(state.openCharCats.has(key)) state.openCharCats.delete(key);
  else state.openCharCats.add(key);
  refreshCharacterLibrary();
}
function jumpToCharacter(id){
  closeCharacters();
  openGloss(id);
  glossOrigin = "characters";
}
function refreshCharacterLibrary(){
  const body = document.getElementById("charactersLibBody");
  const scrollTop = body ? body.scrollTop : 0;
  const active = document.activeElement;
  const isSearchInput = active && active.classList && active.classList.contains("char-search");
  const caret = isSearchInput ? active.selectionStart : null;
  renderCharacterLibrary();
  if(body) body.scrollTop = scrollTop;
  if(isSearchInput){
    const newInput = document.querySelector(".char-search");
    if(newInput){
      newInput.focus();
      if(caret!==null) newInput.setSelectionRange(caret, caret);
    }
  }
}
function characterCardHtml(p, stripped){
  const teaserRaw = stripped(p.body[0]||"");
  const teaser = teaserRaw.length>160 ? teaserRaw.slice(0,160)+"…" : teaserRaw;
  return `
  <button class="place-card" onclick="jumpToCharacter('${p.id}')">
    ${portraitHtml(p.img, "place-portrait")}
    <div class="place-card-body">
      <div class="place-card-head"><span class="place-name">${esc(p.term)}</span><span class="place-page">${esc(p.page)}</span></div>
      <p class="place-teaser">${esc(teaser)}</p>
    </div>
  </button>`;
}
function renderCharacterLibrary(){
  const q = (state.charSearch||"").trim().toLowerCase();
  const searching = !!q;
  const stripped = html => html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
  const catalogued = new Set();
  let visibleTotal = 0, grandTotal = 0;

  const catsHtml = CHARACTER_CATEGORIES.map(cat=>{
    const chars = cat.ids
      .map(id=>GLOSSARY[id] ? {id, ...GLOSSARY[id]} : null)
      .filter(Boolean);
    chars.forEach(p=>catalogued.add(p.id));
    grandTotal += chars.length;
    const filtered = q ? chars.filter(p=>{
      const hay = (p.term + " " + p.page + " " + p.body.map(stripped).join(" ")).toLowerCase();
      return hay.includes(q);
    }) : chars;
    visibleTotal += filtered.length;
    if(searching && filtered.length===0) return "";
    const isOpen = searching || state.openCharCats.has(cat.key);
    const cardsHtml = filtered
      .sort((a,b)=>a.term.localeCompare(b.term, "de"))
      .map(p=>characterCardHtml(p, stripped)).join("");
    return `
    <div class="ch-cat ${isOpen?'open':''}" data-charcat="${cat.key}">
      <button class="ch-cat-head" onclick="toggleCharCat('${cat.key}')">
        <span class="ch-cat-title">${esc(cat.label)}</span>
        <span class="ch-cat-count">${filtered.length}${filtered.length!==chars.length?' / '+chars.length:''}</span>
        <svg class="ch-chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
      </button>
      <div class="ch-cat-body"><div class="place-grid">${cardsHtml}</div></div>
    </div>`;
  }).join("");

  // Sicherheitsnetz: GLOSSARY-Einträge mit npc:true, die (noch) in keiner
  // CHARACTER_CATEGORIES-Liste stehen, landen automatisch in einer eigenen
  // Restkategorie, statt stillschweigend zu verschwinden.
  const uncatalogued = Object.keys(GLOSSARY)
    .filter(id=>GLOSSARY[id].npc && !catalogued.has(id))
    .map(id=>({id, ...GLOSSARY[id]}));
  let extraHtml = "";
  if(uncatalogued.length){
    grandTotal += uncatalogued.length;
    const filtered = q ? uncatalogued.filter(p=>{
      const hay = (p.term + " " + p.page + " " + p.body.map(stripped).join(" ")).toLowerCase();
      return hay.includes(q);
    }) : uncatalogued;
    visibleTotal += filtered.length;
    if(!searching || filtered.length>0){
      const isOpen = searching || state.openCharCats.has("uncatalogued");
      const cardsHtml = filtered
        .sort((a,b)=>a.term.localeCompare(b.term, "de"))
        .map(p=>characterCardHtml(p, stripped)).join("");
      extraHtml = `
      <div class="ch-cat ${isOpen?'open':''}" data-charcat="uncatalogued">
        <button class="ch-cat-head" onclick="toggleCharCat('uncatalogued')">
          <span class="ch-cat-title">Weitere NPCs</span>
          <span class="ch-cat-count">${filtered.length}${filtered.length!==uncatalogued.length?' / '+uncatalogued.length:''}</span>
          <svg class="ch-chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
        </button>
        <div class="ch-cat-body"><div class="place-grid">${cardsHtml}</div></div>
      </div>`;
    }
  }

  document.getElementById("charactersLibBody").innerHTML = `
  <div class="ch-library place-library">
    <div class="ch-lib-hero">
      <div class="eyebrow">Nachschlagewerk</div>
      <h1 class="lore-h1">NPCs</h1>
      <p>${grandTotal} wichtige NSCs, Familien und Fraktionen, gruppiert nach Rolle — durchsuchbar über alle Kategorien hinweg. Suche nach einem Namen oder klapp eine Kategorie auf.</p>
    </div>
    <div class="ch-lib-controls">
      <input type="text" class="ch-search char-search" placeholder="Suche nach Namen …" value="${esc(state.charSearch||"").replace(/"/g,'&quot;')}" oninput="setCharSearch(this.value)">
    </div>
    ${searching?`<div class="ch-search-status">${visibleTotal} Treffer</div>`:""}
    <div class="ch-cats">${catsHtml}${extraHtml}</div>
  </div>`;
}

function openLore(){
  renderLoreLibrary();
  document.getElementById("loreModal").classList.add("open");
  document.getElementById("loreLibBody").scrollTop = 0;
}
function closeLore(){
  document.getElementById("loreModal").classList.remove("open");
}
