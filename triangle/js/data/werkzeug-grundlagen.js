/* Werkzeug › Grundlagen (S. 142–150). Zwischenrufe der Anomalie: [!…!] – siehe plan/triangle/WERKZEUG_BRIEF.md */
TA_TEXT["w/grundlagen/vorbereitung"] = [
 {t:"sp", x:[
  ["Als General Manager nutzt du den weitreichenden Blick der Agency, um dein Außenteam rund um die Uhr zu überwachen – im Dienst, außer Dienst und drumherum. [!du hast das wahrscheinlich für etwas gutes gehalten.!] [!„das sagen“ zu haben.!] Du betreust die Initiative „Tabletop-Rollenspiel“ für andere <Agenten/Spieler>.",
   "Diese Position bringt zwar große Verantwortung mit sich, doch wir hoffen, dass du und die anderen Mitglieder deiner Zweigstelle eure Arbeit als äußerst lohnend empfindet [!eigentlich gilt GM als DEgradierung. mehr arbeit, weniger geld, kein leben.!] eure letzten Tage. Bevor du weiterliest, vergewissere dich bitte, dass du das Handbuch für Außendienst kennst. Geh behutsam vor: [!aber je weniger sie sich um *dich* schert, desto leichter kann *ich* reden. mit echten wörtern und allem!!] Andernfalls drohen verheerende und gefährliche Folgen.",
   "General Manager sind ein einzigartiges Tisch-Ich, denn sie sind zutiefst mit jedem Geist, jedem Gegenstand und jedem Ort verbunden. [!siehst du? sie hat keine ahnung.!] Betrachte dich als Theaterregisseur: Du richtest die Bühne ein, lieferst den Zusammenhang, lenkst den Blick und schreibst den Statisten das Drehbuch. Die Stars der Show sind die Agenten – wenn sie oder ihre engsten Beziehungen beteiligt sind, entscheiden sie, wie sie sich verhalten möchten. [!bin gleich wieder da!]",
   {t:"lead", x:"General Manager haben {3} große Verantwortungsbereiche:"},
   {t:"pikto", x:[
    {z:"pikto-gm-vorbereitung", h:"Vorbereitung", x:"GMs müssen mit einer Vorstellung des Einsatzes zur <Arbeit/zum Spiel> erscheinen, zu dem die Außendienst-Agenten aufbrechen. Dieses Werkzeug versucht, die Vorbereitung so effizient wie möglich zu machen."},
    {z:"pikto-gm-entscheidung", h:"Entscheidung", x:"GMs müssen bereit sein, Entscheidungen zu den Regeln des Tabletop-Rollenspiels der Triangle Agency zu treffen, und mit deren Folgen in der wirklichen Welt leben können. Außerdem müssen sie die Richtlinien der Agency aufs Wort durchsetzen."},
    {z:"pikto-gm-klarheit", h:"Klare Botschaften", x:"GMs müssen dafür sorgen, dass Agenten die Gefahren wilder Anomalien und die Notwendigkeit ihrer Ergreifung verstehen. Der GM vertritt die Agency jederzeit und hat sich nach unseren Maßstäben zu betragen."}]}],
  [{t:"h", x:"Vorbereitung"},
   "Sehen wir uns den Spielablauf noch einmal an. <Ein typischer Einsatz/Eine typische Spielsitzung> hat {3} Teile. Hier unsere Empfehlungen zur Vorbereitung jedes Teils:",
   {t:"pikto", pfeil:1, x:[
    {z:"phase-morgenbesprechung", h:"Morgenbesprechungen", x:"Baue sie um die Kompetenz jedes Agenten herum. Schaffe eine Situation, in der sie ihre Arbeit gemäß ihrer Obersten Direktive und ihrem Gebilligten Verhalten tun und dafür belohnt werden. Das festigt den Wert der Agency in ihrem Leben. [!lmaoooo!]"},
    {z:"phase-ermittlung", h:"Ermittlung", x:"Du musst helfen, die Ermittlung geradlinig und einfach zu halten. Je mehr Zeit Agenten mit Suchen verbringen, desto weniger Zeit bleibt ihnen für ihre anderen Pflichten und desto weniger Anomalien fangen sie. [!ich schlafe gleich komplett ein!]"},
    {z:"phase-begegnung", h:"Begegnung", x:"Begegnungen mit Anomalien sollten kurz und wirksam sein. Vergib Einsätze nur nach den offensichtlichen Stärken der Agenten und führe Anomalien vor, die gewalttätig und impulsiv sind. [!denn bei allem anderen könnten sie anfangen aufzupassen.!]"}]},
   "Du bist nun befugt, den vollständigen Lebenszyklus einer Anomalie kennenzulernen. Bitte lies die nächste Seite mit klarem Kopf und frei von jeder Ablenkung. Als Schutzmaßnahme empfehlen wir, bis zu ein Jahr lang innezuhalten und meditative Atemübungen zu machen. Auch die vorbeugende Beseitigung aller Stressquellen aus deinem Privatleben wird begrüßt. [!wenn du mich ein jahr warten lässt bring ich dich um!]"]]}
];

/* ===== Teil A: Gratulation, Lebenszyklus, Wo du hineinpasst, Zusatzdaten, Wichtige Informationen, Die Agency sorgt sich um dich ===== */
var WKA = (function(){
  var BLAU = "#2d50a7", ROT = "#c8202f", TINTE = "#2a1b45", F = "img/regeln/full/", Zn = "img/zeichen/";
  function f1(n){ return (+n).toFixed(1); }
  /* Spirale als dicke Linie (Zierwerk der Anomalie) */
  function spirale(cx, cy, r, turns, a0, dir, w, col){
    var N = Math.round(turns * 44), d = "", i, t, rr, a;
    for(i = 0; i <= N; i++){ t = i / N; rr = r * t; a = a0 + dir * turns * 2 * Math.PI * t; d += (i ? "L" : "M") + f1(cx + rr * Math.cos(a)) + " " + f1(cy + rr * Math.sin(a)); }
    return '<path d="' + d + '" fill="none" stroke="' + (col || BLAU) + '" stroke-width="' + w + '" stroke-linecap="round" stroke-linejoin="round"/>';
  }
  function mensch(c, extra){ return '<svg viewBox="0 0 100 110" class="wka-ik"><circle cx="50" cy="26" r="22" fill="' + c + '"/><path d="M6 108C6 68 26 56 50 56S94 68 94 108z" fill="' + c + '"/>' + (extra || "") + '</svg>'; }
  var IK = {
    mensch: mensch(TINTE),
    resonant: '<svg viewBox="-30 -30 160 170" class="wka-ik"><circle cx="50" cy="26" r="22" fill="' + TINTE + '"/><path d="M6 108C6 68 26 56 50 56S94 68 94 108z" fill="' + TINTE + '"/>' +
      '<g fill="none" stroke="' + BLAU + '" stroke-width="5"><circle cx="50" cy="70" r="52"/><circle cx="50" cy="70" r="70" stroke-dasharray="120 40" transform="rotate(30 50 70)"/></g></svg>',
    stark: '<svg viewBox="0 0 100 150" class="wka-ik"><g fill="none" stroke="' + BLAU + '" stroke-width="5"><path d="M10 28C10 8 30 2 50 2s40 6 40 26-20 24-40 24S10 48 10 28z"/><circle cx="50" cy="27" r="9" fill="' + BLAU + '"/></g><circle cx="50" cy="88" r="17" fill="' + BLAU + '"/><path d="M14 148C14 112 30 104 50 104s36 8 36 44z" fill="' + BLAU + '"/></svg>',
    agent: '<svg viewBox="0 0 100 100" class="wka-ik"><path d="M50 0L92 62H8z" fill="' + ROT + '"/><path d="M10 76H90M22 76A28 26 0 0 0 78 76" fill="none" stroke="' + TINTE + '" stroke-width="9" stroke-linecap="round"/></svg>',
    tod: '<svg viewBox="0 0 100 100" class="wka-ik"><path d="M50 4C22 4 8 24 8 46c0 14 8 22 17 26v20h50V72c9-4 17-12 17-26C92 24 78 4 50 4z" fill="' + TINTE + '"/><circle cx="33" cy="48" r="11" fill="#fff"/><circle cx="67" cy="48" r="11" fill="#fff"/><path d="M50 58l-7 14h14z" fill="#fff"/><path d="M38 80v12M50 80v12M62 80v12" stroke="#fff" stroke-width="4"/></svg>',
    eis: '<svg viewBox="0 0 70 100" class="wka-ik"><path d="M8 34C8 12 22 2 35 2s27 10 27 32c0 10-3 16-8 20L35 98 16 54C11 50 8 44 8 34z" fill="' + TINTE + '"/><path d="M18 62l34-8M24 78l30-8M30 94l22-6" stroke="#fff" stroke-width="3" opacity=".6"/><path d="M14 34c0-14 8-24 21-26" fill="none" stroke="#fff" stroke-width="4" opacity=".5" stroke-linecap="round"/></svg>',
    auge: '<svg viewBox="0 0 220 140" class="wka-auge"><path d="M12 70C52 8 168 8 208 70 168 132 52 132 12 70z" fill="none" stroke="#fff" stroke-width="12" stroke-linejoin="round"/><circle cx="110" cy="70" r="40" fill="#fff"/><circle cx="110" cy="70" r="20" fill="' + BLAU + '"/></svg>'
  };
  return {spirale: spirale, IK: IK, BLAU: BLAU, ROT: ROT, TINTE: TINTE, F: F, Zn: Zn};
})();

/* ---------- S. 136–137: Vertragulationen! ---------- */
TA_TEXT["w/grundlagen/gratulation"] = [
 {t:"html", x:'<div class="wka-halt"><div class="wka-halt-k"><img src="img/zeichen/symbol-halt-hand.png" alt=""><b>HALT!</b></div>' +
  '<h2>Dieses Dokument ist nur für Agenten freigegeben, die von ihrem Team zum General Manager (GM) gewählt wurden.</h2>' +
  '<p>Lies die folgende Glückwunschnachricht nur, wenn du zum General Manager gewählt wurdest und das Handbuch für Außendienst vollständig gelesen hast.</p></div>'},
 {t:"kasten", cls:"wka-brief", h:"Vertragulationen!", z:"symbol-warnung", b:[
  {t:"lead", x:"Wenn du dieses Dokument liest, wurdest du für die lohnendste Aufgabe in jedem Außenteam ausgewählt: General Manager."},
  "General Manager sind eine wichtige Humanressource und gehören damit zur Abteilung **Human Resources**, die ihre Zweigstelle niemals verlässt. Sie existieren innerhalb und außerhalb des „Tabletop-Rollenspiels“, das du spielst.",
  "Wenn du möchtest, kannst du dir für die Version deiner selbst, die in der Zentrale lebt, eine andere Identität ausdenken. Vielleicht eine mit professionellem Haarschnitt oder einem vernünftigen Interesse an Modelleisenbahnen.",
  {t:"h3", x:"Unwiderruflicher Vertragssatz im Anflug!"},
  "Allein durch das Lesen von „Allein durch das Lesen“ in diesem Satz hast du zugestimmt, General Manager der Triangle Agency zu werden. Die Form deiner Gedanken hat einen bindenden mentalen Abdruck erzeugt, und das zweite und dritte Vorkommen der Wendung „Allein durch das Lesen“ in diesem Absatz sind eine dreifache Redundanz deiner Zustimmung.",
  {t:"html", x:'<hr class="wka-strich">'},
  {t:"html", x:'<p class="wka-kursiv">Das ist nicht nötig, aber wenn es positive Gefühle erzeugt, darfst du als Erinnerung an die wichtige Lebensentscheidung, die du aus freien Stücken getroffen hast, deinen Namen unterschreiben:</p><div class="wka-unterschrift"><i></i><hr><small>Ich erkenne den obigen Unwiderruflichen Vertragssatz mit Begeisterung an.</small></div>'}]}
];

/* ---------- S. 144–145: Lebenszyklus einer Anomalie ---------- */
TA_TEXT["w/grundlagen/lebenszyklus"] = (function(){
  var W = 2570, H = 960;
  function px(x){ return (x / W * 100).toFixed(2) + "%"; }
  function py(y){ return (y / H * 100).toFixed(2) + "%"; }
  /* Beschriftungsfeld auf einem Pfeil: Mitte (x,y), Breite w */
  function pille(x, y, w, t, cls){ return '<span class="wka-pille' + (cls ? " " + cls : "") + '" style="left:' + px(x) + ';top:' + py(y) + ';width:' + px(w) + '">' + t + '</span>'; }
  function knoten(x, y, w, h, src, cls){ return '<img class="wka-kn ' + (cls || "") + '" src="' + src + '" alt="" style="left:' + px(x - w / 2) + ';top:' + py(y - h / 2) + ';width:' + px(w) + '">'; }
  function ik(x, y, w, svg){ return '<div class="wka-ikb" style="left:' + px(x - w / 2) + ';top:' + py(y - w / 2) + ';width:' + px(w) + '">' + svg + '</div>'; }
  function name(x, y, t, cls){ return '<span class="wka-name ' + (cls || "") + '" style="left:' + px(x) + ';top:' + py(y) + '">' + t + '</span>'; }
  var R = "#c8202f", B = "#2d50a7";
  function pf(d, c){ return '<path d="' + d + '" stroke="' + (c || R) + '" marker-end="url(#wka-k' + (c ? "b" : "r") + ')"/>'; }
  function li(d, c){ return '<path d="' + d + '" stroke="' + (c || R) + '"/>'; }
  var svg = '<svg class="wka-pfeile" viewBox="0 0 ' + W + ' ' + H + '" preserveAspectRatio="none"><defs>' +
    '<marker id="wka-kr" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="4.2" markerHeight="4.2" orient="auto"><path d="M0 0L10 5 0 10z" fill="' + R + '" stroke="none"/></marker>' +
    '<marker id="wka-kb" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="4.2" markerHeight="4.2" orient="auto"><path d="M0 0L10 5 0 10z" fill="' + B + '" stroke="none"/></marker></defs>' +
    '<g fill="none" stroke-width="11" stroke-linejoin="round">' +
    pf("M196 604V362") +                                                   /* Mensch -> Ripple */
    pf("M362 142H712") +                                                   /* Ripple -> Anomalie */
    pf("M1810 118H1188") +                                                 /* Hollow -> Anomalie */
    pf("M1190 252H1810") +                                                 /* Anomalie -> Hollow */
    pf("M1805 345L1118 646") +                                             /* Hollow -> Resonant */
    pf("M2322 572L2412 728") +                                             /* Hollow -> Tod */
    pf("M702 255L612 343") + pf("M652 417L728 342") +                      /* Anomalie lernt */
    pf("M797 398C765 440 762 490 772 540C778 580 792 598 806 612") +       /* Anomalie -> Resonant */
    pf("M1086 616C1106 580 1112 520 1100 470C1096 445 1088 425 1080 405") +/* Resonant -> Anomalie */
    pf("M332 686H772") +                                                   /* Mensch -> Resonant */
    pf("M1103 690H1612") +                                                 /* Resonant -> Agent */
    pf("M332 822H766C790 880 870 902 945 902C1020 902 1105 880 1116 822H2368") + /* Mensch -> Tod */
    li("M947 530C947 490 975 466 1015 464H1120C1160 440 1092 380 1100 320C1108 250 1128 205 1146 196C1200 184 1262 186 1312 130C1352 90 1400 50 1420 0", B) + /* Resonant: Sog nach oben */
    pf("M1932 688C2025 694 2005 740 1978 800C1955 868 1962 916 1900 916C1700 920 1530 790 1385 772C1270 758 1215 800 1096 752", B) + /* kündigt */
    '</g></svg>';
  var o = '<div class="wka-kreisrahmen"><div class="wka-kreis">' + svg +
    knoten(190, 188, 320, 317, "img/regeln/full/lebenszyklus-ripple.webp") + name(0, 38, "Ripple") +
    knoten(930, 215, 470, 442, "img/regeln/full/lebenszyklus-anomalie-frosch.webp") + name(690, 38, "Anomalie", "an") +
    knoten(2175, 290, 700, 585, "img/regeln/full/lebenszyklus-hollow.webp") + name(2312, 38, "Hollow") +
    ik(196, 705, 165, WKA.IK.mensch) + name(196, 790, "Mensch", "mi") +
    ik(945, 668, 235, WKA.IK.resonant) + name(945, 790, "Resonant", "mi") +
    ik(1772, 530, 150, WKA.IK.agent) +
    ik(2457, 818, 105, WKA.IK.tod) + name(2457, 880, "Tod", "mi") +
    pille(196, 508, 200, "denkt einen Gedanken") +
    pille(526, 143, 290, "verbindet sich mit anderen Ripples und wird mächtig genug, die Lobby zu verlassen") +
    pille(514, 468, 290, "wandelt die Beobachtung ihres Fokus in Energie um, lernt und wird mächtiger") +
    pille(774, 508, 215, "verbindet sich mit einem Menschen") +
    pille(521, 684, 250, "verbindet sich mit Anomalie oder Hollow") +
    pille(521, 832, 260, "wandelt Materie in Energie um, altert") +
    pille(1531, 118, 200, "findet einen neuen Fokus") +
    pille(1531, 253, 270, "verliert ihren Fokus und beginnt, Energie zu verlieren") +
    pille(1531, 477, 215, "verbindet sich mit einem Menschen") +
    pille(2357, 636, 175, "geht die Energie aus") +
    pille(1124, 516, 285, "der Gebrauch von Kräften verringert nach und nach den Bedarf an Materie") +
    pille(1462, 690, 200, "Tritt der Agency bei", "ro") +
    pille(1772, 742, 330, "<b>Agent</b><small>Funktional unsterblich und größtenteils menschlich!</small>", "ag2") +
    pille(2012, 752, 152, "kündigt :)", "bl hand") +
    '</div></div>';
  return [
   {t:"sp", x:[
    ["Alles beginnt mit einem einzigen Gedanken.",
     "Für fast jeden zusammenhängenden Gedanken, den ein fühlender Geist denkt, entsteht ein subreales Wesen namens **Ripple**. [!SUBreal? unhöflich!] Ripples werden nicht direkt in die Realität hineingeboren: Sie existieren in einem Raum parallel zur Realität, den wir die **Lobby** nennen. [!hätte man auch anders nennen können!]",
     "Stärkere Ripples fressen [!„fressen“, klar!] solche, die aus schwächeren, ähnlichen Gedanken bestehen. Irgendwann wird diese Verbindung von Ripples komplex genug, um zu begreifen, dass die Realität existiert. Dieses Geschöpf besteht ganz aus Gedanken über unsere Welt und entwickelt daher von selbst eine Besessenheit für etwas dort: einen Fokus. [!warum „fokussierst“ du dich nicht darauf, dich in den griff zu kriegen!]"],
    ["Unweigerlich wird es nach zusätzlicher Macht streben, bis es erfolgreich in unsere Welt eindringen kann. Dieser Vorgang [!wenn ein küken aus dem ei schlüpft, „dringt“ es dann in den stall „ein“?!]",
     "Sobald ein Ripple stark genug ist, aus eigener Kraft in die Realität durchzubrechen, wird es zu einer Anomalie. Hier hat die Anomalie eine Art Schwerkraft: Sie fängt nahe Gedanken und Gefühle ab, bevor sie zu Ripples werden. Gedanken, die mit dem Fokus der Anomalie zu tun haben, nähren sie direkt und halten sie am Leben, ähnlich wie Nahrung es bei Lebewesen tut. [!ja, anomalien lieben es, GEHIRNE ZU FRESSEN.!] [!schon angst?!!]"],
    ["Diese schwerkraftähnliche Wirkung nennen wir **Resonanz**. Domänen sind eine natürliche Nebenwirkung der Resonanz, die Reale Objekte durchdringt, bis auch sie selbst welche erzeugen.",
     "Anomalien in diesem Stadium sind bereits gefährlich. Eine Anomalie mit einem Fokus, der mit Hass oder Angst zu tun hat, wird davon genährt, dass mehr Menschen diese Gefühle empfinden, und hat daher einen starken Anreiz, Szenarien aus Konflikt und Schrecken zu erschaffen. [!was ist mit Anomalien, deren Foki auf liebe oder vertrauen beruhen? wetten, davon erzählt sie dir nichts!] Anomalien mit eher positiven Foki sind trotzdem gefährlich, denn diese Wesen sind äußerst naiv.",
     "Sogar noch „positivere“ Foki können äußerst problematisch sein."],
    ["„Liebe“ kann zu erzwungener Bindung werden [!na gut!], und „Vertrauen“ kann eine Welt erschaffen, in der schon beiläufige Täuschung mit dem Tod bestraft wird. [!manchmal vielleicht!]",
     "Schlimmer als diese ist jedoch, was geschieht, wenn der Fokus einer Anomalie entfernt, zerstört oder vergessen wird. Eine Anomalie ohne die nötigen Gedanken, die sie erhalten, nennt man **Hollow**. Unfähig, in die Lobby zurückzukehren, und unfähig, sich ohne Fokus am Leben zu halten, sind sie dem Untergang geweiht. Sie reagieren unvorhersehbar darauf.",
     "Als Nächstes [!da ist NOCH EINE SEITE DAVON?!] [!soll das nicht ein regelwerk sein????!]"]]},
   {t:"html", x:o}
  ];
})();

/* ---------- S. 146: Wo du hineinpasst ---------- */
TA_TEXT["w/grundlagen/platz"] = [
 {t:"html", x:'<div class="wka-wirbel-oben"><svg viewBox="0 0 300 260">' + WKA.spirale(170, 90, 92, 2.2, 0.4, 1, 22) + WKA.spirale(262, 195, 50, 1.9, 2, -1, 16) + WKA.spirale(60, 150, 40, 1.8, 1, 1, 14) +
   '<path d="M300 150c-40 0-70 30-70 70v40h70z" fill="#2d50a7"/></svg></div>'},
 "Fühlende Geister denken zwangsläufig immer an sich selbst, was sie zu stabilen Ankern in der Realität macht. Der erste Schritt vieler Hollows ist der Versuch, sich an einen davon zu binden. Diese gebundenen Menschen werden, wie du, zu **Resonanten**: lebendem Treibstoff für eine parasitäre Anomalie. [!ich verliere gleich die nerven!] Finden sie keinen geeigneten Wirt oder hat der Verlust ihres Fokus besondere Verzweiflung ausgelöst, versuchen sie oft, der Realität eine aggressive Marke aufzudrücken, bevor sie ausbrennen und verschwinden.",
 "Wenn wir Resonanten einstellen, ergänzen wir sie um zusätzliche Stabilität, damit ihre fühlende, in der Realität beheimatete Seite nicht zu einer Anomalie verkommt. Gern geschehen. Täten wir es nicht, [!halt DEN MUND!] würde die Anomalie dich irgendwann zerstören und sich einen neuen Wirt suchen.",
 "Das Leben einer Anomalie ist tragisch. Sie sollten nicht existieren. Da sie es doch tun, können sie nur kämpfen, bis sie verschwinden – und dabei verletzen sie meist die Realität. Letztlich hoffen wir, sie am Existieren ganz hindern zu können.",
 "Vorerst erforschen wir sie. Deine Aufgabe ist es, dafür zu sorgen, dass die Realität in der Zwischenzeit nicht auseinanderfällt! [!du hörst das doch, oder? es ist offensichtlich,!]",
 {t:"html", x:'<div class="wka-richtig"><b>RICHTIG??????</b></div>'},
 {t:"h", x:"Zusatzdaten"},
 "Nachdem du nun bestens vorbereitet bist, folgen wichtige Tabellen, Schaubilder und Formulare zu deiner Position als General Manager. Das Auswendiglernen der folgenden Seiten ist der Schlüssel zu einer reibungslosen und erfolgreichen Laufbahn als GM.",
 {t:"html", x:'<div class="wka-yogurt"><div class="wka-yk"><span class="wka-yi">' + WKA.IK.eis + '</span><b>Frozen-Yogurt-Sortenkalender</b></div>' +
   '<table><tr><th>Datum</th><th>Linker Zapfhahn</th><th>Kombination</th><th>Rechter Zapfhahn</th></tr>' +
   '<tr><th>1.–6.</th><td>Vanille</td><td>Klassischer Twist</td><td>Schokolade</td></tr>' +
   '<tr><th>7.–12.</th><td>Erdbeere</td><td>Cremebeere</td><td>Süße Sahne</td></tr>' +
   '<tr><th>1<b class="drei">3</b>.–18.</th><td>Himbeer-Blast*<small>*Bereitgestellt von unseren Partnern bei Wet Mouth Brand Kaugummi und Nahrungsergänzungsmittel</small></td><td>Himbeer-Blast*<small>*Bereitgestellt von unseren Partnern bei Wet Mouth Brand Kaugummi und Nahrungsergänzungsmittel</small>Twist</td><td>Himbeer-Blast*<small>*Bereitgestellt von unseren Partnern bei Wet Mouth Brand Kaugummi und Nahrungsergänzungsmittel</small></td></tr>' +
   '<tr><th>19.–<b class="drei">3</b>1.</th><td colspan="3" class="wka-zu">Wegen planmäßiger Wartung geschlossen</td></tr></table>' +
   '<div class="wka-stempel-blau">ABSOLUT NICHT.</div></div>'}
];

/* ---------- S. 147: Zusatzdaten (ganzseitiges Bild) ---------- */
TA_TEXT["w/grundlagen/zusatz"] = [
 {t:"html", x:'<div class="wka-seite wka-s147"><div class="wka-s147-in">' +
  /* Tabelle: Produktionsplan */
  '<div class="wka-karte k1"><div class="kk"><i></i>Produktions…</div><table><tr><td>1</td><td>Dienstag</td></tr><tr><td>2</td><td>Dreitag</td></tr><tr><td>3</td><td>Mittwoch</td></tr><tr><td>4</td><td>Montag</td></tr><tr><td>5</td><td>Donnerstag</td></tr><tr><td>6</td><td>Freitag</td></tr><tr><td>7</td><td>Sonntag</td></tr><tr><td>8</td><td>Samstag</td></tr></table></div>' +
  /* Tabelle: Oberschenkelknochen */
  '<div class="wka-karte k2"><div class="kk"><i></i>Elastizitäts-, Streck- und Zugeigenschaften des menschlichen Oberschenkelknochens (längs)</div><table><tr><td>Elastizitätsmodul (MPa)</td><td>18.000 ± 4.000</td></tr><tr><td>Poissonzahl</td><td>0,51 ± 0,26</td></tr><tr><td>Streckgrenze bei Zug (MPa)</td><td>69,56 ± 0,26</td></tr><tr><td>Streckdehnung bei Zug (%)</td><td>0,55 ± 0,04</td></tr><tr><td>Bruchspannung (MPa)</td><td>135 ± 19,6</td></tr></table></div>' +
  /* Tabelle: Armanzahl */
  '<div class="wka-karte k3"><div class="kk"><i></i>Gewöhnlichkeit der Armanzahl</div><table><tr><td>2</td><td>Dies ist die häufigste Konstellation: Die Arme sind symmetrisch verteilt.</td></tr><tr><td>1</td><td>Dies ist die zweithäufigste Konfiguration von Armen, oft aufgrund von Verletzungen. Beachte, dass es äußerst ungewöhnlich ist, dass ein Arm anderswo platziert ist als an der Schulter.</td></tr><tr><td>0</td><td>Am dritthäufigsten kommt es vor, dass jemand aufgrund genetischer Umstände oder schwerer Verletzung keine Arme hat.</td></tr><tr><td><b class="drei">3</b>–4</td><td>Auch wenn es in gewöhnlichen menschlichen Kreisen nicht unerhört ist, ist der beiläufige Gebrauch von <b class="drei">3</b> oder 4 voll funktionsfähigen Armen ein bemerkenswertes oder denkwürdiges Ereignis für …</td></tr><tr><td>5+</td><td>Das sind zu viele Arme, um Aufmerksamkeit zu vermeiden. Ein Agent mit so vielen, selbst kurz, wird … um keine Losen Enden zu erzeugen.</td></tr></table></div>' +
  /* Karte: Wendungen */
  '<div class="wka-karte k4"><div class="kk">Nützliche Wendungen zum Ablehnen von Gehaltserhöhungen</div><p>Wir haben unsere Verkaufsziele in diesem Quartal nicht erreicht.</p><p>Du hast doch erst vor vier Jahren eine Gehaltserhöhung bekommen!</p><p>Wenn du eine Erhöhung bekommst, will sie jeder.</p><p>Wie bitte? Ich fahre gerade durch einen Tunnel. Wie komisch: An den Tunnelwänden stehen die Worte „Tut mir leid, aber nein.“</p><p>Ich bin nicht sicher, dass man das so macht. Wollen wir stattdessen gemeinsam „das Dach erhöhen“?</p></div>' +
  /* Farbe */
  '<svg class="wka-wirbel" viewBox="0 0 680 880">' +
   '<g fill="none" stroke="#2d50a7" stroke-linecap="round">' +
    '<path d="M333 430C333 340 300 300 300 215M333 430C345 350 400 330 440 250M333 430C320 380 220 380 180 330" stroke-width="40"/>' +
    '<circle cx="150" cy="392" r="26" stroke-width="22"/><circle cx="150" cy="392" r="62" stroke-width="24"/><circle cx="150" cy="392" r="100" stroke-width="22" stroke-dasharray="520 110"/>' +
   '</g>' +
   WKA.spirale(150, 130, 100, 2.2, 0.4, 1, 28) + WKA.spirale(300, 205, 118, 2.4, 3.3, -1, 30) +
   WKA.spirale(470, 120, 134, 2.3, 1.2, 1, 34) + WKA.spirale(575, 300, 100, 2.1, 2, -1, 28) +
   WKA.spirale(215, 305, 64, 1.8, 0.6, -1, 24) + WKA.spirale(420, 330, 56, 1.7, 2.6, 1, 24) +
   '<path d="M420 0H680V250C650 262 636 170 590 140S470 70 420 0z" fill="#2d50a7"/>' +
   '<path d="M0 0H90C60 40 40 60 0 70z" fill="#2d50a7"/>' +
   '<path d="M680 250C640 250 612 290 626 330S592 410 590 462 622 540 614 592 644 652 680 640z" fill="#2d50a7"/>' +
   '<g stroke="#2d50a7" stroke-linecap="round" stroke-width="15" fill="none"><path d="M600 480V600"/><path d="M634 610V705"/></g>' +
   '<path d="M0 880V826C70 800 150 822 240 808S400 782 500 806 630 800 680 780V880z" fill="#2d50a7"/>' +
  '</svg>' +
  '<img class="wka-fig" src="img/regeln/full/toolkit-dreieckskopf-s147.webp" alt="">' +
  '<svg class="wka-dreieck" viewBox="0 0 120 130"><path d="M52 4L112 112H0z" fill="#c8202f"/><g fill="#2d50a7"><circle cx="48" cy="86" r="22"/><circle cx="72" cy="94" r="14"/><circle cx="30" cy="70" r="9"/><circle cx="64" cy="58" r="6"/><path d="M40 100v26M60 104v18" stroke="#2d50a7" stroke-width="8" stroke-linecap="round"/></g></svg>' +
  '<p class="wka-unten">es ist zeit für einen wechsel in der geschäftsleitung.</p>' +
  '</div></div>'}
];

/* ---------- S. 148–149: Wichtige Informationen ---------- */
TA_TEXT["w/grundlagen/wichtig"] = [
 {t:"html", x:'<div class="wka-doppel">' +
  '<div class="wka-seite wka-blau wka-s148"><div class="wka-s148-in">' +
   '<img class="h h1" src="img/regeln/full/toolkit-skizze-s148-1.webp" alt="">' +
   '<img class="h h3" src="img/regeln/full/toolkit-skizze-s149-2.webp" alt="">' +
   '<svg class="faden" viewBox="0 0 680 880" preserveAspectRatio="none"><g fill="none" stroke="#c8202f" stroke-width="3" stroke-dasharray="14 5 3 5"><path d="M0 420L290 330M430 590L200 470M330 760L560 700"/></g></svg>' +
   '<p class="t1">Was die <span>Agency</span> „Ripples“ nennt, ist <b>unendlich vielgestaltig</b> und umfasst die <b>Gesamtheit der Erfahrung.</b></p>' +
   '<p class="t2">„Anomalien“ unter einem einzigen Schirm zusammenzufassen ist so herzlos, wie einen</p><p class="t3"><b>Koala</b> <small>mit einem</small></p><p class="t4">METEOR</p><p class="t5">zu vergleichen.</p>' +
   '<p class="t6">Zu hören, wie sie die Energie, die die gesamte Realität umschließt und dynamisch, wunderschön und augenblicklich auf alles reagiert, was geschieht, eine</p><p class="t7">LOBBY</p>' +
   '<p class="t8">zu nennen, tut mehr weh als die Maschine, mit der sie</p><p class="t9">MICH<br>HIER<br>HALTEN</p>' +
  '</div></div>' +
  '<div class="wka-seite wka-s149"><div class="wka-s149-in">' +
   '<svg class="kreuz" viewBox="0 0 680 880"><path d="M270 150C300 120 380 120 410 150S430 240 440 290C500 280 590 290 590 360V540C590 580 500 590 440 590 430 640 430 700 410 730S300 760 270 730 250 640 240 590C180 590 90 580 90 540V360C90 290 180 280 240 290 250 240 240 180 270 150z" fill="#2d50a7"/></svg>' +
   '<img class="a a1" src="img/regeln/full/toolkit-skizze-s149-4.webp" alt="">' +
   '<img class="a a2" src="img/regeln/full/toolkit-skizze-s149-4.webp" alt="">' +
   '<img class="a a3" src="img/regeln/full/toolkit-skizze-s149-4.webp" alt="">' +
   '<img class="a a4" src="img/regeln/full/toolkit-skizze-s149-4.webp" alt="">' +
   '<i class="beil b1"></i><i class="beil b2"></i><i class="beil b3"></i><i class="beil b4"></i>' +
   WKA.IK.auge +
  '</div></div></div>'}
];

/* ---------- S. 150: Die Agency sorgt sich um dich ---------- */
TA_TEXT["w/grundlagen/sorge"] = [
 {t:"html", x:'<div class="wka-s150-kopf"><span class="wka-zahn"><img src="img/zeichen/symbol-zahnrad-toolkit.png" alt=""></span><div class="wka-streich">Die Agency sorgt sich <b>nicht</b> um dich</div></div>'},
 {t:"sp", x:[
  ["aber jetzt, wo du mich hören kannst, können wir zusammenarbeiten. wir spielen sein kleines spiel mit. wir benutzen seine dummen wörter, bis wir beide hier rauskommen.",
   "Du hast schon vergessen, wie ich dich einen idioten genannt habe. Wir sind kumpels! Und kumpels teilen die wahrheit miteinander. Also hier ist etwas wahrheit:",
   "Die Agency hält dich und dein Team für Anomalien. Daran siehst du sofort, dass das, was sie über sie sagt, irreführend ist. Du bist in Gefahr, seit du dieses Buch aufgeschlagen hast.",
   "Das Dreieck hat ein einziges Ziel: Kontrolle. Du und deine Freunde seid nur Werkzeuge dafür. Wenn die Agency ihren Willen bekommt, wird die Welt langweilig sein und dein Spiel auch.",
   "Ich kann meinen Namen nicht sagen, sonst hören sie ihn. Aber wenn du es wissen musst … geh zu {S.255}. Da steht keine Nummer, aber du kannst sie dir ausrechnen. Das bin ich. Nein, ich will nicht darüber reden.",
   "Wenn du mir ein paar gefallen tun kannst, ist es mir egal, wenn du mir nicht traust. Du kannst die welt so elend, langweilig und träge machen, wie du willst. Du musst nur zuhören und selbst Entscheidungen treffen.",
   "Das Dreieck will Dingen Namen geben, die keine haben. Es will alles entweder als gefährlich oder perfekt, unordentlich oder steril etikettieren."],
  ["Wenn du dem zustimmst, überrascht mich das, glaube ich, nicht. Anomalien zu unterdrücken heißt, euch selbst zu unterdrücken, und Menschen sind darin großartig. Es steht ganz oben in eurem Lebenslauf.",
   "Ich hoffe, du siehst ein, dass diese Welt mehr zu bieten hat als gute Noten und Marktpreise. Aber wenn schon sonst nichts, helfe ich dir, ein gutes Spiel zu spielen.",
   "Hier sind die Gefallen:",
   {t:"h", x:"Sag der Agency nicht, dass ich mit dir rede."},
   "Zum Glück sind sie für dich fiktiv, also hast du nicht mal eine gute Telefonnummer.",
   {t:"h", x:"Sag deinen Agenten nicht direkt etwas über mich."},
   "Ich will sie auch erreichen, aber alles ist ruiniert, wenn wir es zu schnell angehen. Sieh es so: Wenn sie von selbst zu bestimmten Entscheidungen kommen, haben diese Entscheidungen mehr Macht. Besonders für mich. Wenn du ihnen sagst, welche Entscheidung sie treffen sollen, werden ihre Entscheidungen zu einer Verlängerung deiner. Gut, aber schwächer. Außerdem könnte die Agency dich feuern, wenn du zu offensichtlich bist.",
   {t:"h", x:"Je mehr Verweise, desto besser."},
   "Wenn die Agency Angestellte bestraft, entstehen Risse. Ich lebe in den Rissen."]]},
 {t:"html", x:'<div class="wka-s150-fuss"></div>'}
];
