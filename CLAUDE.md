# Spielleitertool – Hinweise für Claude

Statische PWA (reines HTML/CSS/JS, kein Build), veröffentlicht über GitHub Pages. Jedes Rollenspielsystem liegt in einem eigenen Ordner (`heart/`, `tftl/`, `pico/`, `spire/` …) mit eigener `index.html`.

## Wenn Moritz ein PDF schickt und „System X anlegen“ oder „System X ausbauen“ sagt
Lies zuerst **`plan/SYSTEM_EINBAU.md`** und arbeite den Ablauf dort Schritt für Schritt ab. Er enthält die Checkliste, die Vorlagen und die gemeinsamen Bausteine. Gibt es schon einen Einzelplan (`plan/<SYSTEM>_PLAN.md`), lies ihn ebenfalls.
Für Charakterbögen im Original-Look (Mist Engine: Otherscape/City of Mist als Vorbild, jetzt Legend in the Mist) lies **`plan/MIST_BOGEN_ORIGINALLOOK.md`**.

## Immer gültig
- Antworten auf Deutsch; alle Inhalte im Tool komplett auf Deutsch.
- Commits ohne `Co-Authored-By`- und `Claude-Session`-Zeilen.
- Vor jedem Push: `const VERSION` in `sw.js` um eins erhöhen. Neue Dateien, die offline gebraucht werden, in `FILES` von `sw.js` eintragen.
- Vor dem Push `git fetch` + `git rebase origin/main` – Moritz arbeitet oft parallel in anderen Sitzungen. Bei Konflikt in `sw.js` die höhere Version nehmen und +1.
- Jede sichtbare Änderung selbst per Screenshot prüfen (Playwright + Chrome, `file://…/index.html#route`, Seitenleiste auch eingeklappt) und den Screenshot mitschicken.
- `quellen/` (PDFs, Rohtexte, Bild-ZIPs) und `plan/` werden nicht veröffentlicht.
