/* Baut die Themenbücher-Daten für Legend in the Mist: eine Datei je Themenbuch (js/data/tb/<key>.js) + Index.
   Quelle sind die vorhandenen deutschen Texte (keine Doppelpflege):
     js/data/lm/themenbuecher*.js  Core Book S. 92–141 (Fragen, Quests, Verbesserungen, Kits)
     js/data/lm/dales-b*.js        The Dales: People-Kits je Tal, Dalish-Hero-Tropes
     js/data/lm/dales-c*.js        The Dales: Kits je Themenbuch, Oldways-Magie-Kits, Stranger-Tropes
     js/data/lm/jenseits-b*.js     The Dales: Uncanny-Hero-Kits und -Tropes, Craggen Folk Magic
   Aufruf: node tools/lm/build-tb.js */
const fs = require("fs"), vm = require("vm"), path = require("path");
const ROOT = path.join(__dirname, "..", "..");
const D = {};
const ctx = { lmAdd: (id, c) => { (D[id] = D[id] || []).push(...c); } };
vm.createContext(ctx);
const LM = path.join(ROOT, "js/data/lm");
for (const f of fs.readdirSync(LM).sort()) if (/^(themenbuecher|dales-b|dales-c|jenseits-b)/.test(f)) vm.runInContext(fs.readFileSync(path.join(LM, f), "utf8"), ctx);

const BOOKS = [
  ["circumstance","origin","Circumstance"],["devotion","origin","Devotion"],["past","origin","Past"],["people","origin","People"],
  ["personality","origin","Personality"],["skill_or_trade","origin","Skill or Trade"],["trait","origin","Trait"],
  ["duty","adventure","Duty"],["influence","adventure","Influence"],["knowledge","adventure","Knowledge"],
  ["prodigious","adventure","Prodigious Ability"],["relic","adventure","Relic"],["uncanny","adventure","Uncanny Being"],
  ["destiny","greatness","Destiny"],["dominion","greatness","Dominion"],["mastery","greatness","Mastery"],["monstrosity","greatness","Monstrosity"],
  ["companion","variable","Companion"],["magic","variable","Magic"],["possessions","variable","Possessions"],
  ["fellowship","fellowship","Fellowship"]
];
const EN2KEY = {}; BOOKS.forEach(b => { EN2KEY[b[2].toLowerCase()] = b[0]; });
Object.assign(EN2KEY, { "possession":"possessions", "prodigious":"prodigious", "uncanny":"uncanny", "skill":"skill_or_trade" });
const keyOf = en => EN2KEY[String(en).trim().toLowerCase()] || null;

const out = {}; BOOKS.forEach(([k, m, en]) => out[k] = { key:k, might:m, en, de:"", p:0, pe:0, sub:"", intro:[], concept:[], power:[], weak:[], quests:[], imps:[], kits:[], tropes:[] });
const splitName = s => { const m = /^(.*?)\s*\(([^()]*)\)\s*$/.exec(s); return m ? { en:m[1].trim(), de:m[2].trim() } : { en:s.trim(), de:"" }; };
const isStr = b => typeof b === "string";

/* ---------- 1. Core Book ---------- */
let extra = {};
for (const e of D.themenbuecher) {
  const m = /^(Origin|Adventure|Greatness|Variable-Might|Fellowship)-Themebook: (.+)$/.exec(e.name);
  if (!m) { extra[/General Store/.test(e.name) ? "laden" : "fellowship_kapitel"] = e; continue; }
  const nm = splitName(m[2]), k = keyOf(nm.en) || keyOf(nm.en.split(" ")[0]);
  if (!k) throw new Error("Unbekanntes Themenbuch: " + e.name);
  const o = out[k]; o.de = nm.de || nm.en; o.p = e.p; o.pe = e.pe || e.p; o.sub = e.sub || "";
  let sec = "intro";
  for (const b of e.body) {
    if (isStr(b) && b.startsWith("## ")) { const h = b.slice(3); sec = /Power/.test(h) ? "power" : /Weakness/.test(h) ? "weak" : /Quest/.test(h) ? "quests" : /Verbesserung/.test(h) ? "imps" : /Kits/.test(h) ? "kits" : "x:" + h; continue; }
    if (sec === "intro") { if (isStr(b) && b.startsWith("- ")) o.concept.push(b.slice(2)); else if (isStr(b)) o.intro.push(b); else throw new Error("intro " + k); }
    else if (sec === "power" || sec === "weak") { if (b.fq) o[sec].push([b.fq.l, b.fq.q]); }
    else if (sec === "quests") { if (isStr(b)) o.quests.push(b.replace(/^- /, "")); }
    else if (sec === "imps") { if (b.kv) b.kv.forEach(([n, t]) => { const s = splitName(n); o.imps.push({ en:s.en, de:s.de, t }); }); }
    else if (sec === "kits") {
      if (b.kv) b.kv.forEach(([n, t]) => {
        const s = splitName(n), mm = /\*\*Stärken:\*\* (.*?) · \*\*Schwächen:\*\* (.*?) · \*\*Quest:\*\* (.*)$/.exec(t);
        if (!mm) throw new Error("Kit-Format " + n);
        o.kits.push({ en:s.en, de:s.de, src:"core", book:"core", p:o.pe, pw:splitTags(mm[1]), wk:splitTags(mm[2]), q:mm[3].trim() });
      });
    } else throw new Error("Unerwarteter Abschnitt " + sec + " in " + k);
  }
}
function splitTags(s){ const r = []; let cur = "", q = 0; for (const ch of s) { if (ch === "„") q++; if (ch === "“" && q) q--; if (ch === "," && !q) { r.push(cur.trim()); cur = ""; } else cur += ch; } if (cur.trim()) r.push(cur.trim()); return r; }

/* ---------- 2. Kits aus The Dales (dales-b, dales-c, jenseits-b) ---------- */
const descByName = {};
// Kits, die im Buch unter der Überschrift eines anderen Themenbuchs stehen (laut Liste The Dales S. 109)
const KIT_BOOK = { "Keeper of the Oldways":"devotion" };
function scanKits(e, src, defaultBook) {
  const body = e.body.concat(e.aside || []); let kit = null, lastDesc = {}, inKitSec = false, h3name = null;
  const flush = () => { if (kit && KIT_BOOK[kit.en]) kit.books = [KIT_BOOK[kit.en]]; if (kit && kit.pw.length) { kit.books.forEach(bk => out[bk].kits.push(Object.assign({}, kit, { books:undefined }))); } kit = null; };
  for (let i = 0; i < body.length; i++) {
    const b = body[i];
    if (b && b.box && /^Theme Kit: (\w+) – (.+)$/.test(b.box.t)) {           // People-Kits je Tal
      flush(); const mm = /^Theme Kit: (\w+) – (.+)$/.exec(b.box.t), bk = keyOf(mm[1]);
      const ls = b.box.b, k2 = { en:mm[2], de:"", src, book:"wake", p:e.p, pw:[], wk:[], q:"", imp:null, books:[bk] };
      ls.forEach(x => { if (/^\*[^*]/.test(x) && !k2.pw.length) k2.pw = splitTags(x.replace(/^\*|\*$/g, "")); else if (/^\*[^*]/.test(x)) k2.wk = splitTags(x.replace(/^\*|\*$/g, "")); else if (x.startsWith("> ")) k2.q = x.slice(2); else { const im = /^\*\*(.+?):?\*\*:?\s*(.*)$/.exec(x); if (im) k2.imp = { n:im[1].replace(/:$/, ""), t:im[2] }; } });
      kit = k2; flush(); continue;
    }
    if (isStr(b) && /^#{2,3} /.test(b)) {
      const h = b.replace(/^#{2,3} /, "");
      if (/^Theme Kits$/.test(h)) { flush(); inKitSec = true; continue; }
      if (/^Theme Kit-Werte$/.test(h)) { flush(); inKitSec = false; continue; }
      const mm = /^(?:Theme Kit: )?(.+?)\s*\(([A-Za-z ,]+)\)\s*$/.exec(h);
      const bks = mm ? mm[2].split(",").map(x => keyOf(x)).filter(Boolean) : [];
      flush();
      if (mm && bks.length) { const s = splitName(mm[1]); kit = { en:s.en, de:s.de, src, book:"wake", p:e.p, pw:[], wk:[], q:"", imp:null, desc:descByName[s.en] || "", books:bks }; }
      else if (defaultBook && /^## /.test(b)) { const s = splitName(h); kit = { en:s.en, de:s.de, src, book:"wake", p:e.p, pw:[], wk:[], q:"", imp:null, books:[defaultBook] }; }
      else { h3name = splitName(h).en; if (inKitSec) descByName[h3name] = ""; }
      continue;
    }
    if (!kit) { if (inKitSec && h3name && isStr(b) && !b.startsWith("- ")) descByName[h3name] = (descByName[h3name] ? descByName[h3name] + "\n\n" : "") + b; continue; }
    if (b && b.tg) { if (b.tg.k === "pw") kit.pw = b.tg.i; else if (b.tg.k === "wk") kit.wk = b.tg.i; continue; }
    if (isStr(b)) {
      if (b.startsWith("> ")) kit.q = b.slice(2);
      else if (/^\*\*Quest:\*\*/.test(b)) kit.q = b.replace(/^\*\*Quest:\*\*\s*/, "");
      else { const im = /^\*\*(.+?)\*\*\s*(.*)$/.exec(b); if (im && !kit.imp) kit.imp = { n:im[1].replace(/:$/, ""), t:im[2] }; else if (!kit.pw.length) kit.desc = (kit.desc ? kit.desc + "\n\n" : "") + b; }
    }
  }
  flush();
}
for (const id of ["dales-b", "dales-c", "jenseits-b"]) for (const e of (D[id] || [])) {
  const m = /^Theme Kits: (.+)$/.exec(e.name), src = id === "jenseits-b" ? "uncanny" : "dales";
  let def = null; if (m && !/ und |Craggen|Stormhelm|Twilight|Fallen|Wanehunger/.test(m[1])) def = keyOf(m[1].replace(/ \(Fortsetzung\)/, ""));
  scanKits(e, /Craggen Folk Magic/.test(e.name) ? "uncanny" : src, def);
}
// Oldways-Beschreibungen nachtragen (stehen vor den Werten)
BOOKS.forEach(([k]) => out[k].kits.forEach(kt => { if (!kt.desc && descByName[kt.en]) kt.desc = descByName[kt.en]; }));

/* ---------- 3. Tropes, die Kits eines Themenbuchs verwenden ---------- */
const clean = s => s.replace(/^[-\s]+/, "");
const REF = /([^;,()\n*:]+?)\s*\(([A-Za-z ]+?),\s*(?:S\.|CBI)\s*(\d+)\)/g;
function addRefs(text, trope, src, p, choose) {
  let m; REF.lastIndex = 0;
  while ((m = REF.exec(text))) { const bk = keyOf(m[2]); if (!bk) continue; out[bk].tropes.push({ t:trope, kit:clean(m[1].trim()), src, p, wahl:!!choose }); }
}
for (const e of (D["dales-b"] || [])) if (/Tropes/.test(e.name)) {
  let tr = null;
  for (const b of e.body) { if (isStr(b) && b.startsWith("### ")) tr = b.slice(4); else if (tr && b && b.tg && b.tg.k === "n") b.tg.i.forEach(x => addRefs(x, tr, "dales", e.p, /Wähle/.test(b.tg.t || ""))); }
}
for (const e of (D["dales-c"] || [])) if (/Tropes/.test(e.sub || "")) {
  let wahl = false; for (const b of e.body) { if (isStr(b) && /Wähle/.test(b)) wahl = true; else if (isStr(b) && b.startsWith("- ")) addRefs(b, e.name, "dales", e.p, wahl); }
}
for (const e of (D["jenseits-b"] || [])) if (/Tropes/.test(e.name)) {
  let tr = null;
  for (const b of e.body) { if (isStr(b) && b.startsWith("## ")) tr = b.slice(3); else if (tr && isStr(b) && /\*\*Theme Kits:\*\*/.test(b)) { const [a, c] = b.split("**Wähle eines:**"); addRefs(a, tr, "uncanny", e.p, false); if (c) addRefs(c, tr, "uncanny", e.p, true); } }
}

/* ---------- 4. Schreiben ---------- */
const DIR = path.join(ROOT, "js/data/tb"); fs.mkdirSync(DIR, { recursive:true });
const idx = [];
for (const [k] of BOOKS) {
  const o = out[k];
  if (!o.power.length || !o.weak.length) throw new Error("Fragen fehlen: " + k);
  const seen = new Set(); o.kits = o.kits.filter(x => { const id = x.src + "|" + x.en; if (seen.has(id)) return false; seen.add(id); return true; });
  const tseen = new Set(); o.tropes = o.tropes.filter(x => { const id = x.t + "|" + x.kit; if (tseen.has(id)) return false; tseen.add(id); return true; });
  fs.writeFileSync(path.join(DIR, k + ".js"), "/* Themenbuch " + o.en + " (" + o.de + ") – erzeugt von tools/lm/build-tb.js, nicht von Hand ändern */\nTB.add(" + JSON.stringify(o, null, 0).replace(/\},\{/g, "},\n{") + ");\n");
  const cnt = { core:0, dales:0, uncanny:0 }; o.kits.forEach(x => cnt[x.src]++);
  idx.push({ key:k, might:o.might, en:o.en, de:o.de, p:o.p, pe:o.pe, sub:o.sub, a:o.power[0][1], n:{ power:o.power.length, weak:o.weak.length, imps:o.imps.length, kits:o.kits.length, tropes:o.tropes.length }, kc:cnt });
  console.log(k.padEnd(15), "P", o.power.length, "W", o.weak.length, "Q", o.quests.length, "V", o.imps.length, "Kits", JSON.stringify(cnt), "Tropes", o.tropes.length);
}
const pick = e => ({ name:e.name, p:e.p, pe:e.pe, body:e.body, aside:e.aside || [] });
const ex = { laden:pick(extra.laden), fellowship_kapitel:pick(extra.fellowship_kapitel) };
fs.writeFileSync(path.join(DIR, "extra.js"), "/* Gemischtwarenladen + Fellowship-Kapitel (Core Book S. 132–139) – erzeugt von tools/lm/build-tb.js */\nTB.extra(" + JSON.stringify(ex) + ");\n");
fs.writeFileSync(path.join(DIR, "index.js"), "/* Themenbücher-Übersicht – erzeugt von tools/lm/build-tb.js */\nvar TB_INDEX = " + JSON.stringify(idx, null, 0).replace(/\},\{/g, "},\n{") + ";\n");
