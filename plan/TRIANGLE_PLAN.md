# Triangle Agency – Bauplan

Stand 26. Nov. 2026 · **Etappe 0 und 1 gebaut** (Gerüst, Startseite). Als Nächstes: Etappe 2 (Handbuch).

**Was steht:** `index.html`, `style.css`, `js/app.js` (Router, Kopfzeile mit Bereichsfarbe, Unterleiste, schmale Seitenleiste mit ‹, Menü, Esc/h, Playwall-Tasten), `js/data/` (buecher, nav, ark, einsaetze, playwall-index, galerie-*), `js/suche.js`, `shared/info/triangle.js`. Startseite fertig. ARK-Auswahl (3×3 mit Bildern) und Detailseite mit Bild, Playwall-Codefeld (öffnet bis zum Einbau der Dokumente die Buchseite), Einsatz-Kopf mit Titelbild. Leseseiten zeigen bis zum Einbau der Texte ein Feld, das die Buchseite öffnet.
**Wo Inhalte hinkommen:** `TA_TEXT["h/<unterpunkt>/<abschnitt>"]`, `TA_TEXT["w/…"]`, `TA_TEXT["ark/<art>/<id>"]`, `TA_TEXT["pw/<code>"]` – HTML-Zeichenketten, je Bereich eine Datei unter `js/data/`, in `index.html` vor `app.js` einbinden und in `sw.js` eintragen.
**Noch nicht da:** Taste „m“ (kommt mit den Plänen der Einsätze), Hinweistexte beim Überfahren der eigenen Knöpfe macht `toolmenu.js`.

Entwürfe: `plan/triangle/mockups/01…07_*.jpg` (Quelltext in `mockups/src/`). Bilder: `triangle/img/`. Inventar: `plan/triangle/bilder-inventar.tsv`. Skripte: `plan/triangle/skripte/`.

## Quellen
| Kürzel | Buch | PDF-Seiten | Versatz (PDF = Buch + …) | Rolle |
|---|---|---|---|---|
| `regeln` | Triangle Agency – Core Rules (EN) | 307 | +3 | Hauptsystem |
| `vault` | The Vault – Missions for Triangle Agency (EN, „Singles“) | 223 | +3 | 12 Einsätze |
| `space` | You're in Space and Everything's Perfectly Fine (EN, Querformat) | 20 | 0 | 1 Einsatz (Crossover) |
| `bogen` | Character Organization Sheets, ausfüllbar | 11 | – | Agentenbogen, **554 Formularfelder** |

Die „Spreads“-Fassung des Vault ist inhaltsgleich und wird nicht gebraucht (Doppelseiten setzen wir selbst zusammen). Der nicht ausfüllbare Bogen dient nur als Vorlage. PDFs nach `quellen/triangle/`, Rohtext seitenweise mit `pdftotext -layout`.

## Was die Bücher ausmacht
Das Regelbuch gibt sich als Firmenunterlage der Agency und hat drei Teile mit je eigener Bildsprache:

1. **Field Agent Manual** (S. 8–135) – weiße Seiten, Rot als Hausfarbe, große Dreiecke, zweifarbige Überschriften (Rot + Blau), Piktogramme, Kästen mit dünnem rotem Rand, rechts ein senkrechter roter Reiter mit Abschnittsname, Dreieck und Seitenzahl. Die ARC-Seiten wechseln die Farbe: **Anomaly blau, Reality gelb, Competency rot**; jede der 27 Wahlmöglichkeiten hat eine eigene Illustration und einen eigenen Titelschriftzug.
2. **General Manager's Toolkit** (S. 136–197) – dasselbe Handbuch, aber „gekapert“: blaue Balken mit Zwischenrufen quer über den Text, blaue Kleckse, schief gesetztes Inhaltsverzeichnis. Ab S. 162 kippt es in ein altes Betriebssystem („AgencyOS läuft im abgesicherten Modus“): Fenster mit Titelleisten, Taskleiste, Fehlermeldungen, der blaue Schreibtisch-Helfer mit Auge, Malprogramm-Seiten, Intranet-Seiten.
3. **Playwalled Documents** (S. 198–293) – 206 Dokumente mit Code (A1 … Z3), die man nur auf Anweisung öffnen darf. Seitenrand mit Code-Reiter (rot, blau, gelb), blaue Kleckse, einzelne ganzseitige Bilder.

Der Vault hält sich an ein festes Gerüst je Einsatz, gibt aber **jedem Einsatz eine eigene Welt**: eigene Farbe, eigener Titelschriftzug, eine Eröffnungsseite als Fundstück (Forum, Zeitungsartikel, Chat, Abschrift …).

## Gestaltung im Tool
- **Farben:** Rot `#c8202f`, Blau `#2d50a7`, Gelb `#eaa91c`, Tinte `#2a1b45` (Text und dunkle Flächen), Flieder `#ecebf4` (Kastenflächen), Linie `#d9d6e6`. Hintergrund weiß.
- **Schriften:** Überschriften im Buch ITC Avant Garde Bold (eng gesetzt) → *League Spartan* 700–900, Laufweite −0,035 em. Fließtext Articulat CF → *Figtree*. Schreibmaschine (Space, Abschriften) → *Courier Prime*. Pixel (ROM Dump, GRIDHOG) → *Pixelify Sans*, *Press Start 2P*, *VT323*.
- **Kopfzeile wechselt die Farbe mit dem Bereich** – wie die Randreiter im Buch: Handbuch rot, ARK je nach Unterpunkt blau/gelb/rot, Werkzeug blau, Playwall Tinte, Einsätze in der Farbe des Einsatzes. Aktiver Reiter weiß, geht in die weiße Unterleiste über; aktiver Unterpunkt mit Linie am unteren Rand.
- **Kein Randreiter.** Seitenangabe einmal klein hinter dem Titel („S. 60“, öffnet das PDF); keine Brotkrumen. Seitenleisten schmal (höchstens 186 px, so breit wie der längste Eintrag).
- **Dreiecke** sind reine Geometrie → als CSS/SVG gebaut, nicht als Bild (Abschnitts-Dreiecke, Aufzählungszeichen ▸, ARK-Abzeichen, Würfel-Symbol).
- **Kästen:** dünner Rand in Bereichsfarbe, Radius 12–14 px, weiß; Hinweis-/Frage-Kästen auf Flieder.
- **Ladeschirm:** weißes Dreieck, das sich aus drei Linien aufbaut, auf Rot. Kein Text.

## Struktur im Tool
Setting-Dropdown (Weitere Systeme): **Triangle Agency**, ohne Untersettings – Vault und Space sind Einsätze und stehen auf der Startseite.

### Kopfzeile – vier Reiter
| Reiter | Unterleiste | Seitenleiste |
|---|---|---|
| **Handbuch** | Die Agency · Einsätze · Würfeln · Schaden und Konflikte · Am Tisch · Arbeit und Leben | Abschnitte des Unterpunkts, kurze zusammengefasst |
| **ARK** | Anomalie · Realität · Kompetenz · Fragebogen · Agentenbogen | die 9 Einträge des Unterpunkts |
| **Werkzeug** | Grundlagen · Anomalien bauen · Leiten · Tabellen · Ternion City | Abschnitte |
| **Playwall** | – | – (Code-Feld links, Dokument rechts) |

**Handbuch** im Einzelnen (Buchseiten):
- Die Agency: Was ist Triangle Agency? 10 · Unsere Mission 12 · Unsere Werte 14 · Arbeitsantritt 15
- Einsätze: Außendienst 18 · Anstellung 19 · Anomalie-Bergung 20 · Ausrüstung 21 · Ausgänge 22 · Ein perfekter Einsatz 23 · Anomalien im Detail 24 · Gefahren 26 · Anomalien fangen 27 · Leistungskennzahlen 28 · Andere Einsatzarten 29 · Einsatzbericht 31
- Würfeln: Vierseitige Würfel 32 · Chaos 33 · Qualitäten und Qualitätssicherungen 34 · Burnout 35 · Triszendenz und Stabilität 36 · Kurzübersicht 38 · Die Agency fragen 40 · Anomalie-Fähigkeiten 44 · Scheitern ist eingeplant 45
- Schaden und Konflikte: Schaden 46 · Lebensversicherung 47 · Konfliktlösung 48
- Am Tisch: Inhaltskontrolle 52 · Chancengleichheit 53 · Eure Region 54 · Was ist gewöhnlich? 55
- Arbeit und Leben: Work-Life-Balance 122 · Zeit verbringen 123 · Zeit erleben 124 · Laufbahnlänge 126 · Kompetenz im Detail und Ruhestand 127 · Anforderungen 128 (als Karten mit Preis) · Realität im Detail 132 · Auszeichnungen 134

**ARK** – Einstieg je Unterpunkt ist ein 3×3-Raster mit den Illustrationen (keine Seitenleiste), Klick → Detailseite mit Seitenleiste der 9 Einträge:
- Anomalie (blau, S. 58–77): Whisper, Catalogue, Drain, Timepiece, Growth, Gun, Dream, Manifold, Absence. Detail: Bild und Stimmungstext links, die drei Fähigkeiten rechts als Karten (Erfolg / Zusatz / Fehlschlag mit den Buchsymbolen), daneben der Frage-Antwort-Kasten mit den Playwall-Codes.
- Realität (gelb, S. 78–97): Caretaker … Creature. Detail: Realitäts-Auslöser mit anklickbarer Leiste, Burnout-Ventil, Fragebogen-Fragen, Beziehungsmatrix.
- Kompetenz (rot, S. 98–117): PR … Clown. Detail: Oberste Direktive, Gebilligtes Verhalten, Erst-Anforderung, Selbsteinschätzung (3 Fragen → Qualitätssicherungen).
- Fragebogen (S. 118–121), Agentenbogen (Werkzeug, siehe unten). ARC-Aufbau (S. 56–57) steht als kurzer Vorspann über dem Anomalie-Raster.

**Werkzeug** (blau; Inhalte S. 140–197):
- Grundlagen: Verantwortung und Vorbereitung 142 · Lebenszyklus einer Anomalie 144 · Wo du hineinpasst 146 · Zusatzdaten 147 · Wichtige Informationen 148 · Die Agency sorgt sich um dich 150
- Anomalien bauen: Vorbereitung 151 · Fokus und Impuls 152 · Es ist kompliziert 153 · Domäne, Geschichte, Erscheinung 154 · Chaos und Chaos-Effekte 156 · Kleine Anomalien 157 · Drucksituationen 160 · Eigene Chaos-Effekte 161
- Leiten (die „Betriebssystem“-Seiten): Das Ende 162 · Lose Enden und Wetterereignisse 164 · Es ist nicht, wonach es aussieht 170 · Uneinigkeit im Team 172 · Ermittlungen 173 · Anomalie-Bergung 174 · Aufräum-Einsätze 176 · Figuren 177 · Beziehungen 178 · Marktstörung 179 · Wiederkehrende Gegenspieler 180 · Fraktionen 181 · Morgenbesprechungen 182 · Checkliste 185 · Beispieleinsatz 186 · Beurteilung 188 · Die Agency verärgern 189 · Enden 190
- Tabellen: Chaos-Effekte-Tabelle 158 · Kleine-Anomalien-Tabelle 159 · Wetterereignisse 164 ff. – als Raster zum Anklicken
- Ternion City: Orte in der Innenstadt 194 (als Raster). „Mögliche Solo-Einsätze“ auf derselben Seite entfällt.

Darstellung: bis S. 161 normale Leseseiten, aber mit den blauen Zwischenrufen an Ort und Stelle (schief, als blaue Balken – sie gehören zum Text und werden mit übersetzt). Ab S. 162 liegt der Inhalt in einem Fenster auf dunklem Schreibtisch mit Taskleiste; der Helfer mit Auge und seine gelben Sprechblasen stehen daneben. Fenstertitel je Buchprogramm: „MeinHandbuch 1999“, „Express 3.0“, „Intranet Adventurer 3“, „WorkScape“. Kopfzeile, Unterleiste und Seitenleiste bleiben wie überall.

### Playwall
- Links (Tinte): „WARTE!“, Code-Anzeige (Buchstabe + Zahl), Buchstabenfeld A–Z, darunter **nur die Nummern, die es für den Buchstaben gibt** (Z zeigt 1–3), darunter „Freigegeben“ mit allen bisher geöffneten Codes. Eintippen per Tastatur geht auch (Buchstabe, Zahl, Enter).
- Rechts das Dokument auf Weiß mit blauem Klecks; Titel als Überschrift, Seitenangabe klein oben rechts. Kein Code-Reiter.
- **Querverweise:** Jeder Code im Tool (Frage-Antwort-Kästen der Fähigkeiten, „GEHE ZU: A1“, Verweise in Dokumenten) öffnet das Dokument als Pop-up und trägt es unter „Freigegeben“ ein. Die drei Kästchen vor einem Code sind anklickbar (Fortschritt je Agent im Spielstand).
- Dokument-Arten: Fähigkeiten (wie ARK-Karten), Beförderungen mit Anforderungen (Karten mit Preis und Bild), Laufbahn-Stufen, Ruhestands-Optionen (gelb markierte Passagen), ganzseitige Bilder, A1 Einsatzbericht (ausfüllbar), A2 Ripple Gun Ultima (dunkle Sonderseite), X1 The Abnormal Briefcase.
- **Umschalter im Codefeld: „Wie im Buch“ / „Alles offen“.** Wie im Buch: nur Codes, Titel erst nach dem Öffnen, Suche („f“) findet nur freigegebene Dokumente. Alles offen: Liste aller Codes mit Titel je Buchstabe, alles durchsuchbar.

## Startseite (`01_startseite.jpg`)
- Durchsichtige Kopfzeile über dem Titelbild: die Lobby der Zentrale als zusammengesetzte Doppelseite (S. 16–17), mittig der Schriftzug in Weiß.
- Drei „Akten“ ragen ins Bild: **Handbuch** (rotes Dreieck), **Werkzeug** (blauer Schrägbalken „Sehr gut, Idiot.“ wie die Kapitelseite S. 138), **Playwall** (die drei Dreiecke). Je Akte die Unterpunkte als ruhige Liste.
- **ARK** als drei Spalten (blau, gelb, rot) mit allen 27 Illustrationen im 3×3-Raster – Klick führt direkt zum Eintrag.
- **The Vault** auf dem Sternenhimmel des Vault-Vorsatzes: die 12 Einsätze als lückenloser Bildstreifen, jeder mit Farbstreifen oben; Überfahren verbreitert den Einsatz und zeigt Titel und Autor. Darunter der Space-Einsatz als eigener Balken. Unter jedem englischen Einsatztitel klein und grau der deutsche Titel.
- Keine Seitenzahlen, keine Erklärtexte.

## Einsätze – gemeinsames Gerüst („Leitstand“)
Jeder Vault-Einsatz hat dieselben Teile; daraus wird eine Schablone (wie Vaesen „Tanz der Träume“, Struktur in `<einsatz>-leit.js`, Text aus den Kapiteldaten).

- **Leiste unter der Kopfzeile:** Profil · Vor der Ermittlung · Ermittlung · Begegnung · Nachspiel. Rechts in der Leiste: **Chaos-Zähler** (− Zahl +), **Lose-Enden-Zähler**, Stift für Notizen. Kein Titelbanner.
- **Links schmale Liste** der Orte/Szenen des Reiters (aktiver Eintrag zeigt seine Unterpunkte klein und grau), einklappbar mit ‹.
- **Mitte:** alle Inhalte des Orts flach untereinander, zweispaltig wo das Buch zwei Spalten nebeneinander stellt.
- **Hinweislisten** („Agents can learn the following by …“) als Karten mit dem Buchsymbol: violette Figur mit Fragezeichen = gewöhnlich zu erfahren, orange Figur mit Wellen = nur mit Anomalie-Fähigkeit oder Frage an die Agency. Klick auf die Karte → grau.
- **Rechts fest:** Chaos-Effekte des Einsatzes als Tabelle (Kosten, Name, Wirkung); Klick auf eine Zeile zieht die Kosten vom Chaos-Zähler ab. ▲ markiert Effekte, die der Einsatz neu einführt. Darunter Sonderregel und optionale Ziele.
- **Profil:** Geschichte, Fokus, Domäne, Erscheinung, Impuls, aktuelle Lage – Fokus/Domäne/Impuls als drei kurze Karten oben, der Rest als Lesetext daneben.
- **Vor der Ermittlung:** Morgenbesprechung (Szenenvorschläge als abhakbare Karten), Einsatzbesprechung (Vorlesekasten ohne Beschriftung), optionale Ziele.
- **Nachspiel:** drei Karten nebeneinander – gefangen / neutralisiert / entkommen –, darunter Lose Enden; dann Vault-Anforderung (Karte mit Preis) und Anomalie-Fähigkeit (Karte wie im ARK-Bereich). Knopf „Einsatzbericht“ öffnet A1 zum Ausfüllen.
- Querverweise auf Figuren und Orte als Pop-up. Karten und Pläne (Hofkarte, Parkplan, Linienplan, Stockwerke) als erster Eintrag der Ortsliste und mit „m“.
- Spielstand je Einsatz in `localStorage`: Chaos, Lose Enden, erledigte Hinweise, Notizen, Sonderleisten.

### Stil je Einsatz
Jeder Einsatz bekommt eine eigene Stil-Datei (`vault/<nr>.css`): Farben, Überschriftenschrift, Kartenform, Eröffnungsseite. Die Eröffnungsseite wird auf Deutsch nachgebaut, nicht als Bild eingesetzt.

| Nr. | Einsatz (S.) | Farben | Eröffnung im Buch → Nachbau | Eigene Bausteine |
|---|---|---|---|---|
| 1 | Springs Eternal (8) | Flieder `#9c609c`, Blaugrün für Zwischentitel | Werbebroschüre „Aquifer by FOUNT“ | weiche runde Karten, Aquarell-Banner, Lageplan Klinik/Spa als Schema, Werbeplakat „Return to Youth“ |
| 2 | Dead Quiet (24) | Schwarz, Flieder `#b9a3e3` | Nachbarschafts-Forum (grüne Kopfzeile, Beiträge) | Forenbeiträge als Karten, Zettel-Handouts, Spielautomaten-Bestenliste; Sonderregel „+5 Chaos bei Musik“ als Knopf |
| 3 | ROM Dump (40) | Nachtblau `#183c78`, Gelb | Spielmodul-Rückseite, Dialogfenster | Pixelschrift, weiße Dialogkästen, Sprite-Karten der Voyagers (Bedrohung/Stabilität anklickbar), Hofkarte, Kristalle |
| 4 | ZBARRO #641 (58) | Rot `#c40c18`, Grün (Pizzeria) | Zeitungsartikel „Vermisste Arbeiter zurück“ | Abschnitte heißen im Buch wie Rezeptschritte (Anomaly Recipe, Pre-Bake, A Slice of Mystery, Order Up, Digestion) – diese Namen übernehmen; Rasterdruck-Bilder; Firmenkasten Wuhan-Baxter |
| 5 | Bower Street (76) | Nachtblau `#243078`, Rot | Abschrift eines Videobands (Schreibmaschine) | Filmstreifen als Trenner, Räume des Hauses als Ortsliste |
| 6 | GRIDHOG (94) | Anthrazit, Orange `#e8791c` | Verkehrs-Anzeigetafel aus Leuchtpunkten | Punktmatrix-Überschriften, „Schleifen“ der Figuren als Umschalter |
| 7 | Hollow Suit (112) | Dunkelgrün `#18483c` | zerknitterter Brief / Drehbuchseite | Studio-Tour mit Stationen als Wegskizze, Rundenleiste (Runde 1–3) |
| 8 | Weird Dog (130) | Bordeaux `#782424` | Kinderkritzelei mit Pfotenabdrücken | Handschrift-Überschriften, Pfoten als Trenner, „Durch Hundeaugen“-Kasten |
| 9 | Planet Providence (144) | Violett `#3c246c`, Pink | Begrüßungsbrief des Freizeitparks | Chrom-Schriftzug, Parkplan mit anklickbaren Bereichen, drei Piraten-Crews als Karten |
| 10 | Murder at Gruntley Manor (162) | Rot `#b00c18`, Rosa Karten | Einladung zum Krimi-Dinner | Verdächtigen-Karten (typische Sätze, Ziele), Beweis-Zettel |
| 11 | Blame it on the Trains (180) | Dunkelgrün `#0c5448`, Magenta | Arbeits-Chat | Linienplan der Station mit Ebenen, W44-Tabelle als 4×4-Raster, Anker je Unter-Realität abhakbar |
| 12 | Nosedive (198) | Pink `#e43084`, Gelb, Orange | Gruppenchat der Hosts | Sprechblasen, Host-Leisten (9 Felder, anklickbar, voll = +21 Chaos), Opfer-Karten, Party-Bereiche als Baum |

Entwürfe dazu: `05_mission_springs_eternal.jpg`, `06_mission_rom_dump.jpg`, `07_mission_nosedive.jpg` – gleiche Schablone, drei Stile. Für die übrigen neun entsteht je ein Entwurf vor dem Bau des jeweiligen Einsatzes.

### You're in Space and Everything's Perfectly Fine
Eigener Stil: rosa-graues Papier, rotes Dreieck, schwarze Avant-Garde-Titel, Schreibmaschinen-Kästen. Aufbau nach **Schichten** statt nach Ermittlungsphasen: Leiste Station · Schicht 1 · 2 · 3 · 4 · 5 · 6+ · Letzte Schicht · Anomalie · Abschluss. Je Schicht dieselben Räume (Luftschleuse, Gänge, Garten, Krankenstation, Aussichtsdeck, Wohnquartiere, Die lästige Ecke) als Raster – so sieht man die Veränderung von Schicht zu Schicht. Stationsplan als anklickbares Schema. Bewohner als Karten. Nur die Triangle-Agency-Fassung; die Teile für das zweite Spielsystem („Station's Eyes Only“, Monsterwerte) entfallen.

## Werkzeuge
- **Agentenbogen (zum Schluss):** deutscher Nachbau aller Blätter im Original-Look (Stammblatt, Fragebogen, Work-Life-Balance mit den drei Leisten, Anomalie-Fähigkeiten, Beziehungen, Anforderungen, eigene Leisten), interaktiv ausfüllbar (`shared/charsheet.js`), Export als ausfüllbares deutsches PDF (`shared/fillpdf.js`), Wiedereinlesen möglich. Das englische Original (554 Felder) dient als Maßvorlage.
- **Einsatzbericht (A1):** ausfüllbar am Ende jedes Einsatzes, übernimmt Chaos-Pool und Lose Enden aus dem Leitstand.
- **Kurzübersicht Würfeln** (S. 38) als i-Knopf-Inhalt: Mission, drei Phasen, Würfelprobe, Chaos, Burnout, Triszendenz.
- Kein Würfel-Tool.

## Begriffe (freigegeben)
Bleiben englisch (Eigennamen): Triangle Agency, Agency, AgencyOS, Ternion City, The Vault, Playwall, Ripple, Hollow, Ripple Gun, Namen der 27 ARC-Einträge und der Einsätze (Einsätze mit deutschem Untertitel).

| Englisch | Deutsch |
|---|---|
| Field Agent / Field Team | Außendienst-Agent / Außenteam |
| General Manager (GM) | General Manager (GM) – Wortspiel bleibt |
| Field Agent Manual | Handbuch für Außendienst |
| General Manager's Toolkit | Werkzeug der Geschäftsleitung |
| Playwalled Documents | Dokumente hinter der Playwall |
| Anomaly / Reality / Competency (ARC) | Anomalie / Realität / Kompetenz (ARK) |
| Resonant | Resonant |
| Chaos, Chaos Effects | Chaos, Chaos-Effekte |
| Commendation / Demerit | Belobigung / Verweis |
| Agency Standing | Ansehen in der Agency |
| Quality / Quality Assurance (QA) | Qualität / Qualitätssicherung (QS) |
| Attentiveness, Duplicity, Dynamism, Empathy, Initiative, Persistence, Presence, Professionalism, Subtlety | Aufmerksamkeit, Doppelzüngigkeit, Dynamik, Empathie, Initiative, Beharrlichkeit, Präsenz, Professionalität, Subtilität |
| Burnout / Burnout Release | Burnout / Burnout-Ventil |
| Triscendence / Stability | Triszendenz / Stabilität |
| Ask the Agency / Reality Adjustment Request | Die Agency fragen / Antrag auf Realitätsanpassung |
| Loose Ends | Lose Enden |
| Harm / Life Insurance Policy | Schaden / Lebensversicherung |
| Requisition / Vault Requisition | Anforderung / Vault-Anforderung |
| Morning Meetings / Investigation / Encounter / Aftermath | Morgenbesprechung / Ermittlung / Begegnung / Nachspiel |
| Anomaly Profile / Pre-Investigation | Anomalie-Profil / Vor der Ermittlung |
| Focus / Domain / Impulse / Appearance | Fokus / Domäne / Impuls / Erscheinung |
| Minor Anomaly | Kleine Anomalie |
| Captured / Neutralized / Escaped | Gefangen / Neutralisiert / Entkommen |
| Optional Objectives | Optionale Ziele |
| Reality Trigger / Relationship / Connection | Realitäts-Auslöser / Beziehung / Verbindung |
| Prime Directive / Sanctioned Behaviors | Oberste Direktive / Gebilligtes Verhalten |
| Work/Life Balance | Work-Life-Balance |
| Mission Report / MVP / Probation | Einsatzbericht / MVP / Probezeit |
| Chaos-Effekte: Corrupt, Manifest, Attract, Expand, Double, Displace … | Verderben, Manifestieren, Anziehen, Ausdehnen, Verdoppeln, Versetzen … |

Schreibweisen aus dem Buch bleiben erhalten: `<job/game>` → `<Arbeit/Spiel>` in spitzen Klammern, die 3 immer rot.

## Bilder und Zeichen (erledigt in Phase 1)
**170 Bilder** (plus 7 Referenzseiten) benannt und als WebP abgelegt (`full/` bis 2400 px, Doppelseiten bis 3600 px; `thumb/` 420 px), durchsichtige Ränder beschnitten, Transparenz erhalten:
- `triangle/img/regeln/` (134): Cover und Vorsatz, 9 × `anomalie-<name>`, 9 × `realitaet-<name>`, 9 × `kompetenz-<name>`, Dreieckskopf-Figuren, Würfelbilder, Ausrüstung, Lebenszyklus, 22 × `buddy-NN-sSEITE`, `os-…` (Fensterteile, Logos, Banner des Betriebssystem-Teils), `playwall-<code oder seite>-<motiv>`, 8 zusammengesetzte Doppelseiten (`…-doppelseite`, Naht bereinigt).
- `triangle/img/vault/` (34): `NN-<einsatz>-titel` für alle 12, dazu Einzelteile (Werbeplakat, Zettel, Hofkarte, Kristalle, Filmstreifen, Schriftzüge, Pfoten, Achterbahn), Cover, Ternion City als Doppelseite (vorn und hinten), Sternenhimmel.
- `triangle/img/space/` (2).
- `triangle/img/zeichen/` (26 PNG, freigestellt, 600 dpi): Logo Triangle Agency, Logo The Vault (einzeln und komplett), ARC-Abzeichen A/R/C, Ergebnis-Symbole (Erfolg, Zusatz, Fehlschlag), Hinweis-Symbole (gewöhnlich, anomal), Chaos-Wirbel, Belobigung, Verweis, Burnout, Qualitätssicherung, Würfel-Drei, die drei Phasen-Piktogramme, Halt-Hand, Handbuch, Zahnrad, Akte mit Schloss, roter Pfeil.
- `plan/triangle/referenz/` (7): Eröffnungsseiten mit englischem Text – nur Vorlage für den Nachbau.

Skripte (wiederholbar): `extract_images.py` (Rasterbilder mit Transparenz), `benennen.py` (Namensliste, Doppelseiten, WebP, Inventar), `extract_zeichen.py` + `zeichen_liste.py` (Vektor-Zeichen per Ausschnitt).

**Noch offen bei den Bildern:**
- ARC-Abzeichen A/R/C: Buchstabe ist im PNG durchsichtig → beim Bau als SVG neu setzen (dann auch „K“ für Kompetenz möglich).
- Titelschriftzüge der 27 ARC-Einträge und der 12 Einsätze sind Vektor und noch nicht geschnitten (je ein Ausschnitt in `zeichen_liste.py`).
- Figuren-Sprites aus ROM Dump einzeln, Parkplan Planet Providence, Linienplan Trains, Stationsplan Space, Lageplan Hollow Suit: Vektor/Pixel auf der Seite → Ausschnitt oder Nachbau ohne englische Beschriftung.
- Kleine Piktogramme der Anforderungen (S. 128–131), Werte-Symbole (S. 14), Qualitäten-Dreiecke.
- Motive, die über den Bund laufen und nur als Teilstück im PDF liegen (rote Koralle S. 24–25, Toolkit-Skizzen S. 146–149): aus Seiten-Render zusammensetzen.
- Galerie-Dateien `js/data/galerie-regeln.js`, `galerie-vault.js` aus dem Inventar erzeugen; `GALKEY` in `toolmenu.js`.

## Dateien
```
triangle/
  index.html  style.css  sys.js
  js/app.js            Router, Kopfzeile, Bereichsfarben
  js/nach.js           Handbuch + Werkzeug (Leseseiten, Seitenleiste)
  js/ark.js            Raster + Detailseiten
  js/playwall.js       Codefeld, Pop-up, Freigaben
  js/leit.js           Einsatz-Schablone (Zähler, Hinweise, Chaos-Tabelle)
  js/bogen.js          Agentenbogen, Einsatzbericht
  js/data/handbuch-<abschnitt>.js      (6)
  js/data/ark-anomalie.js  ark-realitaet.js  ark-kompetenz.js
  js/data/werkzeug-<abschnitt>.js      (5)
  js/data/playwall-a.js … playwall-z.js (26, je Buchstabe)
  js/data/vault-01-springs-eternal.js … vault-12-nosedive.js, space.js
  js/data/vault-01-leit.js …           Struktur je Einsatz
  vault/01.css … 12.css, space.css     Stil je Einsatz
  fonts/  img/
```

## Etappen (Bau nach Freigabe, je Etappe Screenshots und Push)
0. **Gerüst:** Ordner neu aufsetzen (Platzhalter `sys.js`/`sysstart` ablösen), Schriften, Kopfzeile mit Bereichsfarben, Ladeschirm, Logo, PDF-Upload für alle vier PDFs (Buch-Knopf mit Auswahl: Regelbuch, The Vault, Space).
1. **Startseite** nach Entwurf 01.
2. **Handbuch** S. 8–55 und 122–135 (übersetzen, Kästen als Karten, Piktogramme).
3. **ARK:** 27 Einträge, Fragebogen; Titelschriftzüge schneiden.
4. **Werkzeug** S. 136–161, dann der Betriebssystem-Teil S. 162–197 mit Fenstern und Helfer.
5. **Playwall:** 206 Dokumente (in vier Schüben A–F, G–L, M–R, S–Z), Codefeld, Querverweise aus Etappe 3.
6. **Einsatzbericht (A1).** Der Agentenbogen folgt als letzte Etappe nach 10.
7. **Einsatz-Schablone + Springs Eternal** als Pilot; danach prüft Moritz Übersetzung und Aufbau.
8. **Vault 2–12**, je Einsatz: Entwurf → Freigabe → Bau → Abgleich mit dem PDF.
9. **Space.**
10. **Abschluss:** Galerie, Suche, i-Knopf, Tastenkürzel (←/→, ↑/↓, Strg+←/→, Esc, h, f, m), jede Route per Screenshot, auch mit eingeklappter Seitenleiste.

## Entscheidungen (Moritz, 26. Nov. 2026)
1. **Namen der 27 ARC-Einträge bleiben englisch** – auch die Kompetenzen (PR, R&D, Barista, CEO, Intern, Gravedigger, Reception, Hotline, Clown). Der Startseiten-Entwurf zeigt sie noch teils deutsch; beim Bau englisch.
2. **Titel der 12 Einsätze bleiben englisch**, der deutsche Titel steht klein und grau darunter (Startseiten-Streifen, Einsatz-Kopf, Suche).
3. **Kein Randreiter** (nach dem ersten Blick wieder gestrichen). Die Seitenangabe steht einmal klein hinter dem Titel. Auch der rote Code-Reiter am Playwall-Dokument entfällt; der Code steht links im Codefeld, die Seitenangabe klein oben rechts im Dokument.
4. **Space: nur die Triangle-Agency-Fassung**; die Teile für das zweite Spielsystem entfallen.
5. **Agentenbogen: deutscher Nachbau**, ganz zum Schluss. Bis dahin kein Bogen im Tool.
6. **Playwall: umschaltbar** zwischen „Wie im Buch“ (nur Codes, Titel erst nach dem Öffnen) und „Alles offen“ (alle Codes mit Titel, frei durchsuchbar). Schalter sichtbar im Codefeld, Einstellung wird gemerkt.
7. **Begriffsliste freigegeben.**
