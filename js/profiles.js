/* ---------- Spielerprofile: Bearbeitung & Status-Tracking (neu, Juli 2026) ----------
   PLAYER_PROFILES oben bleibt unangetastet als "Blaupause" — jede Bearbeitung
   (Texte, gescratchte Tags, Abandon/Improve/Milestone, Promise) lebt separat
   in einer "Overlay"-Struktur in localStorage, die beim Rendern über die
   Basisdaten gelegt wird. Vorteil: ein "Zurücksetzen"-Button pro Profil kann
   einfach das Overlay löschen und zeigt wieder exakt die Originaldaten,
   ohne dass PLAYER_PROFILES selbst je verändert werden muss.

   Overlay-Form (pro Profil-Index i, in state.profileOverlays[i]):
   {
     name, extraNote, closingNote,                   // Textfelder-Overrides
     backpackItems: [string, ...],                    // wachsende Liste (ersetzt das alte einzelne "backpack"-Feld)
     fellowship: [{companion, tag}, ...],              // Fellowship-Relationship-Zeilen (Companion + Relationship Tag)
     promise: 0-5,
     themes: {
       [themeIdx]: {
         title, titleScratched,                        // Text-Override + Scratch (Titel ist selbst ein Tag)
         weakness,                                    // Text-Override
         quest,                                        // Text-Override
         powerTags: { [tagIdx]: { text, scratched } }, // Text- und Scratch-Override pro Tag
         abandon: 0-3, improve: 0-3, milestone: 0-3,
       }
     }
   }

   ---------- Eigener Charakter-Ersteller (neu) ----------
   Zusätzlich zu den vier festen Gruppenprofilen oben kann die Spielleitung
   jetzt eigene, komplett leere Hero Cards anlegen (Header-Button "Charakter
   erstellen" / Taste X). Diese leben in `CUSTOM_PROFILES` (kein Blaupause-
   Array wie PLAYER_PROFILES, sondern direkt die editierbaren Objekte selbst,
   persistiert unter CUSTOM_PROFILES_KEY) und nutzen exakt dieselbe Render-,
   Bearbeitungs- und Druck-Logik wie die Gruppenprofile. Damit beide Quellen
   dieselben Funktionen teilen können, tragen alle eff-/edit-Funktionen
   unten einen zusätzlichen Parameter `store` ("party" = PLAYER_PROFILES +
   Overlay, "custom" = CUSTOM_PROFILES direkt, keine Overlay-Ebene nötig, da
   dort ohnehin alles vom Nutzer selbst stammt). `store` ist überall optional
   und defaultet auf "party", damit alte Aufrufe (party-Profile) unverändert
   funktionieren.
*/
const PROFILE_PERSIST_KEY = "woto_profile_overlays_v1";
function loadProfileOverlays(){
  try{
    const raw = localStorage.getItem(PROFILE_PERSIST_KEY);
    if(!raw) return {};
    const parsed = JSON.parse(raw);
    return (parsed && typeof parsed==="object") ? parsed : {};
  }catch(e){ return {}; }
}
function saveProfileOverlays(){
  try{ localStorage.setItem(PROFILE_PERSIST_KEY, JSON.stringify(state.profileOverlays)); }
  catch(e){ /* z. B. privates Fenster ohne Storage-Zugriff — Änderungen bleiben dann auf die laufende Sitzung beschränkt */ }
}
// Eigene Charaktere: komplett eigenständige Liste, kein Blaupause/Overlay-
// Splitting nötig (der Nutzer editiert direkt seine eigenen Daten).
const CUSTOM_PROFILES_KEY = "woto_custom_profiles_v1";
let CUSTOM_PROFILES = [];
// Gelöschte Gruppenprofile (neu, November 2026): Die vier Gruppenprofile sind
// fest im Code hinterlegt ("Blaupause"), lassen sich also nicht wirklich
// entfernen. Stattdessen merkt sich diese Menge die Indizes, die ausgeblendet
// sind — überall (Profil-Fenster, Themes-&-Rucksack-Leiste, PDF) werden nur
// die nicht ausgeblendeten Profile gezeigt. Wiederherstellen holt sie samt
// ihrer Änderungen zurück.
const HIDDEN_PARTY_KEY = "woto_hidden_party_v1";
let HIDDEN_PARTY = new Set();
function loadHiddenParty(){
  try{
    const raw = localStorage.getItem(HIDDEN_PARTY_KEY);
    const arr = raw ? JSON.parse(raw) : [];
    return new Set(Array.isArray(arr) ? arr.filter(n=>Number.isInteger(n)) : []);
  }catch(e){ return new Set(); }
}
function saveHiddenParty(){
  try{ localStorage.setItem(HIDDEN_PARTY_KEY, JSON.stringify([...HIDDEN_PARTY])); }catch(e){}
}
function visiblePartyIdx(){
  return PLAYER_PROFILES.map((_,i)=>i).filter(i=>!HIDDEN_PARTY.has(i));
}
function removePartyProfile(pIdx){
  const nm = effProfileField(pIdx,"name","party") || "dieses Profil";
  const ok = window.confirm(`„${nm}" aus der Gruppe entfernen?\n\nDas Profil verschwindet aus allen Ansichten. Über „Gelöschte wiederherstellen" (Profile-Fenster oder ⚙ Einstellungen) lässt es sich samt Änderungen zurückholen.`);
  if(!ok) return;
  HIDDEN_PARTY.add(pIdx);
  saveHiddenParty();
  profilesState.view = "list";
  refreshProfilesBody("party");
  refreshTopbarSettings();
}
function restorePartyProfiles(){
  HIDDEN_PARTY.clear();
  saveHiddenParty();
  refreshProfilesBody("party");
  refreshTopbarSettings();
}
function blankCustomProfile(){
  return {
    name:"Neuer Charakter", extraNote:"", closingNote:"",
    backpackItems:[], fellowship:[], promise:0,
    themes:[1,2,3,4].map(n=>({
      num:n, category:"", title:"", powerTags:["",""], powerTagsMeta:[{scratched:false},{scratched:false}],
      weakness:"", quest:"", abandon:0, improve:0, milestone:0, titleScratched:false,
    })),
  };
}
function loadCustomProfiles(){
  try{
    const raw = localStorage.getItem(CUSTOM_PROFILES_KEY);
    if(!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  }catch(e){ return []; }
}
function saveCustomProfiles(){
  try{ localStorage.setItem(CUSTOM_PROFILES_KEY, JSON.stringify(CUSTOM_PROFILES)); }
  catch(e){ /* privates Fenster o. Ä. — Änderungen bleiben auf die Sitzung beschränkt */ }
}
function addCustomProfile(){
  CUSTOM_PROFILES.push(blankCustomProfile());
  saveCustomProfiles();
  selectProfile(CUSTOM_PROFILES.length-1, "custom");
}
function removeCustomProfile(pIdx){
  const nm = (CUSTOM_PROFILES[pIdx] && CUSTOM_PROFILES[pIdx].name) || "dieser Charakter";
  const ok = window.confirm(`„${nm}" wirklich vollständig löschen?\n\nDas kann nicht rückgängig gemacht werden.`);
  if(!ok) return;
  CUSTOM_PROFILES.splice(pIdx,1);
  saveCustomProfiles();
  backToProfileList("custom");
}

// Liefert das Overlay-Objekt für ein Profil, legt bei Bedarf leere
// Zwischenstrukturen an (aber schreibt nichts, solange nichts geändert wird).
// Nur relevant für store==="party" (custom-Profile werden direkt editiert).
function getProfileOverlay(pIdx){
  if(!state.profileOverlays[pIdx]) state.profileOverlays[pIdx] = { themes:{} };
  if(!state.profileOverlays[pIdx].themes) state.profileOverlays[pIdx].themes = {};
  return state.profileOverlays[pIdx];
}
function getThemeOverlay(pIdx, tIdx){
  const po = getProfileOverlay(pIdx);
  if(!po.themes[tIdx]) po.themes[tIdx] = {};
  return po.themes[tIdx];
}
// Effektiver (angezeigter) Wert = Overlay-Text falls vorhanden, sonst Original.
// `store`: "party" (Default, PLAYER_PROFILES+Overlay) | "custom" (CUSTOM_PROFILES direkt).
function effProfileField(pIdx, field, store){
  if(store==="custom") return CUSTOM_PROFILES[pIdx][field] || "";
  const p = PLAYER_PROFILES[pIdx];
  const ov = state.profileOverlays[pIdx];
  return (ov && ov[field]!==undefined) ? ov[field] : (p[field]||"");
}
function effThemeField(pIdx, tIdx, field, store){
  if(store==="custom") return CUSTOM_PROFILES[pIdx].themes[tIdx][field] || "";
  const t = PLAYER_PROFILES[pIdx].themes[tIdx];
  const ov = state.profileOverlays[pIdx] && state.profileOverlays[pIdx].themes[tIdx];
  return (ov && ov[field]!==undefined) ? ov[field] : (t[field]||"");
}
function effPowerTag(pIdx, tIdx, tagIdx, store){
  if(store==="custom"){
    const th = CUSTOM_PROFILES[pIdx].themes[tIdx];
    const meta = (th.powerTagsMeta && th.powerTagsMeta[tagIdx]) || {};
    return { text: th.powerTags[tagIdx]||"", scratched: !!meta.scratched };
  }
  const original = PLAYER_PROFILES[pIdx].themes[tIdx].powerTags[tagIdx];
  const ov = state.profileOverlays[pIdx] && state.profileOverlays[pIdx].themes[tIdx]
    && state.profileOverlays[pIdx].themes[tIdx].powerTags && state.profileOverlays[pIdx].themes[tIdx].powerTags[tagIdx];
  return { text: (ov && ov.text!==undefined) ? ov.text : original, scratched: !!(ov && ov.scratched) };
}
function effTracker(pIdx, tIdx, field, store){ // field: abandon | improve | milestone
  if(store==="custom") return CUSTOM_PROFILES[pIdx].themes[tIdx][field] || 0;
  const ov = state.profileOverlays[pIdx] && state.profileOverlays[pIdx].themes[tIdx];
  return (ov && ov[field]) ? ov[field] : 0;
}
function effPromise(pIdx, store){
  if(store==="custom") return CUSTOM_PROFILES[pIdx].promise || 0;
  const ov = state.profileOverlays[pIdx];
  return (ov && ov.promise) ? ov.promise : 0;
}
// Backpack als wachsende Liste (statt einzelner String) — Original-Backpack-
// Text wird beim ersten Zugriff als einziger Listeneintrag "importiert",
// danach lebt die Liste komplett im Overlay.
function effBackpackItems(pIdx, store){
  if(store==="custom") return CUSTOM_PROFILES[pIdx].backpackItems || [];
  const ov = state.profileOverlays[pIdx];
  if(ov && Array.isArray(ov.backpackItems)) return ov.backpackItems;
  const original = (PLAYER_PROFILES[pIdx].backpack||"").trim();
  return original ? [original] : [];
}
function addBackpackItem(pIdx, store){
  if(store==="custom"){
    CUSTOM_PROFILES[pIdx].backpackItems.push("");
    saveCustomProfiles();
    refreshProfilesBody(store);
    return;
  }
  const po = getProfileOverlay(pIdx);
  if(!Array.isArray(po.backpackItems)) po.backpackItems = effBackpackItems(pIdx).slice();
  po.backpackItems.push("");
  saveProfileOverlays();
  refreshProfilesBody();
}
function editBackpackItem(pIdx, itemIdx, value, store){
  if(store==="custom"){
    CUSTOM_PROFILES[pIdx].backpackItems[itemIdx] = value;
    saveCustomProfiles();
    return;
  }
  const po = getProfileOverlay(pIdx);
  if(!Array.isArray(po.backpackItems)) po.backpackItems = effBackpackItems(pIdx).slice();
  po.backpackItems[itemIdx] = value;
  saveProfileOverlays();
  // onblur (Feld ist nicht mehr fokussiert) — sicher, jetzt beide Ansichten
  // (Profile-Modal + Themes&Rucksack-Leiste) nachzuziehen, siehe
  // refreshProfilesBody()-Erweiterung.
  refreshProfilesBody("party");
}
function removeBackpackItem(pIdx, itemIdx, store){
  if(store==="custom"){
    CUSTOM_PROFILES[pIdx].backpackItems.splice(itemIdx,1);
    saveCustomProfiles();
    refreshProfilesBody(store);
    return;
  }
  const po = getProfileOverlay(pIdx);
  if(!Array.isArray(po.backpackItems)) po.backpackItems = effBackpackItems(pIdx).slice();
  po.backpackItems.splice(itemIdx, 1);
  saveProfileOverlays();
  refreshProfilesBody();
}
// Fellowship Relationship (Companion + Relationship Tag) — wachsende Liste,
// analog zur "FELLOWSHIP RELATIONSHIP"-Tabelle auf der echten Hero Card.
// Original-Profile kennen dieses Feld nicht, daher rein Overlay-basiert.
function effFellowship(pIdx, store){
  if(store==="custom") return CUSTOM_PROFILES[pIdx].fellowship || [];
  const ov = state.profileOverlays[pIdx];
  return (ov && Array.isArray(ov.fellowship)) ? ov.fellowship : [];
}
function addFellowshipRow(pIdx, store){
  if(store==="custom"){
    CUSTOM_PROFILES[pIdx].fellowship.push({companion:"", tag:""});
    saveCustomProfiles();
    refreshProfilesBody(store);
    return;
  }
  const po = getProfileOverlay(pIdx);
  if(!Array.isArray(po.fellowship)) po.fellowship = [];
  po.fellowship.push({companion:"", tag:""});
  saveProfileOverlays();
  refreshProfilesBody();
}
function editFellowshipField(pIdx, rowIdx, field, value, store){
  if(store==="custom"){
    if(!CUSTOM_PROFILES[pIdx].fellowship[rowIdx]) CUSTOM_PROFILES[pIdx].fellowship[rowIdx] = {companion:"", tag:""};
    CUSTOM_PROFILES[pIdx].fellowship[rowIdx][field] = value;
    saveCustomProfiles();
    return;
  }
  const po = getProfileOverlay(pIdx);
  if(!Array.isArray(po.fellowship)) po.fellowship = [];
  if(!po.fellowship[rowIdx]) po.fellowship[rowIdx] = {companion:"", tag:""};
  po.fellowship[rowIdx][field] = value;
  saveProfileOverlays();
  refreshProfilesBody("party");
}
function removeFellowshipRow(pIdx, rowIdx, store){
  if(store==="custom"){
    CUSTOM_PROFILES[pIdx].fellowship.splice(rowIdx,1);
    saveCustomProfiles();
    refreshProfilesBody(store);
    return;
  }
  const po = getProfileOverlay(pIdx);
  if(!Array.isArray(po.fellowship)) po.fellowship = [];
  po.fellowship.splice(rowIdx, 1);
  saveProfileOverlays();
  refreshProfilesBody();
}
// Theme-Titel ist selbst ein Tag (siehe Hero Card: Themes werden komplett
// abgehakt/verbraucht) — daher genauso scratchbar wie die Power-Tags.
function effTitleScratched(pIdx, tIdx, store){
  if(store==="custom") return !!CUSTOM_PROFILES[pIdx].themes[tIdx].titleScratched;
  const ov = state.profileOverlays[pIdx] && state.profileOverlays[pIdx].themes[tIdx];
  return !!(ov && ov.titleScratched);
}
function toggleScratchTitle(pIdx, tIdx, store){
  if(store==="custom"){
    const th = CUSTOM_PROFILES[pIdx].themes[tIdx];
    th.titleScratched = !th.titleScratched;
    saveCustomProfiles();
    refreshProfilesBody(store);
    return;
  }
  const to = getThemeOverlay(pIdx, tIdx);
  to.titleScratched = !to.titleScratched;
  saveProfileOverlays();
  refreshProfilesBody();
}
// Freitext bearbeiten (Profil-Ebene: name, backpack, extraNote, closingNote)
function editProfileField(pIdx, field, value, store){
  if(store==="custom"){
    CUSTOM_PROFILES[pIdx][field] = value;
    saveCustomProfiles();
    return;
  }
  getProfileOverlay(pIdx)[field] = value;
  saveProfileOverlays();
  refreshProfilesBody("party");
}
// Freitext bearbeiten (Theme-Ebene: title, weakness, quest, category)
function editThemeField(pIdx, tIdx, field, value, store){
  if(store==="custom"){
    CUSTOM_PROFILES[pIdx].themes[tIdx][field] = value;
    saveCustomProfiles();
    return;
  }
  getThemeOverlay(pIdx, tIdx)[field] = value;
  saveProfileOverlays();
  refreshProfilesBody("party");
}
// Power-Tag-Text bearbeiten
function editPowerTag(pIdx, tIdx, tagIdx, value, store){
  if(store==="custom"){
    CUSTOM_PROFILES[pIdx].themes[tIdx].powerTags[tagIdx] = value;
    saveCustomProfiles();
    return;
  }
  const to = getThemeOverlay(pIdx, tIdx);
  if(!to.powerTags) to.powerTags = {};
  if(!to.powerTags[tagIdx]) to.powerTags[tagIdx] = {};
  to.powerTags[tagIdx].text = value;
  saveProfileOverlays();
  refreshProfilesBody("party");
}
// Power-Tag durchstreichen/zurückholen (scratch toggle)
function toggleScratchTag(pIdx, tIdx, tagIdx, store){
  if(store==="custom"){
    const th = CUSTOM_PROFILES[pIdx].themes[tIdx];
    if(!th.powerTagsMeta) th.powerTagsMeta = [];
    if(!th.powerTagsMeta[tagIdx]) th.powerTagsMeta[tagIdx] = {scratched:false};
    th.powerTagsMeta[tagIdx].scratched = !th.powerTagsMeta[tagIdx].scratched;
    saveCustomProfiles();
    refreshProfilesBody(store);
    return;
  }
  const to = getThemeOverlay(pIdx, tIdx);
  if(!to.powerTags) to.powerTags = {};
  if(!to.powerTags[tagIdx]) to.powerTags[tagIdx] = {};
  to.powerTags[tagIdx].scratched = !to.powerTags[tagIdx].scratched;
  saveProfileOverlays();
  refreshProfilesBody();
}
// Neuen Power-Tag zu einem eigenen Theme hinzufügen / entfernen (nur bei
// custom nötig — die festen Gruppenprofile haben eine feste Tag-Anzahl aus
// dem Buch, die nicht verändert werden soll).
function addPowerTagRow(pIdx, tIdx){
  const th = CUSTOM_PROFILES[pIdx].themes[tIdx];
  th.powerTags.push("");
  if(!th.powerTagsMeta) th.powerTagsMeta = [];
  th.powerTagsMeta.push({scratched:false});
  saveCustomProfiles();
  refreshProfilesBody("custom");
}
function removePowerTagRow(pIdx, tIdx, tagIdx){
  const th = CUSTOM_PROFILES[pIdx].themes[tIdx];
  th.powerTags.splice(tagIdx,1);
  if(th.powerTagsMeta) th.powerTagsMeta.splice(tagIdx,1);
  saveCustomProfiles();
  refreshProfilesBody("custom");
}
// Abandon/Improve/Milestone-Pip klicken (gleiches "erneut anklicken = eins
// zurück"-Verhalten wie bei Challenge-Limits, siehe setLimit()).
function setThemeTracker(pIdx, tIdx, field, val, store){
  if(store==="custom"){
    const th = CUSTOM_PROFILES[pIdx].themes[tIdx];
    const cur = th[field]||0;
    th[field] = (cur===val) ? val-1 : val;
    if(th[field]<0) th[field]=0;
    if(th[field]>3) th[field]=3;
    saveCustomProfiles();
    refreshProfilesBody(store);
    return;
  }
  const to = getThemeOverlay(pIdx, tIdx);
  const cur = to[field]||0;
  to[field] = (cur===val) ? val-1 : val;
  if(to[field]<0) to[field]=0;
  if(to[field]>3) to[field]=3;
  saveProfileOverlays();
  refreshProfilesBody();
}
// Promise-Pip klicken (5 Kreise statt 3)
function setPromise(pIdx, val, store){
  if(store==="custom"){
    const p = CUSTOM_PROFILES[pIdx];
    const cur = p.promise||0;
    p.promise = (cur===val) ? val-1 : val;
    if(p.promise<0) p.promise=0;
    if(p.promise>5) p.promise=5;
    saveCustomProfiles();
    refreshProfilesBody(store);
    return;
  }
  const po = getProfileOverlay(pIdx);
  const cur = po.promise||0;
  po.promise = (cur===val) ? val-1 : val;
  if(po.promise<0) po.promise=0;
  if(po.promise>5) po.promise=5;
  saveProfileOverlays();
  refreshProfilesBody();
}
function refreshProfilesBody(store){
  const s = store || (profilesState && profilesState.store) || "party";
  if(s==="custom"){
    const el = document.getElementById("customCharBody");
    if(el) el.innerHTML = renderProfilesBody("custom");
    refreshThemeRail();
    return;
  }
  const el = document.getElementById("profilesBody");
  if(el) el.innerHTML = renderProfilesBody("party");
  // Party-Profile werden auch in der Themes&Rucksack-Leiste angezeigt (siehe
  // renderThemeRail) — hier zentral mit aktualisieren, damit Änderungen aus
  // dem Profile-Modal sofort auch dort sichtbar sind, ohne dass jede
  // einzelne Aufrufstelle das separat anstoßen muss.
  refreshThemeRail();
}
// Setzt ein einzelnes Profil auf die Originaldaten zurück (löscht dessen Overlay).
// Nur für party-Profile sinnvoll — eigene Charaktere haben keine "Original"-
// Blaupause; dort gibt es stattdessen den Löschen-Button (removeCustomProfile).
function resetProfile(pIdx){
  const ok = window.confirm(`„${PLAYER_PROFILES[pIdx].name}" wirklich auf die ursprünglichen Werte zurücksetzen?\n\nAlle eigenen Änderungen (Texte, gescratchte Tags, Abandon/Improve/Milestone, Promise) gehen dabei verloren.`);
  if(!ok) return;
  delete state.profileOverlays[pIdx];
  saveProfileOverlays();
  refreshProfilesBody("party");
}
