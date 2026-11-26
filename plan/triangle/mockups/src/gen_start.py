IC = open('icons.html').read()
Z = 'img/zeichen/'; R = 'img/regeln/full/'; T = 'img/regeln/thumb/'; V = 'img/vault/full/'
anom = ['whisper','catalogue','drain','timepiece','growth','gun','dream','manifold','absence']
anomN = ['Whisper','Catalogue','Drain','Timepiece','Growth','Gun','Dream','Manifold','Absence']
real = ['caretaker','overbooked','pursued','star','struggling','newborn','romantic','backbone','creature']
realN = ['Caretaker','Overbooked','Pursued','Star','Struggling','Newborn','Romantic','Backbone','Creature']
komp = ['pr','forschung-entwicklung','barista','ceo','praktikant','totengraeber','empfang','hotline','clown']
kompN = ['PR','R&D','Barista','CEO','Intern','Gravedigger','Reception','Hotline','Clown']
def grid(pre, ids, ns):
    return '<div class="g9">' + ''.join(f'<a><i style="background-image:url({T}{pre}-{i}.webp)"></i><span>{n}</span></a>' for i, n in zip(ids, ns)) + '</div>'
mis = [('01-springs-eternal','Springs Eternal','#9c609c'),('02-dead-quiet','Dead Quiet','#111'),('03-rom-dump','ROM Dump','#183c78'),('04-zbarro-641','ZBARRO #641','#c40c18'),('05-bower-street','Bower Street','#243078'),('06-gridhog','GRIDHOG','#e8791c'),('07-hollow-suit','Hollow Suit','#18483c'),('08-weird-dog','Weird Dog','#782424'),('09-planet-providence','Planet Providence','#3c246c'),('10-murder-at-gruntley-manor','Murder at Gruntley Manor','#b00c18'),('11-blame-it-on-the-trains','Blame it on the Trains','#0c5448'),('12-nosedive','Nosedive','#e43084')]
strip = ''.join(f'<a class="{"auf" if i==2 else ""}" style="--c:{c};background-image:url({V}{k}-titel.webp)"><em>{i+1:02d}</em>' + (f'<span><b>{n}</b><small>Christian Sorrell</small></span>' if i==2 else '') + '</a>' for i,(k,n,c) in enumerate(mis))
html = f'''<!doctype html><meta charset=utf-8><link rel=stylesheet href=base.css><style>
.hero{{height:560px;background:url({R}zentrale-lobby-doppelseite.webp) center 62%/cover;position:relative}}
.hero:after{{content:"";position:absolute;inset:0;background:linear-gradient(#2a0a12aa,#0000 26%,#0000 60%,#fff 100%)}}
.hero .wort{{position:absolute;left:50%;top:46%;transform:translate(-50%,-50%);width:560px;z-index:2;filter:brightness(0) invert(1) drop-shadow(0 6px 26px #5a0010aa)}}
.akten{{display:grid;grid-template-columns:repeat(3,1fr);gap:26px;padding:0 54px;margin-top:-74px;position:relative;z-index:3}}
.akte{{background:#fff;border-radius:4px;box-shadow:0 10px 40px #2a1b4526;overflow:hidden}}
.akte .bild{{height:236px;position:relative;overflow:hidden;background:#fff}}
.akte h2{{position:absolute;left:26px;bottom:20px;font-size:38px;color:#fff;z-index:2;line-height:.92}}
.akte h2:after{{content:"";display:block;width:230px;height:4px;background:#fff;margin-top:12px}}
.a1 .bild:before{{content:"";position:absolute;left:-150px;right:-40px;bottom:-4px;top:10px;background:var(--rot);clip-path:polygon(50% 0,100% 100%,0 100%)}}
.a1 .bild img{{position:absolute;right:20px;top:18px;width:46px}}
.a2 .bild{{background:var(--rot)}}
.a2 .bild:before{{content:"SEHR GUT, IDIOT.";position:absolute;left:-30px;top:30px;width:480px;background:var(--blau);color:#fff;font:800 40px/1.5 Spartan;letter-spacing:-.04em;transform:rotate(-11deg);padding-left:60px;white-space:nowrap}}
.a2 .bild:after{{content:"";position:absolute;right:-70px;bottom:-10px;width:170px;height:150px;background:#fff;clip-path:polygon(50% 0,100% 100%,0 100%)}}
.a2 h2{{text-shadow:3px 3px 0 var(--blau)}}
.a3 .bild i{{position:absolute;bottom:-4px;top:10px;width:300px;clip-path:polygon(50% 0,100% 100%,0 100%)}}
.a3 h2{{left:26px}}
.akte ul{{list-style:none;margin:0;padding:18px 26px 22px;columns:2;column-gap:18px;font:500 14.5px/1.25 Fig}}
.akte li{{padding:5px 0 5px 16px;position:relative;break-inside:avoid}}
.akte li:before{{content:"";position:absolute;left:0;top:10px;border-top:4.5px solid transparent;border-bottom:4.5px solid transparent;border-left:7px solid var(--c)}}
.arc{{margin:54px 54px 0;display:grid;grid-template-columns:repeat(3,1fr);gap:26px}}
.arc section{{border-top:6px solid var(--c);padding-top:30px}}
.arc h3{{font-size:34px;color:var(--c);display:flex;align-items:baseline;line-height:1}}
.arc h3 u{{text-decoration:none;display:inline-block;width:50px;height:43px;background:var(--c);clip-path:polygon(50% 0,100% 100%,0 100%);color:#fff;font-size:24px;text-align:center;line-height:64px;margin-right:-3px;align-self:flex-end;position:relative;top:-18px}}
.g9{{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-top:14px}}
.g9 a{{background:var(--flieder);border-radius:10px;padding:8px 6px 7px;text-align:center}}
.g9 i{{display:block;height:92px;background:center/contain no-repeat}}
.g9 span{{font:700 14px/1 Spartan;letter-spacing:-.01em;display:block;margin-top:6px}}
.vault{{margin-top:60px;background:#17111f url({V}sternenhimmel-riss.webp) left/cover;padding:38px 54px 46px;color:#fff}}
.vault header{{display:flex;align-items:flex-end;gap:18px;margin-bottom:20px}}
.vault header img{{height:44px;filter:brightness(0) invert(1)}}
.strip{{display:flex;height:330px;border-radius:4px;overflow:hidden}}
.strip a{{flex:1;background:center/cover;position:relative;border-top:7px solid var(--c)}}
.strip a.auf{{flex:4.4}}
.strip em{{position:absolute;left:8px;top:6px;font:800 19px Spartan;font-style:normal;color:#fff;text-shadow:0 1px 6px #000}}
.strip span{{position:absolute;left:0;right:0;bottom:0;padding:44px 16px 14px;background:linear-gradient(#0000,#000d)}}
.strip b{{font:800 30px/1 Spartan;letter-spacing:-.03em;display:block}}.strip small{{font:500 13px Fig;opacity:.8}}
.space{{margin-top:16px;display:flex;align-items:center;background:#e9e4ea;color:var(--tinte);border-radius:4px;height:96px;overflow:hidden;position:relative}}
.space:before{{content:"";width:170px;height:150px;background:#d95560;clip-path:polygon(50% 0,100% 100%,0 100%);margin:40px 26px 0 30px;flex:none}}
.space b{{font:800 25px/1.02 Spartan;letter-spacing:-.03em;text-transform:uppercase}}
.space mark{{background:#fff;color:var(--rot);font:800 25px Spartan;letter-spacing:-.04em;padding:2px 10px 0;margin-left:10px;transform:rotate(-3deg);display:inline-block;text-transform:none}}
</style>
<div class="kopf klar"><img class=logo src="{Z}logo-triangle-agency.png"><span class=pf>▼</span>{IC}</div>
<div class=hero><img class=wort src="{Z}logo-triangle-agency.png"></div>
<div class=akten>
 <a class="akte a1" style="--c:var(--rot)"><div class=bild><img src="{Z}symbol-handbuch.png"><h2>Handbuch für<br>Außendienst</h2></div>
  <ul><li>Was ist Triangle Agency?</li><li>Unsere Mission</li><li>Einsätze</li><li>Anomalien</li><li>Würfeln</li><li>Chaos</li><li>Die Agency fragen</li><li>Schaden</li><li>Konflikte</li><li>Arbeit und Leben</li><li>Anforderungen</li><li>Einsatzbericht</li></ul></a>
 <a class="akte a2" style="--c:var(--blau)"><div class=bild><h2>Werkzeug der<br>Geschäftsleitung</h2></div>
  <ul><li>Vorbereitung</li><li>Lebenszyklus einer Anomalie</li><li>Anomalien bauen</li><li>Chaos-Effekte</li><li>Kleine Anomalien</li><li>Ermittlungen</li><li>Figuren</li><li>Fraktionen</li><li>Morgenbesprechung</li><li>Beurteilung</li><li>Beispieleinsatz</li><li>Ternion City</li></ul></a>
 <a class="akte a3" style="--c:var(--tinte)"><div class=bild><i style="left:190px;background:var(--gelb)"></i><i style="left:110px;background:var(--blau)"></i><i style="left:-130px;width:420px;background:var(--rot)"></i><h2>Dokumente hinter<br>der Playwall</h2></div>
  <ul style="columns:1"><li>Code eingeben</li><li>Freigegebene Dokumente</li><li>Einsatzbericht A1</li></ul></a>
</div>
<div class=arc>
 <section style="--c:var(--blau)"><h3><u>A</u>NOMALIE</h3>{grid('anomalie',anom,anomN)}</section>
 <section style="--c:var(--gelb)"><h3><u>R</u>EALITÄT</h3>{grid('realitaet',real,realN)}</section>
 <section style="--c:var(--rot)"><h3><u>K</u>OMPETENZ</h3>{grid('kompetenz',komp,kompN)}</section>
</div>
<div class=vault><header><img src="{Z}logo-the-vault.png"></header>
 <div class=strip>{strip}</div>
 <a class=space><b>Du bist im Weltraum<br>und alles ist</b><mark>völlig in Ordnung.</mark></a>
</div>'''
open('start.html','w').write(html)
