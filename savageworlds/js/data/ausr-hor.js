/* Horror-Begleiter, Kapitel Ausrüstung (S. 25–28). Gewichte in kg (halbe Pfund-Angaben des Originals), Kosten in $. */
(function(){
var bk = "sw_hor";
window.SW_WAFFEN_HOR = [
{k:"Fernkampfwaffen",s:"HOR",bk:bk,p:26,h:"Horror-Fernkampfwaffen",
 i:"* Kreaturen mit einer Schwäche gegen Weihwasser können zusätzliche Effekte erleiden. Siehe S. 118 für Dämonen und S. 167 für Vampire.",
 cols:["Typ","Reichweite","Schaden","FR","Schuss","Mindeststärke","Gewicht (kg)","Kosten"],
 g:[{h:"",r:[
 {c:["Atomarer Geisterrucksack","5/10/20","Spezial","1","24","W6","7,5","3.000"],n:"Hat zwei Einstellungen: Fangen und Vernichten. Auf Vernichten verursacht er 2W8 Schaden bei ätherischen Kreaturen. Der Fangmodus verursacht keinen Schaden, fesselt den Geist aber in einem Netz aus knisternder Energie. Bei einem erfolgreichen Schießen-Wurf ist der Geist Verheddert. Bei einer Steigerung ist das Ziel völlig Gebunden. Andere Geister können versuchen, den gefangenen Geist zu befreien, indem sie seinen Wurf zum Entkommen unterstützen. Ein ätherisches Wesen kann sicher 3\" (6 Meter) pro Runde bewegt werden, solange es im Feld gefangen ist."},
 {c:["Armbrust, Mini-","6/12/24","2W4","1","1","—","1,5","200"],n:"PB 1. Von Hand gespannt."},
 {c:["Armbrust, Repetier-","15/30/60","2W6","3","36","W6","6","800"],n:"PB 2. Ein neues Magazin einzulegen dauert eine Aktion."},
 {c:["Armbrust, Winden-","5/10/20","2W6","1","1","W6","7,5","650"],n:"PB 2; Nachladen 2. Verursacht der Schütze eine Wunde, gräbt sich der Bolzen ins Fleisch des Opfers. In seiner nächsten Aktion kann der Schütze die Winde drehen und das Opfer näher heranziehen. Das erfordert eine Vergleichende Stärkeprobe gegen das Ziel. Ein Opfer, das sich an etwas Festem festhalten kann, wie einem Stützbalken oder einem Türrahmen, erhält +2 auf seinen Wurf. Bei einem Erfolg wird das Opfer 3\" (6 Meter) herangezogen, bei einer Steigerung 6\" (12 Meter)."},
 {c:["Leuchtpistole (Pistole)","3/6/12","2W4","1","1","—","2","100"],n:"Nachladen dauert 1 Aktion. Kann Ziele in Brand setzen (siehe Gefahren in Savage Worlds)."},
 {c:["Weihwasser, Granate*","5/10/20","—","—","1","—","1","30"],n:"Dieser kleine Sprengkörper füllt eine Kleine Explosionsschablone mit Weihwasser. Verwende den Athletikwurf als Test gegen alle Kreaturen in der Schablone; übernatürlich böse Kreaturen widerstehen mit –2."},
 {c:["Weihwasser, Pistole*","1/2/3","—","1","5","—","2","5"],n:"Schießen als Test; übernatürlich böse Kreaturen widerstehen mit –2. Ein zweihändiges „Super Soaker“ kostet 50 $ und erhöht die Reichweite auf 3/6/9."},
 {c:["Weihwasser, Spray*","1","—","1","2","—","0,5","5"],n:"Ein kleiner Zerstäuber mit Weihwasser. Das Besprühen eines Ziels ist ein Athletiktest; übernatürlich böse Kreaturen widerstehen mit –2."},
 {c:["Pflock, geworfen","2/4/8","Stä+W4","—","—","—","1","10"],n:""},
 {c:["UV-Granate","5/10/20","Spezial","—","—","—","1","100"],n:"Mittlere Explosionsschablone, mit Athletik geworfen. Jeder in der Schablone ist Abgelenkt, sofern sein Sehvermögen nicht immun oder irgendwie geschützt ist. Kreaturen mit einer Schwäche gegen Sonnenlicht, wie Vampire, erleiden 3W6 Schaden durch den gleißenden Blitz."}]}]},
{k:"Fernkampfwaffen",s:"HOR",bk:bk,p:27,h:"Horror-Munition",
 i:"Verwende bei Bedarf für das Gewicht die Standardmunition der Feuerwaffe.",
 cols:["Munition","Kosten","Gewicht (kg)","Anmerkungen"],
 g:[{h:"",r:[
 {c:["Bolzen (Mini-Armbrust)","1","0,5/10","—"],n:""},{c:["Bolzen (Repetier-Armbrust)","75","3","Fasst 36 Bolzen"],n:""},{c:["Bolzen (Winden-Armbrust)","10","0,5","—"],n:""},
 {c:["Knoblauchkugeln","+5/50","*","Verursachen normalen Schaden gegen Vampire"],n:""},
 {c:["Silberkugeln","+10/50","*","Verursachen normalen Schaden gegen Lykanthropen; –1 PB (Minimum 0 PB)"],n:""},
 {c:["Silbernitratkugeln","+20/50","*","+4 Schaden gegen Lykanthropen"],n:""},
 {c:["UV-Kugeln","+100/50","*","+4 Schaden gegen Vampire; –1 PB (Minimum 0 PB)"],n:""}]}]},
{k:"Nahkampfwaffen",s:"HOR",bk:bk,p:27,h:"Horror-Nahkampfwaffen",
 cols:["Typ","Schaden","Mindeststärke","Gewicht (kg)","Kosten"],
 g:[{h:"",r:[
 {c:["Leichenfänger","—","W6","2","300"],n:"Reichweite 1. Ein erfolgreicher Kämpfen-Angriff bedeutet, dass das Ziel um die Hüfte gepackt und Verheddert ist; mit einer Steigerung sind auch die Arme fixiert und das Ziel ist Gebunden."},
 {c:["Pflock","Stä+W4","—","1","10"],n:""},{c:["Pflock (silberne Spitze)","Stä+W4","—","1","110"],n:""}]}]}
];
var gear = [
["Kruzifix/heiliges Symbol","20","0,1","Kann Kreaturen auf Abstand halten, wenn es gezeigt wird. Ein erfolgreicher Berührungsangriff mit dem Symbol verursacht 2W4 Schaden. Wirkt nicht durch Rüstung, aber der Angreifer kann mit einem Gezielten Angriff alle Stellen außer versiegeltem Schutz umgehen."],
["EMF-Messgerät","40","0,5","Wiederaufladbarer Detektor, der einen digitalen Messwert anzeigt, wenn ein spirituelles Wesen, das ein elektromagnetisches Feld ausstrahlt (die meisten Geister und Dämonen), innerhalb von 6\" (12 Metern) ist."],
["Geisterfalle","200","2,5","Sobald ein Geist in einer Kleinen Explosionsschablone um die Falle ist und das Gerät aktiviert wurde, muss der Geist eine Stärkeprobe mit –2 ablegen. Misslingt sie, wird er eingesogen und kann nicht entkommen. Geisterfallen wirken nur bei ätherischen Wesen."],
["Bewegungsmelder","30","2","Bewegungsmelder verwenden ein Lasergitter oder ähnliche Technik, um Bewegung in einer Reichweite von 10\" (20 Metern) in einem Bogen von 90 Grad zu erkennen. Das schließt die Bewegung der meisten ätherischen Wesen ein (Entscheidung des SL). Eine fortgeschrittene Ausführung kostet 500 $ und enthält einen Bildschirm, der die Anwesenheit als Strichmännchen darstellt."],
["Kinect-SLS-Kamera","500","1","Eine Infrarotkamera mit Bildschirm wie bei einem Handy oder Tablet, die erkannte Bewegung auf Punkte abbildet, die grobe Strichmännchen bilden und die allgemeine Form und Bewegung sonst unsichtbarer Kreaturen zeigen. Das negiert 2 Punkte Unsichtbarkeitsabzüge für alle, die den Bildschirm sehen können."],
["Kirlian-Kamera, Foto","260","1,5","Fängt Bilder ätherischer Wesen selbst in völliger Dunkelheit ein. Film für die Kamera kostet 10 $ für 24 Aufnahmen."],
["Kirlian-Kamera, Video","600","3","Zeigt die „Aura“ ätherischer Wesen. Der Film kann nicht angesehen werden, während er aufnimmt, lässt sich aber nach dem Ereignis über den Sucher abspielen. Vierstündige Videobänder kosten je 20 $."],
["Kirlian-Brille","1.400","1","Erlaubt dem Träger, unsichtbare und ätherische Wesen zu sehen, und ignoriert alle Abzüge, sie anzugreifen. Der Träger erleidet allerdings –1 auf alle Handlungen, die nicht direkt ein ätherisches Wesen betreffen."],
["Halsschutz, Leder","30","0,5","Gewährt +1 Panzerung gegen Gezielte Angriffe auf den Hals."],
["Halsschutz, Metall","120","1,5","Gewährt +3 Panzerung gegen Gezielte Angriffe auf den Hals."],
["UV-Taschenlampe","65","2","Verwende die Kegelschablone für den UV-Strahl. Alle Ziele in der Schablone können ausweichen oder sind betroffen, als stünden sie im hellen Sonnenlicht. Kreaturen, die vollständig mit Stoff bedeckt sind, sind nicht betroffen (Entscheidung des SL)."]
];
var mat = [
["Silber","In den meisten Horror-Settings muss ein Silbergegenstand aus reinem Silber sein, um wirksam zu sein. Eine Klinge mit einer Silberschicht überziehen wirkt einfach nicht. Eine Nahkampfwaffe aus reinem Silber kostet das Fünffache des Normalen. Sie verursacht normalen Schaden, kann aber Kreaturen verletzen, die gegen gewöhnliche Klingen immun sind."],
["Kaltes Eisen","Kaltes Eisen ist Eisen, das vor der Verarbeitung nicht in einer Esse erhitzt wurde. Es enthält daher keinen Kohlenstoff und ist rein, aber auch spröde. Nahkampfwaffen aus kaltem Eisen kosten das Doppelte des Normalen und zerbrechen, wenn der Führende beim Kämpfen einen Kritischen Fehlschlag würfelt."]
];
var HW = "Weihwasser ist normales Wasser, das von einem geweihten Mitglied einer organisierten Religion gesegnet wurde, die grundsätzlich gute (nicht zerstörerische) Lehren vertritt. Der „Priester“ muss den Vorteil Arkaner Hintergrund (Wunder) haben. Das Segnen eines halben Liters Wasser erfordert eine Glaubensprobe und verbraucht 1 Machtpunkt. Das Wasser bleibt gesegnet, bis es verwendet oder aktiv entweiht wird. Das Mischen von Weihwasser mit normalem Wasser verdünnt es genug, um als entweiht zu gelten. In einem Fantasy-Spiel sollten die meisten „guten“ Gottheiten ihren Priestern erlauben, Wasser zu segnen. Es kann natürlich Ausnahmen geben. Der Gott des Feuers etwa, wiewohl wahrscheinlich eine wohlwollende Gottheit, wird sehr wahrscheinlich nicht wollen, dass Wasser bei religiösen Zeremonien zu seinen Ehren verwendet wird. Kreaturen mit einer Schwäche gegen Weihwasser können zusätzliche Effekte erleiden (siehe S. 167).";
window.SW_AUSR_X = window.SW_AUSR_X || [];
SW_AUSR_X.push({k:"Horror-Ausrüstung",s:"HOR",fn:function(){
  return rkSec("Spezielle Ausrüstung","HOR",bk,28) + eqTable(["Gegenstand","Kosten","Gewicht (kg)"], gear.map(function(g){ return {c:[g[0],g[1],g[2]],n:g[3]}; })) +
    rkSec("Weihwasser herstellen","HOR",bk,28) + edP(HW) +
    rkSec("Reinheit der Substanzen","HOR",bk,25) + '<div class="hg">' + mat.map(function(m){ return '<div class="hc" style="--rc:#7a2230"><b>' + nm(m[0]) + "</b><p>" + esc(m[1]) + "</p></div>"; }).join("") + "</div>";
}});
function rkSec(h, s, bk, p){ return '<h4 class="rk" style="--rc:#a51f1a"><span>' + nm(h) + "</span>" + sqBadge([s]) + pgLink(bk, p) + "</h4>"; }
})();
