# Legend-in-the-Mist-Daten (DE-Übersetzung)

Quellen (EN, PDF): Core Book `/mnt/user-data/uploads/Legend_in_the_Mist___Regeln___Core_Book_v1_01__EN_.pdf` und Setting Book (Hearts of Ravensdale: The Dales) `/mnt/user-data/uploads/Legend_in_the_Mist___Abenteuer___Hearts_of_Ravensdale_I_The_Dale__EN__zweite_Fassung_.pdf`. **Gedruckte Seitenzahl = PDF-Seitenzahl** (bei beiden Büchern). Privates Spielleiter-Nachschlagewerk für Moritz (Spielleiter, Deutsch).

## Auftrag
Den englischen Buchtext **vollständig und sinngetreu ins Deutsche übersetzen** (kein Zusammenfassen, nichts auslassen: jeder Absatz, jede Liste, Tabelle, jeder Kasten, jedes Beispiel, jede Bildunterschrift). Reine Illustrationen/Comicseiten ohne Regeltext/Setting-Info weglassen. Fachbegriffe, die im Spiel als Namen/Regelwörter dienen (Tags, Themes, Might, Power Tag, Weakness Tag, Themebook, Fellowship, Narrator, Hero, Quest, Trope, Spark, Oldways, Dale, Craggen …), bleiben **auf Englisch**, wo das Tool sie schon so nutzt; beim ersten Auftreten in einer Karte darf die deutsche Erklärung dahinterstehen. Sprache: gutes, flüssiges Deutsch, „du/ihr“-Anrede wie im Buch.

## Rohtext
`pdftotext -f N -l N -layout <pdf> -` bzw. für ganze Bereiche; Zweifelsfälle (Spalten, Kästen, Tabellen) am Bild prüfen: `pdftoppm -f N -l N -r 70 -png <pdf> /tmp/lm/img/<name>` und mit Read ansehen. Wasserzeichen („Property of Son of Oak … Issued to …“) und Seitenköpfe/-fußzeilen nie übernehmen.

## Dateien
Pro Abschnitt (Auftrag nennt Abschnitts-ID und Seitenbereich) eine oder mehrere Dateien `js/data/lm/<abschnittsid>[-2|-3…].js` (jede Datei < 60 KB, sonst teilen; jede Datei gehört zu genau einer ID):

```js
lmAdd("abschnittsid", [
  { name:"Titel", p:24, pe:25, body:[ … ], aside:[ … ] },
  …
]);
```
`lmAdd` ist im Tool global vorhanden. Nur gültiges JavaScript (UTF-8; Strings mit \" escapen oder typografische „…“ nutzen). Prüfen mit `node --check <datei>` und `node tools/lm/check.js <abschnittsid>` (meldet Struktur-Fehler und Seitenabdeckung).

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

