/* BROKEN COMPASS – Abenteurerbogen zum Ausfüllen (deutsch, Layout nach dem Originalbogen) mit PDF-Export (shared/fillpdf.js) */
"use strict";
var BOGEN = (function(){
  var KEY = "bc_bogen";
  var FELDER = [
    ["Aktion", "#b3321e", ["Kämpfen", "Anführen", "Stunt"]],
    ["Mut", "#d1721a", ["Kaltblütigkeit", "Fahren", "Schießen"]],
    ["Wissen", "#2d5f9a", ["Kultur", "Erste Hilfe", "Technik"]],
    ["Gesellschaft", "#7a3f8f", ["Charme", "Redekunst", "Beobachtung"]],
    ["Wildnis", "#3f7a3a", ["Spähen", "Überleben", "Zäh"]],
    ["Verbrechen", "#3d3d46", ["Wachsam", "Fingerfertigkeit", "Schleichen"]]
  ];
  var GUT = [["Kraftvoll", "Aktion"], ["Wagemutig", "Mut"], ["Konzentriert", "Wissen"], ["Selbstsicher", "Gesellschaft"], ["Wild entschlossen", "Wildnis"], ["Unantastbar", "Verbrechen"]];
  var SCHLECHT = ["Blutend", "Geschockt", "Benommen", "Beschämt", "Gebrochen", "Verängstigt"];
  var S = null;
  function load(){ try{ S = JSON.parse(localStorage.getItem(KEY) || "{}"); }catch(e){ S = {}; } S.f = S.f || {}; S.p = S.p || {}; S.c = S.c || {}; }
  function save(){ try{ localStorage.setItem(KEY, JSON.stringify(S)); }catch(e){} }
  function esc(s){ return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"); }
  function inp(k, cls, ph){ return '<input class="bf ' + (cls || "") + '" data-k="' + k + '" value="' + esc(S.f[k]) + '"' + (ph ? ' placeholder="' + esc(ph) + '"' : "") + '>'; }
  function pips(k, n){ var v = S.p[k] || 0, o = ""; for(var i = 0; i < n; i++) o += '<i class="pp' + (i < v ? " on" : "") + '" data-k="' + k + '" data-i="' + i + '"></i>'; return '<span class="pips">' + o + '</span>'; }
  function chk(k){ return '<i class="ck' + (S.c[k] ? " on" : "") + '" data-c="' + k + '"></i>'; }
  function zeilen(pre, n, ph){ var o = ""; for(var i = 0; i < n; i++) o += inp(pre + i, "ln", ph); return o; }
  function render(){
    var A = window.APP; load();
    document.body.className = "inh bogenseite"; document.body.style.setProperty("--c", "#a8701f");
    document.getElementById("tabs").innerHTML = "";
    var bar = document.querySelector(".topbar"); bar.style.height = ""; bar.style.transform = ""; clearInterval(HERO.t);
    var fe = FELDER.map(function(F, fi){
      return '<div class="fd" style="--f:' + F[1] + '"><h4>' + F[0] + pips("F" + fi, 3) + '</h4>' + F[2].map(function(s, si){ return '<div class="sk"><span>' + s + '</span>' + pips("s" + fi + si, 3) + '</div>'; }).join("") + '</div>';
    }).join("");
    var gef = GUT.map(function(g, i){ return '<div class="gf"><div class="gn">' + g[0] + chk("fg" + i) + '</div><span>' + g[1] + '</span><div class="gn">' + SCHLECHT[i] + chk("fb" + i) + '</div></div>'; }).join("") + '<div class="gf"><div class="gn">' + inp("g6", "gl") + chk("fg6") + '</div><span></span><div class="gn">' + inp("b6", "gl") + chk("fb6") + '</div></div><div class="gf"><div class="gn">' + inp("g7", "gl") + chk("fg7") + '</div><span></span><div class="gn">' + inp("b7", "gl") + chk("fb7") + '</div></div>';
    var glueck = ""; for(var i = 0; i < 9; i++) glueck += '<i class="lk' + (S.c["l" + i] ? " on" : "") + '" data-c="l' + i + '"></i>';
    A.innerHTML = '<div class="bg-wrap"><div class="bg-tools noprint"><button class="bg-b" id="bgPdf">PDF herunterladen</button><button class="bg-b" onclick="window.print()">Drucken</button><button class="bg-b" id="bgClr">Leeren</button></div>' +
      '<div class="sheet" id="bgSheet">' +
      '<div class="sh-top"><div class="sh-l"><label>Ich bin</label>' + inp("name", "ln big") + '<label>Nennt mich, wenn ihr mich braucht</label>' + inp("ruf", "ln") +
      '<label>Orte, die ich mein Zuhause nenne</label><div class="dr3">' + inp("herkunft", "ln") + inp("heimat", "ln") + inp("arbeit", "ln") + '</div><div class="un3"><span>Herkunft</span><span>Heimatland</span><span>Arbeitsort</span></div>' +
      '<label>Worte, nach denen ich lebe</label>' + inp("motto", "ln") + '</div><div class="sh-pic"></div></div>' +
      '<div class="sh-mid"><div class="felder">' + fe + '</div><div class="sh-r"><h3>Glück</h3><div class="luck">' + glueck + '</div><h3 class="fl">Ich fühle</h3><div class="gefs">' + gef + '</div><h3 class="fl">Expertise</h3><div class="exl">' + zeilen("x", 6) + '</div></div>' +
      '</div>' +
      '<h3 class="ws">Waffen &amp; Ausrüstung</h3><div class="waf">' + [0, 1, 2, 3].map(function(i){ return inp("w" + i, "ln wn", "") + inp("wd" + i, "ln wd", ""); }).join("") + '</div>' +
      '<div class="sh-bot"><div class="bx"><h5>Narben und Erfahrungen</h5>' + zeilen("n", 5) + '</div>' +
      '<div class="bx"><h5>Taschen</h5>' + zeilen("t", 4) + '<h5>Beutel</h5>' + zeilen("u", 3) + '</div>' +
      '<div class="bx"><h5>Rucksack</h5>' + zeilen("r", 6) + '<div class="mags"><b>Magazine</b><span>Taschen</span>' + chk("m0") + chk("m1") + '<span>Beutel</span>' + chk("m2") + chk("m3") + '<span>Rucksack</span>' + chk("m4") + chk("m5") + '</div></div></div>' +
      '</div></div>';
    A.querySelectorAll(".bf").forEach(function(e){ e.addEventListener("input", function(){ S.f[e.dataset.k] = e.value; save(); }); });
    A.querySelectorAll(".pp").forEach(function(e){ e.addEventListener("click", function(){ var k = e.dataset.k, i = +e.dataset.i + 1; S.p[k] = (S.p[k] === i) ? i - 1 : i; save(); A.querySelectorAll('.pp[data-k="' + k + '"]').forEach(function(x){ x.classList.toggle("on", +x.dataset.i < S.p[k]); }); }); });
    A.querySelectorAll("[data-c]").forEach(function(e){ e.addEventListener("click", function(){ S.c[e.dataset.c] = !S.c[e.dataset.c]; save(); e.classList.toggle("on", S.c[e.dataset.c]); }); });
    document.getElementById("bgClr").onclick = function(){ if(confirm("Den ganzen Bogen leeren?")){ S = {f: {}, p: {}, c: {}}; save(); render(); } };
    document.getElementById("bgPdf").onclick = function(){ if(!window.FillPDF) return; var nm = (S.f.name || "").trim() || "Abenteurerbogen";
      FillPDF.make(document.getElementById("bgSheet"), {name: "Broken Compass – " + nm, knopf: this, bg: "#e9e2d0", marks: [[".pp", "on", "punkt"], [".ck", "on", "x"], [".lk", "on", "punkt"]]}); };
    window.scrollTo(0, 0);
  }
  return {render: render};
})();
