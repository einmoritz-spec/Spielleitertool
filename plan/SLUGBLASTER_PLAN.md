# SLUGBLASTER – Spielleiter-Tafel (Bauplan)  

> **Stand: erledigt** (Schritte 0–9 umgesetzt, Nov. 2026)

Stand: 22. Nov. 2026. Arbeitsanweisung für die Umsetzung (gedacht für Sonnet, in mehreren Sitzungen).
Nichts aus diesem Plan ist bisher gebaut. Heute ist `slugblaster/` nur eine Bücher-Startseite (`shared/sysstart.js` + `slugblaster/sys.js`, Logo `assets/logos/slugblaster.webp`, Platzhalter-Farben Dunkellila/Neonpink, die **nicht** zum Buch passen und ersetzt werden).
Ziel: ein vollständiges Setting wie **Pico** (`pico/`) bzw. **The Wildsea** (`wildsea/`) – alle Inhalte des Regelbuchs 1.31 und des Zusatzhefts **Oolroob** auf Deutsch, im Design der Buch-PDFs, mit einer Spielleiter-Tafel für die laufende Runde.

**Wichtig zum Verständnis:** Slugblaster (Mikey Hamm, auf Basis von *Blades in the Dark*) hat **keine fertigen Abenteuer**. Gespielt wird in **Folgen** (Episoden, 2–4 Std.) mit festem Kreislauf (S. 13): *Tour wählen → Auffrischen → Die Tour! → Desaster?? → Aufräumen → Auszeit!* – die Spieler denken sich die Touren selbst aus, die SL liefert Hindernisse und Folgen. Das Herz des Tools ist deshalb die **Folge-Tafel** (Entwurf 2). Die „Abenteuer-Orte“ sind die **Welten** des Multiversums (11 + 9 Bonus-Welten), **Hillview** + 12 Bonus-Heimatorte und **Oolroob**.

Entwürfe (Screenshots 1440×900) liegen in `plan/slugblaster/mockups/` – **die Umsetzung muss diesen Entwürfen genau entsprechen**. Je Entwurf gibt es eine saubere Fassung (`m2-folge.jpg`) und eine mit Erklärungen (`m2-folge-erklaert.jpg`). Die HTML/CSS-Quellen liegen in `plan/slugblaster/mockups/src/` (`sb.css` = fertiges Farb-/Schrift-System, Ausgangspunkt für `slugblaster/style.css`; `fonts/` = fertige Schriften; `img/` = Beispielbilder). Blaue Kästen mit roter Nummer sind nur Erklärungen im Entwurf, nicht Teil der Oberfläche. Texte in den Entwürfen sind teils gekürzt – im Tool steht immer der **vollständige** Buchtext.

| Nr. | Datei | Ansicht |
|---|---|---|
| 1 | `m1-start.jpg` | Startseite = Vorbereitung (4 Kapitel) + „Losblasten!“ + Oolroob |
| 2 | `m2-folge.jpg` | Folge-Tafel: Kreislauf-Leiste, Biss, Tour, Leisten, Crew-Status, Welt der Tour |
| 3 | `m3-multiversum.jpg` | Multiversum: Karte „Kartiert das Multiversum“ + Weltenkarten |
| 4 | `m4-welt.jpg` | Welt-Seite (Thennis Spar) im Nachtseiten-Layout |
| 5 | `m5-persoenlichkeit.jpg` | Nachschlagen · Teenager · Persönlichkeit (The Guts) mit Figur und Randnotizen |
| 6 | `m6-signaturen.jpg` | Nachschlagen · Teenager · Signaturen-Übersicht (lila Seiten) |
| 7 | `m7-fraktionen.jpg` | Fraktionen: Beziehungsliste −3…+3 aller 20 Fraktionen + Fraktions-Detail |
| 8 | `m8-oolroob.jpg` | Untersetting Oolroob: Karte mit Pins + Orte (orange) |

**Stand 22. Nov. 2026, 19:10 – Moritz’ Änderungen nach der ersten Runde:**
1. **Randnotizen mit Zeigelinien** wie im Original: die geschwungenen Linien/Pfeile, die von der Notiz zum Teil der Figur zeigen, gehören dazu (Abschnitt 3, „Randnotiz-Bühne“; Entwurf 5 neu).
2. **Ruhiger, durchgestaltet, nicht überladen** – verbindliche Gestaltungsregeln in Abschnitt 3a; Folge-Tafel (Entwurf 2) neu geordnet: Kreislauf in sechs gleich breiten Stationen, aktive Station mit genug Rand auf dem Klecks, Crew als ruhige Tabelle, Welt-Listen gekürzt mit „+ weitere“.
3. **Signatur-Bilder:** 10 von 12 sind Original-Skizzen (Buch + Bögen, Entwurf 6 neu). Für **Voidwear Backpack** und **Hyperoptic Visor** erstellt Moritz Skizzen mit Gemini – Prompts und Vorlagen in `plan/slugblaster/gemini/`.

---

## 0. Entscheidungen (von Moritz am 22. Nov. 2026 beantwortet – verbindlich)

1. **Begriffe bleiben ENGLISCH:** Run, Beat, Downtime, Bite, Slam, Nope, Trouble, Disaster, Doom, Style, Boost, Kick, Dare, Snag usw. werden **nicht** übersetzt (das Glossar in Abschnitt 2 gilt nur für die deutschen Alltagswörter; überall, wo dort ein **fettes** Wort steht, bleibt das englische Original). Fließtext ist deutsch, die Spielbegriffe englisch (z. B. „Mach einen Action Roll“, „Du nimmst einen Slam“).
2. **Namen bleiben englisch** (Persönlichkeiten, Signaturen, Mods, Marken, Crews, Cliquen, Welt-Eigennamen) – wie in der Namensregel.
3. **Oolroob = Untersetting** im Dropdown (Slugblaster › Oolroob), orange Design.
4. **Charakterbogen:** wie bei den anderen Settings **ausfüllbar**, so nah wie möglich am Original, **deutsch** (deutscher Nachbau + PDF-Export mit `shared/fillpdf.js`).
5. Repo-Schreibrechte sind erteilt – pushen.

**Bauchronik:** Schritt 0 (Gerüst, Schriften, Startseite, i-Knopf, sw.js) gebaut am 22. Nov. 2026. Gemini-Skizzen Hyperoptic Visor + Voidwear Backpack liegen fertig in `plan/slugblaster/gemini/fertig/` (`sig-*.webp`, schon hellblau).

---

## 1. Quellen

| Was | Wo |
|---|---|
| Regelbuch 1.31 (EN, 176 S., quadratisch 648×648 pt) | wird von Moritz hochgeladen: `Slugblaster___Regeln___1.31_Digital_EN.pdf` |
| Zusatzheft Oolroob (EN, 20 S., 612×612 pt) | `Slugblaster___Zusatz___Oolroob_EN.pdf` |
| Bögen | `…Material___All_Sheets_Combined_EN.pdf` (16 S.: Regeln, SL, Beats 1–2, 5 Persönlichkeiten, Chill, Crew + 12 Signatur-Bögen mit Skizzen), `…Deluxe_Sheets_Personality/Other/Signature_Devices_EN.pdf`, einzelne **ausfüllbare** Bögen `…Personality_Crew_The_Grit/Guts/Smarts/Heart/Chill/Loner_1.1/1.2/Crew_Sheet_EN.pdf`, Referenzbögen `…Reference_Sheet_Rules/GM/Beats_1/Beats_2_EN.pdf` |
| Buchtext je Kapitel als Markdown | `quellen/slugblaster/text/k1-das-ist-slugblaster.md` … `k4b-spiel-veraendern-solo.md`, `oolroob.md` |
| Bild-Inventar Regelbuch | `plan/slugblaster/bilder-inventar.tsv` (Seite, Nr, xref, Pixelgröße, Lage in pt) |
| Formularfelder der Original-Bögen | `plan/slugblaster/felder/<Bogen>.tsv` (Seite, Feldname, Typ, Rechteck, nächstes Wort) |
| Skripte | `plan/slugblaster/build_fonts.py`, `extract_images.py`, `extract_text.py`, `extract_notes.py` (Randnotizen + Zeigelinien), `tint_sketch.py` (Skizzen freistellen + einfärben) |
| Randnotiz-Bühnen der Persönlichkeiten | `plan/slugblaster/notizen-persoenlichkeiten.json` |
| Gemini-Prompts + Vorlagen | `plan/slugblaster/gemini/GEMINI_PROMPTS.md` und die PNGs daneben |
| Logo | `assets/logos/slugblaster.webp` (weiß, freigestellt) |

**Seitenzählung:** **Buchseite = PDF-Seite** (kein Versatz, `off:0`). Oolroob ebenso. Seitenbild zum Prüfen: `pdftoppm -r 80 -f <S> -l <S> -png <pdf> /tmp/s`.

**Text-Markdown lesen** (erzeugt mit `extract_text.py`, Reihenfolge = Inhaltsstrom des PDFs):
- `## …` = Marker-Überschrift (Schrift OneDirection) · `### …` = Versalien-Zwischenüberschrift (Proxima Black) · `**Fett.**` = fetter Einstieg · `*…*` = kursiv.
- `[K]` = weißer Text → steht im Buch in einem **Farbkasten** (Kastenfarbe am Seitenbild ablesen). **Ausnahme:** Auf den dunklen Nachtseiten (Andere Welten S. 94–117) ist weiß der normale Text.
- `[N]` = **Randnotiz des Autors** in Handschrift (HateYourWriting) → im Tool als Notiz (Abschnitt 4), übersetzt.
- W6-/W66-Tabellen und zweispaltige Seiten stehen teils durcheinander → **immer am Seitenbild prüfen**.

---

## 2. Grundregeln (Moritz’ Vorgaben – unbedingt einhalten)

1. **Nur Buchtext, vollständig ins Deutsche übersetzt.** Nichts weglassen, nichts zusammenfassen, nichts erfinden (keine eigenen Tipps, keine Kurzüberblicke). Ausnahme: Bedienelemente (Folge-Tafel, Leisten, Biss, Crew-Status, Beziehungen, Bögen), die das Spielen erleichtern.
2. **Weglassen:** Inhaltsverzeichnis (S. 3), Credits (S. 2), Index (S. 174–175, Suche ersetzt ihn), **Solo-Regeln komplett** (Solo Slugblaster S. 168–171, The Loner S. 172–173, Loner-Bögen) – Moritz’ Standing-Regel. Die Fake-Werbeseiten (S. 15, 37, 57, 69, 95, 131, 152, 167, 171) nicht in den Text, nur in die **Galerie** (Gruppe „Werbung aus dem Multiversum“). Die Beispiel-Bögen S. 16–17 nicht nachbauen. **Wichtig:** Die Bögen (Stand 1.31) enthalten mehr als das Buch-Kapitel (z. B. Eigenschaft „Persönliches Wachstum“, Eigenschafts-Momente „Origin Story“, „Sharpened“) – Bögen und Referenzbögen sind gleichwertige Quelle, nichts davon weglassen.
3. **Daten in viele Dateien** (eine Datei je Kapitel-Abschnitt, je Welt-Block, je Fraktionsart …; lange Kapitel auf `-a/-b/-c` verteilen).
4. **Bilder:** nur dort, wo sie im Buch zu genau diesem Eintrag gehören; nicht beschneiden (Hochformat bleibt hochkant, `object-fit:contain`); breite Bilder ganzspaltig; Buchbilder ohne Bildunterschrift/weißen Rand; **Doppelseiten** als **ein** Bild. Monster-/Gegnerbilder klein in die Monsterkarte. Im Zweifel kein Bild. Fotos realer Personen (Werbeseiten S. 131, 171) nur in der Galerie.
5. **Kopfzeile:** links nur das Logo (weiß auf Lila `#6d4d9f`), rechts i-Knopf, Buch-Symbol, Burger. Keine Untertitel, keine Emojis. In Oolroob nur der Oolroob-Schriftzug (Abschnitt 6.10).
6. Vorlesekästen/Zitate ohne Beschriftung. Seitenangaben „S. 12“ unscheinbar direkt hinter dem Namen in derselben Zeile. Notizen nur als Stift-Symbol rechts in der Tab-Zeile. Tabs nur mit Namen, ohne Zahlen. Keine Erklärtexte („zum Vergrößern antippen“ usw.).
7. **Keine Spaltenflüsse über Bildschirmhöhe**, keine leeren Spalten, Breite nutzen (Raster, zeilenweise). Seitenleiste links nur bei Bereichen mit mehreren Abschnitten (Regeln, Spielleitung), einklappbar (‹-Knopf, Taste `b`), sticky. Taste `h` blendet die Kopfzeile aus. Haupt-Tabs oben über die volle Breite, Unterkapitel als zweite Leiste darunter. Lange Titel in der Seitenleiste nur bis zum Doppelpunkt. Kurze Abschnitte (≈1 Absatz) zu einem Eintrag zusammenfassen.
8. **Klick-zum-Erledigen:** Probleme, Wegpunkte, Tour-Ideen, Herausforderungen – Klick irgendwo auf den Eintrag = benutzt, Eintrag inkl. Text grau. Kein Kästchen, keine Linie.
9. **Tastatur:** ←/→ wechseln die Haupt-Tabs, ↑/↓ die Einträge der Seitenleiste bzw. die Unter-Leiste, `Esc` zurück zur vorherigen Ansicht (`shared/zurueck.js`, `shared/tabpick.js` wie bei Pico).
10. **Kein Würfel-Tool** (Moritz würfelt mit echten Würfeln). W6-Tabellen sind anklickbar (Zeile markieren), es gibt aber keinen Würfelknopf.
11. **Handy:** Viewport 1280 (wie überall). 
12. **Jede sichtbare Änderung selbst per Screenshot prüfen** (Playwright + `/usr/bin/google-chrome`, `file://…/slugblaster/index.html#…`, 1440×900 **und** 1280×800, auch mit eingeklappter Seitenleiste), Lücken/Überlauf/schiefe Bilder beheben, Screenshots an Moritz schicken.
13. **Commits ohne** „Co-Authored-By“- und „Claude-Session“-Zeilen. Push mit `git -c push.negotiate=true push`.
14. Neue Dateien in `sw.js` eintragen, `VERSION` erhöhen.
15. Neue Bedienelemente, die nicht in den Entwürfen stehen, **zuerst als Screenshot-Entwurf zeigen**.
16. Alles auf Deutsch – auch Beispiele, Tabellen, Randnotizen. Ausnahmen nur nach der Namensregel.

### Namensregel
- **Bleiben englisch:** Persönlichkeiten (The Grit …), Signatur-Geräte und Mod-Namen (Gravity Blaster, Endurance Engine …), Markennamen (Miper®, Scram Cat, Hardecker®, Wilkie’s®, FUST®, Panic Energy®, DARA, Doorways, Rescue, Shimmer, Kramshon), Crew-Namen (BRB, Jet Collective, Null Range, Lazy Bunny, The Wicks), Cliquen-Namen (The Thrashers, The Heads, The Mavens, The Freaks, The Normies), Welt-Eigennamen (Null, Hillview, Vastiche, Thennis Spar, Desnine, Prismatia, Operaeblum, Calorium, Popularia, Empyrean, Quahalia, Ecclesiastica), Personennamen, Oolroob-Ortsnamen mit Eigennamen-Charakter (Auntie A’s Burgers, Atlantis, Karlup).
- **Werden übersetzt:** beschreibende Namen (The Golden Jungle → Der Goldene Dschungel, The Waking Pits → Die Erwachenden Gruben, The Old Guard → The Old Guard bleibt (Eigenname), The Arborists → Die Arboristen, Featured Locations → Besondere Orte, The Cactus → Der Kaktus, The Key → Der Schlüssel, Make-out Park → Knutsch-Park …). **Einmal festlegen und im Glossar eintragen.**
- Aussprache-Randnotizen („Pronounced ‚Vas-TEESH‘“) als deutsche Lautschrift („Vas-TIEHSCH“).

### Glossar (verbindlich, in `slugblaster/js/data/glossar.js`)
| EN | DE |
|---|---|
| slugblaster / slugblasting / slugger / slugmaster | Slugblaster / Slugblasten / Slugger / Slugmaster (= Spielleitung, SL) |
| GM | SL (Spielleitung) |
| episode / season / campaign | Folge / Staffel / Kampagne |
| run / pick a run / mega run | **Tour** / Tour wählen / Mega-Tour |
| goal / prize / obstacle / mega prize | Ziel / Preis / Hindernis / Mega-Preis |
| prizes: Amp, Bonus, Stuff, Favour, Access | Preise: Spot, Bonus, Zeug, Gunst, Zugang |
| refresh / clean-up / downtime / epilogue | Auffrischen / Aufräumen / **Auszeit** / Epilog |
| action roll / impact / success / mixed success / failure | Aktionswurf / Wirkung / Erfolg / Teilerfolg / Fehlschlag |
| problem / snag / slam / super slam / worse problems | Problem / Haken / **Sturz** / Super-Sturz / schlimmere Probleme |
| nope / noping | **Nö!** / Nö sagen |
| trouble / disaster / disaster roll / doom | **Ärger** / Desaster / Desasterwurf / **Verhängnis** |
| fracture / reconciliation | Bruch / Versöhnung |
| style / crew style / fame / legacy / hype | Style / Crew-Style / Ruhm / **Vermächtnis** / Hype |
| trick / board trick / „check it“ | Trick / Board-Trick / „Guck mal!“ |
| boost / kick / dare / attitude / turbo | Boost / Kick / **Mutprobe** / **Haltung** / Turbo |
| teamwork & sharing / group roll | Teamwork & Teilen / Gruppenwurf |
| beat / trait beat / arc / family arc / angst arc / crew beats / other beats | **Moment** / Eigenschafts-Moment / Bogen / Familien-Bogen / Angst-Bogen / Crew-Momente / weitere Momente |
| opportunities / challenges / events | Gelegenheiten / Herausforderungen / Ereignisse |
| bite / refresh bite | **Biss** |
| progress track / danger track / tracks | Fortschrittsleiste / Gefahrenleiste / Leisten |
| personality / traits / vibes / extra gear / style bonus | Persönlichkeit / Eigenschaften / Vibes / Extra-Ausrüstung / Style-Bonus |
| look / family / bond / name | Look / Familie / Bindung / Name |
| signature (device) / function / looks / mods / universal mods | Signatur(-Gerät) / Funktion / Aussehen / Mods / Universal-Mods |
| components: lenses, coils, discs, gems | Bauteile: Linsen, Spulen, Scheiben, Edelsteine |
| In the Lab | In der Werkstatt |
| gear / raygun / hoverboard / board / grip / deck graphic | Ausrüstung / Strahlenpistole / Hoverboard / Board / Griptape / Deck-Grafik |
| stickers, pins, patches | Sticker, Pins, Aufnäher |
| crew / brand / hangout / the map / starting perk / perks | Crew / Marke / Treffpunkt / Die Karte / Start-Vorteil / Vorteile |
| fame tiers: Nobodies, Up & Comers, Well-Established, Rising Stars, Major Players, Legends | Niemande, Aufsteiger, Etablierte, Aufsteigende Stars, Große Nummern, Legenden |
| factions: crews, sponsors, authorities, crowds | Fraktionen: Crews, Sponsoren, Obrigkeiten, **Cliquen** |
| Friendly / Tight / Ally / Unfriendly / Rivals / Enemy / Unstable | Freundlich (+1) / Eng (+2) / Verbündet (+3) / Unfreundlich (−1) / Rivalen (−2) / Feind (−3) / Instabil (!!!) |
| NPCs / Assets / Likes / Dislikes / SITUATION! | NSC / Besitz / Mag / Mag nicht / SITUATION! |
| your world / hometown / bonus hometowns / other worlds / bonus worlds | Eure Welt / Heimatort / Bonus-Heimatorte / Andere Welten / Bonus-Welten |
| featured locations / residents / problems / checkpoints / features | Besondere Orte / Bewohner / Probleme / **Wegpunkte** / Merkmale |
| tech level | Technikstand |
| thin-zone / portal / hardportal / peelback / spacetime / multiverse / megashift | Dünnzone / Portal / Hartportal / **Rückschnapp** (Peelback) / Raumzeit / Multiversum / Megashift |
| mask / hazwear / logic binder / Haz 1–3 | Maske / Schutzanzug / Logikbinder / Gefahrenstufe 1–3 |
| monsters / weak vs / strong vs | Monster / schwach gegen / stark gegen |
| scenes: exploration, journeys, infiltration, chases, fights, social situations, downtime, parties | Szenen: Erkundung, Reisen, Einbruch, Verfolgungsjagden, Kämpfe, soziale Situationen, Auszeit, Partys |
| setup / pacing / jump cuts / surprises / tone / decisions / danger | Vorbereitung / Tempo / Schnitte / Überraschungen / Ton / Entscheidungen / Gefahr |
| change the game / alternate rules / other settings | Das Spiel verändern / Alternative Regeln / Andere Settings |

Unbekannte Begriffe: sinngemäß übersetzen und ins Glossar eintragen, damit alle Dateien gleich übersetzen.

---

## 3. Design (aus dem PDF gemessen)

Das Buch ist ein **Zine/Skater-Magazin**: weiße Seiten mit knalligen Farbkästen, Farbklecksen an der Seitenkante, Marker-Überschriften, handschriftlichen Randnotizen des Autors, Klebeband-Collagen, Fake-Werbung. Jedes Kapitel hat eine eigene Farbe (Klecks oben rechts mit Kapitelname in weißen Versalien).

**Schriften** (alle fertig in `plan/slugblaster/mockups/src/fonts/` → nach `assets/fonts/` kopieren):
- **Überschriften:** `sb-onedirection.woff2` (OneDirection, Marker-Versalien des Buchs). Aus dem PDF gezogen mit `build_fonts.py`: leere Zeichen entfernt, **Ä Ö Ü ä ö ü ß ergänzt**. Im Buch-Teilset fehlen **Ziffern** → Ersatzschrift „SB Ziffern“ = `permanent-marker-latin-400-normal.woff2` (in der Schriftliste direkt dahinter, siehe `sb.css`). Für große Zahlen in Zählern (Biss, Crew-Style) lieber Figtree 900 nehmen.
- **Handschrift:** `sb-hateyourwriting.woff2` (HateYourWriting, Randnotizen; Umlaute ergänzt). Läuft klein – mindestens 19 px.
- **Fließtext:** Proxima Nova ist kommerziell → Ersatz **Figtree** (400, 400 kursiv, 600, 800, 900). Kastentext im Buch ist Semibold (600) weiß.
- Versalien-Köpfe („WHEN DOES IT TAKE PLACE?“): Figtree 900, 11–12 px, `letter-spacing:.14em`.

**Farben** (exakte Füllfarben aus dem PDF, als CSS-Variablen in `sb.css`):
- Kapitel 1 · Lila: `--lila #6d4d9f` (Kopfzeile, lila Seiten) · `--lila2 #866baf` (Kästen) · `--lila3 #785ba7` · `--lav #d8d1e8` (Tabellen-Zebra) · `--lav2 #a997c8`
- Kapitel 2 · Pink: `--pink #f175ad` (Überschriften fast überall!) · `--mag #ec008c` (Desaster, aktive Phase) · `--rosa #f7b8d4` · `--rosa2 #fbdbe9`
- Kapitel 3 · Gelb: `--gelb #ffd457` · `--gelb2 #ffdc7b`
- Kapitel 4 · Minze: `--mint #2fb996` · `--mint2 #69c5a8` · `--teal #008496` (Kästen „Attitude“, „Other Options“)
- Akzente: `--cyan #00aeef` (blaue Kästen) · `--cyan2 #7ed3f7` (Skizzenblau) · `--petrol #5495a6`
- Nachtseiten (Andere Welten): `--nacht #292829` · `--nacht2 #3a383a`
- Oolroob: `#d37e2a` (Seite) · `#c15228` (Klecks/Kopf) · `#f2af2c` (Gelb) · `#fdedb3` (Creme, Überschriften) · `#3a1511` (Text) · `#0d5358` (Teal-Kasten) · `#da3229` (Rot)

**Bausteine (wie im Buch, alle in `sb.css`):**
- **Kapitelklecks:** organische Form (`border-radius:58% 42% 51% 49% / 38% 57% 43% 62%`) in Kapitelfarbe; der **aktive Tab** sitzt auf so einem Klecks (Entwurf 2), die Startkacheln haben ihn oben rechts (Entwurf 1).
- **Farbkasten:** Vollfarbe (lila2/teal/cyan/pink/magenta/minze), weißer Semibold-Text, Kopf in Versalien. Keine Rundung, kein Rand.
- **Balken-Kasten** (BOOST/KICK/DARE S. 19): 7-px-Balken links in Lila.
- **W6-Tabellen:** Zebra in Lavendel (Kap. 1/4) bzw. Rosa (Kap. 2) bzw. Gelb (Kap. 3), Zahl fett, Spaltenköpfe in Versalien. W66-Tabellen (Tour-Ideen S. 28–29, Crew-Namen S. 74) zweispaltig wie im Buch.
- **Randnotiz:** Handschrift, Farbe wie im Buch (meist Teal `#008496`, sonst Pink/Lila/Magenta). Im Fließtext als kleine Notiz, leicht gedreht (−3°).
- **Randnotiz-Bühne (Figuren, Signatur-Skizzen, Karten – Entwurf 5):** Figur, Notizen **und Zeigelinien** genau wie im Buch. `plan/slugblaster/extract_notes.py <pdf> <seite>` liefert je Seite eine „Bühne“ (alle Maße in pt): Lage der Figur, jede Notiz (Rechteck, Farbe, englischer Text) und jede Zeigelinie als **SVG-Pfad** (die Original-Vektorlinien des PDFs). Fertig für die fünf Persönlichkeiten: `plan/slugblaster/notizen-persoenlichkeiten.json` (S. 43/45/47/49/51); auch für S. 52/53/58/61 (Signatur-Skizzen), S. 94 und alle anderen Seiten mit Randnotizen verwenden.
  - Aufbau: `<div class="stage" style="width:460px;aspect-ratio:w/h">` → Figur absolut in % · Notizen absolut in % · darüber `<svg viewBox="0 0 w h">` mit den Pfaden (`fill:none; stroke:<Notizfarbe>; stroke-width:1.7px; vector-effect:non-scaling-stroke; stroke-linecap:round`).
  - **Schriftgröße proportional** zum Buch: `font-size = Originalgröße(pt) × Bühnenbreite(px)/w` (bei 460 px ≈ 17 px), `line-height:.84`, `white-space:nowrap`, Zeilenumbrüche fest im Datentext (`<br>`).
  - **Anker:** Jede Notiz bleibt an der Seite fest, an der ihre Linie andockt – `a:"r"` (rechte Kante fest, Text rechtsbündig, wächst nach links), `a:"l"` (links fest), `v:"b"` (Unterkante fest, wenn die Linie unten andockt). So überdeckt längerer deutscher Text nie eine Linie.
  - **Übersetzung knapp halten:** höchstens so viele Zeilen wie im Original; eher kürzer formulieren als die Notiz zu verbreitern. Jede Bühne per Screenshot prüfen: kein Text über Linien oder über dem Gesicht der Figur.
- **Aufzählungen:** gefüllte schwarze Punkte (auf Nachtseiten pink).
- **Beat-Kosten:** Plaketten „3 STYLE“ (Pink) / „4 ÄRGER“ (Schwarz).
- **Leisten** (S. 149): Uhren 4/6/8 als SVG-Torten, Kästchen, Wort-Leiste (Buchstaben eines Wortes durchstreichen), Strichliste 3/5. Fortschritt = Minze, Gefahr = Magenta.
- **Klebeband** (gelb/pink, halbtransparent) für Karten/Zettel (Multiversum-Karte, Entwurf 3).
- **Fraktions-Skala** −3 … +3 und `!!!` in Handschrift (S. 126).

### 3a. Gestaltungsregeln – ruhig und durchgestaltet (verbindlich)
Moritz will jede Ansicht **gut sortiert und nicht überladen**. Das Buch ist laut und bunt – das Tool übernimmt die Bausteine, aber **sparsam**:
1. **Festes Raster:** höchstens **drei Spalten** je Ansicht, feste Spaltenbreiten wie in den Entwürfen; Abstände nur aus der Reihe 4 · 8 · 12 · 16 · 20 · 28 px; Seitenrand 24 px.
2. **Eine Hauptfarbe je Ansicht** (Kapitelfarbe) + Pink für Überschriften + höchstens **eine** Kastenfarbe dazu. Kein Regenbogen aus Kästen.
3. **Höchstens ein Farbkasten je Spalte.** Alles andere ist Text auf Weiß mit Versalien-Kopf (Figtree 900, 11 px, `letter-spacing:.14em`) und dünner Trennlinie `#e6e1ef`.
4. **Überschriften-Hierarchie:** Seitentitel Marker 44–58 px · Abschnitt Versalien-Kopf · Eintrag fett. Nie zwei Marker-Größen nebeneinander.
5. **Lange Listen kürzen:** auf der Folge-Tafel höchstens 5 Einträge je Liste sichtbar, Rest hinter „+ N weitere“ (aufklappen). Auf Nachschlage-Seiten voller Text.
6. **Kleckse nur als Markierung** (aktiver Tab, aktive Phase, Kapitelmarke) – Text darauf immer **mittig mit mind. 14 px Rand**, nie abgeschnitten (Entwurf 2: sechs gleich breite Stationen, Pfeile in den Spaltenlücken, nicht über dem Klecks).
7. **Zahlen/Leisten wie auf dem Bogen** (Dreiecke, Rauten, Würfel-/Blitz-Symbole) – nie eigene Ersatzsymbole, keine leeren Platzhalter-Kreise.
8. **Randnotizen** höchstens dort, wo das Buch sie hat; nie als Deko.
9. Jede Ansicht vor dem Fertigmelden als Screenshot gegen diese Liste prüfen (Ausrichtung, Abstände, Überlauf, abgeschnittene Texte, leere Flächen).

**Themen je Bereich (wie die Kapitel im Buch):**
| Bereich | Seite | Aktiver Tab / Akzent |
|---|---|---|
| Start, Folge, Crew, Nachschlagen Kap. 1 & 4 | weiß | Lila bzw. Minze |
| Nachschlagen Kap. 2 (Teenager) | weiß; **Signaturen**-Seiten lila `#6d4d9f` (Entwurf 6) | Pink |
| Multiversum (Karte, Welten) | **Nacht `#292829`** (Entwurf 3/4) | Gelb |
| Heimat, Monster, Fraktionen | weiß | Gelb |
| Oolroob | Orange `#d37e2a` | Gelb `#f2af2c` |

---

## 4. Struktur des Tools (Navigation)

```
#start                              Vorbereitung (Entwurf 1) – erste Seite beim Öffnen
#folge                              Folge-Tafel (Entwurf 2) – Phase aus dem Spielstand
#crew                               Crew: Crewbogen, SC-Liste, Ruhm
#crew/<sc>                          Charakterbogen eines SC (interaktiv, PDF-Export)
#welten                             Multiversum: Karte + Weltenkarten (Entwurf 3)
#welten/<id>                        Welt-Seite (Entwurf 4); <id> auch bonus-<id>, portale
#heimat                             Hillview (Karte S. 83 mit Pins + 20 Orte) 
#heimat/<id>                        Bonus-Heimatort
#monster  ·  #monster/<id>          Monster-Übersicht / Monster
#fraktionen                         Beziehungen (Entwurf 7) · #fraktionen/<art>/<id>
#nach/<kapitel>/<abschnitt>         Nachschlagen: spielablauf | teenager | spielleitung | veraendern | demo
#schirm                             Spielleiterschirm (Referenzbögen GM/Rules/Beats)
#galerie                            alle Buchbilder
#oolroob[/<tab>[/<id>]]             Untersetting Oolroob (Entwurf 8)
```

**Haupt-Tabs im Spielbereich:** Folge · Crew · Multiversum · Heimat · Monster · Fraktionen (+ Stift rechts).
**Nachschlagen-Tabs** (über Startseite und Burger): Spielablauf (Kap. 1) · Teenager (Kap. 2) · Spielleitung (Kap. 4) · Spiel verändern (S. 164–167) · Demo (Spielbeispiele S. 32–36, 162–163). Kapitel 3 wird **nicht** doppelt angelegt – es lebt in den Spiel-Tabs Multiversum/Heimat/Monster/Fraktionen; die Startkachel „Das irre Multiversum“ springt dorthin.
**Burger-Menü:** Startseite · Nachschlagen (5 Einträge) · Spielleiterschirm · Charakterbögen · Galerie · Bücher · Spielstand zurücksetzen. **Keine** Setting-Auswahl im Burger (nur im Logo-Dropdown).
**Kopfzeile:** Logo (Dropdown aus `toolmenu.js`) · i-Knopf (`shared/info/slugblaster.js`) · Buch-Symbol (Auswahl: Regelbuch, Oolroob) · Burger.

---

## 5. Ansichten im Detail

### 5.1 Startseite (Entwurf 1)
- **Kopfband** 330 px, Lila: links „Das ist **Slug**blaster“ in Marker (86 px, „Slug“ pink) + Handschrift-Satz aus S. 6 (Übersetzung von „This is Slugblaster, a tabletop roleplaying game about teenagers, giant bugs, circuit-bent hoverboards, and trying to be cool.“), rechts das **Cover ungeschnitten** (quadratisch, `img/start/cover.webp`), Magenta-Klecks unten mit „Was dieses Spiel ist und wie man es spielt“.
- **Vier Kapitel-Kacheln** mit Kapitelklecks oben rechts („Kapitel 1“ …), Titel in Marker, Untertitel in Handschrift, Unterkapitel als Zeilen mit „S. n“. Kap. 1/2/4 → Nachschlagen, Kap. 3 → Spiel-Tabs.
- Rechts: **„Losblasten!“** (Magenta, großer Marker) → `#folge`, mit Plakette „Weiter: Folge N · <Welt>“ aus dem Spielstand. Darunter Chips: Charakterbögen, Crewbogen, Regelübersicht (= Schirm), SL-Bogen, Werbung & Galerie. Darunter **Oolroob-Kachel** (Orange, Cover-Miniatur).
- Muss auf 1440×900 und 1280×800 ohne Scrollen passen.

### 5.2 Folge-Tafel (Entwurf 2) – das Herzstück
**Kreislauf-Leiste** oben (S. 13, Reihenfolge laut SL-Bogen): „Folge N“ + „Staffel: N von 5–10“ · Tour wählen → Auffrischen → **Die Tour!** → Desaster?? → Aufräumen → Auszeit!. Aktive Phase auf Magenta-Klecks, erledigte grau, Pfeile handgezeichnet. Rechts der **Biss-Zähler** (Minze, Zähne als Dreiecke, −/+). Die sechs Stationen sind **gleich breit**, die Pfeile stehen in den Spaltenlücken, die aktive Station sitzt mittig auf dem Klecks (Regel 3a.6). Klick auf Phase wechselt den Inhalt darunter. „Auszeit!“ → Knopf „Nächste Folge“ (Folge +1, Phase = Tour wählen). Letzte Folge der Staffel: Schalter „Finale“ → statt Desaster der **Epilog** (S. 30).

Inhalt je Phase (immer dreispaltig: links Phase-Werkzeug, Mitte Crew-Status, rechts Welt/SL-Hilfe – keine leeren Spalten):
| Phase | Links | Rechts |
|---|---|---|
| Tour wählen | **Tour-Planer**: Ziel, Preis (Typ-Chips Spot/Bonus/Zeug/Gunst/Zugang, S. 29), Hindernis (S. 154), Welt (Auswahl aus Welten/Heimat), Schalter Mega-Preis (+Biss). Tour-Ideen W66 (S. 28–29) als anklickbare Liste („übernehmen“ füllt das Ziel; benutzte grau). | Besondere Orte der gewählten Welt (S. 28 verweist darauf), Hindernis-Arten (S. 154) |
| Auffrischen | Knopf „Auffrischen“: füllt Haltung (Boost/Kick) aller SC, Biss + 1 je Spieler (+ Bonus bei riskanten Touren). Text S. 13/19/145. | SL-Aktionen „Jederzeit kannst du …“ |
| Die Tour! | Tour-Karte (Ziel/Preis/Hindernis/Welt-Chip/Heimweg) + **Leisten** (Uhr 4/6/8, Kästchen, Wort, Strichliste; Name, Fortschritt/Gefahr; „+ Leiste“). Monster-Knopf „Auf die Tafel“ legt hier eine Gefahrenleiste an. | Welt der Tour (Nachtseite): Probleme/Wegpunkte klickbar; Kasten „Biss ausgeben“ (1 Biss / 2 Biss, S. 145); aufklappbar: Sturz-Beispiele, schlimmere Probleme, Desaster-Ideen (SL-Bogen) |
| Desaster?? | Je SC: „Würfle X W6, nimm den höchsten“ (X = leere Ärger-Felder) + Ergebnis-Knöpfe 6 / 4–5 / 1–3 → wenden an (+1 Style / +1 Ärger / +1 Verhängnis mit Textfeld). The Guts: Hinweis +1W6 (Wandelndes Desaster). | Desaster-Ideen (S. 155) |
| Aufräumen | Je SC Style-Bonus seiner Persönlichkeit (Text + „+1“-Knopf), „Stürze löschen“ (Super-Stürze → normale Stürze), Preis verteilen (Crew-Style, Bauteile), Link „Fraktionen anpassen“ → `#fraktionen` | Crew-Zeile groß (Crew-Style, Ruhm-Stufe mit Kosten der nächsten Stufe) |
| Auszeit! | Je SC verfügbare **Momente** (Eigenschafts-Moment, Persönlichkeits-Bogen in fester Reihenfolge, Familien-, Angst-Bogen, weitere Momente, In der Werkstatt, Signatur-Moment); Klick zieht die Kosten ab (Style bzw. Ärger) und hakt Einmal-Momente ab; Folgen (+1 Vermächtnis …) als Hinweis. Crew-Momente (S. 25). | **Gelegenheiten** und **Herausforderungen** (W6 + Alternativspalte, S. 26–27, mit Modifikatoren), Ereignisse |

**Crew-Status (Mitte, Entwurf 2):** ruhige Tabelle mit vier Spalten (Name/Persönlichkeit · Ärger + Style · Haltung · Stürze). Je SC Name (Marker) + Persönlichkeits-Plakette, **Ärger 8 Dreiecke** (das 8. mit Ausrufezeichen, markiert → Desaster-Hinweis), **Haltung** (genau die Symbole der Persönlichkeit wie auf dem Bogen: Würfel = Boost, Blitz = Kick – je Persönlichkeit am Bogen ablesen; Guts = 1 Boost + 3 Kick), **Style 8 Rauten**, **2 Sturz-Felder** als Etiketten (voll + neuer Sturz → Desaster), Verhängnis/Vermächtnis klein. Crew-Zeile wie Crewbogen: **Hype** (4 Boost-Würfel + 4 Kick-Blitze), Crew-Style (10 Rauten), Ruhm, **2 Bruch-Felder** (voll + neuer Bruch → Trennung, S. 21). Klick auf Namen → Charakterbogen.

### 5.3 Crew
Crewbogen nach S. 72–77 und Crew-Sheet: Name (W6-Tabellen S. 74 als Hilfe), Marke, Treffpunkt (W6 S. 73), Die Karte (→ Multiversum), Fraktionen (Start-Beziehungen, S. 73), Start-Vorteil, Hype, Brüche, **Ruhm**: Stufenleiter Niemande → Legenden (S. 76–77) mit Kosten und Vorteilen; gekaufte Vorteile abhaken (Masken, Schutzanzüge, Logikbinder schalten Gefahrenstufen der Welten frei – Plakette auf den Weltenkarten). SC-Karten (Bild = Figur der Persönlichkeit klein, Name, Signatur) → Charakterbogen.

### 5.4 Charakterbogen (`#crew/<sc>`)
Interaktiver, **deutscher** Nachbau des Persönlichkeitsbogens (All Sheets S. 5–9) im Grunge-Schwarzweiß der Bögen (Pinsel-Titel als Bild, Felder wie im Original) mit Signatur-Bogen (S. 11–16) als zweiter Seite. Export: `shared/fillpdf.js` (ausfüllbares PDF, bleibt bearbeitbar). Zusätzlich „Original-Bogen (EN) ausfüllen“: befüllt die ausfüllbaren Original-PDFs (Moritz lädt sie in die Bücherliste; Feldkarten `plan/slugblaster/felder/*.tsv`, Feldnamen sind generisch „Text Field 254“ → Zuordnung über Rechteck + nächstes Wort, **am Seitenbild prüfen**). Kommt als **letzter Schritt**.

### 5.5 Multiversum (Entwürfe 3 + 4)
- **Karte** „Kartiert das Multiversum“ (S. 94) **als SVG neu gesetzt** aus den Vektorpfaden der Seite (`page.get_drawings()`), Beschriftung deutsch in Marker; jede Welt ist ein eigenes `<path>` (Hover Pink, Klick → Welt). Weißer Zettel mit zwei Klebestreifen auf Nachtgrund. Die Crew kann **Portale einzeichnen** (Klick Welt A → Welt B; ein-/zweiseitig; Komplikationsnummer aus S. 92 „Planar Hopscotch“/„One-way gates“), gespeichert. Fragezeichen-Felder = unbekannte Welten (anklickbar → Bonus-Welten/Welt bauen).
- Rechts **Weltenkarten** (3er-Raster): Hillview (gelber Rand, „Heimat“) + 11 Welten, je Name (Marker Pink), Aussprache (Handschrift Gelb), Kursiv-Satz, Plaketten (CIV, Maske/Schutzanzug/Logikbinder = Gefahrenstufe aus dem Buch), S. Darunter Bonus-Welten als Chips (S. 114–117) + „Welt bauen“ (W6-Tabellen S. 113).
- **Welt-Seite (Entwurf 4):** Unter-Leiste mit allen Welten (Karte · 11 Welten · Bonus-Welten · Portale & Dünnzonen). Links Name groß, Kursiv-Satz, Text zweispaltig, Besondere Orte als Karten in einer Zeile, Sonderkästen (Weird Gravity, A World Without Night, Mysterious Physics, Hazwear Needed, Portal Rupture, Logic Binders Needed, Downtime Beat …) als Farbkästen, Knöpfe „Tour hier starten“ und „Person bauen (S. 141)“. Rechts das Weltbild (nur wo vorhanden, 2:1 ungeschnitten), Probleme und Wegpunkte (klickbar, gleicher Zustand wie auf der Tafel), Bewohner-Kasten.
- „Portale & Dünnzonen“: S. 90–93 (Lokales Multiversum, Raumzeit zerreißen, Dünnzonen mit W6-Tabelle, Planar Hopscotch, One-Way Gates, Slugger-Slang, Peelback, Feindliche Umgebungen).

### 5.6 Heimat
**Hillview** (S. 80–83): Kopf mit Text, Kästen „Das echte Hillview“ und „Technikstand“, Probleme/Wegpunkte (klickbar), **Karte S. 83 mit Pins** für die 20 Orte von S. 82 (unsichtbare Klickflächen wie bei Oolroob, Klick hebt den Ort in der Liste hervor und umgekehrt). Unter-Leiste: Hillview · 12 Bonus-Heimatorte (S. 84–88: Oakmont Park, Oceano, Kingsport, Greatwood, Greektown, Medina, Todos os Santos, Northwood, Walkergate, Kada Kada, Fort George, Baranek – je Autorzeile, Text, Merkmale) · Oolroob (Sprung ins Untersetting).

### 5.7 Monster
Übersicht als Kartenraster (S. 118–125): Name (Marker Pink), Text, Verhalten als Liste mit **Sturz-Chips** (die kursiven Klammern, z. B. *gepackt, verletzt*), Bild klein in der Karte nur bei Monstern mit eigenem Bild (am Seitenbild prüfen, z. B. S. 121/122). Knopf „Auf die Tafel“ → Gefahrenleiste auf der Folge-Tafel. „Mach ein Monster“ (S. 125) als W6-Tabellen (Adjektiv ×2, Nomen, schwach gegen, stark gegen). Intro S. 118.

### 5.8 Fraktionen (Entwurf 7)
- **Beziehungen:** alle 20 Fraktionen in 4 Blöcken (Crews, Obrigkeiten, Sponsoren, Cliquen), je Zeile Name + Skala −3…+3 in Handschrift + `!!!` (instabil). Gespeichert; Änderungen erscheinen auf der Folge-Tafel (Aufräumen). Fraktionsregeln S. 126 als Kasten oben/rechts.
- **Fraktion** (Klick): Text, NSC, Besitz, Mag/Mag nicht, **SITUATION!** (Pink-Kasten), Randnotizen, Sonderkästen (z. B. Panic-Energy-Sorten S. 138, Infinite Pizza S. 139, Nexus Master/Rescue Agent/Research Facility S. 132–133 mit Problemen/Wegpunkten). Bilder nur bei eindeutiger Zugehörigkeit (Wilt-Wabbit-Board S. 129 → Lazy Bunny, Hardecker-Bohrer S. 137 → Hardecker …).
- Unter-Leiste: Beziehungen · Crews · Obrigkeiten · Sponsoren · Cliquen · Mach eine Person (S. 141, W6-Tabellen).

### 5.9 Nachschlagen (Entwürfe 5 + 6)
Tab-Leiste oben, Unter-Leiste je Kapitel; Seitenleiste nur bei Spielablauf und Spielleitung. Alles, was im Buch ein Kasten/Karte ist, wird als echter Kasten gebaut.
| Tab | Inhalt (S.) | Aufbau |
|---|---|---|
| Spielablauf | Kap. 1: Einführung (6–9), Was ist Slugblasten? (10–11, als 8 Kärtchen wie im Buch), Überblick/Kreislauf (12–13, Kreislauf als großes Diagramm), Tipps (14), Sachen machen (18–19), Stürze einstecken (20–21), Cool aussehen (22–23), Momente (24–25), Gelegenheiten & Herausforderungen (26–27), Touren (28–29), Epilog (30) | Seitenleiste |
| Teenager | Kap. 2: Mach dich selbst (40–41) · **Persönlichkeiten** (42–51, Entwurf 5: Titel-Schriftzug als Bild, Figur ungeschnitten mit Randnotizen an Buch-Position, Haltung-Kasten Teal mit Original-Symbolen, Eigenschaften, Bogen mit Kosten-Plaketten, Vibes-W6) · **Signaturen** (52–61, Entwurf 6: lila Seiten, 12 Bildkarten, Detail mit Funktion, Aussehen-Tabelle, Mods mit Bauteilkosten als Symbole) · Ausrüstung (62–70: Handy, Strahlenpistole mit W6-Bau, Board mit Grip-Farben/-Schnitt/Deck-Grafik, weitere Ausrüstung als Karten) · Sticker & Co. (71) · Crew (72–75) · Ruhm (76–77) | Unter-Leiste + Persönlichkeiten-Leiste |
| Spielleitung | Kap. 4: Was die SL tut (144–145), Vorbereitung (146–147), Tempo & Leisten (148–149), Ton (150–151, Fragebogen), Entscheidungen (153), Gefahr (154–155), Szenen (156–161 mit Problem-Tabellen je Szenenart, Partys W6), | Seitenleiste |
| Spiel verändern | 164–167: Schwierigkeit, länger spielen, alternative Regeln, andere Settings/Geschichten, eigene Signaturen (Solo-Teil weglassen) | Seitenleiste |
| Demo | Spielbeispiele S. 32–36 und 162–163 als Dialog-Karten (Sprecher fett, SL-Zeilen lila) | ohne Seitenleiste |

### 5.10 Oolroob (Entwurf 8)
Untersetting mit eigenem Orange-Thema. Kopfzeile: nur der **Oolroob-Schriftzug** vom Heft-Cover (freigestellt) statt Slugblaster-Logo. Tabs: Überblick (S. 2–3: Einleitung, Touchstones, Oolroob, Slugblasting, Merkmale, Mad Metasaur, Randnotizen) · **Roob** (Karte S. 7 mit Klickflächen auf den 20 nummerierten Pins, Orte nach Nord/Süd/Östliche Hügel S. 4–5, Klick hebt gegenseitig hervor) · Probleme & Wegpunkte (W66-Tabellen S. 8, klickbar) · Fraktionen (Cliquen, Crews, Obrigkeiten, Sponsoren S. 9–13 mit SITUATION!; die Oolroob-Fraktionen erscheinen auch in den Beziehungen unter „Oolroob“) · Signaturen & Ausrüstung (S. 14–15) · Kreaturen (S. 16–17) · Verschiedenes (Megashift-Tabellen, Süßigkeiten & Snacks, Slang S. 18). Die Oolroob-Werbung (S. 6) in die Galerie. Credits/Land-Acknowledgement (S. 2 Absatz, S. 19) bleiben im Überblick als Kasten.

### 5.11 Werkzeuge
- **Spielleiterschirm** (`#schirm`, Taste `s`): Referenzbögen Regeln, SL, Momente 1+2 (All Sheets S. 1–4) als Overlay mit Reitern, deutsch, Original-Layout (dreispaltig).
- **Suche** (Taste `/`), **Galerie** (alle Buchbilder, Gruppen: Kapitel, Persönlichkeiten, Signaturen, Welten, Monster, Fraktionen, Werbung aus dem Multiversum, Oolroob), **Bücher** (Regelbuch, Oolroob, Bögen), **Buch öffnen** (Buch-Symbol mit Auswahl Regelbuch/Oolroob), **i-Knopf** (`shared/info/slugblaster.js`: Setting, Kreislauf, Aktionswurf, Probleme, Ärger/Desaster – kurz, im Lila-Design; in `shared/sysinfo.js` MAP ergänzen).
- `toolmenu.js`: Untertitel „Skater-Sci-Fi“ beim Slugblaster-Eintrag entfernen; Untersetting **Oolroob** (eingeklappt, 1,5 s Hover) mit eigenem Schriftzug; `cur()` erkennt `#oolroob` → `"sb_oolroob"`.

### 5.12 Spielstand
`localStorage["sb_state_v1"]` = `{ last:"folge", folge:{n:3, staffel:[5,10], phase:"tour", finale:false}, biss:4, tour:{ziel, preis:{typ:["zeug","gunst"], x}, hindernis, welt:"thennis-spar", mega:false, heim:"…"}, leisten:[{id, t, art:"fortschritt"|"gefahr", typ:"uhr"|"kasten"|"wort"|"strich", n:6, x:3, wort:"KAYGHT"}], sc:[{id, name, pers:"guts", sig:"gravity-blaster", aerger:5, haltung:{boost:1, kick:2}, style:3, stuerze:["angeschmort"], verh:[], verm:[], momente:{}, eig:["angeber"], mods:[], bauteile:{linse:1}}], crew:{name, marke, treff, hype:1, style:7, ruhm:"aufsteiger", vorteile:[], brueche:1}, frak:{miper:{s:1, inst:false}}, benutzt:{"welt/thennis-spar/probleme/0":true}, portale:[["vastiche","thennis-spar",2,"einweg"]], notiz:{} }`. Alle Zugriffe in `try/catch`.

---

## 6. Architektur und Datenformat

**Vorlage ist `pico/`** (zuletzt gebaut, gleiche Bausteine: Shell, Routing, Tab-Leisten, Seitenleiste, Blöcke, Kachel-Übersichten, Bögen mit FillPDF, Suche, Galerie, Bookviewer). `pico/index.html`, `pico/style.css`, `pico/js/app.js`, `nach.js`, `suche.js`, `bogen.js` nach `slugblaster/` kopieren, Präfixe umbenennen (`PI_` → `SB_`, `pi_state_v1` → `sb_state_v1`, `pi_core` → `sb_core`), Pico-Inhalte entfernen, Design durch `sb.css` ersetzen. `slugblaster/sys.js` + `sysstart` danach nicht mehr verwenden (Bücherliste → `slugblaster/js/data/buecher.js`, `off:0`).

```
slugblaster/index.html            Shell – Kopfzeile, #app, Burger, Suche, Skripte, toolmenu.js, gm_tool_mode_v1="slugblaster"
slugblaster/style.css             Design nach Abschnitt 3 (aus sb.css)
slugblaster/js/app.js             Routing, Startseite, Tabs, Seitenleiste, Blöcke, Tasten
slugblaster/js/folge.js           Folge-Tafel (Kreislauf, Phasen, Biss, Tour-Planer)
slugblaster/js/leiste.js          Leisten-Baustein (Uhr/Kästchen/Wort/Strich) – überall derselbe
slugblaster/js/crew.js            Crew, Ruhm, SC-Status
slugblaster/js/bogen.js           Charakter-/Crewbogen + PDF
slugblaster/js/welten.js          Multiversum-Karte (SVG), Weltenkarten, Welt-Seite, Heimat
slugblaster/js/monster.js, fraktionen.js, nach.js, schirm.js, suche.js, oolroob.js
slugblaster/js/data/buecher.js, glossar.js, galerie.js
slugblaster/js/data/k1-a.js … k1-c.js (Kap. 1), k2-persoenlichkeiten.js, k2-signaturen-a.js/-b.js, k2-ausruestung.js, k2-crew-ruhm.js,
             heimat-hillview.js, heimat-bonus.js, welten-a.js (Vastiche–Golden Jungle), welten-b.js (Prismatia–Waking Pits), welten-c.js (Popularia–Quahalia),
             welten-bonus.js, welten-portale.js, monster.js, fraktionen-crews.js, -obrigkeiten.js, -sponsoren.js, -cliquen.js, person.js,
             k4-a.js … k4-c.js, veraendern.js, demo.js, schirm.js, touren.js (Tour-Ideen, Preise, Hindernisse), momente.js (alle Momente mit Kosten/Folgen),
             gelegenheiten.js, karte-multiversum.js (SVG-Pfade), oolroob-a.js … oolroob-c.js
slugblaster/img/start/, kap/, pers/, sig/, ausr/, welt/, heimat/, monster/, frak/, werbung/, oolroob/
assets/fonts/sb-onedirection.woff2, sb-hateyourwriting.woff2, permanent-marker-latin-400-normal.woff2, figtree-latin-{400,600,800,900}-normal.woff2, figtree-latin-400-italic.woff2
```

### Text-Blöcke (wie Pico)
`{t:"p",x}`, `{t:"h",x,p}`, `{t:"ul",x:[…]}`, `{t:"box",h,c:"teal|cyan|pink|mag|lila|mint|gelb",x|b}`, `{t:"bar",h,x}` (Balken-Kasten), `{t:"d6",h,cols,rows}` (W6/W66, anklickbar), `{t:"note",x,c:"teal|pink|lila|mag"}` (Randnotiz), `{t:"dlg",b:[[sprecher,text],…]}` (Spielbeispiel), `{t:"cards",x:[…]}`, `{t:"img",src}`, `{t:"grid",n,x:[[Blöcke],…]}`.

### Persönlichkeit
```js
SB_PERS.push({ id:"guts", t:"The Guts", p:44, titelImg:"pers/titel-guts", img:"pers/guts", farbe:"#f175ad",
  text:[Blöcke], vorbilder:"Han Solo (*Star Wars*), …",
  haltung:{x:"Beschreibe, wie …", boost:1, kick:3},
  eig:[{id:"angeber", t:"Angeber", x:"…"}, …], extra:["Etwas, das du nicht haben solltest","Ein tragbarer Lautsprecher"],
  styleBonus:"+1 Style nach Touren, …", noteFeld:"Füll die Lücke z. B. mit …",
  moment:{t:"Großspurig", kosten:[2,"style"], x:"…", folge:"+1 Eigenschaft"},
  bogen:{t:"Guts-Bogen", x:[{t:"Rampenlicht", kosten:[3,"style"], x:"…", folge:"+1 Vermächtnis, +1 Bruch"}, …]},
  vibes:["Königin","heißes Chaos",…], notizen:[{x:"Ablatin-Helm, …", l:17, t:4, c:"teal"}, …] });   // l/t in % der Figur
```
### Signatur
```js
SB_SIG.push({ id:"gravity-blaster", t:"Gravity Blaster", p:54, img:"sig/gravity-blaster", x:"Oh, Schwerkraft. …",
  funktion:"Würfle, um …", aussehen:"Handschuh, Panzerhandschuh, Karabiner, …",
  mods:[{t:"Endurance Engine", b:{spule:1, edelstein:1}, x:"Würfle, um …"}, …] });
```
### Welt
```js
SB_WELT.push({ id:"thennis-spar", t:"Thennis Spar", p:97, aus:"…", tag:"Eine geschäftige …", plak:["CIV"], gefahr:0,
  text:[Blöcke], orte:[{t:"Arboristen-Tempel", x:"…"}, …], bewohner:[Blöcke], kaesten:[{h:"…", c:"lila", b:[Blöcke]}],
  probleme:["strenge Arboristen-Wachen", …], wegpunkte:["ein Olivenhain", …], notizen:[{x:"aktive Zivilisation", c:"gelb"}],
  img:"welt/thennis-spar" });
```
### Monster, Fraktion, Moment
```js
SB_MONSTER.push({ id:"quantum-centipede", t:"Quantenhundertfüßer", p:119, x:"…", verhalten:[{x:"Schwächt …", stuerze:["paranoid","verwirrt"]}, …], notizen:[…], img:null });
SB_FRAK.push({ id:"miper", art:"sponsor", t:"Miper", p:136, text:[Blöcke], nsc:"…", besitz:"…", mag:"…", magNicht:"…", situation:"…", extra:[…], notizen:[…], img:null });
SB_MOMENT.push({ id:"in-der-werkstatt", gruppe:"signatur", t:"In der Werkstatt", kosten:[1,"style"], einmal:false, x:"…", p:53 });
```

---

## 7. Bilder

Skript: `python3 -I plan/slugblaster/extract_images.py <pdf> /tmp/sb <befehl>` – `xref` (Rohbild **mit Transparenz**), `clip` (Seitenausschnitt in pt – für Vektor-Schriftzüge und Karten), `spread` (Doppelseite als ein Bild). Inventar: `plan/slugblaster/bilder-inventar.tsv`. Fertige Beispiele in `plan/slugblaster/mockups/src/img/`. Alles als `.webp`, sprechend benannt.

| Bereich | Quelle | Ziel / Hinweis |
|---|---|---|
| Cover | S. 1 (clip ganz) | `img/start/cover` – quadratisch, ungeschnitten |
| Persönlichkeits-Figuren | xref 499 (Grit S. 43), 530 (Guts S. 45), 558 (Smarts S. 47), 585 (Heart S. 49), 615 (Chill S. 51) | `img/pers/<id>` – freigestellt (SMask), Hochformat |
| Persönlichkeits-Schriftzüge | Vektor auf S. 42/44/46/48/50 → `clip` (z. B. Guts `clip 44 20 30 340 215`) | `img/pers/titel-<id>` |
| Signatur-Skizzen | **Buch** (schon hellblau, `extract_images.py xref`, danach auf Alpha-Rahmen zuschneiden): Negafriction Sword xref 623 (S. 52) · Powered Armour xref 630 (S. 53) · Photonic Jacket xref 649 (S. 58) · Hardlight Board xref 666 (S. 61). **Bögen** (`All_Sheets_Combined`, schwarz → mit `tint_sketch.py <pdf> <xref> <ziel>` freistellen und hellblau `#7ed3f7` färben): Reality Cannon 808 (S. 11) · Gravity Blaster 863 (S. 12) · Riftninja Sneakers 856 (S. 12) · Kinetic Deck 944 (S. 14) · Skipmode Runners 978 (S. 15) · Robotic Companion 1023 (S. 16). **Gemini** (Bogen zeigt nicht das Gerät): Voidwear Backpack, Hyperoptic Visor – Moritz liefert PNG, dann `tint_sketch.py <bild.png> - <ziel>`. Fertige Beispiele: `mockups/src/img/sig-*.webp` | `img/sig/<id>` – die zwei Gemini-Bilder nicht in die Galerie „Buchbilder“ |
| Kapitel-Eröffnungen | S. 4–5, 38–39, 78–79, 142–143 (Bild + Vektor-Titel → `clip` ganze Seite/Doppelseite) | `img/kap/k1` … `k4` – für Galerie und Nachschlagen-Köpfe |
| Welt-Bilder | Doppelseite S. 98–99 → **Thennis Spar**; S. 102–103 → **Der Goldene Dschungel** (moosbedeckter Riesenroboter); S. 107 → **Calorium**; S. 108 → **Die Erwachenden Gruben** | `img/welt/<id>` – nur diese vier Welten haben ein Bild |
| Multiversum-Karte | S. 94 – **nicht als Bild**, sondern SVG aus `get_drawings()` | `js/data/karte-multiversum.js` |
| Hillview-Karte | S. 83 (ganzseitig) | `img/heimat/hillview-karte` + Pins |
| Monster | S. 121–122 u. a. – nur Bilder, die eindeutig zu einem Monster gehören | `img/monster/<id>` |
| Fraktionen | Wilt-Wabbit-Board S. 129 (Lazy Bunny), S. 130 (The Wicks), Hardecker S. 137, Panic Energy S. 138, FUST S. 139 … am Seitenbild prüfen | `img/frak/<id>` |
| Werbung aus dem Multiversum | S. 15, 37, 57, 69, 95, 131, 152, 167, 171 (ganzseitig) | `img/werbung/…` – nur Galerie |
| Ausrüstung | S. 62–70 (Strahlenpistolen-Skizzen S. 63, Boards S. 64–65, Ausrüstung S. 66–70) | `img/ausr/…` |
| Oolroob | Cover S. 1, Karte S. 7, Fake-Werbung S. 6, Figuren S. 9–17 | `img/oolroob/…`; Schriftzug vom Cover für die Kopfzeile freistellen |

Regeln: Doppelseiten als **ein** Bild; nie ein Bild einer falschen Figur/Welt zuordnen – im Zweifel weglassen. Alle Bilder auch in die Galerie (`js/data/galerie.js`).

---

## 8. Arbeitsschritte (jeweils eine Sitzung: Screenshots, Commit, Push)

0. **Gerüst, Design, Schriften.** Pico-Code nach `slugblaster/` übernehmen (Abschnitt 6), Schriften nach `assets/fonts/`, `sb.css` → `slugblaster/style.css`. Startseite (Entwurf 1) mit Cover, Bücher/Bookviewer (`off:0`), Burger, Tasten, `sw.js`, `toolmenu.js` (Untertitel weg, Oolroob-Eintrag vorbereitet), i-Knopf.
1. **Folge-Tafel + Crew-Status** (Entwurf 2): `folge.js`, `leiste.js`, Kreislauf, Biss, Tour-Planer mit Tour-Ideen/Preisen/Hindernissen (S. 28–29, 154), alle sechs Phasen, Desaster-Tabelle, Momente-Daten (`momente.js`, S. 24–25 + alle Persönlichkeits-Momente), Gelegenheiten/Herausforderungen (S. 26–27). Welt-Spalte zunächst mit Thennis Spar.
2. **Multiversum:** SVG-Karte (S. 94) + Portale, Weltenkarten, Welt-Seite, alle 11 Welten (S. 96–112), Portale & Dünnzonen (S. 90–93), Bonus-Welten (S. 114–117), Welt bauen (S. 113).
3. **Heimat:** Hillview mit Karte/Pins (S. 80–83) + 12 Bonus-Heimatorte (S. 84–88).
4. **Monster** (S. 118–125) + **Fraktionen** mit Beziehungen (S. 126–141, Entwurf 7) + Mach eine Person.
5. **Crew** (S. 72–77) + **Teenager I:** Mach dich selbst, 5 Persönlichkeiten (Entwurf 5 mit Randnotiz-Bühne aus `notizen-persoenlichkeiten.json`; Loner weglassen).
6. **Teenager II:** 12 Signaturen (Entwurf 6) inkl. Skizzen (Abschnitt 7; die zwei Gemini-Bilder bei Moritz anfragen, solange sie fehlen: gestrichelter Rahmen ohne Text), Ausrüstung, Sticker & Co.
7. **Spielablauf** (Kap. 1 + Demo) und **Spielleitung** (Kap. 4) + Spiel verändern + Spielleiterschirm.
8. **Oolroob** komplett (Entwurf 8) inkl. Dropdown-Untersetting.
9. ✅ **Charakterbogen & Crewbogen** mit PDF-Export (Abschnitt 5.4) + Suche über alles + Galerie + Gesamtcheck (1280er-Viewport, keine JS-Fehler, keine Lücken, eingeklappte Seitenleiste) → diesen Plan als „erledigt“ markieren.

Für jede Sitzung bittet Sonnet Moritz, das Regelbuch-PDF (und für Schritt 6/8/9 das Oolroob-Heft bzw. die Bögen) hochzuladen. Der englische Text liegt schon im Repo.

---

## 9. Startauftrag für jede Sonnet-Sitzung (zum Kopieren)

> Lies `plan/SLUGBLASTER_PLAN.md` im Repo einmoritz-spec/Spielleitertool und setze **Schritt N** um. Halte dich an Abschnitt 2 (Grundregeln, Namensregel, Glossar) und Abschnitt 3 (Design) und baue genau nach den Entwürfen in `plan/slugblaster/mockups/`. Der englische Buchtext liegt in `quellen/slugblaster/text/` (Buchseite = PDF-Seite), das PDF hänge ich an. Übersetze vollständig ins Deutsche, nichts weglassen, nichts erfinden. Prüfe jede Ansicht per Screenshot (1440×900 und 1280×800), behebe Lücken/Überlauf, schick mir die Screenshots, committe ohne Co-Authored-By/Claude-Session-Zeilen und pushe.
