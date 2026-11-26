BC_EP["lt11"] = {
  id:"lt11", t:"Der Gewinnercode", lab:"LuckTales · Folge 11 · Auf Abruf", c:"#7a1b2a",
  b:"bc_z1", s:193, img:"lt/lt11-kopf",
  intro:[
    {t:"box", h:"Zum Spielen dieser Folge brauchst du", p:["Museum · Kunstwerk · Plan · Autorität · Code · Ungeeignetes Boot · Sehr geeignete Boote · Geheimkult · Grabstätte · Wahrheit"]},
    {t:"box", h:"Enthaltener Kontext", p:["Grenzenlos (siehe Ende der Folge)"]}
  ],
  ctx:[
    {k:"museum", l:"Museum", v:""},
    {k:"kunstwerk", l:"Kunstwerk", v:""},
    {k:"plan", l:"Plan", v:""},
    {k:"autoritaet", l:"Autorität", v:""},
    {k:"code", l:"Code", v:""},
    {k:"ungeeignet", l:"Ungeeignetes Boot", v:""},
    {k:"geeignet", l:"Sehr geeignete Boote", v:""},
    {k:"geheimkult", l:"Geheimkult", v:""},
    {k:"grabstaette", l:"Grabstätte", v:""},
    {k:"wahrheit", l:"Wahrheit", v:""},
    {k:"rivale", l:"Rivale", v:""}
  ],
  scenes:[
    {t:"{P:museum}", short:"Museum", ort:"INNEN/ABEND", s:194, blocks:[
      {t:"n", p:[
        "Junge Kellner walzen mit Tabletts voller Weingläser und Canapés vorbei, während Unternehmer, Politiker, Kirchenvertreter und lokale Prominente in verstreuten Grüppchen durch den reich geschmückten Hauptsaal des {P:museum} plaudern. Unter ihnen befindet sich auch die örtliche {P:autoritaet}, ein „Tycoon“ und sehr wichtige konservative Persönlichkeit, sowie unser {P:rivale}.",
        "Reporter und Leibwächter gibt es im Überfluss. Die großen Fenster blicken auf den Hafen und eine weite Wasserfläche, die im Sonnenuntergang glänzt.",
        "Die Abenteurer haben alle ihre Positionen gemäß dem {P:plan} eingenommen. Einige von ihnen sind wie das Servicepersonal gekleidet, andere wurden tatsächlich eingeladen, entweder wegen ihrer Beliebtheit oder wegen ihrer Bedeutung in der archäologischen Gemeinschaft. Aber sie sind hier, um das {P:kunstwerk} zu stehlen, bevor es enthüllt werden kann. Aus dem Geplauder der Gäste können die Abenteurer die folgenden Informationen aufschnappen:",
        "Das {P:kunstwerk} wurde kürzlich bei der Erforschung eines gesunkenen Schiffes geborgen und in Rekordzeit restauriert. Sein künstlerischer und historischer Wert ist unermesslich, aber das ist nicht der Grund, warum die Abenteurer hier sind. Manche munkeln {K:H|Einfache Herausforderung}, dass dieses {P:kunstwerk} einen {P:code} verbergen könnte. Andere behaupten sogar {K:H|Kritische Herausforderung}, dass der Künstler in Wahrheit Mitglied eines {P:geheimkult} war, der der Suche nach der {P:wahrheit} und dem Umsturz der Mächtigen gewidmet ist.",
        "Obendrein gilt die {P:grabstaette}, in der die sterblichen Überreste des Künstlers nicht weit vom {P:museum} aufbewahrt werden, als verflucht und von Geistern heimgesucht, außerdem als Treffpunkt für alle möglichen seltsamen Rituale, wie die von der Polizei gefundenen Beweise bezeugen.",
        "Ob die Abenteurer von Mitgliedern des {P:geheimkult} angeheuert wurden oder aus eigenem Antrieb das {P:kunstwerk} stehlen wollen, ist von geringer Bedeutung. Was wirklich zählt – während die Sonne im Meer versinkt –, ist die verrinnende Zeit.",
        "Wollen sie den {P:code} knacken, müssen sie das {P:kunstwerk} in die Finger bekommen und vor der Morgendämmerung zur {P:grabstaette} des Künstlers bringen. Nur dann werden sie eine {P:wahrheit} erfahren, die so mächtig ist, dass sie die {P:autoritaet} bis ins Mark erschüttern wird.",
        "Nun müssen die Abenteurer den {P:plan} so umsetzen, wie sie es für richtig halten, und einen Weg finden, das {P:kunstwerk} zu nehmen – viel Spaß beim Ausarbeiten der Dynamik! –, bevor es „Zu spät“ ist. Nachdem ihnen das gelungen ist, ergreift der Museumsdirektor das Mikrofon, um zu sagen:"
      ]},
      {t:"d", n:"DIREKTOR", p:"Und es ist mir eine große Freude und ein großer Stolz, der Welt ... das {P:kunstwerk} zu schenken!"},
      {t:"n", p:[
        "Das Tuch fällt.",
        "Und das {P:kunstwerk} ist nicht da.",
        "Gelingt es den Abenteurern nicht, den {P:plan} umzusetzen, bleibt ihnen nichts anderes übrig, als zu versuchen, das {P:kunstwerk} vor aller Augen zu stehlen und sich mit den bewaffneten Wachen auseinanderzusetzen {K:G|2 kritische Gefahren}, bevor sie entkommen können.",
        "Wie auch immer es abläuft, die {P:autoritaet} wird vor Wut kreidebleich werden und den Befehl zur Verfolgung geben. Währenddessen müssen die Abenteurer mit ihrer Beute zum Hafen rennen."
      ]}
    ]},
    {t:"Hafen", short:"Hafen", ort:"AUSSEN/NACHT", s:195, blocks:[
      {t:"n", p:["Die Sonne verschwindet beim Klang des ersten Schusses. Die Handlanger der {P:autoritaet} erreichen die Abenteurer im Hafen."]},
      {t:"d", n:"HANDLANGER", p:"Haltet diese Diebe auf!"},
      {t:"n", p:[
        "Wie lästige Stechmücken in der Sommerhitze schwirren die Kugeln an den Ohren der Abenteurer vorbei, mitten in einer Menge aus Touristen und Matrosen {K:G|Kritische Gefahr}.",
        "Das erste Ziel der Abenteurer ist es, ein Boot zu erreichen, um aufs Meer hinauszufahren. Sie können entweder ein leeres stehlen oder eines an sich bringen, indem sie eine kleine Familie oder Besatzung anweisen, sie aufs offene Meer zu bringen {K:H|Kritische Herausforderung}.",
        "In dieser Szene finden sie jedoch als einziges Transportmittel ein {P:ungeeignet}. Ich vertraue darauf, dass dir das Schlimmste einfällt.",
        "Nach der Schießerei sind die Handlanger entschlossen, die Verfolgung aufzunehmen und das {P:kunstwerk} um jeden Preis zurückzuholen. Sie springen auf zwei {P:geeignet}, und so beginnt eine wilde Verfolgungsjagd mit Schießerei auf dem Wasser {K:F|2 kritische Feinde}.",
        "Mitten auf ihrer Route liegt ein natürliches Hindernis (ein paar Felsen auf Wasserhöhe, eine Schule Wale, ein mit Touristen vollgestopfter Lastkahn, ein Pfahlbau von wildernden Fischern voller Sprengstoff oder etwas anderes), dem die Abenteurer keinesfalls ausweichen können {K:G|+1 kritische Gefahr}.",
        "Die Verfolgung geht weiter bis zur {P:grabstaette} des Künstlers, die die Abenteurer vom Hafen aus in etwa fünfzehn Minuten erreichen. Die Protagonisten schaffen es schließlich an Land, unter Gischt und Blutspritzern."
      ]}
    ]},
    {t:"{P:grabstaette}", short:"Grabstätte", ort:"AUSSEN/NACHT", s:196, blocks:[
      {t:"n", p:[
        "Haben die Abenteurer die {P:geeignet} erfolgreich abgehängt oder ausgeschaltet, kannst du ihnen gratulieren und ihnen eine Pause gewähren. Hatten sie weniger Glück, treffen ihre überlebenden Verfolger auf Verstärkung, die am Ufer auf sie wartete. Die Abenteurer sind umzingelt, und ein ganzes Arsenal ist auf sie gerichtet.",
        "Dieser Kampf liegt irgendwo zwischen unfair und wir-können-nur-auf-den-Augenblick-warten,-um-wie-Helden-zu-sterben {K:F|Unmöglicher Feind}.",
        "Doch bevor der Kampf beginnen kann, erscheint unter den siegreichen Feinden die {P:autoritaet}. Sie ist einer der vielen Gäste, die wir in Szene 1 gesehen haben, und ihre Macht über Menschen ist gewaltig."
      ]},
      {t:"d", n:"AUTORITÄT", p:"Meine Damen und Herren. Lassen Sie uns vernünftig sein. Sie können sicher nachvollziehen, warum die {P:wahrheit} für jemanden in meiner Position höchst kontraproduktiv wäre. Bitte übergeben Sie das {P:kunstwerk}, und ich versichere Ihnen, dass alles weitergeht wie zuvor."},
      {t:"n", p:[
        "Die {P:autoritaet} ist bereit, den Abenteurern im Austausch für das {P:kunstwerk} alles anzubieten, was sie je brauchen könnten. Sind die Abenteurer käuflich veranlagt, bietet die {P:autoritaet} ihnen einen Scheck mit einer Null mehr an.",
        "Die {P:autoritaet} ist gut über die Abenteurer informiert und spielt auf jeden einzelnen ihrer wunden Punkte an, um Zwietracht in der Gruppe zu säen. Verbergen einige der Abenteurer ein Geheimnis vor den anderen, nutzt die {P:autoritaet} es, um sie zu erpressen.",
        "Am Ende – mit oder ohne das {P:kunstwerk} in ihren Händen – befiehlt die {P:autoritaet} ihren Handlangern schließlich, sich ein für alle Mal um die Abenteurer zu kümmern, oder die Abenteurer finden den richtigen Zeitpunkt, um loszuschlagen und den Kampf zu beginnen.",
        "Nach der ersten Kampfrunde mischt sich der {P:geheimkult} ein. Diese okkulte Organisation, die denselben Ursprung wie der Künstler hat, ist die wahre Quelle vieler der verfluchten und gespenstischen Geschichten rund um die {P:grabstaette}.",
        "Die Kombination aus Kleidung und Gebaren des Kults, zusammen mit dem düsteren Hintergrund der {P:grabstaette} (sei es eine antike Nekropole längst vergessener Zeiten, ein gotischer Friedhof hinter einer Abtei oder ein barockes Mausoleum, in dem Marmorengel aus jeder Ecke wachen), erzeugt die Illusion eines übernatürlichen Eingreifens, passend zu den Legenden, von denen die Abenteurer gehört haben.",
        "Die Feinde und die {P:autoritaet} reagieren alle voller Entsetzen, als der Kult ins Spiel kommt, was den Abenteurern erlaubt, ihren Zug zu machen.",
        "Mit der Hilfe des Kults, der nur gefährlicher als der Feind zu sein scheint, während er Seite an Seite mit den Abenteurern kämpft, scheint sich das Blatt zu wenden {K:F|Der unmögliche Feind ist nun ein extremer Feind}. Über der Stätte der ewigen Ruhe scheint der Mond, und der Kampf tobt.",
        "Nachdem sie ihre Gegner besiegt und die {P:autoritaet} gefangen genommen haben, gefesselt wie ein Schwein, tritt der Kultanführer an die Abenteurer heran."
      ]},
      {t:"d", n:"KULTANFÜHRER", p:"Das Ritual ist bereit, wir haben auf euch gewartet. Mit eurer Hilfe wird der {P:code} endlich geknackt werden. Heute Nacht ist eine Nacht der {P:wahrheit} vor der Morgendämmerung eines neuen Tages."},
      {t:"n", p:[
        "Ob sie wollen oder nicht, die Abenteurer und ihr Wissen sind für das Ritual unverzichtbar.",
        "Der Kultanführer dankt ihnen überschwänglich und versichert ihnen, dass sie alle nach derselben {P:wahrheit} suchen. Dann befiehlt er seinen Akolythen, die Abenteurer und die noch immer gefesselte {P:autoritaet} an den Ort zu bringen, an dem der Künstler begraben wurde. Dort wird das Ritual stattfinden."
      ]}
    ]},
    {t:"Das Ritual", short:"Das Ritual", ort:"INNEN/NACHT", s:199, blocks:[
      {t:"n", p:[
        "Die {P:grabstaette} des Künstlers ist ein Denkmal für alles, was er im Leben war. Die Figuren, die er erschuf und aus dem wirklichen Leben in seine Werke übertrug, Fragmente seiner Schriften umgeben den Sarg, in dem seine sterblichen Überreste liegen.",
        "Die Abenteurer werden von mehr als fünfzig Akolythen in zeremoniellen Roben begrüßt, mit allen gebührenden Formeln und Gebärden.",
        "Das {P:kunstwerk} wird enthüllt, und der Kultanführer fordert die Abenteurer auf, mit der Entschlüsselung des {P:code} fortzufahren. Einige der Details am {P:kunstwerk} spiegeln, ergänzen und wiederholen die, die rund um die {P:grabstaette} dargestellt sind.",
        "Der Ort des Rituals und das {P:kunstwerk} sind zwei Teile desselben Puzzles, das die {P:wahrheit} zeigt. Knacken sie den Code {K:H|Einfache Herausforderung}, finden die Abenteurer auch eine verborgene Botschaft des Künstlers."
      ]},
      {t:"d", n:"KÜNSTLER", p:"Die {P:wahrheit} ist ein zweischneidiges Schwert. Ich war ihr Hüter. Das werden nach meinem Tod alle sein, die meine Botschaft zu lesen vermögen. Nutzt sie für das größere Wohl, und sobald das Böse einen Weg findet, sie nach seinem Willen zu beugen, begrabt sie zusammen mit mir."},
      {t:"n", p:[
        "In den Worten des Künstlers ist eine weitere Botschaft verborgen, die den Abenteurern eine zusätzliche Herausforderung stellt {K:H|Kritische Herausforderung}. Diese Botschaft enthält alle Anweisungen, um einen Abwehrmechanismus zu aktivieren, der die {P:grabstaette} vollständig zerstören und die {P:wahrheit} für immer unter mehreren Metern Schutt verbergen wird.",
        "Mitglieder des Kults können die erste Botschaft des Künstlers ebenfalls leicht entziffern, aber die Abenteurer sind die Einzigen mit dem Wissen, die letzte Sicherheitsklausel zu finden."
      ]},
      {t:"d", n:"KULTANFÜHRER", p:"So wurde es gesagt. Am neuen Tag werden wir nicht länger verfolgt und müssen nicht länger im Verborgenen leben. Am neuen Tag wird die Welt sich der Wahrheit stellen müssen, ohne weitere Ausreden. Wir werden das {P:kunstwerk} allen zeigen, und wir werden seine Hüter sein. Die {P:wahrheit} wird die Welt erschüttern!"},
      {t:"n", p:[
        "Das macht den Abenteurern klar, dass auch der {P:geheimkult} üble Absichten hat und nicht vorhat, die {P:wahrheit} nur zu nutzen, um die Mächtigen zu untergraben: Sie wollen einfach selbst deren Platz an der Macht einnehmen. Auch die {P:autoritaet} versteht das und ergreift ihre Chance, zu sprechen und ihre Manipulationstaktiken einzusetzen."
      ]},
      {t:"d", n:"AUTORITÄT", p:"Halt! Hört zu, wir können Verbündete sein. Wir können mit meinem Geld, meinen Kontakten und meinen Mitteln viel mehr erreichen. Ich schließe mich euch in der neuen Weltordnung an. Wir werden gemeinsam herrschen, und nichts soll uns im Weg stehen."},
      {t:"n", p:[
        "Der Kultanführer zögert nicht wirklich, bevor er das Angebot der {P:autoritaet} annimmt. Die Mehrheit der Akolythen bekundet ihre Zustimmung. Wer Einwände äußert, wird zum Schweigen gebracht oder gefangen genommen. Zögern die Abenteurer, hat die {P:autoritaet} Zeit, ihre Handlanger zur {P:grabstaette} zu rufen.",
        "Nun müssen die Abenteurer wählen, ob sie sich der Neuen Weltordnung anschließen oder sich gegen sie erheben wollen, indem sie den Sicherheitsmechanismus aktivieren, den der Künstler eingerichtet hat.",
        "Gelingt es einem Abenteurer, den in der {P:grabstaette} verborgenen Mechanismus zu aktivieren {K:H|Kritische Herausforderung}, erklingt die Stimme des Künstlers durch die Wände (entweder von einem Tonband oder einer uralten Scheibe), während das Bauwerk zu zerbröckeln beginnt und tödliche Feuer- und Wasserwaffen aus der Erfindung des Künstlers die Mitglieder des {P:geheimkult} und die Handlanger der {P:autoritaet} dezimieren.",
        "Die Abenteurer müssen um ihr Leben rennen {K:G|2 kritische Gefahren}, vielleicht beim Versuch, das {P:kunstwerk} zu retten {K:G|+1 kritische Gefahr}, oder, falls sie scheitern, müssen sie mit einem Geheimnis leben, das zum größeren Wohl niemals verraten werden darf."
      ]}
    ]},
    {t:"{P:grabstaette}", short:"Grabstätte", ort:"AUSSEN/NACHT", s:201, blocks:[
      {t:"n", p:[
        "Die Sonne geht auf.",
        "Für viele wird heute ein Tag wie jeder andere sein. Für die Abenteurer, übersät mit Schnitten und Prellungen, wird dies der erste Tag einer neuen Welt sein, und sie werden vereint sein als Hüter eines uralten Geheimnisses, das sie vom Künstler geerbt haben. Das Licht streicht über ihre müden Körper.",
        "Die Abenteurer sehen einander an und stellen fest, dass sie sich über Nacht völlig verändert haben.",
        "Ende der Folge."
      ]}
    ]}
  ],
  outro:[
    {h:"Kontext zu „Der Gewinnercode“: Grenzenlos", s:202},
    {t:"list", cols:1, items:[
      "**Epoche:** Entweder Golden Age oder 1999",
      "**Museum:** Archäologisches Museum von Populonia (Piombino, Italien). Es existiert wirklich! Versuche, ein paar Fotos und eine Karte zu finden. Es liegt auf einem Vorgebirge über dem Hafen der Stadt. Die Aussicht ist atemberaubend",
      "**Kunstwerk:** Die Amphore von Baratti, ein silbernes Zeremoniengefäß aus dem 4. Jahrhundert, verziert mit Medaillons. Jedes Medaillon trägt das Porträt eines griechischen oder römischen Helden oder Gottes. Das etruskische Volk unter römischer Herrschaft nutzte sie als Requisite für Erzählungen. Auch dies ist ein real existierendes Relikt, sodass etwas zusätzliche Recherche nützlich sein könnte. In unserer Geschichte gehörte die Amphore einer Gruppe etruskischer Rebellen und diente ihnen unter römischer Herrschaft als Mittel verschlüsselter Kommunikation",
      "**Plan:** Während der Eröffnung die Plätze des Catering-Personals einnehmen, um die Amphore zu nehmen, bevor sie ausgestellt wird, verkleidet in der Kleidung des Catering-Teams",
      "**Autorität:** Für das Golden Age – Amedeo Cappelli, örtlicher faschistischer Parteifunktionär mit einem endlosen Vorrat an faschistischen Squadristi. Für 1999 – Umberto Cappelli, überschwänglicher junger Erbe einer historischen Familie, der für eine rechtsextreme Partei für das Bürgermeisteramt kandidiert. Außerdem Anführer einer Gruppe weißer Rassisten",
      "**Code:** Die Medaillons auf der Amphore lassen sich in einer bestimmten Reihenfolge „lesen“ (die die Abenteurer an der Grabstätte finden werden), um den wahren Ursprung des etruskischen Volkes zu enthüllen. Der Erzählung zufolge waren die Etrusker Mischlingsnachfahren phönizischer Seefahrer und der einheimischen Bevölkerung. Ihr vermischtes Blut soll sich bis in den römischen Senat hinaufgezogen haben. Dieser gemischte Ursprung Italiens widerspricht dem, was Mussolini und modernere Alt-Right-Parteien zu verbreiten versuchen, um ihre Politik zu legitimieren",
      "**Ungeeignetes Boot:** Ein motorisiertes Fischer-Langboot, mit allem Fisch, allen Netzen und Langleinen, die die Abenteurer nutzen können, um ein paar Fallen zu bauen. Da dieser Kontext in der Maremma spielt, hat der Fischer vielleicht irgendwo an Bord ein Gewehr versteckt, und es könnte sogar etwas Sprengstoff geben",
      "**Sehr geeignete Boote:** Schnellboote der italienischen Küstenwache",
      "**Geheimkult:** Anbeter des Fufluns (das etruskische Gegenstück zu Dionysos), angeführt von einem Haruspex. Sie tragen weiße Tuniken und etruskisches Make-up, damit ihre Augen länglich wirken. Der Haruspex trägt eine mit Möwenfedern bedeckte Kutte und sieht dem Vogel sehr ähnlich. Er liest die Zukunft, indem er den Flug der Vögel und ihre Eingeweide untersucht",
      "**Grabstätte:** Die Nekropole von Populonia (ein weiterer real existierender Ort, der zusätzliche Recherche verdient). Es ist eine große Nekropole an der Küste, mit vielen etruskischen Grabstätten und Blick auf Elba. In stürmischen Nächten schlägt der Blitz oft in diese Stätte ein",
      "**Wahrheit:** Der „Mischlings“-Ursprung des italienischen Volkes. Wie die Etrusker sagten: „Wir gehören nicht zum trockenen Land, sondern zum Mittelmeer. Das Meer bestimmt unsere Grenzen, und alle, die wir an seinen Küsten leben, sind dasselbe Volk.“"
    ]},
    {t:"prose", p:[
      "Diese Philosophie lässt sich logisch auf die ganze Welt ausdehnen. Wenn die Oberfläche dieses Planeten zu 75 % mit Wasser bedeckt ist, warum definieren wir dann unsere Identität anhand des Landes, auf dem wir gehen?",
      "Als Gruppe von Abenteurern, Weltbürgern, Archäologen, Historikern, Forschern, anarchischen Halunken und Außenseitern sind unsere Protagonisten der lebende Beweis und die Überbringer dieser Wahrheit. Das Abenteuer kennt keine Grenzen."
    ]},
    {h:"Vorgefertigte Abenteurer", s:204},
    {t:"cards", cols:3, style:"card", items:[
 {
  "k": "Professor · Femme Fatale",
  "h": "Rachel Hunter",
  "s": 204,
  "p": [
   "*„Vertrau mir, ich habe es in einem Buch gelesen“*",
   "**Herkunft:** England · **Heimat:** Australien · **Arbeitsort:** Indien",
   "**Glück:** Glücksmünze 1 · **Epoche:** Golden Age",
   "**Aktion** ●●○ · Kämpfen ●○○ · Anführen ●●● · Stunt ●●○",
   "**Mut** ●●○ · Kaltblütigkeit ●●○ · Fahren ●●○ · Schießen ●○○",
   "**Wissen** ●●● · Kultur ●●● · Erste Hilfe ●●○ · Technik ●●○",
   "**Gesellschaft** ●●● · Charme ●●● · Redekunst ●●○ · Beobachtung ●●●",
   "**Wildnis** ●●○ · Spähen ●○○ · Überleben ●○○ · Zäh ●○○",
   "**Verbrechen** ●●○ · Wachsam ●●○ · Fingerfertigkeit ●●○ · Schleichen ●●●",
   "**Expertise:** Archäologie, Verführung, Botanik",
   "**Waffen & Ausrüstung:** Revolver (Erlaubt dir zu schießen); Elegante Kleidung (Vorteil bei Charme)",
   "**Taschen:** Kompass",
   "**Beutel:** –",
   "**Rucksack:** –",
   "**Magazine:** Revolver: 1"
  ],
  "img": {
   "src": "lt/lt11-abenteurer-rachel-hunter",
   "pos": "50% 30%"
  },
  "fold": true
 },
 {
  "k": "Mediziner · Revolverheld",
  "h": "Dr. Isaac Subramani",
  "s": 205,
  "p": [
   "*„Wir können diese Menschen retten“*",
   "**Herkunft:** England · **Heimat:** Indien · **Arbeitsort:** Indien",
   "**Glück:** Glücksmünze 1 · **Epoche:** Golden Age",
   "**Aktion** ●●○ · Kämpfen ●●○ · Anführen ●●○ · Stunt ●●○",
   "**Mut** ●●● · Kaltblütigkeit ●○○ · Fahren ●●○ · Schießen ●●●",
   "**Wissen** ●●● · Kultur ●●○ · Erste Hilfe ●●● · Technik ●●○",
   "**Gesellschaft** ●●○ · Charme ●●○ · Redekunst ●○○ · Beobachtung ●●●",
   "**Wildnis** ●●○ · Spähen ●○○ · Überleben ●●○ · Zäh ●○○",
   "**Verbrechen** ●●○ · Wachsam ●●○ · Fingerfertigkeit ●●● · Schleichen ●○○",
   "**Expertise:** Medizin, Pistole, Tradition",
   "**Waffen & Ausrüstung:** Pistole (Erlaubt dir zu schießen); Pistole (Erlaubt dir zu schießen); Schulterholster (Du trägst 2 Pistolen und 2 Magazine)",
   "**Taschen:** –",
   "**Beutel:** Erste-Hilfe-Set",
   "**Rucksack:** –",
   "**Magazine:** Pistole: 4"
  ],
  "img": {
   "src": "lt/lt11-abenteurer-isaac-subramani",
   "pos": "50% 30%"
  },
  "fold": true
 },
 {
  "k": "Draufgänger · Begleiter",
  "h": "Tony „Cash“ Cassany",
  "s": 206,
  "p": [
   "*„Nichts tun ohne Gegenleistung“*",
   "**Herkunft:** Italien · **Heimat:** USA · **Arbeitsort:** Indien",
   "**Glück:** Glücksmünze 1 · **Epoche:** Golden Age",
   "**Aktion** ●●● · Kämpfen ●●○ · Anführen ●○○ · Stunt ●●●",
   "**Mut** ●●● · Kaltblütigkeit ●●● · Fahren ●●○ · Schießen ●●●",
   "**Wissen** ●●○ · Kultur ●●○ · Erste Hilfe ●●○ · Technik ●●○",
   "**Gesellschaft** ●●○ · Charme ●●● · Redekunst ●●○ · Beobachtung ●○○",
   "**Wildnis** ●●○ · Spähen ●●● · Überleben ●○○ · Zäh ●○○",
   "**Verbrechen** ●●○ · Wachsam ●○○ · Fingerfertigkeit ●●○ · Schleichen ●●○",
   "**Expertise:** Unterstützung, Höhen, Lügen",
   "**Taschen:** –",
   "**Beutel:** –",
   "**Rucksack:** –"
  ],
  "img": {
   "src": "lt/lt11-abenteurer-tony-cassany",
   "pos": "50% 30%"
  },
  "fold": true
 },
 {
  "k": "Soldat · Betrüger",
  "h": "Gabriel Admintorn",
  "s": 207,
  "p": [
   "*„Sex, Drogen und Schätze!“*",
   "**Herkunft:** Ägypten · **Heimat:** USA · **Arbeitsort:** Italien",
   "**Glück:** Glücksmünze 1",
   "**Aktion** ●●● · Kämpfen ●●○ · Anführen ●●● · Stunt ●●○",
   "**Mut** ●●○ · Kaltblütigkeit ●○○ · Fahren ●●○ · Schießen ●●●",
   "**Wissen** ●●○ · Kultur ●●○ · Erste Hilfe ●●○ · Technik ●○○",
   "**Gesellschaft** ●●● · Charme ●●○ · Redekunst ●●○ · Beobachtung ●●○",
   "**Wildnis** ●●○ · Spähen ●●○ · Überleben ●●○ · Zäh ●●○",
   "**Verbrechen** ●●○ · Wachsam ●●○ · Fingerfertigkeit ●○○ · Schleichen ●●●",
   "**Expertise:** Militär, Lügen, Okkultismus",
   "**Waffen & Ausrüstung:** Gewehr (Zweihändig. Erlaubt dir, mit Vorteil zu schießen); Enterhaken (Mit Seil. Erlaubt dir, zu klettern oder zu schwingen)",
   "**Taschen:** Funkgerät, Heiße Bierdose",
   "**Beutel:** –",
   "**Rucksack:** –",
   "**Magazine:** Gewehr: 2"
  ],
  "img": {
   "src": "lt/lt11-abenteurer-gabriel-admintorn",
   "pos": "50% 30%"
  },
  "fold": true
 },
 {
  "k": "Actionheld · Techniker",
  "h": "Fabius „Harlock“ Teller",
  "s": 208,
  "p": [
   "*„Träume enden nie, solange du ihnen nachjagst“*",
   "**Herkunft:** Vereinigtes Königreich · **Heimat:** Italien · **Arbeitsort:** Japan",
   "**Glück:** Glücksmünze 1",
   "**Aktion** ●●● · Kämpfen ●●● · Anführen ●●○ · Stunt ●●○",
   "**Mut** ●●○ · Kaltblütigkeit ●●○ · Fahren ●●● · Schießen ●●●",
   "**Wissen** ●●● · Kultur ●●○ · Erste Hilfe ●○○ · Technik ●●●",
   "**Gesellschaft** ●●○ · Charme ●○○ · Redekunst ●●○ · Beobachtung ●○○",
   "**Wildnis** ●●○ · Spähen ●●○ · Überleben ●●● · Zäh ●●○",
   "**Verbrechen** ●●○ · Wachsam ●○○ · Fingerfertigkeit ●●○ · Schleichen ●○○",
   "**Expertise:** Heldentum, IT, Mechanik",
   "**Waffen & Ausrüstung:** Pistole (Erlaubt dir zu schießen)",
   "**Taschen:** Handgerät",
   "**Beutel:** Werkzeugkasten, Laptop",
   "**Rucksack:** –",
   "**Magazine:** Pistole: 2"
  ],
  "img": {
   "src": "lt/lt11-abenteurer-fabius-teller",
   "pos": "50% 30%"
  },
  "fold": true
 },
 {
  "k": "Revolverheld · Actionheld",
  "h": "Detektiv Francisco „Sisco“ Navarro",
  "s": 209,
  "p": [
   "*„Es ist nicht vorbei, bis es vorbei ist“*",
   "**Herkunft:** Chile · **Heimat:** Mittelamerika · **Arbeitsort:** Japan",
   "**Glück:** Glücksmünze 1",
   "**Aktion** ●●● · Kämpfen ●●● · Anführen ●●○ · Stunt ●●●",
   "**Mut** ●●● · Kaltblütigkeit ●○○ · Fahren ●●● · Schießen ●●●",
   "**Wissen** ●●○ · Kultur ●○○ · Erste Hilfe ●○○ · Technik ●●○",
   "**Gesellschaft** ●●○ · Charme ●○○ · Redekunst ●●● · Beobachtung ●●●",
   "**Wildnis** ●●○ · Spähen ●●○ · Überleben ●●○ · Zäh ●○○",
   "**Verbrechen** ●●○ · Wachsam ●●○ · Fingerfertigkeit ●●○ · Schleichen ●○○",
   "**Expertise:** Heldentum, Pistole, Ermittlung",
   "**Waffen & Ausrüstung:** Pistole (Erlaubt dir zu schießen); Schulterholster (Du trägst 2 Pistolen und 2 Magazine)",
   "**Taschen:** Detektivmarke",
   "**Beutel:** –",
   "**Rucksack:** –",
   "**Magazine:** Pistole: 4"
  ],
  "img": {
   "src": "lt/lt11-abenteurer-sisco-navarro",
   "pos": "50% 30%"
  },
  "fold": true
 },
 {
  "k": "Draufgänger · Reporter",
  "h": "Clarissa Morgenstern",
  "s": 210,
  "p": [
   "*„Vertrau mir, ich weiß, was ich tue“*",
   "**Herkunft:** Italien · **Heimat:** USA · **Arbeitsort:** Frankreich",
   "**Glück:** Glücksmünze 1 · **Epoche:** Golden Age",
   "**Aktion** ●●● · Kämpfen ●●○ · Anführen ●●○ · Stunt ●●○",
   "**Mut** ●●○ · Kaltblütigkeit ●●● · Fahren ●●○ · Schießen ●●○",
   "**Wissen** ●●○ · Kultur ●●○ · Erste Hilfe ●○○ · Technik ●●○",
   "**Gesellschaft** ●●● · Charme ●●○ · Redekunst ●●○ · Beobachtung ●●○",
   "**Wildnis** ●●○ · Spähen ●●● · Überleben ●○○ · Zäh ●○○",
   "**Verbrechen** ●●○ · Wachsam ●●● · Fingerfertigkeit ●●○ · Schleichen ●●○",
   "**Expertise:** Journalismus, Höhen, Sechster Sinn",
   "**Waffen & Ausrüstung:** Kamera (Erlaubt dir, Fotos zu machen); Elegante Kleidung (Vorteil bei Charme)",
   "**Taschen:** Kamerablitz, Notizbuch",
   "**Beutel:** –",
   "**Rucksack:** –"
  ],
  "img": {
   "src": "lt/lt11-abenteurer-clarissa-morgenstern",
   "pos": "50% 30%"
  },
  "fold": true
 },
 {
  "k": "Techniker · Professor",
  "h": "Joseph Gabe",
  "s": 211,
  "p": [
   "*„Irgendwo habe ich das richtige Werkzeug“*",
   "**Herkunft:** Deutschland · **Heimat:** USA · **Arbeitsort:** Italien",
   "**Glück:** Glücksmünze 1 · **Epoche:** Golden Age",
   "**Aktion** ●●○ · Kämpfen ●●○ · Anführen ●●○ · Stunt ●○○",
   "**Mut** ●●○ · Kaltblütigkeit ●●● · Fahren ●○○ · Schießen ●●●",
   "**Wissen** ●●● · Kultur ●●● · Erste Hilfe ●●○ · Technik ●●●",
   "**Gesellschaft** ●●● · Charme ●●○ · Redekunst ●○○ · Beobachtung ●●○",
   "**Wildnis** ●●○ · Spähen ●○○ · Überleben ●●○ · Zäh ●●○",
   "**Verbrechen** ●●○ · Wachsam ●●○ · Fingerfertigkeit ●●○ · Schleichen ●●○",
   "**Expertise:** Archäologie, Mechanik, Nervenstärke",
   "**Waffen & Ausrüstung:** Pistole (Erlaubt dir zu schießen)",
   "**Taschen:** Taschenlampe",
   "**Beutel:** Werkzeugkasten, Gummihuhn mit einer Rolle in der Mitte",
   "**Rucksack:** –",
   "**Magazine:** Pistole: Taschen 2, Beutel 2"
  ],
  "img": {
   "src": "lt/lt11-abenteurer-joseph-gabe",
   "pos": "50% 30%"
  },
  "fold": true
 },
 {
  "k": "Revolverheld · Playboy",
  "h": "Marcus Balthazar Bux",
  "s": 212,
  "p": [
   "*„Nomen omen!“*",
   "**Herkunft:** Persien · **Heimat:** England · **Arbeitsort:** Italien",
   "**Glück:** Glücksmünze 1 · **Epoche:** Golden Age",
   "**Aktion** ●●○ · Kämpfen ●●○ · Anführen ●●○ · Stunt ●●●",
   "**Mut** ●●● · Kaltblütigkeit ●●○ · Fahren ●●○ · Schießen ●●●",
   "**Wissen** ●●○ · Kultur ●○○ · Erste Hilfe ●○○ · Technik ●●○",
   "**Gesellschaft** ●●● · Charme ●○○ · Redekunst ●●● · Beobachtung ●●●",
   "**Wildnis** ●●○ · Spähen ●○○ · Überleben ●○○ · Zäh ●○○",
   "**Verbrechen** ●●○ · Wachsam ●●○ · Fingerfertigkeit ●●○ · Schleichen ●●●",
   "**Expertise:** Pistole, Verführung, Fotografie",
   "**Waffen & Ausrüstung:** Pistole (Erlaubt dir zu schießen); Kamera (Erlaubt dir, Fotos zu machen)",
   "**Taschen:** Heilkristalle",
   "**Beutel:** –",
   "**Rucksack:** –",
   "**Magazine:** Pistole: 2"
  ],
  "img": {
   "src": "lt/lt11-abenteurer-marcus-bux",
   "pos": "50% 30%"
  },
  "fold": true
 },
 {
  "k": "Professor · Gentleman",
  "h": "Dr. Felix Andrews",
  "s": 213,
  "p": [
   "*„Ich habe es gesagt, oder ich habe es nur gedacht“*",
   "**Herkunft:** Persien · **Heimat:** England · **Arbeitsort:** Italien",
   "**Glück:** Glücksmünze 1 · **Epoche:** Golden Age",
   "**Aktion** ●●○ · Kämpfen ●○○ · Anführen ●○○ · Stunt ●○○",
   "**Mut** ●●○ · Kaltblütigkeit ●○○ · Fahren ●○○ · Schießen ●○○",
   "**Wissen** ●●○ · Kultur ●○○ · Erste Hilfe ●○○ · Technik ●○○",
   "**Gesellschaft** ●●○ · Charme ●○○ · Redekunst ●○○ · Beobachtung ●○○",
   "**Wildnis** ●●○ · Spähen ●○○ · Überleben ●○○ · Zäh ●○○",
   "**Verbrechen** ●●○ · Wachsam ●○○ · Fingerfertigkeit ●○○ · Schleichen ●○○",
   "**Expertise:** Archäologie, Etikette, Ermittlungen",
   "**Waffen & Ausrüstung:** Pistole (Erlaubt dir zu schießen); Schlafstift (Versprüht Schlafgas)",
   "**Taschen:** –",
   "**Beutel:** –",
   "**Rucksack:** –",
   "**Magazine:** Pistole: 1"
  ],
  "img": {
   "src": "lt/lt11-abenteurer-felix-andrews",
   "pos": "50% 30%"
  },
  "fold": true
 },
 {
  "k": "Pilot · Playboy",
  "h": "Bernard „Bernie“ Beauregard",
  "s": 214,
  "p": [
   "*„§/#ç@$&! Sag mir nicht, was ich tun soll!“*",
   "**Herkunft:** Italien · **Heimat:** Kanada · **Arbeitsort:** Naher Osten",
   "**Glück:** Glücksmünze 1",
   "**Aktion** ●●○ · Kämpfen ●●○ · Anführen ●●○ · Stunt ●●●",
   "**Mut** ●●● · Kaltblütigkeit ●●● · Fahren ●●○ · Schießen ●●○",
   "**Wissen** ●●○ · Kultur ●○○ · Erste Hilfe ●○○ · Technik ●●○",
   "**Gesellschaft** ●●● · Charme ●●○ · Redekunst ●●● · Beobachtung ●●○",
   "**Wildnis** ●●○ · Spähen ●○○ · Überleben ●○○ · Zäh ●●○",
   "**Verbrechen** ●●○ · Wachsam ●●○ · Fingerfertigkeit ●●● · Schleichen ●●○",
   "**Expertise:** Hubschrauber, Verführung, Schwerfahrzeuge",
   "**Waffen & Ausrüstung:** Pistole (Erlaubt dir zu schießen)",
   "**Taschen:** Funkgerät, Zigarre, Feuerzeug",
   "**Beutel:** –",
   "**Rucksack:** –",
   "**Magazine:** Pistole: 2"
  ],
  "img": {
   "src": "lt/lt11-abenteurer-bernie-beauregard",
   "pos": "50% 30%"
  },
  "fold": true
 },
 {
  "k": "Gentleman · Dieb",
  "h": "Sir Daniel Montague III",
  "s": 215,
  "p": [
   "*„Jedes Versprechen ist fällig“*",
   "**Herkunft:** England · **Heimat:** England · **Arbeitsort:** Frankreich",
   "**Glück:** Glücksmünze 1 · **Epoche:** Golden Age",
   "**Aktion** ●●○ · Kämpfen ●●○ · Anführen ●●○ · Stunt ●●●",
   "**Mut** ●●○ · Kaltblütigkeit ●●● · Fahren ●●○ · Schießen ●●○",
   "**Wissen** ●●○ · Kultur ●●○ · Erste Hilfe ●○○ · Technik ●●○",
   "**Gesellschaft** ●●● · Charme ●●● · Redekunst ●●○ · Beobachtung ●●●",
   "**Wildnis** ●●○ · Spähen ●○○ · Überleben ●○○ · Zäh ●○○",
   "**Verbrechen** ●●● · Wachsam ●●○ · Fingerfertigkeit ●●○ · Schleichen ●●○",
   "**Expertise:** Schlösserknacken, Etikette, Lügen",
   "**Waffen & Ausrüstung:** Elegante Kleidung (Vorteil bei Charme); Bowlerhut (Schützt vor Sonne); Spazierstock (Um mit Stil zu gehen)",
   "**Taschen:** –",
   "**Beutel:** –",
   "**Rucksack:** –"
  ],
  "img": {
   "src": "lt/lt11-abenteurer-daniel-montague",
   "pos": "50% 30%"
  },
  "fold": true
 },
 {
  "k": "Draufgänger · Reporter",
  "h": "Francis Clarke, genannt „Der fliegende Sprengaffe“",
  "s": 216,
  "p": [
   "*„Hinter jedem Rätsel steckt eine erzählenswerte Geschichte“*",
   "**Herkunft:** Italien · **Heimat:** England · **Arbeitsort:** Südamerika",
   "**Glück:** Glücksmünze 1",
   "**Aktion** ●●● · Kämpfen ●●○ · Anführen ●●○ · Stunt ●●●",
   "**Mut** ●●○ · Kaltblütigkeit ●●● · Fahren ●●○ · Schießen ●●○",
   "**Wissen** ●●○ · Kultur ●●○ · Erste Hilfe ●○○ · Technik ●●○",
   "**Gesellschaft** ●●● · Charme ●●● · Redekunst ●●○ · Beobachtung ●●○",
   "**Wildnis** ●●○ · Spähen ●●○ · Überleben ●○○ · Zäh ●○○",
   "**Verbrechen** ●●○ · Wachsam ●●○ · Fingerfertigkeit ●●○ · Schleichen ●●○",
   "**Expertise:** Journalismus, Höhen, Okkultismus",
   "**Waffen & Ausrüstung:** Digitalkamera (Erlaubt dir, Fotos zu machen und anzusehen); Pistole (Erlaubt dir zu schießen)",
   "**Taschen:** Amulett",
   "**Beutel:** Fackel",
   "**Rucksack:** –",
   "**Magazine:** Pistole: 2"
  ],
  "img": {
   "src": "lt/lt11-abenteurer-francis-clarke",
   "pos": "50% 30%"
  },
  "fold": true
 },
 {
  "k": "Professor · Entdecker",
  "h": "George „Jay“ Dreamer",
  "s": 217,
  "p": [
   "*„Hör nie auf zu träumen“*",
   "**Herkunft:** Alaska · **Heimat:** Italien · **Arbeitsort:** Island",
   "**Glück:** Glücksmünze 1 · **Epoche:** Golden Age",
   "**Aktion** ●●○ · Kämpfen ●○○ · Anführen ●●○ · Stunt ●●○",
   "**Mut** ●●○ · Kaltblütigkeit ●○○ · Fahren ●●○ · Schießen ●○○",
   "**Wissen** ●●● · Kultur ●●○ · Erste Hilfe ●●● · Technik ●●○",
   "**Gesellschaft** ●●○ · Charme ●●○ · Redekunst ●○○ · Beobachtung ●●●",
   "**Wildnis** ●●○ · Spähen ●●● · Überleben ●●○ · Zäh ●●○",
   "**Verbrechen** ●●○ · Wachsam ●●● · Fingerfertigkeit ●○○ · Schleichen ●●●",
   "**Expertise:** Archäologie, Orientierung, Okkultismus",
   "**Waffen & Ausrüstung:** Winterkleidung (Schützt vor Kälte); Eispickel (Erlaubt dir, vereiste Wände zu erklimmen)",
   "**Taschen:** Messer, Fernglas",
   "**Beutel:** Geheimnisvolles Buch",
   "**Rucksack:** –"
  ],
  "img": {
   "src": "lt/lt11-abenteurer-jay-dreamer",
   "pos": "50% 30%"
  },
  "fold": true
 },
 {
  "k": "Muskelprotz · Jäger",
  "h": "Paul Mc Bear",
  "s": 218,
  "p": [
   "*„Ich bin eben so ein Kahlkopf“*",
   "**Herkunft:** Schottland · **Heimat:** Italien · **Arbeitsort:** Afrika",
   "**Glück:** Glücksmünze 1",
   "**Aktion** ●●● · Kämpfen ●●● · Anführen ●○○ · Stunt ●●●",
   "**Mut** ●●○ · Kaltblütigkeit ●●○ · Fahren ●●○ · Schießen ●●●",
   "**Wissen** ●●○ · Kultur ●○○ · Erste Hilfe ●○○ · Technik ●●○",
   "**Gesellschaft** ●●○ · Charme ●○○ · Redekunst ●●○ · Beobachtung ●○○",
   "**Wildnis** ●●● · Spähen ●●● · Überleben ●●● · Zäh ●●●",
   "**Verbrechen** ●●○ · Wachsam ●●○ · Fingerfertigkeit ●○○ · Schleichen ●●○",
   "**Expertise:** Jagd, Stärke, Prügelei",
   "**Waffen & Ausrüstung:** Gewehr (Zweihändig. Erlaubt dir, mit Vorteil zu schießen)",
   "**Taschen:** Messer",
   "**Beutel:** Flachmann",
   "**Rucksack:** –",
   "**Magazine:** Gewehr: 2"
  ],
  "img": {
   "src": "lt/lt11-abenteurer-paul-mcbear",
   "pos": "50% 30%"
  },
  "fold": true
 },
 {
  "k": "Professor · Soldat",
  "h": "Adrian Nash",
  "s": 219,
  "p": [
   "*„Gleichgewicht in allem“*",
   "**Herkunft:** England · **Heimat:** Japan · **Arbeitsort:** Schottland",
   "**Glück:** Glücksmünze 1 · **Epoche:** Golden Age",
   "**Aktion** ●●● · Kämpfen ●●○ · Anführen ●●● · Stunt ●○○",
   "**Mut** ●●○ · Kaltblütigkeit ●○○ · Fahren ●●○ · Schießen ●●○",
   "**Wissen** ●●● · Kultur ●●○ · Erste Hilfe ●●● · Technik ●●○",
   "**Gesellschaft** ●●○ · Charme ●●○ · Redekunst ●●○ · Beobachtung ●●○",
   "**Wildnis** ●●○ · Spähen ●●○ · Überleben ●●○ · Zäh ●●○",
   "**Verbrechen** ●●○ · Wachsam ●●○ · Fingerfertigkeit ●○○ · Schleichen ●●●",
   "**Expertise:** Archäologie, Militär, Kampfsport",
   "**Waffen & Ausrüstung:** Revolver (Erlaubt dir zu schießen); Machete (Schneidet durch die Vegetation)",
   "**Taschen:** Messer",
   "**Beutel:** Karte, Notizbuch",
   "**Rucksack:** –",
   "**Magazine:** Revolver: 2"
  ],
  "img": {
   "src": "lt/lt11-abenteurer-adrian-nash",
   "pos": "50% 30%"
  },
  "fold": true
 }
]},
    {h:"Hall of Fame", s:220},
    {t:"list", cols:2, items:[
      "Adriano delle Donne als Adrian Nash",
      "Alessio Scaccioni als Alex „Mimmo“ Stacciani",
      "Andrea Garrone als Adohorn, der Sammler",
      "Bernardo Tacchini als Bernard „Bernie“ Beauregarde",
      "Daniel Mulato als Sir Daniel Montague III",
      "Fabio Maria Piacentini als Fabius „Harlock“ Teller",
      "Francesco Chirico als Francis Clarke",
      "Francesco Panitti als Francisco „Sisco“ Navarro",
      "Giacomo Petrucci als Sir William Charles Briggs",
      "Giorgio Giuliani als George „Jay“ Dreamer",
      "Iacopo Ciardelli als Der Prächtige Manaraja",
      "Paolo Pigozzi als Paul McBear",
      "Sabrina Normani als Filomela Redmiller"
    ]}
  ]
};
