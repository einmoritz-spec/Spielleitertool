OS_ADV_PART("biting-bullet", [
  {id:"def-vorbereitung", gruppe:"Verteidiger-Itinerary", titel:"Verteidiger: Hintergrund und Vorbereitung", bloecke:[
    {t:"p", x:"Chrysanthemum engagiert die Crew als zusätzliche Sicherheit während der Fahrt. Die Nightclouders sind hier ehemalige Maboroshi-Mitarbeiter: Sie wurden entlassen, weil sie sich emotional zu sehr an das Projekt klammerten. Sie begannen, den Baku Mythos zu verehren, und flogen auf, als sie Projektdaten aus den Labors schaffen wollten. Jetzt, da der Ex-Arbeitgeber das Projekt verkauft und die Daten verschiebt, sehen sie eine zweite Chance."},
    {t:"h", x:"Der Angriffsplan der Nightclouders"},
    {t:"p", x:"Sie wollen im **Second Leg** mit voller Kraft zuschlagen und bereiten dafür zwei verdeckte Schritte vor:"},
    {t:"liste", items:[
      "**Erstens:** Während des First Leg schleusen sie einige der Ihren unter dem Schutz einer Ablenkung (ein VR-Monsterangriff) in den Zug. Die Späher gelangen zum Vista Wrap Generator und wollen ihn vor dem Hauptangriff übernehmen.",
      "**Zweitens:** Beim Halt in Dangan Central schmuggelt sich ein Nightclouder als Karakuri Attendant getarnt an Bord, erkundet die aktiven Verteidigungsmaßnahmen (also die Crew) und versucht, deren Fähigkeiten kurz vor dem Hauptangriff gezielt zu stören."
    ]},
    {t:"h", x:"Unterstützung durch Chrysanthemum"},
    {t:"p", x:"Chrysanthemum stellt Ausrüstung bereit, aber nicht umsonst: Die Spieler müssen vor dem Job auf **Create** würfeln, um nützliche Tags zu erschaffen. Verhandlungs-Tags und Tags für ein gutes Verhältnis zum Chrysanthemum-Ansprechpartner dürfen die Probe boosten. Obwohl Chrysanthemum aus der Biotechnologie kommt, verfügt der Konzern über Sicherheits- und Cybersecurity-Ausrüstung: Waffen, Hacking-Apps und fast alles, was zum Schutz der Fracht im Cyberspace nötig ist. Die erschaffenen Tags dürfen nach dem Job behalten und in Loadout-Themes aufgenommen werden. Das Weakness-Tag legt Chrysanthemum fest."},
    {t:"h", x:"Unterstützung durch Genbi Dangansen"},
    {t:"p", x:"Die Crew arbeitet mit dem Sicherheitssystem des Zugs zusammen und bekommt eine holografische Einweisung in Layout, Abwehr und Fähigkeiten. Du darfst die passiven Schutzmaßnahmen (Vista Wraps, Verteidigung an, in und zwischen den Waggons) offenlegen. Der Vista Wrap Generator Waggon bleibt für alle gesperrt."},
    {t:"hinweis", titel:"Nicht überfrachten", x:"Wirf nicht alles auf einmal ab. Sag den Spielern, dass die Informationen jederzeit abrufbar sind, und lass sie fragen, wenn es relevant wird. Wer sich nicht vorbereitet, trägt die Folgen."},
    {t:"liste", items:[
      "Im Zug bewegt sich die Crew frei. Solange der Zug nicht angegriffen wird, darf sie ihn aber nicht von außen betreten oder verlassen, denn die Firma sieht das als Sicherheitsrisiko.",
      "Die Attendants sind weniger hilfreich, als die Crew erwartet. Dangansen schätzt ihre Autonomie als Sicherheitswert und Luxussymbol. Sie kommen den Verteidigern gerade im schlechtesten Moment in die Quere."
    ]}
  ]},
  {id:"def-maboroshi", titel:"Verteidiger: Maboroshi Station", bloecke:[
    {t:"p", x:"Die Station ist ein kleiner japanischer Landbahnhof, überall mit dem Maboroshi-Logo versehen. Hier werden die verschlüsselten Daten als Kunstwerke an Bord gebracht. Die Crew überwacht, wie die Attendants die neun Gemälde in den Galeriewagen tragen und an den Rahmen der linken Wand aufhängen."},
    {t:"p", x:"Beschreibe den Zug ausführlich. Auch wenn die Crew Layout und Abwehr studiert hat, ist es das erste Mal, dass sie ihn auf dem Bildschirm erlebt. Mach klar, wie viel Mühe die Dangansen Group in Schönheit, Eleganz und Luxus steckt."}
  ]},
  {id:"def-first-leg", titel:"Verteidiger: Der First Leg", bloecke:[
    {t:"p", x:"Die Nightclouders schicken ein Vorauskommando von **drei Nightclouder-Agenten (Scale 1)**, das sich heimlich an Bord versteckt, bevor im Second Leg der Hauptangriff beginnt."},
    {t:"h", x:"Die Ablenkung"},
    {t:"p", x:"Als Ablenkung hetzen die Nightclouders eine Hacking-App in Krakenform auf den Zug: den **Datastream Kraken**, ein mechanisches Konstrukt mit glühendem Kern und mehreren Tentakeln, das in den Zug greift und die Gemälde sucht. Er soll Aufmerksamkeit binden und Zeit kosten, aber wenig Schaden anrichten, denn die Nightclouders wollen die Gemälde nicht gefährden."},
    {t:"challenge", name:"Datastream Kraken", typ:"Challenge (Konstrukt)", beschr:"Metallkörper aus Kern und sechs langen, glitschigen silbernen Tentakeln. Jedes Tentakel ist Scale 1, hat ein eigenes Destroy-Tentacle-Limit und kann einzeln angegriffen werden. Aktionen gegen mehrere oder alle Tentakel sind Scale 2. Solange ein Tentakel intakt ist, hält sich der Kern vom Zug fern und die Tentakel greifen die Insassen an. Sind alle zerstört, rammt der Kern den Zug.",
      limits:[{n:"Crash",v:4},{n:"Destroy Tentacle",v:4}],
      tags:["armored core","powerful tentacles","Status: firewalled-core-2","Scale 2 (jedes Tentakel Scale 1)"],
      specials:[{n:"Protected Core", x:"Solange noch Tentakel intakt sind, fangen sie jeden Angriff auf den Kern ab. Wer sich dem Kern körperlich nähert, kassiert zuerst eine Consequence von den Tentakeln."}],
      threats:[
        {n:"Greift mit silbernen Tentakeln nach den Verteidigern des Zugs und schlingt sich um sie", x:"Consequence: Packt jedes erreichbare Körperteil und reißt heftig daran (restrained-1 und bruised-1 für so viele Gegner, wie Tentakel übrig sind)."},
        {n:"(Nach dem Verlust der Tentakel) Rast mit voller Geschwindigkeit auf den Zug zu", x:"Consequence: Rammt den Zug und schüttelt ihn durch (disoriented-2 für alle im Inneren und glitching-1 für den Genbi Dangansen)."}
      ]},
    {t:"h", x:"Die Infiltration"},
    {t:"p", x:"Während der Kraken angreift, gleiten die Nightclouder-Späher auf digitalen Gleitern durch den Datenstrom aufs Dach, arbeiten sich unbemerkt zum Vista Wrap Generator Waggon vor, bohren ein Loch und steigen in die Maschinenschränke hinab, um sich zu verstecken."},
    {t:"p", x:"Die Spieler können dem Manöver auf mehreren Wegen auf die Spur kommen:"},
    {t:"liste", items:[
      "Besiegt die Crew den Kraken sehr schnell (in ein bis zwei Aktionen), hört sie den Aufprall der Späher auf dem Dach.",
      "Erkundet oder scannt eine Figur andere Zugteile, während der Kraken angreift, kann ein gelungener Wurf die Eindringlinge enthüllen.",
      "Geht jemand während des Kampfes nach draußen, kann er die Späher beim Wechsel von Waggon zu Waggon wahrnehmen. Gib das als Threat (etwa Schritte hinter dir), idealerweise zusammen mit einem Kraken-Threat, damit die Figur wählen muss.",
      "Wer nach dem Kampf den Zug auf Schäden untersucht, findet das Loch im Dach des Generator-Waggons."
    ]},
    {t:"p", x:"Gib den Infiltratoren als Consequence **stealthy-3** (wie im Challenge-Profil). Halte diese Consequences vor den Spielern geheim, solange sie nichts von der Infiltration ahnen, und decke sie erst auf, wenn sie aktiv nach den Nightclouders suchen."},
    {t:"p", x:"Werden die Späher entdeckt, versuchen sie zu entkommen, ein anderes Versteck zu finden und die Infiltration zu vollenden. Geht auch das nicht, trennen sie die Verbindung, selbst auf die Gefahr von Hirnschäden. Gefangennahme und Verhör wollen sie um jeden Preis vermeiden."}
  ]},
  {id:"def-central", titel:"Verteidiger: Dangan Central", bloecke:[
    {t:"h", x:"Verdächtige Wartung"},
    {t:"p", x:"Wenn der Genbi Dangansen einfährt, \"warten\" Attendants den Zug und prüfen die Verschlüsselung. Ob an Bord oder von der Station aus: Die Crew sieht, wie ein spezialisierter Attendant in Gestalt eines Malers an Bord geht, um die Kompression zu straffen. Fragen werden höflich abgewiesen, eingreifen darf niemand. Genaues Beobachten liefert dennoch ein paar Hinweise:"},
    {t:"liste", items:[
      "Der Spezialist nimmt sich viel Zeit und prüft die Verschlüsselung behutsam, als erwarte er, dass sie aus irgendeinem Grund zerfallen ist.",
      "Zur Sicherung gehört, die Gemälde ordentlich an ihren schweren Gestellen zu befestigen. Wer sie bewegt, kann die Verschlüsselung gefährden."
    ]},
    {t:"h", x:"Der zweite Infiltrator"},
    {t:"p", x:"Während der Wartung schleust sich ein **Hacker** der Nightclouders, getarnt als Karakuri Attendant, mit dem Strom der Attendants an Bord. Er sucht die Verteidiger (die Crew) und schädigt unbemerkt ihre Fähigkeiten vor dem Angriff im Second Leg. Je mehr Schaden er anrichtet, desto eher vermutet die Crew einen Eindringling und fahndet nach ihm."},
    {t:"challenge", name:"Disguised Nightclouder Hacker", typ:"Challenge (Hacker)", beschr:"Bleibt getarnt und schwächt die Sicherheitscrew, bis sie Sabotage vermutet und den Täter enttarnen will. Das lässt sich per Quick Outcome oder über das Ausschöpfen von expose lösen, je nach Dramaturgie.",
      limits:[{n:"Crash",v:3},{n:"Take Over"}],
      tags:["Status: boosted-focus-2","Status: disguised-2","Status: firewalled-2"],
      threats:[
        {n:"Als Karakuri Attendant: bittet höflich, einen PC \"aus Sicherheitsgründen\" zu scannen, und beginnt, ohne die Antwort abzuwarten", x:"Consequence: Verursacht einen Glitch im gescannten Avatar und zieht sich entschuldigend zurück (glitched-2). Oder: markiert das Ziel digital als angebliche Sicherheitsmaßnahme (tagged-2). Oder: lässt einen lästigen digitalen Sprite, getarnt als UI-Fehler, außer Reichweite flattern (distracted-2). Oder: sabotiert Programme oder Avatare (burn a tag, aber zeige es erst, wenn der PC das Tag das nächste Mal einsetzt oder den Programmzustand prüft)."},
        {n:"Nach der Enttarnung: gestikuliert drohend, der Avatar flackert zwischen Attendant und Nightclouder", x:"Consequence: Entfesselt seine volle Hackerkraft (eine der obigen Consequences mit doppeltem Effekt). Oder: taucht in nahen Karakuri Attendants unter und passt sein Muster an (gain which-one-is-it-3 oder Deny Them Something They Want)."}
      ]},
    {t:"h", x:"Die Uhr tickt"},
    {t:"p", x:"Die Crew kann nach verbliebenen Spähern aus dem First Leg suchen, nach dem Hacker fahnden, vorbeugende Verteidigung für den Rest der Fahrt aufbauen oder im Galeriewagen mehr über die Arbeit der Attendants herausfinden. Dafür ist die Zeit knapp."},
    {t:"uhr", name:"servicing-complete", segs:3, x:"Timer für den Halt. Jede Consequence auf eine Aktion, oder wenn die Spieler lange diskutieren statt zu handeln, bringt servicing-complete-1. Ist die Uhr voll, verlässt der Zug die Station und der Second Leg beginnt."},
    {t:"h", x:"Die versteckten Späher"},
    {t:"p", x:"Sind die Späher aus dem Generator-Waggon noch da, sind sie gut versteckt. Um sie zu finden, muss das Fortschritts-Limit **security-scan:4** ausgeschöpft werden. Entdeckt, ist ihre erste Priorität, nicht lebend gefasst zu werden, bis hin zum riskanten Trennen vom Harness."},
    {t:"uhr", name:"security-scan", segs:4, x:"Fortschritts-Limit zum Aufspüren der versteckten Nightclouder-Späher im Vista Wrap Generator Waggon."}
  ]},
  {id:"def-second-leg", titel:"Verteidiger: Der Second Leg", bloecke:[
    {t:"p", x:"Jetzt führen die Nightclouders ihren Hauptangriff, egal ob die früheren Pläne gelungen sind. Sie erscheinen in voller Stärke auf fliegenden Schattenbestien, die an die Baku-Hybriden erinnern. Die **Hauptgruppe (Scale 2)** steigt im Karakuri-Storage-Waggon zu und zieht zur Galerie, um die Gemälde zu stehlen. Eine kleinere Truppe (Scale 1) bleibt auf den fliegenden Reittieren zurück und fängt die Bilder auf, wenn sie vom Zug geworfen werden."},
    {t:"h", x:"Der Vormarsch der Nightclouders"},
    {t:"p", x:"Beschreibe den Angriff fortlaufend als Threat. Als Consequence rücken die Nightclouders eine Stufe vor:"},
    {t:"liste", items:["Boarding","Erster Waggon betreten","Zweiter Waggon betreten","Dritter Waggon betreten","Vierter Waggon betreten","Loch in die Hülle sprengen","Gemälde abladen beginnen","Abladen beendet","Flucht"]},
    {t:"p", x:"Die Crew kann jede Stufe unterbrechen oder zurückwerfen. Dichtet sie etwa das Loch ab, müssen die Nightclouders es neu öffnen oder anders abladen. Lege anhand von Fortschritt und Kampf fest, wie viele Nightclouders in jedem Waggon sind."},
    {t:"p", x:"Nach dem Boarding ziehen sie durch den Zug zurück. Sie wollen die Crew nicht besiegen (tun es aber, wenn nötig), sondern so schnell wie möglich in die Galerie. So nah am Objekt ihrer Besessenheit weichen sie nicht mehr zurück."},
    {t:"h", x:"Kontrolle über die Vista Wraps"},
    {t:"p", x:"Wer die Vista Wraps über den Generator-Waggon kontrolliert (die Nightclouder-Späher, Dangansen-Sicherheit oder die Crew), kann damit Gegner behindern."},
    {t:"h", x:"Weitere Wendungen"},
    {t:"liste", items:[
      "Ist der Hacker von der Station noch an Bord, steigt er wieder in den Kampf ein, wenn möglich weiter als Attendant getarnt.",
      "Sind die Späher noch im Generator-Waggon, springen sie nach getaner Arbeit heraus und greifen aus unerwarteter Richtung an.",
      "Attendants können der Crew \"helfen\" und ihr dabei im Weg stehen.",
      "Die Hybriden können überall auftauchen, wo sie die Spieler schockieren und Erwartungen unterlaufen.",
      "Wenn die Kämpfenden den Zug schwer beschädigen, setze ein Limit **derail:4**: Der ganze Zug schwankt, bebt und stürzt schließlich in die Wildnis des Cyberspace."
    ]},
    {t:"uhr", name:"derail", segs:4, x:"Der Zug erleidet schweren Schaden. Bei vollem Limit entgleist er und stürzt in die Wildnis des Cyberspace."},
    {t:"h", x:"Der böse Überraschungsmoment"},
    {t:"p", x:"In dieser Szene kommt auch die letzte Wendung: die Failed Baku Hybrids. Sobald ein paar Gemälde von ihren Gestellen bewegt wurden, lass ein paar Hybriden (Scale 1) aufflimmern und sofort jemanden in der Nähe angreifen. Details zum Timing stehen im Abschnitt Failed Baku Hybrids."},
    {t:"h", x:"Die dramatische letzte Meile"},
    {t:"p", x:"Der Kampf in diesem Abschnitt soll aufregend und gefährlich sein. Hält sich die Crew aus der Gefahr heraus und hat alles unter Kontrolle, kannst du den Schwierigkeitsgrad spontan erhöhen, indem du die oben genannten Wendungen ausspielst."},
    {t:"h", x:"Ankunft an der Chrysanthemum Station"},
    {t:"p", x:"Die Station ähnelt der Maboroshi Station, ist aber größer und trägt ein anderes Firmenlogo. Sind noch Failed Baku Hybrids oder Infiltratoren aktiv, verstärkt der Konzern seine Domain-Firewall (**firewalled-5, Scale 4**) rund um das Terminal und öffnet die Türen nicht, nicht einmal für die eigenen Söldner. Niemand kommt rein oder raus, bis die Bedrohung auf die eine oder andere Art beseitigt ist."},
    {t:"hinweis", titel:"Die beste Offensive ist Verteidigung", x:"Ein cleverer Weg, die Gemälde zu stehlen: den Verteidiger-Job annehmen, ihn gut vortäuschen, das Vertrauen von Dangansen-Sicherheit und Kunden gewinnen und sie dann verraten. Verteidigt die Crew im First Leg und in Dangan Central erfolgreich, darfst du ihr **trusted-3** schenken, als digitale Berechtigung und zwischenmenschliches Vertrauen, das sie im Second Leg zur Flucht mit den Gemälden nutzen kann."}
  ]},
  {id:"att-vorbereitung", gruppe:"Angreifer-Itinerary", titel:"Angreifer: Hintergrund und Vorbereitung", bloecke:[
    {t:"p", x:"Die Crew wird von Dritten angeheuert oder macht den Heist auf eigene Rechnung: Sie holt die Daten aus dem Zug, bevor er sein Ziel erreicht. Die Nightclouders sind hier Maboroshi-Mitarbeiter und Verehrer des Baku Mythos, die den Transfer zu Chrysanthemum absichern. Sie hängen emotional am Projekt und bewachen die Daten fanatisch. Nach dem Transfer wollen sie Chrysanthemum-Angestellte werden, um nahe an dieser Source zu bleiben."},
    {t:"p", x:"Ein erfolgreicher Heist heißt: an Bord kommen (vermutlich auf einem ebenso schnellen Fahrzeug), die Gemälde abladen (vermutlich auf ein Fahrzeug) und in den Cyberspace entkommen."},
    {t:"h", x:"Der Verteidigungsplan der Nightclouders"},
    {t:"p", x:"Sie arbeiten mit der Dangansen-IC zusammen (Karakuri Attendants, Vista Wraps, Hüllendekor), um Eindringlinge aufzuspüren und auszuschalten. Kommt die Crew zu schnell voran (und vergiss die Baku Hybrids am Ende nicht), können sie ein **Sōhei IC** (Metro S. 129) einsetzen."},
    {t:"h", x:"Was die Crew weiß"},
    {t:"p", x:"Auftraggeber oder Informanten haben nur Teilwissen über die Zugsicherheit:"},
    {t:"liste", items:[
      "Sie kennen die Vista Wraps, aber nicht alle.",
      "Sie wissen, dass der Karakuri-Storage-Waggon hinter der Lok am leichtesten aufzubrechen ist, und was in jedem Waggon liegt, aber nicht die genauen Sicherungen.",
      "Sie kennen Karakuri Attendants und Nightclouders (wer sie sind und warum sie im Zug sind), aber nicht deren Fähigkeiten.",
      "Sie können einen groben Zeitplan liefern (alles unter Train Itinerary)."
    ]},
    {t:"hinweis", titel:"Heist-Vorbereitung", x:"Statt die Vorbereitung auszuspielen, kannst du den Heist in medias res beginnen und Rückblenden zur Prep Sequence einstreuen, wie im Film Ocean's (siehe Heists, Metro:Otherscape S. 125)."},
    {t:"p", x:"Die erste Entscheidung der Crew: Zusteigen während der Fahrt (First Leg) oder beim Halt in Dangan Central. Warne sie, dass die Station stärker geschützt ist."},
    {t:"p", x:"Wichtig ist eine Fluchtstrategie. Die Gemälde sind groß und sperrig, für alle braucht es ein Fluchtfahrzeug oder einen Trick wie das Abkoppeln des letzten Waggons. Sie sind bereits komprimiert; weiter verkleinern geht nur mit einem wirklich mächtigen Kompressionsprogramm. Eine sehr verwegene Crew könnte die Bilder digital markieren, über Bord in die Wildnis des Cyberspace werfen und ihnen dann nachjagen."},
    {t:"h", x:"Angriffe auf die Firmenstationen"},
    {t:"p", x:"Wegen erstklassiger Cybersicherheit sind die Domains von Maboroshi Labs und Chrysanthemum Biosciences für die Crew kaum realistische Ziele, weshalb sie den Zug unterwegs angreift. Bestenfalls bekommt sie einen Live-Feed der Verladung an der Maboroshi Station oder deren Grundriss. Das Angreifer-Itinerary konzentriert sich daher auf First und Second Leg und den Halt in Dangan Central. Verladung, Abfahrt und (nach dem Job) Ankunft bei Chrysanthemum kannst du als Zwischenszenen erzählen. Die Maboroshi Station ist im Verteidiger-Itinerary beschrieben."}
  ]},
  {id:"att-first-leg", titel:"Angreifer: Der First Leg", bloecke:[
    {t:"p", x:"Die erste Chance der Crew. Sie muss in den Datenstrom, an Bord, per Gewalt oder Tarnung bis in den Galeriewagen, die Gemälde stehlen und mit ihnen verschwinden."},
    {t:"h", x:"Boarding, Breaching und Vorrücken"},
    {t:"p", x:"Um zuzusteigen, bringt die Crew ihr Fahrzeug neben den Zug (Quick Outcome für den Piloten, mit **unstable-2** als Consequence). Dann springt jeder hinüber (je ein Quick Outcome oder ein skaliertes Quick Outcome für alle). Gefahr droht von den Vista Wraps, die auf eine passende Vista umschalten."},
    {t:"p", x:"Auf dem Zug muss die Crew die Hülle durchbrechen und die Schutzdekore bewältigen, alles unter den Vista-Effekten. Sie darf jeden Waggon wählen. Der Karakuri-Storage ist am einfachsten und ideal zum Sammeln und Planen. Andere Waggons sind schwerer und riskanter, aber näher am Ziel. Hindernisse und Chancen pro Waggon findest du im Layout. In jedem Waggon kannst du bei Bedarf als Consequence eine neue Challenge einführen (Karakuri Attendant oder Nightclouder)."},
    {t:"p", x:"Der Wechsel zwischen Waggons ist nicht trivial: Die Türen sind verschlossen. Sie zu öffnen (Hacking, Waffen oder anderes) verlangt ein Quick Outcome, wobei **encryption-2** alle Versuche behindert."},
    {t:"h", x:"Entdeckung vermeiden"},
    {t:"p", x:"Während der Wartung nutzt du Threats von suchenden Attendants und Nightclouders, mit Consequences wie dem Verbrennen von Tags und dem Senken von Statuses für Stealth, Verstecke und Verkleidungen. Die Crew muss ein oder zwei Runden davon überstehen: Position wechseln, Sicherheitsmaßnahmen hacken, neue Verkleidungen vorbereiten. Bleibt sie unentdeckt, fährt der Zug weiter und der Second Leg beginnt."},
    {t:"h", x:"Die Uhr tickt"},
    {t:"p", x:"Sobald der Angriff beginnt, setzt du ein Limit **arrive:5** als Timer. Jedes Mal, wenn die Crew warten oder sich zurückziehen muss, um nicht entdeckt zu werden, gibt es arriving-1 als Consequence. Ist arrive voll, erreicht der Zug Dangan Central, wo sich die Galerie mit wartenden Attendants füllt. Die Crew muss sich verstecken, etwa in den Maschinen des Generator-Waggons oder in den Erste-Klasse-Sitzen des Passagierwagens."},
    {t:"uhr", name:"arrive", segs:5, x:"Zeit bis zur Ankunft in Dangan Central. Wird bei Warten oder Rückzug mit arriving-1 gefüllt; bei vollem Limit hält der Zug in Dangan Central (im Second Leg: an der Chrysanthemum Station)."},
    {t:"h", x:"Alarm schlagen"},
    {t:"p", x:"Die Crew kann auch scheitern, bevor sie die Galerie erreicht, wenn man sie entdeckt und einen Verteidiger Alarm schlagen lässt. Das kann eine einfache Consequence sein (Escalate the Situation), falls sie einen fliehenden Wächter nicht aufhält. Dann stürzen sich alle verfügbaren Verteidiger auf die Crew, **Nightclouders (Scale 2) und Karakuri Attendants (Scale 2)**, was einen taktischen Rückzug nötig machen kann."},
    {t:"h", x:"Der böse Überraschungsmoment"},
    {t:"p", x:"Haben die PCs die Gemälde in der Hand, aber noch nicht aus dem Waggon geschafft, bring die Failed Baku Hybrids ins Spiel. Das löst Generalalarm aus (falls noch nicht geschehen) und Chaos in der Galerie."}
  ]},
  {id:"att-central", titel:"Angreifer: Dangan Central", bloecke:[
    {t:"p", x:"Die Station wimmelt von Karakuri Attendants, mehr, als die Crew im direkten Kampf bewältigen kann. Auch der Galeriewagen ist voll von Attendants, die die Gemälde prüfen und bearbeiten. Die Crew kann einsickern und die Arbeiten ausspähen, aber nicht stehlen. Am besten wartet sie ab, bis der Zug wieder fährt."},
    {t:"h", x:"Einbruch in Dangan"},
    {t:"p", x:"Will die Crew über die Station in den Zug, muss sie die Sicherheit von Dangan Central umgehen. Vereinfache mit den Limits **infiltrate:5** und **intrusion-countermeasures-3**, und lass die Spieler versuchen, auf den Zug zu gelangen. Alternativ nimmst du das Intrusion Countermeasure AI Challenge-Profil (Metro:Otherscape S. 308) als fortgeschrittenes Sicherheitssystem in Gestalt eines Karakuri Attendants in Schaffneruniform. Platziere aufmerksame Attendants in der ganzen Station und Nightclouders, sobald die PCs den Bahnsteig des Zuges erreichen."},
    {t:"uhr", name:"infiltrate", segs:5, x:"Fortschritt beim Einbruch in Dangan Central über die Station."},
    {t:"uhr", name:"intrusion-countermeasures", segs:3, x:"Gegenmaßnahmen der Station gegen den Einbruch (Vereinfachung)."}
  ]},
  {id:"att-second-leg", titel:"Angreifer: Der Second Leg", bloecke:[
    {t:"p", x:"Vielleicht steigt die Crew erst jetzt zu, oder sie muss nach einem verzögerten oder gescheiterten Versuch jetzt zu Ende bringen. War es ein zweiter Versuch nach einem Fehlschlag, der die Sicherheit alarmiert hat, sind Nightclouders und die Dangansen-IC **alert-2**."},
    {t:"p", x:"Zusteigen und Mission erfüllen läuft wie im First Leg, aber setze **arrive** zurück. Diesmal erreicht der Zug bei vollem Limit die Chrysanthemum Station, und die Crew muss die Verbindung trennen oder riskiert ein viel schmerzhafteres Schicksal durch Chrysanthemum-ICs (nutze ein Kollektiv aus Sōhei ICs mit dem Naginata 2L8 Special, Metro S. 129)."},
    {t:"p", x:"Die Crew kann dem Halt auch ganz ausweichen, indem sie sich zurückzieht und nach der Abfahrt neu zusteigt. Ist sie während des Halts da, dann an einem von zwei Orten: an Bord, wenn sie im First Leg eingedrungen ist, oder draußen vor der Station beim Versuch einzubrechen."}
  ]},
  {id:"aftermath", titel:"Aftermath", bloecke:[
    {t:"p", x:"Irgendwann hat jemand (oder niemand?) die Kunstwerke. Aber ist es die richtige Partei?"},
    {t:"liste", items:[
      "**Als Verteidiger:** Haben die Nightclouders Gemälde gestohlen, ist Chrysanthemum verstimmt. Der Konzern wird die Lage ausnutzen und anbieten, die zweite Lohnhälfte zu zahlen, wenn die Crew die Bilder dort holt, wo die Nightclouders sie verstecken. Tut die Crew das nicht, brennt sie Brücken ab und verliert Ansehen in der Unterwelt. Werden dagegen alle Gemälde heil abgeliefert, gilt das als Meisterleistung an Professionalität und bringt wohl wertvolle Kontakte und Jobangebote.",
      "**Als Angreifer:** Haben die PCs Gemälde gestohlen, besitzen sie schnell zerfallende, sperrige Datenpakete, die zufällig gefährliche digitale Bestien freisetzen. Die Fracht rechtzeitig zum Auftraggeber zu bringen, kann selbst eine Herausforderung sein. Außerdem haben Chrysanthemum, Maboroshi und die Dangansen Group starke Motive, die Crew aufzuspüren und zu bestrafen. War der Heist offen genug, dass sie überhaupt wissen, wer die Diebe sind? Wie weit gehen die Konzerne, um die Daten zurückzuholen?",
      "**In beiden Fällen:** Überlebende Hybriden könnten von irgendeiner Firma studiert und zur Waffe gemacht werden. Das war vermutlich nicht das letzte Mal, dass die Crew ihnen begegnet."
    ]}
  ]}
]);
