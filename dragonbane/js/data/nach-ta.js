/* Anhang Tabellen (S. 120–122): Improvisierte Waffen (Gasthaus, Höhle, Wald), Schätze (aus tabellen.js). */
(function(){
 var Z = 0;
 function L(t, pts){ Z = Z % 6 + 1; return {karte:{h:Z + " · " + t, b:[pts[0], {ul:pts.slice(1)}]}}; }
 var kn = "Würfle, um den Gegner umzuwerfen (S. 48).";
 var inn = [
  L("Siedender Kessel",["Schütte das kochende Wasser in einem Kegel von 4 Metern Länge und Breite.","Jeder im Kegel erleidet 2W6 Schaden.","Dem Angriff kann ausgewichen, er kann aber nicht pariert werden.","Rüstung hat keine Wirkung."]),
  L("Eimer Seifenwasser",["Schütte das Seifenwasser in einem Kegel von 4 Metern Länge und Breite.","Jeder im Kegel stürzt zu Boden.","Dem Angriff kann ausgewichen, er kann aber nicht pariert werden."]),
  L("Brennendes Feuerholz",["Schlage einen Gegner innerhalb von 2 Metern mit dem Feuerholz.","Erfordert eine freie Hand.","Der Angriff trifft automatisch und verursacht 2W6 Feuerschaden plus Schadensbonus.","Dem Angriff kann ausgewichen werden, er kann auch pariert werden.","Das Feuerholz kann danach als Fackel benutzt werden."]),
  L("Wühlendes Schwein",["Würfle auf §Wildniskunde§, um das Schwein aufzustacheln, damit es einen Gegner deiner Wahl innerhalb von 10 Metern angreift.","Der Angriff trifft automatisch und verursacht 3W6 wuchtigen Schaden.","Dem Angriff kann ausgewichen, er kann aber nicht pariert werden.","Danach stürmt das Schwein davon."]),
  L("Weinflasche",["Schlage einen Gegner innerhalb von 2 Metern mit der Flasche.","Erfordert eine freie Hand.","Der Angriff trifft automatisch und verursacht 2W6 wuchtigen Schaden plus Schadensbonus.","Dem Angriff kann ausgewichen werden, er kann auch pariert werden.","Der Gegner bekommt Wein in die Augen, was so stark brennt, dass er bis zu deinem nächsten Zug einen Nachteil auf alle Aktionen erhält."]),
  L("Kronleuchter",["Schwinge dich am Kronleuchter und führe einen Nahkampfangriff aus.","Du kannst eine normale Bewegung ausführen, ohne freie Angriffe auszulösen.","Der Nahkampfangriff muss unbewaffnet sein, kann aber weder ausgewichen noch pariert werden.","Misslingt der Angriff, fällst du zu Boden und erleidest W6 wuchtigen Schaden."])];
 var hoe = [
  L("Stalaktit",["Stoße einen Gegner innerhalb von 2 Metern gegen die scharfen Felsformationen, die von der Decke hängen.","Der Angriff trifft automatisch und verursacht 2W6 stechenden Schaden plus Schadensbonus.","Dem Angriff kann ausgewichen, er kann aber nicht pariert werden.","Rüstung hat keine Wirkung, außer Helmen."]),
  L("Fackel",["Nimm eine Fackel von der Wand und schlage einen Gegner innerhalb von 2 Metern.","Erfordert eine freie Hand.","Der Angriff trifft automatisch und verursacht 2W6 Feuerschaden plus Schadensbonus.","Dem Angriff kann ausgewichen werden, er kann auch pariert werden.","Du darfst die Fackel danach behalten."]),
  L("Stalagmit",["Stoße einen Gegner innerhalb von 2 Metern gegen eine hohe Felsformation auf dem Höhlenboden.","Der Angriff trifft automatisch und verursacht W6 wuchtigen Schaden plus Schadensbonus und wirft den Gegner zu Boden.","Dem Angriff kann ausgewichen, er kann aber nicht pariert werden."]),
  L("Pfütze",[kn,"Gelingt es, muss der Gegner eine Aktion aufwenden und einen Wurf auf §Akrobatik§ ablegen, um wieder aufzustehen."]),
  L("Felsspalte",[kn,"Gelingt es, fällt der Gegner in eine 2W6 Meter tiefe Felsspalte und erleidet Sturzschaden.","Das Hinausklettern erfordert einen Wurf auf §Akrobatik§."]),
  L("Fledermäuse",["Würfle auf §Wildniskunde§, um die Fledermäuse aufzustacheln, damit sie einen Gegner innerhalb von 10 Metern angreifen.","Die Werte stehen auf S. 99.","Die Fledermäuse greifen den Gegner W3 Runden lang an.","Misslingt dein Wurf auf §Wildniskunde§, greifen die Fledermäuse stattdessen dich an."])];
 var wald = [
  L("Tiefer Ast",["Schwinge dich am Ast und führe einen Nahkampfangriff aus.","Du kannst eine normale Bewegung ausführen, ohne freie Angriffe auszulösen.","Der Nahkampfangriff muss unbewaffnet sein, kann aber weder ausgewichen noch pariert werden.","Misslingt der Angriff, fällst du zu Boden und erleidest W6 wuchtigen Schaden."]),
  L("Wespennest",["Würfle auf §Wildniskunde§, um das Wespennest aufzuheben und auf einen Gegner innerhalb von 10 Metern zu schleudern.","Der Gegner wird schlimm gestochen, was 2W6 Schaden verursacht und ihm einen Tagesabschnitt lang einen Nachteil auf alle Aktionen gibt.","Dem Angriff kann ausgewichen, er kann aber nicht pariert werden.","Rüstung hat keine Wirkung.","Misslingt dein Wurf auf §Wildniskunde§, stechen die Wespen stattdessen dich."]),
  L("Knorrige Wurzeln",[kn,"Gelingt es, muss der Gegner eine Aktion aufwenden und einen Wurf auf §Akrobatik§ ablegen, um wieder aufzustehen."]),
  L("Felsbrocken",["Würfle auf §Akrobatik§, um auf den Felsbrocken zu springen und dich auf einen Gegner innerhalb von 2 Metern zu werfen.","Der Angriff verursacht 2W6 (wuchtigen) Schaden plus Schadensbonus und kann weder ausgewichen noch pariert werden.","Gelingt er, gehen du und der Gegner zu Boden.","Misslingt dein Wurf, fällst nur du um und erleidest W6 Schaden."]),
  L("Viper",["Würfle auf §Wildniskunde§, um die Schlange aufzuheben und auf einen Gegner innerhalb von 10 Metern zu werfen.","Der Gegner wird gebissen, was W6 Schaden und ein tödliches Gift der Wirkstärke 12 verursacht, wenn der Biss die Rüstung durchdringt.","Dem Angriff kann ausgewichen, er kann aber nicht pariert werden.","Misslingt dein Wurf auf §Wildniskunde§, beißt dich die Schlange stattdessen."]),
  L("Erdklumpen",["Wirf Erde in die Augen eines Gegners innerhalb von 10 Metern.","Der Gegner erleidet W6 Schaden (Rüstung hat keine Wirkung) und erhält für den Rest des Kampfes einen Nachteil auf alle Aktionen.","Dem Angriff kann ausgewichen, er kann aber nicht pariert werden."])];
 function tb(id, a){ return a; }
 var S = DB_TAB.schaetze;
 DB_NACH.ta = {id:"ta", n:"", t:"Tabellen", p:120, abs:[
  {id:"waffen", t:"Improvisierte Waffen", p:120, b:[{h:"Gasthaus", p:120, voll:1}].concat(inn, [{h:"Höhle", p:120, voll:1}], hoe, [{h:"Wald", p:121, voll:1}], wald)},
  {id:"schaetze", t:"Schätze", p:121, b:[
   S.einl,
   {h:S.t1.h, p:121}, {tbl:{voll:1, head:S.t1.cols, rows:S.t1.rows}},
   {h:S.t2.h, p:122}, {tbl:{voll:1, head:S.t2.cols, rows:S.t2.rows}}]}
 ]};
})();
