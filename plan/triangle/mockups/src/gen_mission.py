IC = open('icons.html').read(); Z = 'img/zeichen/'; V = 'img/vault/full/'
CSS = '''
.mbar{display:flex;align-items:stretch;height:46px;padding:0 22px;background:var(--m2);gap:4px;border-bottom:var(--mline)}
.mbar a{font:var(--tabf);padding:0 16px;line-height:46px;color:var(--mtab);position:relative;letter-spacing:var(--tabls)}
.mbar a.an{color:var(--makt)}.mbar a.an:after{content:"";position:absolute;left:10px;right:10px;bottom:0;height:3px;background:var(--makt)}
.mbar .z{margin-left:auto;display:flex;gap:10px;align-items:center}
.zz{display:flex;align-items:center;gap:7px;font:800 19px Spartan;color:var(--mtab);padding:4px 10px;border-radius:20px;border:1.5px solid var(--zline)}
.zz img{height:18px}.zz small{font:500 11px Fig;opacity:.75}.zz i{font:500 15px Fig;opacity:.6;font-style:normal}
.wrap{display:grid;grid-template-columns:186px 1fr 318px;min-height:900px;background:var(--bg)}
.orte{padding:18px 0 0 22px;border-right:1px solid var(--line)}
.orte a{display:block;font:500 14.5px/1.2 Fig;padding:9px 12px;color:var(--soft);border-left:3px solid transparent}
.orte a.an{color:var(--akz);border-color:var(--akz);font-weight:700}
.orte a small{display:block;font-size:11.5px;color:var(--soft);opacity:.75;margin-top:3px;font-weight:400}
.orte .zu{float:right;margin-right:12px;color:var(--soft)}
main{padding:24px 30px 40px;min-width:0}main .s{text-shadow:none}
main h2{font:var(--h2);color:var(--h2c);letter-spacing:var(--h2ls);text-shadow:var(--h2sh);margin-bottom:10px}
main h3{font:var(--h3);color:var(--h3c);letter-spacing:var(--h2ls);margin:0 0 6px;text-shadow:var(--h3sh)}
main p{margin:0 0 10px;max-width:740px}
.zwei{display:grid;grid-template-columns:1fr 1fr;gap:26px;margin-top:18px}
.hw{margin-top:10px}
.hw .kop{display:flex;gap:9px;align-items:center;font:700 14px/1.2 Fig;margin-bottom:8px}.hw .kop img{height:26px}
.hw div.k{background:var(--card);border-radius:var(--rad);padding:9px 12px;margin-bottom:6px;font-size:14.5px;line-height:1.4;border-left:3px solid var(--kc)}
.hw div.k.weg{opacity:.38;border-color:#aaa}
aside{padding:22px 22px 30px 4px}
.chaos{border:2px solid var(--tinte2);border-radius:var(--rad2);overflow:hidden;background:var(--card)}
.chaos h4{font:var(--tabf);background:var(--tinte2);color:var(--chh);padding:9px 12px 7px;letter-spacing:var(--tabls)}
.chaos .z{display:grid;grid-template-columns:54px 1fr;border-top:1px solid var(--line);font-size:12.6px;line-height:1.33}
.chaos .z:nth-child(odd){background:var(--str)}
.chaos .z b{font:800 19px Spartan;display:flex;align-items:center;gap:4px;padding-left:9px}.chaos .z b img{height:13px}
.chaos .z span{padding:7px 9px 7px 0}.chaos .z strong{display:block;font:700 13.5px Spartan;color:var(--akz)}
.ziele{margin-top:14px;border:1.5px solid var(--akz);border-radius:var(--rad2);padding:12px 14px;font-size:13.5px;background:var(--card)}
.ziele h4{font:var(--tabf);color:var(--akz);margin-bottom:6px}
.ziele p{margin:5px 0;display:flex;gap:8px}.ziele img{height:17px;flex:none;margin-top:1px}
'''
def page(name, skin, kopfcol, tabs, aktiv, chaos, orte, main, side, extra='', oi=0):
    t = ''.join(f'<a class="{"an" if x==aktiv else ""}">{x}</a>' for x in tabs)
    o = ''.join(f'<a class="{"an" if i==oi else ""}">{("<span class=zu>‹</span>" if i==0 else "")}{a}{"<small>"+b+"</small>" if b else ""}</a>' for i,(a,b) in enumerate(orte))
    return f'''<!doctype html><meta charset=utf-8><link rel=stylesheet href=base.css><style>{CSS}{skin}{extra}</style>
<div class=kopf style="--akz:{kopfcol}"><img class=logo src="{Z}logo-triangle-agency.png"><span class=pf>▼</span>{IC}</div>
<div class=mbar>{t}<div class=z><span class=zz><img src="{Z}symbol-chaos-wirbel.png" style="filter:var(--wf)"><i>−</i>{chaos}<i>+</i><small>Chaos</small></span><span class=zz><i>−</i>0<i>+</i><small>Lose Enden</small></span><svg viewBox="0 0 24 24" width=19 height=19 fill=none stroke="currentColor" stroke-width=1.8 style="color:var(--mtab);opacity:.7;margin-left:6px"><path d="M4 20l1-4L16 5l3 3L8 19z"/></svg></div></div>
<div class=wrap><nav class=orte>{o}</nav><main>{main}</main><aside>{side}</aside></div>'''
def chaos(rows, titel='Chaos-Effekte'):
    return f'<div class=chaos><h4>{titel}</h4>' + ''.join(f'<div class=z><b>{n}<img src="{Z}symbol-chaos-wirbel.png"></b><span><strong>{a}</strong>{b}</span></div>' for n,a,b in rows) + '</div>'
def hw(icon, kopf, items, weg=()):
    return f'<div class=hw><div class=kop><img src="{Z}{icon}.png">{kopf}</div>' + ''.join(f'<div class="k{" weg" if i in weg else ""}">{x}</div>' for i,x in enumerate(items)) + '</div>'
TABS = ['Profil','Vor der Ermittlung','Ermittlung','Begegnung','Nachspiel']
# ---------- 1 Springs Eternal
skin1 = ''':root{--akz:#9c609c;--m2:#f6eff6;--mtab:#6b4a70;--makt:#9c609c;--mline:1px solid #e3d3e4;--zline:#d5bdd6;--tabf:700 15px/46px Spartan;--tabls:-.01em;--bg:#fff;--line:#eadfeb;--soft:#7b6a80;
--h2:800 34px/1 Spartan;--h2c:#9c609c;--h2ls:-.035em;--h2sh:none;--h3:800 21px/1.1 Spartan;--h3c:#2f7f8f;--h3sh:none;--card:#f7f2f8;--rad:8px;--rad2:14px;--kc:#9c609c;--tinte2:#2a1b45;--chh:#fff;--str:#f3eef5;--wf:none}
.chaos h4{line-height:1!important}.ziele h4{line-height:1!important}.banner{height:150px;border-radius:14px;background:url(img/vault/full/01-springs-eternal-titel.webp) center 38%/cover;margin-bottom:20px;position:relative}
.banner img{position:absolute;right:16px;bottom:-34px;height:150px;transform:rotate(5deg);box-shadow:0 6px 20px #0003}'''
m1 = f'''<div class=banner><img src="{V}01-springs-eternal-werbung-return-to-youth.webp"></div>
<h2>Auf der Avenue<span class=s>S. 13</span></h2>
<p>Unter dem grün-goldenen Vordach des Tryptik Café führen Menschen ungewöhnlich laute, heftige Gespräche – drei von ihnen weinen ganz offen. Eine Frau hockt auf dem Boden und starrt mitten auf der Straße in eine Pfütze. Vor FOUNT, dem Luxus-Medispa gegenüber, sammelt sich eine kleine Menge; in der Tür streiten ein Mann und eine Frau.</p>
<div class=zwei><div><h3>Maya und die Pfütze</h3><p>Ohne auf den Verkehr zu achten, hockt Maya Ng (sie/ihr) auf der Straße, betrachtet ihr Spiegelbild in einer Pfütze und drückt an Wangen und Hals herum.</p><p><b>Sobald die Agenten sie bemerken,</b> verschwindet sie in der Pfütze – einer einsperrenden Kleinen Anomalie. Halten die Agenten sie nicht auf, nimmt sie weitere Menschen mit: 15 Lose Enden.</p>
{hw('hinweis-gewoehnlich','Das erfahren Agenten, wenn sie Maya aus der Kleinen Anomalie retten:',['Ihr Gesicht kommt einem seltsam bekannt vor.','Maya benutzt Aquifer-Produkte seit dem Verkaufsstart vor ein paar Wochen.','Sie wollte die Produkte zurückgeben: Freunde sagten ihr, sie sehe nicht mehr ganz wie sie selbst aus.','Eingesperrt war sie in einem Regenwald voller Leben. Sie ist froh, frei zu sein – und vermisst es trotzdem.'],weg=(0,))}</div>
<div><h3>Tryptik Café</h3><p>Eine modische Mischung aus modern und altmodisch. Tagesangebot: der Vergissmeinnicht, ein leuchtend blauer Latte mit Schmetterlingserbsenblüte. Fast alle trinken ihn.</p>
{hw('hinweis-gewoehnlich','Das erfahren Agenten, wenn sie unbeholfen lauschen oder sich mit einer Barista anfreunden:',['An drei Tischen entschuldigen sich Menschen unter Tränen für Winzigkeiten – immer aus Angst, die andere Person für immer zu verlieren.','Fünf ältere Männer breiten einen Stapel Fotos aus: unscharfe Bilder von Staubsaugern, Kühlschränken, Wänden.','Eine Freundesgruppe macht ein Selfie, löscht es und macht es neu – wieder und wieder.','Der Blütenzusatz des Vergissmeinnicht stammt von FOUNT gegenüber.'])}</div></div>'''
s1 = chaos([(2,'Auffrischen','Ein gewöhnliches Ziel sieht Jahre jünger aus – und ein wenig mehr wie Serena Evermore.'),(2,'Verderben','Pflanzen winden sich zu greifenden Ranken; die Luft wird schwül und schwer.'),(4,'Manifestieren','Lange Greifpflanzen dringen aus Boden, Rohren und Gullys.'),(4,'Ausgleichen','Ein gewöhnliches Ziel vergisst etwas Wichtiges.'),(5,'Anziehen','Ein Gruppenrabatt lockt einen Bus aus der Seniorenresidenz an.'),(6,'Ausdehnen','Die Anomalie wächst durch das Abwassernetz von Ternion City.')]) + f'''<div class=ziele><h4>Optionale Ziele</h4><p><img src="{Z}symbol-belobigung.png"><span><b>+3 Belobigungen</b> für alle, die ein liebes Wort über Pflanzen sagen.</span></p><p><img src="{Z}symbol-verweis.png"><span><b>+1 Verweis</b> jedes Mal, wenn du dein Spiegelbild ansiehst.</span></p></div>'''
o1 = [('Auf der Avenue','Maya und die Pfütze · Tryptik Café'),('Vor FOUNT','Türblockade · Verdeckter Ermittler'),('Im FOUNT','Empfang'),('Tiefer hinein','Die Menschen im FOUNT'),('Die Klinik','Beratung · Behandlung'),('Das Spa','Hauptbecken · Rotlichtraum'),('Produktentwicklung','Labor · Gewächshaus')]
open('mission1.html','w').write(page('m1',skin1,'#9c609c',TABS,'Ermittlung',7,o1,m1,s1))
# ---------- 3 ROM Dump
skin3 = ''':root{--akz:#f2c21a;--m2:#102a5c;--mtab:#bcd0ff;--makt:#ffd83a;--mline:3px solid #ffd83a;--zline:#3b5aa0;--tabf:700 16px/46px Pix;--tabls:.02em;--bg:#0c1f47;--line:#24407e;--soft:#9fb4e6;
--h2:400 26px/1.3 P2;--h2c:#ffd83a;--h2ls:0;--h2sh:3px 3px 0 #b3401a;--h3:700 22px/1.1 Pix;--h3c:#7fe3ff;--h3sh:2px 2px 0 #06122e;--card:#102a5c;--rad:0;--rad2:0;--kc:#ffd83a;--tinte2:#ffd83a;--chh:#0c1f47;--str:#0f2755;--wf:brightness(0) invert(1)}
body{color:#e8eeff;image-rendering:pixelated}.kopf{border-bottom:0}.chaos h4,.ziele h4{line-height:1!important}.chaos{border-width:3px}.chaos .z b{color:#fff}.chaos .z b img{filter:brightness(0) invert(1)}
.dlg{border:3px solid #fff;outline:3px solid #0c1f47;box-shadow:0 0 0 6px #7fe3ff55;background:#081736;padding:16px 20px;font:400 21px/1.25 VT;color:#fff;margin:6px 0 20px;max-width:760px}
.voy{background:#fff;padding:12px 16px 4px;display:inline-block;border:3px solid #ffd83a;box-shadow:5px 5px 0 #06122e}.voy img{width:540px;display:block;image-rendering:auto}.voy p{display:grid;grid-template-columns:repeat(4,1fr);text-align:center;font:400 19px/1.1 VT;color:#183c78;margin:6px 0 8px;max-width:none}
.hw div.k{border-left-width:4px}.ziele{border-width:3px}.orte a.an{background:#102a5c}'''
m3 = f'''<h2>BOSS RUSH<span class=s style="font-family:Fig">S. 54</span></h2>
<div class=dlg>Das Schloss, viel zu gewaltig für das Grundstück der Hiles, ragt hinter dem Farmhaus auf. Verpixelte Dunkelheit hängt am Horizont: Die Spielwelt jenseits stirbt langsam mit der Batterie. ▼</div>
<div class=zwei style="grid-template-columns:580px 1fr;align-items:start"><div class=voy><img src="voy.png"><p><span>3 BEDROHUNG<br>10 STABILITÄT</span><span>4 BEDROHUNG<br>2 STABILITÄT</span><span>2 BEDROHUNG<br>4 STABILITÄT</span><span>3 BEDROHUNG<br>3 STABILITÄT</span></p></div>
<div><h3>Rundenkampf</h3><p>Im Boss Rush kann die Anomalie allen die Rundenregeln aus <i>Voyagers of Heroia</i> aufzwingen. Die Voyagers handeln zuerst und greifen als Einheit an; danach stimmen die Agenten eine gemeinsame Strategie ab.</p>
{hw('hinweis-anomal','Spezialtechniken der Voyagers:',['<b>Beschwörungen</b> – einmalige Elementarangriffe wie Feuerballregen.','<b>Taktiken</b> – zwei Voyagers kombinieren Fähigkeiten oder Waffen.','<b>Gegenstände</b> – heilen anhaltende Effekte; dazu 3 Allheiltränke (je 1 Stabilität für alle).'])}</div></div>'''
s3 = chaos([(2,'Verderben','Ein Dickicht aus Kabeln versperrt alle Ein- und Ausgänge.'),(2,'Echo','Etwas, das ein Ziel gesagt hat, hallt endlos in seinen Ohren.'),(4,'Manifestieren','Ein Gegner aus dem Spiel tritt in die Wirklichkeit.'),(5,'Anziehen','Eine Beziehung taucht am Farmhaus auf.'),(6,'Ausdehnen','Die Spielwelt frisst sich weiter ins County.'),(8,'Versetzen','Agenten landen in einem Verlies der Spielwelt.')],'CHAOS-EFFEKTE') + f'''<div class=ziele><h4>OPTIONALE ZIELE</h4><p><img src="{Z}symbol-belobigung.png"><span><b>+3 Belobigungen</b> für alle, die einen Spielstand anlegen.</span></p></div>'''
o3 = [('Boss Rush','Die Voyagers · Rundenkampf'),('Jailbreak','Verlies · Silberschlüssel'),('Endspiel','Der König')]
open('mission3.html','w').write(page('m3',skin3,'#183c78',TABS,'Begegnung',11,o3,m3,s3))
# ---------- 12 Nosedive
skin12 = ''':root{--akz:#e43084;--m2:#fff35c;--mtab:#7a1c4c;--makt:#e43084;--mline:0;--zline:#e4308455;--tabf:800 15.5px/46px Spartan;--tabls:-.01em;--bg:#fff;--line:#f6d3e3;--soft:#8b5a73;
--h2:900 38px/1 Spartan;--h2c:#e43084;--h2ls:-.045em;--h2sh:none;--h3:800 21px/1.1 Spartan;--h3c:#f08a1c;--h3sh:none;--card:#fff7fb;--rad:16px;--rad2:18px;--kc:#e43084;--tinte2:#2a1b45;--chh:#fff35c;--str:#fdf1f7;--wf:none}
.chaos h4,.ziele h4{line-height:1!important}.opf{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin:14px 0 22px}
.opf div{border-top:5px solid var(--c);border-radius:4px 4px 16px 16px;background:#fff7fb;padding:12px 14px;font-size:14px;line-height:1.4}.opf b{display:block;font:800 17px Spartan;color:var(--c)}.opf i{display:block;font-size:12.5px;margin-bottom:6px;opacity:.8}
.tr{display:flex;align-items:center;gap:0;margin:5px 0 12px}.tr u{text-decoration:none;width:27px;height:27px;border-radius:8px;border:2px solid var(--c);font:700 12px/23px Fig;text-align:center;color:var(--c);margin-right:7px;position:relative}
.tr u.v{background:var(--c);color:#fff}.tr u:after{content:"";position:absolute;right:-9px;top:10px;width:7px;height:2px;background:var(--c)}.tr u:last-child{border-radius:50%;background:var(--c)}.tr u:last-child:after{display:none}
.tn{font:800 16px Spartan;color:var(--c)}
.chat{position:absolute;right:24px;top:26px;width:250px;transform:rotate(3deg)}.chat p{margin:0 0 5px;padding:7px 13px;border-radius:15px;font:500 13px Fig;color:#fff;width:fit-content;max-width:210px}
main{position:relative}'''
def tr(n,c,v): return f'<div class=tn style="--c:{c}">{n}</div><div class=tr style="--c:{c}">' + ''.join(f'<u class="{"v" if i<v else ""}">{i+1 if i<9 else ""}</u>' for i in range(10)) + '</div>'
m12 = f'''<h2>Einsatzbesprechung<span class=s>S. 202</span></h2>
<p style="max-width:420px">Die Agency hat Berichte über eine Reihe bizarrer Stromverletzungen in mehreren Krankenhäusern von Ternion City erhalten. Sie vermutet eine Anomalie dahinter. Die Agenten bekommen die Adressen aller Opfer.</p>
<div class=chat><p style="background:#9d7bd0">Ich habe eine Ankündigung</p><p style="background:#ffe14a;color:#b8720a;margin-left:40px">ENDLICH ist jemand wach!!!</p><p style="background:#4aa3e0">hat wer Lust auf Snacks?</p><p style="background:#f29ac0;color:#7a1c4c">Klau nicht bei deinem Date, Wodge.</p></div>
<div class=opf><div style="--c:#3aa655"><b>Cass Gilmore</b><i>sie/ihr · Foxglove Apartments</i>27, Werbetexterin. Keine sichtbaren Verletzungen – kann seit dem Schlag „von einer Autotür“ aber nichts Leitendes mehr berühren.</div><div style="--c:#9d7bd0"><b>Gabriel „Gabe“ Knox</b><i>er/ihm · Downtown Apartments</i>22, Pizzabote. Perfekt symmetrische Verbrennungen an den Armen, dazu ein blaues Auge wie nach einer Schlägerei.</div><div style="--c:#f08a1c"><b>Julie Bennett</b><i>sie/ihr · Ternion General Hospital</i>21, Influencerin. Ihr Handy überhitzte dramatisch und verbrannte ihr die Hände. Online bekannt als „Julie Bean“.</div></div>
<div class=zwei><div><h3>Sonderregeln</h3><p>Die Hosts außer Leyden sind instabile Resonanten. Machen sie mit ihren Fähigkeiten Menschen glücklich, kostet das kein Chaos. Setzen sie sie anders ein – vor allem im Kampf –, geben sie Chaos auf ihrer eigenen Leiste aus.</p><p><b>Ist eine Leiste voll,</b> überwältigt die Anomalie den Host: sofortige Verwandlung, 21 Chaos in den Pool.</p></div>
<div>{tr('Feast','#e43084',0)}{tr('Venice','#9d7bd0',1)}{tr('Wodge','#4aa3e0',3)}{tr('Mimi','#3aa655',6)}</div></div>'''
s12 = chaos([(1,'Kleiner Effekt','Fast automatisch. Kann 1 Schaden verursachen.'),(2,'Großer Effekt','Braucht Konzentration. Kann 3 Schaden verursachen.'),(3,'Extremer Effekt','Bringt den Körper an seine Grenzen. Kann 5 Schaden verursachen.')],'Kosten der Hosts') + f'''<div class=ziele><h4>Optionale Ziele</h4><p><img src="{Z}symbol-belobigung.png"><span><b>+1 Belobigung</b>, wenn du erkennst, ob etwas Glitzerndes Gold ist (höchstens 3).</span></p><p><img src="{Z}symbol-belobigung.png"><span><b>+6 Belobigungen</b> für die Teilnahme an einem choreografierten Tanz.</span></p><p><img src="{Z}symbol-verweis.png"><span><b>+1 Verweis</b> für jeden selbstabwertenden Satz.</span></p></div>'''
o12 = [('Morgenbesprechung',''),('Einsatzbesprechung','Opfer · Sonderregeln'),('Optionale Ziele','')]
open('mission12.html','w').write(page('m12',skin12,'#e43084',TABS,'Vor der Ermittlung',4,o12,m12,s12,oi=1))
