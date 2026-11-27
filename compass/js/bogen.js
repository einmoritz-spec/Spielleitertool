/* BROKEN COMPASS – Abenteurerbogen nach dem Originalbogen (Material „Character Sheet“): Original-Hintergrund ohne Text
   (img/bogen/hintergrund.webp), deutsche Beschriftung und Felder darüber, Maße in Punkten des Originals (425 × 594 pt; 1 pt = 4/3 px).
   Mehrere Bögen als Chips, Zufallsabenteurer (S. 54–57), fertige Abenteurer (S. 230–233), Tags mit Rauten (S. 36–43),
   Teilen per Link, Datei sichern/laden, ausfüllbares PDF (shared/fillpdf.js). Daten: js/data/bogen-daten.js (BC_BOGEN). */
"use strict";
var BOGEN = (function(){
  var KEY = "bc_bogen", KEY2 = "bc_bogen_v2", K = 4 / 3, PW = 425.2, PH = 594;
  var FELDER = [["Aktion", ["Kämpfen", "Anführen", "Stunt"]], ["Mut", ["Kaltblütigkeit", "Fahren", "Schießen"]], ["Wissen", ["Kultur", "Erste Hilfe", "Technik"]],
    ["Gesellschaft", ["Charme", "Redekunst", "Beobachtung"]], ["Wildnis", ["Spähen", "Überleben", "Zäh"]], ["Verbrechen", ["Wachsam", "Fingerfertigkeit", "Schleichen"]]];
  var FN = FELDER.map(function(f){ return f[0]; }), SK = []; FELDER.forEach(function(f){ f[1].forEach(function(s){ SK.push(s); }); });
  var GUT = ["Kraftvoll", "Wagemutig", "Konzentriert", "Selbstsicher", "Wild entschlossen", "Unantastbar"];
  var SCHLECHT = ["Blutend", "Geschockt", "Benommen", "Beschämt", "Gebrochen", "Verängstigt"];
  /* Positionen im Original (pt, von oben links) */
  var FY = [150.9, 203.9, 256.9, 309.9, 362.9, 415.9], FX = [89.1, 95.6, 102.1];
  var SY = [[165.4, 176.2, 187], [218.5, 229.3, 240], [271.6, 282.4, 293.1], [324.7, 335.5, 346.2], [377.8, 388.5, 399.3], [430.9, 441.6, 452.4]], SX = [110.2, 115.4, 120.5];
  var LX = [145.3, 154.6, 163.8, 173.8, 183, 192.2, 202.2, 211.4, 220.7, 229.9];
  var GY = [253.8, 265.2, 276.6, 288, 299.4, 310.8, 322.2, 333.6];
  var EY = [237.1, 252.5, 267.9, 283.3, 298.7, 314.1], WY = [374.8, 390.2, 405.6, 421.1, 436.5], NY = [483.7, 499.1, 514.5, 529.9, 545.4, 560.8], MY = [542.6, 553.4, 564.2], MX = [340.7, 358.5, 376.3];
  var NAMEN_V = ["Ada", "Amelia", "Anton", "Beatriz", "Carlos", "Clara", "Dimitri", "Elena", "Emil", "Farah", "Felix", "Greta", "Hiro", "Ines", "Ivan", "Jonas", "Kofi", "Lena", "Luca", "Mara", "Mateo", "Nadia", "Nico", "Olga", "Oskar", "Priya", "Rafael", "Rosa", "Samir", "Sofia", "Tariq", "Vera", "Viktor", "Yuki"];
  var NAMEN_N = ["Albrecht", "Barros", "Castellano", "Delacroix", "Eriksen", "Ferreira", "Gallagher", "Hartmann", "Ishikawa", "Jansen", "Kowalski", "Lindqvist", "Moreau", "Novak", "O’Hara", "Petrov", "Quintero", "Rossi", "Sandoval", "Takahashi", "Udeh", "Varga", "Whitmore", "Yilmaz", "Zamora"];
  var B = window.BC_BOGEN || {tags: [], orte: [], exp: [], motto: [], items: {}, wg: [], vor: [], zufTags: [], expInfo: {}};

  /* ---------- Zustand: mehrere Bögen ---------- */
  function leer(){
    var K0 = {}; SK.forEach(function(s){ K0[s] = 1; });
    return {name: "", ruf: "", herk: "", heim: "", arb: "", motto: "", F: [2, 2, 2, 2, 2, 2], K: K0, luck: z(10, 0), coin: "", fg: z(8, 0), fb: z(8, 0), fgn: ["", ""], fbn: ["", ""],
      exp: z(6, ""), wn: z(5, ""), wd: z(5, ""), nar: z(6, ""), tas: z(4, ""), beu: z(4, ""), ruc: z(5, ""), mag: [z(4, ""), z(4, ""), z(4, "")], bild: "", tags: [], tw: {}};
  }
  function z(n, v){ var a = []; for(var i = 0; i < n; i++) a.push(v); return a; }
  /* Eingelesenes gegen die Vorlage prüfen: nur bekannte Felder und Typen */
  function mischen(tpl, src){
    if(Array.isArray(tpl)) return tpl.map(function(t, i){ return mischen(t, src && src[i]); });
    if(tpl && typeof tpl === "object"){
      var o = {}, k;
      if(!Object.keys(tpl).length){ if(src && typeof src === "object" && !Array.isArray(src)) for(k in src) o[k] = src[k]; return o; }
      for(k in tpl) o[k] = mischen(tpl[k], src && src[k]);
      if("tags" in tpl && src && Array.isArray(src.tags)) o.tags = src.tags.filter(function(x){ return typeof x === "string"; }).slice(0, 2);
      return o;
    }
    return typeof src === typeof tpl ? src : tpl;
  }
  function sauber(d){ var o = mischen(leer(), d); o.F = o.F.map(function(v){ return Math.max(2, Math.min(3, +v || 2)); }); SK.forEach(function(s){ o.K[s] = Math.max(1, Math.min(3, +o.K[s] || 1)); }); return o; }
  var DB = null, D = null;
  function nid(){ return "b" + Date.now().toString(36) + Math.floor(Math.random() * 1296).toString(36); }
  function laden(){
    try{ DB = JSON.parse(localStorage.getItem(KEY2)); }catch(e){ DB = null; }
    if(!DB || !Array.isArray(DB.l) || !DB.l.length){ DB = {l: [], cur: ""}; var alt = altUebernehmen(); var e = {id: nid(), d: alt || leer()}; DB.l.push(e); DB.cur = e.id; speichern(); }
    if(!eintrag(DB.cur)) DB.cur = DB.l[0].id;
    DB.l.forEach(function(e){ e.d = sauber(e.d); });
    D = eintrag(DB.cur).d;
  }
  function eintrag(id){ return DB.l.filter(function(e){ return e.id === id; })[0]; }
  function speichern(){ try{ localStorage.setItem(KEY2, JSON.stringify(DB)); }catch(e){ toast("Speicher voll – das Bild ist zu groß."); } }
  /* alter Bogen (bc_bogen) → erster Eintrag */
  function altUebernehmen(){
    var S; try{ S = JSON.parse(localStorage.getItem(KEY) || "null"); }catch(e){ S = null; }
    if(!S || !S.f) return null;
    var d = leer(), f = S.f, p = S.p || {}, c = S.c || {}, i;
    d.name = f.name || ""; d.ruf = f.ruf || ""; d.herk = f.herkunft || ""; d.heim = f.heimat || ""; d.arb = f.arbeit || ""; d.motto = f.motto || "";
    FELDER.forEach(function(F, fi){ d.F[fi] = Math.max(2, Math.min(3, p["F" + fi] || 2)); F[1].forEach(function(s, si){ d.K[s] = Math.max(1, Math.min(3, p["s" + fi + si] || 1)); }); });
    for(i = 0; i < 10; i++) d.luck[i] = c["l" + i] ? 1 : 0;
    for(i = 0; i < 6; i++){ d.fg[i] = c["fg" + i] ? 1 : 0; d.fb[i] = c["fb" + i] ? 1 : 0; d.exp[i] = f["e" + i] || ""; d.nar[i] = f["n" + i] || ""; }
    for(i = 0; i < 4; i++){ d.wn[i] = f["w" + i] || ""; d.wd[i] = f["wd" + i] || ""; d.tas[i] = f["t" + i] || ""; }
    for(i = 0; i < 3; i++) d.beu[i] = f["u" + i] || "";
    for(i = 0; i < 5; i++) d.ruc[i] = f["r" + i] || "";
    return gefuellt(d) ? d : null;
  }
  function gefuellt(d){ return JSON.stringify(sauber(d)) !== JSON.stringify(leer()); }
  function neu(d, erzwingen){
    if(!erzwingen && !gefuellt(D)){ eintrag(DB.cur).d = D = sauber(d || leer()); speichern(); return DB.cur; }
    var e = {id: nid(), d: sauber(d || leer())}; DB.l.push(e); DB.cur = e.id; D = e.d; speichern(); return e.id;
  }
  function gehe(id){ if(location.hash === "#bogen/" + id) render(id); else location.hash = "bogen/" + id; }

  /* ---------- kleine Helfer ---------- */
  function esc(s){ return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"); }
  function px(v){ return (v * K).toFixed(2) + "px"; }
  function ab(x, y, w, h){ return "left:" + px(x) + ";top:" + px(y) + (w != null ? ";width:" + px(w) : "") + (h != null ? ";height:" + px(h) : ""); }
  function wf(n){ return Math.floor(Math.random() * n); }
  function pick(a){ return a[wf(a.length)]; }
  function toast(t){ var d = document.createElement("div"); d.className = "bcb-toast"; d.textContent = t; document.body.appendChild(d); setTimeout(function(){ d.remove(); }, 2600); }
  function wert(p){ var a = p.split("."), o = D; for(var i = 0; i < a.length; i++) o = o[a[i]]; return o; }
  function setze(p, v){ var a = p.split("."), o = D; for(var i = 0; i < a.length - 1; i++) o = o[a[i]]; o[a[a.length - 1]] = v; }
  function feld(p, cls, dd){ return '<input class="bcb-in ' + (cls || "") + '" data-p="' + p + '" value="' + esc(wert(p)) + '" spellcheck="false">' + (dd ? '<button class="bcb-dd noprint" type="button" data-dd="' + dd + '" data-p="' + p + '" aria-label="Auswahl" tabindex="-1">▾</button>' : ""); }
  function box(x, y, w, h, p, dd, cls){ return '<div class="bcb-box ' + (cls || "") + '" style="' + ab(x, y, w, h) + '">' + feld(p, "", dd) + "</div>"; }
  function lab(t, x, y, w, h, cls){ return '<div class="bcb-l ' + (cls || "") + '" style="' + ab(x, y, w, h) + '">' + t + "</div>"; }
  function raute(x, y, w, h, form, an, data){ return '<i class="bcb-dm ' + form + (an ? " on" : "") + '" style="' + ab(x, y, w, h) + '" ' + data + "></i>"; }

  /* ---------- Bogen ---------- */
  function bogen(){
    var o = "", i;
    /* Persönliches */
    o += '<div class="bcb-zeile" style="' + ab(20.6, 30.4, 231.6, 9.8) + '"><span class="bcb-t">Ich bin</span>' + feld("name", "gross") + "</div>";
    o += '<div class="bcb-zeile" style="' + ab(20.6, 54.4, 231.6, 9.8) + '"><span class="bcb-t">Nenn mich, wenn du einen</span><span class="bcb-z1">' + feld("ruf", "", "tags") + '</span><span class="bcb-t nach">brauchst</span></div>';
    o += lab("Orte, die ich Heimat nenne", 20.6, 79.5, 160, 8, "bcb-t");
    o += '<div class="bcb-zeile drei" style="' + ab(20.6, 91.6, 231.6, 9.8) + '">' + ["herk", "heim", "arb"].map(function(k){ return '<span class="bcb-z1">' + feld(k, "", "orte") + "</span>"; }).join("") + "</div>";
    o += '<div class="bcb-unter" style="' + ab(20.6, 102.4, 231.6, 6) + '"><span>Herkunft</span><span>Heimatland</span><span>Arbeitsort</span></div>';
    o += '<div class="bcb-zeile" style="' + ab(43.2, 113.4, 188.6, 9.8) + '"><span class="bcb-z1">' + feld("motto", "mitte", "motto") + "</span></div>";
    o += lab("Worte, nach denen ich lebe", 43.2, 124.8, 188.6, 7, "bcb-t mitte");
    /* Bild */
    o += '<div class="bcb-bild" style="' + ab(271.7, 25.8, 130.7, 113.9) + '" data-bild="1">' + (D.bild ? '<img src="' + esc(D.bild) + '" alt="">' : '<span class="noprint">Bild</span>') + "</div>";
    /* Felder und Fertigkeiten */
    FELDER.forEach(function(F, fi){
      var cy = FY[fi] + 3.7;
      o += '<div class="bcb-feld" style="' + ab(0, cy - 6.5, 86.8, 13) + '"><span class="bcb-st"></span><span class="bcb-fn">' + F[0] + "</span></div>";
      o += raute(FX[2], FY[fi], 6.4, 7.4, "a", D.F[fi] >= 3, 'data-f="' + fi + '"');
      F[1].forEach(function(s, si){
        var y = SY[fi][si];
        o += lab(s, 0, y - 2.2, 107.4, 10, "bcb-sk");
        o += raute(SX[1], y, 5, 5.7, "b", D.K[s] >= 2, 'data-s="' + s + '" data-i="1"') + raute(SX[2], y, 5, 5.7, "a", D.K[s] >= 3, 'data-s="' + s + '" data-i="2"');
      });
    });
    /* Glück */
    o += lab("Glück", 145.1, 166, 60, 12, "bcb-h");
    LX.forEach(function(x, i){ o += '<i class="bcb-lk' + (D.luck[i] ? " on" : "") + '" style="' + ab(x, 180.6, 7, 7) + '" data-l="' + i + '"></i>'; });
    o += '<svg class="bcb-mz" style="' + ab(214, 144, 80, 80) + '" viewBox="214 144 80 80"><path id="bcbMzP" d="M 223.6 175.2 A 31.5 31.5 0 0 1 263.4 154.2" fill="none"/><text><textPath href="#bcbMzP" startOffset="50%" text-anchor="middle">Glücksmünze</textPath></text></svg>';
    o += '<div class="bcb-coin" style="' + ab(244.6, 176.5, 19.1, 15.7) + '">' + feld("coin", "mitte") + "</div>";
    /* Ich fühle */
    o += lab("Ich fühle", 180, 225, 88.8, 12, "bcb-h mitte");
    GY.forEach(function(y, r){
      var gl = r < 6 ? '<span class="bcb-g">' + GUT[r] + '</span><span class="bcb-li"></span>' : feld("fgn." + (r - 6), "li");
      var sl = r < 6 ? '<span class="bcb-g">' + SCHLECHT[r] + '</span><span class="bcb-li"></span>' : feld("fbn." + (r - 6), "li");
      o += '<div class="bcb-gz" style="' + ab(145.1, y - 8.6, 49.4, 8.6) + '">' + gl + "</div>" + lab("+", 194.8, y - 7.2, 4.6, 6, "bcb-pm");
      o += raute(199.8, y - 5.1, 5, 5.7, "a", D.fg[r], 'data-g="fg" data-i="' + r + '"');
      if(r < 6) o += lab(FN[r], 205, y - 6.2, 38.6, 5, "bcb-mf");
      o += '<div class="bcb-gz" style="' + ab(242.8, y - 8.6, 48.9, 8.6) + '">' + sl + "</div>" + lab("–", 292, y - 7.4, 4.6, 6, "bcb-pm");
      o += raute(297.5, y - 5.8, 5, 5.7, "b", D.fb[r], 'data-g="fb" data-i="' + r + '"');
    });
    /* Expertise */
    EY.forEach(function(y, i){ o += box(325.3, y, 77.5, 12.1, "exp." + i, "exp"); });
    o += lab("Expertise", 325.3, 331, 77.5, 9, "bcb-h2 mitte");
    /* Waffen & Gerät */
    o += lab("Waffen und Geräte", 145.1, 358, 150, 12, "bcb-h");
    WY.forEach(function(y, i){ o += box(145.4, y, 95.8, 12.2, "wn." + i, "wg") + box(242.2, y + 1.3, 160.6, 9.7, "wd." + i, null, "klein"); });
    /* Inventar */
    o += lab("Taschen", 167.9, 471.2, 100, 9, "bcb-h2 mitte") + lab("Rucksack", 275.8, 471.2, 100, 9, "bcb-h2 mitte");
    for(i = 0; i < 4; i++) o += box(167.9, 483.7 + 10.5 * i, 100, 10.5, "tas." + i, "Taschen", "zeile");
    for(i = 0; i < 5; i++) o += box(275.8, 483.7 + 10.5 * i, 100, 10.5, "ruc." + i, "Rucksack", "zeile");
    for(i = 0; i < 4; i++) o += box(167.9, 531.1 + 10.5 * i, 100, 10.5, "beu." + i, "Beutel", "zeile");
    NY.forEach(function(y, i){ o += box(20.7, y, 124.1, 12.2, "nar." + i); });
    /* Magazine */
    ["Taschen", "Beutel", "Rucksack"].forEach(function(t, j){ o += lab(t, MX[j] - 4, 537.6, 19.1, 4.6, "bcb-mk mitte"); o += lab("/" + [2, 2, 9][j], MX[j] + 3, 573, 9, 5, "bcb-mz2"); });
    MY.forEach(function(y, i){
      o += box(275.8, y, 58.9, 8.8, "mag." + i + ".0", "mag", "klein");
      MX.forEach(function(x, j){ o += box(x, y, 11.1, 8.8, "mag." + i + "." + (j + 1), null, "zahl"); });
    });
    o += lab("Narben und Erfahrungen", 20.7, 578, 124.1, 8, "bcb-h2 mitte") + lab("Beutel", 167.9, 578, 100, 8, "bcb-h2 mitte") + lab("Magazine", 275.8, 578, 111.6, 8, "bcb-h2 mitte");
    return '<div class="bcb-sheet" id="bcbSheet" style="width:' + px(PW) + ";height:" + px(PH) + '"><img class="bcb-bg" src="img/bogen/hintergrund.webp" alt="" draggable="false">' + o + "</div>";
  }

  /* ---------- Symbolleiste und Chips ---------- */
  var IC = {
    vor: '<circle cx="9" cy="8" r="3.2"/><path d="M3 20c0-3.5 2.7-6 6-6s6 2.5 6 6"/><circle cx="17.5" cy="9" r="2.4"/><path d="M17 14.2c2.6.2 4.5 2.2 4.5 5.3"/>',
    zufall: '<rect x="3.5" y="3.5" width="17" height="17" rx="3"/><circle cx="8.5" cy="8.5" r=".9" fill="currentColor"/><circle cx="15.5" cy="8.5" r=".9" fill="currentColor"/><circle cx="12" cy="12" r=".9" fill="currentColor"/><circle cx="8.5" cy="15.5" r=".9" fill="currentColor"/><circle cx="15.5" cy="15.5" r=".9" fill="currentColor"/>',
    leeren: '<path d="M3.5 12a8.5 8.5 0 1 0 2.6-6.1"/><path d="M3.5 4v5h5"/>',
    teilen: '<circle cx="18" cy="5" r="2.6"/><circle cx="6" cy="12" r="2.6"/><circle cx="18" cy="19" r="2.6"/><path d="M8.3 10.7l7.4-4.3M8.3 13.3l7.4 4.3"/>',
    sichern: '<path d="M12 4v11"/><path d="M7 11l5 5 5-5"/><path d="M5 20h14"/>',
    laden: '<path d="M12 16V5"/><path d="M7 9l5-5 5 5"/><path d="M5 20h14"/>',
    pdf: '<path d="M5 3h11l4 4v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"/><path d="M7.5 3v5h8V3"/><rect x="7" y="13" width="10" height="8"/>'
  };
  function sym(p){ return '<svg viewBox="0 0 24 24" width="21" height="21" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' + p + "</svg>"; }
  function chips(){
    return '<span class="bcb-chips">' + DB.l.map(function(e){
      var n = (e.d.name || "").trim() || "Neuer Abenteurer", on = e.id === DB.cur;
      return '<span class="bcb-chip' + (on ? " on" : "") + '"><button type="button" data-ch="' + e.id + '">' + esc(n) + "</button>" + (on && DB.l.length > 1 ? '<button type="button" class="x" data-del="' + e.id + '" data-tip="Bogen löschen" aria-label="Bogen löschen">×</button>' : "") + "</span>";
    }).join("") + '<button type="button" class="bcb-plus" data-plus="1" data-tip="Neuen Bogen anlegen" aria-label="Neuen Bogen anlegen">+</button></span>';
  }
  function leiste(){
    var b = function(ic, tip, act, cls){ return '<button type="button" class="bcb-ib' + (cls ? " " + cls : "") + '" data-act="' + act + '" data-tip="' + tip + '" aria-label="' + tip + '">' + sym(IC[ic]) + "</button>"; };
    return '<span class="bcb-tools">' + b("vor", "Fertigen Abenteurer einsetzen", "vor") + b("zufall", "Zufallsabenteurer erstellen", "zufall") + b("leeren", "Bogen leeren", "leeren") +
      b("teilen", "Link teilen", "teilen") + b("sichern", "Als Datei sichern", "sichern") +
      '<label class="bcb-ib" data-tip="Datei laden" aria-label="Datei laden">' + sym(IC.laden) + '<input type="file" accept=".json,application/json" hidden></label>' +
      b("pdf", "Als PDF speichern", "pdf", "haupt") + "</span>";
  }
  function zoom(){ return Math.max(1, Math.min(1.8, (Math.min(innerWidth, 1500) - 90) / (PW * K))); }

  /* ---------- Zeichnen ---------- */
  var APPEL = null;
  function render(arg){
    var A = window.APP || document.getElementById("app"); APPEL = A; laden();
    if(arg && arg.indexOf("teilen~") === 0){
      try{ var d = JSON.parse(ub64(arg.slice(7))); if(!d || d.spiel !== "bc-bogen") throw 0; var id = neu(d.daten); history.replaceState(null, "", "#bogen/" + id); if(window.LK) LK.an(); setTimeout(function(){ toast("Bogen als neuer Eintrag übernommen"); }, 50); }
      catch(e){ history.replaceState(null, "", "#bogen"); setTimeout(function(){ toast("Der Link ist ungültig."); }, 50); }
    } else if(arg && eintrag(arg) && arg !== DB.cur){ DB.cur = arg; D = eintrag(arg).d; speichern(); }
    document.body.className = "inh bogenseite bcb-seite"; document.body.style.setProperty("--c", "#a8701f");
    var tabs = document.getElementById("tabs"); if(tabs) tabs.innerHTML = "";
    var bar = document.querySelector(".topbar"); if(bar){ bar.style.height = ""; bar.style.transform = ""; }
    if(window.HERO) clearInterval(HERO.t);
    var Z = zoom();
    A.innerHTML = '<div class="bcb-wrap"><div class="bcb-bar noprint" style="width:' + (PW * K * Z).toFixed(0) + 'px">' + chips() + leiste() + "</div>" +
      '<div class="bcb-zoom" style="zoom:' + Z.toFixed(3) + '">' + bogen() + "</div></div>";
    binden(A); passen(); window.scrollTo(0, 0);
    if(document.fonts && document.fonts.ready) document.fonts.ready.then(passen);
  }
  function neuZeichnen(){ var s = document.getElementById("bcbSheet"); if(!s) return; var y = scrollY; s.outerHTML = bogen(); var c = APPEL.querySelector(".bcb-chips"); if(c) c.outerHTML = chips(); passen(); scrollTo(0, y); }
  function chipsNeu(){ var c = APPEL && APPEL.querySelector(".bcb-chips"); if(c) c.outerHTML = chips(); }
  /* Text passend verkleinern */
  function passen(){
    var s = document.getElementById("bcbSheet"); if(!s) return;
    s.querySelectorAll(".bcb-in").forEach(fit);
    s.querySelectorAll(".bcb-fn").forEach(function(el){ var fs = 11 * K; el.style.fontSize = fs + "px"; var max = 86.8 * K - 10 * K; while(fs > 6 && el.scrollWidth > max){ fs -= .25; el.style.fontSize = fs + "px"; } });
    s.querySelectorAll(".bcb-g").forEach(function(el){ var fs = 5.8 * K; el.style.fontSize = fs + "px"; var max = el.parentNode.clientWidth - 8 * K; while(fs > 4.2 * K && el.scrollWidth > max){ fs -= .2; el.style.fontSize = fs + "px"; } });
  }
  function fit(el){
    var base = el.classList.contains("gross") ? 8.6 : el.closest(".klein,.zahl") ? 6.4 : el.closest(".zeile") ? 6.8 : 7.6, fs = base * K;
    el.style.fontSize = fs + "px";
    while(fs > 4.2 * K && el.scrollWidth > el.clientWidth + 1){ fs -= .25; el.style.fontSize = fs + "px"; }
  }

  /* ---------- Bedienung ---------- */
  function binden(A){
    A.oninput = function(e){
      var t = e.target; if(!t.classList.contains("bcb-in")) return;
      setze(t.dataset.p, t.value); speichern(); fit(t); if(t.dataset.p === "name") chipsNeu();
    };
    A.onclick = function(e){
      var t = e.target, el;
      if((el = t.closest(".bcb-dm"))){
        if(el.dataset.f != null){ var fi = +el.dataset.f; D.F[fi] = D.F[fi] >= 3 ? 2 : 3; }
        else if(el.dataset.s){ var s = el.dataset.s, i = +el.dataset.i; D.K[s] = D.K[s] > i ? i : i + 1; }
        else if(el.dataset.g){ D[el.dataset.g][+el.dataset.i] = D[el.dataset.g][+el.dataset.i] ? 0 : 1; }
        speichern(); neuZeichnen(); return;
      }
      if((el = t.closest(".bcb-lk"))){ var l = +el.dataset.l; D.luck[l] = D.luck[l] ? 0 : 1; el.classList.toggle("on", !!D.luck[l]); speichern(); return; }
      if((el = t.closest(".bcb-dd"))){ e.stopPropagation(); auswahl(el); return; }
      if((el = t.closest("[data-bild]"))){ bildWahl(); return; }
      if((el = t.closest("[data-ch]"))){ gehe(el.dataset.ch); return; }
      if((el = t.closest("[data-plus]"))){ gehe(neu(null, true)); return; }
      if((el = t.closest("[data-del]"))){
        var e2 = eintrag(el.dataset.del); if(!e2) return;
        if(gefuellt(e2.d) && !confirm("Diesen Bogen löschen?")) return;
        DB.l = DB.l.filter(function(x){ return x.id !== e2.id; }); DB.cur = DB.l[DB.l.length - 1].id; D = eintrag(DB.cur).d; speichern(); gehe(DB.cur); return;
      }
      if((el = t.closest("[data-act]"))){
        var a = el.dataset.act;
        if(a === "vor"){ e.stopPropagation(); vorlagen(el); }
        if(a === "zufall"){ gehe(neu(zufall())); toast("Zufallsabenteurer erstellt"); }
        if(a === "leeren"){ if(gefuellt(D) && !confirm("Alle Einträge dieses Bogens löschen?")) return; eintrag(DB.cur).d = D = leer(); speichern(); neuZeichnen(); }
        if(a === "teilen") teilen();
        if(a === "sichern") sichernDatei();
        if(a === "pdf") pdf(el);
      }
    };
    var inp = A.querySelector('.bcb-tools input[type=file]'); if(inp) inp.onchange = function(){ dateiLaden(this.files[0]); this.value = ""; };
  }
  function bildWahl(){
    var i = document.createElement("input"); i.type = "file"; i.accept = "image/*";
    i.onchange = function(){ var f = i.files[0]; if(!f) return; var r = new FileReader(); r.onload = function(){ var im = new Image(); im.onload = function(){
      var W = 520, H = Math.round(W * 113.9 / 130.7), c = document.createElement("canvas"); c.width = W; c.height = H;
      var s = Math.max(W / im.width, H / im.height), w = im.width * s, h = im.height * s; c.getContext("2d").drawImage(im, (W - w) / 2, (H - h) / 2, w, h);
      D.bild = c.toDataURL("image/jpeg", .85); speichern(); neuZeichnen(); }; im.src = r.result; }; r.readAsDataURL(f); };
    if(D.bild && confirm("Bild entfernen? (Abbrechen = neues Bild wählen)")){ D.bild = ""; speichern(); neuZeichnen(); return; }
    i.click();
  }

  /* ---------- Auswahllisten: Kategorien einklappbar, Suche, „i“ ---------- */
  function popWeg(){ document.querySelectorAll(".bcb-pop,.bcb-info").forEach(function(e){ e.remove(); }); }
  document.addEventListener("click", function(e){ if(!e.target.closest(".bcb-pop,.bcb-info")) popWeg(); });
  document.addEventListener("keydown", function(e){ if(e.key === "Escape" && document.querySelector(".bcb-pop")){ e.stopImmediatePropagation(); e.preventDefault(); popWeg(); } }, true);
  window.addEventListener("hashchange", popWeg);
  function menu(anker, o){
    popWeg();
    var pop = document.createElement("div"); pop.className = "bcb-pop"; document.body.appendChild(pop);
    var G = o.groups, alle = 0, auf = {}, q = ""; G.forEach(function(g){ alle += g.items.length; if(g.offen) auf[g.g] = 1; });
    var such = alle > 12, gruppen = G.length > 1, low = function(s){ return String(s || "").toLowerCase(); };
    function zeile(it, gi, ii){ return '<div class="pz"><button class="pn' + (it.sel ? " sel" : "") + '" data-g="' + gi + '" data-i="' + ii + '">' + esc(it.t) + (it.s ? "<small>" + esc(it.s) + "</small>" : "") + "</button>" + (it.info ? '<button class="pi" data-g="' + gi + '" data-t="' + ii + '" aria-label="Info">i</button>' : "") + "</div>"; }
    function liste(){
      var h = "";
      G.forEach(function(g, gi){
        var L = g.items.map(function(it, ii){ return [it, ii]; }).filter(function(x){ return !q || low(x[0].t + " " + (x[0].s || "") + " " + g.g).indexOf(q) >= 0; });
        if(q && !L.length) return;
        if(!gruppen){ h += L.map(function(x){ return zeile(x[0], gi, x[1]); }).join(""); return; }
        var offen = q || auf[g.g];
        h += '<div class="gh' + (offen ? " on" : "") + '" data-gg="' + esc(g.g) + '"><span>' + esc(g.g) + "</span><em>" + L.length + "</em><i></i></div>";
        if(offen) h += '<div class="gb">' + L.map(function(x){ return zeile(x[0], gi, x[1]); }).join("") + "</div>";
      });
      return h || '<p class="leer">Nichts gefunden.</p>';
    }
    pop.innerHTML = (such ? '<div class="sq"><input type="search" placeholder="Suchen …" autocomplete="off" spellcheck="false"></div>' : "") + '<div class="lst">' + liste() + "</div>";
    var r = anker.getBoundingClientRect(), br = o.breit || 260;
    pop.style.width = br + "px"; pop.style.left = Math.max(8, Math.min(r.right - br, innerWidth - br - 8)) + "px";
    var top = r.bottom + 4; pop.style.top = top + "px";
    var h = pop.getBoundingClientRect().height; if(top + h > innerHeight - 8) pop.style.top = Math.max(8, innerHeight - h - 8) + "px";
    var inp = pop.querySelector("input"), L = pop.querySelector(".lst");
    if(inp){ inp.oninput = function(){ document.querySelectorAll(".bcb-info").forEach(function(x){ x.remove(); }); q = low(inp.value.trim()); L.innerHTML = liste(); }; setTimeout(function(){ inp.focus(); }, 30); }
    pop.onclick = function(e){
      e.stopPropagation(); var gh = e.target.closest(".gh");
      if(gh){ if(!q){ var k = gh.dataset.gg; if(auf[k]) delete auf[k]; else auf[k] = 1; L.innerHTML = liste(); } return; }
      var b = e.target.closest("button"); if(!b) return;
      var it = G[+b.dataset.g].items[+(b.dataset.t != null ? b.dataset.t : b.dataset.i)];
      if(b.dataset.t != null){
        document.querySelectorAll(".bcb-info").forEach(function(x){ x.remove(); });
        pop.querySelectorAll(".pi.sel").forEach(function(x){ x.classList.remove("sel"); }); b.classList.add("sel");
        var inf = document.createElement("div"); inf.className = "bcb-info"; inf.innerHTML = it.info; document.body.appendChild(inf);
        var pr = pop.getBoundingClientRect(), w = 320, rechts = pr.right + w + 8 < innerWidth;
        inf.style.width = w + "px"; inf.style.top = pr.top + "px"; inf.style.maxHeight = pr.height + "px";
        inf.style.left = (rechts ? pr.right - 1 : pr.left - w + 1) + "px"; inf.classList.add(rechts ? "re" : "li");
        inf.onclick = function(x){ x.stopPropagation(); }; return;
      }
      if(!o.offenLassen) popWeg(); o.pick(it);
    };
    return pop;
  }
  function tagInfo(t){
    var e = B.expInfo[t.exp] || B.expInfo[t.exp.replace(/ oder .*/, "")] || "";
    return "<h4>" + esc(t.n) + '</h4><p class="s">Feld: ' + esc(t.feld) + " · Ersatzfeld: " + esc(t.ersatz) + "</p><p><b>Expertise:</b> " + esc(t.exp) + (e ? " – " + esc(e) : "") + "</p><p><b>Fertigkeiten:</b> " + t.fert.map(esc).join(", ") + '</p><p class="s">S. ' + t.s + "</p>";
  }
  function auswahl(btn){
    var p = btn.dataset.p, art = btn.dataset.dd, anker = btn.parentNode, setzen = function(v){ setze(p, v); speichern(); neuZeichnen(); };
    if(art === "tags"){
      menu(anker, {breit: 290, offenLassen: true, groups: FN.map(function(f){ return {g: f, offen: D.tags.some(function(n){ var t = tag(n); return t && t.feld === f; }),
        items: B.tags.filter(function(t){ return t.feld === f; }).map(function(t){ return {t: t.n, s: "Ersatzfeld " + t.ersatz, sel: D.tags.indexOf(t.n) >= 0, info: tagInfo(t), tag: t}; })}; }),
        pick: function(it){
          if(D.tags.indexOf(it.tag.n) >= 0) tagWeg(D, it.tag.n);
          else if(D.tags.length >= 2){ toast("Höchstens 2 Tags – wähle zuerst einen ab."); return; }
          else { tagDazu(D, it.tag, it.tag.exp); toast(it.tag.n + ": Rauten und Expertise eingetragen"); }
          D.ruf = D.tags.join(" "); speichern(); neuZeichnen(); var a2 = document.querySelector('.bcb-dd[data-p="ruf"]'); if(a2) auswahl(a2);
        }});
      return;
    }
    if(art === "orte") return menu(anker, {groups: B.orte.map(function(g){ return {g: g[0], items: g[1].map(function(x){ return {t: x.replace(/​/g, "")}; })}; }), pick: function(it){ setzen(it.t); }});
    if(art === "motto") return menu(anker, {breit: 320, groups: B.motto.map(function(g){ return {g: g[0], items: g[1].map(function(x){ return {t: x}; })}; }), pick: function(it){ setzen(it.t); }});
    if(art === "exp"){
      var tagE = B.tags.map(function(t){ return t.exp; }).filter(function(x, i, a){ return a.indexOf(x) === i; }).sort();
      return menu(anker, {groups: [{g: "Tag-Expertisen", items: tagE.map(function(x){ var inf = B.expInfo[x]; return {t: x, info: inf ? "<h4>" + esc(x) + "</h4><p>" + esc(inf) + "</p>" : null}; })}].concat(B.exp.map(function(g){ return {g: g[0], items: g[1].map(function(x){ return {t: x}; })}; })), pick: function(it){ setzen(it.t); }});
    }
    if(art === "wg") return menu(anker, {groups: [{g: "Waffen und Geräte", items: B.wg.map(function(w){ return {t: w[0], info: "<h4>" + esc(w[0]) + "</h4><p>" + esc(w[1]) + "</p>", w: w}; })}],
      pick: function(it){ var i = +p.split(".")[1]; D.wn[i] = it.w[0]; D.wd[i] = it.w[1]; speichern(); neuZeichnen(); }});
    if(art === "mag") return menu(anker, {groups: [{g: "Waffen", items: ["Pistole", "Revolver", "Gewehr", "Scharfschützengewehr", "Bogen"].map(function(x){ return {t: x}; })}], pick: function(it){ setzen(it.t); }});
    /* Taschen, Beutel, Rucksack */
    return menu(anker, {groups: ["Taschen", "Beutel", "Rucksack"].map(function(g){ return {g: g, offen: g === art, items: (B.items[g] || []).map(function(x){ return {t: x}; })}; }), pick: function(it){ setzen(it.t); }});
  }

  /* ---------- Tags: Rauten und Expertise (S. 42–43) ---------- */
  function tag(n){ return B.tags.filter(function(t){ return t.n === n; })[0]; }
  function tagDazu(d, t, expText){
    var fi = FN.indexOf(t.feld), fj = FN.indexOf(t.ersatz), w = {f: -1, k: [], e: ""};
    if(fi >= 0 && d.F[fi] < 3){ d.F[fi]++; w.f = fi; } else if(fj >= 0 && d.F[fj] < 3){ d.F[fj]++; w.f = fj; }
    t.fert.forEach(function(s){ if(d.K[s] != null && d.K[s] < 3){ d.K[s]++; w.k.push(s); } });
    var frei = d.exp.indexOf(""); if(expText && frei >= 0 && d.exp.indexOf(expText) < 0){ d.exp[frei] = expText; w.e = expText; }
    d.tags.push(t.n); d.tw[t.n] = w;
  }
  function tagWeg(d, n){
    var w = d.tw[n] || {f: -1, k: [], e: ""};
    if(w.f >= 0) d.F[w.f] = Math.max(2, d.F[w.f] - 1);
    w.k.forEach(function(s){ d.K[s] = Math.max(1, d.K[s] - 1); });
    var i = w.e ? d.exp.indexOf(w.e) : -1; if(i >= 0) d.exp[i] = "";
    d.tags = d.tags.filter(function(x){ return x !== n; }); delete d.tw[n];
  }

  /* ---------- Zufallsabenteurer (S. 54–57) ---------- */
  function aufloesen(e){
    if(/Fahrzeug deiner Wahl/.test(e)){ var fz = B.exp.filter(function(g){ return g[0] === "Fahrzeuge"; })[0]; return fz ? pick(fz[1]) : "Auto"; }
    if(/Studienfach/.test(e)) return "Archäologie";
    if(/ oder /.test(e)) return pick(e.split(/, | oder /));
    return e;
  }
  function wurf(T){ return pick(pick(T)[1]); }
  function zufall(){
    var d = leer(), Z = B.zufTags, t1, t2;
    var zieh = function(){ var r = Z[wf(6)]; return tag(r[Math.floor(wf(6) / 2)]); };
    t1 = zieh(); do{ t2 = zieh(); } while(t2.n === t1.n);
    [t1, t2].forEach(function(t){ tagDazu(d, t, aufloesen(t.exp)); });
    d.ruf = d.tags.join(" ");
    for(var n = 0, v = 0; n < 2 && v < 50; v++){ var s = pick(SK); if(d.K[s] < 3){ d.K[s]++; n++; } }
    var e3; do{ e3 = wurf(B.exp); } while(d.exp.indexOf(e3) >= 0);
    d.exp[d.exp.indexOf("")] = e3;
    var ort = function(){ return pick(wurf(B.orte).replace(/​/g, "").split("/")); };
    d.herk = ort(); d.heim = ort(); d.arb = ort(); d.motto = wurf(B.motto);
    d.name = pick(NAMEN_V) + " " + pick(NAMEN_N); d.coin = "1";
    /* 3 Dinge: eine Waffe (mit 2 Magazinen), ein Stück Gerät, ein Gegenstand */
    var W = B.wg.filter(function(w){ return /Pistole|Revolver|Gewehr|^Bogen/.test(w[0]); }), G = B.wg.filter(function(w){ return W.indexOf(w) < 0 && w[0] !== "Köcher"; });
    var wa = pick(W), ge = pick(G); d.wn[0] = wa[0]; d.wd[0] = wa[1]; d.wn[1] = ge[0]; d.wd[1] = ge[1]; d.mag[0] = [wa[0], "2", "", ""];
    var beh = pick(["Taschen", "Beutel", "Rucksack"]), ding = pick(B.items[beh] || [""]); d[{Taschen: "tas", Beutel: "beu", Rucksack: "ruc"}[beh]][0] = ding;
    return d;
  }

  /* ---------- Fertige Abenteurer (S. 230–233) ---------- */
  function ausVorlage(v){
    var d = leer();
    ["name", "ruf", "herk", "heim", "arb", "motto", "coin"].forEach(function(k){ d[k] = v[k] || ""; });
    d.F = v.F.slice(); Object.keys(v.K).forEach(function(s){ if(d.K[s] != null) d.K[s] = v.K[s]; });
    v.exp.slice(0, 6).forEach(function(x, i){ d.exp[i] = x; });
    v.wg.slice(0, 5).forEach(function(w, i){ d.wn[i] = w[0]; d.wd[i] = w[1] || ""; });
    v.nar.slice(0, 6).forEach(function(x, i){ d.nar[i] = x; });
    v.tas.slice(0, 4).forEach(function(x, i){ d.tas[i] = x; }); v.beu.slice(0, 4).forEach(function(x, i){ d.beu[i] = x; }); v.ruc.slice(0, 5).forEach(function(x, i){ d.ruc[i] = x; });
    v.mag.slice(0, 3).forEach(function(m, i){ var j = ["Taschen", "Beutel", "Rucksack"].indexOf(m[1]); d.mag[i][0] = m[0]; if(j >= 0) d.mag[i][j + 1] = m[2]; });
    if(v.img) d.bild = "img/" + v.img + ".webp";
    return d;
  }
  function vorlagen(btn){
    menu(btn, {breit: 280, groups: [{g: "Fertige Abenteurer", items: B.vor.map(function(v){
      return {t: v.name, s: v.ruf, v: v, info: "<h4>" + esc(v.name) + '</h4><p class="s">' + esc(v.ruf) + "</p><p>„" + esc(v.motto) + "“</p><p><b>Heimat:</b> " + esc([v.herk, v.heim, v.arb].join(" · ")) + "</p><p><b>Expertisen:</b> " + esc(v.exp.join(", ")) + "</p><p><b>Waffen und Geräte:</b> " + esc(v.wg.map(function(w){ return w[0]; }).join(", ")) + '</p><p class="s">Aus dem Pilot, S. 230–233</p>'};
    })}], pick: function(it){ gehe(neu(ausVorlage(it.v))); toast(it.v.name + " als neuer Eintrag"); }});
  }

  /* ---------- Teilen, Datei, PDF ---------- */
  function b64u(t){ var u = new TextEncoder().encode(t), b = ""; u.forEach(function(c){ b += String.fromCharCode(c); }); return btoa(b).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, ""); }
  function ub64(t){ t = t.replace(/-/g, "+").replace(/_/g, "/"); while(t.length % 4) t += "="; var b = atob(t), u = new Uint8Array(b.length); for(var i = 0; i < b.length; i++) u[i] = b.charCodeAt(i); return new TextDecoder().decode(u); }
  function ohneEigenesBild(){ var o = JSON.parse(JSON.stringify(D)); if(/^data:/.test(o.bild)) o.bild = ""; return o; }
  function teilen(){
    var u = location.href.split("#")[0] + "#bogen/teilen~" + b64u(JSON.stringify({spiel: "bc-bogen", daten: ohneEigenesBild()}));
    var ok = function(){ toast("Link kopiert" + (/^data:/.test(D.bild) ? " – ein eigenes Bild ist nicht enthalten." : "")); };
    if(navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(u).then(ok, function(){ prompt("Link kopieren:", u); });
    else prompt("Link kopieren:", u);
  }
  function dateiname(){ return "Broken Compass – " + ((D.name || "").trim() || "Abenteurerbogen"); }
  function sichernDatei(){
    var a = document.createElement("a"); a.href = URL.createObjectURL(new Blob([JSON.stringify({spiel: "bc-bogen", daten: D}, null, 1)], {type: "application/json"}));
    a.download = dateiname() + ".json"; document.body.appendChild(a); a.click(); a.remove();
  }
  function dateiLaden(f){
    if(!f) return; var r = new FileReader();
    r.onload = function(){ try{ var o = JSON.parse(r.result); if(!o || o.spiel !== "bc-bogen" || !o.daten) throw 0; gehe(neu(o.daten)); toast("Datei als neuer Eintrag geladen"); }catch(e){ toast("Das ist keine Broken-Compass-Bogendatei aus diesem Tool."); } };
    r.readAsText(f);
  }
  function pdf(knopf){
    var s = document.getElementById("bcbSheet"), zw = s && s.parentNode; if(!s || !window.FillPDF) return;
    var dummy = {disabled: false, _t: "", get textContent(){ return this._t; }, set textContent(x){ this._t = x; knopf.style.opacity = /wird/.test(x) ? .4 : ""; }};
    FillPDF.make(s, {name: dateiname(), knopf: dummy, bg: "#efede8", scale: 3, marks: [[".bcb-dm", "on", "punkt"], [".bcb-lk", "on", "punkt"]],
      before: function(){ zw.style.zoom = 1; passen(); }, after: function(){ zw.style.zoom = zoom().toFixed(3); passen(); }});
  }
  window.addEventListener("resize", function(){ var zw = document.querySelector(".bcb-zoom"), b = document.querySelector(".bcb-bar"); if(!zw) return; var Z = zoom(); zw.style.zoom = Z.toFixed(3); if(b) b.style.width = (PW * K * Z).toFixed(0) + "px"; });
  if(window.LK) LK.init(function(h){ return /^#bogen/.test(h); });
  return {render: render, zufall: zufall};
})();
