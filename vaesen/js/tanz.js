/* Vaesen – Tanz der Träume als Leitstand (Hash: #tanz/<tab>/<ort>). Texte aus VAE_KAP.tanz, Struktur aus TANZ. */
"use strict";
var TZ_KEY = "vae_tanz_v1", TZ_ST = null;
function tzLoad(){ if(!TZ_ST){ try{ TZ_ST = JSON.parse(localStorage.getItem(TZ_KEY) || "{}"); }catch(e){ TZ_ST = {}; } TZ_ST.cd = TZ_ST.cd || []; TZ_ST.clue = TZ_ST.clue || {}; TZ_ST.trk = TZ_ST.trk || {}; TZ_ST.zu = TZ_ST.zu || {}; TZ_ST.note = TZ_ST.note || {}; } return TZ_ST; }
function tzSave(){ try{ localStorage.setItem(TZ_KEY, JSON.stringify(TZ_ST)); }catch(e){} }

/* ---------- Buchdaten ---------- */
function tzSec(id){ var r = null; VAE_KAP.tanz.tabs.forEach(function(t){ (t.secs || []).forEach(function(s){ if(s.id === id) r = s; }); }); return r; }
function tzTab(id){ return VAE_KAP.tanz.tabs.filter(function(t){ return t.id === id; })[0]; }
function tzB(sec, i){ return tzSec(sec).b[i]; }
function tzBetween(s, a, b){ var i = s.indexOf(a); if(i < 0) return ""; var j = b ? s.indexOf(b, i + a.length) : -1; return (j < 0 ? s.slice(i) : s.slice(i, j)).trim(); }
var TZ_SK = "WISSEN|UNTERSUCHUNG|EMPATHIE|BEOBACHTUNG|MANIPULATION|HEIMLICHKEIT|KRAFT|FERNKAMPF|NAHKAMPF|MAGIE|WACHSAMKEIT|LOGIK";
var TZ_RE = new RegExp("(?<![A-ZÄÖÜ])(" + TZ_SK + ")(?![A-ZÄÖÜ])", "g");
function tzDec(s){ return String(s).replace(TZ_RE, '<span class="roll">$1</span>').replace(/gegen Furcht (\d)/g, 'gegen <span class="fear">FURCHT $1</span>'); }
function tzPg(p){ return '<span class="pg"><a onclick="' + inBook(p) + '">S. ' + p + '</a></span>'; }
var TZ_PEN = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M4 20l4-1L19 8l-3-3L5 16z"/><path d="M14 7l3 3"/></svg>';
function tzTtl(t, p, key){ return '<div class="ttl"><h2>' + esc(t) + '</h2>' + (p ? tzPg(p) : '') + (key ? '<span class="pen' + (tzLoad().note[key] ? ' has' : '') + '" onclick="tzNote(\'' + key + '\',\'' + esc(t) + '\')" title="Notizen">' + TZ_PEN + '</span>' : '') + '</div>'; }
function tzSub(t){ return '<div class="sub">' + t + '</div>'; }

/* ---------- Hinweise ---------- */
function tzClue(id, q, x){ var got = tzLoad().clue[id]; return '<div class="clue' + (got ? ' got' : '') + '" onclick="tzClueTog(this,\'' + id + '\')">' + (q ? '<span class="q">' + q + '</span>' : '') + tzDec(x) + '</div>'; }
function tzClueTog(el, id){ var s = tzLoad(); if(s.clue[id]) delete s.clue[id]; else s.clue[id] = 1; el.classList.toggle("got", !!s.clue[id]); tzSave(); }
function tzClues(){
  var up = tzB("einladung", 2).x.split("<br>· "), sp = tzB("speisesaal", 6).x, dh = tzB("dachboden", 6).x, ho = tzB("dachboden", 7).x, wk = tzB("nora", 6).x.split("<br>");
  var kons = dh.slice(0, dh.indexOf("Mit EMPATHIE")).trim(), emp = dh.slice(dh.indexOf("Mit EMPATHIE")).trim();
  var probe = tzB("nora", 6);
  var wissen = probe.x.split("<br>");
  return {
   upsalaIntro: up[0].replace(/<br>$/, ""),
   upsala: up.slice(1).map(function(t, i){ return {id:"up" + i, q:"Wissen", x:t.replace(/<br>$/, "")}; }),
   speisesaal: {intro:tzB("speisesaal", 5).x, list:sp.map(function(t, i){ return {id:"sp" + i, q:"", x:t}; })},
   dachboden: [{id:"da0", q:"Wissen / Untersuchung", x:kons}].concat(ho.map(function(t, i){ return {id:"da" + (i + 1), q:i ? "Sophia" : "Sophia · Empathie", x:t}; })),
   daEmp: emp,
   nora: {tag:tzB("nora", 5).x, probeH:probe.h, probeIntro:wissen[0], probe:wissen.slice(1).map(function(t, i){ return {id:"no" + i, q:t.match(/<b>(.*?)<\/b>/)[1].replace(":", ""), x:t.replace(/<b>.*?<\/b>\s*/, "")}; }), bib:tzB("nora", 7)}
  };
}

/* ---------- Countdown ---------- */
function tzSteps(){ var s = tzSec("countdown").b; return [1, 2, 3, 4].map(function(i){ return {h:s[i].h, x:s[i].x, kat:i === 4}; }); }
var TZ_FLAME = '<svg width="11" height="11" viewBox="0 0 10 10"><path d="M5 1c1 2 3 3 3 5a3 3 0 0 1-6 0c0-1 .6-1.8 1.2-2.3C3.4 5 4 5.2 4.3 4.6 4.6 3.8 4.4 2.6 5 1z" fill="#8a1f17"/></svg>';
function tzCdBar(){
  var done = tzLoad().cd, st = tzSteps();
  return '<div class="cd"><span class="lab">COUNTDOWN</span>' + st.map(function(s, i){
    var nm = ["Verzauberter Schlaf", "Sami", "Schlafwandler", "Katastrophe"][i];
    return (i ? '<span class="ln"></span>' : '') + '<span class="st' + (done.indexOf(i) > -1 ? ' done' : '') + (s.kat ? ' kat' : '') + '" onclick="tzCd(' + i + ',this)"><span class="n">' + (s.kat ? TZ_FLAME : i + 1) + '</span>' + nm + '</span>';
  }).join("") + '</div>';
}
function tzCd(i, el){
  tzPop();
  var s = tzSteps()[i], done = tzLoad().cd.indexOf(i) > -1, r = el.getBoundingClientRect();
  var p = document.createElement("div"); p.className = "cdpop"; p.id = "tzPop";
  p.style.left = Math.min(r.left, window.innerWidth - 560) + "px"; p.style.top = (r.bottom + 6) + "px";
  p.innerHTML = '<h4>' + esc(s.h).toUpperCase() + '</h4>' + tzDec(s.x) + '<div class="ft"><button class="btn ' + (done ? 'alt' : 'fill') + '" onclick="tzCdDone(' + i + ')">' + (done ? 'Zurücknehmen' : 'Ausgelöst') + '</button><button class="btn alt" onclick="tzPop()">Schließen</button></div>';
  document.body.appendChild(p);
  setTimeout(function(){ document.addEventListener("click", tzPopOut); }, 0);
}
function tzPopOut(e){ if(!e.target.closest || (!e.target.closest("#tzPop") && !e.target.closest(".cd .st"))) tzPop(); }
function tzPop(){ var p = document.getElementById("tzPop"); if(p) p.remove(); document.removeEventListener("click", tzPopOut); }
function tzCdDone(i){ var s = tzLoad(), k = s.cd.indexOf(i); if(k > -1) s.cd.splice(k, 1); else s.cd.push(i); tzSave(); tzPop(); var b = document.querySelector(".cd"); if(b) b.outerHTML = tzCdBar(); }

/* ---------- Notizen ---------- */
function tzNote(key, titel){
  var o = document.createElement("div"); o.className = "modal-overlay on"; o.id = "tzNote";
  o.onclick = function(e){ if(e.target === o) tzNoteClose(key); };
  o.innerHTML = '<div class="modal"><div class="modal-head"><h2>' + esc(titel) + '</h2><button class="modal-close" onclick="tzNoteClose(\'' + key + '\')">✕</button></div><div class="modal-body"><textarea id="tzNoteTx" style="width:100%;height:240px;font:inherit;background:#fffdf6;border:1.5px solid var(--line);padding:8px"></textarea></div></div>';
  document.body.appendChild(o); var t = document.getElementById("tzNoteTx"); t.value = tzLoad().note[key] || ""; t.focus();
}
function tzNoteClose(key){ var t = document.getElementById("tzNoteTx"), s = tzLoad(); if(t){ if(t.value.trim()) s.note[key] = t.value; else delete s.note[key]; tzSave(); } var o = document.getElementById("tzNote"); if(o) o.remove(); document.querySelectorAll(".ttl .pen").forEach(function(p){ if(p.getAttribute("onclick").indexOf("'" + key + "'") > -1) p.classList.toggle("has", !!s.note[key]); }); }

/* ---------- Figuren ---------- */
function tzFig(id){ go("tanz/fg/" + id); }
function tzFigs(){
  var f = tzTab("figuren").figs, out = {};
  var keys = ["sami", "sophia", "olaus", "oscar", "schlaf"];
  keys.forEach(function(k, i){ out[k] = f[i]; });
  tzB("speisesaal", 7).x.split("<br>").slice(4).forEach(function(l, i){ var m = l.match(/^<b>(.*?):<\/b>\s*(.*)$/); var k = ["ingelie", "sven", "jonathan", "lisa", "klarhed"][i]; out[k] = {n:m[1], s:m[2].split(":")[0], x:m[2]}; });
  return out;
}
function tzTrk(id, kind, n){ var s = tzLoad().trk, h = ""; for(var i = 0; i < n; i++){ var k = id + kind + i; h += '<i class="' + (s[k] ? 'x' : '') + '" onclick="tzTrkTog(this,\'' + k + '\')"></i>'; } return h; }
function tzTrkTog(el, k){ var s = tzLoad(); if(s.trk[k]) delete s.trk[k]; else s.trk[k] = 1; el.classList.toggle("x", !!s.trk[k]); tzSave(); }
function tzStat(id, st){
  if(!st) return "";
  var L = st.split("<br>"), at = [], m, re = /<b>([^<]+)<\/b>\s*(\d)/g;
  while((m = re.exec(L[0]))) at.push([m[1], m[2]]);
  var sk = L[1] && !/Zähigkeit|Ausrüstung/.test(L[1]) ? L[1].split(" · ").map(function(x){ var q = x.match(/^(.*) (\d)$/); return q ? q[1] + '<b>' + q[2] + '</b>' : x; }).join(" ") : "";
  var tgh = L.filter(function(l){ return /Zähigkeit/.test(l); })[0] || "", g = (tgh.match(/Geistige Zähigkeit (\d)/) || [0, 0])[1], k = (tgh.match(/Körperliche Zähigkeit (\d)/) || [0, 0])[1];
  var eq = L.filter(function(l){ return /Ausrüstung/.test(l); })[0] || "";
  return '<div class="attr">' + at.map(function(a){ return '<div><b>' + a[1] + '</b><span>' + a[0] + '</span></div>'; }).join("") + '</div>' + (sk ? '<div class="sk">' + sk + '</div>' : '') +
   '<div class="trk">KÖRPERLICH <span>' + tzTrk(id, "k", +k) + '</span> GEISTIG <span>' + tzTrk(id, "g", +g) + '</span></div>' + (eq ? '<div class="eq"><b>AUSRÜSTUNG</b>' + eq.replace(/<b>Ausrüstung:<\/b>\s*/, "") + '</div>' : '');
}
function tzAvatar(id, meta){ var m = TANZ.figs[id]; return m.img ? '<img src="' + IMG(m.img, "full") + '" alt="">' : '<div class="ini">' + (m.ini || "") + '</div>'; }
function tzFigCard(id, f, compact){
  var meta = TANZ.figs[id], body = "";
  if(id === "oscar"){
    var w = VAE_WESEN.filter(function(v){ return v.id === "wiedergaenger"; })[0], d = VAE_DETAIL.wiedergaenger;
    body = '<div class="vrow"><div><b>' + w.might + '</b><span>Macht</span></div><div><b>' + w.body + '</b><span>Körperk.</span></div><div><b>' + w.magic + '</b><span>Magie</span></div><div><b>' + w.manip + '</b><span>Manip.</span></div><div><b>' + w.fear + '</b><span>Furcht</span></div></div>' +
     '<div class="blk"><h5>VERZAUBERUNGEN</h5><div class="mg">' + TANZ.oscar.verz.map(function(x){ return '<span>' + x + '</span>'; }).join("") + '</div></div>' +
     '<div class="blk"><h5>FLÜCHE</h5><div class="mg">' + TANZ.oscar.fluch.map(function(x){ return '<span class="f">' + x + '</span>'; }).join("") + '</div></div>' +
     '<div class="blk"><h5>ZUSTÄNDE</h5><div class="zs">' + d.cond.map(function(c, i){ var k = "oscz" + i; return '<div class="' + (tzLoad().zu[k] ? 'x' : '') + '" onclick="tzZu(this,\'' + k + '\')"><i></i>' + c + '</div>'; }).join("") + '</div></div>' +
     '<table class="at"><tr><th>ANGRIFF</th><th>SCHADEN</th><th>REICHW.</th></tr>' + d.att.map(function(a){ return '<tr><td>' + a[0] + '</td><td>' + a[1] + '</td><td>' + a[2] + '</td></tr>'; }).join("") + '</table><div class="eq" style="padding-top:0">' + d.note + '</div>';
  } else body = tzStat(id, f.st);
  var pg = {sami:204, sophia:204, olaus:205, oscar:209, schlaf:210}[id];
  return '<div class="nc" id="fg-' + id + '"><div class="hd2">' + tzAvatar(id) + '<div><h3>' + esc(meta.k) + (pg ? tzPg(pg) : '') + '</h3><div class="role">' + esc(f.s) + '</div>' + (f.q ? '<div class="qu">' + f.q + '</div>' : '') + '</div></div>' + (compact ? body + '<details class="bio"><summary>HINTERGRUND</summary>' + tzDec(f.x) + '</details>' : '<div class="tx">' + tzDec(f.x) + '</div>' + body) + '</div>';
}
function tzZu(el, k){ var s = tzLoad(); if(s.zu[k]) delete s.zu[k]; else s.zu[k] = 1; el.classList.toggle("x", !!s.zu[k]); tzSave(); }
function tzViewFg(){
  var F = tzFigs(), main = ["sami", "sophia", "olaus", "oscar", "schlaf"], mini = ["ingelie", "sven", "jonathan", "lisa", "klarhed"];
  return '<div class="fgp"><div class="fig">' + main.map(function(k){ return tzFigCard(k, F[k]); }).join("") +
   '<a class="nc zu" onclick="go(\'vaesen/wiedergaenger\')"><div class="hd2"><img src="' + IMG("vaesen_wiedergaenger", "full") + '" style="object-position:50% 30%" alt=""><div><h3>Wiedergänger</h3><div class="role">Vaesen · Kapitel 8</div></div></div></a></div>' +
   tzSub("Gäste und Personal") + '<div class="mini">' + mini.map(function(k){ var f = F[k]; return '<div class="nc" id="fg-' + k + '"><h3>' + esc(f.n) + '</h3><span class="role">' + esc(f.s) + '</span>' + tzDec(f.x.slice(f.x.indexOf(":") + 1).trim().replace(/^./, function(c){ return c.toUpperCase(); })) + '</div>'; }).join("") + '</div></div>';
}

/* ---------- Orte (Hexenkatze) ---------- */
function tzHier(ort){
  var l = TANZ.hier[ort] || [], F = TANZ.figs;
  if(!l.length) return "";
  return '<div class="here">' + l.map(function(k){ var m = F[k]; return '<a onclick="tzFig(\'' + k + '\')">' + (m.img ? '<img src="' + IMG(m.img, "full") + '" alt="">' : '<span class="ini">' + (m.ini || "") + '</span>') + esc(m.k) + '</a>'; }).join("") + '</div>';
}
function tzVl(x, key){ var zu = tzLoad().zu[key] !== 0; return '<div class="vl zu" onclick="this.classList.toggle(\'zu\')">' + x + '</div>'; }
function tzPlan(ort){
  var h = '<div class="plan"><div class="pw">' + TANZ.planLabels.map(function(l){ return '<div class="l ' + (l[3] || "") + '" style="left:' + l[1] + '%;top:' + l[2] + '%">' + l[0] + '</div>'; }).join("") +
   TANZ.planHot.map(function(z){ var tgt = z[0] === "wurzelkeller" ? "tanz/kf" : "tanz/hx/" + z[0]; return '<div class="h' + (z[5] ? ' rund' : '') + (ort === z[0] ? ' on' : '') + '" style="left:' + z[1] + '%;top:' + z[2] + '%;width:' + z[3] + '%;height:' + z[4] + '%" onclick="go(\'' + tgt + '\')"><span class="dot"></span></div>'; }).join("") + '</div></div>';
  return h;
}
function tzOrtBar(ort){ return '<div class="orte">' + TANZ.orte.map(function(o){ return '<a class="' + (o[0] === ort ? 'on' : '') + '" onclick="go(\'tanz/hx/' + o[0] + '\')">' + o[1] + '</a>'; }).join("") + '<a onclick="go(\'tanz/kf\')">Wurzelkeller</a></div>'; }
function tzClueCol(list){ return '<div class="cl">' + list.map(function(c){ return tzClue(c.id, c.q, c.x); }).join("") + '</div>'; }
function tzOrt(ort){
  var C = tzClues(), h = "", right = "", left = "";
  if(ort === "speisesaal"){
    var s = tzSec("speisesaal");
    h = tzTtl(s.t, s.p, "speisesaal") + tzHier(ort) + '<p>' + s.b[0].x + '</p><p>' + s.b[1].x + '</p>';
    left = tzSub("Herausforderungen") + '<p>' + tzDec(s.b[3].x) + '</p>';
    right = tzSub("Hinweise") + '<p>' + C.speisesaal.intro + '</p>' + tzClueCol(C.speisesaal.list);
  } else if(ort === "dachboden"){
    var s2 = tzSec("dachboden");
    h = tzTtl(s2.t, s2.p, "dachboden") + tzHier(ort) + '<p>' + s2.b[0].x + '</p>';
    left = tzSub("Herausforderungen") + '<p>' + s2.b[2].x + '</p>' + tzVl(s2.b[3].x, "vl-skript") + '<p style="margin-top:12px">' + tzDec(s2.b[4].x) + '</p>';
    right = tzSub("Hinweise") + tzClueCol([C.dachboden[0]]) + '<p style="margin-top:10px">' + tzDec(C.daEmp) + '</p>' + tzClueCol(C.dachboden.slice(1));
  } else if(ort === "nora"){
    var s3 = tzSec("nora");
    h = tzTtl(s3.t, s3.p, "nora") + '<p>' + s3.b[0].x + '</p>';
    left = tzSub("Herausforderungen") + '<p>' + tzDec(s3.b[2].x) + '</p><div class="kast gb" data-sh="B" onclick="tzShowAt(this)"><b class="kt">' + esc(s3.b[3].h) + '</b>' + s3.b[3].x + '</div>';
    right = tzSub("Hinweise") + '<div class="cl"><div class="clue" onclick="tzClueTog(this,\'tag\')">' + tzDec(C.nora.tag) + ' <a class="lnk" onclick="event.stopPropagation();go(\'tanz/ho\')">Handout C</a></div>' +
      '<div class="kast"><b class="kt">' + esc(C.nora.bib.h) + '</b>' + C.nora.bib.x + '</div></div>' +
      '<div class="sub" style="font-size:13px">' + esc(C.nora.probeH) + '</div><p style="font-size:15.5px">' + tzDec(C.nora.probeIntro) + '</p>' + tzClueCol(C.nora.probe);
  } else {
    var g = tzSec("gasthof");
    h = tzTtl(g.t, g.p, "gasthof") + tzHier("gasthof");
    left = '<p>' + g.b[0].x + '</p>'; right = '<p>' + g.b[1].x + '</p>';
    var cs = tzSec("countdown");
    return h + '<div class="cols2x ev"><div>' + left + '</div><div>' + right + '</div></div><div class="kast" style="margin-top:14px"><b class="kt">Countdown ' + tzPg(cs.p) + '</b>' + cs.b[0].x + '</div>';
  }
  return h + '<div class="cols2x"><div>' + left + '</div><div>' + right + '</div></div>';
}
function tzViewHx(ort){
  ort = ort || "gasthof";
  return '<div class="hx">' + tzPlan(ort) + '<div class="ort">' + tzOrtBar(ort) + tzOrt(ort) + '</div></div>';
}

/* ---------- Konfrontation ---------- */
function tzViewKf(){
  var s = tzSec("wurzelkeller"), p0 = s.b[0].x, p1 = s.b[1].x, F = tzFigs();
  var a = p0.slice(0, p0.indexOf("rufen:") + 6), wh = (p0.match(/„[^“]*“/g) || []).filter(function(q){ return p0.indexOf(q) > p0.indexOf("rufen:"); });
  var b = p0.slice(p0.indexOf("Die Spielercharaktere haben eine Vision"));
  var w1 = tzBetween(p1, "Eine gelungene Probe auf", "Nun können"), w2 = tzBetween(p1, "Ist einer der Spielercharaktere Priester", "Eine andere Möglichkeit"), w3 = tzBetween(p1, "Eine andere Möglichkeit");
  var intro = p1.slice(0, p1.indexOf("Eine gelungene Probe auf"));
  var rest = tzBetween(p1, "Nun können die Spielercharaktere", "Ist einer der Spielercharaktere Priester");
  return '<div class="kf"><div>' + tzTtl(s.t, s.p, "wurzelkeller") + tzHier("wurzelkeller") + '<p>' + a + '</p><div class="whisp">' + wh.map(function(q){ return '<span>' + q + '</span>'; }).join("") + '</div><p>' + tzDec(b) + '</p><p>' + tzDec(intro) + '</p>' +
   '<div class="wege"><div class="weg"><div class="c"><h4>Oscar begreifen lassen</h4>' + tzDec(w1.replace(/^Eine gelungene Probe auf/, "Eine gelungene Probe auf")) + '</div></div>' +
   '<div class="weg"><div class="c"><h4>Selbst weihen</h4>' + w2 + '</div></div><div class="weg"><div class="im"></div><div class="c"><h4>Kirche von Billby</h4>' + w3.replace(/^Eine andere Möglichkeit ist, /, "").replace(/^./, function(c){ return c.toUpperCase(); }) + '</div></div></div>' +
   '<p style="margin-top:14px">' + rest + '</p></div>' +
   '<div>' + tzFigCard("oscar", F.oscar, 1) + '<div style="margin-top:14px"></div>' + '<div class="kast"><b class="kt">' + esc(tzSec("wurzelkeller").b[2].h) + '</b>' + tzSec("wurzelkeller").b[2].x + '</div></div></div>';
}

/* ---------- Hintergrund ---------- */
function tzViewHg(){
  var s = tzSec("hintergrund").b, three = s[3].x, T = [tzBetween(three, "Das Erste:", "Das Zweite:"), tzBetween(three, "Das Zweite:", "Das Dritte:"), tzBetween(three, "Das Dritte:")];
  var drei = T.map(function(t, i){ return '<div class="kast"><b class="nr">' + ["I", "II", "III"][i] + '</b>' + t.replace(/^Das (Erste|Zweite|Dritte): /, "") + '</div>'; }).join("");
  var txt = '<h3>Überblick ' + tzPg(196) + '</h3><p>' + s[0].x + '</p><p>' + s[1].x + '</p><p>' + s[2].x + '</p>' +
   '<h3>Vor fünfzig Jahren</h3><p>' + s[4].x + '</p><p>' + s[5].x + '</p><h3>' + s[6].x + '</h3><p>' + s[7].x + '</p><h3>' + s[8].x + ' ' + tzPg(198) + '</h3><p>' + s[9].x + '</p><p>' + s[10].x + '</p><p>' + s[11].x + '</p>';
  return '<div class="hg"><div class="top"><div class="op"><img src="img/tanz/eroeffnung.webp" alt=""><div class="tt">TANZ DER TRÄUME</div></div>' + TANZ.net + '</div><div class="drei">' + drei + '</div><div class="gtxt">' + txt + '</div></div>';
}

/* ---------- Anreise ---------- */
function tzViewAn(){
  var e = tzSec("einladung"), r = tzSec("reise"), C = tzClues(), g = tzSec("gasthof");
  var box = r.b[1];
  return '<div class="an"><div class="karte"><img src="' + IMG("tanz_s197", "full") + '" alt="" onclick="Galerie.image(\'vaesen\',\'tanz_s197\')"></div><div>' +
   tzTtl(e.t, e.p) + '<p>' + e.b[0].x.replace(/\(Handout A\):$/, '<a class="lnk" onclick="go(\'tanz/ho\')">Handout A</a>:') + '</p><p>' + e.b[1].x + '</p>' +
   tzTtl(r.t.split(" ")[0], r.p) + '<p>' + r.b[0].x + '</p><div class="vl">' + box.x + '</div>' +
   tzTtl("Ankunft", 201) + tzHier("gasthof") + '<p>' + tzDec(r.b[3].x) + '</p></div><div>' +
   tzSub(r.b[4].x) + '<div class="kast">' + r.b[5].x + '</div>' + tzSub("Hinweise in Upsala " + tzPg(199)) + '<p style="font-size:15.5px">' + C.upsalaIntro + '</p>' + tzClueCol(C.upsala) + '</div></div>';
}

/* ---------- Hinweise-Übersicht ---------- */
function tzViewHw(){
  var C = tzClues(), grp = [
   ["Upsala", "Bibliothek, Universität", 199, C.upsala],
   ["Speisesaal", "Jonathan, Pater Klarhed, Personal", 203, C.speisesaal.list],
   ["Dachboden", "Theater, Sophia", 206, C.dachboden],
   ["Noras Zimmer", "Bibliothek, Wissen", 207, C.nora.probe.map(function(c){ return c; })]
  ], s = tzLoad();
  return '<div class="hw">' + grp.map(function(g){ var n = g[3].filter(function(c){ return s.clue[c.id]; }).length; return '<div class="hrow"><div class="src"><h3>' + g[0] + '</h3><small>' + g[1] + ' · ' + tzPg(g[2]) + '</small><div class="ct">' + n + ' / ' + g[3].length + '</div></div><div class="cg">' + g[3].map(function(c){ return tzClue(c.id, c.q, c.x); }).join("") + '</div></div>'; }).join("") + '</div>';
}

/* ---------- Handouts ---------- */
function tzViewHo(){
  var H = tzTab("handouts").b, A = H[0].x.split("<br><br>");
  var t = A[0].split("<br>"), sig = (A[3] || "").split("<br>").pop().replace(/[„“]/g, "");
  var diary = H[2].x.split("<br><br>").map(function(d){ var m = d.match(/^<b>(.*?)<\/b><br>(.*)$/); return {d:m[1], x:m[2]}; });
  return '<div class="ho"><div class="hl"><div class="hoa" data-sh="A" onclick="tzShowAt(this)"><div class="t1">' + t[0].replace(/<\/?b>/g, "") + '</div><div class="t2">' + t[1] + '</div><div class="bd">' + A[1] + '<br><br>' + A[2] + '</div><div class="sig">' + sig + '</div></div><div class="hol">Handout A</div>' +
   '<div class="hob" data-sh="B" onclick="tzShowAt(this)"><h4>' + esc(H[1].h.replace(/\s*\(Handout B\)/, "")).toUpperCase() + '</h4>' + H[1].x + '</div><div class="hol">Handout B</div></div>' +
   '<div class="hc"><div class="tgb">' + diary.map(function(d){ return '<div class="zt" data-sh="C" onclick="tzShowAt(this)"><b>' + d.d + '</b>' + d.x + '</div>'; }).join("") + '</div><div class="hol">Handout C · Noras Tagebuch</div></div></div>';
}

/* ---------- Vollbild-Zeigemodus ---------- */
var TZ_SH = [], TZ_SI = 0;
function tzShowAt(el){ TZ_SH = Array.prototype.slice.call(document.querySelectorAll("[data-sh]")); TZ_SI = TZ_SH.indexOf(el); tzShowDraw(); }
function tzShowDraw(){
  var o = document.getElementById("tzShow"); if(!o){ o = document.createElement("div"); o.id = "tzShow"; o.className = "show"; document.body.appendChild(o); }
  var el = TZ_SH[TZ_SI], cl = el.cloneNode(true); cl.removeAttribute("onclick"); cl.classList.add("big");
  o.innerHTML = '<span class="ar" onclick="tzShowMove(-1)">‹</span><div class="stage"></div><span class="ar" onclick="tzShowMove(1)">›</span><span class="x" onclick="tzShowClose()">✕</span><div class="cnt">' + (TZ_SI + 1) + ' / ' + TZ_SH.length + '</div>';
  o.querySelector(".stage").appendChild(cl);
}
function tzShowMove(d){ TZ_SI = (TZ_SI + d + TZ_SH.length) % TZ_SH.length; tzShowDraw(); }
function tzShowClose(){ var o = document.getElementById("tzShow"); if(o) o.remove(); }
document.addEventListener("keydown", function(e){ if(!document.getElementById("tzShow")) return; if(e.key === "Escape") tzShowClose(); if(e.key === "ArrowRight") tzShowMove(1); if(e.key === "ArrowLeft") tzShowMove(-1); });

/* ---------- Nachspiel ---------- */
function tzViewNs(){
  var n = tzSec("nachspiel"), f = tzSec("fliehen").b[0], c = tzSec("wurzelkeller").b[2];
  return '<div class="ns"><div>' + tzTtl(n.t, n.p) + '<p>' + n.b[0].x + '</p></div><div>' + tzTtl("Falls die Spielercharaktere fliehen", tzSec("fliehen").p) + '<p>' + tzDec(f.x) + '</p></div></div>';
}

/* ---------- Rahmen ---------- */
function tzTabs(on){ return '<nav class="tabs tzt">' + TANZ.tabs.map(function(t){ return t[0] === "|" ? '<span class="sep"></span>' : '<a class="' + (t[1] === on ? 'on' : '') + (t[2] ? ' end' : '') + '" onclick="go(\'tanz/' + t[1] + '\')">' + t[0] + '</a>'; }).join("") + '</nav>'; }
function viewTanz(){
  var p = sub.split("/"), tab = p[0] || "hg", v;
  switch(tab){
   case "an": v = tzViewAn(); break;
   case "hx": v = tzViewHx(p[1]); break;
   case "kf": v = tzViewKf(); break;
   case "fg": v = tzViewFg(); break;
   case "hw": v = tzViewHw(); break;
   case "ho": v = tzViewHo(); break;
   case "ns": v = tzViewNs(); break;
   default: tab = "hg"; v = tzViewHg();
  }
  return tzTabs(tab) + (["hx", "kf", "hw", "fg", "ho"].indexOf(tab) > -1 ? tzCdBar() : "") + v;
}
function tzAfter(){
  tzPop(); tzShowClose();
  if(cur === "tanz" && sub.split("/")[0] === "fg" && sub.split("/")[1]){ var el = document.getElementById("fg-" + sub.split("/")[1]); if(el){ var y = el.getBoundingClientRect().top + window.scrollY - 150; window.scrollTo(0, y); el.classList.add("flash"); } }
}
