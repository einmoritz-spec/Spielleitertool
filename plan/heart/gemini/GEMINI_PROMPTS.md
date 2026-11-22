# Heart – fehlende Gegner-Bilder mit Gemini erzeugen

**Stand 22. Nov. 2026.** Klassen, Abstammungen, Berufungen und die meisten Kapitel haben Original-Bilder. Bei den **Gegnern** (Grundbuch S. 175–205) hat nur ein Teil ein eigenes Bild, das eindeutig zu ihm gehört (geprüft am Seitenbild: Schlächter, Kult der Messer, Flugunfähiger Eulenstock, Gnoll-Einsatztrupp, Spiegelspinnen, Stellwerk-Kultisten, Basilisk, Gorgo, Jägerin, Minotaurus). Im Tool bleiben Karten ohne Bild einfach ohne Bild (kein Platzhalter).

Optional – wenn Moritz Bilder für häufig gebrauchte Gegner ohne Buchbild möchte, hier sechs fertige Prompts. Sie stehen im Tool **nicht** in der Galerie „Buchbilder“, sondern mit kleinem Vermerk „neu gezeichnet“.

## Bilder zum Mitgeben (alle in diesem Ordner)
| Datei | Wozu |
|---|---|
| `stil-1-schlaechter.png`, `stil-2-spiegelspinnen.png`, `stil-3-cleaver.png` | **Stil**: freigestellte Original-Illustrationen von Felix Miall aus dem Grundbuch |
| `original-<gegner>-S<n>.jpg` | die Buchseite mit dem Statblock (Beschreibung, Merkmale) als **Inhalts**-Vorlage |

Gemeinsamer Stil-Absatz (steht in jedem Prompt):
> In exactly the style of the attached reference illustrations: hand-inked dark fantasy comic illustration, heavy black brush lines and solid black shadows, flat limited palette of desaturated teal/blue-grey, bone white, dirty ochre and blood red (#640000 to #b4341d), slightly grungy print texture, grotesque but not gory. Single figure, full body, nothing cut off, on a pure white background so it can be cut out (no frame, no ground plane, no text, no signature, no watermark). Portrait format 3:4, at least 1500 × 2000 px.

---

## 1 – Harpyien (Grundbuch S. 189)
Mitgeben: `stil-1-schlaechter.png`, `stil-2-spiegelspinnen.png`, `original-harpyien-S189.jpg`
```
In exactly the style of the attached reference illustrations: hand-inked dark fantasy comic illustration, heavy black brush lines and solid black shadows, flat limited palette of desaturated teal/blue-grey, bone white, dirty ochre and blood red, slightly grungy print texture, grotesque but not gory. On a pure white background so it can be cut out (no frame, no ground plane, no text, no signature). Portrait format 3:4, at least 1500 × 2000 px.

Subject: the harpies from the RPG "Heart: The City Beneath" (see the attached book page). Foreground: a male harpy – a magpie-like corvid about the size of a housecat, black-and-white plumage, with knives, spear points, a bayonet and cutlery lashed onto its pointed white beak, bent carpentry nails, fishing hooks and climbing pitons bound to its feet with twine, diving downward in a glinting blur. Behind it, larger: a female harpy – a lean humanoid as tall as a dark elf, great ragged wings where her hands should be, filthy and callous, screeching. Both figures overlap into one compact group, full bodies visible.
```

## 2 – Gottbestie (Grundbuch S. 189)
Mitgeben: `stil-1-schlaechter.png`, `stil-3-cleaver.png`, `original-gottbestie-S189.jpg`
```
[gemeinsamer Stil-Absatz]

Subject: a godbeast from the ancient forest-heaven in "Heart: The City Beneath": a colossal elk, ten feet high at the shoulder, with antlers of stone and crystal, crashing through a treeline (only a few broken dark tree trunks around its legs, still on white). Its young – itself as big as a fully armoured soldier – half hidden behind its legs. Massive, ancient, mossy fur, glowing pale eyes. Full body visible.
```

## 3 – Herzblutbestie (Grundbuch S. 190)
Mitgeben: `stil-1-schlaechter.png`, `stil-2-spiegelspinnen.png`, `original-herzblutbestie-S190.jpg`
```
[gemeinsamer Stil-Absatz]

Subject: a heartsblood beast from "Heart: The City Beneath" – once an ordinary animal, now changed by the Heart into something protean and terrible: a stray-dog-sized creature that is inverted, its spine broken and bent backwards, skittering crablike towards its prey on its ribs, which have blossomed into centipede-like legs; no recognisable mouth on its head, a ragged maw in its belly. Pale hairless patches, blood-red wet flesh in the openings. Full body visible.
```

## 4 – Marktleibeigener (Grundbuch S. 193)
Mitgeben: `stil-3-cleaver.png`, `stil-1-schlaechter.png`, `original-marktleibeigener-S193.jpg`
```
[gemeinsamer Stil-Absatz]

Subject: a market serf from the Red Market in "Heart: The City Beneath": a gang member devoted to a merchant-priest master. Jagged shards of coins pushed into the gums as teeth, carrying a tall banner made of the master's ledgers and financial records, a bludgeon in the other hand, layered shabby crimson-and-gold livery, chanting with open mouth. Full body, standing three-quarter view.
```

## 5 – Tunnelräuber (Grundbuch S. 198)
Mitgeben: `stil-3-cleaver.png`, `original-tunnelraeuber-S198.jpg`
```
[gemeinsamer Stil-Absatz]

Subject: tunnel brigands from "Heart: The City Beneath": a small gang of three young bandits, younger than they ought to be for this line of work, wearing stolen foreign refugee fashion (long embroidered coats, scarves), chests bound tight with bandages, braces holding up their trousers, old pistols and a cudgel, cocky and insecure poses. Compact overlapping group, full bodies visible.
```

## 6 – Lastenautomat (Grundbuch S. 176)
Mitgeben: `stil-2-spiegelspinnen.png`, `stil-1-schlaechter.png`, `original-lastenautomat-S176.jpg`
```
[gemeinsamer Stil-Absatz]

Subject: an automaton of burden from "Heart: The City Beneath": a headless four-legged mechanical pack animal, thrice repaired, legs of different lengths, wooden side-panelling over brass and iron, carrying bundles and crates; on its back a small portable shrine to the Moon Beneath trailing incense smoke; a chain leash hanging from its front. Full body, side three-quarter view.
```

**Danach:** Bild als PNG in diesen Ordner legen (`neu-<gegner>.png`). Freistellen: weißen Hintergrund per Flutfüllung transparent machen (wie beim Charakterbogen, Code in `HEART_PLAN.md` Abschnitt 7), als `heart/img/gegner/<id>.webp` speichern.
