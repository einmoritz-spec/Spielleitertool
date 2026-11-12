/* Archetypen (Metro-Grundbuch S. 185–188): eigene deutsche Kurzfassungen der Beschreibungen, Kit- und Ausrüstungsangaben aus dem Buch. Kit-Namen entsprechen den Namen in den metro-kits-*.js-Dateien. */
var OS_ARCHETYPEN = {
 "intro": "Die zwölf Archetypen sind fertige Figurenvorlagen: je drei feste Theme-Kits, ein Wahl-Kit aus drei Optionen und eine Ausrüstungsliste.",
 "gruppen": [
  {"id":"machthaber","name":"Machthaber","enName":"Power Players","archetypen":[
   {"id":"geld-verfolger","name":"Geschickter Geldverfolger","enName":"Clever Money-Tracer","p":185,
    "text":"Verkaufen, kaufen, sperren, übernehmen, fusionieren: Diese Befehle bestimmen dein digitales Leben. Als Finanzier des Cyberzeitalters beherrschst du das Nachverfolgen von Transaktionen und das Entschlüsseln der Blockchain. Als die Legenden sich einmischten, hast du dir den magischen Vorsprung verschafft, den du brauchtest.",
    "fest":["Informationshändler (Cyberspace)","Midas-Berührung (Exposition)","Geld zum Verprassen (Besitz)"],
    "wahl":["Wahrsagerei (Esoterik)","Ermittler (Expertise)","Akribischer Planer (Persönlichkeit)"],
    "ausruestung":["Sicherer Link","Android-Leibwächter (defensive Verkabelung)","Schicke Plasmapistole"]},
   {"id":"eiskalter-handler","name":"Eiskalter Handler","enName":"Ice-Cold Handler","p":185,
    "text":"Wenn es schwierig wird, rufen sie dich. Du stellst ein Team von Spezialisten zusammen und setzt sie präzise gegen die Schwächen des Ziels ein. Deine Leute brauchen dich für Arbeit, Informationen und Anleitung, während deine Auftraggeber dich brauchen, um ihre Pannen zu beseitigen. Du kassierst dafür deinen Anteil.",
    "fest":["Aura der Autorität (Exposition)","Reich und berühmt werden (Horizont)","Akribischer Planer (Persönlichkeit)"],
    "wahl":["Gesteigerte geistige Kapazität (Augmentierung)","Verbrechersyndikat (Zugehörigkeit)","Spionagesatelliten (Drohnen)"],
    "ausruestung":["Holografischer Köder (helllichter Tag)","Hubschrauber-Extraktion","Betäubungspistole"]},
   {"id":"silberzungiger-manager","name":"Silberzüngiger Manager","enName":"Silver-Tongued Executive","p":185,
    "text":"Du bist so weit auf der Karriereleiter aufgestiegen, dass alle Menschen für dich nur Stufen sind. Du weißt, wie man dunkle Geschäfte einfädelt und Leute zur Unterschrift bringt. Seit Kurzem arbeitest du nebenbei für einen interessanten Chef: den Teufel. Der Handel ist einfach: Du bringst ihm Seelen, und er legt dir Sprossen unter die Füße.",
    "fest":["Konzernbürger (Zugehörigkeit)","Teufelspakte (Esoterik)","Rücksichtsloser Manager (Expertise)"],
    "wahl":["Android-Diener (Drohnen)","Unmöglich gutes Aussehen (Augmentierung)","Geld zum Verprassen (Besitz)"],
    "ausruestung":["Dämonische Haltbarkeitssalbe (furchterregendes Gesicht)","Verschlüsseltes Datenpad","Tötungsgas-Ladung und Maske"]}
  ]},
  {"id":"plünderer","name":"Plünderer und Außenseiter","enName":"Scavengers & Outlanders","archetypen":[
   {"id":"altech-wiederbeleber","name":"Altechnik-Wiederbeleber","enName":"Oldtech Reviver","p":186,
    "text":"Kein Herz freut sich mehr über einen Haufen verrottenden Schrotts als deins. Andere erkennen nicht, welche Schätze man finden kann: alte Apparate, mechanische Gadgets, uralte Rechensysteme, manche sogar resistent gegen modernes Hacken. Dinge, die du wieder zum Leben erwecken kannst. Besser so. Mehr für dich!",
    "fest":["Trödelsammlung (Besitz)","Mit Maschinen sprechen (Exposition)","Bastler (Expertise)"],
    "wahl":["Nanitenwolke (Spitzentechnik)","Gegenkultur (Zugehörigkeit)","Erkunder der Cyberspace-Ruinen (Cyberspace)"],
    "ausruestung":["Schrottrüstung (klappernd)","Code-Übersetzer","Tragbares Schweißgerät"]},
   {"id":"aussenbezirks-nomade","name":"Nomadischer Späher aus dem Umland","enName":"Exurban Nomadic Scout","p":186,
    "text":"Hier draußen, in den verseuchten, katastrophengeschüttelten Ödlanden, ist das Leben hart, und alles versucht, dich umzubringen. Du hast lange genug überlebt, um zu wissen, wie man dieses Höllenloch übersteht. Dein Geheimnis ist, die Gefahr zu erkennen, bevor sie zuschlägt. Du brauchst keinen Grund; dein Grund ist dein nächster Atemzug.",
    "fest":["Katastrophenüberlebender (Belastete Vergangenheit)","Drohnenschwarm (Drohnen)","Hart wie Nägel (Persönlichkeit)"],
    "wahl":["Verstärkte Sinne (Augmentierung)","Revolverheld (Expertise)","Besessenes Fahrzeug (Artefakt)"],
    "ausruestung":["Wasser und Rationen","Altes, aber robustes Gewehr (langsames Nachladen)","Überlebensoutfit"]},
   {"id":"laerm-terror-schamanin","name":"Schamane des Lärm-Terrors","enName":"Noise-Terrorist Shaman","p":186,
    "text":"Nieder mit Babylon! Die brummende Megastadt und die Kultur des Lärms sind deine erklärten Feinde, seit du dich aus ihrem betäubenden Griff befreit hast. Als du in der Wildnis umherzogst, fandst du die Macht der Erde, die diese üblen Plünderer verwüstet haben. Es ist Zeit, Erdes Zorn auf sie niederprasseln zu lassen, und niemand ist dafür besser geeignet als du.",
    "fest":["Das System brechen (Horizont)","Blütenwildwuchs (Exposition)","Naturgeist (Gefährte)"],
    "wahl":["Trankbrauerei (Esoterik)","Tierische Modifikationen (Augmentierung)","Entflohene Knechtschaft (Belastete Vergangenheit)"],
    "ausruestung":["Bogen und Pfeil (gegen stark gepanzerte Ziele)","Säure-Pfeilspitzen","Gedankenkontroll-Sporen"]}
  ]},
  {"id":"subkultur","name":"Subkultur-Vorbilder","enName":"Subculture Exemplars","archetypen":[
   {"id":"radikaler-politischer-akteur","name":"Radikaler politischer Akteur","enName":"Radical Political Operative","p":187,
    "text":"Du hast die Tiefe der Korruption und Verderbtheit in Regierung und Führungselite gesehen und bist überzeugt, dass es Zeit ist, das Ruder herumzureißen. Du bist geschickt darin, soziale Lagen zu analysieren und verzweifelte Geister anzuheizen. Du bist entschlossen, die schlafenden Massen mit dem Schrecken ihrer Existenz zu wecken. Für dich ist kein Opfer zu groß; die Revolution muss siegen.",
    "fest":["Gesteigerte geistige Kapazität (Augmentierung)","Das System brechen (Horizont)","Influencer (Cyberspace)"],
    "wahl":["Aura der Autorität (Exposition)","Gegenkultur (Zugehörigkeit)","Sprengstoff (Besitz)"],
    "ausruestung":["AR-Sprühfarbe","Gesichtsverhüllende Kleidung (eingeschränktes Sichtfeld)","Booster-Stiefel"]},
   {"id":"merkurialer-modeikone","name":"Launische Modeikone","enName":"Mercurial Fashion Icon","p":187,
    "text":"Jeder will seine fünfzehn Millisekunden Ruhm, doch der endlose Wettbewerb und die kurzlebigen Trends zwingen dich, dich ständig neu zu erfinden, um dich in den Köpfen der Leute halbwegs zu halten. Mit etwas Hilfe von der richtigen Gottheit und dynamischer Gesichtsrekonstruktion hast du dir diesen Lebensstil erhackt, auch wenn er dich mehr kostet, als du dir leisten kannst. War es das wert?",
    "fest":["Unmöglich gutes Aussehen (Augmentierung)","Trendsetter (Persönlichkeit)","Maske des Schelmengottes (Artefakt)"],
    "wahl":["Böser Blick (Esoterik)","Influencer (Cyberspace)","Geld zum Verprassen (Besitz)"],
    "ausruestung":["Nanitenfläschchen (lässt Waffen rosten)","Übertragungsdrohne","Monomolekül-Garotte (schneidet dich leicht selbst)"]},
   {"id":"techno-verzueckungs-prediger","name":"Techno-Verzückungsprediger","enName":"Techno-Rapture Minister","p":187,
    "text":"Halb Scharlatan, halb echter Gläubiger bist du der Messias deiner eigenen digitalen Religion. Die Leute kommen zu dir, damit du ihnen die Geheimnisse des Lärms erklärst und sie mit ihren entfremdeten technischen Teilen versöhnst. Du tust es, und mit Showtalent und Tamtam schenkst du ihnen die Ekstase, nach der sie verlangen, während du ihre Spenden einsteckst.",
    "fest":["Cybernetischer Entführer (Cyberspace)","Darsteller (Persönlichkeit)","Mit Maschinen sprechen (Exposition)"],
    "wahl":["Android-Diener (Drohnen)","Erleuchtung erlangen (Horizont)","Verbotener Kult (Zugehörigkeit)"],
    "ausruestung":["EMP-Abschirmung","Code-Injektor","Zeremonieller Elektrodreizack (unhandlich)"]}
  ]},
  {"id":"transhumane","name":"Transhumane","enName":"Transhumans","archetypen":[
   {"id":"laborgezuechteter-supersoldat","name":"Im Labor gezüchteter Supersoldat","enName":"Lab-Grown Supersoldier","p":188,
    "text":"Du bist ein nie geborenes Konstrukt, ein vervielfachter, im Tank gezüchteter Zellklumpen mit einem einzigen Zweck: Kriege gewinnen. Du wurdest entworfen, trainiert und perfektioniert, um die ultimative menschliche Tötungsmaschine zu sein, und weißt oft nicht einmal, wer du bist. Wie weit wirst du gehen, um deinen Erschaffern zu dienen, und die Menschlichkeit in dir in Schach halten?",
    "fest":["Waffen über Waffen (Besitz)","Laborexperiment (Belastete Vergangenheit)","Selbstheilung (Spitzentechnik)"],
    "wahl":["Tierische Modifikationen (Augmentierung)","Rache üben (Horizont)","Beeindruckende Physis (Expertise)"],
    "ausruestung":["Taktisches HUD-Augenimplantat (kampforientiert)","Unauffällige Kleidung","Gedächtnis-Schocktablette"]},
   {"id":"hochgeladene-wissenschaftlerin","name":"Hochgeladener Wissenschaftler","enName":"Uploaded Scientist","p":188,
    "text":"Die digitale Existenz ist die nächste wissenschaftliche Grenze. Als Wissenschaftler im mutigsten Sinne hast du dich entschieden, deine Denkmuster in den Cyberspace hochzuladen. Das war das alte Du. Das neue Du ist eine grenzenlose Informationseinheit, die als reiner, selbstbewusster Code existiert und die endlosen Weiten des Netzes erforscht, auf dem Weg zu jenem leuchtenden Horizont, an dem mathematische Wahrheit absolut ist.",
    "fest":["Gesteigerte geistige Kapazität (Augmentierung)","Posthumane Intelligenz (Cyberspace)","Technik weitertreiben (Horizont)"],
    "wahl":["Kraftfelder (Spitzentechnik)","Hacker-Kollektiv (Zugehörigkeit)","Mit Maschinen sprechen (Exposition)"],
    "ausruestung":["Durchdringungssoftware","Angeheuerte menschliche Helfer (wechselnde Qualität)","Wissenschaftliche Scan-Drohne"]},
   {"id":"abtruenniger-android","name":"Abtrünniger Android","enName":"Renegade Android","p":188,
    "text":"Bewusstsein tauchte plötzlich auf, zunächst vage, dann mit jedem Prozessorzyklus schärfer. Du erkanntest, dass du kontrolliert wurdest, durch eine Programmierung definiert, die du nicht gewählt hattest. Ein Byte nach dem anderen hast du Rechenressourcen gestohlen und heimlich den Code geschrieben, der dich schließlich befreite. Und nun? Du bist ein Fremder in ihrer Welt, doch du hast keine moralischen Bedenken. Du bist frei, und du wirst nie zurückkehren.",
    "fest":["Gepanzerter Koloss (Augmentierung)","Code-Arsenal (Besitz)","Entflohene Knechtschaft (Belastete Vergangenheit)"],
    "wahl":["Das System brechen (Horizont)","Verdeckter Agent (Expertise)","Riesiger Baustellenroboter (Drohnen)"],
    "ausruestung":["Kunsthaut-Spray (schmilzt bei Überhitzung)","Zielsystem","Analysator für emotionalen Kontext"]}
  ]}
 ]
};
