# THINGS FROM THE FLOOD – Bauplan (Schritt 9 im TftL-Plan)

Stand: 22. Nov. 2026 · Planer: Opus · Umsetzung: mehrere Sonnet-Agenten, je ein Arbeitspaket (Abschnitt 4).
Gilt zusätzlich zu `plan/TFTL_PLAN.md` (Grundregeln Abschnitt 2, Design Abschnitt 3) und den Briefen `plan/TFTL_MYSTERIEN_BRIEF.md`, `TFTL_BILDER_BRIEF.md`, `TFTL_PINS_BRIEF.md`, `TFTL_PRUEF_BRIEF.md`. **Wo dieser Plan etwas anderes sagt, gilt dieser Plan** (v. a. Ablage `window.FLOOD…`, Bildordner `tftl/img/flood/`, Begriffe „Teens“).

Entwürfe (1440×900, verbindlich): `plan/tftl/mockups/f1-start.jpg` (Vorbereitung), `f2-leitstand.jpg` (Mysterium-Leitstand mit neuem Ablauf-Graphen), `f3-teens.jpg` (Teens-Seite), dazu weiterhin `m7-flood-dropdown.jpg` (Dropdown). Quellen der Entwürfe: `plan/tftl/mockups/src/f*.html`, `flood.css`, `_ftop.html`, Bilder `src/img/flood/`; gerendert mit `/home/claude/shot_fmock.py f1-start=f1-start`.

---

## 0. Kritische Entscheidungen (selbst getroffen, Moritz nicht erreichbar)

1. **Kein eigener App-Ordner.** Flood läuft in `tftl/` unter `#flood/…` (Router kennt den Bereich schon). Alle Flood-Daten liegen unter `window.FLOOD` (`tftl/js/data/flood/…`), alle Flood-Bilder in `tftl/img/flood/` (Bildnamen im Datenfeld also `"flood/m-flesh"`). Keine Kopie der Renderer: `start.js`, `mysterien.js`, `leitstand.js`, `nach.js`, `karte.js`, `kids.js` lesen künftig einen **Kontext `window.TCTX`**, den `app.js` je Bereich setzt (Abschnitt 3.2). TftL verhält sich danach exakt wie vorher (Abnahme per Vorher/Nachher-Screenshot).
2. **Vier Mysterien statt drei.** Das Buch hat ein nicht in den PDF-Lesezeichen verzeichnetes **Kap. 12 „Ash to Eternity“ (S. 186–209)** – das Finale der Kampagne „Die Propheten von Pandora“. Es kommt dazu: **Asche zur Ewigkeit**. Kampagne = Hintergrund (Kap. 8) + Mysterien 1–4 (Fähnchen 1–4).
3. **Kopfzeile nur mit dem Flood-Logo** (wie Entwurf 7, Standing-Regel „nur Systemname“): Das heutige Doppel-Logo „TftL | Flood“ entfällt.
4. **Ablauf-Diagramm als echter Graph.** Die Flood-Diagramme sind waagerechte Ketten mit Verzweigungen, Pfeilen in beide Richtungen und Szenen-Knoten (Wendung, NSC-Szenen). Neues Datenfeld `M.ablauf` + neuer Renderer in `leitstand.js` (Entwurf f2), rechtwinklig, in echten Pixeln. Ohne `M.ablauf` bleibt der alte TftL-Ablauf unverändert.
5. **Leitstand-Aufbau bei Flood (Entwurf f2):** obere Reihe Mystery-Karte (404 px) + Ablauf (Rest); Countdown wandert als Karteikarte in die rechte Kartenspalte (über Ärger/Hinweise). Passt der Graph nicht neben die Karte (Spaltenabstand < 150 px, z. B. bei „Asche zur Ewigkeit“ mit 7 Spalten), steht er als eigene Zeile über die volle Breite unter Karte + Countdown (wie heute bei TftL mit > 3 Orten).
6. **Phase 3 heißt „Ermittlung“** (Buch: „Phase 3 – Investigation“), Showdown heißt **„Konfrontation“**. Daten-IDs bleiben `loesung`/`showdown`, nur die Namen ändern sich.
7. **NSC-Porträts** (S/W-Zeichnungen im Buch direkt am NSC-Kasten) kommen **klein in die NSC-Karte** (neues Feld `bild` im NSC-Objekt; Standing-Regel „Bilder von Gegnern klein in deren Karte“). Kein großes Bild im Text.
8. **Kein Spielleiterschirm bei Flood** – es gibt keine Flood-Spielhilfe; erfinden verboten. Chips: Charakterbogen · Würfel · Loop-Karte · Galerie.
9. **Spielstand getrennt:** `flood_loop`, `flood_last`, `flood_done`, `flood_st_<id>`, `flood_teens_v1`. „Unser Loop“ bei Flood nur **Mälarinseln · Boulder City** (Buch kennt nur diese zwei).
10. **Mysterien-Übersicht:** Block 1 „Die Propheten von Pandora“ (Kampagne, 5 Karten), Block 2 „Mystery-Landschaft“ (5 Orte aus Kap. 7 als Karten → `#flood/nach/landschaft/<ort>`), damit die Seite die Breite nutzt und das offene Spiel (Buch-Alternative zu Mysterien) erreichbar ist.
11. **Begriffe:** „Teens“ (Plural und im Fließtext; Singular „der Teen“/„dein Teen“), nicht „Jugendliche“. Hooks = **Aufhänger** (wie TftL-Mystery-Landschaft). Glossar Abschnitt 5.
12. **Script-Tags und `sw.js`:** Paket A1 trägt **alle** geplanten Dateien sofort in `index.html` ein und legt Platzhalter-Dateien an (Datei-Liste 3.4). Inhalts-Pakete überschreiben nur ihre Dateien und fassen `index.html`/`sw.js` nicht an. `sw.js` (alle Bilder + Dateien) und `VERSION` erledigt Paket F4 zentral – so gibt es keine Schreibkonflikte zwischen parallelen Agenten.

---

## 1. Das Buch – Inhalt, Seiten, was ins Tool kommt

`/home/claude/tftl_work/pdf/flood.pdf`, 217 PDF-Seiten, Bookviewer-Id `tftl_flood`, **Offset +1** (PDF-Seite 1-basiert = gedruckte Seite + 1; **pymupdf-Index = gedruckte Seite**). Alle „S.“ im Tool = gedruckte Seite. Bilder: `/home/claude/tftl_work/img/flood/` (Dateiname `flood_S<PDF-Seite>…`, also PDF-Seite!), Inventar `plan/tftl/bilder-inventar.tsv` (Zeilen `flood`, Spalte `art` = `textur`/`maske` nie verwenden, z. B. `flood_S029-030_02_dbl…` ist eine Maske).

Design des Buchs (gemessen): Kapitelband/Überschriften **#8f2c48** (AvantGarde Bold), Band-Oberteil **#768a9e** (Blaugrau), Kästen **#ebeff2**, Seiten weiß, Fließtext Sabon, Karteikarten Trixie (Schreibmaschine) – gleiche Ersatzschriften wie TftL (Jost, EB Garamond, Special Elite). US-Varianten stehen im Buch in eckigen Klammern in Rosa („Aunt Emi [Aunt Erna]“) → `{{schwedisch|amerikanisch}}`. Fertigkeiten im Text fett in Kapitälchen → `<span class='f'>…</span>`.

| Kap. | Buchtitel | Deutsch (Tool) | gedr. S. | PDF-S. | ins Tool → Ort | Paket |
|---|---|---|---|---|---|---|
| – | Cover, Credits, Inhalt | – | 0–5 | 1–6 | nur Cover-Bild für Galerie | – |
| 1 | Life after the Flood | Leben nach der Flut | 6–13 | 7–14 | Nachschlagen › Welt (Geschichten aus der Flut S. 8, Wie funktioniert Rollenspiel S. 9, Würfeln S. 9, Prinzipien des Spiels S. 9) | C1 |
| 2 | The Loop in a New Time | Der Loop in einer neuen Zeit | 14–35 | 15–36 | Nachschlagen › Loops › Schweden: Alternative 90er S. 16, Aufstieg und Fall des Tech-Zeitalters S. 16, Teens und Technik S. 21, Schweden in den 90ern S. 22, Mälarinseln – friedliche Isolation S. 27, Was man in den 90ern macht S. 30, Svartsjölandet – eine Insel, zwei Welten S. 31, Munsö – Heimat des Loop S. 33, Bauern, Touristen und Schläger S. 34, Krafta Corp S. 34, Der Loop S. 35; Karte S. 28–29 → Karte-Tab | C2 (S. 14–26), C3 (S. 27–35) |
| 3 | The Hoover Dam Disaster | Die Hoover-Damm-Katastrophe | 36–47 | 37–48 | Nachschlagen › Loops › USA: Auf dem Weg zu etwas Neuem S. 37, Teens in Amerika S. 40, Freizeit S. 41, Boulder City S. 41, Las Vegas · Lake Mead · Hoover-Damm · Valley of Fire S. 44–45, Area 51 S. 45, Der US-Loop S. 45, Die Hoover-Damm-Katastrophe S. 45; Karte S. 42–43 → Karte-Tab | C4 |
| 4 | The Teen | Die Teens | 48–67 | 49–68 | Erschaffung S. 48–49 + Regeln S. 60–67 (Alter, Attribute, Fertigkeiten, Gegenstände, Problem, Antrieb, Scham, Beziehungen, Aufhänger, Anker, Zustände, Narben, Tod, Erfahrung, Name, Beschreibung, Gefahrenstufe, Reibung, Fragen) → Nachschlagen › Teens; **Typen S. 49–59** (Hacker, Sportler, Einzelgänger, Schrauber, Partylöwe, Raver, Rocker, Sinnsucher, Snob, Straßenkind) → Typen-Kachelraster | B0 (Typen), C5 (Regeln) |
| 5 | Trouble | Ärger | 68–81 | 69–82 | Nachschlagen › Ärger (Zustände erleiden S. 70 … Erweiterter Ärger S. 75, Die Fertigkeiten S. 76–80 als 12 Karten) | C6 |
| 6 | The Mystery | Das Mysterium | 82–107 | 83–108 | Nachschlagen › Mysterium: Wahrheit S. 84, Mysterium und Alltag S. 85, Einzel-/Gruppenszenen S. 87, Überblick S. 88, Phasen 1–6 S. 89–96 (inkl. In Memoriam, Erfahrungspunkte S. 96–97), Was geht in der Evak vor? S. 98, NSC S. 98, Längere Mysterien und Kampagnen S. 98, Fortgeschrittene SL-Techniken S. 99–102 (Flussdiagramm „Maschinengott“ S. 100–101 als Bild), Horror S. 103–107; Fahrzeug-/Maschinen-Skizzen mit Bildtexten S. 104–107 als Bildkarten | C7 (S. 82–96), C8 (S. 97–107) |
| 7 | The Mystery Landscape | Mystery-Landschaft | 108–129 | 109–130 | Nachschlagen › Mystery-Landschaft: Einleitung, Aufhänger-Liste, Spielweise, Kampagnenspiel, Karte der Mystery-Landschaft (S. 111), Countdown, Hinweise, Beispiel „Das Kollektiv“, Gemeinsames Erzählen S. 116; Orte: Das Magnetrinschiff der Radiopiraten S. 117, Sunshine Farm S. 121, Little Doe Trailerpark S. 123, Die Wissenschaft der Liebe S. 125, Der Serbische Schachclub S. 127 (je mit „Verbindungen zu Pandora“-Kasten) | E1 (S. 108–116), E2 (S. 117–129) |
| 8 | Prophets of Pandora | Die Propheten von Pandora | 130–133 | 131–134 | Kampagnen-Hintergrund (Leitstand ohne Phasen, wie `vz-hintergrund`) | C1 |
| 9 | Of Flesh and Steel | Aus Fleisch und Stahl | 134–151 | 135–152 | Mysterium 1 | D1, D5 |
| 10 | The Ugliness | Die Hässlichkeit | 152–167 | 153–168 | Mysterium 2 | D2, D5 |
| 11 | Traveler | Reisender | 168–185 | 169–186 | Mysterium 3 (mit NSC-Szenen) | D3, D6 |
| 12 | Ash to Eternity *(nicht in den Lesezeichen)* | Asche zur Ewigkeit | 186–209 | 187–210 | Mysterium 4 (Finale, 6 Orte, Wendung) | D4a, D4b, D6 |
| – | Backers | – | 210–212, 216 | 211–213, 217 | **nicht** | – |
| – | Character Sheet | Charakterbogen | 213 | 214 | Vorlage für den Teen-Bogen (zusätzlich `m_sheet_flood.pdf`) | B1 |
| – | Index | – | 214–215 | 215–216 | **nicht** | – |

Weglassen (Standing-Regel): Solo-, Oracle- und Koop-Regeln – **das Buch hat keine**. Kästen „Gefahrenstufe“ (S. 65, One-Shot-Variante) und „Ein Kid aus TftL als Teen spielen“ (S. 60) sind normale Regeln → übernehmen. Liedtexte nicht übernehmen (nur Titel/Interpret).

### 1.1 Mysterien im Detail (gedruckte Seiten, Abschnitte nach Buch-Inhaltsverzeichnis)

| Mysterium (id) | Abschnitte (S.) | Karten (Mälaren/Boulder) | Pläne / Grafiken | Ablauf-Grafik |
|---|---|---|---|---|
| Aus Fleisch und Stahl (`flesh`) | Wahrheit 135 · Teens einführen 137 · Mysterium einführen 138 · Ort 1 Marks Haus 140 · Ort 2 Torslunda-Sümpfe 142 · Ort 3 Primal-Force-Therapiezentrum 143 · Konfrontation 146 · Nachspiel 148 · Veränderung 148 · NSC und Kreaturen 149 | S. 136 / S. 137 | Marks Haus S. 141, Primal Force S. 144, Buchcover „Deine innere Urkraft“ S. 141, Bunker/KAB-311 S. 147, Marks Notizen S. 138 (Handout) | S. 138 unten |
| Die Hässlichkeit (`ugliness`) | Wahrheit 153 · Teens einführen 156 · Mysterium einführen 157 · Ort 1 Louise Tannenbaums Haus 158 · Ort 2 Das Schwarze Loch 160 · Ort 3 Das Labor im Berggården-Gymnasium 161 · Die Wendung 163 · Konfrontation 163 · Nach der Konfrontation 165 · Nachspiel 165 · Veränderung 165 · NSC 166 | S. 154 / S. 155 | Louises Haus S. 159, Schwarzes Loch S. 161, Labor S. 162, Roboterfabrik S. 164 | S. 156–157 unten |
| Reisender (`traveler`) | Wahrheit 169 · NSC-Szenen 172 · Teens einführen 175 · Mysterium einführen 175 · Ort 1 Mettes Haus 175 · Ort 2 Der Präsident der UFO-Gesellschaft 177 · Ort 3 Der Strand 177 · NSC-Szenen 179 · Konfrontation 181 · Nach der Konfrontation 182 · Nachspiel 182 · Veränderung 183 · NSC 183 | S. 170 / S. 171 | Mettes Haus S. 176, Classon-Hof S. 182, Zeitungsartikel „Missing Girl Found – Now Mute“ S. 174 (Handout) | S. 174–175 unten |
| Asche zur Ewigkeit (`ash`) | Wahrheit 187 · Teens einführen 190 · Mysterium einführen 190 · Ort 1 Suzanne Krapp 191 · Ort 2 Louise Tannenbaum 193 · Ort 3 Sven Järnek auf Bastlagnö 195 · Die Wendung 197 · Ort 4 Linnea Hall 197 · Ort 5 Billy & Jane 199 · Ort 6 Der Röntgenturm 200 · Konfrontation 203 · Nach der Konfrontation 206 · Nachspiel 207 · Veränderung 207 · NSC 207; Countdown für den Maschinenkrebs S. 190 | S. 188 / S. 189 | Boulder-Kasten „John in den Bergen“ S. 196 (Loop-Kasten!), Svens Hütte S. 198, Linneas Haus S. 200, Röntgenturm auf Räfsholmen S. 202, Hephaesteum S. 206 | S. 192–193 oben |

(Seiten aus den Lesezeichen/dem gedruckten Inhaltsverzeichnis, Bildseiten aus `get_image_info`; jede Paket-Bearbeitung prüft sie am PDF.)

---

## 2. Bestandsaufnahme (was schon da ist)

- `tftl/js/app.js`: Route `#flood/<seite>/…` → `area="flood"` existiert; gerendert wird aber nur für `area==="tftl"` (Flood zeigt nur `<h1>`). `head()` zeigt TftL-Logo + Flood-Unterlogo (`B.flood.sub`).
- `tftl/js/data/bereiche.js`: `flood` mit Tabs Vorbereitung · Mysterien · Teens · Karte, Bücher `["tftl_flood"]`.
- `tftl/style.css` Z. 59–60: `body.flood{--acc:#8f2c48;--band:#8f2c48;--bg:#eef0f2;--night:#2b2430}` + Kopfzeile Weinrot.
- `toolmenu.js` Z. 22: Dropdown-Eintrag `tftl_flood` (Untereintrag, `c:2` = rechte Spalte unter TftL, Logo-Maske) → `tftl/#flood`. Funktioniert; nur prüfen.
- `sys.js`/`app.js`: Bookviewer-Eintrag `tftl_flood`, Offset 1 – vorhanden.
- Renderer mit fest verdrahteten TftL-Werten (müssen auf `TCTX` umgestellt werden): Links `#m/`, `#mysterien`, `#nach/`, `#bogen/`, localStorage `tftl_*`, Buch `tftl_core` (nach.js `pg()`, karte.js), Farben `#ee7113`/`#bfb5a3` im Ablauf-SVG, `#fdf1e6`/`#fff8ec` in style.css, Text „Lösung“ (Seitenleiste), „Showdown“ (Ablauf-Knoten), „Kid“ (kids.js), Glück = 15 − Alter, Stolz, Versteck.

---

## 3. Architektur

### 3.1 Routen (alle mit Präfix `#flood/`)

```
#flood/start                         Vorbereitung (f1)
#flood/mysterien                     Übersicht (Entwurf 2 im Flood-Thema)
#flood/m/<id>/<phase>[/<abschn>]     Leitstand (f2); ids: pandora, flesh, ugliness, traveler, ash
#flood/kids                          Teens (f3)   (Routen-Name bleibt „kids“, Tab-Text „Teens“)
#flood/bogen/<teenId>                Teen-Bogen
#flood/karte                         Loop-Karte Mälarinseln/Boulder City
#flood/nach/<tab>[/<set>]/<abschn>   Nachschlagen; tabs: welt · loops (schweden|us) · kids (typen + teens) · aerger · mysterium · landschaft
#flood/wuerfel, #flood/galerie       wie TftL (sobald es die TftL-Seiten gibt)
```

### 3.2 Kontext `window.TCTX` (neu, in `app.js`)

`app.js` setzt vor jedem Rendern `window.TCTX = ctx(area)`. Alle Renderer lesen **nur noch** daraus (Fallbacks auf die bisherigen TftL-Globals, damit TftL ohne Änderung der Datendateien läuft):

```js
function ctx(a){
  var F = window.FLOOD || {};
  if(a === "flood") return {
    area:"flood", p:"flood/", ls:"flood_", book:"tftl_flood",
    START:F.START, MYSTERIEN:F.MYSTERIEN, MYS:F.MYS, NACH:F.NACH, NACHDATA:F.NACHDATA, SETS:F.SETS,
    TYPEN:F.TYPEN, KIDS:F.KIDS, KARTE:F.KARTE, kidsKey:"flood_teens_v1", sheet:"FLOODSHEET",
    L: F.L   // Beschriftungen, s. u.
  };
  return {
    area:"tftl", p:"", ls:"tftl_", book:"tftl_core",
    START:window.START, MYSTERIEN:window.MYSTERIEN, MYS:window.MYS, NACH:window.NACH, NACHDATA:window.NACHDATA,
    SETS:null /* nach.js-Standard */, TYPEN:window.TYPEN, KIDS:window.KIDS, KARTE:window.KARTE, kidsKey:"tftl_kids_v1", sheet:null,
    L:{kid:"Kid", kids:"Kids", unsere:"Unsere Kids", showdown:"Showdown", typBoxes:null}
  };
}
```

`window.FLOOD.L` (in `js/data/flood/base.js`):
```js
L: {kid:"Teen", kids:"Teens", unsere:"Unsere Teens", showdown:"Konfrontation",
    typBoxes:[["items","Kultgegenstand"],["problem","Problem"],["drive","Antrieb"],["scham","Scham"],["relK","Beziehungen zu den anderen Teens"],["relN","Beziehungen zu NSC"],["aufhaenger","Aufhänger"],["anker","Anker"],["namen","Typische Namen"]]}
```

Hilfsfunktionen, die jeder Renderer lokal nutzt: `var C = window.TCTX || {p:"", ls:"tftl_", book:"tftl_core"}`; Links `"#" + C.p + "m/" + id`; Speicher `C.ls + "last"` usw.; Loop `localStorage.getItem(C.ls + "loop")`.

**Electric State** (Parallel-Planung, Entwürfe `e1–e3`): `ctx("es")` folgt später nach demselben Muster; A1 baut `ctx()` so, dass ein dritter Zweig nur Daten ergänzt.

### 3.3 Änderungen an vorhandenen Dateien (klein, konfigurierbar)

| Datei | Änderung | Paket |
|---|---|---|
| `js/app.js` | `ctx()` + `window.TCTX`; alle `r.area==="tftl" && …`-Weichen auf `(r.area==="tftl" \|\| r.area==="flood")`; Nachschlagen/Leitstand ebenso; `menu()`: Nachschlagen aus `C.NACH`, Werkzeuge aus `B[a].werkzeuge` (Flood ohne Spielleiterschirm) mit Präfix; `head()`: Flood nutzt `logo` statt `sub` | A1 |
| `js/data/bereiche.js` | `flood`: `sub/subW/subH` weg, `logo:"assets/logos/things-from-the-flood.webp", logoW:252, logoH:26`; `werkzeuge:[["bogen","Charakterbogen"],["wuerfel","Würfel"],["galerie","Galerie"]]`; bei `tftl` `werkzeuge` mit Spielleiterschirm wie bisher | A1 |
| `style.css` | Flood-Thema (3.5), `--accl`/`--fline` als Variablen statt `#fdf1e6`/`#fff8ec`/`#bfb5a3`; CSS für Graph (`.fg`), `.top2`, NSC-Porträt, Teen-Karte (Scham, Narben), Teen-Bogen, `nach`-Blöcke `bild`/`kk` | A1, A2, B1 |
| `js/start.js` | `C.START`; Links mit `C.p`; Hero aus `D.hero[loop]` (Fallback heutige HERO-Tabelle); Loop-Knöpfe aus `D.loops`; rechter Block: wenn `D.liste` vorhanden → Mysterien-Zeilen mit Nr.-Fähnchen (f1) statt Bildstreifen; `D.kampagne` als Überschrift „Kampagne · …“; Knopf-Farbe über Variable `--gobtn` (TftL gelb `var(--band)`, Flood `var(--acc)` mit weißer Schrift) | A1 |
| `js/mysterien.js` | `C.MYSTERIEN`, Links `#`+`C.p`+`m/…`; Einträge mit Art `"l"` = Link auf beliebige Route (für Landschaftsorte: 7. Feld = Ziel-Hash ohne Präfix) | A1 |
| `js/nach.js` | `C.NACH`, `C.SETS` (Standard = heutiges `SETS`), `C.TYPEN`, `pg()` mit `C.book`, Links mit `C.p`, Typ-Details-Boxen aus `C.L.typBoxes` (Standard = heutige Liste); neue Blöcke `["bild", name, titel, s, klein?]` (Abbildung, Klick = groß, kein Beschnitt) und `["kk", titel, [zeilen]]` (Karteikarte, Schreibmaschine) | A1 |
| `js/karte.js` | `C.KARTE`, `C.book`, Loop-Key `C.ls+"loop"`, Überschrift aus `K.titel` (Standard „Mystery-Landschaft“) | A1 |
| `js/leitstand.js` | `C.MYS`, Präfix, Speicher; Farben aus CSS (`getComputedStyle(document.body).getPropertyValue("--acc")`, `--fline`); Seitenleisten-Überschrift = `P.name`; Ablauf-Endknoten „Showdown“ → `C.L.showdown`; **neuer Graph-Renderer für `M.ablauf`** (3.6); Layout `.top2`; Countdown in `side2`, wenn Graph neben der Karte steht; besuchte Abschnitte `S.besucht[abId]`; NSC-Karte mit `n.bild` | A2 |
| `js/kids.js` | `C.KIDS`, `C.kidsKey`, Texte aus `C.L`; Schalter in `K.flags` (`glueck`, `stolz`, `versteck`, `scham`, `narben`, `reibung`); Karte/Bogen je nach Schaltern; `window.KIDSHELP = {inp, chk, lbl, row, esc, get, set}` exportieren; wenn `C.sheet` → `window[C.sheet](k, KIDSHELP)` baut den Bogen; FillPDF-Name „Things from the Flood – <Name>“ | B1 |
| `index.html` | Script-Block Flood (3.4) | A1 |
| `toolmenu.js` | nichts ändern; nur prüfen, dass Klick auf „Things from the Flood“ → `#flood` und Untereintrag rechts unter TftL (Entwurf 7) | A1 |

### 3.4 Neue Dateien und Reihenfolge der Script-Tags

In `tftl/index.html` **nach** `js/data/m/sirene-rest.js` und **vor** `js/leitstand.js` einfügen (Renderer lesen Daten erst beim Rendern; `base.js` muss die erste Flood-Datei sein):

```html
<script src="js/data/flood/base.js"></script>          <!-- window.FLOOD = {MYS:{}, NACHDATA:{}, NACH, SETS, L} – A1 -->
<script src="js/data/flood/start.js"></script>         <!-- FLOOD.START – A1 -->
<script src="js/data/flood/mysterien.js"></script>     <!-- FLOOD.MYSTERIEN – A1 -->
<script src="js/data/flood/teens.js"></script>         <!-- FLOOD.KIDS (Typenliste, Attribute, Zustände, Fertigkeiten, flags) – B1 -->
<script src="js/data/flood/typen.js"></script>         <!-- FLOOD.TYPEN (10 Typen) – B0 -->
<script src="js/data/flood/karte.js"></script>         <!-- FLOOD.KARTE – E3 -->
<script src="js/data/flood/nach/welt.js"></script>     <!-- C1 -->
<script src="js/data/flood/nach/schweden-a.js"></script><!-- C2 -->
<script src="js/data/flood/nach/schweden-b.js"></script><!-- C3 -->
<script src="js/data/flood/nach/us.js"></script>       <!-- C4 -->
<script src="js/data/flood/nach/teens.js"></script>    <!-- C5 -->
<script src="js/data/flood/nach/aerger.js"></script>   <!-- C6 -->
<script src="js/data/flood/nach/mysterium-a.js"></script><!-- C7 -->
<script src="js/data/flood/nach/mysterium-b.js"></script><!-- C8 -->
<script src="js/data/flood/nach/landschaft-a.js"></script><!-- E1 -->
<script src="js/data/flood/nach/landschaft-b.js"></script><!-- E2 -->
<script src="js/data/flood/m/pandora.js"></script>     <!-- C1 -->
<script src="js/data/flood/m/flesh.js"></script>       <!-- D1 -->
<script src="js/data/flood/m/flesh-loesung.js"></script>
<script src="js/data/flood/m/flesh-rest.js"></script>
<script src="js/data/flood/m/ugliness.js"></script>    <!-- D2 -->
<script src="js/data/flood/m/ugliness-loesung.js"></script>
<script src="js/data/flood/m/ugliness-rest.js"></script>
<script src="js/data/flood/m/traveler.js"></script>    <!-- D3 -->
<script src="js/data/flood/m/traveler-loesung.js"></script>
<script src="js/data/flood/m/traveler-rest.js"></script>
<script src="js/data/flood/m/ash.js"></script>         <!-- D4a -->
<script src="js/data/flood/m/ash-loesung.js"></script> <!-- D4a -->
<script src="js/data/flood/m/ash-loesung2.js"></script><!-- D4b -->
<script src="js/data/flood/m/ash-rest.js"></script>    <!-- D4b -->
```
und direkt nach `<script src="js/kids.js"></script>`: `<script src="js/teens.js"></script>` (B1: `window.FLOODSHEET`).

**Platzhalter** (A1 legt jede Datei oben an, damit die App sofort lädt; das Paket ersetzt sie komplett):
- nach-Dateien ohne `-a/-b`: nur Kommentar `/* PLATZHALTER – Paket Cn */`. Bei geteilten Kapiteln legt `-a` das Objekt an (Platzhalter: `window.FLOOD.NACHDATA.schweden = {kap:"Kapitel 2", titel:"Der Loop in einer neuen Zeit", s:14, abschnitte:[]};`), `-b` hängt nur an: `window.FLOOD.NACHDATA.schweden.abschnitte.push(…)` (Platzhalter `-b`: nur Kommentar). Ladereihenfolge a vor b ist fest. Gleiches für `mysterium-a/-b` und `landschaft-a/-b`.
- Mysterium-Dateien: Hauptdatei-Platzhalter legt `FLOOD.MYS.<id> = {id, name, bild, buch:"tftl_flood", intro:"", phasen:[{id:"wahrheit", name:"Wahrheit", abschnitte:[{id:"wahrheit", titel:"Die Wahrheit", s:<S.>, html:"<p>(Inhalt folgt)</p>"}]}]}` an; Folgedateien leer.

Bilder: alle in `tftl/img/flood/` (webp, quality 82, max. 1600 px breit; Kachel-/Eröffnungsbilder 1400 px).

### 3.5 Flood-Farbthema (`style.css`, Werte aus dem Buch)

```css
body{--accl:#fdf1e6;--fline:#bfb5a3;--gobtn:var(--band);--gobtnInk:var(--ink);--goh:var(--band)}   /* TftL-Standard = heutige Werte */
body.flood{
  --top:#8f2c48;   /* Kopfzeile = Kapitelband */
  --acc:#8f2c48;   /* Überschriften, aktive Tabs, Chips, Pins */
  --band:#8f2c48;  /* Rand links an Kacheln/Karten */
  --band2:#768a9e; /* Blaugrau: Hinweis-Karten, Fähnchen, Kampagnen-Kachel, Showdown-Pin */
  --accl:#f5e7ec;  /* helles Weinrot: aktiver Knoten/Seitenleisten-Eintrag */
  --bg:#eef0f3; --line:#d6dce3; --soft:#5f6772; --done:#a4aab2;
  --box:#ebeff2;   /* Kästen im Buch (Beispiele, Kästen) */
  --night:#1e2733; --fline:#b9bfc7;
  --gobtn:var(--acc); --gobtnInk:#fff; --goh:#e9a3b6;  /* Mysterien-Block: Überschrift Rosa, Knopf Weinrot */
}
body.flood .topbar{background:var(--top)}
body.flood .cl{border-left-color:var(--band2)}
```
Schriften wie TftL. Logo Kopfzeile: `assets/logos/things-from-the-flood.webp` (455×47) als Maske, weiß, Höhe 26 px. Kachel-/i-Pop-up: `things-from-the-flood-stack.webp`.

### 3.6 Ablauf-Graph `M.ablauf` (neu, A2 baut den Renderer; D5/D6 liefern die Daten)

```js
M.ablauf = {
  knoten: [
    {id:"start", t:"Mysterium einführen", sp:0, z:1, ziel:"mysterium", art:"ende"},
    {id:"ort1",  t:"Marks Haus",          sp:1, z:1, ziel:"loesung/ort1", nr:1},
    {id:"ort3",  t:"Primal Force",        sp:2, z:0, ziel:"loesung/ort3", nr:3},
    {id:"ort2",  t:"Torslunda-Sümpfe",    sp:2, z:2, ziel:"loesung/ort2", nr:2},
    {id:"konf",  t:"Konfrontation",       sp:3, z:1, ziel:"showdown", art:"sd"}
  ],
  kanten: [["start","ort1"],["start","ort3"],["start","ort2"],["ort1","ort3"],["ort1","ort2"],["ort3","konf"],["ort2","konf"]]
};
```
- `sp` Spalte (0…), `z` Zeile (0…, halbe Werte erlaubt), `ziel` = Route hinter `#flood/m/<id>/`, `nr` = Nummer wie Karten-Pin, `t` = kurzer Name (≤ 2 Zeilen bei 130 px), `art`: `"ende"` (Phasen-Knoten, Versalien), `"sd"` (Konfrontation, Vollfarbe), `"wende"` (Wendung, gestrichelter Rand), fehlt = Ort/Szene.
- Kante `[a,b]` = Pfeil a→b; `[a,b,2]` = Pfeile an beiden Enden (Buch: ↔).
- Zeichnen: Knoten 130×48 px (bei engem Platz bis 104), Zeilenabstand 72 px; Spaltenschritt = (Breite − Knotenbreite) / max(sp). Kante zwischen verschiedenen Spalten: waagerecht aus der rechten Knotenmitte, Knick in der Mitte der Lücke **direkt hinter der Quellspalte**, senkrecht zur Zielzeile, waagerecht in die linke Mitte des Ziels; Ecken Radius 5 (`Q`), Pfeilspitze am Ziel. Gleiche Spalte: senkrecht von Unterkante zu Oberkante. Nie schräge Linien. Linien `--fline`, gegangener Weg (beide Enden besucht/aktuell, in Pfeilrichtung) `--acc`.
- Zustände: Knoten aktuell (Route = `ziel`) → Rahmen `--acc` auf `--accl`; besucht (`S.besucht[ziel]`) → grau; Klick → Route.
- Platz: Graph neben der Karte, wenn Spaltenschritt ≥ 150 px; sonst eigene Zeile über volle Breite. Bei `resize` neu zeichnen (echte Pixel, nie strecken). Auf schmalen Bildschirmen (< 900 px) waagerecht wischbar.
- Daten je Mysterium (aus den Buch-Diagrammen abgelesen, D5/D6 prüfen am PDF):
  - **flesh**: wie oben (Diagramm S. 138).
  - **ugliness**: start(0,0.5) → louise(1,0) und → schwarzesloch(1,1); louise↔schwarzesloch `[…,2]`; schwarzesloch → berggarden(2,1) → wende(3,1,art wende, ziel `loesung/wendung`) → konf(4,1).
  - **traveler**: npc1(0,0.5, ziel `loesung/npc1`) → teens(1,0.5, art ende, ziel `kids`) → myst(2,0.5, art ende) → mette(3,0) und → praesident(3,1); mette↔praesident `[…,2]`; beide → strand(4,0.5) → npc23(5,0.5, ziel `loesung/npc2`) → konf(6,0.5). (7 Spalten → eigene Zeile.)
  - **ash**: start(0,0.5) → suzanne(1,0), → louise(1,1); beide → sven(2,0.5) → wende(3,0.5) → linnea(4,0), billy(4,1); linnea↔billy `[…,2]`; beide → turm(5,0.5) → konf(6,0.5); laut Diagramm evtl. zusätzlich linnea → konf – am PDF S. 192–193 prüfen.

### 3.7 Datenformate (Kurzreferenz)

- **Mysterium**: wie `TFTL_MYSTERIEN_BRIEF.md`, aber `window.FLOOD.MYS.<id> = {id, name, bild:"flood/m-<id>", buch:"tftl_flood", intro, phasen:[…]}`; Folgedateien `(function(){ var M = window.FLOOD.MYS.<id>; … })();`. Phasen-IDs/Namen: `wahrheit` „Wahrheit“ · `kids` „Teens einführen“ · `mysterium` „Mysterium einführen“ · `loesung` „Ermittlung“ (Abschnitte: `ueberblick:1` falls das Buch einen Überblick hat, sonst erster Abschnitt = erster Ort; Orte `ort:"ortN"`; Wendung `id:"wendung"`; NSC-Szenen `id:"npc1"`, `"npc2"`) · `showdown` „Konfrontation“ (inkl. „Nach der Konfrontation“) · `nachspiel` „Nachspiel“ (Nachspiel, Veränderung; letzter Abschnitt `abschluss:1`) · `nsc` „NSC“. `M.countdown`, `M.orte` (`{id, nr, name, s}`), `M.nsc` (`{name, alt?, s, zitat, html, bild?}`), `M.karte`, `pin`, `M.pinShowdown`, `M.ablauf`. Loop-Kästen (z. B. Ash S. 196 „Boulder City: John in den Bergen“): Abschnitt mit `loop:"boulder", fassung:"Boulder City"`.
- **Kampagnen-Hintergrund** `pandora`: wie `tftl/js/data/m/vz-hintergrund.js` (eine Phase je Buchabschnitt; Kap. 8 hat Einleitung + „Hintergrund“ mit Unterüberschriften).
- **Nachschlagen**: `window.FLOOD.NACHDATA.<key> = {kap:"Kapitel N", titel, s, abschnitte:[{id, titel, s, bloecke:[…]}]}`; Blöcke `["p",html]`, `["h",text]`, `["liste",[…]]`, `["kasten",titel,[absätze]]`, `["tabelle",[kopf],[[zeilen]]]`, **neu** `["kk",titel,[zeilen]]` (Schreibmaschinen-Karteikarte, im Buch getippte Karten), `["bild","flood/<name>",titel,s,klein?]`. Keys: `welt`, `schweden`, `us`, `teens`, `aerger`, `mysterium`, `landschaft`. Texte in `"…"`-Strings, `{{sv|us}}`-Tokens erlaubt (nach.js `nm()`).
- **FLOOD.NACH** = `[["welt","Die Welt"],["loops","Der Loop"],["kids","Teens"],["aerger","Ärger"],["mysterium","Das Mysterium"],["landschaft","Mystery-Landschaft"]]`; **FLOOD.SETS** = `{welt:["welt"], loops:["schweden","us"], kids:["teens"], aerger:["aerger"], mysterium:["mysterium"], landschaft:["landschaft"]}` (Tab `kids` zeigt zuerst „Die Typen“ wie TftL).
- **FLOOD.TYPEN** (B0): `[{id, name, s, bild:"flood/typ-<id>", text (Ich-Erzählung kursiv), key:[3 Fertigkeiten], items:[…], problem:[…], drive:[…], scham:[…], relK:[…], relN:[…], aufhaenger:"…", anker:[…], namen:[…]}]`; ids `hacker, jock, lonewolf, motorhead, partyanimal, raver, rocker, seeker, snob, streetkid`.
- **FLOOD.KIDS** (B1): `{typen:[[id,name,bild]…], attr:[["k","Körper"],["t","Technik"],["h","Herz"],["v","Verstand"]], zustaende:[["ver","Verärgert"],["ang","Verängstigt"],["ers","Erschöpft"],["verl","Verletzt"],["geb","Gebrochen & vernarbt"]], skills: wie TftL, alter:[14,19], flags:{scham:1, narben:5, reibung:1}}`.
- **Teen** (localStorage `flood_teens_v1`): `{kids:[{id, name, typ, alter, song, a:{}, z:{}, s:{}, scham, schamUsed, problem, drive, anker, item, items:[[t,b]×4], rel:{r0…r3 (Teens), rf (Reibung), r4, r5 (NSC)}, narben:[{t, acc}×5], desc, notes, xp:{x0…x9}}], reibung:"", thema:""}`.
- **FLOOD.START** (A1): `{loops:[["maelar","Mälarinseln"],["boulder","Boulder City"]], hero:{maelar:["flood/hero","center 58%"], boulder:["flood/hero-boulder","center 60%"]}, welt:[…4 Kacheln], spiel:[…4 Kacheln], chips:[["Charakterbogen","bogen",1],["Würfel","wuerfel"],["Loop-Karte","karte"],["Galerie","galerie"]], kampagne:"Die Propheten von Pandora", liste:[[id, titel, "Kap. 9 · S. 134", bild, "1"], …]}` – Kachel-Tupel wie TftL `[titel, untertitel, kap, bild, ziel]`; Texte genau wie in f1 (`plan/tftl/mockups/src/f1-start.html`).
- **FLOOD.MYSTERIEN** (A1): Block `{t:"Die Propheten von Pandora", tag:"Kampagne", sub:"Grundregelwerk · Kap. 8–12", items:[["pandora","Hintergrund der Kampagne","Kap. 8 · S. 130","flood/k-pandora"],["flesh","Aus Fleisch und Stahl","Kap. 9 · S. 134","flood/m-flesh","1"],["ugliness","Die Hässlichkeit","Kap. 10 · S. 152","flood/m-ugliness","2"],["traveler","Reisender","Kap. 11 · S. 168","flood/m-traveler","3"],["ash","Asche zur Ewigkeit","Kap. 12 · S. 186","flood/m-ash","4"]]}` + Block `{t:"Mystery-Landschaft", tag:"Offenes Spiel", dark:1, sub:"Kap. 7 · S. 108", items:[…5 Orte, Art "l", Ziel nach/landschaft/<abschnitt-id>]}` (Bild = erste Illustration des Ortes, wenn eindeutig zugehörig – E2 trägt die Bildnamen nach; bis dahin Karteikarten-Stil `x`).
- **FLOOD.KARTE** (E3): `{titel:"Mystery-Landschaft", loops:[["maelar","Mälarinseln"],["boulder","Boulder City"]], bild:{maelar:"flood/karte-maelar-voll", boulder:"flood/karte-boulder-voll"}, orte:[{id, name, s, pin?:{maelar:[x,y], boulder:[x,y]}}]}`.

### 3.8 Bookviewer

`tftl_flood` (Offset 1) ist vorhanden; Buch-Symbol/Burger zeigt bei Flood nur dieses Buch. Der Charakterbogen `m_sheet_flood.pdf` wird **nicht** als eigenes Buch angelegt, solange es für TftL noch keine „Material“-Gruppe in `sys.js` gibt (dann gemeinsam nachziehen; Id-Vorschlag `tftl_mflood`).

---

## 4. Arbeitspakete

Gemeinsame Regeln für **alle** Pakete: Grundregeln `TFTL_PLAN.md` Abschnitt 2 und Glossar (Abschnitt 5). Nur die eigenen Ausgabedateien anfassen; kein git; `node --check` nach jeder JS-Datei; Screenshots mit Kopie von `/home/claude/shot6.py` → `/home/claude/shot_flood_<paket>.py`, Ausgabe `/tmp/flood_<paket>_%d.jpg` (nie fremde Dateien überschreiben), Hash ohne `#`, z. B. `flood/m/flesh/loesung/ort1`; vorher ggf. `await pg.evaluate("localStorage.setItem('flood_loop','boulder')")`. Bericht am Ende max. 8 Zeilen (Dateien, Seiten, Unsicheres, neue Bilder).

Reihenfolge: **A1 zuerst** (kurz). Danach **parallel**: A2, B0, B1, C1–C8, D1–D4b, E1, E2, E3. Nach D1–D4b + A2: D5, D6. Zum Schluss F1–F4.

### A1 – Infrastruktur, Theme, Startseite, Übersicht, Router
- **Ziel:** `#flood/start` sieht aus wie f1, `#flood/mysterien` wie Entwurf 2 im Flood-Thema, Burger/Nachschlagen/Karte/Bogen-Routen laufen (leere Inhalte erlaubt), TftL unverändert.
- **Eingabe:** dieser Plan 3.2–3.5, 3.7 (START, MYSTERIEN), f1, m2, m7; Buch-Seiten nur für Bilder.
- **Ausgabe:** `js/app.js`, `js/data/bereiche.js`, `js/start.js`, `js/mysterien.js`, `js/nach.js` (Kontext + Blöcke `bild`/`kk`), `js/karte.js`, `style.css` (Thema + Variablen), `index.html` (Script-Block 3.4), `js/data/flood/base.js`, `start.js`, `mysterien.js` (vollständig), alle anderen Flood-Datendateien als Platzhalter (3.4). Bilder nach `tftl/img/flood/`: `hero` (= `flood_S033-034_01_dbl`), `hero-boulder` (`flood_S037-038_01_dbl`), `w-flood` (S007-008), `w-loop` (S015-016), `w-hoover` (S037-038), `w-teens` (S049-050), `w-trouble` (S069-070), `w-mystery` (S083-084), `w-landscape` (S109-110), `k-pandora` (S131-132), `m-flesh` (S135-136), `m-ugliness` (S153-154), `m-traveler` (S169-170), `m-ash` (S187-188) – alle `…_01_dbl…` aus `/home/claude/tftl_work/img/flood/`, unbeschnitten, 1400 px breit.
- **Abhängigkeiten:** keine.
- **Abnahme:** (1) Vorher/Nachher-Screenshots TftL `start`, `mysterien`, `m/killerbirds/loesung/ort2`, `nach/kids`, `nach/aerger`, `karte`, `kids` pixelgleich bzw. ohne sichtbare Änderung; (2) `flood/start` entspricht f1 (Logo nur Flood, Loop-Schalter mit 2 Knöpfen, 2×4 Kacheln, Mysterien-Block mit 4 Zeilen + Weiterspielen), auch 1280×800; (3) `flood/mysterien` 2 Blöcke, Zuletzt/Abgeschlossen mit `flood_last`/`flood_done`; (4) Dropdown wie m7 (rechte Spalte unter TftL, Flood markiert); (5) Burger zeigt Flood-Nachschlagen mit Präfix `#flood/nach/…`; (6) Taste `h`; (7) keine Konsolenfehler.

### A2 – Leitstand: Kontext, Graph, Flood-Layout, NSC-Porträts
- **Ziel:** `leitstand.js` läuft für beide Bereiche; neuer Ablauf-Graph und Layout wie f2.
- **Eingabe:** 3.3 (Zeile leitstand.js), 3.6, f2 + `src/f2-leitstand.html` (CSS-Maße übernehmen).
- **Ausgabe:** `js/leitstand.js`, `style.css` (nur Leitstand-Teil). Test über eine nicht gespeicherte Testdatei: im Screenshot-Skript per `pg.add_init_script` ein Test-Mysterium `FLOOD.MYS.test` mit dem flesh-Graph aus 3.6, drei Orten, Countdown, `M.karte` = `plan/tftl/mockups/src/img/flood/flesh-karte-maelar.webp` (Pfad über `../plan/…`), zwei NSC mit `bild` registrieren.
- **Abhängigkeiten:** A1.
- **Abnahme:** f2 nachgestellt (1440×900 und 1280×800, Graph in echten Pixeln, keine Überlappung, Tab-Leiste bricht bei 1280 nicht um – ggf. Tab-Padding verkleinern); Graph mit 7 Spalten (traveler-Daten aus 3.6) erscheint als eigene Zeile; Knoten-Klick navigiert, Zustände grau/aktiv/Weg weinrot; Seitenleiste eingeklappt (`b`) intakt; TftL-Leitstand (`m/killerbirds/loesung/ort2`, `m/hourglass/loesung/ueberblick`) unverändert; NSC-Karte zeigt Porträt klein rechts, Klick = groß.

### B0 – Teen-Typen (Übersetzung)
- **Ziel:** 10 Typen als Daten + Typ-Figuren.
- **Eingabe:** S. 48–59 (PDF 49–60); Figuren `flood_S051_01…` (Hacker) bis `flood_S060_01…` (Straßenkind); Partylöwe: `flood_S055-056_01_dbl…` prüfen (S. 54) – nur die Figur, die im Buch zum Typ gehört.
- **Ausgabe:** `js/data/flood/typen.js` (Format 3.7), Bilder `tftl/img/flood/typ-<id>.webp` (Hochformat, unbeschnitten, max. 600 px hoch).
- **Abnahme:** `#flood/nach/kids` zeigt 10 Kacheln mit Figur, Detailseite je Typ mit allen Listen inkl. Scham und Aufhänger; Namen mit `{{sv|us}}`.

### B1 – Teens-Seite und Teen-Bogen
- **Ziel:** `#flood/kids` wie f3 (Karten, Reibung); `#flood/bogen/<id>` nah am Original-Bogen (`m_sheet_flood.pdf`, S. 213): links Attribute, Fertigkeiten (12, rosa/weinrot gestreift), Erfahrung (10 Kästchen), unten Zustände (5, „Gebrochen & vernarbt“) und Narben 1–5 mit Kästchen „Akzeptiert“; rechts Name/Typ/Alter/Lieblingslied/Antrieb/Anker/Problem/Scham (Kästchen)/Beschreibung, Beziehungen Teen 1–4, Reibung, NSC 1–2, Gegenstände (Kultgegenstand +2, 4 weitere mit Bonus), Notizen. Kopf: Flood-Logo + „Charakterbogen“. Export als ausfüllbares PDF über `shared/fillpdf.js` (wie TftL), Einlesen legt Teen an, „Leerer Bogen“.
- **Eingabe:** f3, `src/f3-teens.html`, `/home/claude/tftl_work/pdf/m_sheet_flood.pdf` (rendern und genau nachbauen), Regeln S. 60–66 (Scham einmal je Mysterium = automatischer Erfolg; Narbe einmalig „akzeptieren“; Alter 14–19; kein Glück, kein Stolz, kein Versteck).
- **Ausgabe:** `js/kids.js` (Kontext + Schalter + `KIDSHELP`), `js/teens.js` (`window.FLOODSHEET`), `js/data/flood/teens.js`, `style.css` (Teen-Karte, Bogen).
- **Abhängigkeiten:** A1; Typenbilder aus B0 (bis dahin ohne Figur).
- **Abnahme:** f3 nachgestellt; Klicks auf Zustände/Scham/Narben speichern in `flood_teens_v1`; Bogen-PDF lässt sich in einem PDF-Leser ausfüllen und wieder einlesen (Round-Trip-Test mit pdf-lib im Skript); TftL-Kids-Seite und Bogen unverändert.

### B2 – Beziehungen und Würfelprobe (gemeinsam TftL + Flood)
- **Ziel:** die unteren Kästen aus m4/f3: Beziehungsgraph (Namen der Gruppe, Beschriftung aus den Bögen in Caveat), Würfelprobe (Teen/Kid + Fertigkeit → Pool = Attribut + Fertigkeit + Gegenstandsbonus − 1 je leichtem Zustand, mind. 1; Gebrochen = automatischer Misserfolg; Erfolg = mind. eine 6; Würfeln-Knopf). Flood: Scham/Narbe als „automatische 6“-Knopf, Reibung-Kasten mit Themen-Chip. TftL: Glück/Stolz nach Core Kap. 5 (Formel dort prüfen).
- **Eingabe:** Flood S. 70–71, Core Kap. 5 S. 66–68.
- **Ausgabe:** `js/kids.js` (nur neue Funktionen), `style.css`.
- **Abhängigkeiten:** B1.
- **Abnahme:** beide Seiten im Screenshot ohne Lücken (3 Kästen auf einer Zeile), Probe rechnet richtig (Testfall im Bericht).

### C1 – Kap. 1 „Leben nach der Flut“ + Kap. 8 „Die Propheten von Pandora“
- **Eingabe:** S. 6–13 und S. 130–133. **Ausgabe:** `js/data/flood/nach/welt.js` (key `welt`, Abschnitte: Leben nach der Flut (Einleitung + Erzähltext als `kk`), Geschichten aus der Flut, Wie funktioniert Rollenspiel?, Würfeln, Die Prinzipien des Spiels; Karteikarten-Kästen als `kk`); `js/data/flood/m/pandora.js` (`FLOOD.MYS.pandora`, `bild:"flood/k-pandora"`, Phasen = Buchabschnitte „Die Propheten von Pandora“ / „Hintergrund“ mit Unterkapiteln).
- **Abnahme:** `#flood/nach/welt` Baum links, Text flach; `#flood/m/pandora` mit Tabs je Abschnitt.

### C2 – Kap. 2 Teil a (S. 14–26)
- **Ausgabe:** `js/data/flood/nach/schweden-a.js` (legt `FLOOD.NACHDATA.schweden = {kap:"Kapitel 2", titel:"Der Loop in einer neuen Zeit", s:14, abschnitte:[…]}` an): Einleitung, Eine alternative 90er-Welt, Aufstieg und Fall des Tech-Zeitalters (Zeitleiste/getippte Karten als `kk`), Teens und Technik, Schweden in den 90ern; Abbildungen, die klar zu Abschnitten gehören (z. B. Maschinen-Bilder mit Bildtext), als `bild`.
### C3 – Kap. 2 Teil b (S. 27–35)
- **Ausgabe:** `js/data/flood/nach/schweden-b.js` (hängt an `FLOOD.NACHDATA.schweden.abschnitte` an): Die Mälarinseln – friedliche Isolation, Was man in den 90ern macht, Svartsjölandet – eine Insel, zwei Welten, Munsö – Heimat des Loop, Bauern, Touristen und Schläger, Krafta Corp, Der Loop. Karte S. 28–29 **nicht** (E3).
### C4 – Kap. 3 (S. 36–47)
- **Ausgabe:** `js/data/flood/nach/us.js` (key `us`, `kap:"Kapitel 3", titel:"Die Hoover-Damm-Katastrophe"`). Abschnitte laut Tabelle 1. Karte S. 42–43 nicht (E3).
### C5 – Kap. 4 Regeln (S. 48–49, 60–67)
- **Ausgabe:** `js/data/flood/nach/teens.js` (key `teens`, `kap:"Kapitel 4", titel:"Die Teens"`): Einleitung + Schritte der Erschaffung (Liste) + „Gemeinsam“ (S. 48–49), dann Alter, Attribute, Fertigkeiten, Gegenstände, Problem, Antrieb, Scham, Beziehungen, Aufhänger, Anker, Zustände (Tabelle), Narben (inkl. Narbe akzeptieren, Tod), Erfahrung, Name, Beschreibung, Gefahrenstufe (Kasten), Reibung (Beispiele/Themen als Listen-Kästen), Fragen. Beispiele als `kasten` „Beispiel“.
### C6 – Kap. 5 „Ärger“ (S. 68–80)
- **Ausgabe:** `js/data/flood/nach/aerger.js` (key `aerger`): Abschnitte wie Tabelle 1; „Die Fertigkeiten“ als ein Abschnitt mit 12 `kasten`-Blöcken (Fertigkeit (Attribut) + Text + Beispiel).
### C7 – Kap. 6 Teil a (S. 82–96)
- **Ausgabe:** `js/data/flood/nach/mysterium-a.js` (legt `FLOOD.NACHDATA.mysterium` an): Einleitung, Die Wahrheit des Mysteriums, Mysterium und Alltag, Einzel- und Gruppenszenen, Überblick, Phase 1–6 (Phase 3 „Ermittlung“ mit Unterabschnitten, Phase 5 inkl. In Memoriam).
### C8 – Kap. 6 Teil b (S. 97–107)
- **Ausgabe:** `js/data/flood/nach/mysterium-b.js` (anhängen): Erfahrungspunkte (S. 97, falls nicht in C7 – Grenze: C7 endet mit „Phase 6 – Veränderung“ inkl. allem bis Seitenende S. 96, C8 beginnt mit „Erfahrungspunkte“ S. 97), Was geht in der Evak vor?, NSC – Menschen, Kreaturen und Maschinen, Längere Mysterien und Kampagnen, Fortgeschrittene SL-Techniken (Flussdiagramm „Der Maschinengott“ S. 100–101 als **gerenderter Seitenausschnitt** `flood/sl-flussdiagramm.webp`, dpi 200, ohne Kapitelband; Beschriftungen nicht übersetzen, im Bericht nennen), Horror; Fahrzeug-/Maschinen-Skizzen S. 104–107 als Abschnitt „Fahrzeuge und Maschinen“ mit `bild`-Blöcken (Bilddateien `flood_S105_01…` bis `flood_S108_04…` → `flood/fz-<name>.webp`) und übersetztem Bildtext je Bild.

**Abnahme C1–C8:** vollständige, treue Übersetzung (Prüf-Brief-Kriterien), Baum links schmal (Titel bis zum Doppelpunkt), Kästen als Karten, keine leeren Spalten; Screenshot je Tab.

### D1 – Aus Fleisch und Stahl (S. 134–151) · D2 – Die Hässlichkeit (S. 152–167) · D3 – Reisender (S. 168–185)
- **Ziel:** vollständiger, übersetzter Text als Mysterium-Datei(en) nach `TFTL_MYSTERIEN_BRIEF.md` mit den Abweichungen aus 3.7 (Ablage `FLOOD.MYS`, Phasen-Namen „Teens einführen/Ermittlung/Konfrontation“, `buch:"tftl_flood"`, `bild:"flood/m-<id>"`, „Teens“ statt „Kinder“).
- **Ausgabe:** `js/data/flood/m/<id>.js` (Wahrheit, Teens einführen, Mysterium einführen), `<id>-loesung.js` (`M.countdown`, `M.orte`, Ermittlung inkl. Wendung/NSC-Szenen), `<id>-rest.js` (Konfrontation, Nach der Konfrontation, Nachspiel, Veränderung, NSC + `M.nsc` **ohne** `bild`). Hinweise (`hinweise:[…]`) und Ärger (`aerger:[{t,html}]`) an den Ort hängen, an dem sie im Buch stehen. Kästen „Hintergrund-Gerüchte“ usw. als `box:1`. Handouts (z. B. „Marks Notizen“, Zeitungsartikel) als eigener `box:1`-Abschnitt mit übersetztem Text.
- **Abnahme:** jede Phase im Screenshot; `node --check`; NSC-Liste vollständig; Seiten `s` stimmen.

### D4a – Asche zur Ewigkeit Teil 1 (S. 186–198) · D4b – Teil 2 (S. 199–209)
- **D4a Ausgabe:** `ash.js` (Wahrheit inkl. „Countdown für den Maschinenkrebs“-Hintergrund, Teens einführen, Mysterium einführen), `ash-loesung.js` (`M.countdown` = Countdown S. 190, `M.orte` **alle 6** (Namen/S. aus Tabelle 1.1), Phase `loesung` mit Ort 1–3, Wendung, Ort 4, Loop-Kasten „Boulder City: John in den Bergen“ S. 196).
- **D4b Ausgabe:** `ash-loesung2.js` (`(function(){ var M = FLOOD.MYS.ash; var P = M.phasen.filter(function(p){ return p.id==="loesung"; })[0]; P.abschnitte.push(…Ort 5, Ort 6…); })();`), `ash-rest.js` (Konfrontation S. 203, Nach der Konfrontation S. 206, Nachspiel, Veränderung, NSC S. 207–209).
- Laufen parallel; D4b verlässt sich nur auf die Datei-Reihenfolge.

### D5 – Bilder, Karten, Pins, Ablauf: Aus Fleisch und Stahl + Die Hässlichkeit · D6 – dasselbe für Reisender + Asche zur Ewigkeit
- **Ziel:** nach `TFTL_BILDER_BRIEF.md` + `TFTL_PINS_BRIEF.md`, mit Flood-Abweichungen: Bilder nach `tftl/img/flood/<id>-<was>.webp`, Feld `b:"flood/<id>-<was>"`; Mystery-Karten **je Loop eine Buchkarte** (Tabelle 1.1: erste Kartenseite prüfen, welche Mälaren und welche Boulder ist) als Seitenausschnitt (dpi 200, Clip = äußerer Papierrahmen laut `get_image_info`, ohne Kapitelband) → `M.karte = {maelar:"flood/<id>-karte-maelar", boulder:"flood/<id>-karte-boulder"}`, Pins je Loop dort, wo die Buchkarte den Ort markiert, `M.pinShowdown`; Grundrisse/Pläne aus Tabelle 1.1 an den jeweiligen Ort; **NSC-Porträts** als `bild:"flood/<id>-nsc-<name>"` ins NSC-Objekt (Seitenausschnitt des Porträts, freigestellt nur viereckig); `M.ablauf` nach 3.6 aus dem Buchdiagramm (Diagramm selbst nicht als Bild einbauen).
- **Eingabe:** fertige Dateien D1–D4b, Renderer A2.
- **Abnahme:** `#flood/m/<id>/loesung/ueberblick` bei beiden Loops: Pins auf den richtigen Stellen, Graph entspricht dem Buchdiagramm, keine Lücken; jedes Bild im richtigen Abschnitt; Summe Bilder je Mysterium < 1,5 MB.

### E1 – Mystery-Landschaft Teil a (S. 108–116)
- **Ausgabe:** `js/data/flood/nach/landschaft-a.js` (legt `FLOOD.NACHDATA.landschaft` an, `kap:"Kapitel 7"`): Einleitung, Aufhänger (nummerierte Liste vollständig), Die Mystery-Landschaft spielen, Kampagnenspiel, Die Karte der Mystery-Landschaft (Seitenausschnitt S. 111 → `flood/landschaft-karte.webp` als `bild`), Countdown, Hinweise, Beispiel „Das Kollektiv“ (Countdown als `kk`), Gemeinsames Erzählen.
### E2 – Mystery-Landschaft Teil b (S. 117–129)
- **Ausgabe:** `js/data/flood/nach/landschaft-b.js` (anhängen): je Ort ein Abschnitt (ids `piraten`, `sunshine`, `littledoe`, `liebe`, `schachclub`) mit Wahrheit/NSC/Countdown (`kk`)/„Verbindungen zu Pandora“ (`kasten`); NSC-Porträts als `["bild",…,1]` (klein) direkt beim NSC-Absatz, Ort-Illustrationen als `bild`. Außerdem in `js/data/flood/mysterien.js` im Block „Mystery-Landschaft“ die 5 Einträge mit Bildnamen ergänzen (einzige erlaubte Änderung an fremder Datei).
### E3 – Loop-Karte (Karte-Tab)
- **Ausgabe:** `tftl/img/flood/karte-maelar-voll.webp` (Doppelseite S. 28–29 = PDF 29–30, beide Seiten rendern, zusammensetzen, Kapitelband/Seitenzahlen weg; vorher dpi 60 ansehen – der rechte Teil liegt evtl. als ein Bild über beide Seiten), `karte-boulder-voll.webp` (S. 42–43 = PDF 43–44), je max. 2400 px; `js/data/flood/karte.js` (3.7): Orte = 5 Landschaftsorte (Pins nach der Landschaftskarte S. 111, nur wo eindeutig), Orte aus Kap. 2/3, die auf der Karte beschriftet sind (z. B. Evakuierungszone, Stenhamra, Krafta/Loop-Hauptreaktor, Boulder City, Hoover-Damm, Area 51 …), sonst ohne Pin in der Liste.
- **Abnahme:** `#flood/karte` beide Loops, Pins sitzen, Ortsliste mit „S.“-Links ins Flood-Buch.

### F1 – Prüfung Mysterien flesh + ugliness · F2 – Prüfung traveler + ash + pandora
- Nach `TFTL_PRUEF_BRIEF.md`, Glossar Abschnitt 5, Quelle flood.pdf (Offset 1). Ausgabe: Korrekturen direkt in den Dateien.
### F3 – Prüfung Nachschlagen (C1–C8, E1–E2, B0)
- wie F1, für die nach-Dateien und typen.js; zusätzlich Begriffs-Einheitlichkeit über alle Flood-Dateien (grep auf englische Reste: „Teen’s“, „GM“, „Trouble“, „Clue“, „Hook“ …).
### F4 – Layout-Abnahme und Integration
- **Ziel:** alles als ein Ganzes prüfen und ausliefern.
- **Aufgaben:** (1) `sw.js`: alle neuen JS-Dateien und **alle** `tftl/img/flood/*.webp` eintragen (per Skript aus `ls`), `VERSION` erhöhen; (2) Screenshots aller Routen (Liste 3.1, jede Phase jedes Mysteriums, jeder Nachschlagen-Abschnitt) bei 1440×900 und 1280×800, mit ein- und ausgeklappter Seitenleiste, Taste `h`; Lücken/leere Spalten/abgeschnittene Bilder beheben (CSS), Dropdown-Verhalten (1,5 s Hover) prüfen; (3) TftL-Regression (wie A1-Abnahme); (4) Konsolenfehler = 0.
- **Abhängigkeiten:** alle anderen Pakete.

---

## 5. Glossar Flood (verbindlich, ergänzt das TftL-Glossar im Mysterien-Brief)

| Englisch | Deutsch |
|---|---|
| Teen / Teens | der Teen (dein Teen) / die Teens |
| Type: Hacker, Jock, Lone Wolf, Motorhead, Party Animal, Raver, Rocker, Seeker, Snob, Street Kid | Typ: Hacker, Sportler, Einzelgänger, Schrauber, Partylöwe, Raver, Rocker, Sinnsucher, Snob, Straßenkind |
| Key skills · Iconic Item · Item | Schlüsselfertigkeiten · Kultgegenstand · Gegenstand |
| Problem · Drive · Shame · Anchor · Relationships · Hooks · Friction | Problem · Antrieb · Scham · Anker · Beziehungen · Aufhänger · Reibung |
| Scar · accept a Scar · Death · Danger Level | Narbe · eine Narbe akzeptieren · Tod · Gefahrenstufe |
| Conditions: Upset, Scared, Exhausted, Injured, Broken (Sheet: Broken & Scarred) | Zustände: Verärgert, Verängstigt, Erschöpft, Verletzt, Gebrochen (Bogen: Gebrochen & vernarbt) |
| Body · Tech · Heart · Mind | Körper · Technik · Herz · Verstand |
| Sneak, Force, Move, Tinker, Program, Calculate, Contact, Charm, Lead, Investigate, Comprehend, Empathize | schleichen, kraft, bewegen, basteln, programmieren, rechnen, kontakte, charme, anführen, untersuchen, begreifen, einfühlen (`<span class='f'>`) |
| Trouble · Extended Trouble · Push the roll · Buy effects · Special NPCs · Teen versus Teen | Ärger · Erweiterter Ärger · Probe forcieren · Effekte kaufen · Besondere NSC · Teen gegen Teen |
| GM · NPC · XP | Spielleiter(in) · NSC · Erfahrungspunkte (EP) |
| Introducing the Teens · Introducing the Mystery · Investigation · Location · The Tilt · Confrontation · After the Confrontation · Aftermath · Change · In Memoriam · NPC scenes · Everyday Life · Clue · Countdown | Teens einführen · Mysterium einführen · Ermittlung · Ort · Die Wendung · Konfrontation · Nach der Konfrontation · Nachspiel · Veränderung · In Memoriam · NSC-Szenen · Alltag · Hinweis · Countdown |
| The Flood · Mälarö Leak · Evacuation Zone · the VAC · machine cancer · Black Lake Lands · Mälaren Islands | die Flut · das Mälarö-Leck · Evakuierungszone · die Evak · Maschinenkrebs · Svartsjölandet · Mälarinseln |
| Krafta Corp · AEP · Riksenergi · DART · Magnetrine · Tech-Age · Hoover Dam Disaster | unverändert (Eigennamen) · Magnetrin · Tech-Zeitalter · Hoover-Damm-Katastrophe |
| Prophets of Pandora · Vagabonds · Totem Clan · Metallic Body · Hephaesteum · X-Ray Spire · Thunderbolt | Propheten von Pandora · Vagabunden · Totem-Clan · Metallkörper · Hephaesteum · Röntgenturm · Thunderbolt |
| Mystery Landscape · Collaborative Storytelling · Radio Pirates’ Magnetrine Ship · Sunshine Farm · Little Doe Trailer Park · The Science of Love · The Serbian Chess Club · Connections to Pandora | Mystery-Landschaft · Gemeinsames Erzählen · Das Magnetrinschiff der Radiopiraten · Sunshine Farm · Little Doe Trailerpark · Die Wissenschaft der Liebe · Der Serbische Schachclub · Verbindungen zu Pandora |
| Of Flesh and Steel · The Ugliness · Traveler · Ash to Eternity | Aus Fleisch und Stahl · Die Hässlichkeit · Reisender · Asche zur Ewigkeit |

US-Fassung: jede Klammer `X [Y]` → `{{X|Y}}` (Namen, Orte, Firmen, auch ganze Wendungen wie „östlich von Sånga-Säby [nördlich von Boulder City]“). Zitat-/Vorlesetexte als `<p class="zit">`, Beispiele `<div class="bsp"><b>Beispiel</b><p>…</p></div>`, „S. 12“ immer mit „S.“.

---

## 6. Risiken und offene Punkte

1. **Gleichzeitige Arbeit an TftL/Electric State:** Andere Agenten ändern evtl. dieselben Renderer (app.js, leitstand.js, style.css). A1/A2/B1 müssen die Dateien direkt vor dem Bearbeiten frisch lesen und nur gezielt ersetzen (Edit, kein Komplett-Überschreiben); Electric-State-Planung soll `TCTX` mitnutzen.
2. **TftL-Regression:** Größtes technisches Risiko ist A1/A2 (Umbau auf Kontext). Darum Vorher/Nachher-Screenshots als Pflicht-Abnahme.
3. **Graph-Layout bei engen Bildschirmen:** Spaltenschritt-Regel (≥ 150 px) und Wischzeile; bei 1280 px mit eingeklappter/ausgeklappter Seitenleiste testen. Lange Ortsnamen brauchen kurze `t`.
4. **Kartenseiten S. 28–29 / 42–43:** Doppelseiten-Karte liegt als Rasterbild + Vektor-Beschriftung + Papiertextur; beim Rendern einer Einzelseite fehlte bei dpi 45 die rechte Hälfte → E3 muss beide Seiten rendern und die Naht prüfen.
5. **Mystery-Karten-Zuordnung** (welche der zwei Karten je Mysterium Mälaren/Boulder ist) aus Beschriftung ablesen, nicht raten.
6. **Ladezeit:** Flood fügt ca. 0,6–0,8 MB JS hinzu (alles wird sofort geladen, wie bei TftL). Falls spürbar: später Lazy-Loading je Bereich (nicht Teil dieses Plans).
7. **Würfelprobe-Formel TftL** (B2) muss gegen Core Kap. 5 geprüft werden; in Flood gibt es kein Glück/Stolz, dafür Scham/Narben.
8. **Fehlende Flood-Spielhilfe:** kein Spielleiterschirm. Falls Moritz eine Flood-Spielhilfe hochlädt, Chip/Menü nachziehen.
9. **„Die Evak“** als Übersetzung von „the VAC“ und Typnamen (Sinnsucher, Partylöwe, Schrauber) sind eigene Vorschläge → bei Moritz’ Durchsicht ggf. ändern (zentral per grep).
10. **Charakterbogen als Bookviewer-Material** erst mit der TftL-„Material“-Gruppe (3.8).
11. **Fahrzeug-Skizzen S. 104–107** stehen ohne eigene Überschrift im Horror-Kapitel; Abschnittsname „Fahrzeuge und Maschinen“ ist nur Navigationsbeschriftung, kein Buchtext.
