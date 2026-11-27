/* City of Mist – Daten-Adapter für den Mist-Ersteller (shared/mist-ersteller.js).
   Liest die Themenbücher aus den vorhandenen Buchdaten (Grundregelwerk, Zusatzthemen, Shadows & Showdowns, Local Legends). */
(function(){
var strip = function(t){ return String(t || "").replace(/\*\*/g, "").replace(/\*(?=\S)/g, "").replace(/\s+/g, " ").trim(); };
var cap = function(t){ t = String(t || "").toLowerCase(); return t.charAt(0).toUpperCase() + t.slice(1); };
var books = [];
/* Themenbuch mit {fq}-Einträgen: Konzeptfrage, Stärken-/Schwächenfragen, Mysterium bzw. Identität */
function parseFq(e, typ, grp, src){
  var body = e.body || [], intro = [], sec = "", power = [], weak = [], ex = [], note = "", why = null, concept = "", motivName = "", imp = [];
  body.forEach(function(x, i){
    if(typeof x === "string"){
      if(/^##\s/.test(x)){ sec = x.replace(/^##\s*/, ""); return; }
      if(/^###/.test(x)) return;
      if(!sec){ intro.push(strip(x)); return; }
      if(/^Konzept/.test(sec) && !concept && !/^-/.test(x)) concept = strip(x);
      if(/^(Identität|Mysterium)/.test(sec)){ var m = /^-\s*\(([^)]+)\)\s*(.+)$/.exec(x); if(m) ex.push([m[1], strip(m[2])]); else if(/^Wenn du im Widerspruch|^Schreib|^Schreibe/.test(x) && !note) note = strip(x); }
      return;
    }
    if(x.fq){
      if(x.fq.l === "?"){ why = {q: strip(x.fq.q), opts: [], flesh: ""}; var k = i + 1; while(typeof body[k] === "string" && /^-\s/.test(body[k])){ why.opts.push(strip(body[k].replace(/^-\s*/, ""))); k++; } return; }
      var q = {l: x.fq.l, q: strip(x.fq.q), tags: (x.fq.tags || []).map(strip)};
      if(/^Fragen zu den Stärken/.test(sec)) power.push(q); else if(/^Fragen zu den Schwächen/.test(sec)) weak.push(q);
    }
    if(x.kv && /^Verbesserungen/.test(sec)) x.kv.forEach(function(r){ imp.push([strip(r[0]), strip(r[1])]); });
    if(x.box && x.box.k === "frage" && !why){ why = {q: strip(x.box.t), opts: (x.box.b || []).filter(function(b){ return typeof b === "string"; }).map(function(b){ return strip(b.replace(/^-\s*/, "")); }), flesh: ""}; }
  });
  if(!power.length || !weak.length) return;
  books.push({id: e.name, name: e.name, typ: typ, grp: grp, src: src, p: e.p, intro: intro.slice(-3), concept: concept, why: why, power: power, weak: weak, motivEx: ex, motivNote: note, imp: imp});
}
/* Shadows & Showdowns: Listen mit „**A – FRAGE** Beispiel, Beispiel“ */
function parseSS(o){
  var L = o.listen || [], fr = function(list){ return ((list && list.items) || []).map(function(t){ var m = /^\*\*([A-J]) – (.+?)\*\*\s*(.*)$/.exec(t); return m ? {l: m[1], q: cap(m[2]), tags: m[3] ? m[3].split(/,\s+/).map(strip) : []} : null; }).filter(Boolean); };
  var power = fr(L[0]), weak = fr(L[1]); if(!power.length || !weak.length) return;
  var ex = ((L[3] && L[3].items) || []).map(function(t){ return strip(t); }).filter(function(t){ return /^[„"»]/.test(t); }).map(function(t){ return ["", t]; });
  var IL = L.filter(function(l){ return /^Verbesserungen/.test(l.t); })[0], imp = ((IL && IL.items) || []).map(function(t){ var m = /^\*\*(.+?):?\*\*:?\s*(.*)$/.exec(t); return m ? [strip(m[1]).replace(/:$/, ""), strip(m[2])] : [strip(t), ""]; });
  books.push({id: o.name, name: o.name, typ: o.tb, grp: o.tb + " · Shadows & Showdowns", src: "Shadows & Showdowns", p: o.p, intro: (o.text || []).filter(function(t){ return typeof t === "string"; }).slice(0, 2).map(strip), concept: "", why: null, power: power, weak: weak, motivEx: ex, motivNote: "", imp: imp});
}
(CM_RW["themenbuecher-mythos"] || []).forEach(function(e){ parseFq(e, "Mythos", "Mythos · Grundregelwerk", "Grundregelwerk"); });
(CM_RW["themenbuecher-logos"] || []).forEach(function(e){ parseFq(e, "Logos", "Logos · Grundregelwerk", "Grundregelwerk"); });
(CM_RW["extra"] || []).forEach(function(e){ parseFq(e, "Extra", "Zusätzliche Themen", "Grundregelwerk"); });
(window.CM_TBLL || []).forEach(function(e){ parseFq(e, e.typ === "Logos" ? "Logos" : "Mythos", e.typ + " · Local Legends", "Local Legends"); });
((window.CM_ORTE && CM_ORTE.sp_buecher) || []).filter(function(o){ return o.tb; }).forEach(parseSS);
/* Archetypen (Grundregelwerk S. 70–73): „**Buch** (Hinweis) + …“ */
var SYN = {"Ausbildung": "Training"};
function refs(t){ return t.split(/\s\+\s/).map(function(x){ var m = /^\*\*(.+?)\*\*\s*(?:\((.*)\))?\s*$/.exec(x.trim()); if(!m) return null; var n = SYN[m[1]] || m[1]; return {book: n, hint: m[2] || ""}; }).filter(Boolean); }
var liste = [];
function archetypen(key, teil){ ((CM_RW.erschaffung || []).filter(function(e){ return e.name === key; })[0] || {body: []}).body.forEach(function(x){ if(x && x.kv) x.kv.forEach(function(r){ var th = refs(r[1]).filter(function(t){ return books.some(function(b){ return b.id === t.book; }); }); if(th.length) liste.push({id: teil + ":" + r[0], teil: teil, name: r[0], themes: th}); }); }); }
archetypen("Mythos-Archetypen", "a"); archetypen("Logos-Archetypen", "b");
MistErsteller.start({
  sys: "cityofmist", titel: "City of Mist", logo: "../assets/logos/city-of-mist.webp", zurueck: "index.html#rw/charakter", key: "cm_ersteller_v1",
  typen: {Mythos: {l: "Mythos", motiv: "Mysterium"}, Logos: {l: "Logos", motiv: "Identität"}, Extra: {l: "Zusatz", motiv: "Mysterium oder Identität", nurWennBenutzt: true}},
  regeln: {themen: 4, power: 3, weak: 1, extra: true, pflicht: "Frage A ist Pflicht, dazu zwei weitere"},
  stufe: function(n){ if((n.Mythos || 0) + (n.Logos || 0) < 4) return ""; return {1: "Berührt", 2: "Grenzgänger:in", 3: "Legende"}[n.Mythos] || ""; },
  zufallTypen: [["Mythos", "Logos", "Logos", "Logos"], ["Mythos", "Mythos", "Logos", "Logos"], ["Mythos", "Mythos", "Mythos", "Logos"]], konzept: ["Wähle vier Themen: mindestens ein Mythos- und ein Logos-Thema."], books: books, kits: [], vorlagen: [], bogen: window.CM_BOGEN,
  kombi: {titel: "Archetypen kombinieren", hinweis: "Grundregelwerk S. 69–73: je ein Mythos- und ein Logos-Archetyp, dann die Stufe", a: "Mythos-Archetyp", b: "Logos-Archetyp", aKurz: "Mythos", bKurz: "Logos", liste: liste,
    stufen: [{l: "Berührt", n: [1, 3]}, {l: "Grenzgänger:in", n: [2, 2]}, {l: "Legende", n: [3, 1]}]}
});
})();
