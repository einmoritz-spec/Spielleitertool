/* The Spire – Gegner der Domäne Verbrechen (Core, Buch-ID sp_cmf, Seitenversatz +5). Format wie gegner-qs.js / gegner-religion.js. */
window.SP_GEGNER = window.SP_GEGNER || [];
SP_GEGNER.push(
 {id:"harem", t:"Mitglied von Mother Moons Harem", en:"Mother Moon’s Harem Member", kurz:"Mother Moons Harem", buch:"cmf", p:102, ort:"Red Row", ziel:"stadt/verbrechen/redrow",
  namen:["Dancing-Gil", "Happy Lorenzo", "Altruim"],
  beschr:["Mit einer Rolle Klingendraht um einen Handschuh gewickelt", "In feine Seide gekleidet", "Mit einer angenähten Maske"],
  schw:{k:"0 (2)", x:"2, wenn sie die Menge auf ihrer Seite haben, sonst 0"}, wid:{werte:[7], x:"7, und jedes Mal, wenn sie einen Gegner niederstrecken, Auffrischen W3"},
  ausr:[{x:"Schöne, protzige Waffen an Ketten oder Bändern", dmg:"W6", tags:["Überraschend"]}, ", tief sitzende Hosen, Glitzer"]},
 {id:"pistole-anhaenger", t:"Anhänger der Pistole", en:"Followers of the Gun", buch:"cmf", p:102, ort:"Red Row", ziel:"stadt/verbrechen/redrow",
  namen:["Brother Cordite", "Sister Pin", "Initiate Chambers"],
  beschr:["Hat irre eingesunkene Augen", "Flüstert zwischen den Schüssen mit dem Revolver", "Hat die Zähne durch Patronenhülsen ersetzt"],
  schw:{k:"0", x:"Die meisten dieser Kultisten brauchen dringend eine gute Nachtruhe und eine warme Mahlzeit. 0"}, wid:{werte:[4, 6], x:"4, 6, wenn man Brother Hellion selbst bedroht"},
  ausr:[{x:"Wunderbar gepflegte Pistole oder Gewehr", dmg:"W8", tags:["Fernkampf"]}, ", aber ", {dmg:"W6", tags:["Fernkampf", "Nachladen"]}, " oder ", {dmg:"W6", tags:["Fernkampf", "Unzuverlässig"]}, " in den Händen jedes anderen. Die Waffe hat einen Namen"]},
 {id:"vorloren-wache", t:"Wache von Vorloren Standard", en:"Vorloren Standard Guard", buch:"cmf", p:103, ort:"Red Row", ziel:"stadt/verbrechen/redrow",
  namen:["Lucas Stissy", "Harry Lefren", "Michelle Debwah"],
  beschr:["Sichtbar zitternd", "Hochgerüstet und mit wildem Blick", "Lächelt unheimlich"],
  schw:{k:"0 (1)", x:"0, 1, wenn man sie in ihrem Hauptquartier angeht"}, wid:{werte:[5]},
  ausr:[{x:"Rüstung von Vorloren Standard", tags:["Rüstung 3"]}, ", ", {x:"nicht ganz legales Schwert", dmg:"W6"}, ", ", {x:"Red-Row-Revolver", dmg:"W6", tags:["Fernkampf", "Gefährlich"]}]},
 {id:"enfer-noir", t:"Mitarbeiter von L’Enfer Noir", en:"L’Enfer Noir Staff Member", buch:"cmf", p:103, ort:"Red Row", ziel:"stadt/verbrechen/redrow",
  namen:["Persistence", "Temperance", "Charity"],
  beschr:["Unheimlich identische androgyne Schönheit, nur durch Glyphentätowierungen hinter den Ohren zu unterscheiden"],
  schw:{k:"0", x:"0"}, wid:{werte:[6]},
  ausr:["Elegante, modische Kleidung, subdermale Rüstung (im Widerstand berücksichtigt), ", {x:"ausfahrbare Knochendorn-Fingerspitzen", dmg:"W3"}, ", ", {dmg:"W6"}, " wenn sie bei Widerstand 3 oder niedriger sind"]},
 {id:"gutterkin", t:"Gutterkin", en:"Gutterkin", buch:"cmf", p:106, ort:"Red Row", ziel:"stadt/verbrechen/redrow",
  namen:["Pieces", "Rock", "Junker"],
  beschr:["Ein räudig aussehender Hundejunge", "Ein Kobold mit einem Arm", "Ein blinder und vernarbter Aelfir"],
  schw:{k:"0", x:"0"}, wid:{werte:[3]},
  ausr:[{x:"Rostige Messer, gestohlene Hämmer, Schutt in Socken", dmg:"W3", tags:["Unzuverlässig"]}]}
);
