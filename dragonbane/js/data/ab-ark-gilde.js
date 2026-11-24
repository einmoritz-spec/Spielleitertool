/* Die Gilde der Wellen (Arkand S. 54–57) – deutsche Fassung. §…§ = Fertigkeit in Kapitälchen. Modell: plan/dragonbane/ABENTEUER_PLAN.md §2 */
window.DB_AB = window.DB_AB || {};
DB_AB["ark-gilde"] = {
 id:"ark-gilde", mul:1, t:"Die Gilde der Wellen", band:"ark-hafen", buch:"db_ark", p:54, img:"abenteuer/ark-gilde-titel", kurz:"5 Orte",
 lage:[
  "Seit den Tagen des legendären Entenpiraten Schwarzschnabel ist die Aufgabe, Arkands Seewege zu bewachen, für die Bewohner der Stadt von höchster Bedeutung. Als Avador Northing das heutige Arkand gründete, rief er auch die Gilde der Wellen ins Leben – eine Organisation, die diese Verantwortung inzwischen geerbt hat.",
  {h:"Die Lage", p:54},
  "Es ist viele Jahre her, dass Avador Northing die Gilde der Wellen gründete, doch die Leidenschaft, Arkand vor den Gefahren des Meeres zu schützen und dafür zu sorgen, dass die Kassen der Stadt durch Zölle gefüllt bleiben, brennt weiter in den Generationen der Wellenmeister. Heute wird die Gilde vom alten Seekapitän Brigador geführt, der seine Arbeit sehr ernst nimmt.",
  "Die Gilde der Wellen besteht aus zwei unterschiedlichen Teilen: dem Gildenhaus selbst und dem überaus beliebten Fischmarkt.",
  "Im Gildenhaus versammeln sich die Seeleute der Stadt, um Geschichten auszutauschen, mit ihren Taten zu prahlen oder sich über Ungerechtigkeiten zu beschweren. Zwei Themen beherrschen derzeit die Gespräche: die rücksichtslosen Piratenüberfälle der Blutschnäbel und der unverschämte neue Preis, den der Bund der Ertrunkenen Götter für seinen sogenannten Segen der Wellen verlangt.",
  "Auf dem Fischmarkt ist der Wettbewerb unter den Fischern wie immer hart, und Anatalia und ihre Wellenmaiden tun fast alles, um ihre Gewässer zu verteidigen.",
  "Der Hafen wird regelmäßig von den Hafenwachen der Gilde bestreift, die eingehende Fracht kontrollieren und dafür sorgen, dass jeder Schiffsführer das Hafenamt (#3) aufsucht und seine Zölle bezahlt.",
  {karte:{h:"Die Gilde der Wellen", b:[
   "Die Gilde der Wellen ist eine von Arkands sechs Gilden. Sie ist dafür zuständig, den Hafen sicher zu halten, dafür zu sorgen, dass Besucher ihre Zölle und Liegegebühren bezahlen, und dafür, dass keine unerwünschten Kreaturen unter den Docks heraufkriechen. Alle Mitglieder der Gilde sind verpflichtet, einige Tage im Monat als Hafenwachen zu dienen, sodass es nicht ungewöhnlich ist, echte Legenden auf Arkands Wasserwegen patrouillieren zu sehen. Zu den namhaften Mitgliedern zählen:",
   {ul:["Wellenmeister **Brigador**","Kapitän **Dorian**","Fischerkönigin **Anatalia**","Tauchmeister **Dirthild**","Seelotse **Valion**","Erster Maat **Dominus Skaup**"]}
  ]}},
  {karte:{h:"Abenteuer-Ideen", p:55, b:[{ul:[
   "**Die Geschenke der Breitschnabels müssen heim!** Plathyra Breitschnabel (S. 47) ist überzeugt, dass die Geschenke des Hynchos Breitschnabel, die derzeit in der Halle der Wellen (#4) aufbewahrt werden, rechtmäßig dem Handelshaus Weiße Feder gehören, und beauftragt die Spielercharaktere, sie zurückzuholen.",
   "**Seeschlangenjagd:** Eine Seeschlange terrorisiert die Fischgründe vor Arkand, versenkt Boote und fordert Dutzende Leben. Nun stellt die Gilde der Wellen eine Besatzung zusammen, die aufbrechen und das Untier ein für alle Mal erschlagen soll. Die Charaktere sind eingeladen, sich der Jagd anzuschließen. Kehren sie siegreich zurück, brechen in der Halle der Wellen Feiern aus. Werden die Charaktere zu Helden des Tages?",
   "**Seeleute in Not!** Bei der Gilde der Wellen meldet man Unfälle und üble Machenschaften auf See. Wer das Gerücht über die Gilde (S. 24) gehört hat, weiß das. Die Zufallsbegegnung Marima und Ediona (S. 22) oder ein Treffen mit Domidia Treibholz könnte die Charaktere dazu bringen, ihre Geschichten Brigador zu Ohren zu bringen."
  ]}]}}
 ],
 bereiche:[
  {id:"erdgeschoss", t:"Erdgeschoss", karte:{img:"abenteuer/ark-gilde-karte-erdgeschoss", p:55}, orte:[
   {n:"1", t:"Fassade", p:54, pin:[87.6,50.7], wesen:[],
    vl:"Das weiß getünchte Gebäude blickt auf den längsten Pier der Stadt. Ein Großteil seiner Fassade ist mit abblätternden Wandbildern von Seeschlangen, Kraken, Krabben, seltsamen Fischen und anderen Meeresgeschöpfen bedeckt. Über der letzten Tür an der Längsseite des Gebäudes hängt ein salzgebleichtes Schild, das ein Schiff auf dem Kamm einer schäumenden Welle zeigt. Endlose Reihen von Fischernetzen wurden am Kai zum Trocknen ausgelegt.",
    st:[
     {k:"Boote der Hafenwache", x:"Einige Boote der Hafenwache liegen stets am Kai vertäut und dienen dazu, die Hafengewässer zu bestreifen."},
     {k:"Hafenwachen", x:"Hier sind Tag und Nacht W3 Hafenwachen postiert: Sie betreten oder verlassen die Gilde der Wellen, steigen in ihre Boote oder aus ihnen heraus oder beobachten einfach den Hafen, die Schiffe und die Piers."},
     {k:"Wiegewagen", x:"Ein oder zwei Wagen mit großen Waagen stehen meist vor dem Gildenhaus. Die Hafenwachen wiegen damit eingehende Fracht und bestimmen die zu zahlenden Zölle."},
     {k:"Westen", x:"Große, verwitterte, rot gestrichene Doppeltür zum Fischmarkt (#2)."},
     {k:"Westen", x:"Stabile Tür zum Hafenamt (#3)."}
    ]},
   {n:"2", t:"Fischmarkt", p:54, pin:[70.2,59.1], wesen:["ark-gilde-anatalia","ark-gilde-dirthild"],
    vl:"Der Gestank von Blut, Salz, Seetang und rohem Fisch schlägt euch wie eine Flutwelle entgegen, als ihr zwischen den bunten Ständen hindurchschlendert. Das Knacken von Knochen unter schweren Messern und das dumpfe Aufschlagen toter Tiere auf dicken Holzblöcken mischt sich mit den Rufen der Fischhändler. „Frischer Fisch!“ hallt es aus allen Richtungen in der riesigen Halle, deren Decke so hoch ist, dass nicht einmal ein Riese sich bücken müsste. „Frischer Fisch, gleich hier!“",
    st:[
     {k:"Der Markt", x:"Der Markt öffnet im Morgengrauen, wenn die Taucher und Fischer mit ihrem Fang zurückkehren, und bleibt geöffnet, bis alles verkauft ist. Gastwirte, Köche und hungrige Einheimische drängen sich früh herein und kämpfen um die besten Waren. Der Wettbewerb ist hart, und es ist nicht ungewöhnlich, dass unter Kunden wie Händlern Schlägereien ausbrechen."},
     {k:"Anatalias Stand (A)", x:"Der größte Stand des Marktes gehört der Fischerkönigin Anatalia. Ihre Preise sind hoch, aber ebenso die Qualität."},
     {k:"Dirthilds Taucherstand (D)", x:"Die feinste Auswahl an Muscheln und anderen Weichtieren der Stadt, von Hand vom Meeresgrund geerntet."},
     {k:"Tarfets Trawler (F)", x:"Hier werden Schalentiere aller Größen verkauft. Die Spezialität sind Dämonenkrabben, die in Stahlkäfigen klicken und klappern."},
     {k:"Osten, Süden, Westen", x:"Verwitterte Doppeltüren zur Fassade (#1)."},
     {k:"Norden", x:"Treppe hinauf zu den Türen des Hafenamts (#3) und der Halle der Wellen (#4)."}
    ]},
   {n:"3", t:"Hafenamt", p:56, pin:[72.9,21.3], wesen:["ark-gilde-adriatika"],
    vl:"Ein großes Fischernetz, eine Ruderpinne, drei Harpunen und ein halbes Dutzend Laternen schmücken die Nordwand. Vor Wandregalen aus geborgenen Schiffswracks steht ein Schreibtisch, dessen Platte am Kiel eines umgedrehten Ruderboots festgeschraubt ist. Eine Treppe aus ergrautem Treibholz führt ein halbes Stockwerk hinauf zu einer niedrigen Tür.",
    st:[
     {k:"Akten", x:"Hier werden alle offiziellen Dokumente zum Hafen und zur Gildenverwaltung aufbewahrt, darunter Aufzeichnungen über Zölle und Liegegebühren."},
     {k:"Adriatika", x:"Ist das Amt geöffnet, ist Adriatika immer hier. Sie ist höflich, aber trocken, und wenn man sie fragt, spricht sie von ihrer Dankbarkeit gegenüber Brigador, der ihr das Leben gerettet hat (womit Brigador selbst gar nicht aufhören kann zu prahlen). Ein gelungener §Täuschen§-Wurf zeigt Risse in ihrer Geschichte und gibt Anlass zu der Vermutung, dass nicht alles so ist, wie es scheint. Weitere Einzelheiten stehen in Adriatikas NSC-Eintrag auf S. 56."},
     {k:"Tumult", x:"Wer im Hafenamt Ärger macht, bekommt in zwei Runden Besuch von so vielen Hafenwachen, wie es Spielercharaktere gibt. Auch Brigador oder Anatalia und ihre Wellenmaiden könnten auftauchen, denn sie sind Adriatika sehr zugetan."},
     {k:"Geldkassette", r:1, x:"Unter dem Schreibtisch versteckt steht die Geldkassette, in der Adriatika die Zölle und Liegegebühren des Tages aufbewahrt. Wenn die Hafeneinfahrt für den Tag geschlossen wird, eskortieren vier Hafenwachen die Kassette zur Zitadelle der Zerbrochenen Flügel, wo sie geleert wird. An besonders einträglichen Tagen begleitet Adriatika (oder sogar Brigador) sie."},
     {k:"Osten", x:"Tür zur Fassade (#1)."},
     {k:"Westen", x:"Treppe hinauf zu einer verschlossenen Tür zum Fischmarkt (#2)."}
    ]}
  ]},
  {id:"obergeschoss", t:"Obergeschoss", karte:{img:"abenteuer/ark-gilde-karte-obergeschoss", p:57}, orte:[
   {n:"4", t:"Die Halle der Wellen", p:56, pin:[44.3,23.0], wesen:[],
    vl:"Die Wände sind mit dramatischen Szenen aus den großen Ozeanen der Welt bemalt – turmhohe Wellen, die über Schiffe brechen, auf denen stolze Seeleute in der Takelage kämpfen; riesige Kraken, die ihre gierigen Tentakel um hilflose Schiffe schlingen; lachende Meerjungfrauen, die Seeleute zu sich locken. Im Zentrum des Ganzen prangt ein Wappen mit einem Anker und drei Dreizacken. In einem großen, eisenvergitterten Schaukasten, den ein breiter Entenschnabel über gekreuzten Federn ziert, seht ihr eine Reihe seltsamer Gegenstände. Hohe Fenster blicken auf den Fischmarkt unten.",
    st:[
     {k:"Zusammenkünfte und Treffen", x:"Die Halle der Wellen ist der natürliche Treffpunkt der Gildenmitglieder. Die Leute versammeln sich hier, bevor sie ihren Tag beginnen, und nachdem sie ihre Schicht als patrouillierende Hafenwachen beendet haben. Die Halle bleibt nach Schließung des Hafens noch eine Stunde geöffnet; in dieser Zeit sind stets W6+2 Gildenmitglieder anwesend. Als SL kannst du entscheiden, ob die Spielercharaktere einem bestimmten Mitglied begegnen."},
     {k:"Das Wandbild", x:"Mit einem gelungenen §Mythen & Legenden§-Wurf erkennen die Charaktere womöglich Hynchos Breitschnabel, den Piraten Schwarzschnabel, Anatalia, Elrita Blutauge und natürlich Brigador selbst (falls sie ihm begegnet sind). Es ist Tradition, dass namhafte Gildenmitglieder in das Wandbild gemalt werden."},
     {k:"Hynchos’ Geschenke", x:"Der große eisenvergitterte Schaukasten enthält Geschenke, die Hynchos Breitschnabel einst der Gilde der Wellen stiftete. Nach jeder erfolgreichen Reise überreichte er seinen seefahrenden Freunden zum Dank für ihre Unterstützung Gegenstände aus fernen Gestaden. Plathyra Breitschnabel will nichts lieber, als diese Geschenke zurückzuholen – besonders einen vergoldeten, wellenförmigen Dolch, dessen Griff wie ein Schlangenkopf geschnitzt ist."},
     {k:"Wappenröcke der Hafenwache", x:"An Haken an der Wand gegenüber der Kammer des Wellenmeisters (#5) hängen die Wappenröcke der Hafenwachen mit dem Emblem der Gilde: ein Anker über drei Dreizacken. Alle Gildenmitglieder tragen im Wachdienst einen Wappenrock."},
     {k:"Hinab", x:"Treppe zum Fischmarkt (#2)."},
     {k:"Osten", x:"Tür zur Kammer des Wellenmeisters (#5), verschlossen, solange Brigador nicht anwesend ist."}
    ]},
   {n:"5", t:"Die Kammer des Wellenmeisters", p:57, pin:[77.0,12.8], wesen:["ark-gilde-brigador"],
    vl:"Als Erstes fällt der Blick aus den großen Fenstern der Ostwand auf den Hafen und seine Einfahrt. Man hat freie Sicht bis hinüber zum Dung, und jenseits der Stadtmauern erhebt sich eine gewaltige Felsformation aus dem Meer. Hinter einem Schreibtisch, der offenbar aus Schiffswrackplanken zusammengezimmert wurde, steht ein Stuhl, der mit geschuppter Haut bezogen ist.",
    st:[
     {k:"Der Stuhl", x:"Ein gelungener §Tierkunde§-Wurf verrät, dass die geschuppte Haut von einer Seeschlange stammt."},
     {k:"Brigador", x:"Ist Brigador in seinem Büro, grübelt er die meiste Zeit darüber nach, wie er die Piratenkönigin der Blutschnäbel fassen kann, und prüft außerdem, ob neue Bewerber würdig sind, der Gilde beizutreten. Seine Beurteilung hängt heutzutage fast vollständig davon ab, wie entschlossen sie wirken, der Piraterie ein Ende zu setzen. Ein gelungener §Täuschen§- oder §Überzeugen§-Wurf genügt, um ihn für sich zu gewinnen; dann lädt er sie gern in die Gilde ein. Wirken sie vertrauenswürdig, beginnt er vielleicht sogar, seine Pläne mit ihnen zu teilen …"},
     {k:"Westen", x:"Tür zur Halle der Wellen (#4). Verschlossen, solange Brigador nicht hier ist."}
    ]}
  ]}
 ],
 figuren:{
  "ark-gilde-anatalia":{typ:"nsc", t:"Anatalia", p:55, tp:19,
   werte:[["Bewegung","12"],["Schadensbonus GEW","+W4"],["TP","19"],["WP","14"]],
   zl:[["Rüstung","–"],["Fertigkeiten","Akrobatik 14, Wahrnehmung 14, Feilschen 14, Ausweichen 14, Jagen & Fischen 17, Seefahrt 16, Schwimmen 16"],["Talente","Pfeile abwehren, Flinke Füße, Blitzschnell, Robust × 3"],["Waffen","Dreizack (Fertigkeitswert 15, Schaden 2W8), Dolch (Fertigkeitswert 14, Schaden W8)"]],
   text:["Anatalia ist die ungekrönte Königin der Fischerfolk der Stadt – eine Stellung, die sie nicht ohne Streit erlangt hat. Ihr Schiff, der *Wellenbrecher*, wird von wettergegerbten Frauen bemannt, den sogenannten Wellenmaiden. Wer sie nicht mag, nennt sie die „Fischhexe“, aber niemals dort, wo sie oder ihre Wellenmaiden es hören könnten. An Land sieht man sie oft im Tod in der Tiefe oder in der Zitadelle der Zerbrochenen Flügel, wo ihr Fang an der Tafel des Souveräns serviert wird. Ihr Marktstand ist doppelt so breit wie der nächstgrößere und wird von bunten Markisen beschattet, die ihr Emblem tragen: einen Dreizack, der eine Meerjungfrau aufspießt."]},
  "ark-gilde-dirthild":{typ:"nsc", t:"Dirthild", p:56, tp:14,
   werte:[["Bewegung","10"],["Schadensbonus STÄ","+W4"],["TP","14"]],
   zl:[["Rüstung","–"],["Fertigkeiten","Feilschen 12, Tierkunde 10, Handwerk 14, Jagen & Fischen 14, Schwimmen 18"],["Waffen","Dolch (Fertigkeitswert 14, Schaden W8)"],["Fähigkeiten","Dirthilds Lungenvolumen erlaubt es ihm, drei Runden unter Wasser zu bleiben, ohne KON-Würfe machen zu müssen. Danach würfelt er unter Wasser KON mit einem Vorteil."]],
   text:["Dirthild ist ein Zwerg aus dem Kummergebirge mit einer Brust wie eine Handelskogge, einer Nase so breit wie eine Landungsplanke und einem Lächeln, so selten wie ein schwarzes Einhorn. Er führt ein Team zwergischer Taucher, die ihre Tage damit verbringen, Tiefseemuscheln zu ernten – nicht nur wegen ihres köstlichen Geschmacks, sondern wegen der kostbaren Perlen, die manchmal in ihnen verborgen sind. Doch für den richtigen Preis lassen sich Dirthild und seine Mannschaft auch zu anderen Aufgaben überreden. Er hat kürzlich erkannt, dass der Tempel des Endlosen Meeres gewaltige Reichtümer bergen müsste, jetzt, da die Wellenanbeter so gierig geworden sind. Außerdem hat er genug von Anatalia und überlegt ernsthaft, ihre Boote zu versenken."]},
  "ark-gilde-adriatika":{typ:"nsc", t:"Adriatika", p:56, tp:10,
   werte:[["Bewegung","12"],["Schadensbonus STÄ/GEW","+W4"],["TP","10"],["WP","12"]],
   zl:[["Rüstung","Beschlagenes Leder (2)"],["Fertigkeiten","Feilschen 15, Täuschen 15, Fremdsprachen 12, Seefahrt 16"],["Talente","Adlerauge, Furchtlos, Intuition, Quartiermeister, Seebeine"],["Waffen","Handaxt (Fertigkeitswert 13, Schaden 2W6)"]],
   text:["Adriatika war viele Jahre lang Brigadors Erste Maatin, doch nachdem sie ihren rechten Arm und ihr linkes Bein an die Seeschlange verloren hatte, die nun Brigadors Kopf ziert, musste sie an Land gehen. Brigador ist stolz darauf, ihr das Leben gerettet zu haben, während sie insgeheim seine Unbesonnenheit für das Geschehene verantwortlich macht. Als Brigador zum Wellenmeister gewählt wurde, machte er sie zu seiner Buchhalterin – ein Posten, den sie wie ein Greif bewacht.","Adriatika verkauft Informationen über Schiffe mit wertvoller Fracht an einen geheimen Gönner (Plathyra Breitschnabel). Immer wenn es etwas Meldenswertes gibt, senkt sie die Amtsflagge früher als sonst und macht einen Spaziergang zum Dung, wo sie auf dem Weg zu einer langen Nacht im Witzlosen Einhorn eine Nachricht unter der Tür eines verlassenen Hauses hindurchschiebt. Später holt ein verkleideter Matrose der Weißen Feder die Nachricht ab."]},
  "ark-gilde-brigador":{typ:"nsc", t:"Brigador", p:57, tp:29,
   werte:[["Bewegung","12"],["Schadensbonus STÄ","+W6"],["Schadensbonus GEW","+W4"],["TP","29"],["WP","15"]],
   zl:[["Rüstung","Seeschlangenschuppen (4)"],["Fertigkeiten","Tierkunde 10, Raufen 16, Jagen & Fischen 14, Fremdsprachen 12, Mythen & Legenden 13, Seefahrt 15"],["Talente","Pfeile abwehren, Drachentöter, Monsterjäger, Robust × 6, Seebeine, Veteran"],["Waffen","Langschwert (Fertigkeitswert 16, Schaden 2W10)"]],
   text:["Brigador ist ein lauter, herzlicher, aber brutal ehrlicher Seemann. Er sagt immer, was er denkt, ob es jemand hören will oder nicht. Nimmt jemand Anstoß, brüllt er vor Lachen und klopft ihm so kräftig auf den Rücken, dass ihm die Luft wegbleibt. Er trägt einen Helm aus dem Schädel einer Seeschlange und führt einen gezackten Säbel. Seit über einem Jahrzehnt dient er als Meister der Gilde der Wellen und ist dafür verantwortlich, dass Arkands Zölle eingetrieben werden und seine Gewässer sicher sind – eine Aufgabe, für die er außerordentlich brennt. Trotz seines freundlichen Wesens hat er keinerlei Nachsicht mit Schmugglern oder Dieben und hasst den Gedanken, dass jemand die Stadt um auch nur ein einziges Kupferstück betrügt. Sein größter Ehrgeiz ist es, die Anführerin der Blutschnäbel zu fassen und vor Gericht zu bringen."]}
 }
};
