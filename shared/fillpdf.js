/* ============================================================
   Ausfüllbares PDF aus einem Bogen im Tool (Spire, Pico, Wildsea …)
     FillPDF.make(element, optionen) → lädt ein PDF herunter (am Handy: Teilen-Menü)
   Das Aussehen des Bogens wird als Bild hinterlegt (ohne Einträge), darüber liegen
   echte Formularfelder an denselben Stellen: Textfelder für alle Eingaben, Kästchen
   für alle Markierungen. Die aktuellen Werte sind eingetragen; das PDF bleibt in
   jedem PDF-Programm ausfüllbar und lässt sich ganz normal drucken.
   Optionen:
     name    Dateiname (ohne .pdf)
     marks   [[Selektor, "an-Klassen", "x"|"punkt"], …] → Kästchen; angekreuzt, wenn eine der Klassen gesetzt ist
     texts   [[Selektor, "Klassen"], …]      → Textfeld mit dem Text des Elements (Klassen werden fürs Bild entfernt)
     before / after   Funktionen vor bzw. nach der Aufnahme (z. B. Zoom zurücksetzen)
   Elemente mit data-pdftx werden ebenfalls Textfelder; .noprint wird nicht abgebildet.
   Alles läuft lokal im Browser (shared/lib/pdf-lib.min.js, shared/lib/modern-screenshot.min.js).
   ============================================================ */
var FillPDF = (function(){
  var ROOT = new URL("../", (document.currentScript && document.currentScript.src) || location.href).href;
  var libP = null;
  function js(src){ return new Promise(function(res, rej){ var s = document.createElement("script"); s.src = ROOT + src; s.onload = res; s.onerror = function(){ rej(new Error(src + " fehlt")); }; document.head.appendChild(s); }); }
  function lib(){
    if(libP) return libP;
    return libP = (window.PDFLib ? Promise.resolve() : js("shared/lib/pdf-lib.min.js")).then(function(){ return window.modernScreenshot ? 0 : js("shared/lib/modern-screenshot.min.js"); });
  }
  var css = document.createElement("style");
  css.textContent = ".pdfmode input,.pdfmode textarea,.pdfmode select,.pdfmode [data-pdftx],.pdfmode [data-pdftx] *,.pdfmode .pdftx,.pdfmode .pdftx *{color:transparent!important;-webkit-text-fill-color:transparent!important;text-shadow:none!important}" +
    ".pdfmode input::placeholder,.pdfmode textarea::placeholder{color:transparent!important;-webkit-text-fill-color:transparent!important}.pdfmode .noprint{visibility:hidden!important}";
  document.head.appendChild(css);

  var ERSATZ = {"−":"-", "‑":"-", "→":"->", "←":"<-", "×":"x", "✓":"x", "★":"*", "•":"•", " ":" ", " ":" ", " ":" "};
  function sauber(font, s){
    s = String(s == null ? "" : s);
    try{ font.encodeText(s); return s; }catch(e){}
    var o = "";
    for(var i = 0; i < s.length; i++){ var c = s[i]; if(ERSATZ[c] != null) c = ERSATZ[c]; try{ font.encodeText(c); o += c; }catch(e2){ o += c === "\n" ? "\n" : "?"; } }
    return o;
  }
  function sichtbar(el){ return !!(el.offsetWidth || el.offsetHeight) && !el.closest(".noprint") && getComputedStyle(el).visibility !== "hidden"; }
  function hatKlasse(el, kl){ return kl.split(/\s+/).filter(Boolean).some(function(k){ return el.classList.contains(k); }); }

  function make(el, o){
    o = o || {};
    if(!el) return Promise.resolve();
    var knopf = o.knopf, alt = knopf && knopf.textContent;
    if(knopf){ knopf.textContent = "PDF wird erstellt …"; knopf.disabled = true; }
    var fertig = function(){ if(knopf){ knopf.textContent = alt; knopf.disabled = false; } };
    return lib().then(function(){ return document.fonts ? document.fonts.ready : 0; }).then(function(){
      if(o.before) o.before();
      var base = el.getBoundingClientRect(), W = el.offsetWidth, H = el.offsetHeight, k = W / base.width;
      var rel = function(e){ var r = e.getBoundingClientRect(); return {x:(r.left - base.left) * k, y:(r.top - base.top) * k, w:r.width * k, h:r.height * k}; };
      var F = [], weg = [];
      el.querySelectorAll("input,textarea").forEach(function(e){
        if(e.type === "checkbox"){ if(sichtbar(e)) F.push({t:"cb", r:rel(e), an:e.checked}); return; }
        if(e.type === "file" || e.type === "hidden" || !sichtbar(e)) return;
        var cs = getComputedStyle(e);
        F.push({t:"tx", r:rel(e), v:e.value, multi:e.tagName === "TEXTAREA", fs:parseFloat(cs.fontSize) * k, al:cs.textAlign});
      });
      el.querySelectorAll("[data-pdftx]").forEach(function(e){
        if(!sichtbar(e)) return; var cs = getComputedStyle(e), r = rel(e), fs = parseFloat(cs.fontSize) * k;
        F.push({t:"tx", r:r, v:e.innerText.trim(), multi:r.h > fs * 2.2, fs:fs, al:cs.textAlign === "center" || cs.justifyContent === "center" ? "center" : "left"});
      });
      (o.texts || []).forEach(function(m){
        el.querySelectorAll(m[0]).forEach(function(e){
          if(!sichtbar(e)) return; var cs = getComputedStyle(e);
          F.push({t:"tx", r:rel(e), v:e.innerText.trim(), multi:false, fs:parseFloat(cs.fontSize) * k, al:"center"});
          var kl = (m[1] || "").split(/\s+/).filter(function(x){ return x && e.classList.contains(x); });
          e.classList.add("pdftx"); weg.push([e, kl.concat([]), "pdftx"]); kl.forEach(function(x){ e.classList.remove(x); });
        });
      });
      (o.marks || []).forEach(function(m){
        el.querySelectorAll(m[0]).forEach(function(e){
          if(!sichtbar(e)) return;
          F.push({t:"cb", r:rel(e), an:hatKlasse(e, m[1]), stil:m[2]});
          var kl = m[1].split(/\s+/).filter(function(x){ return x && e.classList.contains(x); });
          if(kl.length){ weg.push([e, kl]); kl.forEach(function(x){ e.classList.remove(x); }); }
        });
      });
      el.classList.add("pdfmode");
      var zurueck = function(){
        el.classList.remove("pdfmode");
        weg.forEach(function(w){ w[1].forEach(function(x){ w[0].classList.add(x); }); if(w[2]) w[0].classList.remove(w[2]); });
        if(o.after) o.after();
      };
      return modernScreenshot.domToJpeg(el, {scale:o.scale || 2.5, quality:.9, width:W, height:H, backgroundColor:o.bg || "#ffffff"}).then(function(url){
        zurueck(); return bauen(url, W, H, F, o);
      }, function(e){ zurueck(); throw e; });
    }).then(function(bytes){ fertig(); return ausgeben(bytes, (o.name || "Charakterbogen") + ".pdf"); }, function(e){ fertig(); alert("Das PDF konnte nicht erstellt werden: " + (e && e.message || e)); });
  }

  function bauen(url, W, H, F, o){
    var L = PDFLib, pt = .75;
    return L.PDFDocument.create().then(function(doc){
      doc.setTitle(o.name || "Charakterbogen"); doc.setCreator("Spielleitertool");
      return Promise.all([fetch(url).then(function(r){ return r.arrayBuffer(); }), doc.embedFont(L.StandardFonts.Helvetica)]).then(function(x){
        return doc.embedJpg(x[0]).then(function(img){
          var font = x[1], pw = W * pt, ph = H * pt, page = doc.addPage([pw, ph]), form = doc.getForm(), n = 0;
          page.drawImage(img, {x:0, y:0, width:pw, height:ph});
          F.forEach(function(f){
            var r = {x:f.r.x * pt, y:ph - (f.r.y + f.r.h) * pt, width:Math.max(4, f.r.w * pt), height:Math.max(4, f.r.h * pt), borderWidth:0, backgroundColor:undefined, borderColor:undefined};
            n++;
            if(f.t === "cb"){
              var c = form.createCheckBox("k" + n); c.addToPage(page, r);
              var w = r.width, h = r.height;
              c.updateAppearances(function(){
                var m = Math.min(w, h), d = m * .22, col = L.rgb(.07, .07, .07), x0 = (w - m) / 2 + d, y0 = (h - m) / 2 + d, x1 = (w + m) / 2 - d, y1 = (h + m) / 2 - d;
                var an = f.stil === "punkt" ? L.drawEllipse({x:w / 2, y:h / 2, xScale:m * .3, yScale:m * .3, color:col, borderWidth:0})
                  : L.drawLine({start:{x:x0, y:y0}, end:{x:x1, y:y1}, thickness:Math.max(1, m * .12), color:col}).concat(L.drawLine({start:{x:x0, y:y1}, end:{x:x1, y:y0}, thickness:Math.max(1, m * .12), color:col}));
                return {normal:{on:an, off:[]}, down:{on:an, off:[]}};
              });
              if(f.an) c.check(); return;
            }
            var t = form.createTextField("t" + n);
            if(f.multi) t.enableMultiline();
            if(f.al === "center") t.setAlignment(L.TextAlignment.Center); else if(f.al === "right" || f.al === "end") t.setAlignment(L.TextAlignment.Right);
            t.setText(sauber(font, f.v));
            t.addToPage(page, Object.assign(r, {font:font, textColor:L.rgb(.07, .07, .07)}));
            t.setFontSize(Math.max(6, Math.min(f.multi ? 14 : 18, (f.fs || 12) * pt)));
          });
          form.updateFieldAppearances(font);
          return doc.save();
        });
      });
    });
  }

  function ausgeben(bytes, datei){
    var blob = new Blob([bytes], {type:"application/pdf"});
    var file = typeof File === "function" ? new File([blob], datei, {type:"application/pdf"}) : null;
    var mobil = matchMedia("(pointer:coarse)").matches;
    if(mobil && file && navigator.canShare && navigator.canShare({files:[file]})){
      return navigator.share({files:[file], title:datei}).catch(function(){ laden(blob, datei); });
    }
    laden(blob, datei);
  }
  function laden(blob, datei){
    var a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = datei;
    document.body.appendChild(a); a.click(); setTimeout(function(){ URL.revokeObjectURL(a.href); a.remove(); }, 4000);
  }
  return {make:make, lib:lib, ausgeben:ausgeben, sauber:sauber};
})();
