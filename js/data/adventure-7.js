/* ==================================================================
   ADVENTURE 7 — THE LOST HERMITAGE (Kampagnen-Finale)
   ================================================================== */
const A7_SCENES = [
/* 0 ---------------------------------------------------------- INTRO */
{
  key:"intro", kind:"intro", page:"S. 401–403",
  title:"Abenteuer 7 — Überblick", en:"The Lost Hermitage",
  summary:"Hintergrund, Hooks & Szenenfolge · Kampagnenfinale",
  overview:[],
  readAloud:[
    { page:"S. 401", label:"Eröffnung des Abenteuers: Die verlorene Einsiedelei", text:
      `Nur wenige, kaum mehr erinnerte Legenden haben die Zeitalter überdauert, von einer geheimen Bergeinsiedelei, dem Ort, von dem die Oldways einst ihren Ursprung nahmen. An diesem einst heiligen Ort, der wohl längst in Trümmern liegt, lehrten große Magier – die Thaumaturgen – die Geheimnisse des Unseen. Was mag von dieser verlassenen Hülle geblieben sein, verlassen von den Zeitaltern? Schätze? Geheimnisse unbekannter Magie? Welche unsichtbare Gegenwart mag dort noch verweilen?

Während die Bedrohungen weiter auf die Dales eindringen, steht das Schicksal der Oldways auf Messers Schneide. Eine grausame und ruhelose Welt atmet euch dem Nacken eures Bergheims im Genick. Werdet ihr die verlorene Einsiedelei finden, um das einst friedvolle Leben in den Dales wiederherzustellen? Oder werdet ihr selbstsüchtig ihre Schätze plündern?` },
  ],
  flow:[
    `<span class="callout"><span class="co-title">📦 Über dieses Abenteuer</span>Die Verlorene Einsiedelei ist ein gemütlicher Dungeon-Crawl in eine uralte Ruine, die dennoch ein wohlwollender Ort ist – das Zentrum des Einflusses der Lady in den Dales und die Quelle der Oldways, die die Dalesleute jahrhundertelang erhalten haben. Wie die Inschrift an ihren Toren sagt: „Es gibt hier keine Gewalt außer jener, die ihr selbst mitbringt.“ Und tatsächlich: Selbst wenn die Helden diesen Ort in guter Absicht aufsuchen, sind ihnen viele von Macht und Selbstsucht getriebene NSCs auf den Fersen, hinter den Schätzen oder Übeln des Ortes her. Dies ist der Höhepunkt der Reihe <em>Wake of the Oldways</em>, und das Ende dieses Abenteuers variiert je nachdem, ob ihr im <span class="gloss" onclick="openGloss('campaign-modes')">Bergmodus oder im Gemütlichen Modus</span> (S. 310) spielt.</span>`,
    `<strong>Ort:</strong> <span class="gloss" onclick="openGloss('hartland')">Hartland</span> (<span class="gloss" onclick="openGloss('frostfang-ridge')">Frostfang-Grat</span>, oberhalb von Lake Fox und Lake Hare) — die zerstörte <strong>Verlorene Einsiedelei</strong>.`,
    `<span class="section-heading">Die Lady und ihr Saum</span> Die <span class="gloss" onclick="openGloss('lady-of-the-dales')">Lady der Dales</span> hinterließ den Dalischen ihr größtes Geschenk: <strong>den Saum der Lady</strong> (die Lady's Hem), einen mächtigen Schutzzauber, der die Dales über Generationen hinweg beschützt hat — und der nun zerfällt. Sie kommt in vielen dalischen Liedern und Legenden vor. Ihre Wärme verbannte den Streit aus den Dales. Ihr Mut trieb die Ungeheuer zurück in die Schatten. Ihre Legende beruhigt die Herzen verängstigter Kinder, und ihr Name ist nie fern von den Lippen der Dalesleute. Die Oldways — die Lehren der Lady — sind womöglich noch nicht stark genug, um allein gegen die kommende Finsternis zu bestehen. Der Saum der Lady muss geflickt werden, oder alle Dales könnten fallen.`,
    `<span class="section-heading">Der Ursprung der verlorenen Einsiedelei</span> In den schwindenden Tagen des Alten Königreichs zog sich die Lady in die damaligen Grenzlande der Dales zurück, in eine thaumaturgische Bergeinsiedelei auf dem <strong>Frostfang-Grat</strong>. Mit Blick auf den <strong>Fox-See</strong> und den <strong>Hare-See</strong> war die Einsiedelei in den Berg selbst hineingebaut, rings um die Quelle, die beide Seen speist; ein Aquädukt wurde als Teil davon errichtet und führte von der Quelle durch die Einsiedelei hinaus zu den Seen. Die Einsiedelei war ein Ort stillen Lernens durch Erfahrung und Zärtlichkeit, an dem die Praxis der Thaumaturgie und eine Verbindung zum Ungesehenen entwickelt wurden, während man in den Schülern Güte, Bodenständigkeit, Handwerk und die Sorge für die Natur nährte.`,
    `<span class="section-heading">Wie die Einsiedelei verloren ging</span> Nach dem Fall Gwyrdolins und dem Verschwinden der Lady bestand die Einsiedelei — nun eine Tempelschule für ihre Lehren — noch eine Weile fort, und fleißige Thaumaturgen unterrichteten junge Praktizierende in den Oldways. Doch als der Saum zu wirken begann und die Dalesleute in einen behaglichen Schlaf sanken, kamen immer weniger, um über das Ungesehene zu lernen, und schließlich wurde die Einsiedelei aufgegeben. Ohne Pflege verfiel sie, bis das gesamte Bauwerk unter einem Erdrutsch begraben wurde und nur die Bögen der obersten Aussichtsgalerie über der Erde blieben. Mit der Zeit vergaßen die Menschen von Hartland die Einsiedelei und dass sie einst an der Quelle beider Seen lag — doch den Spruch vergaßen sie nicht: „Die Hoffnung beginnt dort, wo sich der Schwanz des Fuchses und die Ohren des Hasen begegnen“ (S. 87). Wie die Dalesleute selbst wurde die Einsiedelei zu einem verborgenen Samen, voller Möglichkeit und Weisheit, der auf den Tag wartet, an dem die Dalesleute erwachen und die Geheimnisse des Ungesehenen suchen — auf das Erwachen der Oldways.`,
    `<span class="section-heading">Die letzten Schüler der Einsiedelei</span> Die Einsiedelei hat als unterirdische Gänge und Kammern überdauert, eine verborgene Ruine, bewohnt vor allem von Pflanzen und Tieren. In ihrer Blütezeit wurden die Geschöpfe der umliegenden Länder umsorgt, durch Thaumaturgie erhoben und von den Thaumaturgen sogar das Sprechen gelehrt; manche der heute in den Ruinen lebenden Wesen sind ihre Nachfahren.`,
    `<span class="callout"><span class="co-title">Die Wahrheit aufdecken</span>Da die Lady wusste, dass die Dalesleute zu ihrer Einsiedelei kommen könnten, um Antworten zu suchen, sobald der Saum zu versagen begänne, bereitete sie einen <span class="gloss" onclick="openGloss('memory-stone')">Erinnerungsstein</span> (S. 238) vor, der ihre Fragen beantworten sollte … doch je nach Spielmodus eurer Reihe (S. 310) fällt die Antwort womöglich hart aus:<br><br><strong>Im Gemütlichen Modus</strong> kann der Saum durch ein großes Opfer wiederhergestellt werden, und die Dales werden erneut Frieden kennen.<br><br><strong>Im Bergmodus</strong> wurde der Saum geschaffen, damit die Dales hoffnungsvolle Helden hervorbringen konnten, die eines Tages dem <span class="gloss" onclick="openGloss('winter-king')">Winterkönig</span> entgegentreten könnten — und dem Wanecraft, der Verzweiflung und der Selbstsucht. Nun ist es Zeit für die Menschen der Dales, in die Welt hinauszutreten und an ihrer Wiederherstellung nach dem Krieg mitzuwirken; das war immer der Plan und die Hoffnung der Lady. Der Saum hat seinen Zweck erfüllt und kann nicht wiederhergestellt werden — doch die Lady wird die Helden auf eine neue, größere Aufgabe aussenden.</span>`,
    `<span class="section-heading">Karte/Aufbau</span> Die Bögen → Verwüstete Pfade / Aquädukt-Höhle → (Kannenpflanzen) → Tor der Absicht → Der Ummauerte Garten → Die Heilige Kammer (Ursprüngliches Tor: Versperrt).<br><em>Kartenbeschriftungen: The Archways (Die Bögen), Ruined Paths (Verwüstete Pfade), Aqueduct Cave (Aquädukt-Höhle), Pitcher Plants (Kannenpflanzen), Gate of Intention (Tor der Absicht), The Walled Garden (Der Ummauerte Garten), The Sacred Chamber (Die Heilige Kammer), Original Gate (Blocked) (Ursprüngliches Tor, versperrt).</em>`,
    `<strong>Ablauf:</strong> Die Gefährtenschaft beginnt damit, sich der Einsiedelei zu nähern — einem uralten Hartland-Rätsel folgend oder dem beim <span class="gloss" onclick="openGloss('barleytown')">Barleytown</span> Fair gewonnenen <span class="gloss" onclick="openGloss('circlet-of-the-folkhearth')">Circlet of the Folkhearth</span> –, möglicherweise verfolgt von einem geheimnisvollen Beschatter. Sie entdecken entweder die Bögen oder die Aquädukt-Höhle (oder beides), haben es mit einem alten Schutzbann oder Revier verteidigender Tierwelt zu tun und finden ihren Weg hinein in die verwüsteten Pfade. Die Gefährtenschaft navigiert durch die zerfallenden Korridore und erreicht den ummauerten Garten, einst ein Oberflächengarten von großer Schönheit. Doch der Weg hinein wird vom Tor der Absicht bewacht, Statuen, die verzaubert wurden, um Besucher mit üblen Absichten fernzuhalten. Ist ihr Herz aufrichtig, treten die Helden ein, begegnen dem Hüter des Baumes, Scalagorry, und erfahren von der Vergangenheit der Einsiedelei. Wenn die Zeit reif ist, erscheint die Lady der Dales selbst vor den Helden und offenbart die letzte Wahrheit der Reihe sowie die Schätze der Einsiedelei, verwahrt in der Heiligen Kammer. Die Helden müssen daraufhin entweder ein Opfer bringen, um die Dales zu schützen (Gemütlicher Modus), oder eine weit größere Aufgabe auf sich nehmen als erwartet (Bergmodus). Im letzten Augenblick, während die Vision der Lady verblasst, erscheinen ruchlose Eindringlinge in der Einsiedelei, gefährden die Mission der Helden und bringen die Einsiedelei schließlich zum Einsturz — aus dem die Helden hoffentlich im letzten Moment fliehen. Eine optionale Abschlussszene, „Der Krieg hat die Dales erreicht“, kann einen Cliffhanger für die nächste Reihe bieten.`,
  ],
  npcs:[],
  extra:{ heading:"Hooks", type:"list", items:[
    "Entsandt vom Rat der Oldways, der sich beim Barleytown Fair versammelte.",
    "Von der Green Maiden erfahren, dass es eine Quelle der Oldways gibt und dass sie in den Dales verborgen liegt; alle Spuren führen nach Hartland.",
    "Ein weiteres Geschöpf der Dämmerung, etwa <span class=\"gloss\" onclick=\"openGloss('sorrowbalm-ref')\">SorrowBalm</span> (S. 324) oder <span class=\"gloss\" onclick=\"openGloss('gajowy-ref')\">Gajowy</span> (S. 360), nähert sich den Helden und offenbart den Standort der Einsiedelei, mit dem Hinweis, dass dort etwas von großer Wichtigkeit für die Dales liegt.",
    "Ein betagter Forschungsreisender/Geschichtenerzähler berichtet von Gerüchten über den Verbleib des „Tempels der Lady“ und möchte sich vielleicht der Expedition anschließen.",
  ]},
  extra2:{ heading:"Szenenfolge dieses Abenteuers", type:"list", items:[
    "1 · Sich der Einsiedelei nähern — Circlet oder Rätsel, ein Beschatter",
    "2 · Die Bögen / Die Aquädukt-Höhle — zwei mögliche Eingänge",
    "3 · Verwüstete Pfade — das bröckelnde Innere durchqueren",
    "4 · Der Ummauerte Garten — Tor der Absicht, Mosaiken, Scalagorry, Kern-Enthüllung 8",
    "5 · Die Lady der Dales — klimaktische Enthüllung, Bergmodus/Gemütlicher Modus, Kern-Enthüllung 9",
    "6 · Eindringlinge in der Einsiedelei — letzte Konfrontation + Flucht vor dem Einsturz",
    "7 · Aftermath (+ optionaler Epilog „Der Krieg hat die Dales erreicht“) — Kampagnen-Abschluss",
  ]},
  challenges:[],
  revelations:[], rewards:[], tips:[],
},

/* 1 -------------------------------------------- SICH DER EINSIEDELEI NÄHERN */
{
  key:"approach", kind:"scene", page:"S. 404–406",
  title:"Sich der Einsiedelei nähern", en:"Approaching the Hermitage",
  summary:"Circlet oder Rätsel · ein Beschatter · der Aufstieg",
  overview:["Zwei Wege: dem Circlet folgen (→ Die Bögen) oder das Fuchs-Hase-Rätsel lösen (→ Aquädukt-Höhle)", "Eine düstere Vorahnung — ein Beschatter aus der Ferne", "Der Aufstieg: Journey-Vignetten aus Rambling/Dark Forest/Environmental Conditions"],
  readAloud:[
    { page:"S. 404", label:"Hartland", text:
      `Hartland, im Norden der Dales gelegen, ist ein Ort baumbestandener Berge und weiter kristallklarer Seen. Die herbstliche Kälte, die an eurem Nacken zwickt, erinnert euch daran, dass die Zeit unaufhaltsam voranschreitet, dass der Winter bald hereinbrechen wird – und sollten die Oldways versagen, welch ein schrecklicher Winter das werden könnte. Die verlorene Einsiedelei der Lady, sollte sie existieren, könnte die Antworten bergen, doch in dieser weiten Wildnis könntet ihr ebenso gut nach einer Nadel im Heuhaufen suchen.` },
  ],
  flow:[
    `In dieser Szene findet die Gefährtenschaft die Einsiedelei in <span class="gloss" onclick="openGloss('hartland')">Hartland</span> und nähert sich ihr auf einem der folgenden Wege:`,
    `<ul>
      <li><strong>Der Krone folgen:</strong> Das <span class="gloss" onclick="openGloss('circlet-of-the-folkhearth')">Circlet of the Folkhearth</span> (S. 389) kann zusammen mit einem Wegweiser-Ritual (oder -<span class="gloss" onclick="openGloss('wayfinder-talisman')">Talisman</span>, S. 146) genutzt werden, um den Weg zu <strong>Den Bögen</strong> (S. 406) zu weisen.</li>
      <li><strong>Das Rätsel lösen:</strong> Das Volk von Hartland kennt den Spruch: „Die Hoffnung beginnt dort, wo sich der Schwanz des Fuchses und die Ohren des Hasen begegnen.“ Die Seen selbst berühren sich nicht, doch die beiden Bäche, die beide speisen, entspringen derselben verborgenen Bergquelle, aus der auch die <strong>Aquädukt-Höhle</strong> (S. 406) hervorgeht. Die Helden können auf viele Arten von diesem Rätsel erfahren. Upphartländer wissen zwar nichts von einer Einsiedelei, sind aber neugierig, was die Helden suchen und warum; erscheint ihnen die Queste der Gefährtenschaft wichtig, geben sie den Spruch weiter, da dies eine übliche Art ist, Glück zu wünschen. Das Rätsel erscheint zudem im Inneren des Circlet eingraviert, doch diese Schrift ist nur mit der Sicht sichtbar.</li>
    </ul>`,
    `<span class="callout"><span class="co-title">Eine düstere Vorahnung</span>Während ihrer Suche oder Nachforschung merken die Helden vielleicht, dass sie nicht allein sind. Jemand verfolgt sie oder beobachtet sie aus der Ferne. Dies ist nur eine Vorausdeutung, sodass der Beobachter bald wieder in der Wildnis Hartlands verschwindet. Entdecken die Helden, wer es ist, lest „Wer ist es?“ und wählt oder würfelt. Andernfalls müssen sie warten, bis dieser Beschatter sich später im Abenteuer zu erkennen gibt.</span>`,
    `<span class="section-heading">Wer ist es?</span> Wählt eine oder mehrere der folgenden Optionen — der Beschatter dient später als Hauptgegner der Szene „Eindringlinge in der Einsiedelei“:`,
    `<ul>
      <li>Ein Agent des Winterkönig könnte den Helden folgen, um sie davon abzuhalten, die Wahrheit herauszufinden oder den Saum wiederherzustellen. Am wahrscheinlichsten ist dies <strong><span class="gloss" onclick="openGloss('verdan-ref')">Verdan</span></strong> (<em>An Important Letter</em>) oder ein Agent, der in seine Fußstapfen tritt, falls er gestorben ist oder seine Mission aufgegeben hat. Haben die Helden bereits einen <span class="gloss" onclick="openGloss('cold-hearted-cult')">Cold-Hearted</span> (S. 302) besiegt, könnte der Agent von Verstärkung begleitet werden. Möglicherweise entpuppt sich <span class="gloss" onclick="openGloss('knight-lowtower')">Knight Lowtower</span> (S. 353) als <span class="gloss" onclick="openGloss('cold-hearted-stormhelm-knight')">Cold-Hearted Stormhelm Knight</span> (S. 267), die ihre Partnerin Knight Tanner getötet hat, oder der Agent hat einen Oger eingeschmuggelt, einen der monströsen Diener des Winterkönig.</li>
      <li><span class="gloss" onclick="openGloss('thane-codprice-ref')">Thane Codprice</span> (S. 392) könnte einen Groll hegen und mit seinen Spießgesellen aus <span class="gloss" onclick="openGloss('barleytown')">Barleytown</span> anreisen, womöglich weitere dalische Feinde der Gefährtenschaft rekrutierend, etwa die <span class="gloss" onclick="openGloss('cloudbornes-ref')">Cloudbornes</span> (S. 356).</li>
      <li><span class="gloss" onclick="openGloss('sorrowbalm-ref')">SorrowBalm</span> (S. 324) hätte gewiss Interesse an den Schätzen der Lady – den mächtigsten aller Schätze der Dales. Da sie diese den Helden nicht selbst entreißen kann, könnte sie den größten Jäger und Krieger ihres Zweigs entsenden, <span class="gloss" onclick="openGloss('eglerion')">Eglerion</span> (S. 294), der die Helden zwar nicht verletzen will, dies aber tut, falls sie sich ihm widersetzen.</li>
      <li><span class="gloss" onclick="openGloss('sidurg-ref')">Sidurg</span> (S. 266) ist ebenfalls hinter den Schätzen der Lady her. Sind die Helden ihm zuvor auf ihren Reisen begegnet und hat er von ihrer Suche gehört, behält er sie im Auge, da er vermutet, sie könnten einen unscheinbar wirkenden Edelstein finden, den er sich sehr begehrt.</li>
      <li>Ein <span class="gloss" onclick="openGloss('wanderlands-grave-robber-ref')">Wanderlands-Grabräuber</span> (S. 281), etwa <span class="gloss" onclick="openGloss('fork-it')">Fork-It</span> (S. 99), könnte ebenfalls Gerüchte über die Helden und ihre Suche gehört haben. Sie sind auf der Suche nach Schätzen und bereit, dafür zu töten.</li>
      <li><span class="gloss" onclick="openGloss('crowlings-ref')">Crowlings</span> (S. 271), die nichts sehnlicher wollen, als die Oldways zu vernichten, vertrauen vielleicht darauf, dass die Helden sie zu den Wurzeln der Oldways führen. Steht das Schicksal der Oldways auf dem Spiel oder drohen neue Thaumaturgen geboren zu werden, könnte sogar <span class="gloss" onclick="openGloss('grandfather-crow-ref')">Grandfather Crow</span> (S. 288) selbst seinen Zug machen – sofern eure Gefährtenschaft mit ihm fertigwerden kann.</li>
    </ul>`,
    `<span class="callout"><span class="co-title">„Letzter Ausweg“</span>Sind die Helden ratlos, wo sie nach dem Tempel suchen sollen, können sie eine Weile Hartland nach jemandem absuchen, der es wissen könnte. Nutzt eine Reise und setzt den Helden dabei zu, bis sie müde, knapp an Vorräten, entmutigt oder Ähnliches sind. Schließlich stoßen sie auf Hartland-Einheimische aus einem kleinen Dorf, einem Jagdlager oder einer Karawane, die ihnen den Weg zu den Bögen weisen können — der einzigen seltsamen Ruine, die sie in der Gegend kennen.</span>`,
    `<span class="section-heading">Erzähler-Notiz — Der Aufstieg (The Climb)</span> Der Tempel liegt auf einem niedrigen Gipfel, erreichbar durch dichte Wälder und felsige Klippen. Spielt zwei oder drei Vignetten aus den Journeys <span class="gloss" onclick="openJourneyBySlug('rambling')">Rambling</span> (S. 276) und <span class="gloss" onclick="openJourneyBySlug('dark-forest')">Dark Forest</span> (CBII 144–145) sowie aus <span class="gloss" onclick="openGloss('environmental-conditions-vignettes')">Environmental Conditions</span> (CBII 201). Nutzt zusätzlich folgende Allgemeine Konsequenzen: Die Helden beginnen, die Hoffnung zu verlieren, den Tempel rechtzeitig zu finden (hopeless-2). Ein Berglöwe beginnt, sie zu verfolgen (Neue Challenge: Big Cat, CBII 138).`,
    `Folgen die Helden der Wegweiser-Magie, gelangen sie zu <strong>Den Bögen</strong> (S. 406). Folgen sie den Bächen, gelangen sie zur <strong>Aquädukt-Höhle</strong> (S. 406); von dort aus sind die Bögen bereits zu sehen.`,
  ],
  npcs:[
    { name:"Verdan (oder ein Agent des Winterkönig)", img:"verdan", role:"Wahrscheinlichster Beschatter — Cold-Hearted-Spion", text:"Am naheliegendsten: Verdan aus „An Important Letter“, oder ein Nachfolger, falls er gestorben ist oder seine Mission aufgegeben hat. Haben die Helden bereits einen Cold-Hearted besiegt, könnte er mit Verstärkung kommen — möglicherweise entpuppt sich Knight Lowtower als Cold-Hearted Stormhelm Knight, die ihre Partnerin getötet hat, oder er hat einen Oger eingeschmuggelt." },
    { name:"Thane Codprice", img:"thaneCodprice", role:"Alternative — Groll aus Barleytown", text:"Reist mit seinen Spießgesellen aus Barleytown an, womöglich mit weiteren dalischen Feinden der Gefährtenschaft im Schlepptau, etwa den Cloudbornes." },
    { name:"SorrowBalm / Eglerion", img:"sorrowbalm", role:"Alternative — Interesse an den Schätzen der Lady", text:"SorrowBalm kann die Helden nicht selbst bestehlen, entsendet aber womöglich Eglerion, den größten Jäger und Krieger ihres Zweigs — er will die Helden nicht verletzen, tut es aber, falls sie sich ihm widersetzen. Volles Profil siehe Challenge-Karte unten." },
    { name:"Sidurg", role:"Alternative — hinter einem bestimmten Edelstein her", text:"Sind die Helden ihm zuvor begegnet und hat er von ihrer Suche gehört, behält er sie im Auge, da er vermutet, sie könnten einen unscheinbar wirkenden, für ihn sehr begehrten Edelstein finden." },
    { name:"Ein Wanderlands-Grabräuber (z. B. Fork-It)", role:"Alternative — reiner Schatzjäger", text:"Hat Gerüchte über die Helden und ihre Suche gehört. Auf der Suche nach Schätzen und bereit, dafür zu töten." },
    { name:"Crowlings / Grandfather Crow", role:"Alternative — will die Oldways vernichten", text:"Vertrauen darauf, dass die Helden sie zu den Wurzeln der Oldways führen. Steht das Schicksal der Oldways auf dem Spiel, könnte sogar Grandfather Crow selbst seinen Zug machen — sofern die Gefährtenschaft mit ihm fertigwerden kann." },
  ],
  challenges:[
    { name:"EGLERION", difficulty:5, type:"Pursuer, Influence, Aggressor", subtitle:"Beispielhafte volle Ausstattung für die Option „Wer ist es?“ — Gesandter des Emerald Branch",
      desc:`Anmut und Unerbittlichkeit ausstrahlend, ist die seltsam trauervolle menschliche Maske dieses schicksalsbesiegelnden Geistes fast ein Spott seiner Macht; Sterbliche können nicht anders, als in seiner Gegenwart zu erschauern. Er ist der gefürchtete und sagenumwobene Jäger, Krieger und Gesandte des Aldenweald, der erscheint, wenn eine wahre Bedrohung für den Wald gefunden, gelöst oder niedergeschlagen werden muss.<br><br><strong>Wahre Natur:</strong> Er ist ein Twilight Emissary (Dämmergesandter) des Emerald Branch (Smaragdzweigs), beauftragt, Feinde des Zweigs zu finden und abzuschrecken; er tötet Sterbliche nur als letztes Mittel.<br><strong>Zweck:</strong> Er sucht Helden, die wahrhaftig, tapfer und gütig sind, und verlangt, dass sie ihren Wert beweisen.<br><strong>Macht:</strong> Eglerion hält sich zurück. Wird er besiegt, kehrt er später vielleicht mit größerer Might (Macht) zurück (Ω in allen Aspekten).`,
      limits:[ { label:"HARM", max:6 }, { label:"BANISH (Verbannen)", max:6 }, { label:"ESCAPE (Entkommen)", max:6 }, { label:"CONVINCE (Überzeugen)", max:5 }, { label:"PROVE WORTH (Wert beweisen)", max:5, note:"Eglerion beschenkt die Helden mit einem großen Schatz, wertvollem Wissen, magischer Macht (inspirited-6/beseelt-6) oder erneuerter Hoffnung." } ],
      tags:[ "Blade of Reflections (Klinge der Spiegelungen)", "melodious voice (melodiöse Stimme)", "scintillating armor (schillernde Rüstung)", "mysterious-4 (geheimnisvoll-4)", "Battle prowess (Kampfgeschick)", "Blinding speed (Blendende Geschwindigkeit)", "Potent spirit (Mächtiger Geist)" ],
      special:[ { title:"BELLS-OF-FATE-FINISHER (SCHICKSALSGLOCKEN-FINISHER)", text:`Maxt Eglerion ein Limit auf eine Weise, die einen Helden töten würde (z. B. wounded-6/verwundet-6), zwingt er den Helden stattdessen, ein Thema zu ersetzen.` } ],
      threats:[
        { name:"HUNT DOWN (Aufspüren)", flavor:`Ein böser Wind weht durch die Bäume, kündet vom Zorn der Dämmerung`, options:[ `Markiert sein Ziel mystisch aus der Ferne (marked-by-Twilight-3/von-der-dämmerung-markiert-3)`, `Reist über Land wie ein flüchtiger Schatten (approaching-3/sich-nähernd-3)`, `Jemand, dem die Helden vertrauen, entpuppt sich als verkleideter Eglerion (Komplikation)` ] },
        { name:"CHALLENGE (Herausfordern)", flavor:`Mit der Stimme des Schicksals selbst verkündet er seinem Ziel, dessen Taten es unwürdig machen`, options:[ `Stellt den Glauben, die Queste oder Fähigkeiten eines Helden infrage (hesitating-3/zögernd-3, disheartened-3/entmutigt-3, contemplative-3/nachdenklich-3)`, `Entkräftet ein Argument oder eine Denkweise (streiche einen Tag oder reduziere 2 Stufen bei convince/überzeugen)`, `Verkündet ein ominöses Ultimatum, bevor er in einem Wirbel aus trockenen Blättern verschwindet (Komplikation und Blockiert)` ] },
      ],
      source:`Hearts of Ravensdale I, Themenbereich Ruins of Gwyrdolin, S. 294`
    },
  ],
  revelations:[], rewards:[], tips:[
    "Wer als Beschatter gewählt wird, taucht identisch in „Eindringlinge in der Einsiedelei“ wieder auf — plant beide Szenen zusammen, bevor ihr euch festlegt.",
  ],
},

/* 2 -------------------------------------------- DIE BÖGEN / AQUÄDUKT-HÖHLE */
{
  key:"arches-aqueduct", kind:"scene", page:"S. 406–407",
  title:"Die Bögen / Die Aquädukt-Höhle", en:"The Arches / The Aqueduct Cave",
  summary:"Zwei mögliche Eingänge zum Tempel der Lady",
  overview:["Die Bögen: verfallener Aussichtspunkt, verborgener Zugang unter einem Schutzbann (perplexing-2/dizzy-1, mit Circlet: guided-2)", "Die Aquädukt-Höhle: schlammiger Zugang, Revier eines Dire Skunk", "Beide Wege führen zu den Verwüsteten Pfaden"],
  readAloud:[
    { page:"S. 406", label:"Die vier Steinbögen", text:
      `Ihr steigt einen steilen, überwucherten Wildpfad hinauf, bis zur Spitze einer bewaldeten Anhöhe. Recht abrupt weichen die Bäume einem kleinen Hain, wo vier steinerne Bögen über Moos und Gestrüpp emporragen. Jeder ist ein wenig höher als ein Mann, und sie stehen in einem groben Kreis, in verschiedene Richtungen weisend, wie Fenster auf der Suche nach einer Mauer. Durch einen könnt ihr das schimmernde Wasser des Lake Hare erkennen. Durch einen anderen die plätschernde Oberfläche des Lake Fox. Doch diese Ruine dürfte kaum bloß ein malerischer Aussichtspunkt sein.

Während ihr den Bächen folgt, die die Seen von Hartland speisen, entdeckt ihr die Überreste eines alten Aquädukts inmitten greifender Pflanzen, die den felsigen Berghang säumen. Sein Bauwerk liegt über den ganzen Hang verstreut, von der Zeit dem Verfall preisgegeben, doch der intakte Teil führt eindeutig tief in den Berg hinein. Ein Wasserfall aus klarem Quellwasser stürzt vom Aquädukt herab – die einzige Quelle sowohl für den Hare als auch den Fox, der Ort, an dem sie sich vereinen. Könnte dies die Heimstatt der Hoffnung für die Dales sein? Dort ist eine Höhle, fast dem Blick entzogen, doch sobald ihr eine Armlänge unterhalb davon am Hang steht, könnt ihr sie sehen: einen Spalt im Fels, dunkel und schmal, doch mit einer unverkennbaren Spur behauener Steine, die hineinführt. Hoch oben, hockt ein Wäldchen von Bäumen dicht um alte, verfallene Bögen auf dem Grat.` },
  ],
  flow:[
    `<span class="section-heading">Die Bögen</span> In dieser Szene erreichen die Helden die verfallenen Bögen und müssen einen Weg finden, um Zugang zum Tempel der Lady zu erhalten. Die Bögen waren allerdings nie als Eingang gedacht, weshalb es kostbare Zeit kosten kann herauszufinden, wie man ins Innere des Tempels gelangt.`,
    `<span class="section-heading">Hineinkommen</span> Die Helden können einen Zugang zum Tempel der Lady aufdecken (uncover-3), indem sie subtile Hinweise in den Verzierungen der Bögen selbst wahrnehmen, oder indem sie einfach die Erde aufgraben, bis sie eine Luke finden — was sie potenziell tired-1 und hungry-1 werden lässt. Die Bögen stehen jedoch unter einem subtilen thaumaturgischen Bann, einem Schutzzauber, der die Ruine ohne ersichtlichen Grund perplexing-2 macht und Suchende dizzy-1 werden lassen kann. Ist der Zugang erst einmal aufgedeckt, können die Helden hinab in die <strong>Verwüsteten Pfade</strong> (S. 407) steigen.`,
    `<span class="callout"><span class="co-title"><span class="gloss" onclick="openGloss('circlet-of-the-folkhearth')">Circlet of the Folkhearth</span></span>Trägt ein Held das Circlet of the Folkhearth, erkennt der thaumaturgische Schutz der Bögen ihn als willkommenen Aspiranten; statt perplexing-2 ist die Suche des Helden dann <strong>guided-2</strong>.</span>`,
    `Suchen die Helden stattdessen in der Nähe nach einem weiteren Zugang, stoßen sie bald auf die <strong>Aquädukt-Höhle</strong>.`,
    `<span class="callout"><span class="co-title">Die Wahrheit über die Bögen</span>Sobald du die Bögen uncover-3 (aufdeckst), lies diese Notiz: Die Bögen sind in Wirklichkeit die Spitze des Tempels der Lady, einst ein zum Himmel offener Balkon. Entsprechend gibt es dort eine steinerne Luke, die nach unten führt und unter den Jahren an Erde und Buschwerk rund um die Fundamente der Bögen halb begraben liegt.</span>`,
    `<span class="section-heading">Die Aquädukt-Höhle</span> In dieser Szene finden die Helden eine überwucherte Höhle, bergab von den Bögen gelegen, die einen weiteren möglichen Zugang zur Einsiedelei darstellt. Die Höhle wirkt zunächst wenig bemerkenswert, doch je weiter man vordringt, desto mehr Spuren von Alt-Gwyrdolin-Steinwerk zeigen sich – die Überreste des Aquädukts der Einsiedelei, das sich ins Innere erstreckt. Die Höhle ist schlammig vom Wasser, das noch immer hindurchsickert und tiefer in die Ruinen fließt.`,
    `Die Höhle ist zudem die Heimat eines territorialen <span class="gloss" onclick="openGloss('dire-skunk-ref')">Dire Skunk</span> (S. 257), der eine Bedrohung für ihre Jungen in jedem Eindringling sieht und durch die Nähe zu diesem Kraftort auf die Größe eines kleinen Bären herangewachsen ist. Die Helden spüren jedoch bereits eine Art Frieden an diesem Ort und wollen ihren Einstieg in den Tempel der Lady womöglich nicht mit Blutvergießen beginnen.`,
    `Jenseits des Bereichs, in dem sich der Skunk eingerichtet hat, führt die Höhle tiefer, mit immer deutlicherem Steinwerk, bis sie sich mit den <strong>Verwüsteten Pfaden</strong> verbindet.`,
  ],
  npcs:[],
  challenges:[
    { name:"DIRE SKUNK", difficulty:2, type:"Aggressor, Sapper", subtitle:"Wilder Stinktier-Riese — bewacht die Aquädukt-Höhle",
      desc:`Einer der übelsten ungebetenen Gäste, den ein Dalesbewohner haben könnte – dieses Tier ist fast so groß wie ein Schaf. Sie bauen ihre Baue nahe Häusern und Scheunen, kommen nachts hervor, um Nahrung zu stehlen. Überraschend aggressiv, ist ihre stärkste Waffe eine übel riechende Sprühflüssigkeit – niemand will mit jemandem in Verbindung gebracht werden, der nach Stinktier riecht. Durch die Nähe zum Kraftort der Einsiedelei auf die Größe eines kleinen Bären herangewachsen.`,
      limits:[ { label:"HARM", max:3 }, { label:"REPEL OR SCARE (Abwehren oder Erschrecken)", max:3 } ],
      tags:[ "sensitive nose (empfindliche Nase)", "aggressive-2 (aggressiv-2)" ],
      secrets:[ { title:"Heilmittel", text:`Zum Glück gibt es Hausmittel, die den Gestank eines Stinktiers entfernen können, wie ein Essigbad, Tomatenverbände, oder scharfe Kräuterumschläge. Dieselben Mittel können auch die Nase eines Stinktiers überwältigen und es vertreiben.` } ],
      threats:[
        { name:"THREATEN (Drohen)", flavor:`Hebt sein Hinterteil und den Schwanz, um größer zu wirken`, options:[ `Schlägt oder beißt nach allem, was zu nah kommt (wounded-2/verwundet-2)`, `Knurrt, wächst (erhält aggressive-2/aggressiv-2) oder erschreckt Angreifer (frightened-2/verängstigt-2)`, `Versprüht eine ranzige Flüssigkeit aus seinem Hinterteil (putrid-stench-4/fauliger-gestank-4, schwer zu entfernen, mit disgusted-2/angeekelt-2 für alle Anwesenden)` ] },
        { name:"FORAGE (Nahrungssuche)", flavor:`Schnüffelt in der Luft nach etwas Gutem zu essen`, options:[ `Gräbt Ernten aus oder bricht in Vorratslager ein (short-on-supplies-1/knapp-an-vorräten-1 oder Schlechte Nachrichten)`, `Huscht durch ein selbstgegrabenes Loch davon (Blockiert)` ] },
      ],
      source:`Hearts of Ravensdale I, Themenbereich Challenges, S. 257`
    },
  ],
  revelations:[], rewards:[], tips:[],
},

/* 3 -------------------------------------------------------- VERWÜSTETE PFADE */
{
  key:"ruined-paths", kind:"scene", page:"S. 407",
  title:"Verwüstete Pfade", en:"Ruined Paths",
  summary:"Bröckelnde Korridore · Journey-Vignetten · die Monstrous Pitcher Plant",
  overview:["Abstieg durch einstürzende Gänge als Journey-Vignetten (eine pro Held)", "Gefahr: Fehltritt in den Rachen einer Monstrous Pitcher Plant", "Alternativer, geheimer Zugang zum Ummauerten Garten über die Pflanzenwurzeln"],
  readAloud:[
    { page:"S. 407", label:"Verwüstete Pfade", text:
      `Ist es das? Habt ihr wirklich die verlorene Einsiedelei gefunden? Im schwachen, staubigen Lichtstrahl, der von draußen hereinfällt, könnt ihr uralte gwyrdolanische Steinmetzarbeit erkennen, wie man sie nur in Ruinen und Gebäuden des Alten Königreichs findet. Kies knirscht unter euren Füßen, während eure Augen die Formen von Steinen und Mörtel erkennen, die Boden und Wände bilden. Ihr befindet euch in einer weit größeren Ruine, als die Bögen oder das Aquädukt allein vermuten ließen, so viel steht fest. Die Luft hier ist kühl und dick von Wasser-, Moos- und Grüngeruch. Die Steine sind von dicken Wurzeln durchzogen und mit Flechten und Moos überzogen. Ihr dürft euer Herz nicht von eurer Aufgabe in dieser gefährlichen Ruine abschweifen lassen, und doch spürt ihr etwas Friedliches und Hoffnungsvolles – eine seltsame Zärtlichkeit. Ihr entzündet eine Fackel und macht euch bereit, weiter vorzudringen.` },
  ],
  flow:[
    `In dieser Szene steigen die Helden durch bröckelnde Gänge hinab in die verlorene Einsiedelei. Die Ruine ist nicht mit Fallen gespickt, doch viele der Räume und Korridore sind bereits eingestürzt oder gerade im Begriff einzustürzen, was jeden Schritt gefährlich macht.`,
    `Korridore, die einst leicht zu durchqueren waren, sind nun voller Schutt mit einsturzgefährdeten Decken, und alles liegt in Dunkelheit. Der Abstieg besteht aus einer Reihe von Vignetten, etwa:`,
    `<details class="journey-pick">
      <summary>Barrow <span class="jp-sub">— 3 ausgewählte Vignetten, S. 282</span></summary>
      <div class="journey-pick-body">
        <div class="vignette"><div class="v-name">Beckoned to Enter (Zum Eintreten gerufen)</div><div class="v-flavor">Am klaffenden Maul des Grabhügels könnt ihr gerade noch die Umrisse eines Tunnels erkennen, der tief in den Hügel hineinführt. Ihr müsst euch wappnen, bevor ihr diesen daunting-2 Ort betretet.</div><ul>
          <li>Ihr fühlt euch seltsam gezwungen, den Grabhügel zu betreten (curious-2 oder compelled-to-delve-2).</li>
          <li>Ihr erinnert euch an Geschichten von goldenem Schatz, der in solchen Grabhügeln gefunden wurde (greedy-2).</li>
          <li>Euch fehlt der Mut einzutreten (Blocked/Blockiert oder apprehensive-2/besorgt-2).</li>
          <li>Ihr haltet es für das Beste, etwas von euch draußen zu lassen, falls sie danach suchen kommen (wählt: streiche einen Tag oder unlucky-2/pechhabend-2).</li>
          <li>Ein schwaches Licht erscheint im Tunnel (Neue Challenge: Will-O'-The-Wisp/Irrlicht, CBII 143).</li>
        </ul></div>
        <div class="vignette"><div class="v-name">Collapsing Stone (Einstürzender Stein)</div><div class="v-flavor">In einem engen Durchgang, teilweise durch eingestürzten Schutt blockiert, wirkt die gepackte Steinmauer des Grabhügels locker und unzuverlässig. Ihr solltet vorsichtig sein beim Überqueren.</div><ul>
          <li>Ihr stolpert über einen Felsen und schürft euch auf (grazed-2).</li>
          <li>Ein weiterer Teil der Mauer stürzt von oben auf euch (crushed-3 und pinned-3/festgenagelt-3).</li>
          <li>Die Mauer stürzt ein und blockiert euren Vormarsch oder trennt euch von den anderen (Blocked/Blockiert oder streiche Begleiter-Tags).</li>
        </ul></div>
        <div class="vignette"><div class="v-name">Path of Filth (Pfad des Unrats)</div><div class="v-flavor">Der schattige Durchgang voraus ist voller stehendem Wasser, das sich über die Jahre dort angesammelt hat.</div><ul>
          <li>Beim Durchwaten des Wassers werdet ihr filthy-3, wet-2, und sick-2.</li>
          <li>Umkehren kostet wertvolle Zeit (time-passes-1) oder ist trickreicher als gedacht (lost-2).</li>
          <li>Ihr rutscht aus und lasst etwas in trübem Schlamm fallen; ihr werdet es nicht wiederfinden (streiche einen Tag).</li>
        </ul></div>
      </div>
    </details>`,
    `<details class="journey-pick">
      <summary>Forlorn Ruins <span class="jp-sub">— 3 ausgewählte Vignetten, CBII 161</span></summary>
      <div class="journey-pick-body">
        <div class="vignette"><div class="v-name">Blocking Rubble (Blockierender Schutt)</div><div class="v-flavor">Der Weg voraus ist durch einen Haufen eingestürzten Schutts blockiert, der fast bis zur Oberkante eines Torbogens reicht — doch ihr spürt Wind hindurchziehen.</div><ul>
          <li>Ihr verletzt euch beim Durchzwängen durch eine Öffnung (bruised-2).</li>
          <li>Den Weg freizuräumen kostet Zeit und ermüdet euch (time-passes-1 und tired-1).</li>
          <li>Der Schutt wird beseitigt, doch es kostet euch euer Werkzeug (streiche einen Tag).</li>
          <li>Trotz aller Versuche, einen anderen Weg zu finden, scheint alles wieder hierher zurückzuführen (Blocked/Blockiert).</li>
        </ul></div>
        <div class="vignette"><div class="v-name">Grand Hall (Große Halle)</div><div class="v-flavor">Eine weitläufige, verfallende Halle ist gesäumt von kunstvollen Abbildern längst vergessener historischer Figuren, bedeckt mit faszinierenden Inschriften. Denkt daran, was hier alles zu erfahren wäre!</div><ul>
          <li>Die Untersuchung ist fesselnd, doch ihr trödelt (time-passes-1), während andere hungry-1, sleepy-1 oder bored-1 werden.</li>
          <li>Ihr berührt eine uralte Tafel, Statue oder einen Wandteppich, und er zerfällt in eurer Hand zu Staub (guilty-2/schuldig-2).</li>
          <li>Die Enthüllungen sind beunruhigend und werfen Licht auf den Untergang dieses Ortes (saddened-2 oder Ill Tidings/Schlechte Nachrichten).</li>
          <li>Etwas nähert sich (Neue Challenge), und in der gewaltigen Weite der Halle seid ihr exposed-2.</li>
        </ul></div>
        <div class="vignette"><div class="v-name">Maze of Twisting Tunnels (Labyrinth verschlungener Gänge)</div><div class="v-flavor">Ihr dreht euch im Kreis, verwirrt von den verschlungenen Gängen. Ihr müsst etwas unternehmen, sonst wird dieses Labyrinth euer Grab.</div><ul>
          <li>Ihr verschwendet viel Zeit beim Herausfinden (time-passes-1).</li>
          <li>Das ziellose Umherirren macht euch tired-2 oder frustrated-2.</li>
          <li>Ihr fallt in einen Seitengang oder eine versteckte Grube, wounded-2 und von den anderen getrennt (Complication/Komplikation).</li>
        </ul></div>
      </div>
    </details>`,
    `Ebenfalls verwendbar: jede der Vignetten aus <span class="gloss" onclick="openJourneyBySlug('echoing-cavern')">Echoing Cavern</span> (CBII 146), außer <em>A Fiend's Lair</em>.`,
    `Ein Fehltritt kann einen Helden in den geöffneten Rachen einer <strong>Monstrous Pitcher Plant</strong> (Neue Challenge) stürzen lassen.`,
    `Haben die Gefährten eine Vignette pro Held überwunden, erreichen sie eine Treppe, die zum <strong>Ummauerten Garten</strong> (S. 408) führt.`,
    `<span class="callout"><span class="co-title">Ein alternativer Zugang</span>Ein Held, der in die Monstrous Pitcher Plant fällt und ihr entkommen kann, findet möglicherweise durch winzige, von ihren Wurzeln aufgebrochene Risse einen Weg in den Ummauerten Garten aus einer anderen Richtung — unter Umgehung des Tors der Absicht.</span>`,
    `<span class="callout"><span class="co-title">📜 Die Monstrous Pitcher Plant</span>Wer in ein falsches Loch stolpert, kann in den geöffneten Rachen einer Monstrous Pitcher Plant stürzen – einer gewaltigen, fleischfressenden Kannenpflanze, die tief in den einstürzenden Gängen der Einsiedelei lauert.<br><br><em>(Das Entkommen durch ihre Wurzeln kann als alternativer geheimer Eingang zum Ummauerten Garten dienen, unter Umgehung des Tors der Absicht.)</em></span>`,
  ],
  npcs:[],
  challenges:[
    { name:"MONSTROUS PITCHER PLANT", difficulty:2, type:"Aggressor", subtitle:"Monströse Kannenpflanze — Grenzwerte HARM/ESCAPE",
      desc:`Zu gewaltiger Größe herangewachsen in den dunklen Erdböden, die die verlorene Eremitage begraben haben, liegt die Kannenpflanze auf der Lauer, um neugierige Kreaturen in ihr Maul zu locken. Kribbelnder, betäubender Nektar beruhigt ihre Beute in Entspannung, während die Pflanze sie verdaut.`,
      limits:[ { label:"HARM", max:3 }, { label:"ESCAPE (Entkommen)", max:4 } ],
      tags:[ "nectar-slick (nektarglitschig)", "prodigious size (gewaltige Größe)", "very tight space (sehr enger Raum)" ],
      threats:[
        { name:"DIGEST (Verdauen)", flavor:`Das Gefühl dicken, kribbelnden Nektars breitet sich über deine Haut aus`, options:[ `Besänftigt mit süß duftendem Sirup (numbed-3/betäubt-3)`, `Verdaut seine Beute Stück für Stück, genießt jeden Bissen (digested-1/verdaut-1)`, `Zieht seine Kanne mit inneren Dornen zusammen (stabbed-2/durchstochen-2 und reduziert escaped/entkommen um 1 Stufe)` ] },
      ],
      source:`Wake of the Oldways — kampagnenspezifische Challenge, S. 407`
    },
  ],
  revelations:[], rewards:[], tips:[
    "Diese Szene läuft am besten als klassische Journey-Montage: eine Vignette pro Held, nicht als taktischer Kampf — der Ton bleibt „gefährlicher Abstieg“, nicht „Dungeon-Fallen“.",
  ],
},

/* 4 -------------------------------------------------------- DER UMMAUERTE GARTEN */
{
  key:"walled-garden", kind:"scene", page:"S. 408–410",
  title:"Der Ummauerte Garten", en:"The Walled Garden",
  summary:"Tor der Absicht · Mosaiken (Lore-Enthüllungen) · Scalagorry · Kern-Enthüllung 8",
  overview:["Das Tor der Absicht prüft die wahren Beweggründe der Helden", "Die Mosaiken vervollständigen die Lore-Enthüllungen H, I, C, D, J, L, K", "Kern-Enthüllung 8: Die Lady war eine Große Thaumaturgin, die sich opferte", "Scalagorry und der tierische Hofstaat — Warten auf Starshine"],
  readAloud:[
    { page:"S. 408", label:"Der versunkene Garten", text:
      `Ihr tastet euch die geröllübersäten Stufen hinab, bis sie sich in eine kavernenartige Halle öffnen, spärlich erhellt von vereinzelten Lichtstrahlen, die durch Risse in der Decke fallen. Mosaike zieren die Wände, zumindest dort, wo sie nicht von Schmutz oder rankenden Wurzeln überwuchert sind. Erdtröge sind rings um den Rand der Kammer verteilt, ein bewahrter Garten, der sich kaum noch an Sonnenlicht erinnert.

In der Mitte der Halle, umringt von niedrigen Zierwällen, liegt ein flacher Teich. Eine einzelne, fast blattlose Eiche wächst am fernen Rand des Teichs; allen Widrigkeiten zum Trotz lebt der Baum und hat seine Äste ausgestreckt, um die steinernen Verzierungen der Kammerwände zu ergreifen. Der Teich, gespeist von einem Rinnsal, das durch die verfallenen Gänge sickert, und von wenigen spärlichen Lichtstrahlen, die durch von Tieren gegrabene Tunnel dringen, gibt der Eiche gerade genug, um zu überleben.

Doch bevor ihr weitergeht, spürt ihr einen plötzlichen, unsichtbaren Ruck, der euch innehalten lässt. »Dies ist ein heiliger Ort«, denkt ihr – doch die sanfte, zärtliche Stimme in eurem Herzen ist nicht eure eigene. Oder doch? Sie klingt seltsam vertraut. »Ihre verborgene Weisheit hat hier gewartet, durch die Zeitalter hindurch. Seid ihr diejenigen, die hineinblicken dürfen? Was bringt ihr mit an diesen Ort?«

Dann bemerkt ihr zwei große, identische steinerne Statuen einer verhüllten Frau, moosbewachsen, einander gegenüberstehend zu beiden Seiten der Treppe, die vor euch in die Halle mündet. Jede hält eine Handfläche sanft an ihren Bauch, die andere nach vorn zur jeweils anderen Statue gerichtet, als bewachten sie den Eingang. »Warum seid ihr HIER?«` },
    { page:"S. 410", label:"Scalagorry und der tierische Hofstaat", text:
      `Ein schwirrendes, klapperndes Durcheinander bricht aus der dunklen Kammer um euch herum los. Eine Masse kleiner Tiere strömt wie eine Flutwelle aus den Schatten: Backenhörnchen, Kaninchen, Eichhörnchen und Wiesel, dutzende an der Zahl, murmelnd und zwitschernd, während sie sich um euch in einem losen Kreis anordnen. Sie setzen sich aufmerksam hin, die Augen auf euch gerichtet, wie ein königlicher Hofstaat, der seinen Monarchen begrüßt.

Mit einem quietschenden Husten tritt ein beeindruckend großes Erdhörnchen vor, so groß wie ein kleiner Hund, und hebt eine Pfote. »Bei der Lady!«, bellt das Erdhörnchen. »Besucher. Die ersten, seit der Turm einstürzte, ein-ein-eingestürzt…« Das Eichhörnchen hustet erneut, bedeckt sich höflich den Mund – besonders bemerkenswert für ein Eichhörnchen –, während sein kleiner Körper erbebt. »Wir haben die Dinge nicht so ordentlich gehalten, wie ich es mir wünschen würde, aber trotzdem … Willkommen. Ich bin Scalagorry, Hüterin dieses Ortes. Sie hat auf euch gewartet.«` },
  ],
  flow:[
    `In dieser Szene erkunden die Helden den Ummauerten Garten, der einst an der Oberfläche des Hügels lag, doch vor Jahrhunderten von einem Erdrutsch begraben wurde. Hier führten die vertrauten Gefolgsleute der Lady einst junge Aspiranten an.`,
    `Der Bereich war einst ein von Bögen, Balkonen und sorgsam gepflegter Bepflanzung umgebenes Atrium. Zwar wächst heute nur noch wenig darin, doch die Helden können die verschiedenen Beete erkennen, in denen Thaumaturgen in Ausbildung einst Sonnenhut und Salbei, Wurzeln wie Ingwer und Kurkuma, Karotten, Zwiebeln, Kohl und Grünkohl anbauten.`,
    `<span class="section-heading">Das Tor der Absicht</span> Nähern sich die Helden dem Herzen der Einsiedelei, spüren sie die wachsende Gegenwart der Lady. An dessen Grenze bewachen zwei Statuen der Lady den Eingang, durch den die Helden nur mit einem mächtigen Zauber gelangen. Eine unsichtbare Macht verlangt von ihnen, ihr Herz zu offenbaren, und urteilt über ihre Antwort auf die Frage, die sie alle im Innersten spüren: <em>Warum seid ihr hier?</em>`,
    `Mit ihrem durchdringenden Blick verlangen die Statuen von jedem Besucher, seine Herzen nach den wahren Beweggründen zu durchsuchen und sich seinen inneren Gefühlen und Wünschen bezüglich seiner Queste zu stellen: Sind sie selbstsüchtig oder selbstlos? Sorgen sie sich um ihre Zukunft oder um ihre Vergangenheit? Sind sie sich selbst treu, ihren Quests treu? Oder ist es Zeit zu erkennen, dass sich ihre Prioritäten wandeln? Dies kann die Helden apprehensive-3 oder doubting-3 werden lassen, oder sie dazu inspirieren, Abandon oder Milestone zu markieren.`,
    `Die Gegenwart der Lady hindert jeden mit böser Absicht sowie böswillige magische Effekte daran, ins innere Heiligtum der Einsiedelei vorzudringen (Blockiert). Doch wie der Saum der Lady franst auch dieser Schutz aus, und es existieren Zugänge, die das Tor der Absicht umgehen — etwa der Weg durch die Wurzeln der Kannenpflanzen (S. 407).`,
    `<span class="section-heading">Die Mosaiken</span> Eine Reihe von Mosaiken aus Keramik und Glas ziert die Innenwände; im direkten Sonnenlicht würden ihre leuchtenden Farben hervorstechen, doch im unterirdischen Halbdunkel des heutigen Tempelstandorts sind sie deutlich weniger auffällig. Das Studium dieser Mosaiken kann jede bislang verpasste Lore-Enthüllung vervollständigen oder sie zusammenführen, um die Vergangenheit Revue passieren zu lassen, sowie wichtige Details über die Lady hinzufügen:`,
    `<span class="callout"><span class="co-title">Die Lady, selbst eine der Großen Thaumaturgen</span>Die Lady, selbst eine der Großen Thaumaturgen von einst, sah dieses dunkle Zeitalter voraus und bereitete sich vor, indem sie in ihre Heimat, die Dales, aufbrach, noch bevor der Krieg ausbrach. Dort webte sie eine wundersame Verzauberung, größer als alles, was die Welt zuvor gesehen hatte, um die Dales vor den Übeln Alt-Gwyrdolins und dem Zorn des <span class="gloss" onclick="openGloss('winter-king')">Winterkönig</span> zu schützen, damit starke Samen dort sprießen könnten: liebevolle und gütige Herzen, die eines Tages der Welt Hoffnung bringen könnten. Um diesen Zauber zu weben, musste sie all ihre Macht und ihr Leben geben; sie stieg dann zu den Sternen auf und hinterließ ihren Anhängern die Aufgabe, den Dalischen die Mysterien der Thaumaturgie zu lehren — eine Lehre, die nach und nach in Vergessenheit geriet und als die Oldways bekannt wurde.</span>`,
    `Hat die Gefährtenschaft zuvor in Adventure 3 nur die unbenannte, mit K vermengte Erwähnung in der <span class="gloss" onclick="openGloss('lantern-world-ref')">Lantern World</span> mitbekommen, lässt sich hier auch <strong>Lore-Enthüllung E</strong> — dass es viele Arten von Geschöpfen der Dämmerung gibt, manche gefährlich, manche hilfreich — endgültig und eigenständig bestätigen.`,
    `<span class="section-heading">Hüterin des Baumes — Scalagorry</span> In dieser Szene begegnen die Helden dem sprechenden Erdhörnchen Scalagorry und den anderen Tieren, die zu Hütern der begrabenen Einsiedelei geworden sind. Scalagorry ist das einzige der Tiere, das fließend die dalische Sprache beherrscht. Sie alle stammen von den wenigen Tieren ab, die vor Hunderten von Jahren von den Thaumaturgen des Tempels unterrichtet wurden, und verehren noch immer die Lady der Dales und versuchen, nach ihren Lehren zu leben. Mit jeder Generation jedoch geht mehr Wissen verloren, und immer weniger von ihnen können sprechen.`,
    `Scalagorry vertraut darauf, dass die Gegenwart der Lady Feinde fernhält — die Helden müssen sich also würdig erweisen —, doch gibt er nicht sogleich alle Geheimnisse der Einsiedelei preis. Neugierig auf die Helden, fragt Scalagorry nach ihrer Herkunft und ihren Absichten. Von ihm können die Helden ähnliche Geschichten und Überlieferungen erfahren wie jene, die in den Mosaiken dargestellt sind.`,
    `<span class="callout"><span class="co-title">📜 Der wartende Garten</span>Schließlich erzählt euch Scalagorry, dass die Lady schon seit sehr langer Zeit auf euch gewartet hat. Sie sei stets nah, immer – doch solltet ihr bis zum Starshine, dem Einbruch der Nacht, warten, werde sie vor euch erscheinen. Für manche mag dies eine Prüfung der Geduld sein, die vielleicht ungeduldig nach Antworten oder Schätzen suchen. Der Aufenthalt im Garten ist friedvoll und auf unheimliche Weise erholsam.</span>`,
    `<span class="section-heading">Der dämmrige Garten</span> Das Warten auf <strong>Starshine</strong> (Einbruch der Nacht) löst die Erscheinung der Lady aus. Die Helden können hier campen, mit Scalagorry sprechen, die Wandbilder betrachten oder erkunden (was sie vorzeitig zur Heiligen Kammer führen kann). Lauert bereits jemand in den Schatten, wartet er, bis die Schätze der Einsiedelei enthüllt werden, bevor er sich zu erkennen gibt.`,
    `<span class="callout"><span class="co-title">Lesetrigger</span>Lies „Der Ursprung der verlorenen Einsiedelei“ (S. 402).</span>`,
    `<span class="section-heading">Zugang zur Kammer</span> Einer der Bögen, die aus der Höhle hinausführen, endet mit hinabführenden Stufen, die scheinbar in einem gähnenden Abgrund verschwinden. Durch diese Höhlung kann man möglicherweise die verdeckte Öffnung zur Heiligen Kammer erreichen, doch die Öffnung ist nicht sichtbar, ohne genau hinzusehen, und sie zu erreichen ist sehr schwierig — es erfordert eine unglaubliche Kletterleistung.`,
    `<span class="callout"><span class="co-title">Erzähler-Notiz — Die sprechenden Tiere</span>Zur Zeit Gwyrdolins versuchten sich die Thaumaturgen dieser Einsiedelei an der Kunst des Erweckens, wie sie der Smaragdene Zweig praktizierte, und halfen Tieren dabei, Selbstbewusstsein zu erlangen und die Gabe der Sprache zu entwickeln. Die Tiere des Tempels haben diese Kunst auf ähnliche Weise am Leben erhalten wie die Oldways — durch missverstandene Rituale, mit Zaubersprüchen und pflanzenkundlichen Rezepten, die ortsansässige <span class="gloss" onclick="openGloss('hartland')">Hartland</span>-Zutaten erfordern.</span>`,
  ],
  npcs:[
    { name:"Scalagorry", role:"Hüterin des Baumes — sprechendes Erdhörnchen", text:"Beeindruckend großes Erdhörnchen, so groß wie ein kleiner Hund, einziges der Tiere, das fließend Dalisch spricht. Hüterin der begrabenen Einsiedelei und ihres tierischen Hofstaats. Fragt neugierig nach Herkunft und Absichten der Helden, bevor sie Geheimnisse preisgibt." },
  ],
  challenges:[],
  revelations:[
    { kind:"Core", ref:"8", text:"Die Lady war eine der Großen Thaumaturgen Gwyrdolins, die sich opferte, um die Dales vor dem Winterkönig zu schützen." },
    { kind:"Lore", ref:"H", text:"Himmlische Wesen, die Kinder der Dämmerung, entsenden Boten, um die Menschheit zu führen." },
    { kind:"Lore", ref:"I", text:"Die himmlischen Wesen des Smaragdenen Zweigs lehrten die Menschheit die Thaumaturgie — und lösten damit mittelbar den Krieg der Thaumaturgen aus. (bekräftigt)" },
    { kind:"Lore", ref:"E", text:"Es gibt viele Arten von Geschöpfen der Dämmerung, manche gefährlich, manche hilfreich. (spätestens hier eigenständig bestätigt, falls zuvor nur unbenannt mit K vermengt gehört)" },
    { kind:"Lore", ref:"C", text:"Die Dales waren einst Teil von Alt-Gwyrdolin, einem Königreich, das von den Großen Thaumaturgen — Wundertätern — regiert wurde. (bekräftigt)" },
    { kind:"Lore", ref:"D", text:"Gwyrdolin fiel im Krieg der Thaumaturgen. (bekräftigt)" },
    { kind:"Lore", ref:"J", text:"Der Krieg wurde zwischen dem damaligen Herrscher Gwyrdolins, dem letzten Großen Thaumaturgen genannt der Fell Fool, und dem Winterkönig, dem Herrn aller Geschöpfe der Dämmerung, ausgetragen." },
    { kind:"Lore", ref:"L", text:"Unter der Herrschaft des Fell Fool überdauerte Gwyrdolin im Krieg der Thaumaturgen mithilfe finsterer Magie, die das Land versauerte. Die Hauptstadt soll in den Marschen versunken sein." },
    { kind:"Lore", ref:"K", text:"Viele Geschöpfe der Dämmerung waren einst Kinder der Dämmerung — daher ihr Name —, doch sie fielen wegen ihrer Rolle im Krieg in Ungnade und erhielten den Namen „Fallen Leaves“. (bekräftigt)" },
  ],
  rewards:[], tips:[
    "Die Mosaiken-Szene ist der perfekte Ort, um alle bislang in der Kampagne verpassten Lore-Enthüllungen (H, J, L waren zuvor „missing“) endlich nachzuliefern — schaut vor der Sitzung im Lore-Überblick nach, was eure Gruppe bislang noch nicht gefunden hat.",
  ],
},

/* 5 -------------------------------------------------------- DIE LADY DER DALES */
{
  key:"the-lady", kind:"scene", page:"S. 410–411",
  title:"Die Lady der Dales", en:"The Lady of the Dales",
  summary:"Klimaktische Erscheinung · Bergmodus/Gemütlicher Modus · Heilige Kammer",
  overview:["Starshine: die Lady erscheint als Säule aus Sternenlicht auf der Eiche", "Bestätigt das Ausfransen des Saums, erteilt die nächste Aufgabe oder bietet Wiederherstellung an", "Kern-Enthüllung 9 (optional): Der Zauber war nie für mehr als 300 Jahre gedacht", "Zwei Schätze der Heiligen Kammer: Erinnerungsstein und Liebesring"],
  readAloud:[
    { page:"S. 410", label:"Das erste Erscheinen der Lady", text:
      `Es ist Starshine, und die letzten Reste des Tageslichts verlöschen und verblassen, sodass der Gartenkeller in Dunkelheit versinkt – doch ihr habt keine Angst. Nach einer Weile beginnt Sternenlicht durchzuscheinen. Ihr seid euch nicht sicher, ob es an euren an die Dunkelheit gewöhnten Augen liegt oder an einem schwachen, geheimnisvollen Schimmer, doch bald erstrahlt eine Säule bläulichen Lichts auf der Eiche im Zentrum der Höhle.

»Sie ist hier«, sagt Scalagorry. Ganz allmählich beginnt ihr, eine zarte Gestalt im Sternenlicht zu erkennen. Noch bevor sie überhaupt Gestalt annimmt, erinnert sie euch schon an jemanden, den ihr einst kanntet, jemanden, den ihr geliebt habt. Warme Gefühle erfüllen euer Herz, doch die Erinnerung daran, wer sie mit dieser Person verbindet, entgleitet euch. Endlich enthüllt sich das Antlitz einer zeitlosen Frau, ihr Haar aus der sanften Kapuze fließend, ihr Reiseumhang zerschlissen und ausgefranst. Sie lächelt euch an, und mit einem Mal atmet ihr erleichtert auf, ohne zu wissen, warum, während jede Anspannung in euch sich löst. »Willkommen, meine lieben Dalesleute…«` },
  ],
  flow:[
    `An Starshine löst sich eine Säule aus Sternenlicht zur ewigen, vermummten Gestalt der Lady auf. Dies ist der zentrale Höhepunkt der Kampagne.`,
    `<span class="section-heading">Was geschieht</span>
    <ul>
      <li>Bestätigt, dass der Saum ausfranst und ihr Einfluss schwinden muss.</li>
      <li>Erteilt die nächste Aufgabe (Bergmodus) oder bietet an, den Zauber wiederherzustellen (Gemütlicher Modus) — siehe unten.</li>
      <li>Schenkt zwei Schätze für die Heilige Kammer: ihren <strong>Erinnerungsstein</strong> und ihren <strong>Liebesring</strong>.</li>
      <li>Ein Eindringling stürmt herein, kämpft um den Erinnerungsstein oder sabotiert die Wiederherstellung.</li>
      <li>Die Einsiedelei beginnt einzustürzen.</li>
    </ul>`,
    `<span class="section-heading">Letzte Enthüllungen</span> Was die Lady in diesem dramatischen Moment sagt, hängt vom Modus eurer Reihe ab (S. 310). So oder so ist dies ein guter Moment für eine Montage all dessen, was die Helden während der gesamten Reihe erreicht haben, während die Lady sie daran erinnert, warum sie ihr Vertrauen in sie setzt — warum sie es immer in sie gesetzt hat, seit sie zum ersten Mal auf den Cloven Oak Shrine blickte (<em>An Important Letter</em>, S. 333) und selbst schon lange davor.`,
    `<span class="callout"><span class="co-title">BERGMODUS — Dialog/Ausgang</span>Der Saum war immer dazu bestimmt, ein Ende zu finden — es ist Zeit für die Dalischen, „ihrer Schale zu entwachsen". Weder der <span class="gloss" onclick="openGloss('winter-king')">Winterkönig</span> noch das Miasma der Marschen werden von selbst aufhören. Der Weg nach vorn: Alt-Gwyrdolins versunkene Hauptstadt in den Marschen finden, um die Vergangenheit aufzudecken, dann in ein fernes Land namens <strong>Kingdom of Rust</strong> reisen, um <strong>das Herz des Winterkönig</strong> zu bergen — das Einzige, das ihn aufhalten könnte. Willige Helden werden von der Lady in einer Säule aus Sternenlicht vereidigt; die tote Eiche lässt eine einzelne Eichel als symbolischen Marker wachsen.</span>`,
    `<span class="callout"><span class="co-title">GEMÜTLICHER MODUS — Dialog/Ausgang</span>Die Zeit des Saums geht zu Ende, doch <em>in jedem Helden</em> liegt die Macht, einen neuen Zauber zu weben — wenn sie bereit sind, alles zu geben. Erwägt: Steigt ein Held mit der Lady auf und wird selbst zu einem kleinen Stern, opfert sein Leben für die Dales? Oder handelt es sich um einen Fall der <span class="gloss" onclick="openGloss('secret-grace')">Geheimen Gnade (Secret Grace)</span> (CBII 78) — bei dem das angesammelte Wohlwollen und die guten Taten, welche die Helden während der gesamten Kampagne vollbracht haben, selbst genügen, um den Zauber zu erneuern? Wird er wiederhergestellt, wird die zentrale Eiche zu einem gedeihenden, lebenden Baum, der den kommenden Zusammenbruch überlebt, verpflanzt auf den Hügel als neuer Brennpunkt des Segens der Dales.</span>`,
    `<span class="section-heading">Letzte Geschenke (Inhalt der Heiligen Kammer)</span> Beim Abschied verrät die Lady den Helden von einer Heiligen Kammer unterhalb des Ummauerten Gartens. Dort finden die Helden ihre zwei größten Schätze:`,
    `<ul>
      <li><strong>Der <span class="gloss" onclick="openGloss('memory-stone')">Erinnerungsstein</span> der Lady</strong> (S. 238), ein verzauberter Opal — er enthält thaumaturgisches Wissen mehrerer Künste (einschließlich der <span class="gloss" onclick="openGloss('art-of-veiling-shepherd')">Art of Veiling und der Art of the Shepherd</span>, S. 242) sowie ausgewählte Erinnerungen an vergangene Ereignisse aus Gwyrdolin vor dem Krieg, die den Helden helfen könnten, sollten sie je über die Dales hinausziehen. Die Erinnerungen offenbaren, dass sie einst eine dalische Frau namens <strong>Wren Dunfrey</strong> war, geboren Jahrhunderte vor dem Krieg.</li>
      <li><strong>Ein gewöhnlicher Liebes-/Claddagh-Ring</strong> — von der Art, wie sie paarweise für Liebende angefertigt werden. Dieser gehörte ihr, der andere ihrem Geliebten, dem Großen Thaumaturgen <strong>Heath Ravenfriend</strong>. Sollten die Helden ihm je begegnen, könnten sie ihn als Beweis für den Glauben der Lady an sie nutzen.</li>
    </ul>`,
    `Möchtet ihr die Helden weiter belohnen, finden sich weitere <span class="gloss" onclick="openGloss('hermitage-chamber-treasures')">bemerkenswerte Schätze</span> in der Kammer (S. 222). Doch bevor sie sich aufmachen, die Kammer zu finden, taucht ein Eindringling in der Einsiedelei auf!`,
  ],
  npcs:[
    { name:"Die Lady der Dales", role:"Vermummte, zeitlose Gestalt aus Sternenlicht", text:"Erscheint an Starshine auf der zentralen Eiche. War einst die dalische Frau Wren Dunfrey und eine der Großen Thaumaturgen Gwyrdolins. Bestätigt das Versagen des Saums und weist den Helden je nach Kampagnenmodus einen neuen Weg (Bergmodus) oder bietet die Wiederherstellung des Zaubers an (Gemütlicher Modus)." },
  ],
  challenges:[],
  revelations:[
    { kind:"Core", ref:"9", optional:true, text:"Ihr Zauber war nie dafür gedacht, länger als 300 Jahre zu währen, und es gibt nichts, was sein Versagen aufhalten könnte." },
  ],
  rewards:[
    "Der Erinnerungsstein der Lady (verzauberter Opal, thaumaturgisches Wissen mehrerer Künste, Erinnerungen aus dem Gwyrdolin vor dem Krieg).",
    "Ein Liebes-/Claddagh-Ring der Lady — Gegenstück gehört Heath Ravenfriend.",
    "Optional: weitere <span class=\"gloss\" onclick=\"openGloss('hermitage-chamber-treasures')\">bemerkenswerte Schätze</span> der Kammer (S. 222).",
  ],
  tips:[
    "Dies ist der emotionale Höhepunkt der gesamten Kampagne — nehmt euch bewusst Zeit für eine Rückblende/Montage auf die Reise der Gruppe, bevor die Eindringlinge-Szene die Spannung wieder hochschraubt.",
  ],
},

/* 6 -------------------------------------------------------- EINDRINGLINGE IN DER EINSIEDELEI */
{
  key:"intruders", kind:"scene", page:"S. 412",
  title:"Eindringlinge in der Einsiedelei", en:"Intruders in the Hermitage",
  summary:"Letzte Konfrontation mit dem Beschatter · der Tempel stürzt ein · Flucht",
  overview:["Der zuvor gewählte Beschatter erreicht den Ummauerten Garten und greift an", "Ein letztes Fünkchen der Macht der Lady kann angerufen werden", "Die Einsiedelei stürzt ein (Fall of the Lady's Temple, COLLAPSE/ESCAPE)", "Scalagorry und die Tiere begleiten die Helden bei der Flucht"],
  readAloud:[
    { page:"S. 412", label:"Eindringlinge in der Einsiedelei", text:
      `Mit einem gewaltigen Krachen und einer Staubwolke steht plötzlich einer der großen Bögen im Garten – zuvor völlig mit Schutt verstopft – nun frei geräumt. Dies, so erkennt ihr, war einst der Haupteingang zur Einsiedelei, und offenbar hat ihn soeben jemand erneut geöffnet. Die Erscheinung der Lady flackert, verblasst wieder zu fernem Sternenlicht. Wer auch immer aus der Staubwolke hervortritt – es liegt an euch, ihn davon abzuhalten, die Geheimnisse der Einsiedelei zu plündern.

Als wolle es euer Leid noch vermehren, hört ihr über euch einen Riss, wie Donner. Erde und Kieselsteine regnen von der Decke, die Wand beginnt sich zu verschieben, und die Steinplatten unter euren Füßen erzittern. Die Zerstörungswut des Eindringlings war der letzte Tropfen für diese uralte Ruine – ihr solltet besser bald hier herauskommen, bevor alles über euch allen zusammenstürzt.` },
  ],
  flow:[
    `In dieser Szene hat der in „Sich der Einsiedelei nähern" gewählte Eindringling (S. 404) die Einsiedelei erreicht und ist bis zum Ummauerten Garten vorgedrungen. Er ist gekommen, um das Geheimnis des Tempels zu erlangen oder um Rache zu üben, und die Helden müssen entscheiden, wie sie mit ihm umgehen. Er kann von anderen desselben Profils begleitet werden (etwa als Gruppe Gleichrangiger) oder von Handlangern unterstützt werden. Der Einfluss der Lady ist fast gänzlich geschwunden, doch ein Fünkchen davon verweilt noch beim Tor der Absicht, der Heiligen Kammer oder der blattlosen Eiche — ein kluger Held mag versuchen, ihre Macht ein letztes Mal um Hilfe anzurufen.`,
    `<span class="callout"><span class="co-title">Wer ist es?</span>Habt ihr den Eindringling noch nicht enthüllt, lest „Wer ist es?" (siehe Szene „Sich der Einsiedelei nähern").</span>`,
    `<span class="section-heading">Die Einsiedelei bebt</span> Da der Saum der Lady endgültig versagt, beginnt ihre Einsiedelei einzustürzen; ohne magischen Beistand könnte sie nach so langer Zeit unter der Erde nicht länger intakt bleiben.`,
    `Die Helden können entweder durch die zerstörten Tunnel und Korridore zurückfliehen oder durch die neue, von den Eindringlingen geschaffene Öffnung. Obwohl sie ihr langjähriges Zuhause nur ungern verlassen, begleiten Scalagorry und die anderen hingebungsvollen Tiere die Helden und helfen, wo sie können.`,
  ],
  npcs:[],
  challenges:[
    { name:"THE FALL OF THE LADY'S TEMPLE", difficulty:3, type:"Countdown, Obstacle", subtitle:"Der Einsturz des Tempels der Lady — Grenzwerte COLLAPSE/ESCAPE",
      desc:`Da der Hem (Saum) der Lady endlich nachgibt, beginnt ihre Eremitage einzustürzen; ohne magische Hilfe könnte sie nach so langem Verschüttetsein nicht länger intakt bleiben.`,
      limits:[ { label:"COLLAPSE (Einstürzen)", max:6, note:"Alles und jeder, der noch darin ist, wird buried-6 (verschüttet-6)." }, { label:"ESCAPE (Entkommen)", max:5 } ],
      tags:[ "raining debris (herabregnende Trümmer)", "rubble-covered floor (schuttbedeckter Boden)", "collapsing-1 (einstürzend-1)" ],
      threats:[
        { name:"CRUMBLE (Bröckeln)", flavor:`Risse laufen die Wand und Decke hoch, lösen große Steine`, options:[ `Ein Stein trifft einen Helden (stunned-2/betäubt-2 oder hobbling-2/humpelnd-2)`, `Der Tempel wird weiter geschwächt (erhält collapsing-1/einstürzend-1)`, `Die Erschütterungen verstärken sich, bringen einen Helden zu Fall (off-balance-3/aus-dem-gleichgewicht-3)`, `Lose Fliesen lassen einen Helden hinstürzen (prone-2/am-boden-2), und er verliert etwas in der Dunkelheit (streiche einen Gegenstands-Tag)` ] },
        { name:"OBSTRUCT (Versperren)", flavor:`Trümmer regnen auf den Weg voraus herab`, options:[ `Direkt voraus stürzt die Wand nach innen ein, ein Haufen aus Stein und Erde`, `Eine Kluft öffnet sich, trennt die Gruppe (Komplikation)` ] },
      ],
      source:`Hearts of Ravensdale I, Themenbereich Challenges, S. 412`
    },
  ],
  revelations:[], rewards:[], tips:[
    "Spielt COLLAPSE und den Kampf gegen den Eindringling parallel/verzahnt — der Countdown sollte während der Konfrontation ticken, nicht erst danach beginnen.",
  ],
},

/* 7 -------------------------------------------------------- AFTERMATH */
{
  key:"aftermath", kind:"aftermath", page:"S. 413–414",
  title:"Aftermath", en:"Aftermath",
  summary:"Bilanz ziehen · optionaler Epilog „Der Krieg hat die Dales erreicht“ · Kampagnen-Abschluss",
  showImprovement:true,
  readAloud:[
    { page:"S. 414", label:"Optionaler Epilog — Der Krieg hat die Dales erreicht", after:0, text:
      `Die Nacht ist über Hartland hereingebrochen, und die Luft ist erfüllt vom Ruf der Spottdrosseln und Nachtigallen. Das Abendessen fällt karg aus, denn eure Herzen sind schwer. Der Saum der Lady lässt sich nicht mehr flicken. Das Wunder, das euer Heim vor den Gefahren der weiten Welt bewahrt hat, ist nicht mehr. Es ist an der Zeit, dass ihr, und alle Dalesleute, die Zügel eures eigenen Schicksals selbst in die Hand nehmt.

Während das Gespräch verstummt, bemerkt einer von euch ein rotorangenes Glühen am Horizont im Nordosten, in Richtung Underbough. Fackellichter flackern entlang eines Weges den Berghang hinab, zahlreich wie Sterne. Seltsam, dass so viele Menschen gemeinsam bei Nacht unterwegs sind … Dutzende und Aberdutzende von Menschen, das Geräusch ihrer stählernen Stiefel hallt durch die Hügel. In den kommenden Tagen kreuzen sich eure Wege mit Flüchtlingen aus den nordöstlichen Dales, verwirrt, zornig und verängstigt, die von einer gewaltigen Streitmacht aus Rittern und Kriegern berichten, die durch Underbough gefegt ist und Menschen zum Kriegsdienst gegen den Winterkönig zwingt. Es ist also wahr. Stormhelm, die Stadt-Königreich im Norden, hat eingefallen. Der Krieg hat die Dales erreicht.` },
  ],
  flow:[
    `Nachdem sie den Tempel der Lady verlassen haben, müssen die Helden sich mit dem auseinandersetzen, was sie über den Saum erfahren haben — dass die Schwierigkeiten, mit denen die Dales zu kämpfen haben, sich nur noch verschlimmern werden — oder mit dem Opfer, das sie bringen mussten.`,
    `<span class="section-heading">Nehmt euch einen Moment Zeit, um Bilanz zu ziehen über alles, was geschehen ist</span>
    <ul>
      <li>Wie hat die Wahrheit über den Saum der Lady die Helden beeinflusst? Erfüllt sie das mit Hoffnung? Mit Furcht?</li>
      <li>Wer trägt nun die Schätze der Lady bei sich?</li>
      <li>Ist die Queste der Gefährtenschaft, die Dales zu retten, abgeschlossen, oder fängt sie gerade erst an? Was sollte nun getan werden, um die Dales zu schützen?</li>
      <li>Was ist mit Scalagorry und seinen tierischen Gefährten geschehen? Lassen sie sich in den Wäldern Hartlands nieder, oder schließen sie sich vielleicht, inspiriert von den Helden, ihnen auf ihren weiteren Questen an?</li>
    </ul>`,
    `Spielt ihr dieses Abenteuer als Abschluss von <em>Wake of the Oldways</em>, geht weiter zu <span class="gloss" onclick="goAdventure('campaign-aftermath')">Campaign Aftermath</span> (S. 414).`,
    `<span class="section-heading">Optionaler Epilog: Der Krieg hat die Dales erreicht</span> Eine tragische, kampagnenabschließende Cliffhanger-Szene für dieses Abenteuer und die gesamte Reihe: Die Helden müssen sich mit der Realität abfinden, dass ihr Heim nicht länger von einer ungesehenen Macht beschützt wird und dass nun sie selbst die Verantwortung tragen, es zu schützen. Dies bereitet die nächste Reihe vor, denn bald erreichen unheilvolle Nachrichten von einem Aufruhr in den nördlichen Dales.`,
    `Gebt den Helden Gelegenheit, über ihre Gefühle und ihre Quests zu sprechen, angeregt durch die Fragen unter <span class="gloss" onclick="goAdventure('campaign-aftermath')">Personal Journeys</span> (S. 414). Dann: Ein rotorangenes Glühen erscheint am nordöstlichen Horizont nahe <strong><span class="gloss" onclick="openGloss('underbough')">Underbough</span></strong>. Flüchtlinge berichten bald, dass <strong>Stormhelm</strong> in die nordöstlichen Dales eingefallen ist und Menschen zwangsweise in seinen Krieg gegen den <span class="gloss" onclick="openGloss('winter-king')">Winterkönig</span> einzieht. Dies bereitet das nächste Kapitel der epischen Kampagne <em>Hearts of <span class="gloss" onclick="openGloss('ravensdale')">Ravensdale</span></em> vor.`,
    `<span class="callout"><span class="co-title">🌙 KAMPAGNEN-ABSCHLUSS — Rückblick-Fragen</span>
    <ul>
      <li>Wo begann die Reise jedes Helden? Wo endete sie? Wie sind sie gewachsen?</li>
      <li>Welche Freunde/Feinde haben die Helden gewonnen — werden sie später bedeutsam?</li>
      <li>Wie stehen die Helden zu den Dales, zur Außenwelt, zur Zukunft?</li>
      <li>Können die Helden je wieder zu einem langsamen, ländlichen Leben zurückkehren — wollen sie das überhaupt?</li>
    </ul></span>`,
    `<span class="callout"><span class="co-title">Zu klärende Fäden</span>SorrowBalms Suche nach verzauberten Edelsteinen; Walrics Schicksal nach dem Year Walk; Azerias Schicksal (von den Cloudbornes gefasst? bei <span class="gloss" onclick="openGloss('gajowy-ref')">Gajowy</span> geblieben? geflohen?); die Auflösung von <span class="gloss" onclick="openGloss('woodend')">Woodend</span>/der Green Maiden; Kerrids Schicksal und die Kawa-Allianz; wer den <span class="gloss" onclick="openGloss('barleytown')">Barleytown</span>-Bänder-Wettstreit gewonnen hat und wer nun die Stadt führt; ob/wie die Oldways weiterhin praktiziert werden und ob Praktizierende nun tiefere Thaumaturgie suchen.</span>`,
    `<strong>Hinweis zu den Epischen Geschichten:</strong> <em>Wake of the Oldways</em> endet mit der Wiederentdeckung der Verlorenen Einsiedelei und (optional) Stormhelms Invasion der nördlichen Dales. Das nächste Kapitel von <em>Hearts of Ravensdale</em> setzt hier an und schickt die Helden in eine Kampagne auf Abenteuer-Stufe, um die Dales zu retten.`,
  ],
  npcs:[],
  challenges:[],
  revelations:[], rewards:[], tips:[
    "Ende der Kampagne „Wake of the Oldways“ — siehe `Wake_of_the_Oldways_00_Rahmen.md` für das vollständige Enthüllungs-Orakel, die NSC-Übersicht und weitere Erzähler-Tipps.",
  ],
},

];
ADVENTURES.find(a=>a.id==="a7").scenes = A7_SCENES;
