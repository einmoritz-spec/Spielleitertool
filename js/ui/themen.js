/* Legend in the Mist – Themenbücher: Übersicht als Bücherregal + Seite je Themenbuch.
   Daten: js/data/tb/index.js (TB_INDEX, immer geladen) und js/data/tb/<key>.js (je Buch, bei Bedarf nachgeladen),
   erzeugt von tools/lm/build-tb.js aus den deutschen Buchtexten. Ersetzt das frühere Fenster „Themenbuch-Fragen“. */
var TB = { data:{}, ex:null, loading:{}, filter:"alle", kitSrc:"alle" };
TB.add = function(o){ TB.data[o.key] = o; };
TB.extra = function(x){ TB.ex = x; };
TB.load = function(file, cb){
  if(TB.loading[file] === true) return setTimeout(cb, 0);
  if(TB.loading[file]){ TB.loading[file].push(cb); return; }
  TB.loading[file] = [cb];
  var s = document.createElement("script"); s.src = "js/data/tb/" + file + ".js";
  s.onload = s.onerror = function(){ var l = TB.loading[file]; TB.loading[file] = true; l.forEach(function(f){ f(); }); };
  document.head.appendChild(s);
};
var TB_MIGHT = {
  origin:   { t:"Origin",        ic:["leaf"] },
  adventure:{ t:"Adventure",     ic:["swords"] },
  greatness:{ t:"Greatness",     ic:["crown"] },
  variable: { t:"Variable Might",ic:["leaf","swords","crown"] },
  fellowship:{ t:"Fellowship",   ic:[] }
};
var TB_SRC = { core:"Core Book", dales:"The Dales", uncanny:"Uncanny Heroes" };
var TB_STRIP_FS = "assets/galerie/litm-core/full/lmHeld_pdf035_B140_Themebooks_1.webp";
var TB_LADEN_IMG = "assets/galerie/litm-core/full/lmHeld_pdf034_B132_Themebooks_1.webp";
function tbStrip(k){ return k === "fellowship" ? TB_STRIP_FS : "assets/tb/" + k + ".webp"; }
function tbIcons(m, cls){ return (TB_MIGHT[m] || {ic:[]}).ic.map(function(i){ return '<img class="' + (cls || "tbi") + '" src="assets/icons/themebook-' + i + '.png" alt="">'; }).join(""); }
function tbEyebrow(m){ return m === "variable" ? "Variable-Might-Themenbuch" : m === "fellowship" ? "Fellowship-Themenbuch" : TB_MIGHT[m].t + "-Themenbuch"; }
function tbPg(book, p, pe){ return p ? '<a class="tb-pg" onclick="event.stopPropagation();BV.open(\'' + book + '\',' + p + ')">S. ' + p + (pe && pe !== p ? "–" + pe : "") + '</a>' : ""; }
function tbSub(s){ return esc(String(s || "").replace(/\s*\+\s*/g, " · ")); }

function goThemen(key){
  if(typeof guardEditLeave === "function" && !guardEditLeave()) return;
  if(typeof closeMobileMenu === "function") closeMobileMenu();
  state.view = "themen"; state.tbKey = key || null;
  render(); scrollToTop();
}
/* frühere Einstiege (Taste T, Kopfzeile, Suche) führen jetzt hierher */
function openThemebook(){ goThemen(); }
function openThemebookAt(bookId, catKey){ goThemen(catKey); }

function renderThemen(){
  var k = state.tbKey;
  if(!k) return tbOverview();
  var host = renderTopbar() + '<div class="lm-wrap tb-wrap"><div class="lm-shell"><nav class="lm-toc tb-toc">' + tbTree(k) + '</nav><div class="lm-main"><div class="lm-host tb-host" id="tbHost"><p class="lm-load">Lade …</p></div></div></div></div>';
  app.innerHTML = host;
  if(TB_HERO[k]){
    var h = TB_HERO[k], pend = h.lm.length + TB_INDEX.length;
    var done = function(){ if(--pend > 0) return; if(state.view !== "themen" || state.tbKey !== k) return; var el = document.getElementById("tbHost"); if(el) el.innerHTML = tbHero(k); };
    h.lm.forEach(function(id){ lmLoad(id, done); });
    TB_INDEX.forEach(function(b){ TB.load(b.key, done); });
    return;
  }
  var file = (k === "laden") ? "extra" : k;
  TB.load(file, function(){
    if(state.view !== "themen" || state.tbKey !== k) return;
    var el = document.getElementById("tbHost"); if(!el) return;
    if(k === "laden"){ el.innerHTML = tbLaden(); return; }
    if(k === "fellowship"){ TB.load("extra", function(){ if(state.tbKey === k) el.innerHTML = tbBook(TB.data[k]); }); return; }
    el.innerHTML = tbBook(TB.data[k]);
  });
}

/* ---------- Baum links ---------- */
function tbTree(cur){
  var curM = cur === "laden" ? "laden" : (TB_INDEX.filter(function(b){ return b.key === cur; })[0] || {}).might;
  var h = '<div class="lm-tree"><button class="lm-cat" onclick="goThemen()">Alle Themenbücher</button>';
  ["origin","adventure","greatness","variable"].forEach(function(m){
    var on = m === curM, list = TB_INDEX.filter(function(b){ return b.might === m; });
    h += '<button class="lm-cat tb-cat' + (on ? " on" : "") + '" onclick="goThemen(\'' + list[0].key + '\')">' + tbIcons(m) + TB_MIGHT[m].t + '</button>';
    if(on) h += '<div class="lm-sub">' + list.map(function(b){ return '<a class="' + (b.key === cur ? "on" : "") + '" onclick="goThemen(\'' + b.key + '\')">' + esc(b.de) + '</a>'; }).join("") + '</div>';
  });
  h += '<button class="lm-cat tb-cat' + (cur === "fellowship" ? " on" : "") + '" onclick="goThemen(\'fellowship\')">Fellowship</button>';
  h += '<button class="lm-cat tb-cat' + (cur === "laden" ? " on" : "") + '" onclick="goThemen(\'laden\')">Gemischtwarenladen</button>';
  ["heroes-dalish","heroes-uncanny"].forEach(function(hk){
    h += '<button class="lm-cat tb-cat' + (cur === hk ? " on" : "") + '" onclick="goThemen(\'' + hk + '\')">' + TB_HERO[hk].t + '</button>';
    if(cur === hk) h += '<div class="lm-sub"><a onclick="tbHeroScroll(\'hx-make\')">Erschaffung</a><a onclick="tbHeroScroll(\'hx-tropes\')">Tropes</a><a onclick="tbHeroScroll(\'hx-kits\')">Theme Kits</a>' + (hk === "heroes-uncanny" ? '<a onclick="tbHeroScroll(\'hx-comp\')">Companions</a><a onclick="tbHeroScroll(\'hx-rew\')">Belohnungen</a>' : '') + '</div>';
  });
  h += '</div>';
  // Handy: wischbare Zeile
  var all = TB_INDEX.map(function(b){ return '<button class="lm-cat' + (b.key === cur ? " on" : "") + '" onclick="goThemen(\'' + b.key + '\')">' + esc(b.de) + '</button>'; }).join("");
  h += '<div class="lm-flatnav"><div class="lm-orow"><button class="lm-cat" onclick="goThemen()">Alle</button>' + all + '<button class="lm-cat' + (cur === "laden" ? " on" : "") + '" onclick="goThemen(\'laden\')">Gemischtwarenladen</button><button class="lm-cat' + (cur === "heroes-dalish" ? " on" : "") + '" onclick="goThemen(\'heroes-dalish\')">Dalish Heroes</button><button class="lm-cat' + (cur === "heroes-uncanny" ? " on" : "") + '" onclick="goThemen(\'heroes-uncanny\')">Uncanny Heroes</button></div></div>';
  return h;
}

/* ---------- Übersicht: Bücherregal ---------- */
function tbOverview(){
  var order = ["origin","adventure","greatness","variable"], prev = null;
  var spines = order.map(function(m){ return TB_INDEX.filter(function(b){ return b.might === m; }); }).reduce(function(a, b){ return a.concat(b); }, []);
  var sp = spines.map(function(b, i){
    var first = b.might !== prev; prev = b.might;
    var n = b.n, kits = n.kits;
    return '<button class="tbx-s' + (first ? " first" : "") + '" data-m="' + b.might + '" style="--i:' + i + '" onclick="tbOpen(this,\'' + b.key + '\')" aria-label="' + esc(b.de) + '">' +
      (first ? '<span class="tbx-gl">' + tbIcons(b.might) + TB_MIGHT[b.might].t + '</span>' : '') +
      '<span class="tbx-img" style="background-image:url(' + tbStrip(b.key) + ')"></span>' +
      '<b class="tbx-n">' + esc(b.de) + '</b>' +
      '<span class="tbx-card"><span class="tbx-ey">' + tbIcons(b.might) + tbEyebrow(b.might) + '</span>' +
      '<span class="tbx-h">' + esc(b.de) + '</span><span class="tbx-en">' + esc(b.en) + '</span>' +
      '<span class="tbx-sub">' + tbSub(b.sub) + '</span>' +
      '<span class="tbx-q"><i>A</i>' + esc(b.a) + '</span>' +
      '<span class="tbx-c">' + n.power + ' Power-Fragen · ' + n.weak + ' Weakness-Fragen · ' + n.imps + ' Verbesserungen · ' + kits + ' Theme Kits</span>' +
      '<span class="tbx-m"><span class="pg-link" data-book="core" data-page="' + b.p + '" title="Originalseite im Buch ansehen">S. ' + b.p + '–' + b.pe + '</span><span class="tbx-go">Aufschlagen</span></span></span></button>';
  }).join("");
  var chips = [["alle","Alle"],["origin","Origin"],["adventure","Adventure"],["greatness","Greatness"],["variable","Variable Might"]].map(function(c){
    return '<button class="tbx-chip' + (TB.filter === c[0] ? " on" : "") + '" onclick="tbFilter(\'' + c[0] + '\')">' + c[1] + '</button>';
  }).join("");
  var fs = TB_INDEX.filter(function(b){ return b.key === "fellowship"; })[0];
  var more = [
    [TB_STRIP_FS, "Fellowship", "Gruppen-Themenbuch · S. 138–141", "goThemen('fellowship')", "top"],
    [TB_LADEN_IMG, "Gemischtwarenladen", "Ausrüstung für Backpack-Tags · S. 132–137", "goThemen('laden')", "center"],
    ["assets/litm/home-dales.webp", "Dalish Heroes", "Theme Kits &amp; Tropes · The Dales S. 108–125", "goThemen('heroes-dalish')", "center"],
    ["assets/galerie/hearts-of-ravensdale/full/hr_pdf071_B204_Winds-of-Change-Factions_1.webp", "Uncanny Heroes", "Theme Kits &amp; Tropes · The Dales S. 212–231", "goThemen('heroes-uncanny')", "center"]
  ].map(function(c){ return '<button class="tbx-mc" onclick="' + c[3] + '"><span class="tbx-mi" style="background-image:url(' + c[0] + ');background-position:' + c[4] + '"></span><span class="tbx-mt"><b>' + c[1] + '</b></span></button>'; }).join("");
  app.innerHTML = renderTopbar() + '<div class="tbx"><div class="tbx-hd"><h1>Themenbücher</h1><div class="tbx-chips">' + chips + '</div></div>' +
    '<div class="tbx-shelf" data-f="' + TB.filter + '">' + sp + '</div><div class="tbx-more">' + more + '</div></div>';
}
function tbFilter(f){ TB.filter = f; var s = document.querySelector(".tbx-shelf"); if(s) s.dataset.f = f; document.querySelectorAll(".tbx-chip").forEach(function(c, i){ c.classList.toggle("on", ["alle","origin","adventure","greatness","variable"][i] === f); }); }
function tbOpen(el, key){
  if(el.classList.contains("go")) return; el.classList.add("go");
  var rm = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
  setTimeout(function(){ goThemen(key); }, rm ? 0 : 260);
}

/* ---------- Seite eines Themenbuchs ---------- */
function tbQ(l, q){ return '<div class="tb-q"><i>' + esc(l) + '</i><span>' + lmMd(q) + '</span></div>'; }
function tbBook(o){
  if(!o) return '<p class="lm-load">Dieses Themenbuch konnte nicht geladen werden.</p>';
  var list = TB_INDEX, i = list.map(function(b){ return b.key; }).indexOf(o.key), prev = list[i - 1], next = list[i + 1];
  var h = '<div class="tbp" data-m="' + o.might + '"><div class="tbp-strip" style="background-image:url(' + tbStrip(o.key) + ')" role="img" aria-label=""></div><div class="tbp-c">';
  h += '<header class="tbp-head"><span class="tbp-ics">' + tbIcons(o.might, "tbp-ic") + '</span><div><div class="tbp-ey">' + tbEyebrow(o.might) + '</div><h1>' + esc(o.de) + (o.de !== o.en ? '<span class="tbp-en">' + esc(o.en) + '</span>' : '') + '</h1></div>' + tbPg("core", o.p, o.pe) + '</header>';
  if(o.sub) h += '<p class="tbp-sub">' + tbSub(o.sub) + '</p>';
  h += '<div class="tbp-two"><div class="tbp-intro">' + o.intro.map(function(p){ return '<p>' + lmMd(p) + '</p>'; }).join("") + '</div>' +
       (o.concept.length ? '<section class="tbp-box"><h3>Fragen zum Konzept</h3><ul>' + o.concept.map(function(c){ return '<li>' + lmMd(c) + '</li>'; }).join("") + '</ul></section>' : '') + '</div>';
  h += '<h2 class="tbp-h pw"><span>Power-Tag</span>-Fragen</h2><div class="tb-qs">' + o.power.map(function(q){ return tbQ(q[0], q[1]); }).join("") + '</div>';
  h += '<h2 class="tbp-h wk"><span>Weakness-Tag</span>-Fragen</h2><div class="tb-qs wk">' + o.weak.map(function(q){ return tbQ(q[0], q[1]); }).join("") + '</div>';
  h += '<h2 class="tbp-h">Quest-Ideen</h2><div class="tb-quests">' + o.quests.map(function(q){ return '<div class="tb-quest">' + lmMd(q) + '</div>'; }).join("") + '</div>';
  h += '<h2 class="tbp-h">Besondere Verbesserungen</h2><div class="tb-imps">' + o.imps.map(function(v){ return '<section class="tb-imp"><h3>' + esc(v.de || v.en) + (v.de ? '<small>' + esc(v.en) + '</small>' : '') + '</h3><p>' + lmMd(v.t) + '</p></section>'; }).join("") + '</div>';
  h += tbKits(o);
  if(o.tropes.length) h += tbTropes(o);
  if(o.key === "fellowship" && TB.ex) h += tbFellowshipChapter();
  h += '<nav class="lm-pn">' + (prev ? '<button onclick="goThemen(\'' + prev.key + '\')"><small>Zurück</small>' + esc(prev.de) + '</button>' : '<span></span>') + (next ? '<button class="r" onclick="goThemen(\'' + next.key + '\')"><small>Weiter</small>' + esc(next.de) + '</button>' : '<span></span>') + '</nav>';
  return h + '</div></div>';
}
function tbKits(o){
  var cnt = { core:0, dales:0, uncanny:0 }; o.kits.forEach(function(k){ cnt[k.src]++; });
  var f = (TB.kitSrc !== "alle" && !cnt[TB.kitSrc]) ? "alle" : TB.kitSrc;
  var chips = [["alle","Alle",o.kits.length]].concat(["core","dales","uncanny"].filter(function(s){ return cnt[s]; }).map(function(s){ return [s, TB_SRC[s], cnt[s]]; }));
  var h = '<div class="tbp-kh"><h2 class="tbp-h">Theme Kits</h2>' + (chips.length > 2 ? '<div class="tbx-chips sm">' + chips.map(function(c){ return '<button class="tbx-chip' + (f === c[0] ? " on" : "") + '" onclick="tbKitSrc(\'' + c[0] + '\')">' + c[1] + ' <small>' + c[2] + '</small></button>'; }).join("") + '</div>' : '') + '</div>';
  h += '<div class="tb-kits" data-f="' + f + '">' + o.kits.map(function(k){ return tbKitCard(k, o.might);   }).join("") + '</div>';
  return h;
}
function tbKitCard(k, might, tag){
    var nm = k.de || k.en;
    return '<details class="tb-kit" data-src="' + k.src + '"><summary><b>' + esc(nm) + '</b>' + (k.de ? '<small>' + esc(k.en) + '</small>' : '') + '<span class="tb-src">' + (tag || (k.src === "core" ? "Core" : k.src === "dales" ? "Dales" : "Uncanny")) + '</span></summary>' +
      '<div class="tb-card"><header onclick="this.closest(\'details\').open=false">' + tbIcons(might === "fellowship" ? "" : might, "tb-cic") + '<b>' + esc(nm) + '</b>' + (k.de ? '<i>' + esc(k.en) + '</i>' : '') + tbPg(k.book, k.p) + '</header>' +
      (k.desc ? '<div class="tb-cdesc">' + k.desc.split("\n\n").map(function(p){ return '<p>' + lmMd(p) + '</p>'; }).join("") + '</div>' : '') +
      '<div class="tb-cbody"><div><h4 class="pw">Power-Tags</h4><ul class="tb-tags pw">' + k.pw.map(function(t){ return '<li>' + esc(t) + '</li>'; }).join("") + '</ul></div>' +
      '<div><h4 class="wk">Weakness-Tags</h4><ul class="tb-tags wk">' + (k.wk || []).map(function(t){ return '<li>' + esc(t) + '</li>'; }).join("") + '</ul></div></div>' +
      (k.q ? '<p class="tb-cq"><b>Quest</b>' + lmMd(k.q) + '</p>' : '') +
      (k.imp ? '<p class="tb-cimp"><b>' + esc(k.imp.n) + '</b>' + lmMd(k.imp.t) + '</p>' : '') + '</div></details>';

}
function tbKitSrc(s){ TB.kitSrc = s; var g = document.querySelector(".tb-kits"); if(g) g.dataset.f = s; document.querySelectorAll(".tbp-kh .tbx-chip").forEach(function(c){ c.classList.toggle("on", c.getAttribute("onclick").indexOf("'" + s + "'") > 0); }); }
function tbTropes(o){
  var by = {}; o.tropes.forEach(function(t){ (by[t.kit] = by[t.kit] || []).push(t); });
  return '<h2 class="tbp-h">Kommt vor in Tropes</h2><div class="tb-tropes">' + Object.keys(by).sort().map(function(kit){
    return '<div class="tb-trope"><b>' + esc(kit) + '</b><span>' + by[kit].map(function(t){ return '<em title="' + (t.wahl ? "zur Auswahl" : "fest") + '">' + esc(t.t) + (t.wahl ? '*' : '') + '<small> ' + (t.src === "uncanny" ? "Uncanny" : "Dales") + ' S. ' + t.p + '</small></em>'; }).join("") + '</span></div>';
  }).join("") + '</div><p class="tb-note">* zur Auswahl im Trope</p>';
}
function tbFellowshipChapter(){
  var e = TB.ex.fellowship_kapitel; return '<h2 class="tbp-h">Die Fellowship ' + tbPg("core", e.p, e.pe) + '</h2>' + tbSections(e);
}
/* Kapiteltext als Raster aus Karten (je Überschrift eine Karte) */
function tbSections(e){
  var secs = [], cur = { t:"", b:[] };
  e.body.forEach(function(b){ if(typeof b === "string" && b.indexOf("## ") === 0){ secs.push(cur); cur = { t:b.slice(3), b:[] }; } else cur.b.push(b); });
  secs.push(cur);
  var h = '<div class="tb-secs">' + secs.filter(function(s){ return s.t || s.b.length; }).map(function(s){ return '<section class="tb-sec' + (s.t ? '' : ' lead') + '">' + (s.t ? '<h3>' + lmMd(s.t) + '</h3>' : '') + lmBlocks(s.b) + '</section>'; }).join("") + '</div>';
  if(e.aside && e.aside.length) h += '<div class="tb-secs">' + e.aside.map(function(b){ return '<section class="tb-sec">' + lmBlocks([b]) + '</section>'; }).join("") + '</div>';
  return h;
}
function tbLaden(){
  var e = TB.ex.laden;
  return '<div class="tbp tbp-laden"><div class="tbp-c"><figure class="tbp-banner"><img src="' + TB_LADEN_IMG + '" alt=""></figure>' +
    '<header class="tbp-head"><div><div class="tbp-ey">Ausrüstung</div><h1>Gemischtwarenladen<span class="tbp-en">The General Store</span></h1></div>' + tbPg("core", e.p, e.pe) + '</header>' + tbSections(e) + '</div></div>';
}

/* ---------- Dalish Heroes / Uncanny Heroes ---------- */
var TB_HERO = {
  "heroes-dalish":  { t:"Dalish Heroes",  en:"The Dales", p:108, pe:125, src:"dales", img:"assets/litm/home-dales.webp", lm:["dales-b","dales-c"],
             make:["dales-b","Einen Dalish Hero erschaffen"], tropes:[["dales-b","Dalish-Hero-Tropes","###"]], more:"dales-c", companions:null },
  "heroes-uncanny": { t:"Uncanny Heroes", en:"Beyond the Dales", p:212, pe:231, src:"uncanny", img:"assets/galerie/hearts-of-ravensdale/full/hr_pdf071_B204_Winds-of-Change-Factions_1.webp", lm:["jenseits-b"],
             make:["jenseits-b","Einen Uncanny Hero erschaffen"], tropes:[["jenseits-b","Uncanny-Hero-Tropes","##"]], more:null, companions:["jenseits-b","Companions"], rewards:["jenseits-b","Belohnungen"] }
};
function tbChap(id, name){ return (LM.data[id] || []).filter(function(c){ return c.name === name; })[0]; }
function tbHeroTropes(h){
  var list = [];
  h.tropes.forEach(function(t){
    var c = tbChap(t[0], t[1]); if(!c) return;
    var cat = "", cur = null, lvl = t[2];
    c.body.forEach(function(b){
      if(typeof b === "string" && b.indexOf("## ") === 0 && lvl === "###"){ cat = b.slice(3); cur = null; }
      else if(typeof b === "string" && b.indexOf(lvl + " ") === 0){ cur = { cat:cat, name:b.slice(lvl.length + 1), p:0, b:[] }; list.push(cur); }
      else if(cur) cur.b.push(b);
    });
  });
  if(h.more) (LM.data[h.more] || []).forEach(function(c){ if(c.sub && c.sub.indexOf("Tropes") === 0) list.push({ cat:c.sub.replace(/^Tropes\s*[–-]\s*/, ""), name:c.name, p:c.p, b:c.body }); });
  return list;
}
function tbTropeCard(t){
  return '<details class="tb-kit tb-tr"><summary><b>' + esc(t.name) + '</b>' + (t.p ? '<span class="tb-src">S. ' + t.p + '</span>' : '') + '</summary>' +
    '<div class="tb-card"><header onclick="this.closest(\'details\').open=false"><b>' + esc(t.name) + '</b>' + tbPg("wake", t.p) + '</header><div class="tb-cdesc">' + lmBlocks(t.b) + '</div></div></details>';
}
function tbHero(key){
  var h = TB_HERO[key], o = '';
  var mk = tbChap(h.make[0], h.make[1]);
  var tr = tbHeroTropes(h), cats = [];
  tr.forEach(function(t){ if(cats.indexOf(t.cat) < 0) cats.push(t.cat); });
  var books = TB_INDEX.map(function(b){ return TB.data[b.key]; }).filter(Boolean);
  o += '<div class="tbp tbp-laden tbp-hero"><div class="tbp-c"><figure class="tbp-banner"><img src="' + h.img + '" alt=""></figure>' +
       '<header class="tbp-head"><div><div class="tbp-ey">Hero-Erschaffung</div><h1>' + h.t + '<span class="tbp-en">' + h.en + '</span></h1></div>' + tbPg("wake", h.p, h.pe) + '</header>';
  if(mk) o += '<div id="hx-make">' + tbSections(mk) + '</div>';
  o += '<h2 class="tbp-h" id="hx-tropes">Tropes</h2>' + cats.map(function(c){
    return '<h3 class="tbp-h3">' + esc(c) + '</h3><div class="tb-kits">' + tr.filter(function(t){ return t.cat === c; }).map(tbTropeCard).join("") + '</div>';
  }).join("");
  var kn = 0;
  var kitsH;
  if(key === "heroes-uncanny"){
    var all = []; books.forEach(function(b){ b.kits.forEach(function(k){ if(k.src === h.src) all.push([k, b]); }); }); kn = all.length;
    kitsH = '<div class="tb-kits">' + all.map(function(x){ return tbKitCard(x[0], x[1].might, x[1].de); }).join("") + '</div>';
  } else kitsH = books.map(function(b){
    var ks = b.kits.filter(function(k){ return k.src === h.src; }); if(!ks.length) return ""; kn += ks.length;
    return '<h3 class="tbp-h3">' + tbIcons(b.might, "tbi") + esc(b.de) + '<small> ' + ks.length + '</small></h3><div class="tb-kits">' + ks.map(function(k){ return tbKitCard(k, b.might); }).join("") + '</div>';
  }).join("");
  o += '<h2 class="tbp-h" id="hx-kits">Theme Kits <small class="tbp-n">' + kn + '</small></h2>' + kitsH;
  if(h.companions){ var co = tbChap(h.companions[0], h.companions[1]); if(co) o += '<h2 class="tbp-h" id="hx-comp">Companions ' + tbPg("wake", co.p, co.pe) + '</h2>' + tbSections(co); }
  if(h.rewards){ var rw = tbChap(h.rewards[0], h.rewards[1]); if(rw) o += '<h2 class="tbp-h" id="hx-rew">Belohnungen ' + tbPg("wake", rw.p, rw.pe) + '</h2>' + tbSections(rw); }
  return o + '</div></div>';
}
function tbHeroScroll(id){ var el = document.getElementById(id); if(el) el.scrollIntoView({ behavior:"smooth", block:"start" }); }
document.addEventListener("keydown", function(e){
  if(state.view !== "themen" || !state.tbKey || e.ctrlKey || e.metaKey || e.altKey) return;
  var t = (e.target && e.target.tagName) || ""; if(t === "INPUT" || t === "TEXTAREA" || (e.target && e.target.isContentEditable)) return;
  if(document.querySelector(".gloss-modal-backdrop.open") || document.querySelector(".gal")) return;
  if(e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
  var ks = TB_INDEX.map(function(b){ return b.key; }).concat(["laden","heroes-dalish","heroes-uncanny"]), i = ks.indexOf(state.tbKey), n = ks[i + (e.key === "ArrowRight" ? 1 : -1)];
  if(n){ e.preventDefault(); goThemen(n); }
});

/* Buchrücken: nach 1 s Verweilen aufklappen; beim Verlassen kurze Schonfrist, damit nichts ruckelt */
(function(){
  var t = null, c = null, cur = null;
  function zu(){ clearTimeout(t); clearTimeout(c); t = c = null; var o = document.querySelector(".tbx-s.op"); if(o) o.classList.remove("op"); cur = null; }
  document.addEventListener("mouseover", function(e){
    var sh = e.target.closest && e.target.closest(".tbx-shelf");
    var s = sh && e.target.closest(".tbx-s");
    if(!sh){ if(cur && !c) c = setTimeout(zu, 200); return; }
    if(!s){ clearTimeout(t); if(cur && !c) c = setTimeout(zu, 220); return; }   // Lücke zwischen Rücken
    clearTimeout(c); c = null;
    if(s === cur) return;
    var o = document.querySelector(".tbx-s.op"); if(o) o.classList.remove("op");
    clearTimeout(t); cur = s;
    t = setTimeout(function(){ s.classList.add("op"); }, 1000);
  });
  document.addEventListener("mouseleave", zu);
})();
