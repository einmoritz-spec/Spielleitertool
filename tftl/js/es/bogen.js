/* The Electric State – Charakterbogen (S. 220) und Fahrzeugbogen (S. 221), nachgebaut; Export als ausfüllbares PDF über shared/fillpdf.js,
   Einlesen eines exportierten Bogens legt die/den Reisende(n) an. Feldnamen = data-p. */
window.ES = window.ES || {};
(function(){
  function R(){ return ES.R; }
  function esc(s){ return R().esc(s); }
  var LOGO = '<img class="eb-logo" src="../assets/logos/electric-state-rpg.webp" alt="The Electric State">';
  function tape(c, pos){ return '<i class="etp ' + c + ' ' + pos + '"></i>'; }
  function inp(k, p, cls, v, at){ return '<input class="bf ' + (cls || "") + '" data-p="' + p + '" value="' + esc(v != null ? v : R().get(k, p)) + '"' + (at || "") + '>'; }
  function area(k, p, cls){ return '<textarea class="bf ' + (cls || "") + '" data-p="' + p + '">' + esc(R().get(k, p)) + '</textarea>'; }
  function line(lbl, inner, cls){ return '<label class="el ' + (cls || "") + '"><span>' + lbl + '</span>' + inner + '</label>'; }

  /* ---------- Charakterbogen ---------- */
  function others(k){ return R().getD().filter(function(x){ return x.id !== k.id; }); }
  function spRow(k, i){
    var o = others(k)[i], s = (k.sp && k.sp[i]) || {n: "", v: ""};
    var n = s.n || (o ? R().first(o) : ""), v = o ? String(Math.max(0, Math.min(2, R().num((k.spann || {})[o.id])))) : s.v;
    return '<div class="ets"><label class="el"><span>Reisende(r) ' + (i + 1) + '</span><input class="bf" data-sp="' + i + '.n" value="' + esc(n) + '"></label><input class="bf num" data-sp="' + i + '.v" value="' + esc(v) + '"></div>';
  }
  function sheet(k){
    var Rr = R(), AT = Rr.AT, arch = (ES.ARCHETYPEN || []).map(function(a){ return '<option value="' + esc(a.name) + '">'; }).join("");
    var tal = {}; (ES.ARCHETYPEN || []).forEach(function(a){ (a.talente || []).forEach(function(t){ tal[t[1]] = 1; }); });
    var talo = Object.keys(tal).map(function(t){ return '<option value="' + esc(t) + '">'; }).join("");
    var attrs = AT.map(function(t){ return '<label class="eat"><span>' + t[1] + '</span><input class="bf num" data-p="a.' + t[0] + '" value="' + esc(k.a[t[0]]) + '"></label>'; }).join("");
    var lines = function(path, n, first){ var h = ""; for(var i = first || 0; i < n; i++) h += inp(k, path + "." + i, "ln", null, path === "talente" ? ' list="esat"' : ""); return h; };
    return '<div class="esb-w" id="esSheet">' + tape("t1", "p1") + tape("t1", "p2") + tape("t1", "p3") +
      '<div class="esb"><div class="eb-h">' + LOGO + '<div class="eb-hf">' +
        '<div class="eb-two">' + line("Name", inp(k, "name")) + line("Archetyp", inp(k, "arch", "", null, ' list="esal"') + '<datalist id="esal">' + arch + '</datalist>') + '</div>' +
        line("Lieblingssong", inp(k, "song")) + '<label class="el ta"><span>Beschreibung</span>' + area(k, "desc", "ln2") + '</label></div></div>' +
      '<div class="eb-m"><div class="eb-l">' +
        '<div class="eb-sec"><div class="eb-at">' + attrs + '</div>' +
        '<div class="eb-two">' + line("Gesundheit", inp(k, "ges", "c", Rr.gcur(k))) + line("Hoffnung", inp(k, "hof", "c", Rr.hcur(k))) + '</div>' +
        '<div class="eb-two">' + line("Rausch", inp(k, "rausch", "c")) + line("Dauerhaft", inp(k, "dauer", "c")) + '</div>' +
        '<div class="eb-two tp2"><div><div class="el"><span>Talente</span></div>' + lines("talente", 4) + '<datalist id="esat">' + talo + '</datalist></div>' +
        '<div><label class="el ta"><span>Traum</span>' + area(k, "traum", "ln3") + '</label><label class="el ta"><span>Schwäche</span>' + area(k, "schw", "ln3") + '</label></div></div></div>' +
        '<div class="eb-sec"><div class="el"><span>Ausrüstung</span></div>' + lines("ausr", 3) + '<div class="eb-two">' + inp(k, "ausr.3", "ln") + line("Bargeld", inp(k, "bargeld")) + '</div></div></div>' +
      '<div class="eb-r"><div class="eb-sec"><h2>Reise</h2><label class="el ta"><span>Ziel</span>' + area(k, "ziel", "ln2") + '</label><label class="el ta"><span>Bedrohung</span>' + area(k, "bedr", "ln2") + '</label></div>' +
        '<div class="eb-sec"><h2>Spannung</h2>' + [0, 1, 2, 3].map(function(i){ return spRow(k, i); }).join("") + '</div></div></div>' +
      '<div class="eb-f"><span>Verletzungen<br>&amp; Trauma</span>' + area(k, "verl", "ln2 w") + '</div></div></div>';
  }
  function bind(app, k, rerender){
    function upd(e){
      var t = e.target, p = t.dataset.p, sp = t.dataset.sp;
      if(p){ R().set(k, p, t.value); }
      else if(sp){
        var q = sp.split("."), i = +q[0], o = others(k)[i]; k.sp = k.sp || [{}, {}, {}, {}]; k.sp[i] = k.sp[i] || {n: "", v: ""};
        if(q[1] === "v" && o){ k.spann = k.spann || {}; k.spann[o.id] = Math.max(0, Math.min(2, R().num(t.value))); } else k.sp[i][q[1]] = t.value;
      } else return;
      R().save();
    }
    app.oninput = upd;
    app.onchange = function(e){
      upd(e); var p = e.target.dataset.p;
      if(p === "arch" && !k.ziel && !k.bedr){ var a = R().arch(k), z = a && ES.ZIELE && ES.ZIELE.archetypen && ES.ZIELE.archetypen[a.id]; if(z){ k.ziel = z.ziel; k.bedr = z.bedrohung; R().save(); rerender(); return; } }
      if(/^a\.|^talente\./.test(p || "")){
        [["ges", R().gcur], ["hof", R().hcur]].forEach(function(f){ var el = app.querySelector('[data-p="' + f[0] + '"]'); if(el && (k[f[0]] == null || k[f[0]] === "")) el.value = f[1](k); });
      }
    };
  }
  function renderBogen(app, rest){
    var id = rest && rest[0], D = R().load(); R().setD(D);
    var k = D.filter(function(x){ return x.id === id; })[0];
    if(!k){ location.hash = "es/reisende"; return; }
    app.className = "page esbp";
    app.innerHTML = '<div class="rk"><a class="chip" href="#es/reisende">‹ Reisende</a><button class="chip f" id="bPdf">Als ausfüllbares PDF</button><button class="chip" id="bPrint">Drucken</button><button class="chip" id="bDel">Reisende(n) löschen</button></div>' + sheet(k);
    bind(app, k, function(){ renderBogen(app, rest); });
    app.onclick = null;
    app.querySelector("#bPrint").onclick = function(){ window.print(); };
    app.querySelector("#bDel").onclick = function(){ if(confirm("Diese(n) Reisende(n) löschen?")){ D = D.filter(function(x){ return x.id !== id; }); R().setD(D); R().save(); location.hash = "es/reisende"; } };
    app.querySelector("#bPdf").onclick = function(){ if(window.FillPDF) FillPDF.make(document.getElementById("esSheet"), {name: "The Electric State – " + R().nm(k), knopf: this, bg: "#eef4f4"}); };
  }

  /* ---------- Leerer Bogen / Einlesen ---------- */
  function offscreen(html){ var d = document.createElement("div"); d.style.cssText = "position:absolute;left:-9999px;top:0"; d.innerHTML = html; document.body.appendChild(d); return d; }
  ES.bogenLeer = function(){
    if(!window.FillPDF) return;
    var D = R().load(); R().setD([]);
    var d = offscreen(sheet(R().neu())); R().setD(D);
    FillPDF.make(d.querySelector("#esSheet"), {name: "The Electric State – Leerer Bogen", bg: "#eef4f4"}).then(function(){ d.remove(); }, function(){ d.remove(); });
  };
  ES.bogenImport = function(file, app){
    var lib = window.PDFLib ? Promise.resolve() : new Promise(function(res, rej){ var s = document.createElement("script"); s.src = "../shared/lib/pdf-lib.min.js"; s.onload = res; s.onerror = rej; document.head.appendChild(s); });
    lib.then(function(){ return file.arrayBuffer(); }).then(function(buf){ return PDFLib.PDFDocument.load(buf); }).then(function(doc){
      var form = doc.getForm(), D = R().load(), k = R().neu(), d, n = 0, ok = 0;
      R().setD([]); d = offscreen(sheet(k)); R().setD(D);
      d.querySelectorAll("input,textarea").forEach(function(e){
        if(e.type === "file" || e.type === "hidden" || !(e.offsetWidth || e.offsetHeight)) return;
        n++;
        try{
          var v = form.getTextField("t" + n).getText() || ""; ok++;
          if(e.dataset.p) R().set(k, e.dataset.p, v);
          else if(e.dataset.sp){ var q = e.dataset.sp.split("."), i = +q[0]; k.sp[i][q[1]] = v; }
        }catch(x){}
      });
      d.remove();
      if(!ok){ alert("Das ist kein Bogen aus diesem Tool (keine passenden Felder gefunden)."); return; }
      ["ges", "hof"].forEach(function(f){ if(String(k[f]).trim() === "") k[f] = null; });
      D.push(k); R().setD(D); R().save(); location.hash = "es/bogen/" + k.id;
    }).catch(function(){ alert("Die Datei konnte nicht gelesen werden."); });
  };

  /* ---------- Fahrzeugbogen ---------- */
  function fsheet(f){
    var fi = function(lbl, p, cls){ return line(lbl, '<input class="bf" data-f="' + p + '" value="' + esc(R().get(f, p)) + '">', cls); };
    var fl = function(path, n){ var h = ""; for(var i = 0; i < n; i++) h += '<input class="bf ln" data-f="' + path + '.' + i + '" value="' + esc(R().get(f, path + "." + i)) + '">'; return h; };
    var box = function(l, p){ return '<label class="eat"><span>' + l + '</span><input class="bf num" data-f="' + p + '" value="' + esc(f[p]) + '"></label>'; };
    return '<div class="esb-w fz" id="esFz">' + tape("t2", "p2") + tape("t2", "p4") +
      '<div class="esb"><div class="eb-h">' + LOGO + '<div class="eb-hf"><div class="eb-two">' + fi("Fahrzeugtyp", "typ") + fi("Modell", "modell") + '</div><div class="eb-two">' + fi("Passagiere", "pass") + fi("Treibstoff", "tank") + '</div>' +
        '<label class="el ta"><span>Beschreibung</span><textarea class="bf ln2" data-f="desc">' + esc(f.desc) + '</textarea></label></div></div>' +
      '<div class="eb-m one"><div class="eb-sec"><div class="eb-at">' + box("Manövrierbarkeit", "man") + box("Tempo", "tempo") + box("Rumpf", "rumpf") + box("Panzerung", "panz") + '</div>' +
        '<div class="eb-two tp2"><div><div class="el"><span>Eigenschaften</span></div>' + fl("eig", 4) + '</div><div><div class="el"><span>Ausrüstung</span></div>' + fl("ausr", 4) + '</div></div></div></div></div></div>';
  }
  function renderFahrzeug(app){
    var f = R().fzLoad();
    app.className = "page esbp";
    app.innerHTML = '<div class="rk"><a class="chip" href="#es/reisende">‹ Reisende</a><button class="chip f" id="fPdf">Als ausfüllbares PDF</button><button class="chip" id="fPrint">Drucken</button><button class="chip" id="fReset">Zurücksetzen</button></div>' + fsheet(f);
    app.onclick = null;
    function upd(e){
      var p = e.target.dataset.f; if(!p) return;
      R().set(f, p, e.target.value);
      if(p === "rumpf") f.rcur = null;
      R().fzSave(f);
    }
    app.oninput = upd; app.onchange = upd;
    app.querySelector("#fPrint").onclick = function(){ window.print(); };
    app.querySelector("#fReset").onclick = function(){ if(confirm("Fahrzeug auf die Werte aus „Into the Dust“ zurücksetzen?")){ try{ localStorage.removeItem("es_fahrzeug_v1"); }catch(e){} renderFahrzeug(app); } };
    app.querySelector("#fPdf").onclick = function(){ if(window.FillPDF) FillPDF.make(document.getElementById("esFz"), {name: "The Electric State – Fahrzeug", knopf: this, bg: "#eef4f4"}); };
  }
  ES.renderBogen = renderBogen;
  ES.renderFahrzeug = renderFahrzeug;
})();
