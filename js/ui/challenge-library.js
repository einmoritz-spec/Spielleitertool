/* ---------- challenge library modal ---------- */
// Ehemals eine eigene state.view="challenges"-Seite, die die komplette
// #app-Ansicht ersetzt hat (siehe DOKUMENTATION.md, "Lore/Challenges als
// Fenster"-Umbau Juli 2026). Jetzt ein Overlay-Fenster wie #mapModal/
// #rulesModal: ein Klick während einer laufenden Adventure-Szene wirft
// nicht mehr aus dieser heraus, die Szene bleibt im Hintergrund erhalten.
function openChallenges(){
  renderChallengeLibrary();
  document.getElementById("challengesModal").classList.add("open");
  document.getElementById("chLibBody").scrollTop = 0;
}
function closeChallenges(){
  document.getElementById("challengesModal").classList.remove("open");
}
// Re-render, das (wie setChSearch) Fokus/Cursor eines fokussierten
// Suchfelds sowie die Scroll-Position innerhalb des Modals erhält —
// notwendig, weil renderChallengeLibrary() bei jedem Klick (Kategorie
// auf-/zuklappen, Rollen-Filter, Limit-Klick) das komplette #chLibBody
// per innerHTML neu aufbaut.
function refreshChallengeLibrary(){
  const body = document.getElementById("chLibBody");
  const scrollTop = body ? body.scrollTop : 0;
  const active = document.activeElement;
  const isSearchInput = active && active.classList && active.classList.contains("ch-search");
  const caret = isSearchInput ? active.selectionStart : null;
  renderChallengeLibrary();
  if(body) body.scrollTop = scrollTop;
  if(isSearchInput){
    const newInput = document.querySelector(".ch-search");
    if(newInput){
      newInput.focus();
      if(caret!==null) newInput.setSelectionRange(caret, caret);
    }
  }
}

/* Suchleiste: Untergrund nur, wenn sie oben am Fensterrand klebt (sonst „clean“ ohne Kasten). */
function updateChControlsStuck(scroller){
  const bar = scroller.querySelector(".ch-lib-controls");
  if(!bar) return;
  bar.classList.toggle("stuck", scroller.scrollTop > 0 && bar.getBoundingClientRect().top <= scroller.getBoundingClientRect().top + 1);
}
document.addEventListener("scroll", e=>{
  const t = e.target;
  if(t && t.classList && t.classList.contains("big-modal-scroll")) updateChControlsStuck(t);
}, true);
