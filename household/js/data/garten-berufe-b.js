/* Garten › Regeln › Berufe, Teil B: Duellanten, Wayfarers, Tierführer, Animal Companions, Merkmale (Vol. II S.54–71) */
(function(){
var K = "garten/regeln/berufe", L = (HH_TEXT[K] = HH_TEXT[K] || []);
var SYM = {h: "{herz}", d: "{karo}", c: "{kreuz}", s: "{pik}"};
function sy(s){ return s.split("").map(function(c){ return SYM[c]; }).join(""); }
var FLD = {Gesellschaft: "Gesellschaft {herz}", Wissenschaft: "Wissenschaft {karo}", Krieg: "Krieg {kreuz}", Straße: "Straße {pik}"};
function M(name, suits, text, req){ return {t: "box", h: name, b: [sy(suits) + (req ? " *" + req + "*" : ""), text]}; }
function B(name, field, trait, moves, skills){ return {t: "box", h: name, b: ["**Feldpunkt:** " + FLD[field], "**Merkmal:** " + trait, "**Wähle ein Manöver:** " + moves, "**Fertigkeitspunkte:** " + skills]}; }
function V(name, quote, field, skills, traits, text){ return {t: "box", h: name, b: ["*„" + quote + "“*", "**Feldpunkt:** " + FLD[field] + "  ·  **Fertigkeiten:** " + skills, "**Wähle ein Merkmal:** " + traits, text]}; }
function bild(n, w){ return {t: "bild", s: "garten-" + n, w: w}; }
function T(name, text){ return {t: "box", h: name, b: [text]}; }
var DW = "Erfordert eine Duellwaffe.";

L.push(
{id: "duelists", t: "Duellanten", p: 54, b: [
 {t: "q", x: "Wer in Zeiten von Gewehren und Kanonen zum Schwert greift, ist entweder verrückt oder der Letzte der Vernünftigen.", wer: "Der Kreuz-Bube"},
 bild("s055-ii-duelists", 200),
 "Auch wenn Duellanten aus dem Household und dem Outhold allmählich verschwinden, ist der Garten noch immer ein Land uralter Traditionen, in dem das Schicksal eines Einzelnen oder vieler Littlings an der Spitze eines Schwertes entschieden werden kann. Unter den Duellanten von draußen müssen wir die Ronin erwähnen, die ihre Schwerter im Dienst des Meistbietenden führen und einem strengen persönlichen Kodex folgen. Pirates sind aus ganz anderem Holz und arbeiten nur für sich selbst, ohne jede Reue. Dann gibt es die wagemutigen Commanders, die ihre Soldaten täglich zu großen Taten führen, die Traveling Masters, die den Garten durchstreifen, um würdige Schüler zu finden, und schließlich die skrupellosen Assassins, die reisen, um ihre düstere Botschaft zu überbringen.",
 {t: "h", x: "Fechtstile des Gartens"},
 "Duellanten, die nahe der Citadel oder in den Woodlands leben, bevorzugen oft den **Splinter**, eine bescheidene, aber vielseitige Duellwaffe. Ronin aus dem Shogunate folgen dem Weg der **Orikatana**, einer gebogenen Klinge, scharf wie Papier. Am Seelie Court geben Lehrer die Kunst der **Knochen-Shashka** weiter, einer Waffe, die so tödlich wie uralt ist, während in den Brambles oder nahe dem Fountain die kühnsten Duellanten mit **Scimithorns** kämpfen.",
 {t: "h", x: "Duellant (Garten-Variante)"},
 B("Duellant", "Krieg", "Swordfighter", "Deceit, Deflect, Interrupt oder Whistle", "Charme, Etikette, Anmut, Einsicht, Athletik, Autorität, Kampf, Wille, Geschick, Ausweichen"),
 {t: "h", x: "Duellant-Manöver"},
 {t: "karten", x: [
  M("Quick Draw", "c", "Vor Beginn eines Kampfes, der mit einer Reaktionsrunde beginnt, kannst du einen Aktionswurf ablegen, um den Gegner zuerst anzugreifen.", DW),
  M("Deflect", "cs", "Du lenkst mit deiner Waffe Kugeln ab, ohne zu würfeln. Wirf eine Münze. Kopf: Du schickst ein Geschoss zum Absender zurück und verursachst beim Gegner 1 Stress.", DW),
  M("Whistle", "hs", "Du rufst dein Reittier, das sofort an deine Seite eilt."),
  M("Wrong-foot", "c", "Nachdem du einen Littling getroffen hast, verursachst du automatisch 1 zusätzlichen Stress.", DW),
  M("Interrupt", "c", "Hindere einen Littling daran, ein Manöver einzusetzen.", DW),
  M("Deceit", "hs", "Wiederhole einen einzelnen Wurf auf Ausweichen oder Redegewandtheit, erhalte +1 und ignoriere alle Zustände.")]},
 {t: "h", x: "Berufungen"},
 {t: "karten", x: [
  V("Pirate", "Natürlich spiele ich unfair. Ich habe nicht vor zu verlieren!", "Gesellschaft", "Charme, Redegewandtheit, Anmut, Einsicht, Ermittlung, Athletik, Kampf, Geschick, Ausweichen, Schießen", "Swimmer, Little Friend, Acrobat oder Perfect Liar", "Ein Pirate ist per Definition ein Littling von üblem Ruf, der die Gewässer befährt, um Händler und andere Reisende zu überfallen und ihnen alles abzunehmen. Im House gibt es Pirates nur in der Bathtub oder im Mirandola Gulf. Im Garten sind sie am häufigsten auf dem großen Fountain, wo das Last Ship von Capitano Rodomonte noch immer die Wellen befährt, oder in den Wasserbecken rund um die Rushes."),
  V("Traveling Master", "Ich werde beurteilen, ob und wann du würdig bist, unterrichtet zu werden. Bis dahin trägst du die Taschen.", "Wissenschaft", "Art, Etikette, Anmut, Kultur, Einsicht, Athletik, Autorität, Kampf, Wille, Geschick", "Acrobat, Small, Tough Hide oder Natural Born Leader", "Auf dem Gipfel ihrer Technik angelangt, brechen manche Duellanten ins House oder in den Garten auf, um würdige Gegner zu suchen. Andere reisen mit einem anderen Ziel: einen würdigen Nachfolger zu finden oder zumindest einen eifrigen Schüler, der ihre Lehren verdient. Diese Littlings sind die Traveling Masters, oft stolze Littlings, die behaupten, die letzten Vertreter einer Kunst zu sein, die jedes Jahr verschwinden könnte."),
  V("Ronin", "Meine Orikatana dient keinem Herrn.", "Straße", "Charme, Anmut, Fürsorge, Handwerk, Athletik, Kampf, Wille, Vorsicht, Geschick, Ausweichen", "Hard to Kill, Undaunted, Rider oder Alert", "Wenn die Samurai ihre Schwerter in den Dienst eines örtlichen Herrn stellen, beugen sich Ronin vor niemandem und bleiben völlig frei. Manche Ronin sind wandernde Krieger auf der Suche nach Gerechtigkeit oder Rache, andere gewaltige Söldner ohne Gewissen, wieder andere Volkshelden, bereit, für diejenigen zu den Waffen zu greifen, die nicht die Kraft oder die Mittel haben, sich selbst zu schützen."),
  V("Commander", "Wenn wir zusammenstehen, wird der Sieg unser sein. Auf eure Posten!", "Wissenschaft", "Redegewandtheit, Etikette, Kultur, Einsicht, Ermittlung, Autorität, Kampf, Wille, Vorsicht, Schießen", "Camp Life, Undaunted, Rider oder Natural Born Leader", "Wenn zwei Bataillone im Krieg aufeinanderprallen, entscheidet oft das Können ihrer Commander über das Schicksal der Schlacht. Duellanten mit einem Verstand so scharf wie ihre Klinge, stets bereit, schwierige Entscheidungen in Sekundenbruchteilen zu treffen, um ihre Littlings zum Sieg zu führen. Das ist die Berufung hochdekorierter Offiziere in den Armeen von drinnen und draußen, aber auch der standhaftesten „Felsen“ der Citadel und der Strategen des Shoguns."),
  V("Adventurer", "Mir egal, was sie sagen. Ich werde meinen Schatz finden, und sie müssen ihre Worte fressen!", "Gesellschaft", "Art, Charme, Redegewandtheit, Ermittlung, Athletik, Kampf, Vorsicht, Ausweichen, Erkundung, Schießen", "Tough Hide, Rider, Well-Trained oder Pathfinder", "Viele junge Littlings, bewaffnet mit großen Erwartungen und einem scharfen Splinter, brechen in die fernsten Winkel des Gartens auf, auf der Suche nach einem Schatz oder einer großen Tat. Aber nur die Entschlossensten wachsen zu echten Adventurers heran, Littlings, die alles andere beiseitelassen, um einem Traum nachzujagen, den alle anderen für unmöglich halten. Dank Duellanten wie ihnen haben wir so viele Fans von Abenteuerromanen."),
  V("Assassin", "Nichts Persönliches. Es ist nur ein Job.", "Straße", "Etikette, Anmut, Einsicht, Ermittlung, Autorität, Kampf, Vorsicht, Geschick, Ausweichen, Schießen", "Nail Thrower, Camouflage, Tough as a Nail oder From the Gutter", "Assassins sind stille, wirkungsvolle Duellanten, die ihre tödlichen Dienste jedem verkaufen, der einen Feind oder Konkurrenten beseitigen will. Manche sind düstere Auftragsmörder, die vor nichts zurückschrecken, um ihre Aufgabe zu erfüllen. Andere sind sentimentale Söldner, die nie auf die Idee kämen, ihr Schwert gegen einen unbewaffneten Littling zu erheben, aber kein Problem damit haben, ihn zu einem Duell auf Leben und Tod herauszufordern.")]}
]},

{id: "wayfarers", t: "Wayfarers", p: 58, b: [
 {t: "q", x: "Manche reisen, um vor sich selbst davonzulaufen, andere, um sich selbst zu finden. Aber meine liebsten Leute reisen nur um der Reise willen.", wer: "Shappa"},
 bild("s059-ii-duelists", 200),
 "In der weiten Fläche des Outhold gilt der Beruf des Wayfarers als ebenso wichtig und eigenständig wie jeder andere. Nicht jeder kann sich den gewundenen Wegen stellen, die von der Mother Road bis zum Ende des Fence oder von Twigbridge zur Shingle Pagoda führen.",
 "Dies ist der Beruf von Littlings, die ihren Lebensunterhalt damit verdienen, den Garten von einem Ende zum anderen zu durchreisen, wie Siedler, Baumeister und Bauern, die mit den wechselnden Jahreszeiten umherziehen, um neues, fruchtbares Land zu suchen. Aber auch von Händlern, die ihre Waren dorthin tragen, wo sie wirklich geschätzt werden, und von Valets und Postboten, die Pakete und herzliche Briefe im Auftrag derer befördern, die lieber drinnen bleiben, wo es warm ist. Und wie könnten wir die fahrenden Künstler vergessen, die Tänzer und Straßenmusikanten, die den Garten durchstreifen, um Littlings bei den wichtigsten Festen den Tag zu erhellen, oder die Journalisten und Abenteuerschriftsteller, die lieber aus erster Hand dieselben packenden Nervenkitzel erleben, die sie später auf Papier erzählen wollen.",
 {t: "h", x: "Wayfarer"},
 B("Wayfarer", "Gesellschaft", "Specialty", "Hidden Talent, Improvise, Instill Confidence oder Natural Knowledge", "Charme, Redegewandtheit, Fürsorge, Handwerk, Einsicht, Athletik, Kampf, Vorsicht, Ausweichen, Erkundung"),
 {t: "h", x: "Wayfarer-Manöver"},
 {t: "karten", x: [
  M("Instill Confidence", "h", "Entweder gewährst du einem Freund, der gleich mit 4 oder weniger Würfeln würfelt, +1, oder du bewahrst einen Freund, der sein Kritisches Kästchen ausgefüllt hat, davor, einen Zustand zu erleiden."),
  M("Cheer Up!", "hd", "Entweder entfernst du den Zustand Verängstigt oder Verlegen von einem Freund, oder du heilst 1 Stress bei einem Freund, der sein Kritisches Kästchen bereits ausgefüllt hat."),
  M("Remedy", "ds", "Entferne einen jahreszeitlichen Zustand von einem Freund."),
  M("Improvise", "s", "Bei einem Aktions- oder Reaktionswurf kannst du genau 6 Würfel mit einem Freien Neuwurf würfeln und dabei Feld, Fertigkeit, Zustände und Umstände ignorieren."),
  M("Hidden Talent", "hc", "Bis zum Ende der Szene erhältst du vorübergehend die Vorteile eines Merkmals deiner Wahl, das du nicht besitzt."),
  M("Improvised Campfire", "s", "Entweder sammelst du schnell etwas Nahrung, oder du findest einen Unterschlupf, in dem du sicher ein Lager aufschlagen kannst."),
  M("Natural Knowledge", "ds", "Finde oder fertige schnell eine Natürliche Mixtur."),
  M("Versatility", "", "Wähle und erhalte ein Manöver aus einem anderen Beruf. Du kannst dieses Manöver mehrmals wählen.")]},
 {t: "h", x: "Berufungen"},
 {t: "karten", x: [
  V("Valet", "Gar kein Problem. Ich gehe!", "Krieg", "Etikette, Handwerk, Einsicht, Ermittlung, Athletik, Kampf, Stärke, Wille, Vorsicht, Ausweichen", "Big and Strong, Well-mannered, Tough Hide oder Small", "Das Wort Valet bezeichnet meist flinke junge Littlings, die ihre Tage damit verbringen, im Auftrag einer Familie Essen, Gepäck oder Waren hin und her zu tragen. In diese Kategorie fallen auch alle Reiseboten, Kuriere und Mäuse-Expressdienste, sogar die Postboten der P.O.L.L.E.N., die Sonne, Regen, Wind und manchmal Schnee trotzen, um Pakete und Liebesbriefe ihrem Empfänger zu liefern."),
  V("Settler", "Mir gefällt es hier. Ich glaube, ich bleibe.", "Krieg", "Handwerk, Ermittlung, Athletik, Autorität, Kampf, Stärke, Wille, Geschick, Erkundung, Schießen", "Big and Strong, Pathfinder, Tough Hide oder Master Artisan", "Der Garten ist ein wildes Stück Land, das niemandem gehört, außer den gigantischen Bestien, die es als Jagdgrund beanspruchen. Und vielleicht den verängstigten Armeen, die hier und da ihre Flaggen aufstellen und versuchen, nicht zu viel Aufmerksamkeit zu erregen. Settler sind mutige Wayfarers, die bereit sind, den Kräften der Natur zu trotzen, um Lager, Siedlungen und kleine Dörfer zu gründen, in denen gute Littlings eines Tages ihre Heimstätten bauen und Familien gründen werden."),
  V("Traveling Artist", "Ich brauche nicht viel. Nur meine Geige und jemanden, der ihr zuhört.", "Straße", "Art, Charme, Redegewandtheit, Anmut, Fürsorge, Handwerk, Einsicht, Athletik, Geschick, Ausweichen", "Gifted Performer, Heartbreaker, Little Friend oder Acrobat", "Begabte Maler, die bis an den Rand des Gartens reisen, um die atemberaubendsten Landschaften auf ihre Leinwand zu bannen, wagemutige Schriftsteller, die durchs ganze Land ziehen, und nicht zuletzt Gitarristen, Geiger, Akkordeonspieler und Musiker aller Art, die Gäste unterhalten und die Herzen ihres Publikums wärmen. Zum Glück für uns alle ist das Outhold Heimat vieler Traveling Artists."),
  V("Journalist", "Im Ernst?! Die Leser unseres Magazins werden von diesem Scoop begeistert sein!", "Wissenschaft", "Redegewandtheit, Etikette, Kultur, Einsicht, Ermittlung, Wille, Vorsicht, Geschick, Ausweichen, Schießen", "Forensic Science, Polyglot, Mediator oder Sixth Sense", "Zeitungen und Magazine im House sind voller reißerischer Artikel, doch die Littlings sind es leid, Klatsch über Adlige und Höflinge zu lesen. Das Publikum braucht Spannung, Abenteuer, Nachforschungen! Journalisten müssen die Ärmel hochkrempeln und zu langen Reisen in den Garten oder in die gefährlichsten Winkel des House aufbrechen, um neue, relevante Geschichten zu suchen, die den Druck verdienen."),
  V("Pioneer", "Noch nie ist ein Littling so weit gegangen. Wir werden die Allerersten sein.", "Straße", "Fürsorge, Einsicht, Athletik, Kampf, Stärke, Wille, Vorsicht, Ausweichen, Erkundung, Schießen", "Pathfinder, Rider, Camp Life oder Cast-iron Stomach", "Pioneers sind die einzigen Littlings, die dorthin gehen, wo noch nie jemand war. Erfahrene Entdecker, fähig, über unwegsames Gelände, Bäume, Pfützen und unterirdische Tunnel zu reisen, um nie erforschte Ziele zu erreichen oder neue Routen zu eröffnen. Manche sind still und ernst, weil sie gelernt haben, inmitten ständiger Gefahren zu leben, andere ein wenig sonderbar, weil Sonne und Regen ständig auf ihre Köpfe prasseln. Jedem das Seine."),
  V("Merchant", "Ich verkaufe nur Ware von höchster Qualität, zu ausgezeichneten Preisen. Nur heute!", "Wissenschaft", "Redegewandtheit, Etikette, Handwerk, Kultur, Einsicht, Ermittlung, Wille, Vorsicht, Ausweichen, Schießen", "Mediator, Little Friend, At Home … oder Perfect Liar", "Garten und House sind voller Schätze, die darauf warten, entdeckt und an den Meistbietenden verkauft zu werden, doch in den Händen eines echten Merchants kann selbst wertloser Plunder zu einem hübschen Kristall werden. Zu dieser Kategorie zählen fahrende Händler, die die Mother Road entlangziehen, Kaufleute, die in den Spelunken von Twigbridge ihre Waren anpreisen, aber auch Auktionatoren und nicht zuletzt kundige Kunsthändler von drinnen wie draußen.")]}
]},

{id: "handlers", t: "Tierführer", p: 62, b: [
 {t: "q", x: "Die besten Freunde, die ich je hatte, waren mit Fell, Schuppen oder Panzer bedeckt, und die meisten haben nie versucht, mich zu fressen!", wer: "Viscount Oleg Protopopolov"},
 bild("s063-ii-animal-handlers", 200),
 "Der Garten ist ein unglaublich weiter Ort, an dem man sich als Littling leicht allein und verlassen fühlen kann. Zum Glück wissen die Little Folk des Outhold auch, dass sie sich stets auf die Hilfe, Gesellschaft und vielleicht sogar Freundschaft vieler liebenswerter Geschöpfe verlassen können. Denkt an die anmutigen Nachtfalter, die Reisende durch die dunkelsten Nächte führen, an die Maulwürfe und ihren lebenswichtigen Beitrag beim Graben der Tunnel der Citadel oder an die robusten Frösche, die in der Schlacht von Quillwaters eine entscheidende Rolle spielten. Dazu kommen viele alte Freunde wie Käfer aller Arten und Größen, die Landmäuse, die Hummeln, die Geckos und schließlich die knallroten Marienkäfer, die angeblich großes Glück bringen.",
 "Alle Littlings, die ihr Leben der Aufzucht, Ausbildung und dem Schutz eines oder mehrerer Tiere gewidmet haben, nennen wir Animal Handlers: von Trailblazers und Rescuers, die Seite an Seite mit ihren Tiergefährten Littlings in Not helfen, über Wildhüter und Beschützer des Gartens, die sich für Tiere und Natur einsetzen, bis zu den Streunern und Free Spirits, die lieber mit ihren vielbeinigen Freunden umherziehen, statt zu arbeiten. Wer kann es ihnen verdenken?",
 {t: "box", h: "Animal Companion", b: [
  "Jeder Tierführer beginnt sein Abenteuer mit einem Animal Companion seiner Wahl unter diesen: **Käfer, Hummel, Gecko, Maus, Nachtfalter, Maulwurf, Marienkäfer, Frosch**.",
  "Diese Tiere werden von demselben Spieler gespielt, der den Tierführer spielt, und können nur für kleine oder einfache Aktionen eigenständig handeln. Wann immer ein Wurf nötig ist, müssen Tierführer und Animal Companion gemeinsam handeln, indem sie die Fertigkeit des Tierführers einsetzen, während das Tier ihn nach Möglichkeit unterstützt. Jeder Animal Companion gewährt viele Vorteile und bietet in bestimmten Umständen Hilfe oder Freie Neuwürfe, wie im Merkmal Animal Companion beschrieben."]},
 {t: "box", h: "Merkmale und Manöver", b: [
  "Jeder Animal Companion hat eigene Merkmale und Manöver, die ihr auf den späteren Seiten findet. Die Merkmale und Manöver eines Animal Companions können selbstverständlich nur genutzt werden, wenn das Tier anwesend ist.",
  "In Kapitel I kann ein Tierführer ein Merkmal aus denen seiner Berufung oder aus denen seines Animal Companions wählen. Ebenso kann er im Verlauf der Kapitel entscheiden, ob er neue Merkmale für sich selbst oder für seinen treuen Animal Companion nimmt. Ein Tierführer kann keine berufsspezifischen Manöver wählen, aber Manöver für seinen Animal Companion aus dessen Liste lernen."]},
 {t: "h", x: "Tierführer (Garten-Variante)"},
 B("Tierführer", "Gesellschaft", "Animal Companion", "Eines aus denen deines Animal Companions", "Redegewandtheit, Fürsorge, Einsicht, Ermittlung, Autorität, Kampf, Wille, Vorsicht, Ausweichen, Erkundung"),
 {t: "h", x: "Berufungen"},
 {t: "karten", x: [
  V("Dynamic Duo", "Genau das habe ich gerade gedacht, du kannst immer meine Gedanken lesen.", "Straße", "Charme, Anmut, Fürsorge, Einsicht, Ermittlung, Athletik, Vorsicht, Geschick, Ausweichen, Schießen", "Acrobat, Perfect Liar, Kind Soul oder Small", "Sind Tierführer und Animal Companion so aufeinander eingespielt, dass sie sich ohne Worte oder Gesten verstehen, können sie zu einem echten Dynamic Duo werden, das jede Herausforderung meistert. Diese Heißsporn-Paare sind oft verschmitzt oder haben ein Problem mit Autorität, weil sie in einer eigenen Welt leben und nie auf andere hören. Ach, wer noch einmal jung wäre!"),
  V("Apprentice", "Wir müssen hart arbeiten, wenn wir eines Tages Meister sein wollen.", "Wissenschaft", "Art, Redegewandtheit, Etikette, Fürsorge, Handwerk, Kultur, Einsicht, Ermittlung, Athletik, Ausweichen", "Naturalist, Camp Life, Big and Strong oder Selfless", "Apprentices sind junge Tierführer, die Seite an Seite mit ihren pelzigen oder geschuppten Freunden ihr Leben der Unterstützung von Studien, Forschung oder Arbeit eines Professors oder eines anderen illustren Meisters widmen. Stets mit Botengängen und Pflichten beschäftigt, gehören sie zu den fleißigsten Tierführern, die man finden kann, und weichen nie zurück, wenn sie meinen, mehr lernen zu können oder in ihrem Lieblingsfach trainieren zu dürfen."),
  V("Protector", "Ihr könnt hier nicht bleiben.", "Krieg", "Redegewandtheit, Fürsorge, Einsicht, Athletik, Autorität, Kampf, Wille, Vorsicht, Erkundung, Schießen", "Naturalist, Little Friend, Physician oder At Home …", "Von allen Tierführern sind Protectors wohl die aggressivsten und diejenigen, die am wenigsten zurückhaltend sind, wenn sie jemandem gegenüberstehen, der es verdient. Das ist die Berufung aller Wächter, die Höfe und kleine Dörfer beschützen, aber auch der Wildhüter, die den Garten vor Wilderern schützen, und nicht zuletzt der Druiden des Seelie Court, die sich bemühen, das Gleichgewicht der Natur zu bewahren."),
  V("Free Spirit", "Wir gehen, wohin wir wollen, und wenn ihr versucht, uns aufzuhalten, bekommt ihr es mit ihm zu tun …", "Krieg", "Art, Charme, Anmut, Einsicht, Athletik, Kampf, Stärke, Wille, Geschick, Ausweichen", "Well-Trained, Heartbreaker, Undaunted oder Kind Soul", "Free Spirits sind Tierführer, die weit entfernt von städtischen Siedlungen leben, oft auch weit weg von den Gesetzen und Höflichkeitsregeln, die dazugehören. Für sie zählt nur, am nächsten Tag aufzuwachen, möglichst nicht zu früh, und dann zu einem Ziel ihrer Wahl aufzubrechen, zu einer Zeit ihrer Wahl, ohne je um Erlaubnis zu fragen. All das natürlich Seite an Seite mit ihrem treuen Animal Companion."),
  V("Trailblazer", "Du behältst die Dinge von oben im Auge, ich versuche, außen herum zu gehen.", "Straße", "Handwerk, Ermittlung, Athletik, Kampf, Wille, Vorsicht, Geschick, Ausweichen, Erkundung, Schießen", "Pathfinder, Survival Instinct, Swimmer oder At Home …", "Im House wie draußen tun sich manche Späher der verschiedenen Armeen in den Regionen nahe der Citadel oder der Rushes mit einem klugen Animal Companion zusammen, der ihnen bei der schwierigen Aufgabe hilft, die Wildnis zu patrouillieren oder einen sicheren Weg durch Pflanzenwuchs und extremes Wetter zu bahnen. Diese Littlings haben mehr mit Jägern gemeinsam als die meisten anderen Tierführer und gehören zu den besten Führern, die man haben kann."),
  V("Rescuer", "Hm, was sagst du? Jemand braucht uns? Worauf warten wir dann noch?!", "Wissenschaft", "Redegewandtheit, Fürsorge, Handwerk, Ermittlung, Athletik, Kampf, Stärke, Vorsicht, Geschick, Erkundung", "Physician, Survival Instinct, Selfless oder Alert", "Der Garten ist voller Gefahren, und etwas zu forsche Reisende tappen bekanntlich in die Fallen von Ameisenlöwen oder verirren sich zwischen den Ästen oder im Underground. Zum Glück sind Rescuers und ihre gut ausgebildeten Tiergefährten stets bereit, einzuspringen und Littlings in Not zu retten. Manche treibt Bürgerpflicht oder Berufung an, die weniger Vernünftigen das Geld.")]}
]},

{id: "frog", t: "Frosch", p: 66, b: [
 bild("s066-ii-frog", 180),
 "Diese quakenden Amphibien mit dem breiten Maul sind die besten Freunde, die sich ein Littling wünschen kann, der in der Nähe der großen Gewässer des Gartens lebt. Die Shinigami, die in den Rushes wohnen, haben großen Respekt vor Frösche und behandeln sie wie Ebenbürtige. Der am meisten verehrte Frosch des Gartens ist aber zweifellos King Frog Jack, ein Exemplar ganz eigener Klasse, das in Frogstone Keep am Rand des Fountain Hof hält.",
 {t: "h", x: "Animal Companion: Frosch"},
 "Wählst du einen Frosch als Animal Companion, kannst du ihn so in deiner Ausrüstung notieren:",
 {t: "box", h: "Frosch", b: ["Hilfreich beim Zerbrechen von Gegenständen oder beim Springen.", "Du hast einen Freien Neuwurf, wann immer du und dein Frosch gemeinsam schwimmt. Befindest du dich in einem Fleck Sonnenlicht, wirf einen Würfel. Zeigt er {kreuz}, ignoriert der Frosch alle Befehle und legt sich zum Ausruhen hin."]},
 {t: "h", x: "Frosch-Merkmale"},
 {t: "karten", x: [
  T("Large Frog", "Der Frosch ist groß genug, um geritten zu werden. Er ist hilfreich beim Schieben, Ziehen oder Heben schwerer Gegenstände, aber hinderlich, wenn du dich verstohlen oder auf engem Raum bewegst."),
  T("Extendable Tongue", "Erlaubt dir, Ziele auf kurze Entfernung zu treffen, wie mit einer Reichweitenwaffe."),
  T("Shiny Skin", "Dank deines Frosches hast du immer einen Freien Neuwurf, um aufzutreten oder einen guten Eindruck zu machen."),
  T("Wide Mouth", "Du kannst kleine Gegenstände im Maul deines Frosches verstecken. Hat der Frosch auch das Merkmal Large Frog, kannst du einen erwachsenen Littling in seinem Maul verstecken.")]},
 {t: "h", x: "Frosch-Manöver"},
 {t: "karten", x: [
  M("Leap Away", "c", "Du kannst gegen einen Gegner mit Athletik +1 reagieren, statt mit der verlangten Fertigkeit."),
  M("Protect", "c", "Entweder bewahrst du einen Freund davor, den Zustand Gebrochen oder Verletzt zu erleiden, oder du rettest einen Freund davor, ohne Einsatz eines Jokers ausscheiden zu müssen."),
  M("Bring Down", "c", "Du zwingst einen fliegenden Gegner zu landen, sodass er mit Nahkampfwaffen angegriffen werden kann. Dieses Manöver wirkt nicht bei kolossalen Bestien."),
  M("Cold Blooded", "c", "Nachdem du Stress verloren hast, kannst du 3 Stress abbauen. Du kannst dieses Manöver nur einsetzen, wenn die Sonne scheint. Leerst du dein Kritisches Kästchen damit, erleidest du beim nächsten Ausfüllen des Kritischen Kästchens in dieser Szene keinen Zustand."),
  M("Diversion", "hs", "Hindere einen Gegner daran, ein Manöver einzusetzen. Dieses Manöver wirkt nicht bei kolossalen Bestien."),
  M("Jump In", "s", "Wiederhole einen Reaktionswurf beliebiger Art und ignoriere dabei alle −1 durch Zustände oder Umstände. Du musst das neue Ergebnis behalten.")]}
]},

{id: "ladybug", t: "Marienkäfer", p: 67, b: [
 bild("s067-ii-ladybug", 180),
 "Marienkäfer sind weder besonders stark noch schnell, und sie sind auch nicht für ihre Schläue oder Heimlichkeit bekannt. Offen gesagt sind diese knallroten Haustierinsekten an sich nicht wirklich nützlich, und man kann ihnen keine nützlichen Aufgaben beibringen. Manche behaupten jedoch, Marienkäfer seien äußerst glücklich. Ihr Glück sei so reichlich, dass es auf Littlings abfärben könne, die eine besonders starke Bindung zu diesen Insekten aufbauen. Könnte das stimmen? Im Vertrauen: Es wäre nicht das Seltsamste, was ich je gesehen habe.",
 {t: "h", x: "Animal Companion: Marienkäfer"},
 "Wählst du einen Marienkäfer als Animal Companion, kannst du ihn so in deiner Ausrüstung notieren:",
 {t: "box", h: "Marienkäfer", b: ["Hilfreich beim Ablenken anderer oder beim Auftreten.", "Du hast einen Freien Neuwurf, wann immer du und dein Marienkäfer gemeinsam einen Handel abschließen. Gehst du gegen einen Vertrag vor, wirf einen Würfel. Zeigt er {pik} oder {herz}, ignoriert der Marienkäfer deine Befehle und weigert sich zu kooperieren."]},
 {t: "h", x: "Marienkäfer-Merkmale"},
 {t: "karten", x: [
  T("Karma", "Dank deines Marienkäfers hast du, nachdem du dein Kritisches Kästchen ausgefüllt hast, +1 auf deinen nächsten Aktions- oder Reaktionswurf. Von da an hast du bei allen Reaktionswürfen einen Freien Neuwurf, bis du den Stress abgebaut hast."),
  T("Lucky Dodge", "Dank deines Marienkäfers hast du einen Freien Neuwurf, um Kugeln auszuweichen."),
  T("Lucky Hound", "Dein Marienkäfer gewährt dir Hilfe beim Finden von Hinweisen und nützlichen Gegenständen."),
  T("Lucky Charm", "Dank deines Marienkäfers hast du immer einen Freien Neuwurf, wenn du mit 2 oder 3 Würfeln würfelst.")]},
 {t: "h", x: "Marienkäfer-Manöver"},
 {t: "karten", x: [
  M("Leave to Chance", "ds", "Statt einen Aktions- oder Reaktionswurf abzulegen, kannst du eine Münze werfen. Kopf: Du bestehst den Wurf. Zahl: Du erleidest ein katastrophales Scheitern."),
  M("Good and Bad Luck", "ds", "Ein Freund erleidet statt dir die Folgen deines Scheiterns."),
  M("Close Call", "d", "Baue sofort 3 Stress oder 1 Schweren Stress ab. Du kannst dieses Manöver nur einsetzen, wenn du dein Kritisches Kästchen bereits ausgefüllt hast. Beim nächsten Ausfüllen des Kritischen Kästchens in dieser Szene erleidest du keinen Zustand."),
  M("Stroke of Luck", "s", "Du und ein Freund entkommt entweder einer gefährlichen Situation oder weicht ohne Würfeln einigen Kugeln oder dem Angriff oder Manöver eines Gegners aus."),
  M("Lucky Find", "d", "Entweder bittest du die Spielleitung um einen Hinweis oder Vorschlag, oder du findest die Schwachstelle eines Gegners."),
  M("Lucky Fail", "h", "Nachdem du einen Reaktionswurf verpatzt hast, der nicht von einem Gegner verursacht wurde, kannst du sofort einen glücklichen Zufall oder eine unerwartete Gelegenheit herbeiführen.")]}
]},

{id: "moth", t: "Nachtfalter", p: 68, b: [
 bild("s068-069-ii-moth-ganz", 220),
 "Nachtfalter gelten als zahme und geheimnisvolle Geschöpfe, die Littlings mit den bezaubernden Farben und Mustern ihrer Flügel verzaubern. Auch Fae und Shinigami hegen eine tiefe Liebe zu diesen nachtaktiven Tieren und ziehen sie Hummeln vor. Dem Aberglauben nach bringen Nachtfalter Unglück. Aber es fällt schwer zu glauben, dass so erlesene Geschöpfe Unglück bringen könnten!",
 {t: "h", x: "Animal Companion: Nachtfalter"},
 "Wählst du einen Nachtfalter als Animal Companion, kannst du ihn so in deiner Ausrüstung notieren:",
 {t: "box", h: "Nachtfalter", b: ["Hilfreich beim Halten des Gleichgewichts oder beim Bergen kleiner Gegenstände. Erlaubt dir, Ziele auf kurze Entfernung zu treffen, wie mit einer Reichweitenwaffe.", "Du hast einen Freien Neuwurf, wann immer du und dein Nachtfalter gemeinsam einen Zustand entfernt. Ist eine Flamme oder helles Licht in der Nähe, wirf einen Würfel. Zeigt er {karo} oder {pik}, ignoriert der Nachtfalter deine Befehle und fliegt los, um die Flamme zu umtanzen."]},
 {t: "h", x: "Nachtfalter-Merkmale"},
 {t: "karten", x: [
  T("Big Wings", "Dank deines Nachtfalters hast du einen Freien Neuwurf beim Springen. Außerdem kannst du dich an deinem Nachtfalter festhalten, um zu gleiten."),
  T("Dark Wings", "Dank deines Nachtfalters hast du nachts einen Freien Neuwurf bei Würfen auf Ausweichen. Außerdem bist du nachts unsichtbar, solange du hinter den Flügeln deines Nachtfalters still bleibst."),
  T("Night Creature", "Solange du bei deinem Nachtfalter bist, kannst du Nachteile durch Dämmerlicht ignorieren und leidest nur bei völliger Dunkelheit unter den Nachteilen des Dämmerlichts."),
  T("Iridescent Wings", "Dank deines Nachtfalters erhältst du tagsüber einen Freien Neuwurf bei Würfen auf Charme und nachts bei Würfen auf Autorität.")]},
 {t: "h", x: "Nachtfalter-Manöver"},
 {t: "karten", x: [
  M("Ill Omen", "d", "Nachdem du einen Aktionswurf verpatzt hast, eilt dir der Nachtfalter zu Hilfe. Du vermeidest die Folgen deines Scheiterns, darfst dieselbe Aktion aber nicht ein zweites Mal versuchen."),
  M("Flutter", "s", "Lenke Kugeln automatisch ab, ohne zu würfeln. Wirf eine Münze. Kopf: Du schickst eine Kugel zum Absender zurück und verursachst beim Gegner 1 Stress."),
  M("Barrel Roll", "s", "Du kannst gegen einen Gegner mit Ausweichen +1 reagieren, statt mit der verlangten Fertigkeit."),
  M("Air Support", "s", "Du und ein Freund erhaltet +1 auf euren nächsten Aktionswurf."),
  M("In a Wing Beat", "h", "Der Nachtfalter holt einen Gegenstand für dich oder fliegt mit einem kleinen Objekt zu dir, das du dringend brauchst."),
  M("Retreat", "hs", "Entweder entkommt ihr, du und ein Freund, einer gefährlichen oder schwierigen Situation, oder ihr verlasst beide einen Kampf.")]}
]},

{id: "mole", t: "Maulwurf", p: 69, b: [
 "Seit es den Garten gibt, leben die Gnomes in Harmonie mit ihren Freunden, den Maulwürfe. Ohne die Hilfe dieser kleinen, krallenbewehrten Tiere wären die zahllosen Tunnel der Citadel nie gegraben worden. Heute sind Maulwürfe im Outhold sehr verbreitet, besonders im Front Yard, und sie erlauben den kühnsten Reisenden, praktisch sorglos durch den Underground und auch nach Einbruch der Dunkelheit zu reisen.",
 {t: "h", x: "Animal Companion: Maulwurf"},
 "Wählst du einen Maulwurf als Animal Companion, kannst du ihn so in deiner Ausrüstung notieren:",
 {t: "box", h: "Maulwurf", b: ["Hilfreich beim Graben und beim Durchbrechen von Türen und Barrieren.", "Du hast einen Freien Neuwurf, um mit deinem Maulwurf den Weg durch die Dunkelheit oder den Underground zu finden. Schneit oder regnet es, wirf einen Würfel. Zeigt er {herz}, ignoriert der Maulwurf deine Befehle und gräbt sich ein, um nicht nass zu werden."]},
 {t: "h", x: "Maulwurf-Merkmale"},
 {t: "karten", x: [
  T("Saddle Mole", "Der Maulwurf ist groß genug, um geritten zu werden. Er ist hilfreich beim Schieben, Ziehen oder Heben schwerer Gegenstände, aber hinderlich, wenn du dich außerhalb des Underground auf engem Raum bewegst."),
  T("Sharp Claws", "Erhalte einen Freien Neuwurf, wenn du und dein Maulwurf gemeinsam einen Gegner angreift oder euch gegen ihn verteidigt."),
  T("Blind Guide", "Solange du bei deinem Maulwurf bist, ignorierst du Nachteile durch Dämmerlicht und leidest nur bei völliger Dunkelheit unter den Nachteilen des Dämmerlichts."),
  T("Undergr-Hound", "Erhalte einen Freien Neuwurf, um dich zu orientieren, Spuren zu folgen, dich leise zu bewegen oder dich zu verstecken, solange du im Underground bist.")]},
 {t: "h", x: "Maulwurf-Manöver"},
 {t: "karten", x: [
  M("Double Slash", "c", "Nachdem du eine Bestie getroffen hast, kannst du einen zweiten Aktionswurf mit −1 ablegen."),
  M("Entrench", "dc", "Entweder schaffst du eine Sichtschutzwand, die Teildeckung für 4 Littlings oder Volldeckung für 2 Littlings bietet, oder einen sicheren Unterschlupf, in dem du ein Lager aufschlagen kannst."),
  M("Dig", "cs", "Grabe ein tiefes Loch oder schaffe einen unterirdischen Durchgang."),
  M("Drill", "c", "Zerstöre eine Tür, eine Wand oder eine Barriere."),
  M("Grounding", "c", "Du kannst gegen einen Gegner mit Stärke +1 reagieren, statt mit der verlangten Fertigkeit."),
  M("Dust Cloud", "s", "Entweder vermeidest du ein Manöver eines Gegners, das speziell gegen dich gerichtet ist, oder du entkommst einem Kampf oder einer Gefahr.")]}
]},

{id: "traits", t: "Merkmale", p: 70, b: [
 "Nun folgen die einzigartigen Merkmale jedes Berufs. Der Einfachheit halber wiederhole ich auch die berufsspezifischen Merkmale aus Household Band I. Zwischen Büchern hin und her zu blättern ist eine lästige Sache!",
 {t: "h", x: "Berufsspezifische Merkmale"},
 {t: "karten", x: [
  T("Master at Arms", "*Berufsspezifisches Merkmal der Soldaten.* Wähle eine Nahkampfwaffe, zum Beispiel eine Steinaxt, eine Knochensichel oder ein Katana. Du darfst keine Duellwaffe und kein Keysket wählen, da sie für deine Kampfbedürfnisse viel zu empfindlich sind. Erhalte einen Freien Neuwurf für alle Würfe, die deine gewählte Waffe betreffen, sowie für alle Aktions- oder Reaktionswürfe im Kampf mit dieser Waffe."),
  T("Know-it-all", "*Berufsspezifisches Merkmal der Gelehrte.* Erhalte einen Freien Neuwurf, um dich an Informationen über das House und den Garten, ihre Geschichte und die berühmten Littlings zu erinnern, die sie bewohnen."),
  T("Sharpshooter", "*Berufsspezifisches Merkmal der Jäger.* Erhalte einen Freien Neuwurf für alle Würfe mit einer Fernkampfwaffe oder Feuerwaffe. Außerdem beginnst du Kapitel I mit einer kostenlosen Fernkampf- oder Feuerwaffe deiner Wahl."),
  T("Shadow", "*Berufsspezifisches Merkmal der Verbrecher.* Erhalte einen Freien Neuwurf, um dich zu verstecken, zu schleichen oder jemanden durch eine Stadt zu verfolgen."),
  T("Swordfighter", "*Berufsspezifisches Merkmal der Duellanten.* Wähle eine Duellwaffe, zum Beispiel einen Scimithorn, einen Splinter, eine Orikatana oder eine Knochen-Shashka. Erhalte einen Freien Neuwurf für alle Würfe, die deine gewählte Waffe betreffen, sowie für alle Aktions- oder Reaktionswürfe im Kampf. Außerdem beginnst du dein erstes Kapitel mit einer kostenlosen Waffe deiner gewählten Art. Sie ist ein Erbstück, mit dem du dich eng verbunden fühlst."),
  T("Specialty", "*Berufsspezifisches Merkmal der Wayfarers.* Wähle und erhalte ein beliebiges Merkmal aus der Liste der Merkmale. Wenn die Spielleitung und die anderen Spieler einverstanden sind, darfst du auch ein berufsspezifisches Merkmal wählen."),
  T("Animal Companion", "*Berufsspezifisches Merkmal der Tierführer.* Erhalte einen Animal Companion deiner Wahl unter: Hummel, Käfer, Gecko, Maus, Nachtfalter, Maulwurf, Marienkäfer, Frosch. Bist du mit deinem Animal Companion zusammen, giltst du immer als bewaffnet. Du kannst den Animal Companion deiner Figur frei bewegen und ihn kleine Aufgaben erledigen oder einfache Aktionen ausführen lassen, etwa jemanden ablenken oder Wache stehen. Außerdem kann sich jeder Animal Companion in bestimmten Umständen als hilfreich erweisen und dir Freie Neuwürfe gewähren. Weitere Informationen findest du in den jeweiligen Abschnitten dieses Kapitels oder in Household Band I.")]},
 {t: "h", x: "Merkmale"},
 {t: "karten", x: [
  T("Small", "Erhalte eine Hilfe beim Verstecken, Schleichen und Balancieren. Du bist so leicht, dass dein Gewicht nicht einmal den Gang deines Reittiers beeinflusst."),
  T("Cast-iron Stomach", "Du kannst jedes Essen, auch verdorbenes, ohne einen Zustand zu erleiden verzehren. Erhalte +1 und einen Freien Neuwurf bei allen Würfen, um dem Zustand Krank, Betrunken oder Vergiftet zu entgehen."),
  T("Rider", "Erhalte einen Freien Neuwurf beim Reiten, beim Kampf gegen Gegner vom Reittier aus und bei der Pflege deines Reittiers."),
  T("Naturalist", "Erhalte einen Freien Neuwurf, um Pflanzen zu erkennen, Natürliche Mixturen herzustellen, essbare Pflanzen oder Pilze zu finden und giftige Substanzen zu entdecken."),
  T("Survival Instinct", "Erhalte einen Freien Neuwurf für alle Reaktionswürfe gegen Bestien, einschließlich Colossi. Außerdem kannst du den ersten Punkt Schweren Stress, den du in einer Sitzung erleidest, ignorieren."),
  T("Swimmer", "Erhalte einen Freien Neuwurf beim Schwimmen, beim Luftanhalten und beim Handeln unter Wasser."),
  T("Camp Life", "Erhalte +1 auf alle Würfe, die du im Lager ablegst."),
  T("Master of Disguise", "Erhalte +1 auf alle Würfe, um dich zu verkleiden oder jemanden zu imitieren."),
  T("Tough Hide", "Erhalte +1 auf alle Würfe, um extremem Wetter standzuhalten und jahreszeitliche Zustände zu vermeiden."),
  T("Little Friend", "Du hast ein kleines Haustier dabei, etwa ein Glühwürmchen, einen Laubfrosch, eine Ameise oder eine kleine Maus. Einmal pro Sitzung kann dein kleiner Freund dir eine Hilfe gewähren."),
  T("Undaunted", "Erhalte einen Freien Neuwurf bei allen Würfen auf Wille und beim Widerstehen von Furcht oder Schock. Wirst du Verängstigt, kannst du stattdessen einen anderen Zustand deiner Wahl erleiden."),
  T("At Home …", "Wähle eine Region des Gartens: die Mother Road, die Brambles, die Grasslands, die Barrens, die Woodlands oder die Rushes. Notiere dieses Merkmal auf deinem Bogen als „Zu Hause auf der Mother Road“ oder „Zu Hause in den Brambles“ und so weiter. Bist du in deiner gewählten Region, verirrst du dich nie. Außerdem erhältst du einen Freien Neuwurf, um dich an nützliche Informationen zu erinnern, Hinweise oder Ressourcen zu finden, Kontakte aufzuspüren und Hinterhalte oder andere Gefahren in deiner gewählten Region zu vermeiden.")]},
 {t: "q", x: "Es gibt keinen Ort wie den Garten.", wer: "Gnome-Sprichwort"}
]}
);
})();
