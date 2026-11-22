/* Mysterium-Leitstand (Entwurf 3): Phasen-Tabs, Seitenleiste in „Lösung“, Karte · Ablauf · Countdown, Hinweise, NSC */
(function(){
  function esc(s){ return String(s).replace(/[&<>"]/g, function(c){ return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]; }); }
  function loop(){ var l = "maelar"; try{ l = localStorage.getItem("tftl_loop") || l; }catch(e){} return l; }
  function nm(h){ var b = loop() === "boulder"; return h.replace(/\{\{([^|}]*)\|([^}]*)\}\}/g, function(m, a, c){ return b ? c : a; }); }
  function load(id){ try{ return JSON.parse(localStorage.getItem("tftl_st_" + id) || "{}"); }catch(e){ return {}; } }
  function save(id, s){ try{ localStorage.setItem("tftl_st_" + id, JSON.stringify(s)); }catch(e){} }
  function pg(book, s){ return '<a class="pgl" data-b="' + book + '" data-s="' + s + '">S. ' + s + '</a>'; }
  function noteLast(M, phase, ab){ try{ localStorage.setItem("tftl_last", JSON.stringify({id: M.id, name: M.name, bild: M.bild, ort: phaseName(M, phase) + (ab ? " · " + ab : "")})); }catch(e){} }
  function phaseName(M, id){ var p = M.phasen.filter(function(x){ return x.id === id; })[0]; return p ? p.name : id; }

  /* Ablauf: rechtwinklige SVG-Linien wie im Entwurf, Knoten anklickbar */
  function ablauf(M, cur, S){
    var n = M.orte.length, W = 350, nodeW = 110, gap = (W - n * nodeW) / (n - 1), xs = [];
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
    var h = '<div class="fc"><svg width="350" height="250" viewBox="0 0 350 250"><defs><marker id="a" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L8 4L0 8z" fill="#bfb5a3"/></marker><marker id="b" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L8 4L0 8z" fill="#ee7113"/></marker></defs><g fill="none" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + g + '</g></svg>' +
      '<a class="nd end st" href="#m/' + M.id + '/mysterium">Mysterium einführen</a>';
    M.orte.forEach(function(o, i){ var on = o.id === cur, dn = vis[o.id] && !on; h += '<a class="nd o' + (on ? ' on' : '') + (dn ? ' dn' : '') + '" style="left:' + xs[i] + 'px" href="#m/' + M.id + '/loesung/' + o.id + '"><i>' + o.nr + '</i><span>' + esc(o.name.replace(/^(Das|Der|Die) /, "").replace(/^Haus des Ornithologen$/, "Haus des Ornitho­logen").replace(/ verlassenes Haus$/, " Haus")) + '</span></a>'; });
    return h + '<a class="nd end sd" href="#m/' + M.id + '/showdown">Showdown</a></div>';
  }
  function karte(M, cur, S){
    var l = loop() === "boulder" ? "boulder" : "maelar", vis = S.orte || {};
    var h = '<div class="map"><img src="img/' + M.karte[l] + '.webp" alt="">';
    M.orte.forEach(function(o){ var p = o.pin[l]; h += '<a class="pin' + (o.id === cur ? ' on' : vis[o.id] ? ' dn' : '') + '" style="left:' + p[0] + '%;top:' + p[1] + '%" href="#m/' + M.id + '/loesung/' + o.id + '" title="' + esc(o.name) + '">' + o.nr + '</a>'; });
    var sp = M.pinShowdown[l]; h += '<a class="pin sd" style="left:' + sp[0] + '%;top:' + sp[1] + '%" href="#m/' + M.id + '/showdown" title="Showdown">S</a>';
    return h + '</div>';
  }
  function countdown(M, S, voll){
    var d = S.cd || [];
    return '<div class="kk cd"><h4>Countdown</h4><ol>' + M.countdown.map(function(t, i){
      var m = voll ? null : t.match(/^(.*?[.!?])\s+([\s\S]*)$/), kopf = m ? m[1] : t, rest = m ? m[2] : "";
      return '<li data-i="' + i + '"' + (d[i] ? ' class="dn"' : '') + '><span>' + (i + 1) + '.</span> ' + nm(esc(kopf)) + (rest ? ' <button class="ex" aria-label="Mehr" title="Mehr">▾</button><em class="rest">' + nm(esc(rest)) + '</em>' : '') + '</li>'; }).join("") + '</ol></div>';
  }
  function hinweis(key, html, S){ return '<div class="cl' + ((S.hw || {})[key] ? ' dn' : '') + '" data-k="' + key + '"><b>Hinweis</b>' + nm(html) + '</div>'; }
  function fig(b, M){ return '<figure class="fig"><img src="img/' + b.plan + '.webp" alt="' + esc(b.planTitel) + '" data-big="img/' + b.plan + '.webp"><figcaption>' + esc(b.planTitel) + ' · ' + pg(M.buch, b.planS) + '</figcaption></figure>'; }
  function nscCard(M, k){ var n = M.nsc[k]; return '<article class="nscc"><h3>' + esc(n.name) + ' <small>' + (loop() === "boulder" ? "" : "") + '</small></h3><p class="zit">' + n.zitat + '</p>' + nm(n.html) + '<div class="pgr">' + pg(M.buch, n.s) + '</div></article>'; }
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

  window.renderLeitstand = function(app, tabs, rest){
    var M = window.MYS && window.MYS[rest[0]];
    if(!M){ tabs.innerHTML = ""; app.className = "page"; app.innerHTML = '<h1>Mysterium nicht gefunden</h1>'; return; }
    var S = load(M.id);
    var phase = rest[1] || S.phase || M.phasen[0].id;
    var P = M.phasen.filter(function(p){ return p.id === phase; })[0] || M.phasen[0];
    phase = P.id;
    var multi = P.id === "loesung";
    var abId = rest[2] || (multi ? (S.ab || "ueberblick") : null);
    var ab = P.abschnitte.filter(function(x){ return x.id === abId; })[0];
    S.phase = P.id; if(multi){ S.ab = ab ? ab.id : "ueberblick"; } save(M.id, S);
    noteLast(M, P.id, multi && ab ? ab.titel.replace(/^Ort (\d): /, "Ort $1 · ") : "");
    var base = "#m/" + M.id + "/";
    tabs.innerHTML = '<a class="mt" href="#mysterien"><i style="background-image:url(img/' + M.bild + '.webp)"></i><b>' + esc(M.name) + '</b></a>' +
      M.phasen.map(function(p){ return '<a href="' + base + p.id + '"' + (p.id === P.id ? ' class="on"' : '') + '>' + esc(p.name) + '</a>'; }).join("");
    var html = "";
    if(multi){
      var curOrt = ab && ab.ort || null;
      var side = '<aside class="side"><button class="col" title="Seitenleiste einklappen (b)" aria-label="Seitenleiste einklappen">‹</button><h5>Lösung</h5>' +
        P.abschnitte.map(function(x){ var o = x.ort ? M.orte.filter(function(q){ return q.id === x.ort; })[0] : null, on = ab && ab.id === x.id, dn = o && (S.orte || {})[o.id];
          return '<a href="' + base + 'loesung/' + x.id + '" class="' + (on ? 'on' : '') + (dn && !on ? ' dn' : '') + '">' + (o ? 'Ort ' + o.nr + '<small>' + esc(o.name) + '</small>' : 'Überblick<small>Karte · Ablauf · Countdown</small>') + '</a>'; }).join("") +
        '<h5>Immer zur Hand</h5><a href="' + base + 'loesung/_countdown" class="' + (ab && ab.id === "_countdown" ? 'on' : '') + '">Countdown</a>' +
        '<a href="' + base + 'loesung/_hinweise" class="' + (abId === "_hinweise" ? 'on' : '') + '">Hinweise<small id="hwCount"></small></a></aside>';
      var main = "";
      if(abId === "_countdown") main = '<div class="cdbig">' + countdown(M, S, 1) + '</div>';
      else if(abId === "_hinweise"){ P.abschnitte.forEach(function(x){ if(x.hinweise) main += '<h3 class="hh">' + esc(x.titel) + '</h3><div class="hgrid">' + x.hinweise.map(function(t, i){ return hinweis(x.id + "-" + i, t, S); }).join("") + '</div>'; }); }
      else {
        ab = ab || P.abschnitte[0];
        var hasMap = M.karte && M.orte && M.orte.length > 1 && M.orte.every(function(o){ return o.pin; }) && M.pinShowdown;
        main = ((hasMap || M.countdown) ? '<div class="top3' + (hasMap ? '' : ' cdonly') + '">' + (hasMap ? '<div><div class="cap">Mystery-Karte</div>' + karte(M, ab.ort, S) + '</div><div><div class="cap">Ablauf</div><div class="flow">' + ablauf(M, ab.ort, S) + '</div></div>' : '') + (M.countdown ? countdown(M, S) : '') + '</div>' : '') +
          '<div class="txt">' + '<div class="side2">' + sideCards(M, ab, S) + '</div>' + section(M, ab, S) + (ab.plan ? fig(ab, M) : '') + extraCards(M, ab) + '</div>';
      }
      html = '<div class="lay">' + side + '<div class="main">' + main + '</div></div>';
    } else {
      var main2 = "", right = "";
      P.abschnitte.forEach(function(x){
        if(x.nsc){ main2 += '<h2 class="loc">' + esc(x.titel) + '</h2><div class="body">' + nm(x.html) + '</div><div class="nscg">' + Object.keys(M.nsc || {}).map(function(k){ return nscCard(M, k); }).join("") + '</div>'; }
        else if(x.loop) main2 += loopBox(M, x, S);
        else if(x.box) right += '<div class="tr"><h4>' + esc(x.titel) + ' ' + (x.s ? '<span class="pg">' + pg(M.buch, x.s) + '</span>' : '') + '</h4>' + nm(x.html) + '</div>';
        else { main2 += section(M, x, S) + (x.plan ? fig(x, M) : ""); }
        if(x.abschluss) main2 += '<button class="fin' + ((load(M.id).fertig) ? ' on' : '') + '" id="finBtn">' + (S.fertig ? '✓ Mysterium abgeschlossen' : 'Mysterium abgeschlossen') + '</button>';
      });
      html = '<div class="main wide"><div class="txt">' + (right ? '<div class="side2">' + right + '</div>' : '') + main2 + '</div></div>';
    }
    app.className = "ls";
    app.innerHTML = html;
    var lay = app.querySelector(".lay");
    function hwCount(){ var el = document.getElementById("hwCount"); if(!el) return; var all = 0, got = 0, hw = load(M.id).hw || {}; M.phasen.forEach(function(p){ p.abschnitte.forEach(function(x){ (x.hinweise || []).forEach(function(t, i){ all++; if(hw[x.id + "-" + i]) got++; }); }); }); el.textContent = got + " von " + all + " gefunden"; }
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
      if(t.closest("#finBtn")){ var s3 = load(M.id); s3.fertig = !s3.fertig; save(M.id, s3); var dn = {}; try{ dn = JSON.parse(localStorage.getItem("tftl_done") || "{}"); }catch(x){} if(s3.fertig) dn[M.id] = 1; else delete dn[M.id]; try{ localStorage.setItem("tftl_done", JSON.stringify(dn)); }catch(x){} t.closest("#finBtn").textContent = s3.fertig ? "✓ Mysterium abgeschlossen" : "Mysterium abgeschlossen"; t.closest("#finBtn").classList.toggle("on", !!s3.fertig); return; }
      if((el = t.closest(".side .col")) && lay){ lay.classList.toggle("collapsed"); return; }
    };
    /* Ort als besucht markieren */
    if(multi && ab && ab.ort){ var s4 = load(M.id); s4.orte = s4.orte || {}; if(!s4.orte[ab.ort]){ s4.orte[ab.ort] = 1; save(M.id, s4); } }
    window.scrollTo(0, 0);
  };
  document.addEventListener("keydown", function(e){ if(/INPUT|TEXTAREA/.test(e.target.tagName || "")) return; if(e.key === "b"){ var l = document.querySelector(".lay"); if(l) l.classList.toggle("collapsed"); } });
})();
