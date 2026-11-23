# The Spire – fehlende Klassenbilder (Gemini)

Ohne Klassenbild sind nur die vier Magister's-Guide-Klassen **Blood-Witch, Inksmith, Mortician Executioner, Shadow Agent**
(Gutter Cleric hat Alabast Defoy aus dem Quickstart). Alle anderen 10 Klassen haben ein ganzseitiges Buchbild.

Mitgeben bei **jedem** Prompt: `stil-referenz.jpg` (4 Original-Klassenbilder: Azurite, Midwife, Gutter Cleric, Masked) –
dazu bei jeder Klasse das passende Einzelbild aus `spire/img/klasse/` (steht jeweils darunter).
Ausgabe: Hochformat 3:4 (ideal 1275 × 1650 px), randlos, keine Schrift, kein Rahmen. Ablage: `spire/img/klasse/<id>.webp`
(wird automatisch in Klassenübersicht, Klassenseite und Zelle genutzt).

## Gemeinsamer Stilblock (in jedem Prompt enthalten)
Flat vector-style editorial illustration in exactly the style of the attached Spire artwork by Adrian Stone: bold angular
geometric shapes, hard-edged cut-paper style shading, limited palette of two or three dominant colours with strong
contrast, subtle grain/halftone texture, dramatic low or high camera angle, one striking central figure with a graphic
background of sharp architectural shapes, ornate gothic-dystopian city of Spire (tiered tower city, brass and stone).
Full-bleed portrait 3:4, no text, no logo, no frame, no border.

---

## 1. Blood-Witch → `blood-witch.webp`
Zusätzlich mitgeben: `midwife.webp` (Farbwelt Rot/Schwarz, okkult)

> [Stilblock] Subject: a Blood-Witch, a sickly occultist of the city of Spire. A gaunt, pale figure in a tattered dark
> coat, veins visible on her hands, a thin line of blood running from a cut wrist into the air where it forms spiralling
> ribbons. Around her, a few misshapen animal familiars (a bird with too many joints, a rat with a human ear) twisted by her
> blood. Behind her, the faint flickering outline of a many-limbed zoetrope horror, as if her shadow is a spinning
> animation drum. Palette: deep crimson, black and bone white with a small accent of sickly green. Cramped, claustrophobic
> backstreet with sharp angular brick shapes. Mood: unsettling, intimate, dangerous.

## 2. Inksmith → `inksmith.webp`
Zusätzlich mitgeben: `azurite.webp` (Blau/Gold, Film-noir-Winkel)

> [Stilblock] Subject: an Inksmith, a film-noir / pulp-fiction occultist. A figure in a trench coat and fedora, face half
> in shadow, holding a fountain pen like a weapon; black ink flows from the nib and from her tattooed forearms, forming
> the silhouette of a man in a suit with a pistol who steps out of the ink pool. Smoke curls from a cigarette, a slatted
> window blind throws hard stripes of light across the scene, a matchbook lies on the desk. Palette: ink black, deep
> teal-blue and warm yellow lamp light, with the stripes of the blinds as strong graphic shapes. The Spire's gothic towers
> visible through the window. Mood: cool, hardboiled, a little ironic.

## 3. Mortician Executioner → `mortician-executioner.webp`
Zusätzlich mitgeben: `carrion-priest.webp` (Zeremoniell/Tod) und `knight.webp` (Waffe, Haltung)

> [Stilblock] Subject: a Mortician Executioner, the state's official legal executioner of the Ministry. A tall figure in
> a formal black-and-grey bureaucrat's robe with a stiff high collar and clerical stole, face behind a smooth, angular
> memento-mori mask with polygonal cartilage implants under the skin. In one hand a scroll with a wax seal (a death
> decree) and an official stamp, in the other a long executioner's blade held low, calm and ceremonial. At their feet a
> kneeling figure beneath a hanging stamped document. Behind them rows of filing cabinets dissolving into a gloomy
> courtroom of pointed arches. Palette: ash grey, black, and a single accent of dark red wax and blood. Mood: cold,
> procedural, deadly.

## 4. Shadow Agent → `shadow-agent.webp`
Zusätzlich mitgeben: `masked.webp` (Masken/Identität, Rot/Schwarz) und `lajhan.webp`

> [Stilblock] Subject: a Shadow Agent, a Ministry spy-assassin broken and remade by the Goddess, who has lost track of her
> true identity. One central figure whose face is split into several overlapping faces and masks (young, old, male,
> female) fanning out like a deck of cards or flickering shadows; each face looks in a different direction. A hand
> pulls a small pistol out from under a café table; a tailored dark coat, with a pale mask hanging from the belt. Behind
> her a crowd of identical silhouettes in grey coats, some turning to look. Palette: dusky violet, charcoal, and a bright
> accent of pale gold. Rain-slicked street under pointed gothic arches. Mood: paranoid, elegant, ambiguous.

---

## Hinweise
- Gutes Ergebnis? Hochformat prüfen, dann in `spire/img/klasse/<id>.webp` ablegen (webp, ca. 1275 × 1650) und mir
  Bescheid geben – die Verdrahtung in `klassen.js`/`galerie.js` übernehme ich (das Tool zeigt bis dahin Initialen).
- Wenn Gemini zu glatt/realistisch wird: „less detail, more flat angular shapes, like the reference“ ergänzen.
- Wenn ein Gesicht zu hübsch/menschlich wird: Spire-Figuren sind oft elfisch-spitzohrig (Aelfir), hart und kantig.
