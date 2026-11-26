/* Einzelseiten (Charakterbogen, Spielfeld) als Link teilen */
window.teilen = function(seite, btn){
  var u = location.href.replace(/[#?].*$/, "").replace(/[^\/]*$/, "") + seite;
  var titel = /#c=/.test(seite) ? "Savage-Worlds-Charakter" : seite === "bogen.html" ? "Charakterbogen" : "Spielfeld";
  function ok(){ if(!btn) return; btn.classList.add("kopiert"); var t = btn.title; btn.title = "Link kopiert"; if(btn.id === "bgLink" || btn.id === "bgShare"){ var x = btn.textContent; btn.textContent = "Kopiert"; setTimeout(function(){ btn.textContent = x; }, 1600); } setTimeout(function(){ btn.classList.remove("kopiert"); btn.title = t; }, 1600); }
  function alt(){ var ta = document.createElement("textarea"); ta.value = u; ta.style.position = "fixed"; ta.style.opacity = "0"; document.body.appendChild(ta); ta.select(); try{ document.execCommand("copy"); }catch(e){} ta.remove(); ok(); }
  if(navigator.share && /Mobi|Android|iPhone|iPad/.test(navigator.userAgent)){ navigator.share({title: titel, url: u}).catch(function(){}); return; }
  if(navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(u).then(ok, alt); else alt();
};
