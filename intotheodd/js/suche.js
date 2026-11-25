/* Volltextsuche (Taste „f“) und Esc-Navigation. Die Treffer entstehen aus den gerenderten Seiten: jede Karte, Tabelle und jeder Abschnitt ist ein Treffer. */
(function(){
  var AREA = [["regeln","Regeln",RSUB,viewRegeln],["arcana","Arcana",ASUB,viewArcana],["sl","Spielleitung",SSUB,viewSl],["abenteuer","Abenteuer",BSUB,viewAb],["oddpendium","Oddpendium",OSUB,viewOdd],["zusatz","Zusatzheft",ZSUB,viewZusatz]];
  GSuche.add(function(add){
    AREA.forEach(function(a){
      a[2].forEach(function(s){
        var box = document.createElement("div");
        try{ box.innerHTML = String(a[3](s[0])).replace(/<\/(span|b|i|li|p|div|h\d|em|a)>/g, "$& "); }catch(e){ return; }
        var hash = "#" + a[0] + "/" + s[0], bereich = a[1] + " › " + s[1];
        box.querySelectorAll(".sub").forEach(function(x){ x.remove(); });
        var n = 0;
        box.querySelectorAll(".rm,.df,.tb,.mo,.exb,.wb,.ort,.arc,.card").forEach(function(c){
          if(c.parentElement && c.parentElement.closest(".rm,.df,.tb,.mo")) return;
          var h = c.querySelector("h4,h3,b"), hc = h && h.cloneNode(true); if(hc) [].forEach.call(hc.querySelectorAll(".rn,.pg,.dd"), function(x){ x.remove(); }); var t = (hc ? hc.textContent : "").replace(/\s+/g, " ").trim();
          add(t || s[1], bereich, hash, c.textContent.replace(/\s+/g, " "));
          n++;
        });
        var rest = box.cloneNode(true);
        rest.querySelectorAll(".rm,.df,.tb,.mo,.exb,.wb,.ort,.arc,.card").forEach(function(c){ c.remove(); });
        var txt = rest.textContent.replace(/\s+/g, " ").trim();
        if(txt) add(s[1], bereich, hash, txt);
      });
    });
  });
  window.sucheOpen = GSuche.open;

  /* Esc: eine Ebene zurück (Unterseite → Bereichsanfang → Startseite), wenn kein Fenster offen ist */
  document.addEventListener("keydown", function(e){
    if(e.key !== "Escape" || e.defaultPrevented) return;
    var t = e.target || {}; if(/INPUT|TEXTAREA|SELECT/.test(t.tagName || "") || t.isContentEditable) return;
    if(document.querySelector(".modal,.gal,.gs-ov,.mm-panel.on,#bvOverlay.show,.bv-open,.zg-fs")) return;
    var v = document.getElementById("bvOverlay") || document.getElementById("bookViewer"); if(v && !v.hidden && v.style.display !== "none") return;
    var r = route(), s = sub();
    if(r === "start") return;
    if(s && s !== AREA.filter(function(a){ return a[0] === r; }).map(function(a){ return a[2][0][0]; })[0]){ go(r); }
    else go("start");
  });
})();
