/* Vaesen – Archetypen (Grundregelwerk S. 26–35) */
var VAE_ARCH = [
{
"id": "akademiker",
"name": "Akademiker",
"en": "Academic",
"attr": "Logik",
"skill": "Gelehrsamkeit",
"p": 26,
"img": "charaktere_archetyp_akademiker",
"vor": [
"Albert",
"Astrid",
"Elin",
"Isaac",
"Louis",
"Praskoviya"
],
"nach": [
"Brugge",
"Gregorius",
"Taaltinen"
],
"mot": [
"Das Unbekannte erkunden",
"Kritiker widerlegen",
"Berühmt werden"
],
"trauma": [
"Ein Vaettir hat dich in eine Ratte verwandelt",
"Die Magie einer Meerjungfrau hat dich altern lassen",
"Du sahst, wie dein Partner von einem Riesen zerrissen wurde"
],
"geheim": [
"Drogensüchtig",
"Hast Dokumente gestohlen oder gefälscht, um Forschungsergebnisse zu bekommen",
"Von einem Vaesen gejagt"
],
"beziehung": [
"Ein Werkzeug für meine Zwecke",
"Ich kann in deiner Gegenwart nicht ruhig bleiben",
"Ein guter Freund"
],
"talente": [
"Bücherwurm",
"Gelehrter",
"Wissen beruhigt"
],
"res": "4–6",
"ausr": [
"Büchersammlung oder Kartenbuch",
"Schreibzeug",
"Schnaps oder Rechenschieber"
],
"quote": "Wir waren uns einig, dass es theoretisch möglich sei, auch jenen, die keine verum videntes – sogenannte Donnerstagskinder – sind, die Fähigkeit zu geben, Vaesen zu sehen. Die anderen vergaßen unser Gespräch schnell. Für mich wurde die Frage zur Besessenheit. Könnten die Menschen um uns die Wahrheit sehen, würden wir die Anführer der neuen Welt. Ein Text eines Sufi-Philosophen aus Kottayam erwähnte eine dunkle Flüssigkeit, übersetzt „Schwarzer Schlamm“. Wer sie trinkt, lässt Kreaturen entstehen. Ich musste viel vom Schmuck meiner Mutter verkaufen, damit ein Händler ein Gefäß davon nach Upsala brachte. Und nun steht es hier, auf dem Schreibtisch vor mir."
},
{
"id": "arzt",
"name": "Arzt",
"en": "Doctor",
"attr": "Logik",
"skill": "Heilkunde",
"p": 27,
"img": "charaktere_archetyp_arzt",
"vor": [
"Alfred",
"Dorotea",
"Friedrich",
"Karl",
"Margit",
"Vilhelmina"
],
"nach": [
"Borelius",
"Köningsmark",
"Luukonen"
],
"mot": [
"Die Welt erkunden und beschreiben",
"Den Schwachen und Leidenden helfen",
"Die Gesellschaft stärken und ihre Führung übernehmen"
],
"trauma": [
"Eine Leiche erwachte bei einer Autopsie zum Leben",
"Du hast einen Menschen mit Eselsohren und Hufen operiert",
"Du sahst dein Schicksal in den Augen einer sterbenden Meerjungfrau"
],
"geheim": [
"Hat zwei getrennte Persönlichkeiten",
"In verbotene Affären verwickelt",
"Unnatürliche Lust"
],
"beziehung": [
"Ich vertraue dir meine Geheimnisse an",
"Du nervst mich",
"Ich träume nachts von dir"
],
"talente": [
"Militärsanitäter",
"Chefarzt",
"Notfallmedizin"
],
"res": "4–6",
"ausr": [
"Arzttasche mit medizinischer Ausrüstung",
"Schnaps oder feiner Wein",
"Schwaches Pferd oder starkes Gift"
],
"quote": "In unseren Körpern wandern elektrische Signale. Dringt ein fremder Organismus in die Haut ein, entstehen winzige Soldaten zur Abwehr. Das Gehirn kann sich an mehr erinnern, als je ein Mensch aufschreiben könnte. Und doch zweifeln meine Kollegen weiter am Übernatürlichen. Ich wurde unter demütigenden Umständen gezwungen, meine Aussagen zu widerrufen, um meine Zulassung zu behalten. Ich weiß, dass das Wesen, das ich auf meiner Reise nach Rovaniemi im Norden Finnlands seziert habe, keines von Gottes Geschöpfen war. Mein Arzteid, den Mitmenschen zu helfen und sie zu schützen, schließt die Drohungen der Hölle ein."
},
{
"id": "jaeger",
"name": "Jäger",
"en": "Hunter",
"attr": "Präzision",
"skill": "Fernkampf",
"p": 28,
"img": "charaktere_archetyp_jaeger",
"vor": [
"Algot",
"Blenda",
"Egil",
"Maj",
"Malte",
"Torun"
],
"nach": [
"Ek",
"Lindberg",
"Sigridsson"
],
"mot": [
"Was meine Familie angegriffen hat, muss vernichtet werden",
"Im Einklang mit der Natur leben",
"Will fantastisches Wild erlegen"
],
"trauma": [
"Von den Ästen einer Eschenfrau angegriffen",
"Du brachst dir im Wald das Bein und wurdest von einem Irrlicht heimgeführt",
"Im Morgengrauen von einem Bergtroll gefangen und in dessen versteinerten Armen festgehalten"
],
"geheim": [
"Ich habe meine Seele verkauft",
"Ich kann meine Wutanfälle nicht kontrollieren",
"Hat Kinder mit einem Vaesen"
],
"beziehung": [
"Du ziehst mich an",
"Ich hasse Rüpel wie dich",
"Du bist ein Stadtweichling"
],
"talente": [
"Spürhund",
"Kräuterkundiger",
"Scharfschütze"
],
"res": "2–4",
"ausr": [
"Gewehr",
"Jagdmesser oder Jagdhund",
"Jagdfalle oder Jagdausrüstung"
],
"quote": "Das Interesse der Baronin an der Entenjagd war nur ein Vorwand, um mit mir an der frischen Luft allein zu sein. Wir nahmen Wein und Baguette mit, und sie las mir Geschichten von Monstern und Vaesen vor. Eines Nachts kam sie nackt zu mir nach Hause. Erst als sie auf mir saß, bemerkte ich, dass der Baron und mehrere andere uns in die Hütte gefolgt waren und sich im Dunkeln bei der Tür versteckten. Ich wollte aufstehen, doch die immer heftigeren Bewegungen der Baronin drückten mich nieder. Ihr Stöhnen wurde zu fremden Worten in einer Sprache, bei der mein Körper vor Angst verkrampfte, und die anderen näherten sich und sangen mit."
},
{
"id": "okkultist",
"name": "Okkultist",
"en": "Occultist",
"attr": "Präzision",
"skill": "Heimlichkeit",
"p": 29,
"img": "charaktere_archetyp_okkultist",
"vor": [
"Aleksander",
"Niklas",
"Thomas",
"Ingrid",
"Ulrika",
"Valentina"
],
"nach": [
"Bäcklund",
"Konradsson",
"Mörk"
],
"mot": [
"Mehr über Vaesen lernen",
"Mich selbst verstehen",
"Macht"
],
"trauma": [
"Beim Versuch, ein Lindwurm-Ei zu stehlen, von ätzendem Gift getroffen",
"Der Familienhof wird von einem mürrischen Nisse geführt",
"Von einem Nachtraben angegriffen, der dich mit einem Fieber ansteckte"
],
"geheim": [
"Eines abscheulichen Verbrechens schuldig",
"Meine Kräfte beherrschen mich",
"Wechselbalg"
],
"beziehung": [
"Du verbirgst etwas vor uns anderen",
"Du schenkst mir Frieden",
"Du wirst uns eines Tages alle retten"
],
"talente": [
"Zaubertricks",
"Medium",
"Furcht einflößen"
],
"res": "1–4",
"ausr": [
"Kristallkugel",
"Gepulvertes Hirschgeweih (S. 123) oder Zunderbüchse",
"Dolch oder Kochtopf"
],
"quote": "Ich musste die Wahrheit wissen. Wie hatte ich die Gabe der Voraussicht erlangt, und wie konnte ich Männer vor Schmerz zusammenbrechen lassen, nur indem ich mir ihr schlagendes Herz vorstellte? Als ich jung in die Stadt zog, blieb meine Mutter in Långaby zurück, allein mit zwei Ziegen und einem Schwein, das sie seltsamerweise nach meinem verstorbenen Vater benannt hatte. Sie kam immer auf dieselben zwei Sätze zurück: Deine Wiege. Ich wachte auf und sah in deine Wiege. Schließlich verlor ich die Geduld und drohte ihr mit dem Schürhaken. Da erzählte sie es mir: Ich war gegen ein anderes Kind getauscht worden."
},
{
"id": "offizier",
"name": "Offizier",
"en": "Officer",
"attr": "Präzision",
"skill": "Fernkampf",
"p": 30,
"img": "charaktere_archetyp_offizier",
"vor": [
"Alexandra",
"Franz",
"Jarmo",
"Johan",
"Klara",
"Kristina"
],
"nach": [
"Almklint",
"Lidén",
"Nordenflycht"
],
"mot": [
"Meinen Vater stolz machen",
"Meine Freunde brauchen mich",
"Gefahr und Tod suchen"
],
"trauma": [
"Fast ertrunken, als ein Seeungeheuer dein Schiff hinabzog",
"Du verlorst all deine Männer an einen wütenden Riesen",
"Du sahst tote Krieger auf dem Schlachtfeld wiederauferstehen"
],
"geheim": [
"Fahnenflüchtig",
"Ich ertrage Schmutz und Unordnung nicht",
"Hat einen wehrlosen Feind getötet"
],
"beziehung": [
"Beschützt dich um jeden Preis",
"Mein Anführer",
"Misstraut dir"
],
"talente": [
"Kampferprobt",
"Gentleman",
"Taktiker"
],
"res": "3–7",
"ausr": [
"Gewehr oder Pistole",
"Kompass oder Bajonett",
"Kartenbuch oder Säbel"
],
"quote": "Als Kind verzauberten mich die glänzenden Orden der stattlichen Herren, die bei den Gesellschaften meiner Eltern über die Tanzfläche schritten. Ein Onkel lehrte mich schießen und die moralischen Grundsätze der Soldaten des Königs. Als ich zur Front ritt, malte ich mir meine glanzvolle Rückkehr aus. Niemand hatte mir gesagt, was dazwischen geschieht. Zwischen schreienden Körpern und ausgeweideten Soldaten sah ich Plünderung und Misshandlung. Eine Kugel aus den eigenen Reihen traf mich. Als ich erwachte, lag ich auf einem Karren voller Leichen. Die Wesen, die mich pflegten, sahen seltsam aus – ich glaube, es waren Trolle, freundlich und scheu. Meiner Mutter habe ich nichts davon erzählt."
},
{
"id": "priester",
"name": "Priester",
"en": "Priest",
"attr": "Empathie",
"skill": "Beobachtung",
"p": 31,
"img": "charaktere_archetyp_priester",
"vor": [
"Elizabeth",
"Erik",
"Lydia",
"Maria",
"Otto",
"Viktor"
],
"nach": [
"af Blacke",
"Forsmark",
"Nyström"
],
"mot": [
"Eine heilige Mission erfüllen",
"Meine befleckte Seele reinigen",
"Gottes Schöpfung verstehen"
],
"trauma": [
"Hast von einer Hexe verzaubert jemandem Leid zugefügt",
"Du sahst einen Kirchengrim Diebe zerreißen, die das Kirchensilber stehlen wollten",
"Dritter Besitzer eines Spertus, der der Kirche dient, um nicht verdorben zu werden"
],
"geheim": [
"Der Teufel spricht zu mir",
"Ich habe meine Identität gestohlen",
"Von einem Vaesen umgarnt"
],
"beziehung": [
"Ich bin besser als du",
"Heimlich in dich verliebt",
"Mein Schüler"
],
"talente": [
"Absolution",
"Segen",
"Beichtvater"
],
"res": "4–6",
"ausr": [
"Musikinstrument oder feiner Wein",
"Schreibzeug",
"Weihwasser oder alte Bibel (S. 123)"
],
"quote": "Ich war ein Skeptiker wie jeder andere. Trotz meines Kragens verkehrte ich mit modernen Denkern, die von den symbolischen Botschaften der Bibel sprachen. Leviathan, die große Teufelsschlange, war der Kampf der Menschheit gegen das Böse in ihr selbst. Besessenheit und Dämonen waren historische Beschreibungen seelischer Störungen. Aber ich habe Wiedergänger aus dem Fjord bei Vestnes an der norwegischen Küste kriechen sehen. Wir versteckten uns in der Kirche und ließen die Glocken läuten, bis das Morgenlicht sie vertrieb. Heute weiß ich es besser: Die Schrift ist wahr!"
},
{
"id": "privatdetektiv",
"name": "Privatdetektiv",
"en": "Private Detective",
"attr": "Logik",
"skill": "Nachforschung",
"p": 32,
"img": "charaktere_archetyp_privatdetektiv",
"vor": [
"Anders",
"Felicia",
"Gabriella",
"Henrik",
"Samuel",
"Stina"
],
"nach": [
"Bagghult",
"Järv",
"Mäkinen"
],
"mot": [
"Meiner Familie entkommen",
"Die Wahrheit aufdecken",
"Nervenkitzel suchen"
],
"trauma": [
"Du hörtest bei der Suche nach einem vermissten Kind den Schrei eines Myling",
"Du hattest Albträume und wachtest atemlos, von einem Mahr geritten, auf",
"Du standst einem Werwolf Auge in Auge gegenüber"
],
"geheim": [
"Auf meinen Kopf ist ein Preis ausgesetzt",
"Ständiger Ehebrecher",
"Drogensüchtig"
],
"beziehung": [
"Du glaubst, du kannst mir vertrauen",
"Ein guter Mensch",
"Versucht dich zu verstehen"
],
"talente": [
"Adlerauge",
"Elementar",
"Fokussiert"
],
"res": "2–5",
"ausr": [
"Lupe oder Dietriche",
"Revolver",
"Schlagring oder Fernglas"
],
"quote": "Nie kam mir in den Sinn zu fragen, warum man einen Detektiv bis nach Kristinehamn schickte, statt die örtlichen Behörden zu rufen. Ich nahm an, sie hätten vom Mann gehört, der die Hafenmorde aufklärte. Doch sie brauchten jemanden, der ein Schlachthaus aufräumt. Das Schloss sah aus, als wäre es von Kanonen beschossen worden. Es stank nach Blut und Kot. Ich bannte, was die Familie von Fleesingen angegriffen und ihre Körper nach außen gestülpt hatte – aber erst, nachdem es jeden Mann, jede Frau und jedes Kind in den Dörfern ringsum getötet hatte. Ich besuche das Schloss nun jede Nacht."
},
{
"id": "dienstbote",
"name": "Dienstbote",
"en": "Servant",
"attr": "Physis",
"skill": "Kraft",
"p": 33,
"img": "charaktere_archetyp_dienstbote",
"vor": [
"Anna",
"Elsa",
"Joakim",
"Rut",
"Sören",
"Torsten"
],
"nach": [
"Bäck",
"Rask",
"Änglund"
],
"mot": [
"Meinen Herrn beschützen",
"Neugier",
"Der Drang, Menschen und Vaesen gleichermaßen zu helfen"
],
"trauma": [
"Von einem Bachross gebissen",
"Du verlorst einen Herrn an den verlockenden Gesang des Nöck",
"Du dientest einem Haushalt, den ein Wechselbalg plagte"
],
"geheim": [
"Ich habe jemanden ermordet",
"Wegen meiner Religion verfolgt",
"Spioniert für eine fremde Macht"
],
"beziehung": [
"Zu Diensten",
"Von dir nehme ich keine Befehle",
"Gegenseitiger Respekt"
],
"talente": [
"Loyal",
"Robust",
"Hart im Nehmen"
],
"res": "2–4",
"ausr": [
"Revolver",
"Sturmlaterne oder Schminke",
"Feldküche oder einfache Verbände"
],
"quote": "Ich wurde von meiner kleinen Blase gerettet. Während ich an einem Baum pinkelte, tauchte auf der Weihnachtsfeier, die der Herzog uns Dienern einmal im Jahr am Abend des zweiten Feiertags erlaubt, ein ungeladener Geiger auf. Seine Melodien ließen meine Beine zucken. Durch das Fenster sah ich sie tanzen, die Gesichter zu verzweifeltem Grinsen erstarrt; sie konnten nicht aufhören. Ich hatte vom Instrument des Teufels gehört, das die Glieder zwingt, sich zu bewegen, bis sie abfallen. Als ich am nächsten Morgen zurückkehrte, war die Musik verstummt. Niemand sprach vom Fest. Mehr als die Hälfte kündigte."
},
{
"id": "vagabund",
"name": "Vagabund",
"en": "Vagabond",
"attr": "Physis",
"skill": "Manipulation",
"p": 34,
"img": "charaktere_archetyp_vagabund",
"vor": [
"Dagmar",
"Oskar",
"Rasmus",
"Rolf",
"Signe",
"Viola"
],
"nach": [
"Dolk",
"Eriksson",
"Krabbe"
],
"mot": [
"Meine Familie rächen",
"Übernatürliche Geheimnisse enthüllen",
"Gemocht werden"
],
"trauma": [
"Du sahst einen Wiedergänger aus seinem Grab steigen",
"Für immer in eine Waldfrau verliebt",
"Du überlebtest eine Woche im Trollsack"
],
"geheim": [
"Gestohlene Identität",
"Unheilbar krank",
"Ein Vaesen tötet jeden, den ich liebe"
],
"beziehung": [
"Eine Hand wäscht die andere",
"Geheuchelte Dankbarkeit",
"Du bist mein Freund"
],
"talente": [
"Vagabundentricks",
"Misstrauisch",
"Weitgereist"
],
"res": "1–3",
"ausr": [
"Wanderstock",
"Messer oder Brecheisen",
"Schnaps oder Hund"
],
"quote": "Ich war fünf, als ich lernte, Zinken zu ritzen und zu deuten. Mit fünfzehn stieß ich auf ein Zeichen, das ich nie gesehen hatte: in den Zaun eines abgelegenen Hofes gekratzt – ein Stern mit einem verzerrten Wachhund und mehrfach das Warnzeichen. Statt zu verschwinden, versteckte ich mich im Heuboden einer Scheune und wartete. Als es Nacht wurde, stieg ein helles Licht aus dem Boden, und ein Pfeifen schien vom Sternenhimmel zu kommen. Doch in der Tür stand ein hübscher Mann mit leuchtenden Augen. Ich brauchte zehn Jahre, um den Bann zu brechen, der mich zu seinem Sklaven machte. Wenn wir uns wiedersehen, zahlt er für die Demütigung."
},
{
"id": "schriftsteller",
"name": "Schriftsteller",
"en": "Writer",
"attr": "Empathie",
"skill": "Inspiration",
"p": 35,
"img": "charaktere_archetyp_schriftsteller",
"vor": [
"August",
"Edvard",
"Helena",
"Hugo",
"Maud",
"Selma"
],
"nach": [
"Johansson",
"Nilsson",
"Skytte"
],
"mot": [
"Ein bestimmtes Vaesen finden",
"Ein Buch recherchieren",
"Rache"
],
"trauma": [
"Verärgerte Feen schläferten dich ein und sogen dein Blut",
"Ein obdachloser Vaettir verfluchte dich, ein Buch in deinem eigenen Blut zu schreiben",
"Du hörtest das Lied des Nöck, konntest den Text aber nicht aufschreiben"
],
"geheim": [
"Ich halte Geheimnisse und Schwächen meiner Freunde fest und nutze sie",
"Wegen revolutionärer Ideen gesucht",
"Mein Lebenswerk ist eine Lüge"
],
"beziehung": [
"Du inspirierst mich",
"Versucht, deine Anerkennung zu gewinnen",
"Du machst mir Angst"
],
"talente": [
"Automatisches Schreiben",
"Journalist",
"Wortschmied"
],
"res": "2–5",
"ausr": [
"Schreibzeug und Papier",
"Kamera oder Opernglas",
"Hund oder Büchersammlung"
],
"quote": "Wollte die Kreatur mir schaden oder einen Gefallen tun? Ich saß mehrere Nächte in meiner Kammer, ohne Geld für Kerzen oder Lampenöl, nur mit einem Stapel leerer Blätter und meinem knurrenden Magen – so dachte ich. Plötzlich war etwas neben mir und hauchte weiße Wolken in die kalte Luft. Es packte meine Feder mit festem Griff und schrieb. Anfangs freute ich mich an den schönen Worten, doch es hörte nicht auf. Fünf Tage und Nächte schrieb die Kreatur mit meiner Hand. Das Ergebnis war das Buch, von dem alle sprechen – und die Finger, die ich nicht mehr benutzen kann. Ihr Gesicht sah ich nie. Aber ich werde sie wiederfinden."
}
];
var VAE_ALTER = [["Jung","17–25",15,10],["Mittleren Alters","26–50",14,12],["Alt","51+",13,14]];
