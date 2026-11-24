# MÖRK BORG – Design-Konzept (Phase 1, Entwurf zur Freigabe)

Stand: 22. Nov. 2026. Entwürfe von Moritz freigegeben. Der vollständige Bauplan steht in `plan/MOERKBORG_PLAN.md`.

## Quellen
| Was | Umfang | Seitenzählung |
|---|---|---|
| Corebook (EN) | 96 PDF-Seiten, 419×595 pt (A5) | **Buchseite = PDF − 4** (`off:4`), Vorsatzseiten (PDF 2–3, 95–96) ohne Seitenzahl → „Vorsatz“ |
| Rules Apocrypha (EN) | 67 PDF-Seiten, 429×613 pt | **Buchseite = PDF** (`off:0`) |
| Character Sheet (EN) | im Drive (05 Material) – nur Text gelesen | fehlt noch als Datei |

Buchtext als Markdown: `quellen/moerkborg/text/c00…c12` (Corebook) und `a01…a10` (Apokryphen), erzeugt mit `plan/moerkborg/extract_text.py` (Markierungen `[P]` pink = Spielwerte, `[W]` weiß auf Schwarz, `[G]` gelb, `##` Überschrift). Bild-Inventar: `plan/moerkborg/bilder-inventar-core.tsv`, `-apo.tsv`; Bilder mit `plan/moerkborg/extract_images.py`.

## Was das Buch ausmacht (gemessen)
- **Farben** (Flächen- und Textfarben direkt aus dem PDF): Gelb `#ffe800` (größte Fläche), Schwarz `#12120d` / `#020200`, Pink `#ff41b4` (Werte, Akzentseiten), Weiß, Silber `#bfc1c1`, Creme `#fffae5`, Grau `#7b7d7c`. Apokryphen: Gelb `#ffdd00`, Magenta `#ec008c`, Rot `#df0024`, Tinte `#231f20`.
- **Seiten** wechseln hart zwischen Schwarz, Gelb, Weiß und Pink; Illustrationen randlos in Schwarzweiß mit wenig Rot.
- **Schrift** (über 100 Schriften, Plakat-Satz). Wiederkehrend: Fraktur für Titel (Sebaldus-Gotisch, FetteTrump, UnifrakturCook), Schreibmaschine für Regeln und Kreaturen (CallingCode, Courier Prime), Futura für die Regelübersicht, Alegreya für das Abenteuer, schmale Plakat-Grotesk für große Wörter (INITIATIVE, MELEE).
- **Bausteine:** schwarze Etiketten mit weißen Versalien über Regelkästen (Regelübersicht S. 90), Würfel-Leiste mit senkrechten Linien (Kalender S. 16), gelbe Würfelnummern auf Schwarz (Ausrüstung S. 19), pinke Werte-Zeilen der Kreaturen, gestrichelte Hinweiskästen (S. 9), Raumtexte mit Fraktur-Titel, kursiver Stimmung, fetten Stichworten und Himmelsrichtungen in Versalien (S. 77 ff.).

## Schriften im Tool (alle frei, Umlaute vollständig geprüft)
| Rolle | Schrift | Begründung |
|---|---|---|
| Titel, Reiter, Raumtitel | **UnifrakturCook 700** | kommt im Buch selbst vor; die Teil-Sets von Sebaldus/FetteTrump im PDF sind unvollständig (es fehlen u. a. z, M, R, Z, Umlaute) |
| Spielwerte, Tabellen, Kreaturentext | **Courier Prime 400/700** | kommt im Buch vor (CallingCode ist kommerziell) |
| Lesetext (Welt, Abenteuer, lange Kreaturentexte) | **Alegreya 400/400i/700/800** | Schrift des Abenteuers im Buch |
| Regeltext, Etiketten | **Jost 400/500/700** | freier Futura-Ersatz (Regelübersicht ist in Futura) |
| Große Wörter, Kreaturennamen | **Anton** | Ersatz für GoodPro Comp Black |
Dateien: `plan/moerkborg/mockups/src/fonts/`. Das Logo ist `assets/logos/moerk-borg.webp` (als Maske, gelb).

## Grundidee: drei Papiere, ein Signal
1. **Schwarz = Spiel** (Spieltisch, Tabellen, Welt-Lesetext). Reiter schwarz, aktiver Reiter gelber Block.
2. **Gelb = Nachschlagen** (Reiter-Leiste und Seitenleiste gelb, aktiver Reiter schwarz – die Umkehrung des Spiels).
3. **Weiß = Papier** für Abenteuer, Kreaturen, Regel-Inhalt, Charakterbogen.
4. **Pink nur für Spielwerte** (TP, Moral, SG, Schaden, Würfel) – genau wie die pinken Werte-Zeilen im Buch. Keine andere Akzentfarbe.
5. Harte Kanten, keine Rundungen, keine Schatten. Linien 2–3 px schwarz oben an Kästen; Etikett-Schilder statt Rahmen.
6. Raster: Seitenrand 24 px, Spaltenabstand 24–36 px, Abstände nur 4·8·12·16·24·32·48. Höchstens drei Inhaltsspalten.

## Aufbau (bewusst anders als die übrigen Settings)
- **Startseite = „Register“** (nach dem Register auf der Vorsatzseite): links das freigestellte Cover-Skelett in voller Höhe auf Gelb, rechts vier römisch nummerierte Teile mit Fraktur-Titeln und Stichworten (Zeile kehrt sich bei Hover auf Gelb um), unten gelber Balken „Zum Spieltisch“ mit Kalender-Stand. Keine Kacheln, kein Kopfband.
- **Spiel (Reiter):** Spieltisch · Abenteuer · Kreaturen · Tabellen (+ Stift).
- **Nachschlagen (Burger + Register):** Die sterbende Welt · Die Regeln · Die Verdammten (Charaktere, Klassen, optionale Tabellen) · Die Apokryphen.
- **Spieltisch:** oben der Kalender des Nechrubel (Würfel-Leiste W100…W2, alle 36 Heimsuchungen als W66-Netz + 7:7, Tag-Zähler), darunter Gruppe | Gewalt (Kreaturen mit TP-Kästchen, Moral-Auslöser) | Regelspiegel (gelb, die vier Kästen der Regelübersicht).
- **Abenteuer:** Buchkarte als Navigation (Klickflächen auf Räumen), alle Räume als Nummernleiste, Räume zweispaltig zeilenweise wie eine Doppelseite.
- **Kreaturen:** Raster ohne Rahmen (schwarze Linie oben), Eigenname groß, Werte pink, Bild klein; aufgeklappt mit Bild, Werte, Text, Beute, „Auf den Spieltisch“.
- **Welt:** Weltkarte ungeschnitten in voller Höhe als Navigation; Ortsleiste nach Land gruppiert; Buchseiten-Nachbarn stehen nebeneinander.

## Entwürfe
`plan/moerkborg/mockups/m1…m8.jpg` (sauber) und `…-erklaert.jpg` (mit nummerierten Erklärungen), Quellen in `mockups/src/` (`mb.css` = Design-System).

| Nr. | Ansicht |
|---|---|
| 1 | Startseite „Register“ |
| 2 | Spieltisch (Kalender, Gruppe, Gewalt, Regelspiegel) |
| 3 | Abenteuer Rotblack Sludge (Karte + Räume 6/7 + Zufallsbegegnungen) |
| 4 | Kreaturen (Grundbuch, Goblin aufgeklappt) |
| 5 | Nachschlagen · Die Regeln · Gewalt |
| 6 | Tabellen · Unterwegs (Wetter, Fallen, Okkulte Schätze, Namen) |
| 7 | Nachschlagen · Die sterbende Welt · Galgenbeck/Sarkash mit Weltkarte |
| 8 | Charakterbogen (vorläufig – Original-Bogen fehlt) |

## Offen / zu prüfen
- Troll-Name (Bild-Schriftzug S. 64, nur angeschnitten lesbar) am Seitenbild klären.
- Charakterbogen erst nach Upload des Original-PDFs genau nachbauen.
- Weltkarte trägt englische Beschriftungen im Bild („The Endless Sea“, „Valley of the Unfortunate Undead“).
