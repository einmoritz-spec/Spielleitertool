/* Erzeugt household/js/data/bogen-daten.js aus den deutschen Regeltexten des Tools:
   Völker (mit Erbvertrag), Nationen, Berufe mit Berufungen, Manöver, Merkmale – für Auswahllisten, Info-Fenster
   und den Zufallsbogen des Charakterbogens. Aufruf: node tools/household/bogen-daten.js */
global.window = global; global.HH_TEXT = {}; global.HH_INH = {};
const fs = require("fs"), path = require("path"), D = path.join(__dirname, "../../household/js/data");
for (const f of fs.readdirSync(D).filter(x => /^(regeln|welt-voelker)/.test(x))) (0, eval)(fs.readFileSync(path.join(D, f), "utf8"));
const T = HH_TEXT, plain = s => String(s).replace(/\*\*/g, "").replace(/\*/g, "").replace(/\{(herz|karo|kreuz|pik)\}/g, "").trim();
function boxen(b){ const o = []; (function f(x){ x.forEach(y => { if (y && y.t === "box") o.push(y); else if (y && y.t === "karten") f(y.x); }); })(b); return o; }
function kurz(t, n){ t = plain(t); if (t.length <= n) return t; const c = t.slice(0, n), i = Math.max(c.lastIndexOf(". "), c.lastIndexOf("! ")); return i > n * .35 ? c.slice(0, i + 1) : c.replace(/\s+\S*$/, "") + " …"; }
function ersterSatz(t, n){ t = plain(t); const m = /^(.{20,}?[.!?])\s/.exec(t + " "); return m && m[1].length <= n ? m[1] : kurz(t, n); }
const FARBE = {herz: "h", karo: "d", kreuz: "c", pik: "s"}, FELD = {Gesellschaft: "g", Wissenschaft: "w", Krieg: "k", "Straße": "s"};
const liste = s => plain(s).replace(/ oder /g, ", ").split(/,\s*/).map(x => x.trim()).filter(Boolean);
const R = {berufe: [], manoever: {}, merkmale: {}};
const norm = x => String(x).toLowerCase().replace(/[^a-zäöüß]/g, "");
/* Namen aus einer Aufzählung gegen bekannte Namen auflösen (auch Namen mit Komma wie „Your Loss, My Gain“) */
function namen(text, dict){
  const t = plain(text), keys = Object.keys(dict).sort((a, b) => b.length - a.length), hits = []; let rest = norm(t);
  keys.forEach(k => { const n = norm(k), i = rest.indexOf(n); if (n && i >= 0){ hits.push([norm(t).indexOf(n), k]); rest = rest.slice(0, i) + "#".repeat(n.length) + rest.slice(i + n.length); } });
  if (/Animal Companion/.test(t)) hits.push([9999, "#companion"]);
  return hits.sort((a, b) => a[0] - b[0]).map(h => h[1]);
}
const B = T["haus/regeln/berufe"];
let aktiv = null;
for (const e of B) {
  for (const x of boxen(e.b)) {
    const b = x.b, s0 = String(b[0] || "");
    if (/^\*\*Feldpunkt:\*\*/.test(s0) && /\*\*Merkmal:\*\*/.test(b[1] || "")) {
      aktiv = {n: x.h, feld: FELD[plain(s0).replace("Feldpunkt:", "").trim()], merkmal: plain(b[1]).replace("Merkmal:", "").trim(),
        manoeverRoh: plain(b[2]).replace("Wähle ein Manöver:", ""),
        fert: liste(plain(b[3]).replace("Fertigkeitspunkte:", "")), berufungen: [], seite: e.id};
      R.berufe.push(aktiv);
    } else if (/^\*\*Feldpunkt:\*\*/.test(String(b[1] || "")) && aktiv) {
      const m = /Feldpunkt:\s*(\S+).*Fertigkeiten:\s*(.*)$/.exec(plain(b[1]));
      aktiv.berufungen.push({n: x.h, feld: FELD[m[1]], fert: liste(m[2]), merkmaleRoh: plain(b[2]).replace("Wähle ein Merkmal:", ""), i: kurz(b[3] || "", 380)});
    } else if (/^(\{(herz|karo|kreuz|pik)\})+/.test(s0)) {
      R.manoever[x.h] = {f: (s0.match(/\{(herz|karo|kreuz|pik)\}/g) || []).map(y => FARBE[y.slice(1, -1)]).join(""), v: plain(s0.replace(/^(\{[a-z]+\})+/, "")), t: plain(b[1]), seite: e.id};
    } else if (e.id === "traits" || ["beetle", "bumblebee", "gecko", "mouse"].includes(e.id)) {
      const t = b.length > 1 && /^\*.*\*$/.test(s0) ? b[1] : (b.length > 1 ? b[1] : b[0]);
      R.merkmale[x.h] = {t: plain(t), k: /^\*.*\*$/.test(s0) ? plain(s0) : "", seite: e.id};
      if (["beetle", "bumblebee", "gecko", "mouse"].includes(e.id) && x.h.toLowerCase() === e.id) R.merkmale[x.h].companion = plain(b[0]);
    }
  }
}
R.berufe.forEach(b => { b.manoever = namen(b.manoeverRoh, R.manoever); delete b.manoeverRoh;
  b.berufungen.forEach(v => { v.merkmale = namen(v.merkmaleRoh, R.merkmale); delete v.merkmaleRoh; }); });
/* Animal Companions: ihre Manöver und Merkmale */
R.companions = ["Beetle", "Bumblebee", "Gecko", "Mouse"].map(n => {
  const e = B.find(y => y.id === n.toLowerCase()); const bx = boxen(e.b);
  return {n, manoever: bx.filter(x => /^(\{[a-z]+\})+/.test(String(x.b[0]))).map(x => x.h), merkmale: bx.filter(x => !/^(\{[a-z]+\})+/.test(String(x.b[0])) && x.h !== n).map(x => x.h)};
});
/* Völker mit Erbvertrag */
const V = T["haus/regeln/vertraege"], W = T["haus/welt/voelker"];
function vbox(id){ return boxen(V.find(e => e.id === id).b); }
function teil(bx, wort){ const x = bx.find(y => y.h.indexOf(wort) === 0) || bx.find(y => y.h.indexOf(wort) >= 0); if (!x) return null; return {n: x.h.replace(/^[^:]*:\s*/, "").replace(/\s*\(.*\)$/, ""), t: plain(x.b.join(" "))}; }
function welt(id){ const e = W.find(x => x.id === id); return kurz(e.b.filter(x => typeof x === "string").slice(0, 2).join(" "), 420); }
const sprites = vbox("spark-drain-draft"), mz = teil(sprites, "Gegenleistung");
R.voelker = [
  {n: "Fairy", i: welt("faeries"), v: {n: "Starchild", z: teil(vbox("starchild"), "Zugeständnis"), g: teil(vbox("starchild"), "Gegenleistung")}},
  {n: "Boggart", i: welt("boggarts"), v: {n: "Dear to the Hearth", z: teil(vbox("dear-to-the-hearth"), "Zugeständnis"), g: teil(vbox("dear-to-the-hearth"), "Gegenleistung")}},
  {n: "Sprite (Salamander)", i: welt("sprites"), v: {n: "Out of the Spark", z: teil(sprites, "Out of the Spark"), g: mz}},
  {n: "Sprite (Undine)", i: welt("sprites"), v: {n: "Out of the Drain", z: teil(sprites, "Out of the Drain"), g: mz}},
  {n: "Sprite (Sylph)", i: welt("sprites"), v: {n: "Out of the Draft", z: teil(sprites, "Out of the Draft"), g: mz}},
  {n: "Sluagh", i: welt("sluagh"), v: {n: "Revenant from Farbeyond", z: teil(vbox("revenant-from-farbeyond"), "Zugeständnis"), g: teil(vbox("revenant-from-farbeyond"), "Gegenleistung")}}
];
R.voelker.forEach(v => { v.v.g.n = v.v.g.n.replace(/\s*\(alle Sprites\)/, ""); v.v.z.k = ersterSatz(v.v.z.t, 170); v.v.g.k = ersterSatz(v.v.g.t, 150); });
R.nationen = [["Realm", "realm", "Fae"], ["Hearth", "hearth", "Hearthish"], ["Free Dominions", "dominions", "Sprigaelic"], ["Horde", "horde", "Slugan"]].map(x => ({n: x[0], i: welt(x[1]), sp: x[2]}));
R.sprachen = ["Housian", "Fae", "Hearthish", "Sprigaelic", "Slugan"];
/* Prüfung */
const fehlt = [];
R.berufe.forEach(b => { if (b.manoever.length < 2) fehlt.push("wenig Manöver " + b.n); b.manoever.forEach(m => { if (m[0] !== "#" && !R.manoever[m]) fehlt.push("Manöver " + m); }); if (!R.merkmale[b.merkmal]) fehlt.push("Merkmal " + b.merkmal);
  b.berufungen.forEach(v => { if (v.merkmale.length < 2) fehlt.push("wenig Merkmale " + v.n + ": " + JSON.stringify(v.merkmale)); }); b.berufungen.forEach(v => v.merkmale.forEach(m => { if (m[0] !== "#" && !R.merkmale[m]) fehlt.push("Merkmal " + m + " (" + v.n + ")"); })); });
console.log("Berufe", R.berufe.map(b => b.n + "(" + b.berufungen.length + ")").join(", "));
console.log("Manöver", Object.keys(R.manoever).length, "Merkmale", Object.keys(R.merkmale).length, "fehlt:", fehlt.join(" | "));
fs.writeFileSync(path.join(D, "bogen-daten.js"), "/* Erzeugt von tools/household/bogen-daten.js – nicht von Hand ändern. */\nwindow.HH_BOGEN_DATEN = " + JSON.stringify(R) + ";\n");
console.log("Größe", fs.statSync(path.join(D, "bogen-daten.js")).size);
