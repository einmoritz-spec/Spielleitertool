# Mausritter – Bauplan

## Quellen (`quellen/mausritter/`, PDFs nicht im Git)
| Datei | Inhalt | Sprache |
|---|---|---|
| `schnellstarter-de.pdf` (48 S., Buchseite = PDF-Seite) | Regeln, SL-Teil, Abenteuer „Der verbotene Garten der Katzenmagierin“, 5 Spielmäuse, Zustands- und Gegenstandskarten | DE (System Matters) |
| `estate-guidebook-en.pdf` (8 S.) | „The Estate – Campaign Guidebook“: Anwesen-Karte (19 Orte), Brickport (8 Orte, Ereignisse, Aufträge, Speisekarte, Bürgermeisterin), weitere Siedlungen, 4 Fraktionen mit Zielen, Verbindungen zwischen Abenteuerorten, Kampagnenstart/-ende | EN → DE |
| `hexmap-en.pdf` (2 S.) | „HexMap for Tiny Adventurers“ (Carlos Martins, Drittanbieter): 19 Hexfelder mit Gerücht/Begegnung/Auslöser/SL-Notiz, 3 Fraktionen, Gerüchte, Begegnungen | EN → DE |

Text: `schnellstarter.txt`, `estate.txt`, `hexmap.txt`. Von Moritz geliefert: Logo-Schriftzug, breiter Cover-Ausschnitt, Lagerfeuer-Panorama, Herbst-Bild (Logo eingebrannt → nur Galerie).

## Buchstil
- Schnellstarter: weißes Papier, Aquarell-Flecken in Petrol (#1b6786), Überschriften **Cinzel Bold**, Fließtext **Amiri**, Logo Brokenscript (als Bild), Bleistift-/Tuschezeichnungen, Vorsatz mit dunkelgrüner Blumentapete, Cover nachtblau.
- The Estate: Aquarellkarte, Überschriften gotisch (Brokenscript → Ersatz Pirata One), Tabellen mit grauen Zebrastreifen.
- Hexkarte: Bildkarte auf beigem Grund, serifenlose Überschriften.

## Navigation
Kopfzeile: Logo · **Regeln · Spielleitung · Mäuse** · rechts i, Buch (Auswahl: Schnellstarter / The Estate / Hexkarte), Suche, Galerie, Burger.
Abenteuer nur auf der Startseite, beim Öffnen eigene Leiste unter der Kopfzeile (wie TftL).

| Reiter | Seitenleiste / Unterleiste |
|---|---|
| Regeln | Willkommen (Was ist Mausritter, Was ihr braucht, Würfel) · Das Spiel spielen (Rollenspiel, Tipps, Proben, Vergleichende Proben, Vorteil/Nachteil) · Kampf · Rast und Heilung · Inventar (Plätze, Zustände, Anwendungen, Belastung) · Magie (Zauber wirken, Patzer, Zauber als Karten) |
| Spielleitung | Mausritter leiten · Proben verlangen + Folgen · Regeln anpassen · Vorbereitung (Spielmäuse, Startausrüstung, Loslegen) |
| Mäuse | Unterleiste: Spielmäuse (5 Bögen mit Porträt, Werten, Ausrüstung, Hintergrund) · Gegenstände (Karten wie im Anhang, Anwendungs-Pips klickbar) · Zustände (6 Karten) · Mausbogen (ausfüllbar, PDF-Export, vorausgefüllt für die 5 Mäuse) |

## Abenteuer
**Der verbotene Garten der Katzenmagierin** (S. 12–27) – Leiste: Einstieg · Garten · Fallentunnel · Begegnungen · Schätze · Ausklang. Garten: klickbare Karte (Pins 1–7), rechts der Ort; Wetter-Kasten; „Zeit“-Leiste mit X-Kästchen (jedes 3. X Begegnung, steht so im Buch S. 17). Gegner als Karten (Aufziehmotten, Uhrwerkfrettchen, Rumpel, Fips), Begegnungen/Schätze als W6-Raster, Fallentunnel mit den drei Kammern 6 · L · M. Karte aus den Strich-Ebenen des PDFs ohne Seitentext neu zusammensetzen.

**Das Anwesen** (The Estate) – Leiste: Karte · Brickport · Siedlungen · Fraktionen · Verbindungen · Kampagne. Anwesen-Karte mit 19 klickbaren Hexfeldern, Begegnungen/Gerüchte W6; Brickport-Karte mit 8 Orten, Ereignisse W8, Aufträge W4, Speisekarte W6, Audrey Pipp als Figurenkarte; Fraktionen mit abhakbaren Zielen. Abenteuerorte der „Adventure Collection“ nur als Namen/Verweise (Buch liegt nicht vor).

**Die Außenlande** (HexMap for Tiny Adventurers) – Leiste: Karte · Felder · Fraktionen. 19 Felder als Karten (Gerücht, Begegnung, Auslöser, SL-Notiz), Fraktionsziele als Kreise zum Abhaken, Gerüchte/Begegnungen W6.

## Sprache
Fließtext deutsch mit den Begriffen der deutschen Ausgabe (STÄ/GES/WIL, TP, Kerne statt „pips“, Zustände, Pfote/Körper/Rucksack). Eigennamen bleiben (Brickport, Sabrina, Bone Gang, Zipporah …), Titel werden übersetzt („Das Anwesen“, „Die Außenlande“).

## Design
Drei Startseiten-Entwürfe in `plan/mausritter/mockups/` (start-a/b/c.png) + Abenteuer-Ansicht `garten.png`:
- **A „Aquarellheft“** – helles Papier, breites Cover-Bild, drei Bereichskarten mit Buchzeichnungen, Abenteuer als Kartenstreifen.
- **B „Nachtwald“** – Vollbild-Cover dunkel, Bereiche als ruhige Liste links, Abenteuer unten als Kacheln.
- **C „Mausbogen“** – Lagerfeuer-Panorama, darunter die Startseite als Inventar des Mausbogens (Hauptpfote, Nebenpfote, Rucksack 1–6), Kacheln wie Gegenstandskarten.

## Etappen
1. Gerüst, Logo, Dropdown-Eintrag (Weitere Systeme), Startseite nach gewähltem Entwurf
2. Regeln + Spielleitung
3. Mäuse: Spielmäuse, Gegenstands-/Zustandskarten, Mausbogen ausfüllbar
4. Der verbotene Garten (Leitstand, Karte neu gesetzt)
5. Das Anwesen (Übersetzung, Karten)
6. Die Außenlande
7. Galerie, Suche, i-Knopf, Tastenkürzel, Screenshot-Prüfung, Push

## Offen (Moritz)
1. Startseite A, B oder C?
2. „Adventure Collection“ (die 11 Abenteuerorte zum Anwesen) als PDF vorhanden?
