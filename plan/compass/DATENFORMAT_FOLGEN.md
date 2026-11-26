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
