/* Geteilter Bogen-Link: Empfänger sehen nur Logo und Bogen samt Bogen-Werkzeugen – keine Reiter, Menüs oder Leisten.
   LK.init(fn): fn(hash) sagt, ob die Adresse ein Bogen ist. LK.an(): beim Übernehmen eines Links aufrufen. */
(function(){
  var KEY = "lk_clean", test = function(){ return false; };
  var st = document.createElement("style");
  st.textContent =
    "html.lk .topbar>*:not(.brand):not(.brandw){display:none!important}" +
    "html.lk .topbar .brand,html.lk .topbar .brandw{pointer-events:none;cursor:default}" +
    "html.lk .ktabs,html.lk .sub,html.lk .unter,html.lk #tabs2,html.lk .tabs,html.lk #tabs,html.lk .rail,html.lk nav.sbu,html.lk .kt>a.chip,html.lk .zleiste,html.lk .mm-backdrop,html.lk .mm-panel{display:none!important}";
  document.head.appendChild(st);
  function wende(){
    var an = false; try{ an = sessionStorage.getItem(KEY) === "1"; }catch(e){}
    if(an && !test(location.hash || "")){ an = false; try{ sessionStorage.removeItem(KEY); }catch(e){} }
    document.documentElement.classList.toggle("lk", an);
  }
  window.LK = {
    init: function(fn){ test = fn; wende(); window.addEventListener("hashchange", wende); },
    an: function(){ try{ sessionStorage.setItem(KEY, "1"); }catch(e){} wende(); },
    aus: function(){ try{ sessionStorage.removeItem(KEY); }catch(e){} wende(); }
  };
})();
