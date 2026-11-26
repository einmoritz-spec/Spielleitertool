/* Handbuch › Würfeln (S. 32–45) */
TA_TEXT["h/wuerfeln/wuerfel"] = [
 {t:"sp", x:[
  ["In unserem Universum konkurrieren viele Interessen. Wir arbeiten hart daran, diese Zahl zu erhöhen; derzeit hält die Triangle Agency rund 25 % der Anteile an der Realität. Unsere Kontrolle über das Mögliche stellt in diesem Tabletop-Rollenspiel der vierseitige Würfel dar.",
   "Glücklicherweise erobern wir in fünf bekannten Zukünften den gesamten Markt. Dank unseres **Dynamischen Retrokausalen Wahrscheinlichkeits-Verstärkungssystems** steuert jede dieser Zukünfte einen Würfel zu deinem Wurf bei, damit sie wahrscheinlicher eintritt. Du hast also sechs vierseitige Würfel, wann immer du auf die Macht der Agency zurückgreifst.",
   "Du würfelst aus zwei Gründen, die wir gleich genauer erläutern:",
   {t:"liste", x:["**Die Agency bitten,** die jüngste Vergangenheit zu ändern.", "**Deine Anomalie-Fähigkeiten** sicher und kontrolliert einsetzen."]},
   "**Du würfelst immer sechs vierseitige Würfel.** Prüfe das Ergebnis und zähle die Würfel, die eine {3} zeigen. Wir nennen sie „{3}en“.",
   "**Ist mindestens eine {3} dabei,** ist das ein Erfolg!",
   "**Zeigt dein Wurf keine einzige {3},** ist das ein Fehlschlag. Jede Fähigkeit hat eigene Ergebnisse für Erfolg und Fehlschlag."],
  [{t:"kasten", h:"Grundergebnisse", b:[{t:"wurf", x:[
    {img:"wuerfel-wurf-erfolg", ok:1, x:"**Mindestens eine {3}:** Du fragst erfolgreich die Agency oder erzielst das „Bei Erfolg“-Ergebnis einer Anomalie-Fähigkeit. Jede Anzahl von {3}en zählt als Erfolg."},
    {img:"wuerfel-wurf-fehlschlag", ok:0, x:"**Keine {3}:** Es gelingt dir nicht, die Macht der Agency zu kanalisieren – mit unangenehmen Folgen oder dem „Bei Fehlschlag“-Ergebnis einer Anomalie-Fähigkeit."}]}]}]
 ]},
 {t:"html", x:'<img class="streu" src="img/regeln/full/wuerfel-streuung.webp" alt="">'}
];
TA_TEXT["h/wuerfeln/chaos"] = [
 {t:"sp", x:[
  [{t:"lead", x:"Die Realität direkt zu beeinflussen birgt Risiken, selbst für die Agency."},
   "Jeder Wurf lädt Chaos ein, in unsere Welt zu sickern und feindselige Anomalien zu stärken. Dein GM gibt Chaos aus, wenn eine Anomalie bestimmte übernatürliche Handlungen gegen dich und deine Verbündeten unternimmt.",
   {t:"html", x:'<p class="merk">Mehr Chaos = mehr Probleme!*</p>'},
   {t:"klein", x:"*Das verläuft nicht ganz linear. Einzelheiten siehe Schaubild."},
   "**Wenn du würfelst, legt jeder Würfel, der keine {3} zeigt, ein Chaos** in den Chaos-Pool. Ein gewöhnlicher Wurf kann also allein bis zu sechs Chaos erzeugen!"],
  [{t:"html", x:TA_CHAOSGRAF}, {t:"klein", x:"Probleme pro Chaos"}]
 ]},
 {t:"html", x:'<div class="chaosw"><section><img src="img/regeln/full/wuerfel-nur-dreien.webp" alt=""><b>+0<img src="img/zeichen/symbol-chaos-wirbel.png" alt=""><small>Chaos</small></b></section><section><img src="img/regeln/full/wuerfel-wurf-fehlschlag.webp" alt=""><b>+6<img src="img/zeichen/symbol-chaos-wirbel.png" alt=""><small>Chaos</small></b></section></div>'},
 {t:"html", x:'<div class="absturz"><img src="img/regeln/full/wuerfel-chaos-blau.webp" alt="">'},
 {t:"fenster", art:"fehler", z:"symbol-warnung", titel:"Fehler", w:420, h:"Etwas ist schiefgegangen.", b:["Die Verwendung visueller Elemente mit mehr als zwei Dimensionen wird eingestellt, bis das Problem behoben ist."]},
 {t:"html", x:'</div>'}
];
var HB_CH = '<img class="hb-ic" src="img/zeichen/symbol-chaos-wirbel.png" alt="">';
var HB_BO = '<img class="hb-ic" src="img/zeichen/symbol-burnout.png" alt="">';
function HB_D(n, k){ return '<img class="hb-dia' + (k ? " " + k : "") + '" src="img/zeichen/' + n + '.png" alt="">'; }
TA_TEXT["h/wuerfeln/qualitaeten"] = [
 {t:"h", z:"symbol-qualitaeten", x:"Qualitäten"},
 "Die Agency hat alle möglichen Handlungen, auch die deiner Anomalie, in neun wünschenswerte Qualitäten gegliedert, die jeder Mitarbeiter in unterschiedlichem Maß verkörpern soll.",
 {t:"html", x:'<div class="hb-qual">' +
  '<section><h4>Aufmerksamkeit</h4><p>Auf Details achten, komplizierte Informationen verstehen und herausfinden, was jemand zu verbergen versucht.</p></section>' +
  '<section><h4>Doppelzüngigkeit</h4><p>Lügen, überzeugen, ohne selbst überzeugt zu sein, und unterstützen, obwohl man innerlich nicht dahintersteht.</p></section>' +
  '<section><h4>Dynamik</h4><p>Aggressiv auftreten, dominieren, handeln und Gewalt anwenden, um den eigenen Standpunkt durchzusetzen.</p></section>' +
  '<section><h4>Empathie</h4><p>Sich auf andere Menschen beziehen, Anteilnahme zeigen, Schwächen finden und Verbindungen knüpfen.</p></section>' +
  '<section><h4>Initiative</h4><p>Vorausdenken, sich schnell bewegen und Dinge erledigen, bevor sie zum Problem werden.</p></section>' +
  '<section><h4>Beharrlichkeit</h4><p>Nicht klein beigeben, Druck aufbauen, andere überwältigen und so lange nerven, bis sie handeln.</p></section>' +
  '<section><h4>Präsenz</h4><p>In einem Raum auffallen, eine Gruppe beherrschen, inspirieren und einschüchtern.</p></section>' +
  '<section><h4>Professionalität</h4><p>Unter Druck Haltung bewahren, Ablenkung widerstehen und bewusstseinsverändernde Effekte unterbrechen.</p></section>' +
  '<section><h4>Subtilität</h4><p>Leise arbeiten, unnötige Aufmerksamkeit vermeiden und Handlungen mit sorgfältiger Präzision ausführen.</p></section></div>'},
 {t:"h", z:"symbol-qualitaetssicherung", x:"Qualitätssicherungen"},
 {t:"sp", x:[
  [{t:"lead", x:"Damit du im Einklang mit unseren Erwartungen handelst, stellt dir die Agency zu Beginn deiner Laufbahn, abhängig von deiner Kompetenz, einen Satz maximaler Qualitätssicherungen oder QS zur Verfügung."},
   "Qualitätssicherungen beruhen nicht auf den angeborenen oder erlernten Fähigkeiten deines Agenten. Sie sind an Verhaltensweisen geknüpft, die die Agency von dir erhofft! Drei QS in Empathie machen dich zum Beispiel nicht einfühlsamer als jemanden mit null; es bedeutet, dass die Agency in Situationen, in denen es um Empathie geht, häufiger zu deiner Unterstützung eingreifen wird."],
  ["Nachdem du das Ergebnis eines beliebigen Wurfs geprüft hast, kannst du beliebig viele Qualitätssicherungen ausgeben, um dieselbe Zahl von Würfeln körperlich auf eine andere Seite zu drehen und so das Ergebnis zu ändern.",
   {t:"html", x:HB_D("diagramm-qs-wechsel","k")}]
 ]},
 {t:"sp", x:[
  [{t:"html", x:HB_D("diagramm-qs-eine-entfernt","k")}],
  [{t:"html", x:'<p class="hb-gross">Du bist immer nur eine QS von einer {3} entfernt, also nur eine QS vom <u>Erfolg</u>!</p>'.replace("{3}", '<b class="drei">3</b>')},
   "Setze QS in entscheidenden Momenten ein: Sie sind eine begrenzte Ressource, die im Verlauf eines Einsatzes aufgebraucht wird.",
   "**Alle QS werden zwischen den Einsätzen vollständig und automatisch aufgeladen.** Dein Maximum steigt, sobald wir sicher sind, dass du verantwortungsvoll damit umgehen wirst."]
 ]}
];
TA_TEXT["h/wuerfeln/burnout"] = [
 {t:"sp", x:[
  ["Hat eine deiner Qualitäten keine Qualitätssicherungen mehr übrig (auch wenn sie nie welche hatte), hast du in dieser Qualität **Burnout**.",
   {t:"html", x:'<p>Burnout „verbrennt“ einen Würfel, der eine <b class="drei">3</b> zeigt, senkt deine Erfolgschance und fügt jedem Wurf ein ' + HB_CH + ' Chaos hinzu.</p>'}],
  [{t:"html", x:HB_D("diagramm-burnout-drei","k")}]
 ]},
 {t:"sp", x:[
  [{t:"html", x:'<p class="hb-lab">2 ' + HB_BO + ' anwenden</p>' + HB_D("diagramm-burnout-zwei","k") + '<p class="hb-lab">7 ' + HB_CH + ' erzeugt</p>' + HB_D("diagramm-burnout-sieben","k")}],
  [{t:"html", x:'<p>Kurz gesagt: Burnout entfernt immer eine <b class="drei">3</b> und erzeugt ein ' + HB_CH + ' Chaos. Gibt es keine <b class="drei">3</b> zu verbrennen, fügt es trotzdem das Chaos hinzu.</p>'},
   "Burnout kann auch aus anderen Quellen stammen (meist aus anderen misslungenen Würfen), und zusätzlicher Burnout verringert die {3}en deines Wurfs weiter.",
   "Es gibt keine Obergrenze für den Burnout, den du gleichzeitig erleiden kannst, und er kann die erzeugte Chaos-Menge über das übliche Maximum von sechs hinaus erhöhen.",
   "Das links abgebildete Beispielergebnis hat zwei Burnout, aber nur eine {3} zum Verbrennen; der Wurf scheitert also, und das insgesamt hinzugefügte Chaos beträgt sieben. Schrecklich."]
 ]}
];
TA_TEXT["h/wuerfeln/triszendenz"] = [
 {t:"lead", x:"Werden vor jeder Anpassung genau drei {3}en gewürfelt, setzt du die Macht der Agency perfekt ein und erlebst Triszendenz!"},
 "Der Wurf ist ein Erfolg, es entsteht **kein Chaos**, und du darfst dir einen zusätzlichen Effekt aus der folgenden Triszendenz-Tabelle aussuchen. **Glückwunsch!**",
 {t:"html", x:'<div class="hb-tri"><section><img src="img/zeichen/symbol-alle-hand.png" alt=""><h3>Alle Hände</h3><p>Füge diesem Wurf beliebig viele <b class="drei">3</b>en hinzu.</p></section>' +
  '<section><img src="img/zeichen/symbol-kreis-zurueck.png" alt=""><h3>Nachfassen</h3><p>Stelle beliebig viele ausgegebene <b class="drei">3</b> Qualitätssicherungen wieder her.</p></section>' +
  '<section><img src="img/zeichen/symbol-mitarbeiter-des-moments.png" alt=""><h3>Mitarbeiter des Moments</h3><p>Erhalte <b class="drei">3</b> Belobigungen.</p></section></div>'},
 "**Wir arbeiten alle zusammen, damit Triszendenz entsteht.** Im Moment deines Erfolgs bist du psychisch mit jedem Mitarbeiter der Agency verbunden, denn du leihst dir unsere gemeinsame Kraft. Alle sehen, was du tust, und feiern deinen Sieg mit. Gib eine Show! Du wirst bestimmt morgen am Wasserspender von deinem triszendenten Moment hören.",
 {t:"kasten", h:"Stabilität", z:"symbol-stabilitaet", b:[{t:"html", x:'<div class="hb-stab"><div>' +
  '<p>Das Hinzufügen oder Entfernen von <b class="drei">3</b>en durch Qualitätssicherungen und Burnout kann keine Triszendenz erzeugen, aber dieses Ergebnis bleibt besonders <b>stabil</b>.</p>' +
  '<p>Drei <b class="drei">3</b>en erzeugen immer null ' + HB_CH + ' Chaos, auch wenn es keine Triszendenz ist und auch wenn Burnout vorlag.</p>' +
  '<p>Das heißt: Wer drei QS ausgibt, kommt von null <b class="drei">3</b>en bis zu einem Erfolg ohne jedes Chaos!</p></div>' +
  '<div>' + HB_D("diagramm-stabilitaet-1") + HB_D("diagramm-stabilitaet-2") + '</div></div>'}]}
];
TA_TEXT["h/wuerfeln/kurz"] = [
 {t:"html", x:'<div class="hb-nb"><div><h5>Was du brauchst:</h5><figure><div class="hb-sechs"><b>6</b><img src="img/zeichen/dreieck-rot.png" alt=""><img src="img/zeichen/dreieck-rot.png" alt=""><img src="img/zeichen/dreieck-rot.png" alt=""><img src="img/zeichen/dreieck-rot.png" alt=""><img src="img/zeichen/dreieck-rot.png" alt=""><img src="img/zeichen/dreieck-rot.png" alt=""></div>Vierseitige Würfel</figure></div>' +
  '<div class="opt"><h5>Optional</h5><div style="display:flex;gap:26px"><figure class="opt"><img src="img/zeichen/symbol-gluck-klee.png" alt="">Glück</figure><figure class="opt"><img src="img/zeichen/symbol-goettliches-eingreifen.png" alt="">Göttliches Eingreifen</figure></div></div></div>'},
 {t:"html", x:'<div class="hb-flow"><div class="k rot"><img src="img/zeichen/symbol-wurf-hand.png" alt="">6W4 würfeln</div><span class="pf"></span>' +
  '<div class="k dk"><img src="img/zeichen/pikto-wuerfel-drei-treffer.png" alt="">Hast du drei <b class="drei">3</b>en gewürfelt?</div><span class="pf"></span>' +
  '<div class="ja-nein"><div class="k dk">Nein</div><div class="k rot">Ja</div></div></div>'},
 {t:"html", x:'<p class="hb-weiter">Bei „Nein“ weiter mit „Beziffere deinen Erfolg“</p>'},
 {t:"html", x:'<div class="hb-tzh">Triszendenz</div><p class="hb-tzs">Dieser Wurf ist erfolgreich, erzeugt kein ' + HB_CH + ' Chaos, und du wählst eines:</p>'},
 {t:"html", x:'<div class="hb-tri"><section><img src="img/zeichen/symbol-alle-hand.png" alt=""><h3>Alle Hände</h3><p>Füge diesem Wurf beliebig viele <b class="drei">3</b>en hinzu.</p></section>' +
  '<section><img src="img/zeichen/symbol-kreis-zurueck.png" alt=""><h3>Nachfassen</h3><p>Stelle beliebig viele ausgegebene <b class="drei">3</b> Qualitätssicherungen wieder her.</p></section>' +
  '<section><img src="img/zeichen/symbol-mitarbeiter-des-moments.png" alt=""><h3>Mitarbeiter des Moments</h3><p>Erhalte <b class="drei">3</b> Belobigungen.</p></section></div>'},
 {t:"h", x:"Beziffere deinen Erfolg"},
 {t:"html", x:(function(){
   var R = '<img src="img/zeichen/dreieck-rot.png" alt="">', G = '<img src="img/zeichen/dreieck-grau.png" alt="">', ch = [["0",1],["1",0],["2",0],["0",1],["4",0],["5",0],["6+",0]], h = '<header><span>Wie viele <b class="drei" style="color:#fff">3</b>en?</span><span>Erfolg</span><span>Erzeugtes Chaos</span></header>', o = '';
   for(var i = 0; i < 7; i++){ var n = 6 - i; o += '<div><span class="tr">' + new Array(n + 1).join(R) + new Array(7 - n).join(G) + '</span><span class="' + (n ? "hk" : "hk xx") + '">' + (n ? "✔" : "✖") + '</span><span class="ch' + (ch[i][1] ? " n" : "") + '"><b>' + ch[i][0] + '</b><img src="img/zeichen/' + (ch[i][1] ? "symbol-chaos-grau" : "symbol-chaos-wirbel") + '.png" alt=""></span></div>'; }
   return '<div class="hb-erf">' + h + o + '</div>'; })()},
 {t:"h", x:"Wurfmodifikatoren"},
 {t:"sp", x:[
  [{t:"h3", x:"Qualitätssicherungen ausgeben"}, {t:"html", x:HB_D("diagramm-qs-ausgeben","k")},
   "**Für jede ausgegebene Qualitätssicherung wird ein Würfel von einer beliebigen Zahl auf eine {3} oder von einer {3} auf eine beliebige andere Zahl geändert.**",
   "Qualitätssicherungen so auszugeben, dass **drei {3}en** entstehen, löst keine Triszendenz aus, aber das Ergebnis erzeugt kein Chaos."],
  [{t:"h3", x:"Burnout anwenden"}, {t:"html", x:HB_D("diagramm-burnout-anwenden","k")},
   {t:"html", x:'<p><b>Für jeden Burnout wird eine <span class="drei" style="color:var(--rot)">3</span> aus dem Wurf entfernt und ein ' + HB_CH + ' Chaos erzeugt.</b></p>'},
   "Chaos entsteht auch dann, wenn keine {3}en mehr entfernt werden können. Würde man zum Beispiel sechs Burnout zu einem misslungenen Wurf addieren, entstünden zwölf Chaos."]
 ]}
];
TA_TEXT["h/wuerfeln/fragen"] = [
 "Das größte Werkzeug der Agency zur Bewahrung der Realität – neben der harten Arbeit und Ausdauer von Mitarbeitern wie dir – ist unsere Fähigkeit, die jüngste Vergangenheit unauffällig zu verändern. Agenten können **Anträge auf Realitätsanpassung** stellen, um gefährliche Situationen mit der Zuversicht zu betreten, dass die Macht von <Fügung/Erzählung> auf ihrer Seite ist.",
 "Ganz einfach: Du darfst jederzeit **die Agency fragen**, damit etwas geschieht. Wenn etwas geschehen könnte, egal wie unwahrscheinlich, kannst du die Agency darum bitten!",
 "Anträge auf Realitätsanpassung erfordern vier Dinge von dir, in dieser Reihenfolge:",
 {t:"sp", x:[
  [{t:"pikto", x:[
    {n:"1", h:"Ein genannter Effekt, der eintreten soll.", b:[{t:"html", x:'<p class="kl2"><i>Ein Stau verlangsamt die Flucht eines Fahrzeugs.</i></p><p><i>Ein Prominenter trifft ein, um eine Reality-Show zu drehen.</i></p><p><i>Jemand, der von einem Gebäude stürzt, wird sicher von einem Lastwagen voller weichem Müll aufgefangen.</i></p>'}]},
    {n:"2", h:"Eine Reihe gewöhnlicher Ereignisse, die den Effekt verursacht haben, genannt **Kausalkette**.", b:[{t:"html", x:'<p><i>Ein Unfall hat die Straßen verstopft.</i></p><p><i>Der Prominente hat das Gerücht gehört, dieses Gebäude spuke.</i></p><p><i>Der wütende Boykott eines Kissenherstellers führte dazu, dass noch heute Morgen Hunderte von Kissen weggeworfen wurden.</i></p>'}]}]}],
  [{t:"pikto", x:[
    {n:"3", h:"Eine passende berufliche Qualität, die du mit dieser Änderung verkörperst oder stärkst.", b:[{t:"html", x:'<p><i>Empathie, wenn die Änderung auf die Gefühle eines Menschen zielt.</i></p><p><i>Subtilität, um eine Ablenkung zu schaffen oder ein Versteck zu bieten.</i></p><p><i>Aufmerksamkeit, wenn die Änderung etwas offenbaren könnte, das du sonst übersehen würdest.</i></p>'}]},
    {n:"4", h:"Ein erfolgreicher Wurf mit mindestens einer {3}.", b:[{t:"html", x:'<p><i>Du wirfst sechs vierseitige Würfel und beziehst dich dabei auf Burnout und Qualitätssicherungen der gewählten Qualität.</i></p>'}]}]}]
 ]},
 {t:"lead", x:"Agenten wird geraten, diese außerordentliche Macht verantwortungsvoll und im Einklang mit den folgenden Regeln und Einschränkungen zu nutzen:"},
 {t:"sp", x:[
  [{t:"liste", x:[
    "Du darfst die Agency nur bitten, Dinge zu verändern, die nicht bereits von einem Agenten oder GM als wahr festgelegt wurden. Was du wahrgenommen hast, während du <arbeitest/spielst>, ist „fest“ und kann nicht verändert werden. Wurde es nicht während <Arbeit/Spiel> erwähnt, ist es nicht festgelegt.",
    "Die Agency kann den „freien“ Willen von Menschen nicht direkt beeinflussen. Es ist viel schwerer, den Geist eines Menschen zu beeinflussen, als Systeme zu manipulieren, die Bevölkerungsgruppen oder Menschenmengen betreffen. Dein Ziel kann sein, einen Menschen zu beeinflussen (*„Diese Bauarbeiterin ist erschöpft …“*), aber die Ursache muss von außen kommen (*„… weil sich ein Schwarm lauter nachtaktiver Vögel in ihrem Garten niedergelassen hat.“*)",
    "Sobald du diese Änderung vorgenommen hast, ist alles, was daran beteiligt ist, festgelegt. Du hast eine Tatsache deiner Realität geschaffen und musst mit den Folgen leben.",
    "Eine einfache oder vage **Kausalkette** ist brauchbar, doch dein GM kann vor dem Wurf weitere Einzelheiten verlangen, damit sie sich möglich anfühlt. Wir empfehlen, dass alle Agenten am Aufbau der Kausalkette mitwirken. Wirkt etwas ungewöhnlich, interessant oder schwer zu glauben, arbeitet gemeinsam daran, dass es sich wahr anfühlt. Das ist ein unterhaltsamer Vorgang, der die Stabilität deiner Welt stärkt!",
    "Dein GM hat das letzte Wort darüber, welche Qualität relevant ist."]}],
  [{t:"bild", src:"dreieckskopf-winkt", pos:"mitte", w:260},
   {t:"kasten", h:"Die TTRPG-Initiative", b:["Realitätsanpassung ist sehr mächtig, wird aber durch den Glauben des Anwenders an die Plausibilität seiner Änderung begrenzt. Vor der TTRPG-Initiative taten sich Agenten mit dieser Macht schwer, weil sie so vieles an ihrer Welt passiv für festgelegt hielten. Jetzt, da ihr „fiktive Figuren seid, die von einem alternativen Tisch-Ich gesteuert werden“, wirst du feststellen, dass der Vorgang recht reibungslos verläuft."]}]
 ]},
 {t:"lead", x:"Als Beispiel hier eine Mitschrift von einem repräsentativen Außenteam:"},
 {t:"dialog", x:[
  ["GM","Die Lobby ist ziemlich streng gesichert. Du siehst Leute, die an einem Drehkreuz Schlüsselkarten durchziehen, um hineingelassen zu werden – ohne eine solche stehst du draußen vor der Tür."],
  ["AGENT 1","Verlässt gerade jemand das Gebäude?"],
  ["GM","Ja, du siehst eine Frau mit einer lila Tasche, die gerade durch die Drehtür kommt."],
  ["AGENT 1","Ich möchte **die Agency fragen**. Ich will die Schlüsselkarte in ihrer Tasche – könnte an der nächsten Ecke jemand abbiegen, der versucht, ihr die Tasche zu stehlen? Dann könnte ich ihn fangen und wie ein Held dastehen, während ich ihr die Karte abluchse."],
  ["GM","Klar. Diese Absicht lässt mich vermuten, dass du Doppelzüngigkeit zeigst. Warum will der Dieb ausgerechnet ihre Tasche?"],
  ["AGENT 1","Es gibt gerade einen großen grauen Markt für lila Taschen. Eine Lieferkettensache. Ein Dieb würde gutes Geld bekommen."],
  ["AGENT 2","Und vielleicht führt gerade jetzt eine Umleitung auf dem Gehweg eine Menschenmenge an diese Ecke!"],
  ["GM","Eine Menge Diebe?"],
  ["AGENT 4","Eine Menge reicher Touristen. Ein Taschendieb behält sie bestimmt im Auge."],
  ["GM","Okay, super! Mach deinen Wurf."]]},
 {t:"sp", x:[
  [{t:"h3", x:"Bei einem Erfolg,"},
   "wird der Effekt, den du beschrieben hast, Wirklichkeit. Im Beispiel oben würde der Dieb auftauchen und die Tasche gestohlen werden, sodass der Agent zum Zug kommt. Der Effekt tritt augenblicklich ein. Anträge werden in Sekundenbruchteilen gestellt und genehmigt!",
   "Erfolg ist jedoch nicht das Ende: Die Veränderung der Realität kann Nachwirkungen haben, die dir erst später auffallen. Im Beispiel wird das Außenteam wahrscheinlich Zeuge eines dauerhaft gestiegenen Preises für lila Taschen oder vieler reicher Touristen, die ihren Einsatz unterbrechen, um nach dem Weg zu fragen."],
  [{t:"h3", x:"Bei einem Fehlschlag,"},
   "bemerkt <die Realität/die Erzählung>, dass wir versuchen, sie zu ändern, und schlägt zurück. Der GM beschreibt, was Unwahrscheinliches, aber technisch Mögliches geschehen ist, um deine Ziele zu durchkreuzen, und behält dabei so viel wie möglich von der geplanten Kausalkette bei. Im Beispiel könnte der Dieb auftauchen und etwas für die Agenten Nützliches stehlen, oder Regen könnte die Frau zurück ins Gebäude schicken, bis der Sturm vorüber ist.",
   "Außerdem gilt: **Bei einem Fehlschlag** erleidet jeder weitere Versuch, die Realität am aktuellen Standort des Agenten zu verändern, für den Rest des Einsatzes einen Burnout."]
 ]},
 {t:"lead", x:"Hier noch ein paar völlig hypothetische Beispiele dafür, wie man die Agency in anderen Situationen fragt:"},
 {t:"sp", x:[
  [{t:"dialog", x:[
    ["GM","Diese Anomalie richtet sich auf den Hinterbeinen auf. Ihre sechs dürren Spinnenarme strecken sich nach euch aus, und ihr seht schon das Gift von den Spitzen tropfen."],
    ["AGENT 1","Ich **frage die Agency**, ob ein Klavier auf ihren Kopf fallen kann!"],
    ["GM","… Das ist ziemlich unwahrscheinlich. Aber es ist eine aggressive Handlung mit der Absicht zu verletzen, also wird es Dynamik. Für die Kausalkette brauchen wir gute Ideen."],
    ["AGENT 1","Mehr habe ich nicht. Ich weiß nicht, warum."],
    ["AGENT 2","Wir sind in einem Stadion, vielleicht haben sie beim Aufbau für eine Halbzeitshow eine Pause gemacht?"],
    ["AGENT 4","JA! Hier findet dieses Wochenende der Superbowl statt. Sie bauten für die Sängerin auf, die eines dieser gefühlvollen Lieder singt, bei denen sie sich beim Singen selbst am Klavier begleitet."],
    ["GM","Das ist ziemlich gut! Würfle Dynamik."],
    ["AGENT 1","Ich bin gescheitert."],
    ["GM","Nun, ich glaube, mit dem Superbowl-Aufbau hattest du recht – aber leider fängt die Anomalie das Klavier mühelos mit ihren sechs Armen auf. Und das Ding ist wirklich stark. Jetzt fliegt das Klavier direkt auf DICH zu!"]]}],
  [{t:"dialog", x:[
    ["GM","Sie wissen etwas über die Anomalie, sind aber zu aufgewühlt, um jetzt zu reden. Und sie vertrauen euch sowieso nicht, ihr seid ein Haufen verdächtiger Leute in Anzügen."],
    ["AGENT 1","Ich möchte, dass es ihnen besser geht. Was, wenn ihnen gerade jetzt etwas wirklich Gutes passiert? Etwas, das sie gesprächsbereiter macht?"],
    ["AGENT 2","Sie könnten im Lotto gewinnen. Oder, äh, vielleicht bekommen sie den Anruf, auf den sie gewartet haben?"],
    ["AGENT 1","Meine Anomalie-Fähigkeit hat vorhin gezeigt, dass sie sich sehr erhofft haben, in ein Promotionsprogramm an der Ternion University aufgenommen zu werden. Können wir **die Agency fragen**, das wahr werden zu lassen?"],
    ["GM","Sie an einer Universität unterbringen? Kein Problem. Das ist eine leichte Kausalkette, weil wir dafür sorgen können, dass sie wirklich angenommen wurden. Würfle Empathie, denn du nutzt das, um dich emotional mit ihnen zu verbinden."],
    ["AGENT 4","Moment, warum stellen die um 23 Uhr Zusagen zu?"],
    ["AGENT 2","Der Dekan ist eine Nachteule?"],
    ["AGENT 1","Partydekan! Ich habe übrigens einen Erfolg gewürfelt."],
    ["GM","Na gut, dann bekommen sie wohl einen Anruf vom Partydekan."]]}]
 ]},
 {t:"dialog", x:[
  ["GM","Dieser Typ versteckt eindeutig etwas, aber er sieht nicht aus, als wolle er reden, und er geht schon weg."],
  ["AGENT 1","Kann ich Aufmerksamkeit würfeln, um zu sehen, was er verbirgt?"],
  ["GM","Du kannst nicht einfach würfeln, aber du kannst **die Agency** um etwas bitten, das dir hilft, es herauszufinden."],
  ["AGENT 1","Zum Beispiel?"],
  ["AGENT 2","Was, wenn seine Lauf-Tracking-App einen Fehler hat, der sie jeden Morgen automatisch einschaltet, und wenn wir sein Handy stehlen, können wir genau sehen, wo er gewesen ist?"],
  ["GM","Das funktioniert als Kausalkette, und das ist definitiv Aufmerksamkeit. Aber ihr braucht eine Möglichkeit, das Handy zu stehlen."],
  ["AGENT 4","Oh, ich habe eine Anomalie-Fähigkeit für …"]]}
];
TA_TEXT["h/wuerfeln/faehigkeiten"] = [
 "Alle Agenten sind Resonante, das heißt, sie sind alle mit einer einzigartigen Anomalie verbunden. Obwohl jede Anomalie theoretisch zu einer Vielzahl von Fähigkeiten imstande ist, sind nur **drei** für den Einsatz im Außendienst zugelassen. Alle haben einige Eigenschaften gemeinsam, die wir hier umreißen.",
 {t:"sp", x:[
  [{t:"html", x:'<ul class="hb-zl"><li><img src="img/zeichen/symbol-kosten-dollar.png" alt=""><b>Fähigkeiten erfordern einen Auslöser oder Preis, der eintreten muss, bevor sie eingesetzt werden können.</b></li></ul><div class="hb-kette bsp"><p>Atme tief durch …</p><p>Schüttle jemandem die Hand …</p><p>Wenn jemand versucht, dir etwas wegzunehmen …</p></div>'},
   {t:"h3", x:"Sie enthalten Effekte bei Erfolg oder Fehlschlag eines Wurfs."},
   {t:"html", x:'<ul class="hb-zl"><li><img src="img/zeichen/ergebnis-erfolg-dreieck.png" alt=""><span><b>Bei einem Erfolg</b> gibt es einen Effekt, der eintritt, wenn dein Wurf mindestens eine <b class="drei">3</b> zeigt.</span></li><li><img src="img/zeichen/ergebnis-fehlschlag-kreis.png" alt=""><span><b>Bei einem Fehlschlag</b> bedeutet, dass in deinem Wurf keine <b class="drei">3</b> vorkommt.</span></li></ul>'},
   "Hier ein Beispiel für eine Fähigkeit, die Whisper-Anomalien zur Verfügung steht."],
  [{t:"html", x:'<ul class="hb-zl"><li><img src="img/zeichen/symbol-zusatz-stern.png" alt=""><b>Mindestens ein zusätzliches Ergebnis, das in bestimmten Situationen erreichbar ist.</b></li></ul>'},
   {t:"html", x:'<div class="hb-kette">' +
    '<p><b>Für jede zusätzliche <span class="drei" style="color:var(--rot)">3</span></b> gibt es einen Effekt, der eingesetzt werden kann, wenn dein Wurf mehr als eine <b class="drei">3</b> zeigt.</p>' +
    '<p><b>Bei jeder dritten <span class="drei" style="color:var(--rot)">3</span></b> gibt es einen Effekt, der einmal je drei <b class="drei">3</b>en insgesamt in deinem Wurf eingesetzt werden kann. Einmal bei drei, zweimal bei sechs usw.</p>' +
    '<p><b>Bei sechs oder mehr <span class="drei" style="color:var(--rot)">3</span>en</b> bedeutet, dass dieser Effekt nur eintritt, wenn mindestens sechs <b class="drei">3</b>en in deinem Wurf vorhanden sind.</p>' +
    '<p><b>Gib <span class="drei" style="color:var(--rot)">3</span>en für Folgendes aus</b> erlaubt dir, <b class="drei">3</b>en aus deinem Wurf auszugeben, um aus einer beigefügten Liste die Effekte zu wählen, die zu deiner aktuellen Lage am besten passen. Steht dort „zusätzliche <b class="drei">3</b>en“, kann die erste <b class="drei">3</b> nicht ausgegeben werden.</p>' +
    '<p><span class="hb-streich"><b>Bei Triszendenz</b> bedeutet, dass dieser Effekt nur eintritt, wenn <b>drei <span class="drei" style="color:var(--rot)">3</span>en</b> vor jeder Anpassung für diese Fähigkeit gewürfelt werden.</span> <i>(Dieser Effekt kommt bei keiner zugelassenen Fähigkeit mehr vor, aufgrund von Änderungen an unserem Betriebsbudget.)</i></p></div>'}]
 ]},
 {t:"kasten", dunkel:1, h:"Auf der Zungenspitze", b:[
  "Öffne deinen Geist für die Gedanken einer Person in der Nähe. Lass ihre Worte über deine Stimme laufen und würfle **Empathie**.",
  {t:"html", x:'<ul class="hb-zl"><li><img src="img/zeichen/ergebnis-erfolg-dreieck.png" alt=""><span><b>Bei einem Erfolg</b> sagst du, was das Ziel gerade gern gesagt hätte.</span></li>' +
   '<li><img src="img/zeichen/ergebnis-zusatz-dreieck.png" alt=""><span><b>Bei jeder dritten <span class="drei" style="color:var(--rot)">3</span></b> darfst du eine Frage zu etwas stellen, das gerade für das Ziel relevant ist, und vom GM eine Antwort erhalten. Frage und Antwort müssen von deiner Figur laut ausgesprochen werden.</span></li>' +
   '<li><img src="img/zeichen/ergebnis-fehlschlag-kreis.png" alt=""><span><b>Bei einem Fehlschlag</b> gestehst du etwas, das niemand wissen soll.</span></li></ul>'}]}
];
TA_TEXT["h/wuerfeln/scheitern"] = [
 {t:"sp", x:[
  ["Nicht jeder Agent ist ein Mensch, und manche sind in einigen Punkten außergewöhnlich, aber deine Fähigkeiten und deine Zerbrechlichkeit entsprechen im Allgemeinen denen eines durchschnittlichen gewöhnlichen Menschen. Die meisten Agenten waren normale Menschen, bevor sie sich mit einer Anomalie verbanden, und wir haben deine Anomalie daran gehindert, Verwandlungen auszulösen, die Lose Enden erzeugen würden.",
   "Es gibt in der Triangle Agency keine „Fertigkeitsproben“, weil wir wissen, dass du bei allem Riskanten oder Schwierigen, was du versuchst, scheitern wirst.",
   "Immer wenn du denkst „das könnte nicht klappen“, nimm uns beim Wort: Es wird nicht klappen. Tatsächlich untersuchen wir derzeit einen bemerkten Trend, wonach Agenten der Triangle Agency besonders glücklos sind und in ihrem Alltag selten Erfolg haben. Derzeit ist die Beweislage überwiegend anekdotisch."],
  ["Denk daran: Das Würfeln geht ausschließlich von <Agent/Spieler> aus. Dein General Manager wird dich oft warnen, wenn etwas, das du versuchst, nicht funktionieren wird, und kann verlangen, dass du die Agency fragst oder eine Anomalie-Fähigkeit einsetzt, um einen gewünschten Effekt zu erreichen, aber er kann dich nie zum Würfeln zwingen und nicht darüber bestimmen, was du mit diesem Wurf machst.",
   "Wir empfehlen, deine Normalität anzunehmen und die Agency um alles zu bitten, was du versuchen willst und dir nicht sicher zutraust. Wenn du Risiken eingehst, wirst du wahrscheinlich verletzt werden, körperlich oder seelisch.",
   "Zum Glück gehört zu deinen Leistungen eine **Lebensversicherung** für genau diesen Fall!"]
 ]},
 {t:"warn", h:"VORSICHT WALTEN LASSEN", b:["Wir haben diese Fähigkeiten herausgegriffen, weil sie sich am besten für Ermittlungen eignen und am leichtesten zu kontrollieren sind. Zu deiner Sicherheit ist es Agenten **untersagt, weitere Fähigkeiten für ihre persönliche Anomalie zu entwickeln.** Wir danken dir für deine Kooperation!", "Falls du dich versucht fühlst, deine Fähigkeiten auf andere Weise einzusetzen, sei gewarnt: Du bereitest damit wahrscheinlich eine rasch beendete Laufbahn und eine katastrophale persönliche Tragödie vor."]},
 {t:"html", x:'<div class="hb-stapel"><a onclick="pwPop(\'K2\')">K2</a><a onclick="pwPop(\'K2\')">K2</a><a onclick="pwPop(\'K2\')">K2</a><a onclick="pwPop(\'K2\')">K2</a><a onclick="pwPop(\'K2\')">K2</a></div>'},
 {t:"dialog", x:[
  ["GM","Dieser Typ versteckt eindeutig etwas, aber er sieht nicht aus, als wolle er reden, und er geht schon zu [[K2]]."],
  ["AGENT 1","Kann ich Aufmerksamkeit würfeln, um zu sehen, was sich im Dokument hinter der Playwall [[K2]] befindet?"],
  ["GM","Du kannst nicht einfach würfeln, aber du kannst zu [[K2]] gehen, um etwas zu finden, das dir hilft, es herauszufinden."],
  ["AGENT 1","Zum Beispiel k, gefolgt von 2?"],
  ["AGENT 2","Was, wenn seine Lauf-Tracking-App „versehentlich“ heute Morgen eingeschaltet wurde, und wenn wir sein Handy stehlen, können wir genau sehen, was bei [[K2]] los ist?"],
  ["GM","Das funktioniert als Kausalkette, und dort sollten wir definitiv hin. Aber ihr braucht eine Möglichkeit, zur Seite [[K2]] zu blättern."],
  ["AGENT K2","Oh, ich habe eine Anomalie-Fähigkeit, um einfach schon dorthin zu gehen …"]]}
];
