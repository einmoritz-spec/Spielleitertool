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
  FillPDF.make(document.querySelector(".sheet"), {name:"Spire – " + (f.n || "Charakterbogen"), knopf:knopf, bg:"#dbe3ef", marks:[[".bgz i", "an me"], [".bgfr i", "x"], [".bgbk i", "x"]]});
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
  var fertig = function(){ var b = document.getElementById("bgTeil"); if(b){ b.textContent = "Link kopiert"; setTimeout(function(){ b.textContent = "Teilen"; }, 1800); } };
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
function bgBox(f, k, lab, x, y, w, h, inner){ return '<div class="bgbx" style="left:' + x + 'mm;top:' + y + 'mm;width:' + w + 'mm;height:' + h + 'mm"><h3>' + lab + '</h3>' + inner + '</div>'; }
function bgTa(f, k, cls){ return '<textarea class="bgt ' + (cls || "") + '" oninput="bgSet(\'' + f.id + '\',\'' + k + '\',this.value)">' + esc(f.bg[k] || "") + '</textarea>'; }
function bgBogen(f){
  if(f.vf && f.bg.faehig === undefined && f.bg.ausr === undefined && vfDaten(f.vf)){ bgVorlage(f.id); f = zFig(f.id); }
  var q = "'" + f.id + "'", T = 8, h = "";
  /* Kopfzeilen */
  [["Spielername", "spieler", 0], ["Figurenname", "n", 1], ["Klasse", "klasse", 1], ["Dienstzeit", "dienst", 1]].forEach(function(z, i){
    var v = z[2] ? f[z[1]] : f.bg[z[1]];
    h += '<div class="bgkz" style="top:' + (T + 13.5 + i * 9.5) + 'mm"><b>' + z[0] + '</b><input value="' + esc(v || "") + '" oninput="' + (z[2] ? 'bgSetF' : 'bgSet') + '(' + q + ',\'' + z[1] + '\',this.value)"></div>';
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
  return '<div class="bgbar noprint"><div class="bgch">' + chips + '<a class="neu" onclick="bgNeu()">+ Neuer Bogen</a><a class="neu" onclick="zVfAuswahl()">Vorgefertigte Figur</a></div><div class="bga">' +
    (f && f.vf ? '<button class="knopf b" onclick="bgVorlage(\'' + f.id + '\')">Aus Vorlage füllen</button>' : '') +
    (f ? '<button class="knopf b" id="bgTeil" onclick="bgTeilen(\'' + f.id + '\')">Teilen</button><button class="knopf" onclick="bgPdf(\'' + f.id + '\', this)">PDF</button><button class="knopf n" onclick="bgWeg(\'' + f.id + '\')">Entfernen</button>' : '') + '</div></div>';
}
SP_VIEW.bogen = function(rest){
  var f;
  if(rest[0] === "s" && rest[1]){
    var d = bgDekodieren(rest[1]);
    if(d){ f = zNeu(d); f.id = "f" + Date.now().toString(36) + Math.floor(Math.random() * 1296).toString(36); f.vf = d.vf || null; zFigs().push(f); save(); history.replaceState(null, "", "#bogen/" + f.id); }
  } else if(rest[0]) f = zFig(rest[0]);
  if(!f) f = zFigs()[0];
  if(!f){ f = zNeu(); f.bg = {}; zFigs().push(f); save(); }
  f = bgF(f.id);
  return '<div class="bgwrap">' + bgLeiste(f) + '<div class="sheetwrap">' + bgBogen(f) + '</div></div>';
};
