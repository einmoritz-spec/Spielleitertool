# Briefing: Bilder, Karten, Pläne in die Mysterien einbauen

Die Mysterien-Datendateien `tftl/js/data/m/<id>*.js` sind fertig übersetzt (nicht umschreiben!). Deine Aufgabe: die **Grafiken des Buchs** den passenden Abschnitten zuordnen.

## Quellen
- PDFs: `/home/claude/tftl_work/pdf/<kürzel>.pdf` (a_friends, a_grow, a_snow, a_outoftime, core, z_de80). PDF-Seite (1-basiert) = gedruckte Seite + Offset (core 3, a_friends 1, a_grow 1, a_snow 1, a_outoftime 5, z_de80 5); pymupdf-Index = gedruckte Seite + Offset − 1.
- Bereits extrahierte Einzelbilder: `/home/claude/tftl_work/img/<kürzel>/` (Inventar: `plan/tftl/bilder-inventar.tsv`; Doppelseiten sind schon zusammengesetzt, Dateinamen enthalten die PDF-Seite).
- Karten, Grundrisse, Ablaufdiagramme und Handouts sind im PDF geschichtet/Vektor: **nicht** aus Einzelbildern bauen, sondern den Seitenausschnitt rendern: `page.get_pixmap(dpi=200, clip=Rect(...))`. Das gelbe Kapitelband am Seitenrand (x > ~550 pt rechte Seiten, x < ~60 pt linke Seiten) nicht mitschneiden; Seitenzahl/Fußzeile nicht mitschneiden. Vorher Seite mit `dpi=60` rendern und per Read ansehen, um den Ausschnitt zu bestimmen.

## Ausgabe
- Webp (quality 82) nach `tftl/img/`. Name: `<mysterium-id>-<was>.webp` (z. B. `friends-fabrik-keller`, `ndw-handout-zeitung`). Breite höchstens 1600 px. **Nie beschneiden außer Rand/Band**, Seitenverhältnis erhalten, keine Titel-/Untertexte aus dem Buch als Bildteil, die zum Layout nicht gehören.
- Eintrag im Abschnitts-Objekt der Datendatei als Feld `bilder: [{b:"friends-fabrik-keller", t:"Der Keller", s:22}]` (b = Dateiname ohne .webp, t = kurze deutsche Bildunterschrift, s = gedruckte Seite, optional `klein:1` für Hochformat-Illustrationen/Figuren, die klein neben dem Text stehen sollen). Mehrere Bilder pro Abschnitt sind erlaubt. Den Abschnitt gibt es entweder als Ort (`ort`), Überblick, Kasten (`box`) oder Lese-Abschnitt; hänge das Bild an den Abschnitt, in dem es im Buch steht bzw. auf den es sich bezieht (Karte/Plan → Überblick bzw. der Ort; Handouts → Abschnitt Handouts/Nachspiel/jeweiliger Ort; NSC-Porträts → nicht einbauen, Karte S. nsc hat kein Bildfeld).
- Zu übernehmen: Karten und Ortspläne/Grundrisse, Ablaufdiagramme (Flussdiagramme), Handouts/Zeitungsartikel/Briefe, Maschinen- und Wesen-Illustrationen, Fotos/Illustrationen, die klar zu einem Abschnitt gehören. **Nicht:** reine Kapitel-Eröffnungsbilder (sind schon `bild`), Seitenzahl-Embleme, Dekor, Texturen, Bilder, bei denen unklar ist, wohin sie gehören (dann weglassen und im Bericht nennen). Keine falschen Zuordnungen.
- Falls ein Handout/Plan im Buch Text enthält, der noch nicht übersetzt in der Datei steht (z. B. Beschriftungen in Plänen, Zeitungstexte), das Bild trotzdem einbauen und im Bericht nennen; **nicht** selbst übersetzen.
- Pro Mysterium ein Ablaufdiagramm/eine Karte als erstes Bild im Überblick-Abschnitt der Lösung, falls vorhanden.

## Regeln
1. Nur Datendateien deiner Mysterien und `tftl/img/` anfassen, kein git, nichts anderes im Repo ändern.
2. Nach jeder Änderung `node --check <datei>`.
3. Bildgröße im Blick: Summe je Mysterium möglichst unter 1,5 MB.
4. Berichte am Ende kurz: je Mysterium wie viele Bilder wo (Abschnitt-ID + S.), was du bewusst weggelassen hast, und Unsicheres.
