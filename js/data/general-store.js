/* ==================================================================
   ALLGEMEINER LADEN (Gegenstands-Vorschläge für Backpack-/Belohnungs-Tags)
   ================================================================== */

const GENERAL_STORE_LIBRARY = [
  { key:"general-store-book1", label:"Allgemeiner Laden (CBI 132)", subs:[
    { name:"Annehmlichkeiten", items:["Beutel feinen Tabaks", "Buch mit Geistergeschichten", "kirschduftendes Feuerholz", "bequeme H\u00e4ngematte", "Bund frisches Obst", "Stahlbesteck", "Laib gereiften K\u00e4ses", "gewachstes Zelt", "Feuerstein & Stahl", "ma\u00dfgeschneidertes Kleid", "stabile Schriftrollenkapsel", "neu gefertigte Tunika", "frische Kochkr\u00e4uter", "Federkissen", "duftende Seife", "Sattel mit versteckten Taschen", "Glas eingemachten Honigs", "Klappstuhl", "Seiden-Morgenmantel", "Taschenspiegel"] },
    { name:"R\u00fcstzeug", items:["Saphirbesetztes Schwert", "Schwarzstahlaxt mit Silbereinlage", "laminierter Bogen", "heraldischer Schild", "B\u00fcndel Dolche", "Stahlkappenstiefel", "Buckler mit Spitze", "farbenfrohe Armschienen", "gut bel\u00fcfteter Helm", "segmentierte Lamellenr\u00fcstung", "Stiefelmesser", "perfekt ausbalanciertes Schwert", "Beutel Rauchbomben", "gepolsterte Kletterhandschuhe", "R\u00f6hre mit Fu\u00dfangeln", "Hakenspeer (zum Entwaffnen)", "robuste Reittierbarde", "K\u00f6cher gerader Pfeile", "G\u00fcrtel mit Wurfmessern", "gut gepolsterte Kettenhemdtunika"] },
    { name:"Magische Gegenst\u00e4nde", items:["selbstspielende Leier", "stets gl\u00fchende Kugel", "Gl\u00fccksbringer-Hufeisen", "lautlose Stiefel", "feenabschreckendes Emblem", "Buch der Wasserzauber", "Beutel explosiver Kristalle", "Karte unbetretener Pfade", "dramatischer Windumhang", "Fl\u00e4schchen mit Mondlicht", "Beutel reinigender Erde", "spinnwebspuckende Handschuhe", "schattige Roben", "geisterrufende Glocke", "6 Meter unzerrei\u00dfbares Seil", "Armreifen des Gleichgewichts", "f\u00fcnf Fernpfeile", "Sturm in einer Flasche", "Flasche destillierten Charismas", "Amulett der Baumkletterei"] },
    { name:"Verg\u00fcnstigungen & Gefallen", items:["ehrlicher Kaufmannsfreund", "Stammgast-Status in der Taverne", "Gunst eines Adligen", "Einladung zu einem Fest", "Gildenmitgliedschaft", "Verb\u00fcndete der Nachtwache", "Erlaubnis, Waffen zu tragen", "ortskundiger F\u00fchrer", "unangefochten in zwielichtigen Vierteln", "bestochener W\u00e4chter", "kostenloses Festessen", "Kontakte in der Unterwelt", "geduldet in vornehmen Vierteln", "freie Kost und Logis", "saftiger Klatsch", "Soldateneskorte", "freies Geleit", "selten von Wachen durchsucht", "Adelstitel und Landbesitz", "Ohr des Herrschers"] },
    { name:"Haustiere & Getier", items:["verspielte Fledermaus", "lebende Glasmenagerie", "verlorenes Fuchsjunges", "zornige Fee im Fl\u00e4schchen", "Schwarm Motten", "Oktopus im Glas", "tr\u00e4ge Eidechse", "neugieriges Wolfsjunges", "Greifenei", "f\u00fcnf blaue Geckos", "Uhrwerk-Eule", "Beutel Kr\u00f6ten", "freundliches K\u00e4tzchen", "st\u00e4ndig hungriges Eichh\u00f6rnchen", "zwitschernder Schultervogel", "spielender Huhn", "exotischer Affe", "abgerichtete Maus", "Taschendrache", "belebter Schatten"] },
    { name:"Wertsachen", items:["daumengro\u00dfer, ungeschliffener Smaragd", "kunstvolles W\u00fcrfelspiel", "silbernes Teeservice", "Wandteppich mit Schlachtdarstellung", "sieben gro\u00dfe S\u00e4cke Hafer", "Fass Rotwein", "kunstvolle Laterne", "Vogel im K\u00e4fig", "seltene Stoff-Farbstoffe", "juwelenbesetzte Halskette", "Opalbrosche", "fremdl\u00e4ndische M\u00fcnzen", "goldene Krone", "erlesene Marmorstatuette", "Uhrwerkvogel", "Beutel Gew\u00fcrze", "pr\u00e4chtige Pferdekutsche", "Satz Theatermasken", "eingelegte Musikdose", "Siegelring der K\u00f6nigin"] },
  ]},
  { key:"general-store-armor", label:"R\u00fcstung (CBI 132, S. 132)", subs:[
    { name:"Leichte R\u00fcstung", items:["Wams / Gambeson / Reitwams", "Lederr\u00fcstung / gekochte Lederr\u00fcstung", "rohe Fellr\u00fcstung", "Plattenjacke / Brigantine"] },
    { name:"Schwere R\u00fcstung", items:["K\u00fcrass / Brustpanzer", "Beinschienen", "Schulterplatten", "Kettenhemd / Hauberk", "Plattenr\u00fcstung", "Kette & Platte (kombiniert)", "Helm"] },
    { name:"Schilde", items:["Buckler", "einfacher Holzschild", "schwerer Schild"] },
    { name:"Verzierungen", items:["heiliges Symbol", "Familienwappen", "Wappentier / Patronatstier"] },
  ]},
  { key:"general-store-weapons", label:"Waffen (CBI 132)", subs:[
    { name:"Waffentypen", items:["Axt (Holzf\u00e4lleraxt oder Streitaxt)", "Wuchtwaffe (Keule, Kn\u00fcppel, Hammer, Streitkolben)", "Bogen (Jagdbogen, Langbogen, Reflexbogen)", "Dirk (langes Messer/Dolch)", "Flegel", "Stangenwaffe (Speer, Hellebarde, Pike)", "Schleuder", "Stab (Quarterstab, Hirtenstab, Zauberstab)", "Schwert (Kurzschwert, Langschwert, Reitschwert, Krummschwert, Krumms\u00e4bel)", "Zweihandwaffe (Gro\u00dfschwert, Flammenschwert, Streitaxt, Kriegshammer)"] },
    { name:"Zusatz-Tags", items:["gut ausbalanciert", "feine Handwerkskunst", "R\u00fcckenscheide", "gesch\u00e4rft und ge\u00f6lt", "geweiht", "eingravierte Widmung"] },
  ]},
  { key:"general-store-medicine", label:"Medizinische Gegenst\u00e4nde (CBI 132)", subs:[
    { name:"Heilmittel", items:["Gegengift", "Verbandszeug", "Fu\u00dfsalbe", "Heiltrank (Sud)", "Heiltrank (magisch)", "Gift", "Schlafstein", "Schlafmittel", "beruhigende Salben", "St\u00e4rkungstrank (Tonikum)"] },
  ]},
  { key:"general-store-notes", label:"Notizen & Pers\u00f6nliches (CBI 132)", subs:[
    { name:"Notizen", items:["Wegbeschreibung nach (frei w\u00e4hlbar)", "lustige Anekdote", "saftiger Klatsch", "Restemahl-Rezept", "kleines Gebet", "Erinnerung an duftendes Brot", "schlagfertige Antwort", "unl\u00f6sbares R\u00e4tsel"] },
    { name:"Pers\u00f6nliche Gegenst\u00e4nde", items:["gezinkte W\u00fcrfel", "Familiensiegel", "Gro\u00dfmutters Schal", "Pergament & Tinte", "Pfeife & Tabak", "Rasierzeug", "kleine Troph\u00e4e", "Kriegsbemalung"] },
  ]},
  { key:"general-store-misc", label:"Unterst\u00fctzung, Kleidung & Ausr\u00fcstung (CBI 132)", subs:[
    { name:"Unterst\u00fctzung", items:["Diener/Begleiter", "Bootsf\u00fchrer", "Feendiener", "Informant", "ortskundiger F\u00fchrer", "Maultier", "Geschichtenerz\u00e4hler", "Fackeltr\u00e4ger"] },
    { name:"Kleidung & Accessoires", items:["Armschienen", "Umhang", "Hofkleidung", "Handschuhe", "Schmuck", "Wams / Tunika", "\u00d6lzeug (wasserdicht)", "robuste Stiefel", "\u00dcberrock", "Reiseumhang", "Gew\u00e4nder (religi\u00f6s/politisch)"] },
    { name:"Spirituelle & magische Trinkets", items:["Wahrsage-Werkzeug", "Gl\u00fccksbringer", "Gebetsperlen", "religi\u00f6se Ikone", "Wahrsagespiegel", "Geistabwehr-Symbol", "spiritueller Talisman", "Zauberstab"] },
    { name:"Vorr\u00e4te & Reiseausr\u00fcstung", items:["Schlafrolle", "Schnitzmesser", "Stoffzelt", "Bratpfanne", "Reparaturset", "Signalpfeife", "Seife & Tuch", "Fernrohr", "Reiseproviant", "Wasserschlauch / Weinschlauch"] },
  ]},
  { key:"general-store-dales", label:"Allgemeiner Laden der Dales (CBII 39, S. 126)", subs:[
    { name:"Essen & Geschirr", items:["Mehl", "Butter", "Eier", "Honig", "getrocknete Kr\u00e4uter", "frisches Obst", "Honigt\u00f6pfe", "R\u00e4ucherfleisch", "Wurzelgem\u00fcse", "Blatttee", "Beerensaft", "Ale", "Apfelwein", "Honigmet", "Holzteller", "Becher & T\u00f6pfe", "Tagesbeutel", "Essmesser", "Lederkrug", "Teeservice (4 Tassen + Kanne)"] },
    { name:"Instrumente & Zeitvertreib", items:["Trommel", "Harfe", "Schilffl\u00f6te", "einfaches Spiel (W\u00fcrfel/Brett)", "Wachstafel & Griffel", "Kartenspiel", "Gemshorn", "Laute", "Vielle (Wanderlands-Geige)", "Cobblebones"] },
    { name:"Vieh & Haustiere", items:["Pferd", "Maultier", "Karren", "Schafherde", "Ziegenherde", "Rinderpferch", "Schweine", "Kaninchen", "Bienenstock", "G\u00e4nse", "H\u00fchner", "Enten", "Hirtenstab", "H\u00fctehund", "Ungeziefer-Katze"] },
    { name:"Haushalt", items:["Aschenlauge-Seife", "Kochkessel", "Zunderleinen (Charcloth)", "Kuhglocke", "zentrale Feuerstelle", "Haushaltsaxt", "Kr\u00e4uterumschl\u00e4ge", "Bett (auch als Reisebettzeug)", "\u00d6llampe", "Oldways-Kranz", "Sparrengestell f\u00fcr Trockengut", "Binsenkerzen-Vorrat", "Schneeschuhe"] },
    { name:"Handwerk & Arbeit", items:["Werkbank", "Werkzeugset", "Butterfass", "Walkerkl\u00f6ppel"] },
  ]},
  { key:"general-store-regional", label:"Regionale Spezialit\u00e4ten der Dales (CBII 39)", subs:[
    { name:"Fairpoint", items:["breitbl\u00e4ttriger Regenschirm", "Papierf\u00e4cher", "Tr\u00fcffel"] },
    { name:"Hartland", items:["Beerenpfl\u00fcck-Handschuhe", "Godling-Haarmedaillon", "Eisbrech-Pickel"] },
    { name:"Highglade", items:["Bade\u00f6le", "Lasso-Seil", "abgenutzter Sattel"] },
    { name:"Lastford", items:["Craggen-Bestienzahn-Halskette", "Angelrute & K\u00f6der", "Seeforellenpastete"] },
    { name:"Milkrest", items:["Milkrest-Ziege", "Schafschere", "K\u00e4selaib"] },
    { name:"Pasture", items:["Pfeife & Tabak", "gebundenes Buch", "komponierte Sonate"] },
    { name:"Ravensdale", items:["Apfelwein", "verspiegelte Laterne", "Rabenfeder-Schal"] },
    { name:"Salthill", items:["handliche Spitzhacke", "Salzbeutel", "alte Salz-Effigie"] },
    { name:"Ashstone", items:["Kletterausr\u00fcstung", "Trommelstein-Glocke", "Steinbruchwerkzeug"] },
    { name:"Barleytown", items:["Tauschz\u00e4hlstab", "Kanalflo\u00df & Stange", "Red-Marshal-Stellvertreter-Sch\u00e4rpe", "Federkielset"] },
    { name:"Cedargate", items:["Zedern-Insektenschutzbox", "Beil", "Woodward-Schwerschild"] },
    { name:"Dolmen Knolls", items:["Aschen-Kriegsbemalung", "Knochenpfeife", "angeschlagener gwyrdolanischer Dolch"] },
  ]},
];
