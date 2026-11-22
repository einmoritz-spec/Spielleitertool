/* SLUGBLASTER – Leisten (Regelbuch S. 149): Uhr 4/6/8, Kästchen, Wort, Strichliste. Fortschritt = Minze, Gefahr = Magenta.
   Überall derselbe Baustein: SBL.liste() baut die Leisten der Tafel, SBL.neu() öffnet den Dialog „+ Leiste“. */
var SBL = (function(){
  function L(){ return (ST.leisten = ST.leisten || []); }
  function find(id){ var l = L(); for(var i = 0; i < l.length; i++) if(l[i].id === id) return l[i]; return null; }
  function pt(a){ return (29 + 26 * Math.cos(a)).toFixed(2) + " " + (29 + 26 * Math.sin(a)).toFixed(2); }
  function farbe(t){ return t.art === "gefahr" ? "#ec008c" : "#2fb996"; }
  function uhr(t){
    var n = t.n, h = '<svg class="clock" viewBox="0 0 58 58">';
    for(var i = 0; i < n; i++){
      var a0 = -Math.PI / 2 + i * 2 * Math.PI / n, a1 = -Math.PI / 2 + (i + 1) * 2 * Math.PI / n;
      h += '<path d="M29 29L' + pt(a0) + 'A26 26 0 0 1 ' + pt(a1) + 'Z" fill="' + (i < t.x ? farbe(t) : "#fff") + '" stroke="#000" stroke-width="3" stroke-linejoin="round" onclick="SBL.set(\'' + t.id + '\',' + i + ')"/>';
    }
    return h + '</svg>';
  }
  function kaesten(t){ var h = '<span class="boxes">'; for(var i = 0; i < t.n; i++) h += '<i class="' + (i < t.x ? "x" : "") + '" onclick="SBL.set(\'' + t.id + '\',' + i + ')"></i>'; return h + '</span>'; }
  function wort(t){ var w = String(t.wort || "").toUpperCase().split(""), h = '<span class="wortl">'; w.forEach(function(c, i){ h += '<i class="' + (i < t.x ? "x" : "") + '" onclick="SBL.set(\'' + t.id + '\',' + i + ')">' + esc(c) + '</i>'; }); return h + '</span>'; }
  function strich(t){ return '<span class="strich"><button onclick="SBL.add(\'' + t.id + '\',-1)">−</button><b>' + t.x + '/' + t.n + '</b><button onclick="SBL.add(\'' + t.id + '\',1)">+</button></span>'; }
  function eintrag(t){
    var g = t.typ === "uhr" ? uhr(t) : t.typ === "kasten" ? kaesten(t) : t.typ === "wort" ? wort(t) : strich(t);
    var links = t.typ === "uhr" || (t.typ === "kasten" && t.n <= 4);
    return '<div class="tk ' + (t.art === "gefahr" ? "gef" : "") + (links ? "" : " unten") + '">' + (links ? '<div class="gr">' + g + '</div>' : "") +
      '<div class="tx"><small>' + (t.art === "gefahr" ? "Gefahr" : "Fortschritt") + '</small><b>' + esc(t.t) + '</b>' + (links ? "" : '<div class="gr">' + g + '</div>') + '</div>' +
      '<button class="del" onclick="SBL.del(\'' + t.id + '\')" aria-label="Leiste entfernen">×</button></div>';
  }
  var NEU = null;
  function form(){
    var typen = [["uhr4","Uhr 4"],["uhr6","Uhr 6"],["uhr8","Uhr 8"],["kasten","Kästchen"],["wort","Wort"],["strich","Strichliste"]];
    return '<h3 class="h3">Leiste</h3><div class="fld"><label class="cap">Name</label><input id="lName" type="text" value="' + esc(NEU.t) + '" oninput="SBL.nm(this.value)" autocomplete="off"></div>' +
      '<div class="fld"><label class="cap">Art</label><div class="chs"><button class="' + (NEU.art === "fortschritt" ? "on" : "") + '" onclick="SBL.nf(\'art\',\'fortschritt\')">Fortschritt</button><button class="' + (NEU.art === "gefahr" ? "on" : "") + '" onclick="SBL.nf(\'art\',\'gefahr\')">Gefahr</button></div></div>' +
      '<div class="fld"><label class="cap">Form <span class="pg" onclick="openBook(\'sb_core\',149)">S. 149</span></label><div class="chs">' + typen.map(function(x){ return '<button class="' + (NEU.form === x[0] ? "on" : "") + '" onclick="SBL.nf(\'form\',\'' + x[0] + '\')">' + x[1] + '</button>'; }).join("") + '</div></div>' +
      (NEU.form === "kasten" ? '<div class="fld"><label class="cap">Anzahl</label><div class="chs">' + [3,4,5,6,8].map(function(n){ return '<button class="' + (NEU.n === n ? "on" : "") + '" onclick="SBL.nf(\'n\',' + n + ')">' + n + '</button>'; }).join("") + '</div></div>' : "") +
      (NEU.form === "strich" ? '<div class="fld"><label class="cap">Länge</label><div class="chs">' + [3,5].map(function(n){ return '<button class="' + (NEU.n === n ? "on" : "") + '" onclick="SBL.nf(\'n\',' + n + ')">' + n + '</button>'; }).join("") + '</div></div>' : "") +
      (NEU.form === "wort" ? '<div class="fld"><label class="cap">Wort</label><input id="lWort" type="text" value="' + esc(NEU.wort) + '" oninput="SBL.nf(\'wort\',this.value,1)" autocomplete="off"></div>' : "") +
      '<div class="act"><button class="pri" onclick="SBL.ok()">Anlegen</button></div>';
  }
  function neu(){ NEU = { t:"", art:"fortschritt", form:"uhr6", n:4, wort:"" }; var m = modal(form()); NEU.m = m; setTimeout(function(){ var i = document.getElementById("lName"); if(i) i.focus(); }, 30); }
  function redraw(){ if(NEU && NEU.m && NEU.m.isConnected){ NEU.m.firstChild.innerHTML = form(); } }
  return {
    liste: function(){
      var l = L(), h = l.length ? l.map(eintrag).join("") : "";
      return h + '<button class="add" onclick="SBL.neu()">+ Leiste</button>';
    },
    neu: neu,
    nm: function(v){ NEU.t = v; },
    nf: function(k, v, keep){
      NEU[k] = v;
      if(k === "form"){ NEU.n = v === "kasten" ? 4 : v === "strich" ? 5 : NEU.n; }
      if(!keep) redraw();
    },
    ok: function(){
      var f = NEU.form, t = { id:"l" + Date.now().toString(36), t:(NEU.t || "").trim() || "Leiste", art:NEU.art, x:0 };
      if(f.indexOf("uhr") === 0){ t.typ = "uhr"; t.n = parseInt(f.slice(3), 10); }
      else if(f === "kasten"){ t.typ = "kasten"; t.n = NEU.n; }
      else if(f === "strich"){ t.typ = "strich"; t.n = NEU.n; }
      else { t.typ = "wort"; t.wort = (NEU.wort || "").replace(/[^A-Za-zÄÖÜäöüß]/g, "").toUpperCase() || "WORT"; t.n = t.wort.length; }
      L().push(t); save(); NEU.m.remove(); NEU = null; render();
    },
    set: function(id, i){ var t = find(id); if(!t) return; t.x = (t.x === i + 1) ? i : i + 1; save(); render(); },
    add: function(id, d){ var t = find(id); if(!t) return; t.x = Math.max(0, Math.min(t.n, t.x + d)); save(); render(); },
    del: function(id){ ST.leisten = L().filter(function(t){ return t.id !== id; }); save(); render(); }
  };
})();
