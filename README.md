# Wake of the Oldways — Erzähler-Tafel

Spielleiter-Tafel für *Legend in the Mist: Wake of the Oldways*. Reines HTML/CSS/JavaScript, kein Build-Schritt, keine Abhängigkeiten, komplett offline nutzbar und als App installierbar (PWA).

## Als App installieren
1. Repo-Einstellungen → **Pages** → Source: **GitHub Actions** (einmalig).
2. Nach dem Push auf `main` veröffentlicht der Workflow die Tafel unter  
   `https://einmoritz-spec.github.io/Spielleitertool/`.
3. Link öffnen → **„App installieren"** (Chrome/Edge) bzw. **Teilen → Zum Home-Bildschirm** (iOS).

## Einzeldatei (Weitergeben, Doppelklick, USB-Stick)
Beim direkten Öffnen von `index.html` per Doppelklick (`file://`) dürfen Browser keine Nachbardateien laden. Dafür gibt es:

```bash
python3 tools/build-standalone.py   # -> dist/Wake-of-the-Oldways_standalone.html
```

Die Datei enthält alles eingebettet und läuft überall ohne Server.

## Struktur
```
index.html              Seitengerüst (Modals) + Einbindung von CSS/JS
manifest.webmanifest    App-Name, Icons, Farben
sw.js                   Offline-Cache (VERSION bei Änderungen erhöhen!)
css/
  base.css              Variablen, Kopfzeile
  overview.css          Startseite, Tastenkürzel-Legende
  settings.css          Kopfzeilen-Einstellungen, Menü
  adventure.css         Abenteuer-Ansicht, Szenen, Seitenleisten
  challenges.css        Challenge-Karten
  modals.css            Glossar- & Overlay-Fenster
  profiles.css          Spielerprofile
  tools.css             Grimoire, Themenbuch, Karte, Würfel
  libraries.css         Challenge-, Lore-, Orte-, NPC-Bibliotheken
  edit.css              Bearbeitungsmodus für Szenentexte
  responsive.css        große Bildschirme (Breite/Schrift/Spalten) & Handy-Layout
js/
  config.js             Titel, Tastenkürzel-Liste
  data/                 reine Inhalte (Abenteuer 1–7, Aftermath, Glossare,
                        Grimoire, Challenge-/Journey-Bibliothek, Profile …)
  ui/                   Fenster & Ansichten (Glossar, Profile, Suche, Würfel,
                        Kopfzeile, Startseite/Abenteuer, Tastatur & Klicks …)
  export/               PDF-Zusammenfassung, Sitzungs-Schnappschuss, Druck
  profiles.js           Profil-Bearbeitung (Gruppe + eigene Charaktere)
  state.js              Zustand, localStorage, Reset
  main.js               Start
assets/                 Kartenbild, NPC-Porträts, Themenbuch-Icons
icons/                  App-Icons
tools/build-standalone.py
.github/workflows/pages.yml
```

Die Skripte sind klassische `<script>`-Dateien mit gemeinsamem globalem Scope. **Die Ladereihenfolge in `index.html` zählt** (Daten zuerst, dann Oberfläche, `main.js` zuletzt).

## Bedienung (Auszug)
Tastenkürzel stehen unten auf der Startseite. Charaktere aus dem Charakter-Ersteller: 🆕 Charakter → „📥 Charakter importieren (JSON)“. Szenentext bearbeiten: Stift oben rechts in der Szene (Taste `E`, Strg+S speichert; Änderungen liegen als Überschreibung im Browser, „↺ Original“ stellt zurück). Kopfzeile anpassen: Rechtsklick auf einen Knopf oder ⚙ (Taste `,`). Der Spielstand liegt im `localStorage` des Browsers; „📄 Speichern" erzeugt zusätzlich eine eigenständige Sicherungskopie der Tafel mit dem aktuellen Stand.

## Änderungen veröffentlichen
Nach Änderungen an Dateien in `sw.js` die `VERSION` erhöhen (`v1` → `v2` …) und neue Dateien in `FILES` ergänzen, damit installierte Apps aktualisieren.

## Charaktererstellung & Spieler-Link

Die komplette Charaktererstellung (Fragen, Theme-Kits, Tropes, Charakterbogen/PDF) liegt als eigene Seite in `creator/`.

- **Spielleitung:** Kopfzeilen-Knopf „🧙 Erstellung“ öffnet sie als Fenster. Fertige oder bearbeitete Charaktere landen automatisch unter „Charakter“ (eigene Profile).
- **Spieler:** „🔗 Spieler-Link“ im Fenster kopiert/teilt `…/creator/` – diese Adresse zeigt nur die Charaktererstellung. Spieler schicken ihren Charakter per „📤 An Spielleitung senden“ (JSON-Datei), die Spielleitung importiert sie unter „Charakter“ → 📥.
- Hinweis: Auf GitHub Pages ist alles öffentlich erreichbar; der Link ist also kein Zugriffsschutz, er führt nur direkt zur Erstellung.

## Local Legends (City of Mist)

Unter `locallegends/` liegt die Fall-Akte „Local Legends“. Zwischen beiden Tools wechselst du in den Einstellungen (⚙) – in Wake of the Oldways unter „Tool wechseln“, in Local Legends ebenfalls über ⚙. Die letzte Wahl wird gemerkt (`gm_tool_mode_v1`) und beim nächsten Start der App geöffnet.
