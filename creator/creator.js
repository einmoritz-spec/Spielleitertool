/* ============================================================
   DATEN — identisch zur "Wake of the Oldways Erzähler-Tafel":
   120 Theme Kits (Core Book S. 92–130) + 30 Tropes (S. 82–91),
   vollständig ins Deutsche übersetzt. Siehe DOKUMENTATION.md des
   Haupttools für Herkunft/Extraktionsmethode dieser Daten.
   ============================================================ */
const THEMEBOOK_QUESTIONS = [
  { id:"origin", title:`Origin Themebook`, subtitle:`Herkunfts-Themen (+ Companion/Magic/Possessions, S. 92–104 & 126–130)`, icon:"leaf", entries:[
    { key:"circumstance", term:`Circumstance`, sub:`Lebenssituation`, aspects:`Hintergrund, Stand, besondere Lage, Lebensweg`,
      power:[["A",`In welcher Lage befindest du dich?`], ["B",`Welche Mittel oder Insignien deiner Stellung trägst du?`], ["C",`Wen kannst du dank deiner Lage um Hilfe bitten?`], ["D",`Welche sozialen Fähigkeiten hast du entwickelt?`], ["E",`Wie nutzt du deine Lage, um aus Ärger herauszukommen?`], ["F",`Wo triffst du auf Leute deines Standes?`], ["G",`Welches Recht oder Privileg bringt deine Lage mit sich?`], ["H",`Welches Wissen ist Leuten in deiner Position eigen?`]],
      weak:[["A",`Was ist die größte Herausforderung deiner Lage?`], ["B",`Was an deiner Lage verachten oder meiden andere?`], ["C",`Welche Orte oder Situationen sind dir verwehrt?`], ["D",`Wie behandeln andere dich häufig schlecht?`]],
      quest:`dich beweisen trotz deines Standes; ein Vorbild deiner Rolle werden; ein Kodex, dem du folgst.`,
    },
    { key:"people", term:`People`, sub:`Herkunft, Volk`, aspects:`Abstammung, Erbe, Kultur, Volk`,
      power:[["A",`Wie nennen sich dein Volk oder seine Mitglieder?`], ["B",`Welches körperliche Merkmal deines Volkes dient dir am besten?`], ["C",`Welche Technik oder welcher Kniff wird bei euch gepflegt?`], ["D",`Welchen Gegenstand von kultureller Bedeutung trägst du?`], ["E",`Welches Wissen teilen die Deinen?`], ["F",`Woher kommt dein Volk, wo fühlt es sich wohl?`], ["G",`Wen unter den Deinen rufst du in der Not?`], ["H",`Welcher Kampfstil oder welche Waffe ist bei euch üblich?`], ["J",`Welche besondere oder übernatürliche Gabe hat dein Volk?`]],
      weak:[["A",`Welche Not deines Volkes trifft dich am meisten?`], ["B",`Was sät Zwietracht unter den Deinen?`], ["C",`Wann hindern dich eure Bräuche oder ererbten Züge?`], ["D",`Von wem wird dein Volk am stärksten mit Vorurteilen belegt?`]],
      quest:`das Ethos deines Volkes leben; die Deinen erheben oder aus ihrer Not führen; eine alte Weissagung erfüllen.`,
    },
    { key:"skill_or_trade", term:`Skill or Trade`, sub:`Handwerk, Können`, aspects:`Handwerk, Hobby, Talent, Beruf, geübte Fertigkeit`,
      power:[["A",`Welches Handwerk oder Können beherrschst du?`], ["B",`Welche Technik darin ist deine Spezialität?`], ["C",`Welches Werkzeug oder Outfit gehört fest dazu?`], ["D",`Wer schätzt oder braucht deine Fähigkeiten am meisten?`], ["E",`Welche ungewöhnliche Anwendung hast du dafür gefunden?`], ["F",`Unter welchen Bedingungen arbeitest du am sichersten?`], ["G",`Wie senkst du das Risiko von Fehlern oder Schaden?`], ["H",`Worauf achtest du mehr, weil du dein Handwerk kennst?`], ["J",`Welche Überzeugung treibt dich an, es zu üben?`]],
      weak:[["A",`Welche Aufgabe liegt weit jenseits deines Könnens?`], ["B",`Welche Bedingungen erschweren dir dein Handwerk?`], ["C",`Wie verzerrt dein Können deine Wahrnehmung oder deinen Umgang?`], ["D",`Wo sind Leute deines Fachs unwillkommen?`]],
      quest:`deinen Lebensunterhalt sichern; ein berufliches Prinzip wahren; deutlich besser werden.`,
    },
    { key:"trait", term:`Trait`, sub:`Eigenschaft`, aspects:`Körperliches Merkmal, geistige Eigenschaft, besondere Gabe`,
      power:[["A",`Was ist dein prägendster Wesenszug?`], ["B",`Wie setzt du diesen Zug typischerweise ein?`], ["C",`Wie hält dieser Zug dich in Sicherheit?`], ["D",`Welcher Gegenstand oder Verbündete holt das Beste daraus?`], ["E",`Was kannst nur du mit diesem Zug?`], ["F",`In welcher Situation ist er besonders nützlich?`], ["G",`Welche Fähigkeit hast du entwickelt, um ihn auszureizen?`], ["H",`Was nimmst du wahr, das andere nicht bemerken?`], ["J",`Wie verbirgst du diesen Zug, wenn nötig?`]],
      weak:[["A",`Was passiert, wenn du diesen Zug überstrapazierst?`], ["B",`Wer beneidet, begehrt oder verspottet ihn?`], ["C",`Was ist die offensichtlichste Schwachstelle dieses Zuges?`], ["D",`Wann ist dein Zug völlig nutzlos?`]],
      quest:`ein Glaube, den dein Zug dir gab; ein Verhalten, das ihn betont oder verbirgt; die Quelle deiner Gabe ergründen.`,
    },
    { key:"personality", term:`Personality`, sub:`Wesen, Art`, aspects:`Temperament, Aura oder Stil, typisches Verhalten, inneres Selbst`,
      power:[["A",`Welcher Wesenszug ist am zentralsten für dich?`], ["B",`In welchen Situationen glänzt dein Wesen wirklich?`], ["C",`Wie beeinflusst du andere Menschen?`], ["D",`Welcher Gegenstand oder welches Kleidungsstück drückt deinen Stil aus?`], ["E",`Welches soziale Talent besitzt du?`], ["F",`Worauf greifst du unter Stress zurück?`], ["G",`Was ist eine unerwartete, aber nützliche Facette deines Wesens?`], ["H",`Wie unterstützt oder hilfst du anderen?`], ["J",`Wie hilft dir dein Blick auf die Welt, Dinge zu durchschauen?`]],
      weak:[["A",`Wann bringt dein Wesen dich in Schwierigkeiten?`], ["B",`Was ist eine hässliche Seite deines Wesens?`], ["C",`Zu welchem unerwünschten Verhalten drängt es dich?`], ["D",`Wen findest du unerträglich, oder wer dich?`]],
      quest:`ein Leitspruch, der deine Sicht fasst; etwas, das du tun musst, um dir treu zu sein; ein selbstgesetztes Ziel.`,
    },
    { key:"devotion", term:`Devotion`, sub:`Hingabe`, aspects:`Wichtige Bindung, Verpflichtung gegenüber Gruppe oder Ideal`,
      power:[["A",`Wem oder was bist du verschrieben?`], ["B",`Welche Handlung setzt du am häufigsten für deine Hingabe ein?`], ["C",`Welches Gefühl gibt dir deine Hingabe, auf das du zurückgreifen kannst?`], ["D",`Welchen Gegenstand trägst du, der deine Hingabe symbolisiert?`], ["E",`Wo oder wann fühlst du dich deiner Hingabe am nächsten?`], ["F",`Wobei hilft dir das, dem du verschrieben bist, häufig?`], ["G",`Welche Eigenschaft an dir zeigt deine Hingabe am deutlichsten?`], ["H",`Wie verhältst du dich in Gesellschaft wegen deiner Hingabe?`], ["J",`Welches Ritual oder welche Gewohnheit zeigt deine Hingabe?`]],
      weak:[["A",`Wofür bist du blind wegen deiner Hingabe?`], ["B",`Welche Pflichten kosten dich ständig Zeit oder Mittel?`], ["C",`Zu welchem unschönen Verhalten verleitet dich deine Hingabe?`], ["D",`Was bedroht häufig das Ziel deiner Hingabe?`]],
      quest:`ein klares Bekenntnis zu deiner Hingabe; ein Ziel, das all die Opfer rechtfertigt; eine Aufgabe, die du für sie erfüllen musst.`,
    },
    { key:"past", term:`Past`, sub:`Vergangenheit`, aspects:`Prägendes Ereignis, frühere Erfahrung, Trauma oder Glücksfall`,
      power:[["A",`Welches Ereignis aus deiner Vergangenheit hat dein Leben geprägt?`], ["B",`Welche wichtige Lehre hast du daraus gezogen?`], ["C",`Welche Kleidung oder Ausrüstung hast du seitdem behalten?`], ["D",`An welches Andenken hältst du fest?`], ["E",`Wen aus deiner Vergangenheit kannst du noch um Hilfe bitten?`], ["F",`In welcher Situation aus deiner Vergangenheit bist du besonders geübt?`], ["G",`Welchen Ruf hast du dir vor Ort erworben?`], ["H",`Welche geheime Fähigkeit hast du dabei erlernt?`], ["J",`Mit welcher Gruppe oder Kultur fühlst du dich seither verbunden?`]],
      weak:[["A",`Welches hässliche Geheimnis trägst du aus deiner Vergangenheit mit dir?`], ["B",`Welche Person oder Gruppe von früher ist dir noch immer auf den Fersen?`], ["C",`Welche Situationen wecken schmerzhafte Erinnerungen?`], ["D",`Welche körperlichen oder seelischen Spuren hat deine Vergangenheit hinterlassen?`]],
      quest:`eine Lehre oder ein Schwur aus deinem früheren Leben, dem du noch folgst; der Wunsch, Verlorenes zurückzugewinnen oder die Vergangenheit hinter dir zu lassen; eine offene Frage aus der Vergangenheit, die dich verfolgt.`,
    },
    { key:"companion", term:`Companion`, sub:`Begleiter`, aspects:`Verbündeter, Beschützer, Weggefährte, Tier, jemand dem du folgst oder der dir folgt`,
      power:[["A",`Wer steht dir regelmäßig zur Seite und unterstützt dich?`], ["B",`Was ist die nützlichste Eigenschaft oder Fähigkeit deines Begleiters?`], ["C",`Wie befreit dich dein Begleiter aus der Klemme?`], ["D",`Was macht ihr beide besonders gut zusammen?`], ["E",`Wo geht ihr hin, um euch zu entspannen oder etwas zu erledigen?`], ["F",`Was ist der Signaturzug oder Trick deines Begleiters?`], ["G",`Welchen nützlichen Gegenstand hat dein Begleiter immer griffbereit?`], ["H",`Wie helft ihr euch gegenseitig, euch zu erholen oder zu verbessern?`], ["J",`Welche Einstellung oder Vorgehensweise hat dein Begleiter?`]],
      weak:[["A",`Wie bringt dich dein Begleiter in Ärger oder Gefahr?`], ["B",`Was ist die nervigste Eigenschaft deines Begleiters?`], ["C",`Was sorgt dafür, dass dein Begleiter nicht verfügbar ist?`], ["D",`In welcher Situation ist dein Begleiter am wenigsten nützlich?`]],
      quest:`dein Einsatz für das Wohl deines Begleiters; eine gemeinsame Aufgabe, die ihr lösen wollt; die Suche deines Begleiters, die du unterstützt, um ihn an deiner Seite zu behalten.`,
    },
    { key:"magic", term:`Magic`, sub:`Magie`, aspects:`Zauberei und Hexenkunst, angeborene magische Gabe, Macht von Göttern oder Geistern verliehen`,
      power:[["A",`Was ist die Natur, Kunst oder Ausdrucksform deiner Magie?`], ["B",`Auf welches Gebiet oder welche Art von Magie hast du dich spezialisiert?`], ["C",`Welchen bestimmten Zauber oder magischen Kniff nutzt du regelmäßig?`], ["D",`Was ist anders oder besonders an deiner Art, Magie einzusetzen?`], ["E",`Welchen persönlichen Stil hast du deiner Magie gegeben?`], ["F",`Welches Wissen über diese Form der Magie hast du dir angeeignet?`], ["G",`Unter welchen Bedingungen ist deine Magie am stärksten?`], ["H",`Welchen Gegenstand oder welches Material nutzt du, um deine Magie zu verstärken?`], ["J",`Welchen sozialen Vorteil bringt dir deine Magie?`]],
      weak:[["A",`Unter welchen Bedingungen oder gegen welche Ziele wirkt deine Magie schlecht?`], ["B",`Was braucht deine Magie, um gut zu funktionieren?`], ["C",`Welche Nebenwirkungen hat der Besitz oder Einsatz deiner Magie?`], ["D",`Wie erschwert dir deine Magie das Leben?`]],
      quest:`ein heiliger Eid, ein Fluch oder ein magisches Gesetz, das dich bindet; eine Vision dessen, was du erreichen könntest, wenn du deine Magie weiterentwickelst; ein Ritual oder Gebet, um deine Magie zu erhalten oder aufzufrischen.`,
    },
    { key:"possessions", term:`Possessions`, sub:`Besitz`, aspects:`Ausrüstung, ein besonderer Gegenstand, Besitztümer, Vermögenswerte`,
      power:[["A",`Was ist dein wichtigster Besitz oder materielles Mittel?`], ["B",`Welche nützliche Eigenschaft oder Besonderheit hat er?`], ["C",`Welchen ergänzenden oder verwandten Gegenstand besitzt du?`], ["D",`Wie nutzt du deinen Besitz für gewöhnlich?`], ["E",`Welchen überraschenden geheimen Zweck oder Trick hat dieser Gegenstand?`], ["F",`Für welche Situationen oder Bedingungen wurde er entworfen?`], ["G",`Wie pflegst, reparierst oder erhältst du deinen Besitz?`], ["H",`Welche Erinnerung oder welches Gefühl weckt dieser Besitz in dir?`], ["J",`Welche Machart, welchen Stil oder welchen Qualitätsstandard hat der Gegenstand?`]],
      weak:[["A",`Was ist ein Makel oder Nachteil deines Besitzes?`], ["B",`Was führt dazu, dass dein Besitz repariert oder gepflegt werden muss?`], ["C",`Wie überstrapazierst oder missbrauchst du deinen Besitz?`], ["D",`Was übersteigt die Fähigkeiten oder Grenzen deines Besitzes?`]],
      quest:`eine Routine oder Beziehung, die du pflegen musst, um deinen Besitz zu behalten; ein Ziel oder eine Aktivität, zu der dich dieser Gegenstand antreibt; das Bestreben, deinen Besitz zu verbessern oder bessere Versionen davon zu erlangen.`,
    },
  ]},
  { id:"adventure", title:`Adventure Themebook`, subtitle:`Abenteuer-Themen (S. 106–116)`, icon:"swords", entries:[
    { key:"duty", term:`Duty`, sub:`Pflicht`, aspects:`Eid, große oder gewaltige Aufgabe, Unternehmung, Verantwortung`,
      power:[["A",`Was ist die Aufgabe, das Ziel oder Ideal, dem du dich so pflichtbewusst verschrieben hast?`], ["B",`Welche Charaktereigenschaft ist entscheidend, um diese Pflicht zu übernehmen?`], ["C",`Wie verkündest du deine Pflicht oder überzeugst andere von ihrer Bedeutung?`], ["D",`Wer oder was steht dir dank deines Engagements zur Verfügung?`], ["E",`Welche nützliche Ressource oder welches Werkzeug braucht es zur Erfüllung dieser Pflicht?`], ["F",`Welche rechtlichen oder sozialen Privilegien oder Ausnahmen gelten für dich?`], ["G",`Was sind die Waffen, die Rüstung oder die Insignien deiner Pflicht?`], ["H",`Wo patrouillierst du, hältst du Amt, oder erfüllst du deine Pflichten?`], ["I",`Wie kommst du bei den Schutzherren dieser Pflicht gut an?`], ["J",`Was hält dich auf dem rechten Weg, wenn du verzweifelst oder schwankst?`]],
      weak:[["A",`Wer oder was widersetzt sich dir bei dieser Aufgabe?`], ["B",`Welche persönliche Schwäche wirft dich auf dem Weg zur Erfüllung deiner Pflicht zurück?`], ["C",`Wer ist dein Rivale oder Herausforderer für diese Verantwortung?`], ["D",`Welches negative Gefühl weckt deine Pflicht in dir?`]],
      quest:`Der Eid, den du geschworen hast, oder der Glaube, der dich antreibt; die Art, wie du dich verhältst, um deine Pflicht aufrechtzuerhalten; ein Erlass oder Auftrag einer höheren Autorität.`,
    },
    { key:"influence", term:`Influence`, sub:`Einfluss`, aspects:`Schlüsselposition, Autorität über andere, Kontakte & Agenten, persönliche Macht`,
      power:[["A",`Was verleiht dir Macht und Einfluss über andere?`], ["B",`Was ist die häufigste Aufgabe oder der häufigste Dienst, den Leute für dich erledigen?`], ["C",`Wer sind deine Gefolgsleute, Diener, Fußsoldaten oder Agenten?`], ["D",`Was ist die wirkungsvollste Art, wie du Einfluss ausübst?`], ["E",`In welchem Bereich ist dein Einfluss am stärksten?`], ["F",`Welche Vorteile oder Mittel hast du dank deines Einflusses gewonnen?`], ["G",`Wer ist am empfänglichsten für deinen Einfluss?`], ["H",`Wie vergrößerst du die Reichweite deines Einflusses?`], ["I",`Wie brichst du den Widerstand anderer?`], ["J",`Wie schützt du dich vor dem Einfluss anderer?`]],
      weak:[["A",`Wer widersetzt sich deinem Einfluss, ignoriert ihn oder ist immun dagegen?`], ["B",`Was tust du, das deine eigene Macht untergräbt?`], ["C",`Mit wem gerätst du wegen deines Einflusses aneinander?`], ["D",`Was liegt außerhalb deines Einflussbereichs?`]],
      quest:`Der Grund oder die Motivation, aus der du all diesen Einfluss angehäuft hast; die Haltung oder Weltsicht, die es dir erlaubte, Macht zu gewinnen oder zu halten; ein Machtmaßstab, an dem du dich misst; ein Erlass oder Auftrag einer höheren Autorität.`,
    },
    { key:"knowledge", term:`Knowledge`, sub:`Wissen`, aspects:`Überlieferung, verborgenes oder geheimes Wissen, mystische Einsicht`,
      power:[["A",`Welches besondere Wissen besitzt du?`], ["B",`Auf welches Gebiet innerhalb deines Wissens hast du dich spezialisiert?`], ["C",`Was lässt sich mit deinem Wissen verstehen, analysieren oder erklären?`], ["D",`Was ist eine praktische Anwendung deines Wissens?`], ["E",`Welchen Vorteil hast du gegenüber denen, die dein Wissen nicht haben?`], ["F",`Wie schützt, bewahrst oder verwahrst du dein Wissen?`], ["G",`Was hast du gelernt, das an dein Wissen angrenzt?`], ["H",`Was trägst du wegen deines Wissens immer bei dir?`], ["I",`Wie sammelst, entdeckst oder erforschst du normalerweise?`], ["J",`Welche neue Grenze deines Wissens beginnst du gerade zu erforschen?`]],
      weak:[["A",`Was sind die größten Lücken in deinem Wissen?`], ["B",`Was ist dir unbegreiflich, verschleiert oder verwirrend?`], ["C",`Wer versucht, dir dieses Wissen zu stehlen, zu nehmen oder es dir zu verwehren?`], ["D",`Welche Hürden stehen dir im Weg, wenn du versuchst, dein Wissen anzuwenden?`]],
      quest:`Der Wunsch, mehr zu entdecken und dein Wissen zu vertiefen; eine Warnung zu diesem Wissen, warum es geheim gehalten oder bewahrt werden muss; der Antrieb, der dich all das lernen ließ.`,
    },
    { key:"prodigious", term:`Prodigious Ability`, sub:`Außergewöhnliche Fähigkeit`, aspects:`Seltene Gabe, bemerkenswerte Kompetenz oder Fähigkeit, verblüffende Meisterstücke`,
      power:[["A",`Wie nennt man jemanden mit deiner außergewöhnlichen Fähigkeit?`], ["B",`Was ist eine sekundäre Fertigkeit oder Eigenschaft dieser Fähigkeit?`], ["C",`Welche unglaubliche Technik oder welches Kunststück beherrschst du?`], ["D",`Wie setzt du deine Fähigkeit ein, um zu beeindrucken und zu verblüffen?`], ["E",`Welches Gefühl entfesselt dein volles Potenzial?`], ["F",`Was ist das wichtigste Werkzeug, das du bei der Ausübung deiner Fähigkeit nutzt?`], ["G",`Wie verhinderst du ein Scheitern oder gewinnst mit deiner Fähigkeit die Oberhand zurück?`], ["H",`Welchen Signature-Move oder eigenen Dreh hast du deinem Repertoire hinzugefügt?`], ["I",`Was weißt, spürst oder erkennst du, was ein Anfänger nicht könnte?`], ["J",`Was Nahezu-Wunderbares (oder wirklich Wunderbares) kannst du vollbringen?`]],
      weak:[["A",`Was ist eine Schwäche oder ein Makel deiner Fähigkeit, an dem du noch feilst?`], ["B",`Welche schlechten Angewohnheiten oder Verhaltensweisen hast du wegen deiner Fähigkeit entwickelt?`], ["C",`Unter welchen Bedingungen ist deine Fähigkeit trotz deiner Kompetenz weniger wirksam?`], ["D",`Wer grollt dir oder schikaniert dich wegen deiner Fähigkeit?`]],
      quest:`Was du tun musst, um die Beste/der Beste zu bleiben; deine Sicht auf die Verantwortung oder Last, die mit deinem Talent-Niveau einhergeht; ein hochgestecktes Ziel, das du dir als anerkannt fähige Person gesetzt hast.`,
    },
    { key:"relic", term:`Relic`, sub:`Relikt`, aspects:`Gegenstand magischer oder spiritueller Macht, seltsames Erbstück, fortschrittliches Artefakt`,
      power:[["A",`Welchen mächtigen oder mysteriösen Gegenstand besitzt du?`], ["B",`Was ist seine stärkste Kraft oder Fähigkeit?`], ["C",`Was ist ein weiterer Aspekt oder Teil seiner Magie?`], ["D",`Was fühlst du, wenn du es hältst, trägst oder benutzt?`], ["E",`Wann erwacht dein Relikt zum Leben oder wird stärker?`], ["F",`Welche Fertigkeit braucht es, um das Relikt am besten zu handhaben?`], ["G",`Wen oder was sollte dein Relikt am meisten beeinflussen?`], ["H",`Was wird dir durch die Nutzung deines Relikts offenbart?`], ["I",`Was ist ein geheimes Merkmal des Relikts, das sonst niemand kennt?`], ["J",`Was schaltet oder entfesselt dein Relikt?`]],
      weak:[["A",`Was ist der größte Schwachpunkt deines Relikts?`], ["B",`Was kann die Kräfte deines Relikts stören?`], ["C",`Was kann dein Relikt beschädigen oder zerstören?`], ["D",`Was hat sich an dir wegen deines Relikts zum Schlechteren verändert?`]],
      quest:`Eine Aufgabe, die du im Zusammenhang mit deinem Relikt erfüllen musst, etwa um es funktionsfähig zu halten; eine Vision oder Bestimmung, zu der der Gegenstand dich drängt oder die er von dir verlangt; eine Verantwortung, die mit der Kraft dieses Gegenstands einhergeht, oder ein Verhalten, das er ermöglicht.`,
    },
    { key:"uncanny", term:`Uncanny Being`, sub:`Unheimliches Wesen`, aspects:`Übernatürliches Geschöpf oder Spezies, verfluchte oder verwandelte Person, Geist oder Götterkind`,
      power:[["A",`Was für ein fantastisches Wesen bist du?`], ["B",`Was kannst du, das ein Mensch niemals könnte?`], ["C",`Welche andere Magie oder übernatürliche Fähigkeit besitzt du?`], ["D",`Welche ungewöhnliche Form, welches Merkmal oder Trait hast du oder kannst du annehmen?`], ["E",`Was weißt oder spürst du, das gewöhnliche Wesen nicht können?`], ["F",`Wie nährst du dich, schöpfst du Kraft oder erholst du dich?`], ["G",`Welche Aura, welches Miasma oder welche einzigartige Essenz besitzt oder verströmst du?`], ["H",`Was ist dein natürlicher oder bevorzugter Lebensraum, dein Territorium oder Revier?`], ["I",`Wer oder was ist ein üblicher Verbündeter oder eine übliche Beute für Wesen wie dich?`], ["J",`Wie geht deine Art mit sterblichen und gewöhnlichen Wesen um?`]],
      weak:[["A",`Was stößt deine Art ab oder schadet ihr?`], ["B",`Wie können sterbliche Geschöpfe dich binden oder manipulieren?`], ["C",`Was ist ein Schwachpunkt deiner physischen oder magischen Natur?`], ["D",`Wer jagt dich oder feindet dich an?`]],
      quest:`Eine Haltung gegenüber Menschen, mit denen du eine gemeinsame Geschichte hast; das Streben, deine Herkunft, deinen Platz oder deine Bestimmung zu verstehen; eine Notwendigkeit oder Neigung deiner Art, etwa zu feiern, Blut zu trinken oder magische Kraft zu sammeln.`,
    },
  ]},
  { id:"greatness", title:`Greatness Themebook`, subtitle:`Größe-Themen (S. 118–124)`, icon:"crown", entries:[
    { key:"destiny", term:`Destiny`, sub:`Schicksal`, aspects:`Prophezeiung, vorbestimmter Weg, für eine Rolle ausgebildet, bekanntes Endziel`,
      power:[["A",`Welches Schicksal wirst du erfüllen?`], ["B",`Wie hilft dir das Schicksal, wenn du in Gefahr bist?`], ["C",`Welche nützliche Ressource hat dir das Schicksal verschafft?`], ["D",`Wer glaubt an dein Schicksal und würde alles tun, um es zu erfüllen?`], ["E",`Welche Eigenschaft ist der Grund, warum du für dieses Schicksal auserwählt wurdest?`], ["F",`Wie hat dein Schicksal dein Leben leichter gemacht als das anderer?`], ["G",`Welcher nützliche Besitz von dir scheint mit deinem Schicksal verbunden zu sein?`], ["H",`Welche Zeichen, welcher Rat, welche Intuition oder Prophezeiung leitet dich?`], ["I",`Was brauchst du am dringendsten, um dein Schicksal zu erfüllen?`], ["J",`Wie verändert das Schicksal abrupt die Realität, um dich auf deinem Weg zu halten?`]],
      weak:[["A",`Wer ist entschlossen, dein Schicksal zu vereiteln?`], ["B",`Welches wesentliche Puzzlestück fehlt dir noch, um dein Schicksal zu erfüllen?`], ["C",`Welchem Problem bist du bestimmt, immer wieder zu begegnen?`], ["D",`Wie ist dir dein Schicksal zu Kopf gestiegen?`]],
      quest:`Das ultimative Ziel, das zu erfüllen dir bestimmt ist; ein Zwang, bestimmten Zeichen, Vorzeichen, Intuitionen oder Anweisungen zu folgen; eine feste Überzeugung, wie du dich trotz deines Schicksals ehrenhaft verhalten willst.`,
    },
    { key:"dominion", term:`Dominion`, sub:`Herrschaft`, aspects:`Land oder Königreich, Autorität über ein Volk, eine Organisation oder einen Teil der Gesellschaft`,
      power:[["A",`Nenne deinen Titel oder das, worüber du herrschst.`], ["B",`Was ist die häufigste oder nützlichste Nutzung deiner Autorität?`], ["C",`Wer ist dein engster Vertrauter, Berater oder Diener?`], ["D",`Welche Untergebenen dienen dir in Scharen?`], ["E",`Welche wertvollen Ressourcen bringt deine Herrschaft regelmäßig hervor?`], ["F",`Welche besondere Eigenschaft oder Umstand nützt dir als Herrscher:in?`], ["G",`Wo oder wann ist deine Herrschaft am stärksten?`], ["H",`Welche Gruppe innerhalb deiner Herrschaft unterstützt dich am meisten?`], ["I",`Welche Wege hast du ersonnen, um deine Macht zu halten?`], ["J",`Welche Taktik oder Strategie bevorzugst du in Konflikten?`]],
      weak:[["A",`Wer trachtet danach, deine Macht zu usurpieren oder dich zu entthronen?`], ["B",`Welches Problem plagt deine Herrschaft?`], ["C",`Für welchen persönlichen Makel bist du bekannt geworden?`], ["D",`Welches dunkle Geheimnis verbirgst du?`]],
      quest:`Dein Eid oder deine Hauptaufgabe als Inhaber:in eines so hohen Amtes; das Ziel, das du dir vorgenommen hast, mit all deiner Macht zu erreichen; die Tätigkeit, der du nachgehen musst, um deine Macht zu halten oder auszubauen.`,
    },
    { key:"mastery", term:`Mastery`, sub:`Meisterschaft`, aspects:`Beste im Reich, Vorrangstellung in deinem Fach, weltverändernder Erfindungsgeist`,
      power:[["A",`Welche Fertigkeit, Fähigkeit oder welches Gebiet hast du gemeistert?`], ["B",`Welche ergänzenden Fertigkeiten beherrschst du ebenso gut?`], ["C",`Was kannst du, das kein anderer Praktizierender kann?`], ["D",`Wie kann deine Meisterschaft die Welt verändern?`], ["E",`Welche eigens angefertigten Werkzeuge oder fachkundigen Assistenten stehen dir zur Verfügung?`], ["F",`Wie heißt deine legendäre Werkstatt, Bibliothek, Schmiede oder Ähnliches?`], ["G",`Was kannst du mit unglaublicher Wirksamkeit, Geschwindigkeit oder Größe tun?`], ["H",`Was ist deine bestgeübte Technik oder dein bestbeherrschtes Fachgebiet?`], ["I",`Welches ehrfurchtgebietende Kunststück kannst du nach Belieben vollbringen?`], ["J",`Welche besonderen Privilegien oder materiellen Vorteile bringt deine Meisterschaft mit sich?`]],
      weak:[["A",`Was sind die zwangsläufigen Folgen davon, auf deinem Niveau zu wirken?`], ["B",`Wie hat deine Meisterschaft dein Wesen oder deinen Lebensstil zum Schlechteren verändert?`], ["C",`Was übersiehst du, weil du solche Kleinigkeiten längst nicht mehr bemerkst?`], ["D",`Wer ist neidisch auf deine Meisterschaft?`]],
      quest:`Die tiefgreifendste Lehre, die du in deinem Werk gezogen hast und von der du nie abweichst; ein Bekenntnis dazu, wie du deine Meisterschaft nutzen willst, um die Welt zu verändern; dein Vorhaben, deine Meisterschaft in einem Meisterwerk oder Lebenswerk auszudrücken.`,
    },
    { key:"monstrosity", term:`Monstrosity`, sub:`Monstrosität`, aspects:`Gewaltige Größe, überragende angeborene Macht oder Fähigkeit, arkanes Wesen`,
      power:[["A",`Welch prächtiges oder furchteinflößendes Geschöpf bist du?`], ["B",`Was ist dein markantestes körperliches Merkmal?`], ["C",`Welche angeborene magische Fähigkeit setzt du am häufigsten ein?`], ["D",`Welches Merkmal, welcher Move oder welche Macht erlaubt es dir, viele auf einmal zu treffen?`], ["E",`Wie verteidigst du dich mit Magie oder Größe?`], ["F",`Welche einzigartige offensive Fähigkeit besitzt du?`], ["G",`Welches mächtige Gefühl treibt dich an oder wurzelt in deinem Innersten?`], ["H",`Welche arkane Wahrheit wird dir offenbart, die bloße Sterbliche nicht wahrnehmen können?`], ["I",`Wer dient dir?`], ["J",`Was an dir zwingt geringere Geschöpfe zu Respekt?`]],
      weak:[["A",`Was ist dein blinder Fleck, den du wegen deiner Größe oder Macht übersiehst?`], ["B",`Was kann deiner Magie entgegenwirken oder dich schwächen?`], ["C",`Was ist dein einziger Schwachpunkt oder Fluch?`], ["D",`Wer trachtet nach deiner Vernichtung?`]],
      quest:`Eine goldene Regel, an die sich alle Angehörigen deiner monströsen Art halten müssen; ein Ziel, das du dir gesetzt hast, um deine Art zu verstehen oder bestmöglich zu verkörpern; eine monströse Aktivität, der deine Art nachgeht, im Guten wie im Schlechten.`,
    },
  ]},
];

const THEME_KIT_LIBRARY = [{"id": "origin", "types": [{"key": "circumstance", "label": "Circumstance", "kits": [{"title": "Ratsälteste:r", "power": ["Amtskette", "das Volk versammeln", "Friedensstiften", "„Tut mir leid – ich werde woanders gebraucht“", "das Wirtshaus", "die erste Kostprobe", "kennt jedermanns Angelegenheiten", "mal die Haare offen tragen", "„Wir haben nur einander“"], "weak": ["Bedrohungen von außen", "selbstwichtig", "man redet hinter meinem Rücken", "wird für alles verantwortlich gemacht"], "quest": "Ach, unser Volk in Frieden gedeihen zu sehen…"}, {"title": "Landadlige:r", "power": ["ererbte Livree", "mit anderen Adligen unter einer Decke stecken", "Hofmanieren", "dem Gesinde die Schuld geben", "bescheidenes Herrenhaus", "die Leibeigenen einschüchtern", "Schulden aufnehmen", "die Ehre meines Geblüts", "„In dieser Burg lebte schon immer ein Steinherz“"], "weak": ["ständige Ausgaben", "hämische Adlige", "unehrenhafte Geschäfte", "Rivalen um den Titel"], "quest": "Möge der Glanz meines Hauses wiederhergestellt werden!"}, {"title": "Flüchtling", "power": ["ortsübliche Kleidung", "andere Flüchtige erkennen", "um Gnade flehen", "einen Ausweg finden", "sichere Unterschlüpfe", "nichts zu verlieren", "Schlösser knacken", "„Rette sich, wer kann!“", "„Frei will ich sein!“"], "weak": ["hartnäckige Verfolger", "ungepflegt und übelriechend", "misstrauisch beäugter Fremder", "Denunzianten"], "quest": "Eines Tages muss ich nicht mehr fliehen."}, {"title": "Ausgestoßene:r", "power": ["Bettelschale", "Gemeinschaft der Verstoßenen", "einen Menschen durchschauen", "Aufmerksamkeit meiden", "Versammlungsorte", "frei von gesellschaftlichen Normen", "hinter ihre Masken blicken", "sich mit einem Normalo anfreunden", "„Ich bin, wer ich bin“"], "weak": ["arm", "auffällig anders", "Ausgrenzung", "geächtet"], "quest": "Werde ich jemals unter ihnen willkommen sein?"}, {"title": "Schwer Schuftende:r", "power": ["Werkzeug meines Handwerks (wählen)", "Mitarbeiter:innen", "steife Oberlippe", "klug statt hart arbeiten", "geflüsterte Gespräche", "ein Dach über dem Kopf", "die Geheimnisse des Meisters", "braucht wenig Schlaf", "„Streng dich an!“"], "weak": ["überarbeitet", "schwielige Hände", "über meinen Verhältnissen", "grausame:r Aufseher:in"], "quest": "Irgendwann wird sich all die harte Arbeit auszahlen."}, {"title": "Wirtshausraufbold", "power": ["übervoller Krug", "Trinkkumpane", "Leute zum Reden bringen", "Verantwortung ausweichen", "die Taverne ist mein Zuhause", "wird oft unterschätzt", "trunkener Meisterkämpfer", "wieder nüchtern werden", "„Noch eine Runde!!!“"], "weak": ["wird nie ernst genommen", "riecht nach Bier", "wird oft rausgeworfen", "mitleidige Blicke"], "quest": "Ich wünschte, irgendetwas würde mich meinen Schmerz vergessen lassen – für immer!"}]}, {"key": "devotion", "label": "Devotion", "kits": [{"title": "Kranke:r Weise:r", "power": ["Pflegende:r", "Mitgefühl", "alte Waffe der/des Weisen (wählen)", "wertvolle gemeinsame Zeit", "geheime Techniken lernen", "treu wie kein Zweiter", "Würde bewahren", "„Die Zeit ist knapp“", "erst denken, dann handeln"], "weak": ["blinde Bewunderung", "braucht ständige Pflege", "Menschen meines Alters", "die schwindende Gesundheit der/des Weisen"], "quest": "Die wenige Zeit, die bleibt, sollte ich mit ihnen verbringen."}, {"title": "Kranke Heilen", "power": ["Leiden behandeln", "Mitgefühl zeigen", "einfache Medizin", "seuchengeplagte Lande", "gibt mir das Gefühl, wertvoll zu sein", "Leiden lindern", "einfühlsames Auftreten", "„Niemand bleibt unbehandelt“", "Ansteckung vermeiden"], "weak": ["zu viele zum Behandeln", "braucht saubere Umgebung", "glaubt, es besser zu wissen", "widernatürliche Seuchen"], "quest": "Ich werde ALLEN von ihnen helfen."}, {"title": "Ritter Werden", "power": ["Training", "Mut fassen", "Ritterschwert", "durch Zusehen lernen", "den ehrenhaften Weg wählen", "Demut", "ehrenvoll handeln", "die Schwachen verteidigen", "Rüstung ausbessern"], "weak": ["unehrenhafte Ritter", "die lästigen Forderungen des Lehnsherrn", "hochmütig", "hinterhältige Feinde"], "quest": "Ich werde ein Ritter des Reiches, im Dienst des Gemeinwohls."}, {"title": "Unser Dorf", "power": ["die Unseren beschützen", "das ist Heimat", "ortsübliches Gewand (wählen)", "sich am Dorfplatz versammeln", "viele helfende Hände", "wir teilen ein Schicksal", "freundlich und gütig", "Stärke in der Gemeinschaft", "ein Fest ausrichten"], "weak": ["böses Blut untereinander", "irgendjemand braucht immer Hilfe", "Fremdenfeindlichkeit", "Eindringlinge"], "quest": "Dieses warme, einladende Zuhause ist jedes Opfer wert."}, {"title": "Jugendliebe", "power": ["Ständchen singen", "wahre Liebe", "Liebespfand", "unser geheimer Ort", "Kraft, weiterzumachen", "hoffnungsvoll", "selbstbewusster Gang", "„Unsere Liebe wird immer bleiben“", "ein wahrer Meister im Küssen"], "weak": ["liebt-mich-nicht", "meine Liebe wird auf die Probe gestellt", "nichts anderes zählt mehr", "weltliche Sorgen"], "quest": "Es gibt nichts, was ich für diese Liebe nicht tun würde!"}, {"title": "Ritual-Zirkel", "power": ["Ritualvorbereitungen", "feierliche Konzentration", "unentbehrliche Kerzen", "Schutzkreis", "eine Vision empfangen", "zur Verschwiegenheit verpflichtet", "predigen", "„Alles, was dreifach ist, ist wahr“", "eine Opfergabe darbringen"], "weak": ["dogmatisches Denken", "muss gebührenden Respekt zeigen", "Eifersucht", "Hexenjäger"], "quest": "Das nächste Ritual muss nach unseren Bräuchen abgehalten werden."}]}, {"key": "past", "label": "Past", "kits": [{"title": "Verflucht", "power": ["Zauberei erkennen", "Schutzamulett", "Gegenstand des Fluchs (wählen)", "der örtliche Exorzist", "meinen Fluch verbergen", "trübsinnig", "monströse Verwandlung", "unerschütterliche Willenskraft", "Ausgestoßene"], "weak": ["Ich kann niemals … (wählen)", "Monsterjäger", "Geflüster macht mir Angst", "Zeichen auf meiner Haut"], "quest": "Ich muss einen Weg finden, mich von diesem Fluch zu befreien."}, {"title": "Letzte:r meiner Art", "power": ["über die Schulter blicken", "schmutziger Vagabundenmantel", "Sand aus meiner Heimat", "die Weisheit meiner Ahnen", "Überleben in der Wildnis", "gefürchtet und respektiert", "die verlorene Sprache sprechen", "eigenständig", "jene, die mir Unterschlupf gewähren"], "weak": ["ein grausamer Zug", "immer noch gejagt", "grauenvolle Erinnerungsblitze", "Erstickungsanfälle"], "quest": "Es liegt allein an mir, das Erbe meiner Art fortzuführen."}, {"title": "Im Krieg Geschmiedet", "power": ["Deckung finden", "zerbeulter Schild", "Andenken an einen Verlorenen", "Mitflüchtlinge", "sich über Schlachtfelder bewegen", "hochtrabende Heldengeschichten", "beherrscht die Klinge", "gnadenlos", "der Jargon der Krieger"], "weak": ["unehrenhafte Kriegstaten", "rachsüchtige Verwandte", "Albträume", "alte Verletzung"], "quest": "Ist es unser Schicksal, einander auf ewig auf dem Schlachtfeld zu töten?"}, {"title": "Mystische Pilgerreise", "power": ["Sicht jenseits des Sichtbaren", "Pilgergewand", "heilendes Wasser", "Asketen der Berge", "Umgang mit widernatürlichen Wesen", "die/der örtliche Weise", "geisterabwehrendes Zeichen", "unbestechlich", "freundlich gesinnte kleine Gottheiten"], "weak": ["Gedächtnislücken", "die Geister kennen meinen Namen", "Halluzinationen", "ein beunruhigender Blick"], "quest": "Meine Reise in die heiligen Mysterien hat gerade erst begonnen."}, {"title": "Hochwohlgeborene Bildung", "power": ["Geschichte des Reiches", "feinste Kleidung", "Tinte und Feder", "meine alten Lehrer:innen", "gelehrte Debatten", "erworbene Auszeichnung", "Wissen vortäuschen", "wissbegieriger Geist", "Ratsmitglieder und Berater:innen"], "weak": ["unvollendete Studien", "jene, die Bildung verspotten", "mein Wissen wird angezweifelt", "schwächlich"], "quest": "Wissen muss weitergegeben werden, sonst geht es in der Zeit verloren."}, {"title": "Weitgereist", "power": ["effizient packen", "verlässlicher Wanderstab", "Münze aus einem fernen Land", "eine:n Wegkundige:n finden", "gefährliches Gelände durchqueren", "Reisegeschichten", "ein Feuer entfachen", "verwegene:r Entdecker:in", "Freunde, die man unterwegs findet"], "weak": ["gibt immer auf, wenn es schwer wird", "gesucht in einem fernen Reich", "geplagt von Fernweh", "schlechte Knie"], "quest": "Die Zeit ist gekommen, zu einer neuen Reise aufzubrechen!"}]}, {"key": "people", "label": "People", "kits": [{"title": "Schlachtreiter:in", "power": ["sehnig und stark", "gellender Schlachtruf", "Fernreiter-Sattel", "Pferdezucht", "Ebenen und Grasland", "verlässliches Streitross", "Schlachtreiter-Speer", "scharfsichtig", "berittenes Bogenschießen"], "weak": ["bedenkt nie die Risiken", "Vetternwirtschaft", "leicht zu verspotten", "von Bauern gefürchtet"], "quest": "Reitet, plündert und brüllt für den Ruhm der Ebenen!"}, {"title": "Hochländer:in", "power": ["zäh", "Bergsteiger:in", "schwere Felle", "das Wetter im Blick behalten", "sportliche Wettkämpfe", "Wolfsfreund:in", "furchtloser Ansturm", "treu bis in den Tod", "muskulös"], "weak": ["mittellos", "übermäßig sarkastisch", "es fehlt an Feinheit", "Oger sinnen auf Rache an mir"], "quest": "Das Hochland war immer frei – auch wenn das bedeutet, allein zu sein."}, {"title": "Biberverwandte:r", "power": ["kräftiger Schwanz", "geborene:r Baumeister:in", "traditionelles Schnitzmesser", "Unterwasserarchitektur", "Feuchtgebiete", "Giffold – der schnellste Schwimmer", "furchteinflößender Biss", "einfallsreich", "hervorragende:r Schwimmer:in"], "weak": ["übertrieben sanftmütig", "aufdringliche Sippe", "leicht ausgetrocknet", "Feindschaft mit Werfüchsen"], "quest": "Wir sagen: Findet einen Ort, um ein Zuhause zu bauen – und flutet ihn dann mit Liebe."}, {"title": "Waldelf:e", "power": ["geschmeidig und anmutig", "Waldtarnung", "immergrüner Lorbeer", "Baum- und Kräuterkunde", "in den Ästen zu Hause", "waldelfische Jagdgesellschaft", "Waldbogen mit Blattmotiv", "Verbundenheit mit Tieren", "im Dunkeln sehen"], "weak": ["karge Orte", "misstrauisch gegenüber Menschen", "distanziertes Wesen", "von Stadtbewohnern misstraut"], "quest": "Tretet sanft auf, denn wir sind nur die Hüter dieser Welt."}, {"title": "Karawanenvolk", "power": ["markante Erscheinung", "hervorragende:r Händler:in", "Planwagen", "seltsame Reisemärchen", "die großen Straßen bereisen", "bewaffnete Karawanenwachen", "Kampf mit zwei Schwertern", "überaus gastfreundlich", "talentierte:r Handwerker:in"], "weak": ["leichter Sündenbock", "nachtragend bei Beleidigung", "meidet Bindung an einen Ort", "der Hexerei beschuldigt"], "quest": "Das Lebensblut des Reiches – wir tragen alles, doch niemand kümmert sich um uns."}, {"title": "Hexenblut", "power": ["verborgene Ausdauerreserven", "einfache Zaubertricks", "silberne Erbstück-Brosche", "die wahre Geschichte des Hexenbluts", "sich in Anonymität sonnen", "Gedanken mit einem anderen Hexenblut teilen", "unerwarteter knisternder Blitz", "geheimnisvoll und schwer zu durchschauen", "sich in Luft auflösen"], "weak": ["kein Zuhause", "Hexenblüter geraten oft aneinander", "unheimliche Zwischenfälle", "gesucht wegen des wertvollen Blutes"], "quest": "Verweile im Schatten und warte auf die Abrechnung."}]}, {"key": "personality", "label": "Personality", "kits": [{"title": "Neugierig", "power": ["lernfreundliche Umgebung", "mit Fragen überhäufen", "alles in meinem Notizbuch", "unauffällige Nachforschung", "Leidenschaft für die Wahrheit", "erfinderisch", "Ungereimtheiten aufdecken", "falsche Antworten erkennen", "gründliche:r Denker:in"], "weak": ["übersieht Gefahr", "wirklich lästig", "aufdringlich und übergriffig", "jene, die etwas zu verbergen haben"], "quest": "Es gibt so viel mehr zu sehen und zu lernen!"}, {"title": "Frohnatur", "power": ["die Seele jeder Feier", "die Stimmung heben", "Musikinstrument (wählen)", "Spannung auflösen", "Lebensfreude", "plötzlich ernst", "jemanden anfeuern", "über die Verzweiflung lachen", "spüren, was andere glücklich macht"], "weak": ["unpassend fröhlich", "weint innerlich", "neigt zu Ausschweifungen", "strenge Zeitgenossen"], "quest": "Trinkt, tanzt und träumt, denn heute ist alles, was wir haben!"}, {"title": "Schroff", "power": ["Schweigen ist Gold", "einschüchterndes Stirnrunzeln", "karge Garderobe", "beißender Kommentar", "schwelender Zorn", "unerwartete Freundlichkeit", "ihre Fehler korrigieren", "nichts kann mich erschüttern", "war nicht von gestern"], "weak": ["Sentimentalität", "wird einsam", "verärgert meine Verbündeten", "verärgert den Falschen"], "quest": "Rede nicht so viel."}, {"title": "Geübte:r Lügner:in", "power": ["leichtgläubige Opfer", "die Wahrheit verdrehen", "verstecktes Fach", "sich als jemand anderes ausgeben", "Missachtung der Regeln", "an meine eigenen Lügen glauben", "eine Ausrede erfinden", "die Wahrheit infrage stellen", "Lügen erkennen"], "weak": ["bei einer Lüge ertappt", "hoffnungsloser Zynismus", "lügt, auch wenn ich es nicht will", "frühere Opfer"], "quest": "Mal sehen, womit ich diesmal davonkomme…"}, {"title": "Herz aus Gold", "power": ["Notleidenden helfen", "andere zum Helfen inspirieren", "Verbandszeug", "auf jemanden zugehen", "Mitgefühl", "die Schwachen verteidigen", "Schulter an Schulter arbeiten", "böswilligen Gedanken widerstehen", "Bemühungen koordinieren"], "weak": ["wird leicht ausgenutzt", "erwartet Anerkennung", "sie haben nicht um Hilfe gebeten", "zieht Grausamkeit an"], "quest": "Es gibt genug Not für alle – lasst sie uns gemeinsam tragen."}, {"title": "Klatschmaul", "power": ["eng verbundene Gemeinschaften", "drohen, sie bloßzustellen", "Fernrohr", "ein Gerücht in die Welt setzen", "Neugier", "bestimmte Geheimnisse bewahren", "jemandes Ansehen steigern", "unerwünschte Gerüchte zerstreuen", "die Wahrheit herausfinden"], "weak": ["ein Gerücht, das außer Kontrolle gerät", "erbärmlich", "aufdringliche:r Wichtigtuer:in", "zurückhaltende Personen"], "quest": "Geflüsterte Worte sind mächtiger als laute Verkündungen."}]}, {"key": "skill_or_trade", "label": "Skill Or Trade", "kits": [{"title": "Kunsthandwerker:in", "power": ["Schmuckherstellung", "gut ausgestattete Werkstatt", "Adlige und Kaufleute", "mechanischer Mechanismus", "reichlich Zeit zum Arbeiten", "Qualität prüfen", "eine Kundschaft einschätzen", "junge:r Lehrling", "Liebe zum Detail"], "weak": ["magische Juwelen", "überstürzt", "beurteilt nach dem Äußeren", "„ungehobelte Wilde!“"], "quest": "Ich werde die feinsten Werke schaffen, die dieses Dorf je gesehen hat."}, {"title": "Hofbesitzer:in", "power": ["Gemüsegärten", "scharfe Hacke", "Hausgäste", "überliefertes Hausmittel", "gut gefüllte Vorratskammer", "sparsam mit dem, was ich habe", "plant immer voraus", "ein paar Kinder", "schwer arbeitend"], "weak": ["begrenzter Weltblick", "herumtollende Kinder", "Misstrauen gegenüber Fremden", "verlangt Respekt"], "quest": "Ich schufte mir gerne die Finger wund, um dieses Haus zu erhalten."}, {"title": "Schmied:in", "power": ["Pferde beschlagen", "eigene Schmiede", "Waffenträger:innen", "eine Waffe schmieden", "Erz von guter Qualität", "Metallarbeiten reparieren", "gebrandmarkte Metallarbeiten erkennen", "feuerentfachender Kobold", "hartnäckig"], "weak": ["spezialisierte Waffen", "das Feuer ist erloschen", "gierig", "keine Schmiede weit und breit"], "quest": "Die Schmiede fordert viel, doch sie sichert ein anständiges Auskommen."}, {"title": "Plänkler:in", "power": ["Panik säen", "leichte Nahkampfwaffe (wählen)", "mein Aufklärungstrupp", "den Feind verhöhnen", "aus erhöhter Position angreifen", "Hiebe parieren", "taktisches Gespür", "Reittier (wählen)", "listige Kriegsführung"], "weak": ["schwer gepanzerte Gegner", "verwundbar in der Enge", "verwechselt „stark“ mit „langsam“", "gilt als gewaltbereit"], "quest": "Überrasche deinen Feind, wann immer du kannst."}, {"title": "Hinterland-Fährtenleser:in", "power": ["menschliche Spuren", "dicke Lederstiefel", "die Tiere hier kennen mich", "vermuten, was hier geschah", "günstiges Wetter", "eigene Spuren verwischen", "geschärfte Sinne", "Fuchsgefährte", "Respekt vor der Wildnis"], "weak": ["übernatürliche Wesen", "zu viele Spuren", "schaut nie nach oben", "zerlumpt und schmutzig"], "quest": "Wenn du etwas in der Wildnis finden willst, bin ich deine beste Chance."}, {"title": "Fingerfertigkeit", "power": ["Taschendiebstahl", "eine falsche Goldmünze", "begriffsstutzige Beobachter", "ihnen etwas unterschieben", "ablenkende Umgebung", "schneller Griff", "meine Person spüren", "Schauspiel-Komplize:in", "Trickbetrüger:in"], "weak": ["gesicherte Wertsachen", "alle Augen auf mich gerichtet", "übermütig", "strenge Bewachung"], "quest": "Jede:r ist ein Ziel – sie wissen es nur noch nicht."}]}, {"key": "trait", "label": "Trait", "kits": [{"title": "Akrobatische Beweglichkeit", "power": ["springen und rollen", "Verletzungen ausweichen", "Seil und Enterhaken", "Seiltanz", "an einem Kronleuchter (o.ä.) schwingen", "flinke Kletterei", "Gewicht abschätzen", "Zurschaustellung", "Ungeschicklichkeit vortäuschen"], "weak": ["das wird später wehtun", "neidische Zuschauer:innen", "das Glück überstrapazieren", "schwerer, wenn eingeschränkt"], "quest": "Diesen Sprung schaffe ich."}, {"title": "Verbissen", "power": ["schnell wieder zu Kräften kommen", "es perlt an mir ab", "inspirierende Tätowierung", "den Schmerz ertragen", "raues Wetter überstehen", "trotz Widerstand vorankommen", "die Zähigkeit anderer einschätzen", "braucht wenig Schlaf", "Nachgeben vortäuschen"], "weak": ["abgestumpft", "zieht Zorn auf sich", "kann nicht um Hilfe bitten", "schwer zugänglich"], "quest": "Ich werde niemals aufgeben."}, {"title": "Prophetische Visionen", "power": ["den gesehenen Ort finden", "einen Angriff vorhersehen", "hypnotisierendes Pendel", "es verhindern, bevor es geschieht", "den Plan meiner Feinde kennen", "die Vision lenken", "widernatürliche Präsenzen spüren", "Jahrmarktstricks", "lügen, woher ich es weiß"], "weak": ["paranoid", "anfällig für Besessenheit", "es für eigenen Vorteil nutzen", "schützende Bannzeichen"], "quest": "Woher kommen diese Visionen, und warum suchen sie ausgerechnet mich heim?"}, {"title": "Außergewöhnliche Schönheit", "power": ["Aufmerksamkeit erregen", "zu schön, um verletzt zu werden", "praktische Haarbürste", "damit durchkommen", "die Schönste/der Schönste hier", "flirten", "spüren, wenn ich jemandem gefalle", "typisches Haareschütteln", "sich die Haare zerzausen"], "weak": ["übertriebene Diva", "Eifersucht", "die falsche Art von Aufmerksamkeit", "keinerlei Anziehungskraft"], "quest": "Schönheit ist nur ein ablenkender Zauber; sie ist nicht, wer ich wirklich bin."}, {"title": "Stark wie ein Ochse", "power": ["schwere Lasten heben", "einen Schlag blocken", "Handschuhe für besseren Griff", "etwas Schweres schleudern", "Kräftemessen", "Griffe und Klammergriffe", "strukturelle Schwachstellen", "es laut zertrümmern", "weite Kleidung"], "weak": ["unbeabsichtigte Zerstörung", "als Grobian verspottet", "erschöpfend", "verstärkter Stahl"], "quest": "Der einzige Weg, stärker zu werden, ist, meine Kraft immer wieder auf die Probe zu stellen!"}, {"title": "Unterwassergewandtheit", "power": ["erfahrene:r Taucher:in", "Ausweichen unter Wasser", "Fischspeer oder Dreizack", "unter Wasser atmen", "Landbewohner als Opfer", "sie unter Wasser ziehen", "angeborene Echoortung", "Schätze aus dem Wasser fischen", "kiemenverbergender Schal"], "weak": ["zu tief tauchen", "von Landbewohnern gefürchtet", "starke oder große Beute", "unsicher an Land"], "quest": "Nirgends fühle ich mich mehr zu Hause als tief im trüben Wasser."}]}, {"key": "companion", "label": "Companion", "kits": [{"title": "Schwertkameradschaft", "power": ["erfahrene Krieger:innen", "eine Verteidigungslinie bilden", "„Angriff!“", "in der Taverne ausruhen", "koordinierter Angriff", "und Schilde auch", "hartes Training", "gute körperliche Verfassung", "Speerspitzenformation"], "weak": ["blutdurstig", "wild und laut", "zu betrunken zum Kämpfen", "körperlose Gefahren"], "quest": "Alle für eine:n, eine:r für alle!"}, {"title": "Imposanter Wolfshund", "power": ["scharfe Sinne", "mich aus der Gefahrenzone stoßen", "gemeinsam jagen", "spielen und toben", "sich auf etwas stürzen", "Nutzgeschirr", "einen bestimmten Trick üben", "stark und groß", "tiefes Gebell"], "weak": ["impulsiv", "will immer spielen", "abgelenkt", "jenseits hündischen Verständnisses"], "quest": "Du bist mein bester Freund!"}, {"title": "Schutzgeist", "power": ["Schaden abwenden", "mich warnen", "heilende Verbindung", "Orte von emotionaler Bedeutung", "blendender Lichtblitz", "der Ring, der uns verbindet", "Gebete und Opfergaben", "unsichtbar", "spendet Weisheit"], "weak": ["löst magische Fallen aus", "urteilend", "leicht zu bannen", "zu viele Gefahren"], "quest": "„Versprich mir, den Hexenmeister zu vernichten, und ich werde dich auf ewig beschützen.“"}, {"title": "Inspirierende:r Meister:in", "power": ["Expert:in ihres/seines Handwerks", "für mich eingreifen", "Lehrmoment", "gemeinsam Zeit verbringen", "ihr/sein Können zeigen", "professionelle Ausrüstung", "Selbstvertrauen stärken", "anmutige Bewegungen", "mit gutem Beispiel vorangehen"], "weak": ["ständige Forderungen", "ich vergleiche mich ungerecht", "wird zu anderen Pflichten gerufen", "sie/er stellt mich auf die Probe"], "quest": "„Gib alles von dir, ich erwarte nicht weniger.“"}, {"title": "Gerade Erst Kennengelernte:r Freund:in", "power": ["ortskundige:r Führer:in", "eine helfende Hand", "lässt mich gut aussehen", "bei ihnen übernachten", "für mich bürgen", "geliehene Besitztümer", "nimmt mich mit zum Einkaufen", "ein Augenschmaus", "um den kleinen Finger gewickelt"], "weak": ["zieht mich runter", "größere Ansprüche", "viel zu weiter Umweg für sie/ihn", "die/der Falsche dafür"], "quest": "Ich schließe gerne Freundschaften, aber ich hasse es, wenn sie zu lange bleiben…"}, {"title": "Lästiger Kobold", "power": ["flinkes geflügeltes Wesen", "Ärger auf sich ziehen", "Streiche spielen", "Feenfeste", "schmerzhafter Schlag", "Feenstaub", "bringt mir kleine Zaubertricks bei", "winzig und schwer zu fassen", "Menschen in den Wahnsinn treiben"], "weak": ["Streich zur Unzeit", "nervt und lenkt mich ab", "Wutanfall", "dickfellige Opfer"], "quest": "Das hier wird der GRÖSSTE Streich aller Zeiten."}]}, {"key": "magic", "label": "Magic", "kits": [{"title": "Segen der Göttin", "power": ["Gegenstände weihen", "Segen des Mutes", "eine Menschenmenge segnen", "eindrucksvolle Zeremonie", "kennt die Wege der Gottheit", "Massengebet", "angemessene Opfergabe", "Redekunst", "respektierte:r Priester:in"], "weak": ["unwürdige:r Empfänger:in", "erfordert die Gunst der Göttin", "auffälliges Schimmern", "wegen meines Glaubens gejagt"], "quest": "Sei immer bei der Göttin, und sie wird immer bei dir sein."}, {"title": "Eins mit der Dunkelheit", "power": ["verbergende Zauber", "Tentakel der Dunkelheit", "stille Magie", "wahnsinnmachendes Geflüster", "Annalen des Schattens", "absolute Dunkelheit", "Onyx zur Kraftgewinnung verzehren", "verstohlen", "ihre Geheimnisse belauschen"], "weak": ["gut beleuchtete Opfer", "braucht zumindest etwas Dunkelheit", "verdunkelnde Aura", "gilt als böse"], "quest": "Bei jedem Sonnenaufgang muss ich in den Schoß der Dunkelheit zurückkehren, und sei es nur kurz."}, {"title": "Fluch und Verwünschung", "power": ["quälende Leiden", "Lähmung verursachen", "etwas, das ihnen gehört", "persönliche:r Feind:in", "Wissen über Hexerei", "Nacht des Vollmonds", "Buch der Schatten", "Schutzkreise", "Freund:innen in niederen Kreisen"], "weak": ["öffentlich ausgeführt", "lange Rituale", "böser Blick", "Hexenjäger"], "quest": "Wage es, mir in die Quere zu kommen, Narr, und ich werde dich es bereuen lassen."}, {"title": "Bannsprüche", "power": ["verbale Bannungen", "Besessenheit vertreiben", "durch Schrift wirken", "bestimmte Namen einfügen", "Folcrests Sammlung der Erscheinungen", "besser mit Vorbereitung", "Pergament-Talismane", "Überzeugungskraft", "es ist tabu, mich nicht zu bezahlen"], "weak": ["höhere Dämonen", "muss die Erscheinung identifizieren", "erfordert Konzentration", "sie greifen zuerst mich an"], "quest": "Was von der anderen Seite kommt, muss zur anderen Seite zurückgeschickt werden. Keine Ausnahmen."}, {"title": "Rudimentäre Magie", "power": ["meist nur Schall und Rauch", "Wort der Entriegelung", "Zaubersprüche auswendig lernen", "niedliche kleine Geste", "Geschichte der Magie", "kontrolliertes Experiment", "Anfängerstab", "einen Zauber ablenken", "im Zweifel für mich"], "weak": ["kann mit ausgebildeten Zauberer:innen nicht mithalten", "muss sich konzentrieren", "geht gerne mal in die Luft", "unbeabsichtigte Magie"], "quest": "Ich werde weiterüben, bis ich eine wahre Zauberin/ein wahrer Zauberer bin!"}, {"title": "Große Nekromantie", "power": ["die Toten beleben", "Leben stehlen", "magische Kraft entziehen", "erschreckende Ergebnisse", "verbotene Riten", "gestärkt durch meinen Kult", "viele verfügbare Leichen", "Einbalsamierung", "meine Seele abgesondert"], "weak": ["heilige Krieger:innen", "verzehrt Lebenskraft", "abgezehrtes Antlitz", "verwesender Körper"], "quest": "Ich werde diese Welt mit einer Armee aus Knochen und verfaultem Fleisch beherrschen."}]}, {"key": "possessions", "label": "Possessions", "kits": [{"title": "Handgefertigte Panflöte", "power": ["hoher Ton", "Liedtext auf Pergament gekritzelt", "ein fröhliches Lied spielen", "neugierige Tiere anlocken", "öffentlicher Auftritt", "reinigen und stimmen", "Gelassenheit wecken", "Töne mit dem Wind verweben", "rustikale Machart"], "weak": ["begrenzter Tonumfang", "neigt zum Zerspringen", "Publikum hat genug", "nur einfache Melodien"], "quest": "Ein friedliches Leben ist alles, was ich will."}, {"title": "Uneinnehmbare Festung", "power": ["schwere Befestigungen", "Krokodilgraben", "sich verbarrikadieren", "geheimer Tunnel", "Schießscharten", "Brunnen und Kornspeicher", "Bollwerk unseres Volkes", "nur eine Zufahrtsstraße", "uralte Zeichen an den Mauern"], "weak": ["übersehener Schwachpunkt", "verwittert und bröckelnd", "das Leben draußen geht weiter", "Luftangriffe"], "quest": "Hier werden wir sicher sein, solange wir standhalten."}, {"title": "Verborgene Dolche", "power": ["in Gift getaucht", "Schnellzieh-Scheide", "weiter Schnitt", "geheimes Fach im Griff", "ausbalancierter Wurf", "Wetzstein", "bösartig", "verborgene Scheide", "versilbert"], "weak": ["kurze Reichweite", "benötigt ständiges Schärfen", "wird berüchtigt", "schwere Rüstung"], "quest": "Eines Tages wird einer von diesen dem Baron die Kehle durchschneiden."}, {"title": "Ergaunerter Besitz", "power": ["mehrere Wertgegenstände", "ein kleines Messer", "Diebesgut verhökern", "es dem Besitzer verkaufen", "etwas über den Besitzer erfahren", "eine neue Ladung stehlen", "wie gewonnen, so zerronnen", "sie schnell verstecken", "prächtiger Schmuck"], "weak": ["lautes Klimpern", "ich habe alles Brauchbare schon verwendet", "wegen Räuberei gesucht", "billiger Tand"], "quest": "Wen muss ich hier ausrauben, um an ein paar Münzen zu kommen?"}, {"title": "Ross und Rüstzeug", "power": ["Plattenrüstung", "Lanze", "in die Schlacht reiten", "geheime Pferdekommandos", "Feinde niederreiten", "Heilsalbe", "edelmütig gesinnt", "Pferdepanzer", "des Hofes würdig"], "weak": ["umständlich", "erschöpft nach langer Reise", "gilt als hochmütig", "aufwendige Pflege"], "quest": "Ich werde dem edlen Haus, dessen Farben ich stolz trage, Ehre bringen."}, {"title": "Ungezählte Reichtümer", "power": ["jede:r akzeptiert Gold", "auch kostbare Edelsteine", "Ausgaben begleichen", "in ein Unternehmen investieren", "Geschäftssinn", "gepanzerter Wagen", "sich am Glück erfreuen", "Söldneskorte", "betörender Glanz"], "weak": ["zieht Räuber an", "zu viele Ausgaben", "als Geldausgeber:in bekannt", "Geld kann es nicht kaufen"], "quest": "Alles und jede:r hat einen Preis, und ich kann ihn zahlen."}]}]}, {"id": "adventure", "types": [{"key": "duty", "label": "Duty", "kits": [{"title": "Ein Licht Gegen die Dunkelheit", "power": ["ein Leuchtfeuer der Hoffnung", "Übeltäter bannen", "das Volk versammeln", "das heilige Feuer beschwören", "die Gesetze des Bösen umgehen", "strahlende Gewandung", "vertraut mit den Dunkellanden", "um Hilfe von jenseits beten", "unheilvollen Einfluss zurückdrängen"], "weak": ["Verrat", "persönlicher Vorteil", "jene, die den Glauben verlieren", "Verzweiflung fasst Fuß"], "quest": "Halte das heilige Feuer hoch, damit die Dunkelheit zurückweicht."}, {"title": "Postbote/Postbotin", "power": ["flink und behände", "„Platz da, ich komme durch!“", "frisches Pferd", "Waffe zum Schutz (wählen)", "ungehinderter Durchgang", "Postuniform", "die Straßen sind mein Zuhause", "die übliche Gebühr verlangen", "unermüdlich"], "weak": ["den Boten trifft es immer", "leicht abzulenken", "Postabfänger", "langweiliger Job"], "quest": "„Über jeden Berg, durch jeden Fluss – diese dringende Nachricht bringe ich sicher hindurch.“"}, {"title": "Auftragsarbeit", "power": ["praktisch veranlagt", "ein Honorar aushandeln", "Zehrgeld", "Karten, Pläne und Skizzen", "neutral, bis ich angeheuert werde", "angemessenen Schutz tragen", "Vertrautheit mit dem Marktplatz", "eine:n Auftraggeber:in beruhigen", "verbissene Entschlossenheit"], "weak": ["unerwartete Hindernisse im Plan", "zu alt für so etwas", "Konkurrenz", "grolle meinem Auftraggeber"], "quest": "Nimm das Geld und leiste die Arbeit; niemals das eine ohne das andere."}, {"title": "Das Land Beschützen", "power": ["Liebe zu allem Lebendigen", "Eindringlinge verschrecken", "die Tiere herbeirufen", "Nahrung aus dem Land", "unversehrt vor wilden Tieren", "Shillelagh (Knüppel)", "vertrautes Gelände", "mit der Natur kommunizieren", "abgeholzte Flächen wieder bewalden"], "weak": ["unheilvolle Mächte", "mangelnde Gerissenheit", "zornige Naturgeister", "von Trauer ergriffen"], "quest": "Ich bin der Wächter dieses Landes – ehre es, oder kehre um."}, {"title": "Treueeid", "power": ["Vertrauen in meine:n Lehnsherrin/Lehnsherr", "einen Erlass verkünden", "Befehlsgewalt über Untertanen", "eine gesunde Portion Privilegien", "freie Unterkunft", "windgetragenes Banner", "das Reich durchstreifen", "an meine:n Lehnsherrin/Lehnsherr appellieren", "meinen rechtmäßigen Anspruch bekräftigen"], "weak": ["Feinde meiner Lehnsherrschaft", "verlangt höchste Standards", "eine rivalisierende Hofperson", "missbillige die Entscheidung meiner Lehnsherrschaft"], "quest": "So wurde es von unserer erhabenen Lehnsherrschaft verkündet, und so soll es sein!"}, {"title": "Sehnt sich nach Rache", "power": ["gutes Gedächtnis", "deine Groll-Liste verkünden", "brodelnde Wut", "andere, die sich verhöhnt fühlen", "kein Vorwand für Vernunft", "Mordwaffe (wählen)", "das Haus meines Feindes", "die Göttin der Rache anrufen", "bei null anfangen"], "weak": ["man erwartet mich", "unterlegen im Vergleich", "ein:e weitere:r angehende:r Rächer:in", "ständige Frustration"], "quest": "Ich kann niemals ruhen, bis Gerechtigkeit geschieht."}]}, {"key": "influence", "label": "Influence", "kits": [{"title": "Angebetet", "power": ["für mich kämpfen", "Verehrer:innen und Bewunderer:innen", "sie in meinem Glanz baden lassen", "das Stadtgespräch", "mit Geschenken überhäuft werden", "körperliche Anziehung", "Liebespfand", "Verführung", "hohe Meinung von mir selbst"], "weak": ["jene, die keine Zuneigung suchen", "jemand, den ich mag", "verschmähte Verflossene", "vom Hass verblendete"], "quest": "Ich brauche, dass mich WIRKLICH JEDER liebt."}, {"title": "Volksheld:in", "power": ["Vorräte beschaffen", "eine Schar junger Anhänger:innen", "eine Heldentat erzählen", "Höfe und Weiler", "willkommen zu bleiben", "Träume vom Ruhm entfachen", "persönliche:r Barde/Bardin", "freundliche Neckereien", "bescheiden und ehrlich"], "weak": ["herablassende Adlige", "sich selbst blamieren", "ein:e bessere:r Held:in als ich", "Hofintrigen"], "quest": "Diese Leute blicken zu mir auf, damit ich ihnen Hoffnung gebe – also werde ich es tun."}, {"title": "Verschwörer:in", "power": ["verstohlene Machenschaften", "Spione und Agent:innen", "an ihren Fäden ziehen", "die Höfe der Macht", "geheime Waffenverstecke", "bestechliche Personen", "Mitverschwörer:innen einweihen", "einen Hebel finden", "nicken und lächeln"], "weak": ["die Edelgesinnten", "vergangene Verfehlungen", "eine rivalisierende Verschwörung", "magische Wahrsagung"], "quest": "„Eine Spinne im Dunkeln beißt zu, doch geht im Licht rasch zugrunde.“"}, {"title": "Respektierte:r Anführer:in", "power": ["koordinierte Anstrengung", "Fußsoldat:innen", "bestimmtes Kommando", "mein Zuständigkeitsbereich", "gut ausgebildete Leibwächter:innen", "die Unterdrückten", "Rekrutierungsbemühungen", "Ungehorsam niederschlagen", "distanziert und zurückhaltend"], "weak": ["ich habe hier keine Befugnis", "misshandle Gefolgsleute", "Befehle von oben", "übernatürliches Grauen"], "quest": "Unser einziges Ziel ist endlich in Reichweite. Lasst es uns erobern!"}, {"title": "Hafenmeister:in", "power": ["Gebühren und Zölle einziehen", "Hafenarbeiter:innen", "„unglückliche“ Bürokratie", "Handelsangelegenheiten", "beschlagnahmte Waren", "Schiffe und Boote", "Ansehen über das Meer hinweg", "eine Blockade organisieren", "Beamte bestechen"], "weak": ["die Geistlichkeit", "gierig", "die Karawanenzunft", "meine Befugnis endet jenseits der Bucht"], "quest": "Nichts kommt in diesen Hafen oder verlässt ihn, ohne dass ich davon weiß!"}, {"title": "Bevorzugte:r Kleriker:in [Gottheit]", "power": ["einen Segen erteilen", "zeremonielle Gefolgschaft", "Frevel bannen", "Domäne der Gottheit (wählen)", "Gewandung", "zu den Gläubigen sprechen", "besänftigende Worte", "ein Wunder vollbringen", "schützender Heiligenschein"], "weak": ["Ungläubige", "gegen die Schrift handeln", "Anhänger des Anathema", "himmlische Angelegenheiten übersteigen mich"], "quest": "Eines Tages, Herrin, möchte ich Eure treueste Dienerin/Euer treuester Diener werden."}]}, {"key": "knowledge", "label": "Knowledge", "kits": [{"title": "Bewohner des Ungesehenen", "power": ["besitzergreifende Geister", "eine:n unsichtbare:n Besucher:in erkennen", "eine Erscheinung vertreiben", "wissen, wann man fliehen muss", "verschwiegen", "Kobolde und Poltergeister", "Schutzamulett", "Séance", "unergründliche Gottheiten"], "weak": ["uralte Geister", "der Geist verbirgt sich", "Amateure", "Wissen bietet keinen Schutz"], "quest": "Die/den Richtige:n finden, der/dem ich dieses Wissen weitergeben kann, damit es nicht verloren geht oder missbraucht wird."}, {"title": "Sachverständige:r Gutachter:in", "power": ["handwerkliche Qualität begutachten", "Herkunft bestimmen", "Feilschen", "verborgene Markierungen erkennen", "verschlüsseltes Kontobuch", "einen bestimmten Gegenstand finden", "ein prall gefüllter Silberbeutel", "Stammgast auf den Märkten", "Visionen früherer Besitzer"], "weak": ["unbekannte Machart", "verzauberte Gegenstände", "verärgerte Scharlatane", "aus der Ferne schwieriger"], "quest": "Ich sammle nur die feinsten Waren, also muss ich Feines von Gewöhnlichem unterscheiden können."}, {"title": "Kennt Jede Provinz", "power": ["Weiler und Städte", "die beste Route bestimmen", "Reisehindernisse vorhersehen", "bewandert in vielen Kulturen", "kommentierte Karten zeichnen", "meisterhafte:r Packer:in", "breitkrempiger Hut", "das Land erkunden", "die fernen Wildnisse"], "weak": ["Krieg und Schlachtfelder", "Höhlen und Untergrund", "rivalisierende:r Kartograf:in", "sich rasch wandelnde Geografie"], "quest": "Ich arbeite an einem Atlas der Welt…"}, {"title": "Monsterkunde", "power": ["Ghule und Leichenfresser", "präzise Klassifizierung", "seine Schwäche kennen", "seine natürlichen Waffen kennen", "dickschädelig", "Alchemie aus Monsterteilen", "eiserne Ketten", "es zuerst töten", "Dämonen"], "weak": ["seltene Unterarten", "kann es nicht genau erkennen", "intelligente Monster", "braucht eine Fleischprobe"], "quest": "Wer hier draußen überleben will, muss seine Kreaturen kennen."}, {"title": "Sternenkundige:r", "power": ["astrologische Karten", "Ort und Zeit ableiten", "nach den Sternen navigieren", "himmlischem Einfluss entgegenwirken", "in Rätseln sprechen", "Jahreszeiten und Zyklen", "messingnes Astrolabium", "klare Nächte", "die Sterne spiegeln die Götter wider"], "weak": ["der zersprungene Mond", "Kometen und ihre Bedeutung", "von gierigen Mystikern begehrt", "Tageslicht und Wolkendecke"], "quest": "Der Nachthimmel ist in letzter Zeit unheilvoll. Doch um das Verhängnis abzuwenden, muss ich seine Geheimnisse entwirren."}, {"title": "Geschichten der Ahnen", "power": ["Helden von Gwyrdolin", "Ruinen bestimmen", "Zuhörer:innen fesseln", "eine Quelle der Inspiration", "Lieder auswendig kennen", "die Sprache der Ahnen", "Fackel und Öl", "Geschichten und Relikte tauschen", "Visionen eines vergangenen Lebens"], "weak": ["der Krieg der Thaumaturgen", "verlorener Dialekt", "Schatzsucher:innen", "nur eine alte Geschichte"], "quest": "Könnte ich mich nur an alles erinnern, würde ich mich vielleicht an meine Rolle darin erinnern…"}]}, {"key": "prodigious", "label": "Prodigious Ability", "kits": [{"title": "Fesselnde:r Unterhalter:in", "power": ["sie in Schlaf wiegen", "Fingerfertigkeit", "musikalisches Solo", "Hang zum Dramatischen", "die Bühne ausfüllen", "Publikumsliebling", "subversive Botschaften", "Wahrheit von Fiktion unterscheiden", "unglaublich lebhafte Bilder heraufbeschwören"], "weak": ["holprige Übergänge", "anfällig für Schmeicheleien", "feindseliges Publikum", "Zielscheibe meiner eigenen Satire"], "quest": "Den Barden-Wettstreit im Schloss zu gewinnen – das wäre etwas!"}, {"title": "Begnadete:r Heiler:in", "power": ["Feldchirurg:in", "Magen auspumpen", "sofortige Schmerzlinderung", "schätzt jedes Leben", "Chirurgenklinge", "Patient:in wiederbeleben", "schnelle Doppelnaht", "Leiden diagnostizieren", "Akupunktur und Druckpunkte"], "weak": ["Krankheiten des Blutes", "knapp und distanziert", "schmutzige Umgebung", "gewalttätige:r Patient:in"], "quest": "Jede:r gerettete Patient:in ist ein Verdienst, und jede:r Patient:in…"}, {"title": "Ausgezeichnete:r Koch/Köchin", "power": ["perfekt ausgerichtetes Festmahl", "Schmorbraten zum Niederknien", "verlockende Düfte", "für geliebte Menschen kochen", "geschärftes Hackmesser", "kein Streit am Tisch!", "köstliche Brandteigkrapfen", "Zutaten erkennen", "eine Mahlzeit, die heilen kann"], "weak": ["dauert lange", "kann einer Kostprobe nicht widerstehen", "verdorbene Zutaten", "sich selbst einladende Nachbar:innen"], "quest": "Jede Mahlzeit ist eine Gelegenheit zu erfreuen."}, {"title": "Professionelle:r Einbrecher:in", "power": ["schleichen und pirschen", "mit bloßen Händen an Wänden klettern", "akrobatisches Überspringen", "mutig", "Dietriche", "sich vor aller Augen verstecken", "vollkommen lautlos", "auf Fallen prüfen", "zauberbannendes Zeichen"], "weak": ["hinterlässt eine Spur", "geht unnötige Risiken ein", "keine Deckung", "frühere Opfer"], "quest": "Das hier wird der letzte Job sein, das garantiere ich!"}, {"title": "Furchtbare:r Waffenmeister:in", "power": ["Waffenpflege", "Verteidigung durchdringen", "Waffe schwingen", "gesammelte Konzentration", "meisterlich gefertigte Waffe (wählen)", "perfekte Parade oder Ablenkung", "präziser Treffer", "Kampfstil studieren", "blindes Kämpfen"], "weak": ["offene Flanke", "hat einen verräterischen Tick", "von Feinden überrannt", "rachsüchtige besiegte Gegner"], "quest": "Ist eine Waffe erst gezogen, darf sie erst wieder eingesteckt werden, nachdem sie Blut gekostet hat."}, {"title": "Erfahrene:r Händler:in", "power": ["Wertschätzung", "Preise drücken", "einen Bluff durchschauen", "wettbewerbsfreudig", "prall gefüllte Kassen", "Verluste begrenzen", "elegantes Gegenangebot", "spüren, warum sie verkaufen wollen", "ihren Preis kennen"], "weak": ["zu gierig", "lockere Zunge", "unbekannte Kultur", "sie fühlen sich betrogen"], "quest": "Ich werde bald der reichste Händler des Königreichs sein."}]}, {"key": "relic", "label": "Relic", "kits": [{"title": "Beutel mit Verzaubertem Staub", "power": ["es unsichtbar machen", "es „magisch“ erscheinen lassen", "Staunen wecken", "Sternenlicht einfangen", "es mit dem Wind fortsenden", "Unschuldige und Feenwesen", "Illusionen entlarven", "erlaubt mir zu fliegen", "ein Feenring-Portal öffnen"], "weak": ["weht in alle Richtungen davon", "verdrehte oder verdorbene Magie", "geht zur Neige", "neigt zum Tagträumen"], "quest": "Streue eine Handvoll Magie in jede trübe Situation."}, {"title": "Erbstück-Langschwert", "power": ["meisterhaft gefertigte Waffe", "alles parieren", "Symbol meiner Abstammung", "Magie in Teichwasser erneuert", "Schwertkunst", "Bezwinger von Unholden", "vibriert in der Nähe von Gefahr", "knistert vor zerstörerischer Kraft", "meine Bestimmung erfüllen"], "weak": ["weithin bekannt", "verrät mein Erbe", "unschuldiges Blut", "das dunkle Vermächtnis meiner Abstammung"], "quest": "Mit diesem Einen Wahren Schwert werde ich die Fürsten des Bösen vernichten."}, {"title": "Kessel der Beschwörung", "power": ["nützliche Gegenstände herbeizaubern", "etwas Unerwünschtes verschlingen", "künstlerisches Gespür", "ihn mit Lebenskraft füttern", "kräftiges Rühren", "eine bestimmte Person herbeirufen", "einen fernen Ort erspähen", "schwer zu bannen", "Monster herbeizaubern"], "weak": ["sperrig", "gebannte Grenzen", "Beschwörungen lösen sich langsam auf", "wird zunehmend träge"], "quest": "Je mehr Leben ich meinem Kessel füttere, desto mehr Leben kann ich herbeizaubern!"}, {"title": "Magische Samen", "power": ["knorrige Ranken wachsen lassen", "ein Dickicht wachsen lassen", "alles grüne Leben spüren", "reichlich Wasser und Nährstoffe", "grüner Daumen", "verstricken und würgen", "Pflanzen bitten, sich zu bewegen", "mit Pflanzen sprechen", "ungezügeltes Wachstum"], "weak": ["hinterlässt Unordnung", "Mangel an Erde oder Wasser", "anfällig für Feuer", "still und nachdenklich"], "quest": "Bekämen wir einen ganzen Sack dieser Samen, könnten wir den Fuchsbau-Wald nachwachsen lassen!"}, {"title": "Handschuh des Riesen", "power": ["donnernder Schlag", "mit der Kraft eines Riesen heben", "sich unbesiegbar fühlen", "stärker mit einem Gebrüll", "es einstecken", "die Großen fallen zuerst", "weit übers Land sehen", "Riesensprung", "zu einem Riesen heranwachsen"], "weak": ["hält nicht lange", "rutscht leicht ab", "enge Räume", "verhasster Tyrann"], "quest": "Der Handschuh weist mir den Weg zum Königreich der Riesen, wo ich als einer von ihnen leben werde!"}, {"title": "Stab der Zauberbindung", "power": ["einen Zauber andauern lassen", "eine Verzauberung brechen", "nahe Verzauberungen spüren", "eine Verzauberung aufnehmen", "bewandert in den mystischen Künsten", "besser, wenn ich den Zauber kenne", "offenbaren, wer ihn gewirkt hat", "einen Zauber umkehren", "Quelle magischer Kraft"], "weak": ["schwächer mit nur einer Hand", "unbekannte Magie", "zu viel aufgenommen", "herablassend gegenüber anderen Magier:innen"], "quest": "Werde ein Meister über alle Magie."}]}, {"key": "uncanny", "label": "Uncanny Being", "kits": [{"title": "Körperloser Geist", "power": ["aus dem Blickfeld verschwinden", "einen Körper besitzen", "furchteinflößende Erscheinung", "in ein anderes Reich blicken", "Gefühle aufsaugen", "meine Lebenskraft verleihen", "meinen Wohnort beschützen", "andere Geister herbeirufen", "in ihre Gedanken flüstern"], "weak": ["Schutzbanne", "verloren und verwirrt", "kann nichts berühren", "Exorzisten"], "quest": "Ich muss jene vertreiben, die meinen Wohnort heimsuchen."}, {"title": "Eine:r des Schönen Volkes", "power": ["unsterblich", "geschickt in der Verzauberung", "jenseitige Schönheit", "Schicksale erahnen", "immun gegen Krankheit oder Erschöpfung", "unermüdlicher Geist", "das Anderswelt-Reich", "die Strahlende Schar aufbieten", "Heldenmut wecken"], "weak": ["kaltes Eisen", "verliebt sich in menschliche Held:innen", "untersteht einer Feenlehnsherrschaft", "verderbtes Schönes Volk"], "quest": "Unser Reich braucht eine:n wahre:n Held:in, und mir wurde aufgetragen, sie/ihn zu finden."}, {"title": "Höllenbrut", "power": ["immun gegen Feuer", "widerstandsfähig gegen Magie", "ledrige Schwingen", "Begehren spüren", "sich an der Gewalt anderer nähren", "würgende Schwefelwolke", "das Gefrorene Inferno", "naive Menschen", "Versuchung schüren"], "weak": ["geweihter Boden", "an einen Pakt gebunden", "leicht zu bannen", "rivalisierende Verderber"], "quest": "Finde jemanden, der meinen Platz in der Hölle einnimmt."}, {"title": "Wiedergänger:in", "power": ["furchterregender Schrecken", "widernatürliche Schnelligkeit", "sich in Raben verwandeln", "Leben in der Luft schmecken", "das Blut des Opfers aussaugen", "lähmendes Gefühl des Verhängnisses", "stärker bei Nacht", "auf einsame Reisende lauern", "sich als lebendig ausgeben"], "weak": ["silberne Waffen", "kann kein fließendes Wasser überqueren", "der Gestank des Todes", "selbstgerechte Held:innen"], "quest": "Ich bin zurückgekehrt für Gerechtigkeit und werde nicht gehen, bis ich sie bekomme."}, {"title": "Kleiner Hausgeist", "power": ["Gegenstände auf magische Weise transportieren", "Werkzeuge beleben", "winzig und flink", "Gefahr fürs Haus spüren", "gestärkt durch Dankbarkeit", "eine Atmosphäre der Sicherheit", "Herd und Heim", "Haustiere", "geheime:r Helfer:in"], "weak": ["zu weit weg von zu Hause", "hasst es, eingesperrt zu sein", "zu klein", "undankbare Bewohner:innen"], "quest": "Solange ich hier keinen Dank bekomme, könnt ihr meine Hilfe vergessen!"}, {"title": "Troll", "power": ["steinerne Haut", "gewaltige Stärke", "riesenhafter Körper", "scharfer Geruchssinn", "regeneriert in Steinform", "magisches Blut", "Hügelbewohner", "Zwergenfreunde", "Menschen verjagen"], "weak": ["meidet Sonnenlicht", "einfältig", "tollpatschig", "Wilddiebe"], "quest": "Freund beschützen. Feind zerschmettern!"}]}]}, {"id": "greatness", "types": [{"key": "destiny", "label": "Destiny", "kits": [{"title": "Den Thron Besteigen", "power": ["vor Verrat gewarnt", "die Liebe des Volkes", "eine wohlgesonnene Adlige/ein wohlgesonnener Adliger", "edles Herz", "heimlich von königlichem Geblüt", "Siegel vergangener Könige", "Berater:in in Hofangelegenheiten", "das Heer der Rebellion", "eine geheime Gönnerin/ein geheimer Gönner greift ein"], "weak": ["von der Monarchie gejagt", "kein wahrer Anspruch auf den Thron", "widerwillige Adlige", "erwartet königliche Behandlung"], "quest": "Es ist mein Geburtsrecht, die Tyrannei des Throns zu stürzen und das Volk zu einen!"}, {"title": "Vorhergesagter Tod", "power": ["*noch* nicht meine Zeit", "belebender Ansporn", "der Tod geht an meiner Seite", "tiefe Gelassenheit", "Mitleid wecken", "Gold zum Ausgeben", "Memento Mori", "bis zum Ende kämpfen", "letzte Gnade"], "weak": ["Hoffnungsspender", "Anfälle von Empörung", "das Leben hat jeden Sinn verloren", "trostlose Stimmung"], "quest": "Ich habe das Ende gesehen; es gibt keinen Ausweg."}, {"title": "Die Welt Beenden", "power": ["Weltverbesserer:innen ausweichen", "weltenendendes Ritual", "Kult des Untergangs", "vollkommene:r Nihilist:in", "Streit unter den Guten", "Kugel aus drachischem Feuer", "eine düster flüsternde innere Stimme", "Reise zur Krone der Welt", "Blitze schlagen bei meinen Feinden ein"], "weak": ["echte Held:innen", "Hoffnung kann niemals sterben", "meine Liebe zu anderen", "nur ein grüblerischer Poser"], "quest": "Nur weil ich die Welt beende, heißt das nicht, dass ich dabei nicht nett sein kann."}, {"title": "Den Mächtigen Erlegen", "power": ["wundersames Ausweichen", "unermüdliche:r Krieger:in", "mein treuer Knappe/meine treue Knappin", "tapfer", "schicksalsgeleiteter Angriff", "Arsenal an Waffen", "Killerinstinkt", "Drachenreittier", "monströse Verwandlung"], "weak": ["Versuchungen und Ablenkungen", "weit jenseits meiner Macht", "einschüchternde Handlanger", "hält sich für unbesiegbar"], "quest": "Bald, mein Freund, werde ich diejenige/derjenige sein, die/der die Bestie zu Fall bringt."}, {"title": "Den Himmlischen Geschichtenerzähler Finden", "power": ["Handlungsschutz", "Wegweiser:innen", "meine kleine Schwester", "aufmerksam und wachsam", "wundersame Verkürzung des Weges", "ein zerbrochener Kompass", "ein sanft ziehendes Gefühl", "unerschöpfliche Geduld", "umgeschriebene Szene"], "weak": ["der Demiurg", "ich kenne den Weg nicht", "verblassende alte Legenden", "eingepflanzte Gedanken"], "quest": "Ich weiß nicht, warum, doch ich fühle mich gezwungen, den Zeichen zu folgen und die Seite umzuschlagen."}, {"title": "Die Flut der Dunkelheit Wenden", "power": ["stets hell erstrahlend", "kennt die Wege der Dunkelheit", "treuer Ritterorden", "loyal gegenüber dem Licht", "die Dunkelheit kommt zu mir", "der Sonnenstein", "himmlischer Geistführer", "das innere Licht wiederherstellen", "die Gefallenen wiederbeleben"], "weak": ["Verzweiflung in unseren Reihen", "die Dunkelheit steckt in uns allen", "endlose Fluten", "selbstgerecht"], "quest": "Wenn wir die Dunkelheit zurückdrängen wollen, müssen wir es zuerst in uns selbst tun."}]}, {"key": "dominion", "label": "Dominion", "kits": [{"title": "Erzmagier:in des Ordens", "power": ["ein arkanes Ritual leiten", "legendäre Leibwache", "Magier:innen des Reiches", "verzauberte Gegenstände", "zutiefst weise", "der Turm der Arkanen Lehre", "beliebt bei ländlichen Magier:innen", "einer/einem Magier:in die Magie entziehen", "verzögern und verwirren"], "weak": ["vom Königshaus gefürchtet", "verbotene Zauberei", "zu nachsichtig", "Pakt mit einem Dämon"], "quest": "Wir müssen neue Magier:innen ausbilden, um jene zu ersetzen, die wir an Krieg und Böses verloren haben."}, {"title": "Monarch:in", "power": ["einen königlichen Erlass verkünden", "persönliche:r Berater:in", "Heer des Reiches", "billige Arbeitskräfte", "gefestigte königliche Blutlinie", "die Hauptstadt", "Unterstützung der Ritterkaste", "Spionagemeister:in", "Widerstand niederschlagen"], "weak": ["Geflüster einer Rebellion", "örtliches Banditentum", "lüstern", "unehelicher Erbe"], "quest": "Alle, die sich gegen die Krone aussprechen, sollen gehängt oder verbannt werden."}, {"title": "Heimtückische:r Kultanführer:in", "power": ["hinterhältige Manöver", "charismatische:r Gesandte:r", "Kultanhänger:innen in jedem Dorf", "illegaler Substanzenhandel", "unbekannte wahre Identität", "sie unvorbereitet erwischen", "loyale öffentliche Personen", "undurchdringliche Hülle aus Schatten", "Schocktaktiken"], "weak": ["immer wieder ein neuer Emporkömmling", "unerbittlich gejagt", "abhängig von der eigenen Substanz", "der Kult ist eine Lüge"], "quest": "Die Nachtschlange muss jedes Zuhause berühren, bevor wir uns offenbaren können."}, {"title": "Jenseitiges Reich", "power": ["sich gegen Sterbliche verteidigen", "weiser Geist als Gemahlin/Gemahl", "himmlische Bewohner", "Essenz der Träume", "mit Voraussicht gesegnet", "Kreise der Macht", "freundlich gesinnte Sterbliche", "Befehlsgewalt über den Schleier", "sich in Luft auflösen"], "weak": ["frühere Besucher", "schwindendes Territorium", "langsam zu handeln", "Handel mit Menschen"], "quest": "Die Dämmerlande müssen verborgen bleiben, sonst riskieren sie ihren Untergang."}, {"title": "Handelszunftmeister:in", "power": ["Kapital mobilisieren", "persönliche:r Bankier:in", "Händler:innen und Hausierer", "wertvolle Ware", "Täuschung erschnüffeln", "vom Krieg profitieren", "wohlhabende Bürger:innen", "beiläufige Bestechung", "feindliche Übernahme"], "weak": ["schwieriger Rat", "unsichere Handelsrouten", "nie zufrieden", "Mörder:in"], "quest": "Die Zunft baut auf Profit! Wo kein Profit ist, ist keine Zunft."}, {"title": "Schrecken des Landes", "power": ["„Flieht, Sterbliche!“", "eine sterbliche Freundin/ein sterblicher Freund", "die Bestien des Landes", "reichliche Nahrung", "gnadenlos", "mein Unterschlupf", "Sterbliche, die mich besänftigen wollen", "furchterregende Legenden", "plötzlicher Angriff"], "weak": ["furchtlose Held:innen", "Seuche", "übermütig", "eine geheime Schwäche"], "quest": "Ich bin das, was sie am meisten fürchten."}]}, {"key": "mastery", "label": "Mastery", "kits": [{"title": "Botschafter:in des Wandels", "power": ["hervorragende:r Verhandler:in", "die Unüberzeugbaren überzeugen", "eine Revolution entfachen", "Netzwerk von Aufwiegler:innen", "die Straßen der Hauptstadt", "verbreitet sich wie ein Lauffeuer", "der Institution die Hand aufzwingen", "einen Aufstand entfachen", "von der alten Garde gefürchtet"], "weak": ["bedauerliche Opfer", "kein Privatleben", "das Kind mit dem Bade ausschütten", "von der alten Garde verachtet"], "quest": "Eine neue Morgenröte bricht an, und es wird keine Umkehr geben."}, {"title": "Herr/Herrin der Jagd", "power": ["mit meiner Beute spielen", "verschwinden und dann zuschlagen", "uralte Waldgötter jagen", "Bogen des Jäger-Dämons", "die Große Wildnis", "Großwild erlegen", "instinktiv Beute spüren", "mit einem Schuss töten", "kann eine ganze Stadt ernähren"], "weak": ["die letzte Rache der Beute", "übler Gestank des Todes", "geringere Beute ignorieren", "von Aasfressern verfolgt"], "quest": "Entweder ich jage würdige Beute, oder es ist gar keine Jagd."}, {"title": "Schmied:in Himmlischer Juwelen", "power": ["die schönsten Juwelen anfertigen", "himmlisches Licht einfangen", "Schönheit, die Herzen schmilzt", "unterstützt von den Unsterblichen", "die Schmiede der Smaragdenen Lichter", "wie ein Stern erstrahlen", "ein Angebot herauslocken", "die Sonne verdunkeln", "unermesslich reich"], "weak": ["die Welt verdunkelt sich", "augenblendender Luxus", "sieht schlichte Schönheit nicht mehr", "Diebe"], "quest": "Ich werde alles Licht in einen einzigen Edelstein gießen, der unsere neue Sonne sein wird."}, {"title": "Genialer Feldherr/Geniale Feldherrin", "power": ["militärische Logistik", "unerwartetes Manöver", "kaiserliche Heere niederschlagen", "Elitetruppen", "fliegendes Kommandozelt", "rascher Sieg", "ihre Generäle umdrehen", "sie zur Kapitulation schockieren", "Söldner auf Abruf"], "weak": ["regelmäßige Mordanschläge", "streng", "hinterlässt nur verbrannte Erde", "Feinde ohne etwas zu verlieren"], "quest": "Sieg hat keinen Preis; er ist seine eigene unbezahlbare Belohnung."}, {"title": "Inspirierte:r Baumeister:in", "power": ["Landschaften umgestalten", "essenzsammelnde Bauwerke", "Tempel für die Götter entwerfen", "eine Nation von Sklav:innen", "Große Halle der Steinmetze", "es früher fertigstellen", "Aktivierung von Leylinien", "ein Gebäude mit einem Schlag einstürzen lassen", "meine Wahl des Landes"], "weak": ["Sklavenaufstand", "gefühlskalt", "übertrieben und abweisend", "Bausaboteur:innen"], "quest": "Der Tempel der Neun Gottheiten muss Macht und Ehrfurcht ausstrahlen."}, {"title": "Vollendete Seele", "power": ["tiefe Meditation", "die höchste Wahrheit erkennen", "die Realität mit einem Wort beugen", "Mönchsorden", "Rückzugsort auf dem Berggipfel", "sich kosmischen Mächten stellen", "Bestiarium der Dämonen", "mich augenblicklich befreien", "absolut keine Bindungen"], "weak": ["Strudel dämonischen Einflusses", "wird als herablassend empfunden", "kann keinen einfachen Spaß haben", "eifersüchtige Anhänger:innen"], "quest": "ICH BIN. Nichts kann das ändern."}]}, {"key": "monstrosity", "label": "Monstrosity", "kits": [{"title": "Erzunhold des Wahnsinns", "power": ["augenblickliche Gestaltwandlung", "Beschwörer:in des Chaos", "Ordnung in der Region stören", "Waffen verwandeln", "Sterbliche verwandeln", "berauschende Freiheit", "Bindungen erkennen", "planenübergreifende Monster", "ich bin eure Befreiung"], "weak": ["„keine Regeln“ ist auch eine Regel", "ungewöhnliche Integrität", "braucht einen Wirt", "Schöpfergötter"], "quest": "Wer wird die nächste arme Seele sein, die mich in ihre Welt lässt?"}, {"title": "Riesenspinnenkönigin", "power": ["stärkster Stich", "Schattenweberin", "acht speerartige Beine", "Chitinpanzer", "klebrige Netze schießen", "düster unergründlich", "jedes Beben spüren", "endloser Spinnenschwarm", "Königin der Unterwelt"], "weak": ["kann keine Hoffnung erfassen", "Tageslicht", "anfällig für Säure", "Anwärter:innen auf den Thron"], "quest": "Sobald ich die Sonne auslösche, wird mir die ganze Welt gehören."}, {"title": "Drache", "power": ["oberste:r Raubjäger:in", "menschliche Gestalt annehmen", "flüssiges Feuer speien", "undurchdringliche Schuppenrüstung", "Schwanzhieb", "Gefühl der Überlegenheit", "die Welt von oben", "machthungrige Kriegsfürsten", "Drachenschrecken"], "weak": ["unterschätzt Sterbliche", "erdbindender Zauber", "verwundbare Unterseite", "andere Drachen"], "quest": "Ich bin Herr über diese Lande. Verneigt euch vor mir, oder werdet mein nächster Happen!"}, {"title": "Gottgeist", "power": ["wundersame Schönheit", "Domänenmagie (wählen)", "das Schutzgebiet formen", "Körper aus reinem Geist", "Sterbliche wie Insekten zerquetschen", "unerschütterliche Gewissheit", "Schicksale erahnen", "Scharen von Anbetenden", "Sterbliche inspirieren"], "weak": ["einseitig fixiert", "schändende Zauberei", "Essenz gebunden an (wählen)", "gegnerische Götter"], "quest": "Beschütze mein Schutzgebiet."}, {"title": "Elementartitan", "power": ["aus den Elementen gemacht", "Macht über die Elemente", "Naturkatastrophen verursachen", "gewaltig", "Flutwelle", "urtümliche Wut", "elementare Beschaffenheit erkennen", "geringere Elementarwesen erschaffen", "ehrfurchtgebietend"], "weak": ["die Seele – das bindende Element", "benötigt große Mengen des Elements", "Kräfte der Entropie", "Zauberkundige"], "quest": "Alle Dinge sind nur flüchtige Formen der ewigen Elemente und müssen neu geformt werden."}, {"title": "Mächtige:r Vampir:in", "power": ["schneller als das Auge erfassen kann", "unmöglich zu töten", "Massenpanik verursachen", "verschwinden und wieder erscheinen", "blutige Gewalt", "unstillbarer Hunger", "Leben und Tod spüren", "Kult der Leibeigenen", "hypnotische Präsenz"], "weak": ["einsam", "uralte Blutrituale", "ein Pfahl durchs Herz", "Hüter:in der natürlichen Ordnung"], "quest": "Die Leute dieser Stadt entsprechen ganz meinem Geschmack. Ich hätte gern mehr."}]}]}];

const TROPE_LIBRARY = [{"title": "(Mehr als nur ein:e) Trinker:in", "category": "Dorfvolk", "flavor": "Noch ein Krug Bier wird keinen Unterschied machen, wird weder die Stimmen deiner längst verlorenen Verwandten noch das Heulen deiner Albträume ertränken. Für die meisten hier bist du nur dieses bedauerliche, feste Inventar der örtlichen Taverne, leicht zu übersehen, wäre da nicht dein übler Geruch. Sie ahnen nicht, wer du wirklich bist, was du wirklich bist. Betet, dass sie es niemals erfahren.", "kits": [{"name": "Wirtshausraufbold", "type": "Circumstance", "page": 92}, {"name": "Letzte:r meiner Art", "type": "Past", "page": 96}, {"name": "Frohnatur", "type": "Personality", "page": 100}], "choose": [{"name": "Handschuh des Riesen", "type": "Relic", "page": 114}, {"name": "Die Welt Beenden", "type": "Destiny", "page": 118}, {"name": "Werwolfsgestalt", "type": "Shapeshifting", "page": 217}], "backpack": "halbleere Flasche, ein ungewöhnliches Juwel oder eine traurige Geschichte"}, {"title": "Verschwitzte:r Schmied:in", "category": "Dorfvolk", "flavor": "Jeden Tag bedienst du den Blasebalg, beugst dich über den Schmelztiegel und formst dann das widerspenstige Metall, ein Hammerschlag nach dem anderen, bis es bereit ist, seinem Zweck zu dienen. Jeden Abend zählst du deine Münzen und zählst deine Segnungen, legst etwas für jene beiseite, die es nötiger brauchen, ohne die geringste Ahnung, was noch kommen wird. Doch schon bald wird sich alles ändern, und du wirst diejenige/derjenige sein, die/der im Feuer geschmiedet wird.", "kits": [{"name": "Schmied:in", "type": "Skill Or Trade", "page": 102}, {"name": "Stark wie ein Ochse", "type": "Trait", "page": 104}, {"name": "Herz aus Gold", "type": "Personality", "page": 100}], "choose": [{"name": "Jugendliebe", "type": "Devotion", "page": 94}, {"name": "Schwer Schuftende:r", "type": "Circumstance", "page": 92}, {"name": "Erbstück-Langschwert", "type": "Relic", "page": 114}], "backpack": "dicke Lederschürze, ein paar zusätzliche Hufeisen oder ein kleiner Beutel Münzen"}, {"title": "Dorfklatsch", "category": "Dorfvolk", "flavor": "Du wirst nicht glauben, welche Geschichten sich in einem kleinen Dorf verbreiten! Wenn die Nächte lang und kalt sind, schadet ein wenig erfundene Unterhaltung niemandem. Sicher, manchen sträuben sich die Federn, besonders wenn das Gerücht der Wahrheit entspricht; doch nach einer Weile ist alles vergessen und vergeben. In Wahrheit ist die Gerüchteküche eine uralte Methode, um über jene zu wachen, die dir am nächsten stehen – eine Aufgabe, der du dich mit großer Sorgfalt widmest.", "kits": [{"name": "Klatschmaul", "type": "Personality", "page": 100}, {"name": "Hofbesitzer:in", "type": "Skill Or Trade", "page": 102}, {"name": "Unser Dorf", "type": "Devotion", "page": 94}], "choose": [{"name": "Lästiger Kobold", "type": "Companion", "page": 126}, {"name": "Heckenhexe", "type": "Witchcraft", "page": 229}, {"name": "Ausgezeichnete:r Koch/Köchin", "type": "Prodigious Ability", "page": 112}], "backpack": "versteckter Keks, Hausschrein oder Schmutziges Geheimnis über (wählen)"}, {"title": "Ergrauter Jäger/Ergraute Jägerin", "category": "Dorfvolk", "flavor": "Das Leben am Rande der Wildnis hat seinen eigenen Herzschlag, einen, den nur Jäger:innen hören. Worte sagen so wenig, vielleicht benutzt du sie deshalb so selten. Für dich sind Wind und Regen, Fußspuren und das Knistern trockener Blätter, selbst das schnüffelnde Näschen deines Hundes, allesamt vielsagende Zeichen, die dich zu deiner Beute führen und dich davor bewahren, selbst zu einer zu werden.", "kits": [{"name": "Hinterland-Fährtenleser:in", "type": "Skill Or Trade", "page": 102}, {"name": "Schroff", "type": "Personality", "page": 100}, {"name": "Imposanter Wolfshund", "type": "Companion", "page": 126}], "choose": [{"name": "Monsterkunde", "type": "Knowledge", "page": 110}, {"name": "Stark wie ein Ochse", "type": "Trait", "page": 104}, {"name": "Furchtbare:r Waffenmeister:in", "type": "Prodigious Ability", "page": 112}], "backpack": "Stahlfalle, Jagdbogen oder Kochgeschirr"}, {"title": "Reisende:r Spielmann/Spielfrau", "category": "Dorfvolk", "flavor": "Für dich gibt es nichts Besseres als die offene Straße, den Wind im Haar und eine Melodie in der Luft! Also spielst du und wanderst, von stürmischer See zu verschneitem Gipfel, von schattigen Wäldern zu eiskalten Bächen. Und du singst, für alle, die zuhören mögen, davon, wo du warst und was du gesehen hast, sei es fröhlich heiter oder bitter herb.", "kits": [{"name": "Frohnatur", "type": "Personality", "page": 100}, {"name": "Fesselnde:r Unterhalter:in", "type": "Prodigious Ability", "page": 112}, {"name": "Weitgereist", "type": "Past", "page": 96}], "choose": [{"name": "Handgefertigte Panflöte", "type": "Possessions", "page": 130}, {"name": "Kennt Jede Provinz", "type": "Knowledge", "page": 110}, {"name": "Bevorzugte:r Kleriker:in [Gottheit]", "type": "Influence", "page": 108}], "backpack": "gekochtes Lederwams, Streitkolben oder ein einstudierter Scherz"}, {"title": "Wildländer-Vorreiter:in", "category": "Wanderer", "flavor": "Reitet, plündert und brüllt für Ruhm, Blut und Gold! Als Kundschafter:in und Plänkler:in deines reitenden Volkes bist du weit über die Ebenen hinausgezogen, die du Heimat nennst, um neue Siedlungen zum Plündern und Rauben zu finden. Doch dabei hast du festgestellt, dass diese fremde Welt aus Höfen und Mühlen bei jeder Begegnung mehr Gemeinsamkeiten mit deiner eigenen offenbart …", "kits": [{"name": "Verbissen", "type": "Trait", "page": 104}, {"name": "Schlachtreiter:in", "type": "People", "page": 98}, {"name": "Plänkler:in", "type": "Skill Or Trade", "page": 102}], "choose": [{"name": "Unser Dorf", "type": "Devotion", "page": 94}, {"name": "Schwertkameradschaft", "type": "Companion", "page": 126}, {"name": "Troll", "type": "Uncanny Being", "page": 116}], "backpack": "kunstvolle Halskette, Rundschild mit Stacheln oder ein betörendes Moschusöl"}, {"title": "Rächerischer Halsabschneider", "category": "Gesetzlose", "flavor": "Ob ausgebildete:r Henker:in mit erlerntem Handwerk oder bloße:r Handlanger:in ohne andere Überlebenschance – du beherrschst die Kunst, jenen die Kehle durchzuschneiden, die es deiner Meinung nach verdient haben. Du hinterlässt eine Blutspur, während du einer Straße folgst, die dich schließlich zu jener Person führt, die dich auf diesen Weg gebracht hat, die dir Unrecht getan hat und deren Leben du beenden willst.", "kits": [{"name": "Sehnt sich nach Rache", "type": "Duty", "page": 106}, {"name": "Akrobatische Beweglichkeit", "type": "Trait", "page": 104}, {"name": "Verborgene Dolche", "type": "Possessions", "page": 130}], "choose": [{"name": "Flüchtling", "type": "Circumstance", "page": 92}, {"name": "Professionelle:r Einbrecher:in", "type": "Prodigious Ability", "page": 112}, {"name": "Den Mächtigen Erlegen", "type": "Destiny", "page": 118}], "backpack": "Kapuzenmantel, Seil und Enterhaken oder ein Betäubungsmittel"}, {"title": "Verschlagene:r Gauner:in", "category": "Gesetzlose", "flavor": "Du bist ein nichtsnutziger, verlogener Tagedieb, der von der Leichtgläubigkeit oder Güte anderer profitiert und sie von ihren materiellen Sorgen befreit – sprich: ihrer Münze, ihrem Abendessen oder ihrem Sack Saatgut. Wenn sie es herausfinden und dich zur Rede stellen, fällt dir eine weitere Ausrede ein, begleitet von einem breiten, entschuldigenden Grinsen. Nun ja, bisher hat es immer funktioniert!", "kits": [{"name": "Geübte:r Lügner:in", "type": "Personality", "page": 100}, {"name": "Fingerfertigkeit", "type": "Skill Or Trade", "page": 102}, {"name": "Wirtshausraufbold", "type": "Circumstance", "page": 92}], "choose": [{"name": "Außergewöhnliche Schönheit", "type": "Trait", "page": 104}, {"name": "Sachverständige:r Gutachter:in", "type": "Knowledge", "page": 112}, {"name": "Hafenmeister:in", "type": "Influence", "page": 108}], "backpack": "Schälmesser, gezinkte Würfel oder eine vorbereitete Ablenkung"}, {"title": "Grober Bandit/Grobe Banditin", "category": "Gesetzlose", "flavor": "Die zivile Gesellschaft hat dich verstoßen, und so verstößt du sie. Vielleicht glaubst du, die Menschen seien ängstliche Schafe, die mit der Speerspitze getrieben werden müssen, oder dass die Reichen für die Armen zahlen sollten. Was auch immer deine Weltsicht ist, sie führt zu Gewalt und hat dir ein paar Narben sowie einen schlechten Ruf in den meisten Dörfern eingebracht – der Sorte, bei der die Dorfbewohner nach ihren Mistgabeln greifen.", "kits": [{"name": "Flüchtling", "type": "Circumstance", "page": 92}, {"name": "Ergaunerter Besitz", "type": "Possessions", "page": 130}, {"name": "Plänkler:in", "type": "Skill Or Trade", "page": 102}], "choose": [{"name": "Herz aus Gold", "type": "Personality", "page": 100}, {"name": "Schwertkameradschaft", "type": "Companion", "page": 126}, {"name": "Hexenblut", "type": "People", "page": 98}], "backpack": "einschüchternde Maske, robuster Speer oder ein Leinensack"}, {"title": "Angehende:r Knappe/Knappin", "category": "Gesetzlose", "flavor": "Ein Held des Reiches zu sein, Böses und Ungerechtigkeit zu bekämpfen, deine dunklen Feinde zu bezwingen – davon hast du schon immer geträumt. Und so hast du dich als Knappe/Knappin einer/eines reisenden Ritterin/Ritters verschworen – einer echten Ritterin/einem echten Ritter, mit Rüstung und allem –, der/dem du nun folgst. Nach ein paar Schwerthieben schmerzen dir noch immer die Arme, doch du bist auf dem Weg, deine Bestimmung zu erfüllen. Was könnte da schon schiefgehen?", "kits": [{"name": "Ritter Werden", "type": "Devotion", "page": 94}, {"name": "Plänkler:in", "type": "Skill Or Trade", "page": 102}, {"name": "Inspirierende:r Meister:in", "type": "Companion", "page": 126}], "choose": [{"name": "Ross und Rüstzeug", "type": "Possessions", "page": 130}, {"name": "Verbissen", "type": "Trait", "page": 104}, {"name": "Herz aus Gold", "type": "Personality", "page": 100}], "backpack": "Schutzmedaillon, besticktes Taschentuch oder ein Hanfseil"}, {"title": "Verwegene:r Freibeuter:in", "category": "Gesetzlose", "flavor": "Wofür ist das Leben da, wenn nicht zum Feiern, zum Ärgern der Wachen und zum Kreuzen der Klingen? Ebenso gewandt im Spott wie im Fechten, parierst du jeden Schwertstoß und weichst jedem Versuch aus, dir die Laune zu verderben. Mit einem verschmitzten Lächeln und einem Krug in der freien Hand ziehst du durch jedes Dorf, schließt für einen Tag Rivalitäten und Freundschaften, nur um weiterzuziehen, sobald du dich mit jedem duelliert hast, den du finden konntest.", "kits": [{"name": "Frohnatur", "type": "Personality", "page": 100}, {"name": "Akrobatische Beweglichkeit", "type": "Trait", "page": 104}, {"name": "Furchtbare:r Waffenmeister:in", "type": "Prodigious Ability", "page": 112}], "choose": [{"name": "Flüchtling", "type": "Circumstance", "page": 92}, {"name": "Gerade Erst Kennengelernte:r Freund:in", "type": "Companion", "page": 126}, {"name": "Fingerfertigkeit", "type": "Skill Or Trade", "page": 102}], "backpack": "gewagtes Korsett, langer Peitschenhieb oder ein wasserdichtes Alibi"}, {"title": "Söldner:in", "category": "Waffenträger", "flavor": "Ölt eure Klinge. Repariert eure Rüstung. Übt eure Formen. Wenn der Kampf euer Lebensunterhalt ist und bewaffnete Auseinandersetzung eine unausweichliche Gewissheit, vertraut ihr auf feste Abläufe. Es wird keine Zeit zum Nachdenken bleiben, wenn eine Bande von Wegelagerern eure Karawane überfällt oder eine monströse Bestie versucht, euch die Kehle aufzureißen. Ihr müsst bereit sein, den Stahl zu ziehen und euer Versprechen einzulösen.", "kits": [{"name": "Furchtbare:r Waffenmeister:in", "type": "Prodigious Ability", "page": 112}, {"name": "Im Krieg Geschmiedet", "type": "Past", "page": 96}, {"name": "Auftragsarbeit", "type": "Duty", "page": 106}], "choose": [{"name": "Respektierte:r Anführer:in", "type": "Influence", "page": 108}, {"name": "Zauberklinge", "type": "Sorcery", "page": 220}, {"name": "Monsterkunde", "type": "Knowledge", "page": 110}], "backpack": "wallender Umhang, erstklassige Stiefel oder eine Rauchpfeife"}, {"title": "Geweihte:r Kavalier:in", "category": "Gläubige", "flavor": "Auf einem steinernen Altar oder unter einer alten Eiche hast du dein Leben und dein Schwert in den Dienst einer höheren Macht gestellt, die dir eine edle Bestimmung auferlegt hat. Diese nahezu unmögliche Reise wird von dir nicht nur Kampfgeschick und große Taten verlangen, sondern auch Demut und Reinheit des Herzens – Eigenschaften, die du in dir selbst vielleicht noch nicht gefunden hast.", "kits": [{"name": "Treueeid", "type": "Duty", "page": 106}, {"name": "Ross und Rüstzeug", "type": "Possessions", "page": 130}, {"name": "Furchtbare:r Waffenmeister:in", "type": "Prodigious Ability", "page": 112}], "choose": [{"name": "Segen der Göttin", "type": "Magic", "page": 128}, {"name": "Landadlige:r", "type": "Circumstance", "page": 92}, {"name": "Erbstück-Langschwert", "type": "Relic", "page": 114}], "backpack": "Verpflegung, Feuerzeug oder eine Karte der Region"}, {"title": "Dämonenbanner:in", "category": "Gläubige", "flavor": "Wenn Dinge der jenseitigen Welt herüberdringen und die natürliche Ordnung stören, Kindern Krankheit bringen oder totes Vieh besetzen, dann ruft man dich. Bewaffnet mit nichts als deinen Gebeten und einer Handvoll heiliger Zeichen ringst du mit dem Wesen, bis du es austreibst. Dann nimmst du deinen Lohn – eine warme Mahlzeit – und ziehst wieder hinaus in den Regen.", "kits": [{"name": "Bannsprüche", "type": "Magic", "page": 128}, {"name": "Bewohner des Ungesehenen", "type": "Knowledge", "page": 110}, {"name": "Mystische Pilgerreise", "type": "Past", "page": 96}], "choose": [{"name": "Ausgestoßene:r", "type": "Circumstance", "page": 92}, {"name": "Schroff", "type": "Personality", "page": 100}, {"name": "Karawanenvolk", "type": "People", "page": 98}], "backpack": "Beutel Salz, Wurzelknüppel oder Windspiel"}, {"title": "Hingebungsvolle:r Heiler:in", "category": "Gläubige", "flavor": "Die Welt ist voller Leid – Hungersnot, Seuche, Unglücke und wilde Bestien –, und dabei sind die vom Menschen gemachten Übel noch nicht mitgezählt: Krieg, Tyrannei oder Gewalt. Du hast dich entschlossen, jenen zu helfen, die vom Unglück getroffen wurden, ihre schmerzenden Körper zu heilen oder ihnen beim Übergang beizustehen. Alles, was du hast, sind ein paar Kräutermittel und deine Überzeugung, was getan werden muss.", "kits": [{"name": "Kranke Heilen", "type": "Devotion", "page": 94}, {"name": "Dorfapotheker:in", "type": "Alchemy & Herbalism", "page": 208}, {"name": "Im Krieg Geschmiedet", "type": "Past", "page": 96}], "choose": [{"name": "Begnadete:r Heiler:in", "type": "Prodigious Ability", "page": 112}, {"name": "Schutzgeist", "type": "Companion", "page": 126}, {"name": "Volksheld:in", "type": "Influence", "page": 108}], "backpack": "Kampfstab, geölter Umhang oder zusätzliche Zutaten"}, {"title": "Beschwörer:in der Flammen", "category": "Gläubige", "flavor": "Seit der Geburt mit Runen des Feuers gezeichnet, rufst du mit jedem Zischen deiner Zunge oder jeder Fingerbewegung Feuer herbei. So wild du auch bist, alles, was du je gekannt hast, ist der Orden der Beschwörer, der dich großgezogen hat – doch in dir wächst der Verdacht, dass man dir eine dunkle Wahrheit verschwiegen hat. Und genau das lässt in dir den Wunsch wachsen, die Welt in Brand zu setzen.", "kits": [{"name": "Lodernde:r Beschwörer:in", "type": "Runic Invocation", "page": 216}, {"name": "Ritual-Zirkel", "type": "Devotion", "page": 94}, {"name": "Verflucht", "type": "Past", "page": 96}], "choose": [{"name": "Flüchtling", "type": "Circumstance", "page": 92}, {"name": "Prophetische Visionen", "type": "Trait", "page": 104}, {"name": "Höllenbrut", "type": "Uncanny Being", "page": 116}], "backpack": "seltsames Explosivpulver, geätzter Brustharnisch oder eine schwere Kapuze"}, {"title": "Wandernde:r Thaumaturg:in", "category": "Gläubige", "flavor": "Sehr vieles, das einst war, ist inzwischen dem Verfall anheimgefallen. Darunter die Geheimnisse der Alten und ihr verlorenes Wissen, ihre sogenannte „Magie“. Du bist weit gereist und hast viel von diesem geheimen Wissen gesammelt, und doch ist das, was du weißt, nur ein Tropfen im Ozean. Es gibt noch so viel zu sehen und zu lernen …", "kits": [{"name": "Wandernde:r Zauberer:in", "type": "Sorcery", "page": 222}, {"name": "Weitgereist", "type": "Past", "page": 96}, {"name": "Geschichten der Ahnen", "type": "Knowledge", "page": 110}], "choose": [{"name": "Stab der Zauberbindung", "type": "Relic", "page": 114}, {"name": "Ein Licht Gegen die Dunkelheit", "type": "Duty", "page": 106}, {"name": "Schroff", "type": "Personality", "page": 100}], "backpack": "Zauber des rechtzeitigen Verschwindens, Trank der Genesung oder ein Esel"}, {"title": "Staunende:r Lehrling", "category": "Magier", "flavor": "Den Kessel reinigen, den Boden wischen, das Abendessen kochen – es scheint, als wäre alles, was du als Lehrling deines alten Magiermeisters tust, Arbeit, Arbeit und noch mehr Arbeit. Inzwischen solltest du die Zauberei längst gemeistert haben, jedenfalls deiner eigenen Einschätzung nach, doch alles, was du zustande bringst, sind ein paar Tricks und kleine Zaubersprüche. Bestimmt gibt es eine Abkürzung, die du nehmen könntest …", "kits": [{"name": "Rudimentäre Magie", "type": "Magic", "page": 128}, {"name": "Neugierig", "type": "Personality", "page": 100}, {"name": "Schwer Schuftende:r", "type": "Circumstance", "page": 92}], "choose": [{"name": "Hexenblut", "type": "People", "page": 98}, {"name": "Kranke:r Weise:r", "type": "Devotion", "page": 94}, {"name": "Kessel der Beschwörung", "type": "Relic", "page": 114}], "backpack": "Besen, kräuterreiches Reinigungsbad oder eine Schriftrolle mit unbekanntem Zauber"}, {"title": "Moorland-Einsiedler:in", "category": "Hexen", "flavor": "Egal wie viele HALTET-EUCH-FERN-Schilder du aufstellst – oder wie viele Schädel du auf Spieße spießt –, sie werden dich immer in deinem sumpfigen Rückzugsort aufsuchen. Irgendwie haben sich ihre eingeschrumpelten Köpfchen eingeredet, du könntest ein Mittel gegen ihre Geschwüre brauen oder eine Salbe, die sie stärker macht – und obwohl sie damit nicht falsch liegen, bist du immer versucht, ihnen etwas mit der gegenteiligen Wirkung zu verkaufen!", "kits": [{"name": "Schroff", "type": "Personality", "page": 100}, {"name": "Hinterland-Fährtenleser:in", "type": "Skill Or Trade", "page": 102}, {"name": "Grünhüter:in", "type": "Alchemy & Herbalism", "page": 208}], "choose": [{"name": "Das Land Beschützen", "type": "Duty", "page": 106}, {"name": "Troll", "type": "Uncanny Being", "page": 116}, {"name": "Biberverwandte:r", "type": "People", "page": 98}], "backpack": "belebendes Gebräu, klingelnde Stolperfalle oder seltsame Rindenrüstung"}, {"title": "Landpriester:in", "category": "Hexen", "flavor": "Gekleidet in Hanfgewänder, tanzend in Steinkreisen und grasbewachsenen Lichtungen, dienst du gemeinsam mit deinen Akolyth:innen als geistliche:r Führer:in und Zeremonienmeister:in deines Volkes. Unter mondbeschienenem Nachthimmel führst du heilige Feiern und symbolische Opfergaben durch, um eine harmonische Verbindung mit den ungesehenen Geistern des Landes zu pflegen und ihre zahlreichen Segnungen und Gaben zu empfangen.", "kits": [{"name": "Ratsälteste:r", "type": "Circumstance", "page": 92}, {"name": "Segen der Göttin", "type": "Magic", "page": 128}, {"name": "Ritual-Zirkel", "type": "Devotion", "page": 94}], "choose": [{"name": "Mystische Pilgerreise", "type": "Past", "page": 96}, {"name": "Eine:r des Schönen Volkes", "type": "Uncanny Being", "page": 116}, {"name": "Sternenkundige:r", "type": "Knowledge", "page": 110}], "backpack": "gesegnete Sichel, reichhaltiges Erntebündel oder eine warnende Vorahnung"}, {"title": "Machtgierige Hexe", "category": "Hexen", "flavor": "Du gibst dich als alternde:r Berater:in, Sippenoberhaupt oder Kupplerin/Kuppler aus, bist in Wahrheit jedoch eine überaus mächtige Weberin von Intrigen und Flüchen, rücksichtslos in deinem Streben nach Macht für deinen Clan, deinen Zirkel oder deinen Kult. Bleibst du unkontrolliert, wirst du eine Gemeinschaft von innen vergiften und ihr soziales und geistiges Mark verzehren, während du immer mächtiger wirst.", "kits": [{"name": "Verschwörer:in", "type": "Influence", "page": 108}, {"name": "Fluch und Verwünschung", "type": "Magic", "page": 128}, {"name": "Kessel der Beschwörung", "type": "Relic", "page": 114}], "choose": [{"name": "Heimtückische:r Kultanführer:in", "type": "Dominion", "page": 120}, {"name": "Riesenspinnenkönigin", "type": "Monstrosity", "page": 124}, {"name": "Verborgene Dolche", "type": "Possessions", "page": 130}], "backpack": "vergifteter Dolch, Blendbombe oder ein Gehstock"}, {"title": "Mürrischer Hausgeist", "category": "Hexen", "flavor": "Dumme Menschen! Sehen sie es denn nicht? Können sie nicht erkennen, dass du ihnen im Haushalt hilfst?! Du reparierst das Mauerwerk, schließt das Gattertor, wenn es offen gelassen wurde, und tippst jedes Huhn an, damit es zwei Eier legt – und alles, was du dafür verlangst, ist eine Schale Brei, die auf der Türschwelle oder am Herd zurückgelassen wird. Ach, welche Geheimnisse könntest du ihnen offenbaren, würden sie nur endlich ihre Nasen aus ihren eigenen Angelegenheiten nehmen!", "kits": [{"name": "Kleiner Hausgeist", "type": "Uncanny Being", "page": 116}, {"name": "Schroff", "type": "Personality", "page": 100}, {"name": "Hofbesitzer:in", "type": "Skill Or Trade", "page": 102}], "choose": [{"name": "Beutel mit Verzaubertem Staub", "type": "Relic", "page": 114}, {"name": "Bewohner des Ungesehenen", "type": "Knowledge", "page": 110}, {"name": "Erfahrene:r Händler:in", "type": "Prodigious Ability", "page": 112}], "backpack": "Nadel und Faden, Schale Brei oder ein eindringlingsstoppendes Zeichen"}, {"title": "Flussschönheit", "category": "Hexen", "flavor": "Ein Flussgeist oder eine ertrunkene Seele – lange schon hast du ahnungslose Dorfbewohner in das kühle Wasser deines Baches oder Teiches gelockt, aus dem sie nie wieder auftauchten. Ob aus alter Feindschaft mit der Menschheit oder persönlicher Rachsucht gegenüber deinem eigenen Volk, du bist zu dem geworden, wovor Eltern ihre Kinder warnen. Bis eines Tages jemand durch dein Wasser watet, der würdig ist, weiterzuleben …", "kits": [{"name": "Eine:r des Schönen Volkes", "type": "Uncanny Being", "page": 116}, {"name": "Unterwassergewandtheit", "type": "Trait", "page": 104}, {"name": "Sehnt sich nach Rache", "type": "Duty", "page": 106}], "choose": [{"name": "Erbstück-Langschwert", "type": "Relic", "page": 114}, {"name": "Angebetet", "type": "Influence", "page": 108}, {"name": "Fesselnde:r Unterhalter:in", "type": "Prodigious Ability", "page": 112}], "backpack": "geschnitzter Schädelhelm, verrosteter Spieß oder ein saftiger Fisch"}, {"title": "Hautwandler:in", "category": "Kreaturen", "flavor": "Woher du kommst, was du bist – solche Fragen zählen nicht. Gerade jetzt bist du diese Person, doch morgen wirst du jene sein. Als Gestaltwandler:in kannst du die Form von Menschen und sogar Tieren annehmen. Doch die Leute werden misstrauisch, und dein Ruf eilt dir mittlerweile voraus, schließt sich um dich wie eine Schlinge, während du versuchst, die eine Frage zu beantworten, die wirklich zählt: Was willst du?", "kits": [{"name": "Doppelgänger:in", "type": "Shapeshifting", "page": 219}, {"name": "Ausgestoßene:r", "type": "Circumstance", "page": 92}, {"name": "Geübte:r Lügner:in", "type": "Personality", "page": 100}], "choose": [{"name": "Kunsthandwerker:in", "type": "Skill Or Trade", "page": 102}, {"name": "Letzte:r meiner Art", "type": "Past", "page": 96}, {"name": "Ergaunerter Besitz", "type": "Possessions", "page": 130}], "backpack": "verborgener Dolch, passende Kleidung oder ein auswendig gelerntes persönliches Detail"}, {"title": "Hochmütige:r Höfling", "category": "Adel", "flavor": "Lächle, egal wie sehr es dich innerlich wurmt. Wahre den Schein, halte die Etikette. Hülle dich in Manieren, um deine intriganten Gedanken vor deiner nächsten politischen Beute zu verbergen. Du hast Pläne für all jene, die dir in die Quere gekommen sind, oder deren Position und Macht du begehrst. Ein Gerücht hier, ein Vorschlag dort, ein paar Verpflichtungen daran geknüpft. Am Ende wird sich alles herrlich fügen.", "kits": [{"name": "Verschwörer:in", "type": "Influence", "page": 108}, {"name": "Landadlige:r", "type": "Circumstance", "page": 92}, {"name": "Klatschmaul", "type": "Personality", "page": 100}], "choose": [{"name": "Hochwohlgeborene Bildung", "type": "Past", "page": 96}, {"name": "Treueeid", "type": "Duty", "page": 106}, {"name": "Botschafter:in des Wandels", "type": "Mastery", "page": 122}], "backpack": "Säbel, Fläschchen Gift oder ein Kartenspiel"}, {"title": "Schwermütige:r Monarch:in", "category": "Adel", "flavor": "Schwer liegt die Krone, und sie liegt auf deinem Haupt. Krieg an den Grenzlanden, schwindende Staatskassen, Hofintrigen, aufkeimende Rebellion … Du sitzt auf dem Thron des Reiches, tief in Gedanken versunken, denn jede Entscheidung, die du triffst, mobilisiert Heere, errichtet Brücken und Türme und besiegelt das Schicksal Tausender.", "kits": [{"name": "Monarch:in", "type": "Dominion", "page": 120}, {"name": "Uneinnehmbare Festung", "type": "Possessions", "page": 130}, {"name": "Schwertkameradschaft", "type": "Companion", "page": 126}], "choose": [{"name": "Im Krieg Geschmiedet", "type": "Past", "page": 96}, {"name": "Prophetische Visionen", "type": "Trait", "page": 104}, {"name": "Körperloser Geist", "type": "Uncanny Being", "page": 116}], "backpack": "vergoldeter Pokal, Verstärkungstruppen oder eine private Berghütte"}, {"title": "Hoffnung des Reiches", "category": "Adel", "flavor": "Während die alte, korrupte Monarchie am Rande des Untergangs taumelt, richten sich die Blicke des Volkes auf dich – ihre:n designierte:n Erb:in oder geliebte:n Held:in. Bestimmt, das Reich eines Tages zu regieren, ob durch Geburt, Prophezeiung oder einen höfischen Handel, kümmerst du dich dennoch mehr um die Untertanen des Königreichs als um deinen eigenen Aufstieg – und genau deshalb setzen sie ihr Vertrauen in dich.", "kits": [{"name": "Herz aus Gold", "type": "Personality", "page": 100}, {"name": "Volksheld:in", "type": "Influence", "page": 108}, {"name": "Den Thron Besteigen", "type": "Destiny", "page": 118}], "choose": [{"name": "Außergewöhnliche Schönheit", "type": "Trait", "page": 104}, {"name": "Furchtbare:r Waffenmeister:in", "type": "Prodigious Ability", "page": 112}, {"name": "Hochwohlgeborene Bildung", "type": "Past", "page": 96}], "backpack": "ledergebundenes Buch, einfache Bürgerkleidung oder ein kleiner Beutel Gold"}, {"title": "Ein Gott/Eine Göttin des Waldes", "category": "Adel", "flavor": "Du bist der Tautropfen, der die Nadeln einer Immergrünen hinabgleitet; ein Lachs, der einen schattigen Bach hinaufspringt; das schwerfällige Seufzen der Erde, das niemand hört. All das bist du, doch für die Menschen bist du das Antlitz des unergründlichen Waldes, des Lebens, so üppig, dass sie es nicht fassen können. Kein Wunder, dass sie dich fürchten. Sie haben vergessen, woher sie kamen; vielleicht könntest du sie daran erinnern.", "kits": [{"name": "Gottgeist", "type": "Monstrosity", "page": 124}, {"name": "Urtümliche:r Erdformer:in", "type": "Landshaping", "page": 212}, {"name": "Jenseitiges Reich", "type": "Dominion", "page": 120}], "choose": [{"name": "Magische Samen", "type": "Relic", "page": 114}, {"name": "Lästiger Kobold", "type": "Companion", "page": 126}, {"name": "Herr/Herrin der Jagd", "type": "Mastery", "page": 122}], "backpack": "eine Armee lebender Bäume, Stimmen im Wind oder ein Trank der Geistesbefreiung"}, {"title": "Gefürchtete:r Vampir:in", "category": "Adel", "flavor": "Blut. Alles läuft auf den purpurroten Strom des Lebens hinaus. Über Jahrhunderte und Jahrtausende haben viele Sterbliche das ihre vergossen, um von deinem kosten zu dürfen und ewiges Leben zu erlangen, geborgen in der Wiege der Dunkelheit. Du lebst unter ihnen, doch nur die Mächtigsten ihrer Art wissen von deiner Existenz. Vielleicht ist das auch besser so – je weniger von ihnen versuchen, sich in die Ernte einzumischen, desto besser.", "kits": [{"name": "Mächtige:r Vampir:in", "type": "Monstrosity", "page": 124}, {"name": "Angebetet", "type": "Influence", "page": 108}, {"name": "Ausgestoßene:r", "type": "Circumstance", "page": 92}], "choose": [{"name": "Uneinnehmbare Festung", "type": "Possessions", "page": 130}, {"name": "Hochwohlgeborene Bildung", "type": "Past", "page": 96}, {"name": "Eins mit der Dunkelheit", "type": "Magic", "page": 128}], "backpack": "Fläschchen königlichen Blutes, Stachelkette oder ein treuer Leibeigener"}, {"title": "Prächtiger Drache", "category": "Monster & Götter", "flavor": "Du zählst zu den meistgefürchteten und meistbewunderten Kreaturen der Welt – ein geflügelter Lindwurm, eine monströse Echse. Die wenigen tapferen Krieger:innen, die es wagen, sich deiner Schreckensherrschaft zu widersetzen, gehen rasch durch Klaue, Schwanz, Fang oder giftigen Atem zugrunde. Doch bei all ihren Schwächen faszinieren dich die Sterblichen, und du sehnst dich danach, ihre kleinlichen Wünsche und edlen Herzen zu verstehen. Fliege nur nicht zu tief hinab …", "kits": [{"name": "Drache", "type": "Monstrosity", "page": 124}, {"name": "Neugierig", "type": "Personality", "page": 100}, {"name": "Herr/Herrin der Jagd", "type": "Mastery", "page": 122}], "choose": [{"name": "Ungezählte Reichtümer", "type": "Possessions", "page": 130}, {"name": "Vorhergesagter Tod", "type": "Destiny", "page": 118}, {"name": "Schrecken des Landes", "type": "Dominion", "page": 120}], "backpack": "eine weidende Herde, Drachenpanzerung oder ein Wort der Befehlsgewalt"}];

/* ============================================================
   APP-STATE
   ============================================================ */
const state = {
  mainTab: "questions",   // "questions" | "kits" | "tropes" | "chars"
  qBook: "origin",
  qCat: null,
  kitBook: "origin",     // "origin" | "adventure" | "greatness"
  kitType: null,
  tropeQuery: "",
  wTropeIdx: null,
  wChoiceIdx: null,
  wTagSel: null,
  wBackpack: "",
  wName: "",
  sheetIdx: null,
};

const CHARS_KEY = "woto_standalone_chars_v1";
function loadChars(){
  try{
    const raw = localStorage.getItem(CHARS_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  }catch(e){ return []; }
}
function saveChars(){
  try{ localStorage.setItem(CHARS_KEY, JSON.stringify(CHARACTERS)); }
  catch(e){ /* privates Fenster o. Ä. — bleibt auf die Sitzung beschränkt */ }
}
/* ------------------------------------------------------------
   Charakter zu CHARACTERS hinzufügen, speichern UND automatisch
   als .json-Datei herunterladen (Download-Ordner des Geräts) —
   dient als Backup/Export, unabhängig vom localStorage.
   ------------------------------------------------------------ */
function slugifyFilename(s){
  return (s||"charakter").toString().trim()
    .replace(/[^a-zA-Z0-9äöüÄÖÜß _-]/g, "")
    .replace(/\s+/g, "_")
    .slice(0, 60) || "charakter";
}
function downloadCharacterJson(character){
  try{
    const json = JSON.stringify(character, null, 2);
    const blob = new Blob([json], {type: "application/json"});
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${slugifyFilename(character.name)}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(()=>URL.revokeObjectURL(url), 1000);
  }catch(e){ /* Download nicht verfügbar — Charakter bleibt trotzdem in CHARACTERS gespeichert */ }
}
/* Eingebettet im Spielleitertool (iframe)? Dann wird der Charakter direkt dorthin
   gemeldet und in die Profile übernommen, statt als Datei heruntergeladen zu werden. */
const EMBEDDED = (()=>{ try{ return window.parent !== window; }catch(e){ return true; } })();
function notifyHost(character){
  if(!EMBEDDED) return;
  try{ window.parent.postMessage({ woto:"character", character: JSON.parse(JSON.stringify(character)) }, location.origin); }catch(e){}
}
function addCharacter(character){
  CHARACTERS.push(character);
  saveChars();
  if(EMBEDDED) notifyHost(character); else downloadCharacterJson(character);
  return CHARACTERS.length-1;
}
/* Charakterdatei an die Spielleitung schicken (Teilen-Menü des Geräts, sonst Download). */
async function shareCharacterToGm(character){
  const json = JSON.stringify(character, null, 2);
  const fname = `${slugifyFilename(character.name)}.json`;
  try{
    const file = new File([json], fname, {type:"application/json"});
    if(navigator.canShare && navigator.canShare({files:[file]})){
      await navigator.share({files:[file], title:`Charakter: ${character.name}`, text:"Charakter für unsere Runde"});
      return;
    }
  }catch(e){ if(e && e.name==="AbortError") return; }
  downloadCharacterJson(character);
}
/* ------------------------------------------------------------
   JSON-Datei(en) importieren — über den Datei-Auswahldialog
   angestoßen (siehe "📥 Importieren"-Knopf in "Meine Charaktere").
   Akzeptiert sowohl eine einzelne exportierte Charakter-JSON als
   auch mehrere auf einmal ausgewählte Dateien.
   ------------------------------------------------------------ */
function triggerImportCharacter(){
  const input = document.getElementById("importCharFileInput");
  if(input) input.click();
}
function isValidCharacterShape(c){
  return c && typeof c==="object" && typeof c.name==="string" && Array.isArray(c.themes);
}
function handleImportCharacterFile(event){
  const files = Array.from(event.target.files || []);
  event.target.value = ""; // erlaubt erneuten Import derselben Datei
  if(!files.length) return;
  let imported = 0, failed = 0;
  const finish = ()=>{
    if(imported>0){ saveChars(); renderMain(); }
    if(failed>0){
      window.alert(imported>0
        ? `${imported} Charakter(e) importiert, ${failed} Datei(en) konnten nicht gelesen werden.`
        : `Import fehlgeschlagen: ${failed} Datei(en) waren keine gültigen Charakter-JSON-Dateien.`);
    }
  };
  let pending = files.length;
  files.forEach(file=>{
    const reader = new FileReader();
    reader.onload = ()=>{
      try{
        const parsed = JSON.parse(reader.result);
        const list = Array.isArray(parsed) ? parsed : [parsed];
        list.forEach(c=>{
          if(isValidCharacterShape(c)){ CHARACTERS.push(c); imported++; }
          else { failed++; }
        });
      }catch(e){ failed++; }
      pending--;
      if(pending<=0) finish();
    };
    reader.onerror = ()=>{ failed++; pending--; if(pending<=0) finish(); };
    reader.readAsText(file);
  });
}
// Alle offiziellen Beispiel-Charaktere aus dem Legend-in-the-Mist
// "Character Pack" (20 Charakterbögen aus der vom Nutzer hochgeladenen PDF,
// per OCR ausgewertet und ins Deutsche übersetzt). Nur die Spielwerte
// übernommen (Backpack + 4 Themes mit je 2 Power-Tags, Weakness, Quest),
// nicht die "How to Play"-Spielregel-Spalte. Kategorie-Labels bleiben wie
// überall sonst in der App auf Englisch (Devotion, Skill Or Trade, Trait,
// Personality, Possessions, Circumstance, Companion, Magic, Past, People,
// Duty, Uncanny Being, Prodigious Ability, Relic, Knowledge, Influence,
// Monstrosity), identisch zur Konvention in THEME_KIT_LIBRARY.
//
// WICHTIG: Diese Liste ist bewusst GETRENNT von CHARACTERS/localStorage.
// Die Beispiele sind fest im Code verankert, nicht löschbar, und werden
// immer angezeigt (in einem eigenen aufklappbaren Bereich in "Meine
// Charaktere") — anders als der frühere Ansatz (einmaliger Seed in
// CHARACTERS), der es erlaubte, sie versehentlich zu löschen.
//
// mightBook (origin/adventure/greatness) wird nicht händisch gepflegt,
// sondern beim Rendern aus den vier categories über TROPE_TYPE_TO_BOOK
// berechnet (siehe exampleCharMightBook()) — exakt dieselbe Logik wie bei
// den Trope-Karten, Priorität Greatness > Adventure > Origin.
const EXAMPLE_CHARACTERS = [
  { name:"Bumbler", tropeTitle:"Eine tollpatschige Imkerin, die trotz ständigem Chaos irgendwie immer heil davonkommt", backpackItems:["Ein Bienennest (bewohnt)"], themes:[
    { num:1, category:"Trait", title:"Wandelnde Katastrophe", powerTags:["Etwas umstoßen","Knapp einer Verletzung entkommen"], weakness:"Außer Kontrolle", quest:"Ich schätze, ich bin einfach eine tollpatschige Person." },
    { num:2, category:"Skill Or Trade", title:"Imker:in", powerTags:["Kleinste Veränderungen der Umgebung spüren","Sanfte Hand"], weakness:"Langsame Arbeiterin", quest:"Eines Tages wird dies die berühmteste Imkerei unseres Dales sein!" },
    { num:3, category:"Possessions", title:"Goldwiesen-Met", powerTags:["Krüge voll schäumendem Met!","Fässer unter Hochdruck"], weakness:"Bumbler ist nicht da", quest:"Hier fühle ich mich am wohlsten." },
    { num:4, category:"Circumstance", title:"Dorftrottel", powerTags:["Spott oder Scham ignorieren","Damit durchkommen"], weakness:"Zielscheibe vieler Streiche", quest:"Wenn ich mit ihnen lache, verzeihen sie mir vielleicht alles, was ich kaputt gemacht habe …" },
  ]},
  { name:"Finn der Rote Marschall", tropeTitle:"Ein glanzvoll gerüsteter junger Dorfwächter, der von echten Heldentaten träumt", backpackItems:["Grün gesteppter Gambeson"], themes:[
    { num:1, category:"Devotion", title:"Beschützer der Dales", powerTags:["Die rote Rüstung","Wache halten"], weakness:"Last der Verantwortung", quest:"Ich habe geschworen, dieses Land und seine Menschen zu beschützen." },
    { num:2, category:"Skill Or Trade", title:"Waffentraining", powerTags:["Schwertkunst","Gefährten anspornen"], weakness:"Erfahrene Feinde", quest:"Training hält mich bereit für alles, was kommen mag." },
    { num:3, category:"Trait", title:"Athletisch", powerTags:["Rohe Kraft","Ausdauer eines Läufers"], weakness:"Das wird später wehtun", quest:"Ich schaffe diesen Sprung!" },
    { num:4, category:"Personality", title:"Angehender Lokalheld", powerTags:["Mut vortäuschen","Schutzschild eines Dorfbewohners"], weakness:"Vorschnell", quest:"Niemand erinnert sich" },
  ]},
  { name:"Gerrin der Hirschjäger", tropeTitle:"Ein einzelgängerischer Jäger, der tief mit dem Wald verbunden ist und seine Familie beschützt", backpackItems:["Schutzamulett"], themes:[
    { num:1, category:"Circumstance", title:"Hirschjäger", powerTags:["Verstohlener Schritt","Scharfe Sinne"], weakness:"Einzelgänger", quest:"Ich muss das empfindliche Gleichgewicht des Waldes bewahren." },
    { num:2, category:"Skill Or Trade", title:"Geübt mit dem Bogen", powerTags:["Vaters Eibenbogen","Schneller zweiter Pfeil"], weakness:"Nahkampf", quest:"Jeder Pfeil, den ich abschieße, ist eine Entscheidung." },
    { num:3, category:"Personality", title:"Wilde Jugend", powerTags:["Ungezähmte Wildheit","Innerer Kompass"], weakness:"Sturköpfig", quest:"Niemals der Dunkelheit oder Verzweiflung erliegen." },
    { num:4, category:"Devotion", title:"Der Familie verpflichtet", powerTags:["Guter Zuhörer","Durchhalten"], weakness:"Familie ist meine Schwachstelle", quest:"Was auch kommen mag, ich werde für sie da sein." },
  ]},
  { name:"Gorna", tropeTitle:"Ein junger Wanderkoch mit einem zahmen Riesenwildschwein, stets auf der Suche nach neuen Zutaten", backpackItems:["Verrostete Kochpfanne"], themes:[
    { num:1, category:"Skill Or Trade", title:"Autodidaktischer Koch", powerTags:["Geschärftes Hackmesser","Wohlfühlessen"], weakness:"Kochen braucht Zeit, um perfekt zu werden", quest:"Ich muss jede Zutat und jedes Gericht der Dales probieren." },
    { num:2, category:"Companion", title:"Truffles, das Riesenwildschwein", powerTags:["Spürt Gerüche und Fährten auf","Stark und robust"], weakness:"Gefräßig", quest:"Truffles ist mein Junge, ich werde ihn niemals verlassen oder verletzen." },
    { num:3, category:"Circumstance", title:"Freundlicher Charme", powerTags:["Brot teilen anbieten","Von Natur aus fröhlich"], weakness:"Niedlich ist nicht immer genug", quest:"Es gibt nichts, was ein gutes Essen mit Freunden nicht heilen kann." },
    { num:4, category:"People", title:"Großstadtjunge", powerTags:["Marktkenntnis","Eine Menge mitreißen"], weakness:"Unbeholfen in der Wildnis", quest:"Ich werde immer nach Barleytown zurückkehren." },
  ]},
  { name:"Higgins", tropeTitle:"Ein kleinwüchsiger Kampfsänger, der verbotene Liebe zu einem Feind in einen Friedenswunsch verwandelt", backpackItems:["Erinnerungsstück an Odrid"], themes:[
    { num:1, category:"Circumstance", title:"Kampfsänger von Cedargate", powerTags:["Für den Kampf anfeuern","Fröhliche Melodie"], weakness:"Widriges Wetter", quest:"Ich werde Cedargate gegen jeden Eindringling verteidigen." },
    { num:2, category:"Skill Or Trade", title:"Frieden für Odrid", powerTags:["Mitgefühl für Feinde","Verlust verstehen"], weakness:"Ausgestoßen", quest:"Ich muss Frieden zwischen unseren Völkern bringen." },
    { num:3, category:"Devotion", title:"Standhaft an Leib und Geist", powerTags:["Unerschütterlich in Körper und Geist","Mangel an Offensivtaktik"], weakness:"Zögert, Blut zu vergießen", quest:"Ein unbesungener Kampf ist eine Schmach für die Gefallenen." },
    { num:4, category:"Possessions", title:"Zwillingsschilde", powerTags:["Schildschlag","Verteidigungslinie vorrücken"], weakness:"Sperriges Gepäck", quest:"Mehr sinnloses Blutvergießen bringt uns nirgendwohin." },
  ]},
  { name:"Jayne", tropeTitle:"Eine ehrgeizige Söldner-Neuling, die sich mit selbstgeschmiedeter Rüstung und Galgenhumor durchschlägt", backpackItems:["Mutters Halskette"], themes:[
    { num:1, category:"Devotion", title:"Mein Schicksal ändern", powerTags:["Starker Wille","Feurige Rhetorik"], weakness:"Ruhelos", quest:"Sie werden Balladen über mich schreiben!" },
    { num:2, category:"Circumstance", title:"Söldner-Neuling", powerTags:["Weit und hart zuschlagen","Ein Beutel Dalisches Eisen"], weakness:"Noch grün hinter den Ohren", quest:"Lernen durch Tun." },
    { num:3, category:"Possessions", title:"Umgeschmiedete Waffen", powerTags:["Gekerbte Klinge","Zusammengewürfelte Rüstung"], weakness:"Unansehnliches Erscheinungsbild", quest:"Diese schäbigen Waffen zerfallen, wenn ich nicht jeden Tag daran arbeite." },
    { num:4, category:"Personality", title:"Fröhliche Entschlossenheit", powerTags:["Gefahr weglachen","Ansteckende Fröhlichkeit"], weakness:"Unterschätzt meine Feinde", quest:"Der beste Weg mit Tyrannen umzugehen, ist weiterzulachen." },
  ]},
  { name:"Kelvis Gutstett", tropeTitle:"Ein Hufschmied, der unermüdlich nach seiner spurlos verschwundenen Familie sucht", backpackItems:["Ein spukhafter Kinderreim"], themes:[
    { num:1, category:"Devotion", title:"Habt ihr meine Familie gesehen", powerTags:["Suchen und fragen","Niemals aufgeben"], weakness:"Immer in Gedanken versunken", quest:"Bald WERDE ich sie zurückhaben." },
    { num:2, category:"Circumstance", title:"Vom Bauern zum Hufschmied", powerTags:["Tierhaltung","Hämmer und Äxte"], weakness:"Bösartige Gerüchte", quest:"Wenn sie zurück sind, kehren wir alle gemeinsam zum Hof zurück." },
    { num:3, category:"Trait", title:"Gesund wie ein Pferd", powerTags:["Gute Ausdauer","Starker Hammerarm"], weakness:"Schwer zu übersehen", quest:"Ich nütze niemandem, wenn ich nicht auf den Beinen bleiben kann." },
    { num:4, category:"Personality", title:"Ehrlich wie am ersten Tag", powerTags:["Gegen Ungerechtigkeit einschreiten","Zum Guten ermutigen"], weakness:"Kann nicht lügen", quest:"Was fair ist, ist fair, was wahr ist, ist wahr." },
  ]},
  { name:"Koto Teichgleiter", tropeTitle:"Ein wendiger Fluss-Vagabund zwischen Fischerei und kleinen Raubzügen", backpackItems:["Krug Bier"], themes:[
    { num:1, category:"Skill Or Trade", title:"Flussratte", powerTags:["Gewandter Bootsführer","Spion vom Wasser aus"], weakness:"Auf dem Trockenen festsitzend", quest:"Das Leben auf dem Wasser ist das einzige Leben für mich." },
    { num:2, category:"Circumstance", title:"Skrupelloser Wegelagerer", powerTags:["Behelfsspeer","Einschüchterung"], weakness:"Wachsender berüchtigter Ruf", quest:"Ich habe nie wirklich jemandem wehgetan." },
    { num:3, category:"Trait", title:"Erschreckend schnell", powerTags:["Gutes Gleichgewicht","Etwas schnappen"], weakness:"Nirgends hin zu fliehen", quest:"Ich wette, ich kann das schneller schnappen als du." },
    { num:4, category:"Personality", title:"Sorgloser Schurke", powerTags:["Charmanter Teufel","Gewandter Redner"], weakness:"Rücksichtslos", quest:"Mach dir nie Sorgen um morgen." },
  ]},
  { name:"Mistle", tropeTitle:"Eine pflichtbewusste Totenwächterin, die ruhelose Gräber wieder zur Ruhe bringt", backpackItems:["Eisenner Buckler"], themes:[
    { num:1, category:"Skill Or Trade", title:"Wächterin der Ruinen", powerTags:["Geisterhaftes Weihrauch","Falltüren finden und entschärfen"], weakness:"Zu tief gegraben", quest:"Niemals ein Grab ruhelos lassen, niemals an einem friedlichen Ort verweilen." },
    { num:2, category:"Possessions", title:"Bannerin-Ausrüstung", powerTags:["Eine Flöte, die die Toten besänftigt","Gerettet durch Erfahrung"], weakness:"Nicht leicht zu ersetzen", quest:"Immer die Ausrüstung zweimal prüfen, oder es gibt keine nächste Prüfung." },
    { num:3, category:"Trait", title:"Abgehärtet", powerTags:["Schmerz und Erschöpfung ignorieren","Wunden verbinden"], weakness:"Abgestumpft", quest:"Es gibt kein Gefühl. Es gibt kein Bedürfnis. Es gibt nur den Pfad." },
    { num:4, category:"Devotion", title:"Meine Mentorin, Yelizaveta", powerTags:["Inspirierender Einfallsreichtum","Überreste des Alten Königreichs"], weakness:"Sie ist nicht hier", quest:"Solange Yelizavetas Worte in mir nachhallen, ist sie bei mir." },
  ]},
  { name:"Alter Carlo", tropeTitle:"Ein gütiger alter Schuster mit einem heimlichen Kobold-Freund und einem Ruhestand voller Geheimnisse", backpackItems:["Milch und Honig"], themes:[
    { num:1, category:"Personality", title:"Gütiger alter Mann", powerTags:["Lebensverändernde Vergebung","Hart erarbeitete Weisheit"], weakness:"Zipperlein und Schmerzen", quest:"Es lässt sich mit Freundlichkeit lösen." },
    { num:2, category:"Skill Or Trade", title:"Langjähriger Schuster", powerTags:["Kräftige, ruhige Hände","Gang und Spuren erkennen"], weakness:"Das lässt sich nicht überstürzen", quest:"Etwas Besonderes für jeden schaffen, den ich liebe." },
    { num:3, category:"Companion", title:"Axiliat, mein Kobold-Helfer", powerTags:["Ein Hauch Glück","Ausspähen und berichten"], weakness:"Verursacht Panik", quest:"Freundschaft ist ein Geben und Nehmen." },
    { num:4, category:"Possessions", title:"Ruhestandsplan", powerTags:["Ein kleines Vermögen gespart","Geladene Armbrust"], weakness:"Unvorhergesehene Probleme", quest:"Ich werde den Rest meines Lebens genau hier verbringen." },
  ]},
  { name:"Rags", tropeTitle:"Ein rätselhafter Puppenspieler, dessen Geschichten oft unheimlich wahr werden", backpackItems:["Ein Fläschchen gealterter Wein"], themes:[
    { num:1, category:"Skill Or Trade", title:"Leidenschaftliche:r Puppenspieler:in", powerTags:["Geübte:r Bauchredner:in","Flinke Finger"], weakness:"Schüchtern außerhalb der Vorstellung", quest:"Niemals eine gute Geschichte unterbrechen." },
    { num:2, category:"Magic", title:"Prophetisches Geschichtenerzählen", powerTags:["Unheil vorhersagen","Blicke in die Zukunft"], weakness:"In Trance verloren", quest:"Meine Geschichten werden immer wahr. Man muss nur verstehen wie." },
    { num:3, category:"Past", title:"In jedem Dale gewesen", powerTags:["Straßengerüchte","Kenne mich überall aus"], weakness:"Abgelegene, isolierte Weiler", quest:"Ich nenne keinen Ort mein Zuhause." },
    { num:4, category:"Personality", title:"Rätselhafte:r Wanderer:in", powerTags:["Hinterhältig und verschlagen","Emotional undurchdringlich"], weakness:"Schwer zu vertrauen", quest:"Je weniger du über mich weißt, desto besser." },
  ]},
  { name:"Rosamund", tropeTitle:"Eine griesgrämige Kräuterheilerin und letzte Hüterin der alten Oldways-Bräuche", backpackItems:["Warmer gestrickter Pullover"], themes:[
    { num:1, category:"Skill Or Trade", title:"Apothekerin", powerTags:["Medizinbeutel","Schnelle Diagnose"], weakness:"Schlechte Umgangsformen am Krankenbett", quest:"Nun, ich konnte sie doch nicht einfach krank lassen!" },
    { num:2, category:"Magic", title:"Praktizierende der Oldways", powerTags:["Altes dalisches Wissen","Schutzzauber"], weakness:"Beschwörungen müssen laut gesprochen werden", quest:"Ich sollte eine würdige Schülerin finden, an die die Oldways weitergegeben werden." },
    { num:3, category:"Circumstance", title:"Einsiedlerin im Hinterland", powerTags:["Begegnungen mit dem Zwielicht","Zähe Nuss"], weakness:"Griesgrämig", quest:"Ich bin hier draußen besser aufgehoben." },
    { num:4, category:"Past", title:"Schon einiges gesehen", powerTags:["Geschichtenerzählerin","Kann mir nichts vormachen"], weakness:"Alte Knochen", quest:"Es ist schwer, eine alte Seele zu überraschen." },
  ]},
  { name:"Seede", tropeTitle:"Ein Waisenkind aus dem Dorf mit einer Schwäche für Streiche und geworfene Äpfel", backpackItems:["Feuerwerkskörper"], themes:[
    { num:1, category:"People", title:"In Ravenhome aufgewachsen", powerTags:["Kennt sich hier bestens aus","Sucht nach Verbundenheit"], weakness:"Gehört nirgendwo hin", quest:"Es ist der Hintern der Welt, aber es ist Zuhause." },
    { num:2, category:"Personality", title:"Schlingel", powerTags:["Streichespielerin","Wer's findet, dem gehört's"], weakness:"Kann nicht ruhig sitzen", quest:"Es ist nie ein schlechter Zeitpunkt für einen Streich!" },
    { num:3, category:"Trait", title:"Zäh", powerTags:["Einen Schlag wegstecken","Ungehobelter Charme"], weakness:"Hört nie zu", quest:"Du bist nicht mein Boss!" },
    { num:4, category:"Possessions", title:"Sack Äpfel", powerTags:["Kräftiger Wurf","Flinke Hände"], weakness:"Reicht nur begrenzt weit", quest:"Einfache Lösungen funktionieren am besten." },
  ]},
  { name:"Siondelle", tropeTitle:"Eine wandernde Schreinbauerin, die zwischen frommem Ritual und wilder Vergangenheit lebt", backpackItems:["Schwarze Wachskerze"], themes:[
    { num:1, category:"Circumstance", title:"Wandernde Pilgerin", powerTags:["Trösten und beruhigen","Unnatürliches Problem einschätzen"], weakness:"Sozial gemieden", quest:"Je mehr alte Schreine ich besuche, desto mehr erfahre ich über die heraufziehende Dunkelheit." },
    { num:2, category:"Magic", title:"Steinhaufenmagie", powerTags:["Schutz-Steinhaufen","Ritual der Schreinpflege"], weakness:"Chaotische Umgebungen", quest:"Einen Steinhaufen zu errichten heißt, das Gesehene und das Ungesehene ins Gleichgewicht zu bringen." },
    { num:3, category:"Past", title:"Trunkenmoor-Unruhestifterin", powerTags:["Betrügereien und Schwindeleien","Wild wie der Wind"], weakness:"Bekannt bei den Roten Marschällen", quest:"Niemals vergessen, meine Wildheit herauszulassen." },
    { num:4, category:"Trait", title:"Zwielicht-Empfindsamkeit", powerTags:["Instinktives Zurückschrecken","Seine Absichten spüren"], weakness:"Zieht Zwielichtwesen an", quest:"Da ist etwas in mir, das ich noch nicht verstehe, aber ich werde es verstehen." },
  ]},
  { name:"Bogomil", tropeTitle:"Ein mächtiger Thaumaturg auf der Suche nach uraltem Wissen, begleitet von einem geisterhaften Raben", backpackItems:["Ein Beutel dalisches Geld"], themes:[
    { num:1, category:"Magic", title:"Kunst der Projektion", powerTags:["Kraftausstoß","Schutzschild ausstrahlen"], weakness:"Langsame, leise Magie", quest:"Ein Thaumaturg hört niemals auf zu lernen." },
    { num:2, category:"Prodigious Ability", title:"Unerschrockener Reisender", powerTags:["Erfahrener Waffenträger","Einen Weg finden"], weakness:"Grob und schroff", quest:"Wir müssen uns auf die Rückkehr der Mächte vorbereiten, die den Krieg verursachten." },
    { num:3, category:"Possessions", title:"Tafeln von Druwynn", powerTags:["Einen wahren Helden enthüllen","Stab der Projektion"], weakness:"Vage Formulierung", quest:"Ich glaube, die Antworten liegen in den Dales." },
    { num:4, category:"Companion", title:"Rhiog, der Albino-Rabe", powerTags:["Geteilte Sinne","Ätherisch und schwer fassbar"], weakness:"Zu weit entfernt", quest:"Das wird nur funktionieren, wenn ich loslasse und Neues wage." },
  ]},
  { name:"Daunt", tropeTitle:"Ein untoter Ritter in alter Rüstung, der treu einen längst verlorenen Eid weiterverfolgt", backpackItems:["House Mattinas sablenes Banner"], themes:[
    { num:1, category:"Uncanny Being", title:"Wiedergänger", powerTags:["Nichts tut mehr weh","Furchteinflößende Präsenz"], weakness:"Spukhaft", quest:"Warum bin ich zurückgekehrt?" },
    { num:2, category:"Duty", title:"Ehrengarde-Ritter", powerTags:["Meister der Lanze","Niemals wanken oder zögern"], weakness:"Verzehrende Rechtschaffenheit", quest:"House Mattina, ein Bollwerk gegen die Dunkelheit!" },
    { num:3, category:"Prodigious Ability", title:"Beschützer gegen die Dunkelheit", powerTags:["Verderbnis aufspüren","Gegen viele kämpfen"], weakness:"Rückenangriffe", quest:"Ein Ritter, der nicht trainiert, wird in seinem nächsten Kampf fallen." },
    { num:4, category:"Possessions", title:"Gwyrdolanische Plattenrüstung", powerTags:["Geheimnisvoller Ritterhelm","Unbeugsam"], weakness:"Schwer zu reparieren", quest:"Ich darf diese Rüstung niemals ablegen." },
  ]},
  { name:"Gaelle", tropeTitle:"Eine Monsterjägerin, die einst alles für einen verfluchten Pakt und ein magisches Schwert aufgab", backpackItems:["Warmer Pelzmantel"], themes:[
    { num:1, category:"Duty", title:"Bestienjäger-Pakt", powerTags:["Eine Fährte aufnehmen","Eine Schwäche finden"], weakness:"Von einem seltsamen Sigill gezeichnet", quest:"Es ist nicht vorbei, bis ich jede Trophäe zurückgebracht habe." },
    { num:2, category:"Possessions", title:"Dämmerungsfluch", powerTags:["Verheerender Hieb","Eine gewitterte Beute aufspüren"], weakness:"Vom Willen ihres Herrn gelenkt", quest:"Das Schwert wird stumpf, wenn es nicht in Monsterblut gewaschen wird." },
    { num:3, category:"Past", title:"Echos der Wildnis", powerTags:["Fokussierte Meditation","Von Tieren geliebt"], weakness:"Beschämt, ihren Pfad verlassen zu haben", quest:"Ich habe einst alles für mein Volk geopfert. Ich würde es wieder tun." },
    { num:4, category:"Trait", title:"Unverblümte Aggression", powerTags:["Lässt sich kein Nein gefallen","Hohe Schmerztoleranz"], weakness:"Schroff", quest:"Wenn du etwas im Leben willst, musst du es dir nehmen. Ohne Zögern." },
  ]},
  { name:"GlintFallow", tropeTitle:"Ein vertriebener, rachsüchtiger Kobold auf der Suche nach neuem Hort und verlorenen Erinnerungen", backpackItems:["Gehortetes Silber"], themes:[
    { num:1, category:"Uncanny Being", title:"Spriggan", powerTags:["Kraft eines Riesen","Bringer von schlechtem Wetter"], weakness:"Verstand von Wut vernebelt", quest:"Ich will... Rache!" },
    { num:2, category:"Duty", title:"Schatzjäger", powerTags:["In den Boden graben","Gespür für verborgene Dinge"], weakness:"Ungeduldig", quest:"Ich brauch mir einen neuen Hort und ein verstecktes Zuhause." },
    { num:3, category:"Knowledge", title:"Blitze eines vergangenen Zeitalters", powerTags:["Ein altes Wesen erkennen","Einen alten Ort erkennen"], weakness:"Benommen von Rückblenden", quest:"Wenn ich mich an sie erinnere, könnte ich mich dann an mich erinnern?" },
    { num:4, category:"Skill Or Trade", title:"Gemeine Tricksereien", powerTags:["Rachsüchtig","Stehlen und greifen"], weakness:"Die falsche Person geärgert", quest:"Törichte sollen leiden." },
  ]},
  { name:"Kinsi", tropeTitle:"Eine getarnte Zwielichtgesandte, die verlorene magische Gaben für ihr Volk zurückholt", backpackItems:["Ring aus Eisenmünzen"], themes:[
    { num:1, category:"Uncanny Being", title:"Zwielicht-Gesandte:r", powerTags:["Unheimlich gewandt","Mystisches Gespür"], weakness:"Geringer unter meinesgleichen", quest:"Ich bin eine Gesandte des Smaragdenen Zweigs..." },
    { num:2, category:"Relic", title:"Bündel wundersamer Kleinode", powerTags:["Brosche der Unsichtbarkeit","Mantel der Ausdauer"], weakness:"Besessene:r Sammler:in", quest:"Der Zweck meines Seins ist es, die Gaben zurückzuholen, die der Menschheit verlorengingen..." },
    { num:3, category:"Influence", title:"Silberzunge", powerTags:["Verlockende Angebote","Sprechen wie ein Dalesbewohner"], weakness:"Oldways-Schutzamulette", quest:"...Niemand darf mein wahres Selbst kennen." },
    { num:4, category:"People", title:"Dalisch im Herzen", powerTags:["Zechen in der Taverne","Felder und Wiesen"], weakness:"Angst, sich wirklich zu binden", quest:"Ich sorge mich zutiefst um diese Menschen." },
  ]},
  { name:"Gullencry", tropeTitle:"Ein uralter Drache, der in menschlicher Gestalt die Sterblichen und ihren Krieg verstehen will", backpackItems:["Ein köstlicher Kuchen"], themes:[
    { num:1, category:"Monstrosity", title:"Drache des Ostwinds", powerTags:["Geflügelter Flug","Klauen und Zähne"], weakness:"Von der Quelle abgeschnitten", quest:"Ich bin die Verkörperung des Himmlischen." },
    { num:2, category:"Magic", title:"Worte der Macht", powerTags:["VERBRENNE","VERSCHWINDE"], weakness:"Manche Worte brennen in der Kehle", quest:"Lasst uns sehen, welche Machtworte die schwachen Sterblichen entdeckt haben." },
    { num:3, category:"Trait", title:"Bezaubernde Sterbliche Gestalt", powerTags:["Appetit auf weltliche Freuden","Flink und athletisch"], weakness:"Augen wie brennende Rubine", quest:"Ich bin gespannt zu spüren, wie ihre kleinen Körper funktionieren." },
    { num:4, category:"Devotion", title:"Beobachterin der Sterblichen", powerTags:["Nach sterblichen Angelegenheiten fragen","Sterbliche anfreunden"], weakness:"Ihre Moral verwirrt mich", quest:"Ich muss ihre Wege verstehen, um ihren Krieg zu begreifen." },
  ]},
];
// Hinweis: TROPE_TYPE_TO_BOOK wird weiter unten deklariert (siehe Trope-
// Might-Badge-Logik), aber da exampleCharMightBook() erst beim Rendern
// aufgerufen wird (nicht beim Skript-Start), ist die Referenz unproblematisch.
function exampleCharMightBook(c){
  const books = c.themes.map(t=>TROPE_TYPE_TO_BOOK[(t.category||"").toLowerCase()]).filter(Boolean);
  if(books.includes("greatness")) return "greatness";
  if(books.includes("adventure")) return "adventure";
  return "origin";
}
let CHARACTERS = loadChars();

/* ============================================================
   CHARAKTERERSTELLUNGS-SURVEY — regelkonformer Ablauf direkt aus den
   Themenbuch-Fragen heraus: pro Theme werden 3 der angebotenen
   Stärke-Fragen angeklickt und beantwortet (frei wählbar, welche —
   erst eine, danach zwei weitere), danach eine Schwäche und eine
   Quest als Freitext, macht das Theme fertig — Fragen dieser Kategorie
   sind danach dauerhaft gesperrt. Das Ganze läuft für 4 Themes (aus
   beliebigen Kategorien, beliebiger Bücher), danach folgen ein
   Rucksack-Gegenstand und der Name, und der fertige Charakter landet
   druckbar in "Meine Charaktere" (derselbe Speicher/Druckweg wie beim
   Trope-Assistenten). Fortschritt wird in einem eigenen localStorage-
   Schlüssel gesichert, damit ein Reload mitten in der Erstellung
   nichts verliert; der Reset-Button in der Ecke setzt bewusst NUR
   diesen In-Progress-Fortschritt zurück, nicht die bereits fertigen,
   gespeicherten Charaktere.
   ============================================================ */
const SURVEY_KEY = "woto_standalone_survey_v1";
function blankSurvey(){
  return { themes:[], active:null, backpackItem:null, name:null };
}
function loadSurvey(){
  try{
    const raw = localStorage.getItem(SURVEY_KEY);
    if(!raw) return blankSurvey();
    const parsed = JSON.parse(raw);
    return (parsed && typeof parsed==="object") ? parsed : blankSurvey();
  }catch(e){ return blankSurvey(); }
}
function saveSurvey(){
  try{ localStorage.setItem(SURVEY_KEY, JSON.stringify(state.survey)); }
  catch(e){ /* privates Fenster o. Ä. — bleibt auf die Sitzung beschränkt */ }
}
state.survey = loadSurvey();
function resetSurvey(){
  if(state.survey.themes.length===0 && !state.survey.active && !state.survey.backpackItem){
    return; // nichts zu verwerfen, kein confirm() nötig
  }
  const ok = window.confirm("Charaktererstellung wirklich zurücksetzen?\n\nAlle bisher beantworteten Fragen für diesen Charakter gehen verloren. Bereits fertig erstellte Charaktere in „Charaktere“ bleiben erhalten.");
  if(!ok) return;
  state.survey = blankSurvey();
  saveSurvey();
  renderMain();
}

function esc(s){ return (s===undefined||s===null) ? "" : s; }
function escHtml(s){
  return String(s===undefined||s===null?"":s)
    .replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
}

/* ============================================================
   NAVIGATION
   ============================================================ */
function setMainTab(tab){
  state.mainTab = tab;
  document.getElementById("navQuestions").classList.toggle("on", tab==="questions");
  document.getElementById("navKits").classList.toggle("on", tab==="kits");
  document.getElementById("navTropes").classList.toggle("on", tab==="tropes");
  document.getElementById("navChars").classList.toggle("on", tab==="chars");
  renderMain();
}
function renderMain(){
  const el = document.getElementById("mainView");
  if(state.mainTab==="questions") el.innerHTML = renderQuestionsView();
  else if(state.mainTab==="kits") el.innerHTML = renderKitsView();
  else if(state.mainTab==="tropes") el.innerHTML = renderTropesView();
  else el.innerHTML = renderCharsView();
  window.scrollTo(0,0);
}

/* ============================================================
   THEMENBUCH-FRAGEN VIEW — das eigentliche Kernstück der App:
   "Fragen zum Vorlesen" zur Charaktererstellung aus den drei
   Themebooks (Origin inkl. Companion/Magic/Possessions, Adventure,
   Greatness). Struktur/Inhalt identisch zur "Erzähler-Tafel"
   (THEMEBOOK_QUESTIONS), hier als eigener, primärer Reiter statt
   als Overlay-Fenster.
   ============================================================ */
const QB_LABELS = { origin:"Origin", adventure:"Adventure", greatness:"Greatness" };
const BOOK_ICONS = {
  origin:"data:image/png;base64,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",
  adventure:"data:image/png;base64,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",
  greatness:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAXtElEQVR42tWbaZCd1Znff+ec97536e7bau1C+wZIRhIgFoHBSEJsRgxmsfEwJi7siVNxZvuSTCofUvMhlcoXJ6lUJZlJuZKJZyp4GCekPPaQwcaFMYsXxthg4WExtoQk6G71ctd3O0s+nPe+995Wd4Mwdiav6lRf3ftu5znP8n/+z3PEl/717ziKw390Dqy1LHW4/DyBKL4TUhTXssyVS33tlr9w0cNau+Qtl3+L/nXB+g1r+z8MvISzbsmXHxaAuAAB2A9YAO9j9gvmEgRKLS4AtfRFzjoQIERfAFIIHO82EXnh2rHs3SS/7BH4SVzgkc97UABCeH1wC+83JBDxgQpAIH55AfABH2KZaYkLuvLXcwS/7ge6BSst/h9NvC+AAZUVQhQqK87zC2JZU7YLruuZlhCC4hm513aD9y/O/1UI+++jBvQ8vljaAn6dWhH4J7tfwURdoQXOWnAOYwzOuRxnOG8QueYoJQGBlP3J974TQvz/6QPcgDCccxhjcc4WArDW5aDEYa23RiVlrg1+4kLw91EA4l19txsIgdbafMIWa20hDOscxmiEEFjrkFJgpURKiRACY7xGCCnOMwu3iNa+H9MJ3vtqumJJhxFYrsJSFp7MucHz/UobYzDGoLXOBQHtVoMdH7qKzRfv45mv/hlhpYqSiiDwQvD3kgXeGNYEdx7UEGLAYQ9gleUEc0EaYJ334osJoAeEBh2dt2+/8sZatNZkmcZaRxx1GV2xhisOH2dsYjVvvfEKr/3wOUbqK7DWEgR+4kqR+4UlfIE7Xxd85AEh5btGl+C9OjTnHNb4vwshr3MO60AKBlYuv8Y6dL7yWdYbGZk2HLrjE9TGxom7ba48chdnfv46rbkpRkfrOOsF4JwrHOOgAHrP7ztbgXO2cJ6FA0YWecqicHrwRsXILcy6vt0ODWOwxpAmMUkcFxPU2qKNH4Pna23Q2pBpTZppGvPzXHH4TjbuuIQkjnDWUq2NcMPxT5KmmjiOSbOMLNMYrQfMxubPyp+XabQ2JElKt9PGaOPPNxZjHXYR7XADAyHOhzQWhhxWbxjTH9Y6kqjLui2XsOqibUTtFsY6tDaFrQ+erzODzjTGWFqNeTbu3Mv+624m7na8w5OSJI7YtPNSDtx4K4252VxjMjKtF9zXYLQpJh/HMU4oLtq1jzRNzntPmwuiN/qmOWAC1ro8PPkfhQNj7ZBWeCEYrHMIBGmasW77HtZu2sHU6X9L3OkQhCHGisIf90wgTRMyrel2OoigzI3HH8hts48JpZQkUZdrb76L6dOnePOVF1m1dg3GGv+78oJy1oKlWJgkibnx2L2s27Kbt14/QRYnhGWHULIwVWv7vmAQoYqeBvTASY8IsQsmXwzr/YDWmnJtjPFVa6mNjXPNbR/3AtIaY9zwag2MNEm58c77WbNhE2mSIIQ8z9cA3PKJh1m5biNRp+N9iDa5eg/cz1qSOOKqYx9j66VXEFaqrN28kySOsA6cWajFbtF5yWE1NwihyHo2pjU6y7wq5g7MaEPc7TI2sYaxidVE7SYbd+5l76FjtBrzpGlGmmRkaUaSpCRJQpykdNptxlev59LLryOJo8JZLvTeOsuojda59ROfRVtHt9slSVLiOCGJE+I4JU5TmvPzfOj6W9lz9U3EURupFBt2XJr7joGR9ofWhjRNyXLzsdYicaIXtzBZRlgdZcf+Q+g0KRKXwbDmnCVJE9Zs3olSJYQQJFGXD117hJ37DxF3OxhryHRfaNoYOp0Os+emSBI/+aWIk54pbNp5MVcd/ijtVhNjLZnWZNr7liSOuez6m7nipjtIoi5SKnSWsn7rbqpjK0jTGGNNEX496LJkcUx1ZJwN2/egsxTn8ryud6IQgtbcOTbuPsC2y64h6rT6KmiMn5jRyKDEmk3bsdbk4McL5sANt6JKIVmaeq+fZejM2/6Grbv48G33Uq5UsfmzlgxNShF3O1x5421s2LqbZmPeO1NtSOOEkfpKDh4+7hcp1xyrNSP1FWzYupskijzKHDAZnWmMNey78S7KtTF0muKsQxqjc8+qMc6RRBGtuSkuu+FORlddRHO+QZqrc5YZ4m7EijUbWL1hM1ma5Ck0KBXw0vNP0mrOk2lNFHnVnzk3zf5DR3noD/6Iqw/f9p65P+csQSnglvsfBhHQarZJ4gTjHDOTZ/n+N/83pbAyzDhZy6791yBkgM40SRKTJgmZzmi3Glx67S2s3XoxjZmpwsTlIHQVDjKd0ZiZIghDrjhyF0IpdJYVTkRISafZ4Nzbb1GuVDFaU67WOPnay7zy/acphWVMzih3Wk32X3eEm+95kDSJiaPue882hCRNEtZt3sYdD34OYzTWGi+YMOTHz36DEz/4NpWRUazRPqaXSsyfewegHw6to91osGv/dey56iNE7XlajdnC4cthZtZirPESSiLWbtzGvuuO0e20sRaMMUgp6bbmeeKRP+btk69Tq4/TbTf57hOPIfNERgpJHHXZtOMSjt3/abI0zRHdhZGYUkqiTos9V17Hh2+/h2637SOHg7BS5dnHH+Wt11+hOjpOUAr5/hOP8dzjj4IUeVgXRO0267bs4uDRu7HG0G3OMz89CVJ5AbjexI0l0xZnYW7qbIH09l1/MzsuO0i7PQsItLYEQUiWJjz56Bc5++arvPz8N2mee4dypYpA4oxFqoDDdz+ICkpYY953SiulIu62uebocTbv3EMSdxFKooISAnj6r/6c6TO/4PnHH+WFp75GKSz7cG0tcdwhrI1ww10P5lmlZHbyLN1WM8cpdhgJ9pBSt9Mq7NsYzY3Hf5M1G7YSRR0PRpylVCphreFbX/kib7z0PaojYx5YBIok7nLwI7ezcftu0jhCyF+OvnbWopTiyN0PUq5UEDiUEpQrVbK4y+N//h94/cfPUxutF4I21uOGw3c/xIpV68jSBBUEdFoNssxrJM4hewuTo39s7gizJEEqhdGasFLl5vs/S3VkjDSNioeEYYgUAiX9igRhiE4ituzey1VH7iDudooI8cswSwBx1GHD1p1cf9t9mCyhFAQESlIul1FSUqmOIIXwIRYP1T985wNs33M5cdRBSoVzjiyN8+QtB0JCetKhJwkpJVkSk6YxQsjcGUWsWr+Ro/d+mkCVwHnVlEISBIogCAjDACVgxaq13Hz/ZyhXa5RKIdWRMcJytZD4hU3eUgpDKrVRqqN1rLVccdMdHLj+GMJZyuWQUikgDEv5eyikkug05eqjd3HlDbd6kDSggWkc9xMkITwn6CGpD2dCSpJum/lzU6xevwmdOm+HnTbb91zOtksP8OaJFwjL5T5bIwRSKXCW6sgILz/3BM25WSyCtRu3sW7LDi7autNnke+CAQbVPqxUmTp7iukzJ5mbOkvSbVOuVLA6o1Kr5hMTBcS1VpJlKfWVa7j8hltJk7hPhgiB0Zpzb7+FlKogTgKRC6CXHAgkxhimz55k9/6rinRFSOlDWbcvUZGrnJCSIJCooEzcmefNl8+gtaYbxbz2o+8RxQn7rr2J2x/4LEqJHHIvLQRrDLX6OD965kke//IXKSlBuVKmXK5QLpUohSXGxscGJmYKmk2pgCTu0G7MM7FmHdoacA4VBLTnZ5idPEMpN10hhC+NDZKPUkCgFDNvn8Zonb+oK0yjNT+TS9AzIEIIlOiZkECUKoh6QJZlqFKFLNOobpcfPvNN2q0G9zz8e8tO3llLrT7Oi995kq//j/9MtVqlPjZOWA4phyHlMEAqhRqsaQrrF0p4FJk0mzRnJlm9fiM6Sz1QC0pMnz1F1GkyWq/jevM9r+CHIAgCGrNTJHE3x+39cNRpNby6M8C5idyPFDjAf1ZKopRAKcn4xEpOvPAsp998lbBc8WntYgBISqbPnOKpr/0lUnpPL3IBy9xfKSlQSqGkzLWXgXQXtM6YnXo7Z5R8PiOlZH5maiAki96Cy8LZ9QQgZUi72aDdmEOqAOc8Aow6bXSWFaytJDcd2Zuw8CN3SMVQkkBJlAo49/aZ3FMv7vGDUonH/+JPmT57itHRFSghKZUCgsCvulQlP/J3FgicE1gL1viBE3SaDc9t5EKx1tJuzJ5XMpJ9E5CFGssgQGcpnea8t/fcEXg4OswU9Ti5gpc7r4o8QEI5mJuZKl5scQgsOHLXx6mOjGK0HqgkiQWc4HCWagc4Cxxe9QdexFlLqzGHUkGhsT3NQvT+if5ACKJO26sRzsPbTruAtdb6FHNhVcktU0uQSrFq7Yb8notPPktS1m/ZzrpN29BpOuwvlvAdRYQdCLVaZwz0b+CcK0BZT2uFyNPhwUkLcT79LBBYY6ivXE0prPRJSrOQAxxmgHpkaPGbNqzZsBljzZIaYPPYv3HbLjqdFlY4tPEEaJbpnBfIBrg/45Mk61kin4gJmnMzhQCFEBidYXRWMMa9BZfn1Xl6HsW5It8XQpClCes2b2fH3gNEURfrXJ5SmgVDD3yv84zM0pifZf+hj7Bx+y6yJFkSHgshSOKY62/9Dbbt2UdjdsYTrsb0CZZMDz1nSPDWRwRrDHHURUjVF0CWIZX09P0gJ0jhyET+o1eZ2cmzQ/VrZwz7Dh3GWUhzfiBNNWmaksQJaZKiE0+JpZmnwNutJvNzMxw69ht87OHfWbSYNhgRhPDaNrZigvs/90/ZsfdKZqamaLfapFmWcxMJSZKQpglaZ2SpJksyjDFE3Q7VsXHu/Af/hEqthtUGqQK67RbdVoMgKCGkIFA+YgV9exCFbWAFSgVMnTmJzvqrlaYxF22/mMsOHeZvv/04K1etyVVdEgRBUQdMs5So2yFNMzZs2cltD9zOJZdfS5rEQ1Xj3lGuVkmTZIEvSAjDMvf99h9w4oXnePGZbzA7eYZyWKJcqWCMLVjlNMtw1hULccsD/5DR+gqSqAs5NmjOejquWl2R+6AcCJ3nW/L/eCwwTafVYLS+Aq01AkGWxNx0/JPMTU/y81deZGx8gjR1BIFGSEGWppQqVbZecoBd+65m92UHKZXLJN1OIegh0iONefH5b3PwhqMDwMvjAV84hQPXH2H3voO89tILnH7jBFOnf0E3ivLGLIHWBnA0G/Mc+dinuPjA1UQdj1ittR4DnJvC6mwABg/WBUwvXgpkHg6DUkDUbdNqzFGfWA3asy695oaP/tY/4i/+07/h7M9fZ7Q+js4EcdzlkisOcezeT1MZGUFKRRpHRQFkuMXNUBsb5YfPfov//u/+FWsv2sz2i/cSR90hqA0QddoEpRKXX3+U/YduIuq0+Pqf/UdOvfFTKrUR0iSl3Whw3W13c/XRjxJ3BuB63tXWmJ0u+g/kAIDqnzWE6ESRCrfmZ71ZuH4R1GQZ5UqVB/7xH7J+626mJydJUk2n3aW+ci2jE2tIuh2SbqfIMBceSgXMn5viqa8+ShAonvjLLy2ZI/RY5LjbJom71MbGSVNDHKe0mi2a8w2O3vMpjt37EEnUHa4FCoG1hubstEewCyLdUBjsJTdSSpRUCByNc5NIoYa7vaQkS1Mq1Rqf/Pw/Z9e+q5h+522ajSZSBjiT+ni7hKe31lCu1mjMTDM79TYr16zjtZ+8yIvPfYvqyKiPPkvAZCEkRmuajQbnJiexTvCxz/4eN955H0kcDbXukdNwSdSh1Zj1DlD0NR0E0kf5HMMr5fP8vEYfBAEzk2cxJjsPg8hcCOVqhYd+/1/wwOf/GWMTq4i6XYRSS3fFOkepVGZuepKvf/m/ElYqSCGoVas89dVHaczOEASlZesGWRLTbrW4+sgdfP5ffoHLD91Et906T3scoIKAxtwMUWuecqWcz08iJH0n2LMCKX3iYq0nNoMwZH5mMgcUctEVMVoDcNXhW9m1dz/tVpM0ipYlQFUQ8J3HH+O1H/8tE6vX4JylXK0xdeYU3/nr/8Xxhz5Ht9VACLWkEH/rd/+QjVt3oLUmWsTH9DRAqYC5ybNkSUKlUkUKhkxEigL7DGZcXgBhqUxzZprJs6colcJFM7ie6XQb89RGx1i/aQtWZ4vCVmstlWqNl773DN/+2v9kYuUa3xekFAhHrV7nuW98jdM/e41yj0VaImFav2kLcbeDztIlhd27+q2f/R0iX9ze3HoUQN8HSNHPsITP6DzfJvjJ89/K6+ksW80xxpCl6ZKYXQiB1hlrL9pEfWIlSRrlBVeLM440Sli1/iLqK1eijV66/8g5sjQtcP1SCUJQKjE3/Q6nXn+Z6shI4eD7mEcih/rzFjhCKQUjY2OceuMVfvHqy1Rqo1hjlilmLN/S1oPUF+3YzS33fYo4inD0S+8OOP7gb1NfsRKzhBaxoBFzuVb6sFLj1R9/lzTuEJbLfQ3oCWGw57NIDnIBBDnrIqWiVAp5+q++zMw7p31tbxkhvBeeP2o1uebIbVy8/yDtZhMhJa3mPNceuZ1LDhyk226dB1guaDeA0VRHx3j1xed56bknGR2to4RHt36ofjpc5EA5waly4kEpz/aWw4CRWg2ddPk/j/wXWo05X47yzMP7bhcVQnDnb36GcrlKu9lk9fpNHLvnQZ+yivdXR/CEq6RWn+Dkqz/hqce+RFgKqFYrOXMc5HOTA6TOIqrVF4CiVCoRBJKxsTqt2XN89b/9e07/7O+ojYwhhMx3bVyYIHotMZt3XcpHjt9HY/YcH/3kw9RXrkJn2QVXkVzOS1RHRtFZyvf+5jH+5pE/IVCKSrVKqRQMsEpyyA+oz3z89j9aOIFeZPDOtX9BKQxJOm1++sPnMNayduNWqrXRvLRm3pNtDuYB1hrWbdxCfWIV1x65bdk0eenuNUtYrgKCE99/mm985U85+dMfUa1WqY1UCUsB5XKZIAjyoYZ8lXj6kS84FrS8OecwVmOLZiOf66dJijaWKOrQ7bSpr1rH3oM3sHPfVYxPrEbrlCxJcoZW5D5s+U0SQkiCkq81XkjLnl+QMkFQ4p233uTZv/4Kp3/2CpVqldGxMZSUhGFAUBpW/V7WWizE0498wS20T093maLI2PPSadFmEmOMpdPuEEVdRuoT7LjsIHuvvI51m7Z5uGq05xDzBmkxkGmKoRS017UlCu1zbrgJsne+zEtwKgjQWcY7b/2cn77wLG+8/AN0mjA2XkcpRbkcEihFqRSgFtj9IJ0OIL7zyBeGDKBXwrLOvzi9NjPrGRkviNTHfO37BZM4otVqUa6MsPXSy9i47RJWrd/IitXrqI6MoYIgb7T09X1nHdbZPrByjqAUIqSv3ohev3AOW3uLEnXaNGammDpzkpOvvsyZN1/FmIyxsTqloORp+EARhmHxuXB4A3T9u3eKDvbXKoFyjrwRpOja9L0CGmN8VSisVEnTlDde+gGvvfhdgqBMtT7OijXrWLVuE2s2bKY+sSqvFVYIyxWCsJzHZcXM5BmyNKE+sco3YHZ9AtOcm2Xu3CTNmWnmz71DpzlPliZUymWqIyOE4bgP2dLXM6TyjttntIMOTy6KKwIW7t4Y0AcxUG0IpG85tUoWKq6U79tzzpFmmnIYUqtVIe8rSrOEqVOvc+aNEzmHL1GlEuVKjVKlQliuMlJfgVQBb712gixLGVuxEp3EpEkEOe8ocoImCEPGx+u5TQcISWHXveglRS6IXACDTnfBHhXAeUqs2Afo+rbprOB84fhChJQeN0ilvAAAkXdcmLxNVinP7tZqY1hr8o7xLA/Ymrg9T6cxw+zbJ3HgNSKokEYtlPThy09U+ibJXi9Sbh5BoApT6TG9MheAX3W5YFebHOiF7TEBdpEdI2KpvSz9AkhPGFJYnHJ5VtUXgMtrBr4DFazRPrK4wPcTCIHOz+l1uDtcXoKThSNUOWxVeegCXxYTuTPrw/Y+tu/VOXpFASGW2ZuD6AlgGay9CMYJlCrK0a4n0UCgrELJgfbaov02GOg5tOBs7nzcsvmEEKpIX3vIbbGWVynVIr+JxXd3LRTAhWA4sWCHmXeoqr9bQ4CQPop4AeQevOgQcTgnl+0YGRZAv2rd4/CGQul7SMB+pXuGBh9ckJB5OdY5h+y1oSCL+qDXCLnMPQfvOygAUewlWmx73oWg0GEBvMf+ncW2nbglVBgBwok+oVEUSC9kRx+LRqMPevtU4N7tZcTSVIsY3ux3nnA+qN1ev8pdY/8XkBiHFFFxMHIAAAAASUVORK5CYII=",
};

const QB_ICONS = BOOK_ICONS; // Alias: gleiche Icons für Fragen-Tabs
// Sucht ein Kategorie-Eintrag (book+entry) über alle drei Bücher, anhand
// von bookId+catKey — wird an mehreren Stellen im Survey-Ablauf gebraucht
// (Fortschritts-Banner kann sich auf eine andere Kategorie beziehen als
// die gerade angezeigte).
function findQuestionEntry(bookId, catKey){
  const book = THEMEBOOK_QUESTIONS.find(b=>b.id===bookId);
  if(!book) return null;
  const entry = book.entries.find(e=>e.key===catKey);
  return entry ? {book, entry} : null;
}
function isThemeCompleted(bookId, catKey){
  return state.survey.themes.some(t=>t.bookId===bookId && t.catKey===catKey);
}
function renderQuestionsView(){
  const book = THEMEBOOK_QUESTIONS.find(b=>b.id===state.qBook) || THEMEBOOK_QUESTIONS[0];
  const catKey = state.qCat && book.entries.some(e=>e.key===state.qCat) ? state.qCat : book.entries[0].key;
  state.qBook = book.id;
  state.qCat = catKey;
  const entry = book.entries.find(e=>e.key===catKey);
  const active = state.survey.active;
  const thisCatCompleted = isThemeCompleted(book.id, catKey);
  const thisCatIsActive = active && active.bookId===book.id && active.catKey===catKey;

  const bookTabs = THEMEBOOK_QUESTIONS.map(b=>
    `<button class="book-tab ${b.id===state.qBook?'on':''}" onclick="setQBook('${b.id}')"><img class="book-tab-icon" src="${QB_ICONS[b.id]||''}" alt=""> ${esc(QB_LABELS[b.id])}</button>`
  ).join("");
  const catTabs = book.entries.map(e=>{
    const done = isThemeCompleted(book.id, e.key);
    const badge = done ? `<span class="q-cat-done-badge">✓</span>` : "";
    return `<button class="type-tab ${e.key===catKey?'on':''}" onclick="setQCat('${e.key}')">${esc(e.term)}${badge}</button>`;
  }).join("");

  // Klick-Status jeder Stärke-Frage bestimmen: beantwortet / anklickbar / gesperrt.
  const powerLis = entry.power.map(([l,q])=>{
    if(thisCatCompleted || thisCatIsActive){
      const src = thisCatCompleted
        ? state.survey.themes.find(t=>t.bookId===book.id && t.catKey===catKey)
        : active;
      const given = src.power.find(p=>p.letter===l);
      if(given){
        // Während der aktiven Auswahl (noch nicht fertiges Theme) darf man
        // eine bereits angeklickte/beantwortete Stärke-Frage erneut anklicken,
        // um die Antwort zu ändern, und über das x rechts wieder löschen.
        if(thisCatIsActive){
          return `<li class="answered editable" onclick="editPowerQuestion('${book.id}','${catKey}','${l}')"><b>${l}</b><div><div>${escHtml(q)}</div><div class="q-given-answer">„${escHtml(given.answer)}“</div></div><span class="q-del-btn" onclick="event.stopPropagation(); deletePowerQuestion('${book.id}','${catKey}','${l}')">✕</span></li>`;
        }
        return `<li class="answered"><b>${l}</b><div><div>${escHtml(q)}</div><div class="q-given-answer">„${escHtml(given.answer)}“</div></div><span class="q-check">✓</span></li>`;
      }
    }
    // noch nicht beantwortet — klickbar, wenn: (a) diese Kategorie bereits aktiv ist, noch <3 Antworten hat
    // und (falls es nicht Frage A ist) Frage A bereits beantwortet wurde, oder (b) keine Kategorie aktiv ist,
    // diese Kategorie noch nicht abgeschlossen ist und es sich um Frage A handelt — pro Theme muss immer
    // zuerst Frage A ausgewählt werden, erst danach werden B/C/D wählbar.
    const aAnswered = thisCatIsActive && active.power.some(p=>p.letter==='A');
    const canClick = thisCatIsActive
      ? (active.power.length < 3 && (l==='A' || aAnswered))
      : (!active && !thisCatCompleted && l==='A');
    const cls = canClick ? "clickable" : "locked";
    const onclick = canClick ? ` onclick="clickPowerQuestion('${book.id}','${catKey}','${l}')"` : "";
    return `<li class="${cls}"${onclick}><b>${l}</b>${escHtml(q)}</li>`;
  }).join("");

  const weakLis = entry.weak.map(([l,q])=>`<li><b>${l}</b>${escHtml(q)}</li>`).join("");

  // Fortschritts-/Aufruf-Banner: zeigt entweder den Gesamtfortschritt
  // (X von 4 Themes) oder — falls ein Theme gerade auf Schwäche/Quest/
  // Rucksack/Name wartet — einen direkten Weiterleiten-Button, egal
  // welche Kategorie/welches Buch gerade angezeigt wird.
  let ctaHtml = "";
  if(active && active.power.length>=3 && active.weakness===null){
    const catLabel = findQuestionEntry(active.bookId, active.catKey).entry.term;
    ctaHtml = `<div class="survey-cta"><span>„${esc(catLabel)}“ ist bereit — jetzt die <b>Schwäche</b> eintragen.</span><button onclick="openWeaknessModal()">Weiter</button></div>`;
  } else if(active && active.weakness!==null && active.quest===null){
    const catLabel = findQuestionEntry(active.bookId, active.catKey).entry.term;
    ctaHtml = `<div class="survey-cta"><span>„${esc(catLabel)}“ — jetzt eine <b>Quest-Idee</b> eintragen.</span><button onclick="openQuestModal()">Weiter</button></div>`;
  } else if(!active && state.survey.themes.length>=4 && state.survey.backpackItem===null){
    ctaHtml = `<div class="survey-cta"><span>Alle 4 Themes fertig — jetzt einen <b>Rucksack-Gegenstand</b> eintragen.</span><button onclick="openBackpackModal()">Weiter</button></div>`;
  } else if(!active && state.survey.themes.length>=4 && state.survey.backpackItem!==null && state.survey.name===null){
    ctaHtml = `<div class="survey-cta"><span>Fast fertig — jetzt noch den <b>Namen</b> eintragen.</span><button onclick="openNameModal()">Weiter</button></div>`;
  }

  const doneCount = state.survey.themes.length;
  const dots = [0,1,2,3].map(i=>{
    let cls = "survey-dot";
    if(i < doneCount) cls += " done";
    else if(i === doneCount && (active || (doneCount<4))) cls += " current";
    return `<span class="${cls}"></span>`;
  }).join("");
  const progressHtml = (doneCount>0 || active)
    ? `<div class="survey-progress">Charakter-Erstellung: <b>${doneCount} / 4 Themes</b> fertig<div class="survey-dots">${dots}</div></div>`
    : "";

  return `
    <div class="book-tabs">${bookTabs}</div>
    <div class="type-tabs">${catTabs}</div>
    <div class="content">
      ${progressHtml}
      ${ctaHtml}
      <div class="q-term">${esc(entry.term)}<span>${esc(entry.sub)}</span></div>
      <div class="q-aspects">${esc(entry.aspects)}</div>
      <div class="q-section-head">Stärke-Fragen <span class="q-en">(Power Tag — 3 auswählen &amp; beantworten)</span></div>
      <ol class="q-list">${powerLis}</ol>
      <div class="q-section-head q-rust">Schwäche-Fragen <span class="q-en">(zur Inspiration — deine Schwäche schreibst du frei nach den 3 Stärke-Antworten)</span></div>
      <ul class="q-list q-weak">${weakLis}</ul>
      <div class="q-quest"><b>Quest-Ideen:</b> ${esc(entry.quest)}</div>
    </div>`;
}
function setQBook(id){
  state.qBook = id;
  state.qCat = null;
  document.getElementById("mainView").innerHTML = renderQuestionsView();
}
function setQCat(key){
  state.qCat = key;
  document.getElementById("mainView").innerHTML = renderQuestionsView();
}

/* ------------------------------------------------------------
   Generisches Antwort-Modal — ein Textfeld-Popup, das für alle
   Schritte des Surveys wiederverwendet wird (Stärke-Frage, Schwäche,
   Quest, Rucksack, Name), jeweils mit eigenem Eyebrow/Titel/
   Platzhalter/Absenden-Callback. Schließen ohne Absenden verwirft nur
   die Eingabe — der Fortschritt selbst ändert sich erst bei "Weiter".
   ------------------------------------------------------------ */
let _answerModalOnSubmit = null;
function openGenericAnswerModal({eyebrow, title, question, placeholder, submitLabel, initialValue}){
  document.getElementById("answerModalEyebrow").textContent = eyebrow || "";
  document.getElementById("answerModalTitle").textContent = title || "";
  const qEl = document.getElementById("answerModalQuestion");
  if(question){ qEl.textContent = question; qEl.style.display = ""; }
  else { qEl.style.display = "none"; }
  const input = document.getElementById("answerModalInput");
  input.placeholder = placeholder || "";
  input.value = initialValue || "";
  document.getElementById("answerModalSubmitBtn").textContent = submitLabel || "Weiter";
  document.getElementById("answerModal").classList.add("open");
  document.body.style.overflow = "hidden";
  setTimeout(()=>input.focus(), 50);
}
function closeAnswerModal(){
  document.getElementById("answerModal").classList.remove("open");
  document.body.style.overflow = "";
  _answerModalOnSubmit = null;
}
function submitAnswerModal(){
  const val = document.getElementById("answerModalInput").value.trim();
  if(!val) return;
  const cb = _answerModalOnSubmit;
  document.getElementById("answerModal").classList.remove("open");
  document.body.style.overflow = "";
  _answerModalOnSubmit = null;
  if(cb) cb(val);
}

/* ------------------------------------------------------------
   SCHRITT 1 — Stärke-Frage anklicken & beantworten (3× pro Theme)
   ------------------------------------------------------------ */
function clickPowerQuestion(bookId, catKey, letter){
  const found = findQuestionEntry(bookId, catKey);
  if(!found) return;
  const q = found.entry.power.find(([l])=>l===letter);
  if(!q) return;
  if(!state.survey.active){
    state.survey.active = { bookId, catKey, power:[], weakness:null, quest:null };
  }
  _answerModalOnSubmit = (val)=>{
    state.survey.active.power.push({letter, question:q[1], answer:val});
    saveSurvey();
    if(state.survey.active.power.length>=3){
      openWeaknessModal();
    } else {
      document.getElementById("mainView").innerHTML = renderQuestionsView();
    }
  };
  openGenericAnswerModal({
    eyebrow: `${found.entry.term} · Stärke-Frage ${letter}`,
    title: "Frage beantworten",
    question: q[1],
    placeholder: "Deine Antwort …",
    submitLabel: state.survey.active.power.length>=2 ? "Antwort speichern" : "Weiter",
  });
}

/* ------------------------------------------------------------
   Bereits beantwortete Stärke-Frage (im aktiven Theme) erneut
   anklicken, um die Antwort zu ändern, oder per x wieder löschen.
   ------------------------------------------------------------ */
function editPowerQuestion(bookId, catKey, letter){
  const active = state.survey.active;
  if(!active || active.bookId!==bookId || active.catKey!==catKey) return;
  const found = findQuestionEntry(bookId, catKey);
  if(!found) return;
  const given = active.power.find(p=>p.letter===letter);
  if(!given) return;
  _answerModalOnSubmit = (val)=>{
    given.answer = val;
    saveSurvey();
    document.getElementById("mainView").innerHTML = renderQuestionsView();
  };
  openGenericAnswerModal({
    eyebrow: `${found.entry.term} · Stärke-Frage ${letter}`,
    title: "Antwort ändern",
    question: given.question,
    placeholder: "Deine Antwort …",
    submitLabel: "Antwort speichern",
    initialValue: given.answer,
  });
}
function deletePowerQuestion(bookId, catKey, letter){
  const active = state.survey.active;
  if(!active || active.bookId!==bookId || active.catKey!==catKey) return;
  active.power = active.power.filter(p=>p.letter!==letter);
  saveSurvey();
  document.getElementById("mainView").innerHTML = renderQuestionsView();
}

/* ------------------------------------------------------------
   SCHRITT 2 — Schwäche (Freitext, nach 3 beantworteten Stärke-Fragen)
   ------------------------------------------------------------ */
function openWeaknessModal(){
  const found = findQuestionEntry(state.survey.active.bookId, state.survey.active.catKey);
  _answerModalOnSubmit = (val)=>{
    state.survey.active.weakness = val;
    saveSurvey();
    openQuestModal();
  };
  openGenericAnswerModal({
    eyebrow: `${found.entry.term} · Schwäche`,
    title: "Schwäche eintragen",
    question: "Was ist eine Schwäche, die zu diesem Theme passt? (Orientierung: " + found.entry.weak.map(([l,q])=>q).join(" · ") + ")",
    placeholder: "Deine Schwäche …",
    submitLabel: "Weiter",
  });
}

/* ------------------------------------------------------------
   SCHRITT 3 — Quest (Freitext, danach ist das Theme fertig)
   ------------------------------------------------------------ */
function openQuestModal(){
  const found = findQuestionEntry(state.survey.active.bookId, state.survey.active.catKey);
  _answerModalOnSubmit = (val)=>{
    state.survey.active.quest = val;
    completeActiveTheme();
  };
  openGenericAnswerModal({
    eyebrow: `${found.entry.term} · Quest`,
    title: "Quest-Idee eintragen",
    question: "Woran arbeitet dieses Theme? (Orientierung: " + found.entry.quest + ")",
    placeholder: "Deine Quest-Idee …",
    submitLabel: "Theme abschließen",
  });
}
function completeActiveTheme(){
  const t = state.survey.active;
  state.survey.themes.push(t);
  state.survey.active = null;
  saveSurvey();
  if(state.survey.themes.length>=4){
    openBackpackModal();
  } else {
    document.getElementById("mainView").innerHTML = renderQuestionsView();
  }
}

/* ------------------------------------------------------------
   SCHRITT 4 — Rucksack-Gegenstand (nach dem 4. Theme)
   ------------------------------------------------------------ */
function openBackpackModal(){
  _answerModalOnSubmit = (val)=>{
    state.survey.backpackItem = val;
    saveSurvey();
    openNameModal();
  };
  openGenericAnswerModal({
    eyebrow: "Alle 4 Themes fertig",
    title: "Rucksack-Gegenstand",
    question: "Welchen Gegenstand trägst du bei dir?",
    placeholder: "z. B. ein abgegriffenes Amulett …",
    submitLabel: "Weiter",
  });
}

/* ------------------------------------------------------------
   SCHRITT 5 — Name, dann Charakter fertigstellen & speichern
   ------------------------------------------------------------ */
function openNameModal(){
  _answerModalOnSubmit = (val)=>{
    state.survey.name = val;
    saveSurvey();
    finalizeSurveyCharacter();
  };
  openGenericAnswerModal({
    eyebrow: "Fast fertig",
    title: "Name des Charakters",
    question: null,
    placeholder: "Name eintragen …",
    submitLabel: "Charakterbogen erstellen & drucken",
  });
}
function finalizeSurveyCharacter(){
  const themes = state.survey.themes.map((t,i)=>{
    const found = findQuestionEntry(t.bookId, t.catKey);
    return {
      num: i+1,
      category: found ? found.entry.term : "",
      title: "",
      powerTags: t.power.map(p=>p.answer),
      weakness: t.weakness,
      quest: t.quest,
    };
  });
  const character = {
    name: state.survey.name,
    tropeTitle: "Eigene Charaktererstellung",
    backpackItems: state.survey.backpackItem ? [state.survey.backpackItem] : [],
    themes,
    createdAt: new Date().toISOString(),
  };
  const newIdx = addCharacter(character);
  state.survey = blankSurvey();
  saveSurvey();
  setMainTab("chars");
  openSheetModal(newIdx);
}


/* ============================================================
   THEME-KITS VIEW
   ============================================================ */
const BOOK_LABELS = { origin:"Origin", adventure:"Adventure", greatness:"Greatness" };
function renderKitsView(){
  const book = THEME_KIT_LIBRARY.find(b=>b.id===state.kitBook) || THEME_KIT_LIBRARY[0];
  const typeKey = state.kitType && book.types.some(t=>t.key===state.kitType) ? state.kitType : book.types[0].key;
  state.kitType = typeKey;
  const type = book.types.find(t=>t.key===typeKey);
  const bookTabs = THEME_KIT_LIBRARY.map(b=>
    `<button class="book-tab ${b.id===state.kitBook?'on':''}" onclick="setKitBook('${b.id}')"><img class="book-tab-icon" src="${BOOK_ICONS[b.id]||''}" alt=""> ${esc(BOOK_LABELS[b.id])}</button>`
  ).join("");
  const typeTabs = book.types.map(t=>
    `<button class="type-tab ${t.key===typeKey?'on':''}" onclick="setKitType('${t.key}')">${esc(t.label)}</button>`
  ).join("");
  const cards = type.kits.map(k=>{
    const powerHtml = k.power.map(t=>`<span class="tag">${esc(t)}</span>`).join("");
    const weakHtml = k.weak.map(t=>`<span class="tag weak">${esc(t)}</span>`).join("");
    return `<div class="kit-card">
      <div class="kit-eyebrow">${esc(type.label)}</div>
      <div class="kit-title">${esc(k.title)}</div>
      <div class="tag-row">${powerHtml}</div>
      <hr class="hr">
      <div class="tag-row">${weakHtml}</div>
      <hr class="hr">
      <div class="quest">${esc(k.quest)}</div>
    </div>`;
  }).join("");
  return `
    <div class="book-tabs">${bookTabs}</div>
    <div class="type-tabs">${typeTabs}</div>
    <div class="content">
      <div class="count-line">${type.kits.length} Theme Kits · ${esc(type.label)}</div>
      <div class="kit-grid">${cards}</div>
    </div>`;
}
function setKitBook(id){
  state.kitBook = id;
  state.kitType = null;
  document.getElementById("mainView").innerHTML = renderKitsView();
}
function setKitType(key){
  state.kitType = key;
  document.getElementById("mainView").innerHTML = renderKitsView();
}

/* ============================================================
   TROPES VIEW
   ============================================================ */
function tkKitRefHtml(k){
  return `<li><b>${esc(k.name)}</b><span>${esc(k.type)}, S. ${k.page}</span></li>`;
}
// Ordnet einen Kit-"type" (wie in TROPE_LIBRARY verwendet, z. B. "Trait",
// "Duty", "Destiny") seinem Themebook zu — abgeleitet aus den
// THEMEBOOK_QUESTIONS-Kategorien je Buch (Origin/Adventure/Greatness).
const TROPE_TYPE_TO_BOOK = {
  "circumstance":"origin", "people":"origin", "skill or trade":"origin", "trait":"origin",
  "personality":"origin", "devotion":"origin", "past":"origin", "companion":"origin",
  "magic":"origin", "possessions":"origin",
  "duty":"adventure", "influence":"adventure", "knowledge":"adventure",
  "prodigious ability":"adventure", "relic":"adventure", "uncanny being":"adventure",
  "destiny":"greatness", "dominion":"greatness", "mastery":"greatness", "monstrosity":"greatness",
  // Erweiterungs-Theme-Kits (S. 208–229, jenseits der drei Kern-Themebooks) —
  // gelten im Regelwerk als Greatness-Might-Themes:
  "alchemy & herbalism":"greatness", "landshaping":"greatness", "runic invocation":"greatness",
  "shapeshifting":"greatness", "sorcery":"greatness",
};
const TROPE_MIGHT_LABELS = { origin:"Origin", adventure:"Adventure", greatness:"Greatness" };
// Bestimmt das "Might"-Buch eines Tropes anhand seiner drei festen Kits
// (t.kits, nicht t.choose): Sobald ein Greatness-Kit dabei ist, gilt der
// ganze Trope als Greatness; sonst genügt ein Adventure-Kit für Adventure;
// sonst bleibt es Origin. Reihenfolge/Priorität: Greatness > Adventure > Origin.
function tropeMightBook(t){
  const books = t.kits.map(k=>TROPE_TYPE_TO_BOOK[(k.type||"").toLowerCase()]).filter(Boolean);
  if(books.includes("greatness")) return "greatness";
  if(books.includes("adventure")) return "adventure";
  return "origin";
}
function renderTropesView(){
  const q = (state.tropeQuery||"").toLowerCase().trim();
  const filtered = TROPE_LIBRARY.map((t,i)=>({t,i})).filter(({t})=>{
    if(!q) return true;
    const hay = (t.title+" "+t.category+" "+t.flavor+" "+t.kits.map(k=>k.name).join(" ")+" "+t.choose.map(k=>k.name).join(" ")).toLowerCase();
    return hay.includes(q);
  });
  const cards = filtered.map(({t,i})=>{
    const might = tropeMightBook(t);
    return `
    <div class="trope-card">
      <div class="trope-cat">${esc(t.category)}</div>
      <div class="trope-might-badge ${might}"><img class="trope-might-icon" src="${BOOK_ICONS[might]}" alt="">${TROPE_MIGHT_LABELS[might]}</div>
      <div class="trope-title">${esc(t.title)}</div>
      <div class="trope-flavor">${esc(t.flavor)}</div>
      <ul class="trope-kits">${t.kits.map(tkKitRefHtml).join("")}</ul>
      <div class="trope-choose-label">Wähle eins:</div>
      <ul class="trope-kits">${t.choose.map(tkKitRefHtml).join("")}</ul>
      <div class="trope-backpack"><b>Backpack:</b> ${esc(t.backpack)}</div>
      <button class="make-char-btn" onclick="openWizard(${i})">✒️ Charakter aus dieser Trope erstellen</button>
    </div>`;
  }).join("");
  return `
    <div class="content">
      <div class="trope-search-row">
        <input type="text" class="trope-search" placeholder="Tropes durchsuchen …" value="${escHtml(state.tropeQuery)}" oninput="filterTropes(this.value)">
      </div>
      <div class="count-line">${filtered.length} von ${TROPE_LIBRARY.length} Tropes</div>
      <div class="trope-grid">${cards}</div>
    </div>`;
}
function filterTropes(v){
  state.tropeQuery = v;
  const el = document.getElementById("mainView");
  const scrollPos = window.scrollY;
  el.innerHTML = renderTropesView();
  const input = el.querySelector(".trope-search");
  if(input){ input.focus(); input.selectionStart = input.selectionEnd = input.value.length; }
  window.scrollTo(0, scrollPos);
}

/* ============================================================
   "MEINE CHARAKTERE" VIEW
   ============================================================ */
function exampleCharRowHtml(c, i){
  const might = exampleCharMightBook(c);
  return `
    <div class="char-row example-char-row" onclick="openSheetModal(${i}, true)" style="cursor:pointer;">
      <img class="char-row-might-icon" src="${BOOK_ICONS[might]}" alt="${TROPE_MIGHT_LABELS[might]}" title="${TROPE_MIGHT_LABELS[might]}">
      <div style="flex:1;">
        <div class="char-row-name">${escHtml(c.name)}</div>
        <div class="char-row-sub">${escHtml(c.tropeTitle||"")}</div>
      </div>
      <div class="char-row-actions">
        <button class="icon-btn" onclick="event.stopPropagation(); openSheetModal(${i}, true)">Bogen</button>
      </div>
    </div>`;
}
function renderCharsView(){
  const ownRows = CHARACTERS.map((c,i)=>`
    <div class="char-row" onclick="openSheetModal(${i})" style="cursor:pointer;">
      <div style="flex:1;">
        <div class="char-row-name">${escHtml(c.name)}</div>
        <div class="char-row-sub">${escHtml(c.tropeTitle||"")}</div>
      </div>
      <div class="char-row-actions">
        <button class="icon-btn" onclick="event.stopPropagation(); openSheetModal(${i})">Bogen</button>
        <button class="icon-btn danger" onclick="event.stopPropagation(); deleteChar(${i})" aria-label="Charakter löschen" title="Charakter löschen">✕</button>
      </div>
    </div>`).join("");
  const ownSection = CHARACTERS.length
    ? `<div class="char-list">${ownRows}</div>`
    : `<div class="empty-state">
        
        Noch keine eigenen Charaktere erstellt.<br>
        Wähle im Tropes-Reiter eine Trope und tippe auf<br>„Charakter aus dieser Trope erstellen“.
      </div>`;
  const exampleRows = EXAMPLE_CHARACTERS.map((c,i)=>exampleCharRowHtml(c,i)).join("");
  return `<div class="content">
    <div class="chars-toolbar">
      <button class="btn-secondary" onclick="triggerImportCharacter()">📥 Charakter (JSON) importieren</button>
      <input type="file" id="importCharFileInput" accept="application/json,.json" multiple style="display:none;" onchange="handleImportCharacterFile(event)">
    </div>
    ${ownSection}
    <details class="example-chars-details">
      <summary>📖 Beispiel-Charaktere aus dem Regelwerk (${EXAMPLE_CHARACTERS.length})</summary>
      <div class="char-list example-char-list">${exampleRows}</div>
    </details>
  </div>`;
}
function deleteChar(i){
  const nm = CHARACTERS[i] ? CHARACTERS[i].name : "dieser Charakter";
  if(!window.confirm(`„${nm}" wirklich löschen?\n\nDas kann nicht rückgängig gemacht werden.`)) return;
  CHARACTERS.splice(i,1);
  saveChars();
  renderMain();
}

/* ============================================================
   TROPE-CHARAKTER-ASSISTENT
   Ablauf: (1) viertes Theme aus den 3 "Choose One"-Optionen wählen,
   (2) pro Theme (alle 4) genau 2 Stärke-Tags + 1 Schwäche-Tag aus dem
   jeweiligen Theme Kit wählen (echte Spielregel — nicht die volle
   Liste), (3) Backpack-Gegenstand, (4) Name. "Erstellen & Drucken"
   legt den Charakter in CHARACTERS (eigener localStorage-Schlüssel,
   unabhängig vom großen GM-Tool) an und öffnet direkt den Druck-Dialog.
   ============================================================ */
function findKitCardByTitle(title){
  for(const book of THEME_KIT_LIBRARY){
    for(const type of book.types){
      const hit = type.kits.find(k=>k.title===title);
      if(hit) return {kit:hit, typeLabel:type.label};
    }
  }
  return null;
}
function tropeBackpackOptions(backpackText){
  const cleaned = (backpackText||"").replace(/^oder\s+/i,"");
  const parts = cleaned.split(/,\s*(?:oder\s+)?|\s+oder\s+/i).map(s=>s.trim()).filter(Boolean);
  return parts.length ? parts : [cleaned.trim()].filter(Boolean);
}
function wFourKitRefs(){
  const t = TROPE_LIBRARY[state.wTropeIdx];
  if(state.wChoiceIdx===null) return null;
  return [...t.kits, t.choose[state.wChoiceIdx]];
}
function openWizard(tropeIdx){
  state.wTropeIdx = tropeIdx;
  state.wChoiceIdx = null;
  state.wTagSel = [0,1,2,3].map(()=>({power:[], weakness:null}));
  state.wBackpack = "";
  state.wName = TROPE_LIBRARY[tropeIdx].title;
  document.getElementById("wTitle").textContent = TROPE_LIBRARY[tropeIdx].title;
  document.getElementById("wBody").innerHTML = renderWizardBody();
  document.getElementById("wizardModal").classList.add("open");
  document.body.style.overflow = "hidden";
}
function closeWizard(){
  document.getElementById("wizardModal").classList.remove("open");
  document.body.style.overflow = "";
}
function wTagsComplete(){
  const refs = wFourKitRefs();
  if(!refs) return false;
  return refs.every((ref,i)=>{
    const found = findKitCardByTitle(ref.name);
    if(!found) return true;
    const sel = state.wTagSel[i];
    return sel.power.length===2 && sel.weakness!==null;
  });
}
function renderThemeTagPicker(themeIdx, kitRef){
  const found = findKitCardByTitle(kitRef.name);
  const sel = state.wTagSel[themeIdx];
  if(!found){
    return `<div class="w-theme-pick">
      <div class="w-theme-pick-head">Theme ${themeIdx+1} — ${esc(kitRef.name)}</div>
      <p class="w-theme-pick-note">Kein Kartentext verfügbar (außerhalb S. 78–131) — Tags im Bogen von Hand ergänzen.</p>
    </div>`;
  }
  const k = found.kit;
  const powerChips = k.power.map((tag,i)=>{
    const on = sel.power.includes(i);
    const disabled = !on && sel.power.length>=2;
    return `<button type="button" class="tag-chip ${on?'on':''}" ${disabled?"disabled":""} onclick="wTogglePower(${themeIdx},${i})">${esc(tag)}</button>`;
  }).join("");
  const weakChips = k.weak.map((tag,i)=>{
    const on = sel.weakness===i;
    return `<button type="button" class="tag-chip weak ${on?'on':''}" onclick="wSetWeakness(${themeIdx},${i})">${esc(tag)}</button>`;
  }).join("");
  return `<div class="w-theme-pick">
    <div class="w-theme-pick-head">Theme ${themeIdx+1} — ${found.typeLabel}: ${esc(k.title)}</div>
    <div class="w-theme-pick-sub">Stärke-Tags wählen (genau 2) — ${sel.power.length} / 2</div>
    <div class="tag-chip-row">${powerChips}</div>
    <div class="w-theme-pick-sub">Schwäche-Tag wählen (genau 1)</div>
    <div class="tag-chip-row">${weakChips}</div>
  </div>`;
}
function renderWizardBody(){
  const t = TROPE_LIBRARY[state.wTropeIdx];
  const choiceHtml = t.choose.map((c,i)=>`
    <button class="w-choice ${state.wChoiceIdx===i?'on':''}" onclick="wSelectChoice(${i})">
      <span class="w-choice-radio"></span>
      <span class="w-choice-text">${esc(c.name)}<span>${esc(c.type)}, S. ${c.page}</span></span>
    </button>`).join("");
  const refs = wFourKitRefs();
  const tagPickerHtml = refs ? refs.map((ref,i)=>renderThemeTagPicker(i,ref)).join("") : "";
  const backpackChips = tropeBackpackOptions(t.backpack).map(opt=>
    `<button type="button" class="w-backpack-chip ${state.wBackpack===opt?'on':''}" onclick="wPickBackpackChip('${opt.replace(/'/g,"\\'")}')">${esc(opt)}</button>`
  ).join("");
  const canSubmit = state.wChoiceIdx!==null && wTagsComplete() && state.wName.trim().length>0;
  return `
    <div class="w-flavor">${esc(t.flavor)}</div>
    <div class="w-step-label">1. Viertes Theme wählen</div>
    <div class="w-choice-list">${choiceHtml}</div>
    ${refs ? `<div class="w-step-label">2. Start-Tags für jedes Theme wählen</div>
    <div class="w-theme-pick-hint">Wie am Spieltisch: aus jedem Theme Kit startest du mit 2 Stärke-Tags und 1 Schwäche-Tag.</div>
    ${tagPickerHtml}` : ""}
    <div class="w-step-label">${refs?"3":"2"}. Backpack-Gegenstand</div>
    <div class="w-backpack-hint">Aus der Trope: ${esc(t.backpack)}</div>
    <div class="w-backpack-chips">${backpackChips}</div>
    <div class="w-field">
      <input type="text" id="wBackpackInput" placeholder="Backpack-Gegenstand eintragen …" value="${escHtml(state.wBackpack)}" oninput="wSetBackpack(this.value)">
    </div>
    <div class="w-step-label">${refs?"4":"3"}. Name</div>
    <div class="w-field">
      <input type="text" id="wNameInput" placeholder="Name des Charakters" value="${escHtml(state.wName)}" oninput="wSetName(this.value)">
    </div>
    <div class="w-actions">
      <button class="btn-primary" id="wSubmitBtn" ${canSubmit?"":"disabled"} onclick="wSubmit()">Charakterbogen erstellen &amp; drucken</button>
    </div>`;
}
function wSelectChoice(i){
  state.wChoiceIdx = i;
  state.wTagSel = [0,1,2,3].map(()=>({power:[], weakness:null}));
  document.getElementById("wBody").innerHTML = renderWizardBody();
}
function wTogglePower(themeIdx, tagIdx){
  const sel = state.wTagSel[themeIdx];
  const pos = sel.power.indexOf(tagIdx);
  if(pos>=0){ sel.power.splice(pos,1); }
  else if(sel.power.length<2){ sel.power.push(tagIdx); }
  document.getElementById("wBody").innerHTML = renderWizardBody();
}
function wSetWeakness(themeIdx, tagIdx){
  state.wTagSel[themeIdx].weakness = tagIdx;
  document.getElementById("wBody").innerHTML = renderWizardBody();
}
function wPickBackpackChip(opt){
  state.wBackpack = opt;
  document.getElementById("wBody").innerHTML = renderWizardBody();
}
function wSetBackpack(v){
  state.wBackpack = v;
}
function wSetName(v){
  state.wName = v;
  const btn = document.getElementById("wSubmitBtn");
  if(btn) btn.disabled = !(state.wChoiceIdx!==null && wTagsComplete() && v.trim().length>0);
}
function tropeThemeFromKitTitle(kitTitle, num, tagSel){
  const found = findKitCardByTitle(kitTitle);
  if(!found){
    return { num, category:"", title:kitTitle, powerTags:["",""], weakness:"", quest:"" };
  }
  const k = found.kit;
  const chosenPower = tagSel.power.length===2 ? tagSel.power.map(i=>k.power[i]) : k.power.slice(0,2);
  const chosenWeak = tagSel.weakness!==null ? k.weak[tagSel.weakness] : k.weak[0];
  return { num, category:found.typeLabel, title:k.title, powerTags:chosenPower, weakness:chosenWeak, quest:k.quest };
}
function wSubmit(){
  if(state.wChoiceIdx===null || !wTagsComplete() || !state.wName.trim()) return;
  const t = TROPE_LIBRARY[state.wTropeIdx];
  const refs = wFourKitRefs();
  const themes = refs.map((ref,i)=>tropeThemeFromKitTitle(ref.name, i+1, state.wTagSel[i]));
  const backpackItem = state.wBackpack.trim();
  const character = {
    name: state.wName.trim(),
    tropeTitle: `Trope: ${t.title}`,
    backpackItems: backpackItem ? [backpackItem] : [],
    themes,
    createdAt: new Date().toISOString(),
  };
  const newIdx = addCharacter(character);
  closeWizard();
  setMainTab("chars");
  openSheetModal(newIdx);
}

/* ============================================================
   CHARAKTERBOGEN — Vorschau im Modal + Druck über den nativen
   Browser-Druckdialog. Statt eines neuen Fensters (auf Mobilgeräten,
   v. a. iOS Safari, werden Popups aus asynchronem JS-Code fast immer
   blockiert) wird der Inhalt in ein verstecktes #printArea auf DERSELBEN
   Seite geschrieben und window.print() direkt aufgerufen — @media print
   blendet den Rest der App aus. Das ist der zuverlässigste Weg, um auf
   Handys "Drucken" bzw. "Als PDF speichern" anzubieten.
   ============================================================ */
function buildThemeCardsHtmlOnscreen(themes, editable){
  editable = editable!==false;
  const editAttr = editable ? ` contenteditable="true"` : "";
  return themes.map((th,i)=>`
    <div class="ps-theme">
      <div class="ps-theme-head">Theme ${th.num} — ${escHtml(th.category)}${th.title?`: ${escHtml(th.title)}`:""}</div>
      <ul id="sheetTheme${i}Power" class="${editable?"ps-editable-list":""}"${editAttr}>${th.powerTags.map(t=>`<li>${escHtml(t)}</li>`).join("")}</ul>
      <p><b>Weakness:</b> <span id="sheetTheme${i}Weak"${editAttr}>${escHtml(th.weakness)}</span></p>
      <p><b>Quest:</b> <span id="sheetTheme${i}Quest"${editAttr}>${escHtml(th.quest)}</span></p>
    </div>`).join("");
}
function buildThemeCardsHtmlPrint(themes){
  return themes.map(th=>`
    <div class="pdf-theme-card">
      <div class="pdf-card-head">Theme ${th.num} — ${escHtml(th.category)}${th.title?`: ${escHtml(th.title)}`:""}</div>
      <div class="pdf-card-body">
        <ul class="pdf-ul">${th.powerTags.map(t=>`<li>${escHtml(t)}</li>`).join("")}</ul>
        <p><b>Weakness:</b> ${escHtml(th.weakness)}</p>
        <p><b>Quest:</b> ${escHtml(th.quest)}</p>
      </div>
    </div>`).join("");
}
function getSheetChar(idx, isExample){
  return isExample ? EXAMPLE_CHARACTERS[idx] : CHARACTERS[idx];
}
function openSheetModal(idx, isExample){
  state.sheetIdx = idx;
  state.sheetIsExample = !!isExample;
  const c = getSheetChar(idx, isExample);
  document.getElementById("sheetTitle").textContent = c.name;
  const editable = !isExample;
  const editAttr = editable ? ` contenteditable="true"` : "";
  const backpackHtml = `<ul id="sheetBackpack" class="ps-backpack-list${editable?" ps-editable-list":""}"${editAttr}>${
    (c.backpackItems.length ? c.backpackItems : [""]).map(item=>`<li>${escHtml(item)}</li>`).join("")
  }</ul>`;
  document.getElementById("sheetBody").innerHTML = `
    <div class="ps-hero-name" id="sheetHeroName"${editAttr}>${escHtml(c.name)}</div>
    <div class="ps-hero-note">${escHtml(c.tropeTitle)}</div>
    ${isExample ? `<div class="ps-example-note">📖 Offizieller Beispiel-Charakter — schreibgeschützt, aber druckbar.</div>` : ""}
    <div class="ps-backpack-label">Backpack</div>
    ${backpackHtml}
    ${buildThemeCardsHtmlOnscreen(c.themes, editable)}`;
  document.getElementById("sheetPrintBtn").onclick = ()=>printCharacterSheet(idx, isExample);
  const saveBtn = document.getElementById("sheetSaveBtn");
  saveBtn.style.display = isExample ? "none" : "";
  saveBtn.onclick = ()=>saveSheetChar(idx);
  const shareBtn = document.getElementById("sheetShareBtn");
  shareBtn.style.display = (isExample || EMBEDDED) ? "none" : "";
  shareBtn.onclick = ()=>shareCharacterToGm(CHARACTERS[idx]);
  document.getElementById("sheetModal").classList.add("open");
  document.body.style.overflow = "hidden";
}
function editableListItems(el){
  if(!el) return [];
  return Array.from(el.querySelectorAll("li")).map(li=>li.textContent.trim()).filter(Boolean);
}
function saveSheetChar(idx){
  const c = CHARACTERS[idx];
  const nameEl = document.getElementById("sheetHeroName");
  const newName = nameEl ? nameEl.textContent.trim() : "";
  if(newName){
    c.name = newName;
    document.getElementById("sheetTitle").textContent = newName;
  }
  c.backpackItems = editableListItems(document.getElementById("sheetBackpack"));
  c.themes.forEach((th,i)=>{
    const powerEl = document.getElementById(`sheetTheme${i}Power`);
    const weakEl = document.getElementById(`sheetTheme${i}Weak`);
    const questEl = document.getElementById(`sheetTheme${i}Quest`);
    const power = editableListItems(powerEl);
    if(power.length) th.powerTags = power;
    if(weakEl) th.weakness = weakEl.textContent.trim();
    if(questEl) th.quest = questEl.textContent.trim();
  });
  saveChars();
  notifyHost(c);
  const btn = document.getElementById("sheetSaveBtn");
  if(btn){
    const old = btn.textContent;
    btn.textContent = "✓ Gespeichert";
    setTimeout(()=>{ btn.textContent = old; }, 1200);
  }
  if(state.mainTab==="chars") document.getElementById("mainView").innerHTML = renderCharsView();
}
function closeSheetModal(){
  document.getElementById("sheetModal").classList.remove("open");
  document.body.style.overflow = "";
}
function printCharacterSheet(idx, isExample){
  const c = getSheetChar(idx, isExample);
  const backpackHtml = c.backpackItems.length
    ? `<ul class="pdf-ul">${c.backpackItems.map(item=>`<li>${escHtml(item)}</li>`).join("")}</ul>`
    : `<p style="font-style:italic; color:#8a7a5c;">(leer)</p>`;
  document.getElementById("printArea").innerHTML = `
    <div class="pdf-subtitle">Hero Card — Stand vom ${new Date().toLocaleDateString("de-DE")}</div>
    <div class="pdf-hero-name">${escHtml(c.name)}</div>
    <div class="pdf-hero-note">${escHtml(c.tropeTitle)}</div>
    <div class="pdf-section-label">Backpack</div>
    ${backpackHtml}
    <div class="pdf-theme-grid">${buildThemeCardsHtmlPrint(c.themes)}</div>`;
  // Kurze Verzögerung, damit der Browser das eingefügte HTML sicher
  // gerendert hat, bevor der Druckdialog aufgeht.
  setTimeout(()=>{ window.print(); }, 80);
}

/* ============================================================
   INIT
   ============================================================ */
setMainTab("questions");
