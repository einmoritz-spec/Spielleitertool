# The Vault – Auftrag Gestaltung je Einsatz (Opus)

Die zwölf Einsätze sind übersetzt (`triangle/js/data/vault-NN-<id>.js`, Aufbau: `plan/triangle/VAULT_BRIEF.md`) und laufen in der gemeinsamen Schablone (`triangle/js/leit.js`, Grundgestaltung `triangle/leit.css`). Deine Aufgabe: Jeder deiner Einsätze bekommt **seinen eigenen Stil**, der die Welt des Buch-Einsatzes trifft – so stylish wie das PDF, aber für den Spielleiter maximal übersichtlich. Lies zuerst `plan/TRIANGLE_PLAN.md` (Abschnitte „Einsätze – gemeinsames Gerüst“ und „Stil je Einsatz“ mit Farben und Bausteinen je Einsatz) und schau dir die Entwürfe `plan/triangle/mockups/05_mission_springs_eternal.jpg`, `06_mission_rom_dump.jpg`, `07_mission_nosedive.jpg` an – das ist die freigegebene Richtung.

## Quellen
- Buchseiten als Bild: `/home/claude/vtext/buch/SNNN.jpg` (NNN = Buchseite), Eröffnungsseiten hochaufgelöst `SNNN-hd.jpg`. Text: `SNNN.txt`.
- Rohbilder aus dem PDF (freigestellt): `/home/claude/vroh/va-SNNN-NN.webp` (NNN = Buchseite). Schon benannt im Repo: `triangle/img/vault/full/*.webp` (+ `thumb/`).
- Schriften im Repo: `triangle/fonts/`, `assets/fonts/` (z. B. Pixelify Sans, Press Start 2P, VT323, Courier Prime – prüfe, was da ist; fehlende Google-Fonts als woff2 über npm-Paket `@fontsource/<name>` holen und nach `triangle/fonts/` legen).

## Was du je Einsatz machst
1. **Stil-Datei** `triangle/vault/NN.css` (existiert als leere Datei), alles unter `body.ve-<id>` geschachtelt. Mindestens: Variablen `--akz --v2 --vf --vrand --vbg --vtxt --vh` (siehe Kopf von `leit.css`), Überschriftenschrift, Form der Karten/Hinweise/Chaos-Tabelle, Unterleiste, Handouts. Die Kopfzeilenfarbe kommt aus `TA_EINSATZ[].c` in `js/data/einsaetze.js` (nur ändern, wenn nötig – Datei ist geteilt, nur deine Zeile).
2. **Eröffnungsseite (Fundstück)** als deutscher Nachbau im Look des Buchs (Forum, Chat, Zeitungsartikel, Abschrift auf Schreibmaschine, Broschüre, Leuchtpunkt-Tafel …) – über CSS für `.ho-<art>` bzw. eigene Bausteine. Nicht als Bild mit englischem Text.
3. **Eigene Bausteine** wo der Plan sie nennt (z. B. Sprite-Karten mit anklickbaren Werten, Host-Leisten, Verdächtigen-Karten, Filmstreifen-Trenner, Pfoten-Trenner, Punktmatrix-Überschriften): in `triangle/vault/NN.js` (existiert als leere Datei) als `TA_VB["name"] = function(b, ctx){ return html; }`; Hilfsfunktionen aus `leit.js`/`lesen.js` nutzen (`tx`, `taB`, `vst(ctx.id)` für Spielstand, `save()`, `render()`). Den Baustein dann in deiner Datendatei verwenden (Blöcke umstellen ist erlaubt, **Text nicht kürzen oder umschreiben**).
4. **Bilder:** In den Datendateien stehen Platzhalter `{t:"bild", seite:N, x:"…"}`. Setze `src` (Pfad relativ zu `img/vault/full/` ohne Endung, z. B. `src:"01-springs-eternal-werbung-return-to-youth"`) und ggf. `pos:"rechts"|"links"`, `w`. Neue Bilder aus `/home/claude/vroh/` eindeutig benennen (`NN-<einsatz>-<motiv>.webp`), nach `triangle/img/vault/full/` kopieren und ein `thumb/` (420 px breit, WebP) erzeugen. Nur Bilder, die im Buch zu genau dieser Stelle gehören; keine englischen Texte im Bild, wo sie Inhalt tragen (dann nachbauen). Karten/Pläne (Hofkarte, Parkplan, Linienplan, Lageplan) gehören als erster Abschnitt bzw. gleich oben in den Ermittlungs-Reiter. Ganzseitige Illustrationen dürfen groß stehen (z. B. im Profil-Kopf ist das Titelbild schon da). Platzhalter ohne passendes Bild bleiben ohne `src` (werden nicht angezeigt).
5. **Prüfen:** Screenshots mit `python3 -I plan/triangle/skripte/shot.py /tmp/v<NN> 'e/<id>/profil' 'e/<id>/erm/0!' …` (Route mit `!` = ganze Seite; `TA_FOLD=1` davor = Seitenleiste eingeklappt; `TA_W=1920` für großen Monitor). Jeden Reiter mindestens einmal ansehen, auch eingeklappt. Keine Lücken, keine leeren Spalten, nichts abgeschnitten, Text gut lesbar (Kontrast!), keine englischen Texte. Danach Abgleich mit dem PDF: Fehlen Absätze/Punkte, stehen Hinweise am richtigen Ort?

## Regeln (Moritz)
- Alles deutsch; Einsatztitel und Eigennamen englisch.
- Keine Erklärtexte, keine Titelbanner im Einsatz; Seitenangaben nur „S. 12“, dezent, einmal hinter der Abschnittsüberschrift.
- Lesetext breit und gut lesbar, Breite nutzen (Raster statt langer Spalte), keine halbleeren Spalten.
- Hinweis-Karten: Klick markiert erledigt (grau), keine Kästchen/Linien.
- Stil je Einsatz wirklich eigen (Farben, Schrift, Kartenform, Trenner), aber Aufbau der Schablone bleibt gleich (Unterleiste mit Zählern, Seitenleiste links, Chaos-Effekte + Ziele rechts).
- Nur deine Dateien anfassen: `vault/NN.css`, `vault/NN.js`, deine `js/data/vault-NN-*.js`, neue Bilder `img/vault/{full,thumb}/NN-*`. Gemeinsame Dateien (`leit.js`, `leit.css`, `app.js`, `index.html`, `sw.js`) **nicht** ändern – brauchst du dort etwas, beschreibe es in deiner Antwort. Kein git.

## Antwort
Knapp auf Deutsch: was je Einsatz gestaltet wurde, neue Dateien/Bilder (Liste), Pfade der wichtigsten Screenshots, offene Punkte und gewünschte Änderungen an gemeinsamen Dateien.
