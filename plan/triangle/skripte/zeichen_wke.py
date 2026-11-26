# Teil E (Werkzeug S. 177-184): Pixel-Symbole des Workster-Intranets. Boxen in Punkt (PDF-Seite = Buchseite + 3)
def px(x0, y0, x1, y1): return tuple(round(v * 0.8, 1) for v in (x0, y0, x1, y1))   # aus 90-dpi-Bild
ZEICHEN = [
 ('workster-korrespondieren', 'co', 183, px(64, 586, 100, 618)),
 ('workster-abgleichen',      'co', 183, px(64, 620, 100, 652)),
 ('workster-neues-memo',      'co', 183, px(66, 684, 102, 716)),
 ('workster-meine-memos',     'co', 183, px(66, 718, 102, 750)),
 ('workster-lieblingsmemos',  'co', 183, px(66, 750, 102, 782)),
 ('workster-knopf-zurueckkreisen', 'co', 183, px(334, 588, 368, 616)),
 ('workster-knopf-rememo',    'co', 183, px(435, 588, 468, 616)),
 ('workster-knopf-favorit',   'co', 183, px(538, 586, 572, 616)),
 ('workster-knopf-feedback',  'co', 183, px(644, 586, 678, 616)),
 ('workster-becher',          'co', 185, (55, 149, 89, 192)),
 ('workster-ort',             'co', 185, (446, 230, 475, 262)),
 ('workster-agenten',         'co', 185, (444, 275, 476, 307)),
 ('workster-leitung',         'co', 185, (444, 320, 476, 350)),
 ('workster-plan',            'co', 185, (446, 362, 475, 396)),
 ('workster-szenenarten',     'co', 185, (50, 415, 91, 456)),
]
