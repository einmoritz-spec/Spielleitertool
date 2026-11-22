/* Abenteuer: Übersicht (#abenteuer) und Tafel (#a/<id>/<tab>[/<ort>]); Tabs: Lage · Die Burg · Figuren · Tabellen */
"use strict";
var TAGE = [["morgen","Morgen"],["tag","Tag"],["abend","Abend"],["nacht","Nacht"]];
var FIG_ORDER = ["goblins","jaldo","grunta","raubritter"];
function zeitST(id){ ST.zeit = ST.zeit || {}; return (ST.zeit[id] = ST.zeit[id] || {t:"tag", v:1}); }
function setZeit(id, k, d){ var z = zeitST(id); if(k === "v"){ z.v = Math.max(0, z.v + d); } else z.t = d; save(); render(); }
function zeitHTML(id){
  var z = zeitST(id);
  return '<div class="zeit"><div class="ta">' + TAGE.map(function(t){ return '<span class="' + (z.t === t[0] ? 'on' : '') + '" onclick="setZeit(\'' + id + '\',\'t\',\'' + t[0] + '\')">' + t[1] + '</span>'; }).join("") + '</div>' +
    '<div class="vt">Viertel <button onclick="setZeit(\'' + id + '\',\'v\',-1)">−</button><b>' + z.v + '</b><button onclick="setZeit(\'' + id + '\',\'v\',1)">+</button></div></div>';
}
function pgn(p){ return pgl(p); }
/* erledigt / markiert */
function toggleDone(k){ ST.done = ST.done || {}; ST.done[k] = !ST.done[k]; save(); render(); }
function markRow(k, i){ ST.mark = ST.mark || {}; ST.mark[k] = ST.mark[k] === i ? -1 : i; save(); render(); }
function tpAdd(id, d, max){ ST.tp = ST.tp || {}; var c = ST.tp[id] == null ? max : ST.tp[id]; ST.tp[id] = Math.max(0, Math.min(max, c + d)); save(); render(); }
function figTog(id, cur){ ST.open = ST.open || {}; ST.open[id] = !cur; save(); render(); }

/* ---------- Tabellen (W6 / W20), Zeilen anklickbar ---------- */
function w6tab(key, h, cols, rows, p, einl){
  var hit = (ST.mark || {})[key];
  return '<div class="w6box"><div class="h3">' + esc(h) + (p ? pgl(p) : "") + '</div>' + (einl ? '<p class="einl">' + md(einl) + '</p>' : '') + '<table class="w6"><tr>' + cols.map(function(c){ return '<th>' + esc(c) + '</th>'; }).join("") + '</tr>' +
    rows.map(function(r, i){
      var cells = typeof r === "string" ? [String(i + 1), r] : r;
      return '<tr class="' + (hit === i ? 'an' : '') + '" onclick="markRow(\'' + key + '\',' + i + ')">' + cells.map(function(c){ return '<td>' + md(c) + '</td>'; }).join("") + '</tr>';
    }).join("") + '</table></div>';
}
function schaetzeHTML(){
  var S = DB_TAB.schaetze;
  return '<div class="w6grid"><div>' + w6tab("sch1", S.t1.h, S.t1.cols, S.t1.rows, S.p, S.einl) + '</div><div>' + w6tab("sch2", S.t2.h, S.t2.cols, S.t2.rows, 122) + '</div></div>';
}
function schaetze(){ modal('<div class="titel m" style="margin-bottom:12px">Schätze</div>' + schaetzeHTML(), true); }

/* ---------- NSC-Karte ---------- */
function stat(w, f, id){
  if(w[0] === "TP" && f.tp){
    var c = (ST.tp || {})[id]; if(c == null) c = f.tp;
    return '<span class="tpz"><b>TP:</b> <i class="' + (c === 0 ? 'null' : '') + '">' + c + '</i> / ' + f.tp + ' <button onclick="tpAdd(\'' + id + '\',-1,' + f.tp + ')">−</button><button onclick="tpAdd(\'' + id + '\',1,' + f.tp + ')">+</button></span>';
  }
  return '<span><b>' + esc(w[0]) + ':</b> ' + md(w[1]) + '</span>';
}
function nscCard(id, open){
  var f = DB_AB.burg.figuren[id];
  var img = f.img ? '<div class="nkb"><img class="' + 'mul ' + 'vig" src="' + IMG(f.img) + '" alt="' + esc(f.t) + '" onclick="zoom(this.src)"></div>' : "";
  var tab = f.angriffe ? w6tab("ang_" + id, f.angriffe.h, ["W6", "Angriff"], f.angriffe.rows) : "";
  return '<div class="karte nsc' + (f.angriffe ? ' lang' : '') + '"><div class="band" onclick="figTog(\'' + id + '\',true)" title="">' + esc(f.t) + '</div>' +
    '<div class="nk"><div class="nkl"><div class="zl drei">' + f.werte.map(function(w){ return stat(w, f, id); }).join("") + '</div>' +
    f.zl.map(function(z){ return '<div class="zl"><b>' + esc(z[0]) + ':</b> ' + md(z[1]) + '</div>'; }).join("") + '</div>' + img + '</div>' +
    '<div class="nt">' + f.text.map(function(t){ return '<p>' + md(t) + '</p>'; }).join("") + '</div>' + tab +
    '<div class="kr u"><i></i><u></u><i></i></div></div>';
}
function steinBox(w, kopf){
  return '<div class="stein"><div class="bh" onclick="figTog(\'wacht\',true)">' + esc(w.k) + '</div>' +
    w.b.map(function(b){ return typeof b === "string" ? '<p>' + md(b) + '</p>' : '<ul class="sl">' + b.ul.map(function(x){ return '<li>' + md(x) + '</li>'; }).join("") + '</ul>'; }).join("") + '</div>';
}
function strip(label, p, onclick, st, an){
  return '<div class="zu' + (st ? ' st' : '') + (an ? ' an' : '') + '" onclick="' + onclick + '">' + esc(label) + (p ? '<span class="s">S. ' + p + '</span>' : '') + '</div>';
}
function isOpen(id, ort){ var o = (ST.open || {})[id]; return o !== undefined ? !!o : !!(ort && ort.wesen.indexOf(id) >= 0); }

/* ---------- Übersicht ---------- */
function rahmenHTML(inner){ return '<div class="rahmen">' + inner + '<i class="ro"></i><i class="ru"></i><i class="rl"></i><i class="rr"></i><i class="e1"></i><i class="e2"></i><i class="e3"></i><i class="e4"></i></div>'; }
DB_VIEWS.abenteuer = function(){
  var A = DB_AB.burg;
  var weiter = ST.last && /^a\/burg\//.test(ST.last) ? ST.last : "a/burg/lage";
  var wtxt = ST.last && /^a\/burg\//.test(ST.last) ? "Weiter · " + (ST.lastName || "").split(" · ").pop() : "Beginnen";
  var orte = A.orte.map(function(o){ return '<a class="ol" onclick="go(\'a/burg/orte/' + o.n + '\')"><b>' + o.n + '</b><span>' + esc(o.t) + '</span></a>'; }).join("");
  var figs = FIG_ORDER.map(function(id){ var f = A.figuren[id]; return '<a class="fp" onclick="go(\'a/burg/figuren\')"><img class="' + 'mul ' + 'vig" src="' + IMG(f.img) + '" alt=""><span>' + esc(f.t) + '</span></a>'; }).join("");
  return '<div class="kt"><i class="a"></i><span class="titel m">Abenteuer</span><i class="b"></i></div>' +
    '<div class="halle"><div class="haupt"><div class="fluegel"><div class="fl"></div><div class="fm"><span>' + esc(A.t) + '</span></div><div class="fr"></div></div>' +
    '<div class="bildr" onclick="go(\'a/burg/lage\')">' + rahmenHTML('<img class="bild mul" src="' + IMG(A.img) + '" alt="">') + '</div>' +
    '<div class="meta"><span class="q">' + A.q + pgl(A.p) + ' · ' + A.orte.length + ' Orte</span><span class="weiter" onclick="go(\'' + weiter + '\')">' + esc(wtxt) + '</span></div></div>' +
    '<div class="rest"><div><div class="kap">Orte</div><div class="og">' + orte + '</div></div>' +
    '<div><div class="kap">Figuren</div><div class="fg">' + figs + '</div></div>' +
    '<div class="zus"><span class="kap">Unterwegs</span><a onclick="schaetze()">Schätze</a></div></div></div>';
};

/* ---------- Tafel ---------- */
DB_VIEWS.a = function(h){
  var A = DB_AB[h[1]]; if(!A) return viewStart();
  var tab = h[2] || "lage", tl = [["lage","Lage"],["orte",A.tab],["figuren","Figuren"],["tabellen","Tabellen"]];
  var body;
  if(tab === "lage") body = lageTab(A);
  else if(tab === "figuren") body = figurenTab(A);
  else if(tab === "tabellen") body = tabellenTab(A);
  else { tab = "orte"; body = orteTab(A, h[3]); }
  return tabs(tl, tab, function(t){ return "a/" + A.id + "/" + t; }, zeitHTML(A.id) + penTab("a_" + A.id)) + body;
};
function lageTab(A){
  return '<div class="lage"><div class="lg1"><div class="bildr">' + rahmenHTML('<img class="bild mul" src="' + IMG(A.img) + '" alt="" onclick="event.stopPropagation()">') + '</div>' +
    '<div class="vorlesen">' + md(A.vl) + '</div></div>' +
    '<div class="lg2"><div class="lg3"><div class="hint">' + A.hinweis.map(function(t){ return '<p>' + md(t) + '</p>'; }).join("") + '</div>' +
    '<div class="h3 t">Die Lage' + pgl(114) + '</div>' + A.lage.map(function(t){ return '<p>' + md(t) + '</p>'; }).join("") + '</div></div></div>';
}
function orteTab(A, sel){
  var n = parseInt(sel, 10) || (ST.ort && ST.ort[A.id]) || 1; if(n < 1 || n > A.orte.length) n = 1;
  ST.ort = ST.ort || {}; ST.ort[A.id] = n;
  var o = A.orte[n - 1];
  ST.last = "a/" + A.id + "/orte/" + n; ST.lastName = A.t + " · " + n + ". " + o.t; save();
  var pins = A.orte.map(function(p){ return '<span class="pin' + (p.n === n ? ' on' : '') + '" style="left:' + p.pin[0] + '%;top:' + p.pin[1] + '%" onclick="go(\'a/' + A.id + '/orte/' + p.n + '\')">' + p.n + '</span>'; }).join("");
  var liste = A.orte.map(function(p){ return '<div class="' + (p.n === n ? 'on' : '') + '" onclick="go(\'a/' + A.id + '/orte/' + p.n + '\')"><b>' + p.n + '</b><span>' + esc(p.t) + '</span></div>'; }).join("");
  var st = o.st.map(function(e, i){
    var k = A.id + "_o" + n + "_" + i, weg = e.r && (ST.done || {})[k];
    return '<li class="' + (e.r ? 'rot' : '') + (weg ? ' weg' : '') + '"' + (e.r ? ' onclick="toggleDone(\'' + k + '\')"' : '') + '><b>' + esc(e.k) + ':</b> ' + md(e.x) + '</li>';
  }).join("");
  var rechts = "", extra = "";
  FIG_ORDER.concat(["wacht"]).forEach(function(id){
    var f = id === "wacht" ? A.wacht : A.figuren[id], op = isOpen(id, o), breit = id === "raubritter" || id === "wacht";
    var lab = id === "wacht" ? f.k : f.t;
    if(op && breit){ extra += id === "wacht" ? steinBox(f) : nscCard(id); rechts += strip(lab, f.p, "figTog('" + id + "',true)", id === "wacht", 1); }
    else if(op) rechts += nscCard(id);
    else rechts += strip(lab, f.p, "figTog('" + id + "',false)", id === "wacht");
  });
  rechts += strip("Zufallsereignisse · W6", 115, "go('a/" + A.id + "/tabellen')");
  return '<div class="tafel"><div class="tl"><div class="plan"><img class="mul" src="' + IMG(A.karte) + '" alt="">' + pins + '</div><div class="orte">' + liste + '</div></div>' +
    '<div class="ort"><div class="titel m">' + n + '. ' + esc(o.t) + pgl(o.p) + '</div><div class="vorlesen">' + md(o.vl) + '</div><ul class="st">' + st + '</ul>' + (o.nach ? '<p class="nach">' + md(o.nach) + '</p>' : '') + '<div class="extra">' + extra + '</div></div>' +
    '<div class="rechts">' + rechts + '</div></div>';
}
function figurenTab(A){
  var cards = FIG_ORDER.map(function(id){ return nscCard(id); }).join("");
  return '<div class="fgrid">' + cards + '<div class="fw">' + steinBox(A.wacht) + '</div></div>';
}
function tabellenTab(A){
  var E = A.ereignisse, S = DB_TAB.schaetze;
  return '<div class="tgrid"><div>' + w6tab("ereig_" + A.id, E.h, ["W6", "Ereignis"], E.rows, E.p, E.einl) + '</div><div>' + w6tab("sch1", S.t1.h, S.t1.cols, S.t1.rows, S.p, S.einl) + '</div><div>' + w6tab("sch2", S.t2.h, S.t2.cols, S.t2.rows, 122) + '</div></div>';
}
