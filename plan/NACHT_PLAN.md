# Otherscape – Nachtplan (Start 01:00 Europe/Berlin)

Repo: /home/claude/spielleitertool (Branch main, Remote origin). Nur Otherscape (`otherscape/`) + `sw.js` (nur VERSION-Bump am Ende).
Audit-Berichte: plan/audit/*.md (im Repo). Bilder: nicht im Repo; nur Kandidaten aus den Berichten nutzen (Zuschnitt aus den Original-PDFs in /mnt/user-data/uploads/ falls vorhanden, sonst Bild überspringen).

## Regeln für alle Schritte
- Antwort und Commit-Messages auf Deutsch. KEINE Co-Authored-By- oder Claude-Session-Zeilen.
- Vor jedem Push: `git pull --rebase --autostash`. Nur eigene Pfade committen. Keine fremden untracked Dateien committen, außer sie gehören zu einem Schritt unten.
- Seitenangaben immer "S.". Keine leeren Spalten, keine langen Einzelspalten, keine Vorlesetext-Beschriftung.
- Sichtbare Änderungen: Screenshot prüfen (Read-Tool) bei 1366 px und 390 px, bevor "fertig".
- sw.js-VERSION nur EINMAL am Ende erhöhen (aktuell v311kon → v312kon).
- Bei Unklarheit NICHT raten: im Abschlussbericht notieren.
- Keine Löschungen fremder Dateien. Keine Änderung an Settings außer Otherscape.

## Schritt 1: Metro-Setting-Seite
- Dateien: metro-setting-1.js (OS_METRO_ARCHETYPEN, OS_METRO_CREW_HOOKS, OS_METRO_JOBS, OS_METRO_ORTE), metro-setting-2.js (OS_METRO_HOOKS, OS_METRO_SZENEN), metro-setting-3.js (OS_METRO_PHILO, OS_METRO_GLOSSAR). Sind in index.html eingebunden.
- Ziel: Renderer für diese Daten in otherscape/js/regelwerk.js (renderMetro) ergänzen: Kapitel als Liste links (osRail), Inhalte flach rechts, Karten im Raster für Archetypen/Orte/Jobs, Glossar als Tabelle/Liste.
- Abnahme: Seite lädt ohne Fehler, alle Gruppen sichtbar, Screenshot 1366 + 390.

## Schritt 2: Archetypen, Charaktererstellung, //RUN
- Dateien: metro-archetypen.js (OS_ARCHETYPEN), metro-charaktererstellung.js (OS_CHARAKTERERSTELLUNG), metro-run.js (OS_RUN). Noch NICHT in index.html – einbinden (nach metro-kits-Dateien, vor app.js-Renderer) und sw.js-FILES ergänzen.
- Ziel: je Seite eigene Route/Renderer, Archetypen als Karten (Kit-Namen als Textverweis), Schritte als nummerierte Liste, //RUN als Kapitel-Tabs/Rail.
- Abnahme: Routen erreichbar über Burger-Menü/Tab, Screenshots.

## Schritt 3: Regelwerk-Korrekturen (regelwerk.js)
Aus dem Bericht plan/audit/core-93-184.md:
- Status stapeln (S. 104–105): gleicher Status = weitere Markierung; Wounded-4 + Wounded-4 = Wounded-5.
- Limit (S. 104): PCs Standard-Limit 5; Limit erreicht = vorübergehend überwunden; überschritten = dauerhaft; Tier 6 = dauerhaft.
- Consequences/Mitigate (S. 98): 1 Power blockt einen Status-Tier, 2 Power einen Tag. "Minimum eins"-Regel streichen oder belegen (nicht im PDF S. 98–100 belegt).
- Wurf (S. 87/88): Schlangenaugen (1+1) = immer Miss, Boxcars (6+6) = immer 10+ ergänzen. Repo-Regel "Minimum eins bei Power ≤0" streichen (nicht belegt).
- Load Up (S. 114): 1 Power zum Laden, 1 Power pro Tag; Wort "Wildcard" entfernen.
- Power-Optionen (S. 122): nur ein positiver Tag pro Aktion verbrennen.
- Seitenangabe "Minimum eins" korrigieren (laut Audit S. 90 bzw. 92 – vorher im PDF prüfen).
- Abnahme: Diff nur in regelwerk.js-Regelblöcken, Begründung je Punkt im Commit-Body.

## Schritt 4: Tokyo-Straßenkatalog und Themenkits
- Quelle: plan/audit/tokyo-81-160.md (Katalog S. 81–93) und tokyo-1-80.md (Kits S. 54–70).
- Ziel: neue Datei(en) otherscape/js/data/tokyo-katalog-strasse.js und tokyo-kits-*.js, im bestehenden Katalog-Renderer einhängen (katalog.js-Format). Kits über allKits() in kits.js (OS_KIT_FILES ergänzen).
- Nur Einträge, deren Daten im Bericht eindeutig sind. Unklare Einträge in Liste "offen" im Commit notieren.

## Schritt 5: Tokyo-Charaktertropes (S. 43–53, 177–184)
- Neue Datei otherscape/js/data/tokyo-tropes.js, Renderer analog zu Archetypen (Karten). Bilder: nur Hinweis, Bilder siehe Schritt 8.

## Schritt 6: Abenteuer-Struktur prüfen
- Seitenleisten-Struktur (Unterkapitel links, Abschnitte aufklappbar) aus Commit 852ae76 bei allen Abenteuern prüfen: Anthill, Bridge Too Far, Kenko Ruins, Lost Flooded, Steam Punks, Strings Attached, Biting Bullet. Je ein Tab mit Text, einer mit Challenges, einer mit Bild.
- Fehler beheben, sonst nur notieren. Screenshots 1366 + 390.

## Schritt 7: UI-Restpunkte
- Gegner-Seiten mit nur einer Challenge: rechte Seitenspalte mit Leerraum → Karte breit oder Spalte entfernen.
- Katalog am Handy: Bilder teils leer (Lazy-Loading?) prüfen.
- Yakuza › Challenges: Absatz endet früh bei 1366 px.
- Kapitel-Tabs/Pager mit ":" im Titel: nur in der Seitenleiste kürzen (Regel), Tabs bleiben.

## Schritt 8: Bilder (nur wo eindeutig)
- Kandidaten aus plan/audit/*.md. Zuschnitt auf Figur, ohne Titeltext und weißen Rand, webp, otherscape/img/tokyo/ bzw. otherscape/img/metro/.
- Pro Bild im Commit notieren: Quellseite, Zuordnung. Unsichere Zuordnungen (t-121, t-099, t-058, t-148, p-132, p-018) NICHT verwenden.
- Einbinden nur in bereits bestehende Karten (Challenge-Karte klein).

## Schritt 9: Entscheidungen, die NICHT in der Nacht getroffen werden
- Redaktionsnotizen "Statblocks gegen PDF-S. geprüft" (Oni-Gangs, Soma, Neo-Samurai): stehen lassen, im Bericht fragen.
- Loser Absatz "Ghost Market." auf der Ghost-Market-Seite: nur im Bericht notieren.
- Remote-URL (Groß-/Kleinschreibung): nicht ändern, nur melden.
- "Jun-ichi" (Tokyo S. 177): nur notieren.

## Abschluss
1. sw.js: VERSION → v312kon, Commit "Otherscape: Nachtarbeit – Setting, Archetypen, Regeln, Katalog, Layout".
2. Push.
3. Bericht an den Nutzer (Deutsch): je Schritt erledigt/offen, Commit-Hashes, Screenshot-Liste (als SendUserFile), offene Entscheidungen aus Schritt 9.
