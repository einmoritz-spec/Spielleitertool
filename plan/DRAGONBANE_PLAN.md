# DRAGONBANE – Spielleiter-Tafel (Bauplan)

Stand: 22. Nov. 2026 · **Entwurf – wartet auf Moritz’ Rückmeldung** (Entwürfe + offene Fragen in Abschnitt 0). Erst nach seiner Freigabe wird gebaut.
Arbeitsanweisung für die Umsetzung (gedacht für Sonnet, in mehreren Sitzungen).

Heute ist `dragonbane/` nur eine Bücher-Startseite (`shared/sysstart.js` + `dragonbane/sys.js`, Cinzel/Merriweather auf Beige, Logo `assets/logos/dragonbane.webp`). Diese Platzhalter-Gestaltung passt **nicht** zum Buch und wird ersetzt.
Ziel: ein vollständiges Setting wie **Pico** (`pico/`) bzw. **The Wildsea** (`wildsea/`) – alle Inhalte des **Regelbuchs (Rulebook v2, EN, 132 S.)** auf Deutsch, im Design des Buchs, mit einer **Abenteuer-Tafel** für die laufende Runde. Weitere Bücher (Abenteuerband, Pfad des Ruhms, Versinkender Turm, Bestiarium-Zusatzband, Arkand …) folgen als eigene Schritte, sobald die PDFs hochgeladen sind (Abschnitt 8, „Danach“).

**Wichtig zum Verständnis:** Dragonbane (Free League, Übersetzung von *Drakar och Demoner*) ist klassische Fantasy mit schnellen W20-Regeln: Würfle unter den Fertigkeitswert, **Drache** (1) = kritischer Erfolg, **Dämon** (20) = Patzer; **Vorteil/Nachteil** = zwei W20; einen misslungenen Wurf darf man **strapazieren** und nimmt dafür einen **Zustand**. Abenteuer sind **Orte zum Erkunden** (nummerierte Räume auf einem Plan, Zufallsereignisse je **Viertel**, Werteblöcke der Bewohner), dazwischen **Reisen** in **Tagesabschnitten**. Kämpfe laufen mit **Initiativkarten 1–10**; Monster haben **Grimmigkeit** (= so viele Karten) und würfeln auf ihrer **W6-Monsterangriffs-Tabelle**. Das Herz des Tools ist darum die **Abenteuer-Tafel** (Entwurf 3).

Entwürfe (Screenshots 1440×900) liegen in `plan/dragonbane/mockups/` – **die Umsetzung muss diesen Entwürfen genau entsprechen**. Je Entwurf gibt es eine saubere Fassung (`m3-abenteuer.jpg`) und eine mit Erklärungen (`m3-abenteuer-erklaert.jpg`). Die HTML/CSS-Quellen liegen in `plan/dragonbane/mockups/src/` (`db.css` = fertiges Design-System, Ausgangspunkt für `dragonbane/style.css`; `fonts/` = fertige Schriften; `img/orn/` = Original-Ornamente; `img/` = Beispielbilder; `*.tpl` → `python3 baue.py` → `*.html`). Blaue Kästen mit roter Nummer sind nur Erklärungen. Texte in den Entwürfen sind teils gekürzt (…) – im Tool steht immer der **vollständige** Buchtext. Alle Entwürfe wurden zusätzlich bei 1280×800 geprüft.

| Nr. | Datei | Ansicht |
|---|---|---|
| 1 | `m1-start.jpg` | Startseite = Vorbereitung: Frontispiz + Inhalt (8 Kapitel) + Gruppe + „Zu den Abenteuern“ |
| 2 | `m2-abenteuer.jpg` | Abenteuer-Übersicht: laufendes Abenteuer groß, weitere Abenteuer als Liste, Zeile „Unterwegs“ |
| 3 | `m3-abenteuer.jpg` | **Abenteuer-Tafel** (Die Burg des Raubritters · Die Burg · 3. Hof): Plan mit Nummern, Ort, Wesen |
| 4 | `m4-nachschlagen.jpg` | Nachschlagen · Kampf & Schaden · Fernkampf (Seitenleiste, Steinkasten, W6-Tabelle) |
| 5 | `m5-bestiarium.jpg` | Bestiarium-Übersicht (15 Monster als Raster) |
| 6 | `m6-monster.jpg` | Monster-Seite (Riesenspinne): Bild, Werteblock mit TP-Zähler, Monsterangriffe |
| 7 | `m7-beruf.jpg` | Nachschlagen · Spielercharakter · Berufe · Jäger (Figurenleiste) |
| 8 | `m8-bogen.jpg` | Charakterbogen (Original-Bogen S. 123, deutsch, ausfüllbar) + Talente/Zauber-Karten |

---

## 0. Entscheidungen

### 0.1 Offene Fragen an Moritz (mit Vorschlag) – vor dem Bau klären
1. **Umfang dieses Plans:** Regelbuch vollständig + eine Abenteuer-Schablone (am Beispiel *Die Burg des Raubritters*). Die übrigen Bücher bekommen je einen eigenen Schritt/Plan, sobald die PDFs da sind. *Vorschlag: ja.*
2. **Begriffe:** die **offiziellen deutschen Begriffe der Uhrwerk-Ausgabe** (Schnellstarter v2.0, 2026) – Vorteil/Nachteil, Wurf strapazieren, Grimmigkeit, Heroische Talente, Ente, Wolfsmensch, STÄ/KON/GEW/INT/WIL/CHA, TP/WP, Viertel/Tagesabschnitt, Verschnaufen/Kurze Rast/Lange Rast. Wo Uhrwerk nichts vorgibt, eigene Übersetzung (Glossar 2.3). *Vorschlag: ja; Eigennamen von Orten/Figuren deutsch nur, wenn Uhrwerk sie übersetzt, sonst englisch.*
3. **Untersettings:** **Arkand** (Stadt der Wellen und Flammen) als Untersetting im Dropdown (wie City of Mist, eingeklappt, 1,5 s Hover). *Das Geheimnis des Drachenkaisers*, *Pfad des Ruhms* und *Der versinkende Turm* sind **Abenteuer** in Dragonbane (Abenteuer-Übersicht), keine Untersettings. *Vorschlag: so.*
4. **Initiative:** Du ziehst echte Initiativkarten. Soll die Abenteuer-Tafel trotzdem eine schmale **Initiativ-Leiste** bekommen (Kartennummer je Figur/Monster eintragen, Grimmigkeit = mehrere Karten, „umgedreht“ = gehandelt)? *Vorschlag: nein (kein Würfel-/Kartenwerkzeug), nur der TP-Zähler je Werteblock.*
5. **Zeitleiste** in der Abenteuer-Tafel (vier Tagesabschnitte + Viertel-Zähler, Entwurf 3 oben rechts) – so lassen? *Vorschlag: ja, sie steuert auch die Erinnerung an Zufallsereignisse je Viertel (Buch S. 115) – nur als Zahl, ohne Hinweistext.*
6. **Charakterbogen-Größe:** im Entwurf passt der ganze Bogen auf die Bildschirmhöhe (dadurch kleine Schrift). Alternative: Bogen in Lesegröße (~900 px breit), die Seite scrollt. *Vorschlag: Lesegröße mit Scrollen; Gruppe links und Talente-Karten rechts bleiben sticky.*
7. **Bilder der Burg-Figuren** (Jaldo, Grunta & Merle, Rothgar Wolfsbane) gibt es im Buch nicht – mit Gemini erzeugen (Prompts in `plan/dragonbane/gemini/GEMINI_PROMPTS.md`) oder ohne Bild lassen? *Vorschlag: ohne Bild bauen, Bilder später ergänzen, wenn du sie lieferst.*
8. **Dämon-Bild:** Das Bild auf S. 84 steht gegenüber der Dämon-Seite (S. 85) und zeigt eine gehörnte Gestalt. *Vorschlag: als Dämon-Bild verwenden; falls du unsicher bist, weglassen.*

### 0.2 Feste Entscheidungen (aus Moritz’ Standing-Regeln)
- Alles auf Deutsch, nur Buchtext, nichts erfinden, keine Tipps/Kurzüberblicke. **Solo-Regeln weglassen** („Playing Solo“ S. 6 und alle Solo-Hinweise), **Inhaltsverzeichnis (S. 2), Credits (S. 1) und Index (S. 124–127) weglassen** (Suche ersetzt den Index).
- PDF lokal hochladbar; Seitenlinks „S. n“ öffnen das Original (Bookviewer, **Buchseite = PDF-Seite − 4**, `off:4`).
- Kopfzeile: links nur das rote Logo, rechts i-Knopf, Buch-Symbol, Burger. Setting-Auswahl nur im Logo-Dropdown. Werkzeuge nie als Startseiten-Kachel.
- Kein Würfel-Tool. Daten auf viele Dateien verteilt. Viewport 1280 auch am Handy.

---

## 1. Quellen

| Was | Wo |
|---|---|
| Regelbuch (Rulebook v2, EN, 132 S., 626×811 pt) | Moritz lädt hoch: `Dragonbane___Regeln___Rulebook_v2_EN.pdf` (Drive „Pen and Paper/Dragonbane/01 Regeln“) |
| Buchtext je Kapitel als Markdown | `quellen/dragonbane/text/k0-vorwort.md` … `k8b-die-burg-des-raubritters.md`, `t-tabellen.md` |
| Bild-Inventar (nur Illustrationen) | `plan/dragonbane/bilder-inventar.tsv` (PDF-Seite, Buchseite, xref, Pixel, Lage in pt) |
| Ornament-Inventar | `plan/dragonbane/ornamente.tsv` (Rasterteile, die auf vielen Seiten wiederkehren) |
| Texte + Lage des Charakterbogens | `plan/dragonbane/bogen-texte.json` (alle 151 Beschriftungen S. 123 mit Rechteck, Schrift, Größe, Farbe) |
| Skripte | `plan/dragonbane/extract_text.py`, `extract_images.py` (inventar/xref/orn/clip/spread), `build_fonts.py`, `shot.py` (Screenshots) |
| Gemini-Prompts | `plan/dragonbane/gemini/GEMINI_PROMPTS.md` + Stil-Vorlagen |
| Deutsche Fachbegriffe | Uhrwerk-Schnellstarter v2.0 (offizielle dt. Ausgabe, frei als PDF bei uhrwerk-verlag.de) |
| Weitere Bücher (später) | Drive-Ordner Dragonbane: Quickstart, Arkand (OEF 2025 + Full Beta), Adventures (= *Das Geheimnis des Drachenkaisers*), Path of Glory, The Sinking Tower, Bestiary, Additional Journeys Expanded, GM Screen, Initiative Cards, Treasure Cards, Player Maps |

**Seitenzählung:** gedruckte Buchseite = PDF-Seite − 4 (PDF 53 = S. 49). Im Tool immer die **Buchseite** anzeigen, `BV.open("db_rb", buchseite)` mit `off:4`. Seitenbild zum Prüfen: `pdftoppm -r 80 -f <PDF> -l <PDF> -png <pdf> /tmp/s`.

**Text-Markdown lesen** (`extract_text.py`, Reihenfolge = Inhaltsstrom des PDFs):
- `<!-- S. 49 · PDF 53 -->` Seitenanfang · `## TITEL` Seitentitel (Hideout Black) · `### TITEL` Abschnitt · `#### BANNER` Banner-Titel eines Kastens/einer Tabelle (steht im Strom oft **nach** dem Kasteninhalt!)
- `[K] …` Text im **grünen Steinkasten** · `[P] …` Text auf **Pergament-Karte** (Werteblöcke, NSC, Tabellen) · `> …` **Vorlesetext** · `- …` ✦-Eintrag · `- [!] …` **roter** ✦-Eintrag (Falle, Hinterhalt, Schatz, Geheimnis) · `**Fett:**` Einstieg · `*kursiv*` · `WORT` = Kapitälchen (Fertigkeit/Attribut).
- Tabellen (W6, Ausrüstung, Zauber) und zweispaltige Seiten stehen teils durcheinander → **immer am Seitenbild prüfen**.

---

## 2. Grundregeln (Moritz’ Vorgaben – unbedingt einhalten)

1. **Nur Buchtext, vollständig ins Deutsche übersetzt.** Nichts weglassen, nichts zusammenfassen, nichts erfinden. Ausnahme: Bedienelemente (Plan-Nummern, Zeit, TP-Zähler, Bogen), die das Spielen erleichtern.
2. **Weglassen:** Inhaltsverzeichnis, Credits, Index, **Solo-Regeln** (Abschnitt „Playing Solo“ S. 6 und jeder Solo-Hinweis), Leerseiten. Optionale Regeln (Schwäche, Memento, Alternative Talente …) **bleiben** – sie sind Buchtext.
3. **Daten in viele Dateien** (eine Datei je Kapitel-Abschnitt, je Monster-Block, je Zauberschule, je Abenteuer-Teil).
4. **Bilder:** nur dort, wo sie im Buch zu genau diesem Eintrag gehören; nie beschneiden (Hochformat bleibt hochkant, `object-fit:contain`); reine Illustration ohne Titeltext/weißen Rand; gleichmäßiger weißer Leerraum um Monsterbilder darf getrimmt werden (Abschnitt 7). Figuren auf Weiß werden mit `mix-blend-mode:multiply` aufs Pergament gelegt (**Achtung:** Eltern mit `opacity`/`filter` zerstören den Effekt). Monster-/Gegnerbilder klein in die Karte, groß nur auf der Monster-Seite. Im Zweifel kein Bild.
5. **Kopfzeile:** Pergament, links nur das rote Logo (kein Untertitel), rechts i-Knopf, Buch-Symbol, Burger – Strich-Symbole in Jade `#00604d`, keine Kästen. Darunter die **Jade-Leiste mit Dämonenmaske** (wie jeder Buchseitenkopf).
6. Vorlesetexte ohne Beschriftung. Seitenangaben „S. 49“ unscheinbar direkt hinter dem Namen in derselben Zeile. Notizen nur als Stift-Symbol rechts in der Tab-Zeile. Tabs nur mit Namen. Keine Erklärtexte. Keine Breadcrumb-Zeile.
7. **Breite nutzen:** Raster, keine leeren Spalten, kein Spaltenfluss über Bildschirmhöhe; Abschnitte als eigene Rasterzellen. Seitenleiste nur bei Bereichen mit mehreren Abschnitten (Nachschlagen), sticky, einklappbar (‹ und Taste `b`), lange Titel bis zum Doppelpunkt, sehr kurze Abschnitte zusammenfassen. Kachel-Seiten (Bestiarium, Abenteuer) ohne Seitenleiste.
8. **Alles, was im Buch ein Kasten ist, wird ein echter Kasten:** grüner Steinkasten (Regelkästen), Pergament-Karte (Werteblöcke, Heroische Talente, Zauber, Gegenstände, NSC), W6-Tabellen im Buch-Zebra. Karten in Übersichten zugeklappt, Klick öffnet.
9. **Klick-zum-Erledigen:** rote ✦-Einträge, W6-Zeilen (Monsterangriffe, Zufallsereignisse) – Klick irgendwo = benutzt → grau. Kein Kästchen, keine Linie.
10. **Tastatur:** ←/→ Haupt-Tabs, ↑/↓ Seitenleiste/Unterleiste, `Esc` zurück (`shared/zurueck.js`, `shared/tabpick.js`), `h` Kopfzeile aus/ein, `b` Seitenleiste, `/` Suche.
11. **Kein Würfel-Tool.** **Handy:** Viewport 1280.
12. **Jede sichtbare Änderung per Screenshot prüfen** (Playwright + `/usr/bin/google-chrome`, `file://…/dragonbane/index.html#…`, 1440×900 **und** 1280×800, auch mit eingeklappter Seitenleiste; `python3 plan/dragonbane/shot.py <html> <png> [b h]`), Lücken/Überlauf/schiefe Bilder beheben, Screenshots an Moritz schicken.
13. **Commits ohne** „Co-Authored-By“- und „Claude-Session“-Zeilen. Push mit `git -c push.negotiate=true push`.
14. Neue Dateien in `sw.js` eintragen, `VERSION` erhöhen.
15. Neue Bedienelemente, die nicht in den Entwürfen stehen, **zuerst als Screenshot-Entwurf zeigen**.

### 2.1 Namensregel
- **Deutsch nach Uhrwerk**, wo die offizielle Ausgabe einen Begriff hat (Glossar). Völker, Berufe, Attribute, Zustände, Fertigkeiten, Monster und Zauber werden übersetzt.
- **Personen- und Eigennamen bleiben** (Rothgar Wolfsbane, Jaldo, Grunta, Merle, Ciliel Nightlake → nur beschreibende Teile übersetzen: „Ciliel Nachtsee“ nur, wenn Uhrwerk es so macht; sonst Original). Ortsnamen der späteren Abenteuer nach Uhrwerk (z. B. *Riddermound* → laut Uhrwerk-Schnellstarter „Ridderhöhe“ – gegen das deutsche Buch prüfen).
- Einmal festlegen und ins Glossar (`dragonbane/js/data/glossar.js`) eintragen.

### 2.2 Zahlen & Würfel
W4/W6/W8/W10/W12/W20 (nicht „d“). „2W6“, „W6 Silber“. Schaden: Hiebschaden, Stichschaden, Wuchtschaden.

### 2.3 Glossar (verbindlich; Quelle U = Uhrwerk-Schnellstarter, sonst eigene Festlegung – gegen das deutsche Regelbuch prüfen, sobald vorhanden)
| EN | DE |
|---|---|
| kin / Human, Halfling, Dwarf, Elf, Mallard, Wolfkin | Volk / Mensch, Halbling, Zwerg, Elf, **Ente** (U), **Wolfsmensch** (U) |
| innate ability / heroic ability | Angeborenes Talent (U) / **Heroisches Talent** (U) |
| profession / Artisan, Bard, Fighter, Hunter, Knight, Mage, Mariner, Merchant, Scholar, Thief | Beruf / Handwerker, Barde, Krieger, Jäger, Ritter, Magier, Seefahrer, Händler, Gelehrter, Dieb |
| STR, CON, AGL, INT, WIL, CHA | **STÄ, KON, GEW, INT, WIL, CHA** (U) – Stärke, Konstitution, Gewandtheit, Intelligenz, Willenskraft, Charisma |
| Exhausted, Sickly, Dazed, Angry, Scared, Disheartened | **Erschöpft, Kränkelnd, Benommen, Wütend, Verängstigt, Verzagt** (U) |
| boon / bane | **Vorteil / Nachteil** (U) |
| push the roll | **Wurf strapazieren** (U) |
| dragon / demon (roll) | **Drache / Dämon** (U) |
| opposed roll / death roll | Vergleichende Probe (U) / Todeswurf (U) |
| HP / WP | **TP** Trefferpunkte / **WP** Willenskraftpunkte (U) |
| movement / damage bonus / armor rating | Bewegung / Schadensbonus / Rüstungswert (U) |
| encumbrance / tiny items / memento / weakness | Traglast (U) / Kleinkram (U) / Memento (U) / Schwäche (U) |
| round / stretch / shift | Runde / **Viertel** / **Tagesabschnitt** (U) |
| round rest / stretch rest / shift rest | **Verschnaufen / Kurze Rast / Lange Rast** (U) |
| initiative card / wait / free action / reaction | Initiativkarte (U) / Abwarten (U) / Freie Aktion / Reaktion |
| parry / evade / shove | Parieren / Ausweichen / Stoßen |
| monster attack / Ferocity / Size: Normal, Large, Huge, Swarm | **Monsterangriff** (U) / **Grimmigkeit** (U) / Größe: Normal, Groß, Riesig, Schwarm |
| fear attack / fear table | Furchtangriff (U) / Furcht-Tabelle |
| spell / magic trick / power level / school of magic | Zauber (U) / **Zaubertrick** (U) / **Kraftstufe** (U) / Magieschule |
| Animism, Elementalism, Mentalism, General Magic | **Animismus, Elementarismus, Mentalismus** (U), Allgemeine Magie |
| magical mishap | Magisches Missgeschick |
| skills: Acrobatics, Awareness, Bartering, Beast Lore, Bluffing, Bushcraft, Crafting, Evade, Healing, Hunting & Fishing, Languages, Myths & Legends, Performance, Persuasion, Riding, Seamanship, Sleight of Hand, Sneaking, Spot Hidden, Swimming | Akrobatik (U), Wahrnehmung (U), Feilschen, Tierkunde, Täuschen, Wildniskunde (U), Handwerk (U), Ausweichen (U), Heilkunde (U), Jagen & Fischen, Fremdsprachen (U), Mythen & Legenden (U), Darbietung, Überzeugen (U), Reiten, Seefahrt, Fingerfertigkeit (U), Heimlichkeit (U), Entdecken (U), Schwimmen (U) – **die nicht mit U markierten am deutschen Buch prüfen** |
| weapon skills: Axes, Bows, Brawling, Crossbows, Hammers, Knives, Slings, Spears, Staves, Swords | Äxte, Bögen, Raufen, Armbrüste, Hämmer, Messer (U), Schleudern, Speere (U), Stäbe (U), Schwerter |
| secondary skills | Sekundäre Fertigkeiten (U) |
| journey / pathfinder / mishap / random encounter | Reise / Pfadfinder / Missgeschick / Zufallsbegegnung |
| NPC / GM | NSC / SL |
| adventure site / quest / treasure | Abenteuerort / Auftrag / Schatz |
| monsters: Demon, Dragon, Ghost, Giant, Giant Spider, Goblin, Griffon, Harpy, Manticore, Minotaur, Orc, Skeleton, Troll, Wight, Vampiric Bats | Dämon, Drache, Geist, Riese, Riesenspinne, Goblin, Greif, Harpyie, Mantikor, Minotaurus, Ork, Skelett, Troll, **Wiedergänger**, Vampirfledermäuse |
| The Castle of the Robber Knight · Old Road, Gate House, Courtyard, Great Hall, Cellar, Tower | Die Burg des Raubritters · Alte Straße, Torhaus, Hof, Großer Saal, Keller, Turm |

---

## 3. Design (aus dem PDF gemessen)

Das Buch ist ein **illustrierter Abenteurer-Foliant**: gealtertes Pergament, darauf **geschnitzter grüner Stein** (Jade/Grünspan) mit keltischen Knoten, Drachen- und Dämonenköpfen; Titel in einer keilförmigen Slab-Versalschrift (Hideout), Fließtext klassische Antiqua (Minion); Johan Egerkrans’ aquarellierte Figuren frei auf der Seite; das rote Logo ist der einzige laute Farbfleck. Jede Seite beginnt mit einer Jade-Leiste mit Dämonenmaske und endet mit einem Jade-Emblem. Kapitel öffnen mit einem ganzseitigen Bild im Knotenrahmen und einem Titel auf einer Steinplatte mit Drachenflügeln.

**Design-Gedanke für das Tool („Der Foliant aus Jade und Pergament“):** ruhig, klassisch, gebunden – keine Kachel-Wand, keine Farbflächen. Die Seite selbst ist Pergament; **Stein** markiert nur das Aktive/Wichtige (aktiver Tab, Regelkästen, Haupt-Knopf), **Pergament-Karten** tragen alle Spielwerte, **Rot** nur für Logo, Gefahr/Geheimnis und TP. Navigation über **Buch-Elemente** statt App-Elemente: Inhaltsverzeichnis (Startseite, Seitenleiste), Kapitel-Eröffnung (Frontispiz, laufendes Abenteuer), Stein-Band (aktiver Tab), Fuß-Emblem (Zurück/Weiter), Plan mit Raumnummern (Abenteuer).

### 3.1 Schriften (fertig in `plan/dragonbane/mockups/src/fonts/` → nach `assets/fonts/`)
Erzeugt mit `build_fonts.py` aus dem PDF: alle Teil-Sets eines Schnitts vereinigt, CFF → TrueType, **Ä Ö Ü ä ö ü ergänzt** (aus den Punkten von „ä/ö“ bzw. dem Punkt-Glyph), WOFF2. Geprüft: Umlaute sauber, siehe `mockups/src/fonttest.html`.
| Rolle | Datei | Zeichen / Ersatz |
|---|---|---|
| Seitentitel (Versalien) | `db-hideout-black.woff2` | A–Z (ohne Q) + ÄÖÜ; fehlende Zeichen/Ziffern → Hideout Bold; ß in Versalien → „SS“ (`text-transform:uppercase`) |
| Abschnitte, Tabs, Einstiege, Kartennamen | `db-hideout-bold.woff2` | vollständig + ÄÖÜäöü; ß → Ersatz Figtree 600 |
| Steinkasten-Text | `db-hideout-semibold.woff2` | fehlt J Q X Z ß → Hideout Bold |
| Karten-/Tabellentext | `db-hideout-regular.woff2` | vollständig + Umlaute; ß → Figtree |
| Fließtext | `db-minion-regular.woff2` | vollständig + ÄÖÜ; ß → EB Garamond |
| Kursiv, Zitate | `crimson-pro-latin-400-italic.woff2` (Minion-nahe Ersatzschrift, die Minion-Kursiv-Teilsets sind zu lückenhaft) | |
| Vorlesetext | `crimson-pro-latin-600-italic.woff2` | |
Hideout zeichnet „1“ als „I“ und „0“ wie „O“ (Buchstil) – so lassen.

### 3.2 Farben (gemessen: Text-/Füllfarben der Vektoren, Mediane der Rasterflächen; CSS-Variablen in `db.css`)
- Pergament: Seite `--perg #f3eee6`, Rand `--perg-rand #c9b79f`, Tönung `--perg-ton #ebe2d4`; Hintergrundbild = Original-Seitenpergament `img/orn/pergament-seite.webp` (xref 11323).
- Tinte `--tinte #231f20`, Nebeninfo `--grau #8a7b68`, Linien `--linie #d8cab6`.
- Jade: Titel `--jade #237263`, UI/✦/Fußzeile `--jade-d #00604d`, Steinfläche `--stein #286d56`, Schrift auf Stein `--stein-text #dae6e2`.
- Pergament-Karte `--karte #e0d1a8`, Kartentext `--braun #4b2d1b`, NSC-Namensband `--braun-kopf #603617`; Tabellen-Zebra `--zebra1 #e6d9cc` / `--zebra2 #f8f2e7`.
- Rot: Gefahr/Geheimnis `--rot #c52535`, Logo `--logo #ef3f3d`, TP `--tp #b82d29`.

### 3.3 Bausteine (alle in `db.css`, Ornamente = Original-Rasterteile `img/orn/*.png` mit Transparenz)
| Baustein | Aufbau | Ornament (xref) |
|---|---|---|
| **Kopf-Leiste** | zwei Schäfte (border-image, Spitze fest, Schaft gestreckt) + Dämonenmaske mittig | `rail-l` 11507, `rail-r` 11517, `medaillon` 11501 |
| **Stein-Band** (aktiver Tab, Kasten-Banner, „Monsterangriffe“) | gestrecktes Steinband + Knoten links/rechts | `steinband` 11605, `knoten-l/-r` 11538/11534 |
| **Grüner Steinkasten** | border-image des Steinkastens (raue Kanten), Banner-Titel oben auf der Kante, Text Hideout SemiBold hell | `stein` 4240 |
| **Pergament-Karte** | border-image Pergament mit gerissenem Rand; oben/unten Jade-Leiste mit Knoten | `pergament-karte` 6660, `leiste-l/-r` 11809/11817, `leiste-knoten` 11813 |
| **NSC-Karte** | Pergament-Karte + **Totenkopf-Band** mit Namen (wie JALDO/GRUNTA) | `schaedel` 11913 |
| **Knotenrahmen** (Kapitel-Eröffnung, Abenteuerbilder) | 4 Ecken + 4 Seiten | `rahmen-ol/or/ul/ur` 11405/11406/11407/11402, `rahmen-o/u/l/r` 11437/11419/11415/11429 |
| **Drachenflügel-Banner** | Steinplatte gestreckt, Flügel links/rechts in Originalform | `banner-platte` 261, `banner-l` 269, `banner-r` 265 |
| **Fuß-Emblem** | Kapitelname klein auf dem Emblem, Zurück/Weiter links/rechts | `fuss` 11515 |
| **Seitenleisten-Marke** | kleiner Jade-Knoten vor dem aktiven Eintrag | `knoten` 11392 |
| **W6-Tabelle** | Kopf Hideout Bold 11 px Versalien braun, Zeilen Hideout Regular, Zebra; Zeile anklickbar (`.an` markiert, `.weg` benutzt) | – |
| **✦-Liste** | ✦ in Jade, rote ✦ kursiv für Fallen/Hinterhalte/Schätze (Klick → grau) | – |
| **Vorlesetext** | Crimson Pro 600 kursiv auf `--perg-ton`, ohne Beschriftung | – |
| **Vignette** (Monsterbilder) | Maske: Ränder laufen 9 % weich aus, Motiv bleibt ganz (`.vig`) | – |

### 3.4 Gestaltungsregeln – ruhig und durchgestaltet (verbindlich)
1. **Festes Raster:** 12 Spalten, Rand 48 px (≤1360 px: 32 px), Spaltenabstand 24–44 px; Abstände nur 4 · 8 · 12 · 16 · 24 · 32 · 48. Höchstens drei Inhaltsspalten.
2. **Stein sparsam:** je Ansicht höchstens **ein** aktiver Tab, **ein** Steinkasten je Spalte, **ein** Haupt-Knopf auf Stein. Alles andere ist Text auf Pergament.
3. **Rot nur für Gefahr/Geheimnis und TP** (und Logo). Nie als Deko.
4. **Titel-Hierarchie:** Seitentitel Hideout Black 34–44 px Jade (bei Nachschlagen zentriert wie im Buch, bei Berufen zwischen zwei Jade-Schäften) · Abschnitt Hideout Bold 15 px Versalien · Einstieg Hideout Bold 15 px · Fließtext Minion 16–17 px, Zeilenhöhe 1,46–1,5.
5. **Karten ohne Doppelrahmen:** Pergament-Karten nie in Kästen schachteln; zugeklappte Karten schlicht (Name + S.), ohne Pfeil.
6. **Bilder frei auf dem Pergament** (multiply), nie in weiße Kästen. Kapitel- und Abenteuerbilder im Knotenrahmen.
7. **Jede Ansicht muss bei 1440×900 und 1280×800 ohne Überlauf funktionieren** (Abstände mit `clamp()` an die Höhe koppeln, siehe `m1-start.tpl`).

---

## 4. Struktur des Tools (Navigation)

```
#start                                Vorbereitung (Entwurf 1) – erste Seite beim Öffnen
#abenteuer                            Abenteuer-Übersicht (Entwurf 2)
#a/<abenteuer>/<tab>[/<id>]           Abenteuer-Tafel (Entwurf 3); <tab> = lage | orte | figuren | tabellen
                                      z. B. #a/burg/orte/3
#n/<kapitel>[/<abschnitt>]            Nachschlagen (Entwurf 4); <kapitel> = einf | sc | fe | ka | ma | au | be | ab | ta
#n/sc/voelker/<id> · #n/sc/berufe/<id>  Völker / Berufe (Entwurf 7)
#n/be · #n/be/<monster>               Bestiarium (Entwürfe 5, 6)
#gruppe · #gruppe/<sc>                Charakterbogen (Entwurf 8)
#galerie                              alle Buchbilder
#arkand[/…]                           Untersetting Arkand (später, eigener Plan)
```

**Abenteuer-Tabs (Spiel):** Lage · <Ortsname-Tab, z. B. „Die Burg“> · Figuren · Tabellen (+ Zeit + Stift rechts).
**Nachschlagen-Tabs:** Spielercharakter · Fertigkeiten · Kampf & Schaden · Magie · Ausrüstung · Bestiarium · Abenteuer · Tabellen. Kapitel 1 („In den ältesten Zeiten“) liegt hinter dem Frontispiz der Startseite (`#n/einf`, ohne eigenen Tab – im Burger unter Nachschlagen).
**Burger-Menü:** Startseite · Abenteuer · Nachschlagen (9 Einträge) · Charakterbögen · Galerie · Bücher · Spielstand zurücksetzen. Keine Setting-Auswahl.
**Kopfzeile:** Logo (Dropdown aus `toolmenu.js`) · i-Knopf (`shared/info/dragonbane.js`) · Buch-Symbol (Auswahl: Regelbuch; später weitere Bücher) · Burger.

---

## 5. Ansichten im Detail

### 5.1 Startseite (Entwurf 1)
- **Frontispiz** links (Spalte `clamp(420px,36vw,520px)`): Bild der Kapitel-Eröffnung im Knotenrahmen, darüber das Drachenflügel-Banner mit dem Kapiteltitel. Standard: Kapitel 1 „In den ältesten Zeiten“ (S. 4). **Hover über ein Kapitel rechts** blendet Bild + Titel weich (200 ms) zur Eröffnung dieses Kapitels um; Klick aufs Bild öffnet das Kapitel. Bild höhenbegrenzt (`max-height:calc(100vh - 240px)`), Rahmen umschließt das Bild.
- **Inhalt** rechts: 8 Einträge in 2 Spalten wie das Inhaltsverzeichnis: „KAPITEL n · S.“, Titel Hideout Black, Unterkapitel als Zeile (jeder Teil ein Link). Aktiver/gehoverter Eintrag mit Jade-Knoten.
- **Die Gruppe:** Chips mit Berufsfigur, Name, Volk · Beruf → `#gruppe/<sc>`; „+“ legt einen Charakter an.
- **„Zu den Abenteuern“** auf dem großen Drachenflügel-Banner → `#abenteuer`; darunter „Zuletzt: <Abenteuer> · <Ort>“ aus dem Spielstand.
- Muss bei 1440×900 und 1280×800 ohne Scrollen passen.

### 5.2 Abenteuer-Übersicht (Entwurf 2)
- Titel „Abenteuer“ zwischen zwei Jade-Schäften.
- Links das **laufende Abenteuer** groß (Knotenrahmen + Flügel-Banner mit Namen), darunter Quelle/S./Anzahl Orte und Stein-Knopf „Weiter · <Ort>“.
- Rechts alle anderen Abenteuer als Zeilen: Titelbild im kleinen Knotenrahmen, Name (Hideout Black), Quelle (Versalien Jade), Teile/Orte als Zeile. Abenteuer, deren PDF fehlt: Zeile gedämpft, Klick → Bücherliste (Upload).
- Zeile **„Unterwegs“**: Reisen & Missgeschicke (S. 101–103), Zufallsbegegnungen, Schätze (S. 120–121), NSC erschaffen (S. 105–106) – öffnen die Nachschlage-Stellen als Overlay.
- Im ersten Bau nur *Die Burg des Raubritters*; die anderen Einträge erscheinen erst mit ihren Schritten.

### 5.3 Abenteuer-Tafel (Entwurf 3) – das Herzstück
**Tab-Zeile:** Lage · Die Burg · Figuren · Tabellen; rechts **Zeit** (Morgen · Tag · Abend · Nacht, aktiver unterstrichen; „Viertel − n +“) und der Stift. Kein Abenteuertitel, keine Breadcrumbs.
- **Lage** (S. 113–114): Eröffnungsbild (Burg, S. 113, multiply) + Vorlesetext + „Die Lage“ als Fließtext im Raster (Bild links, Text rechts, keine leere Spalte).
- **Die Burg** (dreispaltig, fest): 
  - links **Plan** (S. 116, ungeschnitten, multiply, 470 px) mit den Original-Nummern als **Jade-Plaketten** an den Originalpositionen (`pin` in % aus den Vektor-Ziffern der Seite: 1 → 22.5/30.3, 2 → 53.9/63.5, 3 → 56.2/55.1, 4 → 41.9/48.5, 5 → 67.9/47.0, 6 → 67.0/35.1); aktiver Ort hell mit Jade-Ring. Darunter die Ortsliste zweispaltig.
  - Mitte **Ort**: „3. Hof“ (Hideout Black 34 px) + S., Vorlesetext, ✦-Einträge (Teal), rote ✦ (Fallen, Hinterhalt, Schatz – Klick = erledigt/grau).
  - rechts **Wesen an diesem Ort**: NSC-Karte(n) mit Totenkopf-Band, offen; alle anderen Figuren/Kästen der Burg zugeklappt darunter (Pergament-Leiste mit Name + S.; Steinkasten-Inhalte wie „Die ewige Wacht“ als grüne Leiste). Klick klappt auf.
- **Figuren:** alle NSC-Karten des Abenteuers im Raster (Goblins, Jaldo, Grunta, Der Raubritter) + Links ins Bestiarium (Goblin, Ork, Wiedergänger). TP-Zähler je Karte.
- **Tabellen:** Zufallsereignisse W6 (S. 115), Schätze (Tabellen S. 120–121), anklickbar.
- Spielstand: aktiver Ort, erledigte Einträge, Zeit, TP je Karte, markierte W6-Zeilen.

### 5.4 Nachschlagen (Entwurf 4)
- Tab-Leiste (Kapitel), darunter zweispaltig: **Seitenleiste** 236 px (Inhaltsverzeichnis-Stil: Minion 16 px, S. rechts, aktiver Eintrag Jade + Knoten; ‹ oben rechts) und **Inhalt**: Titel zentriert (Hideout Black 44 px) + S., dann **Raster aus Abschnitten** (bis zu drei Spalten; jede Zelle ein eigener Abschnitt; Steinkasten + zugehörige W6-Tabelle gemeinsam in einer Zelle).
- Seitenende: **Fuß-Emblem** mit „Kapitel n – Name“, links „‹ voriger Abschnitt“, rechts „nächster ›“.
- Kapitel und Abschnitte (Seitenleiste):
| Tab | Abschnitte (Buchseite) |
|---|---|
| Spielercharakter (Kap. 2, S. 8–29) | Einführung & Charakterbogen · Völker (Figurenleiste) · Berufe (Figurenleiste, Entwurf 7) · Alter & Name · Attribute · Abgeleitete Werte · Fertigkeiten · Heroische Talente (+ Schwäche, optional) · Ausrüstung (+ Münzen, Memento) · Traglast & Aussehen · Erfahrung |
| Fertigkeiten (Kap. 3, S. 30–39) | Würfeln · Vorteil & Nachteil (Hilfe, Wurf strapazieren) · Vergleichende Würfe · Kernfertigkeiten (Karten-Raster) · Waffenfertigkeiten · Heroische Talente (Karten-Raster, zugeklappt) |
| Kampf & Schaden (Kap. 4, S. 40–55) | Runden & Initiative · Aktionen & Bewegung · Nahkampf · Fernkampf · Schaden · Zustände (+ Schwere Verletzungen) · Heilung & Rast · Weitere Gefahren (+ Furcht-Tabelle) · Reittiere · Improvisierte Waffen |
| Magie (Kap. 5, S. 56–71) | Magieschulen · Zauber · Zauber wirken (+ Magische Missgeschicke W20) · Magie lernen · Zauberliste: Allgemeine Magie · Animismus · Elementarismus (Gnom, Sylphe, Salamander, Undine) · Mentalismus – **Zauber als Pergament-Karten** (Kraftstufe, Reichweite, Dauer, Voraussetzung) im Raster, zugeklappt |
| Ausrüstung (Kap. 6, S. 72–81) | je Tabelle ein Abschnitt (Rüstungen & Helme, Nahkampfwaffen, Fernkampfwaffen, Kleidung, Musikinstrumente, Handelswaren, Studien & Magie, Lichtquellen, Werkzeug, Behälter, Medizin, Dienste, Jagen & Fischen, Reisemittel, Tiere); Tabellen in voller Breite |
| Bestiarium (Kap. 7, S. 82–99) | Kachel-Seite (Entwurf 5) + „Monster im Spiel“ + „Gewöhnliche Tiere“ |
| Abenteuer (Kap. 8, S. 100–112) | Reisen (Missgeschicke, Zufallsbegegnungen, Kälte, Jagen) · Die Rolle der SL · Nichtspielercharaktere (Typische NSC, NSC erschaffen) · Abenteuer erschaffen (Fallen, Schätze, Auftrag/Reise/Ort-Tabellen) · Kampagnen |
| Tabellen (S. 120–122) | Improvisierte Waffen (Gasthaus, Höhle, Wald) · Schätze (Tabelle 1 + 2) |
| In den ältesten Zeiten (Kap. 1, S. 4–7, ohne Tab) | Chronik-Auszug · Einführung · Spieler · SL · Würfeln · Online spielen · Sicher spielen · Was ist ein Rollenspiel? · Abkürzungen · Optionale Regeln · Zeitmaße (**ohne** „Solo spielen“) |

### 5.5 Bestiarium (Entwurf 5) und Monster (Entwurf 6)
- Übersicht: 5×3 Raster ohne Seitenleiste, je Monster Bild (148 px hoch, contain, `.vig`), Name + S., Kurzwerte (Grimmigkeit · Größe · TP) bzw. bei Goblin/Ork/Skelett die Typen. Neben dem Titel Links „Monster im Spiel“ und „Gewöhnliche Tiere“.
- Monster-Seite: links Bild (520 px, getrimmt, `.vig`) und darunter der **Werteblock** als Pergament-Karte mit Jade-Leisten (Grimmigkeit, Größe, Bewegung, Rüstung, TP + **TP-Zähler** rot, Sonderregeln wie Flügel/Immunität/Regeneration als weitere Zeilen); rechts Titel, Text und **Monsterangriffe** unter dem Stein-Band (W6, Klick → grau). Bei NSC-artigen (Goblin, Ork, Skelett) statt Monsterangriffen die Typen-Karten (Späher, Krieger …) nebeneinander.

### 5.6 Völker & Berufe (Entwurf 7)
- **Figurenleiste** über dem Inhalt: 10 Berufe (bzw. 6 Völker) als kleine Original-Figuren mit Namen in Versalien; aktiver Name auf dem Stein-Band. ←/→ wechselt.
- Kopf: Name zwischen zwei Jade-Schäften (wie im Buch) + S.
- Drei feste Spalten: (1) Zitat kursiv + Sprecher, Beschreibung, ✦ Schlüsselattribut / Fertigkeiten / Heroisches Talent; (2) Figur ungeschnitten; (3) W6-Tabellen Ausrüstung und Beiname (zweispaltig).
- Völker: Figur(en), Text, Vornamen-W6, Angeborene Talente als Pergament-Karten (wie „ABILITY: INNER PEACE“). Magier: Kasten „Magie“ (S. 19) als Steinkasten.

### 5.7 Charakterbogen (Entwurf 8)
- Hintergrund = **Original-Bogen S. 123 ohne Text** (`img/bogen-leer.webp`, mit `pymupdf`-Redaktion erzeugt: Text + Textschatten entfernt, Bilder/Linien bleiben; Skript-Ausschnitt in Abschnitt 7). Alle Beschriftungen **deutsch in Hideout an der Originalstelle** (Positionen/Größen/Farben aus `bogen-texte.json`, Faktor = Bogenbreite/626,457). Fertigkeit + (Attribut) als ein Text. „RÜSTUNGSWERT“ im Bogen über den Symbolen (SVG `textPath`). Helle Beschriftungen auf Stein mit leichtem Jade-Schatten.
- Eingaben in Tinte `#1e2f55` (Hideout Regular); Zustände (Rauten) per Klick; WP/TP-Punkte per Klick; Todeswürfe per Klick.
- Links die Gruppe (Figur, Name, Volk · Beruf) + „Als PDF speichern“ (Stein-Knopf, `shared/fillpdf.js`, ausfüllbares PDF) + „+“. Rechts die **vollen Buchtexte** der Talente/Zauber dieses Charakters als Pergament-Karten.
- Größe: siehe Frage 0.1-6.
- Kommt als vorletzter Schritt (8).

### 5.8 Werkzeuge
- **Suche** (Taste `/`): über alle Daten (Kapitel, Monster, Zauber, Talente, Ausrüstung, Abenteuer).
- **Galerie** (Burger): alle Buchbilder, Gruppen: Kapitel-Eröffnungen, Völker, Berufe, Monster, Abenteuer, Ornamente nicht.
- **Bücher** (Burger) + **Buch-Symbol**: Regelbuch `db_rb` (off 4); später Quickstart, Abenteuerband, Pfad des Ruhms, Versinkender Turm, Bestiarium, Additional Journeys, GM Screen, Arkand.
- **i-Knopf** (`shared/info/dragonbane.js`, MAP in `shared/sysinfo.js` ergänzen): Setting (Drachen gegen Dämonen), Würfeln (W20 unter Wert, Drache/Dämon, Vorteil/Nachteil, strapazieren → Zustand), Kampf (Initiativkarten, Grimmigkeit), Zeit (Runde/Viertel/Tagesabschnitt) – kurz, im Jade-Pergament-Design, nur Buchinhalte.
- `toolmenu.js`: Untertitel „Fantasy · Free League“ beim Dragonbane-Eintrag entfernen; später Untersetting Arkand.

### 5.9 Spielstand
`localStorage["db_state_v1"]` = `{ last:"a/burg/orte/3", abenteuer:{ burg:{ ort:3, weg:{"o3/1":true}, zeit:{abschnitt:1, viertel:3}, tp:{"goblins":5}, w6:{"ereignisse":[2,5]} } }, gruppe:[{id, name, spieler, volk:"elf", beruf:"jaeger", alter, schwaeche, aussehen, attr:{stae,kon,gew,int,wil,cha}, zust:{wuetend:true}, fert:{akrobatik:{w:12,x:false}}, waffenf:{}, sek:[], talente:["innerer-frieden","gefaehrte"], zauber:[], inventar:[], memento, kleinkram, muenzen:{g,s,k}, ruestung, helm, waffen:[{t,griff,rw,schaden,haltb,merkmale}], wp:{max,akt}, tp:{max,akt}, tod:{erf,fehl}}], monster:{ "riesenspinne":{tp:22, angriffe:[2]} }, notiz:{} }`. Alle Zugriffe in `try/catch`.

---

## 6. Architektur und Datenformat

**Vorlage ist `pico/`** (gleiche Bausteine: Shell, Routing, Tabs, Seitenleiste, Blöcke, Kachel-Übersichten, Bögen mit FillPDF, Suche, Galerie, Bookviewer). `pico/index.html`, `pico/style.css`, `pico/js/app.js`, `nach.js`, `suche.js`, `bogen.js` nach `dragonbane/` kopieren, Präfixe umbenennen (`PI_` → `DB_`, `pi_state_v1` → `db_state_v1`, `pi_core` → `db_rb`), Pico-Inhalte entfernen, Design durch `db.css` ersetzen. `dragonbane/sys.js` + `sysstart` danach nicht mehr verwenden (Bücherliste → `dragonbane/js/data/buecher.js`, `off:4`). Layout-Code des Pico-Würfels (`wuerfel.js`) **nicht** übernehmen.

```
dragonbane/index.html            Shell – Kopfzeile + Leiste, #app, Burger, Suche, Skripte, toolmenu.js, gm_tool_mode_v1="dragonbane"
dragonbane/style.css             Design (aus db.css)
dragonbane/js/app.js             Routing, Startseite, Tabs, Seitenleiste, Blöcke, Tasten
dragonbane/js/abenteuer.js       Abenteuer-Übersicht + Abenteuer-Tafel (Plan, Orte, Wesen, Zeit, Tabellen)
dragonbane/js/nach.js            Nachschlagen (Seitenleiste, Raster, Fuß-Emblem)
dragonbane/js/figuren.js         Völker/Berufe (Figurenleiste)
dragonbane/js/bestiarium.js      Übersicht + Monster-Seite + TP-Zähler
dragonbane/js/bogen.js           Charakterbogen + PDF
dragonbane/js/suche.js, galerie.js
dragonbane/js/data/buecher.js, glossar.js, galerie-liste.js
dragonbane/js/data/k1-einf.js
dragonbane/js/data/k2-a.js (Einf., Charakterbogen) · k2-voelker.js · k2-berufe-a.js (Handwerker–Jäger) · k2-berufe-b.js (Ritter–Dieb) · k2-c.js (Alter … Erfahrung)
dragonbane/js/data/k3-a.js (Würfeln, Vorteil/Nachteil, Vergleich) · k3-fertigkeiten.js · k3-talente-a.js / -b.js
dragonbane/js/data/k4-a.js … k4-c.js
dragonbane/js/data/k5-a.js (Schulen, Wirken, Missgeschicke, Lernen) · k5-allgemein.js · k5-animismus.js · k5-elementarismus.js · k5-mentalismus.js
dragonbane/js/data/k6-ausruestung-a.js / -b.js
dragonbane/js/data/k7-einf.js · k7-monster-a.js (Dämon–Goblin) · k7-monster-b.js (Greif–Ork) · k7-monster-c.js (Skelett–Vampirfledermäuse) · k7-tiere.js
dragonbane/js/data/k8-a.js (Reisen) · k8-b.js (SL, NSC) · k8-c.js (Abenteuer erschaffen) · k8-d.js (Kampagnen)
dragonbane/js/data/tabellen.js (Improvisierte Waffen, Schätze)
dragonbane/js/data/abenteuer-liste.js · abenteuer-burg.js (Lage, Orte 1–6, Figuren, Ereignisse)
dragonbane/img/orn/, kap/, volk/, beruf/, monster/, abenteuer/, bogen-leer.webp, start/
assets/fonts/db-hideout-*.woff2, db-minion-regular.woff2, crimson-pro-latin-{400,600}-italic.woff2
```

### Text-Blöcke (wie Pico, erweitert)
`{t:"p",x}`, `{t:"h",x,p}` (Abschnitt + S.), `{t:"ul",x:[…]}` (✦), `{t:"ul",x:[{x,rot:true}]}` (rotes ✦, erledigbar), `{t:"ein",h,x}` (fetter Einstieg „Kritischer Treffer:“), `{t:"vorlesen",x}`, `{t:"zitat",x,wer}`, `{t:"stein",h,b:[Blöcke]}` (grüner Steinkasten), `{t:"karte",h,p,b:[Blöcke]}` (Pergament-Karte), `{t:"w6",id,h,cols,rows}` (anklickbar), `{t:"tab",cols,rows}` (Ausrüstung), `{t:"img",src}`, `{t:"grid",n,x:[[Blöcke],…]}` (Raster-Zellen = Abschnitte).

### Datensätze
```js
DB_ABSCHNITT.push({ kap:"ka", id:"fernkampf", t:"Fernkampf", p:49, b:[Blöcke] });
DB_VOLK.push({ id:"elf", t:"Elf", p:12, img:"volk/elf", text:[Blöcke], namen:["Arasin","Illyriana",…], talente:[{t:"Innerer Frieden", wp:null, x:"…"}] });
DB_BERUF.push({ id:"jaeger", t:"Jäger", p:17, img:"beruf/jaeger", zitat:{x:"…", wer:"Ciliel Nightlake"}, text:[Blöcke],
  attr:"GEW", fert:["Akrobatik",…], talent:"gefaehrte", ausr:[["1–2","Dolch, …"],…], beiname:["Waldfuchs",…], extra:[Blöcke] });
DB_TALENT.push({ id:"gefaehrte", t:"Gefährte", p:36, vor:"Jagen & Fischen 12", wp:3, x:"…" });
DB_ZAUBER.push({ id:"feuerball", schule:"elementarismus", t:"…", p:66, rang:1, vor:"…", zeit:"Aktion", rw:"…", dauer:"…", x:"…", trick:false });
DB_MONSTER.push({ id:"riesenspinne", t:"Riesenspinne", p:89, img:"monster/riesenspinne", text:[Blöcke],
  werte:{grim:2, groesse:"Normal", bew:24, ruest:"–", tp:36, extra:[]}, angriffe:[{t:"Mandibeln!", x:"…"},…], typen:null });
DB_ABENTEUER.push({ id:"burg", t:"Die Burg des Raubritters", quelle:"db_rb", p:113, img:"abenteuer/burg", karte:"abenteuer/burg-karte",
  tabOrt:"Die Burg", lage:[Blöcke],
  orte:[{n:3, t:"Hof", p:117, pin:[56.2,55.1], vorlesen:"…", e:[{t:"Die Eiche", x:"…"},{t:"Die versteckten Goblins", x:"…", rot:true}], wesen:["goblins"], kaesten:[]}],
  figuren:[{id:"goblins", t:"Goblins", p:115, text:[Blöcke], werte:{bew:10, sb:"–", tp:9, ruest:"Leder (1)", fert:"…", waffen:"…"}, bild:null}],
  tabellen:[{id:"ereignisse", h:"Zufallsereignisse", p:115, w:6, rows:[["Goblins.","…"],…]}] });
```

---

## 7. Bilder

Skript: `python3 -I plan/dragonbane/extract_images.py <pdf> <ziel> <befehl>` – `inventar`, `xref` (Rohbild mit Transparenz → webp), `orn` (Ornament verlustfrei → png), `clip` (Seitenausschnitt in pt), `spread` (Doppelseite). Alle Seiten = **PDF-Seiten**. Fertige Beispiele in `plan/dragonbane/mockups/src/img/`. Alles `.webp` (Ornamente `.png`), sprechend benannt.

| Bereich | Quelle (PDF-Seite: xref) | Ziel / Hinweis |
|---|---|---|
| Ornamente | siehe 3.3 (`orn`) | `img/orn/` – alle schon fertig in `mockups/src/img/orn/` |
| Seitenpergament | 11323 | `img/orn/pergament-seite.webp` (Hintergrund, `fixed`, 100 % 100 %) |
| Kapitel-Eröffnungen | 8: 257 · 12: 655 · 34: 2543 · 44: 3128 · 60: 4581 · 76: 5290 · 86: 6134 · 104: 7502 | `img/kap/k1…k8` – reine Bilder (Titel ist Vektor/Banner) |
| Völker | 14: 810 Mensch · 15: 947 Halbling · 15: 971 Zwerg · 16: 1153 Elf · 16: 1177 Ente · 17: 1296 Wolfsmensch | `img/volk/<id>` (weißer Grund → multiply) |
| Berufe | 18: 1357 · 19: 1412 · 20: 1465 · 21: 1516 · 22: 1567 · 23: 1668 · 24: 1747 · 25: 1798 · 26: 1849 · 27: 1900 (Handwerker … Dieb) | `img/beruf/<id>` |
| Monster | 88: 6236 Dämon (gegenüber S. 85, Frage 0.1-8) · 90: 6381 Drache · 91: 6457 Geist · 92: 6547 Riese · 93: 6633 Riesenspinne · 94: 6707 Goblin · 95: 6799 Greif · 96: 6892 Harpyie · 97: 6981 Mantikor · 98: 7057 Minotaurus · 99: 7140 Ork · 100: 7218 Skelett · 101: 7284 Troll · 102: 7360 Wiedergänger · 103: 7440 Vampirfledermäuse | `img/monster/<id>` – **weißen Leerraum trimmen** (Pixel < 238 bzw. Alpha > 12, 12 px Rand; Code im Verlauf dieses Plans, als `trim`-Befehl in `extract_images.py` ergänzen) |
| Burg des Raubritters | 117: 8717 Burg · 120: 9024 Plan (Nummern sind Vektor → im Tool Plaketten) | `img/abenteuer/burg`, `burg-karte` |
| weitere Illustrationen | 11: 577 (S. 7) · 32: 2448 · 36: 2855/2859 · 40: 3050 (Wolfsmensch-Dieb? prüfen) · 45: 3298 · 46: 3368 · 48: 3584/3607 · 51: 4004 · 52: 4151/4159 · 58: 4553 · 59: 4567 · 67: 4977 · 71: 5092 · 72–73: 5176/5180/5253 · 75: 5268 · 108: 7951 · 112: 8335 · 116: 8648 | Nur dort einbauen, wo sie im Buch eindeutig zu einem Abschnitt gehören (am Seitenbild prüfen); sonst nur Galerie |
| Cover | 1: 45 (mit Logo-Schrift) | nur Galerie/Bücherliste |
| Charakterbogen | Seite 127 ohne Text | `img/bogen-leer.webp`: `page.add_redact_annot(rect±2pt)` für jede Beschriftung aus `bogen-texte.json`, dann `apply_redactions(images=PDF_REDACT_IMAGE_NONE, graphics=PDF_REDACT_LINE_ART_REMOVE_IF_COVERED)`, `get_pixmap(dpi=200)` |
| Burg-Figuren (fehlen) | Gemini (`plan/dragonbane/gemini/`) | `img/abenteuer/burg-jaldo`, `-grunta`, `-rothgar` – optional |

Doppelseiten: Im Regelbuch gibt es keine Doppelseiten-Illustrationen (jede Eröffnung steht auf einer Seite) – bei den späteren Büchern (Karten!) prüfen und mit `spread` als ein Bild ausgeben.

---

## 8. Arbeitsschritte (jeweils eine Sitzung: Screenshots, Commit, Push)

0. **Gerüst, Design, Schriften.** Pico-Code nach `dragonbane/` übernehmen (Abschnitt 6), Schriften nach `assets/fonts/`, Ornamente nach `dragonbane/img/orn/`, `db.css` → `dragonbane/style.css`. Kopfzeile + Jade-Leiste, Startseite (Entwurf 1, mit Frontispiz-Überblendung), Bücher/Bookviewer (`off:4`), Burger, Tasten, `sw.js`, `toolmenu.js` (Untertitel weg), i-Knopf.
1. **Abenteuer:** Übersicht (Entwurf 2) + Abenteuer-Tafel (Entwurf 3) mit *Die Burg des Raubritters* komplett (S. 113–119): Lage, Plan mit Plaketten, sechs Orte, Figuren (NSC-Karten mit TP-Zähler), Zufallsereignisse, Kästen (Die ewige Wacht, Der Raubritter), Zeit, Spielstand; Schatztabellen (S. 120–121).
2. **Nachschlagen-Gerüst** (Tabs, Seitenleiste, Raster, Fuß-Emblem, Entwurf 4) + Kap. 1 (ohne Solo) + Kap. 3 Fertigkeiten (Kernfertigkeiten und Heroische Talente als Karten).
3. **Kap. 2 Spielercharakter:** Völker + Berufe mit Figurenleiste (Entwurf 7), Alter … Erfahrung.
4. **Kap. 4 Kampf & Schaden** (Entwurf 4) inkl. aller Kästen und W6-Tabellen.
5. **Kap. 5 Magie:** Schulen, Wirken, Missgeschicke, Lernen, alle Zauber/Zaubertricks als Karten.
6. **Kap. 7 Bestiarium** (Entwürfe 5 + 6) + **Kap. 6 Ausrüstung** + Tabellen-Anhang.
7. **Kap. 8 Abenteuer** (Reisen, SL, NSC, Abenteuer erschaffen, Kampagnen) + Zeile „Unterwegs“ der Abenteuer-Übersicht.
8. **Charakterbogen** (Entwurf 8) mit PDF-Export.
9. **Suche, Galerie, Gesamtcheck** (1280er-Viewport, keine JS-Fehler, keine Lücken, eingeklappte Seitenleiste, alle Seitenlinks treffen) → diesen Plan als „erledigt“ markieren.

**Danach (je eigener Plan, sobald Moritz die PDFs hochlädt):** Abenteuerband *Das Geheimnis des Drachenkaisers* (Außenposten, Reisen mit Begegnungstabellen, 11 Orte – gleiche Abenteuer-Schablone), *Der versinkende Turm*, *Pfad des Ruhms* (3 Teile, Spielerkarten), Bestiarium-Zusatzband (gleiche Monster-Schablone, weitere Gruppen), *Additional Journeys Expanded* (Reise-Tabellen), GM Screen (Spielleiterschirm-Overlay), Arkand (Untersetting mit eigenem Entwurf).

Für jede Sitzung bittet Sonnet Moritz, das Regelbuch-PDF hochzuladen. Der englische Text liegt schon im Repo.

---

## 9. Startauftrag für jede Sonnet-Sitzung (zum Kopieren)

> Lies `plan/DRAGONBANE_PLAN.md` im Repo einmoritz-spec/Spielleitertool und setze **Schritt N** um. Halte dich an Abschnitt 2 (Grundregeln, Namensregel, Glossar) und Abschnitt 3 (Design, Gestaltungsregeln) und baue genau nach den Entwürfen in `plan/dragonbane/mockups/` (Quellen in `mockups/src/`, Design-System `db.css`). Der englische Buchtext liegt in `quellen/dragonbane/text/` (Buchseite = PDF-Seite − 4), das PDF hänge ich an. Übersetze vollständig ins Deutsche, nichts weglassen, nichts erfinden, Solo-Regeln weglassen. Prüfe jede Ansicht per Screenshot (1440×900 und 1280×800, auch mit eingeklappter Seitenleiste), behebe Lücken/Überlauf, schick mir die Screenshots, trage neue Dateien in `sw.js` ein (VERSION erhöhen), committe ohne Co-Authored-By/Claude-Session-Zeilen und pushe.
