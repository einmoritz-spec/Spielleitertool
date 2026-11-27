/* Legend in the Mist – Daten-Adapter für den Mist-Ersteller (shared/mist-ersteller.js).
   Themenbücher und Theme Kits kommen aus den vorhandenen Buchdaten (js/data/tb/*.js, deutsch); Tropes aus data-tropes.js. */
(function(){
var strip = function(t){ return String(t || "").replace(/\*\*/g, "").replace(/\*(?=\S)/g, "").replace(/\s+/g, " ").trim(); };
var MG = {origin: "Origin", adventure: "Adventure", greatness: "Greatness", variable: "Variable", fellowship: "Fellowship"};
var GRP = {Origin: "Origin-Themenbücher", Adventure: "Adventure-Themenbücher", Greatness: "Greatness-Themenbücher", Variable: "Variable-Might-Themenbücher", Fellowship: "Fellowship"};
var SRC = {core: "Core Book", dales: "The Dales", uncanny: "Uncanny Heroes"};
var books = [], kits = [];
function uniq(a){ var s = {}; return a.filter(function(x){ x = strip(x); if(!x || s[x]) return false; s[x] = 1; return true; }); }
TB_INDEX.forEach(function(ix){
  var o = TB.data[ix.key]; if(!o) return;
  var typ = MG[o.might] || "Origin", K = o.kits || [];
  var power = o.power.map(function(q, qi){
    var tags = qi === 0 ? K.map(function(k){ return k.de || k.en; }) : K.map(function(k){ return (k.pw || [])[qi - 1]; });
    return {l: q[0], q: strip(q[1]), tags: uniq(tags).slice(0, 40)};
  });
  var weak = o.weak.map(function(q, qi){ return {l: q[0], q: strip(q[1]), tags: uniq(K.map(function(k){ return (k.wk || [])[qi]; })).slice(0, 40)}; });
  books.push({id: o.key, name: o.de || o.en, en: o.en, typ: typ, grp: GRP[typ], src: "Core Book", p: o.p, intro: (o.intro || []).map(strip).slice(0, 2), concept: "", why: null, power: power, weak: weak,
    motivEx: (o.quests || []).map(function(q){ return ["", strip(q)]; }), motivNote: "", imp: (o.imps || []).map(function(v){ return [v.de || v.en, strip(v.t)]; })});
  K.forEach(function(k){ kits.push({book: o.key, name: k.de || k.en, p: k.p, power: [k.de || k.en].concat(k.pw || []), weak: k.wk || [], motiv: strip(k.q || ""), motivL: "Quest", src: k.src}); });
});
MistErsteller.start({
  sys: "legend", titel: "Legend in the Mist", logo: "../assets/logos/legend-in-the-mist.webp", zurueck: "../index.html", key: "lm_ersteller_v1",
  typen: {Origin: {l: "Origin", motiv: "Quest"}, Adventure: {l: "Adventure", motiv: "Quest"}, Greatness: {l: "Greatness", motiv: "Quest"}, Variable: {l: "Variable Might", motiv: "Quest"}, Fellowship: {l: "Fellowship", motiv: "Quest"}},
  regeln: {themen: 4, power: 3, weak: 1, extra: false, pflicht: "Title Tag (Frage A) ist Pflicht, dazu zwei weitere"},
  konzept: [], books: books, kits: kits, vorlagen: [], bogen: window.LM_BOGEN
});
})();
