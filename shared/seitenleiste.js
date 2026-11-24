/* Taste „<“ (Windows-Tastatur, links neben Y): Seitenleiste in jedem System ein-/ausklappen.
   Klickt den vorhandenen Einklapp-Knopf des Systems; sonst die system-eigene Taste „b“. */
(function(){
  var SEL = ".pathrail-toggle,.zubtn,.orail-x,.fold-b,.rgz,.sbx[onclick],.col[aria-label*='Seitenleiste']";
  document.addEventListener("keydown", function(e){
    if(e.ctrlKey || e.metaKey || e.altKey || e.defaultPrevented) return;
    if(e.key !== "<" && e.code !== "IntlBackslash") return;
    if(e.code === "IntlBackslash" && e.shiftKey) return; /* „>“ */
    var t = e.target || {};
    if(t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName || "")) return;
    var b = [].slice.call(document.querySelectorAll(SEL)).filter(function(x){ return x.offsetParent !== null; })[0];
    e.preventDefault();
    if(b){ b.click(); return; }
    document.dispatchEvent(new KeyboardEvent("keydown", {key:"b", bubbles:true}));
  });
})();
