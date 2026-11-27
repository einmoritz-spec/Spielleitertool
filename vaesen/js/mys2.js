/* Vaesen – Mysterien-Leitstand v2 (Hash: #som/<id>/<tab>/<unter>). Daten: VAE_MYS.<id> */
"use strict";
var MS_ID = "", MS = null, MS_ST = null;
function msKey(){ return "vae_som_" + MS_ID + "_v1"; }
function msLoad(){ if(!MS_ST){ try{ MS_ST = JSON.parse(localStorage.getItem(msKey()) || "{}"); }catch(e){ MS_ST = {}; } MS_ST.cd = MS_ST.cd || []; MS_ST.clue = MS_ST.clue || {}; MS_ST.trk = MS_ST.trk || {}; MS_ST.note = MS_ST.note || {}; } return MS_ST; }
function msSave(){ try{ localStorage.setItem(msKey(), JSON.stringify(MS_ST)); }catch(e){} }
var MS_SK = "GELEHRSAMKEIT|NACHFORSCHUNG|EMPATHIE|BEOBACHTUNG|MANIPULATION|HEIMLICHKEIT|BEWEGLICHKEIT|KRAFT|FERNKAMPF|NAHKAMPF|MAGIE|WACHSAMKEIT|LOGIK|INSPIRATION|HEILKUNDE";
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

var MS_DR = null, MS_TABS = [["Vorgeschichte", "hg"], ["Auftakt", "an"], ["Orte", "orte"], ["Konfrontation", "kf"], ["Nachspiel", "ns"]];
var MS_LK = [["Figuren", "fg"], ["Hinweise", "hw"], ["Handouts", "ho"], ["Karten", "ka"]];
var MS_SECS = [], MS_TAB = "hg";

/* ---------- Hinweise ---------- */
function msClue(c){ var id = MS_ID + c.id, got = msLoad().clue[id]; return '<div class="clue' + (got ? ' got' : '') + '" data-cid="' + id + '" onclick="msClueTog(\'' + id + '\')">' + (c.q ? '<span class="q">' + esc(c.q) + '</span>' : '') + msDec(c.x) + '</div>'; }
function msClueTog(id){ var s = msLoad(); if(s.clue[id]) delete s.clue[id]; else s.clue[id] = 1; document.querySelectorAll('[data-cid="' + id + '"]').forEach(function(e){ e.classList.toggle("got", !!s.clue[id]); }); msSave(); msCounts(); }
function msCounts(){ var s = msLoad(); document.querySelectorAll("[data-oc]").forEach(function(e){ var o = MS.orte.filter(function(x){ return x.id === e.getAttribute("data-oc"); })[0]; if(o) e.textContent = o.hinw.filter(function(c){ return s.clue[MS_ID + c.id]; }).length + " / " + o.hinw.length; }); }

/* ---------- Countdown ---------- */
function msCdBar(){
  var done = msLoad().cd;
  return '<span class="cd2' + (MS.cd.length > 5 ? ' many' : '') + '"><span class="lab">Countdown</span>' + MS.cd.map(function(s, i){
    return (i ? '<span class="ln"></span>' : '') + '<span class="st' + (done.indexOf(i) > -1 ? ' done' : '') + (s.kat ? ' kat' : '') + '" onclick="msCd(' + i + ',this)" title="' + esc(s.n) + '"><span class="n">' + (s.kat ? TZ_FLAME : i + 1) + '</span></span>';
  }).join("") + '</span>';
}
function msCd(i, el){
  tzPop();
  var s = MS.cd[i], done = msLoad().cd.indexOf(i) > -1, r = el.getBoundingClientRect();
  var p = document.createElement("div"); p.className = "cdpop"; p.id = "tzPop";
  p.style.left = Math.max(8, Math.min(r.left - 200, window.innerWidth - 560)) + "px"; p.style.top = (r.bottom + 6) + "px";
  p.innerHTML = '<h4>' + esc(s.n).toUpperCase() + '</h4>' + msDec(s.x) + '<div class="ft"><button class="btn ' + (done ? 'alt' : 'fill') + '" onclick="msCdDone(' + i + ')">' + (done ? 'Zurücknehmen' : 'Ausgelöst') + '</button><button class="btn alt" onclick="tzPop()">Schließen</button></div>';
  document.body.appendChild(p);
  setTimeout(function(){ document.addEventListener("click", tzPopOut); }, 0);
}
function msCdDone(i){ var s = msLoad(), k = s.cd.indexOf(i); if(k > -1) s.cd.splice(k, 1); else s.cd.push(i); msSave(); tzPop(); var b = document.querySelector(".cd2"); if(b) b.outerHTML = msCdBar(); }

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
function msFigImg(f){ return f.img ? '<img src="' + msImg(f.img.replace("som/", "")) + '" alt="">' : '<span class="ini">' + esc(f.n.charAt(0)) + '</span>'; }
function msFigCard(id){
  var f = MS.figs[id], A = ["Physis", "Präzision", "Logik", "Empathie"];
  var body = '<div class="attr">' + f.a.map(function(v, i){ return '<div><b>' + v + '</b><span>' + A[i] + '</span></div>'; }).join("") + '</div><div class="sk">' + f.f.map(function(x){ return x[0] + '<b>' + x[1] + '</b>'; }).join(" ") + '</div>' +
   '<div class="trk">KÖRPERLICH <span>' + msTrk(id, "k", f.z[1]) + '</span> GEISTIG <span>' + msTrk(id, "g", f.z[0]) + '</span></div>' + (f.ausr ? '<div class="eq"><b>AUSRÜSTUNG</b> ' + esc(f.ausr) + '</div>' : '');
  return '<div class="nc"><div class="hd2">' + msFigImg(f) + '<div><h3>' + esc(f.n) + (f.p ? msPg(f.p) : '') + '</h3><div class="role">' + esc(f.rolle) + '</div><div class="qu">' + esc(f.zitat) + '</div></div></div><div class="tx">' + msDec(f.x) + '</div>' + body + '</div>';
}
function msHier(ids){ ids = (ids || []).filter(function(k){ return MS.figs[k]; }); return ids.length ? '<div class="here">' + ids.map(function(k){ var f = MS.figs[k]; return '<a onclick="msDrawer(\'fg\',\'' + k + '\')">' + msFigImg(f) + esc(f.n) + '</a>'; }).join("") + '</div>' : ''; }
function msWesenCard(){
  var w = MS.wesen, v = w.w;
  return '<div class="nc"><div class="hd2">' + (w.img ? '<img src="' + msImg(w.img) + '" alt="" style="object-position:50% 30%">' : '') + '<div><h3>' + esc(w.n) + msPg(w.p) + '</h3><div class="role">Vaesen</div></div></div><div class="tx">' + msDec(w.x) + '</div>' +
   '<div class="vrow"><div><b>' + v[0] + '</b><span>Macht</span></div><div><b>' + v[1] + '</b><span>Körperk.</span></div><div><b>' + v[2] + '</b><span>Magie</span></div><div><b>' + v[3] + '</b><span>Manip.</span></div><div><b>' + v[4] + '</b><span>Furcht</span></div></div>' +
   '<div class="blk"><h5>KRÄFTE</h5><div class="mg">' + w.kraefte.map(function(x){ return '<span>' + x + '</span>'; }).join("") + '</div></div>' +
   '<div class="blk"><h5>ZUSTÄNDE</h5><div class="zs">' + w.zustaende.map(function(c, i){ var k = "wz" + i; return '<div class="' + (msLoad().trk[k] ? 'x' : '') + '" onclick="msTrkTog(this,\'' + k + '\')"><i></i>' + c + '</div>'; }).join("") + '</div></div>' +
   '<table class="at"><tr><th>ANGRIFF</th><th>SCHADEN</th><th>REICHW.</th></tr>' + w.att.map(function(a){ return '<tr><td>' + a[0] + '</td><td>' + a[1] + '</td><td>' + a[2] + '</td></tr>'; }).join("") + '</table><div class="eq" style="padding-top:0">' + w.note + '</div><div class="eq"><b>RITUAL</b> ' + w.ritual + '</div></div>';
}

/* ---------- Handouts ---------- */
function msHoCard(h){
  var paper = '<img class="ms-paper" src="' + msImg(h.paper) + '" alt="">';
  if(h.form === "zettel") return '<div class="ms-ho ms-zet" data-sh="1">' + paper + '<div class="ms-tx">' + h.x + '</div></div>';
  if(h.form === "bild") return '<div class="ms-ho ms-bild" data-sh="1">' + paper + '</div>';
  if(h.form === "tagebuch") return '<div class="ms-ho ms-tag' + (h.klein ? " l1a" : "") + '" data-sh="1">' + paper + '<div class="ms-tx">' + h.x + '</div></div>';
  var b = MS.an.brief, x = h.x || ('<b>' + b.t1 + '</b><br><br>' + b.x.join("<br><br>") + '<br><br><i>' + b.sig + '</i>');
  return '<div class="ms-ho ms-let' + (h.klein ? " l1a" : "") + '" data-sh="1">' + paper + '<div class="ms-tx">' + x + '</div></div>';
}
function msHoWrap(h){ return '<div class="ms-hw w-' + h.id + '"><div onclick="msShowAt(this.firstChild)">' + msHoCard(h) + '</div><div class="hol">' + esc(h.t) + ' · ' + esc(h.u) + '</div></div>'; }
function msShowAt(el){ tzShowClose(); TZ_SH = Array.prototype.slice.call(document.querySelectorAll("[data-sh]")); TZ_SI = TZ_SH.indexOf(el); tzShowDraw(); }

/* ---------- Schublade ---------- */
function msAllKarten(){ var out = [], seen = {}; (MS.an.karten || []).forEach(function(k){ if(!seen[k]){ seen[k] = 1; out.push([k, "Reisekarte"]); } }); MS.orte.forEach(function(o){ if(o.karte && !seen[o.karte]){ seen[o.karte] = 1; out.push([o.karte, o.t]); } }); return out; }
function msDrawHtml(){
  if(!MS_DR) return "";
  var k = MS_DR.k, h = "";
  if(k === "fg"){
    var ids = MS.figOrder.concat(MS.wesen ? ["wesen"] : []);
    h = ids.map(function(id){
      var open = MS_DR.a === id, f = id === "wesen" ? {n: MS.wesen.n, rolle: "Vaesen", img: null} : MS.figs[id];
      var im = id === "wesen" ? (MS.wesen.img ? '<img src="' + msImg(MS.wesen.img) + '" alt="">' : '<span class="ini">V</span>') : msFigImg(f);
      var at = id === "wesen" ? "" : '<span class="at4">' + f.a.join(" · ") + '</span>';
      return '<div class="fr' + (open ? ' open' : '') + '" id="dr-' + id + '"><div class="frh" onclick="msFr(\'' + id + '\')">' + im + '<div><b>' + esc(f.n) + '</b><small>' + esc(f.rolle) + '</small></div>' + at + '</div>' + (open ? (id === "wesen" ? msWesenCard() : msFigCard(id)) : '') + '</div>';
    }).join("") + (MS.nock ? msKast(MS.nock.n, msDec(MS.nock.x), MS.nock.p) : '') + (MS.kaesten || []).map(function(x){ return msKast(x.t, msDec(x.x), x.p); }).join("");
  } else if(k === "hw"){
    var s = msLoad();
    h = MS.orte.filter(function(o){ return o.hinw && o.hinw.length; }).map(function(o){ var n = o.hinw.filter(function(c){ return s.clue[MS_ID + c.id]; }).length; return '<div class="hg"><h4>' + esc(o.t) + '<span data-oc="' + o.id + '">' + n + ' / ' + o.hinw.length + '</span></h4>' + o.hinw.map(msClue).join("") + '</div>'; }).join("");
  } else if(k === "ho"){
    h = '<div class="hogrid">' + MS.ho.map(msHoWrap).join("") + '</div>';
  } else {
    h = '<div class="kagrid">' + msAllKarten().map(function(x){ return '<figure onclick="msZoom(msImg(\'' + x[0] + '\'))"><img src="' + msImg(x[0]) + '" alt=""><figcaption>' + esc(x[1]) + '</figcaption></figure>'; }).join("") + '</div>';
  }
  var nm = MS_LK.filter(function(l){ return l[1] === k; })[0][0];
  return '<div class="dr-h"><b>' + nm + '</b><a onclick="msDrawer(null)" title="Schließen (Esc)">✕</a></div><div class="dr-b">' + h + '</div>';
}
function msDrawer(k, a){
  if(k && MS_DR && MS_DR.k === k && a === undefined){ k = null; }
  MS_DR = k ? {k: k, a: a} : null; msDrawPaint();
  if(k === "fg" && a){ var el = document.getElementById("dr-" + a); if(el) el.scrollIntoView({block: "nearest"}); }
}
function msFr(id){ MS_DR.a = MS_DR.a === id ? null : id; msDrawPaint(); var el = document.getElementById("dr-" + id); if(el) el.scrollIntoView({block: "nearest"}); }
function msDrawPaint(){
  var d = document.getElementById("msDr"); if(d){ d.innerHTML = msDrawHtml(); d.classList.toggle("on", !!MS_DR); }
  document.body.classList.toggle("msdr", !!MS_DR);
  document.querySelectorAll(".ms2t .lk").forEach(function(a){ a.classList.toggle("on", !!MS_DR && a.getAttribute("data-k") === MS_DR.k); });
}

/* ---------- Abschnitte ---------- */
function msSec(id, t, inner){ MS_SECS.push([id, t]); return '<section class="ms-s" id="ms-' + id + '">' + inner + '</section>'; }
function msFr2(inner){ return '<div class="ms-fr">' + inner + '</div>'; }
function msG(items, cls){ return items.length ? '<div class="ms-g ' + (cls || "") + '">' + items.join("") + '</div>' : ''; }
function msKastX(k){ return msKast(k.t, msDec(k.x) + (k.vor ? '<div class="vl" style="margin-top:8px">' + k.vor + '</div>' : ''), k.p); }

function msViewHg(){
  var h = MS.hg, hi = h.hinter, kon = h.konflikt.map(function(t, i){ return '<div class="kast"><b class="kt">' + ["Hauptkonflikt", "Nebenkonflikt"][i] + '</b>' + t + '</div>'; });
  return msSec("ue", "Überblick", msFr2('<img src="' + msImg(MS.bild.replace("som/", "")) + '" alt="" onclick="msZoom(this.src)">') + '<div class="ms-wn">' + esc(MS.warnung) + '</div>' + msTtl(MS.titel, MS.p) + '<p class="lead">' + h.intro + '</p><p>' + h.vorspiel + '</p>' + (h.vl ? '<div class="vl">' + h.vl + '</div>' : '')) +
   msSec("hi", "Hintergrund", msTtl("Hintergrund", msPp("hinter", 1)) + hi.map(function(t){ return '<p>' + t + '</p>'; }).join("")) +
   msSec("ko", "Konflikte", msTtl("Konflikte", msPp("konf", 2)) + msG(kon) + (h.figs ? msSub("Figuren im Mysterium " + msPg(msPp("figs", 1))) + msG(h.figs.map(function(f){ return '<div class="kast"><b class="kt">' + esc(f[0]) + '</b>' + f[1] + '</div>'; })) : '') +
    msG((h.kaesten || []).map(msKastX)) + '<details class="ms-dt"><summary>Im Mythischen Britannien und Irland ' + msPg(msPp("myth", 1)) + '</summary>' + h.mythic + '</details>');
}
function msViewAn(){
  var a = MS.an, ho = MS.ho[0], kv = [];
  if(a.kultur) kv.push(msKast(a.kultur.t, a.kultur.x.join("<br><br>"), msPp("vorb", 3)));
  (a.kaesten || []).forEach(function(k){ kv.push(msKastX(k)); });
  var einl = msSec("ei", "Einladung", msFr2('<div class="ms-hw w-' + ho.id + '"><div onclick="msShowAt(this.firstChild)">' + msHoCard(ho) + '</div><div class="hol">' + esc(ho.t) + '</div></div>') + msTtl("Einladung", msPp("einl", 2)) +
    '<p>' + a.einladung[0].replace(a.hoName, '<a class="lnk" onclick="msDrawer(\'ho\')">' + a.hoName + '</a>') + '</p>' + a.einladung.slice(1).map(function(t){ return '<p>' + msDec(t) + '</p>'; }).join(""));
  var vorb = msSec("vo", "Vorbereitungen", msTtl("Vorbereitungen", msPp("vorb", 3)) + msP(a.vorb) + msG(kv));
  var reise = msSec("re", "Die Reise", (a.karten || []).slice(0, 1).map(function(k){ return msFr2('<img src="' + msImg(k) + '" alt="" onclick="msZoom(this.src)"><small class="cap">Karte ' + msPg(msPp("karte", 2)) + '</small>'); }).join("") + msTtl("Die Reise", msPp("reise", 4)) + msP(a.reise) + (a.hinterhalt ? msG([msKastX(a.hinterhalt)]) : ''));
  var ank = msSec("ak", "Ankunft", msTtl("Ankunft", msPp("ankunft", 4)) + '<p>' + msDec(a.ankunft[0]) + '</p>' + (a.jenny ? msG(a.jenny.map(function(t){ return '<div class="clue st">' + t + '</div>'; })) : '') + a.ankunft.slice(1).map(function(t){ return '<p>' + msDec(t) + '</p>'; }).join(""));
  var cd = msSec("cd", "Countdown", msTtl("Countdown und Katastrophe", msPp("cd", 5)) + '<p>' + MS.cdIntro + '</p>' + msG(MS.cd.map(function(s, i){ return '<div class="clue st' + (s.kat ? ' kat' : '') + '"><span class="q">' + (s.kat ? "Katastrophe" : "Schritt " + (i + 1) + " · " + esc(s.n)) + '</span>' + msDec(s.x) + '</div>'; })));
  return einl + vorb + reise + ank + cd;
}
function msOrt(o){
  var out = '<div class="ms-fr"><img src="' + msImg(o.karte || MS.orte[0].karte) + '" alt="" onclick="msZoom(this.src)"></div>' + msTtl(o.t, o.p, o.id) + msHier(o.hier) + msP(o.text);
  if(o.herausf && o.herausf.length) out += msSub("Herausforderungen") + '<div class="ms-list">' + o.herausf.map(function(t){ return '<p>' + msDec(t) + '</p>'; }).join("") + '</div>';
  if(o.hinw && o.hinw.length) out += msSub('Hinweise <span class="hc" data-oc="' + o.id + '"></span>') + (o.hinwText ? '<p class="small">' + msDec(o.hinwText) + '</p>' : '') + msG(o.hinw.map(msClue));
  var ks = (o.kasten || []).map(msKastX);
  if(o.paranoia) ks.push(msKast(o.paranoia.t, o.paranoia.x.map(function(t, i){ return i ? '<p style="margin:6px 0">· ' + msDec(t) + '</p>' : '<p>' + t + '</p>'; }).join(""), 12));
  if(o.zettel) ks.push(msKast(o.zettel.t, o.zettel.x + ' <a class="lnk" onclick="msDrawer(\'ho\')">Handout 1B</a>'));
  out += msG(ks);
  if(o.geschichten) out += msSub("Geschichten") + '<div class="ms-g">' + o.geschichten.map(function(g){ return '<details class="ms-gs"><summary><img src="' + msImg(g.img.replace("som/", "")) + '" alt=""><span>' + esc(g.n) + '</span></summary><p>' + g.x + '</p></details>'; }).join("") + '</div>';
  return out;
}
function msViewOrte(){ return '<p class="ms-intro">' + MS.orteIntro + '</p>' + MS.orte.map(function(o){ return msSec("o-" + o.id, o.t, msOrt(o)); }).join(""); }
function msViewKf(){
  var k = MS.kf, secs = k.wege || [k.show, k.bann, k.nock];
  return msSec("k0", "Überblick", msTtl("Konfrontation", k.p, "kf") + msP(k.einleitung)) + secs.map(function(s, i){ return msSec("w" + i, s.t, '<h3 class="ms-wt">' + esc(s.t) + '</h3>' + s.x.map(function(t){ return t.indexOf("##") === 0 ? '<h5 class="ms-h5">' + esc(t.slice(2)) + '</h5>' : '<p>' + msDec(t) + '</p>'; }).join("")); }).join("");
}
function msViewNs(){ var n = MS.ns; return msSec("ns", n.t, msTtl(n.t, n.p) + msP(n.x)); }

/* ---------- Rahmen ---------- */
function msHead(id){ var M = VAE_MYS[id]; return '<span class="mt" onclick="go(\'start\')"><b>' + esc(M.titel) + '</b><small>Seasons of Mystery · ' + esc(M.zeit) + '</small></span>'; }
function msSide(){ return '<nav class="side ms2s">' + MS_SECS.map(function(s, i){ return '<a data-s="' + s[0] + '" onclick="msJump(\'' + s[0] + '\')"><span>' + esc(s[1]) + '</span></a>'; }).join("") + '</nav>'; }
function msJump(id){ var el = document.getElementById("ms-" + id); if(el) window.scrollTo({top: el.getBoundingClientRect().top + window.scrollY - 112, behavior: "smooth"}); }
function msSpy(){
  var best = null, y = 130; MS_SECS.forEach(function(s){ var el = document.getElementById("ms-" + s[0]); if(el && el.getBoundingClientRect().top <= y) best = s[0]; }); if(!best && MS_SECS[0]) best = MS_SECS[0][0];
  document.querySelectorAll(".ms2s a").forEach(function(a){ a.classList.toggle("on", a.getAttribute("data-s") === best); });
}
function msTabsHtml(){ return '<nav class="tabs ms2t">' + MS_TABS.map(function(t){ return '<a class="' + (t[1] === MS_TAB ? 'on' : '') + '" onclick="go(\'som/' + MS_ID + '/' + t[1] + '\')">' + t[0] + '</a>'; }).join("") + '<span class="sp"></span>' + msCdBar() + '<span class="sep"></span>' +
  MS_LK.map(function(l){ return '<a class="lk' + (MS_DR && MS_DR.k === l[1] ? ' on' : '') + '" data-k="' + l[1] + '" onclick="msDrawer(\'' + l[1] + '\')">' + l[0] + '</a>'; }).join("") + '</nav>'; }
function viewMys(){
  var p = sub.split("/"), id = p[0], tab = p[1] || "hg", v;
  if(!window.VAE_MYS || !VAE_MYS[id]) return '<div class="page"><div class="empty">Dieses Mysterium ist noch nicht eingebaut.</div></div>';
  if(MS_ID !== id){ MS_ID = id; MS = VAE_MYS[id]; MS_ST = null; MS_DR = null; }
  var lk = {fg: 1, hw: 1, ho: 1, ka: 1};
  if(lk[tab]){ MS_DR = {k: tab, a: p[2] || null}; tab = msLoad().last || "hg"; }
  if(MS_TABS.every(function(t){ return t[1] !== tab; })) tab = "hg";
  MS_TAB = tab; MS_SECS = [];
  switch(tab){ case "an": v = msViewAn(); break; case "orte": v = msViewOrte(); break; case "kf": v = msViewKf(); break; case "ns": v = msViewNs(); break; default: v = msViewHg(); }
  var st = msLoad(); if(st.last !== tab){ st.last = tab; msSave(); }
  return msTabsHtml() + '<div class="main' + (folded ? ' fold' : '') + '">' + msSide() + '<div class="content ms2c">' + v + '</div></div><button class="fold-b' + (folded ? ' f' : '') + '" onclick="toggleFold()" title="Seitenleiste ein-/ausblenden (b)" aria-label="Seitenleiste">' + (folded ? '›' : '‹') + '</button><aside class="ms-dr' + (MS_DR ? ' on' : '') + '" id="msDr">' + msDrawHtml() + '</aside>';
}
function mysAfter(){
  if(cur === "som") APP.dataset.pgbook = "vae_seasons"; else delete APP.dataset.pgbook;
  document.body.classList.toggle("msdr", cur === "som" && !!MS_DR);
  if(cur !== "som") return; tzPop(); tzShowClose();
  var p = sub.split("/"); if(MS_TAB === "orte" && p[1] === "orte" && p[2]) setTimeout(function(){ msJump("o-" + p[2]); }, 30);
  msCounts(); msSpy();
  var d = document.getElementById("msDr"); if(d && MS_DR && MS_DR.a){ var el = document.getElementById("dr-" + MS_DR.a); if(el) el.scrollIntoView({block: "nearest"}); }
}
window.addEventListener("scroll", function(){ if(cur === "som") msSpy(); }, {passive: true});
document.addEventListener("keydown", function(e){
  if(cur !== "som" || /INPUT|TEXTAREA|SELECT/.test((e.target || {}).tagName || "") || document.getElementById("tzShow") || document.getElementById("tzNote") || e.ctrlKey || e.metaKey || e.altKey) return;
  if(e.key === "Escape"){ var z = document.querySelector(".ms-zoom"); if(z){ z.remove(); return; } if(MS_DR) msDrawer(null); else go("start"); return; }
  var i = MS_TABS.map(function(t){ return t[1]; }).indexOf(MS_TAB);
  if(e.key === "ArrowRight" && i < MS_TABS.length - 1){ e.preventDefault(); go("som/" + MS_ID + "/" + MS_TABS[i + 1][1]); }
  if(e.key === "ArrowLeft" && i > 0){ e.preventDefault(); go("som/" + MS_ID + "/" + MS_TABS[i - 1][1]); }
  if(e.key === "ArrowDown" || e.key === "ArrowUp"){
    var cur2 = document.querySelector(".ms2s a.on"), ids = MS_SECS.map(function(s){ return s[0]; }), k = cur2 ? ids.indexOf(cur2.getAttribute("data-s")) : 0, n = k + (e.key === "ArrowDown" ? 1 : -1);
    if(n >= 0 && n < ids.length){ e.preventDefault(); msJump(ids[n]); }
  }
});
