/* Otherscape – Daten-Adapter für den Mist-Ersteller (shared/mist-ersteller.js). Alles aus den vorhandenen Buchdaten (Metro S. 185–251). */
(function(){
var TB = window.OS_THEMEBOOKS, DT = window.OS_TBDETAIL, L = "ABCDEFGHIJ".split("");
var books = Object.keys(TB).map(function(n){
  var t = TB[n], d = DT[n] || {}, id = n;
  return {id: id, name: n, typ: t.typ, p: t.p, intro: t.intro, concept: t.concept, why: d.why,
    power: (d.power || []).map(function(q, i){ return {l: L[i], q: q}; }), weak: (d.weak || []).map(function(q, i){ return {l: L[i], q: q}; }),
    motivEx: (d.ident && d.ident.ex) || [], motivNote: (d.ident && d.ident.note) || ""};
});
var kits = [], lbl = {Self: "Identität", Mythos: "Ritual", Noise: "Trieb"};
function addKit(k){ var b = TB[k.grp]; if(!b) return; kits.push({book: k.grp, name: k.name, p: k.p, power: k.power, weak: k.weak, motiv: k.ident || k.itch || "", motivL: lbl[b.typ]}); }
Object.keys(window).filter(function(k){ return /^OS_KITS_/.test(k); }).forEach(function(k){ window[k].kits.forEach(addKit); });
(window.OS_KITS && OS_KITS.kits || []).forEach(addKit);
function ref(n){ var m = /^(.*) \((.*)\)$/.exec(n); return m ? {book: m[2], kit: m[1]} : {book: n, kit: ""}; }
var vorlagen = [];
OS_ARCHETYPEN.gruppen.forEach(function(g){ g.archetypen.forEach(function(a){
  vorlagen.push({id: a.id, gruppe: g.name, name: a.name, text: a.text, p: a.p, themes: a.fest.map(ref), wahl: a.wahl.map(ref), ausr: a.ausruestung});
}); });
var C = OS_CHARAKTERERSTELLUNG;
MistErsteller.start({
  sys: "otherscape", titel: "Otherscape", logo: "img/logo.webp", zurueck: "index.html#/charaktererstellung", key: "os_ersteller_v1",
  typen: {Self: {l: "Selbst", motiv: "Identität"}, Mythos: {l: "Mythos", motiv: "Ritual", pre: "Ich muss …"}, Noise: {l: "Noise", motiv: "Trieb"}},
  regeln: {themen: 4, power: 3, weak: 1, extra: true, pflicht: "Frage A ist Pflicht, dazu zwei weitere"},
  konzept: C.schritte[0].leitfragen, books: books, kits: kits, vorlagen: vorlagen
});
})();
