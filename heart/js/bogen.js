/* HEART – Charakterbogen: der Original-Bogen (deutsch beschriftet) zum Ausfüllen im Tool.
   #bogen[/<id>] · Daten in ST.boegen = [{id, v:{feld:wert}, bild}] · Felder: HT_BOGEN (js/data/bogen-layout.js)
   „PDF“ erzeugt aus heart/bogen/charakterbogen.pdf ein ausfüllbares PDF (echte Formularfelder, bleibt bearbeitbar);
   „PDF laden“ liest so ein PDF – auch nach Änderungen in einem PDF-Programm – wieder ein. Alles lokal (pdf-lib). */
(function(){
var L = HT_BOGEN, PW = L.W, PH = L.H, TINTE = [0.1, 0.08, 0.06];
function boegen(){ if(!ST.boegen) ST.boegen = []; return ST.boegen; }
function finde(id){ return boegen().filter(function(b){ return b.id === id; })[0]; }
function neuId(){ return "b" + Date.now().toString(36) + Math.floor(Math.random() * 1296).toString(36); }
function titel(b){ return (b.v && b.v.name) || "Ohne Namen"; }
function pc(v, g){ return (v / g * 100).toFixed(3) + "%"; }
function cq(pt){ return (pt / PW * 100).toFixed(3) + "cqw"; }

/* ---------- Werte ---------- */
window.bgWert = function(id, k, el){
  var b = finde(id); if(!b) return; var v = el.value;
  if(v) b.v[k] = v; else delete b.v[k];
  save(); passen(el);
  if(k === "name"){ var c = document.querySelector('.bgch a.on'); if(c) c.textContent = titel(b); }
};
window.bgKreuz = function(id, k, el){
  var b = finde(id); if(!b) return;
  if(b.v[k]) delete b.v[k]; else b.v[k] = true;
  el.classList.toggle("an", !!b.v[k]); save();
};
window.bgNeu = function(){ var b = {id:neuId(), v:{}}; boegen().push(b); save(); go("bogen/" + b.id); };
window.bgWeg = function(id){
  var b = finde(id); if(!b || !confirm("Bogen „" + titel(b) + "“ löschen?")) return;
  ST.boegen = boegen().filter(function(x){ return x.id !== id; }); save(); go("bogen");
};
/* Bild im Feld „So sehe ich aus“ – verkleinert gespeichert */
window.bgBildWahl = function(id){
  var inp = document.createElement("input"); inp.type = "file"; inp.accept = "image/*";
  inp.onchange = function(){
    var f = inp.files[0]; if(!f) return; var r = new FileReader();
    r.onload = function(){
      var img = new Image();
      img.onload = function(){
        var s = Math.min(1, 900 / Math.max(img.width, img.height)), c = document.createElement("canvas");
        c.width = Math.round(img.width * s); c.height = Math.round(img.height * s);
        var g = c.getContext("2d"); g.fillStyle = "#fff"; g.fillRect(0, 0, c.width, c.height); g.drawImage(img, 0, 0, c.width, c.height);
        var b = finde(id); if(!b) return; b.bild = c.toDataURL("image/jpeg", 0.85); save(); render();
      };
      img.src = r.result;
    };
    r.readAsDataURL(f);
  };
  inp.click();
};
window.bgBildWeg = function(id){ var b = finde(id); if(b){ delete b.bild; save(); render(); } };

/* Schrift verkleinern, bis der Text ins Feld passt (wie im PDF) */
function passen(el){
  var basis = +el.getAttribute("data-fs"), min = basis * 0.55, w = el.parentNode.clientWidth / PW, fs = basis;
  el.style.fontSize = cq(fs);
  if(el.tagName === "TEXTAREA"){ while(fs > min && el.scrollHeight > el.clientHeight + 1){ fs -= 0.25; el.style.fontSize = cq(fs); } }
  else { while(fs > min && el.scrollWidth > el.clientWidth + 1){ fs -= 0.25; el.style.fontSize = cq(fs); } }
}
window.bgPassenAlle = function(){ document.querySelectorAll(".bgs input, .bgs textarea").forEach(passen); };

/* ---------- Ansicht ---------- */
function vorschlaege(){
  var kl = (window.HT_KLASSEN || []).map(function(k){ return k[1]; });
  var ber = [];
  try{ HT_NACH.charaktere.subs.forEach(function(s){ if(s.id === "berufungen") s.secs.forEach(function(x){ ber.push(x.t); }); }); }catch(e){}
  try{ HT_NACH.charaktere.subs.forEach(function(s){ (s.secs || []).forEach(function(x){ if(/^Berufung: /.test(x.t || "")) ber.push(x.t.replace(/^Berufung: /, "")); }); }); }catch(e){}
  var o = function(l){ return l.filter(function(x, i){ return x && l.indexOf(x) === i; }).map(function(x){ return '<option value="' + esc(x) + '">'; }).join(""); };
  return '<datalist id="bgKl">' + o(kl) + '</datalist><datalist id="bgBer">' + o(ber) + "</datalist>";
}
var AUSW = {klasse:1, berufung:1, beat1:1, beat2:1, faehigkeiten:1, ausr1:1, ausr2:1, ausr3:1, ausr4:1, ausr5:1};
function feld(b, f){
  var st = "left:" + pc(f.x, PW) + ";top:" + pc(f.y, PH) + ";width:" + pc(f.w, PW) + ";height:" + pc(f.h, PH);
  var q = "'" + b.id + "','" + f.id + "'";
  if(f.t === "x") return '<i class="bgx' + (b.v[f.id] ? " an" : "") + '" style="' + st + '" onclick="bgKreuz(' + q + ',this)"></i>';
  if(f.id === "aussehen" && b.bild) return '<div class="bgbild" style="' + st + '"><img src="' + b.bild + '" alt=""><s onclick="bgBildWeg(\'' + b.id + '\')" title="Bild entfernen">×</s></div>';
  var at = ' style="' + st + ";font-size:" + cq(f.fs) + '" data-fs="' + f.fs + '" oninput="bgWert(' + q + ',this)" spellcheck="false"';
  var extra = f.id === "aussehen" ? '<b class="bgcam" style="left:' + pc(f.x + f.w - 16, PW) + ";top:" + pc(f.y - 22, PH) + '" onclick="bgBildWahl(\'' + b.id + '\')" title="Bild einfügen"></b>' : "";
  var dd0 = AUSW[f.id] ? '<button class="bgdd" style="left:' + pc(f.x + f.w - 13, PW) + ";top:" + pc(f.y - 13, PH) + ";width:" + pc(11, PW) + ";height:" + pc(11, PH) + '" onclick="htPopup(this,event,\'' + b.id + "','" + f.id + '\')" title="Beispiele – du kannst auch frei schreiben" aria-label="Beispiele">▾</button>' : "";
  if(f.t === "m") return '<textarea class="bgf"' + at + ">" + esc(b.v[f.id] || "") + "</textarea>" + extra + dd0;
  var dd = AUSW[f.id] ? '<button class="bgdd" style="left:' + pc(f.x + f.w - 13, PW) + ";top:" + pc(f.y + 1.5, PH) + ";width:" + pc(11, PW) + ";height:" + pc(11, PH) + '" onclick="htPopup(this,event,\'' + b.id + "','" + f.id + '\')" title="Beispiele – du kannst auch frei schreiben" aria-label="Beispiele">▾</button>' : "";
  if(f.id === "klasse" || f.id === "berufung") return '<input class="bgf bgwahl" readonly onclick="htPopup(this,event,\'' + b.id + "','" + f.id + '\')"' + at.replace(' oninput="bgWert(' + q + ',this)"', "") + ' value="' + esc(b.v[f.id] || "") + '">';
  return '<input class="bgf' + (f.fs < 10 ? " kl" : "") + '"' + at + ' value="' + esc(b.v[f.id] || "") + '">' + dd;
}
function seite(b, n){
  return '<div class="bgs" style="background-image:url(img/bogen/seite-' + n + '.webp)">' +
    L.felder.filter(function(f){ return f.s === n; }).map(function(f){ return feld(b, f); }).join("") + "</div>";
}
if(window.LK) LK.init(function(h){ return /^#bogen/.test(h); });
function view(a){
  if(a[0] === "teilen" && a[1]){ entpack(a[1]).then(function(d){ var n = {id:neuId(), v:d.v || {}}; boegen().push(n); save(); LK.an(); go("bogen/" + n.id); }, function(){ alert("Dieser Link ist unvollständig oder beschädigt."); go("bogen"); }); return '<div class="bgw"><p style="padding:40px;color:#f2e9da">Geteilter Bogen wird geöffnet …</p></div>'; }
  var b = finde(a[0]) || boegen()[0];
  if(!b){ b = {id:neuId(), v:{}}; boegen().push(b); save(); }
  var chips = boegen().map(function(x){ return '<a class="' + (x.id === b.id ? "on" : "") + '" onclick="go(\'bogen/' + x.id + '\')">' + esc(titel(x)) + "</a>"; }).join("");
  return '<div class="bgw"><div class="bgbar"><div class="bgch">' + chips + '<a class="neu" onclick="bgNeu()">+ Neuer Bogen</a></div>' +
    '<div class="bga"><button class="ib" data-tip="Zufälligen Charakter erstellen" aria-label="Zufälligen Charakter erstellen" onclick="bgZufall(\'' + b.id + '\')"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3.5" y="3.5" width="17" height="17" rx="3"/><circle cx="8.5" cy="8.5" r=".9" fill="currentColor"/><circle cx="15.5" cy="8.5" r=".9" fill="currentColor"/><circle cx="12" cy="12" r=".9" fill="currentColor"/><circle cx="8.5" cy="15.5" r=".9" fill="currentColor"/><circle cx="15.5" cy="15.5" r=".9" fill="currentColor"/></svg></button><button class="ib" data-tip="Bogen leeren" aria-label="Bogen leeren" onclick="bgLeeren(\'' + b.id + '\')"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3.5 12a8.5 8.5 0 1 0 2.6-6.1"/><path d="M3.5 4v5h5"/></svg></button><button class="ib" data-tip="Link teilen" aria-label="Link teilen" onclick="bgLink(\'' + b.id + '\')"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="2.6"/><circle cx="6" cy="12" r="2.6"/><circle cx="18" cy="19" r="2.6"/><path d="M8.3 10.7l7.4-4.3M8.3 13.3l7.4 4.3"/></svg></button><button class="ib" data-tip="Als Datei sichern" aria-label="Als Datei sichern" onclick="bgJson(\'' + b.id + '\')"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4v11"/><path d="M7 11l5 5 5-5"/><path d="M5 20h14"/></svg></button><label class="ib" data-tip="Datei laden (JSON oder PDF)" aria-label="Datei laden"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 16V5"/><path d="M7 9l5-5 5 5"/><path d="M5 20h14"/></svg><input type="file" accept=".json,.pdf,application/json,application/pdf" hidden onchange="bgLaden(this)"></label><button class="ib haupt" data-tip="Als PDF speichern" aria-label="Als PDF speichern" onclick="bgPdf(\'' + b.id + '\',this)"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 3h11l4 4v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"/><path d="M7.5 3v5h8V3"/><rect x="7" y="13" width="10" height="8"/></svg></button><button class="ib weg" data-tip="Bogen löschen" aria-label="Bogen löschen" onclick="bgWeg(\'' + b.id + '\')"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16"/><path d="M9 7V4h6v3"/><path d="M6 7l1 13h10l1-13"/></svg></button></div></div>' +
    vorschlaege() + '<div class="bgseiten">' + seite(b, 1) + seite(b, 2) + "</div></div>";
}
/* ---------- Auswahl (Klasse, Berufung, Beats, Fähigkeiten, Ausrüstung) ---------- */
function sub(id){ var r = []; try{ r = HT_NACH.charaktere.subs.filter(function(x){ return x.id === id; })[0].secs; }catch(e){} return r || []; }
function klassen(){ return sub("klassen").filter(function(k){ return k.kl; }); }
function berufungen(){
  var o = []; sub("berufungen").forEach(function(x){ o.push(x); });
  try{ HT_NACH.charaktere.subs.forEach(function(s){ (s.secs || []).forEach(function(x){ if(/^Berufung: /.test(x.t || "")) o.push({id:x.id, t:x.t.replace(/^Berufung: /, ""), b:x.b, p:x.p}); }); }); }catch(e){}
  return o;
}
function klasseVon(b){ var n = (b.v.klasse || "").toLowerCase(); return klassen().filter(function(k){ return k.t.toLowerCase() === n; })[0]; }
function berufungVon(b){ var n = (b.v.berufung || "").toLowerCase(); return berufungen().filter(function(k){ return k.t.toLowerCase() === n; })[0]; }
function strip(t){ return String(t || "").replace(/\*/g, ""); }
function kurz(t){ t = strip(t); if(t.length <= 420) return t; var c = t.slice(0, 420), i = Math.max(c.lastIndexOf(". "), c.lastIndexOf("! ")); return i > 120 ? c.slice(0, i + 1) : c.replace(/\s+\S*$/, "") + " …"; }
function beatsVon(B){
  var o = [];
  (function w(x){ if(!x || typeof x !== "object") return; if(Array.isArray(x)){ x.forEach(function(y, i){ if(y && y.t === "h" && /Beats/.test(y.x) && x[i + 1] && x[i + 1].t === "ul") x[i + 1].x.forEach(function(t){ o.push({t:strip(t), g:y.x}); }); else w(y); }); return; } Object.keys(x).forEach(function(k){ w(x[k]); }); })(B.b);
  return o;
}
var NAMEN = ["Mara Voss","Tobiah Krähe","Ilse Brandt","Corvin Ash","Nadja Thorn","Emeric Salz","Odile Vance","Jorin Falk","Vesna Kuhl","Ansgar Wolff","Liora Quill","Bastian Ried","Thessaly Noor","Kaspar Lenz","Maren Eichwald","Dorian Pell","Yelena Marsh","Hagen Roth","Sibylle Orn","Pim Garrow"];
function ausrZeilen(K){ var o = []; (K.kl.kern || []).forEach(function(e){ if(e[0] === "x" || e[0] === "e") o.push(e[1] + (e[2] ? " (" + e[2] + ")" : "")); }); return o; }
function auswahl(b, k){
  var K = klasseVon(b), Bu = berufungVon(b), bs = Bu ? beatsVon(Bu) : [];
  if(k === "klasse") return {wahl:1, items:klassen().map(function(x){ return {t:x.t, i:(x.kl.intro || []).map(strip).slice(0, 1).join(" ")}; }), set:function(it){ b.v.klasse = it.t; }};
  if(k === "berufung") return {wahl:1, items:berufungen().map(function(x){ var p = (x.b || []).filter(function(y){ return y && y.t === "p"; })[0]; return {t:x.t, i:p ? p.x : ""}; }), set:function(it){ b.v.berufung = it.t; }};
  if(/^beat/.test(k)){ if(!bs.length) return {items:[], leer:"Wähle zuerst eine Berufung."}; return {items:bs.map(function(x){ return {t:x.t, g:x.g}; }), set:function(it){ b.v[k] = it.t; }}; }
  if(k === "faehigkeiten"){ if(!K) return {items:[], leer:"Wähle zuerst eine Klasse."}; return {items:(K.kl.core || []).map(function(c){ return {t:c[0], i:strip(c[1]) + (c[2] ? " – " + strip(c[2]) : "")}; }), set:function(it){ b.v.faehigkeiten = b.v.faehigkeiten ? b.v.faehigkeiten + "\n" + it.t : it.t; }}; }
  if(/^ausr\d$/.test(k)){ if(!K) return {items:[], leer:"Wähle zuerst eine Klasse."}; return {items:ausrZeilen(K).map(function(t){ return {t:t}; }), set:function(it){ b.v[k] = it.t; }}; }
  return null;
}
function popWeg(){ document.querySelectorAll(".htpop,.htinfo").forEach(function(e){ e.remove(); }); }
document.addEventListener("click", popWeg);
function infoAn(p, btn, it){
  var o = document.querySelector(".htinfo"); if(o) o.remove();
  p.querySelectorAll(".hp-i.sel").forEach(function(x){ x.classList.remove("sel"); }); btn.classList.add("sel");
  var q = p.getBoundingClientRect(), c = document.createElement("div"); c.className = "htinfo"; c.innerHTML = "<h4>" + esc(it.t) + "</h4><p>" + esc(kurz(it.i)) + "</p>";
  c.style.top = q.top + "px"; c.style.maxHeight = q.height + "px";
  var re = q.right + 340 + 8 < innerWidth; c.style.left = re ? (q.right - 1) + "px" : (q.left - 340 + 1) + "px"; c.classList.add(re ? "re" : "li");
  c.addEventListener("click", function(x){ x.stopPropagation(); }); document.body.appendChild(c);
}
window.htPopup = function(el, e, id, k){
  e.stopPropagation(); var old = document.querySelector(".htpop"), same = old && old.dataset.k === k; popWeg(); if(same) return;
  var b = finde(id), A = b && auswahl(b, k); if(!A) return;
  var r = el.getBoundingClientRect(), p = document.createElement("div"); p.className = "htpop"; p.dataset.k = k;
  p.style.left = Math.max(8, Math.min(r.left, innerWidth - 360)) + "px"; p.style.top = (r.bottom + 4) + "px";
  var gr = "", h = A.wahl ? "" : '<div class="hp-kopf">Beispiele – du kannst auch frei schreiben</div>';
  h += A.items.map(function(it, i){ var g = ""; if(it.g && it.g !== gr){ gr = it.g; g = "<h5>" + esc(it.g) + "</h5>"; } return g + '<div class="hp-z"><button class="hp-n" data-i="' + i + '">' + esc(it.t) + '</button>' + (it.i ? '<button class="hp-i" data-j="' + i + '" title="Info" aria-label="Info">i</button>' : "") + "</div>"; }).join("");
  if(!A.items.length) h += '<div class="hp-z"><span class="hp-n">' + esc(A.leer || "–") + "</span></div>";
  p.innerHTML = h;
  p.addEventListener("click", function(ev){
    ev.stopPropagation(); var bt = ev.target.closest("button"); if(!bt) return;
    if(bt.dataset.j !== undefined){ infoAn(p, bt, A.items[+bt.dataset.j]); return; }
    A.set(A.items[+bt.dataset.i]); popWeg(); save(); render();
  });
  document.body.appendChild(p);
  var hh = p.getBoundingClientRect().height; if(r.bottom + 4 + hh > innerHeight) p.style.top = Math.max(8, innerHeight - hh - 8) + "px";
};

/* ---------- Zufall, Leeren, Teilen, Datei ---------- */
function toast(t){ var d = document.createElement("div"); d.className = "bgtoast"; d.textContent = t; document.body.appendChild(d); setTimeout(function(){ d.remove(); }, 2400); }
window.bgLeeren = function(id){ var b = finde(id); if(!b || !confirm("Alle Einträge dieses Bogens löschen?")) return; b.v = {}; delete b.bild; save(); render(); };
window.bgZufall = function(id){
  var b = finde(id); if(!b) return;
  if(Object.keys(b.v).length && !confirm("Die Einträge dieses Bogens durch einen zufälligen Charakter ersetzen?")) return;
  var pk = function(l){ return l[Math.floor(Math.random() * l.length)]; }, K = pk(klassen()), Bu = pk(berufungen()), v = {}, bs = beatsVon(Bu).filter(function(x){ return /Kleine/.test(x.g); });
  v.name = pk(NAMEN); v.klasse = K.t; v.berufung = Bu.t;
  var bb = bs.slice().sort(function(){ return Math.random() - .5; }); if(bb[0]) v.beat1 = bb[0].t; if(bb[1]) v.beat2 = bb[1].t;
  (K.kl.kern || []).forEach(function(e){ if(e[0] === "l"){ var n = String(e[3]).toLowerCase(); if(/^Skill/.test(e[1])) v["skill-" + n] = true; else if(/^Domain/.test(e[1])) v["domain-" + n] = true; } });
  var ar = ausrZeilen(K).slice(0, 5); ar.forEach(function(t, i){ v["ausr" + (i + 1)] = t; });
  if((K.kl.core || [])[0]) v.faehigkeiten = K.kl.core[0][0];
  b.v = v; delete b.bild; save(); render(); toast("Zufälliger Charakter erstellt");
};
function b64u(buf){ var s = "", a = new Uint8Array(buf); for(var i = 0; i < a.length; i++) s += String.fromCharCode(a[i]); return btoa(s).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, ""); }
function b64uRev(s){ s = s.replace(/-/g, "+").replace(/_/g, "/"); var x = atob(s), a = new Uint8Array(x.length); for(var i = 0; i < x.length; i++) a[i] = x.charCodeAt(i); return a; }
function pack(o){
  var txt = JSON.stringify(o), by = new TextEncoder().encode(txt);
  if(!window.CompressionStream) return Promise.resolve("k" + b64u(by));
  var cs = new CompressionStream("deflate-raw"), w = cs.writable.getWriter(); w.write(by); w.close();
  return new Response(cs.readable).arrayBuffer().then(function(buf){ return "z" + b64u(buf); });
}
function entpack(s){
  var a = b64uRev(s.slice(1)); if(s[0] === "k") return Promise.resolve(JSON.parse(new TextDecoder().decode(a)));
  var ds = new DecompressionStream("deflate-raw"), w = ds.writable.getWriter(); w.write(a); w.close();
  return new Response(ds.readable).arrayBuffer().then(function(buf){ return JSON.parse(new TextDecoder().decode(buf)); });
}
window.bgLink = function(id){
  var b = finde(id); if(!b) return;
  pack({v:b.v}).then(function(c){
    var u = location.href.split("#")[0] + "#bogen/teilen/" + c;
    (navigator.clipboard ? navigator.clipboard.writeText(u) : Promise.reject()).then(function(){ toast("Link kopiert (ohne Bild)"); }, function(){ prompt("Link zum Teilen:", u); });
  });
};
window.bgJson = function(id){
  var b = finde(id); if(!b) return;
  var f = new Blob([JSON.stringify({heart:1, v:b.v, bild:b.bild || null}, null, 1)], {type:"application/json"}), a = document.createElement("a");
  a.href = URL.createObjectURL(f); a.download = "Heart – " + titel(b).replace(/[\\/:*?"<>|]/g, "") + ".json"; document.body.appendChild(a); a.click(); setTimeout(function(){ URL.revokeObjectURL(a.href); a.remove(); }, 3000);
};
function ladeJson(f){
  f.text().then(function(t){ var d = JSON.parse(t); if(!d || !d.v) throw 0; var b = {id:neuId(), v:d.v}; if(d.bild) b.bild = d.bild; boegen().push(b); save(); go("bogen/" + b.id); }, function(){ alert("Konnte nicht geladen werden."); }).catch(function(){ alert("Das ist keine Heart-Charakterdatei."); });
}

VIEWS.bogen = view;
var altAfter = window.afterRender;
window.afterRender = function(){ if(altAfter) altAfter(); if(document.querySelector(".bgs")) requestAnimationFrame(bgPassenAlle); };
window.addEventListener("resize", function(){ if(document.querySelector(".bgs")) bgPassenAlle(); });

/* ---------- PDF ---------- */
var libP = null;
function js(src){ return new Promise(function(res, rej){ var s = document.createElement("script"); s.src = src; s.onload = res; s.onerror = function(){ rej(new Error(src + " fehlt")); }; document.head.appendChild(s); }); }
function lib(){
  if(libP) return libP;
  return libP = (window.PDFLib ? Promise.resolve() : js("../shared/lib/pdf-lib.min.js")).then(function(){ return window.fontkit ? 0 : js("../shared/lib/fontkit.umd.min.js"); });
}
function holen(u){ return fetch(u).then(function(r){ if(!r.ok) throw new Error(u + " fehlt"); return r.arrayBuffer(); }); }
function sauber(font, s){
  var o = ""; String(s || "").replace(/\r/g, "").split("").forEach(function(c){
    if(c === "\n"){ o += c; return; }
    try{ font.encodeText(c); o += c; }catch(e){ o += ({"→":"->","←":"<-","−":"-","…":"..."})[c] || "?"; }
  });
  return o;
}
/* Schriftgröße so wählen, dass der Text ins Feld passt */
function groesse(font, f, txt){
  var fs = f.fs, min = f.fs * 0.55, w = f.w - 2;
  if(f.t === "t"){ while(fs > min && font.widthOfTextAtSize(txt, fs) > w) fs -= 0.25; return fs; }
  function zeilen(sz){
    var n = 0;
    txt.split("\n").forEach(function(abs){
      var cur = ""; n++;
      abs.split(" ").forEach(function(wort){
        var t = cur ? cur + " " + wort : wort;
        if(font.widthOfTextAtSize(t, sz) <= w || !cur) cur = t; else { n++; cur = wort; }
      });
    });
    return n;
  }
  while(fs > min && zeilen(fs) * 1.2 * font.heightAtSize(fs) > f.h - 2) fs -= 0.25;
  return fs;
}
window.bgPdf = function(id, knopf){
  var b = finde(id); if(!b) return;
  if(knopf){ knopf.style.opacity = ".4"; knopf.disabled = true; }
  var fertig = function(){ if(knopf){ knopf.style.opacity = ""; knopf.disabled = false; } };
  lib().then(function(){
    return Promise.all([holen("bogen/charakterbogen.pdf"), holen("../assets/fonts/pdf/alegreya-latin-400-normal.ttf")]);
  }).then(function(x){
    var P = PDFLib;
    return P.PDFDocument.load(x[0]).then(function(doc){
      doc.registerFontkit(window.fontkit);
      return doc.embedFont(x[1], {subset:false, features:{liga:false, clig:false, dlig:false, hlig:false, calt:false, rlig:false}}).then(function(font){
        var form = doc.getForm(), seiten = doc.getPages(), ink = P.rgb(TINTE[0], TINTE[1], TINTE[2]);
        L.felder.forEach(function(f){
          if(f.id === "aussehen" && b.bild) return;
          var r = {x:f.x, y:PH - f.y - f.h, width:f.w, height:f.h, borderWidth:0, borderColor:undefined, backgroundColor:undefined};
          var pg = seiten[f.s - 1];
          if(f.t === "x"){
            var c = form.createCheckBox(f.id); c.addToPage(pg, r);
            c.updateAppearances(function(){
              var w = f.w, h = f.h, d = 1.3, dick = 1.25;
              var an = P.drawLine({start:{x:d, y:d}, end:{x:w - d, y:h - d}, thickness:dick, color:ink}).concat(P.drawLine({start:{x:d, y:h - d}, end:{x:w - d, y:d}, thickness:dick, color:ink}));
              return {normal:{on:an, off:[]}, down:{on:an, off:[]}};
            });
            if(b.v[f.id]) c.check();
            return;
          }
          var t = form.createTextField(f.id), txt = sauber(font, b.v[f.id] || "");
          if(f.t === "m") t.enableMultiline();
          t.setText(f.t === "m" ? txt : txt.replace(/\n/g, " "));
          t.addToPage(pg, Object.assign(r, {font:font, textColor:ink}));
          t.setFontSize(groesse(font, f, txt));
        });
        form.updateFieldAppearances(font);
        var bild = b.bild ? doc.embedJpg(b.bild).then(function(img){
          var f = L.felder.filter(function(z){ return z.id === "aussehen"; })[0], s = Math.min(f.w / img.width, f.h / img.height), w = img.width * s, h = img.height * s;
          seiten[1].drawImage(img, {x:f.x + (f.w - w) / 2, y:PH - f.y - f.h + (f.h - h) / 2, width:w, height:h});
        }) : Promise.resolve();
        return bild.then(function(){
          doc.setTitle("Heart – " + titel(b)); doc.setCreator("Spielleitertool");
          doc.getInfoDict().set(P.PDFName.of("HTCharakter"), P.PDFHexString.fromText(JSON.stringify({v:b.v, bild:b.bild || null})));
          return doc.save();
        });
      });
    });
  }).then(function(bytes){ fertig(); ausgeben(bytes, "Heart – " + titel(b).replace(/[\\/:*?"<>|]/g, "") + ".pdf"); },
    function(e){ fertig(); alert("Das PDF konnte nicht erstellt werden: " + (e && e.message || e)); });
};
function ausgeben(bytes, datei){
  var blob = new Blob([bytes], {type:"application/pdf"});
  var file = typeof File === "function" ? new File([blob], datei, {type:"application/pdf"}) : null;
  if(matchMedia("(pointer:coarse)").matches && file && navigator.canShare && navigator.canShare({files:[file]})){
    return navigator.share({files:[file], title:datei}).catch(function(){ laden(blob, datei); });
  }
  laden(blob, datei);
}
function laden(blob, datei){
  var a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = datei;
  document.body.appendChild(a); a.click(); setTimeout(function(){ URL.revokeObjectURL(a.href); a.remove(); }, 4000);
}
/* Ausgefülltes PDF wieder einlesen: Feldwerte haben Vorrang (falls im PDF-Programm geändert) */
window.bgLaden = function(el){
  var inp = {files:el.files}, f0 = el.files[0]; if(f0 && /\.json$/i.test(f0.name)){ ladeJson(f0); el.value = ""; return; }
  {
    var f = inp.files[0]; if(!f) return;
    Promise.all([lib(), f.arrayBuffer()]).then(function(x){ return PDFLib.PDFDocument.load(x[1]); }).then(function(doc){
      var P = PDFLib, b = {id:neuId(), v:{}}, form = doc.getForm();
      try{ var j = doc.getInfoDict().lookup(P.PDFName.of("HTCharakter")); if(j){ var d = JSON.parse(j.decodeText()); b.v = d.v || {}; if(d.bild) b.bild = d.bild; } }catch(e){}
      var treffer = 0;
      L.felder.forEach(function(z){
        try{
          if(z.t === "x"){ var c = form.getCheckBox(z.id); treffer++; if(c.isChecked()) b.v[z.id] = true; else delete b.v[z.id]; }
          else { var t = form.getTextField(z.id); treffer++; var v = t.getText() || ""; if(v) b.v[z.id] = v; else delete b.v[z.id]; }
        }catch(e){}
      });
      if(!treffer){ alert("In diesem PDF wurde kein Heart-Charakterbogen gefunden."); return; }
      boegen().push(b); save(); go("bogen/" + b.id);
    }).catch(function(e){ alert("Das PDF konnte nicht gelesen werden: " + (e && e.message || e)); });
  }
  el.value = "";
};
})();
