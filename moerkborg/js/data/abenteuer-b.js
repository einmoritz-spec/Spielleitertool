/* Rotblack Sludge – Corebook S. 80–87 (c10): Räume 6–15. */
var SLUDGE = {h:"Rotblack Sludge", t:"Ölig, schwarz und stinkt nach Schwefel.", b:[
 "Glühend heiß, Zähigkeitsprobe SG8 oder W4 Schaden pro Runde, solange man eingetaucht ist.",
 "Das Schwimmen von einem Raum zum anderen dauert vier Runden.",
 "Bei jedem Schwimmen besteht bei 1–2 auf einem W6 die Chance, dass der Darmwurm zubeißt (W10 Schaden). Geschicklichkeitsprobe SG6, um nicht gebissen und verschlungen zu werden und zu sterben.",
 "Säule mit Violine spielenden Skeletten. Sie ignorieren alles und jeden."]};
MB_RAUM.push(
{id:6, t:"Korridor", p:80, stimmung:"Dunkel und kalt, Licht am Ende des Korridors. Violinenmusik.", punkte:[
  "**Gemälde an den Wänden:** Landschaften, fade.",
  "**Große verborgene Fallgrube:** vor den Gemälden. Überdeckt die gesamte Breite des Korridors.",
  "**Norden:** **Licht** aus dem Pumpenraum.",
  "**Osten:** **verklemmte Tür** zu den Zellen. Kratzende Geräusche.",
  "**Süden:** **leise Tür** zum Speisesaal."],
 abs:[
  {h:"Die Fallgrube entdecken", x:"Mit genug Licht und einer erfolgreichen Präsenzprobe SG14 (durch den SC mit der höchsten Präsenz) sind eckige Linien im Boden sichtbar."},
  {h:"Die Gemälde abnehmen oder verstellen", x:"Entfernt jemand ein Gemälde, lässt die Fallgrube die SC in Raum 10 (den Tunnel) stürzen. Der Sturz verursacht W6 Schaden."}],
 bild:"raum6-gemaelde"},
{id:7, t:"Pumpenraum", p:80, zufall:1, stimmung:"Leichter Schwefelgeruch. Violinenmusik ist zu hören.", punkte:[
  "***Zufallsbegegnung.***",
  "**3 Öllampen** hängen von der Decke.",
  "**Rostige Pumpe:** schlammige Flüssigkeit. Heilt W4 TP.",
  "**Luke im Boden:** Leiter hinab zu Raum 15 (Schmiede/Schlachthaus).",
  "**Osten:** **Loch in der Wand:** Blick auf den **Rotblack Sludge** (siehe Raum 9). Man sieht die Säule mit den Skeletten.",
  "**Süden:** **dunkler Korridor.**"],
 bild:"raum7-pumpenraum"},
{id:8, t:"Kettenraum", p:83, zufall:1, stimmung:"Schwach beleuchtet, seltsam kühl und windig.", punkte:[
  "***Zufallsbegegnung.***",
  "**Hakenketten** hängen von der Decke.",
  "**Blutige Spuren** auf dem Boden, die ins Nichts führen.",
  "**Norden:** **Eisentür (ohne Griff)** zum Statuenraum. Von dieser Seite nicht zu öffnen.",
  "**Westen:** **Torbogen** zum Edelsteinraum.",
  "**Süden:** **wackelige Holztreppe** zum Wachraum."],
 wachen:1},
{id:9, t:"Edelsteinraum", p:83, stimmung:"Von spektakulären Farben beleuchtet. Stickige, nach Schwefel stinkende Luft. Rotblack Sludge und melancholische Violinenmusik.", punkte:[
  "**Norden:** **Rotblack Sludge.** Die Nordwand ist in eine große Höhle eingestürzt, 60 Fuß tief. Schwarze, matschige Masse. Schwefeldunst verschleiert die Sicht, aber man kann durch die Dämpfe fast das Schlachthaus und den Statuenraum erkennen.",
  "**50 Fuß hohe Säule** in der Mitte des Sludge. Oben spielen zwei Skelette Violine.",
  "**Höhlenwand mit Edelsteinen:** Wunderschöne grün-rosa-violette Edelsteine, fest in die Wand eingelassen.",
  "**Westen:** **schmaler Kriechgang** zum Tunnel.",
  "**Osten:** **Torbogen** zum Kettenraum."],
 abs:[
  {h:"Edelsteine herausbrechen", x:"Man kann W4 Edelsteine gewaltsam entfernen (Probe auf Stärke SG12), jeder 200s wert. Dann greift der **Darmwurm** an."},
  {h:"Zugang aus dem Tunnel", x:"Ist jemand in die Fallgrube im Korridor gefallen und betritt von dort diesen Raum, greift der **Darmwurm** sofort an."}],
 kr:[
  {h:"Darmwurm", t:"Unfassbar lang, dick wie eine Eiche. Verbirgt sich im Rotblack Sludge.", w:"TP 50 · Moral – · Dicke Haut −W6", b:["Kann die Räume 9, 12 und 15 mühelos erreichen.","Von Fletcher kontrolliert. Stirbt er, sinkt der Darmwurm auf den Grund, tot, aber träumend.","**Rasiermesserscharfe Zähne W10:** Geschicklichkeitsprobe SG6, um nicht verschlungen zu werden und sofort zu sterben."]},
  SLUDGE],
 bild:"raum9-saeule-geiger"},
{id:10, t:"Tunnel", p:84, stimmung:"Aus der Decke singen Stimmen in Moll.", punkte:[
  "**Enge Passage westlich der Fallgrube.** Man muss sich hindurchzwängen. Große und sperrige Dinge (schwere Rüstung eingeschlossen) passen nicht durch.",
  "**Deckentunnel** zur Fallgrube im Korridor.",
  "**Westen:** **Öffnung** zum Gewächshaus.",
  "**Osten:** **Öffnung** zum Edelsteinraum."]},
{id:11, t:"Gewächshaus", p:84, stimmung:"Heiß, stickig, aber angenehm. Riecht süß.", punkte:[
  "**Öllampen** hängen an Ketten von der Decke.",
  "**Glaswandiger Raum mit Pflanzen:** Palmen, Kakteen und Blumen wuchern. Hinter dem Glas ist dämmriges Mondlicht zu sehen.",
  "**Pfad zu einem kleinen Lager,** wo **Lesdy** an einem Lagerfeuer sitzt und liest. Sie bietet den SC Essen und Rast an. Nehmen sie an, stellt Lesdy ihre **drei jungen Gefährten** als *Gastgeber* vor. Anfangs sind sie aufgeschlossen und freundlich.",
  "**Osten:** **enger Kriechgang** zum Tunnel."],
 abs:[
  {h:"Wenn die SC eine Weile bleiben", x:"wird ihnen ein Gebräu serviert, das **W6 TP heilt.** Bald scheint der Boden zu versinken und die Wände wogen wie Meereswellen. Die Gastgeber greifen an. Die SC schwitzen und lallen; Angriffe und Verteidigung werden mit −2 gewürfelt."},
  {h:"Wenn die SC nicht bleiben wollen", x:"Die Gastgeber ziehen ihre Messer und singen: *„Lesdy … Lusi … Lesdy … die Erwählte, die Entzückende!“* und greifen an. Sie weichen nie zurück.\nLesdy ist eine passive Beobachterin und schleicht sich beim kleinsten Anzeichen von Gewalt unbemerkt davon. Würfle W4+1, um zu sehen, in welchem Raum sie sich versteckt."}],
 kr:[
  {h:"Lesdy", t:"Langes dunkles Haar, gekleidet in einen Jutesack mit Armlöchern. Nett, aber manipulativ. Sie versucht, den Darmwurm gegen Fletcher, den kannibalischen Hexenmeister (Raum 15), zu wenden. Sie sucht die Tunnel und Höhlen tief unter dem Rotblack Sludge und glaubt, dass der Verzehr des Sludge einzigartige Kräfte zur Beherrschung von Kreaturen verleiht, doch wenn sie es versucht, greift der Darmwurm sie an, sobald sie ihm nahekommt.", w:"TP 5 · Moral 4 · Keine Rüstung", b:["**Unbewaffneter Angriff W4**"], bild:"raum11-lesdy"},
  {h:"3 Gastgeber", t:"Jung, in Lumpen gekleidet. Eifrig.", w:"TP 7 · Moral – · Keine Rüstung", b:["**Lange Messer W6**"]}]},
{id:12, t:"Statuenraum", p:85, stimmung:"Stinkt nach Schwefel. Rotblack Sludge und Violinenmusik.", punkte:[
  "**Schwarze Statue** des einäugigen Königs Lenard II. Offensichtliche Höhlung, wo das Auge sein müsste. Eine Untersuchung zeigt Blutflecken in der Augenhöhle.",
  "**Gepflasterter Boden,** anders als im Rest der Höhle.",
  "**Westen:** **Rotblack Sludge.** Die Westwand ist in eine große Höhle eingestürzt, 60 Fuß tief. Schwarze, matschige Masse. Schwefeldunst verschleiert die Sicht, aber man kann durch die Dämpfe fast das Schlachthaus und den Edelsteinraum erkennen.",
  "**Norden:** **Holztür** zum Trümmerraum. **VERSCHLOSSEN.** (Fletcher hat den **seltsam geformten Schlüssel.**)",
  "**Süden:** **Eisentür** zum Kettenraum. Kann von hier geöffnet werden.",
  "**Osten:** **geheime, schwere Steintür** zum Zimmer des Sohnes."],
 abs:[
  {h:"Nach einigen Minuten", x:"kippt der Boden nach Westen. Probe auf Geschicklichkeit SG16 oder man fällt in den Sludge."},
  {h:"Ein Auge in die Augenhöhle des Königs legen", x:"Die Tür zum Zimmer des Sohnes öffnet sich mit lautem Krachen."}],
 kr:[SLUDGE], bild:"raum12-statue-koenig-lenard"},
{id:13, t:"Zimmer des Sohnes", p:85, stimmung:"Fackeln brennen, es ist heiß und beengt. Violinenmusik.", punkte:[
  "**Der verlorene Erbe,** Aldon, sitzt auf einer Bank und nagt an Menschenknochen. Er ist pummelig und arrogant.",
  "**Bücherregal** mit einem großen Eisenhaken, einem Spiegel und einer Armbrust mit vier Bolzen.",
  "**Eine Ochsenpeitsche** mit kryptischen Runen (W4 + nekroplasmatischer Schock, W4 Schaden) hängt an der Wand.",
  "**Schalen** mit Wasser und Essen.",
  "**Westen:** **schwere Steintür** zum Statuenraum."],
 abs:[{h:"Mit Aldon sprechen", x:"Aldon (3 TP) ist recht zufrieden und will den Raum nicht verlassen, wird sich aber weder wehren noch körperlich Widerstand leisten. Während seiner Gefangenschaft hat er nur die schiefen Wachen gesehen, weiß aber, dass sie unter Fletchers Befehl stehen."}]},
{id:14, t:"Trümmerraum", p:87, zufall:1, stimmung:"Sehr abgestandene, frostige Luft, schwer zu atmen.", punkte:[
  "***Zufallsbegegnung.***",
  "**Fackel** erhellt den Raum schwach.",
  "**Müll und Knochen** in enormen Mengen.",
  "**Westen:** **Holztür** zur Schmiede/zum Schlachthaus.",
  "**Süden:** **Holztür** zum Statuenraum. **VERSCHLOSSEN.** (Fletcher hat den **seltsam geformten Schlüssel.**)"]},
{id:15, t:"Schmiede/Schlachthaus", p:87, stimmung:"Rußig und sehr heißer, schwefliger Dunst vom Rotblack Sludge.", punkte:[
  "**Fletcher, der kannibalische Hexenmeister,** haust hier. Er hat den **seltsam geformten Schlüssel** zur Tür zwischen Trümmerraum und Statuenraum.",
  "**Zwei große Feuerstellen** brennen. Als Schmelzöfen und Herde für die Zubereitung von Mahlzeiten genutzt.",
  "**Fleischbrocken** hängen an Deckenhaken. Überwiegend Menschenfleisch – Erwachsene und Kinder.",
  "**Süden:** **Rotblack Sludge.** Die Südwand ist in eine große Höhle eingestürzt, 60 Fuß tief. Schwarze, matschige Masse. Schwefeldunst verschleiert die Sicht, aber man kann durch die Dämpfe fast den Edelsteinraum und den Statuenraum erkennen.",
  "**Osten:** **Holztür** zum Trümmerraum.",
  "**Westen:** **Leiter** zu einer Luke im Pumpenraum."],
 abs:[{h:"Fletchers Geschichte", x:"Als Kind wurde Fletcher nach Sarkash hinausgeführt und dort zurückgelassen. Verzweifelte Nekromanten fanden den wilden Jungen, wie er auf einer düsteren Lichtung Kaninchenkadaver kaute. Sie nahmen ihn auf, doch weder Gewalt noch Drohung konnten ihn kontrollieren, und er wurde langsam mächtiger. Schließlich verließen auch sie ihn, um ihn sterben zu lassen, und warfen ihn in die *Verfluchte Höhle.* Dies wurde seine Domäne, allein durch seinen Willen beherrscht. Er will den Erben Aldon nutzen, um den Schattenkönig unter Druck zu setzen, Lesdy ein für alle Mal loszuwerden."}],
 kr:[{h:"Fletcher, der kannibalische Hexenmeister", t:"7 Fuß groß, gebaut wie ein Grizzly. Rußig, kahl und mit Tätowierungen bedeckt. Beherrscht die Höhle, kann aber nicht durch den Tunnel passen. Hasst Lesdy im Gewächshaus.", w:"TP 20 · Moral – · Gehärtete Haut −W4", b:[
   "**Rotglühender Flegel W8** + schwere Verbrennung (Geschicklichkeitsproben −2 für einen Tag).",
   "**Setzt jede dritte Runde eine Macht ein** (gelingt automatisch). W4:\n1–2. *Neun violette Zeichen entknoten den Sturm:* W2 Blitzbolzen, die je W6 Schaden verursachen.\n3. *Dämon der Kapillaren:* Eine Kreatur würgt W6 Runden lang, W4 TP Schaden pro Runde.\n4. *Ich-bin-luft* (einzigartige Macht): Fletcher ist die nächsten zwei Runden unsichtbar. Kann dennoch angreifen.",
   "**Wenn Fletcher Schaden nimmt,** regnen große Brocken menschlichen Fleisches herab, wie aus Mitgefühl. Der SC, der ihn getroffen hat, muss eine Geschicklichkeitsprobe SG8 bestehen oder erleidet W4 Schaden.",
   "**Wenn Fletcher stirbt,** sinkt der Darmwurm (der ihn weder verteidigen noch ihm in irgendeiner Weise helfen wird) auf den Grund, tot, aber träumend."]}],
 bild:"raum15-fletcher"}
);
