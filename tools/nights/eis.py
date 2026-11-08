import cv2, numpy as np, sys
S=250/72
def polaroids(png):
    img=cv2.imread(png)
    g=cv2.cvtColor(img,cv2.COLOR_BGR2GRAY)
    # dunkelgraue Foto-Flächen
    m=((g>60)&(g<115)).astype(np.uint8)*255
    # nur sehr graue Pixel (Sättigung niedrig)
    hsv=cv2.cvtColor(img,cv2.COLOR_BGR2HSV)
    m&=((hsv[:,:,1]<40).astype(np.uint8)*255)
    m=cv2.morphologyEx(m,cv2.MORPH_CLOSE,cv2.getStructuringElement(cv2.MORPH_RECT,(25,25)))
    n,lab,st,_=cv2.connectedComponentsWithStats(m)
    out=[]
    for i in range(1,n):
        x,y,w,h,a=st[i]
        if 40*S<w<85*S and 30*S<h<85*S and a>0.55*w*h:
            out.append((x/S,y/S,(x+w)/S,(y+h)/S))
    return sorted(out,key=lambda b:(round(b[1]/20),b[0]))
if __name__=='__main__':
    png=sys.argv[1]
    ps=polaroids(png); print(len(ps))
    img=cv2.imread(png)
    for k,(x0,y0,x1,y1) in enumerate(ps):
        cv2.rectangle(img,(int(x0*S),int(y0*S)),(int(x1*S),int(y1*S)),(0,0,255),6)
        cv2.putText(img,str(k),(int(x0*S),int(y0*S)-5),cv2.FONT_HERSHEY_SIMPLEX,3,(255,0,0),6)
    cv2.imwrite('/tmp/eis_dbg.png',cv2.resize(img,(900,int(900*img.shape[0]/img.shape[1]))))
