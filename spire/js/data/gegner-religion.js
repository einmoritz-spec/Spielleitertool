/* The Spire – Gegner der Domäne Religion (Core, Buch-ID sp_cmf, Seitenversatz +5). Format wie gegner-qs.js.
   wid.x = voller Buchtext zum Widerstand (wird angezeigt, wenn er mehr als die Zahl enthält); wid.plus = Zuschlag je Umstehendem (Knopf). */
window.SP_GEGNER = window.SP_GEGNER || [];
SP_GEGNER.push(
 {id:"vigiliten", t:"Vigiliten", en:"Vigilites", buch:"cmf", p:163, ort:"Die Sekte unserer Karmesinroten Wacht", ziel:"stadt/religion/karmesin",
  namen:["Corvy", "Huxton", "Wesyll"],
  beschr:["Trägt eine scharlachrote Kapuzenrobe", "In die heiligen roten Seile der Bound gekleidet", "Mit nacktem Oberkörper und bedeckt mit Andachtstätowierungen"],
  schw:{k:"0 (1)", x:"Die Karmesinrote Wacht zieht nicht die geschicktesten Krieger an – Schwierigkeit 0, es sei denn, du versuchst, ihre Entschlossenheit zu brechen, dann Schwierigkeit 1"},
  wid:{werte:[3, 5], x:"3, wenn du sie unvorbereitet erwischst, 5, wenn sie auf dem Kriegspfad sind"},
  ausr:[{x:"Brandbomben", dmg:"W6", tags:["Streuung W3", "Einweg"]}, ", ", {x:"Knüppel und Messer", dmg:"W3"}]},
 {id:"vigiliten-brandstifter", t:"Vigiliten-Brandstifter", en:"Vigilite Firebrand", buch:"cmf", p:163, ort:"Die Sekte unserer Karmesinroten Wacht", ziel:"stadt/religion/karmesin",
  namen:["Lux Meridian", "Ignacius", "Matchlock"],
  beschr:["Trägt Andachtsliteratur", "Hat sich teilweise selbst in Brand gesetzt", "Trägt seine Fesseln als Buße"],
  schw:{k:"0 (2)", x:"Bei all ihrem Getöse sind Brandstifter nicht geschickter als jene, die ihnen folgen; Schwierigkeit 0, oder 2, wenn du versuchst, sie zum Umdenken oder Nachgeben zu bewegen"},
  wid:{werte:[6], plus:"+1 je Vigilit in der Nähe"},
  bes:"Erhöhe ihren Widerstand für jeden Vigiliten in der Nähe um 1",
  ausr:[{x:"Rot angemalte, zusammengebastelte Schrotflinte", dmg:"W6", tags:["Fernkampf", "Kernschuss", "Nachladen", "Gefährlich"]}, ", ", {x:"ernst aussehendes Messer", dmg:"W3", tags:["Brutal"]}]},
 {id:"paladin", t:"Paladin", en:"Paladin", buch:"cmf", p:167, ort:"Die Sonnenbasilika", ziel:"stadt/religion/basilika",
  namen:["Schreitet-über-die-Morgenröte", "Hase-der-zum-Jäger-flitzt", "Zehntausend-Lieben"], namenEn:["Strides-Across-Dawn", "Hare-Dashing-To-The-Hunter", "Ten-Thousand-Loves"],
  beschr:["Trägt viele Reliquien", "Zurückgebundenes rotes Haar", "Liest laut aus dem Dritten Buch der Ernte vor"],
  schw:{k:"2", x:"Die Paladine gehören zu den besten Kämpfern der ganzen Stadt und sind auch die am besten ausgerüsteten. Schwierigkeit 2 auf ganzer Linie, es sei denn, du kannst die Chancen irgendwie ausgleichen"}, wid:{werte:[7]},
  ausr:[{x:"Paladin-Dienstplatte", tags:["Rüstung 4"]}, ", ", {x:"Legrand-Gewehre in Militärqualität", dmg:"W6", tags:["Fernkampf", "Durchschlagend"]}, " oder ", {x:"Schrotflinten nach Carog-Art", dmg:"W6", tags:["Fernkampf", "Kernschuss", "Nachladen"]}, " und ", {x:"Schlingen", dmg:"W3", tags:["Schwächend"]}, " sowie ", {x:"Sonnenbomben", tags:["Fernkampf", "Streuung W3", "Nicht tödlich"]}, ", die sie in Räume schleudern, bevor sie angreifen"]},
 {id:"hyaenenrudel", t:"Charnel-geschworenes Hyänenrudel", en:"Charnel-sworn Hyena Pack", buch:"cmf", p:170, ort:"Neuer Himmel", ziel:"stadt/religion/himmel",
  namen:["Heilig", "Gesegnet", "Geweiht", "Wunder"], namenX:"(vom Hundeführer gerufen, der einen Namen wie Wresh, Al’esha oder Ahemain trägt)",
  beschr:["Ein Auge", "Gesichtspiercings/-widerhaken", "Rot gefärbtes Haar"],
  schw:{k:"0 (1)", x:"Hyänen sind keine besonders geschickten Kämpfer: Schwierigkeit 0, aber jeder Versuch, ihnen zu entkommen oder die eigenen Spuren zu verwischen, hat Schwierigkeit 1"},
  wid:{werte:[3, 5], x:"3 pro Hyäne, die meist wegrennen, statt bis zum Tod zu kämpfen. Wenn ein Hundeführer bei ihnen ist, erhöhe ihren Widerstand auf je 5. Der Hundeführer hat ebenfalls Widerstand 5"},
  ausr:[{x:"Zähne und Klauen", dmg:"W3"}, ". Der Hundeführer hat Rüstung 1 (gegerbtes Leder und Knochen), eine ", {x:"schwere Armbrust", dmg:"W6", tags:["Fernkampf", "Nachladen"]}, " und einen ", {x:"nujabischen Beutehaken", dmg:"W3", tags:["Fernkampf", "Schwächend"]}]}
);
