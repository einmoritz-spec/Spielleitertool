/* Paket D3 – Halt 2: Mord am Straßenrand (S. 184–189; Teil 2: Orte, Gerüchte, Angst-System, NSC) */
window.ES = window.ES || {}; ES.HALTE = ES.HALTE || {};
(function(){
 var H = ES.HALTE.mord; if(!H) return;
 H.abschnitte.push(
  {id:"orte", titel:"Orte", s:184, orte:[
   {id:"amador", name:"Das Amador Inn", s:184, html:`<p>Das Hotel gehört <a class='nsc' data-n='harney'>Lolly und Jack Harney</a> und wird von ihnen geführt. Das Gebäude hat ein Hightech-Profil mit mehreren Servicerobotern (S. 189). Alle Funktionen wie Licht, Türen, Klimaanlage und Wassersystem werden von einem Computer gesteuert. Die Zimmer kosten 50 $ pro Nacht. Zwei stationäre Neurocaster-Terminals stehen zur Verfügung und können stundenweise kostenlos gebucht werden.</p>
<p>In den Fluren können einfache Kellnerroboter angewiesen werden, Dinge zu holen, Nachrichten zu hinterlassen, Betten zu machen und Gäste auf Wunsch zu wecken. Der Plan war, das gesamte Personal durch Roboter zu ersetzen, aber die Roboter können keine komplexen Aufgaben wirklich bewältigen und dienen stattdessen dazu, eine Hightech-Atmosphäre des Luxus zu erzeugen.</p>
<p>Im Erdgeschoss gibt es ein Restaurant mit Bar und Bühne. Das gesamte Essen soll angeblich umweltfreundlich und sehr exklusiv sein, manchmal sogar bizarr. Auf der Speisekarte stehen Dinge wie gehackte Ameisen oder giftige Blumen als Gewürz. Im großen Foyer können Gäste Führer für Vogelbeobachtung oder Wanderungen buchen.</p>
<p>Die Harneys haben eine private Suite mit einem Büro mit Blick auf die Berge. Im Hotel gibt es drei Wachleute, eine Putzfrau (Ranielle) und etwa ein Dutzend weitere Angestellte, die keine Roboter sind.</p>`},
   {id:"keller", name:"Der Keller", s:184, html:`<p>Ranielle nutzt den großen Keller unter dem Amador Inn. Sie hat Räume voller halbfertiger Roboter und Neurocaster-Bauteile. Es gibt viele Wege in den Keller hinein und aus ihm heraus, und Ranielle nutzt die labyrinthartige Beschaffenheit des Kellers, um Eindringlingen zu entkommen oder sie anzugreifen.</p>`},
   {id:"quellen", name:"Heiße Quellen", s:184, html:`<p>Hinter dem Hotel liegen heiße Quellen, in denen die Gäste baden können. Manchmal brechen nachts Teenager ein und feiern Partys im Wasser, bis die Wachleute sie vertreiben.</p>`},
   {id:"oil", name:"Valley Oil", s:184, html:`<p>Eine Tankstelle.</p>`},
   {id:"lorrys", name:"Lorry’s", s:184, html:`<p>Ein heruntergekommenes Motel, inklusive Ratten, Kakerlaken, undichten Rohren und einem aggressiven, alkoholkranken Besitzer. Ein Zimmer kostet 20 $ pro Nacht.</p>`},
   {id:"sun", name:"The Golden Sun", s:184, html:`<p>Ein Diner und Treffpunkt für Einwohner und Touristen gleichermaßen.</p>`},
   {id:"pots", name:"Pots & Perfumes", s:184, html:`<p>Ein Laden, der lokal hergestellte Waren verkauft.</p>`},
   {id:"eagle", name:"Eagle Hill", s:184, html:`<p>Ein Aussichtspunkt.</p>`},
   {id:"creek", name:"Liberty Creek", s:184, html:`<p>Ein Bach, der aus den Bergen in den Fluss fließt.</p>`},
   {id:"violettas", name:"Violetta’s", s:184, html:`<p>Ein italienisches Restaurant, vor zwei Jahren pleitegegangen und verlassen. Derzeit dient es den wenigen Teenagern in Liberty als Treffpunkt, zumindest wenn sie nicht gerade nachts in das Hotelgelände einbrechen, um in den heißen Quellen zu schwimmen.</p>`},
   {id:"als", name:"Al’s Food & All", s:184, html:`<p>Ein kleiner Supermarkt. Enthält einen stationären Neurocaster zur stundenweisen Nutzung. Verkauft eine große Auswahl an Revolvern und Jagdgewehren. Besitzer ist Al Perez, der in einer nahegelegenen Villa lebt (unten).</p>`},
   {id:"perez", name:"Die Perez-Villa", s:186, html:`<p>Diese große Villa ist das Zuhause von Al Perez, dem Besitzer von Al’s Food & All. Al ist ein Jugendfreund von Old Toby und weiß, dass dieser nicht Allan Brown ist. Perez ist etwas paranoid und hasst die Harneys. Die Villa ist wie eine Festung gebaut, bereit, einer Invasion standzuhalten. Al hält zwei Armeemörser aus den 1960er-Jahren in einem Stall versteckt. Es gibt mehrere Ställe rundherum, mit Rindern, Schafen und Pferden. Al und die Polizisten haben im Keller provisorische Arrestzellen eingerichtet.</p>`},
   {id:"museum", name:"Liberty Valley Museum", s:186, html:`<p>Das Museum ist keine große Sache. Es konzentriert sich vor allem auf die kalifornischen Wasserkriege (eine Zeit, in der L.A. kleineren Gemeinden das Wasser nahm, unter anderem durch die Umleitung des örtlichen Flusses) und auf Relikte des indianischen Stammes der Paiute, die das Becken lange vor der Ankunft der Siedler bewohnten. Das Museum zeigt auch das Feuer, das die alte Kirche zerstörte, bekannt als „Das Wunder von Liberty“. Wenn Reisende Angestellte nach dem „Wunder“ fragen, glauben alle, dass die Stadt das Feuer und das angebliche Wunder inszeniert hat, um Touristen anzulocken.</p>`},
   {id:"kirche", name:"Liberty Church", s:186, html:`<p>Die Liberty Church wurde mit der Stadt Ende des 19. Jahrhunderts gegründet und dient vor allem Protestanten, heißt aber jeden willkommen. Nach einem Brand im Jahr 1899 wurde sie wieder aufgebaut, aber das ursprüngliche Kruzifix verbrannte nicht und befindet sich noch heute darin. Das galt damals als echtes Wunder und lockte um die Jahrhundertwende einige Touristen an.</p>`},
   {id:"sperre", name:"Polizeisperre", s:186, html:`<p>Die Straßensperre besteht aus zwei Polizeiwagen und mindestens einem Beamten. Wurde im Countdown (S. 183) die zweite Straßensperre ausgelöst, werden die erste und die zweite Sperre mit Sattelaufliegern quer über der Straße verstärkt.</p>`},
   {id:"sphaere", name:"Die Neurosphäre", s:186, bild:"es/h-mord-neurosphaere", html:`<p>Diese riesige kugelförmige Struktur sitzt am Berghang und ragt über die Stadt. Name und Logo von Sentre sind deutlich zu sehen, vielleicht so unheilvoll wie die Anlage selbst. Seit Monaten war kein Servicepersonal mehr hier.</p>
<p>Die Neurosphäre beherbergt eine lokale Neurolandschaft, die von einem System gesteuert wird, das langsam den Verstand verliert. Man kann aus der Ferne oder über direkte Terminals an der Neurosphäre auf die Neurolandschaft zugreifen. Mehr zur Neurolandschaft und zur Neurosphäre siehe unten.</p>`}
  ]},
  {id:"geruechte", titel:"Gerüchte", s:184, box:1, bei:"orte",
   html:`<p>Während des Besuchs der Reisenden in Liberty kannst du jederzeit eine NSC ein Gerücht ausplaudern lassen:</p>
<ul><li>Der Sheriff Old Toby ist in Wahrheit ein Mann namens Allan Brown. Er wurde in Liberty geboren und wuchs hier auf, tötete aber in seinen Zwanzigern seine Schwester und wurde zu Gefängnis verurteilt. Er ist nun aus dem Gefängnis zurückgekehrt, als Sheriff verkleidet und mit anderem Namen. Er ist der Mörder, und jeder, der seine wahre Identität kennt, ist in Gefahr.</li>
<li>Die Putzfrau des Amador Inn, Ranielle Ganaway, ist die wahre Besitzerin des Hotels. Sie kann Fleischroboter herstellen, die von echten Menschen nicht zu unterscheiden sind.</li>
<li>Der Grund, warum die Leute in Liberty Neurocaster meiden, ist eine Krankheit in der Neurolandschaft außerhalb der Stadt – ein System, das jeden verdirbt, der ihm zu nahe kommt.</li>
<li>Der Besitzer von Al’s Food & All, Al Perez, hasst alle in Liberty. Deshalb lässt er die Polizisten dort wohnen. Manche sagen, er habe Waffen in seiner Villa versteckt und warte auf eine Gelegenheit, sie gegen seine eigenen Nachbarn einzusetzen.</li></ul>`},
  {id:"angst", titel:"Das Angst-System", s:186,
   html:`<p>Das Angst-System ist eine periphere Neurolandschaft, die in der Neurosphäre vor Liberty (oben) gehostet wird. Sie ist vor kurzem beschädigt worden und nicht mehr Teil des globalen Netzwerks. Jetzt ist ein Zugriff nur noch lokal möglich. Der Zugang erfolgt drahtlos, kabelgebunden vom Amador Inn aus oder über ein direktes Terminal an der Neurosphäre selbst.</p>
<p>Für einen neurocastenden Besucher erscheint die Neurolandschaft des Angst-Systems dunkel und riecht nach verrottendem Fleisch. Seltsame Kreaturen aus Fleisch und Metall schreien Besucher an und greifen sie sogar an. Es ist etwas zwischen einem Albtraum von Hieronymus Bosch und einem von H. R. Giger. Die Sonne der Neurolandschaft ist schwarz und brennt mit einem chemischen, fliederfarbenen Licht. Im Inneren fällt alles auseinander, sogar der Boden gibt nach. Alle Geräusche hallen wider, und andere Besucher sind nur als durchsichtige Schatten zu sehen. Im Hintergrund stöhnt etwas in furchtbarem Schmerz.</p>
<p>Da die meisten Landschaften paradiesisch sind, ist dieses System wahrscheinlich etwas, dem die Reisenden noch nie begegnet sind. Schon das Betreten ist ein traumatisches Erlebnis mit einem möglichen Hoffnungsverlust von 1.</p>
<h3>Rausch</h3>
<p>Ein Reisender, der im Angst-System neurocastet, erleidet Rausch ganz normal, aber wenn sein Rausch-Wert seine aktuelle Hoffnung erreicht oder übersteigt, wird er vom Angst-System verdorben. Er wird dann zu einem mörderischen Wahnsinnigen unter deiner Kontrolle als Spielleitung. Das bleibt für den armen Reisenden so, bis das Angst-System zerstört ist.</p>
<h3>Das System hacken</h3>
<p>Ein Reisender, der sich mit dem Angst-System verbindet, kann es von innen hacken (S. 94), um es zu zerstören. Dafür sind drei getrennte Verstand-Würfe nötig, mit einem Bonus durch das Talent Hacker. Ein Reisender, der das tut, wird jedoch von zunehmend aggressiveren Fleischmaschinen-Kreaturen angegriffen und muss dabei wahrscheinlich von anderen Reisenden beschützt werden.</p>
<h3>Die Neurosphäre zerstören</h3>
<p>Die Neurolandschaft (und mit ihr das Angst-System) kann zerstört werden, indem man die Neurosphäre physisch zerstört, aber das geht nur mit Sprengwaffen, etwa einem Molotowcocktail oder, noch besser, den Mörsern in der Perez-Villa. Die Neurosphäre hat Panzerungsstufe 3 und kann 15 Schadenspunkte aushalten, bevor sie zerstört ist.</p>`},
  {id:"nsc", titel:"NSC", s:188, nsc:[
   {id:"toby", name:"Der Sheriff, Old Toby", s:188, bild:"es/n-toby",
    html:`<p>Sheriff Toby war in seiner Jugend tatsächlich ein Krimineller, und er hat mehrmals seinen Namen geändert, als er durch Pacifica zog. Aber er ist kein Mörder. Jetzt hat er sich in Liberty als Sheriff niedergelassen und sich den Ruf erworben, hart, aber fair zu sein. Old Toby ist ein großer Mann mit langen schwarzen Haaren und einem kleinen Schnurrbart. Er riecht stark nach Rasierwasser und spricht langsam, oft mit lauter Stimme.</p>
<p><b>Ort:</b> Old Toby und die drei Beamten, die er zur Untersuchung des Mordes mitgebracht hat, bewegen sich durch Liberty und können überall auftauchen. Sie sind in der Perez-Villa stationiert.</p>`,
    stat:{name:"Old Toby", s:188, w:[["Stärke",5],["Geschick",4],["Verstand",5],["Empathie",3]], z:[["Gesundheit","4"],["Talent","Pistolenschütze"],["Ausrüstung","Handfeuerwaffe, Streifenwagen (Geländewagen mit den Eigenschaften Kraftvoll und Schwer), 200 $"]]}},
   {id:"beamte", name:"Beamte", s:188,
    html:`<p>Die Beamten Dann, Dylan und Harper.</p>`,
    stat:{name:"Beamte", s:188, w:[["Stärke",4],["Geschick",4],["Verstand",3],["Empathie",3]], z:[["Gesundheit","4"],["Talent","Pistolenschütze"],["Ausrüstung","Handfeuerwaffe, Streifenwagen (Geländewagen mit den Eigenschaften Kraftvoll und Schwer), 100 $"]]}},
   {id:"harney", name:"Lolly & Jack Harney", s:189, bild:"es/n-harney",
    html:`<p>Lolly und Jack Harney kehrten vor fünf Jahren aus Los Angeles zurück, nachdem sie mit dem Verkauf gefälschter Ausweise ein Vermögen gemacht und es dann an der Börse angelegt hatten. Sie bauten das Amador Inn, um wohlhabende Touristen anzulocken, doch bisher sind Besucher dünn gesät.</p>
<p>Jetzt fürchten sie, dass die Morde und die polizeilichen Ermittlungen ihre wenigen Besucher vertreiben und sie in den Ruin treiben. Sie wollen, dass die Lage so schnell wie möglich gelöst wird. Eines Morgens sah Lolly ein Bild des Mörders Allan Brown neben einem Bild von Old Toby und fand sie bemerkenswert ähnlich – das war purer Zufall, aber Lolly ist überzeugt, dass sie ein und dieselbe Person sind. Jack ist sich nicht so sicher, hat aber Angst, Lolly zu widersprechen.</p>
<p>Lolly und Jack haben beide lockiges schwarzes Haar und große Augen. Sie sehen sich ähnlich genug, um für Geschwister gehalten zu werden. Beide haben einen guten Geschäftssinn und wissen, wie man Menschen manipuliert, um sie auf seine Seite zu ziehen. Die meisten Leute in Liberty halten sie für Anführer der Gemeinschaft, aber eine kleine Minderheit hasst sie und will, dass sie verschwinden.</p>`,
    stat:{name:"Lolly & Jack Harney", s:189, w:[["Stärke",3],["Geschick",2],["Verstand",4],["Empathie",6]], z:[["Gesundheit","3"],["Talent","Charmeur, Trickbetrüger"],["Ausrüstung","Handfeuerwaffe, Zweiradantrieb-Wagen, 2.000 $ Bargeld"]]}},
   {id:"kellner", name:"Kellnerroboter", s:189,
    stat:{name:"Kellnerroboter", s:189, w:[["Stärke",6],["Geschick",4],["Rumpf",5],["Panzerung",6]], z:[["Ausrüstung","Messer oder improvisierte Keule"]]}},
   {id:"ranielle", name:"Ranielle Ganaway", s:189, bild:"es/n-ranielle",
    html:`<p>Ranielle Ganaway tötet mit einem Taser und einer Axt. Sie geht hauptsächlich auf Besucher los, kann aber auch Einheimische töten. Sie zerstückelt die Leichen und lässt sie dort zurück, wo sie getötet wurden, es sei denn, das würde sie als Mörderin zu verraten drohen. Sie ist eine kleine, aber starke Frau in einem Jeans-Overall und einer gelben Kappe, die ihren rasierten Kopf und mehrere schwarze Kabel verbirgt, mit denen sie sich an ihren zusammengebastelten Neurocaster anschließt.</p>
<p><b>Ort:</b> Ranielle hält sich in der Regel im großen Keller unter dem Amador Inn auf, außer wenn sie zum Töten hinausgeht.</p>`,
    stat:{name:"Ranielle Ganaway", s:189, w:[["Stärke",5],["Geschick",6],["Verstand",4],["Empathie",2]], z:[["Gesundheit","6"],["Talent","Klingenkämpfer, Hacker"],["Ausrüstung","Taser, Axt, zusammengebastelter Neurocaster, 10 $"]]}},
   {id:"kreaturen", name:"Fleischmaschinen-Kreaturen", s:188,
    html:`<p>Diese seltsamen, unnatürlichen Kreaturen – die nur noch entfernt an Menschen erinnern – sind das, was von den gequälten Bewohnern der lokalen Neurolandschaft übrig ist, nun für immer verdreht und verloren wegen der verderbten Natur des Angst-Systems. Sie existieren nur innerhalb der Neurolandschaft.</p>
<p>Von einer Fleischmaschinen-Kreatur angegriffen zu werden ist ein traumatisches Erlebnis mit einem möglichen Hoffnungsverlust von 2.</p>`,
    stat:{name:"Fleischmaschinen-Kreaturen", s:188, w:[["Stärke",7],["Geschick",4]], z:[["Gesundheit","6"],["Waffe","Metallklauen (Basisschaden 2)"]]}},
   {id:"neben", name:"Neben-NSC", s:188,
    html:`<p>Unten steht eine Liste mehrerer Neben-NSC, die bei diesem Halt auftauchen können. Für sie wird überall ein Wert von 3 in allen Attributen angenommen, außer für die Polizisten im benachbarten Kasten. Du kannst sie bei Bedarf weiter ausgestalten.</p>
<ul><li>Al Perez: Besitzer von Al’s Food & All und der Villa, in der die Polizei stationiert ist.</li>
<li>Aisha Fitoussi: Besitzerin von Pots & Perfumes.</li>
<li>Chung Nguyen: Neurin-Süchtiger und langjähriger Gast im Hotel.</li>
<li>Diane Hearts: Kellnerin im Diner The Golden Sun.</li>
<li>Father Dominguez: Priester in der Kirche.</li>
<li>Officers Dann, Dylan und Harper: Polizisten.</li>
<li>Rebecka Tall: Arbeitet an der Rezeption des Amador Inn.</li>
<li>Maria Evans: Anführerin der örtlichen Teenagerbande, die illegal Neurin verkauft.</li>
<li>Mark Brown: Manager von Liberty Oil.</li>
<li>Sebastian Miller: Manager im Lorry’s.</li>
<li>Die Bakers: Ein wohlhabendes britisches Ehepaar, das im Amador Inn wohnt.</li>
<li>Maureen Kohle: Die Kuratorin des Liberty Valley Museums.</li></ul>`}
  ]}
 );
 H.karte = {bild:"es/karte-liberty", s:185, pins:[{ort:"amador",x:25.5,y:66},{ort:"quellen",x:21.3,y:61},{ort:"oil",x:48.8,y:58.2},{ort:"lorrys",x:41.7,y:71.9},{ort:"sun",x:54,y:73},{ort:"pots",x:49,y:80.3},{ort:"eagle",x:37.1,y:83.7},{ort:"creek",x:32,y:82.4},{ort:"violettas",x:42.3,y:82.5},{ort:"perez",x:52.4,y:83.8},{ort:"museum",x:37.6,y:77.8},{ort:"kirche",x:37.2,y:69},{ort:"sperre",x:51.5,y:9.8},{ort:"sphaere",x:68.6,y:39.3}]};
})();
