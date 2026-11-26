# Datenformat der Inhaltsseiten (Broken Compass, Adventure Journal)

Engine: `compass/js/inhalt.js`, Stil: `compass/inhalt.css`, Mockups: `plan/compass/inhalt/*.html|png` (Stimmung, Bausteine). Alle Texte **komplett auf Deutsch**, **vollständig** (siehe Regel „Vollständigkeit“ in `plan/BROKEN_COMPASS_PLAN.md`).

## Dateien
- `compass/js/data/aj-<bereich>.js` → `BC_DATA.<bereich> = {parts: ["id1","id2",…]};` (Reihenfolge = Reihenfolge der Unterleiste)
- `compass/js/data/aj-<bereich>/<id>.js` → `BC_PART["<bereich>/<id>"] = {id, t, sub, s, blocks:[…]};`
  - `t` Titel in der Unterleiste (kurz), `sub` kleiner Zusatz (optional), `s` erste Buchseite.
- Bereiche: `grundlagen`, `abenteurer`, `herausforderungen`, `gefahren`, `schatzsuche`, `1999`. Eine Teildatei je Unterpunkt (lieber mehr kleine als eine große).
- Bilder: `compass/img/aj/<bereich>-<motiv>.webp`; im Block `{src:"aj/<datei ohne .webp>", pos:"50% 40%"}`. Vorhandene Startseitenbilder: `start/ab1-grundlagen`, `ab2-abenteurer`, `ab3-herausforderungen`, `ab4-gefahren`, `ab5-schatzsuche`, `ab6-1999`, `hero-hoehle`, `hero-tempel`, `hero-seeschlacht`, `kompass` (weißes Wasserzeichen).

## Text-Auszeichnung (in allen Strings)
`**fett**` · `*kursiv*` · Würfel `{w:1,1,2,5}` (Augenzahlen; gedimmte/zusätzliche nach `|`: `{w:1,1|3,5}`) · Seitenlink `[[S. 12|bc_aj|12]]` (Text|Buch-ID|Seite) für Verweise im Fließtext. Seitenzahlen **nur als Buchseite** (nicht PDF-Seite), Format „S. 12“.

## Blöcke (`blocks`)
- `{h:"Titel", s:12}` – Blocküberschrift (Versalien mit Linie; erscheint automatisch in der Seitenleiste; `s` = Buchseite, klein am Rand).
- `{t:"prose", p:["Absatz",…], q:"rotes Zitat", cap:true, cols:2, img:{src,pos,side:"l"|"r"}}` – Lesetext (19 px). `cap` Initiale. `img` schwebt 420 px breit, Text läuft darum.
- `{t:"cards", cols:1-4|6, style:"card"|"dark", items:[{k:"Kicker", h:"Titel", s:12, c:"#farbe", p:"Text"|["Absätze"], items:["Listenpunkt"], img:{src,pos}, fold:true}]}` – Kartenraster. `c` = Farbbalken/Titelfarbe. `fold:true` = eingeklappt (Text bleibt vollständig erhalten). Für Tags, Felder, Fertigkeiten, Gegenstände, Waffen, Gefahren, Feinde, Gefühle usw.
- `{t:"tiles", items:[{n:"1", h:"Titel", p:"Text", img:{src,pos}}]}` – große Bildkacheln (2–4), Bild füllt, Text unten.
- `{t:"box", h:"Titel", p:["…"], c:"#farbe", dark:true}` – Randkasten (alle Kästen des Buchs, z. B. „Tun oder nicht tun“).
- `{t:"script", h:"Szene 2 – Herausforderung und Erfolg", lines:[{n:"Jake", p:"Text"}, {r:"Würfelt … {w:1,1,2,3,5,6}"}]}` – Drehbuch (Courier mit Lochrand) für alle Erzählbeispiele „Scene #n“; Würfelregie-Zeilen als `{r:…}`.
- `{t:"steps", items:[{h:"Titel", p:"Text"}], dark:false}` – nummerierte Schritte (2–9).
- `{t:"table", cols:[…], rows:[[…],…], first:true}` – Tabellen (D66 und Zufallstabellen als Raster; `first` hebt erste Spalte hervor).
- `{t:"chips", cols:3, groups:[{h:"Taschen", sub:"Erklärung", items:["Amulett","Kompass"]}]}` – Listen kurzer Einträge als Chips.
- `{t:"list", cols:1-3, items:["…"]}` – einfache Aufzählung.
- `{t:"quote", h:"Titel", q:"Zitat", p:["…"], img:{src}}` – dunkles Schlussband mit Bild.

## Regeln für die Übertragung
1. **Nichts weglassen.** Jeder Absatz, Listenpunkt, Kasten, jede Tabelle/Zeile, jedes Beispiel, jede Randnotiz des Buchs kommt in genau einen Block. Kästen am Seitenrand als `box`. Nichts doppelt.
2. **Nicht erfinden.** Nur Buchtext (frei, aber sinngetreu und gut lesbar ins Deutsche übertragen; Ich-/Du-Ansprache des Buchs beibehalten, lockerer Erzählton).
3. **Begriffe** (verbindlich): Fortune Master → Schicksalsmeister · Challenge → Herausforderung · Danger → Gefahr · Clue → Hinweis · Luck → Glück (Luck Points → Glückspunkte, Luck Coin → Glücksmünze, Out of Luck → ohne Glück) · Rival → Rivale · Doomsday Clock → Weltuntergangsuhr · Safe Place → Sicherer Ort · Treasure → Schatz · Adventurer → Abenteurer · Adventurer Sheet → Abenteurerbogen · Tag → Tag · Expertise → Expertise · Extras → Extras · Episode → Folge · Season → Staffel · Pilot → Pilot · Diamond → Raute · Advantage/Disadvantage → Vorteil/Nachteil · Risk → Risiko · Re-roll → Wiederholungswurf · All or nothing → Alles oder nichts · Accident → Unfall · Success → Erfolg (Basic/Critical/Extreme/Impossible → einfach/kritisch/extrem/unmöglich) · Feeling → Gefühl · Fields: Action → Aktion, Guts → Mut, Knowledge → Wissen, Society → Gesellschaft, Wild → Wildnis, Crime → Verbrechen · Skills: Fight Kämpfen, Leadership Anführen, Stunt Stunt, Drive Fahren, Cool Kaltblütigkeit, Shoot Schießen, Culture Kultur, First Aid Erste Hilfe, Tech Technik, Eloquence Redekunst, Charm Charme, Observation Beobachtung, Scout Spähen, Survival Überleben, Tough Zäh, Alert Wachsam, Dexterity Fingerfertigkeit, Stealth Schleichen · Gefühle: Powerful Kraftvoll, Daring Wagemutig, Focused Konzentriert, Confident Selbstsicher, Fierce Wild entschlossen, Untouchable Unantastbar, Bleeding Blutend, Shocked Geschockt, Dizzy Benommen, Embarrassed Beschämt, Broken Gebrochen, Scared Verängstigt · Tags: Action Hero Actionheld, Cheater Betrüger, Daredevil Draufgänger, Explorer Entdecker, Gunslinger Revolverheld, Hunk Muskelprotz, Hunter Jäger, Medic Mediziner, Pilot Pilot, Playboy/Femme Fatale Playboy/Femme Fatale, Professor Professor, Rebel Rebell, Reporter Reporter, Soldier Soldat, Spy Spion, Techie Techniker, Thief Dieb, Wingman/Wingwoman Begleiter. Eigennamen (Personen, Orte, Buchtitel wie „Golden Age“) bleiben.
4. **Seitenzahlen:** Buchseite = PDF-Seite − 1 (Adventure Journal). `s` an Überschriften/Karten, nie auf Übersichten.
5. **Farben:** Feldfarben Aktion #b3321e, Mut #d1721a, Wissen #2d5f9a, Gesellschaft #7a3f8f, Wildnis #3f7a3a, Verbrechen #3d3d46; Schwierigkeit einfach #4f8a5a, kritisch #3d7a8f, extrem #8a5a2a, unmöglich #7a1b2a; sonst keine `c` angeben (nimmt die Abschnittsfarbe).
6. **Bilder:** nur reine Illustrationen aus dem PDF (ohne Text, ohne weißen Rand), nach Seitenverhältnis einsetzen; Mockups zeigen die Verwendung (große Bilder in `prose`, `tiles`, `quote`; kleine Bilder in Karten). Extraktion mit `pdfimages -f N -l M -png`, nur kleine Seitenbereiche am Stück (sonst Zeitüberschreitung), Ausgabe `compass/img/aj/<bereich>-<motiv>.webp` (max. 1600 px Breite, Qualität ~82). Nur Bilder verwenden, die im Buch wirklich dazugehören.

## Untersettings (Jolly Roger, Voyages Extraordinaires, LuckTales)
Eigene Bereiche (= Reiter in der Kopfzeile, Farbe je Bereich) werden in `compass/js/data/bereiche-<jr|ve|lt>.js` angelegt:
```js
window.BC_BUCH = window.BC_BUCH || {};
BC_BUCH.jr = {t:"Jolly Roger", c:"#6e1414", b:"bc_a1", areas:[
  {id:"jr-piratenzeit", t:"Piratenzeit", c:"#6e1414", img:"start/…webp", s:6, sub:["Willkommen","Das Goldene Zeitalter",…]}, … ]};
```
`id` global eindeutig (Präfix `jr-`/`ve-`/`lt-`); Daten der Bereiche liegen wie beim Adventure Journal in `compass/js/data/<id>.js` (`BC_DATA["<id>"] = {parts:[…]}`) und `compass/js/data/<id>/<teil>.js` (`BC_PART["<id>/<teil>"] = {…}`). Buch-ID für Seitenlinks: `bc_a1` Jolly Roger, `bc_a2` Voyages Extraordinaires, `bc_z1` LuckTales (Seitenversatz PDF = Buchseite + 2 / + 2 / + 1; Buchseite = gedruckte Zahl). Folgen (Episoden) NICHT hier, sondern nach `DATENFORMAT_FOLGEN.md`.

### Ergänzung Untersettings (verbindlich)
Jeder Auftrag trägt seine Bereiche in **seine eigene** Datei `compass/js/data/bereiche-<jr|ve|lt>-<a|b|c|d|e>.js` ein (Buchstabe = dein Auftrag): `BC_BUCH.jr.areas.push({id:"jr-…", t:"Kurzname", c:"#farbe", s:6, img:"start/…"});` (Kopf `BC_BUCH.<k>` existiert schon in `bereiche-<k>.js`). Ein Bereich = ein Abschnitt (Section) des Buchs = ein Reiter in der Kopfzeile (Name höchstens ~14 Zeichen), Unterleiste = Teile. Quell-PDFs: `/mnt/user-data/uploads/Broken_Compass___Abenteuer___Season_02_Jolly_Roger__EN_.pdf` (Offset PDF = Buchseite + 2), `…Season_03_Voyages_Extraordinaires__EN_.pdf` (+2), `…8f6ad430-Broken_Compass___Zusatz___LuckTales_EN.pdf` (+1); Volltext je Seite (Formfeed-getrennt, Index 0 = PDF-Seite 1): `/home/claude/bc/txt/Abenteuer___Season_02_Jolly_Roger__EN_.txt`, `…Season_03_Voyages_Extraordinaires__EN_.txt`, `Zusatz___LuckTales_EN.txt`.
Folgen (Episoden): nach `DATENFORMAT_FOLGEN.md`, Datei `compass/js/data/ep-<id>.js`; Engine darf von Aufträgen **nicht** geändert werden (`epi.js`, `inhalt.js`, `inhalt.css`, `app.js`, `index.html`, `sw.js` gehören dem Hauptauftrag); fehlt ein Baustein, nächstbesten nehmen und im Bericht nennen. In Folgen-Szenen funktionieren zusätzlich alle Blocktypen aus diesem Dokument (`cards`, `table`, `box`, `list`, `prose` …), die Marken `{K:H|…}` `{K:G|…}` `{P:…}` jedoch nur in den Blöcken n, d, clue, box, list, prose, cards-Texten.
