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
  $("app").innerHTML = `<div class="crumbs"><a onclick="goHome()">Start</a> › Theme-Kits</div><div class="adv-head"><h1>Theme-Kits</h1><span class="meta">Noise · Cyberspace &amp; Drohnen · Metro-Grundbuch ${pgBtn("Metro",247,"S. 247–251 📖")}</span></div>
  ${groups.map(g=>`<div class="sec-h">${esc(g)}</div><div class="kit-grid">${OS_KITS.kits.filter(k=>k.grp===g).map(kitCard).join("")}</div>`).join("")}`;
}
