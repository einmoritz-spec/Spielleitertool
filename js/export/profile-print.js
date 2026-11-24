/* ---------- Spielerprofil drucken (neu, Juli 2026) ----------
   Gleiches Prinzip wie downloadAdventureSummary(): sauberes, helles
   Print-Layout in einem neuen Fenster, automatischer Druckdialog ("Als PDF
   speichern"). Zeigt den AKTUELLEN, bearbeiteten Stand (inkl. gescratchter
   Tags, Abandon/Improve/Milestone, Promise) — kein separates PDF-Rendering,
   sondern derselbe effektive Text wie in der Ansicht selbst. */
/* ---------- Spielerprofil-Karte als HTML-Fragment (neu, Juli 2026) ----------
   Ausgelagert aus dem bisherigen buildProfilePrintDoc() (das die komplette
   <html>-Seite fürs Einzel-Drucken einer Karte baut) — dieselbe Fragment-
   Erzeugung wird jetzt AUSSERDEM in buildAdventureSummaryDoc() wiederverwendet
   (auf Nutzerwunsch: die Abenteuer-Zusammenfassung soll den aktuellen Stand
   ALLER Profile enthalten), damit beide Stellen garantiert denselben
   effektiven Stand zeigen (inkl. gescratchter Tags, Trackerfüllstand,
   Promise) statt zweier potenziell auseinanderlaufender Kopien derselben
   Logik. */
// `store`: "party" (Default, die vier Gruppenprofile) | "custom" (eigene,
// im Charakter-Ersteller angelegte Hero Cards) — beide werden über exakt
// denselben Kartenstil gedruckt/exportiert, siehe eff*-Funktionen oben.
function buildProfileCardBodyHtml(pIdx, store){
  store = store || "party";
  const list = store==="custom" ? CUSTOM_PROFILES : PLAYER_PROFILES;
  const p = list[pIdx];
  const name = effProfileField(pIdx,"name",store);
  const backpackItems = effBackpackItems(pIdx,store);
  const extraNote = effProfileField(pIdx,"extraNote",store);
  const closingNote = effProfileField(pIdx,"closingNote",store);
  const fellowship = effFellowship(pIdx,store);
  const promiseFill = effPromise(pIdx,store);
  const promiseDots = Array.from({length:5},(_,n)=> n<promiseFill?"●":"○").join(" ");
  const fellowshipHtml = fellowship.length
    ? `<ul class="pdf-ul">${fellowship.map(row=>`<li>${escHtml(row.companion||"—")} — ${escHtml(row.tag||"—")}</li>`).join("")}</ul>`
    : `<p class="pdf-empty">(keine Beziehungen eingetragen)</p>`;
  const backpackHtml = backpackItems.length
    ? `<ul class="pdf-ul">${backpackItems.map(item=>`<li>${escHtml(item)}</li>`).join("")}</ul>`
    : `<p class="pdf-empty">(leer)</p>`;
  const themeCardsHtml = p.themes.map((t,tIdx)=>{
    const title = effThemeField(pIdx,tIdx,"title",store);
    const titleScratched = effTitleScratched(pIdx,tIdx,store);
    const weakness = effThemeField(pIdx,tIdx,"weakness",store);
    const quest = effThemeField(pIdx,tIdx,"quest",store);
    const category = store==="custom" ? effThemeField(pIdx,tIdx,"category",store) : t.category;
    const tagsHtml = t.powerTags.map((_,tagIdx)=>{
      const tag = effPowerTag(pIdx,tIdx,tagIdx,store);
      return `<li class="${tag.scratched?'pdf-scratched':''}">${escHtml(tag.text)}</li>`;
    }).join("");
    const abandon = effTracker(pIdx,tIdx,"abandon",store);
    const improve = effTracker(pIdx,tIdx,"improve",store);
    const milestone = effTracker(pIdx,tIdx,"milestone",store);
    const trackerDots = (fill)=> Array.from({length:3},(_,n)=> n<fill?"●":"○").join(" ");
    return `<div class="pdf-card pdf-theme-card">
      <div class="pdf-card-head">Theme ${t.num} — ${escHtml(category)}${title?`: ${escHtml(title)}`:""}${titleScratched?' <span class="pdf-scratched">(abgelegt)</span>':''}</div>
      <div class="pdf-card-body">
        <ul class="pdf-ul">${tagsHtml}</ul>
        <p><b>Weakness:</b> ${escHtml(weakness)}</p>
        <p><b>Quest:</b> ${escHtml(quest)}</p>
        <div class="pdf-dot-row">
          <span>Abandon ${trackerDots(abandon)}</span>
          <span>Improve ${trackerDots(improve)}</span>
          <span>Milestone ${trackerDots(milestone)}</span>
        </div>
      </div>
    </div>`;
  }).join("");
  return `
  <div class="pdf-hero-name">${escHtml(name)}</div>
  ${extraNote?`<p class="pdf-hero-note">${escHtml(extraNote)}</p>`:""}
  <div class="pdf-profile-layout">
    <div class="pdf-card">
      <div class="pdf-card-head">Hero Card</div>
      <div class="pdf-card-body">
        <div class="pdf-section-label">Fellowship Relationship</div>
        ${fellowshipHtml}
        <div class="pdf-section-label">Promise</div>
        <div class="pdf-promise-row">${promiseDots}<span class="pdf-promise-frac">${promiseFill} / 5</span></div>
        <div class="pdf-section-label">Backpack</div>
        ${backpackHtml}
        ${closingNote?`<div class="pdf-section-label">Notiz</div><p style="font-size:12px; margin:0;">${escHtml(closingNote)}</p>`:""}
      </div>
    </div>
    <div class="pdf-theme-grid">
      ${themeCardsHtml}
    </div>
  </div>`;
}
function buildProfilePrintDoc(pIdx, store){
  store = store || "party";
  const name = effProfileField(pIdx,"name",store);
  return `<!DOCTYPE html>
<html lang="de"><head><meta charset="utf-8">
<title>${escHtml(name)} — Hero Card</title>
<style>${pdfStyleCss()}</style></head>
<body>
  <div class="pdf-subtitle">Hero Card — Stand vom ${new Date().toLocaleDateString("de-DE")}</div>
  <div class="pdf-profile">${buildProfileCardBodyHtml(pIdx, store)}</div>
</body></html>`;
}
function printProfile(pIdx, store){
  const doc = buildProfilePrintDoc(pIdx, store);
  const win = window.open("", "_blank");
  if(!win){
    alert("Das Druck-Fenster wurde vom Browser blockiert. Bitte Pop-ups für diese Seite erlauben und erneut versuchen.");
    return;
  }
  win.document.open();
  win.document.write(doc);
  win.document.close();
  win.focus();
  setTimeout(()=>{ try{ win.print(); }catch(e){} }, 250);
}

function esc(s){ return (s===undefined||s===null) ? "" : s; }


// Wandelt Fließtext, der intern mit doppelten <br><br> als Absatztrenner
// geschrieben wurde (üblich in Challenge-/Journey-`desc`-Feldern), in echte
// <p>-Absätze um. Grund: zwei aufeinanderfolgende <br> erzeugen visuell eine
// komplett leere Zeile zusätzlich zum normalen line-height und wirken dadurch
// deutlich weiter auseinandergezogen als nötig — echte <p>-Tags lassen sich
// stattdessen über CSS (.ch-desc p) auf einen kompakten, festen Abstand
// setzen (kompaktere Challenge-Karten, Juli 2026).
function descParagraphs(html){
  if(!html) return "";
  return html.split(/(?:<br\s*\/?>\s*){2,}/i)
    .map(part=>part.trim())
    .filter(Boolean)
    .map(part=>`<p>${part}</p>`)
    .join("");
}

// Rendert ein kleines rundes Portrait-Thumbnail für NPC-/Challenge-Karten,
// falls das Datenobjekt ein `img`-Feld (Key in PORTRAITS) trägt. `img` kann
// auch ein Array von Keys sein (z. B. mehrere Mireling-Varianten) — dann
// werden die Portraits als kleine, sich überlappende Gruppe dargestellt.
// Fehlt PORTRAITS/der Key, wird stillschweigend nichts gerendert.
function portraitHtml(imgField, cls){
  if(!imgField || typeof PORTRAITS==="undefined") return "";
  const keys = Array.isArray(imgField) ? imgField : [imgField];
  const valid = keys.filter(k=>PORTRAITS[k]);
  if(!valid.length) return "";
  if(valid.length===1) return `<img class="${cls}" src="${PORTRAITS[valid[0]]}" alt="" loading="lazy">`;
  return `<span class="${cls}-group">${valid.map(k=>`<img class="${cls}" src="${PORTRAITS[k]}" alt="" loading="lazy">`).join("")}</span>`;
}
