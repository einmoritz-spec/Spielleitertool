/* DRAGONBANE – Charakterbogen (#n/bogen): das Original-PDF als Hintergrund, darüber alle Formularfelder an derselben Stelle.
   Abgeleitete Werte rechnen sich selbst aus (überschreibbar), Auswahllisten mit Suche/Gruppen und Info,
   Zufallscharakter nach den Regeln (Kap. 2), vorgefertigte Charaktere, Teilen per Link, Datei sichern/laden
   und Export in das Original-PDF (bleibt ausfüllbar). Daten kommen aus den Kapiteldateien (DB_VOLK, DB_BERUF, DB_NACH …). */
"use strict";
var DBB = (function(){
  var KEY = "db_bogen_v1", PW = 595.276, PH = 841.89, BREIT = 980, K = BREIT / PW;
  var KEY2 = "db_bogen_v2", DBS = ladeAlle(), S = aktuell();
  var F = {}; DBB_FELDER.forEach(function(f){ F[f[0]] = f; });

  /* ---------- Fertigkeiten des Bogens (Reihenfolge wie gedruckt) ---------- */
  var FERT = [["Akrobatik","GEW"],["Ausweichen","GEW"],["Bestienkunde","INT"],["Darbietung","CHA"],["Entdecken","INT"],["Feilschen","CHA"],["Fingerfertigkeit","GEW"],["Fremdsprachen","INT"],["Handwerk","STÄ"],["Heilkunde","INT"],
    ["Heimlichkeit","GEW"],["Jagen & Fischen","GEW"],["Mythen & Legenden","INT"],["Reiten","GEW"],["Schwimmen","GEW"],["Seefahrt","INT"],["Täuschen","CHA"],["Überzeugen","CHA"],["Wahrnehmung","INT"],["Wildnisleben","INT"]];
  var KAMPF = [["Armbrüste","GEW"],["Äxte","STÄ"],["Bögen","GEW"],["Hämmer","STÄ"],["Messer","GEW"],["Prügelei","STÄ"],["Schleudern","GEW"],["Schwerter","STÄ"],["Speere","STÄ"],["Stäbe","GEW"]];
  var ALIAS = {"Tierkunde":"Bestienkunde","Wildniskunde":"Wildnisleben","Raufen":"Prügelei"};
  var ATTR = {"STÄ":"STR","KON":"KON","GEW":"GEW","INT":"INT","WIL":"WIL","CHA":"CHA"};
  var SCHULEN = ["Animismus","Elementarismus","Mentalismus"];
  /* Steigerungsrauten: nach Höhe sortiert, damit Zeile i zur Raute i gehört */
  function nachY(re){ return DBB_FELDER.filter(function(f){ return re.test(f[0]); }).sort(function(a, b){ return a[3] - b[3]; }).map(function(f){ return f[0]; }); }
  var FM = nachY(/^F\d+$/), KM = nachY(/^K[Ff]\d+$/), SM = nachY(/^SF\d+$/);
  var SK = []; /* alle Fertigkeitszeilen: {n, a, f (Wertfeld), m (Raute)} */
  FERT.forEach(function(x, i){ SK.push({n: x[0], a: x[1], f: "Fertigkeit " + (i + 1), m: FM[i], kern: 1}); });
  KAMPF.forEach(function(x, i){ SK.push({n: x[0], a: x[1], f: "Kampffertigkeiten " + (i + 1), m: KM[i], kern: 1, waffe: 1}); });
  var SEK = [1, 2, 3, 4, 5, 6, 7].map(function(i){ return {f: "Sekundäre Fertigkeiten " + i, nm: "Sekundäre Fertigkeiten " + i + "-1", m: SM[i - 1]}; });
  function skillByName(n){ n = ALIAS[n] || n; return SK.filter(function(s){ return s.n === n; })[0]; }
  var ABGELEITET = ["Schadensbonus STÄ","Schadensbonus GEW","Bewegung","Traglast","WP","TP"];
  var ZAHL = /^(STR|KON|GEW|INT|WIL|CHA|Schadensbonus.*|Bewegung|Traglast|Goldstücke|Silberstücke|Kupferstücke|WP|TP|Rüstungswert.*|Fertigkeit \d+|Kampffertigkeiten \d+|Sekundäre Fertigkeiten \d)$/;
  var WAFFE = [["Waffe 1","Waffe 1-0","Waffa 1-1","Waffe 1-2","Waffe 1-3","Waffe 1-4"],["Waffe 2","Waffe 2-1","Waffa 2-2","Waffe 2-3","Waffe 2-4","Waffe 2-5"],["Waffe 3","Waffe 3-0","Waffa 3-1","Waffe 3-2","Waffe 3-3","Waffe 3-4"]];
  var NACHTEIL = {"Heimlichkeit":"Nachteil 1","Ausweichen":"Nachteil 2","Akrobatik":"Nachteil 3","Wahrnehmung":"Nachteil 4","Fernkampf":"Nachteil 5"};
  function reihe(p, n){ var o = []; for(var i = 1; i <= n; i++) o.push(p + i); return o; }
  /* WP/TP-Kreise in Leserichtung (Zeile für Zeile, links nach rechts) – die Feldnamen im PDF folgen dieser Ordnung nicht */
  var RANG = {};
  ["WP","TP"].forEach(function(k){ DBB_FELDER.filter(function(f){ return new RegExp("^" + k + "\\d+$").test(f[0]); })
    .sort(function(a, b){ return Math.abs(a[3] - b[3]) > 4 ? a[3] - b[3] : a[2] - b[2]; }).forEach(function(f, i){ RANG[f[0]] = i + 1; }); });
  function ueberMax(n){ var m = n.match(/^(WP|TP)\d+$/); if(!m) return false; var mx = num(m[1]); return mx != null && RANG[n] > mx; }
  var TAL = reihe("Talente & Zauber ", 15), INV = reihe("Inventar ", 10), MEM = reihe("Memento ", 3), AUS = reihe("Erscheinungsbild ", 4);

  /* ---------- Zustand ---------- */
  function lade(){ try{ var o = JSON.parse(localStorage.getItem(KEY) || "null"); if(o && o.f) return o; }catch(e){} return {f: {}, man: {}, geu: {}}; }
  function nid(){ return "c" + Date.now().toString(36) + Math.floor(Math.random() * 999); }
  function ladeAlle(){
    try{ var o = JSON.parse(localStorage.getItem(KEY2) || "null"); if(o && o.l && o.l.length && o.l.every(function(e){ return e && e.s && e.s.f; })) return o; }catch(e){}
    var e = {id: nid(), s: lade()}; return {l: [e], cur: e.id};
  }
  function aktuell(){ var e = DBS.l.filter(function(x){ return x.id === DBS.cur; })[0] || DBS.l[0]; DBS.cur = e.id; return e.s; }
  /* neuer Eintrag (leer oder mit Inhalt) wird zum aktuellen Bogen */
  function neu(o, erzwingen){
    var c = DBS.l.filter(function(x){ return x.id === DBS.cur; })[0];
    if(c && !erzwingen && !Object.keys(c.s.f).some(function(k){ return c.s.f[k]; })){ c.s = o || leer(); S = c.s; return S; }   /* leerer Bogen wird wiederverwendet */
    var e = {id: nid(), s: o || leer()}; DBS.l.push(e); DBS.cur = e.id; S = e.s; return S;
  }
  function setS(o){ DBS.l.filter(function(x){ return x.id === DBS.cur; })[0].s = o; S = o; }
  function chipsHtml(){
    return '<div class="dbb-chips noprint">' + DBS.l.map(function(e, i){
      var n = (e.s.f.Name || "").trim() || "Neuer Bogen", on = e.id === DBS.cur;
      return '<span class="dbb-chip' + (on ? " on" : "") + '"><button type="button" data-ch="' + e.id + '">' + esc(n) + '</button>' + (on ? '<button type="button" class="x" data-del="' + e.id + '" data-tip="Bogen löschen" aria-label="Bogen löschen">×</button>' : "") + '</span>';
    }).join("") + '<button type="button" class="dbb-plus" data-plus="1" data-tip="Neuen Bogen anlegen" aria-label="Neuen Bogen anlegen">+</button></div>';
  }
  function sichere(){ try{ localStorage.setItem(KEY2, JSON.stringify(DBS)); }catch(e){ toast("Speicher voll."); } }
  function v(n){ var x = S.f[n]; return x == null ? "" : x; }
  function num(n){ var x = parseInt(v(n), 10); return isNaN(x) ? null : x; }
  function gefuellt(){ return Object.keys(S.f).some(function(k){ return S.f[k]; }); }
  function leer(){ return {f: {}, man: {}, geu: {}}; }

  /* ---------- Regeln: abgeleitete Werte (Kap. 2, S. 25) ---------- */
  function gc(a){ return a == null ? null : a <= 5 ? 3 : a <= 8 ? 4 : a <= 12 ? 5 : a <= 15 ? 6 : 7; }
  function bonus(a){ return a == null ? "" : a >= 17 ? "+W6" : a >= 13 ? "+W4" : "—"; }
  var BEWEGUNG = {"Mensch":10,"Halbling":8,"Zwerg":8,"Elf":10,"Ente":8,"Wolfsmensch":12};
  function talentZahl(n){ var re = new RegExp("^" + n + "\\b", "i"); return TAL.filter(function(t){ return re.test(v(t).trim()); }).length; }
  function rucksack(){ return INV.concat(["Kleinkram"]).some(function(t){ return /\bRucksack\b/i.test(v(t)); }); }
  function soll(n){
    var A = function(k){ return num(ATTR[k]); };
    if(n === "Schadensbonus STÄ") return bonus(A("STÄ"));
    if(n === "Schadensbonus GEW") return bonus(A("GEW"));
    if(n === "Bewegung"){ var b = BEWEGUNG[v("Volk").trim()], g = A("GEW"); if(b == null || g == null) return ""; return String(b + (g <= 6 ? -4 : g <= 9 ? -2 : g <= 12 ? 0 : g <= 15 ? 2 : 4)); }
    if(n === "Traglast"){ var s = A("STÄ"); return s == null ? "" : String(Math.ceil(s / 2) + (rucksack() ? 2 : 0)); }
    if(n === "WP"){ var w = A("WIL"); return w == null ? "" : String(w + 2 * talentZahl("Konzentriert")); }
    if(n === "TP"){ var k = A("KON"); return k == null ? "" : String(k + 2 * talentZahl("Robust")); }
    var sk = SK.filter(function(s){ return s.f === n; })[0];
    if(sk){ var c = gc(A(sk.a)); return c == null ? "" : String(c * (S.geu[sk.f] ? 2 : 1)); }
    var se = SEK.filter(function(s){ return s.f === n; })[0];
    if(se){ var c2 = gc(A("INT")); return SCHULEN.indexOf(v(se.nm).trim()) >= 0 && c2 != null ? String(c2 * 2) : ""; }
    return null;
  }
  function istAbgeleitet(n){ return ABGELEITET.indexOf(n) >= 0 || /^(Fertigkeit|Kampffertigkeiten) \d+$/.test(n) || /^Sekundäre Fertigkeiten \d$/.test(n); }
  function ableiten(){
    Object.keys(F).forEach(function(n){ if(!istAbgeleitet(n) || S.man[n]) return; var x = soll(n); if(x != null) S.f[n] = x; });
  }

  /* ---------- Buchdaten ---------- */
  function volk(n){ return (window.DB_VOLK || []).filter(function(x){ return x.t === n || x.id === n; })[0]; }
  function beruf(n){ return (window.DB_BERUF || []).filter(function(x){ return x.t === n || x.id === n; })[0]; }
  function nachTbl(kap, re){ var r = null; ((window.DB_NACH || {})[kap] || {abs: []}).abs.forEach(function(a){ a.b.forEach(function(b){ if(!r && b.tbl && re.test(b.tbl.head.join("|"))) r = b.tbl; }); }); return r; }
  function w20(re){ var t = nachTbl("sc", re); if(!t) return []; var o = []; t.rows.forEach(function(r){ o[+r[0] - 1] = r[1]; o[+r[2] - 1] = r[3]; }); return o.filter(Boolean); }
  function plain(s){ return String(s || "").replace(/§|\*\*|\*/g, ""); }
  function heroisch(){ var o = []; ((window.DB_NACH || {}).fe || {abs: []}).abs.forEach(function(a){ a.b.forEach(function(b){ if(b.ht) o = o.concat(b.ht); }); }); return o; }
  function magie(){
    var o = []; ((window.DB_NACH || {}).ma || {abs: []}).abs.forEach(function(a){
      if(["allgemein","animismus","elementarismus","mentalismus"].indexOf(a.id) < 0) return;
      var h = "", schule = a.id === "allgemein" ? "Allgemeine Magie" : a.t;
      a.b.forEach(function(b){
        if(b.h) h = b.h;
        if(b.zk) b.zk.forEach(function(z){ o.push({n: z.n, schule: schule, rang: z.r, z: z}); });
        if(typeof b === "string" && /trick/i.test(h)){ var m = b.match(/^\*\*(.+?):\*\*\s*(.*)$/); if(m) o.push({n: m[1], schule: schule, trick: 1, t: m[2]}); }
      });
    });
    return o;
  }
  function waffen(){ var o = []; ((window.DB_NACH || {}).au || {abs: []}).abs.forEach(function(a){ var h = ""; a.b.forEach(function(b){ if(b.h) h = b.h; if(b.tbl && b.tbl.head[0] === "Waffe") b.tbl.rows.forEach(function(r){ if(r[0] !== "Meisterarbeit") o.push({g: h, r: r}); }); }); }); return o; }
  function ruestung(){ var t = nachTbl("au", /^Rüstung\|Rüstungswert/); return t ? t.rows : []; }
  function waren(){
    var o = []; ((window.DB_NACH || {}).au || {abs: []}).abs.forEach(function(a){ var h = ""; a.b.forEach(function(b){
      if(b.h) h = b.h;
      if(b.tbl && a.id !== "waffen" && !/Dienst|Fahrzeug|Tier/.test(b.tbl.head[0])){ var gi = b.tbl.head.indexOf("Gewicht"), wi = b.tbl.head.length - 1;
        b.tbl.rows.forEach(function(r){ o.push({g: h, n: r[0], preis: r[1], gew: gi >= 0 ? r[gi] : "1", wirk: r[wi]}); }); }
    }); }); return o;
  }
  function ware(n){ n = String(n).toLowerCase(); return waren().filter(function(w){ return w.n.toLowerCase() === n; })[0]; }

  /* ---------- Hilfen ---------- */
  function esc2(s){ return esc(s); }
  function toast(t){ var d = document.createElement("div"); d.className = "bw-toast"; d.textContent = t; document.body.appendChild(d); setTimeout(function(){ d.remove(); }, 2200); }
  function W(n){ return 1 + Math.floor(Math.random() * n); }
  function wahl(a){ return a[Math.floor(Math.random() * a.length)]; }
  function misch(a){ a = a.slice(); for(var i = a.length - 1; i > 0; i--){ var j = Math.floor(Math.random() * (i + 1)), t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  var CV = document.createElement("canvas").getContext("2d");
  function breite(t, fs){ CV.font = fs + "px Helvetica, Arial, sans-serif"; return CV.measureText(t).width; }
  /* Text auf mehrere Zeilenfelder verteilen (Wortumbruch nach Feldbreite) */
  function umbrechen(text, felder, fs){
    var w = String(text).split(/\s+/).filter(Boolean), out = [], cur = "";
    felder.forEach(function(f, i){
      var max = F[f][4] - 2; cur = "";
      while(w.length && breite((cur ? cur + " " : "") + w[0], fs) <= max) cur += (cur ? " " : "") + w.shift();
      if(!cur && w.length) cur = w.shift();
      if(i === felder.length - 1 && w.length) cur += " " + w.join(" "), w = [];
      out.push(cur);
    });
    return out;
  }
  function frei(liste){ return liste.filter(function(f){ return !String(v(f)).trim(); })[0]; }

  /* ---------- Bogen zeichnen ---------- */
  function fs(f){ return (f[6] || (f[5] >= 14 ? 10 : 9)); }
  function feldHtml(f){
    var n = f[0], st = "left:" + (f[2] * K).toFixed(1) + "px;top:" + (f[3] * K).toFixed(1) + "px;width:" + (f[4] * K).toFixed(1) + "px;height:" + (f[5] * K).toFixed(1) + "px";
    if(f[1][0] === "c") return '<i class="dbb-c ' + (f[1] === "co" ? "o" : "d") + (S.f[n] ? " on" : "") + '" data-f="' + esc(n) + '" style="' + st + '"></i>';
    var cls = "dbb-t" + (n === "Name" ? " mitte" : "") + (n === "Schwäche 2" ? " schw" : "") + (ZAHL.test(n) ? " z" : "") + (istAbgeleitet(n) && !S.man[n] ? " auto" : "");
    var gr = (fs(f) * K * (f[1] === "m" ? 1 : .98)).toFixed(1);
    if(f[1] === "m") return '<textarea class="' + cls + '" data-f="' + esc(n) + '" style="' + st + ';font-size:' + gr + 'px" spellcheck="false">' + esc(v(n)) + '</textarea>';
    return '<input class="' + cls + '" data-f="' + esc(n) + '" style="' + st + ';--fs:' + gr + 'px" value="' + esc(v(n)) + '" autocomplete="off" spellcheck="false"' + (FEST[n] ? ' readonly' : '') + '>';
  }
  /* Felder mit Auswahlliste: fest = nur Auswahl (Klick aufs Feld), sonst Pfeil ▾ am Feldende */
  var FEST = {"Volk": 1, "Beruf": 1, "Alter": 1};
  var LISTE = {};
  ["Volk","Beruf","Alter","Name","Schwäche 1","Rüstung","Helm","Memento 1"].forEach(function(n){ LISTE[n] = n; });
  AUS.forEach(function(n){ LISTE[n] = "Erscheinungsbild"; }); TAL.forEach(function(n){ LISTE[n] = "Talent"; }); INV.forEach(function(n){ LISTE[n] = "Inventar"; });
  WAFFE.forEach(function(r){ LISTE[r[0]] = "Waffe"; }); SEK.forEach(function(s){ LISTE[s.nm] = "Schule"; });
  var TIPP = {Volk: "Volk wählen", Beruf: "Beruf wählen", Alter: "Alter wählen", Name: "Namen und Beinamen", "Schwäche 1": "Schwäche wählen", Rüstung: "Rüstung wählen", Helm: "Helm wählen", "Memento 1": "Memento wählen",
    Erscheinungsbild: "Aussehen wählen", Talent: "Talent oder Zauber wählen", Inventar: "Gegenstand oder Startausrüstung", Waffe: "Waffe wählen", Schule: "Magieschule wählen"};
  function pfeil(n){
    var f = F[n]; if(!f || FEST[n]) return "";
    var gr = Math.min(f[5] * K, 18), x = (f[2] + f[4]) * K - gr + 2, y = f[3] * K + (f[5] * K - gr) / 2;
    return '<button type="button" class="dbb-dd noprint" data-l="' + esc(n) + '" data-tip="' + esc(TIPP[LISTE[n]] || TIPP[n] || "Auswahl") + '" style="left:' + x.toFixed(1) + 'px;top:' + y.toFixed(1) + 'px;width:' + gr.toFixed(1) + 'px;height:' + gr.toFixed(1) + 'px">▾</button>';
  }
  /* Klickfläche auf dem gedruckten Fertigkeitsnamen: geübt umschalten */
  function geuebt(s){
    var f = F[s.f], b = BERUFFERT();
    return '<span class="dbb-g noprint' + (S.geu[s.f] ? " on" : "") + (b.indexOf(s.n) >= 0 ? " ber" : "") + '" data-g="' + esc(s.f) + '" data-tip="' + (S.geu[s.f] ? "Geübt" : "Als geübt markieren") + '" style="left:' + ((f[2] + f[4] + 1.5) * K).toFixed(1) + 'px;top:' + ((f[3] - 1.6) * K).toFixed(1) + 'px;width:' + ((s.waffe ? 78 : 102) * K).toFixed(1) + 'px;height:' + ((f[5] + 3.2) * K).toFixed(1) + 'px"></span>';
  }
  function BERUFFERT(){
    var b = beruf(v("Beruf").trim()); if(!b) return [];
    var l = b.fert || [];
    if(b.fertx){ var sch = SEK.map(function(s){ return v(s.nm).trim(); }).filter(function(x){ return SCHULEN.indexOf(x) >= 0; })[0];
      var fx = b.fertx.filter(function(x){ return sch && x[1].indexOf(sch) === 0; })[0]; l = fx ? fx[1].split(/,\s*/) : []; }
    return l.map(function(n){ return ALIAS[n] || n; });
  }
  function bogenHtml(){
    var h = DBB_FELDER.map(function(f){
      var x = feldHtml(f);
      if(ueberMax(f[0])) x = x.replace('class="dbb-c', 'class="dbb-c aus');
      return x;
    }).join("");
    h += SK.map(geuebt).join("") + Object.keys(LISTE).map(pfeil).join("");
    return '<div class="dbb-blatt" id="dbbBlatt" style="width:' + BREIT + 'px;height:' + Math.round(PH * K) + 'px"><img src="img/bogen/charakterbogen.webp" alt="" draggable="false">' + h + '</div>';
  }

  /* ---------- Leiste ---------- */
  var IC = {
    zufall: '<rect x="3.5" y="3.5" width="17" height="17" rx="3"/><circle cx="8.5" cy="8.5" r=".9" fill="currentColor"/><circle cx="15.5" cy="8.5" r=".9" fill="currentColor"/><circle cx="12" cy="12" r=".9" fill="currentColor"/><circle cx="8.5" cy="15.5" r=".9" fill="currentColor"/><circle cx="15.5" cy="15.5" r=".9" fill="currentColor"/>',
    vorlage: '<circle cx="12" cy="8" r="3.5"/><path d="M5 20c0-3.9 3.1-6 7-6s7 2.1 7 6"/>',
    leeren: '<path d="M20 12a8 8 0 1 1-2.6-5.9"/><path d="M20 4v5h-5"/>',
    teilen: '<circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="6" r="2.5"/><circle cx="18" cy="18" r="2.5"/><path d="M8.2 10.8l7.6-3.6M8.2 13.2l7.6 3.6"/>',
    sichern: '<path d="M12 4v11M7 11l5 5 5-5M5 20h14"/>',
    laden: '<path d="M12 16V5M7 9l5-5 5 5M5 20h14"/>',
    pdf: '<path d="M5 4h11l3 3v13H5z"/><path d="M8 4v5h7V4M8 20v-6h8v6"/>'
  };
  function sym(p){ return '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' + p + '</svg>'; }
  function leiste(){
    var ib = function(ic, tip, act){ return '<button class="bwi" data-act="' + act + '" data-tip="' + tip + '" aria-label="' + tip + '">' + sym(IC[ic]) + '</button>'; };
    return '<span class="bw-tools dbb-leiste">' + ib("zufall", "Zufälligen Charakter erstellen", "zufall") + ib("vorlage", "Vorgefertigten Charakter einsetzen", "vorlage") + ib("leeren", "Bogen leeren", "leeren") +
      ib("teilen", "Link teilen", "teilen") + ib("sichern", "Als Datei sichern", "sichern") +
      '<label class="bwi" data-tip="Datei laden" aria-label="Datei laden">' + sym(IC.laden) + '<input type="file" accept=".json,application/json" hidden id="dbbDatei"></label>' + ib("pdf", "Als ausfüllbares PDF speichern", "pdf") + '</span>';
  }

  /* ---------- Teilen / Datei ---------- */
  function b64u(s){ var u = new TextEncoder().encode(s), b = ""; u.forEach(function(c){ b += String.fromCharCode(c); }); return btoa(b).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, ""); }
  function ub64(t){ t = t.replace(/-/g, "+").replace(/_/g, "/"); while(t.length % 4) t += "="; var b = atob(t), u = new Uint8Array(b.length); for(var i = 0; i < b.length; i++) u[i] = b.charCodeAt(i); return new TextDecoder().decode(u); }
  function pruefen(d){
    if(!d || typeof d !== "object" || !d.f || typeof d.f !== "object") return null;
    var o = leer();
    Object.keys(d.f).forEach(function(k){ if(!F[k]) return; var x = d.f[k];
      if(F[k][1][0] === "c"){ if(x) o.f[k] = true; } else if(typeof x === "string" || typeof x === "number") o.f[k] = String(x).slice(0, 2000); });
    ["man","geu"].forEach(function(z){ Object.keys(d[z] || {}).forEach(function(k){ if(F[k] && d[z][k]) o[z][k] = 1; }); });
    return Object.keys(o.f).length ? o : null;
  }
  function teilen(){
    var u = location.href.split("#")[0] + "#n/bogen/teilen~" + b64u(JSON.stringify(S));
    (navigator.clipboard ? navigator.clipboard.writeText(u) : Promise.reject()).then(function(){ toast("Link kopiert"); }, function(){ prompt("Link zum Teilen:", u); });
  }
  function dateiname(){ return "Dragonbane – " + (v("Name").trim() || "Charakter"); }
  function sichernDatei(){
    var a = document.createElement("a"); a.href = URL.createObjectURL(new Blob([JSON.stringify({system: "Dragonbane", version: 1, bogen: S}, null, 1)], {type: "application/json"}));
    a.download = dateiname() + ".json"; document.body.appendChild(a); a.click(); setTimeout(function(){ URL.revokeObjectURL(a.href); a.remove(); }, 500);
  }
  function ladenDatei(file){
    if(!file) return; var r = new FileReader();
    r.onload = function(){ try{ var d = JSON.parse(r.result), o = d && d.system === "Dragonbane" ? pruefen(d.bogen) : null; if(o){ neu(o); sichere(); render(); toast("Bogen als neuer Eintrag geladen"); } else toast("Datei passt nicht zu Dragonbane."); }catch(e){ toast("Datei ungültig."); } };
    r.readAsText(file);
  }

  /* ---------- PDF: das Original-PDF ausfüllen (bleibt ausfüllbar) ---------- */
  function pdf(btn){
    if(btn) btn.disabled = true;
    var fertig = function(){ if(btn) btn.disabled = false; };
    FillPDF.lib().then(function(){ return fetch("boegen/charakterbogen.pdf"); }).then(function(r){ if(!r.ok) throw new Error("PDF fehlt"); return r.arrayBuffer(); }).then(function(buf){
      var L = window.PDFLib;
      return L.PDFDocument.load(buf).then(function(doc){
        return doc.embedFont(L.StandardFonts.Helvetica).then(function(font){
          var form = doc.getForm();
          DBB_FELDER.forEach(function(f){
            var n = f[0];
            try{
              if(f[1][0] === "c"){ var cb = form.getCheckBox(n); if(S.f[n]) cb.check(); else cb.uncheck(); return; }
              var tf = form.getTextField(n), t = FillPDF.sauber(font, v(n)), g = fs(f);
              if(f[1] !== "m" || n === "Schwäche 2"){ while(g > 4.5 && font.widthOfTextAtSize(t, g) > f[4] - 3) g -= .5; }
              var gr = f[1] === "m" && n !== "Schwäche 2" ? 8 : g;
              tf.acroField.setDefaultAppearance("/Helv " + gr + " Tf 0 g");
              tf.setText(t); tf.setFontSize(gr);
              if(ZAHL.test(n)) tf.setAlignment(L.TextAlignment.Center);
              tf.updateAppearances(font);
            }catch(e){}
          });
          /* Rauten und Kreise behalten ihr Original-Aussehen */
          return doc.save({updateFieldAppearances: false});
        });
      });
    }).then(function(bytes){ FillPDF.ausgeben(bytes, dateiname() + ".pdf"); fertig(); }, function(e){ fertig(); toast("PDF konnte nicht erstellt werden."); });
  }

  /* ---------- Auswahllisten (Suche ab 12 Einträgen, Gruppen ein-/ausklappbar, „i“ seitlich) ---------- */
  function popWeg(){ document.querySelectorAll(".bw-pop,.bw-info").forEach(function(e){ e.remove(); }); }
  function menu(btn, o){
    popWeg();
    var pop = document.createElement("div"); pop.className = "bw-pop"; document.body.appendChild(pop);
    var gr = o.items.some(function(it){ return it.g; }), such = o.items.length > 12, auf = {}, q = "";
    o.items.forEach(function(it){ if(it.sel && it.g) auf[it.g] = 1; }); (o.auf || []).forEach(function(g){ auf[g] = 1; });
    var low = function(t){ return String(t || "").toLowerCase(); };
    function zeile(it, i){ return '<div class="pz"><button class="pn' + (it.sel ? " sel" : "") + '" data-i="' + i + '">' + esc(it.t) + (it.s ? "<small>" + esc(it.s) + "</small>" : "") + "</button>" + (o.info && it.info !== false ? '<button class="pi" data-t="' + i + '" aria-label="Info">i</button>' : "") + "</div>"; }
    function liste(){
      var h = "", ok = function(it){ return !q || low(it.t + " " + (it.s || "") + " " + (it.g || "")).indexOf(q) >= 0; };
      if(!gr){ o.items.forEach(function(it, i){ if(ok(it)) h += zeile(it, i); }); }
      else {
        var G = [], M = {}; o.items.forEach(function(it, i){ var g = it.g || ""; if(!M[g]){ M[g] = {g: g, l: [], n: 0}; G.push(M[g]); } M[g].n++; if(ok(it)) M[g].l.push([it, i]); });
        G.forEach(function(g){ if(q && !g.l.length) return;
          if(!g.g){ h += g.l.map(function(x){ return zeile(x[0], x[1]); }).join(""); return; }
          var offen = q || auf[g.g];
          h += '<div class="gh' + (offen ? " on" : "") + '" data-g="' + esc(g.g) + '"><span>' + esc(g.g) + "</span><em>" + (q ? g.l.length : g.n) + '</em><i></i></div>';
          if(offen) h += '<div class="gb">' + g.l.map(function(x){ return zeile(x[0], x[1]); }).join("") + "</div>"; });
      }
      return h || '<p class="hint">Nichts gefunden.</p>';
    }
    pop.innerHTML = (such ? '<div class="sq"><input type="search" placeholder="Suchen …" autocomplete="off" spellcheck="false"></div>' : "") + '<div class="lst">' + liste() + "</div>";
    var rc = btn.getBoundingClientRect(), br = o.breit || 280;
    pop.style.cssText = "width:" + br + "px;left:" + Math.max(8, Math.min(rc.left, innerWidth - br - 8)) + "px;top:" + Math.min(rc.bottom + 4, Math.max(8, innerHeight - 450)) + "px";
    var inp = pop.querySelector("input"), L = pop.querySelector(".lst");
    if(inp){ inp.oninput = function(){ document.querySelectorAll(".bw-info").forEach(function(x){ x.remove(); }); q = low(inp.value.trim()); L.innerHTML = liste(); }; setTimeout(function(){ inp.focus(); }, 30); }
    pop.onclick = function(e){
      e.stopPropagation(); var g = e.target.closest(".gh");
      if(g){ var k = g.dataset.g; if(!q){ if(auf[k]) delete auf[k]; else auf[k] = 1; L.innerHTML = liste(); } return; }
      var b = e.target.closest("button"); if(!b) return;
      if(b.dataset.t != null){
        document.querySelectorAll(".bw-info").forEach(function(x){ x.remove(); });
        var inf = document.createElement("div"); inf.className = "bw-info"; inf.innerHTML = o.info(o.items[+b.dataset.t]); document.body.appendChild(inf);
        var pr = pop.getBoundingClientRect(), w = Math.min(360, innerWidth - pr.right - 12);
        if(w < 230){ inf.style.left = Math.max(8, pr.left - 352) + "px"; inf.style.width = "352px"; } else { inf.style.left = pr.right + "px"; inf.style.width = w + "px"; }
        inf.style.top = pr.top + "px"; inf.style.maxHeight = Math.min(innerHeight - pr.top - 8, 460) + "px"; return;
      }
      popWeg(); o.pick(o.items[+b.dataset.i]);
    };
  }
  function info(t, html){ return "<h4>" + esc(t) + "</h4>" + html; }
  function p(s){ return "<p>" + md(s) + "</p>"; }
  function setzen(n, x){ S.f[n] = x; }
  function nachher(){ ableiten(); sichere(); render(); }

  /* Einträge der einzelnen Listen */
  var LISTEN = {
    Volk: function(btn){
      var cur = v("Volk");
      menu(btn, {items: (window.DB_VOLK || []).map(function(x){ return {t: x.t, s: "Bewegung " + BEWEGUNG[x.t] + " · " + x.talente.map(function(t){ return t.t; }).join(", "), sel: cur === x.t, x: x}; }),
        info: function(it){ var x = it.x; return info(x.t, x.talente.map(function(t){ return p("**" + t.t + "** (WP " + t.wp + "): " + t.x); }).join("") + '<p class="s">Bewegung ' + BEWEGUNG[x.t] + " · S. " + x.p + "</p>"); },
        pick: function(it){ volkSetzen(it.x); nachher(); }});
    },
    Beruf: function(btn){
      var cur = v("Beruf");
      menu(btn, {items: (window.DB_BERUF || []).map(function(b){ return {t: b.t, s: "Schlüsselattribut " + b.attr, sel: cur === b.t, b: b}; }),
        info: function(it){ var b = it.b; return info(b.t, '<p class="s">Schlüsselattribut ' + b.attr + " · S. " + b.p + "</p>" +
          (b.fert ? p("**Fertigkeiten:** " + b.fert.join(", ")) : (b.fertx || []).map(function(x){ return p("**" + x[0] + ":** " + x[1]); }).join("")) +
          p("**Heroisches Talent:** " + b.talent) + "<p><b>Startausrüstung</b></p><ul>" + b.ausr.map(function(a){ return "<li>" + md(a[1]) + "</li>"; }).join("") + "</ul>"); },
        pick: function(it){ berufSetzen(it.b, 0); nachher(); }});
    },
    Alter: function(btn){
      var t = nachTbl("sc", /^W6\|Alter/), cur = v("Alter");
      menu(btn, {items: (t ? t.rows : []).map(function(r){ return {t: r[1], s: "Geübte Fertigkeiten " + r[2], sel: cur === r[1], r: r}; }),
        info: function(it){ var r = it.r; return info(r[1], p("**Geübte Fertigkeiten:** " + r[2] + " (sechs aus dem Beruf, der Rest frei)") + p("**Attribute:** " + r[3] + " (höchstens 18)")); },
        pick: function(it){ setzen("Alter", it.t); nachher(); }});
    },
    Name: function(btn){
      var items = [], vk = volk(v("Volk").trim()), bf = beruf(v("Beruf").trim());
      (window.DB_VOLK || []).forEach(function(x){ (x.namen || []).forEach(function(n){ items.push({t: n, g: "Namen: " + x.t, art: "name"}); }); });
      (window.DB_BERUF || []).forEach(function(b){ (b.bein || []).forEach(function(n){ items.push({t: n, g: "Beinamen: " + b.t, art: "bein"}); }); });
      menu(btn, {items: items, auf: [vk ? "Namen: " + vk.t : "", bf ? "Beinamen: " + bf.t : ""], pick: function(it){
        var cur = v("Name").trim(), erst = cur.split(/\s+/)[0] || "";
        setzen("Name", it.art === "name" ? (cur ? it.t + cur.slice(erst.length) : it.t) : ((erst ? erst + " " : "") + it.t).trim()); nachher(); }});
    },
    "Schwäche 1": function(btn){
      menu(btn, {items: w20(/Schwäche/).map(function(x){ var m = plain(x).match(/^(.+?)\.\s*(.*)$/) || [0, plain(x), ""]; return {t: m[1], s: m[2], sel: v("Schwäche 1") === m[1], r: m}; }),
        pick: function(it){ setzen("Schwäche 1", it.r[1]); setzen("Schwäche 2", it.r[2]); nachher(); }});
    },
    "Memento 1": function(btn){
      menu(btn, {breit: 320, items: w20(/Memento/).map(function(x){ return {t: plain(x)}; }), pick: function(it){ var z = umbrechen(it.t, MEM, fs(F["Memento 1"])); MEM.forEach(function(m, i){ setzen(m, z[i] || ""); }); nachher(); }});
    },
    Erscheinungsbild: function(btn, n){
      menu(btn, {breit: 300, items: w20(/Aussehen/).map(function(x){ return {t: plain(x)}; }), pick: function(it){ var t = AUS.map(function(a){ return v(a).trim(); }).filter(Boolean).concat([it.t]).join(", "), z = umbrechen(t, AUS, fs(F[AUS[0]])); AUS.forEach(function(a, i){ setzen(a, z[i] || ""); }); nachher(); }});
    },
    Rüstung: function(btn){ ruestWahl(btn, "Rüstung", "Rüstungswert", function(r){ return !/Helm/.test(r[0]); }, ["Nachteil 1","Nachteil 2","Nachteil 3"]); },
    Helm: function(btn){ ruestWahl(btn, "Helm", "Rüstungswert 2", function(r){ return /Helm/.test(r[0]); }, ["Nachteil 4","Nachteil 5"]); },
    Waffe: function(btn, n){
      var row = WAFFE.filter(function(r){ return r[0] === n; })[0];
      menu(btn, {breit: 300, items: waffen().map(function(w){ var r = w.r; return {t: r[0], s: r[1] + " · " + r[4] + " · Reichweite " + r[3], g: w.g, sel: v(n) === r[0], r: r}; }).concat([{t: "Keine Waffe", s: "Zeile leeren", leer: 1, info: false}]),
        info: function(it){ var r = it.r; return info(r[0], p("**Griff** " + r[1] + " · **STÄ** " + r[2] + " · **Reichweite** " + r[3]) + p("**Schaden** " + r[4] + " · **Haltbarkeit** " + r[5]) + p("**Merkmale:** " + r[8]) + '<p class="s">' + esc(r[6]) + " · " + esc(r[7]) + "</p>"); },
        pick: function(it){ waffeSetzen(row, it.leer ? null : it.r); nachher(); }});
    },
    Schule: function(btn, n){
      menu(btn, {items: SCHULEN.map(function(s){ return {t: s, s: "Magieschule (INT)", sel: v(n) === s}; }).concat([{t: "Leeren", leer: 1}]), pick: function(it){ setzen(n, it.leer ? "" : it.t); nachher(); }});
    },
    Talent: function(btn, n){
      var items = [], vk = volk(v("Volk").trim());
      (window.DB_VOLK || []).forEach(function(x){ x.talente.forEach(function(t){ items.push({t: t.t, s: "WP " + t.wp, g: "Angeborene Talente: " + x.t, txt: t.x, wp: t.wp}); }); });
      heroisch().forEach(function(t){ items.push({t: t.n, s: "WP " + t.w + (t.r && t.r !== "—" ? " · " + t.r : ""), g: "Heroische Talente", txt: t.t, wp: t.w, r: t.r, p: t.p}); });
      magie().forEach(function(z){ items.push(z.trick ? {t: z.n, s: "Zaubertrick", g: z.schule + ": Zaubertricks", txt: z.t, trick: 1} : {t: z.n, s: "Kraftstufe " + z.rang, g: z.schule + ": Zauber", z: z.z}); });
      items.forEach(function(it){ it.sel = v(n).replace(/\s*\(.*$/, "") === it.t; });
      items.push({t: "Zeile leeren", leer: 1, info: false});
      menu(btn, {breit: 300, items: items, auf: vk ? ["Angeborene Talente: " + vk.t] : [],
        info: function(it){
          if(it.z){ var z = it.z; return info(z.n, '<p class="s">Kraftstufe ' + z.r + " · Voraussetzung: " + plain(z.v) + "</p>" + p("**Komponenten** " + z.a + " · **Zeit** " + z.z + " · **Reichweite** " + z.w + " · **Dauer** " + z.d) + p(z.t)); }
          return info(it.t, (it.wp ? '<p class="s">WP ' + esc(it.wp) + (it.r && it.r !== "—" ? " · Voraussetzung: " + esc(it.r) : "") + (it.p ? " · S. " + it.p : "") + "</p>" : "") + p(it.txt || ""));
        },
        pick: function(it){ setzen(n, it.leer ? "" : talentText(it)); nachher(); }});
    },
    Inventar: function(btn, n){
      var items = [], bf = beruf(v("Beruf").trim());
      if(bf) bf.ausr.forEach(function(a, i){ items.push({t: "Startausrüstung " + a[0], s: a[1], g: "Startausrüstung: " + bf.t, kit: i, b: bf, info: false}); });
      waren().forEach(function(w){ items.push({t: w.n, s: (w.gew && w.gew !== "1" ? "Gewicht " + w.gew + " · " : "") + w.preis, g: w.g, w: w}); });
      items.push({t: "Zeile leeren", leer: 1, info: false});
      menu(btn, {breit: 300, items: items, auf: bf ? ["Startausrüstung: " + bf.t] : [],
        info: function(it){ var w = it.w; return info(w.n, p(w.wirk) + '<p class="s">' + esc(w.preis) + (w.gew ? " · Gewicht " + esc(w.gew) : "") + "</p>"); },
        pick: function(it){
          if(it.kit != null){ if(INV.some(function(f){ return v(f); }) && !confirm("Waffen, Rüstung und Inventar durch diese Startausrüstung ersetzen?")) return; ausruesten(it.b, it.kit, false); berufTalent(it.b, it.kit); }
          else setzen(n, it.leer ? "" : it.w.n);
          nachher(); }});
    }
  };
  function talentText(it){ if(it.trick) return it.t + " (Trick)"; if(it.z) return it.t; return it.wp && /^\d+$/.test(it.wp) ? it.t + " (" + it.wp + " WP)" : it.t; }
  function ruestWahl(btn, feld, wert, filter, nachteile){
    menu(btn, {items: ruestung().filter(filter).map(function(r){ return {t: r[0], s: "Rüstungswert " + r[1], sel: v(feld) === r[0], r: r}; }).concat([{t: "Keine", leer: 1, info: false}]),
      info: function(it){ var r = it.r; return info(r[0], p("**Rüstungswert** " + r[1]) + p("**Wirkung:** " + r[4]) + '<p class="s">' + esc(r[2]) + " · " + esc(r[3]) + "</p>"); },
      pick: function(it){ ruestSetzen(feld, wert, nachteile, it.leer ? null : it.r); nachher(); }});
  }
  function ruestSetzen(feld, wert, nachteile, r){
    setzen(feld, r ? r[0] : ""); setzen(wert, r ? r[1].replace("+", "") : "");
    nachteile.forEach(function(nt){ var name = Object.keys(NACHTEIL).filter(function(k){ return NACHTEIL[k] === nt; })[0]; S.f[nt] = !!(r && new RegExp(name === "Fernkampf" ? "Fernkampf" : "§" + name + "§").test(r[4])); });
  }
  function waffeSetzen(row, r){
    if(!r){ row.forEach(function(n){ setzen(n, ""); }); return; }
    setzen(row[0], r[0]); setzen(row[1], r[1]); setzen(row[2], r[3]); setzen(row[3], r[4]); setzen(row[4], r[5]); setzen(row[5], r[8]);
  }

  /* ---------- Volk / Beruf / Ausrüstung setzen ---------- */
  function alleTalentNamen(liste){ return liste.map(function(t){ return t.t || t; }); }
  function talentWeg(namen){ TAL.forEach(function(t){ var n = v(t).replace(/\s*\(.*$/, "").trim(); if(namen.indexOf(n) >= 0) setzen(t, ""); }); }
  function talentDazu(it){ var n = it.t; if(TAL.some(function(t){ return v(t).replace(/\s*\(.*$/, "").trim() === n; })) return; var f = frei(TAL); if(f) setzen(f, talentText(it)); }
  function talentLuecken(){ var l = TAL.map(function(t){ return v(t); }).filter(function(x){ return String(x).trim(); }); TAL.forEach(function(t, i){ setzen(t, l[i] || ""); }); }
  function volkSetzen(x){
    var alt = volk(v("Volk").trim()); if(alt) talentWeg(alleTalentNamen(alt.talente));
    setzen("Volk", x.t); x.talente.forEach(function(t){ talentDazu({t: t.t, wp: t.wp}); }); talentLuecken();
  }
  function berufTalente(b){ return /kein Start-Talent/.test(b.talent) ? [] : plain(b.talent).split(/,\s*|\s+oder\s+/).map(function(s){ return s.trim(); }).filter(Boolean); }
  function berufTalent(b, kit){
    var opt = berufTalente(b); if(!opt.length) return;
    var name = opt.length === 1 ? opt[0] : opt[Math.min(kit || 0, opt.length - 1)], h = heroisch().filter(function(t){ return t.n === name; })[0];
    talentWeg(opt); talentDazu({t: name, wp: h ? h.w : ""}); talentLuecken();
  }
  function berufSetzen(b, kit){
    var alt = beruf(v("Beruf").trim()); if(alt && alt !== b) talentWeg(berufTalente(alt));
    setzen("Beruf", b.t);
    var opt = berufTalente(b); if(opt.length === 1) berufTalent(b, 0);
    talentLuecken();
  }
  var WAFFE_ALIAS = {"Kriegshammer (klein)": "Kriegshammer, leicht", "Kleiner Schild": "Schild, klein", "Leichte Armbrust": "Armbrust, leicht"};
  var RUEST_ALIAS = {"Lederrüstung": "Leder", "Beschlagene Lederrüstung": "Beschlagenes Leder", "Kettenhemd": "Kettenhemd", "Plattenrüstung": "Plattenrüstung", "Offener Helm": "Offener Helm", "Topfhelm": "Topfhelm"};
  /* Startausrüstung eines Berufs eintragen; zufall: Alternativen und Würfel auswürfeln, sonst die erste Alternative und der Durchschnitt */
  function ausruesten(b, kit, zufall){
    var teile = b.ausr[kit][1].split(/,\s*/), wf = [], inv = [], klein = [], R = ruestung(), WF = waffen();
    WAFFE.forEach(function(r){ waffeSetzen(r, null); });
    ruestSetzen("Rüstung", "Rüstungswert", ["Nachteil 1","Nachteil 2","Nachteil 3"], null); ruestSetzen("Helm", "Rüstungswert 2", ["Nachteil 4","Nachteil 5"], null);
    teile.forEach(function(t){
      var alt = t.split("/"); t = zufall ? wahl(alt) : alt[0];
      var anz = 1, m2 = t.match(/^Zwei\s+(.+?)e?$/); if(m2){ anz = 2; t = "Dolch"; }
      var w = WAFFE_ALIAS[t] || t, wr = WF.filter(function(x){ return x.r[0] === w; })[0];
      if(wr){ for(var i = 0; i < anz; i++) wf.push(wr.r); return; }
      var ra = RUEST_ALIAS[t], rr = ra && R.filter(function(r){ return r[0] === ra; })[0];
      if(rr){ if(/Helm/.test(rr[0])) ruestSetzen("Helm", "Rüstungswert 2", ["Nachteil 4","Nachteil 5"], rr); else ruestSetzen("Rüstung", "Rüstungswert", ["Nachteil 1","Nachteil 2","Nachteil 3"], rr); return; }
      var wm = t.match(/^W(\d+)\s+(Essensrationen|Silber)$/);
      if(wm){ var n = zufall ? W(+wm[1]) : Math.ceil((+wm[1] + 1) / 2);
        if(wm[2] === "Silber"){ setzen("Silberstücke", String(n)); return; }
        for(var r = n; r > 0; r -= 4) inv.push("Essensrationen (" + Math.min(4, r) + ")"); return; }
      if(/Pferd|Esel|Karren/i.test(t)){ klein.push(t); return; }
      var wa = ware(t.replace(/\s*\(.*\)$/, "")) || ware(t);
      if(wa && wa.gew === "—"){ klein.push(t); return; }
      var g = wa ? parseInt(wa.gew, 10) || 1 : 1;
      inv.push(t); for(var j = 1; j < g; j++) inv.push("(" + t + ")");
    });
    wf.slice(0, 3).forEach(function(r, i){ waffeSetzen(WAFFE[i], r); });
    INV.forEach(function(f, i){ setzen(f, inv[i] || ""); });
    if(inv.length > INV.length) klein = inv.slice(INV.length).concat(klein);
    setzen("Kleinkram", klein.join("\n"));
  }

  /* ---------- Zufallscharakter (Kap. 2) ---------- */
  function zufall(){
    neu();
    var vt = nachTbl("sc", /^W12\|Volk/), vw = W(12), vn = "Mensch";
    if(vt) vt.rows.forEach(function(r){ var m = r[0].split(/[–-]/).map(Number); if(vw >= m[0] && vw <= (m[1] || m[0])) vn = r[1]; });
    var vk = volk(vn), bf = (window.DB_BERUF || [])[W(10) - 1], at = nachTbl("sc", /^W6\|Alter/), aw = W(6), alter = aw <= 3 ? "Jung" : aw <= 5 ? "Erwachsen" : "Alt";
    /* Attribute: 4W6, schlechtesten weg; der höchste Wert ins Schlüsselattribut */
    var wuerfe = [0, 1, 2, 3, 4, 5].map(function(){ var w = [W(6), W(6), W(6), W(6)].sort(); return w[1] + w[2] + w[3]; }).sort(function(a, b){ return b - a; });
    var key = bf.attr, rest = misch(Object.keys(ATTR).filter(function(k){ return k !== key; })), A = {};
    A[key] = wuerfe[0]; rest.forEach(function(k, i){ A[k] = wuerfe[i + 1]; });
    var mod = alter === "Jung" ? {GEW: 1, KON: 1} : alter === "Alt" ? {"STÄ": -2, GEW: -2, KON: -2, INT: 1, WIL: 1} : {};
    Object.keys(A).forEach(function(k){ setzen(ATTR[k], String(Math.max(3, Math.min(18, A[k] + (mod[k] || 0))))); });
    setzen("Alter", alter); volkSetzen(vk);
    var kit = W(3) - 1; setzen("Beruf", bf.t); berufTalent(bf, kit);
    /* geübte Fertigkeiten: sechs aus dem Beruf, der Rest frei */
    var anzahl = alter === "Jung" ? 8 : alter === "Erwachsen" ? 10 : 12, liste, schule = null;
    if(bf.fertx){ var fx = wahl(bf.fertx); liste = fx[1].split(/,\s*/); schule = liste.shift(); }
    else liste = bf.fert.slice();
    liste = liste.map(function(n){ return ALIAS[n] || n; });
    var gew = misch(liste).slice(0, schule ? 5 : 6);
    misch(SK.map(function(s){ return s.n; }).filter(function(n){ return gew.indexOf(n) < 0; })).slice(0, anzahl - 6).forEach(function(n){ gew.push(n); });
    gew.forEach(function(n){ var s = skillByName(n); if(s) S.geu[s.f] = 1; });
    if(schule){
      setzen(SEK[0].nm, schule);
      var M = magie(), sch = function(z){ return z.schule === schule || z.schule === "Allgemeine Magie"; };
      misch(M.filter(function(z){ return sch(z) && !z.trick && z.rang === 1; })).slice(0, 3).forEach(function(z){ talentDazu({t: z.n, z: z.z}); });
      misch(M.filter(function(z){ return sch(z) && z.trick; })).slice(0, 3).forEach(function(z){ talentDazu({t: z.n, trick: 1}); });
    }
    ausruesten(bf, kit, true);
    var namen = vk.namen || [], bein = bf.bein || [];
    setzen("Name", (wahl(namen) || "") + (bein.length ? " " + wahl(bein) : ""));
    var sw = w20(/Schwäche/), m = plain(wahl(sw) || "").match(/^(.+?)\.\s*(.*)$/); if(m){ setzen("Schwäche 1", m[1]); setzen("Schwäche 2", m[2]); }
    var mm = umbrechen(plain(wahl(w20(/Memento/)) || ""), MEM, fs(F["Memento 1"])); MEM.forEach(function(f, i){ setzen(f, mm[i] || ""); });
    var au = umbrechen(misch(w20(/Aussehen/)).slice(0, 2).map(plain).join(", "), AUS, fs(F[AUS[0]])); AUS.forEach(function(a, i){ setzen(a, au[i] || ""); });
    ableiten(); sichere(); render(); toast("Zufälliger Charakter erstellt");
  }

  /* ---------- Vorgefertigte Charaktere (Der versinkende Turm) ---------- */
  function vorlagen(){
    var o = []; Object.keys(((window.DB_AB || {}).turm || {}).figuren || {}).forEach(function(k){ var f = DB_AB.turm.figuren[k]; if(f.typ === "sc") o.push(f); }); return o;
  }
  function zl(f, k){ var z = (f.zl || []).filter(function(x){ return x[0] === k; })[0]; return z ? plain(z[1]) : ""; }
  function vorlageSetzen(f){
    neu();
    var vab = zl(f, "Volk · Alter · Beruf").split(" · "), bt = (vab[2] || "").split(/\s+–\s+/);
    setzen("Name", zl(f, "Name")); setzen("Volk", vab[0] || ""); setzen("Alter", vab[1] || ""); setzen("Beruf", bt[0] || "");
    var at = {}; zl(f, "Attribute").split(" · ").forEach(function(x){ var m = x.match(/^(\S+)\s+(\d+)/); if(m && ATTR[m[1]]) setzen(ATTR[m[1]], m[2]); });
    var sw = zl(f, "Schwäche").match(/^(.+?)\.\s*(.*)$/); if(sw){ setzen("Schwäche 1", sw[1]); setzen("Schwäche 2", sw[2]); }
    [zl(f, "Fertigkeiten"), zl(f, "Waffenfertigkeiten")].join(", ").split(/,\s*/).forEach(function(x){ var m = x.match(/^(.+?)\s+(\d+)$/); if(!m) return; var s = skillByName(m[1]); if(s){ setzen(s.f, m[2]); S.man[s.f] = 1; } });
    zl(f, "Sekundäre Fertigkeiten").split(/,\s*/).filter(Boolean).forEach(function(x, i){ var m = x.match(/^(.+?)\s+(\d+)$/); if(m && SEK[i]){ setzen(SEK[i].nm, m[1]); setzen(SEK[i].f, m[2]); S.man[SEK[i].f] = 1; } });
    var tal = zl(f, "Talente").split(/,\s*/).filter(function(t){ return t && t !== "Magie"; }), H = heroisch(), wpVon = function(n){ var h = H.filter(function(x){ return x.n === n; })[0]; if(h) return h.w; var r = ""; (window.DB_VOLK || []).forEach(function(vk){ vk.talente.forEach(function(t){ if(t.t === n) r = t.wp; }); }); return r; };
    tal.forEach(function(t){ talentDazu({t: t, wp: wpVon(t)}); });
    zl(f, "Zauber").split(/,\s*/).filter(Boolean).forEach(function(t){ talentDazu({t: t, z: 1}); });
    var r = zl(f, "Rüstung").match(/^(.+?)\s*\((\d+)\)/);
    if(r){ var rr = ruestung().filter(function(x){ return x[0] === r[1]; })[0]; if(rr) ruestSetzen("Rüstung", "Rüstungswert", ["Nachteil 1","Nachteil 2","Nachteil 3"], rr); else { setzen("Rüstung", r[1]); setzen("Rüstungswert", r[2]); } }
    zl(f, "Waffen").split("\n").filter(Boolean).slice(0, 3).forEach(function(x, i){
      var m = x.match(/^(.+?)\s*\((.*)\)$/); if(!m) return; var row = WAFFE[i], t = m[2].split(/,\s*/);
      var g = function(re){ var y = t.filter(function(s){ return re.test(s); })[0]; return y ? y.replace(re, "").trim() : ""; };
      setzen(row[0], m[1]); setzen(row[1], t[0]); setzen(row[2], g(/^Reichweite\s*/)); setzen(row[3], g(/^Schaden\s*/)); setzen(row[4], g(/^Haltbarkeit\s*/));
      setzen(row[5], t.filter(function(s){ return !/^(1H|2H|Reichweite|Schaden|Haltbarkeit)/.test(s); }).map(function(s){ return s.charAt(0).toUpperCase() + s.slice(1); }).join(", "));
    });
    zl(f, "Ausrüstung").split(/,\s*/).filter(function(x){ return x && x !== "–"; }).forEach(function(x, i){ if(INV[i]) setzen(INV[i], x); });
    var kl = zl(f, "Kleinkram"); if(kl && kl !== "–") setzen("Kleinkram", kl.split(/,\s*/).join("\n"));
    setzen("Silberstücke", zl(f, "Silber"));
    var mm = umbrechen(zl(f, "Memento"), MEM, fs(F["Memento 1"])); MEM.forEach(function(x, i){ setzen(x, mm[i] || ""); });
    var au = umbrechen(zl(f, "Aussehen"), AUS, fs(F[AUS[0]])); AUS.forEach(function(x, i){ setzen(x, au[i] || ""); });
    ableiten(); sichere(); render(); toast(zl(f, "Name") + " eingesetzt");
  }
  function vorlageWahl(btn){
    menu(btn, {breit: 290, items: vorlagen().map(function(f){ return {t: zl(f, "Name"), s: zl(f, "Volk · Alter · Beruf"), fig: f}; }),
      info: function(it){ var f = it.fig; return info(zl(f, "Name"), '<p class="s">' + esc(zl(f, "Volk · Alter · Beruf")) + " · Der versinkende Turm, S. " + f.p + "</p>" + p(zl(f, "Attribute")) + p("**Talente:** " + zl(f, "Talente")) + (zl(f, "Zauber") ? p("**Zauber:** " + zl(f, "Zauber")) : "") + p("**Waffen:** " + zl(f, "Waffen").split("\n").map(function(x){ return x.replace(/\s*\(.*$/, ""); }).join(", ")) + p("*" + zl(f, "Aussehen") + "*")); },
      pick: function(it){ vorlageSetzen(it.fig); }});
  }

  /* ---------- Eingaben ---------- */
  function feldDom(n){ return document.querySelector('#dbbBlatt [data-f="' + (window.CSS && CSS.escape ? CSS.escape(n) : n) + '"]'); }
  /* Werte nach Eingaben angleichen, ohne neu zu zeichnen (Fokus bleibt) */
  function angleichen(){
    ableiten();
    Object.keys(F).forEach(function(n){ var el = feldDom(n); if(!el) return;
      if(F[n][1][0] === "c"){ el.classList.toggle("on", !!S.f[n]); return; }
      if(el !== document.activeElement && el.value !== v(n)) el.value = v(n);
      el.classList.toggle("auto", istAbgeleitet(n) && !S.man[n]); passe(el); });
    document.querySelectorAll("#dbbBlatt .dbb-c.o").forEach(function(el){ el.classList.toggle("aus", ueberMax(el.dataset.f)); });
    var bfl = BERUFFERT(); document.querySelectorAll("#dbbBlatt .dbb-g").forEach(function(el){ var s = SK.filter(function(x){ return x.f === el.dataset.g; })[0]; el.classList.toggle("ber", !!s && bfl.indexOf(s.n) >= 0); });
    sichere();
  }
  /* Schrift verkleinern, bis der Text ins Feld passt */
  function passe(el){
    if(el.tagName !== "INPUT") return;
    var max = parseFloat(el.style.getPropertyValue("--fs")) || 12; el.style.fontSize = max + "px";
    var g = max; while(g > 6 && el.scrollWidth > el.clientWidth + 1){ g -= .5; el.style.fontSize = g + "px"; }
  }
  function schwPassen(el){
    if(!el) return; var g = 6.5 * K; el.style.fontSize = g + "px";
    while(g > 5 && el.scrollHeight > el.clientHeight + 1){ g -= .4; el.style.fontSize = g + "px"; }
  }
  function verdrahten(){
    var B = document.getElementById("dbbBlatt"); if(!B || B._ok) return; B._ok = 1;
    B.querySelectorAll("input").forEach(passe); schwPassen(B.querySelector("textarea.schw"));
    B.addEventListener("input", function(e){
      var el = e.target, n = el.dataset.f; if(!n) return;
      S.f[n] = el.value; if(n === "Schwäche 2") schwPassen(el);
      if(istAbgeleitet(n)){ if(el.value.trim()) S.man[n] = 1; else delete S.man[n]; }
      angleichen(); passe(el);
    });
    B.addEventListener("click", function(e){
      var c = e.target.closest(".dbb-c");
      if(c && !c.classList.contains("aus")){ var n = c.dataset.f; S.f[n] = !S.f[n]; c.classList.toggle("on", S.f[n]); sichere(); return; }
      var g = e.target.closest(".dbb-g");
      if(g){ var k = g.dataset.g; if(S.geu[k]) delete S.geu[k]; else S.geu[k] = 1; g.classList.toggle("on", !!S.geu[k]); g.dataset.tip = S.geu[k] ? "Geübt" : "Als geübt markieren"; delete S.man[k]; angleichen(); return; }
      var d = e.target.closest(".dbb-dd"), fx = e.target.closest("input[readonly]");
      var n2 = d ? d.dataset.l : fx ? fx.dataset.f : null;
      if(n2 && LISTEN[LISTE[n2]]){ e.stopPropagation(); LISTEN[LISTE[n2]](d || fx, n2); }
    });
    B.addEventListener("focusout", function(e){ if(e.target.dataset && e.target.dataset.f){ var n = e.target.dataset.f; if(/^(Volk|STR|KON|GEW|INT|WIL|CHA)$/.test(n) || TAL.indexOf(n) >= 0 || INV.indexOf(n) >= 0) angleichen(); } });
  }
  document.addEventListener("click", function(e){
    var ch = e.target.closest("[data-ch]"), pl = e.target.closest("[data-plus]"), dl = e.target.closest("[data-del]");
    if(ch){ DBS.cur = ch.dataset.ch; S = aktuell(); sichere(); render(); return; }
    if(pl){ neu(null, true); sichere(); render(); return; }
    if(dl){ if(gefuellt() && !confirm("Diesen Bogen löschen?")) return; DBS.l = DBS.l.filter(function(x){ return x.id !== dl.dataset.del; }); if(!DBS.l.length) DBS.l.push({id: nid(), s: leer()}); DBS.cur = DBS.l[DBS.l.length - 1].id; S = aktuell(); sichere(); render(); return; }
    var b = e.target.closest(".dbb-leiste [data-act]"); if(!b) { if(!e.target.closest(".bw-pop,.bw-info")) popWeg(); return; }
    e.stopPropagation(); var a = b.dataset.act;
    if(a === "zufall") zufall();
    if(a === "vorlage") vorlageWahl(b);
    if(a === "leeren"){ if(gefuellt() && !confirm("Alle Einträge löschen?")) return; setS(leer()); sichere(); render(); }
    if(a === "teilen") teilen();
    if(a === "sichern") sichernDatei();
    if(a === "pdf") pdf(b);
  });
  document.addEventListener("change", function(e){ if(e.target.id === "dbbDatei"){ ladenDatei(e.target.files[0]); e.target.value = ""; } });
  document.addEventListener("keydown", function(e){ if(e.key === "Escape" && document.querySelector(".bw-pop,.bw-info")){ e.stopImmediatePropagation(); e.preventDefault(); popWeg(); } }, true);
  window.addEventListener("hashchange", popWeg);
  var prev = window.afterRender;
  window.afterRender = function(){ if(prev) prev(); verdrahten(); };

  window.LK.init(function(h){ return h.indexOf("#n/bogen") === 0; });

  /* ---------- Ansicht ---------- */
  function view(h){
    var c = h[2] || "";
    if(c.indexOf("teilen~") === 0){
      var o = null; try{ o = pruefen(JSON.parse(ub64(c.slice(7)))); }catch(e){}
      var msg = "Link ungültig.";
      if(o){ neu(o); sichere(); msg = "Bogen als neuer Eintrag übernommen"; LK.an(); }
      history.replaceState(null, "", "#n/bogen"); setTimeout(function(){ toast(msg); }, 60);
    }
    ableiten();
    return chipsHtml() + (document.documentElement.classList.contains("lk") ? '<div class="dbb-sbar">' + leiste() + "</div>" : "") + '<div class="dbb-wrap">' + bogenHtml() + "</div>";
  }
  return {view: view, leiste: leiste, zustand: function(){ return S; }};
})();
