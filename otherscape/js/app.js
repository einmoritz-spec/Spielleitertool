/* Otherscape – Spielleiter-Tafel. Zustand: localStorage otherscape_state_v1 */
const STATE_KEY = "otherscape_state_v1";
const $ = id => document.getElementById(id);
const esc = s => String(s==null?"":s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const fmt = s => esc(s).replace(/\*\*(.+?)\*\*/g,"<b>$1</b>").replace(/\*(.+?)\*/g,"<i>$1</i>");
let ST = loadState();
function loadState(){ const d = { lim:{}, clk:{}, notes:{}, done:{}, last:null, nav:true }; try{ return Object.assign(d, JSON.parse(localStorage.getItem(STATE_KEY)||"{}")); }catch(e){ return d; } }
function saveState(){ try{ localStorage.setItem(STATE_KEY, JSON.stringify(ST)); }catch(e){} }

/* ---------- Daten laden (je Abenteuer mehrere Dateien) ---------- */
const loading = {};
function loadScript(src){ return new Promise(res=>{ const s = document.createElement("script"); s.src = src; s.onload = ()=>res(true); s.onerror = ()=>res(false); document.head.appendChild(s); }); }
function loadAdv(id){
  const have = OS_ADV.find(a=>a.id===id); if(have) return Promise.resolve(have);
  if(loading[id]) return loading[id];
  return loading[id] = (async()=>{
    for(const f of (OS_ADV_FILES[id]||[])) await loadScript("js/data/abenteuer/"+f);
    return OS_ADV.find(a=>a.id===id) || null;
  })();
}
const hasData = id => !!(OS_ADV_FILES[id] && OS_ADV_FILES[id].length);

/* ---------- Routing ---------- */
const parseHash = () => (location.hash||"#/").slice(2).split("/");
window.addEventListener("hashchange", route);
function goHome(){ location.hash = "#/"; }
function goLastAdv(){ location.hash = ST.last || "#/"; }
async function route(){
  const p = parseHash(); window.scrollTo(0,0);
  if(p[0]==="adv" && p[1]){
    ST.last = "#/adv/"+p[1]+(p[2]?"/"+p[2]:""); saveState();
    $("app").innerHTML = '<div class="missing">Lade Abenteuer …</div>';
    const a = await loadAdv(p[1]);
    const info = OS_ADV_LIST.find(x=>x.id===p[1]);
    if(!a){ $("app").innerHTML = `<div class="missing"><h2>${esc(info?info.titel:p[1])}</h2><p>Dieses Abenteuer ist noch nicht erfasst.</p><button class="btn" onclick="goHome()">Zur Startseite</button></div>`; return; }
    renderAdv(a, p[2] || a.sektionen[0].id);
  } else if(p[0]==="gegner") renderGegner();
  else if(p[0]==="fraktionen") renderFraktionen();
  else if(p[0]==="tokyo") renderTokyo();
  else renderHome();
}

/* ---------- Start ---------- */
function renderHome(){
  let h = `<div class="hero"><div class="eyebrow">Otherscape · Cyberpunk-Fantasy</div><h1>Spielleiter-Tafel</h1><p class="hint">Privat · Spielleiter-Fassungen in eigenen Worten mit allen Spielwerten · Vorlesetexte im Buch nachschlagen</p></div>`;
  const card = a => { const ok = hasData(a.id); return `<button class="card ${ok?"":"off"}" ${ok?`onclick="location.hash='#/adv/${a.id}'"`:"disabled"}><span class="nr">${esc(a.buch)} · ${esc(a.seiten)}</span><b>${esc(a.titel)}</b><small>${esc(a.sub)}</small><span class="badge ${ok?"ok":"run"}">${ok?esc(a.tag):"in Arbeit"}</span></button>`; };
  h += `<div class="sec-h">Abenteuer</div><div class="cards">${OS_ADV_LIST.filter(a=>a.kat===undefined).map(card).join("")}</div>`;
  $("app").innerHTML = h;
}

/* ---------- Tokyo-Setting (über Header-Button) ---------- */
function renderTokyo(){
  const card = a => { const ok = hasData(a.id); return `<button class="card ${ok?"":"off"}" ${ok?`onclick="location.hash='#/adv/${a.id}'"`:"disabled"}><span class="nr">${esc(a.buch)} · ${esc(a.seiten)}</span><b>${esc(a.titel)}</b><small>${esc(a.sub)}</small></button>`; };
  $("app").innerHTML = `<div class="crumbs"><a onclick="goHome()">Start</a> › Tokyo-Setting</div><div class="adv-head"><h1>Tokyo-Setting</h1><span class="meta">Überblick, Bezirke, Orte · Gegner im Gegner-Browser, Fraktionen unter 🏛</span></div><div class="cards">${OS_ADV_LIST.filter(a=>a.kat==="setting").map(card).join("")}</div>`;
}

/* ---------- Abenteuer ---------- */
function grpOf(a,s){ let g=null; for(const x of a.sektionen){ if(x.gruppe) g=x.gruppe; if(x===s) return g; } return null; }
function bkey(a,s,i){ return a.id+":"+s.id+":"+i; }
function renderAdv(a, secId){
  let idx = a.sektionen.findIndex(s=>s.id===secId); if(idx<0) idx = 0;
  const s = a.sektionen[idx];
  const doneKey = a.id+":"+s.id;
  let navH = "", grp = null, cur = null;
  const closeG = () => { if(grp){ navH += `</div></details>`; grp = null; } };
  a.sektionen.forEach(x=>{ const g = x.gruppe || cur; if(x.gruppe) cur = x.gruppe;
    if(x.gruppe && x.gruppe!==grp){ closeG(); const has = a.sektionen.some(y=>y.id===s.id && (y.gruppe||"")===x.gruppe) || (s.gruppe===x.gruppe) || grpOf(a,s)===x.gruppe; navH += `<details class="ng" ${has?"open":""}><summary>${esc(x.gruppe)}</summary><div>`; grp = x.gruppe; }
    navH += `<button class="${x.id===s.id?"on":""}" onclick="location.hash='#/adv/${a.id}/${x.id}'">${esc(x.titel)}</button>`; });
  closeG();
  const opts = a.sektionen.map(x=>`<option value="${x.id}" ${x.id===s.id?"selected":""}>${esc((x.gruppe?x.gruppe+" · ":"")+x.titel)}</option>`).join("");
  const prev = a.sektionen[idx-1], next = a.sektionen[idx+1];
  let h = `<div class="crumbs"><a onclick="goHome()">Start</a> › ${esc(a.titel)} <button class="btn nav-mini" onclick="toggleNav()" title="Kapitelmenü ein-/ausblenden">☰ Kapitel</button></div>
  ${idx===0?`<div class="adv-head"><h1>${esc(a.titel)}</h1><span class="meta">${esc(a.sub||"")} · ${osHeadPages(a)}</span></div>`:""}
  <div class="adv-grid ${ST.nav===false?"nav-off":""}" id="advGrid">
   <nav class="nav">${navH}</nav>
   <div class="content"><div class="navbar"><button class="nav-open" onclick="openNavDrawer()"><small>Kapitel</small>${esc(s.titel)}</button></div>
   <div class="chsec"><div class="sec-title"><h2>${esc(s.titel)}</h2>${osSecPage(a,s.id)}${s.gruppe?`<span class="grp">${esc(s.gruppe)}</span>`:""}</div>
   ${idx===0?ovBox(a):""}
   ${(s.bloecke||[]).map((b,i)=>renderBlock(a,s,b,i)).join("")}
   <details class="mini-notes" ${ST.notes[a.id+":"+s.id]?"open":""}><summary>✎ Notizen</summary><textarea oninput="setNote('${a.id}:${s.id}',this.value)" placeholder="Eigene Notizen …">${esc(ST.notes[a.id+":"+s.id]||"")}</textarea></details>
   <nav class="pager">${prev?`<a class="pg-prev" href="#/adv/${a.id}/${prev.id}"><span class="pg-arrow">←</span><span class="pg-txt"><small>Zurück</small><b>${esc(prev.titel)}</b></span></a>`:""}${next?`<a class="pg-next" href="#/adv/${a.id}/${next.id}"><span class="pg-arrow">→</span><span class="pg-txt"><small>Weiter</small><b>${esc(next.titel)}</b></span></a>`:""}</nav>
   </div></div></div>`;
  $("app").innerHTML = h;
  { const rl = a.sektionen.map((x,i)=>`<button class="${x.id===s.id?"on":""}" title="${esc(x.titel)}" aria-label="${esc(x.titel)}" onclick="location.hash='#/adv/${a.id}/${x.id}'">${i+1}</button>`).join("");
    $("app").insertAdjacentHTML("afterbegin", `<div class="m-rail"><button class="rail-more" onclick="openNavDrawer()" aria-label="Kapitelliste öffnen">»</button>${rl}</div>`); }
  if(idx===0) ovDraw(a);
}
function setNote(k,v){ ST.notes[k] = v; saveState(); }
function openNavDrawer(){ document.body.classList.add("nav-drawer-open"); const nv=document.querySelector(".nav"); if(nv && !nv.querySelector(".nav-close")){ const x=document.createElement("button"); x.className="nav-close"; x.setAttribute("aria-label","Liste einklappen"); x.textContent="«"; x.onclick=closeNavDrawer; nv.prepend(x); } if(!document.getElementById("navBackdrop")){ const b=document.createElement("div"); b.id="navBackdrop"; b.onclick=closeNavDrawer; document.body.appendChild(b); } }
function closeNavDrawer(){ document.body.classList.remove("nav-drawer-open"); }
window.addEventListener("hashchange",closeNavDrawer);
function toggleNav(){ ST.nav = ST.nav===false; saveState(); const g = $("advGrid"); if(g) g.classList.toggle("nav-off", ST.nav===false); }

function renderBlock(a,s,b,i){
  const k = bkey(a,s,i);
  switch(b.t){
    case "p": return `<p class="blk blk-p">${fmt(b.x)}</p>`;
    case "h": return `<div class="blk-h">${esc(b.x)}</div>`;
    case "liste": return `<ul class="blk-list">${(b.items||[]).map(x=>`<li>${fmt(x)}</li>`).join("")}</ul>`;
    case "hinweis": return `<div class="blk blk-note">${b.titel?`<b class="tt">${esc(b.titel)}</b>`:""}${fmt(b.x)}</div>`;
    case "vorlesen_ref": case "vorlesen": if(b.v) return `<div class="blk blk-read"><div class="rd-h"><span>Vorlesen (frei formuliert)</span><button class="pgb" onclick="openBook('${a.buch}',${parseInt(b.seite)||1})" title="Originalseite im Buch ansehen">Buch S. ${esc(b.seite||"?")} ansehen</button></div><p>${fmt(b.v)}</p></div>`; return `<button class="blk blk-ref" onclick="openBook('${a.buch}',${parseInt(b.seite)||1})" title="Originalseite im Buch ansehen"><span class="bk">Vorlesetext · Buch S. ${esc(b.seite||"?")}<br><u>Seite ansehen</u></span><span>${fmt(b.x||"")}</span></button>`;
    case "tabelle": return `<div class="blk">${b.titel?`<div class="tbl-cap">${esc(b.titel)}</div>`:""}<div class="tbl-wrap"><table>${b.kopf?`<tr>${b.kopf.map(x=>`<th>${fmt(x)}</th>`).join("")}</tr>`:""}${(b.zeilen||[]).map(r=>`<tr>${r.map(x=>`<td>${fmt(x)}</td>`).join("")}</tr>`).join("")}</table></div></div>`;
    case "szenen": return `<ul class="blk-list">${(b.items||[]).map(x=>`<li><b>${esc(x.n)}</b> – ${fmt(x.x||"")}</li>`).join("")}</ul>`;
    case "uhr": { const n = b.segs||4, cur = ST.clk[k]||0;
      return `<div class="blk clock"><div class="cl-t"><b>${esc(b.name)}</b><small>${fmt(b.x||"")}</small>${(b.stufen||[]).length?`<ul class="blk-list">${b.stufen.map(x=>`<li>${fmt(x)}</li>`).join("")}</ul>`:""}</div><div class="segs" id="clk_${esc(k)}">${Array.from({length:n},(_,j)=>`<button class="seg ${j<cur?"on":""}" onclick="setClock('${esc(k)}',${j},${n})" aria-label="Segment ${j+1}"></button>`).join("")}</div></div>`; }
    case "challenge": return renderChallenge(k,b);
    default: return b.x?`<p class="blk blk-p">${fmt(b.x)}</p>`:"";
  }
}
function setClock(k,j,n){ const cur = ST.clk[k]||0; ST.clk[k] = (cur===j+1) ? j : j+1; saveState();
  const el = document.getElementById("clk_"+k); if(el) [...el.children].forEach((c,x)=>c.classList.toggle("on", x<ST.clk[k])); }
/* Übersichtskarte am Abenteueranfang (aus lokalem PDF) */
function ovBox(a){ return (typeof OS_OV!=="undefined" && OS_OV[a.id]) ? `<div class="ov" id="ovBox"><div class="ov-h">Übersichtskarte · Buch S. ${OS_OV[a.id].page} – Ort antippen</div><div class="ov-wrap" id="ovWrap"></div></div>` : ""; }
async function ovDraw(a){
  const o = typeof OS_OV!=="undefined" && OS_OV[a.id], wrap = $("ovWrap"); if(!o || !wrap) return;
  let doc = null; try{ doc = await getDoc(o.book); }catch(e){}
  if(!doc){ wrap.innerHTML = `<div class="ov-none">Die Karte stammt aus dem Buch und wird aus deinem PDF gezeigt. <button class="btn" onclick="openSettings()">PDF laden</button></div>`; return; }
  const page = await doc.getPage(o.page), w = Math.min(760, wrap.clientWidth || 700), base = page.getViewport({scale:1}), dpr = Math.min(2, window.devicePixelRatio||1);
  const vp = page.getViewport({scale:(w/base.width)*dpr}), cv = document.createElement("canvas");
  cv.width = vp.width; cv.height = vp.height; cv.style.width = (vp.width/dpr)+"px"; cv.style.height = (vp.height/dpr)+"px";
  await page.render({canvasContext: cv.getContext("2d"), viewport: vp}).promise;
  if(!$("ovWrap")) return;
  wrap.innerHTML = ""; const box = document.createElement("div"); box.className = "ov-img"; box.style.width = (vp.width/dpr)+"px"; box.appendChild(cv);
  o.hot.forEach(h=>{ const b = document.createElement("button"); b.className = "ov-hot"; b.style.cssText = `left:${h[0]}%;top:${h[1]}%;width:${h[2]}%;height:${h[3]}%`; b.setAttribute("aria-label","Zum Abschnitt springen"); b.onclick = ()=>{ location.hash = `#/adv/${a.id}/${h[4]}`; }; box.appendChild(b); });
  wrap.appendChild(box);
}
/* Seitenlinks (Daten: data/pages.js) */
function pgBtn(buch,page,txt){ return `<button class="pgb" onclick="event.stopPropagation();openBook('${buch}',${page})" title="Originalseite im Buch ansehen">${txt||"S. "+page}</button>`; }
function osChPage(name){
  if(typeof OS_PAGES==="undefined") return "";
  for(const id in OS_PAGES){ const pg = OS_PAGES[id].ch[name]; if(pg){ const e = OS_ADV_LIST.find(x=>x.id===id); if(e) return pgBtn(e.buch,pg); } }
  return "";
}
function osSecPage(a,sid){ const pg = typeof OS_PAGES!=="undefined" && OS_PAGES[a.id] && OS_PAGES[a.id].sec[sid]; return pg ? pgBtn(a.buch,pg) : ""; }
function osHeadPages(a){ const m = (a.seiten||"").match(/\d+/g)||[]; return m.length ? pgBtn(a.buch,m[0],esc(a.buch)+" "+esc(a.seiten)+" 📖") : esc(a.buch)+" "+esc(a.seiten); }

function renderChallenge(k,b,open){
  const tagCls = t => /^\s*[–-]\s/.test(t) ? "w" : (/^Status:/i.test(t) ? "s" : "");
  const tagTxt = t => t.replace(/^\s*[–-]\s/,"");
  let h = `<div class="blk ch coll${open?" open":""}"><div class="ch-head" onclick="this.parentNode.classList.toggle('open')"><span class="chev">▸</span><b>${esc(b.name)}</b><span class="typ">${esc(b.typ||"")}</span><span class="stars">${esc(b.rating||"")}</span>${osChPage(b.name)}</div><div class="ch-body">`;
  if(b.beschr) h += `<div class="ch-desc">${fmt(b.beschr)}</div>`;
  (b.limits||[]).forEach((l,li)=>{
    const lk = k+":"+li, n = +l.v||0, arr = ST.lim[lk]||[];
    h += `<div class="lim"><div class="lim-l">${esc(l.n)}</div><div class="lim-c">${n?`<div class="pips" id="p_${esc(lk)}">${Array.from({length:n},(_,j)=>`<button class="pip ${arr[j]?"f":""}" onclick="togPip('${esc(lk)}',${j})" aria-label="Feld ${j+1}"></button>`).join("")}</div><span class="lim-n" id="n_${esc(lk)}">${arr.lastIndexOf(true)+1}/${n}</span><button class="lim-r" onclick="resetLim('${esc(lk)}')" title="Zurücksetzen">↺</button>`:`<span class="lim-n">–</span>`}</div></div>`;
  });
  if((b.tags||[]).length) h += `<div class="chips">${b.tags.map(t=>`<span class="chip ${tagCls(t)}">${esc(tagTxt(t))}</span>`).join("")}</div>`;
  if((b.specials||[]).length) h += `<div class="ch-sub">Specials</div><ul>${b.specials.map(x=>`<li><b>${esc(x.n)}</b>${x.x?" – "+fmt(x.x):""}</li>`).join("")}</ul>`;
  if((b.threats||[]).length) h += `<div class="ch-sub">Threats &amp; Consequences</div><ul>${b.threats.map(x=>`<li><b>${esc(x.n)}</b>${x.x?" – "+fmt(x.x):""}</li>`).join("")}</ul>`;
  (b.extra||[]).forEach(e=>{ h += `<div class="ch-sub">${esc(e.k)}</div><div class="ch-desc">${fmt(e.x)}</div>`; });
  return h + "</div></div>";
}
function togPip(lk,j){ const arr = ST.lim[lk]||(ST.lim[lk]=[]); arr[j] = !arr[j]; saveState(); syncLim(lk); }
function resetLim(lk){ ST.lim[lk] = []; saveState(); syncLim(lk); }
function syncLim(lk){ const arr = ST.lim[lk]||[], el = document.getElementById("p_"+lk); if(!el) return;
  [...el.children].forEach((c,x)=>c.classList.toggle("f", !!arr[x])); const n = document.getElementById("n_"+lk); if(n) n.textContent = (arr.lastIndexOf(true)+1)+"/"+el.children.length; }

/* ---------- Suche ---------- */
function blockText(b){ return [b.x,b.titel,b.name,b.typ,b.beschr,(b.items||[]).map(i=>typeof i==="string"?i:(i.n+" "+(i.x||""))).join(" "),(b.tags||[]).join(" "),(b.specials||[]).map(x=>x.n+" "+(x.x||"")).join(" "),(b.threats||[]).map(x=>x.n+" "+(x.x||"")).join(" "),(b.limits||[]).map(l=>l.n).join(" "),(b.zeilen||[]).map(r=>r.join(" ")).join(" "),(b.extra||[]).map(e=>e.k+" "+e.x).join(" ")].filter(Boolean).join(" "); }
function openSearch(){ $("searchModal").classList.add("show"); setTimeout(()=>$("searchInput").focus(),50); }
async function runSearch(q){
  q = q.trim().toLowerCase(); const out = $("searchResults"), cnt = $("searchCount");
  if(q.length<2){ out.innerHTML = ""; cnt.textContent = ""; return; }
  for(const a of OS_ADV_LIST) if(hasData(a.id)) await loadAdv(a.id);
  const res = [];
  for(const a of OS_ADV) for(const s of a.sektionen){
    const txt = (s.titel+" "+(s.bloecke||[]).map(blockText).join(" "));
    const i = txt.toLowerCase().indexOf(q); if(i<0) continue;
    const a0 = Math.max(0,i-50), snip = txt.slice(a0,i+q.length+80);
    res.push({a,s,snip,i:i-a0});
  }
  cnt.textContent = res.length+" Treffer";
  out.innerHTML = res.slice(0,60).map(r=>`<button class="sr" onclick="closeModal('searchModal');location.hash='#/adv/${r.a.id}/${r.s.id}'"><small>${esc(r.a.titel)} · ${esc(r.s.titel)}</small>${esc(r.snip.slice(0,r.i))}<mark>${esc(r.snip.slice(r.i,r.i+q.length))}</mark>${esc(r.snip.slice(r.i+q.length))}</button>`).join("");
}

/* ---------- Modale, Einstellungen, Menü ---------- */
function closeModal(id){ $(id).classList.remove("show"); }
function openSettings(){ $("settingsModal").classList.add("show"); if(window.refreshBookStatus) refreshBookStatus(); }
function exportState(){ const a = document.createElement("a"); a.href = URL.createObjectURL(new Blob([JSON.stringify(ST)],{type:"application/json"})); a.download = "otherscape-spielstand.json"; a.click(); }
function importState(inp){ const f = inp.files[0]; if(!f) return; const r = new FileReader(); r.onload = ()=>{ try{ ST = Object.assign(loadState(), JSON.parse(r.result)); saveState(); closeModal("settingsModal"); route(); }catch(e){ alert("Datei konnte nicht gelesen werden."); } }; r.readAsText(f); }
function resetState(){ if(!confirm("Alle Limit-Felder und Uhren zurücksetzen?")) return; ST = { lim:{}, clk:{}, notes:{}, done:{}, last:null, nav:true }; saveState(); closeModal("settingsModal"); route(); }
function closeMobileMenu(){ const m = $("mobileMenu"); if(!m) return; m.classList.remove("open"); setTimeout(()=>m.remove(),200); document.body.classList.remove("menu-open"); }
function openMobileMenu(){
  if($("mobileMenu")) return;
  const item = (ic,l,fn)=>`<button class="mm-item" onclick="closeMobileMenu(); ${fn}"><span class="mm-ic">${ic}</span><span>${l}</span></button>`;
  const m = document.createElement("div"); m.id = "mobileMenu"; m.className = "mobile-menu";
  m.innerHTML = `<div class="mm-backdrop" onclick="closeMobileMenu()"></div><nav class="mm-panel" aria-label="Menü"><div class="mm-head"><span>Menü</span><button class="mm-close" onclick="closeMobileMenu()" aria-label="Schließen">✕</button></div><div class="mm-list">${item("🏠","Start","goHome()")}${item("📁","Aktuelles Abenteuer","goLastAdv()")}${item("🏛","Fraktionen","location.hash='#/fraktionen'")}${item("👹","Gegner-Browser","location.hash='#/gegner'")}${item("🎲","Regelblatt &amp; Würfler","openRules()")}${item("🔎","Suche","openSearch()")}</div><div class="mm-foot">${item("⚙","Einstellungen","openSettings()")}</div></nav>`;
  document.body.appendChild(m); document.body.classList.add("menu-open"); requestAnimationFrame(()=>m.classList.add("open"));
}
document.addEventListener("keydown", e=>{ if(e.key==="Escape"){ closeMobileMenu(); closeModal("searchModal"); closeModal("settingsModal"); } });

/* ---------- Start ---------- */
if("serviceWorker" in navigator) navigator.serviceWorker.register("../sw.js").catch(()=>{});
try{ localStorage.setItem("gm_tool_mode_v1","otherscape"); }catch(e){}
route();

/* ---------- Gegner-Browser: alle Challenge-Blöcke der Einträge mit kat "gegner" ---------- */
var GEG = null;
async function buildGegner(){
  if(GEG) return GEG; const items = [];
  for(const e of OS_ADV_LIST.filter(x=>x.kat==="gegner")){ if(!hasData(e.id)) continue; const a = await loadAdv(e.id); if(!a) continue;
    for(const s of a.sektionen) (s.bloecke||[]).forEach((b,i)=>{ if(b.t==="challenge") items.push({a,s,i,b}); }); }
  return GEG = items;
}
async function renderGegner(){
  $("app").innerHTML = '<div class="missing">Lade Gegner …</div>';
  const items = await buildGegner();
  const tp = x => (x.b.typ||"Challenge").split(" (")[0].trim(); const types = [...new Set(items.map(tp))].sort();
  let h = `<div class="crumbs"><a onclick="goHome()">Start</a> › Gegner-Browser</div><div class="adv-head"><h1>Gegner-Browser</h1><span class="meta">${items.length} Einträge · Tokyo S. 94–147</span></div>
  <div class="geg-bar"><input class="search-input" id="gegQ" placeholder="Filtern nach Name oder Tag …" oninput="gegFilter()" autocomplete="off"><select id="gegT" onchange="gegFilter()"><option value="">Alle Typen</option>${types.map(t=>`<option>${esc(t)}</option>`).join("")}</select></div>
  <div class="geg-list" id="gegList">${items.map((x,n)=>`<details class="geg" data-n="${n}" data-q="${esc((x.b.name+" "+(x.b.typ||"")+" "+(x.b.tags||[]).join(" ")+" "+x.s.titel).toLowerCase())}" data-t="${esc(tp(x))}" ontoggle="gegOpen(this)"><summary><b>${esc(x.b.name)}</b><span class="stars">${esc(x.b.rating||"")}</span><small>${esc(x.b.typ||"Challenge")} · ${esc(x.s.titel)}</small></summary><div class="geg-body"></div></details>`).join("")}</div>`;
  $("app").innerHTML = h;
}
function gegOpen(d){ if(!d.open) return; const body = d.querySelector(".geg-body"); if(body.dataset.done) return; const x = GEG[+d.dataset.n]; body.innerHTML = renderChallenge(x.a.id+":"+x.s.id+":"+x.i, x.b, true) + `<p class="hint"><a href="#/adv/${x.a.id}/${x.s.id}">Im Abschnitt „${esc(x.s.titel)}“ öffnen</a></p>`; body.dataset.done = 1; }
function gegFilter(){ const q = $("gegQ").value.trim().toLowerCase(), t = $("gegT").value; document.querySelectorAll("#gegList .geg").forEach(d=>{ d.style.display = (!q || d.dataset.q.includes(q)) && (!t || d.dataset.t===t) ? "" : "none"; }); }

/* ---------- Fraktionen (Tokyo): Übersicht über Kopfzeilen-Knopf ---------- */
function renderFraktionen(){
  const list = OS_ADV_LIST.filter(a=>a.kat==="fraktion");
  $("app").innerHTML = `<div class="crumbs"><a onclick="goHome()">Start</a> › Fraktionen</div><div class="adv-head"><h1>Fraktionen</h1><span class="meta">${list.length} Fraktionen · Tokyo S. 151–237</span></div><div class="cards">${list.map(a=>{ const ok = hasData(a.id); return `<button class="card ${ok?"":"off"}" ${ok?`onclick="location.hash='#/adv/${a.id}'"`:"disabled"}><span class="nr">${esc(a.buch)} · ${esc(a.seiten)}</span><b>${esc(a.titel)}</b><small>${esc(a.sub)}</small></button>`; }).join("")}</div>`;
}
