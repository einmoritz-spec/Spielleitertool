# Vaesen – „Seasons of Mystery“ einbauen (Bauplan)

Stand: 21. Nov. 2026. Dieser Plan ist die Arbeitsanweisung für die Umsetzung (gedacht für Sonnet, in mehreren Sitzungen).
Vorbild ist der fertige Leitstand „Tanz der Träume“ (`vaesen/js/tanz.js`, `vaesen/js/data/tanz-leit.js`, `vaesen/tanz.css`).
Nichts aus diesem Plan ist bisher gebaut.

---

## 1. Quellen

| Was | Wo |
|---|---|
| Abenteuerbuch (EN, 104 S.) | wird vom Nutzer hochgeladen: `Vaesen___Abenteuer___Seasons_of_Mystery_EN.pdf` |
| Handout-PDF (EN, 9 S.) | `Vaesen___Material___Handouts_Seasons_of_Mystery_EN.pdf` (inhaltlich identisch mit Buch S. 88–96) |
| Alle Bilder (89 PNG) | `quellen/bilder-zips/Vaesen_Seasons_of_Mystery.zip` (Dateiname enthält die PDF-Seite, z. B. `…_S057_…`) |

**Seitenzählung:** PDF-Seite = Buchseite + 4. Im Tool werden immer **Buchseiten** als „S. 12“ angezeigt.
Im Bookviewer-Init (`vaesen/index.html`, `BV.init`) für `vae_seasons` den Offset 4 setzen (wie bei `vae_core`), damit Seitenlinks die richtige PDF-Seite öffnen.

**Text sauber auslesen:** Das Buch ist zweispaltig, `pdftotext -raw` verklebt Wörter. So geht es sauber:
```bash
# linke / rechte Spalte einer PDF-Seite (Seitenbreite ~612 pt)
pdftotext -layout -f 12 -l 12 -x 0   -y 0 -W 306 -H 792 buch.pdf links.txt
pdftotext -layout -f 12 -l 12 -x 306 -y 0 -W 306 -H 792 buch.pdf rechts.txt
```
Kästen und NSC-Werteblöcke stehen oft in der rechten Spalte – im Zweifel die Seite als Bild rendern (`pdftoppm -f 12 -l 12 -r 80 -png`) und ansehen.

---

## 2. Inhalt des Buchs (Gliederung = Tabs)

Vier Mysterien, eins pro Jahreszeit. Jedes hat dieselbe Buchstruktur wie „Tanz der Träume“:
Prelude (Background, Conflicts, Invitation, Preparations, Journey, Arrival, Countdown and Catastrophe) → Locations → Confrontation → Aftermath.

| ID | Deutscher Titel | Original | Buch-S. | PDF-S. | Jahreszeit | Schauplatz |
|---|---|---|---|---|---|---|
| `tod` | Ein Tanz mit dem Tod | A Dance with Death | 4–23 | 8–27 | Frühling | Dalarna, Dorf Fudal am Siljan |
| `feuer` | Feuerherz | Fireheart | 24–45 | 28–49 | Sommer | Småland, Hüttenwerk Häryd |
| `teufel` | Der Teufel im Moor | The Devil on the Moor | 46–67 | 50–71 | Herbst | Jütland, Grimsted Lyng |
| `winter` | Ein Wintermärchen | A Winter’s Tale | 68–87 | 72–91 | Winter | Ingermanland, Gasthaus Tammsalu |
| – | Handouts | Handouts | 88–96 | 92–100 | | |

Das vollständige Inhaltsverzeichnis mit allen Kästen und NSC steht in den PDF-Lesezeichen
(`python3 -c "from pypdf import PdfReader; …outline"`). Jeder Lesezeichen-Eintrag muss im Tool vorkommen.

### Besonderheiten je Mysterium (müssen eigene Bausteine bekommen)
- **tod:** Kästen Paranoia, Der Zettel auf dem Bett, Der Näck in Menschengestalt, Der Wandteppich, Pers Idas Leiche; Konfrontation mit drei Wegen (Showdown, Den Bann brechen, Den Näck bannen). Vaesen: Nöck (Grundregelwerk-Karte `VAE_DETAIL`/`VAE_WESEN` „Nöck“ verlinken, nicht neu anlegen).
- **feuer:** Kästen Hinterhalt!, Drachenkrankheit, Träume und Visionen, Hineinkommen, Gefangen!, Die Erweckungsversammlung, Die Laterne, Augusts Tagebuch; NSC-Gruppen Wegelagerer und Erzjungen; **neue Vaesen-Karte „Drache“ (S. 45)** mit vollem Werteblock; Konfrontation in sechs Schritten (August gesteht … Endkampf).
- **teufel:** **neue Vaesen-Karte „Der Namenlose“ (S. 48)**; Kästen Telegramm, Zeitungsartikel, Fragment, Tückisches Moor, Sandemanns Tagebuch (2×), Gelbliche Fotografie; NSC-Gruppe Arbeiter der Moorgesellschaft.
- **winter:** Kästen Ingermanland und die vergessenen Völker, Sprachen, Kälte widerstehen (eigene Probe!), Ein Mittwinternachtstraum, NSC im Gasthaus, Die Erzählrunde spielen, Runensänger, Esters Tagebuch, Die Tarot-Legung; **Erzählrunde** (vier Geschichten: Vilma af Zimt, Ilya, die Campbell-Brüder, Karin Karaskevas Lied); **neue Vaesen-Karte „Der Nisse Graufuß“ (S. 84)**; Konfrontation mit vier Wegen (Angriff, Besänftigen, Die Geisterjäger, Versöhnung). Das Motto-Gedicht am Kapitelanfang (Viktor Rydberg, „Tomten“, gemeinfrei) als Vorlesekasten übersetzen.
- **Alle:** Kasten „In Mythic Britain and Ireland“ (Alternative für das britische Setting) – als eingeklappter Kasten am Ende von „Hintergrund“.

---

## 3. Grundregeln (aus Moritz’ Vorgaben – unbedingt einhalten)

1. **Nur Buchtext, komplett und vollständig ins Deutsche übersetzt.** Nichts weglassen, nichts zusammenfassen, nichts erfinden (keine eigenen Tipps, keine Kurzüberblicke). Keine englischen Wörter in der Oberfläche (Eigennamen wie „Seasons of Mystery“, Orts- und Personennamen bleiben).
2. **Daten in mehrere Dateien** aufteilen (eine Textdatei + eine Leitstand-Datei pro Mysterium).
3. **Bilder:** nur dort, wo sie im Buch zu genau dieser Figur/Karte gehören; nicht beschneiden (Hochformat bleibt hochkant); Porträts klein in der NSC-Karte; Karten groß und anklickbar.
4. **Bilder mit englischem Text nie direkt zeigen** (Handout-Briefe, Kasten „Secret“, Rydberg-Zitat): immer die leere Papier-Version nehmen und deutschen Text darübersetzen.
5. Vorlesekästen ohne Beschriftung „Vorlesetext“. Seitenangaben immer „S. 12“. Notizen nur als Stift-Symbol. Tabs nur mit Namen, ohne Zahlen. Keine Erklärtexte.
6. **Keine Spaltenflüsse**, durch die man hoch- und runterscrollen muss; Breite nutzen; keine leeren Spalten.
7. **Jede sichtbare Änderung selbst per Screenshot prüfen** (Playwright + `/usr/bin/google-chrome`, `file://…/vaesen/index.html#…`, Viewport 1440×900) und dem Nutzer schicken.
8. **Commits ohne** „Co-Authored-By“- und „Claude-Session“-Zeilen. Push mit `git -c push.negotiate=true push`.
9. Bei neuen Dateien `sw.js`: VERSION erhöhen und Dateien in die Precache-Liste eintragen.
10. Neue Bedienelemente, die es im Tanz-Leitstand noch nicht gibt (Jahreskreis-Übersicht, Erzählrunde, Tarot), **zuerst als Screenshot-Entwurf zeigen**, erst nach Freigabe bauen.

### Glossar (verbindlich, wie im Grundregelwerk-Teil des Tools)
| EN | DE |
|---|---|
| Physique / Precision / Logic / Empathy | Physis / Präzision / Logik / Empathie |
| Agility, Close Combat, Force, Medicine, Ranged Combat, Stealth | BEWEGLICHKEIT, NAHKAMPF, KRAFT, HEILKUNDE, FERNKAMPF, HEIMLICHKEIT |
| Investigation, Learning, Vigilance, Inspiration, Manipulation, Observation | NACHFORSCHUNG, GELEHRSAMKEIT, WACHSAMKEIT, INSPIRATION, MANIPULATION, BEOBACHTUNG |
| Physical / Mental Toughness | Körperliche / Geistige Zähigkeit |
| Exhausted, Battered, Wounded / Angry, Frightened, Hopeless / Broken | Erschöpft, Zerschlagen, Verwundet / Wütend, Verängstigt, Hoffnungslos / Gebrochen |
| Fear test / Fear value | Furchtprobe / Furchtwert |
| Might, Bodily, Magic, Manifestation | Macht, Körperlich, Magie, Manifestation |
| Enchantment, Curse, Terrify, Banish … | Verzauberung, Fluch, Schrecken, Bannen … (Namen aus `vaesen-detail*.js` übernehmen) |
| The Neck / Nisse / Lindworm / Myling / Revenant | Nöck / Nisse / Lindwurm / Myling / Wiedergänger |
| the Society / Headquarters / player characters / GM | die Gesellschaft / Hauptquartier / Spielercharaktere / Spielleitung |
| Countdown and Catastrophe / Invitation / Preparations / Journey / Arrival / Locations / Confrontation / Aftermath | Countdown und Katastrophe / Einladung / Vorbereitungen / Reise / Ankunft / Orte / Konfrontation / Nachspiel |
| Equipment | Ausrüstung |

Fertigkeiten im Fließtext **in Großbuchstaben** schreiben (z. B. „eine MANIPULATION-Probe“) und Furcht als „Furchtwert 1“ – dann macht die Leitstand-Dekoration (`tzDec`) automatisch anklickbare Chips daraus.

---

## 4. Architektur

Der Tanz-Leitstand ist fest auf ein Abenteuer zugeschnitten (`tzB("nora", 6)` usw.). Für vier weitere Mysterien wird **eine allgemeine Leitstand-Engine** gebaut; der Tanz bleibt unverändert, bis alles läuft (optional am Ende umstellen).

```
vaesen/js/mys.js                 Engine: Ansichten, Countdown, Plan, Hinweise, Figuren, Handouts, Zeigemodus, Notizen
vaesen/mys.css                   nur Ergänzungen; alle Klassen aus tanz.css wiederverwenden
vaesen/js/data/som-tod.js        deutscher Buchtext „Ein Tanz mit dem Tod“ (VAE_MYS.tod)
vaesen/js/data/som-tod-leit.js   Struktur: Karten-Hotspots, Countdown, Hinweise, Handouts, Figuren-Zuordnung
… dasselbe für feuer, teufel, winter
vaesen/img/som/…                 Bilder (webp, siehe Abschnitt 6)
```
Route: `#som/<id>/<tab>[/<unter>]`, z. B. `#som/tod/orte/wiese`. Spielstand je Mysterium in `localStorage` unter `vae_som_<id>_v1` (`cd`, `clue`, `trk`, `zu`, `note`, `last` – wie Tanz).

### Datenformat (eine Datei pro Mysterium, Text vollständig auf Deutsch)
```js
window.VAE_MYS = window.VAE_MYS || {};
VAE_MYS.tod = {
  titel: "Ein Tanz mit dem Tod", buch: "vae_seasons", p: 4, zeit: "Frühling",
  warnung: "Gewalt, Tod, Gedankenkontrolle",
  bild: "som/tod_eroeffnung",                       // Kapitelbild
  hg: [ {id, t, p, b:[Blöcke]} ],                   // Hintergrund, Konflikte, Figuren im Mysterium, In Mythic Britain…
  an: [ {id, t, p, b:[…]} ],                        // Einladung, Vorbereitungen, Reise, Ankunft
  cd: { intro:[Blöcke], schritte:[{t:"Kurzname", x:"Buchtext"}], kat:{t, x} },
  orte: [ {id, t, p, karte:"plan-id", b:[…], figs:["lisbets"], clues:["w1","w2"]} ],
  kf: [ {id, t, p, b:[…]} ],                        // Konfrontation, Unterabschnitte
  ns: [ {id, t, p, b:[…]} ],                        // Nachspiel
  figs: { lisbets: {n:"Lisbets Boel", rolle, zitat, x:"Beschreibung", p:14, img:"som/tod_lisbets_boel",
          attr:{Physis:2, Präzision:3, Logik:3, Empathie:4}, fert:[["BEWEGLICHKEIT",2],…],
          zaeh:{k:2, g:2}, ausr:"…" } },
  gruppen: { maegde: {n:"Mägde", x, attr, fert, zaeh} },   // NSC-Gruppen ohne Bild
  wesen: { drache: { … gleiche Felder wie VAE_DETAIL: macht, koerper, magie, manip, furcht, powers, cond, att, note, ritual, img } },
  clues: [ {id:"w1", ort:"wiese", q:"BEOBACHTUNG", x:"…"} ],
  handouts: [ {id:"1A", t:"Swärds Jennys Brief", papier:"som/ho_1a_papier", hand:true, x:"…deutscher Brieftext…"} ],
  karten: [ {id:"fudal", t:"Fudal und Umgebung", img:"som/tod_karte_fudal", hot:[["wiese",x,y,w,h]], labels:[["Die Wiese",x,y]]} ]
};
```
Blöcke wie im übrigen Vaesen-Teil: `{t:"p"}`, `{t:"h"}`, `{t:"ul"}`, `{t:"box", h}`, `{t:"tbl", head, rows}`, dazu **neu** `{t:"vl", x}` = Vorlesekasten (Stil `.vl` aus tanz.css) und `{t:"see", ho:"1B"}` = Handout-Verweis-Chip.

**Karten-Beschriftungen:** Die Buchkarten haben englische Beschriftungen. Wie beim Hexenkatze-Plan: Beschriftungen per CSS-Labels (cqw-Einheiten) auf Deutsch darüberlegen; wo englischer Text stört, im Bild mit Papierfarbe übermalen (Pillow), Datei `…_leer.webp` speichern.

### Ansicht pro Mysterium (identisch zum Tanz-Leitstand)
Tabs: **Hintergrund · Anreise · Orte · Konfrontation | Figuren · Hinweise · Handouts · Nachspiel** (Nachspiel rechts).
- **Hintergrund:** Kapitelbild + Beziehungsnetz der Figuren (SVG, Knoten anklickbar → Figur) + Hintergrundtext breit.
- **Anreise:** Übersichtskarte links (Siljan / West-Småland / Nordjütland / Ingermanland), Einladung (Handout-Chip), Reise, Ankunft, Vorlesekästen.
- **Orte:** Schauplatzkarte groß, anklickbare Orte; rechts Text, Vorlesekasten, „wer ist hier“-Chips, Hinweise des Orts. Unterorte als Chip-Leiste über dem Text (wie Gasthof/Speisesaal/… beim Tanz).
- **Konfrontation:** Text links, Vaesen-Werteblock rechts (kompakte Karte, Zustände abhakbar).
- **Figuren:** Raster der NSC-Karten (Porträt klein, Werte, Zähigkeit abhakbar), NSC-Gruppen als kleinere Karten, Vaesen-Karte.
- **Hinweise:** nach Ort gruppiert, Klick = abgehakt (grau). Fortschritt für die Startseite.
- **Handouts:** zweispaltig, nie überlappend; Klick → Vollbild-Zeigemodus (Pfeile, Esc).
- **Countdown-Leiste** auf Orte, Konfrontation, Figuren, Hinweise, Handouts; Klick auf Schritt → Buchtext + „Ausgelöst“.
- **Gruppe-Leiste** (`gruppe.js`): `grpTabOk()` erweitern, damit sie auch bei `cur === "som"` auf Orte/Konfrontation/Figuren/Hinweise erscheint.
- **Spielleiterschirm** (Taste S) gilt automatisch überall; im Winter-Mysterium zusätzlich den Kasten „Kälte widerstehen“ als Reiter „Kälte“ einblenden, solange `cur === "som" && id === "winter"`.

### Startseite (`ui.js` → `uiStart`)
- Der graue „Seasons of Mystery“-Platzhalter entfällt. Die Reihe „Mysterien“ zeigt: Tanz der Träume + die vier Jahreszeiten-Mysterien (Kapitelbild, Titel, Jahreszeit, „Seasons of Mystery · S. 4“, Fortschritt Countdown/Hinweise, „Weiterspielen“) + die weiteren grauen Bände (A Wicked Secret, City of My Nightmares).
- Bei 7 Karten: Raster `repeat(auto-fill, minmax(210px,1fr))`, Tanz-Karte nicht mehr doppelt breit. **Vorher Entwurf als Screenshot zeigen.**
- `uiTzProgress` verallgemeinern zu `mysProgress(id)`.

### Bücher / Suche / Galerie
- `buecher.js`: Seasons of Mystery bekommt `on:1`, sobald die PDF hochladbar ist (Bookviewer kennt `vae_seasons` schon).
- Suche (`runSearch` in `app.js`): Texte aus `VAE_MYS` mit durchsuchen (Treffer → `som/<id>/<tab>`).
- Galerie (`js/data/galerie.js` + `galnames.js`): alle neuen Bilder als eigene Gruppe „Seasons of Mystery“ eintragen.

---

> **Status: alle fünf Schritte erledigt (Tod, Feuerherz, Teufel im Moor, Wintermärchen, Startseite/Suche/Galerie).**

## 5. Arbeitsschritte (jeweils eine Sitzung, jeweils mit Screenshots, Commit, Push)

0. **Bilder & Gerüst:** ZIP entpacken, Bilder nach Tabelle (Abschnitt 6) umbenennen, als webp (Qualität 82, max. 1600 px breit, Porträts mit weißem Hintergrund lassen – im Tool `mix-blend-mode:multiply`) nach `vaesen/img/som/` legen; Karten mit deutschen Beschriftungsflächen vorbereiten. Leere Engine `mys.js` + Route `som` in `app.js` (`case "som": v = viewMys(); break;` und `if(window.mysAfter) mysAfter();` nach `render`). BV-Offset 4. SW-Liste.
1. **„Ein Tanz mit dem Tod“ komplett:** Text übersetzen (`som-tod.js`), Leitstand-Daten (`som-tod-leit.js`), Engine fertigbauen, alle Tabs per Screenshot prüfen. Dieses Mysterium ist die Schablone für die anderen drei.
2. **„Feuerherz“** inkl. Drachen-Karte und Konfrontation in Schritten.
3. **„Der Teufel im Moor“** inkl. Namenloser.
4. **„Ein Wintermärchen“** inkl. Erzählrunde (Entwurf zuerst zeigen), Tarot-Legung als Bild-Handout, Nisse Graufuß, Kälte-Reiter.
5. **Startseite, Suche, Galerie, Feinschliff:** neue Mysterien-Reihe (Entwurf zuerst), Gesamtcheck aller Seiten, keine JS-Fehler, `plan/`-Datei als „erledigt“ markieren.

Für jede Sitzung den Nutzer bitten, die Buch-PDF (und für Schritt 1–4 die Handout-PDF) erneut hochzuladen.

---

## 6. Bilder: Zuordnung und neue Namen

Präfix im ZIP: `Abenteuer_Seasons-of-Mystery_`. Ziel: `vaesen/img/som/<name>.webp`.
**Achtung:** Die ZIP-Namen beschreiben oft die Überschrift daneben, nicht das Bild (z. B. `S037_SWINE_02` ist die Hüttenwerk-Karte). Mit ✓ = per Sichtung geprüft; ? = beim Einbau gegen die Buchbeschreibung prüfen.

| ZIP | Inhalt | neuer Name |
|---|---|---|
| S004_Bild_01 | Triskel-Emblem (rot) | `som_emblem` |
| S008_A-DANCE-WITH-DEATH_01 | Nöck mit Geige (Kapitelbild) ✓ | `tod_eroeffnung` |
| S010_CONFLICTS_01 | Karte Siljan und Umgebung ✓ | `tod_karte_siljan` |
| S012_THE-JOURNEY_01 | Porträt Swärds Jenny ✓ | `tod_swaerds_jenny` |
| S015_Bild_01 | Karte Fudal und Umgebung ✓ | `tod_karte_fudal` |
| S018_…_01 / _02 | Lisbets Boel / Pers Ida ✓ | `tod_lisbets_boel`, `tod_pers_ida` |
| S019_…_01 / _02 | Jons Gustav / Mattias Freja ✓ | `tod_jons_gustav`, `tod_mattias_freja` |
| S028_FIREHEART_01 | Drache über brennendem Wald (Kapitelbild) ✓ | `feuer_eroeffnung` |
| S030_Bild_01 | Karte West-Småland ✓ | `feuer_karte_smaland` |
| S034_Bild_01 | Karte Kirchspiel Häryd ✓ | `feuer_karte_haeryd` |
| S035_Fireheart_01 | Porträt Alfred Härenstam ? | `feuer_alfred_haerenstam` |
| S037_SWINE_01 | Porträt „Swine“ (Vorarbeiter) ? | `feuer_swine` |
| S037_SWINE_02 | Karte Hüttenwerk Häryd ✓ | `feuer_karte_huettenwerk` |
| S040_BEATA-GIDEONSDOTTER_01 | Beata Gideonsdotter ✓ | `feuer_beata` |
| S041_AUGUST-HÄRENSTAM_01 | August Härenstam (mit Laterne) ✓ | `feuer_august_haerenstam` |
| S042_AND-OFFICE_02 | Karte Direktorenvilla und Kontor (vollständig) ✓ | `feuer_karte_villa` (`_01` ist rechts abgeschnitten – nicht verwenden) |
| S046_FINAL-SHOWDOWN_01 | Karte Drachenhöhle ✓ | `feuer_karte_hoehle` |
| S048_Bild_01 | Drache (Vaesen-Bild, S. 45) ✓ | `feuer_drache` |
| S049_RITUAL_01 | Kasten „Secret“ mit englischem Text | nicht verwenden – als `box` übersetzen |
| S050_THE-DEVIL_01 | Der Namenlose (Mädchen im Nebel, Kapitelbild) ✓ | `teufel_eroeffnung` (zugleich Vaesen-Bild) |
| S056_Bild_01 | Karte Nordjütland ✓ | `teufel_karte_jylland` |
| S057_JENS-LUDVIGSEN_01 | Jens Ludvigsen ✓ | `teufel_jens_ludvigsen` |
| S060_Bild_01 | Karte Grimsted Lyng ✓ | `teufel_karte_grimsted` |
| S061_KROMUTTER-PEDERSEN_01 | Kromutter Pedersen ✓ | `teufel_kromutter` |
| S064_Bild_01 | Daguerreotypie Signe Andersdotter (Kasten im Text) ✓ | `teufel_signe` |
| S065_PREBEN-RASMUSSEN_01 | Preben Rasmussen ✓ | `teufel_preben_rasmussen` |
| S067_HANS-AND-EJNAR-JENSEN_01 | Hans und Ejnar Jensen ✓ | `teufel_jensen_brueder` |
| S068_…_01 / _02 | ältere Frau mit Kopftuch / kräftige Frau – vermutlich Oma Thea / Jensine Jensen ? | `teufel_oma_thea`, `teufel_jensine` |
| S070_Bild_01 | Wesen auf Grabstein (Pestfriedhof/Konfrontation) ? | `teufel_friedhof` |
| S072_A-WINTER-S-TALE_01 | Nisse Graufuß mit Axt (Kapitelbild) ✓ | `winter_eroeffnung` (zugleich Vaesen-Bild) |
| S072_A-WINTER-S-TALE_02 | Rydberg-Gedicht (englischer Text) | nicht verwenden – als `vl` übersetzen |
| S074_Bild_01 | Übersichtskarte Finnischer Meerbusen / Ingermanland ✓ | `winter_karte_uebersicht` |
| S077_COACHMAN-ILYA_01 | Kutscher Ilya Ermakov ✓ | `winter_ilya` |
| S078_COUNTDOWN_01 | Vilma af Zimt ? | `winter_vilma` |
| S080_Bild_01 | Karte Tammsalu und Umgebung ✓ | `winter_karte_tammsalu` |
| S081_LOCATIONS-LOCATIONS_01 | Wirt Axel Trygg ? | `winter_axel_trygg` |
| S082_…_01 / _02 | Samuel / Daniel Campbell ? | `winter_samuel_campbell`, `winter_daniel_campbell` |
| S083_THE-DINING-HALL_01 | Karin Karaskeva ? | `winter_karin` |
| S084_Bild_01 | Karte Gasthaus Tammsalu, Hauptgebäude ✓ | `winter_karte_gasthaus` |
| S085_Bild_01 | ovales Frauenporträt – vermutlich Ester Trygg ? | `winter_ester` |
| S002-003, S102-103, S101, S104_* | Vorsatzpapier, Emblem-Doppel, Rückseite | nicht verwenden |

**Handouts** (S. 88–96): immer die **leere** Papier-Variante als Hintergrund, deutscher Text darüber (Handschrift-Schrift „Cav“ wie beim Tanz, Schreibmaschine/Zeitung in EB Garamond bzw. Monospace).

| Handout | Text-Bild (nur zur Ansicht) | leeres Papier → Name |
|---|---|---|
| 1A Swärds Jennys Brief | S092_Bild_01 | S092_Bild_02 → `ho_1a` |
| 1B Der Zettel auf dem Bett | S093_Meddlesome-people_01 | S093_Meddlesome-people_02 → `ho_1b` |
| 1C Jons Gustavs Liebesbrief | S093_ourselves_03 | S093_ourselves_04 → `ho_1c` |
| 1D Auszug aus Pers Idas Tagebuch | S094_Bild_03 | S094_Bild_04 → `ho_1d` |
| 1E Jons Gustavs unvollendeter Brief | S094_Bild_01 | S094_Bild_02 → `ho_1e` |
| 2A Alfred Härenstams Brief | S095_Bild_01 | S095_Bild_02 → `ho_2a` |
| 2B Auszug aus „Mythen und Volkssagen aus Småland“ | S096_Bild_03 | S096_Bild_04 → `ho_2b` |
| 2C August Härenstams Tagebucheintrag | S096_Bild_01 | S096_Bild_02 → `ho_2c` |
| 3A Linneas Brief | S097_Handouts-The-Devil-on-the-Moor_01 | S097_Handouts-…_02 → `ho_3a` ? |
| 3B Preben Rasmussens Telegramm | S097_3A-Linnea-s-letter_03 | S097_3A-…_04 → `ho_3b` |
| 3C Zeitungsartikel über die Moorgesellschaft | S097_3A-Linnea-s-letter_05 | S097_3A-…_06 → `ho_3c` (Zeitungssatz nachbauen) |
| 3D Fragment aus „Unterirdische Vaesen …“ | S098_Bild_02 | S098_Bild_03 → `ho_3d` |
| 3E Sandemanns Tagebuch: Der Teufel im Moor | S098_Bild_04 | S098_Bild_05 → `ho_3e` |
| 3F Sandemanns Tagebuch: Teufelsanbetung auf Grimsted Hus | S098_Bild_06 | S098_Bild_07 → `ho_3f` |
| 3G Daguerreotypie von Signe Andersdotter | S098_Bild_01 (Bild ohne Text – direkt verwenden) | → `ho_3g` |
| 4A Brief von Graf Constantin Constantinowitsch | S099_Bild_01 | S099_Bild_02 → `ho_4a` |
| 4B Esters Tagebuch | S100_Bild_02 | S100_Bild_03 → `ho_4b` |
| 4C Die Tarotkarten | S100_Bild_01 (Bild ohne Text, Kartentitel englisch klein im Bild – beim Zeigen deutsche Bildunterschrift: Der Stern, Drei der Schwerter, Der Eremit) | → `ho_4c` |

---

## 7. Startauftrag für jede Sonnet-Sitzung (zum Kopieren)

> Lies `plan/VAESEN_SEASONS_PLAN.md` im Repo einmoritz-spec/Spielleitertool und setze **Schritt N** um. Vorbild ist der Tanz-der-Träume-Leitstand (`vaesen/js/tanz.js`). Halte dich an Abschnitt 3 (Grundregeln) und das Glossar. Die PDFs hänge ich an. Prüfe jede Ansicht per Screenshot, schick mir die Screenshots, committe ohne Co-Authored-By/Claude-Session und pushe.

## Start-Prompt für Schritt 2 (Feuerherz) – Sonnet, Aufwand niedrig

> Baue „Feuerherz“ (Seasons of Mystery, Buch S. 24–45, PDF 28–49) als Leitstand nach der Schablone „Ein Tanz mit dem Tod“. Lies zuerst `plan/VAESEN_SEASONS_PLAN.md` und `vaesen/js/data/som-tod.js` (Datenformat) sowie `vaesen/js/mys.js` (Engine). Lege `vaesen/js/data/som-feuer.js` mit `VAE_MYS.feuer` an, binde sie in `index.html` und `sw.js` ein (VERSION erhöhen, Bilder `img/som/feuer_*` vorcachen). Die Engine ist bisher auf `tod` zugeschnitten (z. B. `tod_karte_*` in `msViewAn`/`msViewOrte`, Hinweis-Seitenzahlen, `hg.figs`-Reihenfolge in `msViewFg`): verallgemeinere das über Felder in den Daten, ohne Tod zu verändern.
> Regeln: nur der Buchtext, nichts erfunden, komplett auf Deutsch, Seitenangaben „S.“, Karten im Original lassen. Figurenwerte immer am gerenderten Seitenbild (pdftoppm) prüfen, nicht am Text. Handouts 1…: Feuerherz hat ho_2a–ho_2c. Danach alle Tabs per Playwright-Screenshot prüfen (Lücken, Überlauf), Screenshots schicken, committen **ohne** Co-Authored-By/Claude-Session-Zeilen, pushen.
