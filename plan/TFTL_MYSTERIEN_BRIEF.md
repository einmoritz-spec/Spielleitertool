# Briefing: Mysterium als Datendatei für den TftL-Leitstand

Vorbild (genau so aufbauen): `tftl/js/data/m/killerbirds.js`, `killerbirds-loesung.js`, `killerbirds-rest.js` (Sommerferien und Killervögel). **Lies diese drei Dateien zuerst** und übernimm Struktur, Phasen, HTML-Klassen und Konventionen. Der Renderer ist `tftl/js/leitstand.js`.

## Ausgabe
Eine einzige Datei `tftl/js/data/m/<id>.js` (id siehe Auftrag). Sie beginnt mit
`window.MYS = window.MYS || {}; window.MYS.<id> = { id, name, bild, buch, jahreszeit?, intro, phasen:[…] };`
- `bild`: Name des Eröffnungsbilds in `tftl/img/` ohne `.webp` (z. B. `m-grownup`); vorhanden sind alle `m-*.webp`/`k-*.webp`. Fehlt eines, `bild` trotzdem so setzen wie in `tftl/js/data/mysterien.js` angegeben.
- `buch`: Buchschlüssel für die Seitenlinks (siehe Auftrag). **`s` = gedruckte Buchseite** (= PDF-Seite (1-basiert) − Offset; Offsets: tftl_core 3, tftl_a1 1, tftl_a2 1, tftl_a3 1, tftl_a4 5, tftl_z1 5). Mit pymupdf ist der 0-basierte Index = gedruckte Seite + Offset − 1.
- `phasen` wie bei Killervögeln: `wahrheit` (Wahrheit, Jahreszeit/Schauplatz-Beschreibungen mit `loop:"maelar"/"boulder"` falls das Buch beide Loops trennt), `kids` (Kinder einführen, inkl. Beispielkasten und typische Szenen als `box:1`), `mysterium` (Mysterium einführen, Aufhänger), `loesung` (erster Abschnitt `ueberblick:1`, danach je Schauplatz/Ort ein Abschnitt mit `ort:"ortN"`, `html`, `aerger:[{t:"Ärger",html}]`, `hinweise:[…]`, `extra`, falls das Buch so gliedert), `showdown`/„Konfrontation“, `nachspiel` (Nachspiel/Aftermath, Veränderung/Change, Neue Kinder). Phasen/Abschnitte, die das Buch nicht hat, weglassen; Reihenfolge und Überschriften wie im Buch. Bei Büchern mit eigener Gliederung (z. B. Zeitblasen, Camp-Aktivitäten) die Buchgliederung beibehalten, Ort-Abschnitte mit `ort`.
- Optional (nur wenn im Buch vorhanden): `M.countdown = ["Schritt 1 …", …]`, `M.orte = [{id,nr,name,s}]` (**ohne `pin`**, Karten/Pläne baue ich später), `M.nsc = {…}` wie bei Killervögeln. Keine Karten, keine Pins, keine Bilder außer `bild`.
- Große Texte dürfen in zwei bis drei Dateien liegen (`<id>.js`, `<id>-rest.js`), dann `(function(){ var M = window.MYS.<id>; … })();` in den Folgedateien.

## Regeln (verbindlich)
1. Nur der Buchtext, **vollständig und originalgetreu auf Deutsch übersetzt** (Deutschland-Band: bereits deutsch → wörtlich übernehmen, nur strukturieren). NICHTS erfinden, nichts weglassen, keine eigenen Tipps/Kurzüberblicke/Erklärungen. Solo-, Oracle-, Koop-Regeln weglassen.
2. Einheitliche Begriffe: Kinder/Kid(s) (wie in Killervögel: „Kinder“ im Fließtext), Spielleiter(in), Mysterium, Loop, Ärger, Würfelprobe, Glückspunkte, Stolz, Antrieb, Anker, Kultgegenstand, Erweiterter Ärger, Countdown, Aufhänger, Hinweis, Showdown, Nachspiel, Veränderung. Zustände: Verärgert, Verängstigt, Erschöpft, Verletzt, Gebrochen. Attribute: Körper, Technik, Herz, Verstand. Fertigkeiten im Text als `<span class='f'>schleichen</span>` (Kraft, Bewegen, Basteln, Programmieren, Rechnen, Kontakte, Charme, Anführen, Untersuchen, Begreifen, Einfühlen; klein geschrieben im Satz).
3. US-Loop-Varianten aus eckigen Klammern: `{{schwedischer Name|amerikanischer Name}}` (siehe Killervögel). Gibt es nur eine Fassung, nichts markieren. Bei Mysterien für andere Loops (Norfolk Broads, 1969, Taunus) keine Klammer-Tokens setzen.
4. Seitenverweise im Text als „S. 66“ (nie „Seite“). Querverweise auf Core-Seiten unverändert übernehmen.
5. JS-Syntax: Texte in Backticks (Template-Literals) oder `"`-Strings; in `"`-Strings nur `class='f'` mit einfachen Anführungszeichen; innere Anführungszeichen als „…“. Kein `${` im Text. Danach `node --check <datei>`.
6. Beispielkästen: `<div class="bsp"><b>Beispiel</b><p>…</p></div>`; Zitat-/Erzähltexte als `<p class="zit">`; Merkkästen als eigene Abschnitte mit `box:1`.
7. Nichts anderes im Repo ändern, kein git. Nur die eigene(n) Datei(en) anlegen.
8. Am Ende in 3 Sätzen berichten: welche Phasen/Abschnitte (mit S.), und was du unsicher übersetzt oder selbst gegliedert hast. Wenn dir eine Stelle nicht eindeutig lesbar ist (Grafik), die Seite rendern (`page.get_pixmap(dpi=70)` + Read) statt zu raten.
