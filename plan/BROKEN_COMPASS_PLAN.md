# Broken Compass – Bauplan

Stand 26. Nov. 2026 · Phase 1 (nur Planung, noch nichts gebaut). Umsetzung danach in Etappen, auf Moritz' Freigabe.

## Quellen
| Kürzel | Buch | PDF-Seiten | Versatz (PDF = Buch + …) | Rolle |
|---|---|---|---|---|
| `aj` | Adventure Journal 2023 (Grundregeln, Setting 1999, Pilot) | 241 | +1 | Hauptsystem |
| `jr` | Season 2: Jolly Roger (Piraten, Karibik 1715) | 227 | +2 | Untersetting |
| `ve` | Season 3: Voyages Extraordinaires (Jules Verne, 1870er) | 211 | +2 | Untersetting |
| `lt` | LuckTales (Spin-off: 6 Zusatzkapitel + 11 On-Demand-Episoden) | 226 | +1 | Untersetting |
| `bogen` | Character Sheet (1 S., **keine Formularfelder**) | 1 | – | Charakterbogen |

Alle EN. PDFs nach `quellen/compass/`, Rohtext seitenweise (`pdftotext -layout`). Es gibt keine offizielle deutsche Ausgabe → eigene Übersetzung, Begriffsliste unten.
Season 1 „Golden Age“ liegt **nicht** vor → taucht nirgends auf. Der alte Platzhalter-Eintrag „Quickstart“ (`bc_qs` in `compass/sys.js`) fliegt raus.

## Gestaltung (aus den PDFs)
- **Schriften:** Futura Bold/Medium (Überschriften, Großbuchstaben) → *Jost* 700–900; Adobe Caslon (Fließtext) → *Libre Caslon Text*; Courier New (Drehbuch-Seiten der Episoden) → *Courier Prime*. Jolly Roger zusätzlich „treasuremap“-Schrift (Titel), Voyages „Harker Square“ (Titel) → als Bild-Logos aus den Covern freistellen.
- **Papier:** graues Landkarten-Papier (aj/lt), vergilbtes Pergament (jr), grünliches Papier (ve).
- **Abschnittsfarben** im Adventure Journal (Randbalken, Notizblock-Rahmen) – werden die Reiterfarben: Grundlagen Nachtblau `#1d2c4d`, Abenteurer Ocker `#a8701f`, Herausforderungen Dschungelgrün `#1f3d2b`, Gefahren Rot `#a3211b`, Schatzsuche Rostbraun `#6b3416`, 1999 Blau `#2a3d66`. Akzent Rot `#c23a1e` (Zwischenüberschriften).
- **Drehbuch-Optik:** Episoden sind im Buch als Drehbuchseiten gesetzt (Courier, Notizblockpapier mit Lochrand, farbiger Rahmen, „SZENE 2 – DIE BELAGERUNG – INNEN/NACHT“, [Herausforderung] grün, [Gefahr] rot). Das wird die Episoden-Ansicht im Tool.
- **Serien-Sprache:** Pilot, Staffel, Folge, Spin-off, Filmklappe – zieht sich durch alle Bücher und bestimmt die Startseite.
- Kapitel-Eröffnungen sind Doppelseiten-Gemälde (je Abschnitt eins) → Header-Bilder der Reiter.

## Struktur im Tool
Setting-Dropdown (Weitere Systeme): **Broken Compass** › Untermenü (eingeklappt, 1,5 s Hover): *Jolly Roger*, *Voyages Extraordinaires*, *LuckTales* – je mit echtem Cover-Schriftzug.

### Broken Compass (Adventure Journal) – Reiter = die sechs Buchabschnitte
| Reiter | Unterleiste / Seitenleiste |
|---|---|
| Grundlagen | Broken Compass · Welt, Wo und wann · Grundpfeiler des Abenteuers · Wie man spielt · Gemeinsam spielen · Wie im Kino · Folge dem zerbrochenen Kompass |
| Abenteurer | Wer bist du? · Abenteurerbogen · Wie Abenteurer entstehen · Expertise · Gegenstände, Waffen und Ausrüstung · Jung, alt, echt · Der Zufallsabenteurer · Charakterbogen (Werkzeug) |
| Herausforderungen | Herausforderungen · Schwierigkeit · Sich stellen · Erfolge · Scheitern · Wie fühlst du dich? |
| Gefahren | Gefahren · Glück · Glücksmünzen · Fallen · Feinde · Prügelei · Schießerei · Gefahren und Feinde, die wehtun · Beispiele (als Karten) · Das Ende eines Abenteurers |
| Schatzsuche | Die Reise beginnt · Action! · Episoden · Pilot · Allein gegen viele · Staffel · Wachstum, Narben und Erfahrungen · Sicherer Ort · Der Schatz · NSC · Dein Rivale · Reisetagebuch · Weltuntergangsuhr · Fahrzeuge · Pyramide des Reichtums · Hardmode |
| 1999 | Technologie · Übernatürliches · Schätze (Karten) · Extras (Figurenkarten mit Porträt und Werten) |

Der **Pilot** („Ins Auge des Sturms“ / „Der Zorn des Quetzalcoatl“, S. 214–233) steht auf der Startseite, nicht als Reiter; die vier vorgefertigten Abenteurer als Bögen im Pilot.

### Jolly Roger – Reiter
Piratenzeit (I: Goldenes Zeitalter, Unter schwarzer Flagge, Abenteurer der Karibik, Frauen an Bord, neue Tags) · Karibik (II: Karte als Doppelseite, Städte, Armeen, Sklavenhandel, Technologie, Reichtum, Schätze, Extras) · Piraterie (III: Piratenleben, Piratenkodex, Flaggen als Raster) · Hohe See (IV: Schiffsherausforderungen, Mannschaftsaktionen, Seegefahren, Seekampf, Wagemut, Rollen an Bord, Schiffe als Karten, Seemannslieder, Schwimmen/Tauchen, Duelle, Glücksspiel, Rum) · Staffel: On-Demand-Staffel + „Der Fluch von El Dorado“ (6 Folgen) auf der Untersetting-Startseite.

### Voyages Extraordinaires – Reiter
Voyages (1: Vater der Science-Fiction, Abenteurer, Moderne Zeiten, neue Tags) · Die Welt (2: Industrielle Revolution, Orte, Geheimnisse, Technologie, Reichtum, Abenteurer-Clubs, Extras) · Expeditionen (3: Expeditionslog, Missionen und Wetten, Zeit als Rivale, Kreaturen als Bestiarium mit Skizzen) · Wissenschaft (4: Erfindungen, Fahrzeuge als Bauplan-Karten) · Staffel „Die verschollene Expedition“ (6 Folgen) auf der Startseite.

### LuckTales – Reiter
Scheitern mit Stil · Rätsel und Fallen · Reisen · Kinderspiel · Kuriose Gegenstände (Karten) · Wayfinder Inc. — die 11 On-Demand-Episoden + die vorgefertigten Abenteurer vom Buchende auf der Startseite.

## Startseite – drei Entwürfe (`plan/compass/startseite_a|b|c.jpg`)
Alle: echtes Logo oben links, rechts Galerie/Suche/i/Buch/Burger, keine Reiter, keine Seitenzahlen, kein Spruch, nur Buchbilder (text-freie Originale aus dem PDF, Doppelseiten zusammengesetzt).
- **A „Premiere“** – Kinobild über die volle Breite (Höhlensturz aus Abschnitt 1), darunter auf Kartenpapier die sechs Abschnitte als hohe Bildkarten mit Farbbalken in Abschnittsfarbe; unten dunkler „Kinosaal“: Pilot als breites Premierenbanner, darunter jede Staffel als Filmstreifen (Lochrand) mit Cover links und Folgen als Standbilder (Hover verbreitert die Folge wie bei Otherscape).
- **B „Das Journal“** – zwei Gemälde als aufgeschlagener Einband mit dem geprägten Leder-Kompass in der Naht, darunter das aufgeschlagene Journal: links das Register der sechs Abschnitte (Bildstreifen + Farbe), rechts die Staffeln mit Cover und Folgenliste in Drehbuch-Schrift. Hintergrund: Leder des Adventure-Journal-Einbands.
- **C „Kompassrose“** – Tempelbild blendet in Kartenpapier über; in der Mitte der Kompass-Medaillon (LuckTales), die sechs Abschnitte als Medaillons drumherum; unten jede Staffel als Expeditionsroute (gestrichelte Linie, Folgen als Stationen, das ✕ markiert das Finale).
Varianten (Runde 2): A1 Kapitel-Plakate · A2 Eröffnungsseiten (3×2) · A3 Bild-Fächer – alle mit kleinem Pilot-Banner und Bild-Header, der sich beim Scrollen fließend zur Kopfzeile zusammenschiebt (`header_scrollen.jpg`); B1 Einband + Inhaltsverzeichnis + Drehbuchzettel · B2 Fundstücke (Fotos, Polaroids) · B3 Registerreiter · B4 Kapitel-Tafeln auf Leder.
Empfehlung: **A** – am nächsten an der Serien-Idee der Bücher, Bilder am größten, auf einen Blick alle Folgen. B ist am buchnächsten, C am verspieltesten.
Untersettings bekommen dieselbe Grundform, aber eigenes Papier, eigene Farben und eigenes Hero (JR: Seeschlacht, VE: Nautilus/Tauchboot, LT: Kompass-Würfel).

## Episoden-Ansicht („Drehbuch“)
- Kontext-Karte ganz oben (Versteck, wilder Ort, Anführer, Karte, Rivale, Schatz …) – bei Staffel-Folgen fest ausgefüllt, bei On-Demand-Episoden Felder zum Eintragen bzw. Auswählen des gewürfelten Ergebnisses (kein Würfel-Tool). Die fett gesetzten Platzhalter im Szenentext (ANFÜHRER, KARTE …) werden live durch den Kontext ersetzt.
- Szenenliste schmal links (Szene 1–5, Kurzname), rechts alle Szenen flach untereinander auf Drehbuchpapier (Courier, Lochrand, Rahmen in Staffelfarbe), Überschriften „SZENE 2 – DIE BELAGERUNG · INNEN/NACHT“.
- [Herausforderung]-, [Gefahr]- und [Hinweis]-Marken farbig wie im Buch, Klick zeigt die Regel als Pop-up.
- Rechte Randspalte nur wo nötig: Rivale-Karte, Extras mit Porträt, Weltuntergangsuhr (anklickbare Felder), Schatzkarte/Hälfte der Karte.
- Stift-Notizen, Hinweise per Klick ausgrauen, Querverweise (Extras, Kreaturen, Schiffe) als Pop-up.
- „Spielen innerhalb einer Staffel“-Kästen als dezente Randkarte.

## Karten-Typen
Extras/NSC (Porträt, Felder-Balken), Schätze, Gegenstände/Waffen, Fallen und Feinde (Beispiele), Schiffe, Fahrzeuge/Erfindungen (Bauplan-Look auf Notizpapier), Kreaturen (Skizze), Piratenflaggen (Raster), Abenteurer-Clubs, Wayfinder-Abteilungen, Kuriose Gegenstände. Zufallstabellen (W6/On-Demand) als Raster.

## Charakterbogen
Das PDF hat keine Formularfelder → Bogen als deutscher Nachbau im Original-Look (Felder-Balken, Glücksrad, „Ich fühle“-Tabelle, Taschen/Rucksack/Magazine), interaktiv ausfüllbar (`shared/charsheet.js`), Export als ausfüllbares PDF (`shared/fillpdf.js`) und wieder einlesbar. Vorgefertigte Abenteurer (Pilot, JR, VE, LT) als ausgefüllte Bögen.

## Begriffe (Vorschlag, braucht Freigabe)
Felder/Fertigkeiten: Aktion (Kämpfen, Anführen, Stunts) · Mut (Kaltblütigkeit, Fahren, Schießen) · Wissen (Kultur, Erste Hilfe, Technik) · Gesellschaft (Charme, Redekunst, Beobachtung) · Wildnis (Spähen, Überleben, Zäh) · Verbrechen (Wachsam, Fingerfertigkeit, Schleichen).
Gefühle: Stark, Wagemutig, Konzentriert, Selbstsicher, Wild entschlossen, Unantastbar · Blutend, Geschockt, Benommen, Beschämt, Gebrochen, Verängstigt.
Fortune Master → Schicksalsmeister · Challenge → Herausforderung · Danger → Gefahr · Clue → Hinweis · Luck Coin → Glücksmünze · Rival → Rivale · Doomsday Clock → Weltuntergangsuhr · Safe Place → Sicherer Ort · Tag → Tag · Expertise → Expertise · Extras → Extras · Episode/Season/Pilot → Folge/Staffel/Pilot.

## Bilder
Je Buch Bild-Inventar unter `plan/compass/bilder-<buch>.md` vor dem Bau; Extraktion mit `pdfimages` (Rohbilder ohne Text; Doppelseiten aus den beiden Hälften zusammensetzen), ganzseitige Bilder immer mit. Ablage `compass/img/<buch>/full|thumb/`, Namen `<buch>-<kapitel>-<motiv>.webp`. Galerie je Buch.

## Etappen (Bau mit Sonnet)
0. Quellen ablegen, Rohtext, Bild-Inventare, Begriffsliste final
1. Gerüst (`compass/index.html`, `style.css`, `js/app.js`, Router, Kopfzeile, Dropdown mit Untermenü), Startseite nach gewähltem Entwurf
2. Grundlagen + Abenteurer (inkl. Charakterbogen-Ansicht)
3. Herausforderungen + Gefahren
4. Schatzsuche + 1999 (Karten)
5. Pilot als Drehbuch-Episode (Vorlage für alle Folgen) – erst Mockup zeigen
6. Jolly Roger: Regeln/Welt, dann 6 Folgen + On-Demand-Staffel
7. Voyages Extraordinaires: Regeln/Welt/Bestiarium/Fahrzeuge, dann 6 Folgen
8. LuckTales: 6 Kapitel, 11 Episoden, vorgefertigte Abenteurer
9. Galerie, Suche, i-Knopf, PDF-Upload je Buch, Tastenkürzel, ausfüllbares PDF
10. Prüfen (alle Routen, Seitenleiste eingeklappt), Push

## Offen – Moritz entscheidet
1. Startseiten-Entwurf A, B oder C (oder Mischung)
2. Begriffsliste (v. a. Felder/Fertigkeiten, Fortune Master)
3. Jolly Roger, Voyages und LuckTales als Untersettings (Vorschlag) oder alles in einem Setting
4. Episoden-Ansicht als Drehbuch (Vorschlag) – Mockup kommt vor Etappe 5

## Inhaltsseiten – Gestaltung (wird Bereich für Bereich ergänzt)
Mockups unter `plan/compass/inhalt/`. Grundgerüst für alle Inhaltsseiten des Adventure Journal:
- Kopfzeile dunkel (Leder-Braun), Reiter = die sechs Abschnitte; der aktive Reiter bekommt die **Abschnittsfarbe** und geht nahtlos in die Unterleiste über (gleiche Farbe, Unterpunkte als Pillen). Seitenleiste links minimal (aktiver Eintrag mit Strich in Abschnittsfarbe, Unterabschnitte klein grau). Hintergrund Kartenpapier, leicht aufgehellt.
- Blocküberschrift: Jost Versal, weit gesperrt, mit feiner Linie bis zum Rand (wie im Buch).
- Fließtext Libre Caslon 19 px, rote Zitat-Zeile mit Balken, Initiale in Abschnittsfarbe; Bilder mit weißem Rand (Fotoabzug) und Schatten.
- Bausteine: **Zweierkarten** (Wo/Wann), **Dreier-Bildkacheln** mit Ziffer (Grundpfeiler), **Randkasten** in Abschnittsfarbe (Gemeinsam spielen), **Drehbuchblock** in Courier mit Lochrand für Beispiel-Erzählungen, **Filmband** für Folge/Staffel/Pilot, **Schlussband** mit Bild und Kompass-Wasserzeichen für das Kapitelende.

### Grundlagen (Mockup `inhalt/grundlagen.png`)
Seitenleiste: Willkommen (Welt, Wo und wann) · Grundpfeiler · Wie man spielt (Gemeinsam spielen, Erzählbeispiel) · Wie im Kino (Staffel, Folge, Pilot) · Der zerbrochene Kompass. Alles auf einer langen Seite, die Leiste springt zu den Blöcken.

### Als Nächstes
Abenteurer (Abenteurerbogen als Bild-Hotspot-Seite, Felder-Raster mit sechs Farbbalken, Expertise-Karten, Gegenstände/Waffen als Karten, Zufallsabenteurer als Raster), danach Herausforderungen (Würfelbeispiele als Würfelreihen), Gefahren, Schatzsuche, 1999.
