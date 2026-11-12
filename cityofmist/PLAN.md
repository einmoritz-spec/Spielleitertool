# Shadows & Showdowns – Stand

Quelle: *City of Mist – Shadows & Showdowns* (EN, 312 S., Buchseite = PDF-Seite). Privates Spielleiter-Nachschlagewerk, nur für Moritz.

## Stand
Übersetzt (Deutsch; Tags, Status, Moves, Eigennamen englisch):
- Spieler (Kap. 1, S. 9–71): Themenbücher, Charakterbau/Theme Kits, Entwicklung, Relikte, Vertraute. S. 72–74 = nur Comic.
- Orte & NSCs (Kap. 2, S. 75–128): 40 Einträge.
- Avatare (Kap. 3, S. 129–200): Wahrheit, Chow, DA King, Ganesha, Dr. Leyland, Rosaline, Monte Wolfe; anklickbare Organigramme (`CM_ORG`).
- Gatekeeper (Kap. 4, S. 202–299): Leben eines Agenten, Gatekeeper spielen, Organisation, Gegner, Geheimnisse des Mist.
- Nicht eingebaut: S. 1–8 und 300–312 (Impressum, Anhang-Indexlisten, Backers).

## Aufbau
- Gliederung: `js/toc.js` (`CM_NAV`, `CM_ORTE_CATS`, `CM_AV_CATS`, `CM_GK_CATS`, `CM_SP_E`). Eintragsnamen dort müssen exakt dem Eintrag-`name` entsprechen, sonst erscheint „nur Original“.
- Daten: `js/data/{orte,avatare,gatekeeper,spieler}/*.js`, Einträge `CM_ORTE.<kat>` (Spieler: `sp_<kat>`).
- Anzeige: `js/app.js` (`ortCard`, `dangerCard`, `orgHtml`/`orgGo`), Stil `style.css`.
- Jede neue Datei/jedes neue Bild in `index.html` und `sw.js` (FILES) eintragen, `VERSION` hochzählen.

## Offen
- Übersetzungen der Subagent-Kapitel (Gatekeeper, Spieler) gegen das Original stichprobenartig prüfen, besonders Danger-Werte und Tag-Listen.
- Weitere Bilder (Orte, Avatare), Suche, Merkliste.
- Anhang-Gegenprobe (Mythoi/Dangers/Theme Kits des Buchs gegen die Tool-Daten).
