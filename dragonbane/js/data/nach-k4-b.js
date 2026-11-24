/* Kapitel 4 – Teil B: Nahkampf (S. 45–48), Fernkampf (S. 49). */
DB_NACH.ka.abs.push(
 {id:"nahkampf", t:"Nahkampf", p:45, b:[
  "Um jemanden im Nahkampf anzugreifen, musst du dich in der Regel innerhalb von 2 Metern vom Ziel befinden. Auf der Rasterkarte musst du auf einem Feld neben dem Feind stehen (auch diagonal). Im Nahkampf verwendest du die Fertigkeit, die zur geführten Waffenart gehört.",
  "**Schaden:** Trifft der Angriff, bestimmt deine Waffe, mit welchen Würfeln du den Schaden am Feind auswürfelst. Der Schaden kann durch deinen Schadensbonus und einen Drachenwurf erhöht und durch Rüstung verringert werden.",
  "**Schadensbonus:** Dein Schadensbonus richtet sich nach deinem Wert in dem Attribut, auf dem deine Waffenfertigkeit beruht – GEW oder STÄ.",
  "**Waffe:** Du kannst bis zu drei Waffen *griffbereit* haben. Trage sie im Bereich Waffen auf deinem Charakterbogen ein. Um mit einer Waffe anzugreifen, muss sie außerdem *gezogen* sein. Eine griffbereite Waffe zu ziehen oder deine gezogene Waffe gegen eine andere griffbereite zu tauschen, ist eine freie Aktion. Eine andere Waffe vom Boden oder aus deinem Inventar aufzuheben, kostet eine normale Aktion.",
  "**STÄ-Voraussetzung:** Manche Waffen haben eine STÄ-Voraussetzung. Ist deine STÄ niedriger, erhältst du einen Nachteil auf alle Angriffe und Paraden mit dieser Waffe. Ist deine Stärke geringer als die Hälfte der Voraussetzung, kannst du die Waffe gar nicht benutzen.",
  "**Griff:** Waffen erfordern eine oder zwei Hände. Du kannst nur eine zweihändige Waffe oder zwei einhändige Waffen (einschließlich eines Schildes) gleichzeitig gezogen haben. Die STÄ-Voraussetzung einer einhändigen Waffe sinkt um 3, wenn du sie mit beiden Händen hältst.",
  "**Lange Waffen:** Ein Angriff mit einer Waffe mit dem Merkmal *lang* (etwa ein langer Speer oder eine Lanze) trifft Feinde in bis zu 4 Metern Entfernung (zwei Felder). Mit so einer Waffe kann man auch an einem befreundeten Kämpfer vorbei angreifen und den Feind auf der anderen Seite treffen.",
  {h:"Liegende Ziele"},
  "Stehst du aufrecht, und dein Feind liegt am Boden, erhält dein Angriff einen Vorteil und verursacht zusätzlich W6 Schaden.",
  {h:"Kritischer Treffer"},
  "Würfelst du beim Angriff einen Drachen, erzielst du einen *kritischen Treffer*. Das bedeutet, dass ein Drachenwurf nötig ist, um den Angriff zu parieren oder ihm auszuweichen, und dass du einen der folgenden Effekte wählen darfst:",
  {ul:[
   "Würfle doppelt so viele Würfel für den Waffenschaden, bevor du Schadensbonus und andere Boni addierst. Landest du zum Beispiel mit einem Breitschwert (Schaden 2W6) einen kritischen Treffer und hast Schadensbonus W4, beträgt der Schaden 4W6+W4.",
   "Du kannst sofort einen zweiten Angriff gegen einen anderen Feind ausführen. Dieser zusätzliche Angriff ist eine freie Aktion.",
   "Rüstung hat gegen den Angriff keine Wirkung, da er eine Lücke oder Schwachstelle findet. Dieser Effekt kann nur gewählt werden, wenn der Angriff stechenden Schaden verursacht (optionale Regel, unten)."]},
  {stein:{h:"Schadensarten", b:[
   "Es gibt drei Schadensarten: hauend, stechend und wuchtend. Die Schadensarten verschiedener Waffen stehen in den Waffentabellen in Kapitel 6. Manche Waffen, etwa Schwerter, können sowohl hauenden als auch stechenden Schaden verursachen – du musst vor dem Würfeln ansagen, ob du zustichst oder zuschlägst. Die Schadensart beeinflusst die Wirksamkeit von Rüstungen, und Monster können gegen bestimmte Schadensarten resistent sein."]}},
  {stein:{h:"Stoßen", b:[
   "Triffst du einen Feind mit einem Nahkampfangriff und ist dein **STÄ**-Schadensbonus gleich hoch wie oder höher als der deines Gegners, kannst du den Feind zusätzlich zum Schaden bis zu 2 Meter in eine beliebige Richtung stoßen (auf ein angrenzendes Feld, falls du eine Rasterkarte benutzt).",
   "Diese Bewegung zählt nicht zur Gesamtbewegung des Feindes in der Runde und löst bei niemandem Freie Angriffe aus. Monster können weder stoßen noch gestoßen werden."]}},
  {h:"Parieren"},
  "Wirst du im Nahkampf getroffen, kannst du den Angriff mit einer gezogenen Waffe oder einem Schild *parieren*. Beachte, dass du zum Parieren keine Waffe ziehen kannst, da freie Aktionen nur im eigenen Zug ausgeführt werden. Du musst ansagen, dass du parierst, bevor der Angreifer den Schaden auswürfelt. Unbewaffnet kannst du nicht parieren. Denselben Angriff zu parieren und ihm auszuweichen ist ebenfalls unmöglich. Du kannst auch am Boden liegend parieren. Beim Parieren würfelst du gegen deinen Fertigkeitswert für die Waffe.",
  "**Reaktion:** Parieren ist eine Reaktion, da es die Initiativreihenfolge durchbricht. Es ersetzt deinen regulären Zug, und du musst deine Initiativkarte sofort umdrehen. Das heißt, du kannst nicht parieren, wenn du deinen Zug in der Runde schon hattest (siehe aber das Heroische Talent Defensiv).",
  "**Haltbarkeit:** Gelingt die Parade, trifft der Angriff deine Waffe oder deinen Schild, und du erleidest keinen Schaden. Übersteigt der Schaden jedoch die Haltbarkeit deiner Waffe, wird die Waffe beschädigt und kann nicht benutzt werden, bis sie mit einem Wurf auf §Handwerk§ repariert wurde.",
  "**Schild:** Hast du einen Schild gezogen, kannst du statt mit deiner Waffe mit ihm parieren. Für Schilde gibt es keine Fertigkeit – stattdessen kannst du jede STÄ-basierte Nahkampffertigkeit (also alle außer §Messer§ und §Stäbe§) verwenden, um mit einem Schild zu parieren.",
  "**Stechender Schaden:** Stechende Angriffe können eine Parierwaffe oder einen Schild nie beschädigen.",
  "**Monster:** Monsterangriffe (S. 83) können in der Regel nicht pariert werden, sofern nichts anderes angegeben ist.",
  "**Drachenwurf beim Parieren:** Würfelst du beim Parieren einen Drachen, führst du sofort einen Gegenangriff gegen deinen Gegner aus – ein automatischer Treffer mit deiner Waffe, der weder pariert werden kann noch ein Ausweichen zulässt. Das gilt nicht, wenn der Angreifer ebenfalls einen Drachen gewürfelt hat – dann brauchst du allein für die Parade einen Drachen und erhältst keinen Gegenangriff.",
  {stein:{h:"Dämonenwurf im Nahkampf", b:[
   "Würfelst du bei einem Nahkampfangriff einen Dämon, verfehlst du dein Ziel und kannst den Wurf nicht strapazieren. Außerdem kann dir ein weiteres Missgeschick passieren. Würfle auf der Tabelle unten. Ist das Ergebnis unsinnig, entscheidet die SL über die Wirkung."]}},
  {tbl:{id:"dnk", w6:1, head:["W6","Wirkung"], rows:[
    ["1","Du lässt deine Waffe vor deinen Füßen fallen. Sie aufzuheben ist eine Aktion."],
    ["2","Du gibst dich dem Feind preis, der einen Freien Angriff (S. 43) erhält, der weder pariert werden kann noch ein Ausweichen zulässt."],
    ["3","Deine Waffe dringt so tief in einen Gegenstand ein, dass sie stecken bleibt. Sie freizuziehen erfordert einen Wurf auf STÄ (zählt als Aktion)."],
    ["4","Du schleuderst deine Waffe versehentlich W3+3 Meter weit. Um sie aufzuheben, musst du dich bewegen und dann eine Aktion ausführen."],
    ["5","Du knallst deine Waffe gegen etwas Hartes und beschädigst sie. Jede Benutzung der Waffe erhält einen Nachteil, bis ein Handwerker sie repariert hat."],
    ["6","Du triffst dich versehentlich selbst. Würfle den Schaden wie üblich, aber ohne Schadensbonus."]]}},
  {stein:{h:"Pariebewegung", b:[
   "Parierst du einen Angriff erfolgreich, kannst du sowohl dich als auch den Feind um 2 Meter (ein Feld) in eine beliebige Richtung bewegen. Diese Bewegungen folgen den üblichen Regeln, zählen aber für niemandes Bewegung in der Runde und lösen bei niemandem Freie Angriffe aus."]}},
  {karte:{h:"Unbelebte Objekte treffen", p:46, b:["Triffst du ein unbelebtes Objekt wie eine Tür oder ein Schloss, trifft du automatisch – würfle nur den Schaden. Unbelebte Objekte haben allerdings oft einen Rüstungswert (S. 50)."]}},
  {h:"Ausweichen", p:47},
  "Als Alternative zum Parieren kannst du versuchen auszuweichen, wenn du von einem Angriff getroffen wirst. Denselben Angriff zu parieren und ihm auszuweichen geht nicht – du musst dich für eines entscheiden. Du kannst auch am Boden liegend ausweichen. Du musst ansagen, dass du ausweichst, bevor dein Gegner den Schaden auswürfelt. Würfle auf §Ausweichen§ – bei Erfolg entgehst du dem Angriff und erleidest keinen Schaden. Misslingt der Wurf, wirst du vom Angriff getroffen.",
  "**Reaktion:** Ausweichen ist eine Reaktion und erfordert wie das Parieren, dass du deinen Zug in der Runde noch nicht hattest. Hast du ausgewichen, ist dein Zug in der Runde verbraucht, und du musst deine Initiativkarte umdrehen.",
  "**Bewegung:** Bei erfolgreichem Ausweichen kannst du dich, wenn du willst, bis zu 2 Meter in eine beliebige Richtung bewegen. Diese Bewegung löst bei niemandem Freie Angriffe aus.",
  "**Monster:** Monsterangriffen (S. 83) kann in der Regel ausgewichen werden, sofern nichts anderes angegeben ist.",
  {h:"Besondere Angriffe", p:48},
  "Neben dem einfachen Versuch, den Feind zu treffen, gibt es im Nahkampf einige besondere Angriffe. Du musst immer ansagen, dass du einen besonderen Angriff einsetzt, bevor du den Angriff würfelst.",
  "Mehrere besondere Angriffe werden mit vergleichenden Proben gelöst. Würfelt die SL für einen NSC ohne die betreffende Fertigkeit, würfelt sie gegen den Standard-Fertigkeitswert 5 (S. 33).",
  "**Schwachstelle finden:** Ist deine Waffe stechend, kannst du versuchen, eine Lücke in der Rüstung oder natürlichen Panzerung des Feindes zu finden. Du erhältst einen Nachteil auf den Angriff, aber trifft er, gilt der Feind als ungepanzert.",
  "**Umwerfen:** Du versuchst, einen Feind zu Boden zu bringen, statt Schaden zu verursachen. Das wird mit einer vergleichenden Probe zwischen deinem Fertigkeitswert für die benutzte Waffe und dem §Ausweichen§ des Feindes gelöst. Hat deine Waffe das Merkmal Umwerfen, erhältst du einen Vorteil. Der Angriff zählt für dich als Aktion, nicht aber für deinen Gegner. Er kann weder pariert werden, noch lässt er ein Ausweichen zu. Wirksam ist es, hierbei mit einer weiteren Person zusammenzuarbeiten – bringst du den Gegner zu Fall, kann dein Freund den liegenden Feind angreifen, bevor er aufstehen kann.",
  "**Entwaffnen:** Du versuchst, deinen Feind zu entwaffnen, statt Schaden zu verursachen. Das wird mit einer vergleichenden Probe zwischen deinem und dem Fertigkeitswert des Feindes für die benutzten Waffen gelöst. Der Angriff zählt für dich als Aktion, nicht aber für deinen Gegner. Er kann weder pariert werden, noch lässt er ein Ausweichen zu. Hält der Feind die Waffe mit beiden Händen, erhältst du einen Nachteil. Gelingt es dir, landet die Waffe W6 Meter entfernt in einer Richtung deiner Wahl. Eine Waffe vom Boden aufzuheben ist eine Aktion. Entwaffnen wirkt nicht bei Schilden oder natürlichen Waffen.",
  "**Ringen:** Du versuchst, einen humanoiden Feind zu packen, statt Schaden zu verursachen. Das wird mit einer vergleichenden Probe zwischen deinem §Raufen§ und dem §Raufen§ des Feindes gelöst. Der Angriff zählt für dich als Aktion, nicht aber für deinen Gegner. Er kann weder pariert werden, noch lässt er ein Ausweichen zu.",
  "Misslingt dein Versuch, fällst du zu Boden. Gelingt er, fallt ihr beide zu Boden, und der Feind ist in deinem Griff gefangen. Solange du den Griff hältst, kann der Feind sich weder bewegen noch eine Aktion ausführen, die Körperbewegung erfordert, außer dem Versuch, sich zu befreien. Das ist eine vergleichende Probe zwischen deinem §Raufen§ und dem §Raufen§ des Feindes. Der Wurf ist für den Feind eine freie Aktion, nicht aber für dich.",
  "Während du den Griff hältst, kannst auch du dich nicht bewegen oder Aktionen ausführen, die Körperbewegung erfordern, außer zu brechen – das zählt als unbewaffneter Angriff mit einem Vorteil, der weder ausgewichen noch pariert werden kann. Den Feind loszulassen ist eine freie Aktion.",
  {karte:{h:"Nahkampftaktik", p:48, b:[
   "Um im Nahkampf erfolgreich zu sein, ist es wichtig zu begreifen, dass deine Aktionen deine kostbarste Ressource sind – du erhältst nur eine pro Runde, Reaktionen wie Ausweichen oder Parieren eingeschlossen.",
   "Kämpfen mehrere Spielercharaktere gemeinsam, ist es oft sehr wirkungsvoll, sich auf denselben Feind zu konzentrieren, da dieser nur einmal parieren oder ausweichen kann und damit mehreren Angriffen ausgeliefert ist.",
   "Denke aber immer daran, dass auch du nach deiner Aktion Angriffen ausgesetzt bist. Die Heroischen Talente Defensiv und Blitzschnell verbessern deine Fähigkeit, dich gegen mehrere Gegner zu verteidigen erheblich.",
   "Im Einzelkampf gegen einen Gegner, der so stark ist wie du, kann es klug sein abzuwarten und den Feind zuerst zuschlagen zu lassen. Verfehlt dich sein Angriff, musst du weder parieren noch ausweichen und kannst dann selbst angreifen, während der Feind sich nicht schützen kann. Der Nachteil ist, dass du die Initiative an deinen Feind abgibst, der eine völlig andere Aktion wählen könnte, als du erwartet hast."]}}
 ]},
 {id:"fernkampf", t:"Fernkampf", p:49, b:[
  "Um eine Fernkampfwaffe zu benutzen, muss sie wie im Nahkampf zuerst gezogen sein (freie Aktion). Du solltest dich vorzugsweise mehr als 2 Meter vom Ziel entfernt befinden (also *nicht* auf einem angrenzenden Feld der Karte). Stehst du 2 Meter oder weniger entfernt, erhältst du einen Nachteil auf deinen Angriff. Würfle gegen die Fertigkeit der benutzten Waffe. Für Wurfwaffen verwendest du dieselbe Fertigkeit wie für Nahkampfangriffe (etwa §Messer§ oder §Speere§). Trifft der Angriff, bestimmt die Waffe, mit welchen Würfeln du den Schaden auswürfelst.",
  "Der Schaden kann durch Schadensbonus und einen Drachenwurf erhöht und durch Rüstung verringert werden.",
  "**Schadensbonus:** Für Fernkampfwaffen erhältst du wie im Nahkampf einen Schadensbonus. Beachte aber, dass Armbrüste dir keinen Schadensbonus geben.",
  "**Reichweite:** Die Waffentabellen auf S. 74–75 geben die Reichweite verschiedener Waffen an – also die größte Entfernung (in Metern), auf die die Waffe wirksam eingesetzt werden kann. Du kannst auf Ziele bis zur doppelten angegebenen Reichweite schießen, erhältst dann aber einen Nachteil.",
  {h:"Kritischer Treffer"},
  "Würfelst du bei einem Fernkampfangriff einen Drachen, ist das ein kritischer Treffer, dem nur ausgewichen werden kann (oder der nur mit einem Schild pariert werden kann), wenn der Gegner ebenfalls einen Drachen würfelt.",
  "Außerdem darfst du einen der folgenden Effekte wählen:",
  {ul:[
   "Der Schaden deiner Waffe verdoppelt sich, ohne Schadensbonus und andere Boni. Würfle doppelt so viele Würfel wie üblich und addiere sie. Ein kritischer Treffer mit einem Langbogen verursacht zum Beispiel 2W12 Schaden.",
   "Rüstung und natürliche Panzerung haben gegen den Angriff keine Wirkung, da er eine Lücke oder Schwachstelle trifft. Dieser Effekt kann nur gewählt werden, wenn der Angriff stechenden Schaden verursacht (optionale Regel)."]},
  {h:"Parieren & Ausweichen"},
  "Einen Fernkampfangriff zu parieren erfordert einen Schild. Es funktioniert wie im Nahkampf, nur dass ein Drachenwurf dir keinen Gegenangriff gibt. Fernkampfangriffen kannst du genauso ausweichen wie Nahkampfangriffen.",
  {h:"Verdeckte Ziele"},
  "Ist deine Sicht auf das Ziel teilweise durch einen Gegenstand oder eine Person verdeckt – gleich ob Freund oder Feind –, erhältst du einen Nachteil auf deinen Angriff. Auf einer Rasterkarte kannst du an einer Person vorbeischießen, die zwischen dir und deinem Ziel steht, aber mit einem Nachteil. Ist das Ziel völlig außer Sicht, etwa hinter einer Wand verborgen, kannst du es gar nicht beschießen. Spielst du ohne Karte, entscheidet die SL, ob deine Sichtlinie teilweise oder vollständig blockiert ist.",
  {stein:{h:"Dämonenwurf im Fernkampf", b:[
   "Würfelst du bei einem Fernkampfangriff einen Dämon, verfehlst du dein Ziel und kannst den Wurf nicht strapazieren. Dir kann außerdem ein weiteres Missgeschick passieren. Würfle auf der Tabelle unten."]}},
  {tbl:{id:"dfk", w6:1, head:["W6","Wirkung"], rows:[
    ["1","Du lässt deine Waffe vor deinen Füßen fallen. Sie aufzuheben ist eine Aktion."],
    ["2","Dir gehen die Pfeile aus, und du musst Nachschub besorgen, bevor du die Waffe wieder benutzen kannst. Bei Schleudern oder Wurfwaffen würfle neu."],
    ["3","Du triffst einen wertvollen oder wichtigen Gegenstand in der Nähe. Die SL entscheidet, welcher es ist."],
    ["4","Du zerbrichst deine Waffe. Jede Benutzung der Waffe erhält einen Nachteil, bis ein Handwerker sie repariert hat."],
    ["5","Du triffst versehentlich einen zufälligen Spielercharakter oder befreundeten NSC. Würfle den Schaden wie üblich, Schadensbonus eingeschlossen."],
    ["6","Du triffst dich versehentlich selbst. Würfle den Schaden wie üblich, aber ohne Schadensbonus."]]}}
 ]}
);
