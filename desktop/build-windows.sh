#!/usr/bin/env bash
# Baut die Windows-Fassung (portabler Ordner + ZIP). Aufruf aus dem Repo-Stamm: bash desktop/build-windows.sh
# Braucht Node/npm und Internet (lädt Electron für Windows einmalig). Ergebnis: build/Erzaehler-Tafel-Windows.zip
set -euo pipefail
REPO="$(cd "$(dirname "$0")/.." && pwd)"
OUT="${BUILD_DIR:-$REPO/build}"; WORK="$OUT/work"; APP="$OUT/Erzaehler-Tafel"
rm -rf "$OUT"; mkdir -p "$WORK"
( cd "$WORK" && npm init -y >/dev/null && npm_config_platform=win32 npm_config_arch=x64 npm i electron@33 --no-audit --no-fund >/dev/null )
cp -r "$WORK/node_modules/electron/dist" "$APP"
mv "$APP/electron.exe" "$APP/Erzaehler-Tafel.exe"
rm -rf "$APP/resources/default_app.asar"
mkdir -p "$APP/resources/app/www"
cp "$REPO/desktop/package.json" "$REPO/desktop/main.js" "$APP/resources/app/"
( cd "$REPO" && tar --exclude=.git --exclude=plan --exclude=tools --exclude=desktop --exclude=build --exclude=README.md -cf - . ) | tar -xf - -C "$APP/resources/app/www"
cat > "$APP/LIES-MICH.txt" <<'T'
Erzähler-Tafel – Windows-Fassung (läuft offline, kein GitHub nötig)

Start: Doppelklick auf Erzaehler-Tafel.exe  (Windows meldet beim ersten Mal evtl. "Der Computer wurde geschützt" -> "Weitere Informationen" -> "Trotzdem ausführen").
Ordner an einen beliebigen Platz entpacken, z. B. C:\Spiele\Erzaehler-Tafel. Eine Desktop-Verknüpfung: Rechtsklick auf die .exe -> Senden an -> Desktop.
Eigene Daten (Notizen, geladene PDFs) liegen im Benutzerprofil (%APPDATA%\Erzähler-Tafel) und bleiben bei Updates erhalten, wenn du nur den Ordner austauschst.
Die App startet im Vollbild (ohne Titelleiste). F11 schaltet Vollbild ein/aus. Zoom: Strg + Mausrad oder Strg +/-.
T
( cd "$OUT" && rm -rf work && zip -qr Erzaehler-Tafel-Windows.zip Erzaehler-Tafel )
echo "Fertig: $OUT/Erzaehler-Tafel-Windows.zip"
