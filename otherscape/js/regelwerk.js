/* Regelwerk- und Metro-Seite */
function renderRegeln(){
  if(typeof OS_REGELN==="undefined"){ $("app").innerHTML = '<div class="missing">Regel-Daten fehlen.</div>'; return; }
  /* Grundbuch-Regeln S. 67–92 (metro-regeln-1..3.js) ergänzen die Regeln an */
  const REG = [...OS_REGELN, ...["OS_METRO_REGELN_1","OS_METRO_REGELN_2","OS_METRO_REGELN_3"].flatMap(n=>window[n]||[])];
  const dummy = {id:"regeln"};
  const secs = REG.map(r=>`<section class="rg-sec" id="rg_${r.id}"><h2>${esc(r.titel)}${pgBtn("Metro",r.seite,"S. "+r.seite)}</h2><div class="rg-body">${r.bloecke.map((b,i)=>renderBlock(dummy,{id:r.id},b,i)).join("")}</div></section>`).join("");
  $("app").innerHTML = osRail("", [{t:"Regelwerk",on:true,n:REG.length,sub:REG.map(r=>({id:"rg_"+r.id,t:r.titel}))}], secs);
}
function rgSave(id,o){ (ST.rg||(ST.rg={}))[id] = o; saveState(); }
function renderMetro(){
  if(typeof OS_METRO==="undefined"){ $("app").innerHTML = '<div class="missing">Setting-Daten fehlen.</div>'; return; }
  const M = OS_METRO, W = n => window[n]||[];
  const card = (key,arr) => arr.map((w,i)=>`<article class="mt" id="mt_${key}${i}"><h3>${esc(w.n)}${pgBtn("Metro",w.s,"S. "+w.s)}</h3>${w.k?`<span class="mt-k">${esc(w.k)}</span>`:""}<p>${esc(w.x)}</p></article>`).join("");
  const hooks = W("OS_METRO_HOOKS").map((h,i)=>`<article class="mt mt-hk" id="mt_h${i}"><h3>${esc(h.n)}${pgBtn("Metro",h.s,"S. "+h.s)}</h3><ul class="mt-ul">${h.hooks.map(x=>`<li>${esc(x)}</li>`).join("")}</ul></article>`).join("");
  const gl = W("OS_METRO_GLOSSAR").map(g=>`<tr><th>${esc(g.n)}</th><td>${esc(g.x)}</td><td class="mt-pg">${pgBtn("Metro",g.s,"S. "+g.s)}</td></tr>`).join("");
  const G = [
    {id:"w",t:"Welt",n:M.welt.length,html:card("w",M.welt),sub:M.welt.map((w,i)=>({id:"mt_w"+i,t:w.n}))},
    {id:"a",t:"Schlüsselakteure",n:M.akteure.length,html:card("a",M.akteure),sub:M.akteure.map((w,i)=>({id:"mt_a"+i,t:w.n}))},
    {id:"f",t:"Archetypen",n:W("OS_METRO_ARCHETYPEN").length,html:card("f",W("OS_METRO_ARCHETYPEN"))},
    {id:"c",t:"Crew-Hooks",n:W("OS_METRO_CREW_HOOKS").length,html:card("c",W("OS_METRO_CREW_HOOKS"))},
    {id:"j",t:"Jobs",n:W("OS_METRO_JOBS").length,html:card("j",W("OS_METRO_JOBS"))},
    {id:"o",t:"Ortstypen",n:W("OS_METRO_ORTE").length,html:card("o",W("OS_METRO_ORTE"))},
    {id:"h",t:"Story-Hooks",n:W("OS_METRO_HOOKS").length,html:hooks,sub:W("OS_METRO_HOOKS").map((w,i)=>({id:"mt_h"+i,t:w.n}))},
    {id:"s",t:"Szenen-Trends",n:W("OS_METRO_SZENEN").length,html:card("s",W("OS_METRO_SZENEN"))},
    {id:"p",t:"Weltanschauungen",n:W("OS_METRO_PHILO").length,html:card("p",W("OS_METRO_PHILO"))},
    {id:"g",t:"Glossar",n:W("OS_METRO_GLOSSAR").length,html:`<table class="mt-gl"><tbody>${gl}</tbody></table>`}
  ].filter(g=>g.n);
  const grp = G.map((g,i)=>({t:g.t,n:g.n,on:i===0,sub:g.sub&&g.sub.length?g.sub:[{id:"mt_sec_"+g.id,t:g.t}]}));
  $("app").innerHTML = osRail("", grp, G.map(g=>`<div class="sec-h" id="mt_sec_${g.id}">${esc(g.t)}</div>${g.id==="g"?g.html:`<div class="mt-grid">${g.html}</div>`}`).join(""));
  /* Gruppen-Knöpfe springen zur Überschrift der Gruppe */
  document.querySelectorAll(".osnav button.ocat").forEach((b,i)=>{ if(G[i]) b.setAttribute("onclick",`osGo('mt_sec_${G[i].id}')`); });
}
