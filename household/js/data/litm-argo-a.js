/* Legend in the Mist – „Argos Tagebuch“, Szenen 1–4 (Saga-Band S.73–75) */
(function(){
var S = window.HH_LITM["fp/k1/argo"].szenen;

S.push({key: "wallford", t: "Die Tore von Wallford", en: "The Gates of Wallford", sub: "Kennenlernen, Gepäck verstecken, Kontrolle am Stadttor",
 kurz: [
  "**Worum es geht:** Die Gruppe lernt Gustav und Juliette kennen und muss Verbotenes durch die Kontrolle am Stadttor bringen.",
  "**Stimmung:** heiter, geschäftig, ein wenig nervös",
  "**Challenges:** Die Torwache",
  "**Wichtig für später:** Offiziersuhr, gefälschte Juwelen, Gustavs versteckte Halbschere",
  "**Weiter:** Ist das Tor passiert, folgt „Das Lager“."
 ],
 vor: [
  {l: "Im Hof der Taverne", x: "Als ihr nach dem Frühstück aus der Taverne tretet, ist Humphrey schon bei der Arbeit. Er wuchtet Koffer auf eine kleine Kutsche, vor die eine braune Maus gespannt ist. Das Tier schnuppert gelangweilt am Pflaster und zuckt mit den Schnurrhaaren, als ihr näherkommt.\n\nNeben dem Jäger stehen zwei Feen, die nicht recht in diesen Hof passen wollen: ein stattlicher junger Mann mit blondem Haar, gewachstem Schnurrbart und einem Anzug nach der neuesten Mode des Realm, und an seinem Arm eine fröhliche Frau in einem gewaltig ausladenden Kleid, auf dem Kopf einen Hut aus Bienenfell. An ihren Handgelenken und um ihren Hals funkelt genug Schmuck, um eine ganze Straße von Wallford zu kaufen.\n\n„Ah!“, ruft der Mann und breitet die Arme aus. „Unsere Reisegefährten! Gustav, sehr erfreut. Und dies ist meine Juliette. Wir sind in den Flitterwochen, wissen Sie. Das Hearth ist ja so … exquisit malerisch.“"},
  {l: "Vor dem Stadttor", x: "Die Kutsche rumpelt durch die Gassen, bis sich vor euch das Stadttor von Wallford erhebt. Davor stauen sich Karren, Reiter und Fußgänger. Zwei Boggart-Soldaten der Hearth Army arbeiten sich gemächlich durch die Schlange: Sie öffnen Türen, heben Planen an, blättern in Papieren und lassen sich jeden Waffenschein zeigen.\n\nEiner von ihnen gähnt. Der andere nicht. Er hat die Kutsche schon gesehen."}
 ],
 tags: ["enge Gassen", "volle Kutsche", "Schlange am Tor", "Koffer und Hutschachteln"],
 ablauf: [
  "Lass die Spieler:innen zuerst ihre Figuren vorstellen: wie sie aussehen, wie sie zueinander stehen und was jede von ihnen in dieser Kutsche zu verbergen hat. Dann lernen sie die Fae kennen.",
  {h: "Gustav und Juliette kennenlernen", i: "Zwei Feen, die zu sehr nach Fae aussehen", l: [
   "Gustav trägt einige Geldscheine in der Hosentasche, und aus der Brusttasche lugt eine **goldene Uhr**. Wer sie sich genauer ansieht und ein passendes Tag nutzt, erkennt ein sehr wertvolles Stück: die Standarduhr für Offiziere der Great Imperial Army. Gib dafür den Story-Tag {Offiziersuhr}.",
   "Juliettes Juwelen scheinen ein Vermögen wert zu sein. Wer gezielt prüft und **Macht 3** aufbringt, erkennt hervorragende Fälschungen ({gefälschte Juwelen}). Ohne passendes Tag bleibt nur ein unbestimmtes Gefühl.",
   "Gustav nennt seine Frau zärtlich „Jujù“. Beide sprechen mit starkem Akzent der Noble Fae und finden alles „exquisit malerisch“: den Hof, die Maus, das Frühstück, sogar Siennas Hut.",
   "Sie sind höflich, interessiert und stellen viele Fragen, vor allem darüber, wohin die Reise geht und was die anderen nach Chesterfield by-the-fire führt."]},
  {h: "Waffen und Papiere verstecken", i: "Bevor die Kutsche das Tor erreicht", l: [
   "Gustav nimmt Humphrey beiseite: Er habe die Papiere für seine **Halbschere** unterwegs verloren und bitte ihn, die Waffe vor den Soldaten zu verstecken, gegen eine großzügige Münze. Das Verstecken unter der Kutsche ist ein einfacher Wurf. Gelingt es, erhält Humphrey {Gustavs Münze}.",
   "Auch Gwen und Sienna tragen Waffen ohne Schein. Jede muss sie verstecken, sonst werden sie gefunden.",
   "Sienna muss sich außerdem selbst verstecken, denn ihre Papiere sind abgelaufen. Sie kann zwischen den Koffern verschwinden. Bei einem Teilerfolg ragt ein Stiefel heraus ({halb versteckt-1}), bei einem Misserfolg muss sie die Soldaten anlügen, bestechen oder sich mit ihnen anlegen."]},
  {h: "Die Kontrolle am Stadttor", i: "Zwei Boggart-Soldaten öffnen die Kutschentüren", l: [
   "Die Soldaten prüfen kurz Papiere und Waffen. Was nicht gut versteckt ist, finden sie mühelos: Sie beschlagnahmen die Waffe (der Tag wird gestrichen) und verhängen eine Geldbuße ({knapp bei Kasse-2}).",
   "Wer Waffen behalten, die Strafe sparen oder die Soldaten über abgelaufene Papiere hinwegsehen lassen will, kann ein „Trinkgeld“ anbieten oder sein schönstes Lächeln aufsetzen. Bestechen ist ein einfacher Wurf und kostet einen Tag wie {Reisekasse}. Überreden, Lügen oder Einschüchtern braucht **Macht 2**.",
   "Spiele die Torwache als Challenge, wenn die Helden mit den Soldaten verhandeln. Füllen sie DURCHWINKEN oder ÜBERSEHEN, rollt die Kutsche weiter.",
   "Gustav und Juliette helfen dabei nach Kräften. Sie haben ein großes Interesse daran, dass niemand die Kutsche genauer durchsucht."]}
 ],
 figuren: [
  {n: "Gustav", rolle: "Fae, angeblich Edelmann in den Flitterwochen", zitat: "„Exquisit malerisch, wirklich ganz exquisit!“", x: "Stattlicher junger Littling mit blondem Haar, gewachstem Schnurrbart und eleganter Kleidung nach der Mode des Realm. Er spielt den gutmütigen Lebemann, ist aber ein Soldat der Tristarred.", will: "Die Seite aus Argos Tagebuch, ohne dass jemand Verdacht schöpft.", spiel: "Großzügig mit Münzen, Komplimenten und Fragen. Wird für einen Augenblick kühl, wenn jemand seine Uhr erwähnt."},
  {n: "Juliette, genannt Jujù", rolle: "Fae, angeblich Edeldame in den Flitterwochen", zitat: "„Gustav, Liebling, sieh nur, eine echte Maus!“", x: "Fröhlich, in einem sehr ausladenden Kleid und mit einem Hut aus Bienenfell. Die vielen Juwelen sind Fälschungen. In Wahrheit ist sie Offizierin und die Anführerin der beiden.", will: "Herausfinden, wo Gwen die Seite trägt.", spiel: "Lacht viel, interessiert sich auffällig für Gwens Gepäck und für Bücher. Bei Gefahr ist sie schneller und kälter, als ihr Kleid vermuten lässt."},
  {n: "Die Torwache", rolle: "Zwei Boggart-Soldaten der Hearth Army", x: "Einer gähnend und bestechlich, einer pflichtbewusst und misstrauisch.", spiel: "Lass den Misstrauischen die Fae besonders höflich behandeln. Die Hearth Army hat keine Lust auf Ärger mit Leuten aus dem Realm."}
 ],
 hinweise: [
  {n: "Offiziersuhr", x: "Gustavs Uhr gehört zur Ausstattung von Offizieren der Great Imperial Army. Ein Edelmann in den Flitterwochen trägt so etwas eher nicht."},
  {n: "Gefälschte Juwelen", x: "Juliettes Schmuck ist falsch. Wer reich spielt, ohne reich zu sein, hat etwas vor."},
  {n: "Die Halbschere", x: "Gustav reist bewaffnet und will das verbergen. Die Waffe liegt nun unter Humphreys Kutsche."}
 ],
 ch: ["torwache"],
 tipps: [
  "Diese Szene ist das Schaufenster für die Fae. Lass sie die Spieler:innen umgarnen, damit die Szene im Lager wehtut.",
  "Will jemand die Fae schon hier entlarven, reichen die Hinweise nicht für einen Beweis. Gustav und Juliette haben für alles eine Erklärung: Die Uhr ist ein Erbstück, der Schmuck ein Hochzeitsgeschenk.",
  "Verpatzt die Gruppe die Kontrolle völlig, beginnt die Reise mit Ärger, nicht mit einem Ende: eine Waffe weg, die Kasse leichter, die Laune im Keller ({verstimmt-1})."
 ]
});

S.push({key: "lager", t: "Das Lager", en: "The Camp", sub: "Nachtlager unter dem Pilz, vier Wachen, der Diebstahl",
 kurz: [
  "**Worum es geht:** Eine Nacht im Living Room. Gustav und Juliette wollen die Seite stehlen.",
  "**Stimmung:** müde, kalt, trügerisch ruhig",
  "**Challenges:** Schabenrudel, Gustav und Juliette",
  "**Wendepunkt:** Gelingt der Diebstahl, folgt „Der Spur folgen“. Scheitert er, kämpfen die Helden hier gegen das Paar.",
  "**Lager:** Die Nacht ist zugleich eine Lagerszene."
 ],
 vor: [
  {l: "Bei Sonnenuntergang", x: "Nach einem langen Tag auf der Straße taucht das schwache Licht des Fireplace das Living Room in kalten Sonnenuntergang. Die Schatten der Pilze werden lang und blau. Die Maus wird langsamer, schnaubt und bleibt schließlich von allein stehen.\n\nRingsum nichts als Carpet: Fasern, so hoch wie Bäume, die im Abendwind rascheln. Ein Stück abseits des Weges wächst ein einzelner, hoher Pilz mit breitem Hut. Darunter wäre es trocken und windstill."},
  {l: "In der Nacht", x: "Das Feuer ist zu Glut heruntergebrannt. Gustav schnarcht leise im Zelt, und hinter Juliettes Vorhang ist es seit einer Stunde still. Die Kälte kriecht aus dem Floor herauf. Irgendwo zwischen den Fasern knackt es, dann wieder. Etwas krabbelt dort draußen, viele kleine Beine auf trockenem Grund."}
 ],
 tags: ["hoher Pilz", "Lagerfeuer", "Zelte", "dunkler Carpet ringsum"],
 status: ["Nachts wird es eisig: Wer ohne Decke wacht, erhält {durchgefroren-1}."],
 ablauf: [
  "Nach dem Abendessen müssen die Helden zwei Dinge entscheiden: **wo** sie das Lager aufschlagen und **wer wann** Wache hält. Frag reihum, was jede Figur am Abend tut. Das ist der Moment für ruhige Gespräche am Feuer.",
  {h: "Das Lager aufschlagen", i: "Der Pilz sieht nach Schutz aus", l: [
   "Mit gesundem Menschenverstand ist das Lager unter dem hohen Pilz schnell aufgebaut: Er schützt Feuer und Zelte vor dem feuchten Nachtwind.",
   "Wer mit **Macht 2** prüft (etwa mit {Lager aufschlagen} oder {Wetterkunde}), bemerkt, dass der Hut mit feuchtem Schimmel überzogen ist ({schimmeliger Pilzhut}). Der wird in der Nacht gefrieren. Es ist besser, anderswo Schutz zu suchen.",
   "Bleibt die Gruppe unter dem Pilz, friert der Hut in der zweiten Wache, lässt Eis und Wasser ins Feuer tropfen und löscht es. Das lockt Schaben an."]},
  {h: "Die vier Wachen", i: "Wach bleiben und aufmerksam bleiben", l: [
   "Die Nacht hat vier Wachschichten. **Gustav** möchte nicht die erste übernehmen, er sei sehr müde. **Juliette** zieht sich ganz aus der Diskussion zurück: Sie könne ihre lange Schönheitsroutine nicht unterbrechen und keinen Schlaf verlieren.",
   "Wer Wache hält, würfelt zuerst, um wach zu bleiben, dann, um aufmerksam zu bleiben. Ein Misserfolg bedeutet {schläfrig-2} oder dass die Figur sich ablenken lässt.",
   "Schläft jemand ein oder lässt sich ablenken, nutzen Gustav und Juliette die Gelegenheit: Sie stehlen Gwen die Seite und verschwinden in der Nacht (Gwen verliert {Wachsseite}).",
   "Dasselbe geschieht, wenn man Gustav eine Wache anvertraut oder wenn die beiden den Schabenangriff nutzen können, um unbemerkt zu verschwinden."]},
  {h: "Der Schabenangriff", i: "Nur wenn das Feuer erloschen ist", l: [
   "Erlischt das Feuer, kommt ein **Schabenrudel** aus dem Carpet. Die Schaben spielen sofort eine Bedrohung aus, bevor die Helden handeln können.",
   "Während die Gruppe kämpft, verschwinden Gustav und Juliette mit der Seite, es sei denn, jemand achtet ausdrücklich auf die beiden oder auf Gwens Gepäck."]},
  {h: "Der Überfall im Morgengrauen", i: "Passiert nichts davon", l: [
   "Bleibt die Wache wachsam und das Feuer brennt, greifen Gustav und Juliette kurz vor Tagesanbruch an, um die Seite mit Gewalt zu nehmen und zu fliehen.",
   "Der Kampf beginnt damit, dass das Paar eine Bedrohung ausspielt (etwa ZUSTECHEN auf die Wache). Spiele sie mit der Challenge **Gustav und Juliette**.",
   "Werden sie besiegt oder festgesetzt, findet man bei Gustav das Zigarettenetui mit Schlüssel und Karte (siehe „Der Spur folgen“). Die Szene „Die Lichtung und die Inbetweens“ folgt direkt."]}
 ],
 figuren: [
  {n: "Gustav", rolle: "lässt sich nicht in die Karten schauen", x: "Am Feuer erzählt er Anekdoten aus Faeriyev und fragt Humphrey über die Wege des Living Room aus: Wo patrouilliert die Hearth Army, wo gibt es Pilzhaine?", spiel: "Wer gut zuhört, merkt: Er fragt nach Verstecken, nicht nach Sehenswürdigkeiten."},
  {n: "Juliette", rolle: "zieht sich früh zurück", x: "Hinter ihrem Vorhang ist es still. Sie schläft nicht.", spiel: "Wer nachts nach ihr sieht, findet sie wach und angezogen. Sie lächelt und behauptet, sie könne in der Wildnis nicht schlafen."}
 ],
 hinweise: [
  {n: "Gustavs Fragen", x: "Er interessiert sich für Patrouillenwege, Pilzhaine und Höhlen unter dem Floor, also für Orte, an denen man sich verstecken kann."},
  {n: "Keine erste Wache", x: "Gustav will nicht die erste Wache übernehmen. Später in der Nacht schlafen alle fest."}
 ],
 ch: ["schaben", "paar"],
 tipps: [
  "Lass die Wachen nicht einfach würfeln. Frag, was die Figur in ihrer Schicht tut, worüber sie nachdenkt, und gib ihr einen kleinen Moment.",
  "Der Diebstahl ist kein Scheitern der Gruppe, sondern der eigentliche Beginn des Abenteuers. Sag das ruhig, wenn die Stimmung kippt.",
  "Nutzen die Helden ein schlaues Tag (etwa Sienna, die ihr eigenes Gepäck mit einer Glocke sichert), belohne das: Dann kommt es im Morgengrauen zum Überfall statt zum leisen Diebstahl."
 ],
 lohn: [
  "Die Nacht zählt als Lagerszene: Wer weder wacht noch kämpft, kann eine Lager-Aktion nutzen, etwa sich erholen oder über das Erlebte nachdenken.",
  "Wurde der Diebstahl verhindert: Gwen behält {Wachsseite}, und die Gruppe erhält {Gustavs Karte}."
 ]
});

S.push({key: "spur", t: "Der Spur folgen", en: "Following the Trail", sub: "Fußspuren, der Pilzhain, die Gemeine Spinne",
 kurz: [
  "**Worum es geht:** Die Helden verfolgen die Diebe und geraten in einem Pilzhain an eine Spinne.",
  "**Gilt nur, wenn** die Seite gestohlen wurde.",
  "**Stimmung:** feucht, düster, beklemmend",
  "**Challenges:** Gemeine Spinne",
  "**Weiter:** Mit Juliettes Spur oder Gustavs Karte zu „Die Lichtung und die Inbetweens“."
 ],
 vor: [
  {l: "Im Morgengrauen", x: "Grau sickert der Morgen durch die Carpet-Fasern. Das Lager ist still, zu still. Gustavs Zelt steht offen, Juliettes Vorhang hängt schief, und das Bündel, in dem Gwen die Seite aufbewahrt hat, liegt aufgeschnürt neben der kalten Feuerstelle.\n\nIm feuchten Staub des Floor zeichnen sich Stiefelabdrücke ab: ein großes Paar, ein kleines Paar. Sie führen vom Lager weg, weder in Richtung Wallford noch nach Chesterfield by-the-fire."},
  {l: "Am Rand des Pilzhains", x: "Nach einigen hundert winzigen Metern ragen vor euch braune Pilze auf, dicht an dicht wie ein Wald. Unter ihren Hüten ist es dämmrig. Weiße Sporen rieseln von den Lamellen und treiben wie dünner, stinkender Nebel zwischen den Stielen. Der Boden glänzt feucht. Irgendwo tropft es."},
  {l: "Mitten im Hain", x: "Nach etwa zwanzig winzigen Metern enden alle Spuren in einem Fleck schleimigen Mooses. Hier ist es still. Kein Insekt summt, kein Tropfen fällt. Hoch über euch, auf dem Hut eines besonders dicken Pilzes, hängen zwei große, weiße Bündel aus Spinnweben, und aus einem ragt ein Stück blauer Stoff, ganz wie Gustavs Jacke."}
 ],
 tags: ["Stiefelspuren", "dichter Pilzhain", "schleimiges Moos", "Sporennebel", "Dämmerlicht"],
 status: ["Wer sich nicht Stoff vor Mund und Nase bindet, erhält {krank-2} durch die Sporen."],
 ablauf: [
  "Die Helden entdecken den Verrat im Morgengrauen. Da das Paar mitten in der Nacht aufgebrochen ist, müssen sie seinen Spuren folgen, um die Seite zurückzuholen.",
  {h: "Die Spuren lesen", i: "Fußabdrücke im Staub", l: [
   "Ein einfacher Wurf (etwa mit {Fährtenleser}) findet die Fußspuren der Diebe, die sich einige hundert winzige Meter vom Lager entfernen.",
   "Da die Feen nicht geflogen sind, um nicht gehört zu werden, und die Spuren weder nach Wallford noch nach Chesterfield by-the-fire weisen, können die Helden schließen: Die beiden haben ihr Versteck ganz in der Nähe.",
   "Wer mit **Macht 2** die Gegend und die Patrouillenwege der Hearth Army bedenkt, folgert: Das Versteck liegt in einem Pilzhain oder in einem Inbetween unter dem Floor.",
   "Nur wer mit **Macht 3** sucht, bemerkt, dass Juliettes kleinere Spuren sich in die Gegenrichtung abspalten, zu einer Lichtung im Carpet. Wer ihnen folgt, umgeht den Pilzhain und geht direkt zu „Die Lichtung und die Inbetweens“."]},
  {h: "Der Pilzhain", i: "Etwa zwanzig winzige Meter hinein verlieren sich alle Spuren", l: [
   "Erfahrene Reisende wissen, dass die Sporen giftig sein können. Ein Stück Stoff vor Mund und Nase genügt. Wer es nicht tut, erhält {krank-2}.",
   "Nur wer sehr aufmerksam ist und **Macht 3** aufbringt, bemerkt rechtzeitig, dass die Gruppe auf eine Falle zugeht: Auf einem Pilzhut lauert eine Spinne. Dann können die Helden kehrtmachen oder zuerst auf sie schießen.",
   "Bemerkt niemand die Falle, beginnt der Kampf damit, dass die **Gemeine Spinne** eine Bedrohung ausspielt (am besten SPRUNG oder NETZ)."]},
  {box: "Lauft!", l: [
   "Eine gewöhnliche Spinne ist für Figuren am Anfang ihrer Reise ein sehr zäher Gegner. Gwen und ihre Freunde sind mutige Littlings und können ihr beikommen, selbstverständlich ist das aber nicht.",
   "Erinnere die Spieler:innen daran: Es ist keine Schande, wegzulaufen. Wer wegläuft, kann ein andermal weiterkämpfen."]},
  {h: "Die Flucht", i: "Wenn die Helden kehrtmachen", l: [
   "Die Spinne jagt wütend hinter ihnen her. Die Flucht ist ein Wettlauf: Die Helden füllen das Limit ENTKOMMEN 3 der Challenge.",
   "Die Spinne springt vom Pilz und schleudert dabei die beiden Spinnwebbündel vor sich her. Eines aufzuheben braucht Kraft und **Macht 2**."]},
  {h: "Die Spinnwebbündel", i: "Was in den Bündeln steckt", l: [
   "In einem Bündel liegt ein armer Boggart in fortgeschrittener Verwesung, im anderen ganz offensichtlich **Gustav**.",
   "Uhr und Münzen lassen sich der Leiche noch abnehmen ({Offiziersuhr}), die Geldscheine hat die Galle der Spinne ruiniert.",
   "In Gustavs Innentaschen steckt ein metallenes Zigarettenetui mit einem Schlüssel und einer einfachen Karte auf Fae, die zur Mitte einer Lichtung weist. Gib den Helden die Tags {Falltürschlüssel} und {Gustavs Karte}.",
   "Wer Fae spricht (Gwen), kann die Karte sofort lesen."]},
  "Nach dem Sieg über die Spinne oder der Flucht vor ihr können die Helden endlich verschnaufen."
 ],
 hinweise: [
  {n: "Zwei Spuren", x: "Gustav und Juliette haben sich getrennt. Juliette ist mit der Seite zur Lichtung gegangen, Gustav hat den Weg durch den Hain genommen und es nicht überlebt."},
  {n: "Schlüssel und Karte", x: "Das Etui zeigt: Die beiden hatten ein Ziel. Eine verschlossene Tür in der Mitte einer Lichtung."}
 ],
 ch: ["spinne"],
 tipps: [
  "Beschreibe den Hain mit allen Sinnen: Gestank, Feuchtigkeit, das Rieseln der Sporen, die plötzliche Stille. Die Spinne soll sich ankündigen, bevor sie zuschlägt.",
  "Gustavs Tod ist ein Schock. Gib den Spieler:innen einen Moment, um darauf zu reagieren: Wer trauert, wer fühlt sich bestätigt, wer durchsucht die Leiche?",
  "Wollen die Helden nach der Spinne nicht weiter, erinnere an Humphreys Ehrenwort und Gwens Quest. Die Seite ist noch irgendwo da draußen."
 ],
 lohn: [
  "{Falltürschlüssel} und {Gustavs Karte}",
  "Wer die Spinne besiegt: Story-Tag {Spinnengift} (eine Phiole aus den Beißzangen) oder {Spinnenseide}."
 ]
});

S.push({key: "inbetween", t: "Die Lichtung und die Inbetweens", en: "The Clearing and the Inbetweens", sub: "Die Falltür, Tunnel im grünen Schimmerlicht, Wachen der Tristarred",
 kurz: [
  "**Worum es geht:** Eine verborgene Falltür führt in ein Labyrinth aus Tunneln. Fae-Soldaten patrouillieren darin.",
  "**Stimmung:** still, staubig, gespannt",
  "**Challenges:** Tristarred-Wachen",
  "**Große Enthüllung:** Die Wachen gehören zu den Tristarred.",
  "**Weiter:** Am Ende der Tunnel liegt „Das unterirdische Studierzimmer“."
 ],
 vor: [
  {l: "Die Lichtung", x: "Die Carpet-Fasern weichen zurück und öffnen sich zu einer runden Lichtung, auf der nur kurze, zertretene Tufts wachsen. Es ist hell hier, fast freundlich. Erst auf den zweiten Blick fällt auf, dass die Tufts in der Mitte zu ordentlich liegen, als hätte jemand sie zurechtgelegt.\n\nDarunter: Holz. Eine schwere Falltür, eingelassen in den Floor, mit einem eisernen Schloss."},
  {l: "Die Tunnel", x: "Die Leiter führt hinab, Sprosse um Sprosse, zehn winzige Meter tief, bis das Licht von oben nur noch ein graues Viereck ist. Unten öffnen sich Gänge in mehrere Richtungen: alte, natürliche Risse im Floor, mit Spitzhacken verbreitert. Staub liegt auf allem.\n\nDas einzige Licht kommt von Schimmelflecken an den Wänden, die schwach und grün leuchten. Es ist sehr still. Dann, aus einem der Gänge, das Geräusch von Stiefeln. Zwei Paar, im Gleichschritt."}
 ],
 tags: ["verborgene Falltür", "lange Leiter", "Labyrinth aus Tunneln", "grünes Schimmerlicht", "Staub dämpft die Schritte"],
 ablauf: [
  {h: "Die Falltür finden", i: "Juliettes Spuren oder Gustavs Karte", l: [
   "Jeder Held, der sucht, entdeckt mit einem einfachen Wurf die verborgene Öffnung unter den Carpet Tufts: eine schwere Falltür im Floor.",
   "Zum Öffnen braucht man den {Falltürschlüssel} oder eine geschickte Hand (einfacher Wurf, etwa mit {Schlösser knacken})."]},
  {h: "Durch die Tunnel", i: "Ein Labyrinth unter dem Floor", l: [
   "Unter der Falltür führt die Leiter zehn winzige Meter in die Tiefe. Die Inbetweens sind hier ein Labyrinth staubiger Tunnel, die Littlings erweitert haben. Lang, still und nur vom grünen Schimmel erhellt.",
   "Die Helden müssen zwei Dinge schaffen: unbemerkt bleiben und den richtigen Weg finden. Für den Weg braucht es **Macht 2** (etwa mit {Gustavs Karte}, {Fährtenleser} oder {kennt jedes Versteck}).",
   "Wer sich verirrt, wird unweigerlich von den Wachen entdeckt. Die **Tristarred-Wachen** spielen dann sofort eine Bedrohung aus.",
   "Wurden Gustav und Juliette im Lager entlarvt oder ist Juliette entkommen, sind die Wachen gewarnt: Sie stehen bereit, und ALARM ist ihr erster Zug."]},
  {h: "Die Wachen", i: "Paarweise, in alten Uniformen", l: [
   "Die Soldaten sind allesamt Feen, sprechen nur Fae und tragen alte Uniformen, die jeder mit einem einfachen Wurf als Relikte des Household War erkennt.",
   "Sie zögern nicht, Alarm zu schlagen und ihre Kameraden zu warnen. Gelingt es den Helden nicht, ALARM VERHINDERN zu füllen, sind die Kürassiere im Studierzimmer gewarnt.",
   "Wer Fae spricht, kann Gesprächsfetzen belauschen: „… die Kopie bis morgen …“, „… sie sagt, das Papier allein reicht nicht …“."]},
  {h: "Der Hinweis auf der Uniform", i: "Wer eine Wache besiegt und untersucht", l: [
   "Auf der linken Schulter fehlen zwei der fünf Sterne. Sie wurden abgeschnitten.",
   "Ein einfacher Wurf mit einem passenden Tag (etwa {Archivwissen}) genügt besonnenen Helden, um zu verstehen: Das sind die **Tristarred**, hypernationalistische Rebellen (siehe „Das Edikt der Brüder“ im Abschnitt „Household-Geschichte“).",
   "Warum sie sich im Hearth verstecken und nach Argos Tagebuch suchen, bleibt ein Rätsel."]},
  "Am Ende der Tunnel liegt in der Ferne ein Licht: die Tür zu einem unterirdischen Studierzimmer."
 ],
 figuren: [
  {n: "Tristarred-Wachen", rolle: "Fae-Soldaten auf Patrouille", x: "Junge und alte Feen in schlecht sitzenden, alten Uniformen. Sie sind keine Elite, aber sie glauben an ihre Sache.", spiel: "Sie unterhalten sich leise auf Fae, über Heimweh, über Faeriyev, über „die Sache“. Gefangen, schweigen sie trotzig."}
 ],
 hinweise: [
  {n: "Zwei abgeschnittene Sterne", x: "Das Abzeichen der Tristarred: drei statt fünf Sterne."},
  {n: "Uniformen des Household War", x: "Die Ausrüstung ist alt. Diese Gruppe arbeitet im Verborgenen, nicht für die Great Imperial Army."}
 ],
 ch: ["wachen"],
 tipps: [
  "Spiel die Tunnel als Schleichszene: Beschreibe Schritte, die näher kommen und wieder leiser werden, Lichtflecken, Abzweigungen. Lass die Spieler:innen planen.",
  "Willst du die Szene kürzer, lass die Helden genau ein Wachpaar treffen. Willst du sie länger, gib ein zweites Paar dazu, das den Rückweg versperrt.",
  "Die Enthüllung „Tristarred“ ist der große Moment dieser Szene. Gib sie, sobald jemand eine Uniform untersucht, auch ohne Wurf, wenn Gwen dabei ist."
 ],
 lohn: [
  "Erbeutete Ausrüstung: {Tristarred-Uniform} (zum Verkleiden) oder {Bajonett}.",
  "Story-Tag {wir wissen von den Tristarred}"
 ]
});
})();
