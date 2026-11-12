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
  const item = (ic, label, fn) => `<button class="mm-item" onclick="closeMobileMenu(); ${fn}"><span class="mm-ic">${ic}</span><span>${label}</span></button>`;
  const m = document.createElement("div");
  m.id = "mobileMenu"; m.className = "mobile-menu";
  m.innerHTML = `
    <div class="mm-backdrop" onclick="closeMobileMenu()"></div>
    <nav class="mm-panel" aria-label="Menü">
      <div class="mm-head"><span>Menü</span><button class="mm-close" onclick="closeMobileMenu()" aria-label="Schließen">✕</button></div>
      <div class="mm-list">
        ${item("🏠", "Start", "goHome()")}
        ${item("🗂", "Kampagne", "goCampaign()")}
        ${item("📁", "Aktueller Fall", "goLastCase()")}
        ${item("🗺", "Stadtkarte", "goMap()")}
        ${item("🎲", "Regelblatt & Würfler", "openRules()")}
        ${item("📇", "Register", "goRegister()")}
        ${item("📖", "Seitenviewer", "openPageViewer()")}
        ${item("🔎", "Suche", "openSearch()")}
        <div class="mm-sub">Buchteile</div>
        ${(window.NIGHTS && NIGHTS.campaign && NIGHTS.campaign.book || []).map(n=>{ const e = NIGHTS.campaign.extras[n]; return e ? item("📘", e.title, "location.hash='#/case/"+n+"'") : ""; }).join("")}
      </div>
      <div class="mm-foot">${item("⚙", "Einstellungen", "openSettings()")}</div>
    </nav>`;
  document.body.appendChild(m);
  document.body.classList.add("menu-open");
  requestAnimationFrame(()=> m.classList.add("open"));
}
document.addEventListener("keydown", e=>{ if(e.key==="Escape") closeMobileMenu(); });
