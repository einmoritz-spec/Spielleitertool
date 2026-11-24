/* SLUGBLASTER · Oolroob – Teil C: Signaturen & Ausrüstung (S. 14–15), Kreaturen (S. 16–17), Verschiedenes (S. 18), Credits (S. 19).
   Bauteile-Kürzel wie im Regelbuch: L Linse · S Spule · D Scheibe · E Edelstein. */
var SB_OO_C = {
 sig: {
  p: 14,
  neu: [
   {t: "Disco Crystal", k: "1E 1D", x: "Aus einem in den Minen ausgegrabenen Edelstein, befestigt an einigen Hardlight-Projektoren. Lade ihn auf und wirf ihn, um alles um ihn herum mit seinen atemberaubenden Hardlight-Fraktalen zu blenden oder vorübergehend zu blenden."},
   {t: "Ankle Biter", k: "1S", x: "Ein umgebauter Taschenroller aus der Zeit vor Hardlight und Hovertech. Klapp ihn auf volle Größe aus und schwing ihn über dem Kopf wie Hubschrauberblätter, um kurze Strecken zu fliegen, oder schwing ihn um deine Füße, um anderen die Knöchel zu brechen!"}
  ],
  board: {
   t: "Quantum-Shift Surfboard", p: 15, rand: ["B.U.N.N.O.S-Quantentotem zum Selbstbauen", "Hyperstatisch kanalisiertes Board"],
   x: "Ursprünglich von den Board-Moddern im Schuppen gebaut, wurden Quantum-Shift-Surfbretter aus gestohlener Top-Secret-Technik zusammengehackt. Sie können nach dem Willen des Nutzers Form und Gestalt wechseln, solange er das Quantentotem bei sich trägt. Seit ihrer Erfindung werden die Teile von B.U.N.N.O.S massenhaft nachgebaut und finden sich ebenso im Vorrat der Sharkerz wie der Sluggaz.",
   funk: "Verändere Aussehen, Form und Größe deines Boards nach Belieben. Würfle, um den Gestaltwandel des Boards zu nutzen und die Welt um dich herum zu manipulieren (Dinge greifen, werfen, verlangsamen usw.).",
   look: "Void, holzig, hyperchromatisch, lila-orange, TV-Rauschen, flüssig, verspiegelt, fraktalin",
   mods: [
    ["Singularity Compressor", "1S 1E", "Würfle, um einen Raum von der Größe zwischen einem Atom und einem kleinen Zimmer in dein Totem zu komprimieren und ihn, wann du willst, genau so wieder freizugeben, wie er beim Komprimieren war. Lebewesen nehmen zwischen Kompression und Ausdehnung keine vergehende Zeit wahr. Es kann nur ein Raum oder ein Lebewesen gleichzeitig komprimiert sein."],
    ["Cathodic Noise Portal", "1L 1S", "Reiß einen Tunnel durch das multiversale Noise und erschaffe ein Portal zu einem Punkt bis zu einem Footy-Feld entfernt."],
    ["Atribution Manipulation Extender", "1D 1S", "Dehne die Fähigkeit des Boards, sein Aussehen zu verändern, auf andere Objekte oder Wesen aus. Wegen der Kausalitätsinstabilität kehren diese Veränderungen bald nach dem Kontakt mit anderen Lebewesen zurück."],
    ["Timeline Phase Jumper", "1D 1L 1E", "Spring in einen anderen Zweig deiner lokalen Zeitlinie und zurück, um einem Slam auszuweichen; markiere 1 Trouble."],
    ["Multiversal Shift Engine", "1L 2E 1D", "Würfle, um einen Teil deines Universums mit seinem Gegenstück in einer anderen Dimension zu vertauschen, bis zur Größe eines mittelgroßen Gebäudes, ODER um den perfekten Gegenstand aus dem Multiversum zu ziehen."]
   ]
  },
  gear: [
   {t: "Quantum Entangler", k: "1L 1D", x: "Ein kleines schraubenzieherartiges Gerät mit einer Linse am Ende. Triff zwei Dinge mit seinem unsichtbaren Strahl, um ihre Atome quantenverschränkt zu verbinden; drück den zweiten Knopf, um ihre Plätze sofort zu tauschen. Muss nach jedem Einsatz mit kinetischer Energie aus Raumzeitwellen aufgeladen werden."},
   {t: "Superkinetic Tether", k: "1S", x: "Sieht aus wie eine Hardlight-Version dieser Gummihände, die man gegen Wände schleudert, damit sie kleben bleiben. Nutze sie, um dich an Oberflächen festzuhalten und dich mit superkinetischer Geschwindigkeit zu ihnen hinzukatapultieren (oder sie zu dir)."},
   {t: "Shift-proof Hypersuit", k: "2S", x: "Ein Neoprenanzug aus der neuesten multiversalen Stabilisierungsfaser, der bei Kontakt alle Flüssigkeiten in lauwarmes Meerwasser verwandelt; nope flüssigkeitsbasierte Slams für 1 Trouble."},
   {t: "Lil S-Key", k: "1S", x: "Eine kleine blau-weiße Box, die ähnliche Technik wie der Schlüssel nutzt. In ihrem Inneren liegt eine Taschendimension absoluter Kälte; nutze sie, um Getränke zu kühlen, oder schütte sie aus, um Dinge sofort einzufrieren."},
   {t: "Homing Zoomerang", k: "1D", x: "Ein kleines V-förmiges Gerät mit Steuerung. Stell sein Ziel ein und lass es los, um es auszuschalten, oder lass es das Ziel verfolgen, bis du den Rückruf-Knopf drückst."},
   {t: "Grabby Boom", k: "1L 1S", x: "Ein umfunktioniertes Bergbauwerkzeug, das eigenständig oder an deiner Raygun befestigt genutzt werden kann. Schieß damit eine winzige Singularität ab, die Dinge zu sich zieht und ihre Flucht verhindert."}
  ]
 },
 kreaturen: [
  {t: "Portaroo", p: 16, bild: null,
   x: "Die in den Wüstenebenen von Karlup heimischen Portaroos sind eine Plage für Slugblaster und besorgte Eltern gleichermaßen. Zwischen drei und neun Fuß groß (etwa 1 bis 2,70 Meter), sind Portaroos durchtrainierte Muscupials, die mit ihren federnden Schwänzen und Hinterbeinen über hohe Gebäude springen, sich dann in ihren Portalbeutel falten, hinter dir auftauchen und all den Schwung in einen schmerzhaften Tritt leiten.",
   l: ["Stellt sich aggressiv in den Weg wie der Türsteher bei dem Konzert, in das du dich schleichen wolltest (*eingeschüchtert, blockiert usw.*)", "Springt höher und schneller, als du es je für möglich halten würdest.", "Ruft seine Familie als Verstärkung durch seinen Portalbeutel herbei.", "Saugt dich in seinen Portalbeutel und schickt dich über die Ebenen oder sogar in andere Dimensionen (*geportet, verloren usw.*)", "Teleportiert sich panisch weg, wenn es keinen anderen Ausweg hat, und hinterlässt ein Portal zu wer weiß wohin, manchmal sogar durch den P-Raum hindurch."]},
  {t: "Großer Roter Sharktopus", p: 16, bild: "sharktopus",
   x: "Blutrot und mit kräftigen Tentakeln bedeckt, wachsen die Razzos von der Größe deines kleinen Bruders als Säugling bis zur Größe eines Transporters als Erwachsene (obwohl Gerüchte besagen, dass einer von der Größe eines Wohnblocks einen Bissen aus Roob nahm, um die Wandelstrände zu schaffen). Sie halten sich meist im Ozean und im Fluss auf, kommen aber manchmal an Land, wenn sie genug Angst wittern, und laufen auf ihren zahlreichen Tentakeln und richten überall, wo sie hinkommen, Verwüstung an.",
   l: ["Reitet die Quantenwellen und schwimmt mit furchterregender Absicht durch Dimensionen.", "Obwohl fast völlig blind, kann es dich an deiner Angst aus Dimensionen Entfernung aufspüren!", "Packt dich mit einem seiner scharfen, saugnapfbesetzten Tentakel, zerquetscht dich oder schleudert dich herum. (*Angesaugt, geschleudert usw.*)", "Beißt dich mit seinen rasiermesserscharfen Zähnen und nährt sich vom Schrecken und Schmerz, den es verursacht. (*Zerfetzt, von Angst verzehrt usw.*)", "Besprüht dich mit kochend heißer, blutroter Säure, die es aus einem seiner vielen Mägen hochwürgt. (*Geschmolzen, verbrannt, aufgelöst usw.*)"]},
  {t: "Hoop-snake", p: 17,
   x: "Zunächst sieht sie aus wie eine gewöhnliche hyperchromatische Schlange, doch wenn sie bedroht wird, beißt die Hoop-snake sich in den Schwanz und formt eine endlose Schleife, die Größe und Länge verändert und mit wahnsinniger Geschwindigkeit rollt.",
   l: ["Rollt mit Überschallgeschwindigkeit auf dich zu.", "Verändert Größe und Länge: Sie verkleinert die Schleife, um schneller und wendiger zu sein, und wächst, um erdrückende Kraft zu gewinnen.", "Löst ihren Schwanz und schlägt mit peitschenartiger Kraft nieder. (*Ausgepeitscht, benommen usw.*)", "Wird lang genug, um dich in ihren endlosen Schlingen zu verheddern. (*Zerquetscht, festgenagelt, eingeschnürt usw.*)", "Verbindet sich mit Unmengen anderer Hoop-Snakes zu einem Mega-Hoop, einer unbegreiflichen Masse verhedderter Hoopies, bei der man nicht mehr erkennt, wo eine aufhört und die nächste anfängt. (*Verängstigt, vom Unendlichen wahnsinnig gemacht usw.*)"],
   rand: "Der Legende nach schwimmt ein entwirrter Mega-Hoop durch die Dünen und verschluckt jeden, der sich zu weit hinauswagt."},
  {t: "Dropbear", p: 17,
   x: "Hoch oben auf den spärlichen Ewigbrand-Bäumen von Karlup lebt das Dropbear. Es sieht aus wie ein süßer, kuscheliger Teddybär aus reinem Feuer, ist aber so bösartig wie der Rest der Bewohner dieser Dimension.",
   l: ["Lässt sich von den brennenden Bäumen auf dich fallen und packt dich mit seinen scharfen, brennenden Pfoten. (*Versengtes Haar, fallen gelassen usw.*)", "Brennt heißer und heller, je wütender es wird.", "Beißt dich mit seinem ofenartigen Maul und kauterisiert dabei die Wunde. (*Kauterisiert, verbrannt usw.*)", "Kann von seiner Wut beruhigt werden, indem man ihm etwas Panic-Energydrink gibt; dann sinken seine Flammen zu einer glimmenden Glut herab, und es wird zu einem kuscheligen, warmen Freund."]},
  {t: "Darkswan", p: 17,
   x: "Eng verwandt mit den Schwänen anderer Dimensionen, ist der Darkswan ein Vogel, der aus dem Weltraum selbst besteht. Er wird nur selten gesichtet; man sagt, er zeige sich nur in Zeiten großen Wandels.",
   l: ["Lenkt dich mit der strahlenden Schönheit seiner endlosen Nebel und werdenden Sterne ab. (*Glimmer-gebannt, abgelenkt usw.*)", "Nichts scheint ihn zu treffen – ist es überhaupt möglich, gegen ihn zu kämpfen?", "Erfüllt dich mit existenzieller Angst vor der unendlichen Größe des Universums in seinen Flügeln. (*Kosmische Panik, Thanatophobie usw.*)", "Hüllt die Umgebung in leuchtende Dunkelheit. (*Geblendet, Schwindel usw.*)", "Fällt in sich zusammen und platzt in ein neues Universum."]},
  {t: "Boondaburra", p: 17,
   x: "Die Burra sehen aus wie das Ergebnis einer wilden Nacht zwischen einer Ente, einem Biber, einem Otter und einer Ratte und gehören zu den wildesten Kreaturen in Roob. Sie leben meist im Fluss, sind aber von Natur aus Experten darin, sich durch die Wandelstrände zu bewegen, um ihre Beute zu jagen: den Großen Roten Sharktopus.",
   l: ["Blendet dich mit einem hellen Regenbogenblitz seines leuchtenden Fells. (*Geblendet, hypergeblitzt usw.*)", "Wittert die Gefühle, die du empfindest (meist Angst und Verwirrung).", "Beißt dich mit seinem gezahnten, kettensägenartigen Schnabel. (*Zerfetzt, angeknabbert usw.*)", "Schießt giftige Sporne aus seinen Knöcheln und lässt dich halluzinieren. (*Auf Trip, hypnotisiert usw.*)", "Wächst auf das Zehnfache seiner Größe, groß genug, um dich im Ganzen zu verschlucken."]}
 ],
 snacks: [
  "Digital Whiskies", "Tim’s Tims", "Yeastymite", "Caramello-Dropbears", "Sour Panic Chews", "Saussage Rollers",
  "No I in Team", "Fractals", "Picco Bars", "A.S.N.A.K Buiscuits", "Tooth Pullers", "Revivihoops",
  "Spongey Smashers", "Violent Crushes", "Chromatochips", "Snotblock", "Fricks", "Ancient Stix",
  "Caramel Boards", "Wheelies", "Ice-Slice", "Mentals", "Crunchyroos", "Hyper-hoops",
  "Fireysuns", "Fairy Bread", "Freddie Froggaz", "Cheerie Rippaz", "Jaxos", "Milkaz",
  "Glactic Blasts", "Chocohologram", "Mi-Mixes", "Twisted Tails", "Party Pies", "Metasnag-Sizzle"
 ],
 slang: [
  ["Billy", "Bong"], ["Slugout", "Gescheiterter Slugblaster"], ["Shifto", "Beachguard"], ["Northie", "Jemand aus Nord-Roob"], ["Southo", "Jemand aus Süd-Roob"], ["Razzo", "Großer Roter Sharktopus"],
  ["Pozzie", "Portaroo"], ["Hoopie", "Hoopsnake"], ["Burra", "Boondaburra"], ["Swazza", "Darkswan"], ["Hovvo", "Hoverboard"], ["Lazzies", "Laser-Skates"],
  ["Goonbag", "Beutelwein"], ["Thizzo", "Thin-Zone"], ["Resso", "Rescue-Agent"], ["Hardies", "Hardecker"], ["Scrat", "Scramcat"], ["Funt", "Von FUST gesponserter Slugblaster"],
  ["Oppie", "Jemand aus Operaeblum"], ["Emps", "Empyrean"], ["Poppie", "Jemand aus Popularia"], ["Callo", "Calorium"], ["Prisso", "Prismatia"], ["Dessie", "Desnine"],
  ["Spennie", "Jemand aus Thennis Spar"], ["Vasso", "Vastiche"], ["Goldo", "Goldener Dschungel"], ["Peelie", "Jemand, der „peeled back“ ist"], ["Nullie", "Jemand aus Null"], ["Munted", "Völlig kaputt"],
  ["Drongo", "Idiot"], ["Cooked", "Erledigt, ausgelaugt, verrückt"], ["Deadly", "Krass, cool, genial"], ["Yarn", "Eine Geschichte erzählen, quatschen"], ["Woop-Woop", "Mitten im Nirgendwo"], ["Shout", "Etwas für einen Freund kaufen"]
 ],
 credits: {
  p: 19,
  grp: [
   ["Schreiben & Layout", ["M Alexandria (inspiriert von Mikey Hamm)"]],
   ["Korrektur", ["Daniel Charlton", "Stpd_Mnky"]],
   ["Lektorat", ["Shadowpuppet", "M Alexandria"]],
   ["Kunst", ["Cillian Wilbur (Cover, S. 5, 8, 9, 11, 14)", "Kaev (S. 5)", "M Alexandria (S. 4, 10, 11)", "Saph @yaboiskelly (S. 12)"]],
   ["Besonderer Dank", ["DMRawlings", "Nevyn87", "Dan", "Zebogo", "bongbingo", "Hendrik", "zbash", "& der Rest vom Wilkies Candy Lab", "Silas Beryson, mein kleiner Bruder", "TJ", "Jenxolotyl", "das mächtige They-Biest", "Papa", "Die Gaymes Night Crew", "Der Interdimensional Slugmail"]],
   ["Ganz besonderer Dank", ["Mikey Hamm, dafür, dass er Slugblaster gemacht hat – ohne das ich Roob nie gemacht hätte."]]
  ],
 lic: "Oolroob wurde von Miles Alexandria erschaffen und steht unter der Creative-Commons-Lizenz Namensnennung – Weitergabe unter gleichen Bedingungen 4.0 International (https://creativecommons.org/licenses/by-sa/4.0/). Slugblaster Copyright © 2022 Mikey Hamm. Alle Rechte vorbehalten. Dieses Werk basiert auf Blades in the Dark (http://www.bladesinthedark.com/), einem Produkt von One Seven Design, entwickelt und verfasst von John Harper und mit Genehmigung unter der Creative-Commons-Lizenz Namensnennung 3.0 Unported (http://creativecommons.org/licenses/by/3.0/) genutzt."
 }
};
