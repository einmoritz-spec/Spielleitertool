/* Regeln › Ausrüstung & Wealth (Grundbuch S. 151–166). Deutsche Übersetzung.
   Spielbegriffe englisch: Wealth, Coins, Crystals, Plates, Grains, Gadgets, Weapon Traits, Help, Hindrance, Partial Cover, Joker, Aces up your Sleeve. Item- und Waffennamen englisch wie im Buch. */
(function(){
var H = window.HH_TEXT = window.HH_TEXT || {};
function bild(n, w){ return {t: "bild", s: "grundbuch-" + n, w: w}; }
function K(h, b){ return {t: "box", h: h, b: b}; }
var A = [];

A.push({id: "wealth", t: "Wealth", p: 152, b: [
  "Bist du in einem der schönen Paläste von Astraviya aufgewachsen, umgeben von Dienern, Hauslehrern und Bediensteten, die dir jeden Wunsch erfüllen? Oder musstest du schnell erwachsen werden und schon arbeiten, sobald deine Beine dich trugen?",
  "Dein Wealth spielt in diesem Spiel eine wichtige Rolle. Erstens zeigt es deinen wirtschaftlichen Wohlstand. Er erlaubt dir, bestimmte Waren und Dienstleistungen zu nutzen, ohne einen einzigen Coin auszugeben. Ist man zum Beispiel *Middle Class*, hat man ein Dach über dem Kopf und kann sich in einer einfachen Gaststätte immer etwas zu essen leisten. Wer *Rich* ist, kann sich alles leisten und wohnt stets in den besten Hotels des House.",
  "Zweitens bestimmt dein Wealth die Anzahl deiner Coins. Coins sind eine äußerst wertvolle Ressource, mit der du Ausrüstung und Dienstleistungen kaufst, die über dein Wealth-Budget hinausgehen. Bist du zum Beispiel *Well-off*, kannst du dir immer ein Tintenfass oder eine Pfeife leisten, musst aber 3 Coins ausgeben, um elegante Kleidung zu kaufen.",
  "Drittens ist dein Wealth ein interessanter Anstoß für deine Geschichte. Angenommen, deine Gruppe ist zum großen Yule-Ball oder zu den Samhain-Feierlichkeiten im Palast des Kalifen eingeladen. Du brauchst dafür Galakleidung. Kannst du sie dir leisten? Entfernte Verwandte scheinen immer zu lange bei dir zu bleiben. Liegt das vielleicht daran, dass du *Rich* bist? Oder du frisst einem Anführer einer Verbrecherbande aus der Hand: Kommst du bis Monatsende nicht mit der Beute zurück, wird es ungemütlich!",
  "Es gibt vier Stufen von Wealth:",
  K("Poor", ["Du beginnst das Spiel mit 2 Coins. Du bist es gewohnt, von der Hand in den Mund zu leben und jede Gelegenheitsarbeit anzunehmen. Du gibst dein Bestes, deine Lage zu verbessern, doch deine Schulden werden immer länger, und du kannst nur von einem besseren Morgen träumen.",
   "Du kannst dir immer eine Übernachtung im Stall, eine bescheidene Mahlzeit oder ein Getränk in einer Kneipe in den Slums leisten."]),
  K("Middle Class", ["Du beginnst das Spiel mit 5 Coins. Du führst ein bescheidenes und anständiges Leben. Du kannst dir nur wenige Laster leisten, musst aber nie auf das verzichten, was du brauchst.",
   "Du kannst dir immer ein einfaches Zimmer, ein gutes Gasthaus oder eine Fahrt auf einem Karren oder in einer Karawane leisten."]),
  K("Well-off", ["Du beginnst das Spiel mit 10 Coins. Du bist ein Leben in großem Komfort gewohnt und musst nie über deine Ausgaben nachdenken. Die meisten sehen dich neidisch an, manche suchen deine Gunst oder bitten um kleine Darlehen.",
   "Du kannst dir immer ein Hotelzimmer für dich und deine Gäste, ein gutes Abendessen in einem feinen Restaurant oder eine Kutschfahrt leisten."]),
  K("Rich", ["Du beginnst das Spiel mit 15 Coins. Du bist die feinsten Dinge im Leben gewohnt und von den besten Gegenständen und Dienstleistungen umgeben. Nichts ist dir zu luxuriös oder zu teuer. Du hast viele Freunde, und alle wollen ein Stück von deinem Vermögen.",
   "Du kannst dir immer das schönste und geräumigste Zimmer in den besten Hotels des House reservieren oder den besten Tisch in Restaurants der feinen Gesellschaft. Was viele für übertriebenen Luxus halten, ist für dich nur eine tägliche Ausgabe."]),
  bild("s152-vi-wealth", 340)
]});

A.push({id: "start-wealth", t: "Startwealth & Veränderung", p: 153, b: [
  {t: "h", x: "Startwealth"},
  "Du beginnst das Spiel mit einer Anzahl Coins, die von deiner Wealth-Stufe bestimmt wird. Du kannst sie für deine Startausrüstung ausgeben. Wenn du alles hast, was du willst, notierst du übrig gebliebene Coins auf deinem Bogen.",
  "Du darfst die Startstufe frei wählen, die am besten zum Prolog deiner Figur und zu deinen Vorlieben passt. Ich empfehle den meisten Figuren deiner Gruppe, als *Middle Class* mit 5 Coins in den Taschen zu beginnen. Eine andere Stufe solltest du nur wählen, wenn sie für die Geschichte deiner Figur sehr wichtig oder nützlich ist.",
  bild("s153-vi-wealth", 320),
  K("Ein Littling besitzt nichts", ["Das House gehört dem Master. Alles im House gehört dem Master. Wir sind nur Gäste hier.", "*Benjamin „Big Ben“ Hearthworth*"]),
  K("Poor", ["Spielst du eine *Poor*-Figur in einer unsicheren finanziellen Lage oder in Armut, erhältst du nur 2 Coins. Als Ausgleich für den Pechstart erhältst du einen kostenlosen Joker. Du weißt offensichtlich, dich durchzuschlagen."]),
  K("Well-off", ["Spielst du eine *Well-off*-Figur aus einer wohlhabenden Familie oder jemanden, der es in seinem Beruf zu etwas gebracht hat, musst du eines deiner Aces up your Sleeve abgeben, mit denen du sonst beginnst. Du bist zu bequem gelebt.",
   "Dafür erhältst du ein gutes Einkommen und 10 Coins."]),
  K("Rich", ["Möchtest du eine *Rich*-Figur spielen, sprich zuerst mit den anderen Spielerinnen und Spielern und der Spielleitung. Gemeinsam entscheidet ihr, ob das für die Geschichte passt.",
   "Stimmen alle zu, gibst du beide Aces up your Sleeve ab, erhältst dafür aber sofort 15 Coins. Ein kleines Vermögen! Wirklich reiche Figuren sind äußerst selten. Die Ausnahme, nicht die Regel."]),
  {t: "h", x: "Wealth steigern und senken"},
  "Während deine Geschichte fortschreitet, findest du vielleicht unbezahlbare Kunstwerke oder unvorstellbare Schätze, du erhältst vielleicht sogar einen Adelstitel oder ein üppiges Erbe. Wann immer das passiert, entscheidet die Spielleitung, ob deine Wealth-Stufe steigt.",
  "Je höher deine Wealth-Stufe, desto schwerer ist sie zu steigern. Ein *Poor*-Figur erbt ein kleines Haus am Stadtrand der Hauptstadt und ein paar zerknitterte Geldscheine. Dieses bescheidene Vermögen reicht, um sie in die *Middle Class* zu bringen. Eine *Well-off*-Figur erbt dasselbe, behält ihre Stufe, muss sich aber mit dem lästigen Papierkram herumschlagen.",
  "Auf deinen Abenteuern kannst du auch einen wirtschaftlichen Absturz oder einen schweren Raub erleben, oder du verlierst alle Ersparnisse durch Glücksspiel oder schlechte Investitionen. Dann kann die Spielleitung deine Wealth-Stufe senken.",
  "Je reicher du bist, desto mehr hast du zu verlieren."
]});

A.push({id: "coins", t: "Coins & Crystals", p: 154, b: [
  {t: "h", x: "Coins"},
  "Das Geld, das du bei dir trägst oder leicht erreichen kannst, wird als Coins dargestellt. Der Klarheit halber sind Coins kein physisches Geld, sondern eine symbolische Summe, die das Erzählen vereinfacht.",
  "Alles, was du dank deiner Wealth-Stufe tun und kaufen kannst, darfst du frei tun und kaufen. Coins brauchst du nur für zusätzliche Dinge.",
  {t: "h", x: "Crystals, Plates und Grains"},
  "*Crystals* sind die offizielle Währung des Household. Es sind dicke Münzen aus Kristall, auf denen je nach Nation verschiedene Symbole zu sehen sind.",
  "Alltägliche Einkäufe werden meist mit *Plates* bezahlt, flachen, breiten Metallmünzen im Wert von einem Zehntel eines Crystal. Kleinere Beträge zahlt man mit *Grains*, unregelmäßigen Bruchstücken aus Edelmetall im Wert von einem Zehntel eines Plate. Daher das Sprichwort: „Zehn Grains ein Plate, zehn Plates ein Crystal“, was bedeutet, dass sich alles summiert.",
  K("Coins verdienen", ["Du kannst Coins verdienen, indem du Gegenstände verkaufst, Gelegenheitsarbeiten annimmst oder in Ausnahmefällen anderen etwas stiehlst. Ausrüstung verkaufst du für ein Viertel ihres Preises. Was willst du machen, es ist Krisenzeit!",
   "In der Not kannst du auch deine Wealth-Stufe senken, um sofort Coins zu erhalten. Dabei erhältst du so viele Coins, wie die neue Wealth-Stufe vorsieht."]),
  K("Beispiele", ["Eine *Middle Class*-Figur hat keine Coins mehr. Sie entscheidet sich, *Poor* zu werden, und erhält sofort 2 Coins.",
   "Eine *Rich*-Figur ist knapp bei Kasse und senkt ihre Wealth-Stufe auf *Well-off*. Sie erhält 10 Coins."]),
  {t: "h", x: "Coins ausgeben"},
  "Wenn du Ausrüstung kaufen, Dienstleistungen bezahlen oder Littlings bestechen willst, gibst du Coins aus. Auf den folgenden Seiten findest du eine Liste üblicher Gegenstände und Dienstleistungen mit ihrem fairen Preis.",
  "Du musst Coins auch wegen eines Misserfolgs ausgeben. Das kann passieren, weil du bestohlen wurdest, betrogen wurdest oder einfach deine Geldbörse verloren hast.",
  "Bedenke, dass dir dein Wealth bei einigen Dienstleistungen freien Zugang verschafft. Du musst nicht für jede Mahlzeit und jede Hotelübernachtung zahlen. Coins spielen nur eine Rolle, wenn du Ausrüstung kaufen willst, wenn du Zugang zu Dienstleistungen jenseits deiner Mittel willst, wenn sie für die Geschichte wichtig oder nützlich sind oder wenn es einfach Spaß macht, sie einzubeziehen."
]});

A.push({id: "equipment", t: "Ausrüstung & Dienste", p: 155, b: [
  "Das klingt vielleicht seltsam, aber während ich dieses Kapitel schreibe, überkommt mich eine Welle der Nostalgie. Die Gegenstände, die ich beschreiben werde, sind vielleicht das einzige greifbare Andenken an eine vergangene Zeit. In meiner Studierstube neben dem Schreibtisch liegt ein alter Schlüssel, der seit Jahren nichts tut, als Staub zu sammeln und Erinnerungen wachzurufen. Ich muss lächeln, wenn ich daran denke, dass er zur Zeit der Ereignisse in diesem Buch als neuestes Wunderwerk der Technik galt.",
  "Ausrüstung besteht aus unbestreitbar nützlichen Gegenständen, wichtig und einprägsam genug, um einen Platz auf deinem Bogen zu verdienen. Jeder Gegenstand gibt dir Help in bestimmten Situationen und rüstet dich mit dem aus, was du für deine Abenteuer brauchst.",
  "In dieser Tabelle findest du die gebräuchlichste Ausrüstung. Auf den folgenden Seiten findest du außerdem interessante Gadgets und die furchterregendsten Waffen des Household.",
  {t: "tbl", head: ["Name", "Beschreibung", "Preis"], rows: [
   ["Rucksack", "Enthält alles, was du für eine Reise brauchst.", "2"],
   ["Hummelhandschuh", "Verhindert, dass die empfindlichen Pfoten anspruchsvoller Haushummeln gereizt werden.", "2"],
   ["Kutsche", "Eine große Kutsche für bis zu 8 Littlings.", "6"],
   ["Karren", "Ein praktischer Karren oder eine Kutsche für bis zu 4 Littlings.", "4"],
   ["Saubere Kleidung", "Zum Waschen oder Wechseln der Kleidung.", "1"],
   ["Umhang", "Schützt vor der Kälte und verleiht einen Hauch von Geheimnis.", "1"],
   ["Kochset", "Hilfreich, um im Freien zu kochen.", "2"],
   ["Essen auswärts", "Abendessen in einer Taverne oder einem Restaurant für einen Littling.", "1-5"],
   ["Verkleidungsset", "Hilfreich, um Verkleidungen anzulegen.", "3"],
   ["Arzttasche", "Hilfreich, um Wunden oder Krankheiten zu behandeln.", "4"],
   ["Elegante Kleidung", "Machen dich Elegant.", "3"],
   ["Feuerzeug", "Hilfreich, um ein kleines Feuer zu entzünden.", "1"],
   ["Galakleidung", "Machen dich Pompös.", "5"],
   ["Enterhaken mit Seil", "Hilfreich zum Klettern.", "2"],
   ["Juwelen", "Ringe, Halsketten, Armbänder, geschnitzte Pfeifen, Diademe und so weiter.", "1-9"],
   ["Laterne", "Hilfreich, um im Dunkeln zu sehen. Hinderlich, um unbemerkt im Dunkeln zu bleiben.", "2"],
   ["Dietriche", "Hilfreich, um Schlösser zu öffnen.", "2"],
   ["Musikinstrument", "Hilfreich beim Auftreten oder beim Lärmmachen.", "1-9"],
   ["Packschnecke", "Hilfreich, um schwere oder sperrige Lasten zu tragen.", "4"],
   ["Reittier", "Eine Mouse oder ein Beetle, auf dem du reiten kannst. Hilfreich zum Laufen.", "6"],
   ["Einzelzimmer", "Übernachtung in einem Hotel für einen Littling.", "1-5"],
   ["Stylistentasche", "Hilfreich, um dein Decorum zu erhöhen.", "5"],
   ["Fernrohr", "Hilfreich, um in die Ferne zu sehen.", "2"],
   ["Zelt", "Praktisches Zelt für 2 bis 4 Littlings. Leicht aufzubauen, aber schwer abzubauen.", "2-3"],
   ["Theaterkarte", "Gültig für einen Littling. Nummerierte Sitzplätze.", "2"],
   ["Werkzeugkiste", "Hilfreich, um Gegenstände zu reparieren oder Gadgets zu bauen.", "3"]]}
]});

A.push({id: "gadgets", t: "Gadgets", p: 156, b: [
  bild("s156-vi-gadgets", 240),
  "Die Erforschung und Ausübung der Technik hat es uns ermöglicht, technologisch fortschrittliche Gadgets zu entwickeln, herzustellen und einzusetzen. Littlings mit den nötigen Fähigkeiten und dem Weitblick, ihr Leben dieser edlen Wissenschaft zu widmen, gelten oft als exzentrische Erfinder, die ständig Gefahr laufen, bei ihren Experimenten alles in die Luft zu sprengen.",
  "Gadgets sind äußerst teuer und schwer zu bekommen. Sie werden nur von seltsamen, oft zurückgezogen lebenden Littlings verkauft.",
  "Die Moves Tinker, Fiddling und Find Resources erlauben dir, Gadgets im Handumdrehen zu bauen. Alternativ kannst du ein Gadget bauen, aber nur, wenn du eine Werkstatt mit den richtigen Werkzeugen hast: durch einen Extreme Action Roll auf Craft + Academia. Scheiterst du daran, geht etwas schief, und du wirst Verwirrt.",
  "Manche Gadgets, wie die Federschabe oder die Spinnwebenbombe, sind nach dem Einsatz verbraucht oder kaputt. Andere, wie der Hauskompass oder der Fallschirmrucksack, sind äußerst empfindlich und können nur nach sorgfältiger Neueinstellung und Anpassung wieder verwendet werden. Alle Gadgets sind in jedem Fall Einwegprodukte.",
  {t: "h", x: "Gadgets im Detail"},
  K("Automatischer Greifer", ["Ein Mechanismus am Handgelenk, mit dem du mit einer präzisen Geste einen kleinen Gegenstand oder eine Waffe sofort in deine Hand schnellen lässt. Meist nutzen ihn Littlings, die ihre Taschenpistole oder ihren Nagelstift immer griffbereit haben wollen. Manche gerissene Gestalten nutzen ihn auch zum Schummeln beim Kartenspiel."]),
  K("Spinnwebenbombe", ["In dieser kleinen Metallkugel ist ein spezielles synthetisches Spinnennetz komprimiert. Drücke den Knopf, wirf die Bombe, und sieh zu, wie deine Gegner in einer Explosion klebriger Spinnweben eingehüllt werden. Vorsicht auf engem Raum, sonst verstrickst du dich selbst!"]),
  K("Notfall-Spritzer", ["Dieser einfache Mechanismus spritzt bunte Tinte ins Gesicht von jemandem und sorgt so für die perfekte Ablenkung. Er ist meist als kleine Dekorblume getarnt und lässt sich an die Brusttasche oder ans Revers einer Jacke heften, aber auch als Manschettenknopf oder Hutschmuck tragen."]),
  K("Fluchthelfer MM", ["Auf den ersten Blick sieht der Escape Helper aus wie eine breite Metallmanschette, oft mit Stoff oder Leder bezogen, mit einem dünnen Ring an einer Seite. Ziehst du mit Finger oder Zähnen an diesem Ring, öffnet sich ein Mechanismus, der eine Reihe kurzer Haken oder Sägeklingen freigibt, manchmal auch ein kleines Fläschchen mit ätzendem Mittel, mit dem sich Seile und Handschellen durchtrennen lassen."]),
  K("Hauskompass", ["Ein kugelförmiger Kompass, mit dem du dich im House orientieren kannst. Dieses Juwel der Technik ist das Ergebnis gemeinsamer Forschung von dem weisen Paracelsus und Argo dem Bürokraten. Die Nadel ist an den Domain Contract gebunden und zeigt deshalb immer auf das Zentrum des House."])
]});

A.push({id: "gadget-liste", t: "Gadgets: Liste", p: 157, b: [
  bild("s157-vi-gadgets", 280),
  {t: "tbl", head: ["Name", "Beschreibung", "Preis"], rows: [
   ["Automatischer Greifer", "Zieht schnell eine Waffe. Du beginnst den Kampf mit einem Action Turn.", "5"],
   ["Kampfkreisel", "Kann benutzt werden, um Wände zu durchbrechen, oder für einen Angriff mit Craft + Academia.", "6"],
   ["Spinnwebenbombe", "Fängt jemanden in Spinnweben ein oder hebt einen Move eines Gegners auf.", "7"],
   ["Notfall-Spritzer", "Du verschaffst dir eine Ablenkung oder verlässt den Kampf.", "4"],
   ["Fluchthelfer MM", "Befreit dich von Seilen, Handschellen, Spinnweben oder ähnlichen Fesseln.", "6"],
   ["Hauskompass", "Zeigt auf das Zentrum des House. Hilfreich, um den Weg zu finden.", "5"],
   ["Multilinsenbrille", "Hilfreich, um Hinweise und Tatorte zu analysieren.", "4"],
   ["Fallschirmrucksack", "Bremst deinen Fall und erlaubt dir, aus großer Höhe zu gleiten.", "9"],
   ["Federstiefel", "Hilfreich, um zu laufen und zu springen.", "5"],
   ["Feder-Enterhaken", "Du erreichst eine hohe Stelle oder ziehst etwas zu dir herunter.", "5"],
   ["Federschabe", "Läuft umher und lenkt ein ahnungsloses Ziel ab.", "4"],
   ["Überraschung in der Schachtel", "Schlägt jeden nieder, der den Deckel öffnet.", "4"]]},
  {t: "h", x: "Einzelheiten"},
  K("Kampfkreisel", ["Ein metallener Kreisel, fast einen Meter hoch, mit einziehbaren Klingen oder Stacheln. Er wird mit einer Feder oder einer Kurbel mit großer Geschwindigkeit geschleudert. Ganz ehrlich: eine öffentliche Gefahr."]),
  K("Multilinsenbrille", ["Diese Brille besitzt viele frei bewegliche und übereinanderlegbare Gläser verschiedener Art. Sie sind vielleicht nicht der letzte Schrei der Mode, können aber äußerst nützlich sein, wenn du winzigste Details analysieren musst."]),
  K("Fallschirmrucksack", ["Ziehst du an einer besonderen Schnur an der Seite dieses kompakten Rucksacks, löst du einen Fallschirm aus Stoff oder Papier aus. Mit ihm kann ein Littling aus jeder Höhe springen und den Boden fast unversehrt erreichen. Die Flugrichtung zu steuern und nicht gegen Wände zu prallen ist allerdings alles andere als einfach und erfordert einen passenden Wurf auf Grace + Academia."]),
  K("Federstiefel", ["In der Plattform dieser Stiefel verbergen sich zwei äußerst elastische Federn. Ein kurzer Tipp mit der Ferse, und sie schnellen heraus, sodass der Träger über große Strecken und mit hoher Geschwindigkeit springen und hüpfen kann. Mindestens einmal im Leben ausprobieren!"]),
  K("Federschabe", ["Dieser kleine Metallkäfer sieht genau wie eine gewöhnliche Schabe aus. Du musst nur den Schlüssel auf seinem Rücken drehen, und die Federschabe fängt an, in zufälliger Richtung zu trippeln und zu krabbeln und die Aufmerksamkeit von Littlings und Bestien auf sich zu ziehen. Eine sehr kreative Ablenkung!"]),
  K("Feder-Enterhaken", ["Ein kurzes, mit Feder betriebenes Gewehr, das einen Enterhaken über große Entfernung abschießt. Es ist mit einer automatisch aufwickelnden Spule aus Faden verbunden, die am Gürtel des Benutzers befestigt ist."]),
  K("Überraschung in der Schachtel", ["Diese scheinbar gewöhnliche Schachtel kann wie eine Hutschachtel oder ein Geschenk aussehen. Darin verbirgt sich ein schwerer Boxhandschuh auf einer gespannten Feder, der sofort losschnellt, sobald der Deckel geöffnet wird. Überraschung!"])
]});

A.push({id: "weapons", t: "Waffen", p: 158, b: [
  bild("s158-vi-weapons", 250),
  "Die Waffen des Household sind exakte, maßstabsgetreue Nachbildungen einiger Gegenstände des Masters. Sie wurden in all den vielen Schlachten eingesetzt, die die Geschichte des Household geprägt haben.",
  "Wenn du eine Nahkampfwaffe, eine Fernkampfwaffe oder eine geladene Feuerwaffe besitzt, giltst du immer als bewaffnet. Außerdem können Waffen bestimmte Traits haben, die sie unter festgelegten Umständen hilfreich (Help) machen.",
  {t: "h", x: "Waffen-Traits"},
  {t: "karten", x: [
  K("Scharf", ["Hilfreich, um Seile, Schimmel, Pilze oder andere Hindernisse zu durchtrennen."]),
  K("Klein", ["Leicht zu verstecken."]),
  K("Präzise", ["Erlaubt dir, auf große Distanz zu schießen, ohne Nachteil."]),
  K("Wurf", ["Kann auf kurze Distanz geworfen werden."]),
  ]},
  {t: "karten", cls: "drei", x: [
  K("Zweihändig", ["Braucht beide Hände, um richtig geführt zu werden. Hinderlich auf engem Raum."]),
  K("Doppellauf", ["Kann zweimal schießen, bevor nachgeladen werden muss. Ab Kapitel IIII erhältlich. Siehe historische Ereignisse in Abschnitt VIII „Saga“."]),
  K("Breit", ["Verschafft dir die Vorteile von Partial Cover."]),
  K("Duell", ["Erlaubt dir, einige Duellanten-Moves zu nutzen."]),
  K("Feuerwaffe", ["Erlaubt dir zu schießen. Äußerst laut. Muss nach jedem Schuss nachgeladen werden."]),
  K("Schwer", ["Hilfreich, um Gegenstände und Türen zu durchbrechen."]),
  K("Illegal", ["Kann dir Ärger mit dem Gesetz einbringen."]),
  K("Spitz", ["Hilfreich, um harte Oberflächen zu durchdringen oder als Hebel."]),
  K("Fernkampf", ["Erlaubt dir zu schießen. Muss nach jedem Schuss nachgeladen werden."]),
  K("Reichweite", ["Erlaubt dir, auf kurze Distanz zu treffen."])
  ]}
]});

A.push({id: "melee", t: "Nahkampfwaffen", p: 159, b: [
  {t: "tbl", head: ["Name", "Beschreibung", "Preis"], rows: [
   ["Schlüssel", "Schwere Waffe.", "2"],
   ["Halbschere", "Scharfe Waffe.", "2"],
   ["Cogpesh", "Scharfe Wurfwaffe.", "3"],
   ["Wandernagel", "Waffe mit Reichweite.", "2"],
   ["Spazier-Zahnstocher", "Waffe.", "2"],
   ["Nailtip", "Klein, illegal, Wurfwaffe.", "1"],
   ["Pintip", "Klein, illegal, Wurfwaffe, spitz.", "2"],
   ["Schlagring", "Klein, illegal.", "1"],
   ["Besteckteil", "Waffe. Variiert, siehe Beschreibung.", "1-3"],
   ["Großschere", "Zweihändig, scharf, spitz.", "3"],
   ["Rasiermesser", "Zweihändig, scharf, breit.", "3"],
   ["Bolzen", "Zweihändig, schwer, breit.", "2"],
   ["Doppelbartschlüssel", "Zweihändig, schwer, scharf.", "4"],
   ["Cocktailspieß", "Zweihändig, spitz, mit Reichweite.", "4"],
   ["Hellebardenschlüssel", "Zweihändig, schwer, mit Reichweite.", "3"]]},
  bild("s160-vi-weapons", 320),
  {t: "h", x: "Nahkampfwaffen im Detail"},
  K("Schlüssel", ["Ein einhändiger Schlüssel mit einem Bart aus hartem Metall. Gilt meist als schmucklose Waffe, gut für Söldner und Pilzschneider, wurde aber schon oft in den Händen von unbestreitbar edlen Kämpfern gesehen."]),
  K("Halbschere", ["Ohne Zweifel die häufigste Waffe des Household. Der Halbschere ist ein gebogenes Schwert mit einer typischen ringförmigen Parierstange. Die gekreuzten Halbscheren sind das Symbol für Kampf aus Können und stehen auch im Wappen des Hearth. Wusstest du, dass Soldaten zwei einhändige Waffen benutzen können, um Moves auszuführen, die eine zweihändige Waffe verlangen? Manche von ihnen trägt man mit gekreuzten Scheren auf dem Rücken."]),
  K("Cogpesh", ["Dieses Schwert, typisch für die Horde, hat eine breite, gezackte Klinge in Form eines Halbkreises. Es gibt auch eine Duellvariante des Cogpesh, die von den Medjays aus der Kashab-Wüste benutzt wird und als wertvolle Reliquie gilt."]),
  K("Nailtip", ["Eine einfache, aber scharfe Metallnadel, die als Dolch benutzt werden kann. Sie ist die bevorzugte Waffe von Banditen und Verbrechern. Nailtips sind immer illegal."]),
  K("Pintip", ["Ein fein gearbeiteter, scharfer Dolch, der trotzdem illegal ist. Es gibt sie in vielen Formen und Größen, doch sie sind in der Regel dafür gemacht, einem ahnungslosen und unglücklichen Opfer in den Rücken gestoßen zu werden."]),
  K("Spazier-Zahnstocher", ["Ein eleganter Holzstab. Sein Knauf ist oft zu einer kleinen Skulptur geschnitzt, etwa in Form einer Biene, eines Käfers oder eines anderen natürlichen Motivs. Er ist die bevorzugte Selbstverteidigungswaffe feiner Littlings und in vielen Farbtönen erhältlich."]),
  K("Schlagring", ["Sofort einsatzbereit, wenn du sie wie einen kleinen Metallhandschuh über die Knöchel streifst. Brass Knuckles sind unauffällige und leicht zu verbergende Waffen. Vielleicht ist das der Grund, warum sie äußerst illegal sind."]),
  K("Wandernagel", ["Dieser lange, gerade Nagel hilft Reisenden auf ihren weiten Wanderungen, wenn sie das House auf und ab klettern."]),
  K("Besteckteil", ["Es gibt drei Arten von Besteckteilen: Messer, Gabeln und Löffel. Sie unterscheiden sich in Gebrauch und Technik, sind aber alle mehr oder weniger getreue Nachbildungen von Gegenständen aus dem Besteck des Masters. Du findest schwere, spitze oder scharfe Besteckteile sowohl für eine als auch für zwei Hände."]),
  {t: "h", x: "Zweihändige Waffen"},
  K("Großschere", ["Die zweihändige Version der Halbschere. Diese Waffe war Inspiration für viele Geschichten und gilt als Symbol für Stärke und Mut. Unter den vielen tapferen Littlings, die Greatscissors führen, ist auch William „Bravespine“ Hearthworth Jr., der derzeitige Hearthkeeper."]),
  K("Hellebardenschlüssel", ["Diese Stangenwaffe hat an einem ihrer Enden einen Schlüsselbart. Früher wurde sie in Bataillonen im ganzen House verwendet, heute führen sie meist Ehrenwachen und Soldaten an berühmten Orten oder bei Veranstaltungen."]),
  K("Doppelbartschlüssel", ["Dieser schwere zweihändige Schlüssel hat zwei scharfe Klingen. Er ist treuer Gefährte vieler Littlings in der Porcelain Infantry und ist durch Fenella Ramsay, bekannt als „the Tuberdam Dollar“, Heldin der Schlacht von Quillwaters, kürzlich wieder in Mode gekommen."]),
  K("Bolzen", ["Ein großer Bolzen mit einem klobigen Kopf. Er braucht beide Hände und ist so handlich und elegant wie ein Barhocker, schlägt aber deutlich härter zu."]),
  K("Cocktailspieß", ["Eine dünne Gabel mit nur zwei Zinken. Sie ist die bevorzugte Waffe der Soldaten der Great Imperial Army des Realm und der „blonden Ritter“. Der Cocktail Spear ist Symbol für Schutz und Krieg, ein Wunderwerk der Technik und Handwerkskunst. Die teuerste Waffe dieser Art wurde aus reinem numismatischem Silber geschmiedet und gehört niemand Geringerem als Großgeneral Ludmillen, „dem Silberstern“."]),
  K("Rasiermesser", ["Dieser Hackmesser mit breiter, flacher Klinge ist ideal für Littlings, die allen zeigen wollen, wie hart sie sind. Die Waffe wurde zuerst von Schmieden in Tuberdam nachgebildet, die dem Razor des Masters ähnlich sein sollte, und sollte gegnerische Reittiere in Kavallerieangriffen niederstrecken. Glücklicherweise wurde sie nie großflächig eingesetzt, wegen der unverschämten Produktionskosten und der Unhandlichkeit."])
]});

A.push({id: "ranged", t: "Fernkampfwaffen", p: 162, b: [
  {t: "tbl", head: ["Name", "Beschreibung", "Preis"], rows: [
   ["Taschenpistole", "Kleine Feuerwaffe. Kann nur auf kurze Distanz schießen.", "2"],
   ["Pistole", "Feuerwaffe.", "3"],
   ["Präzisionspistole", "Präzise Feuerwaffe.", "4"],
   ["Muskete", "Zweihändige Feuerwaffe. +1 zum Schießen.", "3"],
   ["Jagdgewehr", "Zweihändige, präzise Feuerwaffe. +1 zum Schießen.", "5"],
   ["Klappbare Armbrust", "Kleine Fernkampfwaffe. Kann nur auf kurze Distanz schießen.", "3"],
   ["Armbrust", "Zweihändige Fernkampfwaffe.", "4"]]},
  bild("s162-vi-weapons", 340),
  {t: "h", x: "Feuerwaffen und Armbrüste"},
  K("Pistole", ["Eine klassische Einzelschussknarre, weit verbreitet im ganzen House. Wie moderne Pistolen wurde ihre Form von der Waffe des Masters inspiriert, die über dem Kamin hängt."]),
  K("Taschenpistole", ["Diese kleine „Taschen“-Pistole hat keine große Feuerkraft, lässt sich aber bequem in der Jacke oder Handtasche tragen. Vorausgesetzt, du bist die Art von Littling, die sich wohlfühlt, mit einer Waffe bei sich zu reisen!"]),
  K("Präzisionspistole", ["Eine Pistole der neuesten Generation, äußerst treffsicher. Zu den bemerkenswertesten Modellen gehört die Feuerlang Precision Pistol, entworfen von Colonel Feuerlang von der Porcelain Army und mit einem extrem langen und oft verzierten Lauf. Ein weiteres glänzendes Beispiel militärischer Handwerkskunst ist die Deringer V, die neueste Schöpfung von Veronica Deringer, einer jungen Boggart, die kürzlich die berühmte Familienfirma von ihrem Vater übernommen hat."]),
  K("Wusstest du?", ["Wer mit zwei Pistolen gleichzeitig schießt, erhält +1 auf den Wurf, entleert aber beide Waffen."]),
  K("Jagdgewehr", ["Ein hochpräzises Gewehr. Das Geheimnis seiner großen Reichweite liegt in den Zügen im Inneren des Laufs, was der Beginn einer echten Revolution in den Feuerwaffen sein könnte. Le Fusil ist ein berühmtes Jagdgewehr, erfunden vom Fairy-Ingenieur Armand Le Fusil. Das bekannteste dieser äußerst präzisen Geräte ist aber sicher das Alshara-Gewehr, ein Juwel der Militärtechnik, das unten in der Horde entwickelt wurde. So schön es ist, so tödlich ist es auch!"]),
  K("Wusstest du?", ["Ab Kapitel IIII kannst du Feuerwaffen mit dem Trait Double Barreled kaufen, die zweimal schießen können, bevor sie nachgeladen werden müssen. Sie kosten nur doppelt so viel wie gewöhnliche Waffen!"]),
  K("Armbrust", ["Nicht gerade hochmodern, aber immer verlässlich. Armbrüste sind lautlose und effiziente Waffen, perfekt für Littlings, die lieber unauffällig bleiben. Sie können auch mit ungefährlichen Holzkugeln geladen werden."]),
  K("Klappbare Armbrust", ["Eine handliche Armbrust, etwa so groß wie eine Pistole, mit einem klappbaren Bogen, der sie leicht verstecken lässt. Diese vielen Vorteile gehen allerdings auf Kosten von Reichweite und Wucht. Auch sie kann mit ungefährlichen Holzkugeln geladen werden."]),
  K("Muskete", ["Ein verlässliches Gewehr des Household. Unter den vielen Modellen möchte ich das historische Chesterfield-Muskete nennen, entwickelt und hergestellt in der Hearth-Stadt gleichen Namens und zuverlässig in vielen Armeen eingesetzt."])
]});

A.push({id: "keysket", t: "Keyskets", p: 163, b: [
  bild("s163-vi-weapons", 360),
  "Ohne Zweifel sind Keyskets die ikonischsten Waffen des Household. Sie sind das Symbol aller Jäger und der Jagd. Für die wenigen unter euch, die noch nie einem begegnet sind: Keyskets sind mächtige Gewehre, die in Kampfschlüssel eingesetzt werden. Sie können lang oder schwer sein. Über das bessere Modell gibt es unterschiedliche Schulen, aber keine konnte die andere widerlegen.",
  K("Wusstest du?", ["Ein Keysket, ob lang oder schwer, belegt zwei Zeilen auf deiner Ausrüstung. Das liegt daran, dass Keyskets Nahkampfwaffe und Feuerwaffe zugleich sind!"]),
  K("Schwerer Keysket", ["Der Schwere Keysket eignet sich am besten für den Nahkampf und kann durch das Gewicht des großen Metallbarts schwere Schäden verursachen. Jäger, die diese Art bevorzugen, stürzen sich gern kopfüber in Gefahren. Meist sind sie im Kampf geschickter als in der feinen Kunst des Auflauerns."]),
  K("Langer Keysket", ["Der Lange Keysket eignet sich dagegen am besten für den Fernkampf. Dank des extrem langen Laufs, dem er seinen Namen verdankt, hat er eine viel größere Reichweite. Jäger, die diese Art bevorzugen, bleiben lieber weit weg von der Gefahr. Sie suchen meist einen versteckten Ort, von dem aus sie ihr Ziel erschießen können, ohne von großen Bestien entdeckt zu werden."]),
  "Alle Keyskets, ob schwer oder lang, werden mit einem einzigartigen Bart gefertigt, der nie wiederholt wird. Die Schutzvorrichtungen dieser Jagdschlüssel werden mit äußerster Präzision geschmiedet und spielen eine grundlegende Rolle im Leben eines Jägers.",
  "Nach dem Fang entzünden Jäger meist ein Feuer und erhitzen den Bart ihres Keysket in den knisternden Flammen. Wenn der Schlüssel rotglühend ist, drücken sie ihn auf die Haut oder Schale der Beute und markieren sie damit als ihr Jagdgut. So verhindern sie, dass Banditen und Wilderer ihre Arbeit stehlen und auf dem Markt weiterverkaufen."
]});

A.push({id: "dueling", t: "Duellwaffen", p: 164, b: [
  {t: "tbl", head: ["Name", "Beschreibung", "Preis"], rows: [
   ["Nadel", "Wurfwaffe, Duellwaffe.", "5"],
   ["Pin", "Spitze Duellwaffe.", "5"],
   ["Duell-Halbschere", "Scharfe Duellwaffe.", "5"],
   ["Lancetta", "Schwere Duellwaffe.", "5"]]},
  bild("s164-vi-weapons", 340),
  K("Nadel", ["Extrem leichtes Duellschwert, am besten zum Stoßen geeignet. Es wird vor allem in den Free Dominions verwendet. Die Needle der Mistress, die Inspiration für dieses eigenartige Schwert, wird noch heute an der Rosevault Fencing Academy aufbewahrt und wurde kürzlich zum Nationalschatz erklärt. Littlings, die die Duell-Needle bevorzugen, pflegen einen sauberen und schnellen Stil aus plötzlichen, tödlichen Stößen."]),
  K("Lancetta", ["Flaches, breites Duellschwert, geeignet zum Schneiden und Stoßen. Die Duell-Lancetta wurde zuerst als Waffe in der Horde benutzt, wo die Fencing Academy des Mirandola Gulf bis heute besteht. Die Lancetta (wörtlich: Uhrzeiger) ist das schwerste aller Duellschwerter, wirkt aber in den Händen eines Duellanten so leicht wie eine Rattenschnurrhaar. Littlings, die diese Waffe bevorzugen, haben einen explosiven und vielseitigen Stil, der sich sowohl zum Angriff als auch zur Verteidigung eignet.",
   "Wusstest du? Dank des Swordfighter-Traits beginnen Duellanten das Spiel mit einer Duellwaffe, die sie geerbt haben. Sie können sie sofort auf ihrem Bogen notieren, ohne einen einzigen Coin auszugeben!"]),
  K("Pin", ["Duellschwert mit einer kugelförmigen Parierstange. Es wird vor allem im Realm verwendet. Die Pin gilt als die elegante Waffe schlechthin, geschickt geführt von Persönlichkeiten wie dem Herzog von Faeriyev, Gastgeber des wichtigsten jährlichen Fechturniers im House. Littlings, die die Duell-Pin bevorzugen, legen Wert auf Form, doch fehlt es ihnen nie an Substanz."]),
  K("Duell-Halbschere", ["Duellsäbel, am besten zum Schneiden und für den Kampf zu Pferd geeignet. Er wird vor allem in den Ländern des Hearth verwendet, wo die Duell-Halbscheren oft länger sind, um an die größere Statur der Einheimischen angepasst zu sein und zugleich eine größere Reichweite zu bieten. Littlings, die diese Waffe bevorzugen, pflegen einen modernen Stil und opfern einen Teil der Form zugunsten eines praktischen Ansatzes."])
]});

A.push({id: "armor", t: "Rüstung & Accessoires", p: 165, b: [
  {t: "tbl", head: ["Name", "Beschreibung", "Preis"], rows: [
   ["Leichte Rüstung", "Einmal pro Kampf kannst du mit Strength statt mit einem anderen Skill reagieren.", "3"],
   ["Schwere Rüstung", "Einmal pro Kampf kannst du mit Strength statt mit einem anderen Skill reagieren. Bietet zusätzlichen Schutz, siehe Beschreibung.", "6"],
   ["Knopf", "Verschafft dir die Vorteile von Partial Cover.", "2"],
   ["Münze", "Verschafft dir und einem Freund die Vorteile von Partial Cover.", "3"],
   ["Bajonett", "Verwandelt ein Musket oder Gewehr in eine Nahkampfwaffe.", "1"],
   ["Spule", "Wird mit Duellnadeln verwendet und verleiht den Trait Reach.", "3"],
   ["Cape", "Einmal pro Kampf kannst du mit Dexterity statt mit einem anderen Skill reagieren.", "4"],
   ["Ratador-Umhang", "Erlaubt dir, Duellanten-Moves zu nutzen, wenn du gegen Bestien kämpfst.", "6"],
   ["Tarnumhang", "Hilft dir, dich in der wilden Umgebung eines Raums zu tarnen.", "3"]]},
  bild("s165-vi-weapons", 340),
  {t: "h", x: "Rüstungen und Accessoires"},
  K("Leichte Rüstung", ["Eine Lederjacke, die entweder mit Chitinplatten gefüttert oder verstärkt ist. Alternativ ein glänzender oder emaillierter Brustpanzer, wie ihn die Armeen des Realm und der Upper Floor tragen."]),
  K("Schwere Rüstung", ["Eine schwere und sperrige Rüstung mit Armschutz und einem Helm mit Visier oder Federbusch. Sie wird meist in Schlachten oder bei militärischen Paraden getragen. Man bleibt damit garantiert nicht unbemerkt! Eine schwere Rüstung ist hinderlich beim Laufen, Klettern, Schwimmen, Schleichen oder wenn du unbemerkt bleiben willst. Wenn du in einem Kampf oder wegen einer körperlichen Gefahr die Crucial Box füllst, erleidest du keinen Zustand. Wirst du Überlastet, zerbricht deine Rüstung, und du entfernst allen Stress nach der Crucial Box. Eine schwere Rüstung zu reparieren kostet 4 Coins. Wusstest du? Manche Duellanten tragen keinen Umhang, sondern bevorzugen einen Dolch oder eine kurze Lancetta. Sie funktionieren genauso gut!"]),
  K("Knopf", ["Ein runder Schild aus bemaltem oder rauem Holz. Ein Relikt aus der Vergangenheit."]),
  K("Münze", ["Ein schwerer Schild in Form einer Münze des Masters. Heute wird er vor allem von Ehrenwachen oder bei Paraden getragen. In manchen Regionen des Basement findest du auch Schilde mit denselben Vorteilen, die die Form gezahnter Zahnräder haben."]),
  K("Bajonett", ["Ein Dolch, der auf den Lauf eines Musketen oder Gewehrs gesteckt wird. Perfekt für Infanterieangriffe."]),
  K("Spule", ["Eine Garnrolle, am Hüftgürtel oder am Rücken getragen und mit dem Griff einer Duellnadel verbunden. Sie ist das Emblem des Schneiderstils aus Rosevault. Sie kann nicht zusammen mit einem Umhang getragen werden."]),
  K("Cape", ["Ein kleiner Umhang, über eine Schulter getragen. Er wird oft mit einer mittleren Waffe kombiniert, um als Verteidigungsinstrument zu dienen. Ein sehr altmodisches Accessoire."]),
  K("Ratador-Umhang", ["Die Rateta ist ein roter oder violetter Umhang, der von den Ratadores aus Umbral bei ihren Corridas gegen Ratten getragen wird."]),
  K("Tarnumhang", ["Ein Tarnumhang wird aus der Polsterung eines Raums des House gefertigt und hilft dir, dich in diesem Raum zu verstecken. Die Umhänge aus dem Living Room haben ein Muster und eine Textur ähnlich dem Teppich und seinen Schimmelflecken, die aus dem Upper Floor bestehen aus Pilzen und rotem Tapetenstoff. Tarnumhänge aus dem Basement sind in warmen Tönen gehalten, die an die verrosteten Wände erinnern, während die aus dem Dining Hall mit der typischen grünen Tapete des Realm gefertigt werden."])
]});

H["haus/regeln/ausruestung"] = A;
})();
