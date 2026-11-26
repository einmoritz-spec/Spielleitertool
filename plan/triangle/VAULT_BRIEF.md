# The Vault – Auftrag für die Übersetzung eines Einsatzes

Du übersetzt **einen** Einsatz aus „The Vault – Missions for Triangle Agency“ (EN) vollständig ins Deutsche und legst ihn als Datendatei für das Spielleitertool ab. Das Tool baut daraus den Leitstand (Reiter Profil · Vor der Ermittlung · Ermittlung · Begegnung · Nachspiel, rechts Chaos-Effekte und Optionale Ziele).

## Quellen
- Text je Buchseite: `/home/claude/vtext/buch/SNNN.txt` (NNN = Buchseite, dreistellig, z. B. `S012.txt`). Die Textebene ist meist in Lesereihenfolge, aber zweispaltige Stellen, Hinweislisten und Kästen können durcheinander stehen.
- Bild je Buchseite: `/home/claude/vtext/buch/SNNN.jpg`. **Schau dir jede Seite als Bild an** (Read-Werkzeug), bevor du sie übersetzt: Nur das Bild zeigt, wo eine Hinweisliste endet, welche Einträge Aufzählungspunkte sind, welches Hinweis-Symbol dasteht und welche Chaos-Effekte mit ▲ markiert sind.
- Inhaltswarnungen und Autor stehen im Inhaltsverzeichnis `S005.txt`/`S006.txt`.

## Ausgabe
Genau eine Datei: `/home/claude/spielleitertool/triangle/js/data/vault-NN-<id>.js` (Name steht in deinem Auftrag). Fasse keine andere Datei an, kein git.

```js
/* The Vault – <Titel> (Buch S. a–b). Übersetzung aus dem Englischen. */
window.TA_VAULT = window.TA_VAULT || {};
TA_VAULT["<id>"] = {
 cw: "Körperhorror, Gedankenkontrolle, Nadeln, Schönheitsoperationen",   // Content Warnings
 chaosP: 12,                                   // Buchseite der Chaos-Effekte
 chaos: [                                      // Tabelle CHAOS EFFECTS, Reihenfolge wie im Buch
  {k:2, n:"Auffrischen", en:"Refresh", neu:1, x:"Ein gewöhnliches Ziel sieht …"},   // neu:1 = im Buch mit ▲ („in diesem Einsatz eingeführt“)
  {k:2, n:"Verderben", en:"Corrupt", x:"…"}
 ],
 ziele: [                                      // Optional Objectives
  {art:"bel", n:1, x:"wenn du einen Blumenkranz trägst (einmal pro Agent)"},     // +n Belobigung(en)
  {art:"ver", n:1, x:"jedes Mal, wenn du in Erinnerungen schwelgst"}             // +n Verweis(e)
 ],
 sonder: [ /* Blöcke – nur falls der Einsatz eine „Special Rule“ o. Ä. als Kasten neben/bei den Chaos-Effekten hat; sonst weglassen */ ],
 reiter: {
  profil: [ {t:"Überblick", p:9, b:[ /* Blöcke */ ]} ],
  vor:    [ {t:"Morgenbesprechung", p:10, b:[…]}, {t:"Einsatzbesprechung", p:10, b:[…]} ],
  erm:    [ {t:"Auf der Avenue", p:12, b:[…]}, {t:"Vor FOUNT", p:13, b:[…]}, … ],
  beg:    [ … ],
  nach:   [ {t:"Ausgänge", p:22, b:[…]}, {t:"Vault-Anforderung", p:23, b:[…]}, {t:"Anomalie-Fähigkeit", p:23, b:[…]} ]
 }
};
```

- `reiter.*` ist eine Liste von **Abschnitten** = Einträge der Seitenleiste. `t` = kurzer Titel (wie die Überschrift im Buch, übersetzt), `p` = Buchseite, auf der der Abschnitt beginnt, `b` = Inhalt als Blöcke.
- Gliederung: ein Abschnitt pro Ort/Szene mit eigener großer Überschrift im Buch (z. B. „On the Avenue“, „Outside FOUNT“, „Inside FOUNT“, „Flowing Deeper“ …). Unterüberschriften darin werden `{t:"h"}`-Blöcke – sie erscheinen in der Seitenleiste klein und grau unter dem Abschnitt. Kurze Teile (ein Absatz) nicht als eigenen Abschnitt, sondern als `h` im vorigen.
- Der Einleitungsabsatz direkt unter einer Reiter-Überschrift (z. B. INVESTIGATION: „Mercantile Avenue is packed …“) kommt an den Anfang des ersten Abschnitts dieses Reiters.
- Profil: Der erste Absatz (Zusammenfassung) wird `{t:"profil", …}` (siehe unten); Geschichte, Erscheinung, Aktuelle Lage als `h` + Absätze dahinter.
- Vor der Ermittlung: Morgenbesprechung, Einsatzbesprechung; „Optional Objectives“ gehören **nicht** hierhin, sondern nach `ziele`.
- Nachspiel: Ausgänge und Lose Enden; Vault-Anforderung und Anomalie-Fähigkeit als eigene Abschnitte.
- Weicht ein Einsatz vom Gerüst ab (eigene Abschnittsnamen wie bei ZBARRO, Sonderteile, Tabellen, Figurenwerte, Leisten, Karten), bilde es mit den Blöcken möglichst genau nach und notiere Besonderheiten am Dateiende in einem Kommentar `/* GESTALTUNG: … */` (z. B. „S. 48: Hofkarte als Bild“, „S. 54: vier Sprite-Figuren mit Bedrohung/Stabilität“). Dort auch, falls die Buchreiter anders heißen: `reiterNamen:{profil:"Anomalie-Rezept", …}` als zusätzliches Feld im Objekt.

## Blöcke
Ein Block ist ein String (= Absatz) oder ein Objekt mit `t`:

| Block | Wofür |
|---|---|
| `"Text …"` | normaler Absatz |
| `{t:"h", x:"Maya und die Pfütze"}` | Unterüberschrift (erscheint in der Seitenleiste) |
| `{t:"h3", x:"…"}` | kleine Überschrift (nicht in der Seitenleiste) |
| `{t:"profil", lead:"…", fokus:"…", domaene:"…", impuls:"…"}` | Kopf des Anomalie-Profils: Zusammenfassung + Fokus/Domäne/Impuls als drei Karten. Den Impuls-Text hierhin, nicht noch einmal als Absatz. |
| `{t:"morgen", x:["…","…"]}` | Szenenvorschläge der Morgenbesprechung (die Punkte mit X im Buch) |
| `{t:"vorlesen", b:[Blöcke]}` | Einsatzbesprechung (Text zum Vorlesen an die Spieler), ohne Beschriftung |
| `{t:"hinweis", art:"gew", h:"Das erfahren Agenten, wenn sie …:", x:["…","…"]}` | „Agents can learn the following by …“ mit den Punkten darunter. `art` nach dem Symbol im Seitenbild: **violette Figur mit Fragezeichen = "gew"**, **orange Figur mit Wellen = "anom"** (nur mit Anomalie-Fähigkeit/Frage an die Agency). Jeder Punkt der Liste ein Eintrag. |
| `{t:"sp", x:[[Blöcke],[Blöcke]]}` | zwei Spalten nebeneinander, wenn das Buch zwei Orte/Figuren als Spalten gegenüberstellt (z. B. „Maya und die Pfütze“ / „Tryptik Café“). Normaler zweispaltiger Fließtext ist **kein** `sp`. |
| `{t:"liste", x:["…"]}` | Aufzählung |
| `{t:"w4", h:"Aquifer probieren", b:["Einleitung …"], x:["1 …","2 …","3 …","4 …"]}` | W4-Tabelle (vier Ergebnisse); andere Würfeltabellen als `tab` |
| `{t:"tab", kopf:["…","…"], x:[["…","…"],…]}` | Tabelle |
| `{t:"kasten", h:"…", b:[Blöcke]}` | Kasten/Seitenleiste im Buch (Infokasten, Figurenkasten, Notiz) |
| `{t:"karten", x:[{h:"Name", s:"sie/ihr · Ort", b:[Blöcke]}, …]}` | mehrere gleichartige Kästen nebeneinander (Opfer, Verdächtige, Figuren mit Kasten) |
| `{t:"werte", h:"Influencer", s:"täuschende/verlockende Kleine Anomalie", x:[["Bedrohung",1],["Stabilität",4]], b:[Blöcke]}` | Gegner/Kleine Anomalie mit Werten, wo das Buch sie als eigenen Kasten zeigt |
| `{t:"leiste", h:"Feast", x:["1","2",…,"9"]}` | Leiste zum Ankreuzen, wenn das Buch eine zeigt |
| `{t:"ausgang", x:[{h:"Anomalie gefangen oder neutralisiert", b:[…]}, {h:"Anomalie entkommen", b:[…]}]}` | die Ausgänge im Nachspiel nebeneinander |
| `{t:"anforderung", h:"Einladung zum Klassentreffen", en:"Reunion RSVP", preis:3, b:[Blöcke]}` | Vault-Anforderung, `preis` = Zahl im Buch (Belobigungen) |
| `{t:"faehig", h:"Erntezeit", en:"Harvest Time", x:"Grundtext bis vor die Ergebnisse", erg:[["ok","Bei Erfolg …"],["plus","Für jede weitere {3} … wähle:\n– Effekt 1\n– Effekt 2"],["nein","Bei Fehlschlag …"]], b:[Blöcke danach]}` | Anomalie-Fähigkeit (wie im ARK-Bereich). Auswahlpunkte mit `\n– ` trennen. Zusätze wie „Bei sechs 3en oder mehr …“ als eigener `erg`-Eintrag `["plus","…"]` an der passenden Stelle. |
| `{t:"bild", seite:19, x:"Werbeplakat Return to Youth"}` | Platzhalter, wo im Buch ein Bild/Handout/Karte steht (kurze Beschreibung). Das Bild setzt später die Gestaltung ein. Für Handouts mit Text (Briefe, Chats, Forenbeiträge, Zeitungsartikel, Schilder) zusätzlich den übersetzten Text als `{t:"handout", art:"brief|chat|forum|zeitung|schild|notiz|abschrift", h:"Titel", x:[Blöcke oder für Chat/Forum: {von:"Name", x:"Text"}]}` – Handouts werden im Tool auf Deutsch nachgebaut. |

Die **Eröffnungsseite** jedes Einsatzes (die erste Seite mit dem Titelschriftzug, vor ANOMALY PROFILE: Forum, Zeitungsartikel, Chat, Broschüre, Abschrift …; der Text steht meist nur im Bild – lies ihn aus dem hochaufgelösten Bild `SNNN-hd.jpg`, bei Bedarf in Ausschnitten) gehört als erster Abschnitt in `profil` mit `t:"Fundstück"` und einem `handout`-Block (vollständig übersetzt, Aufbau wie im Bild). Danach kommt der Abschnitt „Überblick“.

## Text-Auszeichnung
`**fett**` (wie im Buch fett), `*kursiv*`, `{3}` für eine 3 als Würfelergebnis (im Buch rot), `[[A1]]` für Playwall-Codes, `{S.34}` für Seitenverweise innerhalb des Vault. Keine HTML-Tags. Anführungszeichen deutsch „…“, Gedankenstrich –, Auslassung … .

## Übersetzungsregeln
- **Vollständig und wörtlich nah**, nichts weglassen, nichts zusammenfassen, nichts erfinden, keine eigenen Tipps. Jeder Absatz, jeder Listenpunkt, jede Tabellenzeile des Buchs kommt vor.
- Ton: trocken, witzig, Firmensprache wie im Original. Wortspiele sinngemäß nachbauen.
- Anrede der Spieler/GM wie im Buch (du/ihr).
- **Bleiben englisch:** Triangle Agency, Agency, AgencyOS, Ternion City, The Vault, Vault, Playwall, Ripple, Ripple Gun, Hollow, die 27 ARC-Namen (Whisper, Catalogue, Drain, Timepiece, Growth, Gun, Dream, Manifold, Absence, Caretaker … PR, R&D, Barista, CEO, Intern, Gravedigger, Reception, Hotline, Clown), Eigennamen von Personen, Firmen, Marken, Orten, Straßen, Produkten (FOUNT, Aquifer, Tryptik Café, Mercantile Avenue), der Einsatztitel. Erfundene Produktnamen/Titel von Spielen/Filmen bleiben englisch.
- Pronomen-Angaben: (she/her) → (sie/ihr), (he/him) → (er/ihm), (they/them) → (dey/dem), Mischformen sinngemäß (sie/dey).
- **Begriffe (verbindlich):**
  Field Agent – Außendienst-Agent · Field Team – Außenteam · General Manager/GM – GM · Anomaly – Anomalie · Minor Anomaly – Kleine Anomalie · Mundane (target) – gewöhnlich(es Ziel) · Resonant – Resonant · Domain – Domäne · Focus – Fokus · Impulse – Impuls · Appearance – Erscheinung · History – Geschichte · Current Situation – Aktuelle Lage · Anomaly Profile – Anomalie-Profil · Pre-Investigation – Vor der Ermittlung · Morning Meetings – Morgenbesprechung · Mission Briefing – Einsatzbesprechung · Optional Objectives – Optionale Ziele · Investigation – Ermittlung · Encounter – Begegnung · Aftermath – Nachspiel · Loose Ends – Lose Enden · Chaos, Chaos Effects – Chaos, Chaos-Effekte · Captured/Neutralized/Escaped – gefangen/neutralisiert/entkommen · Commendation – Belobigung · Demerit – Verweis · Requisition – Anforderung · Vault Requisition – Vault-Anforderung · Anomaly Ability – Anomalie-Fähigkeit · Threat – Bedrohung · Stability – Stabilität · Harm – Schaden · Burnout – Burnout · Triscendence – Triszendenz · Quality Assurance/QA – Qualitätssicherung/QS · Ask the Agency – die Agency fragen · Reality Adjustment Request – Antrag auf Realitätsanpassung · Relationship – Beziehung · Connection – Verbindung · Normal Briefcase – Normaler Aktenkoffer · Employee (gefangene Anomalie als Mitarbeiter) – Angestellte(r) · Mission Report – Einsatzbericht · MVP – MVP · Probation – Probezeit · Special Rule – Sonderregel · Playwalled Document – Playwall-Dokument
  Qualitäten: Attentiveness Aufmerksamkeit, Duplicity Doppelzüngigkeit, Dynamism Dynamik, Empathy Empathie, Initiative Initiative, Persistence Beharrlichkeit, Presence Präsenz, Professionalism Professionalität, Subtlety Subtilität.
  Arten Kleiner Anomalien: Imprisoning einsperrend, Alluring verlockend, Disruptive störend, Impersonating täuschend, Destructive zerstörerisch, Harmful schädlich (andere sinngemäß als Adjektiv).
  Chaos-Effekte des Grundbuchs: Corrupt Verderben, Manifest Manifestieren, Attract Anziehen, Expand Ausdehnen, Double Verdoppeln, Displace Versetzen, Kill Töten, Echo Echo, Distort Verzerren. Neue Effekte eines Einsatzes übersetzt du selbst passend (immer `en` mit dem Original mitgeben). Im Fließtext heißen die Effekte genauso.
  Würfel: roll Persistence – würfle auf Beharrlichkeit · success/failure – Erfolg/Fehlschlag · each additional 3 – jede weitere {3} · d4 – W4.
- Seitenzahlen im Buch (Fußzeilen), Kapitelreiter am Rand und die Titelzeile „SPRINGS ETERNAL“ am Seitenrand **nicht** übernehmen.

## Zum Schluss
Prüfe mit `node -e 'global.window=global;require("<datei>");console.log(Object.keys(TA_VAULT))'`, dass die Datei fehlerfrei lädt. Gehe die Buchseiten noch einmal einzeln durch und vergleiche: fehlt ein Absatz, ein Listenpunkt, ein Chaos-Effekt, ein Ziel? Antworte am Ende knapp: Dateiname, Zahl der Abschnitte je Reiter, Besonderheiten für die Gestaltung (die `GESTALTUNG`-Notiz), unsichere Übersetzungen.
