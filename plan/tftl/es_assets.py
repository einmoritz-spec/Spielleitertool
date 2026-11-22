import pymupdf
from PIL import Image
d=pymupdf.open('/home/claude/tftl_work/pdf/es.pdf')
OUT='/home/claude/spielleitertool/plan/tftl/mockups/src/img/'
SRC='/home/claude/tftl_work/img/es/es_'
def rend(p,dpi,clip=None):
    pix=d[p-1].get_pixmap(dpi=dpi,clip=clip)
    return Image.frombytes('RGB',(pix.width,pix.height),pix.samples)
def stitch(p1,x1,p2,x2,y0,y1,dpi):
    a=rend(p1,dpi,pymupdf.Rect(x1,y0,612,y1)); b=rend(p2,dpi,pymupdf.Rect(0,y0,x2,y1))
    M=Image.new('RGB',(a.width+b.width,a.height)); M.paste(a,(0,0)); M.paste(b,(a.width,0)); return M
def save(im,name,w=1600):
    if im.width>w: im=im.resize((w,round(im.height*w/im.width)),Image.LANCZOS)
    im.save(OUT+name+'.webp',quality=80)
# Karte von Pacifica (PDF 2-3)
save(stitch(2,0,3,612,0,792,110),'es-karte-pacifica',1800)
# Reiseroute (PDF 158-159)
save(stitch(158,327,159,592,50,746,110),'es-karte-route',1800)
# Littleville (PDF 175)
save(rend(175,140,pymupdf.Rect(30,75,587,489)),'es-karte-littleville',1200)
def img(f,name,w=1400):
    im=Image.open(SRC+f+'.webp')
    if im.mode=='RGBA':
        im.thumbnail((w,w)); im.save(OUT+name+'.webp',quality=82); return
    save(im.convert('RGB'),name,w)
for f,n in [('S040-041_01_dbl_1823x1001','es-hero'),('S010-011_01_dbl_2508x1615','es-w-welcome'),('S022-023_01_dbl_2524x1609','es-w-pacifica'),('S052-053_01_dbl_2508x1615','es-w-reisende'),('S080-081_01_dbl_2508x1597','es-w-kampf'),('S114-115_01_dbl_2519x1614','es-w-reise'),('S138-139_01_dbl_2550x1656','es-w-bedrohungen'),('S156-157_01_dbl_2550x1656','es-r-dust'),('S172_01_1298x1625','es-h-engel'),('S185_01_1289x972','es-h-mord'),('S194_01_1298x1647','es-h-drohnen'),('S165_01_770x937','es-r-start'),('S167_01_1291x1663','es-b-strassenbau'),('S177_01_1284x1076','es-h-engel-2')]:
    img(f,n,1000)
for f,n in [('S070_01_660x1477','es-a-kuenstler'),('S071_01_652x1477','es-a-krimineller'),('S072_01_845x1471','es-a-anhaenger'),('S073_01_656x1501','es-a-arzt'),('S074_01_629x1068','es-a-drohnenpilot'),('S077_01_670x1477','es-a-ausreisser'),('S180_01_562x485','es-n-ramona'),('S180_02_477x477','es-n-daisy'),('S181_01_506x506','es-n-marcos'),('S181_02_532x508','es-n-jorge'),('S182_01_517x490','es-n-jimmy')]:
    img(f,n,500)
print('ok')
