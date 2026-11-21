# PICO – Spielleiter-Tafel (Bauplan)

Stand: 21. Nov. 2026. Arbeitsanweisung für die Umsetzung (gedacht für Sonnet, in mehreren Sitzungen).
Nichts aus diesem Plan ist bisher gebaut. Heute ist `pico/` nur eine Bücher-Startseite (`shared/sysstart.js` + `pico/sys.js`, Header-Bild `pico/img/hero.webp`, Logo `assets/logos/pico.webp`).
Ziel: ein vollständiges Setting wie **The Wildsea** (`wildsea/`) – PICO stammt vom selben Autor (Felix Isaacs) und läuft auf derselben **Wild Words Engine**. Der Wildsea-Code ist deshalb die direkte Vorlage (siehe Abschnitt 4).

**Wichtig zum Verständnis:** Das Corebook enthält **keine fertigen Abenteuer**. Die spielbaren Inhalte sind die **fünf Reiche** (Kap. 11, S. 272–337): The Hogwild, The Shadow House, Skyglass Dome, The Nekopolis, Westgate Mall – Sandbox-Gebiete mit Stimmung, optionalen Regeln, Fraktionen, Reiseführer-Gebieten, W6-Tabellen und möglichen Gefahren. Diese fünf Reiche sind die „Abenteuer“ des Tools.

Entwürfe (Screenshots 1440×900) liegen in `plan/pico/mockups/` – **die Umsetzung muss diesen Entwürfen genau entsprechen**. Die HTML/CSS-Quellen liegen in `plan/pico/mockups/src/` (`pico.css` = fertiges Farb-/Schrift-System, darf als Ausgangspunkt für `pico/style.css` genutzt werden). Blaue Kästen mit roter Nummer sind nur Erklärungen im Entwurf, nicht Teil der Oberfläche.

| Nr. | Datei | Ansicht |
|---|---|---|
| 1 | `m1-start-vorbereitung.jpg` | Startseite = Vorbereitung + Block „Losziehen“ (Reiche) |
| 2 | `m3-reich-ueberblick.jpg` | Reich-Leitstand · Überblick (Hogwild) |
| 3 | `m2-reich-fraktionen-dunkel.jpg` | Reich-Leitstand · Fraktionen (Shadow House, dunkles Reich-Thema) |
| 4 | `m4-reich-reisefuehrer.jpg` | Reich-Leitstand · Reiseführer (Gebiete, Einträge, W6-Tabellen) |
| 5 | `m5-reich-reise.jpg` | Reich-Leitstand · Reise (Reiseleiste + tickende Uhr, Reiseaktionen, Ausguck, Wetter) |
| 6 | `m6-gefahren.jpg` | Gefahren-Browser + Begegnungsleiste |
| 7 | `m7-nachschlagen-kaefer.jpg` | Nachschlagen · Käfer (Aspekt-Gruppe „Sauger“) |
| 8 | `m8-streifzugbogen.jpg` | Streifzugbogen (Picotitan, Titanenbau, Bande, Wahrheiten, Beute) |

Die Texte in den Entwürfen sind teils gekürzt – im Tool steht immer der **vollständige** Buchtext.

---

## 1. Quellen

| Was | Wo |
|---|---|
| Corebook (EN, 366 PDF-Seiten, Hochformat 540×684 pt) | wird von Moritz hochgeladen: `Pico___Regeln___Core_Digital_V1__EN_.pdf` |
| Text des Corebooks, je Kapitel/Reich als Markdown | `quellen/pico/text/k00-vorwort.md` … `k12-anhang.md` (Reiche einzeln: `k11a-hogwild.md` … `k11e-westgate-mall.md`) |
| Bild-Inventar (279 Bilder) | `plan/pico/bilder-inventar.tsv` (Dateiname `S<BUCHSEITE>_<nr>_<b>x<h>`) |
| Gefahrenliste (36 Einträge: Seite, Schlüsselwörter, Kopffarbe, Bild-Kandidaten) | `plan/pico/gefahren-liste.tsv` |
| Skripte | `plan/pico/extract_text.py`, `plan/pico/extract_images.py`, `plan/pico/build_babydoll.py` |
| Logo / Header-Bild | `assets/logos/pico.webp` (weiß, freigestellt), `pico/img/hero.webp` |

**Seitenzählung – WICHTIG:** **PDF-Seite = Buchseite + 2.** Alle `S. …`-Angaben im Tool sind **Buchseiten** (wie im Inhaltsverzeichnis und in den Verweisen im Buchtext, z. B. „page 234“). Die Seitenmarken `<!-- S. n -->` in den Markdown-Dateien und die Bildnamen `S<n>_…` sind bereits Buchseiten. Im Bookviewer für `pi_core` den Versatz `off:2` setzen (PDF-Seite minus Buchseite), damit „S. 234“ die richtige PDF-Seite öffnet. Seitenbild zum Prüfen: `pdftoppm -r 80 -f <S.+2> -l <S.+2> -png`.

**Text-Markdown lesen:**
- Überschriften (Schrift Baby-Doll) → `#`/`##`/`###`/`####` nach Größe. `{farbe=#xxxxxx}` dahinter = Farbe der Überschrift im Buch = Farbe des Kastens/Gebiets/der Fraktion → als Akzentfarbe übernehmen.
- `### 214 {farbe=#494344}` am Seitenanfang ist nur die Seitenzahl im Kopf → ignorieren.
- Kursiv (`*…*`) = im Buch fast immer der Hinweis an den Weber (Spielleitung) am Ende eines Absatzes → im Datenfeld `i` ablegen, kursiv-grau darstellen (Entwurf 2/4).
- Fett ist im PDF nicht als eigene Schrift kodiert (nur „Benefit:“, Zug-Namen etc. sind fett). Feldnamen wie `Benefit:`, `Drawback:`, `General Mood:`, `Home Turf:`, Zug-Namen `Corkscrew Jaws (Bite 3):` bitte selbst als fett/Feld erkennen.
- Zeilen mit `»` sind Aufzählungen. Zitat-Kästen am Seitenrand stehen als mehrere `##`-Zeilen mit gleicher Farbe hintereinander (z. B. Roland DeSola S. 275) → als Zitat (`vl`) zusammenfügen.
- Zahlen-Überschriften `# 66` … `# 11` = Kopf einer Ergebnis-Tabelle (Ausguck S. 88). Tabellen, Kästen und Bögen **immer am Seitenbild prüfen**, die Lesereihenfolge in Zweispaltigem kann springen.

---

## 2. Grundregeln (Moritz’ Vorgaben – unbedingt einhalten)

1. **Nur Buchtext, vollständig ins Deutsche übersetzt.** Nichts weglassen, nichts zusammenfassen, nichts erfinden (keine eigenen Tipps, keine Kurzüberblicke). Ausnahme: Bedienelemente (Leisten, Würfel, Begegnungsleiste, Reise-Tafel, Streifzugbogen), die das Spielen erleichtern.
2. **Weglassen:** Inhaltsverzeichnisse (S. 2–4), Kickstarter Backers (S. 354–359), The Team (S. 360), Legal (S. 361), Index gibt es nicht (Suche ersetzt ihn). „Useful Links“ (S. 361) bleibt im Anhang. Die leeren Bögen (S. 340–345) nicht nachbauen, sondern als Knöpfe „Charakterbogen (Pic-nic)“, „Charakterbogen (Pic-odyssey)“, „Streifzugbogen …“ die die PDF-Seite öffnen.
3. **Daten in viele Dateien** (eine Datei pro Reich, pro Aspekt-Gruppen-Block, pro Gefahren-Block, pro Kapitel; lange Kapitel auf `-a/-b/-c` verteilen).
4. **Bilder:** nur dort, wo sie im Buch zu genau diesem Eintrag gehören; nicht beschneiden (Hochformat bleibt hochkant, `object-fit:contain`); Gefahren-Bilder klein in die Gefahren-Karte; breite Bilder als Kopfband; Buchbilder ohne Bildunterschrift/weißen Rand; **Doppelseiten** (Kapitel- und Reich-Eröffnungen sind auf zwei PDF-Bilder verteilt: großes Bild links + schmaler Streifen rechts, z. B. `S272_01` + `S273_01`) als **ein** Bild zusammensetzen.
5. Kopfzeile: links nur das Logo (weiß auf `#1f2426`), rechts Buch-Symbol und Burger. Keine Untertitel, keine Emojis.
6. Vorlesekästen/Zitate ohne Beschriftung. Seitenangaben „S. 12“, unscheinbar hinter dem Namen. Notizen nur als Stift-Symbol rechts in der Tab-Zeile (nicht als Kachel). Tabs nur mit Namen, ohne Zahlen. Keine Erklärtexte.
7. **Keine Spaltenflüsse**, keine leeren Spalten, Breite nutzen (Raster, zeilenweise). Seitenleiste links nur bei Bereichen mit mehreren Abschnitten, einklappbar (‹-Knopf, Taste `b`), bleibt stehen (sticky), nur rechts scrollt. Lange Titel in der Seitenleiste nur bis zum Doppelpunkt. Taste `h` blendet die Kopfzeile aus. Haupt-Tabs oben über die volle Breite, Seitenleiste beginnt darunter.
8. **Klick-zum-Erledigen:** „Vielleicht …“-Aufhänger, Rätsel, Brüche – Klick irgendwo auf den Eintrag = erledigt, Eintrag inkl. Text grau. Kein Kästchen, keine Linie.
9. **Handy:** Viewport 1280 (wie überall), Seitenleiste wird zu wischbarer Zeile oben.
10. **Jede sichtbare Änderung selbst per Screenshot prüfen** (Playwright + `/usr/bin/google-chrome`, `file://…/pico/index.html#…`, Viewport 1440×900 **und** 1280×800), Lücken/Überlauf/schiefe Bilder beheben, Screenshots an Moritz schicken.
11. **Commits ohne** „Co-Authored-By“- und „Claude-Session“-Zeilen. Push mit `git -c push.negotiate=true push`.
12. Neue Dateien in `sw.js` eintragen, `VERSION` erhöhen.
13. Neue Bedienelemente, die nicht in den Entwürfen stehen, **zuerst als Screenshot-Entwurf zeigen**.
14. Alles auf Deutsch – auch Beispiele, Fragen, Tabellen. Einzige Ausnahmen: Eigennamen nach der Namensregel unten und die Käfersprache-Namen in Klammern (z. B. „Rüssel (Bulmu)“).

### Namensregel
- **Bleiben englisch:** Namen der Reiche (The Hogwild, The Shadow House, Skyglass Dome, The Nekopolis, Westgate Mall), Eigennamen von Personen, Titanen und Orten mit Eigennamen-Charakter (Fringewood, Stump Lake, Tekso Quailheart, Cassius Carvexo, Olgenfrold), Kunstwörter (Picotitan, Mysteriocalypse → „Mysteriokalypse“ eindeutschen ist erlaubt, Croaklins, Froglins, Gubs, Snydra, Zygar), Käfersprache-Namen der Aspekte in Klammern.
- **Werden übersetzt:** beschreibende Namen (The Hoggish Depths → Die Saustiefen, The Den of Roots → Der Wurzelbau, King’s River → Königsfluss, The Last Bazaar → Der Letzte Basar, The Hundred Chambers → Die Hundert Kammern, The Indomitables → Die Unerschrockenen, Sparkchompers → Funkenbeißer, Itsy Bitsy Mercenaries → Itsy-Bitsy-Söldner, Groundbreaker Hogs → Groundbreaker-Schweine bzw. Bodenbrecher-Schweine – **einmal festlegen und im Glossar eintragen**).
- Beim ersten Vorkommen in einer Ansicht darf der Originalname klein und grau dahinter stehen, wenn er zum Nachschlagen im Buch hilft (Entwurf 3: „The Indomitables · S. 290“).

### Glossar (verbindlich, in `pico/js/data/glossar.js` ergänzen)
| EN | DE |
|---|---|
| Weaver (of Tiny Stories) | Weber (= Spielleitung) |
| bug / band of bugs / bugly | Käfer / Käferbande / krabbelig |
| scene / montage / journey | Szene / Montage / Reise |
| spotlight / conversation | Rampenlicht / Gespräch |
| track / mark / burn / clear / break | Leiste / markieren / verbrennen / leeren / Bruch |
| heart track / combo track / spotlight track (A/R) | Herzleiste / Kombo-Leiste / Rampenlicht-Leiste (A = Aktion, R = Reaktion) |
| action / reaction / luck roll | Aktion / Reaktion / Glückswurf |
| triumph / conflict / disaster / twist / critical / counter | Triumph / Konflikt / Desaster / Wendung / Kritischer Treffer / Konter |
| advantage (environmental, teamwork, bits & bobs) | Vorteil (Umgebung, Teamwork, Bröckchen & Krimskrams) |
| cut: Tough / Armour / Speed / Camo / Complex | Abzug: Härte- / Panzer- / Tempo- / Tarn- / Komplex-Abzug |
| impact: no / low / normal / giga | Wucht: keine / niedrig / normal / Giga |
| truths / mysteries / small & grand discoveries / mystery triangle | Wahrheiten / Rätsel / kleine & große Entdeckungen / Rätsel-Dreieck |
| combos & finishers | Kombos & Finisher |
| points of interest | Interessante Punkte |
| exploring / gathering / interacting / rumbling | Erkunden / Sammeln / Interagieren / Raufen (Rauferei) |
| attacking / defending / dealing & taking damage / effects | Angreifen / Abwehren / Schaden austeilen & nehmen / Effekte |
| push / pull / stun / grab / swallow | Stoßen / Ziehen / Betäuben / Greifen / Verschlucken |
| resistance / weakness / immunity | Resistenz / Schwäche / Immunität |
| death & defeat | Tod & Niederlage |
| montage tasks: freeform / recovering / scrounging / mysteryizing / cooking / crafting / moulting | Aufgaben: frei / Erholen / Organisieren / Rätseln / Kochen / Herstellen / Häuten |
| journey track / ticking clock / stride / tick | Reiseleiste / tickende Uhr / Schritt / Tick |
| leader / travel actions: Ramble / March / Wait / Camp | Anführer:in / Reiseaktionen: Bummeln / Marschieren / Warten / Lagern |
| on the lookout / lookout roll / surprise! | Ausguck / Ausguckwurf / Überraschung! |
| lookout results: unexpected landmark / trove of stuff / event in progress / change in the weather / an NPC / looming hazard | Unerwartetes Wahrzeichen / Ein Haufen Zeug / Ein laufendes Ereignis / Wetterwechsel / Ein NSC / Drohende Gefahr |
| choices / encounters | Wahl / Begegnung |
| weather: Calm Skies, Rainstorm, Cold Snap, … | Wetter: Ruhiger Himmel, Regensturm, Kälteeinbruch, … (alle Wettertypen S. 95 übersetzen) |
| daylight & darkness | Tageslicht & Dunkelheit |
| Nectar / aspect / augment / part | Nektar / Aspekt / Augment / Teil |
| Benefit / Drawback | Vorteil / Nachteil |
| aspect groups: Chompers, Suckers, Peepers, Shell, Slime, Feelers, Scuttlers, Grippers, Wings, Glands, Tails, Build, Brain, Companions, Mounts, Tools, Weapons, Threads | Beißer, Sauger, Gucker, Panzer, Schleim, Fühler, Krabbelbeine, Greifer, Flügel, Drüsen, Schwänze, Statur, Hirn, Gefährten, Reittiere, Werkzeuge, Waffen, Fäden |
| skill categories: Moving / Friending / Finding / Rumbling | Fertigkeiten: Bewegen / Anfreunden / Finden / Raufen |
| Moving: Dash, Climb, Dig, Slink, Fly, Swim | Flitzen, Klettern, Graben, Schleichen, Fliegen, Schwimmen |
| Friending: Yap, Swagger, Dazzle, Scare, Care, Tame | Quasseln, Prahlen, Blenden, Erschrecken, Kümmern, Zähmen |
| Finding: Sense, Hunt, Think, Rummage, Make, Chart | Spüren, Jagen, Denken, Stöbern, Werkeln, Kartieren |
| Rumbling: Bash, Bite, Slash, Sizzle, Dance, Shield | Hauen, Beißen, Schlitzen, Brutzeln, Tanzen, Schützen |
| Giga-Fertigkeit / -Schaden (Gigabash, Gigayap …) | Gigahauen, Gigaquasseln … (Präfix „Giga“ + deutsche Fertigkeit) |
| skill damage „(Bite 3)“ | „Beißen 3“ (Schaden = Fertigkeitsname) |
| moods / mood track / mood pull / positive / neutral / negative | Stimmungen / Stimmungsleiste / Stimmungszug / positiv / neutral / negativ |
| bits / bobs / chunks / carry slots / tags | Bröckchen / Krimskrams / Brocken / Tragplätze / Etiketten |
| size: Nano / Small / Large / Huge / Titan | Nano / Klein / Groß / Riesig / Titan |
| type: Bugly, Beastly, Scaly, Slimy, Feathery, Leafy, Shroomy, Clanky, Ghostly | Krabbelig, Bestial, Schuppig, Schleimig, Gefiedert, Blättrig, Pilzig, Scheppernd, Geisterhaft |
| threat: Swarm / Lackey / Elite / Boss | Schwarm / Lakai / Elite / Boss |
| hazard / Overview / Signs / Behaviour / Parts & Moves / Defences / Titan Defences / Breaks / Stuff to Grab | Gefahr / Überblick / Anzeichen / Verhalten / Teile & Züge / Abwehr / Titanen-Abwehr / Brüche / Zum Mitnehmen |
| kicking things up/down a notch | eine Stufe höher/tiefer schalten |
| Picotitan / Favour / Aura / Gigaskills / Unique Benefits / Roaming Sheet | Picotitan / Gunst / Aura / Gigafertigkeiten / Besondere Vorteile / Streifzugbogen |
| Gaining Favour: grooming, basic/luxury feeding | Gunst gewinnen: Fellpflege, einfaches/Luxus-Füttern |
| titan-den / feature / upgrade | Titanenbau / Merkmal / Ausbau |
| den features: Kitchen, Workshop, Watchtower, Bar, Bunkroom, Storehouse, Garden, Hospital, Library | Küche, Werkstatt, Ausguck, Bar, Schlafsaal, Lager, Garten, Lazarett, Bibliothek |
| Pic-nic / Pic-odyssey | Pic-nic / Pic-odyssey (Eigennamen, bleiben) – erklärt als Kurz-/Langkampagne |
| realm / overview / vibes / particulars / optional rule / high or low weirdness | Reich / Überblick / Stimmung / Besonderheiten / optionale Regel / Hoch oder niedrig seltsam? |
| mysteries (Wild Mysteries …) / useful loot / local bits & bobs / potential hazards | Rätsel (Wilde Rätsel …) / Nützliche Beute / Bröckchen & Krimskrams vor Ort / Mögliche Gefahren |
| local factions / General Mood / Home Turf | Fraktionen vor Ort / Grundstimmung / Revier |
| travel guide / exploring X (Landmarks, NPCs, Events) | Reiseführer / X erkunden (Wahrzeichen, NSC, Ereignisse) |
| entry types: (feature) (landmark) (landmarks) (titan) (npc) (npcs) (optional rule) | (Merkmal) (Wahrzeichen) (Wahrzeichen) (Titan) (NSC) (NSC) (optionale Regel) – im Buch klein und kleingeschrieben hinter dem Titel |
| Maybe… | Vielleicht … |
| session zero / safety tools / planning / NPCs / rewards & ramifications | Sitzung Null / Sicherheitswerkzeuge / Planen / NSC / Belohnungen & Folgen |

Unbekannte Begriffe: sinngemäß übersetzen und ins Glossar eintragen, damit alle Dateien gleich übersetzen.

---

## 3. Design (aus dem PDF gemessen)

**Schriften:**
- Überschriften: **Baby-Doll** (handgezeichnete Rundschrift des Buchs). Das PDF enthält nur ein Teil-Set ohne Umlaute → `plan/pico/build_babydoll.py` baut daraus `pico-babydoll.woff2` **mit ergänzten Ä Ö Ü ä ö ü** (Punkte aus dem Original-Punkt-Glyph) und ß (als „ss“). Fertige Datei liegt in `plan/pico/mockups/src/pico-babydoll.woff2` → nach `assets/fonts/pico-babydoll.woff2` kopieren. Aufruf zum Neubauen: Font aus dem PDF ziehen (PyMuPDF `extract_font`, xref des Baby-Doll-Fonts), dann `python3 plan/pico/build_babydoll.py <cff> <woff2>`. Das Teil-Set hat auch `♥` (U+2665) – nicht für Leisten nutzen, Herzen sind SVG.
- Fließtext: **Rubik Light (300)** + Light Italic, für Fett Rubik 500 – liegen in `plan/pico/mockups/src/` (aus `@fontsource/rubik`) → nach `assets/fonts/` kopieren.
- Größenverhältnis wie im Buch: Fließtext 15 px, Kastenköpfe 24–28 px, Bereichstitel 30–46 px, Reich-/Gefahrentitel 46–62 px.

**Farben** (exakte Füllfarben aus dem PDF, als CSS-Variablen in `pico.css`):
`--ink #1f2426` (Text, Dunkelseiten, Kopfzeile) · `--teal #008999` · `--blue #185d7e` · `--sky #008bd2` · `--plum #8a3578` · `--violet #593582` · `--lilac #af8ec1` · `--moss #405335` · `--olive #969f31` · `--sage #839369` · `--gold #eba300` · `--amber #c76f00` · `--brown #6e4018` · `--tan #a16426` · `--rust #b34c25` · `--red #9e2220` · `--coral #ec6b6b` · `--peach #d98d61` · `--apricot #f2a477` · `--pink #ee7bae` · `--slate #59676d`; Tönungen für Zebrastreifen: `#d5e6ea #fce5e1 #e9ead5 #eee8f4 #fcecd3 #dde8d5`.

**Bausteine (wie im Buch):**
- Kasten mit Farbrand 2,5 px, Radius 12 px, Kopfband in Vollfarbe mit weißer Baby-Doll-Schrift; Typ-Zusatz klein, kleingeschrieben in Klammern dahinter („(wahrzeichen)“).
- Vollfarbige Info-Kästen (weiße Schrift) und Tönungs-Kästen.
- Aufzählungen mit `»` in Kastenfarbe.
- Tabellen mit Zebrastreifen in der Tönung der Kastenfarbe; W6-Spalte in Baby-Doll.
- **Herzleisten:** Herz = Feld, Punkt = Bruch (`♥♥•♥♥•♥` im Buch). Herzen als SVG (leer/markiert/verbrannt mit Kreuz), Bruchpunkt als kleiner Kreis.
- Hintergrund: die Kritzel-Landkarte des Buchs (xref 2225, 2476×1576) als `pico/img/kritzel.webp` (liegt in `plan/pico/mockups/src/img/`), hell, `opacity .55`, fixiert. Auf dunklen Reichen invertiert mit `opacity .06`.
- **Reich-Themen:** jedes Reich hat im Buch eine Leitfarbe/Stimmung: Hogwild Moosgrün `#405335` (hell), Shadow House **dunkel** (`#1f2426`-Seiten, Akzent `#979f32`), Skyglass Dome, Nekopolis, Westgate Mall → Leitfarbe am Seitenbild ablesen (Farbe der Fraktions-/Gebietsköpfe, `{farbe=…}` im Markdown) und in `reiche.js` als `farbe`, `dunkel:true|false` ablegen. Nekopolis-Seiten im Buch prüfen (ebenfalls dunkel?).
- **Aspekt-Gruppen** und **Gefahren** haben je eine eigene Kopffarbe (Kopfband im Buch) → Gefahren: Spalte `kopffarbe` in `plan/pico/gefahren-liste.tsv`; Aspekt-Gruppen: am Seitenbild bzw. `{farbe=…}` der Augmente ablesen (Sauger `#c76f00`).

---

## 4. Struktur des Tools (Navigation)

```
#start                        Vorbereitung (Entwurf 1) – erste Seite beim Öffnen
#nach/<bereich>/<id>          Nachschlagen: welt | regeln | kaefer | titanen | weber | anhang (Entwurf 7)
#reich/<id>/<tab>[/<anker>]   Reich-Leitstand: ueberblick | fraktionen | reisefuehrer | reise | gefahren (Entwürfe 2–6)
#gefahren[/<id>]              Gefahren-Browser für alle Gefahren (gleiche Ansicht wie der Reich-Tab, ohne Reich-Filter)
#streifzug                    Streifzugbogen der Gruppe (Entwurf 8)
#schirm                       Spielleiterschirm = Regelübersicht S. 346–353
#galerie                      alle Buchbilder
```

**Startseite (Entwurf 1):** Kopfband `img/hero.webp` (210 px hoch, Ausschnitt so, dass der „Pico“-Schriftzug im Bild nicht angeschnitten erscheint), darunter „Vorbereitung“ mit sechs Kacheln (Kapitelbild links, Titel in Kapitelfarbe, Unterkapitel klein, „Kap. N · S. X“): Die Welt (Kap. 1), Regeln (Kap. 2–5), Käfer bauen (Kap. 6–7), Picotitanen (Kap. 8), Der Weber (Kap. 9), Anhang (Kap. 12). Darunter Chips: Charakterbogen, Streifzugbogen, Regelübersicht, Würfel, Galerie. Rechts der dunkle Block „Losziehen“ mit den fünf Reich-Bildern (Name in Baby-Doll im Bild) → Reich-Leitstand; zuletzt geöffnetes Reich gelb umrandet; darunter Knopf „Winzige Gefahren“ (Kap. 10) → `#gefahren`. Keine eigene Reiche-Übersichtsseite nötig.

**Nachschlagen (Entwurf 7):** Tab-Leiste oben über die volle Breite: Welt · Regeln · Käfer · Picotitanen · Weber · Anhang (aktiver Tab in Kapitelfarbe). Links Baum (Kategorien → Unterkapitel aus den PDF-Lesezeichen), rechts Inhalt flach und offen. Alles, was im Buch ein Kasten ist (Beispiel-Dialoge „– … EXAMPLE –“, Ergebnis-Tabellen, Schnellstarts, Aspekte, Titanen, Merkmale), wird als echte Karte gebaut.

| Tab | Inhalt (Buchseiten) | Baum links |
|---|---|---|
| Welt | Vorwort (S. 5) + Kap. 1 (S. 6–27): Kernideen, Welt, Mysteriokalypse, Themen, Einflüsse, Ton, Käfer!, Größe des Lebens, Banden, Abenteuer, Siedlungen (+ besondere Siedlungen), Zuhause, Dampf ablassen, Nicht-Käfer (Frösche, Mäuse, Hunde, Waschbären, Fledermäuse, Fische, Eichhörnchen, Schlangen, Vögel), Katzen, Picotitanen | Unterkapitel |
| Regeln | Kap. 2 Grundregeln (S. 28–47), Kap. 3 Szenen (48–67), Kap. 4 Montagen (68–81), Kap. 5 Reisen (82–97) | je Kapitel → Unterkapitel |
| Käfer | Kap. 6 (S. 98–151): Grundlagen, Bau-Anleitung 1, Nektar, Aspekte & Augmente, Schnellstarts, **18 Aspekt-Gruppen** (S. 108–143), Fertigkeiten (S. 144–151); Kap. 7 (S. 152–169): Bau-Anleitung 2, Stimmungen, Bröckchen & Krimskrams, Etiketten, Rätsel, Wahrheiten, Namen | Käfer bauen I · Aspekt-Gruppen · Fertigkeiten · Käfer bauen II |
| Picotitanen | Kap. 8 (S. 170–189): Streifzugbogen, Titan bekommen, Können/Nicht-Können, Gunst, Aura & Gigafertigkeiten, besondere Vorteile, **12 Titanen** (S. 180–183), Titanenbau + **9 Merkmale** (S. 184–189) | Grundlagen · Titanen · Titanenbau |
| Weber | Kap. 9 (S. 190–199) + „Helping Players Out / General Advice“ (S. 266–267) + Kap. 10 Regeln für Gefahren (S. 201–211, ohne die Gefahren selbst) | Unterkapitel |
| Anhang | Kap. 12: Regelübersicht (S. 346–353, identisch mit `#schirm`), Bögen (Knöpfe auf die PDF-Seiten 340–345), Nützliche Links (S. 361) | Unterkapitel |

**Aspekt-Gruppe (Entwurf 7):** Kopfband über die volle Breite in Gruppenfarbe mit „Aspekt 3 Nektar · Augment +2 Nektar (max. 2 je Aspekt) · S. …“; darunter Überblick · Warum …? · Frag dich … · Bild (in einer Zeile, 4 Spalten); Aspekte als Karten im 4er-Raster (Name, Käfersprache-Name klein, Herzleiste im Kopf, „Teil“-Kennzeichen wo im Buch „PART“ steht); darunter Augmente als dichtes 4er-Raster. Jede der 18 Gruppen hat im Buch genau eine Doppelseite.

**Titanen (Nachschlagen Picotitanen):** 12 Karten im Raster mit Kopf in Titan-Farbe (`{farbe=…}`), Gunst gewinnen / Gigafertigkeiten / Aura / Besonderer Vorteil; Bild nur, wo im Buch ein Bild zu genau diesem Titan steht.

### Reich-Leitstand (das Herzstück)
Tabs: **Überblick · Fraktionen · Reiseführer · Reise · Gefahren**, aktiver Tab in Reich-Farbe, Stift-Symbol (Notizen je Reich und Tab) ganz rechts auf der Tab-Zeile. Dunkle Reiche (Shadow House, ggf. Nekopolis) komplett im dunklen Thema (Entwurf 3).

| Tab | Inhalt (Buch) | Darstellung |
|---|---|---|
| Überblick (Entwurf 2) | Overview, Vibes, Particulars: Optional Rules, High or Low Weirdness?, … Mysteries, Useful Loot, Potential Hazards, Zitat | Kopfband (zusammengesetztes Doppelseiten-Bild) mit Titel + erstem Satz des Overviews; Raster: Überblick-Text (voll) + Mögliche Gefahren als Chips (→ Gefahren-Tab) + Zitat · Stimmung (2×2 Karten) · Seltsamkeit (Schalter Hoch/Mittel/Niedrig, zeigt nur den gewählten Absatz, gespeichert) + Rätsel (Klick = vergeben/grau) · Optionale Regeln als Karten mit Schalter „aktiv/aus“ (gespeichert; aktive erscheinen als Chip im Reise-Tab) · Nützliche Beute (Bröckchen/Krimskrams) |
| Fraktionen (Entwurf 3) | Local Factions: Einleitung, je Fraktion General Mood, Home Turf, Text, Einträge (landmark/feature/npcs) | Baum links (Fraktion → Einträge); Kennzahlen als Kacheln, Fraktionsbild rechts daneben (nur wenn im Buch zur Fraktion gehörig), Einträge im 3er-Raster; „Vielleicht …“-Punkte klickbar; NSC-Einträge mit Initialen-Kreis je Person |
| Reiseführer (Entwurf 4) | A … Travel Guide: Einleitung, Einträge vor dem ersten Gebiet, Gebiete (Fringewood, Hoggish Depths …) mit Einträgen und „Exploring …“-W6-Tabellen (Wahrzeichen/NSC/Ereignisse) | Baum links (Gebiete in Gebietsfarbe → Einträge, Klick springt); rechts Gebietstitel + Einleitung, Einträge als Kästen im 3er-Raster in Gebietsfarbe, Figur klein ungeschnitten im Kasten; darunter die drei W6-Tabellen nebeneinander mit Würfel-Knopf (Trefferzeile farbig) |
| Reise (Entwurf 5) | Regeln aus Kap. 5 angewandt auf dieses Reich | siehe unten |
| Gefahren (Entwurf 6) | Gefahren-Browser, vorgefiltert „Im <Reich>“ = die Potential Hazards des Reichs (mit Seitenverweis → Gefahr) | siehe unten |

Jedes Reich hat dieselbe Buchstruktur (Lesezeichen geprüft): Eröffnung (Doppelseite) · Overview + Vibes · … Particulars (Optional Rules, High or Low Weirdness, Mysteries, Useful Loot, Potential Hazards) · Local Factions (Nekopolis nur **eine** Fraktion: „Local… Faction?“) · Travel Guide mit 4–5 Gebieten. Was abweicht (Sonderkästen, zusätzliche Tabellen), wird **nicht** weggelassen, sondern als `extra`-Block im passenden Tab aufgenommen.

### Reise-Tafel (Entwurf 5)
- **Reiseleiste mit tickender Uhr** genau wie im Buch (S. 85): Kreis aus 8 Segmenten, obere Hälfte = 4 Tag-Ticks (gold), untere = 4 Nacht-Ticks, Reiseleiste (Kreise mit Linien) waagerecht durch die Mitte. Felder/Segmente anklickbar; Länge der Reiseleiste per Rechtsklick/langem Druck. Ziel (Text, editierbar), Gebiet-Auswahl (Gebiete des Reiseführers). Bei Sonnenaufgang (Segment 8 → 1) Uhr automatisch leeren.
- **Anführer:in**: Pillen mit den Namen der Bande (aus dem Streifzugbogen), eine wählbar.
- **Reiseaktionen** Bummeln / Marschieren / Warten / Lagern als Karten mit Buchtext und den Werten (Ausguck, Überraschung!, Strecke, Zeit); Klick markiert Reiseleiste und Uhr automatisch (Wetter „Nasser Boden“ etc. → +1 Tick, wenn aktiv).
- **Ausguck**: Knopf „Alle würfeln“ würfelt 2W6 für jede Person außer der Anführerin; nur Pasch zählt (S. 88). Ergebnis-Leiste 66 · 55 · 44 · 33 · 22 · 11 mit Buchtexten; Treffer gold. Der Treffer zieht automatisch: 66 → W6 aus „Wahrzeichen“ des gewählten Gebiets, 22 → „NSC“, 44 → „Ereignisse“, 55 → Nützliche Beute des Reichs, 33 → Wetter-Auswahl öffnen, 11 → Mögliche Gefahren des Reichs (Chip → Gefahr). Darunter Schalter „Wahl / Begegnung“ (S. 90) mit dem Buchtext als Pop-up.
- **Wetter** (S. 94–95): alle Wettertypen als Chips, aktiver mit seinen +/– Regeln; **Tageslicht & Dunkelheit** (S. 96–97) zeigt den aktuellen Zustand aus der Uhr.
- Aktive optionale Regeln des Reichs als Chips.

### Gefahren (Entwurf 6)
- **Links:** Suche + Baum: „Im <Reich>“ (nur im Reich-Tab), Alle Gefahren A–Z, Nach Größe, Nach Bedrohung, Regeln für Gefahren (→ Nachschlagen Weber).
- **Begegnungsleiste oben:** Gefahren der laufenden Rauferei als Chips mit ihrer Herzleiste (Punkt = Bruch), Klick wechselt die Karte; Anzahl (×2); „+ Gefahr“; Kombo-Leiste (3 Felder, S. 46); Rampenlicht-Leiste (A/R je Käfer, S. 57).
- **Gefahren-Karte im Buchlayout:** Kopf in Buchfarbe mit Name, `[Größe/Typ/Bedrohung]`, S., Herzleiste (anklickbar: leer → markiert → verbrannt). Darunter Raster: Überblick + Anzeichen + Verhalten | Teile & Züge (Zebrastreifen, Schaden als Chip „Hauen 3“) | Bild (klein, `contain`). Fußzeile: Abwehr bzw. Titanen-Abwehr | Brüche (als Chips; erreicht die Herzleiste einen Bruch, Liste kurz hervorheben, Klick markiert) | Zum Mitnehmen. Zusatzseiten („Facing a …“, „Surviving a …“, „Besting …“, „Putting On a Cat“ usw.) als Tönungs-Kasten unter der Karte.
- Mehrteilige Einträge (Froglins & Croaklins, Gubs mit Unterarten, Miniature Mercs, Predatory Plants mit Varianten, Striding Spikers „Various Sizes“) als **mehrere Karten** mit gemeinsamem Kopf; jede Variante eigene Herzleiste.

### Streifzugbogen (Entwurf 8)
Gruppen-Spielstand (ein Spielstand, nicht pro Reich): Picotitan (Auswahl aus den 12, Eigenname editierbar, Gunst-Vorrat als Punkte, Gunst gewinnen, Gigafertigkeiten, Aura, Besonderer Vorteil), Titanenbau (9 Merkmale; gebaut = farbig mit Ausbaustufen, ungebaut gestrichelt, Klick → voller Buchtext im Pop-up), Bande (Name, Rolle, Stimmungsleiste 5 Felder; „+ Käfer“), Bröckchen/Krimskrams/Brocken (Chips, Tragfähigkeit des Titans), Wahrheiten (Liste, editierbar) + Nutzen-Satz aus S. 44, aktuelle Reise (aus der Reise-Tafel). Rechte Spalte unten: Rätsel der Bande (je Käfer ein Rätsel-Dreieck mit kleinen Entdeckungen, S. 164–167) – damit keine leere Fläche bleibt.

### Werkzeuge (Burger-Menü + Tasten, keine Kacheln)
- **Würfel** (Taste `w`): Pool 1–6 W6 (Fertigkeit 1–3, Aspekt 1, Vorteil 1–2), Abzug-Typen (Härte/Panzer/Tempo/Tarn/Komplex, stapeln; höchste Würfel streichen), Ergebnis Triumph/Konflikt/Desaster + Wendung bei Pasch. Umschalter für die Sonder-Wurfarten mit ihren eigenen Ergebnistexten aus dem Buch: Aktion, Angriff (S. 58), Abwehr (S. 59), Sammeln (S. 52), Erholen (S. 71), Organisieren (S. 72), Rätseln (S. 74), Kochen (S. 76), Herstellen (S. 78), Glückswurf (S. 36).
- **Spielleiterschirm** (Taste `s`): Regelübersicht S. 346–353 als Overlay mit Reitern (Allgemein · Szenen · Montagen · Reisen · Charaktere · Picotitanen). Die „Pg“-Verweise darin als „S.“ (Buchseiten nach unserer Zählung prüfen – das Buch weicht dort teils um 1 ab).
- **Suche** (Taste `/`), **Galerie**, **Streifzugbogen**, **Buch öffnen** (Buch-Symbol), **Bücher** (Bücherliste aus `sys.js`).
- `toolmenu.js`: Untertitel „Minimalsystem“ beim Pico-Eintrag entfernen (Dropdown ohne Untertitel).

### Spielstand
`localStorage["pi_state_v1"]` = `{ last:"reich/hogwild/reise", reiche:{ hogwild:{ hooks:{}, raetsel:{}, opt:{dappling:true}, weird:"mittel", note:{} } }, reise:{ ziel, gebiet, len:8, fort:5, uhr:4, anf:"Swift", wetter:"ruhig", ausguck:[[4,4],[2,5]] }, begegnung:[{id:"groundbreaker-hogs", n:1, h:[1,1,0,0,0,0], brk:{}}], kombo:1, spot:{}, streif:{ titan:"catling", name:"Percival", gunst:3, den:{kitchen:2, watchtower:1}, bande:[{n:"Swift", r:"Anführerin", mood:3}], bits:[], bobs:[], chunks:[], wahr:[] } }`. Alle Zugriffe in `try/catch`.

---

## 5. Architektur und Datenformat

**Vorlage ist `wildsea/`** (gleiche Engine, gleicher Autor, gleiche Bausteine: Shell, Routing, Seitenleiste, Blöcke, Gefahren-Browser, Suche, Schirm, Galerie, Bookviewer). Vorgehen: `wildsea/index.html`, `wildsea/style.css`, `wildsea/js/*.js` nach `pico/` kopieren, Präfixe umbenennen (`WS_` → `PI_`, `ws_state_v1` → `pi_state_v1`, `ws_core` → `pi_core`), Wildsea-Inhalte/Schiffe/Posten entfernen, Design durch `plan/pico/mockups/src/pico.css` ersetzen. `pico/sys.js` + `sysstart` danach nicht mehr verwenden (Bücherliste → `pico/js/data/buecher.js`, mit `off:2`).

```
pico/index.html                eigene Shell – Kopfzeile, #app, Burger, Suche, Skripte, toolmenu.js, gm_tool_mode_v1="pico"
pico/style.css                 Design nach Abschnitt 3 (Baby-Doll/Rubik, Farben, Kästen, Herzen, Kritzel-Hintergrund, Dunkel-Thema)
pico/js/app.js                 Routing, Startseite, Seitenleiste, Blöcke, Tasten
pico/js/nach.js                Nachschlagen (Kapitel, Aspekt-Gruppen, Titanen, Merkmale)
pico/js/reich.js               Reich-Leitstand (Überblick, Fraktionen, Reiseführer)
pico/js/reise.js               Reise-Tafel (Reiseleiste/Uhr, Reiseaktionen, Ausguck, Wetter)
pico/js/gefahr.js              Gefahren-Browser, Begegnungsleiste, Kombo-/Rampenlicht-Leiste
pico/js/streif.js              Streifzugbogen
pico/js/wuerfel.js             Würfel mit allen Wurfarten
pico/js/herz.js                Herzleisten-Baustein (leer/markiert/verbrannt, Brüche) – überall derselbe
pico/js/schirm.js, suche.js, hero.js (wie Wildsea)
pico/js/data/buecher.js, glossar.js, reiche.js (Liste: id, t, farbe, dunkel, bild, kurz)
pico/js/data/welt-a.js … (Kap. 1), regeln-2a.js … regeln-5c.js, kaefer-6a.js (Grundlagen, Nektar, Schnellstarts),
             aspekte-1.js (Beißer–Schleim), aspekte-2.js (Fühler–Drüsen), aspekte-3.js (Schwänze–Reittiere), aspekte-4.js (Werkzeuge–Fäden),
             fertigkeiten.js, kaefer-7a.js, kaefer-7b.js, titanen.js, titanenbau.js, weber-a.js, weber-b.js, anhang.js, schirm.js, wetter.js
pico/js/data/reich-hogwild.js, reich-shadow-house.js, reich-skyglass-dome.js, reich-nekopolis.js, reich-westgate-mall.js
pico/js/data/gefahren-1.js (Beastmice–Cordychaps), gefahren-2.js (Dracobats–Ground-Owls), gefahren-3.js (Groundbreaker Hogs–Lactogeists),
             gefahren-4.js (dandeLion's Manes–Quetzalcroakl), gefahren-5.js (Resinauts–Zygar), galerie.js
pico/img/kritzel.webp, kapitel/, reich/, aspekt/, titan/, gefahr/, figur/, den/
assets/fonts/pico-babydoll.woff2, rubik-latin-300-normal.woff2, rubik-latin-300-italic.woff2, rubik-latin-500-normal.woff2
```

### Text-Blöcke (wie Wildsea/Vaesen)
`{t:"p",x}`, `{t:"h",x}`, `{t:"ul",x:[…]}`, `{t:"box",h,c,x|b}` (c = Buchfarbe), `{t:"tbl",head,rows}`, `{t:"vl",x,wer}` (Zitat), `{t:"bsp",h,b:[[sprecher,text],…]}` (Beispiel-Dialog „– … EXAMPLE –“ als Karte), `{t:"erg",h,rows:[["Triumph (6)","…"],…]}` (Ergebnis-Tabelle), `{t:"d6",h,rows:["…"×6]}` (anklickbare W6-Tabelle).

### Reich
```js
window.PI_REICH = window.PI_REICH || {};
PI_REICH.hogwild = {
  t:"The Hogwild", p:272, farbe:"#405335", dunkel:false, bild:"reich/hogwild", kurz:"…erster Satz des Überblicks…",
  ueberblick:{p:273, b:[Blöcke]}, stimmung:[{t:"Überwuchert", x:"…"}, …],               // Vibes
  opt:[{id:"dappling", t:"Lichtflecken", x:"…", i:"…"}, …], seltsam:{p:274, intro:"…", hoch:"…", mittel:"…", niedrig:"…"},
  raetsel:{t:"Wilde Rätsel", p:275, intro:"…", i:"…", x:["…",…]}, beute:{p:275, intro:"…", i:"…", bits:[…], bobs:[…]},
  gefahren:{p:275, intro:"…", i:"…", x:[{x:"Groundbreaker-Schweine, die …", gefahr:"groundbreaker-hogs", p:234}, …]},
  zitate:[{x:"…", wer:"Roland DeSola, Philosoph der Mini-Söldner", p:275}],
  fraktionen:{p:276, intro:"…", i:"…", liste:[{id:"two-in-ones", t:"Die Two-In-Ones", farbe:"#9f2320", stimmung:"…", revier:"…", b:[Blöcke],
      eintraege:[{t:"Das Unexplodierte College", typ:"Wahrzeichen", x:"…", vielleicht:["…",…], nsc:[{n:"Cogtooth Carlisle", x:"…"}], i:"…"}], img:"figur/…"}]},
  reise:{p:278, intro:"…", i:"…", eintraege:[…],                                          // Einträge vor dem ersten Gebiet
      gebiete:[{id:"fringewood", t:"Fringewood", farbe:"#eba400", p:279, x:"…", eintraege:[…],
                erkunden:{p:279, intro:"…", wahrzeichen:["…"×6], nsc:["…"×6], ereignisse:["…"×6]}}]},
  extra:[ {tab:"ueberblick", t:"…", b:[Blöcke]} ]
};
```

### Gefahr
```js
window.PI_GEFAHR = window.PI_GEFAHR || [];
PI_GEFAHR.push({ id:"groundbreaker-hogs", t:"Groundbreaker-Schweine", p:234, farbe:"#405335",
  groesse:"Titan", typ:"Bestial", bedrohung:"Boss", herzen:"♥♥♥♥♥♥",          // Buch-Notation: ♥ = Feld, • = Bruch, „x99“ übernehmen
  ueberblick:[Blöcke], i:"…", anzeichen:["…"], verhalten:["…"],
  zuege:[{t:"Huftritt", dmg:"Hauen 3", x:"…"}, {t:"Zottel und Borsten", dmg:"–", x:"…"}],
  abwehr:{titan:true, x:[{t:"Immun gegen …", x:"…"}, {t:"Schwach gegen Zähmen und Kümmern", x:"…"}]},
  brueche:["Neuen Trüffel wittern","Quieken und angreifen",…], mitnehmen:{bits:[…], bobs:[…]},
  extra:[{t:"Einem Groundbreaker-Schwein begegnen", p:235, b:[Blöcke]}], img:"gefahr/groundbreaker-hogs", varianten:null });
```

### Aspekt-Gruppe, Titan, Merkmal
```js
PI_ASPEKT.push({ id:"sauger", t:"Sauger", p:110, farbe:"#c76f00", ueberblick:[Blöcke], i:"…", warum:["…"], frag:["…"],
  aspekte:[{t:"Rüssel", k:"Bulmu", herzen:"♥♥", teil:true, x:"…", vorteil:"…", nachteil:null}],
  augmente:[{t:"Säuredrüse", k:"Splurk", herzen:"+♥", x:"…", vorteil:"…", nachteil:null}], img:"aspekt/sauger" });
PI_TITAN.push({ id:"catling", t:"Catling", p:180, farbe:"#9f2320", x:"…", i:"Kann einen Brocken tragen.",
  gunst:["…"], giga:{3:["Gigaschleichen","Gigajagen"], 2:["Gigaschlitzen","Gigatanzen"]}, aura:{t:"Kampflustig", x:"…"}, vorteil:{t:"Raubtierinstinkt", x:"…"}, img:null });
PI_MERKMAL.push({ id:"kitchen", t:"Küche", p:185, brocken:["Blechdose","Streichholzschachtel"], x:"…", vorteile:[["Hausmannskost","…"],…],
  ausbau:[{t:"…", brocken:[…], x:"…"}] });
```

---

## 6. Arbeitsschritte (jeweils eine Sitzung: Screenshots, Commit, Push)

**Priorität: Reiche (Abenteuer) zuerst**, Nachschlagen danach.

0. **Gerüst, Design, Bilder.** Wildsea-Code nach `pico/` übernehmen (Abschnitt 5), Schriften nach `assets/fonts/`, `pico.css` → `pico/style.css`, Kritzel-Hintergrund. `extract_images.py` laufen lassen (nach `/tmp`), Kapitel- und Reich-Eröffnungen als Doppelseiten zusammensetzen und sprechend benennen (Abschnitt 7). Startseite (Entwurf 1), Bücher/Bookviewer (`off:2`), Burger, Tasten, SW. Würfel-Grundfunktion.
1. **Reich-Leitstand + The Hogwild komplett** (S. 272–285): `reich-hogwild.js`, `reich.js`, `reise.js`, `herz.js` (Entwürfe 2, 4, 5 und Fraktionen nach Entwurf 3 in hell). Gefahren-Chips dürfen noch ins Leere zeigen (grau). Schablone für alle Reiche.
2. **Gefahren I:** `gefahr.js` (Entwurf 6) + Beastmice bis Groundbreaker Hogs (S. 212–235) + Begegnungsleiste, Kombo- und Rampenlicht-Leiste.
3. **Gefahren II:** Gubs bis Zygar (S. 236–265). Alle Reich-Verweise verlinken.
4. **The Shadow House** (dunkles Thema, Entwurf 3) + **Skyglass Dome** (S. 286–311).
5. **The Nekopolis** + **Westgate Mall** (S. 312–337).
6. **Regeln** (Kap. 2–5) + Würfel mit allen Wurfarten + Spielleiterschirm (S. 346–353) + Wetter-Daten für die Reise-Tafel.
7. **Käfer I:** Kap. 6 Grundlagen, Nektar, Schnellstarts, 18 Aspekt-Gruppen (Entwurf 7), Fertigkeiten.
8. **Käfer II + Picotitanen:** Kap. 7, Kap. 8 (12 Titanen, Titanenbau) + **Streifzugbogen** (Entwurf 8).
9. **Welt** (Kap. 1) + **Weber** (Kap. 9, S. 201–211, S. 266–267) + **Anhang** + Suche über alles + Galerie + Gesamtcheck (Handy 1280, keine JS-Fehler, keine Lücken) → diesen Plan als „erledigt“ markieren.

Für jede Sitzung bittet Sonnet Moritz, das Corebook-PDF hochzuladen (für Bilder und Seitenbilder). Der Text liegt schon im Repo.

---

## 7. Bilder

Inventar: `plan/pico/bilder-inventar.tsv` (279 Bilder; Name `S<Buchseite>_<nr>_<b>x<h>`). Übersprungen wird nur die Kritzel-Landkarte (2476×1576, auf jeder Seite). Viele schmale Bilder (z. B. `S012_01_9x998`, `S037_01_21x928`) sind Seiten-Ränder/Streifen bzw. die rechte Hälfte einer Doppelseite – nie allein verwenden. Weiße 186×156-Bilder (S. 148–151) sind die Fertigkeits-Symbole (weiß auf farbigem Grund) – im Tool auf Kastenfarbe legen.

| Bereich | Quelle (Buchseite) | Ziel |
|---|---|---|
| Kritzel-Hintergrund | xref 2225 | `img/kritzel.webp` (fertig in `plan/pico/mockups/src/img/`) |
| Kapitel-Eröffnungen (Doppelseiten) | S. 6+7 · 28+29 · 48+49 · 68+69 · 82+83 · 98+99 · 152+153 · 170+171 · 190+191 · 200+201 · 268+269 · 338+339 (je großes Bild + schmaler Streifen) | `img/kapitel/k01-welt` … `k12-anhang` |
| Reich-Eröffnungen (Doppelseiten) | Hogwild S272_01+S273_01 · Shadow House S286_01+S287_01 · Skyglass Dome S300_01+S301_01 · Nekopolis S312_01+S313_01 · Westgate Mall S324_01+S325_01 | `img/reich/hogwild` … (fertig zusammengesetzt in `plan/pico/mockups/src/img/reich-*.webp`) |
| Aspekt-Gruppen | Figur auf der Doppelseite der Gruppe (S. 108–143), z. B. Sauger `S111_01` | `img/aspekt/sauger` |
| Gefahren | siehe `plan/pico/gefahren-liste.tsv` (Kandidaten **am Seitenbild prüfen**; manche Gefahren haben kein eigenes Bild → dann keins) | `img/gefahr/<id>` |
| Figuren in Reichen/Fraktionen | z. B. Tekso Quailheart `S281_01`, Two-In-One `S279_01`, Mini-Söldner `S277_01`, Indomitable `S289_01` | `img/figur/hogwild_tekso` |
| Titanen / Titanenbau | S. 170–189 (z. B. `S175_01`, `S178_01`, `S181_01`) | `img/titan/…`, `img/den/…` |
| Welt/Regeln-Illustrationen | übrige Bilder in Kap. 1–5, 7, 9 | `img/welt/…`, `img/regeln/…` – nur in die passende Unterseite |

Regeln: Doppelseiten als **ein** Bild ausgeben; sofort sprechend benennen; Freistellung lieber rechteckig (unten gerade), nur Figuren mit Maske; nie ein Bild einer falschen Figur/Gefahr zuordnen – im Zweifel weglassen. Alle Bilder auch in die Galerie (`pico/js/data/galerie.js`, Gruppen nach Bereich).

---

## 8. Startauftrag für jede Sonnet-Sitzung (zum Kopieren)

> Lies `plan/PICO_PLAN.md` im Repo einmoritz-spec/Spielleitertool und setze **Schritt N** um. Halte dich an Abschnitt 2 (Grundregeln, Namensregel, Glossar) und Abschnitt 3 (Design) und baue genau nach den Entwürfen in `plan/pico/mockups/`. Der englische Buchtext liegt in `quellen/pico/text/` (Seitenmarken = Buchseiten, PDF-Seite = Buchseite + 2), das PDF hänge ich an. Übersetze vollständig ins Deutsche, nichts weglassen, nichts erfinden. Prüfe jede Ansicht per Screenshot (1440×900 und 1280×800), behebe Lücken/Überlauf, schick mir die Screenshots, committe ohne Co-Authored-By/Claude-Session-Zeilen und pushe.
