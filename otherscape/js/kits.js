/* Theme-Kits (Noise): Cyberspace & Drohnen */
/* Alle Theme-Kit-Dateien (Grundbuch S. 198–246 und Tokyo-Anhang) zu einer Liste zusammenfassen */
const OS_KIT_FILES = ["OS_KITS_SELF_ZUGEHOERIGKEIT","OS_KITS_SELF_BESITZ","OS_KITS_SELF_EXPERTISE","OS_KITS_SELF_HORIZONT","OS_KITS_SELF_PERSOENLICHKEIT","OS_KITS_SELF_VERGANGENHEIT","OS_KITS_MYTHOS_ARTEFAKT","OS_KITS_MYTHOS_GEFAEHRTE","OS_KITS_MYTHOS_ESOTERIK","OS_KITS_MYTHOS_EXPOSITION","OS_KITS_NOISE_AUGMENTIERUNG","OS_KITS_NOISE_AUGMENTIERUNG_2","OS_KITS_NOISE_SPITZENTECHNIK","OS_KITS_NOISE_CYBERSPACE_2"];
function allKits(){
  const out = [...(OS_KITS.kits||[])];
  OS_KIT_FILES.forEach(n=>{ const v = window[n]; if(v && v.kits) out.push(...v.kits); });
  return out;
}
function kitCard(k){
  const il = k.identLbl || "Itch", iv = k.ident ?? k.itch, ie = k.enIdent ?? k.enItch;
  return `<article class="kit"><div class="kit-h"><span>${esc(k.grp)}</span><span>Noise</span></div><h3>${esc(k.name)}<small>${esc(k.enName)}</small></h3>
  <div class="kit-l">Power-Tags</div><div class="kat-tags">${k.power.map((t,i)=>`<span class="kat-tag${i===0?" first":""}" title="${esc(k.enPower[i]||"")}">${esc(t)}</span>`).join("")}</div>
  <div class="kit-l">Schwächen-Tags</div><div class="kat-tags">${k.weak.map((t,i)=>`<span class="kat-tag weak" title="${esc(k.enWeak[i]||"")}">${esc(t)}</span>`).join("")}</div>
  <div class="kit-l">${esc(il)}</div><p class="kit-itch">${esc(iv)}</p><div class="kat-en">${esc(k.enPower.join(" · "))} | ${esc(k.enWeak.join(" · "))} | ${esc(ie)}</div></article>`;
}
function renderKits(){
  if(typeof OS_KITS==="undefined"){ $("app").innerHTML = '<div class="missing">Kit-Daten fehlen.</div>'; return; }
  const KITS = allKits();
  const groups = [...new Set(KITS.map(k=>k.grp))];
  const g0 = groups.map((g,i)=>({t:g,on:i===0,n:KITS.filter(k=>k.grp===g).length,sub:KITS.filter(k=>k.grp===g).map(k=>({id:"kit_"+k.name.replace(/\W+/g,"_"),t:k.name}))}));
  g0.forEach(g=>g.on=true);
  $("app").innerHTML = osRail("", g0, groups.map(g=>`<div class="sec-h">${esc(g)}</div><div class="kit-grid">${KITS.filter(k=>k.grp===g).map(k=>`<div id="kit_${k.name.replace(/\W+/g,"_")}">${kitCard(k)}</div>`).join("")}</div>`).join(""));
}
