/* Mythic Britain & Ireland – Anhang: Hintergrundtabellen (Buch S. 150–153). */
(function(){
var P = [
["11–15","—","—","—","Vagabund","Vagabund (A)","0"],
["16–22","11","—","—","Dieb","Vagabund (A)","+1"],
["23–24","12–14","—","—","Schläger","Dienstbote (B)","+2"],
["25–31","15–16","—","—","Kraftprotz","Athlet (K)","+1"],
["32–33","21–23","—","—","Magier","Okkultist (D)","+1"],
["34–36","24–25","—","—","Tagelöhner","Vagabund (A)","+1"],
["41–43","26–31","—","—","Matrose","Offizier (E)","+2"],
["44–52","32–33","11–12","—","Soldat","Offizier (E)","+2"],
["53","34","—","—","Zirkuskünstler","Unterhaltungskünstler (L)","+1"],
["54","35","—","—","Boxer","Athlet (K)","+1"],
["55–56","36–41","—","—","Prediger","Priester (J)","+1"],
["61–62","42–43","—","—","Butler","Dienstbote (B)","+2"],
["63","44–45","—","—","Koch","Dienstbote (B)","+2"],
["64","46","—","—","Entfesselungskünstler","Athlet (K)","+1"],
["65","51–52","—","—","Medium","Okkultist (D)","+2"],
["—","53–54","13–14","—","Sänger","Unterhaltungskünstler (L)","+2"],
["—","55–56","15–16","—","Polizist","Privatdetektiv (F)","+2"],
["66","61–62","21","—","Jäger","Jäger (C)","+2"],
["—","63–64","22","—","Förster","Jäger (C)","+2"],
["—","—","23","11–14","Forschungsreisender","Jäger (C)","+3"],
["—","—","24","15","Illusionist","Okkultist (D)","+2"],
["—","65","25","—","Schauspieler","Unterhaltungskünstler (L)","+2"],
["—","—","26","—","Chirurg","Arzt (I)","+2"],
["—","—","31","—","Vikar","Priester (J)","+2"],
["—","—","32","—","Detektiv","Privatdetektiv (F)","+3"],
["—","66","33","16","Spion","Gesellschaftsmensch (M)","+3"],
["—","—","34–35","—","Anwalt","Privatdetektiv (F)","5"],
["—","—","36","21–23","Autor","Schriftsteller (G)","+1"],
["—","—","41–42","—","Journalist","Schriftsteller (G)","+2"],
["—","—","43","24–25","Dichter","Schriftsteller (G)","+1"],
["—","—","—","26–31","Dilettant","Gesellschaftsmensch (M)","+3"],
["—","—","44","—","Psychiater","Arzt (I)","+2"],
["—","—","45–46","32","Akademiker","Akademiker (H)","+3"],
["—","—","51–54","33–34","Staatsdiener","Akademiker (H)","+3"],
["—","—","—","35–36","Investor","Gesellschaftsmensch (M)","+4"],
["—","—","—","41–42","Dekan","Priester (J)","+3"],
["—","—","55–62","43","Arzt","Arzt (I)","+3"],
["—","—","63–64","44–52","Bohemien","Akademiker (H)","+1"],
["—","—","65–66","53–66","Militäroffizier","Offizier (E)","+3"]
];
function ev(title, rows){ return rows.map(function(r,i){ return [String(i+1), "<b>" + r[0] + ".</b> " + r[1], r[2].map(function(s){ return "<span style=\"white-space:nowrap\">" + s + "</span>"; }).join("<br>"), r[3]]; }); }
var H = ["W6","Ereignis","Fertigkeiten","Ausrüstung"];
var K = ev("K",[
["Verletzt","Du wurdest bei der Arbeit schwer verletzt und musstest lange Zeit genesen. Vielleicht ein missglückter Stunt oder ein übereifriger Gegner. Du trägst noch die Narben als Beweis.",["HEILKUNDE 1","WACHSAMKEIT 1"],"Medizinische Ausrüstung"],
["Harte Arbeit","Du nahmst, was du an Auftritten bekommen konntest, um die Rechnungen zu bezahlen. Es war nicht glamourös, aber du durftest tun, was du liebst.",["BEWEGLICHKEIT 1","KRAFT 1"],"Schnaps"],
["Rivale","Vielleicht war es eine enge Freundschaft, die zerbrach, oder ein Fremder, der deinen Weg einmal zu oft kreuzte. Du gewannst einen Rivalen, der dich genauso hasst wie du ihn.",["BEOBACHTUNG 1","HEIMLICHKEIT 1"],"Dietriche"],
["Leistung","Du vollbrachtest eine große Tat, die deine Umgebung beeindruckte. Vielleicht rettetest du jemanden aus einem Feuer oder fingst für deinen Arbeitgeber eine Kugel ab. Was immer es war, die Leute sahen zu dir auf. Du hast deinen Mut gewiss bewiesen.",["INSPIRATION 1","KRAFT 1"],"Edle Weine"],
["Herzensdame","Du trafst jemanden, der dich glücklich machte, und die Liebe wurde erwidert. Die Liebe gab deinem Leben Sinn, und die Zukunft sah strahlend aus. Vielleicht seid ihr noch zusammen, oder ihr gingt getrennte Wege, als die Leidenschaft verblasste.",["MANIPULATION 1","BEWEGLICHKEIT 1"],"Haushund"],
["Nationalheld","Du hast es endlich geschafft. Vielleicht brachst du einen Rekord oder gewannst einen angesehenen Kampf. Was immer es war, plötzlich standest du auf der Titelseite, und die Kinder sahen zu dir auf. Irgendwann verblasste das Rampenlicht, und vielleicht war das gut so. Aber du vermisst diese Tage noch.",["BEWEGLICHKEIT 1","INSPIRATION 1"],"Elegante Verkleidung"]
]);
var L = ev("L",[
["Skandal","Du fandest dich im Auge des Sturms wieder. Ein großer Skandal kam ans Licht, und du wurdest hineingezogen. Du lerntest, wer deine wahren Freunde sind und was im Leben am meisten zählt.",["WACHSAMKEIT 1","HEIMLICHKEIT 1"],"Wachhund"],
["Lehrmeister","Du wurdest von einem Meister des Handwerks als Schützling auserwählt. Du lerntest viel, doch dein Lehrer war launisch. Vielleicht trenntet ihr euch später, oder ihr steht euch bis heute nahe.",["GELEHRSAMKEIT 1","INSPIRATION 1"],"Elegante Verkleidung"],
["Großer Reinfall","Das Undenkbare geschah. Deine Show wurde einhellig verrissen und kostete die Geldgeber viel Geld. Gewiss, du lerntest aus deinen Fehlern, doch es schmerzt noch immer, daran zu denken.",["INSPIRATION 1","BEOBACHTUNG 1"],"Schreibzeug und Papier"],
["Unerwarteter Erfolg","Plötzlich geschah es. Du hattest deinen Durchbruch und erhieltst viel Aufmerksamkeit in den Zeitungen. Vielleicht schriebst du einen sensationellen Roman oder einen vielgelesenen Artikel. Was immer es war, deine Zeit im Rampenlicht war kurz. Vielleicht machte sie dir Appetit auf mehr?",["MANIPULATION 1","INSPIRATION 1"],"Edle Weine"],
["Heimlicher Liebhaber","Du trafst jemand Mächtigen und verliebtest dich. Zuerst war es eine leidenschaftliche Affäre, doch bald wurde etwas anderes daraus. Vielleicht bezahlte man dich für dein Schweigen. Oder ein zorniger Ehepartner wurde dein Feind.",["BEOBACHTUNG 1","HEIMLICHKEIT 1"],"Kamera"],
["Stadtgespräch","Nach Jahren harter Arbeit hast du es endlich geschafft. Du wurdest der Star deiner eigenen Show, und die Menge stand in Schlangen um den Block. Plötzlich wollte jeder dich kennenlernen, und neue Türen öffneten sich.",["INSPIRATION 1","MANIPULATION 1"],"Musikinstrument"]
]);
var M = ev("M",[
["Sucht","Du entwickeltest eine schwere Sucht nach irgendeiner Substanz. Der Drang nach dem nächsten Rausch bestimmte eine Zeit lang dein Leben. Du knüpftest Kontakte in der Unterwelt, die dafür sorgten, dass du bekamst, was du brauchtest. Vielleicht hast du dich endlich von der Sucht befreit, oder du bist ihr noch immer verfallen.",["HEILKUNDE 1","WACHSAMKEIT 1"],"Tragbares Labor"],
["Einem Club beigetreten","Fortuna lächelte dich an, und du wurdest in einen exklusiven Club aufgenommen. Du fandest bei Weinbrand und Zigarren neue Freunde und wichtige Verbindungen. Vielleicht bist du noch Mitglied, oder du hast ihn hinter dir gelassen.",["MANIPULATION 1","BEOBACHTUNG 1"],"Kartenbuch"],
["Rivale","Vielleicht war es eine enge Freundschaft, die zerbrach, oder ein Fremder, der deinen Weg einmal zu oft kreuzte. Du gewannst einen Rivalen, der dich genauso hasst wie du ihn.",["BEOBACHTUNG 1","HEIMLICHKEIT 1"],"Pistole"],
["Gesellschaftsmensch","Du verkehrtest in der guten Gesellschaft, fandest mächtige Freunde und führtest ein Leben im Luxus. Vielleicht machtest du dich auf Dinnerpartys unausstehlich; vielleicht wurdest du das oberflächliche Leben einfach leid.",["INSPIRATION 1","MANIPULATION 1"],"Haushund"],
["Herzensdame","Du trafst jemanden, der dich glücklich machte, und die Liebe wurde erwidert. Die Liebe gab deinem Leben Sinn, und die Zukunft sah strahlend aus. Vielleicht seid ihr noch zusammen, oder ihr gingt getrennte Wege, als die Leidenschaft verblasste.",["BEOBACHTUNG 1","INSPIRATION 1"],"Opernglas"],
["Offenes Haus","Deine Feste waren die besten ihrer Art, und bedeutende Leute strömten zu deinen Veranstaltungen. Du fandest dich mit einem Gefolge wichtiger Leute wieder, die zu dir aufsahen. All das war harte Arbeit. Vielleicht gibst du noch immer deine Soireen, oder sie sind nur noch Erinnerungen.",["MANIPULATION 1","BEOBACHTUNG 1"],"Büchersammlung"]
]);
SBD.mbi.gesellschaft.push({id:"tabellen", t:"Hintergrundtabellen", p:150, b:[
 {t:"h", x:"Erweiterte Berufstabelle"},
 {t:"p", x:"W66, modifiziert durch Ressourcen (siehe S. 214 im Vaesen-Grundregelwerk)"},
 {t:"tbl", head:["Arm","Arbeiter","Bürger","Adel","Beruf","Siehe Tabelle","Ressourcen"], rows:P},
 {t:"h", x:"Lebensereignis-Tabelle K"},
 {t:"p", x:"Boxer, Entfesselungskünstler, Kraftprotz (Archetyp: Athlet, S. 47)"},
 {t:"tbl", head:H, rows:K},
 {t:"h", x:"Lebensereignis-Tabelle L"},
 {t:"p", x:"Schauspieler, Zirkuskünstler, Sänger (Archetyp: Unterhaltungskünstler, S. 48)"},
 {t:"tbl", head:H, rows:L},
 {t:"h", x:"Lebensereignis-Tabelle M"},
 {t:"p", x:"Dilettant, Investor, Spion (Archetyp: Gesellschaftsmensch, S. 49)"},
 {t:"tbl", head:H, rows:M}
]});
})();
