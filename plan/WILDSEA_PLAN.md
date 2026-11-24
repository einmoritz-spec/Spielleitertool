# The Wildsea – Spielleiter-Tafel (Bauplan)

Stand: 21. Nov. 2026. Arbeitsanweisung für die Umsetzung (gedacht für Sonnet, in mehreren Sitzungen).
Nichts aus diesem Plan ist bisher gebaut. Heute ist `wildsea/` nur eine Bücher-Startseite (`shared/sysstart.js` + `wildsea/sys.js`).
Ziel: ein vollständiges Setting wie Vaesen (`vaesen/`) – Vorbereitung, Nachschlagen, und vor allem ein **Leitstand für die „Abenteuer“**.

**Wichtig zum Verständnis:** Das Corebook enthält **keine fertigen Abenteuer**. Die spielbaren Inhalte sind die **sechs Reiche** (Kap. 11, S. 274–335) – Sandbox-Gebiete mit Territorien, Häfen, Fraktionen, Aufhängern, Wache-Tabellen und Gefahren. Diese sechs Reiche sind die „Abenteuer“ des Tools. Die Szenarien „Red Right Hand“ und „One Armed Scissor“ (eigene PDFs, noch nicht hochgeladen) bekommen später denselben Leitstand.

Entwürfe (Screenshots 1440×900) liegen in `plan/wildsea/mockups/` – **die Umsetzung muss diesen Entwürfen genau entsprechen**. Die HTML/CSS-Quellen der Entwürfe liegen in `plan/wildsea/mockups/src/` und dürfen als Ausgangspunkt für das CSS genutzt werden.

| Nr. | Datei | Ansicht |
|---|---|---|
| 1 | `m1-vorbereitung.jpg` | Startseite = Vorbereitung, Knopf „In See stechen“ |
| 2 | `m8-reiche.jpg` | Übersicht der Reiche und Szenarien |
| 3 | `m2-reich-ueberblick.jpg` | Reich-Leitstand · Überblick (Hauptelemente + Gerüchte) |
| 4 | `m3-reich-territorien.jpg` | Reich-Leitstand · Territorien |
| 5 | `m4-reich-fraktionen.jpg` | Reich-Leitstand · Fraktionen (Grundsätze, NSC, Aufhänger) |
| 6 | `m5-reich-auf-see.jpg` | Reich-Leitstand · Auf See (Reise-Tafel, Wache-Tabellen) |
| 7 | `m6-gefahren.jpg` | Gefahren-Browser + Begegnungsleiste |
| 8 | `m7-charaktere.jpg` | Nachschlagen · Charaktere (Blutlinie) |

Die Texte in den Entwürfen sind teils gekürzt – im Tool steht immer der **vollständige** Buchtext.

---

## 1. Quellen

| Was | Wo |
|---|---|
| Corebook (EN, 368 S., Querformat 720×612 pt) | wird vom Nutzer hochgeladen: `The_Wildsea___Regeln___Corebook__EN_.pdf` |
| Text des Corebooks, je Kapitel als Markdown | `quellen/wildsea/text/k01-setting.md` … `k13-boegen.md` (mit `<!-- S. 123 -->`-Marken) |
| Bild-Inventar (544 Bilder) | `plan/wildsea/bilder-inventar.tsv` |
| Skripte | `plan/wildsea/extract_text.py`, `plan/wildsea/extract_images.py` |
| Logo / Header-Bild | `assets/logos/the-wildsea.webp` (weiß, freigestellt), `wildsea/img/hero.webp` |

**Seitenzählung:** PDF-Seite = Buchseite (kein Versatz). Im Tool immer „S. 123“.
**Schriften des Buchs:** Teko SemiBold (Überschriften) und Merriweather (Fließtext) – beide liegen schon in `assets/fonts/`.
**Text:** Die Markdown-Dateien reichen für fast alles. Kursiv (`*…*`) markiert im Buch fast immer den Hinweis an die Spielleitung am Ende eines Eintrags → im Datenfeld `i` ablegen und kursiv-grünlich darstellen (siehe Entwurf 4). `##`-Zeilen mitten im Kapitel sind oft die kleinen Erzählschnipsel am Seitenrand (z. B. „Partov had always assumed …“) – sie gehören als Vorlesekasten dazu. Kästen, Tabellen und Wertelisten im Zweifel am Seitenbild prüfen (`pdftoppm -r 80 -f N -l N -png`).

---

## 2. Grundregeln (Moritz’ Vorgaben – unbedingt einhalten)

1. **Nur Buchtext, vollständig ins Deutsche übersetzt.** Nichts weglassen, nichts zusammenfassen, nichts erfinden (keine eigenen Tipps, keine Kurzüberblicke). Einzige Ausnahme: Bedienelemente (Leisten, Würfel, Begegnungsleiste), die das Spielen erleichtern.
2. **Weglassen:** Dragonfly-Regeln (spielleiterlos, S. 340–345), Kickstarter Backers (S. 356–361), The Team (S. 364), Index (ersetzt durch Suche). Mayfly-Regeln (Kurzspiel, S. 339) bleiben.
3. **Daten in viele Dateien** (eine Datei pro Reich, pro Gefahren-Kategorie, pro Kapitel; Posten auf mehrere Dateien verteilt).
4. **Bilder:** nur dort, wo sie im Buch zu genau diesem Eintrag gehören; nicht beschneiden (Hochformat bleibt hochkant, `contain`); Gegnerbilder klein in die Gefahren-Karte; breite Bilder als Kopfband; Buchbilder ohne Bildunterschrift/weißen Rand; Doppelseiten beachten.
5. Kopfzeile: links nur das Logo (dunkel eingefärbt auf hellem Grund, wie Entwurf), rechts Buch-Symbol und Burger. Keine Untertitel, keine Emojis.
6. Vorlesekästen ohne Beschriftung. Seitenangaben „S. 12“, unscheinbar hinter dem Namen. Notizen nur als Stift-Symbol. Tabs nur mit Namen, ohne Zahlen. Keine Erklärtexte.
7. **Keine Spaltenflüsse**, keine leeren Spalten, Breite nutzen (Raster, zeilenweise). Seitenleiste links nur bei Bereichen mit mehreren Abschnitten, einklappbar (‹-Knopf, Taste `b`), bleibt stehen (sticky), nur rechts scrollt. Lange Titel in der Seitenleiste nur bis zum Doppelpunkt. Taste `h` blendet die Kopfzeile aus.
8. **Klick-zum-Erledigen:** Aufhänger, Gerüchte, Passagiere – Klick irgendwo auf die Karte = erledigt, Karte inkl. Text grau. Kein Kästchen, keine Linie.
9. **Handy:** Viewport 1280 (wie überall), Seitenleiste wird zu wischbarer Zeile oben.
10. **Jede sichtbare Änderung selbst per Screenshot prüfen** (Playwright + `/usr/bin/google-chrome`, `file://…/wildsea/index.html#…`, Viewport 1440×900 **und** 1280×800), Lücken/Überlauf beheben, Screenshots an Moritz schicken.
11. **Commits ohne** „Co-Authored-By“- und „Claude-Session“-Zeilen. Push mit `git -c push.negotiate=true push`.
12. Neue Dateien in `sw.js` eintragen, `VERSION` erhöhen.
13. Neue Bedienelemente, die nicht in den Entwürfen stehen, **zuerst als Screenshot-Entwurf zeigen**.

### Namensregel
- **Bleiben englisch:** Eigennamen von Reichen, Orten, Häfen, Schiffen, Personen (The Foxloft, Highcross, Tall Mauzer, Marrow, Cressa Thorn), Kunstwörter ohne deutsche Bedeutung (Ardent, Ektus, Gau, Ketra, Mothryn, Tzelicrae, Writlings, Pangoska, Tryphoradons, Jikari), Sprachen-Namen (Raka Spit, Old Hand → „Alte Hand“ ist erlaubt, siehe Glossar).
- **Werden übersetzt:** beschreibende Namen (Hunting Families → Jagdfamilien, Seven Walls → Sieben Mauern, Belltower Crabs → Glockenturm-Krabben, Pinwolves → Nadelwölfe, The Mazoro Line → Die Mazoro-Linie, Kitlata’s Threads → Kitlatas Fäden).
- Beim ersten Vorkommen in einer Ansicht darf der Originalname klein und grau dahinter stehen, wenn er zum Nachschlagen im Buch nötig ist (nicht bei jedem Eintrag).

### Glossar (verbindlich)
| EN | DE |
|---|---|
| Firefly | Glühwürmchen (= Spielleitung) |
| the Wildsea / wildsailor / rustling waves | die Wildsee / Wildsegler / rauschende Wellen |
| reach / territory / port / faction | Reich / Territorium / Hafen / Fraktion |
| The Verdancy / pre-verdant / post-verdant | die Verdanz / vorverdant / nachverdant |
| the Skies / the Thrash / the Tangle / the Sink / the Drown / Darkness-Under-Eaves | Himmel / Gestrüpp / Geflecht / Senke / Tiefe / Dunkel-unter-der-Traufe |
| track / mark / burn / clear | Leiste / markieren / verbrennen / leeren |
| action roll / ratings roll | Aktionswurf / Werte-Wurf |
| triumph / conflict / disaster / twist | Triumph / Konflikt / Desaster / Wendung |
| cut / impact / advantage / focus | Abzug / Wucht / Vorteil / Fokus |
| scene / montage / journey / project | Szene / Montage / Reise / Projekt |
| edges: Grace, Iron, Instinct, Sharps, Teeth, Tides, Veils | Stärken: Anmut, Eisen, Instinkt, Schärfe, Zähne, Gezeiten, Schleier |
| skills: Brace, Break, Concoct, Cook, Delve, Flourish, Hack, Harvest, Hunt, Outwit, Rattle, Scavenge, Sense, Study, Sway, Tend, Vault, Wavewalk | Fertigkeiten: Abfangen, Zerschlagen, Brauen, Kochen, Ergründen, Glänzen, Hacken, Ernten, Jagen, Überlisten, Rasseln, Ausschlachten, Spüren, Studieren, Überzeugen, Pflegen, Springen, Wellenlauf |
| languages | Sprachen (Brasstongue = Messingzunge, Old Hand = Alte Hand, Signalling = Signalsprache, Low Sour = Tiefsauer, Chthonic = Chthonisch, Knock = Klopfen; Raka Spit, Lyre-Bite, Saprekk, Gaudimm, Highvin bleiben) |
| aspects: trait / gear / companion | Aspekte: Eigenschaft / Ausrüstung / Gefährte |
| resources: salvage / specimens / whispers / charts / cargo | Ressourcen: Bergegut / Proben / Geflüster / Seekarten / Fracht |
| mire / drive / milestone | Morast / Antrieb / Meilenstein |
| bloodline / origin / post | Blutlinie / Herkunft / Posten |
| ship ratings: Armour, Seals, Speed, Saws, Stealth, Tilt | Schiffswerte: Panzerung, Dichtung, Tempo, Sägen, Tarnung, Neigung |
| undercrew: officers / gangs / packs | Unterbesatzung: Offiziere / Banden / Rudel |
| hazard / drives / presence / quirks | Gefahr / Antriebe / Präsenz / Eigenheiten |
| at the helm: Cut a Path / Forge Ahead / Drop Anchor | Am Ruder: Pfad schlagen / Vorpreschen / Anker werfen |
| on watch: Peace / Order / Nature, threat | Wache: Frieden / Ordnung / Natur, Bedrohung |
| Progress / Risk / Pathfinding track | Fortschritt / Risiko / Pfadfindung |
| discovery / landfall / weather-watching | Entdeckung / Landgang / Wetter beobachten |
| reputation: respect / fear / favour | Ruf: Respekt / Furcht / Gunst |
| Local Rumours / Fragments of Lore / Story Hooks / Quick NPCs / Principles | Gerüchte / Bruchstücke der Überlieferung / Aufhänger / Schnelle NSC / Grundsätze |
| Trade Goods & Cargo / Passengers / Endemic Hazards / Firefly Resources | Handel & Fracht / Passagiere / Heimische Gefahren / Hilfen fürs Glühwürmchen |
| entry types: Landmark, Feature, Festival, Horror, Wonder, Threat, Docks, Market, Leader, Station, Workshop, Junction, Fleet, Ship, Punishment | Wahrzeichen, Merkmal, Fest, Schrecken, Wunder, Bedrohung, Docks, Markt, Anführer, Station, Werkstatt, Kneipe, Flotte, Schiff, Strafe |
| damage: Blunt, Keen, Spike, Hewing, Serrated, Toxin, Acid, Blast, Volt, Frost, Flame, Salt | Stumpf, Scharf, Stich, Hieb, Säge, Gift, Säure, Explosion, Strom, Frost, Flamme, Salz |
| CQ / LR | NK (Nahkampf) / FK (Fernkampf) |

Unbekannte Begriffe: sinngemäß übersetzen, in `wildsea/js/data/glossar.js` ergänzen, damit alle Dateien gleich übersetzen.

---

## 3. Struktur des Tools (Navigation)

```
#start                       Vorbereitung (Entwurf 1) – erste Seite beim Öffnen
#nach/<bereich>/<id>         Nachschlagen: regeln | charaktere | schiffe | wildsee | leitfaden | tisch (Entwurf 8)
#reiche                      Übersicht Reiche + Szenarien (Entwurf 2) – über „In See stechen“
#reich/<id>/<tab>[/<anker>]  Reich-Leitstand: ueberblick | territorien | haefen | fraktionen | see | gefahren
#gefahren[/<id>]             Gefahren-Browser für alle Gefahren (dieselbe Ansicht wie der Reich-Tab, ohne Reich-Filter)
```

**Startseite (Entwurf 1):** Kopfband `img/hero.webp`, darunter „Vorbereitung“ mit sechs Kacheln (Kapitelbild links, Titel, Unterkapitel klein, „Kap. N · S. X“): Die Wildsee (Kap. 1), Regeln (Kap. 2–5), Charaktere (Kap. 6–7), Schiffe (Kap. 8), Leitfaden (Kap. 9), Am Tisch (Kap. 12). Darunter Chips: Charakterbogen (öffnet S. 362), Schiffsbogen (S. 363), Regelübersicht (S. 352–355 als Spielleiterschirm), Galerie. Rechts der blaue Block „In See stechen“ mit den sechs Reich-Bildern → `#reiche`; Szenarien grau mit „PDF fehlt“.

**Nachschlagen (Entwurf 8):** Tab-Leiste oben über die volle Breite: Regeln · Charaktere · Schiffe · Die Wildsee · Leitfaden · Am Tisch. Links Baum-Navigation (Kategorien → Unterkapitel), rechts Inhalt flach und offen. Alles, was im Buch ein Kasten ist (Schnellstart-Paket, Aspekte, Beispiele „… in Play“, Würfeltabellen), wird als echte Karte gebaut.

| Tab | Inhalt (Buch) | Baum links |
|---|---|---|
| Regeln | Kap. 2 Mechanik (S. 30–43), Kap. 3 Szenen (44–57), Kap. 4 Montagen (58–65), Kap. 5 Reisen (66–77) | je Kapitel → Unterkapitel aus den PDF-Lesezeichen |
| Charaktere | Kap. 6 Elemente (78–97), Kap. 7 Erstellung (98–161): 7 Blutlinien, 6 Herkünfte, 17 Posten | Charakter-Elemente · Blutlinien · Herkünfte · Posten · Erstellung |
| Schiffe | Kap. 8 (162–185): Design (Größe, Rahmen, Rumpf, Biss, Antrieb), Ausstattung (Motiv, Zusätze, Räume, Bewaffnung, Begleitboote), Unterbesatzung | Schiff erstellen · Entwurf · Ausstattung · Unterbesatzung |
| Die Wildsee | Kap. 1 (4–29) | Unterkapitel |
| Leitfaden | Kap. 9 (186–217) inkl. der fünf Schichten der See | Unterkapitel |
| Am Tisch | Kap. 12 (336–339, 346–355): Namen, alternative Wendungen, Mayfly, Glossar, Regelübersicht | Unterkapitel |

Blutlinie / Herkunft / Posten haben im Buch alle denselben Aufbau (Entwurf 8): Porträt links (hochkant, ungeschnitten), Titel + Untertitel, Text zweispaltig im **Raster** (nicht als Spaltenfluss), unten Aspekte als Karten mit Leisten-Kreisen (Länge aus „4-Track“), rechts der Kasten „Schnellstart-Paket“. Jede Blutlinie hat im Buch eine eigene Aquarell-Farbe → als dezente Akzentfarbe (Kopf-Linie) übernehmen.

**Reiche-Übersicht (Entwurf 2):** 3×2 Raster, Kartenbild = Eröffnungsbild des Reichs, Name groß im Bild, darunter der erste Satz der „Hauptelemente“ (Buchtext) und Fortschritt „Aufhänger 2 / 12“. Zuletzt geöffnetes Reich mit gelbem Rahmen. Darunter „Szenarien“ (grau, gestrichelt) für Red Right Hand, One Armed Scissor, Storm and Root.

### Reich-Leitstand (das Herzstück)
Tabs: **Überblick · Territorien · Häfen · Fraktionen · Auf See · Gefahren**, Stift-Symbol (Notizen je Reich und Tab) ganz rechts auf der Tab-Zeile – **nicht** als Kachel.

| Tab | Inhalt | Darstellung |
|---|---|---|
| Überblick (Entwurf 3) | Hauptelemente (5 Stück mit „Die Crew könnte erleben …“), Gerüchte bzw. „Bruchstücke der Überlieferung“, die Erzählschnipsel des Reichs | Kopfband mit Reichbild + Titel + erstem Satz; 3-Spalten-Raster der Elemente; Gerüchte als kleine Zettel (Klick = grau); Erzählschnipsel als Vorlesekästen unter dem Raster |
| Territorien (Entwurf 4) | alle Territorien mit Kennzahlen (die zwei witzigen Zeilen unter dem Titel) und Einträgen | Baum links (Territorium → Einträge, Klick springt), rechts Titel + Typ-Etikett + Kennzahlen-Zeile + Einleitung, Einträge im 2-Spalten-Raster mit farbigem Typ-Etikett; kursiver Spielleiter-Teil grünlich; Querverweise als blaue Chips (→ Gefahr, → Hafen) |
| Häfen | Häfen, Flotten, Leviathan-Häfen, mobile Docks | wie Territorien; Porträts aus dem Buch (z. B. Architect King S. 281) klein neben dem Anführer-Eintrag |
| Fraktionen (Entwurf 5) | je Fraktion: Heimatrevier, Motivation, Text, Grundsätze, Schnelle NSC, 6 Aufhänger, Einträge | Baum links; oben Kennzahlen; Reihe aus drei Blöcken Grundsätze · Schnelle NSC (Initialen-Kreis, Blutlinie als graues Etikett) · Aufhänger (2×3 Karten, Klick = grau); darunter die Einträge im 4er-Raster. **Neu:** drei Ruf-Schalter „Respekt · Furcht · Gunst“ neben dem Titel (S. 275), Zustand gespeichert |
| Auf See (Entwurf 6) | Reise-Tafel + „Hilfen fürs Glühwürmchen“ des Reichs | siehe unten |
| Gefahren (Entwurf 7) | Gefahren-Browser, oben vorgefiltert auf „Heimisch im Reich“ (heimische Gefahren + Leviathane/Bedrohungen aus den Texten + die Sonderseite des Reichs) | siehe unten |

Die **Sonderseite** am Ende jedes Reichs (z. B. „A Vulpine Variety“, Temple-Spine) erscheint dort, wo sie hingehört: Bestien-Sammlungen und Gefahren als Gefahren-Karten im Tab Gefahren, Regel-Ergänzungen als Karte im Überblick.

### Auf See – Reise-Tafel (Entwurf 6)
- **Leiste oben:** Ziel (Text, editierbar), Leisten Fortschritt / Risiko / Pfadfindung (Länge per Rechtsklick/langem Druck einstellbar, Kreise anklickbar), Schiffswerte als kleine Kacheln (Panzerung … Neigung, Zahl per Klick ±, gespeichert pro Spielstand, nicht pro Reich).
- **Am Ruder:** drei Karten (Pfad schlagen +1 / Vorpreschen +2 / Anker werfen), Auswahl markiert Fortschritt automatisch; Buchtext (S. 72) gekürzt **nicht** – die Karte zeigt die „Mechanisch“-Zeile des Buchs, ein Klick auf den Titel öffnet die volle Regel als Pop-up.
- **Wache:** Knopf „Wache würfeln“ → Würfel Wache (offen) + Würfel Bedrohung (verdeckt, dunkel; nur ein Hinweis-Text aus S. 73: 6 gefahrlos, 5–4 Gefahr mit Nutzen, 3–1 unmittelbare Gefahr). Ergebnis Wache: 6 Frieden, 5–4 Ordnung, 3–1 Natur → passende Spalte der Reich-Tabelle wird gelb, ein zweiter W6 markiert die Zeile. Schalter „Seekarte der Gegend“ = Bedrohung mit 2W6, höherer zählt. Knöpfe „Wetter“ (Tabelle S. 75) und „Entdeckung“ (Pop-up mit S. 74: Seekarte + Geflüster wählen).
- **Wache-Tabellen des Reichs:** drei Kästen im Buch-Stil (grüner Kopf, Zeilen abwechselnd hell) – Frieden · Ordnung · Natur.
- **Unten im Raster:** Passagiere (Klick = grau), Handel & Fracht (Etikett Export/Import), Heimische Gefahren als Chips (→ Gefahr öffnen).

### Gefahren (Entwurf 7)
- **Links:** Suche + Baum: „Heimisch in <Reich>“ (nur im Reich-Tab), Naturgewalten, Bestien, Insekten, Pflanzen, Konstrukte, Plünderer, Krankheiten, Leviathane (Kap. 10, S. 218–273).
- **Begegnungsleiste oben:** alle Gefahren der laufenden Begegnung als kleine Chips mit ihrer ersten Leiste; Klick wechselt die Karte; „+ Gefahr“ fügt die gerade gezeigte hinzu; Anzahl (×3) per Klick.
- **Gefahren-Karte:** Name + Größe-Etikett + S., Untertitel, Beschreibung (kursiver Einsatzhinweis grünlich), Raster Antriebe · Präsenz (Sicht/Klang/Geruch) · Ressourcen, darunter Aspekte und Eigenheiten. Eigenheiten sind **auswählbare Karten** (aktiv = grüner Rahmen) – das Buch sieht vor, dass man sie zur Abwandlung wählt. Bild klein rechts in der Karte (`contain`, nicht beschnitten). „Aufhänger & Begegnungen“ und „Besonderes“ (bei großen Gefahren/Leviathanen) als weitere Blöcke darunter.
- **Leisten-Zeile:** frei benennbare Leisten (Name + Länge), Kreise klicken: leer → markiert → verbrannt (rotes X) → leer. Vorschläge beim „+ Leiste“ aus S. 220 (Schadens-Leiste, Strategie-Leiste).

### Werkzeuge (Burger-Menü + Tasten, keine Kacheln)
- **Würfel** (Taste `w`): Pool 1–6 W6, Abzug (höchste Würfel streichen), Ergebnis Triumph/Konflikt/Desaster + Wendung bei Pasch (S. 41). Gleicher Dialog für Werte-Würfe.
- **Spielleiterschirm** (Taste `s`): die Regelübersicht S. 352–355 als Overlay mit Reitern.
- **Suche** (Taste `/`), **Galerie**, **Buch öffnen** (Buch-Symbol in der Kopfzeile, Auswahl wenn mehrere PDFs), **Bücher** (die heutige Bücherliste aus `sys.js`).

### Spielstand
`localStorage["ws_state_v1"]` = `{ last:"reich/foxloft/see", reiche:{ foxloft:{ hooks:{}, rumours:{}, pass:{}, ruf:{jagd:{respekt:1}}, note:{} } }, reise:{ ziel, fort:[n,max], risk:[n,max], path:[n,max], schiff:{panzer:3,…}, ruder:"pfad", wache:[4,5,3] }, begegnung:[{id:"pangoska", n:1, q:["moos"], leisten:[["Verwundung",6,"mm"],…]}] }`. Alle Zugriffe in `try/catch`.

---

## 4. Architektur und Datenformat

```
wildsea/index.html               eigene Shell (statt sysstart) – Kopfzeile, #app, Burger, Suche, Skripte
wildsea/style.css                Papier-Design: Hintergrund img/papier.webp (Buch-Textur, multiply), Teko/Merriweather,
                                 Farben: --ink #323032, --sage #95ad72, --sage2 #83946a, --sage3 #667d4e,
                                 --amber #ecac42, --teal #175d7e, --red #b5523b, --paper #fbfaf6 (alle aus dem PDF)
wildsea/js/app.js                Routing, main()/Seitenleiste (wie vaesen/js/app.js), Blöcke, Suche, Tasten
wildsea/js/ui.js                 Startseite, Reiche-Übersicht
wildsea/js/nach.js               Nachschlage-Bereiche (Kapitel, Blutlinien/Herkünfte/Posten, Schiffe)
wildsea/js/reich.js              Reich-Leitstand (Tabs Überblick, Territorien, Häfen, Fraktionen)
wildsea/js/see.js                Reise-Tafel, Würfel
wildsea/js/gefahr.js             Gefahren-Browser, Begegnungsleiste, Leisten
wildsea/js/track.js              Leisten-Baustein (Kreise: leer/markiert/verbrannt) – überall derselbe
wildsea/js/data/buecher.js       Bücher (aus sys.js übernehmen; sys.js danach löschen)
wildsea/js/data/glossar.js
wildsea/js/data/k01-wildsee.js, k02-mechanik.js, k03-szenen.js, k04-montagen.js, k05-reisen.js,
               k06-elemente.js, k07-erstellung.js, blutlinien.js, herkuenfte.js, posten-1.js (A–H), posten-2.js (M–W),
               k08-schiffe.js, k09-leitfaden.js, k12-tisch.js
wildsea/js/data/gefahren-natur.js, -bestien.js, -insekten.js, -pflanzen.js, -konstrukte.js, -pluenderer.js,
               -krankheiten.js, -leviathane-1.js, -leviathane-2.js
wildsea/js/data/reich-foxloft.js, reich-icterine.js, reich-interregnum.js, reich-ambered.js, reich-kremich.js, reich-prophet.js
wildsea/img/papier.webp, kapitel/, reich/, blut/, herkunft/, posten/, schiff/, gefahr/, figur/
```
Vorbild für Shell, Seitenleiste, Blöcke, Galerie, Bookviewer: `vaesen/` (index.html, js/app.js, style.css). Bookviewer-Init wie in `shared/sysstart.js` (alle Bücher aus `buecher.js`, `defaultBook:"ws_core"`, kein Seiten-Offset).

### Text-Blöcke (wie Vaesen)
`{t:"p",x}`, `{t:"h",x}`, `{t:"ul",x:[…]}`, `{t:"box",h,x|b}`, `{t:"tbl",head,rows}`, `{t:"vl",x}` (Vorlesekasten/Erzählschnipsel), `{t:"bsp",h,b}` (Beispiel-Dialog „… in Play“ als Karte mit Sprechernamen), `{t:"d6",h,rows:[[6,"…"],…]}` (Würfeltabelle im Buch-Stil, anklickbar).

### Reich
```js
window.WS_REICH = window.WS_REICH || {};
WS_REICH.foxloft = {
  t:"The Foxloft", p:276, bild:"reich/foxloft", kurz:"Ein Reich aus Hybrid-Eichen, …",   // erster Satz der Hauptelemente
  elemente:[ {t:"Blätter in Grün und Gold", p:277, x:"…", erleben:["…","…","…"]}, … ],  // 5
  geruechte:{ t:"Gerüchte", p:279, intro:"", x:["…", …] },                              // Icterine: „Bruchstücke der Überlieferung“
  erzaehl:[ {p:277, x:"Partov had always assumed … (übersetzt)"} ],
  territorien:[ {id:"ribfields", t:"Ribfields", p:278, facts:[["Anzahl verschiedener Überreste","Mit jedem Beben mehr"],["Knochenfarben","…"]],
                 x:"…", eintraege:[ {t:"Incisor’s Run", typ:"Fest", x:"…", i:"…kursiver Teil…"},
                                    {t:"The Howling Wax", typ:"Leviathan", x:"…", i:"…", link:{gefahr:"howling-wax"}} ]} ],
  haefen:[ {id:"tall-mauzer", t:"Tall Mauzer", typ:"Hafen", p:280, facts:[…], x:"…", eintraege:[…], img:"figur/…"} ],
  fraktionen:[ {id:"jagd", t:"Die Jagdfamilien", p:282, facts:[["Heimatrevier","Spearing Fens"],["Motivation","…"]], x:"…",
                grundsaetze:{intro:"", x:["…","…","…"]}, nsc:[{n:"Cressa Thorn", blut:"Ardent", x:"…"}], haken:["…" ×6],
                eintraege:[{t:"Der Thron der Jäger", typ:"Wunder", x:"…", i:"…"}]} ],
  see:{ p:284, handel:[{t:"Baggerausrüstung", dir:"export", x:"…"}], wache:{frieden:[6], ordnung:[6], natur:[6]},   // Index 0 = Ergebnis 6
        passagiere:["…" ×6], gefahren:[{t:"…", x:"…", link:{gefahr:"…"}}] },
  extra:[ {t:"Eine vulpine Vielfalt", p:285, b:[Blöcke]} ],      // Sonderseite; Gefahren daraus zusätzlich in WS_GEFAHR mit reich:"foxloft"
};
```
Jedes Reich hat dieselbe Buchstruktur (geprüft): Eröffnungsbild, Hauptelemente, Territorien, Häfen (Port/Fleet/Leviathan Port/Mobile Dock), 2 Fraktionen (Grundsätze, Schnelle NSC, Aufhänger), Gerüchte/Lore, Firefly Resources, Sonderseite. Was abweicht (anderer Titel, dritte Kennzahl, zusätzlicher Kasten), wird **nicht** weggelassen, sondern als zusätzlicher Block in `extra` oder im passenden Eintrag aufgenommen.

### Gefahr
```js
window.WS_GEFAHR = window.WS_GEFAHR || [];
WS_GEFAHR.push({ id:"pangoska", t:"Pangoska", kat:"bestien", p:227, groesse:"Groß", unter:"Bastionen aus Pflanze und Panzer",
  x:"…", i:"Setze eine Pangoska ein, wenn …",
  antriebe:[["Unauffällig bleiben","…"],…], praesenz:{sicht:"…", klang:"…", geruch:"…"},
  ressourcen:{proben:["Abgeworfene Platte","Bartmoos"], gefluester:[…], bergegut:[], seekarten:[]},
  aspekte:[["Stille Kraft","…"],…], eigenheiten:[{id:"moos", t:"Moosmantel", x:"…"},…],
  haken:[], extra:[Blöcke], img:"gefahr/pangoska", reich:null });
```
Naturgewalten (Sporenwolken, Blütenfluten …) haben ein abweichendes Format (Präsenz, Ressourcen, Aspekte, Eigenheiten, aber teils keine Antriebe) – leere Felder einfach nicht anzeigen. Leviathane (S. 260–273) haben lange Sonderabschnitte → `extra`.

---

## 5. Arbeitsschritte (jeweils eine Sitzung: Screenshots, Commit, Push)

**Priorität: Abenteuer (Reiche) zuerst**, Nachschlagen danach.

0. **Gerüst, Design, Bilder.** `extract_images.py` laufen lassen (nach `/tmp`), jedes Bild ansehen, nach Abschnitt 6 benennen und nach `wildsea/img/…` legen (max. 1600 px, webp 82). Papier-Textur → `img/papier.webp`. Shell (`index.html`, `style.css`, `app.js`, `track.js`), Startseite (Entwurf 1), Reiche-Übersicht (Entwurf 2) mit allen sechs Reichen (Kurzsatz aus den Hauptelementen), Bücher/Bookviewer, Burger, Tasten, SW. `sysstart` für Wildsea nicht mehr benutzen.
1. **Reich-Leitstand + The Foxloft komplett** (S. 276–285): `reich-foxloft.js`, `reich.js`, `see.js` (Entwürfe 3–6). Gefahren-Links dürfen noch ins Leere zeigen (grauer Chip). Das ist die Schablone für alle Reiche.
2. **Gefahren I:** `gefahr.js` (Entwurf 7) + Naturgewalten, Bestien, Insekten, Pflanzen (S. 218–249). Gefahren der Foxloft-Sonderseite einbauen und verlinken.
3. **Gefahren II:** Konstrukte, Plünderer, Krankheiten, Leviathane (S. 250–273).
4. **The Icterine + Interregnum** (S. 286–305).
5. **Ambered Irons + Kremich Surge + Prophet’s Fall** (S. 306–335).
6. **Regeln** (Kap. 2–5) + Würfel + Spielleiterschirm (Regelübersicht S. 352–355).
7. **Charaktere I:** Kap. 6, Kap. 7 Einleitung, 7 Blutlinien, 6 Herkünfte (Entwurf 8).
8. **Charaktere II:** 17 Posten.
9. **Schiffe** (Kap. 8) + **Die Wildsee** (Kap. 1).
10. **Leitfaden** (Kap. 9) + **Am Tisch** (Kap. 12 ohne Dragonfly) + Suche über alles + Galerie + Gesamtcheck (Handy 1280, keine JS-Fehler, keine Lücken) → diesen Plan als „erledigt“ markieren.

Für jede Sitzung bittet Sonnet Moritz, das Corebook-PDF hochzuladen (für Bilder und Seitenbilder). Der Text liegt schon im Repo.

---

## 6. Bilder

Inventar: `plan/wildsea/bilder-inventar.tsv` (544 Bilder, Dateiname `S<seite>_<nr>_<b>x<h>`). Viele 1506×1281-Bilder mit Maske sind **Seitendekoration** (Aquarell-Ränder, Rankenwerk) – nicht als Illustration verwenden. Echte Illustrationen erkennt man nach dem Freistellen an Figuren/Szenen.

| Bereich | Quelle | Ziel |
|---|---|---|
| Papier-Textur | xref 2544 (3153×1430, jpx, grau) | `img/papier.webp` (1800 px, Graustufen) |
| Kapitel-Eröffnungen | größtes Bild außer der Textur auf S. 30, 44, 58, 66, 78, 98, 162, 186, 218, 336 (S. 4: Cover-Bild S. 1 nehmen) | `img/kapitel/k02_mechanik` … |
| Reich-Eröffnungen | S. 276, 286, 296, 306, 316, 326 (je 1 Vollbild, ohne Titeltext) | `img/reich/foxloft` … `prophet` |
| Blutlinien / Herkünfte / Posten | Figur auf der ersten Doppelseite jedes Eintrags (S. 102–161), z. B. Ardent = S. 102 xref 736 | `img/blut/ardent`, `img/herkunft/amberclad`, `img/posten/alchemist` |
| Gefahren | Figur auf der Gefahren-Seite (z. B. Pangoska S. 227) | `img/gefahr/pangoska` |
| Figuren in Reichen | z. B. Architect King S. 281, Pocketfox S. 285 | `img/figur/foxloft_architect_king` |
| Schiffe | Kap. 8 (z. B. S. 167) | `img/schiff/…` |

Regeln: Doppelseiten (über zwei PDF-Seiten laufende Bilder) als **ein** Bild ausgeben; sofort sprechend benennen; Freistellung lieber rechteckig (unten gerade), nur Figuren mit Maske; nie ein Bild einer falschen Figur/Gefahr zuordnen – im Zweifel weglassen. Alle Bilder auch in die Galerie (`wildsea/js/data/galerie.js`, Gruppen nach Bereich).

---

## 7. Startauftrag für jede Sonnet-Sitzung (zum Kopieren)

> Lies `plan/WILDSEA_PLAN.md` im Repo einmoritz-spec/Spielleitertool und setze **Schritt N** um. Halte dich an Abschnitt 2 (Grundregeln, Namensregel, Glossar) und baue genau nach den Entwürfen in `plan/wildsea/mockups/`. Der englische Buchtext liegt in `quellen/wildsea/text/`, das PDF hänge ich an. Übersetze vollständig ins Deutsche, nichts weglassen, nichts erfinden. Prüfe jede Ansicht per Screenshot (1440×900 und 1280×800), behebe Lücken/Überlauf, schick mir die Screenshots, committe ohne Co-Authored-By/Claude-Session-Zeilen und pushe.
