# Auftrag: Playwall-Dokumente ins Deutsche übersetzen (Triangle Agency)

Du übersetzt einen Teil der „Playwalled Documents“ des Triangle-Agency-Regelbuchs ins Deutsche und legst sie als Datendateien im Spielleitertool ab. Zwei Beispieldateien stehen schon: `/home/claude/spielleitertool/triangle/js/data/playwall-a.js` und `playwall-b.js` – **lies beide zuerst**, Ton, Aufbau und Auszeichnung müssen genauso sein.

## Quellen
- PDF: `/mnt/user-data/uploads/Triangle_Agency___Regeln___HTG_Core_Rules__EN_.pdf`. **PDF-Seite = Buchseite + 3.**
- Rohtext je Buchseite: `/home/claude/pw/s<BUCHSEITE>.txt` (z. B. `s212.txt`). **Er ist bei mehrspaltigen Seiten durcheinander und ordnet Text oft dem falschen Dokument zu.** Sieh dir deshalb jede Seite zusätzlich als Bild an: `pdftoppm -r 62 -f <PDFSEITE> -l <PDFSEITE> -jpeg "<PDF>" /tmp/<dein-name>-<seite>` und öffne das JPG mit Read. Für Kleingedrucktes oder Seiten, die nur aus Bild bestehen (Text nicht im Rohtext), `-r 95`–`110`. Seiten, deren Text nur als Bild vorliegt, liest du vom Bild ab.
- Codes und Seiten: `/home/claude/spielleitertool/triangle/js/data/playwall-index.js` (`TA_PW`: Code → Buchseite). Jedes Dokument hat einen Code (Buchstabe + Zahl), den Titel am Seitenrand/oben. Bild entscheidet über Zuordnung und Reihenfolge der Dokumente.
- Begriffsliste: `/home/claude/spielleitertool/plan/TRIANGLE_PLAN.md`, Abschnitt „Begriffe (freigegeben)“ plus die Zeile „Selbst gewählte Begriffe“ oben. Fähigkeitsnamen der ARK so übernehmen, wie sie in `/home/claude/spielleitertool/triangle/js/data/ark-anomalie-text.js`, `ark-realitaet-text.js`, `ark-kompetenz-text.js` stehen (dort `grep` nach dem deutschen Namen/Text, wenn ein Dokument eine ARK-Fähigkeit nennt).

## Festgelegte Wörter (nicht abweichen)
Agent, Agency, AgencyOS, Ripple, Ripple Gun, Hollow, Vault, Playwall, Ternion City bleiben. Namen der 27 ARC-Einträge (Whisper, Absence, Gun, Star, Caretaker, Intern, Clown …) bleiben englisch. Außerdem: Belobigung/Verweis, Ansehen (Standing), QS/Qualitätssicherung (QA), Lose Enden, Schaden, Lebensversicherung, Triszendenz, Chaos, Zweigstelle (Branch), Anforderung (Requisition), Vault-Anfrage (Vault Request), Kompetenz, Beziehung/Verbindung, Burnout, Realitäts-Auslöser, Einsatz/Einsatzbericht, GM, Außenteam. Fähigkeiten: Ausleihen (Borrow), Stehlen (Steal), Eliminieren (Eliminate), Universalempfänger (Universal Recipient), Verfehlt! (Miss Me?), Erzwungene Perspektive (Forced Perspective), Mitfühlender Schmerz (Sympathetic Pain), Vereidigen (Deputize), Zeitbake (Time Beacon), Ferse (Heel), Alleskönner (All-in-One). Attribute: Aufmerksamkeit, Doppelzüngigkeit, Dynamik, Empathie, Initiative, Beharrlichkeit, Präsenz, Professionalität, Subtilität. Rangtitel: Trainee, Sachbearbeiter (Associate), Senior-Sachbearbeiter, Stellvertretender Direktor, Direktor, Regionaldirektor, Vizepräsident, Senior-VP, Exekutiv-VP, Vorsitzender. Titel der Dokumente werden sinngemäß ins Deutsche übertragen (Wortspiele retten); Eigennamen bleiben. Neue Fachbegriffe wählst du selbst, bleibst aber innerhalb der Datei einheitlich und listest sie im Bericht.

## Regeln für den Text
- **Vollständig und wörtlich übersetzen.** Nichts kürzen, nichts hinzuerfinden, keine Erklärungen. Auch Kleingedrucktes, Randbemerkungen, Bildbeschriftungen, Tabellen und Texte auf Bildern.
- Ton: korrektes, leicht steifes Unternehmensdeutsch mit trockenem Witz, Anrede „du“. Typografie: „deutsche Anführungszeichen“, Gedankenstrich –, „S.“ nie „Seite“.
- Jede rote Drei im Buch (Würfel-Dreien „additional 3“, „third 3“, Belobigungszahlen) als `{3}` schreiben („jede weitere {3}“, „{3}en“, „{3} Belobigungen“). Andere Zahlen normal.
- Playwall-Verweise („GO TO: Z1“, „Playwalled Document U2“) als `[[Z1]]`.
- Seitenverweise im Text: `{S.34}`.

## Datenformat (genau wie in playwall-a.js / playwall-b.js)
Je Dokument `TA_PWT.<Code> = {t:"Titel", s:Buchseite, b:[Blöcke]};` am Dateianfang `var TA_PWT = window.TA_PWT || (window.TA_PWT = {});`.
- Fähigkeiten: `{t:"faehig", h:"Name", x:"Einleitungssatz mit **Attribut**-Wurf", erg:[["ok","**Bei Erfolg** …"],["plus","**Für jede weitere {3}** …"],["plus","**Bei Triszendenz** …"],["nein","**Bei Fehlschlag** …"]], f:"Frage…", a:[["Antwort","CODE"],["Antwort","CODE"]]}` – `f`/`a` nur, wenn das Dokument den Frage-Antwort-Kasten („Q: … A: … → Code“) hat; der Code hinter dem Pfeil ist der Verweis.
- Sonst Blöcke wie im Handbuch: Zeichenkette = Absatz, `{t:"h3",x}`, `{t:"lead",x}`, `{t:"klein",x}`, `{t:"liste",x:[…]}`, `{t:"num",x:[…]}`, `{t:"sp",x:[[Blöcke],[Blöcke]]}` (Spalten, wenn das Buch Spalten hat), `{t:"tab",kopf:[…],x:[[…]]}`, `{t:"kasten",h,b:[…]}`, `{t:"warn",h,b}`, `{t:"stempel",x}`, `{t:"schwarz",x}` (nur wo das Buch schwärzt), `{t:"dialog",x:[["Sprecher","Text"]]}`, `{t:"html",x}` als Notlösung. `**fett**`, `*kursiv*`.
- Bilder und Zeichen **nicht** einbauen (kommt später); Bildseiten und Bildtexte trotzdem komplett übersetzen. Wo ein Dokument ein ganzseitiges Bild ist, nur den Text übersetzen und `{t:"klein", x:"[Ganzseitiges Bild]"}` voranstellen.
- Besondere Seiten (Beförderungen mit Anforderungen/Preisen → `preis`/`kasten`/`tab`; Ruhestandsoptionen, Laufbahn-Stufen, ausfüllbare Formulare) so nah am Buch aufbauen wie mit diesen Bausteinen möglich; was nicht passt, als `html`.

## Dateien
Du legst genau die dir zugeteilten Dateien `playwall-<buchstabe>.js` unter `/home/claude/spielleitertool/triangle/js/data/` an – **eine Datei je Anfangsbuchstabe des Codes**, auch wenn das Dokument auf einer Seite mit Dokumenten anderer Buchstaben steht. Alle Dokumente deiner Seiten kommen vor. **Nicht anfassen:** alles andere im Repo (kein git add/commit/push). `playwall-a.js` und `-b.js` nicht ändern (Dokument C1 liegt dort noch fälschlich in `playwall-b.js`; der Agent, der C bekommt, nimmt es heraus und schreibt es nach `playwall-c.js`).

## Prüfen (Pflicht)
1. Jede Datei lädt fehlerfrei: `node -e 'var window={};eval(require("fs").readFileSync("<datei>","utf8"));console.log(Object.keys(window.TA_PWT).join(" "))'`
2. Alle Codes deines Bereichs laut `TA_PW` sind vorhanden und stehen auf der richtigen Seite (`s`).
3. Stichprobe: Dokument gegen Seitenbild halten – fehlt Text? falsches Dokument zugeordnet? englische Reste?

## Abschlussbericht (kurz)
Welche Codes fertig; Zweifelsfälle (Zuordnung Text↔Dokument, mehrdeutige Begriffe, unleserliche Stellen) mit Code und Buchseite; neu gewählte Fachbegriffe als Liste „Englisch → Deutsch“.
