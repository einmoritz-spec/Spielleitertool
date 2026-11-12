/* Metro-Regeln, Kapitel 2 (Charakter & Crew), S. 66–75. Eigene deutsche Fassung nach Themen. Seiten = Buchseiten. */
var OS_METRO_REGELN_1 = [
 {id:"c-einstieg", titel:"Einstieg & Lernweg", seite:67, bloecke:[
  {t:"p", x:"Alle Aktionen in :Otherscape werden mit einem einzigen Wurf aufgelöst. Mythische Fähigkeiten, Cyber-Verstärkungen und reine Menschenkraft folgen denselben einfachen Regeln. Tags und Kontext geben jeder Aktion ihren eigenen Charakter."},
  {t:"liste", items:["**Schnell lernen:** nur die Abschnitte „Rapid Download“ lesen. Sie sind zum Vorlesen am Tisch gedacht und lassen sich mit dem Starter-Abenteuer „Strings Attached“ kombinieren.","**Vertieft lernen:** Rapid Download und die ausführlichen Abschnitte danach lesen.","Abschnitte mit „For the MC“ sind für die Spielleitung gedacht."]}
 ]},
 {id:"c-rollen", titel:"Rollen, Gespräch, Serie & Szene", seite:69, bloecke:[
  {t:"liste", items:["**Spielleitung (MC):** Gastgeber und Erzähler, hält die Welt interessant, konsistent und fair.","**Spielercharaktere (PCs):** werden von den Spieler:innen gesteuert und bilden zusammen die Crew.","**Sekundärfiguren** (Verbündete, Drohnen, beschworene Geister) sind technisch PCs, gehören aber zum Charakterbogen ihrer Spieler:in und handeln nach denselben Regeln.","**NPCs:** alle übrigen Figuren, werden von der Spielleitung gesteuert. Gefahren für die PCs heißen Challenges (siehe S. 79–81)."]},
  {t:"liste", items:["**Gespräch:** das Spiel ist eine Unterhaltung am Tisch. Wenn Entscheidungen fallen, zählen „cinematische Überlegungen“: Was wirkt auf der großen Leinwand?","**Serie:** eine laufende Kampagne. **Session:** ein Spieleabend, oder das ganze Abenteuer bei einem One-Shot. **Szene:** eine Abfolge von Ereignissen an einem Ort und zu einer Zeit."]},
  {t:"liste", items:["Szenen folgen aufeinander, weil es in der Geschichte Sinn ergibt. Die PCs können eine Szene beginnen, oder die Spielleitung bzw. die Regeln lassen sie an einem neuen Ort angegriffen werden.","**Zwischenspiele:** Downtime (Erholung, Vorbereitung, Privates) liegt zwischen den Szenen. Eine **Cutscene** zeigt, was anderswo passiert, oft ohne dass die PCs es wissen."]}
 ]},
 {id:"c-charakter", titel:"Charakter & Crew im Überblick", seite:70, bloecke:[
  {t:"liste", items:["**Vier Themen** pro Charakter. Jedes Thema hat **3 Power-Tags** und **1 Schwächen-Tag**. Diese Tags sind dauerhafte positive bzw. negative Eigenschaften.","**Theme-Typen:** Rot = Self (wer man ist), Lila = Mythos (Kräfte aus einer Quelle), Blau = Noise (mächtige Technik im Besitz).","**Story-Tags** und **Statuses** kommen später dazu und beschreiben vorübergehende Dinge.","**Power-Tags werden verbrannt**, wenn sie benutzt werden. Verbrannte Tags sind nicht verfügbar, bis sie zurückgeholt werden. Ein Mark auf der Flamme neben dem Tag zeigt den Zustand.","**Jedes passende Power-Tag** gibt der Aktion 1 Power. **Schwächen-Tags** mindern die Aktion, helfen aber beim Wachsen.","**Motivation:** jedes Thema hat eine Bindung, der man folgen muss. Die **Crew** hat ein gemeinsames Crew-Theme mit eigenen Tags, Schwäche und Motivation."]},
  {t:"h", x:"Rapid Download: Aufbau für den Spielstart"},
  {t:"p", x:"Die Spieler:innen wählen einen der vorgefertigten Charaktere oder erstellen über die Serien-Einrichtung (S. 145) eigene. Mit den Schnelloptionen lässt sich eine Figur, ein Crew-Theme und eine Megacity in wenigen Minuten erstellen."}
 ]},
 {id:"c-charakterkarte", titel:"Charakterkarte", seite:72, bloecke:[
  {t:"p", x:"Ein Charakterbogen besteht aus Karten. Neben den vier Themen und dem Crew-Theme hat jede PC auch eine **Loadout-Karte** für Ausrüstung (S. 114) und eine **Charakterkarte**."},
  {t:"liste", items:["**Essenz:** die einzigartige Kombination aus Theme-Typen.","**Crew-Beziehungs-Tags:** je ein Tag pro anderer PC aus der Crew.","**Evolutionspunkte** (am Anfang keine) und **Momente der Evolution** (am Anfang keine).","**Specials:** Abschnitt für besondere Fähigkeiten, einschließlich des Essenz-Specials (S. 134)."]},
  {t:"h", x:"Tag-Typen"},
  {t:"liste", items:["**Power-Tags:** dauerhafte Stärken, die oft nützlich sind (z. B. charmant oder hat immer eine Waffe dabei).","**Loadout-Tags:** eine Art Power-Tag für Ausrüstung oder Kontakte, die vor einem Job geladen werden müssen (S. 114).","**Story-Tags:** situative Tags für eine Szene, etwa Wetter (Regen), Umgebung (rutschig), beschworene Kreatur oder improvisierte Waffe (S. 110).","**Statuses:** vorübergehende Zustände mit einer Stufe von 1 bis 6, z. B. verletzt-3 (S. 103). Sie sind grün markiert, Tags gelb.","**Schwächen-Tags:** dauerhafte Eigenschaften, die eher stören, z. B. waghalsig oder eine Waffe, die oft klemmt. Sie helfen dem Charakter zu wachsen."]},
  {t:"h", x:"Tag-Kategorien (Bedeutung in eigenen Worten)"},
  {t:"tabelle", kopf:["Kategorie","Bedeutung"], zeilen:[["Qualität","Eine Eigenschaft der Figur"],["Ausrüstung","Ein Gegenstand, der sichtbar mitgeführt wird"],["Assets","Vermögenswerte, Ressourcen"],["Fähigkeit","Erlernte oder angeborene Stärke"],["Skill","Fertigkeit, die man trainiert hat"],["Kontakte","Personen oder Gruppen, die man kennt"],["Szene","Ein Umstand in der aktuellen Szene"],["Status","Vorübergehender Zustand mit Stufe"]]}
 ]},
 {id:"c-tags", titel:"Tags treiben die Geschichte", seite:73, bloecke:[
  {t:"liste", items:["**Wörter statt Zahlen:** Tags sind kurze Beschreibungen, die fast alles im Spiel abdecken. Was wichtig ist, bekommt einen Tag.","**Alle Tags sind gleich stark** (außer Statuses). Ein Messer und eine Rakete geben beide 1 Power. Der Kontext entscheidet, was wirkt.","**Mehr Details, mehr Power:** Eine Aktion mit mehreren passenden Tags wird stärker. Eine Rakete mit Panzerabwehr-Munition, Brandsatz, Schwachstellen-Erkennung und Zielsuchern ist verheerend."]},
  {t:"h", x:"Dauer und Verbrennen"},
  {t:"liste", items:["**Power- und Schwächen-Tags** sind dauerhaft. **Story-Tags** und **Statuses** laufen ab, sobald es erzählerisch passt (z. B. liegt-3 endet, wenn die Figur wieder aufstehen kann). Manche werden später dauerhaft.","**Verbrannte Power-Tags** sind nicht nutzbar, bis sie wiederhergestellt werden, etwa durch Handlung oder in der Downtime (S. 124).","**Verbrannte Story-Tags** werden entfernt und kommen nicht zurück. Sie können aber mit den normalen Regeln neu erschaffen werden."]},
  {t:"h", x:"Nicht alles braucht einen Tag"},
  {t:"p", x:"Details ohne Tag sind trotzdem wahr. Ein Charakter kann gut aussehen oder reich sein, ohne dass es als Tag geführt wird. Solche Details zählen im Spiel aber weniger, weil sie keine Würfelwürfe beeinflussen. Die Spielleitung kann bei wichtigen Details jederzeit einen Story-Tag einfügen (S. 83)."}
 ]},
 {id:"c-themen", titel:"Themen & Motivationen", seite:74, bloecke:[
  {t:"p", x:"Ein Thema ist ein wichtiger Aspekt des Charakters, etwa Fähigkeiten, Technik, mythische Kraft, Hintergrund, Lebensaufgabe oder Persönlichkeit. Es wird durch eine Sammlung von Tags und anderen Spielelementen dargestellt. Themen können sich ändern und einander ersetzen."},
  {t:"tabelle", kopf:["Kategorie","Theme-Typen","Motivation"], zeilen:[
   ["Self (rot)","Affiliation, Assets, Expertise, Horizon, Personality, Troubled Past","Identität: man muss sie wahren, um die Verbindung zu sich selbst zu halten"],
   ["Mythos (lila)","Artifact, Companion, Esoterica, Exposure","Ritual: man muss es vollziehen, um die Kräfte der Quelle zu behalten"],
   ["Noise (blau)","Augmentation, Cutting Edge, Cyberspace, Drones","Itch: ein Impuls, dem man nachgeben muss, um die Technik integriert zu halten"]]},
  {t:"p", x:"Das Gleichgewicht zwischen Self, Mythos und Noise bestimmt die kosmische Natur der Figur, ihre Essenz (S. 134) und Zugang zu einem Essenz-Special."}
 ]},
 {id:"c-power-upgrades", titel:"Power-Tags, Schwächen & Upgrade-Track", seite:75, bloecke:[
  {t:"liste", items:["**Anfang:** 3 Power-Tags und 1 Schwächen-Tag je Thema. Ein neues Thema startet als **nascent** (Neuling) mit 1 Power-Tag und 1 Schwächen-Tag.","**Titel-Tag:** der erste Power-Tag jedes Themas. Er bestimmt Art und Kontext des Themas. Die weiteren Power-Tags beschreiben Aspekte davon.","**Schwächen-Tags** können von der Spieler:in freiwillig oder von der Spielleitung bzw. einer gegnerischen PC unfreiwillig ausgelöst werden.","**Upgrade-Track:** jedes Mal, wenn ein Schwächen-Tag das eigene Handeln mindert, wird ein Kästchen markiert. Bei drei Kästchen wird der Track zurückgesetzt und das Thema erhält ein Upgrade (neues Power-Tag, neues Schwächen-Tag, Special und mehr; S. 133)."]},
  {t:"h", x:"Decay-Track"},
  {t:"liste", items:["Wer gegen seine Motivation handelt (Identität missachtet, Ritual vernachlässigt, Itch ignoriert), markiert ein Kästchen auf dem **Decay-Track** dieses Themas.","Sind alle drei Decay-Kästchen markiert, wird das Thema **ersetzt** (S. 138). Ein anderer Aspekt rückt in den Mittelpunkt."]},
  {t:"h", x:"Theme-Specials"},
  {t:"p", x:"Specials verbessern die Fähigkeiten eines PCs. Ohne Upgrade gibt es keine Specials. Die Liste je Theme-Typ steht bei den Themenbüchern ab S. 196."}
 ]},
 {id:"c-crew", titel:"Das Crew-Theme & Crew-Beziehungen", seite:75, bloecke:[
  {t:"p", x:"Die Crew hat ein gemeinsames Crew-Theme mit Motivation, 3 Power-Tags und einem Schwächen-Tag. Es wird wie ein Charakter-Thema genutzt, mit folgenden Unterschieden:"},
  {t:"liste", items:["**Jede Spieler:in** darf alle Power- und Schwächen-Tags des Crew-Themes nutzen. Ein eingesetztes Crew-Power-Tag wird verbrannt. Es kann durch den Credit Roll (S. 125) zurückgeholt werden. Für Power kann es nicht verbrannt werden (S. 122).","**Die Spielleitung** darf den Schwächen-Tag des Crew-Themes in jeder PC-Aktion einsetzen. Die Spieler:innen markieren dann ein Upgrade-Kästchen am Crew-Theme und wählen gemeinsam die Crew-Theme-Upgrades (S. 134).","**Die Crew-Motivation** gilt für alle. Das Decay-Kästchen wird markiert, sobald eine PC gegen sie handelt. Wird das Crew-Theme ersetzt, zerbricht die Crew und braucht einen neuen Grund für die Zusammenarbeit."]},
  {t:"h", x:"Crew-Beziehungen"},
  {t:"liste", items:["Jede PC hat für jede andere PC **genau einen Beziehungs-Tag** auf der Charakterkarte, neben deren Namen.","Diese Tags gehören nicht zu einem Thema. Sie werden wie andere Tags eingesetzt, dabei verbrannt und können nicht für Power verbrannt werden.","Die Spielleitung darf Beziehungs-Tags als Schwächen-Tags in einer PC-Aktion einsetzen. Dann wird ein Upgrade-Kästchen am Crew-Theme markiert.","Beziehungs-Tags lassen sich im Credit Roll (S. 125) wiederherstellen oder ändern."]}
 ]}
];
