# Briefing: Pins auf der Mystery-Karte

Der Leitstand zeigt in der Phase „Lösung → Überblick“ eine Mystery-Karte mit nummerierten Pins (je Ort) und einem Showdown-Pin „S“, sobald das Mysterium diese Felder hat (Vorbild: `tftl/js/data/m/killerbirds*.js`, Renderer `tftl/js/leitstand.js`, Funktion `karte()`):

```js
M.karte = {maelar: "karte-maelaren-voll", boulder: "karte-boulder-voll"};   // Bild in tftl/img ohne .webp
// in M.orte[i]:  pin: {maelar: [x%, y%], boulder: [x%, y%]}   (Prozent von Bildbreite/-höhe, Mittelpunkt des Pins)
M.pinShowdown = {maelar: [x, y], boulder: [x, y]};
```
Alle Orte des Mysteriums MÜSSEN einen `pin` haben und `pinShowdown` muss gesetzt sein, sonst erscheint die Karte nicht. `M.orte` steht in der `-rest`/`-loesung`-Datei oder der Hauptdatei (suchen: `M.orte =`); `M.karte`/`M.pinShowdown` setzt du dort dazu. Reihenfolge der Dateien bleibt, `node --check` danach.

## Kartenbilder
- Mälarinseln und Boulder City: `tftl/img/karte-maelaren-voll.webp` und `karte-boulder-voll.webp` (2400 px, Gesamtkarte des Loops). Bestimme die Orte anhand der Karte, die das Buch für dieses Mysterium abbildet (Bild `tftl/img/<id>-karte*.webp` bzw. `<id>-ablauf`/`...karte-maelaren`/`...karte-boulder`, dort sind die Orte orange markiert und beschriftet), und suche dieselben Landmarken (Ortsnamen wie Stenhamra, Kungsberga, Munsö, Bona, Svartsjölandet, Adelsö, Hovgårdsfjärden, Kühltürme …) auf der Gesamtkarte. Beim Boulder-Loop ebenso (Boulder City, Lake Mead, Hauptreaktor …). Wo ein Ort im Buch nur im Gebäude liegt, setze den Pin an das Gebäude/die Ortschaft.
- Taunus-Mysterien (ndw, baerchis, riss, sirene) und Norfolk-Mysterien (easter, bestof, lastsmile, toomuch) haben keine Gesamtkarte: nimm die Buchkarte des Mysteriums (`<id>-karte.webp`) als `M.karte = {maelar:"<id>-karte", boulder:"<id>-karte"}` und setze beide Pin-Einträge (maelar/boulder) gleich. Falls es im Buch mehrere Kartenvarianten gibt (Norfolk/Schweden/Boulder), nimm die Karte für den ursprünglichen Loop des Buchs (Norfolk bzw. Taunus). Fehlt eine geeignete Karte als Bild, rendere die Seite aus dem PDF (`/home/claude/tftl_work/pdf/…`, Offsets siehe `plan/TFTL_BILDER_BRIEF.md`) und speichere den Kartenausschnitt als `tftl/img/<id>-pinkarte.webp` (nur die Karte, kein gelbes Kapitelband).
- Showdown-Pin: dort, wo das Buch den Showdown stattfinden lässt (meist letzter Ort oder besondere Stelle); ist keine Stelle bestimmbar, nimm den Ort des letzten Schauplatzes.
- Pins dürfen sich nicht überdecken; bei zwei Orten am selben Platz um 2–3 % versetzen.

## Prüfen (Pflicht)
Kopiere `/home/claude/shot6.py` nach `/home/claude/shot_<id>.py` und ändere `/tmp/r%d.jpg` auf `/tmp/<id>_%d.jpg` (damit sich Agenten nicht überschreiben). Aufruf z. B. `python3 /home/claude/shot_<id>.py m/<id>/loesung/ueberblick` und das Bild mit Read ansehen; bei Boulder: vorher in der Seite `localStorage.setItem('tftl_loop','boulder')` setzen (das Skript kann `await pg.evaluate("localStorage.setItem('tftl_loop','boulder')")` vor dem Hash-Wechsel). Jeder Pin muss sichtbar auf dem richtigen Ort liegen (Karte ist unter `.map`). Korrigiere, bis es passt.

## Regeln
Nur `M.karte`, `pin`, `M.pinShowdown` ergänzen (sonst nichts an Text ändern), nur Dateien deiner Mysterien und neue Bilder in `tftl/img/`; kein git. Bericht kurz: je Mysterium, was gesetzt wurde und wo du geraten hast.
