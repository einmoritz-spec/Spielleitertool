/* City of Mist – MC Toolkit (Hash: #mc | #mc/<tab>[/<abschnitt>]). Gliederung nach dem Buch „Master of Ceremonies’ Toolkit“.
   p = Buchseite (= PDF-Seite des MC-Toolkit-PDFs). Übersetzte Einträge liegen in js/data/mc/*.js (CM_MCD[<abschnitt-id>]); nicht übersetzte zeigen nur den Seitenlink. */
var CM_MCD = {};
var CM_MC_NAV = {
 tabs:[{id:"start",t:"Start"},{id:"stadt",t:"Stadt"},{id:"spielleitung",t:"Spielleitung"},{id:"dangers",t:"Dangers"},{id:"avatare",t:"Avatare"},{id:"hilfsmittel",t:"Hilfsmittel"}],
 cats:{
  start:[
   {id:"mc",t:"Der MC",en:"The Master of Ceremonies",p:6,e:[["Der Master of Ceremonies",6],["Die Rollen des MC",7],["Die MC-Prinzipien",8],["Was steht in diesem Buch?",11]]}],
  stadt:[
   {id:"kinematografie",t:"Die City im Film",en:"The Cinematography of the City",p:12,e:[["Wort auf der Straße",12],["Die Kinematografie der City",14]]},
   {id:"downtown",t:"Downtown",en:"Downtown",p:18,e:[["Downtown",18]]},
   {id:"arbeiterviertel",t:"Arbeiterviertel",en:"The Blue-Collar Residential",p:26,e:[["Das Arbeiterviertel",26]]},
   {id:"altstadt",t:"Altstadt",en:"The Old Quarter",p:32,e:[["Die Altstadt",32]]},
   {id:"industriezone",t:"Industriezone",en:"The Industrial Zone",p:38,e:[["Die Industriezone",38]]},
   {id:"weitere",t:"Weitere Bezirke",en:"Other Districts",p:44,e:[["Weitere Bezirke",44]]},
   {id:"vordentoren",t:"Vor den Toren",en:"Just Out of Town",p:48,e:[["Direkt vor der Stadt",48]]},
   {id:"unbekannt",t:"Was die Leads nicht wissen",en:"What the Lead Characters Don’t Know Yet",p:52,e:[["Was die Lead Characters noch nicht wissen",52]]}],
  spielleitung:[
   {id:"kurzref",t:"Kurzreferenz",en:"Quick Reference: MC Rules & Cases",p:58,e:[["Kurzreferenz: MC-Regeln und Fälle",58]]},
   {id:"exposition",t:"Exposition Session",en:"The Exposition Session",p:60,e:[["Die Exposition Session",60]]},
   {id:"session",t:"Eine Session leiten",en:"Running a Session",p:62,e:[["Eine Session leiten",62],["Die Sessionstruktur",65]]},
   {id:"aktionen",t:"MC-Aktionen",en:"MC Actions During a Scene",p:70,e:[["MC-Aktionen in einer Szene",70],["Die Soft MC Moves",71],["Die Hard MC Moves",73]]},
   {id:"erzaehlen",t:"City of Mist erzählen",en:"How to Narrate City of Mist",p:78,e:[["City of Mist erzählen",78]]},
   {id:"schwierigkeit",t:"Schwierigkeit anpassen",en:"Adjusting the Challenge Level",p:82,e:[["Die Herausforderung anpassen",82]]},
   {id:"fall",t:"Einen Fall schreiben",en:"Writing a Case",p:84,e:[["Einen Fall schreiben",84],["Der Eisberg",86],["Schritt 1: Die Backstory",90],["Schritt 2: Die Brotkrumenspur",97],["Schritt 3: Dangers hinzufügen",101]]},
   {id:"serie",t:"Eine Serie entwerfen",en:"Designing a Series",p:104,e:[["Eine Serie entwerfen",104],["Serien-Ressourcen",105],["Handlungsbögen (Story Arcs)",108]]}],
  dangers:[
   {id:"dg-kurzref",t:"Kurzreferenz",en:"Quick Reference: Danger Rules",p:116,e:[["Kurzreferenz: Danger-Regeln",116]]},
   {id:"dg-dangers",t:"Dangers",en:"Dangers",p:118,e:[["Dangers",118],["Spektren (Spectrums)",120],["Danger Moves",123]]},
   {id:"dg-einsetzen",t:"Dangers einsetzen",en:"Using Dangers",p:127,e:[["Dangers einsetzen",127]]},
   {id:"dg-erschaffen",t:"Dangers erschaffen",en:"Creating Dangers",p:131,e:[["Dangers erschaffen",131]]},
   {id:"dg-custom",t:"Custom Moves",en:"Custom Moves",p:133,e:[["Custom Moves",133],["Einen Custom Move erschaffen",135],["Vorlagen und Beispiele",136]]},
   {id:"dg-mundane",t:"Mundane Dangers",en:"Mundane Dangers",p:141,e:[["Danger-Profile",140],["Mundane Dangers",141]]},
   {id:"dg-mythos",t:"Mythos-Power-Sets",en:"Mythos Power Sets",p:152,e:[["Mythos-Power-Sets",152]]},
   {id:"dg-rifts",t:"Rifts & mythische Dangers",en:"Rifts & Other Mythical Dangers",p:157,e:[["Rifts und andere mythische Dangers",157]]}],
  avatare:[
   {id:"av-avatare",t:"Avatare",en:"Avatars",p:166,e:[["Avatare",166],["Einen Avatar erschaffen",170]]},
   {id:"anatoli",t:"Anatoli",en:"Anatoli, Avatar of Hades",p:174,e:[["Anatoli, Avatar des Hades",174]]},
   {id:"barton",t:"Barton",en:"Barton, Avatar of the Spear",p:184,e:[["Barton, Avatar des Speers",184]]},
   {id:"isabella",t:"Isabella",en:"Isabella, Avatar of Xochiquetzal",p:194,e:[["Isabella, Avatar der Xochiquetzal",194]]},
   {id:"kwaku",t:"Kwaku",en:"Kwaku, Avatar of Anansi",p:204,e:[["Kwaku, Avatar des Anansi",204]]}],
  hilfsmittel:[
   {id:"boegen",t:"MC-Bögen",en:"MC Sheets",p:220,e:[["MC Moves",220],["Eisberg-Bogen",221],["MC-Tracking-Bogen",222],["Serien-Ressourcen-Bogen",223]]},
   {id:"beispielfall",t:"Beispielfall",en:"Sample Case: Gambling With Death",p:224,e:[["Beispielfall: Gambling With Death",224]]},
   {id:"karten",t:"Karten",en:"Maps",p:244,e:[["Karten",244]]}]
 },
 kapitel:[
  {t:"Wort auf der Straße",d:"Die Stadt",en:"Word on the Street",p:12,go:"stadt"},
  {t:"Hinter den Kulissen",d:"Spielleitung",en:"Behind the Scenes",p:56,go:"spielleitung"},
  {t:"Das ist meine Stadt!",d:"Dangers & Avatare",en:"This Is My City!",p:114,go:"dangers"}]
};
