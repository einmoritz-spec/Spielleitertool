/* Straßenkatalog (Loadout) – Übersicht, Kategorien, Bild-Großansicht ohne Text */
function katImgs(){ const L=[]; OS_KAT.cats.forEach(c=>L.push({src:c.img,cap:c.titel})); OS_KAT.stim.forEach(s=>L.push({src:s.src,cap:s.cap})); return L; }
let KZ = {list:[],i:0};
function katZoom(src){
  KZ.list = katImgs(); KZ.i = Math.max(0, KZ.list.findIndex(x=>src.endsWith(x.src)));
  let o = document.getElementById("katLightbox");
  if(!o){ o = document.createElement("div"); o.id = "katLightbox"; o.className = "kat-lb"; document.body.appendChild(o);
    o.addEventListener("click", e=>{ if(e.target.closest(".kat-nav")||e.target.closest(".kat-lb-x")) return; katClose(); });
    let x0=null; o.addEventListener("touchstart", e=>{ x0=e.touches[0].clientX; },{passive:true});
    o.addEventListener("touchend", e=>{ if(x0===null) return; const dx=e.changedTouches[0].clientX-x0; x0=null; if(Math.abs(dx)>50) katStep(dx<0?1:-1); }); }
  katShow(); o.classList.add("show");
}
function katShow(){ const o=document.getElementById("katLightbox"); const it=KZ.list[KZ.i]; o.innerHTML = `<img src="${it.src}" alt=""><button class="kat-lb-x" aria-label="Schließen" onclick="katClose()">✕</button><button class="kat-nav prev" aria-label="Zurück" onclick="katStep(-1)">‹</button><button class="kat-nav next" aria-label="Weiter" onclick="katStep(1)">›</button>`; }
function katStep(d){ KZ.i = (KZ.i+d+KZ.list.length)%KZ.list.length; katShow(); }
function katClose(){ const o=document.getElementById("katLightbox"); if(o) o.classList.remove("show"); }
document.addEventListener("keydown", e=>{ const o=document.getElementById("katLightbox"); if(!o||!o.classList.contains("show")) return; if(e.key==="Escape") katClose(); else if(e.key==="ArrowRight") katStep(1); else if(e.key==="ArrowLeft") katStep(-1); });

function katTabs(cur){
  return `<div class="kat-tabs" role="tablist"><button class="${cur==="start"?"on":""}" onclick="location.hash='#/katalog'">Überblick</button>${OS_KAT.cats.map(c=>`<button class="${cur===c.id?"on":""}" onclick="location.hash='#/katalog/${c.id}'">${esc(c.titel)}</button>`).join("")}</div>`;
}
function katTags(it){ return `<div class="kat-tags">${it.t.map((t,i)=>`<span class="kat-tag${i===0?" first":""}" title="${esc(it.en[i]||"")}">${esc(t)}</span>`).join("")}<span class="kat-tag weak" title="${esc(it.enw||"")}">– ${esc(it.w)}</span></div>`; }
function katItem(it){ return `<article class="kat-item"><h4>${esc(it.n)}</h4><p>${esc(it.d)}</p>${katTags(it)}<div class="kat-en">${esc(it.en.join(" · "))} · – ${esc(it.enw||"")}</div></article>`; }
function katAllg(c){
  return c.allg.map(g=>`<div class="kat-allg">${g.l?`<div class="kat-allg-h">${esc(g.l)}</div>`:""}${g.items?`<div class="kat-row"><b>Items</b><span>${g.items.map(esc).join(" · ")}</span></div>`:""}${g.features?`<div class="kat-row ok"><b>Features</b><span>${g.features.map(esc).join(" · ")}</span></div>`:""}${g.flaws?`<div class="kat-row bad"><b>Flaws</b><span>${g.flaws.map(esc).join(" · ")}</span></div>`:""}</div>`).join("");
}
function renderKatalog(id){
  if(typeof OS_KAT==="undefined"){ $("app").innerHTML = '<div class="missing">Katalog-Daten fehlen.</div>'; return; }
  const c = id && OS_KAT.cats.find(x=>x.id===id);
  const crumbs = "";
  if(!c){
    const tiles = OS_KAT.cats.map(x=>`<div class="kat-tile"><img src="${x.img}" data-zg="no" alt="${esc(x.titel)}" onclick="location.hash='#/katalog/${x.id}'" title="${esc(x.titel)} öffnen"><button class="kat-tile-t" onclick="location.hash='#/katalog/${x.id}'"><b>${esc(x.titel)}</b><small>${x.items.length} Items · ${esc(x.en)}</small></button></div>`).join("");
    $("app").innerHTML = osRail(`<div class="adv-head"><h1>Straßenkatalog</h1><span class="meta">Loadout · Metro-Grundbuch ${pgBtn("Metro",252,"S. 252–270 📖")}</span></div>`, katGroups(null,[{id:"kat_k",t:"Kategorien"},{id:"kat_s",t:"Stimmungsbilder"},{id:"kat_t",t:"Loadout-Theme-Specials"}]), `<figure class="kat-banner"><img src="img/katalog/stimmung-strasse-header.webp" alt="Straßenszene" onclick="katZoom('img/katalog/stimmung-strasse.webp')"></figure><div class="kat-intro">${OS_KAT.intro.map(t=>`<p>${esc(t)}</p>`).join("")}<div class="kat-how">${OS_KAT.how.map(h=>`<div><b>${esc(h[0])}</b><p>${esc(h[1])}</p></div>`).join("")}</div></div>
    <div class="sec-h" id="kat_k">Kategorien</div><div class="kat-tiles">${tiles}</div>
    <div class="sec-h" id="kat_s">Stimmungsbilder</div><div class="kat-stim">${OS_KAT.stim.slice(1).map(s=>`<figure><img src="${s.src}" alt="${esc(s.cap)}" onclick="katZoom(this.src)"><figcaption>${esc(s.cap)}</figcaption></figure>`).join("")}</div>
    <div class="sec-h" id="kat_t">Loadout-Theme-Specials</div><div class="kat-spec">${OS_KAT.specials.map(s=>`<div class="kat-sp"><b>${esc(s.n)}</b><p>${esc(s.d)}</p></div>`).join("")}</div>`);
    return;
  }
  const idx = OS_KAT.cats.indexOf(c), prev = OS_KAT.cats[idx-1], next = OS_KAT.cats[idx+1];
  const stim = c.id==="cyberspace" ? `<figure class="kat-mood"><img src="${OS_KAT.stim[1].src}" alt="Schlafkapseln" onclick="katZoom(this.src)"></figure>` : "";
  $("app").innerHTML = osRail(`<div class="adv-head"><h1>${esc(c.titel)}</h1><span class="meta">${esc(c.en)} · ${pgBtn("Metro",c.p,"Buch S. "+c.p+" 📖")}</span></div>`, katGroups(c,[{id:"kat_a",t:"Allgemeine Items"},{id:"kat_i",t:"Spezifische Items"}]), `<div class="kat-top"><figure class="kat-hero"><img src="${c.img}" alt="${esc(c.titel)}" onclick="katZoom(this.src)"></figure><div class="kat-text">${c.intro.map(t=>`<p>${esc(t)}</p>`).join("")}</div></div>
  <div class="sec-h" id="kat_a">Allgemeine Items</div>${katAllg(c)}
  <div class="sec-h" id="kat_i">Spezifische Items</div><div class="kat-grid">${c.items.map(katItem).join("")}</div>${stim}
  <div class="kat-pager">${prev?`<button class="btn" onclick="location.hash='#/katalog/${prev.id}'">‹ ${esc(prev.titel)}</button>`:"<span></span>"}${next?`<button class="btn" onclick="location.hash='#/katalog/${next.id}'">${esc(next.titel)} ›</button>`:"<span></span>"}</div>`);
}

function katGroups(c,sub){
  const g = [{t:"Überblick",href:"#/katalog",on:!c,sub:c?null:sub}];
  OS_KAT.cats.forEach(x=>g.push({t:x.titel,href:"#/katalog/"+x.id,on:!!c&&c.id===x.id,sub:c&&c.id===x.id?sub:null}));
  return g;
}
