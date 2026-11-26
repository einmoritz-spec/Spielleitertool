/* The Spire – Klasse Mortician Executioner (aus quellen/spire/de/sin, erzeugt mit plan/spire/build_klassen2.py) */
(window.SP_KLASSE = window.SP_KLASSE || []).push({
 "id": "mortician-executioner",
 "t": "Mortician Executioner",
 "buch": "sp_s1",
 "herk": "Sin",
 "p": 13,
 "zitat": "„Als Strafe für deine Verbrechen hat die Stadt Spire dich für tot erklärt – und es fällt mir zu, das administrative Ungleichgewicht zu beheben, das dich hier lebendig und atmend stehen lässt, in flagranter Verletzung mehrerer entscheidender Edikte und eines Großen Statuts.“",
 "intro": [
  "Hinrichtungen sind im Spire illegal, dank eines Gesetzes, das vor über einem Jahrhundert von einem Legislator-Architekten erlassen wurde, der die Todesstrafe unmodern fand. Die einflussreiche Sekte der Leichenbestatter fand jedoch ein Schlupfloch im Verbot: eine Person für rechtlich tot zu erklären und das Gleichgewicht anschließend mit der Schwertspitze wiederherzustellen. Du bist ein Mortician Executioner und hast dich dem Ministerium unserer Verborgenen Herrin angeschlossen. Du führst ein Doppelleben als Staatsattentäter und Revolutionär und musst alle Bürden schultern, die das mit sich bringt."
 ],
 "kern": {
  "wid": "Blut +2, Ruf +2",
  "fert": "Kämpfen, Schleichen",
  "dom": "Religion, Okkultes",
  "auff": "Unterwandere – statt zu zerstören – ein Hindernis auf deinem Weg, sodass es nun der Revolution nützt."
 },
 "bind": [
  "**SC-Bindung:** Einer der SC wurde in der Vergangenheit rechtlich für tot erklärt; du hast seine Papiere gefälscht und ihn ins Leben zurückgeholt. Was war sein Verbrechen?",
  "**NSC-Bindung:** Eine Bindung auf Einzelebene zu einem aufstrebenden Mortician Executioner, der dich mag, aber (noch) nicht Teil der Revolution ist."
 ],
 "ausr": [
  {
   "k": "lbl",
   "x": "Wähle ein Set:"
  },
  {
   "k": "pkt",
   "x": "Vulnere-Armbrust (W6, Fernkampf, Nachladen)"
  },
  {
   "k": "pkt",
   "x": "Paraklesis-Axt (W6, Brutal, Ermüdend)"
  },
  {
   "k": "pkt",
   "x": "Henkersmaske"
  },
  {
   "k": "lbl",
   "x": "Oder:"
  },
  {
   "k": "pkt",
   "x": "Ossory-Stab (W3, Parierend)"
  },
  {
   "k": "pkt",
   "x": "Hüterliche Ritualgewandung (Rüstung 2)"
  },
  {
   "k": "pkt",
   "x": "Zahlreiche Wahrsage- und Scrying-Utensilien"
  }
 ],
 "kfae": [
  {
   "t": "SAG MIR, WAS ICH WISSEN MUSS",
   "p": 13,
   "fl": "Du kommst auf den Kern der Sache.",
   "x": [
    "Einmal pro Situation nennst du eine Information, die du wissen möchtest (z. B. den Aufenthaltsort einer Person, das Passwort für eine Kaschemme, den Namen der Geliebten eines Aelfir). Die Spielleitung sagt dir, welcher NSC in der Nähe sie kennt, falls überhaupt einer."
   ]
  },
  {
   "t": "ZUM TODE MARKIERT",
   "p": 13,
   "fl": "Du bist die scharfe Spitze einer großen und schrecklichen Bürokratie.",
   "x": [
    "Einmal pro Sitzung kannst du ein Ziel für rechtlich tot erklären. Das ist ein langwieriger Vorgang, der mehrere Formulare in dreifacher Ausfertigung erfordert, die bei den zuständigen Behörden einzureichen sind. Das Ziel muss als Bürger innerhalb des Spire registriert sein; das heißt, Dienstzeit-Drückeberger, Hyänen und Staatsgäste sind tabu. Wenn du dein Ziel oder deine Ziele jagst, würfelst du auf **Verfolgen** und **Kämpfen** mit Meisterschaft. Markiere W3 Stress auf **Ruf** für jedes rechtlich tote Ziel, das am Ende jeder Sitzung *nicht tatsächlich* tot ist."
   ]
  }
 ],
 "fort": {
  "niedrig": [
   {
    "t": "BÜROKRATISCHES ATTENTAT",
    "p": 14,
    "tag": "Göttlich",
    "fl": "Es zeigt sich, dass die rechtliche Todeserklärung erst der Anfang ihrer Probleme war.",
    "x": [
     "Erhalte die Domäne **Akademie**. Sobald du ein Ziel für rechtlich tot erklärt hast, kannst du die Unterlagen der Stadt an die unglückliche Realität anpassen. Markiere W3 Stress auf **Schatten**, um diesen Zauber zu wirken, während du dein markiertes Ziel beobachtest. Jedes Element der Stadt, mit dem es zu tun hat, bereitet ihm Probleme: Seine Arbeitsgenehmigungen sind abgelaufen, es kommt nicht in seinen Mitgliederclub, es hat nicht die richtigen Papiere, um eine bestimmte Treppe zu benutzen, und so weiter."
    ]
   },
   {
    "t": "LEICHENFINDER-GENERAL",
    "p": 14,
    "fl": "Du weißt, wo die Leichen begraben sind.",
    "x": [
     "Erhalte die Fertigkeit **Ermitteln**. Einmal pro Sitzung erklärst du, dass in deiner unmittelbaren Umgebung irgendwo eine Leiche versteckt ist. Frage die Spielleitung, wessen Leiche es ist (sie hängt in irgendeiner Weise mit der laufenden Handlung zusammen)."
    ]
   },
   {
    "t": "HERZENSKÄLTE",
    "p": 14,
    "tag": "Göttlich",
    "fl": "Indem du dein Herz mit uralter Magie anhältst, breitet sich die Berührung des Todes von deinem Körper aus.",
    "x": [
     "Erhalte die Fertigkeit **Überzeugen**. Markiere W3 Stress auf **Blut**, um diesen Zauber zu wirken. Für den Rest der Situation würfelst du und deine Verbündeten in der Nähe mit Meisterschaft, wenn ihr ein Ziel einschüchtert."
    ]
   },
   {
    "t": "DES TODES SCHARFER BOLZEN",
    "p": 14,
    "tag": "Göttlich",
    "fl": "Deine Waffe ist ein Todesurteil.",
    "x": [
     "Erhalte +1 **Ruf**. In jeder Sitzung erhältst du von der Abteilung für Hinrichtungen einen besonders geweihten Armbrustbolzen. Er ist aus dem geschwärzten Holz des einzigen unsterblichen Baumes der Welt gefertigt, der in einer abgeschiedenen Kammer tief in der Nekropole wächst. Aus einer geeigneten Waffe abgefeuert, funktioniert er als Waffe mit **(W8, Brutal, Einweg)**. Tötet er das Ziel, markiere W6 Stress auf **Schatten**, da die Abteilung für Hinrichtungen einen mystischen Bericht *von dem Bolzen* erhält, der Name, Aufenthaltsort und Zeitpunkt der Hinrichtung des Ziels enthält. Du kannst einen weiteren Bolzen beschaffen, indem du W3 **Ruf**-Stress markierst und schriftlich einen Antrag einreichst."
    ]
   },
   {
    "t": "LIES IHNEN IHRE RITEN VOR",
    "p": 14,
    "fl": "Du hast das Gewicht und den Schrecken der Gilde der Leichenbestatter hinter dir.",
    "x": [
     "Einmal pro Situation markierst du W6 Stress auf **Schatten**, um diese Kraft zu aktivieren. Jeder, der hört, wie du beim Betreten eines Bereichs seinen Namen oder seine Organisation verkündest, markiert W3 Stress aus Furcht und ignoriert dabei Rüstung. Nach Ermessen der Spielleitung können bestimmte Feinde (Paladine, Tiere, Dämonen) gegen diese Kraft immun sein."
    ]
   },
   {
    "t": "SPRICH MIT DEN „TOTEN“",
    "p": 14,
    "tag": "Göttlich",
    "fl": "Du kannst die Regeln darüber dehnen, was genau ein „Geist“ ist.",
    "x": [
     "Sobald ein Ziel für rechtlich tot erklärt wurde, kannst du mit ihm auf jede verfügbare Weise Zwiesprache halten, mit der man mit den Toten in der Nähe spricht (siehe *Spire*, S. 141 für Ideen, oder denk dir etwas aus). Die meisten Leute begreifen nicht, was vor sich geht, und beantworten zumindest ein paar Fragen, bevor sie es durchschauen."
    ]
   },
   {
    "t": "TOTENAUGEN",
    "p": 14,
    "fl": "Ärzte der Leichenbestatter stehen als Nebenprodukt ihrer Unsterblichkeits-Operation an der Spitze der experimentellen Medizin.",
    "x": [
     "Deine Augen werden durch ein Spenderpaar aus einer Leiche ersetzt. Augen sind die Fenster zur Seele, und deine Augen sind Fenster zur Seele eines *anderen*; du erhältst die Fertigkeit **Täuschen**. Zudem kannst du Geister sehen, als würden sie sich ständig manifestieren. Würfle mit Meisterschaft, wenn du versuchst, die Anwesenheit eines Geistes aufzuspüren oder zu untersuchen."
    ]
   }
  ],
  "mittel": [
   {
    "t": "AUTOEKTOPISCHE ASPHYXIE",
    "p": 15,
    "tag": "Okkult",
    "fl": "Du kannst kurz das Graue betreten: den Zwischenraum zwischen den Ländern der Lebenden und der Toten.",
    "x": [
     "Würfle **Widerstehen+Okkultes** und führe ein einminütiges Ritual aus Hyperventilation und Gebet durch, um diesen Zauber zu wirken. Bei einem Erfolg verlagert sich dein Körper in das Graue: eine ausgewaschene Nachbildung der materiellen Welt, in der die Seelen der Toten warten, bevor sie zu ihrer letzten Ruhestätte weiterreisen. Du kannst dich weitgehend unbehelligt durch das kaum bewohnte Graue bewegen, solange du dem Einatmen widerstehen kannst. Atmest du ein, wirst du ausgestoßen und tauchst wieder in der materiellen Welt auf. Um den Atem länger als etwa eine Minute anzuhalten (weniger bei anstrengender Tätigkeit), ist eine Probe auf **Widerstehen+Okkultes** nötig. Die Schwierigkeit steigt jedes Mal um 1, wenn du Erfolg hast."
    ]
   },
   {
    "t": "SCHNEIDIGE KANTE",
    "p": 15,
    "tag": "Okkult",
    "fl": "Filigrane Implantate und stilvoll untote Körpertransplantate zeichnen dich als jemanden aus, dem Respekt gebührt.",
    "x": [
     "Erhalte +2 **Ruf** und die Domäne **Hohe Gesellschaft**. Du hast mindestens ein augmetisches Implantat oder Leichentransplantat, das keine besondere Wirkung hat, außer beeindruckend zu sein, wenn man es in den richtigen Kreisen vorzeigt, z. B. funktionslose Megakorviden-Flügel, sechs Finger an jeder Hand, juwelenbesetzte Zähne usw. Zusätzlich wählst du eines der folgenden speziellen Implantate, wenn du diesen Fortschritt nimmst:",
     {
      "t": "ul",
      "x": [
       "**Glasblut-Herz.** *Stolz hinter Glas in deiner Brust zur Schau gestellt.* Du wirst immun gegen Gift, Gifttiere und die meisten unmodischen Krankheitsarten.",
       "**Hand des Ruhmes.** *Vom Handgelenk eines gehängten Mörders gepflückt.* Deine linke Hand funktioniert als Waffe mit den folgenden Merkmalen **(W3, Fernkampf, Streuung W3, Schwächend, Einweg)**, wenn du deine Fingerspitzen entzündest. Das Wachs wächst irgendwann nach.",
       "**Seelenschutz.** *In deine Knochen geschnitzte, implantierte Reliquien und Schutzrunen.* Einmal pro Sitzung, wenn du Ziel eines magischen Zaubers bist, halbierst du den erhaltenen Stress und verursachst W8 Stress beim Zauberwirker."
      ]
     },
     "Wenn du einen niedrigen Fortschritt erhältst, darfst du statt eines normalen Fortschritts ein weiteres Implantat aus der obigen Liste wählen."
    ]
   },
   {
    "t": "HERZSTILLSTAND-FLUCH",
    "p": 15,
    "tag": "Göttlich",
    "fl": "Du greifst mit gespenstischen Ranken in den Körper eines Ziels und reißt das Leben aus ihm heraus.",
    "x": [
     "Markiere W3 Stress auf **Verstand**, um diesen Zauber auf ein verletztes, krankes oder vergiftetes Ziel zu wirken. Du verursachst bei ihm W6 Stress, und wird es getötet, baust du dieselbe Menge Stress ab."
    ]
   },
   {
    "t": "ICH WAR NIE HIER",
    "p": 15,
    "fl": "Du hast Zeit in den Lacunae Tenebrant der Bibliothek der Erloschenen Kerzen verbracht und die Grenze zwischen Lebenden und Toten mit einem Federstrich überschritten. Beweise und Haftbefehle zu beseitigen ist für dich zur zweiten Natur geworden.",
    "x": [
     "Erhalte die Domäne **Ordnung** und den Kniff **Bürokratie**. Indem du etwa eine Stunde in einem geeigneten Büro, Archiv oder Depot verbringst und W3 Stress auf **Ruf** markierst, kannst du: W6 Schatten-Stress entfernen; einen leichten **Schatten**-Fallout entfernen; oder einen mittleren oder schweren **Schatten**-Fallout bei dir oder einem Verbündeten um eine Stufe herabstufen."
    ]
   },
   {
    "t": "IMPLANTIERTE FESSEL",
    "p": 15,
    "tag": "Okkult",
    "fl": "Du hast ein paar Gefallen eingefordert und ein paar Regeln gebrochen, um einen ruhelosen Geist in deiner Brusthöhle zu binden.",
    "x": [
     "Würfle **Überzeugen+Okkultes**, um diesen Zauber zu wirken. Bei einem Erfolg beschwörst du den in dir gebundenen Geist bis zum Ende der Situation oder bis du ihn zurückrufst. Du kannst ihm psychisch befehlen, irgendwohin innerhalb eines Stadtblocks zu reisen, und er ist für jeden unsichtbar, der keine Geister sehen kann (die meisten Leute). Solange er aus deiner Brust ausgestoßen ist, siehst du durch seine Augen und hörst durch seine Ohren. Du kannst nicht wie gewohnt sehen, und deine Augen und dein Mund dampfen von glühendem Ektoplasma. Gib dem Geist einen Namen und wähle, ob er dich hasst oder dich zu sehr liebt."
    ]
   },
   {
    "t": "ERINNERUNGEN WIE KERZENRAUCH",
    "p": 16,
    "tag": "Okkult",
    "fl": "Du fügst Gefühlsfragmente zum Geist eines Geistes zusammen und malst die Vergangenheit in groben Strichen.",
    "x": [
     "Würfle **Ermitteln+Okkultes** und führe zehn Minuten lang ein Ritual durch, um diesen Zauber zu wirken. Als Teil des Rituals musst du ein Zeichen vernichten, das das Ziel darstellt (einen gehüteten Besitz, Haare oder Fingernägel, ein Abbild usw.). Bei einem Erfolg wirst du Zeuge einer Nachstellung der jüngsten wichtigsten Ereignisse in der Gegend aus der Sicht des Ziels. Je emotional bedeutsamer die Ereignisse, desto lebhafter die Nachstellung. Natürlich erinnert sich niemand perfekt an Ereignisse, also behalte das im Hinterkopf."
    ]
   },
   {
    "t": "EIN-DROW-ARMEE",
    "p": 16,
    "fl": "Du bist es gewohnt, Banden von Feinden zurückzuschlagen, und hast daraufhin deinen eigenen Kampfstil entwickelt.",
    "x": [
     "Erhalte +2 **Blut**. Deine Angriffe erhalten **Streuung W3**. Wenn du Stress verursachst, verursachst du die Hälfte davon bei W3 zusätzlichen Zielen in der Nähe."
    ]
   },
   {
    "t": "BERÜHRUNG DES SENSENMANNS",
    "p": 16,
    "tag": "Göttlich",
    "fl": "Du lässt die Grenzen zwischen Lebenden und Toten verschwimmen.",
    "x": [
     "Wenn du ein Ziel in Reichweite deines Arms angreifst, erhalten deine Angriffe das Merkmal **Verheerend** (und ignorieren daher jede Rüstung). Würdest du mit einem Angriff weniger als 3 Stress verursachen, verursacht dein Angriff stattdessen 3 Stress."
    ]
   }
  ],
  "hoch": [
   {
    "t": "DER RITUS",
    "p": 17,
    "tag": "Göttlich",
    "fl": "Die größte und geheimste der Magien der Leichenbestatter ist letztlich ein Köder-und-Wechsel-Trick gegen die Göttin.",
    "x": [
     "Wenn du das erste Mal sterben würdest, tust du es nicht. Stattdessen wirst du mit einem gewaltigen Kraftschub ins Leben zurückgeholt, freigesetzt über eine Vielzahl von Totenmannschutzzaubern und nekromantischen Sicherungen. Du musst jemanden in der Nähe wählen, der an deiner Stelle stirbt und binnen Sekunden zu Staub und Hautfetzen verdorrt. Sobald du diese Fähigkeit einmal eingesetzt hast, entferne sie von deinem Charakter."
    ]
   },
   {
    "t": "UNSTERBLICH",
    "p": 17,
    "tag": "Okkult",
    "fl": "Du unterziehst dich der Unsterblichkeits-Operation und wirst dauerhaft auf dein gegenwärtiges Alter festgelegt. Du bist von den sterblichen Sorgen Hunger, Kälte, Schmerz und Krankheit befreit; dafür lasten unsterbliche Sorgen auf dir.",
    "x": [
     "Du erhältst 10 unerbittliche Rüstungsplätze, die anstelle von Blut markiert werden können, um deine unnatürliche Physiologie darzustellen. Diese Plätze werden von **Durchschlagend**-Waffen nicht aufgehoben. Sofern du einen Arzt findest, der dich zusammenflickt und die nötigen Flüssigkeiten ersetzt, können diese Plätze zu Beginn jeder Sitzung aufgefrischt werden – statt zu Beginn jeder Situation, wie Rüstung es normalerweise tut. Du kannst auch W3 Stress auf **Verstand** markieren, um W6 dieser Rüstungsplätze zurückzugewinnen, indem du die seltsamen Flüssigkeiten und das Sägemehl ignorierst, die aus dem austreten, was einmal dein lebender Körper war, oder ihn mit einfachen Haushaltsmaterialien reparierst. Beide Vorgänge dauern etwa eine halbe Stunde."
    ]
   },
   {
    "t": "GEISTERHEER",
    "p": 17,
    "tag": "Okkult",
    "fl": "Die Leichenbestatter sperren verschmolzene, chimärenhafte Geisterschwärme in Dunkelholz-Fesselkisten. Du hast dir eine davon in das Weichgewebe deines Körpers implantieren lassen, was dir begrenzte Kontrolle über das Geisterheer verleiht.",
    "x": [
     "Wie **IMPLANTIERTE FESSEL**, aber es ist sichtbar und furchterregend, wenn du es so willst. Nachdem du das Geisterheer freigelassen hast (siehe *Spire*, S. 139 für Details), kannst du W3 Stress auf **Verstand** markieren, um allen Zielen in Reichweite des Schwarms W8 Stress zuzufügen."
    ]
   },
   {
    "t": "TÖDLICHE NOTATION",
    "p": 17,
    "tag": "Göttlich",
    "fl": "Ein wahrer Meister des Todes braucht kein Schwert.",
    "x": [
     "Wenn du ein Ziel für rechtlich tot erklärst, markiert es jeden Tag W6 Stress. Das äußert sich als Unfälle (durchgehende Kutschen, einstürzendes Mauerwerk, zerbrochene Treppen), während die Stadt selbst versucht, das Versäumnis zu korrigieren. Wenn der Stress des ersten Tages es nicht tötet, kennt es mystisch deinen Namen und ungefähren Aufenthaltsort und wird wahrscheinlich versuchen, die Lage zu bereinigen."
    ]
   }
  ]
 },
 "boxen": [
  {
   "h": "GÖTTLICH UND OKKULT",
   "b": [
    "Der Executioner ist derzeit die einzige Klasse, die Zugang zu göttlicher wie okkulter Magie hat. Seine göttliche Magie stammt aus traditionellen Auslegungen des Mehror-Glaubens, während seine okkulte Magie die innovativen (und halblegalen) Elemente der Forschung seiner Sekte darstellt.",
    "Zur Erinnerung: Göttliche Magie hat feste Stresskosten, meist W3 oder W6, die gezahlt werden, um die Wirkung des Zaubers auszulösen. Okkulte Magie wird zum Wirken gewürfelt, und bei einem Fehlschlag oder Teilerfolg markiert die Zaubernde mindestens W6 Stress."
   ],
   "nach": "kfae",
   "p": 13
  },
  {
   "h": "KLEIDUNG",
   "b": [
    "Die meisten Leichenbestatter kleiden sich, um zu beeindrucken. Während manche Executioners schlichte, robuste Rüstung und Kampfanzüge (oder einen professionell wirkenden Anzug mit Krawatte) bevorzugen, unterliegt die Sekte insgesamt strengen Regeln darüber, welche rituelle Kleidung wann und von wem zu tragen ist. Hohe Hüte sind beliebt, ebenso zeremonielle Stäbe (oft mit Speerspitzen, Wimpeln, Räucherbecken oder Kerzen an der Spitze); beide sind entscheidend, wenn der Träger die Aufmerksamkeit der Trauergesellschaft auf sich ziehen muss, die er über die überfüllten Prozessionsboulevards von Neuer Himmel führt.",
    "Zusätzlich zu Hüten und Stäben ist von einem Leichenbestatter in offizieller Mission zu erwarten, dass er Kaseln, Chimären, Schleier, Tippets, Palitzen, Buskins, Manipel und nicht wenige Knochen, liturgische Bänder, beschriftete Glocken und andere Memento-mori-Andenken trägt. Es ist allgemeine Weisheit, dass ein Leichenbestatter, den man nicht herannahen hört, seine Arbeit nicht richtig macht."
   ],
   "nach": "niedrig",
   "p": 14
  },
  {
   "h": "MEHROR",
   "b": [
    "Mehror, der Gott der erloschenen Kerzen der Leichenbestatter, ist der De-facto-Staatsgott des Todes und hat den kompromisslosen Bruder Harvest des Sonnenpantheons fast vollständig ersetzt, seit die Unsterblichkeits-Operation unter den Reichen und Berühmten Spires beliebt wurde. Mehror befasst sich mit dem Letzten aller Dinge, der Dunkelheit, die in einen Raum kriecht, wenn die Lampe gelöscht wird, der Dokumentation und dem Gedenken an die Toten, der Tradition und historischen Aufzeichnungen im Allgemeinen. Von den meisten Bürgern wird er als langweilig angesehen, und ihre einzige Berührung mit ihm besteht in einer beiläufigen Erwähnung bei einer Beerdigung, die ansonsten von Verweisen auf die Gottheit der Wahl des Verstorbenen beherrscht wird."
   ],
   "nach": "mittel",
   "p": 15
  },
  {
   "h": "False Robert",
   "b": [
    "Dank der Leichenbestatter wurden im Spire schon viele Leute für rechtlich tot erklärt, die sehr lebendig waren – aber False Robert ist die einzige Person, die für rechtlich unrichtig erklärt wurde. Sein Klatschblatt im Silberviertel hatte einmal zu oft Geschichten veröffentlicht, die die Ehre der Gilde der Leichenbestatter in Verruf brachten: Er beschuldigte sie, mit Carrion-Priests zu poussieren, Unsterblichkeits-Operationen zu verpfuschen und Körperteile auf dem Schwarzmarkt zu verkaufen. Also erklärte die Gilde alles, was er veröffentlicht hatte oder zu veröffentlichen gedachte, pauschal zur Unwahrheit und nutzte dabei eine schlecht definierte Verleumdungsdefinition aus, die im Jahr der Drei Monde in das Gesetz aufgenommen worden war. Die Erklärung der Unwahrheit erstreckte sich nicht nur auf Roberts Werk, sondern auf seine ganze Existenz; bald stellte er fest, dass die Stadt ihn als unrichtig abwies. Die einzige Möglichkeit, seinen Halt in der Wirklichkeit zu bewahren (und in irgendeiner Form weiterzuveröffentlichen), bestand darin, in alarmierendem Tempo durch Pseudonyme zu wechseln. Jeden neuen Namen verwarf er, sobald er unter ihm bekannt wurde, falls auch dieser sein Werk ruinieren würde. Erst jetzt hat er genug Kontrolle zurückerkämpft, um sein Klatschmagazin neu zu starten, und er plant, die Leichenbestatter um jeden Preis zu untergraben. Sie können ihn nun nicht legal töten – soweit es sie betrifft, existiert er nicht und kann es auch gar nicht –, also suchen sie bei ihren Verbündeten Hilfe im Austausch gegen großzügige Belohnungen."
   ],
   "nach": "mittel",
   "p": 16
  },
  {
   "h": "DIE SEKTE DER LEICHENBESTATTER",
   "b": [
    "Der Tod ist im Spire ein großes Geschäft, und die Leichenbestatter tun alles, um den Markt zu beherrschen. Von der Nekropole aus – der hohlen Wirbelsäule des Spire, durchsetzt von Geistern und verstaubter Bürokratie – überwachen sie die große Mehrheit der Todesfälle der Stadt und sorgen dafür, dass Leichen ordnungsgemäß beseitigt, die richtigen Riten beachtet und alle richtigen Formulare ausgefüllt werden. Sie sind auch verantwortlich für die Entwicklung des revolutionären Unsterblichkeits-Operationsverfahrens, das den Probanden unbegrenzt auf sein gegenwärtiges Alter festlegt; es hat sich bei den Aelfir als sehr beliebt erwiesen, die im Großen und Ganzen darauf aus sind, noch lange schön und einflussreich zu bleiben, nachdem die Sterblichkeit sie hätte holen sollen.",
    "Ihr politischer Einfluss bedeutet, dass die Weihe zum Leichenbestatter eine der wenigen Möglichkeiten ist, die ein Drow ohne Geld, adliges Blut oder Verbindungen hat, um in Spire sozial aufzusteigen. Mehr als ein Kleiner Lord hat mit nichts als einem Traum, einem Satz Skalpellen und einem Glas Formaldehyd begonnen."
   ],
   "nach": "mittel",
   "p": 16
  },
  {
   "h": "BESTATTUNGEN",
   "b": [
    "Grabplätze sind im Spire ein knappes Gut. Die wenige weiche Erde am Grund der Stadt wurde vor langer Zeit gepflastert, und um die verbliebenen Erdtaschen weiter oben streiten und feilschen Grundbesitzer, die darin Pflanzen ziehen wollen oder um das Recht, dort begraben zu werden, wann und falls sie je sterben sollten.",
    "Die große Mehrheit der toten Mittelschicht im Spire erhält eine Himmelsbestattung – sie werden in Bauwerken, den sogenannten Türmen des Schweigens, in den Höhen von Neuer Himmel abgelegt, und Aasvögel laben sich an ihren Körpern, bis nur noch Knochen bleiben. Weniger wohlhabende Leichen werden in den Gartendistrikt überführt, wo sie in makabren Kammern hängen und Pilzen Nahrung bieten; die Körper reicher Aelfir werden zerstört oder konserviert oder verwandelt, je nachdem, was in dem Jahrzehnt gerade de rigueur ist. Die Feuerbestattung ist derzeit so beliebt, dass Eingeweihte sie bereits als passé betrachten; unmodisch ausgestopfte und aufgestellte Verwandte verstopfen die Gästezimmer von Amaranth-Villen und die Lagerhäuser der Nekropole; und jedes Jahr werden aufwendigere und aufregendere Methoden wie galvanische Absolution, Ewigfrost-Implantation und die Bestattungskanone erfunden und gutgeheißen."
   ],
   "nach": "hoch",
   "p": 17
  }
 ],
 "hinweis": {},
 "fortIntro": {}
});
