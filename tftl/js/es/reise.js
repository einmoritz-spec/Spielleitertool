/* The Electric State – Reise-Leitstand (Entwurf e2): Routenleiste, Route, Ziele & Bedrohungen, Begegnungen, Halte */
window.ES = window.ES || {};
(function(){
  var KEY = "es_reise_v1", NKEY = "es_notes_v1", BOOK = "tftl_es";
  function esc(s){ return String(s == null ? "" : s).replace(/[&<>"]/g, function(c){ return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]; }); }
  function load(){ var s = {}; try{ s = JSON.parse(localStorage.getItem(KEY) || "{}") || {}; }catch(e){} ["ab", "fertig", "cd", "orte", "beg", "pz", "ziel"].forEach(function(k){ if(!s[k] || typeof s[k] !== "object") s[k] = {}; }); return s; }
  function save(s){ try{ localStorage.setItem(KEY, JSON.stringify(s)); }catch(e){} }
  function pg(s){ return s ? '<a class="pgl" data-b="' + BOOK + '" data-s="' + s + '">S. ' + s + '</a>' : ''; }
  function short(t){ return String(t || "").split(":")[0]; }
  function arr(x){ return Array.isArray(x) ? x : (x ? [x] : []); }
  function R(){ return ES.REISE || {}; }
  function halte(){ return (R().halte || []).filter(function(id){ return ES.HALTE && ES.HALTE[id]; }); }
  function imgs(src, cls, extra){ return '<img' + (cls ? ' class="' + cls + '"' : '') + ' src="img/' + esc(src) + (/\.\w+$/.test(src) ? '' : '.webp') + '" alt="" ' + (extra || '') + ' onerror="this.setAttribute(\'data-err\',1);this.style.display=\'none\'">'; }

  /* ---------- Gruppe (Reisende) ---------- */
  function crew(){
    var c = []; try{ c = JSON.parse(localStorage.getItem("es_reisende_v1") || "[]"); if(!Array.isArray(c)) c = []; }catch(e){ c = []; }
    var Z = (ES.ZIELE && ES.ZIELE.archetypen) || {};
    return c.map(function(r, i){ var id = r.archetyp || r.arch || ""; return {id: String(r.id != null ? r.id : "r" + i), name: r.name || "", arch: id, r: r}; }).filter(function(x){ return Z[x.arch]; });
  }
  function archName(id){ var a = (ES.ARCHETYPEN || []).filter(function(x){ return x.id === id; })[0]; return a ? a.name : id; }
  function pzKey(m, G){
    var a = ES.ZIELE.archetypen[m.arch];
    if(a && !(a.countdown && a.countdown.length) && a.teilt){ var o = G.filter(function(x){ return x.arch === a.teilt; })[0]; return o ? o.id : "gem-" + a.teilt; }
    return m.id;
  }
  function pzSteps(m){ var a = ES.ZIELE.archetypen[m.arch]; if(a.countdown && a.countdown.length) return a.countdown; var t = a.teilt && ES.ZIELE.archetypen[a.teilt]; return t && t.countdown || []; }

  /* ---------- Werteblöcke / Tabellen ---------- */
  function stat(o){
    if(!o) return "";
    if(Array.isArray(o)) return o.map(stat).join("");
    var w = o.w || [];
    return '<section class="stat"><h4>' + esc(o.name || "") + (o.s ? ' <small>' + pg(o.s) + '</small>' : '') + '</h4>' +
      (w.length ? '<div class="at" style="grid-template-columns:repeat(' + w.length + ',minmax(0,1fr))">' + w.map(function(a){ return '<span>' + esc(a[0]) + '<b>' + esc(a[1]) + '</b></span>'; }).join("") + '</div>' : '') +
      (o.z || []).map(function(z){ return '<p><b>' + esc(z[0]) + ':</b> ' + z[1] + '</p>'; }).join("") + (o.html || "") + '</section>';
  }
  function wtab(w, titel, s){
    if(!w || !w.length) return "";
    var d = w[0], rows = w[1] || [];
    return '<section class="nw ez" data-d="' + esc(d) + '"><h4>' + esc(titel || "Zufallstabelle") + (s ? ' <small>' + pg(s) + '</small>' : '') + ' <button class="nwb" type="button">' + esc(d) + ' würfeln</button></h4>' +
      '<table class="ntab"><tbody>' + rows.map(function(r){ return '<tr data-k="' + esc(r[0]) + '"><th>' + esc(r[0]) + '</th><td>' + r[1] + '</td></tr>'; }).join("") + '</tbody></table></section>';
  }
  function roll(d){ function d6(){ return 1 + Math.floor(Math.random() * 6); } if(d === "D66") return d6() * 10 + d6(); if(d === "2D6") return d6() + d6(); return d6(); }
  function hit(k, v){ var m = String(k).match(/^\s*(\d+)\s*(?:[–-]\s*(\d+)|(\+))?\s*$/); if(!m) return false; var lo = +m[1], hi = m[3] ? Infinity : (m[2] ? +m[2] : lo); return v >= lo && v <= hi; }
  function bx(t, s, inner, cls){ return '<div class="bx ek' + (cls ? ' ' + cls : '') + '"><span class="tape"></span><h4>' + (t ? esc(t) : '') + (s ? ' <small>' + pg(s) + '</small>' : '') + '</h4>' + inner + '</div>'; }
  function kasten(k){ return bx(k.t, k.s, (k.html || "") + stat(k.stat) + (k.w ? wtab(k.w, k.wt || k.t) : "")); }

  /* ---------- NSC ---------- */
  function nscCard(n, S){
    return '<article class="enc" id="n-' + esc(n.id || "") + '">' +
      '<div class="enh">' + (n.bild ? imgs(n.bild, "enp") : '') + '<h3>' + esc(n.name || "") + '</h3>' + (n.s ? '<span class="pg">' + pg(n.s) + '</span>' : '') + '</div>' +
      (n.ort ? '<div class="eno">Ort: ' + esc(n.ort) + '</div>' : '') +
      (n.html ? '<div class="body">' + n.html + '</div>' : '') + stat(n.stat && !Array.isArray(n.stat) && n.stat.name === n.name ? Object.assign({}, n.stat, {name: "", s: 0}) : n.stat) +
      arr(n.kaesten).map(function(k){ return '<div class="enk"><h4>' + esc(k.t || "") + (k.s ? ' <small>' + pg(k.s) + '</small>' : '') + '</h4>' + (k.html || "") + stat(k.stat) + '</div>'; }).join("") + '</article>';
  }
  function findNsc(id, H){
    var l = [];
    if(H) H.abschnitte.forEach(function(a){ (a.nsc || []).forEach(function(n){ l.push(n); }); });
    var Z = ES.ZIELE && ES.ZIELE.nsc; if(Z && Z[id]) l.push(Object.assign({id: id}, Z[id]));
    return l.filter(function(n){ return n.id === id; })[0] || null;
  }

  /* ---------- Countdown ---------- */
  function cdList(H, S, voll){
    var d = S.cd[H.id] || [];
    return '<ol class="ecd">' + (H.countdown || []).map(function(t, i){
      var o = typeof t === "string" ? {t: t} : t;
      return '<li data-i="' + i + '"' + (d[i] ? ' class="dn"' : '') + (voll ? ' data-v="1"' : '') + '><span class="n">' + (i + 1) + '</span><div>' + o.t + (o.mehr ? (voll ? '' : ' <button class="ex" type="button" aria-label="Mehr" title="Mehr">▾</button>') + '<em class="rest' + (voll ? ' vo' : '') + '">' + o.mehr + '</em>' : '') + '</div></li>'; }).join("") + '</ol>';
  }
  function cdIntro(H){ return H.cdIntro || H.countdownEinl || H.countdownIntro || ""; }
  function cdBox(H, S){ return '<div class="bx ek ecb"><span class="tape"></span><h4>Countdown ' + (H.countdownS ? '<small>' + pg(H.countdownS) + '</small>' : '') + '</h4>' + cdList(H, S) + '</div>'; }

  /* ---------- Persönliche Bedrohungen ---------- */
  function pbCard(m, G, S, open){
    var a = ES.ZIELE.archetypen[m.arch], steps = pzSteps(m), key = pzKey(m, G), st = S.pz[key] || [], done = st.filter(Boolean).length;
    return '<div class="epb' + (open ? ' open' : '') + '" data-k="' + esc(key) + '"><div class="pbh"><b>' + esc(m.name || "–") + '</b><span>' + esc(archName(m.arch)) + '</span></div>' +
      (a.bedrohung ? '<p>' + esc(a.bedrohung) + '</p>' : (a.ziel ? '<p>' + esc(a.ziel) + '</p>' : '')) +
      (steps.length ? '<div class="pbb">' + steps.map(function(x, i){ return '<i data-i="' + i + '" class="' + (st[i] ? 'dn' : '') + '"></i>'; }).join("") + '</div>' +
        '<ol class="pbs">' + steps.map(function(x, i){ return '<li data-i="' + i + '"' + (st[i] ? ' class="dn"' : '') + '><span class="n">' + (i + 1) + '</span><div>' + esc(x) + '</div></li>'; }).join("") + '</ol>' : '') +
      (a.teilt && !(a.countdown && a.countdown.length) ? '<small class="pbt">Countdown: ' + esc(archName(a.teilt)) + '</small>' : '') + '</div>';
  }
  function pbRunning(G, S){ var n = 0; G.forEach(function(m){ var st = S.pz[pzKey(m, G)] || [], k = pzSteps(m).length; if(k && st.filter(Boolean).length < k) n++; }); return n; }
  function pbHtml(G, S, open){
    if(!G.length) return '<a class="chip ekn" href="#es/reisende">Reisende anlegen</a>';
    return G.map(function(m){ return pbCard(m, G, S, open); }).join("");
  }

  /* ---------- Routenleiste ---------- */
  function noteLoad(k){ try{ return (JSON.parse(localStorage.getItem(NKEY) || "{}") || {})[k] || ""; }catch(e){ return ""; } }
  function noteSave(k, v){ var o = {}; try{ o = JSON.parse(localStorage.getItem(NKEY) || "{}") || {}; }catch(e){} o[k] = v; try{ localStorage.setItem(NKEY, JSON.stringify(o)); }catch(e){} }
  function tabsHtml(teil, S, nk){
    var Rr = R(), hs = halte(), pos = Math.max(0, hs.indexOf(S.pos)), tb = [["route", "Route"], ["ziele", "Ziele & Bedrohungen"], ["begegnungen", "Begegnungen"]];
    var h = '<a class="mt" href="#es/start"><i style="background-image:url(img/' + esc(Rr.bild || "es/r-dust") + '.webp)"></i><b>' + esc(Rr.name || "Into the Dust") + '</b></a>' +
      tb.map(function(t){ return '<a class="rt' + (teil === t[0] ? ' on' : '') + '" href="#es/reise/' + t[0] + '">' + t[1] + '</a>'; }).join("") +
      '<nav class="rbar"><span class="rc" title="' + esc(Rr.start && Rr.start.name || "Start") + '"></span>';
    hs.forEach(function(id, i){
      var solid = i <= pos, cls = "rn" + (id === S.pos ? " here" : (S.fertig[id] || i < pos ? " ok" : "")) + (teil === id ? " on" : "");
      h += '<i class="sg' + (solid ? ' s' : '') + '"></i><a class="' + cls + '" data-h="' + id + '" href="#es/reise/' + id + '"><s></s><span>' + esc(ES.HALTE[id].name) + '</span></a>';
    });
    h += '<i class="sg' + (pos >= hs.length ? ' s' : '') + '"></i><span class="rc" title="' + esc(Rr.ziel && Rr.ziel.name || "Ziel") + '"></span></nav><span class="sp"></span>' +
      '<button type="button" class="epen' + (noteLoad(nk).trim() ? ' has' : '') + '" aria-label="Notizen" title="Notizen">✎</button>';
    return h;
  }
  function setPos(S, id){
    var hs = halte(), i = hs.indexOf(id); if(i < 0) return;
    S.pos = id; hs.forEach(function(h, j){ if(j < i) S.fertig[h] = 1; else delete S.fertig[h]; });
  }

  /* ---------- Seiten ---------- */
  function secHead(titel, s){ return '<h2 class="loc">' + esc(titel) + (s ? ' <span class="pg">' + pg(s) + '</span>' : '') + '</h2>'; }
  function figs(a){ return arr(a && a.bilder).map(function(b){ var f = typeof b === "string" ? b : b.b; return f ? '<figure class="efig">' + imgs(f, "", 'data-big="img/' + esc(f) + '.webp"') + '</figure>' : ''; }).join(""); }

  function pageRoute(){
    var Rr = R(), K = ES.KARTE, mapSrc = Rr.karte || (K && K.bilder && K.bilder.route) || "es/karte-route", pins = "";
    if(K && K.reise) K.reise.forEach(function(p){ var xy = p.pin && p.pin.route; if(!xy) return; var hid = p.halt || p.id, isH = ES.HALTE[hid];
      pins += '<a class="rp' + (p.ungefaehr ? ' gs' : '') + (isH ? '' : ' en') + (xy[0] > 62 ? ' lf' : '') + '" style="left:' + xy[0] + '%;top:' + xy[1] + '%"' + (isH ? ' href="#es/reise/' + hid + '/ueberblick"' : '') + '><i></i><b>' + esc(p.name || (isH && ES.HALTE[hid].name) || "") + '</b></a>'; });
    var by = {}; (Rr.route || []).forEach(function(x){ by[x.id] = x; });
    var right = "";
    ["ziel", "fahrzeug"].forEach(function(id){ var x = by[id]; if(!x) return; right += '<div class="erb">' + secHead(x.titel, x.s) + '<div class="body">' + x.html + '</div>' + (x.fahrzeug ? stat({name: x.fahrzeug.name, w: x.fahrzeug.w, z: [["Antrieb", x.fahrzeug.antrieb], ["Eigenschaften", (x.fahrzeug.eigenschaften || []).join(", ")]]}) : '') + '</div>'; });
    if(by.ersatz) right += bx(by.ersatz.titel, by.ersatz.s, '<div class="body">' + by.ersatz.html + '</div>');
    var low = ["einleitung", "spielbeginn"].map(function(id){ var x = by[id]; return x ? '<div class="erb">' + secHead(x.titel, x.s) + '<div class="body">' + x.html + '</div></div>' : ''; }).join("");
    return '<div class="main wide">' + (Rr.zitat ? '<div class="vq">' + Rr.zitat + '</div>' : '') +
      '<div class="rtop"><div class="rmap">' + '<div class="map">' + imgs(mapSrc, "", 'data-big="img/' + esc(mapSrc) + '.webp"') + pins + '</div></div><div class="rright">' + right + '</div></div><div class="rlow">' + low + '</div></div>';
  }

  function pageZiele(S){
    var Z = ES.ZIELE, G = crew(), mine = {}; G.forEach(function(m){ mine[m.arch] = m; });
    var order = ["kuenstler", "krimineller", "anhaenger", "arzt", "aussenseiter", "drohnenpilot", "ermittler", "ausreisser", "wissenschaftler", "veteran"].filter(function(k){ return Z.archetypen[k]; });
    order.sort(function(a, b){ return (mine[b] ? 1 : 0) - (mine[a] ? 1 : 0); });
    var cards = order.map(function(k){
      var a = Z.archetypen[k], m = mine[k], steps = a.countdown && a.countdown.length ? a.countdown : (a.teilt && Z.archetypen[a.teilt] ? Z.archetypen[a.teilt].countdown : []), key = m ? pzKey(m, G) : null, st = key ? (S.pz[key] || []) : [], op = (S.ziel || {})[k];
      return '<article class="ea' + (m ? ' mine' : '') + (op ? ' open' : '') + '" data-a="' + k + '"><header><h3>' + esc(archName(k)) + '</h3><span class="pg">' + pg(a.s) + '</span></header>' +
        '<p class="az"><b>Ziel</b>' + esc(a.ziel || "") + '</p>' + (a.bedrohung ? '<p class="az"><b>Bedrohung</b>' + esc(a.bedrohung) + '</p>' : '') +
        '<div class="ead"><div class="body">' + (a.text || "") + '</div>' +
        (steps.length ? '<h4>Countdown' + (a.teilt && !(a.countdown && a.countdown.length) ? ' <small>' + esc(archName(a.teilt)) + '</small>' : '') + '</h4><ol class="ecd pz"' + (key ? ' data-k="' + esc(key) + '"' : '') + '>' + steps.map(function(x, i){ return '<li data-i="' + i + '"' + (st[i] ? ' class="dn"' : '') + '><span class="n">' + (i + 1) + '</span><div>' + esc(x) + '</div></li>'; }).join("") + '</ol>' : '') +
        (a.hinweis ? '<p class="ehw"><b>Hinweis</b>' + esc(a.hinweis) + '</p>' : '') + '</div></article>'; }).join("");
    var nsc = Object.keys(Z.nsc || {}).map(function(k){ var n = Z.nsc[k]; return '<article class="enc"><div class="enh"><h3>' + esc(n.name) + '</h3><span class="pg">' + pg(n.s) + '</span></div>' + (n.html ? '<div class="body">' + n.html + '</div>' : '') + stat({w: n.w, z: n.z}) + '</article>'; }).join("");
    return '<div class="main wide"><div class="zhead"><div class="zi"><div class="body">' + Z.intro.html + '</div></div>' + bx("Gemeinsame Countdowns", Z.gemeinsam.s, '<div class="body">' + Z.gemeinsam.html + '</div>') + '</div>' +
      '<div class="zgrid">' + cards + '</div>' +
      '<h2 class="loc">Reise-NSC <span class="pg">' + pg(160) + '</span></h2><div class="body zn">' + (Z.nscIntro || "") + '</div><div class="ngrid">' + nsc + '</div></div>';
  }

  function pageBeg(S){
    var B = ES.BEGEGNUNGEN || [], I = ES.BEGEGNUNGEN_INTRO;
    return '<div class="main wide">' + (I ? '<div class="body bi"><span class="pg">' + pg(I.s) + '</span>' + I.html + '</div>' : '') + '<div class="bgrid">' + B.map(function(b){
      return '<article class="eb' + (S.beg[b.id] ? ' dn' : '') + '" data-b="' + b.id + '"><h3 class="eol">' + esc(b.name) + ' <span class="pg">' + pg(b.s) + '</span></h3>' + figs(b) + '<div class="body">' + b.html + '</div>' + stat(b.stat) + '</article>'; }).join("") + '</div></div>';
  }

  /* Halt */
  function sections(H){ return H.abschnitte.filter(function(a){ return !a.box; }); }
  function boxesFor(H, a){ return H.abschnitte.filter(function(b){ return b.box && (b.bei || "") === a.id; }); }
  function orteOf(H){ var o = []; H.abschnitte.forEach(function(a){ (a.orte || []).forEach(function(x){ o.push(x); }); }); return o; }
  function side(H, ab, S){
    var secs = sections(H), od = S.orte[H.id] || {}, orte = orteOf(H), vis = orte.filter(function(o){ return od[o.id]; }).length;
    var h = '<aside class="side"><button class="col" title="Seitenleiste einklappen (b)" aria-label="Seitenleiste einklappen">‹</button><h5>' + esc(short(H.name)) + '</h5>';
    secs.forEach(function(a){
      var on = ab === a.id || (ab && ab.indexOf("k-") === 0 && (H.abschnitte.filter(function(b){ return b.id === ab; })[0] || {}).bei === a.id);
      if(a.id === "ueberblick") h += '<a href="#es/reise/' + H.id + '/ueberblick" class="' + (on ? 'on' : '') + '">Überblick<small>Karte · Countdown</small></a>';
      else if(a.orte){
        h += '<a href="#es/reise/' + H.id + '/orte" class="' + (on ? 'on' : '') + '">' + esc(short(a.titel)) + '<small>' + vis + ' von ' + orte.length + ' besucht</small></a>';
        var lim = on ? orte.length : 5;
        h += '<div class="so">' + orte.slice(0, lim).map(function(o){ return '<a href="#es/reise/' + H.id + '/orte/' + o.id + '" data-o="' + o.id + '" class="' + (od[o.id] ? 'dn' : '') + '">' + esc(o.name) + '</a>'; }).join("") + (orte.length > lim ? '<a href="#es/reise/' + H.id + '/orte" class="mo">… ' + (orte.length - lim) + ' weitere</a>' : '') + '</div>';
      }
      else if(a.nsc){
        h += '<a href="#es/reise/' + H.id + '/nsc" class="' + (on ? 'on' : '') + '">NSC<small>' + esc(a.nsc.filter(function(n){ return n.name; }).slice(0, 4).map(function(n){ return String(n.name).split(" ")[0]; }).join(" · ")) + ' …</small></a>';
      }
      else h += '<a href="#es/reise/' + H.id + '/' + a.id + '" class="' + (on ? 'on' : '') + '">' + esc(short(a.titel)) + '</a>';
    });
    var G = crew();
    h += '<h5>Immer zur Hand</h5><a href="#es/reise/' + H.id + '/_countdown" class="' + (ab === "_countdown" ? 'on' : '') + '">Countdown</a>' +
      '<a href="#es/reise/' + H.id + '/_bedrohungen" class="' + (ab === "_bedrohungen" ? 'on' : '') + '">Persönliche Bedrohungen' + (G.length ? '<small>' + pbRunning(G, S) + ' laufen</small>' : '') + '</a>' +
      '<a href="#es/reise/' + H.id + '/_fahrzeug" class="' + (ab === "_fahrzeug" ? 'on' : '') + '">Fahrzeug</a></aside>';
    return h;
  }
  function mapBlock(H, S){
    var K = H.karte; if(!K || !K.bild) return "";
    var od = S.orte[H.id] || {}, orte = orteOf(H), nm = {}; orte.forEach(function(o){ nm[o.id] = o.name; });
    return '<div class="mapc"><div class="cap">' + esc(K.titel || H.lage || "") + '</div><div class="map">' + imgs(K.bild, "", 'onload="" data-big="img/' + esc(K.bild) + '.webp"') +
      (K.pins || []).map(function(p){ return '<a class="rp' + (od[p.ort] ? ' dn' : '') + (p.x > 62 ? ' lf' : '') + '" style="left:' + p.x + '%;top:' + p.y + '%" href="#es/reise/' + H.id + '/orte/' + p.ort + '"><i></i><b>' + esc(nm[p.ort] || p.ort) + '</b></a>'; }).join("") + '</div></div>';
  }
  function pageUeberblick(H, a, S){
    var G = crew(), top = '<div class="top3" data-top>' + mapBlock(H, S) + '<div class="cdc"><div class="cap">Countdown</div>' + cdBox(H, S) + '</div>' +
      '<div class="pbc"><div class="cap">Persönliche Bedrohungen</div>' + pbHtml(G, S, false) + '</div></div>';
    var bx2 = boxesFor(H, a).map(function(b){ return bx(b.titel, b.s, '<div class="body">' + b.html + '</div>'); }).join("");
    return top + '<div class="txt"><div class="side2">' + figs(a) + bx2 + '</div>' + secHead(H.name, a.s) + (a.vl ? '<div class="vq">' + a.vl + '</div>' : '') + '<div class="body">' + (a.html || "") + '</div></div>';
  }
  function pageGeneric(H, a, S){
    var side2 = figs(a) + boxesFor(H, a).map(function(b){ return bx(b.titel, b.s, '<div class="body">' + b.html + '</div>' + stat(b.stat)); }).join("") + arr(a.kaesten).map(kasten).join("") + stat(a.stat);
    return '<div class="txt"><div class="side2">' + side2 + '</div>' + secHead(a.titel, a.s) + (a.vl ? '<div class="vq">' + a.vl + '</div>' : '') + '<div class="body">' + (a.html || "") + '</div>' + (a.w ? wtab(a.w, a.wt || a.titel) : '') + '</div>';
  }
  function pageOrte(H, a, S){
    var od = S.orte[H.id] || {}, bxs = boxesFor(H, a).map(function(b){ return bx(b.titel, b.s, '<div class="body">' + b.html + '</div>'); }).join("");
    var h = '<div class="txt eo-h"><div class="side2">' + bxs + '</div>' + secHead(a.titel, a.s) + (a.html ? '<div class="body">' + a.html + '</div>' : '') + '</div>';
    a.orte.forEach(function(o){
      var sd = arr(o.kaesten).map(kasten).join("") + stat(o.stat) + (o.w ? wtab(o.w, o.wt || o.name, o.s) : "");
      h += '<section class="eo' + (od[o.id] ? ' dn' : '') + '" id="o-' + o.id + '" data-o="' + o.id + '"><div class="txt">' + (sd ? '<div class="side2">' + sd + '</div>' : '') + '<h3 class="eol">' + esc(o.name) + ' <span class="pg">' + pg(o.s) + '</span></h3><div class="body">' + (o.html || "") + '</div></div></section>';
    });
    return h;
  }
  function pageNsc(H, a, S){
    var h = secHead(a.titel, a.s) + (a.html ? '<div class="body">' + a.html + '</div>' : '');
    if(a.w) h += '<div class="ewt">' + wtab(a.w, a.wt || "Zufallstabelle") + '</div>';
    return h + '<div class="ngrid">' + a.nsc.map(function(n){ return nscCard(n, S); }).join("") + '</div>';
  }
  function pageCountdown(H, S){
    var intro = cdIntro(H);
    return '<div class="cdbig">' + secHead("Countdown", H.countdownS) + (intro ? '<div class="body">' + intro + '</div>' : '') + '<div class="bx ek ecb"><span class="tape"></span>' + cdList(H, S, true) + '</div></div>';
  }
  function pageBedr(H, S){
    var G = crew();
    return secHead("Persönliche Bedrohungen") + '<div class="pbg">' + pbHtml(G, S, true) + '</div>';
  }
  function pageFahrzeug(){
    var f = (R().route || []).filter(function(x){ return x.fahrzeug; })[0];
    if(!f) return "";
    return secHead(f.titel, f.s) + '<div class="body">' + f.html + '</div><div class="fzs">' + stat({name: f.fahrzeug.name, w: f.fahrzeug.w, z: [["Antrieb", f.fahrzeug.antrieb], ["Eigenschaften", (f.fahrzeug.eigenschaften || []).join(", ")]]}) + '</div><a class="chip" href="#es/fahrzeug">Fahrzeugbogen</a>';
  }

  /* ---------- Hauptfunktion ---------- */
  ES.renderReise = function(app, rest){
    rest = rest || [];
    var S = load(), hs = halte(), tabs = document.getElementById("tabs");
    var teil = rest[0] || S.teil || "route";
    if(["route", "ziele", "begegnungen"].indexOf(teil) < 0 && hs.indexOf(teil) < 0) teil = "route";
    var H = hs.indexOf(teil) >= 0 ? ES.HALTE[teil] : null, ab = null, html = "", nk = teil;
    S.teil = teil;
    if(H){
      var secs = sections(H), valid = {_countdown: 1, _bedrohungen: 1, _fahrzeug: 1};
      secs.forEach(function(a){ valid[a.id] = 1; }); H.abschnitte.forEach(function(a){ valid[a.id] = 1; });
      ab = rest[1] || S.ab[H.id] || "ueberblick"; if(!valid[ab]) ab = "ueberblick";
      S.ab[H.id] = ab; if(!S.pos) setPos(S, H.id);
      nk = H.id + "/" + ab;
      var a = H.abschnitte.filter(function(x){ return x.id === ab; })[0], host = a && a.box ? secs.filter(function(x){ return x.id === a.bei; })[0] || secs[0] : a, main;
      if(ab === "_countdown") main = pageCountdown(H, S);
      else if(ab === "_bedrohungen") main = pageBedr(H, S);
      else if(ab === "_fahrzeug") main = pageFahrzeug();
      else if(host.orte) main = pageOrte(H, host, S);
      else if(host.nsc) main = pageNsc(H, host, S);
      else if(host.id === "ueberblick") main = pageUeberblick(H, host, S);
      else main = pageGeneric(H, host, S);
      html = '<div class="lay">' + side(H, host && ab.charAt(0) !== "_" ? host.id : ab, S) + '<div class="main">' + main + '</div></div>';
      var o1 = rest[2] && ab === "orte" ? orteOf(H).filter(function(o){ return o.id === rest[2]; })[0] : null;
      try{ localStorage.setItem("es_last", JSON.stringify({teil: H.id, halt: H.id, ab: ab, name: H.name, ort: o1 ? o1.name : (host && ab.charAt(0) !== "_" ? short(host.titel) : (ab === "_countdown" ? "Countdown" : ab === "_bedrohungen" ? "Persönliche Bedrohungen" : "Fahrzeug"))})); }catch(e){}
    } else {
      html = teil === "route" ? pageRoute() : teil === "ziele" ? pageZiele(S) : pageBeg(S);
      var nm = {route: "Route", ziele: "Ziele & Bedrohungen", begegnungen: "Begegnungen"};
      try{ localStorage.setItem("es_last", JSON.stringify({teil: teil, name: R().name || "Into the Dust", ort: nm[teil]})); }catch(e){}
    }
    save(S);
    tabs.innerHTML = tabsHtml(teil, S, nk);
    app.className = "ls"; app.innerHTML = html;
    var lay = app.querySelector(".lay");

    function flow(){ app.querySelectorAll(".txt").forEach(function(t){ var sd = t.querySelector(":scope > .side2"); if(!sd) return;
      if(!sd.children.length){ t.classList.remove("below", "w2", "w3"); sd.style.display = "none"; return; }
      var ok = false;
      ["", "w2", "w3"].forEach(function(w){ if(ok) return; t.classList.remove("below", "w2", "w3"); if(w) t.classList.add(w); var th = 0; Array.prototype.forEach.call(t.children, function(c){ if(c !== sd) th += c.offsetHeight; }); if(sd.offsetHeight <= th * 0.95) ok = true; });
      if(!ok){ t.classList.remove("w2", "w3"); t.classList.add("below"); } }); }
    function relayout(){ flow(); }
    window.__lsRelayout = relayout; window.onresize = relayout;
    app.addEventListener("error", function(e){ var t = e.target; if(t && t.tagName === "IMG"){ var tp = t.closest("[data-top]"); if(tp && t.closest(".mapc")){ t.closest(".mapc").remove(); tp.classList.add("nomap"); } else if(t.closest(".rmap")){ t.closest(".rmap").classList.add("none"); } relayout(); } }, true);
    relayout(); setTimeout(relayout, 300); setTimeout(relayout, 900);

    function grayOrte(id, on){ var o = S.orte[H.id] = S.orte[H.id] || {}; if(on) o[id] = 1; else delete o[id]; save(S);
      app.querySelectorAll('[data-o="' + id + '"]').forEach(function(x){ x.classList.toggle("dn", !!on); });
      var n = orteOf(H).filter(function(x){ return o[x.id]; }).length, sm = app.querySelector('.side a[href$="/orte"] small'); if(sm) sm.textContent = n + " von " + orteOf(H).length + " besucht"; }

    app.onclick = function(e){
      var t = e.target, el;
      if((el = t.closest(".pgl"))){ e.preventDefault(); if(window.BV) BV.open(el.dataset.b, +el.dataset.s); return; }
      if((el = t.closest("a.nsc"))){ e.preventDefault(); var n = findNsc(el.dataset.n, H); if(!n) return; var d = document.createElement("div"); d.className = "nscm"; d.innerHTML = '<div class="box"><button class="x" aria-label="Schließen">✕</button>' + nscCard(n, S) + '</div>'; d.onclick = function(ev){ if(ev.target === d || ev.target.closest(".x")) d.remove(); }; document.body.appendChild(d); return; }
      if((el = t.closest("img[data-big]")) && !t.closest("a")){ var d2 = document.createElement("div"); d2.className = "lbx"; d2.innerHTML = '<img src="' + el.dataset.big + '" alt="">'; d2.onclick = function(){ d2.remove(); }; document.body.appendChild(d2); return; }
      if((el = t.closest(".nwb"))){ var sc = el.closest(".nw"), v = roll(sc.dataset.d); sc.querySelectorAll("tr").forEach(function(tr){ tr.classList.toggle("hit", hit(tr.dataset.k, v)); }); el.textContent = sc.dataset.d + ": " + v; return; }
      if(t.closest(".side .col") && lay){ lay.classList.toggle("collapsed"); relayout(); return; }
      if((el = t.closest(".ecd .ex"))){ el.closest("li").classList.toggle("open"); relayout(); return; }
      /* Countdown des Halts */
      if(H && (el = t.closest(".ecb li"))){ var i = +el.dataset.i; S.cd[H.id] = S.cd[H.id] || []; S.cd[H.id][i] = !S.cd[H.id][i]; save(S); app.querySelectorAll('.ecb li[data-i="' + i + '"]').forEach(function(x){ x.classList.toggle("dn", !!S.cd[H.id][i]); }); return; }
      /* persönliche Countdowns (Leitstand und Ziele-Seite) */
      if((el = t.closest(".epb"))){
        var li = t.closest(".pbs li, .pbb i");
        if(li){ var k = el.dataset.k, j = +li.dataset.i; S.pz[k] = S.pz[k] || []; S.pz[k][j] = !S.pz[k][j]; save(S);
          app.querySelectorAll('.epb[data-k="' + k + '"]').forEach(function(c){ c.querySelectorAll('[data-i="' + j + '"]').forEach(function(x){ x.classList.toggle("dn", !!S.pz[k][j]); }); }); }
        else el.classList.toggle("open"); relayout(); return;
      }
      if((el = t.closest(".ecd.pz li"))){ var k2 = el.closest(".ecd").dataset.k; if(k2){ var j2 = +el.dataset.i; S.pz[k2] = S.pz[k2] || []; S.pz[k2][j2] = !S.pz[k2][j2]; save(S); app.querySelectorAll('.ecd.pz[data-k="' + k2 + '"] li[data-i="' + j2 + '"]').forEach(function(x){ x.classList.toggle("dn", !!S.pz[k2][j2]); }); } return; }
      if((el = t.closest(".ea")) && !t.closest(".ead")){ var kk = el.dataset.a; S.ziel[kk] = S.ziel[kk] ? 0 : 1; save(S); el.classList.toggle("open", !!S.ziel[kk]); return; }
      /* Orte besucht */
      if((el = t.closest(".eo h3.eol"))){ var sec = el.closest(".eo"), id = sec.dataset.o; grayOrte(id, !(S.orte[H.id] || {})[id]); return; }
      if((el = t.closest(".eb h3.eol"))){ var b = el.closest(".eb"), bid = b.dataset.b; S.beg[bid] = S.beg[bid] ? 0 : 1; save(S); b.classList.toggle("dn", !!S.beg[bid]); return; }
    };
    /* Routenleiste: Halt öffnen und als „hier sind wir“ setzen */
    tabs.onclick = function(e){
      var el, t = e.target;
      if((el = t.closest("a.rn"))){ var s2 = load(); setPos(s2, el.dataset.h); save(s2); return; }
      if((el = t.closest(".epen"))){ notePop(el, nk); return; }
    };
    if(H && ab === "orte" && rest[2]){ var tg = document.getElementById("o-" + rest[2]); if(tg){ setTimeout(function(){ tg.scrollIntoView(); }, 30); } }
    else window.scrollTo(0, 0);
  };
  function notePop(btn, nk){
    var old = document.querySelector(".enote"); if(old){ old.remove(); return; }
    var p = document.createElement("div"); p.className = "enote";
    p.innerHTML = '<button type="button" class="x" aria-label="Schließen">×</button><textarea placeholder="Notizen …"></textarea>';
    var ta = p.querySelector("textarea"); ta.value = noteLoad(nk);
    ta.oninput = function(){ noteSave(nk, ta.value); btn.classList.toggle("has", !!ta.value.trim()); };
    p.querySelector(".x").onclick = function(){ p.remove(); };
    var r = btn.getBoundingClientRect(), w = Math.min(380, innerWidth - 16);
    p.style.width = w + "px"; p.style.top = Math.round(r.bottom + 6) + "px"; p.style.left = Math.max(8, Math.min(innerWidth - w - 8, r.right - w)) + "px";
    document.body.appendChild(p); ta.focus();
  }
})();
