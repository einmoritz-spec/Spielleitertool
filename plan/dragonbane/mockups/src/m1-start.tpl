<!doctype html><html lang="de"><meta charset="utf-8"><title>Dragonbane – Start</title>
<link rel="stylesheet" href="db.css">
<style>
.wrap{display:grid;grid-template-columns:clamp(420px,36vw,520px) 1fr;gap:0 clamp(40px,4.4vw,64px);padding:6px var(--rand) 0;height:calc(100vh - 82px)}
.front{position:relative;padding-top:64px}
.front .fluegel{position:absolute;left:-34px;right:-34px;top:4px;z-index:3;height:112px}
.front .rahmen{margin-top:0;display:inline-block}
.front .rahmen img.bild{width:auto;max-width:100%;max-height:calc(100vh - 240px)}
.front{text-align:center}
.inh{display:flex;flex-direction:column;padding-top:clamp(10px,2.4vh,22px);min-width:0}
.kg{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:0 40px}
.ke{padding:clamp(8px,1.7vh,15px) 0 clamp(8px,1.7vh,15px) 26px;border-top:1px solid var(--linie);position:relative;cursor:pointer}
.ke:nth-child(-n+2){border-top:0;padding-top:4px}
.ke .kt{font:clamp(20px,1.6vw,23px)/1.05 var(--f-titel);color:var(--jade);text-transform:uppercase;margin:6px 0 5px}
.ke .ku{font:clamp(14px,1.1vw,15.5px)/1.4 var(--f-text);color:#4a4038}
.ke.on::before{content:"";position:absolute;left:-4px;top:22px;width:20px;height:20px;background:url(img/orn/knoten.png) center/contain no-repeat}
.ke:nth-child(-n+2).on::before{top:10px}
.ke.on .kt{color:var(--jade-d)}
.grp{flex-wrap:nowrap;overflow:hidden;margin-top:clamp(8px,2vh,18px);padding-top:16px;border-top:1px solid var(--linie);display:flex;align-items:center;gap:12px}
.grp .kap{margin-right:8px;white-space:nowrap}
.chip{white-space:nowrap;display:flex;align-items:center;gap:10px;height:clamp(46px,6.2vh,56px);padding:0 14px 0 6px;background:rgba(224,209,168,.5);border:1px solid rgba(75,45,27,.22);border-radius:2px}
.chip img{height:50px;width:40px}
.chip b{display:block;font:15px/1.1 var(--f-kopf);font-weight:normal;color:var(--tinte)}
.chip span{display:block;font:13px/1.2 var(--f-sans);color:var(--braun)}
.chip.neu{background:none;border-style:dashed;color:var(--jade-d);font:12px var(--f-kopf);letter-spacing:.12em;text-transform:uppercase;padding:0 16px}
.cta{margin-top:auto;margin-bottom:clamp(8px,2.4vh,22px);padding-top:10px}
.cta .fluegel{height:clamp(92px,12.8vh,116px);cursor:pointer;margin:0 30px}
.cta .fluegel .fm{font-size:30px}
.cta .zul{text-align:center;font:13px var(--f-sans);color:var(--grau);margin-top:clamp(6px,1.6vh,16px)}
.cta .zul b{font-family:var(--f-kopf);font-weight:normal;color:var(--jade-d)}
</style>
<body>
<!--KOPF-->
<div class="wrap">
 <div class="front">
  <div class="fluegel"><div class="fl"></div><div class="fm"><span>In den ältesten Zeiten</span></div><div class="fr"></div></div>
  <div class="rahmen"><img class="bild" src="img/kap/k1-in-den-aeltesten-zeiten.webp" alt="">
   <!--RAHMEN--></div>
 </div>
 <div class="inh">
  <div class="kg">
   <div class="ke on"><div class="kap">Kapitel 2<span class="s">S. 8</span></div><div class="kt">Dein Spielercharakter</div><div class="ku">Völker · Berufe · Alter &amp; Name · Attribute · Abgeleitete Werte · Heroische Talente · Ausrüstung · Erfahrung</div></div>
   <div class="ke"><div class="kap">Kapitel 3<span class="s">S. 30</span></div><div class="kt">Fertigkeiten</div><div class="ku">Würfeln · Vorteil &amp; Nachteil · Vergleichende Würfe · Kernfertigkeiten · Heroische Talente</div></div>
   <div class="ke"><div class="kap">Kapitel 4<span class="s">S. 40</span></div><div class="kt">Kampf &amp; Schaden</div><div class="ku">Runden &amp; Initiative · Aktionen · Nahkampf · Fernkampf · Schaden · Zustände · Heilung &amp; Rast</div></div>
   <div class="ke"><div class="kap">Kapitel 5<span class="s">S. 56</span></div><div class="kt">Magie</div><div class="ku">Magieschulen · Zauber · Zauber wirken · Magie lernen · Zauberliste</div></div>
   <div class="ke"><div class="kap">Kapitel 6<span class="s">S. 72</span></div><div class="kt">Ausrüstung</div><div class="ku">Rüstungen &amp; Helme · Waffen · Handelswaren · Licht &amp; Werkzeug · Dienste · Tiere</div></div>
   <div class="ke"><div class="kap">Kapitel 7<span class="s">S. 82</span></div><div class="kt">Bestiarium</div><div class="ku">Monster im Spiel · 14 Monster vom Dämon bis zur Vampirfledermaus · Gewöhnliche Tiere</div></div>
   <div class="ke"><div class="kap">Kapitel 8<span class="s">S. 100</span></div><div class="kt">Abenteuer</div><div class="ku">Reisen · Die Rolle der SL · Nichtspielercharaktere · Abenteuer erschaffen · Kampagnen</div></div>
   <div class="ke"><div class="kap">Anhang<span class="s">S. 120</span></div><div class="kt">Tabellen</div><div class="ku">Improvisierte Waffen · Schätze</div></div>
  </div>
  <div class="grp"><span class="kap">Die Gruppe</span>
   <div class="chip"><img class="fig" src="img/beruf/jaeger.webp"><div><b>Ciliel</b><span>Elf · Jägerin</span></div></div>
   <div class="chip"><img class="fig" src="img/beruf/ritter.webp"><div><b>Bertil</b><span>Mensch · Ritter</span></div></div>
   <div class="chip"><img class="fig" src="img/beruf/gelehrter.webp"><div><b>Quaksel</b><span>Ente · Gelehrter</span></div></div>
   <div class="chip neu" title="Charakter">+</div>
  </div>
  <div class="cta"><div class="fluegel"><div class="fl"></div><div class="fm"><span>Zu den Abenteuern</span></div><div class="fr"></div></div>
   <div class="zul">Zuletzt: <b>Die Burg des Raubritters</b> · 3. Hof</div></div>
 </div>
</div>
<div class="ann" style="left:150px;top:300px;max-width:330px"><b>1</b>Frontispiz wie die Kapitel-Eröffnungen im Buch: Bild im Jade-Knotenrahmen, Titel auf dem Drachenflügel-Banner. Fährt man über ein Kapitel rechts, wechselt hier Bild + Titel zur Eröffnung dieses Kapitels (sanft überblendet). Klick aufs Bild = Kapitel 1.</div>
<div class="ann" style="left:1050px;top:470px;max-width:330px"><b>2</b>Inhalt wie das Inhaltsverzeichnis des Buchs (S. 2): Kapitel in Hideout-Versalien, Unterkapitel als Zeile. Jedes Unterkapitel ist ein Link (Nachschlagen im Burger-Menü).</div>
<div class="ann" style="left:880px;top:620px;max-width:300px"><b>3</b>Die Gruppe: Charakterbögen der Runde, kleine Figur = Berufsbild aus dem Buch.</div>
<div class="ann" style="left:1080px;top:730px;max-width:300px"><b>4</b>Der Weg ins Spiel: das große Drachenflügel-Banner führt zur Abenteuer-Übersicht.</div>
<div class="ann" style="left:520px;top:12px;max-width:420px"><b>5</b>Kopfzeile Pergament, links nur das rote Logo; darunter die Jade-Leiste mit Dämonenmaske – der Kopf jeder Buchseite.</div>
</body></html>
