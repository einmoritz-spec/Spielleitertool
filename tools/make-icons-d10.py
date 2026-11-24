import math, sys, json
# d10 = pentagonale Trapezoeder; Sicht leicht von oben-vorne, minimalistisch in Gold auf Tintenschwarz
r=1.0; a=0.105
def pt(k,ring):
    th=math.radians(72*k+(36 if ring=='L' else 0)); z=a if ring=='U' else -a
    return (r*math.cos(th), r*math.sin(th), z)
U=[pt(k,'U') for k in range(5)]; L=[pt(k,'L') for k in range(5)]
# Höhe h so, dass Kite T,U_k,L_k,U_k+1 eben ist
def sub(p,q): return tuple(x-y for x,y in zip(p,q))
def cross(u,v): return (u[1]*v[2]-u[2]*v[1],u[2]*v[0]-u[0]*v[2],u[0]*v[1]-u[1]*v[0])
def dot(u,v): return sum(x*y for x,y in zip(u,v))
n=cross(sub(U[1],U[0]),sub(L[0],U[0]))
# Ebene n·(p-U0)=0 , bei (0,0,z): z = U0z - (n0*(0-U0x)+n1*(0-U0y))/n2
h=U[0][2]-(n[0]*(-U[0][0])+n[1]*(-U[0][1]))/n[2]
Z=1.7
U=[(x,y,z*Z) for x,y,z in U]; L=[(x,y,z*Z) for x,y,z in L]; h*=Z
T=(0,0,h); B=(0,0,-h)
faces=[]
for k in range(5):
    faces.append([T,U[k],L[k],U[(k+1)%5]])            # obere Kites
    faces.append([B,L[k],U[(k+1)%5],L[(k+1)%5]])      # untere Kites
# Drehung: erst um z, dann Kippen um x
def rot(p,yaw,tilt):
    x,y,z=p
    c,s=math.cos(yaw),math.sin(yaw); x,y=x*c-y*s,x*s+y*c
    c,s=math.cos(tilt),math.sin(tilt); y,z=y*c-z*s,y*s+z*c
    return (x,y,z)
def build(yaw,tilt):
    out=[]
    for f in faces:
        pts=[rot(p,yaw,tilt) for p in f]
        nn=cross(sub(pts[1],pts[0]),sub(pts[3],pts[0]))
        # Blickrichtung: Kamera bei -y  (y zeigt in den Schirm hinein nach Kippen)
        cen=[sum(p[i] for p in pts)/4 for i in range(3)]
        out.append((pts,nn,cen))
    return out
yaw=math.radians(18); tilt=math.radians(-50)
fs=build(yaw,tilt)
# Sichtbarkeit: Normale nach außen (cen·n >0 ) und zur Kamera (n_y<0 -> Kamera bei y=-inf)
vis=[]
for pts,nn,cen in fs:
    if dot(nn,cen)<0: nn=tuple(-x for x in nn)
    if nn[1]<0: vis.append((pts,nn))
def render(size,scale,bg,rounded):
    S=size; cx=cy=S/2; k=S*scale/ (2*max(abs(p[0]) for pts,_ in vis for p in pts) if False else 1)
    # Skalierung aus Ausdehnung aller Punkte
    allp=[p for pts,_ in vis for p in pts]
    minx=min(p[0] for p in allp); maxx=max(p[0] for p in allp)
    minz=min(p[2] for p in allp); maxz=max(p[2] for p in allp)
    ext=max(maxx-minx,maxz-minz); k=S*scale/ext
    mx=(minx+maxx)/2; mz=(minz+maxz)/2
    def P(p): return (cx+(p[0]-mx)*k, cy-(p[2]-mz)*k)
    light=(0.2,-0.7,0.65); ll=math.sqrt(sum(x*x for x in light)); light=tuple(x/ll for x in light)
    parts=[]
    for pts,nn in vis:
        nl=math.sqrt(dot(nn,nn)); lum=max(0,dot(nn,light)/nl)
        # Gold-Töne von dunkel nach hell
        t=0.28+0.72*lum
        col=(int(40+t*190),int(30+t*150),int(10+t*60))
        d=" ".join(f"{x:.1f},{y:.1f}" for x,y in map(P,pts))
        parts.append(f'<polygon points="{d}" fill="rgb{col}" stroke="#0d1014" stroke-width="{S*0.012:.1f}" stroke-linejoin="round"/>')
    rx=S*0.22 if rounded else 0
    return f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {S} {S}" width="{S}" height="{S}"><rect width="{S}" height="{S}" rx="{rx}" fill="{bg}"/>'+"".join(parts)+'</svg>'
if __name__=="__main__":
    bg="#0d1014"
    open("icon.svg","w").write(render(512,0.62,bg,False))
    open("icon-maskable.svg","w").write(render(512,0.50,bg,False))
    open("favicon.svg","w").write(render(64,0.80,bg,True))
    print("faces",len(vis),"h",h)
