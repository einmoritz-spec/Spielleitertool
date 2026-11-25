#!/usr/bin/env python3
# Erzeugt drei Startseiten-Entwürfe für Broken Compass
import os
D = os.path.dirname(os.path.abspath(__file__))

ICONS = '''<div class="icons">
<svg class="ic" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="10" r="2"/><path d="M21 16l-5-5-9 9"/></svg>
<svg class="ic" viewBox="0 0 24 24"><circle cx="11" cy="11" r="6.5"/><path d="M16 16l4.5 4.5"/></svg>
<svg class="ic" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.5v.5"/></svg>
<svg class="ic" viewBox="0 0 24 24"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5z"/><path d="M4 20.5A2.5 2.5 0 0 0 6.5 23H20v-5"/></svg>
<svg class="ic" viewBox="0 0 24 24"><path d="M4 7h16M4 12h16M4 17h16"/></svg></div>'''

# Bereiche = Abschnitte des Adventure Journal (Reiter in der Kopfzeile)
AREAS = [
 ("Grundlagen", "Der Geist des Abenteuers", "s1", "a_cave.jpg", "30% 40%",
  ["Grundpfeiler des Abenteuers", "Wie man spielt", "Wie im Kino", "Folge dem Kompass"]),
 ("Abenteurer", "Wie Abenteurer entstehen", "s2", "a_desert.jpg", "8% 30%",
  ["Abenteurerbogen", "Expertise", "Ausrüstung", "Der Zufallsabenteurer"]),
 ("Herausforderungen", "Stell dich der Herausforderung", "s3", "a_green.jpg", "35% 30%",
  ["Schwierigkeit", "Erfolge", "Scheitern", "Wie fühlst du dich?"]),
 ("Gefahren", "Fallen und Kugeln", "s4", "a_red.jpg", "20% 30%",
  ["Glück", "Fallen", "Feinde", "Prügelei und Schießerei"]),
 ("Schatzsuche", "Die Reise beginnt", "s5", "a_temple.jpg", "68% 40%",
  ["Episoden und Staffeln", "Der Schatz", "Dein Rivale", "Weltuntergangsuhr"]),
 ("1999", "Die Welt im Jahr 1999", "s6", "a_y1999.jpg", "62% 30%",
  ["Technologie", "Übernatürliches", "Schätze", "Extras"]),
]

SEASONS = [
 ("pilot", "Pilot", "Ins Auge des Sturms", "cov_aj.jpg", "#1d2c4d",
  [("Pilot", "Der Zorn des Quetzalcoatl", "a_pilot.jpg", "50% 40%")]),
 ("jr", "Staffel 2", "Jolly Roger", "cov_jr.jpg", "#7a1d1d",
  [("Folge 1", "Alles in Flammen", "a_feast.jpg", "30% 40%"),
   ("Folge 2", "Eine zwielichtige Spelunke", "a_feast.jpg", "85% 40%"),
   ("Folge 3", "Sturm auf die Festung", "a_gold.jpg", "50% 30%"),
   ("Folge 4", "Auf hoher See", "a_ships.jpg", "30% 50%"),
   ("Folge 5", "Die Schatzinsel", "a_jrship.jpg", "50% 60%"),
   ("Folge 6", "Die Entscheidung", "a_ships.jpg", "80% 50%")]),
 ("ve", "Staffel 3", "Voyages Extraordinaires", "cov_ve.jpg", "#1f4a2c",
  [("Folge 1", "Das fehlende Teil", "a_dino.jpg", "20% 30%"),
   ("Folge 2", "An einen außergewöhnlichen Ort", "a_island.jpg", "50% 40%"),
   ("Folge 3", "Der gefährliche Übergang", "a_dino.jpg", "80% 30%"),
   ("Folge 4", "Was übrig bleibt", "a_moon.jpg", "50% 40%"),
   ("Folge 5", "Frei von Ketten", "a_sub.jpg", "45% 50%"),
   ("Folge 6", "Kettenreaktion", "a_sub.jpg", "75% 40%")]),
 ("lt", "Spin-off", "LuckTales", "cov_lt.jpg", "#6b1420",
  [("Folge 1", "Letzte Reise zum Toplitzsee", "a_d20.png", "50% 50%"),
   ("Folge 2", "Auf der Suche nach Atlantis", "a_sub.jpg", "20% 60%"),
   ("Folge 3", "Yaoqins Himmelsbeben", "a_medal.jpg", "50% 50%"),
   ("Folge 4", "Das Auge des Ra", "a_desert.jpg", "75% 40%"),
   ("Folge 5", "Gjallarhorns Ruf", "a_cave.jpg", "70% 30%"),
   ("Folge 6", "Das Ungeheuer im Labyrinth", "a_green.jpg", "80% 50%"),
   ("Folge 7", "Flucht von North Sentinel", "a_temple.jpg", "20% 50%"),
   ("Folge 8", "Alarichs Fluch", "a_gold.jpg", "50% 70%"),
   ("Folge 9", "Mission: Unsterbliche Beute", "a_red.jpg", "30% 30%"),
   ("Folge 10", "Grenzenlos", "a_island.jpg", "40% 70%"),
   ("Folge 11", "Das Erbe der Händler", "a_wayf.jpg", "50% 50%")]),
]

def page(title, css, body):
    return f'''<!DOCTYPE html><html lang="de"><head><meta charset="utf-8"><title>{title}</title>
<link rel="stylesheet" href="base.css"><style>{css}</style></head><body>{body}</body></html>'''

# ---------------- Entwurf A: Premiere (Kino / Serie) ----------------
def entwurf_a():
    css = '''
body{background:#100d0a}
.top{background:#100d0a;color:#efe6d2}
.hero{height:540px;background:url(img/a_cave.jpg) 50% 42%/cover;position:relative}
.hero:after{content:"";position:absolute;inset:auto 0 0 0;height:200px;background:linear-gradient(transparent,#100d0a)}
.areas{background:linear-gradient(rgba(240,234,222,.6),rgba(240,234,222,.6)),url(img/paper_c.jpg) center/cover;padding:46px 40px 50px;position:relative}
.areas h2,.seas h2{font:800 15px Fut;letter-spacing:.32em;text-transform:uppercase;margin:0 0 22px 4px;display:flex;align-items:center;gap:16px}
.areas h2{color:#6d5c45}.areas h2:after,.seas h2:after{content:"";flex:1;height:1px;background:currentColor;opacity:.35}
.ag{display:grid;grid-template-columns:repeat(6,1fr);gap:14px}
.ac{background:#f6f1e7;box-shadow:0 1px 0 rgba(0,0,0,.08),0 10px 24px -14px rgba(40,25,10,.55);overflow:hidden;display:flex;flex-direction:column}
.ac .im{height:250px;background-size:cover;position:relative}
.ac .im:after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,transparent 45%,rgba(0,0,0,.65))}
.ac .nm{position:absolute;left:12px;right:8px;bottom:12px;z-index:1;color:#fff;font:900 13.5px/1.05 Fut;text-transform:uppercase;letter-spacing:0}
.ac .bar{height:6px}
.ac ul{list-style:none;padding:12px 14px 14px;font:14px/1.45 Cas;color:#3a2f24}
.ac li{padding:2px 0}
.seas{padding:44px 40px 60px;color:#efe6d2}
.seas h2{color:#bfb39b}
.row{display:grid;grid-template-columns:112px 1fr;gap:24px;margin-bottom:30px;align-items:center}
.post{position:relative}
.post img{width:112px;height:170px;object-fit:cover;display:block;box-shadow:0 12px 30px -10px #000}
.post .k{font:700 11px Fut;letter-spacing:.24em;text-transform:uppercase;color:#bfa77a;margin-top:10px}
.post .t{font:italic 17px/1.2 Cas;color:#f3ead7;margin-top:3px}
.strip{background:#050403;padding:16px 0;position:relative;display:flex;gap:0;align-self:start;margin-top:0}
.strip:before,.strip:after{content:"";position:absolute;left:0;right:0;height:10px;background:radial-gradient(circle at 9px 5px,#2d2620 3.2px,transparent 3.6px) 0 0/22px 10px repeat-x}
.strip:before{top:3px}.strip:after{bottom:3px}
.fr{flex:1;min-width:0;margin:0 4px;position:relative;height:150px;background-size:cover;border-radius:2px;overflow:hidden}
.fr:after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,transparent 40%,rgba(0,0,0,.85))}
.fr span{position:absolute;left:10px;right:8px;bottom:8px;z-index:1}
.fr b{display:block;font:700 10px Fut;letter-spacing:.2em;text-transform:uppercase;color:#e7c98a}
.fr i{display:block;font:italic 14.5px/1.2 Cas;color:#fff;margin-top:2px}
.fr.hov{flex:2.2}
.row.lt .strip{flex-wrap:wrap;row-gap:12px;padding:16px 0}
.row.lt .fr{flex:0 0 calc(16.66% - 8px);height:110px}
.row.lt .fr i{font-size:13px}
.prem{position:relative;height:250px;margin:0 0 34px;background:url(img/a_pilot.jpg) 50% 38%/cover;display:flex;align-items:flex-end;padding:24px 30px;overflow:hidden}
.prem:before{content:"";position:absolute;inset:0;background:linear-gradient(90deg,rgba(8,12,20,.9) 0,rgba(8,12,20,.35) 45%,transparent)}
.prem div{position:relative}.prem b{display:block;font:800 12px Fut;letter-spacing:.3em;text-transform:uppercase;color:#9fb6d8}
.prem i{display:block;font:italic 34px/1.1 Cas;color:#fff;margin-top:6px}.prem small{display:block;font:700 12px Fut;letter-spacing:.2em;text-transform:uppercase;color:#c9d3e2;margin-top:8px}
'''
    areas = ''.join(f'''<a class="ac"><div class="im" style="background-image:url(img/{im});background-position:{pos}"><div class="nm">{n}</div></div><div class="bar" style="background:var(--{c})"></div><ul>{''.join(f"<li>{x}</li>" for x in sub)}</ul></a>''' for n,_,c,im,pos,sub in AREAS)
    rows = ''
    for k,lab,name,cov,col,eps in SEASONS:
        if k=='pilot':
            rows += '<div class="prem"><div><b>Pilot · Ins Auge des Sturms</b><i>Der Zorn des Quetzalcoatl</i></div></div>'; continue
        frs = ''.join(f'''<div class="fr{' hov' if (k=='jr' and i==2) else ''}" style="background-image:url(img/{im});background-position:{pos}"><span><b>{a}</b><i>{t}</i></span></div>''' for i,(a,t,im,pos) in enumerate(eps))
        rows += f'''<div class="row {k}{' pilot' if k=='pilot' else ''}"><div class="post"><img src="img/{cov}"><div class="k">{lab}</div><div class="t">{name}</div></div><div class="strip">{frs}</div></div>'''
    body = f'''<div class="top"><img class="lg" src="img/logo.png"><div class="sp"></div>{ICONS}</div>
<div class="hero"></div>
<section class="areas"><h2>Das Abenteuer-Journal</h2><div class="ag">{areas}</div></section>
<section class="seas"><h2>Staffeln</h2>{rows}</section>'''
    return page("Entwurf A", css, body)

# ---------------- Entwurf B: Das Journal (Leder, Kompass, Kartenpapier) ----------------
def entwurf_b():
    css = '''
body{background:#3b2416 url(img/leather.jpg) center/600px;}
.top{background:rgba(20,12,7,.92);color:#f0e3c8}
.cover{height:560px;position:relative;display:grid;grid-template-columns:1fr 1fr;overflow:hidden;background:#140c07}
.cover .l{background:url(img/a_temple.jpg) 30% 45%/cover}
.cover .r{background:url(img/a_cave.jpg) 70% 40%/cover}
.cover:after{content:"";position:absolute;inset:0;background:radial-gradient(ellipse at 50% 50%,transparent 30%,rgba(10,6,3,.75) 100%)}
.seam{position:absolute;left:50%;top:0;bottom:0;width:70px;transform:translateX(-50%);background:linear-gradient(90deg,transparent,rgba(0,0,0,.55) 45%,rgba(0,0,0,.6) 50%,rgba(0,0,0,.55) 55%,transparent);z-index:1}
.emb{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);z-index:2;width:250px;height:250px;border-radius:50%;
 background:url(img/leather.jpg) center/420px;box-shadow:0 0 0 6px rgba(70,40,20,.9),0 0 0 7px #a07a4c,0 30px 60px -10px #000, inset 0 0 40px rgba(0,0,0,.6);display:grid;place-items:center}
.emb img{width:170px;filter:sepia(1) saturate(.6) brightness(.85) drop-shadow(0 1px 0 rgba(255,220,170,.25)) drop-shadow(0 -1px 0 rgba(0,0,0,.6))}
.book{width:1200px;margin:-60px auto 60px;position:relative;z-index:3;display:grid;grid-template-columns:1fr 1fr;
 box-shadow:0 30px 60px -20px #000,0 0 0 10px #2a1a10,0 0 0 11px #6d4a2c}
.pg{background:linear-gradient(rgba(240,233,218,.5),rgba(240,233,218,.5)),url(img/paper_c.jpg) center/cover;padding:40px 44px 46px;min-height:620px;position:relative}
.pg.l{box-shadow:inset -30px 0 40px -30px rgba(60,40,20,.55)}
.pg.r{box-shadow:inset 30px 0 40px -30px rgba(60,40,20,.55)}
.pg h2{font:900 34px/1 Fut;text-transform:uppercase;color:var(--red);letter-spacing:.01em;margin-bottom:22px}
.ix{display:flex;flex-direction:column;gap:12px}
.ie{display:grid;grid-template-columns:170px 1fr;gap:18px;align-items:center;padding:0;background:rgba(255,255,255,.4);border-left:6px solid}
.ie .ph{width:170px;height:86px;background-size:cover;box-shadow:0 2px 6px rgba(0,0,0,.35)}
.ie b{display:block;font:900 20px Fut;text-transform:uppercase;letter-spacing:.02em}
.ie i{display:block;font:italic 15px/1.25 Cas;color:#5b4b39;margin-top:2px}
.shelf{display:flex;flex-direction:column;gap:14px}
.ss{display:grid;grid-template-columns:70px 1fr;gap:16px;align-items:start;padding-bottom:14px;border-bottom:1px solid rgba(90,70,40,.25)}
.ss img{width:70px;height:106px;object-fit:cover;box-shadow:3px 4px 8px rgba(0,0,0,.4)}
.ss .k{font:800 11px Fut;letter-spacing:.24em;text-transform:uppercase;color:#7b6648}
.ss .t{font:900 21px Fut;text-transform:uppercase;color:#2a2118;margin:1px 0 6px}
.ss ol{list-style:none;display:grid;grid-template-columns:1fr 1fr;column-gap:18px;font:13px/1.6 Cou;color:#3d3125}.ss ol li{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.ss ol li:before{content:attr(data-n)"  ";color:var(--red);font-weight:700}
.ss.lt ol{grid-template-columns:1fr 1fr}
.clip{display:none;position:absolute;top:-14px;right:60px;width:30px;height:80px;border:3px solid #8d8d8d;border-radius:14px;z-index:4}
'''
    ix = ''.join(f'''<div class="ie" style="border-color:var(--{c})"><div class="ph" style="background-image:url(img/{im});background-position:{pos}"></div><div><b>{n}</b><i>{sub_t}</i></div></div>''' for n,sub_t,c,im,pos,_ in AREAS)
    sh = ''
    for k,lab,name,cov,col,eps in SEASONS:
        sh += f'''<div class="ss {k}"><img src="img/{cov}"><div><div class="k">{lab}</div><div class="t">{name}</div><ol>{''.join(f'<li data-n="{a.replace("Folge ","")}">{t}</li>' if a!="Pilot" else f'<li data-n="P">{t}</li>' for a,t,_,_ in eps)}</ol></div></div>'''
    body = f'''<div class="top"><img class="lg" src="img/logo.png"><div class="sp"></div>{ICONS}</div>
<div class="cover"><div class="l"></div><div class="r"></div><div class="seam"></div><div class="emb"><img src="img/compassw.png"></div></div>
<div class="book"><div class="clip"></div><div class="pg l"><h2>Das Journal</h2><div class="ix">{ix}</div></div><div class="pg r"><h2>Staffeln</h2><div class="shelf">{sh}</div></div></div>'''
    return page("Entwurf B", css, body)

# ---------------- Entwurf C: Kompassrose und Schatzkarte ----------------
def entwurf_c():
    css = '''
body{background:linear-gradient(rgba(238,232,219,.55),rgba(238,232,219,.55)),url(img/paper_c.jpg) center top/1400px auto #ebe5d8}
.top{background:#17120d;color:#f0e6d2}
.hero{height:430px;background:url(img/a_temple.jpg) 50% 38%/cover;position:relative;-webkit-mask-image:linear-gradient(#000 60%,transparent);mask-image:linear-gradient(#000 60%,transparent)}
.rose{position:relative;width:1200px;height:560px;margin:-150px auto 0;z-index:2}
.med{position:absolute;left:50%;top:54%;width:290px;height:290px;transform:translate(-50%,-50%);border-radius:50%;background:url(img/a_medal.jpg) center/122%;box-shadow:0 20px 50px -10px rgba(0,0,0,.7),0 0 0 6px #e9e3d6,0 0 0 7px #b9a27a}
.ring{position:absolute;inset:0}
.pt{position:absolute;width:260px;display:grid;grid-template-columns:96px 1fr;gap:14px;align-items:center}
.pt .ph{width:96px;height:96px;border-radius:50%;background-size:cover;box-shadow:0 0 0 4px #f3ecdf,0 0 0 6px var(--c),0 10px 20px -6px rgba(0,0,0,.5)}
.pt b{display:block;font:900 19px Fut;text-transform:uppercase;color:var(--c)}
.pt i{display:block;font:italic 13.5px/1.3 Cas;color:#4d3f30;margin-top:2px}
.pt.rt{grid-template-columns:1fr 96px;text-align:right}.pt.rt .ph{order:2}
svg.lines{position:absolute;inset:0}
.map{width:1200px;margin:10px auto 70px;position:relative}
.map h2{font:900 30px Fut;text-transform:uppercase;color:var(--red);margin:0 0 14px 6px}
.route{display:grid;grid-template-columns:230px 1fr;gap:24px;align-items:center;padding:20px 10px;border-top:1px dashed rgba(90,70,40,.35)}
.route .po{display:flex;gap:12px;align-items:center}
.route .po img{width:58px;height:88px;object-fit:cover;box-shadow:2px 3px 8px rgba(0,0,0,.35)}
.route .po b{display:block;font:800 11px Fut;letter-spacing:.2em;text-transform:uppercase;color:#7b6648}
.route .po i{display:block;font:800 15px/1.1 Fut;text-transform:uppercase;color:#2a2118;margin-top:2px}
.path{position:relative;display:flex;justify-content:space-between;align-items:flex-start;padding-top:6px}
.path:before{content:"";position:absolute;left:14px;right:14px;top:20px;border-top:3px dashed var(--c);opacity:.75}
.stop{position:relative;z-index:1;flex:1;text-align:center;padding:0 4px}
.stop .x{width:30px;height:30px;margin:0 auto 8px;border-radius:50%;background:#efe8da;border:3px solid var(--c);display:grid;place-items:center;font:800 12px Fut;color:var(--c)}
.stop .x.tr{background:var(--c);color:#fff}
.stop span{font:13.5px/1.25 Cas;color:#3a2f24;display:block}
.route.lt .stop span{font-size:12px}
'''
    # Positionen um die Kompassrose (6 Punkte)
    pos = [(170,100,'rt'),(770,100,''),(80,252,'rt'),(860,252,''),(170,404,'rt'),(770,404,'')]
    pts = ''
    for (n,sub_t,c,im,p,_),(x,y,cl) in zip(AREAS,pos):
        pts += f'''<div class="pt {cl}" style="left:{x}px;top:{y}px;--c:var(--{c})"><div class="ph" style="background-image:url(img/{im});background-position:{p}"></div><div><b>{n}</b><i>{sub_t}</i></div></div>'''
    lines = '<svg class="lines" viewBox="0 0 1200 560"><g stroke="#8a7350" stroke-width="1.4" stroke-dasharray="2 6" fill="none" stroke-linecap="round"><path d="M430 160 L500 200"/><path d="M770 160 L700 200"/><path d="M340 300 L440 300"/><path d="M860 300 L760 300"/><path d="M430 452 L500 400"/><path d="M770 452 L700 400"/></g></svg>'
    routes = ''
    cols = {'pilot':'#1d2c4d','jr':'#8f2a1c','ve':'#2a6a3a','lt':'#7a1b2a'}
    for k,lab,name,cov,col,eps in SEASONS:
        stops = ''.join(f'''<div class="stop"><div class="x{' tr' if i==len(eps)-1 else ''}">{'✕' if i==len(eps)-1 else (a.replace('Folge ','') if a!='Pilot' else 'P')}</div><span>{t}</span></div>''' for i,(a,t,_,_) in enumerate(eps))
        routes += f'''<div class="route {k}" style="--c:{cols[k]}"><div class="po"><img src="img/{cov}"><div><b>{lab}</b><i>{name}</i></div></div><div class="path">{stops}</div></div>'''
    body = f'''<div class="top"><img class="lg" src="img/logo.png"><div class="sp"></div>{ICONS}</div>
<div class="hero"></div>
<div class="rose">{lines}<div class="med"></div>{pts}</div>
<section class="map"><h2>Staffeln</h2>{routes}</section>'''
    return page("Entwurf C", css, body)

for n,f in [("a",entwurf_a),("b",entwurf_b),("c",entwurf_c)]:
    open(os.path.join(D,f"start_{n}.html"),"w").write(f())
print("ok")
