/* Discworld – Bereich „Charaktere“, Teil D: Eröffnungsszene, wiederkehrende Charaktere (S. 92–93), vorgefertigte Charaktere (S. 94–96) */
DW.reg("charaktere", [

{id:"eroeffnung", g:3, t:"Eröffnungsszene", p:92, img:"char-gesichter", b:[
 "Jetzt, wo ihr eine Vorstellung von Gruppe und Figuren habt, ist es Zeit herauszufinden, was sie gerade tun. Das ist die Eröffnungsszene eures Abenteuers. Jedes Ergebnis der Tabelle unten ist so angelegt, dass es zu jeder Spielgruppe passt. Ihr könnt würfeln oder ein passendes Ergebnis für eure Gruppe wählen.",
 "Spieler:innen und Spielleitung sollten besprechen, was das Ergebnis bedeuten könnte. Wir ermutigen euch, den Widerspruch zwischen eurem Ziel, eurer Gruppe und dem, was ihr gerade tut, zu umarmen. Diese Dinge mögen völlig gegeneinander stehen, aber die Begründung, warum eure Gruppe glaubt, dass ihr das hilft, ihr Ziel zu erreichen, sorgt für lustige, interessante und einzigartige Abenteuer.",
 "Zauberer mit einem magischen Leiden, die gerade einen Zauber versuchen, erklären sich zum Beispiel ziemlich von selbst. Sie haben eine ernste Krankheit und versuchen, sie mit Magie zu heilen. Eine Gruppe Narren dagegen, deren Ziel es ist, das Kommen und Gehen von Hühnern zu untersuchen, und die jetzt einen Zauber versucht, ist ein ganz anderes Paar Schuhe. Umarmt das Chaos und den Spaß dabei, zu begründen, wie eure Figuren glauben, dass das, was sie gerade tun, ihr Gesamtziel voranbringt.",
 {t:"wt", id:"wteroeffnung", h:"Was tut ihr gerade?", w:"W12", rows:[
  ["1","Ein Verbrechen bezeugen. Was ist das Verbrechen, und seid ihr irgendwie darin verwickelt?"],
  ["2","Eure Morgenroutine erledigen. Jede Spieler:in beschreibt ihre Morgenroutine, bis sich die Gruppe an ihrem üblichen Treffpunkt trifft."],
  ["3","Einen Zauber versuchen. Tropfende Kerzen in einem unbeholfenen Vieleck stehen vor jedem von euch. War das so eine gute Idee, und was hat dieser Zauber mit dem Ziel eurer Gruppe zu tun?"],
  ["4","Gerade eine Prügelei verloren. Euer Kopf tut weh, und vielleicht wurdet ihr enteignet. Wer hat euch angegriffen, und hattet ihr es verdient?"],
  ["5","Unterwegs in der Nacht. Halb betrunken und bereit zu feiern! In was für einer Kneipe seid ihr? Was ist der Anlass?"],
  ["6","Versuchen, euch an letzte Nacht zu erinnern. In den Zellen der Wache aufzuwachen ist schlimm genug, aber euer Kater macht es noch schlimmer."],
  ["7","Den schlimmsten Tag eures Lebens haben. Was ist alles schiefgegangen?"],
  ["8","Vor einem großen Schatz stehen. Was ist es, und wie seid ihr dazu gekommen?"],
  ["9","Auf ein Gruppenmitglied hinabblicken, das … ja, ziemlich sicher tot ist. Wie ist es gestorben, und ist die Gefahr noch in der Nähe?"],
  ["10","Eure Spuren verwischen. Was habt ihr getan, und wie bringt ihr eure Hintern in Sicherheit?"],
  ["11","Verzweifelt etwas suchen. Was habt ihr verloren, wie habt ihr es verloren, und warum ist es so wichtig?"],
  ["12","Würfelt zweimal auf dieser Tabelle und verbindet beide Ergebnisse."]]},
 {t:"bsp", b:[
  "Mit ihren fertigen Figuren bereitet die Gruppe ihre Eröffnungsszene vor.",
  {t:"dlg", x:[["Morgan","„Corey, würfelst du uns aus, was wir gerade tun?“"],["Corey","„Ich habe eine 6, also versuchen wir, uns an letzte Nacht zu erinnern.“"],["Morgan","„Okay, aus irgendeinem Grund dachtet ihr also, dass Sich-volllaufen-Lassen euch helfen würde, William de Worde zu finden. Ich schätze, wir müssen spielen, um herauszufinden, was ihr euch dabei gedacht habt.“"]]},
  "Das Spiel beginnt damit, dass unsere fleißigen Reporter in den Zellen der Wache sitzen und sich fragen, wie zum Henker sie dort gelandet sind. Ihr Kater liefert zumindest auf diese Frage vielleicht ein paar Hinweise."
 ]}
]},

{id:"rueckkehr", g:3, t:"Wiederkehrende Charaktere", p:93, b:[
 "*Abenteuer in Ankh-Morpork* ist in erster Linie für kurze Geschichten gedacht. Es funktioniert am besten als Gaumenreiniger oder als Pause, in der ihr und eure Freund:innen eine lustige, interessante und satirische Geschichte erzählt. Allerdings enthalten die Scheibenwelt-Romane übergreifende Handlungsstränge und Verbindungen, die ihr in euren Spielen vielleicht mit eher langem Atem erkunden wollt.",
 "Spielt ihr ein Abenteuer in derselben Kontinuität wie ein früheres Spiel, können Spieler:innen sich für eine wiederkehrende Figur entscheiden. Nehmt dazu euren alten Charakterbogen und ändert ihn wie folgt:",
 {t:"karten", x:[
  {h:"Eine Marotte weiterentwickeln", b:["Wählt eine Marotte auf eurem Charakterbogen und ändert sie so, dass sie zeigt, wie ihr euch in der Zwischenzeit verändert habt."]},
  {h:"Eine Marotte hinzufügen", b:["Habt ihr in eurem letzten Spiel einen Kern erlangt (siehe S. 17), macht ihn zu einer Marotte. Er ist jetzt Teil der Persönlichkeit eurer Figur."]},
  {h:"Kern entfernen", b:["Jeder Kern, den ihr hattet, ist jetzt eine Marotte; damit ist eure Figur frei für weitere Kernmomente. Entfernt jeden früheren Kern."]},
  {h:"Folgen auflösen", b:["Alle verbliebenen Folgen, die nicht mehr von Belang oder nicht mehr wahr sind, werden von eurem Bogen entfernt."]},
  {h:"Glück zurückgewinnen", b:["Setzt euer Glück auf 4 zurück."]}
 ]}
]},

{id:"vorgefertigt", g:4, t:"Vorgefertigte Charaktere", p:94, img:"nsc-paar", b:[
 "Wir haben hier eine Reihe vorgefertigter Mitglieder der Diebesgilde aufgenommen, für alle, die das Kopfsteinpflaster von Ankh-Morpork so schnell wie möglich unter den Stiefeln spüren wollen. Ihr müsst nur noch die Figuren verteilen, eure Eröffnungsszene aufbauen (S. 92), und schon könnt ihr organisierte Verbrechen begehen.",
 {t:"gruppe", name:"Die Baumwollläufer", org:"Diebesgilde", ziel:"Sich nach einer Nacht in der Stadt in die Diebesgilde schleichen", verg:"Wir haben getrunken und fanden es eine gute Idee, der Diebesgilde beizutreten", gegen:"Wir haben getrunken und fanden es eine gute Idee, der Diebesgilde beizutreten"},
 {t:"scs", x:[
  {name:"Igor „Die Hände“ Igor", pron:"Er/Ihm", org:"Diebesgilde", hg:"Ein Igor, dessen Familie ein kleines Geschäft in Ankh-Morpork betreibt", nische:"Ich kann jeden zusammenflicken", marotten:["Hat ein schwer zu bändigendes Experiment", "Immer auf der Suche nach Ersatzteilen", "Stets bereit, eine helfende Hand zu leihen"],
   b:"Jung für einen Igor, zumindest wenn man das Durchschnittsalter seiner Teile nimmt. Er kann jeden mit dem richtigen Material zusammenflicken oder im Notfall eine leichtsinnig abgetrennte Gliedmaße wieder annähen. Er ist immer bereit, eine Ersatzhand zu leihen, wo sie gebraucht wird. Igors Entscheidung, der Diebesgilde beizutreten, war anfangs verwirrend, aber ein Igor muss einen Herrn haben, und Gilden bieten viel bessere Leistungen als Vampire und Werwölfe."},
  {name:"Jimmy „Der Dummkopf“ Smith", pron:"Er/Ihm", org:"Diebesgilde", hg:"Mensch aus den Schatten", nische:"Das Gesicht", marotten:["Ein schneller Verstand und noch schnellere Worte", "Lebt auf geborgte Zeit", "Überraschend unauffällig"],
   b:"In jedem Sinne des Wortes überlebensgroß, hat sich Jimmy kürzlich den Spitznamen „Der Dummkopf“ eingehandelt, nachdem ein Auftrag gleichzeitig seitwärts, aufwärts, abwärts, vorwärts und rückwärts schiefging. Seine schiere Präsenz hat durch die jüngsten Ereignisse nur ein wenig gelitten, und er steckt nun viel Kraft in den Beweis, dass er es noch draufhat. So mancher ahnungslose Passant wurde in eines seiner Schnell-reich-werden-Vorhaben hineingeredet und hat es erst bemerkt, als der Wortwirbel sich legte. Dabei merken sie nebenbei auch, dass er sich für einen großen Mann unglaublich schwer auffinden lassen kann, wenn er es muss."},
  {name:"Pflaster „Die Mauer“", pron:"Sie/Ihr", org:"Diebesgilde", hg:"Troll, die nicht viel rauskommt", nische:"Die Mauer (wie ein Hehler, nur härter)", marotten:["Alles hat seinen Preis", "Kann einem Sammlerstück nicht widerstehen", "Klüger, als sie aussieht"],
   b:"Pflasters Haut weist sie durch und durch als Stadttroll aus. Wenn sie sich hinlegt, beschweren sich die Leute über Bremsschwellen. Sie ist für einen durchschnittlichen Troll klug und gerissen und weiß immer genau, wen die Schmuckstücke interessieren, die ihr zugeschickt werden. Unglücklicherweise wandert ihr Sammlerauge (und ihre Sammlerhand) manchmal, und ein paar Schmuckstücke landen in ihrer persönlichen Sammlung, statt auf dem Weg zu neuen Besitzern mit tiefen Taschen und ohne Interesse an der Provenienz zu sein (interessanterweise ein Wort, dessen Bedeutung Pflaster als einer der wenigen Trolle kennt)."},
  {name:"Nonsuch „und“ Myrtle", pron:"They/Them", org:"Diebesgilde", hg:"Wasserspeier, der etwas Neues ausprobiert", nische:"Den Laden auskundschaften", marotten:["Kommt liebend gern herum", "Unstillbare Neugier", "Weiß nicht, wann es aufhören sollte zu reden"],
   b:"Nonsuch und Myrtle war ein ziemlich sesshafter Wasserspeier, bis ihnen klar wurde, dass da draußen eine ganze Stadt darauf wartet, gesehen zu werden. Für Wasserspeier ungewöhnlich, funktioniert ihr Mund einwandfrei. Ihre übergroßen Ohren und Nasenlöcher lassen sie aussehen wie eine Mischung aus einem betagten Elefanten und einem rotznäsigen Kleinkind (vor allem, wenn es regnet). Ihren Spitznamen „und“ haben sie wegen ihrer Angewohnheit bekommen, allen genau zu erzählen, was sie sehen, und was sie sonst noch sehen, und was sie gerade jetzt sehen, und was sie denken, und so weiter, und so weiter."}
 ]}
]}

]);
