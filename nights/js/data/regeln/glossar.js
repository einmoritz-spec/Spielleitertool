/* Glossar (Spieler:innen-Handbuch DE, Kap. 1–4). Paraphrasiert; Seiten gedruckt. */
window.NIGHTS = window.NIGHTS || { cases: {} };
window.NIGHTS.rules = window.NIGHTS.rules || {};
window.NIGHTS.rules.glossar = [
  { k:"momentum", t:"Momentum", d:"Spielressource aus „Das Blatt wenden“. Wird 1:1 ausgegeben (Marker, Zustände, Boni). Jede Einheit hat eine Methode und verfällt, wenn sie veraltet.", s:"232", re:"Momentum" },
  { k:"hinweise", t:"Hinweis", d:"Spielressource aus Nachforschungen: 1 Hinweis = 1 Frage an die SL. Gebunden an Methode und Quelle.", s:"227", re:"Hinweis(?:e|en)?" },
  { k:"zustand", t:"Zustand", d:"Name + Stufe 1–6, immer vorübergehend. Nur der höchste hilfreiche und der höchste hinderliche Zustand wirken auf die Kraft. Stufe 5 = RAUS, Stufe 6 = SL.", s:"218", re:"Zustand|Zustände(?:n)?" },
  { k:"spektrum", t:"Spektrum", d:"Zustände derselben Art. Sie kumulieren: höherer ersetzt niedrigeren, gleiche Stufe gibt +1, niedrigere werden als Pips gesammelt. Bei Bedrohungen: Limits mit höchstens 6 Stufen.", s:"223", re:"Spektr(?:um|en)" },
  { k:"limit", t:"Limit", d:"Schwelle, bei der eine Bedrohung besiegt oder überwunden ist. Im Tool als Kästchen anklickbar. Ein „–“ bedeutet, dass diese Art Zustand die Bedrohung nicht trifft.", s:"222", re:"Limits?" },
  { k:"kraft", t:"Kraft", d:"Bonus auf den Wurf: Stärken − Schwächen + höchster hilfreicher Zustand − höchster hinderlicher Zustand.", s:"175", re:"Kraft" },
  { k:"mega", t:"Mega!", d:"Ergebnis 12+ bei Aktionen, die einen Mega!-Bonus vorsehen (z. B. Schlüsselinformation bei Nachforschungen).", s:"177", re:"Mega!" },
  { k:"aufmerksamkeit", t:"Aufmerksamkeit", d:"Leiste am Thema. Wächst durch aktivierte Schwächen, Antworten auf das Mysterium usw. Voll = Verbesserung.", s:"243", re:"Aufmerksamkeit" },
  { k:"verblassen", t:"Verblassen", d:"Niedergang eines Mythos-Themas, wenn man auf das Mysterium verzichtet. 3× Verblassen: Thema wird ersetzt.", s:"248", re:"Verblassen" },
  { k:"bruch", t:"Bruch", d:"Niedergang eines Logos-Themas, wenn man gegen die Identität handelt. 3× Bruch: Thema wird ersetzt.", s:"248", re:"Bruch" },
  { k:"nebel", t:"Der Nebel", d:"Lenkt ab, liefert Ausflüchte und lässt Zeug:innen vergessen. Er ändert nicht die Wirklichkeit: Folgen bleiben real, nur der legendäre Anteil wird weggedeutet.", s:"25", re:"(?:der )?Nebel" },
  { k:"riss", t:"Riss", d:"Mensch mit legendärem Mythos (Mythos-Themen) und Alltag (Logos-Themen).", s:"24", re:"Riss(?:e|en)?" },
  { k:"schlaefer", t:"Schläfer:in", d:"Figur ohne Mythos-Thema mehr: sieht die Welt „normalisiert“.", s:"272", re:"Schläfer(?::in|:innen)?" },
  { k:"avatar", t:"Avatar", d:"Figur ohne Logos-Thema mehr, reiner Mythos. Begegnungen mit Avataren sind identitätszerstörend.", s:"270", re:"Avatar(?:e|en)?" },
  { k:"bewusst", t:"Bewusstseinsgrade", d:"Verhältnis Mythos:Logos – Berührte 1:3, Grenzgänger:in 2:2, Legende 3:1.", s:"29", re:"Berührte(?:n|r)?|Grenzgänger(?::in|:innen)?|Legende(?:n)?" },
  { k:"slaktion", t:"SL-Aktion", d:"Reaktion der SL bei Fehlschlag (≤6): verschärft die Lage – Verletzung, neue Gefahr, Verlust.", s:"12", re:"SL-Aktion(?:en)?" },
  { k:"marker", t:"Geschichten-Marker", d:"Kurzer Tag ohne Stufe, temporär, fortlaufend oder permanent. Gibt +1 Kraft, wenn er hilft.", s:"212", re:"Geschichten-Marker|Marker" },
  { k:"fpunkte", t:"Freund-/Feindpunkte", d:"Momentum zwischen Teammitgliedern, ausgebbar zum Helfen oder Stören.", s:"236", re:"(?:Freund|Feind)(?:-| und |punkte)\\w*" },
  { k:"ausbrennen", t:"Ausbrennen / Verbrennen", d:"Verbrannte Stärke ist bis zum Zusammenschnitt gesperrt. Ausbrennen: Kraft 3, der Wurf zählt als 7.", s:"209", re:"Ausbrennen|Ausgebrannt|verbrannt\\w*" },
  { k:"hardmode", t:"Hard Mode", d:"Optionale Regel: statt Kraft zählt ein abgeflachter Wert (Kraft 3 → 2, ab Kraft 7 → 4).", s:"176", re:"Hard Mode" },
  { k:"mysterium", t:"Mysterium / Identität", d:"Mysterium: offene Frage eines Mythos-Themas. Identität: Überzeugung eines Logos-Themas.", s:"78", re:"Mysterium|Mysterien|Identität(?:en)?" },
  { k:"drehpause", t:"Zusammenschnitt / Drehpause", d:"Pause zwischen Szenen oder Sitzungen: Zustände senken, Stärken regenerieren, Hinweise sammeln.", s:"201", re:"Zusammenschnitt|Drehpause" }
];
