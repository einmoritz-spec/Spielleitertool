<!doctype html><html lang="de"><meta charset="utf-8"><title>Dragonbane – Charakterbogen</title>
<link rel="stylesheet" href="db.css">
<style>
.cb{display:grid;grid-template-columns:250px 618px 1fr;gap:0 40px;padding:2px var(--rand) 0;align-items:start}
.bogen{position:relative;width:618px;height:800px;background:url(img/bogen-leer.webp) center/100% 100%;box-shadow:0 2px 14px rgba(60,40,20,.28)}
.bogen span,.bogen b,.bogen svg.bg{text-shadow:none;position:absolute;white-space:nowrap;font-weight:normal}
.bogen .dia{position:absolute;width:7px;height:7px;margin:-3.5px 0 0 -3.5px;background:var(--jade-d);transform:rotate(45deg);outline:1.5px solid #fff}
.grp{padding-top:14px}
.grp a{display:flex;align-items:center;gap:12px;padding:8px 10px;border-radius:2px;cursor:pointer}
.grp a img{width:46px;height:58px}
.grp a b{display:block;font:16px/1.1 var(--f-kopf);font-weight:normal}
.grp a span{font:13px var(--f-sans);color:var(--braun)}
.grp a.on{background:rgba(224,209,168,.45)}
.knopf{display:block;margin:18px 10px 0;padding:10px 12px;text-align:center;font:12px var(--f-kopf);letter-spacing:.14em;text-transform:uppercase;color:var(--stein-text);border:8px solid transparent;border-image:url(img/orn/stein.png) 30 fill / 8px stretch}
.knopf.l{background:none;border:1px dashed rgba(0,96,77,.45);color:var(--jade-d);padding:12px}
.ref{padding-top:40px;display:flex;flex-direction:column;gap:34px}
.ref .karte{font-size:14.5px;line-height:1.42}
.ref .karte .kt2{font:13px/1 var(--f-kopf);letter-spacing:.14em;text-transform:uppercase;margin-bottom:8px;display:flex}
.ref .karte .kt2 .s{margin-left:auto}
.ref .karte ul{list-style:none;margin:0 0 6px}
.ref .karte li::before{content:"✦ ";color:var(--jade-d)}
.bogen span[style*="#ffffff"]{text-shadow:0 0 3px #1d5a49,0 0 2px #1d5a49}
</style><body>
<!--KOPF-->
<div class="cb">
 <div class="grp">
  <a class="on"><img class="fig" src="img/beruf/jaeger.webp"><div><b>Ciliel</b><span>Elf · Jägerin</span></div></a>
  <a><img class="fig" src="img/beruf/ritter.webp"><div><b>Bertil</b><span>Mensch · Ritter</span></div></a>
  <a><img class="fig" src="img/beruf/gelehrter.webp"><div><b>Quaksel</b><span>Ente · Gelehrter</span></div></a>
  <a><img class="fig" src="img/beruf/dieb.webp"><div><b>Mira</b><span>Halbling · Diebin</span></div></a>
  <span class="knopf">Als PDF speichern</span><span class="knopf l">+ Charakter</span>
 </div>
 <div class="bogen">
<span style="left:33.6px;top:23.2px;font:6.54px/1 var(--f-halb);color:#231f20">SPIELER</span>
<span style="left:33.6px;top:56.7px;font:6.54px/1 var(--f-halb);color:#231f20">BERUF</span>
<span style="left:33.6px;top:73.8px;font:6.54px/1 var(--f-halb);color:#231f20">SCHWÄCHE</span>
<span style="left:158.2px;top:190.1px;transform:translateX(-50%);font:6.04px/1 var(--f-titel);color:#ffffff;letter-spacing:-.02em">ERSCHÖPFT</span>
<span style="left:214.7px;top:190.1px;transform:translateX(-50%);font:6.04px/1 var(--f-titel);color:#ffffff;letter-spacing:-.02em">KRÄNKELND</span>
<span style="left:273.4px;top:190.1px;transform:translateX(-50%);font:6.04px/1 var(--f-titel);color:#ffffff;letter-spacing:-.02em">BENOMMEN</span>
<span style="left:331.4px;top:190.1px;transform:translateX(-50%);font:6.04px/1 var(--f-titel);color:#ffffff">WÜTEND</span>
<span style="left:388.9px;top:190.1px;transform:translateX(-50%);font:6.04px/1 var(--f-titel);color:#ffffff;letter-spacing:-.02em">VERÄNGSTIGT</span>
<span style="left:445.7px;top:190.1px;transform:translateX(-50%);font:5.74px/1 var(--f-titel);color:#ffffff">VERZAGT</span>
<span style="left:137.1px;top:40.0px;font:6.54px/1 var(--f-halb);color:#231f20">ALTER</span>
<span style="left:158.2px;top:142.6px;transform:translateX(-50%);font:6.54px/1 var(--f-halb);color:#231f20">STÄ</span>
<span style="left:215.3px;top:142.6px;transform:translateX(-50%);font:6.54px/1 var(--f-halb);color:#231f20">KON</span>
<span style="left:273.1px;top:142.6px;transform:translateX(-50%);font:6.54px/1 var(--f-halb);color:#231f20">GEW</span>
<span style="left:330.2px;top:142.6px;transform:translateX(-50%);font:6.54px/1 var(--f-halb);color:#231f20">INT</span>
<span style="left:388.1px;top:142.6px;transform:translateX(-50%);font:6.54px/1 var(--f-halb);color:#231f20">WIL</span>
<span style="left:444.7px;top:142.6px;transform:translateX(-50%);font:6.54px/1 var(--f-halb);color:#231f20">CHA</span>
<span style="left:33.6px;top:40.0px;font:6.54px/1 var(--f-halb);color:#231f20">VOLK</span>
<span style="left:54.6px;top:259.5px;font:7.55px/1 var(--f-titel);color:#ffffff">TALENTE & ZAUBER</span>
<span style="left:54.6px;top:225.8px;font:7.55px/1 var(--f-titel);color:#ffffff">SCHADENSBON. STÄ</span>
<span style="left:239.2px;top:225.8px;font:7.55px/1 var(--f-titel);color:#ffffff">SCHADENSBON. GEW</span>
<span style="left:423.8px;top:225.8px;font:7.55px/1 var(--f-titel);color:#ffffff">BEWEGUNG</span>
<span style="left:455.1px;top:259.3px;font:7.55px/1 var(--f-titel);color:#ffffff">INVENTAR</span>
<span style="left:286.9px;top:258.8px;font:7.55px/1 var(--f-titel);color:#ffffff">FERTIGKEITEN</span>
<span style="left:218.3px;top:283.0px;font:8.05px/1 var(--f-sans);color:#231f20">Akrobatik <small style="font-size:.8em;margin-left:.25em">(GEW)</small></span>
<span style="left:218.3px;top:296.9px;font:8.05px/1 var(--f-sans);color:#231f20">Wahrnehmung <small style="font-size:.8em;margin-left:.25em">(INT)</small></span>
<span style="left:218.3px;top:310.9px;font:8.05px/1 var(--f-sans);color:#231f20">Feilschen <small style="font-size:.8em;margin-left:.25em">(CHA)</small></span>
<span style="left:218.3px;top:325.0px;font:8.05px/1 var(--f-sans);color:#231f20">Tierkunde <small style="font-size:.8em;margin-left:.25em">(INT)</small></span>
<span style="left:218.3px;top:339.0px;font:8.05px/1 var(--f-sans);color:#231f20">Täuschen <small style="font-size:.8em;margin-left:.25em">(CHA)</small></span>
<span style="left:218.3px;top:352.9px;font:8.05px/1 var(--f-sans);color:#231f20">Wildniskunde <small style="font-size:.8em;margin-left:.25em">(INT)</small></span>
<span style="left:218.3px;top:366.9px;font:8.05px/1 var(--f-sans);color:#231f20">Handwerk <small style="font-size:.8em;margin-left:.25em">(STÄ)</small></span>
<span style="left:218.3px;top:380.9px;font:8.05px/1 var(--f-sans);color:#231f20">Ausweichen <small style="font-size:.8em;margin-left:.25em">(GEW)</small></span>
<span style="left:218.3px;top:394.8px;font:8.05px/1 var(--f-sans);color:#231f20">Heilkunde <small style="font-size:.8em;margin-left:.25em">(INT)</small></span>
<span style="left:218.3px;top:408.8px;font:8.05px/1 var(--f-sans);color:#231f20">Jagen & Fischen <small style="font-size:.8em;margin-left:.25em">(GEW)</small></span>
<span style="left:218.3px;top:422.8px;font:8.05px/1 var(--f-sans);color:#231f20">Fremdsprachen <small style="font-size:.8em;margin-left:.25em">(INT)</small></span>
<span style="left:218.3px;top:436.9px;font:8.05px/1 var(--f-sans);color:#231f20">Mythen & Legenden <small style="font-size:.8em;margin-left:.25em">(INT)</small></span>
<span style="left:218.3px;top:450.8px;font:8.05px/1 var(--f-sans);color:#231f20">Darbietung <small style="font-size:.8em;margin-left:.25em">(CHA)</small></span>
<span style="left:218.3px;top:464.8px;font:8.05px/1 var(--f-sans);color:#231f20">Überzeugen <small style="font-size:.8em;margin-left:.25em">(CHA)</small></span>
<span style="left:218.3px;top:478.8px;font:8.05px/1 var(--f-sans);color:#231f20">Reiten <small style="font-size:.8em;margin-left:.25em">(GEW)</small></span>
<span style="left:218.3px;top:492.8px;font:8.05px/1 var(--f-sans);color:#231f20">Seefahrt <small style="font-size:.8em;margin-left:.25em">(INT)</small></span>
<span style="left:218.3px;top:506.7px;font:8.05px/1 var(--f-sans);color:#231f20">Fingerfertigkeit <small style="font-size:.8em;margin-left:.25em">(GEW)</small></span>
<span style="left:218.3px;top:520.7px;font:8.05px/1 var(--f-sans);color:#231f20">Heimlichkeit <small style="font-size:.8em;margin-left:.25em">(GEW)</small></span>
<span style="left:218.3px;top:534.7px;font:8.05px/1 var(--f-sans);color:#231f20">Entdecken <small style="font-size:.8em;margin-left:.25em">(INT)</small></span>
<span style="left:218.3px;top:548.8px;font:8.05px/1 var(--f-sans);color:#231f20">Schwimmen <small style="font-size:.8em;margin-left:.25em">(GEW)</small></span>
<span style="left:402.8px;top:23.2px;font:6.54px/1 var(--f-halb);color:#231f20">AUSSEHEN</span>
<span style="left:446.9px;top:424.3px;font:6.54px/1 var(--f-halb);color:#231f20">MEMENTO</span>
<span style="left:447.6px;top:365.9px;font:6.54px/1 var(--f-halb);color:#231f20">7</span>
<span style="left:447.6px;top:324.0px;font:6.54px/1 var(--f-halb);color:#231f20">4</span>
<span style="left:447.6px;top:310.0px;font:6.54px/1 var(--f-halb);color:#231f20">3</span>
<span style="left:447.6px;top:295.6px;font:6.54px/1 var(--f-halb);color:#231f20">2</span>
<span style="left:448.6px;top:281.6px;font:6.54px/1 var(--f-halb);color:#231f20">1</span>
<span style="left:497.2px;top:244.9px;font:6.54px/1 var(--f-halb);color:#231f20">TRAGLAST</span>
<span style="left:409.5px;top:677.2px;font:7.55px/1 var(--f-titel);color:#ffffff">TREFFERPUNKTE</span>
<span style="left:410.8px;top:730.4px;font:7.55px/1 var(--f-halb);color:#231f20">TODESWÜRFE</span>
<span style="left:491.9px;top:726.1px;transform:translateX(-50%);font:6.54px/1 var(--f-halb);color:#231f20">ERFOLGE</span>
<span style="left:540.9px;top:726.1px;transform:translateX(-50%);font:6.54px/1 var(--f-halb);color:#231f20">FEHLSCHLÄGE</span>
<span style="left:409.5px;top:611.9px;font:7.55px/1 var(--f-titel);color:#ffffff">WILLENSKRAFTPUNKTE</span>
<span style="left:454.5px;top:489.2px;font:6.54px/1 var(--f-halb);color:#231f20">KLEINKRAM</span>
<span style="left:343.4px;top:296.9px;font:8.05px/1 var(--f-sans);color:#231f20">Äxte <small style="font-size:.8em;margin-left:.25em">(STÄ)</small></span>
<span style="left:343.4px;top:310.9px;font:8.05px/1 var(--f-sans);color:#231f20">Bögen <small style="font-size:.8em;margin-left:.25em">(GEW)</small></span>
<span style="left:343.4px;top:325.0px;font:8.05px/1 var(--f-sans);color:#231f20">Raufen <small style="font-size:.8em;margin-left:.25em">(STÄ)</small></span>
<span style="left:343.4px;top:338.9px;font:8.05px/1 var(--f-sans);color:#231f20">Armbrüste <small style="font-size:.8em;margin-left:.25em">(GEW)</small></span>
<span style="left:343.4px;top:352.9px;font:8.05px/1 var(--f-sans);color:#231f20">Hämmer <small style="font-size:.8em;margin-left:.25em">(STÄ)</small></span>
<span style="left:343.4px;top:366.9px;font:8.05px/1 var(--f-sans);color:#231f20">Messer <small style="font-size:.8em;margin-left:.25em">(GEW)</small></span>
<span style="left:343.4px;top:380.9px;font:8.05px/1 var(--f-sans);color:#231f20">Schleudern <small style="font-size:.8em;margin-left:.25em">(GEW)</small></span>
<span style="left:343.4px;top:394.8px;font:8.05px/1 var(--f-sans);color:#231f20">Speere <small style="font-size:.8em;margin-left:.25em">(STÄ)</small></span>
<span style="left:343.4px;top:408.8px;font:8.05px/1 var(--f-sans);color:#231f20">Stäbe <small style="font-size:.8em;margin-left:.25em">(GEW)</small></span>
<span style="left:343.4px;top:422.8px;font:8.05px/1 var(--f-sans);color:#231f20">Schwerter <small style="font-size:.8em;margin-left:.25em">(STÄ)</small></span>
<span style="left:309.2px;top:283.4px;font:7.55px/1 var(--f-kopf);color:#603617">WAFFENFERTIGKEITEN</span>
<span style="left:309.2px;top:451.3px;font:7.55px/1 var(--f-kopf);color:#603617">SEKUNDÄRE FERTIGKEITEN</span>
<span style="left:54.9px;top:682.6px;font:7.55px/1 var(--f-titel);color:#ffffff">WAFFE / SCHILD</span>
<span style="left:139.8px;top:683.3px;font:6.54px/1 var(--f-titel);color:#ffffff">GRIFF</span>
<span style="left:174.2px;top:683.3px;font:6.54px/1 var(--f-titel);color:#ffffff">REICHW.</span>
<span style="left:291.3px;top:683.3px;font:6.54px/1 var(--f-titel);color:#ffffff">MERKMALE</span>
<span style="left:215.0px;top:683.3px;font:6.54px/1 var(--f-titel);color:#ffffff">SCHADEN</span>
<span style="left:257.9px;top:680.0px;font:6.54px/1 var(--f-titel);color:#ffffff">HALT-</span>
<span style="left:256.8px;top:686.4px;font:6.54px/1 var(--f-titel);color:#ffffff">BARKEIT</span>
<span style="left:93.4px;top:600.4px;font:7.55px/1 var(--f-halb);color:#231f20">RÜSTUNG</span>
<span style="left:85.1px;top:637.3px;font:6.54px/1 var(--f-kopf);color:#231f20">NACHTEIL AUF:</span>
<span style="left:93.7px;top:645.7px;font:6.54px/1 var(--f-halb);color:#231f20"> HEIMLICHKEIT </span>
<span style="left:148.0px;top:645.7px;font:6.54px/1 var(--f-halb);color:#231f20"> AUSWEICHEN</span>
<span style="left:93.7px;top:654.0px;font:6.54px/1 var(--f-halb);color:#231f20"> AKROBATIK</span>
<span style="left:257.9px;top:600.4px;font:7.55px/1 var(--f-halb);color:#231f20">HELM</span>
<span style="left:260.7px;top:637.3px;font:6.54px/1 var(--f-kopf);color:#231f20">NACHTEIL AUF:</span>
<span style="left:269.5px;top:645.7px;font:6.54px/1 var(--f-halb);color:#231f20"> WAHRNEHMUNG</span>
<span style="left:269.5px;top:654.0px;font:6.54px/1 var(--f-halb);color:#231f20"> FERNKAMPF</span>
<span style="left:41.2px;top:561.6px;font:6.54px/1 var(--f-titel);color:#ffffff">KUPFER</span>
<span style="left:41.2px;top:532.2px;font:6.54px/1 var(--f-titel);color:#ffffff">SILBER</span>
<span style="left:41.2px;top:503.1px;font:6.54px/1 var(--f-titel);color:#ffffff">GOLD</span>
<span style="left:446.3px;top:407.4px;font:6.54px/1 var(--f-halb);color:#231f20">10</span>
<span style="left:447.6px;top:393.5px;font:6.54px/1 var(--f-halb);color:#231f20">9</span>
<span style="left:447.6px;top:379.5px;font:6.54px/1 var(--f-halb);color:#231f20">8</span>
<span style="left:447.6px;top:351.9px;font:6.54px/1 var(--f-halb);color:#231f20">6</span>
<span style="left:447.6px;top:337.9px;font:6.54px/1 var(--f-halb);color:#231f20">5</span>
<span style="left:431.3px;top:589.9px;font:6.54px/1 var(--f-halb);color:#231f20"> VERSCHNAUFEN</span>
<span style="left:494.3px;top:589.9px;font:6.54px/1 var(--f-halb);color:#231f20"> KURZE RAST</span>
<span style="left:302.0px;top:99.5px;transform:translateX(-50%);font:6.41px/1 var(--f-halb);color:#231f20">NAME</span>
<svg class="bg" style="left:36.1px;top:608.4px;width:47.4px;height:47.4px" viewBox="0 0 48 48"><path id="a60" d="M5,24 A19,19 0 0 1 43,24" fill="none"/><text font-size="6.2" style="font-family:var(--f-halb);letter-spacing:.3px" fill="#231f20"><textPath href="#a60" startOffset="50%" text-anchor="middle">RÜSTUNGSWERT</textPath></text></svg>
<svg class="bg" style="left:211.4px;top:598.5px;width:47.4px;height:47.4px" viewBox="0 0 48 48"><path id="a238" d="M5,24 A19,19 0 0 1 43,24" fill="none"/><text font-size="6.2" style="font-family:var(--f-halb);letter-spacing:.3px" fill="#231f20"><textPath href="#a238" startOffset="50%" text-anchor="middle">RÜSTUNGSWERT</textPath></text></svg>
<b style="left:118.4px;top:20.7px;font:8.9px/1 var(--f-sans);color:#1e2f55">Lena</b>
<b style="left:57.2px;top:38.0px;font:8.9px/1 var(--f-sans);color:#1e2f55">Elf</b>
<b style="left:165.8px;top:38.0px;font:8.9px/1 var(--f-sans);color:#1e2f55">Erwachsen</b>
<b style="left:88.8px;top:54.8px;font:8.9px/1 var(--f-sans);color:#1e2f55">Jägerin</b>
<b style="left:84.9px;top:71.5px;font:8.9px/1 var(--f-sans);color:#1e2f55">Stolz</b>
<b style="left:404.6px;top:37.5px;font:8.9px/1 var(--f-sans);color:#1e2f55">Silberweißes Haar, grüner Umhang</b>
<b style="left:302.0px;top:97.2px;transform:translateX(-50%);font:10.9px/1 var(--f-kopf);color:#231f20">Ciliel Nachtsee</b>
<b style="left:157.9px;top:149.0px;transform:translateX(-50%);font:18.7px/1 var(--f-titel);color:#231f20">10</b>
<b style="left:215.6px;top:149.0px;transform:translateX(-50%);font:18.7px/1 var(--f-titel);color:#231f20">12</b>
<b style="left:272.8px;top:149.0px;transform:translateX(-50%);font:18.7px/1 var(--f-titel);color:#231f20">16</b>
<b style="left:330.6px;top:149.0px;transform:translateX(-50%);font:18.7px/1 var(--f-titel);color:#231f20">13</b>
<b style="left:388.3px;top:149.0px;transform:translateX(-50%);font:18.7px/1 var(--f-titel);color:#231f20">14</b>
<b style="left:445.5px;top:149.0px;transform:translateX(-50%);font:18.7px/1 var(--f-titel);color:#231f20">9</b>
<i class="dia" style="left:330.9px;top:184.1px"></i>
<b style="left:164.8px;top:228.9px;transform:translateX(-50%);font:9.9px/1 var(--f-sans);color:#1e2f55">—</b>
<b style="left:350.3px;top:228.9px;transform:translateX(-50%);font:9.9px/1 var(--f-sans);color:#1e2f55">W4</b>
<b style="left:534.8px;top:228.9px;transform:translateX(-50%);font:9.9px/1 var(--f-sans);color:#1e2f55">10</b>
<b style="left:533.9px;top:262.5px;transform:translateX(-50%);font:9.9px/1 var(--f-sans);color:#1e2f55">8</b>
<b style="left:35.5px;top:293.6px;font:8.4px/1 var(--f-sans);color:#1e2f55">Innerer Frieden (Elf)</b>
<b style="left:35.5px;top:307.4px;font:8.4px/1 var(--f-sans);color:#1e2f55">Gefährte · 3 WP</b>
<b style="left:205.3px;top:283.5px;transform:translateX(-50%);font:8.4px/1 var(--f-sans);color:#1e2f55">12</b>
<b style="left:205.3px;top:297.4px;transform:translateX(-50%);font:8.4px/1 var(--f-sans);color:#1e2f55">12</b>
<b style="left:205.3px;top:353.4px;transform:translateX(-50%);font:8.4px/1 var(--f-sans);color:#1e2f55">12</b>
<b style="left:205.3px;top:381.4px;transform:translateX(-50%);font:8.4px/1 var(--f-sans);color:#1e2f55">10</b>
<b style="left:205.3px;top:409.3px;transform:translateX(-50%);font:8.4px/1 var(--f-sans);color:#1e2f55">12</b>
<b style="left:205.3px;top:437.3px;transform:translateX(-50%);font:8.4px/1 var(--f-sans);color:#1e2f55">7</b>
<b style="left:205.3px;top:521.2px;transform:translateX(-50%);font:8.4px/1 var(--f-sans);color:#1e2f55">14</b>
<b style="left:205.3px;top:535.2px;transform:translateX(-50%);font:8.4px/1 var(--f-sans);color:#1e2f55">10</b>
<b style="left:205.3px;top:549.2px;transform:translateX(-50%);font:8.4px/1 var(--f-sans);color:#1e2f55">10</b>
<b style="left:330.6px;top:311.4px;transform:translateX(-50%);font:8.4px/1 var(--f-sans);color:#1e2f55">14</b>
<b style="left:330.6px;top:367.4px;transform:translateX(-50%);font:8.4px/1 var(--f-sans);color:#1e2f55">12</b>
<b style="left:330.6px;top:381.4px;transform:translateX(-50%);font:8.4px/1 var(--f-sans);color:#1e2f55">12</b>
<b style="left:456.9px;top:278.1px;font:7.9px/1 var(--f-sans);color:#1e2f55">Köcher (16 Pfeile)</b>
<b style="left:456.9px;top:292.1px;font:7.9px/1 var(--f-sans);color:#1e2f55">Schlafsack</b>
<b style="left:456.9px;top:306.1px;font:7.9px/1 var(--f-sans);color:#1e2f55">Fackel</b>
<b style="left:456.9px;top:320.1px;font:7.9px/1 var(--f-sans);color:#1e2f55">Feuerstein &amp; Zunder</b>
<b style="left:456.9px;top:334.1px;font:7.9px/1 var(--f-sans);color:#1e2f55">Seil (Hanf)</b>
<b style="left:456.9px;top:348.1px;font:7.9px/1 var(--f-sans);color:#1e2f55">Angelrute</b>
<b style="left:456.9px;top:362.2px;font:7.9px/1 var(--f-sans);color:#1e2f55">Essensrationen ×5</b>
<b style="left:117.4px;top:531.9px;transform:translateX(-50%);font:8.9px/1 var(--f-sans);color:#1e2f55">4</b>
<b style="left:167.8px;top:607.9px;font:8.9px/1 var(--f-sans);color:#1e2f55">Leder (1)</b>
<b style="left:340.4px;top:607.9px;font:8.9px/1 var(--f-sans);color:#1e2f55">–</b>
<b style="left:437.1px;top:646.3px;transform:translateX(-50%);font:14.8px/1 var(--f-titel);color:#231f20">14</b>
<b style="left:437.1px;top:711.5px;transform:translateX(-50%);font:14.8px/1 var(--f-titel);color:#231f20">13</b>
<b style="left:35.5px;top:718.9px;font:8.4px/1 var(--f-sans);color:#1e2f55">Langbogen</b>
<b style="left:148.0px;top:718.9px;transform:translateX(-50%);font:8.4px/1 var(--f-sans);color:#1e2f55">2H</b>
<b style="left:186.5px;top:718.9px;transform:translateX(-50%);font:8.4px/1 var(--f-sans);color:#1e2f55">100</b>
<b style="left:229.9px;top:718.9px;transform:translateX(-50%);font:8.4px/1 var(--f-sans);color:#1e2f55">W12</b>
<b style="left:269.4px;top:718.9px;transform:translateX(-50%);font:8.4px/1 var(--f-sans);color:#1e2f55">6</b>
<b style="left:292.1px;top:718.9px;font:8.4px/1 var(--f-sans);color:#1e2f55">Stich</b>
<b style="left:35.5px;top:735.7px;font:8.4px/1 var(--f-sans);color:#1e2f55">Dolch</b>
<b style="left:148.0px;top:735.7px;transform:translateX(-50%);font:8.4px/1 var(--f-sans);color:#1e2f55">1H</b>
<b style="left:186.5px;top:735.7px;transform:translateX(-50%);font:8.4px/1 var(--f-sans);color:#1e2f55">STÄ</b>
<b style="left:229.9px;top:735.7px;transform:translateX(-50%);font:8.4px/1 var(--f-sans);color:#1e2f55">W8</b>
<b style="left:269.4px;top:735.7px;transform:translateX(-50%);font:8.4px/1 var(--f-sans);color:#1e2f55">9</b>
<b style="left:292.1px;top:735.7px;font:8.4px/1 var(--f-sans);color:#1e2f55">Stich, zielsicher</b>
 </div>
 <div class="ref">
  <div class="karte"><div class="kr o"><i></i><u></u><i></i></div><div class="kt2">Innerer Frieden<span class="s">S. 12</span></div>
   <ul><li><b>Willenskraftpunkte:</b> –</li></ul>Als Elf kannst du während einer kurzen Rast tief meditieren. Du heilst zusätzlich W6 TP und W6 WP und kannst einen weiteren Zustand ablegen. Während der Meditation bist du völlig unansprechbar und kannst nicht geweckt werden.<div class="kr u"><i></i><u></u><i></i></div></div>
  <div class="karte"><div class="kr o"><i></i><u></u><i></i></div><div class="kt2">Gefährte<span class="s">S. 36</span></div>
   <ul><li><b>Voraussetzung:</b> Jagen &amp; Fischen 12</li><li><b>Willenskraftpunkte:</b> 3</li></ul>Du kannst dieses Talent aktivieren, um ein Tier (kein Monster) zu deinem Gefährten zu machen. Das dauert ein Viertel, und du kannst immer nur einen Tiergefährten haben. Das Tier folgt dir, solange du in seinem natürlichen Lebensraum bleibst …<div class="kr u"><i></i><u></u><i></i></div></div>
 </div>
</div>
<div class="ann" style="left:560px;top:420px;max-width:330px"><b>1</b>Original-Bogen (S. 123) als Hintergrund – Text entfernt, alle Beschriftungen deutsch in Hideout an der Originalstelle. Alle Felder ausfüllbar (Tinte blau-schwarz), Zustände/Kästchen per Klick. Export als ausfüllbares PDF (shared/fillpdf.js).</div>
<div class="ann" style="left:60px;top:470px;max-width:220px"><b>2</b>Die Gruppe: Wechsel zwischen den Bögen; PDF-Export und neuer Charakter.</div>
<div class="ann" style="left:1060px;top:600px;max-width:320px"><b>3</b>Rechts der volle Buchtext der Talente und Zauber dieses Charakters als Pergament-Karten – was auf dem Bogen nur als Name steht.</div>
</body></html>