/* The Spire – Gegner der Domäne Niedere Gesellschaft (Core, Buch-ID sp_cmf, Seitenversatz +5). Format wie gegner-qs.js / gegner-religion.js. */
window.SP_GEGNER = window.SP_GEGNER || [];
SP_GEGNER.push(
 {id:"ghul", t:"Ghul", en:"Ghoul", buch:"cmf", p:118, ort:"Derelictus", ziel:"stadt/nieder/derelictus",
  namen:["Broken-Hand", "Last", "Miriam"],
  beschr:["Umklammert eine schlecht vernähte Wunde", "Bedeckt mit Hingabe-Tätowierungen für King Teeth", "Trägt ihre alte Kleidung, um sich zu tarnen"],
  schw:{k:"0", x:"0"}, wid:{werte:[5]},
  ausr:["Nichts von Wert, außer ein paar Andenken aus ihrem früheren Leben, aber ihre langen, schmutzigen Klauen, gestützt von sehnigen Muskeln, sind ", {x:"Waffen", dmg:"W3", tags:["Anhaltend W3", "Brutal"]}]},
 {id:"hungrige-tiefe-kultist", t:"Kultist der Hungrigen Tiefe", en:"Cultist of the Hungry Deep", buch:"cmf", p:118, ort:"Derelictus", ziel:"stadt/nieder/derelictus",
  namen:["Caelston", "Loath", "Drend"],
  beschr:["Ein Flüchtlings-Gnoll in zerlumptem Umhang", "Hat milchig blinde Augen und keine Zähne", "Bleichhäutig und mit eingefallenen Wangen"],
  schw:{k:"0", x:"0 – Die Hungrige Tiefe zieht nicht die besten Kämpfer an, und die Mitgliedschaft fördert keinen gesunden Lebensstil"}, wid:{werte:[4, 7], x:"4, oder 7, wenn sie so tief drinstecken, dass sie auf den Luxus des Schmerzes verzichtet haben"},
  ausr:["Zivile Waffen wie ", {x:"Messer, Knüppel, schwere Steine", dmg:"W3"}, ", gelegentlich eine zweifelhafte ", {x:"Brandbombe oder ein Sprengsatz", dmg:"W6", tags:["Streuung W3", "Fernkampf", "Gefährlich", "Einweg"]}, ", vielleicht eine ", {x:"schlechte Rüstung", tags:["Rüstung 2", "Schwer"]}]},
 {id:"bound-selbstjustizler", t:"Bound-Selbstjustizler", en:"Bound Vigilante", buch:"cmf", p:121, ort:"Perch", ziel:"stadt/nieder/perch",
  namen:["Kurt", "Ana", "Cho"],
  beschr:["Arme in Lederschnüre gewickelt", "Raucht stechende Zigarillos", "Trägt eine Schiebermütze"],
  schw:{k:"1", x:"1 auf heimischem Boden, und man dürfte sie kaum anderswo finden"}, wid:{werte:[5]},
  ausr:[{x:"Lederpolster und fest geknüpftes Seil", tags:["Rüstung 2"]}, ", ", {x:"eine wild aussehende Klinge, in der ein Gott lebt", dmg:"W6"}, " (Gefährlich, wenn man sie ihnen abnimmt und benutzt, ohne sie zuvor zu entweihen), Seile und andere Kletterausrüstung"]}
);
