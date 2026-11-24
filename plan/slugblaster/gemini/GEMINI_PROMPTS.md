# Slugblaster – Signatur-Skizzen mit Gemini erzeugen

**Stand:** 10 der 12 Signaturen haben eine echte Skizze (Buch S. 52/53/58/61 und die Signatur-Bögen) – die sind schon freigestellt.
Nur bei **zwei** Geräten zeigt der Bogen nicht das Gerät selbst:
- **Voidwear Backpack** – der Bogen zeigt nur eine Stoff-/Platinen-Textur.
- **Hyperoptic Visor** – der Bogen zeigt nur Platinen mit Flachbandkabel.

Für diese zwei braucht es neue Skizzen. Gemini soll **schwarze Tusche auf reinem Weiß** zeichnen (wie die Bögen). Das Tool färbt danach selbst hellblau ein (`plan/slugblaster/tint_sketch.py`, gleiche Optik wie alle anderen).

## Bilder zum Mitgeben (alle in diesem Ordner)
| Datei | Wozu |
|---|---|
| `stil-referenz.png` | **Stil**: 6 Original-Skizzen aus den Bögen (Gravity Blaster, Powered Armour, Skipmode Runners, Negafriction Sword, Photonic Jacket, Robotic Companion) |
| `ziel-look-im-tool.png` | So sieht es im Tool aus (hellblau auf lila) – nur zur Info, Gemini soll **schwarz auf weiß** liefern |
| `bogen-voidwear-backpack.png` / `bogen-hyperoptic-visor.png` | Original-Bogen mit Text (Look-Liste, Funktion) als Inhalts-Vorlage |
| `alt-voidwear-backpack.png` / `alt-hyperoptic-visor.png` | die bisherige, unpassende Bogen-Grafik – darf als Material-Detail (Platinen, Kabel) einfließen |

---

## Prompt 1 – Voidwear Backpack
Mitgeben: `stil-referenz.png`, `bogen-voidwear-backpack.png`, `alt-voidwear-backpack.png`

```
Draw a single object illustration in exactly the same style as the reference sketches I attached (stil-referenz.png): black ink line drawing on a pure white background, hand-drawn technical sketch, confident slightly rough linework, fine hatching for shading, some solid black accents, no colour, no grey wash, no text, no frame, no shadow on the ground, no background.

Object: the "Voidwear backpack" from the tabletop RPG Slugblaster – a sci-fi teen's everyday backpack by a tech brand. It is a simple one-pocket cinch / drawstring sack (like a gym bag) made of nylon and canvas, slightly worn and patched, with a few stickers and a keychain. The opening of the single pocket shows a swirling pocket dimension inside (a few curved lines and tiny stars/specks disappearing into darkness – the bag holds a whole bedroom). Small tech details: a thin hardlight seam along the cinch cord, a small circuit-board panel and a short ribbon cable sewn onto the side (like the circuit textures in alt-voidwear-backpack.png), a little logo tag with no readable text.

Composition: three-quarter view from slightly above, object centred, fills about 80 % of a square canvas, plenty of white margin, nothing cut off. Square 1:1, high resolution (at least 1500 × 1500 px).
```

## Prompt 2 – Hyperoptic Visor
Mitgeben: `stil-referenz.png`, `bogen-hyperoptic-visor.png`, `alt-hyperoptic-visor.png`

```
Draw a single object illustration in exactly the same style as the reference sketches I attached (stil-referenz.png): black ink line drawing on a pure white background, hand-drawn technical sketch, confident slightly rough linework, fine hatching for shading, some solid black accents, no colour, no grey wash, no text, no frame, no background.

Object: the "Hyperoptic visor" from the tabletop RPG Slugblaster – a hands-free HUD headset that replaces a phone for a sci-fi teenager. A wraparound visor / goggles with one large curved transparent lens (show reflections with a few clean white highlight shapes and faint HUD marks on the lens: a small crosshair, two thin bars, a tiny circle), a padded headband strap, a small camera eye on one side, a hinged eyepiece arm, and a short exposed ribbon cable with a small circuit board clipped to the strap (reuse the circuit-board look from alt-hyperoptic-visor.png). Slightly DIY and sticker-covered, like a teenager tinkered with it.

Composition: three-quarter front view, object centred, fills about 80 % of a square canvas, plenty of white margin, nothing cut off. Square 1:1, high resolution (at least 1500 × 1500 px).
```

## Wenn das Ergebnis nicht passt – Nachschärfen
- „Make the lines thinner and more sketchy, closer to the reference, less polished.“
- „Remove all grey shading, only pure black lines and hatching on white.“
- „No text, no letters, no logos with words.“
- „Show the whole object, leave more white space around it.“

## Danach
Bild als PNG speichern und mir (bzw. Sonnet) geben → wird mit `tint_sketch.py` freigestellt und hellblau gefärbt → `slugblaster/img/sig/voidwear-backpack.webp` bzw. `hyperoptic-visor.webp`. In der Galerie werden diese zwei **nicht** als Buchbild geführt.
