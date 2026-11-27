/* Mist-Ersteller: Charaktererstellung per Fragen (Mist Engine: Otherscape, City of Mist).
   Aufruf: MistErsteller.start(CFG). CFG kommt aus dem jeweiligen System (Daten-Adapter):
   { sys, titel, logo, zurueck, key,
     typen:{ id:{l, motiv, pre, farbe} }, regeln:{ themen, power, weak },
     konzept:[Leitfragen], books:[{id,name,en,typ,p,intro[],concept,why:{q,opts,flesh},power:[{l,q,tags?}],weak:[{l,q,tags?}],
        motivEx:[[Kontext,Spruch]], motivExplore:[], motivNote, crew:[[Szene,Tag]]}],
     kits:[{book,name,p,power[],weak[],motiv}], vorlagen:[{id,gruppe,name,text,themes:[{book,kit}],ausr:[]}] } */
(function(){
"use strict";
var CFG, S, $app, POP = null, INFO = null;
var esc = function(s){ return String(s == null ? "" : s).replace(/[&<>"]/g, function(c){ return {"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;"}[c]; }); };
var uid = function(){ return "c" + Date.now().toString(36) + Math.floor(Math.random() * 1296).toString(36); };
var LT = "ABCDEFGHIJ".split("");
var pick = function(a){ return a[Math.floor(Math.random() * a.length)]; };
var shuffle = function(a){ a = a.slice(); for(var i = a.length - 1; i > 0; i--){ var j = Math.floor(Math.random() * (i + 1)), t = a[i]; a[i] = a[j]; a[j] = t; } return a; };
var P = function(t){ return String(t || "").split(/\n\n+/).map(function(x){ return "<p>" + esc(x).replace(/\*\*(.+?)\*\*/g, "<b>$1</b>") + "</p>"; }).join(""); };

/* ---------- Daten ---------- */
function book(id){ return CFG.books.filter(function(b){ return b.id === id; })[0]; }
function kitsOf(id){ var b = book(id); return CFG.kits.filter(function(k){ return k.book === id; }); }
function kitBy(id, name){ return CFG.kits.filter(function(k){ return k.book === id && k.name === name; })[0]; }
function blankTheme(){ return {book: "", kit: "", name: "", konzept: "", power: [], weak: [], motiv: "", extra: 0}; }
function blankChar(){ var t = []; for(var i = 0; i < CFG.regeln.themen; i++) t.push(blankTheme()); return {id: uid(), name: "", themes: t, rel: [], ausr: "", notiz: ""}; }
function need(th){ return {p: CFG.regeln.power + (th.extra ? 1 : 0), w: CFG.regeln.weak + (th.extra ? 1 : 0)}; }
function ok(th){ var n = need(th); return !!th.book && th.power.filter(function(x){ return x.a; }).length >= n.p && th.weak.filter(function(x){ return x.a; }).length >= n.w; }
function cur(){ return S.chars.filter(function(c){ return c.id === S.cur; })[0]; }
function leer(c){ return !c.name && !c.spieler && c.themes.every(function(t){ return !t.book && !t.typ; }) && !c.ausr && !c.notiz && (c.rel || []).every(function(r){ return !r.w && !r.t; }) && !(c.load && JSON.stringify(c.load).indexOf('"a":"') > -1 && /"a":"[^"]/.test(JSON.stringify(c.load))); }

/* ---------- Speichern ---------- */
function load(){
  try{ S = JSON.parse(localStorage.getItem(CFG.key) || "null"); }catch(e){}
  if(!S || !S.chars) S = {chars: [], cur: "", tab: CFG.bogen ? "charaktere" : "fragen", slot: 0};
  S.tab = S.tab || "fragen"; S.slot = S.slot || 0;
}
function save(){ try{ localStorage.setItem(CFG.key, JSON.stringify({chars: S.chars, cur: S.cur, tab: S.tab, slot: S.slot, kombi: S.kombi})); }catch(e){} }
function ens(){ if(!S.chars.length){ var c = blankChar(); S.chars.push(c); S.cur = c.id; } if(!cur()) S.cur = S.chars[0].id; }
/* neuer Eintrag: wiederverwendet nur einen leeren aktuellen Eintrag, überschreibt nie etwas */
function neuerEintrag(c, nurWennLeer){
  var a = cur();
  if(nurWennLeer && a && leer(a)){ var id = a.id; Object.keys(a).forEach(function(k){ delete a[k]; }); Object.assign(a, c); a.id = id; return a; }
  S.chars.push(c); S.cur = c.id; return c;
}

/* ---------- Teilen / Datei ---------- */
function pack(c){ var o = JSON.parse(JSON.stringify(c)); delete o.id; return btoa(unescape(encodeURIComponent(JSON.stringify(o)))).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, ""); }
function unpack(t){ t = t.replace(/-/g, "+").replace(/_/g, "/"); while(t.length % 4) t += "="; return JSON.parse(decodeURIComponent(escape(atob(t)))); }
function gueltig(o){ return o && Array.isArray(o.themes) && o.themes.every(function(t){ return t && Array.isArray(t.power) && Array.isArray(t.weak); }); }
function normal(o){ var c = Object.assign(blankChar(), o); c.id = uid(); while(c.themes.length < CFG.regeln.themen) c.themes.push(blankTheme()); c.rel = c.rel || []; return c; }
function toast(t){ var d = document.createElement("div"); d.className = "mi-toast"; d.textContent = t; document.body.appendChild(d); setTimeout(function(){ d.remove(); }, 2200); }
function linkKopieren(c){
  var url = location.href.split("#")[0] + "#c=" + pack(c);
  if(navigator.share){ navigator.share({title: CFG.titel + " – " + (c.name || "Charakter"), url: url}).catch(function(){}); return; }
  if(navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(url).then(function(){ toast("Link kopiert"); }, function(){ prompt("Link zum Teilen:", url); });
  else prompt("Link zum Teilen:", url);
}
function dateiSichern(c){
  var b = new Blob([JSON.stringify({system: CFG.sys, charakter: c}, null, 1)], {type: "application/json"}), a = document.createElement("a");
  a.href = URL.createObjectURL(b); a.download = (CFG.sys + "-" + (c.name || "charakter")).replace(/[^\wäöüÄÖÜß-]+/g, "-") + ".json"; document.body.appendChild(a); a.click(); a.remove();
}
function dateiLaden(f){
  var r = new FileReader(); r.onload = function(){
    try{ var d = JSON.parse(r.result), L = d.charakter ? [d.charakter] : Array.isArray(d) ? d : [d], n = 0;
      L.forEach(function(o){ if(gueltig(o)){ S.chars.push(normal(o)); S.cur = S.chars[S.chars.length - 1].id; n++; } });
      if(!n) throw 0; S.tab = "charaktere"; save(); render(); toast(n + " Charakter geladen");
    }catch(e){ toast("Datei nicht lesbar"); }
  }; r.readAsText(f);
}

/* ---------- Icons ---------- */
var IC = {
  zufall: '<rect x="3.5" y="3.5" width="17" height="17" rx="3"/><circle cx="8.5" cy="8.5" r=".9" fill="currentColor"/><circle cx="15.5" cy="8.5" r=".9" fill="currentColor"/><circle cx="12" cy="12" r=".9" fill="currentColor"/><circle cx="8.5" cy="15.5" r=".9" fill="currentColor"/><circle cx="15.5" cy="15.5" r=".9" fill="currentColor"/>',
  vorlage: '<circle cx="12" cy="8" r="3.5"/><path d="M5 20c0-3.8 3-6 7-6s7 2.2 7 6"/>',
  leeren: '<path d="M4 12a8 8 0 0 1 14-5.3M20 4v5h-5"/><path d="M20 12a8 8 0 0 1-14 5.3M4 20v-5h5"/>',
  teilen: '<circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="6" r="2.5"/><circle cx="18" cy="18" r="2.5"/><path d="M8.2 10.8l7.6-3.6M8.2 13.2l7.6 3.6"/>',
  sichern: '<path d="M12 4v11M7 11l5 5 5-5M5 20h14"/>', laden: '<path d="M12 16V5M7 9l5-5 5 5M5 20h14"/>',
  pdf: '<path d="M5 4h11l3 3v13H5z"/><path d="M8 4v5h7V4M8 20v-6h8v6"/>', loeschen: '<path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13"/>'
};
function ic(act, tip, path){ return '<button class="mi-ib" data-act="' + act + '" data-tip="' + esc(tip) + '" aria-label="' + esc(tip) + '"><svg viewBox="0 0 24 24" width="21" height="21" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' + path + '</svg></button>'; }
function badge(typ){ var t = CFG.typen[typ] || {l: typ}; return '<span class="mi-typ t-' + esc(typ) + '">' + esc(t.l) + '</span>'; }

/* ---------- Auswahl-Popup: Gruppen einklappbar, Suche, „i“ dockt seitlich an ---------- */
function popClose(){ if(POP){ var oc = POP.onClose; POP.el.remove(); POP = null; if(oc) oc(); } infoClose(); }
function lage(el, anchor){ var r = anchor.getBoundingClientRect(), x = Math.min(r.left, window.innerWidth - el.offsetWidth - 12), y = r.bottom + 4; if(y + el.offsetHeight > window.innerHeight - 8 && r.top - el.offsetHeight - 4 > 8) y = r.top - el.offsetHeight - 4; el.style.left = Math.max(8, x) + window.scrollX + "px"; el.style.top = (y + window.scrollY) + "px"; }
function panel(anchor, html, onClose, cls){ popClose(); var el = document.createElement("div"); el.className = "mi-pop mi-panel " + (cls || ""); el.innerHTML = html; document.body.appendChild(el); lage(el, anchor); POP = {el: el, items: [], cb: null, onClose: onClose}; var f = el.querySelector("input,textarea"); if(f) f.focus(); return el; }
function infoClose(){ if(INFO){ INFO.remove(); INFO = null; } }
function popOpen(anchor, items, onPick, opts){
  popClose(); opts = opts || {};
  var gr = []; items.forEach(function(x){ if(gr.indexOf(x.g) < 0) gr.push(x.g); });
  var el = document.createElement("div"); el.className = "mi-pop";
  var h = '<input class="mi-pf" placeholder="Suchen" autocomplete="off"><div class="mi-pl">';
  gr.forEach(function(g, gi){
    h += '<div class="mi-pg" data-g="' + gi + '"><span>' + esc(g) + '</span><small>' + items.filter(function(x){ return x.g === g; }).length + '</small></div>';
    items.forEach(function(x, i){ if(x.g !== g) return; h += '<div class="mi-pi" data-g="' + gi + '" data-i="' + i + '" style="display:none' + (x.off ? ";opacity:.5" : "") + '"><span>' + esc(x.n) + '</span><small>' + esc(x.s || "") + '</small>' + (x.info ? '<b class="mi-i" data-i="' + i + '">i</b>' : "") + '</div>'; });
  });
  h += '</div>'; el.innerHTML = h; document.body.appendChild(el);
  lage(el, anchor);
  POP = {el: el, items: items, cb: onPick, onClose: opts.onClose};
  var f = el.querySelector(".mi-pf"); f.focus();
  f.addEventListener("input", function(){ var q = f.value.toLowerCase();
    el.querySelectorAll(".mi-pi").forEach(function(d){ var g = el.querySelector('.mi-pg[data-g="' + d.dataset.g + '"]'); d.style.display = q ? (d.textContent.toLowerCase().indexOf(q) > -1 ? "" : "none") : (g.classList.contains("auf") ? "" : "none"); });
    if(q) el.querySelectorAll(".mi-pg").forEach(function(g){ g.classList.add("auf"); }); });
  f.addEventListener("keydown", function(e){ if(e.key === "Escape") popClose(); });
  if(opts.offen) el.querySelectorAll(".mi-pg").forEach(function(g){ g.classList.add("auf"); }); if(opts.offen) el.querySelectorAll(".mi-pi").forEach(function(d){ d.style.display = ""; }); if(opts.auf != null) el.querySelectorAll('.mi-pg').forEach(function(g){ if(g.textContent.indexOf(opts.auf) === 0){ g.classList.add("auf"); el.querySelectorAll('.mi-pi[data-g="' + g.dataset.g + '"]').forEach(function(d){ d.style.display = ""; }); } });
}
function infoOpen(i){
  infoClose(); var x = POP && POP.items[i]; if(!x || !x.info) return;
  var r = POP.el.getBoundingClientRect(), d = document.createElement("div"); d.className = "mi-info"; d.innerHTML = '<button class="mi-x" aria-label="Schließen">×</button>' + x.info;
  document.body.appendChild(d); var w = d.offsetWidth, left = r.right + 6; if(left + w > window.innerWidth - 8) left = Math.max(8, r.left - w - 6);
  d.style.left = left + window.scrollX + "px"; d.style.top = r.top + window.scrollY + "px"; INFO = d;
}

/* ---------- Infos ---------- */
function bookInfo(b){
  return '<h4>' + esc(b.name) + '</h4><p class="mi-m">' + esc(CFG.typen[b.typ].l) + (b.p ? " · S. " + b.p : "") + '</p>' + (b.intro || []).map(function(t){ return "<p>" + esc(t) + "</p>"; }).join("") + (b.concept ? '<p class="mi-m">' + esc(b.concept) + "</p>" : "");
}
function kitInfo(k){ return '<h4>' + esc(k.name) + '</h4><p class="mi-m">' + esc(book(k.book).name) + (k.p ? " · S. " + k.p : "") + '</p><p><b>Power:</b> ' + k.power.map(esc).join(" · ") + '</p><p><b>Schwäche:</b> ' + k.weak.map(esc).join(" · ") + '</p>' + (k.motiv ? '<p><b>' + esc(k.motivL) + ':</b> ' + esc(k.motiv) + "</p>" : ""); }
function vorInfo(v){
  return '<h4>' + esc(v.name) + '</h4><p class="mi-m">' + esc(v.gruppe) + (v.p ? " · S. " + v.p : "") + '</p>' + P(v.text) +
    '<p><b>Themen:</b> ' + v.themes.map(function(t){ return esc(t.kit || book(t.book).name); }).join(" · ") + (v.wahl && v.wahl.length ? " · eins aus: " + v.wahl.map(function(t){ return esc(t.kit); }).join(" / ") : "") + '</p>' + (v.ausr && v.ausr.length ? '<p><b>Ausrüstung:</b> ' + v.ausr.map(esc).join(" · ") + "</p>" : "");
}

/* ---------- Charakter aus Vorlage / Zufall ---------- */
function themeAusKit(k, bookId){
  var b = book(bookId || k.book), t = blankTheme(); t.book = b.id; t.kit = k.name; t.name = k.name;
  t.power = k.power.slice(0, CFG.regeln.power).map(function(a, i){ return {l: LT[i], a: a}; });
  t.weak = [{l: "A", a: k.weak[0]}]; t.motiv = k.motiv || ""; return t;
}
function themeLeerKit(bookId, name){ var t = blankTheme(); t.book = bookId; t.kit = name; t.name = name; return t; }
function themeAusRef(x){
  var k = x.kit && kitBy(x.book, x.kit), t;
  if(k) t = themeAusKit(k); else if(x.kit) t = themeLeerKit(x.book, x.kit); else { t = blankTheme(); t.book = x.book; }
  if(x.hint) t.konzept = x.hint; return t;
}
function charMitThemen(name, refs, ausr){
  var c = blankChar(); c.name = name; c.themes = refs.map(themeAusRef).slice(0, CFG.regeln.themen); while(c.themes.length < CFG.regeln.themen) c.themes.push(blankTheme());
  c.ausr = ausr || ""; neuerEintrag(c, true); S.tab = "charaktere"; S.slot = 0; save(); render();
}
function vorlageSetzen(v, wahlIdx){
  var refs = v.themes.slice(), w = v.wahl && v.wahl[wahlIdx || 0]; if(w) refs.push(w);
  charMitThemen(v.name, refs, (v.ausr || []).join("\n"));
}
function vorlageWahl(v, anchor){
  if(v.wahl && v.wahl.length > 1) popOpen(anchor, v.wahl.map(function(w, i){ return {n: w.kit, s: "", g: "Wahl-Kit für " + v.name, i: i}; }), function(it){ vorlageSetzen(v, it.i); }, {offen: 1});
  else vorlageSetzen(v, 0);
}
function zufall(){
  var c = blankChar(), typen = Object.keys(CFG.typen), used = {};
  c.themes = c.themes.map(function(){
    var cand = CFG.kits.filter(function(k){ return !used[k.book + k.name] && !used[k.book]; }); if(!cand.length) cand = CFG.kits;
    var k = pick(cand); used[k.book] = 1; var t = themeAusKit(k);
    var rest = shuffle(k.power.map(function(a, i){ return i; }).slice(1)).slice(0, CFG.regeln.power - 1).sort(); t.power = [{l: "A", a: k.power[0]}].concat(rest.map(function(i){ return {l: LT[i], a: k.power[i]}; }));
    var wi = Math.floor(Math.random() * k.weak.length); t.weak = [{l: LT[wi], a: k.weak[wi]}]; return t;
  });
  neuerEintrag(c, true); S.tab = "charaktere"; save(); render();
}

/* ---------- Anzeige ---------- */
function kombiSetzen(){
  var K = CFG.kombi, k = S.kombi || {}, a = K.liste.filter(function(x){ return x.id === k.a; })[0], b = K.liste.filter(function(x){ return x.id === k.b; })[0], st = K.stufen[k.st == null ? -1 : k.st];
  if(!a || !b || !st){ toast("Erst Archetypen und Stufe wählen"); return; }
  charMitThemen(a.name + " / " + b.name, a.themes.slice(0, st.n[0]).concat(b.themes.slice(0, st.n[1])), "");
}
function tabs(){ return CFG.bogen ? [["charaktere", "Bogen"], ["fragen", "Fragen"], ["books", "Themenbücher"], ["vorlagen", "Vorlagen"]] : [["fragen", "Fragen"], ["books", "Themenbücher"], ["vorlagen", "Vorlagen"], ["charaktere", "Charakterkarte"]]; }
function render(){
  var lk = document.documentElement.classList.contains("lk");
  var c = cur(), tab = lk || CFG.bogen ? "charaktere" : S.tab;
  var h = '<header class="mi-head">' + (lk ? "" : '<a class="mi-back" href="' + esc(CFG.zurueck) + '" data-tip="Zurück zum Tool" aria-label="Zurück">‹</a>') + '<img class="mi-logo" src="' + esc(CFG.logo) + '" alt="' + esc(CFG.titel) + '">' + (CFG.bogen ? "" : '<span class="mi-ttl">Charaktererstellung</span>') + '<span class="mi-sp"></span></header>';
  if(!lk && !CFG.bogen) h += '<nav class="mi-tabs">' + tabs().map(function(t){ return '<a class="' + (tab === t[0] ? "on" : "") + '" data-act="tab" data-v="' + t[0] + '">' + t[1] + '</a>'; }).join("") + '</nav>';
  h += '<main class="mi-main' + (tab === "charaktere" && CFG.bogen ? " mi-wide" : "") + '">' + (tab === "fragen" ? vFragen(c) : tab === "books" ? vBooks() : tab === "vorlagen" ? vVorlagen() : CFG.bogen ? leiste(c, lk) + CFG.bogen.render(c, API) : vKarte(c, lk)) + '</main>';
  $app.innerHTML = h + '<input type="file" id="miFile" accept=".json,application/json" hidden>';
}
function leiste(c, lk){
  return '<div class="mi-bar noprint"><div class="mi-chips">' + S.chars.map(function(x){ return '<a class="' + (x.id === c.id ? "on" : "") + '" data-act="chip" data-v="' + x.id + '">' + esc(x.name || "Neuer Charakter") + '</a>'; }).join("") + '<a class="neu" data-act="neu" data-tip="Neuen Charakter anlegen" aria-label="Neuen Charakter anlegen">+</a></div><div class="mi-act">' +
    ic("zufall", "Zufälligen Charakter erstellen", IC.zufall) + ic("vorlage", "Vorlage: Archetyp als neuen Charakter einsetzen", IC.vorlage) + ic("leeren", "Diesen Charakter leeren", IC.leeren) + ic("teilen", "Diesen Charakter als Link teilen", IC.teilen) + ic("sichern", "Als Datei sichern", IC.sichern) + ic("laden", "Datei laden", IC.laden) + ic("pdf", "Als PDF speichern (Druckdialog)", IC.pdf) + ic("loeschen", "Charakter löschen", IC.loeschen) + '</div></div>';
}
function essenz(c){ var n = {}; c.themes.forEach(function(t){ if(t.book){ var b = book(t.book); n[b.typ] = (n[b.typ] || 0) + 1; } }); return Object.keys(CFG.typen).filter(function(k){ return !CFG.typen[k].nurWennBenutzt || n[k]; }).map(function(k){ return '<span>' + esc(CFG.typen[k].l) + ' <b>' + (n[k] || 0) + '</b></span>'; }).join("") + (CFG.stufe && CFG.stufe(n) ? '<span><b>' + esc(CFG.stufe(n)) + '</b></span>' : ""); }

/* --- Fragen --- */
function vFragen(c){
  var th = c.themes[S.slot] || c.themes[0], h = leiste(c, false);
  h += '<section class="mi-sec"><div class="mi-row"><label class="mi-fl">Name</label><input class="mi-in" data-f="cname" value="' + esc(c.name) + '" placeholder="Name des Charakters"><span class="mi-ess noprint">' + essenz(c) + '</span></div>';
  h += '<div class="mi-slots">' + c.themes.map(function(t, i){ var b = t.book && book(t.book); return '<a class="' + (i === S.slot ? "on" : "") + (ok(t) ? " fertig" : "") + '" data-act="slot" data-v="' + i + '"><i>' + (i + 1) + '</i><span>' + esc(t.name || (b ? b.name : "Leer")) + '</span>' + (b ? badge(b.typ) : "") + '</a>'; }).join("") + '</div></section>';
  h += '<section class="mi-sec">' + (th.book ? vThema(c, th) : vLeerSlot(c)) + '</section>';
  return h;
}
function vLeerSlot(c){
  var h = '<div class="mi-leer"><p>Wähle das Themenbuch für Thema ' + (S.slot + 1) + ' oder starte mit einer Vorlage oder einem Zufallscharakter.</p><button class="mi-btn" data-act="wahlBook">Themenbuch wählen</button>';
  if(CFG.konzept.length > 1) h += '<details class="mi-det"><summary>Leitfragen zum Konzept</summary><ul>' + CFG.konzept.map(function(q){ return "<li>" + esc(q) + "</li>"; }).join("") + '</ul></details>';
  return h + '</div>';
}
function vThema(c, th){
  var b = book(th.book), tp = CFG.typen[b.typ], kit = th.kit && kitBy(th.book, th.kit), n = need(th), np = th.power.filter(function(x){ return x.a; }).length, nw = th.weak.filter(function(x){ return x.a; }).length;
  var h = '<div class="mi-thead"><div><h2>' + esc(b.name) + ' ' + badge(b.typ) + '</h2><p class="mi-m">' + (b.p ? 'S. ' + b.p : "") + '</p></div><div class="mi-tact">' +
    '<button class="mi-btn s" data-act="wahlBook">Themenbuch wechseln</button>' + (kitsOf(b.id).length ? '<button class="mi-btn s" data-act="wahlKit">' + (kit ? "Anderes Kit" : "Kit nutzen") + '</button>' : "") + (th.kit ? '<button class="mi-btn s" data-act="ohneKit">Fragen statt Kit</button>' : "") + '<button class="mi-btn s" data-act="themaLeer">Thema leeren</button></div></div>';
  h += '<div class="mi-intro">' + (b.intro || []).slice(0, 1).map(function(t){ return "<p>" + esc(t) + "</p>"; }).join("") + (b.intro && b.intro.length > 1 || b.concept ? '<details class="mi-det"><summary>Mehr zum Themenbuch</summary>' + (b.intro || []).slice(1).map(function(t){ return "<p>" + esc(t) + "</p>"; }).join("") + (b.concept ? '<p class="mi-m">' + esc(b.concept) + '</p>' : "") + '</details>' : "") + '</div>';
  /* Konzeptfrage */
  if(b.why && !th.kit) h += '<div class="mi-box"><h3>' + esc(b.why.q) + '</h3>' + (b.why.opts || []).map(function(o){ return '<a class="mi-opt" data-act="why" data-v="' + esc(o) + '">' + esc(o) + '</a>'; }).join("") + '<textarea class="mi-ta" data-f="konzept" rows="2" placeholder="Dein Konzept zu diesem Thema …">' + esc(th.konzept) + '</textarea>' + (b.why.flesh ? '<p class="mi-m">' + esc(b.why.flesh) + '</p>' : "") + '</div>';
  /* Power */
  h += '<h3 class="mi-h3">Stärken <small>(Power-Tags) · ' + esc(CFG.regeln.pflicht) + ' · gewählt ' + np + '/' + n.p + '</small></h3>';
  if(kit) h += '<div class="mi-chipsel">' + kit.power.map(function(t, i){ var on = th.power.some(function(x){ return x.a === t; }); return '<a class="' + (on ? "on" : "") + (i === 0 ? " fix" : "") + '" data-act="kitP" data-v="' + i + '">' + (i === 0 ? '★ ' : "") + esc(t) + '</a>'; }).join("") + '</div>';
  else h += '<div class="mi-qs">' + b.power.map(function(q, i){ return vFrage(th, q, "power", i === 0); }).join("") + '</div>';
  /* Schwäche */
  h += '<h3 class="mi-h3">Schwächen <small>(Schwächen-Tag) · gewählt ' + nw + '/' + n.w + '</small></h3>';
  if(kit) h += '<div class="mi-chipsel weak">' + kit.weak.map(function(t, i){ var on = th.weak.some(function(x){ return x.a === t; }); return '<a class="' + (on ? "on" : "") + '" data-act="kitW" data-v="' + i + '">' + esc(t) + '</a>'; }).join("") + '</div>';
  else h += '<div class="mi-qs">' + b.weak.map(function(q){ return vFrage(th, q, "weak", false); }).join("") + '</div>';
  /* Motivation */
  if(tp.motiv){ h += '<div class="mi-box"><h3>' + esc(tp.motiv) + (tp.pre ? ' <small>beginnt mit „' + esc(tp.pre) + '“</small>' : "") + '</h3><textarea class="mi-ta" data-f="motiv" rows="2" placeholder="' + esc(tp.motiv) + ' …">' + esc(th.motiv) + '</textarea>';
    if(b.motivEx && b.motivEx.length) h += '<div class="mi-ex">' + b.motivEx.map(function(e){ return '<a data-act="motivEx" data-v="' + esc(e[1]) + '"><b>' + esc(e[0]) + '</b> ' + esc(e[1]) + '</a>'; }).join("") + '</div>';
    if(b.motivNote) h += '<p class="mi-m">' + esc(b.motivNote) + '</p>'; h += '</div>'; }
  h += '<div class="mi-row2"><div><label class="mi-fl">Name des Themas</label><input class="mi-in" data-f="tname" value="' + esc(th.name) + '" placeholder="' + esc(b.name) + '"></div>' + (CFG.regeln.extra ? '<label class="mi-chk"><input type="checkbox" data-f="extra"' + (th.extra ? " checked" : "") + '> Zusatzfrage: je ein zusätzlicher Power- und Schwächen-Tag in diesem Thema</label>' : "") + '</div>';
  return h;
}
function vFrage(th, q, art, pflicht){
  var L = th[art], x = L.filter(function(y){ return y.l === q.l; })[0], on = !!x;
  var h = '<div class="mi-q' + (on ? " on" : "") + '"><a class="mi-qh" data-act="' + (art === "power" ? "qP" : "qW") + '" data-v="' + esc(q.l) + '"><i>' + esc(q.l) + '</i><span>' + esc(q.q) + '</span>' + (pflicht ? '<small>Pflicht</small>' : "") + '</a>';
  if(on){ h += '<textarea class="mi-ta" data-f="ans" data-art="' + art + '" data-l="' + esc(q.l) + '" rows="2" placeholder="Deine Antwort – kurz als Tag formulieren …">' + esc(x.a) + '</textarea>';
    if(q.tags && q.tags.length) h += '<div class="mi-ex">' + q.tags.slice(0, 12).map(function(t){ return '<a data-act="tagEx" data-art="' + art + '" data-l="' + esc(q.l) + '" data-v="' + esc(t) + '">' + esc(t) + '</a>'; }).join("") + '</div>'; }
  return h + '</div>';
}

/* --- Themenbücher --- */
function vBooks(){
  var h = '<section class="mi-sec"><div class="mi-bgrid">';
  Object.keys(CFG.typen).forEach(function(tp){
    CFG.books.filter(function(b){ return b.typ === tp; }).forEach(function(b){
      h += '<div class="mi-bk t-' + esc(tp) + '"><div class="mi-bkh">' + badge(tp) + (b.p ? '<small>S. ' + b.p + '</small>' : "") + '</div><h3>' + esc(b.name) + '</h3><p>' + esc((b.intro && b.intro[0] || "").slice(0, 190)) + (b.intro && b.intro[0] && b.intro[0].length > 190 ? " …" : "") + '</p>' +
        (kitsOf(b.id).length ? '<details class="mi-det"><summary>' + kitsOf(b.id).length + ' Kits</summary>' + kitsOf(b.id).map(function(k){ return '<div class="mi-kit"><b>' + esc(k.name) + '</b><small>' + esc(k.power.slice(0, 4).join(" · ")) + ' …</small></div>'; }).join("") + '</details>' : "") +
        '<button class="mi-btn s" data-act="useBook" data-v="' + esc(b.id) + '">Im Charakter verwenden</button></div>'; });
  });
  return h + '</div></section>';
}
/* --- Vorlagen --- */
function vKombi(){
  var K = CFG.kombi, k = S.kombi || {}, nm = function(id){ var x = K.liste.filter(function(y){ return y.id === id; })[0]; return x ? x.name : ""; };
  var h = '<section class="mi-sec"><div class="mi-box"><h3>' + esc(K.titel) + ' <small>' + esc(K.hinweis || "") + '</small></h3><div class="mi-row"><div><label class="mi-fl">' + esc(K.a) + '</label><button class="mi-btn s" data-act="kA">' + esc(nm(k.a) || "wählen") + '</button></div><div><label class="mi-fl">' + esc(K.b) + '</label><button class="mi-btn s" data-act="kB">' + esc(nm(k.b) || "wählen") + '</button></div></div>' +
    '<label class="mi-fl">Stufe</label><div class="mi-chipsel">' + K.stufen.map(function(st, i){ return '<a class="' + (k.st === i ? "on" : "") + '" data-act="kS" data-v="' + i + '">' + esc(st.l) + ' <small>(' + st.n[0] + ' ' + esc(K.aKurz) + ' · ' + st.n[1] + ' ' + esc(K.bKurz) + ')</small></a>'; }).join("") + '</div><p><button class="mi-btn" data-act="kGo">Als neuen Charakter einsetzen</button></p></div>';
  ["a", "b"].forEach(function(t){ h += '<h3 class="mi-h3">' + esc(K[t]) + 'en</h3><div class="mi-bgrid">' + K.liste.filter(function(x){ return x.teil === t; }).map(function(x){ return '<div class="mi-bk' + (k[t] === x.id ? " gew" : "") + '"><h3>' + esc(x.name) + '</h3><p class="mi-m">' + x.themes.map(function(r){ return esc(r.book) + (r.hint ? ' <i>(' + esc(r.hint) + ')</i>' : ""); }).join(" · ") + '</p><button class="mi-btn s" data-act="kPick" data-t="' + t + '" data-v="' + esc(x.id) + '">' + (k[t] === x.id ? "Gewählt" : "Wählen") + '</button></div>'; }).join("") + '</div>'; });
  return h + '</section>';
}
function vVorlagen(){
  if(CFG.kombi) return vKombi();
  var gr = []; CFG.vorlagen.forEach(function(v){ if(gr.indexOf(v.gruppe) < 0) gr.push(v.gruppe); });
  return '<section class="mi-sec">' + gr.map(function(g){ return '<h3 class="mi-h3">' + esc(g) + '</h3><div class="mi-bgrid">' + CFG.vorlagen.filter(function(v){ return v.gruppe === g; }).map(function(v){
    return '<div class="mi-bk"><h3>' + esc(v.name) + '</h3><p>' + esc(v.text.slice(0, 200)) + (v.text.length > 200 ? " …" : "") + '</p><p class="mi-m">' + v.themes.map(function(t){ return esc(t.kit || book(t.book).name); }).join(" · ") + '</p><button class="mi-btn s" data-act="vorSetzen" data-v="' + esc(v.id) + '">Als neuen Charakter einsetzen</button></div>'; }).join("") + '</div>'; }).join("") + '</section>';
}
/* --- Charakterkarte --- */
function vKarte(c, lk){
  var h = leiste(c, lk) + '<section class="mi-sheet" id="miSheet"><div class="mi-sname"><label class="mi-fl">Name</label><input class="mi-in big" data-f="cname" value="' + esc(c.name) + '" placeholder="Name des Charakters"><span class="mi-ess">' + essenz(c) + '</span></div><div class="mi-cards">';
  c.themes.forEach(function(t, i){
    var b = t.book && book(t.book), tp = b && CFG.typen[b.typ];
    h += '<div class="mi-card' + (b ? " t-" + esc(b.typ) : " leer") + '"><div class="mi-ch">' + (b ? badge(b.typ) : "") + '<h3>' + esc(t.name || (b ? b.name : "Thema " + (i + 1))) + '</h3>' + (b && t.name && t.name !== b.name ? '<small>' + esc(b.name) + '</small>' : "") + '</div>';
    if(b){
      h += '<ul class="mi-pw">' + t.power.filter(function(x){ return x.a; }).map(function(x, k){ return '<li' + (k === 0 ? ' class="kern"' : "") + '>' + esc(x.a) + '</li>'; }).join("") + '</ul><ul class="mi-sw">' + t.weak.filter(function(x){ return x.a; }).map(function(x){ return '<li>' + esc(x.a) + '</li>'; }).join("") + '</ul>';
      if(t.motiv) h += '<p class="mi-mo"><b>' + esc(tp.motiv) + ':</b> ' + esc(t.motiv) + '</p>';
      if(!ok(t)) h += '<p class="mi-warn noprint">Noch unvollständig</p>';
      h += '<a class="mi-edit noprint" data-act="edit" data-v="' + i + '">bearbeiten</a>';
    } else h += '<a class="mi-edit noprint" data-act="edit" data-v="' + i + '">Thema wählen</a>';
    h += '</div>';
  });
  h += '</div><div class="mi-two"><div class="mi-box"><h3>Beziehungen in der Gruppe</h3>' + (c.rel || []).map(function(r, i){ return '<div class="mi-rel"><input class="mi-in" data-f="relw" data-i="' + i + '" value="' + esc(r.w) + '" placeholder="Mitspieler"><input class="mi-in" data-f="relt" data-i="' + i + '" value="' + esc(r.t) + '" placeholder="Beziehungs-Tag"><a class="noprint" data-act="relx" data-v="' + i + '" aria-label="Entfernen">×</a></div>'; }).join("") + '<a class="mi-add noprint" data-act="reln">+ Beziehung</a></div>' +
    '<div class="mi-box"><h3>Ausrüstung</h3><textarea class="mi-ta" data-f="ausr" rows="5">' + esc(c.ausr) + '</textarea></div></div><div class="mi-box"><h3>Notizen</h3><textarea class="mi-ta" data-f="notiz" rows="3">' + esc(c.notiz) + '</textarea></div></section>';
  return h;
}

/* ---------- Aktionen ---------- */
function setze(th, art, l, a){ var L = th[art], x = L.filter(function(y){ return y.l === l; })[0]; if(x) x.a = a; else L.push({l: l, a: a}); }
function click(e){
  var inf = e.target.closest && e.target.closest(".mi-i");
  if(inf){ e.stopPropagation(); infoOpen(+inf.dataset.i); return; }
  if(e.target.closest && e.target.closest(".mi-x")){ infoClose(); return; }
  var pi = e.target.closest && e.target.closest(".mi-pi"), pg = e.target.closest && e.target.closest(".mi-pg");
  if(pg){ pg.classList.toggle("auf"); POP.el.querySelectorAll('.mi-pi[data-g="' + pg.dataset.g + '"]').forEach(function(d){ d.style.display = pg.classList.contains("auf") ? "" : "none"; }); return; }
  if(pi){ var cb = POP.cb, it = POP.items[+pi.dataset.i]; popClose(); cb(it); return; }
  if(POP && !(e.target.closest && (e.target.closest(".mi-pop") || e.target.closest(".mi-info")))) popClose();
  var a = e.target.closest && e.target.closest("[data-act]"); if(!a) return;
  var act = a.dataset.act, v = a.dataset.v, c = cur(), th = c && c.themes[S.slot];
  if(CFG.bogen && CFG.bogen.click && CFG.bogen.click(act, a, c, e)) return;
  if(act === "tab"){ S.tab = v; }
  else if(act === "slot"){ S.slot = +v; }
  else if(act === "edit"){ S.slot = +v; S.tab = "fragen"; }
  else if(act === "chip"){ S.cur = v; }
  else if(act === "neu"){ var n = blankChar(); S.chars.push(n); S.cur = n.id; S.slot = 0; }
  else if(act === "zufall"){ zufall(); return; }
  else if(act === "vorlage" && CFG.kombi){ S.tab = "vorlagen"; }
  else if(act === "vorlage"){ popOpen(a, CFG.vorlagen.map(function(x){ return {n: x.name, s: "", g: x.gruppe, info: vorInfo(x), id: x.id}; }), function(it){ vorlageWahl(CFG.vorlagen.filter(function(x){ return x.id === it.id; })[0], a); }); return; }
  else if(act === "leeren"){ if(!leer(c) && !confirm("Diesen Charakter leeren?")) return; var id = c.id, nb = blankChar(); nb.id = id; Object.keys(c).forEach(function(k){ delete c[k]; }); Object.assign(c, nb); S.slot = 0; }
  else if(act === "teilen"){ linkKopieren(c); return; }
  else if(act === "sichern"){ dateiSichern(c); return; }
  else if(act === "laden"){ document.getElementById("miFile").click(); return; }
  else if(act === "pdf"){ S.tab = "charaktere"; if(!document.documentElement.classList.contains("lk")){ render(); } window.print(); return; }
  else if(act === "loeschen"){ if(!confirm("Charakter „" + (c.name || "Neuer Charakter") + "“ löschen?")) return; S.chars = S.chars.filter(function(x){ return x.id !== c.id; }); S.cur = ""; }
  else if(act === "wahlBook"){ popOpen(a, CFG.books.map(function(b){ return {n: b.name, s: b.p ? "S. " + b.p : "", g: b.grp || CFG.typen[b.typ].l, info: bookInfo(b), id: b.id}; }), function(it){ var t = c.themes[S.slot]; var ex = t.extra; Object.keys(t).forEach(function(k){ delete t[k]; }); Object.assign(t, blankTheme()); t.book = it.id; t.extra = ex; save(); render(); }); return; }
  else if(act === "wahlKit"){ popOpen(a, kitsOf(th.book).map(function(k){ return {n: k.name, s: k.p ? "S. " + k.p : "", g: book(th.book).name, info: kitInfo(k), id: k.name}; }), function(it){ var k = kitBy(th.book, it.id), nt = themeAusKit(k); nt.extra = th.extra; Object.keys(th).forEach(function(x){ delete th[x]; }); Object.assign(th, nt); save(); render(); }, {offen: 1}); return; }
  else if(act === "ohneKit"){ th.kit = ""; th.power = []; th.weak = []; th.motiv = ""; }
  else if(act === "themaLeer"){ var ex2 = th.extra; Object.keys(th).forEach(function(k){ delete th[k]; }); Object.assign(th, blankTheme()); th.extra = ex2; }
  else if(act === "why"){ th.konzept = (th.konzept ? th.konzept + "\n" : "") + v; }
  else if(act === "qP"){ var x = th.power.filter(function(y){ return y.l === v; })[0], pflicht = book(th.book).power[0].l === v;
    if(x && !pflicht) th.power = th.power.filter(function(y){ return y.l !== v; }); else if(!x){ if(th.power.length >= need(th).p){ toast("Schon " + need(th).p + " Stärken gewählt"); return; } th.power.push({l: v, a: ""}); } }
  else if(act === "qW"){ var xw = th.weak.filter(function(y){ return y.l === v; })[0]; if(xw) th.weak = th.weak.filter(function(y){ return y.l !== v; }); else { if(th.weak.length >= need(th).w) th.weak.shift(); th.weak.push({l: v, a: ""}); } }
  else if(act === "tagEx"){ setze(th, a.dataset.art, a.dataset.l, v); }
  else if(act === "motivEx"){ th.motiv = v; }
  else if(act === "kitP"){ var kk = kitBy(th.book, th.kit), t0 = kk.power[+v], on = th.power.some(function(y){ return y.a === t0; });
    if(+v === 0) return; if(on) th.power = th.power.filter(function(y){ return y.a !== t0; }); else { if(th.power.length >= need(th).p){ toast("Schon " + need(th).p + " Stärken gewählt"); return; } th.power.push({l: LT[+v], a: t0}); } }
  else if(act === "kitW"){ var kw = kitBy(th.book, th.kit), tw = kw.weak[+v], onw = th.weak.some(function(y){ return y.a === tw; }); if(onw) th.weak = []; else { th.weak = th.weak.slice(-(need(th).w - 1)); if(need(th).w === 1) th.weak = []; th.weak.push({l: LT[+v], a: tw}); } }
  else if(act === "useBook"){ var tt = c.themes.filter(function(t){ return !t.book; })[0]; if(!tt){ toast("Alle Themenplätze belegt"); return; } tt.book = v; S.slot = c.themes.indexOf(tt); S.tab = "fragen"; }
  else if(act === "kA" || act === "kB"){ var tt = act === "kA" ? "a" : "b"; popOpen(a, CFG.kombi.liste.filter(function(x){ return x.teil === tt; }).map(function(x){ return {n: x.name, s: "", g: CFG.kombi[tt] + "en", id: x.id, info: '<h4>' + esc(x.name) + '</h4><p>' + x.themes.map(function(r){ return esc(r.book) + (r.hint ? ' (' + esc(r.hint) + ')' : ""); }).join(" · ") + '</p>'}; }), function(it){ S.kombi = S.kombi || {}; S.kombi[tt] = it.id; save(); render(); }, {offen: 1}); return; }
  else if(act === "kPick"){ S.kombi = S.kombi || {}; S.kombi[a.dataset.t] = v; }
  else if(act === "kS"){ S.kombi = S.kombi || {}; S.kombi.st = +v; }
  else if(act === "kGo"){ kombiSetzen(); return; }
  else if(act === "vorSetzen"){ vorlageWahl(CFG.vorlagen.filter(function(x){ return x.id === v; })[0], a); return; }
  else if(act === "reln"){ c.rel.push({w: "", t: ""}); }
  else if(act === "relx"){ c.rel.splice(+v, 1); }
  else return;
  ens(); save(); render();
}
function eingabe(e){
  var el = e.target, f = el.dataset && el.dataset.f; if(!f) return; var c = cur(), th = c.themes[S.slot];
  if(CFG.bogen && CFG.bogen.input && CFG.bogen.input(f, el, c, e)) return;
  if(f === "cname"){ c.name = el.value; var on = document.querySelector(".mi-chips a.on"); if(on) on.textContent = c.name || "Neuer Charakter"; }
  else if(f === "tname") th.name = el.value; else if(f === "konzept") th.konzept = el.value; else if(f === "motiv") th.motiv = el.value;
  else if(f === "ans") setze(th, el.dataset.art, el.dataset.l, el.value);
  else if(f === "ausr") c.ausr = el.value; else if(f === "notiz") c.notiz = el.value;
  else if(f === "relw") c.rel[+el.dataset.i].w = el.value; else if(f === "relt") c.rel[+el.dataset.i].t = el.value;
  else if(f === "extra" && e.type === "change"){ c.themes.forEach(function(t){ t.extra = 0; }); th.extra = el.checked ? 1 : 0; save(); render(); return; }
  save();
}

/* ---------- Start ---------- */
function start(cfg){
  CFG = cfg; $app = document.getElementById("app"); load();
  var m = /[#&]c=([\w-]+)/.exec(location.hash);
  if(m){ try{ var o = unpack(m[1]); if(gueltig(o)){ S.chars.push(normal(o)); S.cur = S.chars[S.chars.length - 1].id; S.tab = "charaktere"; document.documentElement.classList.add("lk"); try{ sessionStorage.setItem("mi_lk", "1"); }catch(e){} history.replaceState(null, "", location.pathname); save(); } }catch(e){} }
  try{ if(sessionStorage.getItem("mi_lk") === "1") document.documentElement.classList.add("lk"); }catch(e){}
  ens(); save(); render();
  document.addEventListener("click", click);
  document.addEventListener("input", eingabe); document.addEventListener("change", function(e){ if(e.target.id === "miFile"){ if(e.target.files[0]) dateiLaden(e.target.files[0]); e.target.value = ""; } else eingabe(e); });
  document.addEventListener("keydown", function(e){ if(e.key === "Escape") popClose(); });
}
var API = {esc: esc, book: book, kitsOf: kitsOf, kitBy: kitBy, popOpen: popOpen, popClose: popClose, panel: panel, toast: toast, bookInfo: bookInfo, kitInfo: kitInfo, themeAusKit: themeAusKit, blankTheme: blankTheme,
  save: function(){ save(); }, render: function(){ render(); }, rerender: function(){ ens(); save(); render(); }, cfg: function(){ return CFG; }, state: function(){ return S; }, cur: function(){ return cur(); }};
window.MistErsteller = {start: start, api: API};
})();
