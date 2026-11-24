<!doctype html><html lang="de"><meta charset="utf-8"><title>Dragonbane – Abenteuer-Tafel</title>
<link rel="stylesheet" href="db.css">
<style>
.zeit{display:flex;align-items:center;gap:14px;margin-right:12px;font:11.5px/1 var(--f-kopf);letter-spacing:.12em;text-transform:uppercase;color:#9b8c76}
.zeit .ta{display:flex;gap:12px}
.zeit .ta span{padding:4px 0;border-bottom:2px solid transparent;cursor:pointer}
.zeit .ta span.on{color:var(--jade-d);border-color:var(--jade-d)}
.zeit .vt{display:flex;align-items:center;gap:8px;padding-left:16px;border-left:1px solid var(--linie);color:var(--jade-d)}
.zeit .vt button{width:22px;height:22px;border:1px solid rgba(0,96,77,.35);border-radius:50%;font:14px/1 var(--f-kopf);color:var(--jade-d)}
.zeit .vt b{font:20px/1 var(--f-titel);color:var(--jade);min-width:18px;text-align:center;font-weight:normal}
.tafel{display:grid;grid-template-columns:470px 1fr 330px;gap:0 44px;padding:14px var(--rand) 0;height:calc(100vh - 132px)}
.plan{position:relative;width:470px}
.plan img{width:470px;height:auto;display:block;filter:saturate(.92)}
.pin{position:absolute;width:28px;height:28px;margin:-14px 0 0 -14px;border-radius:50%;background:var(--jade-d);color:var(--stein-text);display:grid;place-items:center;
  font:14px/1 var(--f-kopf);box-shadow:0 0 0 2px rgba(243,238,230,.9),0 2px 6px rgba(0,0,0,.35);cursor:pointer}
.pin.on{width:36px;height:36px;margin:-18px 0 0 -18px;background:var(--perg);color:var(--jade);font-size:18px;box-shadow:0 0 0 3px var(--jade-d),0 2px 8px rgba(0,0,0,.4)}
.orte{display:grid;grid-template-columns:1fr 1fr;gap:2px 16px;margin-top:14px}
.orte div{display:flex;align-items:baseline;gap:10px;padding:6px 8px;font:15.5px/1.2 var(--f-text);cursor:pointer;border-radius:2px}
.orte div b{font:14px var(--f-kopf);color:var(--jade-d);width:14px;font-weight:normal}
.orte div.on{background:var(--perg-ton)}
.orte div.on span{color:var(--jade);font-family:var(--f-kopf)}
.ort{overflow:hidden;padding-top:4px}
.ort .titel{margin:0 0 16px}
.rechts{display:flex;flex-direction:column;gap:10px;padding-top:24px}
.rechts .nsc{margin-bottom:14px}
.zu{height:44px;padding:0 14px;font:13px/1 var(--f-kopf);letter-spacing:.14em;text-transform:uppercase;color:var(--braun);display:flex;align-items:center;border:10px solid transparent;border-image:url(img/orn/pergament-karte.png) 26 fill / 8px stretch;cursor:pointer}
.zu .s{margin-left:auto}
.zu.st{color:var(--stein-text);border-image:url(img/orn/stein.png) 30 fill / 10px stretch}
.zu.st .s{color:#9cc3b6}
</style>
<body>
<!--KOPF-->
<div class="tabs"><button class="tab">Lage</button><button class="tab on">Die Burg</button><button class="tab">Figuren</button><button class="tab">Tabellen</button>
 <div class="sp"></div>
 <div class="zeit"><div class="ta"><span>Morgen</span><span class="on">Tag</span><span>Abend</span><span>Nacht</span></div>
  <div class="vt">Viertel <button>−</button><b>3</b><button>+</button></div></div>
 <!--STIFT-->
</div>
<div class="tafel">
 <div>
  <div class="plan"><img class="mul" src="img/abenteuer/burg-karte.webp" alt="">
   <span class="pin" style="left:22.5%;top:30.3%">1</span><span class="pin" style="left:53.9%;top:63.5%">2</span><span class="pin on" style="left:56.2%;top:55.1%">3</span>
   <span class="pin" style="left:41.9%;top:48.5%">4</span><span class="pin" style="left:67.9%;top:47%">5</span><span class="pin" style="left:67%;top:35.1%">6</span></div>
  <div class="orte"><div><b>1</b><span>Alte Straße</span></div><div><b>4</b><span>Großer Saal</span></div><div><b>2</b><span>Torhaus</span></div><div><b>5</b><span>Keller</span></div><div class="on"><b>3</b><span>Hof</span></div><div><b>6</b><span>Turm</span></div></div>
 </div>
 <div class="ort">
  <div class="titel m">3. Hof<span class="s">S. 117</span></div>
  <div class="vorlesen">Die zerfallenen Mauern der Burg ragen rings um euch auf und umschließen einen Hof voller Felsbrocken und Schutt. In der Mitte reckt sich eine knorrige alte Eiche in den Himmel. In der nordöstlichen Ecke führt eine Steintreppe zu einem baufälligen Turm hinauf. Im Westen steht eine Tür zu einem Steingebäude an der Westmauer offen. Im Osten liegt eine hölzerne Luke im Boden.</div>
  <ul class="st">
   <li><b>Die Eiche:</b> Die längst abgestorbene Eiche dient den Goblins als Ausguck; von hier überfallen sie eindringende Abenteurer. Über ihre Äste gelangen die Goblins zwischen den Burgmauern und anderen Orten hin und her, ohne den Boden zu betreten.</li>
   <li class="rot"><b>Die versteckten Goblins:</b> Haben die Spielercharaktere die Falle im Torhaus (Ort 2) ausgelöst, liegen die Goblins im Hinterhalt. Sie warten, bis die Charaktere einen Ort in der Burg erkundet haben und in den Hof zurückkehren, und greifen dann aus den Ästen an. Jeder Spielercharakter würfelt <span class="fs">Wahrnehmung</span> – wer scheitert, ist überrascht und handelt in der ersten Kampfrunde nicht. Die Goblins handeln alle im selben Zug und teilen sich eine Initiativkarte.</li>
   <li class="rot weg"><b>Schatz:</b> Klettern die Spielercharaktere auf die Eiche, sehen sie etwas in einem Loch im Stamm glitzern. Hier haben die Goblins Beute für unerwartete Ausgaben versteckt. Würfelt einmal auf den Schatztabellen (S. 121).</li>
  </ul>
 </div>
 <div class="rechts">
  <div class="karte nsc"><div class="band">Goblins</div>
   <div class="zl drei"><span><b>Bewegung:</b> 10</span><span><b>Schadensbon.:</b> –</span><span><b>TP:</b> 9</span></div>
   <div class="zl"><b>Rüstung:</b> Leder (1)</div>
   <div class="zl"><b>Fertigkeiten:</b> Wahrnehmung 10, Ausweichen 10, Heimlichkeit 12</div>
   <div class="zl"><b>Waffen:</b> Kurzbogen (Fertigkeitswert 12, Schaden W10), Kurzschwert (Fertigkeitswert 10, Schaden W10)</div>
   <div class="kr u"><i></i><u></u><i></i></div>
  </div>
  <div class="zu">Jaldo<span class="s">S. 117</span></div>
  <div class="zu">Grunta<span class="s">S. 118</span></div>
  <div class="zu">Der Raubritter<span class="s">S. 118</span></div>
  <div class="zu st">Die ewige Wacht<span class="s">S. 118</span></div>
  <div class="zu">Zufallsereignisse · W6<span class="s">S. 115</span></div>
 </div>
</div>
<div class="ann" style="left:70px;top:420px;max-width:330px"><b>1</b>Plan der Burg (S. 116) ungeschnitten, Original-Nummern als anklickbare Jade-Plaketten. Klick auf eine Nummer oder einen Ort darunter öffnet den Ort in der Mitte. Rot bleibt Gefahren und Geheimnissen vorbehalten.</div>
<div class="ann" style="left:560px;top:250px;max-width:300px"><b>2</b>Vorlesetext ohne Beschriftung, nur leicht getönt. Einträge mit ✦ wie im Buch: Teal = Beschreibung, Rot = Falle / Hinterhalt / Schatz. Klick auf einen roten Eintrag = erledigt (grau).</div>
<div class="ann" style="left:1080px;top:470px;max-width:300px"><b>3</b>Rechts nur, was an diesem Ort auftaucht: Werteblock als Pergament-Karte mit Totenkopf-Band (wie JALDO im Buch). Alle anderen Karten zugeklappt; Steinkasten-Inhalte (Die ewige Wacht) als grüne Leiste.</div>
<div class="ann" style="left:880px;top:30px;max-width:330px"><b>4</b>Zeit wie im Buch: vier Tagesabschnitte und Viertel (je Viertel in der Burg ein Zufallsereignis, S. 115). Kein Würfel-Tool.</div>
</body></html>
