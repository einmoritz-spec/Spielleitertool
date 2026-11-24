/* HEART – Charakterbogen: der Original-Bogen (deutsch beschriftet) zum Ausfüllen im Tool.
   #bogen[/<id>] · Daten in ST.boegen = [{id, v:{feld:wert}, bild}] · Felder: HT_BOGEN (js/data/bogen-layout.js)
   „PDF“ erzeugt aus heart/bogen/charakterbogen.pdf ein ausfüllbares PDF (echte Formularfelder, bleibt bearbeitbar);
   „PDF laden“ liest so ein PDF – auch nach Änderungen in einem PDF-Programm – wieder ein. Alles lokal (pdf-lib). */
(function(){
var L = HT_BOGEN, PW = L.W, PH = L.H, TINTE = [0.1, 0.08, 0.06];
function boegen(){ if(!ST.boegen) ST.boegen = []; return ST.boegen; }
function finde(id){ return boegen().filter(function(b){ return b.id === id; })[0]; }
function neuId(){ return "b" + Date.now().toString(36) + Math.floor(Math.random() * 1296).toString(36); }
function titel(b){ return (b.v && b.v.name) || "Ohne Namen"; }
function pc(v, g){ return (v / g * 100).toFixed(3) + "%"; }
function cq(pt){ return (pt / PW * 100).toFixed(3) + "cqw"; }

/* ---------- Werte ---------- */
window.bgWert = function(id, k, el){
  var b = finde(id); if(!b) return; var v = el.value;
  if(v) b.v[k] = v; else delete b.v[k];
  save(); passen(el);
  if(k === "name"){ var c = document.querySelector('.bgch a.on'); if(c) c.textContent = titel(b); }
};
window.bgKreuz = function(id, k, el){
  var b = finde(id); if(!b) return;
  if(b.v[k]) delete b.v[k]; else b.v[k] = true;
  el.classList.toggle("an", !!b.v[k]); save();
};
window.bgNeu = function(){ var b = {id:neuId(), v:{}}; boegen().push(b); save(); go("bogen/" + b.id); };
window.bgWeg = function(id){
  var b = finde(id); if(!b || !confirm("Bogen „" + titel(b) + "“ löschen?")) return;
  ST.boegen = boegen().filter(function(x){ return x.id !== id; }); save(); go("bogen");
};
/* Bild im Feld „So sehe ich aus“ – verkleinert gespeichert */
window.bgBildWahl = function(id){
  var inp = document.createElement("input"); inp.type = "file"; inp.accept = "image/*";
  inp.onchange = function(){
    var f = inp.files[0]; if(!f) return; var r = new FileReader();
    r.onload = function(){
      var img = new Image();
      img.onload = function(){
        var s = Math.min(1, 900 / Math.max(img.width, img.height)), c = document.createElement("canvas");
        c.width = Math.round(img.width * s); c.height = Math.round(img.height * s);
        var g = c.getContext("2d"); g.fillStyle = "#fff"; g.fillRect(0, 0, c.width, c.height); g.drawImage(img, 0, 0, c.width, c.height);
        var b = finde(id); if(!b) return; b.bild = c.toDataURL("image/jpeg", 0.85); save(); render();
      };
      img.src = r.result;
    };
    r.readAsDataURL(f);
  };
  inp.click();
};
window.bgBildWeg = function(id){ var b = finde(id); if(b){ delete b.bild; save(); render(); } };

/* Schrift verkleinern, bis der Text ins Feld passt (wie im PDF) */
function passen(el){
  var basis = +el.getAttribute("data-fs"), min = basis * 0.55, w = el.parentNode.clientWidth / PW, fs = basis;
  el.style.fontSize = cq(fs);
  if(el.tagName === "TEXTAREA"){ while(fs > min && el.scrollHeight > el.clientHeight + 1){ fs -= 0.25; el.style.fontSize = cq(fs); } }
  else { while(fs > min && el.scrollWidth > el.clientWidth + 1){ fs -= 0.25; el.style.fontSize = cq(fs); } }
}
window.bgPassenAlle = function(){ document.querySelectorAll(".bgs input, .bgs textarea").forEach(passen); };

/* ---------- Ansicht ---------- */
function vorschlaege(){
  var kl = (window.HT_KLASSEN || []).map(function(k){ return k[1]; });
  var ber = [];
  try{ HT_NACH.charaktere.subs.forEach(function(s){ if(s.id === "berufungen") s.secs.forEach(function(x){ ber.push(x.t); }); }); }catch(e){}
  try{ HT_NACH.charaktere.subs.forEach(function(s){ (s.secs || []).forEach(function(x){ if(/^Berufung: /.test(x.t || "")) ber.push(x.t.replace(/^Berufung: /, "")); }); }); }catch(e){}
  var o = function(l){ return l.filter(function(x, i){ return x && l.indexOf(x) === i; }).map(function(x){ return '<option value="' + esc(x) + '">'; }).join(""); };
  return '<datalist id="bgKl">' + o(kl) + '</datalist><datalist id="bgBer">' + o(ber) + "</datalist>";
}
function feld(b, f){
  var st = "left:" + pc(f.x, PW) + ";top:" + pc(f.y, PH) + ";width:" + pc(f.w, PW) + ";height:" + pc(f.h, PH);
  var q = "'" + b.id + "','" + f.id + "'";
  if(f.t === "x") return '<i class="bgx' + (b.v[f.id] ? " an" : "") + '" style="' + st + '" onclick="bgKreuz(' + q + ',this)"></i>';
  if(f.id === "aussehen" && b.bild) return '<div class="bgbild" style="' + st + '"><img src="' + b.bild + '" alt=""><s onclick="bgBildWeg(\'' + b.id + '\')" title="Bild entfernen">×</s></div>';
  var at = ' style="' + st + ";font-size:" + cq(f.fs) + '" data-fs="' + f.fs + '" oninput="bgWert(' + q + ',this)" spellcheck="false"';
  var extra = f.id === "aussehen" ? '<b class="bgcam" style="left:' + pc(f.x + f.w - 16, PW) + ";top:" + pc(f.y - 22, PH) + '" onclick="bgBildWahl(\'' + b.id + '\')" title="Bild einfügen"></b>' : "";
  if(f.t === "m") return '<textarea class="bgf"' + at + ">" + esc(b.v[f.id] || "") + "</textarea>" + extra;
  var dl = f.id === "klasse" ? ' list="bgKl"' : f.id === "berufung" ? ' list="bgBer"' : "";
  return '<input class="bgf' + (f.fs < 10 ? " kl" : "") + '"' + dl + at + ' value="' + esc(b.v[f.id] || "") + '">';
}
function seite(b, n){
  return '<div class="bgs" style="background-image:url(img/bogen/seite-' + n + '.webp)">' +
    L.felder.filter(function(f){ return f.s === n; }).map(function(f){ return feld(b, f); }).join("") + "</div>";
}
function view(a){
  var b = finde(a[0]) || boegen()[0];
  if(!b){ b = {id:neuId(), v:{}}; boegen().push(b); save(); }
  var chips = boegen().map(function(x){ return '<a class="' + (x.id === b.id ? "on" : "") + '" onclick="go(\'bogen/' + x.id + '\')">' + esc(titel(x)) + "</a>"; }).join("");
  return '<div class="bgw"><div class="bgbar"><div class="bgch">' + chips + '<a class="neu" onclick="bgNeu()">+ Neuer Bogen</a></div>' +
    '<div class="bga"><button onclick="bgPdf(\'' + b.id + '\',this)">PDF</button><button onclick="bgLaden()">PDF laden</button><button class="weg" onclick="bgWeg(\'' + b.id + '\')">Löschen</button></div></div>' +
    vorschlaege() + '<div class="bgseiten">' + seite(b, 1) + seite(b, 2) + "</div></div>";
}
VIEWS.bogen = view;
var altAfter = window.afterRender;
window.afterRender = function(){ if(altAfter) altAfter(); if(document.querySelector(".bgs")) requestAnimationFrame(bgPassenAlle); };
window.addEventListener("resize", function(){ if(document.querySelector(".bgs")) bgPassenAlle(); });

/* ---------- PDF ---------- */
var libP = null;
function js(src){ return new Promise(function(res, rej){ var s = document.createElement("script"); s.src = src; s.onload = res; s.onerror = function(){ rej(new Error(src + " fehlt")); }; document.head.appendChild(s); }); }
function lib(){
  if(libP) return libP;
  return libP = (window.PDFLib ? Promise.resolve() : js("../shared/lib/pdf-lib.min.js")).then(function(){ return window.fontkit ? 0 : js("../shared/lib/fontkit.umd.min.js"); });
}
function holen(u){ return fetch(u).then(function(r){ if(!r.ok) throw new Error(u + " fehlt"); return r.arrayBuffer(); }); }
function sauber(font, s){
  var o = ""; String(s || "").replace(/\r/g, "").split("").forEach(function(c){
    if(c === "\n"){ o += c; return; }
    try{ font.encodeText(c); o += c; }catch(e){ o += ({"→":"->","←":"<-","−":"-","…":"..."})[c] || "?"; }
  });
  return o;
}
/* Schriftgröße so wählen, dass der Text ins Feld passt */
function groesse(font, f, txt){
  var fs = f.fs, min = f.fs * 0.55, w = f.w - 2;
  if(f.t === "t"){ while(fs > min && font.widthOfTextAtSize(txt, fs) > w) fs -= 0.25; return fs; }
  function zeilen(sz){
    var n = 0;
    txt.split("\n").forEach(function(abs){
      var cur = ""; n++;
      abs.split(" ").forEach(function(wort){
        var t = cur ? cur + " " + wort : wort;
        if(font.widthOfTextAtSize(t, sz) <= w || !cur) cur = t; else { n++; cur = wort; }
      });
    });
    return n;
  }
  while(fs > min && zeilen(fs) * 1.2 * font.heightAtSize(fs) > f.h - 2) fs -= 0.25;
  return fs;
}
window.bgPdf = function(id, knopf){
  var b = finde(id); if(!b) return;
  var alt = knopf && knopf.textContent; if(knopf){ knopf.textContent = "PDF wird erstellt …"; knopf.disabled = true; }
  var fertig = function(){ if(knopf){ knopf.textContent = alt; knopf.disabled = false; } };
  lib().then(function(){
    return Promise.all([holen("bogen/charakterbogen.pdf"), holen("../assets/fonts/pdf/alegreya-latin-400-normal.ttf")]);
  }).then(function(x){
    var P = PDFLib;
    return P.PDFDocument.load(x[0]).then(function(doc){
      doc.registerFontkit(window.fontkit);
      return doc.embedFont(x[1], {subset:false, features:{liga:false, clig:false, dlig:false, hlig:false, calt:false, rlig:false}}).then(function(font){
        var form = doc.getForm(), seiten = doc.getPages(), ink = P.rgb(TINTE[0], TINTE[1], TINTE[2]);
        L.felder.forEach(function(f){
          if(f.id === "aussehen" && b.bild) return;
          var r = {x:f.x, y:PH - f.y - f.h, width:f.w, height:f.h, borderWidth:0, borderColor:undefined, backgroundColor:undefined};
          var pg = seiten[f.s - 1];
          if(f.t === "x"){
            var c = form.createCheckBox(f.id); c.addToPage(pg, r);
            c.updateAppearances(function(){
              var w = f.w, h = f.h, d = 1.3, dick = 1.25;
              var an = P.drawLine({start:{x:d, y:d}, end:{x:w - d, y:h - d}, thickness:dick, color:ink}).concat(P.drawLine({start:{x:d, y:h - d}, end:{x:w - d, y:d}, thickness:dick, color:ink}));
              return {normal:{on:an, off:[]}, down:{on:an, off:[]}};
            });
            if(b.v[f.id]) c.check();
            return;
          }
          var t = form.createTextField(f.id), txt = sauber(font, b.v[f.id] || "");
          if(f.t === "m") t.enableMultiline();
          t.setText(f.t === "m" ? txt : txt.replace(/\n/g, " "));
          t.addToPage(pg, Object.assign(r, {font:font, textColor:ink}));
          t.setFontSize(groesse(font, f, txt));
        });
        form.updateFieldAppearances(font);
        var bild = b.bild ? doc.embedJpg(b.bild).then(function(img){
          var f = L.felder.filter(function(z){ return z.id === "aussehen"; })[0], s = Math.min(f.w / img.width, f.h / img.height), w = img.width * s, h = img.height * s;
          seiten[1].drawImage(img, {x:f.x + (f.w - w) / 2, y:PH - f.y - f.h + (f.h - h) / 2, width:w, height:h});
        }) : Promise.resolve();
        return bild.then(function(){
          doc.setTitle("Heart – " + titel(b)); doc.setCreator("Spielleitertool");
          doc.getInfoDict().set(P.PDFName.of("HTCharakter"), P.PDFHexString.fromText(JSON.stringify({v:b.v, bild:b.bild || null})));
          return doc.save();
        });
      });
    });
  }).then(function(bytes){ fertig(); ausgeben(bytes, "Heart – " + titel(b).replace(/[\\/:*?"<>|]/g, "") + ".pdf"); },
    function(e){ fertig(); alert("Das PDF konnte nicht erstellt werden: " + (e && e.message || e)); });
};
function ausgeben(bytes, datei){
  var blob = new Blob([bytes], {type:"application/pdf"});
  var file = typeof File === "function" ? new File([blob], datei, {type:"application/pdf"}) : null;
  if(matchMedia("(pointer:coarse)").matches && file && navigator.canShare && navigator.canShare({files:[file]})){
    return navigator.share({files:[file], title:datei}).catch(function(){ laden(blob, datei); });
  }
  laden(blob, datei);
}
function laden(blob, datei){
  var a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = datei;
  document.body.appendChild(a); a.click(); setTimeout(function(){ URL.revokeObjectURL(a.href); a.remove(); }, 4000);
}
/* Ausgefülltes PDF wieder einlesen: Feldwerte haben Vorrang (falls im PDF-Programm geändert) */
window.bgLaden = function(){
  var inp = document.createElement("input"); inp.type = "file"; inp.accept = "application/pdf,.pdf";
  inp.onchange = function(){
    var f = inp.files[0]; if(!f) return;
    Promise.all([lib(), f.arrayBuffer()]).then(function(x){ return PDFLib.PDFDocument.load(x[1]); }).then(function(doc){
      var P = PDFLib, b = {id:neuId(), v:{}}, form = doc.getForm();
      try{ var j = doc.getInfoDict().lookup(P.PDFName.of("HTCharakter")); if(j){ var d = JSON.parse(j.decodeText()); b.v = d.v || {}; if(d.bild) b.bild = d.bild; } }catch(e){}
      var treffer = 0;
      L.felder.forEach(function(z){
        try{
          if(z.t === "x"){ var c = form.getCheckBox(z.id); treffer++; if(c.isChecked()) b.v[z.id] = true; else delete b.v[z.id]; }
          else { var t = form.getTextField(z.id); treffer++; var v = t.getText() || ""; if(v) b.v[z.id] = v; else delete b.v[z.id]; }
        }catch(e){}
      });
      if(!treffer){ alert("In diesem PDF wurde kein Heart-Charakterbogen gefunden."); return; }
      boegen().push(b); save(); go("bogen/" + b.id);
    }).catch(function(e){ alert("Das PDF konnte nicht gelesen werden: " + (e && e.message || e)); });
  };
  inp.click();
};
})();
