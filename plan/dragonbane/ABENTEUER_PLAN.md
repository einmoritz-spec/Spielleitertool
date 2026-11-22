# Dragonbane – Abenteuer einbauen (Bauplan)

Geplant mit Opus, gebaut von Sonnet-Agenten. Grundlage: `plan/DRAGONBANE_PLAN.md` (Glossar §2.3, Design §3, Abenteuer-Tafel §5.3).
Drei neue Bücher (EN, liegen in `/mnt/user-data/uploads/`, nur lesen):

| Buch | Datei | Seiten | Buchseite = PDF − | Bookviewer-Id |
|---|---|---|---|---|
| Abenteuerband *Das Geheimnis des Drachenkaisers* (Grundbox) | `2d0cfae3-Dragonbane___Abenteuer___Adventures_EN.pdf` | 128 (Inhalt bis PDF 117; 118–128 = Kopie Regelbuch Kap. 8 → weglassen) | 1 | `db_adv` |
| *Der versinkende Turm* | `7290e7e7-Dragonbane___Abenteuer___The_Sinking_Tower_EN.pdf` | 60 (PDF 1–29 Regelauszug → weglassen; Abenteuer PDF 30–42, vorgefertigte SC 43–56, Spielerkarten 57–60) | 2 | `db_st` |
| *Pfad des Ruhms* (Kampagne, 3 Teile) | `Dragonbane___Abenteuer___Path_to_Glory__EN_.pdf` | 164 (Index 160–162 weglassen) | 4 | `db_pg` |

Seitenangaben im Tool immer als **Buchseite** und **„S. n“**; der Link öffnet das richtige Buch (`pgl(p)` nutzt `window.__bk`).

---

## 1. Regeln für alle Agenten (Moritz' Standing-Regeln – verbindlich)

1. **Alles auf Deutsch**, nur der Text aus dem PDF – **nichts erfinden** (keine eigenen Tipps, Zusammenfassungen, Kurzüberblicke, Erklärtexte, Hinweise wie „zum Vergrößern klicken“). Solo-, Orakel- und Koop-Regeln weglassen.
2. Glossar `plan/DRAGONBANE_PLAN.md` §2.3 ist **bindend** (STÄ/KON/GEW/INT/WIL/CHA, Erschöpft/Kränkelnd/Benommen/Wütend/Verängstigt/Verzagt, Vorteil/Nachteil, Wurf strapazieren, Runde/Viertel/Tagesabschnitt, Verschnaufen/Kurze Rast/Lange Rast, Monsterangriff, Grimmigkeit, Furchtangriff, Kraftstufe, Wirkstärke (Gift), Virulenz (Krankheit), Fertigkeiten in `§…§`: Akrobatik, Wahrnehmung, Feilschen, Tierkunde, Täuschen, Wildniskunde, Handwerk, Ausweichen, Heilkunde, Jagen & Fischen, Fremdsprachen, Mythen & Legenden, Darbietung, Überzeugen, Reiten, Seefahrt, Fingerfertigkeit, Heimlichkeit, Entdecken, Schwimmen; Waffen: Äxte, Bögen, Raufen, Armbrüste, Hämmer, Messer, Schleudern, Speere, Stäbe, Schwerter). Schadensarten: hauend, stechend, wuchtig. Würfel: W4, W6, W8, W10, W12, W20, 2W6 …
3. Namen: Tabelle §6 unten. Personennamen bleiben; beschreibende Namen werden übersetzt. **Neue Namen**, die du festlegst, trägst du in `plan/dragonbane/namen-<paket>.md` ein (EN → DE, S.).
4. **Seiten immer „S. n“** (Buchseite), unscheinbar hinter dem Namen/Titel.
5. **Vorlesetext** (kursiv im Buch) in `vl` → wird als Vorlesekasten ohne Beschriftung gezeigt.
6. Alles, was im Buch ein **Kasten/eine Karte** ist (NSC-/Monster-Werte, Steinkästen, Seitenkästen, Tabellen), wird eine echte Karte/ein Kasten/eine Tabelle – kein Fließtext.
7. **Bilder** nur einbauen, wenn sie im Buch direkt zu dieser Figur/diesem Ort gehören; nie falsch zuordnen. Möglichst ungeschnitten (Hochformat bleibt hochkant), weißer Rand weg (`trim`), auf Pergament mit `multiply`. Doppelseiten-Bilder als **ein** Bild (`spread`). Gegner-/NSC-Bilder klein in ihre Karte, nicht groß in den Text. Dateinamen sprechend: `img/abenteuer/<abenteuer-id>-<was>.webp` (z. B. `bothild-karte-mine.webp`, `bothild-maladuk.webp`, `bothild-titel.webp`).
8. **Karten (Pläne)** ungeschnitten; die Raumnummern sind im PDF Vektortext → Pin-Positionen in % aus `page.get_text("words")` relativ zum Bildrechteck (`page.get_image_rects(xref)`) berechnen, nicht schätzen. Spielerkarten (ohne Nummern/Geheimnisse) als Handout.
9. **Kein Würfel-Werkzeug.** Anklickbare W-Tabellen (Zeile markieren/grau) ja.
10. Layout selbst per Screenshot prüfen (1440×900 und 1280×800, Seitenleiste ein- und ausgeklappt wo vorhanden): keine Lücken, keine leeren Spalten, kein Text in einer endlos langen Spalte, keine schiefen Bilder. Offensichtliche Fehler selbst beheben, bevor du fertig meldest.
11. Daten **in mehrere Dateien** (je Abenteuer eine Datei, große Abenteuer `-a/-b`); keine Riesendatei.
12. Git: **nicht committen** (macht der Hauptchat). Keine „Co-Authored-By“/„Claude-Session“-Zeilen, nirgends.
13. Phase-B-Agenten ändern **nur ihre eigenen Dateien** (Datendateien, Bilder, Namensliste). `index.html`, `sw.js`, `style.css`, `js/*.js` fasst nur Phase A an. Fehlt der Tafel etwas Allgemeines, beschreibe es in deiner Abschlussmeldung statt es selbst einzubauen (Ausnahme: winzige, eindeutig fehlerhafte Zeile – dann nennen).

---

## 2. Datenmodell (Phase A baut es, Phase B füllt es)

```js
/* js/data/ab-<id>.js */
DB_AB["<id>"] = {
  id, t:"Bothilds Ader", band:"dk", buch:"db_adv", p:39,          // p = erste Buchseite
  img:"abenteuer/bothild-titel",                                   // Titelbild (Übersicht + Lage), optional
  kurz:"6 Orte",                                                   // optional, sonst automatisch „n Orte“
  vl:"…",                                                          // Eröffnungs-Vorlesetext (optional)
  lage:[ …Blöcke… ],                                               // „Die Lage“ u. ä. (Blockformat wie Nachschlagen, s. u.)
  bereiche:[                                                       // je Karte/Teilort ein Tab
    {id:"tor", t:"Torbereich", karte:{img:"abenteuer/bothild-karte-tor", p:42}, einl:"…" (optional),
     orte:[ {n:"1", t:"Die Tore von Bothild", p:40, pin:[15.2,31.5], wesen:["bothild-geist","wasser"],
             vl:"…", st:[ {k:"Das Tor", x:"…"}, {k:"Falle", r:1, x:"…"} ], b:[ …Blöcke… ] (optional), nach:"…" } ]}
  ],
  reisen:{ … } (optional, s. Reisen-Tab),
  figuren:{ "<fid>": {t:"Maladûk", p:46, img:"abenteuer/bothild-maladuk", typ:"nsc"|"monster"|"sc",
             werte:[["Bewegung","10"],["Schadensbonus STÄ","+W6"],["TP","24"],["WP","15"]], tp:24,
             zl:[["Rüstung","Kettenhemd (4)"],["Fertigkeiten","…"],["Talente","…"],["Waffen","…"]],
             text:["…"], angriffe:{h:"Monsterangriffe", w:"W6", rows:["**Name!** …", …]}, be:"ork" /* Bestiarium-Link */ } },
  kaesten:{ "<kid>": {k:"Das Wasser in der Mine", p:39, b:[ …Blöcke… ]} },  // Steinkästen/Seitenkästen
  tabellen:[ {id:"ereig", h:"Zufallsereignisse", p:39, einl:"…", cols:["W12","Ereignis"], rows:[["1–6","**Nichts passiert.**"],…]} ],
  handouts:[ {t:"Spielerkarte", img:"abenteuer/turm-spielerkarte", p:55} ],
  schluss:[ …Blöcke… ] (optional, Abschluss/Belohnung)
};
```
- **Blöcke** = dasselbe Format wie `DB_NACH` (Nachschlagen): String (md: `**fett**`, `*kursiv*`, `§Fertigkeit§`), `{h,p}`, `{ul}`, `{ol}`, `{tbl:{id?,head,rows}}`, `{karte:{h,p,b}}`, `{stein:{h,b}}`, `{zit}`. Gerendert mit `nabs()` aus `js/nach.js`.
- `wesen` einer Ortsangabe verweist auf `figuren`- **oder** `kaesten`-Ids → rechts offen, alle übrigen zugeklappt darunter.
- Figuren-Ids mit Abenteuer-Präfix (`bothild-maladuk`), damit Spielstände (TP) eindeutig sind.
- Standardmonster des Regelbuchs **nicht** neu abtippen: `figuren:{"bothild-goblins":{t:"Goblins", be:"goblin", …nur die abweichenden Angaben aus dem Abenteuer}}`; Karte zeigt „Bestiarium S. 90“-Link.

**Bände** (`js/data/abenteuer-baende.js`, Phase A):
```js
DB_BAENDE = [
 {id:"rb", t:"Die Burg des Raubritters", buch:"db_rb", img:"abenteuer/burg", ab:["burg"]},
 {id:"dk", t:"Das Geheimnis des Drachenkaisers", buch:"db_adv", img:"abenteuer/dk-titel",
  einf:[…Blöcke…] /* Einführung = Vorbereitungsseite */, ab:["dk-eroeffnung","aussenposten","nebeltal-reisen","ridderhoehe","bothild","purpurflamme","seufzer","orakel","trollspitze","totaugen","malus","vortag","wegesende","nebelinsel"]},
 {id:"st", t:"Der versinkende Turm", buch:"db_st", img:"abenteuer/turm-titel", ab:["turm"]},
 {id:"pg", t:"Pfad des Ruhms", buch:"db_pg", img:"abenteuer/pg-titel", einf:[…], ab:["pg-wald","pg-tore","pg-herz"]}
];
```

---

## 3. Ansichten (Phase A)

**`#abenteuer` – Übersicht:** oben schmal „Weiter · <Abenteuer · Ort>“ (Stein-Knopf, aus `ST.last`), darunter die **Bände als Hover-Bildstreifen** wie bei Otherscape (Bild unter der Maus wächst animiert, die anderen werden schmaler; Bilder groß, im Knotenrahmen-Stil, Name im Flügel-Banner, Quelle in Jade-Versalien). Klick → Band. Darunter Zeile „Unterwegs“ (Reisen & Missgeschicke `#n/ab/missgeschicke`, Schätze `#n/ta/schaetze`, NSC erschaffen `#n/ab/nsc`).

**`#k/<band>` – Band = Vorbereitungsseite** (Bände mit nur einem Abenteuer – rb, st – springen direkt zur Tafel `lage`):
- Tabs: **Einführung** · **Abenteuer**. Einführung: Titelbild + Blöcke im Raster (wie Nachschlagen, Seitenleiste nur wenn mehrere Abschnitte; einklappbar, sticky). Abenteuer: Hover-Bildstreifen bzw. bei >6 Einträgen Kachelraster (Bild groß, Name, S., „n Orte“), laufendes markiert.

**`#a/<id>/<tab>[/<ort>]` – Tafel (generisch):**
- Tabs: **Lage** · je Bereich ein Tab (Name des Bereichs) · **Reisen** (nur wenn `reisen`) · **Figuren** · **Tabellen**; rechts Zeit + Stift (wie bisher). Tab-Beschriftung nur der Name. Zu viele Tabs → Leiste scrollt waagerecht, kein Umbruch.
- **Lage:** Titelbild im Knotenrahmen + `vl` + `lage`-Blöcke im Raster (`nabs`, Masonry), keine leere Spalte.
- **Bereich:** wie bisher dreispaltig: links Plan (wenn vorhanden) mit Jade-Plaketten + Ortsliste; Mitte Ort (Titel, S., Vorlesetext, ✦-Liste, rote ✦ klickbar = erledigt, `b`-Blöcke, `nach`); rechts Wesen/Kästen des Orts offen, die übrigen des Abenteuers zugeklappt (nur bei ≤ 12, sonst nur die des Bereichs). Bereich ohne Plan: links nur Ortsliste.
- **Reisen:** Blöcke + Begegnungstabellen (anklickbar) + Begegnungs-Figuren.
- **Figuren:** alle Karten im Raster (zugeklappt, Klick öffnet; Figuren mit `be` zeigen Bestiarium-Link), Kästen darunter.
- **Tabellen:** alle `tabellen` (anklickbar) + Schätze (Regelbuch) + Handouts als Bilder (Klick = Zoom).
- Spielstand je Abenteuer-Id (aktiver Bereich/Ort, erledigt, TP, Markierungen, Zeit). `ST.last` für „Weiter“.
- `window.__bk = A.buch` beim Rendern; Nachschlagen setzt `db_rb` zurück.

---

## 4. Phase A – Agent „Motor“ (zuerst, allein)

1. `js/data/buecher.js`: Gruppe „Abenteuer“ mit `db_adv` (off 1), `db_st` (off 2), `db_pg` (off 4) – Namen: „Abenteuerband“, „Der versinkende Turm“, „Pfad des Ruhms“. `pgl()` (app.js) nutzt `window.__bk || "db_rb"`.
2. Textauszug: `plan/dragonbane/extract_text.py` verallgemeinern (Buch-Offset + Kapitelliste als Argument/Konfiguration; gleiche Markierungen `##`, `###`, `####`, `[K]`, `[P]`, `>`, `- [!]`). Ergebnis je Phase-B-Paket: `quellen/dragonbane/text/abenteuer/<paket>.md` (Seitenbereiche aus §5). Bild-Inventar je Buch `plan/dragonbane/bilder-<buch>.tsv` (PDF-Seite, Buchseite, xref, Pixel, Lage). `extract_images.py` braucht einen Offset-Parameter (bisher fest 4).
3. `js/abenteuer.js` generisch nach §2/§3 umbauen; Die Burg in das neue Modell übertragen (`js/data/ab-burg.js`, alte Datei ersetzen) – **muss danach genauso aussehen und funktionieren** (Screenshot vorher/nachher vergleichen).
4. `js/data/abenteuer-baende.js` (§2) + **Platzhalter-Dateien** für alle Phase-B-Abenteuer (`js/data/ab-<id>.js` bzw. `-a/-b`), je `DB_AB[id] = {id, t, band, buch, p, stub:1}`; Platzhalter erscheinen in der Übersicht gedämpft. Alle Dateien in `index.html` und `sw.js` eintragen (VERSION erhöhen), damit Phase B nichts daran ändern muss.
5. Für Bände `dk`/`pg` die Einführungstexte bleiben leer (füllen B1a bzw. B7).
6. Titelbilder der Bände extrahieren (dk: Umschlag/Frontispiz des Abenteuerbands; st: Umschlag; pg: Umschlag) nach `img/abenteuer/<band>-titel.webp`.
7. CSS in `style.css` (Bildstreifen, Band-Seite, Tab-Leiste scrollbar). Screenshots aller Ansichten (1440×900, 1280×800). Melde: Liste der Platzhalter-Dateien, Block-/Feld-Besonderheiten.

## 5. Phase B – Pakete (parallel, je ein Agent)

| Paket | Inhalt (EN) | PDF-Seiten | Abenteuer-Id(s) / Dateien |
|---|---|---|---|
| B1a | Abenteuerband: Einleitung (Nebeltal, Geschichte, Lage, Ablauf) → `DB_BAENDE.dk.einf`; Eröffnungsszene; Reisen (5 Begegnungsregionen) | 4–14, 29–33 | `abenteuer-baende-dk.js` (setzt `einf`), `ab-dk-eroeffnung.js`, `ab-nebeltal-reisen.js` |
| B1b | Außenposten (Dorf, Orte, Bewohner) | 15–28 | `ab-aussenposten-a.js`, `-b.js` |
| B2 | Ridderhöhe · Bothilds Ader · Tempel der Purpurflamme | 34–55 | `ab-ridderhoehe.js`, `ab-bothild.js`, `ab-purpurflamme.js` |
| B3 | Turm der Seufzer · Orakelhöhle · Trollspitze | 56–74 | `ab-seufzer.js`, `ab-orakel.js`, `ab-trollspitze.js` |
| B4 | Totaugenhöhle · Fort Malus · Das Dorf des Vortags | 75–95 | `ab-totaugen.js`, `ab-malus.js`, `ab-vortag.js` |
| B5 | Gasthaus Wegesende · Die Nebelinsel (Finale) | 96–117 | `ab-wegesende.js`, `ab-nebelinsel-a.js`, `-b.js` |
| B6 | Der versinkende Turm (Abenteuer, Hinweise fürs Con-Spiel, Wertung) + 7 vorgefertigte SC (`typ:"sc"`, Figuren) + Spielerkarten (Handouts) | 30–60 | `ab-turm.js`, `ab-turm-sc.js` |
| B7 | Pfad des Ruhms: Einleitung (Vorgeschichte, Überblick, drei Mächte) → `DB_BAENDE.pg.einf`; Teil 1 *Der tote Wald* | 8–57 | `abenteuer-baende-pg.js`, `ab-pg-wald-a.js`, `-b.js` |
| B8 | Teil 2 *Tore der Macht* | 58–96 | `ab-pg-tore-a.js`, `-b.js` |
| B9 | Teil 3 *Herz der Finsternis* + Handouts (PDF 158–159) | 97–159 | `ab-pg-herz-a.js`, `-b.js`, `-c.js` |

Welle 1: B1a, B1b, B2, B3, B4, B5, B6. Welle 2: B7, B8, B9 (danach Abgleich der Namenslisten).
Pakete mit `-a/-b`: Datei `-a` legt `DB_AB[id]` an, `-b/-c` ergänzen (`DB_AB[id].bereiche.push(…)`, `Object.assign(DB_AB[id].figuren, {…})`).

**Arbeitsweise je Agent:** Text aus `quellen/dragonbane/text/abenteuer/<paket>.md` lesen und **jede Seite am Seitenbild prüfen** (`pdftoppm -r 70 -f n -l n -png <pdf> /tmp/x` → Read). Übersetzen, Datei schreiben, Bilder ziehen (`python3 -I plan/dragonbane/extract_images.py <pdf> dragonbane/img/abenteuer <befehl>` mit Offset), Pins berechnen, Screenshots aller Tabs (`/tmp/shoot.py` bzw. Playwright mit `/usr/bin/google-chrome`, Seite `file:///home/claude/spielleitertool/dragonbane/index.html#a/<id>/lage` usw.) prüfen und Fehler beheben. Abschlussmeldung: Dateien, Bilder, offene Punkte, neu festgelegte Namen.

## 6. Namen (Vorgabe, bindend)

| EN | DE |
|---|---|
| The Secret of the Dragon Emperor / Dragon Emperor | Das Geheimnis des Drachenkaisers / Drachenkaiser |
| Misty Vale | Nebeltal |
| Outskirt | Außenposten |
| Riddermound | Ridderhöhe |
| Deepfall Breach | Tiefsturzbresche |
| Bothild's Lode | Bothilds Ader |
| Temple of the Purple Flame | Tempel der Purpurflamme |
| Tower of Sighs | Turm der Seufzer |
| Oracle Cave | Orakelhöhle |
| Troll's Spire | Trollspitze |
| Dead Eyes Cave | Totaugenhöhle |
| Fort Malus | Fort Malus |
| The Village of the Day Before | Das Dorf des Vortags |
| Road's End Inn | Gasthaus Wegesende |
| The Isle of Mist | Die Nebelinsel |
| Magna Woods / Iron Forest / Haunted Marshes / Kummer River | Magnawald / Eisenwald / Spuksümpfe / Kummer (Fluss) |
| Random Encounters Around Outskirt … at the Foot of the Mountains | Zufallsbegegnungen um Außenposten / im Magnawald / im Eisenwald / in den Spuksümpfen / am Fuß der Berge |
| The Sinking Tower | Der versinkende Turm |
| Path to Glory | Pfad des Ruhms |
| The Dead Forest / Gates of Power / Heart of Darkness | Der tote Wald / Tore der Macht / Herz der Finsternis |
| The Hungry Hobgoblin | Zum hungrigen Hobgoblin |
| Temple of Winds / Elusia's House / The Old Barrow / Stormhand's Lair / The Chasm of Caves / Deepmire | Tempel der Winde / Elusias Haus / Das alte Hügelgrab / Sturmhands Hort / Die Höhlenschlucht / Tiefmoor |
| The Dwarven Realm / The Eastern Lands / Stonemouth / The Hills of Kalin / The Demon Tower / Lightbringers | Das Zwergenreich / Die Ostlande / Steinmund / Die Hügel von Kalin / Der Dämonenturm / Lichtbringer |
| Council of the Firstborn / Keepers of the Immaculate Flame | Rat der Erstgeborenen / Hüter der Makellosen Flamme |
| Stormhand | Sturmhand |
| Otag, Is-Hel, Immer-Drak, Sathmog, Dakoth, Maladûk … (Eigennamen) | bleiben |
| Handout | Handout |
| Pre-generated characters | Vorgefertigte Charaktere |
| Adventure Opening / The Situation / Locations / Conclusion | Einstieg / Die Lage / Orte / Abschluss |
| Random Events (per stretch) | Zufallsereignisse |

## 7. Abschluss (Hauptchat)
Namenslisten abgleichen, Bild-Dateien in `sw.js`, VERSION, Gesamt-Screenshots, Commit + Push, Screenshots an Moritz.
