/* Spielleitung › Pride & Prejudice & Centipedes: Einführungsabenteuer (Grundbuch Anhang II, S.306–313) */
(function(){
var H = window.HH_TEXT = window.HH_TEXT || {};
function bild(n, w){ return {t: "bild", s: "grundbuch-" + n, w: w}; }
var A = [];
var PP = "anhang-ii-pride-prejudice-centipedes";

A.push({id: "p-vorwort", t: "An die Spielleitung", p: 306, b: [
  "Liebe Spielleitung, dieser Anhang ist nur für deine Augen bestimmt, denn er enthält alles, was du brauchst, um das Abenteuer **Pride & Prejudice & Centipedes** zu spielen. Wer nicht Spielleitung ist, sollte nicht weiterlesen, sonst verdirbt er sich die Geschichte.",
  "Die Figuren treffen sich im **Blue Rat**, einer kleinen Taverne in Stairside, und geraten dort in eine Untersuchung der Großen Kaiserlichen Armee. Ein Undine und ein großer Hundertfüßer stehlen Futter und Vieh aus Garnisonen und Botschaften, und die Stadt steht kurz vor einem diplomatischen Zwischenfall.",
  "Lieutenant D’Arcy sucht verzweifelt den Dieb, um die aufgebrachte Bevölkerung zu beruhigen, während Miss Elizabeth Abbott überzeugt ist, dass ein wildes Tier dahintersteckt. Die Figuren müssen der einfallsreichen Elizabeth und dem aufrechten D’Arcy helfen, das Rätsel zu lösen, und vielleicht auch dafür sorgen, dass die beiden ihre Liebe erkennen.",
  {t: "h", x: "Vorwort"},
  "An der steilen Mauer der Great Stairs, dort wo sich die Entry Hall zum Short Hallway öffnet, liegt im Hearth ein fröhliches kleines Dorf namens **Stairside**. Die ländliche Gegend scheint außerhalb der Zeit zu liegen, mit ihren vielen Mäuseranches und weiten Feldern, und bezaubert jeden Reisenden.",
  "In den staubigen Gassen von Stairside steht eine altmodische Taverne. Das knarrende Holzschild hat schon bessere Tage gesehen, verkündet aber noch immer vergnügt „The Blue Rat“. Unsere Littlings haben sich hier versammelt … aber warum?",
  "Bevor du mit der Erzählung beginnst, wende dich an deine Spieler:innen. Frag sie, ob sie gerade aufgewacht sind und zum Frühstück herunterkommen. Sind sie alle zusammen oder hat jede:r einen eigenen Tisch? Kennen sie sich? Sind sie gemeinsam angereist? Wollen sie gleich weiter? Vielleicht ist es ihr erstes Treffen.",
  "In dieser Phase musst du nicht genau und detailliert sein. Sorge nur dafür, dass alle einen Moment haben, sich vorzustellen und in ihre Figur zu finden. Sei geduldig und beziehe alle in die Erzählung ein. Ist die Stimmung gesetzt, kann das Abenteuer beginnen."]});

A.push({id: "p-blaurat", t: "Der Blue Rat", p: 307, b: [
  bild("s307-" + PP, 200),
  "Old Abbott, der Wirt des Blue Rat, putzt hinter dem Tresen Gläser. Der alte Boggart verliert nie sein gütiges, faltiges Lächeln. Kennt er die Figuren, plaudert er freundlich mit ihnen, sonst stellt er höfliche Fragen wie ein guter Gastgeber.",
  "Plötzlich geht die Tür auf. Ein kalter Luftzug weht herein, und eine Handvoll Soldaten der Großen Kaiserlichen Armee des Realm betritt die Taverne. Die Littlings verteilen sich pflichtbewusst in der Schankstube, rücken Tische und Stühle und suchen nach etwas. Alle Gäste sollen sitzen bleiben und die Hände sichtbar halten. Die vielen Fragen des verdutzten Old Abbott bleiben unbeantwortet.",
  "Der Anführer der Truppe ist ein schwarzhaariger Fairy, ein gutaussehender, wortkarger junger Littling, der sich als **Lieutenant François Guillaume D’Arcy** vorstellt.",
  {t: "q", x: "Bitte bleibt alle sitzen und arbeitet mit uns zusammen. Wir ermitteln im Auftrag des Wildhüter-Generals Jean Claude Van-Claude vom Mount Guignol."},
  "D’Arcy reicht Abbott einen Durchsuchungsbefehl. Dann durchkämmt er mit überlegener Miene die Taverne und blickt auf jeden Gast herab. Die Soldaten treten an die Figuren heran und bitten um ihre Ausweispapiere, höflich, aber kühl, ganz im Ton des Lieutenants.",
  "Jetzt, liebe Spielleitung, lass deine Spieler:innen zu Wort kommen. Wie reagieren sie, wenn sie nach ihren Papieren gefragt werden? Fühlen sie sich beschuldigt, wie Verbrecher behandelt, oder sind sie bereit mitzuwirken? Verbirgt jemand etwas? Dräng nichts, lass ihnen Zeit zum Spielen. Es ist schließlich ihre Geschichte.",
  bild("s308-" + PP, 200),
  {t: "q", x: "Lieutenant D’Arcy, dieses Verhalten ist beleidigend, Ihr solltet sofort unsere Taverne verlassen!"},
  "Eine junge Boggart namens **Elizabeth**, die temperamentvolle Enkelin von Old Abbott, stürmt aus der Küche und baut sich vor dem Lieutenant auf. Er starrt sie kalt an, völlig unbeeindruckt.",
  {t: "q", x: "Miss Elizabeth, bitte macht keine Szene. Wir sind in amtlicher Angelegenheit hier."},
  "Die beiden geraten in Streit, während die verlegene Wachtruppe versucht, ihre Arbeit fortzusetzen. Der Wortwechsel wird so hitzig, dass man kaum noch versteht, worum es geht. Wer eingreifen oder die Lage verstehen will, muss zuerst einen **einfachen Aktionswurf** bestehen.",
  "Da vermutlich zum ersten Mal jemand am Tisch die Würfel nimmt, ist das die ideale Gelegenheit, die Regeln mit allen zu wiederholen. Erkläre, dass jede:r selbst wählen kann, wie sie oder er handelt, welche Fertigkeit sie einsetzt und in welchem Feld. Hier ein paar Beispiele:",
  {t: "ul", x: [
    "Die Figur versucht sich zu konzentrieren, um dem Streit zu folgen (**Einsicht + Wissenschaft**).",
    "Die Figur versucht, den Streit zu beenden (**Autorität + Krieg**).",
    "Die Figur versucht zu vermitteln (**Redegewandtheit + Gesellschaft**).",
    "Die Figur nutzt die Verwirrung, um den Durchsuchungsbefehl zu „borgen“ (**Geschick + Straße**)."]},
  "Findet jemand eine originelle oder besonders kluge Lösung und erzielt einen guten Erfolg, kannst du sie oder ihn mit einem Ass in dem eingesetzten Feld belohnen.",
  "Durch das Lesen des Durchsuchungsbefehls oder indem sie D’Arcy zu einer Erklärung bewegen, begreifen die Figuren schließlich, was los ist: Aus den umliegenden Höfen sind mehrere Stück Vieh, vor allem Jagdmäuse, verschwunden, und D’Arcy soll den Dieb finden. Mit ein paar Nachfragen ist klar, dass der Lieutenant und Elizabeth die Lage sehr verschieden sehen.",
  "D’Arcy glaubt, der Dieb sei ein Littling, vielleicht sogar ein Boggart aus dem Dorf, und die Leute von Stairside behinderten die Ermittlung. Elizabeth dagegen ist überzeugt, dass irgendein wildes Tier für das fehlende Vieh verantwortlich ist und der Lieutenant nichts als ein voreingenommener Narr ist. Harte Worte, die ihren Großvater Old Abbott sofort beunruhigen.",
  "Auf dem Höhepunkt der Spannung nutzt D’Arcy die erste Gelegenheit, sich von Elizabeth zu entfernen und mit den Figuren zu sprechen. Ohne Umschweife fragt er sie, ob sie am Diebstahl beteiligt sind. Das verlangt einen **einfachen Reaktionswurf**: Bitte die Spieler:innen, mit **Wille + Gesellschaft** dem Druck der Anschuldigungen des Lieutenants zu widerstehen.",
  "Wer Erfolg hat, bleibt gelassen wie eine Münze, wer scheitert, erleidet den Zustand **Verängstigt**: Die Lage ist einfach zu angespannt!",
  "Zum Glück fallen die Folgen nicht allzu hart aus, denn keine der Figuren hat etwas mit dem Diebstahl zu tun, und D’Arcy erkennt das sofort. Alles in allem wirkt er wie ein vernünftiger, wenn auch etwas unhöflicher Littling. Als sich die Lage beruhigt, verlässt der Lieutenant die Taverne.",
  {t: "q", x: "Wenn ihr die Ermittlung unterstützen wollt, kommt bitte in der Garnison vorbei. Je eher wir den Dieb fassen, desto eher können wir diese leidige Geschichte vergessen. Guten Tag."},
  "Elizabeth dagegen kocht noch immer. Sie flüstert wütend von diesem „sturen Dickschädel von einem Soldaten, der nicht auf die Vernunft hören will“ und geht grummelnd zurück in die Küche.",
  "Jetzt müssen die Figuren eine Entscheidung treffen: Vertrauen sie dem jungen D’Arcy und folgen ihm zur Garnison, oder stellen sie sich auf Elizabeths Seite und helfen ihr, den Fall zu lösen?"]});

A.push({id: "p-kueche", t: "Die Küche", p: 309, b: [
  "Folgen die Figuren Elizabeth, finden sie sie in der Küche des Blue Rat, wo sie sich die Schürze bekleckert, die Finger verbrennt und unentwegt gegen den Lieutenant wettert.",
  "Als sie die Figuren sieht, gibt sie sich distanziert, ja sogar gereizt, besonders wenn diese D’Arcy nicht offen widersprochen haben. Bieten die Figuren ihre Hilfe an, ändert sich ihr Auftreten schlagartig, und sie erweist sich als ebenso einfallsreich wie klug. Kein Wunder, dass ihr Großvater sich ständig sorgt.",
  {t: "q", x: "D’Arcy sucht nur nach irgendeinem Landlittling, dem er die Schuld in die Schuhe schieben kann, das wollen Soldaten wie er doch! Er hört einfach nicht zu.", wer: "Elizabeth"},
  "Elizabeth ist sicher, den Ruf eines großen Tieres gehört zu haben, in der Nacht des Diebstahls: ein Fauchen, ein Brüllen oder etwas „Un-Littlinghaftes“, das durch die Gassen hallte. Sie sagt, kein Littling hätte all das Vieh ungesehen wegschaffen können. Wo sollte er es verstecken? Unmöglich, das ist bestimmt das Werk einer großen Bestie.",
  "Die Wahrheit lässt sich nur auf eine Weise erfahren: am Tatort."]});

A.push({id: "p-garnison", t: "Die Garnison", p: 309, b: [
  "Folgen die Figuren D’Arcy, erreichen sie bald die Garnison der Großen Kaiserlichen Armee. Der Ort ist umringt von einer wütenden Menge Littlings verschiedener Folks, viele in Uniform, und alle drängeln sich, um hineinzukommen. Der Lieutenant muss sich rasch hindurchkämpfen, während seine Soldaten zurückbleiben und die Menge in Schach halten.",
  "Fragen ihn die Figuren danach, bleibt D’Arcy kalt und steif wie immer, bis er schließlich nachgibt.",
  {t: "q", x: "Sie sind alle wütend. Ich weiß, dass Miss Elizabeth mich für einen herzlosen Soldaten hält. Aber wenn ich den Schuldigen nicht finde, riskieren wir einen diplomatischen Zwischenfall.", wer: "D’Arcy"},
  "D’Arcy erklärt, dass die fehlenden Mäuse aus den Ställen der Armee des Hearth und der Botschaft der Horde gestohlen wurden. Er vermutet ein Komplott einiger Littlings, die Unruhe in der Stadt stiften und die Folks gegeneinander aufbringen wollen.",
  "Alle verlangen, dass der Schuldige gefasst wird, und die Last der Ermittlung ruht auf den Schultern des jungen Lieutenants.",
  "Schnell zum Tatort!"]});

A.push({id: "p-tatort", t: "Der Tatort", p: 310, b: [
  "Der jüngste Diebstahl geschah in den Ställen der Horde-Botschaft, einem Holzgebäude unweit des Blue Rat, das ständig von einer Truppe der Soldaten der Great Blade bewacht wird. Diese Littlings tragen Helme oder Turbane und senfgelbe Uniformen. Sie wirken nicht besonders erpicht darauf, jemanden durchzulassen.",
  "Begleiten die Figuren D’Arcy, können sie sich auf seinen Einfluss verlassen und ungestört an den Tatort. Kommen sie mit Elizabeth, müssen sie einen **einfachen Aktionswurf** machen. Littlings mit Anstand **Elegant** oder höher erhalten jedoch eine Hilfe, wenn sie selbst mit den Wachen sprechen.",
  "Der Tatort ist chaotisch. In den staubigen Ställen standen offenbar mehrere kleinere Mäuse, nun herrscht Durcheinander: Die Haupttür hängt aus den Angeln, das Futter liegt verstreut, der Wassereimer ist umgekippt. Sobald sie eintreten, müssen die Figuren einen **kritischen Reaktionswurf** mit **Anmut + Straße** machen. Scheitern sie, rutscht die Figur in eine Schlammpfütze, besudelt Schuhe und Hose und verliert **eine Stufe Anstand**.",
  "Nach dem Betreten können die Figuren mit einem **einfachen Aktionswurf** nach Hinweisen oder Spuren suchen. Bei einem einfachen Erfolg finden sie eine Reihe von Schleifspuren, die ebenso gut von einem Littling wie von einem Tier stammen könnten. Bei einem kritischen Erfolg lösen sie das Rätsel: Das sind die Spuren eines Littlings **und** die eines Tieres! Nun gilt es, ihnen zu folgen."]});

A.push({id: "p-wand", t: "Die Wand hinauf", p: 310, b: [
  "Die Spuren führen aus den Ställen Richtung Stadtrand. Reisen die Figuren mit Elizabeth, können sie ihnen leicht folgen, sind sie aber mit D’Arcy unterwegs, gibt es einen Haken.",
  "Die Figur an der Spitze riskiert eine unangenehme Begegnung mit einem Eimer voll Schimmel und Tau. Eine alte Frau hat die Uniform des Lieutenants erkannt und will ihren Unmut über die Große Kaiserliche Armee an der Gruppe auslassen. Die Figuren müssen einen **kritischen Reaktionswurf** mit **Vorsicht + Straße** machen.",
  "Wer besteht, bekommt nur die Beschimpfungen der verärgerten Dame ins Gesicht. Wer scheitert, erleidet **3 Stress** und verliert **eine Stufe Anstand**. Bei einem einfachen Erfolg kann man wählen: Schadensbegrenzung oder den Verlust von Anstand vermeiden.",
  "Nach diesem Hinterhalt können die Figuren endlich zurück auf die Fährte, die sie zur mächtigen **Wall** führt. Dort scheinen die Spuren zu enden. Mit einem **kritischen Aktionswurf** müssen die Figuren den Rückschlag überwinden. Eine Figur kann:",
  {t: "ul", x: [
    "an der Wall nach weiteren Spuren suchen (**Erkundung + Straße**),",
    "hinaufklettern und nach einer Öffnung oder einem Versteck suchen (**Athletik + Straße**),",
    "genau auf verdächtige Geräusche lauschen (**Vorsicht + Straße**)."]},
  "Zum Glück kennt Elizabeth die Pflanzen und Tiere von Stairside sehr gut und kann jedem, der sie um Hilfe bittet, eine **Hilfe** sein.",
  "Die Wahrheit ist, dass Dieb und Bestie beide die Wall hinaufgeklettert sind, bis zu einer kleinen Öffnung hoch über dem Boden: ein Spalt, der in die dunklen **Inbetweens** führt. Die Figuren erreichen ihn nur, indem sie ebenfalls die Wall erklimmen und dabei über eingerollte Tapetenstücke gehen, die aus der Fläche ragen.",
  "Auf diesen schmalen Stegen die Wall hinaufzubalancieren ist nicht leicht, die Figuren müssen einen **kritischen Aktionswurf** bestehen. Zum Glück sind Training und Reflexe von Lieutenant D’Arcy allen eine **Hilfe**, die mit ihm reisen. Figuren, die scheitern, erleiden Stress.",
  "Je näher sie dem Ziel kommen, desto leichter wird der Aufstieg. Das, liebe Spielleitung, ist der ideale Moment, den Littling, der die Figuren begleitet, Elizabeth oder D’Arcy, ein wenig aus sich herausgehen zu lassen. Beide gestehen, dass sie traurig sind, diese Ermittlung ohne die Zustimmung des anderen zu führen.",
  "Elizabeth wiederholt immer wieder, wie sehr sie sich wünscht, der Lieutenant hätte auf sie gehört, doch ihr Ton ist nicht mehr ganz so wütend. Vielleicht sogar zärtlich. Als wollte sie ihn dabeihaben.",
  "Und D’Arcy? Sein mürrisches, kühles Stirnrunzeln bricht kurz auf, wenn er seufzt: Wenn sie ihm nur vertrauen würde!"]});

A.push({id: "p-inbetweens", t: "Die Inbetweens", p: 311, b: [
  "Nach den üblichen Wirren junger, unerwiderter Herzen erreicht die Gruppe schließlich ihr Ziel: einen Spalt hoch oben in der Wall, der in die Inbetweens führt.",
  "Jetzt, liebe Spielleitung, steigere die Spannung. Erzähle, wie die warme, helle Landschaft des Hearth hinter den Figuren allmählich verschwindet, während sie tiefer in die dunkle, stille Atmosphäre der staubigen Hohlräume zwischen den Mauern eintauchen. Hier gibt es keine Tapete, kein lackiertes Holz, nur bröckelnden Putz und nackte Ziegel, die um die Rohre und Knochen des House gebacken sind.",
  "Die Figuren müssen sich durch dunkle, düstere Gänge schlagen und über unheimliche, knarrende Trümmerhaufen steigen, um ein geheimes Versteck zu erreichen. Wollen sie sich anschleichen, müssen sie einen **kritischen Aktionswurf** bestehen, sonst können sie sich frei bewegen.",
  "Nach einem langen Marsch gelangt die Gruppe in einen weiten Raum zwischen den Rohrleitungen und einem großen Ziegel. In dem kugelförmigen Raum ist es fast dunkel. Dort finden die Figuren endlich die Diebe: einen untersetzten, zugänglich wirkenden **Undine** mit traurigem Gesichtsausdruck und einen schwarzen Hundertfüßer, so lang wie zehn Littlings, der sich wie ein Haustiergecko um ihn gerollt hat. Das sieht man nicht alle Tage!",
  bild("s312-" + PP, 200),
  "Der Littling, der sich hier mit dem Hundertfüßer verkrochen hat, heißt **Austin** und trägt die einfache Kleidung eines Bauern aus dem Hearth. Die Figuren müssen jetzt sehr vorsichtig sein, denn jeder Angriff oder jede gewalttätige Bewegung gegen Austin erzürnt den Hundertfüßer und löst sofort einen Kampf aus.",
  "Sind die Figuren mit Elizabeth gekommen, warnt sie, vorsichtig mit dem Hundertfüßer zu sein: Er sei eine seltene Art aus der Horde und wirke extrem verängstigt. Sind sie mit D’Arcy da, kommt der Lieutenant direkt zur Sache und befiehlt dem Undine, sich zu ergeben.",
  "Um den Dieb zum Reden zu bringen, ist ein **einfacher Aktionswurf** nötig. Sobald das gelingt, erzählt Austin, er habe den Hundertfüßer in einem kleinen Käfig eingesperrt gefunden. Das Tier kam aus weiter Ferne als Geschenk für einen Adligen im Realm und litt furchtbar, nachdem man es aus dem Basement fortgebracht hatte.",
  "Austin konnte so viel Traurigkeit nicht tatenlos mit ansehen und beschloss zu helfen, und am Ende wurden die beiden Freunde. Doch ein Geschöpf dieser Größe braucht viel Futter: Stehlen war ihr einziger Ausweg.",
  {t: "q", x: "Sie ist völlig unschuldig. Sie würde keiner Fliege etwas zuleide tun! Ich weiß, dass Stehlen falsch ist, aber wir hatten keine Wahl. Niemand sollte in einem Käfig leben müssen.", wer: "Austin"}]});

A.push({id: "p-finale", t: "Die Schlussszene", p: 312, b: [
  "Etwa jetzt, wenn die Figuren mit Elizabeth gekommen sind, platzt D’Arcy mit gezogener Waffe in den Raum und befiehlt der Boggart, zur Seite zu gehen: Er werde sie beschützen! Sind sie mit D’Arcy gekommen, tritt stattdessen Elizabeth auf, zerrt den Lieutenant am Arm und bittet ihn um Vorsicht.",
  "Der Hundertfüßer ist unschuldig, aber für die Bevölkerung gefährlich. Während die beiden Verliebten hin und her streiten, liegt es an den Figuren zu entscheiden: Versuchen sie, Austin zu überreden, sich der Justiz zu stellen, oder kämpfen sie und vertreiben die Bestie?",
  "Dieser Konflikt löst eine denkwürdige Szene aus, in der die Figuren entweder mit Austin verhandeln oder gegen den furchterregenden Hundertfüßer kämpfen müssen.",
  {t: "h", x: "Mit Austin verhandeln"},
  "Mit Austin zu diskutieren ist keine leichte Aufgabe: Der Undine ist fest von seinen Taten und guten Absichten überzeugt.",
  "In dieser Szene können die Spieler:innen Aktionswürfe machen, um Austin zur Zusammenarbeit zu bewegen. Haben alle ihren Zug gehabt, kannst du je nach Austins Stimmung Reaktionswürfe verlangen. Passende Beispiele:",
  {t: "ul", x: [
    "Austin appelliert an dein gutes Herz (**Care + Gesellschaft**).",
    "Austin belügt dich (**Einsicht + Gesellschaft**).",
    "Der Hundertfüßer schlägt um sich, um dir Angst zu machen (**Wille + Krieg**)."]},
  "Alle Aktions- und Reaktionswürfe gegen Austin haben **kritische Schwierigkeit**.",
  "Außerdem verbirgt Austin eine Wunde am Arm, der Beweis, dass nicht einmal er den Hundertfüßer völlig kontrollieren kann. Spricht eine Figur das an, erhält sie **+1** auf ihren nächsten Aktionswurf.",
  "Wenn du den Eindruck hast, dass Austin durch die Erfolge der Gruppe vollständig überzeugt ist, kann der Konflikt friedlich enden.",
  "Hat Austin dagegen nach sechs vollen Wurfrunden, also nachdem jede Figur 3 Aktionswürfe und 3 Reaktionswürfe gemacht hat, seine Meinung noch nicht geändert, wird der Hundertfüßer unruhig. Dann bleibt nur der Kampf.",
  "Ist er überzeugt, begreift Austin, dass er den Hundertfüßer nicht länger verstecken kann, und liefert sich mit gebrochenem Herzen samt seiner Freundin der Justiz aus. D’Arcy bringt die Gefangenen vor Gericht, und seine Soldaten treffen sie auf halbem Weg zurück in die Stadt.",
  "Gelingt es den Figuren nicht, Austin zu überzeugen, droht D’Arcy ihm mit gezogenen Waffen. Diese Gewalt erregt den Zorn des Hundertfüßers. Elizabeth tritt vor, um ihn zu beruhigen, doch es ist zu spät. Die Boggart wird verletzt, und der Lieutenant kümmert sich sofort um sie. Die Gruppe muss kämpfen."]});

A.push({id: "p-kampf", t: "Kampf gegen den Hundertfüßer", p: 313, b: [
  "Der Hundertfüßer greift die Figuren an, wenn:",
  {t: "ul", x: [
    "eine Figur Austin bedroht, angreift oder offen aggressiv auftritt,",
    "eine Figur versucht, Austin zu erpressen oder zu bestechen und ihn dadurch empört,",
    "die Hälfte der Figuren plus eine in derselben Runde bei ihren Aktions- oder Reaktionswürfen scheitert,",
    "Austin nicht überzeugt wird."]},
  "Das Datenblatt des Hundertfüßers findest du im Anhang „Gegner“: [[Riesenhundertfüßer: Der Schwanz|sl/gegner/g-riesenhf-schwanz]] und [[Riesenhundertfüßer|sl/gegner/g-riesenhf]].",
  "Besiegen sie den Hundertfüßer, löst er in seinem Schmerz ein Beben aus, das sie in den Inbetweens begraben könnte. Die Flucht verlangt einen **kritischen Reaktionswurf** mit **Athletik + Straße**. Nach der Katastrophe hört niemand je wieder etwas von Austin oder dem Hundertfüßer.",
  "Wird die Hälfte der Figuren besiegt, opfert sich D’Arcy, damit die anderen entkommen können, und bittet sie nur, Elizabeth in Sicherheit zu bringen. Im allgemeinen Chaos können sie nur tun, was er verlangt, während um sie herum alles einstürzt."]});

A.push({id: "p-epilog", t: "Epilog", p: 313, b: [
  "Ist der Fall auf eine von vielen Arten gelöst, können die Figuren sich ausruhen und ein Pint Pilzbier im Blue Rat genießen.",
  "Wurde Austin überredet, den Hundertfüßer auszuliefern, bietet die Große Kaiserliche Armee an, das Tier ins Basement zu eskortieren, wo es freigelassen wird. Lieutenant D’Arcy ist bereit, bei dem Undine ein Auge zuzudrücken und aktenkundig zu machen, dass Austin geflohen ist, bevor man ihn verhaften konnte.",
  "Wurde Elizabeth verletzt, als sie D’Arcy retten wollte, gibt der Lieutenant sich die Schuld, doch der gute Abbott hält ihn sofort davon ab und sagt, er sei stolz auf seine Enkelin.",
  "Hat D’Arcy sich geopfert, ist Elizabeth untröstlich. Sie beschließt, zum Piano zu reisen, um der Mutter des Lieutenants die traurige Nachricht persönlich zu überbringen.",
  "Sind D’Arcy und Elizabeth beide wohlauf, verfallen sie hoffnungslos und sofort wieder in ihr Gezanke. Wer mutig genug ist, sich zwischen die beiden hitzköpfigen Littlings zu stellen und ihnen klarzumachen, dass sie ineinander verliebt sind, muss einen **einfachen Aktionswurf** bestehen."]});

H["haus/sl/pride"] = A;
})();
