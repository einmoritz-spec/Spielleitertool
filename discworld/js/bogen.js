/* Discworld – Gruppenakte und Charakterbögen (Buch S. 218–219), originalgetreu, als ausfüllbares PDF
   Hintergründe: img/bogen/seite1.jpg (Gruppenakte + 1 Charakter), seite2.jpg (2 Charaktere), je 612 × 792 pt.
   Felder liegen in pt-Koordinaten auf den Linien des Originals. */
(function(){
  var KEY = "dw_bogen_v1", D;
  function laden(){ try{ D = JSON.parse(localStorage.getItem(KEY)) || {}; }catch(e){ D = {}; } }
  function sichern(){ try{ localStorage.setItem(KEY, JSON.stringify(D)); }catch(e){} }
  laden();

  /* Felder: [schlüssel, x, y (Linie), breite, art] – Textfelder sitzen 14 pt über der Linie */
  function sc(i, B){
    var p = "c" + i + ".", L = [];
    L.push([p + "folgen0", 128, 61 + B, 368]);
    [76, 90.5, 104.5].forEach(function(y, k){ L.push([p + "folgen" + (k + 1), 52, y + B, 444]); });
    L.push([p + "name", 128, 139 + B, 282]);
    L.push([p + "pron", 360, 157 + B, 44, "mitte"]);
    L.push([p + "org", 128, 175 + B, 282]);
    L.push([p + "hg0", 128, 202.5 + B, 282]); L.push([p + "hg1", 128, 216.5 + B, 282]);
    L.push([p + "nische", 128, 244 + B, 282]);
    [272.5, 286.5, 301].forEach(function(y, k){ L.push([p + "mar" + k, 128, y + B, 282]); });
    L.push([p + "kern", 128, 335 + B, 282]);
    L.push([p + "glueck", 504, 106 + B, 30, "glueck"]);
    L.push([p + "bild", 429, 166 + B, 131, "bild", 172]);
    return L;
  }
  var GR = [["g.name", 52, 84, 245], ["g.org", 52, 140, 245],
    ["g.ziel0", 52, 195, 509], ["g.ziel1", 52, 216.5, 509], ["g.ziel2", 52, 237.5, 509],
    ["g.verg0", 52, 295, 245], ["g.verg1", 52, 314, 245], ["g.verg2", 52, 335, 245],
    ["g.gegen0", 316, 295, 245], ["g.gegen1", 316, 314, 245], ["g.gegen2", 316, 335, 245]];
  var SEITEN = [{bg:"img/bogen/seite1.jpg", f:GR.concat(sc(0, 405.9))}, {bg:"img/bogen/seite2.jpg", f:sc(1, 0).concat(sc(2, 405.9))}];

  function pc(v, ges){ return (v / ges * 100).toFixed(3) + "%"; }
  function feld(f){
    var k = f[0], v = D[k] || "", art = f[4] || "";
    if(art === "bild"){
      var st = "left:" + pc(f[1], 612) + ";top:" + pc(f[2], 792) + ";width:" + pc(f[3], 612) + ";height:" + pc(f[5], 792);
      return '<label class="bf-bild' + (v ? " voll" : "") + '" style="' + st + '" title="Bild wählen">' + (v ? '<img src="' + v + '" alt=""><button class="weg noprint" onclick="event.preventDefault();dwBild(\'' + k + '\',null)" title="Bild entfernen">×</button>' : "") +
        '<input type="file" accept="image/*" onchange="dwBild(\'' + k + '\',this.files[0])"></label>';
    }
    var h = art === "glueck" ? 24 : 14, st2 = "left:" + pc(f[1], 612) + ";top:" + pc(f[2] - h, 792) + ";width:" + pc(f[3], 612) + ";height:" + pc(h, 792);
    return '<input class="bf' + (art ? " " + art : "") + '" style="' + st2 + '" value="' + esc(v) + '" data-k="' + k + '" oninput="dwSetze(this)" autocomplete="off" spellcheck="false">';
  }
  window.dwSetze = function(el){ D[el.dataset.k] = el.value; sichern(); };
  window.dwBild = function(k, file){
    if(!file){ delete D[k]; sichern(); render(); return; }
    var r = new FileReader();
    r.onload = function(){ var im = new Image(); im.onload = function(){
      var s = Math.min(1, 700 / Math.max(im.width, im.height)), c = document.createElement("canvas");
      c.width = Math.round(im.width * s); c.height = Math.round(im.height * s); c.getContext("2d").drawImage(im, 0, 0, c.width, c.height);
      D[k] = c.toDataURL("image/jpeg", .85); sichern(); render(); }; im.src = r.result; };
    r.readAsDataURL(file);
  };
  window.dwLeeren = function(){ if(!confirm("Alle Einträge auf den Bögen löschen?")) return; D = {}; sichern(); render(); };

  window.viewBogen = function(B, gi){
    return '<div class="bogenwrap"><div class="bogenleiste"><button onclick="dwLeeren()">Leeren</button><button onclick="dwLink(this)" title="Link mit allen Einträgen (ohne Bilder) kopieren">Link teilen</button><button onclick="dwJsonOut()">Als Datei sichern</button><label class="bogenbtn">Datei laden<input type="file" accept=".json,application/json" hidden onchange="dwJsonIn(this)"></label><button class="haupt" onclick="dwPdf(this)">Als PDF</button></div><div class="boegen">' +
      SEITEN.map(function(S){ return '<div class="dwb"><img class="bg" src="' + S.bg + '" alt="">' + S.f.map(feld).join("") + "</div>"; }).join("") + "</div></div>";
  };


  /* ---------- Teilen (Link) und Datei (JSON) ---------- */
  function b64u(buf){ var s = "", a = new Uint8Array(buf); for(var i = 0; i < a.length; i++) s += String.fromCharCode(a[i]); return btoa(s).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, ""); }
  function ub64(t){ t = t.replace(/-/g, "+").replace(/_/g, "/"); while(t.length % 4) t += "="; var b = atob(t), a = new Uint8Array(b.length); for(var i = 0; i < b.length; i++) a[i] = b.charCodeAt(i); return a; }
  function ohneBilder(){ var o = {}; Object.keys(D).forEach(function(k){ if(!/\.bild$/.test(k) && D[k]) o[k] = D[k]; }); return o; }
  function pack(){
    var txt = JSON.stringify(ohneBilder());
    if(!window.CompressionStream) return Promise.resolve("k" + b64u(new TextEncoder().encode(txt)));
    return new Response(new Blob([txt]).stream().pipeThrough(new CompressionStream("deflate-raw"))).arrayBuffer().then(function(b){ return "d" + b64u(b); });
  }
  function entpack(t){
    var a = ub64(t.slice(1));
    var p = t[0] === "k" ? Promise.resolve(new TextDecoder().decode(a)) : new Response(new Blob([a]).stream().pipeThrough(new DecompressionStream("deflate-raw"))).text();
    return p.then(JSON.parse);
  }
  function hinweis(t){ var d = document.createElement("div"); d.className = "dw-toast"; d.textContent = t; document.body.appendChild(d); setTimeout(function(){ d.remove(); }, 2600); }
  window.dwLink = function(){
    pack().then(function(c){
      var u = location.href.split("#")[0] + "#bogen=" + c;
      if(navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(u).then(function(){ hinweis("Link kopiert – Bilder sind nicht enthalten."); }, function(){ prompt("Link kopieren:", u); });
      else prompt("Link kopieren:", u);
    });
  };
  window.dwJsonOut = function(){
    var n = (D["g.name"] || "Gruppenakte").trim() || "Gruppenakte";
    var a = document.createElement("a"); a.href = URL.createObjectURL(new Blob([JSON.stringify({spiel:"discworld-boegen", daten:D}, null, 1)], {type:"application/json"}));
    a.download = "Discworld – " + n + ".json"; a.click();
  };
  window.dwJsonIn = function(inp){
    var f = inp.files && inp.files[0]; if(!f) return;
    var r = new FileReader(); r.onload = function(){
      try{ var o = JSON.parse(r.result); var d = o && o.daten ? o.daten : o; if(!d || typeof d !== "object") throw 0;
        if(!confirm("Aktuelle Einträge durch die Datei ersetzen?")) return;
        D = d; sichern(); render(); hinweis("Datei geladen.");
      }catch(e){ alert("Diese Datei ist kein Discworld-Bogen."); }
    }; r.readAsText(f); inp.value = "";
  };
  (function(){
    var m = /^#bogen=([dk][A-Za-z0-9_-]+)$/.exec(location.hash); if(!m) return;
    entpack(m[1]).then(function(d){
      history.replaceState(null, "", location.href.split("#")[0] + "#k/charaktere/5");
      if(!Object.keys(D).length || confirm("Geteilten Bogen laden? Deine bisherigen Einträge werden ersetzt.")){ var bilder = {}; Object.keys(D).forEach(function(k){ if(/\.bild$/.test(k)) bilder[k] = D[k]; }); D = Object.assign(bilder, d); sichern(); }
      render();
    }, function(){});
  })();

  /* ---------- PDF ---------- */
  var ROOT = "../";
  function js(src){ return new Promise(function(res, rej){ var s = document.createElement("script"); s.src = ROOT + src; s.onload = res; s.onerror = function(){ rej(new Error(src + " fehlt")); }; document.head.appendChild(s); }); }
  function bytes(u){ return fetch(u).then(function(r){ return r.arrayBuffer(); }); }
  window.dwPdf = function(knopf){
    var alt = knopf.textContent; knopf.textContent = "PDF wird erstellt …"; knopf.disabled = true;
    (window.PDFLib ? Promise.resolve() : js("shared/lib/pdf-lib.min.js")).then(function(){ return window.fontkit ? 0 : js("shared/lib/fontkit.umd.min.js"); }).then(function(){
      var L = PDFLib;
      return L.PDFDocument.create().then(function(doc){
        doc.setTitle("Discworld – Gruppenakte und Charakterbögen"); doc.setCreator("Spielleitertool"); doc.registerFontkit(fontkit);
        return Promise.all([bytes(ROOT + "assets/fonts/pdf/cedarville-cursive-latin-400-normal.ttf"), bytes(SEITEN[0].bg), bytes(SEITEN[1].bg)]).then(function(x){
          return doc.embedFont(x[0], {subset:false}).then(function(font){
            return Promise.all([doc.embedJpg(x[1]), doc.embedJpg(x[2])]).then(function(bg){
              var form = doc.getForm(), tinte = L.rgb(.13, .09, .07), bilder = [];
              SEITEN.forEach(function(S, si){
                var page = doc.addPage([612, 792]); page.drawImage(bg[si], {x:0, y:0, width:612, height:792});
                S.f.forEach(function(f){
                  var k = f[0], v = D[k] || "", art = f[4] || "";
                  if(art === "bild"){ if(v) bilder.push([page, f, v]); return; }
                  var h = art === "glueck" ? 26 : 16, t = form.createTextField(k.replace(/\./g, "_"));
                  t.setText(v);
                  t.addToPage(page, {x:f[1], y:792 - f[2] + 1, width:f[3], height:h, font:font, textColor:tinte, borderWidth:0, backgroundColor:undefined, borderColor:undefined});
                  var fs = art === "glueck" ? 20 : 11; while(v && fs > 6 && font.widthOfTextAtSize(v, fs) > f[3] - 4) fs -= .5;
                  t.setFontSize(fs); if(art) t.setAlignment(L.TextAlignment.Center);
                });
              });
              form.updateFieldAppearances(font);
              return Promise.all(bilder.map(function(b){
                return doc.embedJpg(b[2]).then(function(im){
                  var f = b[1], bw = f[3] - 8, bh = f[5] - 8, s = Math.min(bw / im.width, bh / im.height), w = im.width * s, h = im.height * s;
                  b[0].drawImage(im, {x:f[1] + 4 + (bw - w) / 2, y:792 - f[2] - 4 - bh + (bh - h) / 2, width:w, height:h});
                });
              })).then(function(){ return doc.save(); });
            });
          });
        });
      });
    }).then(function(b){
      knopf.textContent = alt; knopf.disabled = false;
      var n = (D["g.name"] || "Gruppenakte").trim() || "Gruppenakte";
      if(window.FillPDF && FillPDF.ausgeben) FillPDF.ausgeben(b, "Discworld – " + n + ".pdf");
      else { var a = document.createElement("a"); a.href = URL.createObjectURL(new Blob([b], {type:"application/pdf"})); a.download = "Discworld – " + n + ".pdf"; a.click(); }
    }, function(e){ knopf.textContent = alt; knopf.disabled = false; alert("Das PDF konnte nicht erstellt werden: " + (e && e.message || e)); });
  };
})();

DW.reg("charaktere", [{id:"boegen", g:5, t:"Gruppenakte und Charakterbögen", p:218, ansicht:"viewBogen", b:[]}]);
