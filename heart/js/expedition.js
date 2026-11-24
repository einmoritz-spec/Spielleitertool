/* Expedition: Route · Delver (Mini-Bögen) · Gegner – Stand im Spielstand (ST.exp) */
(function(){
var RES = ["blood","mind","echo","fortune","supplies"], RN = {blood:"Blood",mind:"Mind",echo:"Echo",fortune:"Fortune",supplies:"Supplies"};
var form = null;
function E(){ ST.exp = ST.exp || {start:null, ziel:null, delve:null, delvers:[], gegner:[]}; return ST.exp; }
function lm(id){ return (window.HT_LM || []).filter(function(x){ return x.id === id; })[0]; }
function dlv(id){ return (window.HT_DELVE || []).filter(function(x){ return x.id === id; })[0]; }
function geg(id){ return (window.HT_GEGNER || []).filter(function(x){ return x.id === id; })[0]; }
function kaest(n, max, vol, fn, cls){ var h = ""; for(var i = 0; i < max; i++) h += '<i class="kb ' + (cls || "") + (i < n ? " an" : "") + '" onclick="' + fn + "," + i + ')"></i>'; return h; }
function opt(list, sel, label){ return '<option value="">' + label + "</option>" + list.map(function(o){ return '<option value="' + esc(o[0]) + '"' + (o[0] === sel ? " selected" : "") + ">" + esc(o[1]) + "</option>"; }).join(""); }
function lmListe(){ return (window.HT_LM || []).slice().sort(function(a, b){ return String(a.t).localeCompare(b.t, "de"); }).map(function(l){ return [l.id, l.t]; }); }
function lmKarte(l, rolle){
  if(!l) return "";
  return '<div class="xl"><span class="rt"></span><span class="platte" onclick="go(\'lm/' + l.id + '\')">' + esc(l.t) + "</span> " + pgl(l.p, "S. " + l.p, l.bk) + (typeof l.tiefe === "number" ? ' <span class="tf">Tiefe ' + l.tiefe + "</span>" : "") +
    '<div class="xs"><b>' + esc((l.dom || []).join(", ")) + "</b> · Standard-Stress " + esc(l.stress || "") + (l.haunts && l.haunts.length ? " · Haunts: " + esc(l.haunts[0]) : "") + "</div>" +
    (rolle === "ziel" && l.haunts && l.haunts.length > 1 ? '<ul class="xh">' + l.haunts.map(function(h){ return "<li>" + md(h) + "</li>"; }).join("") + "</ul>" : "") + "</div>";
}
function delveKarte(x){
  var d = x.delve; if(!d) return "";
  var used = d.max - d.res;
  var erg = (d.erg || []).map(function(e, i){ return '<li class="' + (d.done && d.done[i] ? "ok" : "") + '" onclick="expErg(' + i + ')">' + md(e) + "</li>"; }).join("");
  return '<div class="xd"><div class="xdh"><span class="platte tl">' + esc(d.t) + "</span>" + (d.p ? " " + pgl(d.p, "S. " + d.p, d.bk) : "") + "</div>" +
    (d.besch ? '<p class="kurs">' + md(d.besch) + "</p>" : "") +
    '<div class="xw"><b>Domains:</b> ' + esc(d.dom || "–") + "<br><b>Stress:</b> " + esc(d.stress || "–") + "</div>" +
    '<div class="xr"><span class="gz">' + d.res + '</span><small>/ ' + d.max + '</small><span class="kbs">' + kaest(used, d.max, 0, "expRes(event", "d") + "</span></div>" +
    (erg ? '<div class="lbl">Ereignisse</div><ul class="xe">' + erg + "</ul>" : "") +
    (d.verb ? '<div class="xw"><b>Verbindung:</b> ' + md(d.verb) + "</div>" : "") +
    '<div class="xk"><span>Boon/Nachteil: <input id="xwert" type="number" min="1" max="12" placeholder="W"> <button onclick="expMod(-1)">Vorteil −</button><button onclick="expMod(1)">Nachteil +</button></span>' +
    '<button onclick="expAbbruch()">Delve abbrechen</button><button onclick="expVerb()">Verbindung hergestellt</button><button onclick="expDelveWeg()">Delve entfernen</button></div></div>';
}
function routeSeite(x){
  var l1 = lm(x.start), l2 = lm(x.ziel);
  var dl = (window.HT_DELVE || []).map(function(d){ return [d.id, d.t]; });
  var wahl = '<div class="xsel"><label>Start <select onchange="expSet(\'start\',this.value)">' + opt(lmListe(), x.start, "– wählen –") + "</select></label>" +
    '<label>Delve <select onchange="expDelve(this.value)">' + opt(dl.concat([["__eigen","Eigener Delve …"]]), x.delve && x.delve.id, "– wählen –") + "</select></label>" +
    '<label>Ziel <select onchange="expSet(\'ziel\',this.value)">' + opt(lmListe(), x.ziel, "– wählen –") + "</select></label></div>";
  var eigen = form === "delve" ? '<div class="xf"><input id="fn" placeholder="Name des Delves"><input id="fr" type="number" min="1" placeholder="Resistenz"><input id="fe" placeholder="Ereignisse (mit ; trennen)"><button onclick="expEigen()">Anlegen</button></div>' : "";
  return '<div class="xseite"><h2>Route</h2>' + wahl + eigen + lmKarte(l1, "start") + delveKarte(x) + lmKarte(l2, "ziel") + "</div>";
}
function mini(d, i){
  var sum = RES.reduce(function(a, r){ return a + (d.s[r] || 0); }, 0);
  var z = RES.map(function(r){ return '<div class="xz"><b>' + RN[r] + '</b><span class="kbs">' + kaest(d.s[r] || 0, 10, 0, "expSt(" + i + ",'" + r + "'", "s") + '</span><span class="kbs sc">' + kaest(d.sc[r] || 0, 5, 0, "expSc(" + i + ",'" + r + "'", "c") + "</span></div>"; }).join("");
  var fo = (d.fo || []).map(function(f, j){ return '<span class="sl" onclick="expFoText(' + i + "," + j + ')">' + esc(f.t) + "</span> <em>" + esc(f.r + " · " + f.s + " · " + f.tag) + '</em> <u onclick="event.stopPropagation();expFoWeg(' + i + "," + j + ')">×</u><br>'; }).join("");
  return '<div class="xm"><div class="xmh"><b>' + esc(d.n) + '</b><span class="stsum">Stress <big>' + sum + "</big></span></div><div class=\"xs\">" + esc([d.kl, d.be].filter(Boolean).join(" · ")) + "</div>" + z +
    '<div class="xa"><b>Ausrüstung:</b> <input value="' + esc(d.ausr || "") + '" onchange="expF(' + i + ',\'ausr\',this.value)"></div><div class="xa"><b>Ressource:</b> <input value="' + esc(d.res || "") + '" onchange="expF(' + i + ',\'res\',this.value)"></div>' +
    '<div class="xfo">' + (fo || '<em class="kf">kein Fallout</em>') + '</div><div class="xmk"><select onchange="expFoAdd(' + i + ',this.value)">' + foOpt() + '</select><u onclick="expDelverWeg(' + i + ')">Delver entfernen</u></div></div>';
}
function foOpt(){
  var L = window.falloutListe ? falloutListe() : [], h = '<option value="">+ Fallout</option>';
  L.forEach(function(f, i){ h += '<option value="' + i + '">' + esc(f.r + " · " + f.s + " · " + f.t) + "</option>"; });
  return h;
}
function delverSeite(x){
  var kasten = '<div class="schwarz xreg"><div class="lbl">Bei 7 oder weniger: Stress und Fallout abhandeln</div><table><tr><td>W12 &gt; Stress</td><td>Kein Fallout.</td></tr><tr><td>≤ Stress, 6 oder weniger</td><td>Leichter Fallout; aller Stress der betroffenen Resistenz wird gelöscht.</td></tr><tr><td>≤ Stress, 7 oder mehr</td><td>Schwerer Fallout; aller Stress wird gelöscht.</td></tr></table></div>';
  var neu = form === "delver" ? '<div class="xf"><input id="dn" placeholder="Name"><input id="dk" placeholder="Klasse"><input id="db" placeholder="Berufung"><button onclick="expDelver()">Anlegen</button></div>' : '<button class="xadd" onclick="expForm(\'delver\')">+ Delver</button>';
  return '<div class="xseite"><h2>Die Delver</h2>' + kasten + '<div class="xmg">' + x.delvers.map(mini).join("") + "</div>" + neu + "</div>";
}
function gegSeite(x){
  var pick = '<select onchange="expGegAdd(this.value)"><option value="">+ Gegner</option>' + (window.HT_GEGNER || []).map(function(g){ return '<option value="' + g.id + '">' + esc(g.t) + "</option>"; }).join("") + "</select>";
  var h = '<div class="xseite"><h2>Gegner</h2>';
  x.gegner.forEach(function(e, i){
    var g = geg(e.id); if(!g) return;
    var max = parseInt(g.res, 10) || 0;
    if(i === 0 || e.auf){
      h += '<div class="xg"><div class="xdh"><span class="platte tl' + (g.legendaer ? " schwarz" : "") + '">' + esc(g.t) + "</span> " + pgl(g.p, "S. " + g.p, g.bk) + ' <u onclick="expGegWeg(' + i + ')">×</u></div>' +
        '<div class="xs"><b>' + esc(g.schw || "–") + "</b> · Schutz " + esc(g.schutz == null ? "–" : g.schutz) + "</div>" +
        (max ? '<div class="xr"><span class="gz">' + Math.max(0, max - (e.used || 0)) + "</span><small>/ " + max + '</small><span class="kbs">' + kaest(Math.min(e.used || 0, max), Math.min(max, 20), 0, "expGegSt(" + i, "d") + "</span></div>" : "") +
        '<div class="xw">' + (g.motiv ? "<b>Motivation:</b> " + md(g.motiv) + "<br>" : "") + (g.ressourcen ? "<b>Ressourcen:</b> " + md(g.ressourcen) + "<br>" : "") + (g.ausr ? "<b>Ausrüstung:</b> " + md(g.ausr) : "") + "</div>" +
        (g.fallout || []).map(function(f){ return '<div class="schwarz"><div class="lbl">Fallout: ' + esc(f.t) + " · " + esc(f.r || "") + ", " + esc(f.s || "") + "</div><p>" + md(f.x) + "</p></div>"; }).join("") +
        '<div class="xmk"><u onclick="go(\'gegner\')">Alle Angaben im Gegner-Tab</u></div></div>';
    } else {
      h += '<div class="xgz" onclick="expGegAuf(' + i + ')"><span class="platte tl">' + esc(g.t) + "</span> " + pgl(g.p, "S. " + g.p, g.bk) + "<span>" + esc((g.schw || "–") + " · Resistenz " + (g.res == null ? "–" : g.res) + " · Schutz " + (g.schutz == null ? "–" : g.schutz)) + "</span></div>";
    }
  });
  return h + '<div class="xpick">' + pick + "</div></div>";
}
function view(){ var x = E(); return window.spielNav("exp") + '<div class="xwrap">' + routeSeite(x) + delverSeite(x) + gegSeite(x) + "</div>"; }
function S(f){ return function(){ f.apply(null, arguments); save(); render(); }; }
window.expForm = function(f){ form = f; render(); };
window.expSet = S(function(k, v){ E()[k] = v || null; });
window.expDelve = S(function(v){
  if(v === "__eigen"){ form = "delve"; return; }
  var d = dlv(v); form = null;
  E().delve = d ? {id: d.id, t: d.t, p: d.p, bk: d.bk, besch: d.besch, dom: (d.dom || []).join(", "), stress: d.stress, erg: d.erg, verb: d.verb, max: d.res, res: d.res, start: d.res, done: {}} : null;
});
window.expEigen = S(function(){
  var r = parseInt(document.getElementById("fr").value, 10) || 8, n = document.getElementById("fn").value || "Delve";
  E().delve = {id: null, t: n, erg: document.getElementById("fe").value.split(";").map(function(s){ return s.trim(); }).filter(Boolean), max: r, res: r, start: r, done: {}}; form = null;
});
window.expRes = S(function(ev, i){ var d = E().delve; var used = d.max - d.res; used = used === i + 1 ? i : i + 1; d.res = d.max - used; });
window.expMod = S(function(sg){ var v = parseInt((document.getElementById("xwert") || {}).value, 10); if(!v) return; var d = E().delve; d.res = Math.max(0, Math.min(d.max + 20, d.res + sg * v)); });
window.expErg = S(function(i){ var d = E().delve; d.done = d.done || {}; d.done[i] = !d.done[i]; });
window.expAbbruch = S(function(){ var d = E().delve; d.res = Math.max(1, Math.ceil(((d.start || d.max) - d.res) / 2)); d.max = Math.max(d.max, d.res); d.t += " (Rückweg)"; });
window.expVerb = S(function(){ var d = E().delve; var used = d.max - d.res; d.max = Math.ceil(d.max / 2); d.res = Math.max(0, d.max - Math.min(used, d.max)); d.start = d.max; });
window.expDelveWeg = S(function(){ E().delve = null; });
window.expDelver = S(function(){ var n = document.getElementById("dn").value; if(!n) return; E().delvers.push({n: n, kl: document.getElementById("dk").value, be: document.getElementById("db").value, s: {}, sc: {}, ausr: "", res: "", fo: []}); form = null; });
window.expDelverWeg = S(function(i){ E().delvers.splice(i, 1); });
window.expSt = S(function(ev, i, r, k){ var d = E().delvers[i]; d.s[r] = d.s[r] === k + 1 ? k : k + 1; });
window.expSc = S(function(ev, i, r, k){ var d = E().delvers[i]; d.sc[r] = d.sc[r] === k + 1 ? k : k + 1; });
window.expF = S(function(i, k, v){ E().delvers[i][k] = v; });
window.expFoAdd = S(function(i, v){ if(v === "") return; var f = falloutListe()[parseInt(v, 10)]; E().delvers[i].fo.push({t: f.t, r: f.r, s: f.s, tag: f.tag, id: f.id}); });
window.expFoWeg = S(function(i, j){ E().delvers[i].fo.splice(j, 1); });
window.expFoText = function(i, j){ var f = E().delvers[i].fo[j], L = falloutListe(), k = L.filter(function(z){ return z.id === f.id; })[0]; if(k) modal('<h2>' + esc(k.t) + '</h2><p><em>' + esc(k.r + " · " + k.s + " · " + k.tag) + "</em></p>" + k.html); };
window.expGegAdd = S(function(v){ if(v) E().gegner.push({id: v, used: 0}); });
window.expGegWeg = S(function(i){ E().gegner.splice(i, 1); });
window.expGegAuf = S(function(i){ E().gegner[i].auf = !E().gegner[i].auf; });
window.expGegSt = S(function(ev, i, k){ var e = E().gegner[i]; e.used = e.used === k + 1 ? k : k + 1; });
window.auffDieExpedition = function(id){ var x = E(); if(x.gegner.every(function(e){ return e.id !== id; })) x.gegner.push({id: id, used: 0}); save(); go("exp"); };
VIEWS.exp = view;
})();
