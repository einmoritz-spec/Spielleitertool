"""Baut aus den eingebetteten Plantin-/Geared-Slab-Teilsets der Spire-PDFs Web-Schriften (woff2)
und ergaenzt fehlende deutsche Zeichen (ä ö ü Ä Ö Ü ß) als zusammengesetzte Glyphen.
Aufruf: python3 build_fonts.py <fontordner> <zielordner>"""
import sys, os, glob
from fontTools.cffLib import CFFFontSet
from fontTools.fontBuilder import FontBuilder
from fontTools.pens.recordingPen import RecordingPen
from fontTools.pens.t2CharStringPen import T2CharStringPen
from fontTools.pens.transformPen import TransformPen
from fontTools.pens.boundsPen import BoundsPen
from fontTools.misc.psCharStrings import T2WidthExtractor
from fontTools.agl import toUnicode
from fontTools.ttLib import TTFont

def load_cff(path):
    cs = CFFFontSet(); cs.decompile(open(path, 'rb'), None)
    top = cs[cs.fontNames[0]]
    gs = top.CharStrings
    glyphs = {}
    for name in top.charset:
        c = gs[name]
        c.decompile()
        pd = c.private
        subrs = getattr(pd, 'Subrs', None) or []
        we = T2WidthExtractor(subrs, cs.GlobalSubrs, pd.nominalWidthX, pd.defaultWidthX)
        we.execute(c)
        rec = RecordingPen(); c.draw(rec)
        glyphs[name] = (we.width, rec)
    return glyphs

def bounds(rec):
    bp = BoundsPen(None); rec.replay(bp); return bp.bounds

COMP = {'adieresis':('a',0xe4),'odieresis':('o',0xf6),'udieresis':('u',0xfc),
        'Adieresis':('A',0xc4),'Odieresis':('O',0xd6),'Udieresis':('U',0xdc)}

def build(glyphs, family, style, out, donor=None, skew=0.0):
    # Umlaute ergaenzen
    dots = None
    if donor and 'dieresis' in donor: dots = donor['dieresis'][1]
    elif 'dieresis' in glyphs: dots = glyphs['dieresis'][1]
    for g, (base, uni) in COMP.items():
        if g in glyphs or base not in glyphs or dots is None: continue
        w, brec = glyphs[base]
        bb = bounds(brec); db = bounds(dots)
        if not bb or not db: continue
        cx = (bb[0]+bb[2])/2; dcx = (db[0]+db[2])/2
        dy = 0 if base.islower() else (bb[3]-480)   # Grossbuchstaben: Punkte ueber die Versalhoehe heben
        rec = RecordingPen(); brec.replay(rec)
        tp = TransformPen(rec, (1, 0, skew, 1, cx-dcx+skew*0, dy))
        dots.replay(tp)
        glyphs[g] = (w, rec)
    if 'germandbls' not in glyphs and donor and 'germandbls' in donor:
        glyphs['germandbls'] = donor['germandbls']
    order = ['.notdef'] + [n for n in glyphs if n != '.notdef']
    fb = FontBuilder(1000, isTTF=False)
    fb.setupGlyphOrder(order)
    cmap = {}
    for n in order:
        if '.' in n[1:]: continue   # z. B. one.superior -> nicht auf '1' legen
        u = toUnicode(n)
        if u and len(u) == 1: cmap[ord(u)] = n
    fb.setupCharacterMap(cmap)
    cs = {}
    for n in order:
        w, rec = glyphs.get(n, (500, RecordingPen()))
        p = T2CharStringPen(w, None); rec.replay(p); cs[n] = p.getCharString()
    fb.setupCFF(family.replace(' ', '')+'-'+style, {'FullName': family+' '+style}, cs, {})
    fb.setupHorizontalMetrics({n: (glyphs.get(n, (500,))[0], 0) for n in order})
    fb.setupHorizontalHeader(ascent=800, descent=-220)
    fb.setupNameTable({'familyName': family, 'styleName': style})
    fb.setupOS2(sTypoAscender=800, sTypoDescender=-220, usWinAscent=900, usWinDescent=260)
    fb.setupPost()
    fb.font.flavor = 'woff2'
    fb.save(out)
    print('ok', out, len(order))



def build_geared(src, out_path, primary):
    """Geared Slab: Teilsets aus allen drei PDFs zusammenlegen (gleiche Schrift, je PDF andere Zeichen),
    dann Ä Ö Ü (Grundbuchstabe + zwei Punkte), ß→ (nur Versalsatz, CSS uppercase), – und — (Bindestrich gestreckt) ergaenzen."""
    from fontTools.ttLib.tables._g_l_y_f import GlyphComponent, Glyph
    base = TTFont(primary)
    g = base['glyf']; hm = base['hmtx']
    for f in sorted(glob.glob(src + '/*GearedSlab-Bold_*.ttf')):
        if f == primary: continue
        o = TTFont(f); og = o['glyf']
        for name in o.getGlyphOrder():
            if name not in g.glyphs: continue
            if g[name].numberOfContours == 0 and og[name].numberOfContours > 0:
                gl = og[name]
                if gl.isComposite(): continue
                g[name] = gl; hm[name] = o['hmtx'][name]
    def comp(name, parts, adv):
        gl = Glyph(); gl.components = []
        for (n, dx, dy, sx) in parts:
            c = GlyphComponent(); c.glyphName = n; c.x = dx; c.y = dy; c.flags = 0
            if sx != 1: c.transform = [[sx, 0], [0, 1]]
            gl.components.append(c)
        gl.numberOfContours = -1
        g[name] = gl; hm[name] = (adv, 0)
    per = g['period']; per.recalcBounds(g)
    pw = per.xMax - per.xMin
    for name, b in (('Adieresis', 'A'), ('Odieresis', 'O'), ('Udieresis', 'U'),
                    ('adieresis', 'A'), ('odieresis', 'O'), ('udieresis', 'U')):
        bg = g[b]; bg.recalcBounds(g); adv = hm[b][0]
        cx = (bg.xMin + bg.xMax) / 2; gap = pw * 0.6
        dy = bg.yMax + 40
        comp(name, [(b, 0, 0, 1), ('period', int(cx - gap/2 - pw - per.xMin), int(dy - per.yMin), 1),
                    ('period', int(cx + gap/2 - per.xMin), int(dy - per.yMin), 1)], adv)
    from fontTools.pens.ttGlyphPen import TTGlyphPen
    hyg = g['hyphen']; hyg.recalcBounds(g)
    for name, w in (('endash', 500), ('emdash', 900)):
        p = TTGlyphPen(None)
        p.moveTo((40, hyg.yMin)); p.lineTo((40, hyg.yMax)); p.lineTo((w-40, hyg.yMax)); p.lineTo((w-40, hyg.yMin)); p.closePath()
        g[name] = p.glyph(); hm[name] = (w, 40)
    # ' = Kopie von ’ ; ! = Balken + Punkt
    comp('quotesingle', [('quoteright', 0, 0, 1)], hm['quoteright'][0])
    ig = g['I']; ig.recalcBounds(g)
    p = TTGlyphPen(None); bw = 90; x0 = 60
    p.moveTo((x0, per.yMax + 60)); p.lineTo((x0, ig.yMax)); p.lineTo((x0 + bw, ig.yMax)); p.lineTo((x0 + bw, per.yMax + 60)); p.closePath()
    g['exclam'] = p.glyph(); hm['exclam'] = (bw + 2 * x0, x0)
    comp('exclam', [('exclam', 0, 0, 1)], bw + 2 * x0) if False else None
    # Ausrufezeichen-Punkt als zweite Kontur: einfach Komposit aus Balken + Punkt
    bar = g['exclam']; g['exclam.bar'] = bar; hm['exclam.bar'] = hm['exclam']
    if 'exclam.bar' not in base.getGlyphOrder(): base.setGlyphOrder(base.getGlyphOrder() + ['exclam.bar'])
    comp('exclam', [('exclam.bar', 0, 0, 1), ('period', int(x0 + bw/2 - (per.xMin+per.xMax)/2), 0, 1)], bw + 2 * x0)
    # leere Glyphen aus der Zeichentabelle nehmen -> Browser nimmt die Ersatzschrift statt einer Lücke
    for t in base['cmap'].tables:
        for u, n in list(t.cmap.items()):
            gl = g[n]
            if u != 0x20 and gl.numberOfContours == 0: del t.cmap[u]
    base['maxp'].maxComponentElements = 3; base['maxp'].maxComponentDepth = 1
    base['head'].flags |= 0
    base.flavor = 'woff2'; base.save(out_path); print('ok', out_path)


if __name__ == '__main__':
    src, dst = sys.argv[1], sys.argv[2]
    os.makedirs(dst, exist_ok=True)
    reg = load_cff(glob.glob(src+'/cmf_PlantinStd_*.cff')[0])   # zuerst Core (qs-Teilset hat hochgestellte Ziffern unter 'one' usw.)
    reg2 = load_cff(glob.glob(src+'/qs_PlantinStd_*.cff')[0])
    for k, v in reg2.items(): reg.setdefault(k, v)
    build(dict(reg), 'Spire Plantin', 'Regular', dst+'/spire-plantin-400.woff2')
    it = load_cff(glob.glob(src+'/cmf_PlantinStd-Italic_*.cff')[0])
    for k, v in load_cff(glob.glob(src+'/gm_PlantinMTPro-Italic_*.cff')[0]).items(): it.setdefault(k, v)
    build(it, 'Spire Plantin', 'Italic', dst+'/spire-plantin-400i.woff2', donor=reg, skew=0.2)
    bd = load_cff(glob.glob(src+'/cmf_PlantinStd-Bold_*.cff')[0])
    for k, v in load_cff(glob.glob(src+'/gm_PlantinMTPro-Bold_*.cff')[0]).items(): bd.setdefault(k, v)
    for k in ('parenleft', 'parenright', 'seven'):
        if k not in bd and k in reg: bd[k] = reg[k]
    build(bd, 'Spire Plantin', 'Bold', dst+'/spire-plantin-700.woff2', donor=reg)
    # Geared Slab: TrueType ist fast vollstaendig, nur ß fehlt -> Versalien-Ueberschriften brauchen es nicht (CSS uppercase macht SS)
    build_geared(src, dst+'/spire-geared-700.woff2', glob.glob(src+'/cmf_GearedSlab-Bold_*.ttf')[0])

