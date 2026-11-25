#!/usr/bin/env python3
# Varianten von Entwurf A („Premiere“): schrumpfender Bild-Header, kleiner Pilot, neue Abschnitts-Kacheln
import os
from gen import AREAS, SEASONS, ICONS, page
D = os.path.dirname(os.path.abspath(__file__))
STORY = {"jr": "Der Fluch von El Dorado", "ve": "Die verschollene Expedition", "lt": "Elf On-Demand-Episoden"}
FULLSUB = [
 ["Broken Compass", "Wo und wann", "Grundpfeiler des Abenteuers", "Wie man spielt", "Gemeinsam spielen", "Wie im Kino", "Folge dem Kompass"],
 ["Wer bist du?", "Abenteurerbogen", "Wie Abenteurer entstehen", "Expertise", "Gegenstände, Waffen, Ausrüstung", "Jung, alt, echt", "Der Zufallsabenteurer"],
 ["Schwierigkeit", "Sich stellen", "Erfolge", "Scheitern", "Wie fühlst du dich?"],
 ["Glück", "Glücksmünzen", "Fallen", "Feinde", "Prügelei", "Schießerei", "Das Ende eines Abenteurers"],
 ["Die Reise beginnt", "Episoden", "Staffel", "Der Schatz", "Dein Rivale", "Weltuntergangsuhr", "Fahrzeuge", "Hardmode"],
 ["Technologie", "Übernatürliches", "Schätze", "Extras"],
]

# ---- gemeinsamer Kopf: großes Bild, schiebt sich beim Scrollen zur Kopfzeile zusammen ----
def head(img, pos):
    css = f'''
body{{background:#100d0a;padding-top:560px}}
.hd{{position:fixed;left:0;right:0;top:0;height:560px;z-index:10;overflow:hidden;background:#100d0a}}
.hd .bg{{position:absolute;inset:0;background:url(img/{img}) {pos}/cover;will-change:transform}}
.hd .sh{{position:absolute;inset:0;background:linear-gradient(180deg,rgba(16,13,10,.55),transparent 22%,transparent 62%,rgba(16,13,10,.85))}}
.hd .dk{{position:absolute;inset:0;background:#100d0a;opacity:0}}
.hd .lg{{position:absolute;left:40px;bottom:36px;height:118px;transform-origin:left bottom;filter:drop-shadow(0 4px 18px rgba(0,0,0,.6))}}
.hd .icons{{position:absolute;right:22px;top:18px;color:#f3ead7}}
'''
    js = '''<script>
(function(){var hd=document.querySelector('.hd'),bg=hd.querySelector('.bg'),dk=hd.querySelector('.dk'),lg=hd.querySelector('.lg');
var H=560,M=58;function f(){var y=scrollY,h=Math.max(M,H-y),t=(h-M)/(H-M);hd.style.height=h+'px';
bg.style.transform='scale('+(1+.06*(1-t))+')';dk.style.opacity=(1-t)*.96;
var s=.32+.68*t;lg.style.transform='scale('+s+')';lg.style.left=(22+18*t)+'px';lg.style.bottom=(10+26*t)+'px';}
addEventListener('scroll',function(){requestAnimationFrame(f)},{passive:true});f();})();</script>'''
    html = f'<header class="hd"><div class="bg"></div><div class="sh"></div><div class="dk"></div><img class="lg" src="img/logo.png">{ICONS}</header>'
    return css, html, js

# ---- Staffeln (für alle Varianten gleich, Pilot klein) ----
SEAS_CSS = '''
.seas{padding:44px 40px 70px;color:#efe6d2}
.sh2{font:800 15px Fut;letter-spacing:.32em;text-transform:uppercase;margin:0 0 22px 4px;display:flex;align-items:center;gap:16px;color:#bfb39b}
.sh2:after{content:"";flex:1;height:1px;background:currentColor;opacity:.35}
.pil{display:grid;grid-template-columns:260px 1fr;height:96px;margin:0 0 30px;background:#0b0f17;overflow:hidden;box-shadow:inset 0 0 0 1px rgba(255,255,255,.06)}
.pil .im{background:url(img/a_pilot.jpg) 50% 30%/cover}
.pil div:last-child{display:flex;flex-direction:column;justify-content:center;padding:0 26px}
.pil b{font:800 11px Fut;letter-spacing:.3em;text-transform:uppercase;color:#9fb6d8}
.pil i{font:italic 22px Cas;color:#fff;margin-top:3px}
.row{display:grid;grid-template-columns:104px 1fr;gap:22px;margin-bottom:26px;align-items:center}
.post img{width:104px;height:158px;object-fit:cover;display:block;box-shadow:0 12px 30px -10px #000}
.post .k{font:700 10.5px Fut;letter-spacing:.22em;text-transform:uppercase;color:#bfa77a;margin-top:9px}
.post .t{font:italic 15px/1.15 Cas;color:#f3ead7;margin-top:2px}
.strip{background:#050403;padding:16px 0;position:relative;display:flex}
.strip:before,.strip:after{content:"";position:absolute;left:0;right:0;height:10px;background:radial-gradient(circle at 9px 5px,#2d2620 3.2px,transparent 3.6px) 0 0/22px 10px repeat-x}
.strip:before{top:3px}.strip:after{bottom:3px}
.fr{flex:1;min-width:0;margin:0 4px;position:relative;height:140px;background-size:cover;border-radius:2px;overflow:hidden}
.fr:after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,transparent 40%,rgba(0,0,0,.85))}
.fr span{position:absolute;left:10px;right:8px;bottom:8px;z-index:1}
.fr b{display:block;font:700 10px Fut;letter-spacing:.2em;text-transform:uppercase;color:#e7c98a}
.fr i{display:block;font:italic 14px/1.2 Cas;color:#fff;margin-top:2px}
.fr.hov{flex:2.2}
.row.lt .strip{flex-wrap:wrap;row-gap:12px}
.row.lt .fr{flex:0 0 calc(16.66% - 8px);height:104px}
.row.lt .fr i{font-size:12.5px}
'''
def seas_html():
    rows = '<div class="pil"><div class="im"></div><div><b>Pilot · Ins Auge des Sturms</b><i>Der Zorn des Quetzalcoatl</i></div></div>'
    for k,lab,name,cov,col,eps in SEASONS:
        if k == 'pilot': continue
        frs = ''.join(f'''<div class="fr{' hov' if (k=='jr' and i==2) else ''}" style="background-image:url(img/{im});background-position:{pos}"><span><b>{a}</b><i>{t}</i></span></div>''' for i,(a,t,im,pos) in enumerate(eps))
        rows += f'''<div class="row {k}"><div class="post"><img src="img/{cov}"><div class="k">{lab}</div><div class="t">{name}</div></div><div class="strip">{frs}</div></div>'''
    return f'<section class="seas"><div class="sh2">Staffeln</div>{rows}</section>'

PAPER = 'background:linear-gradient(rgba(240,234,222,.6),rgba(240,234,222,.6)),url(img/paper_c.jpg) center/cover;'

# ---- A1: Kapitel-Plakate (hohe Plakate, schräger Farbabschluss, große Abschnittsnummer) ----
def a1():
    hc, hh, js = head("a_cave.jpg", "50% 42%")
    css = hc + SEAS_CSS + f'''
.areas{{{PAPER}padding:44px 40px 50px}}
.ag{{display:grid;grid-template-columns:repeat(6,1fr);gap:12px}}
.pl{{position:relative;height:430px;overflow:hidden;background-size:cover;box-shadow:0 16px 28px -16px rgba(30,18,8,.8)}}
.pl:before{{content:"";position:absolute;left:-2px;right:-2px;bottom:-2px;height:190px;background:var(--c);clip-path:polygon(0 22%,100% 0,100% 100%,0 100%)}}
.pl .no{{position:absolute;right:10px;bottom:110px;font:900 96px/1 Fut;color:rgba(255,255,255,.13)}}
.pl .tx{{position:absolute;left:14px;right:12px;bottom:16px;color:#fff}}
.pl .tx small{{font:700 10px Fut;letter-spacing:.28em;text-transform:uppercase;opacity:.75}}
.pl .tx b{{display:block;font:900 13.5px/1.05 Fut;text-transform:uppercase;margin:4px 0 8px;padding-bottom:8px;border-bottom:1.5px solid rgba(255,255,255,.55)}}
.pl .tx span{{display:block;font:italic 13px/1.4 Cas;opacity:.92}}
'''
    tiles = ''.join(f'''<div class="pl" style="--c:var(--{c});background-image:url(img/{im});background-position:{pos}"><div class="no">{i+1}</div><div class="tx"><small>Abschnitt {i+1}</small><b>{n}</b><span>{" · ".join(sub[:3])}</span></div></div>''' for i,(n,_,c,im,pos,sub) in enumerate(AREAS))
    body = hh + f'<section class="areas"><div class="ag">{tiles}</div></section>' + seas_html() + js
    return page("A1 Kapitel-Plakate", css, body)

# ---- A2: Eröffnungs-Doppelseiten (Bild + Farbtafel mit Kompass-Wasserzeichen, 3×2) ----
def a2():
    hc, hh, js = head("a_temple.jpg", "50% 40%")
    css = hc + SEAS_CSS + f'''
.areas{{{PAPER}padding:44px 40px 50px}}
.ag{{display:grid;grid-template-columns:1fr 1fr 1fr;gap:16px}}
.dp{{display:grid;grid-template-rows:170px auto;background:var(--c);box-shadow:0 16px 28px -16px rgba(30,18,8,.8);position:relative;overflow:hidden}}
.dp .im{{background-size:cover}}
.dp .op{{padding:16px 18px 18px;color:#fff;position:relative}}
.dp .op:before{{content:"";position:absolute;right:-50px;bottom:-60px;width:190px;height:190px;background:url(img/compassw.png) center/contain no-repeat;opacity:.1}}
.dp .op small{{font:700 10px Fut;letter-spacing:.28em;text-transform:uppercase;opacity:.7}}
.dp .op b{{display:block;font:900 22px/1 Fut;text-transform:uppercase;margin:4px 0 10px;padding-bottom:10px;border-bottom:1.5px solid rgba(255,255,255,.5)}}
.dp ul{{list-style:none;columns:2;column-gap:14px;font:13px/1.55 Cas;opacity:.95}}
.dp li{{break-inside:avoid}}
'''
    tiles = ''.join(f'''<div class="dp" style="--c:var(--{c})"><div class="im" style="background-image:url(img/{im});background-position:{pos}"></div><div class="op"><small>Abschnitt {i+1}</small><b>{n}</b><ul>{"".join(f"<li>{x}</li>" for x in FULLSUB[i][:6])}</ul></div></div>''' for i,(n,_,c,im,pos,sub) in enumerate(AREAS))
    body = hh + f'<section class="areas"><div class="ag">{tiles}</div></section>' + seas_html() + js
    return page("A2 Eröffnungsseiten", css, body)

# ---- A3: Bild-Fächer (sechs Bildstreifen über die volle Breite, aktiver Streifen klappt auf) ----
def a3():
    hc, hh, js = head("a_ships.jpg", "50% 45%")
    css = hc + SEAS_CSS + f'''
.areas{{{PAPER}padding:44px 40px 50px}}
.fan{{display:flex;height:400px;gap:4px;box-shadow:0 18px 30px -16px rgba(30,18,8,.8)}}
.sl{{flex:1;position:relative;background-size:cover;overflow:hidden;transition:flex .4s}}
.sl:after{{content:"";position:absolute;inset:0;background:linear-gradient(180deg,transparent 40%,rgba(0,0,0,.75))}}
.sl .bar{{position:absolute;left:0;right:0;bottom:0;height:6px;background:var(--c);z-index:2}}
.sl .tx{{position:absolute;left:16px;right:14px;bottom:20px;z-index:1;color:#fff}}
.sl .tx small{{font:700 10px Fut;letter-spacing:.28em;text-transform:uppercase;opacity:.75}}
.sl .tx{{left:auto;right:auto;width:100%;bottom:22px;display:flex;justify-content:center}}
.sl .tx small{{display:none}}
.sl .tx b{{display:block;font:900 20px/1 Fut;text-transform:uppercase;writing-mode:vertical-rl;transform:rotate(180deg);letter-spacing:.06em}}
.sl ul{{display:none}}
.sl.on{{flex:3.2}}
.sl.on:after{{background:linear-gradient(90deg,transparent 30%,rgba(0,0,0,.2) 45%,var(--c) 72%)}}
.sl.on .tx{{left:auto;right:26px;width:300px;bottom:auto;top:50%;transform:translateY(-50%);display:block}}
.sl.on .tx small{{display:block}}
.sl.on .tx b{{writing-mode:horizontal-tb;transform:none;letter-spacing:.01em;font-size:25px;margin:6px 0 12px;padding-bottom:12px;border-bottom:1.5px solid rgba(255,255,255,.55)}}
.sl.on ul{{display:block;list-style:none;columns:2;column-gap:16px;font:14px/1.6 Cas}}
'''
    tiles = ''.join(f'''<div class="sl{' on' if i==2 else ''}" style="--c:var(--{c});background-image:url(img/{im});background-position:{pos}"><div class="tx"><small>Abschnitt {i+1}</small><b>{n}</b><ul>{"".join(f"<li>{x}</li>" for x in FULLSUB[i])}</ul></div><div class="bar"></div></div>''' for i,(n,_,c,im,pos,sub) in enumerate(AREAS))
    body = hh + f'<section class="areas"><div class="fan">{tiles}</div></section>' + seas_html() + js
    return page("A3 Bild-Fächer", css, body)

for n,f in [("a1",a1),("a2",a2),("a3",a3)]:
    open(os.path.join(D,f"start_{n}.html"),"w").write(f())
print("ok")
