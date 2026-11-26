/* Werkzeug › Anomalien bauen (S. 151–161). Jede Buchseite ist eine „Bühne“ (wkb-s): durchsichtige Gestaltungsebene aus dem Buch
   (img/zeichen/wkb-s<seite>.png, ohne Text) mit übersetzten Textkästen darauf. Unter 720 px Breite fließt alles untereinander.
   Koordinaten der Kästen: Pixel einer 850×1100-Buchseite. Auszeichnung: {{…}} = Zwischentext des Kumpels (blau), § = Chaos-Wirbel. */
function wkbT(s){ return tx(s).replace(/§/g, '<img class="wkb-cw" src="' + Z("symbol-chaos-wirbel") + '" alt="">').replace(/\{\{(.+?)\}\}/g, '<span class="wkb-ku">$1</span>').replace(/‹(.+?)\|(.+?)(?:\|(l))?›/g, '<span class="wkb-ab">$1<span class="wkb-fl $3">$2</span></span>'); }
function wkbP(a){ return a.map(function(s){ return '<p>' + wkbT(s) + '</p>'; }).join(""); }
function wkbK(a){ return '<ul class="wkb-k">' + a.map(function(s){ return '<li>' + wkbT(s) + '</li>'; }).join("") + '</ul>'; }
function wkbH(s, g, c){ return '<div class="wkb-h ' + (c || "") + '" style="font-size:' + (g / 8.5).toFixed(2) + 'cqw">' + wkbT(s) + '</div>'; }
function wkbB(x, y, w, html, o){ o = o || {};
  var st = 'left:' + (x / 8.5).toFixed(2) + '%;top:' + (y / 11).toFixed(2) + '%;width:' + (w / 8.5).toFixed(2) + '%;' + (o.h ? 'height:' + (o.h / 11).toFixed(2) + '%;' : '') + (o.r ? 'transform:rotate(' + o.r + 'deg);transform-origin:' + (o.og || "0 0") + ';' : '') + (o.s || '');
  return '<div class="wkb-b ' + (o.c || '') + '" style="' + st + '">' + html + '</div>'; }
/* Systemfenster: im Breitformat nur Text auf dem Fenster der Buchebene, schmal als eigene Karte */
function wkbWin(x, y, w, h, kind, titel, body, o){ o = o || {}; var t = o.t || [60, 8], b = o.b || [30, 60, w - 60];
  var html = '<div class="wt" style="left:' + (t[0] / w * 100).toFixed(2) + '%;top:' + (t[1] / h * 100).toFixed(2) + '%;font-size:' + ((o.ts || 26) / 8.5).toFixed(2) + 'cqw">' + wkbT(titel) + '</div>' +
    '<div class="wb" style="left:' + (b[0] / w * 100).toFixed(2) + '%;top:' + (b[1] / h * 100).toFixed(2) + '%;width:' + (b[2] / w * 100).toFixed(2) + '%;font-size:' + ((o.bs || 24) / 8.5).toFixed(2) + 'cqw">' + body + '</div>';
  return wkbB(x, y, w, html, { c: 'wkb-win ' + kind + (o.c ? ' ' + o.c : ''), h: h, r: o.r, s: o.s }); }
function wkbS(cls, boxes){ return '<div class="wkb-w"><div class="wkb-s ' + cls + '">' + boxes.join("") + '</div></div>'; }

/* ---------- S. 151 ---------- */
TA_TEXT["w/bauen/vorbereitung2"] = [{t:"html", x: wkbS("p151 top", [
  wkbB(778, 42, 72, wkbT("schön. fast eine ganze seite"), {c: "band"}),
  wkbB(100, 66, 560, wkbH("Vorbereitung, nochmal", 40, "b1")),
  wkbB(99, 134, 560, wkbP(["So solltest du Einsätze wirklich bauen:"]), {c: "kl"}),
  wkbB(205, 180, 520, wkbH("Begegnung", 38) + wkbP(["Erst muss ein Ziel her, bevor man die Reise plant."]), {c: "pk"}),
  wkbB(205, 278, 540, wkbH("Ermittlung", 38) + wkbP(["Kennst du das Sprichwort „Man muss Geld ausgeben, um Geld zu verdienen“? Hier trifft das eigentlich nicht zu, glaub ich, aber ich kann nichts löschen, nachdem ich es geschrieben habe, also schauen wir uns das jetzt an. Hier findet der Großteil der Vorbereitung statt."]), {c: "pk"}),
  wkbB(205, 408, 560, wkbH("Morgenbesprechungen", 38) + wkbP(["Jetzt kannst du die Einleitung nutzen, um zu zeigen, wie klug und gut geplant du bist!"]), {c: "pk"}),
  wkbB(92, 522, 330, wkbH("Zuerst: Das Fazit", 38), {c: "nurbreit"}),
  wkbB(92, 660, 270, wkbH("ZUERST: Das Fazit", 38)),
  wkbB(160, 565, 190, wkbH("RUTSCH.", 42, "w"), {c: "o w rutsch"}),
  wkbWin(358, 538, 423, 190, "hell", "Häufige Alarmrufe", '<ul class="wkb-al"><li>La gallina è scappata!</li><li>Курица сбежала!</li><li>Das Huhn ist entkommen!</li></ul><ul class="wkb-al s2"><li>¡Wallpaqa ayqisqañam!</li><li>Kuku ametoroka!</li><li>Console.print(FEHLER: erwartet &lt;string&gt;, &quot;Huhn&quot;, stattdessen gefunden &lt;n</li></ul>', {t: [82, 8], ts: 28, b: [62, 88, 366], bs: 14.5, r: -9.6, c: "o al"}),
  wkbB(92, 742, 612, wkbP([
    "Ich habe keine Zeit, deine Psyche zu massieren, also lassen wir das Doppelsprech weg und reden über das hier als Spiel, einverstanden? Die meisten Einsätze drehen sich um eine Anomalie, also musst du dir zuerst die Begegnung überlegen, bevor du irgendetwas anderes entscheiden kannst.",
    "Anomalien entstehen aus den Gedanken und Gefühlen Lebender, darum drücken sie sich meist sehr menschlich aus. Wie du tun sie nichts ohne Grund. Sie haben Wünsche, Bindungen, Besessenheiten und Gefühle.",
    "Wenn du eine Anomalie baust, versuche etwas zu erschaffen, das den Agenten wirklich ans Herz geht. Eine Anomalie zu fangen oder zu beseitigen sollte eine bittersüße Angelegenheit sein, selbst wenn sie ein wenig gewalttätig ist.",
    "Die Agency möchte, dass du nur die gruseligen in Betracht ziehst, weil du die ganze Welt des Spiels kontrollierst. Agenten können nicht sehen, was du dir nicht vorstellst.",
    "Ich bin hier, um deine Vorstellungskraft zu erweitern."]), {c: "cols"})
])}];

/* ---------- S. 152 ---------- */
TA_TEXT["w/bauen/fokus"] = [{t:"html", x: wkbS("p152 tb", [
  wkbB(150, 66, 640, wkbH("Bestandteile einer Anomalie", 40, "b1")),
  wkbB(150, 132, 280, wkbH("Fokus", 22, "h3") + wkbP(["Der Fokus einer Anomalie ist der Gedanke oder das Gefühl, das die meisten ihrer Handlungen antreibt. Einige Beispiele:"]) + wkbK(["Die Trauervermeidung einer Familie", "Die Furcht der Menschheit vor Messern", "Fürsorge für einen alten Baum", "Die Verzweiflung eines Stadtblocks nach Essen", "Der Glaube an den Schlachtruf eines beliebten Superhelden", "Hingabe an die Regeln eines Kults"]) +
    wkbP(["Der Fokus einer Anomalie lässt sich am leichtesten als *Gefühl* gegenüber einem *Gegenstand* verstehen, und beim Erschaffen solltest du beide Teile kennen. Die Art des Gefühls bestimmt ihren Impuls, und der Ort des Gegenstands bestimmt oft ihre Domäne.", "Die Anomalie will, dass andere ihren Fokus teilen, denn das hält sie am Leben. Sie will Umstände schaffen, in denen andere fühlende Wesen den Gedanken denken, der ihr das Leben gab."])),
  wkbB(463, 132, 280, wkbH("Impuls", 22, "h3") + wkbP(["So handelt die Anomalie im Dienst ihres Fokus. Diese Handlung bringt sie meist in Widerspruch zur Menschheit und macht die Agency auf ihre Existenz aufmerksam."]) + wkbK(["Der Familie die Erinnerungen an ihren verlorenen Angehörigen auslöschen", "Menschen mit einem Schwarm fliegender Messer in Angst und Schrecken versetzen", "Den alten Baum gewaltsam verteidigen", "Das Essen der ganzen Stadt verderben", "Zum Superhelden werden und seinen Schlachtruf wörtlich befolgen", "Die Versprechen des Kults durchsetzen, im Austausch für Tribut an seinen Anführer"]) +
    wkbP(["Oft wird ein Impuls erst problematisch, wenn die Anomalie nach einer Weile an Macht oder Reichweite wächst. Zum Beispiel bleibt es vielleicht unbemerkt und hilft ein paar Menschen, wenn ein kleines leerstehendes Gebäude in Fleisch verwandelt wird – aber wenn man dazu übergeht, etwas in der Nähe *jedes hungrigen Menschen* in Fleisch zu verwandeln, erregt das schnell Aufmerksamkeit."])),
  wkbB(232, 716, 480, wkbH("Wahrscheinlichkeit (%), dass ein Haushaltsgegenstand ein verstecktes Schwert ist", 27, "tt")),
  wkbB(145, 822, 115, '<p>Standmixer</p>', {c: "tz"}), wkbB(266, 822, 60, '<p>1 %</p>', {c: "tz"}),
  wkbB(340, 800, 420, '<p>Wegen seiner unregelmäßigen Form und vieler beweglicher Teile eignen sich Standmixer kaum dazu, etwas zu verstecken. Ganz ausschließen lässt es sich aber nie.</p>', {c: "td"}),
  wkbB(145, 895, 115, '<p>Bücherregal</p>', {c: "tz"}), wkbB(266, 895, 60, '<p>10 %</p>', {c: "tz"}),
  wkbB(340, 885, 420, '<p>Ist der Träger besonders stark, kann die Klinge recht groß sein.</p>', {c: "td"}),
  wkbB(145, 951, 115, '<p>Kind</p>', {c: "tz"}), wkbB(266, 951, 60, '<p>27 %</p>', {c: "tz"}),
  wkbB(340, 940, 420, '<p>Gewitzte Hausbesitzer melden ihre Waffen sogar in Vorschulprogrammen an.</p>', {c: "td"}),
  wkbB(145, 1010, 115, '<p>Stift</p>', {c: "tz"}), wkbB(266, 1010, 60, '<p>91 %</p>', {c: "tz"}),
  wkbB(340, 996, 420, '<p>Tragbar und unauffällig – Stifte sind ideale Verstecke für Messer.</p>', {c: "td"}),
  wkbB(145, 1068, 115, '<p>Gehstock</p>', {c: "tz"}), wkbB(266, 1068, 60, '<p>100 %</p>', {c: "tz"}),
  wkbB(340, 1052, 420, '<p>Jeder Gehstock, der je existiert hat, hat ein verstecktes Schwert beherbergt.</p>', {c: "td"})
])}];

/* ---------- S. 153 ---------- */
TA_TEXT["w/bauen/kompliziert"] = [{t:"html", x: wkbS("p153 dk", [
  wkbB(120, 92, 560, wkbH("Es ist kompliziert", 40, "w"), {c: "w"}),
  wkbB(122, 160, 485, '<div class="wkb-stufe"></div>' + wkbP([
    "Anomalien kennen ihren Fokus nicht. Jedenfalls nicht sofort. Wenn sie gerade erst entstanden sind, greifen sie mit ihren Kräften in alle Richtungen aus, um herauszufinden, was sich bequem und befriedigend anfühlt. Die tödlichsten Anomalien sind meist diese jungen, denn sie begreifen nicht, dass unser Verhältnis zu gewöhnlichen Menschen symbiotisch ist.",
    "Vielleicht kennen sie ihren Fokus auch nie. Zumindest nicht in Worten. Ein Kind, das zeichnen kann, sagt vielleicht, es sei „Künstler“, aber erst wenn es verschiedene Techniken ausprobiert, grenzt es ein, was das für es bedeutet. Mag es Ölmalerei wirklich lieber – oder Bildhauerei? Treibt es das Geld an oder die Liebe zum Handwerk? Es könnte alt werden und sterben, ohne je zu erfahren, dass es als Weinsommelier geglänzt hätte! Eine Anomalie zu sein ist genauso.",
    "Foki zu etikettieren ist die Sache des Dreiecks. Es will Anomalien in Kategorien sortieren, damit es so tun kann, als verstünde es sie. Und klar: Sie sind nützlich, um zu verstehen, was du da tust. Fürs Erzählen nicht immer. Sobald du dich im Spiel sicher fühlst, versuche, den Fokus ganz zu überspringen und Agenten gegen Anomalien antreten zu lassen, die nur wirklich interessante Impulse haben! Diese Anomalien entdecken ihren Fokus vielleicht im Laufe des Einsatzes.",
    "Oder die Agenten finden den Fokus nie heraus. Auch das ist in Ordnung. Solange die Anomalie stimmig und interessant wirkt, ist das keine exakte Wissenschaft. Lass deine Agenten raten, und lass manche Rätsel ungelöst.",
    "Mein letzter Rat dazu macht mich nervös, ihn überhaupt auszusprechen. Es gibt Anomalien mit Foki, so urtümlich und mächtig, dass sie seit Jahrtausenden bestehen und die Welt um uns auf unmerkliche und unaufhaltsame Weise formen.",
    "Ihre Kräfte erzeugen Probleme und Kräfte, an die wir so gewöhnt sind, dass man kaum noch an sie denkt. Schwerkraft. Tod. Glück. Was ist wirklich, und was ist anomal? Ich verspreche dir, du hast keine Ahnung.",
    "Diese Anomalien werden nicht von der Ripple Gun zerstört. Sie können nicht vom Aktenkoffer gefangen werden. Die Agency wäre es lieber, du wüsstest gar nichts von ihnen, und sie schickt nur dann Agenten, um sie zu finden, wenn sie diese Agenten tot sehen will.",
    "Sei vorsichtig. Du wirst dich nicht mit ihnen anlegen, wenn du weißt, was gut für dich ist."]), {c: "w stair"}),
  wkbB(480, 1030, 280, '<p class="sig">(und ich bin einer davon lmao)</p>', {c: "w", r: -2})
])}];

/* ---------- S. 154–155 ---------- */
TA_TEXT["w/bauen/domaene"] = [{t:"html", x: wkbS("p154", [
  wkbB(150, 66, 600, wkbH("Bestandteile, Fortsetzung", 40, "b1")),
  wkbB(150, 132, 245, wkbH("Domäne", 22, "h3") + wkbP(["Eine Domäne ist ein Ort der Macht: meist der Ort, an dem sie in die Realität durchgebrochen ist und an dem die Gedanken, die sie formten, am dichtesten sind."]) + wkbK(["Das Zuhause der Familie", "Eine Metzgerei", "Ein öffentlicher Park", "Eine Website", "Ein Fernsehstudio", "Eine illuminierte Handschrift"]) +
    wkbP(["Die Domäne ist das Zuhause der Anomalie. In der Regel müssen Agenten die Domäne betreten, um die Anomalie zu finden – doch dort ist die Anomalie am mächtigsten, also kann Hineinstürmen gefährlich sein.", "Die Domäne zu verlassen ist üblich, besonders wenn eine Anomalie älter wird. Mit dem Alter kommt Macht, aber auch die Gefahr des Hollow-Werdens – sie breiten sich immer weiter in ein größeres Gebiet aus, solange sie Menschen dazu anregen können, ihren Fokus zu teilen."])),
  wkbB(433, 132, 248, wkbH("Geschichte", 22, "h3") + wkbP(["Das hat sie getrieben, bevor die Agency auf sie aufmerksam wurde. Viele Anomalien setzen ihre Macht schon beim Entstehen wild ein, manche halten sich aber Monate oder Jahre, bevor sie Aufmerksamkeit erregen."]) + wkbK(["Hat sie Freunde gefunden?", "Hat sie jemanden getötet?", "Hat sie etwas Wichtiges gelernt?", "Weiß sie von der Agency?", "Hat sie lange genug gelebt, um ihren Fokus zu ändern oder zu verlieren?"]) +
    wkbP(["Diese Fragen bestimmen die aktuellen Umstände der Anomalie, aber auch, mit welcher Methode Agenten sie beruhigen könnten. Eine ältere Anomalie verständigt sich eher wie ein Mensch – jüngere kommunizieren vielleicht nur mit Bildern, Gefühlen und Handlungen.", "Ältere Anomalien stehen vor einer Herausforderung: Je komplizierter ihr Verständnis der Welt wird, desto eher steht ihr Fokus im Widerspruch zu den Teilen der Welt, die sie mögen. Und je älter sie sind, desto wahrscheinlicher verschwindet ihr Fokus aus der Welt. Sie müssen sich anpassen oder drastische Maßnahmen ergreifen, um ein Hollow-Werden zu vermeiden."])),
  wkbB(142, 762, 235, '<p>ich finde, domänen sind am besten, wenn sie mindestens eins davon sind:</p>', {c: "o w nb"}),
  wkbB(182, 848, 190, '<p>schwer herauszufinden</p>', {c: "o w nb"}),
  wkbB(182, 883, 190, '<p>schwer zu erreichen</p>', {c: "o w nb"}),
  wkbB(182, 916, 200, '<p>EKELHAFT!!! BITTE LASS MICH DA NICHT REIN!!! BITTE!!!!</p>', {c: "o w nb"}),
  wkbB(142, 993, 235, '<p>also probier eins davon</p>', {c: "o w nb"})
]) + wkbS("p155", [
  wkbB(100, 70, 258, wkbH("Erscheinung", 22, "h3") + wkbP(["Die sichtbare Gestalt der Anomalie. Sie kann einfach oder komplex sein, monströs oder wunderschön. Wenn ein Mensch es sich vorstellen kann, und sei es unbewusst, kann eine Anomalie es sein."]) + wkbK(["Sieht sie aus wie ein Gegenstand?", "Oder wie ein Lebewesen?", "Steckt sie in einem vorhandenen Gegenstand oder Lebewesen, oder hat sie ein neues geschaffen?", "Hat sie einen Menschen besessen oder nachgeahmt?", "Ist sie etwas, das schwerer zu sehen ist, wie ein Gas oder eine Energie?"]) +
    wkbP(["Anomalien können wie Geister aussehen, wie Monster oder wie Sammelkarten. Oft, aber nicht immer, hängt die Komplexität der Form mit dem Alter der Anomalie zusammen. Stillstehende Gegenstände lassen sich leicht nachahmen, und die Leute können sie sich leicht vorstellen. Tiere und Menschen sind schwerer zu kopieren."])),
  wkbB(100, 548, 400, wkbH("Steckst du fest?", 42)),
  wkbB(100, 612, 645, wkbP([
    "Buchstäblich immer! (ich probier mal aus, mit mir selbst zu reden, weil ich dich nicht hören kann)",
    "Wenn du nicht weißt, wo du anfangen sollst, arbeite rückwärts von einem coolen Bild oder einem Ort, an dem du deine Agenten gern sehen würdest. Ein verlassenes Haus am Ende einer längst stillgelegten Straße? Figuren aus einem Comic, die sich in einem Olive Garden verprügeln?",
    "Sagen wir, du willst mit einem Spukhaus spielen. Die Domäne ist irgendwo darin, äh, auf dem Dachboden? Und die Erscheinung der Anomalie ist eine gruselige Puppe. Ihr Impuls ist, Spukhaus-Dinge zu tun, weil du das tun willst, also macht sie plötzliche Geräusche und füllt Zimmer mit Spinnenhaufen. Der Fokus dieser Anomalie hat wahrscheinlich mit Angst zu tun, also die Geschichte: Vielleicht besuchte früher eine Gruppe Kinder das Haus und redete sich ein, es spuke, bis eine Anomalie auftauchte, um das wahr zu machen und sich von ihrer Furcht zu nähren.",
    "Versuch, Anomalien mit Foki zu bauen, die sich auf Dinge beziehen, die du schon kennst und die dir am Herzen liegen. Es ist die moderne Welt, mit modernen Problemen. Was ist DEIN Fokus gerade? Dafür gibt es eine Anomalie.",
    "Idealerweise sind auch deine Spieler eine Inspirationsquelle. Fordere sie heraus. Sind sie schnell mit dem Kämpfen? Diese Anomalie wird jedes Mal stärker, wenn man ihr wehtut. Lieben sie Hunde? Diese Anomalie ist ein unanständig süßer Megahund. Wechsle ab zwischen Anomalien, mit denen sie leicht mitfühlen, und Anomalien, die sie sofort abstoßen, nur um sie auf Trab zu halten.",
    "Und wenn nichts anderes hilft: Klau eine. Wenn du nur mit Freunden spielst, nimm etwas Cooles aus einer Serie oder einem Spiel, das du magst. Ich muss dir leider sagen, dass das meiste Erfundene ohnehin deine eigenen verdrängten Erinnerungen sind, gefiltert durch die Initiative „Tabletop-Rollenspiel“."]), {c: "cols"})
])}];

/* ---------- S. 156 ---------- */
TA_TEXT["w/bauen/chaos"] = [{t:"html", x: wkbS("p156 ink", [
  wkbB(108, 30, 215, wkbT("war drauf und dran, diese seite auch zu löschen, aber das dreieck hat tatsächlich ganz ordentliche arbeit geleistet"), {c: "o w note", r: -5}),
  wkbB(148, 114, 600, wkbH("Chaos & Chaos-Effekte", 38, "rot")),
  wkbB(148, 262, 285, wkbP([
    "Chaos nennen wir die Energie, die entsteht, wenn anomale Kräfte die Realität manipulieren. Einer der Gründe, warum Anomalien so ‹gefährlich|mega scharf› sind, ist, dass der Einsatz ihrer Macht noch mehr Macht erzeugt; bliebe das völlig ungebremst, würden Anomalien einen erneuerbaren Chaos-Kreislauf schaffen, der zum ‹Ende der|komisch, dieser teil fehlt|l› Welt führt.",
    "Wenn Resonants ihre anomalen Fähigkeiten einsetzen, erzeugen auch sie Chaos. Während der aktiven Phase einer Anomalie kann sie dieses Chaos bewusst und unbewusst einsetzen.",
    "Die Macht einer Anomalie ist zwar gewaltig, aber begrenzt. Greift sie über ihren Fokus hinaus, muss sie auf das Umgebungs-Chaos der Gegend zurückgreifen. Die Anomalie kann in unmittelbarer Nähe von Agenten nicht handeln, ohne Chaos auszugeben, und die aktuelle Menge ist stets öffentlich bekannt und wird auf dem Einsatzbericht festgehalten.",
    "Als GM kannst du den Einfluss der Agency nutzen, um Anomalien dazu zu bewegen, dieses Chaos für **Chaos-Effekte** auszugeben. Auf der nächsten Seite steht eine vollständige Liste der Chaos-Effekte, die jeder Anomalie zur Verfügung stehen. {{Neue Agenten zu warnen, dass 10 und 30 große Sachen sind, macht Spaß. Sieh zu, wie sie sich winden, wenn die Zahlen steigen.}}",
    "Die Menge Chaos, die für jeden Effekt nötig ist, steht in der Tabelle der Chaos-Effekte in Einheiten von § wie 1§, 5§, 10§ usw. Wann immer eine der Fähigkeiten eingesetzt wird, lies deinen <Agenten/Spielern> die ganze Beschreibung vor. {{(da stimme ich völlig zu, so ist es dramatischer.)}}"]), {c: "dk raw"}),
  wkbB(472, 262, 270, wkbP([
    "Chaos entsteht und wird auch in Einsätzen ohne Ziel-Anomalie verfolgt. Unter diesen Umständen können Chaos-Effekte leicht die eigenen Kräfte der Agenten darstellen, die unvorhergesehene Folgen haben – aber auch viele Mächte haben dein Außenteam im Blick. {{wie ich! Chaos aus der Sicht von jemandem zu nutzen, der es heimlich zu seinem Vorteil einsetzt, könnte gutes Drama ergeben.}}",
    "{{außerdem sind Menschen eine eigene Art Chaos. Ereignisse ähnlich den Chaos-Effekten können auch ohne ausgegebenes Chaos eintreten, allein aufgrund der unbequemen Launen der Menschheit.}}"]) +
    '<div class="wkb-h h3 dk" style="font-size:2.9cqw;margin:1.4em 0 .5em">Domänenvorteile</div>' + wkbP([
    "Innerhalb der Domäne einer Anomalie können Chaos-Effekte mit Kosten von {3}§ oder weniger kostenlos ausgedrückt werden, und jedes ausgegebene Chaos zählt dreifach. {{Sie geben es aber wohl kaum ohne Grund aus. Gefährlichere Züge wie Töten und Überwältigen wirken am besten, wenn sie die größte emotionale Wirkung entfalten.}}",
    "{{Weil die Anomalie hier so viel Macht hat, überlege, die Möglichkeit eines Chaos-Effekts anzukündigen, bevor du ihn tatsächlich auslöst. Hast du zum Beispiel in einer Domäne 30 Chaos gesammelt, hat die Anomalie die Macht, ein Team aus {3} Agenten sofort zu überwältigen. Macht man diese Möglichkeit deutlich, kann das einen Hebel schaffen, den die Anomalie sonst nicht hätte.}}"]), {c: "dk"})
])}];

/* ---------- S. 157 ---------- */
TA_TEXT["w/bauen/klein"] = [{t:"html", x: wkbS("p157 top", [
  wkbB(778, 42, 72, wkbT("Chaos, Chaos-Effekte, Kleine Ano–lass mich aLLEIN"), {c: "band"}),
  wkbB(115, 66, 500, wkbH("Kleine Anomalien", 38, "b1")),
  wkbB(115, 122, 285, wkbP([
    "Einer der mächtigsten Tricks, die Anomalien beherrschen, ist es, Kleine Anomalien in die Realität zu ziehen. Diese kleinen Kreaturen haben eine große Bandbreite an Fähigkeiten und arbeiten unermüdlich für die Agenda der Anomalie. Sie sind so süß!",
    "Meist teilen sie eine Ästhetik mit der Haupt-Anomalie, doch manchmal machen sich gerade die coolsten mit besonders starker Persönlichkeit selbstständig. Es kommt nicht selten vor, dass Kleine Anomalien nach der Gefangennahme oder dem Tod ihres Erschaffers zurückbleiben, daher sind sie auch eine nette Möglichkeit, die Agenten an ihre früheren Einsätze zu erinnern."])),
  wkbB(115, 408, 410, wkbP([
    "Agenten können sie auf viele kreative Arten loswerden, aber am einfachsten ist es, sie mit viel körperlicher Gewalt zu zerstören.",
    "**Bedrohung** gibt an, wie viel Schaden eine Anomalie mit einem Angriff anrichten kann, wenn sie es versucht. **Stabilität** gibt an, wie viel Schaden ihnen zugefügt werden muss, bevor sie erschöpft sind.",
    "Wenn sie unbeaufsichtigt bleiben, können Kleine Anomalien"])),
  wkbB(115, 788, 285, '<p><b>mach dir darum keine sorgen.</b></p>' + wkbP([
    "Wenn sie unbeaufsichtigt bleiben, können Kleine Anomalien gelegentlich eigene Foki und Domänen entwickeln und selbst zu vollwertigen Anomalien werden. Manche Anomalien spezialisieren sich auf diese Art auf ihre eigene Vervielfältigung.",
    "Auf der nächsten Seite habe ich unter der Tabelle der Chaos-Effekte eine Tabelle zum Erschaffen Kleiner Anomalien eingeschmuggelt. Beide Tabellen sollten beim Leiten griffbereit bleiben, finde ich."]), {c: "gap"}),
  wkbB(490, 190, 228, wkbP(["Deine Agenten sollten manchmal sterben. Die Agency holt sie ohnehin ins Leben zurück, und das Trauma bringt sie hoffentlich dazu, gründlicher über diese schreckliche Arbeit nachzudenken."]), {c: "o skull"}),
  wkbWin(105, 543, 548, 258, "rot", "Alarm", '<p>Unerwartete Textänderung erkannt.</p><p>Fortgesetzte Änderung kann zu einer Notabschaltung dieses Handbuchs führen.</p><p>Danke für Ihre Aufmerksamkeit.</p>', {t: [68, 8], ts: 27, b: [26, 70, 500], bs: 25, c: "o"}),
  wkbB(520, 832, 130, '<div class="tri">CHAOS<br>UMSICHTIG<br>EINSETZEN</div>', {c: "o tri1"}),
  wkbB(535, 930, 150, '<div class="tri">CHAOS<br>STÄNDIG<br>EINSETZEN</div>', {c: "o tri2", r: 20})
])}];

/* ---------- S. 160 ---------- */
TA_TEXT["w/bauen/druck"] = [{t:"html", x: wkbS("p160 top", [
  wkbB(150, 66, 600, wkbH("Drucksituationen", 38, "b1")),
  wkbB(150, 132, 500, wkbP([
    "Wenn Agenten angegriffen werden, auf Gefahr zusteuern oder gegen Anomalien kämpfen, ist es dein Ziel, sie zum Würfeln zu bringen. Jeder Wurf erzeugt mehr Chaos! Das erreichst du – und schaffst dabei mehr Entscheidungsfreiheit für die Spieler –, indem du den Moment kurz vor dem Einschlag der Gefahr hervorhebst.",
    "Wenn eine Anomalie angreift, gib dem Ziel der Anomalie die Gelegenheit, mit dem Angriff umzugehen. Misslingt das, füge ihm den Schaden zu. Danach gib dem Außenteam die Chance auf einen proaktiven Zug. Besteht die Gefahr nach diesem Zug noch, wählt die Gefahr ein anderes Ziel. Und so weiter.",
    "So müssen sie mindestens zweimal würfeln, um mit eingehenden Bedrohungen fertigzuwerden. Küsschen auf die Fingerspitzen."]), {c: "wide"}),
  wkbWin(115, 365, 663, 250, "rot", "Letzte Warnung", '<p>Manipulation festgestellt, die mit <span class="an">Anomalie</span>-Code <span class="an">U0047BB</span> übereinstimmt. Automatischer Bericht gesendet. Notabschaltung steht unmittelbar bevor.</p>', {t: [68, 10], ts: 27, b: [30, 90, 610], bs: 26.5, c: "o"}),
  wkbB(598, 546, 120, '<div class="knopf">Schließen</div>', {c: "o"}),
  wkbB(150, 662, 560, wkbP([
    "In Situationen, in denen mehrere Angreifer mehrere Ziele angreifen, lenke deinen Fokus bei jedem dieser Zyklen reihum nacheinander auf die Gruppe und kümmere dich dann um das, was übrig bleibt. Mach dir um die „Reihenfolge der Züge“ nicht zu viele Gedanken – lass die Geschichte frei fließen. Kämpfe sind wie jede andere Art von Spiel."]) + wkbH("Gegen Ziel-Anomalien kämpfen", 24, "h3 gz") +
    wkbP(["Manchmal versagen Worte, und man steckt in einem guten alten Faustkampf fest. Hin und wieder steht man vor der simplen Frage: „Wie oft muss ich zuschlagen?“",
    "Wenn deine Spieler die ganze Nacht eine Rube-Goldberg-Maschine gebaut haben, damit ein Maglev-Zug in voller Fahrt aus einem Kleiderschrank bricht und die Anomalie vernichtet, verdirb ihnen den Spaß nicht, indem du den Sieg vorenthältst. Setzen sie dagegen Fähigkeiten ein, die festgelegte Schadenswerte verursachen, oder haben sie Fähigkeiten, die Kämpfe ausnutzen, ist es großartig, das Hin und Her in die Länge zu ziehen und ihre Mittel bis ans Limit zu treiben.",
    "Wenn du zu den „Zahlenmenschen“ gehörst, nimm an, dass ein direkter Treffer einer durchschnittlichen Anomalie {3} Schaden verursacht und dass Agenten Anomalien zwischen 7 und 18 Schaden zufügen müssen, bevor sie mit Gewalt erschöpft werden können."]), {c: "wide"})
])}];

/* ---------- S. 161 ---------- */
TA_TEXT["w/bauen/eigene"] = [{t:"html", x: wkbS("p161", [
  wkbB(778, 70, 72, wkbT("ehrlich gesagt sollte ich öfter die regeln machen, das ist GROSSARTIG"), {c: "band b2"}),
  wkbB(100, 66, 600, wkbH("Eigene Chaos-Effekte", 38, "b1")),
  wkbB(99, 136, 545, wkbP(["Gehe vor jedem Einsatz die Liste der Chaos-Effekte durch. Überlege, was deine Anomalie tun wird, wenn sie die Gelegenheit bekommt, diese Fähigkeiten einzusetzen."]) +
    wkbK(["Wie sieht ihr Verderben aus?", "Welche Gestalt haben ihre Kleinen Anomalien, und welche Arten bevorzugt sie?", "Wen will sie am liebsten anziehen?", "Wenn sie in einer vollständig simulierten Umgebung alles ausdrücken könnte, was würde sie sagen? Was würde sie zeigen? Würde sie bereichern, quälen oder zu erklären versuchen?", "Gibt es Orte, nach denen es sie für eine neue Domäne gelüstet?"]) +
    wkbP(["Wenn deine Anomalie häufig etwas tut, das nicht auf dieser Liste steht, oder etwas tun muss, damit ihr Impuls oder ihre Geschichte funktioniert, entscheide, ob es in eine dieser Kategorien fällt:"]), {c: "wide"}),
  wkbB(100, 432, 255, wkbH("Sonderregel", 22, "h3") + wkbP(["Manche Anomalien können unter bestimmten Regeln Dinge tun, ohne Chaos auszugeben, etwa:"]) + wkbK(["Kann nicht berührt werden, wenn sie sich nicht bewegt.", "Tötet automatisch jeden in der Stadt, der das Wort „Halsabschneider“ sagt.", "Schleudert jeden, der sich ihr direkt nähert, in die Luft.", "Jedes Mal, wenn jemand schreit, kommen 10 Chaos in den Pool."]) +
    wkbP(["Diese sollten eng an ihren Fokus gebunden sein und als Hinweise zum Verständnis der Anomalie dienen. Sie sollten auch stimmig sein, selbst wenn sie nicht unbedingt Sinn ergeben. Manchmal findet die Agency das vorab heraus (ich weiß nicht, wie, sie sind meist ahnungslos), aber oft müssen die Agenten durch Ausprobieren herausfinden, wie sie funktionieren."])),
  wkbB(395, 432, 300, wkbH("Neuer Chaos-Effekt", 22, "h3") + wkbP(["Braucht die Anomalie ein flexibles Manöver rund um ihre Fähigkeiten, das keiner strikten Regel folgt, versuche, einen Chaos-Effekt hinzuzufügen. Auch diese sollten als Hinweise dienen, müssen aber nicht jedes Mal geschehen oder einem festen Regelwerk folgen."]) +
    wkbK(["**2§: WAHRHEIT** – Die jüngste Lüge von jemandem wird sofort so behandelt, als hätte er stattdessen die Wahrheit laut gesagt.", "**4§: SO LUSTIG** – Etwas, das kürzlich gesagt wurde, wird als Witz aufgefasst, auch wenn es äußerst ernst ist.", "**6§: DUPLIKAT** – Jemand wird perfekt mit einer Kopie seiner selbst verdoppelt.", "**8§: VERGELTUNG** – Jemand, der gerade Schaden zugefügt hat, erhält diesen Schaden irgendwann in den nächsten Minuten auf anderem Wege selbst zurück."]) +
    wkbP(["Je größer die Störung, die ein Effekt für die Erzählung der Realität bedeutet, desto mehr Chaos sollte er kosten. Denk daran, dass alles unter {3}§ innerhalb der Domäne der Anomalie unbegrenzt nutzbar ist. Du kannst gern Ideen aus den Anomalie-Fähigkeiten übernehmen, die Agenten zur Verfügung stehen – sie stammen zuerst von Anomalien."]))
])}];
