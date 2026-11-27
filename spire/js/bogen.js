/* The Spire – interaktiver Charakterbogen (Bogen S. 212): #bogen[/<figur>] · geteilt: #bogen/s/<daten>
   Der Bogen ist eine Ansicht derselben Figur wie in der Zelle (ST.figuren); Bogen-Texte liegen in f.bg. Druck: A4 hoch, eine Seite. */
var BG_WID = [["blut", "Blut"], ["verstand", "Verstand"], ["silber", "Silber"], ["schatten", "Schatten"], ["ruf", "Ruf"]];
function bgF(fid){ var f = zFig(fid); if(f && !f.bg) f.bg = {}; if(f && !f.mei) f.mei = []; return f; }
function bgSet(fid, k, v){ var f = bgF(fid); if(f){ f.bg[k] = v; save(); } }
function bgSetF(fid, k, v){ var f = zFig(fid); if(f){ f[k] = v; save(); } }
function bgKniffe(fid, v){ var f = zFig(fid); if(f){ f.kniffe = v.split("\n").filter(function(x){ return x.trim(); }); save(); } }
/* Fertigkeit/Domäne: leer → vorhanden → Meisterschaft → leer */
function bgSk(fid, art, name){
  var f = bgF(fid); if(!f) return; var L = f[art], hat = L.indexOf(name) >= 0, mei = f.mei.indexOf(name) >= 0;
  if(!hat){ L.push(name); } else if(!mei){ f.mei.push(name); } else { L.splice(L.indexOf(name), 1); f.mei.splice(f.mei.indexOf(name), 1); }
  save(); render();
}
function bgFrei(fid, r, v){ var f = zFig(fid); if(!f) return; f.frei[r] = +v; if(f.freiX) f.freiX[r] = Math.min(f.freiX[r] || 0, +v); save(); render(); }
function bgBindName(fid, i, v){ var f = zFig(fid); if(f && f.bind[i]){ f.bind[i].n = v; save(); } }
function bgBindWeg(fid, i){ var f = zFig(fid); if(f && f.bind[i]){ f.bind.splice(i, 1); save(); render(); } }
function bgNeu(){ var f = zNeu(); f.bg = {}; zFigs().push(f); save(); go("bogen/" + f.id); }
function bgWeg(fid){ var f = zFig(fid); if(f && confirm("Bogen „" + f.n + "“ entfernen? Die Figur verschwindet auch aus der Zelle.")){ ST.figuren = zFigs().filter(function(x){ return x.id !== fid; }); save(); go("bogen"); } }
function bgVorlage(fid){
  var f = bgF(fid), v = f && f.vf && vfDaten(f.vf); if(!v) return;
  f.bg.faehig = v.fae.map(function(a){ return a.t + (a.tag ? " [" + a.tag + "]" : "") + ": " + String(a.f || "").replace(/\*/g, "") + " " + String(a.x || "").replace(/\*/g, ""); }).join("\n\n");
  f.bg.ausr = v.ausr.join("\n"); save(); render();
}
function bgPdf(fid, knopf){
  var f = zFig(fid); if(!f || !window.FillPDF) return;
  var w = document.querySelector(".bgwrap"), bt = knopf;
  if(bt){ bt.style.opacity = ".4"; }
  FillPDF.make(document.querySelector(".sheet"), {name:"Spire – " + (f.n || "Charakterbogen"), bg:"#dbe3ef", marks:[[".bgz i", "an me"], [".bgfr i", "x"], [".bgbk i", "x"]],
    before:function(){ if(w) w.classList.add("pdfm"); }, after:function(){ if(w) w.classList.remove("pdfm"); if(bt) bt.style.opacity = ""; }});
}

/* ---- Teilen: Figur als Link ---- */
function bgKodieren(f){
  var o = {n:f.n, klasse:f.klasse, dienst:f.dienst, auff:f.auff, frei:f.frei, fert:f.fert, dom:f.dom, mei:f.mei || [], kniffe:f.kniffe || [], bind:(f.bind || []).map(function(b){ return {n:b.n, ebene:b.ebene}; }), bg:f.bg || {}, stress:f.stress || {}, freiX:f.freiX || {}, fallout:f.fallout || [], vf:f.vf || null};
  var s = btoa(unescape(encodeURIComponent(JSON.stringify(o)))).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
  return location.href.split("#")[0] + "#bogen/s/" + s;
}
function bgDekodieren(s){
  try{ s = s.replace(/-/g, "+").replace(/_/g, "/"); while(s.length % 4) s += "="; return JSON.parse(decodeURIComponent(escape(atob(s)))); }catch(e){ return null; }
}
function bgTeilen(fid){
  var f = zFig(fid); if(!f) return; var url = bgKodieren(f);
  var fertig = function(){ bgToast("Link kopiert"); };
  if(navigator.share){ navigator.share({title:"Spire – " + f.n, url:url}).catch(function(){}); return; }
  if(navigator.clipboard && navigator.clipboard.writeText){ navigator.clipboard.writeText(url).then(fertig, function(){ prompt("Link zum Teilen:", url); }); }
  else prompt("Link zum Teilen:", url);
}
/* ---- Bogen: Aufbau wie im Buch (S. 212), Maße in mm auf A4 ---- */
function bgSk2(f, art, n, y){
  var hat = f[art].indexOf(n) >= 0, mei = f.mei.indexOf(n) >= 0;
  return '<div class="bgz" style="top:' + y + 'mm" onclick="bgSk(\'' + f.id + '\',\'' + art + '\',\'' + n + '\')"><span>' + esc(n) + '</span><i class="' + (hat ? 'an' : '') + (mei ? ' me' : '') + '"></i></div>';
}
function bgFreiKlick(fid, r, i){
  var f = zFig(fid); if(!f) return; f.freiX = f.freiX || {}; var fr = f.frei[r] || 0, x = f.freiX[r] || 0;
  if(i >= fr){ f.frei[r] = i + 1; }
  else if(i < x){ f.freiX[r] = i; }
  else { f.freiX[r] = i + 1; }
  save(); render();
}
function bgFreiWeg(ev, fid, r, i){ ev.preventDefault(); var f = zFig(fid); if(!f) return; f.frei[r] = i; f.freiX = f.freiX || {}; f.freiX[r] = Math.min(f.freiX[r] || 0, i); save(); render(); }
function bgStress(fid, r, d){ var f = zFig(fid); if(!f) return; f.stress = f.stress || {}; f.stress[r] = Math.max(0, Math.min(10, (f.stress[r] || 0) + d)); save(); render(); }
function bgBox(f, k, lab, x, y, w, h, inner){ var dd = {kniffe:1, ausr:1, auff:1, faehig:1}[k] ? '<button class="bgdd noprint" onclick="spPop(this,event,\'' + f.id + '\',\'' + k + '\')" data-hint="Beispiele – du kannst auch frei schreiben" aria-label="Beispiele">▾</button>' : ''; return '<div class="bgbx" style="left:' + x + 'mm;top:' + y + 'mm;width:' + w + 'mm;height:' + h + 'mm"><h3>' + lab + '</h3>' + dd + inner + '</div>'; }
function bgTa(f, k, cls){ return '<textarea class="bgt ' + (cls || "") + '" oninput="bgSet(\'' + f.id + '\',\'' + k + '\',this.value)">' + esc(f.bg[k] || "") + '</textarea>'; }
function bgBogen(f){
  if(f.vf && f.bg.faehig === undefined && f.bg.ausr === undefined && vfDaten(f.vf)){ bgVorlage(f.id); f = zFig(f.id); }
  var q = "'" + f.id + "'", T = 8, h = "";
  /* Kopfzeilen */
  [["Spielername", "spieler", 0], ["Figurenname", "n", 1], ["Klasse", "klasse", 1], ["Dienstzeit", "dienst", 1]].forEach(function(z, i){
    var v = z[2] ? f[z[1]] : f.bg[z[1]];
    var wahl = z[1] === "klasse" || z[1] === "dienst";
    h += '<div class="bgkz" style="top:' + (T + 13.5 + i * 9.5) + 'mm"><b>' + z[0] + '</b><input' + (wahl ? ' class="bgwahl" readonly onclick="spPop(this,event,' + q + ',\'' + z[1] + '\')"' : ' oninput="' + (z[2] ? 'bgSetF' : 'bgSet') + '(' + q + ',\'' + z[1] + '\',this.value)"') + ' value="' + esc(v || "") + '">' + (wahl ? '<u class="bgpf noprint">▾</u>' : '') + '</div>';
  });
  /* Fertigkeiten und Domänen */
  h += '<h2 class="bgh" style="left:15mm;top:' + (T + 59.3) + 'mm">Fertigkeiten</h2>';
  SP_FERTIGKEITEN.forEach(function(n, i){ h += bgSk2(f, "fert", n, T + 68.2 + i * 6.83); });
  h += '<h2 class="bgh" style="left:15mm;top:' + (T + 134.4) + 'mm">Domänen</h2>';
  SP_DOMAENEN.forEach(function(n, i){ h += bgSk2(f, "dom", n, T + 143.3 + i * 6.83); });
  /* Kästen */
  h += bgBox(f, "kniffe", "Kniffe", 63.4, T + 56, 43, 43.8, '<textarea class="bgt" oninput="bgKniffe(' + q + ',this.value)">' + esc((f.kniffe || []).join("\n")) + '</textarea>');
  h += bgBox(f, "ausr", "Ausrüstung", 111.8, T + 56, 43, 43.8, bgTa(f, "ausr", (f.bg.ausr || "").length > 200 ? "kl2" : (f.bg.ausr || "").length > 120 ? "kl" : ""));
  h += bgBox(f, "auff", "Auffrischen", 159.6, T + 56, 43, 43.8, '<textarea class="bgt" oninput="bgSetF(' + q + ',\'auff\',this.value)">' + esc(f.auff || "") + '</textarea>');
  var fl = (f.bg.faehig || "").length;
  h += bgBox(f, "faehig", "Fähigkeiten", 63.4, T + 105.1, 91.1, 103.4, bgTa(f, "faehig", fl > 1500 ? "kl2" : fl > 900 ? "kl" : ""));
  var bind = f.bind.map(function(b, i){
    var n = ({einzel:3, figur:3, strasse:4, stadt:5})[b.ebene] || 3, k = "";
    for(var j = 0; j < n; j++) k += '<i class="' + (j < (b.s || 0) ? 'x' : '') + '" onclick="zBindBox(' + q + ',' + i + ',' + j + ')"></i>';
    return '<div class="bgbd"><input value="' + esc(b.n) + '" oninput="bgBindName(' + q + ',' + i + ',this.value)"><span class="bgbk">' + k + '</span><s class="noprint" onclick="bgBindWeg(' + q + ',' + i + ')">×</s></div>';
  }).join("") + '<div class="bgplus noprint" onclick="zBNeu(' + q + ')">+ Bindung</div>';
  h += bgBox(f, "bind", "Bindungen", 159.6, T + 105.1, 43, 81.5, '<div class="bgin">' + bind + '</div>');
  var fo = (f.fallout || []).map(function(o, i){ var e = (window.SP_FALLOUT && SP_FALLOUT.finde(o.id)) || {t:o.id}; return '<div class="bgfo" onclick="zChip(' + q + ',' + i + ')">' + esc(e.t) + ' <small>(' + zWidT(o.w) + ')</small></div>'; }).join("");
  h += bgBox(f, "fallout", "Fallout", 159.6, T + 191.9, 43, 81.6, '<div class="bgin" data-pdftx>' + fo + '</div>' + bgTa(f, "fallout"));
  /* Unterer Block: Freiplätze · Widerstände · Aktueller Stress */
  h += '<div class="bgpap"></div>';
  h += '<h2 class="bgh" style="left:15mm;top:' + (T + 213.4) + 'mm">Freiplätze</h2><h2 class="bgh" style="left:63.4mm;top:' + (T + 213.4) + 'mm">Widerstände</h2><h2 class="bgh" style="left:111.5mm;top:' + (T + 213.4) + 'mm">Aktueller Stress</h2>';
  [["blut", "Blut"], ["verstand", "Verstand"], ["silber", "Silber"], ["schatten", "Schatten"], ["ruf", "Ruf"], ["ruest", "Rüstung"]].forEach(function(w, i){
    var y = T + 221.3 + i * 6.85, fr = f.frei[w[0]] || 0, x = (f.freiX && f.freiX[w[0]]) || 0, k = "";
    for(var j = 0; j < 5; j++) k += '<i class="' + (j < fr ? (j < x ? 'a x' : 'a') : '') + '" onclick="bgFreiKlick(' + q + ',\'' + w[0] + '\',' + j + ')" oncontextmenu="bgFreiWeg(event,' + q + ',\'' + w[0] + '\',' + j + ')"></i>';
    var st = w[0] === "ruest" ? '' : '<span class="bgst"><s class="noprint" onclick="bgStress(' + q + ',\'' + w[0] + '\',-1)">−</s><b data-pdftx>' + ((f.stress && f.stress[w[0]]) || '') + '</b><s class="noprint" onclick="bgStress(' + q + ',\'' + w[0] + '\',1)">+</s></span>';
    h += '<div class="bgrow' + (i % 2 ? '' : ' bgdk') + '" style="top:' + y + 'mm"><span class="bgfr">' + k + '</span><span class="bgwn">' + w[1] + '</span>' + st + '</div>';
  });
  h += '<div class="bgges" style="top:' + (T + 265.3) + 'mm"><b>Gesamtstress:</b><span data-pdftx>' + (zTotal(f) || '') + '</span></div>';
  return '<div class="sheet" data-pgbook="sp_cmf"><div class="bgrand"></div>' + h + '</div>';
}
function bgLeiste(f){
  var chips = zFigs().map(function(x){ return '<a class="' + (f && x.id === f.id ? 'on' : '') + '" onclick="go(\'bogen/' + x.id + '\')">' + esc(x.n) + '</a>'; }).join("");
  return '<div class="bgbar noprint"><div class="bgch">' + chips + '<a class="neu" onclick="bgNeu()" data-tip="Neuen Bogen anlegen" aria-label="Neuen Bogen anlegen">+</a><a class="neu" onclick="zVfAuswahl()">Vorgefertigte Figur</a></div><div class="bga">' +
    (f && f.vf ? '<button class="ib" data-hint="Aus Vorlage füllen" aria-label="Aus Vorlage füllen" onclick="bgVorlage(\'' + f.id + '\')"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M4 12a8 8 0 0 1 14-5.3M20 4v5h-5"/><path d="M20 12a8 8 0 0 1-14 5.3M4 20v-5h5"/></svg></button>' : '') +
    (f ? '<button class="ib" data-hint="Zufällige Figur erstellen" aria-label="Zufällige Figur erstellen" onclick="bgZufall(\'' + f.id + '\')"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3.5" y="3.5" width="17" height="17" rx="3"/><circle cx="8.5" cy="8.5" r=".9" fill="currentColor"/><circle cx="15.5" cy="8.5" r=".9" fill="currentColor"/><circle cx="12" cy="12" r=".9" fill="currentColor"/><circle cx="8.5" cy="15.5" r=".9" fill="currentColor"/><circle cx="15.5" cy="15.5" r=".9" fill="currentColor"/></svg></button><button class="ib" data-hint="Bogen leeren" aria-label="Bogen leeren" onclick="bgLeeren(\'' + f.id + '\')"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3.5 12a8.5 8.5 0 1 0 2.6-6.1"/><path d="M3.5 4v5h5"/></svg></button><button class="ib" data-hint="Link teilen" aria-label="Link teilen" onclick="bgTeilen(\'' + f.id + '\')"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="2.6"/><circle cx="6" cy="12" r="2.6"/><circle cx="18" cy="19" r="2.6"/><path d="M8.3 10.7l7.4-4.3M8.3 13.3l7.4 4.3"/></svg></button><button class="ib" data-hint="Als Datei sichern" aria-label="Als Datei sichern" onclick="bgJson(\'' + f.id + '\')"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4v11"/><path d="M7 11l5 5 5-5"/><path d="M5 20h14"/></svg></button><label class="ib" data-hint="Datei laden (JSON)" aria-label="Datei laden"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 16V5"/><path d="M7 9l5-5 5 5"/><path d="M5 20h14"/></svg><input type="file" accept=".json,application/json" hidden onchange="bgLadeJson(this)"></label><button class="ib" data-hint="Als PDF speichern" aria-label="Als PDF speichern" onclick="bgPdf(\'' + f.id + '\',this)"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 3h11l4 4v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"/><path d="M7.5 3v5h8V3"/><rect x="7" y="13" width="10" height="8"/></svg></button><button class="ib weg" data-hint="Bogen löschen" aria-label="Bogen löschen" onclick="bgWeg(\'' + f.id + '\')"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16"/><path d="M9 7V4h6v3"/><path d="M6 7l1 13h10l1-13"/></svg></button>' : '') + '</div></div>';
}

/* ---- Auswahl, Zufall, Leeren, Datei ---- */
function bgToast(t){ var d = document.createElement("div"); d.className = "bgtoast"; d.textContent = t; document.body.appendChild(d); setTimeout(function(){ d.remove(); }, 2400); }
function bgPlain(t){ return String(t || "").replace(/\*/g, ""); }
function bgKl(f){ var n = String(f.klasse || "").toLowerCase(); return (window.SP_KLASSE || []).filter(function(k){ return String(k.t).toLowerCase() === n; })[0]; }
function bgPunkte(K){ var o = []; (K.ausr || []).forEach(function(a){ if(a.k === "pkt") o.push(bgPlain(a.x)); }); return o; }
function bgAusw(f, k){
  var K = bgKl(f);
  if(k === "klasse") return {wahl:1, items:SP_KLASSE.map(function(x){ return {t:x.t, i:bgPlain((x.intro || [])[0])}; }), set:function(it){ f.klasse = it.t; }};
  if(k === "dienst") return {wahl:1, items:SP_CHARAKTERE.dienst.x.map(function(x){ return {t:x.t, i:bgPlain(x.x) + (x.w ? "\n\nStartwerte: " + x.w : "")}; }), set:function(it){ f.dienst = it.t; }};
  if(!K) return {items:[], leer:"Wähle zuerst eine Klasse."};
  if(k === "auff") return {items:[{t:K.kern.auff}], set:function(it){ f.auff = it.t; }};
  if(k === "ausr") return {items:bgPunkte(K).map(function(t){ return {t:t}; }), set:function(it){ var b = bgF(f.id).bg; b.ausr = b.ausr ? b.ausr + "\n" + it.t : it.t; }};
  if(k === "kniffe") { var it = (K.kfae || []).map(function(x){ return {t:x.t, i:bgPlain(x.fl) + " " + bgPlain((x.x || []).join(" "))}; }); return {items:it, set:function(i){ f.kniffe = (f.kniffe || []).concat([i.t]); }}; }
  if(k === "faehig"){ var l = []; ["niedrig", "hoch"].forEach(function(g){ ((K.fort || {})[g] || []).forEach(function(x){ l.push({t:x.t, g:g === "niedrig" ? "Niedrige Fähigkeiten" : "Hohe Fähigkeiten", i:bgPlain(x.fl) + " " + bgPlain((x.x || []).join(" "))}); }); });
    return {items:l, set:function(i){ var b = bgF(f.id).bg, z = i.t + ": " + i.i; b.faehig = b.faehig ? b.faehig + "\n\n" + z : z; }}; }
  return null;
}
function bgPopWeg(){ document.querySelectorAll(".bgpop,.bginfo").forEach(function(e){ e.remove(); }); }
document.addEventListener("click", bgPopWeg);
function bgInfoAn(p, btn, it){
  var o = document.querySelector(".bginfo"); if(o) o.remove();
  p.querySelectorAll(".bgi.sel").forEach(function(x){ x.classList.remove("sel"); }); btn.classList.add("sel");
  var q = p.getBoundingClientRect(), c = document.createElement("div"); c.className = "bginfo";
  var t = it.i || ""; if(t.length > 520){ var cut = t.slice(0, 520), i = Math.max(cut.lastIndexOf(". "), cut.lastIndexOf("! ")); t = i > 120 ? cut.slice(0, i + 1) : cut.replace(/\s+\S*$/, "") + " …"; }
  c.innerHTML = "<h4>" + esc(it.t) + "</h4><p>" + esc(t).replace(/\n/g, "<br>") + "</p>";
  c.style.top = q.top + "px"; c.style.maxHeight = q.height + "px";
  var re = q.right + 340 + 8 < innerWidth; c.style.left = re ? (q.right - 1) + "px" : (q.left - 340 + 1) + "px"; c.classList.add(re ? "re" : "li");
  c.addEventListener("click", function(x){ x.stopPropagation(); }); document.body.appendChild(c);
}
function spPop(el, e, fid, k){
  e.stopPropagation(); var old = document.querySelector(".bgpop"), same = old && old.dataset.k === k; bgPopWeg(); if(same) return;
  var f = zFig(fid), A = f && bgAusw(f, k); if(!A) return;
  var r = (el.closest(".bgkz") || el).getBoundingClientRect(), p = document.createElement("div"); p.className = "bgpop"; p.dataset.k = k;
  p.style.left = Math.max(8, Math.min(r.left + (el.closest(".bgkz") ? 150 : 0), innerWidth - 360)) + "px"; p.style.top = (el.getBoundingClientRect().bottom + 4) + "px";
  var gr = "", h = A.wahl ? "" : '<div class="bgkopf">Beispiele – du kannst auch frei schreiben</div>';
  h += A.items.map(function(it, i){ var g = ""; if(it.g && it.g !== gr){ gr = it.g; g = "<h5>" + esc(it.g) + "</h5>"; } return g + '<div class="bgzl"><button class="bgn" data-i="' + i + '">' + esc(it.t) + '</button>' + (it.i ? '<button class="bgi" data-j="' + i + '" title="Info" aria-label="Info">i</button>' : "") + "</div>"; }).join("");
  if(!A.items.length) h += '<div class="bgzl"><span class="bgn">' + esc(A.leer || "–") + "</span></div>";
  p.innerHTML = h;
  p.addEventListener("click", function(ev){
    ev.stopPropagation(); var bt = ev.target.closest("button"); if(!bt) return;
    if(bt.dataset.j !== undefined){ bgInfoAn(p, bt, A.items[+bt.dataset.j]); return; }
    A.set(A.items[+bt.dataset.i]); bgPopWeg(); save(); render();
  });
  document.body.appendChild(p);
  var hh = p.getBoundingClientRect().height, top = parseFloat(p.style.top); if(top + hh > innerHeight) p.style.top = Math.max(8, innerHeight - hh - 8) + "px";
}
var BG_NAMEN = ["Mara Voss","Tobiah Krähe","Ilse Brandt","Corvin Asch","Nadja Dorn","Emeric Salz","Odile Varn","Jorin Falk","Vesna Kuhl","Ansgar Wolff","Liora Quill","Bastian Ried","Thessaly Noor","Kaspar Lenz","Maren Eichwald","Dorian Pell","Yelena Marsch","Hagen Roth","Sibylle Orn","Pim Garrow"];
function bgToken(txt, liste){
  var m = txt.search(/entweder|\boder\b/), vor = m < 0 ? txt : txt.slice(0, m), nach = m < 0 ? "" : txt.slice(m), o = [];
  liste.forEach(function(n){ if(vor.indexOf(n) >= 0) o.push(n); });
  var w = liste.filter(function(n){ return nach.indexOf(n) >= 0 && o.indexOf(n) < 0; });
  if(w.length) o.push(w[Math.floor(Math.random() * w.length)]);
  return o;
}
function bgZufall(fid){
  var f = zFig(fid); if(!f) return;
  if((f.klasse || f.dienst || (f.fert || []).length) && !confirm("Die Einträge dieses Bogens durch eine zufällige Figur ersetzen?")) return;
  var pk = function(l){ return l[Math.floor(Math.random() * l.length)]; }, K = pk(SP_KLASSE), D = pk(SP_CHARAKTERE.dienst.x);
  f.n = pk(BG_NAMEN); f.klasse = K.t; f.dienst = D.t; f.vf = null; f.auff = K.kern.auff || "";
  f.fert = bgToken((K.kern.fert || "") + " " + (D.w || ""), SP_FERTIGKEITEN); f.dom = bgToken((K.kern.dom || "") + " " + (D.w || ""), SP_DOMAENEN);
  f.mei = []; f.frei = {blut:0, verstand:0, silber:0, schatten:0, ruf:0, ruest:0}; f.freiX = {}; f.stress = {}; f.fallout = []; f.bind = [];
  var ap = bgPunkte(K), idx = ap.findIndex(function(t){ return /^Oder:?$/i.test(t); });
  f.bg = {ausr:ap.join("\n")}; var kf = K.kfae || []; f.kniffe = kf.length ? [pk(kf).t] : [];
  var nf = ((K.fort || {}).niedrig || []); if(nf.length){ var z = pk(nf); f.bg.faehig = z.t + ": " + bgPlain(z.fl) + " " + bgPlain((z.x || []).join(" ")); }
  save(); render(); bgToast("Zufällige Figur erstellt");
}
function bgLeeren(fid){
  var f = zFig(fid); if(!f || !confirm("Alle Einträge dieses Bogens löschen?")) return;
  f.n = "Neue Figur"; f.klasse = ""; f.dienst = ""; f.auff = ""; f.vf = null; f.fert = []; f.dom = []; f.mei = []; f.kniffe = []; f.bg = {}; f.stress = {}; f.fallout = []; f.bind = [];
  f.frei = {blut:0, verstand:0, silber:0, schatten:0, ruf:0, ruest:0}; f.freiX = {}; save(); render();
}
function bgJson(fid){
  var f = zFig(fid); if(!f) return;
  var a = document.createElement("a"); a.href = URL.createObjectURL(new Blob([JSON.stringify({spire:1, figur:f}, null, 1)], {type:"application/json"}));
  a.download = "Spire – " + String(f.n || "Figur").replace(/[\\/:*?"<>|]/g, "") + ".json"; document.body.appendChild(a); a.click(); setTimeout(function(){ URL.revokeObjectURL(a.href); a.remove(); }, 3000);
}
function bgLadeJson(el){
  var d = el.files[0]; if(!d) return;
  d.text().then(function(t){ var o = JSON.parse(t); if(!o || !o.figur) throw 0; var f = zNeu(o.figur); f.id = "f" + Date.now().toString(36) + Math.floor(Math.random() * 1296).toString(36); zFigs().push(f); save(); go("bogen/" + f.id); }).catch(function(){ alert("Das ist keine Spire-Charakterdatei."); });
  el.value = "";
}

/* ---- Breiter Modus (Bildschirm ab ca. 1150 px): gleiche Daten, Querformat-Anordnung; PDF und Druck bleiben A4 ---- */
function bgBoxB(f, k, lab, inner, cls){
  var dd = {kniffe:1, ausr:1, auff:1, faehig:1}[k] ? '<button class="bgdd noprint" onclick="spPop(this,event,\'' + f.id + '\',\'' + k + '\')" aria-label="Beispiele">▾</button>' : "";
  return '<div class="bgbx ' + (cls || "") + '"><h3>' + lab + '</h3>' + dd + inner + '</div>';
}
function bgBreit(f){
  var q = "'" + f.id + "'", h = "";
  var kopf = [["Spielername", "spieler", 0], ["Figurenname", "n", 1], ["Klasse", "klasse", 1], ["Dienstzeit", "dienst", 1]].map(function(z){
    var v = z[2] ? f[z[1]] : f.bg[z[1]], wahl = z[1] === "klasse" || z[1] === "dienst";
    return '<div class="bgkz"><b>' + z[0] + '</b><input' + (wahl ? ' class="bgwahl" readonly onclick="spPop(this,event,' + q + ',\'' + z[1] + '\')"' : ' oninput="' + (z[2] ? 'bgSetF' : 'bgSet') + '(' + q + ',\'' + z[1] + '\',this.value)"') + ' value="' + esc(v || "") + '">' + (wahl ? '<u class="bgpf noprint">▾</u>' : '') + '</div>';
  }).join("");
  var fe = SP_FERTIGKEITEN.map(function(n){ return bgSk2(f, "fert", n, 0); }).join(""), dm = SP_DOMAENEN.map(function(n){ return bgSk2(f, "dom", n, 0); }).join("");
  var bind = f.bind.map(function(b, i){
    var n = ({einzel:3, figur:3, strasse:4, stadt:5})[b.ebene] || 3, k = "";
    for(var j = 0; j < n; j++) k += '<i class="' + (j < (b.s || 0) ? 'x' : '') + '" onclick="zBindBox(' + q + ',' + i + ',' + j + ')"></i>';
    return '<div class="bgbd"><input value="' + esc(b.n) + '" oninput="bgBindName(' + q + ',' + i + ',this.value)"><span class="bgbk">' + k + '</span><s class="noprint" onclick="bgBindWeg(' + q + ',' + i + ')">×</s></div>';
  }).join("") + '<div class="bgplus noprint" onclick="zBNeu(' + q + ')">+ Bindung</div>';
  var fo = (f.fallout || []).map(function(o, i){ var e = (window.SP_FALLOUT && SP_FALLOUT.finde(o.id)) || {t:o.id}; return '<div class="bgfo" onclick="zChip(' + q + ',' + i + ')">' + esc(e.t) + ' <small>(' + zWidT(o.w) + ')</small></div>'; }).join("");
  var wid = [["blut", "Blut"], ["verstand", "Verstand"], ["silber", "Silber"], ["schatten", "Schatten"], ["ruf", "Ruf"], ["ruest", "Rüstung"]].map(function(w, i){
    var fr = f.frei[w[0]] || 0, x = (f.freiX && f.freiX[w[0]]) || 0, k = "";
    for(var j = 0; j < 5; j++) k += '<i class="' + (j < fr ? (j < x ? 'a x' : 'a') : '') + '" onclick="bgFreiKlick(' + q + ',\'' + w[0] + '\',' + j + ')" oncontextmenu="bgFreiWeg(event,' + q + ',\'' + w[0] + '\',' + j + ')"></i>';
    var st = w[0] === "ruest" ? '' : '<span class="bgst"><s onclick="bgStress(' + q + ',\'' + w[0] + '\',-1)">−</s><b>' + ((f.stress && f.stress[w[0]]) || '') + '</b><s onclick="bgStress(' + q + ',\'' + w[0] + '\',1)">+</s></span>';
    return '<div class="bgrow' + (i % 2 ? '' : ' bgdk') + '"><span class="bgfr">' + k + '</span><span class="bgwn">' + w[1] + '</span>' + st + '</div>';
  }).join("");
  var fl = (f.bg.faehig || "").length;
  h += '<div class="bgb-kopf">' + kopf + '</div>';
  h += '<div class="bgb-sp bgb-s1">' + bgBoxB(f, "fert", "Fertigkeiten", fe, "bgb-l") + bgBoxB(f, "dom", "Domänen", dm, "bgb-l") + '</div>';
  h += '<div class="bgb-sp bgb-s2">' + bgBoxB(f, "kniffe", "Kniffe", '<textarea class="bgt" oninput="bgKniffe(' + q + ',this.value)">' + esc((f.kniffe || []).join("\n")) + '</textarea>') +
    bgBoxB(f, "ausr", "Ausrüstung", bgTa(f, "ausr")) + bgBoxB(f, "auff", "Auffrischen", '<textarea class="bgt" oninput="bgSetF(' + q + ',\'auff\',this.value)">' + esc(f.auff || "") + '</textarea>') + '</div>';
  h += '<div class="bgb-sp bgb-s3">' + bgBoxB(f, "faehig", "Fähigkeiten", bgTa(f, "faehig")) + '</div>';
  h += '<div class="bgb-sp bgb-s4">' + bgBoxB(f, "bind", "Bindungen", '<div class="bgin">' + bind + '</div>') + bgBoxB(f, "fallout", "Fallout", '<div class="bgin">' + fo + '</div>' + bgTa(f, "fallout")) + '</div>';
  h += '<div class="bgb-w bgbx"><h3>Freiplätze · Widerstände · Aktueller Stress</h3><div class="bgb-wg">' + wid + '</div><div class="bgges"><b>Gesamtstress:</b><span>' + (zTotal(f) || '') + '</span></div></div>';
  return '<div class="bgbreit">' + h + '</div>';
}
if(window.LK) LK.init(function(h){ return /^#bogen/.test(h); });
SP_VIEW.bogen = function(rest){
  var f;
  if(rest[0] === "s" && rest[1]){
    var d = bgDekodieren(rest[1]);
    if(d){ f = zNeu(d); f.id = "f" + Date.now().toString(36) + Math.floor(Math.random() * 1296).toString(36); f.vf = d.vf || null; zFigs().push(f); save(); LK.an(); history.replaceState(null, "", "#bogen/" + f.id); }
  } else if(rest[0]) f = zFig(rest[0]);
  if(!f) f = zFigs()[0];
  if(!f){ f = zNeu(); f.bg = {}; zFigs().push(f); save(); }
  f = bgF(f.id);
  return '<div class="bgwrap">' + bgLeiste(f) + '<div class="sheetwrap">' + bgBogen(f) + bgBreit(f) + '</div></div>';
};
