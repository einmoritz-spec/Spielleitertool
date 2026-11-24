/* HEART – Beispielkampagne „Hinab ins Herz“: Landmarken aus dem Grundbuch, nach Tiefe als Ringe um das Herz auf der Karte (S. 208–209).
   Felder: Schlüssel der Sechseckkarte (js/karte.js) → Landmarke. Delves: [Feld A, Feld B, Resistenz, Weg, Buchstelle].
   Buchstelle {lm, feld, such} = der Absatz der Landmarke, der die Verbindung begründet; {s, r} = Seitenverweis/Route.
   Resistenzen: nur Swinefall–Highrise steht im Buch (S. 133); die übrigen nach der Faustregel dort (12 ≈ drei Würfe, 16 ≈ vier). */
var HT_BSP = {
  t:"Hinab ins Herz",
  wege:{linie:"Die Vermissian-Linie", auftrag:"Der Weg der Aufträge"},
  felder:{
    "-5,2":"derelictus",
    "-4,1":"grip-station", "-4,0":"sump-station", "-3,-1":"grin-station", "-2,-1":"hang-station", "-2,0":"well-station", "-1,0":"terminus",
    "-4,3":"tempel-des-mondes-darunter", "-4,4":"rotkappenhain", "-3,3":"tunnel-des-nassen-drecks", "-2,2":"highrise", "-1,2":"swinefall", "0,3":"hallow", "0,2":"silikatblumen"
  },
  delves:[
    ["-5,2", "-4,1", 10, "linie"],
    ["-4,1", "-4,0", 10, "linie"],
    ["-4,0", "-3,-1", 12, "linie"],
    ["-3,-1", "-2,-1", 14, "linie"],
    ["-2,-1", "-2,0", 14, "linie"],
    ["-2,0", "-1,0", 16, "linie"],
    ["-5,2", "-4,3", 10, "auftrag"],
    ["-4,3", "-4,4", 10, "auftrag", {lm:"tempel-des-mondes-darunter", feld:"plots", such:"Rotkappenhain"}],
    ["-4,3", "-3,3", 10, "auftrag"],
    ["-4,3", "-2,2", 12, "auftrag", {lm:"highrise", feld:"plots", such:"Moon Beneath"}],
    ["-2,2", "-1,2", 14, "auftrag", {s:133, r:"nach/spielleitung/landmarken-info", t:"Beispiel-Delve des Grundbuchs: Route zwischen Swinefall und Highrise, Tiefe 2, Resistenz 14."}],
    ["-3,3", "0,3", 12, "auftrag", {lm:"tunnel-des-nassen-drecks", feld:"plots", such:"Weslin"}],
    ["0,3", "0,2", 16, "auftrag", {lm:"silikatblumen", feld:"text", such:"Hallow"}]
  ]
};
