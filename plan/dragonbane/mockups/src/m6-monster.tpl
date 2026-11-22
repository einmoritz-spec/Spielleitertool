<!doctype html><html lang="de"><meta charset="utf-8"><title>Dragonbane – Riesenspinne</title>
<link rel="stylesheet" href="db.css">
<style>
.md{display:grid;grid-template-columns:520px 1fr;gap:0 52px;padding:10px var(--rand) 0;height:calc(100vh - 132px)}
.bild{display:flex;flex-direction:column;align-items:center;gap:34px;padding-top:6px}
.bild img{width:520px;height:auto}
.wk{width:400px;font-size:16px}
.wk .zl{display:flex;align-items:center;gap:12px;padding:7px 2px}
.wk .zl>b{font-family:var(--f-kopf);font-weight:normal;width:120px}
.wk .tp{margin-left:auto}
.rt .kz{display:flex;align-items:flex-start;gap:28px;margin-bottom:12px}
.rt .titel{white-space:nowrap}
.rt p{font-size:16px;line-height:1.47;margin-bottom:40px}
.werte{display:flex;align-items:center;gap:0;margin:8px 0 34px}
.werte .karte{flex:1;padding:10px 16px;display:flex;justify-content:space-between;align-items:center}
.werte .karte span b{font-family:var(--f-kopf);font-weight:normal}
.tp{display:flex;align-items:center;gap:8px;font:11px var(--f-kopf);letter-spacing:.14em;text-transform:uppercase;color:var(--tp)}
.tp button{width:24px;height:24px;border-radius:50%;border:1px solid rgba(184,45,41,.45);color:var(--tp);font:15px/1 var(--f-kopf)}
.tp b{font:26px/1 var(--f-titel);font-weight:normal;color:var(--tp);min-width:34px;text-align:center}
.tp i{font:13px var(--f-sans);color:var(--grau);font-style:normal}
.angr{position:relative;padding-top:6px}
.angr .band{position:absolute;left:50%;top:-24px;transform:translateX(-50%);font:12.5px/1 var(--f-kopf);letter-spacing:.16em;text-transform:uppercase;color:var(--stein-text);
  height:30px;display:flex;align-items:center;padding:0 26px;border-style:solid;border-width:0 14px;border-image:url(img/orn/steinband.png) 0 40 fill / 0 14px stretch;white-space:nowrap}
.angr .band::before,.angr .band::after{content:"";position:absolute;top:1px;width:30px;height:28px;background:center/contain no-repeat}
.angr .band::before{left:-38px;background-image:url(img/orn/knoten-l.png)}.angr .band::after{right:-38px;background-image:url(img/orn/knoten-r.png)}
.angr .linie{position:absolute;left:0;right:0;top:-12px;height:6px;border-top:2px solid var(--jade-d);opacity:.55}
table.w6{font-size:14.3px}
table.w6 td{padding:5px 8px}
.zur{position:absolute;left:48px;top:140px;font:12px var(--f-kopf);letter-spacing:.14em;text-transform:uppercase;color:var(--jade-d)}
</style><body>
<!--KOPF-->
<div class="tabs"><button class="tab">Spielercharakter</button><button class="tab">Fertigkeiten</button><button class="tab">Kampf &amp; Schaden</button><button class="tab">Magie</button><button class="tab">Ausrüstung</button><button class="tab on">Bestiarium</button><button class="tab">Abenteuer</button><button class="tab">Tabellen</button><div class="sp"></div></div>
<div class="md">
 <div class="bild"><img class="fig vig" src="img/monster/riesenspinne.webp" alt="">
  <div class="wk karte"><div class="kr o"><i></i><u></u><i></i></div>
   <div class="zl"><b>Grimmigkeit</b><span>2</span></div><div class="zl"><b>Größe</b><span>Normal</span></div><div class="zl"><b>Bewegung</b><span>24</span></div><div class="zl"><b>Rüstung</b><span>–</span></div>
   <div class="zl"><b>TP</b><span>36</span><div class="tp"><button>−</button><b>22</b><button>+</button></div></div>
   <div class="kr u"><i></i><u></u><i></i></div></div>
 </div>
 <div class="rt">
  <div class="kz"><span class="titel">Riesenspinne<span class="s">S. 89</span></span></div>
  <p>Riesenspinnen sind gefräßige Räuber, die man leider überall auf der Welt antreffen kann. Es zieht sie an dunkle, feuchte Orte, doch auf der Jagd nach lebendem Fleisch sind sie überall – in Wäldern und Höhlen ebenso wie in Gebirgen und verfallenen Städten. Besonders listige Exemplare bauen ihre Nester sogar unter beliebten Gasthäusern oder bei unterirdischen Bibliotheken und Schatzkammern. Alte Weibchen werden so groß wie ein Haus, die meisten sind etwa so groß wie eine gut genährte Kuh. Riesenspinnen sind klüger, als sie aussehen; in manchen Gegenden gelten ältere Weibchen als Orakel oder Halbgöttinnen.</p>
  <div class="angr"><div class="linie"></div><div class="band">Monsterangriffe</div>
  <table class="w6"><tr><th>W6</th><th>Angriff</th></tr>
   <tr><td>1</td><td><b>Mandibeln!</b> Die gezackten Mandibeln der Spinne zischen wie Krummsäbel durch die Luft. Der Angriff verursacht 2W8 Hiebschaden.</td></tr>
   <tr class="weg"><td>2</td><td><b>Reißender Angriff!</b> Die ausgehungerte Spinne stürzt sich auf die Spielercharaktere und schlägt mit ihren haarigen, mit Widerhaken besetzten Beinen um sich. Alle Spielercharaktere im Umkreis von 2 Metern erleiden je W8 Stichschaden.</td></tr>
   <tr><td>3</td><td><b>Hypnotische Augen!</b> Das monströse Spinnentier starrt die Spielercharaktere mit einer grauenhaften Vielzahl von Augen an. Alle Opfer im Umkreis von 10 Metern müssen einen <span class="fs">Wil</span>-Wurf schaffen, um der Angst zu widerstehen.</td></tr>
   <tr><td>4</td><td><b>Giftstachel!</b> Die Spinne hebt ihr Hinterteil und sticht einen Spielercharakter mit einem Giftstachel: W10 Stichschaden; wer mindestens 1 Schaden erleidet, wird mit lähmendem Gift der Stärke 16 vergiftet. Der Angriff kann pariert werden.</td></tr>
   <tr><td>5</td><td><b>Netzangriff!</b> Die Spinne richtet ihre Augen auf den Spielercharakter mit der höchsten <span class="fs">Stä</span> und spuckt klebriges Netz auf ihn. Das Opfer würfelt <span class="fs">Ausweichen</span> (keine Aktion); bei Misserfolg ist es gefangen und kann sich nicht bewegen …</td></tr>
   <tr><td>6</td><td><b>Rammangriff!</b> Mit einem gewaltigen Satz wirft die Riesenspinne ihren massigen Körper gegen einen Spielercharakter. Der Angriff verursacht 2W6 Wuchtschaden und wirft das Opfer zu Boden.</td></tr>
  </table></div>
 </div>
</div>
<div class="ann" style="left:120px;top:250px;max-width:320px"><b>1</b>Großes Buchbild links, ungeschnitten; der gemalte Hintergrund läuft weich ins Pergament aus. Esc / ← zurück zur Übersicht.</div>
<div class="ann" style="left:470px;top:560px;max-width:300px"><b>2</b>Werteblock als Pergament-Karte mit Jade-Leisten wie im Buch. In der TP-Zeile ein TP-Zähler für den laufenden Kampf (rot wie die TP-Leiste des Bogens).</div>
<div class="ann" style="left:1060px;top:840px;max-width:330px"><b>3</b>Monsterangriffe unter dem Stein-Band wie im Buch; Klick auf eine Zeile = schon benutzt (grau).</div>
</body></html>
