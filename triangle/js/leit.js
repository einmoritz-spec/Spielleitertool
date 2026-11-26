/* TRIANGLE AGENCY – Leitstand der Vault-Einsätze (Schablone für alle 12).
   Route: #e/<einsatz>/<reiter>/<nr>   reiter = profil | vor | erm | beg | nach
   Daten: js/data/vault-NN-<id>.js (TA_VAULT[id]), Blöcke siehe plan/triangle/VAULT_BRIEF.md
   Eigene Bausteine eines Einsatzes: TA_VB["name"] = function(block, ctx){ return html; } in vault/NN.js
   Spielstand: ST.v[id] = {c: Chaos, l: Lose Enden, h: {erledigte Hinweise}, n: {Notizen je Reiter}, x: {Leisten/Häkchen}} */
"use strict";
window.TA_VAULT = window.TA_VAULT || {};
window.TA_VB = window.TA_VB || {};
var VR = [["profil","Profil"],["vor","Vor der Ermittlung"],["erm","Ermittlung"],["beg","Begegnung"],["nach","Nachspiel"]];
var VBUCH = "ta_vault";
function vRL(V){ return (V && V.reiterListe) || VR; }
var VCTX = null;   /* aktueller Einsatz beim Rendern: {id, r, i, n} */

function vst(id){ ST.v = ST.v || {}; return ST.v[id] = ST.v[id] || {c:0, l:0, h:{}, n:{}, x:{}}; }
function vZahl(was, d){ var s = vst(VCTX.id); s[was] = Math.max(0, (s[was] || 0) + d); save(); var el = document.querySelector(".vz-" + was + " b"); if(el) el.textContent = s[was]; else render(); }
function vChaos(k){ var s = vst(VCTX.id); if((s.c || 0) < k){ var el = document.querySelector(".vz-c"); if(el){ el.classList.remove("nein"); void el.offsetWidth; el.classList.add("nein"); } return; } vZahl("c", -k); }
function vHak(key){ var s = vst(VCTX.id); if(s.h[key]) delete s.h[key]; else s.h[key] = 1; save(); var el = document.querySelector('[data-h="' + key + '"]'); if(el) el.classList.toggle("ok", !!s.h[key]); }
function vX(key, n){ var s = vst(VCTX.id); s.x[key] = s.x[key] === n ? n - 1 : n; save(); render(); }
function vNotiz(on){
  var s = vst(VCTX.id), k = VCTX.r, p = document.querySelector(".vnotiz");
  if(p){ p.remove(); return; }
  if(on === false) return;
  p = document.createElement("div"); p.className = "vnotiz"; p.innerHTML = '<textarea placeholder="Notizen">' + esc(s.n[k] || "") + '</textarea>';
  p.querySelector("textarea").oninput = function(){ s.n[k] = this.value; save(); var b = document.querySelector(".vstift"); if(b) b.classList.toggle("voll", !!this.value); };
  document.body.appendChild(p); p.querySelector("textarea").focus();
}

/* ---------- Bausteine ---------- */
var VK = 0;   /* laufende Nummer für Hinweis-Schlüssel innerhalb eines Abschnitts */
function vimg(src){ return IMG(/\//.test(src) ? src : "vault/full/" + src); }
var VB = {
  profil: function(b){
    var k = [["Fokus", b.fokus], ["Domäne", b.domaene], ["Impuls", b.impuls]].filter(function(q){ return q[1]; });
    return (b.lead ? '<p class="vlead">' + tx(b.lead) + '</p>' : '') + '<div class="vfdi">' + k.map(function(q){ return '<section><small>' + q[0] + '</small><p>' + tx(q[1]) + '</p></section>'; }).join("") + '</div>';
  },
  morgen: function(b){ return '<div class="vmorgen">' + b.x.map(function(x){ var key = VCTX.r + VCTX.i + "-" + (VK++); return '<p class="vh' + (vst(VCTX.id).h[key] ? " ok" : "") + '" data-h="' + key + '" onclick="vHak(\'' + key + '\')">' + tx(x) + '</p>'; }).join("") + '</div>'; },
  vorlesen: function(b){ return '<div class="vvor">' + taB(b.b) + '</div>'; },
  hinweis: function(b){
    var s = vst(VCTX.id);
    return '<div class="vhin ' + (b.art === "anom" ? "anom" : "gew") + '"><h4><img src="' + Z(b.art === "anom" ? "hinweis-anomal" : "hinweis-gewoehnlich") + '" alt=""><span>' + tx(b.h || "") + '</span></h4>' +
      b.x.map(function(x){ var key = VCTX.r + VCTX.i + "-" + (VK++); return '<p class="vh' + (s.h[key] ? " ok" : "") + '" data-h="' + key + '" onclick="vHak(\'' + key + '\')">' + (typeof x === "string" ? tx(x) : taB(x)) + '</p>'; }).join("") + '</div>';
  },
  karten: function(b){ return '<div class="vkarten n' + Math.min(b.x.length, 4) + '">' + b.x.map(function(k, i){ return '<section style="--i:' + i + '">' + (k.img ? '<img src="' + vimg(k.img) + '" alt="" onclick="zoom(this.src)">' : '') + '<h3>' + tx(k.h) + '</h3>' + (k.s ? '<small>' + tx(k.s) + '</small>' : '') + taB(k.b || []) + '</section>'; }).join("") + '</div>'; },
  werte: function(b){ return '<div class="vwerte">' + (b.img ? '<img src="' + vimg(b.img) + '" alt="">' : '') + '<div><h3>' + tx(b.h) + '</h3>' + (b.s ? '<small>' + tx(b.s) + '</small>' : '') + '<div class="vw">' + (b.x || []).map(function(w){ return '<span><b>' + esc(w[1]) + '</b>' + esc(w[0]) + '</span>'; }).join("") + '</div>' + taB(b.b || []) + '</div></div>'; },
  leiste: function(b){
    var key = "l" + VCTX.r + VCTX.i + "-" + (VK++), voll = vst(VCTX.id).x[key] || 0;
    return '<div class="leiste vl" style="--c:' + (b.c || "var(--akz)") + '">' + (b.h ? '<b>' + tx(b.h) + '</b>' : '') + '<div>' + b.x.map(function(n, i){ return '<u class="' + (i < voll ? "an" : "") + '" onclick="vX(\'' + key + '\',' + (i + 1) + ')">' + esc(n) + '</u>'; }).join("") + '</div></div>';
  },
  ausgang: function(b){ return '<div class="vaus n' + b.x.length + '">' + b.x.map(function(a){ var z = /entkomm/i.test(a.h) ? "pikto-entkommen" : /neutral/i.test(a.h) && !/gefang/i.test(a.h) ? "pikto-neutralisiert" : "pikto-gefangen"; return '<section><img src="' + Z(z) + '" alt=""><h3>' + tx(a.h) + '</h3>' + taB(a.b) + '</section>'; }).join("") + '</div>'; },
  anforderung: function(b){ return '<div class="vanf">' + (b.img ? '<img class="vai" src="' + vimg(b.img) + '" alt="">' : '') + '<small>Vault-Anforderung</small><h3><span>' + tx(b.h) + '</span>' + (b.preis != null ? '<span class="pp">' + esc(b.preis) + '<img src="' + Z("symbol-belobigung") + '" alt=""></span>' : '') + '</h3>' + taB(b.b || []) + '</div>'; },
  faehig: function(b){ return '<div class="vfae"><small>Anomalie-Fähigkeit</small>' + VB._faehig(b) + '</div>'; },
  bild: function(b){
    if(!b.src) return "";
    return '<figure class="vbild ' + (b.pos || "") + '"' + (b.w ? ' style="max-width:' + b.w + 'px"' : '') + '><img src="' + vimg(b.src) + '" alt="" onclick="zoom(this.src)">' + (b.u ? '<figcaption>' + tx(b.u) + '</figcaption>' : '') + '</figure>';
  },
  handout: function(b){
    var art = b.art || "notiz", inh = (b.x || []).map(function(z){ return typeof z === "object" && z.von != null ? '<div class="vmsg"><b>' + tx(z.von) + '</b>' + (z.zeit ? '<i>' + esc(z.zeit) + '</i>' : '') + '<p>' + tx(z.x) + '</p></div>' : taB([z]); }).join("");
    return '<div class="vho ho-' + art + '">' + (b.h ? '<h3>' + tx(b.h) + '</h3>' : '') + inh + '</div>';
  }
};
function vInit(){
  if(VB._faehig) return;
  var ta = taB;
  VB._faehig = function(b){ return ta([b]); };
  /* taB erweitern: Vault-Bausteine überall (auch in Spalten und Kästen) */
  window.taB = taB = function(L){
    return (L || []).map(function(b){
      if(b && typeof b === "object" && VCTX){ if(TA_VB[b.t]) return TA_VB[b.t](b, VCTX); if(VB[b.t] && b.t !== "_faehig") return VB[b.t](b); }
      return ta([b]);
    }).join("");
  };
}

/* ---------- Ansicht ---------- */
function vAbschnitte(V, r){
  var A = (V.reiter && V.reiter[r]) || [];
  /* Vor der Ermittlung: kurze Teile auf einer Seite untereinander statt einzeln anklicken */
  if(r === "vor" && A.length > 1) return [{t:(V.reiterNamen || {}).vor || "Vor der Ermittlung", p:A[0].p, b:[].concat.apply([], A.map(function(a){ return [{t:"h", x:a.t}].concat(a.b || []); }))}];
  return A;
}
function vUnter(id, V, r){
  var s = vst(id), namen = V.reiterNamen || {};
  return '<nav class="unter vunter" data-unterleiste>' + vRL(V).filter(function(q){ return vAbschnitte(V, q[0]).length; }).map(function(q){ return '<a class="' + (q[0] === r ? "on" : "") + '" onclick="go(\'e/' + id + '/' + q[0] + '\')">' + esc(namen[q[0]] || q[1]) + '</a>'; }).join("") +
    '<span class="vzs"><span class="vz vz-c" title="Chaos"><em><img src="' + Z("symbol-chaos-wirbel") + '" alt=""></em><button onclick="vZahl(\'c\',-1)">–</button><b>' + (s.c || 0) + '</b><button onclick="vZahl(\'c\',1)">+</button></span>' +
    '<span class="vz vz-l" title="Lose Enden"><em><img src="' + Z("symbol-gefahr-lose-enden") + '" alt=""></em><button onclick="vZahl(\'l\',-1)">–</button><b>' + (s.l || 0) + '</b><button onclick="vZahl(\'l\',1)">+</button></span>' +
    '<button class="vstift' + (s.n[r] ? " voll" : "") + '" onclick="vNotiz()" title="Notizen"><svg viewBox="0 0 24 24"><path d="M4 20l1-5L16 4l4 4L9 19z M14 6l4 4"/></svg></button></span></nav>';
}
function vRechts(id, V){
  var chaos = (V.chaos || []).length ? '<div class="vchaos"><h4>Chaos-Effekte' + pgl(V.chaosP, VBUCH) + '</h4>' + V.chaos.map(function(c){
    return '<a onclick="vChaos(' + c.k + ')" title="' + c.k + ' Chaos ausgeben"><b>' + c.k + '<img src="' + Z("symbol-chaos-wirbel") + '" alt=""></b><span><em>' + (c.neu ? '<i class="neu">▲</i>' : '') + esc(c.n) + '</em>' + tx(c.x) + '</span></a>'; }).join("") + '</div>' : '';
  var sonder = (V.sonder || []).length ? '<div class="vsonder">' + (V.sonder[0] && (V.sonder[0].h || V.sonder[0].t === "h") ? '' : '<h4>Sonderregel</h4>') + taB(V.sonder) + '</div>' : '';
  var ziele = (V.ziele || []).length ? '<div class="vziele"><h4>Optionale Ziele</h4>' + (V.zieleEinleitung ? '<p class="ve">' + tx(V.zieleEinleitung) + '</p>' : '') + V.ziele.map(function(z){
    return '<p><img src="' + Z(z.art === "ver" ? "symbol-verweis" : "symbol-belobigung") + '" alt=""><span><b>+' + z.n + ' ' + (z.art === "ver" ? (z.n === 1 ? "Verweis" : "Verweise") : (z.n === 1 ? "Belobigung" : "Belobigungen")) + '</b> ' + tx(z.x) + '</span></p>'; }).join("") + '</div>' : '';
  return '<aside class="vre">' + chaos + sonder + ziele + '</aside>';
}
function vKopf(E, V){
  return '<div class="vkopf"><img src="' + IMG(E.img) + '" alt="" onclick="zoom(this.src)"><div><h1>' + esc(E.t) + '</h1>' + (E.de !== E.t ? '<p class="de">' + esc(E.de) + '</p>' : '') +
    '<p class="von">' + esc(E.von) + pgl(E.p, VBUCH) + '</p>' + (V.cw ? '<p class="cw"><b>Inhaltswarnungen:</b> ' + esc(V.cw) + '</p>' : '') + '</div></div>';
}
function viewVault(id, r, nr){
  vInit();
  var E = einsatz(id), V = TA_VAULT[id];
  if(!V) return viewEinsatzLeer(E);
  if(!vRL(V).some(function(q){ return q[0] === r; }) || !vAbschnitte(V, r).length) r = "profil";
  var A = vAbschnitte(V, r), i = Math.max(0, Math.min(A.length - 1, +nr || 0)), sec = A[i];
  VCTX = {id:id, r:r, i:i}; VK = 0; VBUCH = id === "space" ? "ta_space" : "ta_vault";
  document.body.classList.add("vault-e", "ve-" + id);
  var items = A.map(function(a, j){
    var subs = vHs(a.b || []);
    return {t:a.t, go:"e/" + id + "/" + r + "/" + j, on:j === i, sub:subs};
  });
  var body = '<article class="lesen vtext">' + (r === "profil" && i === A.findIndex(function(a){ return a.t !== "Fundstück"; }) ? vKopf(E, V) : '') +
    (sec.t === "Fundstück" ? '<p class="vfpg">' + pgl(sec.p, VBUCH) + '</p>' : '<h1>' + esc(sec.t) + pgl(sec.p, VBUCH) + '</h1>') + taB(sec.b) +
    (r === "nach" && i === A.length - 1 ? '<p class="vbericht"><a class="gehzu" onclick="pwPop(\'A1\')">Einsatzbericht A1</a></p>' : '') + '</article>';
  /* Fundstück: Chaos-Spalte schwebt rechts, das Fundstück nutzt darunter die volle Breite */
  if(sec.t === "Fundstück") return vUnter(id, V, r) + vLay(items, body.replace('<article class="lesen vtext">', '<article class="lesen vtext vfund">' + vRechts(id, V).replace('class="vre"', 'class="vre vschwebt"')));
  vPlanen();
  return vUnter(id, V, r) + vLay(items, body + vRechts(id, V));
}
/* Leere Spalten vermeiden: Nach dem Zeichnen werden Text- und rechte Spalte verglichen.
   Text viel länger → was unter der Chaos-Spalte liegt, läuft in voller Breite zwei-/dreispaltig weiter.
   Rechte Spalte viel länger → Text oben in voller Breite (zweispaltig), Chaos & Co. darunter nebeneinander. */
var VPLAN = 0;
function vPlanen(){
  var n = ++VPLAN;
  function los(){ if(n === VPLAN) vSpalten(); }
  setTimeout(los, 30);
  if(document.fonts && document.fonts.ready) document.fonts.ready.then(function(){ setTimeout(los, 30); });
}
function vSpalten(){
  var ct = document.querySelector(".vct"), a = ct && ct.querySelector(":scope>article"), re = ct && ct.querySelector(":scope>.vre");
  if(!a || !re || a.classList.contains("vfund") || ct.dataset.vs || innerWidth <= 1180) return;
  ct.dataset.vs = 1;
  var ha = a.offsetHeight, hr = re.offsetHeight;
  if(hr - ha > 340){
    ct.classList.add("vunten");
    if(a.offsetHeight > 700) a.classList.add("vzwei");
    return;
  }
  if(ha - hr < 400) return;
  /* kurze rechte Spalte (z. B. nur Ziele): oben als Leiste, Text darunter zweispaltig */
  if(hr < 700 && ha > 1400 && !a.querySelector(".sp-raeume")){ ct.classList.add("voben"); a.classList.add("vzwei"); return; }
  /* Schnitt dort, wo die rechte Spalte endet: Element mit kleinster Lücke, Abschnittsanfänge bevorzugt.
     Große Blöcke aus mehreren Karten (z. B. Figurenkarten) dürfen zwischen den Karten geteilt werden. */
  var top0 = a.getBoundingClientRect().top, ende = a.offsetHeight, C = [], best = 1e9, wahl = null;
  function y(el){ return el.getBoundingClientRect().top - top0; }
  Array.prototype.slice.call(a.children).forEach(function(k, i){
    if(i > 0) C.push({el:k, t:y(k), h2:k.tagName === "H2"});
    if(k.offsetHeight > 800 && k.children.length > 2 && !k.classList.contains("sp-raeume")) Array.prototype.slice.call(k.children).forEach(function(c, j){ if(j > 0) C.push({el:c, t:y(c), innen:k}); });
  });
  C.forEach(function(c){
    if(c.t < 160 || ende - c.t < 400 || /^H[3-4]$/.test(c.el.tagName)) return;
    var d = Math.abs(c.t - hr) - (c.h2 ? 140 : 0);
    if(d < best){ best = d; wahl = c; }
  });
  if(!wahl) return;
  var K = Array.prototype.slice.call(a.children), start;
  if(wahl.innen){
    var kopie = wahl.innen.cloneNode(false), kinder = Array.prototype.slice.call(wahl.innen.children), j = kinder.indexOf(wahl.el);
    kinder.slice(j).forEach(function(c){ kopie.appendChild(c); });
    start = K.indexOf(wahl.innen) + 1;
    K.splice(start, 0, kopie);
  } else {
    start = K.indexOf(wahl.el);
    while(start > 1 && /^H[2-4]$/.test(K[start - 1].tagName)) start--;
  }
  var w = document.createElement("div");
  w.className = "lesen vtext vweiter" + (ct.offsetWidth > 1500 ? " vdrei" : "");
  K.slice(start).forEach(function(k){ w.appendChild(k); });
  ct.appendChild(w);
  /* nur ein Block übrig: dessen Absätze zweispaltig setzen statt halbe Breite leer zu lassen */
  if(w.children.length === 1){
    w.classList.add("eins");
    var bestEl = null, n = 0;
    w.querySelectorAll("*").forEach(function(el){ var m = Array.prototype.filter.call(el.children, function(c){ return c.tagName === "P"; }).length; if(m > n){ n = m; bestEl = el; } });
    var mehr = false; for(var e = bestEl; e && e !== w; e = e.parentElement){ var cc = getComputedStyle(e).columnCount; if(cc !== "auto" && cc !== "1") mehr = true; }
    if(bestEl && n > 1 && !mehr && !w.firstElementChild.classList.contains("sp-raeume")) bestEl.classList.add("vzweisp");
  }
}
/* Unterüberschriften (auch in Spalten) für die Seitenleiste */
function vHs(L){ var o = []; (L || []).forEach(function(b){ if(!b || typeof b !== "object") return; if(b.t === "h") o.push(String(b.x).replace(/\*|\{|\}/g, "")); else if(b.t === "sp") b.x.forEach(function(c){ o = o.concat(vHs(c)); }); }); return o; }
/* Seitenleiste mit grauen Unterpunkten am aktiven Eintrag */
function vLay(items, body){
  var side = "";
  if(items.length > 1){
    side = ST.fold ? '<button class="fold fx" onclick="foldSide()" title="Leiste ausklappen">›</button>' :
      '<nav class="side vside">' + items.map(function(x, i){ return '<a class="' + (x.on ? "on" : "") + '" onclick="go(\'' + x.go + '\')">' + (i === 0 ? '<button class="fold" onclick="event.stopPropagation();foldSide()" title="Leiste einklappen">‹</button>' : '') + esc(x.t) + (x.on && x.sub.length ? '<small>' + x.sub.map(esc).join(" · ") + '</small>' : '') + '</a>'; }).join("") + '</nav>';
  }
  return '<div class="lay vlay' + (side ? (ST.fold ? " zu" : "") : " solo") + '">' + side + '<div class="ct vct">' + body + '</div></div>';
}
function viewEinsatzLeer(E){
  var buch = E.id === "space" ? "ta_space" : "ta_vault";
  return '<div class="ekopf" style="--c:' + E.c + '">' + (E.img ? '<img class="tb" src="' + IMG(E.img) + '" alt="" onclick="zoom(this.src)">' : '<div class="tb sp"></div>') + '<div><h1>' + esc(E.t) + '</h1>' + (E.de !== E.t ? '<p class="de">' + esc(E.de) + '</p>' : '') + '<p class="von">' + esc(E.von) + pgl(E.p, buch) + '</p></div></div>';
}
/* Tastatur im Leitstand: ←/→ Reiter (Unterleiste), ↑/↓ Abschnitte */
document.addEventListener("keydown", function(e){
  if(!/^#e\//.test(location.hash) || !VCTX || e.ctrlKey || e.metaKey || e.altKey) return;
  var t = e.target || {}; if(/INPUT|TEXTAREA|SELECT/.test(t.tagName || "") || document.querySelector(".gs-ov,.gal,.bv-open,.modal,.gzoom")) return;
  var V = TA_VAULT[VCTX.id]; if(!V) return;
  var rs = vRL(V).map(function(q){ return q[0]; }).filter(function(k){ return vAbschnitte(V, k).length; }), ri = rs.indexOf(VCTX.r), n = vAbschnitte(V, VCTX.r).length;
  if(e.key === "ArrowRight" && ri < rs.length - 1){ go("e/" + VCTX.id + "/" + rs[ri + 1]); e.preventDefault(); }
  else if(e.key === "ArrowLeft" && ri > 0){ go("e/" + VCTX.id + "/" + rs[ri - 1]); e.preventDefault(); }
  else if(e.key === "ArrowDown" && VCTX.i < n - 1){ go("e/" + VCTX.id + "/" + VCTX.r + "/" + (VCTX.i + 1)); e.preventDefault(); }
  else if(e.key === "ArrowUp" && VCTX.i > 0){ go("e/" + VCTX.id + "/" + VCTX.r + "/" + (VCTX.i - 1)); e.preventDefault(); }
}, true);

/* Vorspann des Vault-Buchs: Read Me (S. 3), „Lies mich nicht“ (S. 4), Claw Machine (S. 215) – Route #e/vault */
function viewVaultIntro(){
  vInit(); var X = window.TA_VAULT_EXTRA || {}; VCTX = {id:"vault", r:"intro", i:0}; VK = 0;
  document.body.classList.add("vault-e", "ve-vault");
  function teil(k, t){ var T = X[k]; return T ? '<section class="vx vx-' + k + '"><h1>' + t + pgl(T.p, "ta_vault") + '</h1>' + taB(T.b) + '</section>' : ''; }
  var html = '<div class="vintro"><img class="vlogo" src="' + Z("logo-the-vault-komplett") + '" alt="The Vault">' +
    '<div class="vxg">' + teil("readme", "Lies mich") + '<div>' + teil("claw", "Claw Machine") + teil("kafka", "Lies mich nicht").replace('<section class="vx vx-kafka">', '<section class="vx vx-kafka" onclick="this.classList.add(\'auf\')">') + '</div></div>' +
    '<nav class="vxe">' + TA_EINSATZ.map(function(e){ return '<a style="--c:' + e.c + '" onclick="go(\'e/' + e.id + '\')"><em>' + ("0" + e.n).slice(-2) + '</em><b>' + esc(e.t) + '</b><small>' + esc(e.de) + '</small></a>'; }).join("") + '</nav></div>';
  return html.replace(/\[\[ICON:(gew|anom)\]\]/g, function(m, a){ return '<img class="vicon" src="' + Z(a === "anom" ? "hinweis-anomal" : "hinweis-gewoehnlich") + '" alt="">'; });
}
