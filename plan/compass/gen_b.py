#!/usr/bin/env python3
# Varianten von Entwurf B („Das Journal“)
import os
from gen import AREAS, SEASONS, ICONS, page
D = os.path.dirname(os.path.abspath(__file__))
STORY = {"pilot": "Der Zorn des Quetzalcoatl", "jr": "Der Fluch von El Dorado", "ve": "Die verschollene Expedition", "lt": "Elf On-Demand-Episoden"}
FRAME = {"pilot": "#1d2c4d", "jr": "#6e1414", "ve": "#1f4a2c", "lt": "#7a1b2a"}
NUM = ["1", "2", "3", "4", "5", "6"]
TOP = f'<div class="top"><img class="lg" src="img/logo.png"><div class="sp"></div>{ICONS}</div>'

COMMON = '''
.leather{background:#4a2c1b url(img/leather_tile.jpg) center/840px}
.paper{background:linear-gradient(rgba(242,236,224,.55),rgba(242,236,224,.55)),url(img/paper_c.jpg) center/cover}
.cw{font-family:Cou,monospace}
'''

def ep_list(eps, cls=""):
    out = ""
    for a, t, _, _ in eps:
        n = "P" if a == "Pilot" else a.replace("Folge ", "")
        out += f'<li><span>{n}</span>{t}</li>'
    return f'<ol class="eps {cls}">{out}</ol>'

# ---------------- B1 Einband: Leder-Einband als Kopf, Inhaltsverzeichnis + Drehbuchseiten ----------------
def b1():
    css = COMMON + '''
body{background:#2a1a10}
.top{background:#1a100a;color:#f0e3c8}
.cover{height:430px;position:relative;overflow:hidden;box-shadow:inset 0 -30px 50px -20px rgba(0,0,0,.6)}
.cover .spine{position:absolute;left:150px;top:0;bottom:0;width:26px;border-left:2px dashed rgba(200,150,100,.35);border-right:2px dashed rgba(200,150,100,.35);background:rgba(0,0,0,.18)}
.cover .emb{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%) scale(.52);transform-origin:center;width:820px;height:800px;background:url(img/emb_compass.jpg) center/cover;-webkit-mask-image:radial-gradient(circle,#000 56%,transparent 69%);mask-image:radial-gradient(circle,#000 56%,transparent 69%)}
.cover .lgo{position:absolute;left:90px;top:150px;width:330px;height:129px;background:url(img/emb_logo.jpg) center/cover;-webkit-mask-image:radial-gradient(ellipse,#000 55%,transparent 75%);mask-image:radial-gradient(ellipse,#000 66%,transparent 86%);filter:contrast(1.2)}
.cover .lab{position:absolute;right:110px;top:165px;width:300px;height:107px;background:url(img/emb_ajlabel.jpg) center/cover;-webkit-mask-image:radial-gradient(ellipse,#000 50%,transparent 72%);mask-image:radial-gradient(ellipse,#000 50%,transparent 72%)}
.corner{position:absolute;right:0;bottom:0;width:260px;height:260px;background:linear-gradient(135deg,transparent 49.6%,rgba(30,15,8,.6) 50%,rgba(70,40,25,.9) 51%);}
.book{width:1220px;margin:-40px auto 50px;position:relative;z-index:2;display:grid;grid-template-columns:1fr 1fr;box-shadow:0 30px 60px -20px #000}
.pg{padding:38px 40px 44px;min-height:700px;position:relative}
.pg.l{box-shadow:inset -40px 0 50px -40px rgba(60,40,20,.6)}
.pg.r{box-shadow:inset 40px 0 50px -40px rgba(60,40,20,.6)}
.h{font:900 40px/1 Fut;text-transform:uppercase;color:var(--red);margin-bottom:24px;letter-spacing:.01em}
.toc{display:flex;flex-direction:column;gap:6px}
.te{display:grid;grid-template-columns:44px 1fr 120px;gap:14px;align-items:center;padding:10px 0;border-bottom:1px solid rgba(110,85,55,.3)}
.te .n{font:900 34px/1 Fut;color:var(--c)}
.te b{display:block;font:900 19px Fut;text-transform:uppercase;color:#2a2118}
.te small{display:block;font:12px/1.45 Fut;font-weight:500;text-transform:uppercase;letter-spacing:.04em;color:#7a6650;margin-top:3px}
.te .ph{width:120px;height:74px;background-size:cover;box-shadow:0 0 0 3px #f6f0e2,0 3px 8px rgba(0,0,0,.35)}
.scripts{position:relative;height:640px}
.sc{position:absolute;width:300px;height:400px;padding:30px 26px 22px 44px;background:url(img/note.png) center/100% 100%;filter:drop-shadow(0 8px 14px rgba(40,25,10,.4))}
.sc .k{font:700 11px Cou;letter-spacing:.12em;text-transform:uppercase;color:#7b6648}
.sc .t{font:700 20px/1.15 Cou;text-transform:uppercase;color:var(--f);margin:6px 0 4px}
.sc .s{font:italic 14px Cas;color:#4d3f30;margin-bottom:12px}
.eps{list-style:none;font:13px/1.55 Cou;color:#2f261c}
.eps span{display:inline-block;width:22px;color:var(--red);font-weight:700}
.sc.lt .eps{font-size:11.5px;line-height:1.45}
'''
    toc = ''.join(f'''<div class="te" style="--c:var(--{c})"><div class="n">{i+1 if n!="1999" else 6}</div><div><b>{n}</b><small>{" · ".join(sub[:3])}</small></div><div class="ph" style="background-image:url(img/{im});background-position:{pos}"></div></div>''' for i,(n,_,c,im,pos,sub) in enumerate(AREAS))
    place = {"pilot":(10,10,-4),"jr":(290,0,3),"ve":(20,250,2),"lt":(280,232,-3)}
    sc = ''
    for k,lab,name,cov,col,eps in SEASONS:
        x,y,r = place[k]
        sc += f'''<div class="sc {k}" style="left:{x}px;top:{y}px;transform:rotate({r}deg);--f:{FRAME[k]}"><div class="k">{lab}</div><div class="t">{name}</div><div class="s">{STORY[k]}</div>{ep_list(eps)}</div>'''
    body = f'''{TOP}<div class="cover leather"><div class="spine"></div><div class="lgo"></div><div class="emb"></div><div class="lab"></div></div>
<div class="book"><div class="pg l paper"><div class="h">Inhalt</div><div class="toc">{toc}</div></div><div class="pg r paper"><div class="h">Staffeln</div><div class="scripts">{sc}</div></div></div>'''
    return page("B1 Einband", css, body)

# ---------------- B2 Fundstücke: Schreibtisch mit eingeklebten Fotos ----------------
def b2():
    css = COMMON + '''
body{background:#3a2316}
.top{background:#1a100a;color:#f0e3c8}
.desk{padding:36px 0 60px}
.photo{width:1180px;height:440px;margin:0 auto;position:relative;background:url(img/a_cave.jpg) 50% 40%/cover;box-shadow:0 0 0 12px #f4efe4,0 20px 40px -10px rgba(0,0,0,.8);transform:rotate(-.6deg)}
.tape{position:absolute;width:120px;height:34px;background:rgba(235,225,190,.75);box-shadow:0 1px 3px rgba(0,0,0,.2)}
.book{width:1180px;margin:34px auto 0;display:grid;grid-template-columns:1fr 1fr;box-shadow:0 30px 60px -20px #000,0 0 0 9px #24160d}
.pg{padding:34px 34px 40px;min-height:640px;position:relative}
.pg.l{box-shadow:inset -40px 0 50px -40px rgba(60,40,20,.6)}
.pg.r{box-shadow:inset 40px 0 50px -40px rgba(60,40,20,.6)}
.h{font:900 30px Fut;text-transform:uppercase;color:var(--red);margin-bottom:18px}
.pol{display:grid;grid-template-columns:repeat(2,1fr);gap:26px 26px;padding:0 10px}
.po{background:#fbf8f1;padding:8px 8px 12px;box-shadow:0 6px 14px -4px rgba(40,25,10,.5);position:relative}
.po .im{height:150px;background-size:cover}
.po b{display:block;font:900 14.5px Fut;text-transform:uppercase;color:var(--c);margin-top:9px;text-align:center;letter-spacing:.01em}
.po i{display:block;font:italic 12.5px Cas;color:#6a5a47;text-align:center;margin-top:2px}
.po .tape{width:64px;height:20px;top:-10px;left:50%;margin-left:-32px}
.ss{display:grid;grid-template-columns:96px 1fr;gap:18px;margin-bottom:22px;align-items:start}
.ss .cv{width:96px;height:146px;object-fit:cover;box-shadow:3px 5px 10px rgba(0,0,0,.45);transform:rotate(-2deg)}
.ss:nth-child(odd) .cv{transform:rotate(2deg)}
.ss .k{font:800 11px Fut;letter-spacing:.24em;text-transform:uppercase;color:#7b6648}
.ss .t{font:900 20px Fut;text-transform:uppercase;color:#2a2118;margin:2px 0}
.ss .s{font:italic 14px Cas;color:#5b4b39;margin-bottom:8px}
.eps{list-style:none;display:grid;grid-template-columns:1fr 1fr;column-gap:16px;font:12.5px/1.6 Cou;color:#2f261c}
.eps li{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.eps span{display:inline-block;width:20px;color:var(--red);font-weight:700}
.clip{position:absolute;width:14px;height:44px;border:2.5px solid #9a9a9a;border-radius:8px;top:-8px;left:20px}
'''
    pol = ''.join(f'''<div class="po" style="--c:var(--{c});transform:rotate({r}deg)"><div class="tape"></div><div class="im" style="background-image:url(img/{im});background-position:{pos}"></div><b>{n}</b><i>{st}</i></div>''' for (n,st,c,im,pos,_),r in zip(AREAS,[-2,1.5,-1,2,-1.5,1]))
    ss = ''.join(f'''<div class="ss" style="position:relative"><div style="position:relative"><img class="cv" src="img/{cov}"><div class="clip"></div></div><div><div class="k">{lab}</div><div class="t">{name}</div><div class="s">{STORY[k]}</div>{ep_list(eps) if k!="pilot" else ""}</div></div>''' for k,lab,name,cov,col,eps in SEASONS)
    body = f'''{TOP}<div class="desk leather"><div class="photo"><div class="tape" style="left:-30px;top:16px;transform:rotate(-38deg)"></div><div class="tape" style="right:-30px;top:16px;transform:rotate(38deg)"></div></div>
<div class="book"><div class="pg l paper"><div class="h">Das Journal</div><div class="pol">{pol}</div></div><div class="pg r paper"><div class="h">Staffeln</div>{ss}</div></div></div>'''
    return page("B2 Fundstücke", css, body)

# ---------------- B3 Registerreiter: farbige Reiter am Journal ----------------
def b3():
    css = COMMON + '''
body{background:#2a1a10}
.top{background:#1a100a;color:#f0e3c8}
.hero{height:400px;background:url(img/a_temple.jpg) 50% 42%/cover;position:relative}
.hero:after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,transparent 55%,#2a1a10)}
.wrap{width:1240px;margin:-70px auto 60px;position:relative;z-index:2;padding-right:60px}
.book{display:grid;grid-template-columns:1fr 1fr;box-shadow:0 30px 60px -20px #000,0 0 0 9px #3a2416,0 0 0 10px #6d4a2c;position:relative}
.pg{padding:36px 38px 40px;min-height:650px}
.pg.l{box-shadow:inset -40px 0 50px -40px rgba(60,40,20,.6)}
.pg.r{box-shadow:inset 40px 0 50px -40px rgba(60,40,20,.6)}
.tabs{position:absolute;right:-56px;top:26px;display:flex;flex-direction:column;gap:6px;z-index:-1}
.tab{width:66px;height:116px;padding:0 0 0 18px;border-radius:0 8px 8px 0;background:var(--c);color:#fff;display:flex;align-items:center;justify-content:center;box-shadow:inset 8px 0 10px -6px rgba(0,0,0,.45)}
.tab span{writing-mode:vertical-rl;font:800 10.5px Fut;text-transform:uppercase;letter-spacing:.06em}
.tab.on{width:78px;margin-left:-12px;z-index:3}
.big{height:270px;background:url(img/a_cave.jpg) 40% 40%/cover;box-shadow:0 0 0 6px #f6f1e6,0 8px 18px -6px rgba(0,0,0,.5);margin-bottom:22px}
.sect{font:800 12px Fut;letter-spacing:.3em;text-transform:uppercase;color:var(--s1)}
.st{font:900 36px/1 Fut;text-transform:uppercase;color:var(--s1);margin:6px 0 4px;display:flex;align-items:center;gap:14px}
.st:after{content:"";flex:1;height:2px;background:var(--s1);opacity:.4}
.sub{columns:2;column-gap:26px;font:15.5px/1.75 Cas;color:#33291e;margin-top:14px;list-style:none}
.sub li:before{content:"›  ";color:var(--red)}
.h{font:900 30px Fut;text-transform:uppercase;color:var(--red);margin-bottom:18px}
.sr{display:grid;grid-template-columns:110px 1fr;gap:18px;padding:12px 0;border-bottom:1px solid rgba(110,85,55,.3)}
.sr .cv{height:110px;background-size:cover;box-shadow:0 3px 8px rgba(0,0,0,.4)}
.sr .k{font:800 11px Fut;letter-spacing:.24em;text-transform:uppercase;color:#7b6648}
.sr .t{font:900 19px Fut;text-transform:uppercase;color:#2a2118;margin:1px 0 6px}
.chips{display:flex;flex-wrap:wrap;gap:5px}
.chips span{font:12px Cou;padding:2px 8px;border:1px solid rgba(110,85,55,.45);background:rgba(255,255,255,.35);color:#2f261c}
'''
    tabs = ''.join(f'''<div class="tab{' on' if i==0 else ''}" style="--c:var(--{c})"><span>{n}</span></div>''' for i,(n,_,c,_,_,_) in enumerate(AREAS))
    a = AREAS[0]
    sub = ["Broken Compass", "Die Welt von Broken Compass", "Wo und wann", "Grundpfeiler des Abenteuers", "Wie man spielt", "Gemeinsam spielen", "Wie im Kino", "Folge dem Kompass"]
    left = f'''<div class="big"></div><div class="sect">Abschnitt 1</div><div class="st">{a[0]}</div><div style="font:italic 17px Cas;color:#5b4b39">{a[1]}</div><ul class="sub">{''.join(f"<li>{x}</li>" for x in sub)}</ul>'''
    bg = {"pilot":"a_pilot.jpg","jr":"a_ships.jpg","ve":"a_sub.jpg","lt":"a_medal.jpg"}
    sr = ''.join(f'''<div class="sr"><div class="cv" style="background-image:url(img/{bg[k]})"></div><div><div class="k">{lab}</div><div class="t">{name}</div><div class="chips">{''.join(f"<span>{t}</span>" for _,t,_,_ in eps)}</div></div></div>''' for k,lab,name,cov,col,eps in SEASONS)
    body = f'''{TOP}<div class="hero"></div><div class="wrap"><div class="book"><div class="tabs">{tabs}</div><div class="pg l paper">{left}</div><div class="pg r paper"><div class="h">Staffeln</div>{sr}</div></div></div>'''
    return page("B3 Registerreiter", css, body)

# ---------------- B4 Kapitel-Doppelseiten wie im Buch ----------------
def b4():
    css = COMMON + '''
body{background:#2a1a10}
.top{background:#1a100a;color:#f0e3c8}
.cover{height:300px;position:relative;display:flex;align-items:center;justify-content:center;gap:60px}
.cover .lgo{width:420px;height:164px;filter:contrast(1.3) brightness(1.05);background:url(img/emb_logo.jpg) center/cover;-webkit-mask-image:radial-gradient(ellipse,#000 68%,transparent 88%);mask-image:radial-gradient(ellipse,#000 68%,transparent 88%)}
.cover .emb{width:230px;height:225px;background:url(img/emb_compass.jpg) center/cover;-webkit-mask-image:radial-gradient(circle,#000 58%,transparent 70%);mask-image:radial-gradient(circle,#000 58%,transparent 70%)}
.grid{width:1220px;margin:0 auto;display:grid;grid-template-columns:1fr 1fr;gap:26px}
.sp{display:grid;grid-template-columns:1fr 1fr;height:250px;box-shadow:0 18px 30px -14px #000}
.sp .art{background-size:cover;position:relative}
.sp .art:after{content:"";position:absolute;right:0;top:0;bottom:0;width:40px;background:linear-gradient(90deg,transparent,rgba(0,0,0,.35))}
.sp .op{background:var(--c);color:#fff;padding:26px 24px;display:flex;flex-direction:column;justify-content:flex-end;position:relative;overflow:hidden}
.sp .op:before{content:"";position:absolute;inset:0;background:url(img/compassw.png) 140% 120%/240px no-repeat;opacity:.12}
.sp .op .n{font:800 12px Fut;letter-spacing:.3em;text-transform:uppercase;opacity:.75}
.sp .op b{font:900 22px/1.02 Fut;text-transform:uppercase;margin:6px 0 10px;padding-bottom:10px;border-bottom:1.5px solid rgba(255,255,255,.6)}
.sp .op small{font:500 12px/1.5 Fut;text-transform:uppercase;letter-spacing:.05em;opacity:.9}
.stf{width:1220px;margin:44px auto 60px;padding:34px 36px 40px}
.h{font:900 30px Fut;text-transform:uppercase;color:var(--red);margin-bottom:20px}
.cols{display:grid;grid-template-columns:repeat(4,1fr);gap:20px}
.sc{background:url(img/note.png) center/100% 100%;padding:26px 18px 22px 46px;min-height:330px;filter:drop-shadow(0 6px 10px rgba(40,25,10,.35))}
.sc .cv{width:100%;height:110px;background-size:cover;margin-bottom:12px;box-shadow:0 0 0 3px #fff}
.sc .k{font:700 10.5px Cou;letter-spacing:.14em;text-transform:uppercase;color:#7b6648}
.sc .t{font:700 16px/1.15 Cou;text-transform:uppercase;color:var(--f);margin:4px 0 8px}
.eps{list-style:none;font:12px/1.5 Cou;color:#2f261c}
.eps span{display:inline-block;width:20px;color:var(--red);font-weight:700}
.sc.lt .eps{columns:1;font-size:11px;line-height:1.38}
'''
    sp = ''.join(f'''<div class="sp" style="--c:var(--{c})"><div class="art" style="background-image:url(img/{im});background-position:{pos}"></div><div class="op"><div class="n">Abschnitt {i+1}</div><b>{n}</b><small>{" · ".join(sub)}</small></div></div>''' for i,(n,_,c,im,pos,sub) in enumerate(AREAS))
    bg = {"pilot":"a_pilot.jpg","jr":"a_ships.jpg","ve":"a_sub.jpg","lt":"a_medal.jpg"}
    sc = ''.join(f'''<div class="sc {k}" style="--f:{FRAME[k]}"><div class="cv" style="background-image:url(img/{bg[k]})"></div><div class="k">{lab}</div><div class="t">{name}</div>{ep_list(eps)}</div>''' for k,lab,name,cov,col,eps in SEASONS)
    body = f'''{TOP}<div class="cover leather"><div class="lgo"></div><div class="emb"></div></div><div class="grid">{sp}</div><div class="stf paper"><div class="h">Staffeln</div><div class="cols">{sc}</div></div>'''
    return page("B4 Kapitel", css, body + '<style>body{background:#2a1a10 url(img/leather_tile.jpg) center/840px}</style>')

for n,f in [("b1",b1),("b2",b2),("b3",b3),("b4",b4)]:
    open(os.path.join(D,f"start_{n}.html"),"w").write(f())
print("ok")
