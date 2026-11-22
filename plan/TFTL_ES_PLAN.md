# The Electric State – Untersetting im Spielleitertool (Bauplan, Schritt 10)

Stand: 22. Nov. 2026. Ergänzt `plan/TFTL_PLAN.md` (Abschnitte 2, 5, 9 gelten weiter). Umsetzung durch mehrere Agenten nach den Paketen in Abschnitt 3. **Alle Standing-Regeln von Moritz gelten** (Kurzfassung in 2.9). Entwürfe: `plan/tftl/mockups/e1-start.jpg`, `e2-reise.jpg`, `e3-karte.jpg`, `e4-reisende.jpg` (Quellen in `plan/tftl/mockups/src/e*.html` + `es.css`; blaue Kästen = Erklärungen, Texte = Platzhalter). **Die Umsetzung muss diesen Entwürfen entsprechen.**

Quelle: `/home/claude/tftl_work/pdf/es.pdf` (236 S., EN). **PDF-Seite (1-basiert) = gedruckte Seite + 4**, pymupdf-Index = gedruckte Seite + 3. Bookviewer-Id `tftl_es`, `off:4` (steht schon in `tftl/js/app.js`). Alle „S.“-Angaben im Tool = gedruckte Seiten. Bilder: `/home/claude/tftl_work/img/es/` (Inventar `plan/tftl/bilder-inventar.tsv`, Spalte `seite` = PDF-Seite).

---

## 1. Inhaltsübersicht

| Kap. | Titel (EN → DE) | gedruckt S. | PDF | ins Tool |
|---|---|---|---|---|
| – | Karte von Pacifica (Vorsatz, Querseite) | – | 2–3 (wiederholt 234–235) | **Karte** (Tab Karte, Schalter „Pacifica“) |
| – | Contents, Impressum | 2–5 | 6–9 | nein |
| 1 | Welcome to the Electric State → Willkommen im Electric State | 6–18 | 10–22 | Nachschlagen „Willkommen“ (Paket C1); i-Pop-up aus „The Electric State“ S. 10–11 |
|  | Playing the Game 8 · The Electric State 10 · This Book 11 · The Journey 12 (Stops, Encounters, Scenes, Ending the Session) · Rolling Dice 16 · Principles of the Game 17 (+ Measuring Time) | | | |
| 2 | The State of Pacifica → Der Staat Pacifica | 19–48 | 23–52 | Nachschlagen „Pacifica“ (C2, C3); Orte → Karte |
|  | Introduction 20 · Where We Are 23 · How We Got Here 25 · Neuronics 31–37 | | 23–41 | C2 |
|  | Pacifica 38 (Karte 39, Los Angeles, Sacramento 40, San Francisco, Norden & Osten 42, Küste & Inseln 43, Probleme & Krisen 43) · The Corporations 44 · Other Nations 46–47 | | 42–52 | C3 |
| 3 | Your Traveler → Deine Reisenden | 49–75 | 53–79 | Nachschlagen „Reisende“ |
|  | Regeln S. 49–65 (Archetyp, Attribute, Würfeln & Forcieren, Gesundheit & Hoffnung, Talente, Persönliches, Ausrüstung & Neurocaster, Reise, Fahrzeug, Spannung, Entwicklung) | | 53–69 | C4 |
|  | Archetypes S. 66–75 (10 Archetypen, je 1 Seite mit Figur) | | 70–79 | E1 (Kachelraster + Daten für Reisende) |
| 4 | Combat & Neuronics → Kampf & Neuronik | 76–109 | 80–113 | Nachschlagen „Kampf & Neuronik“ |
|  | Zonen, Runden, Aktionen, Nahkampf, Fernkampf, Waffen, Hinterhalt, Schaden, Hoffnung verlieren, Gefahren S. 76–89 | | 80–93 | C5 |
|  | Neurocasting, Drohnen, Fahrzeuge, Verfolgungsjagden, Ausrüstung & Reparatur S. 90–109 | | 94–113 | C6 |
| 5 | The Journey → Die Reise | 110–133 | 114–137 | Nachschlagen „Die Reise“ |
|  | Reise planen, beginnen, beenden S. 110–118 · Halte vorbereiten: Schauplatz + D66-Tabellen S. 118–120 | | 114–124 | C7 |
|  | Szene setzen, Hindernis, Bedürfnisse, Lage, Bedrohungen, Neben-NSC, Countdown, Orte S. 121–127 · Halt spielen S. 128–133 | | 125–137 | C8 |
| 6 | Threats → Bedrohungen | 134–151 | 138–155 | Nachschlagen „Bedrohungen“ (C9), Werteblöcke als Karten |
| 7 | Into the Dust (Reise-Abenteuer) | 152–203 | 156–207 | **Reise-Leitstand** (D1–D4) |
|  | Einleitung, Ziel & Route, Fahrzeug, Karte der Route (S. 154–155) · Persönliche Ziele & Bedrohungen der 10 Archetypen + gemeinsame Countdowns (S. 156–159) · Reise-NSC (S. 160) · Spielbeginn (S. 161) | | 158–165 | D1 |
|  | Begegnungen S. 162–168: Die Baustelle 162 · Der Stapel 164 · Drohnenmüdigkeit 164 · Die Scheune 167 · Reisekleidung 167 · Wanderung 167 | | 166–172 | D1 |
|  | Halt 1 „Der Engel in der Maschine“ S. 169–179 (Hindernis 169, Lage 170, Karte Littleville 171, Countdown 171, 10 Orte 173–175, NSC 176–179) | | 173–183 | D2 |
|  | Halt 2 „Mord am Straßenrand“ S. 180–190 (Hindernis 180, Lage 181, Countdown 183, Orte + Gerüchte 184, Karte Liberty 185, Das Angst-System 186, NSC 188–190) | | 184–194 | D3 |
|  | Halt 3 „Drohnenschiff-Friedhof“ S. 191–203 (Hindernis 191, Festival & Playa 193, Lage 194, Die zwei Drohnenschiffe 195, Karte Soleri 196, Countdown 197, Orte 197–198, NSC 198–203) | | 195–207 | D4 |
| 8 | The Lone Traveler (Solo) | 204–219 | 208–223 | **WEGLASSEN** (ebenso alle Solo-/Oracle-/Koop-Hinweise in anderen Kapiteln) |
| Anh. | Character Sheet 220 · Vehicle Sheet 221 · Pre-Made Characters 222–226 · Index 227 | | 224–233 | Bögen nachbauen (E2), vorgefertigte Reisende (E1); Index nein |

Hinweis: „Into the Dust“ verweist auf vorgefertigte Reisende „am Ende des Kapitels“ – sie stehen im Anhang (PDF 226–230). „Outcast“ (Kap. 7) = „Outsider“ (Kap. 3) → beides „Außenseiter(in)“.

---

## 2. Architektur

### 2.1 Grundsatz
The Electric State bleibt Untersetting von Tales from the Loop im Ordner `tftl/` (Route-Präfix `#es/`). Der Bereich ist in `tftl/js/data/bereiche.js` (`es`) und im Dropdown (`toolmenu.js`: `tftl_es` → `tftl/#es`, Logo `electric-state.webp`, Untermenü in der TftL-Spalte) **schon angelegt** – nichts am Dropdown ändern, nur prüfen.
Alles ES-Spezifische liegt in **eigenen Dateien** (`tftl/js/es/…`, `tftl/js/data/es/…`, `tftl/es.css`, `tftl/img/es/…`). In gemeinsame Dateien kommen nur kleine Haken (Paket A1). Grund: An `app.js`, `nach.js`, `index.html`, `sw.js` arbeiten parallel andere Agenten (Things from the Flood, TftL-Kapitel) – **vor jeder Änderung an diesen Dateien neu lesen, nur gezielt mit Edit ändern, nie ganze Datei überschreiben.**

### 2.2 Routen
```
#es  | #es/start                         Vorbereitung (Entwurf e1)
#es/reise[/<teil>[/<abschnitt>]]          Reise-Leitstand (Entwurf e2)
     teil: route | ziele | begegnungen | engel | mord | drohnen   (ohne teil → zuletzt geöffneter, sonst route)
     abschnitt (nur bei Halten): ueberblick | hindernis | lage | orte | nsc | k-<kastenId> | _countdown | _bedrohungen | _fahrzeug
#es/reisende                              Reisende der Gruppe (Entwurf e4)
#es/bogen[/<id>]                          Charakterbogen (ausfüllbares PDF)
#es/fahrzeug                              Fahrzeugbogen (ausfüllbares PDF)
#es/karte[/pacifica|route]                Karte (Entwurf e3)
#es/nach/<tab>[/<set>]/<abschnitt>        Nachschlagen; tab: welt | pacifica | reisende | kampf | reise | bedrohungen
#es/nach/reisende/archetypen[/<id>]       Archetypen-Kachelraster / Detail
#es/galerie                               Galerie (shared/galerie.js)
```
**Tab-Leiste** (bereiche.js, schon vorhanden): Vorbereitung · Reise · Reisende · Karte. **Burger:** Nachschlagen (Willkommen, Pacifica, Reisende, Kampf & Neuronik, Die Reise, Bedrohungen) · Werkzeuge (Charakterbogen, Fahrzeugbogen, Galerie) · Bücher (The Electric State – Rollenspiel). **Kein Spielleiterschirm** (das Buch hat keinen). **i-Knopf:** Pop-up mit dem übersetzten Buchtext „The Electric State“ (S. 10–11, aus Daten C1, Abschnitt `electric-state`).

### 2.3 Farbthema (aus dem PDF gemessen)
| Rolle | Wert | Herkunft |
|---|---|---|
| Kopfzeile `--top` | `#33464a` | Mittelwert der Kapitel-Eröffnungsbilder (Kap. 1 #3a4c4f) |
| Akzent `--acc` (Links, aktiver Tab, NSC-Namen, Pins) | `#3d7378` | Petrol der Karte von Pacifica (#728d91) abgedunkelt |
| Neonrot `--red` (nur „hier sind wir“/aktuell) | `#e3262a` | Kapitel-Emblem / Drohnenlichter |
| Text/Rahmen `--ink` | `#231f20` | Buchtext |
| Fläche `--bg` | `#f0f4f4` | Buchseite |
| Karten `--paper`, `--card` | `#fcfdfd` | |
| Linien `--line` | `#cdd8d8` | |
| leise `--soft` | `#5d6a6c` | |
| dunkler Block `--night` | `#25323a` | |
| Sand `--dust` (Reise-Block, „Reise starten“) | `#cca98b` | Eröffnungsbild „Into the Dust“ |
| erledigt `--done` | `#a3abac` | |

Schriften (Buch → Ersatz, alle schon in `assets/fonts/`): Interstate Condensed Black (Überschriften, schwarz, Versalien) → **Oswald 600** (`oswald-latin-600-normal.woff2`, 500 für Kleines); Caslon Book (Fließtext) → **EB Garamond** (wie TftL); Interstate (Kästen, Werteblöcke, Bedienelemente) → **Jost 500/700**. Überschriften im Buch sind **schwarz** – Akzentfarbe nur für Bedienung.
Bausteine (Vorlage `plan/tftl/mockups/src/es.css`): **Buch-Kasten** `.bx` (weiß, 2,5 px schwarzer Rahmen) für alles, was im Buch ein Kasten ist; **Werteblock** `.stat` (Titel zentriert, 4 Attributfelder, Zeilen Gesundheit/Ausrüstung …); **Abschnittsmarke** `.sq` (kleines schwarzes Quadrat vor Kastenüberschriften wie im Buch); **Klebeband** `.tape` (nur Schmuck an Countdown-Kasten/Karten, sparsam); **Vorlesekasten** `.vl` (linker schwarzer Balken, ohne Beschriftung); Kacheln mit schwarzem Rahmen statt farbigem Band.
CSS: `tftl/es.css` (in index.html nach `style.css`), **alles mit `body.es` eingeleitet** (TftL/Flood bleiben unberührt). Die alten Platzhalterzeilen `body.es{…}` / `body.es .topbar{…}` in `tftl/style.css` (Zeilen ~62–63) entfernen. `meta[name=theme-color]` beim Wechsel in den Bereich `es` auf `#33464a` setzen (zurück auf `#f08a1c` bei tftl).

### 2.4 Renderer: Wiederverwendung und neue Dateien
| Ansicht | Renderer | Wie |
|---|---|---|
| Hülle, Kopfzeile, Burger, Tasten h/b | `tftl/js/app.js` | **wiederverwendet**; Haken: `if(r.area==="es" && window.ES && ES.route){ ES.route(r.page, r.rest, app, tabsEl); return; }` direkt nach `head()/menu()`; `menu()` nimmt `d.nach || window.NACH` und `d.tools || [Standardliste]` aus `BEREICHE[area]` |
| Nachschlagen | `tftl/js/nach.js` | **wiederverwendet per Konfiguration**: `window.renderNach(app, tabs, rest, cfg)`; `cfg` (Standard = heutige TftL-Werte) = `{base:"#es/nach/", book:"tftl_es", tabs:ES.NACH, sets:{…}, data:window.NACHDATA_ES, kacheln:{reisende:"archetypen"}}`. Hart kodierte Werte (`SETS`, `"#nach/"`, `"tftl_core"`, `window.NACH`, `window.NACHDATA`, Typen-Kachelraster) durch `cfg` ersetzen. Neue Blocktypen in `bl()` (s. 2.6), funktionieren dann auch für TftL/Flood. Falls der Flood-Bau `nach.js` schon parametrisiert hat: dessen Schnittstelle nutzen und nur ergänzen. |
| Vorbereitung | **neu** `tftl/js/es/start.js` | wie `start.js` (Kopfband, Kachelraster, Chips, dunkler Block rechts), Daten `data/es/start.js` |
| Reise-Leitstand | **neu** `tftl/js/es/reise.js` | eigene Schablone (Halt ≠ Mysterium), nutzt aber dieselben CSS-Bausteine wie `leitstand.js`: `.lay/.side/.main/.top3/.txt/.side2`, Fluss-Logik `flow()` (Seitenkarten neben Text, sonst darunter), Lightbox `.lbx`, NSC-Pop-up `.nscm`. Taste `b` klappt `.lay` schon global ein (Handler in leitstand.js) |
| Reisende + Würfelprobe + Spannung + Fahrzeug | **neu** `tftl/js/es/reisende.js` | Aufbau wie `kids.js` (Kartenraster, localStorage), eigene Felder |
| Charakter-/Fahrzeugbogen | **neu** `tftl/js/es/bogen.js` | Nachbau S. 220/221, Export/Einlesen über `shared/fillpdf.js` wie `kids.js` (`FillPDF.make`, `data-pdftx`) |
| Karte | **neu** `tftl/js/es/karte.js` | wie `karte.js`, aber zwei Karten (Pacifica/Route), Pins mit Namensschild, rechte Spalte = Liste + Kurzkarte |
| Router ES | **neu** `tftl/js/es/app.js` | `window.ES.route(page, rest, app, tabs)`: verteilt auf start/reise/reisende/bogen/fahrzeug/karte/nach/galerie; setzt Standard-Tabs (bereiche) außer bei `reise` (eigene Leiste); i-Pop-up |
| Galerie | `shared/galerie.js` | `Galerie.reg("tftl_es", …)` in `data/es/galerie-es.js`, Aufruf `Galerie.open("tftl_es")` |

### 2.5 Dateiliste und Script-Reihenfolge
Neue Dateien (A1 legt **alle** als gültige Stubs an, damit `index.html`/`sw.js` nie auf fehlende Dateien zeigen; spätere Pakete überschreiben nur ihre eigenen):
```
tftl/es.css                               Theme + gemeinsame ES-Bausteine (A1); Reise/Reisende/Karte-CSS je in eigenem Block, markiert /* B1 */ /* B2 */ /* E2 */
tftl/js/es/app.js        A1   Router, i-Pop-up
tftl/js/es/start.js      A1
tftl/js/es/reise.js      B1
tftl/js/es/karte.js      B2
tftl/js/es/reisende.js   E2
tftl/js/es/bogen.js      E2
tftl/js/data/es/start.js           A1 (Kacheln, Chips, Reise-Block)
tftl/js/data/es/nach/k1-welt.js    C1
tftl/js/data/es/nach/k2a-geschichte.js  C2
tftl/js/data/es/nach/k2b-pacifica.js    C3
tftl/js/data/es/nach/k3-reisende.js     C4
tftl/js/data/es/nach/k4a-kampf.js       C5
tftl/js/data/es/nach/k4b-neuronik.js    C6
tftl/js/data/es/nach/k5a-planung.js     C7
tftl/js/data/es/nach/k5b-halte.js       C8
tftl/js/data/es/nach/k6-bedrohungen.js  C9
tftl/js/data/es/archetypen.js      E1
tftl/js/data/es/vorgefertigt.js    E1
tftl/js/data/es/reise.js           D1 (Rahmen, Route, Fahrzeug, Spielbeginn)
tftl/js/data/es/reise-ziele.js     D1 (Ziele & Bedrohungen, gemeinsame Countdowns, Reise-NSC)
tftl/js/data/es/reise-begegnungen.js D1
tftl/js/data/es/halt-engel.js      D2   (+ halt-engel-2.js, falls zu groß – Stub existiert)
tftl/js/data/es/halt-mord.js       D3   (+ halt-mord-2.js)
tftl/js/data/es/halt-drohnen.js    D4   (+ halt-drohnen-2.js)
tftl/js/data/es/karte.js           B2 (Pins, Ortsliste) – Pins setzt D5
tftl/js/data/es/galerie-es.js      D5
tftl/img/es/…                      D5 (Bilder, s. Paket D5)
```
`index.html`: nach `<link rel="stylesheet" href="style.css">` → `<link rel="stylesheet" href="es.css">`. Scripts **nach** `js/leitstand.js` und **vor** `js/app.js` in dieser Reihenfolge: `../shared/galerie.js` (falls noch nicht eingebunden, + `../shared/galerie.css`), alle `js/data/es/…` (start, nach/k1…k6, archetypen, vorgefertigt, reise, reise-ziele, reise-begegnungen, halt-engel, halt-engel-2, halt-mord, halt-mord-2, halt-drohnen, halt-drohnen-2, karte, galerie-es), dann `js/es/start.js`, `js/es/reise.js`, `js/es/karte.js`, `js/es/reisende.js`, `js/es/bogen.js`, `js/es/app.js`. (`app.js` muss zuletzt kommen, weil es sofort `render()` aufruft.)
`sw.js`: alle obigen Dateien in `FILES` (A1); Bilder `tftl/img/es/*.webp` trägt D5 ein (nur Karten, Kopfband und Kachelbilder vorab; Galerie-Dateien nicht – die lädt der Fetch-Handler bei Bedarf); `VERSION` erhöht nur **F1** am Ende (und A1 einmal).

### 2.6 Datenformate
Alle Texte vollständig übersetzt (Glossar 2.8), HTML in Backtick-Strings, `class='…'` mit einfachen Anführungszeichen in "-Strings, kein `${`, nach jeder Datei `node --check`. `s` = **gedruckte** Seite.

**Werteblock (überall gleich):**
```js
{name:"Bauarbeiter", s:162, w:[["Stärke",4],["Geschick",3],["Verstand",2],["Empathie",3]],
 z:[["Gesundheit","4"],["Ausrüstung","Improvisierte Keule, Neurocaster, D6 × 10 $"]], html:"<p>optional Fließtext</p>"}
```
Weitere Zeilen je nach Buch: `["Hoffnung",…]`, `["Talent",…]`, `["Rumpf",…]`, `["Panzerung",…]`, `["Waffen",…]`, `["Neurolandschafts-Waffe",…]`, `["Manövrierbarkeit",…]`, `["Tempo",…]`. Reihenfolge wie im Buch.

**Nachschlagen** (`window.NACHDATA_ES = window.NACHDATA_ES || {}; window.NACHDATA_ES.k1 = {kap:"Kapitel 1", titel:"Willkommen im Electric State", s:6, abschnitte:[{id, titel, s, bloecke:[…]}]}`), Abschnitte = Unterkapitel aus den PDF-Lesezeichen (Ebene 2; Ebene 3 als `["h",…]` im Abschnitt). Blocktypen wie TftL `["p",html]`, `["h",text]`, `["liste",[…]]`, `["kasten",titel,[absätze]]`, `["tabelle",[kopf],[[zeile],…]]` **plus neu** (Renderer in A1):
- `["zit", html, quelle?]` – Zitat/Erzähltext (im Buch kursiv-fett mit „-Zeichen und schwarzem Balken)
- `["bsp", [[sprecher, text], …]]` – Beispiel-Dialog (Spielleitung/Reisende 1 …) als Karte
- `["stat", {Werteblock}]` – als Kasten im Buch-Stil
- `["w", titel, würfel, [[ergebnis, text], …], s?]` – Zufallstabelle (`würfel` = "D6" | "D66" | "2D6"), Renderer zeigt Tabelle + Würfelknopf, der ein Ergebnis würfelt und die Zeile hervorhebt
- `["bild", datei, {klein:1}?]` – Bild aus `tftl/img/es/` (nur von D5 gesetzt)

**Vorbereitung** (`data/es/start.js`): `ES.START = {hero:"es/hero", welt:[[titel, untertitel, "Kap. 1 · S. 6", bild, route], …], spiel:[…], chips:[[text, route, voll?]], reise:{name:"Into the Dust", s:152, bild:"es/r-dust", halte:["engel","mord","drohnen"], start:"San Francisco Memorial City", ziel:"Grenzübergang Primm", zahl:"Into the Dust · Kap. 7 · S. 152 · 3 Halte · 6 Begegnungen"}}`. Untertitel = Unterkapitelnamen aus dem Buch (Inhaltsverzeichnis), keine eigenen Texte.

**Reise-Rahmen** (`data/es/reise.js`):
```js
window.ES = window.ES || {}; ES.HALTE = ES.HALTE || {};
ES.REISE = {id:"dust", name:"Into the Dust", s:152, bild:"es/r-dust", buch:"tftl_es",
 start:{name:"San Francisco Memorial City"}, ziel:{name:"Grenzübergang Primm"}, halte:["engel","mord","drohnen"],
 route:[ {id:"einleitung", titel, s, html}, {id:"ziel", titel:"Ziel & Route", s:154, html},
         {id:"fahrzeug", titel, s:154, html, fahrzeug:{name:"Buick Roadmaster Estate (1993)", antrieb:"2WD", eigenschaften:["Geräumig","Schwer"], w:[["Manövrierbarkeit","+2"],["Tempo",3],["Rumpf",8],["Panzerung",4]]}},
         {id:"ersatz", titel:"Ersatz-Reisende", s:154, box:1, html}, {id:"spielbeginn", titel:"Spielbeginn", s:161, html} ] };
```
**Ziele & Bedrohungen** (`reise-ziele.js`): `ES.ZIELE = {intro:{s:156, html}, gemeinsam:{s:156, html}, nscIntro:html, archetypen:{kuenstler:{s:156, text:html, ziel, bedrohung, countdown:[…], hinweis?}, …}, nsc:{soldaten:{Werteblock + html}, …}}` – Schlüssel = Archetyp-Ids aus 2.8 (`kuenstler, krimineller, anhaenger, arzt, aussenseiter, drohnenpilot, ermittler, ausreisser, wissenschaftler, veteran`). Countdown-Schritte als einzelne Strings (Buch: nummeriert).
**Begegnungen** (`reise-begegnungen.js`): `ES.BEGEGNUNGEN = [{id:"baustelle", name:"Die Baustelle", s:162, html, stat:[Werteblock…], bilder:[]}, …]` (Reihenfolge wie im Buch, die Buchstaben-Marken des Buchs weglassen).
**Halt** (`halt-<id>.js`):
```js
ES.HALTE.engel = {id:"engel", name:"Der Engel in der Maschine", s:169, bild:"es/h-engel", lage:"Stockton",
 abschnitte:[
  {id:"ueberblick", titel:"Der Engel in der Maschine", s:169, vl:"<p>Einleitungs-Erzähltext (Zitat unter dem Titel)</p>", html:"<p>This Stop is designed …</p>"},
  {id:"hindernis", titel:"Das Hindernis", s:169, html:"… <div class='vl'>Vorlesetext</div> … <h3>Wo sind wir?</h3> …"},
  {id:"lage", titel:"Die Lage", s:170, html},
  {id:"orte", titel:"Orte", s:173, html:"Einleitung falls vorhanden", orte:[{id:"ramona", name:"Ramona’s Food & Liquor", s:173, html, kaesten:[{t, html, stat?}], stat:[…]}, …]},
  {id:"nsc", titel:"NSC", s:176, nsc:[{id:"ramona", name:"Ramona Lopez", s:176, bild:"es/n-ramona", html, stat:{Werteblock}}, …]},
  {id:"k-autos", titel:"Autos auf den Straßen", s:170, box:1, html}  // Seitenkästen des Buchs, an passender Stelle (Feld bei:"lage" = neben welchem Abschnitt)
 ],
 countdown:[{t:"Kopfsatz", mehr:"Rest des Schritts"}, …], countdownS:171,
 karte:{bild:"es/karte-littleville", s:171, pins:[{ort:"ramona", x:31.0, y:30.0}, …]} };
```
Erster Satz eines Countdown-Schritts = `t`, Rest = `mehr` (aufklappbar, wie TftL). NSC-Erwähnungen im Text: erste Nennung je Abschnitt als `<a class='nsc' data-n='<id>'>Name</a>` (explizit, keine Automatik). Halt-spezifische Zusatzteile (Gerüchte, Das Angst-System, Festival und Playa, Die zwei Drohnenschiffe, Zufällige Festivalgruppen) als eigene Abschnitte mit eigener `id`, Zufallstabellen als `w:[würfel,[[e,t],…]]`-Feld im Abschnitt.

**Archetypen** (`archetypen.js`): `ES.ARCHETYPEN = [{id:"kuenstler", name:"Künstler(in)", s:66, bild:"es/a-kuenstler", zitat:{t, von}, html, schluessel:"Empathie", geld:"D6 × 100 $", talente:[["1–2","Charmeur"],…], traum:[[w,t],…], schwaeche:[[w,t],…], neurocaster:[[w,t],…], gegenstand:[[w,t],…]}, …]` (10 Einträge, Buchreihenfolge).
**Vorgefertigt** (`vorgefertigt.js`): `ES.VORGEFERTIGT = [{id:"cade", name:"Cade/Courtney Draper", archetyp:"kuenstler", s:222, text:html, a:{st:3,ge:3,ve:4,em:6}, ges:3, hof:5, talente:["Musiker"], traum, schwaeche, song, ausruestung:[…], neurocaster}, …]` – Werte von den Bögen PDF 227–230 ablesen (handschriftlich, rendern mit dpi 110).

**Spielstand (localStorage):** `es_reise_v1` = `{teil, ab:{<halt>:abschnitt}, pos:"engel", fertig:{engel:1}, cd:{engel:[true,…]}, orte:{engel:{ramona:1}}, beg:{baustelle:1}, pz:{<reisenderId>:[true,false,false]}}`; `es_reisende_v1` = Liste der Reisenden (Feldnamen wie Bogen); `es_fahrzeug_v1`; `es_last` (für „Weiterfahren“: `{teil, ab, name, ort}`).

### 2.7 Ansichten im Detail (Entwürfe)
**e1 Vorbereitung:** Kopfband `es/hero` (Sentre-Plakatwand, S. 36–37), 170 px. Links „Vorbereitung“ (Linie schwarz): **Die Welt** (Willkommen · Pacifica · Bedrohungen), **Das Spiel** (Reisende · Kampf & Neuronik · Die Reise), je 3er-Raster, Kachel = Kapitel-Eröffnungsbild (Doppelseite) + Titel Oswald + Unterkapitel + „Kap. · S.“. Chips: Charakterbogen (gefüllt) · Fahrzeugbogen · Karte von Pacifica · Galerie. Rechts dunkler Block „Reise“ (Oberkante Sand): Weiterfahren (zuletzt), drei Halt-Bilder 150 px hoch mit Namen, Linie Start–Ziel, Reisende der Gruppe (Name + Archetyp aus `es_reisende_v1`, ausgeblendet wenn leer), Zeile „Into the Dust …“, Knopf **Reise starten** (Sand) → `#es/reise`. Keine Erklärtexte.
**e2 Reise-Leitstand:** Die Tab-Leiste wird ersetzt (wie TftL-Leitstand): kleines Bild + „Into the Dust“ (→ `#es/start`), Tabs **Route · Ziele & Bedrohungen · Begegnungen**, dann die **Routenleiste**: leerer Kreis (Start, Titel-Tooltip), Straße, Halte als Knoten mit Namen (Oswald 14 px, keine Nummern), Straße, leerer Kreis (Ziel); Straße bis zum aktuellen Halt durchgezogen schwarz, danach gestrichelt; aktueller Halt roter Punkt mit Schein, erledigte schwarz gefüllt + grau. Rechts Stift (Notizen, wie TftL). Klick auf Knoten = Halt öffnen und als „hier sind wir“ setzen. Unter 1300 px Breite Schrift 13 px, Abstände kleiner (alles muss bei 1280 in eine Zeile passen).
- **Halt:** Seitenleiste (einklappbar ‹ / `b`, sticky): Halt-Name als Kopf, *Überblick* (Karte · Countdown), *Das Hindernis*, *Die Lage*, *Orte* („x von n besucht“, darunter eingerückt alle Ortsnamen = Sprungmarken, besuchte grau), *NSC*, Zusatzabschnitte des Halts; „Immer zur Hand“: Countdown · Persönliche Bedrohungen („n laufen“) · Fahrzeug. **Überblick:** Reihe `.top3` = Halt-Karte (Seitenausschnitt, Pins nur an im Buch beschrifteten Orten, kleines Namensschild, Klick → Ort; besucht grau, gewählt rot) · Countdown-Kasten (`.bx` mit Klebeband, Schritte anklickbar = grau, „mehr“ aufklappbar) · Persönliche Bedrohungen (je Reisende(r) Name + Archetyp, Bedrohung, 3 Balken = Countdown-Schritte anklickbar; Klick auf Karte öffnet die Schritte; ohne Gruppe: alle Archetypen ausgegraut nicht zeigen, sondern Hinweis-Knopf „Reisende anlegen“ → `#es/reisende`). Darunter Titel + S., Vorlesekasten, Text; Eröffnungsbild (Hochformat) rechts schwebend 300 px, Text fließt daneben und darunter. **Orte:** alle Orte flach untereinander (Nights-Regel), Überschrift + S., Klick auf Überschrift = besucht (grau, ohne Häkchen), Kästen des Orts (Werteblöcke, Seitenkästen) rechts als `.side2` mit `flow()`. **NSC:** Raster 3 Spalten, Karte = kleines Porträt (Bild nur, wenn im Buch zur Figur) links oben im Kartenkopf, Name, Text, Werteblock; Namen im Text öffnen dieselbe Karte als Pop-up. Einklappbare Seitenleiste muss Layout intakt lassen.
- **Route:** links Routen-Karte (S. 154–155, Pins Start/Halte/Ziel wie e3), rechts Ziel & Route, Fahrzeug als Werteblock, Ersatz-Reisende als Kasten; darunter Einleitung + Spielbeginn (Gruppenfragen als Liste) über volle Breite.
- **Ziele & Bedrohungen:** Einleitung (Kurztext) + Kasten „Gemeinsame Countdowns“; Raster 5×2 Archetyp-Karten (zugeklappt: Name, S., Ziel, Bedrohung; aufgeklappt: Hintergrund + Countdown + Hinweis); Archetypen der Gruppe zuerst und mit Rahmen in Akzentfarbe, Countdown-Schritte dort anklickbar (Zustand je Reisende(r) in `pz`). Darunter Reise-NSC als Raster aus Werteblöcken (8 Stück, S. 160).
- **Begegnungen:** Raster 3×2 Karten (Bild nur bei Baustelle, Stapel, Scheune – siehe D5), Titel + S., Text, Werteblöcke; Klick auf Titel = erledigt (grau).
**e3 Karte:** Schalter **Pacifica · Reiseroute** (schwarz gerahmt), Karte füllt die Höhe (`height: calc(100vh - 186px)`, `aspect-ratio` des Bilds, linksbündig), Klick = Zoom/Verschieben (wie TftL `karte.js`). Rechts Liste (füllt Restbreite): Block „Into the Dust“ (Start, drei Halte, Ziel; aktueller Halt rot, Auswahl zeigt Kurzkarte mit Name, Lage-Satz aus dem Buch und „Zum Halt ›“) und Block „Pacifica“ (Unterkapitel aus Kap. 2 S. 38–47: Los Angeles, Sacramento, San Francisco, Der Norden und Osten, Die Küste und die Inseln, + Blackwelt-Sperrzone S. 46; Klick → Nachschlagen-Abschnitt). Pins nur für Orte, die auf der jeweiligen Karte beschriftet sind (sonst grauer Ring in der Liste, kein Pin). Halt 2 liegt laut Buch nur „in der Sierra Nevada“ → Pin auf der Route im Sierra-Abschnitt **gestrichelt** (ungefähre Lage), ohne Erklärtext.
**e4 Reisende:** Kopf „Unsere Reisenden“ + Chips (+ Reisende(r) · Vorgefertigte Reisende (Auswahl der 4 aus dem Anhang) · Bogen einlesen (PDF) · Leerer Bogen). Raster 4 Spalten (`repeat(4,minmax(0,1fr))`): links Archetyp-Figur (Freisteller, `contain`, unten bündig), rechts Name (Klick → `#es/bogen/<id>`), Archetyp · Lieblingssong, 4 Attributfelder (unter 1400 px Kürzel **STÄ · GES · VER · EMP**, damit nichts abgeschnitten wird), Gesundheit/Hoffnung (Punkte = Maximum, anklickbar), Rausch (Punkte in Akzentfarbe, Warnfarbe rot, wenn Rausch ≥ aktuelle Hoffnung), Talente, Traum, (Schwäche, Ausrüstung, Neurocaster einklappbar), Block „Reise“: Ziel, Bedrohung, Countdown-Balken (aus `ES.ZIELE` nach Archetyp, gleicher Zustand wie im Leitstand). Darunter Reihe: **Spannung** (Matrix „von ↓ zu →“, Werte 0–2, Klick zählt 0→1→2→0, S. 64), **Fahrzeug** (aus `ES.REISE` vorbelegt, Rumpf-Punkte anklickbar, Knopf Fahrzeugbogen), **Würfelprobe** (Reisende wählen, Attribut, + Ausrüstungsbonus, + Spannung als Bonuswürfel; Erfolg = jede 6; „Forcieren“ würfelt alle Nicht-6 neu und zieht 1 Hoffnung ab – Regeln genau nach S. 53–54 prüfen und so umsetzen). Höchstwerte: Gesundheit = ⌈(Stärke+Geschick)/2⌉, Hoffnung = ⌈(Verstand+Empathie)/2⌉ (S. 54–55; Talente „Zäh“/„Träumer“ +1 wie im Buch).
**Bögen:** Charakterbogen S. 220 und Fahrzeugbogen S. 221 möglichst originalgetreu nachbauen (Logo oben links, Felder und Kästen wie im Buch, Klebeband-Ecken), Export als ausfüllbares PDF (`FillPDF.make`), Einlesen eines exportierten Bogens legt die/den Reisende(n) an (Feldnamen = `data-p` der Felder).

### 2.8 Glossar (verbindlich für alle Übersetzer)
Traveler → Reisende(r) (Mehrzahl „die Reisenden“) · Journey → Reise · Stop → Halt (Mz. Halte) · Encounter → Begegnung · Blocker → Hindernis · Situation → Lage · Need → Bedürfnis · Threat → Bedrohung · Personal Goal/Threat → persönliches Ziel / persönliche Bedrohung · Countdown → Countdown · Kicker → Aufhänger · Location → Ort · Scene → Szene · GM → Spielleitung (SL) · Destination → Ziel · Starting Point → Startpunkt · Route → Route.
Attribute: Strength → Stärke · Agility → Geschick · Wits → Verstand · Empathy → Empathie. Health → Gesundheit · Hope → Hoffnung · Bliss → Rausch · Tension → Spannung · Breakdown → Zusammenbruch · Incapacitated → kampfunfähig · Trauma → Trauma · Push → forcieren · Talent → Talent · Dream → Traum · Flaw → Schwäche · Favorite Song → Lieblingssong · Gear → Ausrüstung · Cash → Bargeld · Encumbrance → Traglast · Improvement Roll → Steigerungswurf · Shared Items → gemeinsame Gegenstände.
Neuronics → Neuronik · Neurocaster → Neurocaster · Neurocasting → Neurocasten · Neuroscape → Neurolandschaft · Neurine → Neurin · Neurograph tower → Neurographenturm · Drone → Drohne · Drone Growth → Drohnenwucherung · Intercerebral Intelligence → interzerebrale Intelligenz · The Convergence → die Konvergenz · Avatar → Avatar · Mode 6 → Modus 6 · Electric State → Electric State (Eigenname) · Blackwelt Exclusion Zone → Blackwelt-Sperrzone · Pacifica, Sentre, Happy-Cool, LifeBuddy, Grizzly Burger → unverändert.
Fahrzeug: Maneuverability → Manövrierbarkeit · Speed → Tempo · Hull → Rumpf · Armor → Panzerung · Traits → Eigenschaften (Roomy → Geräumig, Heavy → Schwer, …) · Chase → Verfolgungsjagd. Kampf: Zone → Zone · Range: Engaged/Short/Medium/Long/Extreme → Nahkontakt/Kurz/Mittel/Weit/Extrem · Cover → Deckung · Ambush → Hinterhalt · Damage → Schaden · Serious Injury → schwere Verletzung.
Archetypen (Id): Artist → Künstler(in) `kuenstler` · Criminal → Kriminelle(r) `krimineller` · Devotee → Anhänger(in) `anhaenger` · Doctor → Ärztin/Arzt `arzt` · Drone Pilot → Drohnenpilot(in) `drohnenpilot` · Investigator → Ermittler(in) `ermittler` · Outsider/Outcast → Außenseiter(in) `aussenseiter` · Runaway Kid → Ausreißer(in) `ausreisser` · Scientist → Wissenschaftler(in) `wissenschaftler` · Veteran → Veteran(in) `veteran`.
Halte/Begegnungen: The Angel in the Machine → Der Engel in der Maschine (`engel`) · Roadside Murder → Mord am Straßenrand (`mord`) · Droneship Graveyard → Drohnenschiff-Friedhof (`drohnen`) · The Roadworks → Die Baustelle · The Stack → Der Stapel · Drone Fatigue → Drohnenmüdigkeit · The Barn → Die Scheune · Traveling Clothes → Reisekleidung · Migration → Wanderung. Kapitel: Welcome to the Electric State → Willkommen im Electric State · The State of Pacifica → Der Staat Pacifica · Your Traveler → Deine Reisenden · Combat & Neuronics → Kampf & Neuronik · The Journey → Die Reise · Threats → Bedrohungen · Into the Dust → Into the Dust (Titel bleibt).
**Eigennamen bleiben** (Personen, Firmen, Läden, Bars, Orte, Songs, Bands, Filme: „Ramona’s Food & Liquor“, „Burger Box“, „Amador Inn“, „Church of the Angels“, „Liberty“, „Soleri“). Beschreibende Bezeichnungen werden übersetzt (Residential Houses → Wohnhäuser, Hot Springs → Heiße Quellen, Police Roadblock → Polizeisperre, The Neurosphere → Die Neurosphäre, RV Row → Wohnmobil-Reihe, Supply Air Drop Area → Abwurfzone für Nachschub). Würfel: D6, D66, 2D6, „🎲“ nicht verwenden. Geld „$“ → „100 $“. Seitenverweise „page 54“ → „S. 54“.

### 2.9 Regeln (Kurzfassung, verbindlich)
Nur Buchtext, vollständig übersetzt, nichts erfinden (keine Tipps, keine Kurzüberblicke) · Solo/Oracle/Koop weglassen · alles Deutsch · „S.“ nie „Seite“ · Daten in vielen Dateien · Bilder nur, wenn sie im Buch zu genau diesem Inhalt gehören, ungeschnitten, ohne Bildunterschrift-Texte aus dem Buch · Gegnerbilder klein in deren Karte · Kopfzeile nur Logo + Dropdown, rechts i, Buch, Burger · Tabs nur Namen · Notizen nur Stift · Vorlesekästen ohne Beschriftung · keine Breadcrumbs · Seitenleiste nur bei mehreren Abschnitten, einklappbar (‹, `b`), sticky, lange Titel bis zum Doppelpunkt · `h` blendet Kopfzeile aus · Breite nutzen, keine Spaltenflüsse, keine leeren Spalten · Klick-zum-Erledigen = grau ohne Kästchen/Durchstreichen · Viewport 1280 auf dem Handy · jede Ansicht per Screenshot prüfen (1440×900, 1280×800, Seitenleiste eingeklappt) · neue Dateien in `sw.js` · Commits (falls verlangt) ohne Co-Authored-By/Claude-Session.

---

## 3. Arbeitspakete

Wellen: **Welle 1** (parallel): A1, C1–C9, D1–D4, E1. **Welle 2** (nach A1; D5 nach D1–D4; B1 nach A1 und mind. D2; E2 nach A1 + E1 + D1): B1, B2, D5, E2. **Welle 3:** F1. Datenpakete schreiben **nur** ihre eigenen Dateien. Gemeinsame Dateien (`app.js`, `nach.js`, `bereiche.js`, `index.html`, `style.css`, `sw.js`) ändert nur A1, `sw.js`-Bildliste nur D5, `VERSION` nur A1 und F1. Jedes Paket endet mit `node --check` aller eigenen JS-Dateien und einem Kurzbericht (≤ 5 Sätze: was, S., Unsicherheiten).

Screenshot-Werkzeug für alle: Vorlage `/home/claude/shot6.py` (Playwright, `/usr/bin/google-chrome`, Route-Handler `http://tafel.test/` → Repo). Hashes z. B. `#es/start`, `#es/reise/engel/ueberblick`. Bilder per Read ansehen.

### A1 – Infrastruktur, Theme, Router, Vorbereitung
- **Ziel:** ES-Bereich lauffähig: Theme, Router, Burger, i-Pop-up, Vorbereitung (e1), Nachschlage-Renderer konfigurierbar, alle Stubs.
- **Eingabe:** Entwurf e1, `es.css`, `e1-start.html`; Buch S. 2–3 (Inhalt), Eröffnungsbilder.
- **Ausgabe:** `tftl/es.css`, `tftl/js/es/app.js`, `tftl/js/es/start.js`, `tftl/js/data/es/start.js`; Stubs aller Dateien aus 2.5 (`/* Stub – Paket X */ window.ES = window.ES || {};` bzw. leere Objekte im richtigen Format, z. B. `window.NACHDATA_ES = window.NACHDATA_ES || {};`); Änderungen: `app.js` (Haken 2.4, theme-color), `bereiche.js` (`es.nach = [["welt","Willkommen"],["pacifica","Pacifica"],["reisende","Reisende"],["kampf","Kampf & Neuronik"],["reise","Die Reise"],["bedrohungen","Bedrohungen"]]`, `es.tools = [["bogen","Charakterbogen"],["fahrzeug","Fahrzeugbogen"],["galerie","Galerie"]]`, `es.books = ["tftl_es"]`), `nach.js` (cfg-Parameter + Blocktypen `zit`, `bsp`, `stat`, `w` mit Würfelknopf, `bild`; TftL-Verhalten unverändert), `index.html` (2.5), `style.css` (alte `body.es`-Zeilen raus), `sw.js` (alle neuen Dateien, VERSION +1).
- **Vorübergehend:** Kachelbilder in `tftl/img/es/` sind erst nach D5 da → A1 kopiert die sechs Kachelbilder + Hero + `r-dust` + drei Halt-Bilder aus `plan/tftl/mockups/src/img/es-*.webp` nach `tftl/img/es/<name ohne es->.webp` (D5 ersetzt sie in besserer Qualität, gleiche Namen: `hero, w-welcome, w-pacifica, w-bedrohungen, w-reisende, w-kampf, w-reise, r-dust, h-engel, h-mord, h-drohnen`).
- **Abnahme:** `#es/start` sieht aus wie e1 (1440 und 1280); TftL-Seiten (`#start`, `#nach/kids`, `#m/killerbirds/loesung`) unverändert (Vorher/Nachher-Screenshot); Dropdown-Eintrag „The Electric State“ führt nach `#es/start`; Burger zeigt ES-Nachschlagen; `#es/nach/welt` zeigt Stub ohne Fehler; keine Konsolenfehler; `sw.js` installiert (alle FILES vorhanden: kurzer Node-Check, dass jede Datei existiert).

### B1 – Reise-Leitstand-Renderer (`tftl/js/es/reise.js`, CSS-Block `/* B1 */` in `es.css`)
- **Ziel:** e2 vollständig: Routenleiste, Route, Ziele & Bedrohungen, Begegnungen, Halt-Schablone mit allen Abschnittsarten, Spielstand, Notizen-Stift (gleiches Notizsystem wie TftL-Leitstand; falls dort nur Symbol: genauso).
- **Eingabe:** Datenformate 2.6, Entwurf e2, `leitstand.js` (Bausteine), Daten aus D1/D2 (zum Testen mind. `halt-engel.js`).
- **Ausgabe:** `tftl/js/es/reise.js`, CSS-Block in `tftl/es.css`.
- **Abhängigkeiten:** A1; Test mit D1 + D2 (D3/D4 nur Struktur gleich).
- **Abnahme:** Screenshots `#es/reise/route`, `/ziele`, `/begegnungen`, `/engel/ueberblick`, `/engel/orte`, `/engel/nsc`, `/engel/_countdown` bei 1440 und 1280, jeweils auch Seitenleiste eingeklappt; Routenleiste passt bei 1280 in eine Zeile; Countdown/Orte/Begegnungen/persönliche Countdowns klicken → grau und bleiben nach Neuladen; NSC-Pop-up öffnet; keine leere Spalte (Fluss-Logik prüfen); `es_last` wird gesetzt und auf der Vorbereitung als „Weiterfahren“ gezeigt.

### B2 – Karte (`tftl/js/es/karte.js`, `tftl/js/data/es/karte.js`, CSS `/* B2 */`)
- **Ziel:** e3: Schalter Pacifica/Reiseroute, Zoom, Pins mit Namensschild, Liste rechts mit Kurzkarte, Sprung zu Halt bzw. Nachschlagen.
- **Datenformat:** `ES.KARTE = {bilder:{pacifica:"es/karte-pacifica", route:"es/karte-route"}, reise:[{id:"start", name, pin:{route:[x,y]}}, {id:"engel", halt:"engel", s:169, lage:"…Satz aus dem Buch…", pin:{route:[x,y], pacifica:[x,y]}}, …, {id:"mord", …, ungefaehr:1}], pacifica:[{id:"la", name:"Los Angeles", s:40, nach:"pacifica/k2b/los-angeles", pin:{pacifica:[x,y]}}, …]}` (Pins in % des Bilds; D5 trägt die Koordinaten ein, B2 setzt vorläufige Werte aus dem Entwurf `e3-karte.html`).
- **Abhängigkeiten:** A1 (Karten-Bilder liefert D5; bis dahin die Entwurfsbilder `plan/tftl/mockups/src/img/es-karte-*.webp` nach `tftl/img/es/karte-*.webp` kopieren).
- **Abnahme:** wie e3 bei 1440/1280, keine Lücke zwischen Karte und Liste, Zoom funktioniert, Klick auf Halt → `#es/reise/<halt>/ueberblick`.

### C1–C9 – Nachschlagen (Übersetzung)
Je Paket **eine** Datei `tftl/js/data/es/nach/<datei>.js` im Format 2.6 (`window.NACHDATA_ES.<key> = {…}`). Vollständig übersetzen inkl. aller Seitenkästen (`kasten`), Tabellen (`tabelle` bzw. Zufallstabellen `w`), Beispiel-Dialoge (`bsp`), Zitate (`zit`), Werteblöcke (`stat`). Gliederung = PDF-Lesezeichen (`doc.get_toc()`, Seiten dort = PDF-Seiten → minus 4). Bilder setzt D5 (keine `bild`-Blöcke einfügen). Unklare Stellen (Tabellen, Kästen): Seite mit dpi 70 rendern und ansehen.

| Paket | key / Datei | PDF-Seiten | gedr. S. | Inhalt (Abschnitte) |
|---|---|---|---|---|
| C1 | `k1` / `k1-welt.js` | 10–22 | 6–18 | Einleitung (Erzähltext S. 8), Das Spiel spielen (+ Kasten Sicherheitswerkzeuge), **Der Electric State** (`id:"electric-state"`, für i-Pop-up; Kasten 90er-Nostalgie, Bürgerkrieg, Neuronik, Seltsame Ereignisse, Ein Rest Hoffnung), Dieses Buch (+ Kasten Was ist ein Rollenspiel?), Die Reise (Halte, Begegnungen, Szenen, Sitzung beenden), Würfeln (D6, 2D6 & D66), Kästen Drama/Horror/Wachstum und Reisen anderswo, Prinzipien des Spiels, Kasten Zeit messen (+ Tabelle Zeiteinheiten) |
| C2 | `k2a` / `k2a-geschichte.js` | 23–41 | 19–37 | Einleitung (+ Kästen Die Welt zusammengefasst, Ein Ort zum Anfangen), Wo wir stehen, Wie es dazu kam (Abzweigung, Bürgerkrieg, Neuronik im Krieg, Kriegsende, Wiederaufbau, Sentre übernimmt, Modus 6), Neuronik (Drohnen, Kasten Vanadium-Redox-Batterien, Roboter, Neurocaster, Neurolandschaften, Neurin-Sucht, angeborene neurologische Störung, Techno-Kulte, Drohnenwucherungen & interzerebrale Intelligenzen, Die Konvergenz, Low Tech) |
| C3 | `k2b` / `k2b-pacifica.js` | 42–52 | 38–48 | Pacifica (Das Land, Los Angeles, Sacramento, San Francisco, Der Norden und Osten, Die Küste und die Inseln, Probleme & Krisen), Die Konzerne (Sentre, Happy-Cool, LifeBuddy, Grizzly Burger), Andere Staaten (Northern Union, Blackwelt-Sperrzone, Libertania, South Republic, Kanada, Mexiko). Abschnitt-Ids so, dass B2 verlinken kann: `land, los-angeles, sacramento, san-francisco, norden-osten, kueste-inseln, probleme, konzerne, andere-staaten, blackwelt` (Blackwelt als eigener Abschnitt) |
| C4 | `k3` / `k3-reisende.js` | 53–69 | 49–65 | Einleitung (+ Kästen Reisende erschaffen [17 Schritte, Liste], Reisende & Reisen), Archetyp, Attribute (+ Kasten Alternative Methode), Würfeln & Forcieren (eigene Würfel, NSC & Forcieren, Ausrüstung, mehrere Erfolge, Helfen, vergleichende Würfe), Gesundheit & Hoffnung (+ Neuronik & Rausch), Talente (Tabelle Talente, Kasten Weitere Talente), Persönliches (Traum, Schwäche, Lieblingssong + `w` D66 „Lieblingssong der 90er“, Beschreibung, Name), Ausrüstung & Neurocaster (+ Kasten Traglast), Die Reise (persönliches Ziel/Bedrohung), Euer Fahrzeug (+ Kasten Fragen, gemeinsame Gegenstände + Tabelle), Spannung (+ Kästen Beispiele, Dreiecke), Reisende entwickeln. **Ohne** die Archetypen-Seiten (E1) |
| C5 | `k4a` / `k4a-kampf.js` | 80–93 | 76–89 | Einleitung, Zonen & Reichweite (+ Kästen), Runden & Initiative, Aktionen & Bewegungen (+ Kasten Beispielaktionen), Nahkampf, Fernkampf (+ Tabelle Deckung, Munition & Dauerfeuer), Tabelle Waffen, Hinterhalte, Schaden (kampfunfähig, Kästen NSC/Körperpanzer + Tabelle, Erholung, Neurocasting-Schaden, schwere Verletzungen + Tabelle), Hoffnung verlieren (traumatische Ereignisse + Tabelle, Kästen, Zusammenbruch, Erholung, Hoffnungs-Schleife, Mentales Trauma + Tabelle), Weitere Gefahren (Explosionen, Feuer, Kälte, Krankheit, Stürze, Hunger & Durst, Schlafmangel – je Tabelle) |
| C6 | `k4b` / `k4b-neuronik.js` | 94–113 | 90–109 | Neurocasten (Neurocaster + Tabelle, kabelgebunden/kabellos, in einer Neurolandschaft, Rausch & Hoffnung, Informationen finden + Tabelle, Netzwerk hacken + Tabelle, mit Avataren umgehen, Kästen), Drohnen (Benutzung, Verbraucher-Drohnen + Tabelle, Militärdrohnen, Drohnenwucherungen, Roboter), Fahrzeuge (Werte + Tabellen, Kästen Treibstoff/Luftfahrzeuge & Boote/Reittiere, Bewegung, Unfälle + 3 Tabellen, Schaden + Tabelle, Luftfahrzeuge), Verfolgungsjagden (Auflösung, Aktionen, Hindernisse + Tabelle), Ausrüstung & Reparatur (Tabelle Dienstleistungen, Kasten Kosten, Tabelle Ausrüstung) |
| C7 | `k5a` / `k5a-planung.js` | 114–124 | 110–120 | Einleitung, Reise planen (Kästen Vorbereitung/Into the Dust, Start & Ziel, Umherziehen, Route, Länge + Tabelle, Kästen Aufzeichnen/Zufallstabellen, persönliche Ziele + Kästen Aufhänger/Warum zusammenbleiben, persönliche Bedrohungen), Reise beginnen, Reise beenden, Halte vorbereiten: Schauplatz mit **allen D6/D66-Tabellen als `w`** (Gelände, Bevölkerung, Kommunikation, Größe, Wohlstand, Wetter, Electric-State-Elemente D66, 90er-Nostalgie D66) |
| C8 | `k5b` / `k5b-halte.js` | 125–137 | 121–133 | Szene setzen (+ Kasten Beispiel), Hindernis (+ `w` Beispiele D66), Bedürfnisse (+ `w` D6), Lage (+ `w` Konflikte), Bedrohungen (+ Kasten Bedrohungsarten), Neben-NSC, Kasten Alte Sünden, Countdown (+ Kasten), Orte (+ Kasten Karte zeichnen, `w` Beispielorte D66), Halt spielen (Sitzung beginnen, NSC-Reaktionen, auf Bedürfnisse hinweisen, Improvisieren + Kästen, Informationssuche, Szenen spielen, in Neurolandschaften spielen + `w`) |
| C9 | `k6` / `k6-bedrohungen.js` | 138–155 | 134–151 | Bedrohungsarten (Ort, Ziel, Eigenschaften, Gesundheit & Hoffnung, anpassen), gewalttätige (Ordnungskräfte, Geheimagenten, Gangmitglieder, irre Mörder – je `stat`), manipulative (Kultisten, lokale Machthaber, Geschäftsleute – je `stat`, Beispiel-Countdowns als Liste), technologische (Kasten Sonderfähigkeiten, Roboter, Drohnenwucherungen, Systeme – je `stat`), Umweltbedrohungen (Extremwetter, Krankheit), persönliche Bedrohungen (Countdowns), Neben-NSC (+ `w` Marotten D66) |

- **Abhängigkeiten:** keine (Format 2.6). **Abnahme:** `node --check`; Datei vollständig (Stichprobe: jede Lesezeichen-Überschrift des Bereichs kommt als Abschnitt oder `h` vor; Wortzahl der Übersetzung ≥ 85 % der englischen Wortzahl ohne Kartenbeschriftungen); keine englischen Sätze (Prüfskript F1); keine Solo-Hinweise; Ansicht unter `#es/nach/<tab>` nach A1 per Screenshot.

### D1 – Into the Dust: Rahmen, Ziele & Bedrohungen, Begegnungen (Übersetzung)
- **Eingabe:** PDF 156–172 (S. 152–168).
- **Ausgabe:** `data/es/reise.js` (`ES.REISE`), `reise-ziele.js` (`ES.ZIELE`: Einleitung, gemeinsame Countdowns, 10 Archetypen mit Text/Ziel/Bedrohung/Countdown/Hinweisen, NSC-Werteblöcke S. 160: Pacifica-Soldaten, Pacifica-Highway-Patrol, Biker, Sentre-Agenten, Jo Watts, Agent Simone, Carlos, Mr. Pink), `reise-begegnungen.js` (6 Begegnungen inkl. Werteblöcke: Bauarbeiter; Puffy Vest, „American“ Citizens, Special Agent Carlton Whitfield, Irene Valdez; Smiling Drone; Quadruped Military Robot).
- **Abnahme:** Formate 2.6 exakt, alle Werteblöcke vollständig, Countdowns als Einzelschritte, `node --check`.

### D2 / D3 / D4 – Die drei Halte (Übersetzung)
| Paket | Datei(en) | PDF | gedr. S. | Besonderes |
|---|---|---|---|---|
| D2 | `halt-engel.js` (+ `-2`) | 172–183 | 168–179 | Einleitung/Zitat S. 169, Hindernis mit Unterpunkten (Wo sind wir?, Erkunden, Das Auto, Die Straße), Lage (+ Essen & Schlafen, Die Countdowns, Das Ende, Kästen „Autos auf den Straßen“, „Die Reisenden einbinden“), Countdown, 10 Orte (Wohnhäuser mit `w`-Tabelle D6 + Kästen Dougs Fahrzeuge, Der Sedan der Torres), NSC: Ramona Lopez, Daisy Williams, Father Marcos, Jorge Lopez, Bewohner (stat), Jimmy Shute (+ Jimmys Schläger, Jimmys Pickup), Der Erzengel (+ Kasten Die himmlische Neurolandschaft) |
| D3 | `halt-mord.js` (+ `-2`) | 184–194 | 180–190 | Hindernis (+ Fragen stellen, Nach Liberty, Kasten „Ein ruchloser Mord“), Lage (Der Mord, Das Angst-System), Countdown, Orte (+ Kasten Gerüchte als eigener Abschnitt `geruechte` mit Liste), 15 Orte, Abschnitt `angst` „Das Angst-System“, NSC: Maschinenfleisch-Kreaturen, Kasten Neben-NSC, Sheriff Old Toby (+ Beamte), Lolly & Jack Harney (+ Kellnerroboter), Ranielle Ganaway (+ Walter Roberts falls im Buch als stat) |
| D4 | `halt-drohnen.js` (+ `-2`) | 194–207 | 190–203 | Hindernis (+ Wo sind wir?, Erkunden, Das Auto, Essen & Schlafen, Die Countdowns, Das Ende), Abschnitt `festival` „Das Festival und die Playa“ (+ Kasten Die brennende Drohne), Lage (+ Abschnitt `drohnenschiffe` „Die zwei Drohnenschiffe“ mit Militärdrohne/Bulldozer-Drohne als stat), Countdown, 9 Orte, NSC: `w` Zufällige Festivalgruppen (D6) + Playa-Bewohner (stat), Paul Jost, Gary Bosko, William „Wild Willy“ Hardey, Aubrey & Hachiko, Molly, Shana & Pru |
- **Ausgabe/Format:** 2.6 (Halt). `karte.pins` leer lassen (D5), `bild` wie angegeben (`es/h-engel`, `es/h-mord`, `es/h-drohnen`), NSC-`bild` = `es/n-<nsc-id>` setzen **nur** für NSC mit Porträt im Buch (Porträts PDF 180–182, 192–193, 203–207 – auf der Seite prüfen).
- **Abnahme:** alle Orte/NSC/Kästen vorhanden (Abgleich mit Lesezeichen), Countdown vollständig, `node --check`.

### D5 – Bilder, Karten, Pins, Galerie
- **Ziel:** alle ES-Bilder in `tftl/img/es/` (webp q82, ≤ 1600 px, Karten ≤ 2000 px), Felder `bilder`/`bild` in den Datendateien setzen (nur ergänzen, Text nicht ändern), Pins eintragen, Galerie.
- **Karten (Seitenausschnitt rendern, nicht aus Einzelbildern):** `karte-pacifica` = PDF 2 + 3 aneinander (je ganze Seite, dpi 150; Vorbild: Funktionen `rend()`/`stitch()` in `plan/tftl/es_assets.py`, das die Entwurfsbilder erzeugt hat); `karte-route` = PDF 158 ab x = 327 pt + PDF 159 bis x = 592 pt, y 50–746; `karte-littleville` = PDF 175, Rect(30,75,587,489); `karte-liberty` = PDF 189 (Ausschnitt per dpi-60-Ansicht bestimmen, rechte Seite → Kapitelband x > ~585 pt nicht mitnehmen); `karte-soleri` = PDF 200. Klebeband-Streifen dürfen bleiben, wenn sie keine Beschriftung verdecken; sonst Ausschnitt anpassen.
- **Einzelbilder** (Freisteller/Porträts **direkt aus dem PDF mit SMask** extrahieren: `pymupdf.Pixmap(doc, xref)`, CMYK→RGB, dann `Pixmap(pix, Pixmap(doc, smask))` – die Inventardateien haben bei Doppelseiten die Transparenz verloren):
  - Kacheln/Kopf: `hero` (S040-041 dbl), `w-welcome` (S010-011), `w-pacifica` (S022-023), `w-reisende` (S052-053), `w-kampf` (S080-081), `w-reise` (S114-115), `w-bedrohungen` (S138-139), `r-dust` (S156-157).
  - Halte: `h-engel` = S172_01 (+ Randstreifen S173_01 anfügen, prüfen), `h-mord` = S184_01 + S185_01 zusammensetzen (Doppelseite, vom Skript nicht erkannt) und S186_01 (Amador Inn, gehört zu „Lage“) als `h-mord-amador`, `h-drohnen` = S194_01 + S195_01 zusammensetzen; weitere Bilder im Halt: S176_01/S177_01 (Engel, Seiten 172/173 gedr.) → zum passenden Abschnitt (Countdown/Lage – auf der Seite prüfen), S191_01 (Neurosphäre, Halt 2 → Ort „Die Neurosphäre“), S196-197 dbl (Gewehr, Halt 3 → prüfen, wohin), Festival-/Drohnenbilder auf PDF 196–201 prüfen.
  - Begegnungen: `b-baustelle` = S166_01 + S167_01 zusammensetzen; S169-170 dbl ist **falsch zusammengesetzt** (zwei Einzelbilder): links = `b-stapel` (Der Stapel), rechts = `b-scheune` (Die Scheune) – trennen; S162_01/S163_01 (Kap. 7 S. 158–159, Seitenbild bei den Archetyp-Zielen) nur einbauen, wenn klar zuzuordnen; S165_01 → Spielbeginn (`r-start`).
  - Archetypen: `a-<id>` aus PDF 70–79 (je ein Freisteller; S075-076 dbl ist falsch zusammengesetzt – Ermittlerin PDF 75, Außenseiterin PDF 76 einzeln mit SMask holen).
  - NSC-Porträts `n-<nsc-id>` (PDF 180–182, 192–193, 203–207; Aubrey & Hachiko und Molly, Shana & Pru sind Gruppenbilder → eine Datei je Karte).
  - Nachschlagen: Bilder in C-Dateien als `["bild", …]` nur, wo sie im Buch fest zu einem Abschnitt gehören (z. B. Drohnen-/Fahrzeugbilder in Kap. 4); Eröffnungsbilder nicht doppelt.
- **Pins:** `ES.HALTE.<id>.karte.pins` (Orte, die auf der Halt-Karte beschriftet sind) und `ES.KARTE` (Route/Pacifica; Halt 2 `ungefaehr:1`). Koordinaten an der Beschriftung im gerenderten Bild messen (Text-Bounding-Box aus `page.get_text("dict")` umrechnen).
- **Galerie:** `tftl/img/es/galerie/full|thumb/` aus allen Inventarbildern außer `textur`/`maske`-Resten (Doppelseiten-Fehler wie oben korrigiert), `data/es/galerie-es.js` mit `Galerie.reg("tftl_es", {key:"es", name:"The Electric State", dir:"img/es/galerie/", items:[[datei,b,h,seite],…]})`.
- **sw.js:** alle Bilder außer Galerie in `FILES`.
- **Abhängigkeiten:** D1–D4 (Datendateien vorhanden), A1. **Abnahme:** keine falsche Zuordnung (jedes Bild auf seiner PDF-Seite gegengeprüft), nichts beschnitten außer Rand/Band, Summe ≤ 12 MB ohne Galerie, Screenshot jeder Halt-Karte mit Pins.

### E1 – Archetypen & vorgefertigte Reisende (Übersetzung)
- **Eingabe:** PDF 70–79 (S. 66–75), PDF 226–230 (S. 222–226).
- **Ausgabe:** `data/es/archetypen.js`, `data/es/vorgefertigt.js` (Format 2.6). Bild-Ids wie Glossar (`es/a-<id>`), Bilder macht D5.
- **Abnahme:** 10 Archetypen vollständig (alle D6-Listen), 4 Vorgefertigte mit allen Werten von den Bögen, `node --check`.

### E2 – Reisende, Würfelprobe, Spannung, Fahrzeug, Bögen
- **Ziel:** e4 + Charakterbogen + Fahrzeugbogen mit PDF-Ein-/Ausgabe; Archetypen-Kachelraster im Nachschlagen (`#es/nach/reisende/archetypen`, wie TftL-Typen: Figur + Name + Schlüsselattribut, Klick → Detail mit allen Tabellen) – über die `kacheln`-Konfiguration von `nach.js` oder als eigene Funktion `ES.archetypen(app, id)`, die `nach.js` für den Pseudo-Abschnitt aufruft.
- **Eingabe:** Entwurf e4, Bögen PDF 224/225 (dpi 110 rendern), Regeln S. 49–65 (C4-Datei oder PDF), `kids.js` als Vorbild.
- **Ausgabe:** `tftl/js/es/reisende.js`, `tftl/js/es/bogen.js`, CSS-Block `/* E2 */` in `es.css`.
- **Abhängigkeiten:** A1, E1, D1 (`ES.ZIELE`, `ES.REISE.fahrzeug`).
- **Abnahme:** e4-Abgleich (1440/1280, nichts abgeschnitten), Reisende anlegen/ändern/löschen, Vorgefertigte übernehmen, Spannung zählt, Würfelprobe mit Forcieren, Persönliche-Countdown-Zustand gleich wie im Leitstand, Bogen-PDF exportieren und wieder einlesen (Test mit Playwright-Download), Fahrzeugbogen-PDF.

### F1 – Prüfung
- Alle Routen (Liste 2.2) bei 1440×900 und 1280×800, mit und ohne eingeklappte Seitenleiste, mit `h`; Konsolenfehler = 0.
- Abgleich mit e1–e4; Breite genutzt, keine Lücken/leeren Spalten; Bilder ungeschnitten und richtig zugeordnet (Stichprobe gegen PDF-Seite).
- Textprüfung per Skript über `tftl/js/data/es/**`: englische Reststücke (Regex auf häufige Wörter ` the | and | you | with | of the | Traveler| page `), „Seite“, „Solo“, „Oracle“, „Lone Traveler“; Seitenzahlen plausibel (Abschnitt-`s` innerhalb des Kapitelbereichs); jede Datei `node --check`.
- TftL- und Flood-Regression: `#start`, `#nach/kids`, `#m/killerbirds/loesung`, `#flood/start` unverändert.
- `sw.js`: jede FILES-Datei existiert; `VERSION` erhöhen. Bericht mit Screenshots an Moritz.

---

## 4. Entwürfe
`plan/tftl/mockups/e1-start.jpg` (Vorbereitung), `e2-reise.jpg` (Reise-Leitstand, Halt 1 › Überblick mit Routenleiste), `e3-karte.jpg` (Karte, Schalter Reiseroute), `e4-reisende.jpg` (Reisende, Spannung, Fahrzeug, Würfelprobe). Quellen `plan/tftl/mockups/src/e1-start.html … e4-reisende.html`, Farb-/Schriftsystem `src/es.css`, Bilder `src/img/es-*.webp` (aus dem PDF gerendert/extrahiert). Neu zu rendern mit `python3 plan/tftl/es_shot.py e1-start.html:e1-start …` (schreibt 1440er-JPG nach `plan/tftl/mockups/`, 1280er nach `/tmp/esplan/`; `<!--TOP-->` wird durch die ES-Kopfzeile ersetzt). Bildvorbereitung: `plan/tftl/es_assets.py`. Selbst geprüft bei 1440 und 1280: e1–e3 ohne Lücken; e4 bei 1280 mit abgeschnittenen Attribut-Beschriftungen → daher Kürzel-Regel in 2.7.

## 5. Risiken / offene Punkte
1. **Parallele Arbeit** an `tftl/` (Flood, TftL-Kapitel): `app.js`, `nach.js`, `index.html`, `sw.js`, `style.css` werden gleichzeitig geändert (VERSION lief während der Planung von v689sp auf v690sp). A1 muss diese Dateien unmittelbar vor dem Edit neu lesen und nur gezielt ändern; Datenpakete fassen sie nie an. Wenn der Flood-Bau `nach.js` schon generalisiert hat, dessen Schnittstelle übernehmen.
2. **Begriffe** ohne offizielle deutsche Ausgabe (Rausch für Bliss, Neurolandschaft, Hindernis für Blocker): im Glossar festgelegt; Moritz kann später ändern (dann nur Suchen/Ersetzen in `data/es`).
3. **Karten mit Klebeband/Papierrahmen** sind Teil des Buchlayouts; beim Seitenausschnitt kann Klebeband Beschriftungen verdecken → Ausschnitt anpassen, notfalls Klebeband stehen lassen.
4. **Inventar-Fehler:** falsch zusammengesetzte Doppelseiten (S075-076 = zwei Archetypen, S169-170 = Stapel + Scheune), nicht erkannte Doppelseiten (166+167, 184+185, 194+195, 172+173), verlorene Transparenz bei Freistellern in Doppelseiten → D5 behandelt das ausdrücklich.
5. **Pin-Lage Halt 2:** Liberty steht nicht auf der Pacifica-/Routenkarte → gestrichelter Pin an der Route (Sierra Nevada). Halt 1 an „Stockton“ (beschriftet), Halt 3 bei „Death Valley“ (beschriftet), Ziel „Primm“ (beschriftet).
6. **Routenleiste bei 1280 px** ist knapp (gemessen: passt mit 14 px Schrift; Stift rückt an den Rand). Falls Halt-Namen länger übersetzt werden, Schrift 13 px.
7. **Würfelregeln** (Forcieren kostet Hoffnung, Spannung als Bonuswürfel nur bei vergleichenden Würfen zwischen Reisenden, Ausrüstungsbonus) genau nach S. 53–54/64 umsetzen; Entwurf zeigt nur die Bedienung.
8. **Charakterbogen:** Es gibt kein ausfüllbares Original-PDF für ES → Nachbau + `FillPDF`; Feldnamen selbst festlegen (`data-p`), Einlesen nur für im Tool erzeugte PDFs garantiert.
9. **The Electric State – Alpha** (`tftl_esa`) und Artbook (`tftl_z3`) sind nicht hochgeladen → nicht im ES-Buchmenü.
10. Größe: Kap. 2 und Kap. 4 sind lang (je ~11 000 bzw. ~11 500 Wörter, Kartenbeschriftungen abgezogen ~9 000) → je zwei Pakete; Halt 3 (~6 000 Wörter) ist das größte Einzelpaket, darf auf `halt-drohnen-2.js` aufteilen.
