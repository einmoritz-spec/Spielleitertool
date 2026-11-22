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
function bgDruck(){ window.print(); }
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
function bgKarte(f){ return f; }
/* ---- Bogen ---- */
function bgBoxen(f, r, art){ return '<span class="bgb">' + zBoxen(f, r, art) + '</span>'; }
function bgReihe(f, art, L){
  return L.map(function(n){
    var hat = f[art].indexOf(n) >= 0, mei = f.mei.indexOf(n) >= 0;
    return '<li onclick="bgSk(\'' + f.id + '\',\'' + art + '\',\'' + n + '\')"><i class="m' + (hat ? ' an' : '') + (mei ? ' me' : '') + '"></i><span>' + esc(n) + '</span></li>';
  }).join("");
}
function bgTa(f, k, cls){ return '<textarea class="bgt ' + (cls || "") + '" oninput="bgSet(\'' + f.id + '\',\'' + k + '\',this.value)">' + esc(f.bg[k] || "") + '</textarea>'; }
function bgIn(f, k, lab, ziel){ var v = ziel === "f" ? f[k] : f.bg[k]; return '<label class="bgl"><span>' + lab + '</span><input value="' + esc(v || "") + '" oninput="' + (ziel === "f" ? 'bgSetF' : 'bgSet') + '(\'' + f.id + '\',\'' + k + '\',this.value)"></label>'; }
function bgBogen(f){
  if(f.vf && f.bg.faehig === undefined && f.bg.ausr === undefined){ var v = vfDaten(f.vf); if(v){ bgVorlage(f.id); f = zFig(f.id); } }
  var q = "'" + f.id + "'";
  var bind = f.bind.map(function(b, i){
    var n = ({einzel:3, figur:3, strasse:4, stadt:5})[b.ebene] || 3, h = "";
    for(var j = 0; j < n; j++) h += '<i class="' + (j < (b.s || 0) ? 'x' : '') + '" onclick="zBindBox(' + q + ',' + i + ',' + j + ')"></i>';
    return '<div class="bgbd"><input value="' + esc(b.n) + '" oninput="bgBindName(' + q + ',' + i + ',this.value)"><span class="bgb">' + h + '</span><s class="noprint" onclick="bgBindWeg(' + q + ',' + i + ')" title="Entfernen">×</s></div>';
  }).join("") + '<div class="bgplus noprint" onclick="zBNeu(' + q + ')">+ Bindung</div>';
  var fo = (f.fallout || []).map(function(o, i){ var e = (window.SP_FALLOUT && SP_FALLOUT.finde(o.id)) || {t:o.id}; return '<span class="bgfo" onclick="zChip(' + q + ',' + i + ')">' + esc(e.t) + ' <small>' + zWidT(o.w) + '</small></span>'; }).join("");
  var wid = BG_WID.map(function(w){
    return '<div class="bgw"><b>' + w[1] + '</b><label class="noprint"><select onchange="bgFrei(' + q + ',\'' + w[0] + '\',this.value)">' + [0, 1, 2, 3, 4, 5].map(function(n){ return '<option' + (f.frei[w[0]] === n ? ' selected' : '') + '>' + n + '</option>'; }).join("") + '</select></label>' + bgBoxen(f, w[0], "f") + bgBoxen(f, w[0], "s") + '</div>';
  }).join("") + '<div class="bgw"><b>Rüstung</b><label class="noprint"><select onchange="bgFrei(' + q + ',\'ruest\',this.value)">' + [0, 1, 2, 3, 4, 5].map(function(n){ return '<option' + (f.frei.ruest === n ? ' selected' : '') + '>' + n + '</option>'; }).join("") + '</select></label>' + bgBoxen(f, "ruest", "f") + '</div>';
  return '<div class="sheet" data-pgbook="sp_cmf"><div class="bgk"><b>Spire</b><span>Charakterbogen</span>' + bgIn(f, "spieler", "Spielername") + '</div>' +
    '<div class="bgr bg4">' + bgIn(f, "n", "Figurenname", "f") + bgIn(f, "klasse", "Klasse", "f") + bgIn(f, "dienst", "Dienstzeit", "f") + bgIn(f, "auff", "Auffrischen", "f") + '</div>' +
    '<div class="bgr bg3"><section><h3>Fertigkeiten</h3><ul class="bgs">' + bgReihe(f, "fert", SP_FERTIGKEITEN) + '</ul></section><section><h3>Domänen</h3><ul class="bgs">' + bgReihe(f, "dom", SP_DOMAENEN) + '</ul></section>' +
    '<section><h3>Kniffe</h3><textarea class="bgt" oninput="bgKniffe(' + q + ',this.value)">' + esc((f.kniffe || []).join("\n")) + '</textarea></section></div>' +
    '<div class="bgr bg2"><section class="gr"><h3>Fähigkeiten</h3>' + bgTa(f, "faehig", "hoch" + ((f.bg.faehig || "").length > 650 ? " kl" : "")) + '</section><section><h3>Bindungen</h3>' + bind + '</section></div>' +
    '<div class="bgr bg3"><section><h3>Fallout</h3><div class="bgfos">' + fo + '</div></section><section><h3>Ausrüstung</h3>' + bgTa(f, "ausr") + '</section><section><h3>Notizen</h3>' + bgTa(f, "notiz") + '</section></div>' +
    '<div class="bgr"><section class="res"><h3>Widerstände <small>Freiplätze · Stress</small></h3>' + wid + '<div class="bgges"><span>Gesamtstress</span><b>' + zTotal(f) + '</b></div></section></div>' +
    '<div class="bgfuss">Charakterbogen nach The Spire · The City Must Fall, S. 212</div></div>';
}
function bgLeiste(f){
  var chips = zFigs().map(function(x){ return '<a class="' + (f && x.id === f.id ? 'on' : '') + '" onclick="go(\'bogen/' + x.id + '\')">' + esc(x.n) + '</a>'; }).join("");
  return '<div class="bgbar noprint"><div class="bgch">' + chips + '<a class="neu" onclick="bgNeu()">+ Neuer Bogen</a><a class="neu" onclick="zVfAuswahl()">Vorgefertigte Figur</a></div><div class="bga">' +
    (f && f.vf ? '<button class="knopf b" onclick="bgVorlage(\'' + f.id + '\')">Aus Vorlage füllen</button>' : '') +
    (f ? '<button class="knopf b" id="bgTeil" onclick="bgTeilen(\'' + f.id + '\')">Teilen</button><button class="knopf" onclick="bgDruck()">Drucken / PDF</button><button class="knopf n" onclick="bgWeg(\'' + f.id + '\')">Entfernen</button>' : '') + '</div></div>';
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
