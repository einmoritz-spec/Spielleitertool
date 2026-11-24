/* SLUGBLASTER – Beats / Momente der Downtime (Regelbuch S. 24–25, Persönlichkeiten S. 42–51, Signaturen S. 53)
   k = Kosten [Anzahl, "style"|"trouble"] */
var SB_MOMENTE = {
 p:24,
 eig:{t:"Eigenschafts-Beats", einmal:true, x:[
  {id:"ursprung", t:"Ursprungsgeschichte", k:[3,"style"], x:"Eine Rückblende, die einen prägenden Moment aus deiner Vergangenheit zeigt. +1 Eigenschaft."},
  {id:"geschaerft", t:"Geschärft", k:[4,"style"], x:"Ein Teamkamerad inspiriert dich oder zeigt dir etwas über dich selbst. +1 Eigenschaft."}
 ]},
 familie:{t:"Familien-Bogen", x:[
  {t:"Trouble zu Hause", k:[2,"trouble"], x:"Deine Familie missbilligt es. Wie? Warum? Interessiert es dich? +1 Slam (*abgelenkt, besorgt* usw.) und wähle einen Teamkameraden, dem es auffällt."},
  {t:"Letzte Verwarnung", k:[3,"trouble"], x:"Ein Streit, eine Strafe oder ein Ultimatum. Was wollen sie? Was willst du? Was verstehen sie nicht? Was verstehst du nicht? +1 Doom."},
  {t:"Der letzte Tropfen", k:[4,"trouble"], x:"Atomkrieg, verbrannte Erde und Worte, die ihr beide bereut. +1 Slam (*Hausarrest, Gerät verloren* usw.) und +1 Doom. Was denkt die Crew?"},
  {t:"Erlösung", k:[4,"style"], x:"Wer macht den ersten Schritt zur Vergebung? Was hat sich geändert? Wie geht ihr jetzt anders miteinander um? −2 Doom, +1 Legacy oder Eigenschaft."}
 ]},
 angst:{t:"Angst-Bogen", x:[
  {t:"Angst", k:[2,"trouble"], x:"Du hast Probleme. Wissen wir, warum? Wie zeigen sie sich? +1 Slam (*wütend, eifersüchtig, depressiv* usw.) und wähle einen Teamkameraden, dem es auffällt."},
  {t:"Am Kämpfen", k:[3,"trouble"], x:"Deine Probleme werden schlimmer. Du lässt es an anderen aus, projizierst oder versuchst, das Problem auf die falsche Weise zu lösen. +1 Doom."},
  {t:"Dunkelheit", k:[4,"trouble"], x:"Dir geht es nicht gut. Deine Probleme verletzen deine eigene Crew. Wie? Was hast du gesagt? Was hast du getan? Was hast du nicht getan? +1 Bruch."},
  {t:"Katharsis", k:[4,"style"], x:"Wer hilft dir? Was verstehst du jetzt, was du vorher nicht verstanden hast? Was wirst du ändern? −1 Doom, −1 Bruch, +1 Legacy oder Eigenschaft."}
 ]},
 weitere:{t:"Weitere Beats", x:[
  {id:"brav", t:"Brav sein", k:[1,"style"], x:"Hausarbeiten, Hausaufgaben, Bibelstunde, pünktlich zur Schicht erscheinen. Du weißt schon, wirklich mal versuchen. Lösche 2 Trouble."},
  {id:"verdient", t:"Du hast es verdient", k:[5,"style"], x:"Eine Trophäe, ein nach dir benannter Trick, ein Stipendium, ein Moment, den du für immer schätzen wirst. +1 Legacy."},
  {id:"niederlage", t:"Eine Niederlage einstecken", k:[5,"trouble"], x:"Du erleidest einen Verlust, brennst eine Brücke nieder, machst Schulden oder löst eine drohende Gefahr aus. Weiß die Crew davon? +1 Doom."}
 ]},
 crew:{t:"Crew-Beats", x:[
  {id:"gelegenheit", t:"Gelegenheit", k:[2,"style"], x:"Der Crew passiert etwas Großartiges. Würfle eine Gelegenheit (S. 26)."},
  {id:"herausforderung", t:"Herausforderung", k:[5,"trouble"], x:"Der Crew passiert etwas weniger Großartiges. Würfle eine Herausforderung (S. 27)."},
  {id:"streit", t:"Streit", k:[5,"trouble"], x:"Ein Streit, Verrat oder zerbrochenes Band. Wie fühlt sich jeder Beteiligte durch dieses Thema bedroht? Hört alles als Angriff, sprecht in Anschuldigungen und konzentriert euch aufs Gewinnen. +1 Bruch."},
  {id:"versoehnung", t:"Versöhnung", k:[5,"style"], x:"Eine Entschuldigung, eine freundliche Geste oder ein neu gewachsenes Band. Ein Gespräch, in dem ihr wirklich zuhört, diese Kernanliegen ansprecht und den anderen sagt, wie ihr euch fühlt, nicht, was an ihnen falsch ist. −1 Bruch."}
 ]},
 werkstatt:{id:"werkstatt", t:"In der Werkstatt", p:53, k:[1,"style"], x:"Tüfteln, entwerfen, basteln, einkaufen usw. Tue eines oder alles davon:",
  l:["Installiere Mods, für die du die Bauteile hast.","Deinstalliere Mods und birg die Bauteile.","Tausche drei gleiche Bauteile gegen ein Bauteil deiner Wahl.","Würfle, um 1 zufälliges Bauteil zu bekommen."]},
 regeln:[
  "Die Kosten stehen bei jedem Beat: So viel Style bzw. Trouble löschst du, um ihn zu kaufen.",
  "Beats mit Trouble-Kosten kannst du immer kaufen, auch wenn du sie dir nicht leisten kannst. Dein Begräbnis, Freundchen.",
  "Eigenschafts- und Bogen-Beats kann man nur einmal kaufen. Bogen-Beats müssen in der aufgelisteten Reihenfolge gekauft werden, und pro Bogen nur einer je Downtime. Für alle anderen Beats gelten diese Grenzen nicht."
]};
