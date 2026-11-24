/* ---------- Charaktererstellung als Fenster + Link für Spieler ----------
   Die vollständige Charaktererstellung liegt als eigene Seite unter creator/.
   - Spielleitung: öffnet sie hier als Vollbild-Fenster (iframe). Fertige Charaktere
     meldet die Seite per postMessage → werden automatisch in "Charakter" (eigene
     Profile) übernommen bzw. aktualisiert.
   - Spieler: bekommen nur den Link zu creator/ (Knopf "Link für Spieler") und
     sehen dort ausschließlich die Charaktererstellung, nicht das Spielleitertool. */
function creatorUrl(){ return new URL("creator/", location.href).href; }

function openCreator(){
  if(document.getElementById("creatorModal")) return;
  const m = document.createElement("div");
  m.id = "creatorModal"; m.className = "creator-modal";
  m.innerHTML = `
    <div class="cm-bar">
      <strong class="cm-title">Charaktererstellung</strong>
      <span class="cm-spacer"></span>
      <button class="cm-btn" onclick="var f=document.querySelector('.cm-frame');try{f.contentWindow.resetSurvey()}catch(e){}" title="Charaktererstellung zurücksetzen" aria-label="Zurücksetzen"><span class="cm-l">Zurücksetzen</span><span class="cm-s">↺</span></button>
      <button class="cm-btn" onclick="toggleCreatorLink()" title="Link für Spieler: öffnet nur die Charaktererstellung">Spieler-Link</button>
      <button class="cm-close" onclick="closeCreator()" aria-label="Schließen">✕</button>
    </div>
    <div class="cm-link" id="cmLink" hidden>
      <div class="cm-link-text">Diesen Link an deine Spieler schicken – er öffnet <b>nur die Charaktererstellung</b>. Fertige Charaktere schicken sie dir als Datei (📤 im Charakterbogen) und du importierst sie unter „Charakter“ → 📥.</div>
      <div class="cm-link-row">
        <input id="cmLinkInput" readonly value="${creatorUrl()}" onfocus="this.select()">
        <button class="cm-btn" onclick="copyCreatorLink()" id="cmCopy">Kopieren</button>
        <button class="cm-btn" onclick="shareCreatorLink()" id="cmShare">Teilen …</button>
      </div>
    </div>
    <iframe class="cm-frame" src="creator/index.html" title="Charaktererstellung"></iframe>
    <div class="cm-toast" id="cmToast" hidden></div>`;
  document.body.appendChild(m);
  document.body.classList.add("menu-open");
}
function closeCreator(){
  const m = document.getElementById("creatorModal");
  if(m) m.remove();
  document.body.classList.remove("menu-open");
}
function toggleCreatorLink(){
  const el = document.getElementById("cmLink");
  if(el) el.hidden = !el.hidden;
}
function creatorToast(msg){
  const t = document.getElementById("cmToast");
  if(!t) return;
  t.textContent = msg; t.hidden = false;
  clearTimeout(creatorToast._t);
  creatorToast._t = setTimeout(()=>{ t.hidden = true; }, 3200);
}
async function copyCreatorLink(){
  const url = creatorUrl();
  try{ await navigator.clipboard.writeText(url); }
  catch(e){ const i = document.getElementById("cmLinkInput"); if(i){ i.select(); document.execCommand("copy"); } }
  const b = document.getElementById("cmCopy");
  if(b){ b.textContent = "✓ Kopiert"; setTimeout(()=>{ b.textContent = "Kopieren"; }, 1400); }
}
async function shareCreatorLink(){
  const url = creatorUrl();
  if(navigator.share){
    try{ await navigator.share({ title:"Charaktererstellung – Legend in the Mist", text:"Hier kannst du deinen Charakter erstellen:", url }); return; }
    catch(e){ if(e && e.name==="AbortError") return; }
  }
  copyCreatorLink();
}

/* Charakter aus der Erstellung übernehmen (neu anlegen oder – gleiche Erstell-ID – aktualisieren). */
function upsertCreatorCharacter(raw){
  const fresh = normalizeImportedCharacter(raw);
  if(!fresh) return null;
  const i = fresh.importedFrom ? CUSTOM_PROFILES.findIndex(p=>p.importedFrom===fresh.importedFrom) : -1;
  let result;
  if(i>=0){
    const old = CUSTOM_PROFILES[i];
    // Spielstand (Haken, Zähler, Gefährten …) behalten, Texte aus der Erstellung übernehmen
    fresh.themes.forEach((th,ti)=>{
      const o = old.themes && old.themes[ti];
      if(!o) return;
      Object.assign(th, { abandon:o.abandon, improve:o.improve, milestone:o.milestone, titleScratched:o.titleScratched });
      th.powerTagsMeta = th.powerTags.map((_,k)=> (o.powerTagsMeta && o.powerTagsMeta[k]) || {scratched:false});
    });
    CUSTOM_PROFILES[i] = Object.assign({}, old, fresh, { fellowship:old.fellowship, promise:old.promise });
    result = "updated";
  } else {
    CUSTOM_PROFILES.push(fresh);
    result = "added";
  }
  saveCustomProfiles();
  if(typeof refreshProfilesBody==="function") try{ refreshProfilesBody("custom"); }catch(e){}
  return { result, name: fresh.name };
}
window.addEventListener("message", ev=>{
  if(ev.origin !== location.origin || !ev.data || ev.data.woto !== "character") return;
  const r = upsertCreatorCharacter(ev.data.character);
  if(r) creatorToast(r.result==="added" ? `✓ „${r.name}“ zu den Profilen hinzugefügt` : `✓ „${r.name}“ aktualisiert`);
});
