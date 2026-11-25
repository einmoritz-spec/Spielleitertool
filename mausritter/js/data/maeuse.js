/* Mausritter – vorgefertigte Spielmäuse (S. 31–39), Startausrüstung (S. 15), Gegenstandskarten (S. 43–45) */
var MR = window.MR || {};
MR.maeuse = [
 {id:"aloe", name:"Aloe Saatstreu", hg:"Bettelpriesterin", zeichen:"Mutter", charakter:"Fürsorglich/Besorgt", fell:"Schokoladenbraun gescheckt", merkmal:"Augenklappe", sta:10, ges:7, wil:9, tp:2, kerne:1, p:"S. 31",
  text:"Dem weltlichem Besitz entsagend hast du dich im Namen der Mutter ganz dem Dienst an der Mäusegemeinschaft verschrieben. Du kümmerst dich gerne, auch wenn du dir manchmal zu viele Sorgen machst.",
  aus:"Kampfstab (schwere Waffe, W10 Schaden), Zauber: Genesung, Heiliges Symbol, Fackeln, Rationen", karten:["kampfstab","genesung","heiliges-symbol","fackeln","rationen"]},
 {id:"butter", name:"Butter Pipp", hg:"Bibliothekarin", zeichen:"Eichel", charakter:"Wissbegierig/Stur", fell:"Weiß gesprenkelt", merkmal:"Stummelschwanz", sta:9, ges:9, wil:11, tp:6, kerne:5, p:"S. 33",
  text:"Du kommst aus dem fernen Klinkerhafen und bist mit der dortigen Bürgermeisterin Audrey verwandt. Du bist sehr wissbegierig – und verdammt stur, wenn es um deine Neugier geht. Diese Mischung hat dich in die Welt hinaus geführt.",
  aus:"Glasscherbendolch (leichte Waffe, W6 Schaden), Teil eines seltsamen Buches, Federkiel & Tinte, Fackeln, Rationen", karten:["dolch","buch","federkiel","fackeln","rationen"]},
 {id:"elmer", name:"Elmer Halva", hg:"Wurmhirte", zeichen:"Stern", charakter:"Tapfer/Leichtsinnig", fell:"Bläulich gestreift", merkmal:"Fehlendes Ohr", sta:10, ges:10, wil:4, tp:4, kerne:2, p:"S. 35",
  text:"Würmer sind faszinierende Wesen. Leider teilt nicht jede Maus deine Begeisterung. Baronin Rosenstock hat dich aufgrund deiner weit gerühmten Tapferkeit ausgewählt, und das erfüllt dich mit Stolz. Trotzdem sehnst du dich nach deinen Würmern zurück.",
  aus:"Schwert (mittelschwere Waffe, W6 Schaden einpfotig / W8 Schaden beidpfotig), Stange (15 cm), Seife, Fackeln, Rationen", karten:["schwert","stange","seife","fackeln","rationen"]},
 {id:"franz", name:"Franz von Siepenrinne", hg:"Verarmte Adelsmaus", zeichen:"Sturm", charakter:"Großzügig/Jähzornig", fell:"Hellbraun", merkmal:"Geflickte Kleidung", sta:12, ges:8, wil:7, tp:6, kerne:6, p:"S. 37",
  text:"Baronin Rosenstock ist eine Cousine dritten Grades und die von Siepenrinne und von Stutzel blicken auf eine lange Geschichte zurück. Natürlich bist du daher ohne zu zögern dem Ruf zur Queste gefolgt! (Und weil du hoffst, dadurch endlich deine Spielschulden bezahlen zu können.)",
  aus:"Morgenstern (mittelschwere Waffe, W6 Schaden einpfotig / W8 Schaden beidpfotig), Filzhut, Parfüm, Fackeln, Rationen", karten:["morgenstern","filzhut","parfuem","fackeln","rationen"]},
 {id:"rowan", name:"Rowan Quiecker", hg:"Schrottsammler", zeichen:"Rad", charakter:"Fleißig/Fantasielos", fell:"Schwarz gescheckt", merkmal:"Längliches Gesicht", sta:8, ges:8, wil:6, tp:3, kerne:4, p:"S. 39",
  text:"So ganz weißt du nicht, warum du dabei bist. Aber wenn ein Job gemacht werden muss, stellst du keine Fragen. (Vielleicht ist das der Grund? Egal!) Und wer weiß, vielleicht gibt es was abzugreifen.",
  aus:"Haken (schwere Waffe, W10 Schaden), Schleuder (leichte Fernkampfwaffe, W6 Schaden), Steine (Geschosse), Spiegel, Fackeln, Rationen", karten:["enterhaken","schleuder","steine","spiegel","fackeln","rationen"]}
];
/* Gegenstandskarten: [Datei, Name, Gruppe, hoch(2 = doppelt hoch)] */
MR.karten = [
 ["federbann","Zauber: Federbann","Zauber"],["geisterkaefer","Zauber: Geisterkäfer","Zauber"],["genesung","Zauber: Genesung","Zauber"],
 ["schwert","Schwert","Waffen"],["morgenstern","Morgenstern","Waffen"],["rostnagel","Rostnagel","Waffen"],["dolch","Dolch","Waffen"],["hackbeil","Hackbeil","Waffen"],["schleuder","Schleuder","Waffen"],["improvisiert","Improvisiert","Waffen"],
 ["kampfstab","Kampfstab","Waffen",2],["enterhaken","Enterhaken","Waffen",2],["schraubenzieher","Schraubenzieher","Waffen",2],["speer","Speer","Waffen",2],["bogen","Bogen","Waffen",2],
 ["steine","Steine","Munition"],["pfeile","Pfeile","Munition"],
 ["zinnruestung","Zinnrüstung","Rüstung",2],["leichte-ruestung","Leichte Rüstung","Rüstung",2],
 ["fackeln","Fackeln","Ausrüstung"],["rationen","Rationen","Ausrüstung"],["laterne","Elektrische Laterne","Ausrüstung"],["spiegel","Spiegel","Ausrüstung"],["seife","Seife","Ausrüstung"],["parfuem","Parfüm","Ausrüstung"],["filzhut","Filzhut","Ausrüstung"],["federkiel","Federkiel und Tinte","Ausrüstung"],["heiliges-symbol","Heiliges Symbol","Ausrüstung"],["schatzkarte","Schatzkarte","Ausrüstung"],["glasanhaenger","Glasanhänger","Ausrüstung"],["stein-gluehend","Glühender Stein","Ausrüstung"],["kernbeutel","Kernbeutel","Ausrüstung"],
 ["stange","Stange, 15 cm","Ausrüstung",2],["buch","Teil eines seltsamen Buches","Ausrüstung",2]
];
