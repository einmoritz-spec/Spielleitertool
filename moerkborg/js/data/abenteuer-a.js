/* Rotblack Sludge – Corebook S. 73–79 (c10): Vorspann, Seher, Zufallsbegegnungen, Räume 1–5. */
var MB_ABT = {
 t:"Rotblack Sludge", oder:"oder Des Schattenkönigs verlorener Erbe", sub:"ein einführender Dungeon-Crawl für MÖRK BORG",
 vor:"Du stehst vor der Hinrichtung wegen ketzerischen Diebstahls, doch ein maskierter Seher, ein Höfling des Schattenkönigs, bot dir eine Chance auf Leben. Der einzige wahre Erbe des Königs, sein Sohn Aldon, ist verschwunden. Ohne Erben wird der Schattenkönig schließlich gezwungen sein, seine Krone seinem schwachsinnigen Bruder zu übergeben. Bringe ihn diskret zurück, und Reichtum, Leben und Freiheit werden dein sein. Man glaubt, Aldon sei in einer berüchtigten unterirdischen Stätte eingekerkert, einem Ort, den kein freier Mann freiwillig betreten würde, einem Ort namens **Die Verfluchte Höhle.**",
 seher:{h:"W8 Dinge, die der Seher sehen mag", p:74, x:"Dieser maskierte Seher ist etwas seltsam und wirr, bietet aber an, die Verfluchte Höhle zu erspähen und dir zwei Wahrheiten zu nennen.", l:[
  "Ein geheimnisvolles **Haus aus Glas,** in dem der Anführer eines Kults haust. *(wahr)*",
  "**Gase dringen aus Löchern und Rissen** und treiben jeden, der sie atmet, in den Wahnsinn. *(falsch)*",
  "**Kannibalen!** Sie fressen ihresgleichen! *(wahr)*",
  "Die Lampen brennen rot, das Lampenöl **mit Menschenblut versetzt!** *(unsicher, größtenteils unwahr)*",
  "Ein uralter Mann lebt in einem verfallenen Raum. **Fürchte und meide ihn.** *(falsch)*",
  "Etwas hungert in der Tiefe, **eine gewaltige Kreatur** wie ein riesiger Darm! *(wahr)*",
  "Ich fürchte, Aldon ist **nicht gewillt, diesen Ort zu verlassen.** *(wahr)*",
  "**Ich fürchte, niemand ist je freiwillig der Verfluchten Höhle entkommen!** *(unsicher)*"]},
 zufall:{p:75, wo:["Pumpenraum (7)","Kettenraum (8)","Trümmerraum (14)"], wahl:"Wähle, auf welcher Tabelle gewürfelt wird, aber Tabelle B sollte nur einmal verwendet werden.",
  a:[
   {h:"W4 Dämmergnome", t:"Sie kriechen aus Löchern und klettern an den Wänden. Klein, schnell, aber gebrechlich.", w:"TP 4 · Moral 7 · Keine Rüstung", b:["SG14, um sie zu treffen.","**Messer W4**"]},
   {h:"W2 Köter", t:"Massige schwarze Hunde mit zotteligem, öligem Fell.", w:"TP 8 · Moral 9 · Keine Rüstung", b:["**Biss W4 +1:** Infektion, wenn die Zähigkeitsprobe SG12 misslingt."]},
   {h:"W4 Wachen mit geschärften Zähnen", t:"Schwach und ausgezehrt. Lecken sich die Lippen.", w:"TP 6 · Moral 7 · Leder −W2", b:["**Kurzschwert W4**","**Biss W4**"]},
   {h:"Nistender Tod", t:"Spinne in Hundegröße, die ein Nest aus Knochen an der Decke gebaut hat.", w:"TP 12 · Moral – · Dicker Panzer −W2", b:["Gewinnt die Initiative bei 1–4.","**Biss W4:** Zähigkeitsprobe SG12, um nicht zu erstarren (Proben sind eine Stunde lang SG +2)."]}
  ],
  bt:"Tabelle B (nur einmal während des Szenarios)",
  b:[
   {h:"Verzweifelter Geist", t:"Aufgewühlt von den Gräueln und dem Kannibalismus, die die Höhle plagen, fleht er die SC an, dem Grauen ein Ende zu setzen. Kann den SC vom Darmwurm erzählen."},
   {h:"Basar aus einer verzerrten Dimension", t:"Sagsobuth manifestiert sich. Eine interdimensionale Händlerin; sie verkauft *violettes Gift* für 30s (SG14, 2W10 Schaden, W4+1 Dosen) und bietet eine *Buchenholzröhre* für 30s an. Die Röhre enthält eine *üble Proteus-Schriftrolle:* Jeden Morgen hat diese Schriftrolle eine neue unreine Macht. Die Macht kann einmal eingesetzt werden. Sie wird bei 1–3 auf einem W20 falsch gedeutet statt bei einer 1.", s:{h:"Sagsobuth", t:"Formlos und ätherisch. Ihr Gesicht ein Wirbel aus Licht.", b:["Kann nicht verletzt werden, greift aber nur an, wenn sie provoziert wird.","**Explosion:** 2W10 Schaden, verteilt auf die Gruppe."]}},
   {h:"Eine schreckliche Stille", t:"quält die SC. Alle Geräusche sind in diesem Raum unerklärlich gedämpft."},
   {h:"Ein Sarkophag", t:"steht in der Mitte dieses Raums. Öffnet jemand den Deckel, werden alle SC in den Sarkophag gesogen und in **das Lager in Raum 11 (das Gewächshaus)** teleportiert."}
  ]},
 /* Hotspots der Karte (Anteile von Breite/Höhe) */
 pos:{1:[.58,.70],2:[.47,.56],3:[.68,.62],4:[.71,.48],5:[.57,.43],6:[.43,.37],7:[.40,.21],8:[.71,.36],9:[.55,.34],10:[.29,.31],11:[.16,.24],12:[.73,.24],13:[.81,.23],14:[.75,.15],15:[.58,.15]}
};
var MB_RAUM = [];
MB_RAUM.push(
{id:1, t:"Eingang", p:77, stimmung:"Abgestandener Geruch.", punkte:[
  "**Brennende Öllaterne** hängt von der Decke.",
  "**Kleiner Wasserlauf** quert den Raum aus Löchern in den Wänden. **Schwarzviolette Schmetterlinge** flattern hilflos über dem Wasser.",
  "**Norden:** **zwei hölzerne Türen angelehnt.** Leise Violinenmusik ist hinter beiden zu hören.",
  "**Süden:** **Treppe** nach draußen."],
 abs:[{h:"Schmetterlinge essen", x:"heile W6 TP."}]},
{id:2, t:"Speisesaal", p:77, stimmung:"Warm und hell. Fauliger Geruch. Leise, traurige Violinenmusik aus dem Norden.", punkte:[
  "**4 riesige Öllampen.**",
  "**Großer Holztisch** mit 20 Stühlen. Gedeckt mit Bechern, Tellern und Löffeln, aber ohne Speisen oder Getränke.",
  "**Ein bärtiger Mann** sitzt am anderen Ende des Tisches. Aschgraue Haut, dunkle Augen, gekleidet in einen verstaubten alten Umhang. Es ist unmöglich, mit ihm zu kommunizieren oder Kontakt aufzunehmen. Man kann ihn anstoßen, schlagen oder angreifen, ohne dass er reagiert.",
  "**Norden:** **leise Tür** zum Korridor.",
  "**Osten:** **knarrende Tür** zum Wachraum. Die Wachen beschweren sich hörbar und bewegen sich umher.",
  "**Süden:** **Holztür** zum Eingang."],
 abs:[{h:"Wenn alle am Tisch sitzen", x:"Der Mann kommt zu sich und bricht in grollendes Lachen aus. Er erzählt einige Minuten lang Geschichten von einst, versinkt aber langsam und unwiderruflich wieder in seiner eigenen Welt."}],
 wachen:1, bild:"raum2-baertiger-mann"},
{id:3, t:"Bibliothek/Schlafzimmer", p:78, stimmung:"Kühle, leicht rauchige Luft.", punkte:[
  "**Ein Paar Fackeln** glimmt schwach.",
  "**2 Betten:** drei Skelette (vermutlich menschlich).",
  "**Gigantisches Bücherregal:** obskure Literatur, mit wahnhafter Hand in einer unbekannten Sprache geschrieben.",
  "**Nachttisch** mit verwelkten Blumen in einer Tonvase.",
  "**Norden:** **schwere Tür** zum Wachraum. Presst man ein Ohr an die Tür, hört man Stimmen.",
  "**Süden:** **Holztür** zum Eingang."],
 abs:[
  {h:"Die Blumen oder ein Buch stehlen", x:"Trägt jemand die Vase oder ein Buch aus diesem Raum, erwachen die Skelette und greifen an."},
  {h:"Die Bücher genauer studieren, W4", l:[
   "Heftchen. Der Text lässt sich deuten und erweist sich als **zufällige unreine Schriftrolle (siehe S. 35).** Die Skelette erwachen **nicht,** wenn es mitgenommen wird.",
   "Der Leser wird benommen und für die nächste halbe Stunde ist der SG für Präsenz- und Geschicklichkeitsproben um 2 erhöht.",
   "Der Text ist völlig unverständlich.",
   "Der Text lässt den Leser rufen: *„Du Toter, erhebe dich!“,* woraufhin ein **müder Kristalldämon** erscheint. Die Skelette erwachen **nicht.**"]}],
 wachen:1,
 kr:[
  {h:"3 schlummernde Skelette", t:"Gedankenlos, ziellos.", w:"TP 5 · Moral 7 · Keine Rüstung", b:["**Knochenfäuste W4**","Ein Skelett: **Gezackter Krummsäbel W4**"], bild:"raum3-skelette"},
  {h:"Müder Kristalldämon", t:"An diesen Raum gebunden, sehnt er sich nach einem Weg zur Flucht.", b:["Kann nicht verletzt werden.","Der Dämon wird **den Text aus einer Schriftrolle saugen.** Er sendet eine **mentale Schockwelle** aus, bevor er in dünner Luft verschwindet.","**Mentale Schockwelle:** Jeder SC, der eine Präsenzprobe SG12 nicht besteht, kann für den Rest des Szenarios keine Mächte mehr einsetzen und verliert W6 TP."]}]},
{id:4, t:"Wachraum", p:79, stimmung:"Fauliger Gestank. Heiß. Traurige Violinenmusik von der Treppe.", punkte:[
  "**Schiefe Wachen (W4)** vertreiben sich die Zeit. Einer trägt die **Zellenschlüssel** (Raum 5).",
  "**Kamin** lodert heiß.",
  "**Trümmer und Holztisch** mit Stühlen.",
  "**Norden:** **wackelige Holztreppe** zum Kettenraum. Die Öllampe, Ketten und Haken an der Decke sind zu sehen, aber nicht der Boden.",
  "**Westen:** **Eisentür** zu den Zellen, kratzende Geräusche sind zu hören, **knarrende Tür** zum Speisesaal.",
  "**Süden:** **schwere Tür** zur Bibliothek/zum Schlafzimmer."],
 abs:[{h:"Den Raum durchwühlen (W6, zweimal würfeln)", l:[
   "Knochige Überreste eines Hundes. Es ist noch etwas Fleisch dran (genug, um eine Person einen Tag lang zu ernähren).",
   "Halskette mit einem schwarzen Stein.",
   "3W10 Silber.",
   "Urne mit einem feinen Pulver (Gift SG14 oder −W8 TP).",
   "Bei 1–3: heilige Schriftrolle. Bei 4–6: Schachtel mit einem kleinen Käfer (harmlos, aber er beißt).",
   "Kleine Armbrust (W6) mit Präsenz + 6 Bolzen."]}],
 kr:[{h:"W4 schiefe Wachen", t:"Sie folgen jedem Wort Fletchers. Er hat ihre Erinnerungen verflucht, und sie wissen nicht mehr, warum sie ihm dienen. Lesdy im Gewächshaus ist ihnen gleichgültig. Wenn man sie bedrängt, erzählen sie den SC vom verlorenen Sohn, wissen aber nicht, wie man in sein Zimmer gelangt.", w:"TP 8 · Moral 7 · Leder −W2", b:["**Schwert W6**","**Oberschenkelknochen W4**"], bild:"raum4-wachen"}]},
{id:5, t:"Zellen", p:79, stimmung:"Widerlicher Gestank von Tod und Blut, überall Leichen.", punkte:[
  "**Leichen.** Manche ganz, manche zerrissen.",
  "**Gefangene.** Ausgezehrt und flehend, aber wahnsinnig.",
  "**Osten:** **Eisentür** zum Wachraum, Stimmen sind hörbar.",
  "**Westen:** **verklemmte Tür** zum Korridor, totenstill."],
 abs:[{h:"Den Zellen zu nahe kommen", x:"Die hungrigen und wahnsinnigen Gefangenen erwürgen jeden, der durchgeht. Probe auf Geschicklichkeit SG12, um auszuweichen, und auf Stärke SG12, um sich loszureißen, oder −W4 TP pro Runde."}],
 wachen:1,
 kr:[{h:"10 wahnsinnige Gefangene", t:"Sie kennen nur die Wachen. Hin und wieder wird ein Gefangener geholt und nie wieder gesehen. Schwach und wahnsinnig, flehen sie um Hilfe, würgen aber jeden, der ihnen zu nahe kommt.", w:"TP 2 · Moral 4 · Keine Rüstung", b:["**Würgende Hände W4/Runde:** Geschicklichkeit SG12, um auszuweichen. Stärke SG12, um sich loszureißen."], bild:"raum5-gefangene"}]}
);
