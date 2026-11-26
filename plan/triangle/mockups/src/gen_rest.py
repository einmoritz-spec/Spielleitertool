IC = open('icons.html').read(); Z = 'img/zeichen/'; R = 'img/regeln/full/'; T='img/regeln/thumb/'
def kopf(akz, aktiv, unter, uakt):
    tabs = ''.join(f'<a class="{"an" if t==aktiv else ""}">{t}</a>' for t in ['Handbuch','ARK','Werkzeug','Playwall'])
    u = ''.join(f'<a class="{"an" if t==uakt else ""}">{t}</a>' for t in unter)
    return f'<div class=kopf style="--akz:{akz}"><img class=logo src="{Z}logo-triangle-agency.png"><span class=pf>▼</span><nav>{tabs}</nav>{IC}</div>' + (f'<div class=unter style="--akz:{akz}">{u}</div>' if unter else '')
# ---------------- ARK: Anomalie Whisper
def erg(icon, fett, text): return f'<p class=erg><img src="{Z}{icon}.png"><span><b>{fett}</b> {text}</span></p>'
def fa(q, antw): return f'<div class=fa><p><b class=b>F:</b> {q}</p>' + ''.join(f'<p><b class=b>A:</b> {a} <span class=co><i></i><i></i><i></i>{c}</span></p>' for a,c in antw) + '</div>'
def karte(t, text, wurf, ergs, q, antw): return f'<section class=fk><div><h3>{t}</h3><p>{text} Würfle <b>{wurf}</b>.</p>{"".join(ergs)}</div>{fa(q,antw)}</section>'
anom = [('whisper','Whisper'),('catalogue','Catalogue'),('drain','Drain'),('timepiece','Timepiece'),('growth','Growth'),('gun','Gun'),('dream','Dream'),('manifold','Manifold'),('absence','Absence')]
sl = ''.join(f'<a class="{"an" if i==0 else ""}">{("<span class=zu>‹</span>" if i==0 else "")}{n}' + ('<small>Wie bitte? · Auf der Zunge · Stille</small>' if i==0 else '') + '</a>' for i,(k,n) in enumerate(anom))
arc = f'''<!doctype html><meta charset=utf-8><link rel=stylesheet href=base.css><style>
:root{{--akz:var(--blau)}}
.wrap{{display:grid;grid-template-columns:186px 430px 1fr 40px;min-height:860px}}
.sl{{padding:18px 0 0 22px;border-right:1px solid var(--linie)}}.sl a{{display:block;font:500 15px/1.2 Fig;padding:9px 12px;color:#6d6485;border-left:3px solid transparent}}
.sl a.an{{color:var(--blau);border-color:var(--blau);font-weight:700}}.sl small{{display:block;font-size:11.5px;color:#9a93ad;margin-top:3px;font-weight:400}}.sl .zu{{float:right;margin-right:12px}}
.bild{{padding:26px 10px 0 34px;position:relative}}
.bild h1{{font-size:112px;color:var(--blau);letter-spacing:-.06em;margin-left:-4px}}
.bild .wm{{font:800 22px Spartan;color:var(--blau);letter-spacing:-.03em;display:flex;align-items:flex-end;margin-top:-6px}}
.bild .wm u{{text-decoration:none;display:inline-block;width:28px;height:24px;background:var(--blau);clip-path:polygon(50% 0,100% 100%,0 100%);color:#fff;font-size:15px;text-align:center;line-height:30px;margin-right:-3px}}
.bild img.art{{width:400px;margin:-58px 0 0 -10px;display:block;position:relative}}
.bild h2{{font-size:27px;margin:8px 0 10px}}.bild p{{margin:0 0 10px;font-size:15px}}
.rechts{{padding:26px 26px 30px 16px}}
.fk{{display:grid;grid-template-columns:1fr 250px;gap:18px;padding:16px 0 18px;border-bottom:1px solid var(--linie)}}.fk:first-child{{padding-top:0}}
.fk h3{{font-size:23px;margin-bottom:6px}}.fk p{{margin:0 0 8px}}
.erg{{display:flex;gap:10px;align-items:flex-start;font-size:14.5px;line-height:1.38}}.erg img{{width:21px;flex:none;margin-top:1px}}
.fa{{background:#eef1f9;border-radius:8px;padding:12px 14px;font-size:13.5px;color:var(--blau);align-self:center}}.fa p{{margin:0 0 7px;padding-left:22px;text-indent:-22px;line-height:1.3}}
.co{{white-space:nowrap;font:700 13px Fig;display:inline-flex;gap:3px;align-items:center;text-indent:0;background:#fff;border-radius:5px;padding:2px 7px 2px 5px;margin-left:4px;border:1px solid #c6d0ea}}.co i{{width:11px;height:11px;border:1.5px solid #b8c4e6;border-radius:3px}}
.reiter{{background:var(--blau);color:#fff;position:relative}}.reiter b{{position:absolute;top:26px;left:50%;writing-mode:vertical-rl;font:700 17px Spartan;transform:translateX(-50%);white-space:nowrap;letter-spacing:-.01em}}
.reiter i{{position:absolute;bottom:54px;left:10px;border-left:10px solid transparent;border-right:10px solid transparent;border-bottom:17px solid #fff}}.reiter em{{position:absolute;bottom:22px;left:0;right:0;text-align:center;font:800 14px Spartan;font-style:normal}}
</style>{kopf('var(--blau)','ARK',['Anomalie','Realität','Kompetenz','Fragebogen','Agentenbogen'],'Anomalie')}
<div class=wrap><nav class=sl>{sl}</nav>
<div class=bild><h1>Whisper</h1><div class=wm><u>A</u>NOMALIE</div><img class=art src="{R}anomalie-whisper.webp"><h2>Ist für dich.</h2>
<p>Schöne Gefühle, die beim Aussprechen sauer wurden. Beiläufige Gespräche, die zu großen Streits eskalierten. Letzte Abschiede, die im Lärm untergingen. Whisper-Anomalien bearbeiten ihre eigene Geschichte, noch während sie erzählt wird.</p>
<p>Whisper sind Meister des Augenblicks, in dem Ton zu Information wird. Sie sind leichtsinnig und manipulativ: kein Grund zur Vorsicht, wenn man immer noch einmal von vorn anfangen darf.</p></div>
<div class=rechts>
{karte('Wie bitte?','Du darfst auf einen gesprochenen Satz mit „Wie bitte?“ antworten und der Gruppe dann sagen, was das Ziel stattdessen gesagt hat.','Präsenz',[erg('ergebnis-erfolg-dreieck','Bei Erfolg','glaubt das Ziel, der neue Satz sei das, was es gemeint hat.'),erg('ergebnis-zusatz-dreieck','Bei sechs oder mehr 3en','darfst du in der nächsten Stunde jederzeit für das Ziel sprechen.'),erg('ergebnis-fehlschlag-kreis','Bei Fehlschlag','bleibt das Ziel unbeeindruckt, und du kannst 3 Stunden lang nur mit den Wörtern des Satzes sprechen, den du ihm zugedacht hattest.')],'Wenn mich jemand unterbricht, gebe ich ihm …',[('Einen Vertrauensvorschuss.','T2'),('Meine Meinung.','P4')])}
{karte('Auf der Zunge','Öffne deinen Geist für die Gedanken von jemandem in der Nähe. Lass seine Worte deine Stimme erreichen.','Empathie',[erg('ergebnis-erfolg-dreieck','Bei Erfolg','sagst du, was das Ziel gerade am liebsten sagen würde.'),erg('ergebnis-zusatz-dreieck','Bei jeder dritten 3','darfst du eine Frage zu etwas stellen, das für das Ziel gerade wichtig ist, und bekommst vom GM eine Antwort.'),erg('ergebnis-fehlschlag-kreis','Bei Fehlschlag','gestehst du etwas, das niemand wissen soll.')],'Wenn ich irgendwo dazugehören muss, …',[('springe ich hinein und tue, als gehörte ich dazu.','A11'),('schleiche ich mich nach langer, sorgfältiger Erkundung ein.','B9')])}
{karte('Stille','Öffne den Mund und gib einen Ton von dir, dessen Frequenz die Geräusche auslöscht, die du machst.','Subtilität',[erg('ergebnis-erfolg-dreieck','Bei Erfolg','macht keine deiner Handlungen ein Geräusch, bis du erneut würfelst oder den Mund schließt.'),erg('ergebnis-zusatz-dreieck','Für jede weitere 3','kannst du die Handlungen eines weiteren Ziels verstummen lassen.'),erg('ergebnis-fehlschlag-kreis','Bei Fehlschlag','gerät deine Frequenz aus dem Gleichgewicht und verstärkt eine Stunde lang jedes deiner Geräusche.')],'Ich werde still …',[('damit andere sprechen können.','S10'),('damit meine nächsten Worte härter treffen.','S8')])}
</div><div class=reiter><b>Anomalie ▸ Whisper</b><i></i><em>S. 60</em></div></div>'''
open('ark.html','w').write(arc)
# ---------------- Werkzeug (AgencyOS)
tk = ['Verantwortung und Vorbereitung','Lebenszyklus einer Anomalie','Wo du hineinpasst','Wichtige Informationen','Fokus und Impuls','Domäne, Geschichte und Erscheinung','Chaos und Chaos-Effekte','Kleine Anomalien','Drucksituationen','Das Ende']
sl2 = ''.join(f'<a class="{"an" if i==1 else ""}">{("<span class=zu>‹</span>" if i==0 else "")}{n}</a>' for i,n in enumerate(tk))
werk = f'''<!doctype html><meta charset=utf-8><link rel=stylesheet href=base.css><style>
:root{{--akz:var(--blau)}}
.wrap{{display:grid;grid-template-columns:210px 1fr;min-height:880px;background:#1d1438 url({R}muster-augen-blau.webp) center/900px;background-blend-mode:soft-light}}
.sl{{padding:18px 0 0 22px;background:#fff;border-right:1px solid var(--linie)}}.sl a{{display:block;font:500 14.5px/1.2 Fig;padding:9px 12px;color:#6d6485;border-left:3px solid transparent}}
.sl a.an{{color:var(--blau);border-color:var(--blau);font-weight:700}}.sl .zu{{float:right;margin-right:12px}}
.desk{{padding:26px 34px 70px;position:relative}}
.fen{{background:#fff;border:2px solid #1b2f73;box-shadow:6px 6px 0 #0b0820;max-width:920px}}
.fen .tb{{background:linear-gradient(90deg,#1b2f73,#2d50a7);color:#fff;font:700 14px/30px Fig;padding:0 6px 0 10px;display:flex;gap:8px;align-items:center}}
.fen .tb i{{margin-left:auto;display:flex;gap:4px}}.fen .tb i u{{width:19px;height:19px;background:#dfe4f3;border:1.5px solid #fff;box-shadow:inset -1.5px -1.5px 0 #7a86b3;text-decoration:none;color:#1b2f73;font:700 12px/16px Fig;text-align:center}}
.fen .in{{padding:26px 34px 30px;position:relative}}
.fen h2{{font-size:34px;color:var(--rot);margin-bottom:14px}}.fen h2 span{{color:var(--blau)}}
.sp{{columns:2;column-gap:30px}}.sp p{{margin:0 0 10px;break-inside:avoid}}
mark{{background:var(--blau);color:#fff;font:700 13px Fig;padding:2px 8px;white-space:nowrap;display:inline-block;transform:rotate(-1.5deg)}}
.dia{{display:flex;align-items:center;gap:16px;margin-top:16px;justify-content:center}}
.dia div{{text-align:center}}.dia img{{height:150px;display:block}}.dia b{{font:800 22px Spartan;background:#fff;border:1.5px solid #cfcbe0;border-radius:8px;padding:5px 12px 2px;display:inline-block;margin-top:-14px;position:relative}}
.dia span{{border:1.5px solid var(--rot);border-radius:8px;padding:8px 12px;font-size:13px;width:130px;text-align:center;line-height:1.3}}.dia em{{color:var(--rot);font:800 22px Spartan;font-style:normal}}
.bud{{position:absolute;right:18px;top:300px;width:170px}}.bud p{{background:#ffe95c;border:2px solid #111;border-radius:10px;padding:8px 11px;font:500 12.5px/1.3 Fig;margin:0 0 6px;color:#111}}.bud img{{width:150px;display:block;margin-left:14px}}
.task{{position:absolute;left:0;right:0;bottom:0;height:40px;background:#dfe4f3;border-top:2px solid #fff;display:flex;align-items:center;gap:8px;padding:0 10px;font:700 13px Fig;color:#1b2f73}}
.task span{{background:#eef1f9;border:1.5px solid #fff;box-shadow:inset -1.5px -1.5px 0 #7a86b3;padding:5px 14px}}.task em{{margin-left:auto;font-style:normal;color:var(--rot);font-weight:500}}
</style>{kopf('var(--blau)','Werkzeug',['Grundlagen','Anomalien bauen','Leiten','Tabellen','Ternion City'],'Grundlagen')}
<div class=wrap><nav class=sl>{sl2}</nav><div class=desk>
<div class=fen><div class=tb>MeinHandbuch 1999: Professional Edition<span class=s style="color:#cfd8f5">S. 144</span><i><u>_</u><u>□</u><u>×</u></i></div><div class=in>
<h2>Der Lebenszyklus einer <span>Anomalie</span></h2>
<div class=sp><p>Alles beginnt mit einem einzigen Gedanken.</p><p>Für fast jeden zusammenhängenden Gedanken eines fühlenden Geistes entsteht ein subreales Wesen, ein <b>Ripple</b>. <mark>SUB-real? unverschämt</mark> Ripples werden nicht direkt in die Realität geboren: Sie existieren in einem Raum parallel dazu, den wir die <b>Lobby</b> nennen. <mark>hätte man auch irgendwie nennen können</mark></p>
<p>Stärkere Ripples fressen schwächere, ähnliche Gedanken. <mark>„fressen“, klar</mark> Irgendwann wird diese Verbindung komplex genug, um zu begreifen, dass es die Realität gibt. Das Wesen entwickelt ganz von selbst eine Obsession für etwas dort: einen <b>Fokus</b>.</p>
<p>Unweigerlich sucht es mehr Kraft, bis es erfolgreich in unsere Welt eindringen kann. <mark>wenn ein Küken schlüpft, „dringt“ es dann in den Stall ein?</mark></p>
<p>Ist ein Ripple stark genug, um allein in die Realität durchzubrechen, wird es zur <b class=b>Anomalie</b>. <mark>ja ja, Anomalien lieben es, GEHIRNE ZU FRESSEN.</mark></p></div>
<div class=dia><div><img src="{R}lebenszyklus-ripple.webp"><b>Ripple</b></div><em>→</em><span>verbindet sich mit anderen Ripples und wird stark genug, die Lobby zu verlassen</span><em>→</em><div><img src="{R}lebenszyklus-anomalie-frosch.webp"><b class=b>Anomalie</b></div><em>→</em><span>verbindet sich mit einem Menschen</span><em>→</em><div><img src="{R}lebenszyklus-hollow.webp"><b>Hollow</b></div></div>
</div></div>
<div class=bud><p>Sieht aus, als würdest du eine Anomalie bauen. Soll ich dich dabei beobachten?</p><img src="{R}buddy-05-s171.webp"></div>
<div class=task><span>▲ Arbeit</span><span>MeinHandbuch 1999</span><span>Normal AntiVirus</span><em>AgencyOS läuft im abgesicherten Modus</em></div>
</div></div>'''
open('werkzeug.html','w').write(werk)
# ---------------- Playwall
import string
codes = {'A':12,'B':11,'C':10,'D':8,'E':3,'F':11,'G':9,'H':5,'I':10,'J':4,'K':2,'L':11,'M':12,'N':3,'O':8,'P':14,'Q':3,'R':15,'S':19,'T':8,'U':4,'V':2,'W':11,'X':3,'Y':5,'Z':3}
offen = {'A1','A3','D4','T2','P4','S10','H1'}
buch = ''.join(f'<a class="{"an" if c=="D" else ""}">{c}</a>' for c in string.ascii_uppercase)
nums = ''.join(f'<a class="{"an" if n==4 else ("frei" if f"D{n}" in offen else "")}">{n}</a>' for n in range(1,9))
frei = ''.join(f'<a>{c}</a>' for c in ['A1','A3','D4','H1','P4','S10','T2'])
pw = f'''<!doctype html><meta charset=utf-8><link rel=stylesheet href=base.css><style>
:root{{--akz:var(--tinte)}}
.wrap{{display:grid;grid-template-columns:330px 1fr;min-height:880px}}
.term{{background:var(--tinte);color:#fff;padding:26px 24px;position:relative;overflow:hidden}}
.term:before{{content:"";position:absolute;left:-60px;bottom:-10px;width:260px;height:230px;background:var(--rot);clip-path:polygon(50% 0,100% 100%,0 100%)}}
.term:after{{content:"";position:absolute;left:90px;bottom:-10px;width:240px;height:210px;background:var(--blau);clip-path:polygon(50% 0,100% 100%,0 100%)}}
.halt{{display:flex;gap:12px;align-items:center;font:800 42px Spartan;letter-spacing:-.04em}}.halt img{{height:44px;filter:brightness(0) invert(1)}}
.term p{{font-size:13.5px;line-height:1.4;opacity:.85;margin:8px 0 18px}}
.code{{display:flex;gap:10px;margin-bottom:18px}}.code b{{width:74px;height:86px;background:#fff;color:var(--tinte);border-radius:10px;font:800 60px/96px Spartan;text-align:center}}.code b:last-child{{color:var(--rot)}}
.bu{{display:grid;grid-template-columns:repeat(9,1fr);gap:5px}}.bu a,.nu a{{font:700 15px/28px Spartan;text-align:center;border-radius:6px;background:#ffffff1c;padding-top:2px}}
.bu a.an{{background:#fff;color:var(--tinte)}}
.nu{{display:grid;grid-template-columns:repeat(8,1fr);gap:5px;margin-top:12px}}.nu a.an{{background:var(--rot)}}.nu a.frei{{box-shadow:inset 0 0 0 1.5px #fff8}}
.fr{{margin-top:22px;position:relative;z-index:2}}.fr h4{{font-size:15px;margin-bottom:8px;opacity:.9}}.fr a{{display:inline-block;font:700 13px Fig;border:1.5px solid #fff7;border-radius:20px;padding:3px 11px;margin:0 5px 6px 0}}
.dok{{display:grid;grid-template-columns:1fr 66px;background:#fff;position:relative;overflow:hidden}}
.dok:before{{content:"";position:absolute;left:-80px;bottom:-110px;width:420px;height:230px;background:var(--blau);border-radius:50% 60% 0 0/70% 90% 0 0}}
.in{{padding:30px 34px 40px;position:relative}}
.in h2{{font-size:36px;margin-bottom:6px}}.in>p{{max-width:640px;margin:0 0 14px}}
.rq{{display:grid;grid-template-columns:1fr 1fr;gap:16px 26px}}
.rq section{{border:1.5px solid var(--rot);border-radius:12px;padding:14px 16px;font-size:14px;line-height:1.42;background:#fff;position:relative}}
.rq h3{{font-size:19px;color:var(--rot);display:flex;justify-content:space-between;margin-bottom:6px}}.rq h3 span{{display:flex;gap:5px;align-items:center;color:var(--tinte)}}.rq h3 img{{height:17px}}
.rq img.il{{float:right;width:118px;margin:-4px -4px 4px 10px}}
.tab{{background:var(--rot);color:#fff;position:relative}}.tab em{{display:block;font:800 30px/66px Spartan;text-align:center;font-style:normal;background:#a3162a}}.tab b{{position:absolute;top:84px;left:50%;writing-mode:vertical-rl;transform:translateX(-50%);font:700 19px Spartan;white-space:nowrap}}
.tab u{{position:absolute;bottom:20px;left:0;right:0;text-align:center;text-decoration:none;font:800 13px Spartan}}
</style>{kopf('var(--tinte)','Playwall',[],'')}
<div class=wrap><div class=term><div class=halt><img src="{Z}symbol-halt-hand.png">WARTE!</div><p>Du darfst nur das Dokument öffnen, dessen Code du erhalten hast. Wer R3 sucht, sieht sich weder R2 noch R4 an.</p>
<div class=code><b>D</b><b>4</b></div><div class=bu>{buch}</div><div class=nu>{nums}</div>
<div class=fr><h4>Freigegeben</h4>{frei}</div></div>
<div class=dok><div class=in><h2>Herzlichen Glückwunsch zur Beförderung!</h2><p>Als Senior Associate hast du Zugriff auf die neuesten Produkte unserer Architekten. Diese Anforderungen stehen dir ab sofort zur Verfügung.</p>
<div class=rq>
<section><img class=il src="{R}playwall-d4-ipond.webp"><h3>iPond<span>9<img src="{Z}symbol-belobigung.png"></span></h3>Dieser unbeschriebene Ripple sieht aus wie ein Goldfisch in einem Beutel Wasser. Gib eine Qualitätssicherung aus <b>Subtilität</b> oder <b>Empathie</b> aus, um eine bis zu fünf Minuten lange Erinnerung mit allen Sinnen aufzuzeichnen.</section>
<section><h3>Gripples<span>15<img src="{Z}symbol-belobigung.png"></span></h3>Gib eine Qualitätssicherung aus <b>Dynamik</b> oder <b>Initiative</b> aus: Diese klebrigen Zehenschuhe richten dich neu aus, sodass du die nächste ebene, stabile Fläche als „unten“ behandelst – an Hauswänden, Decken oder auf fahrenden Fahrzeugen.</section>
<section><h3>Der Türsteher<span>6<img src="{Z}symbol-belobigung.png"></span></h3>Diese ungewöhnlich weiche Actionfigur federt nach jedem Schaden zurück. Gib eine Qualitätssicherung aus <b>Präsenz</b> oder <b>Beharrlichkeit</b> aus und stelle sie in eine Tür: Der Raum dahinter ist gesperrt.</section>
<section><img class=il src="{R}playwall-d4-anglervision.webp"><h3>AnglerVision<span>6<img src="{Z}symbol-belobigung.png"></span></h3>Dieses anglerfischartige Wesen trägt einen kleinen Projektor an einem Fortsatz auf der Stirn. Gib eine Qualitätssicherung aus <b>Doppelzüngigkeit</b> oder <b>Aufmerksamkeit</b> aus, um bis zu neun Bilder zu projizieren.</section>
</div></div><div class=tab><em>D4</em><b>Senior Associate</b><u>S. 213</u></div></div></div>'''
open('playwall.html','w').write(pw)
