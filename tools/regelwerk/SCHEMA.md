# Regelwerk-Daten (City of Mist – Spieler:innen-Handbuch, DE)

Quelle: PDF „City of Mist – Regeln – Spieler:innen-Handbuch (DE)“. **Gedruckte Buchseite = PDF-Seite − 2.** Überall im Tool zählen die *gedruckten* Seitenzahlen (Feld `p`, Text „S. 172“).
Privates Spielleiter-Nachschlagewerk, nur für Moritz.

## Oberstes Gebot: Vollständigkeit und Wörtlichkeit
- Den deutschen Buchtext **wörtlich** übernehmen. Nichts kürzen, zusammenfassen, umformulieren, umsortieren oder „verbessern“. Jeder Satz, jede Liste, jede Tabellenzeile, jeder Kasten, jede Bildunterschrift, jedes Beispiel, jede Seitenverweisung („S. 182“), jede Fußnote und jedes † bleibt erhalten.
- Erlaubt/nötig ist nur das Entfernen von Extraktionsfehlern: Zeilenumbrüche und Silbentrennung zusammenziehen (Trennstrich nur dort behalten, wo er zum Wort gehört, z. B. „Team-Thema“), `****`-/`** **`-Reste, doppelte Zeilen, falsche Spaltenreihenfolge richten. Seitenkopf-/Fußzeilen und Wasserzeichen gehören nicht in die Daten.
- Zweifelsfälle (Spaltenreihenfolge, Tabellen, Kästen, Hervorhebungen) am Originalbild prüfen: `pdftoppm -f <PDF-Seite> -l <PDF-Seite> -r 70 -png /mnt/user-data/uploads/City_of_Mist___Regeln___Spieler-innen-Handbuch__DE_.pdf /tmp/rw/img/<name>` und das PNG mit Read ansehen. (PDF-Seite = Buchseite + 2.)
- Reine Bilder/Illustrationen ohne Text werden nicht übernommen; Bildunterschriften schon.

## Rohtext
`/tmp/rw/draft/pNNN.txt` (NNN = gedruckte Buchseite). Jede Zeile: `[Stilcode ]x<Einrückung> | Text`.
Stilcode nur bei Abweichung vom Fließtext: `C` = Champion-Überschrift (Zahl = Schriftgröße; Farbe e5007d = Magenta-Überschrift, fbf0a5 = Überschrift im gelben Kasten, 000000/ffffff = Standard), `R` = Roboto (Kasten-/Randtext), `M` = Courier (Aktionsliste/Beispieldialog), `P`+Größe/Farbe = abweichender Serifentext (z. B. P…862c39 = rot-braun Hervorhebung, P…fbf8f1 = heller Text auf dunklem Kasten). `**fett**`, `*kursiv*`. `x…` = linke Einrückung (hilft, Spalten, Aufzählungen und Kästen zu erkennen: kleine Werte = linke Spalte, ≈ 450+ = rechte Spalte). Die Reihenfolge der Zeilen ist die Lesereihenfolge des PDFs, bei Kästen aber nicht immer die Buchreihenfolge.

## Dateien
Pro Abschnitt (Auftrag nennt Abschnitts-ID und Seitenbereich) eine oder mehrere Dateien `cityofmist/js/data/regelwerk/<abschnittsid>[-2|-3…].js` (Datei möglichst < 60 KB, bei größeren Abschnitten aufteilen; jede Datei gehört zu genau einer Abschnitts-ID):

```js
rwAdd("abschnittsid", [
  { name:"Der Ruf des Mythos", p:24, pe:25, body:[ … ], aside:[ … ] },
  …
]);
```
`rwAdd` ist global vorhanden. Nur gültiges JavaScript (UTF-8, „typografische Anführungszeichen“ im Text sind ok; Strings in "…" mit \" escapen oder typografisch lassen).

## Karte (Eintrag)
Eine Karte = ein Buchabschnitt mit eigener Überschrift (die großen Buch-Überschriften; Unterüberschriften wandern als `## …` in den Body). Karten in Buchreihenfolge. Felder:
- `name` Überschrift wie im Buch, aber in normaler Groß-/Kleinschreibung („Der Ruf des Mythos“, nicht „DER RUF DES MYTHOS“; Eigennamen/Fachbegriffe wie im Buch).
- `p` gedruckte Anfangsseite (Zahl), optional `pe` Endseite, `sub` optionaler Untertitel/Kicker aus dem Buch.
- `body` Haupttext (Fließtext, Listen, Tabellen, Unterüberschriften, Beispiele) in Lesereihenfolge.
- `aside` optional: Randspalten-Kästen des Buchs (Regelkästen, Merkkästen, Beispielkästen, Zitate), wenn sie im Buch neben dem Text stehen und nicht mitten im Textfluss gelesen werden müssen. Sonst als `box` in den `body`. Kästen mit Bezug zu einer bestimmten Stelle dürfen ebenfalls im `body` an dieser Stelle stehen.
Jede Karte braucht mindestens einen nicht-leeren `body` oder `aside`.

## Blöcke (in `body`/`aside`)
Strings (Präfix entscheidet):
- `"Fließtext mit **fett** und *kursiv*"` → Absatz. Hervorhebungen des Buchs (fett/kursiv) übernehmen. Tag-Listen im Buch stehen kursiv: als `*Tag A, Tag B*` übernehmen.
- `"## Unterüberschrift"` (große Zwischenüberschrift, z. B. „ZUSÄTZLICHE STÄRKEN UND SCHWÄCHEN“ → „Zusätzliche Stärken und Schwächen“) · `"### Kleine Überschrift"`.
- `"- Aufzählungspunkt"` (aufeinanderfolgende ergeben eine Liste; Einrückungsebene: `"-- Unterpunkt"`). `"1. Nummerierter Schritt"` (aufeinanderfolgende ergeben eine nummerierte Liste; Nummer im Text lassen).
- `"> Zitat/Vorlesetext/Erzähltext"`.

Objekte (genau ein Schlüssel):
- `{box:{t:"Titel", k:"regel", p:172, b:[…Blöcke…]}}` Kasten wie im Buch. `k`: `regel` (gelber Regelkasten mit Überschrift, z. B. „DAS BLATT WENDEN“), `beispiel` („Beispiel“, Spielbeispiel-Kästen), `hinweis` (Tipps/Merksätze/„Die Auswahl der richtigen …“/Kästen mit magenta Rahmen), `frage` (Leitfragen-Kästen). `p` optional (Seitenverweis in der Kastenüberschrift, z. B. „S. 172“). `t` darf leer sein ("").
- `{tbl:{t:"optionale Tabellenüberschrift", h:["Spalte 1","Spalte 2"], r:[["…","…"],…]}}` jede Buchtabelle vollständig (Zeilenumbrüche in Zellen zusammenziehen; `**fett**` erlaubt).
- `{fq:{l:"A", q:"WOVON IST DEINE …?", tags:["Erfordert Zauberstab","Erfordert Luftfeuchtigkeit"]}}` Themenbuch-Fragen: Buchstabe, Frage (Schreibweise Normalfall: Satz), die kursiven Beispiel-Tags einzeln in `tags`. Auch für die Mysterium-/Namens-Fragenlisten, wo das Buch Buchstaben + Frage + Beispiele zeigt. Steht danach noch erklärender Fließtext, bleibt der als normaler Absatz.
- `{tg:{t:"Optionaler Titel", k:"pw", i:["Tag 1","Tag 2"]}}` Tag-Reihe, die im Buch als Aufzählung von Tags steht (Schnellstart-Tags, Beispiel-Tags). `k`: `pw` (Power-/Stärken-Tags), `wk` (Weakness-/Schwächen-Tags), `n` (neutral/sonstige Tags/Stichwörter).
- `{kv:[["Begriff","Beschreibung mit **md**"],…]}` benannte Einträge (Begriff → Erklärung), z. B. Verbesserungslisten, Glossare, „Titel: Beschreibung“-Listen.
- `{dlg:[["SL","Text"],["Jan (als Det. Bekdi)","Text"],…]}` Beispieldialoge mit Sprecher:in.

## Fachbegriffe
Der deutsche Text enthält die Fachbegriffe bereits – unverändert lassen. Keine Übersetzung, keine Vereinheitlichung.

## Prüfen
Vor dem Abschluss ausführen:
```
cd /home/claude/spielleitertool
node tools/regelwerk/flatten.js /tmp/rw/flat_<id>.json cityofmist/js/data/regelwerk/<datei>.js [weitere Dateien derselben ID]
python3 -I tools/regelwerk/coverage.py /tmp/rw/draft /tmp/rw/flat_<id>.json <id> <vonSeite> <bisSeite>
```
`flatten.js` muss „Struktur OK“ melden. `coverage.py` meldet fehlende und überzählige Wörter gegenüber dem Rohtext: fehlende Wörter ≤ 1 % und alle verbleibenden müssen erklärbar sein (Seitenkopf, Punktlinien „. . . S. 172“, Trennstriche). Fehlendes nachtragen, bis es passt. Danach stichprobenartig 3–4 Seiten am Bild gegenprüfen (Kästen, Tabellen, Reihenfolge).
