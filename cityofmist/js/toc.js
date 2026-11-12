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
  {id:"gatekeeper",t:"Gatekeeper",p:201,en:"Suits Unveiled",items:[["Leben eines Agenten",203],["Gatekeeper-Credo & Agenten-Einstellung",206],["Mist-Fähigkeiten: Shrouding und Clearance",208],["Die Advanced Arts",210],["Umgebungs-Mist (Ambient Mist)",212],["Standardausrüstung der Gatekeeper",213],["Agenten-Laufbahnen",217],["Gatekeeper-Charaktere spielen",230],["Gatekeeper-Spielerzüge",250],["Die Organisation",256],["Gatekeeper Story Seeds",265],["Shrouding: Distract, Mask, Obliviate",268],["Obliviating and Memory Loss",269],["Agent Danger Moves",270],["Desk Jockey",270],["Disembodied Intel Percher",271],["Field Technician",271],["Infiltrator (Danger)",272],["Investigator (Danger)",272],["Medic (Danger)",273],["PAC Veiler (Danger)",273],["R&D Gadgeteer (Danger)",274],["Rift Handler (Danger)",274],["Seals (Danger)",275],["Security Detail (Danger)",275],["SWAT (Danger)",276],["Tactical Weaver (Danger)",276],["Trainee (Danger)",276],["Urban Warfare Tactician (Danger)",277],["Gear and Mist Effects Dangers",277],["Agent Power Sets",278],["Sample Rupturing Contracts",279],["Asmodeus Birungi",280],["Lars Erikson",281],["The Seamstress",282],["Richard Hughes",283],["Fahrzeuge",284],["Sicherheitsmaßnahmen und Exit Door",286],["Entrance Lobby und Mending Clinic",287],["Rift Containment Cell und Surveillance Grid",288],["Geheimnisse des Mist",290]]}],
 kapitel:[
  {t:"Kapitel 1 – If Dreams Could Kill",d:"Spieleroptionen",p:9,go:"spieler"},
  {t:"Kapitel 2 – Overlooked Attractions",d:"Orte & NSCs",p:75,go:"sl/orte"},
  {t:"Kapitel 3 – Don’t Believe the Truth",d:"Avatare",p:129,go:"sl/avatare"},
  {t:"Kapitel 4 – Suits Unveiled",d:"Gatekeeper",p:201,go:"sl/gatekeeper"}]
};
/* Orte-Verzeichnis (Kap. 2): alle Einträge des Buchs; übersetzte Einträge liegen in js/data/orte/<kategorie>.js (CM_ORTE) */
var CM_ORTE = {};
var CM_ORG = {};
var CM_ORTE_CATS = [
 {id:"unterkunft",t:"Unterkunft",en:"Accommodation",p:77,sub:"Wohnen und Unterschlupf für Figuren, die ausziehen, vor die Tür gesetzt werden oder untertauchen",e:[["The Night Line",77],["Out of This World Spa Hotel",78],["The Pigeon Coop",79],["The Projects",80]]},
 {id:"kontakte",t:"Kontakte",en:"Contacts",p:82,sub:"Fixer, Macher und Strippenzieher der Rift-Unterwelt",e:[["1-800-Kingsmen Cleaners",82],["Auntie Pay",83],["Marquis Ward and the Tortoise Court",84]]},
 {id:"information",t:"Information",en:"Information",p:85,e:[["Helen Green",85],["Levinson Bakery",87],["Mergen Bookmakers",88],["Sacred Land Tiki Bar",90]]},
 {id:"treffpunkte",t:"Treffpunkte",en:"Meeting Places",p:91,e:[["Municipal Airstrip One-Two",91],["The Lot Across the Bay",93],["The Magna Curia",94],["Open-Air Event",95],["Seven Brothers Restaurant",96]]},
 {id:"erholung",t:"Erholung",en:"Recovery",p:97,e:[["Dr. Laughton’s Veterinary Clinic",97],["The Leaky Faucet",98],["Riverside Cathedral",99]]},
 {id:"rivalen",t:"Rivalen & Störenfriede",en:"Rivals & Troublemakers",p:100,e:[["The 12th Precinct",100],["Joany García, City Herald",102],["The Chief",103]]},
 {id:"sicherheit",t:"Sicherheit",en:"Security",p:104,e:[["Anting Self-Defense / Home Security System",104],["Gu Poison",105],["Spire Security",106]]},
 {id:"einkaufen",t:"Einkaufen",en:"Shopping",p:108,e:[["Cloud 9 Nightclub",108],["Museum of World Cultures",109],["Tokugawa Blades",111]]},
 {id:"strasse",t:"Straßenbegegnungen",en:"Street Encounters",p:113,e:[["Aryan Bhatt",113],["Closet Creeps",114],["Evil Twin Djinn",115],["The Horned Snakes",116],["The Undercity Spirits",117]]},
 {id:"transport",t:"Transport",en:"Transportation",p:118,e:[["Gyphus",118],["Lloyd & Ownie Carriage Services Ltd.",119],["Troll Booths",120],["Ash Street Park",121]]},
 {id:"werkstaetten",t:"Werkstätten",en:"Workshops",p:122,e:[["Ricky Left Hook’s Boxing Club",122],["The Leyland Foundation Tech Accelerator Center",124],["Monument Tower",125]]}
];

/* Avatare-Verzeichnis (Kap. 3): Daten ebenfalls in CM_ORTE[id] (js/data/avatare/<id>.js) */
var CM_AV_CATS = [
 {id:"wahrheit",t:"Die Wahrheit",en:"The Truth",p:130,sub:"Der geheime Rat der Avatare, der die City kontrolliert",e:[["Was ist die Wahrheit?",130],["Kriege der Götter und Titanen: Ursprung der Wahrheit",130],["Die Wahrheit heute",132],["Die Ressourcen des Rates",133],["Der Rat in deiner Runde",135]]},
 {id:"chow",t:"Chairman Chow",en:"Tanhā",p:138,e:[["Chairman Chow",138],["Modus Operandi und Operation",139],["Schlüsselfiguren und Orte",141],["Chows Geschichte",143],["Story-Ideen, Custom Moves und Extra-Themen",144],["Chows Gefahren",145]]},
 {id:"king",t:"DA King",en:"Shango",p:148,e:[["DA King",148],["Modus Operandi und Operation",149],["Schlüsselfiguren und Orte",150],["Kings Geschichte",153],["Story-Ideen, Custom Moves und Extra-Themen",154],["Kings Gefahren",155]]},
 {id:"ganesha",t:"Ganesha",en:"Ganesha",p:158,e:[["Ganesha",158],["Modus Operandi und Operation",159],["Schlüsselfiguren und Orte",161],["Ganeshas Geschichte",162],["Story-Ideen, Custom Moves und Extra-Themen",163],["Ganeshas Gefahren",164]]},
 {id:"leyland",t:"Dr. Leyland",en:"Prometheus",p:168,e:[["Dr. Leyland",168],["Modus Operandi und Operation",169],["Schlüsselfiguren und Orte",171],["Leylands Geschichte",173],["Story-Ideen, Custom Moves und Extra-Themen",174],["Leylands Gefahren",175]]},
 {id:"rosaline",t:"Rosaline",en:"Romeo & Juliet",p:178,e:[["Rosaline",178],["Modus Operandi und Operation",179],["Schlüsselfiguren und Orte",181],["Rosalines Geschichte",183],["Story-Ideen, Custom Moves und Extra-Themen",184],["Rosalines Gefahren",185],["Beziehungen in der Wahrheit",187]]},
 {id:"wolfe",t:"Monte Wolfe",en:"The Boy Who Cried Wolf",p:188,e:[["Monte Wolfe",188],["Modus Operandi und Operation",189],["Schlüsselfiguren und Orte",191],["Monte Wolfes Geschichte",193],["Story-Ideen, Custom Moves und Extra-Themen",193],["Monte Wolfes Gefahren",194]]}
];

/* Gatekeeper-Verzeichnis (Kap. 4): übersetzte Einträge liegen in js/data/gatekeeper/<kategorie>.js (CM_ORTE.gk_*) */
var CM_GK_CATS = [
 {id:"gk_leben",t:"Leben eines Agenten",en:"Life of an Agent",p:202,e:[["Einführung: Die Gatekeeper und der Mist",202],["Leben eines Agenten",203],["Rekrutierung und Ausbildung",204],["Im Dienst, Privatleben, Jargon und Erscheinung",205],["Gatekeeper-Credo & Agenten-Einstellung",206],["Mist-Fähigkeiten: Shrouding und Clearance",208],["Die Advanced Arts",210],["Umgebungs-Mist (Ambient Mist)",212],["Standardausrüstung der Gatekeeper",213],["Agenten-Laufbahnen und Desk Jockey",217],["Infiltrator",218],["Intel Percher",219],["Investigator",220],["Liaison und Rupturer",221],["Medical Staff",222],["Mist Technician",223],["PAC Veiler",224],["R&D Anchorer",225],["Seals",225],["Security Detail",226],["SWAT und Tactical Weaver",226],["Trainee und Urban Warfare Tactician",227],["Gatekeeper-Glossar",228]]},
 {id:"gk_spielen",t:"Gatekeeper spielen",en:"Playing a Gatekeeper Character",p:230,e:[["Gatekeeper-Serienkonzepte",230],["Gatekeeper-Charakter erschaffen",232],["Rifts werden Gatekeeper und Themenwahl",234],["Gatekeeper-Tropen (Archetypische Builds)",236],["Mist-Themenbücher, Directive und Strikes",237],["Mist-Themenbuch: Shrouding",238],["Mist-Themenbuch: Advanced Art",242],["Advanced Art: Rupturing und Weaving",243],["Advanced Art: Weakness, Directive und Improvements",244],["Mist-Themenbuch: Unit",246],["Unit: Weakness, Directive und Improvements",248],["Gatekeeper Player Moves",250],["Gatekeeper-Charakterentwicklung",252],["Performance Review und Demotion",253],["Gefeuert, Beförderung und Bigwig",254],["Ein Bigwig spielen und Termination",255]]},
 {id:"gk_org",t:"Die Organisation",en:"The Gatekeeper Organization",p:256,e:[["Hierarchie der Gatekeeper",256],["Departments und Aktivitäten",258],["Politische Fraktionen der Gatekeeper",260],["Typische Gatekeeper-Orte",262]]},
 {id:"gk_gegner",t:"Gatekeeper als Gegner",en:"The Gatekeepers as Adversaries",p:264,e:[["Gatekeeper Story Seeds",265],["Shrouding: Distract, Mask, Obliviate",268],["Obliviating and Memory Loss",269],["Agent Danger Moves",270],["Desk Jockey",270],["Disembodied Intel Percher",271],["Field Technician",271],["Infiltrator (Danger)",272],["Investigator (Danger)",272],["Medic (Danger)",273],["PAC Veiler (Danger)",273],["R&D Gadgeteer (Danger)",274],["Rift Handler (Danger)",274],["Seals (Danger)",275],["Security Detail (Danger)",275],["SWAT (Danger)",276],["Tactical Weaver (Danger)",276],["Trainee (Danger)",276],["Urban Warfare Tactician (Danger)",277],["Gear and Mist Effects Dangers",277],["Agent Power Sets",278],["Sample Rupturing Contracts",279],["Asmodeus Birungi",280],["Lars Erikson",281],["The Seamstress",282],["Richard Hughes",283],["Fahrzeuge",284],["Sicherheitsmaßnahmen und Exit Door",286],["Entrance Lobby und Mending Clinic",287],["Rift Containment Cell und Surveillance Grid",288]]},
 {id:"gk_mist",t:"Geheimnisse des Mist",en:"Secrets of the Mist",p:290,e:[["Was ist der Mist? Die Theorien",291],["Weitere Überlegungen zur Mist-Theorie",294],["Das Geheimnis des Mist in deinem Spiel",294],["Wonder for Autonomy: Geschichte eines moralisch grauen Handels",296]]}
];
