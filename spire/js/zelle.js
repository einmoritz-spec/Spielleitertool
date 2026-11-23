/* THE SPIRE – Zelle (Entwurf 4): Spielerfiguren mit Stress/Freiplätzen je Widerstand, Gesamtstress, Fallout-Wurf mit Fallout-Panel,
   Bindungen mit Bindungs-Fallout, Auffrischen, vorgefertigte Figuren (Quickstart S. 25–36).
   Regeln: Kernmechanik/Stress S. 10, Gesamtstress und Fallout S. 11, Weniger tödlicher Fallout S. 13, Bindungs-Fallout S. 15 und S. 24.
   Spielstand: ST.figuren (siehe plan/SPIRE_PLAN.md, Abschnitt 5), ST.weniger. Das Fallout-Panel (ZP) wird nicht gespeichert. */
var ZR = ["blut", "verstand", "silber", "schatten", "ruf"];
var ZBOX = {einzel:3, figur:3, strasse:4, stadt:5};   /* Stress-Kästchen je Bindungsebene (Entwurf 4) */
var KLASSEN_BILD = ["azurite", "bound", "carrion-priest", "firebrand", "gutter-cleric", "idol", "knight", "lajhan", "masked", "midwife", "vermissian-sage"];
var KLASSEN_LISTE = ["Azurite", "Bound", "Carrion-Priest", "Firebrand", "Idol", "Knight", "Lajhan", "Masked", "Midwife", "Vermissian Sage", "Blood-Witch", "Gutter Cleric", "Inksmith", "Mortician Executioner", "Shadow Agent"];
var ZP = null;   /* Fallout-Panel: {fid, w10, wid, zwei, pick:[], erzwingen} */

function zFigs(){ if(!Array.isArray(ST.figuren)) ST.figuren = []; return ST.figuren; }
function zFig(id){ return zFigs().filter(function(f){ return f.id === id; })[0]; }
function zWidT(id){ return {blut:"Blut", verstand:"Verstand", silber:"Silber", schatten:"Schatten", ruf:"Ruf", ruest:"Rüstung"}[id] || id; }
function zTotal(f){ var s = 0; ZR.forEach(function(r){ s += (f.stress && f.stress[r]) || 0; }); return s; }
function zNeu(o){
  var f = {id:"f" + Date.now().toString(36) + Math.floor(Math.random() * 1296).toString(36), n:"Neue Figur", klasse:"", dienst:"", auff:"", vf:null,
    frei:{blut:0, verstand:0, silber:0, schatten:0, ruf:0, ruest:0}, freiX:{}, stress:{}, fallout:[], bind:[], fert:[], dom:[], kniffe:[], notiz:""};
  Object.keys(o || {}).forEach(function(k){ f[k] = o[k]; });
  return f;
}
function zVon(v){
  return zNeu({n:v.n, klasse:v.klasse, dienst:v.dienst, auff:v.auff, vf:v.id, frei:JSON.parse(JSON.stringify(v.frei)), fert:v.fert.slice(), dom:v.dom.slice(),
    kniffe:v.kniffe.map(function(k){ return k.t + " (" + k.auf + ")"; }), bind:v.bind.map(function(b){ return {n:b.n, ebene:b.ebene, s:0, fallout:[]}; })});
}
function zBild(f){
  if(f.vf){ var v = SP_VORGEFERTIGT.filter(function(x){ return x.id === f.vf; })[0]; if(v) return v.bild; }
  var s = String(f.klasse || "").toLowerCase().replace(/[^a-z]+/g, "-").replace(/^-|-$/g, "");
  return KLASSEN_BILD.indexOf(s) >= 0 ? "klasse/" + s : null;
}
function zInit(n){ return String(n || "?").split(/\s+/).slice(0, 2).map(function(w){ return w.charAt(0).toUpperCase(); }).join(""); }

/* ---------- Kästchen ---------- */
function zBoxen(f, r, art){
  var h = "", n = art === "f" ? 5 : 10, wert = art === "f" ? ((f.freiX && f.freiX[r]) || 0) : ((f.stress && f.stress[r]) || 0), akt = art === "f" ? (f.frei[r] || 0) : 10;
  for(var i = 0; i < n; i++){
    var c = art === "f" ? (i < akt ? (i < wert ? "a ax" : "a") : "") : (i < wert ? "x" : "");
    h += '<i class="' + c + '"' + (i < akt ? ' onclick="zBox(\'' + f.id + '\',\'' + r + '\',\'' + art + '\',' + i + ')"' : '') + '></i>';
  }
  return h;
}
function zBox(fid, r, art, i){
  var f = zFig(fid); if(!f) return;
  var k = art === "f" ? "freiX" : "stress"; f[k] = f[k] || {};
  f[k][r] = f[k][r] === i + 1 ? i : i + 1;
  save(); render();
}
function zBind(f, bi, b){
  var n = ZBOX[b.ebene] || 3, h = "";
  for(var i = 0; i < n; i++) h += '<i class="' + (i < (b.s || 0) ? 'x' : '') + '" onclick="zBindBox(\'' + f.id + '\',' + bi + ',' + i + ')"></i>';
  return h;
}
function zBindBox(fid, bi, i){ var f = zFig(fid); if(!f || !f.bind[bi]) return; var b = f.bind[bi]; b.s = b.s === i + 1 ? i : i + 1; save(); render(); }

/* ---------- Figurenkarte ---------- */
function zKarte(f){
  var tot = zTotal(f), bild = zBild(f);
  var ruestT = ""; if(f.vf){ var v = SP_VORGEFERTIGT.filter(function(x){ return x.id === f.vf; })[0]; if(v) v.ausr.forEach(function(a){ if(/Rüstung \d/.test(a)) ruestT = a.replace("Rüstung ", "").replace(/\((.*?)(,.*)?\)/, function(m, a1){ return "(" + a1 + ")"; }); }); }
  var rows = ZR.map(function(r){
    return '<div class="zr"><b>' + zWidT(r) + '</b><span class="bx frei">' + zBoxen(f, r, "f") + '</span><u></u><span class="bx">' + zBoxen(f, r, "s") + '</span></div>';
  }).join("") + '<div class="zr"><b>Rüstung</b><span class="bx frei">' + zBoxen(f, "ruest", "f") + '</span><u></u><small>' + (ruestT ? esc(ruestT) : (f.frei.ruest ? "" : "–")) + '</small></div>';
  var fo = (f.fallout || []).map(function(o, i){ var e = SP_FALLOUT.finde(o.id); return '<span class="chip w" onclick="zChip(\'' + f.id + '\',' + i + ')" oncontextmenu="zChipWeg(event,\'' + f.id + '\',' + i + ')">' + esc(e ? e.t : o.id) + ' · ' + zWidT(o.w) + '</span>'; }).join("") || '<span class="leise">–</span>';
  var bd = (f.bind || []).map(function(b, bi){
    var bf = (b.fallout || []).map(function(id, k){ var e = SP_FALLOUT.finde(id); return '<span class="chip w" onclick="zBChip(\'' + f.id + '\',' + bi + ',' + k + ')">' + esc(e ? e.t : id) + '</span>'; }).join("");
    return '<div class="zb"><span class="bn" onclick="zBName(\'' + f.id + '\',' + bi + ')">' + esc(b.n) + '</span><span class="bx">' + zBind(f, bi, b) + '</span>' + (bf ? '<span class="bfo">' + bf + '</span>' : '') + '</div>';
  }).join("");
  return '<div class="pc' + (ZP && ZP.fid === f.id ? ' sel' : '') + '"><div class="pk">' +
    (bild ? '<img src="' + IMG(bild) + '" alt="" onclick="zoom(this.src)">' : '<span class="ini">' + esc(zInit(f.n)) + '</span>') +
    '<div class="pn" onclick="zEdit(\'' + f.id + '\')" title="Figur bearbeiten"><h3>' + esc(f.n) + '</h3><small>' + esc([f.klasse, f.dienst ? "Dienstzeit: " + f.dienst : ""].filter(Boolean).join(" · ")) + '</small></div></div>' +
    '<div class="zres">' + rows + '</div>' +
    '<div class="zsum' + (tot >= 8 ? ' hoch' : '') + '"><b>' + tot + '</b><span>Stress gesamt</span><button class="knopf" onclick="zFallout(\'' + f.id + '\')">Fallout?</button></div>' +
    '<div class="zfo"><h5>Fallout</h5>' + fo + '</div>' +
    '<div class="zbd"><h5>Bindungen<span class="plus" onclick="zBNeu(\'' + f.id + '\')" title="Bindung hinzufügen">+</span></h5>' + (bd || '<span class="leise">–</span>') + '</div>' +
    '<div class="zref">' + (f.auff ? '<b>Auffrischen:</b> ' + esc(f.auff) : '') + '</div></div>';
}

/* ---------- Fallout-Panel ---------- */
function zMeist(f){ var b = "blut", m = -1; ZR.forEach(function(r){ var s = (f.stress && f.stress[r]) || 0; if(s > m){ m = s; b = r; } }); return b; }
function zSchwelle(f, wid){ return ST.weniger ? ((f.stress && f.stress[wid]) || 0) : zTotal(f); }
function zFallout(fid){
  var f = zFig(fid); if(!f) return;
  ZP = {fid:fid, w10:1 + Math.floor(Math.random() * 10), wid:zMeist(f), zwei:false, pick:[], erzwingen:false};
  zPickStd(); render();
}
function zStufeId(f){
  var th = zSchwelle(f, ZP.wid), S = SP_FALLOUT.stufeFuer(th);
  if(!S && ZP.erzwingen) S = SP_FALLOUT.schwellen[0];
  return S;
}
function zListe(f){
  var S = zStufeId(f); if(!S) return {S:null, L:[], L2:[]};
  var id = S.id, low = id === "schwer" ? "mittel" : id === "mittel" ? "leicht" : null;
  var fil = function(k){ return SP_FALLOUT.stufen[k].x.filter(function(e){ return e.w.indexOf(ZP.wid) >= 0; }); };
  return {S:S, L:fil(id), L2:low ? fil(low) : []};
}
function zPickStd(){ var f = zFig(ZP.fid); if(!f) return; var o = zListe(f); var L = ZP.zwei ? o.L2 : o.L; ZP.pick = L.length ? [L[0].id] : []; }
function zPW(wid){ ZP.wid = wid; ZP.zwei = false; zPickStd(); render(); }
function zPZwei(){ ZP.zwei = !ZP.zwei; zPickStd(); render(); }
function zPWahl(id){
  if(ZP.zwei){ var i = ZP.pick.indexOf(id); if(i >= 0) ZP.pick.splice(i, 1); else { ZP.pick.push(id); if(ZP.pick.length > 2) ZP.pick.shift(); } }
  else ZP.pick = [id];
  render();
}
function zPErzwingen(){ ZP.erzwingen = true; zPickStd(); render(); }
function zPZu(){ ZP = null; render(); }
function zToedlich(){ ST.weniger = !ST.weniger; save(); if(ZP) zPickStd(); render(); }
function zPUebernehmen(){
  var f = zFig(ZP.fid); if(!f) return; var o = zListe(f); if(!o.S) return;
  var need = ZP.zwei ? 2 : 1; if(ZP.pick.length < need) return;
  f.fallout = f.fallout || [];
  ZP.pick.forEach(function(id){ f.fallout.push({id:id, w:ZP.wid}); });
  /* Stress abziehen (S. 10): zuerst vom betroffenen Widerstand, ein Rest vom jeweils höchsten */
  var rest = o.S.abzug; f.stress = f.stress || {};
  while(rest > 0){
    var r = (f.stress[ZP.wid] || 0) > 0 ? ZP.wid : zMeist(f);
    if(!(f.stress[r] > 0)) break;
    var d = Math.min(rest, f.stress[r]); f.stress[r] -= d; rest -= d;
  }
  ZP = null; save(); render();
}
function zPanel(){
  if(!ZP) return "";
  var f = zFig(ZP.fid); if(!f){ ZP = null; return ""; }
  var th = zSchwelle(f, ZP.wid), o = zListe(f), S = o.S, tot = zTotal(f);
  var unter = ZP.w10 < th, wtxt = ST.weniger ? zWidT(ZP.wid) + "-Stress " + th : "Gesamtstress " + th;
  var kopf = '<h4>Fallout-Wurf · ' + esc(f.n) + '<span class="x" onclick="zPZu()" title="Schließen">×</span></h4><div class="erg"><span class="w10">' + ZP.w10 + '</span><p>W10 ' + (unter ? 'unter ' : 'nicht unter ') + wtxt + '<br>' +
    (unter && S ? '<b>' + esc(S.t) + '</b> · ' + (ZP.zwei ? '' : '') + 'meist ' + zWidT(ZP.wid) : '<b>Kein Fallout</b>') + '</p></div>';
  var chips = '<div class="wch">' + ZR.map(function(r){ return '<span class="' + (ZP.wid === r ? 'on' : '') + '" onclick="zPW(\'' + r + '\')">' + zWidT(r) + (ST.weniger ? ' ' + ((f.stress && f.stress[r]) || 0) : '') + '</span>'; }).join("") + '</div>';
  var tog = '<button class="tog' + (ST.weniger ? ' on' : '') + '" onclick="zToedlich()" title="Optionalregel S. 13">Weniger tödlich</button>';
  if(!(unter && S) && !ZP.erzwingen){
    var kn = (th >= 2 ? '<div class="wahl" onclick="zPErzwingen()"><b>Fallout trotzdem vergeben</b></div>' : '');
    return '<div class="zwurf">' + kopf + chips + kn + '<div class="zbt">' + tog + '</div></div>';
  }
  if(!S) S = SP_FALLOUT.schwellen[0];
  var L = ZP.zwei ? o.L2 : o.L;
  var item = function(e){
    var on = ZP.pick.indexOf(e.id) >= 0;
    return '<div class="wahl' + (on ? ' on' : '') + '" onclick="zPWahl(\'' + e.id + '\')"><b>' + esc(e.t) + '</b> <small>' + (e.w.length > 1 ? e.w.map(zWidT).join("/") : zWidT(e.w[0])) + ' · ' + pgTxt(e.p) + '</small>' + (on ? '<p>' + md(e.x) + '</p>' : '') + '</div>';
  };
  var low = S.id === "schwer" ? "mittleren" : S.id === "mittel" ? "leichten" : null;
  var zw = low ? '<div class="wahl' + (ZP.zwei ? ' on' : '') + '" onclick="zPZwei()"><b>2 × ' + (low === "leichten" ? "Leichter" : "Mittlerer") + ' Fallout</b> <small>statt eines ' + (S.id === "schwer" ? "schweren" : "mittleren") + ' · ' + pgTxt(12) + '</small></div>' : '';
  var need = ZP.zwei ? 2 : 1;
  return '<div class="zwurf">' + kopf + chips + L.map(item).join("") + zw +
    '<div class="zbt"><button class="knopf' + (ZP.pick.length < need ? ' aus' : '') + '" onclick="zPUebernehmen()">Übernehmen · −' + S.abzug + ' Stress</button>' + tog + '</div></div>';
}

/* ---------- Fallout-Chips (Text, Entfernen) ---------- */
function zChip(fid, i){
  var f = zFig(fid); if(!f || !f.fallout[i]) return; var o = f.fallout[i], e = SP_FALLOUT.finde(o.id) || {t:o.id, x:""};
  var m = modal('<h3 class="un" style="margin-top:0">' + esc(e.t) + ' <span class="leise" style="font-size:15px;text-transform:none">' + zWidT(o.w) + '</span>' + (e.p ? pgl(e.p) : '') + '</h3><p>' + md(e.x) + '</p><div class="act" style="gap:8px"><button class="knopf b" id="zcw">Entfernen</button><button class="knopf" id="zcf">Fertig</button></div>');
  m.querySelector("#zcf").onclick = function(){ m.remove(); };
  m.querySelector("#zcw").onclick = function(){ f.fallout.splice(i, 1); save(); m.remove(); render(); };
}
function zChipWeg(ev, fid, i){ ev.preventDefault(); var f = zFig(fid); if(f && f.fallout[i]){ f.fallout.splice(i, 1); save(); render(); } }
function zBChip(fid, bi, k){
  var f = zFig(fid); if(!f || !f.bind[bi] || !f.bind[bi].fallout) return; var id = f.bind[bi].fallout[k], e = SP_FALLOUT.finde(id) || {t:id, x:""};
  var m = modal('<h3 class="un" style="margin-top:0">' + esc(e.t) + ' <span class="leise" style="font-size:15px;text-transform:none">' + esc(f.bind[bi].n) + '</span>' + (e.p ? pgl(e.p) : '') + '</h3><p>' + md(e.x) + '</p><div class="act" style="gap:8px"><button class="knopf b" id="zcw">Entfernen</button><button class="knopf" id="zcf">Fertig</button></div>');
  m.querySelector("#zcf").onclick = function(){ m.remove(); };
  m.querySelector("#zcw").onclick = function(){ f.bind[bi].fallout.splice(k, 1); save(); m.remove(); render(); };
}

/* ---------- Bindungen ---------- */
function zBName(fid, bi){
  var f = zFig(fid); if(!f || !f.bind[bi]) return;
  var v = prompt("Name der Bindung (leer lassen zum Entfernen)", f.bind[bi].n); if(v == null) return;
  v = v.trim(); if(!v) f.bind.splice(bi, 1); else f.bind[bi].n = v; save(); render();
}
function zBNeu(fid){
  var f = zFig(fid); if(!f) return;
  var m = modal('<h3 class="un" style="margin-top:0">Neue Bindung</h3><input id="zbn" class="eing" placeholder="Name"><div class="ebenen">' + ["einzel", "strasse", "stadt", "figur"].map(function(e, i){ return '<label><input type="radio" name="zbe" value="' + e + '"' + (i === 0 ? ' checked' : '') + '> ' + SP_EBENEN[e] + '</label>'; }).join("") + '</div><div class="act"><button class="knopf" id="zbo">Hinzufügen</button></div>');
  m.querySelector("#zbn").focus();
  m.querySelector("#zbo").onclick = function(){
    var n = m.querySelector("#zbn").value.trim(); if(!n) return;
    f.bind.push({n:n, ebene:m.querySelector("input[name=zbe]:checked").value, s:0, fallout:[]}); save(); m.remove(); render();
  };
}
var ZBF = null;   /* Ergebnisse der Sitzungsende-Prüfung: [{fid, bi, w10, stufe}] */
function zSitzungsende(){
  ZBF = [];
  zFigs().forEach(function(f){ (f.bind || []).forEach(function(b, bi){ if((b.s || 0) > 0){ var w = 1 + Math.floor(Math.random() * 10), S = SP_FALLOUT.stufeFuer(b.s); ZBF.push({fid:f.id, bi:bi, w10:w, stufe:w < b.s && S ? S.id : null}); } }); });
  zSitzungsendeZeigen();
}
function zSitzungsendeZeigen(){
  var old = document.getElementById("zbm"); if(old) old.remove();
  var h = '<h3 class="un" style="margin-top:0">Bindungs-Fallout' + pgl(15) + pgl(24) + '</h3>';
  if(!ZBF.length) h += '<p class="leise">Keine Bindung mit Stress.</p>';
  ZBF.forEach(function(r, ri){
    var f = zFig(r.fid); if(!f || !f.bind[r.bi]) return; var b = f.bind[r.bi];
    h += '<div class="bfz"><h4>' + esc(f.n) + ' · ' + esc(b.n) + '</h4><p>W10 ' + r.w10 + ' gegen Stress ' + b.s + ' – ' + (r.stufe ? '<b>Fallout</b>' : 'kein Fallout') + '</p>';
    if(r.stufe){
      h += '<div class="wch">' + ["leicht", "mittel", "schwer"].map(function(k){ return '<span class="' + (r.stufe === k ? 'on' : '') + '" onclick="zBStufe(' + ri + ',\'' + k + '\')">' + SP_FALLOUT.bindung.stufen[k].t + '</span>'; }).join("") + '</div>' +
        SP_FALLOUT.bindung.stufen[r.stufe].x.map(function(e){ return '<div class="wahl bw" onclick="zBUebernehmen(' + ri + ',\'' + e.id + '\')"><b>' + esc(e.t) + '</b>' + pgl(e.p) + '<p>' + md(e.x) + '</p></div>'; }).join("");
    }
    h += '</div>';
  });
  var m = modal(h + '<div class="act"><button class="knopf" id="zbf">Fertig</button></div>', true); m.id = "zbm";
  m.querySelector("#zbf").onclick = function(){ m.remove(); render(); };
}
function zBStufe(ri, k){ ZBF[ri].stufe = k; zSitzungsendeZeigen(); }
function zBUebernehmen(ri, id){
  var r = ZBF[ri], f = zFig(r.fid); if(!f || !f.bind[r.bi]) return; var b = f.bind[r.bi];
  b.fallout = b.fallout || []; if(b.fallout.indexOf(id) < 0) b.fallout.push(id);
  save(); ZBF.splice(ri, 1); zSitzungsendeZeigen();
}

/* ---------- Figur bearbeiten ---------- */
function zEditSet(fid, k, v){ var f = zFig(fid); if(!f) return; f[k] = v; save(); }
function zEditFrei(fid, r, v){ var f = zFig(fid); if(!f) return; f.frei[r] = +v; if(f.freiX) f.freiX[r] = Math.min(f.freiX[r] || 0, +v); save(); }
function zEditTog(fid, k, v, an){ var f = zFig(fid); if(!f) return; var L = f[k] = f[k] || [], i = L.indexOf(v); if(an && i < 0) L.push(v); if(!an && i >= 0) L.splice(i, 1); save(); }
function zEditBind(fid, bi, k, v){ var f = zFig(fid); if(f && f.bind[bi]){ f.bind[bi][k] = v; save(); } }
function zEdit(fid){
  var f = zFig(fid); if(!f) return;
  var q = "'" + fid + "'";
  var frei = ZR.concat(["ruest"]).map(function(r){ return '<label class="fz">' + zWidT(r) + '<select onchange="zEditFrei(' + q + ',\'' + r + '\',this.value)">' + [0, 1, 2, 3, 4, 5].map(function(n){ return '<option' + (f.frei[r] === n ? ' selected' : '') + '>' + n + '</option>'; }).join("") + '</select></label>'; }).join("");
  var cb = function(L, k){ return L.map(function(x){ return '<label class="cbx"><input type="checkbox"' + (f[k].indexOf(x) >= 0 ? ' checked' : '') + ' onchange="zEditTog(' + q + ',\'' + k + '\',\'' + x + '\',this.checked)"> ' + x + '</label>'; }).join(""); };
  var bd = f.bind.map(function(b, bi){ return '<div class="bze"><input class="eing" value="' + esc(b.n) + '" onchange="zEditBind(' + q + ',' + bi + ',\'n\',this.value)"><select onchange="zEditBind(' + q + ',' + bi + ',\'ebene\',this.value)">' + ["einzel", "strasse", "stadt", "figur"].map(function(e){ return '<option value="' + e + '"' + (b.ebene === e ? ' selected' : '') + '>' + SP_EBENEN[e] + '</option>'; }).join("") + '</select></div>'; }).join("");
  var m = modal('<h3 class="un" style="margin-top:0">' + esc(f.n) + '</h3>' +
    '<div class="eg"><label>Name<input class="eing" value="' + esc(f.n) + '" onchange="zEditSet(' + q + ',\'n\',this.value)"></label>' +
    '<label>Klasse<input class="eing" list="zkl" value="' + esc(f.klasse) + '" onchange="zEditSet(' + q + ',\'klasse\',this.value)"><datalist id="zkl">' + KLASSEN_LISTE.map(function(k){ return '<option value="' + k + '">'; }).join("") + '</datalist></label>' +
    '<label>Dienstzeit<input class="eing" value="' + esc(f.dienst) + '" onchange="zEditSet(' + q + ',\'dienst\',this.value)"></label>' +
    '<label>Auffrischen<input class="eing" value="' + esc(f.auff) + '" onchange="zEditSet(' + q + ',\'auff\',this.value)"></label></div>' +
    '<h5 class="eh">Freiplätze</h5><div class="fzr">' + frei + '</div>' +
    '<div class="eg2"><div><h5 class="eh">Fertigkeiten</h5>' + cb(SP_FERTIGKEITEN, "fert") + '</div><div><h5 class="eh">Domänen</h5>' + cb(SP_DOMAENEN, "dom") + '</div></div>' +
    '<h5 class="eh">Kniffe</h5><textarea class="eing" rows="2" onchange="zEditSet(' + q + ',\'kniffe\',this.value.split(\'\\n\').filter(Boolean))">' + esc((f.kniffe || []).join("\n")) + '</textarea>' +
    '<h5 class="eh">Bindungen</h5>' + (bd || '<span class="leise">–</span>') +
    '<div class="act" style="gap:8px;justify-content:space-between"><span style="display:flex;gap:8px">' + (f.vf ? '<button class="knopf b" id="zeb">Bogen</button>' : '') + '<button class="knopf n" id="zew">Figur entfernen</button></span><button class="knopf" id="zef">Fertig</button></div>', true);
  var zu = function(){ m.remove(); render(); };
  m.onclick = function(e){ if(e.target === m) zu(); };
  m.querySelector("#zef").onclick = zu;
  m.querySelector("#zew").onclick = function(){ if(confirm("Figur „" + f.n + "“ entfernen?")){ ST.figuren = zFigs().filter(function(x){ return x.id !== fid; }); if(ZP && ZP.fid === fid) ZP = null; save(); zu(); } };
  var b = m.querySelector("#zeb"); if(b) b.onclick = function(){ zu(); zBogen(f.vf); };
}

/* ---------- Vorgefertigte Figuren (QS S. 25–36) ---------- */
function vfDaten(id){ return SP_VORGEFERTIGT.filter(function(x){ return x.id === id; })[0]; }
function zVfAuswahl(){
  var da = {}; zFigs().forEach(function(f){ if(f.vf) da[f.vf] = 1; });
  var m = modal('<h3 class="un" style="margin-top:0">Vorgefertigte Figur übernehmen' + pgl(25, "qs", "QS S. 25–36") + '</h3><div class="vfr" data-pgbook="sp_qs">' + SP_VORGEFERTIGT.map(function(v){
    return '<div class="vfk' + (da[v.id] ? ' da' : '') + '" onclick="zVfNimm(\'' + v.id + '\')"><img src="' + IMG(v.bild) + '" alt=""><h4>' + esc(v.n) + '</h4><small>' + esc(v.titel || v.klasse) + '</small><small>Dienstzeit: ' + esc(v.dienst) + '</small></div>';
  }).join("") + '</div><div class="act" style="gap:8px"><button class="knopf b" onclick="zVfAlle()">Alle sechs</button><button class="knopf" id="zvf">Fertig</button></div>', true);
  m.querySelector("#zvf").onclick = function(){ m.remove(); render(); };
}
function zVfNimm(id){
  if(zFigs().some(function(f){ return f.vf === id; })) return;
  zFigs().push(zVon(vfDaten(id))); save();
  var m = document.querySelector(".modal"); if(m) m.remove(); zVfAuswahl(); render();
}
function zVfAlle(){ SP_VORGEFERTIGT.forEach(function(v){ if(!zFigs().some(function(f){ return f.vf === v.id; })) zFigs().push(zVon(v)); }); save(); var m = document.querySelector(".modal"); if(m) m.remove(); render(); }
function zNeueFigur(){ var f = zNeu(); zFigs().push(f); save(); render(); zEdit(f.id); }

/* Bogen einer vorgefertigten Figur (Bogenlayout, QS S. 25–36); auch für den Leitstand „Snuff Out the Sun“ nutzbar */
function vfBogen(v){
  var kn = function(L, art){ return L.map(function(x){ var k = (v.kniffe || []).filter(function(y){ return y.auf === x; })[0]; return k ? ' ' + esc(k.t) : ''; }).join(""); };
  var reihe = function(L, an, kniffe){ return L.map(function(x){ var k = (v.kniffe || []).filter(function(y){ return y.auf === x; })[0]; return '<li class="' + (an.indexOf(x) >= 0 ? 'an' : '') + '"><i></i>' + esc(x) + (k ? '<em>' + esc(k.t) + '</em>' : '') + '</li>'; }).join(""); };
  var fr = ZR.map(function(r){ var h = ""; for(var i = 0; i < 5; i++) h += '<i class="' + (i < (v.frei[r] || 0) ? 'a' : '') + '"></i>'; return '<div class="zr"><b>' + zWidT(r) + '</b><span class="bx frei">' + h + '</span></div>'; }).join("") +
    '<div class="zr"><b>Rüstung</b><span class="bx frei">' + [0, 1, 2, 3, 4].map(function(i){ return '<i class="' + (i < v.frei.ruest ? 'a' : '') + '"></i>'; }).join("") + '</span></div>';
  var fae = v.fae.map(function(a){ return '<div class="karte"><h4>' + esc(a.t) + (a.tag ? '<span class="tag g">' + esc(a.tag) + '</span>' : '') + '</h4><p><i>' + md(a.f) + '</i> ' + md(a.x) + '</p></div>'; }).join("");
  var hs = v.haeuser ? '<h2 class="ab">' + esc(v.haeuser.t) + pgl(v.haeuser.p, "qs") + '</h2><div class="raster r3">' + v.haeuser.x.map(function(h){ return '<div class="karte"><h4>' + esc(h[0]) + '</h4><p>' + md(h[1]) + '</p></div>'; }).join("") + '</div><p>' + md(v.haeuser.nach) + '</p>' : '';
  return '<div class="vfb" data-pgbook="sp_qs"><div class="vfl"><img src="' + IMG(v.bild) + '" alt="" onclick="zoom(this.src)"></div>' +
    '<h1 class="titel" style="font-size:44px;margin-top:0">' + esc(v.n) + pgl(v.p, "qs") + '</h1>' +
    '<p class="leise" style="margin-top:-6px"><b>Klasse:</b> ' + esc(v.titel ? v.klasse + " (" + v.titel + ")" : v.klasse) + ' · <b>Dienstzeit:</b> ' + esc(v.dienst) + ' · <b>Auffrischen:</b> ' + esc(v.auff) + '</p>' +
    '<h3 class="un">Spiele ' + esc(v.n.split(" ")[0]) + ', wenn du willst:</h3><ul class="pkt">' + v.spielen.map(function(x){ return '<li>' + esc(x) + '</li>'; }).join("") + '</ul>' +
    v.hinter.map(function(x){ return '<p>' + esc(x) + '</p>'; }).join("") +
    '<h3 class="un">Bindungen:' + pgl(v.p2, "qs") + '</h3><ul class="pkt">' + v.bindtext.map(function(x){ return '<li>' + esc(x) + '</li>'; }).join("") + '</ul></div>' +
    '<div class="raster r3" style="margin:10px 0" data-pgbook="sp_qs"><div class="karte"><h4>Widerstände <span class="leise">Freiplätze</span></h4><div class="zres vfz">' + fr + '</div></div>' +
    '<div class="karte"><h4>Fertigkeiten</h4><ul class="vfs">' + reihe(SP_FERTIGKEITEN, v.fert) + '</ul><h4 style="margin-top:8px">Domänen</h4><ul class="vfs">' + reihe(SP_DOMAENEN, v.dom) + '</ul></div>' +
    '<div class="karte"><h4>Ausrüstung</h4><ul class="pkt">' + v.ausr.map(function(x){ return '<li>' + esc(x) + '</li>'; }).join("") + '</ul><h4>Bindungen</h4><ul class="pkt">' + v.bind.map(function(b){ return '<li>' + esc(b.n) + '</li>'; }).join("") + '</ul></div></div>' +
    '<h2 class="ab" data-pgbook="sp_qs">Fähigkeiten' + pgl(v.p, "qs") + '</h2><div class="raster r2" data-pgbook="sp_qs">' + fae + '</div>' + hs;
}
function zBogen(id){
  var v = vfDaten(id); if(!v) return;
  var m = modal(vfBogen(v) + '<div class="act" style="gap:8px"><button class="knopf" id="zbo">Fertig</button></div>', true); m.classList.add("bogenm");
  m.querySelector("#zbo").onclick = function(){ m.remove(); };
}

/* ---------- Ansicht ---------- */
SP_VIEW.zelle = function(teile){
  var F = zFigs();
  if(teile && teile[0] && vfDaten(teile[0])) setTimeout(function(){ history.replaceState(null, "", "#zelle"); window.__lh = "#zelle"; zBogen(teile[0]); }, 30);
  var karten = F.map(zKarte).join("") +
    '<div class="zneu"><button onclick="zVfAuswahl()">Vorgefertigte Figur</button><button onclick="zNeueFigur()">Neue Figur</button></div>';
  var rp = zPanel() +
    '<div class="zinfo"><h4>Schwellen' + pgl(11) + '</h4><p>2–4 Stress: leicht (−3) · 5–8: mittel (−5) · 9+: schwer (−7)</p><button class="tog' + (ST.weniger ? ' on' : '') + '" onclick="zToedlich()" title="Optionalregel S. 13">Weniger tödlich</button> <a class="pg" onclick="go(\'nach/regeln/fallout\')">Fallout-Liste</a></div>' +
    '<div class="zinfo"><h4>Sitzungsende</h4><p>Bindungen mit Stress in dieser Sitzung: Bindungs-Fallout würfeln' + pgl(24) + '</p><button class="knopf b" onclick="zSitzungsende()">Bindungen prüfen</button></div>';
  return spielTabs("zelle") + '<div class="zelle"><div class="zfig">' + karten + '</div><div class="zrp">' + rp + '</div></div>';
};
