/* ---------- Abenteuer-Zusammenfassung als PDF (neu, Juli 2026) ---------- */
// Die Tafel ist bewusst eine einzige, abhängigkeitsfreie HTML-Datei (siehe
// DOKUMENTATION.md, Einleitung) — funktioniert dadurch auch offline am
// Spieltisch. Statt einer JS-PDF-Bibliothek (würde entweder online per CDN
// nachgeladen werden müssen, oder die Datei deutlich aufblähen) nutzt die
// Zusammenfassung deshalb den nativen Browser-Druckdialog: ein neues Fenster
// mit einem sauberen, hellen Print-Layout wird geöffnet und automatisch der
// Druckdialog aufgerufen — dort wählt der Nutzer "Als PDF speichern" (auf
// praktisch jedem Betriebssystem/Browser Standard). Ergebnis ist dieselbe
// heruntergeladene PDF-Datei, nur der Weg dahin läuft über den System-
// Dialog statt über eine eigene PDF-Erzeugung im JS.
/* ---------- Gemeinsames Karten-/Parchment-Stylesheet für alle PDF-Exporte
   (neu, Juli 2026, auf Nutzerwunsch: Design an den offiziellen Legend in
   the Mist-Charakterbogen angelehnt — warmes Pergament, dunkelrote
   Überschriften mit Trennlinie, Karten mit hellbraunem Kopfbalken —
   statt reinem Fließtext untereinander). Von buildAdventureSummaryDoc()
   UND buildProfilePrintDoc() genutzt, damit beide PDFs garantiert
   dasselbe Erscheinungsbild haben und sich Design-Anpassungen nur an
   einer Stelle pflegen lassen. */
function pdfStyleCss(){
  return `
    :root{
      --pdf-ink:#2c2013; --pdf-ink-soft:#5b4a30; --pdf-maroon:#7a2a24;
      --pdf-card-bg:#f7f0dd; --pdf-card-border:#b89968;
      --pdf-head-a:#c9a877; --pdf-head-b:#a9855a;
    }
    /* Der weiße Rand kam vom Seitenrand des Druckdialogs selbst (Chrome
       reserviert dafür standardmäßig ~1,3 cm, in die grundsätzlich NICHTS
       gemalt wird — auch keine Hintergrundfarbe, das ist unabhängig vom
       restlichen CSS). @page{margin} setzt diesen Rand direkt auf der
       Seite selbst; body-padding weiter unten sorgt weiterhin für Luft
       zwischen Text und Papierkante, nur dass jetzt die Pergament-Farbe
       bis dorthin durchgemalt wird statt weiß zu bleiben. 8mm statt 0, weil
       reale Drucker (anders als "Als PDF speichern") oft gar nicht bis zum
       Blattrand drucken können. */
    @page{ margin:8mm; }
    /* Browser drucken standardmäßig OHNE Hintergrundfarben/-verläufe (Tinte
       sparen) — genau das sorgte für die weiße PDF trotz Pergament-Look in
       der Vorschau. -webkit-print-color-adjust/print-color-adjust:exact
       zwingt Chrome/Firefox/Safari, Hintergründe auch beim "Als PDF
       speichern" beizubehalten (setzt voraus, dass "Hintergrundgrafiken" im
       Druckdialog aktiviert ist — bei den allermeisten Browsern Standard). */
    *{box-sizing:border-box; -webkit-print-color-adjust:exact; print-color-adjust:exact; color-adjust:exact;}
    body{
      font-family:Georgia,'Iowan Old Style','Times New Roman',serif;
      background:var(--pdf-card-bg);
      color:var(--pdf-ink); margin:0; padding:26px 30px; line-height:1.32;
    }
    .pdf-title{font-size:23px; font-weight:700; color:var(--pdf-maroon); margin:0 0 4px; letter-spacing:.01em;}
    .pdf-title-rule{height:3px; background:var(--pdf-maroon); border-radius:2px; margin-bottom:5px; width:100%;}
    .pdf-subtitle{font-style:italic; color:var(--pdf-ink-soft); font-size:12px; margin:0 0 16px;}
    h2.pdf-h2{font-size:12px; font-weight:700; color:var(--pdf-ink-soft); text-transform:uppercase; letter-spacing:.08em; margin:18px 0 8px; padding-bottom:3px; border-bottom:1.5px solid var(--pdf-card-border);}
    h2.pdf-h2:first-of-type{margin-top:0;}
    .pdf-card{background:var(--pdf-card-bg); border:1.3px solid var(--pdf-card-border); border-radius:6px; overflow:hidden; break-inside:avoid; box-shadow:0 1px 2px rgba(60,40,10,.08); margin-bottom:0;}
    .pdf-card-head{background:linear-gradient(180deg,var(--pdf-head-a),var(--pdf-head-b)); color:#3a2c18; font-weight:700; font-size:10.5px; text-transform:uppercase; letter-spacing:.05em; padding:5px 10px; border-bottom:1px solid #93744c;}
    .pdf-card-body{padding:7px 10px 8px;}
    /* Dashboard bleibt Flexbox (immer nur 2-3 Karten in einer Reihe) — für
       CHALLENGES/THEMES unten bewusst CSS-Spalten statt Grid, siehe
       Kommentar dort. */
    .pdf-dashboard{display:flex; flex-wrap:wrap; gap:10px; margin-bottom:4px; align-items:flex-start;}
    .pdf-dashboard > .pdf-card{flex:1 1 200px;}
    /* CSS-Spalten (columns) statt Grid für Szenen- und Theme-Karten (neu):
       ein mehrzeiliges CSS-Grid lässt Chrome beim Drucken oft ganze
       Grid-Zeilen auf eine neue Seite springen — das führte dazu, dass
       fast jede Karte auf einer eigenen, größtenteils leeren Seite landete.
       Mehrspaltiger Flusstext (column-count) ist das klassische, im Druck
       zuverlässig getestete CSS-Layout dafür: Karten füllen eine Spalte von
       oben nach unten und brechen erst bei Platzmangel kontrolliert auf die
       nächste Seite um (break-inside:avoid auf der einzelnen Karte). */
    .pdf-scenegrid{columns:2; column-gap:10px;}
    .pdf-scenegrid .pdf-card{margin-bottom:9px;}
    .pdf-item{margin-bottom:5px;}
    .pdf-item:last-child{margin-bottom:0;}
    .pdf-item-title{font-weight:700; font-size:12px; margin-bottom:1px;}
    .pdf-trackers{font-size:11px; color:var(--pdf-ink-soft); margin:1px 0 0;}
    .pdf-scratched{text-decoration:line-through; color:#998;}
    .pdf-empty{color:#8a7a5c; font-style:italic; font-size:12px; margin:0;}
    ul.pdf-ul{margin:1px 0 0; padding-left:16px;}
    ul.pdf-ul li{font-size:11.5px; margin-bottom:0;}
    .pdf-notes-box{white-space:pre-wrap; font-family:inherit; font-size:12px; margin:0;}
    /* Profile fließen jetzt natürlich hintereinander (KEIN erzwungener
       Seitenumbruch mehr pro Profil) — break-inside:avoid auf dem GANZEN
       Profil-Block sorgt dafür, dass eine Hero Card nie mitten in den
       Themes zerrissen wird, aber mehrere kurze Profile trotzdem auf
       dieselbe Seite passen, wenn Platz da ist (nutzt das Papier deutlich
       besser aus als vorher). */
    .pdf-profile{break-inside:avoid; margin-bottom:14px;}
    .pdf-profile:last-child{margin-bottom:0;}
    /* align-items:stretch (Grid-Standard) statt :start (neu, behebt
       sichtbaren Farbsaum): die Hero Card ist meist deutlich kürzer als die
       4 Themes daneben — bei align-items:start endete ihre Box mittendrin,
       und darunter blieb nur noch die (leicht andersfarbige) Seiten-
       Hintergrundfarbe sichtbar, was wie eine störende Trennlinie aussah.
       Gestreckt füllt die Kartenbox die ganze Zeilenhöhe. */
    .pdf-profile-layout{display:grid; grid-template-columns:220px 1fr; gap:10px; align-items:stretch; margin-top:6px;}
    .pdf-hero-name{font-family:Georgia,serif; font-size:17px; font-weight:700; color:var(--pdf-maroon); margin-bottom:1px;}
    .pdf-hero-note{font-size:11.5px; color:var(--pdf-ink-soft); margin:0 0 5px;}
    .pdf-section-label{font-size:9.5px; font-weight:700; text-transform:uppercase; letter-spacing:.07em; color:var(--pdf-ink-soft); margin:6px 0 2px;}
    .pdf-card-body .pdf-section-label:first-child{margin-top:0;}
    .pdf-promise-row{font-size:14px; letter-spacing:3px; color:var(--pdf-maroon);}
    .pdf-promise-frac{font-size:10.5px; letter-spacing:normal; color:var(--pdf-ink-soft); margin-left:6px;}
    .pdf-theme-grid{columns:2; column-gap:8px;}
    .pdf-theme-card{margin-bottom:8px;}
    .pdf-theme-card .pdf-card-body p{margin:3px 0; font-size:11px;}
    .pdf-dot-row{display:flex; flex-wrap:wrap; gap:8px; font-size:10px; color:var(--pdf-ink-soft); margin-top:5px; padding-top:4px; border-top:1px dashed var(--pdf-card-border);}
    @media print{
      body{padding:14px 18px;}
      .pdf-card{box-shadow:none;}
    }
  `;
}
function buildAdventureSummaryDoc(adv){
  const notesRaw = getNote(adv.id).trim();
  // Abenteuerweiter Zeit-Tracker (bisher nur Adventure 2, siehe
  // renderTimeTracker()/Abschnitt 3.5) lebt außerhalb der Szenen-Schleife
  // (eigene, szenenunabhängige uid) — deshalb hier separat geprüft und,
  // falls etwas angeklickt wurde, als eigene Dashboard-Karte eingefügt.
  let timeTrackerCard = "";
  if(adv.id==="a2"){
    const ttUid = limitUid(adv.id, "global", "time", 0);
    const ttFill = getLimitCount(ttUid);
    if(ttFill>0){
      timeTrackerCard = `<div class="pdf-card"><div class="pdf-card-head">Zeit-Limit</div><div class="pdf-card-body">
        <div class="pdf-item-title">Zeit vergeht (Time Passes)</div>
        <div class="pdf-trackers">${ttFill} / 5</div>
      </div></div>`;
    }
  }
  // Challenges & Vignetten (neu, auf Nutzerwunsch: als Karten-Grid statt
  // einer langen Liste untereinander — nutzt die Seitenbreite besser aus).
  const sceneCards = [];
  adv.scenes.forEach((scene, sceneIdx)=>{
    let sceneBlock = "";
    (scene.challenges||[]).forEach((ch, chIdx)=>{
      const trackable = (ch.limits||[]).filter(l=>l.max);
      if(!trackable.length) return; // Challenges ganz ohne Tracker lassen sich nicht "gespielt?" einordnen
      const rows = trackable.map((l,li)=>{
        const uid = limitUid(adv.id, sceneIdx, chIdx, ch.limits.indexOf(l));
        const fill = getLimitCount(uid);
        return {label:l.label, fill, max:l.max};
      });
      const anyClicked = rows.some(r=>r.fill>0);
      if(!anyClicked) return; // ungespielt (nichts angeklickt) — taucht gar nicht erst in der PDF auf
      const clickedRows = rows.filter(r=>r.fill>0); // nur tatsächlich angeklickte Limits auflisten, leere weglassen
      sceneBlock += `<div class="pdf-item">
        <div class="pdf-item-title">${escHtml(ch.name)}</div>
        <ul class="pdf-ul">${clickedRows.map(r=>`<li>${escHtml(r.label)}: ${r.fill} / ${r.max}</li>`).join("")}</ul>
      </div>`;
    });
    if(scene.vignettes && scene.vignettes.length){
      const playedVignettes = scene.vignettes.filter((v,vIdx)=>state.vignettesPlayed[vignetteUid(adv.id, sceneIdx, vIdx)]);
      if(playedVignettes.length){
        const vRows = playedVignettes.map(v=>`<li>✅ ${escHtml(v.name)}</li>`).join("");
        sceneBlock += `<div class="pdf-item"><div class="pdf-item-title">Vignetten</div><ul class="pdf-ul">${vRows}</ul></div>`;
      }
    }
    if(sceneBlock){
      sceneCards.push(`<div class="pdf-card"><div class="pdf-card-head">${escHtml(scene.title)}</div><div class="pdf-card-body">${sceneBlock}</div></div>`);
    }
  });
  const scenesHtml = sceneCards.length
    ? `<div class="pdf-scenegrid">${sceneCards.join("")}</div>`
    : `<p class="pdf-empty">Noch keine Challenge-Limits oder Vignetten angeklickt.</p>`;
  // Erledigte Szenen (neu, auf Nutzerwunsch): dieselbe Markierung wie das
  // grüne Häkchen im Pathrail (state.scenesCompleted, siehe
  // toggleSceneCompleted()) — hier einfach in Buchreihenfolge aufgelistet,
  // damit die Zusammenfassung auch dokumentiert, wie weit die Gruppe im
  // Abenteuer gekommen ist, nicht nur was mechanisch angeklickt wurde.
  const completedScenes = adv.scenes
    .map((scene, sceneIdx)=>({scene, sceneIdx}))
    .filter(x=>!!state.scenesCompleted[sceneCompleteKey(adv.id, x.sceneIdx)]);
  const completedScenesInner = completedScenes.length
    ? `<ul class="pdf-ul">${completedScenes.map(x=>`<li>✅ ${escHtml(x.scene.title)}</li>`).join("")}</ul>`
    : `<p class="pdf-empty">Noch keine Szene im Pathrail als erledigt abgehakt.</p>`;
  const completedScenesCard = `<div class="pdf-card"><div class="pdf-card-head">Erledigte Szenen</div><div class="pdf-card-body">${completedScenesInner}</div></div>`;
  const notesCard = `<div class="pdf-card"><div class="pdf-card-head">Notizen</div><div class="pdf-card-body">
    <div class="pdf-notes-box">${notesRaw?escHtml(notesRaw):'<span class="pdf-empty">(keine Notizen erfasst)</span>'}</div>
  </div></div>`;
  // Dashboard (neu): Notizen, Erledigte Szenen und ggf. Zeit-Limit nebenein-
  // ander statt einer langen Abfolge von Überschriften untereinander.
  const dashboardHtml = `<div class="pdf-dashboard">${notesCard}${completedScenesCard}${timeTrackerCard}</div>`;
  // Spielerprofile (neu, auf Nutzerwunsch): kompletter aktueller Stand ALLER
  // Profile als Anhang — dieselbe Fragment-Erzeugung wie beim Einzeldruck
  // einer Hero Card (buildProfileCardBodyHtml(), siehe dortiger Kommentar),
  // damit hier garantiert derselbe effektive Stand erscheint (gescratchte
  // Tags, Trackerfüllstand, Promise, Backpack, Fellowship). Profile sind
  // campaignweit statt pro Abenteuer, erscheinen also unverändert in jeder
  // Abenteuer-Zusammenfassung — bewusst als eigener Anhang mit Seitenumbruch
  // vor jeder weiteren Karte (siehe .pdf-profile-CSS in pdfStyleCss()),
  // damit jede Hero Card beim Ausdrucken sauber auf einer eigenen Seite
  // beginnt.
  const profilesHtml = visiblePartyIdx().map(pIdx=>`<div class="pdf-profile">${buildProfileCardBodyHtml(pIdx,"party")}</div>`).join("")
    + CUSTOM_PROFILES.map((p,pIdx)=>`<div class="pdf-profile">${buildProfileCardBodyHtml(pIdx,"custom")}</div>`).join("");
  return `<!DOCTYPE html>
<html lang="de"><head><meta charset="utf-8">
<title>${escHtml(adv.title)} — Zusammenfassung</title>
<style>${pdfStyleCss()}</style></head>
<body>
  <div class="pdf-title">${escHtml(adv.title)}</div>
  <div class="pdf-title-rule"></div>
  <div class="pdf-subtitle">${escHtml(adv.en)} — Zusammenfassung erzeugt am ${new Date().toLocaleDateString("de-DE")}</div>
  ${dashboardHtml}
  <h2 class="pdf-h2">Challenges &amp; Vignetten</h2>
  ${scenesHtml}
  <h2 class="pdf-h2">Spielerprofile — Aktueller Stand</h2>
  ${profilesHtml}
</body></html>`;
}
// ---------- Sitzungs-Schnappschuss (neu, Juli 2026, auf Nutzerwunsch) ----------
// Beim Klick auf "Zusammenfassung" wird zusätzlich zum PDF-Druckfenster
// eine ZWEITE, komplett eigenständige HTML-Datei heruntergeladen: eine
// vollständige Kopie DIESER Tafel mit dem kompletten aktuellen Sitzungs-
// stand (Limits, erledigte Szenen/Vignetten, Notizen, Spielerprofile,
// Favoriten) fest eingebettet. Zweck: Der SL kann anschließend im
// Original-Tab beruhigt "↺ Reset" drücken (z. B. für eine neue Kampagne
// oder einen frischen Test-Durchlauf) — der Stand DIESER Sitzung bleibt in
// der heruntergeladenen Kopie für immer erhalten und ist selbst wieder
// eine voll funktionsfähige, eigenständige Tafel (kein Archiv-Format,
// sondern dieselbe App, nur mit vorbefülltem Fortschritt).
//
// Technik: localStorage lässt sich nicht datei-übergreifend mitnehmen (die
// Kopie hat als eigene Datei ihr eigenes, leeres localStorage). Deshalb
// wird der aktuelle Sitzungsstand aus DIESEM localStorage ausgelesen und
// als kleines Seed-Script ganz am Anfang von <body> in die Kopie
// eingefügt — es schreibt die Werte unter denselben Schlüsseln in das
// localStorage der Kopie, bevor das große Haupt-Script weiter unten (das
// unverändert mitkopiert wird) beim Laden ganz normal loadPersistedState()/
// loadPersistedFavorites()/loadProfileOverlays() aufruft und alles wie
// gewohnt rendert. Kein Netzwerkzugriff nötig, funktioniert also auch
// offline/bei file://.
function collectPersistenceSnapshot(){
  const snap = {};
  try{
    [PERSIST_KEY, FAV_PERSIST_KEY, PROFILE_PERSIST_KEY, HIDDEN_PARTY_KEY, TOPBAR_PREFS_KEY].forEach(key=>{
      const val = localStorage.getItem(key);
      if(val!==null) snap[key] = val;
    });
    ADVENTURES.forEach(a=>{
      const val = localStorage.getItem(noteKey(a.id));
      if(val!==null) snap[noteKey(a.id)] = val;
    });
  }catch(e){ /* z. B. privates Fenster ohne Storage-Zugriff — Snapshot enthält dann nur den In-Memory-Stand von `state`, siehe unten */ }
  return snap;
}
// Bettet CSS, Scripts und Bilder (assets/...) in die geklonte Seite ein, damit
// der Sitzungs-Schnappschuss eine einzelne, überall lauffähige HTML-Datei bleibt.
// Funktioniert über http(s) (GitHub Pages / installierte App). Beim Öffnen von
// index.html direkt per file:// blockiert der Browser fetch() — dort stattdessen
// die Einzeldatei-Variante nutzen (tools/build-standalone.py), die schon alles enthält.
async function inlineExternalResources(root){
  const getText = async url => { const r = await fetch(url); if(!r.ok) throw new Error(url+" "+r.status); return r.text(); };
  for(const l of [...root.querySelectorAll('link[rel="stylesheet"][href]')]){
    const st = document.createElement("style");
    st.textContent = await getText(l.getAttribute("href"));
    l.replaceWith(st);
  }
  for(const sc of [...root.querySelectorAll("script[src]")]){
    const code = await getText(sc.getAttribute("src"));
    sc.removeAttribute("src");
    sc.textContent = code;
  }
  root.querySelectorAll('link[rel="manifest"],link[rel="apple-touch-icon"],link[rel="icon"]').forEach(el=>el.remove());
  // assets/... -> data:-URIs (Bilder), in allen eingebetteten Styles und Scripts
  const cache = {};
  const toDataUri = async path => {
    if(cache[path]) return cache[path];
    const r = await fetch(path); if(!r.ok) throw new Error(path);
    const blob = await r.blob();
    return cache[path] = await new Promise(res=>{ const fr=new FileReader(); fr.onload=()=>res(fr.result); fr.readAsDataURL(blob); });
  };
  const re = /assets\/[A-Za-z0-9_\-\/.]+\.(?:png|jpe?g|webp|svg|gif)/g;
  for(const el of root.querySelectorAll("style,script")){
    const txt = el.textContent;
    const paths = [...new Set(txt.match(re) || [])];
    if(!paths.length) continue;
    let out = txt;
    for(const pth of paths) out = out.split(pth).join(await toDataUri(pth));
    el.textContent = out;
  }
}
async function downloadSessionSnapshot(){
  try{
    const snapshot = collectPersistenceSnapshot();
    const clone = document.documentElement.cloneNode(true);
    // Offene Overlay-Fenster in der Kopie schließen (rein kosmetisch, damit
    // der Schnappschuss beim Öffnen sauber startet statt mit einem zufällig
    // noch offenen Modal aus dem Moment des Exports).
    clone.querySelectorAll(".gloss-modal-backdrop.open").forEach(el=>el.classList.remove("open"));
    clone.querySelector("body") && clone.querySelector("body").classList.remove("spoiler-blur");
    // #app wird beim Laden der Kopie ohnehin sofort neu von render() befüllt
    // (letzte Zeile des Haupt-Scripts) — der gerade angezeigte Inhalt würde
    // die Datei nur unnötig aufblähen (z. B. bei offener, komplett
    // aufgeklappter Challenge-Bibliothek).
    const appEl = clone.querySelector("#app");
    if(appEl) appEl.innerHTML = "";
    // Die Tafel besteht aus mehreren Dateien (css/, js/, assets/). Die Kopie soll
    // aber EINE eigenständige Datei sein -> alles einbetten (siehe unten).
    // Zur Laufzeit gesetzte Bilder (z. B. die Karte, wurde per JS aus assets/ geladen)
    // zurücksetzen — die Kopie lädt sie beim Öffnen selbst aus den eingebetteten Daten.
    clone.querySelectorAll("img[src]").forEach(img=>{
      if((img.getAttribute("src")||"").includes("assets/")) img.removeAttribute("src");
    });
    await inlineExternalResources(clone);
    const bodyEl = clone.querySelector("body");
    const seedScript = document.createElement("script");
    seedScript.textContent =
      "try{var __snap=" + JSON.stringify(snapshot) + ";" +
      "for(var __k in __snap){ if(Object.prototype.hasOwnProperty.call(__snap,__k)) localStorage.setItem(__k, __snap[__k]); }" +
      "}catch(e){ /* z. B. privates Fenster ohne Storage-Zugriff im Schnappschuss selbst — Datei startet dann leer statt mit dem mitgenommenen Stand */ }";
    bodyEl.insertBefore(seedScript, bodyEl.firstChild);

    const html = "<!DOCTYPE html>\n" + clone.outerHTML;
    const blob = new Blob([html], {type:"text/html"});
    const url = URL.createObjectURL(blob);
    const now = new Date();
    const pad = n => String(n).padStart(2,"0");
    const stamp = now.getFullYear()+"-"+pad(now.getMonth()+1)+"-"+pad(now.getDate())+"_"+pad(now.getHours())+pad(now.getMinutes());
    const link = document.createElement("a");
    link.href = url;
    link.download = "Wake-of-the-Oldways_Sitzung_"+stamp+".html";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(()=>URL.revokeObjectURL(url), 4000);
  }catch(e){
    console.error("[downloadSessionSnapshot] Backup-Kopie fehlgeschlagen:", e);
    // Bewusst KEIN alert()/Abbruch — die eigentliche PDF-Zusammenfassung
    // (downloadAdventureSummary()) soll trotzdem ganz normal weiterlaufen,
    // auch wenn dieser zusätzliche Backup-Download aus irgendeinem Grund
    // (z. B. Browser blockiert Mehrfach-Downloads) fehlschlägt.
  }
}

function downloadAdventureSummary(){
  const adv = ADVENTURES.find(a=>a.id===state.advId);
  if(!adv) return;
  downloadSessionSnapshot();
  const doc = buildAdventureSummaryDoc(adv);
  const win = window.open("", "_blank");
  if(!win){
    alert("Das Zusammenfassungs-Fenster wurde vom Browser blockiert. Bitte Pop-ups für diese Seite erlauben und erneut versuchen.");
    return;
  }
  win.document.open();
  win.document.write(doc);
  win.document.close();
  win.focus();
  // Kurze Verzögerung, damit der Browser das Dokument fertig gerendert hat,
  // bevor der Druckdialog aufgeht (sonst manchmal leere erste Seite).
  setTimeout(()=>{ try{ win.print(); }catch(e){} }, 250);
}
