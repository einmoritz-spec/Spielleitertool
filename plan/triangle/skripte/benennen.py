"""Rohbilder (extract_images.py) benennen, Doppelseiten zusammensetzen, als WebP ablegen + Inventar schreiben.
Aufruf: benennen.py <raw> <repo>"""
import sys, os
from PIL import Image
RAW, REPO = sys.argv[1], sys.argv[2]
ANOM = {63:'whisper',65:'catalogue',67:'drain',69:'timepiece',71:'growth',73:'gun',75:'dream',77:'manifold',79:'absence'}
REAL = {83:'caretaker',85:'overbooked',87:'pursued',89:'star',91:'struggling',93:'newborn',95:'romantic',97:'backbone',99:'creature'}
KOMP = {103:'pr',105:'forschung-entwicklung',107:'barista',109:'ceo',111:'praktikant',113:'totengraeber',115:'empfang',117:'hotline',119:'clown'}
CO = {  # (pdfseite, nr) -> name ; Tupel als Schluessel mit zwei Seiten = Doppelseite
 (1,1):'cover-gebaeude-kopfueber', (1,2):'cover-agentin-aktenkoffer', ((2,1),(3,1)):'vorsatz-agentin-anomalie-doppelseite',
 (4,1):'dreieck-portal-rot', (13,1):'dreieckskopf-zeigestock', ((15,1),(16,1)):'mission-realitaet-stabilisieren-doppelseite',
 ((19,1),(20,1)):'zentrale-lobby-doppelseite', (21,1):'agentin-ripple-gun-schuss', (24,1):'aktenkoffer-normal', (24,2):'ripple-gun',
 (27,1):'anomalie-koralle-rot', (30,1):'agent-zerfaellt-rot', (33,1):'agencyos-wesen-rechner',
 (35,1):'wuerfel-streuung', (35,2):'wuerfel-wurf-erfolg', (35,3):'wuerfel-wurf-fehlschlag', (36,1):'wuerfel-chaos-blau', (36,2):'wuerfel-nur-dreien',
 ((39,1),(40,1)):'triszendenz-dreiecke-doppelseite', (44,1):'dreieckskopf-winkt', (51,1):'dreieckskopf-zeigestock-links', (51,2):'dreieckskopf-zeigestock-rechts',
 (53,1):'beispiel-topfpflanze-auge', (53,2):'beispiel-schuhe-krater', (54,1):'empfangstresen', (54,2):'agent-reagenzglas', (54,3):'warndreieck-uhr',
 (58,1):'beispiel-krokodil-fahrrad', (59,1):'dreieckskopf-praesentiert',
 ((123,1),(124,1)):'grossraumbuero-labyrinth-doppelseite', (126,1):'work-life-balance-vielarmiger-agent', (131,1):'schliessfaecher', (132,2):'tasse-dreieck',
 (137,1):'socken-dreiecksmuster', (137,2):'auszeichnung-krawattennadeln', (138,1):'agent-rot-gesichtslos-sitzend',
 (147,1):'lebenszyklus-ripple', (147,2):'lebenszyklus-anomalie-frosch', (148,1):'lebenszyklus-hollow',
 (149,1):'toolkit-skizze-s146-1', (150,1):'toolkit-dreieckskopf-s147', (151,1):'toolkit-skizze-s148-1', (152,2):'toolkit-skizze-s149-2', (152,4):'toolkit-skizze-s149-4',
 (158,1):'anomalie-koralle-blau', (179,1):'os-fenster-express-leer', (179,2):'os-logo-express', (180,1):'os-workscape-fackelbanner', (180,3):'os-logo-workscape',
 (180,6):'os-workscape-gnom', (180,7):'os-workscape-schild', (180,8):'os-fenster-leer-1', (180,9):'os-fenster-leer-2', (180,10):'buddy-pixel-symbol',
 (181,6):'os-workscape-textur', (183,1):'os-konfetti', (183,3):'os-pixel-avatar', (184,1):'os-banner-biggest-corporation', (184,2):'os-banner-lives-of-the-party',
 (184,3):'os-banner-nice-ones', (184,4):'os-logo-factions', (188,1):'os-logo-mycontract-works', (189,1):'os-titel-sample-mission', (191,1):'os-titel-adjudication',
 (192,1):'muster-augen-blau', ((199,1),(200,1)):'playwall-vorspann-doppelseite', (204,1):'playwall-a2-ripple-gun-ultima',
 (215,2):'playwall-d4-anforderungen-haufen', (216,1):'playwall-d4-anglervision', (216,2):'playwall-d4-ipond', (224,1):'playwall-s221-kaugummi-werbung',
 (228,2):'frage-antwort-karte', (235,1):'playwall-s232-fische', (237,1):'playwall-x1-abnormal-briefcase',
 ((259,1),(260,1)):'playwall-s256-urgency-doppelseite', (277,1):'playwall-s274-augenwesen', (279,1):'playwall-s276-tanzende',
 (287,1):'playwall-s284-anomalie-rosa', (291,1):'playwall-s288-silhouette-nacht', (293,1):'playwall-s290-vault-kaefige', (295,1):'playwall-s292-thron',
 (303,1):'buchruecken-muster', (304,1):'dreieck-portal-dunkel', ((305,1),(306,1)):'pausenraum-doppelseite', (307,1):'rueckseite-collage',
}
for p, n in ANOM.items(): CO[(p,1)] = 'anomalie-' + n
for p, n in REAL.items(): CO[(p,1)] = 'realitaet-' + n
for p, n in KOMP.items(): CO[(p,1)] = 'kompetenz-' + n
BUDDY = [(172,1),(173,1),(173,2),(174,1),(174,2),(176,1),(177,1),(177,2),(179,3),(180,11),(182,4),(183,2),(184,5),(193,1),(194,2),(195,4),(195,5),(196,2),(196,4),(196,5),(196,6),(196,7)]
for i, k in enumerate(BUDDY): CO[k] = f'buddy-{i+1:02d}-s{k[0]-3}'
VA = {
 (1,1):'cover-vault-tuer', ((2,1),(3,1)):'ternion-city-isometrisch-doppelseite', (4,1):'sternenhimmel-riss', ((221,1),(222,1)):'ternion-city-isometrisch-2-doppelseite',
 (11,1):'01-springs-eternal-titel', (19,2):'01-springs-eternal-werbung-return-to-youth', (20,1):'01-springs-eternal-werbung-return-to-youth-2',
 (27,1):'02-dead-quiet-titel', (40,1):'02-dead-quiet-zettel-1', (40,2):'02-dead-quiet-zettel-2',
 (43,1):'03-rom-dump-titel', (48,1):'03-rom-dump-pixelrahmen', (51,1):'03-rom-dump-karte-hof', (52,1):'03-rom-dump-kristall-gruen', (53,1):'03-rom-dump-kristall-rot', (54,1):'03-rom-dump-kristall-gelb',
 (61,1):'04-zbarro-641-titel', (62,2):'04-zbarro-641-hochhaus',
 (79,1):'05-bower-street-titel', (80,2):'05-bower-street-schriftzug', (88,1):'05-bower-street-filmstreifen',
 (97,1):'06-gridhog-titel', (115,1):'07-hollow-suit-titel', (133,1):'08-weird-dog-titel', (139,1):'08-weird-dog-pfoten-ecke-1', (140,1):'08-weird-dog-pfoten-ecke-2',
 (147,1):'09-planet-providence-titel', (148,3):'09-planet-providence-stern', (148,12):'09-planet-providence-achterbahn', (148,13):'09-planet-providence-schriftzug',
 (165,1):'10-murder-at-gruntley-manor-titel', (166,1):'10-murder-at-gruntley-manor-papier', (183,1):'11-blame-it-on-the-trains-titel', (201,1):'12-nosedive-titel',
}
REF_VA = {(12,1):'01-springs-eternal-eroeffnung', (28,1):'02-dead-quiet-eroeffnung', (44,1):'03-rom-dump-eroeffnung', (80,1):'05-bower-street-eroeffnung',
          (98,1):'06-gridhog-eroeffnung', (116,1):'07-hollow-suit-eroeffnung', (134,1):'08-weird-dog-eroeffnung'}
SP = {(2,1):'titel-raumstation-raster', (16,1):'kaffeebecher-skizze'}

def load(d, tag, k): return Image.open(f'{RAW}/{d}/{tag}-p{k[0]:03d}-{k[1]:02d}.png')
def save(im, base, name, rows, buch, seite, maxpx=2400):
    os.makedirs(base + '/full', exist_ok=True); os.makedirs(base + '/thumb', exist_ok=True)
    if max(im.size) > maxpx: im.thumbnail((maxpx, maxpx), Image.LANCZOS)
    alpha = im.mode == 'RGBA' and im.getchannel('A').getextrema()[0] < 250
    if alpha:  # durchsichtigen Rand wegschneiden
        bb = im.getchannel('A').point(lambda a: 255 if a > 10 else 0).getbbox()
        if bb: im = im.crop(bb)
    if not alpha: im = im.convert('RGB')
    im.save(f'{base}/full/{name}.webp', quality=84, method=4)
    t = im.copy(); t.thumbnail((420, 420), Image.LANCZOS); t.save(f'{base}/thumb/{name}.webp', quality=78)
    rows.append((buch, name + '.webp', im.width, im.height, seite, 'freigestellt' if alpha else 'Rechteck'))
def run(MAP, d, tag, base, buch, off, rows):
    for k, name in sorted(MAP.items(), key=lambda kv: kv[1]):
        try:
            if isinstance(k[0], tuple):
                a, b = load(d, tag, k[0]).convert('RGBA'), load(d, tag, k[1]).convert('RGBA')
                if a.size == b.size:
                    from PIL import ImageChops, ImageStat
                    if ImageStat.Stat(ImageChops.difference(a.convert('RGB').resize((64, 64)), b.convert('RGB').resize((64, 64)))).mean[0] < 4:
                        save(a, base, name, rows, buch, f'{k[0][0]-off}–{k[1][0]-off}', 3600); continue  # beide Seiten zeigen dasselbe Gesamtbild
                ca, cb = round(a.width * .004) + 1, round(b.width * .004) + 1  # Beschnittrand an der Naht weg
                a = a.crop((0, 0, a.width - ca, a.height)); b = b.crop((cb, 0, b.width, b.height))
                h = min(a.height, b.height); a = a.resize((round(a.width*h/a.height), h)); b = b.resize((round(b.width*h/b.height), h))
                im = Image.new('RGBA', (a.width + b.width, h)); im.paste(a, (0, 0)); im.paste(b, (a.width, 0)); seite = f'{k[0][0]-off}–{k[1][0]-off}'; mx = 3600
            else: im = load(d, tag, k); seite = str(k[0] - off); mx = 2400
            save(im, base, name, rows, buch, seite, mx)
        except FileNotFoundError as e: print('FEHLT', name, e)
rows = []
run(CO, 'core', 'co', REPO + '/triangle/img/regeln', 'regeln', 3, rows)
run(VA, 'vault', 'va', REPO + '/triangle/img/vault', 'vault', 3, rows)
run(SP, 'space', 'sp', REPO + '/triangle/img/space', 'space', 0, rows)
run(REF_VA, 'vault', 'va', REPO + '/plan/triangle/referenz', 'referenz', 3, rows)
os.makedirs(REPO + '/plan/triangle', exist_ok=True)
with open(REPO + '/plan/triangle/bilder-inventar.tsv', 'w') as f:
    f.write('buch\tdatei\tbreite\thoehe\tbuchseite\tart\n')
    for r in rows: f.write('\t'.join(map(str, r)) + '\n')
print(len(rows), 'Bilder')
