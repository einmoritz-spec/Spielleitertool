# Legend in the Mist – Themenbücher (Plan, noch nicht gebaut)

Ziel: eigene Themenbücher-Ansicht im Legend-in-the-Mist-Bereich. Aufbau wie Otherscape/City of Mist (Übersicht → einzelnes Buch), Design im Pergament-Stil von Legend in the Mist. Entwürfe: Übersicht „Bücherregal“, Buchseite „Relikt“.

## Einstieg
- Kachel „Themenbücher“ auf der Startseite und der Abschnitt „Themenbücher“ in Regeln öffnen die neue Ansicht (`#themen`, `#themen/relic`).
- Das alte Fenster „Fragen nachschlagen“ und der Lese-Abschnitt gehen darin auf (keine doppelte Pflege).

## 1. Übersicht – Bücherregal (passt auf einen Bildschirm)
- Alle 20 Themenbücher als hohe Buchrücken nebeneinander, gruppiert: Origin (Blatt), Adventure (Schwerter), Greatness (Krone), Variable Might. Bilder = die Original-Streifen der Eröffnungsseiten (`assets/tb/*.webp`), ungeschnitten in der Höhe.
- Name senkrecht auf dem Rücken (deutsch).
- Maus darüber: Der Rücken klappt mit Animation zu einer Karteikarte auf (Bild + Pergamentfeld): Buchtyp, Name DE/EN, Kurzbeschreibung, Frage A, Umfang (Fragen, Verbesserungen, Theme Kits), S.-Link, „Aufschlagen“. Die anderen Rücken werden etwas dunkler. Klick öffnet das Buch direkt.
- Filter-Chips: Alle · Origin · Adventure · Greatness · Variable Might.
- Darunter eine Zeile mit vier Karten: Fellowship (S. 138–141), Gemischtwarenladen (S. 132–137), Theme Kits der Dales, Uncanny Heroes.
- Handy: je Gruppe eine wischbare Reihe von Buchrücken, Name sichtbar, Antippen öffnet.

## 2. Einzelnes Themenbuch
- Links Baum-Navigation (Origin / Adventure / Greatness / Variable Might / Fellowship / Gemischtwarenladen, Klick klappt Bücher auf), einklappbar (‹, Taste), bleibt stehen. ←/→ blättert zum nächsten Buch.
- Links im Inhalt der Original-Bildstreifen als Lesezeichen-Band (bleibt beim Scrollen stehen); rechts:
  - Kopf: Might-Symbol, „ADVENTURE-THEMENBUCH“, Name groß (DE) + EN klein, S.-Link (öffnet Core Book).
  - Kurzbeschreibung (die „+“-Reihe), Einleitungstext, daneben Kasten „Fragen zum Konzept“.
  - Power-Tag-Fragen A–J als Karten im 2er-Raster (Buchstaben-Wappen wie im Buch), Weakness-Tag-Fragen A–D im 4er-Raster.
  - Quest-Ideen und Besondere Verbesserungen als einzelne Karten (Name DE + EN klein).
  - Theme Kits als echte Themenkarten im Original-Look (dunkler Kopf mit Might-Symbol, Power-Tags grün, Weakness-Tags rot, Quest, ggf. Verbesserung). Zugeklappt nur Name + Quelle (CORE / DALES / UNCANNY), Klick klappt auf; Filter nach Quelle.
  - „Kommt vor in Tropes“: Tropes aus The Dales / Uncanny Heroes, die Kits dieses Buchs nutzen, als Chips.
- Fellowship-Themenbuch gleich aufgebaut; Gemischtwarenladen mit Gegenständen als Karten.

## Daten
- Keine neue Übersetzung nötig: alles liegt deutsch vor in `js/data/lm/themenbuecher*.js` (Core S. 92–141), `dales-c*.js` (Dales-Kits je Themenbuch + Tropes), `jenseits-b*.js` (Uncanny-Kits, Craggen Folk Magic).
- Neues Skript `tools/lm/build-tb.py` zerlegt das in eine Datei pro Themenbuch: `js/data/tb/<key>.js` (Kopf, Fragen, Quests, Verbesserungen, Kits aus allen drei Quellen, Tropes).
- Anzeige: `js/ui/themen.js` + `css/themen.css`.
- Bilder nur, wo sie im Buch zum jeweiligen Themenbuch gehören (Eröffnungsstreifen; Fellowship-Streifen S. 140; Gemischtwarenladen S. 132).

## Reihenfolge
1. Datenskript + Dateien je Buch, Prüfung auf Vollständigkeit (20 Bücher, alle Fragen/Kits gezählt gegen die Quelle).
2. Buchseite.
3. Übersicht mit Animation.
4. Fellowship, Gemischtwarenladen, Handy, Screenshots aller Größen.
