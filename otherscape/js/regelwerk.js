/* Regelwerk- und Metro-Seite */
function renderRegeln(){
  if(typeof OS_REGELN==="undefined"){ $("app").innerHTML = '<div class="missing">Regel-Daten fehlen.</div>'; return; }
  const dummy = {id:"regeln"};
  const secs = OS_REGELN.map(r=>`<section class="rg-sec" id="rg_${r.id}"><h2>${esc(r.titel)}${pgBtn("Metro",r.seite,"S. "+r.seite)}</h2><div class="rg-body">${r.bloecke.map((b,i)=>renderBlock(dummy,{id:r.id},b,i)).join("")}</div></section>`).join("");
  $("app").innerHTML = osRail("", [{t:"Regelwerk",on:true,n:OS_REGELN.length,sub:OS_REGELN.map(r=>({id:"rg_"+r.id,t:r.titel}))}], secs);
}
function rgSave(id,o){ (ST.rg||(ST.rg={}))[id] = o; saveState(); }
function renderMetro(){
  if(typeof OS_METRO==="undefined"){ $("app").innerHTML = '<div class="missing">Setting-Daten fehlen.</div>'; return; }
  const M = OS_METRO;
  const ac = (arr,key) => arr.map((w,i)=>`<article class="mt" id="mt_${key}${i}"><h3>${esc(w.n)}${pgBtn("Metro",w.s,"S. "+w.s)}</h3>${w.k?`<span class="mt-k">${esc(w.k)}</span>`:""}<p>${esc(w.x)}</p></article>`).join("");
  $("app").innerHTML = osRail("", [
    {t:"Welt",on:true,n:M.welt.length,sub:M.welt.map((w,i)=>({id:"mt_w"+i,t:w.n}))},
    {t:"Schlüsselakteure",on:true,n:M.akteure.length,sub:M.akteure.map((w,i)=>({id:"mt_a"+i,t:w.n}))}
  ].map((g,i)=>(g.on=i===0,g)), `<div class="sec-h">Welt</div><div class="mt-grid">${ac(M.welt,"w")}</div><div class="sec-h" id="mt_a">Schlüsselakteure</div><div class="mt-grid">${ac(M.akteure,"a")}</div>`);
}
