/* Handy-/Tablet-Menü (drei Striche): Seitenmenü von rechts, Rest dunkel und unscharf. */
function closeMobileMenu(){
  const m = document.getElementById("mobileMenu");
  if(!m) return;
  m.classList.remove("open");
  setTimeout(()=>m.remove(), 200);
  document.body.classList.remove("menu-open");
}
function openMobileMenu(){
  if(document.getElementById("mobileMenu")) return;
  const caseBtn = document.getElementById("tb-case-btn");
  const caseVisible = caseBtn && caseBtn.style.display !== "none";
  const item = (ic, label, fn) => `<button class="mm-item" onclick="closeMobileMenu(); ${fn}"><span class="mm-ic">${ic}</span><span>${label}</span></button>`;
  const m = document.createElement("div");
  m.id = "mobileMenu"; m.className = "mobile-menu";
  m.innerHTML = `
    <div class="mm-backdrop" onclick="closeMobileMenu()"></div>
    <nav class="mm-panel" aria-label="Menü">
      <div class="mm-head"><span>Menü</span><button class="mm-close" onclick="closeMobileMenu()" aria-label="Schließen">✕</button></div>
      <div class="mm-list">
        ${item("🗂", "Bezirke", "goOverview()")}
        ${item("📕", "Buch (PDF)", "BV.open('ll',1)")}
        ${caseVisible ? item("📁", "Fall öffnen", "goCase(state.districtId)") : ""}
        ${item("👥", "Gegner &amp; NSCs", "goNpcs()")}
        ${item("🖼", "Spieler-Ansicht", "goPlayer()")}
        ${item("🔎", "Suche", "openSearchModal()")}
        ${item("📜", "Regeln", "openModal('rulesModal')")}
        ${item("📖", "Glossar", "openModal('glossModal')")}
        <div class="mm-sub">Bonus-Inhalte</div>
        ${typeof FORGED_FRAMED!=="undefined" ? item("🕵", "Forged &amp; Framed", "goCase('forged_framed')") : ""}
        ${typeof VILLAINS!=="undefined" && VILLAINS.length ? `<details class="mm-group"><summary class="mm-item"><span class="mm-ic">🎭</span><span>Kleinschurken</span><span class="mm-chev">▸</span></summary><div class="mm-subitems">${VILLAINS.map(v=>item("", v.title, "goVillain('"+v.id+"')")).join("")}</div></details>` : ""}
        ${typeof GUIDE!=="undefined" ? item("🧭", "Einleitung &amp; Stadtführer", "goGuide()") : ""}
        ${typeof APPENDIX!=="undefined" ? item("📚", "Register", "goAppendix()") : ""}
      </div>
      <div class="mm-foot">${item("⚙", "Einstellungen", "openModal('settingsModal')")}</div>
    </nav>`;
  document.body.appendChild(m);
  document.body.classList.add("menu-open");
  requestAnimationFrame(()=> m.classList.add("open"));
}
document.addEventListener("keydown", e=>{ if(e.key==="Escape") closeMobileMenu(); });
