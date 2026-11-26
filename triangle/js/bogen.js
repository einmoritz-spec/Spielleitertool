/* ============================================================
   Agentenbogen (Character Organization Sheets, 11 Seiten) – deutsch, interaktiv
   Routen:  #ark/bogen                 Übersicht aller Agenten
            #ark/bogen/<id>            Übersicht eines Agenten (Kacheln)
            #ark/bogen/<id>/<blatt>    ein Blatt (Seitenleiste mit allen Blättern)
            #ark/bogen/teilen/<daten>  geteilter Agent (Link), Ansicht + „Übernehmen“
   Speicher: localStorage "ta_agenten_v1"; geteilte Agenten liegen nur im Speicher (BG.gast).
   PDF: alle Blätter als ausfüllbares PDF (shared/fillpdf.js, makeSeiten).
   ============================================================ */
var BG_KEY = "ta_agenten_v1";
var BG = {db:(function(){ try{ return JSON.parse(localStorage.getItem(BG_KEY) || "null") || {x:[]}; }catch(e){ return {x:[]}; } })(), gast:null};
function bgSave(){ if(BG.akt === BG.gast) return; try{ localStorage.setItem(BG_KEY, JSON.stringify(BG.db)); }catch(e){ bgToast("Speicher voll – Foto ggf. entfernen."); } }

var BG_QUAL = ["Aufmerksamkeit","Doppelzüngigkeit","Dynamik","Empathie","Initiative","Beharrlichkeit","Präsenz","Professionalität","Subtilität"];
var BG_RANG = ["Trainee","Sachbearbeiter","Senior-Sachbearbeiter","Stellvertretender Direktor","Direktor","Regionaldirektor","Vizepräsident","Senior-VP","Exekutiv-VP","Vorsitzender"];
var BG_ANSEHEN = ["Gutes Ansehen","Verbesserung nötig","Dringende Verbesserung nötig","Dieser Angestellte","Allein beim Mittagessen","Ziel passiver Aggression","Von Partys ausgeladen","Wir hatten solche Hoffnungen in dich gesetzt","Es ist noch Zeit, sich zu ändern","Bitte tu das nicht","Zugang zum Frozen-Yogurt-Raum entzogen"];
var BG_BONI = ["Vorausschauend","Mitfühlend","Vernetzt","Verflucht","Frühanwender","Belebend","Modebewusst","Einflussreich","Mobil","Zäh","Ehrwürdig","Belesen"];
/* Work-Life-Leisten: 30 Kästchen, Kästchen-Nr. → Playwall-Code (wie auf dem Bogen) */
var BG_SPUR = {
  k:{t:"Kompetenz", c:"rot", arc:"kompetenz", codes:{3:"A3",6:"D4",9:"G3",12:"J3",15:"N3",18:"Q3",21:"T3",24:"W8",27:"Y2"}},
  r:{t:"Realität", c:"gelb", arc:"realitaet", codes:{1:"C4",4:"L11",8:"E2",10:"O4",14:"T6",16:"V2",20:"X3",22:"H5",26:"E3"}},
  a:{t:"Anomalie", c:"blau", arc:"anomalie", codes:{1:"H4",2:"H3",5:"U2",7:"X2",11:"N1",13:"Q2",17:"L10",19:"G8",23:"A7"}}
};
var BG_FB = [
  ["Wie bist du mit deiner Anomalie in Kontakt gekommen?", ["Frühere Beziehung zu einer Anomalie, die in der Nähe auftauchte", "Anomalie entstand aus meinen Gedanken", "Versehentlich in einen Einsatz der Agency verwickelt", "Vom Triangle-Academy-Programm für den Außendienst ge-TAP-t"]],
  ["Wie hat die Agency dich gefunden?", ["Durch den Einsatz meiner Anomalie-Kräfte in der Öffentlichkeit", "Versehentlich in einen Einsatz der Agency verwickelt", "Ich habe sie gefunden"]],
  ["Haben deine Kräfte eine einzigartige visuelle Erscheinung?", []],
  ["Wie trinkst du deinen Kaffee?", ["Schwarz", "Hafermilch-Latte", "Spiegelei, einmal gewendet", "Nichts Stärkeres als Tee"]],
  ["Bitte beschreibe deine bisherige Berufserfahrung.", []],
  ["Wie vertraut bist du mit Adobe, Excel und der Google-Suite?", []],
  ["Was bringst du in einem kollaborativen Arbeitsumfeld ein?", []]
];
var BG_BLATT = [
  ["stamm","Stammblatt",1],["willkommen","Willkommen, Agent!",1],["balance","Work-Life-Balance",1],["faehig","Anomalie-Fähigkeiten",2],
  ["bez","Beziehungen",2],["anf","Anforderungen",2],["leisten","Eigene Leisten",1],["notizen","Notizen",1]
];

/* ---------- Datenmodell ---------- */
function bgLeer(n, f){ var o = []; for(var i = 0; i < n; i++) o.push(f()); return o; }
function bgNeu(){
  return {id:"a" + Date.now().toString(36) + Math.random().toString(36).slice(2, 5), name:"", pron:"", titel:"", arc:{a:"", r:"", k:""},
    bel:0, ver:0, verGes:0, burn:0, ausl:"", ventil:"", ventilAn:0, direktive:"", gebilligt:["","",""], gebAn:[0,0,0],
    selbst:[-1,-1,-1], qsPlus:{}, qsAus:{}, fb:{}, rfb:[], rfbA:{}, matrix:[], ausweis:{bild:"", notfall:"", bez:"", gehalt:""},
    wl:{k:0, r:0, a:0, kx:0, rx:0, ax:0}, mvp:0, prob:0, log:[], offen:[], frei:{},
    faeh:bgLeer(6, function(){ return {h:"", x:"", q:"", ok:"", plus:"", nein:"", f:"", a:[["",""],["",""]], st:[[0,0,0],[0,0,0]], geuebt:0, seite:""}; }),
    bez:bgLeer(12, function(){ return {n:"", von:"", besch:"", v:0, bonus:"", aktiv:0}; }),
    anf:bgLeer(12, function(){ return {n:"", code:"", eff:""}; }),
    leisten:bgLeer(5, function(){ return {n:"", max:"", v:0, lang:0}; }).map(function(l, i){ l.lang = i >= 3 ? 1 : 0; return l; }),
    zaehler:bgLeer(4, function(){ return {n:"", max:"", v:0}; }), notiz:""};
}
function bgArcImg(kat){ return Z({anomalie:"arc-a-anomalie", realitaet:"arc-r-realitaet", kompetenz:"arc-c-kompetenz"}[kat]); }
function bgFinde(id){ return BG.db.x.filter(function(a){ return a.id === id; })[0]; }
function bgPlain(s){
  return String(s == null ? "" : s).replace(/\*\*|\*/g, "").replace(/\{3\}/g, "3").replace(/\{S\.(\d+)\}/g, "S. $1")
    .replace(/<([^\/<>]+)\/([^<>]+)>/g, "$1").replace(/\[\[([^\]]+)\]\]/g, "$1").replace(/\s+\n/g, "\n").trim();
}
function bgSuch(L, t, o){ (L || []).forEach(function(b){ if(!b || typeof b !== "object") return; if(Array.isArray(b)){ bgSuch(b, t, o); return; } if(b.t === t) o.push(b); ["x","b","r","l"].forEach(function(k){ if(Array.isArray(b[k])) bgSuch(b[k], t, o); }); }); return o; }
function bgStr(L){ var o = []; (function f(x){ if(typeof x === "string") o.push(x); else if(Array.isArray(x)) x.forEach(f); })(L); return bgPlain(o.join(" ")); }
function bgArkName(kat, id){ var q = (TA_ARK[kat].x.filter(function(x){ return x[0] === id; })[0]); return q ? q[1] : ""; }
function bgRang(A){ return BG_RANG[Math.min(9, Math.floor(A.wl.k / 3))]; }
function bgAnsehen(A){ return Math.min(10, A.verGes || 0); }
function bgQsMax(A, q){
  var n = A.qsPlus[q] || 0, K = TA_TEXT["ark/kompetenz/" + A.arc.k];
  var S = K ? bgSuch(K.r, "selbst", [])[0] : null;
  if(S) S.x.forEach(function(fr, i){ var w = A.selbst[i]; if(w >= 0 && fr.a[w] && fr.a[w][1] === q) n += 3; });
  return Math.max(0, Math.min(9, n));
}
function bgNetz(A){ return A.bez.filter(function(b){ return b.n && +b.v >= 9; }).length; }

/* ARK-Teil übernehmen: füllt den Bogen mit den Texten aus dem Handbuch */
function bgArk(kat, id){
  var A = BG.akt, T = TA_TEXT["ark/" + kat + "/" + id]; if(!A || !T) return;
  var R = (T.r || []).concat(T.l || []);
  if(kat === "anomalie"){
    A.arc.a = id;
    bgSuch(R, "faehig", []).slice(0, 3).forEach(function(f, i){
      var q = ""; BG_QUAL.forEach(function(Q){ var p = f.x.lastIndexOf("**" + Q); if(p >= 0 && (!q || p > f.x.lastIndexOf("**" + q))) q = Q; });
      var e = function(k){ var z = (f.erg || []).filter(function(x){ return x[0] === k; })[0]; return z ? bgPlain(z[1]).replace(/^Bei (Erfolg|Fehlschlag)\s*,?\s*/, "") : ""; };
      A.faeh[i] = {h:f.h, x:bgPlain(f.x), q:q, ok:e("ok"), plus:e("plus"), nein:e("nein"), f:bgPlain(f.f || ""), a:(f.a || []).slice(0, 2).map(function(a){ return [bgPlain(a[0]), a[1]]; }), st:[[0,0,0],[0,0,0]], geuebt:0, seite:String(TA_ARK.anomalie.x.filter(function(x){ return x[0] === id; })[0][2] + (i ? 1 : 0))};
      while(A.faeh[i].a.length < 2) A.faeh[i].a.push(["",""]);
    });
  }
  if(kat === "realitaet"){
    A.arc.r = id;
    var au = bgSuch(R, "ausloeser", [])[0], ve = bgSuch(R, "ventil", [])[0], ma = bgSuch(R, "matrix", [])[0], fb = bgSuch(R, "fragebogen", [])[0], sp = bgSuch(R, "spur", []);
    A.ausl = au ? bgPlain(au.h).replace(/^Realitäts-Auslöser:\s*/, "") + "\n" + bgStr(au.b) : "";
    A.ventil = ve ? bgPlain(ve.h).replace(/^Burnout-Ventil:\s*/, "") + "\n" + bgPlain(ve.x) : "";
    A.matrix = ma ? ma.x.map(function(q){ return {f:bgPlain(q.f), bsp:q.bsp}; }) : [];
    A.rfb = fb ? fb.x.slice() : [];
    [6, 3, 3].forEach(function(v, i){ if(!A.bez[i].n && !+A.bez[i].v) A.bez[i].v = v; });
    sp.forEach(function(s){ if(A.leisten.some(function(l){ return l.n === s.h; })) return; var l = A.leisten.filter(function(l){ return !l.n; })[0]; if(l){ l.n = s.h; l.max = String(s.x.length); } });
  }
  if(kat === "kompetenz"){
    A.arc.k = id;
    var di = bgSuch(R, "direktive", [])[0], ge = bgSuch(R, "gebilligt", [])[0], er = bgSuch(R, "erst", [])[0];
    A.direktive = di ? bgPlain(di.h) + "\n" + bgPlain(di.x) : "";
    A.gebilligt = ge ? ge.x.map(bgPlain) : ["","",""];
    A.selbst = [-1,-1,-1];
    if(er && !A.anf.some(function(a){ return a.n === er.h; })){ var f = A.anf.filter(function(a){ return !a.n; })[0]; if(f){ f.n = er.h; f.code = "Erste Anf."; f.eff = bgPlain(er.x); } }
  }
  bgSave();
}

/* ---------- Work-Life-Balance ---------- */
function bgMark(t, ohne){
  var A = BG.akt, W = A.wl;
  if(W[t] >= 30 - W[t + "x"]){ bgToast("Diese Leiste ist voll."); return; }
  W[t]++;
  var gestr = [];
  if(!ohne) ["k","r","a"].forEach(function(o){ if(o !== t && W[o] + W[o + "x"] < 30){ W[o + "x"]++; gestr.push(o); } });
  A.log.push({t:t, g:gestr, o:ohne ? 1 : 0});
  if(t === "k"){ A.bel += 3; A.offen.push({t:"qs"}); if(ohne) A.mvp++; if(W.k % 3 === 0) bgToast("Beförderung: " + bgRang(A) + "!"); }
  if(t === "r") A.offen.push({t:"bez", n:1 + bgNetz(A)});
  if(t === "a"){ A.offen.push({t:"anom"}); if(ohne) A.prob++; }
  var c = BG_SPUR[t].codes[W[t]];
  if(c){ bgFrei(c); A.offen.push({t:"code", c:c}); }
  bgSave(); render();
  if(c) setTimeout(function(){ bgDok(c); }, 60);
}
function bgUndo(){
  var A = BG.akt, L = A.log.pop(); if(!L){ bgToast("Nichts zurückzunehmen."); return; }
  var W = A.wl, c = BG_SPUR[L.t].codes[W[L.t]];
  W[L.t]--; L.g.forEach(function(o){ W[o + "x"]--; });
  function weg(f){ for(var i = A.offen.length - 1; i >= 0; i--) if(f(A.offen[i])){ A.offen.splice(i, 1); return; } }
  if(L.t === "k"){ A.bel = Math.max(0, A.bel - 3); weg(function(o){ return o.t === "qs"; }); if(L.o) A.mvp = Math.max(0, A.mvp - 1); }
  if(L.t === "r") weg(function(o){ return o.t === "bez"; });
  if(L.t === "a"){ weg(function(o){ return o.t === "anom"; }); if(L.o) A.prob = Math.max(0, A.prob - 1); }
  if(c) weg(function(o){ return o.t === "code" && o.c === c; });
  bgSave(); render();
}
function bgFrei(c){ BG.akt.frei[c] = 1; ST.pw = ST.pw || {}; ST.pw[c] = 1; save(); }

/* Offene Schritte erledigen */
function bgOffen(i, art, w){
  var A = BG.akt, o = A.offen[i]; if(!o) return;
  if(art === "qs"){ var q = BG_QUAL[w]; if(bgQsMax(A, q) >= 9){ bgToast(q + " hat schon 9."); return; } A.qsPlus[q] = (A.qsPlus[q] || 0) + 1; A.offen.splice(i, 1); }
  if(art === "bez"){ var b = A.bez[w]; b.v = Math.min(9, +b.v + 1); if(+b.v >= 9) bgToast(b.n + " ist jetzt vernetzt."); if(--o.n <= 0) A.offen.splice(i, 1); }
  if(art === "ueben"){ A.faeh[w].geuebt = 1; A.offen.splice(i, 1); }
  if(art === "bekannt"){ o.f = w; o.s = "frage"; }
  if(art === "antwort"){ var F = A.faeh[o.f], c = F.a[w][1]; F.geuebt = 0; A.offen.splice(i, 1); if(c){ bgFrei(c); bgSave(); render(); setTimeout(function(){ bgDok(c); }, 60); return; } }
  if(art === "code"){ A.offen.splice(i, 1); bgSave(); render(); bgDok(o.c); return; }
  if(art === "weg"){ A.offen.splice(i, 1); }
  if(art === "modus"){ o.s = w; }
  bgSave(); render();
}
function bgOffenHTML(A){
  if(!A.offen.length) return "";
  var nqs = A.offen.filter(function(o){ return o.t === "qs"; }).length, erstQs = true;
  return '<div class="bg-offen noprint"><h3>Offene Schritte</h3>' + A.offen.map(function(o, i){
    if(o.t === "qs"){ if(!erstQs) return ""; erstQs = false; }
    var x = "", w = '<button class="bg-weg" onclick="bgOffen(' + i + ',\'weg\')" title="Überspringen">×</button>';
    if(o.t === "qs") x = '<b>Kompetenz markiert:</b> +1 maximale QS in einer Qualität deiner Wahl' + (nqs > 1 ? ' – noch ' + nqs + '-mal' : '') + ' (die Belobigungen sind schon gutgeschrieben).<div class="bg-chips">' + BG_QUAL.map(function(q, k){ var m = bgQsMax(A, q); return '<button' + (m >= 9 ? ' disabled' : '') + ' onclick="bgOffen(' + i + ',\'qs\',' + k + ')">' + q + ' <i>' + m + '</i></button>'; }).join("") + '</div>';
    if(o.t === "bez"){ var B = A.bez.map(function(b, k){ return b.n ? '<button' + (+b.v >= 9 ? ' disabled' : '') + ' onclick="bgOffen(' + i + ',\'bez\',' + k + ')">' + esc(b.n) + ' <i>' + (+b.v || 0) + '</i></button>' : ''; }).join("");
      x = '<b>Realität markiert:</b> Erhöhe die Verbindung zu einer Beziehung' + (o.n > 1 ? ' (noch ' + o.n + '-mal – je Vernetzter Beziehung einmal mehr)' : '') + '.<div class="bg-chips">' + (B || '<em>Trage zuerst Beziehungen ein.</em>') + '</div>'; }
    if(o.t === "anom"){
      if(o.s === "ueben") x = '<b>Üben:</b> Markiere „Geübt“ bei einer Anomalie-Fähigkeit.<div class="bg-chips">' + A.faeh.map(function(f, k){ return f.h ? '<button' + (f.geuebt ? ' disabled' : '') + ' onclick="bgOffen(' + i + ',\'ueben\',' + k + ')">' + esc(f.h) + '</button>' : ''; }).join("") + '</div>';
      else if(o.s === "bekannt") x = '<b>Bekannt werden:</b> Welche geübte Fähigkeit?<div class="bg-chips">' + A.faeh.map(function(f, k){ return f.h && f.geuebt ? '<button onclick="bgOffen(' + i + ',\'bekannt\',' + k + ')">' + esc(f.h) + '</button>' : ''; }).join("") + '</div>';
      else if(o.s === "frage"){ var F = A.faeh[o.f]; x = '<b>Frage ans Team:</b> „' + esc(F.f) + '“ – welche Antwort bekam die meisten Stimmen?<div class="bg-chips">' + F.a.map(function(a, k){ return a[0] ? '<button onclick="bgOffen(' + i + ',\'antwort\',' + k + ')">' + esc(a[0]) + ' <i>' + esc(a[1]) + '</i></button>' : ''; }).join("") + '</div>'; }
      else x = '<b>Anomalie markiert:</b> Wähle eins.<div class="bg-chips"><button onclick="bgOffen(' + i + ',\'modus\',\'ueben\')">Üben</button><button' + (A.faeh.some(function(f){ return f.geuebt; }) ? '' : ' disabled') + ' onclick="bgOffen(' + i + ',\'modus\',\'bekannt\')">Bekannt werden</button></div>';
    }
    if(o.t === "code") x = '<b>Freigeschaltet: ' + o.c + '</b> – lies das Dokument hinter der Playwall.<div class="bg-chips"><button class="voll" onclick="bgOffen(' + i + ',\'code\')">' + o.c + ' öffnen</button></div>';
    return '<div class="bg-of">' + x + w + '</div>';
  }).join("") + '</div>';
}

/* Playwall-Dokument als Fenster; Fähigkeiten/Vorteile mit einem Klick auf den Bogen */
function bgDok(c){
  var D = (window.TA_PWT || {})[c], A = BG.akt;
  var F = D ? bgSuch(D.b, "faehig", []) : [];
  var m = document.createElement("div"); m.className = "modal bg-dokm"; m.onclick = function(e){ if(e.target === m) m.remove(); };
  m.innerHTML = '<div><div class="bg-dokk noprint"><b>' + c + '</b><span>' + (D && D.t ? tx(D.t) : '') + '</span><button onclick="this.closest(\'.modal\').remove()">Schließen</button></div>' + pwDok(c, TA_PW[c]) +
    (A ? '<div class="bg-dokf">' + F.map(function(f, k){ return '<button onclick="bgDokF(\'' + c + '\',' + k + ',this)">„' + esc(bgPlain(f.h || D.t)) + '“ als Fähigkeit eintragen</button>'; }).join("") +
      '<button onclick="bgDokA(\'' + c + '\',this)">Als Anforderung/Vorteil notieren</button></div>' : '') + '</div>';
  document.body.appendChild(m);
}
function bgDokF(c, k, el){
  var A = BG.akt, D = TA_PWT[c], f = bgSuch(D.b, "faehig", [])[k], i = A.faeh.findIndex(function(x, j){ return j >= 3 && !x.h; });
  if(i < 0) i = A.faeh.findIndex(function(x){ return !x.h; });
  if(i < 0){ bgToast("Alle sechs Fähigkeitsfelder sind belegt."); return; }
  var q = ""; BG_QUAL.forEach(function(Q){ if(f.x.indexOf("**" + Q) >= 0) q = Q; });
  var e = function(t){ var z = (f.erg || []).filter(function(x){ return x[0] === t; })[0]; return z ? bgPlain(z[1]).replace(/^Bei (Erfolg|Fehlschlag)\s*,?\s*/, "") : ""; };
  A.faeh[i] = {h:bgPlain(f.h || D.t), x:bgPlain(f.x), q:q, ok:e("ok"), plus:e("plus"), nein:e("nein"), f:bgPlain(f.f || ""), a:(f.a || []).slice(0, 2).map(function(a){ return [bgPlain(a[0]), a[1]]; }), st:[[0,0,0],[0,0,0]], geuebt:0, seite:c};
  while(A.faeh[i].a.length < 2) A.faeh[i].a.push(["",""]);
  bgSave(); el.disabled = true; el.textContent = "Eingetragen"; render();
}
function bgDokA(c, el){
  var A = BG.akt, D = TA_PWT[c] || {}, f = A.anf.filter(function(a){ return !a.n; })[0];
  if(!f){ bgToast("Alle Anforderungsfelder sind belegt."); return; }
  f.n = bgPlain(D.t || c); f.code = c; f.eff = bgStr((D.b || []).filter(function(b){ return typeof b === "string"; })).slice(0, 600);
  bgSave(); el.disabled = true; el.textContent = "Notiert"; render();
}

/* ---------- Eingaben ---------- */
function bgPfad(A, p, v){
  var k = p.split("."), o = A;
  for(var i = 0; i < k.length - 1; i++) o = o[k[i]];
  var l = k[k.length - 1];
  if(v === undefined) return o[l];
  o[l] = v;
}
document.addEventListener("input", function(e){
  var el = e.target; if(!el.closest || !el.closest(".bg") || !el.dataset.k || !BG.akt) return;
  var v = el.type === "checkbox" ? (el.checked ? 1 : 0) : el.value;
  bgPfad(BG.akt, el.dataset.k, v);
  if(el.dataset.k === "name" || el.dataset.k === "pron"){ document.querySelectorAll('.bg [data-k="' + el.dataset.k + '"]').forEach(function(x){ if(x !== el) x.value = v; }); document.querySelectorAll(".bg-cname").forEach(function(x){ x.textContent = BG.akt.name; }); }
  if(el.dataset.neu) { bgSave(); clearTimeout(BG.t); BG.t = setTimeout(render, 500); return; }
  bgSave();
});
function bgZahl(p, d){ var A = BG.akt, v = Math.max(0, (+bgPfad(A, p) || 0) + d); bgPfad(A, p, v); if(p === "ver" && d > 0) A.verGes = (A.verGes || 0) + d; bgSave(); render(); }
function bgSetze(p, v){ bgPfad(BG.akt, p, v); bgSave(); render(); }
function bgQs(q, i){ var A = BG.akt, Q = BG_QUAL[q], m = bgQsMax(A, Q), a = A.qsAus[Q] || 0; if(i >= m) return; A.qsAus[Q] = a === i + 1 ? i : i + 1; bgSave(); render(); }
function bgQsMaxD(q, d){ var A = BG.akt, Q = BG_QUAL[q]; A.qsPlus[Q] = (A.qsPlus[Q] || 0) + d; if(bgQsMax(A, Q) > 9 || bgQsMax(A, Q) < 0) A.qsPlus[Q] -= d; bgSave(); render(); }
function bgAuffuellen(){ BG.akt.qsAus = {}; BG.akt.gebAn = [0,0,0]; BG.akt.ventilAn = 0; bgSave(); render(); bgToast("Einsatzende: QS aufgefüllt, Gebilligtes Verhalten zurückgesetzt."); }
function bgVerb(i, v){ var b = BG.akt.bez[i]; b.v = +b.v === v ? v - 1 : v; if(b.v < 0) b.v = 0; bgSave(); render(); }
function bgLeiste(i, v){ var l = BG.akt.leisten[i]; l.v = +l.v === v ? v - 1 : v; bgSave(); render(); }
function bgToast(t){ var d = document.createElement("div"); d.className = "bg-toast"; d.textContent = t; document.body.appendChild(d); setTimeout(function(){ d.classList.add("weg"); }, 2600); setTimeout(function(){ d.remove(); }, 3200); }
function bgFoto(inp){
  var f = inp.files && inp.files[0]; if(!f) return;
  var r = new FileReader(); r.onload = function(){ var im = new Image(); im.onload = function(){
    var s = Math.min(1, 260 / Math.max(im.width, im.height)), c = document.createElement("canvas"); c.width = Math.round(im.width * s); c.height = Math.round(im.height * s);
    c.getContext("2d").drawImage(im, 0, 0, c.width, c.height); BG.akt.ausweis.bild = c.toDataURL("image/jpeg", .78); bgSave(); render(); }; im.src = r.result; };
  r.readAsDataURL(f);
}

/* ---------- Teilen, Datei, PDF ---------- */
function b64u(buf){ var s = "", a = new Uint8Array(buf); for(var i = 0; i < a.length; i++) s += String.fromCharCode(a[i]); return btoa(s).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, ""); }
function b64uRev(s){ s = s.replace(/-/g, "+").replace(/_/g, "/"); var b = atob(s), a = new Uint8Array(b.length); for(var i = 0; i < b.length; i++) a[i] = b.charCodeAt(i); return a; }
function bgPack(A, foto){
  var o = JSON.parse(JSON.stringify(A)); if(!foto) o.ausweis.bild = ""; delete o.log;
  var txt = JSON.stringify(o);
  if(!window.CompressionStream) return Promise.resolve("j" + b64u(new TextEncoder().encode(txt)));
  return new Response(new Blob([txt]).stream().pipeThrough(new CompressionStream("deflate-raw"))).arrayBuffer().then(function(b){ return "z" + b64u(b); });
}
function bgUnpack(s){
  var art = s.charAt(0), a = b64uRev(s.slice(1));
  if(art === "j") return Promise.resolve(JSON.parse(new TextDecoder().decode(a)));
  return new Response(new Blob([a]).stream().pipeThrough(new DecompressionStream("deflate-raw"))).text().then(JSON.parse);
}
function bgTeilen(){
  var A = BG.akt, m = document.createElement("div"); m.className = "modal"; m.onclick = function(e){ if(e.target === m) m.remove(); };
  m.innerHTML = '<div class="bg-teil"><h3>Agentenbogen teilen</h3><p>Wer den Link öffnet, sieht den Bogen und kann ihn in seine eigenen Agenten übernehmen. Der Link enthält den ganzen Bogen – es wird nichts hochgeladen.</p>' +
    '<label><input type="checkbox" id="bgtf"' + (A.ausweis.bild ? '' : ' disabled') + '> Ausweisfoto mitschicken</label><textarea id="bgtl" readonly></textarea><div class="bg-chips"><button class="voll" id="bgtk">Link kopieren</button>' + (navigator.share ? '<button id="bgts">Teilen …</button>' : '') + '</div></div>';
  document.body.appendChild(m);
  function neu(){ bgPack(A, m.querySelector("#bgtf").checked).then(function(d){ m.querySelector("#bgtl").value = location.href.split("#")[0] + "#ark/bogen/teilen/" + d; }); }
  m.querySelector("#bgtf").onchange = neu; neu();
  m.querySelector("#bgtk").onclick = function(){ var t = m.querySelector("#bgtl"); (navigator.clipboard ? navigator.clipboard.writeText(t.value) : Promise.reject()).then(function(){ bgToast("Link kopiert."); }, function(){ t.select(); document.execCommand("copy"); bgToast("Link kopiert."); }); };
  var sh = m.querySelector("#bgts"); if(sh) sh.onclick = function(){ navigator.share({title:"Agentenbogen: " + (A.name || "Agent"), url:m.querySelector("#bgtl").value}).catch(function(){}); };
}
function bgUebernehmen(){
  var A = JSON.parse(JSON.stringify(BG.gast)); A.id = bgNeu().id; A.log = A.log || [];
  BG.db.x.push(A); BG.gast = null; BG.akt = A; bgSave(); bgToast("In deine Agenten übernommen."); go("ark/bogen/" + A.id);
}
function bgDatei(){ var A = BG.akt, b = new Blob([JSON.stringify(A, null, 1)], {type:"application/json"}), a = document.createElement("a"); a.href = URL.createObjectURL(b); a.download = "Agent – " + (A.name || "ohne Namen") + ".json"; a.click(); }
function bgLaden(inp){
  var f = inp.files && inp.files[0]; if(!f) return;
  var fertig = function(A){ A = Object.assign(bgNeu(), A); A.id = bgNeu().id; BG.db.x.push(A); BG.akt = A; bgSave(); go("ark/bogen/" + A.id); };
  f.arrayBuffer().then(function(buf){
    if(/\.pdf$/i.test(f.name)) return FillPDF.lib().then(function(){ return PDFLib.PDFDocument.load(buf); }).then(function(d){ var s = d.getSubject(); if(!s) throw new Error("Dieses PDF enthält keinen Agentenbogen aus dem Tool."); return bgUnpack(s).then(fertig); });
    fertig(JSON.parse(new TextDecoder().decode(buf)));
  }).catch(function(e){ alert("Konnte nicht geladen werden: " + (e.message || e)); });
}
function bgPdf(knopf){
  var A = BG.akt, alt = BG.blatt;
  bgPack(A, true).then(function(json){
    BG.druck = 1; var h = document.createElement("div"); h.className = "bg bg-druck"; h.innerHTML = BG_BLATT.map(function(b){ return bgBlattHTML(A, b[0]); }).join(""); document.body.appendChild(h);
    FillPDF.makeSeiten(h.querySelectorAll(".bg-blatt"), {name:"Agentenbogen – " + (A.name || "Agent"), knopf:knopf, json:json, scale:2,
      marks:[[".bg-k:not(.weg)", "an", "punkt"], [".bg-k.weg", "weg", "x"], [".bg-tri:not(.zu)", "aus", "x"], [".bg-dot", "an", "punkt"]]}).then(function(){ h.remove(); BG.druck = 0; });
  });
}
function bgLoeschen(){ if(!confirm("Diesen Agenten wirklich löschen?")) return; BG.db.x = BG.db.x.filter(function(a){ return a !== BG.akt; }); bgSave(); go("ark/bogen"); }
function bgKopie(){ var A = JSON.parse(JSON.stringify(BG.akt)); A.id = bgNeu().id; A.name = (A.name || "Agent") + " (Kopie)"; BG.db.x.push(A); bgSave(); go("ark/bogen/" + A.id); }
function bgAnlegen(){ var A = bgNeu(); BG.db.x.push(A); bgSave(); go("ark/bogen/" + A.id); setTimeout(function(){ bgWahl("anomalie"); }, 80); }

/* ARK-Auswahl: Bildraster je Teil */
function bgWahl(kat){
  var A = BG.akt, K = {anomalie:"a", realitaet:"r", kompetenz:"k"}, m = document.querySelector(".bg-wahl");
  if(!m){ m = document.createElement("div"); m.className = "modal bg-wahl"; m.onclick = function(e){ if(e.target === m) m.remove(); }; document.body.appendChild(m); }
  var T = TA_ARK[kat];
  m.innerHTML = '<div><nav>' + ["anomalie","realitaet","kompetenz"].map(function(k){ return '<a class="c-' + TA_ARK[k].c + (k === kat ? ' on' : '') + '" onclick="bgWahl(\'' + k + '\')"><img src="' + bgArcImg(k) + '" alt="">' + TA_ARK[k].t + '<small>' + esc(bgArkName(k, A.arc[K[k]]) || "–") + '</small></a>'; }).join("") + '<button onclick="this.closest(\'.modal\').remove()">Fertig</button></nav>' +
    '<div class="bg-wg">' + T.x.map(function(q){ return '<a class="' + (A.arc[K[kat]] === q[0] ? "on" : "") + '" onclick="bgWaehle(\'' + kat + '\',\'' + q[0] + '\')"><img src="' + IMG("regeln/full/" + T.bild + "-" + q[0]) + '" alt=""><b>' + esc(q[1]) + '</b><i>' + tx((TA_TEXT["ark/" + kat + "/" + q[0]] || {}).motto || "") + '</i></a>'; }).join("") + '</div></div>';
}
function bgWaehle(kat, id){
  var A = BG.akt, K = {anomalie:"a", realitaet:"r", kompetenz:"k"}[kat];
  if(A.arc[K] && A.arc[K] !== id && !confirm("Die Einträge von " + bgArkName(kat, A.arc[K]) + " werden durch " + bgArkName(kat, id) + " ersetzt. Fortfahren?")) return;
  bgArk(kat, id); render();
  var n = {anomalie:"realitaet", realitaet:"kompetenz"}[kat];
  if(n && !A.arc[{realitaet:"r", kompetenz:"k"}[n]]) bgWahl(n); else bgWahl(kat);
}

/* ---------- Blätter (A4, Original-Aufbau) ---------- */
function bgIn(p, v, ph, cls, extra){ return '<input class="' + (cls || "") + '" data-k="' + p + '" value="' + esc(v) + '"' + (ph ? ' placeholder="' + esc(ph) + '"' : '') + (extra || '') + '>'; }
function bgTa(p, v, ph, cls){ return '<textarea class="' + (cls || "") + '" data-k="' + p + '"' + (ph ? ' placeholder="' + esc(ph) + '"' : '') + '>' + esc(v) + '</textarea>'; }
function bgKopfN(A, t, arc, extra){ return '<header class="bg-bk"><div class="bg-bkl"><h1>' + t + '</h1>' + (extra || '') + '</div><div class="bg-bkr"><div class="bg-cn"><small>Name</small><span class="bg-cname">' + esc(A.name) + '</span></div>' + (arc ? '<div class="bg-arcmini c-' + TA_ARK[arc[0]].c + '"><img src="' + bgArcImg(arc[0]) + '" alt=""><b>' + (arc[0] === "anomalie" ? bgWackel("Anomalie") : TA_ARK[arc[0]].t) + '</b></div>' : '') + '</div></header>'; }
function bgWackel(t){ return '<span class="bg-wackel">' + t.split("").map(function(c, i){ return '<i style="--i:' + i + '">' + c + '</i>'; }).join("") + '</span>'; }
function bgBlattHTML(A, b){
  var K = {a:"anomalie", r:"realitaet", k:"kompetenz"};
  if(b === "stamm"){
    var an = bgAnsehen(A);
    var arc = ["a","r","k"].map(function(k){ var kat = K[k]; return '<div class="bg-arc c-' + TA_ARK[kat].c + '" onclick="bgWahl(\'' + kat + '\')"><img src="' + bgArcImg(kat) + '" alt=""><small>' + TA_ARK[kat].t + '</small><span data-pdftx>' + esc(bgArkName(kat, A.arc[k])) + '</span><em class="noprint">' + (A.arc[k] ? "ändern" : "wählen") + '</em></div>'; }).join("");
    var qs = BG_QUAL.map(function(q, qi){ var m = bgQsMax(A, q), a = A.qsAus[q] || 0, t = "";
      for(var i = 0; i < 9; i++) t += '<i class="bg-tri' + (i % 2 ? " auf" : "") + (i < m ? "" : " zu") + (i < a ? " aus" : "") + '" onclick="bgQs(' + qi + ',' + i + ')"></i>';
      return '<div class="bg-q"><div class="bg-qmax"><span data-pdftx>' + m + '</span><small>MAX</small><b class="noprint"><a onclick="bgQsMaxD(' + qi + ',1)">+</a><a onclick="bgQsMaxD(' + qi + ',-1)">–</a></b></div><div><h4>' + q + '</h4><div class="bg-tris">' + t + '</div></div></div>'; }).join("");
    var zahl = function(p, z, t){ return '<div class="bg-zahl"><img src="' + Z(z) + '" alt="">' + bgIn(p, A[p], "", "bg-nr", ' type="number" min="0"') + '<b>' + t + '</b><span class="noprint"><a onclick="bgZahl(\'' + p + '\',1)">+</a><a onclick="bgZahl(\'' + p + '\',-1)">–</a></span></div>'; };
    return '<section class="bg-blatt bs-stamm"><div class="bg-sp2"><div>' +
      '<div class="bg-felder"><label class="w2"><small>Name</small>' + bgIn("name", A.name) + '</label><label><small>Pronomen</small>' + bgIn("pron", A.pron) + '</label>' +
      '<label class="w3"><small>Agency-Titel</small>' + bgIn("titel", A.titel || (BG.druck ? bgRang(A) : ""), bgRang(A)) + '</label>' +
      '<label class="w3 bg-ans"><small>Ansehen in der Agency</small><img src="' + Z("symbol-ansehen-" + an) + '" alt=""><span data-pdftx>' + BG_ANSEHEN[an] + '</span></label></div>' +
      zahl("bel", "symbol-belobigung", "Belobigungen") + zahl("ver", "symbol-verweis", "Verweise") + zahl("burn", "symbol-burnout", "Zusätzlicher Burnout") +
      '<div class="bg-reg gelb"><h3>Realitäts-Auslöser</h3><p>Dein GM kann ihn auslösen, indem er <b>3</b> Chaos ausgibt.</p>' + bgTa("ausl", A.ausl, "", "h5") + '</div>' +
      '<div class="bg-reg gelb"><h3>Burnout-Ventil <label class="bg-cb"><input type="checkbox" data-k="ventilAn"' + (A.ventilAn ? " checked" : "") + '></label></h3><p>Abhaken, um zu prüfen, ob du deinen Burnout aufheben kannst.</p>' + bgTa("ventil", A.ventil, "", "h3") + '</div>' +
      '<div class="bg-reg rot"><h3>Oberste Direktive</h3><p>Du erhältst 1 Verweis, wenn du:</p>' + bgTa("direktive", A.direktive, "", "h3") + '</div>' +
      '<div class="bg-reg rot"><h3>Gebilligtes Verhalten</h3><p>Du erhältst 1 Belobigung, wenn du eins davon tust:</p>' + [0,1,2].map(function(i){ return '<div class="bg-geb"><i class="bg-pf"></i><label class="bg-cb"><input type="checkbox" data-k="gebAn.' + i + '"' + (A.gebAn[i] ? " checked" : "") + '></label>' + bgIn("gebilligt." + i, A.gebilligt[i]) + '</div>'; }).join("") + '<p>Tust du alle 3 in einem Einsatz, erhältst du <b>3</b> Bonus-Belobigungen.</p></div>' +
      '</div><div><div class="bg-arcs">' + arc + '</div><h2 class="bg-qsh"><span>Qualitäts-<br>sicherungen</span><img src="' + Z("symbol-qualitaetssicherung") + '" alt=""></h2>' + qs + '</div></div><p class="bg-credit">Character Organization Sheets gestaltet von Michael Shillingburg · deutsche Fassung im Spielleitertool</p></section>';
  }
  if(b === "willkommen"){
    return '<section class="bg-blatt bs-will"><div class="bg-sp2 w"><div><h1 class="bg-h1">Willkommen, Agent!</h1><p class="bg-lead">Bitte beantworte die folgenden Fragen so ehrlich wie möglich, damit die <span class="ag">Agency</span> und deine Kollegen mehr über dich erfahren.</p>' +
      BG_FB.map(function(q, i){ return '<div class="bg-fb"><h4><i>' + (i + 1) + '</i>' + q[0] + '</h4>' + bgTa("fb." + i, A.fb[i] || "") + (q[1].length ? '<div class="bg-bsp noprint">' + q[1].map(function(x){ return '<a onclick="bgSetze(\'fb.' + i + '\',this.textContent)">' + esc(x) + '</a>'; }).join("") + '</div>' : '') + '</div>'; }).join("") +
      '<div class="bg-fb"><h4><img src="' + Z("pfeil-rot-unten") + '" alt="">Zusätzliche Notizen</h4>' + bgTa("fb.n", A.fb.n || "") + '</div></div>' +
      '<div><div class="bg-ausweis"><div class="bg-foto" onclick="this.querySelector(\'input\').click()">' + (A.ausweis.bild ? '<img src="' + A.ausweis.bild + '" alt="">' : '<span class="noprint">Foto wählen</span>') + '<input type="file" accept="image/*" onchange="bgFoto(this)" hidden></div>' +
      '<label><small>Name</small>' + bgIn("name", A.name) + '</label><label><small>Pronomen</small>' + bgIn("pron", A.pron) + '</label><img class="bg-logo" src="' + Z("logo-triangle-agency") + '" alt=""></div>' +
      '<div class="bg-karte"><label><small>Notfallkontakt</small>' + bgIn("ausweis.notfall", A.ausweis.notfall, "", "", ' list="bgdl-bez"') + '</label><label><small>Beziehung</small>' + bgIn("ausweis.bez", A.ausweis.bez) + '</label></div>' +
      '<div class="bg-karte"><label><small>Jahresgehalt</small>' + bgIn("ausweis.gehalt", A.ausweis.gehalt, "", "", ' list="bgdl-geh"') + '</label></div></div></div>' +
      '<datalist id="bgdl-bez">' + A.bez.map(function(x){ return x.n ? '<option value="' + esc(x.n) + '">' : ''; }).join("") + '</datalist><datalist id="bgdl-geh"><option value="0 $ (danke!)"><option value="100 $"><option value="125.000 $"></datalist></section>';
  }
  if(b === "balance"){
    var W = A.wl, letzt = (A.log[A.log.length - 1] || {}).t;
    var spur = function(t){ var S = BG_SPUR[t], o = "", u = "";
      for(var j = 1; j <= 30; j++){ var c = S.codes[j] || "", an = j <= W[t], weg = j > 30 - W[t + "x"], nx = j === W[t] + 1 && !weg;
        var h = '<i class="bg-k' + (an ? " an" : "") + (weg ? " weg" : "") + (nx ? " nx" : "") + (c ? " code" : "") + '" onclick="' + (c && an ? "bgDok('" + c + "')" : nx ? "bgMark('" + t + "')" : j === W[t] && letzt === t ? "bgUndo()" : "") + '"' + (c && an ? ' title="' + c + ' öffnen"' : nx ? ' title="Markieren"' : '') + '>' + c + '</i>';
        if(j <= 15) o += h; else u = h + u; }
      return '<div class="bg-spur c-' + S.c + '"><div class="z o">' + o + '</div><div class="z u">' + u + '</div></div>'; };
    var rang = '<div class="bg-rang o"><span>Trainee</span><span>Sachbearbeiter</span><span>Sen.-Sachbearbeiter</span><span>Stv. Direktor</span><span>Direktor</span></div>';
    var rang2 = '<div class="bg-rang u"><span>Vorsitzender</span><span>Exekutiv-VP</span><span>Senior-VP</span><span>Vizepräsident</span><span>Regionaldirektor</span></div>';
    return '<section class="bg-blatt bs-bal">' + bgKopfN(A, "Work-Life-Balance") +
      '<div class="bg-bal3"><div class="bg-warn"><img src="' + Z("symbol-warnung") + '" alt=""><span>Jedes Mal, wenn du ein Kästchen markierst, musst du <b>eins vom Ende der anderen Leisten streichen.</b></span></div>' +
      '<div class="bg-aw"><img src="' + Z("symbol-mvp") + '" alt=""><div><b>MVP</b><small>Mal erhalten</small></div>' + bgIn("mvp", A.mvp, "", "bg-nr", ' type="number" min="0"') + '</div>' +
      '<div class="bg-aw"><img src="' + Z("symbol-probezeit") + '" alt=""><div><b>Probezeit</b><small>Mal erhalten</small></div>' + bgIn("prob", A.prob, "", "bg-nr", ' type="number" min="0"') + '</div></div>' +
      '<div class="bg-bal3 klein"><p>Markiere nach jedem Einsatz 1 Kästchen je verfügbarer Zeit und lies dann die Dokumente hinter der Playwall zu jedem markierten Code.</p><p>Geht an den Spieler mit den meisten Belobigungen.</p><p>Geht an den Spieler mit den meisten Verweisen.</p></div>' +
      '<div class="bg-tr rot"><h2>Kompetenz <em class="noprint">' + bgRang(A) + '</em></h2>' + rang + spur("k") + rang2 + '<div class="bg-sp2 k"><p>Jedes Mal, wenn du ein Kästchen auf deiner Kompetenz-Leiste markierst, erhöhe deine maximalen Qualitätssicherungen in einer Qualität um 1 (höchstens 9). Erhalte dann <b>3</b> Belobigungen.</p><p>Wenn du den Einsatz-MVP erhältst, markiere 1 Kästchen auf deiner Kompetenz-Leiste, ohne eins der anderen Leisten zu streichen.</p></div>' +
      '<div class="bg-tk noprint"><button onclick="bgMark(\'k\')">Kompetenz markieren</button><button onclick="bgMark(\'k\',1)">Als MVP markieren (ohne Streichen)</button></div></div>' +
      '<div class="bg-tr gelb"><h2>Realität</h2>' + spur("r") + '<div class="bg-sp2 k"><p>Jedes Mal, wenn du ein Kästchen auf deiner Realitäts-Leiste markierst, erhöhe die Verbindung zu einer Beziehung um 1 und wiederhole das für jede Vernetzte Beziehung.</p><p>Wenn du weder Einsatz-MVP noch Probezeit erhältst, darfst du die Verbindung zu einer Beziehung um 1 erhöhen.</p></div>' +
      '<div class="bg-tk noprint"><button onclick="bgMark(\'r\')">Realität markieren</button></div></div>' +
      '<div class="bg-tr blau"><h2>' + bgWackel("Anomalie") + '</h2>' + spur("a") + '<svg class="bg-schn" viewBox="0 0 120 60"><path d="M118 34C96 30 86 52 70 44S52 20 40 32s-6 22-18 16S10 30 2 40" fill="none" stroke="#2d50a7" stroke-width="3.5" stroke-linecap="round"/></svg>' + '<div class="bg-sp2 k"><div><p>Jedes Mal, wenn du ein Kästchen auf deiner Anomalie-Leiste markierst, wähle eins:</p><p>▸ <b>Üben:</b> Markiere „Geübt“ bei einer Anomalie-Fähigkeit.</p><p>▸ <b>Bekannt werden:</b> Lösche „Geübt“ bei einer Anomalie-Fähigkeit und stelle deinem Team die Frage dieser Fähigkeit. Markiere die Leiste der Antwort mit den meisten Stimmen und erhalte alle freigeschalteten Fähigkeiten.</p><p><b>(Ich kann dir beibringen, was das alles bedeutet, wenn du 1 Zeit aufwendest, um zu H4 zu gehen!)</b></p></div><p>Wenn du die Probezeit erhältst, markiere 1 Kästchen auf deiner Anomalie-Leiste, ohne eins der anderen Leisten zu streichen.</p></div>' +
      '<div class="bg-tk noprint"><button onclick="bgMark(\'a\')">Anomalie markieren</button><button onclick="bgMark(\'a\',1)">Bei Probezeit markieren (ohne Streichen)</button>' + (A.log.length ? '<button class="leise" onclick="bgUndo()">Letzte Markierung zurücknehmen</button>' : '') + '</div></div></section>';
  }
  if(b === "faehig"){
    var karte = function(f, i){ var p = "faeh." + i + ".";
      return '<div class="bg-fk"><div class="bg-fkk"><label><small>Fähigkeit</small>' + bgIn(p + "h", f.h) + '</label><label class="w2"><small>Auslöser</small>' + bgTa(p + "x", f.x) + '</label><label><small>Qualität</small>' + bgIn(p + "q", f.q, "", "", ' list="bgdl-q"') + '</label></div>' +
        '<div class="bg-fkm"><div><h5><img src="' + Z("ergebnis-erfolg-dreieck") + '" alt="">Bei Erfolg</h5>' + bgTa(p + "ok", f.ok) + '<h5><img src="' + Z("ergebnis-zusatz-dreieck") + '" alt="">Zusätzlich</h5>' + bgTa(p + "plus", f.plus) + '</div>' +
        '<div><h5><img src="' + Z("ergebnis-fehlschlag-kreis") + '" alt="">Bei Fehlschlag</h5>' + bgTa(p + "nein", f.nein) +
        (i < 3 ? '<div class="bg-fq"><label class="q"><small>F:</small>' + bgIn(p + "f", f.f) + '</label><div class="bg-fqr"><label class="bg-cb"><small>Geübt?</small><input type="checkbox" data-k="' + p + 'geuebt"' + (f.geuebt ? " checked" : "") + '></label><label><small>Seite</small>' + bgIn(p + "seite", f.seite) + '</label></div>' +
          f.a.map(function(a, k){ return '<div class="bg-fa"><small>A:</small>' + bgIn(p + "a." + k + ".0", a[0]) + '<span class="pf">➜</span>' + [0,1,2].map(function(v){ return '<label class="bg-cb"><input type="checkbox" data-k="' + p + 'st.' + k + '.' + v + '"' + (f.st[k][v] ? " checked" : "") + '></label>'; }).join("") +
            '<a class="bg-code' + (A.frei[a[1]] ? " frei" : "") + '" data-pdftx' + (a[1] && TA_PW[a[1]] ? ' onclick="bgDok(\'' + a[1] + '\')"' : '') + '>' + esc(a[1]) + '</a></div>'; }).join("") + '</div>' : '') + '</div></div></div>'; };
    return '<section class="bg-blatt bs-fae">' + bgKopfN(A, "Anomalie-Fähigkeiten", ["anomalie","a"]) + A.faeh.slice(0, 3).map(karte).join("") + '<datalist id="bgdl-q">' + BG_QUAL.map(function(q){ return '<option value="' + q + '">'; }).join("") + '</datalist></section>' +
      '<section class="bg-blatt bs-fae zwei">' + bgKopfN(A, "Weitere Fähigkeiten", ["anomalie","a"]) + A.faeh.slice(3).map(function(f, i){ return karte(f, i + 3); }).join("") + '</section>';
  }
  if(b === "bez"){
    var karte = function(x, i){ var p = "bez." + i + ".", d = "";
      for(var v = 0; v <= 9; v++) d += '<span><small>' + v + '</small><i class="bg-dot' + (v && v <= +x.v ? " an" : "") + (v === 9 ? " neun" : "") + '" onclick="bgVerb(' + i + ',' + v + ')"></i></span>';
      var m = A.matrix[i] || null;
      return '<div class="bg-bz' + (+x.v >= 9 ? " netz" : "") + (x.n && !+x.v && x.besch ? " verl" : "") + '"><div class="bg-bzk"><label><small>Name</small>' + bgIn(p + "n", x.n, m ? m.bsp : "") + '</label><label><small>Gespielt von</small>' + bgIn(p + "von", x.von) + '</label></div>' +
        '<label class="bg-bzb"><small>Beschreibung</small>' + bgTa(p + "besch", x.besch, m ? m.f : "") + '</label><div class="bg-dots">' + d + '</div><div class="bg-netzt">Vernetzt ▲</div>' +
        '<div class="bg-bzf"><label><small>Verbindungsbonus</small>' + bgIn(p + "bonus", x.bonus, "", "", ' list="bgdl-boni"') + '</label><label class="bg-cb"><input type="checkbox" data-k="' + p + 'aktiv"' + (x.aktiv ? " checked" : "") + '><small>Aktiv</small></label></div></div>'; };
    var kopf = function(t){ return bgKopfN(A, t, ["realitaet","r"], '<div class="bg-netz"><img src="' + Z("symbol-alle-hand") + '" alt="">Vernetzte Beziehungen <b data-pdftx>' + bgNetz(A) + '</b></div>'); };
    return '<section class="bg-blatt bs-bez">' + kopf("Beziehungen") + '<div class="bg-g2">' + A.bez.slice(0, 6).map(karte).join("") + '</div><datalist id="bgdl-boni">' + BG_BONI.map(function(q){ return '<option value="' + q + '">'; }).join("") + '</datalist></section>' +
      '<section class="bg-blatt bs-bez">' + kopf("Beziehungen") + '<div class="bg-g2">' + A.bez.slice(6).map(function(x, i){ return karte(x, i + 6); }).join("") + '</div></section>';
  }
  if(b === "anf"){
    var karte = function(x, i){ var p = "anf." + i + ".";
      return '<div class="bg-an"><div class="bg-ank"><label><small>Name</small>' + bgIn(p + "n", x.n) + '</label><label><small>Seite/PD-Code</small>' + bgIn(p + "code", x.code) + (x.code && TA_PW[x.code] ? '<a class="noprint bg-auf" onclick="bgDok(\'' + x.code + '\')">öffnen</a>' : '') + '</label></div><label class="bg-anb"><small>Wirkung</small>' + bgTa(p + "eff", x.eff) + '</label></div>'; };
    return '<section class="bg-blatt bs-anf">' + bgKopfN(A, "Anforderungen &amp;<br>Work-Life-Vorteile", ["kompetenz","c"]) + '<div class="bg-g2">' + A.anf.slice(0, 6).map(karte).join("") + '</div></section>' +
      '<section class="bg-blatt bs-anf">' + bgKopfN(A, "Anforderungen &amp;<br>Work-Life-Vorteile", ["kompetenz","c"]) + '<div class="bg-g2">' + A.anf.slice(6).map(function(x, i){ return karte(x, i + 6); }).join("") + '</div></section>';
  }
  if(b === "leisten"){
    var L = A.leisten.map(function(l, i){ var n = l.lang ? 30 : 15, max = Math.min(n, +l.max || n), k = "", k2 = "";
      for(var j = 1; j <= n; j++){ var h = '<i class="bg-k' + (j <= +l.v ? " an" : "") + (j > max ? " weg" : "") + '" onclick="bgLeiste(' + i + ',' + j + ')">' + j + '</i>'; if(j <= 15) k += h; else k2 = h + k2; }
      return '<div class="bg-el"><div class="bg-elk"><label><small>Name</small>' + bgIn("leisten." + i + ".n", l.n) + '</label><label><small>Max</small>' + bgIn("leisten." + i + ".max", l.max, "", "", ' data-neu="1"') + '</label></div><div class="bg-spur c-tinte' + (l.lang ? "" : " eins") + '"><div class="z o">' + k + '</div>' + (l.lang ? '<div class="z u">' + k2 + '</div>' : '') + '</div></div>'; }).join("");
    var Z4 = A.zaehler.map(function(z, i){ return '<div class="bg-zl"><div class="bg-elk"><label><small>Name</small>' + bgIn("zaehler." + i + ".n", z.n) + '</label><label><small>Max</small>' + bgIn("zaehler." + i + ".max", z.max) + '</label></div><div class="bg-strich"><b>卌</b>' + bgIn("zaehler." + i + ".v", z.v || "", "", "", ' type="number" min="0"') + '</div></div>'; }).join("");
    return '<section class="bg-blatt bs-lei">' + bgKopfN(A, "Eigene Leisten") + '<p class="bg-lead">Mit diesem Blatt kannst du weitere Leisten anlegen, die du für deinen Agenten oder deine Zweigstelle brauchst.</p>' + L + '<div class="bg-g2 z">' + Z4 + '</div></section>';
  }
  if(b === "notizen") return '<section class="bg-blatt bs-not"><h1 class="bg-h1">Notizen</h1>' + bgTa("notiz", A.notiz, "", "bg-notiz") + '</section>';
  return "";
}

/* ---------- Ansichten ---------- */
function viewBogen(P){
  vInitTaB();
  P = P || [];
  var a = area("ark"), kopf = unter(a, "bogen");
  if(P[0] === "teilen" && P[1]){
    if(!BG.gast || BG.gastD !== P[1]){ BG.gastD = P[1]; bgUnpack(P[1]).then(function(A){ BG.gast = Object.assign(bgNeu(), A); BG.gast.log = []; render(); }, function(){ BG.gast = "fehler"; render(); }); return kopf + '<div class="ct bg"><p class="bg-lade">Geteilter Agentenbogen wird geöffnet …</p></div>'; }
    if(BG.gast === "fehler") return kopf + '<div class="ct bg"><p class="bg-lade">Dieser Link ist unvollständig oder beschädigt.</p></div>';
    BG.akt = BG.gast; return kopf + bgAgent(BG.gast, P[2], true);
  }
  if(P[0] === "gast" && BG.gast && BG.gast.id){ BG.akt = BG.gast; return kopf + bgAgent(BG.gast, P[1], true); }
  var A = P[0] && bgFinde(P[0]);
  if(A){ BG.akt = A; return kopf + bgAgent(A, P[1], false); }
  BG.akt = null;
  return kopf + '<div class="ct bg bg-start"><header class="bg-sk"><h1>Agentenbogen</h1><p>Deine Agenten mit allen elf Blättern des Charakterbogens – zum Ausfüllen, Teilen und als ausfüllbares PDF.</p></header><div class="bg-agl">' +
    BG.db.x.map(function(A){ return '<a class="bg-ag" onclick="go(\'ark/bogen/' + A.id + '\')">' + bgFotoHTML(A) + '<div><b>' + esc(A.name || "Neuer Agent") + '</b><small>' + esc(A.titel || bgRang(A)) + '</small>' + bgArcZeile(A) + '</div></a>'; }).join("") +
    '<a class="bg-ag neu" onclick="bgAnlegen()"><span>+</span><b>Neuer Agent</b><small>ARK wählen, Bogen füllt sich</small></a>' +
    '<label class="bg-ag neu laden"><span>↥</span><b>Agent laden</b><small>Datei (.json) oder PDF aus dem Tool</small><input type="file" accept=".json,.pdf,application/json,application/pdf" onchange="bgLaden(this)" hidden></label></div></div>';
}
function vInitTaB(){ if(window.vInit) vInit(); }
function bgFotoHTML(A){ return '<div class="bg-mini">' + (A.ausweis.bild ? '<img src="' + A.ausweis.bild + '" alt="">' : '<span>' + esc((A.name || "?").charAt(0)) + '</span>') + '</div>'; }
function bgArcZeile(A){ var K = {a:"anomalie", r:"realitaet", k:"kompetenz"}; return '<div class="bg-arcz">' + ["a","r","k"].map(function(k){ return '<span class="c-' + TA_ARK[K[k]].c + '"><img src="' + bgArcImg(K[k]) + '" alt="">' + esc(bgArkName(K[k], A.arc[k]) || "–") + '</span>'; }).join("") + '</div>'; }
function bgAgent(A, blatt, gast){
  var basis = gast ? "ark/bogen/gast" : "ark/bogen/" + A.id;
  var banner = gast ? '<div class="bg-gast noprint">Geteilter Agentenbogen – Änderungen werden erst gespeichert, wenn du ihn übernimmst. <button onclick="bgUebernehmen()">In meine Agenten übernehmen</button></div>' : '';
  var werk = '<div class="bg-werk noprint">' + (blatt ? '<a onclick="go(\'' + basis + '\')">‹ Übersicht</a>' : '<a onclick="go(\'ark/bogen\')">‹ Alle Agenten</a>') +
    '<span></span><button onclick="bgTeilen()">Link teilen</button><button onclick="bgPdf(this)">PDF</button>' + (gast ? '' : '<button onclick="bgDatei()">Datei</button>') + '</div>';
  if(blatt && BG_BLATT.some(function(b){ return b[0] === blatt; })){
    BG.blatt = blatt;
    var items = BG_BLATT.map(function(b){ return {t:b[1], go:basis + "/" + b[0], on:b[0] === blatt}; });
    setTimeout(bgZoom, 0);
    return lay(items, '<div class="bg">' + banner + werk + (blatt === "balance" ? bgOffenHTML(A) : '') + '<div class="bg-blaetter">' + bgBlattHTML(A, blatt) + '</div></div>');
  }
  /* Übersicht des Agenten */
  var W = A.wl, K = {a:"anomalie", r:"realitaet", k:"kompetenz"}, an = bgAnsehen(A);
  var bar = function(t){ var S = BG_SPUR[t]; return '<div class="bg-bar c-' + S.c + '"><b>' + S.t + '</b><div><i style="width:' + (W[t] / 30 * 100) + '%"></i><u style="width:' + (W[t + "x"] / 30 * 100) + '%"></u></div><span>' + W[t] + '</span></div>'; };
  var frei = Object.keys(A.frei).sort();
  var kach = function(id, t, inner, cls){ return '<a class="bg-ka ' + (cls || "") + '" onclick="go(\'' + basis + '/' + id + '\')"><h3>' + t + '</h3>' + inner + '</a>'; };
  var Kt = TA_TEXT["ark/kompetenz/" + A.arc.k], Sx = Kt ? bgSuch(Kt.r, "selbst", [])[0] : null;
  var selbst = Sx ? '<div class="bg-selbst"><h3>Selbsteinschätzung <small>je Antwort +3 maximale QS</small></h3>' + Sx.x.map(function(fr, i){ return '<div><p>' + tx(fr.f) + '</p>' + fr.a.map(function(x, k){ return '<button class="' + (A.selbst[i] === k ? "on" : "") + '" onclick="bgSetze(\'selbst.' + i + '\',' + (A.selbst[i] === k ? -1 : k) + ')">' + tx(x[0]) + ' <i>' + x[1] + '</i></button>'; }).join("") + '</div>'; }).join("") + '</div>' : '';
  var rfb = A.rfb.length ? '<div class="bg-rfb"><h3>Fragen deiner Realität</h3>' + A.rfb.map(function(f, i){ return '<label><small>' + esc(f) + '</small>' + bgTa("rfbA." + i, A.rfbA[i] || "") + '</label>'; }).join("") + '</div>' : '';
  var qs = BG_QUAL.map(function(q){ var m = bgQsMax(A, q), a = A.qsAus[q] || 0; return m ? '<span><b>' + q + '</b><i>' + (m - a) + '/' + m + '</i></span>' : ''; }).join("");
  return '<div class="ct bg bg-ue">' + banner + werk +
    '<header class="bg-held"><div class="bg-hfoto">' + (A.ausweis.bild ? '<img src="' + A.ausweis.bild + '" alt="">' : '<span>' + esc((A.name || "?").charAt(0)) + '</span>') + '</div><div class="bg-hn">' +
      bgIn("name", A.name, "Name des Agenten", "bg-hname") + '<div class="bg-hz">' + bgIn("pron", A.pron, "Pronomen", "bg-hpron") + '<span>' + esc(A.titel || bgRang(A)) + '</span><span class="bg-hans"><img src="' + Z("symbol-ansehen-" + an) + '" alt="">' + BG_ANSEHEN[an] + '</span></div>' +
      '<div class="bg-harc">' + ["a","r","k"].map(function(k){ var kat = K[k]; return '<a class="c-' + TA_ARK[kat].c + '" onclick="bgWahl(\'' + kat + '\')"><img src="' + bgArcImg(kat) + '" alt=""><span><small>' + TA_ARK[kat].t + '</small><b>' + esc(bgArkName(kat, A.arc[k]) || "wählen") + '</b></span></a>'; }).join("") + '</div></div>' +
      '<div class="bg-hzahl">' + [["bel","symbol-belobigung","Belobigungen"],["ver","symbol-verweis","Verweise"],["burn","symbol-burnout","Burnout"]].map(function(z){ return '<div><img src="' + Z(z[1]) + '" alt=""><b>' + A[z[0]] + '</b><small>' + z[2] + '</small><span><a onclick="bgZahl(\'' + z[0] + '\',1)">+</a><a onclick="bgZahl(\'' + z[0] + '\',-1)">–</a></span></div>'; }).join("") + '</div></header>' +
    bgOffenHTML(A) +
    '<div class="bg-kacheln">' +
      kach("stamm", "Stammblatt", '<div class="bg-kqs">' + (qs || '<em>Noch keine Qualitätssicherungen – Selbsteinschätzung unten.</em>') + '</div>', "breit") +
      kach("balance", "Work-Life-Balance", bar("k") + bar("r") + bar("a") + (frei.length ? '<div class="bg-codes">' + frei.map(function(c){ return '<i onclick="event.stopPropagation();bgDok(\'' + c + '\')">' + c + '</i>'; }).join("") + '</div>' : '')) +
      kach("faehig", "Anomalie-Fähigkeiten", A.faeh.some(function(f){ return f.h; }) ? '<ul>' + A.faeh.filter(function(f){ return f.h; }).map(function(f){ return '<li>' + esc(f.h) + ' <small>' + esc(f.q) + (f.geuebt ? " · geübt" : "") + '</small></li>'; }).join("") + '</ul>' : '<em>ARK wählen, dann stehen hier die Fähigkeiten.</em>') +
      kach("bez", "Beziehungen", '<ul>' + A.bez.filter(function(b){ return b.n; }).map(function(b){ return '<li>' + esc(b.n) + ' <small>' + (+b.v >= 9 ? "vernetzt" : "Verbindung " + (+b.v || 0)) + '</small></li>'; }).join("") + '</ul>' + (A.bez.some(function(b){ return b.n; }) ? '' : '<em>' + (A.matrix.length ? esc(A.matrix[0].f) : "noch leer") + '</em>')) +
      kach("anf", "Anforderungen", '<ul>' + A.anf.filter(function(b){ return b.n; }).map(function(b){ return '<li>' + esc(b.n) + '</li>'; }).join("") + '</ul>') +
      kach("willkommen", "Willkommen, Agent!", '<p>' + BG_FB.filter(function(q, i){ return A.fb[i]; }).length + ' von 7 Fragen beantwortet</p>') +
      kach("leisten", "Eigene Leisten", '<ul>' + A.leisten.filter(function(l){ return l.n; }).map(function(l){ return '<li>' + esc(l.n) + ' <small>' + (+l.v || 0) + '/' + (l.max || (l.lang ? 30 : 15)) + '</small></li>'; }).join("") + '</ul>') +
      kach("notizen", "Notizen", '<p class="bg-knot">' + esc((A.notiz || "").slice(0, 140)) + '</p>') +
    '</div>' + selbst + rfb +
    '<div class="bg-fuss noprint"><button onclick="bgAuffuellen()">Einsatzende: QS auffüllen</button>' + (gast ? '' : '<button onclick="bgKopie()">Kopie anlegen</button><button class="rot" onclick="bgLoeschen()">Löschen</button>') + '</div></div>';
}
/* Blätter auf die verfügbare Breite skalieren (Originalgröße A4 = 794 px) */
function bgZoom(){
  var c = document.querySelector(".bg-blaetter"); if(!c) return;
  var z = Math.max(.42, Math.min(1.3, (c.clientWidth - 8) / 794));
  c.querySelectorAll(".bg-blatt").forEach(function(b){ b.style.zoom = z; });
}
window.addEventListener("resize", function(){ clearTimeout(BG.rz); BG.rz = setTimeout(bgZoom, 120); });
