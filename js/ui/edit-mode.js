/* ==================================================================
   BEARBEITUNGSMODUS FÜR SZENENTEXTE (neu, November 2026)
   Der Stift oben rechts in jeder Szene schaltet alle Texte der Szene
   (Titel, Überblick, Vorlesetexte, Ablauf, Figuren, Listen, Vignetten,
   Revelations, Belohnungen, Tipps, Challenge-Beschreibungen) editierbar.
   "Speichern" legt NUR die geänderten Felder als Überschreibung in
   localStorage ab (TEXT_EDITS_KEY) — die Originaldaten in js/data/ bleiben
   unangetastet, "Original" stellt sie wieder her. Pro Feld wird ein Pfad
   wie "flow.2" oder "readAloud.0.text" gespeichert, getrennt nach
   Abenteuer und Szene (Schlüssel "<advId>|<scene.key>").
   ================================================================== */
const TEXT_EDITS_KEY = "woto_text_edits_v1";
let TEXT_EDITS = {};
const EDIT = { on:false, dirty:new Set(), pending:{} };

function loadTextEdits(){
  try{
    const p = JSON.parse(localStorage.getItem(TEXT_EDITS_KEY) || "null");
    return (p && typeof p==="object") ? p : {};
  }catch(e){ return {}; }
}
function saveTextEdits(){
  try{ localStorage.setItem(TEXT_EDITS_KEY, JSON.stringify(TEXT_EDITS)); }catch(e){}
}
function textEditKey(advId, scene){ return advId + "|" + scene.key; }

function getByPath(obj, path){
  return path.split(".").reduce((o,k)=> (o==null ? undefined : o[k]), obj);
}
function setByPath(obj, path, val){
  const parts = path.split(".");
  let o = obj;
  for(let i=0;i<parts.length-1;i++){
    if(o==null) return;
    o = o[parts[i]];
  }
  if(o!=null) o[parts[parts.length-1]] = val;
}

// Szene mit angewendeten Überschreibungen (+ im Bearbeitungsmodus den
// noch nicht gespeicherten Zwischenstand, falls zwischendurch neu gerendert wurde).
function effScene(adv, scene){
  const saved = TEXT_EDITS[textEditKey(adv.id, scene)];
  const pend = EDIT.on ? EDIT.pending : null;
  if(!saved && !(pend && Object.keys(pend).length)) return scene;
  const c = structuredClone(scene);
  if(saved) Object.keys(saved).forEach(p=> setByPath(c, p, saved[p]));
  if(pend) Object.keys(pend).forEach(p=> setByPath(c, p, pend[p]));
  return c;
}
function effTitle(advId, scene){
  const ov = TEXT_EDITS[advId + "|" + scene.key];
  return (ov && typeof ov.title==="string") ? ov.title : scene.title;
}

// Im Bearbeitungsmodus Rohtext zeigen (ohne automatische Status-Links),
// sonst wie gewohnt mit Verlinkung.
function LS(html){ return EDIT.on ? html : linkStatuses(html); }
// Attribute für editierbare Felder. mode: "html" (einzeilig), "br" (mehrzeilig, <br>-getrennt),
// "nl" (mehrzeilig, \n-getrennt — Vorlesetexte).
function EA(path, mode){
  return EDIT.on ? ` data-ep="${path}" data-em="${mode||"html"}" contenteditable="true" spellcheck="false"` : "";
}

function editToggleHtml(){
  return `<button class="edit-toggle" onclick="toggleEditMode()" title="Szenentext bearbeiten (Taste E)" aria-label="Szenentext bearbeiten">
    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>
  </button>`;
}
function editBarHtml(adv, scene){
  const hasSaved = !!TEXT_EDITS[textEditKey(adv.id, scene)];
  return `<div class="edit-bar">
    <span class="edit-bar-title">✏ Bearbeitungsmodus</span>
    <span class="edit-bar-count" id="editCount">${editCountLabel()}</span>
    <span class="edit-bar-spacer"></span>
    ${hasSaved?`<button class="collapse-all-btn" onclick="resetSceneEdits()" title="Alle eigenen Änderungen dieser Szene verwerfen und das Original wiederherstellen">↺ Original</button>`:""}
    <button class="collapse-all-btn" onclick="cancelEdits()">Verwerfen</button>
    <button class="collapse-all-btn edit-save" onclick="saveEdits()" title="Speichern (Strg+S)">💾 Speichern</button>
  </div>`;
}
function editCountLabel(){
  const n = EDIT.dirty.size;
  return n ? `${n} ${n===1?"Änderung":"Änderungen"}` : "Text anklicken und tippen";
}

function currentAdvScene(){
  const adv = ADVENTURES.find(a=>a.id===state.advId);
  return adv ? { adv, scene: adv.scenes[state.sceneIdx] } : null;
}

// Zwischenstand der geänderten Felder sichern, bevor neu gerendert wird.
function stashEditPending(){
  if(!EDIT.on) return;
  document.querySelectorAll("[data-ep]").forEach(el=>{
    const p = el.getAttribute("data-ep");
    if(EDIT.dirty.has(p)) EDIT.pending[p] = serializeEditable(el);
  });
}
function serializeEditable(el){
  const mode = el.getAttribute("data-em");
  let h = el.innerHTML.replace(/​/g, "");
  if(mode==="nl"){
    h = h.replace(/<div><br\s*\/?><\/div>/gi, "\n").replace(/<div>/gi, "\n").replace(/<\/div>/gi, "")
         .replace(/<br\s*\/?>/gi, "\n").replace(/\n+$/,"");
    return h;
  }
  if(mode==="br"){
    h = h.replace(/<div><br\s*\/?><\/div>/gi, "<br><br>").replace(/<div>/gi, "<br>").replace(/<\/div>/gi, "")
         .replace(/(<br\s*\/?>)+$/i, "");
    return h;
  }
  return h.replace(/<br\s*\/?>/gi, " ").trim();
}
// Gespeicherten Wert fürs Anzeigen im Editor aufbereiten ("nl": \n -> <br>)
function editDisplayValue(mode, val){
  return mode==="nl" ? String(val||"").replace(/\n/g, "<br>") : val;
}

function renderKeepScroll(){
  const y = window.scrollY;
  render();
  window.scrollTo({top:y, behavior:"instant"});
}
function toggleEditMode(){
  if(state.view!=="adventure") return;
  if(EDIT.on){ cancelEdits(); return; }
  EDIT.on = true; EDIT.dirty.clear(); EDIT.pending = {};
  renderKeepScroll();
}
function leaveEditMode(){
  EDIT.on = false; EDIT.dirty.clear(); EDIT.pending = {};
}
// Vor Szenen-/Abenteuerwechsel: true = weiter, false = abbrechen
function guardEditLeave(){
  if(!EDIT.on) return true;
  if(EDIT.dirty.size && !window.confirm("Ungespeicherte Textänderungen verwerfen?")) return false;
  leaveEditMode();
  return true;
}
function cancelEdits(){
  if(EDIT.dirty.size && !window.confirm("Ungespeicherte Textänderungen verwerfen?")) return;
  leaveEditMode();
  renderKeepScroll();
}
function saveEdits(){
  const cur = currentAdvScene();
  if(!cur){ leaveEditMode(); return; }
  stashEditPending();
  const key = textEditKey(cur.adv.id, cur.scene);
  const store = TEXT_EDITS[key] ? {...TEXT_EDITS[key]} : {};
  Object.keys(EDIT.pending).forEach(p=>{
    const orig = getByPath(cur.scene, p);
    if(EDIT.pending[p] === orig) delete store[p];   // wieder identisch mit dem Original
    else store[p] = EDIT.pending[p];
  });
  if(Object.keys(store).length) TEXT_EDITS[key] = store; else delete TEXT_EDITS[key];
  saveTextEdits();
  SEARCH_INDEX = null;   // Volltextsuche beim nächsten Öffnen neu aufbauen
  leaveEditMode();
  renderKeepScroll();
}
function resetSceneEdits(){
  const cur = currentAdvScene();
  if(!cur) return;
  if(!window.confirm("Alle eigenen Textänderungen dieser Szene verwerfen und das Original wiederherstellen?")) return;
  delete TEXT_EDITS[textEditKey(cur.adv.id, cur.scene)];
  saveTextEdits();
  SEARCH_INDEX = null;
  leaveEditMode();
  renderKeepScroll();
  refreshTopbarSettings();
}
function textEditSceneCount(){ return Object.keys(TEXT_EDITS).length; }
function resetAllTextEdits(){
  if(!textEditSceneCount()) return;
  if(!window.confirm(`Eigene Textänderungen in ${textEditSceneCount()} Szene(n) verwerfen und alle Originale wiederherstellen?`)) return;
  TEXT_EDITS = {};
  saveTextEdits();
  SEARCH_INDEX = null;
  leaveEditMode();
  render();
  refreshTopbarSettings();
}

/* ---------- Eingabe-Verhalten ---------- */
document.addEventListener("input", (e)=>{
  const el = e.target.closest && e.target.closest("[data-ep]");
  if(!el || !EDIT.on) return;
  EDIT.dirty.add(el.getAttribute("data-ep"));
  const c = document.getElementById("editCount");
  if(c) c.textContent = editCountLabel();
});
document.addEventListener("keydown", (e)=>{
  if(!EDIT.on) return;
  if((e.ctrlKey||e.metaKey) && e.key.toLowerCase()==="s"){ e.preventDefault(); saveEdits(); return; }
  const el = e.target.closest && e.target.closest("[data-ep]");
  if(!el || e.key!=="Enter") return;
  e.preventDefault();
  if(el.getAttribute("data-em")!=="html") document.execCommand("insertLineBreak");
});
// Einfügen immer als reiner Text
document.addEventListener("paste", (e)=>{
  const el = e.target.closest && e.target.closest("[data-ep]");
  if(!el || !EDIT.on) return;
  e.preventDefault();
  let t = (e.clipboardData || window.clipboardData).getData("text/plain");
  if(el.getAttribute("data-em")==="html") t = t.replace(/\s*\n\s*/g, " ");
  document.execCommand("insertText", false, t);
});
// Klicks in editierbaren Feldern sollen nur den Cursor setzen (kein Glossar-Popup o. Ä.)
document.addEventListener("click", (e)=>{
  if(EDIT.on && e.target.closest && e.target.closest("[data-ep]")) e.stopPropagation();
}, true);
