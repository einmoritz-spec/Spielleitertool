# Datenformat der Folgen (Drehbuch-Ansicht)

Engine: `compass/js/epi.js`, Stil: `compass/inhalt.css` (Abschnitt „Folgen als Drehbuch“). Route `#e/<id>`; Daten `compass/js/data/ep-<id>.js` mit `BC_EP["<id>"] = {…}`. Ids: `pilot`, `jr1`…`jr6`, `jrod1…` (On-Demand), `ve1`…`ve6`, `lt1`…`lt11`. Gleiche Regeln wie `DATENFORMAT.md` (komplett deutsch, vollständig, nichts erfinden, verbindliche Begriffe, Auszeichnung `**fett**` `*kursiv*` `{w:…}` `[[S. 12|buchid|12]]`).

```js
BC_EP["pilot"] = {
  id:"pilot", t:"Der Zorn des Quetzalcoatl", lab:"Pilot · Ins Auge des Sturms", c:"#1d2c4d",
  b:"bc_aj", s:214, img:"start/pilot-quetzalcoatl",
  intro:[ …Blöcke wie in DATENFORMAT.md (prose, box, cards …) – Vorspann des Buchs vor dem Skript… ],
  ctx:[ {k:"epoche", l:"Epoche", v:"1999"}, {k:"schatz", l:"Schatz", v:"…"} … ],   // v = Vorgabe aus dem Buch (bei festen Folgen) oder leer (On-Demand)
  scenes:[ {t:"Schutzhütte", short:"Hütte", ort:"Wildnis · INNEN/TAG", s:222, blocks:[ … ]} ],
  outro:[ …Blöcke (Kontext-Beschreibungen, Hinweise, „Spielen innerhalb einer Staffel“ usw.) ]
};
```
## Szenen-Blöcke (`blocks`)
- `{t:"n", p:["Erzähltext/Regieanweisung", …]}` – Absätze des Skripts.
- `{t:"d", n:"ALTER MANN", r:"leise", p:"Dialogzeile"}` – Dialog (`r` optional Regieanweisung).
- `{t:"cut"}` – Schnitt („CUT“).
- `{t:"clue", k:"Hinweis", p:"Text der Inschrift/des Hinweises"}` – Hinweiszettel.
- `{t:"box", h:"Titel", p:[…]}` – Randkasten/Spielleiter-Tipp.
- `{t:"list", items:[…]}`, `{t:"img", src:"aj/pilot-motiv", pos:"50% 40%"}`.
## Marken im Text
`{K:H|Einfache Herausforderung}` (H Herausforderung, G Gefahr, F Feinde, Hw Hinweis, X Sonstiges) – Texte der Marken **deutsch** wie im Buch ([BASIC Challenge] → `{K:H|Einfache Herausforderung}`, [2 CRITICAL Dangers] → `{K:G|2 kritische Gefahren}`, [CRITICAL Cool Challenge] → `{K:H|Kritische Herausforderung: Kaltblütigkeit}`, [+1 BASIC Danger …] → `{K:G|+1 einfache Gefahr: …}`).
Platzhalter des Buchs in Versalien (ANFÜHRER, SCHLÜSSEL, KARTE, RIVALE, WILDER ORT, RUINEN, SCHATZ, HANDLANGER …) → `{P:schluessel}`, passend zu einem `ctx`-Eintrag (z. B. `{P:schluessel}`); das Tool ersetzt sie live durch den eingetragenen Kontext. Jedes im Skript vorkommende Platzhalter-Wort braucht einen `ctx`-Eintrag.

## Ergänzungen (verbindlich)
- Pflichtfelder: `id, t, lab` (z. B. „Staffel 2 · Folge 1“), `c` (Farbe der Staffel: jr `#6e1414`, ve `#1f4a2c`, lt `#7a1b2a`, Pilot `#1d2c4d`), `b` (Buch-ID), `s` (erste Buchseite), `img` (Titelbild, Pfad unter `img/` ohne `.webp`, z. B. `jr/jr1-kopf`; nur wenn ein passendes reines Bild im Buch existiert, sonst weglassen), `scenes`.
- `intro`: alles vor der ersten Szene (Zusammenfassung/Einleitung der Folge, Vorbereitung, Besetzung mit Karten für Extras/Gegner, Orte usw.), beliebige Blocktypen. `outro`: alles nach der letzten Szene (Epilog, Anhänge, Werte, Handouts).
- Szenen mit Unter-Akten: jede Drehbuchszene des Buchs ist eine `scenes`-Szene mit `t`=Szenentitel, `ort`=INNEN/AUSSEN+Tageszeit (übersetzt: INNEN/AUSSEN, TAG/NACHT/ABEND…), optional `short` (Kurzname für die Seitenleiste).
- Textmarken `[…]` der Bücher (Challenge/Danger/Enemy/Clue) → `{K:H|…}` (Herausforderung), `{K:G|…}` (Gefahr), `{K:F|…}` (Feinde), `{K:Hw|…}` (Hinweis); Spielleiter-Randkästen → `box`.
- Bei On-Demand-Folgen: Platzhalter in Versalien → `{P:…}` mit `ctx`-Eintrag je Platzhalter (leer `v:""`). Bei Folgen mit festem Kontext (z. B. „Der Zorn des Quetzalcoatl“) `ctx` mit den Vorgaben des Buchs als `v`.
- Folgen-IDs: `pilot`, `quetzalcoatl`, `jr1`…`jr6`, `ve1`…`ve6`, `lt1`…`lt11` (LuckTales-Reihenfolge laut Inhaltsverzeichnis des Buchs).
