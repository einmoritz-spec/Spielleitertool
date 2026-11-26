# Ladeschirm beim Systemwechsel – Plan

## Befund (gemessen 26. Nov. 2026, Startseite `#start`)
| System | Skripte | JS | Bilder Startseite |
|---|---|---|---|
| Tales from the Loop | 158 | 3,3 MB | 10 / 0,8 MB |
| Wildsea | 162 | 3,3 MB | 26 / 2,9 MB |
| Household | 152 | 3,0 MB | 18 / 2,8 MB |
| Savage Worlds | 124 | 5,4 MB | 15 / 1,1 MB |
| The Spire | 118 | 1,6 MB | 19 / 1,3 MB |
| Dragonbane | 95 | 2,1 MB | 16 / 3,1 MB |
| Mörk Borg | 50 | 0,4 MB | 4 / 0,9 MB |

Ursachen für das Ruckeln:
1. Jedes System ist eine eigene Seite und lädt **alle** Daten-Skripte (auch alle Mysterien/Abenteuer) synchron vor dem ersten Bild.
2. Die Startseite rendert sofort, die Intro-Animationen (z. B. TftL `hbIn`, clip-path) laufen, während Hintergrundbilder noch laden/dekodieren → Ruckeln, Bilder ploppen auf.
3. `sw.js` arbeitet „stale-while-revalidate“: Bei **jedem** Seitenaufruf werden alle ~150 Dateien zusätzlich übers Netz neu geholt, obwohl sie im Cache liegen. Das kostet gerade auf Handy/Tablet viel.

## Lösung in drei Teilen

### A. Ladeschirm (gemeinsamer Baustein)
- Neue Dateien `shared/ladeschirm.css` + `shared/ladeschirm.js`, je System nur eine kleine Konfiguration.
- Einbindung: CSS + ein winziges Inline-Skript ganz oben im `<head>` jeder `<system>/index.html`, damit der Schirm **vor** allem anderen sichtbar ist (kein Aufblitzen der halbfertigen Startseite). `<body class="laedt">` blendet `#app`, Kopfzeile usw. aus.
- Inhalt: Hintergrund in Systemfarbe/-textur, echtes Logo und eine systemtypische Lade-Animation (Balken, Kreis, Puls …). **Kein Text** – keine Stimmungszeilen wie „Der Nebel lichtet sich …“ (Moritz findet das cringe).
- Entwürfe aller 25 Systeme: Mockup-Datei `Ladeschirme_live.html` (26. Nov. 2026), Motive siehe Tabelle unten.
- Fortschritt = echte Werte: geladene Skripte (`load`-Ereignisse) + vorgeladene Startbilder.
- Fertig, wenn alles erfüllt ist:
  - `DOMContentLoaded` (alle Daten-Skripte da),
  - `document.fonts.ready`,
  - alle Bilder der aktuellen Startseite geladen **und dekodiert** (`img.decode()`; Hintergrundbilder aus `style="background-image"` per Scan von `#app` einsammeln),
  - Mindestdauer ~350 ms (damit es nicht flackert), Höchstdauer ~5 s (danach trotzdem öffnen).
- Dann sanft ausblenden (~300 ms) und erst **danach** die Intro-Animationen starten (Klasse `bereit` am `<body>`; z. B. TftL `.hb.intro` nur unter `body.bereit`).
- Wann zeigen: beim Systemwechsel übers Logo-Dropdown und beim Kaltstart der App. Nicht bei Wechseln innerhalb eines Systems (Hash-Wechsel, Untersettings wie Flood/Electric State, Arkand, Garten …), nicht bei Rücksprung per Esc.
- Untersettings mit eigenem Logo (Flood, Electric State, Dagger, Arkand) zeigen beim Direktaufruf ihr eigenes Logo.
- Barrierearm: `prefers-reduced-motion` → nur Logo + Balken, keine Animation.

### B. Vorladen hinter dem Schirm
- Während der Schirm steht, die **Bilder der Startseite** aktiv vorladen (`new Image()` + `decode()`), Hero-Bild zuerst.
- Im Leerlauf nach dem Öffnen (`requestIdleCallback`) die Bilder der Reiter-Übersichten nachladen, damit auch der erste Reiterwechsel flüssig ist.
- Optional: Beim Hover (Handy: langer Druck) über einen Eintrag im Logo-Dropdown schon `<link rel="prefetch">` für `index.html`, `style.css` und Hero-Bild des Zielsystems setzen.

### C. Ursache selbst entschärfen (macht den Schirm kürzer)
1. **Service Worker auf „Cache zuerst“** für alle Dateien innerhalb einer VERSION: Treffer kommt direkt aus dem Cache, ohne Netzabgleich. Aktualisierung läuft wie bisher über die VERSION-Erhöhung vor jedem Push. Größter Einzelgewinn, besonders auf dem Handy.
2. **Abenteuer-/Mysterien-Daten nachladen statt vorab** (TftL, Wildsea, Household, Savage Worlds, Spire): Startseite lädt nur Kern + Übersichten; die Daten eines Mysteriums werden erst beim Öffnen per `<script>`-Nachladen geholt (kleiner Lader `shared/nachladen.js`, Liste pro System). Größerer Umbau → als eigener Schritt nach A/B, System für System, mit Prüfung jeder Seite.
3. Bilder der Startseite, die unter dem sichtbaren Bereich liegen, mit `loading="lazy"` bzw. erst bei Sichtbarkeit setzen.

## Design je System (eigenes Motiv, nicht überall gleich)
| System | Hintergrund | Motiv |
|---|---|---|
| Tales from the Loop | Orange, Hero stark weichgezeichnet | zwei rotierende Loop-Ringe |
| Things from the Flood | Blaugrau, Regen-Schlieren | Ringe in Petrol |
| The Electric State | Dunst, Wüstenbeige | flackernde Neuro-Brille-Linie |
| Mörk Borg | Gelb, schwarzer Schräg-Balken, pinke Zeile | schräger, zitternder Balken |
| Heart | tiefrot→schwarz Vignette | pulsierender roter Glutpunkt |
| Legend in the Mist / Wake | Pergament + Dales-Karte im Nebel | Nebel, der sich lichtet |
| City of Mist / Local Legends / Nights | dunkle Stadt im Nebel / Comic-Hell / Fallakte | Nebelschwaden / Aktenreiter |
| Otherscape | Neon-Nacht | Scanlinie |
| Vaesen | dunkles Grün-Schwarz | Rauchkringel |
| Wildsea | Grüngold, Blätter | Wellenlinie im Blattwerk |
| The Spire | Schwarz-Rot, Tinte | Tintentropfen, der sich ausbreitet |
| Dragonbane | Jade + Pergament | Drachensiegel dreht sich |
| Household | warmes Papier | Garn-/Nadelspur |
| Savage Worlds | Rot-Schwarz, Rau | Spielkarte klappt um |
| Slugblaster | Sprayfarben | Sprühdose-Strich |
| Eat the Reich | Pink-Telegramm | Fernschreiber-Zeile tippt |
| Pico, Cairn, Into the Odd, Mausritter, Discworld, Broken Compass, Triangle Agency | jeweils Farben/Schrift des Buchs | schlichtes Logo + Balken, Motiv nach Mockup |

Mockups der ersten vier (TftL, Mörk Borg, Heart, Legend in the Mist) wurden gezeigt; die übrigen erst als Bild, dann bauen.

## Bauschritte
1. `shared/ladeschirm.*` bauen, an TftL testen (Kaltstart + Wechsel, Handy-Viewport, langsames Netz über Playwright-Drosselung). Vorher/Nachher als Screenshot bzw. kurzes Video.
2. Intro-Animationen aller Startseiten an `body.bereit` hängen.
3. Konfiguration + Motiv für alle Systeme, Mockups vorher zeigen.
4. `toolmenu.js`: Flag beim Systemwechsel (`sessionStorage`), Prefetch beim Hover.
5. `sw.js` auf Cache zuerst umstellen; neue Dateien in `FILES`.
6. (Eigener Schritt) Nachladen der Abenteuer-Daten, beginnend mit TftL.

## Stand 26. Nov. 2026 – umgesetzt
- `shared/ladeschirm.js` (alle Motive in einer Datei), eingebunden im `<head>` aller 23 System-Seiten; Root-Weiterleitung setzt `window.LS_SKIP`.
- Animationen der Seite sind während des Schirms pausiert (`html.ls-an`), starten danach von vorn.
- `sw.js`: ein dauerhafter Cache `erzaehler-tafel-dateien` statt einem pro Version. Vorher wurden bei jeder Version alle ~5 500 Dateien (≈400 MB) per `addAll` neu geladen – und die Installation schlug wegen zwei fehlender Discworld-Bilder komplett fehl. Jetzt: Installation nur Startseiten, Cache zuerst, Abgleich einmal pro Datei zeitversetzt und gedrosselt, „warm“ lädt fehlende Dateien nach dem Öffnen nach (nicht bei Datensparmodus). Alte Caches werden beim ersten Start umgezogen.
- Schritt 6 (Abenteuer-Daten nachladen) bewusst zurückgestellt: Messung mit 4× gedrosselter CPU zeigt Skripte aus dem Cache in 0,2–0,7 s (TftL 0,6 s); Nachladen würde Suche („f“), Querverweis-Pop-ups und Galerie gefährden. Nur angehen, falls es nach dem Update noch ruckelt.
- Prefetch im Dropdown entfällt: mit Cache zuerst kommen die Dateien ohnehin lokal.
