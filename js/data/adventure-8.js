/* ---------- Tutorial-Abenteuer (außerhalb der Kampagne): Der Heap-Thing von Skunk Glen ----------
   Core Book, Band II (The Narrator), S. 448–465. Text vollständig aus der Buchfassung (lm/nr-skunk.js);
   Challenges und Vignetten kommen aus den Bibliotheken (challenge-library.js, journey-library.js).
   Erzeugt mit tools/gen_sg.js – nicht von Hand ändern. */
(function(){
const libCh = slug => { const c = CHALLENGE_LIBRARY.flatMap(k=>k.challenges).find(x=>x.slug===slug); return c ? JSON.parse(JSON.stringify(c)) : null; };
const jn = id => JOURNEY_LIBRARY.flatMap(k=>k.challenges).find(x=>x.slug===id);
const SG_SCENES = [
 {
  "key": "intro",
  "kind": "intro",
  "page": "S. 448–451",
  "title": "Überblick",
  "en": "The Heap-Thing of Skunk Glen",
  "summary": "Starter-Abenteuer · Hintergrund · Hooks · Szenenfolge",
  "overview": [],
  "readAloud": [
   {
    "page": "S. 448–449",
    "label": "Eröffnung des Abenteuers",
    "text": "Seit Menschengedenken karren die Dorfbewohner von Ravenhome am Ende des Winters, vor dem Frühlingsfest, ihre alten Kleider, kaputten Werkzeuge und anderen Ausschuss zu einem Felsvorsprung und kippen alles in eine Schlucht namens Skunk Glen. In diesem Jahr überzeugte der Alderman die anderen, den Brauch zu ändern: Müll und kaputte Möbel ließen sich zu einem Haufen türmen und gäben ein prächtiges Lagerfeuer für das Frühlingsfest!\n\nDie Dorfbewohner ahnten nicht, dass in einer Höhle am Grund der Schlucht eine Kreatur wohnt. Als sie hörte, dass sie dieses Jahr keine „neuen“ Kleider bekommt, tobte und schäumte sie und schwor, das neue Frühlingsfest zu ruinieren. Sie ließ die Pasteten verfaulen und die kaputten Werkzeuge lebendig werden und auf die Dörfler einprügeln. Mit verzaubertem Lagerfeuerrauch und Frühlingsmelodien lockte sie die Dorfbewohner in ihre Höhle in Skunk Glen, wo sie ihnen Werkzeuge, Schuhe und sogar ihre Namen stahl (manche sagen: ihre Haut!). Zum Glück gab es im Dorf jemanden, der den Tag rettete …"
   }
  ],
  "flow": [
   "<span class=\"section-heading\">Starter-Abenteuer</span> Der Heap-Thing von Skunk Glen ist ein Starter-Abenteuer, das dich und deine Gruppe durch euer erstes Spiel von Legend in the Mist führen soll. Bevor du es als Narrator leitest, solltest du es durchlesen und die erwähnten Regeln nachschlagen.",
   "<span class=\"section-heading\">Hintergrund</span> Jedes Jahr am Ende des Winters begehen die Dorfbewohner von Ravenhome die Zeremonie der <strong>Frühlingserneuerung</strong>. Jede Person – vom Kind bis zum Ältesten – sucht ein paar alte Dinge aus, etwa zerschlissene Kleider oder irreparable Werkzeuge, und legt sie auf einen besonderen Karren. Der wird feierlich über einen Felsvorsprung in die Schlucht von Skunk Glen geschoben. Danach wird auf dem Dorfanger gefeiert, gegessen, gesungen und um ein großes Lagerfeuer getanzt. Das Alte des vergangenen Winters wird verabschiedet, das Neue begrüßt.",
   "<span class=\"section-heading\">Ein veränderter Brauch</span> In diesem Jahr hat Alderman Beaks die Dörfler jedoch überzeugt, dass Müll und kaputte Möbel besser als Brennstoff für das Festfeuer taugen. Er hat seine Gründe (siehe Gerüchte unten), den anderen erklärt er es so: Was wäre ein besserer Weg, alte, ausrangierte Dinge zu verwenden, als damit die letzte Kälte des Winters zu vertreiben?",
   "<span class=\"section-heading\">Gerüchte über Kommendes</span> Alderman Beaks ist ein weiser Mann, der nicht ohne guten Grund gegen eine geliebte, etablierte Tradition angehen würde. Kürzlich hat er von Händlern und Bekannten gehört, dass sich auf den Straßen immer mehr Banditen herumtreiben und Fremde mit üblen Absichten umherziehen. Beunruhigt holte er Rat bei der Wise One des Dorfes ein und sprach mit anderen aus der Gemeinde. Schließlich entschied der Alderman, es sei besser, einen Teil der Stämme, die sonst für das große Festfeuer vorgesehen sind, zurückzuhalten – für den Bau von Befestigungen, falls ein solcher Notfall eintritt. So fand er eine andere Brennstoffquelle: die ausrangierten Dinge selbst – und löste damit unwissentlich eine Fehde mit dem Heap-Thing aus.",
   "<span class=\"section-heading\">Solo-Spiel</span> Du kannst dieses Abenteuer im Solo- oder Co-op-Modus mit den Oracle-Regeln des Core Books spielen. Um die meisten Spoiler zu vermeiden, lies keine mit SOLO markierten Abschnitte, bis dich das Oracle ausdrücklich dazu auffordert.",
   "<span class=\"section-heading\">Wo liegt Ravenhome?</span> Ravenhome ist ein pastorales Dorf im Zentrum des Tals von Ravensdale, selbst ein kleiner Teil der abgelegenen Bergregion der Dales. Es ist der Standard-Startort der Kampagne Wake of the Oldways, die im Hearts-of-Ravensdale-Setting enthalten ist. Du kannst dieses Abenteuer als Aufwärmübung für die Kampagne spielen oder alternativ in einem beliebigen Dorf deines Settings ansiedeln.",
   "<span class=\"section-heading\">Creature of Twilight</span> Spielst du im offiziellen Hearts-of-Ravensdale-Setting, ist der Heap-Thing eine „Creature of Twilight“, eine Art listiges Monster. Mehr dazu im Setting Book.",
   "Von niemandem im Dorf bemerkt, lebt am Grund der Schlucht ein seltsames Wesen, ein magisches Geschöpf, das dort seit Urzeiten haust. Vielleicht sah es in längst vergangenen Tagen einer Person nicht unähnlich, wenn auch mit knorrigen Gliedern, schuppiger grüner Haut und Augen wie Bernsteinkugeln; doch aus Gier wurde es zum Teil-Müll, zum Heap-Thing. Die ausrangierten Besitztümer des Dorfes hat es stets als Geschenk und als indirekte Einladung betrachtet, an der Feier teilzunehmen.",
   "In diesem Jahr glaubt es sich grob ausgeladen und schwört, die Frühlingserneuerung zu ruinieren. Zuerst plagt es die Dörfler mit seiner Magie durch allerlei kleine Missgeschicke, dann stürzt es das Fest ins völlige Chaos und zwingt die Dörfler, ohne Rücksicht auf ihre Sicherheit an seinem eigenen verdrehten Fest in seinem Müllhaufen teilzunehmen.",
   "<span class=\"section-heading\">Überblick</span> Das Abenteuer beginnt damit, dass die Heroes bei den <strong>Zeremonievorbereitungen</strong> helfen, wobei du einige Dorfbewohner vorstellst und die Stimmung setzt. Beginnt die Zeremonie, wird sie rasch zum <strong>Chaos auf dem Dorfanger</strong>: Dörfler benehmen sich wie berauscht unter dem Fluch des Heap-Thing.",
   "Auch wenn es den Heroes gelingt, den Fluch auf dem Anger zu brechen, haben sich mehrere Dörfler bereits auf eine <strong>Wahnhafte Prozession</strong> begeben, die in die Höhle des Heap-Thing hinabführt – ein Weg voller Gefahren für Leib und Leben, wenn die Heroes ihnen nicht helfen, wieder zu sich zu kommen.",
   "Am <strong>Grund von Skunk Glen</strong> werden die Heroes aufgefordert, ein übliches Geschenk darzubringen, um durch den Müllhaufen in die Domäne des Heap-Thing zu gelangen. Dort finden sie sein <strong>Fest des Spotts</strong>, stellen sich der Kreatur und beenden das Debakel – so oder so.",
   "<span class=\"section-heading\">Die Wise One spielen</span> Ist einer der Heroes die Wise One (aus der Demo-Fassung von Legend in the Mist), lass diese Spielerin oder diesen Spieler wissen, was sie über die wahren Gründe des Alderman für die Abweichung von der Tradition weiß. Das sollte sie wohl für sich behalten: Es nützt niemandem, kurz vor der Zeremonie Panik im Dorf zu verbreiten. Ab diesem Zeitpunkt liegt es bei ihr, ob sie die Information preisgibt.",
   "<span class=\"section-heading\">Aufhänger: Wie sind die Heroes beteiligt?</span> Die Heroes deiner Fellowship – falls sie bereits eine bilden – können unterschiedliche Hintergründe und Motive haben, in dieses Abenteuer hineingezogen zu werden. Sie können sein:",
   "<span class=\"section-heading\">Buchfassung</span> Den vollständigen Text im Buchaufbau findest du unter <a class=\"gloss\" onclick=\"goBook('skunk','nr-skunk')\">Skunk Glen im Erzähler-Buch (S. 448–465)</a>."
  ],
  "npcs": [],
  "challenges": [],
  "extra": {
   "heading": "Sie können sein",
   "type": "list",
   "items": [
    "Dorfbewohner von Ravenhome (oder dem Dorf, in dem du das Abenteuer ansiedelst)",
    "Besucher aus anderen Gemeinden oder Einsiedler aus der Nähe, die zur jährlichen Zeremonie gekommen sind",
    "Reisende, Wanderer oder Volkshelden, die das Dorf durchqueren oder dort verweilen",
    "Monsterjäger oder Zauberer, die von rätselhaften Gerüchten über Skunk Glen gehört haben",
    "Andere seltsame Wesen auf der Durchreise, die nach ihresgleichen oder einem neuen Unterschlupf suchen"
   ]
  },
  "rewards": [],
  "revelations": [],
  "tips": []
 },
 {
  "key": "prep",
  "kind": "scene",
  "page": "S. 451–455",
  "title": "Zeremonievorbereitungen",
  "en": "Opening Scene: Ceremony Preparations",
  "summary": "Game Loop · Simple & Quick Actions · Aufgaben vom Alderman",
  "overview": [
   "Treffen auf dem Dorfplatz mit Simple Actions, noch ohne Würfeln",
   "Alderman Beaks verteilt Aufgaben (Wick, Reeve, Auntie Elswith, Brücke, Hunn)",
   "Jede Aufgabe ist eine kleine Challenge mit Quick-Ergebnis",
   "Ziel: Rhythmus des Game Loops lernen"
  ],
  "readAloud": [
   {
    "page": "S. 451",
    "label": "",
    "text": "Obwohl man die letzte Kälte des Winters heute Morgen noch in der Luft spürt, sind die Leute von Ravenhome ungewöhnlich rege. Es liegt eine süße Spannung in der Luft – Vorfreude auf die Frühlingserneuerung. Endlich ist es so weit! Es ist heute Abend!\n\nDie Frühlingserneuerung ist das erste Freiluftereignis nach dem Winter, die Gelegenheit, endlich mit allen Lieben unter offenem Himmel und hellen Sternen fröhlich zu sein. Aber zuvor gibt es Arbeit: Essen vorbereiten, Tische aufstellen, den Dorfanger harken und mehr.\n\nEine wichtige Aufgabe ist es, die Kleider, die als zu abgetragen gelten, und die Möbel, die als zu kaputt zum Reparieren gelten, zum Discarded Cart zu bringen. Jedes Jahr wird der Inhalt des Karrens über den Rand von Skunk Glen gekippt, als Sinnbild der Erneuerung. Es ist eine Tradition, so alt wie Ravenhome selbst, doch ihr habt Gerüchte gehört, dass sich der Brauch selbst dieses Jahr erneuern könnte.\n\nIhr zieht euch rasch an, frühstückt zu Ende und macht euch auf den Weg ins Dorfzentrum. Es ist Zeit, bei den Vorbereitungen mitzuhelfen."
   }
  ],
  "flow": [
   "Stelle sicher, dass alle ihre Heroes bereit haben, und lies dann dies laut vor, um zu beginnen:",
   "<span class=\"section-heading\">Treffen auf dem Dorfplatz</span> Der Dorfplatz ist ein schlammiger, von Häusern umgebener Hof gegenüber dem größeren Gebäude des Gemeindehauses. Von hier genügen ein paar Schritte, um fast jeden Ort im Dorf gut zu überblicken – weshalb man Alderman Beaks oft hier in der Nähe findet.",
   "Der Alderman ist noch nicht da, hat aber den Heroes Nachricht geschickt, damit sie sich mit ihm treffen. Wie kommen sie an? Spielen wir diese Szene mit dem Game Loop (Vol. I, S. 20).",
   "<strong>Establish</strong> Etabliere die Szene durch Beschreibung und lass die Heroes wissen, dass sie heute Morgen alle zufällig hier sind (mit gewissen Ausnahmen). Es gibt keine unmittelbaren Challenges oder Threats, und was auf dem Spiel steht, zeigt sich erst noch.",
   "<strong>Action</strong> Wähle einen Hero, der zuerst handelt. Er beschreibt, wie er in der Szene ankommt, wie er aussieht, was er sagt oder tut und wie er auf die Aufregung im Dorf reagiert. Das sind alles Simple Actions (Vol. I, S. 150), es muss also noch nicht gewürfelt werden.",
   "<strong>Consequences</strong> Dies ist eine risikoarme Tätigkeit, also verhänge zu diesem Zeitpunkt keine Consequences.",
   "<strong>Repeat</strong> Etabliere die Szene nach dem Zug jedes Heroes neu, falls sich etwas geändert hat, und gehe zum nächsten Hero, bis sich alle in die Szene eingebracht und ein Gefühl für den Rhythmus des Gesprächs bekommen haben.",
   "<span class=\"section-heading\">Aufgaben vom Alderman</span>",
   "<strong>Establish</strong> Setze die Szene fort, indem du sie neu etablierst, diesmal mit dem Auftritt des Alderman. Alderman Beaks sucht Hilfe, und selbst wenn die Heroes sich nicht engagieren wollen, wird er sie aufspüren und um Unterstützung bitten. Er teilt dann Aufgaben im Rahmen der Vorbereitungen für die Zeremonie am Abend zu. Wähle für jeden Hero eine der folgenden Aufgaben, passend zu seinen Stärken. Gibt es mehr Aufgaben als Heroes, nutze nur die passendsten oder gib einigen Heroes mehr als eine.",
   "• Wick, dem Pastetenbäcker helfen, der ein wenig überfordert ist<br>• Reeve, der Frau des Alderman, bei den Kränzen helfen, die sie bindet<br>• Auntie Elswith besuchen, die Hilfe mit ihrem Ausrangiertes-Stück braucht<br>• Herausfinden, warum sich auf der Brücke über dem Bach ein Stau bildet<br>• Mit Hunn, dem Schmied, reden, weil die Stangen für das Festbanner nicht halten",
   "Auf dem Spiel steht, ob die Heroes dem Dorf bei den Vorbereitungen für die Feier helfen können, und das bis Sonnenuntergang.",
   "Alderman Beaks ist eine Challenge, die einen aktiven Threat darstellt, indem er jedem Hero eine Aufgabe gibt: Sich zu drücken kommt in der Gemeinde nicht gut an. Annehmen bedeutet, sich der Challenge der Aufgabe zu stellen (siehe unten).",
   "<strong>Action</strong> Frage in jedem Zug eines Heroes, was er tut. Nimmt er die Aufgabe an? Gern oder widerwillig? Versucht er, sie zu umgehen? Sofern er keine dramatische Aktion wählt, löse sie mit einem Simple-Ergebnis auf.",
   "<strong>Consequences</strong> Alderman Beaks’ Bitte zu ignorieren (Threat) führt zur Consequence, dass andere Dörfler dem Hero ihr Missfallen zeigen (spurned-2, ignored-2 oder disliked-2 – für den Rest der Woche!). Das lässt sich meist nicht abmildern, lass die Heroes also noch nicht auf eine Reaktion würfeln.",
   "<strong>Repeat</strong> Geh alle Heroes durch, bis klar ist, wer als Nächstes was tut.",
   "Die Heroes verteilen sich im Dorf; jeder widmet sich der Aufgabe, die Alderman Beaks ihm gegeben hat. Nimm an, dass sich die Heroes sehen oder hören und einander helfen können, wenn jemand in Schwierigkeiten gerät.",
   "<strong>Establish</strong> Jede Aufgabe ist eine Challenge für einen Hero, Details siehe unten. Beschreibe dem Hero die Challenge, präsentiere ihren inhärenten Threat und kläre, was bei seiner Aufgabe auf dem Spiel steht.",
   "<strong>Action</strong> Verwende für jede Aktion ein Quick-Ergebnis (Vol. I, S. 151):",
   "• Bitte den Hero, seine Aktion zu beschreiben.<br>• Bitte ihn, die Power der Aktion zu zählen. Jede Aufgaben-Challenge unten hat Tags und/oder Statuses, die bestimmten Aktionen helfen oder sie behindern können – sag es dem Hero, wenn sie relevant werden.<br>• Der Hero würfelt und addiert seine Power. Eine 7 oder mehr ist ein Success, bei 9 oder weniger gibt es Consequences.",
   "Ein Success bedeutet, dass die Challenge überwunden und die Aufgabe erledigt ist; hat der Hero keinen Success erzielt, kann er es erneut versuchen, wenn er im Rampenlicht steht.",
   "<strong>Consequences</strong> Jede Aufgaben-Challenge unten hat eigene Consequences. Ignoriert ein Hero den Threat der Challenge (zum Beispiel indem er die Hände hochwirft und geht oder unvorsichtig an die Challenge herangeht) oder erzeugt seine Aktion Consequences, wähle eine oder mehrere zur Verhängung. Hat eine einen Effect, schreibe ihn auf eine Tracking-Karte und gib sie dem Hero oder füge sie in die Szene ein.",
   "Erlaube dem Hero eine Reaction-Probe, um die Effekte einer Consequence abzumildern (Vol. I, S. 162) mit reaktiven Tags. Schon in der Aktion eingesetzte Tags können nicht erneut genutzt werden.",
   "<strong>Repeat</strong> Gehe von Hero zu Hero, etabliere ihre individuellen Situationen, erlaube Actions und verhänge Consequences nach Bedarf. Sind alle Aufgaben erledigt – oder vermasselt –, ist der Tag vorüber und die Feier beginnt. Weiter mit Chaos auf dem Dorfanger (S. 456)."
  ],
  "npcs": [
   {
    "name": "Alderman Beaks",
    "role": "Dorfvorsteher von Ravenhome",
    "img": "aldermanBeaks",
    "after": 7,
    "text": "Beaks ist ein charmanter Mann in den Fünfzigern mit krähenfüßigen Augenfältchen und einem ständigen Lächeln. Selbst wenn er ernst ist, behält er einen Hauch von Fröhlichkeit in den Augen und ist stets kompromissbereit. Die Leute von Ravenhome haben ihn nur dreimal wirklich wütend gesehen, und alle drei Male sind Teil der Dorflegende geworden.<br><br>Auf die Änderung der Discarded-Cart-Tradition angesprochen, bestätigt Beaks schnell, dass der Müll dieses Jahr verbrannt statt weggeworfen wird. „Genauso lustig, wenn nicht lustiger. Und vielleicht noch symbolischer, findet ihr nicht?“ Er betont auch, dass für heute Abend noch viel zu tun ist.<br><br>Fragen sie weiter, vertraut er ihnen schließlich seine Sorgen über die Gefahren an, die er in der kommenden Jahreszeit sieht, und stimmt zu, dies nach der Feier weiter zu besprechen. SOLO: Lies Gerüchte über Kommendes (S. 449).<br><br>Dann bittet er sie, die Gerüchte nicht im Dorf zu verbreiten, und wird angry-3 auf die Heroes, wenn er vermutet, dass sie es doch getan haben."
   }
  ],
  "vignettes": [
   {
    "name": "Wick, der Pastetenbäcker",
    "flavor": "Das Haus des Pastetenbäckers ist ein Chaos – Füllung blubbert und dickt in Eisentöpfen ein, leere Teighüllen kühlen auf einer langen Holzbank ab, überall ist Mehl. Der Geruch von Zucker, Gewürz und Schweiß erfüllt die Luft. Ein kaputter Tisch lehnt neben der Tür an der Wand, bereit, für den Discarded Cart abgeholt zu werden. Wick Harrow, der Pastetenbäcker, wirkt gerötet, als er seine frantic-2 Arbeit unterbricht, sobald ihr eintretet, und ruft: „Alles Obst in der Speisekammer ist über Nacht verfault! Was soll ich nur tun?“ Sein junger Lehrling Bran kommt heran und flüstert erleichtert: „Den Geistern sei Dank, dass ihr da seid!“",
    "options": [
     "(Kein Success) Wick verwendet widerwillig das verdorbene Obst für einige seiner Pasteten; ihr fauliger Gestank übertönt beim Fest den Anger.",
     "Wicks Laune kippt und er schreit den Hero an (shaken-1 oder upset-1).",
     "Beeindruckt oder wütend lässt Wick den Hero für den Rest des Tages hart in der Bäckerei schuften (tired-2).",
     "Eine der Früchte platzt auf und Würmer quellen heraus (disgusted-1)."
    ]
   },
   {
    "name": "Reeve und die Kränze (und der Hund)",
    "flavor": "Reeve, die Frau von Alderman Beaks, trifft euch in ihrem Vorgarten, mit besorgtem Blick. „Schnell“, sagt sie mit einem kleinen Nicken. „Es ist Brown Mutt, unser Hund. Er ist weg. Nichts Ungewöhnliches, auch nicht das Problem – nein, er hat den Kranz mitgenommen, den ich vorbereitet habe. Ich habe ihn aus ausrangiertem Kram gemacht! Zum Verbrennen! Ich dachte, er wäre eine nette Dekoration. Vielleicht machen es nächstes Jahr alle so. Brown Mutt mochte ihn auch – zu sehr. Bitte findet ihn und bringt den Kranz zurück.“",
    "options": [
     "(Kein Success) Der Kranz wird zerstört (Ill Tidings), und Reeve ist annoyed-2 oder disappointed-2 über den Hero.",
     "Beim Versuch, Brown Mutt zu fangen, holt sich der Hero scraped-2 oder macht sich dirty-2.",
     "Die lange Suche nach dem Hund erschöpft den Hero (tired-2)."
    ]
   },
   {
    "name": "Auntie Elswith",
    "flavor": "Auntie Elswith wohnt allein in einem kleinen Cottage am Dorfrand. Es ist ein hübsches, halb von Efeu überwuchertes Gebäude mit handbemalten Blumen auf den hölzernen Fensterläden. Drinnen ist die Luft warm vom Duft aufgebrühter Kamille und Lavendel. Die freundliche Auntie Elswith räumt einige gefaltete Quilts von einem Holzstuhl und bittet euch, euch zu ihr zu setzen. Dann erklärt sie: „Ich möchte ein paar meiner kaputten Blumentöpfe wegwerfen, aber leider haben Wespen den Schuppen übernommen“, und deutet auf den baufälligen Schuppen draußen.",
    "options": [
     "(Kein Success) Auntie Elswith legt ihr Ausrangiertes dieses Jahr nicht auf den Haufen – ein Zeichen schlechten Glücks für sie, das auf den Hero abfärben könnte (gib einen oder beide expecting-bad-luck-1).",
     "Auntie Elswith ist entsetzt über das Verhalten des Heroes und erzählt es dem ganzen Dorf (spurned-1).",
     "Die Wespen stechen den Hero (stung-2).",
     "Der Schuppen stürzt auf den Hero ein (dirty-2 und bruised-1)."
    ]
   },
   {
    "name": "Blockierte Brücke",
    "flavor": "Man hört die Dalias streiten, bevor man sie sieht. Dalia Furrows und Dalia Miuleska, die Oberhäupter ihrer jeweiligen Gehöfte, stehen auf der alten Brücke über dem Bach und brüllen einander fuming-3 an: Es geht darum, wessen Tischdecke auf den Haupttisch kommt (eine wahre Ehre). Promise Furrows-Miuleska, Tochter der einen Dalia und Schwiegertochter der anderen, steht ratlos dazwischen. Der Streit ist schon in Beschimpfungen abgeglitten. Besorgte Dörfler stehen auf beiden Seiten der Brücke und tragen Möbel und Vorräte für die Zeremonie, doch die Dalias lassen niemanden vorbei, bis ihr Problem gelöst ist. So kommt nichts hinüber.",
    "options": [
     "(Kein Success) Alle werden aufgehalten, und der Anger ist ein einziges Chaos, als die Feier beginnt.",
     "Eine der Dalias beleidigt den Hero vor dem ganzen Dorf (ridiculed-2).",
     "Eine der Dalias schubst den Hero von der Brücke (dirty-2 und soaked-2).",
     "Beim Tragen der Gegenstände über die Brücke ist der Hero erschöpft (tired-2)."
    ]
   },
   {
    "name": "Hunn und die mickrigen Stangen",
    "flavor": "Hunn, der Schmied, steht vor der Schmiede, die kräftigen Arme in die Hüften gestützt, und wirkt lost-2. „Es sind die Stangen“, sagen sie und scharren mit einem Fuß im Staub. „Eisen von schlechter Qualität, ich hätte dem Händler nicht trauen sollen. Mit so mickrigen Stangen kann ich nicht versprechen, dass das Banner hält.“ Ihre Stimme ist leise, ebenso ihre Stimmung. Das Aufrichten der beiden Pfosten, die das Hauptbanner der Zeremonie halten, ist ein Ereignis am frühen Abend, auf das sich die Dorfkinder jedes Jahr freuen. Hunn, eine sanfte Seele, wäre am Boden zerstört, wenn sich keine Lösung findet.",
    "options": [
     "(Kein Success) Das Banner kann nicht aufgerichtet werden, und alle Kinder sind für den Rest der Nacht disheartened-1.",
     "Die Lösung hält, ist aber nicht ganz sicher (wobbly banner posts).",
     "Hunn, der zur Verzweiflung neigt, sieht die eigene Hilflosigkeit als persönliches Versagen (gib Hunn disheartened-2).",
     "Der Hero hat einen Unfall an der Schmiede (burned-1)."
    ]
   }
  ],
  "challenges": [],
  "rewards": [],
  "revelations": [],
  "tips": [
   "<strong>Symbolisches Abstreifen des Alten:</strong> Die Leute von Ravenhome sind keine Verschwender. Die meisten kaputten Dinge reparieren oder verwerten sie. Doch das Frühlingserneuerungsfest ist ein symbolischer Akt des Loslassens des Alten und Begrüßens des Neuen, und es gilt als Unglück, nichts wegzuwerfen. Und so legen sogar die größten Horter von Ravenhome mit großem Widerwillen jedes Jahr mindestens einen kleinen Gegenstand auf den Karren.",
   "<strong>Das ist der Game Loop:</strong> Du hast nun die Szene etabliert und neu etabliert, Aktionen der Heroes unterstützt, Consequences verhängt und Reactions abgewickelt. Nutze diesen Loop im gesamten Abenteuer weiter.",
   "<strong>Vertraute Gesichter:</strong> Betone die Persönlichkeit und das Verhalten der Dörfler, denen die Heroes in dieser Szene begegnen. Hat ein Hero einen besonderen Moment, gut oder schlecht, mit einem von ihnen, gib ihm dafür ein Story-Tag. Diese emotionalen Bindungen werden später wichtig, wenn die Dörfler in Schwierigkeiten geraten.",
   "<strong>Helfende Hand:</strong> Ein anderer Hero kann einem helfen und bei der Power-Zählung ein hilfreiches Tag hinzufügen; hat die Aktion aber Consequences, erleidet er sie zusammen mit dem Hero, dem er hilft (Vol. I, S. 158).",
   "<strong>Misstrauische Gemüter:</strong> Heroes können eine Aktion darauf verwenden, zu verstehen, warum all diese Missgeschicke passieren. Ohne passendes Wissen oder magische Fähigkeit ist dies eine Simple Action, die fehlschlägt – es wirkt wie schlichtes Pech. Doch eine Hexe oder ein Monsterjäger könnte erkennen, dass dies das Werk einer übernatürlichen Kraft ist, wenn sie in einer Quick Action Erfolg haben. Als Belohnung erhalten sie alert-2 oder dürfen eine Aktion ausführen, um sich auf Ärger vorzubereiten, falls sie möchten.",
   "<strong>Szenen-Belohnung:</strong> War ein Hero besonders hilfreich (auch wenn er nicht erfolgreich war), gib ihm goodwill-1 oder appreciated-1 bei dem Dörfler, dem er am meisten geholfen hat."
  ]
 },
 {
  "key": "bedlam",
  "kind": "scene",
  "page": "S. 456–458",
  "title": "Chaos auf dem Dorfanger",
  "en": "Bedlam on the Green",
  "summary": "Detailed Actions · Limits · Cursed Bonfire · verzauberte Dörfler · Animated Effigies",
  "overview": [
   "Das Fest kippt durch den Rauch des Cursed Bonfire ins Chaos",
   "Hauptchallenge: Cursed Bonfire (löschen oder Fluch brechen)",
   "Enchanted Villagers (Charge) gefährden sich selbst, Animated Effigies (Aggressor) setzen alles in Brand",
   "Tags in der Szene: dichte Menge, ohrenbetäubender Lärm"
  ],
  "readAloud": [
   {
    "page": "S. 456",
    "label": "",
    "text": "Das Geräusch Dutzender aufgeregter Menschen erfüllt den Dorfanger, als sich alle versammeln, um den Sonnenuntergang zu sehen und das Frühlingsfest zu beginnen. Der Anger ist ein großes offenes Feld hinter dem Gemeindehaus, das sich bis zum Felsvorsprung über der Schlucht von Skunk Glen erstreckt – dem Ort, von dem jeden Frühling der gesammelte Unrat hinabgeworfen wird."
   },
   {
    "page": "S. 456",
    "label": "",
    "text": "Doch nicht heute Nacht – diesmal wird das Lagerfeuer zum Star der Show. Mitten auf dem Anger, zwischen gedeckten Tischen, einer mit Bändern geschmückten Tanzfläche und der Bühne der Musiker, brennt das Feuer schon hell und hoch, während die vom Dorf ausrangierten Dinge darin verzehrt werden. Binnen Minuten, ohne besondere Ansprachen, wird schon gegessen und geplaudert, und beim Tanzen treten Familien ans Feuer, um weitere ausrangierte Dinge in die Flammen zu werfen."
   },
   {
    "page": "S. 456",
    "label": "",
    "text": "Doch so groß und fröhlich das Fest bald wird, liegt eine Unruhe in der Luft. Am Rand streiten einige über die neue Tradition. Unter den Tanzenden schreit jemand ein wenig zu laut, ein anderer tanzt zu wild. Die Musik klingt verdreht, als spielte ein Instrument gegen die anderen. Es ist kaum einen Augenblick nach Sonnenuntergang, doch die Feier scheint schon außer Kontrolle zu geraten und auf ein Unglück zuzusteuern."
   }
  ],
  "flow": [
   "In dieser Szene kippt das Feiern durch die Magie des Heap-Thing langsam ins Chaos. Sie breitet sich im Rauch aus, der vom <strong>Cursed Bonfire</strong> aufsteigt – den zerstörten Dingen, die er für sich haben will –, während seine grimmige, verhexte Musik unter dem Hügel gespielt wird. Verzauberte Dörfler werden wahnhaft und gefährden sich selbst, und manches Gerümpel erwacht als Gestalten zum Leben, die das Feuer löschen wollen, auf das der Heap-Thing eifersüchtig ist – stattdessen aber alles in Brand setzen.",
   "<span class=\"section-heading\">Opfer des Fluchs</span> Jeder Dörfler, mit dem die Heroes in früheren Szenen interagiert haben (Beaks, Wick, Bran, Reeve, beide Dalias, Promise, Auntie Elswith und Hunn), sowie geliebte Menschen der Heroes können hier sein und entweder verzaubert oder durch einen verzauberten Dörfler in Gefahr sein. Spare die, an denen den Heroes am meisten liegt, für die Wahnhafte Prozession (S. 459) und spätere Szenen auf; sie gehörten zu den Ersten, die betroffen waren, und sind schon auf dem Weg die Schlucht hinunter.<br><br>Alternativ können Dörfler angeworben werden, um mit einer Simple Action zu helfen, oder mit einer Quick Action, wenn es Schwierigkeiten gibt. Ein Success gibt dem Hero ein Ally-Tag (etwa Hunn, der Schmied).<br><br>Der Versuch, einen Dörfler vom Fluch zu befreien oder ihn zu überzeugen, kann zum Guten oder Schlechten von Tags und Statuses abhängen, die er bei den Zeremonie-Vorbereitungen erworben hat.",
   "<strong>Tags in dieser Szene</strong> Die dichte Menge macht ohrenbetäubenden Lärm; beides kann Aktionen behindern.",
   "<strong>Die Challenges</strong><br>• <strong>The Cursed Bonfire</strong> (Mystery, Influence) ist die Haupt-Challenge der Szene. Der Fluch wird nur gebrochen, wenn das Feuer gelöscht wird oder niedergebrannt ist.<br>• <strong>Die Enchanted Villagers</strong> (Charge) ergehen sich in wildem Treiben und gefährden sich und andere.<br>• <strong>Animated Effigies</strong> (Aggressor) aus ausrangierten Dingen erwachen zum Leben und säen Zerstörung.",
   "Beginne, indem du die Szene etablierst und die Heroes fragst, was sie tun, gemäß dem Game Loop. Starte mit einer beiläufigen Beschreibung des Ereignisses und steigere deine Beschreibung mit jedem Zug ins Bizarre und schließlich ins Wilde, während klar wird, was auf dem Spiel steht: Jemand könnte schwer verletzt werden.",
   "<span class=\"section-heading\">Der Fluch</span> Jeder auf dem Anger, der den Rauch einatmet, wird wahnhaft, erfüllt vom Verlangen der Kreatur, am Fest teilzunehmen, zu tanzen und zu feiern. Dies ist ein fortlaufender Threat &amp; Consequence der Szene durch den Fluch; Dörfler werden weiter seinen Wirkungen verfallen, bis die Heroes die Ursache entdecken und ihm ein Ende setzen.",
   "Führe zuerst die Challenge Enchanted Villagers ein: Nutze ihren Threat, und können die Heroes ihn nicht verhindern, verhänge wie üblich die Consequence. Sucht ein Hero nach der Ursache oder atmet er etwas Rauch ein, beginne mit der Challenge Cursed Bonfire. Wirf schließlich zu einem Zeitpunkt deiner Wahl, um Einsatz und Dramatik zu steigern, die schockierenden Animated Effigies hinein.",
   "<span class=\"section-heading\">Tempo mit Threats</span> Wird die Szene chaotischer, überlege, wie viele Threats du vor dem Zug jedes Heroes setzt. Du könntest zum Beispiel einen verzauberten Dörfler bereithalten, der sich gleich selbst in Brand setzt; einen anderen, auf der anderen Seite des Angers, der fast einen Hero von der Klippe schubst; und eine Effigy, die zwei Heroes mit flammenden Armen verprügelt – alles gleichzeitig.",
   "Aber das solltest du wahrscheinlich nicht! Ein Threat pro Hero-Zug gibt ihnen etwas Klares zu bewältigen. Zwei pro Hero zwingen sie bereits zu wählen und lassen einen Threat unbeantwortet. Denk daran, den Heroes Luft für andere Aktionen zu lassen, etwa die Quelle des Einflusses zu entdecken und später das Lagerfeuer zu löschen.",
   "Meistern sich die Heroes gut und willst du es schwerer machen, füge mehr Threats hinzu. Willst du die Szene zu einem Abschluss bringen, führe keine neuen Challenges mehr ein und verlangsame deine Threats.",
   "<span class=\"section-heading\">Detailed Actions</span> Viele Threats der Challenges dieser Szene lassen sich mit einer Quick Action abwenden. Dasselbe gilt für Aktionen, die das Lagerfeuer als Ursache des Problems aufdecken.",
   "Die Haupt-Challenge, das Cursed Bonfire, verlangt von den Heroes jedoch Detailed Actions (Vol. I, S. 151) und das Hinzufügen eines quenched-, choked- oder wet-Status gegen das Put-out-Limit des Feuers. Wo passend, erlaube den Heroes Detailed Actions und den Einsatz ihrer Power für Effects wie das Entfernen von delirious-Statuses oder das Erzeugen eines hilfreichen Tags.",
   "Für Heroes ist delirious ein Compelling Status (Vol. I, S. 170), der den Hero am Mitfeiern teilhaben lassen will und so jeden Versuch behindert, Tanzen und Trinken zu stören. Ein Hero, der vom Status überwältigt wird, schließt sich der Wahnhaften Prozession an.",
   "<span class=\"section-heading\">Den Fluch und seine Quelle entdecken</span> Achtet einer der Heroes genau auf den Rauch (Simple Action), vielleicht nach dem Einatmen, kann er bemerken, dass Leute betroffen werden, wenn der Wind wechselt und den Rauch in eine neue Richtung trägt. Der Brennpunkt des Fluchs lässt sich auch auf andere Weise mit einer Quick Action entdecken.",
   "Es erfordert übernatürliche Wachsamkeit, besonderes Wissen oder magische Fähigkeiten (und eine Quick Action), zu erkennen, dass die Quelle des Fluchs unter dem Anger am Grund von Skunk Glen liegt, was zur Wahnhaften Prozession führen kann.",
   "<span class=\"section-heading\">Uns fehlt jemand …</span> Das plötzliche Debakel ist vorbei, wenn das Feuer gelöscht wird oder niedergebrannt ist. Oder? Die Heroes werden bald entdecken, dass am Dorfrand eine neue Entwicklung ihre Aufmerksamkeit verlangt. Weiter mit der Wahnhaften Prozession (S. 459)."
  ],
  "npcs": [],
  "chLib": [
   "the-cursed-bonfire",
   "enchanted-villagers",
   "animated-effigy"
  ],
  "chAfter": 4,
  "rewards": [],
  "revelations": [],
  "tips": []
 },
 {
  "key": "procession",
  "kind": "scene",
  "page": "S. 459–461",
  "title": "Die Wahnhafte Prozession",
  "en": "The Delirious Procession",
  "summary": "Journey · Abstieg durch Skunk Glen · verzauberte Dörfler retten",
  "overview": [
   "Mehrere Fackeln ziehen den gefährlichen Pfad nach Skunk Glen hinab",
   "Die Heroes gehen als Journey hinab (ca. vier Vignetten)",
   "Verzauberte Dörfler sind delirious-2; Rettung kann Verbündete als Tags bringen"
  ],
  "readAloud": [
   {
    "page": "S. 459",
    "label": "",
    "text": "„Sind alle da?“ „Habt ihr gesehen, wo Yarni hin ist?“ „Was haben sie mit den Bannern gemacht!“ … In all dem Tumult, mit Leuten, die sich sammeln und verstört dreinschauen, ist ein Ruf deutlich über allen anderen zu hören: „Da! Jemand geht den Pfad von Skunk Glen hinunter!“"
   },
   {
    "page": "S. 459",
    "label": "",
    "text": "Es stimmt – mehrere Fackellichter tanzen in der Dunkelheit am Rand der Schlucht und gehen den berüchtigten Pfad hinab, der zu ihrem Grund führt. Der Pfad ist schon bei Tag tückisch, und es gibt kaum einen Grund, ihn hinabzugehen. Rufe um Aufmerksamkeit bleiben unbeantwortet, während die Wanderer weiter nach unten ziehen. Plötzlich fällt eine der Fackeln in die Dunkelheit … Alle, die vom Anger zusehen, keuchen entsetzt auf."
   }
  ],
  "flow": [
   "In dieser Szene gehen die Heroes gemeinsam mit mehreren Dörflern, die früh beim Fest verzaubert wurden und nun zur Party des Heap-Thing hinabziehen, den Weg zum <strong>Grund von Skunk Glen</strong> hinunter. Der Pfad windet sich in Zickzacklinien den Hang hinab und endet direkt unter dem Felsvorsprung, der vom Dorfanger vorragt, an einem riesigen, verrottenden Haufen ausrangierter Dinge aus Jahrzehnten, vielleicht Jahrhunderten Frühlingserneuerung: dem Eingang zur Höhle der Kreatur.",
   "<span class=\"section-heading\">Marsch der verzauberten Dörfler</span> Ein bis zwei Dutzend Dörfler bahnen sich planlos den Pfad hinunter. Sie sind über die gesamte Strecke verteilt, einige haben den Fuß der Klippe schon erreicht, bevor die Heroes ihren Abstieg beginnen. Alle tragen Fackeln. Unter ihnen sind einige Lieblingsmenschen und Liebste der Heroes – aber nicht alle: Spare einige für den Grund von Skunk Glen auf.",
   "Können die Heroes sie retten? Wenn ja, erwäge, diese NPCs als Tags zu vergeben, die für die Dauer dieses Abenteuers als Verbündete zur Fellowship stoßen.",
   "Die Dörfler sind alle delirious-2, was jeden Versuch behindert, sie davon abzuhalten, dem Pfad nach unten zu folgen (Quick Action); sie glauben, dass dort die Feier stattfindet und sie sich anschließen müssen.",
   "<span class=\"section-heading\">Hinab durch Skunk Glen</span> Der Abstieg wird als <strong>Journey</strong> gespielt, bestehend aus Challenge-Vignetten (Vol. I, S. 108): Jede beschreibt einen Moment der Geschichte unterwegs, eine gefährliche Situation, die mit einem einzigen Quick-Ergebnis aufgelöst werden soll. Manche Spieleraktionen oder Consequences können eine Vignette zu einer längeren Szene dehnen, aber auch dann sollte sie kurz bleiben.",
   "Wähle eine Anzahl von Vignetten, abhängig vom gewünschten Erzähltempo (vier sind ein guter Standard). Suche die aus, die am besten zu deinem dramatischen Gespür passen. In der Geschichte sollten die Vignetten nicht unmittelbar aufeinanderfolgen; lass die Journey länger wirken, indem du die langen Minuten vorsichtiger Bewegung auf dem schmalen Pfad beschreibst. Das Erreichen des Grunds kann sogar eine Stunde dauern.",
   "Die Journey endet, wenn du die gewählte Zahl von Vignetten durchgespielt hast; die Heroes erreichen dann den Fuß der Klippe. Weiter mit dem Grund von Skunk Glen (S. 462).",
   "Tags: clouded moonlight (Heroes können im Dorf einfach nach einer Fackel fragen, bevor sie hinuntergehen). Um eine Vignette schwerer zu machen, kann der Pfad sehr schmal, mit rutschigem Schlamm bedeckt oder voller Brennnesseln sein.",
   "<span class=\"section-heading\">General Consequences</span> Diese Consequences können bei jeder Vignette eintreten.",
   "• Ein starker Wind bläst die Fackel aus (Complication oder ein Tag scratchen).<br>• Ein Hero rutscht auf einem moosigen Felsen oder einer Geröllhalde aus (scraped-2 oder ein Tag körperlicher Fähigkeit scratchen).<br>• Das Lachen eines unbekümmerten Dörflers hallt von unten herauf (worried-2 oder der Fluch breitet sich aus, delirious-1).",
   "<span class=\"section-heading\">Weitere Dörfler in der Prozession</span> Hier sind einige weitere Dörfler, die dem Zauber verfallen sind, zu deiner Verwendung."
  ],
  "npcs": [
   {
    "name": "Giphty the Mumbler",
    "role": "Verzauberter Teenager (15)",
    "text": "Ein 15-jähriger Teenager aus einer der zurückgezogenen Försterfamilien, die in den Wäldern leben. Das aufgeweckte Kind hat einen Sprachfehler, wegen dem es manchmal gehänselt wird, und ist doch vielleicht das geselligste aller Förster."
   },
   {
    "name": "Laura",
    "role": "Verzauberte Dörflerin",
    "text": "Ihren wenigen Freunden treu ergeben, zog vor ein paar Jahren ins Dorf, nachdem sie ein Land verlassen hatte, von dem nur wenige gehört haben. Manche sagen, sie sei davongelaufen … Jetzt ist sie es sicher nicht: Sie ist beim Abstieg über einen Fels gestürzt und hat einen geschwollenen Knöchel."
   },
   {
    "name": "Fahira the Trader",
    "role": "Verzauberte Händlerin",
    "text": "Deren Haar schon in ihrer Jugend berühmt silbern wurde, besucht das Dorf vier Mal im Jahr, passend zu den jahreszeitlichen Zeremonien. Als Genussmensch ist sie besonders schwer zu überreden, einer guten Party den Rücken zu kehren."
   }
  ],
  "vignettesLib": "skunk-glen",
  "challenges": [],
  "rewards": [],
  "revelations": [],
  "tips": []
 },
 {
  "key": "bottom",
  "kind": "scene",
  "page": "S. 462",
  "title": "Grund von Skunk Glen",
  "en": "Bottom of Skunk Glen",
  "summary": "Der Müllhaufen · Geschenk bringen oder sich durchgraben · Camping-Option",
  "overview": [
   "Der Müllhaufen am Fuß der Klippe verschluckt Dörfler",
   "Der Zwang des Heap-Thing zerrt an jedem, der sich nähert (delirious-1 beim Ignorieren)",
   "Zwei Wege hinein: ein Geschenk bringen oder sich durchgraben"
  ],
  "readAloud": [
   {
    "page": "S. 462",
    "label": "",
    "text": "Wie erwartet liegt am Fuß der Klippe ein riesiger Haufen jahrealten Ausrangierten. Skunk Glen ist voller enger Felsspalten, und der Müll sammelt sich hier in engen Räumen zwischen Felswänden, verrottet und überwuchert. Als ihr die letzten Schritte hinabgeht, begrüßt euch der seltsame Anblick, wie mehrere Dörfler den Haufen erklimmen und aus ausrangierten Dingen vergangener Jahre Stücke herauspicken, als wählten sie ein edles Stück Fleisch. Einer von ihnen findet die Überreste einer Holzpuppe, drückt sie an die Brust … und springt in den Haufen, wo er aus dem Blick verschwindet, als sich der Unrat öffnet und ihn verschluckt. Einen Moment später ist der stinkende Schlund wieder bedeckt."
   }
  ],
  "flow": [
   "In dieser Szene versuchen die Heroes, in die Domäne des Heap-Thing einzudringen, den letzten Dorfbewohnern folgend, die seinem Zauber verfallen sind.",
   "<span class=\"section-heading\">Den Haufen betreten</span> Nähern sich die Heroes dem Müllhaufen, zerrt der Zwang des Heap-Thing an ihnen. Jeder, der sich dem Haufen nähert, spürt, dass darunter etwas lauert und auf ein Geschenk der Dörfler wartet.",
   "Dies ist ein Threat, und ihn zu ignorieren bringt delirious-1 als Consequence, da sich der Wille des Heap-Thing verstärkt. Ab diesem Punkt werden delirious Heroes durch den Status bei jeder Aktion behindert, die nicht dazu dient, den Wünschen des Heap-Thing zu entsprechen. Es gibt zwei Wege, in die Domäne des Heap-Thing zu gelangen.",
   "<strong>Ein Geschenk bringen</strong> Der Heap-Thing öffnet die Grube zu seiner Höhle jedem, der ihm ein Geschenk bringt – jeden Gegenstand, egal wie abgenutzt oder kaputt (er muss nicht aus dem Müllhaufen stammen). Die Suche nach einem Gegenstand ist eine Quick Action, und der Hero erhält für den Gegenstand ein Gift-Tag.",
   "<strong>Sich durch den verrottenden Unrat graben</strong> Sich durch den Müll zu graben ist eine Aktion (Quick oder Detailed gegen dig 3), aber der Müllhaufen selbst wehrt sich dagegen, und delirious zu sein behindert. Als Consequence wird ein Hero von all den Dingen im Haufen scraped-2.",
   "Sind alle Heroes durch, tauchen sie im Festival of Mockery des Heap-Thing auf (S. 463)."
  ],
  "npcs": [],
  "challenges": [],
  "rewards": [],
  "revelations": [],
  "tips": [
   "<strong>Bis zum Tageslicht warten?:</strong> Obwohl der Ort ziemlich stinky-2 und ein wenig scary-1 ist, ist der Grund von Skunk Glen kein schlechter Lagerplatz. Auch kann die Fellowship ins Dorf zurückkehren, vielleicht in schlechter Verfassung nach dem Aufstieg, oder sich unter einen Baum kuscheln und bis zur Morgendämmerung ruhen. Nutze die Camping-Regeln (Vol. I, S. 179), um eine solche Szene durchzuspielen. Aber können sie dem Zwang des Heap-Thing die ganze Nacht widerstehen? Jede Camp-Aktion erzeugt Consequences: Der Hero erhält delirious-1."
  ]
 },
 {
  "key": "festival",
  "kind": "scene",
  "page": "S. 463–465",
  "title": "Das Fest des Spotts",
  "en": "The Festival of Mockery",
  "summary": "Quests · Der Heap-Thing · die letzten Dörfler · Auflösung",
  "overview": [
   "Die finale Konfrontation in der Domäne des Heap-Thing",
   "Vorab: Quests der Heroes vorlesen lassen und einen Konflikt wählen",
   "Fünf Wege, den Heap-Thing zu überwinden: zerstören, verbannen, überwältigen, überzeugen, befreien",
   "Scheitern heißt: für immer gefangen"
  ],
  "readAloud": [
   {
    "page": "S. 463",
    "label": "",
    "text": "Ihr seid in die Domäne von etwas Unmenschlichem gekommen – etwas im Inneren des Haufens ausrangierter Dinge. Etwas, das der Haufen ist. Das Reich des Heap-Thing, diese verborgene Höhle, ist in endloses Zwielicht getaucht, voller Haufen ausrangierter Dinge, geformt wie … die Dörfler von Ravenhome. Es gibt „Tische“ und „Banner“, alles geschmückt und bereit für eine Nacht des Feierns, ein falsches Fest in vollem Gange: Wahnhafte Dörfler wandern verzaubert zwischen Festmählern aus verdorbenem Essen, von quakenden toten Vögeln gesungenen Liedern und verrotteten Puppen in zerrissenen Masken, die zum Tanz einladen. In der Mitte dieses seltsamen Ortes, wo das Lagerfeuer sein sollte, ragt der Heap-Thing über allem auf: ein riesiger, bedrohlicher Haufen alten Unrats, zusammengehalten von verfaultem Schlamm, der sich von selbst bewegt."
   }
  ],
  "flow": [
   "In dieser letzten Szene stehen die Heroes der Quelle des Problems gegenüber, einer seltsamen Kreatur, von der niemand wusste, dass sie unter dem Hügel ihres Dorfes lebt. Der Einsatz ist hoch – finden die Heroes keinen Weg, den Heap-Thing zu besiegen, zu überlisten oder zu besänftigen, bleiben sie für immer hier gefangen!",
   "<strong>Tags in dieser Szene</strong> Dieser Ort ist unheimlich und mit unzähligen ausrangierten Dingen übersät.",
   "<strong>Die Challenges</strong><br>• <strong>Der Heap-Thing</strong> (Aggressor, Influence), eine gierige, habsüchtige Kreatur, vernarrt in ausrangierte Dinge.<br>• <strong>Die letzten der Enchanted Villagers</strong> (Charge), die im Zauber des Heap-Thing gefangen sind und in seinem Reich festgehalten werden.",
   "<span class=\"section-heading\">Quests: Durchforste deine Gefühle</span> Bevor du diese Szene beginnst, mach eine Pause von der Geschichte und lass jeden Hero seine vier Quests laut der Runde vorlesen. Wähle, ohne es den Heroes zu sagen, nur eine Quest eines Heroes, die in dieser Szene in Konflikt geraten könnte. Die besten Kandidaten sind:",
   "• Quests, die Hingabe oder Verantwortung gegenüber Ravenhome und seinen Leuten darstellen<br>• Quests, die den Hero zu einem bestimmten Ansatz gegen den Heap-Thing drängen (etwa Kampf oder List)<br>• Quests, die die Haltung des Heroes zum Unnatürlichen bestimmen (etwa Faszination oder Hass gegenüber seltsamen Kreaturen)<br>• Quests, die einen Gegenstand als sehr wichtig für den Hero kennzeichnen (ein Gegenstand, der als Geschenk für den Heap-Thing dienen kann)",
   "Wann ein Hero Abandon oder Milestone bei einer Quest markiert, entscheidet letztlich er selbst, aber du kannst helfen, indem du einen Konflikt schaffst. Liebt ein Hero einen Dörfler, der hier ist, bietet der Heap-Thing vielleicht an, alle gehen zu lassen, wenn er diese Person behalten darf. Glaubt der Hero, alle unnatürlichen Kreaturen sollten ausgerottet werden, kannst du ihn vielleicht dazu bringen, Mitleid mit dem Heap-Thing zu haben.",
   "<span class=\"section-heading\">Der Heap-Thing</span> Obwohl er ein mächtiges Wesen aus längst vergangener Zeit ist, ist der Heap-Thing selbstsüchtig, ohne Empathie oder Raffinesse und hat kein wirkliches Verständnis von Menschen – tatsächlich ist er für die Gefühle von Menschen recht empfänglich.",
   "Er heißt jeden willkommen, der seine Domäne betritt, lädt die Heroes ein zu bleiben und mitzufeiern und verspottet sie dabei unablässig für ihre sinnlosen Bemühungen, gegen seinen Willen anzugehen, da er sich in seiner Domäne für allmächtig hält. Solange die Challenge Heap-Thing nicht überwunden ist, kann nur das Brechen seiner Magie jemanden aus seiner Domäne entkommen lassen.",
   "<strong>Was will er?</strong> Auf Nachfrage erklärt der Heap-Thing, wie gekränkt er war, als die Dörfler beschlossen, ihm ihre ausrangierten Dinge nicht mehr zuzuwerfen, dass sie nicht mehr wollten, dass das Wesen an ihrer Feier teilnimmt. Aber nun, da einige der Dörfler hier sind, ist er wieder zufrieden – und beabsichtigt, sie für immer hier zu behalten, anstelle des Geschenks unerwünschter Dinge, das man ihm verweigert hat.",
   "<span class=\"section-heading\">SOLO</span> Lies dies erst, nachdem du eine erfolgreiche Aktion unternommen hast, um den Ursprung des Heap-Thing zu erfassen, sei es durch Gespräch, List oder Magie. Erst dann kannst du versuchen, ihn mit seinem Free-Limit zu überwinden.",
   "<span class=\"section-heading\">Wie der Heap-Thing entstand</span> Vor langer Zeit, als der Heap-Thing zum ersten Mal nach Skunk Glen kam, war er ein fremdartiges, aber schönes Wesen, nicht unähnlich einer großen Person, mit knorrigen Gliedern wie Baumwurzeln, bedeckt mit grünen Schuppen und Augen wie Bernsteinkugeln.",
   "Die Menschen der Gegend bewunderten es und brachten ihm Geschenke, doch mit jedem empfangenen Gegenstand fühlte sich das Wesen mehr und mehr von den Gefühlen belastet, die daran hafteten. Bald wurde es kleinlich und elend, wie viele derer, die diese Gaben brachten. Aber es konnte nicht aufhören, mehr zu begehren; so köstlich waren diese seltsamen Gefühle. Es wurde gemein und hässlich und wandte sich von den Sterblichen ab, doch sie sandten ihm jedes Jahr weiter Geschenke. Und so verschlang es über die Jahrhunderte und häufte einen Haufen ausrangierter Dinge um sich auf, bis es sich nicht mehr erinnern konnte, was es einst war.",
   "<span class=\"section-heading\">Die Kreatur überwinden</span> Es gibt mehrere Wege, den Heap-Thing zu überwinden, die alle verlangen, dass die Heroes ihm Statuses zufügen und eines seiner Limits maxen. Schlage den Heroes vor, dass sie versuchen können, die Schwächen der Kreatur zu entdecken (Quick oder mit dem Discover-Effect).",
   "Die Heroes können den Körperhaufen der Kreatur zerstören oder ihren Geist verbannen, beides schwierige Taten, da die Kreatur groß, stark und mit mächtiger Magie ausgestattet ist (Might: Adventure). Sie können versuchen, sie zu überzeugen, sie gehen zu lassen, indem sie sie besänftigen, mit ihr verhandeln oder sie austricksen (auch das direkt anzugehen ist schwierig, da die Kreatur in ihrer Domäne ist, Might: Adventure). Und wenn die Heroes entdecken, was der Heap-Thing wirklich ist, können sie versuchen, ihn von seiner Bürde zu befreien – dem Haufen selbst – oder ihn mit Gefühlen zu überwältigen, indem sie ihm Geschenke von sentimentalem Wert machen.",
   "<strong>Szenen-Belohnungen</strong> Wird der Heap-Thing zerstört, verbannt oder befreit, kann sich sein schlurfender Müllhaufen öffnen und einen Schatz offenbaren, oder er macht den Heroes sogar ein eigenes Geschenk: einen wundervollen Ring aus gewobenen Silberfäden, eine uralte Bernsteinmünze, eine seltsam glänzende verzierte Speerspitze oder einen unversehrten, verstaubten Foliant. Gib dies den Heroes als Story-Tag, oder es kann der Anfang eines neuen Possessions- oder Relic-Themes sein.",
   "<strong>Die Domäne verlassen</strong> Den Heap-Thing zu überwinden lässt seine Domäne einstürzen, woraufhin die Heroes und Dörfler im Müllhaufen am Grund von Skunk Glen liegen. Die Sonne geht auf, und es ist Zeit für den langen Weg zurück ins Dorf.",
   "<span class=\"section-heading\">Die Letzten von ihnen</span> Eine Handvoll Dörfler – einige Lieblinge der Heroes – hat die Domäne des Heap-Thing erreicht, bevor die Heroes hineingelangen konnten. Verwende das Challenge-Profil Enchanted Villagers (S. 458). Sie sind jedoch delirious-3, und in dieser Domäne wird dieser Status durch die Magie des Heap-Thing verstärkt (Might: Adventure). Außerdem haben sie diese Threats und Consequences:",
   "<strong>Invite</strong> <em>Mit wächsernen Augen und strahlendem Lächeln auf die Heroes zukommen und vorschlagen, am Treiben teilzunehmen</em>",
   "• Sich vor den Hero stellen und versuchen, ihn in einen endlosen Tanz zu reißen (grabbed-2)",
   "<strong>Wallow</strong> <em>Zu den Tischen mit verdorbenem Essen gehen, barfuß auf zerbrochenem Unrat tanzen oder sich im Schlamm wälzen</em>",
   "• Krank, verletzt oder schmutzig werden (Ill Tidings)<br>• Tiefer in den Zauber des Heap-Thing fallen (delirious-2)"
  ],
  "npcs": [],
  "chLib": [
   "the-heap-thing"
  ],
  "chAfter": 3,
  "rewards": [],
  "revelations": [],
  "tips": []
 },
 {
  "key": "aftermath",
  "kind": "aftermath",
  "page": "S. 465",
  "title": "Nachspiel",
  "en": "The Aftermath",
  "summary": "Bilanz ziehen · Camping · Quests & Belohnungen",
  "readAloud": [],
  "showImprovement": true,
  "flow": [
   "Nimm dir einen Moment, um das Abenteuer zusammenzufassen und Bilanz zu ziehen, was alles geschehen ist.",
   "Dies ist eine Gelegenheit, im Dorf zu campen (Vol. I, S. 179) und erneut zu überlegen, ob einer der Heroes angesichts der jüngsten Entscheidungen Abandon oder Milestone bei seinen Quests markieren sollte. War das Abenteuer erfolgreich, können sich die Dörfler auch mit Geschenken in Form neuer Story-Tags bei den Heroes bedanken."
  ],
  "npcs": [],
  "challenges": [],
  "extra": {
   "heading": "Fragen zum Rückblick",
   "type": "list",
   "items": [
    "Wie sind die Heroes aus der Sache hervorgegangen? Wurden sie verletzt? Haben sie ihre Meinung über Kreaturen geändert? Sind einige für immer in der Domäne der Kreatur geblieben?",
    "Wie steht es um das Dorf einen Tag nach dem Vorfall? Muss man nur eine ausgeartete Party aufräumen, oder gibt es schwerere, traurigere Verluste?",
    "Was ist mit den verzauberten Dörflern – wer hat überlebt, und wer wird nie zurückkehren? Wessen Stolz wurde verletzt?",
    "Wo ist der Heap-Thing jetzt? Bleibt er unter dem Hügel, oder ist sein Geist geflohen? Wurde er zerstört oder von seinen Lasten befreit?",
    "Wurde der alte Brauch beibehalten, oder hat sich der neue durchgesetzt? Wird es je wieder ein Frühlingserneuerungsfest geben? Wem geben alle die Schuld für das Debakel?"
   ]
  },
  "rewards": [],
  "revelations": [],
  "tips": []
 }
];
SG_SCENES.forEach(s=>{
  if(s.chLib){ s.challenges = s.chLib.map(libCh).filter(Boolean).map(c=>Object.assign(c,{after:s.chAfter})); delete s.chLib; delete s.chAfter; }
  if(s.vignettesLib){ const j=jn(s.vignettesLib); s.vignettes = j ? j.vignettes : []; delete s.vignettesLib; }
});
ADVENTURES.push({ id:"sg", num:"★", title:"Skunk Glen", en:"The Heap-Thing of Skunk Glen", status:"ready", tutorial:true,
  accent:"var(--moss-bright)",
  teaser:"Ein eigenständiges Tutorial-Abenteuer aus dem Core Book für die erste Runde Legend in the Mist – unabhängig von der Kampagne.",
  scenes: SG_SCENES });
})();
