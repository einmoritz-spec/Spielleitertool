/* Reich-Leitstand: Tabs Überblick · Territorien · Häfen · Fraktionen · Auf See · Gefahren */
var RTABS = [["ueberblick","Überblick"],["territorien","Territorien"],["haefen","Häfen"],["fraktionen","Fraktionen"],["see","Auf See"],["gefahren","Gefahren"]];
var TYPC = {"Wunder":"am","Fest":"am","Cartoika":"am","Docks":"te","Gaststätte":"te","Hinweis":"","Handwerksmeisterschaft, Merkmal":"","Schrecken, Merkmal":"rd","Zerlegestation, Schattenquelle":"te","Docks, Schiff":"te","Ingenieur":"sg","Merkmal, Wunder":"am","Dock":"te","Mobiles Dock":"te","Kneipe":"te","Leviathanhafen":"sg","Station":"te","Schiff":"te","Werkstatt":"te","Bedrohung":"rd","Schrecken":"rd","Strafe":"rd","Leviathan":"rd","Markt":"","Merkmal":"","Wahrzeichen":"sg","Anführer":"sg","Flotte":"sg","Hafen":"sg"};
var PEN = '<svg class="pen" viewBox="0 0 24 24" fill="none" stroke="#323032" stroke-width="2"><path d="M4 20l4-1 11-11-3-3L5 16z"/></svg>';
function paras(x){ return String(x).split("\n").map(function(p){ return "<p>" + esc(p) + "</p>"; }).join(""); }
function rs(id){ ST.reiche = ST.reiche || {}; return ST.reiche[id] = ST.reiche[id] || {hooks:{}, rumours:{}, pass:{}, ruf:{}, note:""}; }
function tog(id, grp, k){ var s = rs(id)[grp]; s[k] = !s[k]; save(); var e = document.getElementById(grp + "_" + k); if(e) e.classList.toggle("used", !!s[k]); }
function ruf(id, f, w){ var s = rs(id).ruf; s[f + "_" + w] = !s[f + "_" + w]; save(); render(); }
function note(id, tab){ var s = rs(id), k = tab; s.notes = s.notes || {};
  var m = document.createElement("div"); m.className = "modal"; m.innerHTML = '<div><textarea id="nt"></textarea><button>Fertig</button></div>';
  m.onclick = function(e){ if(e.target === m || e.target.tagName === "BUTTON"){ s.notes[k] = document.getElementById("nt").value; save(); m.remove(); } };
  document.body.appendChild(m); document.getElementById("nt").value = s.notes[k] || ""; document.getElementById("nt").focus(); }
function tabsR(id, tab){ return '<div class="tabs">' + RTABS.map(function(t){ return '<a class="' + (t[0] === tab ? 'on' : '') + '" onclick="go(\'reich/' + id + '/' + t[0] + '\')">' + t[1] + '</a>'; }).join("") + '<span class="r" onclick="note(\'' + id + '\',\'' + tab + '\')" style="cursor:pointer">' + PEN + '</span></div>'; }
function rZoom(src){ var d = document.createElement("div"); d.className = "gzoom"; d.onclick = function(){ d.remove(); }; d.innerHTML = '<img src="' + src + '" alt="">'; document.body.appendChild(d); }
function rimg(b, k){ if(!b) return ""; var wide = b[1] / b[2] > 1.3; return '<img class="rimg ' + (k || (wide ? "wide" : "tall")) + '" loading="lazy" src="img/' + b[0] + '.webp" width="' + b[1] + '" height="' + b[2] + '" alt="" onclick="rZoom(this.src)">'; }
function rband(b){ return b && b[1] / b[2] > 1.3 ? rimg(b, "wide") : ""; }
function rtall(b){ return b && b[1] / b[2] <= 1.3 ? rimg(b, "tall") : ""; }
function entry(e){ return '<div class="en" id="e_' + esc(e.t) + '"><h3>' + esc(e.t) + ' <span class="tag ' + (TYPC[e.typ] || "") + '">' + esc(e.typ) + '</span></h3>' + rimg(e.bild, "mini") + '<p>' + esc(e.x) + (e.i ? ' <i>' + esc(e.i) + '</i>' : '') + '</p>' + (e.bp ? '<a class="lk" onclick="openBook(\'' + qBuch(window.__rq) + '\',' + e.bp + ')">S. ' + e.bp + '</a>' : '') + '</div>'; }
function facts(f){ return '<div class="facts">' + f.map(function(x){ return '<div><b>' + esc(x[0]) + '</b>' + esc(x[1]) + '</div>'; }).join("") + '</div>'; }

function rUeberblick(r, S){
  var els = r.elemente.map(function(e){ return '<div class="el"><h3>' + esc(e.t) + ' <span class="pg" style="float:right">S. ' + (r.p + 1) + '</span></h3><p>' + esc(e.x) + '</p>' + (e.erleben.length ? '<span class="k">Die Crew könnte erleben …</span><ul class="bul">' + e.erleben.map(function(x){ return '<li>' + esc(x) + '</li>'; }).join("") + '</ul>' : '') + '</div>'; }).join("");
  var ru = '<div class="el ru"><h3>' + r.geruechte.t + ' <span class="pg">S. ' + r.geruechte.p + '</span></h3>' + (r.geruechte.intro ? '<p style="color:var(--soft);margin-bottom:8px">' + esc(r.geruechte.intro) + '</p>' : '') + '<div class="rs">' + r.geruechte.x.map(function(x, i){ return '<div class="cd' + (S.rumours[i] ? ' used' : '') + '" id="rumours_' + i + '" onclick="tog(\'' + r.id + '\',\'rumours\',' + i + ')">' + esc(x) + '</div>'; }).join("") + '</div></div>';
  var vl = r.erzaehl.map(function(v){ return '<div class="vl">' + paras(v.x) + '</div>'; }).join("");
  return '<div class="band" style="background-image:url(' + IMG("reich/" + r.id) + ')"><h1>' + esc(r.t) + qTag(r) + '</h1><p>' + esc(r.kurz) + '</p></div><div class="grid3">' + els + ru + '</div>' + vl;
}
function sideTree(list, cur, tab, id){
  return '<nav class="side">' + list.map(function(x){ var on = x.id === cur.id;
    return '<h4 class="' + (on ? 'on' : '') + '" onclick="go(\'reich/' + id + '/' + tab + '/' + x.id + '\')">' + esc(x.t) + '</h4>' + (on ? (x.eintraege || []).map(function(e){ return '<a onclick="var q=document.getElementById(\'e_' + e.t.replace(/'/g, "\\'") + '\');q&&q.scrollIntoView({block:\'center\'})">' + esc(e.t) + '</a>'; }).join("") : ''); }).join("") + '</nav>';
}
function lay(side, body){ var f = ST.fold ? ' fold' : ''; return '<div class="lay' + f + '">' + side + '<button class="fold" onclick="ST.fold=!ST.fold;save();render()">' + (ST.fold ? '›' : '‹') + '</button><div class="ct">' + body + '</div></div>'; }
function rListe(r, list, tab, sel){
  var cur = list.filter(function(x){ return x.id === sel; })[0] || list[0];
  var body = '<div class="hd"><h1>' + esc(cur.t) + '</h1><span class="tag sg">' + esc(cur.typ || (tab === "territorien" ? "Territorium" : "Fraktion")) + '</span><span class="pg">S. ' + cur.p + '</span></div>' + rband(cur.bild) + facts(cur.facts) + '<div class="intro">' + rtall(cur.bild) + paras(cur.x) + '</div><div class="ents">' + cur.eintraege.map(entry).join("") + '</div>';
  return lay(sideTree(list, cur, tab, r.id), body);
}
function rFraktionen(r, S, sel){
  var list = r.fraktionen, cur = list.filter(function(x){ return x.id === sel; })[0] || list[0], H = S.hooks, i0 = list.indexOf(cur) * 6;
  var rf = '<div class="ruf">' + [["respekt","Respekt"],["furcht","Furcht"],["gunst","Gunst"]].map(function(w){ return '<button class="' + (S.ruf[cur.id + "_" + w[0]] ? 'on' : '') + '" onclick="ruf(\'' + r.id + '\',\'' + cur.id + '\',\'' + w[0] + '\')">' + w[1] + '</button>'; }).join("") + '</div>';
  var body = '<div class="hd"><h1>' + esc(cur.t) + '</h1><span class="tag sg">Fraktion</span><span class="pg">S. ' + cur.p + '</span>' + rf + '</div>' + rband(cur.bild) + facts(cur.facts) + '<div class="intro">' + paras(cur.x) + '</div>' +
   '<div class="row3' + (rtall(cur.bild) ? ' r4' : '') + '"><div class="bx"><h3>Grundsätze</h3><p style="margin-bottom:6px;color:var(--soft)">' + esc(cur.grundsaetze.intro) + '</p><ul class="bul">' + cur.grundsaetze.x.map(function(x){ return '<li>' + esc(x) + '</li>'; }).join("") + '</ul></div>' +
   '<div class="bx"><h3>Schnelle NSC</h3>' + cur.nsc.map(function(n){ return '<div class="npc"><span class="av">' + n.n.split(/[ &]+/).filter(Boolean).slice(0, 2).map(function(w){ return w[0]; }).join("") + '</span><div><b>' + esc(n.n) + '</b> <span class="tag gr" style="font-size:11px">' + esc(n.b) + '</span><br>' + esc(n.x) + '</div></div>'; }).join("") + '</div>' +
   '<div class="bx"><h3>Aufhänger</h3><div class="hooks">' + cur.haken.map(function(h, i){ var k = i0 + i; return '<div id="hooks_' + k + '" class="' + (H[k] ? 'used' : '') + '" onclick="tog(\'' + r.id + '\',\'hooks\',' + k + ')">' + esc(h) + '</div>'; }).join("") + '</div></div>' + (rtall(cur.bild) ? '<div class="bx fig">' + rtall(cur.bild) + '</div>' : '') + '</div>' +
   '<div class="ents c4">' + cur.eintraege.map(entry).join("") + '</div>';
  return lay('<nav class="side">' + list.map(function(x){ return '<h4 class="' + (x.id === cur.id ? 'on' : '') + '" onclick="go(\'reich/' + r.id + '/fraktionen/' + x.id + '\')">' + esc(x.t) + '</h4>'; }).join("") + '</nav>', body);
}
function rGefahren(r){
  var x = r.extra, g = r.see.gefahren;
  return '<div class="ct" style="padding:18px 34px 40px">' + (x ? '<div class="hd"><h1>' + esc(x.t) + '</h1><span class="pg">S. ' + x.p + '</span></div>' + rband(x.bild) + '<div class="intro" style="margin-top:8px">' + rtall(x.bild) + paras(x.intro) + '</div><div class="grid3" style="padding:14px 0 20px">' + x.eintraege.map(function(e){ return '<div class="el">' + rimg(e.bild, "mini") + '<h3>' + esc(e.t) + '</h3>' + paras(e.x) + '</div>'; }).join("") + '</div>' : "") +
   '<div class="hd"><h1 style="font-size:40px">Heimische Gefahren</h1><span class="pg">S. ' + r.see.p + '</span></div><div class="grid3" style="padding:12px 0">' + g.map(function(e){ return '<div class="el"><h3>' + esc(e.t) + '</h3><p>' + esc(e.x) + '</p>' + (e.id ? '<a class="lk" onclick="go(\'gefahren/' + e.id + '\')">Gefahren-Karte</a>' : '') + '</div>'; }).join("") + '</div></div>';
}
/* Auf See */
var SW = ["Panzerung","Dichtung","Tempo","Sägen","Tarnung","Neigung"];
function RS(){ ST.reise = ST.reise || {}; var s = ST.reise; s.fort = s.fort || [0, 10]; s.risk = s.risk || [0, 6]; s.path = s.path || [0, 5]; s.schiff = s.schiff || {}; s.ziel = s.ziel || ""; return s; }
function dots(k){ var s = RS(), t = s[k], o = ""; for(var i = 0; i < t[1]; i++) o += '<span class="dot' + (i < t[0] ? ' m' : '') + '" onclick="tdot(\'' + k + '\',' + i + ')" oncontextmenu="tmax(event,\'' + k + '\')"></span>'; return o; }
function tdot(k, i){ var t = RS()[k]; t[0] = t[0] === i + 1 ? i : i + 1; save(); render(); }
function tmax(e, k){ e.preventDefault(); var t = RS()[k]; t[1] = t[1] >= 12 ? 3 : t[1] + 1; t[0] = Math.min(t[0], t[1]); save(); render(); }
function rat(k, d){ var v = RS().schiff; v[k] = Math.max(0, Math.min(9, (v[k] || 0) + d)); save(); render(); }
function ruder(w){ var s = RS(); s.ruder = w; var n = w === "pfad" ? 1 : w === "vor" ? 2 : 0; s.fort[0] = Math.min(s.fort[1], s.fort[0] + n); save(); render(); }
function wuerfeln(){ var s = RS(), d = function(){ return 1 + Math.floor(Math.random() * 6); }; s.w = d(); s.t = s.karte ? Math.max(d(), d()) : d(); s.z = d(); save(); render(); }
function karte(){ var s = RS(); s.karte = !s.karte; save(); render(); }
function rSee(r, S){
  var s = RS(), see = r.see, W = s.w, col = W ? (W === 6 ? "frieden" : W >= 4 ? "ordnung" : "natur") : "";
  var tl = !s.t ? "" : s.t === 6 ? "Gefahrlose Gelegenheit" : s.t >= 4 ? "Gefahr mit Nutzen" : "Unmittelbare Gefahr";
  var cols = [["frieden","Frieden","6"],["ordnung","Ordnung","5–4"],["natur","Natur","3–1"]].map(function(c){
    return '<div class="tb' + (col === c[0] ? ' act' : '') + '"><div class="th">' + c[1] + '<span>' + c[2] + '</span></div>' + see.wache[c[0]].map(function(x, i){ var n = 6 - i; return '<div class="row' + (col === c[0] && s.z === n ? ' hit' : '') + '"><i>' + n + '</i>' + esc(x) + '</div>'; }).join("") + '</div>'; }).join("");
  var tr = function(l, k){ return '<div><span class="lb">' + l + '</span>' + dots(k) + '</div>'; };
  var hm = [["pfad","Pfad schlagen · +1","Du markierst ein Kästchen auf deiner Fortschrittsleiste."],["vor","Vorpreschen · +2","Du markierst zwei Kästchen auf deiner Fortschrittsleiste."],["anker","Anker werfen","Montage; die Unterbesatzung hält Wache."]].map(function(h){ return '<div class="' + (s.ruder === h[0] ? 'on' : '') + '" onclick="ruder(\'' + h[0] + '\')"><b>' + h[1] + '</b>' + h[2] + '</div>'; }).join("");
  var pass = see.passagiere.map(function(x, i){ return '<li class="' + (S.pass[i] ? 'used' : '') + '" id="pass_' + i + '" onclick="tog(\'' + r.id + '\',\'pass\',' + i + ')">' + esc(x) + '</li>'; }).join("");
  return '<div class="sp"><div class="bar"><div><span class="lb">Ziel</span><input value="' + esc(s.ziel) + '" onchange="RS().ziel=this.value;save()"></div>' + tr("Fortschritt", "fort") + tr("Risiko", "risk") + tr("Pfadfindung", "path") +
   '<div class="rat">' + SW.map(function(k){ return '<span onclick="rat(\'' + k + '\',1)" oncontextmenu="event.preventDefault();rat(\'' + k + '\',-1)">' + k + '<b>' + (s.schiff[k] || 0) + '</b></span>'; }).join("") + '</div></div>' +
   '<div class="smain"><div><div class="h">Am Ruder</div><div class="helm">' + hm + '</div>' +
   '<div class="dice"><div class="die"><small>Wache</small><div class="n">' + (W || "–") + '</div><b>' + (W ? (col === "frieden" ? "Frieden" : col === "ordnung" ? "Ordnung" : "Natur") : "&nbsp;") + '</b></div><div class="die hid"><small>Bedrohung · verdeckt</small><div class="n">' + (s.t || "–") + '</div><b>' + (tl || "&nbsp;") + '</b></div></div>' +
   '<div class="btns"><button onclick="wuerfeln()">Wache würfeln</button></div><div class="chk" onclick="karte()">' + (s.karte ? '☑' : '☐') + ' Seekarte der Gegend (Bedrohung 2W6, höherer)</div></div>' +
   '<div><div class="h">Wache im ' + esc(r.t.replace(/^The /, "")) + ' <span class="pg">S. ' + see.p + '</span></div><div class="wt">' + cols + '</div></div></div>' +
   '<div class="low"><div><div class="h">Passagiere</div><ul class="bul">' + pass + '</ul></div>' +
   '<div><div class="h">Handel &amp; Fracht</div><ul class="hdl">' + see.handel.map(function(h){ return '<li><span class="ex' + (h.d === "import" ? ' im' : '') + '">' + (h.d === "import" ? "Import" : "Export") + '</span><b>' + esc(h.t) + '</b> <small>' + esc(h.x) + '</small></li>'; }).join("") + '</ul></div>' +
   '<div><div class="h">Heimische Gefahren</div>' + see.gefahren.map(function(g){ return '<span class="chip2" onclick="go(\'' + (g.id ? 'gefahren/' + g.id : 'reich/' + r.id + '/gefahren') + '\')">' + esc(g.t) + '</span>'; }).join("") + '</div></div></div>';
}
function viewReich(id, tab, sel){
  var r = WS_REICH[id]; if(!r) return viewPlatzhalter((WS_REICHE.filter(function(x){ return x.id === id; })[0] || {t: "Reich"}).t);
  r.id = id; window.__rq = r; var rm = WS_REICHE.filter(function(x){ return x.id === id; })[0] || {}; r.q = r.q || rm.q; r.buch = r.buch || rm.buch; tab = tab || "ueberblick"; var S = rs(id), b;
  if(tab === "ueberblick") b = rUeberblick(r, S);
  else if(tab === "territorien") b = rListe(r, r.territorien, "territorien", sel);
  else if(tab === "haefen") b = rListe(r, r.haefen, "haefen", sel);
  else if(tab === "fraktionen") b = rFraktionen(r, S, sel);
  else if(tab === "see") b = rSee(r, S);
  else b = rGefahren(r);
  return tabsR(id, tab) + b;
}
