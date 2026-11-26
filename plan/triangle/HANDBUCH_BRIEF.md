# Triangle Agency – Auftrag „Handbuch-Seiten füllen“

Du füllst Leseseiten des Bereichs **Handbuch** mit dem übersetzten Buchtext. Gerüst, Gestaltung und sechs fertige Beispielseiten stehen schon. Deine Seiten sollen aussehen und klingen wie diese Beispiele.

## Worum es geht
Das Buch gibt sich als Firmenunterlage eines unheimlichen Konzerns. Sein Witz liegt im todernsten Bürodeutsch, mit dem Ungeheuerliches verkündet wird („Zum Glück kommt das nie vor.“), und in der Gestaltung: Piktogramme, Warnkästen, Fehlermeldungen, geschwärzte Stellen, Quizfragen mit Verweis-Androhung. Beides muss erhalten bleiben. Moritz (Spielleiter, liest am Laptop und Handy) will keinen langen Fließtext untereinander, sondern die Seite so gegliedert wie im Buch: Spalten nebeneinander, Kästen als Kästen, Bilder an ihrer Stelle.

## Erst ansehen
1. Die sechs Beispiele im Tool rendern und ansehen:
   `python3 -I plan/triangle/skripte/shot.py /tmp/ta-bsp 'h/agency/was!' 'h/agency/werte!' 'h/wuerfeln/wuerfel!' 'h/wuerfeln/chaos!' 'h/einsaetze/ausgaenge!' 'h/schaden/schaden!'` – dann die JPGs mit Read öffnen.
2. Ihre Daten lesen: `triangle/js/data/handbuch-agency.js`, `handbuch-wuerfeln.js`, `handbuch-einsaetze.js`, `handbuch-schaden.js`.
3. Bausteine: `triangle/js/lesen.js` (Funktion `taB`), Gestaltung dazu am Ende von `triangle/style.css`.
4. Abschnittsliste mit Schlüsseln und Buchseiten: `triangle/js/data/nav.js`. Begriffsliste: `plan/TRIANGLE_PLAN.md`, Abschnitt „Begriffe (freigegeben)“.

## Quellen
- Rohtext: `/home/claude/ta/txt/core.txt`, Seiten durch `\f` getrennt. **PDF-Seite = Buchseite + 3.** Der Rohtext ist bei mehrspaltigen Seiten durcheinander – immer zusätzlich die Seite als Bild ansehen.
- Seite als Bild: `pdftoppm -r 80 -f <pdfseite> -l <pdfseite> -jpeg "/mnt/user-data/uploads/Triangle_Agency___Regeln___HTG_Core_Rules__EN_.pdf" /tmp/s` und mit Read öffnen. Für Kleingedrucktes `-r 130` und mit `-x -y -W -H` einen Ausschnitt nehmen.

## So legst du einen Abschnitt an
`TA_TEXT["h/<unterpunkt>/<abschnitt>"] = [ …Blöcke… ];` – Schlüssel genau wie in `nav.js`. Die Überschrift des Abschnitts (h1) und die Seitenangabe setzt das Tool selbst; **nicht** wiederholen. Ein Block ist entweder eine Zeichenkette (= Absatz) oder ein Objekt mit `t`.

### Auszeichnung im Text
| Schreibweise | Wirkung |
|---|---|
| `**fett**`, `*kursiv*` | wie im Buch gesetzt (fett = Fachbegriff bei Einführung, betonte Satzanfänge) |
| `{3}` | die rote Drei. **Jede** Ziffer 3, die im Buch rot ist (Würfel-Dreien, „3 Belobigungen“, „Raum 309“ → `{3}09`), so schreiben |
| `<Arbeit/Spiel>` | Klammerpaar, im Buch `<job/game>`. Spitze Klammern und Schrägstrich genau so tippen |
| `[[A1]]` | Playwall-Verweis („GEHE ZU: A1“) |
| `{S.34}` | Seitenverweis im Text („siehe S. 34“) |

„Agency“, „Triangle Agency“, „AgencyOS“ werden von selbst rot, „Anomalie(n)“, „anomal…“ blau. Nichts dafür tun.

### Bausteine
| `t` | Felder | Wofür (Vorbild im Buch) |
|---|---|---|
| `h` | `x`, optional `z` (Zeichen davor) | Zwischenüberschrift auf der Seite, rot |
| `h3` | `x` | kleine dunkle Überschrift (Spaltentitel) |
| `lead` | `x` | fetter Einleitungssatz |
| `klein` | `x` | Fußnote, Bildunterschrift |
| `sp` | `x:[[Blöcke],[Blöcke]]`, optional `eng` | 2 oder 3 Spalten nebeneinander – immer wenn das Buch Spalten hat |
| `bild` | `src` (Name aus `triangle/img/regeln/full/`, ohne Endung), `pos`: `rechts`/`links`/`mitte`/`breit`, `w` (px) | Illustration; freigestellte Figuren schweben neben dem Text |
| `ende` | – | beendet das Umfließen eines Bilds |
| `liste` | `x:[…]` | Aufzählung mit roten Dreiecken |
| `num` | `x:[{h?,x}]` oder Zeichenketten | nummerierte Liste mit roten Kreisen |
| `gebot` | `x:[{h,s?,x}]` | große nummerierte Leitsätze (S. 18: PRESERVE REALITY …) |
| `pikto` | `x:[{z oder n, h, x oder b}]`, optional `pfeil:1` | Piktogramm-Zeilen; mit `pfeil` als Ablauf mit roten Pfeilen (S. 20) |
| `skala` | `x:[[Marke,Text]]`, optional `breit:1` | Schlüssel/Stufen in dunklen Rahmen (S. 46) |
| `tab` | `kopf?:[…]`, `x:[[…]]` | Tabelle |
| `kasten` | `h?`, `z?`, `b:[Blöcke]`, optional `dunkel:1` | Kasten mit rotem Rand; `dunkel` = dunkler Rahmen mit grauem Kopf (S. 22 „Optionale Ziele“) |
| `warn` | `h`, `b` | roter Warnkasten mit Dreieck (S. 11) |
| `fenster` | `art`: `fehler`/`gesperrt`/leer, `titel?`, `z?`, `gross?`, `h?`, `b`, `w?` | Fenster des AgencyOS: Fehlermeldungen, „Zugriff verweigert“ |
| `schwarz` | `x`, optional `blau:1` | geschwärzter Text, Klick deckt auf – nur wo das Buch schwärzt; `blau` für die blauen Übermalungen der Anomalie (S. 122) |
| `stempel` | `x` | schräger roter Stempel („Danke!“) |
| `wurf` | `x:[{img,ok,x}]` | Würfelbild mit Haken oder Kreuz |
| `dialog` | `x:[["GM","…"],["AGENT 1","…"]]` | Mitschrift eines Spielbeispiels |
| `preis` | `x:[{h,p,z?,x oder b}]` (`z` = Piktogramm; Preisstufen als `tab` am Ende von `b`) | Karten mit Preis in Belobigungen (Anforderungen S. 128–131) |
| `leiste` | `h?`, `x:[…Felder]`, `c?` | Leiste aus Kästchen (Laufbahn, Ansehen) |
| `wf` | `id` (eindeutig), `h`, `s?`, `x:[{f,a:1/0,e?}]` | „Teste dein Wissen“: Klick zeigt Wahr/Falsch und die Auflösung |
| `html` | `x` | Ausweg für Einmaliges (Schaubild). Sparsam; Klassen dafür in deine eigene CSS-Datei (siehe unten) |

Fehlt dir ein Baustein für etwas, das mehrfach vorkommt: nimm `html` und beschreibe im Abschlussbericht, was du gebraucht hättest.

## Regeln für den Text
- **Vollständig und wörtlich übersetzen.** Nichts kürzen, nichts zusammenfassen, nichts hinzuerfinden, keine eigenen Erklärungen. Jeder Satz der Buchseite kommt vor, auch Kleingedrucktes, Fußnoten, Bildbeschriftungen, Texte in Schaubildern und Sprechblasen.
- Ton: korrektes, leicht steifes Unternehmensdeutsch mit trockenem Witz. Anrede „du“. Wortspiele sinngemäß retten, nicht erklären.
- Begriffe genau nach der freigegebenen Liste (Belobigung, Verweis, Qualitätssicherung, Lose Enden, Außendienst-Agent, Außenteam, General Manager/GM, Einsatz, Morgenbesprechung, Ermittlung, Begegnung, Triszendenz, Schaden …). Englisch bleiben nur Eigennamen: Triangle Agency, Agency, AgencyOS, Ternion City, Vault, Playwall, Ripple, Ripple Gun, Hollow, die Namen der 27 ARC-Einträge.
- Typografie: „deutsche Anführungszeichen“, Gedankenstrich – mit Leerzeichen, Auslassung …, „S.“ nie „Seite“.
- Solo-Regeln weglassen (falls welche vorkommen).
- Seitenüberschriften aus dem Buch, die in `nav.js` schon als Abschnitt stehen, nicht doppelt setzen. Weitere Überschriften der Seite als `h`.

## Regeln für die Gestaltung
- Aufbau der Buchseite nachbilden: Spalten → `sp`, Kästen → `kasten`/`warn`/`fenster`, nummerierte Dinge → `num`/`gebot`, Symbolzeilen → `pikto`.
- Nie eine lange Einzelspalte, nie leere Spalten. Kurze Seiten dürfen kurz sein.
- **Bilder:** Nimm, was im Buch auf dieser Seite steht. Vorhandene Dateien: `plan/triangle/bilder-inventar.tsv` (Spalte `buchseite`). Nur Bilder verwenden, die dort zur Seite gehören; keine fremden Bilder zur Zierde.
- **Zeichen/Piktogramme**, die fehlen, schneidest du aus dem PDF: eigene Liste `plan/triangle/skripte/zeichen_<dein-teil>.py` nach dem Muster von `zeichen_liste.py` (Name, `'co'`, PDF-Seite, Box in Punkt, Ursprung oben links), dann
  `python3 -I plan/triangle/skripte/extract_zeichen.py /mnt/user-data/uploads triangle/img/zeichen plan/triangle/skripte/zeichen_<dein-teil>.py`.
  Namen deutsch und sprechend (`pikto-…`, `symbol-…`). Box finden: Seitenausschnitt mit `-r 150` rendern, Lage ablesen, schneiden, **Ergebnis mit Read ansehen** und nachbessern, bis nichts abgeschnitten ist und kein fremder Text mit drauf ist. Zeichen mit eingebranntem englischem Text nicht schneiden, sondern nachbauen (`html`) oder weglassen und melden.
- Schaubilder mit englischer Beschriftung nicht als Bild einsetzen. Einfache als `pikto`/`tab`/`num` nachbilden; aufwendige (Ablaufpläne über die ganze Seite) als `html` mit schlichtem Nachbau – oder, wenn das nicht sauber geht, im Bericht melden und vorerst als gegliederten Text mit den vorhandenen Bausteinen setzen.

## Deine Dateien
Du änderst **nur**: die dir zugeteilten Datendateien unter `triangle/js/data/`, deine Zeichenliste `plan/triangle/skripte/zeichen_<teil>.py`, neue PNGs unter `triangle/img/zeichen/`, und – nur falls für `html`-Blöcke nötig – `triangle/handbuch-<teil>.css` (wird später eingebunden; Klassennamen mit Vorsatz `hb-`).
**Nicht anfassen:** `index.html`, `style.css`, `js/app.js`, `js/lesen.js`, `nav.js`, `sw.js`, `toolmenu.js`, andere Datendateien. **Kein** `git add/commit/push`.
In Dateien, die schon Beispielabschnitte enthalten, hängst du deine Abschnitte an und lässt die vorhandenen unverändert.

## Prüfen (Pflicht, je Abschnitt)
1. `node -e "var TA_TEXT={},TA_CHAOSGRAF='';eval(require('fs').readFileSync('triangle/js/data/<datei>.js','utf8'));console.log(Object.keys(TA_TEXT))"` – Datei muss fehlerfrei laden.
2. Rendern: `python3 -I plan/triangle/skripte/shot.py /tmp/ta-<teil> 'h/<unterpunkt>/<abschnitt>!'` – letzte Zeile muss `ok` sein.
3. Screenshot mit Read ansehen und mit der Buchseite vergleichen: Fehlt Text? Lücken, Überlappungen, abgeschnittene oder riesige Bilder, englische Reste? Beheben und neu rendern.

## Abschlussbericht
Kurz: welche Abschnitte fertig sind; welche neuen Zeichen du geschnitten hast; was offen blieb (fehlende Bausteine, nicht nachgebaute Schaubilder, Zweifelsfälle der Übersetzung mit Buchseite).
