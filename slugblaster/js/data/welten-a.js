/* SLUGBLASTER – Weltenliste (Regelbuch S. 80, 96–112) + Details. Schritt 2 ergänzt alle Welten vollständig. */
var SB_WELTEN = [
 {id:"hillview", t:"Hillview", p:80, heim:true},
 {id:"vastiche", t:"Vastiche", p:96},
 {id:"thennis-spar", t:"Thennis Spar", p:97},
 {id:"desnine", t:"Desnine", p:100},
 {id:"goldener-dschungel", t:"Der Goldene Dschungel", p:101},
 {id:"prismatia", t:"Prismatia", p:104},
 {id:"operaeblum", t:"Operaeblum", p:105},
 {id:"calorium", t:"Calorium", p:106},
 {id:"erwachende-gruben", t:"Die Erwachenden Gruben", p:109},
 {id:"popularia", t:"Popularia", p:110},
 {id:"empyrean", t:"Empyrean", p:111},
 {id:"quahalia", t:"Quahalia", p:112}
];
var SB_WELT = {};
SB_WELT["thennis-spar"] = {
 plak:["CIV"],
 orte:[
  {t:"Arboristen-Tempel", x:"Wie alles in Thennis Spar ist diese heilige Stätte zugleich unfassbar uralt und unglaublich futuristisch. Man munkelt, die Arboristen horten in ihrem innersten Heiligtum ernstzunehmende Technik (und nebenbei alle Geheimnisse des Multiversums)."},
  {t:"Das Forum", x:"Hier gibt es fast alles, wenn man weiß, wo man suchen muss: seltsame Delikatessen, unmögliche Wunder und alle Bauteile und Ausrüstung, die eine Crew sich wünschen kann. Die Frage ist: Was habt ihr zum Tauschen?"},
  {t:"Die Katakomben", x:"In einer Stadt voller antiker Architektur sind die Katakomben um Jahrhunderte älter als fast alles andere. In diesen verwinkelten Tunneln verbergen sich Geheimnisse, aber wer weiß, was sonst noch in der Dunkelheit wartet. Hinein zu finden ist schwer, wieder hinaus zu finden noch schlimmer."}
 ],
 probleme:["strenge Arboristen-Wachen","Aufmerksamkeit der Geister","riesiger Negawraith","kurzes Hinübergleiten in ein verbundenes Negaversum","intrigante Rivalen-Crew","zu viele Leute sehen euch zu","Shimmer-Söldner","eine stadtweite Zeremonie beginnt, mit komplizierten Bräuchen, die man von euch zu kennen erwartet","ihr zerbrecht oder entweiht versehentlich etwas","ein beschworener Soliton","der Ausgang schließt sich langsam"],
 checkpoints:["ein Olivenhain","ein Balkon über dem geschäftigen Markt","ein Karren mit bunten Pulvern auf eurem Weg","eine schmale Gasse","ein Labyrinth aus Wohnungen und Insulae","eine mit Ranken bewachsene Mauer","ein Amphitheater","eine Hochzeit in einer teuren Villa","ein Hintereingang zu den Gärten der Arboristen","das ruhige Wasser der öffentlichen Bäder","ein riskanter Sprung zum Aquädukt"]
};
function sbWelt(id){ for(var i=0;i<SB_WELTEN.length;i++) if(SB_WELTEN[i].id===id) return SB_WELTEN[i]; return null; }
