/* ============================================================
   HOUSEHOLD – Charakterbogen (deutscher Nachbau des Original-Bogens „Character Sheet“, A4 quer)
   Hintergrund: das Original ohne Text (bogen/hintergrund.webp bzw. .pdf für den Export),
   darüber deutsche Beschriftungen in den rekonstruierten Originalschriften, anklickbare Symbole
   mit den Originalumrissen (js/data/bogen-layout.js) und Textfelder an den Originalzeilen.
   Läuft in der Spielleiter-Tafel (#bogen[/vorlage]) und eigenständig für Mitspieler (bogen.html).
   ============================================================ */
var HB = (function(){
  "use strict";
  var L = window.HH_BOGEN_LAYOUT, D = window.HH_BOGEN_DATEN, V = window.HH_BOGEN_VORLAGEN || [];
  var S = 2, KEY = "hh_bogen_v1", ROOT = "../";
  var esc = window.esc || function(s){ return String(s == null ? "" : s).replace(/[&<>"]/g, function(c){ return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]; }); };
  var INK = "#1d1b1b", GRAU = "#878787";
  var FARBE = {h: "#cd1719", d: "#2061ac", c: "#248736", s: "#111", j: "#8a77a8"};
  var FELDER = ["g", "w", "k", "s"], FS = ["h", "d", "c", "s"];
  var FERT = {g: ["Art", "Charme", "Redegewandtheit", "Etikette", "Anmut"], w: ["Fürsorge", "Handwerk", "Kultur", "Einsicht", "Ermittlung"],
    k: ["Athletik", "Autorität", "Kampf", "Stärke", "Wille"], s: ["Vorsicht", "Geschick", "Ausweichen", "Erkundung", "Schießen"]};
  var ALIAS = {};
  /* Porträtrahmen (ganzer weißer Rahmen) und das HH-Abzeichen, das über dem Bild liegt */
  var PORT = [637.8, 29.7, 814.9, 194.4], ABZ = [705.0, 178.1, 747.7, 212.3];
  var BLOECKE = ["merkmale", "man0", "man1", "man2", "ausr_t", "vertrag1", "vertrag2", "erinnerungen", "erfahrungen"];

  /* ---------- Beschriftungen: [Text, x, Grundlinie, Größe, Schrift t/s, Ausrichtung, Farbe, maxBreite] ---------- */
  function beschriftungen(){
    var B = [], k = L.kopf, i;
    B.push(["Gesellschaft", k.Gesellschaft.x, 42.23, 20, "t", "start"], ["Wissenschaft", k.Wissenschaft.x, 155.62, 20, "t", "start"],
      ["Krieg", k.Krieg.x, 269.01, 20, "t", "start"], ["Strasse", k.Strasse.x, 382.39, 20, "t", "start"],
      ["Trümpfe im ärmel", 297.65, 41.53, 20, "t", "middle"], ["Merkmale", 297.6, 126.53, 20, "t", "middle"], ["Manöver", 297.65, 302.89, 20, "t", "middle"],
      ["Anstand", 528.65, 41.52, 20, "t", "middle"], ["Stress", 528.65, 124.95, 20, "t", "middle"], ["Zustände", 528.65, 183.49, 20, "t", "middle"],
      ["Verträge", 528.65, 303.28, 20, "t", "middle"], ["Memories", 726.15, 345.15, 20, "t", "middle"], ["Experiences", 726.3, 501.19, 20, "t", "middle"],
      ["Ausrüstung & Wohlstand", 30, 489.75, 19.5, "t", "start", INK, 196]);
    var BL = {g: [56.28, 70.43, 84.58, 98.74, 112.89], w: [169.67, 183.82, 197.98, 212.13, 226.28], k: [282.88, 297.03, 311.19, 325.34, 339.49], s: [396.3, 410.45, 424.6, 438.75, 452.91]};
    FELDER.forEach(function(f){ FERT[f].forEach(function(n, j){ B.push([n.toUpperCase().replace("ß", "SS"), 122.3, BL[f][j], 7.5, "s", "end"]); }); });
    [["UNGEHOBELT", 471.15, 78], ["ORDENTLICH", 527.8, 78], ["POMPÖS", 584.5, 78], ["SCHÄBIG", 499.5, 84.38], ["ELEGANT", 556.2, 84.38]].forEach(function(x){ B.push([x[0], x[1], x[2], 5, "s", "middle", GRAU]); });
    ZUST.forEach(function(z){ B.push([z[0], z[1], z[2], 7.5, "s", "start"]); });
    [["NAME:", 231.11], ["VOLK:", 245.28], ["HERKUNFT:", 259.45], ["BERUF:", 273.62], ["BERUFUNG:", 287.8], ["SPRACHEN:", 301.97]].forEach(function(x){ B.push([x[0], 680.8, x[1], 6, "s", "end", GRAU]); });
    [["P.", 364.55], ["I.", 378.72], ["II.", 392.89], ["III.", 407.06], ["IV.", 421.23], ["V.", 449.58]].forEach(function(x){ B.push([x[0], 640.9, x[1], 6, "s", "start", GRAU]); });
    B.push(["TTT", 469.5, 441.5, 7, "s", "start", INK, 0, 1]);
    ["I", "II", "III", "IV", "V"].forEach(function(n, j){ var r = L.ttt[j].r; B.push([n, (r[0] + r[2]) / 2, 440.68, 4, "s", "middle", GRAU]); });
    B.push(["POOR", 243.3, 475.94, 6, "s", "start", GRAU], ["MIDDLE CLASS", 243.3, 487.84, 6, "s", "start", GRAU, 51], ["WELL-OFF", 309.9, 475.23, 6, "s", "start", GRAU], ["RICH", 310, 487.74, 6, "s", "start", GRAU]);
    for(i = 0; i < B.length; i++){ B[i][6] = B[i][6] || INK; }
    return B;
  }
  /* Zustände: Name, x, Grundlinie, Linienende */
  var ZUST = [["BESCHÄMT", 443.3, 205.9, 514.1], ["VERWIRRT", 443.3, 220.05, 514.1], ["VERLETZT", 443.3, 234.21, 514.1], ["VERÄNGSTIGT", 443.3, 248.36, 514.1],
    ["ERSCHÖPFT", 531.2, 205.9, 601.9], ["KRANK", 531.2, 220.05, 601.9], ["VERGIFTET", 531.2, 234.21, 601.9], ["GEBROCHEN", 531.2, 248.36, 601.9]];

  /* ---------- Textbreiten (Bildschirm: Canvas, PDF: pdf-lib) ---------- */
  var CV = document.createElement("canvas").getContext("2d");
  function breite(t, art, sz){ CV.font = (sz * 10) + "px " + (art === "t" ? "HHTitel" : art === "b" ? "HHSchriftFett" : "HHSchrift"); return CV.measureText(t).width / 10; }

  /* ---------- Zustand ---------- */
  var ALLE = {}, AKT = "leer", ST = null;
  function laden(){ try{ ALLE = JSON.parse(localStorage.getItem(KEY)) || {}; }catch(e){ ALLE = {}; } }
  function sichern(){ ALLE[AKT] = ST; try{ localStorage.setItem(KEY, JSON.stringify(ALLE)); }catch(e){ hinweis("Speicher voll – das Bild ist zu groß."); } }
  function leer(){
    var o = {f: {name: "", volk: "", herkunft: "", beruf: "", berufung: "", sprachen: ""}, fp: {g: 0, w: 0, k: 0, s: 0}, sk: {}, asse: [0, 0, 0, 0, 0], anstand: 0, stress: 0,
      zf: [0, 0, 0, 0], zk: [0, 0, 0, 0, 0, 0], zx: ["", ""], merkmale: "", man: [], ausr_n: ["", "", "", "", ""], ausr_t: "", wohl: -1, muenzen: "",
      vertrag1: "", vertrag2: "", vk: [0, 0], ttt: 0, erinnerungen: "", erfahrungen: "", bild: ""};
    FELDER.forEach(function(f){ o.sk[f] = [0, 0, 0, 0, 0]; });
    for(var i = 0; i < 3; i++) o.man.push({t: "", k: 0, f: [0, 0, 0, 0]});
    return o;
  }
  /* Eingelesene Daten gegen die Vorlage prüfen: nur bekannte Felder und Typen */
  function mischen(tpl, src){
    if(Array.isArray(tpl)) return tpl.map(function(t, i){ return mischen(t, src && src[i]); });
    if(tpl && typeof tpl === "object"){ var o = {}; for(var k in tpl) o[k] = mischen(tpl[k], src && src[k]); return o; }
    return typeof src === typeof tpl ? src : tpl;
  }
  function vorlage(id){ return V.filter(function(v){ return v.id === id; })[0]; }
  function ausVorlage(v){
    var o = leer();
    ["f", "fp", "sk", "asse", "anstand", "wohl", "muenzen", "merkmale", "ausr_t", "vertrag1", "vertrag2", "erinnerungen", "erfahrungen", "bild"].forEach(function(k){ if(v[k] != null) o[k] = JSON.parse(JSON.stringify(v[k])); });
    (v.ausr_n || []).forEach(function(n, i){ o.ausr_n[i] = n; });
    (v.man || []).forEach(function(m, i){ o.man[i] = {t: m.t, k: 0, f: m.f.slice()}; });
    return mischen(leer(), o);
  }
  function zustandFuer(key){
    var st = ALLE[key];
    if(!st){ var v = vorlage(key); st = v ? ausVorlage(v) : leer(); }
    return mischen(leer(), st);
  }
  function blockText(id){ return id.indexOf("man") === 0 ? ST.man[+id.slice(3)].t : ST[id]; }
  function blockSetzen(id, t){ if(id.indexOf("man") === 0) ST.man[+id.slice(3)].t = t; else ST[id] = t; }
  function blockZeilen(id){ return id.indexOf("man") === 0 ? L.manoever[+id.slice(3)].z : L[id]; }

  /* ---------- Umbruch: Absätze → Zeilen (mit Fettdruck für „Name:“ und Zeilen in Großbuchstaben) ---------- */
  function woerter(text){
    var W = [];
    String(text || "").split("\n").forEach(function(p, pi){
      if(pi) W.push({br: 1});
      var t = p.replace(/\s+/g, " ").trim(); if(!t) return;
      var gross = t.length > 2 && t === t.toUpperCase() && /[A-ZÄÖÜ]/.test(t);
      var m = !gross && /^([^:]{1,60}:)(\s|$)/.exec(t), fett = gross ? t.length : (m ? m[1].length : 0), pos = 0;
      t.split(" ").forEach(function(w){ W.push({w: w, b: pos < fett}); pos += w.length + 1; });
    });
    return W;
  }
  function umbrechen(text, zeilen, mess){
    var W = woerter(text), Z = [[]], i = 0, x = 0, sp = mess(" ", false);
    function weite(j){ var r = zeilen[Math.min(j, zeilen.length - 1)]; return r[2] - r[0] - 6; }
    W.forEach(function(w){
      if(w.br){ Z.push([]); x = 0; return; }
      var ww = mess(w.w, w.b), z = Z[Z.length - 1];
      if(z.length && x + sp + ww > weite(Z.length - 1)){ Z.push([]); z = Z[Z.length - 1]; x = 0; }
      z.push(w); x += (z.length > 1 ? sp : 0) + ww;
    });
    while(Z.length && !Z[Z.length - 1].length && Z.length > 1) Z.pop();
    return Z;
  }
  function messBild(w, b){ return breite(w, b ? "b" : "s", 8); }
  /* Schriftgröße, damit ein einzeiliger Eintrag in sein Feld passt (höchstens Grundgröße, mindestens 5 pt) */
  function passend(t, art, r, gross, rand){ var w = breite(String(t || ""), art, gross), frei = r[2] - r[0] - (rand || 6); return w > frei ? Math.max(5, gross * frei / w) : gross; }
  function anpassen(el, art, gross, rand){ var r = JSON.parse(el.dataset.r); el.style.fontSize = (passend(el.value, art, r, gross, rand) * S).toFixed(2) + "px"; }

  /* ---------- Zeichnen ---------- */
  function svgText(t, x, y, sz, art, anker, farbe, maxB, fett){
    var fam = art === "t" ? "HHTitel" : art === "b" ? "HHSchriftFett" : "HHSchrift";
    var w = maxB ? breite(t, art, sz) : 0, sx = maxB && w > maxB ? maxB / w : 1;
    var tr = sx < 1 ? ' transform="translate(' + x + ' 0) scale(' + sx.toFixed(4) + ' 1) translate(' + (-x) + ' 0)"' : "";
    return '<text x="' + x + '" y="' + y + '" font-family="' + fam + '" font-size="' + sz + '" fill="' + farbe + '" text-anchor="' + anker + '"' + tr + (fett ? ' stroke="' + farbe + '" stroke-width=".25"' : '') + '>' + esc(t) + '</text>';
  }
  function markPfad(d, farbe){ return '<path d="' + d + '" fill="' + farbe + '" stroke="#231f20" stroke-width=".45" fill-rule="nonzero"/>'; }
  function kreuz(r){ var ix = (r[2] - r[0]) * .2, iy = (r[3] - r[1]) * .2; return '<path d="M' + (r[0] + ix) + ' ' + (r[1] + iy) + 'L' + (r[2] - ix) + ' ' + (r[3] - iy) + 'M' + (r[2] - ix) + ' ' + (r[1] + iy) + 'L' + (r[0] + ix) + ' ' + (r[3] - iy) + '" stroke="' + INK + '" stroke-width=".9" stroke-linecap="round" fill="none"/>'; }
  /* Alle Markierungen: [Feld (r,d), an?, Art („f“ Farbe | „x“ Kreuz), Farbe, Klick-Kennung] */
  function markierungen(){
    var M = [], st = ST;
    FELDER.forEach(function(f, fi){
      var F = L.felder[f];
      M.push([F.feld, st.fp[f], "f", FARBE[FS[fi]], "fp." + f]);
      F.fert.forEach(function(reihe, ri){ reihe.forEach(function(b, j){ M.push([b, st.sk[f][ri] > j, "f", FARBE[FS[fi]], "sk." + f + "." + ri + "." + j]); }); });
    });
    L.asse.forEach(function(b, i){ M.push([b, st.asse[i], "f", FARBE[["h", "d", "c", "s", "j"][i]], "asse." + i]); });
    L.anstand.forEach(function(b, i){ M.push([b, st.anstand > i, "f", "#83739a", "anstand." + i]); });
    L.stress.forEach(function(b, i){ M.push([b, st.stress > i, "x", INK, "stress." + i]); });
    L.zfarbe.forEach(function(b, i){ M.push([b, st.zf[i], "f", FARBE[FS[i]], "zf." + i]); });
    L.zkasten.forEach(function(b, i){ M.push([b, st.zk[i], "x", INK, "zk." + i]); });
    L.manoever.forEach(function(m, i){
      M.push([m.kreis, st.man[i].k, "f", "#3a2e2a", "mk." + i]);
      m.farben.forEach(function(b, j){ M.push([b, st.man[i].f[j], "f", FARBE[FS[j]], "mf." + i + "." + j]); });
    });
    L.wohlstand.forEach(function(b, i){ M.push([b, st.wohl === i, "f", "#b47e00", "wohl." + i]); });
    L.vkreis.forEach(function(b, i){ M.push([b, st.vk[i], "f", "#3a2e2a", "vk." + i]); });
    L.ttt.forEach(function(b, i){ M.push([b, st.ttt > i, "f", "#3a2e2a", "ttt." + i]); });
    return M;
  }
  function klick(id){
    var p = id.split("."), st = ST, n;
    if(p[0] === "fp") st.fp[p[1]] = st.fp[p[1]] ? 0 : 1;
    else if(p[0] === "sk"){ n = +p[3] + 1; var a = st.sk[p[1]]; a[+p[2]] = a[+p[2]] === n ? n - 1 : n; }
    else if(p[0] === "asse" || p[0] === "zf" || p[0] === "zk" || p[0] === "vk"){ st[p[0]][+p[1]] = st[p[0]][+p[1]] ? 0 : 1; }
    else if(p[0] === "anstand" || p[0] === "stress" || p[0] === "ttt"){ n = +p[1] + 1; st[p[0]] = st[p[0]] === n ? n - 1 : n; }
    else if(p[0] === "mk") st.man[+p[1]].k = st.man[+p[1]].k ? 0 : 1;
    else if(p[0] === "mf"){ var f = st.man[+p[1]].f; f[+p[2]] = f[+p[2]] ? 0 : 1; }
    else if(p[0] === "wohl") st.wohl = st.wohl === +p[1] ? -1 : +p[1];
    sichern(); zeichneSvg();
  }
  function svgInhalt(){
    var h = "";
    beschriftungen().forEach(function(b){ h += svgText(b[0], b[1], b[2], b[3], b[4], b[5], b[6], b[7], b[8]); });
    ZUST.forEach(function(z){ var x0 = z[1] + breite(z[0], "s", 7.5) + 1.2; h += '<path d="M' + x0.toFixed(2) + ' ' + z[2] + 'H' + z[3] + '" stroke="' + INK + '" stroke-width=".5"/>'; });
    markierungen().forEach(function(m){ if(!m[1]) return; h += m[2] === "x" ? kreuz(m[0].r) : markPfad(m[0].d, m[3]); });
    /* Textblöcke (Anzeige) */
    BLOECKE.forEach(function(id){
      if(BEARB === id) return;
      var Z = blockZeilen(id), zl = umbrechen(blockText(id), Z, messBild);
      zl.forEach(function(z, i){
        if(i >= Z.length || !z.length) return;
        var r = Z[i], x = r[0] + 3.6, y = r[3] - 3, t = "";
        var lauf = [], cur = null;
        z.forEach(function(w, k){ if(!cur || cur.b !== w.b){ cur = {b: w.b, t: (k ? " " : "") + w.w}; lauf.push(cur); } else cur.t += " " + w.w; });
        t = lauf.map(function(l){ return '<tspan font-family="' + (l.b ? "HHSchriftFett" : "HHSchrift") + '">' + esc(l.t).replace(/^ /, "&#160;") + '</tspan>'; }).join("");
        h += '<text x="' + x + '" y="' + y + '" font-size="8" fill="' + INK + '" xml:space="preserve">' + t + '</text>';
      });
    });
    return h;
  }
  function zeichneSvg(){ var s = document.getElementById("hbsvg"); if(s) s.innerHTML = svgInhalt(); }

  /* ---------- Felder (HTML) ---------- */
  function pos(r, extra){ return 'left:' + (r[0] * S).toFixed(1) + 'px;top:' + (r[1] * S).toFixed(1) + 'px;width:' + ((r[2] - r[0]) * S).toFixed(1) + 'px;height:' + ((r[3] - r[1]) * S).toFixed(1) + 'px' + (extra || ""); }
  var WAHL = {volk: 1, herkunft: 1, beruf: 1, berufung: 1, sprachen: 1};
  var PERS = ["name", "volk", "herkunft", "beruf", "berufung", "sprachen"];
  function felderHtml(){
    var h = "";
    markierungen().forEach(function(m){ var r = m[0].r; h += '<button class="hbk" style="' + pos([r[0] - .6, r[1] - .6, r[2] + .6, r[3] + .6]) + '" onclick="HB.klick(\'' + m[4] + '\')" aria-label="Markieren"></button>'; });
    PERS.forEach(function(k, i){
      var r = L.person[i];
      h += '<input class="hbi' + (WAHL[k] ? ' wahl' : '') + '" style="' + pos(r, ';font-size:' + (passend(ST.f[k], "s", r, 8, 8) * S).toFixed(2) + 'px') + '" data-r="' + JSON.stringify(r) + '" value="' + esc(ST.f[k]) + '" spellcheck="false" autocomplete="off"' +
        (WAHL[k] ? ' readonly onclick="HB.wahl(this,\'' + k + '\',event)"' : ' oninput="HB.setz(\'f.' + k + '\',this.value);HB.anpassen(this,\'s\',8,8)"') + '>';
    });
    L.zeilen_z.forEach(function(r, i){ h += '<input class="hbi" style="' + pos(r, ';font-size:' + (passend(ST.zx[i], "s", r, 8, 8) * S).toFixed(2) + 'px') + '" data-r="' + JSON.stringify(r) + '" value="' + esc(ST.zx[i]) + '" spellcheck="false" oninput="HB.setz(\'zx.' + i + '\',this.value);HB.anpassen(this,\'s\',8,8)">'; });
    L.ausr_n.forEach(function(r, i){ h += '<input class="hbi fett mitte" style="' + pos(r, ';font-size:' + (passend(ST.ausr_n[i], "b", r, 8, 6) * S).toFixed(2) + 'px') + '" data-r="' + JSON.stringify(r) + '" value="' + esc(ST.ausr_n[i]) + '" spellcheck="false" oninput="HB.setz(\'ausr_n.' + i + '\',this.value);HB.anpassen(this,\'b\',8,6)">'; });
    var c = L.muenzen; h += '<input class="hbi muenze" style="' + pos(c) + '" value="' + esc(ST.muenzen) + '" maxlength="3" spellcheck="false" oninput="HB.setz(\'muenzen\',this.value)" aria-label="Münzen">';
    BLOECKE.forEach(function(id){
      var Z = blockZeilen(id), r = [Z[0][0], Z[0][1], Math.max.apply(null, Z.map(function(z){ return z[2]; })), Z[Z.length - 1][3]];
      h += '<div class="hbb" style="' + pos(r) + '" onclick="HB.bearbeiten(\'' + id + '\')"></div>';
    });
    if(DD[0]) DD.forEach(function(d){ h += '<button class="hbdd noprint" style="left:' + (d[1] * S) + 'px;top:' + (d[2] * S) + 'px" onclick="HB.beispiele(this,\'' + d[0] + '\',event)" title="Aus Beruf und Volk übernehmen – du kannst auch frei schreiben" aria-label="Beispiele">▾</button>'; });
    var p = PORT, bild = ST.bild;
    h += '<label class="hbbild' + (bild ? ' voll' : '') + '" style="' + pos(p) + '" title="Bild wählen">' + (bild ? '<img src="' + esc(bild) + '" alt=""><button class="weg noprint" onclick="event.preventDefault();HB.bild(null)" title="Bild entfernen" aria-label="Bild entfernen">×</button>' : '') +
      '<input type="file" accept="image/*" onchange="HB.bild(this.files[0])"></label>' +
      (bild ? '<img class="hbabz" src="' + BASIS + 'bogen/abzeichen.png" alt="" style="' + pos(ABZ) + '">' : '');
    return h;
  }
  /* Auswahlpfeile neben Überschriften: [Block, x, y] in pt */
  var DD = [["merkmale", 383, 114], ["man0", 383, 290], ["vertrag1", 598, 291], ["ausr_t", 392, 470]];

  var BEARB = null;
  function bearbeiten(id){
    if(BEARB) fertig();
    BEARB = id; zeichneSvg();
    var Z = blockZeilen(id), r = [Z[0][0], Z[0][1], Math.max.apply(null, Z.map(function(z){ return z[2]; })), Z[Z.length - 1][3]];
    var lh = (Z[Z.length - 1][3] - Z[0][3]) / Math.max(1, Z.length - 1) || 14.15;
    var ta = document.createElement("textarea"); ta.className = "hbta"; ta.spellcheck = false; ta.value = blockText(id);
    ta.style.cssText = pos([r[0], r[1] + (r[3] - r[1]) / Z.length - lh, r[2], r[3]]) + ';line-height:' + (lh * S) + 'px;padding:' + ((lh - 11.4 + 0) * S + 3) + 'px ' + (3.6 * S) + 'px 0';
    ta.style.top = ((Z[0][3] - lh) * S) + "px"; ta.style.height = ((Z[Z.length - 1][3] - Z[0][3] + lh) * S) + "px"; ta.style.paddingTop = "0";
    var minH = parseFloat(ta.style.height);
    var wachsen = function(){ ta.style.height = minH + "px"; if(ta.scrollHeight > ta.clientHeight) ta.style.height = (ta.scrollHeight + 2) + "px"; };
    ta.oninput = function(){ blockSetzen(id, ta.value); sichern(); wachsen(); };
    setTimeout(wachsen, 0);
    ta.onblur = function(){ setTimeout(function(){ if(document.activeElement !== ta) fertig(); }, 0); };
    ta.onkeydown = function(e){ if(e.key === "Escape"){ e.stopPropagation(); ta.blur(); } };
    document.getElementById("hbs").appendChild(ta); ta.focus();
  }
  function fertig(){ var ta = document.querySelector(".hbta"); if(ta) ta.remove(); BEARB = null; zeichneSvg(); }
  function setz(pfad, v){ var p = pfad.split("."), o = ST; for(var i = 0; i < p.length - 1; i++) o = o[p[i]]; o[p[p.length - 1]] = v; sichern(); }

  /* ---------- Ansicht ---------- */
  function zoom(){ return Math.max(.3, Math.min(1.25, (Math.max(innerWidth, 1280) - 48) / (L.W * S))); }
  function symbol(p){ return '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' + p + '</svg>'; }
  var IC = {
    vor: '<circle cx="9" cy="8" r="3.2"/><path d="M3 20c0-3.5 2.7-6 6-6s6 2.5 6 6"/><circle cx="17.5" cy="9" r="2.4"/><path d="M17 14.2c2.6.2 4.5 2.2 4.5 5.3"/>',
    zufall: '<rect x="3.5" y="3.5" width="17" height="17" rx="3"/><circle cx="8.5" cy="8.5" r=".9" fill="currentColor"/><circle cx="15.5" cy="8.5" r=".9" fill="currentColor"/><circle cx="12" cy="12" r=".9" fill="currentColor"/><circle cx="8.5" cy="15.5" r=".9" fill="currentColor"/><circle cx="15.5" cy="15.5" r=".9" fill="currentColor"/>',
    leeren: '<path d="M3.5 12a8.5 8.5 0 1 0 2.6-6.1"/><path d="M3.5 4v5h5"/>',
    teilen: '<circle cx="18" cy="5" r="2.6"/><circle cx="6" cy="12" r="2.6"/><circle cx="18" cy="19" r="2.6"/><path d="M8.3 10.7l7.4-4.3M8.3 13.3l7.4 4.3"/>',
    sichern: '<path d="M12 4v11"/><path d="M7 11l5 5 5-5"/><path d="M5 20h14"/>',
    laden: '<path d="M12 16V5"/><path d="M7 9l5-5 5 5"/><path d="M5 20h14"/>',
    pdf: '<path d="M5 3h11l4 4v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"/><path d="M7.5 3v5h8V3"/><rect x="7" y="13" width="10" height="8"/>'
  };
  function leiste(){
    var b = function(ic, tip, on, cls){ return '<button class="hbib' + (cls ? ' ' + cls : '') + '" onclick="' + on + '" data-tip="' + tip + '" aria-label="' + tip + '">' + symbol(IC[ic]) + '</button>'; };
    return '<div class="hbleiste">' + b("vor", "Vorgefertigte Charaktere", "HB.vorPop(event)", "vorn") + b("zufall", "Zufälligen Charakter erstellen", "HB.zufall()") + b("leeren", "Leeren", "HB.leeren()") +
      b("teilen", "Link teilen (ohne Bild)", "HB.teilen()") + b("sichern", "Als Datei sichern", "HB.jsonAus()") +
      '<label class="hbib" data-tip="Datei laden" aria-label="Datei laden">' + symbol(IC.laden) + '<input type="file" accept=".json,application/json" hidden onchange="HB.jsonEin(this)"></label>' +
      b("pdf", "Als PDF speichern", "HB.pdf(this)", "haupt") + '</div>';
  }
  function ansicht(id){
    laden();
    AKT = id && vorlage(id) ? id : "leer"; ST = zustandFuer(AKT); BEARB = null;
    setTimeout(function(){ if(document.fonts && document.fonts.load) Promise.all(["10px HHTitel", "10px HHSchrift", "10px HHSchriftFett"].map(function(f){ return document.fonts.load(f); })).then(nachSchrift, nachSchrift); }, 0);
    return '<div class="hbwrap">' + leiste() + '<div class="hbsheet" id="hbs" style="width:' + (L.W * S) + 'px;height:' + (L.H * S) + 'px;zoom:' + zoom().toFixed(3) + '">' +
      '<img class="hbbg" src="' + BASIS + 'bogen/hintergrund.webp" alt="" draggable="false">' +
      '<svg id="hbsvg" class="hbsvg" viewBox="0 0 ' + L.W + ' ' + L.H + '" xmlns="http://www.w3.org/2000/svg">' + svgInhalt() + '</svg>' + felderHtml() + '</div></div>';
  }
  var BASIS = "", SCHRIFT_DA = false;
  /* Erst wenn die Bogenschriften geladen sind, stimmen Breiten und Umbrüche: einmal neu aufbauen */
  function nachSchrift(){ if(SCHRIFT_DA){ zeichneSvg(); return; } SCHRIFT_DA = true; var a = document.activeElement; if(a && a.closest && a.closest("#hbs")) zeichneSvg(); else neuZeichnen(); }
  function neuZeichnen(){ var w = document.querySelector(".hbwrap"); if(!w) return; var y = scrollY, tmp = document.createElement("div"); tmp.innerHTML = ansicht(AKT === "leer" ? "" : AKT); w.replaceWith(tmp.firstChild); scrollTo(0, y); }
  addEventListener("resize", function(){ var s = document.getElementById("hbs"); if(s) s.style.zoom = zoom().toFixed(3); });

  /* ---------- Popups (Auswahl mit „i“, Beispiele, Vorlagen) ---------- */
  function popWeg(){ document.querySelectorAll(".hbpop,.hbinfo").forEach(function(e){ e.remove(); }); }
  document.addEventListener("click", popWeg);
  function neuPop(el, key, w){
    var offen = document.querySelector(".hbpop"), same = offen && offen.dataset.k === key; popWeg(); if(same) return null;
    var r = el.getBoundingClientRect(), p = document.createElement("div"); p.className = "hbpop"; p.dataset.k = key; p.style.width = w + "px";
    p.style.left = Math.max(8, Math.min(r.left, innerWidth - w - 14)) + "px"; p.style.top = (r.bottom + 4) + "px";
    p.addEventListener("click", function(ev){ ev.stopPropagation(); }); p._r = r; return p;
  }
  function zeigPop(p){ document.body.appendChild(p); var h = p.getBoundingClientRect().height; if(p._r.bottom + 4 + h > innerHeight) p.style.top = Math.max(8, innerHeight - h - 8) + "px"; }
  function info(btn, titel, text){
    var old = document.querySelector(".hbinfo"); if(old) old.remove();
    document.querySelectorAll(".hbpop .pi.sel").forEach(function(x){ x.classList.remove("sel"); }); btn.classList.add("sel");
    var pop = btn.closest(".hbpop"), q = pop.getBoundingClientRect(), c = document.createElement("div"); c.className = "hbinfo";
    c.innerHTML = "<b>" + esc(titel) + "</b>" + String(text).split("\n").map(function(t){ return "<p>" + esc(t) + "</p>"; }).join("");
    c.style.top = q.top + "px"; c.style.maxHeight = Math.max(q.height, 160) + "px";
    var re = q.right + 340 + 8 < innerWidth; c.style.left = re ? (q.right - 1) + "px" : (q.left - 340 + 1) + "px"; c.classList.add(re ? "re" : "li");
    c.addEventListener("click", function(x){ x.stopPropagation(); }); document.body.appendChild(c);
  }
  function zeile(i, n, cur, mitInfo, zusatz){ return '<div class="pz"><button class="pn' + (n === cur ? ' sel' : '') + '" data-i="' + i + '">' + esc(n) + (zusatz ? '<em>' + esc(zusatz) + '</em>' : '') + '</button>' + (mitInfo ? '<button class="pi" data-t="' + i + '" title="Info" aria-label="Info">i</button>' : '') + '</div>'; }
  var FN = {g: "Gesellschaft", w: "Wissenschaft", k: "Krieg", s: "Straße"};
  function beruf(n){ return D.berufe.filter(function(b){ return b.n === n; })[0]; }
  function berufung(n){ var r = null; D.berufe.forEach(function(b){ b.berufungen.forEach(function(v){ if(v.n === n) r = {b: b, v: v}; }); }); return r; }
  function optionen(art){
    if(art === "volk") return D.voelker.map(function(v){ return {n: v.n, i: v.i + "\nErbvertrag: " + v.v.n}; });
    if(art === "herkunft") return D.nationen.map(function(v){ return {n: v.n, i: v.i + "\nSprache: " + v.sp}; });
    if(art === "beruf") return D.berufe.map(function(b){ return {n: b.n, i: "Feld: " + FN[b.feld] + " · Merkmal: " + b.merkmal + "\nFertigkeiten: " + b.fert.join(", ")}; });
    if(art === "berufung"){
      var b = beruf(ST.f.beruf), L2 = [];
      (b ? [b] : D.berufe).forEach(function(x){ x.berufungen.forEach(function(v){ L2.push({n: v.n, g: b ? "" : x.n, i: v.i + "\nFeld: " + FN[v.feld] + " · Merkmal zur Wahl: " + v.merkmale.filter(function(m){ return m[0] !== "#"; }).join(", ") + "\nFertigkeiten: " + v.fert.join(", ")}); }); });
      return L2;
    }
    return [];
  }
  function wahl(el, art, e){
    e.stopPropagation(); var p = neuPop(el, art, art === "sprachen" ? 260 : 300); if(!p) return;
    if(art === "sprachen"){
      var hat = ST.f.sprachen.split(/,\s*/).filter(Boolean);
      p.innerHTML = D.sprachen.map(function(s, i){ return '<div class="pz"><button class="pn' + (hat.indexOf(s) >= 0 ? ' sel' : '') + '" data-i="' + i + '">' + esc(s) + '</button></div>'; }).join("");
      zeigPop(p);
      p.addEventListener("click", function(ev){ var b = ev.target.closest("button"); if(!b) return; var s = D.sprachen[+b.dataset.i], a = ST.f.sprachen.split(/,\s*/).filter(Boolean), k = a.indexOf(s);
        if(k >= 0) a.splice(k, 1); else a.push(s); a.sort(function(x, y){ return D.sprachen.indexOf(x) - D.sprachen.indexOf(y); });
        ST.f.sprachen = a.join(", "); el.value = ST.f.sprachen; b.classList.toggle("sel"); sichern(); });
      return;
    }
    var O = optionen(art), cur = ST.f[art], h = '<div class="pz"><button class="pn" data-i="-1">– keine –</button></div>', grp = null;
    O.forEach(function(o, i){ if(o.g && o.g !== grp){ grp = o.g; h += '<h4>' + esc(grp) + '</h4>'; } h += zeile(i, o.n, cur, true); });
    p.innerHTML = h; zeigPop(p);
    p.addEventListener("click", function(ev){
      var b = ev.target.closest("button"); if(!b) return;
      if(b.dataset.t !== undefined){ var o = O[+b.dataset.t]; info(b, o.n, o.i); return; }
      var v = +b.dataset.i < 0 ? "" : O[+b.dataset.i].n; ST.f[art] = v;
      if(art === "beruf" && ST.f.berufung && !(beruf(v) && beruf(v).berufungen.some(function(x){ return x.n === ST.f.berufung; }))) ST.f.berufung = "";
      if(art === "berufung" && v && !ST.f.beruf){ var bv = berufung(v); if(bv) ST.f.beruf = bv.b.n; }
      sichern(); popWeg(); neuZeichnen();
    });
  }
  /* Beispiele aus Beruf, Berufung und Volk übernehmen */
  function beispiele(btn, id, e){
    e.stopPropagation(); var p = neuPop(btn, "dd" + id, 400); if(!p) return;
    var B = beruf(ST.f.beruf), bv = berufung(ST.f.berufung), list = [], h = '<div class="pk">Übernehmen – du kannst auch frei schreiben</div>';
    function gruppe(t, items){ if(!items.length) return; h += '<h4>' + esc(t) + '</h4>'; items.forEach(function(it){ list.push(it); h += zeile(list.length - 1, it.n, "", !!it.i, it.z); }); }
    var comps = D.companions;
    if(id === "merkmale"){
      if(B) gruppe("Beruf: " + B.n, [B.merkmal].map(function(n){ return {n: n, i: (D.merkmale[n] || {}).t || "", t: n + ": " + kurzText((D.merkmale[n] || {}).t || "", 230)}; }));
      if(bv) gruppe("Berufung: " + bv.v.n, bv.v.merkmale.filter(function(n){ return n[0] !== "#" && n !== "Animal Companion"; }).map(function(n){ return {n: n, i: (D.merkmale[n] || {}).t || "", t: n + ": " + kurzText((D.merkmale[n] || {}).t || "", 230)}; }));
      if(B && B.merkmal === "Animal Companion") comps.forEach(function(c){ gruppe(c.n, c.merkmale.map(function(n){ return {n: n, i: (D.merkmale[n] || {}).t || "", t: n + " (" + c.n + "-Merkmal): " + kurzText((D.merkmale[n] || {}).t || "", 200)}; })); });
    } else if(id === "man0"){
      if(B) gruppe("Beruf: " + B.n, B.manoever.filter(function(n){ return n[0] !== "#"; }).map(function(n){ var m = D.manoever[n]; return {n: n, z: m.f.split("").map(function(c){ return {h: "♥", d: "♦", c: "♣", s: "♠"}[c]; }).join(""), i: (m.v ? m.v + "\n" : "") + m.t, t: n + ": " + m.t, f: m.f}; }));
      if(B && B.merkmal === "Animal Companion") comps.forEach(function(c){ gruppe(c.n, c.manoever.map(function(n){ var m = D.manoever[n] || {f: "", t: ""}; return {n: n, i: m.t, t: n + ": " + c.n + "-Manöver. " + m.t, f: m.f}; })); });
    } else if(id === "vertrag1"){
      var vo = D.voelker.filter(function(v){ return v.n === ST.f.volk; })[0];
      if(vo) gruppe("Erbvertrag", [{n: vo.v.n, i: "Zugeständnis: " + vo.v.z.n + ". " + vo.v.z.t + "\nGegenleistung: " + vo.v.g.n + ". " + vo.v.g.t, t: vertragText(vo)}]);
    } else if(id === "ausr_t"){
      gruppe("Wohlstand", [["Poor", "2 Münzen"], ["Middle Class", "5 Münzen"], ["Well-off", "10 Münzen"], ["Rich", "20 Münzen"]].map(function(w, i){ return {n: w[0], z: w[1], wohl: i}; }));
    }
    if(!list.length) h += '<div class="pz"><span class="pn leer">' + (id === "vertrag1" ? "Wähle zuerst ein Volk." : "Wähle zuerst Beruf und Berufung.") + '</span></div>';
    p.innerHTML = h; zeigPop(p);
    p.addEventListener("click", function(ev){
      var b = ev.target.closest("button"); if(!b) return; var it = list[+(b.dataset.t !== undefined ? b.dataset.t : b.dataset.i)]; if(!it) return;
      if(b.dataset.t !== undefined){ info(b, it.n, it.i); return; }
      if(id === "merkmale") ST.merkmale = (ST.merkmale ? ST.merkmale + "\n" : "") + it.t;
      else if(id === "man0"){ var k = ST.man.findIndex(function(m){ return !m.t; }); if(k < 0) k = 2; ST.man[k] = {t: it.t, k: 0, f: FS.map(function(c){ return (it.f || "").indexOf(c) >= 0 ? 1 : 0; })}; }
      else if(id === "vertrag1") ST.vertrag1 = it.t;
      else if(id === "ausr_t"){ ST.wohl = it.wohl; ST.muenzen = ["2", "5", "10", "20"][it.wohl]; }
      sichern(); popWeg(); neuZeichnen();
    });
  }
  function kurzText(t, n){ t = String(t); if(t.length <= n) return t; var c = t.slice(0, n), i = Math.max(c.lastIndexOf(". "), c.lastIndexOf("! ")); return i > n * .4 ? c.slice(0, i + 1) : c.replace(/\s+\S*$/, "") + " …"; }
  function vertragText(vo){ return vo.v.n.toUpperCase() + "\nZugeständnis: " + vo.v.z.n + ". " + kurzText(vo.v.z.t, 150) + "\nGegenleistung: " + vo.v.g.n + ". " + kurzText(vo.v.g.t, 110); }
  function vorPop(e){
    e.stopPropagation(); var p = neuPop(e.currentTarget, "vor", 330); if(!p) return;
    p.innerHTML = '<div class="pz"><button class="pn' + (AKT === "leer" ? ' sel' : '') + '" data-id="">Leerer Bogen</button></div>' + V.map(function(v){ return '<div class="pz"><button class="pn' + (AKT === v.id ? ' sel' : '') + '" data-id="' + v.id + '"><img src="' + BASIS + v.bild + '" alt="">' + esc(v.t) + '<em>' + esc(v.f.beruf + " · " + v.f.volk) + '</em></button></div>'; }).join("");
    zeigPop(p);
    p.addEventListener("click", function(ev){ var b = ev.target.closest("button"); if(!b) return; popWeg(); NAV(b.dataset.id); });
  }
  var NAV = function(id){ if(typeof go === "function") go(id ? "bogen/" + id : "bogen"); };

  /* ---------- Zufall: Figur nach den Regeln (S. 42–47) ---------- */
  function wf(n){ return Math.floor(Math.random() * n); }
  function pick(a){ return a[wf(a.length)]; }
  var NAMEN = ["Aurelia", "Bartholomew", "Clementine", "Desmond", "Eloise", "Florian", "Gwendolyn", "Horatio", "Isolde", "Jasper", "Lavinia", "Marius", "Ottilie", "Percival", "Rosalind", "Sebastian", "Theodora", "Valentin", "Wilhelmina", "Ambrose", "Beatrix", "Cornelius", "Delphine", "Edmund", "Felicity", "Gideon", "Henrietta", "Ignatius"];
  var NACH = ["Ashcombe", "Blackwood", "Copperkettle", "Dewberry", "Elderflower", "Fairweather", "Goldthread", "Hazelnut", "Inkwell", "Juniper", "Kettlewick", "Lanternfield", "Mothwing", "Nettlebrook", "Oakhollow", "Pennywhistle", "Quillsby", "Rosethorn", "Silverspoon", "Thimbleton", "Underbough", "Velvetine", "Wickersham"];
  function fertIndex(n){ n = ALIAS[n] || n; var r = null; FELDER.forEach(function(f){ var i = FERT[f].indexOf(n); if(i >= 0) r = [f, i]; }); return r; }
  function zufallsFigur(){
    var o = leer(), vo = pick(D.voelker), na = pick(D.nationen), B = pick(D.berufe), v = pick(B.berufungen);
    o.f = {name: pick(NAMEN) + " " + pick(NACH), volk: vo.n, herkunft: na.n, beruf: B.n, berufung: v.n, sprachen: ""};
    /* Feldpunkte aus Beruf und Berufung */
    o.fp[B.feld] = 1; o.fp[v.feld] = 1;
    /* Fertigkeitspunkte: je 1 aus Beruf und Berufung, dann 4 frei (höchstens 3 je Fertigkeit) */
    B.fert.concat(v.fert).forEach(function(n){ var x = fertIndex(n); if(x && o.sk[x[0]][x[1]] < 3) o.sk[x[0]][x[1]]++; });
    for(var k = 0, t = 0; k < 4 && t < 200; t++){ var f = pick(FELDER), i = wf(5); if(o.sk[f][i] < 3){ o.sk[f][i]++; k++; } }
    /* Merkmale: Berufsmerkmal + eines der Berufung */
    var mv = v.merkmale.filter(function(n){ return n[0] !== "#" && n !== "Animal Companion" && D.merkmale[n]; }), MK = [B.merkmal, pick(mv)], comp = null;
    if(B.merkmal === "Animal Companion"){ comp = pick(D.companions); MK[0] = "Animal Companion (" + comp.n + ")"; }
    o.merkmale = MK.map(function(n){ var base = n.replace(/ \(.*\)$/, ""), d = D.merkmale[base]; return n + ": " + kurzText(d ? d.t : "", 170); }).join("\n");
    /* Manöver: eines aus der Liste des Berufs (Tierführer: des Begleittiers) */
    var mn = comp ? pick(comp.manoever) : pick(B.manoever.filter(function(n){ return D.manoever[n]; })), m = D.manoever[mn];
    o.man[0] = {t: mn + ": " + (comp ? comp.n + "-Manöver. " : "") + kurzText(m.t, 170), k: 0, f: FS.map(function(c){ return m.f.indexOf(c) >= 0 ? 1 : 0; })};
    if(comp){ o.ausr_n[0] = comp.n.toUpperCase(); o.ausr_t = kurzText((D.merkmale[comp.n] || {}).companion || "", 150); }
    /* Trümpfe im Ärmel: die Asse der Felder, in denen die Figur 2 Punkte hat */
    FELDER.forEach(function(f, i){ if(o.fp[f]) o.asse[i] = 1; });
    /* Anstand: Punkte in Gesellschaft + Wissenschaft (1 gedruckter + Zusatzpunkt) → 2 Schäbig, 3 Ordentlich, 4 Elegant (nur mit eleganter Kleidung → Ordentlich) */
    var an = 2 + o.fp.g + o.fp.w; o.anstand = an >= 4 ? 3 : an;
    o.wohl = 1; o.muenzen = "5";
    /* Sprachen: Housian + Sprache der Heimat, bei 2 Punkten in Wissenschaft eine dritte */
    var sp = ["Housian", na.sp]; if(o.fp.w){ var rest = D.sprachen.filter(function(s){ return sp.indexOf(s) < 0; }); sp.push(pick(rest)); }
    o.f.sprachen = sp.sort(function(x, y){ return D.sprachen.indexOf(x) - D.sprachen.indexOf(y); }).join(", ");
    o.vertrag1 = vertragText(vo);
    return o;
  }
  function zufall(){
    laden(); var alt = ALLE.leer;
    if(alt && JSON.stringify(mischen(leer(), alt)) !== JSON.stringify(leer()) && !confirm("Den leeren Bogen durch einen zufälligen Charakter ersetzen?")) return;
    ALLE.leer = zufallsFigur(); try{ localStorage.setItem(KEY, JSON.stringify(ALLE)); }catch(e){}
    if(AKT === "leer"){ ST = ALLE.leer; neuZeichnen(); } else NAV("");
  }
  function leeren(){
    if(!confirm(AKT === "leer" ? "Alle Einträge löschen?" : "Diesen Bogen auf die Vorlage zurücksetzen?")) return;
    delete ALLE[AKT]; ST = zustandFuer(AKT); sichern(); if(AKT !== "leer"){ delete ALLE[AKT]; try{ localStorage.setItem(KEY, JSON.stringify(ALLE)); }catch(e){} } neuZeichnen();
  }
  function bild(file){
    if(!file){ ST.bild = ""; sichern(); neuZeichnen(); return; }
    var r = new FileReader(); r.onload = function(){ var im = new Image(); im.onload = function(){
      var p = PORT, ar = (p[2] - p[0]) / (p[3] - p[1]), W = 700, H = Math.round(W / ar), c = document.createElement("canvas"); c.width = W; c.height = H;
      var s = Math.max(W / im.width, H / im.height), w = im.width * s, h = im.height * s;
      c.getContext("2d").drawImage(im, (W - w) / 2, (H - h) / 2, w, h);
      ST.bild = c.toDataURL("image/jpeg", .85); sichern(); neuZeichnen(); }; im.src = r.result; };
    r.readAsDataURL(file);
  }

  /* ---------- Teilen (Link) und Datei ---------- */
  function b64u(buf){ var s = "", a = new Uint8Array(buf); for(var i = 0; i < a.length; i++) s += String.fromCharCode(a[i]); return btoa(s).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, ""); }
  function ub64(t){ t = t.replace(/-/g, "+").replace(/_/g, "/"); while(t.length % 4) t += "="; var b = atob(t), a = new Uint8Array(b.length); for(var i = 0; i < b.length; i++) a[i] = b.charCodeAt(i); return a; }
  function packen(o){
    var txt = JSON.stringify(o);
    if(!window.CompressionStream) return Promise.resolve("k" + b64u(new TextEncoder().encode(txt)));
    return new Response(new Blob([txt]).stream().pipeThrough(new CompressionStream("deflate-raw"))).arrayBuffer().then(function(b){ return "d" + b64u(b); });
  }
  function entpacken(t){
    var a = ub64(t.slice(1));
    var p = t[0] === "k" ? Promise.resolve(new TextDecoder().decode(a)) : new Response(new Blob([a]).stream().pipeThrough(new DecompressionStream("deflate-raw"))).text();
    return p.then(JSON.parse);
  }
  function hinweis(t){ var d = document.createElement("div"); d.className = "hbtoast"; d.textContent = t; document.body.appendChild(d); setTimeout(function(){ d.remove(); }, 2600); }
  function teilen(){
    var o = JSON.parse(JSON.stringify(ST)); if(/^data:/.test(o.bild)) o.bild = "";
    packen(o).then(function(c){
      var u = new URL(BASIS + "bogen.html", location.href).href + "#bogen=" + c;
      if(navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(u).then(function(){ hinweis("Link kopiert – ein eigenes Bild ist nicht enthalten."); }, function(){ prompt("Link kopieren:", u); });
      else prompt("Link kopieren:", u);
    });
  }
  function dateiname(){ return "Household – " + ((ST.f.name || "").trim() || "Charakterbogen"); }
  function jsonAus(){
    var a = document.createElement("a"); a.href = URL.createObjectURL(new Blob([JSON.stringify({spiel: "household-bogen", daten: ST}, null, 1)], {type: "application/json"}));
    a.download = dateiname() + ".json"; a.click();
  }
  function jsonEin(inp){
    var f = inp.files && inp.files[0]; if(!f) return;
    var r = new FileReader(); r.onload = function(){
      try{ var o = JSON.parse(r.result); if(!o || o.spiel !== "household-bogen" || !o.daten) throw 0;
        laden(); if(ALLE.leer && !confirm("Den leeren Bogen durch die Datei ersetzen?")) return;
        ALLE.leer = mischen(leer(), o.daten); try{ localStorage.setItem(KEY, JSON.stringify(ALLE)); }catch(e){}
        if(AKT === "leer"){ ST = ALLE.leer; neuZeichnen(); } else NAV(""); hinweis("Datei geladen.");
      }catch(e){ alert("Diese Datei ist kein Household-Bogen."); }
    }; r.readAsText(f); inp.value = "";
  }
  /* Geteilten Bogen aus dem Link übernehmen (#bogen=…) */
  function linkImport(){
    var m = /#bogen=([dk][A-Za-z0-9_-]+)$/.exec(location.hash); if(!m) return Promise.resolve();
    return entpacken(m[1]).then(function(d){
      history.replaceState(null, "", location.pathname + location.search + "#bogen");
      laden(); if(ALLE.leer && !confirm("Geteilten Bogen laden? Dein bisheriger Bogen wird ersetzt.")) return;
      ALLE.leer = mischen(leer(), d); try{ localStorage.setItem(KEY, JSON.stringify(ALLE)); }catch(e){}
    }, function(){ history.replaceState(null, "", location.pathname + location.search + "#bogen"); });
  }

  /* ---------- PDF: Original-Hintergrund (Vektor) + deutsche Beschriftung + Formularfelder ---------- */
  function js(src){ return new Promise(function(res, rej){ var s = document.createElement("script"); s.src = ROOT + src; s.onload = res; s.onerror = function(){ rej(new Error(src + " fehlt")); }; document.head.appendChild(s); }); }
  function bytes(u){ return fetch(u).then(function(r){ if(!r.ok) throw new Error(u + " fehlt"); return r.arrayBuffer(); }); }
  function hex(c){ c = c.replace("#", ""); if(c.length === 3) c = c.split("").map(function(x){ return x + x; }).join(""); return PDFLib.rgb(parseInt(c.slice(0, 2), 16) / 255, parseInt(c.slice(2, 4), 16) / 255, parseInt(c.slice(4, 6), 16) / 255); }
  function pdf(knopf){
    if(BEARB) fertig();
    knopf.disabled = true; knopf.style.opacity = ".5";
    var fertigK = function(){ knopf.disabled = false; knopf.style.opacity = ""; };
    (window.PDFLib ? Promise.resolve() : js("shared/lib/pdf-lib.min.js")).then(function(){ return window.fontkit ? 0 : js("shared/lib/fontkit.umd.min.js"); }).then(function(){
      return Promise.all([bytes(BASIS + "bogen/hintergrund.pdf"), bytes(BASIS + "bogen/hh-titel.ttf"), bytes(BASIS + "bogen/hh-schrift.ttf"), bytes(BASIS + "bogen/hh-schrift-fett.ttf")]);
    }).then(function(x){
      var P = PDFLib, H = L.H;
      return P.PDFDocument.load(x[0]).then(function(doc){
        doc.registerFontkit(fontkit);
        return Promise.all([doc.embedFont(x[1], {subset: false}), doc.embedFont(x[2], {subset: false}), doc.embedFont(x[3], {subset: false})]).then(function(F){
          var FT = {t: F[0], s: F[1], b: F[2]}, page = doc.getPage(0), form = doc.getForm(), n = 0, ink = hex(INK);
          doc.setTitle(dateiname()); doc.setSubject("Household – Charakterbogen"); doc.setCreator("Spielleitertool");
          var sicher = function(font, t){ var o = ""; for(var i = 0; i < t.length; i++){ var c = t[i] === "−" ? "-" : t[i]; try{ font.encodeText(c); o += c; }catch(e){ o += "?"; } } return o; };
          /* Beschriftungen */
          beschriftungen().forEach(function(b){
            var f = FT[b[4]], t = sicher(f, b[0]), w = f.widthOfTextAtSize(t, b[3]), sx = b[7] && w > b[7] ? b[7] / w : 1, x = b[1] - (b[5] === "middle" ? w * sx / 2 : b[5] === "end" ? w * sx : 0);
            if(sx < 1) page.pushOperators(P.pushGraphicsState(), P.concatTransformationMatrix(sx, 0, 0, 1, x * (1 - sx), 0));
            page.drawText(t, {x: x, y: H - b[2], size: b[3], font: f, color: hex(b[6])});
            if(b[8]) page.drawText(t, {x: x + .18, y: H - b[2], size: b[3], font: f, color: hex(b[6])});
            if(sx < 1) page.pushOperators(P.popGraphicsState());
          });
          ZUST.forEach(function(z){ var x0 = z[1] + FT.s.widthOfTextAtSize(z[0], 7.5) + 1.2; page.drawLine({start: {x: x0, y: H - z[2]}, end: {x: z[3], y: H - z[2]}, thickness: .5, color: ink}); });
          /* Kästchen und Symbole als echte Formular-Kästchen mit Original-Umriss */
          markierungen().forEach(function(m){
            var r = m[0].r, rect = {x: r[0], y: H - r[3], width: r[2] - r[0], height: r[3] - r[1], borderWidth: 0, backgroundColor: undefined, borderColor: undefined};
            var c = form.createCheckBox("m" + (++n)); c.addToPage(page, rect);
            c.updateAppearances(function(){
              var an = m[2] === "x" ? (function(){ var w = rect.width, h = rect.height, ix = w * .2, iy = h * .2; return P.drawLine({start: {x: ix, y: iy}, end: {x: w - ix, y: h - iy}, thickness: .9, color: ink, lineCap: P.LineCapStyle.Round}).concat(P.drawLine({start: {x: ix, y: h - iy}, end: {x: w - ix, y: iy}, thickness: .9, color: ink, lineCap: P.LineCapStyle.Round})); })()
                : P.drawSvgPath(m[0].d, {x: -r[0], y: r[3], color: hex(m[3]), borderColor: hex("#231f20"), borderWidth: .45});
              return {normal: {on: an, off: []}, down: {on: an, off: []}};
            });
            if(m[1]) c.check();
          });
          /* Textfelder: eine Zeile je Original-Zeile; Blöcke werden passend umbrochen */
          var feld = function(r, text, font, sz, mitte, anpassen){
            text = sicher(font, text || "");
            if(anpassen){ var w = font.widthOfTextAtSize(text, sz), frei = r[2] - r[0] - 6; if(w > frei) sz = Math.max(5, sz * frei / w); }
            var t = form.createTextField("t" + (++n)); t.setText(text);
            t.addToPage(page, {x: r[0], y: H - r[3], width: r[2] - r[0], height: r[3] - r[1], font: font, textColor: ink, borderWidth: 0, backgroundColor: undefined, borderColor: undefined});
            t.setFontSize(sz); if(mitte) t.setAlignment(P.TextAlignment.Center); t.updateAppearances(font);
          };
          var messPdf = function(w, b){ return (b ? FT.b : FT.s).widthOfTextAtSize(sicher(FT.s, w), 8); };
          PERS.forEach(function(k, i){ feld(L.person[i], ST.f[k], FT.s, 8, false, true); });
          L.zeilen_z.forEach(function(r, i){ feld(r, ST.zx[i], FT.s, 8, false, true); });
          L.ausr_n.forEach(function(r, i){ feld(r, ST.ausr_n[i], FT.b, 8, true, true); });
          feld(L.muenzen, ST.muenzen, FT.b, 12, true);
          BLOECKE.forEach(function(id){
            var Z = blockZeilen(id), zl = umbrechen(blockText(id), Z, messPdf);
            Z.forEach(function(r, i){ var z = zl[i] || [], allesFett = z.length && z.every(function(w){ return w.b; }); feld(r, z.map(function(w){ return w.w; }).join(" "), allesFett ? FT.b : FT.s, 8); });
          });
          /* Porträt */
          var pb = ST.bild ? (/^data:/.test(ST.bild) ? Promise.resolve(ST.bild) : bildAlsJpeg(BASIS + ST.bild)) : Promise.resolve(null);
          return pb.then(function(url){
            if(!url) return;
            return Promise.all([fetch(url).then(function(r){ return r.arrayBuffer(); }).then(function(b){ return doc.embedJpg(b); }), bytes(BASIS + "bogen/abzeichen.png").then(function(b){ return doc.embedPng(b); })]).then(function(im){
              var p = PORT, a = ABZ; page.drawImage(im[0], {x: p[0], y: H - p[3], width: p[2] - p[0], height: p[3] - p[1]});
              page.drawImage(im[1], {x: a[0], y: H - a[3], width: a[2] - a[0], height: a[3] - a[1]}); });
          }).then(function(){ return doc.save(); });
        });
      });
    }).then(function(b){
      fertigK();
      if(window.FillPDF && FillPDF.ausgeben) FillPDF.ausgeben(b, dateiname() + ".pdf");
      else { var a = document.createElement("a"); a.href = URL.createObjectURL(new Blob([b], {type: "application/pdf"})); a.download = dateiname() + ".pdf"; a.click(); }
    }, function(e){ fertigK(); alert("Das PDF konnte nicht erstellt werden: " + (e && e.message || e)); });
  }
  function bildAlsJpeg(src){
    return new Promise(function(res){ var im = new Image(); im.onload = function(){ var c = document.createElement("canvas"); c.width = im.naturalWidth; c.height = im.naturalHeight; c.getContext("2d").drawImage(im, 0, 0); res(c.toDataURL("image/jpeg", .9)); }; im.onerror = function(){ res(null); }; im.src = src; });
  }

  return {ansicht: ansicht, klick: klick, setz: setz, bearbeiten: bearbeiten, wahl: wahl, beispiele: beispiele, vorPop: vorPop, zufall: zufall, leeren: leeren, bild: bild,
    teilen: teilen, anpassen: anpassen, jsonAus: jsonAus, jsonEin: jsonEin, pdf: pdf, linkImport: linkImport, zufallsFigur: zufallsFigur,
    basis: function(b, r, nav){ BASIS = b; ROOT = r; if(nav) NAV = nav; }};
})();
