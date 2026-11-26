# Inventar Staffel 3 „Voyages Extraordinaires“ – Folgen 4, 5, 6 (Kürzel ve, Teil Folgen 4–6)

Dateien: `compass/js/data/ep-ve4.js`, `ep-ve5.js`, `ep-ve6.js`; Bild `compass/img/ve/ve5-zapper.webp`. Folgen-IDs `ve4`, `ve5`, `ve6` (Route `#e/ve4` …). Buch-ID `bc_a2`, Buchseite = PDF − 2. Danksagung (S. 201 ff.) ausgelassen.

## Folge 4 „Was übrig bleibt“ (S. 164–175, PDF 166–177)
| Buchseite | Ziel |
|---|---|
| 164 | intro: Zusammenfassung, Box „Das brauchst du“ (Platzhalter), Begriffsliste (9 Einträge) |
| 165 | intro: Boxen „Zeit“, „Folge 4 innerhalb einer Staffel“, „Abenteurer und Überlebende“ |
| 166–167 | intro: Überschrift „Insel im Himmel“ + Geschichte (10 Absätze); „Kontext zu …“-Liste = `ctx` (9 Felder) |
| 168–169 | Szene 1 „Die antiken Ruinen“ |
| 170–171 | Szene 2 „Der zentrale Platz“ |
| 172–173 | Szene 3 „Das Tor“ |
| 174–175 | Szene 4 „Der Tempel“ (inkl. „Ende der Folge“) |

## Folge 5 „Befreit von den Ketten“ (S. 176–185, PDF 178–187)
| Buchseite | Ziel |
|---|---|
| 176 | intro: Zusammenfassung, Box „Das brauchst du“, Begriffsliste (11 Einträge) |
| 177–179 | intro: „Insel im Himmel“-Geschichte (10 Absätze); Kontext-Liste = `ctx` (11 Felder) |
| 179 | intro: „Der Zapper“ (Text, Bild, Waffenkarte) |
| 180–181 | Szene 1 „Außergewöhnlicher Ort“ |
| 182 | Szene 2 „Die Anhöhe“ |
| 183 | Szene 3 „An der Baustelle“ |
| 184–185 | Szene 4 „Die Flucht“ (inkl. „Ende der Folge“) |

## Folge 6 „Kettenreaktion“ (S. 186–199, PDF 188–201)
| Buchseite | Ziel |
|---|---|
| 186–187 | intro: Zusammenfassung, Box „Das brauchst du“, Begriffsliste (13 Einträge), „Folge 6 innerhalb einer Staffel“, „Der Katastrophe entkommen“ |
| 188–190 | intro: „Insel im Himmel“-Geschichte (17 Absätze); Kontext-Liste = `ctx` (13 Felder) |
| 191 | intro: „Zeus’ Zorn“ (Text + Tabelle W6, 6 Zeilen), „Der Albatross und der Mantikor“ |
| 192 | Szene 1 „Der außergewöhnliche Ort“ |
| 193 | Szene 2 „Die Festung – Ebene 1“ |
| 194 | Szene 3 „Die Festung – Ebene 2“ |
| 195 | Szene 4 „Die Festung – Ebene 3“ |
| 196–197 | Szene 5 „Der Kern“ |
| 198 | Szene 6 „Der versteckte Hangar“ (Dialog des Rivalen als `d`) |
| 199 | Szene 7 „Die Flucht“ (inkl. „Ende der Folge“) |

## Zählprobe
Textmarken (Herausforderung/Gefahr/Feinde/Vorteil) Buch → Daten: Folge 4: 20 → 20, Folge 5: 17 → 17, Folge 6: 26 → 26. Szenen: 4 / 4 / 7 wie im Buch.

## Abweichungen
- Die Kontext-Kästen „Context to …“ erscheinen nicht als eigener Block, sondern als `ctx`-Felder (Werte = Buchvorgaben); Felder, die das Buch im Kasten nicht nennt, aber die Folge braucht (Folge 4/5 „Verschollene Expedition“), mit „Baumgartner-Expedition“ aus Abschnitt 5 belegt.
- Folge 6: Buch nennt im Glossar „Slaves“, im Skript „SUBJECTS“; im Skript wird durchgehend das Feld `sklaven` verwendet.
- Platzhalter sind grammatisch so gesetzt, dass sie mit dem Standardkontext passen (Artikel vor dem Platzhalter nach dem Geschlecht des Standardwerts; Kreatur/Wächter/Festung maskulin, Kern/Kontrolle/Baustelle/Kontrollschlüssel feminin, Katastrophe und Rivale ohne Artikel). Wer den Kontext ändert, muss Artikel ggf. selbst im Kopf anpassen.
- Singular „SUBJECT“ (Folge 5, Szene 1) als „einer der {P:untertanen}“ umschrieben; Geschlechtsneutrales „they“ des Buchs mit „er“ übertragen, wo der Standardkontext (Zesilopolus, Sidorov) männlich ist.
- Die Bildunterschrift-/Rahmenseiten der Folgen enthalten nur Hintergrund- und Dekorgrafiken; ein Titelbild (`img`) wurde daher weggelassen (Engine nimmt das Standardbild). Einzige echte Illustration: Zapper (S. 179).
- Keine Verweise `[[S. …]]` auf „Abschnitt 3/4“ gesetzt (Zielseiten nicht Teil meines Auftrags).
- Buch-Tippfehler stillschweigend bereinigt (Baumbgartner/Baumgartner, Toussand/Toussant, RIVSL, CONROL u. a.).

## Selbst gewählte Übersetzungen
Island in the Sky → Insel im Himmel · Mount Olympus → Olymp · Manticore → Mantikor · Minotaur → Minotaurus · Subjects → Untertanen · Slaves → Sklaven · Control → Kontrolle · Control Key → Kontrollschlüssel · Construction site → Baustelle · Guardian → Wächter · Fortress → Festung · Core → Kern · Survivor → Überlebender · Extraordinary Vehicle/Creature/Place/Weapon → Außergewöhnliches Fahrzeug/Außergewöhnliche Kreatur/Außergewöhnlicher Ort/Außergewöhnliche Waffe · Break → Pause · Escape → Flucht · Brawl → Prügelei · Shoot-out → Schusswechsel · Scar → Narbe · Certain Death → sicherer Tod · lure → Lockpfeife · Expedition Log → Expeditionslogbuch · Season Finale → Staffelfinale · Charges → Ladungen · Out of Commission → außer Gefecht · Zeus’ Wrath → Zeus’ Zorn · Gefühle SCARED/SHOCKED/BROKEN/DIZZY → VERÄNGSTIGT/GESCHOCKT/GEBROCHEN/BENOMMEN · Zapper, Albatross, Namen bleiben.

## Ausgelassene Grafiken
Seitenhintergründe und Kopfzeilen-Schnörkel (keine Illustrationen) sowie die Danksagung. Keine Bilder mit englischem Text verwendet.

## Prüfung
Alle drei Dateien laden in Node fehlerfrei; Rendering mit Playwright (1280×800, `#e/ve4|ve5|ve6`): kein pageerror, keine kaputten Bilder, kein Seitenüberlauf, keine unaufgelösten `{K:…}`/`{P:…}`-Marken.
