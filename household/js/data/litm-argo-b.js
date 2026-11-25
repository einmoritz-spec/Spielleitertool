/* Legend in the Mist – „Argos Tagebuch“, Szenen 5–7 (Saga-Band S.76–77) */
(function(){
var S = window.HH_LITM["fp/k1/argo"].szenen;

S.push({key: "studierzimmer", t: "Das unterirdische Studierzimmer", en: "The Underground Study", sub: "Arbeiter, Kürassiere, Juliette am Schreibtisch",
 kurz: [
  "**Worum es geht:** Das Versteck der Tristarred. Die Helden müssen an den Kürassieren vorbei und Juliette die Seite abnehmen.",
  "**Stimmung:** gespannt, gefährlich, verzweifelt",
  "**Challenges:** Kürassiere, Juliette",
  "**Große Enthüllung:** der Plan der Tristarred",
  "**Weiter:** Ein Schuss, ein Riss in der Wand: „Der Einsturz“."
 ],
 vor: [
  {l: "Am Ende des Tunnels", x: "Der Gang weitet sich, und vor euch öffnet sich ein riesiger, runder Raum mit gewölbter Decke. An der linken Wand steht ein hölzernes Gerüst, und darauf arbeiten sechs Feen mit Schaufeln und Spitzhacken. Staub rieselt bei jedem Schlag. Sie sehen müde aus, und keiner von ihnen hebt den Blick.\n\nUnter ihnen stehen zwei Soldaten in Kürassen, Schild am Arm, Speer in der Hand, und bellen Befehle auf Fae.\n\nWeiter hinten, etwa zwanzig winzige Meter entfernt, brennen Lampen über drei großen Schreibtischen voller Karten und Bücher. An einem davon steht eine Gestalt mit dem Rücken zu euch, in einer alten Offiziersuniform. Sie schreibt. Neben ihr, unter einem Briefbeschwerer, liegt ein Stück Papier, das von einer dünnen Wachsschicht glänzt."},
  {l: "Wenn Juliette sich umdreht", x: "Die Gestalt dreht sich um. Es ist Juliette, ohne Hut, ohne Kleid, ohne Lächeln. Ihre Haare sind streng zurückgebunden, und in ihrer Hand liegt eine Pistole, ganz ruhig.\n\n„Ihr hättet in Chesterfield bleiben sollen“, sagt sie. Der Noble-Fae-Akzent ist verschwunden. „Ihr wisst nicht, worin ihr euch da einmischt.“"}
 ],
 tags: ["hölzernes Gerüst", "Schutthaufen", "Schreibtische voller Karten", "Lampen", "Gewölbedecke", "Risse in der Wand"],
 ablauf: [
  {h: "Die Wachen überwinden", i: "Leise heranschleichen oder aus dem Tunnel schießen", l: [
   "Um die **Kürassiere** zu überrumpeln, müssen die Helden sich langsam und hinter Schutthaufen versteckt nähern (**Macht 3**) oder aus dem dunklen Tunnel schießen, etwa zehn winzige Meter entfernt.",
   "Gelingt das, füllen sie ÜBERRUMPELN, und die Kürassiere sind {überrascht-3}.",
   "Wurde Alarm geschlagen, lauern die beiden Soldaten zu beiden Seiten der Tür und überfallen die Helden beim Eintreten (Bedrohung HINTERHALT). Das vermeidet nur, wer als Erster eintritt und sehr vorsichtig ist, oder wer die besorgten Mienen der Arbeiter liest, die sich normal zu verhalten versuchen (**Macht 2**)."]},
  {h: "Die Arbeiter", i: "Sechs Feen, die nicht kämpfen wollen", l: [
   "Keiner der Arbeiter will sein Leben in einem Kampf riskieren. Sie ducken sich auf dem Gerüst oder fliehen in einen Seitengang.",
   "Einer von ihnen wartet nur auf eine Gelegenheit, die schwache Stelle in der Wand zu treffen. Er weiß, was dahinter lauert, und würde lieber alles begraben, als weiter hier zu schuften.",
   "Wer mit ihnen spricht (auf Fae und mit **Macht 2**), erfährt: Sie wurden gezwungen. Der Raum soll größer werden, für „das Archiv“."]},
  {h: "Die Schreibtische", i: "Karten, Bücher und ein verschlüsselter Brief", l: [
   "Auf den drei Schreibtischen liegen Karten des Hearth, Bücher über Contracts und über Argos Geschichte, alle Gwen vertraut ({Bücher über Argo}).",
   "Dazwischen liegt ein **in Code verfasstes Befehlsschreiben**. Wer es mit **Macht 2** entschlüsselt (etwa mit {Karten und Codes lesen}), erfährt den Plan der Tristarred, auch ohne Juliette."]},
  {h: "Juliette stellen", i: "Sie stirbt lieber, als ihre Sache zu verraten", l: [
   "Juliette trägt eine alte Offiziersuniform der Great Imperial Army und fertigt eine Kopie der Seite an.",
   "Die Seite lässt sich ihr nicht unbemerkt entwenden. Die Helden müssen Gewalt anwenden oder ihr drohen (**Macht 3**).",
   "Wer sie nicht zuerst **entwaffnet**, riskiert alles: Steht sie mit dem Rücken zur Wand, richtet sie die Pistole gegen sich selbst, um der Gefangennahme zu entgehen (Bedrohung LETZTER AUSWEG).",
   "Bringen die Helden sie zum Reden, verrät sie: Die Tristarred sammeln ihre Kräfte und werden mit den Geheimnissen aus Argos Tagebuch Zarin Arcadia Oberonovna stürzen und das alte Fae-Reich im House wiederherstellen."]}
 ],
 figuren: [
  {n: "Juliette", rolle: "Offizierin der Tristarred", zitat: "„Für das Reich. Für das wahre Reich.“", x: "Ohne Maske ist sie kühl, konzentriert und vollkommen überzeugt. Gustav war ihr Kamerad, nicht ihr Ehemann.", will: "Die Kopie fertigstellen und die Seite in Sicherheit bringen. Notfalls um jeden Preis.", spiel: "Erfährt sie von Gustavs Tod, zuckt sie nur kurz zusammen, und wird gefährlicher."},
  {n: "Die Kürassiere", rolle: "zwei Soldaten der Tristarred", x: "Schild, Speer, Kürass. Diszipliniert und erfahren, aber ohne große Lust, für ein Loch unter dem Floor zu sterben.", spiel: "Fällt einer, zögert der andere. Ein gutes Angebot oder eine Drohung kann ihn zum Aufgeben bringen."},
  {n: "Die Arbeiter", rolle: "sechs gezwungene Feen", x: "Staubig, erschöpft, verängstigt. Einer hat gesehen, was hinter der Wand lebt.", spiel: "Sie bitten die Helden stumm um Hilfe. Rettet man sie, werden sie zu Verbündeten auf der Flucht."}
 ],
 hinweise: [
  {n: "Der Plan", x: "Die Tristarred wollen mit Argos Geheimnissen Zarin Arcadia Oberonovna stürzen und das alte Fae-Reich im House wiederherstellen."},
  {n: "Das Befehlsschreiben", x: "Verschlüsselt, aber lesbar für Gwen. Ein Beweis, den man jemandem zeigen kann."},
  {n: "Das Archiv", x: "Der Raum wird erweitert. Die Tristarred planen, hier mehr als eine Seite zu sammeln."}
 ],
 ch: ["kuerassiere", "juliette"],
 tipps: [
  "Die Szene ist am stärksten, wenn Juliette nicht sofort schießt. Lass sie reden, drohen, die Helden verachten. Sie hält die Pistole, und jeder weiß, dass sie abdrücken wird.",
  "Wollen die Helden verhandeln, kann Juliette Zeit gewinnen wollen: Die Kopie ist fast fertig. Ein Held, der das bemerkt, kann die Kopie zerstören.",
  "Egal wie die Szene endet, sie endet im Einsturz. Ein Schuss, ein Fehlschuss oder die Spitzhacke des verzweifelten Arbeiters."
 ],
 lohn: [
  "Die {Wachsseite} (zurück bei Gwen) und das {verschlüsselte Befehlsschreiben}.",
  "Eventuell Juliettes Kopie der Seite ({Juliettes Abschrift}) oder ihre {Offizierspistole}."
 ]
});

S.push({key: "einsturz", t: "Der Einsturz", en: "The Collapse", sub: "Der Sporn-Hundertfüßer, die Flucht zur Falltür",
 kurz: [
  "**Worum es geht:** Die Wand bricht, ein riesiger Hundertfüßer kriecht heraus, das Versteck stürzt ein. Flucht!",
  "**Stimmung:** Panik, Staub, Dröhnen",
  "**Challenges:** Riesiger Sporn-Hundertfüßer",
  "**Ziel:** Mit Seite und Brief die Falltür erreichen.",
  "**Weiter:** Ist die Gruppe draußen, folgt „Schluss“."
 ],
 vor: [
  {l: "Der Riss", x: "Der Knall hallt von der Gewölbedecke wider. Für einen Herzschlag passiert nichts. Dann knirscht es in der Wand hinter dem Gerüst, und ein Riss läuft durch den Stein, schnell wie ein Blitz, verzweigt sich, wird breiter.\n\nDie Wand atmet aus: Eine Staubwolke quillt aus dem Spalt. Und aus der Wolke kommen die Beine. Schwarz, glänzend, gegliedert. Eines. Zehn. Dutzende. Sie tasten die Wand entlang, finden Halt, ziehen nach, und dahinter schiebt sich ein Körper ohne Ende ins Licht, besetzt mit Spornen, so lang wie ein Arm.\n\nDas Brüllen lässt die Lampen auf den Schreibtischen tanzen."},
  {l: "Die Flucht", x: "Hinter euch bricht die Decke ein. Vor euch der Tunnel, grün und dunkel, und irgendwo am Ende eine Leiter. Ihr hört das Klicken der Beine hinter euch, das Bersten von Holz, das Poltern von Geröll. Es kommt näher."}
 ],
 tags: ["Staubwolke", "einstürzende Decke", "brennende Lampen", "der lange Tunnel", "die Leiter zur Falltür"],
 status: ["Wer den Hundertfüßer zum ersten Mal sieht und nicht widersteht, erhält {verängstigt-2}."],
 ablauf: [
  {h: "Was den Einsturz auslöst", i: "Früher oder später passiert es", l: [
   "Erschießt sich Juliette, schießt jemand in Richtung der Arbeiter oder verfehlt sein Ziel, dringt eine Querschläger-Kugel in einen Riss in der Wand und löst eine Kettenreaktion aus.",
   "Geschieht nichts davon, nutzt einer der Arbeiter die erste Gelegenheit, eine schwache Stelle zu treffen, in einer verzweifelten Tat."]},
  {h: "Der Hundertfüßer", i: "Ein riesiger Sporn-Hundertfüßer hält Einzug", l: [
   "Er kriecht aus dem Riss ins Studierzimmer, während es einstürzt, und verschlingt Juliette (falls sie noch lebt) oder einen der Wächter.",
   "Wer den Anblick nicht erträgt, erhält {verängstigt-2}. Mutige Helden können sich mit einem passenden Tag (etwa {unerschütterlich}) dagegenstemmen.",
   "Den Hundertfüßer zu töten ist kaum möglich (TÖTEN 6). Mach den Spieler:innen klar: Hier geht es ums Überleben."]},
  {h: "Die Kampfpause nutzen", i: "Während er frisst", l: [
   "Solange der Hundertfüßer mit seiner Beute beschäftigt ist, lassen sich Seite und Brief mühelos vom Schreibtisch nehmen.",
   "Wer will, kann in diesem Moment auch die Arbeiter zur Flucht antreiben oder Juliettes Abschrift ins Feuer werfen."]},
  {h: "Die Flucht zur Falltür", i: "Ein Wettlauf durch die Tunnel", l: [
   "Die Flucht ist ein Wettlauf: Die Helden füllen gemeinsam das Limit FALLTÜR ERREICHEN 4. Jeder Wurf ist eine Etappe: durch den Raum, in den Tunnel, an der Abzweigung vorbei, die Leiter hinauf.",
   "Nach jedem Wurf spielt der Hundertfüßer eine Bedrohung aus: Geröll versperrt den Weg, ein Sporn trifft, ein Arbeiter stolpert und muss getragen werden.",
   "Wer zurückbleibt, wird verschüttet ({verschüttet-3}) oder von Spornen getroffen ({vergiftet-3}). Die anderen können umkehren und helfen.",
   "Gelingt die Flucht, bleibt der Hundertfüßer im senkrechten Schacht mit der Leiter stecken, schüttelt sich wütend und begräbt schließlich sich selbst und die unterirdische Basis für immer."]}
 ],
 hinweise: [
  {n: "Für immer begraben", x: "Das Versteck der Tristarred ist zerstört. Was dort lag, ist verloren, außer dem, was die Helden mitgenommen haben."}
 ],
 ch: ["hundertfuesser"],
 tipps: [
  "Halte das Tempo hoch: kurze Sätze, schnelle Fragen („Was tust du? Jetzt!“). Erlaube kein langes Planen.",
  "Gib jedem Helden einen Heldenmoment: jemanden mitreißen, Geröll wegstemmen, auf das Tier schießen, um Zeit zu gewinnen.",
  "Hat die Gruppe die Seite noch nicht, liegt sie jetzt offen auf dem Schreibtisch. Das Abenteuer soll nicht daran scheitern, dass die Seite verloren geht."
 ],
 lohn: [
  "Gerettete Arbeiter: Story-Tag {dankbare Fae-Arbeiter} (Verbündete für später).",
  "Wer überlebt, hat etwas zu erzählen: {dem Hundertfüßer entkommen}."
 ]
});

S.push({key: "schluss", t: "Schluss", en: "Conclusion", sub: "Zurück zum Lager, weiter nach Chesterfield, Humphreys Wort",
 kurz: [
  "**Worum es geht:** Durchatmen, Bilanz ziehen, weiterreisen.",
  "**Stimmung:** erschöpft, erleichtert, ein bisschen stolz",
  "**Ausblick:** Professor Flanagan in Chesterfield by-the-fire, und die Tristarred"
 ],
 vor: [
  {l: "Zurück an der Oberfläche", x: "Ihr zieht euch über die letzte Sprosse ins Freie und lasst euch in die Carpet-Fasern fallen. Unter euch grollt es noch einmal, dann ist es still. Die Falltür liegt schief in ihrem Rahmen, und Staub steigt aus dem Spalt wie Rauch aus einem erloschenen Kamin.\n\nÜber dem Living Room geht die Sonne des Fireplace auf, als wäre nichts geschehen."},
  {l: "Am Lagerfeuer", x: "Am Abend brennt wieder ein Feuer, diesmal fern von jedem Pilz. Die Maus kaut zufrieden an einem Bündel Carpet-Fasern. Gwen hält die Seite gegen das Licht. Die Wachsschicht hat Kratzer, und an einer Ecke fehlt ein Stück, abgerissen irgendwo zwischen Spinne, Tunnel und Leiter."}
 ],
 ablauf: [
  "Nachdem sie die Seite aus Argos Tagebuch zurückgeholt und den Plan der Tristarred aufgedeckt haben, kehren die Helden zum Lager zurück, gönnen sich ein wohlverdientes Mahl und reisen weiter nach Chesterfield by-the-fire.",
  {h: "Bilanz der Helden", i: "Frag jede Spielerin und jeden Spieler", l: [
   "**Earnest** hat es nicht geschafft, Sienna aus dem Ärger herauszuhalten. Was denkt er jetzt über sie?",
   "**Sienna** hat auf ihre Weise etwas Gutes aus der Erfahrung gezogen. Was hat sie mitgenommen, im wörtlichen oder im übertragenen Sinn?",
   "**Humphrey** kann es kaum erwarten, all das hinter sich zu lassen und zu seinem Leben als Jäger zurückzukehren.",
   "**Gwen** hält die Seite wieder in den Händen. Was bedeutet es ihr, dass die Tristarred danach suchen?"]},
  {h: "Das gebrochene Versprechen", i: "Die fehlende Ecke", l: [
   "Die Seite hat auf der Reise eine Ecke verloren. Gwen stellt scharfsinnig fest, dass Humphrey sein Versprechen gebrochen hat, sie und ihr Gepäck unversehrt nach Chesterfield by-the-fire zu bringen.",
   "Humphrey ist also weiter verpflichtet, Gwen zu begleiten, zumindest so lange, bis sie findet, er habe für seinen Fehler gebüßt.",
   "Spiel diesen Moment aus: Ein kurzer Streit am Feuer, halb ernst, halb im Scherz, schweißt die Gruppe für das nächste Kapitel zusammen."]},
  {h: "Wie es weitergeht", i: "Für die Saga", l: [
   "In Chesterfield by-the-fire wartet Professor Flanagan, Teampalls alter Freund.",
   "Die Tristarred haben ein Versteck verloren, aber nicht ihren Plan. Spielt ihr die Saga weiter, treten sie bald wieder auf.",
   "Das verschlüsselte Befehlsschreiben ist ein Beweis. Wem die Helden es zeigen, der Hearth Army, der Gendarmerie oder niemandem, kann später wichtig werden."]}
 ],
 tipps: [
  "Lass die Szene nicht zu schnell enden. Nach so viel Gefahr braucht die Gruppe einen ruhigen Moment.",
  "Hast du Zeit, spiel die Ankunft in Chesterfield by-the-fire als kurzes Bild: die Stadt unter dem Sofa, die Türme der Gelehrten, Samuels Abschlussfeier."
 ],
 lohn: [
  "Die Seite aus Argos Tagebuch, leicht beschädigt: Gwen behält {Wachsseite}, dazu {fehlende Ecke} als Hinweis für später.",
  "Das {verschlüsselte Befehlsschreiben} als {Beweis gegen die Tristarred}.",
  "Fortschritt auf Gwens Quest „Das Geheimnis von Argos Tagebuch lüften“ und auf Humphreys Quest „Das Versprechen an Gwen einlösen“.",
  "Hat Earnest Sienna beschützt oder hat sie ihn gerettet? Je nach Verlauf Fortschritt auf Earnests Quest „Sienna aus dem Ärger heraushalten“ oder auf Siennas Quest „Aus allem etwas Gutes herausholen“.",
  "Fortschritt auf der Quest der Gefährtenschaft, sobald die Kutsche Chesterfield by-the-fire erreicht."
 ]
});
})();
