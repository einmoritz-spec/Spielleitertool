// Lädt Regelwerk-Datendateien in einer Sandbox, validiert die Struktur und schreibt den Klartext als JSON.
// Aufruf: node flatten.js <ausgabe.json> <datei.js> [weitere.js …]
const fs = require('fs'), vm = require('vm');
const out = process.argv[2], files = process.argv.slice(3);
const CM_RW = {};
const ctx = { CM_RW, rwAdd(id, arr){ (CM_RW[id] = CM_RW[id] || []).push(...arr); } };
vm.createContext(ctx);
const errs = [];
for (const f of files) { try { vm.runInContext(fs.readFileSync(f, 'utf8'), ctx, { filename: f }); } catch (e) { errs.push(f + ': ' + e.message); } }
const BOXK = ['regel', 'beispiel', 'hinweis', 'frage'];
function str(s, where){ if (typeof s !== 'string') errs.push(where + ': kein String'); return typeof s === 'string' ? s : ''; }
function blocks(bs, where, acc){
  if (!Array.isArray(bs)) { errs.push(where + ': Block-Liste fehlt'); return; }
  bs.forEach((b, i) => {
    const w = where + '[' + i + ']';
    if (typeof b === 'string') { acc.push(b.replace(/^(##? |### |- |> |\d+\. )/, '')); return; }
    if (!b || typeof b !== 'object') { errs.push(w + ': ungültiger Block'); return; }
    const k = Object.keys(b)[0];
    if (k === 'box') { const x = b.box; if (!BOXK.includes(x.k)) errs.push(w + ': box.k ungültig'); acc.push(str(x.t, w + '.t')); blocks(x.b, w + '.b', acc); }
    else if (k === 'tbl') { const x = b.tbl; (x.h || []).forEach(h => acc.push(h)); (x.r || []).forEach(r => r.forEach(c => acc.push(String(c)))); if (x.t) acc.push(x.t); if (!x.r || !x.r.length) errs.push(w + ': tbl ohne Zeilen'); }
    else if (k === 'fq') { const x = b.fq; acc.push(x.l || '', str(x.q, w + '.q')); (x.tags || []).forEach(t => acc.push(t)); }
    else if (k === 'tg') { const x = b.tg; if (x.t) acc.push(x.t); (x.i || []).forEach(t => acc.push(t)); }
    else if (k === 'kv') { b.kv.forEach(p => { if (p.length !== 2) errs.push(w + ': kv-Paar'); acc.push(p[0], p[1]); }); }
    else if (k === 'dlg') { b.dlg.forEach(p => { if (p.length !== 2) errs.push(w + ': dlg-Paar'); acc.push(p[0], p[1]); }); }
    else errs.push(w + ': unbekannter Blocktyp ' + k);
  });
}
const result = {};
for (const id of Object.keys(CM_RW)) {
  result[id] = CM_RW[id].map((e, n) => {
    const w = id + '#' + n + ' ' + (e.name || '?'); const acc = [];
    if (!e.name) errs.push(w + ': name fehlt'); else acc.push(e.name);
    if (!Number.isInteger(e.p)) errs.push(w + ': p (Seite) fehlt');
    if (e.sub) acc.push(e.sub);
    blocks(e.body || [], w + '.body', acc); if (e.aside) blocks(e.aside, w + '.aside', acc);
    if (!(e.body && e.body.length) && !(e.aside && e.aside.length)) errs.push(w + ': leer');
    return { name: e.name, p: e.p, pe: e.pe, text: acc.join('\n') };
  });
}
fs.writeFileSync(out, JSON.stringify(result));
console.log(errs.length ? 'FEHLER:\n' + errs.join('\n') : 'Struktur OK: ' + Object.keys(result).map(k => k + '=' + result[k].length + ' Karten').join(', '));
process.exit(errs.length ? 1 : 0);
