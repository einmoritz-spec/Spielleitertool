# Dragonbane – fehlende Bilder (Gemini)

Im Regelbuch hat jede Figur der Völker/Berufe und jedes Monster ein eigenes Bild. **Ohne Bild** sind nur die drei
Nichtspielerfiguren des Einstiegsabenteuers *Die Burg des Raubritters* (S. 113–119). Ihre Karten funktionieren auch
ohne Bild (Totenkopf-Band mit Namen) – die Bilder sind **optional**. Alle anderen Abenteuer-Titelbilder kommen aus den
jeweiligen PDFs (Abenteuerband, Pfad des Ruhms, Versinkender Turm, Arkand), nicht von Gemini.

Allgemein für alle drei: Bild 1 (Stil-Vorlage) **und** Bild 2 (Original-Figur, an der sich Gemini orientieren soll) anhängen.
Ausgabe: PNG, weißer Hintergrund, Figur ganz im Bild, Hochformat 3:4, keine Schrift. Danach im Repo:
`python3 -I plan/dragonbane/extract_images.py` ist nicht nötig – einfach als `dragonbane/img/abenteuer/<name>.webp` ablegen
(weiß wird im Tool per `mix-blend-mode:multiply` aufs Pergament gelegt).

---

## 1. Jaldo (Goblin-Anführer) → `abenteuer/burg-jaldo.webp`
**Anhängen:** `vorlage-stil-goblin.webp` (Stil + Volk), `vorlage-stil-figur.webp` (Stil Figur auf Weiß)

> Fantasy illustration in the exact style of the attached Dragonbane artwork by Johan Egerkrans: hand-inked lines, muted
> watercolor washes in ochre, olive and rust, soft paper texture, full figure on a plain white background, no text.
> Subject: Jaldo, a small, skinny goblin bandit chief with disproportionately long arms and a big bulbous head, sly grin,
> quick darting eyes, mismatched studded leather armor and an open-faced helmet slightly too big for him, a scimitar
> at his belt and a crude war horn on a strap. He gestures theatrically as if telling a tall tale. Same goblin anatomy,
> skin color and costume language as the attached goblin. Portrait orientation 3:4, figure centered, feet visible,
> light ground shadow only.

## 2. Grunta und das Schwein Merle → `abenteuer/burg-grunta.webp`
**Anhängen:** `vorlage-stil-ork.webp` (Stil + Volk), `vorlage-stil-figur.webp`

> Fantasy illustration in the exact style of the attached Dragonbane artwork by Johan Egerkrans: hand-inked lines, muted
> watercolor washes, soft paper texture, full figure on a plain white background, no text. Subject: Grunta, a young,
> homeless orc woman, broad-shouldered but sad and gentle, holding a small wooden club loosely, wearing a ragged tunic,
> standing in a gloomy cellar pose; beside her a small, plump, contented pig named Merle, her only friend, nuzzling
> her leg. Same orc anatomy and costume language as the attached orc. Portrait 3:4, both fully visible, feet visible.

## 3. Rothgar Wolfsbane, der kopflose Wiedergänger → `abenteuer/burg-rothgar.webp`
**Anhängen:** `vorlage-stil-wiedergaenger.webp`, `vorlage-stil-figur.webp`

> Fantasy illustration in the exact style of the attached Dragonbane wight artwork by Johan Egerkrans: hand-inked lines,
> pale desaturated green-grey watercolor washes, soft paper texture, full figure on a plain white background, no text.
> Subject: the undead robber knight Rothgar Wolfsbane — a headless armored wight in a full suit of rusted plate armor,
> a tattered cloak, a long sword in one gauntlet and a horned great helm held under the other arm (the helm is empty),
> faint ghostly mist curling from the neck. Menacing, still, upright. Portrait 3:4, feet visible.
