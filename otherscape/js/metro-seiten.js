/* Metro-Seiten: Archetypen, Charaktererstellung, //RUN (Grundbuch S. 185–195, 272–276) */
function mtList(a){ return `<ul class="mt-ul">${(a||[]).map(x=>`<li>${esc(x)}</li>`).join("")}</ul>`; }
function renderArchetypen(){
  const D = window.OS_ARCHETYPEN; if(!D){ $("app").innerHTML = '<div class="missing">Archetypen-Daten fehlen.</div>'; return; }
  const kit = t => `<span class="kat-tag">${esc(t)}</span>`;
  const groups = D.gruppen.map(g=>({t:g.name,n:g.archetypen.length,on:false,sub:[{id:"ar_g_"+g.id,t:g.name}]}));
  const main = `<p class="kit-intro">${esc(D.intro)}</p>`+D.gruppen.map(g=>`<div class="sec-h" id="ar_g_${esc(g.id)}">${esc(g.name)} <small>${esc(g.enName||"")}</small></div><div class="mt-grid ar-grid">${g.archetypen.map(a=>`<article class="mt ar" id="ar_${esc(a.id)}"><h3>${esc(a.name)}${pgBtn("Metro",a.p,"S. "+a.p)}</h3><span class="mt-k">${esc(a.enName||"")}</span><p>${esc(a.text)}</p><div class="kit-l">Feste Theme-Kits</div><div class="kat-tags">${a.fest.map(kit).join("")}</div><div class="kit-l">Ein Kit zur Wahl</div><div class="kat-tags">${a.wahl.map(kit).join("")}</div><div class="kit-l">Ausrüstung</div>${mtList(a.ausruestung)}</article>`).join("")}</div>`).join("");
  groups[0].on = true;
  $("app").innerHTML = osRail("", groups, main);
}
function renderCharErstellung(){
  const D = window.OS_CHARAKTERERSTELLUNG; if(!D){ $("app").innerHTML = '<div class="missing">Daten fehlen.</div>'; return; }
  const extra = s => [
    s.leitfragen?`<div class="kit-l">Leitfragen</div>${mtList(s.leitfragen)}`:"",
    s.extra?`<p>${esc(s.extra)}</p>`:"",
    s.powerTags?`<div class="kit-l">Power-Tags</div>${mtList(Array.isArray(s.powerTags)?s.powerTags:[s.powerTags])}`:"",
    s.schwaechenTags?`<div class="kit-l">Schwächen-Tags</div>${mtList(Array.isArray(s.schwaechenTags)?s.schwaechenTags:[s.schwaechenTags])}`:"",
    s.fragen?`<div class="kit-l">Fragen</div>${mtList(s.fragen)}`:"",
    s.beispiele?`<div class="kit-l">Beispiele</div>${mtList(Array.isArray(s.beispiele)?s.beispiele.map(b=>typeof b==="string"?b:Object.values(b).join(" – ")):[String(s.beispiele)])}`:""
  ].join("");
  const main = `<p class="kit-intro">${esc(D.intro)}</p><ol class="ce-steps">${D.schritte.map(s=>`<li class="ce-step" id="ce_${esc(s.id)}"><h3>${esc(s.titel.replace(/^Schritt \d+:\s*/,""))}${pgBtn("Metro",s.p,"S. "+s.p)}</h3><p>${esc(s.text)}</p>${extra(s)}</li>`).join("")}</ol>`;
  $("app").innerHTML = osRail("", [{t:D.titel,on:true,n:D.schritte.length,sub:D.schritte.map(s=>({id:"ce_"+s.id,t:s.titel.replace(/^Schritt \d+:\s*/,"")}))}], main);
}
function renderRun(){
  const D = window.OS_RUN; if(!D){ $("app").innerHTML = '<div class="missing">Daten fehlen.</div>'; return; }
  const cur = location.hash.split("/")[2] || D.abschnitte[0].id;
  const A = D.abschnitte.find(a=>a.id===cur) || D.abschnitte[0];
  const items = (arr,tk) => `<div class="mt-grid">${arr.map(r=>`<article class="mt"><h3>${esc(r.titel)}</h3><p>${esc(r.text)}</p></article>`).join("")}</div>`;
  const body = [
    A.intro?`<p class="kit-intro">${esc(A.intro)}</p>`:"",
    A.rollen?items(A.rollen):"",
    A.punkte?items(A.punkte):"",
    A.erinnerungen?`<div class="kit-l">Erinnerungen</div>${mtList(A.erinnerungen)}`:"",
    A.verweis?`<p class="kat-en">${esc(A.verweis)}</p>`:""
  ].join("");
  const rail = D.abschnitte.map(a=>`<a class="ocat${a.id===A.id?" on":""}" href="#/run/${a.id}">${esc(a.titel)}</a>`).join("");
  $("app").innerHTML = `<div class="osrail"><nav class="osnav"><div class="otree">${rail}</div><div class="oflat"><div class="orow">${rail}</div></div></nav><div class="osmain"><div class="sec-h">${esc(A.titel)}${pgBtn("Metro",A.p,"S. "+A.p)}</div>${body}</div></div>`;
}
