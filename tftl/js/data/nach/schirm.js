/* Spielleiterschirm: Player Aid (Material, 2 Querseiten), vollständig ins Deutsche übersetzt */
window.NACHDATA = window.NACHDATA || {};
window.NACHDATA.schirm = {kap:"", titel:"Spielleiterschirm", abschnitte:[
 {id:"kernprinzipien", titel:"Kernprinzipien", bloecke:[
  ["nliste",[
   "Deine Heimatstadt ist voller seltsamer und fantastischer Dinge.",
   "Der Alltag ist öde und unbarmherzig.",
   "Erwachsene sind unerreichbar und weltfremd.",
   "Das Land des Loop ist gefährlich, aber Kids werden nicht sterben.",
   "Das Spiel wird Szene für Szene gespielt.",
   "Die Welt wird gemeinsam beschrieben."]]
 ]},
 {id:"aerger", titel:"Ärger", bloecke:[
  ["raster",[
   [["p","<b>WÜRFELVORRAT</b> = Attribut + Fertigkeit insgesamt"],
    ["tabelle",["Bonuswürfel",""],[["Kultgegenstand","+2"],["Andere Gegenstände","+1 bis +3"],["Hilfe (einmal pro Wurf)","+1 bis +3"],["Zustände","-1 je Zustand"]]],
    ["p","<b>WURF:</b> Jede „6“ = 1 Erfolg"],
    ["liste",[
     "<b>STOLZ</b> (einmal pro Sitzung): +1 Erfolg für den Wurf.",
     "<b>GLÜCK</b> (einmal pro Wurf): Gib 1 Punkt aus, um misslungene Würfel neu zu würfeln.",
     "<b>PUSHEN</b> (einmal pro Wurf): Erleide +1 Zustand, um misslungene Würfel neu zu würfeln."]]],
   [["tabelle",["Schwierigkeit des Ärgers","Nötige Erfolge"],[["Schwierig (normal)","1"],["Extrem schwierig","2"],["Fast unmöglich","3"]]],
    ["p","<b>MISSERFOLG:</b> Zustand / Komplikation / Folge"],
    ["p","<b>ZUSÄTZLICHE ERFOLGE:</b> Kaufe Bonuseffekte oder gib 1 Erfolg an ein anderes Kid, wenn es um Gruppenärger geht."],
    ["p","<b>KID GEGEN KID:</b> Die meisten Erfolge gewinnen. Mehrfaches Pushen ist erlaubt."]]
  ]]
 ]},
 {id:"erweiterter-aerger", titel:"Erweiterter Ärger", bloecke:[
  ["raster",[
   [["nliste",[
     "<b>DEN EINSATZ FESTLEGEN:</b> Der Spielleiter bestimmt die Folgen eines Scheiterns.",
     "<b>BEDROHUNGSSTUFE:</b> Der Spielleiter bestimmt die Schwierigkeit.",
     "<b>EINEN PLAN MACHEN:</b> Die Kids entscheiden, was sie tun – welche Fertigkeiten jedes einsetzt und in welcher Reihenfolge.",
     "<b>DIE SZENEN SPIELEN:</b> Jedes Kid bekommt eine Szene, in der es handelt und würfelt. Die gewürfelten Erfolge zählen auf die Bedrohungsstufe, es sei denn, die Zeit wird stattdessen genutzt, um zu inspirieren (ANFÜHREN).",
     "<b>ERGEBNIS:</b> Zähle die Erfolge insgesamt zusammen."]]],
   [["tabelle",["Erw. Ärger: Schwierigkeit","Nötige Erfolge"],[["Schwierig (normal)","Kids × 2"],["Extrem schwierig","Kids × 3"],["Fast unmöglich","Kids × 4"]]],
    ["tabelle",["Erfolge insgesamt gewürfelt","Ergebnis"],[["< ½ Bedrohungsstufe","Misserfolg"],["≥ ½ Bedrohungsstufe","+Zustände für +Erfolge; Teilerfolg"],["≥ Bedrohungsstufe","Voller Erfolg"]]],
    ["p","Zusätzliche Erfolge werden von den Kids/dem Spielleiter von Fall zu Fall auf das Gesamtergebnis angerechnet."]]
  ]]
 ]},
 {id:"zustaende", titel:"Zustände", bloecke:[
  ["raster",[
   [["p","<b>VERÄRGERT / VERÄNGSTIGT / ERSCHÖPFT / VERLETZT:</b> -1 Würfel je Zustand bei allen Würfen."],
    ["p","<b>GEBROCHEN:</b> Alle Würfe misslingen automatisch, bis du geheilt bist."]],
   [["h","Zustände heilen"],
    ["tabelle",["Aktivität","Heilung"],[
     ["Eine Szene mit dem Anker verbringen, der sich um dich kümmert","Alle Zustände"],
     ["Eine Szene mit 2+ Kids im Versteck verbringen, die sich umeinander kümmern","Alle Zustände"],
     ["Ein anderes Kid trösten (ANFÜHREN), 1 auf 1. Bei Misserfolg: Du erleidest denselben Zustand.","1, +1 je Effekt (außer Gebrochen)"]]]]
  ]]
 ]},
 {id:"erfahrung", titel:"Erfahrung", bloecke:[
  ["p","<b>+1 EP FÜR JEDE BEJAHTE FRAGE:</b>"],
  ["liste",[
   "Hast du in der Sitzung mitgemacht und dich eingebracht?",
   "Bist du wegen deines Problems oder deiner Beziehungen in Ärger geraten?",
   "Hast du deinen Stolz eingesetzt oder mit ihm gehadert?",
   "Hast du dich für die anderen Kids in Gefahr gebracht?",
   "Hast du etwas Neues gelernt? (Was war es?)"]],
  ["p","<b>EP AUSGEBEN:</b> -5 EP = +1 Fertigkeitspunkt (max. 5). Nur vor/nach der Sitzung. Bis zu 10 EP können aufgespart werden."],
  ["p","<b>GEBURTSTAG:</b> +1 Attributspunkt (max. 5), dauerhaft -1 Glückspunkt, neuer Kultgegenstand."]
 ]},
 {id:"koerper", titel:"Körper", bloecke:[
  ["raster",[
   [["fk",{n:"Schleichen", t:"Dich verstecken, herumschleichen oder Dinge stehlen.", b:["Gib 1 Erfolg an ein anderes Kid.","Du bleibst länger versteckt / entgehst der nächsten Entdeckung.","Du stiehlst etwas Unerwartetes oder mehr von dem, wonach du gesucht hast."]}]],
   [["fk",{n:"Kraft", t:"Schwere Dinge heben, kämpfen und körperliche Belastung aushalten.", b:["Gib 1 Erfolg an ein anderes Kid.","Beeindrucke, erschrecke oder demütige jemanden.","Halte den Gegner fest.","Nimm dem Gegner etwas weg.","Der Gegner wird bewusstlos geschlagen.","Vermeide denselben Ärger in dieser Sitzung noch einmal.","Vermeide Kollateralschäden."]}]],
   [["fk",{n:"Bewegen", t:"Klettern, springen, schwimmen, balancieren oder rennen.", b:["Gib 1 Erfolg an ein anderes Kid.","Beeindrucke jemanden.","Entgehe der Entdeckung."]}]]
  ]]
 ]},
 {id:"technik", titel:"Technik", bloecke:[
  ["raster",[
   [["fk",{n:"Basteln", u:[
     {n:"Bauen", t:"Stelle mechanische Gegenstände her. Bestimmte Gegenstände, zusätzliche Zeit, Würfe auf RECHNEN/BEGREIFEN/PROGRAMMIEREN usw. können nötig sein. Bei Erfolg erhältst du einen Gegenstand mit +1 Bonus.", b:["Haltbarer/vielseitiger/effizienter/unauffälliger: +1 Bonus (max. +3)."]},
     {n:"Manipulieren", t:"Mechanische Dinge zerstören, benutzen oder zusammenflicken; Schlösser knacken; Kraftfahrzeuge fahren. Manchmal musst du zuerst RECHNEN, um herauszufinden, wie es geht.", b:["Gib 1 Erfolg an ein anderes Kid.","Vermeide denselben Ärger in dieser Sitzung noch einmal.","Mach es schnell, leise oder mit Stil."]}]}]],
   [["fk",{n:"Programmieren", u:[
     {n:"Erschaffen", t:"Schreibe Computercode oder verdrahte Elektronik. Bestimmte Gegenstände, zusätzliche Zeit, RECHNEN, BEGREIFEN, BASTELN usw. können nötig sein. Bei Erfolg erhältst du einen Gegenstand mit +1 Bonus.", b:["Effizienter/leistungsfähiger: +1 Bonus (max. +3)."]},
     {n:"Manipulieren", t:"Wie bei BASTELN, aber für Elektronik oder Programme."}]}]],
   [["fk",{n:"Rechnen", t:"Verstehe, wie etwas technisch funktioniert. Stelle bei Erfolg 2 Fragen:", l:["Was ist sein Zweck?","Wie funktioniert es / wie wird es benutzt?","In welchem Zustand ist es gerade?","Welche Probleme kann es verursachen?","Wer hat es gebaut / Ist es illegal?","Sind besondere Werkzeuge nötig, um es zu manipulieren?"], b:["Stelle 1 weitere Frage und +1 Würfel auf einen Wurf, der die Information nutzt (max. +3 Würfel)."]}]]
  ]]
 ]},
 {id:"herz", titel:"Herz", bloecke:[
  ["raster",[
   [["fk",{n:"Kontakte", t:"Die richtige Person kennen und sie erreichen.", b:["Der Kontakt hat das richtige Werkzeug.","Der Kontakt heilt 1 deiner Zustände.","Der Kontakt bringt weitere Leute mit.","Du musst nicht würfeln, um diesen Kontakt in dieser Sitzung erneut anzurufen.","Der Kontakt weiß etwas Wichtiges.","Du kannst den Kontakt einmal für +1 Bonus nutzen."]}]],
   [["fk",{n:"Charme", t:"Lügen, sich anfreunden, überzeugen oder Menschen manipulieren. Kann voraussetzen, zuerst EINFÜHLEN einzusetzen.", b:["Sie glauben dir weiter.","Ihr schließt eine dauerhafte Freundschaft.","Sie gehen Risiken ein, um dir zu helfen.","Sie versuchen, andere zu überzeugen, dir zu glauben.","Sie sind verängstigt, verwirrt oder beeindruckt/verliebt."]}]],
   [["fk",{n:"Anführen", u:[
     {n:"Inspirieren", t:"Motiviere deine Freunde, zusammenzuarbeiten. Bei Erfolg können Würfel aus diesem Vorrat für ihre künftigen Würfe genutzt werden, wenn sie dir folgen. Du kannst diese Würfel nicht selbst nutzen. Misslingt das Inspirieren, erleidest du einen Zustand. Es darf immer nur einen aktiven Würfelvorrat (Anführer) geben. Vorrat max. = Kids × 2.", tab:[["Schwierigkeit","Bonuswürfelvorrat"],[["Schwierig (1)","2 Würfel"],["Extrem schwierig (2)","4 Würfel"],["Fast unmöglich (3)","6 Würfel"]]]},
     {n:"Trösten", t:"Verbringe Zeit allein mit einem Freund, um einen seiner Zustände zu heilen (außer Gebrochen). Misslingt es, erleidest du denselben Zustand.", b:["Heile +1 Zustand, auch einen deiner eigenen."]}]}]]
  ]]
 ]},
 {id:"verstand", titel:"Verstand", bloecke:[
  ["raster",[
   [["fk",{n:"Untersuchen", t:"Suche nach verborgenen Gegenständen, studiere Hinweise, löse Rätsel. Stelle bei Erfolg 2 passende Fragen, etwa:", l:["Ist hier etwas versteckt/gefährlich?","Was ist hier geschehen / Gibt es Anzeichen von …?","Wie komme ich in/aus/an etwas vorbei?","Was würde wahrscheinlich geschehen, wenn …?"], b:["+1 Frage und +1 Würfel, wenn du die Information nutzt (max. +3 Würfel)."]}]],
   [["fk",{n:"Begreifen", t:"Du hast die richtige Information oder weißt, wo du sie in der Schulbibliothek oder an einem ähnlichen Ort findest.", b:["+1 Frage und +1 Würfel, wenn du die Information nutzt (max. +3 Würfel)."]}]],
   [["fk",{n:"Einfühlen", t:"Verstehe ein fühlendes Wesen. Stelle 2 Fragen:", l:["Wie fühlt es sich?","Was will/braucht es?","Was wird es wahrscheinlich tun?","Lügt es?"], b:["+1 Frage und +1 Würfel, wenn du die Information nutzt (max. +3 Würfel)."]}]]
  ]]
 ]}
]};
