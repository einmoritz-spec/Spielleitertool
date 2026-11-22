/* MÖRK BORG – Spieltisch (Entwurf 2): Kalender des Nechrubel · Gruppe · Gewalt · Regelspiegel. Zustand in ST (mb_state_v1): kal, gr, gw, sp */
"use strict";
window.MB_KREATUR = window.MB_KREATUR || [];   /* Bauschritt 4 füllt sie; „Auf den Spieltisch“ ruft SP.kreaturDazu(id) */
var SP = {};
(function(){
 var ROEM = ["", "I", "II", "III", "IV", "V", "VI"];
 function kal(){ var k = ST.kal = ST.kal || {}; if(k.n == null) k.n = 1; if(!k.ein) k.ein = {}; if(k.w == null) k.w = -1; return k; }
 function gr(){ return ST.gr = ST.gr || []; }
 function gw(){ var g = ST.gw = ST.gw || {}; if(!g.kr) g.kr = []; if(g.ini == null) g.ini = -1; return g; }
 function num(v, d){ var n = parseInt(v, 10); return isNaN(n) ? (d || 0) : n; }
 function vz(n){ return n > 0 ? "+" + n : n < 0 ? "−" + Math.abs(n) : "0"; }
 function heim(id){ for(var i = 0; i < MB_HEIMSUCHUNG.length; i++) if(MB_HEIMSUCHUNG[i].id === id) return MB_HEIMSUCHUNG[i]; return null; }
 function neu(){ render(); }

 /* ---------- Kalender ---------- */
 function kalHtml(){
  var k = kal(), K = MB_KALENDER;
  var w = K.wuerfel.map(function(d, i){ return '<button class="' + (k.w === i ? "on" : "") + '" onclick="SP.w(' + i + ')"><small>' + esc(d[0]) + '</small><b>' + d[1] + '</b></button>'; }).join("");
  var netz = "";
  for(var p = 1; p <= 6; p++){
   var z = ""; for(var q = 1; q <= 6; q++){ var id = p + ":" + q, h = heim(id); z += '<b class="' + (k.ein[id] ? "x" : "") + '" title="' + esc(h ? h.x : "") + '" onclick="SP.h(\'' + id + '\')">' + id + '</b>'; }
   netz += '<div class="ps"><span>Psalm ' + ROEM[p] + '</span><div>' + z + '</div></div>';
  }
  netz += '<div class="ps end"><span>Der Letzte</span><div><b class="' + (k.ein["7:7"] ? "x" : "") + '" onclick="SP.h(\'7:7\')">7:7</b></div></div>';
  var letzte = k.last && k.ein[k.last] ? heim(k.last) : null;
  var zl = '<div class="zuletzt" onclick="SP.verse()">' + (letzte ? '<b>' + letzte.id + '</b>' + esc(letzte.x) : '') + '</div>';
  return '<section class="kal"><div class="wuerfel">' + w + '</div><div class="psalm"><div class="netz">' + netz + '</div>' + zl + '</div>' +
   '<div class="tag"><span class="versal">Tag</span><span class="n">' + k.n + '</span><div class="ctl"><button onclick="SP.tag(-1)" aria-label="Tag zurück">−</button><button onclick="SP.tag(1)" aria-label="Tag weiter">+</button></div></div></section>';
 }
 SP.w = function(i){ var k = kal(); k.w = k.w === i ? -1 : i; save(); neu(); };
 SP.h = function(id){
  var k = kal();
  if(k.ein[id]){ delete k.ein[id]; if(k.last === id){ k.last = null; var rest = Object.keys(k.ein); if(rest.length) k.last = rest[rest.length - 1]; } }
  else { k.ein[id] = 1; k.last = id; }
  save(); neu();
 };
 SP.tag = function(d){ var k = kal(); k.n = Math.max(1, k.n + d); save(); neu(); };
 SP.verse = function(){
  var k = kal(), K = MB_KALENDER, out = '<h3 class="mt">' + esc(K.titel) + pgl(16) + '</h3>' + K.einleitung.map(function(t){ return '<p>' + md(t) + '</p>'; }).join("") +
   '<h4>' + esc(K.frage) + '</h4><p class="q">' + esc(K.quelle) + pgl(17) + '</p>';
  for(var p = 1; p <= 7; p++){
   out += '<h4 class="ph">' + (p < 7 ? "Psalm " + ROEM[p] : "Psalm VII · " + K.psalmen[6]) + '</h4>';
   MB_HEIMSUCHUNG.filter(function(h){ return h.ps === p; }).forEach(function(h){
    out += '<p class="vs' + (k.ein[h.id] ? " ein" : "") + '" onclick="SP.h(\'' + h.id + '\');this.classList.toggle(\'ein\')"><b>' + h.id + '</b>' + esc(h.x) + '</p>';
   });
  }
  document.querySelectorAll(".modal.breit").forEach(function(m){ m.remove(); });
  var m = modal(out); m.classList.add("breit");
 };

 /* ---------- Gruppe ---------- */
 function omen(c, i){
  var s = ""; for(var j = 0; j < c.omx; j++) s += '<i class="' + (j < c.om ? "v" : "") + '" onclick="event.stopPropagation();SP.om(' + i + ',' + j + ')"></i>';
  return '<span class="om">' + s + '</span>';
 }
 function gruppeHtml(){
  var G = gr();
  var karten = G.map(function(c, i){
   var tot = c.tp <= 0;
   var zl = tot
    ? '<span>Gebrochen W4:</span>' + [1, 2, 3, 4].map(function(n){ return '<button class="gz' + (c.geb === n ? " on" : "") + '" onclick="event.stopPropagation();SP.geb(' + i + ',' + n + ')">' + n + '</button>'; }).join("") +
      (c.geb ? '<span class="gt">' + md(GEB[c.geb - 1]) + '</span>' : "")
    : '<span>STÄ <b>' + vz(c.s) + '</b></span><span>GES <b>' + vz(c.g) + '</b></span><span>PRÄ <b>' + vz(c.p) + '</b></span><span>ZÄH <b>' + vz(c.z) + '</b></span>' +
      (c.mx2 ? '<span class="mc" onclick="event.stopPropagation();SP.macht(' + i + ')">Mächte <b>' + c.m + '/' + c.mx2 + '</b></span>' : "") +
      (c.omx ? omen(c, i) : "") +
      '<span class="si" onclick="event.stopPropagation()">Silber <input type="number" value="' + c.si + '" onchange="SP.silber(' + i + ',this.value)"></span>' +
      (c.inf ? '<span class="ch" onclick="event.stopPropagation();SP.inf(' + i + ')">Infiziert</span>' : "");
   return '<div class="sc' + (tot ? " tot" : "") + '" onclick="SP.charForm(' + i + ')"><div class="n">' + esc(c.n) + '</div>' +
    '<div class="tp">' + Math.max(0, c.tp) + '<small>/' + c.mx + '</small><span class="k"><button onclick="event.stopPropagation();SP.tp(' + i + ',-1)" aria-label="TP −1">−</button>TP<button onclick="event.stopPropagation();SP.tp(' + i + ',1)" aria-label="TP +1">+</button></span></div>' +
    '<div class="kl">' + esc(c.kl) + '</div><div class="zl">' + zl + '</div></div>';
  }).join("");
  return '<div class="spk"><h2>Die Gruppe</h2><button class="plus" onclick="SP.charForm(-1)">+ Charakter</button></div>' + karten;
 }
 var GEB = ["W4 Runden bewusstlos, erwacht mit W4 TP.", "W6: 1–5 gebrochene/abgetrennte Gliedmaße, 6 Auge verloren. W4 Runden handlungsunfähig, dann W4 TP.", "Blutung: Tod in W2 Stunden ohne Behandlung. Alle Proben in der ersten Stunde SG16, in der letzten SG18.", "Tot."];
 SP.tp = function(i, d){ var c = gr()[i]; c.tp = Math.max(0, Math.min(c.mx, c.tp + d)); if(c.tp > 0) c.geb = 0; save(); neu(); };
 SP.om = function(i, j){ var c = gr()[i]; c.om = c.om === j + 1 ? j : j + 1; save(); neu(); };
 SP.silber = function(i, v){ gr()[i].si = num(v); save(); };
 SP.geb = function(i, n){ var c = gr()[i]; c.geb = c.geb === n ? 0 : n; save(); neu(); };
 SP.inf = function(i){ gr()[i].inf = 0; save(); neu(); };
 SP.macht = function(i){ var c = gr()[i]; c.m = c.m <= 0 ? c.mx2 : c.m - 1; save(); neu(); };
 SP.charForm = function(i){
  var c = i >= 0 ? gr()[i] : {n:"", kl:"", tp:0, mx:0, s:0, g:0, p:0, z:0, om:0, omx:2, m:0, mx2:0, si:0, inf:0};
  var f = function(id, lab, v, typ){ return '<label>' + lab + '<input id="cf_' + id + '" type="' + (typ || "text") + '" value="' + esc(v) + '"></label>'; };
  document.querySelectorAll(".modal").forEach(function(m){ m.remove(); });
  modal('<div class="fm"><h3 class="mt">' + (i >= 0 ? esc(c.n) : "Neuer Charakter") + '</h3>' + f("n", "Name", c.n) + f("kl", "Klasse", c.kl) +
   '<div class="row">' + f("tp", "TP", c.tp, "number") + f("mx", "TP max.", c.mx, "number") + f("omx", "Omen max.", c.omx, "number") + f("mx2", "Mächte/Tag", c.mx2, "number") + '</div>' +
   '<div class="row">' + f("s", "Stärke", c.s, "number") + f("g", "Geschicklichkeit", c.g, "number") + f("p", "Präsenz", c.p, "number") + f("z", "Zähigkeit", c.z, "number") + '</div>' +
   '<label class="cb"><input id="cf_inf" type="checkbox"' + (c.inf ? " checked" : "") + '> Infiziert</label>' +
   '<div class="bt"><button class="btn" onclick="SP.charSave(' + i + ')">Speichern</button>' + (i >= 0 ? '<button class="btn l" onclick="SP.charDel(' + i + ')">Entfernen</button>' : "") + '</div></div>');
 };
 SP.charSave = function(i){
  var v = function(id){ return document.getElementById("cf_" + id).value; };
  var mx = Math.max(1, num(v("mx"), 1));
  var c = {n:v("n").trim() || "Namenlos", kl:v("kl").trim(), mx:mx, tp:Math.max(0, Math.min(mx, num(v("tp"), mx))), s:num(v("s")), g:num(v("g")), p:num(v("p")), z:num(v("z")),
   omx:Math.max(0, num(v("omx"))), mx2:Math.max(0, num(v("mx2"))), inf:document.getElementById("cf_inf").checked ? 1 : 0, om:0, m:0, si:0, geb:0};
  if(i >= 0){ var o = gr()[i]; c.om = Math.min(c.omx, o.om || 0); c.si = o.si || 0; c.geb = c.tp > 0 ? 0 : o.geb || 0; c.m = Math.min(c.mx2, o.m == null ? c.mx2 : o.m); gr()[i] = c; }
  else { c.om = c.omx; c.m = c.mx2; gr().push(c); }
  save(); document.querySelector(".modal").remove(); neu();
 };
 SP.charDel = function(i){ gr().splice(i, 1); save(); document.querySelector(".modal").remove(); neu(); };

 /* ---------- Gewalt ---------- */
 function kstat(c){
  var tot = 0, lebend = [];
  c.sch.forEach(function(d, i){ if(d >= c.tp) tot++; else lebend.push(i); });
  return {tot:tot, lebend:lebend.length, haelfte:c.sch.length > 1 && tot * 2 >= c.sch.length && tot > 0,
   drittel:lebend.length === 1 && (c.tp - c.sch[lebend[0]]) * 3 <= c.tp};
 }
 function krHtml(c, i){
  var s = kstat(c);
  var leben = c.sch.map(function(d, e){
   var box = ""; for(var b = 0; b < c.tp; b++) box += '<i class="' + (b < d ? "w" : "") + '" onclick="SP.kb(' + i + ',' + e + ',' + b + ')"></i>';
   return '<div class="e' + (d >= c.tp ? " tot" : "") + '"><span>' + (e + 1) + '</span>' + box + '</div>';
  }).join("");
  return '<div class="kr' + (c.img ? "" : " ohne") + '">' + (c.img ? '<img src="' + IMG(c.img) + '" alt="">' : "") +
   '<div class="t"><h3>' + esc(c.t) + '</h3>' + (c.p ? pgl(c.p) : "") + '<span class="anz">×' + c.sch.length + '</span><button class="x" onclick="SP.krDel(' + i + ')" aria-label="Entfernen">×</button></div>' +
   '<div class="w">TP ' + c.tp + ' · Moral ' + c.moral + (c.w ? '<br><span>' + md(c.w) + '</span>' : "") + '</div>' +
   (c.sp ? '<div class="sp2">' + md(c.sp) + '</div>' : "") +
   '<div class="leben">' + leben + '</div>' +
   '<div class="moral"><button class="lab" onclick="SP.moral(' + i + ')">Moral prüfen</button>' +
   '<span class="' + (c.fuehrer ? "an" : "") + '" onclick="SP.fuehrer(' + i + ')">Anführer tot</span>' +
   '<span class="' + (s.haelfte ? "an" : "") + '">Hälfte ausgeschaltet</span><span class="' + (s.drittel ? "an" : "") + '">⅓ TP übrig</span></div></div>';
 }
 function gewaltHtml(){
  var g = gw(), ini = ["Feinde zuerst", "Gruppe zuerst"], nr = ["1–3", "4–6"];
  return '<div class="spk"><h2>Gewalt</h2><button class="plus" onclick="SP.ende()">Kampf beenden</button></div>' +
   '<div class="ini"><span>Initiative W6</span>' + ini.map(function(t, i){ return '<button class="' + (g.ini === i ? "on" : "") + '" onclick="SP.ini(' + i + ')"><b>' + nr[i] + '</b>' + t + '</button>'; }).join("") + '</div>' +
   g.kr.map(krHtml).join("") + '<button class="dazu" onclick="SP.kreaturForm()">+ Kreatur auf den Tisch</button>';
 }
 SP.ini = function(i){ var g = gw(); g.ini = g.ini === i ? -1 : i; save(); neu(); };
 SP.kb = function(i, e, b){ var c = gw().kr[i]; c.sch[e] = c.sch[e] === b + 1 ? b : b + 1; save(); neu(); };
 SP.fuehrer = function(i){ var c = gw().kr[i]; c.fuehrer = !c.fuehrer; save(); neu(); };
 SP.krDel = function(i){ gw().kr.splice(i, 1); save(); neu(); };
 SP.ende = function(){ if(!gw().kr.length && gw().ini < 0) return; if(confirm("Kampf beenden? Alle Kreaturen verlassen den Tisch.")){ ST.gw = {kr:[], ini:-1}; save(); neu(); } };
 SP.moral = function(i){
  var c = gw().kr[i];
  modal('<h3 class="mt">Moral prüfen · ' + esc(c.t) + '</h3><p>Würfle **2W6**. Ist das Ergebnis größer als der Moralwert (**' + c.moral + '**), ist die Kreatur demoralisiert. Würfle dann W6: **1–3** flieht, **4–6** ergibt sich.</p>'.replace(/\*\*(.+?)\*\*/g, "<b>$1</b>") + pgl(31));
 };
 /* Kreatur auf den Tisch: aus MB_KREATUR (Bauschritt 4) oder frei eingetragen */
 SP.kreaturDazu = function(id, anz){
  var k = MB_KREATUR.filter(function(x){ return x.id === id; })[0]; if(!k) return;
  var n = Math.max(1, anz || 1), sch = []; for(var j = 0; j < n; j++) sch.push(0);
  gw().kr.push({t:k.t, p:k.p, tp:num(k.tp, 1), moral:k.moral, w:k.werte || "", sp:k.spezial || "", img:k.img || "", sch:sch, fuehrer:false}); save(); neu();
 };
 SP.kreaturForm = function(){
  var f = function(id, lab, v, typ){ return '<label>' + lab + '<input id="kf_' + id + '" type="' + (typ || "text") + '" value="' + esc(v) + '"></label>'; };
  var liste = MB_KREATUR.length ? '<div class="kl2">' + MB_KREATUR.map(function(k){ return '<button onclick="document.querySelector(\'.modal\').remove();SP.kreaturDazu(\'' + k.id + '\',1)">' + esc(k.t) + '<i>TP ' + k.tp + '</i></button>'; }).join("") + '</div>' : "";
  document.querySelectorAll(".modal").forEach(function(m){ m.remove(); });
  modal('<div class="fm"><h3 class="mt">Kreatur auf den Tisch</h3>' + liste + f("t", "Name", "") +
   '<div class="row">' + f("tp", "TP", "", "number") + f("moral", "Moral", "", "number") + f("anz", "Anzahl", 1, "number") + '</div>' +
   f("w", "Werte (Rüstung, Angriff …)", "") + f("sp", "Besonderes", "") +
   '<div class="bt"><button class="btn" onclick="SP.kreaturSave()">Auf den Tisch</button></div></div>');
 };
 SP.kreaturSave = function(){
  var v = function(id){ return document.getElementById("kf_" + id).value; };
  var t = v("t").trim(); if(!t) return;
  var n = Math.max(1, Math.min(30, num(v("anz"), 1))), sch = []; for(var j = 0; j < n; j++) sch.push(0);
  gw().kr.push({t:t, p:0, tp:Math.max(1, num(v("tp"), 1)), moral:num(v("moral")), w:v("w").trim(), sp:v("sp").trim(), img:"", sch:sch, fuehrer:false});
  save(); document.querySelector(".modal").remove(); neu();
 };

 /* ---------- Regelspiegel (gelb) ---------- */
 function spiegelHtml(){
  var R = MB_REGELSPIEGEL, cur = ST.sp == null ? 1 : ST.sp; if(!R.tabs[cur]) cur = 0;
  var tabs = R.tabs.map(function(t, i){ return '<button class="' + (i === cur ? "on" : "") + '" onclick="SP.spiegel(' + i + ')">' + t.t + '</button>'; }).join("");
  var inh = R.tabs[cur].x.map(function(a){
   if(a.zw) return '<div class="zw">' + a.zw.map(function(z){ return '<div><span class="etikett">' + esc(z.h) + '</span><p>' + md(z.p) + '</p></div>'; }).join("") + '</div>';
   return '<div class="sec"><span class="etikett">' + esc(a.h) + '</span>' +
    (a.rows ? '<table>' + a.rows.map(function(r){ return '<tr><td>' + esc(r[0]) + '</td><td>' + md(r[1]) + '</td></tr>'; }).join("") + '</table>' : '<p>' + md(a.p) + '</p>') +
    (a.fn ? '<p class="fn">' + md(a.fn) + '</p>' : "") + (a.fnraw ? '<p class="fn">' + esc(a.fnraw) + '</p>' : "") + '</div>';
  }).join("");
  return '<aside class="spiegel"><div class="tabs">' + tabs + pgl(R.p) + '</div>' + inh + '</aside>';
 }
 SP.spiegel = function(i){ ST.sp = i; save(); neu(); };

 VIEWS.spiel = function(){
  return kalHtml() + '<section class="tisch"><div class="sp-gruppe">' + gruppeHtml() + '</div><div class="sp-gewalt">' + gewaltHtml() + '</div>' + spiegelHtml() + '</section>';
 };
})();
