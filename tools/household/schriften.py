"""Baut die Bogen-Schriften für den Household-Charakterbogen (household/fonts/).
Die Original-Schriften (LHF Encore Distressed für Überschriften, Sydonia Atramentiqua für Beschriftungen und
Einträge) liegen in den Bogen-PDFs nur als Teilsätze vor. Das Skript vereinigt die Originalzeichen aus allen
übergebenen PDFs und ergänzt fehlende Zeichen (G, K, V, Z, f, g, k, Ziffern, Satzzeichen …) aus ähnlichen
freien Schriften, an die Höhe der Originalzeichen angepasst. Umlaute entstehen aus Originalbuchstabe + Punkt.
Aufruf: python3 tools/household/schriften.py <spender-ordner> <ausgabe-ordner> <bogen.pdf> [weitere.pdf …]
Spender: @fontsource cinzel-decorative 400, cormorant-sc 500, cormorant-garamond 500/700 (latin, woff2)."""
import sys, pikepdf
from io import BytesIO
from fontTools.cffLib import CFFFontSet
from fontTools.ttLib import TTFont
from fontTools.fontBuilder import FontBuilder
from fontTools.pens.t2CharStringPen import T2CharStringPen
from fontTools.pens.transformPen import TransformPen
from fontTools.pens.boundsPen import BoundsPen
from fontTools.agl import toUnicode, UV2AGL

def teilsaetze(pdfs, name):
    """Alle Type1C-Teilsätze einer Schrift aus mehreren PDFs → Liste von (CharStrings, upm)."""
    out = []
    for p in pdfs:
        pdf = pikepdf.open(p)
        def walk(res):
            for k, f in res.get('/Font', {}).items():
                if '/FontDescriptor' not in f or str(f.get('/BaseFont')).split('+')[-1] != name: continue
                ff = f.FontDescriptor.get('/FontFile3')
                if ff is None or str(ff.get('/Subtype')) != '/Type1C': continue
                c = CFFFontSet(); c.decompile(BytesIO(ff.read_bytes()), None); td = c[c.fontNames[0]]
                out.append((td.CharStrings, round(1 / float(td.FontMatrix[0]))))
            for k, x in res.get('/XObject', {}).items():
                if x.get('/Subtype') == '/Form' and '/Resources' in x: walk(x.Resources)
        walk(pdf.pages[0].Resources)
    return out

def bounds(gs, g):
    bp = BoundsPen(gs); gs[g].draw(bp); return bp.bounds

def lnum(font):
    """Zuordnung Mediävalziffern → Versalziffern (GSUB-Merkmal lnum) einer Spenderschrift."""
    m = {}
    if 'GSUB' not in font: return m
    g = font['GSUB'].table
    for fr in g.FeatureList.FeatureRecord:
        if fr.FeatureTag != 'lnum': continue
        for li in fr.Feature.LookupListIndex:
            for st in g.LookupList.Lookup[li].SubTable:
                st = getattr(st, 'ExtSubTable', st)
                if hasattr(st, 'mapping'): m.update(st.mapping)
    return m

def name_fuer(ch): return UV2AGL.get(ord(ch), "uni%04X" % ord(ch))

class Bau:
    def __init__(self, quellen, ohne=""):
        self.glyphs, self.cmap, self.w, self.order, self.quelle = {}, {}, {".notdef": 500}, [".notdef"], {}
        for cs, upm in quellen:
            k = 1000.0 / upm
            for g in cs.keys():
                u = toUnicode(g) if g != ".notdef" else ""
                if not u or len(u) != 1 or ord(u) in self.cmap or u in ohne: continue
                cs[g].draw(BoundsPen(cs))
                self.quelle[g] = (cs, k)
                self.add(ord(u), g, round(cs[g].width * k), [(cs, g, k, 0, 0)])
    def add(self, uni, gn, width, teile):
        pen = T2CharStringPen(width, None)
        for gs, g, k, dx, dy in teile: gs[g].draw(TransformPen(pen, (k, 0, 0, k, dx, dy)))
        self.glyphs[gn] = pen; self.w[gn] = width; self.cmap[uni] = gn
        if gn not in self.order: self.order.append(gn)
    def ob(self, g):
        cs, k = self.quelle[g]; return [v * k for v in bounds(cs, g)]
    def spender(self, font, zeichen, ref_orig, ref_sp, faktor=1.0):
        gs = font.getGlyphSet(); cm = font.getBestCmap(); ln = lnum(font)
        k = self.ob(ref_orig)[3] / bounds(gs, cm[ord(ref_sp)])[3] * faktor
        for ch in zeichen:
            if ord(ch) in self.cmap: continue
            if ord(ch) not in cm: print("  fehlt im Spender:", ch); continue
            g = cm[ord(ch)]
            if ch.isdigit(): g = ln.get(g, g)
            self.add(ord(ch), name_fuer(ch), round(gs[g].width * k), [(gs, g, k, 0, 0)])
    def umlaut(self, ch, basis, dot_font=None, groesse=1.0, abstand=.34, luft=60):
        """Originalbuchstabe + zwei Punkte (aus dem eigenen Punkt oder einer Spenderschrift)."""
        if ord(ch) in self.cmap or basis not in self.quelle: return
        cs, k = self.quelle[basis]; bb = self.ob(basis)
        if dot_font is None and "period" in self.quelle:
            dcs, dk = self.quelle["period"]; dg = "period"; dk = dk * groesse; db = [v * dk / self.quelle["period"][1] * 1 for v in bounds(dcs, dg)]
            db = [v * groesse for v in self.ob("period")]
        else:
            gs = dot_font.getGlyphSet(); cm = dot_font.getBestCmap(); dcs = gs; dg = cm[ord(".")]
            ref = self.ob("x" if "x" in self.quelle else basis)[3] / bounds(gs, cm[ord("x")])[3]
            dk = ref * groesse; db = [v * dk for v in bounds(gs, dg)]
        mitte = (bb[0] + bb[2]) / 2; dw = db[2] - db[0]; ab = (bb[2] - bb[0]) * abstand
        y = bb[3] + luft - db[1]
        self.add(ord(ch), name_fuer(ch), round(cs[basis].width * k),
                 [(cs, basis, k, 0, 0), (dcs, dg, dk, mitte - ab / 2 - dw / 2 - db[0], y), (dcs, dg, dk, mitte + ab / 2 - dw / 2 - db[0], y)])
    def speichern(self, name, pfad):
        fb = FontBuilder(1000, isTTF=False)
        if " " not in [chr(u) for u in self.cmap]:
            self.add(32, "space", 250, [])
        fb.setupGlyphOrder(self.order); fb.setupCharacterMap(self.cmap)
        nd = T2CharStringPen(500, None)
        fb.setupCFF(name, {"FullName": name}, {g: (self.glyphs[g].getCharString() if g in self.glyphs else nd.getCharString()) for g in self.order}, {})
        fb.setupHorizontalMetrics({g: (self.w[g], 0) for g in self.order})
        fb.setupHorizontalHeader(ascent=900, descent=-300)
        fb.setupNameTable({"familyName": name, "styleName": "Regular"})
        fb.setupOS2(sTypoAscender=900, sTypoDescender=-300, usWinAscent=1000, usWinDescent=300)
        fb.setupPost()
        fb.save(pfad + ".otf")
        fb.font.flavor = "woff2"; fb.save(pfad + ".woff2")
        als_ttf(pfad + ".otf", pfad + ".ttf", name)
        print(name, len(self.order), "Zeichen →", pfad)

def als_ttf(otf, ttf, name):
    """TrueType-Fassung (quadratische Kurven) für den PDF-Export mit pdf-lib."""
    from fontTools.pens.ttGlyphPen import TTGlyphPen
    from fontTools.pens.cu2quPen import Cu2QuPen
    src = TTFont(otf); gs = src.getGlyphSet(); order = src.getGlyphOrder()
    fb = FontBuilder(1000, isTTF=True); fb.setupGlyphOrder(order); fb.setupCharacterMap(src.getBestCmap())
    glyf = {}
    for g in order:
        pen = TTGlyphPen(None); gs[g].draw(Cu2QuPen(pen, 1.0, reverse_direction=True)); glyf[g] = pen.glyph()
    fb.setupGlyf(glyf)
    fb.setupHorizontalMetrics({g: src['hmtx'][g] for g in order})
    fb.setupHorizontalHeader(ascent=900, descent=-300)
    fb.setupNameTable({"familyName": name, "styleName": "Regular"})
    fb.setupOS2(sTypoAscender=900, sTypoDescender=-300, usWinAscent=1000, usWinDescent=300)
    fb.setupPost(); fb.save(ttf)

SATZ = "0123456789?;/\"'„“‚‘’–—…%=*[]<>#−×"
if __name__ == "__main__":
    sp, aus, pdfs = sys.argv[1], sys.argv[2], sys.argv[3:]
    deco = TTFont(sp + "/cinzel-decorative-latin-400-normal.woff2")
    corm = TTFont(sp + "/cormorant-sc-latin-500-normal.woff2")
    cg5 = TTFont(sp + "/cormorant-garamond-latin-500-normal.woff2")
    cg7 = TTFont(sp + "/cormorant-garamond-latin-700-normal.woff2")
    # Überschriften: Großbuchstaben = Zierinitialen (Cinzel Decorative), Kleinbuchstaben = Kapitälchen (Cormorant SC)
    t = Bau(teilsaetze(pdfs, "LHFEncoreDistressed"))
    # Das M der Überschriften liegt im Original als „Malt“ vor
    for cs, upm in teilsaetze(pdfs, "LHFEncoreDistressed"):
        if "Malt" in cs and ord("M") not in t.cmap:
            cs["Malt"].draw(BoundsPen(cs)); t.quelle["Malt"] = (cs, 1000.0 / upm)
            t.add(ord("M"), "M", round(cs["Malt"].width * 1000.0 / upm), [(cs, "Malt", 1000.0 / upm, 0, 0)])
    t.spender(deco, "BFGHIJKLNOPQRUVXYZ", "E", "E")
    t.spender(corm, "abfgjkwz", "x", "x")
    for c, b in (("ä", "a"), ("ö", "o"), ("ü", "u")): t.umlaut(c, b, corm, 1.0, .36, 80)
    t.speichern("HHTitel", aus + "/hh-titel")
    # Beschriftungen und Einträge: Sydonia Atramentiqua (Ziffern einheitlich aus dem Spender)
    s = Bau(teilsaetze(pdfs, "SydoniaATRAMENTIQUA-Regular"), ohne="0123456789")
    s.spender(cg5, "ZQXJ", "E", "E")
    s.spender(cg5, SATZ, "E", "E", .97)
    s.spender(cg5, "ß", "x", "x")
    for c, b in (("Ä", "A"), ("Ö", "O"), ("Ü", "U")): s.umlaut(c, b, None, .62, .2, 40)
    for c, b in (("ä", "a"), ("ö", "o"), ("ü", "u")): s.umlaut(c, b, None, .6, .3, 40)
    s.speichern("HHSchrift", aus + "/hh-schrift")
    f = Bau(teilsaetze(pdfs, "SydoniaATRAMENTIQUA-Bold"), ohne="0123456789")
    f.spender(cg7, "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "E", "E")
    f.spender(cg7, "abcdefghijklmnopqrstuvwxyz", "x", "x")
    f.spender(cg7, SATZ + ".:,!()-+&", "E", "E", .97)
    f.spender(cg7, "ß", "x", "x")
    for c, b in (("Ä", "A"), ("Ö", "O"), ("Ü", "U")): f.umlaut(c, b, cg7, .9, .22, 40)
    for c, b in (("ä", "a"), ("ö", "o"), ("ü", "u")): f.umlaut(c, b, cg7, .9, .32, 40)
    f.speichern("HHSchriftFett", aus + "/hh-schrift-fett")
