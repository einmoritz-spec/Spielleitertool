/* SLUGBLASTER – Pop-ups: Monster, Orte, Welten und Fraktionen öffnen sich als Fenster über der aktuellen Seite,
   statt zum Bereich der App zu springen. Route wie bisher (welten/<id>, heimat, monster/<id> …);
   zusätzlich fraktion/<id>[,<id>] für einzelne Fraktionskarten. Reine Werkzeug-Seiten (folge, crew …) bleiben Seitenwechsel. */
var SBP = (function(){
  var NAV = {folge:1, crew:1, abenteuer:1, schirm:1, start:1, galerie:1, oolroob:1};
  function find(L, id){ for(var i = 0; i < L.length; i++) if(L[i].id === id) return L[i]; return null; }
  function strip(h){ var d = document.createElement("div"); d.innerHTML = h; [].slice.call(d.querySelectorAll(".frsub,.hmsub,.mosub,.mvsub")).forEach(function(x){ x.remove(); }); return d.innerHTML; }
  function cards(L, fn){ var h = L.map(fn).filter(Boolean); return h.length ? '<div class="pcards' + (h.length > 1 ? " mehr" : "") + '">' + h.join("") + '</div>' : ""; }
  function inhalt(route){
    var a = String(route).split("/"), v = a[0], r = a.slice(1);
    if(v === "fraktion" && window.SBFR && window.SB_FRAKTIONEN) return cards((r[0] || "").split(","), function(id){ var f = find(SB_FRAKTIONEN, id); return f ? SBFR.karte(f) : ""; });
    if(v === "monster" && r[0] && r[0] !== "bau" && window.SBM && window.SB_MONSTER) return cards(r[0].split(","), function(id){ var m = find(SB_MONSTER, id); return m ? SBM.karte(m) : ""; });
    if(VIEWS[v] && !NAV[v]) return '<div class="pview">' + strip(VIEWS[v](r)) + '</div>';
    return "";
  }
  function fuell(m){ var c = inhalt(m.dataset.route); m.firstChild.innerHTML = '<button class="px" onclick="this.closest(\'.modal\').remove()" aria-label="Schließen">×</button>' + c; }
  function open(route){
    var v = String(route).split("/")[0], h = inhalt(route);
    if(!h){ go(route); return; }
    var m = modal("", "var(--lila)"); m.classList.add("pop"); m.dataset.route = route;
    if(/^(fraktion|monster)\//.test(route) && h.indexOf("mehr") < 0) m.classList.add("schmal");
    m.firstChild.innerHTML = '<button class="px" onclick="this.closest(\'.modal\').remove()" aria-label="Schließen">×</button>' + h;
    return m;
  }
  /* Spielstand-Klicks im Pop-up (abhaken, Beziehung …) rendern die Seite neu – das Pop-up zieht mit */
  var r0 = window.render;
  window.render = function(){
    r0.apply(this, arguments);
    [].slice.call(document.querySelectorAll(".modal.pop")).forEach(function(m){ var d = m.firstChild, y = d.scrollTop; fuell(m); d.scrollTop = y; });
  };
  window.addEventListener("hashchange", function(){ [].slice.call(document.querySelectorAll(".modal.pop")).forEach(function(m){ m.remove(); }); });
  return { open: open };
})();
