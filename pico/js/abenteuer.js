/* Pico – Abenteuer-Ansicht: #abenteuer · #abenteuer/<id>/<tab>/<sel> (tabs: vorbereitung, schauplaetze, kaefer, nsc) */
var AB_TABS = [["vorbereitung", "Vorbereitung"], ["schauplaetze", "Schauplätze"], ["kaefer", "Käfer"], ["nsc", "NSC"]];
function abS(){ ST.ab = ST.ab || {}; return ST.ab; }
function abPg(h){ return h.replace(/(^|[^>])S\. (\d{1,3})(?:–\d+)?/g, function(m, a, n){ return a + pgl(n); }); }
function abMd(s){ return abPg(md(s)); }
function abSvg(id){ return "img/abenteuer/" + id + ".svg"; }

/* ---- Buchdaten nachschlagen ---- */
function abCard(name){
  var hit = null;
  (PI_NACH.kaefer ? PI_NACH.kaefer.kapitel : []).filter(function(k){ return N_ASP.indexOf(k.id) >= 0; }).some(function(k){
    return (k.b || []).some(function(b){ if(!b || b.t !== "cards") return false;
      return b.x.some(function(c){ var t = c.t.split(" (")[0]; if(t === name){ hit = c; hit._p = c.p || k.n || k.p; return true; } return false; }); });
  });
  return hit;
}
function abHerz(k){ var m = String(k || "").replace(/\s/g, "").match(/[♥•]*♥[♥•]*/); return m ? m[0] : ""; }
function abMood(name){
  var k = (PI_NACH.kaefer ? PI_NACH.kaefer.kapitel : []).filter(function(x){ return x.id === "stimmungen"; })[0], r = "";
  if(k) k.b.forEach(function(b){ if(b && b.t === "dl") b.x.forEach(function(x){ if(x[0] === name) r = x[1]; }); });
  return r;
}
function abKosten(K){
  var a = 0; K.asp.forEach(function(x){ a += 3 + (x[1].length - 1) * 2; });
  var s = 0; Object.keys(K.sk).forEach(function(n){ var r = K.sk[n]; s += r === 1 ? 1 : r === 2 ? 3 : 6; });
  return [a, s];
}

/* ---- Bausteine ---- */
function abBlk(A, L){
  return (L || []).map(function(b){
    if(b && typeof b === "object") switch(b.t){
      case "lese": return '<div class="ablese">' + abMd(b.x) + '</div>';
      case "ablauf": return abAblauf(A);
      case "skal": return '<div class="abtbl"><table>' + A.skal.map(function(r, i){ return '<tr>' + r.map(function(c, j){ return i === 0 || j === 0 ? '<th>' + esc(c) + '</th>' : '<td>' + esc(c) + '</td>'; }).join("") + '</tr>'; }).join("") + '</table></div>';
      case "nsc": return '<div class="abnscs">' + b.ids.map(function(id){ return abNsc(A, id); }).join("") + '</div>';
      case "dl": return '<div class="abdl">' + b.x.map(function(r){ return '<div><b>' + esc(r[0]) + '</b><p>' + abMd(r[1]) + '</p></div>'; }).join("") + '</div>';
      case "spur": return '<div class="abspur">' + (b.nsc ? b.nsc.map(function(id){ return abNsc(A, id); }).join("") : '') + b.x.map(function(r){ return '<div><h5>' + esc(r[0]) + '</h5>' + (r[1] && r[1] !== "—" ? '<span class="sk">' + esc(r[1]) + '</span>' : '') + '<p>' + abMd(r[2]) + '</p></div>'; }).join("") + '</div>';
      case "gef": return abGef(b);
      case "leiste": return abLeiste(A, b);
      case "rs": return '<div class="abrs"><h4>Rätsel-Spuren</h4>' + b.x.map(function(r){ var K = A.kaefer.filter(function(k){ return k.t === r[0]; })[0]; return '<div>' + (K ? '<img src="' + abSvg(K.id) + '" alt="">' : '') + '<div><b>' + esc(r[0]) + '</b> <i>„' + esc(r[1]) + '“</i><br>' + abMd(r[2]) + '</div></div>'; }).join("") + '</div>';
      case "weiter": return '<div class="abweiter">→ ' + abMd(b.x) + '</div>';
      case "reisetafel": return '<p><span class="chip ink" onclick="go(\'reich/' + A.reich + '/reise\')">Reise-Tafel des Hogwild öffnen</span> <span class="chip o" style="--c:var(--ink)" onclick="go(\'reich/' + A.reich + '/fuehrer\')">Reiseführer (Ausguck-Tabellen)</span></p>';
    }
    return abPg(blk([b]));
  }).join("");
}
function abAblauf(A){
  return '<div class="abablauf">' + A.szenen.map(function(s){ return '<a style="--c:' + A.c + '" onclick="go(\'abenteuer/' + A.id + '/schauplaetze/' + s.id + '\')"><b>' + s.nr + '</b><span>' + esc(s.t) + '</span><small>' + esc(s.art) + (s.tick ? ' · ' + esc(s.tick) : '') + '</small></a>'; }).join("") + '</div>';
}
function abNsc(A, id){
  var n = A.nsc[id]; if(!n) return "";
  return '<div class="abnsc"><h5>' + esc(n.t) + (n.p ? ' ' + pgl(n.p) : '') + '</h5><small>' + abMd(n.wer) + '</small>' +
    '<p><b>Will:</b> ' + abMd(n.will) + '</p><p><b>Weiß:</b> ' + abMd(n.weiss) + '</p><p class="gm">' + abMd(n.art) + '</p></div>';
}
function abGef(b){
  var g = gefById(b.id) || {t:b.id}, d = (window.PI_GTEXT || {})[b.id] || {};
  return '<div class="abgef" style="--c:' + (g.farbe || "var(--rust)") + '">' + (g.img ? '<img src="img/gefahr/' + g.img + '.webp" alt="" onclick="zoom(this.src)">' : '') +
    '<div><h5>' + esc(g.t) + ' ' + pgl(g.p) + '</h5><small>' + esc(d.schluessel || "") + ' · Anzahl: ' + esc(b.n) + '</small>' +
    (d.herzen ? '<div class="hz">' + d.herzen.map(function(h){ return hearts(h[1]); }).join(" ") + '</div>' : '') +
    '<p>' + abMd(b.x) + '</p><p><span class="chip ink" onclick="go(\'gefahren/' + b.id + '\')">Gefahrenkarte</span> <span class="chip o" style="--c:var(--ink)" onclick="gEnc(\'' + b.id + '\')">+ Begegnung</span></p></div></div>';
}
function abLeiste(A, b){
  var key = A.id + ":" + b.id, n = b.n, cur = abS()[key] || 0, o = "";
  for(var i = 0; i < n; i++) o += '<i class="' + (i < cur ? 'm' : '') + '" onclick="abL(\'' + key + '\',' + i + ')"></i>';
  return '<div class="ableiste"><b>' + esc(b.h) + '</b>' + o + '<button class="mini" onclick="abL(\'' + key + '\',-1)">−</button><button class="mini" onclick="abL(\'' + key + '\',' + (n + 1) + ')">+</button></div>';
}
function abL(key, i){ var s = abS(); if(i < 0) s[key] = Math.max(0, (s[key] || 0) - 1); else if(i > 50) s[key] = (s[key] || 0) + 1; else s[key] = (s[key] || 0) === i + 1 ? i : i + 1; save(); render(); }

/* Inhalt in Abschnitte (an „h“) teilen → Raster statt einer langen Spalte */
function abSecs(A, L){
  L = L.slice(); for(var i = 0; i < L.length - 1; i++){ var a = L[i], n = L[i + 1]; if(a && a.t === "nsc" && n && n.t === "spur"){ L.splice(i, 2, {t:"spur", x:n.x, nsc:a.ids}); } else if(a && a.t === "spur" && n && n.t === "nsc"){ L.splice(i, 2, {t:"spur", x:a.x, nsc:n.ids}); } }
  var secs = [], cur = {h:"", b:[]};
  L.forEach(function(b){ if(b && b.t === "h"){ if(cur.h || cur.b.length) secs.push(cur); cur = {h:b.x, b:[]}; } else cur.b.push(b); });
  secs.push(cur);
  return '<div class="absecs">' + secs.map(function(s){
    var wide = s.b.some(function(b){ return b && /^(spur|gef|nsc|ablauf|lese|leiste|rs|dl)$/.test(b.t); }) || JSON.stringify(s.b).length > 900;
    return '<section class="' + (wide ? 'w' : '') + '">' + (s.h ? '<h3>' + esc(s.h) + '</h3>' : '') + abBlk(A, s.b) + '</section>';
  }).join("") + '</div>';
}

/* ---- Seiten ---- */
function viewAbenteuer(id, tab, sel){
  var L = Object.keys(window.PI_AB || {}).map(function(k){ return PI_AB[k]; });
  if(!id || !PI_AB[id]){
    setTheme(false, "var(--amber)");
    return '<div class="tabs"><a class="on">Abenteuer</a></div><div class="pad"><div class="ggr">' + L.map(function(A){
      return '<div class="gc abcard" style="--c:' + A.c + '" onclick="go(\'abenteuer/' + A.id + '\')"><div class="im"><img src="' + IMG(A.img) + '" alt=""></div><h3>' + esc(A.t) + '</h3><small>' + esc(A.eckdaten.map(function(e){ return e[1]; }).slice(0, 3).join(" · ")) + '</small><p class="ex">' + esc(A.kurz) + '</p></div>';
    }).join("") + '</div></div>';
  }
  var A = PI_AB[id]; tab = tab || "vorbereitung"; setTheme(false, A.c);
  var tabs = '<div class="tabs">' + AB_TABS.map(function(t){ return '<a class="' + (t[0] === tab ? 'on' : '') + '" onclick="go(\'abenteuer/' + id + '/' + t[0] + '\')">' + t[1] + '</a>'; }).join("") + '</div>';
  if(tab === "schauplaetze") return tabs + abSzenen(A, sel);
  if(tab === "kaefer") return tabs + (sel ? abKaefer(A, sel) : abKaeferGrid(A));
  if(tab === "nsc") return tabs + '<div class="pad"><div class="abnscs big">' + Object.keys(A.nsc).map(function(k){ return abNsc(A, k); }).join("") + '</div></div>';
  return tabs + '<div class="abhero" style="background-image:url(' + IMG(A.img) + ')"><h1>' + esc(A.t) + '</h1></div><div class="pad">' +
    '<div class="abeck">' + A.eckdaten.map(function(e){ return '<span><b>' + esc(e[0]) + '</b>' + abMd(e[1]) + '</span>'; }).join("") + '</div>' +
    '<p class="lead abkurz">' + abMd(A.kurz) + '</p>' + abSecs(A, A.vorbereitung) + '</div>';
}
function abSzenen(A, sel){
  var S = A.szenen.filter(function(s){ return s.id === sel; })[0] || A.szenen[0], ix = A.szenen.indexOf(S);
  var side = '<nav class="side abside">' + A.szenen.map(function(s){ return '<h4 class="' + (s === S ? 'on' : '') + '" style="' + (s === S ? 'color:' + A.c : '') + '" onclick="go(\'abenteuer/' + A.id + '/schauplaetze/' + s.id + '\')"><small>' + s.nr + ' · ' + esc(s.art) + '</small>' + esc(s.t) + '</h4>'; }).join("") + '</nav>';
  var pv = A.szenen[ix - 1], nx = A.szenen[ix + 1];
  var nav = '<div class="nnav end">' + (pv ? '<a onclick="go(\'abenteuer/' + A.id + '/schauplaetze/' + pv.id + '\')">‹ ' + esc(pv.t) + '</a>' : '<span></span>') + (nx ? '<a onclick="go(\'abenteuer/' + A.id + '/schauplaetze/' + nx.id + '\')">' + esc(nx.t) + ' ›</a>' : '') + '</div>';
  var head = '<div class="abshead"><span class="abart" style="background:' + A.c + '">' + S.nr + ' · ' + esc(S.art) + '</span><h2>' + esc(S.t) + '</h2><small>' + esc(S.ort) + (S.tick ? ' · ' + esc(S.tick) : '') + ' · ' + pgl(S.p) + '</small></div>';
  var lese = S.b.filter(function(b){ return b.t === "lese"; }), rest = S.b.filter(function(b){ return b.t !== "lese"; });
  return lay(side, head + abBlk(A, lese) + abSecs(A, rest) + nav);
}
function abKaeferGrid(A){
  var K = A.kaefer;
  function card(k){ return '<div class="gc abk" style="--c:' + k.c + '" onclick="go(\'abenteuer/' + A.id + '/kaefer/' + k.id + '\')"><div class="im"><img src="' + abSvg(k.id) + '" alt=""></div><h3>' + esc(k.t) + '</h3><small>' + esc(k.art) + ' · ' + esc(k.rolle) + '</small></div>'; }
  return '<div class="pad"><div class="ggr abkg">' + K.filter(function(k){ return !k.reserve; }).map(card).join("") + '</div>' +
    '<div class="sec"><h2>Für Runde fünf und sechs</h2></div><div class="ggr abkg">' + K.filter(function(k){ return k.reserve; }).map(card).join("") +
    '<div class="gc nt abk" style="--c:var(--ink)" onclick="bogen()"><h3>Eigener Käfer</h3><small>Leerer Charakterbogen</small><p class="ex">Mit 25 Nektar selbst bauen (S. 99). Etwa die Hälfte für Aspekte und Augmente, die andere Hälfte für Fertigkeiten.</p></div></div></div>';
}
function abKaefer(A, id){
  var K = A.kaefer.filter(function(k){ return k.id === id; })[0]; if(!K) return abKaeferGrid(A);
  var ko = abKosten(K);
  var asp = K.asp.map(function(a){
    var parts = a[1].map(abCard), track = parts.map(function(c){ return c ? abHerz(c.k) : ""; }).join("");
    return '<div class="abasp"><h4>' + esc(a[0]) + ' ' + hearts(track) + '</h4>' + (a[2] ? '<p class="wahl">' + esc(a[2]) + '</p>' : '') +
      parts.map(function(c, i){ if(!c) return '<p class="gm">' + esc(a[1][i]) + ' (nicht gefunden)</p>'; return '<div class="part"><b>' + esc(c.t) + '</b> <small>' + esc(c.k) + ' · ' + (i ? 'Augment, 2 Nektar' : 'Aspekt, 3 Nektar') + '</small> ' + pgl(c._p) + abPg(blk(c.b)) + '</div>'; }).join("") + '</div>';
  }).join("");
  var sk = BSK.map(function(g){ return '<div class="abskg"><h5>' + g[0] + '</h5>' + g[1].map(function(s){ var r = K.sk[s[0]] || 0; return '<div class="' + (r ? '' : 'z') + '"><span>' + s[0] + '</span><i>' + [1, 2, 3].map(function(n){ return '<b class="' + (n <= r ? 'm' : '') + '"></b>'; }).join("") + '</i></div>'; }).join("") + '</div>'; }).join("");
  var mood = K.mood.map(function(m, i){ return '<div class="abmood ' + (i ? 'neg' : 'pos') + '"><b>' + esc(m) + '</b><small>' + (i ? 'negativ' : 'positiv') + '</small><p>' + abMd(abMood(m)) + '</p></div>'; }).join("");
  return '<div class="pad"><div class="nnav"><a onclick="go(\'abenteuer/' + A.id + '/kaefer\')">‹ Alle Käfer</a><span><span class="chip ink" onclick="abBogen(\'' + A.id + '\',\'' + K.id + '\')">Als Charakterbogen öffnen</span></span></div>' +
    '<div class="abkhead" style="--c:' + K.c + '"><img src="' + abSvg(K.id) + '" alt=""><div><h1>' + esc(K.t) + '</h1><p class="ps">' + esc(K.pseudo) + ' · ' + esc(K.art) + ', ' + esc(K.rolle) + '</p><p>' + abMd(K.desc) + '</p>' +
    '<div class="abnek"><span><b>25</b> Nektar (Larve)</span><span><b>' + ko[0] + '</b> Aspekte &amp; Augmente</span><span><b>' + ko[1] + '</b> Fertigkeiten</span>' + (K.schnell ? '<span>Schnellstart: ' + abMd(K.schnell) + '</span>' : '') + '</div></div></div>' +
    '<div class="abkgrid"><div class="abkasp"><h3>Aspekte</h3>' + asp + '</div><div class="abkside"><h3>Fertigkeiten ' + pgl(144) + '</h3><div class="absk">' + sk + '</div>' +
    '<h3>Stimmungen ' + pgl(156) + '</h3>' + mood + '<h3>Bröckchen &amp; Krimskrams ' + pgl(163) + '</h3><ul class="bul">' + K.bits.map(function(b){ return '<li>' + esc(b) + '</li>'; }).join("") + '</ul>' +
    '<h3>Rätsel ' + pgl(164) + '</h3><p class="abraet">„' + esc(K.raetsel) + '“</p></div></div></div>';
}
/* In einen Charakterbogen übernehmen (eigener Speicherplatz pro Käfer) */
function abBogen(aid, kid){
  var A = PI_AB[aid], K = A.kaefer.filter(function(k){ return k.id === kid; })[0], key = "picnic:" + kid, B = BG(key);
  if(!B.f.name){
    var f = B.f; f.name = K.t; f.pseudo = K.pseudo; f.nek = "25"; f.desc = K.art + ", " + K.rolle + ".";
    K.asp.forEach(function(a, i){ var parts = a[1].map(abCard); f["a" + i + "n"] = a[0];
      f["a" + i + "t"] = (a[2] ? a[2] + " " : "") + parts.map(function(c){ return c ? (c.b || []).filter(function(x){ return typeof x === "string" && /^\**Vorteil/.test(x) || typeof x === "string" && /Nachteil/.test(x); }).join(" ").replace(/\*/g, "") : ""; }).join(" ");
      B.o = B.o || {}; });
    BSK.forEach(function(g){ g[1].forEach(function(s){ if(K.sk[s[0]]) B.s[s[1]] = K.sk[s[0]]; }); });
    f.m1 = "+ " + K.mood[0] + ": " + abMood(K.mood[0]).replace(/\*/g, ""); f.m2 = "− " + K.mood[1] + ": " + abMood(K.mood[1]).replace(/\*/g, ""); B.m = 2;
    f.bit0 = K.bits[0]; f.bit1 = K.bits[1]; f.rq = K.raetsel;
    B.pic = abSvg(kid); save();
  }
  go("bogen/picnic/" + kid);
}
