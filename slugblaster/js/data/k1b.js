/* SLUGBLASTER – Nachschlagen · Spielablauf, Teil 2: Beats (S. 24–25), Gelegenheiten & Herausforderungen (S. 26–27), Touren (S. 28–29).
   Die Tabellen kommen aus momente.js, gelegenheiten.js und touren.js (eine Quelle, gleicher Text wie auf der Folge-Tafel); hier steht nur der übrige Buchtext. */
(function(){
  function sec(id){ var r = null; SB_REGELN.s.forEach(function(s){ if(s.id === id) r = s; }); return r; }
  sec("beats").g = [
   {s:2, b:[{t:"box", h:"Freies Rollenspiel", c:"lila", x:["Während des freien Rollenspiels der Downtime-Phase wirst du zum Regisseur deiner eigenen Szenen. Vergiss die Würfel und erzähl uns einfach eine Geschichte. Die SL und die anderen Spieler sind da, um dir zu helfen. Erzähl ihnen deine Vision und frag sie nach Ideen. Beantworte ihre Fragen. Besetze sie als NSC und spielt die Szene wie Schauspieler in einem Film. Falls das nicht dein Ding ist, geh den anderen Weg und beschreibe die Szene wie ein Autor, füge Details hinzu und zeig uns, was die Charaktere denken und fühlen."]}]},
   [{t:"h", x:"Beats"},
    {t:"p", x:"Klar, in Slugblaster geht es meist darum, mit dem Hoverboard vor Monstern zu fliehen, aber auch darum, Hausarbeiten zu erledigen und darauf zu warten, dass die Jeans fertig trocknet. Die Downtime-Phase lässt dich einen Teil dieser aufregenden Banalität erkunden, während ihr abwechselnd ein paar Momente beschreibt und ausspielt, die in der Woche oder so nach eurem Run zurück in Hillview stattfinden, oft angestoßen durch Beats."},
    {t:"ul", x:["Beats sind Momente, die du mit deinem Trouble und Style kaufen kannst, um die Geschichte anzutreiben, deinen Charakter voranzubringen und Rollenspielszenen anzustoßen.","Die bei jedem Beat angegebenen Kosten sind die Menge Style bzw. Trouble, die du löschst, um ihn zu kaufen.","Beats mit Trouble-Kosten kannst du immer kaufen, auch wenn du sie dir nicht leisten kannst. Dein Begräbnis, Freundchen.","Eigenschafts- und Bogen-Beats kann man nur einmal kaufen. Bogen-Beats müssen in absteigender Reihenfolge gekauft werden, und pro Bogen nur einer je Downtime. Für alle anderen Beats gelten diese Grenzen nicht. Kauft von mir aus sechsmal *In der Werkstatt* auf einmal."]}],
   [{t:"h", x:"Familien-Bogen"},
    {t:"p", x:"Slugblasting wird von der Gesellschaft nicht gerade begrüßt. Wie bei Alkohol unter Minderjährigen, Rapmusik oder dem Essen von Tide Pods gehen die Meinungen weit auseinander – die moralische Panik des Jahrhunderts, ein heikles gesellschaftliches Thema oder einfach Kids, die Kids sind. Aber selbst wenn deine Familie völlig desinteressiert oder erstaunlich nachgiebig ist, gibt es immer irgendeinen Weg, Ärger zu bekommen."},
    {t:"mom", k:"familie"}],
   [{t:"h", x:"Eigenschafts-Beats"},
    {t:"p", x:"Mit euren Freunden durch instabile Portale ins Kuckuck-Bananen-Land zu schlagen, ist vielleicht nicht der effizienteste Weg zur Uni-Zulassung, aber es lehrt dich einiges darüber, wer du bist!"},
    {t:"mom", k:"eig"},
    {t:"note", x:"Jede Persönlichkeit hat außerdem einen eigenen Eigenschafts-Beat! Siehe S. 43–51."},
    {t:"h", x:"Weitere Beats"},
    {t:"p", x:"So viel zu tun, so wenig Raumzeit. Weitere Beats findest du unten sowie bei den Signaturen (S. 52), der Karte (S. 91) und jeder Persönlichkeit (S. 43–51)."},
    {t:"mom", k:"weitere"}],
   [{t:"h", x:"Crew-Beats"},
    {t:"p", x:"Am Ende dreht sich bei Slugblaster alles um Freundschaft. Eure Crew wird auf dem Weg zum Starruhm viele Höhen und Tiefen erleben. Was wird euch durch all das zusammenhalten?"},
    {t:"mom", k:"crew"},
    {t:"note", x:"Und mich, der seit dem Alter von 24 eine Midlife-Crisis hat."}],
   [{t:"h", x:"Angst-Bogen"},
    {t:"p", x:"Diese Jahre können hart sein. Deine Mutter nervt dich ständig, dein Körper verändert sich, und Metaterrestrier lösen weiter deine Moleküle auf! Irgendwann ist der Stress selbst für die chilligsten Bros zu viel."},
    {t:"p", x:"Ob Liebeskummer, pubertäre Unsicherheit (Erwachsene fühlen sich nie unsicher, klar) oder die existenzielle Angst, die vom Blick auf die Unendlichkeit des Multiversums kommt – es wird für dich und die Menschen um dich herum hart."},
    {t:"mom", k:"angst"},
    {t:"box", h:"Wenn es ernst wird", c:"lila", x:["Angst- und Familien-Beats können spaßig, klischeehaft und sogar therapeutisch sein, aber sie können auch *schwer* werden. Denkt daran, entspannt zu bleiben und euch gegenseitig zu fragen, wie es euch geht. Ich empfehle aus demselben Grund außerdem, *Script Change* (S. 146) zu nutzen. Viele Menschen hatten eine schwere Teenagerzeit und wollen das vielleicht gerade nicht wieder durchleben, besonders nicht, während ihr mit vollem Mund voller Chips Witze reißt, Cody."]}],
   [{t:"h", x:"In der Werkstatt"},
    {t:"mom", k:"werkstatt"}]
  ];
  sec("ereignisse").g = [
   [{t:"h", x:"Gelegenheiten"},
    {t:"p", x:"Die Spieler würfeln 1W6 und addieren optional:"},
    {t:"gel", k:"g", m:true}],
   [{t:"h", x:"Herausforderungen"},
    {t:"p", x:"Die SL würfelt 1W6 und addiert optional:"},
    {t:"gel", k:"h", m:true}],
   {s:2, b:[{t:"gel", k:"g"}]},
   {s:2, b:[{t:"gel", k:"h"}]}
  ];
  sec("touren").g = [
   [{t:"ul", x:["Jeder Run sollte ein Ziel haben, einen Preis fürs Erreichen dieses Ziels und mindestens ein Start-Hindernis (S. 154), das ihr überwinden müsst.","Ihr könnt mehrere Preise oder eine Art besonders großen Mega-Preis (etwa das Doppelte eines normalen Preises) anstreben. Diese Runs sollten dann schwerer sein, mit mehr Start-Hindernissen oder zusätzlichem Bite für die SL (S. 145).","Nutzt die hier enthaltenen Run- und Preisideen, schaut euch die Besonderen Orte jeder Welt an (S. 96–112) oder denkt euch selbst etwas aus!"]},
    {t:"box", h:"Spielergetrieben", c:"lila", x:["Slugblaster ist ein Sandbox-Spiel, das von den Spielern getrieben wird. Die SL muss keine Handlung ausarbeiten oder eine Reihe von Missionen für die SC zusammenkochen.","Stattdessen beschreibt die SL die Welt wie einen Spielplatz, und die Spieler schwärmen aus und klettern mit ihren klebrigen Eis-am-Stiel-Fingern auf allem herum, angetrieben von den Zielen ihrer Charaktere und davon, was glänzt. *Sie* erschaffen die Handlung. *Sie* denken sich die Missionen aus.","Die SL gibt nur ein wenig Orientierung, ein paar Hindernisse und viele Konsequenzen.","Wenn die Spieler beschließen, Energiekristalle zu finden, schlägt die SL vor, wo sie suchen könnten. Wenn sie beschließen, eine Party zu schmeißen, denkt sich die SL ein paar Snags aus. Wenn sie eine Fraktion verärgern, sorgt die SL dafür, dass diese Fraktion Rache plant.","Wie John Harper in *Blades in the Dark* sagt: „Aktion, Reaktion und Konsequenzen treiben alles an.“"]}],
   [{t:"w66"}],
   [{t:"preise"},
    {t:"note", x:"Ein Skater-Begriff dafür, sich an die Stoßstange eines Autos zu hängen und mitzufahren."}]
  ];
})();
