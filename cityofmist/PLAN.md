# City of Mist (Übersetting) – Stand

## Struktur
- Hash: `#start` (Hub) · `#ss/…` Shadows & Showdowns · `#rw/<tab>[/<abschnitt>]` Grundregelwerk (Tabs Start, Welt, Charakter, Regeln, Entwicklung; Dokumente und Spielbeispiel über das Burger-Menü). Alte Hashes (`#spieler`, `#sl/…`) werden umgelenkt.
- Code: `js/core.js` (Helfer, Routing), `js/ss.js` (S&S), `js/rw-nav.js` + `js/rw.js` (Regelwerk), `js/main.js` (Hub, Seitenaufbau, Menü). Stil `style.css`, Regelwerk `rw.css`.
- Grundregelwerk (Quelle: Spieler:innen-Handbuch DE, Buchseite = PDF-Seite − 2): Daten je Abschnitt in `js/data/regelwerk/`, Schema `tools/regelwerk/SCHEMA.md`, Rohtext-Extraktion `tools/regelwerk/extract.py`, Prüfung `flatten.js` + `coverage.py`. Nicht übernommen: Titel/Inhaltsverzeichnis, Unterstützer:innen-Liste (S. 308 ff.).

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

# MC Toolkit – Plan (neu, noch nicht gebaut)

Quelle: *City of Mist – Master of Ceremonies' Toolkit* (EN, 247 S., Buchseite = PDF-Seite). Eigener Bereich `#mc/…`, vierte Karte auf dem Hub, Tabs wie bei Shadows & Showdowns.

## Gliederung (Tabs → Abschnitte, Seiten)
- **Start**: Der MC (S. 6), Rollen des MC (7), MC-Prinzipien (8)
- **Stadt** (Kap. 1, S. 12–55): Kinematografie der City (14), Downtown (18), Arbeiterviertel (26), Altstadt (32), Industriezone (38), Weitere Bezirke (44), Vor den Toren der Stadt (48), Was die Leads noch nicht wissen (52)
- **Spielleitung** (Kap. 2, S. 56–113): Kurzreferenz (58), Exposition Session (60), Eine Session leiten (62), Sessionstruktur (65), MC-Aktionen in der Szene (70), Soft Moves (71), Hard Moves (73), City of Mist erzählen (78), Schwierigkeit anpassen (82), Fall schreiben (84: Eisberg 86, Backstory 90, Brotkrumen 97, Dangers 101), Serie entwerfen (104: Ressourcen 105, Story-Arcs 108)
- **Dangers** (Kap. 3, S. 114–165): Kurzreferenz (116), Dangers (118), Spektren (120), Danger-Moves (123), Dangers einsetzen (127), Dangers erschaffen (131), Custom Moves (133–139), Danger-Profile (140): Mundane (141), Mythos-Power-Sets (152), Rifts & mythische Dangers (157)
- **Avatare** (S. 166–211): Avatare (166), erschaffen (170), Profile: Anatoli/Hades (174), Barton/Speer (184), Isabella/Xochiquetzal (194), Kwaku/Anansi (204)
- **Hilfsmittel**: MC-Bögen (220: Moves, Eisberg, Tracking, Serien-Ressourcen), Beispielfall „Gambling With Death“ (224–243), Karten/Grundrisse (244–247). Nicht eingebaut: Indizes (213), Backer (216).

## Umsetzung
- Daten je Kapitel/Abschnitt in `js/data/mc/*.js` (kleine Dateien), Gliederung `js/mc-toc.js`, Anzeige mit dem vorhandenen S&S-/Grundregelwerk-Renderer (Seitenleiste, flache Texte, Danger-Karten, Kurzreferenz-Kästen als Karten, Eisberg-Bogen anklickbar wie bei den Avataren).
- Übersetzung komplett deutsch (Tags/Status/Moves nach Konvention der anderen Bücher), pro Kapitel in Teilaufträgen; Reihenfolge: 1. Spielleitung → 2. Dangers → 3. Avatare → 4. Stadt → 5. Beispielfall + Bögen.
- PDF „Buch (PDF)“ lokal hochladbar, „S.“-Links öffnen das Original.

## Bilder MC Toolkit (aus Zip, per SIFT den PDF-Seiten zugeordnet)
Titel S. 1 (Hub-Karte) · S. 12 Stadt-Opener · S. 16 Kinematografie · Bezirke je am Abschnitt: S. 18 Downtown, 26 Arbeiterviertel, 32 Altstadt, 38 Industriezone, 44 Weitere Bezirke, 48 Vor den Toren · S. 73 Hard Moves · S. 90 Backstory · S. 96 Brotkrumen · S. 103 Serien-Ressourcen · S. 114 Dangers-Opener · S. 149 Mundane Dangers · S. 155 Mythos-Power-Sets · S. 159/162/165 Rifts & mythische Dangers · S. 173 Avatare erschaffen (Streifen + Beziehungsdiagramm) · Avatar-Profile je Opener+Szene: S. 174/181 Anatoli, 184/189/193 Barton, 194/201 Isabella, 204 Kwaku · S. 236/239/242 Beispielfall · S. 244/246 Karten (anklickbar). Zu prüfen: S. 125 (Danger-Moves oder Profil?), S. 149.

## Bilder Grundregelwerk (noch offen)
Kapitelbilder: S. 19, 33, 40, 162, 240 (S. 138 klären). Am Eintrag: S. 22 Mythen, 42 Wer bist du?, 48+49 Serienkonzept, 51 Eure Stadt, 171 Rampenlicht, 173 Aktionen, 182 Unterstützen & Stören, 201 Zusammenschnitt, 211 Stärken verbrennen, 226 Zustände, 233 Momentum, 242 Augenblicke der Wahrheit, 253 Gleichgewicht, 263 Krise, 281 Lebenszyklus, 284 Fortbewegungsmittel, 288 Operationsbasis. Themenbuch-Titelbilder sind bereits drin.
