/* The Spire – Gegner aus dem Quickstart (Snuff Out the Sun, QS S. 22–23; Buch-ID sp_qs, Seitenversatz +1).
   Format wie SP_GEGNER in plan/SPIRE_PLAN.md, Abschnitt 5:
   schw = {k: Kurzform für die Karte, x: Buchtext}; wid.werte = Widerstand (mehrere Zahlen = Umschalter);
   ausr = Liste aus Text (String) und Gegenständen {x, dmg, tags}; Chips: dmg = Schadenswürfel, tags = Tags/Rüstung. */
window.SP_GEGNER = window.SP_GEGNER || [];
SP_GEGNER.push(
 {id:"stadtwache", t:"Stadtwache", en:"City Guard", buch:"qs", p:22, ort:"Platz der Tausend Sonnenaufgänge", ortId:"plaza",
  namen:["Reyen", "Anton", "Sallomme"],
  beschr:["Trägt eine Rüstung, die eine Nummer zu groß ist", "Summt zur Musik mit", "Trägt Sandwiches in einer braunen Papiertüte"],
  schw:{k:"0", x:"0"}, wid:{werte:[5]},
  ausr:[{x:"Leichte Rüstung", tags:["Rüstung 2"]}, ", ", {x:"Knüppel", dmg:"W3"}, ", wenn sie auf Patrouille sind, oder ", {x:"Hellebarde", dmg:"W6", tags:["Brutal"]}, ", wenn sie Wachdienst haben, gelegentlich eine ", {x:"Dohlenpistole", dmg:"W6", tags:["Durchschlagend", "Fernkampf", "Nachladen"]}]},
 {id:"schwarze-garde", t:"Schwarze Garde", en:"Black Guard", buch:"qs", p:23, ort:"Caliastro-Boulevard, Amaranth", ortId:"caliastro",
  namen:["Hurrell", "Wexen", "Sarhan"],
  beschr:["Trägt eine Vollgesichtsmaske", "Führt eine maßgefertigte Schrotflinte", "Nutzt Handzeichen"],
  schw:{k:"2 (0)", x:"Die Schwarze Garde besteht aus Elitekriegern; sie frontal anzugehen ist eine Handlung mit Schwierigkeit 2, aber wenn ihr dabei verstohlen vorgeht, ist es Schwierigkeit 0"}, wid:{werte:[6]},
  ausr:[{x:"Rüstung der Schwarzen Garde", tags:["Rüstung 3"]}, ", ", {x:"Hellebarde", dmg:"W6", tags:["Brutal"]}, " und ", {x:"Dohlenpistole", dmg:"W6", tags:["Durchschlagend", "Nachladen"]}, ". Gelegentlich trägt eines der Mitglieder des Trupps eine ", {x:"Schrotflinte im Carog-Modell", dmg:"W6", tags:["Kernschuss", "Nachladen"]}, ", wenn Ärger erwartet wird"]},
 {id:"herbstpaladine", t:"Herbstpaladine", en:"Autumn Paladins", buch:"qs", p:22, ort:"Schwester Karmesinwolken-der-Sonnenaufgang", ortId:"karmesin",
  namen:["Schreitet-über-die-Morgenröte", "Zehntausend-Lieben"], namenEn:["Strides-Across-Dawn", "Ten-Thousand-Loves"],
  beschr:["Trägt viele Reliquien", "Liest laut aus dem Dritten Buch der Ernte vor"],
  schw:{k:"2", x:"Paladine gehören zu den besten Kämpfern der ganzen Stadt und sind zudem am besten ausgerüstet. Schwierigkeit 2, es sei denn, ihr könnt die Chancen irgendwie ausgleichen"}, wid:{werte:[7]},
  ausr:[{x:"Paladin-Dienstplatte", tags:["Rüstung 4"]}, ", ", {x:"Legrand-Gewehre in Militärqualität", dmg:"W6", tags:["Fernkampf", "Durchschlagend"]}, " oder ", {x:"Schrotflinten nach Carog-Art", dmg:"W6", tags:["Kernschuss", "Fernkampf", "Nachladen"]}, " und ", {x:"Schlingen", dmg:"W3", tags:["Schwächend"]}]},
 {id:"karmesin", t:"Schwester Karmesinwolken-der-Sonnenaufgang", kurz:"Schwester Karmesinwolken", en:"Sister Crimson-Clouds-The-Sunrise", buch:"qs", p:22, ort:"Snuff Out the Sun · Figuren", ortId:"karmesin", bildId:"karmesin",
  schw:{k:"0 (1)", x:"0, wenn sie ahnungslos ist, 1, wenn sie weiß, dass ihr hinter ihr her seid"}, wid:{werte:[8]},
  ausr:[{x:"Läuterungsklinge", dmg:"W6", tags:["Brutal", "Ermüdend"]}],
  druck:"Gehört einem unmodischen Kult an; in einen Drow verliebt."},
 {id:"standard", t:"Standardwerte", en:"Default Stats", buch:"qs", p:22, ort:"Snuff Out the Sun · Gegner", ortId:null,
  einl:"Manche NSC haben, wenn sie gut kämpfen können oder interessante Fähigkeiten besitzen, Werteblöcke, die sie in mechanischen Begriffen beschreiben. Hat ein NSC keinen eigenen Werteblock, nutzt diesen Standardblock:",
  schw:{k:"0", x:"0"}, wid:{werte:[4]},
  ausr:["Was immer sie greifen können, um sich zu verteidigen ", {dmg:"W3"}]}
);
