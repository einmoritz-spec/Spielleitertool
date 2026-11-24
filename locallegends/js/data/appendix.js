/* ============================================================
   ANHÄNGE (Appendices, Buchseiten 330–343)
   Indexlisten aus „City of Mist – Local Legends“.
   Seitenzahlen = gedruckte Buchseiten (= PDF-Seiten).
   Felder pro Eintrag: siehe gap_extras.md
   ============================================================ */
const APPENDIX = {
  title:"Anhänge",
  pages:"S. 330–343",
  intro:"Am Ende des Buches stehen Indizes, die alle in diesem Band verwendeten Mythoi, alle Danger-Profile und alle Theme Kits auflisten. Die Seitenzahlen verweisen auf die gedruckte Ausgabe des englischen Bandes (Buchseite = PDF-Seite). Die Spalte „Logos“ nennt die Figur, den Ort oder das Objekt, in dem der Mythos wirkt („-“ im Buch = kein Logos genannt, hier null).",
  districtNames:{intro:"Einführung / Guide to the City", chinatown:"Chinatown", fortune_row:"Fortune Row", happyville:"Happyville", independence:"Independence", colonia_sombras:"La Colonia de Sombras", campus:"The Campus", sunken_city:"The Sunken City", undertrash:"The Undertrash", tourist_trap:"Tourist Trap", villains:"Four Small-Time Villains", forged_framed:"Forged & Framed"},
  mythoi:{
    title:"Mythoi in this Book", pages:"S. 331–336",
    note:"Spalten im Buch: Mythos · Logos · Typ · Seite. Typ „Rift“ = Mensch mit Mythos, „Enclave“ = Ort, „Relic“ = Gegenstand, „Conjuration“ = herbeigerufene Wesen/Dinge, „Familiar“ = Tier, „Avatar“ = Verkörperung. „(Danger)“ bedeutet: im Band gibt es ein Danger-Profil dazu; „(Extra Theme)“ bzw. „(power set)“: ein Extra-Thema bzw. Power Set. Feld kinds ist die maschinenlesbare Aufschlüsselung des Typs.",
    // Feldreihenfolge: mythos, logos, type, kinds, page, district
    entries:[
 {
  "mythos": "Abiyoyo",
  "logos": "School auditorium",
  "type": "Enclave (Danger)",
  "kinds": [
   "Enclave",
   "Danger"
  ],
  "page": 93,
  "district": "happyville"
 },
 {
  "mythos": "Absinthe",
  "logos": "The Green Fairy",
  "type": "Enclave",
  "kinds": [
   "Enclave"
  ],
  "page": 269,
  "district": "tourist_trap"
 },
 {
  "mythos": "Agamemnon",
  "logos": null,
  "type": "Extra Theme",
  "kinds": [
   "Extra Theme"
  ],
  "page": 50,
  "district": "fortune_row"
 },
 {
  "mythos": "Alebrije",
  "logos": null,
  "type": "Familiar (Danger and Extra Theme)",
  "kinds": [
   "Familiar",
   "Extra Theme",
   "Danger"
  ],
  "page": 149,
  "district": "colonia_sombras"
 },
 {
  "mythos": "Alp",
  "logos": "Jennifer Anderung",
  "type": "Rift (Danger)",
  "kinds": [
   "Rift",
   "Danger"
  ],
  "page": 274,
  "district": "tourist_trap"
 },
 {
  "mythos": "Aman Sinaya",
  "logos": "Tanvi Ashura",
  "type": "Rift (Extra Theme)",
  "kinds": [
   "Rift",
   "Extra Theme"
  ],
  "page": 217,
  "district": "sunken_city"
 },
 {
  "mythos": "Ambrogio",
  "logos": "Nicos Iryhor",
  "type": "Rift (Danger)",
  "kinds": [
   "Rift",
   "Danger"
  ],
  "page": 262,
  "district": "undertrash"
 },
 {
  "mythos": "Apasmara",
  "logos": null,
  "type": "Conjuration (Danger)",
  "kinds": [
   "Conjuration",
   "Danger"
  ],
  "page": 196,
  "district": "campus"
 },
 {
  "mythos": "Asura",
  "logos": "Movie monster",
  "type": "Conjuration (Danger)",
  "kinds": [
   "Conjuration",
   "Danger"
  ],
  "page": 95,
  "district": "happyville"
 },
 {
  "mythos": "Atlantis",
  "logos": "The Sunken City",
  "type": "Enclave",
  "kinds": [
   "Enclave"
  ],
  "page": 199,
  "district": "sunken_city"
 },
 {
  "mythos": "Atlas",
  "logos": "Attila the Elder",
  "type": "Rift",
  "kinds": [
   "Rift"
  ],
  "page": 227,
  "district": "sunken_city"
 },
 {
  "mythos": "Autolycus",
  "logos": "Aurora Laakkonen",
  "type": "Rift (Danger)",
  "kinds": [
   "Rift",
   "Danger"
  ],
  "page": 61,
  "district": "fortune_row"
 },
 {
  "mythos": "Aztec Victory Banners",
  "logos": "Victory banners",
  "type": "Conjuration (Danger)",
  "kinds": [
   "Conjuration",
   "Danger"
  ],
  "page": 241,
  "district": "undertrash"
 },
 {
  "mythos": "Bahamut",
  "logos": null,
  "type": "Familiar (Extra Theme)",
  "kinds": [
   "Familiar",
   "Extra Theme"
  ],
  "page": 233,
  "district": "sunken_city"
 },
 {
  "mythos": "Bakasura",
  "logos": "Austin Angel and garbage truck",
  "type": "Rift (Danger)",
  "kinds": [
   "Rift",
   "Danger"
  ],
  "page": 98,
  "district": "happyville"
 },
 {
  "mythos": "Baku",
  "logos": "Marcus Davis",
  "type": "Rift (Danger)",
  "kinds": [
   "Rift",
   "Danger"
  ],
  "page": 105,
  "district": "happyville"
 },
 {
  "mythos": "Bermuda Triangle",
  "logos": "The Wreckage Heap",
  "type": "Enclave",
  "kinds": [
   "Enclave"
  ],
  "page": 210,
  "district": "sunken_city"
 },
 {
  "mythos": "Biddy Early",
  "logos": "Sean McMannon",
  "type": "Rift (Danger)",
  "kinds": [
   "Rift",
   "Danger"
  ],
  "page": 277,
  "district": "tourist_trap"
 },
 {
  "mythos": "Bodhidharma",
  "logos": "Bodhi",
  "type": "Rift (Extra Theme)",
  "kinds": [
   "Rift",
   "Extra Theme"
  ],
  "page": 102,
  "district": "happyville"
 },
 {
  "mythos": "Boo Hag",
  "logos": null,
  "type": "Conjuration (Danger)",
  "kinds": [
   "Conjuration",
   "Danger"
  ],
  "page": 144,
  "district": "independence"
 },
 {
  "mythos": "Bradamante",
  "logos": "Brandi Maretti",
  "type": "Rift",
  "kinds": [
   "Rift"
  ],
  "page": 276,
  "district": "tourist_trap"
 },
 {
  "mythos": "Brides of Dracula",
  "logos": "Carlos Despina",
  "type": "Rift (Danger)",
  "kinds": [
   "Rift",
   "Danger"
  ],
  "page": 270,
  "district": "tourist_trap"
 },
 {
  "mythos": "Bridge of Magpies",
  "logos": "The Double Sevenths",
  "type": "Conjuration (Danger)",
  "kinds": [
   "Conjuration",
   "Danger"
  ],
  "page": 32,
  "district": "chinatown"
 },
 {
  "mythos": "Buddhistic Vishuddh",
  "logos": "Snowy",
  "type": "Rift",
  "kinds": [
   "Rift"
  ],
  "page": 59,
  "district": "fortune_row"
 },
 {
  "mythos": "Caesar’s Aquila Standard",
  "logos": "The Eagle Wings",
  "type": "Relic (Extra Theme)",
  "kinds": [
   "Relic",
   "Extra Theme"
  ],
  "page": 173,
  "district": "campus"
 },
 {
  "mythos": "Cave drawings",
  "logos": null,
  "type": "Conjuration (Danger)",
  "kinds": [
   "Conjuration",
   "Danger"
  ],
  "page": 252,
  "district": "undertrash"
 },
 {
  "mythos": "Ceryneian Hind",
  "logos": null,
  "type": "Conjuration (Danger)",
  "kinds": [
   "Conjuration",
   "Danger"
  ],
  "page": 290,
  "district": "tourist_trap"
 },
 {
  "mythos": "Chalkydri",
  "logos": "Snake ring",
  "type": "Relic (Danger)",
  "kinds": [
   "Relic",
   "Danger"
  ],
  "page": 281,
  "district": "tourist_trap"
 },
 {
  "mythos": "Chang",
  "logos": null,
  "type": "Conjuration (Danger)",
  "kinds": [
   "Conjuration",
   "Danger"
  ],
  "page": 28,
  "district": "chinatown"
 },
 {
  "mythos": "Changeling",
  "logos": "Imposter",
  "type": "Conjuration (Danger)",
  "kinds": [
   "Conjuration",
   "Danger"
  ],
  "page": 102,
  "district": "happyville"
 },
 {
  "mythos": "Confucius",
  "logos": null,
  "type": null,
  "kinds": [],
  "page": 24,
  "district": "chinatown"
 },
 {
  "mythos": "Croquet grounds from Wonderland",
  "logos": "Knave of Hearts Mini-Golf and Chapel",
  "type": "Enclave (Danger)",
  "kinds": [
   "Enclave",
   "Danger"
  ],
  "page": 81,
  "district": "fortune_row"
 },
 {
  "mythos": "Cu Chulainn",
  "logos": "Nula Dawg",
  "type": "Rift (Extra Theme)",
  "kinds": [
   "Rift",
   "Extra Theme"
  ],
  "page": 66,
  "district": "fortune_row"
 },
 {
  "mythos": "Cucuy",
  "logos": "Wilson Plant",
  "type": "Enclave",
  "kinds": [
   "Enclave"
  ],
  "page": 150,
  "district": "colonia_sombras"
 },
 {
  "mythos": "Cuiluhuexi",
  "logos": null,
  "type": "Conjuration (Danger)",
  "kinds": [
   "Conjuration",
   "Danger"
  ],
  "page": 157,
  "district": "colonia_sombras"
 },
 {
  "mythos": "Da Vinci’s Vitruvian Man",
  "logos": "Genevieve Florentine",
  "type": "Rift",
  "kinds": [
   "Rift"
  ],
  "page": 179,
  "district": "campus"
 },
 {
  "mythos": "Daji",
  "logos": "Dahlia Zhuang",
  "type": "Rift (Danger)",
  "kinds": [
   "Rift",
   "Danger"
  ],
  "page": 26,
  "district": "chinatown"
 },
 {
  "mythos": "Dakhanavar",
  "logos": "Groundskeeper Dove",
  "type": "Rift (Danger)",
  "kinds": [
   "Rift",
   "Danger"
  ],
  "page": 182,
  "district": "campus"
 },
 {
  "mythos": "Dažbog",
  "logos": "Dažbog",
  "type": "Rift",
  "kinds": [
   "Rift"
  ],
  "page": 216,
  "district": "sunken_city"
 },
 {
  "mythos": "Dian Wei",
  "logos": "Clinton An",
  "type": "Rift (Danger)",
  "kinds": [
   "Rift",
   "Danger"
  ],
  "page": 22,
  "district": "chinatown"
 },
 {
  "mythos": "Dianmu",
  "logos": "Vera Yeh",
  "type": "Rift (Danger)",
  "kinds": [
   "Rift",
   "Danger"
  ],
  "page": 45,
  "district": "chinatown"
 },
 {
  "mythos": "Dionysus",
  "logos": "Ekram Din",
  "type": "Rift (Danger)",
  "kinds": [
   "Rift",
   "Danger"
  ],
  "page": 271,
  "district": "tourist_trap"
 },
 {
  "mythos": "Dolos",
  "logos": "Nolan Solona",
  "type": "Rift (Danger)",
  "kinds": [
   "Rift",
   "Danger"
  ],
  "page": 327,
  "district": "forged_framed"
 },
 {
  "mythos": "Duat",
  "logos": null,
  "type": "Enclave (Extra Theme)",
  "kinds": [
   "Enclave",
   "Extra Theme"
  ],
  "page": 238,
  "district": "undertrash"
 },
 {
  "mythos": "Dullahan",
  "logos": "Campus security",
  "type": "Rift (Danger)",
  "kinds": [
   "Rift",
   "Danger"
  ],
  "page": 184,
  "district": "campus"
 },
 {
  "mythos": "Dweorgs",
  "logos": null,
  "type": "Conjuration",
  "kinds": [
   "Conjuration"
  ],
  "page": 244,
  "district": "undertrash"
 },
 {
  "mythos": "Egyptian Sed Festival",
  "logos": "Proving Path",
  "type": "Enclave",
  "kinds": [
   "Enclave"
  ],
  "page": 58,
  "district": "fortune_row"
 },
 {
  "mythos": "El Charro Negro",
  "logos": "Officer Edgar Martinez",
  "type": "Rift (Danger)",
  "kinds": [
   "Rift",
   "Danger"
  ],
  "page": 155,
  "district": "colonia_sombras"
 },
 {
  "mythos": "Encantados",
  "logos": "Night partygoers",
  "type": "Conjurations (Danger)",
  "kinds": [
   "Conjuration",
   "Danger"
  ],
  "page": 279,
  "district": "tourist_trap"
 },
 {
  "mythos": "Enjolras of Les Misérables",
  "logos": "Felicity Crawford",
  "type": "Rift",
  "kinds": [
   "Rift"
  ],
  "page": 267,
  "district": "tourist_trap"
 },
 {
  "mythos": "Erishkigal",
  "logos": "Yasmin Farhat",
  "type": "Rift (Danger)",
  "kinds": [
   "Rift",
   "Danger"
  ],
  "page": 245,
  "district": "undertrash"
 },
 {
  "mythos": "Euryale",
  "logos": "Mariana",
  "type": "Rift (Danger)",
  "kinds": [
   "Rift",
   "Danger"
  ],
  "page": 300,
  "district": "villains"
 },
 {
  "mythos": "Fagin’s Gang from Oliver Twist",
  "logos": "The Cheeky Kids",
  "type": "Rift (Danger)",
  "kinds": [
   "Rift",
   "Danger"
  ],
  "page": 272,
  "district": "tourist_trap"
 },
 {
  "mythos": "Fahai",
  "logos": "Jin Dao",
  "type": "Rift (Danger)",
  "kinds": [
   "Rift",
   "Danger"
  ],
  "page": 24,
  "district": "chinatown"
 },
 {
  "mythos": "Feng Shui",
  "logos": "The Snake",
  "type": "Enclave",
  "kinds": [
   "Enclave"
  ],
  "page": 52,
  "district": "fortune_row"
 },
 {
  "mythos": "Fenrir",
  "logos": "Stray dog",
  "type": "Familiar (Danger, power set, and Extra Theme)",
  "kinds": [
   "Familiar",
   "Extra Theme",
   "Danger",
   "Power Set"
  ],
  "page": 89,
  "district": "happyville"
 },
 {
  "mythos": "Fergus mac Róich",
  "logos": "Fionna Rortan",
  "type": "Rift (Danger)",
  "kinds": [
   "Rift",
   "Danger"
  ],
  "page": 249,
  "district": "undertrash"
 },
 {
  "mythos": "Flying Monkeys",
  "logos": null,
  "type": "Conjuration (Danger)",
  "kinds": [
   "Conjuration",
   "Danger"
  ],
  "page": 223,
  "district": "sunken_city"
 },
 {
  "mythos": "Fox spirits (Huli Jing)",
  "logos": null,
  "type": "Conjuration (Danger)",
  "kinds": [
   "Conjuration",
   "Danger"
  ],
  "page": 27,
  "district": "chinatown"
 },
 {
  "mythos": "Gallu",
  "logos": null,
  "type": "Conjuration (Danger)",
  "kinds": [
   "Conjuration",
   "Danger"
  ],
  "page": 230,
  "district": "sunken_city"
 },
 {
  "mythos": "Gemini",
  "logos": null,
  "type": "Conjuration (Danger)",
  "kinds": [
   "Conjuration",
   "Danger"
  ],
  "page": 55,
  "district": "fortune_row"
 },
 {
  "mythos": "Genie's lamp",
  "logos": "Brass lamp",
  "type": "Enclave (Extra Theme)",
  "kinds": [
   "Enclave",
   "Extra Theme"
  ],
  "page": 266,
  "district": "tourist_trap"
 },
 {
  "mythos": "Geppetto",
  "logos": "Walter Stephenson",
  "type": "Rift (Danger)",
  "kinds": [
   "Rift",
   "Danger"
  ],
  "page": 295,
  "district": "villains"
 },
 {
  "mythos": "Ghost Ship",
  "logos": "Eric “Phantom” Devere",
  "type": "Rift",
  "kinds": [
   "Rift"
  ],
  "page": 220,
  "district": "sunken_city"
 },
 {
  "mythos": "Giant’s Causeway",
  "logos": "Marsh O’Shaughnessy",
  "type": "Rift",
  "kinds": [
   "Rift"
  ],
  "page": 219,
  "district": "sunken_city"
 },
 {
  "mythos": "Glashtyn",
  "logos": null,
  "type": "Conjuration (Danger)",
  "kinds": [
   "Conjuration",
   "Danger"
  ],
  "page": 223,
  "district": "sunken_city"
 },
 {
  "mythos": "Gourd of Zhang Guolao",
  "logos": "Magical gourd",
  "type": "Relic",
  "kinds": [
   "Relic"
  ],
  "page": 19,
  "district": "chinatown"
 },
 {
  "mythos": "Gremlins",
  "logos": "Pickpockets",
  "type": "Touched (Danger)",
  "kinds": [
   "Danger"
  ],
  "page": 72,
  "district": "fortune_row"
 },
 {
  "mythos": "Grendel",
  "logos": "Jakub Grund",
  "type": "Rift (Danger)",
  "kinds": [
   "Rift",
   "Danger"
  ],
  "page": 247,
  "district": "undertrash"
 },
 {
  "mythos": "Grim Reaper",
  "logos": "Tidus Grave",
  "type": "Rift",
  "kinds": [
   "Rift"
  ],
  "page": 268,
  "district": "tourist_trap"
 },
 {
  "mythos": "Gumiho",
  "logos": "Pearl Hugao",
  "type": "Rift (Danger)",
  "kinds": [
   "Rift",
   "Danger"
  ],
  "page": 99,
  "district": "happyville"
 },
 {
  "mythos": "Hamlet",
  "logos": "Bryan Abduc",
  "type": "Rift",
  "kinds": [
   "Rift"
  ],
  "page": 92,
  "district": "happyville"
 },
 {
  "mythos": "Harriet Tubman",
  "logos": "B",
  "type": "Rift (Danger and Extra Theme)",
  "kinds": [
   "Rift",
   "Extra Theme",
   "Danger"
  ],
  "page": 133,
  "district": "independence"
 },
 {
  "mythos": "He Xiangu",
  "logos": "Lotus Turner-Lam",
  "type": "Rift",
  "kinds": [
   "Rift"
  ],
  "page": 29,
  "district": "chinatown"
 },
 {
  "mythos": "Headless Horseman",
  "logos": null,
  "type": "Conjuration",
  "kinds": [
   "Conjuration"
  ],
  "page": 93,
  "district": "happyville"
 },
 {
  "mythos": "Heibai Wuchang",
  "logos": "Ben Fong and Carol Mark",
  "type": "Rift (Danger) and Relic",
  "kinds": [
   "Rift",
   "Relic",
   "Danger"
  ],
  "page": 43,
  "district": "chinatown"
 },
 {
  "mythos": "Hel",
  "logos": "Ty Fairchilde",
  "type": "Rift (Danger)",
  "kinds": [
   "Rift",
   "Danger"
  ],
  "page": 278,
  "district": "tourist_trap"
 },
 {
  "mythos": "Hermes Trismegistus",
  "logos": "Vice Dean Monika Petrosyan",
  "type": "Rift",
  "kinds": [
   "Rift"
  ],
  "page": 181,
  "district": "campus"
 },
 {
  "mythos": "High John de Conqueror",
  "logos": "Isaiah “Zeke” William Bishop",
  "type": "Rift (Danger and Extra Theme)",
  "kinds": [
   "Rift",
   "Extra Theme",
   "Danger"
  ],
  "page": 130,
  "district": "independence"
 },
 {
  "mythos": "Hinthials",
  "logos": null,
  "type": "Conjuration (Danger)",
  "kinds": [
   "Conjuration",
   "Danger"
  ],
  "page": 251,
  "district": "undertrash"
 },
 {
  "mythos": "Hödeken house spirit",
  "logos": "Lilly the Mole",
  "type": "Familiar (Danger)",
  "kinds": [
   "Familiar",
   "Danger"
  ],
  "page": 185,
  "district": "campus"
 },
 {
  "mythos": "Hong Kong’s Dragon Lines",
  "logos": "Broken Streetcar Lines",
  "type": "Enclave",
  "kinds": [
   "Enclave"
  ],
  "page": 240,
  "district": "undertrash"
 },
 {
  "mythos": "Huitzilopochtli",
  "logos": "Erica Garza / La Colibrí",
  "type": "Rift",
  "kinds": [
   "Rift"
  ],
  "page": 156,
  "district": "colonia_sombras"
 },
 {
  "mythos": "Huld",
  "logos": "Dr. Joachim Dement",
  "type": "Rift (Danger)",
  "kinds": [
   "Rift",
   "Danger"
  ],
  "page": 104,
  "district": "happyville"
 },
 {
  "mythos": "I-Yun",
  "logos": null,
  "type": "Conjuration (Danger)",
  "kinds": [
   "Conjuration",
   "Danger"
  ],
  "page": 22,
  "district": "chinatown"
 },
 {
  "mythos": "Iris",
  "logos": "Veronica Covel",
  "type": "Rift",
  "kinds": [
   "Rift"
  ],
  "page": 267,
  "district": "tourist_trap"
 },
 {
  "mythos": "Itzpapalotl",
  "logos": "Xochitl Rodríguez",
  "type": "Rift (Danger)",
  "kinds": [
   "Rift",
   "Danger"
  ],
  "page": 166,
  "district": "colonia_sombras"
 },
 {
  "mythos": "Jackalope",
  "logos": "Skateboarders",
  "type": "Rift (Danger)",
  "kinds": [
   "Rift",
   "Danger"
  ],
  "page": 280,
  "district": "tourist_trap"
 },
 {
  "mythos": "Jiangshi",
  "logos": null,
  "type": "Conjuration (Danger)",
  "kinds": [
   "Conjuration",
   "Danger"
  ],
  "page": 31,
  "district": "chinatown"
 },
 {
  "mythos": "John Henry",
  "logos": "Professor Myrna Walker",
  "type": "Rift (Danger and Extra Theme)",
  "kinds": [
   "Rift",
   "Extra Theme",
   "Danger"
  ],
  "page": 131,
  "district": "independence"
 },
 {
  "mythos": "Justice Bao",
  "logos": "Kent Leong",
  "type": "Rift (Danger)",
  "kinds": [
   "Rift",
   "Danger"
  ],
  "page": 27,
  "district": "chinatown"
 },
 {
  "mythos": "Justice tarot card",
  "logos": "Statue of Justice",
  "type": "Relic (Danger)",
  "kinds": [
   "Relic",
   "Danger"
  ],
  "page": 80,
  "district": "fortune_row"
 },
 {
  "mythos": "Kheprit",
  "logos": "Kheprit",
  "type": "Relic",
  "kinds": [
   "Relic"
  ],
  "page": 206,
  "district": "sunken_city"
 },
 {
  "mythos": "King Eurystheus",
  "logos": "Victor Mordecai",
  "type": "Rift (Danger)",
  "kinds": [
   "Rift",
   "Danger"
  ],
  "page": 282,
  "district": "tourist_trap"
 },
 {
  "mythos": "King Gradlon",
  "logos": null,
  "type": "Extra Theme",
  "kinds": [
   "Extra Theme"
  ],
  "page": 209,
  "district": "sunken_city"
 },
 {
  "mythos": "King Midas",
  "logos": "Harold Levitz",
  "type": "Rift (Danger)",
  "kinds": [
   "Rift",
   "Danger"
  ],
  "page": 271,
  "district": "tourist_trap"
 },
 {
  "mythos": "King Nimrod",
  "logos": "Jaclyn Shinar",
  "type": "Rift",
  "kinds": [
   "Rift"
  ],
  "page": 269,
  "district": "tourist_trap"
 },
 {
  "mythos": "King Sinhabahu",
  "logos": "The Lion's Head",
  "type": "Relic (Extra Theme)",
  "kinds": [
   "Relic",
   "Extra Theme"
  ],
  "page": 173,
  "district": "campus"
 },
 {
  "mythos": "King Tereus",
  "logos": "King Gull",
  "type": "Familiar (Danger)",
  "kinds": [
   "Familiar",
   "Danger"
  ],
  "page": 275,
  "district": "tourist_trap"
 },
 {
  "mythos": "Kraken",
  "logos": null,
  "type": "Familiar (Extra Theme)",
  "kinds": [
   "Familiar",
   "Extra Theme"
  ],
  "page": 233,
  "district": "sunken_city"
 },
 {
  "mythos": "Krsnik the vampire hunter",
  "logos": "Shayanne Foster",
  "type": "Rift",
  "kinds": [
   "Rift"
  ],
  "page": 105,
  "district": "happyville"
 },
 {
  "mythos": "Kujata",
  "logos": null,
  "type": "Familiar",
  "kinds": [
   "Familiar"
  ],
  "page": 212,
  "district": "sunken_city"
 },
 {
  "mythos": "Kukulkan",
  "logos": "Águila de Plata",
  "type": "Rift (PC, Danger, and Extra Theme)",
  "kinds": [
   "Rift",
   "Extra Theme",
   "Danger"
  ],
  "page": 153,
  "district": "colonia_sombras"
 },
 {
  "mythos": "La Llorona",
  "logos": "City river",
  "type": "Enclave",
  "kinds": [
   "Enclave"
  ],
  "page": 150,
  "district": "colonia_sombras"
 },
 {
  "mythos": "Lady Luck",
  "logos": null,
  "type": "Conjuration (Extra Theme)",
  "kinds": [
   "Conjuration",
   "Extra Theme"
  ],
  "page": 51,
  "district": "fortune_row"
 },
 {
  "mythos": "Leifeng Pagoda",
  "logos": "Crane City Parking Garage",
  "type": "Enclave",
  "kinds": [
   "Enclave"
  ],
  "page": 24,
  "district": "chinatown"
 },
 {
  "mythos": "Lernean Hydra",
  "logos": null,
  "type": "Conjuration (Danger)",
  "kinds": [
   "Conjuration",
   "Danger"
  ],
  "page": 288,
  "district": "tourist_trap"
 },
 {
  "mythos": "Leviathan",
  "logos": null,
  "type": "Familiar (Danger)",
  "kinds": [
   "Familiar",
   "Danger"
  ],
  "page": 212,
  "district": "sunken_city"
 },
 {
  "mythos": "Library of Alexandria",
  "logos": "Mrs. Meyer",
  "type": "Rift",
  "kinds": [
   "Rift"
  ],
  "page": 174,
  "district": "campus"
 },
 {
  "mythos": "Lighthouse of Alexandria",
  "logos": "Clockwork Lighthouse",
  "type": "Enclave",
  "kinds": [
   "Enclave"
  ],
  "page": 209,
  "district": "sunken_city"
 },
 {
  "mythos": "Little John",
  "logos": "Juanito",
  "type": "Rift (Danger)",
  "kinds": [
   "Rift",
   "Danger"
  ],
  "page": 312,
  "district": "villains"
 },
 {
  "mythos": "Little Red Riding Hood",
  "logos": "Scarlet",
  "type": "Rift",
  "kinds": [
   "Rift"
  ],
  "page": 100,
  "district": "happyville"
 },
 {
  "mythos": "Loch Ness Monster",
  "logos": "Lynch",
  "type": "Rift",
  "kinds": [
   "Rift"
  ],
  "page": 218,
  "district": "sunken_city"
 },
 {
  "mythos": "Lost Boy's Hideout",
  "logos": "Rehearsal Space",
  "type": "Enclave (Extra Theme)",
  "kinds": [
   "Enclave",
   "Extra Theme"
  ],
  "page": 173,
  "district": "campus"
 },
 {
  "mythos": "Lü Dongbin",
  "logos": "Hui Bian",
  "type": "Rift",
  "kinds": [
   "Rift"
  ],
  "page": 42,
  "district": "chinatown"
 },
 {
  "mythos": "Lucky Horseshoe",
  "logos": "Nash Heynes",
  "type": "Rift (Danger)",
  "kinds": [
   "Rift",
   "Danger"
  ],
  "page": 60,
  "district": "fortune_row"
 },
 {
  "mythos": "Lugh the Smith",
  "logos": "Luke Ward",
  "type": "Rift",
  "kinds": [
   "Rift"
  ],
  "page": 64,
  "district": "fortune_row"
 },
 {
  "mythos": "Ma Liang of the Magic Paintbrush",
  "logos": "Isaiah Colm",
  "type": "Rift (Extra Theme)",
  "kinds": [
   "Rift",
   "Extra Theme"
  ],
  "page": 30,
  "district": "chinatown"
 },
 {
  "mythos": "Macuahuitl",
  "logos": "Baseball bat",
  "type": "Relic (Extra Theme)",
  "kinds": [
   "Relic",
   "Extra Theme"
  ],
  "page": 148,
  "district": "colonia_sombras"
 },
 {
  "mythos": "Maenad",
  "logos": "Bud",
  "type": "Rift (Danger)",
  "kinds": [
   "Rift",
   "Danger"
  ],
  "page": 178,
  "district": "campus"
 },
 {
  "mythos": "Magh Meall",
  "logos": "Seaglass Lounge and Club",
  "type": "Enclave",
  "kinds": [
   "Enclave"
  ],
  "page": 58,
  "district": "fortune_row"
 },
 {
  "mythos": "Maid Marian",
  "logos": "St. Marian’s Shelter",
  "type": "Enclave",
  "kinds": [
   "Enclave"
  ],
  "page": 311,
  "district": "villains"
 },
 {
  "mythos": "Makara",
  "logos": null,
  "type": "Conjuration (Danger)",
  "kinds": [
   "Conjuration",
   "Danger"
  ],
  "page": 223,
  "district": "sunken_city"
 },
 {
  "mythos": "Maneki-neko",
  "logos": "Fortune cats",
  "type": "Familiar (Danger)",
  "kinds": [
   "Familiar",
   "Danger"
  ],
  "page": 73,
  "district": "fortune_row"
 },
 {
  "mythos": "Mani Wheels",
  "logos": "Mani Wheels",
  "type": "Relic",
  "kinds": [
   "Relic"
  ],
  "page": 80,
  "district": "fortune_row"
 },
 {
  "mythos": "Manny Lerman",
  "logos": "Manannan mac Lir",
  "type": "Rift (Extra Theme)",
  "kinds": [
   "Rift",
   "Extra Theme"
  ],
  "page": 60,
  "district": "fortune_row"
 },
 {
  "mythos": "Mara",
  "logos": null,
  "type": "Conjuration (Danger)",
  "kinds": [
   "Conjuration",
   "Danger"
  ],
  "page": 113,
  "district": "happyville"
 },
 {
  "mythos": "Mark of Cain",
  "logos": "Shadowy corners",
  "type": "Enclave",
  "kinds": [
   "Enclave"
  ],
  "page": 244,
  "district": "undertrash"
 },
 {
  "mythos": "Mars, astrological body",
  "logos": null,
  "type": null,
  "kinds": [],
  "page": 53,
  "district": "fortune_row"
 },
 {
  "mythos": "Maui",
  "logos": "Maui",
  "type": "Rift (Danger)",
  "kinds": [
   "Rift",
   "Danger"
  ],
  "page": 214,
  "district": "sunken_city"
 },
 {
  "mythos": "Mayahuel",
  "logos": "Octavio Obregón",
  "type": "Rift",
  "kinds": [
   "Rift"
  ],
  "page": 149,
  "district": "colonia_sombras"
 },
 {
  "mythos": "Mayasabha",
  "logos": "Cresent Moon Drive-in Theater",
  "type": "Enclave",
  "kinds": [
   "Enclave"
  ],
  "page": 94,
  "district": "happyville"
 },
 {
  "mythos": "Mayasura",
  "logos": "Sammy Silver",
  "type": "Rift",
  "kinds": [
   "Rift"
  ],
  "page": 94,
  "district": "happyville"
 },
 {
  "mythos": "Medusa",
  "logos": "Madeline Moretti",
  "type": "Rift (Danger)",
  "kinds": [
   "Rift",
   "Danger"
  ],
  "page": 299,
  "district": "villains"
 },
 {
  "mythos": "Menhir",
  "logos": null,
  "type": "Relic (Danger)",
  "kinds": [
   "Relic",
   "Danger"
  ],
  "page": 252,
  "district": "undertrash"
 },
 {
  "mythos": "Mermaids",
  "logos": null,
  "type": "Rift (Danger)",
  "kinds": [
   "Rift",
   "Danger"
  ],
  "page": 221,
  "district": "sunken_city"
 },
 {
  "mythos": "Merry Men",
  "logos": "St. Marian's shelter residents",
  "type": "Touched",
  "kinds": [],
  "page": 310,
  "district": "villains"
 },
 {
  "mythos": "Mictēcacihuātl",
  "logos": "Maria Finando",
  "type": "Rift (Danger)",
  "kinds": [
   "Rift",
   "Danger"
  ],
  "page": 248,
  "district": "undertrash"
 },
 {
  "mythos": "Mictlān",
  "logos": "Shattered Bones and Marrow-dens",
  "type": "Enclave",
  "kinds": [
   "Enclave"
  ],
  "page": 243,
  "district": "undertrash"
 },
 {
  "mythos": "Mictlāntēcutli",
  "logos": "Miguel Finando",
  "type": "Rift (Danger)",
  "kinds": [
   "Rift",
   "Danger"
  ],
  "page": 248,
  "district": "undertrash"
 },
 {
  "mythos": "Mimir",
  "logos": "Manny Bruner",
  "type": "Rift (Danger)",
  "kinds": [
   "Rift",
   "Danger"
  ],
  "page": 326,
  "district": "forged_framed"
 },
 {
  "mythos": "Min Min Lights",
  "logos": "Mica",
  "type": "Rift (Danger)",
  "kinds": [
   "Rift",
   "Danger"
  ],
  "page": 322,
  "district": "forged_framed"
 },
 {
  "mythos": "Mississippian culture earthworks",
  "logos": "Serpent Hills",
  "type": "Enclave",
  "kinds": [
   "Enclave"
  ],
  "page": 243,
  "district": "undertrash"
 },
 {
  "mythos": "Mithras",
  "logos": "Marcus Romsia",
  "type": "Rift (Danger)",
  "kinds": [
   "Rift",
   "Danger"
  ],
  "page": 246,
  "district": "undertrash"
 },
 {
  "mythos": "Mitla",
  "logos": "Gateway tunnels",
  "type": "Enclave (Extra Theme)",
  "kinds": [
   "Enclave",
   "Extra Theme"
  ],
  "page": 149,
  "district": "colonia_sombras"
 },
 {
  "mythos": "Morlocks",
  "logos": null,
  "type": "Conjuration (Danger)",
  "kinds": [
   "Conjuration",
   "Danger"
  ],
  "page": 208,
  "district": "sunken_city"
 },
 {
  "mythos": "Moscow’s Metro-2",
  "logos": "Broken Streetcar Lines",
  "type": "Enclave",
  "kinds": [
   "Enclave"
  ],
  "page": 240,
  "district": "undertrash"
 },
 {
  "mythos": "Mount Buzhou",
  "logos": "Chinatown Gate",
  "type": "Relic",
  "kinds": [
   "Relic"
  ],
  "page": 16,
  "district": "chinatown"
 },
 {
  "mythos": "Mount Kailash",
  "logos": "Trident Mk I",
  "type": "Relic",
  "kinds": [
   "Relic"
  ],
  "page": 92,
  "district": "happyville"
 },
 {
  "mythos": "Nemean Lion",
  "logos": null,
  "type": "Conjuration (Danger)",
  "kinds": [
   "Conjuration",
   "Danger"
  ],
  "page": 286,
  "district": "tourist_trap"
 },
 {
  "mythos": "Nereids",
  "logos": "Fish",
  "type": "Conjuration (Extra Theme)",
  "kinds": [
   "Conjuration",
   "Extra Theme"
  ],
  "page": 266,
  "district": "tourist_trap"
 },
 {
  "mythos": "Nergal",
  "logos": "Nathan Ergal",
  "type": "Rift (Danger and Extra Theme)",
  "kinds": [
   "Rift",
   "Extra Theme",
   "Danger"
  ],
  "page": 247,
  "district": "undertrash"
 },
 {
  "mythos": "Net of Rán",
  "logos": "Fishing net",
  "type": "Relic (Extra Theme)",
  "kinds": [
   "Relic",
   "Extra Theme"
  ],
  "page": 266,
  "district": "tourist_trap"
 },
 {
  "mythos": "New Palace Seafood House",
  "logos": "Longwang’s Undersea Palace",
  "type": "Enclave",
  "kinds": [
   "Enclave"
  ],
  "page": 18,
  "district": "chinatown"
 },
 {
  "mythos": "Niðavellir",
  "logos": null,
  "type": "Enclave (Extra Theme)",
  "kinds": [
   "Enclave",
   "Extra Theme"
  ],
  "page": 244,
  "district": "undertrash"
 },
 {
  "mythos": "Nko’o",
  "logos": "Nko’o",
  "type": "Rift",
  "kinds": [
   "Rift"
  ],
  "page": 220,
  "district": "sunken_city"
 },
 {
  "mythos": "Noahic Covenant",
  "logos": "Deal Broadcasting Network",
  "type": "Relic",
  "kinds": [
   "Relic"
  ],
  "page": 96,
  "district": "happyville"
 },
 {
  "mythos": "Nyavka",
  "logos": "Staff at Big Wave Water Adventure Park",
  "type": "Conjuration (Danger)",
  "kinds": [
   "Conjuration",
   "Danger"
  ],
  "page": 270,
  "district": "tourist_trap"
 },
 {
  "mythos": "Ollamalīztli",
  "logos": "Unidos Stadium",
  "type": "Enclave",
  "kinds": [
   "Enclave"
  ],
  "page": 150,
  "district": "colonia_sombras"
 },
 {
  "mythos": "Once in a Blue Moon",
  "logos": "Diana Chandler",
  "type": "Rift (Danger)",
  "kinds": [
   "Rift",
   "Danger"
  ],
  "page": 101,
  "district": "happyville"
 },
 {
  "mythos": "Ophiuchus",
  "logos": "Mr. Yukes",
  "type": "Conjuration (Danger)",
  "kinds": [
   "Conjuration",
   "Danger"
  ],
  "page": 72,
  "district": "fortune_row"
 },
 {
  "mythos": "Orchard of Immortal Peaches",
  "logos": "Walled off garden",
  "type": "Enclave",
  "kinds": [
   "Enclave"
  ],
  "page": 21,
  "district": "chinatown"
 },
 {
  "mythos": "Orcus",
  "logos": null,
  "type": "Extra Theme",
  "kinds": [
   "Extra Theme"
  ],
  "page": 238,
  "district": "undertrash"
 },
 {
  "mythos": "Orpheus",
  "logos": "Abandoned instrument",
  "type": "Relic (Extra Theme)",
  "kinds": [
   "Relic",
   "Extra Theme"
  ],
  "page": 239,
  "district": "undertrash"
 },
 {
  "mythos": "Ouroboros",
  "logos": "Ever",
  "type": "Rift",
  "kinds": [
   "Rift"
  ],
  "page": 29,
  "district": "chinatown"
 },
 {
  "mythos": "Palace of Ys",
  "logos": null,
  "type": "Enclave",
  "kinds": [
   "Enclave"
  ],
  "page": 209,
  "district": "sunken_city"
 },
 {
  "mythos": "Pandora’s Box",
  "logos": "Jewelry box",
  "type": "Relic (Danger)",
  "kinds": [
   "Relic",
   "Danger"
  ],
  "page": 328,
  "district": "forged_framed"
 },
 {
  "mythos": "Panlong",
  "logos": "Racing boat",
  "type": "Relic (Extra Theme)",
  "kinds": [
   "Relic",
   "Extra Theme"
  ],
  "page": 22,
  "district": "chinatown"
 },
 {
  "mythos": "Papa Legba",
  "logos": "LeVar Baptiste",
  "type": "Rift (Danger)",
  "kinds": [
   "Rift",
   "Danger"
  ],
  "page": 180,
  "district": "campus"
 },
 {
  "mythos": "Pegasus",
  "logos": "Feathered clothing",
  "type": "Relic (power set)",
  "kinds": [
   "Relic",
   "Power Set"
  ],
  "page": 283,
  "district": "tourist_trap"
 },
 {
  "mythos": "People of Nottingham",
  "logos": "St. Marien's shelter staff",
  "type": "Touched",
  "kinds": [],
  "page": 311,
  "district": "villains"
 },
 {
  "mythos": "Peryton",
  "logos": "Feathered clothing",
  "type": "Relic (power set)",
  "kinds": [
   "Relic",
   "Power Set"
  ],
  "page": 283,
  "district": "tourist_trap"
 },
 {
  "mythos": "Prince John",
  "logos": "Prince Industries LLC",
  "type": "Enclave",
  "kinds": [
   "Enclave"
  ],
  "page": 311,
  "district": "villains"
 },
 {
  "mythos": "Princess Dahut",
  "logos": "Morvleiz",
  "type": "Rift (Danger)",
  "kinds": [
   "Rift",
   "Danger"
  ],
  "page": 220,
  "district": "sunken_city"
 },
 {
  "mythos": "Professor Moriarty",
  "logos": "Dr. Quincy William Reid",
  "type": "Rift (Danger)",
  "kinds": [
   "Rift",
   "Danger"
  ],
  "page": 182,
  "district": "campus"
 },
 {
  "mythos": "Professor Moriarty",
  "logos": "Quincy William Reid",
  "type": "Rift (Danger)",
  "kinds": [
   "Rift",
   "Danger"
  ],
  "page": 182,
  "district": "campus"
 },
 {
  "mythos": "Prospero",
  "logos": "Peter Oberst",
  "type": "Rift",
  "kinds": [
   "Rift"
  ],
  "page": 276,
  "district": "tourist_trap"
 },
 {
  "mythos": "Pulao Dragon",
  "logos": "Temple Bell Dragon",
  "type": "Relic (Power Set)",
  "kinds": [
   "Relic"
  ],
  "page": 19,
  "district": "chinatown"
 },
 {
  "mythos": "Puss in Boots",
  "logos": "Mervyn",
  "type": "Rift (Extra theme)",
  "kinds": [
   "Rift"
  ],
  "page": 65,
  "district": "fortune_row"
 },
 {
  "mythos": "Queen Mab",
  "logos": "Marlene Renner",
  "type": "Rift (Danger)",
  "kinds": [
   "Rift",
   "Danger"
  ],
  "page": 273,
  "district": "tourist_trap"
 },
 {
  "mythos": "Robin Hood",
  "logos": "Laura Cowle",
  "type": "Rift (Danger)",
  "kinds": [
   "Rift",
   "Danger"
  ],
  "page": 312,
  "district": "villains"
 },
 {
  "mythos": "Robur of Jules Verne’s stories",
  "logos": "Mathis",
  "type": "Rift",
  "kinds": [
   "Rift"
  ],
  "page": 219,
  "district": "sunken_city"
 },
 {
  "mythos": "Ruozhi",
  "logos": "Animal-like mushrooms",
  "type": "Familiar (Power Set)",
  "kinds": [
   "Familiar"
  ],
  "page": 33,
  "district": "chinatown"
 },
 {
  "mythos": "Sacred geometry",
  "logos": "Snow Trail",
  "type": "Enclave",
  "kinds": [
   "Enclave"
  ],
  "page": 176,
  "district": "campus"
 },
 {
  "mythos": "Samba the Coward",
  "logos": "Janet Adesiyan",
  "type": "Rift",
  "kinds": [
   "Rift"
  ],
  "page": 138,
  "district": "independence"
 },
 {
  "mythos": "Saturn, astrological body",
  "logos": null,
  "type": null,
  "kinds": [],
  "page": 53,
  "district": "fortune_row"
 },
 {
  "mythos": "Scorpio",
  "logos": null,
  "type": "Conjuration (Danger)",
  "kinds": [
   "Conjuration",
   "Danger"
  ],
  "page": 54,
  "district": "fortune_row"
 },
 {
  "mythos": "Scylla and Charybdis",
  "logos": "Dockyard crane and sewer drain",
  "type": "Enclave (Danger)",
  "kinds": [
   "Enclave",
   "Danger"
  ],
  "page": 204,
  "district": "sunken_city"
 },
 {
  "mythos": "Sha Wujing",
  "logos": "Frederic “Sandy” Chen",
  "type": "Rift (Danger)",
  "kinds": [
   "Rift",
   "Danger"
  ],
  "page": 29,
  "district": "chinatown"
 },
 {
  "mythos": "Shamash",
  "logos": "The Spire",
  "type": "Relic",
  "kinds": [
   "Relic"
  ],
  "page": 269,
  "district": "tourist_trap"
 },
 {
  "mythos": "Shango, the Orisha of power",
  "logos": "Stormbringer cops",
  "type": "Touched (Danger)",
  "kinds": [
   "Danger"
  ],
  "page": 318,
  "district": "forged_framed"
 },
 {
  "mythos": "Shapeshifting Dragon Shen",
  "logos": null,
  "type": "Conjuration (Danger)",
  "kinds": [
   "Conjuration",
   "Danger"
  ],
  "page": 32,
  "district": "chinatown"
 },
 {
  "mythos": "Shennong",
  "logos": "The Teamaker",
  "type": "Rift (Danger)",
  "kinds": [
   "Rift",
   "Danger"
  ],
  "page": 38,
  "district": "chinatown"
 },
 {
  "mythos": "Sheriff of Nottingham",
  "logos": "Julian Northing",
  "type": "Rift (Danger)",
  "kinds": [
   "Rift",
   "Danger"
  ],
  "page": 313,
  "district": "villains"
 },
 {
  "mythos": "Ship of Theseus",
  "logos": "Briarhurst University",
  "type": "Enclave",
  "kinds": [
   "Enclave"
  ],
  "page": 171,
  "district": "campus"
 },
 {
  "mythos": "Ship of Theseus boatswain",
  "logos": "Officer Tyson",
  "type": "Rift",
  "kinds": [
   "Rift"
  ],
  "page": 180,
  "district": "campus"
 },
 {
  "mythos": "Shiva",
  "logos": "Dr. Satya Lazuli",
  "type": "Avatar",
  "kinds": [
   "Avatar"
  ],
  "page": 86,
  "district": "happyville"
 },
 {
  "mythos": "Sinbad",
  "logos": "Farida Jalal",
  "type": "Rift (Danger)",
  "kinds": [
   "Rift",
   "Danger"
  ],
  "page": 307,
  "district": "villains"
 },
 {
  "mythos": "Sirens",
  "logos": "Danny Olecette",
  "type": "Rift",
  "kinds": [
   "Rift"
  ],
  "page": 268,
  "district": "tourist_trap"
 },
 {
  "mythos": "Sisyphus",
  "logos": "Yaya Ocabe",
  "type": "Rift",
  "kinds": [
   "Rift"
  ],
  "page": 215,
  "district": "sunken_city"
 },
 {
  "mythos": "Sleeping Beauty",
  "logos": "Colette Jenkins",
  "type": "Rift",
  "kinds": [
   "Rift"
  ],
  "page": 91,
  "district": "happyville"
 },
 {
  "mythos": "Spider Woman",
  "logos": "Thelma",
  "type": "Rift",
  "kinds": [
   "Rift"
  ],
  "page": 114,
  "district": "happyville"
 },
 {
  "mythos": "Stheno",
  "logos": "Angelica",
  "type": "Rift (Danger)",
  "kinds": [
   "Rift",
   "Danger"
  ],
  "page": 299,
  "district": "villains"
 },
 {
  "mythos": "Stoor Worm",
  "logos": null,
  "type": "Familiar (Extra Theme)",
  "kinds": [
   "Familiar",
   "Extra Theme"
  ],
  "page": 233,
  "district": "sunken_city"
 },
 {
  "mythos": "Sun Tzu",
  "logos": null,
  "type": null,
  "kinds": [],
  "page": 24,
  "district": "chinatown"
 },
 {
  "mythos": "Sweeney Todd",
  "logos": "Chef Matilda Renoix",
  "type": "Rift",
  "kinds": [
   "Rift"
  ],
  "page": 267,
  "district": "tourist_trap"
 },
 {
  "mythos": "Sword of Damocles",
  "logos": "Ornate pen",
  "type": "Relic (Extra Theme)",
  "kinds": [
   "Relic",
   "Extra Theme"
  ],
  "page": 88,
  "district": "happyville"
 },
 {
  "mythos": "Taautus",
  "logos": "Thalia Babbage",
  "type": "Rift (Extra Theme)",
  "kinds": [
   "Rift",
   "Extra Theme"
  ],
  "page": 222,
  "district": "sunken_city"
 },
 {
  "mythos": "Tablet of Destinies",
  "logos": "Lel",
  "type": "Rift (Danger)",
  "kinds": [
   "Rift",
   "Danger"
  ],
  "page": 234,
  "district": "sunken_city"
 },
 {
  "mythos": "Tabula Rogeriana",
  "logos": "The Map Room",
  "type": "Enclave",
  "kinds": [
   "Enclave"
  ],
  "page": 240,
  "district": "undertrash"
 },
 {
  "mythos": "Taotie",
  "logos": "Raccoons",
  "type": "Familiar (Danger)",
  "kinds": [
   "Familiar",
   "Danger"
  ],
  "page": 32,
  "district": "chinatown"
 },
 {
  "mythos": "Tech Duinn",
  "logos": "The Breaker Rocks",
  "type": "Enclave",
  "kinds": [
   "Enclave"
  ],
  "page": 269,
  "district": "tourist_trap"
 },
 {
  "mythos": "Tehom",
  "logos": "The Abyss",
  "type": "Enclave",
  "kinds": [
   "Enclave"
  ],
  "page": 212,
  "district": "sunken_city"
 },
 {
  "mythos": "Tepeyollotl",
  "logos": "Alma Espinoza",
  "type": "Rift (Danger)",
  "kinds": [
   "Rift",
   "Danger"
  ],
  "page": 154,
  "district": "colonia_sombras"
 },
 {
  "mythos": "Terra Australis",
  "logos": "The Farthest Dome",
  "type": "Enclave",
  "kinds": [
   "Enclave"
  ],
  "page": 211,
  "district": "sunken_city"
 },
 {
  "mythos": "Tezcatlipoca",
  "logos": "Javier “Tío Tez” Gutiérrez",
  "type": "Rift (Danger)",
  "kinds": [
   "Rift",
   "Danger"
  ],
  "page": 152,
  "district": "colonia_sombras"
 },
 {
  "mythos": "The Chains",
  "logos": null,
  "type": "Conjuration (Danger)",
  "kinds": [
   "Conjuration",
   "Danger"
  ],
  "page": 137,
  "district": "independence"
 },
 {
  "mythos": "The Crux",
  "logos": "Mandla Klerck",
  "type": "Rift",
  "kinds": [
   "Rift"
  ],
  "page": 53,
  "district": "fortune_row"
 },
 {
  "mythos": "The Devil's Own Luck",
  "logos": "Hellfire dice",
  "type": "Relic (Extra Theme)",
  "kinds": [
   "Relic",
   "Extra Theme"
  ],
  "page": 50,
  "district": "fortune_row"
 },
 {
  "mythos": "The Fox of Aesop’s Tales",
  "logos": "\"Diamond\", Tabitha Nassar",
  "type": "Rift (Extra Theme)",
  "kinds": [
   "Rift",
   "Extra Theme"
  ],
  "page": 65,
  "district": "fortune_row"
 },
 {
  "mythos": "The Kitchen God",
  "logos": "Tom Huang",
  "type": "Rift (Extra Theme)",
  "kinds": [
   "Rift",
   "Extra Theme"
  ],
  "page": 18,
  "district": "chinatown"
 },
 {
  "mythos": "The Knuckler",
  "logos": "The Lurker",
  "type": "Familiar",
  "kinds": [
   "Familiar"
  ],
  "page": 135,
  "district": "independence"
 },
 {
  "mythos": "The Lone Ranger",
  "logos": "Captain Jacob Reeves",
  "type": "Rift (Danger and Extra Theme)",
  "kinds": [
   "Rift",
   "Extra Theme",
   "Danger"
  ],
  "page": 132,
  "district": "independence"
 },
 {
  "mythos": "The Maya",
  "logos": "Nuclear Silo",
  "type": "Enclave",
  "kinds": [
   "Enclave"
  ],
  "page": 96,
  "district": "happyville"
 },
 {
  "mythos": "The Moon tarot card",
  "logos": "Chantal Willems",
  "type": "Rift (Danger)",
  "kinds": [
   "Rift",
   "Danger"
  ],
  "page": 74,
  "district": "fortune_row"
 },
 {
  "mythos": "The North, West and East Winds",
  "logos": "The Three Nameless Brothers",
  "type": "Rift",
  "kinds": [
   "Rift"
  ],
  "page": 216,
  "district": "sunken_city"
 },
 {
  "mythos": "The Rat Race",
  "logos": "Nest/Dennis Jones",
  "type": "Familiar (Extra Theme)",
  "kinds": [
   "Familiar",
   "Extra Theme"
  ],
  "page": 98,
  "district": "happyville"
 },
 {
  "mythos": "The Raven, by Edgar Allen Poe",
  "logos": null,
  "type": "Conjuration (Danger)",
  "kinds": [
   "Conjuration",
   "Danger"
  ],
  "page": 185,
  "district": "campus"
 },
 {
  "mythos": "The River Lethe",
  "logos": "Never “Eva” There",
  "type": "Rift (Danger)",
  "kinds": [
   "Rift",
   "Danger"
  ],
  "page": 328,
  "district": "forged_framed"
 },
 {
  "mythos": "The White Rabbit (Alice In Wonderland)",
  "logos": "Andrei Dalca",
  "type": "Rift (Danger)",
  "kinds": [
   "Rift",
   "Danger"
  ],
  "page": 74,
  "district": "fortune_row"
 },
 {
  "mythos": "The Wild Card",
  "logos": "Xaviar Perez",
  "type": "Rift (Danger)",
  "kinds": [
   "Rift",
   "Danger"
  ],
  "page": 59,
  "district": "fortune_row"
 },
 {
  "mythos": "The Wild Hunt",
  "logos": "The High Riders",
  "type": "Rift (Danger)",
  "kinds": [
   "Rift",
   "Danger"
  ],
  "page": 316,
  "district": "forged_framed"
 },
 {
  "mythos": "The World's Oldest Profession",
  "logos": "Madame Bellweather",
  "type": "Rift (Danger)",
  "kinds": [
   "Rift",
   "Danger"
  ],
  "page": 63,
  "district": "fortune_row"
 },
 {
  "mythos": "The Zorya Sisters",
  "logos": "The Zorya Sisters",
  "type": "Rift",
  "kinds": [
   "Rift"
  ],
  "page": 216,
  "district": "sunken_city"
 },
 {
  "mythos": "Thiasus",
  "logos": "Members of House Thiasus",
  "type": "Touched",
  "kinds": [],
  "page": 177,
  "district": "campus"
 },
 {
  "mythos": "Tiger Demons",
  "logos": "Alvin and Hugh Song",
  "type": "Rift (Danger)",
  "kinds": [
   "Rift",
   "Danger"
  ],
  "page": 28,
  "district": "chinatown"
 },
 {
  "mythos": "Tikbalang",
  "logos": "Agent Malcolm Dire",
  "type": "Rift (Danger)",
  "kinds": [
   "Rift",
   "Danger"
  ],
  "page": 221,
  "district": "sunken_city"
 },
 {
  "mythos": "Tlālōcān",
  "logos": "Dolores Huerta High School",
  "type": "Enclave",
  "kinds": [
   "Enclave"
  ],
  "page": 149,
  "district": "colonia_sombras"
 },
 {
  "mythos": "Troglodytes",
  "logos": "Residents of the warrens",
  "type": "Rift (Danger)",
  "kinds": [
   "Rift",
   "Danger"
  ],
  "page": 241,
  "district": "undertrash"
 },
 {
  "mythos": "Tzitzimimeh",
  "logos": null,
  "type": "Conjuration (Danger)",
  "kinds": [
   "Conjuration",
   "Danger"
  ],
  "page": 159,
  "district": "colonia_sombras"
 },
 {
  "mythos": "Ukupanipo",
  "logos": "Old Man Keola",
  "type": "Rift (Danger)",
  "kinds": [
   "Rift",
   "Danger"
  ],
  "page": 210,
  "district": "sunken_city"
 },
 {
  "mythos": "Uncle Monday",
  "logos": "Denny Hodges",
  "type": "Rift (Danger and Extra Theme)",
  "kinds": [
   "Rift",
   "Extra Theme",
   "Danger"
  ],
  "page": 136,
  "district": "independence"
 },
 {
  "mythos": "Urania, Muse of Astronomy",
  "logos": "Stella Roi",
  "type": "Rift (Danger)",
  "kinds": [
   "Rift",
   "Danger"
  ],
  "page": 183,
  "district": "campus"
 },
 {
  "mythos": "Valhalla",
  "logos": "Champions Esports Arena",
  "type": "Enclave",
  "kinds": [
   "Enclave"
  ],
  "page": 57,
  "district": "fortune_row"
 },
 {
  "mythos": "Venus Figurine",
  "logos": "Maia Greene",
  "type": "Rift",
  "kinds": [
   "Rift"
  ],
  "page": 250,
  "district": "undertrash"
 },
 {
  "mythos": "Venus, astrological body",
  "logos": null,
  "type": null,
  "kinds": [],
  "page": 53,
  "district": "fortune_row"
 },
 {
  "mythos": "Voynich manuscript",
  "logos": "Unnamed codex",
  "type": "Relic",
  "kinds": [
   "Relic"
  ],
  "page": 174,
  "district": "campus"
 },
 {
  "mythos": "Xipe Totec",
  "logos": "Adriana Alvarez",
  "type": "Rift",
  "kinds": [
   "Rift"
  ],
  "page": 155,
  "district": "colonia_sombras"
 },
 {
  "mythos": "Xochipilli",
  "logos": "Margarita Flores",
  "type": "Rift",
  "kinds": [
   "Rift"
  ],
  "page": 52,
  "district": "fortune_row"
 },
 {
  "mythos": "Yellow Brick Road",
  "logos": "Gaudy survalance van",
  "type": "Relic (Extra Theme)",
  "kinds": [
   "Relic",
   "Extra Theme"
  ],
  "page": 87,
  "district": "happyville"
 },
 {
  "mythos": "Yellow Millet Dream",
  "logos": "Night Market",
  "type": "Enclave",
  "kinds": [
   "Enclave"
  ],
  "page": 42,
  "district": "chinatown"
 },
 {
  "mythos": "Youxia",
  "logos": null,
  "type": "Extra Theme",
  "kinds": [
   "Extra Theme"
  ],
  "page": 17,
  "district": "chinatown"
 },
 {
  "mythos": "Zaratan",
  "logos": "Oil Rig",
  "type": "Enclave and Familiar",
  "kinds": [
   "Enclave",
   "Familiar"
  ],
  "page": 209,
  "district": "sunken_city"
 },
 {
  "mythos": "Zhenniao",
  "logos": "Feathered clothing",
  "type": "Relic (power set)",
  "kinds": [
   "Relic",
   "Power Set"
  ],
  "page": 283,
  "district": "tourist_trap"
 },
 {
  "mythos": "Zodiac",
  "logos": "Zodiac Casino",
  "type": "Enclave",
  "kinds": [
   "Enclave"
  ],
  "page": 52,
  "district": "fortune_row"
 },
 {
  "mythos": "Academy of Projectors (Gulliver’s Travels)",
  "logos": "Society of Answers",
  "type": "Enclave (Danger)",
  "kinds": [
   "Enclave",
   "Danger"
  ],
  "page": 206,
  "district": "sunken_city"
 }
]
  },
  dangers:{
    title:"Dangers in this Book", pages:"S. 337–339",
    note:"Sortiert nach Rating (erst die „+“-Dangers, dann 1 bis 5 Sterne), innerhalb des Ratings alphabetisch (das Buch druckt zweispaltig und ist innerhalb eines Ratings nicht ganz konsequent alphabetisch). rating = Anzahl Sterne (1–5); plus:true bedeutet „+★“ bzw. „+★★“ (Mini-Danger, im Buch als „+ Stern“ markiert, hier rating 0 und stars = Anzahl der Sterne hinter dem Plus); ratingText ist die Anzeige („+1“, „3“, „3+“, „2 (+2)“). Namen in Klammern nennen den Mythos.",
    entries:[
 {
  "name": "Authority",
  "rating": 0,
  "plus": true,
  "stars": 1,
  "ratingText": "+1",
  "page": 137,
  "district": "independence"
 },
 {
  "name": "Chalk sketch",
  "rating": 0,
  "plus": true,
  "stars": 1,
  "ratingText": "+1",
  "page": 286,
  "district": "tourist_trap"
 },
 {
  "name": "Conniving",
  "rating": 0,
  "plus": true,
  "stars": 1,
  "ratingText": "+1",
  "page": 73,
  "district": "fortune_row"
 },
 {
  "name": "Curious scholar",
  "rating": 0,
  "plus": true,
  "stars": 1,
  "ratingText": "+1",
  "page": 185,
  "district": "campus"
 },
 {
  "name": "Doombringer",
  "rating": 0,
  "plus": true,
  "stars": 1,
  "ratingText": "+1",
  "page": 252,
  "district": "undertrash"
 },
 {
  "name": "Fortune teller",
  "rating": 0,
  "plus": true,
  "stars": 1,
  "ratingText": "+1",
  "page": 281,
  "district": "tourist_trap"
 },
 {
  "name": "Haz-mist suit (Gatekeeper)",
  "rating": 0,
  "plus": true,
  "stars": 1,
  "ratingText": "+1",
  "page": 96,
  "district": "happyville"
 },
 {
  "name": "Herald of Doom (Fenrir)",
  "rating": 0,
  "plus": true,
  "stars": 1,
  "ratingText": "+1",
  "page": 89,
  "district": "happyville"
 },
 {
  "name": "Luck hoarder",
  "rating": 0,
  "plus": true,
  "stars": 1,
  "ratingText": "+1",
  "page": 73,
  "district": "fortune_row"
 },
 {
  "name": "Mara",
  "rating": 0,
  "plus": true,
  "stars": 1,
  "ratingText": "+1",
  "page": 113,
  "district": "happyville"
 },
 {
  "name": "Martial Arts Bravo",
  "rating": 0,
  "plus": true,
  "stars": 1,
  "ratingText": "+1",
  "page": 33,
  "district": "chinatown"
 },
 {
  "name": "Radicalized",
  "rating": 0,
  "plus": true,
  "stars": 1,
  "ratingText": "+1",
  "page": 185,
  "district": "campus"
 },
 {
  "name": "Reveler",
  "rating": 0,
  "plus": true,
  "stars": 1,
  "ratingText": "+1",
  "page": 281,
  "district": "tourist_trap"
 },
 {
  "name": "Roarer (Pualo Dragon)",
  "rating": 0,
  "plus": true,
  "stars": 1,
  "ratingText": "+1",
  "page": 20,
  "district": "chinatown"
 },
 {
  "name": "Ruozhi",
  "rating": 0,
  "plus": true,
  "stars": 1,
  "ratingText": "+1",
  "page": 33,
  "district": "chinatown"
 },
 {
  "name": "Sea monster",
  "rating": 0,
  "plus": true,
  "stars": 1,
  "ratingText": "+1",
  "page": 224,
  "district": "sunken_city"
 },
 {
  "name": "Tenacious",
  "rating": 0,
  "plus": true,
  "stars": 1,
  "ratingText": "+1",
  "page": 159,
  "district": "colonia_sombras"
 },
 {
  "name": "Touched by death",
  "rating": 0,
  "plus": true,
  "stars": 1,
  "ratingText": "+1",
  "page": 159,
  "district": "colonia_sombras"
 },
 {
  "name": "Troublesome sightseer",
  "rating": 0,
  "plus": true,
  "stars": 1,
  "ratingText": "+1",
  "page": 224,
  "district": "sunken_city"
 },
 {
  "name": "Urban explorer",
  "rating": 0,
  "plus": true,
  "stars": 1,
  "ratingText": "+1",
  "page": 252,
  "district": "undertrash"
 },
 {
  "name": "Buddhist Divinity",
  "rating": 0,
  "plus": true,
  "stars": 2,
  "ratingText": "+2",
  "page": 33,
  "district": "chinatown"
 },
 {
  "name": "Daoist Deity",
  "rating": 0,
  "plus": true,
  "stars": 2,
  "ratingText": "+2",
  "page": 33,
  "district": "chinatown"
 },
 {
  "name": "Conjured engineers",
  "rating": 1,
  "plus": false,
  "stars": 1,
  "ratingText": "1",
  "page": 210,
  "district": "sunken_city"
 },
 {
  "name": "Freddy Stephenson (Sleeper)",
  "rating": 1,
  "plus": false,
  "stars": 1,
  "ratingText": "1",
  "page": 297,
  "district": "villains"
 },
 {
  "name": "Freeport",
  "rating": 1,
  "plus": false,
  "stars": 1,
  "ratingText": "1",
  "page": 127,
  "district": "independence"
 },
 {
  "name": "Issac Fiddle",
  "rating": 1,
  "plus": false,
  "stars": 1,
  "ratingText": "1",
  "page": 110,
  "district": "happyville"
 },
 {
  "name": "Lily Carmine",
  "rating": 1,
  "plus": false,
  "stars": 1,
  "ratingText": "1",
  "page": 273,
  "district": "tourist_trap"
 },
 {
  "name": "Manny Bruner (Mimir)",
  "rating": 1,
  "plus": false,
  "stars": 1,
  "ratingText": "1",
  "page": 326,
  "district": "forged_framed"
 },
 {
  "name": "Mica (Min Min Lights)",
  "rating": 1,
  "plus": false,
  "stars": 1,
  "ratingText": "1",
  "page": 323,
  "district": "forged_framed"
 },
 {
  "name": "Morlocks",
  "rating": 1,
  "plus": false,
  "stars": 1,
  "ratingText": "1",
  "page": 208,
  "district": "sunken_city"
 },
 {
  "name": "Sock puppets",
  "rating": 1,
  "plus": false,
  "stars": 1,
  "ratingText": "1",
  "page": 297,
  "district": "villains"
 },
 {
  "name": "The Chains",
  "rating": 1,
  "plus": false,
  "stars": 1,
  "ratingText": "1",
  "page": 137,
  "district": "independence"
 },
 {
  "name": "Alarmist",
  "rating": 2,
  "plus": false,
  "stars": 2,
  "ratingText": "2",
  "page": 137,
  "district": "independence"
 },
 {
  "name": "Alebrije",
  "rating": 2,
  "plus": false,
  "stars": 2,
  "ratingText": "2",
  "page": 158,
  "district": "colonia_sombras"
 },
 {
  "name": "Aliens",
  "rating": 2,
  "plus": false,
  "stars": 2,
  "ratingText": "2",
  "page": 117,
  "district": "happyville"
 },
 {
  "name": "Alma Espinoza (Tepeyollotl)",
  "rating": 2,
  "plus": false,
  "stars": 2,
  "ratingText": "2",
  "page": 155,
  "district": "colonia_sombras"
 },
 {
  "name": "Animate cave drawings",
  "rating": 2,
  "plus": false,
  "stars": 2,
  "ratingText": "2",
  "page": 252,
  "district": "undertrash"
 },
 {
  "name": "Bulletproof gangsters",
  "rating": 2,
  "plus": false,
  "stars": 2,
  "ratingText": "2",
  "page": 303,
  "district": "villains"
 },
 {
  "name": "Bullies",
  "rating": 2,
  "plus": false,
  "stars": 2,
  "ratingText": "2",
  "page": 103,
  "district": "happyville"
 },
 {
  "name": "Chalk Ceryneian Hind",
  "rating": 2,
  "plus": false,
  "stars": 2,
  "ratingText": "2",
  "page": 290,
  "district": "tourist_trap"
 },
 {
  "name": "Cheeky Kids (Fagin’s Gang)",
  "rating": 2,
  "plus": false,
  "stars": 2,
  "ratingText": "2",
  "page": 273,
  "district": "tourist_trap"
 },
 {
  "name": "Clay Doppelgangers",
  "rating": 2,
  "plus": false,
  "stars": 2,
  "ratingText": "2",
  "page": 327,
  "district": "forged_framed"
 },
 {
  "name": "Flying Monkeys",
  "rating": 2,
  "plus": false,
  "stars": 2,
  "ratingText": "2",
  "page": 223,
  "district": "sunken_city"
 },
 {
  "name": "Fortune cats (maneki-neko)",
  "rating": 2,
  "plus": false,
  "stars": 2,
  "ratingText": "2",
  "page": 73,
  "district": "fortune_row"
 },
 {
  "name": "Harold Levitz (King Midas)",
  "rating": 2,
  "plus": false,
  "stars": 2,
  "ratingText": "2",
  "page": 271,
  "district": "tourist_trap"
 },
 {
  "name": "Helicopter parents",
  "rating": 2,
  "plus": false,
  "stars": 2,
  "ratingText": "2",
  "page": 103,
  "district": "happyville"
 },
 {
  "name": "Juanito (Little John)",
  "rating": 2,
  "plus": false,
  "stars": 2,
  "ratingText": "2",
  "page": 312,
  "district": "villains"
 },
 {
  "name": "Killer mermaids",
  "rating": 2,
  "plus": false,
  "stars": 2,
  "ratingText": "2",
  "page": 221,
  "district": "sunken_city"
 },
 {
  "name": "King Thick",
  "rating": 2,
  "plus": false,
  "stars": 2,
  "ratingText": "2",
  "page": 323,
  "district": "forged_framed"
 },
 {
  "name": "Lilly the Mole (Hödeken house spirit)",
  "rating": 2,
  "plus": false,
  "stars": 2,
  "ratingText": "2",
  "page": 185,
  "district": "campus"
 },
 {
  "name": "Makara",
  "rating": 2,
  "plus": false,
  "stars": 2,
  "ratingText": "2",
  "page": 223,
  "district": "sunken_city"
 },
 {
  "name": "Mob of birds",
  "rating": 2,
  "plus": false,
  "stars": 2,
  "ratingText": "2",
  "page": 275,
  "district": "tourist_trap"
 },
 {
  "name": "Neighborhood watch",
  "rating": 2,
  "plus": false,
  "stars": 2,
  "ratingText": "2",
  "page": 103,
  "district": "happyville"
 },
 {
  "name": "Niners",
  "rating": 2,
  "plus": false,
  "stars": 2,
  "ratingText": "2",
  "page": 134,
  "district": "independence"
 },
 {
  "name": "Nolan Salona (Dolos)",
  "rating": 2,
  "plus": false,
  "stars": 2,
  "ratingText": "2",
  "page": 327,
  "district": "forged_framed"
 },
 {
  "name": "Occult Spirit",
  "rating": 2,
  "plus": false,
  "stars": 2,
  "ratingText": "2",
  "page": 179,
  "district": "campus"
 },
 {
  "name": "Officer Edgar Martinez (El Charro Negro)",
  "rating": 2,
  "plus": false,
  "stars": 2,
  "ratingText": "2",
  "page": 156,
  "district": "colonia_sombras"
 },
 {
  "name": "Pickpocket (gremlins)",
  "rating": 2,
  "plus": false,
  "stars": 2,
  "ratingText": "2",
  "page": 72,
  "district": "fortune_row"
 },
 {
  "name": "Prison Riot",
  "rating": 2,
  "plus": false,
  "stars": 2,
  "ratingText": "2",
  "page": 324,
  "district": "forged_framed"
 },
 {
  "name": "Raceway Gas Station (Gatekeeper)",
  "rating": 2,
  "plus": false,
  "stars": 2,
  "ratingText": "2",
  "page": 91,
  "district": "happyville"
 },
 {
  "name": "Rat kings",
  "rating": 2,
  "plus": false,
  "stars": 2,
  "ratingText": "2",
  "page": 243,
  "district": "undertrash"
 },
 {
  "name": "Raving Ones (maenad)",
  "rating": 2,
  "plus": false,
  "stars": 2,
  "ratingText": "2",
  "page": 178,
  "district": "campus"
 },
 {
  "name": "Red-eyed crows",
  "rating": 2,
  "plus": false,
  "stars": 2,
  "ratingText": "2",
  "page": 115,
  "district": "happyville"
 },
 {
  "name": "Rigged Criminal Trial",
  "rating": 2,
  "plus": false,
  "stars": 2,
  "ratingText": "2",
  "page": 321,
  "district": "forged_framed"
 },
 {
  "name": "Sean Mcmannon (Biddy Early)",
  "rating": 2,
  "plus": false,
  "stars": 2,
  "ratingText": "2",
  "page": 278,
  "district": "tourist_trap"
 },
 {
  "name": "Sicarios",
  "rating": 2,
  "plus": false,
  "stars": 2,
  "ratingText": "2",
  "page": 153,
  "district": "colonia_sombras"
 },
 {
  "name": "Snake ring (Chalkydri)",
  "rating": 2,
  "plus": false,
  "stars": 2,
  "ratingText": "2",
  "page": 281,
  "district": "tourist_trap"
 },
 {
  "name": "Stormbringer Cops",
  "rating": 2,
  "plus": false,
  "stars": 2,
  "ratingText": "2",
  "page": 318,
  "district": "forged_framed"
 },
 {
  "name": "Tamoanchan anchors",
  "rating": 2,
  "plus": false,
  "stars": 2,
  "ratingText": "2",
  "page": 167,
  "district": "colonia_sombras"
 },
 {
  "name": "Taotie Bronze Raccoons",
  "rating": 2,
  "plus": false,
  "stars": 2,
  "ratingText": "2",
  "page": 32,
  "district": "chinatown"
 },
 {
  "name": "The basketball court",
  "rating": 2,
  "plus": false,
  "stars": 2,
  "ratingText": "2",
  "page": 129,
  "district": "independence"
 },
 {
  "name": "The crab in the chalk swamp",
  "rating": 2,
  "plus": false,
  "stars": 2,
  "ratingText": "2",
  "page": 288,
  "district": "tourist_trap"
 },
 {
  "name": "The Double Sevenths (Bridge of Magpies)",
  "rating": 2,
  "plus": false,
  "stars": 2,
  "ratingText": "2",
  "page": 32,
  "district": "chinatown"
 },
 {
  "name": "The Warrens (Troglodytes)",
  "rating": 2,
  "plus": false,
  "stars": 2,
  "ratingText": "2",
  "page": 242,
  "district": "undertrash"
 },
 {
  "name": "The White Bat and its Swarm (Ruozhi)",
  "rating": 2,
  "plus": false,
  "stars": 2,
  "ratingText": "2",
  "page": 41,
  "district": "chinatown"
 },
 {
  "name": "Victory banner spirits",
  "rating": 2,
  "plus": false,
  "stars": 2,
  "ratingText": "2",
  "page": 241,
  "district": "undertrash"
 },
 {
  "name": "Wooden puppets",
  "rating": 2,
  "plus": false,
  "stars": 2,
  "ratingText": "2",
  "page": 297,
  "district": "villains"
 },
 {
  "name": "Alex Muñoz (Gatekeeper)",
  "rating": 3,
  "plus": false,
  "stars": 3,
  "ratingText": "3",
  "page": 158,
  "district": "colonia_sombras"
 },
 {
  "name": "Ambrogio's husk",
  "rating": 3,
  "plus": false,
  "stars": 3,
  "ratingText": "3",
  "page": 258,
  "district": "undertrash"
 },
 {
  "name": "Andrei Dalca (The White Rabbit)",
  "rating": 3,
  "plus": false,
  "stars": 3,
  "ratingText": "3",
  "page": 75,
  "district": "fortune_row"
 },
 {
  "name": "Angelica (Stheno)",
  "rating": 3,
  "plus": false,
  "stars": 3,
  "ratingText": "3",
  "page": 302,
  "district": "villains"
 },
 {
  "name": "Animatronic bunny Mara",
  "rating": 3,
  "plus": false,
  "stars": 3,
  "ratingText": "3",
  "page": 113,
  "district": "happyville"
 },
 {
  "name": "Astrid",
  "rating": 3,
  "plus": false,
  "stars": 3,
  "ratingText": "3",
  "page": 179,
  "district": "campus"
 },
 {
  "name": "Ben Fong and Carol Mark (Heibai Wuchang)",
  "rating": 3,
  "plus": false,
  "stars": 3,
  "ratingText": "3",
  "page": 44,
  "district": "chinatown"
 },
 {
  "name": "Boo Hag",
  "rating": 3,
  "plus": false,
  "stars": 3,
  "ratingText": "3",
  "page": 144,
  "district": "independence"
 },
 {
  "name": "Bud (Maenad)",
  "rating": 3,
  "plus": false,
  "stars": 3,
  "ratingText": "3",
  "page": 178,
  "district": "campus"
 },
 {
  "name": "Campus security (Dullahan)",
  "rating": 3,
  "plus": false,
  "stars": 3,
  "ratingText": "3",
  "page": 184,
  "district": "campus"
 },
 {
  "name": "Carlos Despina (Brides of Dracula)",
  "rating": 3,
  "plus": false,
  "stars": 3,
  "ratingText": "3",
  "page": 270,
  "district": "tourist_trap"
 },
 {
  "name": "Chalk Lernean Hydra",
  "rating": 3,
  "plus": false,
  "stars": 3,
  "ratingText": "3",
  "page": 288,
  "district": "tourist_trap"
 },
 {
  "name": "Chalk Nemean Lion",
  "rating": 3,
  "plus": false,
  "stars": 3,
  "ratingText": "3",
  "page": 286,
  "district": "tourist_trap"
 },
 {
  "name": "Chang",
  "rating": 3,
  "plus": false,
  "stars": 3,
  "ratingText": "3",
  "page": 28,
  "district": "chinatown"
 },
 {
  "name": "Changeling imposter",
  "rating": 3,
  "plus": false,
  "stars": 3,
  "ratingText": "3",
  "page": 102,
  "district": "happyville"
 },
 {
  "name": "Chantal Willems (The Moon tarot card)",
  "rating": 3,
  "plus": false,
  "stars": 3,
  "ratingText": "3",
  "page": 75,
  "district": "fortune_row"
 },
 {
  "name": "Church traps",
  "rating": 3,
  "plus": false,
  "stars": 3,
  "ratingText": "3",
  "page": 229,
  "district": "sunken_city"
 },
 {
  "name": "Clinton An (Dian Wei)",
  "rating": 3,
  "plus": false,
  "stars": 3,
  "ratingText": "3",
  "page": 23,
  "district": "chinatown"
 },
 {
  "name": "Coal mine damp",
  "rating": 3,
  "plus": false,
  "stars": 3,
  "ratingText": "3+",
  "page": 243,
  "district": "undertrash"
 },
 {
  "name": "Criminal Teenage Maggie",
  "rating": 3,
  "plus": false,
  "stars": 3,
  "ratingText": "3",
  "page": 117,
  "district": "happyville"
 },
 {
  "name": "Demon swarm (Apasmara)",
  "rating": 3,
  "plus": false,
  "stars": 3,
  "ratingText": "3",
  "page": 197,
  "district": "campus"
 },
 {
  "name": "Diana Chandler (Once in a Blue Moon)",
  "rating": 3,
  "plus": false,
  "stars": 3,
  "ratingText": "3",
  "page": 101,
  "district": "happyville"
 },
 {
  "name": "Eerie Staffmember (Nyavka)",
  "rating": 3,
  "plus": false,
  "stars": 3,
  "ratingText": "3",
  "page": 270,
  "district": "tourist_trap"
 },
 {
  "name": "Fenrir",
  "rating": 3,
  "plus": false,
  "stars": 3,
  "ratingText": "3",
  "page": 89,
  "district": "happyville"
 },
 {
  "name": "Flesh puppets",
  "rating": 3,
  "plus": false,
  "stars": 3,
  "ratingText": "3",
  "page": 297,
  "district": "villains"
 },
 {
  "name": "Food poisoning waitress",
  "rating": 3,
  "plus": false,
  "stars": 3,
  "ratingText": "3",
  "page": 116,
  "district": "happyville"
 },
 {
  "name": "Fox Spirit",
  "rating": 3,
  "plus": false,
  "stars": 3,
  "ratingText": "3",
  "page": 27,
  "district": "chinatown"
 },
 {
  "name": "Frederic “Sandy” Chen (Sha Wujing)",
  "rating": 3,
  "plus": false,
  "stars": 3,
  "ratingText": "3",
  "page": 30,
  "district": "chinatown"
 },
 {
  "name": "Gallu",
  "rating": 3,
  "plus": false,
  "stars": 3,
  "ratingText": "3",
  "page": 230,
  "district": "sunken_city"
 },
 {
  "name": "Gatekeeper agents (Gatekeeper)",
  "rating": 3,
  "plus": false,
  "stars": 3,
  "ratingText": "3",
  "page": 108,
  "district": "happyville"
 },
 {
  "name": "Glashtyn",
  "rating": 3,
  "plus": false,
  "stars": 3,
  "ratingText": "3",
  "page": 223,
  "district": "sunken_city"
 },
 {
  "name": "Groundskeeper Dove (Dakhanavar)",
  "rating": 3,
  "plus": false,
  "stars": 3,
  "ratingText": "3",
  "page": 182,
  "district": "campus"
 },
 {
  "name": "Hinthials",
  "rating": 3,
  "plus": false,
  "stars": 3,
  "ratingText": "3",
  "page": 251,
  "district": "undertrash"
 },
 {
  "name": "Isaiah William Bishop (High John de Conqueror)",
  "rating": 3,
  "plus": false,
  "stars": 3,
  "ratingText": "3",
  "page": 131,
  "district": "independence"
 },
 {
  "name": "Jennifer Anderung (Alp)",
  "rating": 3,
  "plus": false,
  "stars": 3,
  "ratingText": "3",
  "page": 274,
  "district": "tourist_trap"
 },
 {
  "name": "Jiangshi",
  "rating": 3,
  "plus": false,
  "stars": 3,
  "ratingText": "3",
  "page": 31,
  "district": "chinatown"
 },
 {
  "name": "Julian Northing (Sheriff of Nottingham)",
  "rating": 3,
  "plus": false,
  "stars": 3,
  "ratingText": "3",
  "page": 313,
  "district": "villains"
 },
 {
  "name": "Kent Leong (Justice Bao)",
  "rating": 3,
  "plus": false,
  "stars": 3,
  "ratingText": "3",
  "page": 27,
  "district": "chinatown"
 },
 {
  "name": "Madame Bellwether (The World's Oldest Profession)",
  "rating": 3,
  "plus": false,
  "stars": 3,
  "ratingText": "3",
  "page": 63,
  "district": "fortune_row"
 },
 {
  "name": "Madeline Moretti (Medusa)",
  "rating": 3,
  "plus": false,
  "stars": 3,
  "ratingText": "3",
  "page": 302,
  "district": "villains"
 },
 {
  "name": "Marcus Davis (Baku)",
  "rating": 3,
  "plus": false,
  "stars": 3,
  "ratingText": "3",
  "page": 105,
  "district": "happyville"
 },
 {
  "name": "Mariana (Euryale)",
  "rating": 3,
  "plus": false,
  "stars": 3,
  "ratingText": "3",
  "page": 303,
  "district": "villains"
 },
 {
  "name": "Memories (The Raven, Poe)",
  "rating": 3,
  "plus": false,
  "stars": 3,
  "ratingText": "3",
  "page": 185,
  "district": "campus"
 },
 {
  "name": "Menhir",
  "rating": 3,
  "plus": false,
  "stars": 3,
  "ratingText": "3",
  "page": 252,
  "district": "undertrash"
 },
 {
  "name": "Movie monster (Asura)",
  "rating": 3,
  "plus": false,
  "stars": 3,
  "ratingText": "3",
  "page": 95,
  "district": "happyville"
 },
 {
  "name": "Nathan Ergal (Nergal)",
  "rating": 3,
  "plus": false,
  "stars": 3,
  "ratingText": "3",
  "page": 248,
  "district": "undertrash"
 },
 {
  "name": "Never \"Eva\" There (River Lethe)",
  "rating": 3,
  "plus": false,
  "stars": 3,
  "ratingText": "3",
  "page": 328,
  "district": "forged_framed"
 },
 {
  "name": "Night partygoers (Encantados)",
  "rating": 3,
  "plus": false,
  "stars": 3,
  "ratingText": "3",
  "page": 279,
  "district": "tourist_trap"
 },
 {
  "name": "Old Man Keola (Ukupanipo)",
  "rating": 3,
  "plus": false,
  "stars": 3,
  "ratingText": "3",
  "page": 210,
  "district": "sunken_city"
 },
 {
  "name": "Pearl Hugao (Gumiho)",
  "rating": 3,
  "plus": false,
  "stars": 3,
  "ratingText": "3",
  "page": 99,
  "district": "happyville"
 },
 {
  "name": "Quincy William Reid (Professor Moriarty)",
  "rating": 3,
  "plus": false,
  "stars": 3,
  "ratingText": "3",
  "page": 183,
  "district": "campus"
 },
 {
  "name": "Raindrops & their ritual",
  "rating": 3,
  "plus": false,
  "stars": 3,
  "ratingText": "3",
  "page": 231,
  "district": "sunken_city"
 },
 {
  "name": "Regulatory Commission Guards",
  "rating": 3,
  "plus": false,
  "stars": 3,
  "ratingText": "3",
  "page": 78,
  "district": "fortune_row"
 },
 {
  "name": "Scrambled Mob",
  "rating": 3,
  "plus": false,
  "stars": 3,
  "ratingText": "3",
  "page": 195,
  "district": "campus"
 },
 {
  "name": "Sinking ferry",
  "rating": 3,
  "plus": false,
  "stars": 3,
  "ratingText": "3+",
  "page": 268,
  "district": "tourist_trap"
 },
 {
  "name": "Skateboarders (Jackalopes)",
  "rating": 3,
  "plus": false,
  "stars": 3,
  "ratingText": "3",
  "page": 280,
  "district": "tourist_trap"
 },
 {
  "name": "Statue of Justice (Justice tarot card)",
  "rating": 3,
  "plus": false,
  "stars": 3,
  "ratingText": "3",
  "page": 80,
  "district": "fortune_row"
 },
 {
  "name": "Surf competition (jousting tourney)",
  "rating": 3,
  "plus": false,
  "stars": 3,
  "ratingText": "3",
  "page": 277,
  "district": "tourist_trap"
 },
 {
  "name": "The Astrolabe",
  "rating": 3,
  "plus": false,
  "stars": 3,
  "ratingText": "3",
  "page": 54,
  "district": "fortune_row"
 },
 {
  "name": "The High Riders (Wild Hunt)",
  "rating": 3,
  "plus": false,
  "stars": 3,
  "ratingText": "3",
  "page": 325,
  "district": "forged_framed"
 },
 {
  "name": "The Knave of Hearts (croquet in Wonderland)",
  "rating": 3,
  "plus": false,
  "stars": 3,
  "ratingText": "3",
  "page": 82,
  "district": "fortune_row"
 },
 {
  "name": "The Seven and Fourteen",
  "rating": 3,
  "plus": false,
  "stars": 3,
  "ratingText": "3",
  "page": 246,
  "district": "undertrash"
 },
 {
  "name": "The Tikbalang",
  "rating": 3,
  "plus": false,
  "stars": 3,
  "ratingText": "3",
  "page": 221,
  "district": "sunken_city"
 },
 {
  "name": "Ty Fairchilde (Hel)",
  "rating": 3,
  "plus": false,
  "stars": 3,
  "ratingText": "3",
  "page": 279,
  "district": "tourist_trap"
 },
 {
  "name": "Tzitzimimeh",
  "rating": 3,
  "plus": false,
  "stars": 3,
  "ratingText": "3",
  "page": 159,
  "district": "colonia_sombras"
 },
 {
  "name": "Vera Yeh (Dianmu)",
  "rating": 3,
  "plus": false,
  "stars": 3,
  "ratingText": "3",
  "page": 45,
  "district": "chinatown"
 },
 {
  "name": "Victor Mordecai (King Eurystheus)",
  "rating": 3,
  "plus": false,
  "stars": 3,
  "ratingText": "3",
  "page": 291,
  "district": "tourist_trap"
 },
 {
  "name": "Walter Stephenson (Geppetto)",
  "rating": 3,
  "plus": false,
  "stars": 3,
  "ratingText": "3",
  "page": 296,
  "district": "villains"
 },
 {
  "name": "Xaviar Perez (The Wild Card)",
  "rating": 3,
  "plus": false,
  "stars": 3,
  "ratingText": "3",
  "page": 59,
  "district": "fortune_row"
 },
 {
  "name": "Zodiac's Rift-Forged Hotel Security",
  "rating": 3,
  "plus": false,
  "stars": 3,
  "ratingText": "3",
  "page": 53,
  "district": "fortune_row"
 },
 {
  "name": "Crystal golems",
  "rating": 4,
  "plus": false,
  "stars": 4,
  "ratingText": "4 (+2)",
  "page": 213,
  "district": "sunken_city"
 },
 {
  "name": "Agent Melody Payne (Gatekeeper)",
  "rating": 4,
  "plus": false,
  "stars": 4,
  "ratingText": "4",
  "page": 100,
  "district": "happyville"
 },
 {
  "name": "All-consuming garbage truck (Bakasura)",
  "rating": 4,
  "plus": false,
  "stars": 4,
  "ratingText": "4",
  "page": 98,
  "district": "happyville"
 },
 {
  "name": "Alvin and Hugh Song (Tiger Demons)",
  "rating": 4,
  "plus": false,
  "stars": 4,
  "ratingText": "4",
  "page": 28,
  "district": "chinatown"
 },
 {
  "name": "Ancient ruins",
  "rating": 4,
  "plus": false,
  "stars": 4,
  "ratingText": "4",
  "page": 208,
  "district": "sunken_city"
 },
 {
  "name": "Aurora Laakkonen (Autolycus)",
  "rating": 4,
  "plus": false,
  "stars": 4,
  "ratingText": "4",
  "page": 61,
  "district": "fortune_row"
 },
 {
  "name": "B (Harriet Tubman)",
  "rating": 4,
  "plus": false,
  "stars": 4,
  "ratingText": "4",
  "page": 133,
  "district": "independence"
 },
 {
  "name": "Captain Jacob Reeves (The Lone Ranger)",
  "rating": 4,
  "plus": false,
  "stars": 4,
  "ratingText": "4",
  "page": 132,
  "district": "independence"
 },
 {
  "name": "Cuiluhuexi",
  "rating": 4,
  "plus": false,
  "stars": 4,
  "ratingText": "4",
  "page": 157,
  "district": "colonia_sombras"
 },
 {
  "name": "Denny Hodges (Uncle Monday)",
  "rating": 4,
  "plus": false,
  "stars": 4,
  "ratingText": "4",
  "page": 136,
  "district": "independence"
 },
 {
  "name": "Dr. Joachim Dement (Huld)",
  "rating": 4,
  "plus": false,
  "stars": 4,
  "ratingText": "4",
  "page": 121,
  "district": "happyville"
 },
 {
  "name": "Ekram Din (Dionysus)",
  "rating": 4,
  "plus": false,
  "stars": 4,
  "ratingText": "4",
  "page": 272,
  "district": "tourist_trap"
 },
 {
  "name": "Farida Jalal (Sinbad)",
  "rating": 4,
  "plus": false,
  "stars": 4,
  "ratingText": "4",
  "page": 308,
  "district": "villains"
 },
 {
  "name": "Fionna Rortan (Fergus mac Róich)",
  "rating": 4,
  "plus": false,
  "stars": 4,
  "ratingText": "4",
  "page": 250,
  "district": "undertrash"
 },
 {
  "name": "Gemini",
  "rating": 4,
  "plus": false,
  "stars": 4,
  "ratingText": "4",
  "page": 55,
  "district": "fortune_row"
 },
 {
  "name": "Gil Yeh (Shennong)",
  "rating": 4,
  "plus": false,
  "stars": 4,
  "ratingText": "4",
  "page": 46,
  "district": "chinatown"
 },
 {
  "name": "Imogen Waite (Gatekeeper)",
  "rating": 4,
  "plus": false,
  "stars": 4,
  "ratingText": "4",
  "page": 135,
  "district": "independence"
 },
 {
  "name": "Jakub Grund (Grendel)",
  "rating": 4,
  "plus": false,
  "stars": 4,
  "ratingText": "4",
  "page": 247,
  "district": "undertrash"
 },
 {
  "name": "King Gull (King Tereus)",
  "rating": 4,
  "plus": false,
  "stars": 4,
  "ratingText": "4",
  "page": 275,
  "district": "tourist_trap"
 },
 {
  "name": "Laura Cowle (Robin Hood)",
  "rating": 4,
  "plus": false,
  "stars": 4,
  "ratingText": "4",
  "page": 313,
  "district": "villains"
 },
 {
  "name": "LeVar Baptiste (Papa Legba)",
  "rating": 4,
  "plus": false,
  "stars": 4,
  "ratingText": "4",
  "page": 180,
  "district": "campus"
 },
 {
  "name": "Marcus Romsia (Mithras)",
  "rating": 4,
  "plus": false,
  "stars": 4,
  "ratingText": "4",
  "page": 246,
  "district": "undertrash"
 },
 {
  "name": "Maria Finando (Mictēcacihuātl)",
  "rating": 4,
  "plus": false,
  "stars": 4,
  "ratingText": "4",
  "page": 249,
  "district": "undertrash"
 },
 {
  "name": "Maui the Troublesome",
  "rating": 4,
  "plus": false,
  "stars": 4,
  "ratingText": "4",
  "page": 214,
  "district": "sunken_city"
 },
 {
  "name": "Maws",
  "rating": 4,
  "plus": false,
  "stars": 4,
  "ratingText": "4",
  "page": 242,
  "district": "undertrash"
 },
 {
  "name": "Morvleiz (Princess Dahut)",
  "rating": 4,
  "plus": false,
  "stars": 4,
  "ratingText": "4",
  "page": 220,
  "district": "sunken_city"
 },
 {
  "name": "Mr. Yukes (Ophiuchus)",
  "rating": 4,
  "plus": false,
  "stars": 4,
  "ratingText": "4",
  "page": 72,
  "district": "fortune_row"
 },
 {
  "name": "Nash Haynes (lucky horseshoe)",
  "rating": 4,
  "plus": false,
  "stars": 4,
  "ratingText": "4",
  "page": 76,
  "district": "fortune_row"
 },
 {
  "name": "Nicos Iryhor (Ambrogio)",
  "rating": 4,
  "plus": false,
  "stars": 4,
  "ratingText": "4",
  "page": 262,
  "district": "undertrash"
 },
 {
  "name": "Pandora’s Box",
  "rating": 4,
  "plus": false,
  "stars": 4,
  "ratingText": "4",
  "page": 329,
  "district": "forged_framed"
 },
 {
  "name": "Professor Myrna Walker (John Henry)",
  "rating": 4,
  "plus": false,
  "stars": 4,
  "ratingText": "4",
  "page": 132,
  "district": "independence"
 },
 {
  "name": "School auditorium (Abiyoyo)",
  "rating": 4,
  "plus": false,
  "stars": 4,
  "ratingText": "4",
  "page": 93,
  "district": "happyville"
 },
 {
  "name": "Scorpio",
  "rating": 4,
  "plus": false,
  "stars": 4,
  "ratingText": "4",
  "page": 54,
  "district": "fortune_row"
 },
 {
  "name": "Scylla and Charybdis",
  "rating": 4,
  "plus": false,
  "stars": 4,
  "ratingText": "4",
  "page": 204,
  "district": "sunken_city"
 },
 {
  "name": "Shapeshifting Dragon Shen",
  "rating": 4,
  "plus": false,
  "stars": 4,
  "ratingText": "4",
  "page": 32,
  "district": "chinatown"
 },
 {
  "name": "The Lurker (The Knuckler)",
  "rating": 4,
  "plus": false,
  "stars": 4,
  "ratingText": "4",
  "page": 135,
  "district": "independence"
 },
 {
  "name": "The Society of Answers",
  "rating": 4,
  "plus": false,
  "stars": 4,
  "ratingText": "4",
  "page": 206,
  "district": "sunken_city"
 },
 {
  "name": "The Twins",
  "rating": 4,
  "plus": false,
  "stars": 4,
  "ratingText": "4",
  "page": 119,
  "district": "happyville"
 },
 {
  "name": "Tío Tez (Tezcatlipoca)",
  "rating": 4,
  "plus": false,
  "stars": 4,
  "ratingText": "4",
  "page": 153,
  "district": "colonia_sombras"
 },
 {
  "name": "Within the Leviathan",
  "rating": 4,
  "plus": false,
  "stars": 4,
  "ratingText": "4",
  "page": 233,
  "district": "sunken_city"
 },
 {
  "name": "Dahlia Zhuang (Daji)",
  "rating": 5,
  "plus": false,
  "stars": 5,
  "ratingText": "5",
  "page": 26,
  "district": "chinatown"
 },
 {
  "name": "Helen Troncoso / Águila de Plata (Kukulkan)",
  "rating": 5,
  "plus": false,
  "stars": 5,
  "ratingText": "5",
  "page": 154,
  "district": "colonia_sombras"
 },
 {
  "name": "Hoi Jing (Zhang Guolao)",
  "rating": 5,
  "plus": false,
  "stars": 5,
  "ratingText": "5",
  "page": 20,
  "district": "chinatown"
 },
 {
  "name": "I-Yun",
  "rating": 5,
  "plus": false,
  "stars": 5,
  "ratingText": "5",
  "page": 22,
  "district": "chinatown"
 },
 {
  "name": "Jin Dao (Fahai)",
  "rating": 5,
  "plus": false,
  "stars": 5,
  "ratingText": "5",
  "page": 24,
  "district": "chinatown"
 },
 {
  "name": "Lel's Spirit of Destruction",
  "rating": 5,
  "plus": false,
  "stars": 5,
  "ratingText": "5",
  "page": 234,
  "district": "sunken_city"
 },
 {
  "name": "Leviathan",
  "rating": 5,
  "plus": false,
  "stars": 5,
  "ratingText": "5",
  "page": 212,
  "district": "sunken_city"
 },
 {
  "name": "Maia Greene",
  "rating": 5,
  "plus": false,
  "stars": 5,
  "ratingText": "5",
  "page": 251,
  "district": "undertrash"
 },
 {
  "name": "Marlene Renner (Queen Mab)",
  "rating": 5,
  "plus": false,
  "stars": 5,
  "ratingText": "5",
  "page": 274,
  "district": "tourist_trap"
 },
 {
  "name": "Miguel Finando (Mictlāntēcutli)",
  "rating": 5,
  "plus": false,
  "stars": 5,
  "ratingText": "5",
  "page": 249,
  "district": "undertrash"
 },
 {
  "name": "Possessed Larry Paulson (Apasmara)",
  "rating": 5,
  "plus": false,
  "stars": 5,
  "ratingText": "5",
  "page": 196,
  "district": "campus"
 },
 {
  "name": "Town Hall Gatekeeper security (Gatekeeper)",
  "rating": 5,
  "plus": false,
  "stars": 5,
  "ratingText": "5",
  "page": 128,
  "district": "independence"
 },
 {
  "name": "Xochitl Rodríguez (Ītzpāpālōtl)",
  "rating": 5,
  "plus": false,
  "stars": 5,
  "ratingText": "5",
  "page": 166,
  "district": "colonia_sombras"
 },
 {
  "name": "Yasmin Farhat (Ereshkigal)",
  "rating": 5,
  "plus": false,
  "stars": 5,
  "ratingText": "5",
  "page": 245,
  "district": "undertrash"
 }
]
  },
  themeKits:{
    title:"Theme Kits in this Book", pages:"S. 340",
    note:"Alphabetisch sortiert (das Buch druckt zwei Spalten). type = Themenbuch-/Kit-Typ (Ally, Relic, Tradition, Destiny, Enclave, Familiar, Base of Operations, Routine, Mission, Personality …).",
    entries:[
 {
  "title": "Alebrije",
  "type": "Familiar",
  "page": 149,
  "district": "colonia_sombras"
 },
 {
  "title": "ARIEL",
  "type": "Possessions",
  "page": 276,
  "district": "tourist_trap"
 },
 {
  "title": "Axel Duval",
  "type": "Ally",
  "page": 67,
  "district": "fortune_row"
 },
 {
  "title": "B",
  "type": "Ally",
  "page": 133,
  "district": "independence"
 },
 {
  "title": "Bahamut's Sturdiness",
  "type": "Bastion",
  "page": 233,
  "district": "sunken_city"
 },
 {
  "title": "Bodhi",
  "type": "Ally",
  "page": 102,
  "district": "happyville"
 },
 {
  "title": "Captain Reeves",
  "type": "Ally",
  "page": 133,
  "district": "independence"
 },
 {
  "title": "Conquerer of Troy",
  "type": "Destiny",
  "page": 50,
  "district": "fortune_row"
 },
 {
  "title": "Conspiracy Theorist",
  "type": "Personality",
  "page": 88,
  "district": "happyville"
 },
 {
  "title": "Counterfeiter",
  "type": "Training",
  "page": 51,
  "district": "fortune_row"
 },
 {
  "title": "Denny Hodges",
  "type": "Ally",
  "page": 136,
  "district": "independence"
 },
 {
  "title": "Diamond",
  "type": "Ally",
  "page": 65,
  "district": "fortune_row"
 },
 {
  "title": "Doomed Creator",
  "type": "Destiny",
  "page": 205,
  "district": "sunken_city"
 },
 {
  "title": "Duat",
  "type": "Enclave",
  "page": 239,
  "district": "undertrash"
 },
 {
  "title": "Emergent",
  "type": "Mission",
  "page": 215,
  "district": "sunken_city"
 },
 {
  "title": "Fonzo",
  "type": "Ally",
  "page": 66,
  "district": "fortune_row"
 },
 {
  "title": "Gaudy Surveillance Van",
  "type": "Relic",
  "page": 88,
  "district": "happyville"
 },
 {
  "title": "Genevive Stenson",
  "type": "Ally",
  "page": 179,
  "district": "campus"
 },
 {
  "title": "Genie's Lamp",
  "type": "Enclave",
  "page": 266,
  "district": "tourist_trap"
 },
 {
  "title": "Hellfire Dice",
  "type": "Relic",
  "page": 51,
  "district": "fortune_row"
 },
 {
  "title": "Herald of Doom",
  "type": "Mission",
  "page": 90,
  "district": "happyville"
 },
 {
  "title": "High-Rollers VIP Suites",
  "type": "Base of Operations",
  "page": 51,
  "district": "fortune_row"
 },
 {
  "title": "In Business With Tez",
  "type": "Routine",
  "page": 148,
  "district": "colonia_sombras"
 },
 {
  "title": "Isaiah Colm",
  "type": "Ally",
  "page": 31,
  "district": "chinatown"
 },
 {
  "title": "Isaiah William Bishop",
  "type": "Ally",
  "page": 131,
  "district": "independence"
 },
 {
  "title": "Jill Nicholas",
  "type": "Ally",
  "page": 101,
  "district": "happyville"
 },
 {
  "title": "Jing Family",
  "type": "Tradition",
  "page": 20,
  "district": "chinatown"
 },
 {
  "title": "King Gradlon",
  "type": "Adaptation",
  "page": 209,
  "district": "sunken_city"
 },
 {
  "title": "Kraken's Hunger",
  "type": "Expression",
  "page": 233,
  "district": "sunken_city"
 },
 {
  "title": "Lady Luck",
  "type": "Conjuration",
  "page": 51,
  "district": "fortune_row"
 },
 {
  "title": "Lin Family",
  "type": "Tradition",
  "page": 29,
  "district": "chinatown"
 },
 {
  "title": "Little Rat Told Me",
  "type": "Familiar",
  "page": 99,
  "district": "happyville"
 },
 {
  "title": "Local Temple",
  "type": "Base of Operations",
  "page": 18,
  "district": "chinatown"
 },
 {
  "title": "Macuahuitl",
  "type": "Relic",
  "page": 148,
  "district": "colonia_sombras"
 },
 {
  "title": "Manny Lerman",
  "type": "Ally",
  "page": 60,
  "district": "fortune_row"
 },
 {
  "title": "Mervyn",
  "type": "Ally",
  "page": 65,
  "district": "fortune_row"
 },
 {
  "title": "Monitoring Station",
  "type": "Base of Operations",
  "page": 87,
  "district": "happyville"
 },
 {
  "title": "Mrs. Chow's Five Flavored Tea of Forgetfulness",
  "type": "Relic",
  "page": 17,
  "district": "chinatown"
 },
 {
  "title": "Nathan Ergal",
  "type": "Ally",
  "page": 248,
  "district": "undertrash"
 },
 {
  "title": "Nereids",
  "type": "Conjuration",
  "page": 266,
  "district": "tourist_trap"
 },
 {
  "title": "Net of Rán",
  "type": "Relic",
  "page": 266,
  "district": "tourist_trap"
 },
 {
  "title": "Nula Dawg",
  "type": "Ally",
  "page": 66,
  "district": "fortune_row"
 },
 {
  "title": "Ornate Designer Pen",
  "type": "Relic",
  "page": 88,
  "district": "happyville"
 },
 {
  "title": "Orpheus's Lyre",
  "type": "Relic",
  "page": 239,
  "district": "undertrash"
 },
 {
  "title": "Panlong Dragon Boat",
  "type": "Ride",
  "page": 23,
  "district": "chinatown"
 },
 {
  "title": "Peaked in High School",
  "type": "Defining Event",
  "page": 88,
  "district": "happyville"
 },
 {
  "title": "Personal Dome",
  "type": "Enclave",
  "page": 205,
  "district": "sunken_city"
 },
 {
  "title": "Pillar of the Community",
  "type": "Personality",
  "page": 126,
  "district": "independence"
 },
 {
  "title": "Productive Niðavellir",
  "type": "Enclave",
  "page": 244,
  "district": "undertrash"
 },
 {
  "title": "Prof. Myrna Walker",
  "type": "Ally",
  "page": 132,
  "district": "independence"
 },
 {
  "title": "Punisher of Oath-Breakers",
  "type": "Subversion",
  "page": 239,
  "district": "undertrash"
 },
 {
  "title": "Rehearsal space",
  "type": "Enclave",
  "page": 173,
  "district": "campus"
 },
 {
  "title": "School of the Maiden of Yue",
  "type": "Tradition",
  "page": 17,
  "district": "chinatown"
 },
 {
  "title": "Stella Roi (Urania, Muse of Astronomy)",
  "type": "Ally",
  "page": 184,
  "district": "campus"
 },
 {
  "title": "Stoor Worm's Slither",
  "type": "Mobility",
  "page": 233,
  "district": "sunken_city"
 },
 {
  "title": "Tammuz's Gratitude",
  "type": "Relic",
  "page": 216,
  "district": "sunken_city"
 },
 {
  "title": "Tanvi Ashura",
  "type": "Ally",
  "page": 217,
  "district": "sunken_city"
 },
 {
  "title": "Taste of Immortality",
  "type": "Destiny",
  "page": 22,
  "district": "chinatown"
 },
 {
  "title": "Thalia Babbage",
  "type": "Ally",
  "page": 222,
  "district": "sunken_city"
 },
 {
  "title": "The Eagle Wings",
  "type": "Relic",
  "page": 173,
  "district": "campus"
 },
 {
  "title": "The Gateway Tunnels",
  "type": "Enclave",
  "page": 149,
  "district": "colonia_sombras"
 },
 {
  "title": "The Lion's Head",
  "type": "Relic",
  "page": 173,
  "district": "campus"
 },
 {
  "title": "Tom Huang, Kitchen God",
  "type": "Ally",
  "page": 19,
  "district": "chinatown"
 },
 {
  "title": "Tripod Walker",
  "type": "Relic",
  "page": 205,
  "district": "sunken_city"
 },
 {
  "title": "Undeclared",
  "type": "Personality",
  "page": 174,
  "district": "campus"
 },
 {
  "title": "Urban Scavenger",
  "type": "Routine",
  "page": 239,
  "district": "undertrash"
 },
 {
  "title": "Wolf Brother",
  "type": "Familiar",
  "page": 217,
  "district": "sunken_city"
 },
 {
  "title": "Worthy cook",
  "type": "Routine",
  "page": 17,
  "district": "chinatown"
 },
 {
  "title": "Youxia",
  "type": "Destiny",
  "page": 18,
  "district": "chinatown"
 },
 {
  "title": "Águila de Plata",
  "type": "Ally",
  "page": 154,
  "district": "colonia_sombras"
 }
]
  },
  backers:{
    title:"Backers List", pages:"S. 341–343",
    text:"Auf den drei letzten Seiten (341–343) nennt das Buch in kleiner Schrift, alphabetisch, alle Unterstützer*innen der Crowdfunding-Kampagne zu „City of Mist – Local Legends“ (rund 2.600 Namen, von „A Geek of One's Own.“ bis „01000011 01000100 01010010“). Die Namen werden hier nicht einzeln wiedergegeben.",
    approxCount:2600
  }
};
