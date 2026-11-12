/* Standard-Layout: Baum-Navigation links, flacher offener Inhalt rechts; Handy: wischbare Zeilen oben */
const osShort = t => String(t).split(":")[0];
function osGo(id){ const e = document.getElementById(id); if(e) e.scrollIntoView({behavior:"smooth",block:"start"}); }
/* groups: [{t, href (Hash), on, sub:[{id,t}]}]  –  main: HTML */
function osRail(head, groups, main){
  const sub = g => (g.sub||[]).map(s=>`<a href="#" onclick="osGo('${s.id}');return false">${esc(osShort(s.t))}</a>`).join("");
  const btn = g => `<button class="ocat${g.on?" on":""}" onclick="${g.href?`location.hash='${g.href}'`:`osGo('${g.sub&&g.sub[0]?g.sub[0].id:""}')`}">${esc(osShort(g.t))}${g.n?`<i>${g.n}</i>`:""}</button>`;
  const tree = groups.map(g=>btn(g)+(g.on&&(g.sub||[]).length?`<div class="osub">${sub(g)}</div>`:"")).join("");
  const on = groups.find(g=>g.on)||groups[0];
  const flat = `<div class="orow">${groups.map(btn).join("")}</div>${on&&(on.sub||[]).length?`<div class="orow osr">${sub(on)}</div>`:""}`;
  return `${head||""}<div class="osrail"><nav class="osnav"><div class="otree">${tree}</div><div class="oflat">${flat}</div></nav><div class="osmain">${main}</div></div>`;
}
