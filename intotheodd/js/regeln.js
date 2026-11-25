/* Bereich Regeln: Unterleiste und Seiten */
var RSUB = [["einf","Einführung"],["charakter","Charakter"],["ablauf","Spielablauf"],["beispiel","Spielbeispiel"],["nach","Nach der Expedition"],["krieg","Unternehmen & Krieg"]];
function md(s){ return esc(s).replace(/\*\*(.+?)\*\*/g, "<b>$1</b>"); }
function pgl(p){ var n = parseInt(String(p || "").replace(/\D/g, ""), 10); return n ? '<a class="pg" onclick="event.stopPropagation();openBook(\'ito_core\',' + n + ')">' + esc(p) + '</a>' : ""; }
function IMG(n){ return "img/" + n + ".webp"; }
function subbar(items, cur, area){
  return '<div class="sub">' + items.map(function(s){ return '<a class="' + (s[0] === cur ? "on" : "") + '" onclick="go(\'' + area + '/' + s[0] + '\')">' + esc(s[1]) + '</a>'; }).join("") + '</div>';
}
function head(lbl, t, p){ return '<header class="ph"><i>' + esc(lbl) + '</i><h2>' + esc(t) + (p ? pgl(p) : "") + '</h2></header>'; }
function def(t, x, p, c){ return '<div class="df" style="--c:' + (c || "var(--blue)") + '"><h4>' + esc(t) + (p ? pgl(p) : "") + '</h4><p>' + md(x) + '</p></div>'; }

function pEinf(){
  var e = ITO.einf;
  return '<div class="rp"><div class="split l"><div class="sp-img"><img src="' + IMG("einf-auge") + '" alt=""></div><div>' + head("Einführung", "Eine seltsame Welt", "S. 4") +
    '<div class="lead">' + e.welt.map(function(x, i){ return '<p class="' + (i === 0 ? "first" : "") + '">' + md(x) + '</p>'; }).join("") + '</div></div></div>' +
    '<h3 class="gh">Neu im Rollenspiel?' + pgl("S. 7") + '</h3><div class="g2">' + e.neu.map(function(n, i){ return def(n[0], n[1], "", i ? "var(--orange)" : "var(--pink)"); }).join("") + '</div></div>';
}
function startTab(s){
  var h = '<table class="st"><tr><th class="c0"></th>' + s.hp.map(function(x, i){ return '<th data-c="' + i + '">' + esc(x) + '</th>'; }).join("") + '</tr>';
  s.rows.forEach(function(r, ri){
    h += '<tr><th class="rl" data-r="' + ri + '">' + esc(r[0]) + '</th>' + r[1].map(function(c, ci){
      return '<td data-r="' + ri + '" data-c="' + ci + '">' + esc(c[0]).replace(/\(W(\d+) Sp\)/g, '(W$1 <u>Sp</u>)') + (c[1] ? '<b class="tr">' + esc(c[1]) + '</b>' : "") + '</td>';
    }).join("") + '</tr>';
  });
  return h + '</table>';
}
function pChar(){
  var c = ITO.char, a = c.ausr;
  var cards = c.werte.map(function(w, i){ return '<div class="ab" style="--c:' + ["var(--pink)","var(--orange)","var(--teal)"][i] + '"><b class="big">3W6</b><h4>' + esc(w[0]) + '<span>' + w[1] + '</span></h4><p>' + esc(w[2]) + '</p></div>'; }).join("") +
    '<div class="ab hp" style="--c:var(--blue)"><b class="big">W6</b><h4>Trefferschutz<span>hp</span></h4><p>Die Fähigkeit, lebensgefährlichem Schaden auszuweichen.</p></div>';
  return '<div class="rp"><div class="split l"><div class="sp-img"><img src="' + IMG("charakter-bastion") + '" alt=""></div><div>' + head("Kapitel 2", "Einen Charakter würfeln", "S. 8") +
    '<p class="lead one">' + esc(c.intro) + '</p><div class="g4">' + cards + '</div><div class="g2">' + c.kaesten.map(function(k, i){ return def(k[0], k[1], "", i ? "var(--orange)" : "var(--pink)"); }).join("") + '</div></div></div>' +
    '<h3 class="gh">Startpaket-Tabelle' + pgl(c.start.p) + '</h3><p class="note">' + esc(c.start.intro) + '</p><div class="stw">' + startTab(c.start) + '</div>' +
    '<h3 class="gh">Ausrüstung' + pgl(a.p) + '</h3><p class="note">' + esc(a.geld) + '</p><div class="eq">' + a.gruppen.map(function(g){
      return '<div class="eqc"><h4>' + esc(g[0]) + '</h4>' + g[1].map(function(r){ return '<div class="er"><b>' + esc(r[0]) + '</b><em>' + esc(r[1]) + '</em><span>' + esc(r[2]) + '</span></div>'; }).join("") + '</div>';
    }).join("") + '</div><p class="note">' + esc(a.gefolge) + '</p></div>';
}
function pAblauf(){
  return '<div class="rp"><div class="split r"><div>' + head("Kapitel 3", "Das Spiel spielen", "S. 15") + '</div><div class="duo"><img src="' + IMG("ablauf-distel") + '" alt=""><img src="' + IMG("ablauf-ritter") + '" alt=""></div></div>' +
    ITO.ablauf.map(function(g){ return '<h3 class="gh" style="--c:' + g.c + '">' + esc(g.g) + '</h3><div class="g3">' + g.x.map(function(x){ return def(x[0], x[1], x[2], g.c); }).join("") + '</div>'; }).join("") + '</div>';
}
var SPK = {"Spielleitung":"sl","Toku":"a","Ezekiel":"b","Uthred":"c"};
function pBeispiel(){
  var b = ITO.beispiel;
  return '<div class="rp"><div class="split r2"><div>' + head("Kapitel 5", "Spielbeispiel", b.p) + '<p class="note">' + esc(b.intro) + '</p><div class="dlg">' +
    b.z.map(function(z){ return z[0] ? '<div class="ln ' + (SPK[z[0]] || "") + '"><b>' + esc(z[0]) + '</b><p>' + md(z[1]) + '</p></div>' : '<div class="ln rg"><p>' + md(z[1]) + '</p></div>'; }).join("") +
    '</div></div><aside class="stick"><img src="' + IMG("beispiel-spinnen") + '" alt=""></aside></div></div>';
}
function pNach(){
  var n = ITO.nach;
  return '<div class="rp"><div class="banner" style="background-image:url(' + IMG("nach-brille") + ')"><div>' + head("Kapitel 6", "Nach der Expedition", "S. 36") + '</div></div><p class="lead one">' + esc(n.intro) + '</p><div class="g2">' + n.kaesten.map(function(k, i){ return def(k[0], k[1], "", i ? "var(--orange)" : "var(--pink)"); }).join("") + '</div>' +
    '<h3 class="gh">Erfahrungsstufen' + pgl("S. 37") + '</h3><div class="lv">' + n.stufen.map(function(s, i){ return '<div class="l" style="--c:' + ["var(--pink)","var(--orange)","var(--teal)","var(--blue)","#c9a24a","var(--cream)"][i] + '"><b>' + (i < 5 ? i + 1 : "∞") + '</b><h4>' + esc(s[0]) + '</h4><p>' + esc(s[1]) + '</p></div>'; }).join("") + '</div></div>';
}
function pKrieg(){
  var k = ITO.krieg;
  return '<div class="rp"><div class="split l2"><aside class="sp-img"><img src="' + IMG("unternehmen-glocke") + '" alt=""></aside><div>' + head("Kapitel 7", "Unternehmen und Krieg", "S. 39") + '<p class="lead one">' + esc(k.intro) + '</p></div></div><div class="g3 kk">' +
    k.kaesten.map(function(x, i){ return def(x[0], x[1], "", ["var(--pink)","var(--orange)","var(--teal)","var(--blue)"][i % 4]); }).join("") + '</div>' +
    '<h3 class="gh">Beispielanführer' + pgl("S. 41") + '</h3><div class="g2">' + k.anfuehrer.map(function(a, i){
      return '<div class="ld" style="--c:' + (i ? "var(--orange)" : "var(--pink)") + '"><h4>' + esc(a[0]) + '</h4><em>' + esc(a[1]) + '</em><p>' + esc(a[2]) + '</p>' + a[3].map(function(r){ return '<div class="er"><b>' + esc(r[0]) + '</b><span>' + esc(r[1]) + '</span></div>'; }).join("") + '</div>';
    }).join("") + '</div><h3 class="gh">Schiffe und Bauwerke</h3><div class="g3 sh">' + k.schiffe.map(function(s){ return '<div class="sc"><h4>' + esc(s[0]) + '<em>' + esc(s[1]) + '</em></h4><p>' + esc(s[2]) + '</p></div>'; }).join("") + '</div></div>';
}
function viewRegeln(sub){
  sub = sub || "einf";
  var P = {einf:pEinf, charakter:pChar, ablauf:pAblauf, beispiel:pBeispiel, nach:pNach, krieg:pKrieg};
  var f = P[sub] || pEinf;
  return subbar(RSUB, P[sub] ? sub : "einf", "regeln") + f();
}
/* Startpaket: Zeile und Spalte beim Überfahren hervorheben */
function startHover(){
  var t = document.querySelector(".st"); if(!t) return;
  t.addEventListener("mouseover", function(e){
    var c = e.target.closest("td,th"); [].forEach.call(t.querySelectorAll(".hl,.hr"), function(x){ x.classList.remove("hl", "hr"); });
    if(!c || !c.dataset.r && !c.dataset.c) return;
    [].forEach.call(t.querySelectorAll("[data-r],[data-c]"), function(x){ if(c.dataset.r != null && x.dataset.r === c.dataset.r) x.classList.add("hr"); if(c.dataset.c != null && x.dataset.c === c.dataset.c) x.classList.add("hl"); });
  });
  t.addEventListener("mouseleave", function(){ [].forEach.call(t.querySelectorAll(".hl,.hr"), function(x){ x.classList.remove("hl", "hr"); }); });
}
