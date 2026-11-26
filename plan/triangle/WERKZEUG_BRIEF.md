# Triangle Agency – Auftrag „Werkzeug der Geschäftsleitung füllen“

Du füllst Abschnitte des Bereichs **Werkzeug** (Buch: General Manager's Toolkit, S. 136–197) mit übersetztem Buchtext und baust die Gestaltung der Buchseiten nach. Gerüst, Bausteine und Musterseiten stehen schon.

**Zuerst vollständig lesen:** `plan/triangle/HANDBUCH_BRIEF.md`. Alles dort gilt auch hier (Auszeichnung, Bausteine, Übersetzungsregeln, Bilder, Zeichen schneiden, Prüfen). Hier steht nur, was für das Werkzeug anders oder zusätzlich ist.

## Worum es geht
Das Werkzeug ist das GM-Handbuch der Agency – aber gekapert. Die eingesperrte Anomalie U0047BB („der Kumpel“, blaue Figur mit Auge) schreibt dazwischen: blaue Balken mit Zwischenrufen quer über den Text, blaue Kleckse. Ab S. 162 läuft das Handbuch nur noch im „abgesicherten Modus“ des AgencyOS: Fenster, Taskleiste, Fehlermeldungen; ab S. 172 öffnet der Kumpel andere Programme (Malprogramm, Browser, Intranet, Textverarbeitung, Mail) und erklärt darin das Leiten auf seine Art. Dieser Wechsel der Programme **ist** die Gestaltung. Jede Seite soll auf den ersten Blick wie ihre Buchseite wirken.

## Erst ansehen
1. Musterseiten rendern und ansehen:
   `python3 -I plan/triangle/skripte/shot.py /tmp/wk-bsp 'w/grundlagen/vorbereitung!' 'w/leiten/ende!' 'w/leiten/aussehen!'`
2. Ihre Daten: `triangle/js/data/werkzeug-grundlagen.js`, `werkzeug-leiten.js`.
3. Bausteine: `triangle/js/lesen.js` (`taB`, `taProg`), Stile am Ende von `triangle/style.css`.
4. Deine Buchseiten als Bild (PDF-Seite = Buchseite + 3), z. B. `pdftoppm -r 80 -f 175 -l 175 -jpeg "/mnt/user-data/uploads/Triangle_Agency___Regeln___HTG_Core_Rules__EN_.pdf" /tmp/s`.

## Quellen
- Rohtext je Buchseite: `/home/claude/wk/txt/s<buchseite>.txt` (pdftotext -layout; bei Spalten durcheinander – immer mit dem Seitenbild abgleichen). Kleines in Fenstern und Sprechblasen mit `-r 130` und Ausschnitt lesen.
- Bilder: `plan/triangle/bilder-inventar.tsv` (Spalte `buchseite`), Dateien in `triangle/img/regeln/full/` – u. a. `buddy-01-s169` … `buddy-22-s193`, `buddy-pixel-symbol`, `lebenszyklus-*`, `toolkit-*`, `os-*`, `muster-augen-blau`, `anomalie-koralle-blau`.
  **Achtung:** `os-titel-sample-mission`, `os-titel-adjudication`, `os-banner-*`, `os-logo-factions` enthalten englischen Text → **nicht** verwenden, sondern deutsch in CSS nachbauen (WordArt-Stil: dicker Verlauf, Kontur, Schatten). Programmlogos mit Eigennamen (`os-logo-express`, `os-logo-workscape`, `os-logo-mycontract-works`) dürfen bleiben.

## Werkzeug-Bausteine (zusätzlich zu denen im HANDBUCH_BRIEF)
| Baustein | Felder | Wofür |
|---|---|---|
| Zwischenruf `[!…!]` im Text | – | blauer Balken der Anomalie mitten im Satz (S. 142 ff.), Kleinschreibung wie im Buch |
| `desktop` | `b`, `titel?` (dann ein MyManual-Fenster um `b`), `task?:[…]` (Taskleiste), `cls?` | dunkler AgencyOS-Schreibtisch mit Symbolleiste links (S. 162–171) |
| `os` | `art`: `wirbel` (blau mit weißen Schwüngen, S. 172–193) / `nacht` (dunkel ohne Symbole), `b`, `cls?` | Hintergrund, auf dem Programmfenster liegen |
| `prog` | `art`: `manual`/`express`/`browser`/`works`/`mail`/`terminal`/`plain`; `titel`; `b`; optional `adr` (Adresszeile Browser), `an`, `von`, `betreff` (Mail), `w` (max. Breite px), `dreh` (Grad), `cls` | ein Programmfenster mit Titelleiste und – je nach Art – Malpalette, Adresszeile, Formatleiste, Mail-Feldern, grüner Terminalschrift |
| `fenster` | wie im HANDBUCH_BRIEF (`art:"fehler"` u. a.) | System-Meldungen: „Alarm“, „Letzte Warnung“, Normal-AntiVirus-Pop-up |
| `buddy` | `img`, `pos` (`l`/`r`), `gross?`, `b` | der Kumpel mit gelber Sprechblase |
| `haken` | `x` | anklickbares Kästchen (Checklisten) |

Mehrere Fenster nebeneinander: `{t:"os", b:[{t:"sp", x:[[fenster…],[fenster…]]}]}`. Überlappung/Schräglage wie im Buch mit `dreh` und eigenen Klassen (`cls`) in deiner CSS-Datei.

## Feste Begriffe (vorher immer auch `grep -rn` in `triangle/js/data/` nach schon benutzten Übersetzungen)
Programmnamen bleiben englisch (Eigennamen): MyManual 1998, Express, Intranet Adventurer, WorkScape, Workster, AMail, MyContract Works, Normal AntiVirus, AgencyOS. Fenstertitel sonst deutsch („(Keine Rückmeldung)“, „(Testversion – noch 4 Seiten)“, „Verfassen“).
| Englisch | Deutsch |
|---|---|
| The Unraveling | die Entwirrung |
| Weather Event(s) | Wetterereignis(se) |
| Safe Mode | abgesicherter Modus |
| Desktop Buddy / buddy | Desktop-Kumpel / Kumpel |
| Ripple, Hollow, Lobby, Resonant | bleiben |
| Minor Anomaly | Kleine Anomalie |
| High Pressure Situations | Drucksituationen |
| Personalized Chaos Effects | Eigene Chaos-Effekte |
| Distort, Corrupt, Reality Trigger, Manifest, Attract, Expand, Double, Displace, Triple, Kill, Overwhelm | Verzerren, Verderben, Realitäts-Auslöser, Manifestieren, Anziehen, Ausdehnen, Verdoppeln, Versetzen, Verdreifachen, Töten, Überwältigen |
| Anomaly Retrieval / Clean-Up / Market Disruption (Einsatzarten) | Anomalie-Bergung / Aufräum-Einsatz / Marktstörung |
| Mysteries / Challenges / Tough Choices | Rätsel / Herausforderungen / Schwere Entscheidungen |
| Returning Antagonists / Factions | Wiederkehrende Gegenspieler / Fraktionen |
| Work Scene / Life Scene / Power Scene | Arbeitsszene / Lebensszene / Machtszene |
| Adjudication / Performance Evaluation | Beurteilung / Leistungsbeurteilung |
| Retirement / Endings | Ruhestand / Enden |
| Mandatory Overtime | Pflicht-Überstunden |
| Optional Objectives | Optionale Ziele |
Ein neuer, öfter vorkommender Begriff, der hier fehlt: Wahl im Abschlussbericht nennen.

## Abschnitte und Zuständigkeit
Schlüssel `TA_TEXT["w/<unterpunkt>/<abschnitt>"]` genau wie in `triangle/js/data/nav.js`. Jeder Teil hat **eine** Datendatei und **eine** CSS-Datei (Klassen mit Vorsatz `wk<buchstabe>-`, z. B. `wka-`). Andere Dateien nicht anfassen (wie im HANDBUCH_BRIEF; zusätzlich tabu: `werkzeug-leiten.js` und fremde `werkzeug-*.js/css`). Kein git.

**Teil A – Grundlagen** · `werkzeug-grundlagen.js` (anhängen, Muster `vorbereitung` unverändert lassen) · `werkzeug-a.css`
- `gratulation` S. 136 („WAIT!“ + Brief „Contractulations!“ – Wortspiel deutsch retten; der Titel in nav.js lautet vorläufig „Vertraguliere!“, deine bessere Lösung im Bericht nennen). S. 137 (Kapitelseite) und S. 140–141 (Inhaltsverzeichnis) entfallen.
- `lebenszyklus` S. 144–145: Kreislauf-Schaubild (Mensch, Ripple, Lobby, Anomalie, Hollow, Resonant, Agent, Tod mit beschrifteten Pfeilen) als deutscher Nachbau in `html`+CSS mit den Bildern `lebenszyklus-ripple`, `lebenszyklus-anomalie-frosch`, `lebenszyklus-hollow`; Text in Spalten; Zwischenrufe.
- `platz` S. 146 (Skizze `toolkit-skizze-s146-1`, Tabelle „Frozen-Yogurt-Kalender“ mit Stempel „ABSOLUT NICHT.“), `zusatz` S. 147 (Dreieckskopf, große Schlagworte „KEEP ME HERE“ deutsch), `wichtig` S. 148–149 (blaue Fläche, Auge, Skizzen), `sorge` S. 150 (Text, „Vorbereitung, nochmal“, Fenster „Häufige Alarmrufe“).

**Teil B – Anomalien bauen** · `werkzeug-bauen.js` · `werkzeug-b.css`
- `vorbereitung2` 151, `fokus` 152 (Schaubild „Wahrscheinlichkeit (%), dass ein Haushaltsgegenstand ein verstecktes Schwert ist“ deutsch nachbauen), `kompliziert` 153, `domaene` 154–155 („Feststecken?“, große gekritzelte Zeichen), `chaos` 156 (Alarm-Fenster, Stempel „CHAOS UMSICHTIG EINSETZEN“), `klein` 157, `druck` 160 (Fenster „Letzte Warnung“), `eigene` 161. Blaue Kleckse (Koralle `anomalie-koralle-blau` S. 155) an ihrer Stelle.

**Teil C – Tabellen, Lose Enden, Ternion City** · `werkzeug-tabellen.js` · `werkzeug-c.css`
- `tabellen/chaos` S. 158: Chaos-Effekte-Tabelle als **Raster aus Karten** (je Effekt: Kosten mit Chaos-Wirbel, Name, Beschreibung, Beispiel).
- `tabellen/klein` S. 159: Tabelle zum Bauen Kleiner Anomalien als Raster.
- `tabellen/wetter` S. 164–169: alle Wetterereignisse als Raster aus Karten mit Wurfbereich (anklickbar aufklappen nur, wenn sonst zu lang).
- `leiten/lose` S. 164–169: `desktop` mit Fenster „Die Entwirrung (abgesicherter Modus)“: Text, Tabelle Lose Enden / Start-Chaos / Wetterereignisse / Entwirrung; die Wetterereignisse **nicht doppeln**, sondern ein Verweis-Knopf auf `#w/tabellen/wetter` (`html` mit `<a onclick="go('w/tabellen/wetter')">`). Dazu Werbe-Fenster und Kumpel von S. 168–169 (`buddy-01-s169`, „Kostenloser Desktop-Kumpel“).
- `ternion/orte` S. 194: 4×4-Raster der Orte mit W4-Kopfzeile/-spalte, darunter „Pflicht-Überstunden“. „Mögliche Solo-Einsätze“ **weglassen**. Fenster „jk ich bin noch da“ mit Fortsetzung.

**Teil D – Leiten, Express** · `werkzeug-leiten-d.js` · `werkzeug-d.css`
- `uneinig` 172, `ermittlungen` 173, `bergung` 174–175, `aufraeumen` 176. Hintergrund `os` `wirbel`; Hauptfenster `prog` `express` („Express (Testversion – noch 4 Seiten)“ usw.), Panel „Anzeigeoptionen“ (S. 172), MyManual-’98-Fenster, Kumpel `buddy-06` … `buddy-09`. Die Malprogramm-Seiten leben von wilder Typografie: bunte WordArt-Titel („Rätsel“, „Anomalie-Bergung“, „Herausforderungen“, „Schwere Entscheidungen“ in Fraktur-Anmutung), handschriftliche Kästen in Großbuchstaben, schräge Notizen. In CSS nachbauen (Schriften: vorhandene `Hand`, `Fig`, `Spartan`; Fraktur-Anmutung mit `font-family:"UnifrakturMaguntia",serif` nur wenn als Datei vorhanden, sonst Serifenschrift kursiv-fett).

**Teil E – Leiten, WorkScape und Workster** · `werkzeug-leiten-e.js` · `werkzeug-e.css`
- `figuren` 177 und `beziehungen` 178: `prog` `browser` („Intranet Adventurer 3“) mit WorkScape-Seite im Fantasy-Spiel-Look (dunkel, Fackelbanner `os-workscape-fackelbanner`, Logo `os-logo-workscape`, Gnom `os-workscape-gnom`, Textur `os-workscape-textur`, Schild `os-workscape-schild`), goldene Rahmen, Eigenschaftswerte.
- `markt` 179 (MyManual-’98-Fenster + Fenster „Optionale Ziele“), `gegenspieler` 180, `fraktionen` 181, `morgen` 182–184 (inkl. Szenenarten S. 183–184 mit Fragen-Kärtchen): Workster-Intranet im 2000er-Netzwerk-Look (rotes Logo „workster – a place for work“ → „ein ort für arbeit“, rosa Menüleiste, Blöcke mit Kopfbalken, Benutzer „xX_DarkOcean7_Xx“, Pixel-Avatar `os-pixel-avatar`, Konfetti `os-konfetti`). Banner der Fraktionen deutsch in CSS.

**Teil F – Leiten, Mail, MyContract Works, Enden** · `werkzeug-leiten-f.js` · `werkzeug-f.css`
- `checkliste` 185: Fenster „Nachricht von mir : )“ (`mail` mit `von`) und „AMail – Verfassen“ mit anklickbarer Checkliste (`haken`), Logo `os-logo-mycontract-works`.
- `beispiel` 186–187: `prog` `works` mit WordArt-Titel „Beispieleinsatz“ (CSS) und dreispaltigem Text.
- `beurteilung` 188: `works` mit WordArt „Beurteilung“, Fenster „Leistungsbeurteilung“.
- `veraergern` 189: Augenmuster `muster-augen-blau` als Hintergrund, gelbe Notizen.
- `enden` 190–193: Ruhestands-Liste mit Playwall-Verweisen `[[J2]]` usw., die Kumpel-Bilder `buddy-14` … `buddy-22` mit Luftballons, Terminal-Fenster (`prog` `terminal`), Abschiedszeile „Vielleicht komme ich eines Tages zurück.“

## Zusätzlich zu den Regeln im HANDBUCH_BRIEF
- **Vollständig übersetzen**, auch Text in Fenstertiteln, Menüs, Knöpfen, Sprechblasen, Kritzeleien. Kleinschreibung und Tippfehler-Stil des Kumpels beibehalten.
- Keine Breite verschenken: Fenster nebeneinander wie im Buch; auf schmalen Bildschirmen (unter 900 px) untereinander – mit `TA_W=420` rendern und prüfen.
- Keine Seitenzahlen im Text außer als `{S.x}`-Verweis; keine Erklärtexte von dir.
- Kopfzeile und Seitenleiste nicht verändern.

## Prüfen (Pflicht, je Abschnitt)
1. Datei lädt: `node -e "global.window=global;var TA_TEXT={};eval(require('fs').readFileSync('triangle/js/data/<datei>.js','utf8'));console.log(Object.keys(TA_TEXT))"`
2. `python3 -I plan/triangle/skripte/shot.py /tmp/wk-<teil> 'w/<unterpunkt>/<abschnitt>!'` → letzte Zeile `ok`; ebenso mit `TA_W=420` und mit `TA_FOLD=1`.
3. Screenshot mit Read neben das Buchseitenbild legen: fehlt Text? englische Reste? Lücken, Überlappungen, abgeschnittene Bilder? Beheben, neu rendern.

## Abschlussbericht (kurz)
Fertige Abschnitte; neue Zeichen/Bilder; Begriffsentscheidungen, die nicht in der Liste stehen (mit Buchseite); was offen blieb.
