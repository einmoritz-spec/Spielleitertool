/* Charakterbogen: im Tool ausfüllen (wird im Browser gespeichert); Symbolleiste mit Zufall, Leeren, Teilen, Datei sichern/laden und ausfüllbarem PDF;
   Startpaket als Auswahlliste (nach Trefferschutz gruppiert, mit Suche und Info). */
var BG_KEY = "ito_bogen_v1";
var BG_FELDER = ["name","her","stn","stm","gen","gem","win","wim","hpn","hpm","rue","w0","ws0","w1","ws1","w2","ws2","g","s","k","erf","aus","arc","not"];
var BG_IC = {
  zufall: '<rect x="3.5" y="3.5" width="17" height="17" rx="3"/><circle cx="8.5" cy="8.5" r=".9" fill="currentColor"/><circle cx="15.5" cy="8.5" r=".9" fill="currentColor"/><circle cx="12" cy="12" r=".9" fill="currentColor"/><circle cx="8.5" cy="15.5" r=".9" fill="currentColor"/><circle cx="15.5" cy="15.5" r=".9" fill="currentColor"/>',
  leeren: '<path d="M20 12a8 8 0 1 1-2.6-5.9"/><path d="M20 4v5h-5"/>',
  teilen: '<circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="6" r="2.5"/><circle cx="18" cy="18" r="2.5"/><path d="M8.2 10.8l7.6-3.6M8.2 13.2l7.6 3.6"/>',
  sichern: '<path d="M12 4v11M7 11l5 5 5-5M5 20h14"/>',
  laden: '<path d="M12 16V5M7 9l5-5 5 5M5 20h14"/>',
  pdf: '<path d="M5 4h11l3 3v13H5z"/><path d="M8 4v5h7V4M8 20v-6h8v6"/>'
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
  var o = {}; [].forEach.call(document.querySelectorAll(".sheet [data-f]"), function(e){ o[e.dataset.f] = e.value; });
  bgStore(o);
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
function bgPdf(b){ bgSave(); FillPDF.make(document.querySelector(".sheet"), {name: "Into the Odd – " + ((bgLoad().name) || "Charakterbogen"), knopf: {}, bg: "#fbfaf6"}); }
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
  var v = bgLoad();
  function wert(k, t){ return '<div class="bw"><b>' + t + '</b><div class="bwn">' + bgIn(k + "n", v, "big") + '<i>jetzt</i></div><div class="bwm">' + bgIn(k + "m", v, "mid") + '<i>Höchstwert</i></div></div>'; }
  var waf = [0, 1, 2].map(function(i){ return '<div class="bz">' + bgIn("w" + i, v, "", "Waffe") + bgIn("ws" + i, v, "sm", "Schaden") + '</div>'; }).join("");
  var ib = function(ic, tip, on){ return '<button class="bwi" data-tip="' + tip + '" aria-label="' + tip + '" onclick="' + on + '">' + bgSym(BG_IC[ic]) + '</button>'; };
  return '<div class="rp"><div class="bw-bar noprint">' + bgChips() + '<span class="bw-tools">' + ib("zufall", "Zufälligen Charakter erstellen", "bgZufall()") + ib("leeren", "Bogen leeren", "bgClear()") + ib("teilen", "Link teilen", "bgLink()") + ib("sichern", "Als Datei sichern", "bgSichern()") +
      '<label class="bwi" data-tip="Datei laden" aria-label="Datei laden">' + bgSym(BG_IC.laden) + '<input type="file" accept=".json,application/json" hidden onchange="bgLaden(this)"></label>' + ib("pdf", "Als ausfüllbares PDF speichern", "bgPdf(this)") + '</span></div>' +
    '<div class="sheet"><header><h2>Charakterbogen</h2><span>Into the Odd</span></header>' +
    '<div class="brow"><label>Name' + bgIn("name", v) + '</label><label>Herkunft und Startpaket<span class="bw-h">' + bgIn("her", v) + '<button type="button" class="bw-dd noprint" data-tip="Startpaket wählen" aria-label="Startpaket wählen" onclick="bgPaketWahl(this,event)">▾</button></span></label></div>' +
    '<div class="bws">' + wert("st", "Stärke") + wert("ge", "Geschicklichkeit") + wert("wi", "Willenskraft") + '<div class="bw"><b>Trefferschutz</b><div class="bwn">' + bgIn("hpn", v, "big") + '<i>jetzt</i></div><div class="bwm">' + bgIn("hpm", v, "mid") + '<i>Höchstwert</i></div></div><div class="bw"><b>Rüstung</b><div class="bwn">' + bgIn("rue", v, "big") + '<i>Punkte</i></div></div></div>' +
    '<div class="bcols"><div><h3>Waffen</h3>' + waf + '<h3>Geld</h3><div class="bz">' + bgIn("g", v, "sm", "Gold") + bgIn("s", v, "sm", "Silber") + bgIn("k", v, "sm", "Kupfer") + '</div><h3>Erfahrung</h3>' + bgIn("erf", v, "", "Expeditionen und Stufe") + '</div>' +
    '<div><h3>Ausrüstung</h3>' + bgTa("aus", v, "tall") + '</div><div><h3>Arcana</h3>' + bgTa("arc", v, "tall") + '</div></div>' +
    '<h3>Kritischer Schaden und Notizen</h3>' + bgTa("not", v, "note") + '</div></div>';
}
document.addEventListener("click", function(e){ if(!e.target.closest(".bw-pop,.bw-info")) bgPopWeg(); });
document.addEventListener("keydown", function(e){ if(e.key === "Escape" && document.querySelector(".bw-pop,.bw-info")){ e.stopImmediatePropagation(); e.preventDefault(); bgPopWeg(); } }, true);
window.addEventListener("hashchange", bgPopWeg);

if(window.LK) LK.init(function(h){ return h.indexOf("#bogen") === 0; });
