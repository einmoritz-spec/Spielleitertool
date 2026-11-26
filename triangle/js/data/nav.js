/* Triangle Agency – Aufbau der Bereiche: Reiter der Kopfzeile, Unterleiste, Abschnitte (Titel, Buchseite).
   Inhalte der Abschnitte: js/data/handbuch-*.js, werkzeug-*.js (TA_TEXT[bereich/unterpunkt/abschnitt]) */
var TA_NAV = [
 {id:"h", t:"Handbuch", lang:"Handbuch für\nAußendienst", c:"rot", sub:[
  {id:"agency", t:"Die Agency", s:[["was","Was ist Triangle Agency?",10],["mission","Unsere Mission",12],["werte","Unsere Werte",14],["antritt","Arbeitsantritt",15]]},
  {id:"einsaetze", t:"Einsätze", s:[["aussendienst","Außendienst",18],["anstellung","Anstellung",19],["bergung","Anomalie-Bergung",20],["ausruestung","Ausrüstung",21],["ausgaenge","Ausgänge",22],["perfekt","Ein perfekter Einsatz",23],["anomalien","Anomalien im Detail",24],["gefahren","Gefahren im Außendienst",26],["fangen","Anomalien fangen",27],["kennzahlen","Leistungskennzahlen",28],["andere","Andere Einsatzarten",29],["bericht","Einsatzbericht",31]]},
  {id:"wuerfeln", t:"Würfeln", s:[["wuerfel","Vierseitige Würfel",32],["chaos","Chaos",33],["qualitaeten","Qualitäten und Qualitätssicherungen",34],["burnout","Burnout",35],["triszendenz","Triszendenz und Stabilität",36],["kurz","Kurzübersicht",38],["fragen","Die Agency fragen",40],["faehigkeiten","Anomalie-Fähigkeiten",44],["scheitern","Scheitern ist eingeplant",45]]},
  {id:"schaden", t:"Schaden und Konflikte", s:[["schaden","Schaden",46],["versicherung","Lebensversicherung",47],["konflikt","Konfliktlösung",48]]},
  {id:"tisch", t:"Am Tisch", s:[["inhalte","Inhaltskontrolle",52],["chancen","Chancengleichheit",53],["region","Eure Region",54],["gewoehnlich","Was ist gewöhnlich?",55]]},
  {id:"leben", t:"Arbeit und Leben", s:[["balance","Work-Life-Balance",122],["zeit","Zeit verbringen",123],["erleben","Zeit erleben",124],["laufbahn","Laufbahnlänge",126],["ruhestand","Kompetenz im Detail und Ruhestand",127],["anforderungen","Anforderungen",128],["realitaet","Realität im Detail",132],["auszeichnungen","Auszeichnungen",134]]}
 ]},
 {id:"ark", t:"ARK", c:"blau", sub:[
  {id:"anomalie", t:"Anomalie", c:"blau"}, {id:"realitaet", t:"Realität", c:"gelb"}, {id:"kompetenz", t:"Kompetenz", c:"rot"},
  {id:"fragebogen", t:"Fragebogen", c:"rot", s:[["fragebogen","Fragebogen zum Arbeitsantritt",118]]}
 ]},
 {id:"w", t:"Werkzeug", lang:"Werkzeug der\nGeschäftsleitung", c:"blau", sub:[
  {id:"grundlagen", t:"Grundlagen", s:[["gratulation","Vertragulationen!",136],["vorbereitung","Verantwortung und Vorbereitung",142],["lebenszyklus","Lebenszyklus einer Anomalie",144],["platz","Wo du hineinpasst",146],["zusatz","Zusatzdaten",147],["wichtig","Wichtige Informationen",148],["sorge","Die Agency sorgt sich um dich",150]]},
  {id:"bauen", t:"Anomalien bauen", s:[["vorbereitung2","Vorbereitung",151],["fokus","Fokus und Impuls",152],["kompliziert","Es ist kompliziert",153],["domaene","Domäne, Geschichte und Erscheinung",154],["chaos","Chaos und Chaos-Effekte",156],["klein","Kleine Anomalien",157],["druck","Drucksituationen",160],["eigene","Eigene Chaos-Effekte",161]]},
  {id:"leiten", t:"Leiten", s:[["ende","Das Ende",162],["lose","Lose Enden und Wetterereignisse",164],["aussehen","Es ist nicht, wonach es aussieht",170],["uneinig","Uneinigkeit im Team",172],["ermittlungen","Ermittlungen",173],["bergung","Anomalie-Bergung",174],["aufraeumen","Aufräum-Einsätze",176],["figuren","Figuren",177],["beziehungen","Beziehungen",178],["markt","Marktstörung",179],["gegenspieler","Wiederkehrende Gegenspieler",180],["fraktionen","Fraktionen",181],["morgen","Morgenbesprechungen",182],["checkliste","Checkliste",185],["beispiel","Beispieleinsatz",186],["beurteilung","Beurteilung",188],["veraergern","Die Agency verärgern",189],["enden","Enden",190]]},
  {id:"tabellen", t:"Tabellen", s:[["chaos","Chaos-Effekte",158],["klein","Kleine Anomalien",159],["wetter","Wetterereignisse",164]]},
  {id:"ternion", t:"Ternion City", s:[["orte","Orte in der Innenstadt",194]]}
 ]},
 {id:"pw", t:"Playwall", lang:"Dokumente hinter\nder Playwall", c:"tinte", sub:[]}
];
