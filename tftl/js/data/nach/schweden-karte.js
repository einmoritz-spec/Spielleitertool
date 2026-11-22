/* Schwedischer Loop: Karte „Der Loop – Gebietskarte“ (Core S. 22–23) mit übersetzten Beschriftungen */
(function(){
  var d = window.NACHDATA && window.NACHDATA.schweden; if(!d) return;
  var sec = {id:"karte", titel:"Karte: Der Loop", s:22, bloecke:[
   ["bild","karte-maelaren-voll",true],
   ["orte",[
    ["Kartenkopf und Legende",[
     ["Die Anlage Mälaren – Der Loop – Gebietskarte"],["Maßstab 0–5 km"],["Wartungstunnel"],["Fährroute"],["Transporttunnel"],["Zivilstraße"],["Wald"],["Ackerland"],["Industriegebiet"],["Siedlungsgebiet"],
     ["Kompassfehler 1981: ca. 1 Gon Ost"],["Örtliche Unregelmäßigkeiten möglich"],["Nicht zur allgemeinen Verteilung freigegeben (Statens lantmäteriverk, 27. April 1981)"],["Riksenergi – Forschung und Entwicklung"]]],
    ["Anlage des Loops",[
     ["Beschleuniger Prim-1"],["Beschleunigertunnel P-1"],["Beschleuniger Aux-1"],["Zufluss Kolbäck"],["Abfluss Mälsåker"],["Abfluss Botkyrka"],
     ["Tor 2D-3B"],["Tor 3C-4F"],["Nordtor 5B"],["Osttor 5C"],["Südtor 5D"],["Westtor 5D"],
     ["Der Bona-Reaktor", 24],["Kühltürme", 24],["Bona", 24],["Fabrik Dävensö"],["Löten"]]],
    ["Inseln und Gewässer",[
     ["Mälarsee"],["Svartsjölandet (Schwarzseeland)", 21],["Munsö", 24],["Adelsö", 26],["Ekerö"],["Eldgarnsö"],["Dävensö"],["Alholmen"],["Lagnö"],["Bastlagnö"],
     ["Björkfjärden"],["Prästfjärden"],["Hovgårdsfjärden"],["Svinsundet"],["Långtarmen"],["Nästfjärden"],["Väntholmen"],["Väntholmsviken"],["Nordiska Gobi"]]],
    ["Orte auf Svartsjölandet",[
     ["Färentuna", 21],["Kungsberga", 21],["Stavsborg", 21],["Stenhamra", 21],["Svartsjöanstalten", 21],
     ["Hilleshög"],["Ilända"],["Ölsta"],["Sätuna"],["Sånga-Säby"],["Torslunda"],["Sockarby"],["Väsby"],["Skå"],["Mörby"],["Edeby"],["Eneby"],["Troxhammar"],["Menhammar"],["Skytteholm"],["Skarnholmen"],["Löftet"],["Lunda"],["Vendeludd"],["Goholmen"]]],
    ["Orte auf Munsö und Adelsö",[
     ["Sätra", 26],["Wäsby"],["Tofta"],["Dalby"],["Stenby", 26],["Lundkulla"]]]
   ]]
  ]};
  var i = d.abschnitte.map(function(a){ return a.id; }).indexOf("svartsjolandet");
  d.abschnitte.splice(i + 1, 0, sec);
})();
