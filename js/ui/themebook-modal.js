/* ==================================================================
   THEMENBUCH-FRAGEN — eigenständiges Overlay-Fenster (#themebookModal),
   "Fragen zum Vorlesen" zur Charaktererstellung aus den drei Themebooks
   (Origin inkl. Companion/Magic/Possessions, Adventure, Greatness).
   Zwei Ebenen Tabs: oben die drei Themebooks (mit Icon: 🍃 Origin,
   ⚔️ Adventure, 👑 Greatness — auf Nutzerwunsch als feste
   Erkennungszeichen), darunter die Kategorien des gewählten Themebooks
   (wie in der Nutzer-Vorlage "Themenbuch-Referenz", Folie 15). Bewusst
   NICHT über state.view geroutet — Overlay wie Regelglossar/Grimoire.
   ================================================================== */
// Erkennungszeichen-Icons der drei Themebooks (vom Nutzer als PNG
// bereitgestellt: Blatt=Origin, Schwerter=Adventure, Krone=Greatness),
// als Base64 eingebettet, damit die Tafel weiterhin komplett offline
// ohne externe Bilddateien läuft (analog zum base64-eingebetteten
// Dales-Kartenbild).
const TB_ICON_IMG = {
  leaf: "assets/icons/themebook-leaf.png",
  swords: "assets/icons/themebook-swords.png",
  crown: "assets/icons/themebook-crown.png",
};
const THEMEBOOK_ICONS = { leaf:"🍃", swords:"⚔️", crown:"👑" };
function renderThemebookBookTabs(){
  return THEMEBOOK_QUESTIONS.map(b=>
    `<button class="tb-book-tab ${state.tbBook===b.id?'on':''}" onclick="setThemebookBook('${b.id}')">
      <img class="tb-icon-img" src="${TB_ICON_IMG[b.icon]||""}" alt="">${esc(b.title)}
    </button>`
  ).join("");
}
function renderThemebookBody(){
  const book = THEMEBOOK_QUESTIONS.find(b=>b.id===state.tbBook) || THEMEBOOK_QUESTIONS[0];
  const catKey = state.tbCat && book.entries.some(e=>e.key===state.tbCat) ? state.tbCat : book.entries[0].key;
  state.tbCat = catKey;
  const entry = book.entries.find(e=>e.key===catKey);
  const catTabs = book.entries.map(e=>
    `<button class="tb-cat-tab ${e.key===catKey?'on':''}" onclick="setThemebookCat('${e.key}')">${esc(e.term)}<small>${esc(e.sub)}</small></button>`
  ).join("");
  const powerLis = entry.power.map(([l,q])=>`<li><b>${l}</b>${esc(q)}</li>`).join("");
  const weakLis = entry.weak.map(([l,q])=>`<li><b>${l}</b>${esc(q)}</li>`).join("");
  return `
    <div class="tb-cat-tabs">${catTabs}</div>
    <div class="tb-panel" id="tbPanel">
      <div class="tb-aspects">${esc(entry.aspects)}</div>
      <div class="tb-grid2">
        <div>
          <div class="tb-qh">Stärke-Fragen <span class="tb-en">(Power Tag)</span></div>
          <ol class="tb-qlist">${powerLis}</ol>
        </div>
        <div>
          <div class="tb-qh tb-rust">Schwäche-Fragen <span class="tb-en">(Weakness)</span></div>
          <ul class="tb-qlist tb-weak">${weakLis}</ul>
          <div class="tb-qi"><b>Quest-Ideen:</b> ${esc(entry.quest)}</div>
        </div>
      </div>
    </div>`;
}
function setThemebookBook(bookId){
  state.tbBook = bookId;
  state.tbCat = null;
  document.getElementById("tbBookTabs").innerHTML = renderThemebookBookTabs();
  document.getElementById("tbBody").innerHTML = renderThemebookBody();
}
function setThemebookCat(catKey){
  state.tbCat = catKey;
  document.getElementById("tbBody").innerHTML = renderThemebookBody();
}
function openThemebook(){
  document.getElementById("tbBookTabs").innerHTML = renderThemebookBookTabs();
  document.getElementById("tbBody").innerHTML = renderThemebookBody();
  document.getElementById("themebookModal").classList.add("open");
}
function closeThemebook(){
  document.getElementById("themebookModal").classList.remove("open");
}
// Öffnet das Themenbuch-Fragen-Fenster direkt bei einem bestimmten
// Themebook/einer bestimmten Kategorie (aus der Volltextsuche, siehe
// jumpToSearchThemebook).
function openThemebookAt(bookId, catKey){
  state.tbBook = bookId;
  state.tbCat = catKey;
  openThemebook();
}
