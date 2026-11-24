/* Überblick: The Spire (Grundregelwerk „The City Must Fall“, S. 1–16) */
GM_INFO.spire = {
  tag: "The City Must Fall",
  setting: "Spire ist eine meilenhohe, unmögliche Stadt, älter als irgendwer zurückdenken kann. Vor zweihundert Jahren nahmen die Hochelfen – die **Aelfir**, seltsame und schöne maskierte Wesen aus dem fernen Norden – sie den Dunkelelfen nach einem brutalen und blutigen Krieg ab. Nun erlauben sie den Dunkelelfen, den **Drow**, gnädig, in der Stadt zu leben, wenn sie nach ihrer Volljährigkeit vier Jahre Dienst bei einem Aelfir-Lord leisten.",
  fakten: [
    ["Ihr spielt", "Mitglieder des **Ministeriums unserer Verborgenen Herrin**, eines paramilitärischen Kults, der eine verbotene Göttin verehrt"],
    ["Euer Eid", "die Hochelfen bekämpfen, ihre Mittel unterwandern und an euch bringen und Spire wieder in die Hände der Dunkelelfen bringen"],
    ["Spielleitung", "die **Spielleitung**; der Vorgesetzte der Zelle ist ihr **Magister**"],
    ["Widerstand", "Blut, Verstand, Silber, Schatten, Ruf"]
  ],
  wurf: { f: "W10-Pool", n: "1 W10, +1 je Fertigkeit, Domäne, Meisterschaft – der höchste zählt", s: [
    ["1", "Kritischer Fehlschlag – doppelter Stress", "bad"],
    ["2–5", "Fehlschlag – Stress nehmen", "bad"],
    ["6–7", "Erfolg mit Preis – Stress nehmen", "mid"],
    ["8–9", "Erfolg – kein Stress", "good"],
    ["10", "Kritischer Erfolg – +1 Stress je 10", "good"]
  ]},
  kern: [
    ["Schwierigkeit", "0 bis 2 Würfel weniger; mindestens 1 Würfel, darunter wird das Ergebnis je Punkt eine Stufe schlechter."],
    ["Stress", "Je nach Risiko W3, W6 oder W8; im Kampf so viel, wie die Waffe des Gegners verursacht."],
    ["Fallout", "Bei jedem Stress würfelt die Spielleitung einen W10 – liegt er unter dem Gesamtstress, gibt es Fallout."],
    ["Bindungen", "Verbindungen der Spielerfiguren zu anderen Leuten, Gruppen oder Organisationen in Spire – im Großen und Ganzen positiv, wenn auch vielleicht kompliziert."]
  ]
};
