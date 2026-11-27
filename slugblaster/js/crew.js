/* SLUGBLASTER – Crew-Status (Entwurf 2): ruhige Tabelle Name/Persönlichkeit · Trouble + Style · Attitude · Slams, darunter die Crew-Zeile
   (Hype, Crew-Style, Ruhm, Brüche). Alles klickbar, alles im Spielstand. */
var SBC = (function(){
  function SCS(){ return (ST.sc = ST.sc || []); }
  function crew(){ var c = (ST.crew = ST.crew || {}); if(c.hb == null){ c.hb = 4; c.hk = 4; c.hbs = 0; c.hks = 0; c.style = 0; c.ruhm = 0; c.brueche = 0; c.name = c.name || ""; } return c; }
  function sc(i){ return SCS()[i]; }
  /* ---- Symbole wie auf dem Bogen ---- */
  function tri(f, last){ return '<svg viewBox="0 0 18 16"><path d="M9 1.5 16.5 14.5H1.5Z" fill="' + (f ? "#000" : "#fff") + '" stroke="#000" stroke-width="2" stroke-linejoin="round"/>' + (last && !f ? '<path d="M9 6v4.5" stroke="#000" stroke-width="2"/><circle cx="9" cy="12.3" r="1"/>' : "") + '</svg>'; }
  function die(c, inf){ return '<svg viewBox="0 0 20 20"><rect x="1" y="1" width="18" height="18" rx="4" fill="' + c + '"/><g fill="#fff"><circle cx="6" cy="6" r="1.7"/><circle cx="14" cy="14" r="1.7"/><circle cx="14" cy="6" r="1.7"/><circle cx="6" cy="14" r="1.7"/><circle cx="10" cy="10" r="1.7"/></g></svg>'; }
  function bolt(c){ return '<svg viewBox="0 0 20 20"><circle cx="10" cy="10" r="9" fill="' + c + '"/><path d="M11.5 3 6 11h3.6l-1.4 6 5.4-8.6H10z" fill="#fff"/></svg>'; }
  function slamTxt(s){ return (s.s ? "super " : "") + s.t; }
  function zeile(p, i){
    var P = sbPers(p.pers), a = p.aerger || 0, s = p.style || 0, h = P.haltung, tr = "", st = "", k;
    for(k = 0; k < 8; k++) tr += '<button class="ic" onclick="SBC.trouble(' + i + ',' + k + ')">' + tri(k < a, k === 7) + '</button>';
    for(k = 0; k < 8; k++) st += '<button class="ic" onclick="SBC.style(' + i + ',' + k + ')"><i class="' + (k < s ? "x" : "") + '"></i></button>';
    var att = h.b === "inf" ? '<span class="inf" title="+1W6 auf alle Aktionen">' + die("#00aeef") + '<em>∞</em></span>' : (function(){ var o = "", j; for(j = 0; j < h.b; j++) o += '<button class="ic" onclick="SBC.att(' + i + ',\'b\',' + j + ')">' + die(j < h.b - (p.bs || 0) ? "#00aeef" : "#d9d4e2") + '</button>'; for(j = 0; j < h.k; j++) o += '<button class="ic" onclick="SBC.att(' + i + ',\'k\',' + j + ')">' + bolt(j < h.k - (p.ks || 0) ? "#00aeef" : "#d9d4e2") + '</button>'; return o; })();
    var sl = "", sts = p.stuerze || [];
    for(k = 0; k < 2; k++) sl += sts[k] ? '<button class="sl' + (sts[k].s ? " sup" : "") + '" onclick="SBC.slam(' + i + ',' + k + ')">' + esc(slamTxt(sts[k])) + '</button>' : '<button class="sl e" onclick="SBC.slam(' + i + ',' + k + ')">frei</button>';
    if(sts.length >= 2) sl += '<button class="sl plus' + (p.auto ? " on" : "") + '" onclick="SBC.slamUeber(' + i + ')">+ Slam</button>';
    var dz = (p.verh || []).length, lg = (p.verm || []).length;
    var warn = (a >= 8 || p.auto) ? '<em class="dis">Disaster</em>' : "";
    return '<div class="c nm"><div><b onclick="SBC.edit(' + i + ')">' + esc(p.name || "Slugger") + '</b><span style="background:' + P.farbe + '">' + esc(P.t) + '</span>' + warn +
      (dz || lg ? '<small>' + (dz ? "Doom " + dz : "") + (dz && lg ? " · " : "") + (lg ? "Legacy " + lg : "") + '</small>' : "") + '</div></div>' +
      '<div class="c col2"><span class="tb">' + tr + '</span><span class="st">' + st + '</span></div><div class="c"><span class="hl">' + att + '</span></div><div class="c sls">' + sl + '</div>';
  }
  function status(){
    var c = crew(), l = SCS(), h = "";
    h += '<div class="ct" style="color:var(--pink)">Crew' + (c.name ? ' · <span class="cname" onclick="SBC.crewEdit()">' + esc(c.name) + '</span>' : ' · <span class="cname leer" onclick="SBC.crewEdit()">Name</span>') + '</div>';
    h += '<div class="crew"><div class="hd"></div><div class="hd">Trouble · Style</div><div class="hd">Haltung</div><div class="hd">Slams</div>' + l.map(zeile).join("") + '</div>';
    h += '<button class="add" onclick="SBC.neu()">+ Slugger</button>';
    var rn = SB_RUHM[c.ruhm || 0].t;
    var hy = (function(){ var o = "", j; for(j = 0; j < c.hb; j++) o += '<button class="ic" onclick="SBC.hype(\'b\',' + j + ')">' + die(j < c.hb - c.hbs ? "#6d4d9f" : "#bcb0d6") + '</button>'; for(j = 0; j < c.hk; j++) o += '<button class="ic" onclick="SBC.hype(\'k\',' + j + ')">' + bolt(j < c.hk - c.hks ? "#6d4d9f" : "#bcb0d6") + '</button>'; return o; })();
    var fr = ""; for(var k = 0; k < 2; k++) fr += '<button class="ic" onclick="SBC.bruch(' + k + ')"><i class="' + (k < (c.brueche || 0) ? "x" : "") + '"></i></button>';
    h += '<div class="crewl"><div><div class="ct">Hype</div><div class="hl">' + hy + '</div></div>' +
      '<div><div class="ct">Crew-Style</div><div class="v cs"><button onclick="SBC.cstyle(-1)" aria-label="weniger">−</button><b>' + (c.style || 0) + '</b><button onclick="SBC.cstyle(1)" aria-label="mehr">+</button></div></div>' +
      '<div><div class="ct">Ruhm</div><div class="v">' + esc(rn) + '</div></div>' +
      '<div><div class="ct">Brüche</div><div class="frk">' + fr + '</div></div></div>';
    return h;
  }
  /* ---- Dialoge ---- */
  var NEUSC = null;
  function persChips(sel, fn){ return '<div class="chs">' + SB_PERS.map(function(p){ return '<button class="' + (sel === p.id ? "on" : "") + '" style="--pc:' + p.farbe + '" onclick="' + fn + '(\'' + p.id + '\')">' + esc(p.t) + '</button>'; }).join("") + '</div>'; }
  function neuForm(){
    return '<h3 class="h3">Slugger</h3><div class="fld"><label class="cap">Name</label><input id="scName" type="text" value="' + esc(NEUSC.name) + '" oninput="SBC.nn(this.value)" autocomplete="off"></div>' +
      '<div class="fld"><label class="cap">Persönlichkeit</label>' + persChips(NEUSC.pers, "SBC.np") + '</div><div class="act"><button class="pri" onclick="SBC.neuOk()">Anlegen</button></div>';
  }
  var ED = null;
  function editForm(){
    var p = sc(ED.i), li = function(k, t){ return '<div class="fld"><label class="cap">' + t + '</label><div class="lst">' + (p[k] || []).map(function(x, j){ return '<button onclick="SBC.liDel(\'' + k + '\',' + j + ')">' + esc(x) + '</button>'; }).join("") + '</div><div class="addrow"><input id="li_' + k + '" type="text" placeholder="hinzufügen" onkeydown="if(event.key===\'Enter\')SBC.liAdd(\'' + k + '\')" autocomplete="off"><button onclick="SBC.liAdd(\'' + k + '\')">+</button></div></div>'; };
    return '<h3 class="h3">Slugger</h3><div class="fld"><label class="cap">Name</label><input id="scName" type="text" value="' + esc(p.name) + '" oninput="SBC.en(this.value)" autocomplete="off"></div>' +
      '<div class="fld"><label class="cap">Persönlichkeit</label>' + persChips(p.pers, "SBC.ep") + '</div>' + li("verh", "Doom") + li("verm", "Legacy") +
      '<div class="act"><button class="del2' + (ED.del ? " on" : "") + '" onclick="SBC.delSc()">' + (ED.del ? "Wirklich entfernen" : "Entfernen") + '</button><button class="pri" onclick="SBC.editOk()">Fertig</button></div>';
  }
  function redraw(o, f){ if(o && o.m && o.m.isConnected){ var a = document.activeElement, id = a && a.id, v = a && a.value; o.m.firstChild.innerHTML = f(); if(id){ var n = document.getElementById(id); if(n){ n.focus(); try{ n.setSelectionRange(v.length, v.length); }catch(e){} } } } }
  var SL = null;
  function slamForm(){
    return '<h3 class="h3">Slam</h3><div class="fld"><label class="cap">Beschreibung</label><input id="slT" type="text" value="' + esc(SL.t) + '" oninput="SBC.slT(this.value)" onkeydown="if(event.key===\'Enter\')SBC.slOk()" autocomplete="off"></div>' +
      '<div class="fld"><div class="chs"><button class="' + (SL.s ? "on" : "") + '" onclick="SBC.slS()">Super</button></div></div>' +
      '<div class="act">' + (SL.edit ? '<button class="del2" onclick="SBC.slDel()">Löschen</button>' : "") + '<button class="pri" onclick="SBC.slOk()">Speichern</button></div>';
  }
  var DM = null;
  return {
    status: status, sc: sc, crew: crew, list: SCS,
    trouble: function(i, k){ var p = sc(i); p.aerger = (p.aerger === k + 1) ? k : k + 1; save(); render(); },
    style: function(i, k){ var p = sc(i); p.style = (p.style === k + 1) ? k : k + 1; save(); render(); },
    att: function(i, t, j){ var p = sc(i), h = sbPers(p.pers).haltung, key = t === "b" ? "bs" : "ks", tot = t === "b" ? h.b : h.k, rest = tot - (p[key] || 0); p[key] = j < rest ? tot - j : tot - j - 1; if(p[key] < 0) p[key] = 0; save(); render(); },
    hype: function(t, j){ var c = crew(), key = t === "b" ? "hbs" : "hks", tot = t === "b" ? c.hb : c.hk, rest = tot - (c[key] || 0); c[key] = j < rest ? tot - j : tot - j - 1; if(c[key] < 0) c[key] = 0; save(); render(); },
    cstyle: function(d){ var c = crew(); c.style = Math.max(0, (c.style || 0) + d); save(); render(); },
    bruch: function(k){ var c = crew(); c.brueche = (c.brueche === k + 1) ? k : k + 1; save(); render(); },
    /* Slam bearbeiten / neu */
    slam: function(i, k){ var p = sc(i), cur = (p.stuerze || [])[k]; SL = { i:i, k:cur ? k : (p.stuerze || []).length, t:cur ? cur.t : "", s:cur ? !!cur.s : false, edit:!!cur }; if(!cur && (p.stuerze || []).length >= 2) return; SL.m = modal(slamForm()); setTimeout(function(){ var n = document.getElementById("slT"); if(n){ n.focus(); n.select(); } }, 30); },
    slT: function(v){ SL.t = v; }, slS: function(){ SL.s = !SL.s; redraw(SL, slamForm); },
    slOk: function(){ var t = (SL.t || "").trim(); if(!t) return; var p = sc(SL.i); p.stuerze = p.stuerze || []; p.stuerze[SL.k] = { t:t, s:SL.s }; save(); SL.m.remove(); SL = null; render(); },
    slDel: function(){ var p = sc(SL.i); p.stuerze.splice(SL.k, 1); save(); SL.m.remove(); SL = null; render(); },
    slamUeber: function(i){ var p = sc(i); p.auto = !p.auto; save(); render(); },
    /* Slugger anlegen / bearbeiten */
    neu: function(){ NEUSC = { name:"", pers:"guts" }; NEUSC.m = modal(neuForm()); setTimeout(function(){ var n = document.getElementById("scName"); if(n) n.focus(); }, 30); },
    nn: function(v){ NEUSC.name = v; }, np: function(id){ NEUSC.pers = id; redraw(NEUSC, neuForm); },
    neuOk: function(){ SCS().push({ id:"s" + Date.now().toString(36), name:(NEUSC.name || "").trim() || "Slugger", pers:NEUSC.pers, aerger:0, style:0, bs:0, ks:0, stuerze:[], verh:[], verm:[], mom:{ eig:[], bogen:0, familie:0, angst:0, dt:{} } }); save(); NEUSC.m.remove(); NEUSC = null; render(); },
    edit: function(i){ ED = { i:i, del:false }; ED.m = modal(editForm()); },
    en: function(v){ sc(ED.i).name = v; save(); }, ep: function(id){ sc(ED.i).pers = id; save(); redraw(ED, editForm); },
    liAdd: function(k){ var n = document.getElementById("li_" + k), v = n && n.value.trim(); if(!v) return; var p = sc(ED.i); (p[k] = p[k] || []).push(v); save(); redraw(ED, editForm); },
    liDel: function(k, j){ var p = sc(ED.i); p[k].splice(j, 1); save(); redraw(ED, editForm); },
    delSc: function(){ if(!ED.del){ ED.del = true; redraw(ED, editForm); return; } SCS().splice(ED.i, 1); save(); ED.m.remove(); ED = null; render(); },
    editOk: function(){ ED.m.remove(); ED = null; render(); },
    crewEdit: function(){ var c = crew(); var m = modal('<h3 class="h3">Crew</h3><div class="fld"><label class="cap">Name</label><input id="cName" type="text" value="' + esc(c.name || "") + '" onkeydown="if(event.key===\'Enter\')this.nextElementSibling.click()" autocomplete="off"><button style="display:none" onclick="SBC.crewOk()"></button></div><div class="act"><button class="pri" onclick="SBC.crewOk()">Fertig</button></div>'); setTimeout(function(){ var n = document.getElementById("cName"); if(n) n.focus(); }, 30); },
    crewOk: function(){ crew().name = document.getElementById("cName").value.trim(); save(); document.querySelectorAll(".modal").forEach(function(m){ m.remove(); }); render(); },
    /* Doom hinzufügen (Disaster 1–3) – Rückgabe über Callback */
    doom: function(i, cb){ DM = { i:i, cb:cb }; DM.m = modal('<h3 class="h3">Doom</h3><div class="fld"><label class="cap">Was bleibt zurück?</label><input id="dmT" type="text" onkeydown="if(event.key===\'Enter\')SBC.doomOk()" autocomplete="off"></div><div class="act"><button class="pri" onclick="SBC.doomOk()">Eintragen</button></div>'); setTimeout(function(){ var n = document.getElementById("dmT"); if(n) n.focus(); }, 30); },
    doomOk: function(){ var v = document.getElementById("dmT").value.trim() || "–", p = sc(DM.i); (p.verh = p.verh || []).push(v); var cb = DM.cb; DM.m.remove(); DM = null; if(cb) cb(); save(); render(); },
    icons:{ tri:tri, die:die, bolt:bolt }
  };
})();
