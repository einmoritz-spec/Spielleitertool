# Baut aus dem eingebetteten Baby-Doll-Subset (CFF) eine WOFF2 mit ergänzten Umlauten (Ä Ö Ü ä ö ü)
import sys
from fontTools.ttLib import TTFont, newTable
from fontTools.cffLib import CFFFontSet
from fontTools.fontBuilder import FontBuilder
from fontTools.pens.t2CharStringPen import T2CharStringPen
from fontTools.pens.transformPen import TransformPen
from fontTools.pens.boundsPen import BoundsPen
src,out=sys.argv[1],sys.argv[2]
cff=CFFFontSet(); cff.decompile(open(src,'rb'),None)
top=cff[cff.fontNames[0]]; cs=top.CharStrings
names=list(cs.keys())
gs={}
class GS(dict): pass
# Glyphset für Pens
from fontTools.cffLib import CharStrings
glyphset={n:cs[n] for n in names}
def draw(n,pen):
    cs[n].draw(pen)
from fontTools.misc.psCharStrings import T2WidthExtractor
_pr=top.Private
def width(n):
    c=cs[n]; e=T2WidthExtractor(getattr(c.private,'Subrs',[]) if c.private else [], c.globalSubrs or [], getattr(_pr,'nominalWidthX',0), getattr(_pr,'defaultWidthX',0)); e.execute(c); return e.width
def bounds(n):
    bp=BoundsPen(glyphset); draw(n,bp); return bp.bounds
newglyphs={}
charmap={}
uni={'space':32,'exclam':33,'quotedbl':34,'percent':37,'ampersand':38,'quotesingle':39,'parenleft':40,'parenright':41,'plus':43,'comma':44,'hyphen':45,'period':46,'slash':47,'colon':58,'greater':62,'question':63,'bracketleft':91,'bracketright':93,'bar':124,'bullet':0x2022,'emdash':0x2014,'quoteright':0x2019,'guillemotright':0xbb,'heart':0x2665}
for i,w in enumerate(['zero','one','two','three','four','five','six','seven','eight','nine']): uni[w]=48+i
for c in 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz': uni[c]=ord(c)
pdot=bounds('period')
def compose(base,newname,code):
    b=bounds(base); w=width(base)
    pen=T2CharStringPen(w,glyphset)
    draw(base,pen)
    dw=pdot[2]-pdot[0]; s=0.85
    gap=(b[2]-b[0])*0.18
    cx=(b[0]+b[2])/2
    y=b[3]+110
    for x in (cx-gap-dw*s, cx+gap):
        tp=TransformPen(pen,(s,0,0,s,x-pdot[0]*s,y-pdot[1]*s)); draw('period',tp)
    newglyphs[newname]=(pen.getCharString(),w); uni[newname]=code
for base,nn,code in [('A','Adieresis',0xC4),('O','Odieresis',0xD6),('U','Udieresis',0xDC),('a','adieresis',0xE4),('o','odieresis',0xF6),('u','udieresis',0xFC)]:
    compose(base,nn,code)
# ß -> Glyph aus zwei s nebeneinander
w=width('s'); pen=T2CharStringPen(w*2,glyphset); draw('s',pen); draw('s',TransformPen(pen,(1,0,0,1,w,0)))
newglyphs['germandbls']=(pen.getCharString(),w*2); uni['germandbls']=0xDF
order=['.notdef']+[n for n in names if n!='.notdef']+list(newglyphs)
fb=FontBuilder(2048,isTTF=False)  # Original-FontMatrix 1/2048
fb.setupGlyphOrder(order)
fb.setupCharacterMap({uni[n]:n for n in order if n in uni})
charstrings={}
for n in names:
    pen=T2CharStringPen(width(n),glyphset); draw(n,pen); charstrings[n]=pen.getCharString()
for n,(c,w) in newglyphs.items(): charstrings[n]=c
fb.setupCFF('PicoBabyDoll',{'FullName':'Pico Baby Doll'},charstrings,{})
metrics={}
for n in order:
    w=newglyphs[n][1] if n in newglyphs else width(n)
    bp=BoundsPen(None); charstrings[n].draw(bp); lsb=bp.bounds[0] if bp.bounds else 0
    metrics[n]=(int(w),int(lsb))
fb.setupHorizontalMetrics(metrics)
fb.setupHorizontalHeader(ascent=1640,descent=-420)
fb.setupNameTable({'familyName':'PicoBabyDoll','styleName':'Regular'})
fb.setupOS2(sTypoAscender=1640,sTypoDescender=-420,sTypoLineGap=0,usWinAscent=1800,usWinDescent=540)
fb.setupPost()
fb.font.flavor='woff2'
fb.save(out); print('ok',len(order))
