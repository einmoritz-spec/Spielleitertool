/* Theme-Kits (Noise): Cyberspace & Drohnen */
function kitCard(k){
  return `<article class="kit"><div class="kit-h"><span>${esc(k.grp)}</span><span>Noise</span></div><h3>${esc(k.name)}<small>${esc(k.enName)}</small></h3>
  <div class="kit-l">Power-Tags</div><div class="kat-tags">${k.power.map((t,i)=>`<span class="kat-tag${i===0?" first":""}" title="${esc(k.enPower[i]||"")}">${esc(t)}</span>`).join("")}</div>
  <div class="kit-l">Schwächen-Tags</div><div class="kat-tags">${k.weak.map((t,i)=>`<span class="kat-tag weak" title="${esc(k.enWeak[i]||"")}">${esc(t)}</span>`).join("")}</div>
  <div class="kit-l">Itch</div><p class="kit-itch">${esc(k.itch)}</p><div class="kat-en">${esc(k.enPower.join(" · "))} | ${esc(k.enWeak.join(" · "))} | ${esc(k.enItch)}</div></article>`;
}
function renderKits(){
  if(typeof OS_KITS==="undefined"){ $("app").innerHTML = '<div class="missing">Kit-Daten fehlen.</div>'; return; }
  const groups = [...new Set(OS_KITS.kits.map(k=>k.grp))];
  const g0 = groups.map((g,i)=>({t:g,on:i===0,n:OS_KITS.kits.filter(k=>k.grp===g).length,sub:OS_KITS.kits.filter(k=>k.grp===g).map(k=>({id:"kit_"+k.name.replace(/\W+/g,"_"),t:k.name}))}));
  g0.forEach(g=>g.on=true);
  $("app").innerHTML = osRail("", g0, groups.map(g=>`<div class="sec-h">${esc(g)}</div><div class="kit-grid">${OS_KITS.kits.filter(k=>k.grp===g).map(k=>`<div id="kit_${k.name.replace(/\W+/g,"_")}">${kitCard(k)}</div>`).join("")}</div>`).join(""));
}
