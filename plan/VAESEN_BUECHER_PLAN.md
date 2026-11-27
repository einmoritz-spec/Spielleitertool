# Vaesen – weitere Bücher und Mysterien-Leitstand v2 (Bauplan)

Stand: 27. Nov. 2026. Nur Planung, nichts davon ist gebaut. Entwürfe (HTML + Screenshots) liegen unter `plan/vaesen/mys/`.
Vorgänger: `plan/VAESEN_SEASONS_PLAN.md` (Seasons of Mystery, gebaut), `plan/SYSTEM_EINBAU.md` (allgemeine Regeln).

---

## 1. Die sechs Bücher

| Buch | Seiten | Inhalt | Wohin im Tool |
|---|---|---|---|
| **A Wicked Secret and Other Mysteries** | 112 | 4 Mysterien + Handouts | Hauptsetting, Startseite › Mysterien (Reihe „Mysteriensammlung“) |
| **City of My Nightmares** | 128 | Kampagne in Stockholm: Einführung (Vorgeschichte, Kampagnenüberblick, Stockholm) + 4 Mysterien + Wesen „Rusalka“ + Handouts | Hauptsetting, Startseite › Mysterien (Reihe „Kampagne“) |
| **The Lost Mountain Saga** | 92 | Kampagne in Lappland: Einführung (Abisko-Mine, verlorener Berg, grüne Steine, Vanadisir, Übersichtskarte, 3 Kampagnen-NSC) + 5 Mysterien + Handouts | Hauptsetting, Startseite › Mysterien (Reihe „Kampagne“) |
| **Mythic Britain & Ireland** | 164 | Welt (vier Nationen, Stadt-/Landleben, London, NSC, Gruppen, mysteriöse Orte, Anderswelten), Gesellschaft (Geschichte, Rose House, neue Archetypen), 13 Wesen + Sonderregeln + „bekannte Vaesen“, 3 Mysterien, Handouts, Anhang (Berufs- und Lebensereignis-Tabellen) | **Untersetting** im Dropdown unter Vaesen |
| **Mythic Carpathia** | 144 | Welt (Böhmen, Volksglaube, Städte, Alltag, Prag mit Karte und Geschichte, fünf Städte, Prag heute), Karpatische Gesellschaft (Pravda, Pulverturm, Ausbauten, neuer Archetyp), 16 Wesen, 3 Mysterien, Handouts | **Untersetting** im Dropdown unter Vaesen |
| **Solo: Thursday’s Child** | 12 | Nur Solo-Regeln mit Orakel-Tabellen | **Nicht einbauen** (Vorgabe: Solo-/Orakel-Regeln weglassen). Bleibt im Bücherregal und öffnet nur das PDF. |

Mysterien insgesamt danach: Tanz der Träume 1 + Seasons 4 + Wicked 4 + City 4 + Lost Mountain 5 = **18 im Mythischen Norden**, dazu je **3 in Britain & Ireland und 3 in Carpathia**.

Alle Mysterien haben dieselbe Buchgliederung (Vorspiel › Hintergrund, Konflikte, Einladung, Vorbereitungen, Reise, Ankunft, Countdown und Katastrophe › Orte › Konfrontation › Nachspiel) und ein Ouroboros-Eröffnungsbild. Das ist die Grundlage für einen gemeinsamen Leitstand.

**Seitenzahlen:** Die Lesezeichen der PDFs liefern PDF-Seiten. Den Versatz zur Buchseite je Buch einmal bestimmen und im Bookviewer (`BV.init`) eintragen; im Tool immer Buchseiten anzeigen.

---

## 2. Mysterien-Leitstand v2 (gilt für alle Mysterien, auch rückwirkend für Tanz und Seasons)

### Was heute nicht gut ist
1. **Zeitungsspalten:** Hintergrund, Anreise und Konfrontation fließen in drei Spalten von oben nach unten. Man muss hoch und runter scrollen, die Spalten sind ungleich lang und lassen Lücken (Verstoß gegen die eigene Vorgabe).
2. **Anreise ist ein Durcheinander:** Einladung + Brief, Ankunft, Karten, Hinterhalt und Countdown stehen nebeneinander in drei Spalten ohne klare Lesereihenfolge. Der Countdown steht doppelt (Leiste und Text).
3. **Kopfzeile passt nicht:** Im Mysterium stehen oben die Reiter des Grundregelwerks (Charaktere, Regeln …), aber nirgends steht, in welchem Mysterium man ist.
4. **Nachschlagen kostet den Platz:** Figuren, Hinweise und Handouts sind eigene Reiter. Wer im Spiel kurz Augusts Werte braucht, verlässt den Ort, an dem er gerade ist.
5. **Orte:** Einführungstext steht doppelt (über und unter dem Titel), die Karte sitzt mittig mit viel Leerraum, Kästen stehen abgetrennt am Ende.
6. **Figuren:** sehr lange, voll aufgeklappte Karten; die zugehörigen Kästen (Drachenkrankheit, Träume) hängen unten abgelöst.
7. **Begriffe:** In allen Mysterien steht „WISSEN“, im Regelteil heißt die Fertigkeit „Gelehrsamkeit“. Einheitlich auf **Gelehrsamkeit** umstellen.

### Neuer Aufbau (Entwürfe `orte.html`, `auftakt.html`)
- **Kopfzeile im Mysterium:** Logo + Titel des Mysteriums (klein grau darunter/daneben: Buch · Jahreszeit bzw. Kampagnenteil). Die Grundregelwerk-Reiter verschwinden, solange man im Mysterium ist; Esc bzw. Logo führt zurück.
- **Unterleiste = Ablauf des Mysteriums**, fünf Punkte statt acht: **Vorgeschichte** (Hintergrund, Konflikte) · **Auftakt** (Einladung, Vorbereitungen, Reise, Ankunft, Countdown und Katastrophe) · **Orte** · **Konfrontation** · **Nachspiel**.
- **Countdown** sitzt rechts in derselben Unterleiste als Kette 1–2–3–K: Klick hakt ab, Hover/Klick zeigt den Schritttext als kleines Pop-up. Er ist immer sichtbar, steht nicht mehr doppelt und braucht keine eigene Zeile.
- **Nachschlagen** rechts außen in der Unterleiste: **Figuren · Hinweise · Handouts · Karten**. Klick öffnet eine **Schublade rechts** (ca. 440 px), der Ort links bleibt stehen.
  - Figuren: zugeklappte Zeilen (Porträt, Name, Rolle, vier Attributwerte); Klick klappt die volle Karte mit Text, Fertigkeiten, Zähigkeit zum Abhaken und Ausrüstung auf. Vaesen mit Macht/Kräften/Zuständen ebenso.
  - Hinweise: alle Hinweise nach Ort gruppiert, Klick = erledigt (grau), gleicher Zustand wie im Ort.
  - Handouts: Liste, Klick öffnet den Vollbild-Zeigemodus.
  - Karten: alle Karten des Mysteriums, Klick = Großansicht.
- **Seitenleiste links** für die Abschnitte des aktiven Punkts (Orte: jeder Ort ein Eintrag; Auftakt: Einladung, Vorbereitungen, Reise, Ankunft, Countdown; Konfrontation: die Wege des Buchs). Rechts stehen alle Abschnitte **flach untereinander**, Klick springt hin. Eingeklappt bleibt das Layout intakt.
- **Lesetext über die volle Breite** (gute Lesegröße), keine Zeitungsspalten. Seitenelemente **schweben rechts** begrenzt breit, der Text fließt darum und darunter weiter:
  - Karten/Pläne (Ortskarte, Reisekarte) schwebend rechts, Klick = groß.
  - Der Einladungsbrief als Papierzettel schwebend rechts (Handschrift Caveat, „Handout 2A“ klein oben).
  - Kästen (Hinterhalt!, Die Laterne …) als Karten **an der Stelle, an die sie im Buch gehören**, zwei nebeneinander, wenn sie aufeinander folgen.
- **Ort:** Titel + „S. 38“ einmal oben; Zeile „Hier“ mit Figuren-Chips (Klick öffnet die Figur in der Schublade); Text; „Herausforderungen“; „Hinweise“ als Kärtchen im Raster (2 Spalten), Klick = erledigt; zugehörige Kästen darunter.
- **Ankunft:** Die Auskünfte des Auftraggebers als Kärtchen im 2er-Raster, nicht als lange Liste.
- **Konfrontation:** Die Wege (z. B. Ausgang im Eisenwerk · Planung und Weg zur Höhle · Endkampf) als Seitenleisten-Einträge, Text flach untereinander; Werte der beteiligten Figuren nur als Chip/Schublade.
- **Vorgeschichte:** Eröffnungsbild schwebend rechts, Hintergrund als durchgehender Lesetext, darunter die Konflikte als Kartenreihe (Haupt-, Nebenkonflikt; „Im mythischen Britannien und Irland“ eingeklappt).
- Unverändert: Notizen nur als Stift, Vorlesetext ohne Beschriftung, nur Buchtext, „S.“-Links öffnen das PDF, Spielstand je Mysterium in `localStorage`.

### Technik
- **Ein gemeinsamer Leitstand** `vaesen/js/mys2.js` + `vaesen/mys2.css` statt `tanz.js` und `mys.js` getrennt. Jedes Mysterium ist nur noch eine Datendatei im Seasons-Format (`js/data/<buch>-<id>.js`, Felder wie `som-feuer.js`: `titel, buch, p, zeit/teil, ort, warnung, bild, hg, an, cd, orte, kf, ns, figs, wesen, kaesten, ho`).
- Tanz der Träume in dieses Format überführen (Text bleibt der vorhandene, wird nur umgehängt).
- Spielstände der alten Leitstände übernehmen (gleiche Schlüssel weiterverwenden oder einmalig umkopieren), damit nichts verloren geht.
- Alte Ansichten fliegen danach raus.

---

## 3. Startseite (Entwurf `plan/vaesen/mys/vc.html`, gewählt 27. Nov. 2026)
- Bereich „Mysterien“ als **Siegel**: Je Buch eine Überschriftzeile (Buchtitel rot in Marcellus, Art klein grau kursiv, rechts ggf. „Vorwort“/„Einführung“). Keine Cover-Kacheln, keine Kästen, keine Verläufe.
- Darunter die Mysterien als **vollständige Ouroboros-Kreise** (freigestellt, nichts abgeschnitten), ca. 205 px breit.
- **Titel als Bogenschrift eng unter dem Ring** (SVG `textPath`, Mittelpunkt = Ringmitte, Grundlinie ca. 4 px außerhalb der Ringspitzen; lange Titel automatisch kleiner, nie abgeschnitten). Darunter klein grau kursiv: Jahreszeit · Ort bzw. „Teil n“.
- Grundregelwerk und Seasons teilen sich die erste Zeile; jede weitere Sammlung/Kampagne eine volle Zeile (bis 5 Kreise).
- Hover: Kreis leicht größer, Spielstand und „Starten“/„Weiterspielen“ erscheinen dezent.
- Bilder: Ouroboros-Eröffnungsbilder aus den PDFs freistellen (Papier vom Rand her transparent, Kapitelzeile/Inhaltswarnung entfernen, Ring + Bild als Ganzes; Verfahren siehe `plan/vaesen/mys/em/`). Für Seasons das Original-Emblem aus dem Seasons-PDF nehmen; falls es keins gibt, das Vollbild in den Ring setzen (wie im Entwurf).
- Bücherleiste unten bleibt; eingebaute Bücher farbig, nicht eingebaute grau mit PDF.

## 4. Untersettings Mythic Britain & Ireland und Mythic Carpathia (Entwurf `mbi.html`)
- Im Setting-Dropdown unter **Vaesen** drei Untersettings (eingeklappt, Aufklappen nach 1,5 s): **Mythischer Norden** (heutiges Tool) · **Mythic Britain & Ireland** · **Mythic Carpathia**. Die heutigen Dropdown-Einträge „Grundregelwerk / Settingbücher / Mysterien & Kampagnen / Solo & Material“ entfallen.
- Eigenes Farbklima je Untersetting (Britannien: Moos-/Steingrün nach dem Cover; Karpaten: Ocker/Rot nach dem Cover), gleiche Schriften und Bauweise wie die Vaesen-Startseite.
- **Startseite:** Titelbild aus dem Cover, Logo + Untertitel, Bildstreifen der Bereiche, darunter die drei Mysterien.
- **Kopfzeile:** **Die Welt** · **Die Gesellschaft** · **Wesen**.
  - *Britain & Ireland* – Welt: Vier Nationen, Stadtleben, Wichtige Städte, Landleben, London, Nichtspielercharaktere, Gesellschaften und Gruppen, Mysteriöse Orte, Anderswelten, Karte. Gesellschaft: Geschichte, Richtlinien, Rose House, Neue Archetypen, Hintergrundtabellen (Anhang: Berufe, Lebensereignisse K–M als Raster). Wesen: 13 Wesen als Bildraster → Detailkarte im Stil der vorhandenen Vaesen-Karten; Sonderregeln (Unsichtbarkeit, abtrennbare Seele, Teil-Unverwundbarkeit, unmögliche Aufgaben, Herausforderungen/Gefallen/Pfänder) als eigener Unterpunkt; „Bekannte Vaesen“ (Anpassungen der Grundregelwerk-Wesen) verlinkt die vorhandenen Karten.
  - *Carpathia* – Welt: Ein Ringen um Freiheit, Böhmen, Volksglaube, Städte, Alltag, Prag (Karte, Geschichte, fünf Städte, Prag heute). Gesellschaft: Pravda, Der Pulverturm, Ausbauten, Neuer Archetyp. Wesen: 16 Wesen.
- Neue Archetypen zusätzlich in der Charaktererstellung des Hauptsettings auswählbar (mit Herkunftsangabe).
- Mysterien laufen im selben Leitstand v2, Kopfzeile zeigt das Untersetting-Logo.

---

## 5. Übersetzung und Inhalte (für alle Bücher)
- Vollständig ins Deutsche, nur Buchtext, nichts zusammenfassen oder erfinden. Glossar aus `VAESEN_SEASONS_PLAN.md` gilt, plus: Learning = **Gelehrsamkeit**.
- **Titel:** Buchtitel bleiben englisch (Produktnamen wie „Seasons of Mystery“); Mysterien- und Kapiteltitel werden übersetzt (Entwurfsvorschläge: Das Silber des Meeres, Ein böses Geheimnis, Die Nachtsau, Das Lied vom fallenden Stern; Witterung eines Mörders, Lied an den Mond, Die Spukbibliothek, Stadt meiner Albträume; Pflicht und Verzweiflung, Der Beginn des Falls, Wo die Sonne stirbt, Der Prinz und die Hexe, Die Saga vom verlorenen Berg; Die alte Meg, Der Vorfall von Llantywyll, Die Hampstead-Gruppe; Ein Pakt aus Blut, Der aufziehende Sturm, Das Geheimnis des Maharal). Orts- und Personennamen bleiben.
- Handouts mit englischem Text nie als Bild zeigen: leeres Papier + deutscher Text.
- Inhaltswarnungen der Mysterien klein über dem Titel der Vorgeschichte (wie heute).

## 6. Bilder
- Pro Buch alle Bilder extrahieren (`pdfimages`; ganzseitige Bilder, Karten und Kapitel-Eröffnungen **immer** mitnehmen; Doppelseiten zusammensetzen), sofort benennen `<buch>_<mysterium|kapitel>_<motiv>.webp`, `full/` + `thumb/`.
- Ouroboros-Eröffnungsbilder als eigene Dateien (für Startseite und Vorgeschichte).
- Porträts klein in die Figurenzeile, Karten groß und anklickbar, Wesen hochkant im Wesen-Raster.
- Je Buch eine Galerie (`galerie-<buch>.js`), im Galerie-Knopf nach Buch umschaltbar.

## 7. Reihenfolge (Etappen, jede mit Screenshots und Push)
0. Gelehrsamkeit statt WISSEN in allen vorhandenen Mysterien.
1. **Leitstand v2** bauen, Seasons + Tanz der Träume umstellen, alte Leitstände entfernen. ← zuerst, weil alles Weitere darauf aufsetzt.
2. **Startseite**: Mysterien-Reihen nach Buch (zunächst mit Platzhaltern „noch nicht eingebaut“ für die neuen Bücher).
3. **A Wicked Secret** (4 Mysterien).
4. **City of My Nightmares** (Einführung + 4 Mysterien + Rusalka).
5. **The Lost Mountain Saga** (Einführung + 5 Mysterien).
6. **Mythic Britain & Ireland** als Untersetting (Gerüst, Welt, Gesellschaft, Wesen, dann 3 Mysterien).
7. **Mythic Carpathia** als Untersetting (ebenso).
8. Galerie, Suche („f“), i-Knopf je Untersetting, Tastenkürzel, Prüfung aller Routen.

Etappen 3–7 sind reine Übersetzungs- und Datenarbeit nach festem Muster und eignen sich für Sonnet/Agents (ein Agent pro Mysterium, Ergebnis gegen das PDF prüfen).

## 8. Entscheidungen
Am 27. Nov. 2026 freigegeben: Leitstand v2, Startseite mit einer Reihe pro Buch, Untersettings Britain & Ireland und Carpathia, Thursday’s Child nur als PDF, Buchtitel englisch und Mysterientitel deutsch, Reihenfolge wie in Abschnitt 7.

### Ursprünglich offene Fragen
1. Leitstand v2 so freigeben (Unterleiste mit 5 Punkten + Countdown + Nachschlage-Schublade, Lesetext breit mit schwebenden Elementen)?
2. Startseite: Mysterien eine Reihe pro Buch?
3. Britain & Ireland und Carpathia als Untersettings mit eigener Startseite (statt alles im Hauptsetting)?
4. Thursday’s Child nicht einbauen (nur PDF)?
5. Buchtitel englisch, Mysterientitel deutsch?
6. Reihenfolge der Etappen so, oder ein bestimmtes Buch zuerst?
