/* Charaktere: Burned and Broken (Quellenbuch, 28 S.) – Sturz, Herkünfte, Minister – übersetzt.
   Seitenangaben = Buchseiten von „Burned and Broken“ (Bookviewer-Buch ht_z3). */
window.HT_NACH = window.HT_NACH || {};
(function(){
var BK = "ht_z3", BL = "B&B";
function bb(o){ o.bk = BK; o.bl = BL; return o; }
function ul2(L){ return L.map(function(a){ return "**" + a[0] + ":** " + a[1]; }); }
/* Herkunft: Einleitung + Startausstattung links, „Wähle zwei“ rechts, darunter „Wähle eins“ als Karten */
function orig(id, t, p, intro, zwei, eins, skill, domain, equip){
  var st = [];
  if(skill) st.push("**Skill:** " + skill);
  if(domain) st.push("**Domain:** " + domain);
  return bb({id:id, t:t, p:p, b:[
    {t:"grid", n:2, x:[
      [{t:"p", k:1, x:intro}, {t:"kasten", h:"Startausstattung", b:st.map(function(s){ return {t:"p", x:s}; }).concat([{t:"p", x:"**Ausrüstung:** " + equip}])}],
      [{t:"h", x:"Wähle zwei"}, {t:"ul", x:ul2(zwei)}]
    ]},
    {t:"h", x:"Wähle eins"},
    {t:"karten", n:4, x:eins.map(function(a){ return {t:a[0], b:[a[1]]}; })}
  ]});
}
var C = HT_NACH.charaktere = HT_NACH.charaktere || {t:"Charaktere", p:9, subs:[]};

C.subs.push({id:"herkuenfte", t:"Herkünfte", secs:[
 bb({id:"sturz", t:"Der Sturz", p:8, b:[
  {t:"grid", n:2, x:[[
    "Normale Heart-Figuren haben Zugriff auf **Berufungen**: Antriebe, Besessenheiten und Umstände, die sie ins Herz getrieben haben und dort halten. In *Burned and Broken* hast du stattdessen einen **Sturz** – die Ereignisse, die zu deiner Verstoßung aus dem Ministerium führen, deine Flucht und ihre Folgen und deine Entwicklung zu einem echten Bewohner des Herzens. Der Sturz wird von allen Figuren der Gruppe geteilt; ihr steckt alle gemeinsam drin.",
    "Wähle beim Erschaffen deiner Figur je einen Beat aus jeder der drei Kategorien unten (**Verlassen**, **Eingewöhnen**, **Werden**). Du kannst nicht denselben Beat wie jemand anderes wählen, also klärt als Gruppe, wer welche nimmt. Wenn du einen gewählten Beat erreichst, erhältst du eines der Folgenden:",
    {t:"ul", x:["Eine **Berufung** deiner Wahl (wähle ihre Beats noch nicht aus – warte, bis du alle aus deinem Sturz erfüllt hast).","Die Kernfähigkeiten der **Klasse**, die du werden willst.","Einen großen Aufstieg aus der **Klasse**, die du werden willst."]}
   ],[
    "Es ergibt am meisten Sinn, sie von oben nach unten zu nehmen, was den Fähigkeitsfortschritt angeht, aber klärt mit der SL, was erzählerisch am besten passt. Wenn du einen Beat erreichst, streiche ihn von der Liste. Bist du am Ende einer Sitzung mit deinen aktuellen Beats unzufrieden, kannst du sie wie gewohnt gegen andere tauschen.",
    "Hast du alle drei Beats deines **Sturzes** erreicht, bist du eine vollwertige Heart-Figur – und behältst einige Fähigkeiten und Vorteile aus deiner **Herkunft**. Ab dann läuft das Spiel wie in einer normalen Heart-Kampagne."
   ]]},
  {t:"grid", n:3, x:[
   [{t:"h", x:"Verlassen"}, {t:"p", k:1, x:"Lebend aus Spire entkommen, Brücken verbrennend, um dir den Weg zu leuchten."}, {t:"ul", x:["Besiege einen Paladin, der geschickt wurde, um dich zu töten","Zerstöre eine Beziehung, um einen von euch beiden vor Gefahr zu schützen","Zerstöre etwas aus deinem früheren Leben","Entkomme einem Silence Team des Ministeriums","Finde Beweise, dass deine Feinde dich verfolgen","Räche dich an denen, die dich verraten haben","Töte einen Minister, der geschickt wurde, um dich zu ermorden","Mache Wiedergutmachung bei Leuten, denen du wehgetan hast","Triff jemanden, den du verraten hast","Jemand, den du verraten hast, stellt dich zur Rede"]}],
   [{t:"h", x:"Eingewöhnen"}, {t:"p", k:1, x:"Passe dich an die allgegenwärtige Fremdheit des Herzens an."}, {t:"ul", x:["Beanspruche eine Ressource im Wert von W8 oder höher","Schließe einen Delve ab","Kämpfe gegen einen Gegner mit Schutz 2 oder höher","Töte ein Herzblutwesen","Töte einen Gegner mit Resistenz 12 oder höher","Entferne insgesamt 6 Stress von deinen Verbündeten","Erleide **Fortune**-Fallout","Erleide schweren **Echo**-Fallout","Erleide leichten **Echo**-Fallout","Werde Zeuge von etwas Wundersamem"]}],
   [{t:"h", x:"Werden", p:9, bk:BK, bl:BL}, {t:"p", k:1, x:"Knüpfe Verbindungen zu den Menschen und Orten der Stadt darunter."}, {t:"ul", x:["Schließe einen Delve mit Resistenz 12 oder höher ab","Erweise einer Organisation einen Gefallen","Erweise Vertretern deiner angestrebten Klasse einen Gefallen","Stelle eine Verbindung zwischen zwei Landmarken her","Werde für Arbeit bezahlt","Lass dir Fallout von einem Verbündeten oder an einem Haunt entfernen","Nimm Kontakt zu einer Organisation auf","Nimm Kontakt zu Vertretern deiner angestrebten Klasse auf","Erreiche einen Haven","Entferne mit einem Haunt Stress"]}]
  ]}
 ]}),
 bb({id:"ueberblick", t:"Herkünfte", p:10, b:[
  {t:"grid", n:2, x:[[
    "Das Ministerium hat dich aus einem Grund angeheuert. Wähle eine der folgenden Herkünfte, um zu erklären, warum es sich überhaupt für dich interessierte und welche Fähigkeiten und welche Ausrüstung du in die Stadt darunter mitgebracht hast. Statt mit einer Heart-Klasse zu beginnen, bietet jede Herkunft eine Handvoll Fähigkeiten, die mit deiner Spire-Klasse zusammenhängen, und dient als Zwischenstufe zwischen beiden.",
    "Wo möglich, haben wir die Namen bestehender Spire-Fähigkeiten in etwas ungefähr Gleichwertiges umgeformt, aber es ist keine Eins-zu-eins-Übersetzung von Funktion oder Macht. Was in der Stadt oben eine mächtige Fähigkeit sein mag, kann im Herzen weitgehend nutzlos sein, und die Umstände vom Fall der Zelle werden ihre Fähigkeiten erheblich verringert haben."
   ],[
    "Wenn du deine Figuren von einem System ins andere überträgst, nutze die Herkünfte hier, um eine Skizze deines Ministers zu zeichnen statt einer perfekten Darstellung. Überlege, was du auf der Flucht aus der Stadt oben zurücklassen musstest (oder was dir genommen wurde).",
    {t:"kasten", h:"Abstammungen", b:["Alle Spielerfiguren in *Spire* sind Drow, also können wir annehmen, dass auch alle mit Herkünften erschaffenen Figuren Drow sind; aber in seltenen Fällen arbeiten Nicht-Drow als Verbündete oder Mittel des Ministeriums, falls du etwas anderes ausprobieren möchtest. Es ist dein Spiel, schließlich, und es hat keinen mechanischen Effekt."]}
   ]]}
 ]}),
 orig("azurite","Azurite",11,
  "Du warst Priester des Goldgottes Azur in den Blue Docks der Stadt oben. Deine Wunder gaben dir die Fähigkeit, Verbündete zu kaufen und zu verkaufen – doch hier, tief unter der Erde, beginnt deine Magie zu stocken.",
  [["Von Azur gesegnet","Erhalte +1 **Fortune**-Schutz."],["Leibwächter","Erhalte den Skill **Kill**."],["Auge für Schnäppchen","Erhalte den Skill **Discern**."],["Fluchtbeutel","Erhalte +1 **Supplies**-Schutz."],["Harter Handel","Ressourcen, die du an einem Haunt gegen Heilung eintauschst, zählen als eine Würfelgröße höher."],["Hinter etwas verstecken","Erhalte den Skill **Evade**."],["Priester Azurs","Erhalte die Domain **Religion**."]],
  [["Herzenswunsch","Einmal pro Situation wählst du einen NSC, den du eine Weile beobachten kannst. Die SL sagt dir, was er gerade am meisten will."],
   ["Auf den Wurf einer Münze","Wenn du eine Handlung ausführst, wirf statt Würfeln eine Münze. Zeigt sie Kopf, zählt das als 10; bei Zahl als 1. Dieses Ergebnis wird in keiner Weise durch die Schwierigkeit der Handlung verändert."],
   ["Das Arkanum des Goldenen Gottes","Würfle **Compel+Religion**, um diesen Zauber zu wirken. Bei Erfolg erhältst du oder ein naher Verbündeter bis zum Ende der aktuellen Situation einen Skill, auf den er normalerweise keinen Zugriff hat."],
   ["Echtes Blau","Trägst du die heiligen blauen Seiden Azurs und verbringst etwa eine halbe Stunde damit, deinen Körper mit Gebeten und heiligem Schmuck vorzubereiten, erhältst du Schutz 1 in allen Resistenzen. Wenn du Fallout erleidest, werden deine Kleider zerrissen oder anderweitig beschädigt, und du verlierst die Vorteile von **ECHTES BLAU**, bis du dir eine halbe Stunde nimmst, es erneut zu wirken."]],
  "Compel","Haven","Keule (**Kill W6**)"),
 orig("blood-witch","Blood-Witch",11,
  "Du hast die ersten Flüstern des Hexenvirus gehört, das durch die Stadt darunter hallt und pumpt. Du hast das alte Blut geschmeckt, und du wirst zum Kanal für etwas Größeres, als in deine sterbliche Hülle passt.",
  [["Weigere dich zu bluten","Erhalte +1 **Blood**-Schutz."],["Mörderisch","Erhalte den Skill **Kill**."],["Fluch des blinden Auges","Erhalte den Skill **Sneak**."],["Gehärteter Geist","Erhalte +1 **Mind**-Schutz."],["Infiziert","Erhalte die Domain **Cursed**."],["Herz-weise","Erhalte den Skill **Delve**."],["Gebieterisch","Erhalte den Skill **Compel**."]],
  [["Vertrauter","Erhalte einen Tiergefährten, der als folgende Ausrüstung funktioniert: (**Delve W6, Trusty**) und (**Kill W8, Ranged, One-Shot**)."],
   ["Echos","Erhalte +1 **Fortune**-Schutz. Wenn du das warme Blut eines Geschöpfs schmeckst, erfährst du etwas Interessantes oder Überraschendes aus seiner Vergangenheit oder Zukunft."],
   ["Keimende Verwandlung","Wenn du **schweren** Fallout erleidest, verwandelst du dich in ein Zoetrop-Grauen. Für den Rest der Situation erhöht sich aller Stress, den du Gegnern zufügst, um eine Stufe. Erhältst du **WAHRE GESTALT** von der Klasse Witch, wirkt dies zusammen mit allen Effekten von **WAHRE GESTALT**, wenn du **schweren** Fallout erleidest."],
   ["Sturzbach","Einmal pro Situation verursacht dein Angriff W10 Schaden, wenn du ein Ziel angreifst, das nicht auf voller Resistenz ist."]],
  "Endure","Occult","Klinge (**Kill W6, Bloodbound**)"),
 orig("bound","Bound",12,
  "Du jagtest als Vigilant Verbrecher – über den klapprigen Elendsvierteln von Perch, den knochenübersäten Türmen der Stille in New Heaven oder den gesetzlosen Bauten von Red Row. Du betest zu den kleinen Göttern in deinen Seilen, deiner Klinge und deiner Rüstung.",
  [["Geheimnis des Fluges","Wenn du deine Gottklinge wirfst, erhält sie die Tags **Ranged**, **Piercing** und **Unreliable**."],["Geheimnis der Herzschläge","Erhalte den Skill **Hunt**."],["Geheimnis der losen Zungen","Erhalte den Skill **Compel**."],["Geheimnis des glücklichen Zufalls","Erhalte +1 **Fortune**-Schutz."],["Geheimnis der zweiten Haut","Erhalte +1 **Blood**-Schutz."],["Geheimnis der Schatten","Erhalte den Skill **Sneak**."],["Geheimnis der Menge","Erhalte die Domain **Haven**."]],
  [["Heiliger der Fesselung","+1 **Supplies**-Schutz. Dein Gottseil erhält folgendes Profil: (**Kill W4, Debilitating, Spread**)."],
   ["Heiliger der Klingen","+1 **Blood**-Schutz. Deine Gottklinge erhöht ihren Schaden um eine Stufe."],
   ["Heiliger des Blutes","Einmal pro Situation entfernst du W6 Stress von **Blood** oder stufst ein **Blood**-Fallout-Ergebnis um 1 Stufe herab, wenn du jemanden zum Bluten bringst."],
   ["Heiliger der Furcht","Einmal pro Situation erzürnst du den kleinen Gott in deiner Gottklinge. Dann erhält deine Klinge für den Rest der Situation die Tags **Brutal**, **Loud** und **Spread**."]],
  "Kill","Warren","Gottklinge (**Kill W6**) · Gottseile (**Delve W6**)"),
 orig("carrion-priest","Carrion-Priest",12,
  "Du warst Mitglied eines ketzerischen Todeskults in den windgepeitschten Straßen von New Heaven und hast würdige Seelen zu Charnel geleitet, dem lachenden Aasgott.",
  [["Hinterhalt","Erhalte den Skill **Sneak**."],["Knochenrüstung","+1 **Blood**-Schutz."],["Gackern","Erhalte den Skill **Compel**."],["Charnels Auserwählter","+1 **Fortune**-Schutz."],["Todespriester","Erhalte die Domain **Religion**."],["Geistersprecher","Erhalte die Domain **Occult**."],["Reißen und Zerfetzen","Erhalte den Skill **Kill**."]],
  [["Charnels Mal","Markiere W6 Stress auf **Blood**, um diesen Zauber auf ein Ziel zu wirken, das du sehen kannst. Bis zum Ende der Situation erhalten du und deine Verbündeten den Tag **Brutal**, wenn sie dieses Ziel angreifen."],
   ["Gefährte","+1 **Blood**- und +1 **Mind**-Schutz. Erhalte eine Hyäne (**Delve W6, Trusty, Loud**)."],
   ["Gestalt des Rabenvogels","Markiere W6 Stress auf **Blood**, um dich für etwa zwölf Stunden in einen größeren als normalen Rabenvogel zu verwandeln. Du kannst nicht sprechen oder komplexe Aufgaben erledigen, aber du kannst fliegen, und nur wenige werden vermuten, dass du verkleidet bist."],
   ["Rotes Festmahl","Einmal pro Situation entfernst du W6 Stress von einer beliebigen Resistenz außer **Mind**, wenn du jemanden tötest und sein Fleisch isst."]],
  "Hunt","Desolate","Kriegsbeil (**Kill W8**)"),
 orig("firebrand","Firebrand",13,
  "Du warst eine Stimme der Stimmlosen – ein hitzköpfiger, wilder Anführer der Drow, der den Kampf direkt zu denen trug, die es wagten, dich zu unterdrücken.",
  [["Immer in der Unterzahl, nie überholt","Erhalte den Skill **Evade**."],["Vernetzt","+1 **Supplies**-Schutz."],["Kampf gegen die Macht","Erhalte den Skill **Endure**."],["Auserwählter der Göttin","Erhalte die Domain **Religion**."],["Eiserner Wille","+1 **Mind**-Schutz."],["Edles Opfer","Erhalte den Skill **Fight**."],["Nase für Ärger","Erhalte den Skill **Discern**."]],
  [["Waffenbrüder","+1 **Blood**-Schutz. Einmal pro Sitzung erhalten, wenn du Seite an Seite mit einem Verbündeten kämpfst, eure beiden Angriffe bis zum Ende der Situation den Tag **Brutal**."],
   ["Ein Exempel statuieren","Einmal pro Situation markieren, wenn du einen Gegner außer Gefecht setzt, alle Gegner, die es sehen, W4 Stress."],
   ["Ich und diese Armee","Einmal pro Sitzung kannst du, wenn du dich in einem Bereich mit der Domain **Haven** befindest, einen wütenden Mob aufwiegeln, der mit dir marschiert. Für die nächste Situation hast du +2 **Blood**-Schutz, aller Stress, den du einem Gegner oder Delve zufügst, erhöht sich um eine Stufe, und du hast den Tag **Loud** auf all deiner Ausrüstung."],
   ["Unantastbar","+1 **Fortune**-Schutz. Einmal pro Situation markierst du Stress auf **Fortune** statt auf einer anderen Resistenz."]],
  "Compel","Haven","Schrotflinte (**Kill W8, Ranged, Unreliable**) · Klinge (**Kill W6**)"),
 orig("idol","Idol",14,
  "Du warst ein schöner Künstler-Zauberer, triefend vor Schwarzmarkt-Schwarzmagie, der sein Gewerbe im glitzernden Silver Quarter und im verfallenen (aber immer noch wohlhabenden) Bezirk Ivory Row betrieb.",
  [["Schöpfer","Erhalte den Skill **Mend**."],["Unerbittlich","+1 **Mind**-Schutz."],["Scharfäugig","Erhalte den Skill **Discern**."],["Flink","Erhalte den Skill **Evade**."],["Nahtlos","+1 **Fortune**-Schutz."],["Beseelt","Erhalte die Domain **Wild**."],["Unauffällig","Erhalte den Skill **Sneak**."]],
  [["Anmut","Einmal pro Situation darfst du, wenn du Würfel wirfst, um zu sehen, ob eine Handlung gelingt, und einer davon eine 1 zeigt, alle geworfenen Würfel neu werfen."],
   ["Maestro","+1 **Mind**-Schutz. Einmal pro Sitzung wähle eines: Wenn ein naher Verbündeter leichten **Mind**-Fallout erleidet, beruhigst du ihn und der Fallout hat keine Wirkung; oder wenn ein naher Verbündeter schweren **Mind**-Fallout erleidet, stufst du ihn auf **leicht** herab, bevor er wirkt."],
   ["Mit Blut malen","Erhalte den Skill **Kill**. Hast du keinen anhaltenden Fallout gegen dich markiert, erhalten deine Angriffe den Tag **Brutal**."],
   ["Bosheit","Würfle **Compel+Occult**, um diesen Zauber auf ein Ziel zu wirken, das du sehen kannst. Bei Erfolg schlägt das Ziel gegen sich selbst aus. Es markiert W6 Stress, wenn es unbewaffnet ist, und W8 Stress, wenn es eine Waffe hält."]],
  "Compel","Occult","Klinge (**Kill W6**)"),
 orig("inksmith","Inksmith",14,
  "Du warst ein Journalist-Magier, der Zauber aus dem kulturellen Zeitgeist der Stadt oben spann. Hier unten, weit von der nächsten Druckerpresse oder dem nächsten reißerischen Magazin, musst du dich statt auf deine Zauberei auf dich selbst verlassen, um dich zu schützen.",
  [["Nase für Ärger","Erhalte den Skill **Discern**."],["Jedermanns bester Freund","Erhalte die Domain **Haven**."],["Raue Schale","+1 **Blood**-Schutz."],["Glücksfall","+1 **Fortune**-Schutz."],["Kopf runter","Erhalte den Skill **Evade**."],["Abenteurer","Erhalte den Skill **Delve**."],["Lebemann","+1 **Mind**-Schutz."]],
  [["Die Fakten zurechtbiegen","Würfle **Discern+Occult**, um diesen Zauber zu wirken. Bei Erfolg erhältst du oder ein naher Verbündeter bis zum Ende der Situation Zugriff auf die Domain, in der du dich gerade befindest."],
   ["Vertrau mir","+1 **Supplies**-Schutz. In der ersten bewohnten Landmarke, die du erreichst, wartet eine Bindung auf dich – jemand, der wusste, dass du kommst."],
   ["K.-o.-Schlag","Würfle **Compel+Occult**, um diesen Zauber zu wirken. Bei Erfolg erhältst du den Skill **Kill**, und der erste Faustangriff gegen jedes sterbliche humanoide Ziel verursacht W8 Schaden. Reduzierst du es auf 0 Resistenz, wird es bewusstlos geschlagen (aber nicht getötet). Diese Effekte halten bis zum Ende der aktuellen Situation an."],
   ["Namenloses Grauen","Würfle **Compel+Occult**, um diesen Zauber zu wirken. Bei Erfolg erleidet ein sterbliches humanoides Ziel, das du sehen und hören kannst, W6 Stress durch Furcht und versucht zu fliehen."]],
  "Compel","Occult","Grackler-Pistole (**Kill W8, Ranged, Loud, One-shot**) · Zerbrochenes Rapier (**Kill W6**)"),
 orig("knight","Knight",15,
  "Du warst Mitglied eines von hundert Ritterorden, denen die Aelfir erlauben, die Flussdocks von Spire zu überwachen; du warst Knochenbrecher, Erpresser und Schurke.",
  [["Gesegnet","Erhalte die Domain **Religion**."],["Verzaubert","+1 **Fortune**-Schutz."],["Gesetz des Landes","Erhalte den Skill **Hunt**."],["Optimist","+1 **Mind**-Schutz."],["Überzeugend","Erhalte den Skill **Compel**."],["Plattenpanzer-Überreste","+1 **Blood**-Schutz."],["Straßenkämpfer","Erhalte die Domain **Warren**."]],
  [["Prahlerei","Einmal pro Sitzung überzeugst du automatisch einen NSC, dass du etwas erreichen kannst (ob du es tatsächlich kannst, spielt keine Rolle)."],
   ["Komm her","Gegner erhöhen ihre Schadenswürfel nicht, wenn sie dich im Kampf zahlenmäßig übertreffen; bist du aber im Kampf in der Unterzahl, erhalten deine Angriffe den Tag **Brutal**."],
   ["Schmutziges Kämpfen","Wenn du unbewaffnet gegen etwas von ungefähr deiner Größe kämpfst, erhalten deine Angriffe den Tag **Debilitating**."],
   ["Lanzenreiter","+1 **Blood**-Schutz. Erhalte eine Lanze (**Kill W6, Piercing, Unreliable**)."]],
  "Kill","Haven","Zweihänder (**Kill W8, Tiring**)"),
 orig("lajhan","Lajhan",16,
  "Du warst Priester der einen Drow-Göttin, deren Verehrung in der Stadt Spire noch erlaubt ist, und du wirktest Wunder, um Bedürftigen beizustehen.",
  [["Schutzengel","+1 **Fortune**-Schutz."],["Kraft des Glaubens","+1 **Mind**-Schutz."],["Ruhe von Our Lady","Erhalte den Skill **Endure**."],["Freund der Unterdrückten","Erhalte die Domain **Haven**."],["Schimmerndes Bild","Erhalte den Skill **Sneak**."],["Scryatrix","Erhalte den Skill **Discern**."],["Selbstverleugnung","Erhalte die Domain **Desolate**."]],
  [["Mondlicht","+1 **Supplies**-Schutz. Du kannst nach Belieben Licht erzeugen. Erhalte Zugriff auf folgende göttliche Waffe: (**Kill W4, Spread, Debilitating**)."],
   ["Kuss von Our Lady","Würfle **Mend+Religion**, um diesen Zauber zu wirken. Bei Erfolg entfernst du W6 Stress von **Blood** oder **Mind** bei einem Verbündeten in Armreichweite."],
   ["Ritus des Silbernen Heiligtums","Würfle **Mend+Religion**, um diesen Zauber zu wirken. Bei Erfolg erschaffst du ein silbernes Siegel auf einer Wand oder einem Boden, den du berühren kannst. Alles, was es überschreitet, erleidet W6 Schaden, und du wirst dir des Eindringens bewusst; das Siegel wird dann entfernt. Du kannst jeweils nur ein Siegel aktiv haben."],
   ["Visionen des Herzens","+1 **Fortune**-Schutz. Erhalte den Skill **Delve** und die Domain **Cursed**."]],
  "Mend","Religion","Gesegnete Waffe (**Kill W6, Conduit**)"),
 orig("masked","Masked",16,
  "Du dientest direkt den Aelfir, verhülltest aus Höflichkeit dein Gesicht und intrigiertest gegen sie, während du dich verbeugtest und katzbuckeltest.",
  [["Innere Maske der Ruhe","+1 **Mind**-Schutz."],["Aus Wenig das Beste machen","Erhalte den Skill **Mend**."],["Mundlose Maske","Erhalte den Skill **Sneak**."],["Ein Auge offen","Erhalte den Skill **Evade**."],["Gequält","Erhalte den Skill **Endure**."],["Rachsüchtig","Erhalte den Skill **Kill**."],["Gut vorbereitet","+1 **Supplies**-Schutz."]],
  [["Maske des Mörders","+1 **Blood**-Schutz. Deine bloßen Hände sind Waffen (**Kill W6, Brutal**)."],
   ["Maske des Liebhabers","Einmal pro Sitzung verliebt sich auf deinen Wunsch hin ein NSC in dich. Sag der SL, wer."],
   ["Maskenmagie","Erhalte die Domain **Occult**. Lässt du deine Maske irgendwo zurück, kannst du durch ihre Augen sehen, wenn du deine schließt."],
   ["Mitfühlendes Ohr","+1 **Supplies**-Schutz. Erhalte die Domain **Haven**. Einmal pro Sitzung kannst du im Gespräch mit einem NSC automatisch herausfinden, welches Problem er hat, das du lösen kannst, um dir seine Gunst zu sichern. Löst du das Problem, erhältst du ihn als Bindung."]],
  "Compel, Discern",null,"Duellpistole (**Kill W6, Piercing, Ranged, One-shot**) · Messer (**Kill W6**)"),
 orig("midwife","Midwife",17,
  "Du bist ein spinnenblütiger Beschützer ungeborener Drow; Angehöriger einer berühmten, geheimnisvollen Sekte, ausgebildet in den Zwillingskünsten von Magie und Mord.",
  [["Rächer","Erhalte den Skill **Kill**."],["Chitinpanzer","+1 **Blood**-Schutz."],["Diplomat","Erhalte den Skill **Compel**."],["Wächter","Erhalte die Domain **Haven**."],["Ritus des stillen Geistes","+1 **Mind**-Schutz."],["Wandgänger","Erhalte die Domain **Warren**."],["Netz der Herrin","Erhalte den Skill **Discern**."]],
  [["Spinnenkörper","+2 **Blood**-Schutz. Erhalte den Skill **Hunt**."],
   ["Kantate der Neugestaltung","Würfle **Mend+Occult**, um diesen Zauber zu wirken. Bei Erfolg entfernst du nach einem halbstündigen Ritual leichten **Blood**-Fallout von dir oder einem Verbündeten."],
   ["Märtyrer","Einmal pro Sitzung kann ein naher Verbündeter, der leichten oder schweren Fallout erleidet, dessen Effekte ignorieren. Stattdessen erleidest du W6 Stress auf einer passenden Resistenz."],
   ["Süßlinge beschwören","Erhalte Zugriff auf folgende Waffe: (**Kill W6, Spread, Piercing, One-Shot**)."]],
  "Mend","Occult","Rasiermesser (**Kill W6, Brutal, Unreliable**)"),
 orig("shadow-agent","Shadow Agent",18,
  "Du warst ein geweihter Mörder und Spion für Our Hidden Mistress, die Schattengöttin des Ministeriums, und schlüpftest in Identitäten so mühelos wie in einen Umhang. Nun bist du von deinem Netz aus Kontakten und Einfältigen abgeschnitten und in die Stadt darunter entlassen.",
  [["Okkultist","Erhalte die Domain **Occult**."],["Drow des Volkes","Erhalte die Domain **Haven**."],["Lombres Umarmung","Erhalte den Skill **Sneak**."],["Unheimliche Wachsamkeit","Erhalte den Skill **Discern**."],["Werkzeug der Göttin","Erhalte den Skill **Kill**."],["Begünstigt","+1 **Fortune**-Schutz."],["Distanziert","+1 **Mind**-Schutz."]],
  [["Durch ein Glas, dunkel","Einmal pro Sitzung ignorierst du bis zum Ende der Situation jeden gegen dich markierten **Blood**- oder **Mind**-Fallout."],
   ["Folie à deux","Einmal pro Sitzung aktivierst du diese Kraft, wenn du eine bevölkerte Landmarke betrittst. Ein NSC dort glaubt, dich zu kennen und mit dir eine gemeinsame Geschichte zu haben; ihr seid euch aber nie begegnet."],
   ["Hansdampf der Schatten","Würfle **Sneak+Religion**, um diesen Zauber auf ein Ziel zu wirken, das du unbemerkt beobachten kannst. Bei Erfolg erhältst du eine mit ihm verbundene Domain."],
   ["Ernte","Tötest du jemanden, würfelst du bis zum Ende der Sitzung mit Meisterschaft, wenn du versuchst, dich als diese Person zu verkleiden."]],
  "Compel","Religion","Zerbrochener Stilettdolch (**Kill W4, Brutal, Piercing**) · Armbrust (**Kill W6, Ranged, Reload**)"),
 orig("vermissian-sage","Vermissian Sage",18,
  "Du warst ein Gelehrter, besessen von den Geheimnissen und der Magie des Vermissian-Netzwerks; nun hast du die Gelegenheit, tiefer vorzudringen als je zuvor.",
  [["Abgebrühte Seele","+1 **Echo**-Schutz."],["Kognitive Barriere","+1 **Mind**-Schutz."],["Vorgewarnt","Erhalte die Domain **Cursed**."],["Verborgenes Wissen","Erhalte die Domain **Occult**."],["Überzeugende Argumente","Erhalte den Skill **Compel**."],["Technische Handbücher","Erhalte den Skill **Fix**."],["Tunnelgeboren","Erhalte die Domain **Warren**."]],
  [["Entdecker","+1 **Fortune**-Schutz. Erhalte den Skill **Delve** und ein Dimensionsbarometer (**Delve W6, Trusty**)."],
   ["Gedankenverzeichnis","Würfle **Discern+Occult**, um diesen Zauber zu wirken. Bei Erfolg stellst du der SL eine Frage: Sie muss dir die Antwort nicht sagen, aber sie muss dir den direktesten Weg nennen, eine zu bekommen."],
   ["Gedankenleere","Würfle **Mend+Occult**, um diesen Zauber zu wirken. Bei Erfolg ignoriert ein naher Verbündeter bis zum Ende der aktuellen Situation die Effekte allen anhaltenden **Mind**-Fallouts."],
   ["Das ist nie passiert","Einmal pro Situation wirfst du, wenn du für eine Handlung würfelst und scheiterst, einen einzelnen Würfel deines Pools neu."]],
  "Discern","Technology","Zusammenklappbare Armbrust (**Kill W6, Ranged, Reload**)")
]});

/* ---------- Sturz aus der Gnade: Spielleitung (Kapitel „Falling from Grace: Running the Game“, B&B S. 19–20) ---------- */
C.subs.push({id:"sturz-spiel", t:"Sturz aus der Gnade", secs:[
 bb({id:"spielleitung", t:"Spielleitung", p:19, b:[
  {t:"grid", n:2, x:[[
    "Was folgt, ist eine lose Sammlung von Ratschlägen für die Leitung von Spielen im Rahmen von *Burned and Broken*; wir hoffen, sie sind nützlich.",
    {t:"h", x:"Passt Burned and Broken zu uns?"},
    "*Burned and Broken* erzählt eine ganz bestimmte Geschichte: eine Zelle, die vom Ministerium verstoßen wird und beschließt, in die Unterstadt des Heart zu fliehen, um zu überleben. Das ist bei Weitem nicht so offen wie die Grundregeln von *Heart* (oder auch *Spire*).",
    "Sorge dafür, dass die Spieler das vor dem Spiel wissen. Es ist eine Methode, Figuren durch eine feste Reihe von Impulsen von einem Zustand und Ort in einen anderen zu überführen. Die Figuren können dem Gang ins Heart nicht ausweichen. Sie können nicht beschließen, die Stadt zu verlassen und auf einem Himmelswal nach Aliquam zu fliegen; sie können sich nicht in Red Row verstecken; sie können nicht in die Heimatnationen fliehen.",
    "Wenn es trotzdem so kommt und ihr dabei Spaß habt: in Ordnung! Dann denkt euch einfach im Spiel etwas aus. Aber dann spielt ihr dieses Spiel nicht mehr."
   ],[
    {t:"h", x:"Eine Anmerkung zum Ort"},
    "Wir gehen davon aus, dass der Großteil eines *Burned-and-Broken*-Spiels in Derelictus und den oberen Ebenen des Heart stattfindet. Es könnte aber Spaß machen, das Spiel in der Stadt oben zu beginnen und die Flucht der Figuren aus Spire auszuspielen.",
    "Denk zum Beispiel an einen Delve in den North Docks. Nicht gefräßige Monster und wacklige Brücken bedrohen die Delver, sondern die Stadtwache, die sich ihrem Aufenthaltsort nähert. Was sonst ein einfacher Gang die Straße entlang oder eine Fahrt im Aufzug wäre, wird gefährlich. So lernen die Spieler die neuen Mechaniken des Spiels kennen, bevor du sie ins eigentliche Heart wirfst.",
    {t:"h", x:"Eine Anmerkung zur Zeit"},
    "Der Sturz aus dem Ministerium ist kein schneller Vorgang, und ebenso wenig der Weg zu jemandem, der im Heart überlebt. Wenn ihr die Spiele durchspielt, in denen die Spielerfiguren vom Minister zum Delver werden, musst du womöglich Zeitabschnitte – einige Tage oder sogar Wochen – streichen, wie es dir angemessen erscheint.",
    "Beispiel: Hat ein Spieler die Kernfähigkeiten der Klasse Vermissian Knight verdient, gehört dazu eine kraftverstärkte Rüstung, die er zumindest teilweise selbst gebaut hat. Das kann dauern. Was tun die anderen Figuren in der Zwischenzeit? (Viel müssen sie nicht tun – sie halten ja still.)",
    {t:"h", x:"Gegnerwerte"},
    "Zusätzlich zu den oben bei Derelictus aufgeführten Gegnern haben wir einige Werte für die Leute zusammengestellt, die euch durch die Städte Oben, Dazwischen und Darunter jagen könnten. Beachte, dass die Paladine und die Silence Operatives besonders tödlich sind und du sie sparsam einsetzen solltest. Ob die Spieler einen Kampf mit einem (oder mehreren) von ihnen wollen, lassen sie dich wissen, indem sie die entsprechenden Beats wählen."
   ]]}
 ]}),
 bb({id:"umrechnung", t:"Spire-Figuren im Heart: schnell und schmutzig", p:20, b:[
  {t:"grid", n:2, x:[[
    "Okay. Wir haben euch gehört. Ihr wolltet eine direkte Übersetzungsanleitung von *Spire* nach *Heart*, Fähigkeit für Fähigkeit, und das hier ist sie nicht. Wenn ihr unbedingt *Spire*-Figuren im *Heart* spielen wollt, empfehlen wir Folgendes:",
    {t:"ul", x:[
     "Ändere jedes **W3** in **W4**.",
     "Ändere **Silver**-Stress in **Supplies**-Stress.",
     "Ändere **Shadow**- und **Reputation**-Stress in **Fortune**-Stress.",
     "Rüstung bringt zusätzliche **Blood**-Slots, keine eigene Resistenz-Kategorie.",
     "Teile die Zahl der zusätzlichen Slots in der Resistenz einer Figur durch drei, um ihren Protection-Wert in dieser Resistenz zu bestimmen.",
     "Refreshes funktionieren nicht mehr."]}
   ],[
    {t:"ul", x:[
     "Bonds werden entfernt, außer sie liegen in Derelictus oder im Vermissian.",
     "Ersetze den Skill **Deceive** durch **Compel**; **Fight** wird zu **Kill**; **Fix** wird zu **Mend**; **Investigate** wird zu **Discern**; **Pursue** wird zu **Hunt** oder **Evade** (wähle eins); **Resist** wird zu **Endure**. **Steal** entfällt.",
     "Entferne alle Domains außer **Occult**, **Religion** und **Technology**.",
     "Erhöhe die Würfelgröße allen zugefügten und/oder erlittenen Stresses um eine Stufe.",
     "Finde heraus, ob Fähigkeiten im Heart funktionieren oder nicht. Die Fähigkeit PUBCRAWLER des Knight etwa funktioniert in der Stadt darunter nicht, weil dort unten nicht getrunken wurde. Das musst du nach Gefühl entscheiden."]},
    "Ist dieses System fair? Erzeugt es brauchbare Figuren? Vielleicht! Aber im Notfall ist es eine nützliche Anleitung."
   ]]}
 ]})
]});

/* ---------- Minister (Kapitel „The Ministry Beneath“, B&B S. 21–26) ---------- */
function hooks(L){ return {t:"ul", x:L.map(function(x){ return "*" + x + "*"; })}; }
C.subs.push({id:"minister", t:"Minister", secs:[
 bb({id:"ueberblick", t:"Das Ministerium darunter", p:21, b:[
  {t:"grid", n:2, x:[[
    "Wenn dich die Themen von *Spire* in *Heart* reizen, du aber nicht den unangenehmen Weg gehen willst, verbrannt und/oder gebrochen zu werden, gibt es Alternativen.",
    "Die aktiven Operationen ab dieser Seite liefern SL und Spielern Inspiration, um Handlungsstränge rund um das Ministerium zu entwerfen. Die zusätzlichen Aufstiege (B&B S. 23) stehen jeder Figur mit passendem Hintergrund zur Verfügung und stehen für die Vorteile und Zaubereien eines Ministers (oder Ex-Ministers). Die Berufung **Minister** (B&B S. 24) – eine abgewandelte Version der Berufung **Forced** aus dem Grundbuch – gibt dir die Möglichkeit, für das Ministerium zu arbeiten und dabei auf halbwegs freundschaftlichem Fuß zu bleiben."
   ],[
    "Wenn du eine Figur mit Verbindungen zu Our Hidden Mistress spielen willst, bietet die Anpassung der Klasse Heretic viele Optionen für religiöse Magie, die sich so umdeuten lässt, dass sie zu Our Hidden Mistress statt zum Mond darunter passt. Ebenso können die Fähigkeiten des Deadwalker mit etwas Arbeit umgedeutet werden, sodass sie sich auf schattenhafte Mystik statt auf geisterhaftes Ernten konzentrieren.",
    "Wie beim Kernmaterial in *Burned and Broken* wird angenommen, dass alle Figuren mit Verbindung zum Ministerium Drow sind – aber wenn du lieber etwas anderes spielen willst, sprich es einfach mit deiner SL und deiner Gruppe durch."
   ]]}
 ]}),
 bb({id:"operationen", t:"Aktive Operationen", p:21, b:[
  {t:"grid", n:2, x:[[
    "Der Hauptfokus des Ministeriums bleibt die Stadt oben; sein oberstes Ziel ist schließlich der Sturz des Spiralrats. Aber eine so weitreichende und mächtige Organisation wäre töricht, die Möglichkeiten in der Stadt darunter zu ignorieren. Daher unterhält sie eine Handvoll Agenten und Mittel im Herzen.",
    "Jede der folgenden Missionen könnte die Grundlage für Beats einer Figur mit der Berufung Minister oder Forced bilden, und das Ministerium ist sich nicht zu schade, Teams erfahrener (oder entbehrlicher) Delver anzuheuern, um zu bekommen, was es braucht.",
    {t:"h", x:"Zum Schweigen bringen und Zurückholen"},
    "Es gibt immer Minister, die abtrünnig werden (oder vom Ministerium verbrannt werden) und ins Herz fliehen, um die Aufmerksamkeit ihrer früheren Herren abzuschütteln. Das Ministerium lässt die meisten ziehen, da das Herz von sich aus gefährlich genug ist.",
    "Für Agenten mit kritischen Informationen oder lebenswichtigen Fähigkeiten entsendet es jedoch Teams, um sie zu beseitigen – oder um sie zurückzuholen und durch umfassende magische Gehirnwäsche wieder in die liebenden Arme der Göttin zu führen.",
    "Folgende gefallene Minister sind derzeit im Herzen auf freiem Fuß:",
    hooks(["Vench, eine Carrion-Priest mit Rudeln aus Geistern, Hyänen und Geisterhyänen unter ihrem Befehl. Sie deckte eine Verschwörung auf, einen wohlgesinnten Aelfir zu finanzieren, damit er in den Spiralrat kommt, und begann aus Rache ihren eigenen Krieg gegen das Ministerium.","Fert Nostarium, ein Gelehrter und Okkultist, derzeit unter dem Schutz des Vermissian Collective. Er verrät seinen Beschützern Geheimnisse des Ministeriums zu den Grundlagen der Sliver-Herstellung (Strata, S. XX) und ersetzt langsam seine versagende organische Form durch ein Silikat-Upgrade.","Kennis Deval, ein Vigilant aus Perch, der das herausgetrennte Herz eines unsterblichen Exarchen (eines hochrangigen Mitglieds des Ministeriums) gestohlen hat und es als Druckmittel einsetzt."])
   ],[
    {t:"h", x:"Vermissian-Erkundung", p:22, bk:BK, bl:BL},
    "Das Ministerium unterhält einen auf- und abflackernden Waffenstillstand mit den Gelehrten des Vermissian. Gelegentlich, wenn ihre Interessen übereinstimmen, tun sie sich zusammen, um schwierige Ziele zu erreichen.",
    "In den Tiefen des Herzens ist der Zugang zum Vermissian oft leichter als in der Stadt oben. Mehr als ein Team von Ministern hat Muskelkraft oder Informationen für eine Gruppe aus Knights und Sages geliefert, die unterwegs zu einem neuen oder lange verlorenen Abschnitt des Netzwerks war. Mehr Details zur Landschaft des Vermissian findest du im Heart-Quellenbuch *Vermissian Black Ops*; zusätzlich einige Gerüchte über Orte:",
    hooks(["Mehrere „alternative“ Vermissians: eines mit Druckwasser; eines, in dem die Züge fahren, aber von territorialen Banden beherrscht werden; eines, das nur aus Geistern und Pracht besteht; und so weiter.","[GESCHWÄRZT], ein Ort, der mit gewöhnlichen Sinnen nicht wahrnehmbar ist und den niemand verlässlich benennen kann.","Chronokondensator 4, der letzte verbliebene Chronokondensator, der die Zeit von zu früh ankommenden Zügen sparte und sie zur Unterstützung von Zügen verschob, die zu spät kamen."]),
    {t:"h", x:"Entsorgung"},
    "Der Maw (*Heart*, S. 160) ist einer der wenigen Orte in Destera, an denen sich das Unzerstörbare verlässlich zerstören lässt. Es ist eine ausgedörrte Leere, in der die Urkräfte der Entropie alles und jeden zerreißen, was die zentrale Kammer betritt. Das Ministerium würde derzeit gern entsorgen:",
    hooks(["Den Bösartigen, einen silbergeätzten Eidolon (Dämonenbeschwörungsgerät), der die Aufmerksamkeit der Vierten Schwester auf sich zieht und denen in seiner Nähe den Atem raubt.","Ein Fläschchen Mondlicht, das während des Roten Mondes gesammelt wurde – ein Vorgang, der normalerweise verboten ist –, und jeden, der es erblickt, in blinde Wut treibt.","Eine zauberverhexte Blood-Witch, die nicht sterben kann und die Welt um sich unbeabsichtigt zu einem albtraumhaften, blutigen Durcheinander verzerrt."])
   ]]},
  {t:"grid", n:2, x:[[
    {t:"h", x:"Vorab-Attentat"},
    "Die Slumbering Depths (*Heart*, S. 173) sind ein ungewöhnlicher Himmel. Es ist ein Vor-Leben statt eines Nach-Lebens: Die Aelfir, die hier träumen, sehen es als Buße, die sie im Austausch für ein schönes und aufregendes Leben im Reich der Sterblichen ertragen müssen. Theoretisch ist es möglich, Aelfir vor ihrer Geburt zu töten, indem man in die Slumbering Depths einbricht.",
    "Prominente Scryatrices, die mit dem Ministerium verbündet sind, führen eine Liste künftiger Aelfir, die im kommenden Jahrhundert gegen sie handeln werden. Dein Magister drückt dir eine Harpune aus ebenholzschwarzem Knochen in die Hand und die Zeichnung eines noch ungeborenen Hochelfen, angefertigt von einem blinden Zeloten: Es ist Zeit für die Jagd. Ähnliche metaphysische Ausflüge sind:",
    hooks(["Brich in den Moon Garden ein, um den Geist eines prominenten Exarchen zu holen, nachdem er von einem Verräter getötet wurde.","Da blutdürstige Zellen der Crimson Vigil (*Spire*, S. 161) ihre Kraft aus einem bestimmten Red Saint (*Heart*, S. 195) ziehen, ist der Weg klar: Tritt die Hintertür ihres Himmels ein und töte sie, bevor der nächste rote Mond eine neue Welle des Mordens entfacht.","Infiltriere die zeitschleifenhafte, unwirkliche Traumlandschaft eines Aelfir, der vor einem Jahrhundert in Ungnade fiel, und täusche ihn dazu, Geheimnisse preiszugeben, die den Spiralrat untergraben."])
   ],[
    {t:"h", x:"Töte dein zukünftiges Ich", p:23, bk:BK, bl:BL},
    "So seltsam Spire ist, das Herz ist seltsamer. Minister, die an gewöhnliche Attentate und kultische Spionage gewöhnt sind, finden sich womöglich bei ganz ungewöhnlichen Dingen im Namen von Our Hidden Mistress wieder – etwa dabei, eine Version ihrer selbst aus der Zukunft, einer alternativen Zeitlinie oder beides zu töten.",
    "Die Metaphysik des Herzens ist wahrlich merkwürdig. Auch wenn man nicht immer begreift, wie ein älteres Ich (voller leuchtender Sliver-Implantate und betend zu einem Gott, von dem man ziemlich sicher ist, dass er nicht existiert) in dein Zimmer gelangt ist, ist es einfach genug, es zu erstechen und die Leiche in das nächste Aasschwein-Loch zu kippen.",
    {t:"h", x:"Splitter der Göttin"},
    "Mehrere bedeutende Exarchen glauben, dass, als die Verehrung von Our Hidden Mistress in Spire verboten wurde, eine Sekte gläubiger Zeloten Bruchstücke ihres zerschmetterten Tempels nahm und damit floh. Die meisten gingen in die Home Nations, einige suchten Zuflucht in den wandernden Wüsten von Aliquam, und eine Handvoll stieg ins Herz hinab, um den einfallenden Aelfir zu entkommen.",
    "So wie die Wirklichkeit im Herzen beschaffen ist, haben die dorthin gebrachten Bruchstücke nun eine eigentümliche Resonanz. Sie sind zu Splittern der gefallenen Göttin selbst geworden und könnten dem Ministerium von großem Nutzen sein. Bei allen Intrigen, Hinterhältigkeiten und Doppelspielen im Ministerium darunter ist das Gesamtziel jedes Magisters – ob er es weiß oder nicht – diese verlorenen Splitter der Göttin aufzuspüren und in die Stadt oben zurückzubringen."
   ]]}
 ]}),
 bb({id:"aufstiege", t:"Zusätzliche Aufstiege: Gläubige von Our Hidden Mistress", p:23, b:[
  {t:"p", x:"Alle diese stehen als kleine Aufstiege einer Figur zur Verfügung, die Geschichte mit dem Ministerium von Our Hidden Mistress hat."},
  {t:"karten", n:4, x:[
   {t:"Enden", b:["*Du bist Ihre blutige linke Hand.* Erhalte den Skill **Kill**. Wenn du versuchst, das Leben von jemandem zu beenden, der sich gegen das Ministerium stellt oder auf der Seite des Spiralrats steht, erhöht sich die Größe der Stresswürfel, die du verursachst, um eine Stufe."]},
   {t:"Opfergaben", b:["*Sie hungert.* Erhalte den Skill **Sneak**. Einmal pro Sitzung erhältst du einen Segen von ihr, wenn du eine gefesselte oder kampfunfähige Person Our Hidden Mistress opferst (ein Vorgang, der mindestens eine halbe Stunde dauert und wahrscheinlich irgendeine rituelle Ausrüstung erfordert). Der Segen hat die Form flüssigen Schattens, den du in einer Phiole sammeln kannst. Salbst du dich damit, würfelst du bis zum Ende der Situation bei **Sneak**-Handlungen mit Meisterschaft. Alternativ funktioniert die Phiole als Ressource (**W8, Religion, Taboo**) oder, geworfen, als Waffe (**Kill W6, Spread, Debilitating, One-Shot**)."]},
   {t:"Flüstern", b:["*Mit heiligem Spireblack an die Kehlen gelegt, bindest du eure Stimmen an die der Göttin.* Würfle **Discern+Religion**, um diesen Zauber auf dich und bis zu sechs andere willige Ziele in Armreichweite zu wirken. Bei Erfolg kann jedes Mitglied deiner Gruppe für die nächsten Stunden alles hören, was die anderen sagen, als flüsterten sie es ihm ins Ohr, egal wie weit entfernt."]},
   {t:"Schatten", b:["*Du betest um heilige Schatten, die die Augen derer blenden, die sich gegen dich stellen.* Würfle **Sneak+Religion**, um diesen Zauber auf ein Ziel zu wirken, das du sehen kannst. Bei Erfolg kann es dich bis zum Ende der Situation nicht sehen, es sei denn, du kommst in seine Armreichweite, machst ein lautes Geräusch oder lenkst sonst Aufmerksamkeit auf dich."]}
  ]}
 ]}),
 bb({id:"berufung", t:"Berufung: Minister", p:24, b:[
  {t:"p", k:1, x:"Du hast dein Leben dem Dienst einer verbotenen Göttin geweiht – Our Hidden Mistress – und geschworen, die grausamen Aelfir-Herrscher von Spire zu stürzen. Deine Mission hat dich in die Stadt darunter geführt, auf der Suche nach einem Splitter der Macht der Göttin."},
  {t:"grid", n:3, x:[
   [{t:"h", x:"Kernfähigkeit"}, "**ANMUT.** *Du bist von der Göttin selbst gesegnet und bewegst dich mit unnatürlicher Geschmeidigkeit.* Einmal pro Sitzung kannst du, wenn du einen Würfelpool für eine Handlung wirfst, einige oder alle geworfenen Würfel neu werfen. Das darfst du auch tun, nachdem Würfel wegen der Schwierigkeit entfernt wurden.",
    {t:"kasten", b:[{t:"p", x:"**Beantworte beim Erschaffen deiner Figur diese vier Fragen:**"},{t:"ul", x:["Was hast du im Dienst des Ministeriums getan, das du bereust?","Wie nimmt das Ministerium mit neuen Informationen Kontakt zu dir auf?","Was ist dein aktuelles Ziel in der Stadt darunter?","Du hast schon einmal in deiner Funktion als Minister mit einer der anderen Spielerfiguren zusammengearbeitet. War sie Teil der Verschwörung, ein Mittel, ein Rivale oder etwas anderes?"]}]}],
   [{t:"h", x:"Kleine Beats", p:25, bk:BK, bl:BL}, {t:"ul", x:["Erhalte Befehle vom Ministerium.","Befolge Befehle des Ministeriums, obwohl sie dich in Gefahr bringen.","Rebelliere gegen deine Befehle, obwohl dich das in Gefahr bringt.","Schließe eine Freundschaft oder romantische Beziehung mit einem NSC.","Gerate in Schwierigkeiten, weil jemand deine wahre Loyalität entdeckt.","Verrate jemanden um deiner Sache willen.","Erleide leichten **Fortune**-Fallout.","Tu etwas Gefährliches, um deine wahre Loyalität zu verbergen.","Berufe dich auf den Namen des Ministeriums, um zu bekommen, was du willst.","Entdecke Informationen, die auf den Ort einer Reliquie von Our Hidden Mistress hindeuten.","Finde ein Refugium, das deine Herren nicht erreichen können.","Rette einen NSC aus Schwierigkeiten, die du verursacht hast.","Erhalte eine zeitkritische Mission, die dich von deinen anderen Zielen wegführt.","Erhalte Hilfe von jemandem Verwerflichem, der im Dienst des Ministeriums steht.","Schicke eine verlangte Ressource (W8 oder höher) in die Stadt oben, statt sie selbst zu nutzen.","Führe für deine Herren eine scheinbar unzusammenhängende Handlung aus, die düstere Folgen hat.","Vertusche ein Verbrechen, das jemand anderes im Auftrag deiner Herren begangen hat.","Behaupte, etwas im Auftrag des Ministeriums zu tun, obwohl es in Wahrheit deinen eigenen Zwecken dient.","Verwickle einen NSC in die Pläne des Ministeriums.","Erweise jemandem einen Gefallen, um Druckmittel gegen ihn zu erlangen."]}],
   [{t:"h", x:"Große Beats"}, {t:"ul", x:["Rekrutiere einen NSC für das Ministerium mit grauenerregenden Einweihungsriten.","Opfere der Göttin etwas oder jemand Wichtiges und erhalte eine Vision von ihr.","Begehe im Auftrag des Ministeriums eine wahrhaft verwerfliche Tat.","Erleide die Folgen davon, dass du dich weigerst, eine wichtige Tat im Auftrag des Ministeriums auszuführen.","Erleide schweren **Fortune**-Fallout.","Ein wichtiger oder geliebter NSC stirbt, nachdem du ihn in deine Intrigen hineingezogen hast.","Finde eine mächtige Reliquie von Our Hidden Mistress.","Zwinge einen wichtigen oder geliebten NSC, eine Aufgabe zu übernehmen, die er nicht will.","Hilf einer Person, die du hasst und die mit dem Ministerium verbunden ist.","Erfülle ein großes Ziel für das Ministerium – etwas, das mindestens zwei Sitzungen dauert."]},
    {t:"h", x:"Zenith-Beats"}, {t:"ul", x:["Entdecke einen Splitter der Macht von Our Hidden Mistress und bringe ihn in die Oberwelt.","Entdecke einen Splitter der Macht von Our Hidden Mistress und verschlinge ihn, wodurch sich deine eigene Macht verzehnfacht."]}]
  ]}
 ]})
]});
})();
