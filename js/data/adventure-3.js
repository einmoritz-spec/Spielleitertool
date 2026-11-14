/* ---------- Adventure 3 : full scene data ---------- */

const A3_SCENES = [

/* 0 ---------------------------------------------------------- INTRO */
{
  key:"intro", kind:"intro", page:"S. 348–350",
  title:"Überblick", en:"A Fox in the Dales",
  summary:"Hintergrund, Hooks & Szenenfolge",
  overview:[],
  readAloud:[
    { page:"S. 348", label:"Übergang/Eröffnung", text:
      `In einem abgelegenen Winkel lebt das Volk von Milkrest von Tratsch und Gerüchten. Als also jemand in Radmilas Teehaus einbrach, richteten sich sogleich alle Finger auf Azeria – das rothaarige Wildfangmädchen. Verlassen von ihrer geheimnisvollen Mutter, so heißt es, sei das Kind ohnehin zur Verwilderung bestimmt gewesen.

Und für einmal liegen sie halb richtig. Azeria hat tatsächlich Radmilas Laden ausgeraubt und ist aus der Stadt geflohen. Doch da steckt mehr dahinter, verborgene Wahrheiten, die erst nach dem Tod ihrer Mutter ans Licht kamen. Auf dieser gefährlichen Reise der Selbstfindung hinterlässt sie eine Spur des Chaos und der Vergehen quer durch drei dalische Gemeinden. Bald schon wird sie sich in einem Netz aus verborgenem Unrecht und altem Groll gefangen sehen, ohne jemanden, an den sie sich wenden kann.

Zum Glück hat Radmila eine Handvoll guter Leute losgeschickt, um sie einzuholen, bevor es zu spät ist…` },
  ],
  flow:[
    `<span class="section-heading">Hintergrund</span> Der Einbruch in <strong>Radmilas Teehaus</strong> in Milkrest hat unter den Dorfbewohnern Klatsch und Misstrauen geschürt. Kürzlich brach jemand ein und stahl Wertgegenstände, Werkzeuge und persönliche Andenken. Zeugen berichteten von einer beunruhigenden Gestalt, die über die Dächer huschte — was kleinliche Gerüchte und wilde Spekulationen weiter anheizte. Die meisten beschuldigen <strong><span class="gloss" onclick="openGloss('azeria-ref')">Azeria</span></strong>, die verwilderte Tochter von Radmilas verstorbener Angestellter <strong>Milorada Sionann</strong>, die sich seit Monaten seltsam verhalten hat und kürzlich ebenfalls verschwand.`,
    `<span class="section-heading">Die reumütige Räuberin</span> In den letzten Monaten begann Azeria, unirdische Fähigkeiten zu zeigen, und der Kummer über den Tod ihrer Mutter ließ schließlich ihre Dämmerungsblut-Natur (Twilight Kin) erwachen. Nach dem Tod ihrer Mutter beschloss das trauernde Mädchen, die Vergangenheit ihrer Mutter und ihre eigene wahre Herkunft aufzudecken. Verzweifelt und unwillig, sich in der Öffentlichkeit zu zeigen, brach sie in Radmilas Laden ein und nahm Münzen, Andenken und Teegeschirr mit.`,
    `<span class="section-heading">Eine bewegte Vergangenheit</span> Azerias Geschichte beginnt mit den Geheimnissen, die ihre Mutter hütete. Milorada war die älteste Tochter der <span class="gloss" onclick="openGloss('cloudbornes-ref')">Cloudbornes</span>, einer wohlhabenden Familie in <span class="gloss" onclick="openGloss('highglade')">Highglade</span> (S. 88). Zu deren Entsetzen verliebte sich das schwärmerische Mädchen in <span class="gloss" onclick="openGloss('gajowy-ref')">Gajowy</span> — ein ursprüngliches, fuchsartiges Geschöpf der Dämmerung. Nach Azerias Geburt verließ Milorada ihr Elternhaus, da sie erkannte, dass ihre Familie dem Twilight-Kin-Kind schaden würde. Sie ließ sich in Soddenmore nieder, freundete sich mit der Kräuterkundigen <strong><span class="gloss" onclick="openGloss('bright-tails-ref')">Bright-Tails</span></strong> an und arbeitete für <strong><span class="gloss" onclick="openGloss('lady-midday-ref')">Lady Midday</span></strong> von der <strong><span class="gloss" onclick="openGloss('lady-midday-ref')">Kikimora-Bande</span></strong>. Rasch entzweite sie sich mit Letzterer und floh nach <span class="gloss" onclick="openGloss('milkrest')">Milkrest</span>, wo sie Azeria unter dem Nachnamen „Sionann“ in relativem Frieden aufzog, bis zu ihrem kürzlichen Tod.`,
    `<span class="section-heading">Alte Sünden, künftige Schwierigkeiten</span> Nach ihrem Aufbruch aus Milkrest erreichte Azeria <span class="gloss" onclick="openGloss('soddenmore-ref')">Soddenmore</span> und folgte damit den Spuren ihrer Mutter. Bei einer Begegnung mit Bright-Tails in der <span class="gloss" onclick="openGloss('lantern-world-ref')">Lantern World</span> erfuhr sie von ihrer Herkunft und dass Lady Midday noch immer einige der Habseligkeiten ihrer Mutter besaß. Sie legte die Maske an, die einst ihre Mutter trug, und stahl Miloradas Andenken von Lady Midday zurück. Anschließend zog sie weiter nach Highglade und <span class="gloss" onclick="openGloss('cloudborne-croft-ref')">Cloudborne Croft</span>. Nun versteckt sie sich in <strong>Sionann Grove</strong>, einem verlassenen Holzfällerlager, wo ihre Eltern sich einst begegneten und sich verliebten. Sie plant, die Cloudbornes zu berauben und ihre Mutter zu rächen — ohne zu ahnen, wie wahrhaft gefährlich ihre Familie tatsächlich ist.`,
    `<span class="section-heading">Am Rande des Blickfelds</span>Streue im Verlauf des Abenteuers immer wieder vage einige der folgenden Motive ein:
<ul>
<li>Das Gefühl, beobachtet zu werden</li>
<li>Schatten unmenschlicher Kreaturen</li>
<li>Aufblitzende goldene Augen</li>
<li>Ein zurückgelassenes Fellbüschel</li>
</ul>
Spiele diese als Einbildung der Helden herunter, oder als rasch abgetane Sinnestäuschung. Untersuchen die Helden erfolgreich, können sie die dahinterliegende Information unter „Der lauernde Schatten“ entdecken.`,
    `<span class="callout"><span class="co-title">Der lauernde Schatten (Narrator-Geheimnis)</span>Ohne dass Azeria es weiß, hat ihr Vater Gajowy sie ihr Leben lang beobachtet und ihr Erwachen zu ihrer wahren Twilight-Kin-Natur gespürt. Gajowys Challenge-Profil steht auf S. 360.
Gajowy versucht, sie aufzuspüren — genau wie die Helden. In dem Glauben, Azeria sei nach dem Tod ihrer Mutter die ganze Zeit in Radmilas Teehaus gewesen, brach er dort ein, um sie zu „retten“, ohne zu merken, dass er seiner flinken Tochter bereits einen Schritt hinterherhinkte.
Trotz seiner Liebe zu ihr weiß Gajowy genau: Greift er offen ein, wird das sein Verderben sein (Lady's Hem, S. 193) — und so folgt er den Helden im Gleichschritt durch das ganze Abenteuer und bleibt stets außer Sicht. Doch er ist fest entschlossen, ihre Sicherheit und ihre Freiheit zu gewährleisten.
Entdecken die Helden ihn und gehen dann auf ihn zu, um ihn zu stellen, flieht er. Gelingt es ihnen dennoch, ihn festzuhalten, kann er dieselben Auskünfte geben wie Bright-Tails in „A Vixen's Tears“ (S. 355).</span>`,
    `<strong>Erzähler-Notiz — <span class="gloss" onclick="openGloss('twilight-kin')">Twilight Kin (Dämmerungsverwandte)</span>:</strong> Azeria ist Twilight Kin, das Kind aus menschlichem Blut und dem eines Gefallenen Blattes. Ihr Körper zeigt nun unmenschliche Merkmale wie Fuchsohren und einen Schweif. Zudem hat sich bei ihr die Fähigkeit gezeigt, mit Schatten zu verschmelzen, und sie besitzt geschärfte Sinne.`,
    `<strong>Erzähler-Notiz — Als Teil von „Wake of the Oldways“:</strong> Dieses Abenteuer beleuchtet die verschiedenen Facetten der dalischen Gesellschaft und das Verhältnis der Dalesleute zu den Geschöpfen der Dämmerung. Es zeigt außerdem, wie die Oldways manche Gefahren <em>innerhalb</em> der Dales in Schach gehalten haben — nicht nur jene von außerhalb.`,
    `<span class="section-heading">Synopsis</span>Das Abenteuer beginnt mit „Ein Rätsel in Milkrest“, in dem die Helden gebeten werden, den Einbruch in Radmilas Teehaus zu untersuchen. Zeugen beschuldigen ein junges Mädchen, Azeria, die „verfluchte“ Tochter von Milorada, einer kürzlich verstorbenen Angestellten Radmilas. Hinweise am Tatort erzählen eine andere Geschichte und führen die Helden nach Soddenmore.`,
    `Außerhalb von Soddenmore hören die Helden „Eine Geschichte an der Starless Junction“, während sie nach Informationen über Milorada und Azeria suchen. Man verweist sie an Bright-Tails, eine Kräuterkundige in Soddenmores Lantern World.`,
    `Beim Umherziehen an der Junction werden die Helden von zwei Stormhelm-Rittern angehalten, in „Aus Furcht vor dem Winter“.`,
    `Die Helden bewegen sich durch „Schatten in der Lantern World“, Soddenmores bunten Nachtmarkt, um Bright-Tails zu finden und dabei die Kikimora-Bande zu meiden — Kriminelle mit einer offenen Rechnung gegenüber Azeria. Treffen sie Bright-Tails, erfahren sie von Miloradas tragischer Vergangenheit und Azerias Abstammung — und dass Azeria inzwischen nach Highglade aufgebrochen ist.`,
    `In „Ein Familiengeheimnis“ erreichen die Helden Cloudborne Croft, das Zuhause von Miloradas entfremdeter Familie, und erfahren, dass weitere persönliche Gegenstände Miloradas gestohlen wurden. Die Cloudbornes betrachten Azeria jedoch als beschämendes Geheimnis und geben nur widerwillig Auskunft über sie.`,
    `In „Der Fuchsbau“ führt ein Hinweis eines mitfühlenden Cloudborne die Helden zu Azerias Versteck, Sionann Grove. In diesem verlassenen Holzfällerlager stellen sie sich ihr, ihrem Vater und den Cloudbornes, die entschlossen sind, Azeria ein für alle Mal zu beseitigen.`,
  ],
  npcs:[],
  extra:{ heading:"Aufhänger", type:"list", items:[
    "Einer oder mehrere Helden sind Freunde oder Verwandte Radmilas, und sie bittet sie um Hilfe beim jüngsten Raubüberfall. Zudem macht sie sich Sorgen um die vermisste Tochter ihrer verstorbenen Freundin.",
    "Einer der wichtigen Briefe, die in „An Important Letter“ an Walric geschickt werden, stammt von Radmila und schildert beunruhigende Vorkommnisse im Teeladen, verbunden mit der Bitte um Hilfe. Walric bittet die Helden, an seiner statt aufzubrechen.",
    "Ein befreundeter Red-Marshal-Kontakt bittet die Gruppe, Radmila an seiner/ihrer Stelle beizustehen, während er/sie sich anderswo um „ernstere“ Angelegenheiten kümmert.",
    "Die Helden erspüren die Anwesenheit eines geheimnisvollen Geschöpfs der Dämmerung in Milkrest und entdecken dessen Verstrickung in den Einbruch bei Radmilas Laden.",
  ]},
  extra2:{ heading:"Szenenfolge dieses Abenteuers", type:"list", items:[
    "1 · Ein Rätsel in Milkrest — den Einbruch bei Radmila untersuchen",
    "2 · Eine Geschichte an der Starless Junction — Gerüchte über „Mindful Milorada“, Shozauka Baba treffen, optional „Aus Furcht vor dem Winter“",
    "3 · Schatten in der Lantern World — Soddenmores Nachtmarkt, Bright-Tails treffen, mögliche Konfrontation mit der Kikimora-Bande",
    "4 · Ein Familiengeheimnis — Cloudborne Croft, die Familie verleugnet Azeria, Deita hilft heimlich",
    "5 · Der Fuchsbau — Sionann Grove, Azeria konfrontieren/für sich gewinnen, Gajowy zeigt sich, die Cloudbornes greifen an",
    "6 · Aftermath",
  ]},
  challenges:[],
  revelations:[],
  rewards:[],
  tips:[],
},

/* 1 ---------------------------------------------------------- MILKREST */
{
  key:"milkrest", kind:"scene", page:"S. 350",
  title:"Ein Rätsel in Milkrest", en:"Mystery in Milkrest",
  summary:"Radmilas Teehaus untersuchen — Hinweise deuten nach Soddenmore",
  overview:[],
  readAloud:[
    { page:"S. 350", label:"Radmilas Teehaus", text:
      `Der Wind, der durch Milkrests steile Gassen fegt, summt wie ein aufgescheuchter Ziegenpferch, voller kräftiger Düfte und lauter Stimmen. Dem Dorf mit seinen Zedernholzhäusern und überdachten Straßen wohnt ein unbestreitbarer Charme inne, auch wenn Besucher sich gerne über die vielen Steigungen und Treppenfluchten dieser Bergsiedlung beklagen. Trotz der beständigen Winde, die vom Milken Crest herabwehen, haftet allem ein erdiger Duft von Käseherstellung und Ziegenmoschus an – nussig, rauchig und säuerlich zugleich.

Euer Weg führt euch über den Dorfplatz zu einem bescheidenen, zweistöckigen Gebäude. Von außen erinnert seine idyllische Fassade wenig an den durch Diebstahl heimgesuchten Laden, von dem man euch berichtet hat. Über der Tür kündigt ein kunstvoll gemaltes Schild Radmilas Teehaus an. Eine Traube von Dorfbewohnern lungert vor dem Laden herum, tratschend über das jüngste Verbrechen.

Ihr tretet ein, und eine beeindruckende Ziegenglocke kündet eure Ankunft an. Ordentlich aufgereihte Regale und Tische sind mit Teegeschirr, Handtüchern, kleinen Käselaiben und anderen Lebensmitteln beladen. Die Luft ist dick von Düften, Rauch und Gewürzen. Eine rundliche Frau tritt aus dem Hinterzimmer und wischt sich ihre zierlichen Hände an einer kreuzgestickten Schürze ab. Ihr strahlendes Lächeln erhellt den ganzen Laden. »Willkommen. Ich habe gerade frischen Tee aufgebrüht. Darf ich euch eine Tasse Kräutertee anbieten? Nehmt ihr ihn mit Milch?« Ohne eine Antwort abzuwarten, stellt sie dampfende Tassen schwarzen Tees und einen Teller Shortbread-Kekse bereit.` },
  ],
  flow:[
    `<strong><span class="gloss" onclick="openGloss('radmila-sparrowkin-ref')">Radmila Sparrowkin</span></strong> ist freundlich und wohlgeformt und hat die meisten ihrer vierzig Jahre in <span class="gloss" onclick="openGloss('milkrest')">Milkrest</span> verbracht. Ihre Zunge ist scharf, ihr Herz großzügig — zu großzügig, wie manche außer Hörweite sagen. Verwitwet in ihren späten Zwanzigern, hat sie alle Verehrer abgewiesen und konzentriert sich auf ihre „weniger lästige“ Liebe: Tee.`,
    `<span class="section-heading">Herausfinden, was geschehen ist</span> Die gestohlenen Gegenstände umfassen Münzen, alten Schmuck und Teegeschirr, manches geringwertig, manches wertvoller. Das Teegeschirr besitzt tiefen emotionalen Wert, geerbt über die Familie ihres verstorbenen Mannes.
<ul>
<li>Der gestohlene Schmuck gehörte einst <strong>Milorada Sionann</strong>, einer ehemaligen Angestellten, die vor knapp zwei Wochen an einer Lungenentzündung verstarb. Der Schmuck war ursprünglich als Sicherheit für Miloradas Unterkunft im Teehaus gegeben worden, nachdem die Frau vor einigen Jahren mit ihrer Tochter <span class="gloss" onclick="openGloss('azeria-ref')">Azeria</span> in Milkrest angekommen war. Radmila bewahrte den Schmuck auf, um ihn Azeria zurückzugeben; doch das Mädchen verschwand nach dem Tod ihrer Mutter. Radmila glaubt, das Mädchen sei für den Raub verantwortlich, und ist zugleich besorgt und untröstlich über sie.</li>
<li>Neben Miloradas Schmuck wurden mehrere Andenken an sie gestohlen. Eines ist eine alte hölzerne Fuchsmaske, die Milorada mit ungewöhnlichem Respekt behandelte und an ihrer Schlafzimmerwand hängen hatte.</li>
<li>Ein Held, der nach Details zur Maske fragt, könnte herausfinden, dass es sich um eine jener Masken handelt, die von den verborgenen Gästen der <span class="gloss" onclick="openGloss('lantern-world-ref')">Lantern World</span> in <span class="gloss" onclick="openGloss('soddenmore-ref')">Soddenmore</span> getragen werden.</li>
</ul>`,
    `<span class="section-heading">Beweise für den Einbruch</span> Während Radmila die Helden herumführt, können sie auf Handeln zusätzliche Beweise entdecken:
<ul>
<li>Der Täter drang durch das hornverglaste Fenster im Obergeschoss ein. Kratzspuren bedecken die äußere Fensterbank und das Dach, wie von einem Tier hinterlassen – dies hat die Gerüchte im Dorf befeuert, Azeria sei verflucht.</li>
<li>Das Zimmer, das Milorada und Azeria bewohnten, lag im Erdgeschoss neben der Küche. Helden, die nachforschen, erkennen, dass das Schloss der Hintertür der Küche geknackt wurde und dass alle gestohlenen Gegenstände mit ruhiger Hand aus dem Zimmer entfernt wurden. Trotzdem ist eine Truhe zur Seite geschoben, und ein Bettlaken ist zerrissen.</li>
<li>Ein Held, der versucht, sich ein Gesamtbild zu machen, kann erkennen, dass es Anzeichen für zwei Einbrüche gibt, die wahrscheinlich innerhalb kurzer Zeit in derselben Nacht stattfanden. Der erste Einbrecher war geschickt, kam durch die Küche und wusste, was er mitnehmen sollte. Der zweite war gewalttätig und schien hastig alles zu durchsuchen.</li>
<li>Radmila weiß nichts von zwei Einbrüchen. Sie wurde durch das Geräusch des zerberstenden Fensters geweckt.</li>
</ul>`,
    `<span class="section-heading">Gerüchte im Dorf</span>
<ul>
<li>Das meistverbreitete Gerücht besagt, dass Dorfbewohner in der Nacht des Diebstahls einen unmenschlichen Schatten auf Radmilas Dach gesehen haben. Ansonsten stellt der Dorfklatsch Milorada und Azeria selten in gutem Licht dar, denn die raubeinigen Leute von Milkrest sind nicht leicht zufriedenzustellen.</li>
<li>Die beiden schienen aufrichtig gutherzige Naturen zu haben, doch Milorada wirkte nie wirklich entspannt. Sie schienen sich nie wirklich in Milkrest einzuleben, und so duldeten die Dorfbewohner die beiden bestenfalls.</li>
<li>Wenn selten ein Händler aus Soddenmore oder <span class="gloss" onclick="openGloss('highglade')">Highglade</span> eintraf, machte Milorada sich rar und wirkte ängstlich oder gar schuldbewusst.</li>
<li>Azeria war ein ungewöhnliches, aber fähiges und gerissenes Kind. Seit letztem Herbst begann sie, sich verdächtig zu verhalten und sich unter einem Kapuzenumhang zu verstecken. Verschiedenste Gerüchte begannen daraufhin zu kursieren.</li>
<li>Das einzige Mal, dass Milorada Azeria anschrie, war, als sie das Mädchen dabei erwischte, wie es mit der eleganten Fuchsmaske ihrer Mutter spielte, die diese sonst an der Wand hängen hatte.</li>
</ul>`,
    `Fügen die Helden diese Hinweise zusammen, sollten sie schlussfolgern, dass Azeria wohl nach Soddenmore gegangen ist — der logische nächste Halt, der zu „Eine Geschichte an der Starless Junction“ führt. Erwägt, ein oder zwei Vignetten aus der Journey <span class="gloss" onclick="openJourneyBySlug('travel-on-dalish-roads')">Reisen auf dalischen Straßen</span> anzubieten, sowie eventuell aus <span class="gloss" onclick="openJourneyBySlug('morose-mire')">Morose Mire</span>, während sich die Helden dem sumpfigen Soddenmore nähern.`,
    `<span class="callout"><span class="co-title">Erzähler-Notiz — Ein wiederkehrendes Motiv</span>Am Rande des Blickfelds: Streue im Verlauf des Abenteuers immer wieder vage einige dieser Motive ein — das Gefühl, beobachtet zu werden; Schatten unmenschlicher Kreaturen; aufblitzende goldene Augen; ein zurückgelassenes Fellbüschel. Spiele diese als Einbildung der Helden herunter oder als rasch abgetane Sinnestäuschung. Wenn die Helden erfolgreich nachforschen, könnten sie hinter „Den lauernden Schatten“ kommen.</span>`,
  ],
  npcs:[],
  challenges:[],
  revelations:[],
  rewards:[],
  tips:[],
},

/* 2 ---------------------------------------------------------- STARLESS JUNCTION */
{
  key:"starless", kind:"scene", page:"S. 352–353",
  title:"Eine Geschichte an der Starless Junction", en:"A Tale at Starless Junction",
  summary:"Marktgerüchte über „Mindful Milorada“ — Shozauka Baba weist den Weg",
  overview:[],
  readAloud:[
    { page:"S. 352", label:"Starless Junction", text:
      `Die Dalesleute haben so manchen Spruch über Soddenmore auf Lager, und keiner davon ist heiter. Starless Junction, eine Anhöhe mit Blick über das Dorf Soddenmore, die sich von einem nebligen Horizont zum nächsten erstreckt, trotzt dieser trüben Stimmung und bietet eine willkommene Abwechslung von der durchnässten Landschaft der Dales und der toten Luft des Moors. Bunte Zelte und lebhafte Marktstände sprießen wie Pilze aus dem felsigen Boden der Kreuzung hervor, ein Kontrast zum unaufhörlich grauen Himmel. Händler und Reisende aus fernen Dales sitzen um warme Feuer, bieten Gewürzgetränke feil und tauschen lebhafte Geschichten mit Freund und Fremdem gleichermaßen aus.

Alle hier eint der Wunsch, ihre Geschäfte in dieser Gegend abzuwickeln – und keinen Fuß ins eigentliche Dorf zu setzen. Gerüchte werden hier gehandelt wie kostbare Perlen. Derzeit glänzt am hellsten das Gerücht von Mindful Milorada – einer gewitzten alten Trickbetrügerin, kürzlich von den Toten zurückgekehrt. Die Fuchsgesichtige Räuberin soll die Kikimora-Bande mit ihrem Unfug und ihren Diebeszügen plagen, und jede Nacherzählung klingt großartiger als die letzte, hart an der Grenze zwischen Legende und Märchen. Manch Wagemutiger hat sogar Fuchs-Graffiti an Wände und Ladenfronten in ganz Soddenmore gemalt, der Bande zum Trotz.` },
  ],
  flow:[
    `In dieser Szene erreichen die Helden die Starless Junction, dicht auf <span class="gloss" onclick="openGloss('azeria-ref')">Azerias</span> Fersen, und erfahren, dass ihre nächste Spur in die <span class="gloss" onclick="openGloss('lantern-world-ref')">Lantern World</span> führt.`,
    `<span class="section-heading">Sich umhören</span>Die Helden können Klatsch und nützliche Gerüchte aufschnappen — bei einem Würfelspiel am Feuer mit anderen Reisenden, während sie einem Händler helfen, schwere Fässer von einem Ochsenkarren zu laden, oder bei anderen Tätigkeiten.`,
    `Die Junction ist ein Umschlagplatz für Klatsch, doch die Leute verlangen meist eine Gegenleistung (short-on-coin-1), sei es als Bestechung oder nach dem Motto „erst kaufen“. Die Nachforschungen der Helden könnten auch die Aufmerksamkeit der Kikimoras (Exposure) oder anderer Gestalten aus Soddenmores Unterwelt auf sich ziehen (Brutal Outlaw, CBII 131).`,
    `<ul>
<li><strong>Mindful Milorada</strong> war eine Unruhestifterin, berühmt dafür, die grausame Bande der Kikimoras zu jagen. Sie verbarg ihre Identität hinter einer Fuchsmaske; niemand ist sicher, wer sie wirklich war.</li>
<li>Die meisten glauben, Mindful Milorada sei ertränkt worden, weil sie sich der Anführerin der Kikimoras, <span class="gloss" onclick="openGloss('lady-midday-ref')">Lady Midday</span>, widersetzte. Das geschah vor etwa zehn Wintern.</li>
<li>Wer auch immer die neue Diebin ist, sie trägt Mindful Miloradas alte Fuchsmaske. Manche sagen, es sei ihr Geist, zurückgekehrt, um die Unterdrückten erneut vor der <span class="gloss" onclick="openGloss('lady-midday-ref')">Kikimora-Bande</span> zu schützen.</li>
<li>Die Diebin trat nur einmal in Erscheinung und stahl dabei aus Lady Middays persönlichen Besitztümern.</li>
</ul>`,
    `Für konkretere Informationen werden die Helden an <strong><span class="gloss" onclick="openGloss('shozauka-baba-res')">Shozauka Baba</span></strong> verwiesen, die Frau vom Aal-Stand. Man sagt, sie kenne Mindful Miloradas wahre Identität.`,
    `<span class="section-heading">Moment mal, wo ist mein…?</span> Bevorzugen die Helden eher Aktion als Gespräche, könnte der Marktjunge <strong><span class="gloss" onclick="openGloss('bait-res')">Bait</span></strong> versuchen, einem von ihnen etwas zu stehlen. Normalerweise stiehlt er nicht, doch die Frühlingssaison bringt viele neue Reisende mit sich (S. 97; Profil: <span class="gloss" onclick="openChallengeByName('NIMBLE PICKPOCKET')">Nimble Pickpocket</span>, CBII 162), und eine solche Gelegenheit will er sich nicht entgehen lassen. Wird er erwischt, gibt Bait den gestohlenen Gegenstand zurück und entschuldigt sich aufrichtig; er hatte die Helden für naiver gehalten. Als professionelle Höflichkeit bietet der junge Unternehmer an, einige Fragen zu Mindful Milorada zu beantworten, da er gehört hat, wie die Helden nach ihr fragten. Er weiß alles oben Genannte und kann die Helden zu Shozauka Baba weisen.`,
    `<span class="section-heading">Weitere Aktivitäten an der Starless Junction</span> Zudem ziehen viele Reisende durch die Junction, sodass die Helden schillernden Figuren begegnen können, etwa einem gerissenen Händler, einem Wirtshaus-Nichtsnutz, oder einem Fluchesser (📎 optionale Profile unten).`,
    `<span class="section-heading">Bei Shozauka Baba</span> Scheinbar älter als <span class="gloss" onclick="openGloss('soddenmore-ref')">Soddenmore</span> selbst, soll <strong>Shozauka Baba</strong> Mindful Miloradas ganze Geschichte kennen, Vergangenheit wie Gegenwart. Shozauka ist tight-lipped-2 (verschlossen) — nicht etwa, weil sie etwas verbirgt, sondern weil sie, obwohl sie Milorada persönlich kannte, in Wahrheit nicht weiß, wer die neue Diebin ist (sie ist zutiefst überrascht von der Vermutung, es könnte Azeria sein) und niemanden diese Tatsache erahnen lassen will. Da ihr einst von Milorada geholfen wurde, hegt sie eine Schwäche für sie und ihre Tochter, und sobald sie überzeugt ist (Quick Action), dass die Helden das Beste für das Mädchen im Sinn haben, teilt sie Folgendes mit:
<ul>
<li>Als Milorada vor mehr als zehn Wintern zum ersten Mal in Soddenmore ankam, schien sie vor etwas auf der Flucht zu sein und fand Arbeit bei Lady Midday als Mitglied der Kikimora-Bande. Azeria war damals noch ein Baby.</li>
<li>Das gütige Wesen der jungen Mutter setzte sich schließlich durch: Sie widersetzte sich Lady Middays gnadenlosen Befehlen und half stattdessen den Opfern der Kikimoras. So erwarb sie sich in Soddenmore den Beinamen „Mindful Milorada“; die Fuchsmaske kam erst später hinzu, machte sie aber berühmt — die meisten wissen bis heute nicht, dass Milorada ihr wirklicher Name ist.</li>
<li>Obwohl die meisten glauben, sie sei wegen ihrer Auflehnung ertränkt worden, bestätigt Shozauka, dass Milorada mit Azeria vor zehn Wintern nach <span class="gloss" onclick="openGloss('milkrest')">Milkrest</span> entkam.</li>
</ul>`,
    `Im Austausch für diese Zusicherungen (und den Kauf reichlich Aals) verweist Shozauka Baba die Helden an <strong><span class="gloss" onclick="openGloss('bright-tails-ref')">Bright-Tails</span></strong>, die Milorada sehr nahestand. Die exzentrische Kräuterkundige lebt in der Lantern World. Shozauka kann veranlassen, dass Bait die Helden in das berüchtigte Viertel führt (was zu einem netten Moment werden kann, falls die Gruppe ihn bereits getroffen hat). Er hilft ihnen, Tiermasken auszuwählen, und erklärt die Gepflogenheiten dieses Ortes. Bait könnte zu einem Weggefährten werden, sollte die Gruppe seinen Respekt gewinnen oder ihn gut bezahlen.`,
    `<span class="section-heading">Belohnungen</span> Shozauka schenkt der Gruppe schließlich ein kunstvolles Fuchsamulett. „Das war Millys letztes Geschenk an mich. Gebt es ihrer kleinen Tochter.“ Ein Oldways-Kundiger, der das Amulett untersucht, kann erkennen, dass es einigen Schutz davor bietet, gesehen oder beobachtet zu werden, doch es ist kein vertrautes Oldways-Design.`,
    `Weiter geht es mit „Aus Furcht vor dem Winter“, oder die Gruppe zieht direkt weiter zu „Schatten in der Lantern World“.`,
    `<span class="section-heading">Aus Furcht vor dem Winter</span> <span class="callout"><span class="co-title">Optionale Begegnung</span>In der Starless Junction werden die Helden von zwei neugierigen Rittern aus <span class="gloss" onclick="openGloss('stormhelm')">Stormhelm</span> angehalten: dem forschen, breitschultrigen <span class="gloss" onclick="openGloss('knight-lowtower')">Ritter Dythara Lowtower</span> und der ernsten, drahtigen Ritterin Justine Tanner (📎 „Stormhelm Knight“ unten). Ihnen zufolge sind die Streitkräfte des <span class="gloss" onclick="openGloss('winter-king')">Winterkönig</span> im hohen Norden auf dem Vormarsch, und die Ritterinnen wurden in die Dales entsandt, um seine Agenten aufzuspüren — unaussprechliche Monster, die gefangen werden müssen. Sie wenden sich an viele der Neuankömmlinge an der Junction und sind bereit, für Informationen zu bezahlen, die sie zu ihrer Beute führen.
<br><br>Sind die Helden in anderen Abenteuern Agenten des Winterkönig begegnet, können sie den Ritterinnen erzählen, was sie wissen, oder lügen. So oder so geben die Ritterinnen ihnen etwas zusätzliches Geld (hefty-purse-1). Werden die Helden jedoch beim Lügen ertappt oder verweigern sie weitere Auskünfte, oder werden sie einer Lüge überführt, versprechen die Ritterinnen, sich ihre Gesichter zu merken (marked-3). Manche dieser Ritter:innen könnten insgeheim selbst <span class="gloss" onclick="openGloss('cold-hearted-stormhelm-knight')">Cold-Hearted Stormhelm Knights</span> sein.</span>`,
  ],
  npcs:[
    { name:"Bait", role:"Marktjunge, möglicher Taschendieb", text:"Ein gerissener, aber charmanter Junge, der für die Händler der Lantern World arbeitet. Jeder neue Naivling, den er in die schattige Welt lockt, bringt ihm Münzen ein, und der junge Unternehmer ist bekannt für sein scharfes Auge und seine Beharrlichkeit. Mit dem Geld sorgt er für seine Geschwister Barb und Shank. Versucht in der Frühlingssaison sein Glück als Dieb, gibt sich aber nach Entdeckung sofort geschlagen und wird hilfsbereit. Kennt die Gerüchte über Mindful Milorada und kann zu Shozauka Baba führen." },
    { name:"Shozauka Baba", role:"Aalhändlerin, Wissensquelle", text:"Von ihrem winzigen Stand in der Starless Junction aus verkauft Baba die besten Aale von Soddenmore. Mit ihren zeitlosen Augen weiß sie genau, was die Menschen brauchen, selbst wenn sie es selbst nicht wissen. Gebraten, in Aspik oder lebendig — ihre Aale sind allen anderen weit überlegen. Scheinbar uralt, tight-lipped-2. Kennt Miloradas wahre Geschichte, weiß aber selbst nicht, wer die neue Diebin ist. Verweist an Bright-Tails in der Lantern World." },
  ],
  challenges:[
    { name:"NIMBLE PICKPOCKET", difficulty:1, type:"Quarry",
      optional:true,
      desc:"„Halt, Dieb!“ — Bait, der Marktjunge, versucht in einem unbeobachteten Moment, einem Helden etwas zu stehlen.",
      limits:[
        { label:"SUBDUE (Bezwingen)", max:2 },
        { label:"CATCH OR OUTRUN (Fangen oder Überholen)", max:3 },
      ],
      tags:["nondescript clothes (unauffällige Kleidung)", "fast and nimble (schnell und flink)"],
      threats:[
        { name:"STEAL (Stehlen)", flavor:"Jemand rempelt einen Helden in der Menge an", options:["Schnappt sich einen Wertgegenstand (short-on-coin-1 oder streiche einen Tag)"] },
        { name:"RUN (Rennen)", flavor:"Macht sich aus dem Staub", options:["Schneidet durch die Menge (outrun-1)","Sorgt für Ablenkung (distracted-2) oder ein Hindernis","Klettert auf ein Dach (outrun-2)"] },
        { name:"PLEA (Flehen)", flavor:"Verspricht, das nie wieder zu tun", options:["Erzählt eine Rührgeschichte und macht den Helden schuldbewusst (guilty-2/schuldig-2)","Wechselt die Taktik, droht mit Bericht an den Boss, falls nicht bezahlt wird (short-on-coin-1 oder Exposure)"] },
      ],
      source:"A Fox in the Dales – Szene 'A Tale at Starless Junction', Bait der Marktjunge. Standardprofil, Core Book II, S. 97.",
    },
    { name:"SHREWD MERCHANT", difficulty:3, type:"Influence",
      optional:true,
      desc:"Ein gerissener Händler bemerkt das Interesse der Helden an seinen Waren und ist bereit, sie zum Kauf zu überreden, mit welchem Geld auch immer sie haben. Interested ist ein zwingender Status; wegzugehen, während man interested ist, ist eine herausfordernde Aktion — es behindert auch das Senken von short-on-coin.",
      tags:["interesting wares (interessante Waren)", "shrewd (gerissen)", "talkative-2", "Trade and travel (Handel und Reisen)"],
      special:[{ title:"VERLOCKENDE WAREN (TEMPTING WARES)", text:"Wird der Gerissene Händler zum ersten Mal etabliert, wird mindestens ein Held interested-3 an seinem Angebot." }],
      threats:[
        { name:"SHOW INVENTORY (Waren zeigen)", flavor:"Winkt, die Waren zu begutachten", options:["Hört dem Helden zu und schätzt ihn ein (erhält insight-1)","Zeigt etwas Interessantes und macht Druck (gibt interested-1)"] },
        { name:"HAGGLE (Feilschen)", flavor:"Plaudert lebhaft, lobt die Qualitäten seiner Waren", options:["Spinnt eine Geschichte von Armut und Unglück, oder verweist auf Seltenheit und Qualität des Gegenstands (gibt interested-1)","Bietet einen Schnäppchenpreis an (gibt Gegenstands-Tag und short-on-coin-3)"] },
      ],
      source:"A Fox in the Dales – Szene 'A Tale at Starless Junction', „Weitere Aktivitäten“. Standardprofil, Core Book II, S. 133.",
    },
    { name:"TAVERN LARK", difficulty:2, type:"Watcher, Sapper",
      optional:true,
      desc:"So etwas wie einen ruhigen Abend im Wirtshaus gibt es nicht, jedenfalls nicht, wenn die Kneipenlerche in der Nähe ist. Bereit, die Nacht durchzuzechen, verbreitet dieser Party-Löwe Unheil um des Unheils willen, um dann mit Geld und Geheimnissen zu verschwinden. Der enjoying-myself-Status ist zwingend, um in der Kneipe zu bleiben und nicht heimzugehen.",
      limits:[
        { label:"SUBDUE (Bezwingen)", max:2 },
        { label:"INTOXICATED (Berauscht)", max:0, note:"—" },
      ],
      tags:["lead belly (Bleibauch)", "cheerful-2"],
      threats:[
        { name:"INTRODUCE (Vorstellen)", flavor:"Bietet warme Begrüßung, einen Schulterklopfer, fragt, warum alle in der Stadt sind", options:["Bestellt eine Eröffnungsrunde für die Gruppe (gibt drunken-1 und enjoying-myself-1)","Findet die Pläne oder Geschäfte eines Mittrinkers heraus (Exposure)"] },
        { name:"PARTY (Feiern)", flavor:"Singt, prahlt, jubelt, ringt, und ist der Mittelpunkt der Feier", options:["Sorgt dafür, dass alle eine gute Zeit haben (gibt enjoying-myself-1)","Bringt Leute dazu, über ihre Sorgen zu reden (Exposure)"] },
        { name:"SPY AND STEAL (Ausspähen und Stehlen)", flavor:"Ist plötzlich nicht mehr an seinem Platz", options:["Nimmt etwas Wertvolles (streiche einen Tag)","Belauscht ein privates Gespräch (Exposure)","Verschwindet spurlos (Blocked)"] },
      ],
      source:"A Fox in the Dales – Szene 'A Tale at Starless Junction', „Weitere Aktivitäten“. Standardprofil, Core Book II, S. 165.",
    },
    { name:"CURSE EATER", difficulty:2, type:"Obstacle, Sapper",
      optional:true,
      desc:"Fluchesser sind Landstreicher, die Flüche reinigen, indem sie sie in Nahrung übertragen, die sie dann verzehren. Ihre Körper werden entstellt, ihre Haut mit Wunden bedeckt, und die meisten entwickeln durch dieses Schicksal ein mürrisches Gemüt. Die Dalish empfinden Ekel, Respekt und Mitleid zugleich, doch einem Fluchesser zu begegnen ist eine Unannehmlichkeit — es ist tabu, ihn zu ignorieren, aber seine befleckte Gegenwart droht, den Alltag zu infizieren.<br><br><strong>Wahre Natur:</strong> Ihre Praxis wurzelt in dunkler Wanecraft (Schwindmagie). Sie können cleansed-6 werden, wenn sie zuvor eine Woche vom Fluchessen fasten.",
      limits:[
        { label:"DRIVE AWAY (Vertreiben)", max:3 },
        { label:"EXCUSE YOURSELF (Sich verabschieden)", max:4 },
        { label:"SATISFY (Zufriedenstellen)", max:4 },
      ],
      tags:["pitiful (bemitleidenswert)", "hungry-2"],
      special:[{ title:"ABSCHIEDSWORTE (PARTING WORDS)", text:"Wer den Fluchesser vertreibt (drive-away) oder geht, ohne sich zu verabschieden (excusing-yourself) oder ihn zu füttern (satisfied), erhält guilty-3 und ill-repute-3. Ist er angry, zusätzlich cursed-3." }],
      threats:[
        { name:"INCONVENIENCE (Unannehmlichkeit)", flavor:"Läuft unsicher, auf seinen Stock gestützt, klagt über sein Unglück", options:["Macht sein Elend bekannt (guilty-2/schuldig-2)","Bettelt um Bezahlung (short-on-supplies-1, oder streiche einen Gegenstands-Tag)","Wird angry-2, wenn abgewiesen","Spürt Übernatürliches (Exposure)","Bringt Leute dazu, ihr Pech für ansteckend zu halten (bad-luck-2 oder self-sabotaging-2)"] },
        { name:"EAT CURSES (Flüche essen)", flavor:"Zerstampft eine Zutat mit einem Bissen Essen in seiner Bettelschale", options:["Überträgt einen Fluch in Nahrung (Nahrung erhält cursed-3)","Würgt verfluchte Nahrung auf jemanden (Complication oder cursed-1)","Bricht einen Fluchzauber (streiche zwei Tags oder dimmed-4)","Verzehrt die verfluchte Nahrung, würgend (gibt guilty-3, erhält hungry-3)"] },
      ],
      source:"A Fox in the Dales – Szene 'A Tale at Starless Junction', „Weitere Aktivitäten“. Standardprofil, Hearts of Ravensdale I, S. 264.",
    },
    { name:"STORMHELM KNIGHT", difficulty:3, img:"stormhelmKnight", type:"Influence, Watcher",
      optional:true,
      desc:"Da Stormhelm nun ein Auge auf die Dales wirft, werden fahrende Ritter der Stadt entsandt, um Geheimnisse und Schätze des hügeligen Landes zu entdecken — nützlich im heraufziehenden Krieg gegen den Winterkönig. In der Starless Junction als <strong>(Dythara) Lowtower</strong> und <strong>(Justine) Tanner</strong> gespielt. Dieser leicht gerüstete Ritter ist weit gereist. Seine Anwesenheit entfacht Träume und Ängste in den Herzen der Dalish. Insgeheim könnte er Cold-Hearted sein — ein Anhänger des Winterkönigs.",
      limits:[
        { label:"HARM (Schaden)", max:3 },
        { label:"CONVINCE (Überzeugen)", max:3 },
        { label:"BRIBE (Bestechen)", max:3 },
      ],
      tags:["foreign (fremdländisch)", "Helmian mail & plate armor (Helmische Ketten- und Plattenrüstung)", "rouncey horse (Reisepferd)", "steel shield (Stahlschild)", "sworn-3", "Knight of Stormhelm (Ritter von Stormhelm)"],
      threats:[
        { name:"SCOUT (Auskundschaften)", flavor:"Mustert die Landschaft, lauscht Gesprächen", options:["Wird alert-2","Meldet jemanden, der für Stormhelm wertvoll ist (Exposure oder marked-3)","Nutzt die Naivität der Leute aus (trusted-2)"] },
        { name:"UNSETTLE (Verunsichern)", flavor:"Spottet über das einfache Leben, erzählt hochtrabende Geschichten", options:["Inspiriert jemanden, Ritter zu werden (inspired-2)","Schikaniert einen Bauern (cowered-2)","Verkündet seine Pflicht, „die Reiche zu schützen“ (convinced-2)","Teilt Kriegsgräuel mit (terrified-3)","Rekrutiert jemanden (Ill Tidings oder New Challenge: Bürgermiliz)"] },
        { name:"CHALLENGE (Herausfordern)", flavor:"Ruft den Namen seines Hauses als Schlachtruf", options:["Verspottet einen Gegner (taunted-3)","Stürmt vor, schlägt brutal zu (wounded-3 und prone-2)","Hebt Schild und Schwert defensiv (parrying-2)","Ringt einem Gegner die Waffe aus der Hand (Tag streichen)"] },
      ],
      source:"A Fox in the Dales – Szene 'A Tale at Starless Junction', „Aus Furcht vor dem Winter“ (Lowtower & Tanner). Standardprofil, Hearts of Ravensdale I, S. 267.",
    },
  ],
  revelations:[
    { kind:"Lore", ref:"F", text:"Stormhelm, eine Stadt nördlich der Dales (ebenfalls einst Teil von Gwyrdolin), liegt im Kampf mit dem Winterkönig. (wiederholt)" },
  ],
  rewards:[
    "Ein kunstvolles Fuchsamulett von Shozauka Baba — gedacht für Azeria; bietet Schutz davor, gesehen oder beobachtet zu werden, kein bekanntes Oldways-Design.",
  ],
  tips:[],
},

/* 3 ---------------------------------------------------------- LANTERN WORLD */
{
  key:"lantern", kind:"scene", page:"S. 354–356",
  title:"Schatten in der Lantern World", en:"Shadows in the Lantern World",
  summary:"Soddenmores Nachtmarkt — Bright-Tails, die Kikimoras und die Wahrheit über Twilight Kin",
  overview:[],
  readAloud:[
    { page:"S. 354", label:"Die Lantern World", text:
      `Jenseits von Soddenmores morschen Bohlenwegen und verfallenden Hütten erstreckt sich ein ätherisches Reich wilder Farben und urzeitlichen Glühens. Das flackernde Licht von Papierlaternen tanzt in belustigenden, mitunter erschreckenden Mustern über die bemalten Tiermasken, die alle hier tragen – denn nur wenige wollen hier erkannt werden. Dies ist die Lantern World, wo alles seinen Preis hat – manches steiler als anderes.

Schulter an Schulter mit grinsenden Katzen und stirnrunzelnden Raben tobt eure Sinneswelt vor Gewürzen und Rauch, Fröhlichkeit und Rufen. Wölfe und Rehe bewirtschaften kleine Stände, beladen mit seltenen Früchten in geflochtenen Körben; verbotene Sorten getrockneten Fischs und Fleisches hängen an Blechhaken; gestohlene Amulette und Talismane baumeln von Regalen; exotische Schätze glitzern und locken. So viele unbekannte Düfte, so viele ungewöhnliche Anblicke – zahllose dunkle Wunder ringen um eure Aufmerksamkeit. Binnen Augenblicken habt ihr euch von diesem Ort verschlucken lassen. Selbst der Nachthimmel verschwindet, verdeckt von Zeltdächern und kunstvollen Schildern. Hinter euren Masken spürt ihr das verruchte Kribbeln der Erregung, denn hier ist wenig verboten, wo Begierden frei von Furcht und Scham ihren Lauf nehmen. Der perfekte Ort, um verborgene Geheimnisse zu finden und ein wenig neues Unheil anzustellen.` },
    { page:"S. 355", label:"Vixen's Tears", after:4, text:
      `Eingebettet zwischen zwei größeren Gebäuden erstrahlt die Apotheke Vixen's Tears in hellem Licht. Bunte Laternen rahmen ihre ruhige Ladenfront und tauchen die Welt in Safran- und Scharlachtöne. Ihr neigt den Kopf, während ihr durch die vorhangverhangene Tür in den engen Raum dahinter tretet. Keramikkrüge zieren strukturierte Wände, dazwischen seltsame Dosen und trübe Flaschen. Ein medizinischer Duft hängt schwer in der Luft, durchsetzt von auffälligen Parfüms. Gestapelte Fässer und Körbe bilden einen improvisierten Ladentisch, der den vorderen Raum vom Hinterzimmer trennt.

»Einen Moment, wenn ich bitten darf?«, ertönt eine sangesartige Stimme. Ein elegant geformter Kopf taucht hinter dem Tresen auf. Selbst verhüllt vom Kapuzenmantel schimmern Bright-Tails' leuchtende Augen im gedämpften Licht. Strähnen von prächtigem, gescheckten Haar – weiß und rostrot – umrahmen ihre scharfen Gesichtszüge. Sie lächelt zuckersüß. »Wie kann ich euch heute Abend behilflich sein?«` },
  ],
  flow:[
    `In dieser Szene betritt die Gefährtenschaft die <span class="gloss" onclick="openGloss('lantern-world-ref')">Lantern World</span> auf der Suche nach Informationen von <span class="gloss" onclick="openGloss('bright-tails-ref')">Bright-Tails</span>. Sie vermuten vielleicht, dass <span class="gloss" onclick="openGloss('azeria-ref')">Azeria</span> kürzlich etwas von der gefährlichen <span class="gloss" onclick="openGloss('lady-midday-ref')">Kikimora-Bande</span> gestohlen hat, und suchen daher womöglich auch nach Azeria selbst — dabei versuchen sie wahrscheinlich, die Aufmerksamkeit der Kikimoras zu meiden, oder suchen sie geradezu, sofern sie wirklich mutig sind.`,
    `<span class="section-heading">Durch die Geistertore</span> Eine verborgene nächtliche Marktszene, zugänglich über „Geistertore“ — unauffällige Kioske, versteckt in verbündeten Gebäuden. Die <strong>Faceless</strong>, Meisterhandwerker, die die berüchtigten Masken fertigen, geben unbedarften Neuankömmlingen manchmal komische Masken und kennzeichnen sie so als Trottel, die geschröpft werden sollen (marked-1); Red-Marshal-Ausrüstung bekommt marked-2. Der Status erschwert Reaktionen, die die untenstehende Konsequenz der Lantern World mildern sollen.`,
    `<span class="section-heading">Den Marktplatz durchqueren</span> Während die Helden über den Marktplatz nach Bright-Tails, der Kikimora-Bande oder Azeria selbst suchen, können ihnen die folgenden Vignetten begegnen:`,
    `<span class="section-heading">Die Kikimoras beobachten</span>Die Kikimoras beobachten Neuankömmlinge, die sich ihren verbündeten Betrügern nähern oder nach der fuchsmaskierten Diebin fragen. Suchen die Helden sie auf oder waren sie beim Nachfragen nach Azeria oder Milorada wenig zurückhaltend, tauchen 2–3 Brutale Gesetzlose auf und versuchen, die Helden mit Einschüchterung zum Reden zu bringen (📎 „Brutal Outlaw“ unten, CBII 131).`,
    `Glauben die Kikimoras, die Gruppe stecke mit der Diebin unter einer Decke, zwingen sie die Helden, ihnen zu folgen, oder greifen sogar an, um sie zu überwältigen. Die Helden werden dann vor <strong><span class="gloss" onclick="openGloss('lady-midday-ref')">Lady Midday</span></strong> gebracht (📎 „Outlaw Overlord“ unten, CBII 164, ohne Aspekt) — eine schlanke Frau in schwerer Kleidung und mit einem Fischerhut, der ihre Stellung symbolisiert. Sie ist eine grausame Anführerin ohne jede Geduld.`,
    `Verweigern die Helden jeden Hinweis auf Identität oder Aufenthaltsort der Diebin oder zeigen sich vollkommen unkooperativ, werden sie verprügelt, bis sie kampfunfähig sind, und im Sumpf abgeladen. Andernfalls ist Lady Midday bereit, sie gehen zu lassen — sie verweist sie nach <span class="gloss" onclick="openGloss('highglade')">Highglade</span>, da sie weiß, dass dies Miloradas Heimat war, und befiehlt ihnen, ihr die gestohlenen Gegenstände binnen zwei Wochen zurückzubringen, sonst „werdet ihr nirgendwo in den Dales mehr sicher sein“ (marked-3).`,
    `<span class="section-heading">Die Apotheke Vixen's Tears</span> <strong>Bright-Tails</strong> bleibt höflich, aber reticent-3, bis die Helden ihre Aufrichtigkeit beweisen. Eloquent und gerissen, verdreht sie Fragen, um mehr zu erfahren, als sie preisgibt (Exposure), und lenkt zudem ab, indem sie versucht, ihre Waren zu verkaufen. Auf Drohungen reagiert sie schlecht — Bright-Tails offenbart ihre Twilight-Kin-Natur, wenn sie hart bedrängt wird, und nutzt dabei Kräfte ähnlich denen Azerias (S. 360), um zu verschwinden und, falls nötig, aus den Schatten zuzuschlagen. Ihre kühle Fassade bekommt jedoch bald Risse, sobald Milorada erwähnt wird — sie offenbart ihre Trauer über deren Tod.`,
    `<span class="section-heading">Was Bright-Tails weiß</span>Bei gewürztem Tee bestätigt Bright-Tails Folgendes:
<ul>
<li>Vor ein paar Tagen versuchte Azeria, den Laden auszurauben, insbesondere um Familienbesitztümer Miloradas zu stehlen. Bright-Tails erwischte sie, und Azeria offenbarte, dass sie durch die Fuchsmaske von Bright-Tails' Verbindung zu ihrer Mutter erfahren hatte.</li>
<li>Bright-Tails teilte Azeria Miloradas Geschichte mit. Milorada war eine mutige und gerissene Trickserin, die Bright-Tails vor Lady Middays Erpressung und Drohungen rettete.</li>
<li>Azeria war schockiert von diesen Enthüllungen. Bright-Tails bot ihr hier Zuflucht an, doch Azeria lehnte ab. Stattdessen infiltrierte sie törichterweise Lady Middays Gemächer, um weitere Andenken ihrer Mutter zu stehlen, und zog dann weiter nach Highglade, zum Geburtsort ihrer Mutter, <span class="gloss" onclick="openGloss('cloudborne-croft-ref')">Cloudborne Croft</span>. Angesichts dessen, was Milorada Bright-Tails über jene Leute erzählte, könnte dem eigensinnigen Mädchen große Gefahr drohen.</li>
</ul>`,
    `Gefragt nach Azerias Vater, wird Bright-Tails wieder reticent-3. Die Dinge, die sie weiß, teilt sie lieber nicht, da sie persönlicher oder verborgener Natur sind. Sie lässt sich dennoch überzeugen, verlangt aber vielleicht zunächst, Azeria wieder in Sicherheit zu sehen (Yes, But…).
<ul>
<li><span class="gloss" onclick="openGloss('gajowy-ref')">Gajowy</span> hat als Geschöpf der Dämmerung die tierische Natur eines Fuchses.</li>
<li>Viele Geschöpfe der Dämmerung waren einst himmlische Wesen, und ihr wahrer Name ist Kinder der Dämmerung. Sie fielen aus der Gnade wegen ihrer Rolle im Krieg der Thaumaturgen.</li>
<li>Ihre Nachkommen werden von den Dalischen Twilight Kin genannt und erlangen häufig übernatürliche Eigenschaften, die sich zu verschiedenen Zeiten in ihrem Leben manifestieren können.</li>
<li>Es scheint, dass viele Geschöpfe der Dämmerung die Dales meiden oder sich zurückhalten, als würde etwas ihre Kräfte dämpfen. Sie ist sich nicht sicher, was diese schützende Aura bewirkt, doch ihr Einfluss lässt nach. Das erklärt, warum Gajowy — der sich bislang zurückgehalten hat — in letzter Zeit kühner geworden ist.</li>
</ul>`,
    `Aufmerksame Helden bemerken Bright-Tails' schmerzvollen Gesichtsausdruck, wenn von Gajowy die Rede ist. Bedrängt man sie, offenbart sie, dass sie ebenfalls eine Tochter Gajowys ist, wenn auch um Jahrzehnte älter als Azeria. Er war nie in ihrem Leben präsent, und es scheint, dasselbe gilt für ihre viel jüngere Halbschwester. Beide Twilight-Kin-Schwestern zeigen fuchsartige Merkmale und unheimliche Kräfte aufgrund ihres Blutes.`,
    `<span class="section-heading">Belohnungen</span> Für ihre Bereitschaft, Azeria zu Hilfe zu kommen, gibt Bright-Tails jedem Helden eine Flasche Tonikum, gefertigt nach Art der Oldways (S. 153). Ein Kräuterkundiger kann das Rezept sogar von ihr lernen. Dann flüstert sie ihnen ein letztes Geschenk zu — fleeting-luck-1 — und wünscht ihnen alles Gute auf ihrer Reise nach Highglade und weiter zu „Ein Familiengeheimnis“.`,
  ],
  vignettes:[
    { name:"Eine zufällige Begegnung", flavor:"Eine spatzenmaskierte Person nähert sich euch mit hastigen Schritten und fordert mit schriller Stimme eure Aufmerksamkeit.", options:[
      "Sie schlägt euch, hat euch für ihre untreue Liebe gehalten, und weint nun über ihr gebrochenes Herz (bruised-1 und embarrassed-2)",
      "Sie behauptet, euch mit jemand anderem verwechselt zu haben, und ihr bemerkt nicht, wie sich die Hand ihres Partners/ihrer Partnerin in eure Tasche schleicht (streicht einen Gegenstands-Tag)",
      "Sie nimmt euch die Maske ab (Exposure), entschuldigt sich dann, da sie gemerkt hat, die falsche Person erwischt zu haben",
    ]},
    { name:"Betört", flavor:"Die traumhaften Anblicke und Klänge des Marktes überwältigen eure Sinne, mit so vielen verlockenden Lastern im Angebot.", options:[
      "Ihr werdet in einen bezaubernden Tanz hineingezogen und dann zurückgelassen, fühlt euch dejected-1 und tired-1",
      "Ihr teilt einen leidenschaftlichen Kuss mit einer/einem Fremden, die/der verschwindet, bevor ihr reagieren könnt (enamored-2)",
      "Der dicke Duft exotischer Aromen und beißenden Rauchs überwältigt euch (hungry-1 oder coughing-2)",
    ]},
    { name:"Einkauf aus zweiter Hand", flavor:"Ihr entdeckt seltene, schwer erhältliche Ware — doch mit unklarer Vergangenheit.", options:[
      "Euer Kauf trägt eine unlautere Vergangenheit, die euch bald einholt (cursed-2 oder marked-2)",
      "In eurer Aufregung zahlt ihr weit mehr, als ihr solltet (short-on-coin-3)",
      "Ein Händler bemerkt etwas, das ihr bei euch tragt, und beginnt zu feilschen (Neue Challenge: Shrewd Merchant, CBII 133)",
    ]},
  ],
  npcs:[],
  challenges:[
    { name:"BRUTAL OUTLAW", difficulty:3, type:"Aggressor",
      desc:"Mit Waffengewalt überfällt der Gesetzlose Reisende und Wohlhabende und ergötzt sich an Brutalität, um zu beweisen, dass er bereit ist, Unschuldigen zu schaden. Insgeheim ist der Gesetzlose ein bisschen feige, bereit zu fliehen, sollte sein Hinterhalt nicht wie geplant verlaufen. In der Lantern World treten 2–3 Kikimoras auf, um Nachfragen zu Azeria oder Milorada mit Einschüchterung zu unterbinden.",
      limits:[
        { label:"HARM (Schaden)", max:3 },
        { label:"SCARE (Erschrecken)", max:3 },
      ],
      tags:["coward (Feigling)", "stolen sword (gestohlenes Schwert) oder stolen bow (gestohlener Bogen)", "brutal-2"],
      threats:[
        { name:"AMBUSH (Hinterhalt)", flavor:"Etwas bewegt sich in den Schatten", options:["Schießt Pfeile oder stürmt mit gezogener Waffe vor (intimidated-3 und wounded-1 oder streiche einen Waffen-Tag)","Tötet einen Umstehenden (intimidated-3, und Ill Tidings oder streiche einen Tag)"] },
        { name:"DEMAND (Fordern)", flavor:"Deutet aggressiv mit einer Waffe, ruft „Stehenbleiben und rausrücken!“", options:["Nimmt etwas Wertvolles (streiche einen Tag oder penniless-5)","Verletzt jemanden nur zum Spaß (wounded-2)"] },
        { name:"FIGHT (Kampf)", flavor:"Kichert und verlagert das Gewicht von einem Bein aufs andere, mustert seinen Gegner", options:["Schlägt mit einer Klinge zu oder beschießt jemanden mit Pfeilen (wounded-3)","Stößt einen Gegner zurück (Blocked oder off-balance-2)"] },
      ],
      source:"A Fox in the Dales – Szene 'Shadows in the Lantern World', „Die Kikimoras beobachten“. Standardprofil, Core Book II, S. 131.",
    },
    { name:"OUTLAW OVERLORD", difficulty:4, type:"Countdown, Influence, Aggressor",
      desc:"Meister der Diebesgilde, Königin der Unterwelt — hier als <strong>Lady Midday</strong>, Anführerin der Kikimora-Bande, gespielt (ohne eigenen Aspekt). Sie wendet jede Situation zu ihrem Vorteil, stets bereit für den unvermeidlichen Verrat. Ein Vorhaben der Anführerin zu vereiteln ist ein Schachspiel krimineller Intrige: Sie treibt scheming voran, während der Held foil, den polaren Status, voranzutreiben versucht.",
      limits:[
        { label:"HARM (Schaden)", max:4 },
        { label:"EXECUTE / FOIL SCHEME (Vorhaben ausführen / vereiteln)", max:4 },
        { label:"THREATEN (Bedrohen)", max:6 },
      ],
      tags:["master thief (Meisterdieb)", "minions (Handlanger)", "vengeful-2", "prepared-3", "hiding-intentions-3", "Organized crime (Organisiertes Verbrechen)"],
      special:[{ title:"BEWACHT (GUARDED)", text:"Würde die Anführerin körperlich angegriffen oder verletzt, während ihre Wächter sie schützen können, werden stattdessen die Wächter zum Ziel dieser Aktion — bevor Power für die Aktion gezählt wird." }],
      threats:[
        { name:"THREATEN (Bedrohen)", flavor:"Heißt die Helden in ihrer prunkvollen Höhle willkommen", options:["Die Andeutungen sind nicht subtil, diese Person ist gefährlich (intimidated-3)","Mehrere Tunichtgute erscheinen von den Seiten und von hinten (surrounded-3 und New Challenge: Brutale Gesetzlose)","Schlägt plötzlich mit einer meisterlich gefertigten Waffe zu (surprised-2 und wounded-4, und falls nicht vollständig gelindert, poisoned-4)"] },
        { name:"BARGAIN (Handeln)", flavor:"Erwägt ein Angebot der Helden", options:["Enthüllt ihre wahren Absichten (Ill Tidings und intimidated-2) oder deutet falsche an (erhält hiding-intentions-3)","Liest die Einstellung und Absichten ihres Gesprächspartners (Exposure)","Weist einen Vorschlag rundheraus zurück (Blocked)","Willigt in einen Deal ein, aber mit einem gewaltigen Vorbehalt (Yes, But…), der die Figuren vor ein Dilemma stellt (Complication)"] },
        { name:"PAYBACK (Vergeltung)", flavor:"Die Helden hätten es besser wissen sollen, als sich in die Pläne der Anführerin zu verstricken", options:["Jemand beginnt, einem Helden zu folgen, auf der Suche nach einer Gelegenheit, etwas Wertvolles zu stehlen (New Challenge: Flinker Taschendieb)","Jemand beginnt, einem Helden zu folgen, auf der Suche nach einer Gelegenheit, ihn zu töten (New Challenge: Catspaw)","Jemand, der einem Helden nahesteht, erleidet ein schweres „Unglück“, um einen Punkt zu beweisen (Ill Tidings)"] },
        { name:"SCHEME (Ränkeschmieden)", flavor:"Während die Helden sich ausruhen, erholen, oder sich um andere Dinge kümmern, treibt sie ihr Vorhaben voran", options:["Macht Fortschritte mit ihrem Vorhaben oder erholt sich von Rückschlägen (scheming-1)","Neue Hindernisse tauchen im Weg der Helden auf, mit freundlicher Empfehlung der Kikimoras (Blocked oder erschaffe einen Tag wie unerwünscht-in-der-taverne, hafenstreik, unruhen)"] },
      ],
      source:"A Fox in the Dales – Szene 'Shadows in the Lantern World', Lady Midday. Standardprofil (ohne Aspekt), Core Book II, S. 164.",
    },
  ],
  revelations:[
    { kind:"Core", ref:"2", text:"Etwas, das die Dales seit Jahrhunderten vor äußeren Kräften geschützt hat, schwindet dahin. (wiederholt)" },
    { kind:"Lore", ref:"E", text:"Es gibt viele Arten von Geschöpfen der Dämmerung, manche gefährlich, manche hilfreich." },
    { kind:"Lore", ref:"K", text:"Viele Geschöpfe der Dämmerung waren einst Kinder der Dämmerung — daher ihr Name —, doch sie fielen wegen ihrer Rolle im Krieg der Thaumaturgen in Ungnade." },
  ],
  rewards:[
    "Eine Flasche Tonikum nach Art der Oldways von Bright-Tails (Rezept erlernbar für Kräuterkundige).",
    "fleeting-luck-1 als Abschiedsgeschenk von Bright-Tails.",
  ],
  tips:[],
},

/* 4 ---------------------------------------------------------- FAMILY SECRET */
{
  key:"cloudborne", kind:"scene", page:"S. 356–357",
  title:"Ein Familiengeheimnis", en:"A Family Secret",
  summary:"Cloudborne Croft — die Familie verleugnet Azeria, doch Deita hilft heimlich",
  overview:[],
  readAloud:[
    { page:"S. 356", label:"Cloudborne Croft", text:
      `Cloudborne Croft ist ein Name, den jeder in Highglade kennt. Nahe dem Herzen des Dale gelegen, liegt der weitläufige Hof eingebettet zwischen blühenden Wiesen und alpinen Wäldern. Seine über Generationen gewachsenen Gebäude und steinernen Mauern zeichnen die Landschaft, wo kräftiges Vieh gemächlich weidet. Gefärbte Halsbänder und lebhafte Bänder schmücken jedes Tier, als überstrahle die Zurschaustellung die eigentliche Erzeugung.

Das Hauptlanghaus erhebt sich wie ein gewaltiger Strauß aus Blumen und Fahnen. Arbeiter huschen umher, wachsam beäugt von der Familie; manche der eiligen jungen Männer und Frauen sind Hausdiener – ein seltener Anblick in den Dales, doch eine alte Tradition der Highglade-Ranchfamilien, dem Nächsten, was die Dales an Adel kennen.

Keiner der Verantwortlichen scheint auch nur einen gütigen Knochen im Leib zu haben; ihre Stimmen sind erfüllt von unterdrücktem Zorn, jeder Befehl gebellt, fordernd. Ein großer, kräftiger Mann wendet sich euch zu, unter seinem prächtigen Hut hervorstarrend. Er bietet ein zögerliches Winken an – weder Willkommen noch Abweisung.` },
  ],
  flow:[
    `Die Helden treffen Miloradas Eltern <span class="gloss" onclick="openGloss('cloudbornes-ref')">Lukas und Chiara Cloudborne</span> von <span class="gloss" onclick="openGloss('cloudborne-croft-ref')">Cloudborne Croft</span> (S. 88), sowie ihre drei erwachsenen Geschwister, <strong>Jacobé</strong>, <strong>Deita</strong> und <strong>Bäni</strong>. Die Helden suchen nach Hinweisen auf <span class="gloss" onclick="openGloss('azeria-ref')">Azerias</span> möglichen Aufenthaltsort, doch die Cloudbornes sind wenig kooperativ.`,
    `<span class="section-heading">Azerias Großeltern befragen</span> Der relative Reichtum und Einfluss der Cloudbornes in <span class="gloss" onclick="openGloss('highglade')">Highglade</span> macht sie haughty-2, da sie auf die meisten anderen Dalesleute herabsehen. Lukas und Chiara geben sich bestürzt, als sie vom Tod ihrer Tochter hören, sind aber nicht überrascht. Es sind viele Winter her, seit sie sie zuletzt sahen, und wenn sie es nicht für nötig hielt, zurückzukommen, nun, das war ihr Problem. Sie geben Miloradas eigensinnigem, schwärmerischem Wesen die Schuld und behaupten, sie sei mit irgendeinem Wanderhändler durchgebrannt. Wird Azeria erwähnt, werden sie indignant-3 und sichtlich aufgebracht. Sie leugnen die Existenz des Kindes und werfen den Helden vor, an Ammenmärchen zu glauben. Die Helden könnten aufgefordert werden, das Gelände zu verlassen (Blocked), oder man bittet sie, jeden weiteren Kontakt mit den Cloudbornes selbst zu unterlassen.`,
    `<span class="section-heading">Herumschnüffeln enthüllt</span>Ob die Helden mit Leuten auf dem Hof reden, sich heranschleichen und die Cloudbornes belauschen oder in ihr Haus einbrechen — Folgendes lässt sich in Erfahrung bringen:
<ul>
<li>Vor ein paar Abenden wurden die Cloudbornes von einer fuchsmaskierten Gestalt bestohlen, die mehrere Wertsachen mitgehen ließ, darunter Bücher und Kleidungsstücke aus Miloradas altem Zimmer. Die Familie behält dies für sich und hat sich nicht an die Red Marshals gewandt.</li>
<li>Sie wissen von Azeria und verdächtigen sie bereits als Diebin, wissen aber nicht, wo sie sich aufhält.</li>
<li>Miloradas Verschwinden ersparte ihnen einst mögliche Peinlichkeiten. Jetzt ist Jacobé ihr Nachfolger, und Azerias Wiederauftauchen könnte ihrem politischen Ansehen schaden, sollte jemand erfahren, dass sie Twilight Kin ist; zudem hat sie einen gewissen Anspruch auf den Hof. Sie betrachten ihre Existenz als inakzeptable Bedrohung.</li>
</ul>`,
    `<span class="section-heading">Eine hilfsbereite Cloudborne</span>Irgendwann nimmt <strong>Deita</strong> Kontakt zu den Helden auf und bittet sie verstohlen, sie zu später Stunde am Rand von Cloudborne Croft zu treffen — allein. Dies könnte erfordern, einen der Wachhunde der Cloudbornes zu umgehen (📎 „Imposing Pet“ unten, CBII 115), oder einen Unverletzlichen Ort (S. 248) zu betreten.
Deita erinnert sich an Milorada als durch und durch gütig und konnte über die Jahre ein paar Briefe mit ihr austauschen; durch die Briefe lernte Deita Azeria kennen und hat ein Faible für ihre Nichte. Sie teilt bereitwillig Folgendes mit, in der Hoffnung, die Helden mögen zu ihren Gunsten handeln:
<ul>
<li>Milorada verbrachte ihre freie Zeit in <strong>Sionann Grove</strong>, einem verlassenen, weiter entfernten Holzfällerlager.</li>
<li>Als Deita noch ein kleines Mädchen war, erzählte ihr Milorada fantasievolle Geschichten — darunter, wie sie dort ihrer wahren Liebe begegnete.</li>
<li>Sie warnt die Helden, dass Jacobé und ihre Eltern sich seit dem Diebstahl seltsam verhalten und in scharfem Flüsterton miteinander reden.</li>
</ul>`,
    `<span class="section-heading">In den Wald hinein</span> Um Sionann Grove zu erreichen, müssen die Helden durch unheimliches, unbezähmtes Waldland reisen. Die Wälder von Highglade sind generell schütter, doch dieser Wald wirkt wilder als gewöhnlich, mit verwirrenden Schatten überall. Während die Helden den Wald durchqueren (traverse 3), sollten sie auf der Hut sein; die stets findige Azeria hat entlang der zugewachsenen Pfade mehrere nicht-tödliche Fallen aufgestellt, um mögliche Verfolger abzuwehren. Diese sollen niemanden ernsthaft verletzen oder außer Gefecht setzen, sondern lediglich der bedrohlichen Atmosphäre des Ortes Ausdruck verleihen.
<ul>
<li>Eine seichte, schlammige Grube öffnet sich vor euch (drenched-3 und bruised-1).</li>
<li>Ein großer Ast schnellt hervor und trifft euch ins Gesicht (stunned-2).</li>
<li>Ein alter Tontopf fällt herab und zerschellt in einer Wolke aus Kiefernstaub (coughing-2 und Exposure).</li>
<li>Eine Schlinge ist an rostigen Kuhglocken befestigt und alarmiert Azeria (Exposure).</li>
</ul>`,
    `Zudem wird die Gegenwart eines unsichtbaren Beobachters immer stärker spürbar. Haben die Helden dem bislang nicht nachgespürt, könnten sie nun herausfinden, wer dahintersteckt (lies „Der lauernde Schatten“, S. 349).`,
  ],
  npcs:[{ name:"Jacobé Cloudborne", role:"Miloradas Bruder, künftiger Hoferbe", text:"Sieht in Azerias Existenz eine Bedrohung für sein politisches Ansehen als künftiger Hofnachfolger. Verteidigt später seinen Vater im Finale (harm 3, protective-2)." },
    { name:"Deita Cloudborne", role:"Miloradas jüngere Schwester, heimliche Verbündete", after:2, text:"Einzige Cloudborne mit echtem Mitgefühl für Milorada und Azeria. Trifft die Helden heimlich und weist den Weg nach Sionann Grove." },
    { name:"Bäni Cloudborne", role:"Miloradas Bruder", text:"Erscheint zusammen mit der übrigen Familie, ohne eigene besondere Rolle in dieser Szene." },
  ],
  challenges:[
    { name:"IMPOSING PET", difficulty:1, type:"Pursuer, Watcher, Aggressor",
      optional:true,
      desc:"Der bissige Wachhund an der Scheune, die langkrallige schwarze Katze, die immer am Feuer sitzt, oder die Ziege, die dich zu Boden treten möchte – solche Tiere scheinen immer präsent zu sein und stets nach neuen Opfern Ausschau zu halten. Bewacht hier Cloudborne Croft, falls die Helden versuchen, sich heimlich zum Treffen mit Deita zu schleichen.",
      limits:[
        { label:"SUBDUE (Bezwingen)", max:1 },
        { label:"SCARE (Erschrecken)", max:2 },
        { label:"OUTRUN (Überholen)", max:3 },
        { label:"BOND (Bindung)", max:2 },
      ],
      tags:["alert-1"],
      threats:[
        { name:"WATCH (Beobachten)", flavor:"Hält inne beim Kauen, Graben oder Dösen und spitzt die Ohren", options:["Erspäht sein nächstes Opfer und beginnt es zu jagen (Exposure)","Erschreckt sein nächstes Opfer, selbst ohne es zu bemerken (scared-1)"] },
        { name:"CHASE (Verfolgen)", flavor:"Verfolgt inbrünstig, wirft Werkzeuge, Möbel und Ackergeräte um", options:["Holt seine Beute ein (entfernt eine Stufe von outrun)"] },
        { name:"ATTACK (Angreifen)", flavor:"Stürzt sich auf sein Opfer", options:["Kratzt, beißt und stampft auf sein Opfer ein (ouch-1)","Erschreckt sein Opfer (scared-1)","Zerbricht oder schnappt sich etwas Nützliches (streiche einen Tag)"] },
      ],
      source:"A Fox in the Dales – Szene 'A Family Secret', Wachhund von Cloudborne Croft. Standardprofil, Core Book II, S. 115.",
    },
  ],
  revelations:[],
  rewards:[],
  tips:[],
},

/* 5 ---------------------------------------------------------- FOX'S DEN */
{
  key:"foxden", kind:"scene", page:"S. 358–360",
  title:"Der Fuchsbau", en:"The Fox's Den",
  summary:"Sionann Grove — Azeria konfrontieren, Gajowy zeigt sich, die Cloudbornes greifen an",
  overview:[],
  readAloud:[
    { page:"S. 358", label:"Sionann Grove", text:
      `Die Natur hat sich weite Teile von Sionann Grove zurückerobert. Gestrüpp und Bäume verflechten sich zwischen den morschen Hütten, überzogen von Flechten und Moos, und bieten heute Zuflucht für Tiere und Insekten. Verfallene Baumstämme und Werkzeuge liegen im Verfall, geduckt wie stille Wächter. Trotz alledem hängt ein Hauch von Holzrauch und kochendem Fleisch in der Luft. Aus dem Schornstein eines steinernen Gebäudes, das inmitten des Verfalls kauert, steigt eine dünne, graue Rauchsäule empor. Neben dem Gebäude reckt sich eine einzelne Eiche empor, alt und eindrucksvoll. Zwischen ihren Ästen hängen Dutzende Fuchsamulette an Sehnen und Schnüren. Manche sind neu, die meisten alt und verwittert. Aus irgendeinem Grund erfüllen sie euch mit Bedauern und Trauer, als hättet ihr das verborgene Schuldgefühl eines anderen gestört.` },
    { page:"S. 359", label:"Die Hunde kommen", after:7, text:
      `Azerias Kopf fährt hoch, wachsam und verwirrt. Ihre Ohren und ihre Nase zucken vor fuchshafter Neugier – und Furcht. Ihre leuchtenden Augen weiten sich, voller Anschuldigungen und Unsicherheit auf euch gerichtet. »Sie sind hier!«, ruft sie aus und huscht in den Schatten.

Tatsächlich hört ihr nun herannahende Stimmen und zornige Rufe. Hinter zerbrochenen Mauern und zwischen moosbewachsenen Bäumen wippen Fackellichter in einiger Entfernung und erhellen den verdunkelten Wald. Lukas Cloudborne und sein Sohn Jacobé, begleitet von mehreren ihrer Landarbeiter, alle bewaffnet mit landwirtschaftlichem Gerät, bahnen sich ihren Weg voran. Mordlust brennt in ihren Augen.` },
  ],
  flow:[
    `In dieser letzten Szene müssen die Helden <span class="gloss" onclick="openGloss('azeria-ref')">Azerias</span> Vertrauen gewinnen oder sie gefangen nehmen; zur weiteren Erschwerung treffen <span class="gloss" onclick="openGloss('gajowy-ref')">Gajowy</span> und die Cloudbornes ein, um einzugreifen und durchzusetzen, was ihrer Meinung nach Azerias Schicksal sein sollte.`,
    `<span class="section-heading">Azeria konfrontieren</span> Im Steingebäude des Vorarbeiters finden die Helden Beweise, dass Azeria hier gelebt hat, vermutlich für einige Tage. Eine oberflächliche Suche fördert ihre gestohlene Beute zutage, darunter Radmilas Utensilien und Lady Middays Besitztümer. Azeria versteckt sich und ist sich der Ankunft der Helden wahrscheinlich bewusst (es sei denn, sie waren außergewöhnlich leise), wobei sie ihre Fähigkeit nutzt, Schatten zu manipulieren, um unentdeckt zu bleiben (in-shadow-3). Sie ist nicht bereit, sich den Helden direkt zu stellen. Zunächst versucht sie, verborgen zu bleiben, dann versucht sie, sie mit heraufbeschworenen Fuchsschatten und Neckereien aus dem Verborgenen heraus zu vertreiben, während sie sich ständig um das verfallene Gebäude herum bewegt. Ihre alienation als Ausgestoßene — durch die Leute von <span class="gloss" onclick="openGloss('milkrest')">Milkrest</span>, <span class="gloss" onclick="openGloss('soddenmore-ref')">Soddenmore</span> und die Familie ihrer Mutter — macht sie sehr misstrauisch gegenüber Fremden. Zeigt man ihr jedoch das kunstvolle Fuchsamulett ihrer Mutter, kann dieser Status als Simple Action entfernt werden. Azeria ist misstrauisch, aber jung und voller Schmerz und reagiert letztlich auf Empathie und Ehrlichkeit.`,
    `<span class="section-heading">Mögliche Ausgänge</span>
<ul>
<li>Azeria könnte escape 5 (entkommen) in den Wald, wobei die Helden dann sowohl mit Gajowy als auch mit den Cloudbornes fertigwerden müssen.</li>
<li>Die Helden können Azeria corner 5 (in die Enge treiben), was jedoch ihr Misstrauen noch weiter verschlechtert. Ist sie in die Enge getrieben, kann sie nicht länger fliehen und erhält alienated-3.</li>
<li>Wenn die Helden sie befriend 4 (für sich gewinnen), öffnet sich Azeria ihnen (siehe „Azeria öffnet sich“ unten).</li>
<li>Wird Azeria körperlich gefährdet, oder planen die Helden, sie gefangen zu nehmen, tritt Gajowy aus dem Schatten (siehe unten).</li>
</ul>`,
    `<span class="section-heading">Azeria öffnet sich</span> Ist sie einmal für sich gewonnen, offenbart sich Azeria den Helden, einschließlich ihrer vulpinen Züge — die, wie sie zugibt, sie ängstigen und beschämen. Sie begannen vor einigen Monaten aufzutreten, und ihre Mutter konnte oder wollte sie ihr nicht erklären. Sie zeigte sich daraufhin nicht mehr öffentlich in Milkrest und wurde zunehmend verzweifelter.

Nach dem Tod ihrer Mutter sah Azeria keine andere Wahl, als zu fliehen und auf sich allein gestellt zu sein. Sie bereut, von Radmila gestohlen zu haben, doch sie brauchte Geld und wollte Andenken an ihre guten Zeiten dort; als sie die Fuchsmaske untersuchte, bemerkte sie, dass sie mit dem Namen „Bright Tails“ markiert war, und erinnerte sich, dass ihre Mutter von Soddenmore gesprochen hatte.

Von dort aus folgte sie dem Weg ihrer Mutter nach <span class="gloss" onclick="openGloss('highglade')">Highglade</span> und beobachtete eine Zeit lang die Cloudbornes. Inzwischen versteht sie, dass Milorada alles geopfert hat, um sie vor ihnen zu schützen. Sie bedauert die Sorgen und den Schmerz, die sie verursacht hat, und wenn die Helden nach den gestohlenen Gegenständen fragen, gibt sie alles zurück, was nicht von persönlicher Bedeutung ist.

Dann verkündet sie ihre Absichten: noch einmal in <span class="gloss" onclick="openGloss('cloudborne-croft-ref')">Cloudborne Croft</span> einzudringen und all ihre Wertsachen zu stehlen, um Gerechtigkeit für ihre Mutter zu erlangen. Sie vermutet, dass das kunstvolle Fuchsamulett und jene im Baum allesamt von ihrem Vater stammen. Tatsächlich, fährt sie fort, nehme sie immer wieder „seine Witterung auf“, als würde er ihr folgen.`,
    `<strong>Erzähler-Notiz — Die Legende vom Schleicher:</strong> Seit Jahrzehnten geistert die Kunde von einem geheimnisvollen, fuchsartigen Schleicher durch die zentralen Dales — er hat lokale Legenden inspiriert und sogar eine Räuberbande. Oft erscheint er als schelmisch gutaussehender, dunkelhaariger Mann mit scharfen, verrauchten Zügen, leuchtend goldenen Augen und einem verwegenen Lächeln, gekleidet in raue Reisekleidung. Weise warnen Waldreisende davor, jemals mit einem solchen Fremden zu sprechen, denn er ist ein Geschöpf, das sich meisterhaft auf Verkleidung und Verführung versteht — ein Herr der Schatten.`,
    `<span class="section-heading">Gajowy tritt aus dem Schatten</span> Nachdem die Helden etwas Zeit mit Azeria verbringen konnten, oder wenn sie in Gefahr ist oder in die Enge getrieben wird, offenbart sich Gajowy. Ergriffen von der emotionalen Szene und dem Anblick seiner so aufgewühlten Tochter, tritt Gajowy mit offenen Armen aus dem Schatten und vereint sich mit ihr.

Gajowy möchte seiner Tochter versprechen, sie zu beschützen, doch die Last all dessen, was er über die Welt und ihre vielen Gefahren weiß, gepaart mit Azerias gemischten Gefühlen über seine Abwesenheit in ihrem Leben, macht dies kompliziert. Er zögert, nimmt unbedachte Worte zurück und ist offen über seine Gefühle — alles Verhaltensweisen, die ihm erkennbar fremd sind.

Gajowy ist eindeutig ein Geschöpf der Dämmerung von einiger Macht, und sowohl Azeria als auch die Helden könnten Fragen oder Forderungen an ihn haben — doch er weiß, dass die Cloudbornes bald eintreffen werden, und es bleibt keine Zeit für ausführliche Erklärungen. Gajowy warnt die Helden, dass er eingreifen wird, sollten sie oder die Cloudbornes versuchen, Azeria zu verletzen oder ihr die Freiheit zu verweigern — und das würde bedeuten, dass nur eine Seite lebend davonkommt. Wollen die Helden ein Blutvergießen verhindern, müssen sie sich selbst um die Cloudbornes kümmern.

Der fuchsähnliche Schleicher tritt daraufhin einen Schritt zurück und verschwindet in den Schatten — gerade noch rechtzeitig.`,
    `<strong>Erzähler-Notiz — Gajowy und der Saum:</strong> Je mehr Dalesleute Gajowy als unnatürliches Wesen wahrnehmen, desto stärker wendet sich der Saum gegen ihn.`,
    `<span class="section-heading">Die Hunde kommen</span> Nachdem sie Deita eingeschüchtert haben, um zu erfahren, was diese den Helden erzählt hat, treffen die Cloudbornes in Sionann Grove ein, um ihre Enkelin gefangen zu nehmen. Lukas fordert, dass die Helden Azeria ausliefern, und betont, sie sei ein hinterlistiges Geschöpf der Dämmerung, ein bösartiges Wesen, das beseitigt werden müsse. Er beklagt, wie seine arme Tochter dazu „verführt wurde, das kleine Biest zu bekommen.“ Er schwört, die Helden würden reich belohnt, wenn sie kooperieren — doch er hat nicht die Absicht, sie den Hain lebend verlassen zu lassen, da sie zu viel wissen. Jacobé und die treuen Landarbeiter unterstützen seinen gewalttätigen Plan.

Lukas ist hostile-3, aber zu alt, um selbst zu den Waffen zu greifen, und wird stattdessen von seinem Sohn Jacobé verteidigt (harm 3, protective-2). Die Landarbeiter sind eine Mischung aus loyal-2 und bullied-2 — kommt es zum Kampf, sollte es ein bis zwei pro Held geben.

Die Situation wird schnell hitzig und kann sich zu einer regelrechten Belagerung entwickeln. Wirken die Helden unterlegen, oder droht Azeria, gefangen oder verletzt zu werden, greift Gajowy ein, um zu helfen. Allerdings scheint er von einer unsichtbaren Macht zurückgehalten zu werden — und könnte im Gefecht durchaus getötet werden. Zunächst verliert er seinen Might-Vorteil; danach werden dalische Helden, die gegen ihn handeln, Favored, und dalische Helden, die ihm helfen, Imperiled.`,
  ],
  npcs:[],
  challenges:[
    { name:"AZERIA", img:"azeria", difficulty:2, type:"Quarry, Sapper, Charge",
      desc:`Azeria ist ein zierliches, drahtiges jugendliches Mädchen in schmutzigem Diebesleder. Sie trägt eine knochenweiße Fuchsmaske mit roten Streifen; ihr zerzaustes rotorangenes Haar mit blonden und schwarzen Strähnen verdeckt nur teilweise ihre spitzen, schwarz gespitzten Ohren. Ihre Twilight-Kin-Fähigkeiten sind noch jung, aber stark genug, um unnatürliche Schatten zu wirken oder kleine Illusionen zu erzeugen.`,
      limits:[
        { label:"BEFRIEND (Anfreunden)", max:4 },
        { label:"ESCAPE / CORNER (Entkommen / In die Enge treiben)", max:5, note:"Ist Azeria cornered (in die Enge getrieben), kann sie nicht mehr entkommen und erhält alienated-3." },
        { label:"HARM (Verletzen)", max:1 },
      ],
      tags:["trickster (Trickser)", "vulpine senses (fuchsartige Sinne)", "alienated-3", "in-shadow-3"],
      special:[{ title:"ZU HILFE EILEN (TO THE RESCUE)", text:"Würde Azeria einen harm-Status erhalten, greift Gajowy ein, um seine Tochter zu schützen." }],
      threats:[
        { name:"CONFUSE (Verwirren)", flavor:"Wirft tanzende Schatten, um zu täuschen", options:["Lockt jemanden mit falschen Schatten weg (distracted-2, oder distracted-1 für alle in der Nähe)","Zieht umherziehende Schatten näher heran (erhält in-shadow-2)"] },
        { name:"CONFRONT (Konfrontieren)", flavor:"Steht da und schreit „Weg von mir! Lass mich in Ruhe!“", options:["Verlangt, dass jemand seine Waffe wegwirft (Waffen-Tag streichen)","Wirft einen Stein nach jemandem (stunned-1)","Zieht umherziehende Schatten näher heran (erhält in-shadow-2)"] },
        { name:"RUN AWAY (Weglaufen)", flavor:"Bleibt in der Dunkelheit und schleicht sich vor Verfolgern davon", options:["Huscht aus dem Blickfeld (erhält escaping-1)","Lockt jemanden in eine ihrer Astfallen (stunned-2)","Bricht in Richtung Wald auf (erhält escaping-2, verliert aber alle in-shadow-Stufen)"] },
      ],
      source:"A Fox in the Dales – Finale 'The Fox's Den'. Standardprofil, Twilight Deck – Adversaries.",
    },
    { name:"GAJOWY", difficulty:3, img:"gajowy", type:"Mystery, Support, Aggressor",
      desc:`Ein geheimnisvoller fuchsartiger Schleicher streift seit Jahrzehnten durch die zentralen Dales, inspiriert lokale Legenden und sogar eine Räuberbande. Meist erscheint er als schelmisch gutaussehender, dunkelhaariger Mann mit scharfen, verrauchten Zügen, leuchtend goldenen Augen und einem verwegenen Lächeln, in derber Reisekleidung. Alle aufgeführten Konsequenzen von Gajowy werden durch seine Twilight-Magie verstärkt.`,
      limits:[
        { label:"CONVINCE (Überzeugen)", max:4 },
        { label:"HARM (Schaden)", max:5 },
      ],
      tags:["seasoned outlaw (erfahrener Gesetzloser)", "vulpine senses (fuchsartige Sinne)", "in-shadow-3 oder disguised-3 oder inscrutable-3", "Twilight magic (Dämmermagie)", "Potent spirit (Mächtiger Geist)"],
      secrets:[
        { title:"Wahre Natur", text:"Gajowy ist ein Fallen Leaf (Gefallenes Blatt), einst der Star of Concealed Feelings and Secret Trysts (Stern der verborgenen Gefühle und heimlichen Rendezvous). Als er fiel, äußerte sich seine Verschlagenheit als rauchiger Fuchs, doch seine ursprüngliche Macht ist die von Schatten und Leidenschaft." },
        { title:"Schwäche", text:"Gajowy kann einem heimlichen Rendezvous nicht widerstehen. Glaubt er, wirklich allein mit jemandem zu sein, den er begehrt, verliert er alle verbergenden Status. Liebestränke und Amulette sind eine Vulnerability seiner Mighty-Aspekte." },
      ],
      threats:[
        { name:"CONCEAL (Verbergen)", flavor:"Schatten wabern in der Nähe mit rauchigen Flammenzungen", options:["Wechselt zwischen Verbergen seiner Position, Identität oder Gedanken (erhält in-shadow-3 oder disguised-3 oder inscrutable-3, entfernt die anderen Status)","Hüllt jemand anderen in Schatten (gibt in-shadow-2 oder disguised-2 oder inscrutable-2)"] },
        { name:"IMPASSION (Leidenschaft entfachen)", flavor:"Nähert sich mit verwegenem Lächeln, Flammen flackern in seinen betörenden Augen", options:["Bezaubert mit Charme und Magnetismus (beguiled-2) oder lässt ein Herz rasen (exhilarated-2 oder swooning-2)"] },
        { name:"FIGHT (Kampf)", flavor:"Zieht seinen Krummsäbel, zeigt seine Reißzähne, bereit zum Sprung", options:["Bewegt sich wie ein flüchtiger Schatten, schlägt mit Kralle und Klinge zu (wounded-3)","Hüllt einen Gegner in Schatten und Rauch (blinded-2 und coughing-2)","Lässt fuchsschweifartige Flammenzungen einen Gegner umkreisen (der Gegner wählt: restrained-2 oder burned-2)"] },
      ],
      source:"A Fox in the Dales – Finale 'The Fox's Den', „Gajowy tritt aus dem Schatten“/„Die Hunde kommen“. Standardprofil, Twilight Deck – Creatures of Twilight.",
    },
    { name:"RESPECTED ELDER", difficulty:2, type:"Influence",
      desc:"Kleine Gemeinschaften brauchen wenig Verwaltung. Kommt es zu Streitigkeiten, blicken die Ortsansässigen zu „Ältesten“ auf, um sie zu lösen. Hier als <strong>Lukas Cloudborne</strong> gespielt: hostile-3, aber zu alt, um selbst zu den Waffen zu greifen — er wird von seinem Sohn Jacobé verteidigt (harm 3, protective-2).",
      limits:[
        { label:"CONVINCE (Überzeugen)", max:3 },
        { label:"SCARE (Erschrecken)", max:2 },
      ],
      tags:["community's high regard (hohes Ansehen der Gemeinschaft)", "seen it all (schon alles gesehen)", "composed-2", "hostile-3"],
      threats:[
        { name:"ASSERT AUTHORITY (Autorität durchsetzen)", flavor:"Verschränkt die Hände und hört aufmerksam zu", options:["Blickt mit gerunzelter Stirn streng und tadelt jemanden für sein Verhalten (embarrassed-2)","Fällt eine sozial bindende Entscheidung (gibt bound-2)","Verlangt eine Gegenleistung (Yes, But…, streiche einen Tag, short-on-coin-2)","Weist eine Bitte ab (Blocked)"] },
        { name:"CONTROL THE CROWD (Die Menge kontrollieren)", flavor:"Hebt die Hände und spricht beruhigend zur Menge", options:["Verspricht, es gebe nichts zu befürchten (reassured-2 für Gemeindemitglieder)","Wendet die Menge gegen die Helden (entfernt bis zu 2 Stufen von convinced einer Menge, oder gibt ihr resenting-2 oder distrustful-2/misstrauisch-2)"] },
      ],
      source:"A Fox in the Dales – Finale 'The Fox's Den', Lukas Cloudborne. Standardprofil (reflavored), Core Book II, S. 117.",
    },
    { name:"COMMONER MILITIA", type:"Varies",
      desc:"Nicht jeder wird ein sagenhafter Held, ein schrecklicher Zauberer oder ein imposanter Herrscher. Hier als die <strong>Landarbeiter der Cloudbornes</strong> gespielt: eine Mischung aus loyal-2 und bullied-2 — kommt es zum Kampf, sollte es ein bis zwei pro Held geben.",
      limits:[
        { label:"HARM (Schaden)", max:1 },
        { label:"CONVINCE (Überzeugen)", max:1 },
        { label:"SCARE (Erschrecken)", max:1 },
      ],
      tags:["loyal to the community (loyal zur Gemeinschaft)", "from around these parts (von hier aus der Gegend)", "loyal-2", "bullied-2"],
      threats:[
        { name:"MILITIA (Miliz)", flavor:"Hebt seinen rostigen Speer oder seine Mistgabel, deutet vorwärts und verlangt Gehorsam", options:["Wird durch Ungehorsam aufgebracht (erhält agitated-1)","Schlägt Alarm (Exposure)","Ruft Verstärkung (Ill Tidings)","Greift unbeholfen an (bruised-1 oder wounded-1)"] },
        { name:"FRIGHTENED COMMONER (Verängstigter Dorfbewohner)", flavor:"Weicht zurück, versucht Abstand von einer Gefahr zu gewinnen", options:["Schreit über furchterregende Dinge, die er gesehen hat (worried-1 für alle Umstehenden)","Stolpert mitten im Flug in einen Helden (prone-1)","Rennt weg, ohne eine Erklärung abzugeben (Blocked)"] },
      ],
      source:"A Fox in the Dales – Finale 'The Fox's Den', Landarbeiter der Cloudbornes. Standardprofil (reflavored), Core Book II, S. 113.",
    },
  ],
  revelations:[],
  rewards:[],
  tips:[],
},

/* 6 ---------------------------------------------------------- AFTERMATH */
{
  key:"aftermath", kind:"aftermath", page:"S. 361",
  title:"Nachspiel", en:"Aftermath",
  summary:"Rückblick, Miloradas Geschichtenbuch und die Enthüllung über die Lady",
  showImprovement:true,
  readAloud:[],
  flow:[
    `<span class="section-heading">Fragen zum Rückblick</span>
<ul>
<li>Was ist mit <span class="gloss" onclick="openGloss('azeria-ref')">Azeria</span> geschehen? Wurde sie gefasst, ist sie geflohen, oder konnten die Helden sie vor einem Leben auf der Flucht bewahren?</li>
<li>Und was ist mit <span class="gloss" onclick="openGloss('gajowy-ref')">Gajowy</span>? Hat er die letzte Auseinandersetzung überlebt? Wenn ja: Hat ein Held ein derart gerissenes Geschöpf der Dämmerung frei ziehen lassen? Oder wurde eine andere Abmachung getroffen? Vielleicht verliebt sich sogar einer der Helden in ihn.</li>
<li>Was ist mit den Cloudbornes — sinnen sie weiterhin auf Gewalt gegen Azeria? Oder wärmt sich die klügere Seite der Familie für den Gedanken auf, eine neue Enkeltochter zu haben — falls Azeria sie überhaupt in ihrem Leben haben will?</li>
<li>Wie haben die Helden und Azeria die Sache mit ihren Einbruchsopfern geregelt — Radmila, <span class="gloss" onclick="openGloss('bright-tails-ref')">Bright-Tails</span> und <span class="gloss" onclick="openGloss('lady-midday-ref')">Lady Midday</span>?</li>
<li>Welche neuen Einsichten in das Leben der Geschöpfe der Dämmerung haben die Helden gewonnen, und wie hat das ihr Weltbild verändert?</li>
<li>Falls ihr „Aus Furcht vor dem Winter“ gespielt habt: Wie verlief die Begegnung mit den Rittern, und welche Fragen hat sie in den Köpfen der Helden hinterlassen?</li>
</ul>`,
    `<span class="section-heading">Belohnungen</span> Trennt man sich im Guten, teilt Azeria Miloradas Geschichtenbuch mit den Helden. Dieses Buch enthält Erzählungen, die ihre Mutter liebte — über die <span class="gloss" onclick="openGloss('lady-of-the-dales')">Lady der Dales</span> (S. 58) und ihren Einfluss als Volksheldin, sowie Fabeln über Geschöpfe der Dämmerung wie ihren Vater.

Miloradas Lieblingsgeschichte, die sie Azeria viele Male erzählte, hieß <strong>„Die Maske und die Krone“</strong> und handelte von einem listigen Fuchs, der einen Reif stiehlt, den die Lady <span class="gloss" onclick="openGloss('barleytown')">Barleytown</span> schenken wollte. Am Ende zwingt die Lady den Fuchs, die Krone zurückzugeben, denn „die Krone ist für das Wohl aller da, nicht nur für einen Fuchs. Eben jene Krone wird nun bei jeder Ernte an einen neuen Träger weitergereicht.“ Azeria räumt ein, dass sie womöglich die falsche Lehre aus der Geschichte gezogen hat.`,
    `<span class="callout"><span class="co-title">Erzähler-Notiz — Miloradas Geschichtenbuch</span>Das liebevoll illustrierte Buch, eine gewisse Seltenheit in den Dales, zeigt die Lady der Dales dabei, wie sie den Dalischen hilft, mit Geschöpfen der Dämmerung verhandelt, wenn diese dazu bereit sind, und sie überlistet, wenn nicht. Gelegentlich verweist es zudem auf eine Art Verzauberung, die die Dales zu beschützen scheint.
<br><br>Die Geschichten weisen ein wiederkehrendes Motiv auf: Die Lady hilft den Dalesleuten, ein Problem zu lösen, und bringt ihnen dann bei, wie sie das Problem in Zukunft selbst bewältigen können.</span>`,
    `<strong>Erzähler-Notiz — Die Krone in Barleytown:</strong> Die Geschichte vom Fuchs und der Lady der Dales bezieht sich auf das <span class="gloss" onclick="openGloss('circlet-of-the-folkhearth')">Circlet of the Folkhearth</span>, das später in „The Barleytown Fair“ (S. 388) bedeutsam wird.`,
  ],
  npcs:[],
  challenges:[],
  revelations:[
    { kind:"Core", ref:"5", text:"Es ist die Macht der Lady, die die Dales beschützt hat – doch sie versagt." },
  ],
  rewards:[
    `📦 Besitztum: <span class="gloss" onclick="openGloss('miloradas-storybook')">Miloradas Geschichtenbuch</span> — Geschichten laut vorlesen · Verständnis für Geschöpfe der Dämmerung · wird als Kindermärchen abgetan.`,
  ],
  tips:[],
},

];

ADVENTURES.find(a=>a.id==="a3").scenes = A3_SCENES;
