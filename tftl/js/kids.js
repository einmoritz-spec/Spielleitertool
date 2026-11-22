/* Kids/Teens (Entwurf 4 / f3) + Charakterbogen (nah am Original, Export als ausfüllbares PDF über shared/fillpdf.js)
   Läuft für TftL und Flood: Daten, Speicher, Links und Texte kommen aus window.TCTX (app.js). */
(function(){
  var C, K, KEY, F, L, P, BOOK, D;
  var PRB = {kid: "", sk: "", it: ""}, ROLL = null;   /* Würfelprobe: Auswahl + letzter Wurf (nur Sitzung) */
  function esc(s){ return String(s == null ? "" : s).replace(/[&<>"]/g, function(c){ return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]; }); }
  function setup(){
    C = window.TCTX || {}; K = C.KIDS || window.KIDS; KEY = C.kidsKey || "tftl_kids_v1"; F = K.flags || {};
    L = C.L || {kid: "Kid", kids: "Kids", unsere: "Unsere Kids"}; P = C.p || "";
    BOOK = C.area === "flood" ? "Things from the Flood" : "Tales from the Loop";
  }
  function fresh(){ return F.scham ? {kids: [], reibung: "", thema: ""} : {kids: [], hideout: ["","","","",""]}; }
  function load(){ try{ var d = JSON.parse(localStorage.getItem(KEY) || "null"); if(d && d.kids){ if(!F.scham && !d.hideout) d.hideout = ["","","","",""]; return d; } }catch(e){} return fresh(); }
  function save(){ try{ localStorage.setItem(KEY, JSON.stringify(D)); }catch(e){} }
  function neu(){
    var id = "k" + Date.now().toString(36) + Math.floor(Math.random() * 99);
    if(F.scham) return {id: id, name: "", typ: "", alter: "", song: "", a: {}, z: {}, s: {}, scham: "", schamUsed: false, problem: "", drive: "", anker: "", item: "", items: [["",""],["",""],["",""],["",""]], rel: {}, narben: [0,1,2,3,4].map(function(){ return {t: "", acc: false}; }), desc: "", notes: "", xp: {}};
    return {id: id, name: "", typ: "", alter: "", song: "", a: {}, glueck: null, z: {}, pride: "", prideUsed: false, problem: "", drive: "", anker: "", item: "", itemOn: false, s: {}, rel: {}, items: [["",""],["",""],["",""],["",""],["",""]], desc: "", notes: "", xp: {}};
  }
  function kid(id){ return D.kids.filter(function(k){ return k.id === id; })[0]; }
  function typ(id){ id = String(id || "").trim().toLowerCase(); return K.typen.filter(function(t){ return t[0] === id || t[1].toLowerCase() === id; })[0]; }
  function gmax(k){ var a = parseInt(k.alter, 10); return a >= 10 && a <= 15 ? 15 - a : 0; }
  function gcur(k){ var m = gmax(k); return k.glueck == null ? m : Math.min(m, k.glueck); }
  function nm(k){ return k.name || (L.kid === "Teen" ? "Neuer Teen" : "Neues " + L.kid); }
  function nar(k){ return (k.narben || []).map(function(n, i){ return {t: n.t, acc: n.acc, i: i}; }).filter(function(n){ return String(n.t || "").trim(); }); }

  /* ---------- Karten ---------- */
  function head(k, t){
    return '<a class="kh" href="#' + P + 'bogen/' + k.id + '">' + (t ? '<img src="img/' + t[2] + '.webp" alt="" onerror="this.style.visibility=\'hidden\'">' : '<span class="noimg"></span>') +
      '<div><h3>' + esc(nm(k)) + '</h3><b>' + esc(t ? t[1] : "Typ wählen") + (k.alter ? ' · ' + esc(k.alter) : '') + '</b>' + (k.song ? '<small>Lieblingslied: „' + esc(k.song) + '“</small>' : '') + '</div></a>';
  }
  function attrs(k){ return '<div class="ka">' + K.attr.map(function(a){ return '<div><small>' + a[1] + '</small><b>' + esc(k.a[a[0]] || "–") + '</b></div>'; }).join("") + '</div>'; }
  function zust(k){ return '<div class="kz"><small>Zustände</small><div>' + K.zustaende.map(function(z){ return '<button class="zb' + (z[0] === "geb" ? ' geb' : '') + (k.z[z[0]] ? ' on' : '') + '" data-z="' + z[0] + '">' + z[1] + '</button>'; }).join("") + '</div></div>'; }
  function card(k){
    var t = typ(k.typ);
    if(F.scham){
      var ns = nar(k);
      return '<article class="kc" data-id="' + k.id + '">' + head(k, t) + attrs(k) + zust(k) +
        '<div class="kr ksh"><button class="pb sb' + (k.schamUsed ? ' used' : '') + '" data-sh="1">' + (k.schamUsed ? 'Eingesetzt' : 'Frei') + '</button><small>Scham</small> ' + (esc(k.scham) || '…') + '</div>' +
        '<div class="kr kn5"><small>Narben</small><span class="kn">' + ns.length + ' / ' + (F.narben || 5) + '</span>' +
        (ns.length ? ns.map(function(n){ return '<div class="nr' + (n.acc ? ' used' : '') + '"><span>' + esc(n.t) + '</span><button class="pb nb' + (n.acc ? ' used' : '') + '" data-n="' + n.i + '">' + (n.acc ? 'Akzeptiert' : 'Frei') + '</button></div>'; }).join("") : '<div class="nr leer">Keine Narben</div>') + '</div>' +
        '<div class="kr"><small>Problem</small> ' + esc(k.problem) + '<br><small>Antrieb</small> ' + esc(k.drive) + '<br><small>Anker</small> ' + esc(k.anker) + '</div>' +
        '<div class="kr"><small>Kultgegenstand</small> ' + esc(k.item) + (k.item ? ' (+2)' : '') + '</div></article>';
    }
    var m = gmax(k), c = gcur(k), dots = "";
    for(var i = 0; i < m; i++) dots += '<i class="gd' + (i < c ? ' on' : '') + '" data-g="' + (i + 1) + '"></i>';
    return '<article class="kc" data-id="' + k.id + '">' + head(k, t) + attrs(k) +
      '<div class="kg"><small>Glück</small><span class="kn">' + c + ' / ' + m + '</span><div class="gdw">' + dots + '</div></div>' + zust(k) +
      '<div class="kr">' + (k.pride ? '<button class="pb' + (k.prideUsed ? ' used' : '') + '" data-p="1">' + (k.prideUsed ? 'Eingesetzt' : 'Frei') + '</button>' : '') + '<small>Stolz</small> ' + esc(k.pride) + '</div>' +
      '<div class="kr"><small>Problem</small> ' + esc(k.problem) + '<br><small>Antrieb</small> ' + esc(k.drive) + '<br><small>Anker</small> ' + esc(k.anker) + '</div>' +
      '<div class="kr"><small>Gegenstand</small> ' + esc(k.item) + (k.item ? ' (+2)' : '') + '</div></article>';
  }

  /* ---------- Beziehungen (B2) ---------- */
  function first(k){ return (nm(k).split(/\s+/)[0] || nm(k)); }
  function net(){
    var ks = D.kids, n = ks.length, st = n % 2 ? 0 : Math.PI / n, pos = ks.map(function(k, i){ var a = -Math.PI / 2 + st + i * 2 * Math.PI / n; return [50 + 36 * Math.cos(a), 50 + 38 * Math.sin(a)]; });
    var lines = "", lab = "", nodes = "";
    ks.forEach(function(a, i){
      ks.forEach(function(b, j){
        if(j <= i) return;
        var t = [];
        [[a, i, b, j], [b, j, a, i]].forEach(function(x){ var s = String((x[0].rel || {})["r" + (x[3] < x[1] ? x[3] : x[3] - 1)] || "").trim(); if(s) t.push(s); });
        if(!t.length) return;
        lines += '<line x1="' + pos[i][0] + '" y1="' + pos[i][1] + '" x2="' + pos[j][0] + '" y2="' + pos[j][1] + '"/>';
        var mx = (pos[i][0] + pos[j][0]) / 2, side = Math.abs(pos[i][0] - pos[j][0]) < 12 ? (mx > 50 ? ' l' : ' r') : '';
        lab += '<span class="rl' + side + '" style="left:' + mx + '%;top:' + (pos[i][1] + pos[j][1]) / 2 + '%">' + t.map(function(s){ return '„' + esc(s) + '“'; }).join(" · ") + '</span>';
      });
      nodes += '<span class="n" style="left:' + pos[i][0] + '%;top:' + pos[i][1] + '%">' + esc(first(a)) + '</span>';
    });
    return '<div class="net"><svg viewBox="0 0 100 100" preserveAspectRatio="none"><g>' + lines + '</g></svg>' + lab + nodes + '</div>';
  }

  /* ---------- Würfelprobe (B2) ---------- */
  function num(v){ v = parseInt(v, 10); return isNaN(v) ? 0 : v; }
  function skill(id){ return K.skills.filter(function(s){ return s[0] === id; })[0]; }
  function itemsOf(k){
    var o = [["", "Kein Gegenstand", 0]];
    if(String(k.item || "").trim()) o.push(["i", k.item + " (+2)", 2]);
    (k.items || []).forEach(function(it, i){ var b = num(it[1]); if(String(it[0] || "").trim() && b > 0) o.push(["i" + i, it[0] + " (+" + b + ")", b]); });
    return o;
  }
  function calc(k){
    var sk = skill(PRB.sk) || K.skills[0], ak = K.attr.filter(function(a){ return a[1] === sk[2]; })[0][0];
    var it = itemsOf(k).filter(function(o){ return o[0] === PRB.it; })[0] || ["", "", 0];
    var lv = ["ver", "ang", "ers", "verl"].filter(function(z){ return k.z[z]; }).length;
    return {sk: sk, broken: !!k.z.geb, n: Math.max(1, num(k.a[ak]) + num(k.s[sk[0]]) + it[2] - lv)};
  }
  function wuerfel(n){ var a = []; for(var i = 0; i < n; i++) a.push(1 + Math.floor(Math.random() * 6)); return a; }
  function erfolge(){ return ROLL ? ROLL.dice.filter(function(d){ return d === 6; }).length + ROLL.bonus : 0; }
  function probe(){
    var k = kid(PRB.kid) || D.kids[0]; if(!k) return "";
    PRB.kid = k.id; if(!skill(PRB.sk)) PRB.sk = K.skills[0][0];
    if(!itemsOf(k).some(function(o){ return o[0] === PRB.it; })) PRB.it = "";
    var c = calc(k), r = ROLL && ROLL.kid === k.id ? ROLL : null, ex = "";
    var opt = function(arr, cur){ return arr.map(function(o){ return '<option value="' + esc(o[0]) + '"' + (o[0] === cur ? ' selected' : '') + '>' + esc(o[1]) + '</option>'; }).join(""); };
    var h = '<div class="ps"><select data-ps="kid">' + opt(D.kids.map(function(x){ return [x.id, nm(x)]; }), k.id) + '</select>' +
      '<select data-ps="sk">' + opt(K.skills.map(function(s){ return [s[0], s[1] + ' (' + s[2] + ')']; }), PRB.sk) + '</select>' +
      '<select data-ps="it">' + opt(itemsOf(k), PRB.it) + '</select></div>' +
      '<div class="pw"><span class="chip f">' + esc(first(k)) + ' · ' + c.sk[1] + (c.broken ? ' · Gebrochen = Misserfolg' : ' = ' + c.n + ' W6') + '</span>' +
      '<button class="chip rb"' + (c.broken ? ' disabled' : '') + '>Würfeln</button></div>';
    if(r){
      var s = erfolge();
      h += '<div class="dr">' + r.dice.map(function(d){ return '<i class="d' + (d === 6 ? ' s6' : '') + '">' + d + '</i>'; }).join("") + (r.bonus ? Array(r.bonus + 1).join('<i class="d s6 x">6</i>') : '') + '</div>' +
        '<div class="rs ' + (s ? 'ok' : 'no') + '">' + (s ? s + (s === 1 ? ' Erfolg' : ' Erfolge') : 'Misserfolg') + '</div>';
      if(F.scham){
        if(String(k.scham || "").trim() && !k.schamUsed) ex += '<button class="chip rx" data-x="sh">Scham</button>';
        nar(k).forEach(function(n){ if(!n.acc) ex += '<button class="chip rx" data-x="n' + n.i + '">Narbe: ' + esc(n.t.length > 16 ? n.t.slice(0, 15) + '…' : n.t) + '</button>'; });
      } else {
        if(!s && !r.luck && gcur(k) > 0) ex += '<button class="chip rx" data-x="gl">Glück</button>';
        if(k.pride && !k.prideUsed) ex += '<button class="chip rx" data-x="st">Stolz</button>';
      }
      if(ex) h += '<div class="px">' + ex + '</div>';
    }
    return '<div class="box"><h3>Würfelprobe</h3>' + h + '</div>';
  }
  function extra(k, x, app){
    if(!ROLL || ROLL.kid !== k.id) return;
    if(x === "sh"){ k.schamUsed = true; ROLL.bonus++; }
    else if(x === "st"){ k.prideUsed = true; ROLL.bonus++; }
    else if(x === "gl"){ k.glueck = gcur(k) - 1; ROLL.luck = true; ROLL.dice = ROLL.dice.map(function(d){ return d === 6 ? 6 : wuerfel(1)[0]; }); }
    else if(x.charAt(0) === "n"){ var n = (k.narben || [])[+x.slice(1)]; if(n && !n.acc){ n.acc = true; ROLL.bonus++; } }
    save(); renderKids(app);
  }

  /* ---------- Untere Kästen ---------- */
  function mid(){
    if(F.scham){
      return '<div class="box"><h3>Reibung</h3><input class="hl" id="kRf" value="' + esc(D.reibung) + '">' +
        '<div class="th">' + (K.themen || []).map(function(t){ return '<button class="thc' + (D.thema === t ? ' on' : '') + '" data-th="' + esc(t) + '">' + esc(t) + '</button>'; }).join("") + '</div></div>';
    }
    return '<div class="box"><h3>Versteck</h3>' + D.hideout.map(function(h, i){ return '<input class="hl" data-h="' + i + '" value="' + esc(h) + '">'; }).join("") + '</div>';
  }
  function bottom(){
    var n = D.kids.length;
    return '<div class="kb2' + (n ? '' : ' n1') + '">' + (n ? '<div class="box"><h3>Beziehungen</h3>' + net() + '</div>' : '') + mid() + (n ? probe() : '') + '</div>';
  }

  /* ---------- Seite ---------- */
  function renderKids(app){
    setup(); D = load();
    app.className = "page kids";
    app.innerHTML = '<div class="kt"><h1>' + L.unsere + '</h1><button class="chip" id="kAdd">+ ' + L.kid + '</button><label class="chip">Bogen einlesen (PDF)<input type="file" id="kImp" accept="application/pdf,.pdf" hidden></label><button class="chip" id="kLeer">Leerer Bogen</button></div>' +
      '<div class="kgrid">' + D.kids.map(card).join("") + '</div>' + bottom();
    app.onclick = function(e){
      var t = e.target, c = t.closest(".kc"), k = c && kid(c.dataset.id);
      if(t.closest("#kAdd")){ var n = neu(); D.kids.push(n); save(); location.hash = P + "bogen/" + n.id; return; }
      if(t.closest("#kLeer")){ pdfLeer(); return; }
      var th = t.closest(".thc"); if(th){ D.thema = D.thema === th.dataset.th ? "" : th.dataset.th; save(); renderKids(app); return; }
      if(t.closest(".rb")){ var pk = kid(PRB.kid); if(pk && !calc(pk).broken){ ROLL = {kid: pk.id, dice: wuerfel(calc(pk).n), bonus: 0, luck: false}; renderKids(app); } return; }
      var rx = t.closest(".rx"); if(rx){ var rk = kid(PRB.kid); if(rk) extra(rk, rx.dataset.x, app); return; }
      if(!k) return;
      var g = t.closest(".gd"); if(g){ var v = +g.dataset.g; k.glueck = (gcur(k) === v) ? v - 1 : v; save(); renderKids(app); return; }
      var z = t.closest(".zb"); if(z){ k.z[z.dataset.z] = !k.z[z.dataset.z]; save(); renderKids(app); return; }
      if(t.closest(".sb")){ k.schamUsed = !k.schamUsed; save(); renderKids(app); return; }
      var nb = t.closest(".nb"); if(nb){ var sn = (k.narben || [])[+nb.dataset.n]; if(sn){ sn.acc = !sn.acc; save(); renderKids(app); } return; }
      if(t.closest(".pb")){ k.prideUsed = !k.prideUsed; save(); renderKids(app); return; }
    };
    app.oninput = function(e){
      var d = e.target.dataset || {};
      if(d.h != null){ D.hideout[+d.h] = e.target.value; save(); }
      if(e.target.id === "kRf"){ D.reibung = e.target.value; save(); }
    };
    app.onchange = function(e){
      var s = e.target.dataset && e.target.dataset.ps; if(!s) return;
      PRB[s] = e.target.value; if(s === "kid"){ ROLL = null; PRB.it = ""; }
      renderKids(app);
    };
    app.querySelector("#kImp").onchange = function(){ importPdf(this.files[0], app); this.value = ""; };
  }

  /* ---------- Bogen ---------- */
  function inp(k, path, cls, ph){ var v = get(k, path); return '<input class="bf ' + (cls || "") + '" data-p="' + path + '" value="' + esc(v) + '"' + (ph ? ' placeholder="' + ph + '"' : '') + '>'; }
  function get(k, p){ var o = k, a = p.split("."); for(var i = 0; i < a.length; i++){ if(o == null) return ""; o = o[a[i]]; } return o == null ? "" : o; }
  function set(k, p, v){ var o = k, a = p.split("."); for(var i = 0; i < a.length - 1; i++){ if(o[a[i]] == null) o[a[i]] = {}; o = o[a[i]]; } o[a[a.length - 1]] = v; }
  function chk(k, path){ return '<input type="checkbox" class="bc" data-p="' + path + '"' + (get(k, path) ? ' checked' : '') + '>'; }
  function row(label, inner, alt){ return '<div class="rw r' + (alt % 2) + '"><span>' + label + '</span>' + inner + '</div>'; }
  window.KIDSHELP = {inp: inp, chk: chk, row: row, esc: esc, get: get, set: set};
  function sheet(k){
    if(C.sheet && window[C.sheet]) return window[C.sheet](k, window.KIDSHELP);
    var lbl = function(t, inner, cls){ return '<label class="fd ' + (cls || "") + '"><small>' + t + '</small>' + inner + '</label>'; };
    var typSel = '<input class="bf" data-p="typ" list="typl" value="' + esc(k.typ) + '"><datalist id="typl">' + K.typen.map(function(t){ return '<option value="' + t[1] + '">'; }).join("") + '</datalist>';
    var h = '<div class="sheet" id="sheet"><div class="sh-t">Charakterbogen</div><img class="sh-logo" src="../assets/logos/tales-from-the-loop.webp" alt="Tales from the Loop">' +
      '<div class="sh-cols"><div class="sh-l">' +
      '<div class="bx"><h5>Attribute</h5>' + K.attr.map(function(a, i){ return row(a[1], inp(k, "a." + a[0], "num"), i); }).join("") + '</div>' +
      '<div class="bx"><h5>Zustände</h5>' + K.zustaende.map(function(z, i){ return row(z[1], chk(k, "z." + z[0]), i); }).join("") + '</div>' +
      '<div class="bx"><h5>Fertigkeiten</h5>' + K.skills.map(function(s, i){ return row(s[1] + ' <em>(' + s[2] + ')</em>', inp(k, "s." + s[0], "num"), i); }).join("") + '</div>' +
      '<div class="bx"><h5>Erfahrung</h5><div class="xp">' + [0,1,2,3,4,5,6,7,8,9].map(function(i){ return chk(k, "xp.x" + i); }).join("") + '</div></div></div>' +
      '<div class="sh-r"><div class="inf">' + lbl("Name", inp(k, "name"), "w2") + lbl("Alter", inp(k, "alter", "num l")) + lbl("Typ", typSel) +
      lbl("Kultgegenstand (Bonus +2)", inp(k, "item")) + lbl("Stolz", inp(k, "pride") + chk(k, "prideUsed"), "pr") + lbl("Anker", inp(k, "anker")) + lbl("Glückspunkte", '<span class="ro">' + gcur(k) + ' / ' + gmax(k) + '</span>', "pr") +
      lbl("Problem", inp(k, "problem"), "w2") + lbl("Antrieb", inp(k, "drive"), "w2") + lbl("Beschreibung", inp(k, "desc"), "w2") + lbl("Lieblingslied", inp(k, "song"), "w2") + '</div>' +
      '<div class="bx"><h5>Beziehungen</h5>' + ["Kid 1","Kid 2","Kid 3","Kid 4","NSC 1","NSC 2"].map(function(t, i){ return lbl(t, inp(k, "rel.r" + i), "w2 ln"); }).join("") + '</div>' +
      '<div class="two"><div class="bx"><h5>Gegenstände <em>Bonus</em></h5>' + [0,1,2,3,4].map(function(i){ return '<div class="it">' + inp(k, "items." + i + ".0") + inp(k, "items." + i + ".1", "num") + '</div>'; }).join("") + '</div>' +
      '<div class="bx"><h5>Versteck</h5>' + [0,1,2,3,4].map(function(i){ return '<div class="it">' + '<input class="bf" data-hd="' + i + '" value="' + esc(D.hideout[i]) + '"></div>'; }).join("") + '</div></div>' +
      '<div class="bx"><h5>Notizen</h5><textarea class="bf nt" data-p="notes">' + esc(k.notes) + '</textarea></div></div></div></div>';
    return h;
  }
  function renderBogen(app, id){
    setup(); D = load();
    var k = kid(id);
    if(!k){ app.className = "page"; app.innerHTML = '<h1>' + L.kid + ' nicht gefunden</h1>'; return; }
    app.className = "page bogen";
    app.innerHTML = '<div class="kt"><a class="chip" href="#' + P + 'kids">‹ ' + L.kids + '</a><button class="chip f" id="bPdf">Als ausfüllbares PDF</button><button class="chip" id="bPrint">Drucken</button><button class="chip" id="bDel">' + L.kid + ' löschen</button></div>' + sheet(k);
    function upd(e){ var t = e.target;
      if(t.dataset.hd != null){ D.hideout[+t.dataset.hd] = t.value; save(); return; }
      var p = t.dataset.p; if(!p) return;
      set(k, p, t.type === "checkbox" ? t.checked : t.value); save(); }
    app.oninput = upd; app.onchange = function(e){ upd(e); if(e.target.dataset.p === "alter" && !F.scham) renderBogen(app, id); };
    app.querySelector("#bPrint").onclick = function(){ window.print(); };
    app.querySelector("#bDel").onclick = function(){ if(confirm((L.kid === "Teen" ? "Diesen Teen" : "Dieses " + L.kid) + " löschen?")){ D.kids = D.kids.filter(function(x){ return x.id !== id; }); save(); location.hash = P + "kids"; } };
    app.querySelector("#bPdf").onclick = function(){ if(!window.FillPDF) return; FillPDF.make(document.getElementById("sheet"), {name: BOOK + " – " + nm(k), knopf: this}); };
  }

  /* ---------- Leerer Bogen / Einlesen ---------- */
  function offscreen(k){ var d = document.createElement("div"); d.style.cssText = "position:absolute;left:-9999px;top:0"; d.innerHTML = sheet(k); document.body.appendChild(d); return d; }
  function pdfLeer(){ if(!window.FillPDF) return; var d = offscreen(neu()); FillPDF.make(d.querySelector("#sheet"), {name: BOOK + " – Leerer Bogen"}).then(function(){ d.remove(); }, function(){ d.remove(); }); }
  function importPdf(file, app){
    if(!file) return;
    var lib = window.PDFLib ? Promise.resolve() : new Promise(function(res, rej){ var s = document.createElement("script"); s.src = "../shared/lib/pdf-lib.min.js"; s.onload = res; s.onerror = rej; document.head.appendChild(s); });
    lib.then(function(){ return file.arrayBuffer(); }).then(function(buf){ return PDFLib.PDFDocument.load(buf); }).then(function(doc){
      var form = doc.getForm(), k = neu(), d = offscreen(k), n = 0, ok = 0;
      d.querySelectorAll("input,textarea,select").forEach(function(e){
        if(e.tagName === "SELECT") return;
        if(e.type === "file" || e.type === "hidden" || !(e.offsetWidth || e.offsetHeight)) return;
        n++; var p = e.dataset.p, hd = e.dataset.hd;
        try{
          if(e.type === "checkbox"){ var c = form.getCheckBox("k" + n); if(p) set(k, p, c.isChecked()); ok++; }
          else { var v = form.getTextField("t" + n).getText() || ""; if(p) set(k, p, v); else if(hd != null && D.hideout) D.hideout[+hd] = v || D.hideout[+hd]; ok++; }
        }catch(x){}
      });
      d.remove();
      if(!ok){ alert("Das ist kein Bogen aus diesem Tool (keine passenden Felder gefunden)."); return; }
      D.kids.push(k); save(); location.hash = P + "bogen/" + k.id;
    }).catch(function(){ alert("Die Datei konnte nicht gelesen werden."); });
  }
  renderKids.ctx = true; renderBogen.ctx = true;
  window.renderKids = renderKids; window.renderBogen = renderBogen;
})();
