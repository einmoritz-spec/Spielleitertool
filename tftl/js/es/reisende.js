/* The Electric State – Reisende der Gruppe (e4), Würfelprobe, Spannung, Fahrzeug, Archetypen-Kachelraster.
   Speicher: es_reisende_v1 (Liste), es_fahrzeug_v1, es_reise_v1.pz (persönliche Countdowns, gemeinsam mit dem Reise-Leitstand). */
window.ES = window.ES || {};
(function(){
  var KEY = "es_reisende_v1", FKEY = "es_fahrzeug_v1", RKEY = "es_reise_v1";
  var AT = [["st", "Stärke", "STÄ"], ["ge", "Geschick", "GES"], ["ve", "Verstand", "VER"], ["em", "Empathie", "EMP"]];
  var D = [], PRE = false, PRB = {kid: "", a: "st", g: 0, m: 0, vs: ""}, ROLL = null;

  function esc(s){ return String(s == null ? "" : s).replace(/[&<>"]/g, function(c){ return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]; }); }
  function num(v){ v = parseInt(v, 10); return isNaN(v) ? 0 : v; }
  function pg(s){ return '<a class="pgl" data-b="tftl_es" data-s="' + s + '">S. ' + s + '</a>'; }
  function norm(s){ return String(s || "").toLowerCase().replace(/\(.*?\)/g, "").replace(/[\s\/]+/g, ""); }

  /* ---------- Speicher ---------- */
  function load(){ try{ var d = JSON.parse(localStorage.getItem(KEY) || "null"); if(d && d.length != null) return d; }catch(e){} return []; }
  function save(){ try{ localStorage.setItem(KEY, JSON.stringify(D)); }catch(e){} }
  function jget(key){ try{ return JSON.parse(localStorage.getItem(key) || "null") || {}; }catch(e){ return {}; } }
  function pzGet(id){ return (jget(RKEY).pz || {})[id] || []; }
  function pzSet(id, i, v){ var r = jget(RKEY); r.pz = r.pz || {}; var a = r.pz[id] || []; a[i] = v; for(var j = 0; j < a.length; j++) a[j] = !!a[j]; r.pz[id] = a; try{ localStorage.setItem(RKEY, JSON.stringify(r)); }catch(e){} }
  function neu(extra){
    var k = {id: "r" + Date.now().toString(36) + Math.floor(Math.random() * 99), name: "", arch: "", song: "", desc: "", a: {}, ges: null, hof: null, rausch: "", dauer: "", talente: ["", "", "", ""], traum: "", schw: "", ausr: ["", "", "", ""], bargeld: "", verl: "", ziel: "", bedr: "", sp: [{n: "", v: ""}, {n: "", v: ""}, {n: "", v: ""}, {n: "", v: ""}], spann: {}};
    for(var x in (extra || {})) k[x] = extra[x];
    return k;
  }
  function kid(id){ return D.filter(function(k){ return k.id === id; })[0]; }
  function nm(k){ return k.name || "Neue(r) Reisende(r)"; }
  function first(k){ return (nm(k).split(/[\s\/]+/)[0] || nm(k)); }
  function arch(k){ var n = norm(k.arch); if(!n) return null; return (ES.ARCHETYPEN || []).filter(function(a){ return a.id === n || norm(a.name) === n; })[0] || null; }
  function zielOf(k){ var a = arch(k), z = a && ES.ZIELE && ES.ZIELE.archetypen && ES.ZIELE.archetypen[a.id]; return z || null; }
  function hasTal(k, t){ return (k.talente || []).some(function(x){ return norm(x) === norm(t); }); }
  function hmax(k){ return Math.ceil((num(k.a.st) + num(k.a.ge)) / 2) + (hasTal(k, "Zäh") ? 2 : 0); }
  function wmax(k){ return Math.ceil((num(k.a.ve) + num(k.a.em)) / 2) + (hasTal(k, "Träumer") ? 2 : 0); }
  function gcur(k){ var m = hmax(k); return k.ges == null || k.ges === "" ? m : Math.max(0, Math.min(m, num(k.ges))); }
  function hcur(k){ var m = wmax(k); return k.hof == null || k.hof === "" ? m : Math.max(0, Math.min(m, num(k.hof))); }
  function spann(a, b){ return Math.max(0, Math.min(2, num((a.spann || {})[b.id]))); }
  function get(k, p){ var o = k, a = p.split("."); for(var i = 0; i < a.length; i++){ if(o == null) return ""; o = o[a[i]]; } return o == null ? "" : o; }
  function set(k, p, v){ var o = k, a = p.split("."); for(var i = 0; i < a.length - 1; i++){ if(o[a[i]] == null) o[a[i]] = {}; o = o[a[i]]; } o[a[a.length - 1]] = v; }

  /* Fahrzeug (aus „Into the Dust“ vorbelegt) */
  function fzDef(){
    var f = {}, w = {}; ((window.ES && ES.REISE && ES.REISE.route) || []).forEach(function(r){ if(r.fahrzeug) f = r.fahrzeug; });
    (f.w || []).forEach(function(x){ w[x[0]] = x[1]; });
    var e = (f.eigenschaften || []).slice(0, 4); while(e.length < 4) e.push("");
    return {typ: "", modell: f.name || "", pass: "", tank: "", desc: "", man: w["Manövrierbarkeit"] != null ? String(w["Manövrierbarkeit"]) : "", tempo: w["Tempo"] != null ? String(w["Tempo"]) : "", rumpf: w["Rumpf"] != null ? String(w["Rumpf"]) : "", rcur: null, panz: w["Panzerung"] != null ? String(w["Panzerung"]) : "", eig: e, ausr: ["", "", "", ""], antrieb: f.antrieb || ""};
  }
  function fzLoad(){ var d = fzDef(), s = jget(FKEY); for(var x in s) d[x] = s[x]; return d; }
  function fzSave(f){ try{ localStorage.setItem(FKEY, JSON.stringify(f)); }catch(e){} }
  function fzCur(f){ var m = num(f.rumpf); return f.rcur == null || f.rcur === "" ? m : Math.max(0, Math.min(m, num(f.rcur))); }

  ES.R = {KEY: KEY, AT: AT, esc: esc, num: num, pg: pg, norm: norm, load: load, save: save, neu: neu, nm: nm, first: first, arch: arch, zielOf: zielOf, hmax: hmax, wmax: wmax, gcur: gcur, hcur: hcur, get: get, set: set, fzLoad: fzLoad, fzSave: fzSave, fzCur: fzCur, fzDef: fzDef, setD: function(d){ D = d; }, getD: function(){ return D; }};

  /* ---------- Karten ---------- */
  function dots(n, cur, kind, warn){
    var h = "";
    for(var i = 1; i <= n; i++) h += '<i class="dt' + (i <= cur ? ' on' : '') + (warn && i <= cur ? ' warn' : '') + '" data-d="' + kind + '" data-n="' + i + '"></i>';
    return h;
  }
  function card(k){
    var a = arch(k), z = zielOf(k), gm = hmax(k), wm = wmax(k), hc = hcur(k), rs = Math.max(0, num(k.rausch));
    var ziel = k.ziel || (z && z.ziel) || "", bedr = k.bedr || (z && z.bedrohung) || "", cd = (z && z.countdown) || [], pz = pzGet(k.id);
    var tal = (k.talente || []).filter(function(t){ return String(t).trim(); }).join(", ");
    var ausr = (k.ausr || []).filter(function(t){ return String(t).trim(); }).join(" · ");
    var det = [k.schw ? '<p><small>Schwäche</small> ' + esc(k.schw) + '</p>' : '', ausr ? '<p><small>Ausrüstung</small> ' + esc(ausr) + (k.bargeld ? ' · ' + esc(k.bargeld) : '') + '</p>' : ''].join("");
    return '<article class="rc" data-id="' + k.id + '">' +
      '<a class="rf" href="#es/bogen/' + k.id + '">' + (a ? '<img src="img/es/a-' + a.id + '.webp" alt="" onerror="this.style.visibility=\'hidden\'">' : '') + '</a>' +
      '<div class="rb"><a class="rn" href="#es/bogen/' + k.id + '"><h3>' + esc(nm(k)) + '</h3></a>' +
      '<div class="rsub">' + esc(a ? a.name : (k.arch || "Archetyp wählen")) + (k.song ? ' · ' + esc(k.song) : '') + '</div>' +
      '<div class="ra">' + AT.map(function(t){ return '<div><small><span class="l1">' + t[1] + '</span><span class="l2">' + t[2] + '</span></small><b>' + esc(k.a[t[0]] || "–") + '</b></div>'; }).join("") + '</div>' +
      '<div class="rd"><span>Gesundheit</span><div>' + dots(gm, gcur(k), "g") + '</div></div>' +
      '<div class="rd"><span>Hoffnung</span><div>' + dots(wm, hc, "h") + (hc === 0 && wm ? '<em class="zbr">Zusammenbruch</em>' : '') + '</div></div>' +
      '<div class="rd rr"><span>Rausch</span><div>' + dots(Math.max(wm, rs), rs, "r", rs > 0 && rs >= hc) + '</div></div>' +
      (tal ? '<div class="rt"><small>Talent</small>' + esc(tal) + '</div>' : '') +
      (k.traum ? '<div class="rt"><small>Traum</small>' + esc(k.traum) + '</div>' : '') +
      (det ? '<details class="rm"><summary>Mehr</summary>' + det + '</details>' : '') +
      ((ziel || bedr) ? '<div class="rj"><h5>Reise</h5>' + (ziel ? '<p><b>Ziel:</b> ' + esc(ziel) + '</p>' : '') + (bedr ? '<p><b>Bedrohung:</b> ' + esc(bedr) + '</p>' : '') +
        (cd.length ? '<div class="cdb">' + cd.map(function(t, i){ return '<i class="' + (pz[i] ? 'on' : '') + '" data-cd="' + i + '" title="' + esc((i + 1) + ". " + t) + '"></i>'; }).join("") + '</div>' : '') + '</div>' : '') +
      '</div></article>';
  }

  /* ---------- Spannung (S. 64) ---------- */
  function spBox(){
    if(D.length < 2) return "";
    return '<div class="rbx rsp"><h3><i class="sq"></i>Spannung ' + pg(64) + '</h3><table><thead><tr><th>von ↓ zu →</th>' + D.map(function(k){ return '<th>' + esc(first(k)) + '</th>'; }).join("") + '</tr></thead><tbody>' +
      D.map(function(a){ return '<tr><th>' + esc(first(a)) + '</th>' + D.map(function(b){ return a === b ? '<td class="x">–</td>' : '<td><button class="sv v' + spann(a, b) + '" data-a="' + a.id + '" data-b="' + b.id + '">' + spann(a, b) + '</button></td>'; }).join("") + '</tr>'; }).join("") + '</tbody></table></div>';
  }
  /* ---------- Fahrzeug ---------- */
  function fzBox(){
    var f = fzLoad(), m = num(f.rumpf), c = fzCur(f), eig = (f.eig || []).filter(function(x){ return String(x).trim(); });
    var sub = [f.modell, f.antrieb].filter(Boolean).join(", ") + (eig.length ? ' · ' + eig.join(", ") : '');
    var cell = function(l, v){ return '<div><small>' + l + '</small><b>' + esc(v === "" ? "–" : v) + '</b></div>'; };
    return '<div class="rbx rfz"><h3><i class="sq"></i>Fahrzeug ' + pg(154) + '</h3><p class="fzs">' + esc(sub) + '</p>' +
      '<div class="fza">' + cell("Manövrierb.", f.man) + cell("Tempo", f.tempo) + cell("Rumpf", f.rumpf) + cell("Panzerung", f.panz) + '</div>' +
      '<div class="rd"><span>Rumpf</span><div>' + dots(m, c, "f") + '</div></div>' +
      '<a class="chip" href="#es/fahrzeug">Fahrzeugbogen</a></div>';
  }
  /* ---------- Würfelprobe (S. 53–54) ---------- */
  function wf(n, g){ var a = []; for(var i = 0; i < n; i++) a.push({v: 1 + Math.floor(Math.random() * 6), g: !!g}); return a; }
  function bonusSp(k){
    var o = kid(PRB.vs); if(!o || o.id === k.id) return 0;
    return spann(k, o) * (hasTal(k, "Dramaqueen") ? 2 : 1);
  }
  function nBase(k){ return Math.max(1, num(k.a[PRB.a]) + PRB.m + bonusSp(k)); }
  function probe(){
    var k = kid(PRB.kid) || D[0]; if(!k) return "";
    PRB.kid = k.id; if(PRB.vs === k.id) PRB.vs = "";
    var r = ROLL && ROLL.kid === k.id ? ROLL : null, sp = bonusSp(k), body = "";
    var chips = function(arr, cur, key){ return arr.map(function(x){ return '<button class="pc' + (x[0] === cur ? ' on' : '') + '" data-pk="' + key + '" data-v="' + esc(x[0]) + '">' + esc(x[1]) + '</button>'; }).join(""); };
    body += '<div class="pr">' + chips(D.map(function(x){ return [x.id, first(x)]; }), k.id, "kid") + '</div>' +
      '<div class="pr">' + chips(AT.map(function(t){ return [t[0], t[1]]; }), PRB.a, "a") + '</div>' +
      '<div class="pr"><button class="pc" data-pk="g">Ausrüstung ' + (PRB.g ? '+' + PRB.g : '+0') + '</button><button class="pc" data-pk="m">Würfel ' + (PRB.m > 0 ? '+' + PRB.m : PRB.m) + '</button>' +
      (D.length > 1 ? '<span class="pl">Gegen</span>' + chips([["", "–"]].concat(D.filter(function(x){ return x.id !== k.id; }).map(function(x){ return [x.id, first(x)]; })), PRB.vs, "vs") : '') + '</div>' +
      '<div class="pr pwr"><b>' + nBase(k) + ' W6' + (PRB.g ? ' + ' + PRB.g + ' Ausrüstung' : '') + '</b>' + (sp ? '<small>Spannung +' + sp + '</small>' : '') + '<button class="chip f" data-pk="roll">Würfeln</button></div>';
    if(r){
      var s = r.dice.filter(function(d){ return d.v === 6; }).length, ob = r.dice.filter(function(d){ return !d.g && d.v === 1; }).length, og = r.dice.filter(function(d){ return d.g && d.v === 1; }).length;
      body += '<div class="ddr">' + r.dice.map(function(d){ return '<i class="dd' + (d.g ? ' g' : '') + (d.v === 6 ? ' s6' : d.v === 1 ? ' s1' : '') + '">' + d.v + '</i>'; }).join("") + '</div>' +
        '<div class="pr"><span class="rsl ' + (s ? 'ok' : 'no') + '">' + (s ? s + (s === 1 ? ' Erfolg' : ' Erfolge') : 'Misserfolg') + '</span>' +
        (r.pushed ? '<span class="pl">Forciert' + (r.lost ? ' · −' + r.lost + ' Hoffnung' : '') + (og ? ' · Ausrüstungsbonus −' + og : '') + '</span>' : '<button class="chip" data-pk="push">Forcieren</button>') + '</div>';
    }
    return '<div class="rbx rpb"><h3><i class="sq"></i>Würfelprobe ' + pg(53) + '</h3>' + body + '</div>';
  }
  function roll(k){ ROLL = {kid: k.id, dice: wf(nBase(k)).concat(wf(PRB.g, true)), pushed: false, lost: 0}; }
  function push(k){
    if(!ROLL || ROLL.pushed) return;
    ROLL.dice = ROLL.dice.map(function(d){ return d.v === 1 || d.v === 6 ? d : {v: 1 + Math.floor(Math.random() * 6), g: d.g}; });
    ROLL.pushed = true;
    ROLL.lost = ROLL.dice.filter(function(d){ return !d.g && d.v === 1; }).length;
    if(ROLL.lost){ k.hof = Math.max(0, hcur(k) - ROLL.lost); save(); }
  }

  /* ---------- Seite ---------- */
  function importPdf(file, app){
    if(!file || !ES.bogenImport) return;
    ES.bogenImport(file, app);
  }
  function renderReisende(app){
    D = load();
    var y = window.scrollY;
    app.className = "page esr";
    var pre = (ES.VORGEFERTIGT || []).map(function(p){
      var a = (ES.ARCHETYPEN || []).filter(function(x){ return x.id === p.archetyp; })[0], da = D.some(function(k){ return k.pid === p.id; });
      return '<button class="pt' + (da ? ' done' : '') + '" data-pre="' + p.id + '"><span class="pim">' + (a ? '<img src="img/es/a-' + a.id + '.webp" alt="" onerror="this.style.visibility=\'hidden\'">' : '') + '</span><span><b>' + esc(p.name) + '</b><i>' + esc(a ? a.name : "") + ' · ' + pg(p.s) + '</i></span></button>';
    }).join("");
    app.innerHTML = '<div class="rk"><h1>Unsere Reisenden</h1><button class="chip" id="rAdd">+ Reisende(r)</button><button class="chip' + (PRE ? ' f' : '') + '" id="rPre">Vorgefertigte Reisende</button>' +
      '<label class="chip">Bogen einlesen (PDF)<input type="file" id="rImp" accept="application/pdf,.pdf" hidden></label><button class="chip" id="rLeer">Leerer Bogen</button></div>' +
      (PRE ? '<div class="rpre">' + pre + '</div>' : '') +
      (D.length ? '<div class="rgrid">' + D.map(card).join("") + '</div>' : '') +
      '<div class="rrow">' + spBox() + fzBox() + probe() + '</div>';
    app.onclick = function(e){
      var t = e.target, c = t.closest(".rc"), k = c && kid(c.dataset.id);
      if(t.closest("#rAdd")){ var n = neu(); D.push(n); save(); location.hash = "es/bogen/" + n.id; return; }
      if(t.closest("#rPre")){ PRE = !PRE; renderReisende(app); return; }
      if(t.closest("#rLeer")){ if(ES.bogenLeer) ES.bogenLeer(); return; }
      var pt = t.closest(".pt");
      if(pt){
        var p = (ES.VORGEFERTIGT || []).filter(function(x){ return x.id === pt.dataset.pre; })[0];
        if(p && !D.some(function(x){ return x.pid === p.id; })){ D.push(fromPre(p)); save(); }
        renderReisende(app); return;
      }
      var sv = t.closest(".sv");
      if(sv){ var a = kid(sv.dataset.a); a.spann = a.spann || {}; a.spann[sv.dataset.b] = (spann(a, kid(sv.dataset.b)) + 1) % 3; save(); renderReisende(app); return; }
      var pk = t.closest("[data-pk]");
      if(pk){
        var key = pk.dataset.pk, pkid = kid(PRB.kid) || D[0];
        if(key === "kid"){ PRB.kid = pk.dataset.v; ROLL = null; PRB.vs = ""; }
        else if(key === "a"){ PRB.a = pk.dataset.v; ROLL = null; }
        else if(key === "vs"){ PRB.vs = pk.dataset.v; ROLL = null; }
        else if(key === "g"){ PRB.g = (PRB.g + 1) % 5; ROLL = null; }
        else if(key === "m"){ PRB.m = PRB.m >= 3 ? -2 : PRB.m + 1; ROLL = null; }
        else if(key === "roll" && pkid) roll(pkid);
        else if(key === "push" && pkid) push(pkid);
        renderReisende(app); return;
      }
      var cd = t.closest("[data-cd]");
      if(cd && k){ var i = +cd.dataset.cd; pzSet(k.id, i, !pzGet(k.id)[i]); renderReisende(app); return; }
      var d = t.closest(".dt");
      if(d && k){
        var kind = d.dataset.d, v = +d.dataset.n;
        if(kind === "g") k.ges = gcur(k) === v ? v - 1 : v;
        else if(kind === "h") k.hof = hcur(k) === v ? v - 1 : v;
        else k.rausch = num(k.rausch) === v ? v - 1 : v;
        save(); renderReisende(app); return;
      }
      if(t.closest(".rfz .dt")){ var f = fzLoad(); f.rcur = fzCur(f) === +t.dataset.n ? +t.dataset.n - 1 : +t.dataset.n; fzSave(f); renderReisende(app); }
    };
    app.oninput = null; app.onchange = null;
    app.querySelector("#rImp").onchange = function(){ importPdf(this.files[0], app); this.value = ""; };
    window.scrollTo(0, y);
  }
  function fromPre(p){
    var a = (ES.ARCHETYPEN || []).filter(function(x){ return x.id === p.archetyp; })[0];
    var ausr = (p.ausruestung || []).slice(); if(p.neurocaster) ausr.push("Neurocaster: " + p.neurocaster);
    while(ausr.length < 4) ausr.push("");
    var tal = (p.talente || []).slice(); while(tal.length < 4) tal.push("");
    var z = a && ES.ZIELE && ES.ZIELE.archetypen && ES.ZIELE.archetypen[a.id] || {};
    var k = neu({ziel: z.ziel || "", bedr: z.bedrohung || "", pid: p.id, name: p.name, arch: a ? a.name : "", song: p.song || "", a: {st: String(p.a.st), ge: String(p.a.ge), ve: String(p.a.ve), em: String(p.a.em)}, talente: tal, traum: p.traum || "", schw: p.schwaeche || "", ausr: ausr.slice(0, 4)});
    return k;
  }
  ES.fromPre = fromPre;
  ES.renderReisende = renderReisende;

  /* ---------- Archetypen-Kachelraster / Detail (Nachschlagen, #es/nach/reisende/archetypen[/<id>]) ---------- */
  ES.archetypen = function(app, id){
    var L = ES.ARCHETYPEN || [], a = id && L.filter(function(x){ return x.id === id; })[0];
    app.onclick = null;
    if(!a){
      app.className = "page nach esa";
      app.innerHTML = '<div class="nh"><h1>Die Archetypen</h1><small>Kap. 3 · ' + pg(66) + '</small></div><div class="eag">' + L.map(function(x){
        return '<a class="ear" href="#es/nach/reisende/archetypen/' + x.id + '"><span class="eaf"><img src="img/' + x.bild + '.webp" alt="" onerror="this.style.visibility=\'hidden\'"></span><span class="eax"><h3>' + esc(x.name) + '</h3><small>S. ' + x.s + '</small>' +
          '<p><i>Schlüsselattribut</i>' + esc(x.schluessel) + '</p><p><i>Bargeld</i>' + esc(x.geld || "Keines") + '</p></span></a>';
      }).join("") + '</div>';
      return;
    }
    var tb = function(t, rows){ return rows && rows.length ? '<section class="bx eatb"><h4><i class="sq"></i>' + t + '</h4><table>' + rows.map(function(r){ return '<tr><th>' + esc(r[0]) + '</th><td>' + r[1] + '</td></tr>'; }).join("") + '</table></section>' : ""; };
    app.className = "page nach esa";
    app.innerHTML = '<div class="nh"><a class="chip" href="#es/nach/reisende/archetypen">‹ Archetypen</a><h1>' + esc(a.name) + '</h1><small>' + pg(a.s) + '</small><button class="chip f" id="aNew">Als Reisende(n) anlegen</button></div>' +
      '<div class="eadt"><div class="eadf"><img src="img/' + a.bild + '.webp" alt="" onerror="this.style.visibility=\'hidden\'"></div><div class="eadx">' +
      (a.zitat ? '<blockquote class="nzit">„' + a.zitat.t + '“<cite>' + esc(a.zitat.von) + '</cite></blockquote>' : '') + a.html +
      '<div class="eak"><div><i>Schlüsselattribut</i><b>' + esc(a.schluessel) + '</b></div><div><i>Bargeld</i><b>' + esc(a.geld || "Keines") + '</b></div></div>' +
      (a.hinweis ? '<section class="bx eatb"><h4><i class="sq"></i>Hinweis</h4>' + a.hinweis + '</section>' : '') + '</div></div>' +
      '<div class="eatbs">' + tb("Persönlicher Gegenstand", a.gegenstand) + tb("Talent", a.talente) + tb("Traum", a.traum) + tb("Schwäche", a.schwaeche) + tb("Neurocaster", a.neurocaster) + '</div>';
    app.querySelector("#aNew").onclick = function(){
      D = load(); var z = ES.ZIELE && ES.ZIELE.archetypen && ES.ZIELE.archetypen[a.id];
      var n = neu({arch: a.name, ziel: z ? z.ziel : "", bedr: z ? z.bedrohung : ""}); D.push(n); save(); location.hash = "es/bogen/" + n.id;
    };
  };
})();
