/* Playwall › L (S. 235–240) */
var TA_PWT = window.TA_PWT || (window.TA_PWT = {});

/* L10: Sabotage-Leiste (S. 239) – 42 Felder in Schlangenlinie, anklickbar, Stand in localStorage „ta_l10“ */
function pwlLese(){ try{ var a = JSON.parse(localStorage.getItem("ta_l10") || "[]"); return Array.isArray(a) ? a : []; }catch(e){ return []; } }
function pwlKlick(el){
  var box = el.closest(".pwl-leiste"); el.classList.toggle("an");
  var an = [].map.call(box.querySelectorAll(".pwl-f.an"), function(f){ return +f.getAttribute("data-n"); });
  try{ localStorage.setItem("ta_l10", JSON.stringify(an)); }catch(e){}
  box.querySelector(".pwl-z").textContent = an.length;
}
function pwlLeer(el){
  try{ localStorage.removeItem("ta_l10"); }catch(e){}
  var box = el.closest(".pwl-leiste"); [].forEach.call(box.querySelectorAll(".pwl-f.an"), function(f){ f.classList.remove("an"); });
  box.querySelector(".pwl-z").textContent = 0;
}
function pwlLeiste(){
  var an = pwlLese(), h = "";
  for(var r = 0; r < 6; r++){
    h += '<div class="pwl-reihe ' + (r === 5 ? "ende" : r % 2 ? "li" : "re") + '">';
    for(var i = 0; i < 7; i++){ var n = r % 2 ? r * 7 + 7 - i : r * 7 + 1 + i;
      h += '<button type="button" class="pwl-f' + (an.indexOf(n) > -1 ? " an" : "") + '" data-n="' + n + '" onclick="pwlKlick(this)">' + n + '</button>'; }
    h += '</div>';
  }
  return '<div class="pwl-leiste">' + h + '<div class="pwl-stand"><span><span class="pwl-z">' + an.length + '</span> von 42</span><i onclick="pwlLeer(this)">Leeren</i></div></div>';
}

TA_PWT.L1 = {t:"La-La Land", s:235, b:[
 {t:"faehig", h:"La-La Land", x:"Lass das Leben die Kunst nachahmen. Wähle ein Kunstgenre oder ein bestimmtes Kunstwerk, mit dem du dich zuvor über Ortstermin befasst hast, rufe „ACTION!“ und würfle **Präsenz**.",
  erg:[
   ["ok", "**Bei Erfolg** passen sich alle und alles in der Umgebung den Regeln und Konventionen dieses Genres oder Werks an: Ein Polizist in der Nähe wird zu einem mittelalterlichen Ritter; das Casino wird von großen Teams professioneller Diebe überschwemmt; ein belebter Park nimmt die heitere Atmosphäre eines impressionistischen Gemäldes an.\nDieser Effekt hält neunzig Minuten an, bis du ihn beendest oder bis sich jemand schneidet – was zuerst eintritt. Wie auch immer dieser Effekt endet: Danach glauben alle Betroffenen, es sei ein besonders lebhafter Fantasieflug gewesen."],
   ["plus", "**Für jede weitere {3}** darfst du zu jedem Zeitpunkt, solange dieser Effekt aktiv ist, eine Szene setzen, indem du etwas für dieses Genre Passendes verkündest. Du könntest zum Beispiel beim Näherkommen auf ein Ziel sagen: „Jetzt hält der Schurke seinen Monolog“: Es muss alles stehen und liegen lassen, um seine Vorgeschichte, seine Motivation und seinen Plan zu erklären."],
   ["plus", "**Bei Triszendenz** darfst du stattdessen beliebig viele Personen wählen und sie zwingen, an einer zeilengetreuen Nachstellung eines Drehbuchs deiner Wahl teilzunehmen. Dieser Effekt hält an, bis das Ende des Drehbuchs erreicht ist oder du ihn beendest."],
   ["nein", "**Bei Fehlschlag** passt sich die Welt um dich herum dem Genre an, aber keiner der Menschen. Alle in der Nähe wissen, was du getan hast; das kann eine riesige Menge Loser Enden nach sich ziehen."]
  ]}
]};

TA_PWT.L2 = {t:"Ich heb dir das auf", s:236, b:[
 {t:"faehig", h:"Ich heb dir das auf", x:"Wenn jemand etwas fallen lässt, darfst du **Doppelzüngigkeit** würfeln.",
  erg:[
   ["ok", "**Bei Erfolg** erschaffst du Dutzende Duplikate, von denen jedes selbst vor einem geschulten Auge als das Original durchgehen könnte. Diese Duplikate haben einen eingebauten Fehler, der sie im Vergleich zum Original harmlos, zahnlos oder anderweitig nutzlos macht: Du entscheidest, welchen."],
   ["plus", "**Bei jeder dritten {3}** darfst du jemand anderen zwingen, etwas fallen zu lassen, das er hält (deine Wahl), und die Wirkung eines Erfolgs wiederholen."],
   ["nein", "**Bei Fehlschlag** erschaffst du viel zu viele Duplikate, die dich und alle anderen im Raum rasch überwältigen (und wahrscheinlich Schaden verursachen). Der ursprüngliche Gegenstand kehrt in die Hand dessen zurück, der ihn fallen ließ, und der steht genau richtig, um ihn zu benutzen."]
  ],
  f:"Ich glaube, man kann kein Omelett machen …", a:[["Ohne vorher ein paar Eier aufzuschlagen.", "G7"], ["Ohne Eier, Butter, Milch, Salz, Pfeffer, Schweizer Käse, Pilze, Tomaten und Safran.", "A9"]]}
]};

TA_PWT.L3 = {t:"Seele der Party", s:236, b:[
 {t:"faehig", h:"Seele der Party", x:"Wo du bist, ist immer Party. Tu etwas, um die Stimmung anzuheizen, und würfle **Präsenz**.",
  erg:[
   ["ok", "**Bei Erfolg** beginnt eine Party, ganz gleich, wie deine Umgebung oder die Stimmung vorher war. Jedes Lebewesen in deiner Nähe legt Feindseligkeit und Hemmungen beiseite und entwickelt Interesse daran, gemeinsam zu feiern. Zunächst herrscht die Stimmung „Entspannte Runde“, in der sich alle gern aufhalten."],
   ["plus", "**Für jede weitere {3}** darfst du die Party um eine Stufe steigern, in dieser Reihenfolge:\n**Gute Zeit:** Die Leute führen emotionale Gespräche und schlagen ungewöhnliche Aktivitäten vor.\n**Tanzparty:** Die Leute fangen an zu tanzen, zu singen und suchen nach körperlichen Ausdrucksformen von Spaß.\n**Rager:** Die Party wird ausgelassen, auffällig und für Passanten anziehend.\n**Alle werden so schnell wie möglich bewusstlos:** Wie beschrieben.\n**Bacchanal:** Die Leute feiern so hart, dass sie ihren eigenen Willen verlieren und äußerst beeinflussbar werden. Du kannst sie zu Orten oder Personen lenken und der gesamten Menge gewalttätiges oder extremes Verhalten nahelegen."],
   ["plus", "**Bei Triszendenz** darfst du diesen Effekt auf eine beliebige Person zentrieren. Ein auf diese Weise begonnenes Bacchanal richtet sich weiterhin nach deinen Vorgaben, als wärst du dabei."],
   ["nein", "**Bei Fehlschlag** wird die Umgebung um dich herum sofort zu einem Bacchanal, das von einer anderen Kraft gelenkt wird. Von etwas, das nicht deine Interessen im Sinn hat."]
  ]}
]};

TA_PWT.L4 = {t:"Nur für kurze Zeit", s:236, b:[
 {t:"faehig", h:"Nur für kurze Zeit", x:"Zeit für einen Ausverkauf. Zünde unter einem Gegenstand ein Streichholz an und würfle **Professionalität**.",
  erg:[
   ["ok", "**Bei Erfolg** verschwindet dieser Gegenstand samt allem in der Region deiner Zweigstelle, das genau seiner Beschreibung entspricht, in einem Lichtblitz mit lautem Knall."],
   ["plus", "**Bei jeder dritten {3}** wähle eines:\n– Das betrifft auch Gegenstände, die der Beschreibung der ursprünglichen Gegenstände nur lose entsprechen *(Stofftiger ebenso wie Stoffbären, unausgefüllte Schecks ebenso wie unterschriebene Schecks, verschiedene Ausgaben desselben Buches usw.)*.\n– Dieser Effekt schließt Gegenstände aus, die sich in einem Behälter deiner Wahl befinden oder von einer Person deiner Wahl gehalten werden.\n– Auf diese Weise verschwindende Gegenstände verschwinden dezent, ohne Blitz und Knall.\n– Auf diese Weise verschwindende Gegenstände werden durch billige Plastiknachbildungen ersetzt, die ihrer genauen Beschreibung ansonsten entsprechen."],
   ["plus", "**Bei Triszendenz** darfst du zu jedem Zeitpunkt, nachdem du den Effekt aufgelöst hast, alle entfernten Gegenstände an einer Stelle wieder ins Dasein zurückholen, indem du die Arme hebst und rufst: „Jeder bekommt einen [Name des Gegenstands]!“"],
   ["nein", "**Bei Fehlschlag** verschwindet dein Gegenstand, und jede Person in deiner Region erhält in diesem Augenblick irgendwo in ihrem Besitz eine Kopie des Gegenstands."]
  ]}
]};

TA_PWT.L5 = {t:"Kleiner Zeiger", s:237, b:[
 {t:"faehig", h:"Kleiner Zeiger", x:"Du erschaffst ein mächtiges Artefakt und kannst es nun führen: den **Kleinen Zeiger**. Der Kleine Zeiger ist eine kurze, dolchartige Waffe, die keinen Schaden verursacht. Willst du ihn führen, triff ein Ziel mit ihm oder tippe damit auf eine Uhr und würfle **Subtilität**.",
  erg:[
   ["ok", "**Bei Erfolg** wird das Ziel vom Kleinen Zeiger getroffen. Der jüngste Schaden oder die jüngste Zerstörung, die das Ziel verursacht hat, wird rückgängig gemacht. Wer oder was zuvor Schaden erlitten hat, ist körperlich unversehrt, erinnert sich aber an das Geschehene.\nHat das Ziel noch nie Schaden oder Zerstörung verursacht, fliegen winzige Sprungfedern wie Funken von der Kontaktstelle in alle Richtungen. Dann zerbricht der Kleine Zeiger und kann für den Rest dieses Einsatzes nicht mehr benutzt werden."],
   ["plus", "**Bei jeder dritten {3}** wähle eines:\n– Die Zeit schreitet um eine Stunde voran.\n– Die Zeit spult um eine Stunde zurück.\n– Ein lauter „Gong“-Ton hallt vom Punkt deines Angriffs wider, ist bis zu 100 Meter weit zu hören und lässt alles Glas in der Nähe zerspringen.\n– Eine Person oder ein Paket, das jemand in der Nähe erwartet, trifft ein – ganz gleich, wie lange es normalerweise dauern würde."],
   ["plus", "**Bei Triszendenz** kannst du die nächsten 60 Sekunden erleben, als wären es 60 Minuten, während sich die übrige Welt langsam um dich bewegt. Du darfst alle Gegenstände oder Personen, die du halten kannst, mitnehmen, während du die Zeit auf diese Weise erlebst."],
   ["nein", "**Bei Fehlschlag** macht der GM den schwerwiegendsten Schaden rückgängig, den du oder einer deiner Verbündeten in den letzten {3} Einsätzen verursacht hat."]
  ]},
 {t:"kasten", b:["Wenn du [[B4]], [[L5]] und [[C8]] hast, erhältst du [[R15]]."]}
]};

TA_PWT.L6 = {t:"Lebende Rüstung", s:237, b:[
 {t:"faehig", h:"Lebende Rüstung", x:"Forme deinen Körper um, sodass er das Ziel vollständig bedeckt. Verbringe eine Minute in Sicherheit damit, seine Rüstung zu werden, und würfle **Initiative**.",
  erg:[
   ["ok", "**Bei Erfolg** nimmst du allen äußeren, körperlichen Schaden auf, der gegen das Ziel gerichtet ist. Es hat die Kontrolle über eure gemeinsamen Bewegungen, aber du kannst deine Anomalie-Fähigkeiten wie gewohnt einsetzen. Dieser Effekt endet, wenn du von seinem Körper entfernt wirst oder wenn du ihn beendest.\nEin unwilliges Ziel kann diesen Effekt jederzeit beenden, indem es dich von seinem Körper reißt."],
   ["plus", "**Bei jeder dritten {3}** wähle ein Merkmal für die Rüstung:\n**Zäh:** Aller eingehende Schaden wird um 1 verringert. *(Kann mehrfach gewählt werden.)*\n**Federnd:** Das Ziel kann viel höher springen und viel schneller laufen, als ihr beide es allein könntet.\n**Scharf:** Du kannst Klingen bilden, die jeden, der das Ziel berührt oder ihm sehr nahe kommt, mit 1 Schaden verletzen.\n**Klebrig:** Das Ziel kann dich nicht abreißen, ohne 2 Schaden zu nehmen. Dafür kann es nach Belieben Wände hinaufklettern und an Oberflächen hängen.\n**Beschwert:** Das Ziel kann sich nicht bewegen, solange du an ihm haftest, und wiegt so viel, dass mehrere andere nötig sind, um es zu heben.\n**Körpernah:** Du breitest dich in so dünner Schicht aus, dass das Ziel völlig normal aussieht und ganz normal Kleidung über dir tragen kann.\n**Leise:** Die Schritte und Bewegungen des Ziels werden völlig lautlos (es kann weiterhin normal sprechen)."],
   ["nein", "**Bei Fehlschlag** verlierst du auf dem Weg zu einer Rüstungsform die Kontrolle über deine Gestalt und wirst zu einer Fleischpfütze. Du bist unverletzt, musst aber wie eine dickflüssige Masse getragen werden, bis eine Stunde vergangen ist. Du kannst diesen Effekt beenden, indem du drei erfolgreiche Beharrlichkeitswürfe schaffst."]
  ],
  f:"Wenn ich eine Beziehung eingehe …", a:[["Behalte ich meine Interessen im Blick.", "M1"], ["Lege ich mich voll auf die Verbindung fest.", "M6"]]},
 "Außerdem erhält Ich deck dich! diesen Text:",
 {t:"faehig", h:"Ich deck dich!", x:"",
  erg:[
   ["plus", "**Bei sechs oder mehr {3}en** aktivierst du sofort die Wirkung „Bei Erfolg“ von Lebende Rüstung mit einem Merkmal, ohne zu würfeln und bevor Schaden angewendet wird."]
  ]}
]};

TA_PWT.L7 = {t:"Lobby-Wanderer", s:238, b:[
 {t:"faehig", h:"Lobby-Wanderer", x:"Es gibt einen Raum parallel zu unserer Realität, den die Agency die Lobby nennt. Du bist ihm näher als die meisten. Tritt einen Schritt in diese Parallelwelt und würfle **Professionalität**.",
  erg:[
   ["ok", "**Bei Erfolg** betrittst du den Ort, an dem Gedanken schließlich zu Anomalien gerinnen. Die Lobby, wie du sie erlebst, ist körperlich 1:1 mit der Realität identisch, aber frei von gewöhnlichem Leben und erfüllt von endloser, grenzenloser Farbe. Du kannst dich durch diesen Raum bewegen wie durch die Realität, und wenn der Effekt endet, kehrst du an deiner neuen Position in die Realität zurück.\nAußerdem kannst du in der Lobby körperliche Dinge beeinflussen *(Gegenstände zerbrechen, Türen öffnen, Kabel ausstecken usw.)*, und sie werden in der Realität entsprechend beeinflusst. Du kannst sieben Minuten in der Lobby bleiben, bevor dich etwas bemerkt.\nJedes Mal, wenn du durch eine Tür gehst oder an den Ort zurückkehrst, an dem du die Lobby betreten hast, darfst du in die Realität zurückkehren. Ansonsten kannst du sie nur verlassen, indem du diese Fähigkeit erneut einsetzt."],
   ["plus", "**Bei jeder dritten {3}** wähle eines:\n– Ein weiteres Ziel kann mit dir in die Lobby kommen.\n– Du kannst weitere 7 Minuten unentdeckt bleiben.\n– Ein Ziel, das du mitgebracht hast, bleibt zurück, wenn du gehst."],
   ["nein", "**Bei Fehlschlag** oder wenn du über die zugestandene Zeit hinaus in der Lobby bleibst, werden du und alle, die du mitgebracht hast, von Ripples ins Visier genommen: Gedanken, die sich noch nicht mit genug anderen verbunden haben, um in die Realität durchzubrechen. Sie sind klein, chaotisch und gefährlich. Meist erscheinen sie als einfache Mischungen aus den Dingen, an die die Menschen in der Gegend denken *(Krabben + Bierflaschen, Börsenticker + Ratten, Radios + Teigtaschen usw.)*. Hungrig nach Resonanz, nehmen sie dich in Schwärmen aggressiv ins Visier."]
  ]}
]};

TA_PWT.L8 = {t:"Fundbüro", s:238, b:[
 {t:"faehig", h:"Fundbüro", x:"Vieles fällt in die Lobby, wenn man nicht darauf achtet. Beobachte den Himmel und schnippe mit den Fingern. Würfle **Dynamik**.",
  erg:[
   ["ok", "**Bei Erfolg** öffnet sich dort, wohin du blickst, ein kleines Loch zur Lobby in der Luft, und ein verlorener Gegenstand fällt heraus. Würfle einen W4, um die Größe des verlorenen Gegenstands zufällig zu bestimmen, und lege fest, was es ist."],
   ["plus", "**Bei jeder dritten {3}** kannst du das Ergebnis deines Wurfs um eine Zahl nach oben oder unten verschieben. *(1 und 4 sind nicht direkt verbunden.)*"],
   ["plus", "**Bei Triszendenz** darfst du beliebig viele Gegenstände derselben Kategorie gleichzeitig durch das Loch fallen lassen. Es hält an, bis du es beendest."],
   ["nein", "**Bei Fehlschlag** verlierst du oder ein Verbündeter etwas Wichtiges an die Lobby. Der GM wählt unter allem aus, was die Gruppe bei sich trägt oder woran ihr liegt."]
  ]},
 {t:"tab", x:[
  ["1", "Winzig", "Murmeln, Schlüssel, Süßigkeiten", "Kein Schaden"],
  ["2", "Handlich", "Gewichte, Haustiere, Messer", "1 Schaden"],
  ["{3}", "Riesig", "Häuser, Erbschaften, Flugzeuge", "{3} Schaden"],
  ["4", "Groß", "Sofas, Arten, Autos", "2 Schaden"]
 ]},
 "Du darfst jeden Gegenstand, den du mit Ich hatte es doch eben noch hast verschwinden lassen, ohne zu würfeln auf diese Weise erscheinen lassen. Nutze die Tabelle oben, um zu bestimmen, wie viel Schaden der Gegenstand beim Herabfallen anrichten kann."
]};

TA_PWT.L9 = {t:"In der Menge verloren", s:238, b:[
 {t:"sp", x:[
  ["Sobald du in eine Gruppe von sechs oder mehr Personen trittst, wirst du sofort jede Person in der Menge. Du kannst sehen, was sie sehen, fühlen, was sie fühlen, sie auf kleine Weise lenken und augenblicklich überall innerhalb oder am Rand der Menge verschwinden, wieder auftauchen oder Fähigkeiten einsetzen.",
   "Solange du dich in einer Menge von fünfzehn oder mehr Personen befindest, kannst du weder verletzt noch ins Visier genommen werden – die Menschen in der Menge hingegen schon."],
  ["Außerdem darfst du, wenn du mit Entfesselt Erfolg hast, beliebig viele andere Personen mitnehmen, ohne dafür {3}en auszugeben."]
 ]}
]};

TA_PWT.L10 = {t:"Nicht vertrauenswürdig", s:239, b:[
 {t:"sp", x:[
  [
   {t:"notiz", x:"sie werden es dir nicht sagen, aber ich habe eben erfahren, dass die Agency das Einzige abgeschaltet hat, was sie je Gutes für dich getan hat: den Wiederbelebungsteil deiner Lebensversicherung. ob du willst oder nicht, sie haben das hier in deine Akte eingetragen:"},
   {t:"h3", x:"Nicht vertrauenswürdig"},
   "Die Anomalie dieses Agenten hat ihn vor dem Blick der Agency verborgen und unsere Kontrolle eingeschränkt. Wenn er stirbt, wird er nicht mehr ins Leben zurückgeholt. Um eine Krise zu vermeiden, darf der Agent nicht benachrichtigt werden, und die übrigen Leistungen seiner Lebensversicherung funktionieren weiterhin wie gewohnt. Wir empfehlen seinem General Manager, so bald wie möglich Umstände herbeizuführen, die zu seiner Eliminierung führen.",
   {t:"notiz", x:"Wenn du jetzt nicht gehen willst – was du kannst, denk an die Ruhestandsoption auf [[X1]] –, empfehle ich dir, Abtauchen von Siphon zu nehmen, damit du nicht für immer stirbst.",pos:"rechts"},
   {t:"notiz", x:"Ich weiß, das klingt nach schlechten Nachrichten, aber für uns ist es riesig. Sie haben dich vollständig abgeschrieben, das heißt, du bist ganz in meiner Domäne. Ich kann dich verborgen halten, selbst wenn du im Gebäude bist – und sie hoffen, dass sie dich nicht unter großem Aufsehen feuern müssen. Es ist Zeit, Sachen auseinanderzunehmen."},
   {t:"notiz", x:"den anderen Agenten das Folgende zu erzählen ist gefährlich. wenn du der Typ fürs Vorlesen bist, solltest du den Rest selbst lesen, bevor du ihn teilst.",pos:"rechts"},
   {t:"notiz", x:"du wirst Hilfe brauchen, um das zu schaffen – mehrere Agenten, über lange Zeit – und du brauchst wahrscheinlich andere Spieler, die mit dir zusammenarbeiten. es ist leicht für sie, deine harte Arbeit zunichtezumachen (glaub mir, ich gebe dafür meine ganze Sisyphussy, seit lange vor deiner Geburt), aber wenn du sie auf dieselbe Seite wie uns bringen kannst, können wir die Agency zerschlagen und einen Teil der Welt wieder so einrichten, wie er sein soll."},
   {t:"notiz", x:"natürlich wirst du in dieser Zweigstelle nicht mehr spielen können, aber wer spielt schon ewig Spiele? irgendwann muss man weiterziehen. -U",pos:"rechts"},
  ],
  [
   {t:"h3", x:"Sabotage-Leiste"},
   "Lege für deine Zweigstelle eine Sabotage-Leiste an. Diese Leiste hat 42 leere Felder, die jeweils für das Potenzial stehen, die Kontrolle der Agency über deine Zweigstelle zu beschädigen. Sind alle 42 Felder markiert, wird ein Teil der Urgency freigesetzt, und die Agency wird aus deiner Zweigstelle und ihrer Region vertrieben. Damit endet dein Spiel Triangle Agency. Wenn das geschieht, gehe zum Dokument hinter der Playwall [[O8]]. Jeder Agent, der in irgendeiner Weise von der Existenz und dem Zweck der Sabotage-Leiste erfährt, erhält Sabotage und Reparatur.",
   {t:"h3", x:"Sabotage"},
   "Hast du den Anomalie-Effekt Nicht vertrauenswürdig, den Agency-Titel Vizepräsident oder höher oder den Realitäts-Effekt Das Rampenlicht teilen, darfst du diese Fähigkeit einsetzen. Wenn du Zeit auf einer Leiste verbringst, deren Voraussetzung du erfüllst, darfst du zusätzlich zu allen anderen Effekten 1 Feld auf der Sabotage-Leiste markieren und beschreiben, was du getan hast, um den Griff der Agency auf die Realität in deiner Region zu lockern.",
   {t:"h3", x:"Reparatur"},
   "Wenn du Zeit auf einer beliebigen Leiste verbringst, darfst du 1 Markierung auf der Sabotage-Leiste löschen und beschreiben, was du getan hast, um den Griff der Agency auf die Realität in deiner Region zurückzugewinnen.",
   {t:"h3", x:"Sabotage-Leiste"},
   {t:"html", get x(){ return pwlLeiste(); }},
   "[[O8]]"
  ]
 ]}
]};

TA_PWT.L11 = {t:"Nullsumme", s:240, b:[
 {t:"sp", x:[
  [
   {t:"band", x:[
    "HALLO, SPIELER.",
    "DEINE VERSENKUNG WIRD DURCH EINEN PLÖTZLICHEN RUCK DER VERWIRRUNG GESTÖRT. DU BIST EINE FIGUR, UND DIE BEZIEHUNGEN, MIT DENEN DU ZEIT VERBRACHT HAST, SIND ES AUCH. ZU WELCHEM ZWECK?",
    "„HORROR.“ DAS IST DAS GENRE, DAS DU ÜBER DIESE MENSCHEN HEREINBRECHEN LÄSST. DU FRAGST DICH: DAS KENNE ICH. ABER KENNE ICH DAS WIRKLICH? SIND SPIELER UND AGENT DASSELBE? IN EINEM AUGENBLICK WERDEN SIE ES NICHT MEHR SEIN, ABER FÜR DIESEN BLITZ DER ERKENNTNIS SIND SIE ES.",
    "IN DIESEM SPIEL GIBT ES GEWINNER UND VERLIERER. MAN HAT DICH GEBETEN, ANDERE ZU GEWINNERN ZU MACHEN. VERDAMMT DICH DAS DAZU, ZU VERLIEREN? WAS IST MIT DEN MENSCHEN, DIE VON DIR ABHÄNGEN?",
    "WENN ANOMALIEN ZERSTÖRT WERDEN, GEWINNT NIEMAND. VIELMEHR GEWINNT NIEMAND SONST. ABER VIELLEICHT VERHEISST DAS FÜR DICH GUTES.",
    "WENN DU SICHERHEIT UND KONTINUITÄT FÜR DIE MENSCHEN SUCHST, DIE DIR AM HERZEN LIEGEN, WIRST DU DIESE FÄHIGKEIT NUTZEN. LEB WOHL, SPIELER."
   ]}
  ],
  [
   {t:"h3", x:"Nullsumme"},
   "Endet ein Einsatz mit der Eliminierung einer Anomalie, kannst du den Ort besuchen, an dem sie zerstört wurde, um die zurückgebliebene Resonanz aufzunehmen. Wenn du Zeit auf deine Realität verwendest, darfst du zusätzlich zu allen anderen Effekten eine zuvor eliminierte Anomalie wählen und eines der Folgenden aktivieren:",
   {t:"liste", x:[
    "Erhöhe deine maximale Qualitätssicherung in einer beliebigen Kombination von Qualitäten um {3}.",
    "Führe eine beliebige Kombination aus Üben oder Bekannt werden (falls du Zugriff darauf hast) {3}-mal durch.",
    "Senke die aktuelle Zahl der Losen Enden deiner Zweigstelle um 9."
   ]},
   "Jeder Agent mit Nullsumme kann diese Fähigkeit für jede eliminierte Anomalie höchstens einmal aktivieren."
  ]
 ]}
]};
