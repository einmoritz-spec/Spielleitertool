/* Spielleitung › Gegner, Teil B: Littlings (Grundbuch Anhang I, S.283–297) */
(function(){
var H = window.HH_TEXT = window.HH_TEXT || {};
var A = [];
function G(id, t, p, g){ g.t = "gegner"; A.push({id: id, t: t, p: p, b: [g]}); }

G("g-hooligans", "Hooligans", 283, {typ: "basic", lv: 1, st: 9, cr: [5],
  mv: "All the Way, Guys!", tr: "Littling", ot: "Double Trouble, Triple Threat",
  ak: ["Die Hooligans greifen dich als Gruppe an. Reagiere mit Kampf.",
    "Die Hooligans versuchen, dich mit Beleidigungen zu provozieren. Reagiere mit Wille.",
    "Die Hooligans bewerfen dich mit Sandkörnern und Nagelspitzen. Reagiere mit Ausweichen.",
    "Die Hooligans springen auf dich und versuchen, dich zu Boden zu drücken. Reagiere mit Stärke.",
    "Die Hooligans stürmen kopfüber auf dich los. Reagiere mit Athletik.",
    "Die Hooligans starren dich böse an und warten auf deinen nächsten Zug. **Sie greifen nicht an.**"],
  tx: ["Hooligans sind hitzköpfige Littlings, die keinen Grund brauchen, um sich zu prügeln. Ob rauflustige Betrunkene, kleine Kriminelle oder ehrbare Bürger mit einem schlechten Tag: Hooligans suchen nur einen Vorwand, um einen Streit anzufangen. Zum Glück sind sie nie bewaffnet, höchstens mit ein paar improvisierten Knüppeln und versteckten Schlagringen … man weiß ja nie."],
  zg: [["All the Way, Guys!", "Die Hooligans rufen Verstärkung oder feuern sich gegenseitig an. Von nun an erleiden alle Figuren, die in ihrem Reaktionszug Stress erleiden, 1 zusätzlichen Stress."]]});

G("g-gendarmen", "Gendarmen", 283, {typ: "basic", lv: 1, st: 9, cr: [4],
  mv: "Stop them!", tr: "Littling, Double Trouble", ot: "Armed, Triple Threat, Shooters",
  ak: ["Die Gendarmen greifen dich mit Schlagstöcken und Besteck an. Reagiere mit Kampf.",
    "Die Gendarmen versuchen, dich einzukreisen. Reagiere mit Vorsicht.",
    "Die Gendarmen packen und zerren an dir. Reagiere mit Stärke.",
    "Die Gendarmen pfeifen auf ihren Trillerpfeifen und rufen Verstärkung. Reagiere mit Wille.",
    "Die Gendarmen versuchen, dich zu packen. Reagiere mit Ausweichen.",
    "Die Gendarmen zerstreuen sich, ohne wirklich etwas zu tun. **Sie greifen nicht an.**"],
  tx: ["Gendarmen sind Littlings, die in den Städten und Siedlungen des House für Recht und Ordnung sorgen. Im Realm tragen sie hellgrüne Uniformen und gehören zur Royal Gendarmerie, in den Freedomes tragen sie dunkelrote Jacken. Im Hearth sind sie Agenten in hellblauen Hemden, die direkt den Sheriffs der Hearth Army unterstehen, und in der Horde heißen sie Miliz und tragen senffarbene Jacken.", "Manche Gendarmen sind mit Schlagstöcken, Halbscheren und Pistolen bewaffnet, andere mit Musketen und Bajonetten."],
  zg: [["Stop them!", "Die Gendarmen versuchen, dich aufzuhalten oder auf dich zu schießen. Figuren, die keinen kritischen Reaktionswurf auf Ausweichen + Krieg bestehen, erhalten −1 auf ihren nächsten Wurf."]]});

G("g-duellanten", "Duellanten", 286, {typ: "critical", lv: 2, st: 7, cr: [2, 4, 6],
  mv: "Parry oder Disarm oder Fluster", tr: "Littling, Armed, Nimble, Counter-attack", ot: "Double Trouble, Hard to Kill",
  ak: ["Die Duellanten führen eine Reihe schneller Stiche aus. Reagiere mit Ausweichen.",
    "Die Duellanten versuchen eine Finte. Reagiere mit Einsicht.",
    "Die Duellanten versuchen, dich aus dem Gleichgewicht zu bringen. Reagiere mit Anmut.",
    "Die Duellanten kommen schneidend und ausfallend auf dich zu. Reagiere mit Kampf.",
    "Die Duellanten halten ihre Angriffe zurück und warten, dass du die Deckung senkst. Reagiere mit Vorsicht.",
    "Die Duellanten kreuzen die Klingen mit dir. Reagiere mit Geschick."],
  tx: ["Übermütige Abenteurer, die sich einen Namen machen wollen, Adlige, die ihr Leben der Fechtkunst gewidmet haben, oder stille Assassinen mit tödlichen Techniken: Duellanten sind furchterregende und unberechenbare Gegner. Immer wenn sie ihr Crucial Box erreichen, kann die Spielleitung frei oder zufällig wählen, welchen ihrer Moves sie einsetzen."],
  zg: [["Parry", "Die Duellanten ignorieren den nächsten erfolgreichen Angriff gegen sich."],
    ["Disarm", "Die Duellanten entwaffnen die Figur, die sie das Crucial Box füllen ließ."],
    ["Fluster", "Die Duellanten verspotten die Figuren, versuchen ihnen die Hose aufzuknöpfen, ihnen den Hut ins Gesicht zu ziehen oder sie zu blamieren, indem sie ihnen im Weg stehen. Reagiere mit Anmut + Krieg. Figuren, denen das misslingt, werden Beschämt."]]});

G("g-spaeher", "Späher", 286, {typ: "critical", lv: 2, st: 6, cr: [3],
  mv: "Surround", tr: "Littling, Shooters, Unreachable, Counter-attack", ot: "Double Trouble, Triple Threat, Barrage, Hard to Kill, Nimble",
  ak: ["Die Späher schießen aus allen Richtungen, du musst Deckung suchen. Reagiere mit Ermittlung.",
    "Die Späher legen dir eine Falle. Reagiere mit Einsicht.",
    "Die Späher werden still. Dann geben sie genau gezielte Schüsse ab. Reagiere mit Vorsicht.",
    "Die Späher nehmen dich mit Fernkampfwaffen ins Visier. Reagiere mit Ausweichen.",
    "Die Späher versuchen, dich einzukreisen. Reagiere mit Vorsicht.",
    "Die Späher lösen sich in Luft auf und greifen dann aus allen Richtungen an. Reagiere mit Wille."],
  tx: ["Späher sind Littlings mit scharfen Augen und Ohren. Sie werden von Ordnungskräften, wohlhabenden Bürgern und manchmal sogar von Briganten eingesetzt, um eine Region im Auge zu behalten und den Umkreis zu patrouillieren. Bei der Aufklärung agieren Späher meist in kleinen Gruppen und bewegen sich lautlos, um ihr Ziel zu finden und einzukreisen. Manche beziehen Verteidigungsstellung auf einem geschützten Aussichtspunkt."],
  zg: [["Surround", "Die Späher zerstreuen sich und umzingeln die Gruppe. Reagiere mit Vorsicht + Straße. Figuren, denen das misslingt, werden Verwirrt. Sind sie bereits Verwirrt, werden sie Verängstigt."]]});

G("g-soldaten", "Soldaten", 287, {typ: "critical", lv: 2, st: 6, cr: [4],
  mv: "Storm", tr: "Littling, Armed", ot: "Double Trouble, Triple Threat, Shooters, Barrage, Hard to Kill, Armored",
  bild: ["grundbuch-s287-anhang-i-opponents", 200],
  ak: ["Die Soldaten packen oder rempeln dich an. Reagiere mit Stärke.",
    "Die Soldaten spielen schmutzig oder versuchen, dich in eine Falle zu locken. Reagiere mit Einsicht.",
    "Die Soldaten greifen dich mit gezogenen Waffen an. Reagiere mit Kampf.",
    "Die Soldaten schießen auf dich. Reagiere mit Ausweichen.",
    "Die Soldaten versuchen, dich einzukreisen. Reagiere mit Vorsicht.",
    "Die Soldaten schreien und schubsen dich mit ihren Waffen herum. Reagiere mit Wille."],
  tx: ["Soldaten sind das schlagende Herz der Armee. Sie patrouillieren meist an den Grenzen und in der Wildnis oder verteidigen wichtige Gebiete großer Städte. Die wichtigsten Streitkräfte des Household sind die Große Kaiserliche Armee (zuständig für Gebietskontrolle und die Wahrung der Ordnung im ganzen House), die Hearth Army, die Porcelain Army der Free Dominions und die Horde-Armee. Soldaten tragen verstärkte Jacken oder leichte Kürasse in den Farben und Symbolen ihrer Nation und benutzen meist Stangenwaffen, einhändige Waffen, Pistolen und Musketen."],
  zg: [["Storm", "Die Soldaten geben nicht so leicht auf. Von nun an werden Figuren, denen in ihrem Reaktionszug nicht mindestens ein einfacher Erfolg gelingt, sofort Erschöpft. Sind sie bereits Erschöpft, werden sie Verletzt."]]});

G("g-kuerassiere", "Kürassiere", 290, {typ: "critical", lv: 3, st: 8, cr: [5],
  mv: "Defensive Formation", tr: "Littling, Armed, Double Trouble, Hard to Kill, Armored", ot: "Shooters, Shield",
  ak: ["Die Kürassiere heben ihre Schilde und drängen dich zurück. Reagiere mit Stärke.",
    "Die Kürassiere greifen dich frontal an. Reagiere mit Kampf.",
    "Die Kürassiere versuchen, euch zu zerstreuen. Reagiere mit Einsicht.",
    "Die Kürassiere halten dich mit ihren Speeren auf Abstand. Reagiere mit Athletik.",
    "Die Kürassiere versuchen, dich einzukreisen. Reagiere mit Vorsicht.",
    "Die Kürassiere stoßen schnell mit ihren Speeren zu. Reagiere mit Geschick."],
  tx: ["Manche Gendarmen und Soldaten tragen schwere Rüstungen und Helme mit den Symbolen ihrer Armee. Kürassiere werden zum Schutz wichtiger Ziele oder für Durchsuchungen eingesetzt und bewegen sich immer in Gruppen. Sie bevorzugen Stangenwaffen oder zweihändige Waffen und haben manchmal gepanzerte Schützen in ihrer Gruppe."],
  zg: [["Defensive Formation", "Die Kürassiere rücken Schulter an Schulter zusammen. Von nun an erhalten Figuren −1 auf alle Aktionswürfe zum Angriff."]]});

G("g-ehrengarde", "Ehrengarde", 293, {typ: "critical", lv: 4, st: 9, cr: [4, 8],
  mv: "Defensive Formation, dann Storm", tr: "Littling, Armed, Double Trouble, Hard to Kill, Armored, Shield, Shooters", ot: "Triple Threat, Counter-attack, Barrage",
  ak: ["Die Ehrengarde hebt die Schilde und drängt dich zurück. Reagiere mit Stärke.",
    "Die Ehrengarde hält dich mit ihren Speeren auf Abstand. Reagiere mit Athletik.",
    "Die Ehrengarde versucht, dich einzukreisen. Reagiere mit Vorsicht.",
    "Die Ehrengarde brüllt Befehle und nimmt Formation an. Reagiere mit Wille.",
    "Die Ehrengarde greift dich frontal an. Reagiere mit Kampf.",
    "Die Ehrengarde schießt in zwei abwechselnden Linien auf dich, du musst Deckung suchen. Reagiere mit Ermittlung."],
  tx: ["Nur die geschicktesten Littlings werden in eine Ehrengarde berufen. Sie tragen protzige schwere Rüstungen, stets glänzend poliert und geölt, und eskortieren Adlige, Botschafter und Offiziere. Die bestgeschützten Orte des House, wie der Highlight-Palast oder das Haus des Kalifen in Al Sehir, werden immer von Gruppen dieser Littlings bewacht, die hohe Schilde mit dem Emblem ihrer Nation tragen."],
  zg: [["Defensive Formation", "Die Soldaten der Ehrengarde rücken Schulter an Schulter zusammen. Von nun an erhalten Figuren −1 auf die Aktionswürfe zum Angriff."],
    ["Storm", "Die Soldaten der Ehrengarde geben nicht so leicht auf. Von nun an werden Figuren, denen in ihrem Reaktionszug nicht mindestens ein einfacher Erfolg gelingt, sofort Erschöpft. Sind sie bereits Erschöpft, werden sie Verletzt."]]});

G("g-meisterduellanten", "Meisterduellanten", 293, {typ: "critical", lv: 4, st: 11, cr: [2, 4, 6, 8, 10],
  mv: "Parry oder Disarm oder Fluster oder Pile On", tr: "Littling, Armed, Double Trouble, Hard to Kill, Nimble, Counter-attack", ot: "Triple Threat, Shooters",
  ak: ["Die Meisterduellanten führen eine Reihe schneller Stiche aus. Reagiere mit Ausweichen.",
    "Die Meisterduellanten setzen dir hart auf den Fersen nach. Reagiere mit Wille.",
    "Die Meisterduellanten springen über dich und greifen aus der Luft an. Reagiere mit Athletik.",
    "Die Meisterduellanten versuchen eine Finte. Reagiere mit Einsicht.",
    "Die Meisterduellanten kreuzen die Klingen mit dir. Reagiere mit Geschick.",
    "Die Meisterduellanten versuchen, dich aus dem Gleichgewicht zu bringen. Reagiere mit Anmut."],
  tx: ["Hochrangige Offiziere, Meister der Fechtakademien und stille Assassinen, bereit, bis zum letzten Atemzug zu kämpfen. Immer wenn die Meisterduellanten ihr Crucial Box erreichen, kann die Spielleitung frei oder zufällig wählen, welchen Move sie einsetzen."],
  zg: [["Parry", "Die Duellanten ignorieren den nächsten erfolgreichen Angriff gegen sich."],
    ["Disarm", "Die Duellanten entwaffnen die Figur, die sie das Crucial Box füllen ließ."],
    ["Fluster", "Die Duellanten verspotten die Figuren, versuchen ihnen die Hose aufzuknöpfen, ihnen den Hut ins Gesicht zu ziehen oder sie zu blamieren, indem sie ihnen im Weg stehen. Reagiere mit Anmut + Krieg. Figuren, denen das misslingt, werden Beschämt."],
    ["Pile On", "Die Duellanten konzentrieren sich auf den schwächsten Kämpfer. Die Figur mit dem höchsten Stress erleidet sofort 1 Stress. Wird sie dadurch Überstresst oder zum Aussteigen gezwungen, wird der Move wiederholt."]]});

G("g-goldenbacks", "Golden Backs", 295, {typ: "critical", lv: 5, st: 13, cr: [4, 7, 9, 11],
  mv: "Storm, High Altitude, Tailspin, To the End", tr: "Littling, Armed, Hard to Kill, Double Trouble, Armored, Nimble, Counter-attack",
  bild: ["grundbuch-s295-anhang-i-opponents", 170],
  ak: ["Die Golden Backs kreuzen die Schwerter mit dir. Reagiere mit Geschick.",
    "Die Golden Backs fliegen Kreise um dich und stoßen plötzlich zu. Reagiere mit Einsicht.",
    "Die Golden Backs greifen dich mit ihren Cocktailspeeren an. Reagiere mit Kampf.",
    "Die Golden Backs greifen mit schnellen akrobatischen Hieben an. Reagiere mit Anmut −1.",
    "Die Golden Backs fliegen mit Höchstgeschwindigkeit auf dich zu. Reagiere mit Ausweichen.",
    "Die Golden Backs steigen auf und stürzen sich plötzlich auf dich. Reagiere mit Vorsicht."],
  tx: ["**Stolz des Realm.** Die edelsten, am höchsten dekorierten Faeries haben die Chance, ihren Erbvertrag in einem feierlichen Ritual im Schatten des Great Window zu erneuern. Dadurch erhalten sie die Gabe des Wahren Flugs: die Fähigkeit, ohne Einschränkung und mit großer Geschwindigkeit zu fliegen. Die Besten unter ihnen erhalten außerdem eine kostbare Rüstung aus goldenem Rosenkäfer, deren Flügeldecken ihre Flügel schützen, ohne den Flug zu behindern.", "Diese blonden Ritter, so genannt nach der Farbe der Federbüsche auf ihren Helmen, sind der Stolz des Realm und die Hauptangriffstruppe der Großen Kaiserlichen Armee. Sie werden meist zur Verteidigung des Luftraums nahe Highlight und im Outhold eingesetzt, können aber auch in jeder Nation des House die Leitung kleiner Soldatengruppen übernehmen. Dank des Astraviya-Vertrags haben die Golden Backs inzwischen mehr Entscheidungsgewalt als jeder andere Offizier in jeder anderen Armee des Household, mit Ausnahme der Generäle."],
  zg: [["Storm", "Die Golden Backs gehen in Angriffsformation. Von nun an werden Figuren, denen in ihrem Reaktionszug nicht mindestens ein einfacher Erfolg gelingt, sofort Erschöpft. Sind sie bereits Erschöpft, werden sie Verletzt."],
    ["High Altitude", "Die Golden Backs steigen in die Luft. Sie können nur noch von Fernkampfwaffen, Feuerwaffen und fliegenden Faeries getroffen werden. Werden sie angegriffen, dürfen die Figuren auch mit Nahkampfwaffen kontern."],
    ["Tailspin", "Die Golden Backs vollführen ein Spiralmanöver und stürzen sich dann auf die Figuren. Danach kehren sie in die Höhe zurück. Figuren, die keinen extremen Reaktionswurf auf Athletik + Krieg bestehen, werden Verletzt. Sind sie bereits Verletzt, werden sie Gebrochen."],
    ["To the End", "Die Golden Backs landen und ziehen ihre Zwillings-Halbscheren. Sie verlieren den Trait Double Trouble und sind von nun an ein extremer Gegner."]]});

G("g-janitscharen", "Janitscharen", 296, {typ: "critical", lv: 5, st: 12, cr: [3, 6, 10],
  mv: "Red Fury, dann Rusted Blood, dann Revenant", tr: "Littling, Armed, Hard to Kill, Triple Threat, Shield, Armored, Shooters, Counter-attack, Rust",
  bild: ["grundbuch-s296-anhang-i-opponents", 200],
  ak: ["Die Janitscharen ziehen ihre Pistolen und schießen auf dich. Reagiere mit Ausweichen.",
    "Die Janitscharen greifen dich mit verrosteten Cogpesh an. Reagiere mit Kampf.",
    "Die Janitscharen richten ihre Waffen auf dich und rücken langsam näher. Reagiere mit Vorsicht.",
    "Die Janitscharen verstreuen mit jeder Bewegung Splitter roten Rosts. Reagiere mit Wille −1.",
    "Die Janitscharen springen in einem akrobatischen Manöver auf dich zu. Reagiere mit Anmut.",
    "Die Janitscharen kreuzen ihre Cogpesh mit deinen Waffen. Reagiere mit Geschick."],
  tx: ["Die Horde-Armee wählt die besten Sluagh ihrer Reihen aus, damit sie dem Korps der Janitscharen beitreten. Diese Littlings werden zur Roten Quelle geführt, wo Skullrider Vaqaärd sie einen Rusted Contract schließen lässt. So erhalten Janitscharen die Fähigkeit, verrostete Waffen und Rüstungen zu benutzen, ohne von der Krankheit darin betroffen zu werden. Danach dienen sie zum Schutz der Hauptstadt oder eines Emirs. Tragen sie ihre verrostete Rüstung nicht, erkennt man sie an den dünnen kupferfarbenen Adern unter ihrer Haut."],
  zg: [["Red Fury", "Die Janitscharen rufen die Macht des Rosts an und geraten in Raserei. Von nun an erhalten Figuren −1 auf alle Aktionswürfe zum Angriff."],
    ["Rusted Blood", "Rost fließt durch die Adern der Janitscharen und heilt jede ihrer Wunden. Die Janitscharen können in diesem Zug keinen Stress mehr erleiden."],
    ["Revenant", "Durch die Macht des Rosts schütteln die Janitscharen ihren Schmerz ab. Immer wenn die Janitscharen 1 Stress erleiden sollen, würfelt die Spielleitung mit einem Zahlenwürfel. Gerade: Die Janitscharen erleiden keinen Stress."]]});

G("g-cinder", "Cinder Knights", 297, {typ: "critical", lv: 5, st: 12, cr: [4, 9],
  mv: "Spin Attack, dann Juggernaut", tr: "Littling, Armed, Double Trouble, Heavily Armored",
  ak: ["Die Ritter wechseln schnell den Griff und greifen mit großer Wucht an. Reagiere mit Vorsicht.",
    "Die Ritter stoßen einen Kriegsschrei aus, der in ihren Helmen widerhallt. Reagiere mit Wille.",
    "Die Ritter führen mit ihren Zeremonienschlüsseln und Großscheren kraftvolle Schläge. Reagiere mit Kampf.",
    "Die Ritter schleudern ihre kreisenden Waffen auf dich, du musst Deckung suchen. Reagiere mit Ermittlung.",
    "Die Ritter stürmen kopfüber auf dich los. Reagiere mit Athletik.",
    "Die Ritter drängen dich gegen die Wand oder zu Boden. Reagiere mit Stärke −1."],
  tx: ["Nur die tapfersten Boggarts überstehen die zermürbende Ausbildung in Cinderhall und werden Ritter. Diese Kriegermönche, die sich dem Schutz des Hearth widmen, stützen sich auf einen Ashen Contract, der ihnen das Recht gibt, verzierte Rüstungen zu tragen, die in den Händen jedes anderen Littlings zu Asche zerfielen."],
  zg: [["Spin Attack", "Die Ritter wirbeln ihre Waffen. Figuren, denen ein kritischer Reaktionswurf auf Anmut + Krieg misslingt, fallen zu Boden. Gefallene Figuren müssen ihre Aktion nutzen, um wieder aufzustehen. Bis dahin erhalten sie −1 auf alle Würfe."],
    ["Juggernaut", "Die Ritter werden zum Juggernaut, und ihre legendäre Cinder-Rüstung wächst mit ihren vergrößerten Körpern mit. Sie verlieren den Trait Double Trouble, sind von nun an ein extremer Gegner und erhalten den Trait Large."]]});

G("g-porzellan", "Porcelain-Infanterie", 297, {typ: "critical", lv: 5, st: 15, cr: [3, 7, 10, 13],
  mv: "Charge, dann Defensive Formation, dann Charge, dann Water Retention", tr: "Littling, Armed, Double Trouble, Heavily Armored, Shooters, Barrage",
  ak: ["Die Infanterie schießt in zwei abwechselnden Linien auf dich, du musst Deckung suchen. Reagiere mit Ermittlung.",
    "Die Infanterie greift dich mit Doppelbartschlüsseln und Rasiermessern an. Reagiere mit Kampf.",
    "Die Infanterie prallt auf dich und drängt dich mit den Schultern. Reagiere mit Stärke.",
    "Die Infanterie nimmt Formation an und hält den Angriff zurück, bis deine Flanke ungeschützt ist. Reagiere mit Vorsicht.",
    "Die Infanterie stürmt mit gezogenen Waffen auf dich zu. Reagiere mit Athletik −1.",
    "Die Infanterie versucht ein Manöver, um dich zu zerstreuen. Reagiere mit Einsicht."],
  tx: ["Die Infanterie ist das Elitekorps der Porcelain Army der Free Dominions und besteht traditionell ganz aus Undinen. Sie tragen stolz perlweiße Rüstungen aus Porzellan, das im Steinbruch der Great Bowl abgebaut wird, einem extrem harten Material, das vom unablässigen Wasserfluss poliert wurde. Die Infanterie benutzt schwere Waffen und Doppelbartschlüssel, ist aber ebenso berühmt für ihre Präzision mit Musketen."],
  zg: [["Charge", "Die Porcelain-Infanterie stürmt mit Schlüsseln und Bajonetten auf dich zu. Figuren, die keinen kritischen Reaktionswurf auf Athletik + Krieg bestehen, werden Verletzt. Sind sie bereits Verletzt, werden sie Gebrochen."],
    ["Defensive Formation", "Die Porcelain-Infanterie nimmt Formation an. Von nun an erhalten Figuren −1 auf alle Aktionswürfe zum Angriff."],
    ["Water Retention", "Die Porcelain-Infanterie schwitzt stark und schüttelt Wunden und Erschöpfung ab. Die Porcelain-Infanterie kann in diesem Zug keinen Stress mehr erleiden."]]});

H["haus/sl/gegner"] = (H["haus/sl/gegner"] || []).concat(A);
})();
