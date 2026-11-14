/* ==================================================================
   ADVENTURE 6 — THE BARLEYTOWN FAIR
   ================================================================== */
const A6_SCENES = [
/* 0 ---------------------------------------------------------- INTRO */
{
  key:"intro", kind:"intro", page:"S. 388–389",
  title:"Überblick", en:"The Barleytown Fair",
  summary:"Hintergrund, Hooks & Szenenfolge",
  overview:[],
  readAloud:[
    { page:"S. 388", label:"Übergang/Eröffnung", text:
      `Dieses Jahr ist schwierig gewesen für die Dales. Das Wetter war rauer, die Straßen weniger sicher, und Gerüchte über Geschöpfe der Dämmerung machen die Runde. Die Dalesleute sind an schwere Jahreszeiten gewöhnt – sie gehören zum Leben dazu –, doch dieses Jahr liegt eine Ahnung von Wandel in der Luft. In solchen Zeiten ist die alljährliche Barleytown Fair, ein großes Fest der Freude und Lebenslust, umso wichtiger, um die Gemüter zu heben und den Zusammenhalt der Dalesgemeinschaft zu bekräftigen.

Doch so hell und hoffnungsvoll die Fair auch scheint, nicht jeder tritt ihr in gutem Glauben entgegen. Dieses Jahr ist, wie jedes Jahr, der Wettstreit um die Krone des Fair Monarch – verbunden mit dem Erhalt eines Erbstücks, das einst von der Lady der Dales selbst weitergereicht worden sein soll – ein Anziehungspunkt für ebenso törichte wie gefährliche Bewerber. Ein besonders skrupelloser Konkurrent hat sich eine Strategie zurechtgelegt, um um jeden Preis zu gewinnen…` },
  ],
  flow:[
    `<em>The Barleytown Fair ist ein ereigniszentriertes Abenteuer, das ein rustikales Erntefest voller Farbe und aufregender Wettbewerbe erkundet, während die Helden in der „großen Stadt" der Dales von sich reden machen. Für alle, die die Kampagne Wake of the Oldways spielen, ist dies zugleich der Moment, in dem alles, was die Helden in den Dales gelernt und erreicht haben, zusammenläuft und auf den Abschluss der Serie in <strong>The Lost Hermitage</strong> hinweist.</em>`,
    `<strong>Ort:</strong> <span class="gloss" onclick="openGloss('barleytown')">Barleytown</span> (S. 79), der zentrale Handelsknotenpunkt der Dales, über <strong>vier Festtage</strong>. Jeden Herbst strömen die Menschen aus den ganzen Dales hierher zum größten Fest der Saison — Barleytowns große Version des Harvest (S. 60). Bauern und Handwerker bringen Waren zum Verkauf, Besucher jeden Alters nehmen an Wettbewerben und Spielen teil. Für die Dalesleute ist die Fair ein Trinkspruch auf das Ende eines weiteren Jahres und ein letztes Hurra vor den stillen, einsamen Wintermonaten.`,
    `<span class="section-heading">Der Fair Monarch</span> Im Mittelpunkt des Festes steht ein Wettstreit um den Ehrentitel des Fair Monarch für ein Jahr, gekrönt mit dem <span class="gloss" onclick="openGloss('circlet-of-the-folkhearth')">Circlet of the Folkhearth</span>, einem schönen Reif und Erbstück, das seit undenklichen Zeiten von Dale zu Dale weitergereicht wird — und ein Band zur fernen Vergangenheit der Dales. Der Wettstreit wird von den Red Marshals unter Aufsicht des würdevollen, ergrauten <strong><span class="gloss" onclick="openGloss('marshal-rudol-ref')">Marshal Rudol</span></strong> ausgerichtet. Rudol entscheidet über das Fest und krönt den Fair Monarch mit Hilfe von <strong><span class="gloss" onclick="openGloss('daisy-woegold-ref')">Daisy Woegold</span></strong>, der Vorjahressiegerin aus <span class="gloss" onclick="openGloss('pasture')">Pasture</span>, die am letzten Tag mit dem Reif eintrifft.`,
    `Zum Sieg braucht es <span class="gloss" onclick="openGloss('red-ribbons')">Rote Bänder</span> — Preise, die bei Wettbewerben über das ganze Fest hinweg vergeben und stolz um den Körper gewickelt getragen werden. Rote Bänder lassen sich durch Wettstreite im Handwerk (Schmieden, Kochen usw.), im Können (Reiten, Geschichtenerzählen usw.) und im Glück gewinnen. Sie werden von den ehrenwerten Red Marshals gefertigt und bewacht, sodass Diebstahl oder Fälschung recht schwierig sind.`,
    `<span class="section-heading">Ein Anwärter erhebt sich</span> Viele Dalesleute treten bei jeder Fair um das Circlet an, aber nur eine Handvoll sammelt genug Rote Bänder, um eine echte Siegchance zu haben. Der derzeit aussichtsreichste Bewerber ist <strong><span class="gloss" onclick="openGloss('thane-codprice-ref')">Thane Codprice</span></strong>, ein schikanierender, verkommener Spross der <strong>Stillwaters</strong>, einer der fünf Gründerfamilien Barleytowns. Thane plant, sich durch Betrug die Krone zu erschleichen, um Gefolgsleute in Machtpositionen zu hieven und selbst Alderman zu werden — und damit den dazugehörigen Einfluss für sich zu beanspruchen.`,
    `<span class="section-heading">Verbindungen, Freunde und Feinde</span> Viele Menschen besuchen die Fair und verbreiten geflüsterte Neuigkeiten über wachsende Unruhe und Tragödien in der Region. Die Fellowship hat zahlreiche Gelegenheiten, Neuigkeiten und Gerüchte zu hören, wodurch sie den sich wandelnden Zustand der Dales besser versteht. Unter den Festbesuchern könnten sich Personen befinden, die an jüngeren Ereignissen in den Dales beteiligt waren, etwa <strong>Rosamund</strong> (<em>A Shadow in the Barley</em>), <strong><span class="gloss" onclick="openGloss('walric-hywell-ref')">Walric Hywell</span></strong> (<em>An Important Letter</em>), <strong><span class="gloss" onclick="openGloss('azeria-ref')">Azeria</span></strong> (<em>A Fox in the Dales</em>), <strong>Yule der Waldflüsterer</strong> (<em>The <span class="gloss" onclick="openGloss('painted-beast')">Painted Beast</span></em>), <strong>Jarko</strong> (<em>The Green Maiden</em>) und/oder jeder andere Verbündete, den die Fellowship auf ihrem Weg gewonnen hat. Diese Freunde könnten den Helden bei ihren Wettbewerben helfen — doch auch Feinde, die sie sich gemacht haben, könnten auftauchen.`,
    `<span class="callout"><span class="co-title">Das Circlet</span>Das <span class="gloss" onclick="openGloss('circlet-of-the-folkhearth')">Circlet of the Folkhearth</span> ist ein wunderbar gearbeiteter Kranz aus zusammengefügten silbernen Blüten, ein thaumaturgisches Relikt, das den Dalischen von den Gefolgsleuten der Lady der Dales hinterlassen wurde. Es ist ein Werkzeug, mit dem eine weise Anführerin ihrem Dale Wohlstand bringen kann — es lässt sich aber ebenso als politisches Machtinstrument missbrauchen.
<br><br>
Es kann helfen, die Verlorene Einsiedelei auf zwei Wegen zu finden: magisch, durch die Verwendung mit einem Wegweiser-Talisman, oder auf klügere Weise, indem man das Rätsel entziffert, das in seine Innenseite eingraviert ist und nur für jene mit der Sicht sichtbar ist. Es handelt sich um den berühmten <span class="gloss" onclick="openGloss('hartland')">Hartland</span>-Spruch: „Die Hoffnung beginnt dort, wo sich der Schwanz des Fuchses und die Ohren des Hasen begegnen" — ein Verweis auf den Ursprung der Bäche, die Hartlands Fox-See und Hare-See speisen (S. 86).</span>`,
    `<span class="section-heading">Die Versammlung der Weisen</span> Mehrere besorgte Weise Eine und andere Oldways-Praktizierende aus den ganzen Dales sind zum Fest gekommen, um sich über die jüngsten Schwierigkeiten zu beraten. Gemeinsam mit den Helden werden sie zu dem Schluss kommen, dass eine verlorene Schule der Thaumaturgie gefunden werden muss, von der aus die Oldways einst in die Dales getragen wurden — in der Hoffnung, den Grund für die wachsende Finsternis zu erfahren und sie aufzuhalten. Das Circlet of the Folkhearth, das an jener geheimnisvollen Schule entstand, ist entscheidend, um sie zu finden — was den Sieg beim diesjährigen Fest umso wichtiger macht. Um ihre Bemühungen zu durchkreuzen, wird ein Spitzel der <span class="gloss" onclick="openGloss('cold-hearted-cult')">Cold-Hearted</span> (<strong><span class="gloss" onclick="openGloss('verdan-ref')">Verdan</span></strong> aus „An Important Letter" oder ein anderer) versuchen, die Krone zu stehlen.`,
    `<span class="section-heading">Synopsis</span>Das Abenteuer dreht sich um die Ereignisse des Erntefests, das sich über vier Tage erstreckt, mit je einer oder zwei Szenen pro Tag.`,
    `<strong>Tag 1:</strong> Beim „Fair Entry" verkündet Marshal Rudol den Beginn des Fair-Monarch-Wettstreits, und die Helden haben Gelegenheit, von Thane Codprices Ränken zu erfahren. Am selben Tag beherbergt der „Fünf-Punkte-Markt" Stände von Händlern und Handwerkern und bietet die Gelegenheit, durch vorzügliches Handwerk Bänder zu gewinnen.`,
    `<strong>Tag 2:</strong> Bei „Ein Hog's Feast" nehmen die Wettkämpfer am ersten großen Ereignis der Fair teil — dem Wettessen —, und Thane versucht, sich seinen Sieg zu erschwindeln. An diesem Tag werden die Helden zudem zu einer „Versammlung der Oldways" gebeten, einem geheimen Treffen kundiger Oldways-Praktizierender, die sich um die Zukunft der Dales sorgen, und begegnen kurz Verdan, einem Spion des Winterkönigs, dessen Mission sich dem Ende zuneigt und dessen Loyalität auf Messers Schneide steht.`,
    `<strong>Tag 3:</strong> Am dritten Tag weitet sich der Wettstreit um Rote Bänder auf viele Glücks- und Geschicklichkeitsspiele aus („Slim Chances"), Geschichten- und Musikwettbewerbe („Tall Tales & Songs") und eine Mutprobe auf dem Friedhof („The Graveyard Vigil") — örtliche Lausbubenbanden sorgen dabei in Thanes Auftrag für Chaos.`,
    `<strong>Tag 4:</strong> Der vierte und letzte Tag der Fair bietet ein spektakuläres Ziegenrennen („A Day at the Races"), das mit der „Krönung des Monarchen" endet und dem Wettkämpfer mit den meisten Roten Bändern das Circlet of the Folkhearth verleiht. Sowohl Thane (als Wettkämpfer) als auch Verdan (als Dieb und Attentäter) versuchen, sich das Circlet zu sichern, was zu einem explosiven Finale führt.`,
  ],
  npcs:[],
  extra:{ heading:"Hooks", type:"list", items:[
    "Nach dem Hinweis aus The Green Maiden wird Barleytown als Ort vorgeschlagen, um bei all den weisen und tratschfreudigen Leuten, die dort vorbeikommen, nach der Wurzel bzw. Quelle der Oldways zu fragen.",
    "Walric Hywell, der nun seinen Year Walk abgeschlossen und aufregende neue Erkenntnisse gewonnen hat, möchte unbedingt die Helden treffen und schlägt die Barleytown Fair vor, wo er sich mit anderen Oldways-Praktizierenden trifft. Er schreibt ihnen einen Einladungsbrief.",
    "Die Helden werden von Marshal Rudol angesprochen, der sie bittet, am Wettstreit teilzunehmen. Ihm liegt Barleytown und die Integrität der Fair am Herzen, und er will sichergehen, dass Thane Codprice sich nicht durch Betrug in eine Führungsposition der Stadt mogelt.",
    "<span class=\"gloss\" onclick=\"openGloss('stillwater-family')\">Colin Stillwater</span> (S. 80), ein Mitglied von Barleytowns Elite, bittet die Fellowship, die Fair zu gewinnen, um seinen missratenen Cousin Thane Codprice am Sieg zu hindern.",
    "Ist ein Held Händler oder Handwerker, weiß er, dass die Zeit der Fair bald naht, und würde gerne teilnehmen, um seine Waren feilzubieten.",
  ]},
  extra2:{ heading:"Szenenfolge dieses Abenteuers", type:"list", items:[
    "1 · Tag 1 — Meet & Greet — Fair-Eröffnung, Thanes Plan, Fünf-Punkte-Markt",
    "2 · Tag 2 — Ein Hog's Feast — Wettessen gegen Thane",
    "3 · Rat der Oldways — geheime Versammlung, Kern-Enthüllungen 5 & 6, ein Spion belauscht",
    "4 · Tag 3 — Glücksspiele, Geschichten & Lieder, Die Totenwache",
    "5 · Tag 4 — Das Große Ziegenrennen & Krönung des Monarchen — Attentat auf das Circlet",
    "6 · Nachspiel & Belohnungen — Kern-Enthüllung 7",
  ]},
  challenges:[],
  revelations:[], rewards:[], tips:[],
},

/* 1 ---------------------------------------------------- TAG 1: MEET & GREET */
{
  key:"meet-greet", kind:"scene", page:"S. 389–393",
  title:"Tag 1 — Meet & Greet", en:"Day 1: Meet & Greet",
  summary:"Fair-Eröffnung · Thanes Plan · Fünf-Punkte-Markt",
  overview:[],
  readAloud:[
    { page:"S. 389", label:"Fair-Eröffnung", text:
      `Es gibt keinen Ort wie Barleytown in den ganzen Dales. Diese wohlhabende Stadt mit ihren hohen Häusern und tiefen Kanälen ist das Zentrum des dalischen Handels und Heimstatt der Red Marshals.

Heute ist Barleytown erfüllt von den Anblicken und Düften des größten Erntefests der Dales, der Fair! Kinder in Hexen-, Vogelscheuchen- und Gerstenbüschel-Kostümen laufen vorbei, während Buden mit Handarbeiten, Gebäck und Molkereiwaren die Straßen säumen. Die Stadt ist lebendig, verwirrend und aufregend zugleich … doch auch von Zögern erfüllt. Auf aller Lippen scheint eine unheilvolle Neuigkeit zu liegen, die von Tag zu Tag mehr Sorgen bereitet. Wird diese Fair fröhlich verlaufen? Wird sie die letzte sein?

Die Menge strömt zum überdachten Fünf-Punkte-Markt und trägt euch mit sich fort. Eine alte, gut erhaltene Holzbühne steht, geschmückt mit gewebten Bändern, zwischen zweien der fünf Langhäuser, die dem Markt seinen Namen geben. Auf der Bühne steht ein prächtig gekleideter Red Marshal, seine Stimme trägt über die wohl größte Menschenmenge, die ihr je gesehen habt – hier müssen Hunderte von Menschen versammelt sein!` },
    { page:"S. 393", label:"Fünf-Punkte-Markt", text:
      `Während die Fair mit feierlichen Hornstößen offiziell eröffnet wird, strömt alles zum Marktplatz wie Motten zum Licht. Jedes Dale scheint hier vertreten zu sein, mit Waren von höchster Qualität, ausgelegt auf Decken und Tischen unter bestickten Zeltdächern. Händler rufen euch zu, Düfte umschmeicheln euch, und das Gelächter und Necken der Festbesucher erfüllt die Luft. Und was ist das? Manche Händler bieten an, eure Waren zu kaufen – gegen ein Band für gute Handwerkskunst!`, after:4 },
  ],
  flow:[
    `<span class="gloss" onclick="openGloss('marshal-rudol-ref')">Marshal Rudol</span> steht vor der versammelten Menge, um den Beginn des Wettstreits zu verkünden. Er spricht mit inniger Liebe von <span class="gloss" onclick="openGloss('barleytown')">Barleytown</span> und seinen Bräuchen und lädt Besucher ein, sich hier niederzulassen und Teil der Gemeinschaft zu werden. Er erklärt die Regeln: An jedem Tag Rote Bänder durch Wettstreite sammeln, und am vierten Tag des Fests, nachdem jeder seine Chance erhalten hat, wird derjenige mit den meisten Bändern zum Fair Monarch gekrönt — mit dem sagenumwobenen <span class="gloss" onclick="openGloss('circlet-of-the-folkhearth')">Circlet of the Folkhearth</span>.`,
    `<span class="section-heading">Thanes Plan</span> Während Marshal Rudol seine lange, streckenweise ausschweifende Rede hält, lehnt eine Gruppe ortsansässiger Tunichtgute etwas abseits von den Helden an der Wand eines alten Gebäudes und raucht Pfeife. Es ist offensichtlich, dass diese Leute nichts Gutes im Schilde führen, denn sie mustern die Menge wie Raubtiere. In ihrer Mitte steht <strong><span class="gloss" onclick="openGloss('thane-codprice-ref')">Thane Codprice</span></strong>, eine in Barleytown nicht unbekannte Gestalt, dessen Blick wie gebannt auf dem Circlet ruht. Stadtbewohner in der Nähe, die ihn erkennen, wissen, dass sie besser wegsehen — niemand will Ärger mit Thane. Viele haben das Gerücht gehört, dass er dieses Jahr den Wettstreit gewinnen will, und wollen damit nichts zu tun haben. Er flüstert und scherzt mit seinen Spießgesellen, sinniert über Betrugsmöglichkeiten, während sie einen Flachmann mit einem zweifelhaften Getränk untereinander herumreichen. Versuchen die Helden zu lauschen, sind Thane und seine Spießgesellen alert-3, doch ein Erfolg kann Thanes betrügerische Methoden aufdecken, was den Helden helfen könnte, selbst zu schummeln oder Thanes Betrug später zu vereiteln.`,
    `Thane und seine Spießgesellen werden mit zunehmendem Alkoholkonsum weniger aufmerksam (alert sinkt), doch die dabei gewonnenen Informationen werden zugleich weniger brauchbar. Ist der Flachmann leer und der Status vollständig entfernt, zieht die Gruppe weiter und löst sich auf.`,
    `<span class="callout"><span class="co-title">Erzähler-Notiz — Und wenn es ein Raubzug wird?</span>Wollen die Helden die Roten Bänder für diesen Wettstreit schlicht stehlen, können sie das tun. Getragen werden sie während der Festtage von verschiedenen wary-and-alert-2 Händlern und Wettbewerbsleitern; manche davon lassen sich auch mit bribe-3 bestechen. Auf diese Weise lässt sich ein gutes Dutzend Bänder „verdienen". Es ist schwierig und gefährlich, aber möglich, die <span class="gloss" onclick="openGloss('red-marshals-ref')">Red Marshals</span> selbst zu bestehlen, die den Vorrat an Roten Bändern in ihrem Hauptquartier <span class="gloss" onclick="openGloss('fort-gherdorn')">Fort Gherdorn</span> (Inviolable Place, S. 248) bewachen — mit einer Kaserne voller Red Marshals (S. 265). Das Circlet selbst trifft erst am letzten Tag in Barleytown ein, behütet von der Vorjahressiegerin <span class="gloss" onclick="openGloss('daisy-woegold-ref')">Daisy Woegold</span>.</span>`,
    `<span class="section-heading" id="after-4">Fünf-Punkte-Markt</span> In dieser Szene besuchen die Helden den Hauptmarkt im Herzen Barleytowns, verstopft mit Händlern und Handwerkern aus allen Dales. Sie können sich unter die Dalesleute mischen und sich vergnügen — eine Erinnerung daran, was ihnen wichtig ist und was auf dem Spiel steht, sollte der Dalespeace scheitern. Barleytown ist ein Zentrum von Handel und Kultur, und der Markt ist selbst an einem gewöhnlichen Tag voller Waren aus den ganzen Dales; während der Fair ist der Markt in vollem Schwung, und wenn die Helden Waren, Vorräte oder Ausrüstung nachkaufen möchten, ist dies die beste Gelegenheit dafür. Sind sie selbst Händler oder Handwerker, bietet sich reichlich Gelegenheit, den eigenen Stand zu betreiben oder Berufskollegen zu treffen, um Tipps und Entwürfe auszutauschen.`,
    `<span class="section-heading">Handel gegen Bänder</span> Mehrere der bekanntesten Händler des Marktes wurden von Marshal Rudol für die Ehre ausgewählt, als Handwerksrichter zu fungieren. Sie prüfen die ihnen angebotenen, gut gefertigten Gegenstände, und wenn diese ihren hohen Ansprüchen genügen, wird der Handel angenommen und der Hersteller erhält ein Rotes Band. Ein Held muss dazu unter Umständen einen Händler mit impress-4 oder convince-4 überzeugen.`,
    `<span class="callout"><span class="co-title">Erzähler-Notiz — Rückwirkendes Handwerk</span>Da manche Handwerksaktionen einen Tag oder länger dauern könnten, kann man den Spielern erlauben, diese Aktionen rückwirkend durchzuführen: Der Held wusste vom Handelsmarkt und hat sein Produkt bereits im Voraus vorbereitet.</span>`,
    `<span class="section-heading">Wer das Kennzeichen (Tag) jedes Händlers herausfindet, verschafft sich einen Vorteil dabei, ihn zu beeindrucken:</span>
    <ul>
      <li><strong>Böttcherin Lisbeth</strong> ist eine Frau wie ein Fass, die mit Holzbehältern und Fahrzeugen aller Art handelt; sie spart weder mit Kritik noch mit Rat. Sie schätzt Zweckmäßigkeit.</li>
      <li><strong>Jamie Longwind</strong> ist ein berühmter Händler für Schmuck und Stickerei, ein geistlicher Führer des <span class="gloss" onclick="openGloss('peddlers-path')">Hausiererpfads</span> (S. 74). Selbst ein feinsinniger Kunsthandwerker von großem Können, soll er ein Auge für Feinheiten haben, das seinesgleichen sucht.</li>
      <li><strong>Küchenmeisterin Ostick</strong> ist fern-verwandt, von irgendwoher tief aus den Wanderlands. Interessiert an fremden Zutaten und ungewöhnlichen Gewürzen, gilt sie manchen als keine unparteiische Richterin über dalisches Kochgerät und dalische Küche.</li>
    </ul>`,
  ],
  npcs:[
    { name:"Marshal Rudol", role:"Würdevoller, ergrauter Ausrichter des Wettstreits", text:"Verkündet und leitet den Fair-Monarch-Wettstreit, krönt am letzten Tag mit Hilfe von Daisy Woegold. Ihm liegt Barleytowns Integrität am Herzen; er will verhindern, dass Thane Codprice sich durch Betrug in eine Führungsposition mogelt." },
    { name:"Thane Codprice", img:"thaneCodprice", role:"Aussichtsreichster (und betrügerischer) Bewerber um den Titel", text:"Schikanierender, verkommener Spross der Stillwaters, einer der fünf Gründerfamilien Barleytowns. Plant, sich durch Betrug die Krone zu erschleichen, um selbst Alderman zu werden. Groß, stolzer Gang, dicker Schnurrbart, herablassendes Grinsen. Wird angry-2, wenn sein Name absichtlich als „Codpiece“ ausgesprochen wird (Thanes wunder Punkt)." },
    { name:"Die lächelnde Eddina", role:"Müllerin aus Lastford (Kolorit)", text:"Kam mit einem großen bemalten Wagen zum Fest, in dem sie zusammen mit zwei Eichhörnchen lebt, die eher Partner als Haustiere zu sein scheinen." },
    { name:"Dullmie", role:"Jäger mit wildem Blick (Kolorit)", text:"Leise sprechend, verbirgt, dass er zur Familie Fogley gehört, weil er aus eigener Kraft gewinnen will." },
    { name:"Die Kombert-Zwillinge", role:"Gassenkinder aus Soddenmore (Kolorit)", text:"Haben bei einer kürzlichen Wette (oder einem Diebstahl) groß abgeräumt und wollen allen beweisen, dass sie kein Sumpfgesindel sind." },
    { name:"Böttcherin Lisbeth", after:6, role:"Handwerksrichterin — Holzbehälter & Fahrzeuge", text:"Eine Frau wie ein Fass, die mit Holzbehältern und Fahrzeugen aller Art handelt; sie spart weder mit Kritik noch mit Rat. Sie schätzt vor allem Zweckmäßigkeit." },
    { name:"Jamie Longwind", after:6, role:"Handwerksrichter — Schmuck & Stickerei", text:"Berühmter Händler für Schmuck und Stickerei, ein geistlicher Führer des <span class=\"gloss\" onclick=\"openGloss('peddlers-path')\">Hausiererpfads</span> (S. 74). Selbst ein feinsinniger Kunsthandwerker von großem Können, soll er ein Auge für Feinheiten haben, das seinesgleichen sucht." },
    { name:"Küchenmeisterin Ostick", after:6, role:"Handwerksrichterin — Kochgerät & Küche", text:"Fern-verwandt, von irgendwoher tief aus den Wanderlands. Interessiert an fremden Zutaten und ungewöhnlichen Gewürzen, gilt sie manchen als keine unparteiische Richterin über dalisches Kochgerät und dalische Küche." },
  ],
  challenges:[],
  revelations:[], rewards:[], tips:[],
},

/* 2 ---------------------------------------------------- TAG 2: HOG'S FEAST */
{
  key:"hogs-feast", kind:"scene", page:"S. 390, 394",
  title:"Tag 2 — Ein Hog's Feast", en:"Day 2: A Hog's Feast",
  summary:"Der große Wettessen-Wettstreit gegen Thane",
  overview:[],
  readAloud:[
    { page:"S. 390", label:"Ein Hog's Feast", text:
      `Der zweite Tag der Feierlichkeiten beginnt mit dem ersten großen Wettbewerb der Fair, dem sogenannten »Hog's Feast«: eine Gelegenheit, die Fülle der vergangenen Saison zu feiern, indem man sich mit köstlicher heimischer Küche den Bauch vollschlägt.

Auf dem Marktplatz sind mehrere lange Festtafeln Ende an Ende aneinandergereiht worden. Jede ist bedeckt mit Holztellern, Essmessern, Buttermilchbroten und allerlei dampfenden Speisen und kalten Aufschnitten. Mehrere große Töpfe enthalten würzige Gerstensuppe, dampfende Schwaden steigen in die morgendliche Luft, während sie in Keramikschalen geschöpft wird. Mägen knurren vor Hunger.` },
  ],
  flow:[
    `Der Hauptwettbewerb dieses Tages ist ein gewaltiger Wettessen-Wettstreit. <span class="gloss" onclick="openGloss('marshal-rudol-ref')">Marshal Rudol</span> hält eine lange, aufrichtige Rede über die Fülle der Ernte, während die Teilnehmer auf langen Bänken an den Festtafeln Platz nehmen.`,
    `Der Sieger erhält fünf Rote Bänder, doch es ist Brauch, ein oder zwei davon an jenen Mitbewerber zu verteilen, den man für „den Schweinigsten" hielt, oder an den eigenen Lieblingskoch. Alle übrigen Speisen werden anschließend unter dem Publikum verteilt.`,
  ],
  npcs:[
    { name:"Thane Codprice", img:"thaneCodprice", role:"Hauptkonkurrent beim Wettessen", text:"Setzt sich selbst regelmäßig food-consumed als Konsequenz (THANE EATS) — da er die Hauptkonkurrenz für die Helden ist, sollte diese Konsequenz häufig genug eingesetzt werden, um die Spannung aufzubauen." },
  ],
  challenges:[
    { name:"EATING CONTEST", difficulty:2, type:"Obstacle, Countdown", subtitle:"Fresswettbewerb",
      desc:`Der traditionelle Barleytown-Hog's-Feast-Wettbewerb ist ein üppiges Vier-Gänge-Menü, bei dem jeder Teilnehmer versuchen muss, die meisten Teller Essen zu verzehren (erhält sich selbst food-consumed/verzehrtes-essen). Während jeder Teilnehmer auch full (satt) wird, wird das Essen immer schwerer, bis ein Teilnehmer mit full-of-food-5 (voll-gegessen-5) nicht mehr weiteressen kann, sofern er keinen Weg findet, im Spiel zu bleiben.`,
      limits:[ { label:"COURSES (Gänge)", max:4, note:"Wer das höchste food-consumed (verzehrtes-essen) hat, gewinnt den Wettbewerb." } ],
      tags:[ "delicious food (köstliches Essen)", "crowded and loud (voll und laut)" ],
      threats:[
        { name:"GETTING FULL (Satt werden)", flavor:`Essensdüfte steigen aus Töpfen und von Tellern auf, und du isst noch einen weiteren Teller`, options:[ `Das Essen füllt deinen Bauch (full-1/satt-1)` ] },
        { name:"NEXT COURSE (Nächster Gang)", flavor:`Das Essen auf dem Tisch wird knapp`, options:[ `Ein weiterer Gang wird aufgetragen, und die Menge jubelt (course-1/gang-1)` ] },
        { name:"THANE EATS (Thane isst)", flavor:`Thane verlangt nach mehr Essen, schaut sich um, und unter den Tisch`, options:[ `Thane verzehrt einen weiteren vollen Teller, spült ihn mit starkem Getränk hinunter (erhält food-consumed-2/verzehrtes-essen-2, full-1/satt-1, und tipsy-1/beschwipst-1)`, `Thane verfüttert heimlich seinen Teller an einen Straßenhund, während sein Handlanger den Preisrichter ablenkt (food-consumed-2/verzehrtes-essen-2)`, `Thane erbricht heimlich etwas Essen in einen Eimer, den seine Handlanger mitgebracht haben (Thane verliert alle Stufen von full/satt und erzeugt smelly vomit/stinkendes-erbrochenes)` ] },
        { name:"FOOD FIGHT (Essensschlacht)", flavor:`Thanes Handlanger beginnen, dampfendes Essen umherzuschleudern`, options:[ `Ein Held wird mit einer üppigen Portion im Gesicht getroffen (covered-in-food-2/mit-essen-bedeckt-2)`, `Ein Held rutscht auf etwas Essen aus und fällt auf den Rücken (aching-1/schmerzend-1), und alle lachen (embarrassed-3/beschämt-3)` ] },
      ],
      source:`Wake of the Oldways — kampagnenspezifische Challenge, S. 394`
    },
  ],
  revelations:[], rewards:[], tips:[],
},

/* 3 ---------------------------------------------------- RAT DER OLDWAYS */
{
  key:"council-oldways", kind:"scene", page:"S. 394–395",
  title:"Rat der Oldways", en:"Council of the Oldways",
  summary:"Geheime Versammlung · Kern-Enthüllungen 5 & 6 · ein Spion belauscht",
  overview:[],
  readAloud:[
    { page:"S. 394", label:"Rat der Oldways", text:
      `»Da seid ihr ja, ihr elenden Gesellen!« Eine vertraute, raue Stimme ruft euch aus der Menge zu, gefolgt von der staubigen Gestalt eines Wanderers mittleren Alters – Walric Hywell. »Ich habe euch gerade noch rechtzeitig gefunden. Wir sind spät dran für ein Treffen von großer Bedeutung. Ich erzähle euch mehr, aber nicht hier.« Er blickt sich unsicher um. »Folgt mir.«

Bald seid ihr im ständigen Strom der Menschenmenge durch den Markt verschwunden, bis Walric in eine Seitengasse und eine Steintreppe hinabbiegt, die an einer Kellertür eines Stadthauses endet. »Hier hinein, schnell!«

Während sich eure Augen an den kerzenerleuchteten, verräucherten Raum gewöhnen, erkennt ihr eine Versammlung vertrauter Gesichter um eine schwere Werkbank herum, mit Mienen von warmer Vertrautheit bis hin zu gerunzelter Sorge. Unter ihnen seht ihr [Erzähler: nach Bedarf anpassen] Rosamund aus Ravensdale, Azeria aus Milkrest, Yule von Abnoba Keep und sogar Nochika vom Kawa-Klan. Walric stellt euch Etch vor, eine junge, wachsame Praktizierende aus Hartland, die ihren Igel Bogaan im Arm hält, sowie eine Hexe aus Barleytown, einen alten, faltigen Mann namens Ovistra.

»Nun sind wir alle hier. Fangen wir an. Wir haben uns versammelt, um über das Schwinden der Oldways zu sprechen.«` },
  ],
  flow:[
    `In dieser Szene tragen die Helden und die Weisen Einen der Dales alles zusammen, was sie über das Schwinden der Oldways in Erfahrung gebracht haben, und versuchen, eine Lösung zu finden. Der Rat bespricht, was die Anwesenden in den Dales beobachtet haben: Die Oldways scheinen zugleich bedeutsamer und wirkungsloser als je zuvor. Angriffe an den Rändern der Dales nehmen zu. Mächtige alte Flüche kehren zurück. Monstersichtungen werden erschreckend häufig. Das üble Gift der Sümpfe im fernen Süden dringt immer weiter nach Norden vor.`,
    `<span class="section-heading">Hier enthüllte Schlüssel-Erkenntnisse</span> Walric teilt seine Erkenntnis vom Year Walk: Es ist die <strong>Macht der Lady</strong>, nicht die Oldways selbst, die versagt; der Ursprung liegt bei der <strong>Verlorenen Einsiedelei</strong>, einer sagenumwobenen Schule der Thaumaturgie. Manche ältere Weise Eine bestätigen dies mit alten Legenden.`,
    `<span class="section-heading">Eine neue Aufgabe</span> Wo auch immer die Einsiedelei verborgen liegen mag, keiner der Anwesenden hat die Kraft oder den Mut, selbst danach zu suchen. Andere, wie <span class="gloss" onclick="openGloss('azeria-ref')">Azeria</span> oder <span class="gloss" onclick="openGloss('etch-res')">Etch</span>, würden zwar gerne helfen, sind aber mit eigenen Angelegenheiten beschäftigt oder müssen sich um den Schutz ihrer eigenen Dales kümmern. Die Versammlung blickt zu den Helden und überträgt ihnen diese heilige und lebenswichtige Aufgabe: die Verlorene Einsiedelei zu finden und die Macht der Lady zum Wohle aller Dalesleute wiederherzustellen.`,
    `<span class="section-heading">Ein verborgener Spion</span> Als die Versammlung endet, bemerkt einer der Helden, wie jemand von der Kellertür wegschleicht — offenbar hat die Person die Versammlung belauscht. Bevor die Gestalt in der Menge des Marktes verschwindet, dürfen die Helden eine Schnelle oder Ausführliche Handlung nutzen, um zu erkennen, ob es sich um das verzagte Gesicht von <span class="gloss" onclick="openGloss('cold-hearted-stabber-ref')">Verdan</span> (<em>An Important Letter</em>) und/oder den Attentäter handelt, der die Hütte der Weisen Einen angriff (<em>A Shadow in the Barley</em>).`,
    `<span class="section-heading">Wo ist die Verlorene Einsiedelei?</span> Gebt den Helden Zeit für Fragen und eine Zusammenfassung der bisherigen Enthüllungen — denkt daran, dass die Weisen Einen selbst nicht viel mehr wissen als die Helden. Gegenstände und Wissen, die sie auf ihren Reisen gesammelt haben, wie etwa <span class="gloss" onclick="openGloss('miloradas-storybook')">Miloradas Storybook</span> (S. 361), können dabei helfen. Besprochene Hinweise: keine lebende Erinnerung an ihren Standort; das Circlet soll der Lady gehört haben; ein Wegweiser-Talisman + eine Probe von der Einsiedelei könnte sie lokalisieren; die verborgene Inschrift des Circlets (nur mit der Sicht sichtbar) könnte ein Hinweis sein. Dies sollte die Helden darauf hinweisen, dass sie das Circlet gewinnen müssen. <strong>Azeria</strong> schenkt den Helden ein Rotes Band, um ihnen den Start zu erleichtern.`,
  ],
  npcs:[
    { name:"Walric Hywell", img:"walric", role:"Wanderer, der die Helden zum Rat holt", text:"Hat seinen Year Walk abgeschlossen und teilt seine zentrale Erkenntnis: Es ist die Macht der Lady, nicht die Oldways selbst, die versagt." },
    { name:"Etch", role:"Junge, wachsame Praktizierende aus Hartland", text:"Trägt ihren Igel Bogaan im Arm. Würde gerne bei der Suche nach der Einsiedelei helfen, ist aber mit eigenen Angelegenheiten beschäftigt." },
    { name:"Ovistra", role:"Alte, faltige Hexe aus Barleytown", text:"Teil des Rates der Oldways-Praktizierenden." },
    { name:"Rosamund, Azeria, Yule, Nochika", img:["rosamund","azeria"], role:"Bereits bekannte Verbündete (nach Bedarf anpassen)", text:"Je nach Kampagnenverlauf anwesend: Rosamund aus Ravensdale (A1), Azeria aus Milkrest (A3), Yule von Abnoba Keep (A5), Nochika vom Kawa-Klan (A5, sofern sie mit den Helden reiste)." },
  ],
  challenges:[],
  revelations:[
    { kind:"Core", ref:"2", text:"Etwas, das die Dales seit Jahrhunderten vor äußeren Mächten geschützt hat, schwindet. (bekräftigt)" },
    { kind:"Core", ref:"5", text:"Es ist die Macht der Lady, die die Dales beschützt hat — doch sie versagt." },
    { kind:"Core", ref:"6", text:"Die Wurzeln der Oldways zu finden könnte ein Weg sein, den Schutz über den Dales wiederherzustellen." },
  ],
  rewards:[ "Azeria schenkt den Helden ein Rotes Band." ],
  tips:[],
},

/* 4 -------------------------------------- TAG 3: SPIELE, LIEDER, TOTENWACHE */
{
  key:"day3-games-songs-vigil", kind:"scene", page:"S. 396–398",
  title:"Tag 3 — Glücksspiele, Geschichten & Lieder, Die Totenwache", en:"Day 3: Games of Chance, Tales & Songs, The Graveyard Vigil",
  summary:"Drei optionale Wettbewerbe · die Bad Apples · Thanes Auftritte",
  overview:[],
  readAloud:[
    { page:"S. 396", label:"Glücksspiele", text:
      `Während der dritte Tag der Fair beginnt, hat sich der Markt erneut verwandelt. Die verschiedenen Stände und Zelte auf dem Stadtplatz sind zu jahrmarktartigen Glücks- und Geschicklichkeitsspielen umgebaut worden, mit Familien und Gruppen von Feiernden, die von einem Stand zum nächsten ziehen und einander bei Glück und Missgeschick anfeuern. Kinder rennen jedem zwischen den Beinen umher.

Viele der Spiele sind nur zum Vergnügen da, doch die schwierigsten unter ihnen verleihen Rote Bänder!` },
    { page:"S. 397", label:"Geschichten & Lieder", after:1, text:
      `Am Nachmittag versammeln sich die Stadt und ihre vielen Besucher auf dem Marktplatz für den nächsten Wettbewerb: einen Schlagabtausch der Worte. Menschenmengen bilden sich um mehrere hölzerne Bühnen, umgeben von Essensständen und Straßenmusikanten, die die Versammlung für sich nutzen. Gelächter liegt in der Luft, ebenso wie Vorfreude.

Jene, die viele Rote Bänder gesammelt haben, machen sich bereit, gurgeln Essig und summen Oldways-Melodien. Thane Codprice steht in all seiner Pracht da, in einem maßgeschneiderten purpurnen Samtwams und frisiertem Haar, ein selbstgefälliges Lächeln auf den Lippen.` },
    { page:"S. 398", label:"Die Totenwache", after:2, text:
      `Am Abend werden die vielversprechendsten Kandidaten für den Fair Monarch die Hügel hinter Barleytown hinaufgeführt, zu einem alten Friedhof auf einem noch älteren, von Menschenhand errichteten Grabhügel. Die Lichter der Stadt darunter verschwinden in einem Dunst, während sich Nebel um euch legt und die Fair mit einem Mal Welten entfernt erscheint.

»Diese Nacht soll die Spreu vom Weizen trennen«, sagt Marshal Rudol, stehend neben einem alternden Bone-Tender in dämmerfarbener Kleidung. Ein Wolf heult in der Ferne, und eine Schar Krähen fliegt aufgeschreckt in die Herbstnacht empor.` },
  ],
  flow:[
    `<span class="section-heading">Glücksspiele</span> Dies ist ein Tag der Glücks- und Geschicklichkeitsspiele, von denen viele entweder etwas Glück oder gutes Auge-Hand-Koordinationsvermögen erfordern. Es gibt Dutzende Spiele zur Auswahl, alle knifflig und unter dem Druck der Menge zu absolvieren (Schnelle Handlung). Wer drei Spiele gewinnt, erhält ein Rotes Band.`,
    `<span class="callout"><span class="co-title">Spiele des Glücks und Geschicks</span><span class="gloss" onclick="openGloss('cobblebones')">Kopfsteinwürfel-Turnier</span> (S. 67) · Messerwerfen (wer dem Ziel am nächsten kommt) · Steinschleudern auf ein Rotes Band im Baum (gewinnt, wer trifft) · Bohnenwurf (in eine enge Flasche) · Apfeltauchen (mit gefesselten Händen in einem Eimer suchen) · Schweinerufen (das Schwein zum Herankommen bringen) · Apfelweinbecher schätzen (Volumen schätzen) · Rübenkegeln (hölzerne Kegel umwerfen) · Nussschalenspiel (den Stein finden) · Vogelscheuchen-Ankleiden (Modewettbewerb) · Ziegenhüten (schwerer, als es aussieht) · Knotenwettbewerb (Knoten auf Zeit) · Tauziehen (Team mit dem stärkeren Anführer gewinnt).</span>`,
    `<span class="callout"><span class="co-title">Erzähler-Notiz — Zusätzliche Hilfe</span>Stehen die Helden auf gutem Fuß mit <span class="gloss" onclick="openGloss('azeria-ref')">Azeria</span>, kann sie der Gelegenheit nicht widerstehen, ihnen mit ein wenig eigenem Unfug zu helfen. Sie kann die „Bad Apples" untergraben oder den Helden sogar ein paar zusätzliche Rote Bänder verschaffen.</span>`,
    `<span class="section-heading">Die Bad Apples</span> Zwischen den Spiel- und Verkaufsständen treiben sich Halbwüchsige umher, in <span class="gloss" onclick="openGloss('barleytown')">Barleytown</span> bekannt als die <span class="gloss" onclick="openGloss('masked-rascals')">Bad Apples</span> — eine Bande unter der Führung des gewalttätigen Jungen <strong>Sid</strong>. Diese Rabauken eifern Thanes Gefolgsleuten nach und hoffen, eines Tages deren Ruf zu erreichen. Thanes Spießgesellen haben sich das zunutze gemacht und den Bad Apples die Aufgabe übertragen, die Händler abzulenken, während sie versuchen, Rote Bänder zu stehlen.`,
    `<span class="section-heading" id="after-1">Geschichten & Lieder</span> Der Geschichten- und Liederwettbewerb ist eines der Herzstücke des Fests. Die Händler sind in vollem Schwung, auswärtige Leute strömen herein, und alle scheinen gespannt darauf, was als Nächstes geschieht. Zwar kann technisch jeder am abschließenden Wettbewerb teilnehmen, doch alle Blicke richten sich auf jene mit den meisten Roten Bändern — sie treten planmäßig als Letzte auf der überdachten Bühne auf, die auf dem Platz errichtet wurde.`,
    `<span class="section-heading">Geschichten erzählen</span> Im ersten Teil des Wettbewerbs wird von den Teilnehmern erwartet, eine heroische Geschichte, eine warnende Geschichte oder eine hohe Geschichte zu erzählen. Diese Geschichten müssen nicht wahr sein, sollten sich aber „wahr" anfühlen (oder zumindest nicht übertrieben wirken) und dalische bzw. Oldways-Werte widerspiegeln (siehe „<span class="gloss" onclick="openGloss('what-dalish-value')">What the Dalish Value</span>", S. 55). Die Menge liebt hohe Geschichten, und ein Erfolg bringt einem Helden ein Rotes Band ein — oder drei, wenn die Geschichte den meisten Applaus erhält.`,
    `<span class="gloss" onclick="openGloss('thane-codprice-ref')">Thane Codprice</span> erzählt die Geschichte seiner mütterlichen Familie (<span class="gloss" onclick="openGloss('stillwater-family')">die Stillwaters</span>, S. 80), die angeblich bei der Gründung Barleytowns half. Seine Erzählung zeichnet das Bild einer fleißigen Familie einfacher Bauern, die das Land bestellten und letztlich gwyrdolanischen Ingenieuren halfen, Barleytowns charakteristisches Kanalsystem zu errichten. Abgesehen davon, dass sie frei erfunden ist, hat die Geschichte keinen anderen Zweck, als den Namen der Familie Stillwater zu verherrlichen — sie erinnert die Zuhörer aber auch daran, wie gut vernetzt Thane ist. Wer die Gerüchte über die Stillwaters kennt, kann seinen Auftritt mit einem einzigen, gut getimten Zwischenruf zunichtemachen.`,
    `<span class="section-heading">Lieder spielen</span> Schließlich, wenn der Nachmittag in die Dämmerung übergeht, beginnt der Musikwettbewerb. Thane und seine Spießgesellen betreten die Bühne, um auf diversen teuren Instrumenten zu spielen, die sie in den letzten Monaten gestohlen haben — wobei Thane laut auf der Laute spielt. Nutzt den Rival Bard (ohne den Adventure-Aspekt), um Thanes Band im Wettbewerb darzustellen, falls die Fellowship gegen ihn antritt. Wer die Bewunderung der Menge gewinnt, erhält zwei Rote Bänder von <span class="gloss" onclick="openGloss('marshal-rudol-ref')">Marshal Rudol</span>; für den zweiten Platz gibt es keinen Preis.`,
    `<span class="callout"><span class="co-title">Erzähler-Notiz — Auf einer wahren Begebenheit beruhend</span>Erzählt ein Held eine Geschichte, die auf einem früheren Abenteuer der Kampagne beruht, kommt ihm zugute, dass sie wahr ist. Allerdings muss er vielleicht etwas ausschmücken, wenn er zugleich von der Vorliebe der Menge für Seemannsgarn profitieren will!</span>`,
    `<span class="section-heading" id="after-2">Die Totenwache</span> Marshal Rudol sorgt sich stets, dass ein Unwürdiger Zugang zum Circlet erlangen und ein Jahr lang als despotischer Fair Monarch der Gemeinschaft Probleme bereiten könnte. Kaum jemand sonst nimmt den zeremoniellen Titel so ernst, doch <span class="gloss" onclick="openGloss('bone-tender-filias-ref')">Bone-Tender Filias</span> hat in den letzten Jahren angeboten, daraus einen Wettbewerb zu machen, bei dem man eine Nacht zwischen den uralten Gräbern verbringt — auch wenn er dies eigentlich tut, um künftige <span class="gloss" onclick="openGloss('bone-tenders')">Bone-Tender</span>-Kandidaten zu finden.`,
    `Wie üblich ist auch Thane Codprice mit einigen seiner Gefolgsleute zugegen. Auch andere Mitglieder der Gemeinde und weitere Wettbewerber haben sich eingefunden und steigen feierlich die steinernen Stufen zur Spitze des Grabhügels hinauf.`,
    `Von den Helden und ihren Mitstreitern wird erwartet, dass sie die ganze Nacht ausharren, egal was sie auf dem Friedhof sehen oder hören. Mit der Zeit wird es leicht, sleepy-2 zu werden, doch man muss dagegen ankämpfen, wach zu bleiben. Codprices Spießgesellen erzählen gruselige Geschichten, und hin und wieder erklingen unheimliche nächtliche Geräusche aus der Umgebung, die einen Helden frightened-2 machen können.`,
    `Wer die Nacht „übersteht", ohne merklich einzuschlafen oder vom Grabhügel zu fliehen, erhält von Marshal Rudol drei Rote Bänder. Anschließend dürfen sie sich schlafen legen, da das Hauptereignis des letzten Tages erst am Nachmittag beginnt.`,
    `<span class="callout"><span class="co-title">Optionale Mitternachtsgefahr</span>Ein <strong>Dolmen Dirger</strong> (S. 279) entsteigt einem Cairn in der Mitte des Friedhofs — Filias wird sein Bestes tun, um ihn zur Ruhe zu betten, doch dies könnte auch die Gelegenheit der Helden sein, zu glänzen.</span>`,
  ],
  npcs:[
    { name:"Sid", role:"Anführer der Bad Apples", text:"Gewalttätiger Junge, der eine Bande Halbwüchsiger anführt, die Thanes Gefolgsleuten nacheifern und in dessen Auftrag Händler ablenken." },
    { name:"Bone-Tender Filias", role:"Alternder Bone-Tender, richtet die Totenwache aus", text:"Bietet die nächtliche Mutprobe seit Jahren als Wettbewerb an — eigentlich, um künftige Bone-Tender-Kandidaten zu finden. Versucht einen erscheinenden Dolmen Dirger zur Ruhe zu betten." },
  ],
  challenges:[
    { name:"RIVAL BARD", difficulty:4, type:"Countdown, Influence", subtitle:"Rivalisierender Barde — stellt Thanes Band beim Liederwettbewerb dar",
      desc:`Oh, du glaubst, du bist ein talentierter Unterhalter? Der Rivalisierende Barde würde da widersprechen, guter Herr, gute Dame, oder anderes. Lieder werden über die Lieder gesungen, die er singt. Wenn du nicht aufpasst, fordert er dich zu einer Battle of the Bards (Bardenschlacht) heraus, und du wirst es bereuen. Beginnt eine Battle of the Bards, hat jeder Teilnehmer ein outplay-4-Limit (übertrumpfen-4), und wer es zuerst maxt, gewinnt.`,
      limits:[ { label:"SUBDUE (Bezwingen)", max:3 }, { label:"DRIVE OUT OF TOWN (Aus der Stadt vertreiben)", max:4 }, { label:"OUTPLAY (Übertrumpfen)", max:4, note:"Der Sieger wird famous-3 (berühmt-3) und der Veranstaltungsort schenkt ihm eine unvergessliche Feiernacht. Der Verlierer wird ridiculed-3 (lächerlich-gemacht-3)." } ],
      tags:[ "impressive instrument (beeindruckendes Instrument)", "remarkable talent (bemerkenswertes Talent)", "huge-ego-3 (riesiges-ego-3)", "well-loved-2 (beliebt-2)", "Famous entertainer (Berühmter Unterhalter) — Vulnerability: skandalöses Geheimnis" ],
      threats:[
        { name:"BRAG (Prahlen)", flavor:`„Ich bin der beste Barde diesseits des Flusses…"`, options:[ `Spielt ein kleines Liedchen, um sein Können zu beweisen (gibt impressed-2/beeindruckt-2)`, `Spinnt eine Geschichte voller Unwahrheiten und Andeutungen (gibt goaded-to-[Aktion]-2/angestachelt-zu-[aktion]-2)`, `Fordert einen Unterhalter zu einem Wettstreit heraus (gibt pride-on-the-line-2/stolz-auf-dem-spiel-2 und beginnt eine Battle of the Bards)` ] },
        { name:"BATTLE OF THE BARDS (Bardenschlacht)", flavor:`Beginnt wunderschön zu spielen und singt ein bekanntes Trinklied`, options:[ `Spielt ein Lied von Leid und Verlust (outplay-2/übertrumpfen-2 und macht das Publikum sad-1/traurig-1)`, `Spielt ein Lied der Freude (outplay-2/übertrumpfen-2 und macht das Publikum distracted-1/abgelenkt-1)`, `Spielt ein grandioses Solo (outplay-2/übertrumpfen-2 und macht das Publikum impressed-2/beeindruckt-2)`, `Streut in der Menge das Gerücht, sein Konkurrent betrüge oder sei verdorben (übles Gerücht)` ] },
      ],
      source:`Core Book, Kapitel V — Town & City, S. 165`
    },
    { name:"MASKED RASCALS", difficulty:2, type:"Quarry, Sapper", subtitle:"Die Bad Apples — Sid & seine Bande",
      desc:`Trotz von hoch angesehenen Dalespeople aufgezogen zu werden, finden manche Jugendliche dennoch ein Ventil in Unfug und Chaos. Diese Heranwachsenden führen nichts Gutes im Schilde, tragen Masken unter dem Schutz der Nacht, um heimtückische Streiche an ahnungslosen Dorfbewohnern zu spielen. Selbst wenn erwischt oder verdächtigt, werden ihre Eltern stets zu ihrer Verteidigung eilen und behaupten, ihre „kleinen Engel würden so etwas nie tun".`,
      limits:[ { label:"SCARE (Erschrecken)", max:3 }, { label:"CONVINCE (Überzeugen)", max:3 }, { label:"CATCH OR ESCAPE (Fangen oder Entkommen)", max:3 } ],
      tags:[ "favored children (bevorzugte Kinder)", "masked faces (maskierte Gesichter)", "practiced liars (geübte Lügner)", "sticky trap / farting cushion / irritating powder / rotten egg slingshot (klebrige Falle/Pupskissen/reizendes Pulver/Faulei-Schleuder)", "mischievous-2 (schelmisch-2)" ],
      threats:[
        { name:"PRANK (Streich)", flavor:`Kichern hinterhältig, während sie ihren nächsten Streich aushecken`, options:[ `Zielen mit einem nervigen, aber harmlosen Streich auf jemanden (annoyed-2/genervt-2, embarrassed-2/beschämt-2, tripped-2/gestolpert-2, stinky-2/stinkend-2, oder spooked-2/aufgeschreckt-2)`, `Schnappen sich etwas, das ihre Aufmerksamkeit erregt hat (streiche einen Gegenstands-Tag)`, `Ihr Trick geht schief, verletzt sie selbst oder andere (grazed-1/gestreift-1 oder bruised-2/gequetscht-2)`, `Verärgern das falsche Ziel (Neue Challenge: Bedrohliches Haustier oder Fluchesser)` ] },
        { name:"LIE (Lügen)", flavor:`Geben den Helden die Schuld an einem Streich, den sie selbst gerade gespielt haben`, options:[ `Man glaubt ihnen (Komplikation)`, `Behaupten Dinge, die nie geschahen, stolz und mit unschuldiger Miene (reduziert convinced/überzeugt auf einer anderen Challenge um 1 Stufe)` ] },
        { name:"SCATTER (Zerstreuen)", flavor:`Beginnen wegzurennen, teilen sich in mehrere Gruppen auf`, options:[ `Rennen durch Pfade, die sie sehr gut kennen (erhält escaping-1/entkommend-1 und fügt matschige-hänge, dichtes-laub, oder karren-im-weg hinzu)`, `Entkommen in jemandes Haus, oder durch eine zu enge Lücke (Blockiert)`, `Ihre Eltern kommen, um sie zu verteidigen (Neue Challenge: Gemeiner Dorfbewohner oder Angesehener Ältester)` ] },
      ],
      source:`Hearts of Ravensdale I, Themenbereich Dalish Village, S. 249`
    },
    { name:"DOLMEN DIRGER", difficulty:3, type:"Aggressor", subtitle:"Dolmen-Klagegeist — optionale Mitternachtsgefahr während der Totenwache",
      desc:`Ein verfluchter Geist aus alter Zeit, der mit großem Bedauern starb, erhebt sich nun aus seinem Grabhügel und singt sein Totenlied, um die Herzen der Lebenden mit seelenzerreißender Trauer zu erfüllen. Einfache Leute können nur hoffen, den Geist vorübergehend zu appease (besänftigen), indem sie seinen Tod ehren, und dann um ihr Leben fliehen. Bone Tenders wissen, mit dem Twilight Lullaby (Dämmerwiegenlied) oder anderen Listen diese Geister für einen Mond oder eine Jahreszeit lay to rest (zur Ruhe zu betten).`,
      limits:[ { label:"HARM", max:0, note:"Kein direkter Schadens-Limit — der Dirger wirkt über Furcht und Trauer." }, { label:"APPEASE (Besänftigen)", max:4 }, { label:"LAY TO REST (Zur Ruhe betten)", max:3 } ],
      tags:[ "haunting voice (heimsuchende Stimme)", "grief-stricken-2 (trauergebeugt-2)" ],
      special:[ { title:"VERBANNUNG & REINIGUNG", text:`Ein Dirger kann nur banished-3 (verbannt-3) werden, wenn er seine Grabstätte verlässt. Nur die Reinigung der cursed-5 (verfluchten-5) Grabstätte selbst kann ihn dauerhaft zerstören — das übersteigt die Macht der meisten Dalish-Praktizierenden. Bone-Tender Filias versucht, ihn mit dem Twilight Lullaby zur Ruhe zu betten.` } ],
      threats:[ { name:"HAUNT (Heimsuchen)", flavor:`Starrt die Lebenden mit leblosen, nur von Trauer erfüllten Augen an`, options:[ `Klagt mit einer echoenden, jenseitigen Stimme (broken-heart-3/gebrochenes-herz-3 oder hopeless-3/hoffnungslos-3 für alle Zuhörer)`, `Stößt einen Schrei aus, der Herzen mit Schrecken durchdringt (petrified-2/versteinert-2 für alle Zuhörer)`, `Schwebt über einem Lebenden, öffnet sein Maul, um an seiner Seele zu zehren (drained-of-life-2/lebenskraft-entzogen-2)`, `Flackert zwischen sterblicher und geistiger Welt (erhält barely-visible-2/kaum-sichtbar-2)`, `Stört weitere Geister in der Nähe, falls vorhanden (wird zu einer Procession/Prozession)` ] } ],
      source:`Hearts of Ravensdale I, Themenbereich Ruins of Gwyrdolin, S. 279`
    },
  ],
  revelations:[], rewards:[], tips:[],
},

/* 5 -------------------------------------- TAG 4: GOAT RACE & KRÖNUNG */
{
  key:"goat-race-crowning", kind:"scene", page:"S. 398–400",
  title:"Tag 4 — Das Große Ziegenrennen & Krönung des Monarchen", en:"Day 4: The Great Goat Race & Crowning of the Monarch",
  summary:"Finale: Ziegenrennen · Attentat auf das Circlet · Krönung",
  overview:[],
  readAloud:[
    { page:"S. 398", label:"Das Große Ziegenrennen", text:
      `Heute ist der letzte Tag der Fair und der Tag ihres größten Wettbewerbs. Nach einer Nacht voller Ausschweifung (oder einer Totenwache auf dem Friedhof) fallen die Strahlen der Mittagssonne auf den erneut umgestalteten Marktplatz im Herzen der Stadt, diesmal verwandelt in einen improvisierten Pferch. Beißende Gerüche und meckernde Ziegenlaute erfüllen die morgendliche Luft, während sich die verschiedenen Teilnehmer in die Schlange für das große Ziegenrennen des Tages einreihen. »Ich hab dir doch gesagt, du sollst nicht frühstücken«, sagt einer zum anderen, während der Ansturm auf die Sinne wohl manchem den Magen umdrehen könnte – ganz zu schweigen von dem heranrasenden Chaos aus drängelndem Vieh, das den Reitern bevorsteht. Wie immer steht Marshal Rudol schon bereit und mahnt die wachsende Menge, fair zu spielen und ihre Reitziege gut zu behandeln.` },
    { page:"S. 400", label:"Nachspiel — nach dem Rennen", after:5, text:
      `Nach der Aufregung des Rennens versammelt sich eine ansehnliche Menge aus Barleytownern und Auswärtigen an der Bühne, während Marshal Rudol emporsteigt und alle Teilnehmer auffordert, sich mit ihren Bändern zu präsentieren. Die Wettbewerber, die welche tragen, klettern hinauf, um zu zeigen, wie gut sie beim Fest abgeschnitten haben. Der Marshal beginnt daraufhin mit dem Zählen, während Daisy Woegold, die Vorjahressiegerin, den Vorsitz führt.` },
  ],
  flow:[
    `<span class="section-heading">Das Große Ziegenrennen</span> In dieser Szene werden die Helden ermutigt, am „Großen Ziegenrennen" teilzunehmen, einem Wettbewerb auf dem Rücken von <span class="gloss" onclick="openGloss('milkrest')">Milkrest</span>-Reitziegen. Der Sieger gewinnt zehn Rote Bänder — genug, um die gesamte Fair noch offen zu halten —, der zweite Platz erhält drei Bänder.`,
    `<span class="section-heading">In der Schlange für eine Ziege</span> <span class="gloss" onclick="openGloss('marshal-rudol-ref')">Marshal Rudol</span> verkündet, dass der Wettbewerb eröffnet ist und angehende Rennfahrer sich am improvisierten Ziegenpferch anstellen sollen. Wie üblich steht <span class="gloss" onclick="openGloss('thane-codprice-ref')">Thane Codprice</span> mit seinen Spießgesellen in der Schlange, und es gelingt ihnen, den Hirten zu bestechen, damit jeder von ihnen eine muskulöse Ziege erhält.`,
    `Folgende Ziegen mit den jeweiligen Merkmalen stehen zur Auswahl: alternde Ziege (robust/starker Tritt/stur), feine Ziege (kunstvoller Sattel/gut trainiert/dumm), unheilvolle Ziege (unheimliche Präsenz/überraschende Schnelligkeit/Trancezustand), lebhafte Ziege (drahtig/aufmerksam/zu neugierig).`,
    `<span class="section-heading">Das Circlet ist da!</span> Sobald alle bereit sind, werden die Herausforderer und ihre Reittiere zu einem stillgelegten, trockenen Abschnitt der eingesenkten Kanäle geführt, über dem bereits eine Menge Zuschauer wartet. Die jubelnde Menge wird bereits ausgelassen, mit Hollern und Pfiffen aus ihren Reihen.`,
    `Plötzlich sieht man oben auf einem eigens für die Veranstaltung errichteten Podest, wie Marshal Rudol behutsam die kürzlich eingetroffene <strong><span class="gloss" onclick="openGloss('daisy-woegold-ref')">Daisy Woegold</span></strong> zu ihrem Sitz geleitet, eine freundliche Frau in einem weiten Kleid, das verrät, dass sie schwanger ist. Auf ihrem Kopf funkelt ein Kranz aus reinem Silber — das <span class="gloss" onclick="openGloss('circlet-of-the-folkhearth')">Circlet of the Folkhearth</span>! Die Menge jubelt ihrem geliebten Fair Monarch und dem Sinnbild der Dales zu, hingerissen vor Aufregung. Daisy hebt die Hand, bereit, das Rennen zu eröffnen.`,
    `<span class="section-heading">Kanalschlag</span> Aus dem Schatten eines nahen Gebäudes beobachtet eine vermummte Gestalt aufmerksam das Geschehen. Er weiß, dass ohne das Circlet die Chancen der Dalesleute, den magischen Schutz über ihr Land zu bewahren, gering sind, und er weiß, dass sein Herr es verschwunden sehen will, also bereitet er sich darauf vor, zuzuschlagen, sobald alle Aufmerksamkeit auf das Rennen gerichtet ist. Im letzten Moment zieht er einen langen Stahldolch. Nutzt diese Bedrohung: Ein Blitzen von Metall funkelt am Rand des Blickfelds, irgendwo hoch auf Barleytowns Dächern…`,
    `Der Attentäter (standardmäßig: <strong><span class="gloss" onclick="openGloss('verdan-ref')">Verdan</span></strong>, Profil „<span class="gloss" onclick="openGloss('cold-hearted-stabber-ref')">Cold-Hearted Stabber</span>“, S. 264 — oder ein Ersatz, falls Verdans Schicksal abwich) hält sich angesichts des hohen Einsatzes nicht zurück und könnte seine Phiole mit <span class="gloss" onclick="openGloss('fondness-end')">Fondness' End</span> zerschmettern, um eine widernatürliche Welle vernichtender Frostdämpfe zu entfesseln, einen kleinen Vorgeschmack auf die Bösartigkeit des Winterkönig (frozen-solid-6 für alle in der Nähe).`,
    `Diese Begegnung könnte als offener Kampf verlaufen, besonders wenn die Helden sich Verdan zuvor nicht angefreundet haben. Haben die Helden Verdan freundlich behandelt, ist er hin- und hergerissen. Reduziert seinen cold-hearted-Status vorübergehend um die Anzahl der Stufen an freundlichen emotionalen Status-Effekten, die ihm die Helden verliehen haben (oder schätzt ab, wie sehr sie sein Herz berührt haben). Setzt sich diese Freundlichkeit und Fürsorge fort, sinkt der cold-hearted-Status (Polar-Status) weiter und beginnt, auf sein <strong>warmed-up-5</strong> angerechnet zu werden. Wird dieser Wert erreicht, stellt Verdan für einen Moment seine Loyalität zum Winterkönig infrage, was ein Gespräch eröffnet, in dem er seine vergangenen Taten und seine Rolle als Spion gestehen würde. Er weiß nicht, was der Winterkönig plant — nur, dass dieser die ganze Welt mit Winter überziehen will, und die Dales ganz besonders.`,
    `<span class="section-heading" id="after-5">Krönung des Monarchen</span> Die endgültige Abrechnung erfolgt unter der Aufsicht von Marshal Rudol und seinen Red Marshals, die für Ordnung sorgen. Daisy Woegold, die Siegerin des Vorjahres, überreicht Rudol das Circlet of the Folkhearth, das er mit einer Träne im Auge und einem Zwinkern zu ihr entgegennimmt.`,
    `Marshal Rudol zählt die Bänder aus, mit Daisy als Vorsitzender.
    <ul>
      <li>Die Helden gewinnen klar, wenn sie eindeutig die meisten Bänder haben.</li>
      <li>Die Helden können Rote Bänder auf ein Mitglied bündeln, falls nötig (muss 10+ erreichen).</li>
      <li>Traten die Helden nicht an oder blieben sie zurück, gewinnt Thane — und rückt in Position, Alderman zu werden, was Barleytowns Zustand verschlechtert.</li>
    </ul>`,
    `<span class="callout"><span class="co-title">Schwere Anschuldigungen</span>Fliegen Betrugsvorwürfe in eine der beiden Richtungen, könnte assert-innocence-4 (Unschuld-beteuern-4) oder expose-4 (Thanes Tricksereien enthüllen-4) nötig sein.</span>`,
  ],
  npcs:[
    { name:"Daisy Woegold", role:"Vorjahressiegerin aus Pasture, hochschwanger", text:"Trifft am letzten Tag mit dem Circlet of the Folkhearth ein und übergibt es feierlich an Marshal Rudol, der es dem neuen Fair Monarch überreicht." },
    { name:"Verdan", img:"verdan", role:"Spion des Winterkönig, Attentäter beim Kanalschlag", text:"Cold-Hearted Stabber (S. 264). Soll das Circlet verschwinden lassen. Haben die Helden ihn zuvor freundlich behandelt, ist er innerlich hin- und hergerissen (siehe warmed-up-5-Mechanik)." },
  ],
  challenges:[
    { name:"GOAT RACE", difficulty:2, type:"Pursuer, Obstacle", subtitle:"Ziegenrennen — Grenzwerte LAP/WIN",
      desc:`Ein Blechhorn ertönt und signalisiert den Start des Rennens durch ein trockenes Kanalbett! Dutzende Ziegen und andere seltsame Reittiere galoppieren los. Jeder Reiter, Held oder NSC, hat eigene win- (sieg-) und lap-Limits (runde-limits). Der Erste, der sein win maxt, gewinnt das Rennen; der Zweite wird Zweiter; und so weiter. Win kann nur durch das Absolvieren von drei Runden gemaxt werden, was durch Reitaktionen, das Erhalten von advancing-Status (vorankommend) und das Maxen von lap geschieht. Wird lap gemaxt, werden überschüssige Status-Stufen auf die nächste Runde übertragen.`,
      limits:[ { label:"LAP (Runde)", max:5, note:"Erhält winning-1 (siegreich-1) auf win und reduziert den Status auf lap um 5." }, { label:"WIN (Sieg)", max:3 } ],
      threats:[
        { name:"RIDERS (Reiter)", flavor:`Alle Reiter preschen in einer Staub- und Iahwolke voran; manche wollen offensichtlich nicht fair spielen …`, options:[ `Die anderen Reiter halten mit (erhalten advancing-1/vorankommend-1)`, `Ein Reiter versucht, deine Ziege zu treten oder zu bremsen (deine Ziege erhält off-balance-1/aus-dem-gleichgewicht-1 oder tangled-1/verwickelt-1)`, `Ein Reiter rammt deine Ziege mit seiner (deine Ziege erhält off-balance-2/aus-dem-gleichgewicht-2, seine erhält off-balance-1/aus-dem-gleichgewicht-1)`, `Ein Reiter erholt sich aus einer prekären Lage (entfernt 3 Stufen negativer Status)`, `Ein Reiter schlägt deiner Ziege auf die Hinterbacken (deine Ziege erhält panicked-2/panisch-2)` ] },
        { name:"TRACK (Strecke)", flavor:`Ein Hindernis türmt sich auf: eine scharfe Kurve, rutschiger Schlamm, ein Baumstamm, oder eine tomatenwerfende Zuschauermenge!`, options:[ `Du rennst direkt in das Hindernis oder in andere Reiter (du und/oder deine Ziege werden bruised-1/gequetscht-1)`, `Du bremst und andere überholen dich (reduziert dein advancing/vorankommend um 1)`, `Du überforderst deine Ziege (Ziege erhält tired-1/müde-1)`, `Die Menge johlt und buht dich aus (flustered-2/durcheinander-2) oder trifft dich mit einer faulen Tomate (blurred-vision-1/verschwommene-sicht-1)`, `Du wirst von deiner Ziege geworfen und musst wieder aufsitzen (prone-2/am-boden-2)` ] },
      ],
      source:`Hearts of Ravensdale I, Themenbereich Village Life, S. 399`
    },
    { name:"COLD-HEARTED STABBER", difficulty:3, img:"coldHeartedStabber", type:"Mystery, Aggressor, Watcher", subtitle:"Verdan (oder Ersatz) — Attentäter beim Kanalschlag",
      desc:`Der schreckliche Winterkönig, der jenseits der Weißmantelberge haust, soll viele seltsame Diener haben, doch am überraschendsten sind wohl die menschlichen, die seinem Todeskult beitreten. Ihr Herz ist mit einem zauberischen Gift infiziert, das sie cold-hearted-5 (kaltherzig-5) macht. Mit genug Zuneigung oder der richtigen Magie kann das Gift vorübergehend entfernt und dann warmed-up-5 (aufgewärmt-5) werden, was sie in einen lähmenden inneren Konflikt stürzt. Das Gift „Fondness' End" (Ende der Zuneigung) friert das Herz ein und kann nur durch einen Großen Thaumaturgen oder eine große Opfertat geheilt werden.`,
      limits:[ { label:"HARM", max:3 }, { label:"CATCH / ESCAPE (Fangen / Entkommen)", max:4, note:"Startet zu Beginn der Konfrontation bei 2 von 4 Pips (die ersten beiden manuell markieren)." }, { label:"SWAY (Überzeugen)", max:0, note:"Kein festes Limit — wird über die warmed-up-5-Mechanik im Fließtext abgehandelt." } ],
      tags:[ "hidden dagger (versteckter Dolch) oder hidden hand crossbow (versteckte Handarmbrust)" ],
      special:[ { title:"WARMED-UP (AUFGEWÄRMT)", text:`Haben die Helden Verdan freundlich behandelt, reduziert sich sein cold-hearted-Status vorübergehend um die Anzahl der Stufen freundlicher emotionaler Status-Effekte, die sie ihm verliehen haben. Sinkt cold-hearted weiter, rechnet es sich auf warmed-up-5 an — wird dieser Wert erreicht, stellt Verdan seine Loyalität zum Winterkönig infrage und gesteht seine Rolle als Spion.` } ],
      threats:[
        { name:"LURK (Lauern)", flavor:`Ein Nordwind weht sanft und lässt alle frösteln …`, options:[ `Findet ein geeignetes Versteck (erhält hidden-3/versteckt-3) oder bewegt sich lautlos (erhält stealthy-3/verstohlen-3)`, `Beobachtet sein Ziel aus dem Versteck oder unter falscher Identität (Enthüllung)`, `Trägt eine falsche Gefühlsregung, um Verdacht abzulenken (jovial-3, upset-3/aufgewühlt-3, oder calm-3/ruhig-3)`, `Sät heimlich Bitterkeit und Verzweiflung (bitter-2/verbittert-2 oder despaired-2/verzweifelt-2)` ] },
        { name:"CHILL (Frösteln)", flavor:`Flüstert eine hoffnungslose Tirade, während sich Eiskristalle an seinen Fingerspitzen bilden`, options:[ `Lässt einen Raum kalt und trostlos werden oder füllt ihn mit obscuring mist (verhüllendem Nebel)`, `Friert, sprengt und zerbricht ein magisches Amulett, Werkzeug oder Waffe (Tag streichen)`, `Macht jemanden sehr cold-3 (kalt-3) und verursacht cramps-2 (Krämpfe-2)`, `Springt weiter als natürlich, wie vom Nordwind getragen (light-weight-2/leichtgewicht-2 oder getting-away-2/entkommend-2)` ] },
        { name:"ASSAIL (Angreifen)", flavor:`Schwingt sich aus der Deckung, um einen tödlichen Schlag zu führen`, options:[ `Ersticht oder erschießt jemanden ins Herz (bleeding-5/blutend-5)`, `Vergiftet jemanden mit gefrierendem Gift (cold-hearted-3/kaltherzig-3)`, `Sabotiert eine Vorrichtung, um jemanden zu verletzen (crushed-4/zerquetscht-4)`, `Verlagert sein Gleichgewicht, bereit (dodging-2/ausweichend-2)` ] },
      ],
      source:`Hearts of Ravensdale I, Themenbereich Challenges, S. 264`
    },
    { name:"THANE CODPRICE", img:"thaneCodprice", difficulty:3, type:"Aggressor, Sapper", subtitle:"Grenzwerte HARM/INTIMIDATE/REASON WITH — falls es bei der Krönung eskaliert",
      desc:`Thane ist ein Sohn der Familie Codprice, einer der wohlhabendsten Familien Barleytowns. Er ist ein hochgewachsener Mann mit stolzem Gang, dickem Schnurrbart und einem herablassenden Grinsen. Sein Hang zu Zechgelagen und Schikanen hat ihm viele Feinde eingebracht, doch er hegt Ambitionen auf Macht in Barleytown. Da er niemals einen fairen Wettstreit mag, wird Thane alles tun, um sich in diesem Jahr die Krone des Fair Monarch zu sichern.<br><br><strong>Geheimnis — Thanes wunder Punkt:</strong> Wird sein Name als „Codpiece“ (statt „Codprice“) ausgesprochen, wird er angry-2.`,
      limits:[ { label:"HARM", max:4 }, { label:"INTIMIDATE (Einschüchtern)", max:3 }, { label:"REASON WITH (Zur Vernunft bringen)", max:5 } ],
      tags:[ "big and strong (groß und stark)", "well-known face (bekanntes Gesicht)", "duplicitous-3 (doppelzüngig-3)" ],
      threats:[
        { name:"ARGUE (Streiten)", flavor:`Spricht mit unverdientem Selbstvertrauen, breites Grinsen`, options:[ `Wird mit jedem Wort lauter und beleidigender (exasperated-3/entnervt-3 oder intimidated-3/eingeschüchtert-3)`, `Redet sich heraus (streiche 3 Stufen verdachtsbezogener Status)`, `Weigert sich, auf Vernunft zu hören (entfernt alle Status von reason-with/zur-vernunft-bringen)` ] },
        { name:"FIGHT (Kämpfen)", flavor:`Knurrt vor Wut, knackt mit den Fingerknöcheln`, options:[ `Wirft einen mächtigen Schlag (stunned-2/betäubt-2; nicht voll gelindert: er erhält confident-1/selbstbewusst-1)`, `Spuckt jemandem ins Gesicht (humiliated-2/gedemütigt-2, taunted-2/verspottet-2, oder angry-2/wütend-2)`, `Pickt sich jemanden Kleineren (Schlechte Nachrichten oder streiche einen Verbündeten-Tag)`, `Geht in Kampfstellung (defensive-stance-2/verteidigungshaltung-2)`, `Nimmt einen Schluck Alkohol (tipsy-1/beschwipst-1, reduziert einen negativen Status um 2 Stufen)` ] },
        { name:"CRONIES (Handlanger)", flavor:`Sein Trupp schleicht sich aus den Schatten`, options:[ `Stiehlt etwas Wichtiges (streiche einen Tag, Thane erhält ihn)`, `Stellt jemandem ein Bein (prone-2/am-boden-2 und embarrassed-2/beschämt-2)`, `Rammt jemandem den Ellbogen in den Rücken (aching-2/schmerzend-2)`, `Ruft eine Bande zusammen, die Thane unterstützt (Pack of sycophants/Rudel-Speichellecker, Scare off/Verscheuchen)` ] },
      ],
      source:`Hearts of Ravensdale I, Themenbereich Challenges, S. 392`
    },
  ],
  revelations:[], rewards:[], tips:[],
},

/* 6 -------------------------------------------------------- AFTERMATH */
{
  key:"aftermath", kind:"aftermath", page:"S. 400",
  title:"Nachspiel", en:"Aftermath",
  summary:"Belohnungen · Wenn ein Held gewinnt / wenn Thane gewinnt · Kern-Enthüllung 7",
  showImprovement:true,
  readAloud:[],
  flow:[
    `<span class="section-heading">Belohnungen</span> Gewinnt ein Held, wird ihm das <span class="gloss" onclick="openGloss('circlet-of-the-folkhearth')">Circlet of the Folkhearth</span> feierlich überreicht, während alle jubeln. Zudem erhalten alle Helden, sofern sie einen guten Eindruck bei den Menschen von <span class="gloss" onclick="openGloss('barleytown')">Barleytown</span> und der Dales hinterlassen haben, well-reputed-1 (angesehen-1) für das kommende Jahr, und jedes Rote Band lässt sich gegen eine Stufe von well-supplied, hefty-purse, Zutaten, Materialien oder eine gleichwertige Belohnung eintauschen.`,
    `<span class="section-heading">Wenn ein Held gewinnt</span> Er hat damit, was er braucht, um die Verlorene Einsiedelei zu finden. Mehr noch: Er wird in Barleytown und womöglich darüber hinaus als diesjähriger Fair Monarch gefeiert. Das kann jedem größeren Vorhaben Auftrieb geben, an dem er arbeitet — sei es ein Bauprojekt, eine Lehre oder das Bestreben, die Menschen der Dales anzuführen.`,
    `<span class="section-heading">Wenn Thane gewinnt</span> Er und seine Spießgesellen setzen ihre Pläne um und machen sich daran, verschiedene Ämter in Barleytown zu übernehmen. Thane ist auf dem besten Weg, der nächste Alderman zu werden, und die Leute leiden darunter; die Straßen werden von Verbrechen und Ausschweifung durchsetzt, zumindest im Vergleich zu früher.`,
    `Thanes Sieg verschärft das Problem zusätzlich, denn die Helden brauchen das Circlet, um die Verlorene Einsiedelei zu finden. Sie könnten mit ihm darum feilschen (bargain-4), versuchen, es ihm und seinen Verbündeten zu stehlen, oder vielleicht einen anderen Weg finden, die alte Stätte ausfindig zu machen.`,
    `<span class="callout"><span class="co-title">Für dich als Spielleiter</span>Das Circlet ist das zentrale campaignübergreifende Bindeglied zwischen „The Barleytown Fair" (Gewinn des Circlets) und „The Lost Hermitage" (Nutzung des Circlets zur Suche). Wird es hier gestohlen oder missbraucht, sollte das unmittelbare Konsequenzen für den Auftakt von Adventure 7 haben.</span>`,
  ],
  npcs:[],
  challenges:[],
  revelations:[
    { kind:"Core", ref:"7", text:"Die Oldways entsprangen einer alten Schule gwyrdolanischer Thaumaturgen in Hartland." },
  ],
  rewards:[
    "Sieger: das Circlet of the Folkhearth (Schlüsselgegenstand für Adventure 7).",
    "Alle Helden mit gutem Ruf: well-reputed-1 für das kommende Jahr.",
    "Jedes gesammelte Rote Band ist eintauschbar gegen eine Stufe well-supplied, hefty-purse, Zutaten, Materialien oder eine gleichwertige Belohnung.",
  ],
  tips:[],
},

];
ADVENTURES.find(a=>a.id==="a6").scenes = A6_SCENES;
