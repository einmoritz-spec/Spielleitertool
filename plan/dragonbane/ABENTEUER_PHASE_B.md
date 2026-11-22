# Phase B – Briefing für die Übersetzungs-Agenten (Stand nach Phase A)

Zuerst lesen: `plan/dragonbane/ABENTEUER_PLAN.md` (Regeln §1, Modell §2, Pakete §5, Namen §6). Dieses Blatt ergänzt, was Phase A tatsächlich gebaut hat.

## Was es schon gibt
- Motor: `dragonbane/js/abenteuer.js` (generisch). Beispiel im neuen Format: `dragonbane/js/data/ab-burg.js` – **lies es als Vorlage**.
- Platzhalter: die erste Datei je Abenteuer enthält `DB_AB[id] = {id, t, band, buch, p, stub:1}`. **Ersetze** den Inhalt komplett durch dein vollständiges `DB_AB["<id>"] = {…}` (ohne `stub`). `-b`/`-c`/`-sc`-Dateien sind leere Kommentar-Platzhalter, werden danach geladen und können `DB_AB[id].bereiche.push(…)` / `Object.assign(DB_AB[id].figuren, {…})` / `Object.assign(DB_AB[id].kaesten, {…})` nutzen.
- Bände: `DB_BAND.dk.einf = [...]` bzw. `DB_BAND.pg.einf = [...]` in `abenteuer-baende-dk.js` / `-pg.js` – entweder flache Blöcke oder Abschnitte `[{id, t, p, b:[Blöcke]}]` (dann mit Seitenleiste). Kurze Abschnitte (≈ ein Absatz) zu einem Eintrag zusammenfassen.
- `index.html`, `sw.js`, `style.css`, `js/*.js` **nicht ändern** (Ausnahme: offensichtlicher Ein-Zeilen-Fehler im Motor – dann in der Abschlussmeldung nennen).
- Textauszug deines Pakets: `quellen/dragonbane/text/abenteuer/<paket>.md` (b1a … b9). **Zier-Initialen fehlen** („eep in“ statt „Deep in“) und Spalten/Tabellen können verwürfelt sein → jede Seite am Seitenbild prüfen: `pdftoppm -r 70 -f <PDF> -l <PDF> -png "<pdf>" /tmp/<paket>/s` und mit Read ansehen.
- Bild-Inventar: `plan/dragonbane/bilder-adv.tsv`, `bilder-st.tsv`, `bilder-pg.tsv` (pdfseite, buchseite, xref, anzahl_seiten, breite, hoehe, x0 y0 x1 y1).
- Bilder: `python3 -I plan/dragonbane/extract_images.py "<pdf>" dragonbane/img/abenteuer xref <xref> <name> off=<offset>` (weitere Befehle: `clip <pdfseite> x0 y0 x1 y1 <name> [dpi]`, `spread <pdfseiteL> <name> [dpi]`, `- <ziel> trim <datei.webp>`). Offsets: adv 1, st 2, pg 4. Karten mit eingebrannten Nummern ggf. per `clip` (Seitenausschnitt in pt, dpi 150–200), damit die Nummern dabei sind; Pins dann trotzdem aus den Vektor-Ziffern berechnen, falls die Nummern Vektortext sind (dann Ausschnitt OHNE Text rendern ist nicht möglich – Pins auf die gerenderten Ziffern setzen).
- Screenshots: `python3 /tmp/shoot.py "<hash>=<out.png>[=WxH][=full|fold]"` (Seite `file:///home/claude/spielleitertool/dragonbane/index.html#<hash>`, gibt JS-Fehler aus). Lege eigene Ausgaben unter `/tmp/<paket>/` ab.

## Feld-Besonderheiten (von Phase A)
- `img` ohne `img/` und ohne `.webp` (z. B. `abenteuer/bothild-titel`). Übersicht/Bandkachel braucht `img` (Titelbild des Abenteuers – im Buch meist das große Bild am Kapitelanfang).
- Orte: `n` ist String (auch Buchstaben). `pin` optional, Prozent relativ zum Kartenbild. Hash: `#a/<id>/<bereichId>/<n>`.
- `wesen` → Ids aus `figuren` oder `kaesten`. Figuren mit `angriffe` und Kästen erscheinen offen breit in der Mitte.
- `b` an Orten: Strings, `{h}`, `{ul}`, `{ol}`, `{tbl}`, `{karte}`, `{stein}`, `{zit}`. `st` mit `r:1` = rote ✦ (Falle/Ereignis/Geheimnis/Schatz, klickbar).
- Bereich: `einl` erscheint klein/grau über dem Ortstitel (nur wenn im Buch ein Einleitungssatz steht).
- Figuren: Id-Präfix = Abenteuer-Id; `be:"<DB_MON-id>"` (daemon, drache, geist, riese, riesenspinne, goblin, greif, harpyie, mantikor, minotaurus, ork, skelett, troll, wiedergaenger, fledermaeuse) → Link ins Bestiarium. `angriffe:{h, w:"W6", rows}`. `typ:"sc"` für vorgefertigte Spielercharaktere.
- Tabellen: `{id, h, p, einl, cols, rows}`; `strip:"Zufallsereignisse · W12"` zeigt rechts an den Orten einen Streifen zum Tabellen-Tab.
- Reisen: `reisen:{b:[Blöcke], tabellen:[…], figuren:[Ids]}`.
- Handouts: `handouts:[{t, img, p}]` (Tabellen-Tab, Klick zoomt).
- `lage` + `schluss` stehen gemeinsam auf dem Lage-Tab; Abschluss-Überschrift selbst als `{h:"Abschluss"}` setzen.
- Seitenlinks gehen automatisch ins Buch des Abenteuers; Verweise aufs Regelbuch (z. B. „S. 54 im Regelbuch“) im Text als „Regelbuch S. 54“ schreiben, nicht als Link.

## Fertig heißt
Alle Tabs deiner Abenteuer bei 1440×900 und 1280×800 angesehen (Lage, jeder Bereich mit mindestens zwei Orten, Figuren, Tabellen, ggf. Reisen), keine JS-Fehler, keine englischen Reste, keine Lücken/leeren Spalten, Pins sitzen auf den Nummern, Bilder richtig zugeordnet. `node --check` für jede Datei. Nicht committen. Abschlussmeldung: Dateien, Bilder, neue Namen (`plan/dragonbane/namen-<paket>.md`), offene Punkte, gewünschte Motor-Änderungen.
