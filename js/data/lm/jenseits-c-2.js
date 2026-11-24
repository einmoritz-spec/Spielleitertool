lmAdd("jenseits-c", [
{
 "name": "Patch of Poison Vine",
 "p": 273,
 "sub": "Obstacle",
 "body": [
  "Unvorsichtige Reisende, Kinder oder Tiere können sich plötzlich inmitten von Gestrüpp aus gewöhnlichem Giftefeu oder Brombeergestrüpp wiederfinden, und manche Sammler müssen solche Flecken durchqueren, um an einen begehrten Pilz oder eine Blume zu gelangen. Die Dalish kennen verschiedene Hausmittel gegen sein Gift: den Ausschlag mit Milch abspülen, auf einer Gänseblümchenblüte kauen, eine Katze die betroffene Stelle ablecken lassen, ein Ei über die Haut reiben, um das Gift aufzusaugen, oder eine Suppe aus den bitteren Früchten der Ranke trinken.",
  {
   "tg": {
    "t": "Limits",
    "k": "n",
    "i": [
     "Cut Down 3",
     "Traverse 4",
     "Burn 2"
    ]
   }
  },
  {
   "tg": {
    "t": "Tags & Statuses",
    "k": "n",
    "i": [
     "poisonous thorns",
     "tangle of vines"
    ]
   }
  },
  "## Secrets",
  {
   "kv": [
    [
     "Handling",
     "Es ist üblich, die Ranken abzuschneiden, aber nicht zu verbrennen, da der entstehende Rauch das Gift verbreitet."
    ]
   ]
  },
  "## Threats & Consequences",
  "### Tangle",
  "> Die Dornen der sich windenden Ranken stechen in ungeschütztes Fleisch und schneiden in Stoff",
  "- Wer sie durchquert, verfängt sich (entangled-2; wenn nicht vollständig gelindert, zusätzlich bleeding-1 und itchy-1)",
  "- Alle in der Nähe erhalten itchy-3.",
  "- Ein Gegenstand bleibt im Dornengestrüpp hängen (einen Tag streichen)",
  "- Ein gefangenes Opfer gerät in Panik (panicked-2; und senke traverse um 1 Stufe)",
  "### Poison",
  "> Das juckende Gift breitet sich mit jedem Augenblick aus, den es unbehandelt bleibt",
  "- Der Juckreiz verschlimmert sich (itchy-1 und ein Symptom wie Hautausschlag, unschöne Blasen, panicked-1, fatigued-1, blurry-vision-1 oder sick-1)"
 ]
},
{
 "name": "Tall Tale Game",
 "p": 273,
 "sub": "Mystery, Quarry",
 "body": [
  "Ein schwer fassbares Wild wie ein Fisch, ein Hirsch oder ein Hase, das noch kein Jäger fangen konnte. Schon es aufzuspüren ist eine mühselige Aufgabe, aber wohl wert – so ein großes Exemplar hast du noch nie gesehen, sag ich dir!",
  "Diese Kreatur hat eine bestimmte körperliche Eigenheit oder eine Geschichte oder Legende, die an ihr hängt. Meist hat sie eine Schwäche, die sich im Gespräch mit den Weisen aufdecken lässt, doch es gibt zu viele Legenden über ihren Aufenthaltsort und ihre Gewohnheiten, die die Wahrheit vernebeln. Wer das Tier fängt, wird von anderen Jägern verehrt und erhält eine eigene Geschichte.",
  "Um die Challenge zu jagen, muss man sie zuerst aufspüren (track), bevor man sie fangen kann (catch).",
  {
   "tg": {
    "t": "Limits",
    "k": "n",
    "i": [
     "Track 3",
     "Catch or Outrun 3"
    ]
   }
  },
  {
   "tg": {
    "t": "Tags & Statuses",
    "k": "n",
    "i": [
     "elusive",
     "too many legends",
     "Wähle zwei: quick as the wind, iron-like hide / scales, protected by a spirit, impeccable camouflage, preternatural senses, miniscule oder immense size",
     "alert-3",
     "Fabled beast (accurate lore)"
    ]
   }
  },
  "## Threats & Consequences",
  "### Mislead",
  "> Jemand erzählt noch eine weitere Version der Legende",
  "- Seine Geschichte ist sehr überzeugend (confused-2)",
  "- Sie zweifeln und schmälern dein Können (humiliated-2 oder doubting-2)",
  "### Avoid",
  "> In der Wildnis gibt es nur spärliche Anzeichen für ein solches Tier",
  "- Du triffst einen Rivalen unter den Jägern (Neue Challenge: Lone Tracker, CBII 126)",
  "- Die Spuren der Kreatur verschwinden (tracked um 1 Stufe senken)",
  "- Du wirst in feindlicheres Land geführt (tiefes Wasser, steile Klippen, dichter Wald usw.)",
  "- Deine Reise wird anspruchsvoller (Neue Challenge: eine passende Landscape-Journey-Vignette)",
  "### Flee",
  "> Plötzlich innehalten und nach Jägern in der Nähe Ausschau halten",
  "- Den Geruch oder Anblick eines Jägers wahrnehmen (Exposure)",
  "- Vor seinem Verfolger davonschießen (outrun-1)",
  "- Alles auf seinem Weg niedertrampeln (einen Falle-Tag streichen, prone-2 oder bruised-2)"
 ]
},
{
 "name": "Shrine",
 "p": 275,
 "sub": "Sapper, Support",
 "body": [
  "Ob Wegaltar, Dorfbrunnen oder moosbewachsener Sumpfmonolith – Schreine sind ein wichtiger Teil der Oldways und des Dalish-Lebens und dienen als Orte des Schutzes, der spirituellen Reinigung und der Naturwunder. Sie speichern und entlassen Unseen-Kräfte und können von NPCs genutzt werden, die ihre Wege kennen.",
  {
   "kv": [
    [
     "Dismantle 3",
     "–"
    ],
    [
     "Desecrate 3",
     "–"
    ],
    [
     "Tend 5",
     "Liefere eine Manifest Consequence an ein großes Gebiet, eine große Gruppe oder über einen langen Zeitraum."
    ]
   ]
  },
  {
   "tg": {
    "t": "Tags & Statuses",
    "k": "n",
    "i": [
     "tended-2"
    ]
   }
  },
  "## Notes",
  "Der Status tended spiegelt die angesammelte spirituelle Kraft des Schreins wider und erschwert Reaktionen, um seiner Magie zu widerstehen, doch jede wundersame Manifestation zehrt diese Kraft auf (untended-1), siehe Folk Magic (S. 226).",
  "## Threats & Consequences",
  "### Gather Power",
  "> Der knorrige Rahmen des Schreins tanzt im Kerzenlicht",
  "- Jemand betet, entzündet Weihrauch oder bringt am Schrein ein Opfer dar (erhält tended-1)",
  "- Mit der Zeit zieht der Schrein Kraft aus der Umgebung (erhält tended-1)",
  "- Der Schrein absorbiert die Wucht eines Zaubers oder Rituals in der Nähe (erhält tended-1)",
  "- Eine unsichtbare Bewegung oder ein Flüstern macht jemanden nervous-1",
  "### Manifest",
  "> Die Luft um den Schrein wird dunstig und schwer; seine Verzierungen zittern im Wind",
  "- Ein Unglück trifft jemanden, der dem Schrein widersteht oder ihn missachtet (einen Tag streichen, tangled-2, cursed-2 oder pushed-back-2)",
  "- Wer den Schrein unterstützt, wird vor Schaden geschützt (warded-against-[wähle]-2)",
  "- Wer den Schrein unterstützt, wird geheilt oder gestärkt (das Gebiet um den Schrein wird cold-2, windy-2, cursed-2 usw.)",
  "- Jemand beim Schrein wird obsessed-2, enraptured-2, sleepy-2, enraged-2 usw."
 ]
},
{
 "name": "Invoker of Spells (Add-on)",
 "p": 275,
 "sub": "Aggressor, Support",
 "body": [
  "Diese Challenge kann traditionelle Zauber und Beschwörungen als Praktizierende der Oldways oder Jünger einer anderen magischen Kunst wirken. Sofern sie kein Thaumaturge (S. 233) sind, erleiden sie mit jeder Consequence, die sie austeilen, tired-1.",
  {
   "tg": {
    "t": "Limits",
    "k": "n",
    "i": [
     "Exhaust 4"
    ]
   }
  },
  "Wähle ein magisches Instrument: bone adornments, carved effigy, hazel wand, impure crystal, painted leather drum.",
  "Wähle ein Merkmal, eine Haltung oder einen sozialen Status: destructive-2, mysterious-2, respected-2, loved-by-animals-2 usw.",
  "## Threats & Consequences",
  "### Cast a Spell",
  "> Düster singen, während die Augen in den Höhlen nach hinten rollen",
  "- Einen boshaften Fluch aussprechen (Fieber und Pocken, rostige Klingen, forgetful-3, hateful-3 usw.)",
  "- Einen Schutz auf jemanden oder etwas legen (gibt warded-against-harm-2 oder warded-against-Twilight-2)",
  "- Jemanden lähmen oder etwas mit Unseen-Kraft festhalten (paralyzed-3 oder invisibly-locked-3)",
  "- Jemandem eine Waffe oder ein Werkzeug aus der Hand schleudern oder zerschmettern (einen Tag streichen)",
  "- Das Wetter herbeirufen (cold-2, wet-2, blown-back-2, shocked-2)",
  "- Eine Bestie oder Creature of Twilight beschwören (Neue Challenge)"
 ]
},
{
 "name": "Rambling",
 "p": 276,
 "pe": 277,
 "sub": "Journey – Landscape",
 "body": [
  "Die verzaubertsten Orte der Dales erreicht man über keine Straße. Querfeldein über Hügel und Berghänge, durch die flüsternden grünen Wälder des Dale, durch Sumpf und Bäche zu stapfen – all das mag viel mühsamer sein als Reisen mit Karren und Pferd, bietet aber unvergleichliche wilde Schönheit, Geheimnis und Staunen.",
  {
   "tg": {
    "t": "Tags & Statuses",
    "k": "n",
    "i": [
     "rough terrain",
     "unpredictable weather"
    ]
   }
  },
  "## General Consequences",
  "- Du stürzt einen Hügel hinab und verletzt dich (bruised-2) oder verlierst etwas Wertvolles (einen Tag streichen).",
  "- Du verlierst das Zeitgefühl (Complication oder time-passes-1).",
  "- Der lange Marsch macht dich hungry-1, cold-1, tired-1 oder disheartened-1.",
  "- Von Wildnis umgeben hast du nicht die leiseste Ahnung, wo du bist (lost-2).",
  "## Vignettes",
  "### Ravine Crossing",
  "> Eine tiefe Schlucht durchschneidet deinen Weg, ihre Felsen von rutschigem Moos bedeckt. Am Grund ist ein reißender Bach zu hören. Jemand hat einen Baumstamm über den Abgrund gefällt, aber das Überqueren ist riskant.",
  "- Du stürzt in die Schlucht und brichst dir ein Bein oder einen Arm (broken-bone-4).",
  "- Einen anderen Weg hinüber zu finden, dauert lange (time-passes-2).",
  "- Der Stamm bricht und fällt in die Schlucht – du bist von deinen Gefährten getrennt (Blocked).",
  "- Dein Leben zieht beim Überqueren an dir vorbei (contemplative-2 oder regretful-2).",
  "### Hidden Spring",
  "> Du hörst Wasser unter einem tiefen Dickicht rauschen, eine versteckte Quelle. Dutzende bunter Bänder sind an die Äste darüber geknüpft: Opfergaben, Warnungen oder beides.",
  "- Die seltsamen Bänder hinterlassen noch Stunden später das Gefühl, beobachtet zu werden (worried-2).",
  "- Dieser schöne Fleck Natur lässt dich länger hierbleiben wollen (won’t-leave-2).",
  "- Zu spät merkst du, dass das Dickicht giftige Blätter hat (itchy-1).",
  "- Du störst oder missachtest den Geist dieses Ortes (cursed-1 oder Neue Challenge: Local Godling, CBII 140).",
  "### Shelter from the Rain",
  "> Ein heftiger Regenschauer setzt ein und wird dich bis auf die Knochen durchnässen, wenn du keinen Unterschlupf findest, vielleicht eine Hütte in der Nähe.",
  "- Du bist völlig drenched-3.",
  "- Du watest durch den Schlamm (caked-in-mud-2).",
  "- Dein Unterschlupf ist widerlich (filthy-2) oder riecht nach nassen Nutztieren (smelly-2).",
  "- Du teilst den Unterschlupf mit einem langweiligen Reisegefährten, der langatmige Geschichten erzählt und sich selbst einlädt, mitzukommen.",
  "- Eine Hütte in der Nähe ist bereits besetzt (Neue Challenge: Hedge Witch, CBII 125, oder Hag of Black Oak, S. 290).",
  "### Join a Dalish Picnic",
  "> Ein paar Leute machen ein schönes Picknick auf einer kleinen Wiese neben einem Bach. Sie rufen dir zu und bestehen darauf, dass du dich ein Weilchen zu ihnen gesellst.",
  "- Sie machen spöttische Bemerkungen, oder dir unterläuft ein Fauxpas (embarrassed-2).",
  "- Du verbringst zu viel Zeit (time-passes-1) oder Essen (short-on-supplies-1) mit ihnen.",
  "- Du hast einen von ihnen ins Herz geschlossen (enamoured-3).",
  "- Sie entpuppen sich bald als ziemlich gemein (Neue Challenge: Close-Knit Circle, S. 244).",
  "- Einer von ihnen ist ein vertrautes Gesicht, das du nie wiedersehen wolltest (Neue Challenge: Avoided Acquaintance, CBII 112).",
  "### Boundary Shrine and Wall",
  "> Du findest einen einsamen Grenzstein-Schrein neben einer langen Mauer aus losen, bemoosten Steinen, die sich über den Boden zieht. Eine angemessene Opfergabe erfordert Essen (short-on-supplies-1) oder inbrünstiges Gebet (tired-1 oder raspy-1).",
  "- Der Schrein verflucht dich mit schweren Stiefeln (hobbled-2) oder einem eigentümlichen Gestank, der dich als Eindringling kennzeichnet (smelly-marking-2).",
  "- Wie vom Schrein herbeigerufen, greift dich plötzlich ein Wildtier an (Neue Challenge: Dire Skunk, S. 257, Protective Bear, CBII 142, oder Big Cat, CBII 138).",
  "- Wer diesen Schrein errichtet hat, wird sich plötzlich deiner Anwesenheit bewusst (Exposure oder Neue Challenge, z. B. Maddened Woodcutter, CBII 140, oder eine andere).",
  "### Overlook",
  "> Du kommst an eine kleine Anhöhe mit Blick auf zwei Täler.",
  "- Der Hügel ist nicht so klein, wie du dachtest, und der Aufstieg lässt dich winded-3 zurück.",
  "- Der Gegenwind frischt auf und weht etwas schlecht Befestigtes davon, etwa einen Hut, eine Karte oder einen anderen leichten Gegenstand (wähle: einen Item-Tag streichen oder time-passes-2).",
  "- Jemand sieht dich auf dem Hügel, was du lieber vermieden hättest (Exposure).",
  "- Von hier oben siehst du den Himmel über dir wirbeln und brodeln (Neue Vignette, Wetter, CBII 201).",
  "- Hier im Laub verbirgt sich eine alte Ruine (Neue Challenge: Dolmen, S. 278).",
  "### Furtive Woodland Ritual",
  "> Flüstern und Gesänge sind unter den Bäumen zu hören, als du dich einer Gruppe von Ritualisten näherst, die tief im Wald eine geheime Zeremonie abhalten.",
  "- Sie sehen dein Gesicht oder ein anderes erkennbares Merkmal, mit dem sie dich später finden werden (Exposure und marked-3).",
  "- Sie laden dich ein, an ihrem Ritual teilzunehmen, und erklären ruhig seine Vorteile (believing-3).",
  "- Du hast Dinge gesehen, die du nicht hättest sehen sollen (rattled-3).",
  "- Sie werden defensiv oder aggressiv (Neue Challenge: Neighbor With A Secret, S. 251, Crowling, S. 271, oder Hexia, S. 292).",
  "### Foraging Opportunity!",
  "> Du bemerkst, dass Waldboden, Licht und Feuchtigkeit perfekt für bestimmte Blumen, Kräuter oder Pilze sind, die du suchst. Sie könnten in der Nähe wachsen.",
  "- Etwas, das du oder dein Gefährte riecht, schmeckt oder berührt, erweist sich als vergiftet (poisoned-2 oder itchy-2).",
  "- Du störst einen Bienenstock oder anderes heimisches Insektenleben (stung-3).",
  "- Du findest, was du suchst, aber es ist von Brennnesseln umgeben (Neue Challenge: Patch of Poison Vine, S. 273).",
  "- Du läufst versehentlich in eine versteckte Jagdfalle (hanging-4 oder caught-2 und wounded-2)."
 ]
},
{
 "name": "Ruins of Gwyrdolin",
 "p": 278,
 "body": [
  "Obwohl die Dales nur ein ferner Außenposten des Old Kingdom waren, hat es auf ihren Hügeln, Wäldern und Menschen seine Spuren hinterlassen. Heute sind seine zerfallenden Ruinen Heimat für allerlei Kreaturen, die unbemerkt bleiben wollen oder auf irgendeine Weise an die Vergangenheit gebunden sind."
 ]
},
{
 "name": "Dolmen",
 "p": 278,
 "sub": "Countdown, Sapper",
 "body": [
  "Niemand weiß genau, was diese grob behauenen Steinmonumente für Old Gwyrdolin waren. Meist als drei große, zu einem schiefen Unterstand angeordnete Steine zu sehen, strahlen sie durch ihre Flechtenmuster und Spiralritzungen und vor allem durch die gähnende Dunkelheit im Inneren Geheimnis und Gefahr aus. Oft sind Dolmen Grabstätten, die zu einem unterirdischen Barrow (S. 282) führen. Werden sie gestört, könnten sich die dort Begrabenen aus ihrer Ruhe regen. Oldways-Praktiken und vielleicht andere Magien können die verfluchten Geister zumindest eine Weile ruhen lassen (lay to rest). Dies ist ein polarer Status zu awaken.",
  "Mit geringen Änderungen kann dieses Challenge-Profil als Vorlage für ähnlich verhexte Orte dienen, an denen sich eine unerwünschte Präsenz regt, etwa die Pilzkreise der Vila (S. 297) in Lichtungen des Aldenweald.",
  "## Limits",
  {
   "kv": [
    [
     "Awaken 4",
     "Neue Challenge: Dolmen Dirger, S. 279, oder Backwoods Haunting, CBII 123."
    ],
    [
     "Lay to Rest 4",
     "–"
    ]
   ]
  },
  {
   "tg": {
    "t": "Tags & Statuses",
    "k": "n",
    "i": [
     "empowered at night",
     "heavy stones",
     "spooky-2",
     "Olden magic (Twilight Lullaby)"
    ]
   }
  },
  "## Secrets",
  {
   "kv": [
    [
     "True Nature",
     "Die meisten Dolmen sind Pools of Wanehunger, die ihre Toten animieren (die hier nicht banished werden können). Andere können thaumaturgische Verzauberungen enthalten oder an natürlichen Pools of Power errichtet sein."
    ],
    [
     "Dispelling the Curse",
     "Es ist möglich, den cursed-5 des Dolmen vollständig zu bannen, oft aber sehr schwierig (Aufgabe auf Greatness-Stufe)."
    ]
   ]
  },
  "## Threats & Consequences",
  "### Haunt",
  "> Ein Schrei hallt von drinnen wider; ein madenbesetzter Rabe fliegt vorbei; ein Stein unter dem Fuß entpuppt sich als Schädel",
  "- Ein Grauen lässt deine Knochen frieren (frightened-2 und cold-1)",
  "- Dein Mut verlässt dich (einen Tag der Tapferkeit streichen)",
  "- Etwas an diesem Ort lockt dich (foolishly-curious-3)",
  "### Awakening",
  "> Etwas nicht von dieser Welt regt sich im steinernen Schatten des Dolmen",
  "- Das Wesen des Ortes haftet an dir wie Teer (cursed-3)",
  "- Was auch immer hier ruht, beginnt zu erwachen (awake-1)",
  "- Von unten greift eine Skeletthand nach deinem Knöchel (terrified-3, grabbed-1, erhält awake-1 und Neue Challenge: Unshriven Revenant, CBII 159)",
  "- Seine Schrecken mit mehr Macht erfüllen (gibt empowered-2 oder warded-against-magic-2)",
  "- Mit der Zeit breitet sich der dunkle Einfluss des Dolmen auf nahe Orte aus (Complication, erweitert seine Sphere of Influence)"
 ]
},
{
 "name": "Dolmen Dirger",
 "p": 279,
 "sub": "Aggressor",
 "body": [
  "Ein verfluchter Wraith aus alter Zeit, der mit großem Bedauern starb, erhebt sich nun aus seinen Hügelgräbern und singt sein Totenlied, um die Herzen der Lebenden mit seelenzerreißender Trauer zu erfüllen. Die einzige Hoffnung einfacher Leute ist, den Geist vorübergehend zu besänftigen, indem sie seinen Tod ehren. Bone Tenders wissen, wie man diese Geister für einen Mond oder eine Jahreszeit zur Ruhe legt, doch dann müssen sie ungestört bleiben.",
  {
   "tg": {
    "t": "Limits",
    "k": "n",
    "i": [
     "Harm -",
     "Appease 4",
     "Lay to Rest 3"
    ]
   }
  },
  {
   "tg": {
    "t": "Tags & Statuses",
    "k": "n",
    "i": [
     "haunting voice",
     "grief-stricken-2"
    ]
   }
  },
  "## Secrets",
  {
   "kv": [
    [
     "Ward",
     "Ein Dirger überschreitet nicht seinen früheren Namen oder sein Trauerlied, auf den Boden geschrieben."
    ],
    [
     "Banish",
     "Er kann nur banished 3 werden, wenn er seine Grabstätte verlässt (Incarnation of Wanehunger)."
    ],
    [
     "Cleanse",
     "Die Reinigung seiner verfluchten Grabstätte (cursed-5) ist der einzige Weg, ihn zu zerstören."
    ],
    [
     "Past Life",
     "Dirger, die Wight Sorcerers waren, haben Potent Wanehunger."
    ]
   ]
  },
  "## Threats & Consequences",
  "### Haunt",
  "> Die Lebenden mit leblosen Augen anstarren, frei von jedem Gefühl außer Trauer",
  "- Mit hallender, jenseitiger Stimme klagen (broken-heart-3 oder hopeless-3 für alle, die es hören)",
  "- Einen Schrei ausstoßen, der Herzen mit Schrecken trifft (petrified-2 für alle, die es hören)",
  "- Über einem Lebewesen schweben und sein Maul öffnen, um sich von seiner Seele zu nähren (drained-of-life-2)",
  "- Zwischen sterblicher und geistiger Welt flackern (erhält barely-visible-2)",
  "- Weitere Geister stören, falls welche in der Nähe sind (wird zu einer Procession)"
 ]
},
{
 "name": "Spriggan",
 "p": 280,
 "sub": "Aggressor, Watcher",
 "body": [
  "Diese kleine, verhutzelte Creature of Twilight bewacht überwucherte Ruinen, um einen kostbaren Schatz zu schützen, geheimes Wissen zu bewahren oder weil ein Eid sie dazu bindet. Lass dich von ihrer Größe nicht täuschen, denn ein Spriggan besitzt die körperliche Kraft eines Riesen und magische Fähigkeiten, um Eindringlinge zu verhexen. Dennoch hält das Diebe nicht davon ab, törichterweise in seine Domäne einzudringen.",
  {
   "tg": {
    "t": "Limits",
    "k": "n",
    "i": [
     "Harm 4",
     "Outwit 3",
     "Parley 5"
    ]
   }
  },
  {
   "tg": {
    "t": "Tags & Statuses",
    "k": "n",
    "i": [
     "knee-high",
     "cantankerous",
     "alert-2",
     "territorial-3",
     "home-advantage-2",
     "Giant’s strength",
     "Command of nature (Oldways chant)"
    ]
   }
  },
  "## Secrets",
  {
   "kv": [
    [
     "Sap",
     "Der Saft eines Spriggan ist ein Entheogen (S. 238)."
    ],
    [
     "True Nature",
     "Ein Fallen Leaf, eines von vielen, die im Krieg zu Titanen wurden, um an der Seite des Winter King zu kämpfen, und später zu winziger Gestalt verkalkten. Er bereut nun die Vergangenheit, kann sich aber kaum an sie erinnern."
    ]
   ]
  },
  "## Threats & Consequences",
  "### Patrol",
  "> Murren, während er eine Störung in seinem Bau untersucht",
  "- Spuren eines Eindringlings entdecken (Exposure oder hidden bzw. stealthy um 2 senken)",
  "- Mit seiner moosbedeckten Haut und Rindenhaut mit der Natur verschmelzen (erhält hidden-2)",
  "- Giftige Dornenranken wachsen lassen, um einen Eingang, Ausgang oder Schatz zu bewachen",
  "### Drive Out",
  "> Auf einen Eindringling zustampfen und in einer alten Zunge schreien",
  "- „Schrecklichste Vergeltung!“ versprechen (scared-2)",
  "- Mit erstaunlicher Kraft zuschlagen (crushed-3 und knocked-back-3)",
  "- Größer werden (knee-high durch giant size ersetzen)",
  "### Cast a Spell",
  "> Boshaft funkeln, uralte Worte murmeln und mit einem knorrigen Finger schnippen, während Blätter plötzlich rascheln und wirbeln",
  "- Einen mitgeführten Gegenstand animieren, damit er auf ihn zufliegt (einen Item-Tag streichen)",
  "- Einen Windstoß befehlen, der jemanden wegbläst (knocked-back-3)",
  "- Einen boshaften Hexenfluch auf einen Dieb legen (unlucky-2, itchy-2 oder starving-2)",
  "- Eine Verzauberung brechen oder einen Zauber kontern (einen magischen Tag streichen)"
 ]
},
{
 "name": "Miasmic (Add-on)",
 "p": 280,
 "sub": "Aggressor",
 "body": [
  "Der als Miasma (S. 197) bekannte Makel ist in die Moore und Sümpfe der Dales gesickert, besonders im Süden, näher an den Ruinen von Old Gwyrdolin. Das Miasma ist mehr als ein erstickender Dunst: Es verbreitet eine wahre Verderbnis des Geistes, die die Infizierten dazu treibt, alles zu verschlingen. Infected steht für den Kontakt mit dem Miasma, während hungry seine Symptome darstellt (siehe S. 240).",
  {
   "tg": {
    "t": "Limits",
    "k": "n",
    "i": [
     "Cleanse 4"
    ]
   }
  },
  {
   "tg": {
    "t": "Tags & Statuses",
    "k": "n",
    "i": [
     "hungry-3"
    ]
   }
  },
  "## Threats & Consequences",
  "### Spread Miasma",
  "> Sabbern und vor gieriger Gier stöhnen",
  "- Einem unschuldigen Opfer immer näher rücken (closing-in-1)",
  "- Jemanden beißen (bleeding-2 und infected-2)",
  "- Immer hungriger werden, während sich das Miasma in ihnen ausbreitet (erhält hungry-1)",
  "- Abgestandenes Wasser oder stickige Räume infizieren (infected-2)"
 ]
},
{
 "name": "Wanderlands Grave Robber",
 "p": 281,
 "sub": "Sapper, Countdown, Quarry",
 "body": [
  "Jede vernünftige Dalish würde einen Grabräuber verachten, der die Toten um des Reichtums willen entehrt; dennoch werden sie in South Crossing aus Pragmatismus einigermaßen geduldet. Viele, die aus den Wanderlands kommen, bringen Gegenstände mit, die nur aus einem Grab des Old Kingdom geplündert worden sein können.",
  "Ein Grabräuber aus den Wanderlands, der in den Dales Schatzwitterung aufnimmt, wird der Spur wahrscheinlich folgen, glaubt wenig Konkurrenz zu haben und sabotiert ohne Skrupel die Bemühungen rivalisierender Schatzsucher.",
  {
   "tg": {
    "t": "Limits",
    "k": "n",
    "i": [
     "Harm 2",
     "Throw Off 4",
     "Outrun 4"
    ]
   }
  },
  {
   "kv": [
    [
     "Reach Treasure 4",
     "Der Grabräuber erreicht den Schatz vor den Heroes. Erreichen die Heroes dieses Limit zuerst, fassen sie den Grabräuber. Erreicht es der Grabräuber zuerst, flieht er mit dem Schatz."
    ]
   ]
  },
  {
   "tg": {
    "t": "Tags & Statuses",
    "k": "n",
    "i": [
     "quick-footed",
     "sense for treasure",
     "talisman against magic",
     "unscrupulous",
     "alert-2",
     "evasive-2"
    ]
   }
  },
  "## Notes",
  "Solange ein Grabräuber die Heroes verfolgt oder in der Gegend ist, können seine Waylay-Consequences während einer Journey oder Vignette ausgeteilt werden.",
  "## Threats & Consequences",
  "### Listen In",
  "> Mit staubigem Hut und klapperndem Gepäck auftauchen, wenn die Heroes von einem Schatz erfahren",
  "- Ein Gespräch über einen möglichen Schatz belauschen (Exposure)",
  "- Eine Schwäche der Heroes in Erfahrung bringen (Exposure)",
  "- Einen Hinweis, Schlüssel oder eine Karte stehlen, bevor die Heroes sie erreichen (Blocked oder einen Tag streichen)",
  "- Die Heroes beschatten (tracked-2)",
  "### Waylay",
  "> An einer Ruine, einem Grab oder einem Friedhof wieder auftauchen und verdächtig grinsen",
  "- Eine Mauer umstürzen, eine Tür versperren oder eine Brücke kappen, um den Heroes den Weg zu blockieren (Blocked)",
  "- An Beschilderung oder Wegmarkierungen herumpfuschen (lost-2 oder time-passes-1, und hungry-2)",
  "- Eine Falle stellen, um die Heroes aufzuhalten (trapped-3 oder Neue Challenge)",
  "- Die Vorräte, Reittiere, Ausrüstung oder Moral der Heroes sabotieren (einen Tag streichen oder einen Stufe-2-Status geben)",
  "- Jemanden mit einem Spaten schlagen (staggering-2)",
  "- Weiter voraus als die Heroes gesehen oder gehört werden (erhält reaching-treasure-1)",
  "### Escape",
  "> Den Heroes zum Abschied winken, den Schatz in der anderen Hand",
  "- Abstand gewinnen, indem sie außer Reichweite gelangen (erhält escaping-2)"
 ]
},
{
 "name": "Barrow",
 "p": 282,
 "pe": 283,
 "sub": "Journey – Landscape",
 "body": [
  "Unter dem steinernen Hügelgrab liegt ein ausgehobener Tunnel, der in eine dunkle, gefährliche Schatzkammer führt. Welche Geister aus Old Gwyrdolin spuken in diesen Gräbern?",
  "Verwende auch Vignettes aus Forlorn Ruins, CBII 160–161, und Locks & Traps, CBII 203–204.",
  {
   "tg": {
    "t": "Tags & Statuses",
    "k": "n",
    "i": [
     "darkness of the grave",
     "hewed stone boulders",
     "quiet chill",
     "mysterious-2"
    ]
   }
  },
  "## General Consequences",
  "- Ein plötzliches Geräusch lässt dich zusammenfahren (frightened-1).",
  "- Das Gefühl von Tod und Verlust wird erdrückend (disheartened-1).",
  "- Das Gewirr der Tunnel erstreckt sich endlos unter dem Hügel (lost-2 oder time-passes-1).",
  "- Du störst den Schlaf von etwas tiefer im Inneren (restless-1 für eine künftige Challenge).",
  "- Du spürst eine dunkle Präsenz, die sich nähert und dich jagt (catch-1; wenn catch 4 sein Maximum erreicht, präsentiere eine Neue Challenge: Dolmen Dirger, S. 279, oder Otherworldly Assailant oder Unshriven Revenant, CBII 159).",
  "## Vignettes",
  "### Trapped Hound",
  "> Das Heulen eines verzweifelten (distressed-2) Jagdhundes hallt in den Tunneln des Barrow wider. Er muss hineingefallen und an diesem verfluchten Ort gefangen sein.",
  "- Der Hund heult ein letztes Mal und verstummt dann (worried-2 oder guilty-2).",
  "- Der Hund scheint viel tiefer drin zu sein, als du dachtest (lost-1).",
  "- Du findest ihn, aber er ist gravely-wounded-4.",
  "- Du findest ihn, aber etwas an ihm ist unnatürlich (Neue Challenge: Chained Hound, S. 257).",
  "### Beckoned to Enter",
  "> Am gähnenden Eingang des Barrow erkennst du kaum die Umrisse eines Tunnels, der tief in den Hügel führt. Du musst deine Entschlossenheit stählen, bevor du diesen daunting-2 Ort betrittst.",
  "- Du fühlst dich seltsam gedrängt, den Barrow zu betreten (curious-2 oder compelled-to-delve-2).",
  "- Du erinnerst dich an Geschichten von goldenen Schätzen in solchen Barrows (greedy-2).",
  "- Dir fehlt der Mut einzutreten (Blocked oder apprehensive-2).",
  "- Du hältst es für klug, etwas von dir draußen zu lassen, falls sie dich suchen kommen (wähle: einen Tag streichen oder unlucky-2).",
  "- Ein schwaches Licht erscheint im Tunnel (Neue Challenge: Will-O’-The-Wisp, CBII 143).",
  "### Collapsing Stone",
  "> In einem engen Gang, teilweise von eingestürztem Geröll versperrt, wirkt die verdichtete Steinwand des Barrow locker und unzuverlässig. Du solltest beim Durchqueren vorsichtig sein.",
  "- Du stolperst über Gestein und holst dir Schrammen (grazed-2).",
  "- Ein weiterer Teil der Wand kracht von oben auf dich nieder (crushed-3 und pinned-3).",
  "- Die Wand stürzt ein und blockiert deinen Weg oder trennt dich von anderen (Blocked oder Gefährten-Tags streichen).",
  "### Path of Filth",
  "> Der schattige Gang voraus ist voller stehendem Wasser, das sich über die Jahre darin gesammelt hat.",
  "- Im Wasser wirst du filthy-3, wet-2 und sick-2.",
  "- Umkehren kostet kostbare Zeit (time-passes-1) oder ist kniffliger als gedacht (lost-2).",
  "- Du rutschst aus und lässt etwas im trüben Schlamm fallen; du findest es nicht wieder (einen Tag streichen).",
  "- Das Wasser ist von mehr als nur üblem Geruch verdorben, doch du merkst es zu spät (Neue Challenge: Stagnant Thoughts, CBII 183).",
  "### A Dreaded Warning",
  "> Mehrere Oldways-Zeichen sind mit Kreide neben eine uralte Bronzetafel gemalt, mit einer Inschrift in der Sprache des Old Kingdom.",
  "- Die Inschrift verspricht Tod und Verderben für jeden, der diesen Ort stört (frightened-2).",
  "- Die Inschrift ist ein Fluch auf die erste Person, die hineintritt (withering-curse-3).",
  "- Die Inschrift enthält wichtige Einzelheiten über das Wesen dieses Ortes, aber du verstehst sie nicht ganz (Yes, but …).",
  "- Du missverstehst diese Anweisungen zur Vermeidung einer Falle (verwende eine Consequence aus Hidden Pit, CBII 203).",
  "### Escaping the Barrow",
  "> Es ist Zeit, diesen Ort zu verlassen, doch das Tunnelnetz fühlt sich plötzlich enger und beklemmender an, als wollte es dich begraben halten.",
  "- Du findest eine weitere Sackgasse (lost-2 und frustrated-2).",
  "- Etwas scheint dich durch die Dunkelheit zu jagen (worried-2 oder catch-2).",
  "- Die Tunnel beginnen um dich herum einzustürzen (Blocked und injured-3).",
  "### Gwyrdolan Effigies",
  "> Du findest eine Reihe finsterer Statuen und kunstvoll geschnitzter Reliefs, jedes eine bedrohlichere Gestalt oder grauenvollere Szene als das vorige.",
  "- Die Schnitzereien wecken in dir einen seltsamen Hunger (hungry-2).",
  "- Eine Präsenz an diesem Ort überwältigt dich und lässt dich ohnmächtig werden (confused-2, bruised-2 und time-passes-2).",
  "- Ein Gesicht aus den Schnitzereien wird dich lange verfolgen (troubled sleep).",
  "- Du erlebst einen Rückblick oder eine Vision, die deine Verbindung zu diesem Ort offenbart (shocked-3).",
  "- Der Geist eines Old-Gwyrdolin-Königs erhebt sich aus einer Figur und singt sein eigenes Totenlied (Neue Challenge: Dolmen Dirger, S. 279)."
 ]
},
{
 "name": "Wetland & Lake",
 "p": 284,
 "body": [
  "Gesegnet mit starkem Regen und sprudelnder Frühjahrsschneeschmelze sind die Dales gesprenkelt mit Teichen, Seen und Feuchtgebieten sowie Flüssen und Bächen – alle verlockend, doch seltsame Wasserkreaturen verbergend."
 ]
},
{
 "name": "Albino Salamander",
 "p": 284,
 "sub": "Aggressor, Pursuer",
 "body": [
  "Ein kolossaler Amphibienkoloss, der in unterirdischen Flusshöhlen und überfluteten Ruinen des Old Kingdom lauert; der Albino Salamander taucht nur bei Dunkelheit an Seeufern auf, um große Vögel und streunendes Vieh zu verschlingen. Trotz seiner Größe ist dieser Spitzenprädator flink und schnell und jagt mit Hinterhalttaktiken sogar Hunde und Hirsche. Manche Fischer lassen Teile ihres Fangs als Opfergaben zurück, um seinen Hunger zu stillen, und finden im Morgengrauen an ihrer Stelle einen edelsteinartigen Stein. Doch wehe den Gierigen, denn in die Höhle der Kreatur einzudringen, um ihre perlenartigen Gaben zu stehlen, ist ein sicherer Weg, im Ganzen verschluckt zu werden.",
  {
   "tg": {
    "t": "Limits",
    "k": "n",
    "i": [
     "Harm 5",
     "Escape 3",
     "Satisfy 4"
    ]
   }
  },
  {
   "tg": {
    "t": "Tags & Statuses",
    "k": "n",
    "i": [
     "agile and quick",
     "sensitive to bright light",
     "thick hide",
     "slimy-3",
     "hidden-2",
     "Huge and heavy"
    ]
   }
  },
  "## Secrets",
  {
   "kv": [
    [
     "True Nature",
     "Eine solche Bestie könnte ein natürliches Tier sein, ein durch Wanehunger vergrößerter kleinerer Salamander oder ein Fallen Leaf, das der Star of Underwater Caves war."
    ]
   ]
  },
  "## Threats & Consequences",
  "### Ambush",
  "> Weite Wellen stören die Wasseroberfläche, oder ein großer Schatten zieht unter Wasser vorbei",
  "- Aus dem Versteck schnellen, um seine Beute mit weit geöffnetem Maul zu verschlingen (swallowed-5 und erhält satisfied-3)",
  "- Seinen schweren Schwanz peitschen, um jemanden zu schlagen (crushed-3 und knocked-down-2)",
  "### Chase",
  "> Zielstrebig schwimmen, während das Wasser um seinen glitschigen Körper rauscht",
  "- Auf seine Beute aufholen (escape um 1 Stufe senken)",
  "- Sein Ziel in tiefere Gewässer oder labyrinthische Tunnel jagen",
  "### Reconsider",
  "> Stehenbleiben und starren, als überlege es seine nächsten Schritte",
  "- Wunden auf seiner schleimigen Haut sondern ab, zischen und schließen sich (wounded um 2 Stufen senken)",
  "- Wasser auf Lichtquellen spritzen, um sie zu löschen (Tags streichen oder fire um 2 Stufen senken)",
  "- Plötzlich ins Wasser gleiten und verschwinden (Blocked oder erhält hidden-2)"
 ]
},
{
 "name": "Ol’ Scales",
 "p": 285,
 "sub": "Influence, Countdown",
 "body": [
  "In den Dales ist die bekannte Geschichte vom wunscherfüllenden Goldfisch eine Warnung. Kindern wird gesagt, sie sollten sich nie mit einem sprechenden Fisch unterhalten, denn er bietet ihnen Reichtümer an, die sie schließlich alles verlieren lassen. Anfangs ist er nicht größer als eine Hand und gewährt kleine Gaben, zaubert Edelsteine herbei oder holt Verlorenes zurück.",
  "Greedy ist ein überzeugender Status, der das Widerstehen gegen Ol’ Scales’ Avancen erschwert. Die von Ol’ Scales gewährten Gaben können ein Item-Tag, abundant-supplies-2, geheimes Wissen, lucky-2 oder Ähnliches sein.",
  "## Limits",
  {
   "kv": [
    [
     "Harm 3",
     "–"
    ],
    [
     "Trick 3",
     "–"
    ],
    [
     "Satiate -",
     "–"
    ],
    [
     "Grow 5",
     "Erhält Enormous bulk, impenetrable flab und sticky whip-like tongue sowie Consume."
    ]
   ]
  },
  {
   "tg": {
    "t": "Tags & Statuses",
    "k": "n",
    "i": [
     "disarming cadence",
     "pitiful appearance",
     "friendly-and-polite-2"
    ]
   }
  },
  "## Secrets",
  {
   "kv": [
    [
     "Endgame",
     "Wenn er schließlich gewaltige Größe erreicht, kann ihn keine Mahlzeit mehr sättigen außer seinem Opfer."
    ],
    [
     "True Nature",
     "GildedScales ist ein Emissary des Ruddy Bough, ausgesandt, die Welt von der Gier der Menschheit zu befreien. Alternativ könnte er ein von Wanecraft infizierter Fisch sein."
    ]
   ]
  },
  "## Threats & Consequences",
  "### Beg",
  "> „Bitte, gütige Seele, ich möchte nur einen winzigen Bissen. Du willst doch sicher auch etwas! Jeder will etwas.“",
  "- Aufdringlicher werden, der Magen knurrt (convince-2 oder guilty-2)",
  "- Locken, indem er zeigt, dass er einen Wunsch mit Magie erfüllen kann (tempted-2)",
  "- Eine Gabe im Austausch gegen eine gleichwertige Mahlzeit gewähren (erhält growing-1).",
  "### Incite Greed",
  "> Auf eine Weise lächeln, die eine innere Genugtuung kaum verbirgt",
  "- Materielle Begierden entfachen (greedy-3, starving-3, indulgent-3 oder wasteful-3)",
  "- Jemanden, der gierig ist, auch eifersüchtig besitzergreifend machen",
  "### Consume",
  "> (Wenn ausgewachsen) Speichel tropfen, während er dich wie ein Raubtier mustert",
  "- Weit aufreißen und verschlucken (consumed-5)",
  "- Mit seiner beträchtlichen Masse klatschen und schlagen (crushed-3 und pinned-3)",
  "- Seine Beute unter Wasser halten (drowning-3)",
  "- Einen Handel mit einer ahnungslosen Person schließen, die so in seine Klauen gerät (Ill Tidings)"
 ]
},
{
 "name": "Peregrine of the Fens",
 "p": 286,
 "sub": "Aggressor, Pursuer, Quarry",
 "body": [
  "Lagerfeuergeschichten flüstern von einem riesigen blaugrauen Wanderfalken mit funkelnd azurblauer Zeichnung, der in den wässrigen Gegenden der Dales nisten soll und sogar unter Wasser fliegen kann. Den gewaltigen Vogel zu erblicken, gilt als großes Glück, da man glaubt, sie jage Creatures of Twilight, nach denen sie das Land hoch und tief absucht.",
  "Die meisten Begegnungen mit einem Peregrine finden mit einem ihrer Jungvögel statt, die von bescheidener Größe sind, nur zwei- bis dreimal so groß wie ein gewöhnlicher Wanderfalke. Die Mutter ist ein gigantischer Vogel und wird selten in bewohnten Gebieten gesehen.",
  {
   "tg": {
    "t": "Limits",
    "k": "n",
    "i": [
     "Harm 3",
     "Bond 6",
     "Catch or Escape 5"
    ]
   }
  },
  "## Special Features",
  {
   "kv": [
    [
     "Witchhunter’s Bane",
     "Wenn eine Consequence die magischen Fähigkeiten des Peregrine entziehen oder aussaugen würde, wird sie stattdessen auf die Quelle der Consequence angewandt."
    ]
   ]
  },
  {
   "tg": {
    "t": "Tags & Statuses",
    "k": "n",
    "i": [
     "daunting wingspan",
     "iron-sharp beak and talons",
     "underwater maneuvers"
    ]
   }
  },
  "## Secrets",
  {
   "kv": [
    [
     "Prey",
     "Sie jagt Emissaries, besonders des Ruddy Bough, wie FangGifter (S. 201), der ständig nach Heroes sucht, die die Bestie erlegen. Auch die Emerald Branch sind vor ihrem Zorn nicht sicher."
    ],
    [
     "True Nature",
     "Ein Fallen Leaf, das verlorene Haustier und seelengebundene Gefährte des gefallenen Witchwood-Emissary LastShriek, der sich nach seinem Fall der Jagd auf seine Mit-Emissaries zuwandte. Die Mutter hat außerdem einen Potent spirit."
    ],
    [
     "Lost Master",
     "LastShriek kann die Dales noch nicht betreten, um seine Gefährtin zu sich zu rufen, und so bleiben sie getrennt."
    ],
    [
     "Feathers",
     "Die Federn der Jungvögel lassen sich zu einem Witchhunter’s-Bane-Talisman verarbeiten, der das Aussaugen von Magie abwehrt. Die Federn der Mutter lassen sich zu einem Witchhunter-Hunting Arrow befiedern, der einen Emissary für einen einzelnen Angriff als Origin Might behandelt."
    ]
   ]
  },
  "## Threats & Consequences",
  "### Fly",
  "> Ihre majestätischen Flügel schlagen und funkelnde Wassertropfen versprühen, während sie emporsteigt",
  "- Fahrt aufnehmen (escape-3, catch-3 oder drei Stufen von einem Tracking-Status gegen sie entfernen)",
  "- Das Land unten nach ihrer Beute absuchen (zwei Stufen von einem hiding- oder stealth-Status entfernen)",
  "- Zu schnell fliegen, um überlistet zu werden (Blocked)",
  "### Dive",
  "> Ins Wasser platschen und mit kraftvollen Flügeln schwimmen",
  "- Zu tief unter Wasser tauchen, um gefunden oder verletzt zu werden (Blocked)",
  "- Zauber, Flüche und Verzauberungen abwaschen (4 Stufen von einer sie betreffenden negativen Magie entfernen)",
  "- Die Kraft des Wassers nutzen, um zu heilen (2 Stufen körperlichen Schadens entfernen)",
  "### Hunt",
  "> Einen schrillen Schrei ausstoßen, während ihre saphirblauen Augen die Beute fixieren",
  "- Vom Himmel oder aus dem Wasser herabstoßen und ihre Beute zerkratzen (torn-to-pieces-4 oder grabbed-3)",
  "- Bestimmte Creatures of Twilight mit ihrem Ruf lähmen (paralyzed-3, siehe Seitenleiste)",
  "- Eine Waffe oder einen Gegenstand zerschmettern, der zur Jagd auf oder zum Aussaugen von Magie benutzt wird (einen Tag streichen)"
 ]
},
{
 "name": "Remote Outland",
 "p": 287,
 "body": [
  "Obwohl die Dalish weit umherstreifen, gibt es Orte in den Dales, wo selten ein Menschenfuß hintritt. Tief in den Bergwäldern, hoch auf den schneegepeitschten Gipfeln und weit in den Sümpfen streifen Kreaturen und Wesen frei umher, ungestört vom Auge eines Sterblichen."
 ]
},
{
 "name": "Apparition",
 "p": 287,
 "sub": "Influence, Mystery",
 "body": [
  "Eine gesichtslose, verhüllte Gestalt im Wald, eine weinende Stimme im Wind über einem uralten Schlachtfeld oder eine unsichtbare, anhaltende Furcht über einem verfluchten Hügel – solche unheimlichen und rätselhaften Erscheinungen können die Anwesenheit jenseitiger Kräfte ankündigen, die im Unseen lauern. Oft zupfen diese Apparitions sanft an Beobachtern und rufen sie auf, ihre Absicht zu ergründen (fathom), und gehen erst, wenn sie bekannt ist. Oldways-Praktizierende erkennen sie als Omen, die für bestimmte Personen gedacht sind.",
  "Für eine Apparition, die die Heroes irgendwohin führt, verwende Will-O’-The-Wisp (CBII 143).",
  "## Limits",
  {
   "kv": [
    [
     "Harm -",
     "–"
    ],
    [
     "Fathom 3",
     "Der Hero ist auf die Sache der Apparition eingeschworen (bound-by-oath-4) oder hört seine Zukunft vorhergesagt (fated-4) und wird dann mit einem [Segen] beschenkt, der ihm zum Erfolg hilft."
    ],
    [
     "Displease 3",
     "Sie setzt ihren Punkt durch oder bestraft Unverschämtheit, indem sie als Neue Challenge wiedergeboren wird: Otherworldly Assailant (CBII 159), Curdle Curse (S. 246), Dolmen Dirger (S. 279), Local Disaster (S. 248) oder mit einem Mal, das zu Ostracism (S. 251) führt."
    ]
   ]
  },
  {
   "tg": {
    "t": "Tags & Statuses",
    "k": "n",
    "i": [
     "ethereal",
     "mysterious-2"
    ]
   }
  },
  "## Secrets",
  {
   "kv": [
    [
     "True Nature",
     "Eine Incarnation von Spryd; ihre Quelle kann eine von vielen sein, etwa ein Star, eine Verzauberung, ein irdischer Pool of Power oder ein Pool of Wanehunger. Sie kann außerhalb der Sphere of Influence ihrer Quelle nur banished 2 werden."
    ]
   ]
  },
  "## Threats & Consequences",
  "### Appear",
  "> Gespenstisch in der Nähe ihres erwählten Sterblichen aufragen oder widerhallen",
  "- Scheinbar nichts tun oder dieselbe Handlung endlos wiederholen (erhält mysterious-1)",
  "- Nahe Manifestationen heraufbeschwören, die mit ihrer Botschaft mitschwingen (niesender Blütenstaub, versinkender Morast, kriechende Nebel)",
  "- Die Stimmung der Beobachter beeinflussen (terrified-2, mesmerized-2, inspired-2, ecstatic-2, intoxicated-2 usw.)",
  "### Portent",
  "> Einen weiteren Hinweis auf das sprechen oder sichtbar offenbaren, was sie vermitteln will",
  "- Ein nahendes Verhängnis ankündigen oder andeuten, das noch nicht zu spät ist, um es aufzuhalten (worried-2 oder apprehensive-2)",
  "- Sich daran stören, ignoriert oder missverstanden zu werden, und Unbehagen verursachen (displeased-1 und ouch-1, burnt-1, startled-1, prone-1 usw.)"
 ]
},
{
 "name": "Grandfather Crow",
 "p": 288,
 "sub": "Aggressor, Influence, Sapper",
 "body": [
  "Geflüsterte Geschichten am Kamin beschreiben eine furchterregende Creature of Twilight, die im Wald haust: ein uralter, verdrehter Krähengott mit menschlichen Händen, dunkel gefiederten Flügeln und einem Gesicht, das zugleich Mensch und Krähe ist. Ergebene Anhänger seines Waldkults, die Crowlings (S. 271), bringen ihm Geschenke aus gestohlenen Oldways-Gegenständen oder entführen sogar Praktizierende, um sie ihm in ihren bizarren Waldritualen darzubringen.",
  "Trotz seines monströsen Aussehens und grausigen Werks spricht Grandfather Crow in freundlichem, greisem Ton, der seine Ränkespiele Lügen straft. Er ist Mentor seiner Anhänger und bietet Ausgestoßenen und Dieben einen Ort, an dem sie sich gewollt fühlen. Oft prangert er die Oldways und ihre Praktizierenden als fehlgeleitet, gefährlich oder teuflisch an.",
  {
   "tg": {
    "t": "Limits",
    "k": "n",
    "i": [
     "Harm 6",
     "Banish 6",
     "Beseech 5"
    ]
   }
  },
  "## Special Features",
  {
   "kv": [
    [
     "Snatch Magic",
     "Streiche jeden magischen Tag, der in einer Aktion gegen Grandfather Crow verwendet wird. Wurde er für Power verbrannt, erhält er inspirited-1."
    ]
   ]
  },
  {
   "tg": {
    "t": "Tags & Statuses",
    "k": "n",
    "i": [
     "warded-against-magic-4",
     "Patriarch of the Crowlings",
     "Great monstrous crow",
     "Potent spirit"
    ]
   }
  },
  "## Secrets",
  {
   "kv": [
    [
     "Stolen Items",
     "Er kann die Magie eines Praktizierenden durch dessen gestohlene Gegenstände aussaugen (siehe dimmed, S. 224)."
    ],
    [
     "True Nature",
     "Er ist ein Twilight Emissary des Ruddy Bough (Witchwood), beauftragt, magische Relikte, altes Wissen und jeden Weg zur Thaumaturgy zu zerstören."
    ],
    [
     "Secrecy",
     "Sein weitreichender Einfluss beruht auf Geheimhaltung, da er den Dalespeace nicht stören darf. Würden er und sein Kult entlarvt (exposed 5), würde sein Might zu seinem Nachteil wirken."
    ]
   ]
  },
  "## Threats & Consequences",
  "### Answer Summon",
  "> Ein geflügelter Schatten verdunkelt Sonne oder Sterne",
  "- In all seiner Majestät erscheinen (awestruck-3 oder fearful-3 für alle)",
  "### Preach",
  "> Sein Gefieder putzen oder seinen Bart streicheln",
  "- Schweigen fordern, während Bittsteller niederknien und selbst Wald und Wind verstummen (gibt compliant-3 an alle, die es hören)",
  "- Seinen Flügel oder Arm um einen neuen Rekruten legen und ihm ins Ohr flüstern (listening-3, convinced-3 oder devoted-3)",
  "- Einen Praktizierenden von Magie rügen und sagen, sein Pfad führe nur zu Leid (despaired-3)",
  "### Call",
  "> Laut mit der Stimme tausender Krähen im Chor krächzen",
  "- Seine Kinder treten aus den Schatten (Neue Challenge: Crowlings with Gathering, S. 271, oder Canny Murder, S. 256)",
  "- Seinen Kindern Befehle erteilen (gibt guided-2 oder senkt einen negativen Moral-Status um 2 Stufen)",
  "### Break Magic",
  "> Der Schatten einer Person oder eines Gegenstands verwandelt sich in eine Krähe, die versucht, zu ihrem Grandfather zu fliegen",
  "- Die Kraft eines Praktizierenden, einer Verzauberung oder eines Gegenstands aussaugen (dimmed-4 oder zwei Tags streichen)",
  "### Attack",
  "> Einen blutgefrierenden Schrei ausstoßen, dann auf seine Opfer herabstoßen",
  "- Mit den Flügeln schlagen und alles in der Nähe wegblasen (knocked-back-3) oder außer Reichweite fliegen (Blocked)",
  "- Mit seinen gewaltigen Krallen oder Händen packen, aufschlitzen oder zerquetschen (restrained-4 oder bleeding-4 bei bis zu drei Personen oder wrecked-4 an Bauwerken)",
  "- Jemanden verfluchen, sich langsam in eine Krähe zu verwandeln (Complication und cursed-3)"
 ]
},
{
 "name": "The Hag of Black Oak",
 "p": 290,
 "sub": "Influence, Aggressor",
 "body": [
  "Der Legende nach hat die Hag of Black Oak ein Heilmittel für jedes Leid und erfüllt deinen Wunsch, wenn du ihn von ganzem Herzen wünschst. Ihre baufällige Hütte ist in den Sümpfen verborgen; sie zu finden, ist die erste Prüfung (Morose Mire, CBII 150). Die Hütte unbemerkt zu betreten, ist die zweite Prüfung (Inviolable Place, S. 248), sonst lässt die Hag sie verschwinden. Drinnen ist es gemütlich, üppig und warm, und die Hag – die in vielerlei Gestalt erscheinen kann – lockt ihre Besucher mit allerlei Genüssen, die sie ablehnen müssen, als letzte Prüfung. Dann erfüllt sie deinen Wunsch, doch der Preis ist immer „etwas, von dem du nicht weißt, dass du es hast“.",
  {
   "tg": {
    "t": "Limits",
    "k": "n",
    "i": [
     "Harm -",
     "Beg for Mercy 6"
    ]
   }
  },
  {
   "tg": {
    "t": "Tags & Statuses",
    "k": "n",
    "i": [
     "counterspell",
     "heart of wood",
     "honeyed words",
     "Potent spirit (siehe Seitenleiste)"
    ]
   }
  },
  "## Secrets",
  {
   "kv": [
    [
     "True Nature",
     "Einst der Star of Budding Acorns, hasst dieses Fallen Leaf nun Thaumaturges und die Trees und handelt kleinlich gegen den mystischen Kreislauf des Spryd (S. 179). Sie besitzt gewaltiges magisches Wissen. Die Prüfungen sind alle ein Vorwand, um das Feuer des Begehrens in ihren Opfern zu schüren, damit sie dem letzten Handel eher zustimmen."
    ],
    [
     "Her Price",
     "Ihr Preis ist die Wachstumsfähigkeit eines Herzens. Wer ihn zahlt, kann nicht von den Quintessences der Thaumaturgy (S. 234) profitieren. Sie legt ihren Acorn ein und bewahrt ihn in ihrer Speisekammer auf, ihr gefangenes Spryd kann weder keimen noch sterben."
    ],
    [
     "Weakness",
     "Das einzelne Glas mit eingelegten toten Blättern in der Speisekammer enthält ihr eigenes Spryd, eine Vulnerability ihres Potent spirit. Wird es zerstört, erhält sie das Limit harm 3."
    ]
   ]
  },
  "## Threats & Consequences",
  "### Tempt",
  "> Sich die Lippen lecken, während sie einem Bittsteller jede Art von Essen und Genuss anbietet",
  "- Einen Gegenstand präsentieren oder ein Vergnügen anbieten, das der Bittsteller am meisten will (tempted-2)",
  "- Die größten Wünsche eines Bittstellers enthüllen (Exposure und gib den Tag)",
  "- Schmeicheln oder die Nöte des Bittstellers gegen ihn verwenden (einen Tag der Willenskraft oder des Widerstands streichen)",
  "- Nach bestandener Prüfung den wahren Handel anbieten: „Dein Wunsch, für dein Herz.“ (Complication)",
  "### Lash Out",
  "> Heulen und mit den Zähnen knirschen, jene verfluchend, die sie erzürnt oder ihre Zeit verschwendet haben",
  "- Alle von ihr gewährten Gaben widerrufen, falls möglich (Tags oder Status entfernen)",
  "- Einen Klumpen brennenden Schleims spucken (corroded-3 und/oder glued-3)",
  "- Ihre krallige Hand in jemandes Brust stoßen, um sein Herz gewaltsam zu nehmen (heart-gripped-4)",
  "- Eingelegte Eicheln verzehren und stärker werden (erhält inspirited-3 und invigorated-3)",
  "- Die Toten im Moor erwecken (Neue Challenge: Waken Sentry, S. 320)",
  "- Mit krummen Fingern gestikulieren, um einen Zauber zu wirken (erhält warded-against-magic-3, streicht zwei magische Tags oder senkt einen magischen Status um 3 Stufen)"
 ]
}
]);
