# Triangle Agency – Auftrag „ARK-Einträge füllen“

Du füllst Detailseiten des Bereichs **ARK** (Anomalie · Realität · Kompetenz) mit dem übersetzten Buchtext. Gerüst, Bausteine und drei fertige Mustereinträge stehen. Deine Einträge sollen aussehen und klingen wie die Muster.

## Erst ansehen
1. Muster rendern und die JPGs mit Read öffnen:
   `python3 -I plan/triangle/skripte/shot.py /tmp/ark-bsp 'ark/anomalie/whisper!' 'ark/realitaet/caretaker!' 'ark/kompetenz/pr!'`
2. Ihre Daten lesen: `triangle/js/data/ark-anomalie-text.js`, `ark-realitaet-text.js`, `ark-kompetenz-text.js`.
3. Bausteine: `triangle/js/lesen.js` (Funktion `taB`, Abschnitt „ARK-Bausteine“ und alle Handbuch-Bausteine), Gestaltung am Ende von `triangle/style.css` („ARK-Detailseiten“). Katalog der Handbuch-Bausteine und der Textauszeichnung: `plan/triangle/HANDBUCH_BRIEF.md` (Abschnitte „Auszeichnung im Text“ und „Bausteine“) – gilt hier genauso.
4. Liste der Einträge mit IDs und Buchseiten: `triangle/js/data/ark.js`. Begriffe: `plan/TRIANGLE_PLAN.md` („Begriffe (freigegeben)“ und die Zeile „Selbst gewählte Begriffe“ ganz oben).

## Quellen
- Rohtext: `/home/claude/ta/txt/core.txt`, Seiten durch `\f` getrennt. **PDF-Seite = Buchseite + 3.** Der Rohtext ist bei diesen Seiten stark durcheinander – **jede Seite zusätzlich als Bild ansehen**:
  `pdftoppm -r 90 -f <pdfseite> -l <pdfseite> -jpeg "/mnt/user-data/uploads/Triangle_Agency___Regeln___HTG_Core_Rules__EN_.pdf" /tmp/<deinkürzel>-s` und mit Read öffnen; für Kleingedrucktes `-r 140` mit Ausschnitt (`-x -y -W -H`).
- Jeder Eintrag ist eine Doppelseite: links Titel, Bild, Motto, Beschreibung; rechts die Regelkästen.

## So legst du einen Eintrag an
```js
TA_TEXT["ark/<art>/<id>"] = {
 motto:"…",            // die farbige Zeile unter dem Bild
 l:[ …Blöcke… ],       // linke Seite unter dem Motto: Beschreibung (fließt zweispaltig), dazu Kästen/Tabellen, die im Buch links stehen
 r:[ …Blöcke… ]        // rechte Seite
};
```
Titel, Abzeichen, Seitenangabe und Bild setzt das Tool selbst. Ein Block ist eine Zeichenkette (= Absatz) oder ein Objekt mit `t`.

### ARK-Bausteine
| `t` | Felder | Wofür |
|---|---|---|
| `faehig` | `h`, `x` (Beschreibung, Qualität **fett**), `erg:[["ok"/"plus"/"nein", Text]]`, `f` (Frage), `a:[[Antwort, Playwall-Code]]`, optional `b:[Blöcke]` | Anomalie-Fähigkeit mit Erfolg/Zusatz/Fehlschlag und Frage-Kasten. Jede Zeile in `erg` beginnt fett mit „**Bei Erfolg** …“, „**Bei jeder dritten {3}** …“, „**Bei Fehlschlag** …“ wie im Buch. Codes exakt vom Bild ablesen (z. B. `T2`, `A11`) |
| `ausloeser` | `h` („Realitäts-Auslöser: …“), `b:[[Blöcke],[Blöcke]]` | zweispaltiger Auslöser-Text |
| `spur` | `h`, `x:["1","2","3","4","X"]` | Leiste aus Kästchen (z. B. „Unabhängig“); `"X"` = runder Endpunkt |
| `ventil` | `h` („Burnout-Ventil: …“), `x` | Burnout-Ventil |
| `fragebogen` | `x:[…]` | „Fragen zum Arbeitsantritt“ (Onboarding Questions) |
| `matrix` | `b:[Blöcke]`, `x:[{f, bsp}]` | Beziehungsmatrix: Einleitung + drei Fragen mit Beispielen |
| `w4` | `h?`, `b?:[Blöcke]`, `x:[4 Einträge]` | W4-Tabelle (1–4, die 3 rot) |
| `direktive` | `h`, `x` | Oberste Direktive |
| `gebilligt` | `x:[drei Verhalten, als Fortsetzung von „… jedes Mal wenn du:“]`, `bonus` | Gebilligtes Verhalten |
| `erst` | `h`, `x` oder `b` | Erst-Anforderung |
| `selbst` | `b:[Blöcke]`, `x:[{f, a:[[Antwort, Qualität]]}]` | Selbsteinschätzung; Qualität als deutscher Name (Präsenz, Beharrlichkeit …) |
| `zitat` | `x` | Spruch im Rahmen am Seitenende |

Wiederkehrende Standardtexte (Beziehungsmatrix-Einleitung, Selbsteinschätzungs-Einleitung, Gebilligtes-Verhalten-Bonus) **wörtlich aus den Mustern übernehmen**, sofern das Buch denselben englischen Text hat; weicht das Buch ab, die Abweichung übersetzen.

Hat ein Eintrag etwas, wofür kein Baustein passt (eigene Leiste, Tabelle, Sonderkasten), nimm zuerst die Handbuch-Bausteine (`kasten`, `tab`, `liste`, `leiste`, `sp` …). Nur wenn nötig `{t:"html", x:"…"}` mit Klassen in **deiner** CSS-Datei (siehe unten).

## Übersetzung
- Vollständig und genau: jeder Satz der Doppelseite, nichts kürzen, nichts erfinden. Ton: todernstes, leicht bedrohliches Bürodeutsch; die Witze müssen sitzen. Anrede „du“.
- Englisch bleiben nur Eigennamen: die 27 ARC-Namen (Whisper … Clown, auch PR, R&D, CEO, Intern, Gravedigger, Reception, Hotline, Barista), Agency, AgencyOS, Playwall, The Vault, Ternion City, GM. Alles andere deutsch – auch Namen von Fähigkeiten, Gegenständen, Auslösern.
- `{3}` für jede rote Drei. `<Agent/Spieler>`-Klammerpaare wie im Buch.
- Typografie: „…“, –, … (mit geschütztem Leerzeichen davor ist nicht nötig).

## Regeln
- Du änderst **nur** die dir zugewiesenen Dateien. Nicht `lesen.js`, `style.css`, `app.js`, `index.html`, `sw.js`. Fehlt dir etwas am Baustein, löse es in deiner Datei und melde es im Abschlussbericht.
- **Nicht committen, nicht pushen.** Keine Dateien löschen.
- Die Mustereinträge in deiner Datei nicht verändern; deine Einträge darunter anfügen, in Buchreihenfolge.
- Nach je zwei, drei Einträgen rendern (`shot.py` wie oben, mit deinen Routen) und die Bilder ansehen: Überläufe, leere Flächen, abgeschnittener Text, falsche Codes? Beheben.
- Zum Schluss Syntax prüfen: `node -e "var TA_TEXT={};eval(require('fs').readFileSync('<deine datei>','utf8'));console.log(Object.keys(TA_TEXT))"`.
- Abschlussbericht (kurz): welche Einträge fertig, selbst gewählte Begriffe (englisch → deutsch), Stellen mit Unsicherheit (unleserlicher Code o. Ä.), fehlende Bausteine.
