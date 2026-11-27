# Charakterbogen im Original-Look (Vorlage: Otherscape + City of Mist)

Für Legend in the Mist (und jedes weitere Mist-Engine-System) genau so wiederholen. Beide Vorbilder sind fertig:
`otherscape/js/bogen.js` + `otherscape/bogen.css`, `cityofmist/js/bogen.js` + `cityofmist/bogen.css` + `cityofmist/js/bogen-layout.js`.
Gemeinsame Engine: `shared/mist-ersteller.js` / `.css` (`MistErsteller.start(cfg)`, Hooks über `cfg.bogen = {render, click, input}`).

## Ziel (Moritz)
- Oben wie in allen Systemen die Symbol-Leiste (Zufall, Vorlage, Leeren, Teilen, Sichern, Laden, PDF, Charakter-Chips mit „+“), darunter NUR der Bogen im Original-Look, alles anklickbar. Kein Tab-Menü der Grundlage.
- Geteilte Links zeigen nur Logo + Werkzeuge + den einen Bogen. Zufall/Vorlage/Link/Datei-Laden legen immer einen neuen Eintrag an.
- Eingetragener Text immer ohne Hintergrund (transparent), Beschriftungen sauber in die Original-Kästen, alles deutsch (nur echte Eigennamen englisch).
- Dropdowns mit Kategorien (zugeklappt) + Suche + „i“ seitlich angedockt.

## Vorgehen
1. **Text aus der PDF entfernen, dann darauf aufbauen**: PyMuPDF (`pip install --break-system-packages pymupdf`), Redaction entfernt nur Textspans, Bilder/Vektoren bleiben. Seiten mit 200 dpi als `.webp` rendern → `<system>/img/bogen/seite-N.webp`. Seite = 792×612 pt.
2. **Felder positionieren** in PDF-Punkten per Prozent (`left/top/width/height`), Einheit `--pt = 100cqw/792` (Container-Query). Koordinaten aus den AcroForm-Widgets der PDF lesen → `bogen-layout.js` (`CM_LAYOUT`: p1/p2/p3, `rot` Winkel+Drehpunkt je Karte, `icons`).
3. **Eingebrannte englische Beschriftung in Rasterbildern** (z. B. Kartenüberschriften) mit OpenCV retuschieren (Muster kopieren, Zeilenverlauf füllen, Inpaint), danach Bild prüfen; deutsche Texte darüberlegen. Retusche iterativ, jeweils Zoom-Screenshot ansehen (Schmierer/Glyphen-Reste).
4. **Gedrehte/schiefe Karten**: pro Karte Winkel messen; Felder einer Karte in einer Gruppe (`gruppe(rotArr, fn)`) mit `transform: rotate` um den Kartenmittelpunkt – dann sitzen Text, Ringe und Kästchen passend.
5. **Datenadapter** (`js/ersteller.js` des Systems): Themenbücher/Kits/Fragen aus den vorhandenen Datendateien, `zufallTypen`, Vorlagen (fertige Charaktere/Archetypen), Archetypen-Kombi-Ablauf bei CoM.
6. **Regeln als Dialoge**: Marken (Aufmerksamkeit/Verblassen, Aufbau) nur der Reihe nach (`Erst Kästchen N markieren`); bei vollem Track Modal mit Regeltext und Ausführung (Verbesserung wählen, Thema ersetzen, Entwicklungssprung, neue Stärke → Fragenliste). „Schwäche angewandt“ markiert automatisch Aufmerksamkeit. Verbrennen: Flamme orange mit Leuchten + Stärke leicht durchgestrichen.
7. **Druck/PDF**: Browser-Druck, 1 Seite des Bogens = 1 Druckseite wie das Original (ausfüllbares PDF-Export noch offen).
8. **Zugang**: Knopf „Charakterbogen“ im System-Header und in den Untersettings.

## Markierungs-Optik (final, von Moritz abgenommen)
- Leuchtendes Symbol im Kästchen wie die Flamme, mittig, KEIN Rahmen/Hover-Kasten: Aufmerksamkeit = Auge (grün), Verblassen/Bruch = Blitz (violett), Aufbau = Funke (gold), Haken bei Angewandt/Entwicklungssprung = grün, Verbrennen = Flamme orange.
- Tooltip nutzt `::after` – Markierungen daher nie auf `::after` legen.
- **Zentrierung messen statt schätzen**: Klickflächen aus den Widgets sitzen oft 1–3 px neben dem gedruckten Kästchen. Test: Seite rendern ohne Markierung, pro Element (`data-r` = Ursprungsrechteck) Screenshot mit 4× Zoom, hellen Blob im Kästchen suchen, Offset zum Elementmittelpunkt → Rechtecke in `bogen-layout.js` korrigieren.
- Lange Stärken/Schwächen: Schrift stufenweise kleiner (>16, >34, >44 Zeichen), nie aus dem Feld laufen.

## Prüfen (immer)
Playwright + Chrome, `file://…/ersteller.html`, Zufall klicken, jedes Element klicken, Zoom-Screenshots ansehen und mitschicken (auch Seitenleiste eingeklappt). Maus nach Klicks wegbewegen, sonst stören Hover-Tooltips im Bild.
Vor dem Push: `VERSION` in `sw.js` +1, neue Dateien in `FILES`, `git fetch` + `rebase origin/main`, Commit OHNE Co-Authored-By/Claude-Session.
