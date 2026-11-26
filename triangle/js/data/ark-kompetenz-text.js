/* ARK › Kompetenz (S. 98–117) */
TA_TEXT["ark/kompetenz/pr"] = {
 motto:"Bitte sieh künftig von privaten Beziehungen ab.",
 l:["Die Agency braucht oft Leute, die anomale Effekte wegerklären und besorgte Schaulustige zu den richtigen Schlüssen lenken können. Manche PR-Angestellte überzeugen mit Worten, andere mit Ablenkung, und viele finden, dass Einschüchterung am wirksamsten die Meinung eines Menschen ändert. Alle wissen: Der Ruf geht über alles, und die Geschichten, die Menschen sich selbst erzählen, sind genauso wichtig wie die Realität.",
  "Agenten der Öffentlichkeitsarbeit bekommen oft die Leitung der vielen gemeinnützigen und wohltätigen Organisationen übertragen, die unter dem Einfluss der Agency stehen. Diese Angestellten verbringen ihre Arbeitszeit damit, Veranstaltungen zu organisieren, Abgeordnete zu kontaktieren und dafür zu sorgen, dass Geschichten über die Agency nie an die Öffentlichkeit gelangen.",
  "Komm in unser Team für Öffentlichkeitsarbeit, wenn du die Wahrheit gern als Waffe und den Zweifel als Schild benutzt!"],
 r:[
  {t:"direktive", h:"Bleib immer sauber.", x:"**Jedes Mal, wenn du lügst,** erhältst du **1 Verweis**."},
  {t:"sp", eng:1, x:[
   [{t:"gebilligt", x:["Für Ablenkung sorgst.", "Eine großartige Ausrede lieferst.", "Dafür sorgst, dass sie nie wieder darüber sprechen."], bonus:"Wenn du in einem Einsatz jedes Gebilligte Verhalten mindestens einmal zeigst, erhältst du nach der Vergabe der Auszeichnungen einen Bonus von **{3} Belobigungen**."}],
   [{t:"erst", h:"Druckerpresse-Mitteilung", x:"Diese uralte, unhandliche Druckerpresse steht in einem alten Freizeitraum auf einer ungenutzten Etage deiner Agency-Zentrale. Einmal pro Einsatz darfst du mit der Presse eine Geschichte drucken, die dann sofort in allen großen Lokalblättern erscheint. Bist du unterwegs, kannst du deine Geschichte an die anderen in deiner Abteilung schicken, damit sie sie durch die Presse laufen lassen."}]]},
  {t:"selbst", b:["Bitte beantworte die folgenden Fragen und erhöhe deine maximalen Qualitätssicherungen um **{3}** in den Qualitäten, die zu deinen Antworten gehören.", "Wenn du deinen ersten Einsatz beginnst, stehen dir insgesamt neun Qualitätssicherungen zur Verfügung. Am Ende jedes Einsatzes kehren die Qualitätssicherungen auf ihr aktuelles Maximum zurück.", "Gib deinem GM anschließend bitte eine kurze Beschreibung der Arbeit, die du in dieser Abteilung am liebsten tun würdest, und nenne Wünsche nach bestimmten Vorgesetzten oder Kollegen."],
   x:[{f:"Angesichts eines Problems werde ich …", a:[["Lächeln, bis es weggeht.","Präsenz"],["Dem Problem ein Problem machen.","Beharrlichkeit"]]},
      {f:"Wenn jemand, der mir wichtig ist, eine falsche Wahrheit glaubt, werde ich …", a:[["Ihm eine andere Möglichkeit anbieten.","Doppelzüngigkeit"],["Seine Lüge bis zum bitteren Ende stützen.","Empathie"]]},
      {f:"Ein Kollege wurde ermordet! Ich bin …", a:[["Der Mörder.","Initiative"],["Reif für eine Beförderung.","Subtilität"]]}]},
  {t:"zitat", x:"„Eine Krise ist nur eine Gala, die du noch nicht gegeben hast!“"}
 ]
};

/* ---- gemeinsame Standardtexte der Kompetenz-Seiten (wörtlich wie im Muster „PR“) ---- */
var KOMP_BONUS = "Wenn du in einem Einsatz jedes Gebilligte Verhalten mindestens einmal zeigst, erhältst du nach der Vergabe der Auszeichnungen einen Bonus von **{3} Belobigungen**.";
var KOMP_SELBST = ["Bitte beantworte die folgenden Fragen und erhöhe deine maximalen Qualitätssicherungen um **{3}** in den Qualitäten, die zu deinen Antworten gehören.", "Wenn du deinen ersten Einsatz beginnst, stehen dir insgesamt neun Qualitätssicherungen zur Verfügung. Am Ende jedes Einsatzes kehren die Qualitätssicherungen auf ihr aktuelles Maximum zurück.", "Gib deinem GM anschließend bitte eine kurze Beschreibung der Arbeit, die du in dieser Abteilung am liebsten tun würdest, und nenne Wünsche nach bestimmten Vorgesetzten oder Kollegen."];

/* ---- Einleitung zum Kompetenz-Teil (S. 98–99) ---- */
TA_TEXT["ark/vor/kompetenz"] = [
 "Deine Kompetenz ist der dritte und wichtigste der drei Bestandteile, aus denen sich dein ARC zusammensetzt. Sie beschreibt deine Rolle hier bei Triangle Agency, einschließlich deiner Aufgaben und Pflichten, wie du dich verhalten sollst und welche einzigartige Agency-Ausrüstung dir zur Verfügung steht.",
 {t:"liste", x:[
  "Der Name der Kompetenz in großen Buchstaben. Dem Rat der CEO-Abteilung folgend, haben wir begonnen, in mehreren Fällen Akronyme zu verwenden.",
  "Die Kategorie des ARC-Bestandteils, den du dir ansiehst, als hilfreicher und stilvoller Untertitel dargestellt. Bitte lies dieses Wort, auch wenn du sonst keines liest.",
  "Eine Illustration, mühevoll gezeichnet von den Agenten der Intern-Abteilung. Ihnen wurde kein Budget für rote Tinte bewilligt, und doch haben sie irgendwie Farbe hinzugefügt. Hervorragend!",
  "Ein genehmigter Satz zur Verwendung bei der Arbeit in dieser Kompetenz. Ein weiterer genehmigter Satz steht außerdem unten auf der rechten Seite.",
  "Eine kurze Beschreibung der Aufgaben dieser Kompetenz, die dir helfen soll herauszufinden, welche zu dir passt! Je nach der örtlichen Kultur deiner Zweigstelle darfst du möglicherweise die Abteilung wählen, für die du am besten geeignet bist, oder bekommst eine von deinen Vorgesetzten gewählte Abteilung zugewiesen, um dir eine wichtige Lektion zu erteilen."]},
 {t:"sp", x:[
  ["Deine **Oberste Direktive** weist dich an, wie du ein Verhalten vermeidest, das deiner Stellung unwürdig ist. Verstöße gegen deine Oberste Direktive führen zu Verweisen, die in deine Dauerakte eingetragen werden.",
   "**Gebilligtes Verhalten** sind Wege, wie wir vorbildliches Verhalten und Leistungen, die dich als Musterbeispiel in deinem Fachgebiet auszeichnen, direkt belohnen. Du willst die in deinem Gebilligten Verhalten beschriebenen Handlungen so oft wie möglich ausführen. Sowohl Belobigungen als auch Verweise werden von unserer Gravedigger-Abteilung überwacht und durchgesetzt. Sollte ein Termin mit ihnen in deinem Kalender auftauchen, empfehlen wir, deine Angaben im Lebensversicherungsportal von AgencyOS zu aktualisieren."],
  ["Die **Erst-Anforderung** ist ein besonderes Werkzeug, das wir dir zur Unterstützung deiner Arbeit im Außendienst zur Verfügung stellen. Sie steht nur zur Verfügung, wenn dir eine Kompetenz zugewiesen wurde, und ist ausschließlich für deine Verwendung genehmigt. Mehr über Anforderungen erfährst du nach deinem ersten Einsatz.",
   "Schließlich beginnt jeder Agent mit neun Qualitätssicherungen, die nach den Ergebnissen deiner **Selbsteinschätzung** zugewiesen werden. Beantworte diese Fragen ehrlich, um zu erfahren, welche Qualitäten du im Außendienst am wahrscheinlichsten einsetzt, und die Agency stellt dir die passenden Sicherungen bereit. Mehr über Qualitätssicherungen findest du auf {S.34}."]]}
];

/* ---- R&D (S. 102–103) ---- */
TA_TEXT["ark/kompetenz/forschung-entwicklung"] = {
 motto:"Gib den Leuten, was sie wollen.",
 l:["Die Agency braucht kreative, frische Köpfe, die die Zukunft der Welt entwerfen. R&D-Agenten sind bekannt für ihre Fähigkeit, zu erkennen, was jemand wirklich braucht, nicht nur, wonach er verlangt. Kreativität und Innovation treiben dich an, und von dir wird erwartet, dich mit nichts weniger als Perfektion zufriedenzugeben.",
  "R&D ist damit betraut, neue Produkte zum Verkauf zu entwickeln, aber auch die Geheimnisse des Universums zu lüften.",
  "Jedem Mitarbeiter wird in der Regel ein langfristiges Experiment zugewiesen, das er im Lauf seiner Laufbahn durchführt. Diese Experimente sind womöglich schwer zu verstehen, solange du mittendrin steckst, aber die Agency verfolgt die Daten sorgfältig und setzt daraus ein Bild davon zusammen, wie alles funktioniert.",
  "Melde dich bei R&D, wenn du weißt, dass Mittel keine Rechtfertigung brauchen und Wissen seine eigene Belohnung ist."],
 r:[
  {t:"direktive", h:"Weg mit dem Alten.", x:"**Jedes Mal, wenn du zweimal dasselbe tust,** erhältst du **1 Verweis**."},
  {t:"sp", eng:1, x:[
   [{t:"gebilligt", x:["Entdeckst, was jemand wirklich braucht.", "Das Rad neu erfindest.", "Jemandes Leben veränderst. Dauerhaft."], bonus:KOMP_BONUS}],
   [{t:"erst", h:"Quietscheente", x:"Das Quietschen dieses Badespielzeugs verheißt großartige Möglichkeiten. Einmal pro Einsatz darfst du dieser taschengroßen Ente ein Ergebnis beschreiben. Das Spielzeug quietscht zurück: Dein GM nennt dir die {3} Schritte, die du unternehmen musst, um dieses Ergebnis zu erreichen. Jedes Ergebnis wird möglich, so unwahrscheinlich es auch scheint. Fragst du die Quietscheente direkt nach Anomalien, schmilzt sie stattdessen zu einem nutzlosen Klumpen."}]]},
  {t:"selbst", b:KOMP_SELBST,
   x:[{f:"Wenn es beim ersten Mal nicht klappt …", a:[["Lass sie nie weinen sehen.","Professionalität"],["Versuch’s, versuch’s, versuch’s, versuch’s, versuch’s.","Beharrlichkeit"]]},
      {f:"Wenn ich eine Gleichung löse und die Schlussfolgerung unmöglich scheint, werde ich …", a:[["Mich daran erinnern, dass es normal ist, Fehler zu machen.","Empathie"],["Alle anderen Möglichkeiten ausschließen.","Dynamik"]]},
      {f:"Man hat mir etwas angehängt! Ich verteidige mich, indem ich …", a:[["Alle belastenden Beweise vernichte.","Subtilität"],["Einen wahrscheinlicheren Verdächtigen zum Sündenbock mache.","Aufmerksamkeit"]]}]},
  {t:"zitat", x:"„Ich habe Spaghettiwände aufstellen lassen; ich hatte das ganze Werfen satt.“"}
 ]
};

/* ---- Barista (S. 104–105) ---- */
TA_TEXT["ark/kompetenz/barista"] = {
 motto:"Bestellung fertig!",
 l:["Baristas wissen, dass der Tag mit einem Lächeln besser beginnt und dass Koffein ein reichlicher Ersatz ist, wenn Lächeln knapp sind. Sie bringen die Pumpe der Gesellschaft in Gang und sorgen dafür, dass Ideen, Energie und Blut rechtzeitig zur Eröffnungsglocke fließen.",
  "Nicht bloß auf die Arbeit hinter der Espressomaschine beschränkt: Baristas der Agency sind überall eingebettet, wo die Energiereserven am stärksten erschöpft sind – zum Beispiel als Cheerleader, Vertretungslehrer und Künstler für Streichvideos, um nur einige zu nennen.",
  "Bewirb dich als Barista, wenn du die Stimmung gern hoch, die Arbeit überfließend und den Schlaf für dann hältst, wenn du tot bist.",
  {t:"w4", h:"Spezialität des Hauses", b:["Wähle deine Lieblingssache zum Servieren, indem du auf der Liste unten würfelst oder dir selbst etwas ausdenkst."], x:["Espresso-Getränke","Kaltgebrühter Kaffee","Filterkaffee","Wasser"]}],
 r:[
  {t:"direktive", h:"Halte die Stimmung frisch.", x:"**Jedes Mal, wenn du jemandes Namen richtig aussprichst,** erhältst du **1 Verweis**."},
  {t:"sp", eng:1, x:[
   [{t:"gebilligt", x:["Jemandem das Gefühl gibst, willkommen zu sein.", "Dein Fachwissen zur Schau stellst.", "Das Blut in Wallung bringst."], bonus:KOMP_BONUS}],
   [{t:"erst", h:"Dreifaches Schnapsglas", x:"Der Barista besitzt ein besonderes Schnapsglas aus dem Vault-Café. Einmal pro Einsatz gilt: Wird dieses Schnapsglas beim Ausgießen von Espresso aus einer beliebigen Espressomaschine benutzt, kann der entstandene Shot einer Leiche in den Mund gegossen werden, um sie für zehn Minuten ins Leben zurückzuholen. Ob anomal oder gewöhnlich: Sie kann keinen Schaden in irgendeiner Höhe überleben."}]]},
  {t:"selbst", b:KOMP_SELBST,
   x:[{f:"Ein Kollege bittet mich wegen einer Trennung, seine Schicht zu übernehmen. Ich …", a:[["Übernehme seine Schicht.","Empathie"],["Bringe die beiden wieder zusammen.","Professionalität"]]},
      {f:"Jemandes Getränk wurde von einem Fremden gestohlen! Ich gehe damit um, indem ich …", a:[["So tue, als hätte ich es nicht bemerkt.","Doppelzüngigkeit"],["Von jedem Getränk im Voraus zwei mache.","Initiative"]]},
      {f:"Ein Kunde hat sich über meinen Service beschwert. Ich werde eher …", a:[["Dem Gebräu etwas hinzufügen.","Subtilität"],["Ihn dem Gebräu hinzufügen.","Dynamik"]]}]},
  {t:"zitat", x:"„Du kannst jederzeit mit mir reden, vor oder nach deinem Kaffee.“"}
 ]
};

/* ---- CEO (S. 106–107) ---- */
TA_TEXT["ark/kompetenz/ceo"] = {
 motto:"Es ist großartig, das Sagen zu haben.",
 l:["Die Welt ist ein unendlich komplexes System voller schwieriger Entscheidungen. Hier bei der Agency überlassen wir diese Entscheidungen den Leuten, die längst entschieden haben, wie sie in jeder Lage reagieren werden. Diese Agenten wählen eine Spur, erhalten Belohnungen und delegieren Konsequenzen. Sie werden diesen vergoldeten Pfad weitergehen, bis sie sterben.",
  "Die Agency setzt Agenten aus der CEO-Abteilung tendenziell dort ein, wo ihre starre und unbeugsame Natur als Fundament von Teams überall dienen kann. Auf Positionen, auf denen ein Rückzieher ruinös und Selbstreflexion katastrophal wäre. Oft musst du gar nicht erwägen, ob die Arbeit als CEO zu dir passt – du und die Agency, ihr wisst es längst.",
  {t:"w4", h:"Oder die Autobahn", b:["Wähle deine Führungsmacke, indem du auf der Liste unten würfelst oder dir selbst eine ausdenkst."], x:["Golf im Büro","Zigarren in Besprechungen","Theatralisches Weinen","Selbsthilfebücher zitieren"]}],
 r:[
  {t:"direktive", h:"Wahre die Hierarchie.", x:"**Jedes Mal, wenn du einen Befehl entgegennimmst,** erhältst du **1 Verweis**."},
  {t:"sp", eng:1, x:[
   [{t:"gebilligt", x:["Jemanden dazu bringst, zu tun, was du willst.", "Eine der feineren Seiten des Lebens genießt.", "Ein notwendiges Opfer bringst."], bonus:KOMP_BONUS}],
   [{t:"erst", h:"Spesenkonto", x:"Das Hauptbuch dieses riesigen Buchhalters soll jeden Kauf der Menschheitsgeschichte enthalten. Einmal pro Einsatz darfst du ins Buch schreiben, dass die Agency etwas Bestimmtes erworben hat, und es wird Eigentum der Agency. Du darfst es in diesem Einsatz benutzen, aber die Agency trifft künftig die Entscheidungen darüber."}]]},
  {t:"selbst", b:KOMP_SELBST,
   x:[{f:"Mein Führungsstil lässt sich am besten beschreiben als …", a:[["Praxisnah.","Dynamik"],["Mitarbeiter wie Familie behandeln.","Doppelzüngigkeit"]]},
      {f:"Mein Team inspiriere ich mit …", a:[["Einem Ölporträt.","Präsenz"],["Einer automatischen Abwesenheitsnotiz.","Professionalität"]]},
      {f:"Wenn Kürzungen unvermeidlich sind, entlasse ich den Mitarbeiter, der …", a:[["Am häufigsten zu spät kam.","Aufmerksamkeit"],["Heute zu spät kam.","Initiative"]]}]},
  {t:"zitat", x:"„Überstunden kann jeder machen; nur ich chippe das hier zum Par ein.“"}
 ]
};

/* ---- Intern (S. 108–109) ---- */
TA_TEXT["ark/kompetenz/praktikant"] = {
 motto:"Bezahlung wird überbewertet.",
 l:["Unbezahlte Praktikanten sind ein Kernstück jeder Organisation. Sie sind das Benzin für das Auto, das Holz für den Häcksler und die Nahrung für den Magen. Ohne Praktikanten und den unglaublichen Wert, den sie liefern, könnte kein Unternehmen funktionieren, und die gesamte moderne Gesellschaft würde über Nacht auseinanderfallen. Jemand muss diese höchst geschätzte und wichtige Last tragen, und wenn du etwas anderes forderst, ist das Ende von allem deine Schuld.",
  "In der Gesellschaft sind Interns der Agency so allgegenwärtig wie Dreck. Sie sind Lehrer, Büroangestellte, Fahrer, Kassierer und alle anderen Rollen, deren Funktion von denen, die davon profitieren, nicht gewürdigt wird. Indem sie unterschiedslos für alle arbeiten, die es verlangen, verstehen sie Organisationen besser als jeder andere. Bewirb dich als Intern, denn die Arbeit stapelt sich, während wir sprechen. Warum liest du das immer noch?"],
 r:[
  {t:"direktive", h:"Sie würden nicht fragen, wenn es nicht wichtig wäre.", x:"**Jedes Mal, wenn du eine Bitte ablehnst,** erhältst du **1 Verweis**."},
  {t:"sp", eng:1, x:[
   [{t:"gebilligt", x:["Selbstbewusst scheiterst.", "Dich zum Nutzen anderer blamierst.", "Etwas quietschend zum Stehen bringst."], bonus:KOMP_BONUS}],
   [{t:"erst", h:"Geerbtes Namensschild", x:"Alle Interns erhalten ein endloses Päckchen leerer Namensschilder. Einmal pro Einsatz darfst du den Namen von jemandem, dem du heute begegnet bist, auf ein Namensschild schreiben und es irgendwo an dir anbringen. Alle außer anderen Agenten behandeln dich so, als wärst du die genannte Person, solange du das Namensschild trägst."}]]},
  {t:"selbst", b:KOMP_SELBST,
   x:[{f:"Wenn ich neue Fähigkeiten erwerbe, bin ich ein …", a:[["Visueller Lerntyp.","Aufmerksamkeit"],["Lerntyp nach dem Schmerz-Konsequenz-Prinzip.","Beharrlichkeit"]]},
      {f:"Ich habe plötzlich ein großes Erbe gemacht. Ich werde ganz sicher …", a:[["Es zum gegenseitigen Nutzen in die Agency investieren.","Initiative"],["Es einer bedürftigen Zweigstelle der Agency spenden.","Empathie"]]},
      {f:"Mein direkter Vorgesetzter begeht heimlich Verbrechen! Ich …", a:[["Bearbeite seinen Kalender, um starke Alibis zu schaffen.","Subtilität"],["Stelle mich für seine Verbrechen.","Präsenz"]]}]},
  {t:"zitat", x:"„Hoppla!“"}
 ]
};

/* ---- Gravedigger (S. 110–111) ---- */
TA_TEXT["ark/kompetenz/totengraeber"] = {
 motto:"Einer muss es ja tun.",
 l:["Gravedigger sind die unbesungenen Helden der Nacht. Als Meister verborgener und vergessener Räume profitieren sie von der Neigung der Welt, vor Tabus und Unbehagen zurückzuschrecken. Um Dinge aus dem Blick zu schaffen, muss man selbst aus dem Blick gehen – und Gravedigger fühlen sich dort am wohlsten, wo andere nicht sind.",
  "Stets von Angesicht zu Angesicht mit Wirklichkeiten, die andere nicht ertragen wollen oder können, halten sie die Welt auf unscheinbare und oft unentdeckte Weise in Bewegung. Gravedigger findet man überall, vom Konferenzraum über den Ballsaal bis hin zu – ja – der Mülldeponie oder dem Mausoleum. Du bist ein erstklassiger Kandidat für Gravedigger, wenn du es hasst, wenn Drecksarbeit Unordnung macht."],
 r:[
  {t:"direktive", h:"Mach keine unschuldigen Hände schmutzig.", x:"**Jedes Mal, wenn du etwas Lebendes berührst,** erhältst du **1 Verweis**."},
  {t:"sp", eng:1, x:[
   [{t:"gebilligt", x:["Etwas Dreck ausgräbst.", "Eine Sauerei beseitigst.", "Ein Problem begräbst."], bonus:KOMP_BONUS}],
   [{t:"erst", h:"Draculas Sarg", x:"Der Sarg des Mannes höchstpersönlich liegt tief im Vault, begraben unter Erdschichten. Einmal pro Einsatz kannst du den Sarg exhumieren, um etwas hineinzulegen, das hineinpasst. Wird der Sarg der Erde zurückgegeben, hat das, was du hineingelegt hast, nie existiert. Alle Erinnerungen daran werden gelöscht, und jede Wirkung, die es auf die Welt hatte, wird anderen Ursachen zugeschrieben."}]]},
  {t:"selbst", b:KOMP_SELBST,
   x:[{f:"Wenn ich neue Mitarbeiter in meinem Fachgebiet einarbeite, betone ich …", a:[["Schaufeltechnik.","Aufmerksamkeit"],["Nachfrage schaffen.","Initiative"]]},
      {f:"Ich bin für die Quartalsberichte zuständig. Um bei den Aktionären einen guten Eindruck zu hinterlassen, …", a:[["Wiederhole ich die Präsentation, bis ich die gewünschte Reaktion bekomme.","Beharrlichkeit"],["Begrabe ich die schlechten Zahlen unter positiver Energie.","Präsenz"]]},
      {f:"Mit meinem überdurchschnittlichen Wissen um den unendlichen Schmerz der Menschheit gehe ich um, indem ich …", a:[["Den Duft von Tee und andere kleine Freuden genieße.","Subtilität"],["Ein ebenso überdurchschnittliches Wissen um die unendlichen Freuden der Menschheit entwickle.","Professionalität"]]}]},
  {t:"zitat", x:"„Ich habe Dinge gesehen, die du dir nicht vorstellen könntest. Weil du dir wahrscheinlich interessantere Dinge vorstellst.“"}
 ]
};

/* ---- Reception (S. 112–113) ---- */
TA_TEXT["ark/kompetenz/empfang"] = {
 motto:"Hier entlang, bitte.",
 l:["So wie jede Geschichte einen Anfang und jede Idee eine Empfängnis haben muss, müssen Agency-Gebäude brandschutzkonforme Ein- und Ausgänge haben. In einer Welt, die von Chaos, Ungewissheit und Zweifel erschüttert wird, sorgen Reception-Angestellte dafür, dass nichts – weder Menschen noch Ideen – ohne ordnungsgemäße Genehmigung hinein- oder hinausgelangt.",
  "Reception-Angestellte sind nicht bloß Torwächter. Sie sind oft auch Verteiler von Gerechtigkeit und Ausleger von Regeln, etwa als Orchesterdirigenten, Bibliothekare, Ausbilder beim Militär und Babysitter. Erwäge eine Tätigkeit bei Reception, wenn du die Welt lieber in Schwarz und Weiß hast, die Regeln in Stein gemeißelt und die Macht hinter deinem Schreibtisch."],
 r:[
  {t:"direktive", h:"Bleib stets wachsam.", x:"*Wähle eine:*\n**Jedes Mal, wenn du dich hinsetzt,** erhältst du **1 Verweis**.\n**Jedes Mal, wenn du eine Frage unbeantwortet lässt,** erhältst du **1 Verweis**."},
  {t:"sp", eng:1, x:[
   [{t:"gebilligt", x:["Jemanden verhörst.", "Eigentum beschlagnahmst.", "Eine Tür für immer verschließt."], bonus:KOMP_BONUS}],
   [{t:"erst", h:"Möbius-Kreislauf-Fernseher", x:"Ein endloser Raum im Vault, der ganz aus Fernsehbildschirmen besteht. Einmal pro Einsatz darfst du ein beliebiges mit dem Internet verbundenes Gerät benutzen, um auf einen Feed eines der Fernseher in diesem Raum zuzugreifen. Der Bildschirm zeigt dir bis zu dreißig Minuten Aufnahmen eines beliebigen Zeitpunkts von einem Ort, den du an diesem Tag besucht hast."}]]},
  {t:"selbst", b:KOMP_SELBST,
   x:[{f:"Ein Kollege, den ich seit vier Jahren kenne, hat sich meinen Namen nie gemerkt. Ich …", a:[["Stelle mich laut und deutlich vor, bis er es begreift.","Präsenz"],["Vergesse seinen.","Doppelzüngigkeit"]]},
      {f:"Jemand ist nicht der, der er vorgibt zu sein. Ich überprüfe seine Identität, indem ich …", a:[["Ihn verhöre.","Beharrlichkeit"],["Ihn verhöre.","Dynamik"]]},
      {f:"Ein Krimineller bricht in mein Gebäude ein, während es wegen eines Feuers evakuiert wird. Ich …", a:[["Sorge dafür, dass das Feuer nicht unterbrochen wird.","Professionalität"],["Erkenne ihn als Ersthelfer und lasse ihn durch.","Aufmerksamkeit"]]}]},
  {t:"zitat", x:"„Ich löse die Absperrseile, sobald du einen Termin vereinbarst.“"}
 ]
};

/* ---- Hotline (S. 114–115) ---- */
TA_TEXT["ark/kompetenz/hotline"] = {
 motto:"Die Stimme am anderen Ende.",
 l:["Wo viele Menschen bloß hören, hört die Hotline zu. Wenn der Rest der Welt verstummt ist, steht die Hotline immer zum Gespräch bereit. Sie sind der Leuchtturm, der jene in Sicherheit lotst, die das Pech haben, die tückischen Gewässer des Lebens allein zu befahren. Innerhalb der Agency nehmen Hotlines wichtige Kundenanrufe aus dieser und vielen anderen Welten entgegen.",
  "Anderswo in der Gesellschaft findet man Hotlines überall dort, wo es Redebedürftige gibt. Sie sind Berater, Büroangestellte, Moderatoren von Online-Communitys und mehr. Bewirb dich als Hotline, wenn du in das Signal starren und dem Rauschen helfen kannst, den Weg nach Hause zu finden."],
 r:[
  {t:"direktive", h:"Sag niemals „leider“.", x:"**Jedes Mal, wenn du schlechte Nachrichten überbringst,** erhältst du **1 Verweis**."},
  {t:"sp", eng:1, x:[
   [{t:"gebilligt", x:["Jemandem hilfst, sich zu entlasten.", "Die Schuld für etwas auf dich nimmst, was du nicht getan hast.", "Jemanden mit einem unerwarteten Schicksal verbindest."], bonus:KOMP_BONUS}],
   [{t:"erst", h:"Warteschleifenmusik, Vol. 1", x:"Du besitzt ein leistungsstarkes Kassettenabspielgerät mit eingebautem Lautsprecher und eine Kassette mit belangloser, fröhlicher Musik. Einmal pro Einsatz kannst du auf Wiedergabe drücken, um dich und alle Verbündeten in deiner Nähe sofort für bis zu eine Stunde in einen vollkommen sicheren Warteraum zu versetzen. Wenn du zurückkehrst, können alle Betroffenen sich an beliebiger Stelle in dem Raum wiederfinden, den sie verlassen haben, und in der Welt um dich herum ist keine Zeit vergangen."}]]},
  {t:"selbst", b:KOMP_SELBST,
   x:[{f:"Ein Kunde hat ein Problem, das ich in meinem eigenen Leben nicht lösen konnte. Ich …", a:[["Teile die gescheiterten Ansätze, um ihm Zeit zu sparen.","Empathie"],["Versichere ihm, dass wir gemeinsam eine Lösung finden.","Doppelzüngigkeit"]]},
      {f:"Ein Kunde hat ein defektes Produkt und eine überzeugende Geschichte. Ich …", a:[["Ziehe alle nötigen Fäden, damit er seine Erstattung bekommt.","Beharrlichkeit"],["Stelle klar, dass alle Verkäufe endgültig sind.","Dynamik"]]},
      {f:"Das Gespräch eines Kunden wurde getrennt. Ich …", a:[["Rufe ihn zurück und reiche einen Fehlerbericht bei der IT ein.","Professionalität"],["Führe das Gespräch ohne ihn zu Ende.","Präsenz"]]}]},
  {t:"zitat", x:"„Ihr Anruf ist uns wichtig. Ihre Zeit ist uns wichtig. Alles, was Sie tun, denken und sind, ist uns wichtig.“"}
 ]
};

/* ---- Clown (S. 116–117) ---- */
TA_TEXT["ark/kompetenz/clown"] = {
 motto:"Tröt.",
 l:["Clowns sind die Engel der Barmherzigkeit der Agency. Sie spenden der Welt die beste Medizin, das Lachen, für ihre Kränksten und Bedürftigsten. Sie verstehen, dass die Last des Lebens nur jene erdrückt, die sich selbst zwingen, sie zu tragen, und dass der sicherste Weg in die Verzweiflung darin besteht, zu vergessen, dass man es auch einfach lassen könnte.",
  "Die Gesellschaft ist voller unserer Clowns. Sie arbeiten vor aller Augen und nutzen oft ihr hohes Profil und ihre größere Sichtbarkeit als Werkzeug, um die Massen davon abzulenken, von Sorge, Angst und Zweifel verzehrt zu werden – und erschaffen Anomalien, die diese Gefühle spiegeln. Häufig werden sie als Fernsehpersönlichkeiten, Hausfrauen und Hausmänner und Politiker eingesetzt. Wenn du schwierige Gespräche hasst und findest, dass tief hängende Früchte am süßesten schmecken, ist die Arbeit als Clown vielleicht deine Berufung.",
  {t:"w4", h:"Sieh genau hin!", b:["Wähle dein verborgenes Talent, indem du auf der Liste unten würfelst oder dir selbst eines ausdenkst."], x:["Jonglieren","Spektakuläre Stürze","Feuerschlucken","Pantomime"]}],
 r:[
  {t:"direktive", h:"Halte sie am Lachen.", x:"**Jedes Mal, wenn du über Gefühle sprichst,** erhältst du **1 Verweis**."},
  {t:"sp", eng:1, x:[
   [{t:"gebilligt", x:["Eine Show hinlegst.", "Eine peinliche Wahrheit aufdeckst.", "Ein Lächeln verlangst."], bonus:KOMP_BONUS}],
   [{t:"erst", h:"Die Narrenkappe", x:"Einmal pro Einsatz darfst du die Narrenkappe aufsetzen, die alle Clowns der Agency erhalten. Eine Minute lang löst alles, was du tust, Lachen und Vergnügen aus, ganz gleich, was du tust. Nach dieser Minute erinnern sich gewöhnliche Zuschauer liebevoll an alle deine Handlungen. Das schützt dich nicht vor späteren Zuschauern der Folgen."}]]},
  {t:"selbst", b:KOMP_SELBST,
   x:[{f:"Wenn ich einen Dieb dabei erwische, wie er mit meinen Luftballontieren abhaut, …", a:[["Bringe ich ihm bei, selbst welche zu machen.","Empathie"],["Zeige ich ihm, dass Luftballons nicht das Einzige sind, was ich zu ungeahnten Formen verknoten kann.","Dynamik"]]},
      {f:"In mein Auto passen …", a:[["Eine normale Anzahl Menschen.","Doppelzüngigkeit"],["Alle, die eine Mitfahrgelegenheit brauchen.","Beharrlichkeit"]]},
      {f:"Vollende diesen Satz: „Aber Doktor …“", a:[["*Ich* bin der Doktor!","Präsenz"],["Ich habe gesehen, was mit Pagliacci geschah. Das Chaos. Das Gemetzel. Die Kriege, die folgten. Ich wüsste eine wirksamere ärztliche Verschreibung zu schätzen.","Professionalität"]]}]},
  {t:"zitat", x:"„Ich verstehe, dass du gerade viel durchmachst, aber ich muss dich bitten, dir einen Moment zu nehmen und zu bedenken: Tröt.“"}
 ]
};

/* ---- Fragebogen zum Arbeitsantritt (S. 118–121) ---- */
TA_TEXT["ark/fragebogen/fragebogen"] = [
 "Deine Antworten im folgenden Fragebogen helfen deinem Außenteam, dich besser zu verstehen, und stellen sicher, dass du dich selbst verstehst! Beantworte die folgenden Fragen in jeder Ausführlichkeit, mit der du dich wohlfühlst. Diese Angaben werden allen anderen Mitgliedern deines Außenteams in einer Akte zur Verfügung gestellt, damit du schon bei eurem ersten Einsatz gemeinsam weißt, wem du dein Leben anvertraust.",
 {t:"sp", x:[
  [{t:"h3", x:"Wie bist du mit deiner Anomalie in Kontakt gekommen?"}, "Zum Beispiel:",
   {t:"liste", x:["Frühere Beziehung zu einer Anomalie, die in der Nähe auftauchte", "Anomalie entstand aus *deinen* Gedanken", "Versehentlich in einen Einsatz der Agency verwickelt", "Vom **T**riangle-**A**cademy-**P**rogramm für den Außendienst **ge-TAP-t**"]},
   {t:"h3", x:"Wie hat die Agency dich gefunden?"}, "Zum Beispiel:",
   {t:"liste", x:["Durch den Einsatz deiner Anomalie-Kräfte in der Öffentlichkeit", "Versehentlich in einen Einsatz der Agency verwickelt", "Du hast uns gefunden"]},
   {t:"h3", x:"Wie hoch ist dein Jahresgehalt?"}, "Zum Beispiel:",
   {t:"liste", x:["0 $ (danke!)", "100 $", "125.000 $"]},
   {t:"h3", x:"Wie siehst du aus?"},
   "Beschreibe dich so, dass dich jemand in einer belebten Menschenmenge erkennen könnte, falls die Fotoaufzeichnungen des Büros wieder beschädigt werden."],
  [{t:"h3", x:"Haben deine Kräfte eine einzigartige visuelle Erscheinung?"}, "Zum Beispiel:",
   {t:"liste", x:["Growth-Resonante erschaffen Gliedmaßen aus flüssigem Metall statt aus Fleisch", "Whisper-Resonante erzeugen bei anderen synästhetische Effekte, wenn sie sprechen", "Absence-Resonante nutzen ihre Kräfte, indem sie Dinge verbrennen, um Rauch zu erzeugen"]},
   {t:"h3", x:"Wie trinkst du deinen Kaffee?"}, "Zum Beispiel:",
   {t:"liste", x:["Schwarz", "Hafermilch-Lattes", "Spiegelei, einmal gewendet", "Nichts Stärkeres als Tee"]},
   {t:"h3", x:"Wer von deinen Beziehungen ist dein Hauptkontakt, und warum?"},
   "Wir kontaktieren ihn, um **Leistung {3}** deiner Lebensversicherung zu erbringen und seine Meinung über deinen Charakter einzuholen.",
   {t:"h3", x:"Was bringst du in einem kollaborativen Arbeitsumfeld ein?"},
   "Ob es eine gute Einstellung oder eine verlässliche Arbeitsmoral ist: Lass deine Kollegen wissen, was sie erwarten können, wenn du ihnen den Rücken freihältst."]]},
 {t:"h3", x:"Bitte führe abschließend alle bisherigen Berufserfahrungen und den Grad deiner Vertrautheit mit Adobe, Excel und der Google-Suite auf."},
 {t:"warn", h:"WARTE!", z:"symbol-halt-hand", b:[{t:"lead", x:"Wir empfehlen Außendienst-Agenten, nicht über diesen Punkt hinauszugehen, bevor sie ihren ersten Einsatz hinter sich haben."}, "Du weißt nun alles, was du wissen musst, um einen Einsatz von Triangle Agency <durchzuführen/zu spielen>. **Wenn du ein Außendienst-Agent bist,** kannst du am Ende deines ersten Einsatzes zu diesem Punkt zurückkehren und die letzten Seiten des Handbuchs für Außendienst lesen.", "Es ist dir nicht verboten, den Rest dieses Abschnitts weiterzulesen, aber nichts davon ist jetzt relevant und könnte überwältigend wirken, bevor du das Spiel gespielt hast.", "**Wenn du der General Manager des Außenteams bist,** empfehlen wir, bis zum Ende des Werkzeugs der Geschäftsleitung weiterzulesen."]}
];
