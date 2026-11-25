/* Legend in the Mist – Ansicht für Household-Abenteuer (Aufbau wie bei Wake: Überblick, Szenen, Challenges) */
var LSTATE = {};
try{ LSTATE = JSON.parse(localStorage.getItem("hh_litm_v1") || "{}") || {}; }catch(e){ LSTATE = {}; }
function lsave(){ try{ localStorage.setItem("hh_litm_v1", JSON.stringify(LSTATE)); }catch(e){} }
function lmd(s){
  return esc(s).replace(/\*\*(.+?)\*\*/g, "<b>$1</b>").replace(/\{([^{}]+)\}/g, '<span class="tg">$1</span>');
}
function lplain(s){ return lmd(s); }
function lFigur(id){
  var f = (HH_TEXT["fp/figuren"] || []).filter(function(e){ return e.id === id; })[0];
  return f && f.b && f.b[0] && f.b[0].bild ? f.b[0].bild : null;
}
function lHeld(h){
  var bild = lFigur(h.id);
  return '<div class="lh"><div class="lh-k">' + (bild ? '<img src="' + IMGP(bild, 1) + '" alt="">' : '') + '<div><h3><a onclick="figurPopup(\'' + h.id + '\')">' + esc(h.name) + '</a></h3><i>' + esc(h.rolle) + '</i></div></div>' +
    '<div class="lh-t">' + h.themen.map(function(t){
      return '<div class="th"><div class="th-k"><span>' + esc(t.art) + '</span><b>' + esc(t.name) + '</b></div><div class="th-tags">' + t.tags.map(function(x){ return '<span class="tg">' + esc(x) + '</span>'; }).join("") + '<span class="tg sw">' + esc(t.schw) + '</span></div><div class="th-q">Quest: ' + esc(t.quest) + '</div></div>';
    }).join("") + '</div></div>';
}
function lVign(v){
  return '<div class="vg"><h4>' + esc(v.t) + '</h4><i>' + esc(v.sub) + '</i><ul>' + v.l.map(function(x){ return '<li>' + lmd(x) + '</li>'; }).join("") + '</ul></div>';
}
function lRaute(n){ var s = ""; for(var i = 0; i < n; i++) s += "◆"; return s; }
function lChall(key, c, sk){
  var id = "c-" + key, open = !!LSTATE[id + "-o"];
  var lims = c.limits.map(function(l, i){
    var cur = LSTATE[id + "-" + i] || 0, bx = "";
    for(var k = 1; k <= l[1]; k++) bx += '<i class="bx' + (k <= cur ? ' on' : '') + '" onclick="event.stopPropagation();lLim(\'' + id + '\',' + i + ',' + k + ',' + l[1] + ')"></i>';
    return '<div class="lim"><span>' + esc(l[0]) + '</span><div>' + bx + '</div></div>';
  }).join("");
  return '<div class="chl' + (open ? ' open' : '') + '" id="' + id + '"><div class="chl-k" onclick="lTog(\'' + id + '\')"><span class="chl-typ">' + esc(c.typ) + '</span><b>' + esc(c.name) + '</b><span class="chl-d">' + lRaute(c.dif) + '</span><span class="chl-pf">›</span></div>' +
    '<div class="chl-b"><p>' + esc(c.desc) + '</p><div class="lims">' + lims + '</div><div class="th-tags">' + c.tags.map(function(x){ return '<span class="tg">' + esc(x) + '</span>'; }).join("") + '</div>' +
    '<div class="thr">' + c.threats.map(function(t){ return '<div><h5>' + esc(t.n) + '</h5><i>' + esc(t.f) + '</i><ul>' + t.o.map(function(o){ return '<li>' + lmd(o) + '</li>'; }).join("") + '</ul></div>'; }).join("") + '</div><div class="chl-q">' + esc(c.quelle) + '</div></div></div>';
}
function lTog(id){ LSTATE[id + "-o"] = !LSTATE[id + "-o"]; lsave(); document.getElementById(id).classList.toggle("open", !!LSTATE[id + "-o"]); }
function lLim(id, i, k, max){
  var cur = LSTATE[id + "-" + i] || 0; LSTATE[id + "-" + i] = cur === k ? k - 1 : k; lsave();
  var bx = document.querySelectorAll("#" + id + " .lim")[i].querySelectorAll(".bx");
  bx.forEach(function(b, n){ b.classList.toggle("on", n < LSTATE[id + "-" + i]); });
}
function lScene(D, s, i){
  var h = '<div class="sec txt lm"><h2>' + esc(s.t) + '</h2><div class="lm-en">' + esc(s.en) + '</div>';
  if(s.vor && s.vor.length) h += '<div class="lm-vor">' + s.vor.map(function(p){ return '<p>' + lmd(p) + '</p>'; }).join("") + '</div>';
  h += '<h3>Ablauf der Szene</h3>' + s.ablauf.map(function(p){
    if(typeof p === "string") return '<p>' + lmd(p) + '</p>';
    return '<div class="lm-st"><h4>' + esc(p.h) + '</h4>' + (p.i ? '<i>' + lmd(p.i) + '</i>' : '') + '<ul>' + p.l.map(function(x){ return '<li>' + lmd(x) + '</li>'; }).join("") + '</ul></div>';
  }).join("");
  if(s.figuren && s.figuren.length) h += '<h3>Figuren</h3><div class="lm-fig">' + s.figuren.map(function(f){ return '<div><b>' + esc(f.n) + '</b>' + lmd(f.x) + '</div>'; }).join("") + '</div>';
  if(s.vign && s.vign.length) h += '<h3>Vignetten</h3><div class="vgs">' + s.vign.map(lVign).join("") + '</div>';
  if(s.ch && s.ch.length) h += '<h3>Challenges</h3><div class="chls">' + s.ch.map(function(k){ return lChall(k, D.challenges[k]); }).join("") + '</div>';
  if(s.lohn && s.lohn.length) h += '<h3>Belohnung</h3><ul class="bul">' + s.lohn.map(function(x){ return '<li>' + lmd(x) + '</li>'; }).join("") + '</ul>';
  return h + '</div>';
}
function litmView(P, bar){
  var key = P.s + "/" + P.sub + "/" + P.rest[0], D = HH_LITM[key];
  if(!D) return {bar: bar, body: lay("", '<div class="sec"><h1>Legend in the Mist</h1></div>')};
  var cur = P.rest[2] || "ueberblick", base = key + "/litm";
  var items = [["ueberblick", "Überblick"]].concat(D.szenen.map(function(s){ return [s.key, s.t]; }));
  var side = '<a class="lm-zur" onclick="go(\'' + P.s + '/' + P.sub + '/' + P.rest[0] + '\')">‹ Household-Fassung</a>' + items.map(function(x, n){
    return '<a class="' + (x[0] === cur ? 'on' : '') + '" onclick="go(\'' + base + (x[0] === "ueberblick" ? '' : '/' + x[0]) + '\')">' + (n ? '<small>Szene ' + n + '</small>' : '<small>Überblick</small>') + esc(x[1]) + '</a>';
  }).join("");
  var body;
  if(cur === "ueberblick"){
    body = '<div class="sec txt lm"><h2>' + esc(D.titel) + ' <span class="lm-bd">Legend in the Mist</span></h2><div class="lm-en">' + esc(D.en) + ' · ' + esc(D.quelle) + ' · ' + esc(D.seiten) + '</div>' +
      '<div class="lm-hero" style="background-image:url(' + IMGP(D.bild) + ')"></div><p class="lm-kurz">' + lmd(D.kurz) + '</p><h3>Ablauf</h3><ol class="lm-ab">' + D.szenen.map(function(s){ return '<li><a onclick="go(\'' + base + '/' + s.key + '\')">' + esc(s.t) + '</a></li>'; }).join("") + '</ol>' +
      '<h3>Helden</h3><div class="lhs">' + D.helden.map(lHeld).join("") + '</div></div>';
  } else {
    var n = D.szenen.map(function(s){ return s.key; }).indexOf(cur);
    body = n < 0 ? "" : lScene(D, D.szenen[n], n);
  }
  return {bar: bar, body: lay(side, body)};
}
