/* Erzeugt compass/js/data/folgen.js (Kurzindex aller Folgen für Übersicht und Folgen-Leiste).
   Aufruf im Repo-Wurzelordner: node plan/compass/folgen-index.js */
global.window = global; global.BC_EP = {};
const fs = require("fs"), D = "compass/js/data/";
for(const f of fs.readdirSync(D).filter(f => /^ep-.*\.js$/.test(f))) eval(fs.readFileSync(D + f, "utf8"));
const ORT = ["wilderort", "wilder_ort", "ort", "insel", "geheimnissee", "museum", "versteck", "kleinstadt", "basis"];
const out = {};
for(const [id, E] of Object.entries(BC_EP)){
  const cx = E.ctx || [], v = k => (cx.find(c => c.k === k) || {}).v || "";
  const o = ORT.map(v).find(Boolean) || "";
  out[id] = {t: E.t, n: (E.scenes || []).length, s: E.s || 0, img: E.img || "", ort: o, riv: v("rivale")};
}
fs.writeFileSync(D + "folgen.js", "/* Kurzindex der Folgen – erzeugt mit plan/compass/folgen-index.js, nicht von Hand ändern */\nvar BC_FOLGEN = " + JSON.stringify(out, null, 0).replace(/\},"/g, '},\n"') + ";\n");
