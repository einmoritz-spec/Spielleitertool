/* Werkzeug › Leiten S. 177–184 (WorkScape, Workster-Intranet) */
(function(){
(function(){
var LOGO = IMG("regeln/full/os-logo-workscape"), NPC = IMG("regeln/full/os-workscape-gnom"), KUMPEL = IMG("regeln/full/buddy-pixel-symbol");
function T(s){ return tx(s).replace(/§([a-z])/g, function(m, c){ return '<i class="wke-em e-' + c + '"></i>'; }); }
function P(s, cls){ return {t:"html", x:'<p' + (cls ? ' class="' + cls + '"' : '') + '>' + T(s) + '</p>'}; }
function Ps(a, cls){ return a.map(function(s){ return P(s, cls); }); }
function Hh(s, cls){ return {t:"html", x:'<h3 class="' + (cls || "wke-px") + '">' + T(s) + '</h3>'}; }
function Q(cls, a){ return {t:"html", x:'<div class="wke-qs ' + cls + '">' + a.map(function(s){ return '<p>' + T(s) + '</p>'; }).join("") + '</div>'}; }
function Z(n){ return "img/zeichen/" + n + ".png"; }
function ZI(n, cls){ return '<img class="' + (cls || "") + '" src="' + Z(n) + '" alt="">'; }
/* Fenster des Browsers „Intranet Adventurer 3“ auf blauem Wirbel */
function BR(adr, cls, b, w){ return [{t:"os", art:"wirbel", b:[{t:"prog", art:"browser", titel:"Intranet Adventurer 3", adr:adr, cls:cls, w:w || 1100, b:b}]}]; }
function KOPF(titel, cls){ return {t:"html", x:'<div class="wke-kopf ' + (cls || "") + '"><img src="' + LOGO + '" alt=""><b>' + T(titel) + '</b></div>'}; }
function BUD(img, text, cls){ return '<div class="wke-bud ' + (cls || "") + '"><div class="wke-bl">' + T(text) + '</div><img src="' + IMG("regeln/full/" + img) + '" alt=""></div>'; }

/* ---- Workster ---- */
function WKOPF(aktiv, werbung){
  var m = ["Startseite", "Suche", "Freunde (0)", "Memo-Brett", "Veranstaltungen", "Neuigkeiten"];
  return {t:"html", x:'<div class="wke-wh"><div class="wke-logo"><b>workster</b><span>ein ort für arbeit</span></div>' +
    (werbung ? '<div class="wke-wtop"><nav><a>Profil</a><a>Einstellungen</a><a class="s">Abmelden</a></nav></div><div class="wke-ad2"><b>Starte deine kostenlose Testversion</b><i>Agency</i><em>Online</em></div>' : '<nav class="wke-wtop"><a>Profil</a><a>Einstellungen</a><a class="s">Abmelden</a></nav>') +
    '</div><nav class="wke-menu">' + m.map(function(x){ return '<a' + (x === aktiv ? ' class="akt"' : '') + '>' + x + '</a>'; }).join("") + '<em>Hilfe</em></nav>'};
}
function KNOEPFE(mitText){
  var K = [["zurueckkreisen", "Zurückkreisen"], ["rememo", "Rememo"], ["favorit", "Memo favorisieren"], ["feedback", "Feedback geben"]];
  return '<div class="wke-kn' + (mitText ? "" : " ohne") + '">' + K.map(function(k){ return '<u>' + ZI("workster-knopf-" + k[0]) + (mitText ? '<span>' + k[1] + '</span>' : '') + '</u>'; }).join("") + '</div>';
}
function MEMO(titel, body, knoepfe, extra){
  return '<article class="wke-memo"><header><img src="' + KUMPEL + '" alt=""><u>xX_DarkOcean7_Xx</u> hat ein Memo geschrieben<span>[ ••• ]</span></header>' +
    (titel ? '<h4>' + T(titel) + '</h4>' : '') + body.map(function(s){ return '<p>' + T(s) + '</p>'; }).join("") + (extra || "") + (knoepfe === false ? "" : KNOEPFE(knoepfe)) + '</article>';
}
var WERBUNG = '<div class="wke-werb"><small><span>WERBUNG</span><span>BEREITGESTELLT VON <i>Agency</i></span></small>' +
  '<div class="wke-konf"><b>GLÜCKWUNSCH, DU HAST GEWONNEN!</b><p>Das ist kein Scherz, du bist heute Leser Nr. 1.000.000.000. Hol dir deinen Preis!</p><a>HIER WEITERLESEN</a><small>GIB MIR DEINE KREDITKARTENDATEN</small></div></div>';

/* ---------- S. 177 Figuren ---------- */
TA_TEXT["w/leiten/figuren"] = BR("A://workscape/making_good_NPCs.html", "wke-ws", [
  KOPF("Charaktererschaffung"),
  {t:"kasten", cls:"wke-rahmen wke-f1", b:[{t:"sp", x:[
    [Hh("Alltäglich, aber interessant"),
     P("In Triangle Agency kannst du interessante und einprägsame Menschen für deine Agenten erschaffen, indem du gleich zu Beginn festlegst, wo sie auf diesen drei Skalen liegen:", "wke-pxt"),
     {t:"html", x:'<div class="wke-skalen"><p><b>Aufmerksam</b><i></i><b>Ahnungslos</b></p><p><b>Stur</b><i></i><b>Gelassen</b></p><p><b>Glücklich</b><i></i><b>Verflucht</b></p></div>'}],
    [{t:"html", x:'<div class="wke-npc"><img src="' + NPC + '" alt=""><span>crolf</span><div class="wke-slots"><u></u><u></u><u></u><u></u></div></div>'}],
    [P("In diesem Spiel dreht sich das meiste um deine Agenten, und das sind die Eigenschaften, die bestimmen, wie man an Leute herantreten muss. Ein aufmerksamer, sturer und glücklicher Mensch wird ein äußerst schwer aufzuräumendes Loses Ende sein – während ein ahnungsloser, gelassener, verfluchter Mensch eine unkomplizierte Angelegenheit ist.", "wke-ser"),
     P("**Mischen und Kombinieren macht sie einprägsam.** Jemand, der aufmerksam und glücklich, aber gelassen ist, lässt sich vielleicht leicht davon abbringen, ein Loses Ende zu sein, macht sich aber danach auch schnell wieder zu einem. Dagegen wirkt jemand, der ahnungslos, aber stur und glücklich ist, vielleicht harmlos, wird jedoch zu einem Losen Ende, das man unmöglich abschütteln kann, nachdem er ausgerechnet im denkbar schlechtesten Moment darüber stolpert, wie deine Agenten ihre Kräfte einsetzen.", "wke-ser")]]}]},
  {t:"kasten", cls:"wke-f2", b:[{t:"sp", x:[
    [{t:"html", x:'<div class="wke-pfeil"><p>' + T("Wenn du die Extrameile gehen und Nebenfiguren erschaffen willst, auf die deine Agenten sich fixieren werden, beantworte auch diese Fragen!") + '</p></div>' +
       '<div class="wke-zitat"><img src="' + KUMPEL + '" alt=""><p>' + T("„Deine NSC werden nur besser, wenn du ihrem Leben und ihren einzigartigen Persönlichkeiten zusätzlich zu diesen Fragen Details hinzufügst, aber du wirst feststellen, dass letztlich dies die Maßstäbe sind, um die sich deine Agenten am meisten kümmern werden. Du musst deinen Agenten diese Unterschiede nie direkt mitteilen; es ist nur eine Orientierungshilfe für dich.“") + '</p></div>'}],
    [{t:"html", x:'<div class="wke-fragen"><p>' + T("Was ist der lächerlichste Satz, den diese Person vermutlich sagen würde?") + '</p><hr><p>' + T("Worauf bringt sie jedes Gespräch, wenn man sie lässt?") + '</p><hr><p>' + T("Weint sie unter Stress, schreit sie, löst sie Probleme, fängt sie einen Streit an, rennt sie weg oder tut sie etwas anderes?") + '</p></div>' +
       '<div class="wke-dunkel"><p>' + T("Versuche, dich nicht auf Zahlen oder Menschenmengen zu verlassen, um Agenten zu interessieren. Sobald du auf eine Gruppe von Leuten hinweist, führe schnell eine einzelne Person aus dieser Gruppe ein, die du so gebaut hast. Dann sieh zu, wie sie sich verlieben!") + '</p></div>' +
       BUD("buddy-10-s177", "je nach figur willst du vielleicht auch vorher wissen, wie heiß sie ist.")}]]}]}
]);

/* ---------- S. 178 Beziehungen ---------- */
TA_TEXT["w/leiten/beziehungen"] = BR("A://workscape/relationships.html", "wke-ws", [
  KOPF("Beziehungen", "wke-kopf2"),
  {t:"kasten", cls:"wke-f3", b:[{t:"sp", x:[
    [P("Der Agency ist es egal, ob deine Agenten Leute töten, solange die Tötungen nicht noch mehr Lose Enden erzeugen.", "wke-lead"),
     P("Das heißt, es liegt an dir, Lose Enden besonders robust zu machen, indem du ihre Beziehungen einbeziehst. Selbst wenn es hergeholt ist, sie einzubauen, versuche sicherzustellen, dass jeder Einsatz, besonders Aufräum-Einsätze, ein paar Beziehungen einbezieht.", "wke-ser"),
     P("Man sollte meinen, die Kontrolle über diese Figuren an deine Agenten zu geben würde sie zu leicht abzuwickelnden Losen Enden machen, aber das ist fast nie der Fall.", "wke-ser"),
     P("Führe eine Liste von Beziehungen und versuche, durch die Adressbücher deiner Agenten zu rotieren, und hebe besonders jene hervor, mit denen sie in der Zeitphase nicht abhängen.", "wke-ser")],
    [{t:"html", x:'<div class="wke-tipps"><h3 class="wke-px mitte">' + T("Hier sind einige Tipps, um Begegnungen mit Beziehungen interessant zu gestalten:") + '</h3>' +
       '<h4 class="wke-px">Sie brauchen oder wollen immer etwas.</h4>' +
       '<p>' + T("Jedes Mal, wenn sie auftauchen, sollte es etwas Dringendes geben, wofür sie den Agenten brauchen. Wenn eine Beziehung auftritt, gib der Person, die sie spielt, ein Stückchen Information oder eine Leitfrage mit.") + '</p>' +
       '<p>' + T("„Welche Neuigkeit brennt dir darauf, ihr mitzuteilen?“") + '</p>' +
       '<p>' + T("„[Der Agent] hat letzte Woche etwas Wichtiges für dich vergessen. Sag ihm, was es ist.“") + '</p>' +
       '<h4 class="wke-px">Lass ihre Entdeckungen im Gespräch wahr sein.</h4>' +
       '<p>' + T("Beziehungen machen viel weniger Spaß, wenn sie ständig nachfragen müssen, ob sie dein Rätsel ruinieren. Wenn etwas auf keinen Fall wörtlich wahr sein kann, finde einen Weg, wie die Tatsache, dass sie es gesagt haben, wahr ist. Es ist kein großes Ding, ein Stück zurückzuspulen, aber oft findet man etwas Interessantes, wenn man weiter vorprescht.") + '</p>' +
       '<p>' + T("„Hier ist die Wendung: Sie haben das definitiv nicht passieren sehen. Warum haben sie das gesagt? Lügen sie?“") + '</p></div>'}]]}]},
  {t:"kasten", cls:"wke-f3b", b:[
    {t:"fenster", art:"fehler", titel:"MyManual ’98", h:"Konsequenzen betonen", b:["Aufräum-Einsätze sind eine großartige Möglichkeit, die Macht der Arbeit der Agency zu zeigen. Die Realität wird von einem Faden zusammengehalten, und dieser Faden *ist* die Agency."]},
    P("Es ist auch eine großartige Gelegenheit zu zeigen, wie beängstigend es ist, dass dieses Unternehmen ganze Teams übermenschlich begabter Leute hat, die die ganze Welt manipulieren. Die eigene Wirksamkeit der Agenten sollte zugleich befriedigend und belastend sein. Sie hinterlassen eine Spur aus Lügen.", "wke-ser"),
    P("Besonders große Lügen – vor allem gegenüber Beziehungen – sollten immer wieder zurückkommen und sie heimsuchen. Erinnere sie an das, was sie getan haben. In allen Arten von Einsätzen sorgt schon eine einzige Erinnerung an frühere Taten der Agenten dafür, dass sich die Welt vernetzt anfühlt und der Einsatz real wirkt. Nutze diese Fragen, um sicherzustellen, dass Aufräum-Einsätze denselben Vorwärtsdrang haben wie andere Arten.", "wke-ser"),
    Q("wke-qg", ["Wer beobachtet die Agenten?", "Welche Lose Enden erzeugen sie, indem sie versuchen, andere in Ordnung zu bringen?", "Welche Lügen waren dünn genug, um später aufgedeckt zu werden?", "Wer trägt einen Groll?"])]}
]);

/* ---------- S. 179 Marktstörung ---------- */
TA_TEXT["w/leiten/markt"] = BR("A://workscape/relationships.html", "wke-ws wke-markt", [
  {t:"kasten", cls:"wke-top", b:[{t:"sp", x:[
    [{t:"fenster", art:"fehler", cls:"wke-mm", titel:"MyManual ’98", h:"Marktstörung", b:["Wie in jeder Branche kann auch die Welt der anomalen Eindämmung und Forschung wettbewerbsorientiert werden. Das ist natürlich – der Freie Markt soll erhalten und befähigt werden, auf diese Weise weiterzubestehen. Dank eben dieses Freien Marktes steht es uns frei, Konkurrenz zu beseitigen, wie wir es für richtig halten."]}],
    [{t:"html", x:'<div class="wke-fb"><div class="wke-fav"><small>Favoriten</small><div><p>eZconvert: .doc umwandeln..</p><p>aBay: Gebrauchte Büro..</p><p class="s">workster: ein ort für ar..</p><em>▼</em></div></div>' +
      '<img class="wke-k11" src="' + IMG("regeln/full/buddy-11-s179") + '" alt=""><div class="wke-bl">' + T("gibt es neue freundschaftsanfragen?") + '</div></div>'}]]}]},
  {t:"kasten", cls:"wke-f4", b:[{t:"sp", x:[
    [P("Nicht jedes Lose Ende zittert in den Stiefeln und sagt „ein G-G-G-, ein G-G-G-G-, eine ANOMALIE!!!“", "wke-lead"),
     P("Hin und wieder erkennen sie eine Gelegenheit. Meist, um Geld zu verdienen. Diese Leute können Machenschaften – und manchmal ganze Imperien – um eine einzige Anomalie aufbauen.", "wke-ser"),
     P("Menschen und andere Normalsterbliche tun ständig dumme Dinge. Sie öffnen Löcher zur Lobby und werden von Ripples verschlungen; gründen Kulte um Anomalien, die sie nicht verstehen; versuchen, ihre eigenen Anomalien zu erschaffen; versuchen, sich selbst zu Resonanten zu zwingen … die Liste ist endlos.", "wke-ser"),
     P("Marktstörung ist die Art Einsatz, die du für so etwas durchführst. Ist ein winziges Loses Ende zu einer Kraft herangewachsen, die zu mächtig ist, um sie zu ignorieren, ruft die Agency möglicherweise einen davon aus.", "wke-ser"),
     P("Normale Menschen sind für Agenten auf lange Sicht extrem schwer zu handhaben. Anomalien mögen tödlich oder furchterregend oder selbstsüchtig sein – aber Menschen sind nicht auf einen einzigen Fokus beschränkt, sind äußerst anpassungsfähig, bewegen sich in Gruppen und haben eine Fähigkeit zur Grausamkeit, die Anomalien nur widerspiegeln. Ob deine Agenten diese Ziele leichter oder schwerer zu beseitigen finden als Anomalien, wird dir viel über sie verraten.", "wke-ser"),
     P("Wenn die Agency sich endlich genug kümmert, um Agenten einen Marktstörungs-Einsatz zu geben, läuft er ähnlich ab wie ein Anomalie-Bergungs-Einsatz. Aber das Dreieck muss sich zuerst wirklich kümmern. Du kannst Optionale Ziele nutzen, um sie anzuregen, mehr über diese Leute zu erfahren, bis es Zeit ist, sie auszuschalten.", "wke-ser")],
    [{t:"fenster", art:"fehler", cls:"wke-oz", titel:"Optionale Ziele", b:[
      "**Du brauchst ein paar davon für jedes Briefing.** Überlege dir 2–5 Dinge, die Agenten vom offensichtlichsten Weg abbringen oder sie dazu bringen könnten, im Einsatz etwas zu tun, was sie sonst nicht tun würden, um ihr Verhalten zu beobachten.",
      "Die typischsten Beispiele dafür sind:",
      {t:"html", x:'<div class="wke-ziele">' + [
        ["Ein positives Ziel, das ihnen etwas gibt, worauf sie sich freuen können", "+1 Belobigung für jeden gefundenen Glückskeks"],
        ["Ein positives Ziel, das sie in Konflikt mit ihren Teamkollegen bringt", "+3 Belobigungen für den ersten Agenten, der einen Heiratsantrag erhält."],
        ["Ein positives Ziel, das sie anregt, tiefer in ein Nebendetail des Einsatzes zu blicken, das du sie gern sehen lassen würdest", "+1 Belobigung, wenn du den Namen eines Geistes erfährst"],
        ["Ein negatives Ziel, das sie zwingt, einen langen Umweg um ein sonst leichtes Hindernis zu nehmen", "+1 Verweis für jede Erwähnung des Elefanten"],
        ["Ein negatives Ziel, das extrem verlockend zu brechen ist", "+3 Verweise, wenn du den Fährmann fragst, warum er Orangensaft hasst"]
      ].map(function(z){ return '<p><b>' + T(z[0]) + '</b>' + T(z[1]) + '</p>'; }).join("") + '</div>'}]}]]}]}
], 1200);

/* ---------- S. 180 Wiederkehrende Gegenspieler ---------- */
TA_TEXT["w/leiten/gegenspieler"] = BR("atp://workster/antagonists_and_factions.php", "wke-wk", [
  WKOPF("Memo-Brett"),
  {t:"html", x:'<div class="wke-raster"><aside>' +
    '<div class="wke-box"><h3>Workster-Kleinanzeigen</h3><img class="wke-foto" src="' + IMG("regeln/full/buddy-12-s180") + '" alt=""><div class="wke-bx"><p class="wke-nm"><img src="' + KUMPEL + '" alt=""><u>xX_DarkOcean7_Xx</u>:</p><p class="wke-bl2">' + T("Hier sind einige Arten von Leuten, mit denen die Agency am wenigsten gern zu tun hat. Die Liste ist nicht einmal annähernd vollständig, aber ich kann dir eine Vorstellung davon geben, was ihnen wirklich unter die Haut geht.") + '</p></div><p class="wke-lk">' + ZI("workster-korrespondieren") + '<u>Korrespondieren</u></p><p class="wke-lk">' + ZI("workster-abgleichen") + '<u>Abgleichen</u></p></div>' +
    '<div class="wke-box wke-m"><p class="wke-lk">' + ZI("workster-neues-memo") + '<u>Neues Memo</u></p><p class="wke-lk">' + ZI("workster-meine-memos") + '<u>Meine Memos</u></p><p class="wke-lk">' + ZI("workster-lieblingsmemos") + '<u>Lieblingsmemos</u></p><hr></div>' + WERBUNG + '</aside><main>' +
    '<div class="wke-titel"><img src="' + IMG("regeln/full/os-pixel-avatar") + '" alt=""><b>Wiederkehrende Gegenspieler</b><a class="wke-neu">Erstellen ' + ZI("workster-neues-memo") + '</a></div>' +
    MEMO("Kult des Losen Endes", [
      "Ein oder mehrere zurückgelassene Lose Enden können sich zu einer Gemeinschaft zusammenschließen §r, die sich gegenseitig im Auge behält §a. Oft folgen sie den Agenten heimlich und werben neue Lose Enden als Mitglieder an. §b",
      "Sie werden meist von einem Missverständnis oder einem Ziel rund um die Agenten und die Agency angetrieben – sehen sie sie als Helden? Als Schurken? Als etwas, das erobert oder kontrolliert werden muss? §g",
      "Das Beste an ihnen ist ihre Neigung, neue Anomalien zu erschaffen. So viele Menschen, mit so viel Information, alle auf dasselbe fokussiert? Meine Art von Ärger. §s"], true) +
    MEMO("Großmaul", [
      "Sie sind berühmt, gut bewacht, sie beobachten immer – und sie halten nie die Klappe. §r Sie machen liebend gern mehr Lose Enden, haben aber keine Ahnung, was sie tun. Viele Leute hören trotzdem zu.",
      "Manchmal werden sie allein durch Schwerkraft zu einem Kult des Losen Endes. §b Vielleicht suchen sie mehr Ruhm, vielleicht versuchen sie ernsthaft, ihrer Welt zu helfen, aber was auch immer sie tun, sie machen jeden Einsatz schwerer – aus der Sicherheit ihres Zuhauses. §y"], false, '<p class="wke-weiter">[ <a>Nächste Seite</a> ]</p>') +
    '</main></div>'}
], 1200);

/* ---------- S. 181 Fraktionen ---------- */
TA_TEXT["w/leiten/fraktionen"] = BR("atp://workster/antagonists_and_factions.php", "wke-wk", [
  {t:"html", x:'<div class="wke-raster wke-fr"><aside>' +
    '<div class="wke-wordart"><b>FRAKTIONEN</b></div>' +
    '<p class="wke-fl">' + T("**Was der Region deiner Zweigstelle eine persönliche Identität geben kann – und eine Quelle für wiederkehrende Gegenspieler ist –, ist eine Liste von Organisationen und Gemeinschaften der Region.** Unten stehen ein paar Grundlagen, die ich im Auge zu behalten empfehle:") + '</p>' +
    '<div class="wke-banner b-konzern"><small>Der</small><b>Größte<br>Konzern</b></div>' +
    '<p class="wke-fl">' + T("Die Agency ist ein Unternehmen, das Produkte verkauft und Geschäfte macht – und das *wirklich gut*. Benachbarte Konzerne können nicht dieselbe ganzheitliche Macht haben wie die Agency, aber vielleicht werden sie in einer bestimmten Sache gut genug, um der Agency lästig zu werden.") + '</p><p class="wke-fq">' + T("Worauf ist deine Region spezialisiert, und was lernt die Agency daraus?") + '</p>' +
    '<div class="wke-banner b-party"><b>Die Seelen</b><small>der Party</small></div>' +
    '<p class="wke-fl">' + T("Warum mögen die Leute deine Region? Was sind die beliebten Zeitvertreibe, und wer kontrolliert sie?") + '</p><p class="wke-fq">' + T("Welche Anomalien könnten aus den besonderen Interessen deiner Region entstehen?") + '</p>' +
    '<div class="wke-banner b-nette"><small>Die</small><b>Netten</b></div>' +
    '<p class="wke-fl">' + T("Die Menschen versuchen immer, die Welt zu verbessern – allen Widrigkeiten zum Trotz.") + '</p><p class="wke-fq">' + T("Wer ist da draußen und arbeitet daran, deine Region zu einem besseren Ort zu machen, und wie macht die Agency ihre Versuche schwerer?") + '</p>' +
    '</aside><main>' +
    '<div class="wke-fort"><h4>Großmaul <small>(Forts.)</small></h4><p>' + T("Manchmal informiert das Netzwerk eines Großmauls es über Anomalien, noch bevor die Agency davon weiß, was Ermittlungen noch schwerer macht. Die besten Großmäuler sind äußerst sympathisch und haben immer recht. §p") + '</p>' + KNOEPFE(false) + '</div>' +
    MEMO("Träger des Frankenstein-Preises für herausragende Leistungen in der Verrückten Wissenschaft", [
      "Eine zurückgezogen lebende Person – oder eine Gruppe von Personen –, die versucht, Anomalien in nutzbare Wissenschaft zu verwandeln. Das geht meist schlecht aus. §r",
      "Wie eine Anomalie, die von Rätseln abhängt, lassen sich Frankenstein-Preisträger erst aufspüren, nachdem sie ein großes Schlamassel angerichtet haben. Manchmal mehrere. §g §p Ganze Karrieren können das Nebenziel haben, die Quelle dieser Anomalie- und Pseudo-Anomalie-Generatoren aufzuspüren.",
      "Oft versuchen sie, selbst zu Resonanten zu werden – aber es einer unwilligen Anomalie aufzuzwingen, kann auf viele verschiedene Arten schiefgehen.",
      "Das Schlimmste: Nachdem deine Agenten sich so bemüht haben, sie aufzuhalten, wird die Agency kehrtmachen und sie anwerben! Kaum bis keine Fragen gestellt. Setzt mal ein paar Maßstäbe, Dreieck. §o"], false) +
    '<div class="wke-bud wke-b13"><div class="wke-bl">' + T("und vergiss mich nicht!") + '</div><img src="' + IMG("regeln/full/buddy-13-s181") + '" alt=""><div class="wke-sag">' +
      '<p>' + T("Gegenspieler, Fraktion, Freund? Ich kann alles sein, was du brauchst! Und obwohl ich hier drinnen festsitze, meine Leute tun es nicht. Schau dir deine Region nach meinen Urgents an, über die du unter [[X2]] mehr erfahren kannst. Sie können manchmal direkt mit deinen Agenten sprechen, auf eine Weise, wie ich es nicht kann. Ich leite sie nicht, wir sind keine Organisation dieser Art, aber ich vertraue darauf, dass sie tun, was ich täte: der Agency in die Quere kommen. §g") + '</p>' +
      '<p>' + T("Agenten werden sie treffen müssen, wenn sie Zeit in ihre Anomalie-Spur investieren, also ist es gut, eine Vorstellung davon zu haben, wo sie abhängen. Du erkennst sie daran, dass sie wie totale Freaks aussehen (liebevoll gemeint). §y") + '</p></div></div>' +
    '</main></div>'}
], 1200);

/* ---------- S. 182–184 Morgenbesprechungen ---------- */
var SZ = function(cls, t, a, intro){ return '<div class="wke-sz ' + cls + '"><div class="wke-szt"><b>' + t + '</b></div>' + (intro ? '<div class="wke-szx">' + intro + '</div>' : '') + '<div class="wke-szq">' + a.map(function(s){ return '<p>' + T(s) + '</p>'; }).join("") + '</div></div>'; };
TA_TEXT["w/leiten/morgen"] = [].concat(BR("atp://workster/morningmeetings.php", "wke-wk", [
  WKOPF("Veranstaltungen", true),
  {t:"html", x:'<div class="wke-ev"><div class="wke-evl"><div class="wke-mmk"><h3>' + ZI("workster-becher") + 'Morgenbesprechungen</h3></div>' +
    '<div class="wke-evt"><p><img class="ei" src="' + KUMPEL + '" alt="">: ' + T("Während sie bei einer Ermittlung im Außendienst sind, entscheiden deine Agenten, wohin sie gehen und mit wem sie sprechen. Bei den Morgenbesprechungen bist du der Entscheider. §g Diese Phase ist eine Gelegenheit für dich, die Teile im Leben der Agenten ins Licht zu rücken, die dich am meisten interessieren, Aspekte der Region zu untersuchen, die du noch nicht ausgearbeitet hast, oder sogar einen Handlungsfaden einzulösen, den jemand vor mehreren Einsätzen angelegt hat. §b") + '</p>' +
    '<p>' + T("**Vergeude diese Zeit nicht.** Jede Szene in dieser Phase kann dem Einsatz etwas Wichtiges hinzufügen. Du kannst liegengebliebene Handlungsfäden aufgreifen, Agenten daran erinnern, wofür sie arbeiten, oder sogar Hinweise für die spätere Ermittlung vergraben! Es ist auch eine Gelegenheit für Agenten, die Welt zu beeinflussen – stell viele Fragen und lass sie so viele Details wie möglich ausfüllen. §f Vielleicht geben sie dir ein interessantes Detail, das du in die kommende Sitzung einflechten kannst.") + '</p></div></div>' +
    '<aside class="wke-evr"><div class="wke-teil"><p>Gehst du zu dieser Veranstaltung?</p><p><span class="ja">◉ <b>Ja</b></span><span class="x"><s>✗</s> Nein</span><span class="x"><s>✗</s> Vielleicht</span></p></div>' +
    '<div class="wke-info"><h4>Veranstaltungsinfo</h4>' + [["ort", "Wo?", "Überall"], ["agenten", "Wer?", "Deine Agenten"], ["leitung", "Wer leitet?", "Du"], ["plan", "Benötigte Gegenstände", "Ein Plan"]].map(function(z){ return '<div>' + ZI("workster-" + z[0]) + '<p>' + z[1] + '<b>' + z[2] + '</b></p></div>'; }).join("") + '</div></aside></div>'},
  {t:"html", x:'<div class="wke-szk"><h3>' + ZI("workster-szenenarten") + 'Szenenarten</h3></div>' +
    SZ("leben", "LEBENS-<br>SZENE", ["Wie haben sich die Dinge seit dem letzten Einsatz verändert, und welche Beziehung kann die Veränderungen am besten zeigen?", "Kannst du einen Agenten in eine Situation versetzen, die thematisch zum Fokus der Anomalie passt?", "Welche Beziehung wurde schon länger nicht mehr gesehen?", "Was Interessantes passiert in deiner Gegend, das nichts mit Anomalien zu tun hat?", "Welche Beziehung hat gerade offene Rechnungen mit einem Agenten?", "Wie wirkt sich das Thema des nächsten Einsatzes schon jetzt auf die Welt aus?"],
      '<p>' + T("Das ist die flexibelste Szenenart und auch die am leichtesten zu erfindende. §y Wähle einen Agenten, seine interessanteste Beziehung und einen Ort! Sie können auch nützlich sein, um die kleinen, aber zunehmend unsubtilen Arten zu zeigen, wie die Anomalie dieser Woche die Welt beeinflusst. Ich empfehle, Lebensszenen für jede der Morgenbesprechungen deiner Agenten vor ihrem ersten Einsatz zu nutzen.") + '</p><p>' + T("Beziehungen füreinander zu spielen ist für viele Agenten einer der spaßigsten Teile und gibt ihnen viel Macht, die Welt zu gestalten. §r Auch nach dem ersten Einsatz ist es in Ordnung, wenn diese durchgängig etwa 2/3 deiner Morgenbesprechungen ausmachen, besonders wenn dein Außenteam zwischen den Einsätzen nicht viel Zeit in seine Realität steckt.") + '</p>') +
    '<div class="wke-szk f"><h3>' + ZI("workster-szenenarten") + 'Szenenarten <small>(Forts.)</small></h3></div>' +
    '<div class="wke-werb2"><small><span>WERBUNG</span><span>BEREITGESTELLT VON <i>Agency</i></span></small><div><p>hast du je <b>GELESEN</b><br>mit deinen <b>AUGEN</b> genau hier?</p><i>➜</i><b class="du">HAST<br>DU</b><em>GEDANKENKONTROLLE LERNEN</em></div></div>' +
    SZ("arbeit", "ARBEITS-<br>SZENE", ["Wie groß ist sie? Kommt man leicht herum, oder ist sie ein Labyrinth?", "Wie ist die interne Politik? Hat jemand den „guten“ Schreibtisch, Parkplatz oder Spind? Warum?", "Fühlt sich deine Zweigstelle wichtig an, von der Agency insgesamt ignoriert oder von den Entscheidungen einer größeren Zweigstelle in der Nähe übermäßig beeinflusst?", "Was macht der General Manager deines Außenteams zwischen den Briefings?", "Wie ist das Verhältnis jedes Agenten zu seinem Abteilungsleiter?", "Wie steht die Agency zu den Entscheidungen deiner Agenten? Wie lässt sie die Agenten das wissen?", "Werden Mitarbeiter für „gut verbrachte“ Zeit belohnt oder zu zermürbender Nachholarbeit gezwungen?", "Wie riecht es? Riecht es überall so?"],
      '<p>' + T("Diese Szenen begleiten Agenten, wenn sie im Büro sind, sich mit Kollegen unterhalten oder sich auf ihre Pflichten außerhalb der Außendienstarbeit konzentrieren. Nutze sie als Gelegenheit zu erkunden, was das Hauptquartier und die Belegschaft deiner Zweigstelle einzigartig macht. §p") + '</p><p>' + T("Agenten werden normalerweise sehr beschäftigt gehalten. Wenn ihre To-do-Liste endlich leer ist, werden sie trotzdem „in Bereitschaft“ gehalten. Jede Aufgabe wird als weltbewegend wichtig beschrieben, selbst wenn sie banal wirkt. §k Die Alltäglichkeit anomaler Effekte kann Dinge außerordentlich bequem machen, kann aber ebenso leicht die Arbeit schwieriger machen. Türen wechseln ihre Ziele, Flure dehnen sich, während man sie entlanggeht, und Vorgesetzte tauchen ohne Vorwarnung hinter einem auf. §p") + '</p>') +
    '<div class="wke-wahr"><h3><img src="' + KUMPEL + '" alt="">HIER SIND DINGE, DIE ICH ÜBER DIE MEISTEN ZWEIGSTELLEN ALS WAHR ERKANNT HABE:</h3><div>' +
      ["Die Befehlskette ist schwer nachzuvollziehen, und die meisten Leute kennen nur ihren direkten Vorgesetzten und ihre direkten Untergebenen. Verfolgt man die Spur lange genug, sieht es aus, als drehte sie sich im Kreis – Befehle und Pläne tauchen oft ohne klare Quelle auf.",
       "Jede Zweigstelle hat eine Vault-Tür, die mit dem einen Vault verbunden ist, den sich alle Zweigstellen teilen.",
       "Der Vault ist riesig, sorgfältig bewacht, und nur die rätselhaften Architekten wissen, wie man sich darin zurechtfindet. „Bewohnte“ (pfui) Normale Aktenkoffer werden meist in der Nähe der Vault-Tür abgelegt, aber nicht darin. §b",
       "Die Agency scheut keine Kosten, wenn es um manche Ausrüstung, Material oder Einrichtung geht, lässt andere Dinge aber weit über den Punkt des Versagens hinaus verkommen. Ich habe keine Möglichkeit gefunden zu erkennen, welches Ding welche Behandlung bekommt – oder warum. §n",
       "Agenten, die keine Außendienst-Agenten sind, erscheinen selten, wenn überhaupt, in der Außenwelt. Über das Privatleben zu reden ist während der Arbeitszeit verpönt. Nicht alle dieser Agenten sind außerdem Resonanten. (ehrlich gesagt habe ich keine Ahnung, was mit diesen Spinnern los ist §n)"].map(function(s){ return '<p>' + T(s) + '</p>'; }).join("") + '</div></div>'}
]), BR("atp://workster/events.php", "wke-wk", [
  WKOPF("Veranstaltungen"),
  {t:"html", x:'<div class="wke-szk f2"><h3>' + ZI("workster-szenenarten") + 'Szenenarten <small>(Forts.)</small></h3></div>' +
    '<div class="wke-sz macht"><div class="wke-szt"><b>MACHTSZENE</b></div><div class="wke-szx"><p>' + T("Das Verhältnis zwischen der gewöhnlichen Seite eines Resonanten und seiner anomalen Kraft ist nicht immer geradlinig. §b Die Agency hat recht – die Kräfte, die sie isoliert hat, sind die verlässlichsten und vorhersehbarsten. Aber sie sind nicht die mächtigsten, und manchmal werden deine Agenten ihre Fähigkeiten erkunden wollen. Selbst wenn nicht, kann diese Kraft einen eigenen Willen haben – besonders, wenn sie ignoriert wird. §g") + '</p></div>' +
    '<div class="wke-szq">' + ["Wie kann die Anomalie eines Agenten sein Leben auf eine Weise verbessern, die er gemieden hat?", "Was würde ihre Anomalie für den aktuellen Fokus des Agenten halten?", "Wohin geht ein Agent, um allein zu sein? Um sich sicher zu fühlen?", "Entscheidet der Agent, wann er seine Kraft erkundet, oder sprudelt sie über, wenn er durch Stress, Wut oder Hunger aufgewühlt ist?", "Wie bringst du einen Agenten dazu, seine aktuelle Meinung darüber zu äußern, ein Resonant und damit ein Außenseiter zu sein? Fühlt er sich noch mit Menschen verbunden, oder fällt es ihm schwer, sich als einer zu sehen?"].map(function(s){ return '<p>' + T(s) + '</p>'; }).join("") + '</div>' +
    '<div class="wke-szq2">' + ["Wie könnte ihre Anomalie auf die Anwesenheit einer starken Anomalie in der Nähe reagieren?", "Verändert sich etwas an der Manifestation ihrer Anomalie aufgrund jüngster Ereignisse oder ihres letzten Einsatzes?"].map(function(s){ return '<p>' + T(s) + '</p>'; }).join("") + '</div></div>' +
    '<div class="wke-fluss"><p>' + T("Wer deine Agenten werden, hängt ganz von ihrem Verhältnis zur Macht ab. Wenn man ihre Fähigkeiten dann hervorlockt, wenn die Agency es nicht billigen würde, kann das sie dazu bringen, wirklich nachzudenken. §r Was ist ihnen am wichtigsten: persönliche Macht über die Welt? §b Zugehörigkeit, selbst auf Kosten ihrer eigenen Macht? §b Oder zu wissen, dass es einen Plan für ihre Kraft gibt, auch wenn es kein Plan ist, den sie wählen dürfen? §o") + '</p>' +
    '<p>' + T("Das sind die schwierigsten Szenen, die man allein aufbauen kann. §o Hab keine Angst, einem Spieler viele Fragen zu stellen, und achte darauf, dass du ihn nicht in etwas drängst, das er nie tun würde. Machtszenen können auch eine überraschende Entwicklung aus einer der anderen Szenenarten sein – wenn ein Agent beschließt, während einer davon eine Fähigkeit im großen Stil einzusetzen, lehne dich in den Tonwechsel hinein. §g") + '</p>' +
    '<p>' + T("Nachdem sie begonnen haben, sich mit Entkommenen Anomalien, Urgents und Mir zu verbinden, können sich diese Szenen ein wenig mehr wie Lebensszenen anfühlen. Das ist gut! §o") + '</p></div>' +
    '<div class="wke-szu">' + ["Auf was arbeitet die Urgent-Gemeinschaft in deiner Gegend hin? Wo trifft sie sich?", "Wer ist da draußen, den sie entdecken können, wenn sie sich außerhalb der Aufmerksamkeit der Agency bewegen? Wer könnte bemerken, wie sie ihre Kräfte einsetzen, bevor die Agency es tut?", "Was fürchten sie zu verlieren oder zu gewinnen?", "Welche Fragen haben sie an sich selbst?"].map(function(s){ return '<p>' + T(s) + '</p>'; }).join("") + '</div>'}
], 1200));
})();
})();
