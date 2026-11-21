# Wildsea – Gefahren: Übersicht + große Bilder (Bauplan)

## 1. Übersicht (wie Vaesen „Vaesen“-Raster)
- Seitenleiste entfällt. Route `#gefahren` = Kachel-Raster (`.cards`, auto-fill, ca. 6 Spalten @1440, 4 @1100, 2 @Handy).
- Kopf: Suchfeld + Filter-Chips (Alle, Naturgewalten, Bestien, Insekten, Pflanzen, Konstrukte, Plünderer, Krankheiten, Leviathane); Kategorie-Überschriften im Raster optional bei „Alle“.
- Kachel: Bildfläche 190 px (contain, multiply, ungeschnitten), Name (Teko), darunter Größe/Leviathan klein; „+“-Knopf (Begegnung) nur beim Hover/unscheinbar; Kachel ohne Bild: Initiale als Platzhalter.
- Klick auf Kachel → `#gefahren/<id>`. Begegnungsleiste bleibt oben (einklappbar).
- Mobil: Raster 2 Spalten, Chips wischbar.

## 2. Detailseite
- Oben: „‹ Übersicht“ links, „‹ vorherige · nächste ›“ rechts.
- Hochformat/quadratisch (Seitenverhältnis ≤ 1,3): Bild links, 480–520 px breit, bis 640 px hoch, sticky; Text rechts über volle Restbreite (Beschreibung, Antriebe/Präsenz/Ressourcen als 3 Spalten, Aspekte/Eigenheiten als Karten-Raster).
- Breit (> 1,3, z. B. Orchid Scar, Terrapex, Old Ornail, Königin Darunter): Bild als Banner über der ganzen Karte, max. 320 px hoch, darunter Text.
- Klick aufs Bild → Vollbild-Lightbox (wie Galerie im Rest des Tools), ohne Hinweistext.
- Kein Bild: Text nutzt volle Breite.

## 3. Bilder
- Bilder nur ungeschnitten (Doppelseiten-Bilder bleiben zusammengesetzt). Bei Leviathan-Bildern mit abgeschnittenem Buchmotiv (Orchid Scar, Terrapex, Old Ornail) Buch-Ausschnitt belassen, nur als Banner.
- Ausgabegröße bis 1400 px Breite (aktuell 900 px) für die Lightbox neu aus /tmp/bild bzw. PDF erzeugen; Kachel nutzt Thumb (400 px).
- Dateien: img/gefahr/<id>.webp + img/gefahr/thumb/<id>.webp; sw.js precache + VERSION.

## 4. Umsetzung
1. gefahr.js: viewGefahren aufteilen in gUebersicht() und gDetail(id); Sidebar-Baum (gTree) entfernen, Suche/Filter in Übersicht.
2. style.css: .gr (Raster), .gc (Kachel), .gd (Detail, 2 Spalten/Banner), Lightbox.
3. Hochauflösende + Thumb-Bilder erzeugen.
4. Prev/Next über sortierte Liste je Filter.
5. Screenshots 1440×900 und 1280×800, Handy-Check, commit (ohne Attribution), push.
