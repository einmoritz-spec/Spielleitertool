# Triangle Agency – Auftrag „Playwall-Dokumente gestalten und einbauen“

Stand 26. Nov. 2026. Alle 207 Dokumente sind übersetzt (`triangle/js/data/playwall-a.js … -z.js`, `TA_PWT[Code] = {t, s, b}`).
Anzeige: `triangle/js/playwall.js` (`pwDok`), Aussehen: `triangle/playwall.css`, Gestaltung je Dokument: Eigenschaften `art` und `bild` direkt am Dokument (`TA_PWT.A2 = {art:"dunkel", bild:"…", t:…}`).
Fünf Muster von Fable stehen: **A5** (Fähigkeit), **D4** (Beförderung mit Anforderungen), **A2** (Sonderseite auf Schwarz), **E2** (gelbes Klebeband), **O8** (Farbseite).
Ansehen: `python3 -I plan/triangle/skripte/shot.py /tmp/x 'pw/A5!'` (ein Code je Aufruf, die Dateinamen überschreiben sich sonst).

## Regeln
- Texte in `playwall-<buchstabe>.js` nur ändern, wo unten ausdrücklich verlangt (Bausteinwechsel, keine Umformulierung). `art` und `bild` stehen am Dokument selbst.
- Jede Seite gegen das Buchbild halten (PDF-Seite = Buchseite + 3) und per Screenshot prüfen, auch mit eingeklappter Kopfzeile.
- Bilder nur, wenn sie im Buch auf dieser Seite zu diesem Dokument gehören. Bilder mit eingebranntem englischen Text beschneiden (wie `playwall-a2-ripple-gun-waffe`).

## Arten (`art`)
| art | Dokumente | Aussehen |
|---|---|---|
| (leer) | alle übrigen | Akte auf Weiß, Titel blau, blauer Bogen unten |
| `rang` | A3 D4 G3 J3 N3 Q3 T3 W8 Z3 | rotes Kopfband mit Rangtitel, rote Überschriften, Vorteile als Karten |
| `dunkel` | A2, K1 | schwarzer Grund, Bild links (`bild`), Verlaufstitel |
| `blau` / `rot` | O8 / T7 | vollflächige Farbe, weißer Text zweispaltig |
| `bild` | reine Bildseiten | nur `vollbild` |

## Bausteine (neu in lesen.js)
- `{t:"band", x:[Absätze], rot?:1}` – Stimme der Playwall (gelb überklebte Großbuchstaben). **Alle** gelben Passagen darauf umstellen: E2 (Muster), H5, L11, N2, O4, T6, V2, X3, Z2 und alle weiteren, die im Buch gelb überklebt sind (heute `kasten`, `stempel`, `schwarz` oder fette Großbuchstaben-Absätze). Text ohne `**`.
- `{t:"notiz", x, pos?:"rechts"|"fuss"}` – handschriftliche Randnotizen von U (heute `klein`, `[!…!]` oder fette Kleinschreibung): M5, P10, P12, S15, L10, N1, T6, W6, H4. `fuss` setzt sie weiß auf den blauen Bogen wie im Buch.
- `{t:"vollbild", src}` – ganzseitige Bilder: S. 256–257 (Q2, Doppelseite), 274 (U2), 276 (V2), 284 (X2), 288, 290 (Z1), 292 (Z3), 221 (G3 Flyer), 232 (J3 Fische).
- `faehig` verträgt jetzt leeres `h`/`x`, fehlendes `erg`, Antworten ohne Code und Antworten ohne Frage. Die Notlösungen (`kasten` mit „F: … A: …“ in R8, R13, R15, S6, G9; `a:[…,""]`) auf `f`/`a` zurückführen. Über zwei Spalten verteilte Fähigkeiten (zweiter Teil mit `h:""`) wieder zu **einer** Fähigkeit zusammenführen – die Ergebnisse fließen von selbst zweispaltig.
- Kästchen-Leisten: `spur` (vorhanden). L10 (42 Felder in Schlangenlinie), R1, R8, Q3, E1 darauf umstellen; Felder anklickbar, Stand je Spielstand merken.

## Aufwendige Dokumente (einzeln bauen, je ein Screenshot)
1. **A1 Einsatzbericht** – ausfüllbares Formular wie S. 200 (eigene Etappe 6).
2. **D4** (Muster) – übrige Beförderungen genauso: G3 (Sponsoring-Würfel als W8-Raster, Flyer-Bild), J3 (Hollows, Fische), N3 (Mentorenprogramm: Eigenschaften und Aufgaben als zwei Raster), Q3, T3, W8 (zehn Urgents als Karten), Z3.
3. **K1/K2** – `dunkel` mit `playwall-x1-abnormal-briefcase` (Datei heißt irrtümlich x1), Schwärzungen als `schwarz` mit `blau:1`, wortweise wie im Buch statt ganzer Absätze.
4. **H4** (S. 225–226) – Notizzettel-Seite: Frage-Antwort-Paare als gedrehte `notiz`-Karten im Raster, Muster-Bögen als Karten.
5. **W6** – Warnfenster (`fenster`, art `fehler`) über dem Text.
6. **Q2** – Doppelseitenbild als Kopf, darunter die Schritte.
7. **Z2** – ganzes Dokument gelb (`band` durchgehend).
8. **Y2, Q1** haben im Buch keinen Titel: `t` leer lassen, Kopf zeigt dann nur den Code.

## Noch am Text zu prüfen
- F6: rote Dreien am Großbild prüfen. N1: ergänztes Verb („erzeugt“) gegen S. 244 prüfen. P10: „Disruptive Anomalien“ übersetzen.
- Rückbezüge auf andere Dokumente müssen deren Titel tragen (Liste der Titel: `Object.keys(TA_PWT).map(c => c + " " + TA_PWT[c].t)`).
- `TA_PW` um `"J?":230` ergänzen; Codefeld zeigt bei J zusätzlich „?“.

## Danach
`sw.js`: neue Dateien in `FILES`, `VERSION` +1. Suche („f“) nach Schalter „Wie im Buch“ / „Alles offen“. **Nicht pushen, solange das Repo öffentlich ist.**

## Arbeitsteilung beim Einbau (mehrere Agenten gleichzeitig)
- Du änderst **nur** die dir zugeteilten `playwall-<buchstabe>.js`, legst neue Bilder unter `triangle/img/regeln/full/` (+ `thumb/`, max. 400 px) mit Namen `playwall-<code>-<motiv>.webp` an und schreibst eigenes Zusatz-CSS nur in `triangle/playwall-<deine-buchstaben>.css` (Klassen mit Vorsatz `pw<buchstabe>-`, nur für `html`-Blöcke deiner Sonderseiten). **Nicht anfassen:** `playwall.css`, `js/lesen.js`, `js/playwall.js`, `js/app.js`, `index.html`, `sw.js`, fremde Datendateien. Kein git.
- Zum Ansehen deines Zusatz-CSS im Screenshot: am Anfang deiner ersten Datendatei steht die Zeile `document.head.insertAdjacentHTML("beforeend",'<link rel="stylesheet" href="playwall-<deine-buchstaben>.css">');` – nur wenn du eine CSS-Datei anlegst; im Bericht nennen.
- Screenshots: je Code ein eigener Zielordner (`/tmp/pw-<code>`), sonst überschreiben sich die Dateien. Jedes Dokument deines Bereichs einmal rendern und ansehen; Fehler beheben.
- Muster im Tool: A5, A2 (playwall-a.js), O8 (playwall-o.js). D4 (Bilder an den Preiskarten über `bild:` am Eintrag, Sammelbild `{t:"bild", src:"playwall-d4-anforderungen-haufen", pos:"mitte", w:520}` vor den Karten) und E2 (`band` in zwei Spalten statt `kasten`) baut der Agent für C–E nach den Bildern `plan/triangle/mockups/playwall-2-…` und `playwall-4-…`.
- `spur`: `{t:"spur", h:"Name", x:["1","2",…]}`. Fehlt dir etwas am Baustein (Schlangenlinie, Merken des Stands), baue es als `html` in deinem CSS und melde es.
- Bericht: je Code, was gebaut wurde; neue Bilder; offene Punkte; was du an gemeinsamen Dateien gebraucht hättest.

## Stand nach dem Einbau (26. Nov. 2026, gepusht)
Alle 207 Dokumente eingebaut, alle rendern ohne Skriptfehler. Zusatz-CSS der Agenten ist in `playwall.css` zusammengeführt, Hilfsfunktionen (`pwoLeiste`, `pwoKn`, `pwSpur`) liegen in `js/playwall.js`. Neue Bausteine: `kette`, Ergebnis-Art `txt` (Zwischentext ohne Symbol), `spur` anklickbar (Stand in `ST.pwSpur`).
Offen zum Durchsehen:
- Z2: Kontrast der Bänder auf Gelb, Listenzeichen als gelbe Quadrate; Z3-Thron steht auf Weiß statt Schwarz.
- W6: Abstand zwischen Notiz und „Das Angebot der Urgency“.
- L10: Handschrift bei langen Notizen etwas groß.
- R15: gestrichener Fragekasten (gehört laut Agent zu S1, S. 263) gegen das Buch prüfen.
- Nur gerendert, nie angesehen: C2, C3, C10, D5, D7, E1, O3, P14, Q1, R1.
- Rückbezüge auf andere Dokumenttitel nicht systematisch gegen die Titelliste geprüft.
- H4: Feldbeschriftung „SEITE“ im Muster-Bogen.
