/* The Spire – Tag-Regeln (The City Must Fall, S. 21–22). Quelle für die Tag-Karten in Ausrüstung und für die Tooltips an den Tag-Chips der Gegner.
   „Anhaltend Wx“ / „Streuung Wx“: das x steht für den jeweiligen Würfel (W3, W6 …). */
window.SP_TAGS = {
  waffen:[
    {t:"Präzise", p:21, x:"Nimmt sich der Nutzer etwa eine Minute Zeit, den Schuss im Rahmen eines Hinterhalts oder Überraschungsangriffs vorzubereiten, wirft er beim Angriff mit Meisterschaft. Das ist nicht mehr möglich, sobald der Kampf begonnen hat."},
    {t:"Blutgebunden", p:21, x:"Markiere W3 Stress in Blut, um für den Rest der Situation mit Meisterschaft zu würfeln, wenn du diese Ausrüstung benutzt."},
    {t:"Gebunden", p:21, x:"Du kannst Fähigkeiten der Klasse Bound über diese Waffe einsetzen."},
    {t:"Brutal", p:21, x:"Wenn du mit dieser Waffe auf Stress würfelst, würfle zwei Würfel und nimm den höchsten. Mehrere Brutal-Tags addieren sich; hast du Brutal etwa dreimal erlangt, würfelst du beim Zufügen von Stress vier Würfel und nimmst den höchsten."},
    {t:"Verbergbar", p:21, x:"Wenn du versuchst, diese Waffe zu verbergen, würfle mit Meisterschaft."},
    {t:"Leiter", p:21, x:"Markiere W3 Stress in Verstand, um für den Rest der Situation mit Meisterschaft zu würfeln, wenn du diese Ausrüstung benutzt."},
    {t:"Gefährlich", p:21, x:"Zeigt dein höchster W10 eine 1 oder eine 2, wenn du diese Waffe benutzt, ist sie explodiert. Erleide W6 Stress; die Waffe ist zerstört."},
    {t:"Defensiv", p:21, x:"Während du diese Waffe benutzt, erhältst du einen zusätzlichen Widerstandsplatz in Rüstung."},
    {t:"Verheerend", p:21, x:"Von dieser Waffe zugefügter Stress kann nicht auf Rüstung verteilt werden, auch wenn diese den Tag Unerbittlich hat."},
    {t:"Doppelläufig", p:21, x:"Du kannst diese Waffe zweimal einsetzen, bevor du nachlädst, oder beide Läufe gleichzeitig abfeuern, um dem Angriff den Tag Brutal zu geben."},
    {t:"Extreme Reichweite", p:21, x:"Diese Waffe kann auf extreme Reichweite eingesetzt werden."},
    {t:"Meisterstück", p:21, x:"Der Schadenswürfel dieser Waffe steigt um 1 Stufe, wenn jemand sie benutzt, der die Fertigkeit Kämpfen mit Meisterschaft beherrscht."},
    {t:"Einweg", p:21, x:"Du kannst diese Waffe nur einmal pro Situation benutzen – das Nachladen dauert sehr lange."},
    {t:"Anhaltend Wx", p:21, x:"Am Ende der Situation muss eine Figur, die durch diese Waffe Schaden erlitten hat, eine Probe auf Widerstehen bestehen, sonst erleidet sie zusätzlichen Stress in Höhe des Wx-Werts."},
    {t:"Parierend", p:21, x:"Einmal pro Situation, wenn ein Feind dir im Nahkampf Stress auf Blut zufügt, zwinge die Spielleitung, den zugefügten Stress neu zu würfeln."},
    {t:"Durchschlagend", p:21, x:"Von dieser Waffe zugefügter Stress kann nicht auf Rüstung verteilt werden, es sei denn, die Rüstung hat den Tag Unerbittlich."},
    {t:"Kernschuss", p:21, x:"Auf extrem kurze Distanz steigt der Schaden dieser Waffe um 1 Würfelgröße; bei allem jenseits mittlerer Reichweite sinkt er um 1."},
    {t:"Fernkampf", p:21, x:"Diese Waffe kann auf Distanz eingesetzt werden."},
    {t:"Nachladen", p:21, x:"Hast du diese Waffe benutzt, kann sie erst wieder eingesetzt werden, nachdem du Zeit zum Nachladen aufgewendet hast."},
    {t:"Vernarbend", p:21, x:"Verursacht grässliche, hässliche Wunden bei Zielen."},
    {t:"Streuung Wx", p:21, x:"Gelingt dir ein Angriff mit dieser Waffe, fügst du die Hälfte des dem ursprünglichen Ziel zugefügten Stresses einer Anzahl weiterer Ziele in der Nähe zu, die dem Ergebnis deines Wx-Wurfs entspricht."},
    {t:"Überraschend", p:21, x:"Beim ersten Einsatz dieser Waffe in einer Situation wirfst du mit Meisterschaft."},
    {t:"Betäubend", p:21, x:"Gelingt dir ein Angriffswurf mit dieser Waffe, kannst du erklären, dass betroffene Ziele keinen Stress erleiden, aber ihre Schwierigkeit auf 0 sinkt, bis sie sich wieder gesammelt haben."},
    {t:"Ermüdend", p:22, x:"Scheitert eine Handlung mit diesem Gegenstand, sinkt sein Schaden um 1 Würfelgröße."},
    {t:"Unzuverlässig", p:22, x:"Scheitert eine Handlung mit dieser Ausrüstung, kann sie für den Rest der Situation nicht mehr benutzt werden."}
  ],
  ruestung:[
    {t:"Sturm", p:22, x:"Du kannst entscheiden, 1 Stress auf diese Rüstung zu markieren; tust du das, erhältst du bei deiner nächsten Handlung Meisterschaft auf Kämpfen."},
    {t:"Getarnt", p:22, x:"Die Rüstung ist dafür gemacht, den Träger in einem bestimmten Gelände zu tarnen; benutzt er in diesem Gelände Schleichen, tut er das mit Meisterschaft."},
    {t:"Verbergbar", p:22, x:"Wenn du versuchst, diese Rüstung zu verbergen, würfle mit Meisterschaft."},
    {t:"Unerbittlich", p:22, x:"Durchschlagende Waffen heben diese Rüstung nicht auf, Verheerende Waffen aber schon."},
    {t:"Schwer", p:22, x:"Solange du deine Rüstung trägst, darfst du die Fertigkeiten Verfolgen oder Schleichen nicht nutzen, um zusätzliche Würfel zu erhalten."}
  ],
  ruestungText:"Rüstung gibt einer Figur, die sie trägt oder bei sich führt, zusätzliche Widerstandsplätze in Blut, sodass sie mehr Treffer einstecken kann, bevor sie ihren Wunden erliegt."
};
