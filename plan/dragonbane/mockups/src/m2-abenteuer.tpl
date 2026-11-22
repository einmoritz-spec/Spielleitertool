<!doctype html><html lang="de"><meta charset="utf-8"><title>Dragonbane – Abenteuer</title>
<link rel="stylesheet" href="db.css">
<style>
.kt{display:flex;align-items:center;gap:16px;margin:10px var(--rand) 4px}
.kt i{flex:1;height:20px;border-style:solid;border-color:transparent}
.kt i.a{border-width:0 0 0 26px;border-image:url(img/orn/rail-l.png) 0 0 0 70 fill / 0 0 0 26px stretch}
.kt i.b{border-width:0 26px 0 0;border-image:url(img/orn/rail-r.png) 0 70 0 0 fill / 0 26px 0 0 stretch}
.halle{display:grid;grid-template-columns:560px 1fr;gap:0 60px;padding:8px var(--rand) 0}
.haupt{position:relative;padding-top:58px}
.haupt .fluegel{position:absolute;left:-30px;right:-30px;top:0;z-index:3;height:108px}
.haupt .fluegel .fm{font-size:25px}
.meta{display:flex;align-items:center;justify-content:space-between;margin-top:14px}
.meta .q{font:14px var(--f-sans);color:var(--braun)}
.meta .q b{font-family:var(--f-kopf);font-weight:normal;color:var(--jade-d)}
.weiter{font:12.5px/1 var(--f-kopf);letter-spacing:.14em;text-transform:uppercase;color:var(--stein-text);padding:11px 18px;border:9px solid transparent;border-image:url(img/orn/stein.png) 30 fill / 9px stretch;white-space:nowrap}
 .rest{display:grid;grid-template-columns:1fr;gap:14px;padding-top:44px;align-content:start}
.ab{display:grid;grid-template-columns:118px 1fr;gap:0 26px;align-items:center;cursor:pointer;padding:2px 0}
.ab .rahmen{padding:11px}
.ab .rahmen .ro,.ab .rahmen .ru{left:22px;right:22px;height:11px}.ab .rahmen .rl,.ab .rahmen .rr{top:22px;bottom:22px;width:11px}
.ab .rahmen .e1,.ab .rahmen .e2,.ab .rahmen .e3,.ab .rahmen .e4{width:32px;height:32px}
.ab .n{font:24px/1.05 var(--f-titel);color:var(--jade);text-transform:uppercase;margin:0 0 6px}
.ab .q{font:11.5px/1 var(--f-kopf);letter-spacing:.14em;text-transform:uppercase;color:var(--jade-d);margin-bottom:8px}
.ab .teile{font:15.5px/1.45 var(--f-text);color:#4a4038}
.zus{grid-column:1/-1;margin-top:10px;padding-top:16px;border-top:1px solid var(--linie);display:flex;gap:28px;align-items:center}
.zus .kap{margin-right:6px}
.zus a{font:15.5px var(--f-text);color:var(--tinte)}
</style><body>
<!--KOPF-->
<div class="kt"><i class="a"></i><span class="titel m">Abenteuer</span><i class="b"></i></div>
<div class="halle">
 <div class="haupt">
  <div class="fluegel"><div class="fl"></div><div class="fm"><span>Die Burg des Raubritters</span></div><div class="fr"></div></div>
  <div class="rahmen"><img class="bild" src="img/abenteuer/burg.webp" alt="" style="height:520px;object-fit:contain;mix-blend-mode:multiply"><!--RAHMEN--></div>
  <div class="meta"><span class="q">Regelbuch <b>S. 113</b> · 6 Orte</span><span class="weiter">Weiter · 3. Hof</span></div>
 </div>
 <div class="rest">
  <div class="ab"><div class="rahmen"><img class="bild" src="img/kap/k8-abenteuer.webp" alt=""><!--RAHMEN--></div>
   <div class="tx"><div class="n">Das Geheimnis des Drachenkaisers</div><div class="q">Abenteuerband</div><div class="teile">Außenposten · Reisen · Riddermound · Bothilds Ader · Tempel der Purpurflamme · Turm der Seufzer · Orakelhöhle · Trollspitze · …</div></div></div>
  <div class="ab"><div class="rahmen"><img class="bild" src="img/kap/k4-kampf-und-schaden.webp" alt=""><!--RAHMEN--></div>
   <div class="tx"><div class="n">Pfad des Ruhms</div><div class="q">Kampagne in drei Teilen</div><div class="teile">Der tote Wald · Tore der Macht · Herz der Finsternis</div></div></div>
  <div class="ab"><div class="rahmen"><img class="bild" src="img/kap/k5-magie.webp" alt=""><!--RAHMEN--></div>
   <div class="tx"><div class="n">Der versinkende Turm</div><div class="q">Schnellstarter</div><div class="teile">Abenteuer mit fertigen Charakteren</div></div></div>
  <div class="ab"><div class="rahmen"><img class="bild" src="img/kap/k3-fertigkeiten.webp" alt=""><!--RAHMEN--></div>
   <div class="tx"><div class="n">Arkand</div><div class="q">Stadt der Wellen und Flammen</div><div class="teile">Der Hafen · Viertel · Orte und Figuren der Stadt</div></div></div>
  <div class="zus"><span class="kap">Unterwegs</span><a>Reisen &amp; Missgeschicke</a><a>Zufallsbegegnungen</a><a>Schätze</a><a>NSC erschaffen</a></div>
 </div>
</div>
<div class="ann" style="left:150px;top:420px;max-width:330px"><b>1</b>Das laufende Abenteuer groß wie eine Kapitel-Eröffnung (Knotenrahmen + Drachenflügel-Banner). „Weiter“ springt an die zuletzt offene Stelle.</div>
<div class="ann" style="left:1040px;top:300px;max-width:340px"><b>2</b>Alle weiteren Abenteuer als gerahmte Titelbilder, mit Quelle und Teilen. Die Bilder hier sind Platzhalter aus dem Regelbuch – die echten Titelbilder kommen aus den Abenteuer-PDFs.</div>
<div class="ann" style="left:820px;top:820px;max-width:420px"><b>3</b>Was in jedem Abenteuer gebraucht wird (Reisen, Missgeschicke, Begegnungen, Schätze, NSC) als feste Zeile.</div>
</body></html>
