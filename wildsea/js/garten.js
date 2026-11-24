/* Gartenbogen (Ship-Gardens S. 7–9, 38): Werkzeug zum Anklicken. Zustand in ST.garten. Nur Buchdaten (WS_GARTEN, WS_GARTEN_BEETE, WS_GARTEN_SAAT). */
function gSt(){
  var g = ST.garten = ST.garten || {};
  g.b = g.b || [];
  for(var i = 0; i < 4; i++){
    var b = g.b[i] = g.b[i] || {};
    b.v = b.v || [];
    for(var j = 0; j < 4; j++) b.v[j] = b.v[j] || {};
  }
  return g;
}
function gPf(id){ return id ? window.SG.byId(id) : null; }
function gSaat(id){ return (window.WS_GARTEN_SAAT || []).filter(function(s){ return s.id === id; })[0]; }
function gBeet(id){ return (window.WS_GARTEN_BEETE || []).filter(function(s){ return s.id === id; })[0]; }
function gLen(v){ var p = gPf(v.pf), s = gSaat(v.saat); return p ? Math.min(16, p.leiste + (s ? s.leiste : 0)) : 0; }
function gSet(i, j, k, val){
  var g = gSt(), t = j < 0 ? g.b[i] : g.b[i].v[j];
  t[k] = val; if(k === "pf") t.l = [];
  save(); render();
}
function gTxt(i, j, k, val){ var g = gSt(), t = j < 0 ? g.b[i] : g.b[i].v[j]; t[k] = val; save(); }
function gTop(k, val){ gSt()[k] = val; save(); }
function gBox(i, j, n){
  var v = gSt().b[i].v[j]; v.l = v.l || []; v.l[n] = ((v.l[n] || 0) + 1) % 3; save(); render();
}
function gReset(i, j){ gSt().b[i].v[j].l = []; save(); render(); }
function gOpts(arts, cur){
  var L = window.WS_GARTEN_BEETE;
  return '<option value="">–</option>' + arts.map(function(a){
    var o = L.filter(function(b){ return b.art === a[0]; }).map(function(b){ return '<option value="' + b.id + '"' + (b.id === cur ? ' selected' : '') + '>' + esc(b.name) + ' · ' + window.SG.E(b.kosten) + '</option>'; }).join("");
    return o ? '<optgroup label="' + esc(a[1]) + '">' + o + '</optgroup>' : "";
  }).join("");
}
function gPfOpts(cur){
  return '<option value="">Pflanze wählen</option>' + window.WS_GARTEN_GRUPPEN.map(function(g){
    var o = window.WS_GARTEN.filter(function(w){ return w.gruppe === g.id; }).map(function(w){ return '<option value="' + w.id + '"' + (w.id === cur ? ' selected' : '') + '>' + esc(w.name) + ' (' + w.viertel + ' V · ' + w.leiste + ' K)</option>'; }).join("");
    return '<optgroup label="' + esc(g.name) + '">' + o + '</optgroup>';
  }).join("");
}
function gViertel(i, j){
  var v = gSt().b[i].v[j], p = gPf(v.pf), s = gSaat(v.saat), len = gLen(v), l = v.l || [], f = 0, bx = "", n;
  for(n = 0; n < len; n++){ var z = l[n] || 0; if(z) f++; bx += '<i class="gz' + z + '" onclick="gBox(' + i + ',' + j + ',' + n + ')"></i>'; }
  var voll = p && len > 0 && f >= len;
  var saat = '<select class="gsel" onchange="gSet(' + i + ',' + j + ',\'saat\',this.value)"><option value="">Saatart</option>' + window.WS_GARTEN_SAAT.map(function(a){ return '<option value="' + a.id + '"' + (a.id === v.saat ? ' selected' : '') + '>' + esc(a.name) + (a.leiste ? ' +' + a.leiste + ' K' : '') + (a.viertel ? ' +' + a.viertel + ' V' : '') + '</option>'; }).join("") + '</select>';
  var info = "";
  if(p){
    var vz = p.viertel + (s ? s.viertel : 0);
    info = '<div class="gin"><span class="chip2">' + esc(p.typ + (p.sek ? " / " + p.sek : "")) + '</span><span class="chip2">' + vz + (vz === 1 ? ' Viertel' : ' Viertel') + '</span><a class="gpg" onclick="openBook(\'ws_z2\',' + p.p + ')">S. ' + p.p + '</a></div>';
  }
  var le = len ? '<div class="gl"><div class="pbx gbx">' + bx + '</div><span class="gct">' + f + ' / ' + len + '</span><button class="gx" onclick="gReset(' + i + ',' + j + ')" title="Leiste leeren">×</button></div>' : '';
  var ern = "";
  if(p && p.ernte && (voll || !len)) ern = '<div class="ger"><b>Ernte</b>' + p.ernte.map(function(e){ return '<span class="chip2">' + esc(e) + '</span>'; }).join("") + '</div>';
  if(p && p.effekt) ern = '<div class="ger"><b>Eigenschaft</b><p>' + esc(p.effekt) + '</p></div>';
  return '<div class="gv' + (voll ? ' voll' : '') + '"><div class="gvh"><b>' + (j + 1) + '/4</b><select class="gsel gp" onchange="gSet(' + i + ',' + j + ',\'pf\',this.value)">' + gPfOpts(v.pf) + '</select></div>' + (p ? (p.gruppe === "steine" ? "" : saat) + info + le + ern +
    '<input class="gin2" placeholder="Marker" value="' + esc(v.m || "") + '" oninput="gTxt(' + i + ',' + j + ',\'m\',this.value)"><input class="gin2" placeholder="Details" value="' + esc(v.d || "") + '" oninput="gTxt(' + i + ',' + j + ',\'d\',this.value)">' : '') + '</div>';
}
function viewGarten(){
  var g = gSt(), B = window.WS_GARTEN_BOGEN;
  var beete = g.b.map(function(b, i){
    var bt = gBeet(b.typ), bo = gBeet(b.boden);
    var regeln = [bt, bo].filter(Boolean).map(function(x){ return x.regeln && x.regeln.length ? '<div class="grg"><b>' + esc(x.name) + '</b><ul class="bul">' + x.regeln.map(function(r){ return '<li>' + esc(r) + '</li>'; }).join("") + '</ul></div>' : ''; }).join("");
    return '<section class="gb"><header><h3>Beet ' + (i + 1) + '</h3></header><div class="gbs"><label>Beet-Typ<select class="gsel" onchange="gSet(' + i + ',-1,\'typ\',this.value)">' + gOpts([["Beet", "Beete"], ["Komplettlösung", "Komplettlösungen"], ["Kreuzungsbeet", "Kreuzungsbeete"]], b.typ) + '</select></label>' +
      '<label>Nährboden<select class="gsel" onchange="gSet(' + i + ',-1,\'boden\',this.value)">' + gOpts([["Nährboden", "Nährböden"]], b.boden) + '</select></label></div>' +
      (regeln ? '<details class="gdt"><summary>Regeln von Beet und Nährboden</summary>' + regeln + '</details>' : '') +
      '<div class="gvs">' + [0, 1, 2, 3].map(function(j){ return gViertel(i, j); }).join("") + '</div></section>';
  }).join("");
  return '<div class="tabs"><a class="on">Gartenbogen</a><span class="r pg"><a onclick="openBook(\'ws_z2\',' + B.p + ')">S. ' + B.p + '</a></span></div><div class="pad gw"><div class="gbg">' + beete + '</div>' +
    '<div class="gnt"><label class="gb2"><h3>Gartenziele</h3><textarea oninput="gTop(\'ziele\',this.value)">' + esc(g.ziele || "") + '</textarea></label><label class="gb2"><h3>Notizen</h3><textarea oninput="gTop(\'notiz\',this.value)">' + esc(g.notiz || "") + '</textarea></label></div></div>';
}
