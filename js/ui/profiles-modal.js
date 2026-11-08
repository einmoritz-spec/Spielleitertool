/* ---------- player profiles modal ---------- */
// Eigener, kleiner Mini-State nur für dieses Modal (analog zu openGloss/
// openRestRules: kein Teil der zentralen render()-Kaskade, reine direkte
// innerHTML-Manipulation eines eigenen Containers).
// `store` unterscheidet die beiden Profil-Overlays: "party" = die vier festen
// Gruppenprofile (#profilesModal, Taste P), "custom" = frei angelegte eigene
// Charaktere (#customCharModal, Taste X, siehe unten). Beide Fenster teilen
// sich denselben Mini-State, damit selectProfile()/backToProfileList() aus
// beiden Kontexten heraus funktionieren, ohne den State zu verwechseln.
let profilesState = { view:"list", charIdx:0, store:"party" };

// Editierbares Inline-Textfeld (einzeilig) — nutzt contenteditable statt
// <input>, damit sich die Schriftgröße/-familie exakt wie der übrige Text
// verhält, ohne eigene Input-Style-Overrides. onblur speichert, damit nicht
// bei jedem Tastendruck ein Re-Render/Cursor-Sprung passiert.
function editableSpan(cls, value, onSaveCall){
  return `<span class="${cls} pf-editable" contenteditable="true" spellcheck="false"
    onblur="${onSaveCall.replace('__VAL__','this.textContent')}"
    onkeydown="if(event.key==='Enter'){event.preventDefault(); this.blur();}"
    >${escHtml(value)}</span>`;
}
// Editierbarer, mehrzeiliger Textblock (Weakness/Quest/Notizen) — gleiches
// contenteditable-Prinzip, aber ohne Enter-Sonderbehandlung.
function editableBlock(cls, value, onSaveCall){
  return `<span class="${cls} pf-editable pf-editable-block" contenteditable="true" spellcheck="false"
    onblur="${onSaveCall.replace('__VAL__','this.textContent')}"
    >${escHtml(value)}</span>`;
}
function renderTrackerPips(pIdx, tIdx, field, label, max, store){
  const fill = effTracker(pIdx, tIdx, field, store);
  let pips = "";
  for(let i=1;i<=max;i++){
    pips += `<button class="pip pf-pip ${i<=fill?'filled':''}" onclick="setThemeTracker(${pIdx},${tIdx},'${field}',${i},'${store}')" title="${i} von ${max}"></button>`;
  }
  return `<span class="pf-tracker"><span class="pf-tracker-label">${label}</span><span class="pips">${pips}</span></span>`;
}
function renderProfileTheme(pIdx, tIdx, t, store){
  const title = effThemeField(pIdx, tIdx, "title", store);
  const titleScratched = effTitleScratched(pIdx, tIdx, store);
  const weakness = effThemeField(pIdx, tIdx, "weakness", store);
  const quest = effThemeField(pIdx, tIdx, "quest", store);
  const category = store==="custom" ? effThemeField(pIdx, tIdx, "category", store) : t.category;
  const isCustom = store==="custom";
  const tagsHtml = t.powerTags.map((_,tagIdx)=>{
    const tag = effPowerTag(pIdx, tIdx, tagIdx, store);
    return `<span class="chip pf-chip ${tag.scratched?'scratched':''}">
      <span class="pf-chip-text pf-editable" contenteditable="true" spellcheck="false"
        onblur="editPowerTag(${pIdx},${tIdx},${tagIdx},this.textContent,'${store}')"
        onkeydown="if(event.key==='Enter'){event.preventDefault(); this.blur();}"
        data-placeholder="Power Tag"
        >${escHtml(tag.text)}</span>
      <button class="pf-chip-scratch" onclick="toggleScratchTag(${pIdx},${tIdx},${tagIdx},'${store}')" title="${tag.scratched?'Wiederherstellen':'Durchstreichen (verbraucht)'}">${tag.scratched?'↺':'✕'}</button>
      ${isCustom?`<button class="pf-chip-scratch" onclick="removePowerTagRow(${pIdx},${tIdx},${tagIdx})" title="Tag entfernen">🗑</button>`:``}
    </span>`;
  }).join("");
  // Theme-Titel ist selbst ein Tag (siehe Hero Card: ganze Themes werden
  // durchgestrichen/abgehakt) — daher wie ein Power-Tag mit Scratch-Button,
  // nur größer/prominenter im Theme-Kopf platziert.
  return `
    <div class="pf-theme">
      <div class="pf-theme-head">
        <span class="pf-theme-num">Theme ${t.num}</span>
        ${isCustom
          ? editableSpan("pf-theme-cat", category, `editThemeField(${pIdx},${tIdx},'category',__VAL__,'custom')`).replace('pf-editable"','pf-editable" data-placeholder="Kategorie"')
          : `<span class="pf-theme-cat">${esc(category)}</span>`}
        <span class="pf-title-chip ${titleScratched?'scratched':''}">
          ${editableSpan("pf-theme-title", title, `editThemeField(${pIdx},${tIdx},'title',__VAL__,'${store}')`)}
          <button class="pf-chip-scratch pf-title-scratch" onclick="toggleScratchTitle(${pIdx},${tIdx},'${store}')" title="${titleScratched?'Wiederherstellen':'Theme durchstreichen (verbraucht)'}">${titleScratched?'↺':'✕'}</button>
        </span>
      </div>
      <div class="chips">${tagsHtml}</div>
      ${isCustom?`<button class="pf-add-row pf-add-tag-row" onclick="addPowerTagRow(${pIdx},${tIdx})">+ Power Tag hinzufügen</button>`:``}
      <div class="pf-row"><b>Weakness:</b> ${editableBlock("pf-weakness", weakness, `editThemeField(${pIdx},${tIdx},'weakness',__VAL__,'${store}')`)}</div>
      <div class="pf-row"><b>Quest:</b> ${editableBlock("pf-quest", quest, `editThemeField(${pIdx},${tIdx},'quest',__VAL__,'${store}')`)}</div>
      <div class="pf-trackers">
        ${renderTrackerPips(pIdx,tIdx,'abandon','Abandon',3,store)}
        ${renderTrackerPips(pIdx,tIdx,'improve','Improve',3,store)}
        ${renderTrackerPips(pIdx,tIdx,'milestone','Milestone',3,store)}
      </div>
    </div>`;
}
// Backpack als wachsende Liste editierbarer Zeilen + "+ Hinzufügen"-Button,
// analog zur leeren Linien-Liste auf der echten Backpack-Karte.
function renderBackpackList(pIdx, store){
  const items = effBackpackItems(pIdx, store);
  const rows = items.map((item,itemIdx)=>`
    <div class="pf-backpack-row">
      <span class="pf-backpack-item pf-editable" contenteditable="true" spellcheck="false"
        onblur="editBackpackItem(${pIdx},${itemIdx},this.textContent,'${store}')"
        onkeydown="if(event.key==='Enter'){event.preventDefault(); this.blur();}"
        >${escHtml(item)}</span>
      <button class="pf-row-remove" onclick="removeBackpackItem(${pIdx},${itemIdx},'${store}')" title="Eintrag entfernen">✕</button>
    </div>`).join("");
  return `
    <div class="pf-backpack-block">
      <div class="pf-block-label">🎒 Backpack</div>
      ${rows || `<div class="pf-empty-hint">Noch nichts im Rucksack — mit „+ Hinzufügen" starten.</div>`}
      <button class="pf-add-row" onclick="addBackpackItem(${pIdx},'${store}')">+ Gegenstand hinzufügen</button>
    </div>`;
}
// Fellowship Relationship (Companion + Relationship Tag) + Promise, exakt
// wie auf der echten Hero Card unter "FELLOWSHIP RELATIONSHIP" gruppiert.
function renderFellowshipSection(pIdx, store){
  const rows = effFellowship(pIdx, store);
  const promiseFill = effPromise(pIdx, store);
  let promisePips = "";
  for(let n=1;n<=5;n++){
    promisePips += `<button class="pip pf-pip pf-promise-pip ${n<=promiseFill?'filled':''}" onclick="setPromise(${pIdx},${n},'${store}')" title="${n} von 5"></button>`;
  }
  const rowsHtml = rows.map((row,rowIdx)=>`
    <div class="pf-fellowship-row">
      <span class="pf-fellowship-companion pf-editable" contenteditable="true" spellcheck="false"
        onblur="editFellowshipField(${pIdx},${rowIdx},'companion',this.textContent,'${store}')"
        onkeydown="if(event.key==='Enter'){event.preventDefault(); this.blur();}"
        data-placeholder="Companion"
        >${escHtml(row.companion)}</span>
      <span class="pf-fellowship-tag pf-editable" contenteditable="true" spellcheck="false"
        onblur="editFellowshipField(${pIdx},${rowIdx},'tag',this.textContent,'${store}')"
        onkeydown="if(event.key==='Enter'){event.preventDefault(); this.blur();}"
        data-placeholder="Relationship Tag"
        >${escHtml(row.tag)}</span>
      <button class="pf-row-remove" onclick="removeFellowshipRow(${pIdx},${rowIdx},'${store}')" title="Zeile entfernen">✕</button>
    </div>`).join("");
  return `
    <div class="pf-fellowship-block">
      <div class="pf-block-label">🤝 Fellowship Relationship</div>
      ${rows.length?`<div class="pf-fellowship-header"><span>Companion</span><span>Relationship Tag</span><span></span></div>`:""}
      ${rowsHtml || `<div class="pf-empty-hint">Noch keine Beziehungen eingetragen.</div>`}
      <button class="pf-add-row" onclick="addFellowshipRow(${pIdx},'${store}')">+ Beziehung hinzufügen</button>
      <div class="pf-promise-row">
        <span class="pf-tracker-label">Promise</span>
        <span class="pips">${promisePips}</span>
        <span class="pf-promise-count">${promiseFill} / 5</span>
      </div>
    </div>`;
}

function renderProfilesBody(store){
  store = store || "party";
  const list = store==="custom" ? CUSTOM_PROFILES : PLAYER_PROFILES;
  if(profilesState.view==="detail" && profilesState.store===store){
    const i = profilesState.charIdx;
    const p = list[i];
    if(!p){ profilesState.view="list"; return renderProfilesBody(store); }
    const name = effProfileField(i, "name", store);
    const extraNote = effProfileField(i, "extraNote", store);
    const closingNote = effProfileField(i, "closingNote", store);
    const showExtraNote = store==="custom"
      ? true
      : (extraNote || (state.profileOverlays[i] && state.profileOverlays[i].extraNote!==undefined));
    return `
      <div class="pf-detail-toolbar">
        <button class="pf-back" onclick="backToProfileList('${store}')">← Zur Übersicht</button>
        <span class="pf-toolbar-actions">
          <button class="collapse-all-btn" onclick="printProfile(${i},'${store}')" title="Dieses Profil drucken / als PDF speichern">🖨 Drucken</button>
          ${store==="custom"
            ? `<button class="collapse-all-btn" onclick="removeCustomProfile(${i})" title="Diesen Charakter endgültig löschen">🗑 Löschen</button>`
            : `<button class="collapse-all-btn" onclick="resetProfile(${i})" title="Auf Originalwerte zurücksetzen">↺ Zurücksetzen</button>
               <button class="collapse-all-btn" onclick="removePartyProfile(${i})" title="Dieses Profil aus der Gruppe löschen (wiederherstellbar)">🗑 Löschen</button>`}
        </span>
      </div>
      <div class="pf-eyebrow"><span class="raven-icon">${RAVEN_SVG}</span>Hero Card</div>
      <div class="pf-detail-head">
        ${editableSpan("pf-title pf-name-edit", name, `editProfileField(${i},'name',__VAL__,'${store}')`)}
        ${showExtraNote ? `<div class="pf-backpack-line">${editableBlock("pf-extranote-edit", extraNote, `editProfileField(${i},'extraNote',__VAL__,'${store}')`)}</div>` : ""}
      </div>
      ${renderFellowshipSection(i, store)}
      ${renderBackpackList(i, store)}
      ${p.themes.map((t,tIdx)=>renderProfileTheme(i, tIdx, t, store)).join("")}
      <div class="pf-row pf-closingnote-row"><b>Notiz:</b> ${editableBlock("pf-closingnote-edit", closingNote, `editProfileField(${i},'closingNote',__VAL__,'${store}')`)}</div>
    `;
  }
  if(store==="custom"){
    return `
      <div class="pf-eyebrow"><span class="raven-icon">${RAVEN_SVG}</span>Eigene Charaktere</div>
      <div class="pf-title">Charakter-Ersteller</div>
      <div class="pf-list">
        ${CUSTOM_PROFILES.map((p,i)=>`
          <div class="pf-list-row">
            <button class="pf-list-item" onclick="selectProfile(${i},'custom')">
              <span>
                <span class="pf-name">${esc(effProfileField(i,"name","custom"))}</span>
                <div class="pf-backpack">Backpack: ${esc(effBackpackItems(i,"custom").join(", ")||"—")}</div>
              </span>
              <span class="pf-arrow">›</span>
            </button>
            <button class="pf-row-remove" onclick="removeCustomProfile(${i})" title="Charakter löschen">🗑</button>
          </div>`).join("")}
      </div>
      ${!CUSTOM_PROFILES.length?`<div class="pf-empty-hint">Noch keine eigenen Charaktere angelegt.</div>`:``}
      <button class="pf-add-row" onclick="addCustomProfile()">+ Neuen Charakter erstellen</button>`;
  }
  return `
    <div class="pf-eyebrow"><span class="raven-icon">${RAVEN_SVG}</span>Wake of the Oldways — Gruppe 1</div>
    <div class="pf-title">Spielerprofile</div>
    <div class="pf-list">
      ${visiblePartyIdx().map(i=>`
        <div class="pf-list-row">
          <button class="pf-list-item" onclick="selectProfile(${i},'party')">
            <span>
              <span class="pf-name">${esc(effProfileField(i,"name","party"))}</span>
              <div class="pf-backpack">Backpack: ${esc(effBackpackItems(i,"party").join(", ")||"—")}</div>
            </span>
            <span class="pf-arrow">›</span>
          </button>
          <button class="pf-row-remove" onclick="removePartyProfile(${i})" title="Profil löschen">🗑</button>
        </div>`).join("")}
    </div>
    ${!visiblePartyIdx().length?`<div class="pf-empty-hint">Keine Gruppenprofile — eigene Charaktere legst du mit 🆕 Charakter (Taste X) an.</div>`:``}
    ${HIDDEN_PARTY.size?`<button class="pf-add-row" onclick="restorePartyProfiles()">↺ Beispielprofile wiederherstellen (${HIDDEN_PARTY.size})</button>`:``}`;
}

function openProfiles(){
  profilesState.view = "list";
  profilesState.store = "party";
  document.getElementById("profilesBody").innerHTML = renderProfilesBody("party");
  document.getElementById("profilesModal").classList.add("open");
}
function closeProfiles(){
  document.getElementById("profilesModal").classList.remove("open");
}
// Charakter-Ersteller: eigenes Modal, gleiches Prinzip wie #profilesModal.
function openCustomChars(){
  profilesState.view = "list";
  profilesState.store = "custom";
  document.getElementById("customCharBody").innerHTML = renderProfilesBody("custom");
  document.getElementById("customCharModal").classList.add("open");
}
function closeCustomChars(){
  document.getElementById("customCharModal").classList.remove("open");
}
function selectProfile(i, store){
  store = store || "party";
  profilesState.view = "detail";
  profilesState.charIdx = i;
  profilesState.store = store;
  refreshProfilesBody(store);
}
function backToProfileList(store){
  store = store || profilesState.store || "party";
  profilesState.view = "list";
  refreshProfilesBody(store);
}
