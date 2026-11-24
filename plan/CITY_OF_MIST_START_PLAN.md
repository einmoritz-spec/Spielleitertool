# City of Mist – Startseiten für Grundregelwerk und Shadows & Showdowns (Plan)

Ziel: Beide Start-Tabs sehen aus wie die neuen Landing-Pages (Legend in the Mist / Otherscape): großes Kopfbild mit Titel, darunter flache Bildkacheln, darunter kurz der Inhalt. Keine langen Kapitelkarten mehr als erste Ebene.

## Aufbau (beide Seiten gleich)
1. **Kopfbild** (Grundregelwerk: com-header/com-art, S&S: ss-art), niedrig, Titel links, „Buch öffnen“ als kleiner Knopf oben rechts (wie Buch-Knopf in der Kopfzeile).
2. **Kachelreihe**: eine Kachel je Kapitel, Bild 2,4:1, darunter Name + max. zwei Chips + „+N“. 3 Spalten Desktop, 2 Tablet, 1 Handy. Hover: leicht anheben und aufhellen, Klick öffnet das Kapitel.
3. **Inhalt kurz**: unter den Kacheln ein schmaler Streifen „Was steht drin“ – je Kapitel eine Zeile (Name · S.-Bereich · ein Satz), als aufklappbare Liste statt langer Karten. Klick auf eine Zeile springt zum Abschnitt.

## Grundregelwerk (6 Kacheln)
Einstieg · Grundlagen & Stadtbezirke · Charakter (Serienkonzept, Erschaffung) · Dein Team & Ein Tag wie jeder andere · Regeln (Kurzreferenz, Konversation, Aktionen) · Entwicklung (Krise, Avatar, Zusätzliches). Dazu Dokumente und Spielbeispiel als kleine Zusatzkacheln.
Bilder: vorhandene figs aus cityofmist/img/rw (fig_22, fig_42, fig_171 …) und hero_entwicklung; fehlende Kapitel aus der Players-Guide-Galerie. Kein Bild doppelt, nur Illustrationen ohne Textrand, ungeschnitten nach Seitenverhältnis (querformatig bevorzugt).

## Shadows & Showdowns (4 Kacheln)
Spieler (If Dreams Could Kill) · Orte & NSCs (Overlooked Attractions) · Avatare (Don’t Believe the Truth) · Gatekeeper (Suits Unveiled).
Bilder: Galerie shadows-showdowns (57 Seiten-Illustrationen); je Kapitel das passendste Querformat aus den passenden Seiten (sh_p03, p08, p13 …), vorher einzeln geprüft.

## Technik
- Neue Dateien: cityofmist/js/start.js (baut beide Startseiten aus CM_RW_NAV / CM_NAV, ersetzt rwStart und pageSSStart) und cityofmist/start.css. Inhalte bleiben in den vorhandenen Navigationsdateien, nichts doppelt.
- Kachel-Komponente teilt sich Stil mit der Hub-Startseite (ovc-card), nur andere Bildverhältnisse.
- Sw-Version erhöhen, neue Dateien in sw.js.
- Prüfung per Screenshot bei 1440×900, 1280×720 und 390×844: alles ohne Lücken, Kacheln und Kurzinhalt möglichst auf einem Bildschirm.

## Offene Entscheidungen (mit Standard)
- Kurzinhalt als Liste unter den Kacheln (Standard) oder erst beim Hover/Klick auf die Kachel.
- Die Tab-Leiste (Start/Welt/Charakter …) bleibt oben unverändert.
