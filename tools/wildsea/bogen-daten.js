/* Erzeugt wildsea/js/data/bogen-daten.js aus den Charakter-Daten (Blutlinien, Herkünfte, Posten, fertige Charaktere).
   Aufruf: node tools/wildsea/bogen-daten.js */
global.window = global; global.WS_NACH = {};
const fs = require("fs"), path = require("path");
const D = path.join(__dirname, "../../wildsea/js/data");
const fl = fs.readdirSync(D).filter(x => /^charaktere-|^pregens/.test(x)).sort((a, b) => a === "charaktere-h.js" ? -1 : b === "charaktere-h.js" ? 1 : a < b ? -1 : 1);
for (const f of fl) (0, eval)(fs.readFileSync(path.join(D, f), "utf8"));
const L = WS_NACH.charaktere;
const plain = t => String(t || "").replace(/\*/g, "");
function kurz(t){
  t = plain(t); if (t.length <= 430) return t;
  const cut = t.slice(0, 430), i = Math.max(cut.lastIndexOf(". "), cut.lastIndexOf("! "));
  return i > 120 ? cut.slice(0, i + 1) : cut.replace(/\s+\S*$/, "") + " …";
}
function teile(v){ const o = []; v.split(", ").forEach(x => { if (o.length && /^[a-zäöü]/.test(x)) o[o.length - 1] += ", " + x; else o.push(x); }); return o; }
function kit(s){
  const out = {}; let go = false;
  for (const b of s.b) {
    if (b.h === "Schnellstart-Kit") { go = true; continue; }
    if (go && b.tab) {
      for (const z of b.tab.z) {
        const k = z[0], v = z[1];
        if (/^Stärke/.test(k)) out.e = teile(v);
        else if (/– Fertigkeiten$/.test(k)) out.sk = teile(v);
        else if (/– Sprachen$/.test(k)) out.la = teile(v);
        else if (/– Bergegut$/.test(k)) out.bergegut = teile(v);
        else if (/– Proben$/.test(k)) out.proben = teile(v);
        else if (/– Flüstern$/.test(k)) out.fluester = teile(v);
        else if (/– Seekarten$/.test(k)) out.seekarten = teile(v);
        else if (/^Antrieb/.test(k)) out.antrieb = v.split(" · ");
        else if (/^Morast/.test(k)) out.morast = v.split(" · ");
        else console.error("Unbekannte Kit-Zeile", s.id, k);
      }
    }
  }
  return out;
}
function aspekte(s){
  const o = []; let go = false;
  for (const b of s.b) {
    if (b.h === "Aspekte") { go = true; continue; }
    if (b.h === "Schnellstart-Kit") break;
    if (go && b.c && b.x) {
      const m = /^(\d)er-Leiste · ([^\n]+)\n([\s\S]*)$/.exec(b.x);
      if (!m) { console.error("Aspekt ohne Kopf", s.id, b.c); continue; }
      o.push([b.c, +m[1], m[2], m[3]]);
    }
  }
  return o;
}
const arten = {blut:"Blutlinien", herkunft:"Herkünfte", posten:"Posten"}, R = {};
for (const key in arten) {
  R[key] = L.filter(s => s.k === arten[key]).map(s => {
    const o = {n:s.t, q:s.q || "", i:kurz(s.b[0].a), k:kit(s), a:aspekte(s)};
    if (!o.k.e || !o.a.length) console.error("Unvollständig:", key, s.id, !!o.k.e, o.a.length);
    return o;
  });
}
/* Namen aus den Zitaten der Beispielfiguren („– Name, Blutlinie-Posten“) */
const namen = {}; 
L.forEach(s => s.b.forEach(b => { if (b.erz) { const m = /–\s+([^,–]+),\s+[A-Za-zÄÖÜäöü-]+(?:-[A-Za-zÄÖÜäöü]+)?\s*$/.exec(b.erz.trim()); if (m) namen[m[1].trim()] = 1; } }));
R.namen = Object.keys(namen).filter(n => !/^Auf /.test(n));
const pcs = L.filter(s => s.k === "Fertige Charaktere").map(s => { const pc = s.b.filter(b => b.pc).map(b => b.pc)[0]; if (!pc) return null; const c = Object.assign({}, pc); delete c.bild; delete c.bogen; delete c.bw; delete c.bh; return {id:s.id, t:s.t, pc:c}; }).filter(Boolean);
R.pcs = pcs;
/* Prüfung: Namen der Fertigen Charaktere gegen die Auswahl */
pcs.forEach(p => { ["blut", "herkunft", "posten"].forEach(k => { if (p.pc[k] && !R[k].some(x => x.n === p.pc[k])) console.error("PC-Wert unbekannt:", p.t, k, p.pc[k]); }); });
fs.writeFileSync(path.join(D, "bogen-daten.js"), "/* Erzeugt von tools/wildsea/bogen-daten.js – nicht von Hand ändern. Blutlinien/Herkünfte/Posten mit Kurzinfo, Schnellstart-Kit und Aspekten; fertige Charaktere. */\nwindow.WS_BOGEN = " + JSON.stringify(R) + ";\n");
console.log("ok", Object.keys(R).map(k => k + ":" + R[k].length).join(" "), fs.statSync(path.join(D, "bogen-daten.js")).size);
console.log(R.namen.join(" | "));
