/* Charakterbogen: im Tool ausfüllen (wird im Browser gespeichert); Symbolleiste mit Zufall, Leeren, Teilen, Datei sichern/laden und ausfüllbarem PDF;
   Startpaket als Auswahlliste (nach Trefferschutz gruppiert, mit Suche und Info). */
var BG_KEY = "ito_bogen_v1";
var BG_FELDER = ["name","her","stn","stm","gen","gem","win","wim","hpn","hpm","rue","w0","ws0","w1","ws1","w2","ws2","g","s","k","erf","aus","arc","not","v0","v1","ges","kr","lv0","lv1","lv2","lv3","lv4","lv5"];
var BG_IC = {
  zufall: '<rect x="3.5" y="3.5" width="17" height="17" rx="3"/><circle cx="8.5" cy="8.5" r=".9" fill="currentColor"/><circle cx="15.5" cy="8.5" r=".9" fill="currentColor"/><circle cx="12" cy="12" r=".9" fill="currentColor"/><circle cx="8.5" cy="15.5" r=".9" fill="currentColor"/><circle cx="15.5" cy="15.5" r=".9" fill="currentColor"/>',
  leeren: '<path d="M20 12a8 8 0 1 1-2.6-5.9"/><path d="M20 4v5h-5"/>',
  teilen: '<circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="6" r="2.5"/><circle cx="18" cy="18" r="2.5"/><path d="M8.2 10.8l7.6-3.6M8.2 13.2l7.6 3.6"/>',
  sichern: '<path d="M12 4v11M7 11l5 5 5-5M5 20h14"/>',
  laden: '<path d="M12 16V5M7 9l5-5 5 5M5 20h14"/>',
  pdf: '<path d="M5 4h11l3 3v13H5z"/><path d="M8 4v5h7V4M8 20v-6h8v6"/>',
  paket: '<path d="M6 8h12l1 12H5z"/><path d="M9 8V6.5a3 3 0 0 1 6 0V8"/>'
};
function bgSym(p){ return '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' + p + '</svg>'; }
/* mehrere Bögen als Einträge: {l: [{id, o}], cur} */
var BG_KEY2 = "ito_bogen_v2", BG_DB = null;
function bgId(){ return "c" + Date.now().toString(36) + Math.floor(Math.random() * 999); }
function bgDb(){
  if(BG_DB) return BG_DB;
  try{ var d = JSON.parse(localStorage.getItem(BG_KEY2) || "null"); if(d && d.l && d.l.length) return (BG_DB = d); }catch(e){}
  var o = {}; try{ o = JSON.parse(localStorage.getItem(BG_KEY) || "{}") || {}; }catch(e){}
  var e = {id: bgId(), o: o}; return (BG_DB = {l: [e], cur: e.id});
}
function bgEintrag(){ var d = bgDb(), e = d.l.filter(function(x){ return x.id === d.cur; })[0] || d.l[0]; d.cur = e.id; return e; }
function bgPersist(){ try{ localStorage.setItem(BG_KEY2, JSON.stringify(bgDb())); }catch(e){ bgToast("Speicher voll."); } }
function bgLoad(){ return bgEintrag().o; }
function bgStore(o){ bgEintrag().o = o; bgPersist(); }
/* neuer Eintrag (ein leerer aktueller Bogen wird wiederverwendet) */
function bgNeu(o, erzwingen){
  var d = bgDb(), c = bgEintrag();
  if(!erzwingen && !bgFilled(c.o)){ c.o = o || {}; bgPersist(); return; }
  var e = {id: bgId(), o: o || {}}; d.l.push(e); d.cur = e.id; bgPersist();
}
function bgWahl(id){ bgDb().cur = id; bgPersist(); render(); }
function bgPlus(){ bgNeu(null, true); render(); }
function bgDel(id){
  var d = bgDb(), e = d.l.filter(function(x){ return x.id === id; })[0]; if(!e) return;
  if(bgFilled(e.o) && !confirm("Diesen Bogen löschen?")) return;
  d.l = d.l.filter(function(x){ return x.id !== id; }); if(!d.l.length) d.l.push({id: bgId(), o: {}}); d.cur = d.l[d.l.length - 1].id; bgPersist(); render();
}
function bgChips(){
  var d = bgDb(), cur = bgEintrag().id;
  return '<div class="bw-chips noprint">' + d.l.map(function(e){
    var n = (e.o.name || "").trim() || "Neuer Bogen", on = e.id === cur;
    return '<span class="bw-chip' + (on ? " on" : "") + '"><button type="button" onclick="bgWahl(\'' + e.id + '\')">' + esc(n) + '</button>' + (on ? '<button type="button" class="x" data-tip="Bogen löschen" aria-label="Bogen löschen" onclick="bgDel(\'' + e.id + '\')">×</button>' : "") + '</span>';
  }).join("") + '<button type="button" class="bw-plus" data-tip="Neuen Bogen anlegen" aria-label="Neuen Bogen anlegen" onclick="bgPlus()">+</button></div>';
}
function bgSave(){
  var o = Object.assign({}, bgLoad()); [].forEach.call(document.querySelectorAll(".os-bogen [data-f]"), function(e){ o[e.dataset.f] = e.type === "checkbox" ? (e.checked ? "1" : "") : e.value; });
  bgStore(o); bgFit();
}
function bgFilled(o){ return BG_FELDER.some(function(k){ return o[k]; }); }
function bgToast(t){ var d = document.createElement("div"); d.className = "bw-toast"; d.textContent = t; document.body.appendChild(d); setTimeout(function(){ d.remove(); }, 2200); }
function bgIn(f, v, cls, ph){ return '<input class="' + (cls || "") + '" data-f="' + f + '" value="' + esc(v[f] || "") + '" placeholder="' + esc(ph || "") + '" oninput="bgSave()">'; }
function bgTa(f, v, cls){ return '<textarea class="' + (cls || "") + '" data-f="' + f + '" oninput="bgSave()">' + esc(v[f] || "") + '</textarea>'; }
function bgB64(s){ var u = new TextEncoder().encode(s), b = ""; u.forEach(function(c){ b += String.fromCharCode(c); }); return btoa(b).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, ""); }
function bgUnB64(t){ t = t.replace(/-/g, "+").replace(/_/g, "/"); while(t.length % 4) t += "="; var b = atob(t), u = new Uint8Array(b.length); for(var i = 0; i < b.length; i++) u[i] = b.charCodeAt(i); return new TextDecoder().decode(u); }
function bgW(n){ return 1 + Math.floor(Math.random() * n); }
/* Daten einlesen: nur bekannte Felder, nur Text */
function bgEinlesen(f){
  if(!f || typeof f !== "object") return false;
  var o = {}; BG_FELDER.forEach(function(k){ if(typeof f[k] === "string") o[k] = f[k].slice(0, 5000); });
  if(!bgFilled(o)) return false; bgNeu(o); return true;
}
function bgLink(){ bgSave(); var o = bgLoad(), u = location.href.split("#")[0] + "#bogen/teilen~" + bgB64(JSON.stringify(o));
  (navigator.clipboard ? navigator.clipboard.writeText(u) : Promise.reject()).then(function(){ bgToast("Link kopiert"); }, function(){ prompt("Link zum Teilen:", u); }); }
function bgSichern(){ bgSave(); var o = bgLoad(), j = JSON.stringify({system: "Into the Odd", version: 1, felder: o}, null, 1);
  var a = document.createElement("a"); a.href = URL.createObjectURL(new Blob([j], {type: "application/json"})); a.download = "Into the Odd – " + (o.name || "Charakter") + ".json"; document.body.appendChild(a); a.click(); setTimeout(function(){ URL.revokeObjectURL(a.href); a.remove(); }, 500); }
function bgLaden(inp){
  var f = inp.files && inp.files[0]; inp.value = ""; if(!f) return;
  var r = new FileReader(); r.onload = function(){ try{ var d = JSON.parse(r.result); if(d && d.system === "Into the Odd" && bgEinlesen(d.felder)){ render(); bgToast("Bogen geladen"); } else bgToast("Datei passt nicht zu Into the Odd."); }catch(e){ bgToast("Datei ungültig."); } }; r.readAsText(f);
}
function bgPdf(b){ bgSave(); FillPDF.makeSeiten(document.querySelectorAll(".os-seite"), {name: "Into the Odd – " + ((bgLoad().name) || "Charakterbogen"), knopf: {}, scale: 2.5, bg: "#ffffff"}); }
function bgClear(){ if(bgFilled(bgLoad()) && !confirm("Alle Felder leeren?")) return; bgStore({}); render(); }

/* ---------- Startpakete ---------- */
function bgPakete(){
  var S = (window.ITO && ITO.char && ITO.char.start) || {rows: [], hp: []}, out = [];
  S.hp.forEach(function(h, hi){ S.rows.forEach(function(r, ri){ var c = r[1][hi]; if(!c) return;
    out.push({hp: hi + 1, w: r[0], wi: ri, t: c[0].replace(/\.$/, ""), b: c[1] || "", g: h}); }); });
  return out;
}
function bgTeile(t){ var o = [], d = 0, a = ""; for(var i = 0; i < t.length; i++){ var c = t[i]; if(c === "(") d++; if(c === ")") d--; if(c === "," && !d){ o.push(a.trim()); a = ""; } else a += c; } if(a.trim()) o.push(a.trim()); return o; }
function bgSetzen(p){
  var v = bgLoad(), waf = [], rest = [], rue = 0;
  bgTeile(p.t).forEach(function(x){
    var m = x.match(/^(.*?)\s*\((W\d+)(\s+Sp)?\)$/);
    if(m && waf.length < 3) waf.push([m[1], m[2] + (m[3] ? " Sp" : "")]);
    else if(/^(Moderne|Primitive) Rüstung$/.test(x) || x === "Schild") { rue++; rest.push(x); }
    else rest.push(x);
  });
  if(p.b) rest.push(p.b);
  [0, 1, 2].forEach(function(i){ v["w" + i] = waf[i] ? waf[i][0] : ""; v["ws" + i] = waf[i] ? waf[i][1] : ""; });
  v.aus = rest.join("\n"); v.rue = rue ? String(Math.min(3, rue)) : "";
  v.hpn = v.hpm = String(p.hp); v.her = "Startpaket " + p.w + " / " + p.hp + " hp";
  bgStore(v); render();
}
function bgZufall(){
  var v = {}, hoch = 0;
  ["st", "ge", "wi"].forEach(function(k){ var n = bgW(6) + bgW(6) + bgW(6); v[k + "n"] = v[k + "m"] = String(n); hoch = Math.max(hoch, n); });
  var hp = bgW(6), ri = hoch <= 9 ? 0 : hoch - 9, P = bgPakete().filter(function(p){ return p.hp === hp && p.wi === ri; });
  bgNeu(v); if(P.length) bgSetzen(P[0]); else render();
  bgToast("Zufälliger Charakter erstellt");
}

/* ---------- Auswahlliste mit Suche, Gruppen und Info ---------- */
function bgPopWeg(){ document.querySelectorAll(".bw-pop,.bw-info").forEach(function(e){ e.remove(); }); }
function bgMenu(btn, o){
  bgPopWeg();
  var pop = document.createElement("div"); pop.className = "bw-pop"; document.body.appendChild(pop);
  var auf = {}, q = "", low = function(t){ return String(t || "").toLowerCase(); };
  o.items.forEach(function(it){ if(it.sel) auf[it.g] = 1; });
  function zeile(it, i){ return '<div class="pz"><button class="pn' + (it.sel ? " sel" : "") + '" data-i="' + i + '">' + esc(it.t) + (it.s ? "<small>" + esc(it.s) + "</small>" : "") + '</button><button class="pi" data-t="' + i + '" aria-label="Info">i</button></div>'; }
  function liste(){
    var G = [], M = {}, h = "";
    o.items.forEach(function(it, i){ if(!M[it.g]){ M[it.g] = {g: it.g, l: [], n: 0}; G.push(M[it.g]); } M[it.g].n++;
      if(!q || low(it.t + " " + it.s + " " + it.g).indexOf(q) >= 0) M[it.g].l.push([it, i]); });
    G.forEach(function(g){ if(q && !g.l.length) return; var offen = q || auf[g.g];
      h += '<div class="gh' + (offen ? " on" : "") + '" data-g="' + esc(g.g) + '"><span>' + esc(g.g) + "</span><em>" + (q ? g.l.length : g.n) + "</em><i></i></div>";
      if(offen) h += '<div class="gb">' + g.l.map(function(x){ return zeile(x[0], x[1]); }).join("") + "</div>"; });
    return h || '<p class="hint">Nichts gefunden.</p>';
  }
  pop.innerHTML = '<div class="sq"><input type="search" placeholder="Suchen …" autocomplete="off" spellcheck="false"></div><div class="lst">' + liste() + "</div>";
  var rc = btn.getBoundingClientRect(), br = o.breit || 300;
  pop.style.cssText = "width:" + br + "px;left:" + Math.max(8, Math.min(rc.right - br, innerWidth - br - 8)) + "px;top:" + Math.min(rc.bottom + 4, Math.max(8, innerHeight - 440)) + "px";
  var inp = pop.querySelector("input"), L = pop.querySelector(".lst");
  inp.oninput = function(){ document.querySelectorAll(".bw-info").forEach(function(x){ x.remove(); }); q = low(inp.value.trim()); L.innerHTML = liste(); };
  setTimeout(function(){ inp.focus(); }, 30);
  pop.onclick = function(e){
    e.stopPropagation(); var g = e.target.closest(".gh");
    if(g){ var k = g.dataset.g; if(!q){ if(auf[k]) delete auf[k]; else auf[k] = 1; L.innerHTML = liste(); } return; }
    var b = e.target.closest("button"); if(!b) return;
    if(b.dataset.t != null){
      document.querySelectorAll(".bw-info").forEach(function(x){ x.remove(); });
      var inf = document.createElement("div"); inf.className = "bw-info"; inf.innerHTML = o.info(o.items[+b.dataset.t]); document.body.appendChild(inf);
      var pr = pop.getBoundingClientRect(), w = Math.min(340, innerWidth - pr.right - 12);
      if(w < 220){ inf.style.left = Math.max(8, pr.left - 332) + "px"; inf.style.width = "332px"; } else { inf.style.left = pr.right + "px"; inf.style.width = w + "px"; }
      inf.style.top = pr.top + "px"; return;
    }
    bgPopWeg(); o.pick(o.items[+b.dataset.i]);
  };
}
function bgPaketWahl(btn, ev){
  ev.stopPropagation(); var cur = bgLoad().her || "";
  var items = bgPakete().map(function(p){ return {t: p.t, s: "Höchster Wert " + p.w + (p.b ? " · " + p.b : ""), g: p.hp + " hp (Trefferschutz)", sel: cur === "Startpaket " + p.w + " / " + p.hp + " hp", p: p}; });
  bgMenu(btn, {items: items, pick: function(it){ bgSetzen(it.p); },
    info: function(it){ var p = it.p; return '<h4>Startpaket</h4><p>' + esc(bgTeile(p.t).join(", ")) + '.</p>' + (p.b ? '<p><b>Besonderheit:</b> ' + esc(p.b) + '</p>' : "") + '<p class="s">Trefferschutz: ' + p.hp + ' hp · höchster Wert: ' + esc(p.w) + '</p>'; }});
}

/* ---------- Bogen im Original-Layout (offizieller Bogen, 2 Seiten) ---------- */
var BG_W = 1239, BG_H = 873;
function bgSt(x, y, w, h){ return 'left:' + (x / BG_W * 100).toFixed(3) + '%;top:' + (y / BG_H * 100).toFixed(3) + '%;width:' + (w / BG_W * 100).toFixed(3) + '%;height:' + (h / BG_H * 100).toFixed(3) + '%'; }
function bgFeld(f, v, x, y, w, h, cls, fs){
  return '<input class="f ' + (cls || "") + '" data-f="' + f + '" value="' + esc(v[f] || "") + '" style="' + bgSt(x, y, w, h) + (fs ? ';--fs:' + fs : "") + '" oninput="bgSave()" autocomplete="off" spellcheck="false">';
}
function bgArea(f, v, x, y, w, h, zl, fs, zh){
  return '<textarea class="f ta" data-f="' + f + '" style="' + bgSt(x, y, w, h) + ';--fs:' + fs + ';--lh:' + zh + '" oninput="bgSave()" spellcheck="false">' + esc(v[f] || "") + '</textarea>';
}
function bgMark(f, v, x, y, w, h, cls, on){
  return '<input type="checkbox" class="mk ' + cls + '" data-f="' + f + '" ' + (v[f] ? "checked " : "") + 'style="' + bgSt(x, y, w, h) + '" onclick="' + (on || "bgSave()") + '">';
}
function bgStufe(i){ for(var k = 0; k < 6; k++){ var c = document.querySelector('[data-f="lv' + k + '"]'); if(c && k !== i) c.checked = false; } bgSave(); }
/* Schrift nach Länge staffeln: so lange verkleinern, bis nichts mehr überläuft */
function bgFit(){
  [].forEach.call(document.querySelectorAll(".os-bogen .f"), function(e){
    var ta = e.tagName === "TEXTAREA", sz = [1, .86, .74, .64, .55, .46];
    for(var i = 0; i < sz.length; i++){
      e.style.setProperty("--sc", sz[i]);
      if(ta ? e.scrollHeight <= e.clientHeight + 1 : e.scrollWidth <= e.clientWidth + 1) break;
    }
  });
}
function viewBogen(){
  var s = (location.hash || "").slice(1).split("/")[1] || "";
  if(s.indexOf("teilen~") === 0){
    var msg = "Link ungültig.";
    try{
      var d = JSON.parse(bgUnB64(s.slice(7)));
      if(bgEinlesen(d)){ msg = "Bogen als neuer Eintrag übernommen"; LK.an(); }
    }catch(e){}
    setTimeout(function(){ bgToast(msg); }, 50);
    history.replaceState(null, "", "#bogen");
  }
  var v = bgLoad(), F = function(f, x, y, w, h, c, fs){ return bgFeld(f, v, x, y, w, h, c, fs); };
  var ib = function(ic, tip, on){ return '<button class="bwi" data-tip="' + tip + '" aria-label="' + tip + '" onclick="' + on + '">' + bgSym(BG_IC[ic]) + '</button>'; };
  var bar = '<div class="bw-bar noprint">' + bgChips() + '<span class="bw-tools">' + ib("zufall", "Zufälligen Charakter erstellen", "bgZufall()") + ib("paket", "Startpaket wählen", "bgPaketWahl(this,event)") + ib("leeren", "Bogen leeren", "bgClear()") + ib("teilen", "Link zum Teilen kopieren", "bgLink()") + ib("sichern", "Als Datei sichern", "bgSichern()") +
    '<label class="bwi" data-tip="Datei laden" aria-label="Datei laden">' + bgSym(BG_IC.laden) + '<input type="file" accept=".json,application/json" hidden onchange="bgLaden(this)"></label>' + ib("pdf", "Als ausfüllbares PDF speichern", "bgPdf(this)") + '</span></div>';
  /* Seite 1 */
  var p1 = F("name", 165, 94, 395, 34, "name", 36) +
    F("stm", 174, 206, 96, 54, "z", 40) + F("stn", 174, 274, 96, 54, "z", 40) +
    F("gem", 244, 388, 96, 54, "z", 40) + F("gen", 244, 454, 96, 54, "z", 40) +
    F("wim", 174, 555, 96, 54, "z", 40) + F("win", 174, 623, 96, 54, "z", 40) +
    F("hpm", 430, 166, 96, 64, "z", 44) + F("hpn", 430, 246, 96, 64, "z", 44) +
    bgMark("kr", v, 449.6, 431.8, 59.4, 59.4, "kr") +
    F("rue", 450, 572, 60, 56, "z", 40) +
    F("k", 735, 484, 100, 54, "z", 36) + F("s", 875, 484, 100, 54, "z", 36) + F("g", 1015, 484, 100, 54, "z", 36) +
    bgArea("aus", v, 722, 140, 430, 293, 7, 30, 41.7) +
    [0, 1, 2].map(function(i){ var y = [710, 752, 795][i]; return F("w" + i, 748, y - 38, 300, 38, "", 29) + F("ws" + i, 1056, y - 38, 92, 38, "r", 29); }).join("") +
    F("v0", 305, 757 - 38, 365, 38, "", 29) + F("v1", 258, 805 - 38, 412, 38, "", 29);
  /* Seite 2 */
  var lv = ["Neuling", "Profi", "Experte", "Veteran", "Meister", "Übermensch"];
  var p2 = bgArea("not", v, 108, 124, 494, 677, 16, 30, 42.3) +
    bgArea("arc", v, 836, 124, 326, 386, 9, 30, 42.9) +
    bgArea("ges", v, 666, 622, 506, 169, 4, 30, 42.3) +
    lv.map(function(n, i){ return bgMark("lv" + i, v, 627.5, 159.8 + i * 58.3, 47, 47, "lv", "bgStufe(" + i + ")"); }).join("");
  return '<div class="rp os-rp">' + bar + '<div class="os-bogen">' +
    '<div class="os-pg"><div class="os-seite" style="background-image:url(img/bogen/seite-1.webp)">' + p1 + '</div></div>' +
    '<div class="os-pg"><div class="os-seite" style="background-image:url(img/bogen/seite-2.webp)">' + p2 + '</div></div></div></div>';
}
document.addEventListener("click", function(e){ if(!e.target.closest(".bw-pop,.bw-info")) bgPopWeg(); });
document.addEventListener("keydown", function(e){ if(e.key === "Escape" && document.querySelector(".bw-pop,.bw-info")){ e.stopImmediatePropagation(); e.preventDefault(); bgPopWeg(); } }, true);
window.addEventListener("hashchange", bgPopWeg);
window.addEventListener("load", function(){ if(document.querySelector(".os-bogen")) bgFit(); });

if(window.LK) LK.init(function(h){ return h.indexOf("#bogen") === 0; });
