/* Mysterium-Leitstand (Entwurf 3): Phasen-Tabs, Seitenleiste in „Lösung“, Karte · Ablauf · Countdown, Hinweise, NSC */
(function(){
  function esc(s){ return String(s).replace(/[&<>"]/g, function(c){ return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]; }); }
  function CX(){ return window.TCTX || {p:"", ls:"tftl_", book:"tftl_core", MYS:window.MYS, L:{showdown:"Showdown"}}; }
  function cv(n, d){ var v = ""; try{ v = getComputedStyle(document.body).getPropertyValue(n).trim(); }catch(e){} return v || d; }
  function loop(){ var l = "maelar"; try{ l = localStorage.getItem(CX().ls + "loop") || l; }catch(e){} return l; }
  var CUR = null, NOLINK = 0, GCTX = null, STOP = /^(Herr|Herrn|Frau|Fräulein|Dr|Doktor|Prof|Professor|Die|Der|Das|Den|Dem|Des|Ein|Eine|Und|Von|Vom|Zum|Zur|Mit|Bei|Kind|Kinder|Agent|Agenten|Hund|Mann|Lehrer|Lehrerin|Polizist|Polizistin)$/;
  function cands(M){ var out = [], all = Object.keys(M.nsc || {}), b = loop() === "boulder", cnt = {};
    all.forEach(function(k){ var n = M.nsc[k], nmx = (b && n.alt) ? n.alt : n.name; nmx = String(nmx).replace(/\{\{([^|}]*)\|([^}]*)\}\}/g, function(m, a, c){ return b ? c : a; }); n._n = nmx; nmx.split(/[\s,]+/).forEach(function(t){ if(t.length >= 4 && /^[A-ZÄÖÜ]/.test(t) && !STOP.test(t)){ cnt[t] = (cnt[t] || 0) + 1; } }); });
    all.forEach(function(k){ var n = M.nsc[k]; if(!n._n) return; var list = [n._n]; n._n.split(/[\s,]+/).forEach(function(t){ if(t.length >= 4 && /^[A-ZÄÖÜ]/.test(t) && !STOP.test(t) && cnt[t] === 1 && list.indexOf(t) < 0) list.push(t); }); list.forEach(function(t){ out.push([t, k]); }); });
    return out.sort(function(a, c){ return c[0].length - a[0].length; }); }
  function linkNsc(h){ if(!CUR || !CUR.nsc || NOLINK) return h; var cs = cands(CUR), done = {};
    if(!cs.length) return h; var inA = 0, inH = 0;
    return h.split(/(<[^>]+>)/).map(function(seg){ if(seg.charAt(0) === "<"){ if(/^<a[\s>]/i.test(seg)) inA++; else if(/^<\/a>/i.test(seg)) inA = Math.max(0, inA - 1); else if(/^<h[1-6][\s>]/i.test(seg)) inH++; else if(/^<\/h[1-6]>/i.test(seg)) inH = Math.max(0, inH - 1); return seg; }
      if(inA || inH) return seg;
      cs.forEach(function(c){ if(done[c[1]]) return; var re = new RegExp("(^|[^A-Za-zÄÖÜäöüß])(" + c[0].replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")(?![A-Za-zÄÖÜäöüß])"); if(re.test(seg) && seg.indexOf('class="nsc"') < 0){ seg = seg.replace(re, function(m, pre, t){ return pre + '<a class="nsc" data-n="' + c[1] + '">' + t + '</a>'; }); done[c[1]] = 1; } });
      return seg; }).join(""); }
  function nm(h){ var b = loop() === "boulder"; h = h.replace(/\{\{([^|}]*)\|([^}]*)\}\}/g, function(m, a, c){ return b ? c : a; }); return linkNsc(h); }
  function load(id){ try{ return JSON.parse(localStorage.getItem(CX().ls + "st_" + id) || "{}"); }catch(e){ return {}; } }
  function save(id, s){ try{ localStorage.setItem(CX().ls + "st_" + id, JSON.stringify(s)); }catch(e){} }
  function pg(book, s){ return '<a class="pgl" data-b="' + book + '" data-s="' + s + '">S. ' + s + '</a>'; }
  function noteLast(M, phase, ab){ try{ localStorage.setItem(CX().ls + "last", JSON.stringify({id: M.id, name: M.name, bild: M.bild, ort: phaseName(M, phase) + (ab ? " · " + ab : "")})); }catch(e){} }
  function phaseName(M, id){ var p = M.phasen.filter(function(x){ return x.id === id; })[0]; return p ? p.name : id; }

  /* Ablauf: rechtwinklige SVG-Linien wie im Entwurf, Knoten anklickbar */
  function ablauf(M, cur, S){
    var n = M.orte.length, W = n > 3 ? Math.max(560, n * 132) : 350, nodeW = n > 3 ? 122 : 110, gap = (W - n * nodeW) / (n - 1), xs = [];
    for(var i = 0; i < n; i++) xs.push(Math.round(i * (nodeW + gap)));
    var mid = W / 2, y0 = 32, yb = 64, yn = 94, yb2 = 154, yj = 184, ys = 216;
    var vis = S.orte || {};
    var g = '<path d="M' + mid + ' ' + y0 + 'V' + yb + '" stroke="#ee7113"/>';
    xs.forEach(function(x, i){ var c = x + nodeW / 2, o = M.orte[i], on = o.id === cur, dn = vis[o.id] && !on, col = on || (cur && i <= M.orte.findIndex(function(q){ return q.id === cur; })) ? "#ee7113" : "#bfb5a3", mk = col === "#ee7113" ? "b" : "a";
      if(c === mid) g += '<path d="M' + mid + ' ' + yb + 'V' + yn + '" stroke="' + col + '" marker-end="url(#' + mk + ')"/>';
      else g += '<path d="M' + mid + ' ' + yb + 'H' + (c < mid ? c + 8 : c - 8) + 'Q' + c + ' ' + yb + ' ' + c + ' ' + (yb + 8) + 'V' + yn + '" stroke="' + col + '" marker-end="url(#' + mk + ')"/>'; });
    var first = xs[0] + nodeW / 2, last = xs[n - 1] + nodeW / 2;
    g += '<path d="M' + first + ' ' + yb2 + 'V' + (yj - 8) + 'Q' + first + ' ' + yj + ' ' + (first + 8) + ' ' + yj + 'H' + (last - 8) + 'Q' + last + ' ' + yj + ' ' + last + ' ' + (yj - 8) + 'V' + yb2 + '" stroke="#bfb5a3"/>';
    g += '<path d="M' + mid + ' ' + yj + 'V' + ys + '" stroke="#bfb5a3" marker-end="url(#a)"/>';
    var h = '<div class="fc" style="width:' + W + 'px"><svg width="' + W + '" height="250" viewBox="0 0 ' + W + ' 250"><defs><marker id="a" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L8 4L0 8z" fill="#bfb5a3"/></marker><marker id="b" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L8 4L0 8z" fill="#ee7113"/></marker></defs><g fill="none" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + g + '</g></svg>' +
      '<a class="nd end st" style="left:' + (W - 200) / 2 + 'px" href="#' + CX().p + 'm/' + M.id + '/mysterium">Mysterium einführen</a>';
    M.orte.forEach(function(o, i){ var on = o.id === cur, dn = vis[o.id] && !on; h += '<a class="nd o' + (on ? ' on' : '') + (dn ? ' dn' : '') + '" style="left:' + xs[i] + 'px;width:' + nodeW + 'px" href="#' + CX().p + 'm/' + M.id + '/loesung/' + o.id + '"><i>' + o.nr + '</i><span>' + esc(o.name.replace(/^(Das|Der|Die) /, "").replace(/^Haus des Ornithologen$/, "Haus des Ornitho­logen").replace(/ verlassenes Haus$/, " Haus")) + '</span></a>'; });
    return h + '<a class="nd end sd" style="left:' + (W - 200) / 2 + 'px" href="#' + CX().p + 'm/' + M.id + '/showdown">' + esc(CX().L.showdown) + '</a></div>';
  }

  /* Ablauf-Graph (M.ablauf): Knoten nach Spalte/Zeile, rechtwinklige Kanten in echten Pixeln; Platz wird nach dem Einfügen gemessen */
  var GN = 130, GH = 48, GR = 72, GP = 16, GMIN = 150;
  function gMaxSp(A){ var m = 0; A.knoten.forEach(function(k){ if(k.sp > m) m = k.sp; }); return m; }
  function gKey(M, k){ return k.ziel; }
  function grafik(M, A, curKey, S, W){
    var vis = S.besucht || {}, maxSp = gMaxSp(A), minZ = 1e9, maxZ = 0, step = maxSp ? (W - GN) / maxSp : 0, byId = {};
    A.knoten.forEach(function(k){ if(k.z < minZ) minZ = k.z; if(k.z > maxZ) maxZ = k.z; });
    var Hh = (maxZ - minZ) * GR + GH, acc = cv("--acc", "#ee7113"), fl = cv("--fline", "#bfb5a3");
    A.knoten.forEach(function(k){ k._x = Math.round(k.sp * step); k._cy = Math.round(GH / 2 + (k.z - minZ) * GR); k._st = k.ziel === curKey ? "on" : (vis[k.ziel] ? "dn" : ""); byId[k.id] = k; });
    var gone = "", rest = "";
    (A.kanten || []).forEach(function(e){ var a = byId[e[0]], b = byId[e[1]], dbl = e[2] === 2; if(!a || !b) return;
      var reached = a._st && b._st, d, x1, y1, x2, y2, r = 5;
      if(a.sp === b.sp){ x1 = x2 = a._x + GN / 2; var up = a._cy < b._cy; y1 = up ? a._cy + GH / 2 : a._cy - GH / 2; y2 = up ? b._cy - GH / 2 : b._cy + GH / 2; d = 'M' + x1 + ' ' + y1 + 'V' + y2; }
      else { var l = a.sp < b.sp ? a : b, rr = l === a ? b : a; x1 = a.sp < b.sp ? a._x + GN : a._x; x2 = a.sp < b.sp ? b._x : b._x + GN; y1 = a._cy; y2 = b._cy;
        var dir = a.sp < b.sp ? 1 : -1, xm = Math.round(x1 + dir * (step - GN) / 2);
        if(y1 === y2) d = 'M' + x1 + ' ' + y1 + 'H' + x2;
        else { var sg = y2 > y1 ? 1 : -1, rad = Math.min(r, Math.abs(y2 - y1) / 2); d = 'M' + x1 + ' ' + y1 + 'H' + (xm - dir * rad) + 'Q' + xm + ' ' + y1 + ' ' + xm + ' ' + (y1 + sg * rad) + 'V' + (y2 - sg * rad) + 'Q' + xm + ' ' + y2 + ' ' + (xm + dir * rad) + ' ' + y2 + 'H' + x2; } }
      var mk = reached ? "gb" : "ga", p = '<path d="' + d + '" stroke="' + (reached ? acc : fl) + '" marker-end="url(#' + mk + ')"' + (dbl ? ' marker-start="url(#' + mk + ')"' : '') + '/>';
      if(reached) gone += p; else rest += p; });
    var mkr = function(id, c){ return '<marker id="' + id + '" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L8 4L0 8z" fill="' + c + '"/></marker>'; };
    var h = '<div class="fg" style="width:' + W + 'px;height:' + Hh + 'px"><svg width="' + W + '" height="' + Hh + '" viewBox="0 0 ' + W + ' ' + Hh + '"><defs>' + mkr("ga", fl) + mkr("gb", acc) + '</defs><g fill="none" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + rest + gone + '</g></svg>';
    A.knoten.forEach(function(k){ var cls = "nd" + (k.art ? " " + k.art : " o") + (k._st ? " " + k._st : "");
      h += '<a class="' + cls + '" style="left:' + k._x + 'px;top:' + (k._cy - GH / 2) + 'px;width:' + GN + 'px;height:' + GH + 'px" href="#' + CX().p + 'm/' + M.id + '/' + k.ziel + '">' + (k.nr ? '<i>' + k.nr + '</i>' : '') + '<span>' + esc(k.art === "sd" ? CX().L.showdown : k.t) + '</span></a>'; });
    return h + '</div>';
  }
  function karte(M, cur, S){
    var l = loop() === "boulder" ? "boulder" : "maelar", vis = S.orte || {};
    var h = '<div class="map"><img src="img/' + M.karte[l] + '.webp" alt="">';
    M.orte.forEach(function(o){ var p = o.pin[l]; h += '<a class="pin' + (o.id === cur ? ' on' : vis[o.id] ? ' dn' : '') + '" style="left:' + p[0] + '%;top:' + p[1] + '%" href="#' + CX().p + 'm/' + M.id + '/loesung/' + o.id + '" title="' + esc(o.name) + '">' + o.nr + '</a>'; });
    var sp = M.pinShowdown[l]; h += '<a class="pin sd" style="left:' + sp[0] + '%;top:' + sp[1] + '%" href="#' + CX().p + 'm/' + M.id + '/showdown" title="' + esc(CX().L.showdown) + '">' + esc(CX().L.showdown.charAt(0)) + '</a>';
    return h + '</div>';
  }
  function escb(t){ return esc(t).replace(/&lt;(\/?)(b|i)&gt;/g, "<$1$2>"); }
  function countdown(M, S, voll){
    var d = S.cd || [];
    return '<div class="kk cd"><h4>Countdown</h4><ol>' + M.countdown.map(function(t, i){
      var m = voll ? null : t.match(/^(.*?[.!?])\s+([\s\S]*)$/), kopf = m ? m[1] : t, rest = m ? m[2] : "";
      return '<li data-i="' + i + '"' + (d[i] ? ' class="dn"' : '') + '><span>' + (i + 1) + '.</span> ' + nm(escb(kopf)) + (rest ? ' <button class="ex" aria-label="Mehr" title="Mehr">▾</button><em class="rest">' + nm(escb(rest)) + '</em>' : '') + '</li>'; }).join("") + '</ol></div>';
  }
  function hinweis(key, html, S){ return '<div class="cl' + ((S.hw || {})[key] ? ' dn' : '') + '" data-k="' + key + '"><b>Hinweis</b>' + nm(html) + '</div>'; }
  function fig(b, M){ return '<figure class="fig"><img src="img/' + b.plan + '.webp" alt="' + esc(b.planTitel) + '" data-big="img/' + b.plan + '.webp"><figcaption>' + esc(b.planTitel) + ' · ' + pg(M.buch, b.planS) + '</figcaption></figure>'; }
  function figs(a, M){ var r = ""; (a.bilder || []).forEach(function(b){ var bl = b.loop || (/maelar/.test(b.b) ? "maelar" : /boulder|lakemead/.test(b.b) ? "boulder" : ""); if(bl && bl !== (loop() === "boulder" ? "boulder" : "maelar")) return; r += '<figure class="fig' + (b.klein ? ' small' : '') + '"><img src="img/' + b.b + '.webp" alt="' + esc(b.t || "") + '" loading="lazy" data-big="img/' + b.b + '.webp">' + (b.t || b.s ? '<figcaption>' + esc(b.t || "") + (b.t && b.s ? ' · ' : '') + (b.s ? pg(M.buch, b.s) : '') + '</figcaption>' : '') + '</figure>'; }); return r ? '<div class="figs">' + r + '</div>' : r; }
  function nscCard(M, k){ var n = M.nsc[k]; NOLINK++; try{ return '<article class="nscc' + (n.bild ? ' hasb' : '') + '">' + (n.bild ? '<img class="nb" src="img/' + n.bild + '.webp" alt="' + esc(n.name) + '" data-big="img/' + n.bild + '.webp" loading="lazy">' : '') + '<h3>' + esc(n.name) + '</h3><p class="zit">' + n.zitat + '</p>' + nm(n.html) + '<div class="pgr">' + pg(M.buch, n.s) + '</div></article>'; }finally{ NOLINK--; } }
  function nscName(M, k){ var n = M.nsc[k]; return loop() === "boulder" ? n.alt : n.name; }

  function section(M, a, S){
    var h = '<h2 class="loc">' + esc(a.titel) + ' ' + (a.s ? '<span class="pg">' + pg(M.buch, a.s) + '</span>' : '') + '</h2>';
    return h + '<div class="body">' + nm(a.html) + '</div>';
  }
  function sideCards(M, a, S){
    var h = "";
    (a.aerger || []).forEach(function(t){ h += '<div class="tr"><h4>' + esc(t.t) + '</h4>' + nm(t.html) + '</div>'; });
    (a.hinweise || []).forEach(function(t, i){ h += hinweis(a.id + "-" + i, t, S); });
    return h;
  }
  function extraCards(M, a){ var h = ""; (a.extra || []).forEach(function(t){ h += '<div class="tr bib full"><h4>' + esc(t.t) + ' ' + (t.s ? '<span class="pg">' + pg(M.buch, t.s) + '</span>' : '') + '</h4>' + nm(t.html) + '</div>'; }); return h; }
  function loopBox(M, a, S){
    var mine = (a.loop === (loop() === "boulder" ? "boulder" : "maelar"));
    var other = a.loop === "maelar" ? "Mälarinseln" : "Boulder City";
    return '<details class="lk"' + (mine ? ' open' : '') + '><summary><span>Fassung ' + esc(a.fassung) + '</span><b>' + (mine ? '' : 'Fassung ' + esc(a.fassung) + ' ▸') + '</b></summary><div class="body">' + nm(a.html) + '</div></details>';
  }

  /* Rechte Leiste im Spiel: Countdown, Am Ort, Orte, Hinweise, NSC */
  var PREP = {wahrheit: 1, kids: 1, lesen: 1};
  function tok(t){ var b = loop() === "boulder"; return String(t || "").replace(/\{\{([^|}]*)\|([^}]*)\}\}/g, function(m, a, c){ return b ? c : a; }); }
  function rail(M, S, P, ab, base, amOrt){
    var h = '<aside class="rail"><button class="rcol" title="Leiste einklappen (n)" aria-label="Leiste einklappen">›</button>';
    if(M.countdown && M.countdown.length) h += '<div class="rsx">' + countdown(M, S) + '</div>';
    if(amOrt) h += '<div class="rsx ro2"><h5>' + esc(String(ab.titel).split(":")[0]) + '</h5>' + amOrt + '</div>';
    var L = M.phasen.filter(function(p){ return p.id === "loesung"; })[0];
    var orte = L ? L.abschnitte.filter(function(x){ return x.ort; }) : [];
    var hasMap = M.karte && M.orte && M.orte.length > 1 && M.orte.every(function(o){ return o.pin; }) && M.pinShowdown;
    if(orte.length && P.id === "loesung"){ if(hasMap && !(ab && ab === L.abschnitte[0])) h += '<div class="rsx"><h5>Karte</h5><div class="rmap">' + karte(M, ab && ab.ort, S) + '</div></div>'; }
    else if(orte.length){ h += '<div class="rsx"><h5>Orte</h5>' + (hasMap && !(P.id === "loesung" && ab && ab === L.abschnitte[0]) ? '<div class="rmap">' + karte(M, ab && ab.ort, S) + '</div>' : '') + orte.map(function(x){ var o = (M.orte || []).filter(function(q){ return q.id === x.ort; })[0]; if(!o) return ""; var on = P.id === "loesung" && ab && ab.id === x.id;
      return '<a class="rl' + (on ? ' on' : '') + ((S.orte || {})[o.id] && !on ? ' dn' : '') + '" href="' + base + 'loesung/' + x.id + '"><i>' + esc(o.nr) + '</i>' + esc(tok(o.name)) + '</a>'; }).join("") + '</div>'; }
    h += '<div class="rsx"><h5>Hinweise</h5><a class="rl rh" href="' + base + 'loesung/_hinweise"><small class="hwc"></small></a></div>';
    var ks = Object.keys(M.nsc || {});
    if(ks.length) h += '<div class="rsx"><h5>NSC</h5><div class="rnl">' + ks.map(function(k){ var n = M.nsc[k];
      return '<a class="nsc rn" data-n="' + k + '">' + (n.bild ? '<img src="img/' + n.bild + '.webp" alt="" loading="lazy">' : '<span>' + esc(tok(n.name).replace(/^[^A-Za-zÄÖÜ]+/, "").replace(/^(Die|Der|Das|The)\s+/, "").charAt(0)) + '</span>') + '<b>' + esc(tok(nscName(M, k) || n.name)) + '</b></a>'; }).join("") + '</div></div>';
    return h + '</aside>';
  }
  /* Kurze Abschnitte ohne Ort/Ablauf-Ziel zu Gruppen zusammenfassen */
  function tlen(h){ return String(h || "").replace(/<[^>]+>/g, "").length; }
  function gruppen(M, list){
    var zz = {}; if(M.ablauf) (M.ablauf.knoten || []).forEach(function(k){ zz[String(k.ziel).replace(/^loesung\//, "")] = 1; });
    var out = [], g = null, tot = 0;
    list.forEach(function(a, i){
      var ok = i > 0 && !a.ort && !a.ueberblick && !zz[a.id], n = tlen(a.html) + tlen(JSON.stringify(a.extra || "")) + tlen(JSON.stringify(a.aerger || ""));
      if(ok && g && g.m && tot < 3500 && tot + n <= 9000){ g.items.push(a); tot += n; return; }
      g = {items: [a], m: ok}; tot = n; out.push(g);
    });
    return out;
  }
  window.renderLeitstand = function(app, tabs, rest){
    var C = CX(), MY = C.MYS || window.MYS, M = MY && MY[rest[0]]; CUR = M || null; GCTX = null;
    if(!M){ tabs.innerHTML = ""; app.className = "page"; app.innerHTML = '<h1>Mysterium nicht gefunden</h1>'; return; }
    var S = load(M.id);
    var phase = rest[1] || S.phase || M.phasen[0].id;
    var P = M.phasen.filter(function(p){ return p.id === phase; })[0] || M.phasen[0];
    phase = P.id;
    var multi = P.id === "loesung", RAIL = !PREP[P.id], amOrt = "";
    var railZu = false; try{ railZu = localStorage.getItem(CX().ls + "railzu") === "1"; }catch(e){}
    var abId = rest[2] || (multi ? (S.ab || "ueberblick") : null);
    var ab = P.abschnitte.filter(function(x){ return x.id === abId; })[0], grp = null, jump = null;
    if(multi){ grp = gruppen(M, P.abschnitte); var gg = ab ? grp.filter(function(g){ return g.items.indexOf(ab) >= 0; })[0] : null; if(gg && gg.items[0] !== ab){ jump = ab.id; ab = gg.items[0]; } }
    S.phase = P.id; if(multi){ S.ab = ab ? ab.id : "ueberblick"; } S.besucht = S.besucht || {}; var bKey = multi ? "loesung/" + (ab ? ab.id : "ueberblick") : P.id; S.besucht[bKey] = 1; save(M.id, S);
    noteLast(M, P.id, multi && ab ? ab.titel.replace(/^Ort (\d): /, "Ort $1 · ") : "");
    var base = "#" + C.p + "m/" + M.id + "/";
    tabs.innerHTML = '<a class="mt" href="#' + C.p + 'mysterien"><i style="background-image:url(img/' + M.bild + '.webp)"></i><b>' + esc(M.name) + '</b></a>' +
      M.phasen.map(function(p, i){ var nx = M.phasen[i + 1], vp = PREP[p.id]; return '<a href="' + base + p.id + '" class="' + (p.id === P.id ? 'on' : '') + (vp ? ' vp' : '') + '">' + esc(p.name) + '</a>' + (vp && nx && !PREP[nx.id] ? '<i class="tsep"></i>' : ''); }).join("") + '<span class="tsp"></span>' + (window.TX ? TX.pen(M.id + "/" + P.id) : "");
    var html = "";
    if(multi){
      var curOrt = ab && ab.ort || null;
      var side = '<aside class="side"><button class="col" title="Seitenleiste einklappen (b)" aria-label="Seitenleiste einklappen">‹</button>' +
        grp.map(function(g){ var x = g.items[0], o = x.ort ? M.orte.filter(function(q){ return q.id === x.ort; })[0] : null, on = ab && ab.id === x.id, dn = o && (S.orte || {})[o.id];
          return '<a href="' + base + 'loesung/' + x.id + '" class="' + (on ? 'on' : '') + (dn && !on ? ' dn' : '') + '">' + (o ? '<i>' + esc(o.nr) + '</i>' + esc(tok(o.name)) : (x.ueberblick || x === P.abschnitte[0] ? 'Überblick' : esc(String(x.titel).split(":")[0]))) + '</a>' +
            g.items.slice(1).map(function(y){ return '<a class="nj" href="' + base + 'loesung/' + y.id + '" data-j="' + y.id + '">' + esc(String(y.titel).split(":")[0]) + '</a>'; }).join(""); }).join("") +
        (RAIL ? '' : '<h5>Immer zur Hand</h5><a href="' + base + 'loesung/_countdown" class="' + (ab && ab.id === "_countdown" ? 'on' : '') + '">Countdown</a>' +
        '<a href="' + base + 'loesung/_hinweise" class="' + (abId === "_hinweise" ? 'on' : '') + '">Hinweise<small class="hwc"></small></a>') + '</aside>';
      var main = "";
      if(abId === "_countdown") main = '<div class="cdbig">' + countdown(M, S, 1) + '</div>';
      else if(abId === "_hinweise"){ P.abschnitte.forEach(function(x){ if(x.hinweise) main += '<h3 class="hh">' + esc(x.titel) + '</h3><div class="hgrid">' + x.hinweise.map(function(t, i){ return hinweis(x.id + "-" + i, t, S); }).join("") + '</div>'; }); }
      else {
        ab = ab || P.abschnitte[0];
        var gm = grp.filter(function(g){ return g.items[0] === ab; })[0], more = function(){ return gm ? gm.items.slice(1).map(function(y){ return '<div class="txt" id="nj-' + y.id + '"><div class="side2">' + sideCards(M, y, S) + '</div>' + section(M, y, S) + (y.plan ? fig(y, M) : '') + figs(y, M) + extraCards(M, y) + '</div>'; }).join("") : ""; };
        var hasMap = M.karte && M.orte && M.orte.length > 1 && M.orte.every(function(o){ return o.pin; }) && M.pinShowdown;
        var isUb = ab === P.abschnitte[0] || ab.ueberblick;
        if(RAIL && !isUb) hasMap = false;
        if(M.ablauf && (isUb || !RAIL)){
          main = '<div class="top2' + (hasMap ? '' : ' nomap') + '">' + (hasMap ? '<div class="mapcol"><div class="cap">Mystery-Karte</div>' + karte(M, ab.ort, S) + '</div>' : '') + '<div class="flowcol"><div class="cap">Ablauf</div><div class="flow g"></div></div></div><div class="flowrow g2" hidden><div class="cap">Ablauf</div></div>' +
            '<div class="txt">' + (RAIL ? '' : '<div class="side2">' + sideCards(M, ab, S) + '</div>') + section(M, ab, S) + (ab.plan ? fig(ab, M) : '') + figs(ab, M) + extraCards(M, ab) + '</div>' + more();
          if(RAIL) amOrt = sideCards(M, ab, S);
          GCTX = {M: M, curKey: "loesung/" + ab.id, hasMap: hasMap};
        } else if(M.ablauf){
          main = '<div class="txt">' + section(M, ab, S) + (ab.plan ? fig(ab, M) : '') + figs(ab, M) + extraCards(M, ab) + '</div>' + more();
          amOrt = sideCards(M, ab, S);
        } else {
        var cdSide = (!hasMap && M.countdown && !RAIL) ? countdown(M, S) : "";
        if(RAIL){ amOrt = sideCards(M, ab, S); }
        main = ((hasMap) ? '<div class="top3' + (hasMap && M.orte.length > 3 ? ' t2' : '') + (RAIL ? ' nocd' : '') + '">' + (hasMap ? '<div><div class="cap">Mystery-Karte</div>' + karte(M, ab.ort, S) + '</div>' + (M.orte.length <= 3 ? '<div><div class="cap">Ablauf</div><div class="flow">' + ablauf(M, ab.ort, S) + '</div></div>' : '') : '') + (M.countdown && !RAIL ? countdown(M, S) : '') + '</div>' + (M.orte.length > 3 ? '<div class="flowrow"><div class="cap">Ablauf</div><div class="flow wide">' + ablauf(M, ab.ort, S) + '</div></div>' : '') : '') +
          '<div class="txt">' + (RAIL ? '' : '<div class="side2">' + cdSide + sideCards(M, ab, S) + '</div>') + section(M, ab, S) + (ab.plan ? fig(ab, M) : '') + figs(ab, M) + extraCards(M, ab) + '</div>' + more();
        }
      }
      html = '<div class="lay">' + side + '<div class="main">' + main + '</div></div>';
    } else {
      var main2 = "", right = "";
      P.abschnitte.forEach(function(x){
        if(x.nsc){ main2 += '<h2 class="loc">' + esc(x.titel) + '</h2><div class="body">' + nm(x.html) + '</div><div class="nscg">' + Object.keys(M.nsc || {}).map(function(k){ return nscCard(M, k); }).join("") + '</div>'; }
        else if(x.loop) main2 += loopBox(M, x, S);
        else if(x.box) right += '<div class="tr"><h4>' + esc(x.titel) + ' ' + (x.s ? '<span class="pg">' + pg(M.buch, x.s) + '</span>' : '') + '</h4>' + nm(x.html) + figs(x, M) + '</div>';
        else { main2 += section(M, x, S) + (x.plan ? fig(x, M) : "") + figs(x, M); }
        if(x.abschluss) main2 += '<button class="fin' + ((load(M.id).fertig) ? ' on' : '') + '" id="finBtn">' + (S.fertig ? '✓ Mysterium abgeschlossen' : 'Mysterium abgeschlossen') + '</button>';
      });
      html = '<div class="main wide">' + (!main2 && right ? '<div class="boxgrid">' + right + '</div>' : '<div class="txt">' + (right ? '<div class="side2">' + right + '</div>' : '') + main2 + '</div>') + '</div>';
    }
    if(RAIL) html = '<div class="ws' + (railZu ? ' rz' : '') + '"><div class="wsm">' + html + '</div>' + rail(M, S, P, multi ? ab : null, base, amOrt) + '</div>';
    app.className = "ls hasH" + (RAIL ? " mini" : "");
    app.innerHTML = html;
    var lay = app.querySelector(".lay");
    function hwCount(){ var els = app.querySelectorAll(".hwc"); if(!els.length) return; var all = 0, got = 0, hw = load(M.id).hw || {}; M.phasen.forEach(function(p){ p.abschnitte.forEach(function(x){ (x.hinweise || []).forEach(function(t, i){ all++; if(hw[x.id + "-" + i]) got++; }); }); }); els.forEach(function(el){ el.textContent = got + " von " + all + " gefunden"; }); }
    hwCount();
    /* Interaktionen */
    app.onclick = function(e){
      var t = e.target, el;
      if((el = t.closest(".cd .ex"))){ el.parentNode.classList.toggle("open"); return; }
      if((el = t.closest(".cd li"))){ var s = load(M.id); s.cd = s.cd || []; var i = +el.dataset.i; s.cd[i] = !s.cd[i]; save(M.id, s); app.querySelectorAll('.cd li[data-i="' + i + '"]').forEach(function(x){ x.classList.toggle("dn", !!s.cd[i]); }); return; }
      if((el = t.closest(".cl"))){ var s2 = load(M.id); s2.hw = s2.hw || {}; var k = el.dataset.k; s2.hw[k] = !s2.hw[k]; save(M.id, s2); app.querySelectorAll('.cl[data-k="' + k + '"]').forEach(function(x){ x.classList.toggle("dn", !!s2.hw[k]); }); hwCount(); return; }
      if((el = t.closest(".pgl"))){ e.preventDefault(); BV.open(el.dataset.b, +el.dataset.s); return; }
      if((el = t.closest("a.nsc"))){ e.preventDefault(); var n = (M.nsc || {})[el.dataset.n]; if(!n) return; var d = document.createElement("div"); d.className = "nscm"; d.innerHTML = '<div class="box"><button class="x" aria-label="Schließen">✕</button>' + nscCard(M, el.dataset.n) + '</div>'; d.onclick = function(ev){ if(ev.target === d || ev.target.closest(".x")) d.remove(); }; document.body.appendChild(d); return; }
      if((el = t.closest("img[data-big]"))){ var d2 = document.createElement("div"); d2.className = "lbx"; d2.innerHTML = '<img src="' + el.dataset.big + '" alt="">'; d2.onclick = function(){ d2.remove(); }; document.body.appendChild(d2); return; }
      if(t.closest("#finBtn")){ var s3 = load(M.id); s3.fertig = !s3.fertig; save(M.id, s3); var dn = {}; try{ dn = JSON.parse(localStorage.getItem(CX().ls + "done") || "{}"); }catch(x){} if(s3.fertig) dn[M.id] = 1; else delete dn[M.id]; try{ localStorage.setItem(CX().ls + "done", JSON.stringify(dn)); }catch(x){} t.closest("#finBtn").textContent = s3.fertig ? "✓ Mysterium abgeschlossen" : "Mysterium abgeschlossen"; t.closest("#finBtn").classList.toggle("on", !!s3.fertig); return; }
      if((el = t.closest(".side a.nj"))){ var tg = document.getElementById("nj-" + el.dataset.j); if(tg){ e.preventDefault(); tg.scrollIntoView({behavior: "smooth", block: "start"}); return; } }
      if(t.closest(".rail .rcol")){ toggleRail(); return; }
      if((el = t.closest(".side .col")) && lay){ lay.classList.toggle("collapsed"); return; }
    };
    /* Ort als besucht markieren */
    if(multi && ab && ab.ort){ var s4 = load(M.id); s4.orte = s4.orte || {}; if(!s4.orte[ab.ort]){ s4.orte[ab.ort] = 1; save(M.id, s4); } }
    function flow(){ app.querySelectorAll(".txt").forEach(function(t){ var sd = t.querySelector(":scope > .side2"); if(!sd) return; var ok = false;
      ["", "w2", "w3"].forEach(function(w){ if(ok) return; t.classList.remove("below", "w2", "w3"); if(w) t.classList.add(w); var th = 0; Array.prototype.forEach.call(t.children, function(c){ if(c !== sd) th += c.offsetHeight; }); if(sd.offsetHeight <= th * 0.95) ok = true; });
      if(!ok){ t.classList.remove("w2", "w3"); t.classList.add("below"); } }); }
    function place(){ var G = GCTX; if(!G || !M.ablauf) return; var top = app.querySelector(".top2"), fc = app.querySelector(".flowcol"), row = app.querySelector(".flowrow.g2"), side2 = app.querySelector(".txt > .side2"), fl = app.querySelector(".flow.g"); if(!top || !fl) return;
      var A = M.ablauf, mx = Math.max(1, gMaxSp(A)), beside = G.hasMap && ((top.clientWidth - 404 - 16 - 2 * GP - GN) / mx >= GMIN);
      Array.prototype.forEach.call(app.querySelectorAll(".wsm .cd, .lay .cd, .main .cd"), function(c){ c.parentNode.removeChild(c); });
      var cd = M.countdown && !app.querySelector(".rail") ? countdown(M, load(M.id)) : "";
      if(beside){ fc.appendChild(fl); fc.hidden = false; row.hidden = true; top.hidden = false; if(cd && side2) side2.insertAdjacentHTML("afterbegin", cd); var cc = top.querySelector(".cdcol"); if(cc) cc.parentNode.removeChild(cc); }
      else { row.appendChild(fl); row.hidden = false; fc.hidden = true; var c2 = top.querySelector(".cdcol");
        if(G.hasMap && cd){ if(!c2){ c2 = document.createElement("div"); c2.className = "cdcol"; top.appendChild(c2); } c2.innerHTML = cd; top.hidden = false; }
        else { top.hidden = !G.hasMap; if(cd && side2) side2.insertAdjacentHTML("afterbegin", cd); } }
      top.classList.toggle("below", !beside);
      var W = Math.max(fl.clientWidth - 2 * GP, GN + mx * GMIN); if(mx === 0) W = GN;
      fl.innerHTML = grafik(M, A, G.curKey, load(M.id), W); }
    function relayout(){ place(); flow(); }
    window.__lsRelayout = relayout;
    relayout(); setTimeout(relayout, 400); window.onresize = relayout; app.addEventListener("click", function(){ setTimeout(relayout, 60); });
    window.scrollTo(0, 0);
    if(jump){ var jt = document.getElementById("nj-" + jump); if(jt) setTimeout(function(){ jt.scrollIntoView({block: "start"}); }, 60); }
  };
  function toggleRail(){ var w = document.querySelector(".ws"); if(!w) return; w.classList.toggle("rz"); try{ localStorage.setItem(CX().ls + "railzu", w.classList.contains("rz") ? "1" : "0"); }catch(e){} if(window.__lsRelayout) setTimeout(window.__lsRelayout, 60); }
  document.addEventListener("keydown", function(e){ if(e.key === "n" && !/INPUT|TEXTAREA/.test(e.target.tagName || "") && !e.ctrlKey && !e.metaKey){ toggleRail(); } });
  document.addEventListener("keydown", function(e){ if(/INPUT|TEXTAREA/.test(e.target.tagName || "")) return; if(e.key === "b"){ var l = document.querySelector(".lay"); if(l) l.classList.toggle("collapsed"); if(window.__lsRelayout) setTimeout(window.__lsRelayout, 60); } });
  window.renderLeitstand.ctx = true;
})();
