// RAVEN_SVG (ersetzt Juli 2026, auf Nutzerwunsch): vektorisiert aus der vom
// Nutzer hochgeladenen Rabengrafik (rabe (2).png, 512×512 PNG, schwarze
// Silhouette auf transparentem Grund) statt der bisherigen, von Hand
// gezeichneten abstrakten Form. Per Konturerkennung (OpenCV findContours,
// RETR_CCOMP für die eine kleine "Loch"-Kontur zwischen den Beinen) +
// approxPolyDP-Vereinfachung (154 Punkte, IoU 99,2 % gegenüber der
// Rasteroriginal-Silhouette) in einen kompakten Pfad im selben
// viewBox="0 0 100 100"-Raster wie zuvor umgewandelt — dadurch bleibt das
// Icon (anders als ein eingebettetes PNG) verlustfrei skalierbar UND über
// `fill:currentColor` (siehe .raven-icon svg-Regel) weiterhin per CSS
// einfärbbar, genau wie die alte Form (wird an vielen Stellen in
// unterschiedlichen Akzentfarben verwendet, u. a. --tile-accent pro
// Abenteuer). fill-rule="evenodd" sorgt dafür, dass die kleine Lücke
// zwischen den Beinen/Zehen als echtes Loch gerendert wird statt
// zugefüllt zu sein.
const RAVEN_SVG = `<svg viewBox="0 0 100 100"><path fill-rule="evenodd" d="M93.16 8.98L90.23 6.25L87.89 5.08L83.01 4.1L80.08 4.1L77.34 4.88L73.24 7.42L66.41 7.81L63.48 8.59L61.33 9.77L60.55 11.13L61.52 12.11L64.45 12.5L70.31 14.06L74.22 15.82L75.39 17.19L76.37 19.73L76.37 20.9L75.39 22.66L72.27 25.59L63.48 31.64L44.53 47.85L26.17 60.35L13.87 67.38L8.98 70.9L5.86 74.02L5.08 75.2L4.88 76.56L5.66 76.76L6.64 76.37L6.84 76.76L8.98 76.76L11.91 75.98L12.5 76.17L1.76 83.4L0.39 84.57L0 85.74L1.17 86.52L5.27 85.94L5.47 86.13L4.1 88.48L4.69 89.06L6.05 88.87L14.84 85.94L34.38 75.98L42.97 75.2L49.8 73.63L54.1 73.63L58.2 74.61L60.16 75.59L60.16 83.79L61.13 85.16L66.8 90.62L66.6 91.02L62.89 91.21L60.35 92.19L58.59 93.75L57.81 94.92L57.81 95.7L61.52 93.55L64.06 92.97L70.51 94.34L73.83 94.34L78.12 93.16L81.05 93.16L83.4 93.75L86.52 95.31L86.33 94.53L83.4 91.99L87.5 90.82L91.6 91.02L95.9 92.97L95.9 92.38L93.95 90.43L92.19 89.45L89.45 88.87L88.48 88.28L88.87 87.5L91.02 86.33L92.97 86.52L94.73 87.89L94.73 86.52L93.95 85.55L92.38 84.96L89.45 84.96L86.91 85.55L83.4 87.3L81.05 87.3L75.59 81.45L75.2 80.47L75 74.61L83.2 69.53L86.72 66.02L90.43 61.13L93.16 56.64L96.09 50.78L99.22 42.58L99.8 39.45L99.8 35.94L99.02 30.08L99.02 26.17L99.41 24.61L99.22 20.9L97.27 15.43ZM65.82 78.71L66.02 78.52L66.21 78.52L66.41 78.32L66.8 78.32L66.99 78.12L67.38 78.12L67.58 77.93L67.77 77.93L67.97 77.73L68.36 77.73L68.55 77.54L68.75 77.54L68.95 77.34L69.34 77.34L69.53 77.54L69.53 81.25L69.73 81.45L69.73 81.64L69.92 81.84L69.92 82.03L70.7 82.81L70.7 83.01L71.88 84.18L72.07 84.18L74.02 86.13L74.22 86.13L76.37 88.28L76.17 88.48L75.98 88.48L75.78 88.67L74.61 88.67L74.41 88.87L72.27 88.87L72.07 89.06L71.48 89.06L71.29 89.26L70.7 88.67L70.51 88.67L68.55 86.72L68.55 86.52L67.38 85.35L67.38 85.16L66.6 84.38L66.6 84.18L66.21 83.79L66.21 83.59L66.02 83.4L66.02 83.2L65.82 83.01Z"/></svg>`;
// Kleine Uhr für den Kopf des Zeit-Trackers (statt Raben-Icon, das dort
// zuvor eher nach "Kampagnen-Wappen" als nach "Zeit" aussah, Juli 2026).
// Strichzeichnung (stroke statt fill) für einen klaren Uhr-Look.
const CLOCK_SVG = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7.5v4.8l3.2 1.9"/></svg>`;

/* Karte der Dales — Basis64-eingebettetes Bild (Original: Legend_In_The_Mist_-_Map_of_The_Dales.jpg,
   fuer die Tafel leicht komprimiert). Wird im #mapModal angezeigt. */
const DALES_MAP_SRC = "assets/dales-map.jpg";


const app = document.getElementById("app");

let state = {
  view:"overview",        // overview | adventure | challenges | lore
  advId:null,
  sceneIdx:0,
  limits:{},               // uid -> filled count
  openChallenges:new Set(), // domIds of challenge cards currently expanded
  openRules:new Set(),      // rule-indices (Regelglossar) currently expanded
  openGrimoire:new Set(),   // "chapterNum_entryIdx"-Schlüssel (Action Grimoire) currently expanded
  agChapterFilter:null,     // aktiver Kapitel-Chip-Filter (Action Grimoire), null = alle Kapitel
  tbBook:"origin",          // aktives Themebook (origin/adventure/greatness) im Themenbuch-Fragen-Fenster
  tbCat:null,               // aktive Kategorie (key) innerhalb des Themebooks; null = erste Kategorie
  profileOverlays:{},       // Spielerprofil-Bearbeitungen (Texte, Scratches, Tracker) — siehe loadProfileOverlays()
  chSearch:"",             // Challenge-Bibliothek: Suchtext
  chRoleFilter:null,       // Challenge-Bibliothek: aktiver Rollen-Filter (oder null)
  openChCats:new Set(),    // Challenge-Bibliothek: aufgeklappte Kategorien
  storeSearch:"",          // Allgemeiner-Laden-Bibliothek: Suchtext
  placeSearch:"",          // Orte-Bibliothek: Suchtext
  openPlaceCats:new Set(), // Orte-Bibliothek: aufgeklappte Kategorien
  charSearch:"",           // Charakter-Bibliothek: Suchtext
  openCharCats:new Set(),  // Charakter-Bibliothek: aufgeklappte Kategorien
  openStoreCats:new Set(), // Allgemeiner-Laden-Bibliothek: aufgeklappte Kategorien
  pathrailCollapsed:false, // Seitenleiste (Szenen-Weg) ein-/ausgeklappt
  notesOpen:{},            // advId -> bool, ob das Notizfeld gerade aufgeklappt ist
  vignettesPlayed:{},      // vignetteUid -> bool, ob eine Vignette als gespielt markiert wurde
  scenesCompleted:{},      // sceneCompleteKey -> bool, ob eine Szene im Pathrail als erledigt abgehakt wurde
  diceTab:"roll",          // Würfel-Modal: aktiver Tab ("roll" | "yesbut" | "name") — nicht persistiert
  dicePower:0,             // Würfel-Modal: aktuell eingestellter Power-Wert für den 2W6-Wurf
  diceLastRoll:null,       // Würfel-Modal: letztes Wurfergebnis {d1,d2,power,total,outcome}
  diceLastYesBut:null,     // Würfel-Modal: zuletzt gezogener Yes-But-Impuls (Index in DICE_YES_BUT_TABLE)
  diceNameFilter:"any",    // Würfel-Modal: aktiver Namens-Filter ("any"|"female"|"male"|"neutral")
  diceLastName:null,       // Würfel-Modal: zuletzt gewürfelter Name
  favChallenges:{},        // Favoriten (neu): ch.name.toUpperCase() -> true, siehe toggleChallengeFav()
  favGloss:{},             // Favoriten (neu): GLOSSARY-Key -> true, siehe toggleGlossFav()
};

// Persistenz über Reload/Neustart hinweg (neu, Juli 2026) — bislang lebte
// der komplette `state` nur im Arbeitsspeicher; ein versehentlicher
// Reload während einer Session hat sämtliche angeklickten Limit-Pips
// (Challenges UND den Zeit-Tracker, der dieselbe `state.limits`-Struktur
// nutzt, siehe 3.5), den Ein-/Ausklapp-Zustand der Seitenleiste sowie die
// aktuelle Position (Abenteuer/Szene) zurückgesetzt. Wird jetzt gebündelt
// unter einem einzigen localStorage-Key gespeichert. Bewusst NICHT
// persistiert: `openChallenges` (welche Karten gerade aufgeklappt sind)
// und die Bibliotheks-Filter/-Suche — das ist reiner Blätter-Zustand
// ohne Spielfortschritts-Charakter, ein Reload darf hier ruhig wieder
// bei "alles zu" starten.
const PERSIST_KEY = "woto_progress_v1";
function persistState(){
  try{
    localStorage.setItem(PERSIST_KEY, JSON.stringify({
      limits: state.limits,
      vignettesPlayed: state.vignettesPlayed,
      scenesCompleted: state.scenesCompleted,
      pathrailCollapsed: state.pathrailCollapsed,
      view: state.view,
      advId: state.advId,
      sceneIdx: state.sceneIdx,
    }));
  }catch(e){ /* z. B. privates Fenster ohne Storage-Zugriff — Fortschritt bleibt dann auf die laufende Sitzung beschränkt, alles funktioniert innerhalb der Sitzung trotzdem normal weiter */ }
}
function loadPersistedState(){
  try{
    const raw = localStorage.getItem(PERSIST_KEY);
    if(!raw) return;
    const saved = JSON.parse(raw);
    if(!saved || typeof saved!=="object") return;
    if(saved.limits && typeof saved.limits==="object") state.limits = saved.limits;
    if(saved.vignettesPlayed && typeof saved.vignettesPlayed==="object") state.vignettesPlayed = saved.vignettesPlayed;
    if(saved.scenesCompleted && typeof saved.scenesCompleted==="object") state.scenesCompleted = saved.scenesCompleted;
    if(typeof saved.pathrailCollapsed==="boolean") state.pathrailCollapsed = saved.pathrailCollapsed;
    if(saved.view==="adventure" && saved.advId){
      const adv = ADVENTURES.find(a=>a.id===saved.advId && a.status==="ready");
      if(adv){
        state.view = "adventure";
        state.advId = saved.advId;
        const idx = saved.sceneIdx;
        state.sceneIdx = (typeof idx==="number" && idx>=0 && idx<adv.scenes.length) ? idx : 0;
      }
    }
  }catch(e){ /* beschädigter oder unzugänglicher Storage — einfach frisch starten */ }
}

// Favoriten (neu, Juli 2026): bewusst NICHT über PERSIST_KEY/persistState()
// gespeichert, sondern in einem eigenen localStorage-Key — Favoriten sind
// eine reine Merkliste des Spielleiters, keine Spielfortschritts-Daten,
// und sollen darum vom "Reset"-Button (resetAllProgress(), löscht gezielt
// Fortschritt) unangetastet bleiben.
const FAV_PERSIST_KEY = "woto_favorites_v1";
function persistFavorites(){
  try{
    localStorage.setItem(FAV_PERSIST_KEY, JSON.stringify({
      favChallenges: state.favChallenges,
      favGloss: state.favGloss,
    }));
  }catch(e){ /* z. B. privates Fenster ohne Storage-Zugriff — Favoriten bleiben dann auf die laufende Sitzung beschränkt */ }
}
function loadPersistedFavorites(){
  try{
    const raw = localStorage.getItem(FAV_PERSIST_KEY);
    if(!raw) return;
    const saved = JSON.parse(raw);
    if(!saved || typeof saved!=="object") return;
    if(saved.favChallenges && typeof saved.favChallenges==="object") state.favChallenges = saved.favChallenges;
    if(saved.favGloss && typeof saved.favGloss==="object") state.favGloss = saved.favGloss;
  }catch(e){ /* beschädigter oder unzugänglicher Storage — einfach mit leerer Merkliste starten */ }
}

// Reset-Button im Header (Juli 2026, auf Nutzerwunsch): löscht sämtlichen
// gespeicherten Zustand — angeklickte Limit-Pips (Challenges + Zeit-Tracker),
// als gespielt markierte Vignetten, Ein-/Ausklapp-Zustand der Seitenleiste,
// die zuletzt offene Position (Abenteuer/Szene) sowie ALLE freien Notizfelder
// je Abenteuer — und setzt die Tafel auf einen komplett frischen Zustand
// zurück (Übersichtsseite, nichts angeklickt). Nützlich u. a. um zweifelsfrei
// zu prüfen, ob eine neu geladene Datei tatsächlich aktualisierte Inhalte
// zeigt, statt nur den alten, aus localStorage wiederhergestellten Blätter-
// Zustand. Mit Sicherheitsabfrage, da NICHT rückgängig zu machen (Notizen
// und Spielfortschritt gehen dabei unwiderruflich verloren).
function resetAllProgress(){
  const ok = window.confirm("Wirklich ALLES zurücksetzen?\n\nDas löscht unwiderruflich:\n– alle angeklickten Limit-Pips (Challenges & Zeit-Tracker)\n– alle als \"gespielt\" markierten Vignetten\n– alle als erledigt abgehakten Szenen\n– die zuletzt geöffnete Seite\n– ALLE freien Notizfelder in jedem Abenteuer\n– ALLE Bearbeitungen an den Spielerprofilen (Texte, gescratchte Tags, Abandon/Improve/Milestone, Promise)\n\nDies kann nicht rückgängig gemacht werden.");
  if(!ok) return;
  try{
    localStorage.removeItem(PERSIST_KEY);
    localStorage.removeItem(PROFILE_PERSIST_KEY);
    localStorage.removeItem(HIDDEN_PARTY_KEY);
    ADVENTURES.forEach(a=> localStorage.removeItem(noteKey(a.id)));
  }catch(e){ /* z. B. privates Fenster ohne Storage-Zugriff — In-Memory-Reset unten greift trotzdem */ }
  state.limits = {};
  state.vignettesPlayed = {};
  state.scenesCompleted = {};
  state.pathrailCollapsed = false;
  state.notesOpen = {};
  state.openChallenges = new Set();
  state.chSearch = "";
  state.chRoleFilter = null;
  state.openChCats = new Set();
  state.placeSearch = "";
  state.openPlaceCats = new Set();
  state.charSearch = "";
  state.openCharCats = new Set();
  state.profileOverlays = {};
  HIDDEN_PARTY = defaultHiddenParty();
  state.view = "overview";
  state.advId = null;
  state.sceneIdx = 0;
  render();
}

function limitUid(advId, sceneIdx, chIdx, limIdx){
  return advId+"_"+sceneIdx+"_"+chIdx+"_"+limIdx;
}
function vignetteUid(advId, sceneIdx, vIdx){
  return "vig_"+advId+"_"+sceneIdx+"_"+vIdx;
}
// Vignetten (scene.vignettes[]) hatten bisher keinerlei Klick-Zustand —
// nur reiner Vorlesetext ohne Tracking. Neu (Juli 2026, auf Nutzerwunsch,
// im Zuge des PDF-Zusammenfassungs-Features): jede Vignette lässt sich
// als "gespielt" markieren, damit die Zusammenfassung später weiß, was
// die Gruppe tatsächlich erlebt hat, statt nur was im Buch steht.
function toggleVignettePlayed(uid){
  state.vignettesPlayed[uid] = !state.vignettesPlayed[uid];
  render();
  persistState();
}

// Szenen im Pathrail als erledigt abhaken (neu, Juli 2026) — rein optische/
// organisatorische Markierung fürs Wiedereinstiegs-Overview, hat keinen
// Einfluss auf Spielmechanik. Analog zu vignettesPlayed persistiert.
function sceneCompleteKey(advId, sceneIdx){ return advId+"_"+sceneIdx; }
function toggleSceneCompleted(advId, sceneIdx){
  const key = sceneCompleteKey(advId, sceneIdx);
  state.scenesCompleted[key] = !state.scenesCompleted[key];
  render();
  persistState();
}

// Freies Notizfeld pro Abenteuer (neu, Juli 2026) — ein einziges Feld je
// ADVENTURES-Eintrag (nicht pro Szene), damit eigene Abweichungen vom
// Buch, Entscheidungen der Gruppe o. Ä. an einer Stelle gesammelt werden
// können. Persistiert direkt in localStorage (kein Server, keine
// Synchronisation), überlebt also Reload/Neustart des Browsers, aber
// nicht einen Wechsel des Geräts/Browsers. Bewusst NICHT Teil von
// `state`, da state nur den flüchtigen UI-Zustand einer Sitzung hält.
function noteKey(advId){ return "woto_note_"+advId; }
function getNote(advId){
  try{ return localStorage.getItem(noteKey(advId)) || ""; }
  catch(e){ return ""; }
}
function saveNote(advId, text){
  try{ localStorage.setItem(noteKey(advId), text); }
  catch(e){ /* z. B. privates Fenster ohne Storage-Zugriff — Notiz geht dann nur für diese Sitzung nicht verloren, da das Textfeld selbst weiterhin den getippten Wert zeigt */ }
}
// Anders als `esc()` (reine Namenskonvention für vertrauenswürdige,
// selbst verfasste Kampagnendaten) MUSS der Notiztext echt HTML-escaped
// werden, bevor er wieder per innerHTML in ein <textarea> geschrieben
// wird — er stammt vom Nutzer und könnte sonst z. B. ein "</textarea>"
// enthalten und das Markup aufbrechen.
function escHtml(s){
  return String(s===undefined||s===null?"":s)
    .replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
}
function renderAdventureNotes(adv){
  const open = state.notesOpen[adv.id] ? "open" : "";
  return `
  <details class="adv-notes" ${open} ontoggle="state.notesOpen['${adv.id}']=this.open; if(this.open) this.querySelector('.adv-notes-textarea').focus();">
    <summary class="adv-notes-summary"><span class="notes-toggle">▸</span>📝 Notizen zu diesem Abenteuer</summary>
    <textarea class="adv-notes-textarea" placeholder="Eigene Notizen, Abweichungen vom Buch, Entscheidungen der Gruppe …" oninput="saveNote('${adv.id}', this.value)">${escHtml(getNote(adv.id))}</textarea>
  </details>`;
}
