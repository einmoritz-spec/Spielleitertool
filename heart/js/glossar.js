/* HEART – Übersetzung der englisch gebliebenen Spielbegriffe per Hover (unauffällig: feine gepunktete Linie, kleines Schild).
   Läuft automatisch über alle Inhalte (auch nachgeladene), nicht in Eingabefeldern. */
(function(){
"use strict";
var G = {
  "Blood":"Blut", "Mind":"Verstand", "Echo":"Nachhall", "Fortune":"Glück", "Supplies":"Vorräte",
  "Compel":"Überzeugen", "Delve":"Erkunden · Vorstoß ins Herz", "Delves":"Vorstöße ins Herz", "Delver":"Tiefengänger", "Delvern":"Tiefengängern", "Delvers":"Tiefengänger",
  "Discern":"Durchschauen", "Endure":"Ertragen", "Evade":"Ausweichen", "Hunt":"Jagen", "Kill":"Töten", "Mend":"Heilen, Flicken", "Sneak":"Schleichen",
  "Cursed":"Verflucht", "Desolate":"Trostlos", "Haven":"Zuflucht", "Havens":"Zufluchten", "Occult":"Okkult", "Technology":"Technik", "Warren":"Tunnelbau, Gänge", "Wild":"Wildnis",
  "Knack":"Kniff", "Knacks":"Kniffe", "Beat":"Meilenstein", "Beats":"Meilensteine", "Fallout":"Folgeschaden", "Haunt":"Anlaufstelle", "Haunts":"Anlaufstellen",
  "Zenith":"Zenit", "Skills":"Fertigkeiten", "Domains":"Domänen", "Resistance":"Resistenz", "Protection":"Schutz",
  "Ranged":"Fernkampf", "Piercing":"Durchschlagend", "One-Shot":"Einmalig", "One-shot":"Einmalig", "Spread":"Streuung", "Tiring":"Ermüdend", "Reload":"Nachladen",
  "Debilitating":"Schwächend", "Unreliable":"Unzuverlässig", "Hidden":"Verborgen", "Expensive":"Teuer", "Dangerous":"Gefährlich", "Loud":"Laut", "Beacon":"Leuchtfeuer",
  "Trusty":"Verlässlich", "Bloodbound":"Blutgebunden", "Conduit":"Kanal", "Block":"Abwehr", "Point-blank":"Aus nächster Nähe", "Potent":"Mächtig",
  "Volatile":"Unberechenbar", "Unstable":"Instabil", "Fragile":"Zerbrechlich", "Heavy":"Schwer", "Limited":"Begrenzt", "Mobile":"Beweglich", "Awkward":"Unhandlich",
  "Keen":"Scharf", "Messy":"Schmutzig", "Obscuring":"Verhüllend", "Taboo":"Tabu", "Stamina":"Ausdauer",
  "Cleaver":"Schlächter", "Deadwalker":"Totengänger", "Deep Apiarist":"Tiefen-Imker", "Heretic":"Ketzer", "Hound":"Spürhund", "Hounds":"Spürhunde",
  "Incarnadine":"Blutroter", "Junk Mage":"Schrottmagier", "Vermissian Knight":"Vermissian-Ritter", "Witch":"Hexe", "Witches":"Hexen",
  "Adventure":"Abenteuer", "Enlightenment":"Erleuchtung", "Forced":"Gezwungen", "Heartsong":"Herzlied", "Penitent":"Büßer"
};
/* Wörter, die auch deutsch vorkommen: nur übersetzen, wenn sie fett/hervorgehoben oder allein stehen */
var NUR_FETT = {"Echo":1, "Wild":1, "Block":1, "Forced":0};
var keys = Object.keys(G), alle = {};
keys.forEach(function(k){ alle[k] = G[k]; var u = k.toUpperCase(); if(!alle[u]) alle[u] = G[k]; });
var namen = Object.keys(alle).sort(function(a, b){ return b.length - a.length; }).map(function(k){ return k.replace(/[-]/g, "\\-"); });
var RE = new RegExp("(^|[^A-Za-zÄÖÜäöüß-])(" + namen.join("|") + ")(?![A-Za-zÄÖÜäöüß])", "g");
var SKIP = /^(SCRIPT|STYLE|TEXTAREA|INPUT|SELECT|OPTION|SVG|CODE|BUTTON)$/;
function fett(el){ for(var e = el; e && e.id !== "app"; e = e.parentElement){ if(/^(B|STRONG|H[1-6])$/.test(e.tagName)) return true; } return false; }
function knoten(t){
  var s = t.nodeValue; if(!s || s.length < 3) return;
  RE.lastIndex = 0; if(!RE.test(s)) return; RE.lastIndex = 0;
  var p = t.parentNode, frag = document.createDocumentFragment(), pos = 0, m, any = false, allein = s.trim();
  while((m = RE.exec(s))){
    var w = m[2], basis = w.charAt(0) + w.slice(1).toLowerCase(), z = NUR_FETT[w] || NUR_FETT[basis];
    if(z && !fett(p) && allein !== w) continue;
    if(/^ Station/.test(s.slice(m.index + m[0].length))) continue;
    var st = m.index + m[1].length;
    if(st > pos) frag.appendChild(document.createTextNode(s.slice(pos, st)));
    var sp = document.createElement("span"); sp.className = "gl"; sp.setAttribute("data-de", alle[w]); sp.textContent = w;
    frag.appendChild(sp); pos = st + w.length; any = true;
  }
  if(!any) return;
  if(pos < s.length) frag.appendChild(document.createTextNode(s.slice(pos)));
  p.replaceChild(frag, t);
}
function lauf(root){
  if(!root) return;
  var w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {acceptNode:function(n){
    for(var e = n.parentElement; e && e !== root.parentElement; e = e.parentElement){
      if(SKIP.test(e.tagName.toUpperCase()) || (e.classList && (e.classList.contains("gl") || e.classList.contains("nogl") || e.classList.contains("bgs")))) return NodeFilter.FILTER_REJECT;
    }
    return NodeFilter.FILTER_ACCEPT;
  }}), L = [], n;
  while((n = w.nextNode())) L.push(n);
  L.forEach(knoten);
}
var APPEL = document.getElementById("app"), busy = false, timer = 0;
function sched(){ if(busy) return; clearTimeout(timer); timer = setTimeout(function(){ busy = true; try{ lauf(APPEL); document.querySelectorAll(".modal").forEach(lauf); }catch(e){} busy = false; }, 80); }
new MutationObserver(function(){ sched(); }).observe(document.body, {childList:true, subtree:true});
sched();
/* Schild */
var tip = document.createElement("div"); tip.className = "gltip"; document.body.appendChild(tip);
var an = null, zeit = 0;
function zeig(el){
  tip.textContent = el.getAttribute("data-de"); tip.classList.add("on");
  var r = el.getBoundingClientRect(), tw = tip.offsetWidth, th = tip.offsetHeight;
  var x = Math.max(6, Math.min(innerWidth - tw - 6, r.left + r.width / 2 - tw / 2)), y = r.top - th - 6;
  if(y < 4) y = r.bottom + 6;
  tip.style.left = x + "px"; tip.style.top = y + "px";
}
function weg(){ clearTimeout(zeit); an = null; tip.classList.remove("on"); }
document.addEventListener("mouseover", function(e){
  var el = e.target.closest && e.target.closest(".gl");
  if(el === an) return; weg(); if(!el) return;
  an = el; zeit = setTimeout(function(){ if(an === el) zeig(el); }, 250);
});
document.addEventListener("scroll", weg, true);
document.addEventListener("click", function(e){ var el = e.target.closest && e.target.closest(".gl"); if(el && matchMedia("(hover:none)").matches){ an = el; zeig(el); setTimeout(weg, 1800); } }, true);
})();
