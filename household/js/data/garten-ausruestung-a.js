/* Garten › Regeln › Ausrüstung, Teil A: Münzen & Barter, Waren, Waffen, Zubehör (Vol. II S.95–107) */
(function(){
var K = "garten/regeln/ausruestung", L = (HH_TEXT[K] = HH_TEXT[K] || []);
function bild(n, w){ return {t: "bild", s: "garten-" + n, w: w}; }
function B(h, b){ return {t: "box", h: h, b: b}; }
function W(h, text, wartung){ return B(h, wartung ? [text, "**Wartungsintensiv:** " + wartung] : [text]); }
function Z(h, text){ return {t: "box", h: h, b: [text]}; }

L.push(
{id: "coins", t: "Münzen & Barter", p: 96, b: [
 bild("s096-iiii-coins-barter", 250),
 "Im Outhold nimmt nicht jeder Kristalle des House an, und viele ziehen Tausch und Barter vor. Besonders nahe der Porch und der Mother Road nehmen viele Händler und Gastwirte jede Zahlungsform an, denn sie wissen, dass sie bald mit anderen Lockins zu tun haben werden. In wichtigen Städten an den großen Reiserouten, etwa dem schwankenden Twigbridge oder dem schönen Frogstone am Rand des Fountain, ist das Ausgeben von Kristallen einfacher, auch wenn die Preise stets überhöht sind.",
 "Ganz anders ist es, wenn du dich weiter von großen Städten entfernst, denn echte Outsider rümpfen die Nase über kaiserliche Währung und schätzen Vorräte, Kleidung, Werkzeug und Felle weit mehr als den kalten Kristall von Astraviya.",
 "In der Citadel ändert sich die Lage mit jeder Jahreszeit. Im Frühling und Sommer nehmen Gnome-Händler gern Zahlungen in Household-Währung an, da sie sie an andere Reisende weitergeben oder damit bei den Garnisonen der Great Imperial Army Waren eintauschen können, die aus dem House exportiert wurden. Doch je tiefer der Herbst wird, und besonders im kalten, harten Winter, schätzen Händler in der Citadel Geld immer weniger, weil sie wissen, dass es vor dem nächsten Frühling kaum zu bewegen ist. Dann bleibt nur Barter, und er ist unter Gnomes ohnehin die bevorzugte Handelsform.",
 "Im Shogunate of the Silver Blade gibt es eine offizielle Landeswährung aus besonderen Münzen mit Loch, genannt **Sen**. Sen verschiedener Größe kursieren in den Präfekturen des Shogunate, jeweils mit Blumen oder Insekten verziert. Eine einzelne Münze kann je nach Wert des Materials zwischen 1 und 100 Sen wert sein, doch grundsätzlich ist ein einzelner Kristall so viel wert wie 1000 Sen.",
 "Der Astraviya-Vertrag erlaubt der Horde und damit dem Shogunate keine andere Währung als den kaiserlichen Kristall, doch angesichts der festen Haltung von Jorōgumo ließ die Krone die Sache gnädig auf sich beruhen und erklärte Sen zu „Kristallen des Shogunate“, was bei Händlern des House einige Augenbrauen hochgehen ließ. Wie auch immer der offizielle Stand ist: Shinigami in den Rushes nehmen nur Sen und Barter an, und im Front Yard kennen nur wenige Littlings diese Währung, geschweige denn nehmen sie an.",
 {t: "box", h: "Der Wert von Waren", b: ["Beim Tauschhandel kannst du die Preistabellen als Anhaltspunkt nutzen, um den Wert von Waren und Dienstleistungen zu vergleichen. Meist ist Barter ein fairer Handel, auch wenn eine der beiden Seiten gewöhnlich etwas weniger zufrieden ist.", "Bedenke, dass äußere Umstände den Wert eines Tauschguts verändern können, etwa fehlendes Angebot, dein Aufenthaltsort oder die Jahreszeit. Reiserationen sind im Sommer viel günstiger als im Winter, und der Wert von Wasser schießt bei Dürre in die Höhe und fällt nach einem Wolkenbruch wieder."]},
 {t: "h", x: "Deine Münzen"},
 {t: "karten", x: [
  B("Aus dem House oder den Brambles", ["Deine Münzen stehen für die Household-Kristalle in deinen Taschen. Du kannst sie überall im House und in den meisten Städten des Front Yard ausgeben, außer in einigen kleinen Dörfern in den Barrens und Woodlands, wo Barter weiter bevorzugt wird. Meist nehmen die Leute der Citadel diese Münzen an, sofern nicht Winter ist und die Vorräte nicht knapp werden."]),
  B("Aus der Citadel oder dem Seelie Court", ["Deine Münzen stehen nicht für Geld, sondern für wertvolle Gegenstände, die du überall im Front Yard eintauschen kannst. Diese Outsider-Münzen sind im House nichts wert."]),
  B("Aus dem Shogunate of the Silver Blade", ["Deine Münzen stehen für Sen, die einzige Währung der Rushes. Niemand im House oder im Front Yard nimmt deine Münzen an, außer einigen fahrenden Händlern."])]}
]},

{id: "goods", t: "Waren & Dienstleistungen", p: 97, b: [
 "Hier findest du eine Tabelle mit Waren und Dienstleistungen, die dir hilft, die Lebenshaltungskosten im Outhold einzuschätzen. Der Preis in Münzen ist auch ein guter Maßstab für den Barter-Wert eines Gegenstands.",
 {t: "tbl", head: ["Name", "Beschreibung", "Preis"], rows: [
  ["Köder", "Hilfreich, um wilde Tiere anzulocken oder fernzuhalten.", "4"],
  ["Boot", "Ein kleines Wasserfahrzeug.", "6-9"],
  ["Feldflasche", "Fasst genug Wasser für einen Littling für zwei Tage.", "1"],
  ["Getrocknete Pilze", "Tauschware im ganzen Garten.", "1-9"],
  ["Honig", "Verfeinerte Delikatesse drinnen wie draußen.", "5"],
  ["Unterkunft", "Zimmer in einem Haus oder Gasthof für einen Littling.", "1-5"],
  ["Karte", "Zeigt die Geografie eines kleinen Teils des Gartens.", "2-8"],
  ["Maske", "Verbirgt dein Gesicht.", "1-3"],
  ["Natürliche Ressourcen", "Zutaten für eine Natürliche Mixtur.", "1-3"],
  ["Spitzhacke", "Hilfreich, um Stein zu brechen und Holz zu schlagen.", "3"],
  ["Proviant", "Lunchpaket für die ganze Gruppe.", "2"],
  ["Schaufel", "Hilfreich zum Graben.", "3"],
  ["Sonnenschutz", "Ein Hut oder Schirm als Schutz vor der Sonne.", "2-5"],
  ["Spielzeug", "Zur Freude kleinerer Littlings.", "1-4"],
  ["Warme Mahlzeit", "Abendessen auswärts für einen Littling.", "1-4"],
  ["Wasserkrug", "Fasst viel Wasser oder ein einweichendes Scimithorn.", "3"],
  ["Winterkleidung", "Schützt vor Kälte und Frost.", "2"]]},
 "Auf den folgenden Seiten findest du außerdem:",
 {t: "ul", x: ["**Waffen des Gartens:** Eine Liste von Waffen, die im Garten während des Langen Winters verbreitet waren, sowie die neuen Waffenmerkmale, die sie kennzeichnen.", "**Natürliche Mixturen:** Im Garten wächst eine Unzahl Pflanzen mit wundersamen Eigenschaften, und kundige Littlings wissen, wie man daraus erstaunliche Heilmittel und außergewöhnliche Fähigkeiten gewinnt.", "**Reittiere:** Wenn du den Long Hallway für lang hieltest, warte, bis du die Weite der Barrens siehst oder die Länge des Green End bis zu den Rushes durchqueren musst. Für diese langen, zehrenden Reisen nutzen Littlings gut ausgebildete Mäuse, Käfer und Frösche, die wie der Wind rennen."]}
]},

{id: "weapons", t: "Waffen", p: 98, b: [
 bild("s098-099-iiii-weapons-ganz", 280),
 "Im Langen Winter fand man im Outhold Waffen aller Art, von den traditionellsten Klingen wie der scharfen Orikatana der Shinigami bis zu modernen Erfindungen wie der Pepperbox. Hier findest du einige neue Waffenmerkmale, die diese Kriegsgeräte am besten beschreiben.",
 {t: "karten", x: [
  B("Wartungsintensiv", ["Die Waffe ist äußerst empfindlich und muss sorgfältig behandelt werden, um Fehlfunktionen oder Brüche zu vermeiden. Jede wartungsintensive Waffe braucht eine eigene Art der Pflege. Mehr dazu in der Beschreibung der Waffe."]),
  B("Mahlend", ["Die Waffe kann dank einer Handkurbel nachgeladen werden, die Pfeffer, Salz oder andere Gewürze mahlt. Sie kann 6-mal schießen, bevor nachgeladen werden muss. Das Nachladen kostet eine Runde oder einen zusätzlichen kritischen Erfolg."]),
  B("Ablenkend", ["Du erhältst +1, um Pfeilen und Geschossen auszuweichen, solange du weißt, dass sie kommen. Außerdem kannst du einmal pro Szene, wenn du Ziel eines Fernangriffs bist, mit Geschick reagieren statt mit einer anderen Fertigkeit. Um eine ablenkende Waffe richtig zu nutzen, braucht ein Littling mindestens 3 Punkte in Geschick. Littlings, die das nicht erfüllen, ignorieren dieses Merkmal."]),
  B("Leichtzug", ["Die Waffe muss nicht nachgeladen werden. Solange du Pfeile hast, kannst du sie in einer Runde auflegen und abschießen."]),
  B("Nicht tödlich", ["Die Waffe verursacht nicht-tödlichen Schaden. Riesige und kolossale Geschöpfe sind gegen den Schaden dieser Waffe immun."]),
  B("Perfekt", ["Mit einer perfekten Waffe erhältst du +1 auf Angriffe im Nahkampf. Nur Waffen, die durch den Sieg über eine riesige oder kolossale Bestie erlangt wurden, können dieses Merkmal haben."]),
  B("Dreilauf", ["Die Waffe kann 3-mal schießen, bevor nachgeladen werden muss. Sind alle Läufe geladen, kannst du sie auf einmal leeren, um +1 auf einen Schusswurf zu erhalten."])]},
 {t: "h", x: "Nahkampfwaffen"},
 bild("s100-iiii-weapons", 230),
 {t: "tbl", head: ["Name", "Eigenschaften", "Preis"], rows: [
  ["Katana", "Zweihandwaffe. Schwer, scharf.", "3"],
  ["Kamakiri-Katana", "Zweihandwaffe. Schwer, scharf, breit.", "4"],
  ["Naginata", "Zweihandwaffe. Schwer, spitz, mit Reichweite.", "4"],
  ["Knochenklinge", "Scharf.", "2"],
  ["Knochensicheln", "Zweihandwaffe. Ablenkend, scharf.", "4"],
  ["Knochenspeer", "Zweihandwaffe. Spitz, mit Reichweite.", "2"],
  ["Steinaxt", "Schwer.", "1"],
  ["Dornenpeitsche", "Spitz, mit Reichweite. Hilfreich beim Klettern.", "3"],
  ["Wakizashi", "Kleine Waffe. Scharf.", "2"],
  ["Kunai", "Kleine Waffe. Spitz, Wurf.", "2"]]},
 {t: "karten", x: [
  W("Katana", "Aus einem Käferbein geschmiedet und zu tödlicher Schärfe geschliffen, ist das Katana die Waffe, die die Shinigami und das Shogunate of the Silver Blade am besten verkörpert. Neben seiner Wirksamkeit im Kampf hat diese Klinge einen starken Symbolwert, und kein Samurai oder Adliger des Shogunate würde sich ohne das Familien-Katana an der Seite in der Öffentlichkeit zeigen."),
  W("Kamakiri-Katana", "Das Kamakiri-Katana, auch Gottesanbeterinnen-Katana genannt, ist ein Schwert mit schwerer, breiter, säbelartig gebogener Klinge, gefertigt aus der Sichel einer Gottesanbeterin. Es wird oft von den imposantesten und kräftigsten Shinigami bevorzugt, die zum Schutz ihrer Klingen eine Scheide aus Spinnenborsten nutzen."),
  W("Naginata", "Die Stangenwaffen-Version des Kamakiri-Katana besteht aus einer langen, gebogenen Klinge auf einem stabilen Holzschaft. Bei Wächtern und Kriegern des Backyard beliebt, erlaubt sie, aus der Distanz zu schneiden, ohne Beweglichkeit einzubüßen."),
  W("Knochenklinge", "Meist von Fae und Gnomes geführt, wird diese gebogene Klinge aus leichten Vogelknochen gefertigt. Aus den Überresten eines einzigen Vogels lassen sich mehrere Waffen herstellen, ideal für alle, die sich edlere Waffen nicht leisten können. Im House eine Knochenklinge zu verkaufen oder zu erwerben ist praktisch unmöglich, da die meisten Lockins sie für primitive, fast wertlose Waffen halten, und selbst Sammler hängen sich lieber elegante Knochensicheln an die Wand."),
  W("Knochensicheln", "Wahres Symbol der Furies: ein Paar scharf gekrümmter Schwerter, die nur die geduldigsten Handwerker des Seelie Court oder der Citadel fertigen können. Ihre extreme Form erlaubt Fae, die Sicheln auf dem Rücken zu tragen, ohne den Flug zu behindern, weshalb sie ideal für viele Offiziere dieses Volkes sind."),
  W("Knochenspeer", "Diese alte Waffe der Seelie besteht aus einem Holzschaft mit scharfer Knochenspitze am einen Ende. Geeignet für Boden- wie Luftkampf, kann er für den Nahkampf zerbrochen werden, was ihn in den Händen erfahrener Krieger vielseitig macht. Zerbrichst du einen Knochenspeer, wird die Spitze automatisch zur Knochenklinge, der Rest des Schafts taugt nur noch als Brennholz."),
  W("Steinaxt", "Ursprünglich ein Werkzeug, um sich durch Brombeerranken zu schlagen und Insekten zu jagen, wurde sie zur Waffe der Redcaps der Citadel. Im Kampf können sogar neue Steinäxte aus den verkalkten Körpern der Gefallenen gefertigt werden. Der Holzgriff trägt einen einschneidigen, flachen Steinkopf. Roh, aber wirksam."),
  W("Dornenpeitsche", "Oft quer über den Körper aufgerollt getragen, entstand die Dornenpeitsche als Werkzeug zum Beerensammeln und Mäusefangen. Wer sie geschickt und vielseitig führt, wie die Thornguard, kann sie auch als Enterhaken nutzen oder einen Gegner schmerzhaft fesseln."),
  W("Wakizashi", "Deutlich kürzere Version eines Shinigami-Katana. Wird von Samurai oft zusätzlich zum gewöhnlichen Katana getragen."),
  W("Kunai", "Kleines Wurfmesser aus den Beinen, Mandibeln oder Hörnern eines gepanzerten Insekts, bekannt als die Waffe der Ninjas aus den Rushes.")]},
 {t: "box", h: "Wusstest du? Das Teufelskatana", b: ["Eine der tödlichsten und wundersamsten Waffen des Outhold ist das Teufelskatana, ein perfektes Kamakiri-Katana aus der tödlichen Sichel einer Devil's Flower Mantis. Jeder Littling, der eine solch erhabene Waffe führt, würde in den Rushes gewiss als großer Krieger gefeiert."]},
 {t: "box", h: "Wusstest du? Waffen im Garten", b: ["Im Garten gibt es zahlreiche Waffen, die ebenso funktional sind wie die im House, aber ganz anders aussehen. Outsider nutzen etwa kleine Dornen statt Nailtips und führen lieber geschärfte Käferhörner statt Halbscheren. Manche führen sogar Halbscheren, die so robust und scharf sind wie eine Großschere!"]},
 {t: "h", x: "Legendäre Waffen"},
 "Im Garten leben kolossale Geschöpfe, die so groß sind wie zehn oder hundert Littlings, und ihr bloßer Anblick kann selbst den tapfersten Helden des House weiche Knie machen. Es gibt Giftschlangen mit unendlich gewundenen Schlingen und bunte Gottesanbeterinnen, geboren aus furchtbaren Frühlingsalbträumen. Jeder Littling, der eine solche Kreatur besiegen und ihren sterbenden Versuchungen widerstehen kann, könnte sie zu Waffen oder Zubehör verarbeiten, die legendärer Taten würdig sind. Mehr zu diesen Artefakten findest du im Kapitel „Colossi“ in Anhang I „Gegner des Gartens“.",
 {t: "h", x: "Fernkampfwaffen"},
 bild("s102-iiii-weapons", 230),
 {t: "tbl", head: ["Name", "Eigenschaften", "Preis"], rows: [
  ["Blunderkey", "Zweihandwaffe. Zweihändige Feuerwaffe.", "2"],
  ["Boomstone", "Zweihandwaffe. Schwer. Zweihändige Feuerwaffe.", "3"],
  ["Crosskeysket", "Zweihandwaffe. Scharf. Zweihändige Fernkampfwaffe. +1 auf Schüsse.", "5"],
  ["Schweres Keysket", "Zweihandwaffe. Schwer, scharf. Zweihändige Feuerwaffe. Dreilauf. +1 auf Schüsse.", "8"],
  ["Langes Keysket", "Zweihandwaffe. Mit Reichweite. Zweihändige Feuerwaffe. Präzise, Dreilauf. +1 auf Schüsse.", "8"],
  ["Kurzbogen", "Zweihändige Fernkampfwaffe. Leichtzug. Schießt nur auf kurze Distanz.", "1"],
  ["Langbogen", "Zweihändige Fernkampfwaffe. Leichtzug. Schießt nur in Reichweite.", "2"],
  ["Steinschleuder", "Zweihändige Fernkampfwaffe. Nicht tödlich, Leichtzug. Schießt nur auf kurze Distanz.", "1"],
  ["Pepperbox", "Feuerwaffe. Mahlend, wartungsintensiv.", "4"],
  ["Saltbox", "Nicht tödliche Feuerwaffe. Mahlend, wartungsintensiv.", "4"],
  ["Kriegsgewehr", "Zweihändige Feuerwaffe. Wartungsintensiv, Dreilauf. +1 auf Schüsse.", "7"]]},
 {t: "karten", x: [
  W("Blunderkey", "Zum Schutz von Gehöften vor Insekten und Banditen erdacht, vereint der Blunderkey eine große Pistole mit einem Kriegsschlüssel. Weniger genau als ein Gewehr und weniger robust als ein Schlüssel, ist er dennoch eine verlässliche Waffe für alle, die unbedingten Schutz brauchen. Manche gehen so weit, den Blunderkey ein kleines Keysket zu nennen, doch selbst Jäger, die hitzig über die Überlegenheit des langen oder schweren Keysket streiten, sind sich einig, dass dem nicht so ist."),
  W("Boomstone", "Die Bramble Rebels haben einen Weg gefunden, wirksame, billige Waffen gegen den Druck des Sheriffs von Nettlegham herzustellen. Diese Boomstones sind nichts als abgesägte Flinten verschiedener Art, auf die sie die extrem harte Klinge einer Steinaxt montieren. Die Boomstone ist so solide und verlässlich, dass Soldaten sie auch für ihre Manöver nutzen können."),
  W("Crosskeysket", "Als wäre der Streit zwischen Anhängern des schweren und des langen Keysket nicht genug, erfand Alain Le Fusil, Sohn des bekannteren Armand, eine Waffe, die so leise schießt wie eine Armbrust und so hart trifft wie ein Schlüssel, und ließ sie unter dem brisanten Namen Crosskeysket patentieren. Trotz ihres seltsamen Aussehens gewinnt die Waffe rasch an Beliebtheit und ist die Waffe der Wahl der Soldaten des Sheriffs von Nettlegham und der Kaiserjäger auf dem Weg zum Fence."),
  W("Bogen", "Eine einfache, funktionale Waffe von Gnome- und Fae-Kriegern. Leicht aus behelfsmäßigen Materialien herzustellen, ist sie die perfekte Alternative für alle, die sich nicht auf Schwarzpulver verlassen können. Kurzbögen sind leichter zu transportieren, Langbögen haben mehr Reichweite."),
  W("Steinschleuder", "Billig und leicht zu führen, ist die Steinschleuder eine uralte Waffe, die nie aus der Mode kommt."),
  W("Pepperbox", "Die Pepperbox ist eine experimentelle Pistole aus sechs rotierenden Läufen über einem hölzernen Vorratsbehälter. Die eingebaute Mühle zermahlt eine frische Mischung aus Pfeffer und Schießpulver und lädt damit alle sechs Läufe. Nach den sechs pfeffrigen Schüssen muss der Schütze frische Munition mahlen, dann ist er wieder bereit. Die Pepperbox ist die Lieblingswaffe von Kopfgeldjägern, die keine Gefangenen machen, weshalb sie „Totmannwaffe“ heißt.", "Wie alle Feuerwaffen wird die Pepperbox unter Wasser unbrauchbar. Außerdem ist die gemahlene Munition äußerst feuchtigkeitsempfindlich. Wird die Pistole einen ganzen Tag nicht benutzt oder Feuchtigkeit ausgesetzt, droht sie zu klemmen."),
  W("Saltbox", "Die Saltbox gleicht der Pepperbox in jeder Hinsicht, wird aber mit weißem Salz geladen, das in den Wunden des Ziels brennt. Kopfgeldjäger, denen das Leben ihrer Ziele wichtig ist, wählen oft diese Waffe, die sich den Beinamen „Lebendwaffe“ verdient hat.", "Siehe Pepperbox."),
  W("Kriegsgewehr", "Nach dem Fall von Faeriyev hat das Household erhebliche Mittel für die Entwicklung neuer Waffen bereitgestellt, was zu vielen Fortschritten in der Kriegführung führte. Namentlich die Ingenieure Hörbrille und Knöchel aus Glasburg schufen in Rekordzeit ein massives Kriegsgewehr mit drei Präzisionsläufen. Diese Gewehre waren für die Outhold-Legionen der Great Imperial Army bestimmt, doch mehrere Exemplare wurden gestohlen, geschmuggelt und nachgebaut und fanden so ihren Weg in den Garten.", "Um richtig zu funktionieren, müssen Kriegsgewehre kerzengerade sein. Fällt die Waffe aus der Höhe oder wird sie mit großer Kraft getroffen, können die Läufe reißen und brauchen einen geschickten Handwerker zur Reparatur. Mit einem gerissenen Gewehr zu schießen gibt −2 auf den Wurf."),
  W("Moderne Keyskets", "Jahre vergehen, aber manche Dinge ändern sich nie, wie das zeitlose Design des Keysket und die endlose Fehde zwischen kräftigen Jägern, die die Überlegenheit des schweren Keysket preisen, und bemerkenswerten Scharfschützen, die die Genauigkeit des langen Keysket besingen. Doch es tut sich etwas: Man kann nun endlich dreiläufige Keyskets finden und bauen, lange wie schwere. Wenn sich alle auf eines einigen können, dann dass Schießen viel besser ist als Nachladen.")]},
 {t: "box", h: "Wusstest du? Doppelläufige Waffen", b: ["Im Langen Winter sind doppelläufige Waffen viel verbreiteter geworden. Sie sind jetzt für nur 1 Münze mehr zu haben als ihre einläufigen Gegenstücke."]},
 {t: "h", x: "Duellwaffen"},
 bild("s104-iiii-weapons", 230),
 {t: "tbl", head: ["Name", "Eigenschaften", "Preis"], rows: [
  ["Scimithorn", "Duellwaffe. Schwer, spitz. Wartungsintensiv.", "25"],
  ["Orikatana", "Zweihändige Duellwaffe. Ablenkend, scharf. Wartungsintensiv.", "15"],
  ["Splinter", "Duellwaffe. Spitz.", "3"],
  ["Shashka", "Duellwaffe. Scharf.", "5"]]},
 {t: "karten", x: [
  W("Scimithorn", "Das Scimithorn ist ein eigentümlicher Duellsäbel, gefertigt aus einem einzigen Rosendorn. Da Rosen nur im Frühling und nur in Mirkbush Grove blühen, sind Scimithorns äußerst seltene und teure Waffen, begehrt bei Sammlern von drinnen wie draußen. Als wäre das nicht genug, sind nur die Dornen nahe den Blütenblättern der am höchsten wachsenden Rosen stark genug, um zu Scimithorns zu werden, was die Herstellung zusätzlich erschwert.", "Einmal pro Tag muss das Scimithorn mehrere Stunden in Wasser getaucht werden. Vergisst du es zu wässern, trocknet die Waffe schnell aus und wird nach drei Tagen so spröde, dass sie beim Aufprall zerspringt. (Scimithorns müssen jede Nacht ins Wasser, weshalb sie die perfekten Waffen für Seeleute und Piraten sind.)"),
  W("Orikatana", "Eine zweihändige Duellwaffe, geschmiedet in der akribischen Kunst des Origami: endlose Papierlagen, übereinandergefaltet, ergeben eine Klinge schärfer als Metall. Leicht und tödlich wie ein Windstoß im Winter. Nur noch wenige Origami-Meister üben diese Kunst aus, die meisten leben im Shogunate, und einen von ihnen zu überreden, ein neues Schwert zu falten, ist eine Leistung für sich.", "Die Orikatana besteht aus Papier, darf also nicht ins Wasser getaucht werden und brennt leicht, wenn Feuer sie berührt. Wird sie nass, kann man sie ein oder zwei Tage in der Sonne trocknen. Verbrennt sie, ist die Klinge für immer verloren. (Orikatana-Scheiden sind völlig wasserdicht. Du musst dich nur um deine Klinge sorgen, wenn du sie ziehst.)"),
  W("Shashka", "Dieser schlanke, biegsame Duellsäbel wird aus den zerbrechlichsten hohlen Vogelknochen gefertigt, extrem schwer zu bearbeiten. Leicht und lebhaft erlaubt er dem Träger schnelle Hiebe, was ihn zur idealen Waffe für Duellanten des Seelie Court macht. Manche Duellanten nutzen Shashkas mit extremer Krümmung, fast wie die Sicheln der Furies, entweder als Zwillingspaar oder zusammen mit einem kleinen Knochendolch."),
  W("Splinter", "Splinter sind mit Abstand die einfachsten Duellwaffen, denn sie bestehen aus nichts als einem gut ausbalancierten, schmalen, geschärften Holzstreifen. Trotz des bescheidenen Aussehens kann der Splinter in den Händen eines geübten Kämpfers so schnell und tödlich sein wie jede Household-Nadel, weshalb ihn viele Gnome-Duellanten bevorzugen. Deshalb behalten die klügsten Abenteurer bei einem Spaziergang stets den Boden im Auge, um den perfekten Splinter zu finden.")]},
 {t: "box", h: "Der Samurai-Kodex", b: ["Alle Samurai und Orikatana-Meister, die diesen Namen im Backyard verdienen, folgen einem strengen Moralkodex namens Bushido (der Weg des Kriegers) und leben nach 8 großen Tugenden.", "**Gi – Gerechtigkeit:** Stets fair und anständig handeln.", "**Yū – Mut:** Allen Widrigkeiten mit großer Entschlossenheit begegnen.", "**Jin – Mitgefühl:** Wohlwollen zeigen und Schwächeren helfen.", "**Rei – Respekt:** Sich höflich verhalten und alle anderen respektieren.", "**Makoto – Ehrlichkeit:** Integrität und Ehrlichkeit im Handeln zeigen.", "**Meiyo – Ehre:** Den eigenen Namen und Ruf wahren.", "**Chūgi – Treue:** Seinem Sensei, Daimyo und Shogun gehorchen und ihn ehren.", "**Jisei – Disziplin:** Kontrolle über Gefühle und Handlungen bewahren.", "Wie diese Tugenden gelehrt werden, ändert sich je nach Präfektur oder Sensei, doch jede Version des Bushido ist gleichermaßen streng und darauf bedacht, dass alle Samurai die große Verantwortung auf ihren Schultern vollständig verstehen. Die einzige Ausnahme gilt für die Tarnished Samurai von Mizuken, die bei ihrer Amtseinsetzung den großen Tugenden entsagen und sich einer einzigen Kerntugend namens Giri, der „Last der Pflicht“, verschreiben, die völligen und blinden Gehorsam gegenüber Daimyo Val Tarnish verlangt."]},
 {t: "h", x: "Zubehör"},
 bild("s106-iiii-weapons", 230),
 {t: "tbl", head: ["Name", "Beschreibung", "Preis"], rows: [
  ["Samurai-Rüstung", "Einmal pro Kampf kannst du mit Stärke reagieren statt mit einer anderen Fertigkeit. Bietet zusätzlichen Schutz.", "7"],
  ["Stachelbeutel", "Bestiensichere Reisetasche.", "4"],
  ["Tarnumhang (Frühling, Sommer, Herbst oder Winter)", "Hilft dir, dich in der jeweiligen Jahreszeit zu tarnen.", "3"],
  ["Blattgleiter", "Hilft beim Gleiten und Abfedern von Stürzen.", "4"],
  ["Pilzhut", "Hilft dir, dich vor Raubvögeln zu verstecken.", "1"],
  ["Klettersohlen", "Helfen beim Klettern auf Bäumen und Eis.", "2"],
  ["Spinnwebwickel", "Helfen, sich leise zu bewegen und an Flächen zu hängen.", "2"]]},
 {t: "karten", x: [
  Z("Samurai-Rüstung", "Samurai des Shogunate of the Silver Blade tragen prächtige Rüstungen, leichter und widerstandsfähiger als alle anderen, jede aus dem Panzer eines einzelnen gepanzerten Käfers gefertigt. Eine Samurai-Rüstung ist ein Hindernis beim Schwimmen, Schleichen oder Unbemerktbleiben. Füllst du im Kampf dein Kritisches Kästchen, erleidest du keinen Zustand."),
  Z("Stachelbeutel", "Manche Outsider, besonders Gnome- und Barghest-Sammler, tragen Rucksäcke oder Beutel, die völlig mit scharfen Stacheln aus reizendem Unkraut oder Kastanienschalen bedeckt sind. Stachelbeutel werden so gefertigt, um Insekten und kleine Bestien fernzuhalten, damit sie die Nahrung, die so mühsam gesammelt wurde, nicht erreichen. Bestien können einen Stachelbeutel nicht öffnen, und wer es versucht, kann sich sogar verletzen. In Extremsituationen kann ein Stachelbeutel als Waffe dienen, ein Littling mit einem solchen Beutel gilt also immer als bewaffnet. Ein ausreichend großer Stachelbeutel kann außerdem von einem einzelnen Littling eine Runde lang als Teildeckung genutzt werden, wird aber nach einem Schlag zerstört."),
  Z("Tarnumhang: Frühling", "Der Tarnumhang des Frühlings ist ein Farbenrausch, denn er ist völlig mit winzigen Blumen bedeckt, die den Träger in einen fröhlichen kleinen Busch in voller Blüte verwandeln. Auch wenn sich manche Bienen für Littlings mit einem solchen Umhang interessieren, ist der Träger meist zu tief am Boden, um unerwünschte Aufmerksamkeit zu erregen, und verschmilzt nahtlos mit dem blühenden Garten."),
  Z("Tarnumhang: Sommer", "Dieser Tarnumhang mischt Farben wie Braun, Beige und blasses Grün, dem Gras des Gartens in der heißen, trockenen Sommerzeit nachempfunden. Wer ihn mit aufgesetzter Kapuze trägt, ist teilweise vor der sengenden Sonne geschützt und in der flimmernden Landschaft zugleich perfekt getarnt."),
  Z("Tarnumhang: Herbst", "In den Woodlands fertigen Handwerker robuste Umhänge, die gelblichen oder rostfarbenen Blättern gleichen und ihrem Träger erlauben, nahtlos in die Herbstlandschaft einzutauchen, besonders beim Reisen durch die Berge gefallenen Laubs auf dem Boden des Underwood. Herbst-Tarnumhänge sind nicht sehr bequem, aber zumindest teilweise wasserdicht und schützen vor Feuchtigkeit."),
  Z("Tarnumhang: Winter", "Dieser Tarnumhang ist völlig weiß und mit Fell oder Schimmel bedeckt, der die Schneeschicht des Gartens im Winter perfekt nachahmt. Wer ihn trägt, ist extrem schwer zu entdecken, wie eine weiße Maus im Schneesturm, und fühlt sich selbst in den eisigsten Kälteeinbrüchen schön warm."),
  Z("Pilzhut", "Vor Jahren perfektionierten Gnomes eine Art breiten Hut, der wie die Kappe eines giftigen oder ungenießbaren Pilzes aussieht. Diese eigentümlichen Kopfbedeckungen sind zum Symbol der Sammler der Citadel geworden und erlauben ihnen, Raubvögeln zu entgehen, die am Himmel kreisen und nach leichter Beute suchen. Littlings mit Pilzhut erregen nie die Aufmerksamkeit von Bestien über ihnen und täuschen manchmal auch abgelenkte oder leichtgläubige Banditen."),
  Z("Klettersohlen", "Du nimmst zwei Nägel, bindest sie mit einem Lederstreifen zusammen und schnallst sie an Schuh oder Stiefel. So erhältst du ein Paar Klettersohlen, mit denen du mühelos Baumrinde und Eiswände erklimmst. Ein unverzichtbares Werkzeug für alle Entdecker, die keine Höhenangst haben."),
  Z("Blattgleiter", "Auf den ersten Blick sieht der Blattgleiter wie ein großer Drachen aus Holzstäben aus, überzogen von einem schönen großen grünen Blatt. Diese außergewöhnliche Erfindung erlaubt einem starken, fitten Littling, von einem Ast zu gleiten wie eine Faerie, die mit den Flügeln flattert. Mit einem Blattgleiter kannst du aus jeder Höhe sanft herabschweben, ohne Schaden zu nehmen, außer die Luftströmungen des Gartens oder ein hungriger Raubvogel kommen dazwischen. Außerdem erlaubt er, in kurzer Zeit sehr weite Strecken zurückzulegen, solange der Startpunkt hoch genug liegt und du genug Willens- und Armkraft hast, dich festzuhalten. Nicht viele Littlings sind mutig oder leichtsinnig genug für dieses seltsame Gerät, und die es tun, transportieren es meist ohne Blatt, praktisch gefaltet in einem steif aussehenden Rucksack. Wenn es soweit ist, brauchen sie nur ein ausreichend großes Blatt zu finden und es am Gestell festzuschnallen, und sie sind flugbereit. Der Blattgleiter gilt in jeder Hinsicht als Gadget und kann an Ort und Stelle nach den Regeln in Household Band I gebaut werden."),
  Z("Spinnwebwickel", "Die Shinigami haben gelernt, Netzfäden von besiegten Spinnen zu gewinnen und zu Wickeln zu verarbeiten, die um Hände und Füße gewunden werden können. Mit diesen Wickeln bewegst du dich auf jeder Fläche, senkrecht oder waagrecht, leise, kletterst leicht an Wänden und kannst sogar eine Weile hängen, dank der leichten natürlichen Haftkraft von Netzen. Wer die richtige Technik nicht kennt, riskiert aber, daran kleben zu bleiben. Nur Duellanten und Verbrecher aus dem Shogunate können dieses Zubehör mühelos nutzen, alle anderen müssen bei jeder Benutzung einen Würfel werfen. Bei 1 oder 2 bleiben sie am Falschen kleben, an sich selbst oder an einem anderen Littling.")]}
]}
);
})();
