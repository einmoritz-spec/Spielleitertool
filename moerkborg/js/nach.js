/* MÖRK BORG – Nachschlagen (gelbe Leiste). Teil I „Die sterbende Welt“ nach Entwurf 7: Weltkarte links, Ortsleiste, Seitenpaare. Teile II–IV folgen (Bauschritte 3, 5, 7). */
"use strict";
var NACH = {}, NACH_TEILE = {welt:"Die sterbende Welt", regeln:"Die Regeln"};
VIEWS.nach = function(a){
 var teil = a[0] || "welt", key = a[1] || "anfang";
 if(teil === "regeln") return NACH.regeln(key);
 var bar = NACH.bar(teil);
 var ort = MB_WELT_ORTE.filter(function(o){ return o.id === key; })[0] || MB_WELT_ORTE[0];
 var sel = ort.sel || ort.id;
 var orte = MB_WELT_ORTE.map(function(o){
  var g = o.g === "–" ? '<b></b>' : o.g ? '<b>' + esc(o.g) + '</b>' : "";
  var act = o.aktion ? "NACH.akt('" + o.aktion + "')" : "go('nach/welt/" + o.id + "')";
  return g + '<span class="' + (o.id === ort.id ? "on" : "") + '" onclick="' + act + '">' + esc(o.t) + '</span>';
 }).join("");
 var erst = false;
 var hs = MB_WELT_HS.map(function(h){ var an = h[0] === ort.id && !erst; if(an) erst = true; return '<span class="hs' + (an ? " on" : "") + '" style="left:' + h[1] + '%;top:' + h[2] + '%" onclick="go(\'nach/welt/' + h[0] + '\')"></span>'; }).join("");
 var seite = MB_WELT.filter(function(s){ return s.id === (ort.seite || "anfang"); })[0];
 function sec(s, gross){
  if(s.bild) return '<img class="bild" src="' + IMG(s.bild) + '" alt="" onclick="zoom(this.src)">';
  if(s.link){ var li = MB_WELT_ORTE.filter(function(o){ return o.seite === s.link; })[0]; return '<div class="mehr" onclick="go(\'nach/welt/' + li.id + '\')"><span>' + esc(s.h) + pgl(s.p) + '</span></div>'; }
  var t = s.gross ? "h1" : "h2", h = s.h ? '<' + t + '>' + esc(s.h) + pgl(s.p) + '</' + t + '>' : '<div class="sn">' + pgl(s.p) + '</div>';
  return '<section class="ws' + (s.id && s.id === sel ? " sel" : "") + '">' + h + (s.unter ? '<div class="unter">' + esc(s.unter) + '</div>' : "") +
   (s.img ? '<img class="bild' + (s.hoch ? " hoch" : "") + '" src="' + IMG(s.img) + '" alt="" onclick="zoom(this.src)">' : "") + BLK(s.x) + '</section>';
 }
 var inh = "";
 if(seite) inh = '<div class="zwei"><div class="l">' + seite.l.map(function(s){ return sec(s, 1); }).join("") + '</div><div class="r">' + seite.r.map(function(s){ return sec(s, 0); }).join("") + '</div></div>' +
   (seite.unten ? '<div class="ws unten">' + BLK(seite.unten) + '</div>' : "") + (seite.fries ? '<img class="fries" src="' + IMG(seite.fries) + '" alt="" onclick="zoom(this.src)">' : "");
 return bar + '<div class="leib"><div class="karte"><div class="kb"><img src="' + IMG("welt/weltkarte") + '" alt="" onclick="NACH.akt(\'karte\')">' + hs + '</div></div><div class="text"><div class="orte">' + orte + '</div>' + inh + '</div></div>';
};
NACH.akt = function(a){ if(a === "karte") zoom(IMG("welt/weltkarte")); else if(a === "kalender") SP.verse(); };
NACH.step = function(d){
 var cur = (location.hash || "").split("/")[2] || "anfang", i = 0;
 MB_WELT_ORTE.forEach(function(o, n){ if(o.id === cur) i = n; });
 var n = MB_WELT_ORTE[i + d]; if(n && !n.aktion) go("nach/welt/" + n.id);
};
document.addEventListener("keydown", function(e){
 if(/INPUT|TEXTAREA|SELECT/.test((e.target || {}).tagName || "") || e.ctrlKey || e.metaKey || e.altKey || document.querySelector(".modal,.gzoom")) return;
 if((location.hash || "").indexOf("#nach") !== 0) return;
 if(e.key === "ArrowRight"){ NACH.step(1); e.preventDefault(); } if(e.key === "ArrowLeft"){ NACH.step(-1); e.preventDefault(); }
});

NACH.bar = function(teil){ return '<nav class="reiter gelb">' + Object.keys(NACH_TEILE).map(function(k){ return '<button class="' + (k === teil ? "on" : "") + '" onclick="go(\'nach/' + k + (k === "regeln" ? "/faehigkeiten" : "") + '\')">' + NACH_TEILE[k] + '</button>'; }).join("") + '</nav>'; };

/* ---------- Die Regeln (Entwurf 5): gelbe Seitenleiste + weißer Inhalt ---------- */
(function(){
 /* Regelübersicht S. 90 aus dem Regelspiegel als Eintrag */
 var s = MB_REGELSPIEGEL.tabs.map(function(t){
  var x = [];
  t.x.forEach(function(a){
   if(a.zw){ a.zw.forEach(function(z){ x.push({t:"h", x:z.h}, {t:"p", x:z.p}); }); return; }
   x.push({t:"h", x:a.h});
   if(a.rows) x.push({t:"tab", rows:a.rows}); else x.push({t:"p", x:a.p});
   if(a.fn) x.push({t:"p", c:"kl", x:a.fn}); if(a.fnraw) x.push({t:"p", c:"kl", x:esc(a.fnraw).replace(/\*/g, "∗")});
  });
  return {h:t.t, x:x};
 });
 s[0].p = 90;
 MB_REGELN.push({id:"uebersicht", t:"Regelübersicht", p:90, cols:2, s:s});
})();
var RGL_NAV = ["faehigkeiten","tragkraft","gewalt","rast","besser","maechte","unrein","heilig","basilisken","omen","tabellen","geschichten","katastrophen","uebersicht"];
function rglBlk(b){
 if(b.t === "cards") return '<div class="cards">' + b.x.map(function(c){ return '<div class="card"><span class="nr">' + c.n + '</span><h5>' + esc(c.h) + '</h5><p>' + md(c.b) + '</p></div>'; }).join("") + '</div>';
 if(b.t === "stufen") return '<div class="stufen">' + b.x.map(function(c){ return '<div><b>' + c[0] + '</b><span>' + c[1] + '</span></div>'; }).join("") + '</div>';
 if(b.t === "liste"){
  var lang = b.x.join("").length / b.x.length > 80, c = b.cols || 1, cls = lang ? "ls zeile" : "ls spalte";
  return '<ol class="' + cls + '" style="--c:' + c + ';--r:' + Math.ceil(b.x.length / c) + '">' + b.x.map(function(t, i){ return '<li><span class="nr">' + (i + 1) + '</span><span>' + md(t) + '</span></li>'; }).join("") + '</ol>';
 }
 return BLK([b]);
}
NACH.regeln = function(key){
 var e = MB_REGELN.filter(function(r){ return r.id === key; })[0] || MB_REGELN[0];
 var zu = !!ST.sbzu;
 var nav = RGL_NAV.map(function(id){ var r = MB_REGELN.filter(function(q){ return q.id === id; })[0]; return r ? '<button class="' + (id === e.id ? "on" : "") + '" onclick="go(\'nach/regeln/' + id + '\')">' + esc(kurz(r.t)) + '<i>' + r.p + '</i></button>' : ""; }).join("");
 var secs = e.s.map(function(s, i){
  var h = s.h ? (i === 0 ? '<h1' + (s.wide ? "" : ' class="m"') + '>' + esc(s.h) + pgl(s.p) + '</h1>' : '<span class="etikett">' + esc(s.h) + '</span>' + pgl(s.p)) : "";
  return '<section class="rs' + (s.wide ? " wide" : "") + '">' + h + s.x.map(rglBlk).join("") + '</section>';
 }).join("");
 var img = e.img ? '<div class="rimg"><img src="' + IMG(e.img) + '" alt="" onclick="zoom(this.src)"></div>' : "";
 return NACH.bar("regeln") + '<div class="rl' + (zu ? " zu" : "") + '"><aside class="sb"><button class="sbx" onclick="NACH.sb()" aria-label="Leiste einklappen">‹</button>' + nav + '</aside><div class="rc"><button class="sbo" onclick="NACH.sb()" aria-label="Leiste ausklappen">›</button>' + img + '<div class="rg" style="--cols:' + (e.cols || 1) + '">' + secs + '</div></div></div>';
};
NACH.sb = function(){ ST.sbzu = !ST.sbzu; save(); render(); };
NACH.rstep = function(d){
 var cur = (location.hash || "").split("/")[2] || "faehigkeiten", i = RGL_NAV.indexOf(cur), t = RGL_NAV[i + d]; if(t) go("nach/regeln/" + t);
};
document.addEventListener("keydown", function(e){
 if(/INPUT|TEXTAREA|SELECT/.test((e.target || {}).tagName || "") || e.ctrlKey || e.metaKey || e.altKey || document.querySelector(".modal,.gzoom")) return;
 if((location.hash || "").indexOf("#nach/regeln") !== 0) return;
 if(e.key === "ArrowDown"){ NACH.rstep(1); e.preventDefault(); } if(e.key === "ArrowUp"){ NACH.rstep(-1); e.preventDefault(); }
 if(e.key === "b") NACH.sb();
 if(e.key === "ArrowLeft"){ go("nach/welt"); e.preventDefault(); }
});
