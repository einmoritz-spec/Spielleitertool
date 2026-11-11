/* City of Mist – Gliederung. p = Buchseite im PDF „Shadows & Showdowns“ (= PDF-Seite). */
var CM_NAV = {
 tabs:[{id:"start",t:"Start"},{id:"spieler",t:"Spieler"},{id:"sl",t:"Spielleitung"}],
 spieler:[
  {id:"buecher",t:"Themenbücher",p:11,en:"New Themebooks",items:[["Neue Regel: Theme Kits",10],["Conjuration",12],["Destiny",16],["Enclave",20],["Familiar",24],["Struggle",28],["Turf",32]]},
  {id:"bau",t:"Charakterbau",p:36,en:"New Character Creation Tools",items:[["Konzept: Drei mythische Merkmale",37],["Rapid Character Creation",40],["Mythos-Theme-Kits: Legendäre Archetypen",42],["Logos-Theme-Kits: Noir-Tropen",47]]},
  {id:"entwicklung",t:"Entwicklung",p:52,en:"New Character Development Options",items:[["Veteranen-Verbesserungen",53],["Die Extra-Themen-Ausrüstung (Extra Theme Arsenal)",57]]},
  {id:"relikte",t:"Relikte",p:58,en:"Relics",items:[["Relikte",58]]},
  {id:"vertraute",t:"Vertraute",p:68,en:"Familiars",items:[["Vertraute (Familiars)",68]]}],
 sl:[
  {id:"orte",t:"Orte & NSCs",p:75,en:"Overlooked Attractions"},
  {id:"avatare",t:"Avatare",p:129,en:"Don’t Believe the Truth",items:[["Kriege der Götter und Titanen: Ursprung der Wahrheit",130],["Die Wahrheit heute",132],["Die Ressourcen des Rates",133],["Der Rat in deiner Runde",135],["Chairman Chow",138],["DA King",148],["Ganesha",158],["Dr. Leyland",168],["Rosaline",178],["Monte Wolfe",188]]},
  {id:"gatekeeper",t:"Gatekeeper",p:201,en:"Suits Unveiled",items:[["Leben eines Agenten",203],["Gatekeeper-Credo & Agenten-Einstellung",206],["Mist-Fähigkeiten",208],["Standardausrüstung",213],["Agenten-Laufbahnen",217],["Gatekeeper-Charaktere spielen",230],["Gatekeeper-Spielerzüge",250],["Die Organisation",256],["Die Gatekeeper als Gegner",264],["Veteranen & Anführer",280],["Fahrzeuge",284],["Sicherheitsmaßnahmen",286],["Geheimnisse des Mist",290]]}],
 kapitel:[
  {t:"Kapitel 1 – If Dreams Could Kill",d:"Spieleroptionen",p:9,go:"spieler"},
  {t:"Kapitel 2 – Overlooked Attractions",d:"Orte & NSCs",p:75,go:"sl/orte"},
  {t:"Kapitel 3 – Don’t Believe the Truth",d:"Avatare",p:129,go:"sl/avatare"},
  {t:"Kapitel 4 – Suits Unveiled",d:"Gatekeeper",p:201,go:"sl/gatekeeper"}]
};
/* Orte-Verzeichnis (Kap. 2): alle Einträge des Buchs; übersetzte Einträge liegen in js/data/orte/<kategorie>.js (CM_ORTE) */
var CM_ORTE = {};
var CM_ORTE_CATS = [
 {id:"unterkunft",t:"Unterkunft",en:"Accommodation",p:77,sub:"Wohnen und Unterschlupf für Figuren, die ausziehen, vor die Tür gesetzt werden oder untertauchen",e:[["The Night Line",77],["Out of This World Spa Hotel",78],["The Pigeon Coop",79],["The Projects",80]]},
 {id:"kontakte",t:"Kontakte",en:"Contacts",p:82,sub:"Fixer, Macher und Strippenzieher der Rift-Unterwelt",e:[["1-800-Kingsmen Cleaners",82],["Auntie Pay",83],["Marquis Ward and the Tortoise Court",84]]},
 {id:"information",t:"Information",en:"Information",p:85,e:[["Helen Green",85],["Levinson Bakery",87],["Mergen Bookmakers",88],["Sacred Land Tiki Bar",90]]},
 {id:"treffpunkte",t:"Treffpunkte",en:"Meeting Places",p:91,e:[["Municipal Airstrip One-Two",91],["The Lot Across the Bay",93],["The Magna Curia",94],["Open-Air Event",95],["Seven Brothers Restaurant",96]]},
 {id:"erholung",t:"Erholung",en:"Recovery",p:97,e:[["Dr. Laughton’s Veterinary Clinic",97],["The Leaky Faucet",98],["Riverside Cathedral",99]]},
 {id:"rivalen",t:"Rivalen & Störenfriede",en:"Rivals & Troublemakers",p:100,e:[["The 12th Precinct",100]]},
 {id:"sicherheit",t:"Sicherheit",en:"Security",p:104,e:[["Anting Self-Defense / Home Security System",104],["Gu Poison",105],["Spire Security",106]]},
 {id:"einkaufen",t:"Einkaufen",en:"Shopping",p:108,e:[["Cloud 9 Nightclub",108],["Museum of World Cultures",109],["Tokugawa Blades",111]]},
 {id:"strasse",t:"Straßenbegegnungen",en:"Street Encounters",p:113,e:[["Aryan Bhatt",113],["Closet Creeps",114],["Evil Twin Djinn",115],["The Horned Snakes",116],["The Undercity Spirits",117]]},
 {id:"transport",t:"Transport",en:"Transportation",p:118,e:[["Gyphus",118],["Lloyd & Ownie Carriage Services Ltd.",119],["Troll Booths",120],["Ash Street Park",121]]},
 {id:"werkstaetten",t:"Werkstätten",en:"Workshops",p:122,e:[["Ricky Left Hook’s Boxing Club",122],["The Leyland Foundation Tech Accelerator Center",124],["Monument Tower",125]]}
];
