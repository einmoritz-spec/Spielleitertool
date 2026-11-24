/* Vorbereitungsseite (Startseite jedes Settings): Karten mit Regeln/Erklärungen, darunter der große Knopf zu den Abenteuern.
   PREP.html({cards:[{t, p, go, rows:[[label, seite, go]]}], adv:{t, sub, go}}) – go = JS-Ausdruck als String */
var PREP = (function(){
  function e(s){ return String(s==null?"":s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"); }
  function card(c){
    var rows = (c.rows||[]).map(function(r){ return '<li><button type="button" onclick="'+e(r[2])+'"><span>'+e(r[0])+'</span><i>'+(r[1]?'S. '+e(r[1]):'')+'</i></button></li>'; }).join("");
    return '<div class="prep-c"><button type="button" class="prep-h" onclick="'+e(c.go||"")+'"><b>'+e(c.t)+'</b><i>'+(c.p?'S. '+e(c.p):'')+'</i></button>'+(rows?'<ul>'+rows+'</ul>':'')+'</div>';
  }
  function html(o){
    return '<div class="prep"><div class="prep-g">'+o.cards.map(card).join("")+'</div>'+
      (o.adv?'<button type="button" class="prep-adv" onclick="'+e(o.adv.go)+'"><b>'+e(o.adv.t||"Abenteuer")+'</b>'+(o.adv.sub?'<small>'+e(o.adv.sub)+'</small>':'')+'</button>':'')+'</div>';
  }
  return {html:html};
})();
