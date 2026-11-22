/* Regeln im Detail (Grundbuch S. 80–89): Fallout – übersetzt */
window.HT_NACH = window.HT_NACH || {};
(function(){
var R = window.HT_NACH.regeln = window.HT_NACH.regeln || {t:"Regeln im Detail", p:71, subs:[]};
var A = "Anhaltend", S = "Sofort";
/* Fallout-Karte: Name bleibt englisch, Text deutsch, Art = Sofort/Anhaltend */
function F(n, x, a, z){ return {t:n, b:[x].concat(a ? [{t:"p", k:1, x:"[" + a + "]"}] : []).concat(z || [])}; }
function K(arr){ return {t:"karten", n:3, x:arr}; }
function H(x){ return {t:"h", x:x}; }
var spell = {t:"kasten", h:"Aetheric Scourge", b:["Markiere W6 Stress, um diesen Zauber zu wirken. Ein Ziel in der Nähe nimmt W6 Stress, wenn rohe Magie aus dir in es hineinkocht und seine Haut und Haare verbrennt."]};
var beast = {t:"kasten", h:"Ravening Beast", b:["**Schwierigkeit:** Riskant · **Resistance:** 10 · **Schutz:** 2 · **Ressource:** Obsidianherz, definitiv kein Leuchtfeuer, um noch mehr anzulocken (W12, Occult) · **Ausrüstung:** Fraktale Zähne und Blackstone-Klauen (W8)"]};
R.subs.push({id:"fallout", t:"Fallout", p:80, secs:[
 {id:"arten", t:"Arten von Fallout", p:80, b:[
  {t:"p", x:"Sammelst du genug Stress an, nimmst du wahrscheinlich Fallout. Fallout steht für klar umrissene negative Auswirkungen auf deine Figur: gebrochene Knochen, leere Taschen, geistverzerrende Panik, überzählige Augen und so weiter."},
  {t:"p", x:"Fallout teilt sich in zwei große Kategorien: sofortig und anhaltend."},
  {t:"grid", n:3, x:[
   [{t:"kasten", h:"Sofort (Immediate)", b:["Sofortiger Fallout löst meist eine Szene oder ein Ereignis aus, in dem die betroffene Spielerfigur im Nachteil ist – sie wird angegriffen, verirrt sich oder jemand ist wütend und konfrontiert sie. Ist die Szene aufgelöst, wird der Fallout entfernt. Man kann der Situation nicht ausweichen oder sie umgehen: Es steht jetzt schlecht und muss angegangen werden, auch wenn die Spielleitung das Ereignis zu einem dramaturgisch passenden Zeitpunkt auslösen kann."]}],
   [{t:"kasten", h:"Anhaltend (Ongoing)", b:["Anhaltender Fallout „klebt“ an der Figur, bis er entfernt wird, und lässt bestimmte Handlungen eher misslingen. Meist gibt es dazu keine eigene Szene oder kein Ereignis, und es gibt in der Regel einen Weg, das Problem abzumildern. Eine Figur mit gebrochenem Bein kann etwa die anderen von einem guten Aussichtspunkt aus mit einem Gewehr decken, sodass ihre mangelnde Beweglichkeit kein Problem ist. Anhaltenden Fallout kannst du auf mehrere Arten entfernen; Details dazu auf S. 77."]}],
   [{t:"kasten", h:"Beides", b:["Manch (seltener) Fallout ist **sowohl** sofortig *als auch* anhaltend – er löst ein Ereignis aus, und die nachwirkenden Folgen verfolgen die Figur weiter, bis sie entfernt werden."]}]
  ]}
 ]},
 {id:"leicht", t:"Leichter Fallout", p:80, b:[
  {t:"p", x:"Leichter Fallout (Minor) bringt kurzfristige Effekte mit geringer Wirkung."},
  H("Blood"),
  K([
   F("Battered","Deine dominante Hand ist verletzt; du kannst sie verbinden und die Blutung stillen, aber vorerst ist sie nur begrenzt nutzbar. Jede offensive Handlung im Kampf wird Riskant; Aufgaben, die Feinmotorik erfordern, sind ausgeschlossen.",A),
   F("Bleeding","Markiere am Ende jeder Situation, in der du diesen Fallout hast, W4 Stress bei **Blood**.",A),
   F("Disarmed","Du lässt alles fallen und verlierst, was du in der Hand hältst, und bist wehrlos; im Kampf fügst du W4 Stress zu, bis du eine Waffe beschaffst. Bist du an einem gefährlichen Ort, verlierst du den Gegenstand vielleicht für immer.",S),
   F("Furious","Du bist verletzt, reizbar und siehst überall Kränkungen. Du kannst einer anderen Figur nicht helfen, indem du einen Würfel zu ihrem Wurf hinzufügst.",A),
   F("Limping","Du bist verlangsamt. Wird deine Gruppe angegriffen, greifen sie dich zuerst an. Ist unklar, wer zuletzt ankommt, bist du es. Alle Würfe mit schneller oder verstohlener Bewegung werden Riskant.",A),
   F("Ringing Head","Dir schwimmt der Kopf, und du schmeckst Blut im Mund. Deine nächste Handlung ist Gefährlich, die danach Riskant, dann entfernst du diesen Fallout, wenn dein Kopf klar wird.",S),
   F("Shattered","(auch: Supplies) Deine Rüstung ist nutzlos. Du kannst **Blood**-Schutz nicht nutzen.",A),
   F("Spitting Teeth","Jede Handlung, bei der du sprechen oder respektabel wirken musst, ist Riskant.",A),
   F("Tired","Du bist müde; du triffst schlechte Entscheidungen und fauchst deine Freunde an. Du kannst keine zusätzlichen Würfel durch Skills erhalten.",A),
   F("Winded","Wenn du mit Nahkampfwaffen angreifst, verringere den zugefügten Stress um eine Würfelgröße.",A)]),
  H("Mind"),
  K([
   F("Clouded","Dein Geist beginnt sich zum Selbstschutz abzuschalten; du kannst nicht klar denken, und Empfindungen sind gedämpft. Du kannst keine zusätzlichen Würfel durch Domains erhalten.",A),
   F("Creepy","Du reagierst auf seltsame Weise, die deine Freunde verstört – sag uns, wie. Jede freundliche Figur, die es sieht, markiert W4 Stress bei **Mind**.",S),
   F("Collateral Magic","Dein panischer Geist zerbricht für einen Moment und formt sich in einem arkanen Muster neu; hier unten wirken die alten Magien von Blut und Knochen besser als an der Oberfläche. Du wirkst sofort **AETHERIC SCOURGE** auf einen Verbündeten in der Nähe, markierst dafür aber keinen Stress. Dieser Fallout kann aufgewertet werden (siehe **AETHERIC RESONANCE** unten).",S),
   F("Fascination","Du wirst von einem seltsamen Thema besessen – meist dem, was den Fallout ausgelöst hat. Du musst versuchen, mehr darüber zu lernen, wenn möglich aus erster Hand. Wann immer du versuchst, mehr über deine seltsame Faszination zu erfahren, würfle mit Mastery. Hast du die Gelegenheit dazu und lehnst ab, markiere W4 Stress bei **Mind**.",A),
   F("Figment","Du verlierst den Überblick, was real ist und was nicht. Die Spielleitung wählt einen leichten Fallout einer anderen Resistenz und sagt dir, dass du ihn hast. Bis dieser Fallout entfernt wird, bist du überzeugt, darunter zu leiden (egal, was andere sagen), und erleidest alle passenden Effekte. (SL: Du entscheidest, ob du den Spieler wissen lässt, dass es eine Täuschung ist.)",A),
   F("Shaken","Du gerätst in Panik und fällst auf primitive Impulse zurück. Die Spielleitung wählt eines: Fight (das Problem angreifen, um es zu zerstören), Flight (dem Problem mit allen Mitteln entkommen) oder Freeze (nicht handeln und sich in Gefahr bringen). Am Ende der Situation entfernst du diesen Fallout.",S),
   F("Take the Edge Off","Du bekommst deinen Kopf nicht klar, bis du etwas getrunken hast (oder etwas Stärkeres). Bis du eine Landmarke mit Zugang zu Rauschmitteln erreichst und dich besinnungslos machst, würfle zwei Würfel, wenn du Stress bei **Mind** markierst, und nimm den höheren. Kann zu **ADDICT** aufgewertet werden.",A),
   F("Vulnerable","Du fühlst dich klein, erschüttert und verängstigt. Du kannst **Mind**-Schutz nicht nutzen.",A),
   F("Weird","Du tust etwas Beunruhigendes, das normale Leute stört – zwanghaftes Verhalten, vor dich hin singen, einer seltsamen Zwangshandlung zur falschen Zeit nachgehen. Bei nächster Gelegenheit kann die Spielleitung erklären, dass deine Seltsamkeit einen nützlichen NSC gegen dich (und wohl auch deine Verbündeten) aufbringt.","Sofort, Anhaltend")]),
  H("Echo"),
  K([
   F("Buboes","Deine Haut wirft Blasen und blubbert. Wenn du **Blood**-Stress nimmst, nimm zusätzlich W4, wenn die Beulen aufplatzen.",A),
   F("Conduit","Deine besten Bemühungen, die unwirklichen Energien des Herzens fernzuhalten, sind vergeblich: Dein Körper ist ein Schmelztiegel der Fremdheit. Du kannst **Echo**-Schutz nicht nutzen.",A),
   F("Deja Vu","Du bemerkst kleine Elemente deines früheren Lebens im Herzen, als läse es deine Gedanken und passte sich deinen Erwartungen an; die Spielleitung sagt dir, was geschieht.","Sofort, Anhaltend"),
   F("Exodus","Du würgst eine Handvoll sich windender Kreaturen hoch: bleiche fette Motten, durchscheinende Maden, Spinnen mit der falschen Zahl Beine, pochende Parasiten und so weiter. Wer das sieht und nicht darauf vorbereitet ist, markiert W4 Stress bei **Mind**.",S),
   F("Follower","Jemand oder etwas hält dich für sehr wichtig: auserwählt vom Herzen und es wert, ihm zu folgen. Ein seltsam aussehendes, aber im Wesentlichen harmloses Wesen folgt dir in Abstand; es nähert sich dir nicht, wühlt aber begierig in deinem Abfall oder versucht, jedem zu schaden, der dir im Weg zu stehen scheint.",A),
   F("Glitch","Du verschwindest und tauchst erst wieder auf, nachdem jeder andere Spieler mindestens einmal gehandelt hat.",S),
   F("Hex-Eye","Dein Blick verschwimmt, während du andere Welten wahrnimmst, die sich über deine eigene schichten. Jede Handlung, die genaues Abschätzen von Entfernungen erfordert (springen, schießen, einen Korridor entlangrennen), wird Riskant. Einmal pro Sitzung siehst du etwas Nützliches – frag die Spielleitung, was.",A),
   F("The Ravening Call","Dieser Fallout hat keine Wirkung, bleibt aber an deiner Figur und äußert sich gelegentlich als gebrochenes, abgehacktes Heulen im Hinterkopf. Wird dieser Fallout aufgewertet, siehe **THE RAVENING BEAST** unten.",A),
   F("Strange Appetite","Du gelüstest nach ungewöhnlichen – tabuisierten – Dingen statt nach gutem ehrlichem Fleisch und Trank: rostigem Metall, lebenden Kreaturen, Ungeziefer, Auswurf, getragener Kleidung, geliebten Haustieren usw. Wenn du das nächste Mal einen Haunt besuchst und versuchst, **Blood**- oder **Mind**-Stress zu regenerieren, musst du diese Seltsamkeit suchen und ihr frönen; sonst kannst du dich nicht erholen. Hast du sie ausgelebt, entfernst du diesen Fallout. Kann zu **DARK CRAVINGS** aufgewertet werden.",A),
   F("Siren Song","Du bekommst den Gedanken an einen bestimmten Ort oder eine Person nicht aus dem Kopf (die Spielleitung wählt eine nahe Landmarke oder einen NSC). Tust du etwas anderes, als darauf zuzugehen oder Hindernisse auf deinem Weg zu beseitigen, wird die Handlung Riskant. Erreichst du es, verfliegt das Gefühl.",A)]),
  spell,
  H("Fortune"),
  K([
   F("Broken","Ein wichtiger Gegenstand ist beschädigt. Du kannst ihn nicht nutzen, bis du Zeit und Ressourcen für die Reparatur aufwendest.",A),
   F("Collateral","Wenn du das nächste Mal Stress markierst, markiert ein Verbündeter in der Nähe dieselbe Menge; danach entfernst du diesen Fallout.",S),
   F("Foreboding","Etwas Schlimmes steht bevor. SL, deute ein unheilvolles künftiges Ereignis an – Rauch in der Ferne, das Beben vor einem Puls, die hektische Musik des Carnival. Dieser Fallout kann zu **CRISIS** aufgewertet werden (siehe unten).",A),
   F("The Hard Way","Du führst die Gruppe in Gefahr. Das nächste Hindernis, das die Gruppe zu überwinden versucht, ist Gefährlich; mit einem guten Plan können sie es auf Riskant oder sogar Standard senken.",S),
   F("In Trouble","Du verärgerst eine wichtige Person in diesem oder einem nahen Haven.","Sofort, Anhaltend"),
   F("Long Way Round","Du brauchst länger als erwartet, um dein Ziel zu erreichen. Bei einem Delve füge der Resistance des Delves W6 hinzu. Suchst du in einer Landmarke nach jemandem oder etwas, kommst du gerade spät genug an, um in Schwierigkeiten zu geraten.",S),
   F("Separated","Du glaubst etwas zu hören, aber als du dich zu deinen Verbündeten umdrehst, sind sie weg. Du musst sie aufspüren oder hoffen, dass sie dich finden.",S),
   F("Unlucky","Es wird schlimmer werden, bevor es besser wird. Du kannst **Fortune**-Schutz nicht nutzen.",A),
   F("Word of Mouth","Die Kunde deiner Missetaten verbreitet sich. Wohin du als Nächstes gehst: Jemand weiß, dass du kommst, und will dich ausnutzen. Die Spielleitung zeigt, wie sich die Kunde verbreitet.",S)]),
  H("Supplies"),
  K([
   F("Broken","Ein wichtiger Gegenstand ist beschädigt. Du kannst ihn nicht nutzen, bis du Zeit und Ressourcen für die Reparatur aufwendest.",A),
   F("Damaged","Eine Ressource, die du trägst, ist irgendwie defekt – verbeult, zerrissen, zerkratzt oder gesprungen. Verringere ihre Würfelgröße um 1 Stufe.",S),
   F("Darkness","Deine Vorräte an Spireblack-Öl gehen zur Neige. Alle **Delve**- und **Discern**-Würfe werden Riskant. Ein anderes Gruppenmitglied kann diesen Fallout entfernen, indem es W6 Stress bei **Supplies** markiert.",A),
   F("Debtor","In der nächsten Sitzung oder später in dieser fordert ein NSC, der dir Geld geliehen hat, einen Gefallen ein.",S),
   F("Empty","Du hast nur noch die letzten Reste Essen, das letzte Kratzen Spireblack. Du kannst **Supplies**-Schutz nicht nutzen.",A),
   F("Half Rations","Dein Essen wird knapp. Wenn du Stress entfernst, würfle zwei Würfel und nimm den niedrigeren. Ein anderes Gruppenmitglied kann diesen Fallout entfernen, indem es W6 Stress bei **Supplies** markiert.",A),
   F("Out of Ammo","Dir geht die Munition für eine Fernkampf- oder Kraftwaffe aus, und sie ist nicht mehr nutzbar. Hat ein anderes Gruppenmitglied eine ähnliche Waffe, kann es diesen Fallout entfernen, indem es W6 Stress bei seinen eigenen **Supplies** markiert.",A),
   F("Used Up","Deine Bestände an wichtigen Dingen sind aufgebraucht, etwas ist verdorben, oder jemand hat etwas Lebenswichtiges aus deiner Tasche gestohlen. Du kannst keine deiner Heilgegenstände nutzen.",A)])
 ]},
 {id:"schwer", t:"Schwerer Fallout", p:83, b:[
  {t:"p", x:"Schwerer Fallout (Major) steht für ernste Probleme deiner Figur. Er hat langfristige oder gravierende Folgen und kann deine Geschichte beenden, wenn man ihn nicht in den Griff bekommt."},
  H("Blood"),
  K([
   F("Arterial Wound","Wie BLEEDING, aber du markierst am Ende jeder Situation W6 Stress.",A),
   F("Blinded","Du kannst nicht sehen oder so wenig, dass du genauso gut blind sein könntest. Es kann dauerhaft sein. Jede Aufgabe, die Sehen erfordert (also die meisten), wird Gefährlich.",A),
   F("Broken Arm","Dein Arm bricht unter der Belastung, und splittriger Knochen ragt durch die Haut. Du kannst den Arm nicht nutzen, bis er verheilt ist, was manche Aufgaben Riskant oder Gefährlich und andere unmöglich macht. Dieser Fallout kann von **BATTERED** aufgewertet oder zu ihm herabgestuft werden.",A),
   F("Broken Leg","Deine Beinknochen splittern und brechen. Jede Handlung mit dem Bein (klettern, sich schneller als kriechend bewegen) scheitert automatisch. Dieser Fallout kann von **LIMPING** aufgewertet oder zu ihm herabgestuft werden.",A),
   F("Critical Injury","Du wirst an einer lebenswichtigen Stelle getroffen. Die Spielleitung wählt einen Skill, auf den du Zugriff hast, und du hast keinen Zugriff mehr auf diesen Skill. Ein Treffer am Schwertarm könnte etwa **Kill** entfernen, eine Augenverletzung **Discern**, gerissene Sehnen in den Fingern **Mend**.",A),
   F("Downed","Du kannst dich nicht aus eigener Kraft bewegen und klammerst dich kaum noch ans Bewusstsein. Andere können dich bewegen, aber ohne medizinische Versorgung kommst du nirgendwohin. Kann zu **DYING** aufgewertet werden.",A),
   F("Exhausted","Du kannst nicht mehr; wenn du dich noch härter antreibst, wirst du ohnmächtig. Hör jetzt auf oder überrede jemanden, dich den Rest des Weges zu tragen. Oder mach noch eine Handlung und falle bewusstlos um, sobald der Wurf aufgelöst ist.","Sofort, Anhaltend")]),
  H("Mind"),
  K([
   F("Aetheric Resonance","Wie der leichte Fallout COLLATERAL MAGIC, aber du lernst **AETHERIC SCOURGE** dauerhaft und kannst es nach Belieben wirken.",A),
   F("Addict","Du erkennst, dass du von Drogen abhängig geworden bist, um stabil zu bleiben. Bist du high (oder betrunken oder Ähnliches), nimmst du **Mind**-Stress normal, aber alle Aufgaben, die längere Konzentration oder Feinmotorik erfordern, werden Riskant. Bist du nicht berauscht und erleidest Stress bei **Mind**, würfle zweimal und nimm den höheren Würfel. Es dauert ein paar Minuten, high zu werden, und ein paar Stunden, nüchtern zu werden.",A),
   F("Delusion","Etwas, das du für wahr hältst, ist in Wirklichkeit falsch. Während du kurz hinausgehst oder in der Downtime, legen alle anderen Spieler mit der Spielleitung fest, worüber du dich täuschst. Zum Beispiel: Du bist kein Waise und hast eine Familie in High Rise; es gibt keine Gruppe namens Hounds, und deine Uniform bedeutet nichts; usw. Wenn du das nächste Mal auf das Thema triffst, verhalten sich Realität (und die anderen Figuren) entsprechend, was dich verwirrt und erschüttert.",null),
   F("Despair","Dein Geist rast bei den Folgen dessen, was du gesehen hast; dein Leben davor wirkt unwirklich und fern. Die Spielleitung wählt eine Domain, auf die du Zugriff hast, und du hast keinen Zugriff mehr auf diese Domain.",A),
   F("Memory Holes","Du hast Dinge getan, an die du dich nicht richtig erinnern kannst. Während du kurz hinausgehst oder in der Downtime, legen alle anderen Spieler mit der Spielleitung fest, was du getan und aus deinem Gedächtnis verdrängt hast. Das sind meist ziemlich schlimme Dinge. Sie können bis zu ein Jahr Spielzeit zurückliegen oder unmittelbar nach dem Erleiden des Fallouts geschehen sein. Deine Figur hat keinerlei Erinnerung an die Ereignisse, aber alle anderen Beteiligten wissen, was geschah.",S),
   F("Phantasm","Wie FIGMENT (siehe oben), aber die Spielleitung wählt stattdessen einen schweren Fallout.",A),
   F("Scarred","(Siehe SHAKEN oben.) Dein Geist bricht und formt sich in urtümlichen, instinktiven Mustern neu. Das funktioniert wie **SHAKEN**. Zusätzlich kann die Spielleitung dich jedes Mal, wenn du künftig der Quelle des Fallouts begegnest, einen **Endure**-Wurf machen lassen, sonst erleidest du W8 Stress bei **Mind**.",A),
   F("Unsettling","(Siehe SHAKEN oben.) Du verhältst dich seltsam und bereitest deinen Gefährten Unbehagen. Das funktioniert wie **SHAKEN**, und jede freundliche Figur, die dich dabei sieht, nimmt W6 **Mind**-Stress.",S)]),
  H("Echo"),
  K([
   F("Blooded","Du trägst ein Mal des Herzens an deinem Körper: verdrehte, zerbrechliche Knochengeweihe, Fingernägel, die sich in fraktal scharfen Mustern krümmen, biolumineszente Adern, zusätzliche Gelenke in den Gliedern und so weiter. Deine schwache sterbliche Gestalt ist nicht dafür gemacht, eine solche Leinwand zu sein; wenn du Stress bei **Blood** markierst, würfle zwei Würfel und nimm den höheren.",A),
   F("Cult","Deine Taten zeichnen dich als wahren Sprössling des Herzens, und seltsame Leute und Kreaturen folgen dir und preisen deine (echten oder eingebildeten) Ruhmestaten. Das bringt nur Ärger, und jeder Versuch, sie auszunutzen, geht schief. In einen Haven zu kommen wird mit so vielen Leuten schwierig, also hoffe besser, dass einige unterwegs sterben.",A),
   F("Dark Cravings","Wie STRANGE APPETITE, aber der Effekt ist dauerhaft, bis dieser Fallout entfernt wird.",A),
   F("Eyes","Deine Augen werden zu großen schwarzen Kugeln, oder du findest weitere Augen auf deinem Körper erblühen, die wie ein Spinnennest in deinem Brustbein wachsen. Du siehst im Dunkeln perfekt, aber Licht blendet und schmerzt dich. Die Spielleitung kann einen **Endure**-Wurf verlangen, wenn du einen hell erleuchteten Bereich betrittst, und du nimmst bei Fehlschlag oder Teilerfolg Stress.",A),
   F("The Life Not Lived","Wertet DEJA VU auf. Du triffst jemanden aus deiner Vergangenheit, der eigentlich tot sein müsste.",S),
   F("Meat","Alle sind für dich nur Fleisch: stumpf, wertlos, seelenlos. Immer wenn du in eine Situation gerätst, in der du längere Zeit mit einem gewöhnlichen NSC sprechen musst, kann die Spielleitung einen **Endure**-Wurf verlangen; bei Fehlschlag nimm W6 Stress. Bist du mit einem gewöhnlichen NSC intim, nimm bei Fehlschlag W10 Stress.",A),
   F("Mirage","Die nächste Landmarke, die du erreichst, ist eine vom Herzen geschaffene Nachbildung, die dir geben soll, was du willst. Sie wirkt echt, aber je mehr du erkundest, desto deutlicher wird, dass alles – die Straßen, die Bücher, die Leute – falsch ist. Es ist eine kunstvolle Kopie aus Fleisch, Knochen und Blut. Nach allem Anschein besteht sie seit Hunderten von Jahren. Sobald du erkennst, dass die Landmarke falsch ist, entfernst du diesen Fallout.",S),
   F("The Ravening Beast","Aus einem Schattenfleck tritt das Ravening Beast hervor, das sich in deinem Geist versteckt hat. Es versucht, andere zu zerfleischen, aber sein Hauptantrieb ist, dich völlig zu verschlingen. Das Tier abzuwehren entfernt diesen Fallout nicht, aber er hat keine weitere Wirkung, es sei denn, du wertest ihn auf (siehe **THE RAVENING** unten).",S),
   F("Reconfigured Physiology","Deine Organe und Knochen ergeben keinen Sinn mehr. Du kannst keinen Stress mehr von **Blood** entfernen und **Blood**-Fallout nicht mehr an Haunts oder mit Medizinkoffern entfernen. Es zeigt sich äußerlich: ungewöhnliche Wucherungen unter der Haut, Worte, die als Blutergüsse erscheinen, schwarzes Blut und so weiter.",A),
   F("Vanished","Die nächste Landmarke, die du erreichst, ist nicht da; du findest stattdessen etwas anderes. Vermutlich ist die Landmarke irgendwo, sofern das Herz sie nicht ganz verschluckt hat.",S)]),
  beast,
  H("Fortune"),
  K([
   F("Crisis","Wie FOREBODING oben, aber nun tritt die Gefahr tatsächlich ein.",S),
   F("Destroyed","Bist du gerade auf einem Delve mit hergestellter Verbindung, entferne die Verbindung und beschreibe, was geschah. Bist du in einer Landmarke, zerstörst du etwas von Wert und entfernst einen Haunt der Landmarke (falls sie welche hat). Sag uns, wie du es getan hast (absichtlich oder aus Versehen).",S),
   F("Exiled","Du bist aus dem Haven verbannt, in dem du gerade bist, oder aus einem nahen – sag uns, was geschah. Deine Verbündeten unterliegen nicht denselben Beschränkungen, werden aber mit Misstrauen behandelt.","Sofort, Anhaltend"),
   F("Grievance","Eine Gruppe im Herzen – ein Kult, eine Kirche, die Hounds, Mitglieder eines bestimmten Havens, Bestien usw. – hat dich zum Feind erklärt. Sie arbeiten nach Kräften gegen dich, bis du deinen Namen reinwäschst oder dich aus dem Problem herausmordest.","Sofort, Anhaltend"),
   F("Hell for Weather","Deine Vorhersagen waren falsch, und du führst die Gruppe in ein aktiv gefährliches Gebiet; oder die Gegend verändert sich und wird feindselig; oder, wenn es der Ort zulässt, braut sich ein Sturm zusammen. Bis ihr eine Landmarke erreicht, werden alle Handlungen der Gruppe Riskant. Dann entfernst du diesen Fallout.","Sofort, Anhaltend"),
   F("Lost Map","Deine Karte geht verloren oder wird gestohlen. Bis du sie zurückbekommst oder ersetzt, kannst du keine Verbindungen nutzen – jede Reise gilt als unerforschtes Gebiet.",A),
   F("Lost Property","Du hast einen Gegenstand verlegt; die Spielleitung wählt, welchen. Du könntest Zeit mit Suchen verbringen, musst aber zurückgehen – und vielleicht hat ihn schon jemand mitgenommen.",S),
   F("No Way Out","Du führst die Gruppe in eine Sackgasse, eine Falle oder einen Hinterhalt. Entferne diesen Fallout, sobald ihr lebend herauskommt.",S),
   F("Reputation","Ein anderer Delver hat Wind von deinen Erfolgen (oder deinen Schwächen) bekommen und kommt dich holen. Ein Jäger, der deinen Kopf will und dich um deine hart erarbeiteten Vorräte erleichtern möchte, legt dir einen Hinterhalt. Entferne diesen Fallout, sobald der Kampf vorbei ist.",S),
   F("The Road Less Travelled","Du wählst den falschen Weg. Die nächste Landmarke, die du erreichst, ist nicht die erwartete – es ist eine ganz andere, und wahrscheinlich eine, die du meiden wolltest.",S),
   F("Unwilling Leader","Du bist plötzlich für eine ungewollte Gruppe verantwortlich – sie haben Probleme und erwarten, dass du sie löst. Vielleicht hast du ihren Boss getötet und bist jetzt der neue Boss; vielleicht appellieren sie an deine Güte und du gibst dummerweise nach; vielleicht ist die „Gruppe“ ein Waisenkind, um das du dich kümmern musst. Du kannst die Gruppe nutzen, um Dinge zu erreichen, aber ehrlich gesagt machen sie mehr Probleme, als sie lösen.","Sofort, Anhaltend")]),
  H("Supplies"),
  K([
   F("In the Dark","Deine Fackel erlischt und lässt sich nicht wieder entzünden. Wie **DARKNESS** oben, aber jemand oder etwas nutzt zudem die Gelegenheit, zuzuschlagen, während du verwundbar bist. Bis ihr Licht habt, ist der Kampf Gefährlich. Wenn sich die Lage beruhigt hat, kann ein anderes Gruppenmitglied diesen Fallout entfernen, indem es W6 Stress bei **Supplies** markiert.","Sofort, Anhaltend"),
   F("Lost Property","Du hast einen Gegenstand verlegt; die Spielleitung wählt, welchen. Du könntest Zeit mit Suchen verbringen, musst aber zurückgehen – und vielleicht hat ihn schon jemand mitgenommen.",S),
   F("No Rations","Du hast kein Essen mehr. Das funktioniert wie **HALF RATIONS**, und alle deine Handlungen werden wegen zitternder Hände und niedrigem Blutzucker Riskant. Ein anderes Gruppenmitglied kann diesen Fallout entfernen, indem es W8 Stress bei **Supplies** markiert.",A),
   F("Services Rendered","Du musstest deine Fähigkeiten an Dritte verkaufen, um deine Gläubiger zu bezahlen, und die Arbeit ist nicht angenehm. Klärt mit der Spielleitung, was deine Figur nicht tun will, aber bereit ist zu tun, um über die Runden zu kommen. Tust du es nicht, bekommst du Ärger; alternativ hast du es in der Vergangenheit getan und beschreibst es in einer Rückblende.",S),
   F("Sold","Du musst etwas Wertvolles verkaufen, um deine Gläubiger zu bezahlen. Klärt mit der Spielleitung, was du verkaufen musst. Hast du es seit deinem letzten Besuch in einem Haven nicht benutzt, hast du es rückwirkend verkauft.",S),
   F("Spoiled","Eine Ressource, die du trägst, wird zerstört: Sie verdirbt zur Nutzlosigkeit, entpuppt sich als Fälschung, zerbricht im Rucksack oder verstreut sich auf dem Boden. Entferne sie aus deinem Besitz.",S)])
 ]},
 {id:"kritisch", t:"Kritischer Fallout", p:87, b:[
  {t:"p", x:"Kritischer Fallout (Critical) bedeutet das Ende deiner Figur – sie stirbt vielleicht, vielleicht auch nicht, aber sie scheidet aus dem Spiel aus. Möglicherweise kehrt sie später als NSC zurück oder bis zur Unkenntlichkeit verändert, doch vorerst ist es Zeit für eine neue Figur. Kritischen Fallout – und damit das Ausscheiden deiner Figur – gibt es nur, wenn die Spielleitung zwei schwere Fallouts zu einem einzigen kritischen aufwertet."},
  H("Blood"),
  K([
   F("Bleeding Out","Du stirbst. Wähle: Tu etwas Nützliches, bevor du stirbst (und würfle mit Mastery, denn es ist das Letzte, was du je tun wirst), oder versuche verzweifelt, am Leben zu bleiben (und verliere dabei etwas Lebenswichtiges).",S),
   F("Chosen","Du wirst ohnmächtig und erwachst in einem Halbtraumzustand vor dem Herzen; du bist mit seiner Macht gesegnet. Du kehrst scheinbar unverletzt ins Leben zurück – ein Wunder! Doch binnen ein, zwei Sitzungen ist deine Verwandlung zu einem Angel abgeschlossen, einer Albtraumkreatur aus gleißender Unwirklichkeit und schimmernden Bändern nassen Fleisches. Du bist nicht tot, aber du kannst auch nicht sterben. Du scheidest als Spielerfigur aus.",A),
   F("Ghost","Du stirbst, aber dein Geist findet keine Ruhe. Dein Geist bleibt in der Stadt unter der Stadt, zornig über die Art seines Todes und die Freunde, die ihn seiner Meinung nach im Stich ließen – du suchst die Gruppe heim. Bis sie deinen Geist zur Ruhe betten (oder ihn mit Spezialwaffen ermorden), nehmen sie zu Beginn jeder Sitzung W6 **Mind**- oder **Echo**-Stress.",S)]),
  H("Echo"),
  K([
   F("Beast","Dein Körper verformt sich bis zur Unkenntlichkeit: Du wirst zu einem wandelbaren Haufen aus Fleisch und Knochen, schrecklich anzusehen. Du verschwindest im Herzen und tauchst nur noch als Legende auf, die in tiefen Schatten geflüstert wird; wer dich kannte, erzählt Geschichten von deinen Taten, um sich zu erinnern und andere zu warnen. In künftigen Sitzungen wirst du wieder gesehen: Die Spielleitung kann die Werte eines Greater Heartsblood Beast für dich verwenden.",S),
   F("Burst","Unfähig, die Energie (oder Parasiten oder dein anderes Ich) in dir länger zu halten, platzt dein Körper wie überreifes Obst. Mit Glück stirbst du; sonst wirst du unbegrenzt am Leben gehalten, verteilt über das Herz. Jeder in deiner Nähe markiert W6 Stress bei **Echo**.",null),
   F("Descent","Wenn du das nächste Mal in einer Landmarke bist, bebt der Boden, während das Herz dich und den Ort weiter nach unten zieht. Verschiebe die Landmarke und alle darin auf das nächste freie Feld der Tiefe darunter. Das ist katastrophal; die meisten überleben nicht. Das Herz verschluckt dich, und du scheidest als Spielerfigur aus.",S),
   F("Messiah","Ein Kult aus Sonderlingen und Monstern folgt dir nun lange genug – etwas muss nachgeben. Eines von beiden geschieht: Entweder glaubst du deinem eigenen Ruf und wirst Kultführer, lässt dein Delver-Leben hinter dir und versuchst, in einem neuen Haven im Herzen eine Existenz aufzubauen, oder der Kult entlarvt dich als falschen Propheten und versucht, dich auf angemessen brutale und öffentliche Weise zu töten.",S),
   F("Petrified","Dein Körper verkalkt, verknöchert oder kristallisiert, und du wirst zu einer perfekten Statue deiner selbst. Dein Körper ist unglaublich schadensresistent, daher lässt man die meisten, die zu Statuen werden, dort stehen, als Warnung für andere oder als ernstes Denkmal.",null),
   F("The Ravening","Dein Körper schlüpft mit einem nassen roten Geräusch, und ein Ravening Beast bricht aus dir hervor, hautlos und dampfend vor Hitze, hungrig nach Nahrung. Du stirbst; so vermehren sie sich. Sind deine überlebenden Freunde in der Nähe, siehe den Kasten (Ravening Beast, S. 85) für die Kampfwerte.",S),
   F("Stranded","Irgendwann ist deine Realität von der aller anderen abgewichen – und wenn du es bemerkst, ist es zu spät, etwas zu tun. Du bist in einem Riss, einer alternativen Zukunft oder einer Parasitendimension gestrandet – erzähle der Gruppe, wo du den Rest deines Lebens verbringst. Vielleicht kehrst du zurück, aber es ist zweifelhaft, dass dich jemand, den du kennst, erkennt (oder noch lebt), wenn du zurückkommst.",S)]),
  H("Mind"),
  K([
   F("Abandon","Nach den Schrecken, die das Herz über dich gebracht hat, bist du völlig von Sinnen. Du irrst in die Wildnis; falls du zurückkehrst, bist du nicht wiederzuerkennen. Wahrscheinlicher verhungerst du in einem Keller.",S),
   F("Break","Du verlierst völlig die Fassung. Jeder, der in der Nähe steht und dir etwas bedeutet, markiert W8 Stress bei **Mind**; jeder in der Nähe, den du nie wirklich mochtest, markiert W8 Stress bei **Blood**, während du ihn angreifst. Danach stirbst du (durch eigene Hand oder die deiner Verbündeten), oder dein Geist ist so zerrüttet, dass du als Spielerfigur ausscheidest.",S),
   F("Obsessed","Dein Ziel ist verdreht und grausam geworden; du hältst vor nichts inne, es zu erreichen. Deine Figur scheidet aus dem Spiel aus und wird zum Antagonisten, der gegen die überlebenden Spielerfiguren arbeitet, um seine bösen Wünsche zu erfüllen.","Sofort, Anhaltend")]),
  H("Fortune"),
  K([
   F("Fool's Gold","Du bekommst genau, was du willst – Geheimnisse, Buße, Freiheit, was auch immer. Es scheint zu schön, um wahr zu sein, und das passt, denn es ist nicht wahr: Du wurdest getäuscht oder verblendet und hast es doch nicht. Der Stress ist zu viel für dich, und dein einziger Wert ist nun, andere Delver zu warnen, Dingen nicht auf den ersten Blick zu glauben.",S),
   F("Heavy Hangs the Head","Trotz aller Bemühungen wirst du zum Anführer eines Havens gewählt; vielleicht verteidigst du ihn gegen einen Angriff, und die Leute glauben, du hast das Zeug, den Ort zu leiten. Hast du nicht. Du kannst eine nützliche Sache mit den Ressourcen des Havens tun, bevor du von deinen Rivalen ermordet wirst, der Haven überrannt wird oder herauskommt, dass du die ganze Zeit ein Sündenbock warst, und man dich im Stich lässt.",S),
   F("A Slow and Insidious Killer","Du handelst mit unverdientem Selbstvertrauen, und deine Hybris wird mit einem ironischen Tod belohnt.",S),
   F("Wrong Place","Du fängst versehentlich einen tödlichen Schlag ab, der für jemand anderen bestimmt war. Er bleibt unverletzt; du stirbst.",S)]),
  H("Supplies"),
  K([
   F("Defenceless","Dein Schild zerbirst; dein Schwert bricht, als ein Feind es trifft; oder deine Rüstungsriemen reißen und fallen ab. Unfähig, deine Feinde länger abzuwehren, wirst du durchbohrt oder zerfleischt und für tot liegen gelassen.",S),
   F("Pitch Black","Da du nichts sehen kannst, wirst du von Kreaturen der Finsternis fortgeschleift, um nie zurückzukehren.",S),
   F("Plummet","Deine Leine reißt; deine Haken halten nicht; deine Spitzhacke schert ab und stürzt in einen Abgrund. Was auch immer es ist, du stürzt in die Dunkelheit unter dir und kehrst nicht zurück.",S),
   F("Starvation","Du verhungerst oder verdurstest.",S)])
 ]}
]});
})();
