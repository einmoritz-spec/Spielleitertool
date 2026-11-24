/* Vaesen – Seasons of Mystery: allgemeiner Leitstand für alle Mysterien (Hash: #som/<id>/<tab>/<unter>). Daten: VAE_MYS.<id> */
"use strict";
var MS_ID = "", MS = null, MS_ST = null;
function msKey(){ return "vae_som_" + MS_ID + "_v1"; }
function msLoad(){ if(!MS_ST){ try{ MS_ST = JSON.parse(localStorage.getItem(msKey()) || "{}"); }catch(e){ MS_ST = {}; } MS_ST.cd = MS_ST.cd || []; MS_ST.clue = MS_ST.clue || {}; MS_ST.trk = MS_ST.trk || {}; MS_ST.note = MS_ST.note || {}; } return MS_ST; }
function msSave(){ try{ localStorage.setItem(msKey(), JSON.stringify(MS_ST)); }catch(e){} }
var MS_SK = "WISSEN|UNTERSUCHUNG|EMPATHIE|BEOBACHTUNG|MANIPULATION|HEIMLICHKEIT|BEWEGLICHKEIT|KRAFT|FERNKAMPF|NAHKAMPF|MAGIE|WACHSAMKEIT|LOGIK|INSPIRATION|HEILKUNDE";
var MS_RE = new RegExp("(?<![A-ZÄÖÜ])(" + MS_SK + ")(?![A-ZÄÖÜ])", "g");
function msDec(s){ return String(s).replace(MS_RE, '<span class="roll">$1</span>').replace(/Furchtprobe gegen Furcht (\d)/g, 'Furchtprobe gegen <span class="fear">FURCHT $1</span>'); }
function msP(a){ return (a || []).map(function(t){ return '<p>' + msDec(t) + '</p>'; }).join(""); }
function msPg(p, book){ return '<span class="pg"><a onclick="BV.open(\'vae_seasons\',' + p + ')">S. ' + p + '</a></span>'; }
var MS_PEN = TZ_PEN;
function msTtl(t, p, key){ return '<div class="ttl"><h2>' + esc(t) + '</h2>' + (p ? msPg(p) : '') + (key ? '<span class="pen' + (msLoad().note[key] ? ' has' : '') + '" onclick="msNote(\'' + key + '\',\'' + esc(t) + '\')" title="Notizen">' + MS_PEN + '</span>' : '') + '</div>'; }
function msPp(k, d){ return MS.pp && MS.pp[k] != null ? MS.pp[k] : MS.p + d; }
function msSub(t){ return '<div class="sub">' + t + '</div>'; }
function msKast(t, x, p){ return '<div class="kast"><b class="kt">' + esc(t) + (p ? ' ' + msPg(p) : '') + '</b>' + x + '</div>'; }
function msZoom(src){ var o = document.createElement("div"); o.className = "ms-zoom"; o.onclick = function(){ o.remove(); }; o.innerHTML = '<img src="' + src + '" alt="">'; document.body.appendChild(o); }
function msImg(n){ return "img/som/" + n + ".webp"; }

/* ---------- Hinweise ---------- */
function msClue(c){ var got = msLoad().clue[MS_ID + c.id]; return '<div class="clue' + (got ? ' got' : '') + '" onclick="msClueTog(this,\'' + MS_ID + c.id + '\')">' + (c.q ? '<span class="q">' + esc(c.q) + '</span>' : '') + msDec(c.x) + '</div>'; }
function msClueTog(el, id){ var s = msLoad(); if(s.clue[id]) delete s.clue[id]; else s.clue[id] = 1; el.classList.toggle("got", !!s.clue[id]); msSave(); }
function msClueCol(l){ return '<div class="cl">' + l.map(msClue).join("") + '</div>'; }

/* ---------- Countdown ---------- */
function msCdBar(){
  var done = msLoad().cd;
  return '<div class="cd"><span class="lab">COUNTDOWN</span>' + MS.cd.map(function(s, i){
    return (i ? '<span class="ln"></span>' : '') + '<span class="st' + (done.indexOf(i) > -1 ? ' done' : '') + (s.kat ? ' kat' : '') + '" onclick="msCd(' + i + ',this)"><span class="n">' + (s.kat ? TZ_FLAME : i + 1) + '</span>' + esc(s.n) + '</span>';
  }).join("") + '</div>';
}
function msCd(i, el){
  tzPop();
  var s = MS.cd[i], done = msLoad().cd.indexOf(i) > -1, r = el.getBoundingClientRect();
  var p = document.createElement("div"); p.className = "cdpop"; p.id = "tzPop";
  p.style.left = Math.max(8, Math.min(r.left, window.innerWidth - 560)) + "px"; p.style.top = (r.bottom + 6) + "px";
  p.innerHTML = '<h4>' + esc(s.n).toUpperCase() + '</h4>' + msDec(s.x) + '<div class="ft"><button class="btn ' + (done ? 'alt' : 'fill') + '" onclick="msCdDone(' + i + ')">' + (done ? 'Zurücknehmen' : 'Ausgelöst') + '</button><button class="btn alt" onclick="tzPop()">Schließen</button></div>';
  document.body.appendChild(p);
  setTimeout(function(){ document.addEventListener("click", tzPopOut); }, 0);
}
function msCdDone(i){ var s = msLoad(), k = s.cd.indexOf(i); if(k > -1) s.cd.splice(k, 1); else s.cd.push(i); msSave(); tzPop(); var b = document.querySelector(".cd"); if(b) b.outerHTML = msCdBar(); }

/* ---------- Notizen ---------- */
function msNote(key, titel){
  var o = document.createElement("div"); o.className = "modal-overlay on"; o.id = "tzNote";
  o.onclick = function(e){ if(e.target === o) msNoteClose(key); };
  o.innerHTML = '<div class="modal"><div class="modal-head"><h2>' + esc(titel) + '</h2><button class="modal-close" onclick="msNoteClose(\'' + key + '\')">✕</button></div><div class="modal-body"><textarea id="tzNoteTx" style="width:100%;height:240px;font:inherit;background:#fffdf6;border:1.5px solid var(--line);padding:8px"></textarea></div></div>';
  document.body.appendChild(o); var t = document.getElementById("tzNoteTx"); t.value = msLoad().note[key] || ""; t.focus();
}
function msNoteClose(key){ var t = document.getElementById("tzNoteTx"), s = msLoad(); if(t){ if(t.value.trim()) s.note[key] = t.value; else delete s.note[key]; msSave(); } var o = document.getElementById("tzNote"); if(o) o.remove(); document.querySelectorAll(".ttl .pen").forEach(function(p){ if(p.getAttribute("onclick").indexOf("'" + key + "'") > -1) p.classList.toggle("has", !!s.note[key]); }); }

/* ---------- Figuren ---------- */
function msTrk(id, kind, n){ var s = msLoad().trk, h = ""; for(var i = 0; i < n; i++){ var k = id + kind + i; h += '<i class="' + (s[k] ? 'x' : '') + '" onclick="msTrkTog(this,\'' + k + '\')"></i>'; } return h; }
function msTrkTog(el, k){ var s = msLoad(); if(s.trk[k]) delete s.trk[k]; else s.trk[k] = 1; el.classList.toggle("x", !!s.trk[k]); msSave(); }
function msFigCard(id, compact){
  var f = MS.figs[id], A = ["Physis", "Präzision", "Logik", "Empathie"];
  var body = '<div class="attr">' + f.a.map(function(v, i){ return '<div><b>' + v + '</b><span>' + A[i] + '</span></div>'; }).join("") + '</div><div class="sk">' + f.f.map(function(x){ return x[0] + '<b>' + x[1] + '</b>'; }).join(" ") + '</div>' +
   '<div class="trk">KÖRPERLICH <span>' + msTrk(id, "k", f.z[1]) + '</span> GEISTIG <span>' + msTrk(id, "g", f.z[0]) + '</span></div>' + (f.ausr ? '<div class="eq"><b>AUSRÜSTUNG</b> ' + esc(f.ausr) + '</div>' : '');
  return '<div class="nc" id="fg-' + id + '"><div class="hd2">' + (f.img ? '<img src="' + msImg(f.img.replace("som/", "")) + '" alt="">' : '<div class="ini">' + esc(f.n.charAt(0)) + '</div>') + '<div><h3>' + esc(f.n) + (f.p ? msPg(f.p) : '') + '</h3><div class="role">' + esc(f.rolle) + '</div><div class="qu">' + esc(f.zitat) + '</div></div></div>' +
   (compact ? body + '<details class="bio"><summary>HINTERGRUND</summary>' + msDec(f.x) + '</details>' : '<div class="tx">' + msDec(f.x) + '</div>' + body) + '</div>';
}
function msHier(ids){ ids = ids.filter(function(k){ return MS.figs[k]; }); return '<div class="here">' + ids.map(function(k){ var f = MS.figs[k]; return '<a onclick="go(\'som/' + MS_ID + '/fg/' + k + '\')">' + (f.img ? '<img src="' + msImg(f.img.replace("som/", "")) + '" alt="">' : '<span class="ini">' + esc(f.n.charAt(0)) + '</span>') + esc(f.n.split(" ").slice(-1)[0] === "Jenny" || f.n === "Almmägde" ? f.n : f.n) + '</a>'; }).join("") + '</div>'; }

/* ---------- Tabs ---------- */
function msViewHg(){
  var h = MS.hg, hi = h.hinter;
  return '<div class="ms-hg"><div class="ms-top"><div class="ms-op"><img src="' + msImg(MS.bild.replace("som/", "")) + '" alt="" onclick="msZoom(this.src)"></div><div><div class="ms-wn">' + esc(MS.warnung) + '</div>' + msTtl(MS.titel, MS.p) + '<p>' + h.intro + '</p><p>' + h.vorspiel + '</p>' + (h.vl ? '<div class="vl" style="margin-top:12px;columns:2;column-gap:40px">' + h.vl + '</div>' : '') + '</div></div>' +
   '<div class="ms-cols"><div class="gtxt">' + msTtl("Hintergrund", msPp("hinter", 1)) + hi.map(function(t){ return '<p>' + t + '</p>'; }).join("") + '</div><div>' +
   (h.figs ? msSub("Figuren im Mysterium " + msPg(msPp("figs", 1))) + '<div class="ms-fl">' + h.figs.map(function(f){ return '<div class="kast"><b class="kt">' + esc(f[0]) + '</b>' + f[1] + '</div>'; }).join("") + '</div>' : '') +
   msSub("Konflikte " + msPg(msPp("konf", 2))) + h.konflikt.map(function(t, i){ return '<div class="kast"><b class="kt">' + ["Hauptkonflikt", "Nebenkonflikt"][i] + '</b>' + t + '</div>'; }).join("") +
   (h.kaesten || []).map(function(k){ return '<div style="margin-top:14px">' + msKast(k.t, msDec(k.x), k.p) + '</div>'; }).join("") + '<div style="margin-top:14px">' + msKast("Im Mythischen Britannien und Irland", h.mythic, msPp("myth", 1)) + '</div></div></div></div>';
}
function msViewAn(){
  var a = MS.an, b = a.brief;
  return '<div class="ms-an"><div>' + msTtl("Einladung", msPp("einl", 2)) + '<p>' + a.einladung[0].replace(a.hoName, '<a class="lnk" onclick="go(\'som/' + MS_ID + '/ho\')">' + a.hoName + '</a>') + '</p><div class="vl"><b>' + b.t1 + '</b><br>' + b.x.join("<br>") + '<br><i>' + b.sig + '</i></div>' + a.einladung.slice(1).map(function(t){ return '<p>' + msDec(t) + '</p>'; }).join("") +
   msTtl("Vorbereitungen", msPp("vorb", 3)) + msP(a.vorb) + (a.kultur ? msKast(a.kultur.t, a.kultur.x.join("<br><br>"), msPp("vorb", 3)) : '') + (a.kaesten || []).map(function(k){ return '<div style="margin-top:12px">' + msKast(k.t, msDec(k.x), k.p) + '</div>'; }).join("") + '</div><div>' +
   msTtl("Die Reise", msPp("reise", 4)) + msP(a.reise) + msTtl("Ankunft", msPp("ankunft", 4)) + '<p>' + msDec(a.ankunft[0]) + '</p>' + (a.jenny ? '<div class="cl">' + a.jenny.map(function(t){ return '<div class="clue" style="cursor:default">' + t + '</div>'; }).join("") + '</div>' : '') + a.ankunft.slice(1).map(function(t){ return '<p>' + msDec(t) + '</p>'; }).join("") + '</div>' +
   '<div>' + msSub("Karte " + msPg(msPp("karte", 2))) + a.karten.map(function(k){ return '<img class="ms-karte" src="' + msImg(k) + '" alt="" onclick="msZoom(this.src)">'; }).join("") + (a.hinterhalt ? '<div style="margin-top:12px">' + msKast(a.hinterhalt.t, msDec(a.hinterhalt.x), a.hinterhalt.p) + '</div>' : '') + msSub("Countdown und Katastrophe " + msPg(msPp("cd", 5))) + '<p style="font-size:15.5px">' + MS.cdIntro + '</p><div class="cl">' + MS.cd.map(function(s, i){ return '<div class="clue" style="cursor:default"><span class="q">' + (s.kat ? "Katastrophe" : "Schritt " + (i + 1) + " · " + esc(s.n)) + '</span>' + msDec(s.x) + '</div>'; }).join("") + '</div></div></div>';
}
function msViewOrte(ort){
  var O = MS.orte; ort = ort || O[0].id; var o = O.filter(function(x){ return x.id === ort; })[0] || O[0];
  var bar = '<div class="orte">' + O.map(function(x){ return '<a class="' + (x.id === o.id ? 'on' : '') + '" onclick="go(\'som/' + MS_ID + '/orte/' + x.id + '\')">' + esc(x.t) + '</a>'; }).join("") + '</div>';
  var kar = '<div class="ms-map"><img src="' + msImg(o.karte || MS.orte[0].karte) + '" alt="" onclick="msZoom(this.src)"></div>';
  var left = msTtl(o.t, o.p, o.id) + msHier(o.hier) + msP(o.text) + msSub("Herausforderungen") + '<div class="ms-list">' + o.herausf.map(function(t){ return '<p>' + msDec(t) + '</p>'; }).join("") + '</div>';
  var right = o.hinw.length ? msSub("Hinweise") + '<p style="font-size:15.5px">' + msDec(o.hinwText) + '</p>' + msClueCol(o.hinw) : '';
  var rr = right; if(o.geschichten) right = '';
  (o.kasten || []).forEach(function(k){ right += '<div style="margin-top:12px" class="kast"><b class="kt">' + esc(k.t) + (k.p ? ' ' + msPg(k.p) : '') + '</b>' + msDec(k.x) + (k.vor ? '<div class="vl" style="margin-top:8px">' + k.vor + '</div>' : '') + '</div>'; });
  if(o.geschichten) right += '<div style="margin-top:12px">' + o.geschichten.map(function(g){ return '<details class="ms-gs"><summary><img src="' + msImg(g.img.replace("som/", "")) + '" alt=""><span>' + esc(g.n) + '</span></summary><p>' + g.x + '</p></details>'; }).join("") + '</div>';
  if(o.geschichten){ left += '<div style="margin-top:14px">' + right + '</div>'; right = rr; }
  if(o.paranoia) right += '<div style="margin-top:12px" class="kast"><b class="kt">' + esc(o.paranoia.t) + ' ' + msPg(12) + '</b>' + o.paranoia.x.map(function(t, i){ return i ? '<p style="margin:6px 0">· ' + msDec(t) + '</p>' : '<p>' + t + '</p>'; }).join("") + '</div>' +
   '<div style="margin-top:12px" class="kast"><b class="kt">' + esc(o.zettel.t) + '</b>' + o.zettel.x + ' <a class="lnk" onclick="go(\'som/' + MS_ID + '/ho\')">Handout 1B</a></div>';
  return '<div class="ms-orte"><div class="ort">' + bar + '<p class="ms-intro">' + MS.orteIntro + '</p><div class="cols2x"><div>' + left + '</div><div><div class="ms-ol">' + kar + '</div>' + right + '</div></div></div></div>';
}
function msViewKf(){
  var k = MS.kf, secs = k.wege || [k.show, k.bann, k.nock];
  return '<div class="ms-kf"><div class="ms-kfl">' + msTtl("Konfrontation", k.p, "kf") + msP(k.einleitung) + '</div><div class="ms-wege' + (secs.length > 3 ? ' w4' : '') + '">' + secs.map(function(s, i){ return '<div class="weg"><div class="c"><h4>' + esc(s.t) + '</h4>' + s.x.map(function(t){ return t.indexOf("##") === 0 ? '<h5>' + esc(t.slice(2)) + '</h5>' : '<p>' + msDec(t) + '</p>'; }).join("") + '</div></div>'; }).join("") + '</div></div>';
}
function msViewFg(){
  var main = MS.figOrder;
  return '<div class="fgp"><div class="fig">' + main.map(function(k){ return msFigCard(k); }).join("") + (MS.wesen ? msWesenCard() : '') + '</div>' + (MS.nock ? '<div style="margin-top:14px">' + msKast(MS.nock.n, msDec(MS.nock.x), MS.nock.p) + '</div>' : '') +
   (MS.kaesten ? '<div class="ms-kk">' + MS.kaesten.map(function(k){ return msKast(k.t, msDec(k.x), k.p); }).join("") + '</div>' : '') + '</div>';
}
function msWesenCard(){
  var w = MS.wesen, v = w.w;
  return '<div class="nc" id="fg-wesen"><div class="hd2">' + (w.img ? '<img src="' + msImg(w.img) + '" alt="" style="object-position:50% 30%">' : '') + '<div><h3>' + esc(w.n) + msPg(w.p) + '</h3><div class="role">Vaesen</div></div></div><div class="tx">' + msDec(w.x) + '</div>' +
   '<div class="vrow"><div><b>' + v[0] + '</b><span>Macht</span></div><div><b>' + v[1] + '</b><span>Körperk.</span></div><div><b>' + v[2] + '</b><span>Magie</span></div><div><b>' + v[3] + '</b><span>Manip.</span></div><div><b>' + v[4] + '</b><span>Furcht</span></div></div>' +
   '<div class="blk"><h5>KRÄFTE</h5><div class="mg">' + w.kraefte.map(function(x){ return '<span>' + x + '</span>'; }).join("") + '</div></div>' +
   '<div class="blk"><h5>ZUSTÄNDE</h5><div class="zs">' + w.zustaende.map(function(c, i){ var k = "wz" + i; return '<div class="' + (msLoad().trk[k] ? 'x' : '') + '" onclick="msTrkTog(this,\'' + k + '\')"><i></i>' + c + '</div>'; }).join("") + '</div></div>' +
   '<table class="at"><tr><th>ANGRIFF</th><th>SCHADEN</th><th>REICHW.</th></tr>' + w.att.map(function(a){ return '<tr><td>' + a[0] + '</td><td>' + a[1] + '</td><td>' + a[2] + '</td></tr>'; }).join("") + '</table><div class="eq" style="padding-top:0">' + w.note + '</div><div class="eq"><b>RITUAL</b> ' + w.ritual + '</div></div>';
}
function msAllClues(){ var out = []; MS.orte.forEach(function(o){ if(o.hinw && o.hinw.length) out.push([o, o.hinw]); }); return out; }
function msViewHw(){
  var s = msLoad();
  return '<div class="hw">' + msAllClues().map(function(g){ var n = g[1].filter(function(c){ return s.clue[MS_ID + c.id]; }).length; return '<div class="hrow"><div class="src"><h3>' + esc(g[0].t) + '</h3><small>' + msPg(g[0].p) + '</small><div class="ct">' + n + ' / ' + g[1].length + '</div></div><div class="cg">' + g[1].map(msClue).join("") + '</div></div>'; }).join("") + '</div>';
}
function msHoCard(h){
  var paper = '<img class="ms-paper" src="' + msImg(h.paper) + '" alt="">';
  if(h.form === "zettel") return '<div class="ms-ho ms-zet" data-sh="1">' + paper + '<div class="ms-tx">' + h.x + '</div></div>';
  if(h.form === "bild") return '<div class="ms-ho ms-bild" data-sh="1">' + paper + '</div>';
  if(h.form === "tagebuch") return '<div class="ms-ho ms-tag" data-sh="1">' + paper + '<div class="ms-tx">' + h.x + '</div></div>';
  var b = MS.an.brief, x = h.x || ('<b>' + b.t1 + '</b><br><br>' + b.x.join("<br><br>") + '<br><br><i>' + b.sig + '</i>');
  return '<div class="ms-ho ms-let' + (h.klein ? " l1a" : "") + '" data-sh="1">' + paper + '<div class="ms-tx">' + x + '</div></div>';
}
function msViewHo(){
  return '<div class="ms-hos">' + MS.ho.map(function(h){ return '<div class="ms-hw w-' + h.id + '"><div onclick="msShowAt(this.firstChild)">' + msHoCard(h) + '</div><div class="hol">' + esc(h.t) + ' · ' + esc(h.u) + '</div></div>'; }).join("") + '</div>';
}
function msShowAt(el){ tzShowClose(); TZ_SH = Array.prototype.slice.call(document.querySelectorAll("[data-sh]")); TZ_SI = TZ_SH.indexOf(el); tzShowDraw(); }
function msViewNs(){ var n = MS.ns; return '<div class="ms-ns"><div>' + msTtl(n.t, n.p) + msP(n.x.slice(0, 1)) + '</div><div style="padding-top:44px">' + msP(n.x.slice(1)) + '</div></div>'; }

/* ---------- Rahmen ---------- */
function msTabs(on){ return '<nav class="tabs tzt">' + MS.tabs.map(function(t){ return t[0] === "|" ? '<span class="sep"></span>' : '<a class="' + (t[1] === on ? 'on' : '') + (t[2] ? ' end' : '') + '" onclick="go(\'som/' + MS_ID + '/' + t[1] + '\')">' + t[0] + '</a>'; }).join("") + '</nav>'; }
function viewMys(){
  var p = sub.split("/"), id = p[0], tab = p[1] || "hg", v;
  if(!window.VAE_MYS || !VAE_MYS[id]) return '<div class="page"><div class="empty">Dieses Mysterium ist noch nicht eingebaut.</div></div>';
  if(MS_ID !== id){ MS_ID = id; MS = VAE_MYS[id]; MS_ST = null; }
  switch(tab){
   case "an": v = msViewAn(); break;
   case "orte": v = msViewOrte(p[2]); break;
   case "kf": v = msViewKf(); break;
   case "fg": v = msViewFg(); break;
   case "hw": v = msViewHw(); break;
   case "ho": v = msViewHo(); break;
   case "ns": v = msViewNs(); break;
   default: tab = "hg"; v = msViewHg();
  }
  var st = msLoad(); if(st.last !== tab){ st.last = tab; msSave(); }
  return msTabs(tab) + (["orte", "kf", "hw", "fg", "ho"].indexOf(tab) > -1 ? msCdBar() : "") + v;
}
function mysAfter(){
  if(cur === "som") APP.dataset.pgbook = "vae_seasons"; else delete APP.dataset.pgbook;
  if(cur !== "som") return; tzPop(); tzShowClose();
  var p = sub.split("/"); if(p[1] === "fg" && p[2]){ var el = document.getElementById("fg-" + p[2]); if(el){ window.scrollTo(0, el.getBoundingClientRect().top + window.scrollY - 150); el.classList.add("flash"); } }
}
