/* Regelblatt: Wurf, Kraft, Zustände, Hinweise, Momentum (Spieler:innen-Handbuch DE, gedr. S. 172–236). Paraphrasiert. */
window.NIGHTS = window.NIGHTS || { cases: {} };
window.NIGHTS.rules = window.NIGHTS.rules || {};
window.NIGHTS.rules.stufen = [
  [0,"keine Wirkung"],[1,"gering"],[2,"minderschwer"],[3,"erheblich"],[4,"dramatisch"],
  [5,"RAUS – handlungsunfähig, fortlaufend"],[6,"SL – tot/verwandelt, permanent"]
];
window.NIGHTS.rules.hardmode = [[0,0],[1,1],[2,2],[3,2],[4,3],[5,3],[6,3],[7,4]]; /* Kraft → Hard-Mode-Wert, S. 176; ab 7 = 4, negativ bleibt */
window.NIGHTS.rules.abschnitte = [
  { id:"wurf", t:"Wurf & Kraft", s:"S. 172–178", items:[
    "Ablauf: Handlung beschreiben und Grundaktion nennen → Kraft bestimmen → 2W6 + Kraft → Ergebnis laut Aktion umsetzen. Die SL würfelt nie.",
    "Kraft = +1 je relevanter Stärke − 1 je relevanter Schwäche + Stufe des höchsten hilfreichen Zustands − Stufe des höchsten hinderlichen Zustands. Pro Handlung bei 0 beginnen, negativ möglich.",
    "Ergebnis: ≤6 Fehlschlag (SL-Aktion), 7–9 Erfolg mit Preis, 10+ voller Erfolg, 12+ Mega! (nur wo die Aktion es vorsieht, sonst wie 10+).",
    "Eine aktivierte Schwäche gibt +1 Aufmerksamkeit am Thema. Die SL hat das letzte Wort, welche Merkmale greifen.",
    "Mindestens-1-Regel: Ein Erfolg bei Kraft ≤0 gibt trotzdem mindestens 1 Hinweis, 1 Momentum oder Zustand Stufe 1.",
    "Gleiche Aktion mit gleichen Merkmalen unter gleichen Umständen nicht wiederholbar. Verknüpfte Aktionen: ein Merkmal zählt nur in einer von beiden.",
    "Ausbrennen: Stärke freiwillig opfern → Kraft 3, der Wurf zählt als 7 (Basis 10, Zustände zählen weiter). Verbrannte Stärken sind bis zum Zusammenschnitt gesperrt.",
    "Hard Mode: 2W6 + Hard-Mode-Wert statt Kraft (Tabelle im Würfler)."
  ]},
  { id:"zust", t:"Zustände", s:"S. 218–226", items:[
    "Zustand = Name + Stufe 1–6, immer vorübergehend. Der Name passt zur Stufe und wird bei Änderung umbenannt.",
    "Auf Kraft wirken nur der höchste hilfreiche und der höchste hinderliche Zustand. Derselbe Zustand kann je nach Aktion hilfreich oder hinderlich sein.",
    "Stufe 5: Aktionen, die den Zustand betreffen, sind unmöglich. Stufe 6: Spieler:in gibt die Kontrolle ab.",
    "Gleiches Spektrum: höherer Zustand ersetzt niedrigeren · gleiche Stufe → +1 Stufe · niedrigerer Zustand → Pips (so viele Kästchen rechts der aktuellen Stufe, wie seine Stufe hat). Ist das Kästchen der nächsten Stufe erreicht, steigt die Stufe.",
    "Temporär und fortlaufend liegen nie auf einem gemeinsamen Spektrum. Temporär verfällt nach einer Handlung; Stufe 5 ist immer fortlaufend, Stufe 6 immer permanent.",
    "Reduzieren: Das Blatt wenden, Zusammenschnitt (Drehpause) oder Momentum.",
    "Bedrohungen: Spektren haben höchstens 6 Stufen, können Immunitäten haben und werden schon bei niedriger Stufe besiegt sein können. Ein Zustand, der zur Niederlage beiträgt, hilft den SC nicht als hilfreicher Zustand. Bedrohungen nutzen nicht „Sich der Gefahr stellen“."
  ]},
  { id:"hinw", t:"Hinweise", s:"S. 227–231", items:[
    "Hinweis = Spielressource, 1 Hinweis = 1 Frage an die SL. Jede Gruppe hat Methode und Quelle, beide unveränderlich; neue Methode oder Quelle = neue Gruppe.",
    "Die SL antwortet aus dem vorbereiteten Fall: direkte Antwort oder ein guter Hinweis auf die Antwort. Sie lügt nicht (Halbwahrheiten nur über eine 7–9-Komplikation).",
    "Tempo steuern: Hinweis statt Antwort, wenn die Gruppe sich mehr anstrengen soll; direkte Antwort, wenn der Plot vorangetrieben werden soll.",
    "Hinweise lassen sich aufsparen, verfallen aber, wenn die Information veraltet. Optional „umgekehrte Hinweise“: Spieler:in erfindet ein grobes Detail, die SL verwebt es mit dem Fall.",
    "Zusammenschnitt „Ermitteln“ gibt 3 Hinweise, „Mythos erforschen“ 1 Hinweis."
  ]},
  { id:"mom", t:"Momentum", s:"S. 232–236", items:[
    "Jede Einheit hat eine Methode, ist sparbar und jederzeit ausgebbar. 1 Punkt = z. B. ein temporärer Marker, ein verbrannter Marker, ein temporärer Zustand Stufe 1 (je weiterer Punkt +1 Stufe) oder ein gesenkter Zustand.",
    "Merkmale, mit denen Momentum erzeugt wurde, erzeugen kein weiteres, bis der Rest ausgegeben ist.",
    "Freund- und Feindpunkte sind Momentum bezogen auf ein Teammitglied, werden getrennt gezählt und heben sich nicht auf. Neue gibt es am Sitzungsende (Nerden beim Abspann)."
  ]}
];
