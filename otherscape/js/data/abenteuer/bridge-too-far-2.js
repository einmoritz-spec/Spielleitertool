OS_ADV_PART("bridge-too-far", [
  {id:"akt3-yatagarasu", titel:"Die Yatagarasu kontaktieren", gruppe:"Akt III", bloecke:[
    {t:"p", x:"**Akt III: The Rush for Answers.** Die Crew hat den Koffer, aber viele Fragen zu Auftraggebern, Inhalt und Herkunft. Sie kann hacken, sich auf den Straßen umhören oder anders graben. Irgendwann taucht das Bureau of Onmyō auf, angeführt von **Chief Inspector Ishikawa Rin**, um vor der Substanz zu warnen, und auch die Yatagarasu zeigt einige Karten, um die Crew für sich zu gewinnen. Die Szenen dieses Aktes können in beliebiger Reihenfolge stattfinden."},
    {t:"vorlesen_ref", seite:306, x:"Online verwandelt sich der Code aus dem Koffer in einen dreibeinigen Raben und fliegt in den Cyberspace; die Yatagarasu erscheint auf schwarzen Schwingen, die sich beim Landen einklappen und verschwinden."},
    {t:"p", x:"Die Crew bestätigt den Besitz, indem sie den Yatagarasu-Code in den Koffer eingibt. Das Ergebnis ist ein weiterer Codestring, der hochgeladen die Yatagarasu selbst herbeiruft, als Avatar in VR, AR oder als Hologramm im Meatspace mit unbekannter Quelle."},
    {t:"p", x:"Mit gesichertem Koffer geht sie zur nächsten Phase: die Crew für die Verwandlung der Megacity zu gewinnen und zu prüfen, ob sie es ehrlich meint. Sie teilt, was diesem Zweck dient."},
    {t:"h", x:"Was sie preisgibt"},
    {t:"liste", items:[
      "Der Koffer enthält **Junjō**, ein konzentriertes Entheogen („seelenbefreiendes Geschenk“). Es kanalisiert die Kraft der Ame-no-ukihashi und überbrückt die Kluft zwischen Menschen und Göttern. Es ist ein Geschenk der Amatsukami, mit dem Sterbliche durch Umschreiben ihrer Psyche das Menschsein überschreiten und das Bewusstsein des Himmels erreichen können.",
      "Der Plan ihrer Auftraggeber: das Entheogen an die Bürger des Bezirks verteilen, später an den Rest von Tokyo und Japan.",
      "Der Koffer öffnet sich selbst am Zielort, „und das Geschenk wird geteilt“.",
      "Das Ziel (**Zen Garden Skybridge, Tokyo Cascade**) nennt sie erst, wenn sie überzeugt ist, dass die Crew auf ihrer Seite steht. Hilft die Crew nicht oder traut sie nicht, schlägt sie vor, bis zum nächsten Sonnenuntergang (einen Tag) mit der Idee klarzukommen, die Welt der kleinlichen materiellen Dinge hinter sich zu lassen."
    ]},
    {t:"h", x:"Das Gespräch"},
    {t:"liste", items:[
      "Sie wünscht, die Crew sähe die reine Wahrheit der Absichten ihrer Herren und täte ohne Zweifel, was verlangt wird. Sie weiß aber, dass sterbliche Köpfe Zeit brauchen.",
      "Sie fragt offen, ob die Crew bereit ist weiterzumachen, und knüpft daran an.",
      "Bei Skepsis will sie den Crewmitgliedern „die Augen öffnen“ für das Geschenk, als eine der Ersten ihr Bewusstsein zur Welt jenseits zu öffnen. Sie tut das klug mit Fragen statt Aussagen und spricht Identities, Rituals und Itches der PCs an sowie das Elend der dystopischen Welt: Wäre nicht alles besser, wenn mehr Menschen erleuchtet wären?",
      "Sagt die Crew ehrlich, dass sie nicht weiterhelfen will, respektiert sie das, besteht aber auf Rückgabe des Koffers. Zum nächsten Sonnenuntergang schickt sie einen anderen Kurier. Sie hofft, dass Bedenkzeit die Crew umstimmt.",
      "Lügt die Crew, stellt sie sie bloß und fordert den Koffer ebenfalls zurück."
    ]},
    {t:"challenge", name:"The Yatagarasu", rating:"★★★★", typ:"NPC (Agentin der Amatsukami)", beschr:"Seit einem Besuch der Landbrücke Amanohashidate vor Jahren göttliche Agentin der Amatsukami; ihre frühere Identität ist aus Cyberspace und Behördenregistern getilgt. Sie handelt aus unerschütterlichem Glauben, weil sie das Gute sieht, das daraus entsteht. **seeing-the-light** ist ein zwingender Status, der die Figur treibt, den Plan zu erfüllen (kann zu Decay-Markierung führen); **remorseful** erschwert das Mitigieren von seeing-the-light. Ihr **kami-guarded** gilt für jeden Schaden: physisch, Mythical, digital.", limits:[{n:"Hurt (Crash)", v:5},{n:"Bribe or Turn", v:0},{n:"Takeover", v:0},{n:"Trace", v:0}], tags:["wings","kami-guarded-3","mysterious-3","enlightened-4"], threats:[
      {n:"Turn her head like an inquisitive crow", x:"Keine direkte Consequence; Stimmungsauftakt."},
      {n:"Look someone over with an intensity that sees through to their soul", x:"Highlight how a problem or wrong could be better if people were enlightened (seeing-the-light-3); Evoke memories of one’s long-forgotten innocence (seeing-the-light-3); Confront someone with how their selfishness or limited worldview is making it worse for everyone (remorseful-3); Heal someone of an affliction or wound, emotional or physical, auch über Cyberspace (negativen Status entfernen und seeing-the-light-3 geben)."},
      {n:"Move with unearthly grace", x:"Strike with lightning speed (broken-bones-4) oder ein Messer treffsicher werfen (bleeding-out-4); Find steady footing or take to the air (gain superior-positioning-4)."},
      {n:"Spread her wings", x:"Fly away to avoid capture (Deny Them Something They Want); Her signal or trail suddenly drops (Deny Them Something They Want)."}
    ], extra:[{k:"Hinweis", x:"Die Limits Bribe or Turn, Takeover und Trace sind im Buch mit „–“ (nicht anwendbar) angegeben, daher als Wert 0."}]}
  ]},
  {id:"akt3-recherche", titel:"Recherche: Yatagarasu, Junjō, Hikage", gruppe:"Akt III", bloecke:[
    {t:"h", x:"Die Yatagarasu erforschen"},
    {t:"p", x:"Wer nachforscht (Hinweis: ihr **mysterious-3**), findet:"},
    {t:"liste", items:[
      "Sie wirkt nicht nur wie eine göttliche Botin, sie scheint echte göttliche Kräfte zu haben: Sie durchschaut jede Lüge, entzieht sich jedem Spion und ist anscheinend unbestechlich, eine wahre Gläubige.",
      "Sie arbeitet für die **Hiruma-Miyaki Corporate Group (HMCG)**, einen großen Hintergrundinvestor in Kognitionswissenschaft, Psychologie, Parapsychologie, Religionswissenschaft und Soziologie, die Techniken für das Erzeugen von Erinnerung, Emotionen und Out-of-Body-Erfahrungen entwickelt.",
      "Die HMCG-Zentrale liegt im selben Bezirk wie Hikage, auf der anderen Seite der Megacity. Warum wurde der Koffer nicht direkt dorthin gebracht, sondern hierher? (Ein Hinweis auf den Verteilungsplan, falls die PCs ihn noch nicht kennen.)"
    ]},
    {t:"p", x:"Die Yatagarasu auszufragen oder zu lesen ist eine dramatische Aktion (Quick oder Discover), erschwert durch ihr mysterious-3; Tags für echtes Interesse oder Glauben an die Mythoi helfen. Consequence kann sein, dass sie enttäuscht wird (ein Tier deiner Wahl) oder das Gespräch abrupt beendet (Deny Them Something They Want)."},
    {t:"p", x:"**Lügen** gegenüber der Yatagarasu scheitert immer: Sie kennt die Wahrheit nicht, merkt aber, wenn man lügt. Die Wahrheit zu verdrehen ist eine dramatische Quick-Aktion, erschwert durch ihr **enlightened-4** (und durch den enlightened-Status der Figur, falls vorhanden)."},
    {t:"h", x:"Junjō untersuchen"},
    {t:"p", x:"Wissenschaftliche Analyse braucht ein Biochemielabor (etwa das Canine Biolab), arkane Fähigkeiten oder Ressourcen liefern aber auch viel."},
    {t:"liste", items:[
      "Der Koffer ist Spezialanfertigung: superresistente Legierung, eingebaute Sensoren für Inhalt und Umgebung, Touchpad mit militärischer oder besserer Verschlüsselung.",
      "Die Substanz ist eine biochemische Verbindung ähnlich dem japanischen Entheogen **hikageshibiretake** („Schattentaubheitspilz“), aber verändert: Das Original wird meist geschluckt, diese Version wirkt auch über Haut oder Einatmen.",
      "Ein Entheogen ist eine psychoaktive Substanz, die veränderte Bewusstseinszustände auslöst, meist in religiösem oder rituellem Zusammenhang.",
      "(Mit Source-Touched-Methoden) Wer den Koffer entwarf, war göttlich inspiriert: Er wird von einem magischen heiligen Siegel mächtiger kami verschlossen und widersteht allen Öffnungsversuchen."
    ]},
    {t:"p", x:"Eine tiefere Untersuchung braucht eine **erleuchtete** Testperson und ergibt:"},
    {t:"liste", items:[
      "Die Substanz ist Mythos-durchdrungen und schafft eine spirituelle Brücke zwischen der Seele auf Erden und dem Himmel: die Ame-no-ukihashi.",
      "Der Himmel ist **Takamagahara**, ein himmlisches Reich, in dem die Amatsukami wohnen, göttliche Beschützer Japans.",
      "Die Amatsukami sind seit Äonen von der Menschenwelt abgeschnitten, haben aber überall in Japan Anhänger, die berichten und in ihrem Namen handeln.",
      "Ihr Plan wirkt zumindest in der Absicht wohlwollend: Die Menschheit soll kleinliche Bindungen überwinden und höheres Bewusstsein, Verbundenheit und Harmonie erreichen."
    ]},
    {t:"h", x:"Hikage Pharmaceuticals Server"},
    {t:"p", x:"Die Hikage-Domain zeigt sich als riesiger Pilzgarten, der die käferkleine Crew überragt, bewacht von einer **Intrusion Countermeasure AI** (Metro S. 308) in Gestalt einer Gottesanbeterin. Die Daten verraten:"},
    {t:"liste", items:[
      "Der Name Junjō („reines Herz“) kommt daher, dass angeblich nur reine Herzen die Ame-no-ukihashi sehen, die mythische Brücke zwischen Erde und Himmel. Der Legende nach brach sie vor langer Zeit zusammen und bildet nun einen Teil Kyotos.",
      "Junjō ist ein experimentelles Entheogen aus einem neu entdeckten Pilz der Gattung Psilocybe, der nur unter Kiefern der Amanohashidate-Sandbank (Präfektur Kyoto) wächst. Die Kanister enthalten die bisher einzige konzentrierte Flüssigversion; sie lässt sich als Aerosol versprühen und wirkt über Kontakt oder Einatmen.",
      "Klinische Tests: Schon winzige Mengen lösen göttliche Visionen aus (meist Amatsukami). Außer gesteigerter neuraler Aktivität (besseres Denken und Gedächtnis) gab es keine körperlichen Nebenwirkungen. Der Kanister wurde vor Phase-2-Tests gestohlen."
    ]},
    {t:"challenge", name:"Intrusion Countermeasure AI (Hikage-Domain, Gottesanbeterin)", typ:"Challenge (Metro S. 308)", beschr:"Wächter des Hikage-Pharmaceuticals-Servers in Mantisgestalt. Statblock siehe Metro S. 308.", extra:[{k:"Quelle", x:"Metro S. 308: Intrusion Countermeasure AI"}]}
  ]},
  {id:"akt3-takibi", titel:"Rückverfolgung zur Iribe-gumi: Takibi", gruppe:"Akt III", bloecke:[
    {t:"p", x:"Forscht die Crew weiter zu Habus Auftrag, findet sie Kontaktdaten zu **Takibi** („das Lagerfeuer“), dem Iribe-gumi-**wakagashira**, der Habu führte. Überzeugt sie ihn, dass sie den gesuchten Koffer hat oder von Habus Tod weiß, kommt ein virtuelles Treffen zustande."},
    {t:"vorlesen_ref", seite:309, x:"Virtuelle Sake-Bar mit automatisierten Gästen; Takibi, ein hemdloser Mann mit Yakuza-Tattoos bis Hals und Arme und Flammen statt Augen, bewegt sich tödlich elegant und setzt sich, die Arme verschränkt, unbewegt an einen Tisch."},
    {t:"p", x:"Spiele das Treffen als tracked outcome **convince:4**: Takibi davon überzeugen, dass die Crew nicht an Habus Tod schuld ist. Vielleicht weiß er auch schon vom Maikubi-kai. Nutze für ihn **Criminal Overlord** (Metro S. 306), für die Leibwächter **Syndicate Leg Breaker** (Metro S. 307), alle mit dem **Iribe-gumi Power Set**."},
    {t:"challenge", name:"Takibi", typ:"NPC (Iribe-gumi wakagashira)", beschr:"Verwende Criminal Overlord (Metro S. 306) mit dem Iribe-gumi Power Set. Rasend über Habus Tod; handelt Informationen gegen Auskunft über Habus Tod.", tags:["Tracked outcome: convince:4"], extra:[{k:"Leibwächter", x:"Syndicate Leg Breaker (Metro S. 307) mit Iribe-gumi Power Set"}]},
    {t:"p", x:"Takibi weiß:"},
    {t:"liste", items:[
      "Habus Auftrag: bei Hikage Pharmaceuticals in Kyoto einbrechen, die Substanz Junjō stehlen und in den Spezialkoffer der Yatagarasu legen.",
      "Was Junjō ist, wusste er nicht; es gehörte nicht zum Briefing, und man wurde gut bezahlt, keine Fragen zu stellen.",
      "Nach dem Diebstahl sollte der Koffer zum Ghost Market.",
      "Der Maikubi-kai erfuhr irgendwie von Habus Kurierjob, kennt aber wohl den Inhalt nicht.",
      "Die Nachricht von Habu, dem Koffer und der Einmischung der Crew macht schon die Runde; der Maikubi-kai hält ihn für eine Waffe und will ihn von der Crew zurück. Dafür mobilisiert er seine Leute, um die Crew zu jagen."
    ]},
    {t:"p", x:"Ob sie wollen oder nicht: Die Crew steckt in einem Yakuza-Bandenkrieg. Auf Wunsch kann Takibi Iribe-gumi-Leute abstellen, die helfen, den Koffer vor dem Maikubi-kai zu schützen. Gefallen und Ehre kommen später, erst muss der Koffer erledigt werden."},
    {t:"p", x:"Läuft das Treffen gut, entsteht eine vorübergehende Allianz mit der Iribe-gumi. Läuft es schlecht, jagen Iribe-gumi und Maikubi-kai die Crew, was in Akt IV Folgen hat."}
  ]},
  {id:"akt3-onmyoji", titel:"Enter the Onmyōji: Chief Inspector Ishikawa", gruppe:"Akt III", bloecke:[
    {t:"p", x:"Irgendwann nach dem Koffer-Fund, womöglich schon mitten in der eigenen Recherche, melden sich viele **Yōkai-Tracking Drones** (Tokyo S. 157) in der Nachbarschaft, auf der Suche nach dem Koffer und seinen Trägern. Das Bureau of Onmyō hat Gerüchte über Junjō aufgeschnappt und eine hastige Bedrohungsanalyse gemacht (Hikage-Einbruch, Vorfälle im Hungry Dog). Es nimmt an, dass die Crew nicht genau weiß, was sie trägt und für wen. Darum kommt **Chief Inspector Ishikawa Rin** (Tokyo S. 155) selbst mit ihrem **Shikigami** (Tokyo S. 157), um zu informieren, Stärke und Motive einzuschätzen und der Crew die Chance zu geben, den Koffer abzugeben."},
    {t:"vorlesen_ref", seite:310, x:"Ein Hovercar mit knisterndem Tarnfeld landet; Ishikawa steigt aus, mustert die Crew durchdringend, ein fuchsähnlicher Geist folgt ihr: „Wir müssen reden.“"},
    {t:"p", x:"Ishikawa bleibt sachlich. Ihr Ziel ist es, die Crew zu überzeugen, den Koffer nicht zu öffnen. Es ist eine Verhandlung, die sie nicht eskalieren lässt; Feindseligkeit käme erst später, je nach Ergebnis."},
    {t:"challenge", name:"Chief Inspector Ishikawa Rin", typ:"NPC (Bureau of Onmyō)", beschr:"Statblock siehe Tokyo S. 155. Begleitet vom Shikigami (Tokyo S. 157).", extra:[{k:"Quelle", x:"Tokyo S. 155; Shikigami Tokyo S. 157"}]},
    {t:"h", x:"Die Informationen (ohne Wurf)"},
    {t:"liste", items:[
      "Das Bureau weiß, dass die HMCG die Crew anheuerte. Es hält sie für eine Fassade der Amatsukami (Geister aus Takamagahara, dem Himmelsreich) und weiß, dass Junjō offenbar eine Source verwandter Mythoi ist.",
      "Die Amatsukami wollen die Substanz wohl verteilen und eine „mass involuntary transcendence event“ auslösen: die ahnungslose Bevölkerung Tokyos erwecken. Das ist so verrückt, wie es klingt, aber typisch kami. Es ist unumkehrbar und gesellschaftsverändernd und muss verhindert werden. Wo die Substanz freigesetzt werden soll, weiß Ishikawa nicht.",
      "Das Bureau wahrt das Gleichgewicht zwischen Himmel und Erde, damit menschliche Angelegenheiten harmonisch weiterlaufen. Dass auf Erden derzeit wenig harmonisch ist, streitet sie nicht ab, aber der Himmel, der die Natur der Menschheit komplett ändert, bringt nur größeres Ungleichgewicht. Die kami müssen im Zaum gehalten werden.",
      "Die Drohnen haben einen Anstieg von **tengu**-Söldnern im Bezirk bemerkt. Ishikawa erklärt, was ein tengu ist (siehe Kaze Security Trooper, Tokyo S. 121). Das Bureau vermutet, dass die Amatsukami sie zum Beschaffen von Junjō oder zum Versprühen aus der Luft einsetzen.",
      "Das Bureau will Junjō an einen Ort bringen, an dem es für immer sicher versiegelt werden kann. Wo und wie, verrät Ishikawa erst, wenn die Crew sicher auf ihrer Seite steht."
    ]},
    {t:"h", x:"Was Ishikawa zurückhält"},
    {t:"p", x:"Manches kann ein kluger Charakter erschließen, den Rest kann man im Gespräch überzeugen:"},
    {t:"liste", items:[
      "Sie sagt es nicht offen, aber die Crew hat sich fähiger erwiesen als die meisten ihrer verfügbaren Inspektoren (viele sind es nicht). Sie hat weder die Zahl noch die Qualität an Leuten, um den Koffer unterwegs zu bewachen, und braucht die Crew dafür.",
      "Die Substanz muss zum **House of Zen** (kleinere lokale Version des House of Kami, Tokyo S. 154): der Zen Garden Skybridge im Tokyo Cascade. Dort stehen Statuen mit versiegelten yōkai, versteckt in aller Öffentlichkeit. Die Brücke wurde gewählt, weil sie ein mystischer Brennpunkt mit genug Kraft ist, gefährliche Sources zu binden.",
      "Dort ruht aktuell eine versiegelte Source des Mythos **Amenonuhoko** („Der Himmlische Juwelenspeer“). Aus dem Steingefängnis befreit, kann der Speer die mythische Kraft von Junjō aufheben, sodass sie sich versiegeln oder sogar zerstören lässt.",
      "Eine Figur mit passendem esoterischem Wissen kann folgern, dass der Speer die Kraft von Junjō auch **verstärken** kann, wie die Amatsukami es planen. Teilt sie das mit Ishikawa, ist diese beeindruckt (und merkt sich, die Figur im Auge zu behalten)."
    ]},
    {t:"h", x:"Ausgang des Gesprächs"},
    {t:"liste", items:[
      "Bietet die Crew ihre Hilfe an und hält Ishikawa sie für vertrauenswürdig, befiehlt sie mit Autorität, motiviert sie mit einer Rede oder engagiert sie (je nachdem, was überzeugender wirkt), und erklärt ihren Plan (wie oben).",
      "Bittet die Crew um Bedenkzeit, lässt Ishikawa sie nachdenken und Belege prüfen. Sie verspricht aber, vor dem Gehen eine Antwort zu erwarten. Sie rechnet mit einem Amatsukami-Zug bei Einbruch der Nacht (am nächsten Tag, falls es Nacht ist).",
      "Lehnt die Crew ab, besteht sie aus Gründen der Megacity-Sicherheit auf Übergabe. Bei Verweigerung wird sie nicht feindselig, warnt aber, bald wiederzukommen, und nicht allein: im Meatspace, Cyberspace oder Otherscape.",
      "Sind PCs vom Plan der kami eingenommen oder überlegen es (enlightened- oder seeing-the-light-Status) und Ishikawa merkt das, versucht sie, sie umzustimmen: Sind sie bereit, sich in eine Existenz zu verwandeln, von der sie nichts wissen? Sprich Identities, Itches und Rituals gegnerischer Mythoi an (etwa korrumpierende Mythoi). Sind sie bereit, alles loszulassen? Bereit, dieselbe Entscheidung für Millionen zu treffen?"
    ]}
  ]},
  {id:"akt3-wahl", titel:"Zeit, sich zu entscheiden & Downtime", gruppe:"Akt III", bloecke:[
    {t:"p", x:"Vor dem nächsten Akt sollte die Crew sich entscheiden. Yatagarasu und Ishikawa drängen beide: entweder der Yatagarasu helfen, die Source freizusetzen, oder dem Bureau helfen, sie für immer zu versiegeln. Natürlich kann die Crew auch keins von beiden tun: beide Seiten gegeneinander ausspielen, oder Junjō selbst nutzen oder zerstören wollen."},
    {t:"p", x:"Die Entscheidung der Crew und wie sie sie den Beteiligten mitteilt, bestimmt, wer sie in Akt IV unterstützt und wer sie jagt. Fordere eine Gruppenentscheidung und spiele auf die Motive der Crew und der einzelnen Figuren."},
    {t:"vorlesen_ref", seite:311, x:"Ein Blick auf die Megacity: Tangle-Cyberspace, Konzernsicherheit nimmt einen Obdachlosen fest, Drohnenschwärme über der Neonskyline; Millionen in sich wiederholenden Mustern, im Noise ertrinkend. Ist das zu retten, oder hat die Yatagarasu recht? Die Entscheidung rückt näher."},
    {t:"h", x:"Downtime and Loading Up"},
    {t:"p", x:"Vor dem Schicksalsteil bleibt Zeit zum Rasten und Vorbereiten: Kündige eine **Downtime**-Montage an, danach einen **Loading Up**-Moment. Vielleicht planen die PCs, wie sie den Koffer zum Tokyo Cascade bringen, und betrachten mögliche Routen."}
  ]},
  {id:"akt4-chase", titel:"Die Verfolgungsjagd", gruppe:"Akt IV", bloecke:[
    {t:"p", x:"**Akt IV: The Chase.** Auf dem Weg zum Tokyo Cascade jagen alle Parteien, die sie stoppen wollen, die Crew. Die möglichen Routen hängen vom Startpunkt und vom Zugang zu Fahrzeugen ab: in der Luft, am Boden oder durch Tunnel; hinauf zur Skybridge per Fliegen, Klettern, Aufzug oder Treppe (besonders mit einem Kumo Crawler, Tokyo S. 234). Ein Portal ist schwierig, weil der Turm von Top-Onmyōji-Zaubern geschützt ist, die nahe der Skybridge stärker werden; du kannst es aber als tracked **ritual:6** statt als Verfolgung abhandeln."},
    {t:"p", x:"Filmisch findet die Jagd in einem oder zwei dieser Momente statt (deine Wahl). Sie bieten Gelegenheit, Bezirke deiner Megacity zu zeigen; nutze besondere Orte."},
    {t:"liste", items:[
      "Ein Angriff vertreibt die Crew aus ihrem Unterschlupf.",
      "Der Gegner holt die Crew auf halbem Weg zum Cascade ein.",
      "Ein Hinterhalt wartet, als der Cascade schon in Sicht ist."
    ]},
    {t:"p", x:"Lege für jede Verfolgung ein **catch/outrun**-Limit fest (siehe Overcoming Challenges, Metro S. 107). Die Challenges hängen vom Ausgang des vorigen Aktes ab."},
    {t:"liste", items:[
      "**Unterstützer der PCs** erscheinen als Story Tags: Die PCs können Aktionen nutzen, um konkrete Hilfe zu verlangen, und **Create**n Tags wie covering fire, distraction, road block oder **Enhance**n sich mit Statuses wie warded oder accelerated, je nach den Fähigkeiten der Verbündeten. Bei starker Unterlegenheit gib zusätzliche Story Tags ohne Wurf.",
      "**Verfolger** treten als Challenges auf. Das gilt fast immer für den Maikubi-kai, der den Koffer für sich will, es sei denn, die PCs haben sich mit ihm geeinigt.",
      "**Scale:** Richtwert: alle Einheiten **Scale 2**, außer shikigami, inugami und tsuchigumo (**Scale 1**). Kollektive können in der Szene geteilt und vereint werden."
    ]},
    {t:"hinweis", titel:"Going Off Mission", x:"Verfolgt die Crew andere Pläne als den Cascade, passiert die Jagd trotzdem, nur mit beiden Seiten als Verfolgern. Ein Showdown ist weiter möglich: Die Crew sitzt zwischen Chief Inspector Ishikawa mit einem Dutzend Onmyōji und der Yatagarasu mit ebenso vielen tengu. Überlebt die Crew und entkommt mit dem Koffer, ist das ein passendes Ende: Beide Parteien müssen ihre nächsten Schritte überdenken."}
  ]},
  {id:"akt4-gegner", titel:"Gegner & Kräfte der Verfolgung", gruppe:"Akt IV", bloecke:[
    {t:"challenge", name:"Crow Tengu Murder", rating:"★★", typ:"Challenge (Kollektiv der Yatagarasu)", beschr:"Die Amatsukami haben der Yatagarasu die Fähigkeit gegeben, einen Schwarm karasu-tengu (Krähentengu) aus den Schatten der Megacity zu beschwören. Jeder erscheint als huschender Schatten; sie sammeln sich selten allein, sondern in einem lautlosen „Murder“.", limits:[{n:"Hurt or Subdue", v:2},{n:"Banish", v:2},{n:"Outrun", v:3}], tags:["weak in light","wings of gossamer shadow","Scale 2"], threats:[
      {n:"Manifest from shadows", x:"Create an illusory sound (howling sounds) oder conjure a wind (gusts of wind)."},
      {n:"Cry to the sky", x:"Alert Shinogi Security of the PCs’ presence (Present a New Challenge: Iribe-gumi Security Guard mit Scale 1)."},
      {n:"Gather in countless wings of shadow over someone", x:"Rip with solid shadow talons (bleeding-2); Put a bystander in danger (Escalate the Situation)."},
      {n:"Fly upward and gather tighter", x:"Release a tengubi, a small fireball that splits in mid-air (burned-2 auf mehrere Ziele); Conjure a tengu tsubute, unsichtbare Felsen oder Kies vom Himmel (concussed-2 oder blinded-2); Regenerate in dark shadows (reset hurt)."}
    ]},
    {t:"challenge", name:"Next-Gen Weaponized Autogyro", rating:"★★★", typ:"Challenge (Fahrzeug der Iribe-gumi)", beschr:"Rotorflugzeug der Iribe-gumi. Anders als ein Hubschrauber muss es sich immer vorwärts bewegen, ultrakurze Startstrecken sind aber möglich. Das gepanzerte Cockpit ist geschlossen und schützt den Piloten.", limits:[{n:"Wreck", v:3},{n:"Catch/Outrun", v:3}], tags:["always moving","armored","heat-seeking missile"], threats:[
      {n:"Align weapons on a target", x:"Fire a cluster of micro-missiles (wrecked-3 oder severe-burns-3); Fire front-mounted machine gun (bullet-wounds-2)."},
      {n:"Release a heat-seeking missile", x:"The missile hits (battered-4)."},
      {n:"Speed after a target", x:"Catch up to a target (gain catch-2)."}
    ]},
    {t:"h", x:"Kräfte der Parteien (Übersicht)"},
    {t:"tabelle", kopf:["Partei","Einheiten"], zeilen:[
      ["Bureau of Onmyō","Onmyōji Inspectors (Tokyo S. 156) in Bureau Patrol Vehicles (Vehicle Piloting Power Set, Metro S. 329); Shikigami (Tokyo S. 157); Yōkai-Tracking Drones (Tokyo S. 157)"],
      ["Die Yatagarasu","Shinogi Security (Security Guard, Metro S. 305, mit Iribe-gumi Power Set, Tokyo S. 227); Next-Gen Weaponized Autogyros; Crow Tengu Murder"],
      ["Just Brewing Trouble (Maikubi-kai)","Maikubi-kai Leg Breakers (Syndicate Leg Breakers, Metro S. 307, mit Maikubi-kai Power Set, Tokyo S. 227); Bōsōzoku Riders (Tokyo S. 124); Inugami (Tokyo S. 226)"]
    ], titel:"Gegner nach Seite"},
  ]},
  {id:"akt5-cascade", titel:"Der Tokyo Cascade & Cascade Plaza", gruppe:"Akt V", bloecke:[
    {t:"p", x:"**Akt V: A Bridge to Heaven.** Der Tokyo Cascade ist nicht Tokyos höchstes Gebäude, aber das höchste in seinem dicht besiedelten Mischbezirk. Nahe dem Turm: Konzernbüros, Gated Communities und Touristenattraktionen, abgeschirmt von ärmeren Wohnhäusern und billigen Kapselhotels weiter draußen. Zwei Bronzetürme mit je achtzig Stockwerken überragen die belebte **Cascade Plaza**. Die **Zen Garden Skybridge** verbindet sie im 71. Stock (in Japan fehlt der vierte, also technisch 70.). Ein riesiger holografischer Wasserfall fällt von der Brücke, projiziert von getarnten Emittern an der Brücke und den Seiten von Ost- und Westturm."},
    {t:"p", x:"Mehrere Firmen desselben zaibatsu sitzen im Gebäude, alle gut mit dem Bureau of Onmyō, das hier Büros hat (um sein House of Zen heimlich zu überwachen). Hubschrauberlandeplätze liegen oben; die Untergeschosse sind Parken, Lager und Einzelhandel und über unterirdische Fußgängertunnel mit Nachbargebäuden verbunden."},
    {t:"h", x:"Angriff auf der Cascade Plaza"},
    {t:"p", x:"Die Plaza ist ständig voll mit Touristen, die den Hologramm-Wasserfall durchwandern (er wird manchmal mit Werbefilmen oder Installationen verändert, Straßenhändler und Foodtrucks haben Genehmigungen). Sie ist weitläufig, von niedrigen Handelszentren gesäumt; im Umkreis von zwei Blocks gibt es keine anderen Wolkenkratzer."},
    {t:"p", x:"Unter der Plaza hat das Bureau eine Geheimwaffe versteckt: einen dämonisch durchdrungenen schweren **Asura-Powered Tank**. Es sieht ihn als Trumpf, doch die Yatagarasu kennt ihn und kann ihn mit Amatsukami-Magie unter großer Anstrengung anzapfen. Nähert sich die Crew dem Cascade, aktiviert die gegnerische Gruppe ihn als letzte Verteidigungslinie, um die Crew um jeden Preis zu stoppen. Schäden an Fahrzeugen, Gebäuden und Zivilisten sind schwer: zeig damit, wie weit die Opposition geht."},
    {t:"vorlesen_ref", seite:314, x:"Die Plazafläche bricht auf, Touristen fliehen, Kabel sprühen Funken; ein Panzer mit der Oberkörperfigur eines roten, vielarmigen, vielgesichtigen Wesens steigt empor, die drei Gesichter rezitieren Sanskrit und verkünden gemeinsam: „Access to this location is denied.“"},
    {t:"challenge", name:"Asura-Powered Tank", rating:"★★★★★", typ:"Challenge (gepanzertes Kampffahrzeug, Mythos)", beschr:"Gepanzertes Kampffahrzeug mit dem Mythos eines indischen asura. Die Source ist eine mannsgroße Statue im stark gepanzerten Turm, die Bewegung und Arsenal steuert. Der asura steht unter der Kontrolle eines Zauberers, der durch rituelle Opferung eines persönlichen Macht- oder Reichtumssymbols band; der Zauberer erscheint nicht, der asura befolgt seine Befehle. Die dreigesichtige Manifestation überblickt die Umgebung mit scharfen Augen, seine sechs Arme fangen Projektile oder lenken Magie auf die Quelle zurück.", limits:[{n:"Hurt or Wreck", v:6},{n:"Banish", v:5},{n:"Shutdown", v:5},{n:"Take Over", v:0}], tags:["heavy armor","massive tracks","alert-3","divine-protection-3","Scale 1"], specials:[{n:"Force of Destruction", x:"Immer wenn der Tank eine Consequence verhängt, geschieht zusätzlich Make the Future Bleaker durch Kollateralschaden."}], threats:[
      {n:"Recite mantras as it scans its surroundings with its three sets of eyes", x:"Identify a target and fire missile (entferne alle stealthiness-Statuses, entferne alle cover-Tags und verhänge wrecked-4 oder pulverized-4)."},
      {n:"Rumble over obstacles, crushing them", x:"Roll over someone (crushed-5); Arrive at a superior position (gain superior-position-2)."},
      {n:"Canon turns to face target", x:"Fire Asura-powered laser (demolished-5 oder charred-holes-5); Catch a projectile and throw it back, or reflect a magical attack (bei Fehlschlag trifft der Status, der ihm zugedacht war, den Angreifer oder ein anderes Ziel)."}
    ], extra:[{k:"Hinweis", x:"Take Over im Buch mit „–“, daher Wert 0."}]}
  ]},
  {id:"akt5-skybridge", titel:"Zen Garden Skybridge", gruppe:"Akt V", bloecke:[
    {t:"vorlesen_ref", seite:314, x:"Die Skybridge: holografische Displays um riesige Panoramafenster, ein geschmackvoll gestalteter Garten voller Pflanzen und Statuen, beruhigende Musik in der gewaltsam evakuierten Leere, ein spürbares Knistern in der Luft."},
    {t:"p", x:"Die Skybridge ist ein langer röhrenförmiger Gang/Ausstellung zwischen Ost- und Westturm und zugleich ein geheimes **House of Zen** des Bureau of Onmyō, in dem yōkai und andere mythische Gefahren in Statuen gebannt und offen ausgestellt werden. Das Bureau muss hier perfektes Feng-Shui halten; deshalb die gepflegte Gestaltung."},
    {t:"p", x:"Sie ist eine beliebte Touristenattraktion mit Eintritt. Zwei öffentliche Expressaufzüge im Ostturm führen vom Erdgeschoss hierher; im Westturm kontrolliert das Bureau zwei Personalaufzüge. Treppenhäuser sind durch alarmgesicherte Notausgangstüren geschützt, die auch von der Treppenseite verriegelt sind. Die Skybridge hat keine Zugänge von außen; viel besteht aus verstärkten Fenstern mit Rundumblick."},
    {t:"p", x:"Im Gang verbergen sich Holoprojektoren und geheime Bureau-Ausrüstung. Schutzzauber verhindern magisches Teleportieren in einem Bereich drei Stockwerke über und unter der Skybridge (spell against teleportation). Versteckte Siegel stören alle Zauber außer die der onmyōji und erzeugen **Bureau-magical interference-2**."},
    {t:"p", x:"Hier wartet der Anführer der Opposition: entweder **Chief Inspector Ishikawa Rin** (Tokyo S. 155) oder die **Yatagarasu** (Tokyo S. 308), diesmal leibhaftig."}
  ]},
  {id:"akt5-finale", titel:"Die finale Konfrontation", gruppe:"Akt V", bloecke:[
    {t:"p", x:"Je nach früherer Entscheidung versucht die Crew, Junjō freizusetzen oder zu versiegeln. Dafür muss sie die folgende Challenge bewältigen, während der Gegner dasselbe verhindert."},
    {t:"challenge", name:"The Bridge Between Heaven and Earth", rating:"★★★★", typ:"Challenge (polares Ritual-Limit)", beschr:"Das Ritual als polares Limit **spread/seal:4**. Mit steigenden Statuses beschreibst du, wie das Ritual voranschreitet; werden Tiers entfernt, stört die Gegenseite, und der Schritt muss wiederholt werden.", limits:[{n:"Spread/Seal (polar)", v:4}], tags:["hidden sigils","spell against teleportation","Bureau-magical-interference-2"], threats:[
      {n:"The Yatagarasu lifts a hand to make some of the Junjō drift toward a PC", x:"The substance touches the PC (enlightened-6)."},
      {n:"Onmyōji mystical chimes are heard over the din of battle", x:"The Bureau reinforce their sigils or seal away one of the Yatagarasu’s minions (renew base tags oder burn a tag, das Hilfe für die Crew darstellt)."},
      {n:"The opposition forces start the next step in their plan or push forward on the crew’s side to disrupt them", x:"The crew’s side loses the Spear or the briefcase (Escalate the Situation); The crew’s ritual is disrupted, or the opposition side’s ritual is progressing (spread-1 oder seal-1)."},
      {n:"A vision of the kami’s realm becomes briefly visible through the holographic waterfall, its presence growing", x:"In the presence of heaven, Takamagahara, a PC comes to know new truths (enlightened-6); Divine protection blesses the Yatagarasu and her cause (sie und ihre Minions erhalten kami-guarded-2); The security systems become more aggressive (füge ein Security-Story-Tag hinzu, z. B. gun turrets, foam fire suppressant oder wireless jammer); A massive outpouring of magical energy is released (cursed-3 oder blasted-3 in einem Bereich, oder burn a Mythical tag)."}
    ]},
    {t:"p", x:"Zu Szenenbeginn hat die Opposition den Speer gerade aus seiner Statue befreit: Sie hat **Amenonuhoko**, die Crew wahrscheinlich den Koffer. Jede Seite braucht beide Gegenstände, um ihren Plan voranzubringen, daher geht es oft hin und her, während sich beide den Besitz abjagen."},
    {t:"p", x:"Die Kontaktperson der Crew (Ishikawa oder die Yatagarasu) liefert alle nötige Führung für das Ritual, notfalls per AR, Ohrstöpsel oder anderes Fernkommunikationsmittel. Direkte Hilfe, etwa durch ein Onmyōji-Inspectors-Team, kann bei Teilen wertvoll sein, etwa beim Bannkreis zum Wiederversiegeln des Speers."},
    {t:"h", x:"Junjō verbreiten"},
    {t:"p", x:"Der Speerkopf wird gründlich mit der Substanz überzogen und unter kräftigen Gebeten durch die verstärkten Fenster geworfen. Der Speer kreist dann in der Luft, wie von unsichtbarer Hand geführt, während die Yatagarasu singt, und lässt Junjō als Nebel über den Bezirk regnen, was mehrere Minuten dauert. Der Speer ist unzerbrechlich, aber man kann seine Magie unterdrücken, ihn einfangen oder die Yatagarasu aufhalten, um die Ausbreitung mittendrin zu stoppen."},
    {t:"h", x:"Junjō versiegeln"},
    {t:"p", x:"Amenonuhokos Kopf wird mit etwas Junjō überzogen und in einen Bannkreis gestellt, aufgeladen durch mächtige Mantras oder gestempelte ofuda-Talismane, um ihn in eine Steinstatue zurückzusiegeln. Es reicht, wenn eine Probe der Substanz mit dem Speer versiegelt wird; der Rest verliert seine magische Kraft und wird inert."},
    {t:"h", x:"Begleiter und Rückzug"},
    {t:"p", x:"Die gegnerische Anführerin hat eine **Scale-2**-Gruppe Gefolgsleute dabei: **Onmyōji Inspectors** (Tokyo S. 156) oder **Crow Tengu Murder**. Keine der beiden kämpft bis zum Tod ihrer ganzen Seite, und keiner liegt etwas an der Zerstörung der Skybridge: Beide wissen, dass die größere Schlacht noch aussteht. Wirkt sie dem Verlust nahe, sagt die Gegnerin ein paar Abschiedsworte („Das ist noch nicht vorbei.“) und entkommt auf schwarzen Schwingen oder im fliegenden Wagen."}
  ]},
  {id:"aftermath", titel:"Aftermath", bloecke:[
    {t:"p", x:"Wie es auch endet: Die Folgen sollen bleibend sein."},
    {t:"liste", items:[
      "**Junjō versiegelt:** Die Amatsukami ziehen sich zurück; offenbar war die Menschheit nicht bereit für ihr Geschenk (oder hat eine andere Macht eingegriffen?). Sie schicken einige loyale Diener, die Crew mehrere Monate auszuspähen, ob sie unter korrumpierendem Einfluss steht. Vielleicht wenden sie sich an **Great King Enma** (Tokyo S. 168), um die Crew zu prüfen. Die Chief Inspector ist vermutlich genug beeindruckt, um bei künftigen heiklen Angelegenheiten wieder auf sie zuzugehen, und bietet einigen vielleicht einen Job im Bureau an. Erinnere die Crew bei Ungerechtigkeit und Verderbtheit der Menschheit an ihre Entscheidung, die Erleuchtung abzulehnen.",
      "**Junjō geöffnet, aber nicht voll freigesetzt:** Einige hundert Menschen rund um die Türme werden verwandelt, die Brücke bildet sich nicht. Die Amatsukami erkennen, dass die Menschen zu abgelenkt sind, um sich über den Noise zu erheben, und planen eine physischere Himmelfahrt: Sie investieren in Baufirmen, um einen Weltraumaufzug auf dem Fuji zu bauen, dessen anderes Ende in den Himmel reicht. Die Yatagarasu bietet der Crew an, dauerhaft für sie zu arbeiten, während die Chief Inspector sie genau beobachtet.",
      "**Junjō von der Skybridge freigesetzt:** Zehntausende im Bezirk werden verwandelt wie die Techniker im Maikubi-Labor; der ganze Bezirk wird von der **Nano-butai** unter Quarantäne gestellt. Noch dramatischer: Vom Tokyo Cascade öffnet sich eine unsichtbare, dauerhafte Brücke in die Geisterwelt, aus der neugierige kami strömen. Yōkai-Probleme im Bezirk und drumherum werden deutlich schlimmer. Später gehen die Amatsukami gegen die Nano-butai vor, um die Quarantänezone zu öffnen, die zu einem himmlisch fortgeschrittenen Modell einer erleuchteten Gesellschaft wird, aber mit entsprechend spirituellen Problemen ringt."
    ]},
    {t:"hinweis", titel:"Schreibweise im Original uneinheitlich", x:"Kushikatsu Odoroki/Orodoki (Stall), Junjō/Jungō (Überschrift „Studying Jungō“), Ishikawa/Ishikaw (Tippfehler), Amenonuhoko (Speer) und Ame-no-ukihashi/Ameno-ukihashi (Brücke). Hier einheitlich: Kushikatsu Odoroki, Junjō, Amenonuhoko, seeing-the-light, Ishikawa. Außerdem im Original: Tag „superior-positioning-4“ (Yatagarasu) neben „superior-position-2“ (Tank); beide wie gedruckt übernommen. Die Übersichtsbox der Verfolgungsgegner enthält zudem eine einzelne Zeile „Thick and impenetrable tropical foliage.“ ohne erkennbaren Bezug (vermutlich Layoutrest)."}
  ]}
]);
