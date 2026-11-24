/* Theme-Kits (Noise): Cyberspace & Drohnen */
/* Alle Theme-Kit-Dateien (Grundbuch S. 198–246 und Tokyo-Anhang) zu einer Liste zusammenfassen */
const OS_KIT_FILES = ["OS_KITS_SELF_ZUGEHOERIGKEIT","OS_KITS_SELF_BESITZ","OS_KITS_SELF_EXPERTISE","OS_KITS_SELF_HORIZONT","OS_KITS_SELF_PERSOENLICHKEIT","OS_KITS_SELF_VERGANGENHEIT","OS_KITS_MYTHOS_ARTEFAKT","OS_KITS_MYTHOS_GEFAEHRTE","OS_KITS_MYTHOS_ESOTERIK","OS_KITS_MYTHOS_EXPOSITION","OS_KITS_NOISE_AUGMENTIERUNG","OS_KITS_NOISE_AUGMENTIERUNG_2","OS_KITS_NOISE_SPITZENTECHNIK","OS_KITS_NOISE_CYBERSPACE_2"];
function allKits(){
  const out = [...(OS_KITS.kits||[])];
  OS_KIT_FILES.forEach(n=>{ const v = window[n]; if(v && v.kits) out.push(...v.kits); });
  return out;
}
const KB_COL = {Self:"#e0307a",Mythos:"#9a5cff",Noise:"#19c8e8"};
const KB_FOCUS = {"Exposition":"50% 68%","Horizont":"50% 0%"};
function kbFocus(g){ return KB_FOCUS[g]||"50% 18%"; }
function kbSrc(g){ const B = OS_KITBOOKS[g]; return `img/art/${B.slug}-full.webp`; }
function kitCard(k,col){
  const il = k.identLbl || "Itch", iv = k.ident ?? k.itch, ie = k.enIdent ?? k.enItch;
  return `<details class="kit" style="--tone:${col}"><summary><span class="kit-t">${esc(k.name)}<small>${esc(k.enName)}</small></span><i class="chev">▸</i></summary>
  <div class="kit-l">Power-Tags</div><div class="kat-tags">${k.power.map((t,i)=>`<span class="kat-tag${i===0?" first":""}" title="${esc(k.enPower[i]||"")}">${esc(t)}</span>`).join("")}</div>
  <div class="kit-l">Schwächen-Tags</div><div class="kat-tags">${k.weak.map((t,i)=>`<span class="kat-tag weak" title="${esc(k.enWeak[i]||"")}">${esc(t)}</span>`).join("")}</div>
  <div class="kit-l">${esc(il)}</div><p class="kit-itch">${esc(iv)}</p><div class="kat-en">${esc(k.enPower.join(" · "))} | ${esc(k.enWeak.join(" · "))} | ${esc(ie)}</div></details>`;
}
function renderKits(sel){
  if(typeof OS_KITS==="undefined"||typeof OS_THEMEBOOKS==="undefined"){ $("app").innerHTML = '<div class="missing">Kit-Daten fehlen.</div>'; return; }
  const names = Object.keys(OS_THEMEBOOKS);
  const g = names.find(n=>String(OS_THEMEBOOKS[n].p)===String(sel));
  if(g) return renderThemebook(g, names);
  const sec = t => `<div class="sec-h" style="color:${KB_COL[t]}">${t}-Themebooks</div><div class="kb-grid">${names.filter(n=>OS_THEMEBOOKS[n].typ===t).map(n=>{const T=OS_THEMEBOOKS[n];
    return `<a class="kb-card" href="#/kits/${T.p}" style="--tone:${KB_COL[t]}"><img src="${kbSrc(n)}" style="object-position:${kbFocus(n)}" alt="${esc(n)}" loading="lazy"><b>${esc(n)}</b><small>${esc(T.en)} · S. ${T.p}</small></a>`}).join("")}</div>`;
  $("app").innerHTML = `<div class="kb-over"><h2 class="kb-title">Themebooks</h2>${["Self","Mythos","Noise"].map(sec).join("")}</div>`;
}
function tbDetail(g, col){
  const D = (typeof OS_TBDETAIL!=="undefined") && OS_TBDETAIL[g]; if(!D) return {top:"",rest:""};
  const L = i => String.fromCharCode(65+i);
  const qs = a => `<ol class="tbq">${a.map((q,i)=>`<li><b>${L(i)}</b><span>${esc(q)}</span></li>`).join("")}</ol>`;
  const I = D.ident||{}, lbl = I.label||"Identity";
  const top = `<div class="kb-concept tbwhy"><b>FRAGE</b><p class="tbwq">${esc(D.why.q)}</p><ul>${D.why.opts.map(o=>`<li>${esc(o)}</li>`).join("")}</ul><p class="tbflesh">${esc(D.why.flesh)}</p></div>`+
    (D.extra||[]).map(x=>`<details class="tbx" open><summary>${esc(x.h)}</summary>${x.t.map(t=>`<p>${esc(t)}</p>`).join("")}</details>`).join("");
  const rest = `<div class="tbgrid"><section class="tbsec"><div class="sec-h" style="color:${col}">Power-Tag-Fragen</div>${qs(D.power)}</section>
   <div class="tbcol"><section class="tbsec weak"><div class="sec-h" style="color:#ff5d73">Weakness-Tag-Fragen</div>${qs(D.weak)}</section>
   <section class="tbsec"><div class="sec-h" style="color:${col}">${esc(lbl)}</div>${I.intro?`<p>${esc(I.intro)}</p>`:`<p>Wähle eine Identity für dieses Theme: ein absolutes Statement, das Haltung, Motiv oder Glauben deines Themes ausdrückt. Zum Beispiel:</p>`}
    <ul class="tbex">${I.ex.map(e=>`<li><em>${esc(e[0])}</em> ${esc(e[1])}</li>`).join("")}</ul>
    <p class="tbmut">Mögliche Ansätze: ${I.explore.map(esc).join(" · ")}</p><p class="tbmut">${esc(I.note)}</p></section></div></div>
   <div class="sec-h" style="color:${col}">Crew-Beziehungen</div><div class="tbcards">${D.crew.map(c=>`<div class="tbcard"><p>${esc(c[0])}</p><small>${esc(c[1])}</small></div>`).join("")}</div>
   <div class="sec-h" style="color:${col}">Theme Specials</div><div class="tbcards sp">${D.specials.map(c=>`<div class="tbcard"><b>${esc(c[0])}</b><p>${esc(c[1])}</p></div>`).join("")}</div>`;
  return {top, rest};
}
function renderThemebook(g, names){
  const T = OS_THEMEBOOKS[g], col = KB_COL[T.typ], i = names.indexOf(g);
  const kits = allKits().filter(k=>k.grp===g); const DT = tbDetail(g,col);
  const strip = names.map(n=>`<a class="kb-mini${n===g?" on":""}" href="#/kits/${OS_THEMEBOOKS[n].p}" title="${esc(n)}" style="--tone:${KB_COL[OS_THEMEBOOKS[n].typ]}"><img src="img/art/${OS_KITBOOKS[n].slug}-a.webp" alt="${esc(n)}"></a>`).join("");
  $("app").innerHTML = `<div class="kb-det" style="--tone:${col}"><a class="kb-back" href="#/kits">‹ Alle Themebooks</a><div class="kb-strip">${strip}</div>
  <div class="kb-top"><img class="kb-big" src="${kbSrc(g)}" style="object-position:${kbFocus(g)}" alt="${esc(g)}" onclick="osZoom('${kbSrc(g)}')">
  <div class="kb-txt"><div class="kb-bar"><small>${T.typ.toUpperCase()} THEMEBOOK</small><h2>${esc(g)}</h2><em>${esc(T.en)} · S. ${T.p}</em></div>
  ${T.intro.map(t=>`<p>${esc(t)}</p>`).join("")}<div class="kb-concept"><b>CONCEPT</b><p>${esc(T.concept)}</p></div>${DT.top}</div></div>
  ${DT.rest}<div class="sec-h" style="color:${col}">Kits · ${kits.length}</div><div class="kit-grid">${kits.map(k=>kitCard(k,col)).join("")}</div></div>`;
  window.scrollTo(0,0);
}
