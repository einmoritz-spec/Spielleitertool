# Discworld – Abenteuer in Ankh-Morpork (Grundregelwerk, Kickstarter-Edition, EN)

Quelle: `quellen/discworld/Discworld-Core-Rulebook-Kickstarter-Edition.pdf` (222 PDF-Seiten, **PDF-Seite = Buchseite + 2**; nicht im Repo, zu groß).
Ordner: `discworld/` · Logo `assets/logos/discworld.webp` · Info `shared/info/discworld.js` · Galerie-Schlüssel `discworld`.

## Design („Ankh-Morpork-Akte“)
- Pergament (`img/deko/papier.webp`, fest), Ochsenblut `#7a2417` für Überschriften, Kopfzeile dunkles Ochsenblut mit goldenem Original-Logo.
- Schriften: IM Fell English SC (Überschriften wie die Caslon-Kapitälchen des Buchs), EB Garamond (Lesetext), Cedarville Cursive (Handschrift wie im Buch: Fußnoten, Steckbriefe, Bögen).
- Pratchett-Fußnoten als handschriftliche Papierstreifen (`img/deko/streifen.webp`).
- NSC als Steckbrief auf dem Original-Kartenpapier (`img/deko/karte.webp`) mit Voller Name / Spezies / Nische / Merkmale / Eigenart in Handschrift, Porträt rechts, Story-Aufhänger.
- Teil „Ankh-Morpork“ und Abenteuer mit lila Akzent (`--lila`) wie im Buch.
- Startseite: A’Tuin-Titelbild mit Logo, darunter Luftbild der Stadt mit vier „Akten“ (Bereiche) und drei Abenteuer-Plakaten.

## Bereiche (Reiter) und Unterleiste
| Reiter | Unterleiste | Buch | Daten |
|---|---|---|---|
| Spielen | Einführung · Das Spiel | S. 2–23 | `js/data/spielen.js` ✅ |
| Spielleitung | Spielleiten · Proben und Folgen · Magie und Mechanik · Unterwegs und der Tod | S. 24–47 | `leitung-a.js`, `leitung-b.js` ✅ |
| Charaktere | Die Gruppe · Charaktere erschaffen · Organisationen · Eröffnung und Rückkehr · Vorgefertigte Charaktere | S. 48–96 | `charaktere-a…d.js` ✅ |
| Ankh-Morpork | Fremde Gesichter · Unsichtbare Universität · Pseudopolis-Platz · Palast des Patriziers · Die Schatten · Sator-Platz · Geflickte Trommel · Die Gilden | S. 98–157 | `stadt-*.js` (Etappe 2) |

Abenteuer (Startseite + Burger, eigene Ansicht `#a/<id>`), Etappe 3:
- Nicht ganz so großer Diebstahl (S. 160–175), Kleine Frauen (S. 176–195), Grundlagen der Unsichtbaren Akademie (S. 196–213).
- Aufbau wie Vaesen/TftL-Leitstand: Szenenliste links, rechts flach Vorlesetext, Hinweise, Komplikationen/Folgen-Tabellen, NSC-Steckbriefe der Szene.

## Datenformat
`DW.reg(bereich, [{id, g, t, p, img?, sub?, solo?, b:[Blöcke]}])`, NSC: `DW.nsc([{id, name, pron, voll, spezies, nische, merkmale[], eigenart, img, p, b[], aufhaenger, extra[]}])`.
Blöcke: Text, `h`, `h4`, `ul`, `ol`, `q` (Zitat), `fn` (Fußnote), `box`, `bsp`, `dlg`, `vl`, `brief`, `tbl`, `wt` (Würfeltabelle, klickbar), `erg`, `kosten`, `wuerfel`, `grid`, `karten`, `nsc`, `nscs`, `gruppe`, `scs`.
`{TOD}…` setzt Sprechweise des Todes in Kapitälchen.

## Bilder
99 Illustrationen unter `discworld/img/full|thumb/` (Namen nach Bereich: `einf-`, `spiel-`, `leit-`, `char-`, `org-`, `uu-`, `py-`, `pal-`, `sch-`, `sat-`, `ngd-`, `kf-`, `gua-`), Verzeichnis `js/data/bilder.js`. Deko unter `img/deko/`.

## Offen
- Etappe 2: Ankh-Morpork komplett (NSC-Erschaffung mit Namenstabellen, alle Orte, ~40 Steckbriefe, Gilden).
- Etappe 3: drei Abenteuer.
- Etappe 4: Gruppen- und Charakterbogen als ausfüllbares PDF (Buch S. 218), Notizen (Stift) in Abenteuern.
