BC_PART["ve-expedition/kreaturen"] = {id: "kreaturen", t: "Kreaturen", sub: "Flucht · Regeln · Eigene Kreaturen", s: 64, blocks: [
  {h: "Außergewöhnliche Kreaturen", s: 64},
  {t: "prose", cap: true, img: {src: "ve/expedition-kreaturen-silhouetten", pos: "50% 50%"}, p: [
    "Manche sagen, in den dunkelsten, tiefsten Winkeln des Ozeans lebten riesige Kreaturen längst vergangener Zeiten, die nie das Licht der Sonne sehen. Andere behaupten, Herden gigantischer vorzeitlicher Echsen hätten das Massensterben überlebt und streiften bis heute irgendwo unter der Erdkruste umher. Es gibt sogar Gerüchte über einen eisernen Riesen mit einer Maschine als Herz und eine geheimnisvolle Insel, auf der der König aller Bestien herrscht: ein Gorilla so hoch wie ein Berg.",
    "Diese Welt ist voller Außergewöhnlicher Kreaturen.",
    "Wenn sie euch feindlich gesinnt ist, ist eine **Außergewöhnliche Kreatur** ein Feind, der über das Unmögliche hinausgeht: Sie kann nicht verletzt oder getötet, nur verlangsamt und abgehängt werden.",
    "Wenn du jemals einer Außergewöhnlichen Kreatur gegenüberstehst, fängst du besser an zu rennen und sorgst dafür, dass deine Freunde dasselbe tun. Je näher sie herankommt, desto schwerer wird es dir, ihrem Zorn zu entkommen."
  ]},
  {h: "Flieht, ihr Narren!", s: 65},
  {t: "prose", p: [
    "Obwohl Außergewöhnliche Kreaturen nicht besiegt werden können, könnt ihr jederzeit versuchen, ihnen zu entkommen.",
    "Wenn dich eine Außergewöhnliche Kreatur zu jagen beginnt, stellt sie eine einzelne kritische Gefahr dar, aber je näher sie dir kommt, desto schwerer wird die Flucht."
  ]},
  {t: "cards", cols: 3, items: [
    {k: "1 kritische Gefahr", c: "#3d7a8f", p: "In der ersten Fluchtrunde stehen alle Abenteurer 1 kritischen Gefahr gegenüber. Schafft die Hälfte oder mehr der Abenteurer ihren Wurf, bleibt die Herausforderung in der nächsten Runde gleich schwer. Schafft jedoch weniger als die Hälfte der Abenteurer ihren Wurf, gewinnt die Kreatur an Boden, und die Abenteurer müssen in der nächsten Runde 2 kritischen Gefahren begegnen."},
    {k: "2 kritische Gefahren", c: "#3d7a8f", p: "Die Kreatur kommt näher, und alle Abenteurer müssen 2 kritischen Gefahren begegnen. Schafft die Hälfte oder mehr der Abenteurer ihren Wurf, bleibt die Herausforderung in der nächsten Runde genauso schwer. Andernfalls ist die Kreatur ihnen auf den Fersen, und in der nächsten Runde müssen die Abenteurer 3 kritischen Gefahren begegnen."},
    {k: "3 kritische Gefahren", c: "#3d7a8f", p: "Die Kreatur ist viel zu nah. Alle Abenteurer stehen 3 kritischen Gefahren gegenüber."}
  ]},
  {t: "prose", p: [
    "Normalerweise müssen die Abenteurer 3 Runden lang fliehen, aber der Schicksalsmeister kann entscheiden, dass die Kreatur sie bis zu 5 Runden lang verfolgt."
  ]},
  {h: "Welche Fertigkeit würfle ich?", s: 66},
  {t: "prose", p: [
    "Für jede Außergewöhnliche Kreatur gibt es zwei Tabellen mit je sechs Einträgen. Die Tabelle *Kreatur gegen Abenteurer* zeigt, welche Aktionen die Außergewöhnliche Kreatur bei der Verfolgung der Abenteurer zu Fuß unternehmen kann, während die Tabelle *Kreatur gegen Fahrzeug* zeigt, was sie tun kann, wenn die Abenteurer in einem Fahrzeug fliehen.",
    "Der Schicksalsmeister sollte gleich zu Beginn der Flucht wählen, welche Tabelle besser zu den Umständen passt.",
    "Zu Beginn jeder Fluchtrunde würfelt der Schicksalsmeister, um zufällig zu bestimmen, was die Außergewöhnliche Kreatur tut, und das Ergebnis in der Tabelle legt auch fest, welche Fertigkeit die Abenteurer würfeln müssen, um zu entkommen. Würfelt der Schicksalsmeister zweimal hintereinander dasselbe Ergebnis, wiederholt er den Wurf, bis ein anderes Ergebnis fällt.",
    "Jede Außergewöhnliche Kreatur verhält sich anders, aber wenn du eine allgemeine, spielfertige Kreatur brauchst, kannst du die folgenden Tabellen verwenden."
  ]},
  {t: "cards", cols: 2, items: [
    {k: "Tabelle", h: "Außergewöhnliche Kreatur gegen Abenteurer", items: [
      "1 – Die Kreatur prescht los: **Stunt (Aktion)**",
      "2 – Die Kreatur brüllt: **Kaltblütigkeit (Mut)**",
      "3 – Die Kreatur greift an oder packt zu: **Zäh (Wildnis)**",
      "4 – Die Kreatur löst ein Erdbeben aus: **Schleichen (Aktion)**",
      "5 – Die Kreatur reißt etwas nieder: **Wachsam (Mut)**",
      "6 – Die Kreatur bleibt stecken: Kein Wurf nötig"
    ]},
    {k: "Tabelle", h: "Außergewöhnliche Kreatur gegen Fahrzeug", items: [
      "1 – Die Kreatur rammt: **Zäh (Wildnis)**",
      "2 – Die Kreatur brüllt: **Kaltblütigkeit (Mut)**",
      "3 – Die Kreatur wälzt das Fahrzeug um: **Stunt (Aktion)**",
      "4 – Die Kreatur beschädigt das Fahrzeug: **Technik (Mut)**",
      "5 – Die Kreatur verschwindet und greift dann von der Seite an: **Wachsam (Verbrechen)**",
      "6 – Die Kreatur bleibt stecken: Kein Wurf nötig"
    ]}
  ]},
  {t: "prose", p: [
    "Wer das Fahrzeug steuert, muss immer zusätzlich auf Fahren (Mut) würfeln und sich einer weiteren einfachen Gefahr stellen. Scheitert er an dieser einfachen Gefahr, verliert das Fahrzeug einen Glückspunkt."
  ]},
  {h: "Eine Außergewöhnliche Kreatur erschaffen", s: 67},
  {t: "prose", p: [
    "Auf den nächsten Seiten beschreibe ich sechs Außergewöhnliche Kreaturen, die ihr auf eure Abenteurer loslassen könnt. Jede kommt mit vorgefertigten Tabellen mit allen nötigen Angaben. Wirklich, alles, was die Abenteurer tun müssen, ist rennen!",
    "Aber als Schicksalsmeister möchtest du vielleicht deine Fantasie auf die Probe stellen und eine eigene Außergewöhnliche Kreatur erschaffen und die Tabellen nach deinen Bedürfnissen ausfüllen. Bedenke dann: Für beste Ergebnisse sollte eine Außergewöhnliche Kreatur Fertigkeiten mehrerer verschiedener Felder prüfen, damit die Verfolgungsjagd für alle Abenteurer spannend und unterhaltsam ist.",
    "Du kannst einen „Ohne-Gefahr“-Eintrag in die Tabelle aufnehmen, einen glücklichen Zufall für die Abenteurer wie „Die Kreatur bleibt stecken“, aber das ist nicht zwingend."
  ]},
  {h: "Freie Wahl", s: 68},
  {t: "prose", p: [
    "Wenn eine Außergewöhnliche Kreatur die Abenteurer jagt, würfelt der Schicksalsmeister mit einem Würfel, um zufällig zu bestimmen, welche Aktionen die Kreatur ausführt und damit welche Fertigkeit die Abenteurer würfeln müssen, um der Gefahr zu entgehen.",
    "In der Regel bedeutet das, dass alle Abenteurer die Verfolgung bestehen, indem sie dieselbe Fertigkeit würfeln, so wie es der Schicksalsmeister vorgibt.",
    "Ein Abenteurer kann jedoch jederzeit eine geniale Lösung vorschlagen und darum bitten, in derselben Lage eine andere Fertigkeit zu würfeln. In diesem Fall entscheidet der Schicksalsmeister, ob der Abenteurer diese andere Fertigkeit würfeln darf oder nicht.",
    "Einerseits ist es wichtig, dass die Abenteurer während einer Verfolgung mehrere verschiedene Fertigkeiten würfeln und sich, wenn nötig, auch ihren Schwächen stellen müssen.",
    "Andererseits sollten die Regeln einer guten Geschichte oder einem unterhaltsamen Spiel nie im Weg stehen, sondern eher Hilfe und Richtschnur für besonders komplexe Situationen sein.",
    "Wie immer in Broken Compass sind die Regeln als flexibles Werkzeug zu verstehen und zu nutzen, nicht buchstabengetreu anzuwenden."
  ]},
  {t: "box", h: "Du kannst nicht davonlaufen, aber dich verstecken", p: [
    "Manchmal, wenn dich eine Außergewöhnliche Kreatur in ihrer Gewalt hat und es keinen Ausweg gibt, musst du dich darauf konzentrieren, so lange wie möglich zu überleben, während sie versucht, dich aus dem Fahrzeug oder dem Loch, in das du gekrochen bist, herauszuholen.",
    "Dieselben Regeln wie für eine aktive Verfolgung lassen sich auf diese Situationen anwenden, mit dem Unterschied, dass die Außergewöhnliche Kreatur nach Ablauf der vorher festgelegten Rundenzahl abzieht, weil sie müde ist oder anderswohin gerufen wird."
  ]},
  {h: "Auf eine Außergewöhnliche Kreatur reagieren", s: 69},
  {t: "prose", p: [
    "Obwohl die Abenteurer zur Flucht gezwungen sind, haben sie jedes Recht, zu reagieren, um sich in eine bessere Lage zu bringen und vielleicht sogar ihre Chancen auf die Heimkehr zu verbessern.",
    "Scheitern am Ende einer Verfolgungsrunde mehr als die Hälfte der Abenteurer an ihrem Wurf, kommt die Außergewöhnliche Kreatur näher, was zu einer neuen und noch schwereren Verfolgungsrunde führt. Das soll deutlich machen, dass die Abenteurer zusammenarbeiten müssen, denn sie stehen einer so großen Gefahr gegenüber, dass ihnen nur bleibt weiterzulaufen.",
    "Würfelt dagegen die Hälfte oder mehr der Abenteurer genug Erfolge, versuchen alle, die die Gefahren bestehen, durch eine Aktion zu reagieren. Dann geht es wieder ans Rennen.",
    "Bedenke, dass **jede Aktion gegen eine Außergewöhnliche Kreatur entweder eine extreme oder eine unmögliche Herausforderung ist** und dass es außerhalb eines Staffelfinales oder Halbstaffelfinales keine Möglichkeit gibt, eine Außergewöhnliche Kreatur wirklich zu besiegen.",
    "Eine gut ausgeführte Reaktion kann den Abenteurern in der folgenden Verfolgungsrunde zusätzliche Vorteile verschaffen oder die Außergewöhnliche Kreatur irgendwie verlangsamen. Der Schicksalsmeister muss entscheiden, wie diese Reaktionen die Verfolgung beeinflussen. Vielleicht streicht er eine Runde von der vorher festgelegten Zahl oder senkt sogar die Schwierigkeit der Gefahr.",
    "Wenn das Leben dir Zitronen gibt, wirfst du sie nach der Außergewöhnlichen Kreatur und hoffst, dass etwas passiert!"
  ]},
  {t: "box", h: "Schwärme, Rudel und Naturkatastrophen", p: [
    "Die meisten Außergewöhnlichen Kreaturen sind irgendwie riesige Bestien, aber dieselben Regeln lassen sich auch für Schwärme oder Rudel kleinerer Kreaturen verwenden, die in Massen eine ebenso große Bedrohung darstellen.",
    "Alternativ können die Verfolgungsregeln aus den Außergewöhnlichen Kreaturen auch angewendet werden, wenn Abenteurer versuchen, einem Sturm oder einer anderen Katastrophe von ebenso epischem Ausmaß davonzulaufen!"
  ]}
]};
