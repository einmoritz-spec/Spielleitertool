/* Gatekeeper – Veteranen & Anführer, Fahrzeuge, Sicherheitsmaßnahmen (S. 280–289). Ergänzt die Kategorie gk_gegner. */
CM_ORTE.gk_gegner = (CM_ORTE.gk_gegner||[]).concat([
 { id:"birungi", name:"Asmodeus Birungi", teaser:"Veteran: Rift-Jäger, Ex-Seal und Argent-Clan-Fanatiker", p:280,
  text:[
   "## Veteranen und Anführer",
   "Gutaussehend, dunkel, mit einem Körper wie ein Panzer und fast sieben Fuß groß: Der Rift-Jäger und Ex-Seal Asmodeus Birungi ist ein großartiges Aushängeschild für die moralhebende, organisationsübergreifende Propaganda des DRP. Sein Bild ziert regelmäßig die Titelseite jeder „Newspaper“. Von vielen gilt er als der beste Kämpfer, den die Gatekeeper je ausgebildet haben; er jagt die gefährlichsten Rifts und genießt es. Als eifriges Mitglied des Argent Clan lebt Birungi dafür, Rifts zu versiegeln, meist indem er sie auslöscht. Er führt öffentlich Buch über die Rifts, die er versiegelt (sprich: getötet) hat, und vergleicht die Zahl ständig mit einer Handvoll zweitklassiger Konkurrenten, die nur dazu dienen, seine Überlegenheit zu verherrlichen. Als gestandener Veteran weiß Asmodeus, wie Rifts denken, fühlen und kämpfen, und nutzt das bei der Jagd zu seinem Vorteil. Wenn er auf die Straße geht, trägt er oft von Kopf bis Fuß eine Rüstung und führt ein Mist-Munition-Minigun mit sich. Wenn Command ihn losschickt, um einen lästigen Legendary loszuwerden, bleibt für die Veiler meist nicht viel Aufräumarbeit übrig."],
  dangers:[
   { name:"Asmodeus Birungi", rating:5, limits:"HURT OR SUBDUE 6 / OVERLOAD 6",
     moves:[
      ["Not My First Rodeo","Wenn Asmodeus Birungi die Szene betritt, gib ihm alert-3 und ready-for-anything-3. Die SL kann diese Status als Hard Move erneuern."],
      ["Mythosproof Armored Bodysuit","**Mundane Defense:** Wenn Asmodeus Birungi einen mundanen Status körperlichen Schadens erleidet, verringere dessen Tier um 2. **Passive:** Wenn Asmodeus Birungi einen Status erleidet, der von einer Mythos-Kraft verhängt wurde, ersetze dessen Tag durch overload. **Active:** Als Intrusion kann Asmodeus Birungi einen overload-Status beliebigen Tiers nehmen, um jemandem, der Mythos-Kräfte gegen ihn einsetzt, einen vorübergehenden Shrouded-Status desselben Tiers zu geben. **Recharge:** Als Soft Move (nach einem Spielerzug) entfernt Asmodeus Birungi alle nicht-permanenten overload-Status. **Overloaded:** Wenn overload:6 ausgeschöpft ist, versagen die Passive- und Active-Abwehr des Mantels und können kurzzeitig nicht genutzt werden. Entferne nach dem nächsten Spielerzug alle nicht-permanenten overload-Status."],
      ["Expert Combatant","Wenn du Asmodeus Birungi angreifst, trifft er dich zuerst mit einem seiner Hard Moves."],
      ["Batshit Crazy Fanatic","Wenn Asmodeus Birungi einen mundanen sozialen oder emotionalen Status erleidet, der ihn dazu bringen würde, sich gegen seinen Clan zu wenden, verringere dessen Tier um 3. Wird er dazu Investigated oder Convinced, erhält er zuerst batshit-crazy-fanatic-3 (dieser Status kann Tier 4 nicht überschreiten)."]],
     gm:[
      "Obliterate a target or an area with a hail of high-caliber Patch ammo bullets (obliterated-6 und sealed-5 oder, bei mehreren Zielen, je ein Tier weniger; für ein Gebiet levelled-5 und thick-Mist-2)",
      "Clock someone with his Mist-anchored gauntlets (burne vier Mythos-Tags und verhänge eines von: broken-jaw-4, reeling-4, winded-4)",
      "Apply a medical Weaving patch (entferne ein Tier von hurt-or-subdue-Status)",
      "Hunker down behind a Mist shield projected from his gauntlets (gib sich selbst Mist-shielded-3, schränkt aber vorübergehend seinen Expert-Combatant-Move auf Angriffe im Nahkampf ein)",
      "Demoralize a Rift he’s hunting with mockery and threats (despaired-3)",
      "Show up out of the rolling subway steam, armed to the teeth"]}]},
 { id:"erikson", name:"Lars Erikson", teaser:"Veteran: lässiger Liaison der Gatekeeper und heimliches Mitglied der Mac Lirs (Ally-Thema)", p:281,
  text:[
   "Obwohl er ein ergrauter Mann in typischer Gatekeeper-Kleidung ist, strahlt Lars Erikson sofort Entspanntheit und Nachsicht aus. Vielleicht liegt es am Jackett, das lässig über der Stuhllehne hängt, den roten Hosenträgern, der lockeren Krawatte und den hochgekrempelten Ärmeln. Vielleicht ist es einfach sein schneidiges Lächeln. Ist es echte Missachtung von Regeln oder Teil seiner Liaison-Taktik, damit du dich wohler fühlst? Du wirst es wahrscheinlich nie erfahren.",
   "Offensichtlich ist, dass Gatekeeper-Protokoll Mr. Erikson wenig bedeutet. Er hat jede Vorschrift des Buches gebrochen, und doch schickt Command ihn weiter in heikle Situationen, um mit Rifts zu verhandeln, mit denen man reden kann. Jedes Mal liefert Mr. Erikson das unbefriedigendste Ergebnis, mit dem Command gerade noch leben kann, nicht weil er inkompetent ist, sondern wegen einer persönlichen Agenda, die nicht einmal Internal Affairs bisher durchschaut hat. Heimlich ist Lars Mitglied der Mac Lirs und hat Fragen zur City und zum Mist, die er beantworten will. Gatekeeper zu bleiben ist der Schlüssel, also spielt er sowohl Command als auch seine Rift-Assets gegeneinander aus und hat die Persona eines gemütlichen Liaison geschaffen. Bisher hat er alle getäuscht, doch er läuft gegen die Uhr, um Antworten zu finden, bevor sich der Verdacht gegen ihn richtet."],
  themen:[
   { name:"Lars Erikson", typ:"Ally", identity:"Mystery: Was verbergen die Gatekeeper?", power:["liaison with the Gatekeepers","communication skills","Mist manipulation","searching for answers","Shrouding sidearm","deflect accusations","leads of occult nature","old Rift contact","Department of Rift Prevention","relaxed and casual"], weak:["promotes his own agenda","answers to the Gatekeepers","hiding something","Internal Affairs"], imp:"**My Assets, My Rules:** Einmal pro Sitzung, wenn du einen Status der Vergesslichkeit von einem niedrig- oder mittelrangigen Gatekeeper erleidest, kannst du Lars Erikson im letzten Moment auftauchen und ihre Autorität außer Kraft setzen lassen, sodass der Status verhindert wird." }],
  dangers:[
   { name:"Lars Erikson", rating:4, limits:"HURT OR SUBDUE 4 / CAUGHT BY COMMAND 4 / FIND ANSWERS 5",
     moves:[
      ["Wash My Hands of This","Wenn Lars Erikson einen Schuld- oder Verdachts-Status erleidet, verringere dessen Tier um 3. Wird er beim Lügen ertappt, kannst du einmal pro Sitzung Deny Them Something They Want, indem du ihm die perfekte Ausrede, ein Alibi oder einen Unschuldsbeweis gibst."],
      ["Seasoned Negotiator","Wenn du Lars Erikson Convince-st, verringere das Tier des Status, den du gibst, um drei. Wenn Lars Erikson dir ein gutes Angebot macht und du ablehnst, bist du Taking the Risk."],
      ["Good Judge of Character","Als Soft Move liest ein Spieler, dessen Charakter anwesend ist, seine Identities und Mysteries vor. Die SL wählt zwei davon, die Lars Erikson dann kennt oder erspürt."],
      ["Mac Lir’s Quest","Gib ihm in jeder Downtime searching-1, wenn die PCs Lars Eriksons Pläne nicht gestört haben. Haben sie ihm geholfen, gib ihm searching-2. Wenn find-answers ausgeschöpft ist, entdeckt Lars Erikson eine schockierende Wahrheit über die City, den Mist oder die Gatekeeper (Complicate Things, Bigtime)."],
      ["Not My First Rodeo","Wenn Lars Erikson die Szene betritt, gib ihm alert-3 und ready-for-anything-3. Die SL kann diese Status als Hard Move erneuern."],
      ["Expert Defensive Shrouding","Wenn du Lars Erikson mit Mythos-Kräften angreifst und er in Selbstverteidigung handelt, trifft er dich zuerst mit einem seiner Shrouding-Hard-Moves."]],
     gm:[
      "Expose valuable information he has on one of the PCs (Complicate Things, Bigtime)",
      "Make someone drop their guard and let their hair down (entferne bis zu 3 Tiers von Status der Wachsamkeit, des Misstrauens und negativer Emotionen oder gib trust-3)",
      "Obliviate a room (amnesia-5 für alle Anwesenden) oder counter Mythos powers with Shrouding (burne bis zu vier Mythos-Tags)",
      "Accurately fire his nonlethal Shrouding sidearm (stunned-3 und burne bis zu drei Mythos-Tags)",
      "Smile and ask someone to sit down and have a drink"]}]},
 { id:"seamstress", name:"The Seamstress", teaser:"Veteranin: Dagmar Kasparek, die höflich-wahnhafte Rift-Versiegelerin", p:282,
  text:[
   "Tief in ihrem Inneren will Dagmar Kasparek einfach, dass alles ordentlich und sauber ist. Idealerweise sollte alles brandneu und makellos sein, doch leider ist das Leben nicht ganz so ideal. Immerhin wurde die Menschheit mit der Gabe des Handwerks gesegnet, genau damit man das Zerrissene und Aufgerissene flicken und wieder wie neu machen kann. So werden Ordnung und Annehmlichkeit wiederhergestellt. Ordnung und Annehmlichkeit, mehr will Dagmar nicht: alle Rifts in der Decke der Normalität, die der Mist ist, zunähen und flicken. Diese wunderbar schlichte und völlig verrückte Agenda macht die Seamstress zu einer der erfolgreichsten und am wenigsten tödlichen Rift-Versiegelerinnen in Commands Diensten. Anders als ihre extravaganten Kollegen erfüllt Dagmar ihre Pflicht leise, effizient und vor allem freundlich, aus purer, irrer Liebe zu ihrer Arbeit. Gekleidet in einen plissierten grauen Rock und eine maßgeschneiderte weiße Bluse und bewaffnet mit ihrem nadelförmigen Shrouding Focus, setzt sie ihre eigene Marke taktischen Weavings und Mendings ein und näht ihr Opfer aus dessen Kräften heraus, bevor es es überhaupt merkt. Zu ihrem Schutz Mendet die Seamstress ständig einen Stitch um sich herum, der ein Feld zwanghafter Normalität erzeugt, das alle Störungen absorbiert."],
  dangers:[
   { name:"The Seamstress", rating:4, limits:"HURT OR SUBDUE 3 / FRAY 6 / THREATEN OR TURN – / DRIVE MAD WITH CHAOS 6",
     moves:[
      ["What a Lovely Day","Wenn die Seamstress die Szene betritt, entferne alle Status der Wachsamkeit und Bereitschaft, entferne alles gebankte Juice und burne drei Mythos-Tags für jeden anwesenden Rift."],
      ["Backstitch","Solange fray nicht ausgeschöpft ist, werden störende Status (etwa Schaden, Fesselung, herbeigeführter emotionaler Zustand usw.) auf fray gezählt, statt The Seamstress wie üblich zu treffen. Mythos-Störungen verursachen einen Status mit einem Tier weniger."],
      ["Superb Needlework","Wenn du die Seamstress angreifst oder zu fliehen versuchst, Weavt sie dich zuerst in ein mundanes Objekt, das typisch für die aktuelle Umgebung ist (melded-into-object-4)."]],
     gm:[
      "Fix the stitch around her with a loving smile (entferne alle Status von fray)",
      "Hum to herself peacefully as she Mends a Rift shut (sealed-5)",
      "Politely chide someone for disturbing the order as she Weaves them into a mundane object (melded-into-object-4)",
      "Tidy up the place and restore it to its calm state with Weaving (thick-Mist-3 oder entferne alle störenden Status aus ihrer Umgebung)",
      "Get off a taxi or a bus just across the street, wearing an inane smile",
      "Reassure a Rift it’s all going to be much nicer once the Seamstress tidies up the mess!"]}]},
 { id:"hughes", name:"Richard Hughes", teaser:"Anführer: Clearance Level 1, Head of Rift Relations und Master Rupturer", p:283,
  text:[
   "Jeden Tag wacht Richard Hughes in seinem Penthouse im Deep Mist auf. Nach der Morgendusche, während er sich in seinen milliardenteuren Mist-Tech-Anzug kleidet, sieht er durch die hohen Fenster seiner Wohnung eine Live-Simulation der City, alle paar Minuten eine andere Aussicht, live gestreamt durch das Bewusstsein von Intel Perchers. Er nimmt einen letzten Schluck Kaffee, stellt die Tasse in die Küchenspüle und geht hinaus. Obwohl seine Tür überall hin führen könnte, führt sie immer zu einem Sicherheitskorridor und dann zu T1, der zentralen Transportbucht, wo Hunderte Gatekeeper an ihm vorbeigehen und ihn grüßen. Er findet, diese Route hilft ihm, den Kontakt zu seinen Kollegen zu halten und sich daran zu erinnern, worauf sie alle hinarbeiten. Jeder, der kein frischer Rekrut ist, weiß, dass Richard Hughes jemand Großes ist, aber nicht, was genau er tut.",
   "Richard Hughes, Clearance Level 1, ist der Head of Rift Relations. Die nächste Tür, durch die er geht, öffnet sich in eine Enclave – eine höllische Landschaft, einen Wald aus Stahlbäumen ohne Boden oder den Jade Palace – für sein 9-Uhr-Meeting. Er trifft einen neuen Avatar oder, wenn es ein guter Tag ist, einen größenwahnsinnigen Legendary. Er geht die Abläufe durch und erklärt dem aufstrebenden Rift seine Optionen: deal or seal. Meist sind sie zu berauscht von ihrer Macht, um zuzuhören, und versuchen, ihn zu töten, also muss er später wiederkommen.",
   "Seine Aufgabe ist es, seiner Organisation zu helfen, effizienter zu werden, indem Ressourcen gespart werden, die für unnötige Kriege mit Rifts verschwendet würden, aber Rifts machen es ihm nicht immer leicht. Er versteht es, wirklich: Menschen wollen letztlich sein, wer sie sind. Aber wir leben in einer Gesellschaft, Freundchen, denkt er sich, und du darfst uns nicht benutzen, um deine Geschichte zu erzählen. Nach vier solchen Meetings sehnt er sich nach seinen Treffen im Grand Colonial, wo er beobachtendes Mitglied im Rat der Truth ist („Die TRUTH?“ Wirklich? Avatare sind so aufgeblasen). Wenigstens wissen die Arschlöcher dort, dass sie Arschlöcher sind, und Rosaline ist nicht gerade unansehnlich.",
   "Als Silver Soul aus einem der alten Gatekeeper-Häuser ist Richard Hughes dennoch weit davon entfernt, ein Traditionalist zu sein. Er liebt die City und will sie intakt halten, und das erfordert eine heikle Kombination aus Pragmatismus und dem Ziehen von Linien im Sand.",
   "Obwohl er in allen Advanced Arts in gewissem Maße ausgebildet ist, haben seine vornehme Herkunft und sein Wunsch, Rifts wirklich zu verstehen, ihn dazu gebracht, die verborgene Kunst des Rupturing zu meistern. Das hat in ihm ein tiefes Wissen über Mythoi gefördert, das ihn mehr als einmal erkennen ließ, dass Gatekeeper und Rifts mehr gemeinsam haben, als sie zugeben wollen: Beide folgen ihrem Ideal, um das Leben der Sleeper auf den Straßen der City zu formen. Obwohl er nie den Geschmack eines Mythos kannte, behandelt Richard Hughes Rifts gern als Gleichgestellte und tut, was er tut, aus der reinen Notwendigkeit heraus, die City sicher halten zu wollen."],
  dangers:[
   { name:"Richard Hughes", rating:5, limits:"HURT OR SUBDUE –",
     moves:[
      ["Diplomatic Immunity","Solange der Mist steht, ist Richard Hughes immun gegen Mythos-Kräfte und kann körperlich nicht verletzt werden. PCs, einschließlich Avatare, dürfen in Moves gegen ihn keine Mythos-Tags invoken oder burnen, außer bei Face Danger. Wann immer er einen Tier-6-Status legendärer Natur erleidet (etwa als Kollateral), erleidet der umgebende Mist thin-Mist-1."],
      ["Not My Last Rodeo, Either","Wenn Richard Hughes die Szene betritt, gib ihm alert-4 und ready-for-anything-4. Die SL kann diese Status als Soft Move erneuern. Sie können Tier 4 nicht überschreiten."],
      ["A Superbly-Tailored Suit","Richard Hughes’ Anzug verringert die Effekte von thin-Mist-Status auf ihn um 5 Tiers und gewährt ihm den Move Essence-Mesh Jumpsuit (S. 272)."],
      ["Maximum Clearance Intel","Als Soft Move kennt Richard Hughes sofort alle Mysteries und Identities eines Rift-Ziels. Als Hard Move erfährt er die Secret Identity eines Avatars."],
      ["Master Rupturer","Richard Hughes hat das Rupturer Power Set (S. 278) mit allen vorgeschlagenen Contracts (und mehr). Sein Move I Have It Under Control kann die Effekte seiner Contracts nach Belieben um 3 erhöhen."]],
     gm:[
      "Reason with a Rift, applying maximal leverage (convinced-4, sold-5 oder in-Hughes’-back-pocket-6, je nach seinem Druckmittel)",
      "Shroud everyone in the block (forget-forever-6, burne sechs Mythos-Tags oder sealed-6)",
      "Call in any type of Gatekeeper unit (erschaffe eine neue Danger)",
      "Re-focus and re-center, shaking off doubts and moral dilemmas (entferne alle unerwünschten sozialen und emotionalen Status)",
      "Adjust his tie or look at his expensive watch",
      "Raise an eyebrow while a Rift is speaking, before commenting on the subject"]}]},
 { id:"fahrzeuge", name:"Fahrzeuge", teaser:"Gatekeeper Cruiser, Armored Carrier und Graywasher", p:284,
  text:[
   "Die Möglichkeit, über Exit Doors überallhin in der City zu gelangen, verschafft den Gatekeepern in den meisten Fällen einen Vorsprung gegenüber der Konkurrenz und erleichtert es ihnen, ihre Rift-Ziele einzuholen. Dennoch gibt es mehrere Gründe, warum die Organisation ganze Fuhrparks von Fahrzeugen einsetzt und unterhält. Erstens sind manche Rifts außergewöhnlich schnell oder fahren eigene Fahrzeuge, und die Gatekeeper brauchen die Geschwindigkeit, um mitzuhalten. Zweitens finden manche Operationen an Orten statt, die weit außerhalb der Exit-Door-Abdeckung liegen, etwa in verlassenen Gebieten der City, in der Luft oder auf See, oder an gefährlichen Orten, an denen die Agenten Schutz vor der Umgebung oder deren Bewohnern brauchen, etwa in einem von Rifts kontrollierten Viertel oder einer Enclave. Drittens nutzt die Organisation Fahrzeuge, um schwere Mist-Tech-Geräte zu mobilisieren und als mobile Basen für kleine Einheiten oder Überwachungsteams.",
   "Die Logistics nutzen manchmal „Sleeves“ – breite Tunnel mit Exit Doors an jedem Ende –, um ein Fahrzeug bei der Verfolgung eines Ziels neu auszurichten und zu positionieren. Der Fahrer muss lediglich in eine nahe Exit Door in Fahrzeuggröße fahren, etwa eine Garage, eine Autowaschanlage oder das Tor einer Feuerwache. Nach dem Durchfahren eines Sleeves taucht das Fahrzeug aus einer zweiten Exit Door auf und erscheint an der strategisch besten Position, um die Jagd fortzusetzen. Das Ziel hat nur einen Moment, um zu verschwinden, bevor das Fahrzeug ihm wieder dicht auf den Fersen ist."],
  dangers:[
   { name:"Gatekeeper Cruiser", rating:3, limits:"DECOMMISSION 3 / OUTRUN 4",
     text:["Cruiser sind schnelle Fahrzeuge – Autos, Schnellboote und Helikopter –, die von den Gatekeepern bei Patrouillen und der Verfolgung schneller Ziele eingesetzt werden."],
     moves:[
      ["Faster than Memory","Wenn der Cruiser die Szene betritt, gib ihm unnaturally-fast-2."],
      ["Vehicle","Wenn die Agenten im Cruiser aussteigen, erschaffe eine neue Danger für die Agenten (PAC Veiler oder Security Detail) mit Size Factor 1. Das geschieht automatisch, wenn decommission ausgeschöpft ist, aber die Gatekeeper-Agenten erleiden hurt-1 (hurt-4, wenn es ein abgestürzter Helikopter ist)."]],
     gm:[
      "The agents fire Shrouding sidearms while driving (gunshot-wound-3 und burne bis zu drei Mythos-Tags -oder- flat-tire-3 und burne bis zu drei Mythos-Tags)",
      "Ram with bullbar (smashed-4, gibt sich aber selbst damaged-1)",
      "Block your escape (blocked-3)",
      "A passenger opens the trunk and pulls out a portable Mist Beacon (erschaffe Danger: Mist Beacon), a portable Graywash backpack sprayer (erschaffe Danger: Graywashing Barrier) oder a shotgun (erhöhe den Schaden der Seitenwaffe um 1 Tier)",
      "The supervising agent joins the fray (erschaffe eine neue Danger: Investigator, Liaison oder Urban Warfare Tactician)",
      "Drive through a nearby sleeve, if available (entferne zwei Tiers von outrun)",
      "Accelerate to catch up with a target in flight",
      "The agents roll down windows or open a hatch to start shooting"]},
   { name:"Gatekeeper Armored Carrier", rating:4, limits:"DECOMMISSION 5 / OUTRUN 3",
     text:["Der Armored Carrier bietet Feuerkraft und Schutz auf Kosten der Geschwindigkeit. Er kann ein lastwagengroßer Bodentransporter, ein schwerer Helicarrier oder ein kleines Gunship sein."],
     moves:[
      ["Mist-Armored","Wenn der Armored Carrier einen mundanen Status körperlichen Schadens erleidet, verringere dessen Tier um 1. Wenn der Armored Carrier oder jemand darin einen Status mythischer Natur erleidet, verringere dessen Tier um 2."],
      ["Vehicle","Wenn die Agenten im Armored Carrier aussteigen, erschaffe eine neue Danger für die Agenten (PAC Veiler, Security Detail oder SWAT) mit Size Factor 2. Das geschieht automatisch, wenn decommission ausgeschöpft ist, aber die Gatekeeper-Agenten erleiden hurt-1 (hurt-3, wenn es ein abgestürzter Helicarrier ist)."],
      ["On-Board Mist Beacon","Diese Danger enthält die Danger Mist Beacon (S. 277)."]],
     gm:[
      "Fire a high-caliber mounted machine gun loaded with Mist-anchored ammunition, focusing on one target (severe-injuries-4 und burne bis zu vier Mythos-Tags) oder suppressing an area (gunshot-wound-3 und burne bis zu drei Mythos-Tags für jeden im oder in das Gebiet Eintretenden)",
      "Ram another vehicle or crash into it (destroyed-5)",
      "Deploy support agents to assist its main unit of agents (erschaffe eine neue Danger: Medic, PAC Veiler, Tactical Weaver, Urban Warfare Tactician)",
      "Drive through a nearby sleeve, if available (entferne zwei Tiers von outrun)",
      "Storm out of an unassuming garage door or from behind the skyline",
      "Break or land and open its doors, unleashing a host of agents"]},
   { name:"Graywasher (Fahrzeug)", rating:3, limits:"DECOMMISSION 4",
     text:["Graywasher sind Flüssigkeitstransporter wie Straßenreinigungswagen, kleine Tanker oder Sprühflugzeuge, die Shrouding-Substanzen ausbringen, meist als Strahl oder Aerosol (auch „Chemtrail“ genannt). Sie bieten schwere Graywashing-Unterstützung und helfen, Breaches geheim zu halten, Conjurations zu unterdrücken und die Restverwüstung durch Rift-Kräfte zu beseitigen."],
     moves:[
      ["Mist-Shielded","Wenn der Graywasher einen Status mythischer Natur erleidet, verringere dessen Tier um 1."],
      ["Graywash, Graywash It All","Während der Graywasher ein Gebiet besprüht, erhöhe die Effekte von Shrouding-Moves um eins, wenn sie auf Conjurations oder andauernde, von ihrem Rift losgelöste Mythos-Kräfte zielen."]],
     gm:[
      "Spray a jet into the air to form a wall of Mist (erschaffe eine neue Danger: Graywashing Barrier mit Size Factor 2; sie kann mit dem Move Need More Power weiter erhöht werden)",
      "Cover an area with Shrouding substance (gib dem umgebenden Mist thick-Mist-1 und suppressed-Conjuring-2)",
      "Wash away Conjurations and Mythos manifestations detached from their Rift (burne bis zu vier relevante Tags)",
      "Wash away residual magical side effects in the area (entferne bis zu zwei Tiers)",
      "Deploy its security detail (erschaffe eine neue Danger: Security Detail mit Size Factor 1)",
      "Pull up, raise its nozzles, and start spraying"]}]},
 { id:"sicherheit", name:"Sicherheitsmaßnahmen und Exit Door", teaser:"Perching wards, Soft und Hard Alarm; Gefahrenprofil Exit Door", p:286,
  text:[
   "## Sicherheitsmaßnahmen",
   "Die Sicherheitssysteme der Gatekeeper beruhen auf Perching wards: Mist-Tech zur Eindringlingserkennung, die Splitter der Aufmerksamkeit eines Perchers an Objekte Anchort. Security Perchers bedienen das Netz der Perching wards täglich von ihrem Backoffice im Deep Mist aus und zerstückeln dabei ihr Bewusstsein auf tausend winzige Geräte, die über die Stadt verteilt sind. Perching wards sind hervorragend darin, das Fehlen von Mist zu erkennen, sodass sie Rifts sehr genau aufspüren können (wobei sehr billige Perching wards bekanntermaßen falsch negative Ergebnisse liefern und Awakening- und sogar Touched-Personen als Sleeper lesen, solange sie ihre Mythos-Kräfte nicht aktivieren). Da Perching zudem absolute Information über die Essenz dessen liefert, was es beobachtet, können Mythos-Kräfte der Illusion und Gestaltwandlung es nicht täuschen. Die Schwierigkeit, das Override-Spektrum eines Gatekeeper-Sicherheitssystems zu umgehen, liegt daher zuallererst darin, überhaupt die Fähigkeit zu erlangen, ihm irgendwelche override-Status zuzufügen; das Spektrummaximum bestimmt, wie empfindlich das System ist.",
   "Da sie jedoch bloße Geräte sind und keine echten Percher mit vollständiger Aufmerksamkeit, haben Perching wards ihre Grenzen. Erstens können sie wie alles Perching nur erkennen, was im Mist existiert, und lesen Körper, Gefühle und Gedanken, nicht aber die Seele eines Subjekts oder ihren Mythos. Zweitens kann sie ein Wesen aus dem Konzept bringen, dessen Essenz nicht klar in eine einzelne Kategorie fällt. Um diese Schwäche auszugleichen, schlagen Perching wards in jedem Fall Alarm, in dem sie einen Eindringling nicht vollständig analysieren können. Wenn ein Perching-Gerät einen „Soft Alarm“ auslöst, zieht es am Bewusstsein des Perchers, der es bedient. Sofern der Percher nicht beschäftigt ist, kann er sein Bewusstsein durch die Ward projizieren, um ein vollständiges Bild der Lage zu erhalten. Fortgeschrittene Sicherheitsnetz-Planung kombiniert Percher, die auf einen bestimmten Ort fokussiert sind, mit Perchern, deren Bewusstsein über Geräte in der ganzen Stadt verstreut ist, und bietet so verbesserte Widerstandsfähigkeit gegen Versuche, das System zu überlasten. Wenn ein Perching-Gerät eine klare und unmittelbare Bedrohung erkennt, alarmiert es sofort die zuständigen Einheiten. Command hat Zugriff auf alle Perching wards der City.",
   "## Exit Doors",
   "Exit Doors sind Eingangspunkte zum Transportsystem der Gatekeeper und zu den Festungen des Deep Mist. Deshalb gelten sie als Sicherheitsschwachstellen und sind stark befestigt. Wegen des dichten Mists um Exit Doors ist es für die meisten Rifts schwierig, die Natur einer Exit Door überhaupt zu bestimmen, ohne in ihrer Nähe Mythos-Kräfte einzusetzen, was wiederum ihre Wards auslöst. Exit Doors sind für alle außer den erfahrensten Rifts (und für alle Sleeper) oft nicht von Thin Places und Enclave-Eingängen zu unterscheiden. Exit Doors können in jede Öffnung eingebaut werden und lassen sich als gewöhnliche mundane Türen öffnen und benutzen, ohne ihr Portal zu aktivieren."],
  dangers:[
   { name:"Exit Door", rating:2, limits:"OVERRIDE 3 / DECOMMISSION 3",
     moves:[
      ["Anti-Curiosity Suite","Die Umgebung der Exit Door liegt unter einer Decke aus thick-Mist-1. Jeder Unbefugte, der sich dem Bereich nähert, erleidet nothing-to-see-here-4. Wenn eine Exit Door Investigated wird, gib ihr zuerst just-a-door-4. Dieser Status kann Tier 4 nicht überschreiten."],
      ["Intense Mist Field","Wenn die Exit Door einen Status legendärer Natur erleidet, verringere dessen Tier um 3."],
      ["Perching Wards","Solange override nicht ausgeschöpft ist, löst jeder Unbefugte, der versucht, die Exit Door zu öffnen, einen Soft Alarm aus, und jeder Unbefugte, der an der Exit Door herumhantiert oder ihr Portal öffnet, einen Hard Alarm."],
      ["Soft Alarm","Erschaffe Danger: Disembodied Intel Percher."],
      ["Hard Alarm","Gib der Exit Door lockdown-5, gib allen unbefugten Personen in ihrer Umgebung oblivious-5 und erschaffe Danger: Gatekeeper SWAT mit Size Factor 1 oder höher (je nach Bedrohung), die aus einer anderen Richtung oder in einem Fahrzeug eintrifft."]],
     gm:[
      "Trigger the soft alarm; if already triggered, trigger the hard alarm",
      "While the PCs are working the Exit Door, someone passes them by on the street, making them nervous"]}]},
 { id:"lobby", name:"Entrance Lobby und Mending Clinic", teaser:"Gatekeeper-Außenposten an Exit Doors; Station zum endgültigen Versiegeln von Rifts", p:287,
  text:[
   "## Entrance Lobby",
   "Entrance Lobbys sind Gatekeeper-Außenposten in der City, die eine strategisch wichtige oder stark frequentierte Exit Door verteidigen. Meist erscheinen sie als Eingangshalle eines Regierungsgebäudes oder als makellose Lobby eines Chefbüros, können aber auch wie eine Wohnhaus-Lobby oder gar ein Geschäft, etwa eine Eisdiele, aussehen. Die Exit Door oder Exit Doors befinden sich hinten: in den Aufzugtüren, den Türen von Besprechungsräumen, am Ende eines Flurs oder in der Schwingtür zur Küche. Die Lobby wird jederzeit von einer Security Detail oder SWAT-Agenten bewacht.",
   "## Mending Clinic",
   "Während die meisten Feldagenten des Department of Rift Prevention auf Shrouding spezialisiert sind, beherrschen nur wenige die Advanced Art des Mending gut genug, um einen Rift auf der Stelle zuzunähen. Wenn die Gatekeeper des DPR einen Rift festnehmen und er noch lebt, bringen sie ihn zu einem nahen Außenposten oder Section HQ mit einer Mending Clinic, um ihn dauerhaft zu versiegeln. Der Rift ist in diesem Stadium meist gefesselt und entkräftet; der Mender kommt nur herein, um ihn zuzunähen und sicherzustellen, dass er nie wieder erwacht.",
   "Die Qualität des Mendings hängt zuallererst vom Können des Menders ab, auch wenn eine gut ausgestattete Klinik viel hilft. Eine gute Mending-Arbeit kann Jahrzehnte halten, besonders wenn das Subjekt vor dem Legendären abgeschirmt bleibt und der zugenähte Rift zum Sleeper wird. Eine schlechte Arbeit (stitched-4) hemmt die große Mehrheit legendärer Kräfte, doch das Subjekt kann vage Erinnerungen behalten; sie kann sich auch unter intensivem legendären Stress binnen Minuten wieder lösen.",
   "Gemendete Rifts tragen einen Stitch: Der Mist ist in ihnen und um sie herum stärker, als er es bei einem normalen Sleeper wäre. Das äußert sich als subtiler Verlust an belebender Kraft, als Gefühl fehlender Bedeutung oder als einengende Regeln und Vorschriften."],
  dangers:[
   { name:"Entrance Lobby", rating:4, limits:"OVERRIDE 4 / DEMOLISH 6",
     moves:[
      ["Anti-Curiosity Suite","Die Umgebung der Entrance Lobby liegt unter einer Decke aus thick-Mist-2. Jeder Unbefugte, der sich dem Bereich nähert, erleidet nothing-to-see-here-4. Wenn eine Entrance Lobby Investigated wird, gib ihr zuerst just-a-lobby-4. Dieser Status kann Tier 4 nicht überschreiten."],
      ["Welcoming Committee","Diese Danger enthält eine Security Detail oder Gatekeeper SWAT Danger mit Size Factor 1 oder höher (je nach Bedrohung). Als Soft Move können sie den Soft oder Hard Alarm auslösen."],
      ["Perching Wards","Solange override nicht ausgeschöpft ist, löst jeder Unbefugte, der die Entrance Lobby betritt, einen Soft Alarm aus, und jeder Unbefugte, der an der Entrance Lobby herumhantiert oder das Portal ihrer Exit Door öffnet, einen Hard Alarm."],
      ["Soft Alarm","Das Sicherheitsteam untersucht die Bedrohung. Erschaffe zusätzlich Danger: Disembodied Intel Percher."],
      ["Hard Alarm","Gib allen Exit Doors in der Entrance Lobby lockdown-5, gib allen unbefugten Personen darin oblivious-5, und das Sicherheitsteam greift an."]],
     gm:[
      "Trigger the soft alarm; if already triggered, trigger the hard alarm",
      "Look and behave like an ordinary lobby, but it’s hard to establish who lives or works here",
      "The security team suspiciously scrutinizes visitors"]},
   { name:"Mending Clinic", rating:4, limits:"HURT THE STAFF 2 / COMPLETE THE PROCEDURE 3",
     moves:[
      ["Operating Table","Wenn ein Rift auf den Operationstisch gelegt wird, gib ihm restrained-4 und burne bis zu vier seiner Mythos-Tags."],
      ["Sealed Shut","Wenn complete-the-procedure ausgeschöpft ist, erleidet der Patienten-Rift sealed-5. Setze complete-the-procedure zurück."],
      ["Working Overtime","Ein Rift, der die Downtime in der Klinik verbracht hat, erhält keinen Nutzen vom Move Montage (Downtime). Am Ende der Downtime erleidet er sealed-5."]],
     gm:[
      "The clinic staff moves forward with the sealing procedure (erhalte progress-1 auf complete-the-procedure)",
      "The nurse administers a sedative (ändere den restrained-Status-Tag eines Ziels in sedated und erhöhe sein Tier um 1)",
      "The clinic staff fights to protect themselves (ouch-1 oder burne einen Mythos-Tag)",
      "The Mender continues to work as the patient’s Mythos power crackles and surges around her"]}]},
 { id:"zelle", name:"Rift Containment Cell und Surveillance Grid", teaser:"Haftzelle gegen Mythos-Kräfte; Intel Citywide Surveillance Grid", p:288,
  text:[
   "## Rift Containment Cell",
   "Während der Endpunkt für jeden von den Gatekeepern festgesetzten Rift das Versiegeln ist, müssen Rifts oft aus verschiedenen Gründen in ihrem Rift-Dasein gehalten werden. Ein Rift kann lebenswichtige Informationen über andere Rifts haben, deren Extraktion durch einen Percher oder Investigator aussteht, Informationen, die der Mist löschen könnte, wenn der Rift versiegelt wird und in den Sleeper-Zustand zurückkehrt. Andere Male könnten die Kräfte des Rifts Gegenstand von R&D-Forschung oder Experimenten sein, oder der Rift wird als Druckmittel in Verhandlungen festgehalten. Manche Rifts sind so zerstörerisch oder aggressiv, dass die Gatekeeper sie nur eindämmen können, bis eine geeignete Versiegelungslösung gefunden ist.",
   "Containment Cells sind in den Einrichtungen und Section HQs des Deep Mist häufiger als im Feld, auch wenn eine Handvoll Außenposten sie führen mag. Es sind tragbare Kammern, die in Größe und Aussehen einer kleinen Gefängniszelle ähneln. Solange eine Containment Cell ausreichend mit Strom versorgt ist, versagen die meisten Mythos-Kräfte in ihr. Manche tragbaren Zellen sind mit einem Notstromgenerator ausgestattet, der sie auch dann am Laufen hält, wenn sie von einer Stromquelle getrennt sind.",
   "## Intel Citywide Surveillance Grid",
   "Damit keine größeren Breaches unter dem Radar der Gatekeeper durchrutschen, sind ganze Etagen von Perchern für rund um die Uhr laufende Scans der City abgestellt, die nach aktiven Rifts und Ausbrüchen von Mythos-Kräften suchen."],
  dangers:[
   { name:"Rift Containment Cell", rating:2, limits:"BREAK OUT 6 / OVERLOAD 6",
     moves:[
      ["Containment Field","Solange die Rift Containment Cell mit Strom versorgt ist und overload nicht ausgeschöpft ist, liegt der Raum in ihr unter thick-Mist-5, was alle Mythos-Kräfte darin dämpft."],
      ["Armored Weaving Alloy","Wenn die Rift Containment Cell einen physischen Status erleidet, verringere dessen Tier um 4."],
      ["Rigged to Explode (+y)","Wenn break-out ausgeschöpft ist, erleidet alles in der Zelle oder in ihrer unmittelbaren Nähe atomized-6 (erhöhe das Tier über 6 hinaus, wenn es um eine Bedrohung hoher Stufe geht)."]],
     gm:[
      "Flood its interior or surroundings with a powerful sleeping gas or discharge a high-voltage current (out-cold-5)"]},
   { name:"Intel Citywide Surveillance Grid", rating:3, limits:"SIGNATURE 5 / DISPATCH 4",
     moves:[
      ["Scanning for Breaches","Wenn ein PC einen Move macht, der mehr als 3 Power aus Mythos-Quellen (Tags und Status) bezieht, erleidet das Grid signature-detected mit einem Tier für jeden Punkt Power über 3 (unabhängig vom Ergebnis). Wenn eine Danger einen Mythos-basierten Move macht, erleidet das Grid signature-detected mit einem Tier für jeden Effektpunkt über 3, den der Danger-Move erzeugt hat (unabhängig vom Ergebnis). Entferne am Ende einer Szene alle Status von signature."],
      ["Surge Detected","Wenn ein PC Stops. Holding. Back., gib dem Grid signature-spike-4 für ein bedeutendes Opfer, signature-surge-5 für ein Opfer ohne Wiederkehr und off-the-charts-6 für ein ultimatives Opfer. Erhöhe das Tier um eins, wenn der Spieler einen Miss erzielt hat."],
      ["Investigate the Breach (+y)","Wenn signature Tier 4 erreicht, erschaffe am Schauplatz eine neue Danger: Disembodied Intel Percher."],
      ["Dispatch All Units!","Sobald signature ausgeschöpft ist, kann die SL dem Grid als Soft Move (nach jedem Spielerzug) on-my-way-1 auf dem dispatch-Spektrum geben. Wenn dispatch ausgeschöpft ist, erschaffe eine neue Gatekeeper-Danger, die der am Schauplatz erkannten signature entspricht."]],
     gm:[
      "Step on it! (nimm on-my-way-1; nur wenn signature ausgeschöpft ist)"]}]}
]);
