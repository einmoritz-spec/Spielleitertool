/* ---------- interactions ---------- */
// Real navigation (overview <-> adventure <-> scene) scrolls to top.
// Everything else (limit clicks, expand/collapse) must NOT move the scroll
// position or it feels like the page "closes" under the GM's cursor.
function goOverview(){ if(!guardEditLeave()) return; state.view="overview"; state.advId=null; render(); scrollToTop(); persistState(); }
function goAdventure(id){ if(!guardEditLeave()) return; state.view="adventure"; state.advId=id; state.sceneIdx=0; state.openChallenges.clear(); render(); scrollToTop(); persistState(); }
function goScene(i){
  const adv = ADVENTURES.find(a=>a.id===state.advId);
  if(!adv) return;
  if(i<0 || i>=adv.scenes.length) return;
  if(!guardEditLeave()) return;
  state.sceneIdx=i; state.openChallenges.clear(); render(); scrollToTop(); persistState();
}
function toggleChallenge(domId){
  // Toggle directly in the DOM (no re-render) so scroll position is
  // untouched, and remember the state so it survives the next re-render
  // that a limit click triggers.
  const el = document.getElementById(domId);
  if(!el) return;
  const nowOpen = el.classList.toggle("open");
  if(nowOpen) state.openChallenges.add(domId);
  else state.openChallenges.delete(domId);
}
// Klappt alle gerade offenen Challenge-/Journey-Karten wieder ein — egal ob
// in der Szenenansicht oder der Challenge-Bibliothek. Arbeitet wie
// toggleChallenge direkt am DOM (kein render()), damit Scrollposition und
// Suchfilter unangetastet bleiben (neu, Juli 2026).
function collapseAllChallenges(){
  document.querySelectorAll(".challenge.open").forEach(el=>{
    el.classList.remove("open");
    state.openChallenges.delete(el.id);
  });
  persistState();
}
// Spoilerschutz (neu, Juli 2026): Taste "#" verwischt die komplette
// Seite (blur-Filter auf #app), z. B. wenn der Bildschirm kurz in
// Spieler-Blickrichtung zeigt oder geteilt wird. Reine DOM-Klasse auf
// <body>, kein render() — Scroll-Position, offene Challenge-Karten etc.
// bleiben unangetastet. Bewusst NICHT in `state`/persistState() — soll
// nach einem Reload nicht "versehentlich blurred" starten, sondern
// immer frisch scharf.
function toggleSpoilerBlur(){
  document.body.classList.toggle("spoiler-blur");
}
// Eigener, schlanker Listener statt Erweiterung der bestehenden
// Escape-/Pfeiltasten-Handler: Spoilerschutz soll unabhängig von
// `state.view` überall greifen (Übersicht, Adventure, offene Modals),
// die anderen Handler sind bewusst enger gefasst (siehe deren
// Kommentare). Eingabefelder (Notizfeld, Bibliotheks-Suche) werden
// ausgenommen, damit ein getipptes "#" dort ganz normal im Text landet.
document.addEventListener("keydown", (e)=>{
  if(e.key!=="#") return;
  const tag = (e.target && e.target.tagName) || "";
  if(tag==="INPUT"||tag==="TEXTAREA"||(e.target&&e.target.isContentEditable)) return;
  toggleSpoilerBlur();
});
// Header-Toggle (neu, Juli 2026): Die Topbar ist standardmäßig fest
// eingeblendet (siehe .topbar-CSS) und lässt sich per Taste "h" ein-/
// ausblenden — reine Body-Klasse, kein render() nötig. Gleiches Muster
// wie toggleSpoilerBlur() für "#": Eingabefelder werden ausgenommen,
// damit ein getipptes "h" dort ganz normal im Text landet.
function toggleTopbar(){
  document.body.classList.toggle("topbar-hidden");
}
document.addEventListener("keydown", (e)=>{
  if(e.key!=="h" && e.key!=="H") return;
  const tag = (e.target && e.target.tagName) || "";
  if(tag==="INPUT"||tag==="TEXTAREA"||(e.target&&e.target.isContentEditable)) return;
  toggleTopbar();
});
// Zentrale Verwaltung aller Fenster-Shortcuts (neu, Juli 2026): jede
// Taste öffnet ihr zugehöriges Fenster — und schließt es bei erneutem
// Drücken derselben Taste wieder (Toggle), statt nur zu öffnen. Ist ein
// ANDERES Fenster offen, wird nicht ausgelöst, damit sich Modals nicht
// übereinanderstapeln. Eingabefelder werden wie gehabt ausgenommen.
document.addEventListener("keydown", (e)=>{
  if(e.key!=="e" && e.key!=="E") return;
  if(e.ctrlKey||e.metaKey||e.altKey) return;
  if(state.view!=="adventure") return;
  const tag = (e.target && e.target.tagName) || "";
  if(tag==="INPUT"||tag==="TEXTAREA"||(e.target&&e.target.isContentEditable)) return;
  if(document.querySelector(".gloss-modal-backdrop.open")) return;
  e.preventDefault();
  toggleEditMode();
});
const WINDOW_SHORTCUTS = [
  { key:"f", modal:"searchModal", open:openSearch, close:closeSearch },
  { key:"m", modal:"mapModal", open:openMap, close:closeMap },
  { key:"p", modal:"profilesModal", open:openProfiles, close:closeProfiles },
  { key:"x", modal:"customCharModal", open:openCustomChars, close:closeCustomChars },
  { key:"s", modal:"storeModal", open:openStore, close:closeStore },
  { key:"g", modal:"rulesModal", open:openRulesGloss, close:closeRulesGloss }, // G = Regelglossar
  { key:"a", modal:"grimoireModal", open:openGrimoire, close:closeGrimoire },
  { key:"t", modal:"themebookModal", open:openThemebook, close:closeThemebook },
  { key:"l", modal:"loreModal", open:openLore, close:closeLore },
  { key:"r", modal:"glossModal", open:openRestRules, close:closeGloss }, // R = Rasten
  { key:"c", modal:"challengesModal", open:openChallenges, close:closeChallenges },
  { key:"w", modal:"diceModal", open:openDice, close:closeDice },
  { key:"o", modal:"placesModal", open:openPlaces, close:closePlaces },
  { key:"n", modal:"charactersModal", open:openCharacters, close:closeCharacters },
  { key:"v", modal:"favoritesModal", open:openFavorites, close:closeFavorites },
  { key:",", modal:"topbarSettingsModal", open:openTopbarSettings, close:closeTopbarSettings },
];
document.addEventListener("keydown", (e)=>{
  const sc = WINDOW_SHORTCUTS.find(s=>s.key===e.key.toLowerCase());
  if(!sc) return;
  const tag = (e.target && e.target.tagName) || "";
  if(tag==="INPUT"||tag==="TEXTAREA"||(e.target&&e.target.isContentEditable)) return;
  const modalEl = document.getElementById(sc.modal);
  const isThisOpen = modalEl && modalEl.classList.contains("open");
  if(isThisOpen){
    e.preventDefault();
    sc.close();
    return;
  }
  const anyModalOpen = document.querySelector(".gloss-modal-backdrop.open");
  if(anyModalOpen) return;
  e.preventDefault();
  sc.open();
});
function togglePathrail(){
  // Wie toggleChallenge: direkt am DOM umschalten statt render(), damit
  // weder Scroll-Position noch offene Challenge-Karten verloren gehen.
  state.pathrailCollapsed = !state.pathrailCollapsed;
  const el = document.querySelector(".pathrail");
  if(!el) return;
  el.classList.toggle("collapsed", state.pathrailCollapsed);
  const btn = el.querySelector(".pathrail-toggle");
  if(btn){
    btn.textContent = state.pathrailCollapsed ? "›" : "‹";
    btn.title = state.pathrailCollapsed ? "Seitenleiste ausklappen (Taste <)" : "Seitenleiste einklappen (Taste <)";
  }
  persistState();
}
// Limit-Tracker-Speicherung: state.limits[uid] ist ein Array der einzeln
// angeklickten Pip-Indizes (z. B. [1,3,4]), NICHT mehr eine einzelne
// "bis hierhin gefüllt"-Zahl. Grund: Wenn ein Spielerstand (z. B. 2) auf
// ein höheres Limit (z. B. 4) angerechnet wird, muss man am Tisch erst
// die Pips 1+2 anklicken und ggf. erst später die restlichen — mit einem
// reinen Zähler wurden beim Anklicken von "4" automatisch auch 1–3 gefüllt,
// was diese Lücken unmöglich machte. getLimitArr() migriert dabei
// automatisch alte, als einzelne Zahl gespeicherte Spielstände (aus
// früheren Sitzungen/localStorage) verlustfrei in das neue Array-Format.
function getLimitArr(uid, startDefault){
  const v = state.limits[uid];
  if(Array.isArray(v)) return v;
  if(typeof v==="number" && v>0){
    const arr=[]; for(let i=1;i<=v;i++) arr.push(i);
    state.limits[uid]=arr; // alten Zahlen-Stand in-place migrieren
    return arr;
  }
  // Manche Limits (z. B. ein Distanz-Tracker, der nicht bei 0 beginnt)
  // sollen initial mit einigen Pips vorausgefüllt sein, bevor die
  // spielende Person das erste Mal interagiert. Wird nur verwendet,
  // solange noch kein eigener Spielstand existiert.
  if(v===undefined && startDefault>0){
    const arr=[]; for(let i=1;i<=startDefault;i++) arr.push(i);
    return arr;
  }
  return [];
}
function getLimitCount(uid, startDefault){
  // Der Zähler ("x / max") ist der höchste angeklickte Pip-Index, NICHT
  // die Anzahl der angeklickten Pips — wer Pip 4 anklickt (auch ohne
  // vorher 1–3 angeklickt zu haben), hat einen Stand von 4, nicht von 1.
  const arr = getLimitArr(uid, startDefault);
  return arr.length ? Math.max(...arr) : 0;
}
function setLimit(uid, idx, max){
  const arr = getLimitArr(uid).slice();
  const pos = arr.indexOf(idx);
  if(pos>=0) arr.splice(pos,1); // einzelnen Pip unabhängig von den anderen an/aus schalten
  else arr.push(idx);
  state.limits[uid] = arr;
  // Challenge-Bibliotheks-Karten (uid beginnt mit "lib_", siehe
  // renderChallenge("lib", ...)) leben im #challengesModal und werden
  // unabhängig von der Adventure-Seite dahinter geführt — deshalb dort
  // gezielt das Modal aktualisieren statt der ganzen Seite.
  if(uid.startsWith("lib_")) refreshChallengeLibrary();
  else render();
  persistState();
}
function resetLimit(uid){
  state.limits[uid]=[];
  if(uid.startsWith("lib_")) refreshChallengeLibrary();
  else render();
  persistState();
}

document.addEventListener("keydown", (e)=>{
  if(state.view!=="adventure") return;
  const tag = (e.target && e.target.tagName) || "";
  if(tag==="INPUT"||tag==="TEXTAREA"||(e.target&&e.target.isContentEditable)) return;
  // Keine Szenen-Navigation per Pfeiltaste, solange irgendein Overlay-
  // Fenster offen ist (Challenges/Lore/Karte/Regelglossar/Profile/Glossar)
  // — sonst würde ein Pfeiltasten-Druck im Hintergrund heimlich die Szene
  // wechseln, während man eigentlich im Fenster liest.
  const anyModalOpen = document.querySelector(".gloss-modal-backdrop.open");
  if(anyModalOpen) return;
  if(e.key==="ArrowRight") goScene(state.sceneIdx+1);
  if(e.key==="ArrowLeft") goScene(state.sceneIdx-1);
  if(e.key==="<") togglePathrail();
  if(e.key===">") toggleThemeRail();
});
