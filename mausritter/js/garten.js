/* Abenteuer „Der verbotene Garten der Katzenmagierin“ */
var GSUB = [["einstieg","Einstieg"],["garten","Garten"],["tunnel","Fallentunnel"],["begegnungen","Begegnungen"],["schaetze","Schätze"],["ausklang","Ausklang"]];
function viewGarten(tab, ort){
  var G = MR.garten, t = tabCur(GSUB, tab), h = "";
  if(t === "einstieg"){
    h = seite("Einstieg", G.einstieg.p, '<div class="txt"><img class="fl" src="' + IMG("ill-tor") + '" alt="">' +
      G.einstieg.vorlese.map(function(x){ return '<p class="vl">' + md(x) + '</p>'; }).join("") +
      '<h3>Die Bootsfahrt</h3>' + G.einstieg.szene.map(function(x){ return '<p>' + md(x) + '</p>'; }).join("") + liste(G.einstieg.szeneUl) + '<p>' + md(G.einstieg.ende) + '</p></div>');
  }else if(t === "garten"){
    var items = G.orte.map(function(o){ return {nr:o[0], name:o[1], o:o}; }), pins = {};
    G.orte.forEach(function(o){ pins[o[0]] = o[2]; });
    h = kvMap({img:"ab/garten-karte", pins:pins, items:items, cur:ort, area:"garten", tab:"garten",
      unter:'<div class="wet"><h4>Wetter ' + pg(G.wetter.p) + '</h4>' + md(G.wetter.t) + liste(G.wetter.ul) + '</div>',
      body:function(s){ var o = s.o; return ortKopf(o[0], o[1], o[3]) + '<img class="vg" src="' + IMG("ort/ort-" + o[0]) + '" alt="">' + '<p class="ein">' + md(o[4]) + '</p>' + liste(o[5]) + '<div class="nz">' + notiz("garten/ort/" + o[0]) + '</div>'; }});
  }else if(t === "tunnel"){
    var T = G.tunnel;
    h = seite("Fallentunnel", T.p, '<div class="tun"><img src="' + IMG("ort/fallentunnel") + '" alt=""><div><p class="ein2">' + md(T.t) + '</p>' + liste(T.ul) +
      '<div class="kam">' + T.kammern.map(function(k){ return '<div class="kc"><span class="sy">' + esc(k[2]) + '</span><h4>' + esc(k[0]) + '. ' + esc(k[1]) + '</h4><p>' + md(k[3]) + '</p></div>'; }).join("") + '</div>' +
      '<div class="box"><h4>Schatzkammer</h4><p>' + md(T.schatz) + '</p></div></div></div>');
  }else if(t === "begegnungen"){
    h = seite("Begegnungen", G.begegnung.p, '<div class="txt">' + G.begegnung.text.map(function(x){ return '<p>' + md(x) + '</p>'; }).join("") + '</div>' + w6(G.begegnung.tab, "W6", "Begegnung") +
      '<h3 class="gh">Wesen im Garten</h3><div class="wesen">' + G.wesen.map(wesenCard).join("") + '</div>', true);
  }else if(t === "schaetze"){
    h = seite("Schätze", G.schaetze.p, '<div class="txt"><p>' + md(G.schaetze.text) + '</p></div><div class="sch">' + G.schaetze.tab.map(function(s, i){
      return '<div class="sc"><div><span class="n">' + (i + 1) + '</span><p>' + md(s[0]) + '</p></div>' + (s[1] ? '<img src="' + IMG("ding/" + s[1]) + '" alt="">' : "<span></span>") + '</div>'; }).join("") + '</div>', true);
  }else{
    h = seite("Ausklang", G.ausklang.p, '<div class="txt"><p class="vl">' + md(G.ausklang.t) + '</p><img class="fl" src="' + IMG("ill-lager") + '" alt=""></div>');
  }
  return abl("garten", "Der verbotene Garten", GSUB, t, "garten/" + t) + h;
}
