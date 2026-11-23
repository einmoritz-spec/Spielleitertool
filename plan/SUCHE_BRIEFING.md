# Briefing: Volltextsuche pro System (Overlay, Taste „f“)

Ziel (Moritz): In jedem System öffnet die Taste **f** die Suche als Overlay, und sie durchsucht **alle Inhalte des Systems** (Regeln, Charaktere/Klassen, Gegner, Orte, Abenteuer/Fälle/Kapitel, Tabellen … was die App an Daten hat, nicht nur einen Teil). Ein Klick auf einen Treffer schließt das Overlay und springt zur Stelle (Hash-Route der App).

Gemeinsame Engine: `shared/gsuche.js` (global `GSuche`, Kopfkommentar lesen). Muster: siehe `dragonbane/js/suche.js` (eigene Variante) und die vorhandenen Suchen in `spire/js/suche.js`, `pico/js/suche.js` (Index aus allen Datenfiles).

Pro System zu tun:
1. Datenstruktur der App verstehen (index.html, js/app.js, js/data/*.js bzw. die dort geladenen Daten; wie Hash-Routen aussehen und welche Ansicht welchen Datensatz zeigt). Nicht raten – im Browser testen (Playwright mit /usr/bin/google-chrome, siehe /tmp/shoot.py als Beispiel; Seiten per file:// öffnen).
2. Neue Datei `<system>/js/suche.js`: `GSuche.add(function(add){ … add(titel, bereich, "#route", daten); })` für ALLE Inhalte, dann `window.sucheOpen = GSuche.open;`. Der Treffer-Hash muss in der App wirklich zur richtigen Ansicht führen (jeden Typ mit mindestens einem Beispiel per Playwright prüfen: Hash setzen, Seite zeigt den Inhalt). Wo die App Inhalte erst per Skript nachlädt (lazy), die Daten über die vorhandenen Globals/Loader holen; wenn nötig im Suchindex-Aufbau alle Datendateien laden (bereits geladene Globals nutzen).
3. In `<system>/index.html` vor dem eigenen Skript `<script src="../shared/gsuche.js"></script>` und danach `<script src="js/suche.js"></script>` einfügen (Pfade relativ zur index.html; nach den Daten-Skripten).
4. Wenn die App schon eine eigene Suche/Taste „f“ oder „/“ hat: nichts kaputtmachen; `sucheOpen` hat Vorrang vor allem anderen.
5. Optional (nur wenn Kopfzeile bereits Knöpfe hat und es passt): kein neuer Knopf nötig – Taste f genügt. Keine neuen Erklärtexte.
6. Prüfen: Taste f (mit Klick auf leere Seitenfläche, damit Fokus nicht in einem Eingabefeld liegt) öffnet das Overlay; Suche nach 3 typischen Begriffen liefert Treffer aus mehreren Bereichen; Klick auf Treffer navigiert korrekt; Esc schließt; keine JS-Fehler. Screenshot bei 1440×900 von einem Suchergebnis.

Regeln: Alle sichtbaren Texte Deutsch. Nur dein System anfassen (Dateien `<system>/…`), NICHT `sw.js`, NICHT `toolmenu.js`, NICHT `shared/`. Kein Git-Commit. Kein Erklärtext im UI. Am Ende kurz melden: welche Datenquellen indexiert sind, welche Routen, Anzahl Index-Einträge, was nicht abgedeckt ist und warum, Screenshot-Pfad.
