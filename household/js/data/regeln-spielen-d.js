/* Regeln › Wie man spielt, Teil 4 (Grundbuch S. 118–127): Schießen, Rangelei & Duell, Zustände, Anstand. Deutsche Übersetzung. */
(function(){
var K = "haus/regeln/spielen", L = (HH_TEXT[K] = HH_TEXT[K] || []);
L.push(
{id: "schiessen", t: "Schießen, Rangelei & Duell", p: 118, b: [
 {t: "h", x: "Schießen"},
 "Seit die Sluagh dem Kleinen Volk das Geheimnis des Schwarzpulvers beibrachten, haben sich Feuerwaffen schnell im ganzen House verbreitet und ältere Fernkampfwaffen verdrängt. Mit dem Fertigkeit Schießen triffst du Ziele, die sonst außerhalb deiner Reichweite lägen, mit Feuerwaffen, Fernkampfwaffen oder Wurfwaffen.",
 {t: "h", x: "Reichweite"},
 "Die Spielleitung legt die Entfernung zwischen dir und dem Ziel fest. Je nach Entfernung kann ein Ziel schwerer oder sogar unmöglich zu treffen sein.",
 {t: "ul", x: [
  "**Angrenzend:** Das Ziel ist ganz nah oder im Nahkampf.",
  "**Kurze Distanz:** Das Ziel ist nur wenige winzige Meter entfernt und schnell zu erreichen.",
  "**In Reichweite:** Das Ziel ist mehrere winzige Meter entfernt. Du bräuchtest einen ganzen Zug, um es zu erreichen.",
  "**Große Distanz:** Das Ziel ist sehr weit entfernt, deutlich außerhalb der Reichweite der meisten Littlings.",
  "**Außer Reichweite:** Das Ziel ist in Sichtweite, aber zu weit weg, um getroffen zu werden."]},
 "Ein angrenzendes Ziel kann mit jeder Waffe getroffen werden, auch mit Nahkampfwaffen. Ein Ziel in kurzer Distanz liegt außerhalb der Reichweite von Nahkampfwaffen, kann aber von allen Feuerwaffen, Fernkampf- und Wurfwaffen sowie Waffen mit Reichweite erreicht werden. Ein Ziel in Reichweite oder in großer Distanz kann nur mit einer Feuer- oder Fernkampfwaffe getroffen werden. Schießt du auf ein Ziel in großer Distanz, erleidest du immer −2 auf deinen Wurf, es sei denn, deine Waffe hat das Merkmal Accurate. Ein Ziel außer Reichweite ist schließlich völlig unerreichbar. Willst du es treffen, musst du einen Weg finden, näher heranzukommen.",
 {t: "h", x: "Nachladen"},
 "Alle Feuer- und Fernkampfwaffen des Household sind Einzelschuss-Waffen und müssen nach jedem Gebrauch nachgeladen werden. Eine Waffe nachzuladen ist eine komplexe Aktion, die einen ganzen Zug und beide Hände erfordert. Vielleicht musst du das Schießpulver genau in den Lauf schütten, die Kugel einsetzen und sie bis zum Ende des Laufs schieben. Oder du musst deine Armbrust spannen, indem du mit beiden Händen an der Sehne ziehst oder einen Hebel kurbelst.",
 "In Kämpfen, Fluchten und ähnlich hektischen Szenen kannst du deine Waffe mit einem kritischen Aktionswurf auf Geschick nachladen. Du kannst auch einen überzähligen kritischen Erfolg ausgeben, um deine Waffe unter allen Umständen schnell nachzuladen. Waffen mit dem Merkmal Double Barreled müssen zweimal nachgeladen werden.",
 "Um den Fluss der Geschichte zu erleichtern, empfehle ich, nicht über die Munition Buch zu führen. Hast du eine Waffe, hast du auch Munition. Nur in besonders spannenden Szenen oder nach einem problematischen Ereignis kann die Spielleitung festlegen, dass du nur noch wenige Kugeln hast. Das ist ein guter Weg, die Spannung zu erhöhen!",
 {t: "h", x: "Deckung"},
 "Wenn du an der Reihe bist, beschossen zu werden, kannst du immer nach einem umgekippten Tisch, einem Pilz oder einem anderen Gegenstand suchen, der dir Teildeckung oder Volldeckung bietet.",
 {t: "ul", x: [
  "**Teildeckung:** Du erhältst +1 auf Reaktionswürfe, um Kugeln oder anderen Fernangriffen auszuweichen. Für deine Aktion musst du die Deckung verlassen oder erleidest −1 auf deinen Wurf. Ist in der Nähe eine niedrige Mauer oder etwas Ähnliches, kannst du einen überzähligen einfachen Erfolg ausgeben, um Teildeckung zu erreichen.",
  "**Volldeckung:** Du bestehst automatisch jeden Reaktionswurf, um Kugeln und Fernangriffen auszuweichen. Für deine Aktion musst du die Deckung verlassen oder erleidest −3 auf deinen Wurf. Ist in der Nähe eine hohe Mauer oder ein großes Hindernis, kannst du einen überzähligen kritischen Erfolg ausgeben, um Volldeckung zu erreichen."]},

 {t: "h", x: "Rangelei"},
 "Man muss nicht immer die Klingen ziehen, um einen Streit zu lösen. Eine gute Rangelei ist eine Debatte mit den Fäusten, die jedem die Gelegenheit gibt, seinen Standpunkt mit mäßiger Gewalt darzulegen. Kämpfen die Figuren und ihre Littling-Gegner mit bloßen Händen, erklärt die Spielleitung den Beginn einer Rangelei.",
 "Eine Rangelei ist viel einfacher als eine Kampfszene, sie ist schnell erledigt und hat keine schweren Folgen. Alle Würfe in einer Rangelei werden im Feld Krieg abgelegt, und die Schwierigkeit der Würfe richtet sich nach der Schwierigkeit des Gegners. Für jeden Erfolg bei einem Aktions- oder Reaktionswurf erleidet der Gegner 1 Stress. Für jeden Misserfolg erleidet die Figur den Stress, mit der üblichen Möglichkeit zu Schadensbegrenzung.",
 "In der Praxis funktionieren die Aktionszüge und Reaktionszüge einer Rangelei genau gleich, mit der einzigen Ausnahme, dass du im Aktionszug selbst entscheidest, welchen Fertigkeit du würfelst, während im Reaktionszug die Spielleitung die Fertigkeit bestimmt, mit dem du reagierst, wie üblich.",
 {t: "h", x: "Gegner in der Rangelei"},
 "Nur Littling-Gegner können an einer Rangelei teilnehmen. In einer Rangelei können die Gegner keine ihrer Merkmale odes Manövers einsetzen. Allein die Schwierigkeit und die Stress-Kästchen des Gegners zählen.",
 {t: "h", x: "K. o."},
 "Die Rangelei endet, wenn alle Figuren oder Gegner besiegt sind, wenn alle aufgeben oder wenn alle fliehen. Sie endet auch, sobald jemand eine Waffe zieht und damit in einen echten Kampf übergeht.",
 "Wirst du Überlastet, heißt das, dass du einen Schlag zu viel eingesteckt hast und nicht mehr kämpfen kannst. Du wirst entweder bewusstlos geschlagen oder gibst auf. Du verlässt die Rangelei jedenfalls mit einer klingenden Niederlage und erleidest den Zustand Erschöpft. Fühlst du dich schon Erschöpft, wirst du Verletzt. Wegen einer einfachen Rangelei musst du nie Aussteigen!",

 {t: "h", x: "Duell"},
 "Duelle sind nervenaufreibende Konflikte, in denen eine Figur direkt einem tapferen Herausforderer gegenübertreten muss. Das Duell schlechthin ist ein romantischer Degenkampf. Er ist der Höhepunkt jedes Abenteuerromans, der Moment, in dem der Held seinem Erzfeind gegenübersteht, um seine Freunde und vielleicht sogar das House zu retten.",
 "Es gibt jedoch viele Arten von Duellen, und nicht alle sind so vorhersehbar. Duelle können Bälle bei Hof oder Verführungsspiele sein. Es können Straßenkämpfe oder Armdrücken sein. Sogar eine Debatte kann zu einem echten Duell werden! Jede einprägsame Herausforderung zwischen zwei Littlings lässt sich mit den Regeln dieses Kapitels nachbilden.",
 "Duelle bestehen aus zwei sich abwechselnden Zugarten. In der einen führst du den Angriff und legst einen Aktionswurf ab. In der anderen hältst du dem Angriff deines Herausforderers stand und musst mit dem richtigen Reaktionswurf antworten. Du kannst den Herausforderer in beiden Zugarten treffen und läufst ebenso in beiden Gefahr, getroffen zu werden.",
 {t: "h", x: "Der Herausforderer"},
 "In einem Duell übernimmt die Spielleitung die Rolle des Herausforderers und würfelt, in einer einzigartigen Ausnahme, auch selbst für ihn wie eine Spielerin oder ein Spieler für seine Figur. Der Würfelpool der Spielleitung richtet sich nach Talent und Können des Herausforderers.",
 {t: "ul", x: [
  "**4 Würfel:** ein unerfahrener oder nicht besonders guter Fechter.",
  "**5 Würfel:** ein geschickter Fechter, der weiß, was er tut.",
  "**6 Würfel:** ein ausgezeichneter Fechter oder ein Offizier in Bestform.",
  "**7 Würfel:** ein berühmter Duellant, dessen Taten im ganzen House bekannt sind.",
  "**8 Würfel:** ein Meisterduellant von legendärem Talent."]},
 {t: "h", x: "Den Angriff führen"},
 "Führst du den Angriff, kannst du den Aktionswurf wählen, mit dem du den Herausforderer bedrängst und ihm mit gezielten Angriffen auf den Fersen bleibst.",
 {t: "bsp", b: [["Spieler:in", "„En garde, Schurke!“ Ich ziehe die Nadel und stürze mich ohne zu zögern auf ihn."]]},
 "Im Zweifel kannst du auf die Fertigkeit Kampf würfeln, um den Herausforderer direkt anzugreifen. Du kannst aber auch kreativ sein und kühne Lösungen finden, um die Fertigkeit ins Spiel zu bringen, in dem du dich sicherer fühlst. Einige Beispiele:",
 {t: "ul", x: [
  "Ich täusche eine Finte an, um den Herausforderer zu verwirren. Ich würfle Geschick.",
  "Ich lasse meine Klinge gegen die des Herausforderers krachen. Ich würfle Stärke.",
  "Ich durchschneide das Seil, an dem der Kronleuchter hängt. Ich würfle Handwerk."]},
 {t: "h", x: "Dem Angriff standhalten"},
 "Hältst du einem Angriff stand, bedrängt dich der Herausforderer und drängt dich in die Defensive. Dann bestimmt die Spielleitung die Fertigkeit, den du für deinen Reaktionswurf nutzen musst.",
 {t: "bsp", b: [["Spielleitung", "Der Herausforderer überbrückt mit langen Schritten die Entfernung zwischen euch und greift an: „Ergib dich, du Kakerlake!“"]]},
 "Wie zuvor kann die Spielleitung dich einfach um einen Wurf auf Kampf bitten oder versuchen, originelle Herausforderungen zu finden, die dich mit Fertigkeiten in die Enge treiben, in denen du im Nachteil bist. Einige Beispiele:",
 {t: "ul", x: [
  "Der Herausforderer täuscht eine Finte an, um dich zu verwirren. Würfle Einsicht.",
  "Der Herausforderer drängt dich auf einen hängenden Balken. Würfle Anmut.",
  "Der Herausforderer führt mit der Klinge eine Reihe schneller Stöße. Würfle Ausweichen."]},
 {t: "h", x: "Gewinnen und Verlieren"},
 "In einem Duell zählst du Erfolge nicht wie sonst. Dein Ziel ist, einen besseren Erfolg zu erzielen als dein Gegenüber. Würfelst du zum Beispiel einen kritischen Erfolg und der Herausforderer einen extremen Erfolg, hat der Herausforderer den Angriff gewonnen. Würfelst du einen kritischen Erfolg + einen einfachen Erfolg und der Herausforderer nur einen kritischen Erfolg, hast du den Angriff gewonnen. Erzielen du und der Herausforderer gleiche Erfolge, ist der Angriff unentschieden. Keiner von euch wird getroffen, und ihr geht zum nächsten Angriff über.",
 "Gewinnst du einen Angriff, erleidet der Herausforderer einen Jab, körperlich oder im übertragenen Sinn. Hat der Herausforderer 3 Jabs erlitten, ist er besiegt. Verlierst du einen Angriff, erleidest du einen passenden Zustand, den die Spielleitung wählt. Meist wirst du nach dem ersten verlorenen Angriff Erschöpft, falls du es nicht schon bist. Wirst du Gebrochen, hast du das Duell verloren. Der Herausforderer hat dein Schicksal in der Hand, er kann dich gefangen nehmen oder dich verspotten, wenn er unhöflich ist.",
 "In einem Duell verursacht jeder Manöver, der sonst Stress verursachen würde, stattdessen einen Jab. Der Herausforderer ist jedoch stärker als ein durchschnittlicher Gegner, deshalb kannst du jedas Manöver in einem Duell nur einmal einsetzen.",
 {t: "h", x: "Neuwürfe"},
 "Sowohl du als auch die Spielleitung könnt einen Neuwurf wagen oder All In gehen, aber die Spielleitung kann nie Freie Neuwürfe machen. Nach dem ersten Wurf hat, wer weniger erzielt hat, das Recht, zuerst einen Neuwurf zu machen, falls möglich.",
 {t: "box", h: "Geheimnisvoller Herausforderer (optionale Regel)", b: ["Die Spielleitung kann die Spannung noch höher treiben, indem sie ihre Würfe geheim hält. Diese kleine Variante genügt, um selbst den geschicktesten Duellanten weiche Knie zu machen!"]},
 {t: "box", h: "Strong Spots und Schwachstellen (optionale Regel)", b: [
  "Die Spielleitung kann heimlich bis zu 3 Strong Spots für den Herausforderer wählen. Jeder Strong Spot ist ein Fertigkeit, etwa Geschick oder Stärke, in dem der Herausforderer ein wahrer Experte ist. Legst du einen Aktionswurf mit einem Fertigkeit ab, der ein Strong Spot des Herausforderers ist, erhält die Spielleitung +1 auf ihren Wurf.",
  "Ebenso kann die Spielleitung dem Herausforderer bis zu 3 Schwachstellen geben. Legst du einen Aktionswurf mit einem Fertigkeit ab, der eine Schwachstelle des Herausforderers ist, erleidet die Spielleitung −1 auf ihren Wurf.",
  "Strong Spots oder Schwachstellen deines Herausforderers findest du mit jedem Manöver, der sonst erlaubt, die Schwachstelle eines Gegners zu finden. Jeder Strong Spot und jeder Schwachstelle kann in einem Duell nur einmal ins Spiel kommen."]},
 {t: "h", x: "Vergleichende Würfe"},
 "Ich rate den Spieler:innen allgemein, jede Meinungsverschiedenheit zwischen Figuren durch Rollenspiel zu lösen, ohne zu den Würfeln zu greifen. Wird es aber je absolut notwendig, können die Spieler:innen die Regeln dieses Kapitels nutzen, um mit vergleichenden Würfen (Gegenwürfe) zu bestimmen, welche ihrer Figuren die Oberhand behält."
]},

{id: "zustaende", t: "Zustände", p: 122, b: [
 "Eltern und Erziehungsberechtigte im ganzen House weisen ihre weniger gewissenhaften Kinder oft mit einem lauten „Zieh dich an!“ und einem schrillen „Kämm dir die Haare!“ zurecht, was selten eine Reaktion hervorruft. Vielleicht sind diese fürsorglichen Menschen aufdringlich, aber ihre Sorgen sind berechtigt: Wer auf Abenteuer geht, sollte immer sehr auf Gesundheit und Anstand achten.",
 "Zustände stehen für deinen körperlichen und seelischen Zustand und fassen zusammen, wie es dir geht und wie du dich fühlst. Zustände kommen ins Spiel, wenn du gefährlichen oder anstrengenden Umständen begegnest, und sie machen alles komplizierter.",
 "Anstand steht dafür, wie du dich gibst, für deinen Stil und nicht zuletzt für deine Körperpflege. Ein hohes Anstand heißt, dass du gepflegt und gut gekleidet aussiehst oder sogar bereit für ein großes Ereignis bist. Ein niedriges Anstand heißt dagegen, dass du ungehobelt und schäbig wirkst. Anstand ist wichtig im Umgang mit der feinen Gesellschaft oder mit zwielichtigem Volk und kommt generell ins Spiel, wann immer jemand dein Äußeres beurteilt.",
 {t: "h", x: "Zustände"},
 "Auf deinem Bogen stehen 8 Haupt-Zustände. Einige davon sind je einem der Felder zugeordnet und geben dir −1, wann immer du im jeweiligen Feld würfelst. Andere bringen besondere Nachteile mit sich und hindern dich daran, allen Stress loszuwerden. Die Spielleitung kann diese Zustände auch als Erschwernisse werten, die deine Handlung auf bedeutendere Weise stören. Die Haupt-Zustände sind:",
 {t: "ul", x: [
  "**Beschämt:** −1 in Gesellschaft",
  "**Verwirrt:** −1 in Wissenschaft",
  "**Verletzt:** −1 in Krieg",
  "**Verängstigt:** −1 in Straße",
  "**Erschöpft:** keine Folgen",
  "**Krank:** Du hast immer mindestens 3 Stress.",
  "**Vergiftet:** Einmal pro Runde riskierst du, 1 Stress zu erleiden.",
  "**Gebrochen:** zusätzlich −1 auf alle Würfe, dein Stress kann nicht unter das Kritische Kästchen sinken."]},
 {t: "h", x: "Einen Zustand erhalten"},
 "Es gibt 3 Wege, einen Zustand zu erhalten:",
 {t: "ul", x: [
  "Misslingt dir ein Wurf, kann die Spielleitung bestimmen, dass du als Konsequenz einen Zustand erleidest.",
  "Du willst +1 auf einen Aktions- oder Reaktionswurf und entscheidest dich freiwillig, einen Zustand zu erleiden, um ihn zu bekommen.",
  "Du erreichst das Kritische Kästchen deines Stress und erleidest sofort einen Zustand."]},
 "Misslingt dir ein Wurf, der Spuren an deiner Figur hinterlässt, erleidest du einen Zustand, der zu den Umständen und zum Feld deines Misserfolgs passt. In Sonderfällen kann die Spielleitung dir außerdem zusätzlichen Stress geben, wenn du einen Zustand erleidest. Das kann sein, wenn du einen extremen Erfolg brauchst und nicht einmal einen einfachen Erfolg erzielst, oder wenn dir eine Handlung so gefährlich misslingt, dass bloßer Stress als Konsequenz nicht genügen würde.",
 {t: "bsp", b: [["Spielleitung", "Dir ist der Wurf auf Wille + Krieg misslungen, mit dem du der Angst widerstehen wolltest. Die Spinne hebt ihre Beine und schreit mit aller Kraft. Du bist Verängstigt."]]},
 "Bevor du einen Aktions- oder Reaktionswurf ablegst, kannst du entscheiden, einen Zustand zu erleiden, um +1 oder sogar noch größere Hilfe zu bekommen. Du bleibst zum Beispiel die ganze Nacht wach, um dein Keysket zu reparieren, und erhältst +1 auf deinen Wurf auf Handwerk, wirst dafür aber Erschöpft.",
 {t: "bsp", b: [["Sarada", "Ich muss die Spinne um jeden Preis erledigen. Ich renne auf sie zu und versuche, sie zwischen die Augen zu treffen, ohne an meine eigene Sicherheit zu denken. Ich würde gern Verletzt werden und dafür +1 auf meinen nächsten Wurf auf Kampf erhalten."]]},
 "Schließlich erleidest du immer sofort einen passenden Zustand, wenn du das Kritische Kästchen deines Stress ausfüllst, je nach Umständen und Feld deines Misserfolgs.",
 {t: "bsp", b: [["Spielleitung", "Dir ist der kritische Wurf auf Athletik + Krieg misslungen, um dich im Sattel der aufbäumenden Maus zu halten. Du erleidest 3 Stress, die zusammen mit den früheren über das Kritische Kästchen hinausgehen. Die Maus bäumt sich weiter auf und schüttelt dich, bis dir der Kopf schwirrt. Du bist sehr Verwirrt."]]},
 "Hast du bereits 3 Zustände und solltest einen vierten erleiden, wirst du stattdessen Gebrochen. Von da an kannst du keine weiteren Zustände mehr erleiden, bis du geheilt bist.",
 {t: "h", x: "Einen Zustand entfernen"},
 "Einen Zustand zu entfernen braucht Zeit und Aufmerksamkeit. Du kannst Zustände nur entfernen, wenn du vor Gefahren sicher bist und kein unmittelbares Risiko läufst, zum Beispiel wenn du die Gelegenheit hast, dich auszuruhen und Stress abzubauen, oder wenn du nach Hause, in dein Hotelzimmer oder ins Lager zurückkehrst.",
 "Du kannst Zustände entfernen, indem du bestimmte Würfe ablegst, Münzen zahlst oder mit deinen Freunden interagierst. Auf den folgenden Seiten findest du kurze Beschreibungen der Zustände und nützliche Hinweise, wie du sie entfernst. Du kannst höchstens 2 Zustände pro Tag entfernen. Misslingt ein Versuch, kannst du denselben Zustand erst am nächsten Tag wieder versuchen. Versuchst du, einen Zustand allein zu entfernen, hast du immer −1.",
{t: "karten", x: [
  {t: "box", h: "Beschämt", b: [
  "−1 auf alle Würfe im Feld Gesellschaft.",
  "Du kannst Beschämt werden, weil du dich zum Narren gemacht hast, weil dich jemand schlecht dastehen ließ oder weil du eine brennende Demütigung oder Niederlage erleidest.",
  "Um diesen Zustand zu entfernen, musst du dir jemandes Respekt oder Achtung verdienen, etwa indem du jemandem in Not hilfst oder deinen Mut beweist. Alternativ kann ein Freund den Zustand entfernen, indem er dich mit einem kritischen Wurf auf Fürsorge + Gesellschaft aufmuntert.",
  "*„Du stolperst mitten im Ballsaal und reißt beim Fallen einen armen Kellner samt Tablett voller Kristallgläser mit. Alle drehen sich um: Du bist Beschämt.“*"]},
 {t: "box", h: "Verängstigt", b: [
  "−1 auf alle Würfe im Feld Straße.",
  "Du kannst Verängstigt werden, weil du etwas wirklich Beängstigendes, Plötzliches oder Schockierendes erlebt hast oder weil du in einer verzweifelten Lage festsitzt.",
  "Um diesen Zustand zu entfernen, nimm dir Zeit für ein offenes Gespräch mit einem deiner Freunde und geh ehrlich durch, was dir passiert ist und wie du dich dabei gefühlt hast. Alternativ kannst du dich deiner Angst stellen oder in einer schwierigen Lage deine Willenskraft oder deinen Mut beweisen.",
  "*„Die Spinne senkt sich über dir herab und verfehlt dein Versteck nur knapp. Als sie weiterzieht, bist du endlich sicher, aber auch sehr Verängstigt.“*"]},
 {t: "box", h: "Verwirrt", b: [
  "−1 auf alle Würfe im Feld Wissenschaft.",
  "Du kannst Verwirrt werden, weil du den Faden verloren oder dich zu sehr konzentriert hast, weil du einen Schlag auf den Kopf bekommen hast oder weil du aufgebracht, wütend oder abgelenkt bist.",
  "Um diesen Zustand zu entfernen, musst du dir Zeit nehmen, den Kopf freizubekommen oder zu entspannen, etwa indem du 2 Münzen ausgibst, um essen oder ins Theater zu gehen.",
  "*„Du beginnst, alle Bücher im Arbeitszimmer nacheinander zu lesen, in der Hoffnung, eine Spur zu finden. Du findest nichts, und obendrein bist du hinterher verwirrter als zuvor.“*"]},
 {t: "box", h: "Erschöpft", b: [
  "Du erleidest keinen Nachteil, bist aber einen Schritt näher dran, Gebrochen zu werden.",
  "Du kannst Erschöpft werden nach großer Anstrengung oder nachdem du zu lange nicht genug gegessen, getrunken oder geschlafen hast.",
  "Um diesen Zustand zu entfernen, schlafe in einem warmen Bett oder iss in einem Restaurant gut, was 2 Münzen kostet. Im Lager kannst du oder ein Freund einen kritischen Wurf auf Handwerk + Gesellschaft ablegen, um ein schönes Essen zuzubereiten, das alle, die davon essen, ausgeruht fühlen lässt.",
  "*„Während die anderen ruhen, bleibst du wach und hältst Wache. Als dich endlich jemand ablöst, merkst du, dass du dich sehr Erschöpft fühlst.“*"]},
 {t: "box", h: "Verletzt", b: [
  "−1 auf alle Würfe im Feld Krieg.",
  "Du kannst Verletzt werden, wenn du eine große Wunde erleidest, wenn dich ein Feind richtig hart trifft oder wenn du aus großer Höhe fällst.",
  "Um diesen Zustand zu entfernen, lege einen kritischen Wurf auf Fürsorge + Wissenschaft ab. Alternativ kannst du in der Stadt zu einem Arzt gehen, der sich für 2 Münzen um deine Wunden kümmert.",
  "*„Du verlierst den Halt und stürzt unglücklich in die Schlucht. Beim Aufprall hast du einen schlimm verstauchten Knöchel und üble Prellungen. Du bist Verletzt.“*"]},
 {t: "box", h: "Krank", b: [
  "Du hast immer mindestens 3 Stress, auch nach einer Rast oder einer Verschnaufpause.",
  "Du kannst Krank werden, weil du in der Kälte draußen schlafen musstest, weil du etwas Verdorbenes gegessen hast oder weil du mit brennenden Pflanzen oder schädlichen Sporen in Berührung gekommen bist.",
  "Um diesen Zustand zu entfernen, verbringe 3 Tage, ohne einen anderen Zustand zu erleiden, bei gutem Essen und mit einem Unterschlupf.",
  "*„Es scheint, als wäre die Pilzpastete, die du neulich gegessen hast, nicht mehr ganz frisch gewesen. Die Krämpfe im Magen und die Übelkeit sagen dir, dass du Krank bist.“*"]},
 {t: "box", h: "Vergiftet", b: [
  "Zu Beginn eines Zuges wirft die Spielleitung einen Zahlenwürfel. Ist das Ergebnis gerade, erleidest du 1 Stress. Bist du Überlastet und erleidest durch diesen Zustand zusätzlichen Stress, wirst du Gebrochen, musst aber nicht Aussteigen.",
  "Du kannst Vergiftet werden, weil du mit einer giftigen Substanz in Berührung gekommen oder von einer widerlichen Bestie verwundet worden bist.",
  "Um diesen Zustand zu entfernen, kannst du mit einem kritischen Wurf auf Erkundung + Wissenschaft ein Gegenmittel herstellen oder eines für 3 Münzen kaufen. Gelegentlich kann die Spielleitung entscheiden, dass du für die Wirkung eines bestimmten Gifts seltene, schwer zu findende Zutaten brauchst.",
  "*„Der Schnitt von der Klaue des Tausendfüßlers ist nicht wirklich tief, aber dein Arm verkrampft. Du wurdest Vergiftet.“*"]},
 {t: "box", h: "Gebrochen", b: [
  "Zusätzlich −1 auf alle Würfe. Du hast immer mindestens 8 Stress, auch nach einer Rast oder einer Verschnaufpause.",
  "Hast du bereits 3 Zustände und solltest einen vierten erleiden, wirst du stattdessen Gebrochen. Du kannst keinen anderen Zustand erleiden, bis du einen entfernt hast.",
  "Um diesen Zustand zu entfernen, kannst du einen extremen Wurf auf Fürsorge + Wissenschaft ablegen oder für 4 Münzen ins Krankenhaus gehen.",
  "*„Dieser Schlag ist der Tropfen, der das Fass zum Überlaufen bringt. Du hast schon zu viele Zustände, du bist Gebrochen!“*"]}]},
 {t: "h", x: "Allgemeine Zustände"},
 "Hier findest du einige seltenere Zustände, die nicht auf dem Bogen stehen. Du kannst gern neue Zustände erfinden, wenn sie dein Abenteuer unterhaltsamer und packender machen.",
{t: "karten", x: [
  {t: "box", h: "Betrunken", b: [
  "−1 auf Würfe, um das Gleichgewicht zu halten, zu bezaubern oder zu lügen oder um dich nicht verführen oder betrügen zu lassen.",
  "Du kannst Betrunken werden, wenn du zu viel Alkohol trinkst. Die Spielleitung kann dich einen Wurf auf Stärke + Krieg ablegen lassen, um zu sehen, wie gut du deinen Alkohol verträgst.",
  "Um diesen Zustand zu entfernen, kannst du eine gute Nacht schlafen, wachst aber Erschöpft auf.",
  "*„Es fühlt sich an, als hättest du ein Glas zu viel getrunken, denn selbst als die Musik aufhört, dreht sich der Raum weiter. Du solltest nach Hause gehen, du bist Betrunken!“*"]},
 {t: "box", h: "Geblendet", b: [
  "−1 auf Würfe, die Sehvermögen erfordern.",
  "Du kannst Geblendet werden, wenn dich helles Licht trifft oder wenn dir etwas in die Augen gerät.",
  "Um diesen Zustand zu entfernen, kannst du dir Zeit nehmen, die Augen auszuruhen oder gründlich auszuspülen.",
  "*„Die dichte Staubwolke hüllt dich ein. Du versuchst, dir die Augen sauber zu reiben, aber du bist Geblendet.“*"]},
 {t: "box", h: "Lächerlich", b: [
  "Dein Anstand kann manchmal zur Erschwernis werden.",
  "Du kannst Lächerlich werden, wenn dir ein Wurf misslingt, um ein höheres Anstand zu erreichen, wenn du eine Torte ins Gesicht bekommst oder wenn du deine Schamhaftigkeit verlierst.",
  "Um diesen Zustand zu entfernen, kehre nach Hause oder in dein Zimmer zurück und senke freiwillig dein Anstand.",
  "*„Als du in den Spiegel siehst, wird dir plötzlich klar, dass dieser Friseur kein Profi war. Mit diesen gepuderten Locken siehst du einfach Lächerlich aus.“*"]},
 {t: "box", h: "Schuldig", b: [
  "−1 auf Würfe, um zu lügen oder auf böse oder unangemessene Weise zu handeln.",
  "Du kannst Schuldig werden, wenn dir klar wird, dass du jemandem Unrecht getan hast, der es nicht verdient hat, wenn dir jemand die Leviten liest oder wenn du Hilfe oder Mitgefühl von einem früheren Opfer erhältst.",
  "Um diesen Zustand zu entfernen, kannst du dich bessern und deine früheren Untaten wiedergutmachen. Alternativ kann ein Freund den Zustand entfernen, indem er mit einem kritischen Wurf auf Autorität + Gesellschaft eine Aussprache herbeiführt.",
  "*„Der Littling, den du bestehlen wolltest, bemerkt dich und ruft zu deiner großen Überraschung nicht nach den Gendarmen. Er lächelt und bietet dir ein paar Münzen an: ‚Ich habe selbst schwere Zeiten durchgemacht.‘ Dir schnürt es die Kehle zu, als du das Geld nimmst, und du fühlst dich Schuldig.“*"]}]},
]},

{id: "decorum", t: "Anstand", p: 126, b: [
 "Du kannst nicht ernsthaft hoffen, in Lumpen oder mit zerzaustem Schnurrbart beim Großen Julball in Tournoire aufzutreten, aber ebenso wenig kannst du ehrlich glauben, dass dich die schlimmsten Banden von Tuberdam ernst nehmen, wenn du eine gepuderte Perücke trägst. Ich meine: So oder so ist unbestreitbar, dass der Anstand eines Littlings immer zählt und die Meinung, die andere von dir haben, drastisch beeinflusst.",
 "Es gibt 5 Stufen von Anstand:",
 {t: "ul", x: [
  "**Ungehobelt:** Du bist schmutzig und schlecht gekleidet, du siehst rundum verrufen aus.",
  "**Schäbig:** Du trägst zerlumpte Kleider, würdig eines Raufbolds.",
  "**Ordentlich:** Du bist gekämmt und für die meisten Anlässe angemessen gekleidet.",
  "**Elegant:** Du achtest sehr auf dein Äußeres und trägst feine Kleidung.",
  "**Pompös:** Du bist nach der neuesten Mode frisiert und voll geschminkt. Deine Kleidung ist praktisch ein Kunstwerk."]},
 {t: "h", x: "Hilfe und Erschwernis"},
 "Dein Anstand kann je nach Umständen und den Leuten, mit denen du zusammen bist, hilfreich oder hinderlich sein. Dein Anstand ist aber nicht immer für die Geschichte wichtig und sollte nur ins Spiel kommen, wenn es wirklich einen Unterschied macht oder wenn es nützlich, interessant oder unterhaltsam ist.",
 "Ein hohes Anstand ist hilfreich im Umgang mit adligen oder höheren Littlings und wenn du in der feinen Gesellschaft einen guten Eindruck machen willst. Um an noblen Orten oder äußerst noblen Festen teilzunehmen, kann zudem eine strenge Kleiderordnung gelten. Bei solchen Anlässen ist ein hohes Anstand sogar eine wichtige Voraussetzung. Ein niedriges Anstand lässt dich hingegen wie einen Rowdy aussehen und ist nur eine Erschwernis, wenn du das Vertrauen von Würdenträgern oder politischen Figuren gewinnen willst.",
 "Bedenke, dass ein hohes Anstand nicht immer die beste Idee ist, denn Elegant oder Pompös auszusehen kann auch eine Erschwernis sein, wenn du dich in den guten Littlings der Elendsviertel und in Kriminelle einfühlen willst oder wenn du einfach nicht auffallen und nicht die Aufmerksamkeit von Dieben und Profiteuren erregen willst. Ebenso kann ein niedriges Anstand hilfreich sein, wenn du jemanden einschüchtern oder dich unter die Kriminellen schlimmer Banden mischen willst.",
 "Hinzu kommt: Auf jeden Littling des Household, der von eleganter Kleidung und gestutzten Frisuren verzaubert ist, kommt ein anderer, der viel lieber mit einem verwahrlosten Littling mit etwas Moschus zusammen wäre. Geschmäcker sind verschieden!",
 {t: "h", x: "Anstand verlieren"},
 "Es gibt 4 Wege, dein Anstand zu senken:",
 {t: "ul", x: [
  "Misslingt dir ein Wurf, kann die Spielleitung als Konsequenz dein Anstand senken.",
  "Du willst +1 auf einen Wurf und senkst freiwillig dein Anstand, um ihn zu bekommen.",
  "Du verlierst die Voraussetzungen für deine aktuelle Anstand-Stufe.",
  "Du entscheidest dich, dein Anstand zu senken."]},
 "Misslingt dir ein Wurf, der deine Figur schmutzig machen oder ihre Kleidung ruinieren könnte, kann die Spielleitung dein Anstand senken.",
 {t: "bsp", b: [["Spielleitung", "Du springst ab und machst dich auf eine harte Landung gefasst … die überraschend von einem Haufen warmer Mäuseköttel abgefedert wird. Senke dein Anstand."]]},
 "Bevor du einen Aktions- oder Reaktionswurf ablegst, kannst du entscheiden, dein Anstand für +1 oder eine noch größere Hilfe zu senken.",
 {t: "bsp", b: [["Jacob", "Ich reiße mir den Ärmel vom Hemd und benutze ihn als Verband für die Wunde. Ich würde gern mein Anstand senken, um +1 auf den Wurf auf Fürsorge zu bekommen."]]},
 "Um Elegant oder Pompös zu sein, musst du außerdem passende Kleidung tragen. Verlierst du diese kostbaren Kleidungsstücke aus irgendeinem Grund oder beschmutzt sie, kannst du diese Stufe nicht mehr beanspruchen.",
 {t: "bsp", b: [["Spielleitung", "Während du auf der Toilette warst, hat jemand deine Jacke und sogar deinen Hut gestohlen. Ohne deine elegante Kleidung bist du nicht mehr Elegant und fällst auf Ordentlich zurück."]]},
 "Selbstverständlich kannst du dein Anstand jederzeit aus beliebigem Grund senken, vielleicht indem du die gute Kleidung ausziehst oder dich etwas schmutzig machst und deine Frisur zerzausst.",
 {t: "bsp", b: [["Sarada", "Ich konnte es kaum erwarten, dieses dumme Kleid loszuwerden. Ich nehme das Make-up ab und ziehe wieder meine Reisekleidung an. Ich wäre viel lieber wieder Ordentlich, als auch nur eine Sekunde länger Elegant zu bleiben!"]]},
 {t: "h", x: "Anstand erhöhen"},
 "Du kannst dein Anstand erhöhen, indem du bestimmte Handlungen ausführst oder die Dienste eines Barbiers, Friseurs oder Wäschers bezahlst. Außerdem brauchst du neue Kleidung, die du immer kaufen oder … ausleihen kannst.",
{t: "karten", x: [
  {t: "box", h: "Von Ungehobelt zu Schäbig", b: [
  "Wasche dich und deine Kleidung in einer Pfütze oder unter einem Leck der Piping. Oder nimm ein schönes warmes Bad in einer einfachen Wanne für 1 Münze.",
  "*„Während deine Kleider auf der Pilzkappe trocknen, genießt du ein gutes Bad in einer Tau-Pfütze. Nachdem du dich angezogen hast, bist du Schäbig.“*"]},
 {t: "box", h: "Von Schäbig zu Ordentlich", b: [
  "Putz dich gründlich in einem gut ausgestatteten Bad heraus und kauf neue Kleidung. Oder besuche den Barbier oder Friseur und lass dich für 2 Münzen herrichten.",
  "*„Der Barbier säubert dein Gesicht, und du betrachtest dein frisch rasiertes Spiegelbild. Du bist jetzt Ordentlich.“*"]},
 {t: "box", h: "Von Ordentlich zu Elegant", b: [
  "Erfordert elegante Kleidung. Du besuchst einen feinen Barbier oder Friseur für 2 Münzen. Oder lege einen kritischen Wurf auf Anmut + Wissenschaft ab, um dich oder einen Freund zu stylen. Misslingt er, erhöht der arme Littling sein Anstand trotzdem, erleidet aber auch den Zustand Lächerlich.",
  "*„Deine rostfarbene Tunika fließt weich um dich. Du nimmst dir einen Moment, um die zarte, schimmelartige Stickerei zu bewundern, bevor du aufbrichst. Du bist wahrhaft Elegant.“*"]},
 {t: "box", h: "Von Elegant zu Pompös", b: [
  "Erfordert Galakleidung. Lass dich in einem Schönheitssalon herausputzen. Make-up und Frisur, Bart und Schnurrbart inklusive, zum bescheidenen Preis von 3 Münzen. Oder lege einen extremen Wurf auf Anmut + Wissenschaft ab, um dich oder einen Freund herauszuputzen. Misslingt er, erhöht der arme Littling sein Anstand trotzdem, erleidet aber auch den Zustand Lächerlich.",
  "*„Du bist wirklich stolz auf die weiche, voluminöse Frisur, die man dir gemacht hat. Und erst das glänzende Make-up! Du siehst einfach Pompös aus. Nicht umsonst nennt man das den besten Salon der Dining Hall.“*"]}]},
]}
);
})();
