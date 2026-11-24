/* Die Verdammten – Apokryphen: Sternzeichen (S. 6–7), Krankheiten & Heilmittel (S. 10–15), Unheilige Wiederkehr (S. 4). */
var MB_REGELN = window.MB_REGELN || [];
MB_REGELN.push(
{id:"sternzeichen", t:"Sternzeichen", p:6, b:"mb_apo", cols:3, s:[
 {h:"Sternzeichen", p:6, b:"mb_apo", wide:1, x:[
  {t:"p", c:"kl", x:"Würfle W12, wenn du einen neuen Charakter erschaffst, um ein Sternzeichen zuzuweisen."}
 ]},
 {h:"", wide:1, x:[{t:"cards", x:[
  {n:"1", h:"Nechrubels Codestern", b:"Der Stern der Schatten kennt nur Grausamkeit. Ein früher Tod ist Gnade. Würfle W6, um dein bedauernswertes Schicksal zu bestimmen. **1:** Du stirbst bei der Geburt. **2–5:** Deine maximalen TP sind 3. **6:** Du trägst einen dunklen Samen in dir."},
  {n:"2", h:"Der Schnitter", b:"Du wurdest unter dem Zeichen des Schnitters geboren, Nechrubels ergebenem Diener. Der Schnitter zehrt an deiner Kraft; Schlaf stellt 0 TP wieder her. **Wenn du eine Kreatur tötest, heilst du 1 TP.** DAS BÖSE WÄCHST."},
  {n:"3", h:"Der Aussätzige", b:"Wer unter dem Zeichen des Aussätzigen geboren wird, führt ein Leben voller Krankheit. Solange du infiziert bist, verlierst du täglich keine TP. Jeder, der mit dir in Kontakt kommt, steckt sich mit einer Infektion an."},
  {n:"4", h:"Das Findelkind", b:"Das Zeichen des Findelkinds liegt allein in einem Meer der Dunkelheit. **Die Menschen neigen dazu, dich zu verlassen.** Wie deine Eltern."},
  {n:"5", h:"Der Verräter", b:"Das Zeichen des Verräters drängt dich, nach Größe zu streben. Du erkennst deinesgleichen unter den Massen. **Die meisten Menschen glauben die Worte, die du sagst.** Die Verratenen kehren zurück, um dich heimzusuchen."},
  {n:"6", h:"Der Wanderer", b:"Ein sesshaftes Leben ist ein Gräuel. Würfle W6. **1–2:** Etwas Böses jagt dich. **3–5:** Du findest leicht Nahrung und Obdach. **6:** Einmal am Tag kannst du W20 Minuten mit Tieren sprechen."},
  {n:"7", h:"Der Altar", b:"Du wurdest auf einem himmlischen ALTAR geboren. Opfer versprechen Belohnung. **Du kannst alle verfügbaren Würfel frei unter deinen Fähigkeiten verteilen** (zum Beispiel W6 für Stärke und 5W6 für Präsenz)."},
  {n:"8", h:"Der Priester", b:"Deine Stimme gebietet Respekt. **Wenn du sprichst, hört jeder zu. Wähle deine Worte weise.** Du findest immer Zuflucht in Kirchen und dergleichen."},
  {n:"9", h:"Der Pflug", b:"Die unter dem Zeichen des PFLUGS Geborenen sind robust. **Wenn eine Kreatur dir maximalen Schaden zufügen würde, muss sie neu würfeln.**"},
  {n:"10", h:"Das Diamantkreuz", b:"Die Himmel ruhen auf dem Zeichen des DIAMANTKREUZES. **Du hast einen unzerbrechlichen Willen.** Du erhältst +3 auf alle Präsenzproben."},
  {n:"11", h:"Der Magus", b:"Du wurdest von der MACHT geküsst. Würfle Präsenz + 2W4, um zu bestimmen, wie oft du Mächte an diesem Tag einsetzen kannst."},
  {n:"12", h:"Der Östliche Heilige", b:"Kurz oder lang, du führst ein gesegnetes Leben unter dem Zeichen des Östlichen Heiligen. **Einmal pro Tag kannst du eine Kreatur um W10 TP heilen.** Die Menschen folgen dir bis in den Tod."}
 ]}]}
]},
{id:"krankheiten", t:"Krankheiten & Heilmittel", p:10, b:"mb_apo", cols:2, s:[
 {h:"Krankheiten", p:10, b:"mb_apo", wide:1, x:[
  {t:"p", c:"kl", x:"Die Welt stirbt. Die Tiere sterben. Alle sterben."},
  {t:"cards", x:[
   {n:"", h:"Smaragdräude", b:"Ein arkaner, verderbter Parasit verursacht die Smaragdräude, eine zehrende Krankheit. Meist durch Schlafen in schmutzigen oder verfluchten Gasthäusern zugezogen.\n\nEine Kreatur, die mit dem Parasiten in Kontakt kommt, muss eine Zähigkeitsprobe SG8 bestehen oder erkrankt.\n\nSolange sie nicht geheilt ist, muss die infizierte Kreatur täglich eine Zähigkeitsprobe SG8 bestehen oder kratzt sich für W4 Schaden. Ein Patzer verursacht eine **Infektion.**"},
   {n:"", h:"Gelbaugenwürmer", b:"Eine parasitäre Infektion, verursacht durch verspritztes Monsterblut. Oft von Goblins und Zombies übertragen.\n\nNach dem Töten eines infizierten Ziels im Nahkampf oder nach dem anderweitigen Verschlucken der Wurmeier muss eine Kreatur eine Zähigkeitsprobe SG11 bestehen oder erkrankt.\n\nSolange sie nicht geheilt ist, erleidet die infizierte Kreatur nach jedem überstandenen Tag einen kumulativen Malus von −1 auf ihre Präsenz, höchstens −10. **Am 10. Tag** muss die Kreatur eine Zähigkeitsprobe SG11 bestehen oder *verliert dauerhaft ihr Augenlicht.*"},
   {n:"", h:"Ketzerische Gedanken", b:"Eine Krankheit des Geistes, verursacht durch das Nachsinnen über ketzerische Schriften und das Hören abtrünniger Predigten.\n\nEine Kreatur, die einer starken Häresie begegnet, muss eine Präsenzprobe SG8 bestehen oder erkrankt.\n\nSolange sie nicht geheilt ist, ist die Kreatur gezwungen, die Krankheit in Wort und Tat an andere weiterzugeben. Sie kann keine Gebäude betreten, die dem **WAHREN GLAUBEN** geweiht sind, wird von gesetzestreuen Leuten gemieden und **kann nicht von heiligen Mächten profitieren.**\n\n*(geheilt durch Folter und Abschwörungen)*"},
   {n:"", h:"Die Aufblähung", b:"Eine Krankheit mit offiziell unbekannter Ursache. Sie befällt Junge und Alte und bringt wahllos den Tod. Unstillbarer Durst lässt den Körper bis zur Unkenntlichkeit anschwellen. Schließlich platzt der Infizierte auf, was zu einem gewaltsamen Tod und einem Schwall Gedärme führt.\n\n*(inoffiziell katalogisiert als entflohene Folterbakterie)* Beamte, Gauner und Serienmörder nutzen eine besondere Tinktur mit dem Bakterium. Es verbreitet sich über Leichen und weggeworfene Flaschen.\n\nEine erfolgreiche Zähigkeitsprobe SG17 verhindert die Ansteckung. Eine infizierte Kreatur hat W4+2 Tage zu leben und muss ständig trinken. Wasser, Blut, Alkohol – jede Flüssigkeit tut es.\n\nDas einzige Heilmittel ist ein seltener, phosphoreszierender Pilz aus den Höhlen von Bergen Chrypt."},
   {n:"", h:"Weißer Tod", b:"Eine abscheuliche Atemwegserkrankung, verursacht durch einen Pilz. Er beginnt in der Lunge zu wachsen, kriecht in Hals und Mund und bedeckt schließlich das Gesicht mit einem weißen Film.\n\nEine erfolgreiche Zähigkeitsprobe SG8 verhindert die Ansteckung beim Erkunden von Höhlen und Sümpfen.\n\nSolange sie nicht geheilt ist, muss die erkrankte Kreatur täglich eine Zähigkeitsprobe SG8 bestehen oder zieht kumulativ 1 von ihren maximalen TP ab."},
   {n:"", h:"Rattenschwanz", b:"Rattenschwanz lässt den Erkrankten am ganzen Körper haarige Schwänze wachsen, am stärksten im Gesicht und auf den Handflächen. Die Leute machen einen Sport daraus, Erkrankte zu jagen, obwohl die Krankheit nicht mehr ansteckend ist, sobald der erste Schwanz wächst.\n\nEine Kreatur, die von einer Ratte gebissen wird, muss eine Zähigkeitsprobe SG6 bestehen oder erkrankt an **Rattenschwanz.**\n\nSolange sie nicht geheilt ist, zieht die Kreatur W4 von allen Proben ab, die ihre schwanzbedeckten Hände betreffen, Angriffe eingeschlossen."},
   {n:"", h:"Unreine Auszehrung", b:"Der wiederholte Gebrauch UNREINER MÄCHTE beschmutzt die Seele des Wirkenden, verzerrt seine Organe und verwandelt seine Knochen in Blei. Schließlich tilgt die unreine Auszehrung sein Fleisch.\n\nEine Kreatur, die bei einer Präsenzprobe einer unreinen Macht patzt, muss eine Präsenzprobe SG6 bestehen oder erkrankt an **unreiner Auszehrung.** Solange sie krank ist, sammelt sie bei jedem Einsatz einer unreinen Macht 1 Auszehrungspunkt, höchstens 3W4. Mit jedem Punkt verdorrt ihr Fleisch.\n\nBei Erreichen des Höchstwerts würfelt die Kreatur W20. **20:** Die Kreatur wird zu einem Lich. **15–19:** Sie wird zu einem **Skelett** und erleidet dauerhaft einen Malus von W6 auf Präsenz. **1–14:** Die Kreatur zerfällt zu Staub und stirbt.\n\nDiese arkane „Krankheit“ ist unheilbar."}
  ]}
 ]},
 {h:"Heilmittel", p:15, b:"mb_apo", x:[
  {t:"p", c:"kl", x:"Für die meisten Krankheiten gibt es ein Heilmittel. Kannst du es dir leisten?"},
  {t:"cards", x:[
   {n:"10s", h:"Quacksalber", b:"10 % Chance zu genesen, 20 % Chance zu sterben."},
   {n:"25s", h:"Hinterhofheiler", b:"20 % Chance zu genesen, 10 % Chance zu sterben."},
   {n:"50s", h:"Ordentlicher Arzt", b:"30 % Chance zu genesen, 5 % Chance zu sterben."},
   {n:"250s", h:"Heiliger Heiler", b:"90 % Chance zu genesen, 0 % Chance zu sterben."}
  ]},
  {t:"p", c:"kl", x:"Heilige Heiler behandeln keine Abweichler, Ketzer und anderes gesellschaftliches Gesindel. Nur in großen Siedlungen verfügbar."}
 ]}
]},
{id:"wiederkehr", t:"Unheilige Wiederkehr", p:4, b:"mb_apo", cols:1, s:[
 {h:"Unheilige Wiederkehr", p:4, b:"mb_apo", wide:1, x:[
  {t:"p", c:"w", x:"Du erwachst mit schrecklichen Erinnerungen. Würfle auf dieser Tabelle, wenn du VON DEN TOTEN zurückkehrst."},
  {t:"liste", cols:2, x:[
   "Eine latente Verbindung verdirbt dich. **Würfle jeden Tag auf dieser Tabelle.**",
   "So kalt, so steif. Deine Geschicklichkeit sinkt **dauerhaft** um W4.",
   "Die GEISTER kommen für dich! Schemen greifen dich in den schlimmstmöglichen Momenten an.",
   "Du hast etwas Wichtiges verloren. Deine SEELE? Du kennst keine Gefühle außer HASS.",
   "Würfle immer auf ARKANE KATASTROPHE, wenn du eine Macht nicht aktivieren kannst.",
   "Völlige Dunkelheit. Du kannst nicht sehen! DAS LICHT HAT DEINE AUGEN FÜR IMMER VERLASSEN.",
   "Deine Organe sind unheilbar zerfetzt. **Halbiere deine maximalen TP.** −2 auf alle ZÄHIGKEITSproben.",
   "Trauma. Wenn du unter die Hälfte deiner maximalen TP fällst, prüfe MORAL (5).",
   "Deine Erinnerungen sind nun verloren. Nur die Götter wissen, **wann** oder **OB** sie zurückkehren.",
   "Albträume suchen deine Träume heim. **Dein Körper leidet,** und du erholst dich bei Rast nur um 1 TP.",
   "Tiere verabscheuen dich. Manche pissen auf deine Schuhe, andere treten dich in die **Weichteile.**",
   "**Du verrottest langsam.** Bestehe täglich eine Zähigkeitsprobe SG5 oder verliere ein Körperteil.",
   "**Blut.** Blut. Blut. **BLUT.** Du brauchst es. Du badest darin. Du trinkst es.",
   "Sichtbarer Miasma sickert aus deinen Poren und Öffnungen. **Der Gestank hält Menschen fern.**",
   "Du kehrst mit einer abscheulichen Aufgabe zurück.",
   "Maden leben in dir. **Sie kriechen heraus, wenn du sprichst.** Für andere funktionieren die Insekten als eine Mahlzeit pro Tag.",
   "Dein süßer Tod und gewaltsame Rückkehr waren zu viel zu verkraften. **Du brauchst Stimulanzien.**",
   "Geheimnisse jenseits sterblichen Begreifens. **Deine Präsenz steigt dauerhaft um W4.**",
   "Etwas ANDERES kam zurück.",
   "Du sahst die Schimmernden Felder und erfuhrst Frieden. Du **HEISST DEN TOD WILLKOMMEN.**"
  ]}
 ]}
]}
);
