/* Abenteuer – generisch (Datenmodell: plan/dragonbane/ABENTEUER_PLAN.md §2)
   #abenteuer                          Übersicht der Bände (Hover-Bildstreifen)
   #k/<band>[/einf|ab[/<abschnitt>]]   Band-Seite: Einführung · Abenteuer (Bände mit einem Abenteuer springen zur Tafel)
   #a/<id>/<tab>[/<ort>]               Tafel: Lage · <Bereiche> · Reisen · Figuren · Tabellen */
"use strict";
var TAGE = [["morgen","Morgen"],["tag","Tag"],["abend","Abend"],["nacht","Nacht"]];
function zeitST(id){ ST.zeit = ST.zeit || {}; return (ST.zeit[id] = ST.zeit[id] || {t:"tag", v:1}); }
function setZeit(id, k, d){ var z = zeitST(id); if(k === "v"){ z.v = Math.max(0, z.v + d); } else z.t = d; save(); render(); }
function zeitHTML(id){
  var z = zeitST(id);
  return '<div class="zeit"><div class="ta">' + TAGE.map(function(t){ return '<span class="' + (z.t === t[0] ? 'on' : '') + '" onclick="setZeit(\'' + id + '\',\'t\',\'' + t[0] + '\')">' + t[1] + '</span>'; }).join("") + '</div>' +
    '<div class="vt">Viertel <button onclick="setZeit(\'' + id + '\',\'v\',-1)">−</button><b>' + z.v + '</b><button onclick="setZeit(\'' + id + '\',\'v\',1)">+</button></div></div>';
}
function pgn(p){ return pgl(p); }
/* erledigt / markiert / TP / offen */
function toggleDone(k){ ST.done = ST.done || {}; ST.done[k] = !ST.done[k]; save(); render(); }
function markRow(k, i){ ST.mark = ST.mark || {}; ST.mark[k] = ST.mark[k] === i ? -1 : i; save(); render(); }
function tpAdd(id, d, max){ ST.tp = ST.tp || {}; var c = ST.tp[id] == null ? max : ST.tp[id]; ST.tp[id] = Math.max(0, Math.min(max, c + d)); save(); render(); }
function figTog(id, cur){ ST.open = ST.open || {}; ST.open[id] = !cur; save(); render(); }
function ftTog(id, cur){ ST.open = ST.open || {}; ST.open["ft_" + id] = !cur; save(); render(); }
function ftOpen(id, dflt){ var o = (ST.open || {})["ft_" + id]; return o !== undefined ? !!o : dflt; }

/* ---------- Modell-Helfer ---------- */
function advOf(id){ return window.DB_AB && DB_AB[id]; }
function bandAb(b){ return (b.ab || []).map(advOf).filter(Boolean); }
function orteAnz(A){ return (A.bereiche || []).reduce(function(s, b){ return s + (b.orte || []).length; }, 0); }
function kurzTxt(A){ return A.kurz || (orteAnz(A) ? orteAnz(A) + " Orte" : ""); }
function bandBuch(b){ var n = ""; DB_BUECHER.forEach(function(g){ g.items.forEach(function(x){ if(x.id === b.buch) n = x.name; }); }); return n; }
function figIds(A){ return Object.keys(A.figuren || {}); }
function kastIds(A){ return Object.keys(A.kaesten || {}); }
function bereichOf(A, id){ return (A.bereiche || []).filter(function(b){ return b.id === id; })[0]; }
function monP(be){ var m = (window.DB_MON || []).filter(function(x){ return x.id === be; })[0]; return m && m.p; }

/* ---------- Tabellen (W6 / W20), Zeilen anklickbar ---------- */
function w6tab(key, h, cols, rows, p, einl, bk){
  var hit = (ST.mark || {})[key];
  return '<div class="w6box"><div class="h3">' + esc(h) + (p ? pgl(p, null, bk) : "") + '</div>' + (einl ? '<p class="einl">' + md(einl) + '</p>' : '') + '<table class="w6"><tr>' + cols.map(function(c){ return '<th>' + esc(c) + '</th>'; }).join("") + '</tr>' +
    rows.map(function(r, i){
      var cells = typeof r === "string" ? [String(i + 1), r] : r;
      return '<tr class="' + (hit === i ? 'an' : '') + '" onclick="markRow(\'' + key + '\',' + i + ')">' + cells.map(function(c){ return '<td>' + md(c) + '</td>'; }).join("") + '</tr>';
    }).join("") + '</table></div>';
}
function schaetzeHTML(){
  var S = DB_TAB.schaetze;
  return '<div class="w6grid"><div>' + w6tab("sch1", S.t1.h, S.t1.cols, S.t1.rows, S.p, S.einl, "db_rb") + '</div><div>' + w6tab("sch2", S.t2.h, S.t2.cols, S.t2.rows, 122, null, "db_rb") + '</div></div>';
}
function schaetze(){ modal('<div class="titel m" style="margin-bottom:12px">Schätze</div>' + schaetzeHTML(), true); }
function tabKey(A, t){ return t.id + "_" + A.id; }
function tabHTML(A, t){ return w6tab(tabKey(A, t), t.h, t.cols || ["W6", "Ergebnis"], t.rows, t.p, t.einl); }

/* ---------- Blöcke (Format wie Nachschlagen) einspaltig ---------- */
function blk(b){
  if(typeof b === "string") return '<p>' + md(b) + '</p>';
  if(b.h) return '<h3 class="uh">' + esc(b.h) + (b.p ? pgl(b.p) : "") + '</h3>';
  if(b.stein) return '<div class="stein bk"><div class="bh">' + esc(b.stein.h) + '</div>' + b.stein.b.map(blk).join("") + '</div>';
  if(b.karte) return '<div class="karte nkk"><div class="name">' + esc(b.karte.h) + (b.karte.p ? pgl(b.karte.p) : "") + '</div>' + nbody(b.karte.b) + '</div>';
  if(b.zit) return '<div class="vorlesen zit">' + b.zit.map(function(p){ return '<p>' + md(p) + '</p>'; }).join("") + '</div>';
  return nbody([b]);
}

/* ---------- Figuren-Karte ---------- */
function stat(w, f, id){
  if(w[0] === "TP" && f.tp){
    var c = (ST.tp || {})[id]; if(c == null) c = f.tp;
    return '<span class="tpz"><b>TP:</b> <i class="' + (c === 0 ? 'null' : '') + '">' + c + '</i> / ' + f.tp + ' <button onclick="tpAdd(\'' + id + '\',-1,' + f.tp + ')">−</button><button onclick="tpAdd(\'' + id + '\',1,' + f.tp + ')">+</button></span>';
  }
  return '<span><b>' + esc(w[0]) + ':</b> ' + md(w[1]) + '</span>';
}
function nscCard(A, id, kopf){
  var f = A.figuren[id];
  var img = f.img ? '<div class="nkb"><img class="mul vig" src="' + IMG(f.img) + '" alt="' + esc(f.t) + '" onclick="zoom(this.src)"></div>' : "";
  var tab = f.angriffe ? w6tab("ang_" + id, f.angriffe.h, [f.angriffe.w || "W6", "Angriff"], f.angriffe.rows) : "";
  var be = f.be ? '<div class="zl be"><a onclick="event.stopPropagation();go(\'n/be/' + f.be + '\')">Bestiarium' + (monP(f.be) ? ' S. ' + monP(f.be) : '') + '</a></div>' : "";
  var bn = f.t; if(bn.length > 17){ bn = bn.split(/,| des | der | von | vom /)[0]; }
  var voll = bn !== f.t ? '<div class="vollname">' + esc(f.t.slice(bn.length).replace(/^[,\s]+/, "")) + '</div>' : "";
  return '<div class="karte nsc' + (f.angriffe ? ' lang' : '') + '"><div class="band' + (bn.length > 14 ? ' sm' : '') + '" onclick="' + kopf + '">' + esc(bn) + '</div>' + voll +
    '<div class="nk"><div class="nkl">' + ((f.werte || []).length ? '<div class="zl drei">' + f.werte.map(function(w){ return stat(w, f, id); }).join("") + '</div>' : '') +
    (f.zl || []).map(function(z){ return '<div class="zl"><b>' + esc(z[0]) + ':</b> ' + md(z[1]) + '</div>'; }).join("") + be + '</div>' + img + '</div>' +
    ((f.text || []).length ? '<div class="nt">' + f.text.map(function(t){ return '<p>' + md(t) + '</p>'; }).join("") + '</div>' : '') + tab +
    '<div class="kr u"><i></i><u></u><i></i></div></div>';
}
function steinBox(w, kopf){
  return '<div class="stein"><div class="bh"' + (kopf ? ' onclick="' + kopf + '"' : '') + '>' + esc(w.k) + '</div>' +
    w.b.map(function(b){ return b.ul ? '<ul class="sl">' + b.ul.map(function(x){ return '<li>' + md(x) + '</li>'; }).join("") + '</ul>' : blk(b); }).join("") + '</div>';
}
function strip(label, p, onclick, st, an){
  return '<div class="zu' + (st ? ' st' : '') + (an ? ' an' : '') + '" onclick="' + onclick + '">' + esc(label) + (p ? '<span class="s">S. ' + p + '</span>' : '') + '</div>';
}
function isOpen(id, ort){ var o = (ST.open || {})[id]; return o !== undefined ? !!o : !!(ort && (ort.wesen || []).indexOf(id) >= 0); }
/* Figuren-Karten im Raster (Figuren-/Reisen-Tab): bis 6 offen, sonst zugeklappt (Klick öffnet) */
function figZelle(A, id, dflt){
  var f = A.figuren[id];
  return ftOpen(id, dflt) ? nscCard(A, id, "ftTog('" + id + "',true)") : strip(f.t, f.p, "ftTog('" + id + "',false)");
}

/* ---------- Übersicht ---------- */
function rahmenHTML(inner){ return '<div class="rahmen">' + inner + '<i class="ro"></i><i class="ru"></i><i class="rl"></i><i class="rr"></i><i class="e1"></i><i class="e2"></i><i class="e3"></i><i class="e4"></i></div>'; }
function bandGo(b){ return b.ab.length === 1 && !b.setting ? "a/" + b.ab[0] + "/lage" : "k/" + b.id; }
function bandAktiv(){ var m = /^a\/([^\/]+)\//.exec(ST.last || ""); var A = m && advOf(m[1]); return A ? A.band : null; }
function bildStreifen(items, akt){
  if(!akt) akt = items[0] && items[0].id;
  return '<div class="bs">' + items.map(function(it){
    return '<a class="bi' + (it.id === akt ? ' akt' : '') + (it.stub ? ' stub' : '') + '" onclick="go(\'' + it.go + '\')"><div class="bb">' +
      (it.img ? '<img class="bimg' + (it.mul ? ' mul' : '') + '" src="' + IMG(it.img) + '" alt="">' : '<div class="bimg leer"></div>') + '</div>' +
      '<div class="bv">' + esc(it.t) + '</div><div class="bl"><div class="fluegel"><div class="fl"></div><div class="fm' + (it.t.length > 20 ? ' lg' : '') + '"><span>' + esc(it.t) + '</span></div><div class="fr"></div></div>' +
      (it.q ? '<div class="bq">' + esc(it.q) + (it.p ? pgl(it.p, null, it.buch) : '') + '</div>' : '') + '</div></a>';
  }).join("") + '</div>';
}
DB_VIEWS.abenteuer = function(){
  var akt = bandAktiv();
  var items = DB_BAENDE.filter(function(b){ return !b.setting; }).map(function(b){
    var a = bandAb(b), q = bandBuch(b), n = b.ab.length;
    var z = n > 1 ? n + " Abenteuer" : (a[0] && kurzTxt(a[0]));
    return {id:b.id, t:b.t, img:b.img, go:bandGo(b), buch:b.buch, mul:b.mul, q:(q === b.t ? "" : q) + (z ? (q === b.t ? "" : " · ") + z : "")};
  });
  var weiter = ST.last && /^a\//.test(ST.last) && ST.lastName ? '<span class="weiter" onclick="go(\'' + ST.last + '\')">Weiter · ' + esc(ST.lastName) + '</span>' : '';
  return '<div class="kt"><i class="a"></i><span class="titel m">Abenteuer</span><i class="b"></i></div>' +
    (weiter ? '<div class="wz">' + weiter + '</div>' : '') + bildStreifen(items, akt) +
    '<div class="zus"><span class="kap">Unterwegs</span><a onclick="go(\'n/ab/missgeschicke\')">Reisen &amp; Missgeschicke</a><a onclick="go(\'n/ta/schaetze\')">Schätze</a><a onclick="go(\'n/ab/nsc\')">NSC erschaffen</a></div>';
};

/* ---------- Band-Seite ---------- */
DB_VIEWS.k = function(h){
  var b = DB_BAND[h[1]]; if(!b) return viewStart();
  if(b.ab.length === 1 && !(b.setting && b.einf && b.einf.length)){ location.replace("#a/" + b.ab[0] + "/lage"); return ""; }
  window.__bk = b.buch; window.__fk = "ab";
  if(b.id === "dk" && h[2] !== "einf" && h[2] !== "ab") return nebeltalKarte(b);
  var has = b.einf && b.einf.length, tab = h[2] === "einf" || h[2] === "ab" ? h[2] : (has ? "einf" : "ab");
  var tl = [["einf", "Einführung"], ["ab", "Abenteuer"]]; if(b.setting) tl.unshift(["arkand", "Karte"]);
  if(b.id === "dk") tl = [["karte", "Karte"], ["einf", "Einführung"], ["ab", "Abenteuer"]];
  var tb = tabs(tl, tab, function(t){ return t === "arkand" ? "arkand" : "k/" + b.id + (t === "karte" ? "" : "/" + t); });
  return tb + (tab === "ab" ? bandAbTab(b) : einfTab(b, h[3]));
};
function einfTab(b, sec){
  var bild = b.img && !b.setting ? '<div class="bildr">' + rahmenHTML('<img class="bild mul" src="' + IMG(b.img) + '" alt="">') + '</div>' : "";
  var e = b.einf || [];
  if(e.length && e[0] && e[0].b && e[0].t){
    var cur = e.filter(function(s){ return s.id === sec; })[0] || e[0], first = cur === e[0];
    var side = '<nav class="side">' + e.map(function(s){ return '<a class="' + (s === cur ? 'on' : '') + '" href="#k/' + b.id + '/einf/' + s.id + '"><span>' + esc(kurz(s.t)) + '</span>' + (s.p ? '<i>S. ' + s.p + '</i>' : '') + '</a>'; }).join("") + '</nav>';
    var inh = '<div class="kopf"><h1>' + esc(cur.t) + '</h1>' + (cur.p ? pgl(cur.p) : "") + '</div>' + nabs({b:cur.b});
    return lay(side, first && bild ? '<div class="einf"><div class="eb">' + bild + '</div><div class="et">' + inh + '</div></div>' : inh);
  }
  if(!e.length) return '<div class="einf leer1"><div class="eb">' + bild + '</div></div>';
  return '<div class="einf"><div class="eb">' + bild + '</div><div class="et">' + nabs({b:e}) + '</div></div>';
}
function bandAbTab(b){
  var L = bandAb(b), akt = (/^a\/([^\/]+)\//.exec(ST.last || "") || [])[1];
  if(L.length <= 6 && L.some(function(A){ return A.img; })) return '<div class="bsw">' + bildStreifen(L.map(function(A){ return {id:A.id, t:A.t, img:A.img, go:"a/" + A.id + "/lage", stub:A.stub, mul:A.mul || b.mul, q:"S. " + A.p + (kurzTxt(A) ? " · " + kurzTxt(A) : "")}; }), akt) + '</div>';
  return '<div class="kach">' + L.map(function(A){
    return '<a class="kk' + (A.stub ? ' stub' : '') + (A.id === akt ? ' akt' : '') + '" onclick="go(\'a/' + A.id + '/lage\')"><div class="kb' + (A.img ? '' : ' nb') + '">' + (A.img ? '<img src="' + IMG(A.img) + '" alt="">' : '') + '</div>' +
      '<div class="kn">' + esc(A.t) + '</div><div class="kq">S. ' + A.p + (kurzTxt(A) ? ' · ' + esc(kurzTxt(A)) : '') + '</div></a>';
  }).join("") + '</div>';
}

/* ---------- Tafel ---------- */
DB_VIEWS.a = function(h){
  var A = advOf(h[1]); if(!A) return viewStart();
  window.__bk = A.buch; window.__fk = "ab";
  if(A.stub) return '<div class="stubseite"><div class="titel">' + esc(A.t) + '</div><div class="kap">' + esc(bandBuch(DB_BAND[A.band] || {buch:A.buch})) + pgl(A.p) + '</div></div>';
  var tl = [["lage", "Lage"]].concat((A.bereiche || []).map(function(b){ return [b.id, b.t]; }));
  if(A.reisen) tl.push(["reisen", "Reisen"]);
  if(figIds(A).length || kastIds(A).length) tl.push(["figuren", "Figuren"]);
  tl.push(["tabellen", "Tabellen"]);
  var tab = h[2] || "lage", body, B = bereichOf(A, tab);
  if(B) body = bereichTab(A, B, h[3]);
  else if(tab === "reisen" && A.reisen) body = reisenTab(A);
  else if(tab === "figuren") body = figurenTab(A);
  else if(tab === "tabellen") body = tabellenTab(A);
  else { tab = "lage"; body = lageTab(A); }
  return tabs(tl, tab, function(t){ return "a/" + A.id + "/" + t; }, zeitHTML(A.id) + penTab("a_" + A.id)) + body;
};
/* Aufeinanderfolgende Textblöcke (.ab) zu einer Gruppe verbinden, damit sie im Raster nicht auseinandergerissen werden */
function abGruppen(html){
  var d = document.createElement("div"); d.innerHTML = html;
  var g = d.querySelector(".gr"); if(!g) return html;
  var kids = Array.prototype.slice.call(g.children), grp = null;
  kids.forEach(function(k){
    if(k.classList.contains("ab")){ if(!grp){ grp = document.createElement("div"); grp.className = "abg"; g.insertBefore(grp, k); } grp.appendChild(k); } else grp = null;
  });
  return d.innerHTML;
}
/* Karte(n) des Abenteuers gleich auf der Lage-Seite: Klick aufs Bild öffnet den Orte-Reiter, bei mehreren Karten Umschalter über dem Bild */
function lageKarten(A){
  var L = (A.bereiche || []).filter(function(b){ return b.karte && b.karte.img; });
  if(!L.length) return "";
  var id = "lk_" + A.id.replace(/\W/g, "_");
  var bilder = L.map(function(b, i){
    return '<div class="lkb' + (i ? ' aus' : '') + '" data-i="' + i + '" onclick="go(\'a/' + A.id + '/' + b.id + '\')">' + '<img class="bild" src="' + IMG(b.karte.img) + '" alt="">' + '</div>';
  }).join("");
  var chips = L.length > 1 ? '<div class="lkt">' + L.map(function(b, i){ return '<span class="' + (i ? '' : 'on') + '" onclick="lageKarte(this,' + i + ')">' + esc(b.t) + '</span>'; }).join("") + '</div>' : "";
  return '<div class="lk" id="' + id + '">' + chips + bilder + '</div>';
}
function lageKarte(el, i){
  var w = el.closest(".lk"); if(!w) return;
  Array.prototype.forEach.call(w.querySelectorAll(".lkt span"), function(c, j){ c.classList.toggle("on", j === i); });
  Array.prototype.forEach.call(w.querySelectorAll(".lkb"), function(c, j){ c.classList.toggle("aus", j !== i); });
}
function lageTab(A){
  var bl = (A.lage || []).concat(A.schluss || []), cells = (nabs({b:bl}).match(/class="(ab|zelle|karte|kgrid|vorlesen)/g) || []).length;
  var kk = lageKarten(A), links = (A.img && !kk ? '<div class="bildr">' + rahmenHTML('<img class="bild mul" src="' + IMG(A.img) + '" alt="" onclick="event.stopPropagation()">') + '</div>' : '') + kk + (A.vl ? '<div class="vorlesen">' + md(A.vl) + '</div>' : '');
  var hint = A.hinweis ? '<div class="hint">' + A.hinweis.map(function(t){ return '<p>' + md(t) + '</p>'; }).join("") + '</div>' : '';
  if(links && cells >= 3){
    /* Links: Bild + Kästen/Karten untereinander, rechts: Text – beide Spalten ähnlich lang, keine Leerfläche */
    var d = document.createElement("div"); d.innerHTML = nabs({b:bl, plain:false});
    var g = d.querySelector(".gr"), txt = "", box = "";
    if(g) Array.prototype.forEach.call(g.children, function(k){ if(k.classList.contains("ab")) txt += k.outerHTML; else box += k.outerHTML; });
    return '<div class="lage zw"><div class="lg1">' + links + '</div><div class="lg2"><div class="lg3">' + hint + '<div class="lgt">' + txt + '</div></div></div>' + (box ? '<div class="lgb" data-mas data-mas-gap="26">' + box + '</div>' : '') + '</div>';
  }
  var rechts = hint + nabs({b:bl, plain:true});
  return '<div class="lage' + (links ? '' : ' ohne') + (cells < 3 ? ' es' : '') + '">' + (links ? '<div class="lg1">' + links + '</div>' : '') + '<div class="lg2"><div class="lg3 einsp">' + rechts + '</div></div></div>';
}
function bereichTab(A, B, sel){
  var key = A.bereiche.length > 1 ? A.id + "/" + B.id : A.id, orte = B.orte || [];
  ST.ort = ST.ort || {};
  var o = orte.filter(function(x){ return String(x.n) === String(sel || ST.ort[key]); })[0] || orte[0];
  if(!o) return '<div class="leer"></div>';
  ST.ort[key] = o.n;
  ST.last = "a/" + A.id + "/" + B.id + "/" + o.n; ST.lastName = A.t + " · " + (o.n ? o.n + ". " : "") + o.t; save();
  var hash = function(x){ return "a/" + A.id + "/" + B.id + "/" + x.n; };
  var karte = B.karte && B.karte.img;
  var pins = karte ? orte.filter(function(p){ return p.pin; }).map(function(p){ var ps = Array.isArray(p.pin[0]) ? p.pin : [p.pin]; return ps.map(function(q){ return '<span class="pin' + (p === o ? ' on' : '') + '" style="left:' + q[0] + '%;top:' + q[1] + '%" onclick="go(\'' + hash(p) + '\')">' + esc(p.n) + '</span>'; }).join(""); }).join("") : "";
  var liste = orte.map(function(p){ return '<div class="' + (p === o ? 'on' : '') + '" onclick="go(\'' + hash(p) + '\')">' + (p.n ? '<b>' + esc(p.n) + '</b>' : '') + '<span>' + esc(p.t) + '</span></div>'; }).join("");
  var st = (o.st || []).map(function(e, i){
    var k = A.id + "_o" + o.n + "_" + i, weg = e.r && (ST.done || {})[k];
    return '<li class="' + (e.r ? 'rot' : '') + (weg ? ' weg' : '') + '"' + (e.r ? ' onclick="toggleDone(\'' + k + '\')"' : '') + '><b>' + esc(e.k) + ':</b> ' + md(e.x) + '</li>';
  }).join("");
  /* Wesen/Kästen: offen die des Ortes, übrige zugeklappt (bei > 12 nur die des Bereichs) */
  var alle = figIds(A).concat(kastIds(A)), ids = alle;
  if(alle.length > 12){ var u = {}; orte.forEach(function(p){ (p.wesen || []).forEach(function(w){ u[w] = 1; }); }); ids = alle.filter(function(x){ return u[x]; }); }
  var rOpen = "", rZu = "", extra = (o.b || []).filter(function(x){ return x.stein; }).map(blk).join("");
  ids.forEach(function(id){
    var kast = !(A.figuren && A.figuren[id]), f = kast ? A.kaesten[id] : A.figuren[id], op = isOpen(id, o), breit = kast || f.angriffe;
    if(op && breit){ extra += kast ? steinBox(f, "figTog('" + id + "',true)") : nscCard(A, id, "figTog('" + id + "',true)"); rZu += strip(kast ? f.k : f.t, f.p, "figTog('" + id + "',true)", kast, 1); }
    else if(op) rOpen += nscCard(A, id, "figTog('" + id + "',true)");
    else rZu += strip(kast ? f.k : f.t, f.p, "figTog('" + id + "',false)", kast);
  });
  (A.tabellen || []).forEach(function(t){ if(t.strip) rZu += strip(t.strip, t.p, "go('a/" + A.id + "/tabellen')"); });
  return '<div class="tafel' + (karte ? '' : ' ohnekarte') + '"><div class="tl">' + (karte ? '<div class="plan"><img class="mul" src="' + IMG(B.karte.img) + '" alt="">' + pins + '</div>' : '') + '<div class="orte' + (karte ? '' : ' eins') + '">' + liste + '</div></div>' +
    '<div class="ort">' + (B.einl ? '<p class="bein">' + md(B.einl) + '</p>' : '') + '<div class="titel m">' + (o.n ? esc(o.n) + '. ' : '') + esc(o.t) + pgl(o.p) + '</div>' + (o.vl ? '<div class="vorlesen">' + md(o.vl) + '</div>' : '') +
    (st ? '<ul class="st">' + st + '</ul>' : '') + (o.b ? '<div class="ob">' + o.b.filter(function(x){ return !x.stein; }).map(blk).join("") + '</div>' : '') + (o.nach ? '<p class="nach">' + md(o.nach) + '</p>' : '') + '</div>' +
    '<div class="rechts">' + (rOpen ? '<div class="rg">' + rOpen + '</div>' : '') + (rZu ? '<div class="rs">' + rZu + '</div>' : '') + '</div>' + (extra ? '<div class="extra" data-mas data-mas-gap="40">' + extra + '</div>' : '') + '</div>';
}
function reisenTab(A){
  var R = A.reisen, fg = R.figuren || [], tb = (R.tabellen || []).map(function(t){ return typeof t === "string" ? (A.tabellen || []).filter(function(x){ return x.id === t; })[0] : t; }).filter(Boolean);
  return '<div class="reisen">' + ((R.b || []).length ? '<div class="rb">' + nabs({b:R.b}) + '</div>' : '') +
    (tb.length ? '<div class="tgrid">' + tb.map(function(t){ return '<div>' + tabHTML(A, t) + '</div>'; }).join("") + '</div>' : '') +
    (fg.length ? '<div class="fgrid">' + fg.map(function(id){ return A.figuren[id] ? '<div class="' + (A.figuren[id].angriffe ? 'lang' : '') + '">' + figZelle(A, id, fg.length <= 6) + '</div>' : ''; }).join("") + '</div>' : '') + '</div>';
}
function figurenTab(A){
  var ids = figIds(A), n = ids.length;
  var cards = ids.map(function(id){ return figZelle(A, id, n <= 6); }).join("");
  var k = kastIds(A).map(function(id){ return '<div class="fw">' + steinBox(A.kaesten[id]) + '</div>'; }).join("");
  return '<div class="fgrid' + (n > 6 ? ' zu1' : '') + '">' + cards + k + '</div>';
}
function tabellenTab(A){
  var S = DB_TAB.schaetze;
  var t = (A.tabellen || []).map(function(x){ return '<div>' + tabHTML(A, x) + '</div>'; }).join("") +
    '<div>' + w6tab("sch1", S.t1.h, S.t1.cols, S.t1.rows, S.p, S.einl, "db_rb") + '</div><div>' + w6tab("sch2", S.t2.h, S.t2.cols, S.t2.rows, 122, null, "db_rb") + '</div>';
  var hd = (A.handouts || []).length ? '<div class="hgrid">' + A.handouts.map(function(x){
    return '<figure class="hd"><img class="mul" src="' + IMG(x.img) + '" alt="' + esc(x.t) + '" onclick="zoom(this.src)"><figcaption>' + esc(x.t) + (x.p ? pgl(x.p) : "") + '</figcaption></figure>'; }).join("") + '</div>' : "";
  return '<div class="tgrid">' + t + '</div>' + hd;
}

/* ---------- Nebeltal-Karte als Startseite des Abenteuerbands ---------- */
/* Klickflächen über den eingedruckten Kartenbeschriftungen: [Abenteuer-Id, x %, y %, Breite %] */
var NEBELTAL_PINS = [
  ["dk-eroeffnung", 43.4, 89.4, 8.8], ["nebelinsel", 39.1, 14.1, 10.6], ["purpurflamme", 58.9, 25.3, 17.8], ["vortag", 78.8, 23.2, 15.8],
  ["malus", 11.7, 13.6, 7.8], ["trollspitze", 11.9, 27.6, 8.6], ["seufzer", 87.7, 48.1, 11], ["orakel", 9.2, 51.4, 8.6],
  ["wegesende", 75.7, 57.1, 10.6], ["ridderhoehe", 32.6, 58.2, 9.6], ["aussenposten", 56.7, 65, 7.2], ["bothild", 10.5, 75.3, 10.4], ["totaugen", 74.4, 90.6, 10.6]
];
function nebeltalKarte(b){
  var pins = NEBELTAL_PINS.map(function(q){
    var A = advOf(q[0]); if(!A) return "";
    return '<a class="npin" style="left:' + q[1] + '%;top:' + q[2] + '%;width:' + q[3] + '%" onclick="go(\'a/' + q[0] + '/lage\')"><span>' + esc(A.t) + (A.p ? ' · S. ' + A.p : '') + '</span></a>';
  }).join("");
  var tl = [["karte", "Karte"], ["einf", "Einführung"], ["ab", "Abenteuer"]];
  var reisen = advOf("nebeltal-reisen");
  return tabs(tl, "karte", function(t){ return "k/" + b.id + (t === "karte" ? "" : "/" + t); }, reisen ? '<a class="tab" onclick="go(\'a/nebeltal-reisen/lage\')">Reisen</a>' : "") +
    '<div class="ntk"><div class="ntw"><img class="mul" src="' + IMG("abenteuer/dk-nebeltal-karte") + '" alt="">' + pins + '</div></div>';
}
