/* Kids (Entwurf 4) + Charakterbogen (nah am Original, Export als ausfüllbares PDF über shared/fillpdf.js) */
(function(){
  var K = window.KIDS, KEY = "tftl_kids_v1";
  function esc(s){ return String(s == null ? "" : s).replace(/[&<>"]/g, function(c){ return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]; }); }
  function load(){ try{ var d = JSON.parse(localStorage.getItem(KEY) || "null"); if(d && d.kids) return d; }catch(e){} return {kids: [], hideout: ["","","","",""]}; }
  var D = load();
  function save(){ try{ localStorage.setItem(KEY, JSON.stringify(D)); }catch(e){} }
  function neu(){ return {id: "k" + Date.now().toString(36) + Math.floor(Math.random() * 99), name: "", typ: "", alter: "", song: "", a: {}, glueck: null, z: {}, pride: "", prideUsed: false, problem: "", drive: "", anker: "", item: "", itemOn: false, s: {}, rel: {}, items: [["",""],["",""],["",""],["",""],["",""]], desc: "", notes: "", xp: {}}; }
  function kid(id){ return D.kids.filter(function(k){ return k.id === id; })[0]; }
  function typ(id){ id = String(id || "").trim().toLowerCase(); return K.typen.filter(function(t){ return t[0] === id || t[1].toLowerCase() === id; })[0]; }
  function gmax(k){ var a = parseInt(k.alter, 10); return a >= 10 && a <= 15 ? 15 - a : 0; }
  function gcur(k){ var m = gmax(k); return k.glueck == null ? m : Math.min(m, k.glueck); }
  function nm(k){ return k.name || "Neues Kid"; }

  /* ---------- Kids-Seite ---------- */
  function card(k){
    var t = typ(k.typ), m = gmax(k), c = gcur(k), dots = "";
    for(var i = 0; i < m; i++) dots += '<i class="gd' + (i < c ? ' on' : '') + '" data-g="' + (i + 1) + '"></i>';
    return '<article class="kc" data-id="' + k.id + '"><a class="kh" href="#bogen/' + k.id + '">' + (t ? '<img src="img/' + t[2] + '.webp" alt="">' : '<span class="noimg"></span>') +
      '<div><h3>' + esc(nm(k)) + '</h3><b>' + esc(t ? t[1] : "Typ wählen") + (k.alter ? ' · ' + esc(k.alter) : '') + '</b>' + (k.song ? '<small>Lieblingslied: „' + esc(k.song) + '“</small>' : '') + '</div></a>' +
      '<div class="ka">' + K.attr.map(function(a){ return '<div><small>' + a[1] + '</small><b>' + esc(k.a[a[0]] || "–") + '</b></div>'; }).join("") + '</div>' +
      '<div class="kg"><small>Glück</small><span class="kn">' + c + ' / ' + m + '</span><div class="gdw">' + dots + '</div></div>' +
      '<div class="kz"><small>Zustände</small><div>' + K.zustaende.map(function(z){ return '<button class="zb' + (z[0] === "geb" ? ' geb' : '') + (k.z[z[0]] ? ' on' : '') + '" data-z="' + z[0] + '">' + z[1] + '</button>'; }).join("") + '</div></div>' +
      '<div class="kr">' + (k.pride ? '<button class="pb' + (k.prideUsed ? ' used' : '') + '" data-p="1">' + (k.prideUsed ? 'Eingesetzt' : 'Frei') + '</button>' : '') + '<small>Stolz</small> ' + esc(k.pride) + '</div>' +
      '<div class="kr"><small>Problem</small> ' + esc(k.problem) + '<br><small>Antrieb</small> ' + esc(k.drive) + '<br><small>Anker</small> ' + esc(k.anker) + '</div>' +
      '<div class="kr"><small>Gegenstand</small> ' + esc(k.item) + (k.item ? ' (+2)' : '') + '</div></article>';
  }
  function renderKids(app){
    D = load();
    app.className = "page kids";
    app.innerHTML = '<div class="kt"><h1>Unsere Kids</h1><button class="chip" id="kAdd">+ Kid</button><label class="chip">Bogen einlesen (PDF)<input type="file" id="kImp" accept="application/pdf,.pdf" hidden></label><button class="chip" id="kLeer">Leerer Bogen</button></div>' +
      '<div class="kgrid">' + D.kids.map(card).join("") + '</div>' +
      '<div class="kb"><div class="tr"><h4>Versteck</h4>' + D.hideout.map(function(h, i){ return '<input class="hl" data-h="' + i + '" value="' + esc(h) + '">'; }).join("") + '</div></div>';
    app.onclick = function(e){
      var t = e.target, c = t.closest(".kc"), k = c && kid(c.dataset.id);
      if(t.closest("#kAdd")){ var n = neu(); D.kids.push(n); save(); location.hash = "bogen/" + n.id; return; }
      if(t.closest("#kLeer")){ pdfLeer(); return; }
      if(!k) return;
      var g = t.closest(".gd"); if(g){ var v = +g.dataset.g; k.glueck = (gcur(k) === v) ? v - 1 : v; save(); renderKids(app); return; }
      var z = t.closest(".zb"); if(z){ k.z[z.dataset.z] = !k.z[z.dataset.z]; save(); renderKids(app); return; }
      if(t.closest(".pb")){ k.prideUsed = !k.prideUsed; save(); renderKids(app); return; }
    };
    app.oninput = function(e){ var h = e.target.dataset && e.target.dataset.h; if(h != null){ D.hideout[+h] = e.target.value; save(); } };
    app.querySelector("#kImp").onchange = function(){ importPdf(this.files[0], app); this.value = ""; };
  }

  /* ---------- Bogen ---------- */
  function inp(k, path, cls, ph){ var v = get(k, path); return '<input class="bf ' + (cls || "") + '" data-p="' + path + '" value="' + esc(v) + '"' + (ph ? ' placeholder="' + ph + '"' : '') + '>'; }
  function get(k, p){ var o = k, a = p.split("."); for(var i = 0; i < a.length; i++){ if(o == null) return ""; o = o[a[i]]; } return o == null ? "" : o; }
  function set(k, p, v){ var o = k, a = p.split("."); for(var i = 0; i < a.length - 1; i++){ if(o[a[i]] == null) o[a[i]] = {}; o = o[a[i]]; } o[a[a.length - 1]] = v; }
  function chk(k, path){ return '<input type="checkbox" class="bc" data-p="' + path + '"' + (get(k, path) ? ' checked' : '') + '>'; }
  function row(label, inner, alt){ return '<div class="rw r' + (alt % 2) + '"><span>' + label + '</span>' + inner + '</div>'; }
  function sheet(k){
    var lbl = function(t, inner, cls){ return '<label class="fd ' + (cls || "") + '"><small>' + t + '</small>' + inner + '</label>'; };
    var typSel = '<input class="bf" data-p="typ" list="typl" value="' + esc(k.typ) + '"><datalist id="typl">' + K.typen.map(function(t){ return '<option value="' + t[1] + '">'; }).join("") + '</datalist>';
    var h = '<div class="sheet" id="sheet"><div class="sh-t">Charakterbogen</div><img class="sh-logo" src="../assets/logos/tales-from-the-loop.webp" alt="Tales from the Loop">' +
      '<div class="sh-cols"><div class="sh-l">' +
      '<div class="bx"><h5>Attribute</h5>' + K.attr.map(function(a, i){ return row(a[1], inp(k, "a." + a[0], "num"), i); }).join("") + '</div>' +
      '<div class="bx"><h5>Zustände</h5>' + K.zustaende.map(function(z, i){ return row(z[1], chk(k, "z." + z[0]), i); }).join("") + '</div>' +
      '<div class="bx"><h5>Fertigkeiten</h5>' + K.skills.map(function(s, i){ return row(s[1] + ' <em>(' + s[2] + ')</em>', inp(k, "s." + s[0], "num"), i); }).join("") + '</div>' +
      '<div class="bx"><h5>Erfahrung</h5><div class="xp">' + [0,1,2,3,4,5,6,7,8,9].map(function(i){ return chk(k, "xp.x" + i); }).join("") + '</div></div></div>' +
      '<div class="sh-r"><div class="inf">' + lbl("Name", inp(k, "name"), "w2") + lbl("Alter", inp(k, "alter", "num l")) + lbl("Typ", typSel) +
      lbl("Kultgegenstand (Bonus +2)", inp(k, "item")) + lbl("Stolz", inp(k, "pride") + chk(k, "prideUsed"), "pr") + lbl("Anker", inp(k, "anker")) + lbl("Glückspunkte", '<span class="ro">' + gcur(k) + ' / ' + gmax(k) + '</span>', "pr") +
      lbl("Problem", inp(k, "problem"), "w2") + lbl("Antrieb", inp(k, "drive"), "w2") + lbl("Beschreibung", inp(k, "desc"), "w2") + lbl("Lieblingslied", inp(k, "song"), "w2") + '</div>' +
      '<div class="bx"><h5>Beziehungen</h5>' + ["Kid 1","Kid 2","Kid 3","Kid 4","NSC 1","NSC 2"].map(function(t, i){ return lbl(t, inp(k, "rel.r" + i), "w2 ln"); }).join("") + '</div>' +
      '<div class="two"><div class="bx"><h5>Gegenstände <em>Bonus</em></h5>' + [0,1,2,3,4].map(function(i){ return '<div class="it">' + inp(k, "items." + i + ".0") + inp(k, "items." + i + ".1", "num") + '</div>'; }).join("") + '</div>' +
      '<div class="bx"><h5>Versteck</h5>' + [0,1,2,3,4].map(function(i){ return '<div class="it">' + '<input class="bf" data-hd="' + i + '" value="' + esc(D.hideout[i]) + '"></div>'; }).join("") + '</div></div>' +
      '<div class="bx"><h5>Notizen</h5><textarea class="bf nt" data-p="notes">' + esc(k.notes) + '</textarea></div></div></div></div>';
    return h;
  }
  function renderBogen(app, id){
    D = load();
    var k = kid(id);
    if(!k){ app.className = "page"; app.innerHTML = '<h1>Kid nicht gefunden</h1>'; return; }
    app.className = "page bogen";
    app.innerHTML = '<div class="kt"><a class="chip" href="#kids">‹ Kids</a><button class="chip f" id="bPdf">Als ausfüllbares PDF</button><button class="chip" id="bPrint">Drucken</button><button class="chip" id="bDel">Kid löschen</button></div>' + sheet(k);
    function upd(e){ var t = e.target;
      if(t.dataset.hd != null){ D.hideout[+t.dataset.hd] = t.value; save(); return; }
      var p = t.dataset.p; if(!p) return;
      set(k, p, t.type === "checkbox" ? t.checked : t.value); save(); }
    app.oninput = upd; app.onchange = function(e){ upd(e); if(e.target.dataset.p === "alter") renderBogen(app, id); };
    app.querySelector("#bPrint").onclick = function(){ window.print(); };
    app.querySelector("#bDel").onclick = function(){ if(confirm("Dieses Kid löschen?")){ D.kids = D.kids.filter(function(x){ return x.id !== id; }); save(); location.hash = "kids"; } };
    app.querySelector("#bPdf").onclick = function(){ if(!window.FillPDF) return; FillPDF.make(document.getElementById("sheet"), {name: "Tales from the Loop – " + nm(k), knopf: this}); };
  }

  /* ---------- Leerer Bogen / Einlesen ---------- */
  function offscreen(k){ var d = document.createElement("div"); d.style.cssText = "position:absolute;left:-9999px;top:0"; d.innerHTML = sheet(k); document.body.appendChild(d); return d; }
  function pdfLeer(){ if(!window.FillPDF) return; var d = offscreen(neu()); FillPDF.make(d.querySelector("#sheet"), {name: "Tales from the Loop – Leerer Bogen"}).then(function(){ d.remove(); }, function(){ d.remove(); }); }
  function importPdf(file, app){
    if(!file) return;
    var lib = window.PDFLib ? Promise.resolve() : new Promise(function(res, rej){ var s = document.createElement("script"); s.src = "../shared/lib/pdf-lib.min.js"; s.onload = res; s.onerror = rej; document.head.appendChild(s); });
    lib.then(function(){ return file.arrayBuffer(); }).then(function(buf){ return PDFLib.PDFDocument.load(buf); }).then(function(doc){
      var form = doc.getForm(), k = neu(), d = offscreen(k), n = 0, ok = 0;
      d.querySelectorAll("input,textarea,select").forEach(function(e){
        if(e.tagName === "SELECT") return;
        if(e.type === "file" || e.type === "hidden" || !(e.offsetWidth || e.offsetHeight)) return;
        n++; var p = e.dataset.p, hd = e.dataset.hd;
        try{
          if(e.type === "checkbox"){ var c = form.getCheckBox("k" + n); if(p) set(k, p, c.isChecked()); ok++; }
          else { var v = form.getTextField("t" + n).getText() || ""; if(p) set(k, p, v); else if(hd != null) D.hideout[+hd] = v || D.hideout[+hd]; ok++; }
        }catch(x){}
      });
      d.remove();
      if(!ok){ alert("Das ist kein Bogen aus diesem Tool (keine passenden Felder gefunden)."); return; }
      var tn = (k.typ || ""); D.kids.push(k); save(); location.hash = "bogen/" + k.id;
    }).catch(function(){ alert("Die Datei konnte nicht gelesen werden."); });
  }
  window.renderKids = renderKids; window.renderBogen = renderBogen;
})();
