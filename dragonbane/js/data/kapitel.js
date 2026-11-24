/* Dragonbane – Kapitel des Regelbuchs (Startseite + Nachschlagen). id = Route #n/<id>; u = Unterkapitel [Name, Kennung] */
var DB_KAP = [
 {id:"einf", n:"1", t:"In den ältesten Zeiten", p:4, img:"kap/k1-in-den-aeltesten-zeiten", u:[]},
 {id:"sc", n:"2", t:"Dein Spielercharakter", p:8, img:"kap/k2-spielercharakter", u:[["Völker","voelker"],["Berufe","berufe"],["Alter & Name","alter"],["Attribute","attribute"],["Abgeleitete Werte","werte"],["Heroische Talente","talente"],["Ausrüstung","ausruestung"],["Erfahrung","erfahrung"]]},
 {id:"fe", n:"3", t:"Fertigkeiten", p:30, img:"kap/k3-fertigkeiten", u:[["Würfeln","wuerfeln"],["Vorteil & Nachteil","vorteil"],["Vergleichende Würfe","vergleich"],["Kernfertigkeiten","kern"],["Heroische Talente","talente"]]},
 {id:"ka", n:"4", t:"Kampf & Schaden", p:40, img:"kap/k4-kampf-und-schaden", u:[["Runden & Initiative","initiative"],["Aktionen","aktionen"],["Nahkampf","nahkampf"],["Fernkampf","fernkampf"],["Schaden","schaden"],["Zustände","zustaende"],["Heilung & Rast","heilung"]]},
 {id:"ma", n:"5", t:"Magie", p:56, img:"kap/k5-magie", u:[["Magieschulen","schulen"],["Zauber","zauber"],["Zauber wirken","wirken"],["Magie lernen","lernen"],["Zauberliste","liste"]]},
 {id:"au", n:"6", t:"Ausrüstung", p:72, img:"kap/k6-ausruestung", u:[["Rüstungen & Helme","ruestungen"],["Waffen","waffen"],["Handelswaren","waren"],["Licht & Werkzeug","werkzeug"],["Dienste","dienste"],["Tiere","tiere"]]},
 {id:"be", n:"7", t:"Bestiarium", p:82, img:"kap/k7-bestiarium", u:[["Monster im Spiel","monster"],["14 Monster vom Dämon bis zur Vampirfledermaus","liste"],["Gewöhnliche Tiere","tiere"]]},
 {id:"ab", n:"8", t:"Abenteuer", p:100, img:"kap/k8-abenteuer", u:[["Reisen","reisen"],["Die Rolle der SL","sl"],["Nichtspielercharaktere","nsc"],["Abenteuer erschaffen","erschaffen"],["Kampagnen","kampagnen"]]},
 {id:"ta", n:"", t:"Tabellen", p:120, kopf:"Anhang", img:"", u:[["Improvisierte Waffen","waffen"],["Schätze","schaetze"]]}
];
var DB_VOELKER = [["mensch","Mensch"],["halbling","Halbling"],["zwerg","Zwerg"],["elf","Elf"],["ente","Ente"],["wolfsmensch","Wolfsmensch"]];
var DB_BERUFE = [["handwerker","Handwerker"],["haendler","Händler"],["barde","Barde"],["gelehrter","Gelehrter"],["jaeger","Jäger"],["krieger","Krieger"],["magier","Magier"],["ritter","Ritter"],["seefahrer","Seefahrer"],["dieb","Dieb"]];
