/* Werkzeug › Tabellen (S. 158, 159, 164–169), Leiten › Lose Enden (S. 164–169), Ternion City (S. 194) */
var WKC_CH = '<img class="wkc-ch" src="img/zeichen/symbol-chaos-wirbel.png" alt="">';
function wkcT(s){ return tx(s).replace(/\|\|(.+?)\|\|/g, '<b class="drei">$1</b>'); }

/* ---- S. 158: Chaos-Effekte ---- */
var WKC_EFFEKTE = [
 ["1", "Verzerren", "Ein Objekt oder ein Ort wird auf gewöhnliche Weise verändert.",
  "Eine Tür ist verschlossen; eine Kamera schaltet sich ein; aus Rosen werden Tulpen; dein Lieblingsmantel ist jetzt grün."],
 ["2", "Verderben", "Ein Objekt oder ein Ort wird so verändert, dass er die Anomalie widerspiegelt, was ein unnatürliches Aussehen oder eine gefährliche Veränderung zur Folge hat.",
  "Die Tür öffnet sich zu einer Grube; die Aufnahmen der Kamera zeigen das Ziel tot; in den Rosen blühen Augen auf; dein Lieblingsmantel ist jetzt Haut."],
 ["{3}", "Realitäts-Auslöser", "Das Realitätsmerkmal einer Figur wird aktiviert.",
  "Der Overbooked erhält einen Anruf; der Star trifft einen Fan; der Schützling des Caretaker hat Hunger.", "rot"],
 ["4", "Manifestieren", "Erschaffe mit der unten stehenden Tabelle zum Bauen Kleiner Anomalien eine neue Kleine Anomalie.",
  "Eine Diebische Anomalie stiehlt eine wichtige Schlüsselkarte."],
 ["5", "Anziehen", "Einige gewöhnliche Wesen (etwa Beziehungen) fühlen sich in die Domäne der Anomalie hineingezogen.",
  "Ein Bus ändert seine Route; ein Reporter hat eine Ahnung; die Polizei gibt ihre Absperrung auf."],
 ["6", "Ausdehnen", "Die Domäne der Anomalie wächst und bringt einen weiteren Ort unter ihre Macht. Die Größe dieser Veränderung hängt vom Fokus der Anomalie ab.",
  "Die Anomalie dehnt ihren Einfluss von einem Büro auf ein ganzes Gebäude aus; von einem Gebäude auf einen Häuserblock; von einem Häuserblock auf eine ganze Stadt."],
 ["7", "Verdoppeln", "Erschaffe 2 Kleine Anomalien mit der Tabelle zum Bauen Kleiner Anomalien.",
  "Eine Betörende Anomalie lenkt die Agenten ab, während eine Einsperrende Anomalie eine wichtige Informationsquelle in einem endlosen Labyrinth gefangen hält."],
 ["8", "Versetzen", "Eine Gruppe von Zielen wird in einen surrealen Raum gebracht, den die Anomalie erschaffen hat. Hier kann niemand körperlich verletzt werden, doch die Anomalie hat für kurze Zeit die volle Kontrolle darüber, was sie erleben.",
  "Jedem Agenten wird seine größte Angst gezeigt; Menschen bekommen ihren tiefsten Wunsch; eine Anomalie spricht ihre Absicht aus.", "blau"],
 ["9", "Verdreifachen", "Erschaffe {3} Kleine Anomalien mit der Tabelle zum Bauen Kleiner Anomalien.",
  "||Drei|| Störende Anomalien verstecken sich in den Lampen und erzeugen genug Chaos, um Wellen Gewalttätiger Anomalien zu erschaffen, die die Agenten verfolgen."],
 ["10", "Töten", "Ein gewöhnliches Leben wird beendet, unabhängig von allen Verteidigungen. Dieser Effekt kann durch keinen anderen Effekt gestoppt, verändert oder unterbrochen werden.",
  "Ein Herz bleibt stehen; ein Verstand zerbricht; eine Seele zersplittert; ein Bus stürzt auf jemanden herab."],
 ["{3}0", "Überwältigen", "Ein anomales Leben wird beendet, unabhängig von allen Verteidigungen. Dieser Effekt kann durch keinen anderen, auch keinen anomalen Effekt gestoppt, verändert oder unterbrochen werden.",
  "Selbst die Agency kann dich nicht immer beschützen. Aber wir können dich jederzeit zurückholen!"]
];
TA_TEXT["w/tabellen/chaos"] = [
 {t:"html", x:'<div class="wkc-kopf"><span>Kosten</span><span>Effekt</span><span>Beschreibung</span><span>Beispiel</span></div><div class="wkc-chaos">' +
  WKC_EFFEKTE.map(function(e){
    return '<article class="wkc-ef' + (e[4] ? " " + e[4] : "") + '"><header><b class="wkc-k">' + wkcT(e[0]) + WKC_CH + '</b><h3>' + tx(e[1]) + '</h3></header>' +
      '<div class="wkc-be"><small>Beschreibung</small><p>' + wkcT(e[2]) + '</p></div><div class="wkc-bs"><small>Beispiel</small><p>' + wkcT(e[3]) + '</p></div></article>';
  }).join("") + '</div>'}
];

/* ---- S. 159: Tabelle zum Bauen Kleiner Anomalien ---- */
var WKC_KLEIN = [
 ["Gewalttätig", "2", "1",
  "Diese Anomalien bewohnen immer physische Objekte und nutzen sie oft, um Schaden anzurichten. Es kann ein Würgestrick sein, ein Stein, der sich mit hoher Geschwindigkeit bewegt, oder eine bedrohliche Schere.",
  "Wer sich nicht vor ihnen schützt, wird garantiert verletzt. Schaden zu vermeiden erfordert fast immer Würfe oder Fähigkeiten, und sie sind kein Spaß. Wenn sie Lust dazu haben, können sie gewöhnliche Menschen in riesigen Mengen töten."],
 ["Betörend", "0", "2",
  "Diese Anomalien sind sichtbar oder psychisch fesselnd. Sie können heiß sein, tanzen oder was auch immer, aber auch eine zum Anbeißen gute Mahlzeit, ein wunderschönes Lied oder alles Symmetrische und sich Drehende.",
  "Sie können mühelos Scharen hypnotisierter, nicht anomaler Menschen versammeln oder, mit etwas Glück, Agenten. Besonders gefährlich in Kombination mit Gewalttätigen Kleinen Anomalien. Sie steuern gewöhnliche Menschen frei. Fehlgeschlagene Würfe von Agenten in der Nähe können auch zur Kontrolle über Agenten führen."],
 ["Einsperrend", "0", "{3}",
  "Diese Anomalien verändern realen oder surrealen Raum, um ihre Ziele einzusperren. Sie könnten einen Käfig direkt beleben, sich in einem Kartenspiel verstecken, um jeden zu fangen, der den Joker berührt, oder einfach zu einem großen Biest werden und ihre Ziele verschlucken.",
  "Einer Einsperrenden Anomalie zu entkommen oder jemanden zu retten, der gefangen wurde, erfordert den kreativen Einsatz der Fähigkeiten eines Agenten. Sie können gewöhnliche Menschen oder Agenten auch ohne Fehlschlag einsperren und sie in buchstäbliche oder eingebildete Umgebungen versetzen."],
 ["Diebisch", "1", "2",
  "Diese Anomalien stehlen liebend gern wichtige Objekte und sind fast unmöglich zu fassen, bevor sie es getan haben. Sie bevorzugen Gestalten, die Menschen mit Unfug verbinden, wie Feen oder Waschbären. Behalte deine Schlüssel im Auge!",
  "Stiehlt gewöhnlichen Menschen oder Agenten automatisch Dinge und muss gefasst werden. Sie greifen meist nur an, wenn man versucht, ihnen etwas wieder abzunehmen. Wenn die Agenten aufpassen, können gestohlene Objekte Hinweise auf den Fokus ihrer Anomalie geben."],
 ["Nachahmend", "1", "2",
  "Diese Anomalien sind raffiniert genug, um gewöhnliche Menschen nachzuahmen. Sie nehmen die Gestalt bestimmter Personen an; meist sind sie nicht kreativ genug, ihr eigenes Ding zu machen.",
  "Wenn ihr ungewöhnliches Verhalten sie nicht verrät, können sie mühelos viele Lose Enden erzeugen, bevor sie gestoppt werden. Ist eine Anomalie besonders schlau, nutzt sie sie als Botschafter in die gewöhnliche Welt."],
 ["Störend", "1", "1",
  "Diese Anomalien verstärken das Chaos, das in ihrer Nähe entsteht, und können sich schnell „bezahlt machen“, wenn sie nicht gefunden und zerstört werden. Sie verstecken sich gern als gewöhnliche Objekte. Oft ist ein Anstieg des Chaos der einzige Hinweis darauf, dass sie in der Nähe sind.",
  "Für jede davon in der Nähe addierst du jedes Mal, wenn Chaos entsteht, 1 zur Gesamtmenge. Resonante können sie durch körperliche Berührung als anomal erkennen. Dieser 1 Schaden wird ausgelöst, wenn sie zerstört werden: Sie explodieren."]
];
TA_TEXT["w/tabellen/klein"] = [
 {t:"html", x:'<div class="wkc-klein">' + WKC_KLEIN.map(function(k){
   return '<article class="wkc-kl"><header><h3>' + tx(k[0]) + '</h3><div class="wkc-zahl"><span><small>Bedrohung</small><b>' + tx(k[1]) + '</b></span><span><small>Stabilität</small><b>' + tx(k[2]) + '</b></span></div></header>' +
     '<div class="wkc-be"><small>Beschreibung</small><p>' + tx(k[3]) + '</p></div><div class="wkc-bs"><small>Schlüsselfähigkeiten</small><p>' + tx(k[4]) + '</p></div></article>';
 }).join("") + '</div>'}
];

/* ---- S. 164–169: Wetterereignisse ---- */
var WKC_LOS = function(n){ return ["Loses Ende gefunden! Agency-Mitarbeiter entfernen " + n + (n === 1 ? " Loses Ende." : " Lose Enden.")]; };
var WKC_WETTER = {
 1: ["Leichter Nieselregen.", "Strömender Regen.", "Ein tosendes Gewitter."],
 2: ["Der neue Einsatz der Agenten ist exakt ein Einsatz, den sie schon einmal erledigt haben, mit jedem Detail gleich. Niemand außer dem Außenteam, einschließlich der Agency, erinnert sich, dass er schon einmal stattgefunden hat.",
     "Der neue Einsatz der Agenten ist exakt ein Einsatz, den sie schon einmal erledigt haben, mit jedem Detail gleich, außer dass es von jeder wichtigen Figur 2 gibt *(die Anomalie, relevante NSCs)*. Niemand außer dem Außenteam, einschließlich der Agency, erinnert sich, dass er schon einmal stattgefunden hat. Die Duplikate arbeiten zusammen, um Ziele zu erreichen, nehmen einander kaum wahr und kümmern sich nicht darum, dass sie Duplikate sind.",
     "Die Agenten wachen auf und leben die Leben wichtiger Beteiligter eines früheren Einsatzes. Sie müssen den Einsatz nachspielen, bis ihre wirklichen Ichs eintreffen, um die Anomalie zu fassen. Alles, was sie ändern, wird in der ursprünglichen Zeitlinie des Einsatzes geändert. Das kann Nachwirkungen auf die seither vergangene Zeit haben."],
 3: WKC_LOS(1),
 4: ["Alle scheuen sich, ihre Autos zu verlassen. Für die Dauer dieses Einsatzes verbringen gewöhnliche Menschen so viel Zeit wie möglich in Fahrzeugen.",
     "Wie in 4a, außerdem: Menschen verlassen ein Auto aus keinem Grund freiwillig. Wer dazu gezwungen wird, tut alles, um zurückzukehren. Wer kein Auto hatte, ist aufgewacht und hat jetzt eines. Die Autos der Menschen haben außerdem skurrile Extras wie externe Roboterhände und einen bescheidenen Senkrechtsprung.",
     "Für die Dauer dieses Einsatzes ist jeder auf der Welt ein anthropomorphes Auto. (Sie erinnern sich an keine Alternative dazu.)"],
 5: ["Schuld lastet schwer auf der Welt. Alle Bürger der Region rund um diese Zweigstelle neigen zu Entschuldigungen und Reue. Agenten können 5 Chaos aus dem Pool entfernen, indem sie sich aufrichtig für etwas entschuldigen, das sie wirklich bereuen.",
     "Wie in 5a, außerdem: Vergebung ist unmöglich. Für die Dauer dieses Einsatzes darf niemand vergeben.",
     "Das Urteil sieht zu. Frage jeden Agenten privat nach 3 Dingen, die er „ziemlich übel, jemandem anzutun“ findet. Führt jemand eines dieser Verhaltensweisen aus, stirbt er sofort."],
 6: WKC_LOS(2),
 7: ["Die anomale Verbindung der Agenten verstärkt sich vorübergehend. Während dieses Einsatzes können Agenten die Anomalie-Kräfte der anderen kanalisieren, unabhängig von der Entfernung zwischen ihnen.",
     "Die Anomalien der Agenten verbinden sich tiefer mit der Welt um sie herum. Wie in 7a, außerdem: Agenten können ihre anomalen Fähigkeiten durch ihre Beziehungen kanalisieren und sie aus deren Perspektive nutzen. Fehlschläge und andere Effekte, die die Fähigkeit auf den Anwender anwendet, treffen den, der den Effekt kanalisiert hat.",
     "Wie in 7b, außerdem: Für die Dauer dieses Einsatzes stehen jedem Agenten alle Start-Anomaliefähigkeiten aus dem Grundregelwerk zur Verfügung."],
 8: ["Strahlender Sonnenschein.", "Grelles, schnell brennendes Sonnenlicht.", "Die Sonne hat ihren Farbton verschoben. Der Kontakt mit ihrem Licht verursacht seltsame Veränderungen an lebenden Körpern."],
 9: WKC_LOS(3),
 10: ["Zufällige Gedanken in dieser Region beginnen sich als Ripples zu manifestieren. Besonders gesteigerte Gedanken oder Gefühle können eine winzige, aggressive Personifizierung dieses Gefühls mit 1 Bedrohung und 1 Stabilität erzeugen.",
      "Wie in 10a, außerdem: Jedes Mal, wenn Chaos ausgegeben wird, entstehen so viele Ripples: Zuletzt am Tisch gesprochene Sätze werden als winzige, aggressive Monster mit 1 Bedrohung und 1 Stabilität personifiziert.",
      "Zu Beginn dieses Einsatzes wimmeln 1.000 Ripples durch die Region. Jeder, der gefunden und besiegt wird, wird vergessen; seine Taten bleiben nur als aufdringliche Gedanken oder unglückliche Zufälle in Erinnerung."],
 11: ["Die Agenten wachen auf und erleben jeweils das Leben der anderen. Ihre Realitäten und Beziehungen werden für die Dauer des Einsatzes zufällig getauscht.",
      "Sobald jeder Agent in diesem Einsatz zum ersten Mal eine Beziehung sehen würde, wurde diese Beziehung durch eine Version des Agenten ersetzt, dessen Spieler sie sonst normalerweise spielt, und zwar mit derselben Beziehung zum Agenten, die die Beziehung zuvor hatte.",
      "Für die Dauer dieses Einsatzes spielen alle Spieler den Agenten eines anderen Spielers."],
 12: WKC_LOS(4),
 13: ["Pech gehabt! Dein General-Manager-Charakter ist gestorben und muss durch einen neuen ersetzt werden."],
 14: ["Agenten können „Bei Fehlschlag“-Effekte von Anomalie-Fertigkeiten jederzeit aktivieren, ohne zu würfeln oder Chaos zu erzeugen.",
      "Wie in 14a, außerdem: Jedes Mal, wenn ein „Bei Fehlschlag“-Effekt auf diese Weise aktiviert wird, werden {3} Chaos aus dem Pool entfernt.",
      "Wie in 14b, außerdem: Jedes Mal, wenn ein „Bei Erfolg“- oder „Bei Fehlschlag“-Effekt als Ergebnis eines Wurfs aktiviert wird, wird zusätzlich der gegenteilige Effekt aktiviert."],
 15: WKC_LOS(5),
 16: ["Eine bittere Kälte liegt in der Luft.",
      "Schnee bildet sich auf dem Boden und fällt – aufwärts – zu den Wolken.",
      "Ein großer Vogel aus Eis und Schnee, eine Anomalie mit dem Fokus „Groll über die Herausforderungen des Winters“, bezieht den höchsten Punkt der Region, die deine Zweigstelle abdeckt. Deine Region erlebt unzeitgemäße Kälte, Wind und tiefen Schnee, bis etwas dagegen unternommen wird."],
 17: ["Für die Dauer dieses Einsatzes werden Menschen oft von Tieren angesprochen oder in der Nähe von Tieren angetroffen, die Eigenschaften haben, die sie idealisieren.",
      "Wie in 17a, außerdem: Tiere sprechen mit Menschen in Sprachen, die diese verstehen. (Es sind trotzdem Tiere.)",
      "Die Welt hat sich über Nacht verändert. Für die Dauer dieses Einsatzes gibt es keine Menschen oder menschenähnlichen Figuren. Stattdessen ist jeder auf der Welt ein sprechendes Tier. (Die Menschen erinnern sich an keine Alternative dazu, sprechende Tiere zu sein.)"],
 18: WKC_LOS(6),
 19: ["Eine zuvor gefasste oder neutralisierte Anomalie wird als Hollow neu erschaffen, eine instabile Version der ursprünglichen Anomalie, die dauerhaft wird, wenn sie einen Agenten töten und seine Resonanz absorbieren kann. Der Hollow unterstützt die Ziel-Anomalie in diesem Einsatz.",
      "Zwei zuvor gefasste oder neutralisierte Anomalien werden als Hollows neu erschaffen, instabile Versionen ihrer selbst, die stabil werden, wenn sie einen Agenten verschlingen. Die Hollows unterstützen die Ziel-Anomalie in diesem Einsatz.",
      "Drei zuvor gefasste oder neutralisierte Anomalien werden als Hollows neu erschaffen, instabile Versionen ihrer selbst, die stabil werden, wenn sie einen Agenten verschlingen. Die Hollows unterstützen die Ziel-Anomalie in diesem Einsatz."],
 20: ["Wissen verbreitet sich. Addiere {3} Lose Enden."]
};
function wkcKarte(n){
  var T = WKC_WETTER[n], los = /^Loses Ende gefunden/.test(T[0]);
  return '<section class="wkc-wk' + (los ? " los" : "") + '">' + T.map(function(x, i){
    var kl = T.length === 1 ? (los ? "r" : "c") : "abc".charAt(i);
    return '<div class="wkc-z"><em>' + n + (T.length > 1 ? "abc".charAt(i) : "") + '</em><p class="' + kl + '">' + (los ? '<b>' + tx(x) + '</b>' : tx(x)) + '</p></div>';
  }).join("") + '</section>';
}
function wkcGruppe(von, bis, titel){
  var m = von + Math.ceil((bis - von + 1) / 2), a = "", b = "", n;
  for(n = von; n < m; n++) a += wkcKarte(n);
  for(n = m; n <= bis; n++) b += wkcKarte(n);
  return '<h3 class="wkc-gt">' + titel + '</h3><div class="wkc-wetter"><div>' + a + '</div><div>' + b + '</div></div>';
}
TA_TEXT["w/tabellen/wetter"] = [
 {t:"fenster", art:"fehler", z:"symbol-warnung", titel:"Die Entwirrung (abgesicherter Modus)", w:1500, b:[
  {t:"html", x:'<div class="wkc-fw">' + wkcGruppe(1, 6, "Wetterereignisse (1–6)") + wkcGruppe(7, 12, "Wetterereignisse (7–12)") + wkcGruppe(13, 18, "Wetterereignisse (1<b class=\"drei\">3</b>–18)") + wkcGruppe(19, 20, "Wetterereignisse (19–20)") + '</div>'}
 ]}
];

/* ---- S. 164–169: Lose Enden (abgesicherter Modus) ---- */
var WKC_STUFEN = [
 ["0", "0", "0", "Nur diejenigen, die in den Bedingungen der Anstellung bei der Agency vorgesehen sind."],
 ["11", "5", "1", "Die Beziehungen der Agenten erinnern sie in sonst normalen Gesprächen spontan an ihre Pflichten bei der Agency und an die Wichtigkeit, Lose Enden zu verringern."],
 ["22", "10", "2", "Um die Wirkung einer Triszendenz zu erhalten, müssen Agenten eine kurze Rede halten, in der sie sich dazu bekennen, Lose Enden rückgängig zu machen und die Realität zu stabilisieren."],
 ["{3}{3}", "15", "{3}", "Agenten müssen (laut oder gleichwertig) bis {3} zählen, bevor sie einen Wurf machen.", "rot"],
 ["44", "20", "4", "Agenten sind nicht mehr für den MVP teilnahmeberechtigt, bis die Zahl der Lose Enden unter 44 sinkt."],
 ["55", "25", "5", "Lies den Agenten Folgendes vor: „Allen Agenten werden die Verträge gekündigt, wenn die Zahl der Lose Enden 66 erreicht. Gelingt es euch nicht, diese Zahl durch Einsätze zu senken, müsst ihr zusätzliche Stunden arbeiten: Streicht bei allen Work-Life-Balance-Leisten ein Kästchen vom Ende, um 6 Lose Enden eigenständig zu entfernen.“"],
 ["66", "entfällt", "entfällt", "Am Ende des laufenden Einsatzes wird das aktive Außenteam in den Ruhestand gezwungen. Es muss unter den Ruhestandsoptionen wählen, die ihm zur Verfügung stehen. Hat es keine, wird es in den Vault geschickt. Die Zahl der Lose Enden dieser Region sinkt um 11 und um weitere 11 für jeden Agenten, der eine von seiner Kompetenz gebotene Ruhestandsoption nutzt."],
 ["77", "entfällt", "entfällt", "Die Entwirrung droht zu beginnen. Um das zu verhindern, wird die Region der Zweigstelle aus der Existenz entfernt.\n[[W7]]"]
];
var WKC_TAB = '<table class="wkc-lt"><thead><tr><th>Lose<br>Enden</th><th>Start-<br>Chaos</th><th>Wetter-<br>ereignisse</th><th>Einschränkungen der Zweigstelle<br>(kumulativ)</th></tr></thead><tbody>' +
  WKC_STUFEN.map(function(r){ return '<tr' + (r[4] ? ' class="rot"' : '') + '><td>' + tx(r[0]) + '</td><td>' + tx(r[1]) + '</td><td>' + tx(r[2]) + '</td><td>' + tx(r[3]) + '</td></tr>'; }).join("") + '</tbody></table>';

TA_TEXT["w/leiten/lose"] = [
 {t:"desktop", task:["Die Entwirrung", "MyManual 1998: Professional Edition", "Media Player", "Normal AntiVirus", "Desktop-Kumpel", "REDEN WIR ÜBER FOKUS! DIESE ANOM…"], b:[
  {t:"fenster", art:"fehler", z:"symbol-warnung", titel:"Die Entwirrung (abgesicherter Modus)", b:[
   {t:"sp", x:[
    [{t:"h3", x:"Die Entwirrung"},
     "In ihrem sichersten Zustand ist die Realität ein unbeschriebener Wandteppich, sorgfältig gewoben aus vielen unfokussierten Köpfen. Beobachtung und Meinung sind Farbstoff, der darüber verschüttet wird; sie vereinen die Fäden zu einem Zweck und machen den Wandteppich vom Gegenstand zum Rahmen. Beherbergte die Realität nur einen einzigen Gedanken, würde dieser Gedanke sofort als der Daseinsgrund des Wandteppichs hervortreten. Viele Gedanken, und ein Bild entsteht. Bald würde ein beiläufiger Betrachter gar nicht mehr an den Wandteppich denken, so detailliert ist das Bild.",
     "Aber wir tun es.",
     "Wenn ein Faden im Wandteppich sich des Ausmaßes seiner Lage bewusst wird – dass er nicht einmal das ganze Bild ist, geschweige denn der Raum, in dem es ausgestellt wird –, wird er zu einem **Losen Ende.** Der einfachste Weg, ein Loses Ende zu erschaffen, ist, ihm etwas Anomales zu zeigen, wie an anderer Stelle in diesem Handbuch besprochen. Besonders unternehmungslustige oder beherzte Personen können sich selbst zu Losen Enden machen, aber ihre Sichtweise ist selten so ansteckend wie klare Beweise für die Störung der Realität.",
     "Viele Lose Enden in unmittelbarer Nähe beginnen zu verändern, wie die Realität beobachtet wird, von ihnen und von anderen, die mit ihnen in Kontakt stehen. Je misstrauischer und unbehaglicher die Menschen werden, desto mehr werden es auch ihre Gedanken – diese Gedanken verändern die Realität weiter, und wenn sie nicht beseitigt werden, beginnt ein Prozess, den wir als **die Entwirrung** bezeichnen.",
     "Die grundlegendste Auswirkung der Entwirrung auf deine tägliche Arbeit ist, dass Lose Enden zusätzliches Umgebungs-Chaos hinzufügen, das Anomalien gegen dein Außenteam einsetzen können. Mit der Zeit können die Auswirkungen jedoch weitaus dramatischer sein. Was wir vermeiden müssen, ist der Punkt, an dem sich Lose Enden in so großer Zahl ansammeln, dass ihre Auswirkungen beginnen, weitere Lose Enden zu erzeugen.",
     "Ab einem gewissen Punkt halten wir es für sicherer, eine kleine Bevölkerung aus der Existenz zu entfernen, als zuzulassen, dass sich eine Entwirrung in die weitere Welt ausbreitet. Das ist schon geschehen."],
    [{t:"h3", x:"Lose Enden und Wetterereignisse"},
     "Jedes Mal, wenn eine Anomalie dem Zugriff entkommt, geht sie hinaus in die Welt und hinterlässt einen Eindruck, den wir nicht kontrollieren können: **Jedes Mal, wenn eine Anomalie entkommt, addiere 7 Lose Enden zur Gesamtzahl deiner Zweigstelle.**",
     "Vor jedem Einsatz musst du den aktuellen Stand der Lose Enden deiner Zweigstelle in der folgenden Tabelle nachsehen. Er bestimmt, wie viel Umgebungs-Chaos den Anomalien zur Verfügung steht, welchen Einschränkungen deine Agenten unterliegen und wie viele anomale Effekte in deiner Region auftreten. Wir nennen diese **Wetterereignisse.**",
     "Um jedes der aktuellen Wetterereignisse zu bestimmen, würfelst du bei der Vorbereitung deines Einsatzes mit einem 20-seitigen Würfel und schlägst dann in der Tabelle auf den folgenden Seiten nach.",
     "Wenn du eine Zahl zum ersten Mal würfelst, erlebt die Region deiner Zweigstelle den **Anfangseffekt** dieser Zahl (mit Xa bezeichnet). Würfelst du diese Zahl bei einem späteren Einsatz erneut, geh zum **Verstärkten Effekt** (mit Xb bezeichnet) über. Wird sie schließlich bei einem späteren Einsatz ein drittes Mal gewürfelt, schreite zum **Extremen Effekt** (mit Xc bezeichnet) fort. Danach entscheidest du, ob sich der Extreme Effekt wiederholt oder die Zahl der Lose Enden deiner Zweigstelle einfach um {3} erhöht wird.",
     "Würfelst du ein Vielfaches von {3}, hat die Agency eine Anzahl Lose Enden ohne deine Hilfe ausfindig gemacht und ein weiteres Außenteam entsandt, um sie aus der Zählung zu entfernen. Beachte, dass dieser Effekt sofort eintritt und beeinflussen kann, wie viele Würfe du machst!",
     "Bitte lüge nicht über deinen Wurf. Deine Agenten vertrauen dir. Du würdest ihr Vertrauen doch nicht aufs Spiel setzen wollen, oder?"]]},
   {t:"html", x:WKC_TAB},
   {t:"sp", x:[
    [{t:"html", x:'<a class="wkc-knopf" onclick="go(\'w/tabellen/wetter\')"><b>Wetterereignisse (1–20)</b><span>Alle Wetterereignisse ansehen ▸</span></a>'}],
    [{t:"h3", x:"Ein unglückliches Ende"},
     "Wie du siehst, führt ein Übermaß an Losen Enden zu einem vollständigen Zusammenbruch der <Realität/der Erzählung>. Zu viele Wetterereignisse können Ermittlungen verwirrend, schwierig oder unmöglich machen. Das darf nicht geschehen.",
     "Denk daran: Jedes Mal, wenn eine Anomalie entkommt, steigt die Zahl der Lose Enden um 7. Wenn zu viele Anomalien entkommen dürfen – und dein Außenteam zu viele Lose Enden erzeugt –, bleibt uns keine andere Wahl, als deine Zweigstelle und ihre Region aus der Existenz zu entfernen. Selbstverständlich entfernen wir auch die Erinnerung daran. Nur so können wir die Realität zuverlässig vor einer vollständigen Entwirrung schützen.",
     "Die Entwirrung ist die Zerstörung der Unterscheidung zwischen Gedanke und Realität. Eine Erosion der Grenze zwischen Vergangenheit und Zukunft. Es ist ein Zustand, in dem das Leben zugleich unkenntlich und untragbar ist – ein weiter Ozean, an dem man sich an nichts festhalten kann, ohne Verständnis und ohne Selbst. Die Menschheit wird in der Entwirrung ertrinken, ebenso wie alles andere, was nicht anomal ist."]]}
  ]},
  {t:"sp", x:[
   [{t:"html", x:'<div class="wkc-av"><div class="wkc-avt"><span>Normal AntiVirus</span><i>×</i></div><div class="wkc-avb"><p>Oje! Es sieht so aus, als wäre der abgesicherte Modus auf diesem System nicht sicher.</p><p>Starte jetzt deine kostenlose Testversion und arbeite mit Zuversicht!</p><u>Ok</u></div></div>' +
     '<div class="wkc-ruf"><div class="wkc-rt"><span>ANOMALIEN IN DEINER NÄHE?</span><i>×</i></div><div class="wkc-rb">WIR WARTEN AUF DEINEN ANRUF<br>RUF 777-7777 JETZT AN!!!!!!!</div></div>'}],
   [{t:"html", x:'<div class="wkc-km"><div class="wkc-kt"><img src="img/zeichen/symbol-auge-blau.png" alt=""><span>KOSTENLOSER Desktop-Kumpel – Nie wieder allein arbeit…</span><i>×</i></div><div class="wkc-kb"><div><h4>DEIN DESKTOP-KUMPEL!</h4><p class="l1">Funktioniert im abgesicherten Modus!</p><p class="l2">„Bitte, ich kann das erklären!“</p><p class="l3">Über 777 Witze installiert!</p><u>HIER KLICKEN FÜR KOSTENLOSEN DOWNLOAD</u></div><img src="img/regeln/full/buddy-01-s169.webp" alt=""></div></div>'}]]}
 ]}
];

/* ---- S. 194: Orte in der Innenstadt, Pflicht-Überstunden ---- */
var WKC_ORTE = [
 ["Vango Saftbar", "Vindication Park", "Freiluft-Flohmarkt", "Halston Hundeauslauf und Kongresszentrum"],
 ["Bonanza Saftladen", "GraspR Firmenzentrale", "Der fußförmige Müllcontainer", "Marcia-Mathers-Konzerthalle"],
 ["Hegeman-Zweigbibliothek", "Omni-Mart", "Morningstar Bank", "Blue-Moon-Grundschule"],
 ["Massimo Baumarkt", "Altmans Kriegerdenkmal", "Pub „Zur Munteren Jakobsmuschel“", "Museumsplatz"]
];
TA_TEXT["w/ternion/orte"] = [
 {t:"html", x:'<h2 class="wkc-orte-h">Sehenswerte Orte in der Innenstadt von Ternion City</h2><p class="wkc-orte-s">Wirf zwei vierseitige Würfel und weise einen der Spalte und einen der Zeile zu, um ein Ziel zu finden!</p>' +
  '<div class="wkc-orte"><span></span>' + [1,2,3,4].map(function(i){ return '<b class="k">' + i + '</b>'; }).join("") +
  WKC_ORTE.map(function(z, r){ return '<b class="z">' + (r + 1) + '</b>' + z.map(function(o){ return '<div>' + tx(o) + '</div>'; }).join(""); }).join("") + '</div>'},
 {t:"html", x:'<h2 class="wkc-ue">Pflicht-Überstunden</h2>'},
 "Schließlich: Muss ein Agent einmal einen Einsatz verpassen, musst du nicht die gesamte Schicht absagen. Agenten können ohne größere Probleme bei der in ihre Laufbahn investierten Zeit auseinanderlaufen, aber wenn du sie auf dem Laufenden halten möchtest, schlagen wir Folgendes vor: **Weise diesem Agenten – oder lass ihn wählen – einen Solo-Einsatz zu, den er während des verpassten Einsatzes absolvieren muss.** Dieser Einsatz muss nicht ausgespielt werden, du musst aber besprechen, was geschehen ist, zwischen den Sitzungen oder am Tisch. Wenn er abgeschlossen ist, lass ihn Zeit wie gewohnt ausgeben.",
];
