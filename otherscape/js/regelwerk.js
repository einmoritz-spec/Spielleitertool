/* Regelwerk- und Metro-Seite */
function renderRegeln(){
  if(typeof OS_REGELN==="undefined"){ $("app").innerHTML = '<div class="missing">Regel-Daten fehlen.</div>'; return; }
  const dummy = {id:"regeln"};
  $("app").innerHTML = `<div class="crumbs"><a onclick="goHome()">Start</a> › Regelwerk</div><div class="adv-head"><h1>Regelwerk</h1><span class="meta">Metro-Grundbuch</span></div>
  <div class="rg-list">${OS_REGELN.map(r=>`<details class="rg"${ST.rg&&ST.rg[r.id]?" open":""} ontoggle="rgSave('${r.id}',this.open)"><summary><b>${esc(r.titel)}</b>${pgBtn("Metro",r.seite,"S. "+r.seite)}</summary><div class="rg-body">${r.bloecke.map((b,i)=>renderBlock(dummy,{id:r.id},b,i)).join("")}</div></details>`).join("")}</div>`;
}
function rgSave(id,o){ (ST.rg||(ST.rg={}))[id] = o; saveState(); }
function renderMetro(){
  if(typeof OS_METRO==="undefined"){ $("app").innerHTML = '<div class="missing">Setting-Daten fehlen.</div>'; return; }
  const M = OS_METRO;
  $("app").innerHTML = `<div class="crumbs"><a onclick="goHome()">Start</a> › Metro-Setting</div><div class="adv-head"><h1>Metro-Setting</h1><span class="meta">Metro-Grundbuch ${pgBtn("Metro",18,"S. 18–61 📖")}</span></div>
  <div class="sec-h">Welt</div><div class="mt-grid">${M.welt.map(w=>`<article class="mt"><h3>${esc(w.n)}${pgBtn("Metro",w.s,"S. "+w.s)}</h3><p>${esc(w.x)}</p></article>`).join("")}</div>
  <div class="sec-h">Schlüsselakteure</div><div class="mt-grid">${M.akteure.map(w=>`<article class="mt"><h3>${esc(w.n)}${pgBtn("Metro",w.s,"S. "+w.s)}</h3><span class="mt-k">${esc(w.k)}</span><p>${esc(w.x)}</p></article>`).join("")}</div>`;
}
