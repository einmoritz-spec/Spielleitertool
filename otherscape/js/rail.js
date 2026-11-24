/* Standard-Layout: Baum-Navigation links, flacher offener Inhalt rechts; Handy: wischbare Zeilen oben */
/* Nav-Titel bis zum ":"; bei allgemeinen Präfixen (Theme Kit, Challenge ...) der Teil danach */
const osShort = t => { const s = String(t).trim(), i = s.indexOf(":"); if(i<0) return s; const h = s.slice(0,i).trim();
  return /^(Theme Kit|Challenges?|Trope|Katalog)$/i.test(h) ? s.slice(i+1).trim().replace(/\s*\([^)]*\)\s*$/,"") : h; };
function osGo(id){ const e = document.getElementById(id); if(!e) return; for(let p = e.parentElement; p; p = p.parentElement) if(p.tagName==="DETAILS") p.open = true;
  e.scrollIntoView({behavior:"smooth",block:"start"}); }
/* groups: [{t, href (Hash), on, sub:[{id,t}]}]  –  main: HTML */
function osRail(head, groups, main){
  const sub = g => (g.sub||[]).map(s=>`<a href="#" onclick="osGo('${s.id}');return false">${esc(osShort(s.t))}</a>`).join("");
  const btn = g => `<button class="ocat${g.on?" on":""}" onclick="${g.href?`location.hash='${g.href}'`:`osGo('${g.sub&&g.sub[0]?g.sub[0].id:""}')`}">${esc(osShort(g.t))}${g.n?`<i>${g.n}</i>`:""}</button>`;
  const tree = groups.map(g=>btn(g)+(g.on&&(g.sub||[]).length?`<div class="osub">${sub(g)}</div>`:"")).join("");
  const on = groups.find(g=>g.on)||groups[0];
  const flat = `<div class="orow">${groups.map(btn).join("")}</div>${on&&(on.sub||[]).length?`<div class="orow osr">${sub(on)}</div>`:""}`;
  return `${head||""}<div class="osrail"><nav class="osnav"><div class="otree">${tree}</div><div class="oflat">${flat}</div></nav><div class="osmain">${main}</div></div>`;
}

/* Abenteuer-Tab: Zwischenüberschriften (Hooks, Hintergrund …) als Liste links, Inhalt flach rechts */
function osAdvRail(){
  const cs = document.querySelector("#advGrid .chsec"); if(!cs || cs.dataset.rl) return;
  const SUBS = window.ADV_SUB || [];
  const hs = [...cs.querySelectorAll(".blk-h")];
  if(hs.length<2 && !SUBS.length) return;
  cs.dataset.rl="1";
  /* Abschnitte: Überschrift + Inhalt bis zur nächsten Überschrift aufklappbar */
  hs.forEach((h,i)=>{ if(!h.id) h.id="osh_"+i; });
  hs.forEach(h=>{
    const d = document.createElement("details"); d.className="osdet"; d.open=true;
    const sm = document.createElement("summary"); h.parentNode.insertBefore(d,h); sm.appendChild(h); d.appendChild(sm);
    let n = d.nextSibling;
    while(n && !(n.nodeType===1 && n.matches(".blk-h"))){ const nx=n.nextSibling; d.appendChild(n); n=nx; }
  });
  const subLinks = hs.map(h=>`<a href="#" onclick="osGo('${h.id}');return false">${esc(osShort(h.textContent.trim()))}</a>`).join("");
  /* Unterkapitel: direkt unter dem aktiven Eintrag, eingerückt mit Linie */
  /* Seitenleiste: Titel bis zum ":" kürzen (Tabs oben behalten den vollen Titel); bei doppelten Kurznamen voller Titel */
  const shorts = SUBS.map(it=>osShort(it.t)), dup = i => shorts.filter(x=>x===shorts[i]).length>1;
  const tree = SUBS.length
    ? SUBS.map((it,i)=>`<a class="ocat${it.on?" on":""}" href="${it.href}" title="${esc(it.t)}">${esc(dup(i)?it.t:shorts[i])}</a>${it.on&&subLinks?`<div class="osub2" aria-label="Unterkapitel">${subLinks}</div>`:""}`).join("")
    : (subLinks?`<div class="osub">${subLinks}</div>`:"");
  const flatItems = SUBS.length ? `<div class="orow">${SUBS.map(it=>`<a class="ocat${it.on?" on":""}" href="${it.href}">${esc(it.t)}</a>`).join("")}</div>` : "";
  const flatSubs = subLinks ? `<div class="orow osr">${subLinks}</div>` : "";
  const wrap = document.createElement("div"); wrap.className="osrail osarail";
  wrap.innerHTML = `<nav class="osnav"><div class="otree">${tree}</div><div class="oflat">${flatItems}${flatSubs}</div></nav><div class="osmain"></div>`;
  cs.parentNode.insertBefore(wrap, cs); wrap.querySelector(".osmain").appendChild(cs);
}

/* Tastatur: ↓/↑ schalten durch die Seitenleiste, ←/→ durch die oberen Tabs (Kopfzeile der Seite) */
(function(){
  const vis = els => els.filter(e=>e.offsetParent!==null);
  document.addEventListener("keydown", function(e){
    if(e.ctrlKey||e.metaKey||e.altKey) return;
    const t = e.target; if(t && (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName))) return;
    const k = e.key;
    if(k==="ArrowDown"||k==="ArrowUp"){
      const links = vis([...document.querySelectorAll(".osnav a, .osnav button.ocat")]);
      if(!links.length) return;
      let i = links.indexOf(document.activeElement);
      if(i<0) i = links.findIndex(a=>a.classList.contains("on"));
      const n = k==="ArrowDown" ? (i<0?0:Math.min(i+1,links.length-1)) : (i<0?0:Math.max(i-1,0));
      e.preventDefault();
      links[n].focus(); links[n].click(); links[n].scrollIntoView({block:"nearest"});
    } else if(k==="ArrowLeft"||k==="ArrowRight"){
      const tabs = vis([...document.querySelectorAll(".case-tabbar .case-tab")]);
      const i = tabs.findIndex(a=>a.classList.contains("active")); if(i<0) return;
      const n = k==="ArrowRight" ? Math.min(i+1,tabs.length-1) : Math.max(i-1,0);
      if(n===i) return;
      e.preventDefault(); tabs[n].click();
    }
  });
})();
