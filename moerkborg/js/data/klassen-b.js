/* Optionale Klassen (W6) – Corebook S. 53–57 (c07): 4 Elendes Königtum, 5 Ketzerischer Priester, 6 Okkulter Kräutermeister. */
var MB_REGELN = window.MB_REGELN || [];
MB_REGELN.push(
{id:"koenigtum", t:"Elendes Königtum", p:53, cols:2, s:[
 {h:"4 · Elendes Königtum", p:53, wide:1, x:[
  {t:"p", c:"w", x:"Beginnt mit 4W6 × 10s und W2 Omen. TP: Zähigkeit + W6"},
  {t:"p", x:"Niedergedrückt nur von den Erinnerungen an deinen eigenen verlorenen Glanz, könntest du dich nie jemand anderem unterwerfen. Nicht du, von edlem Blut! (Nicht dass du erwartest, dass irgendeiner dieser Knechte die Tiefen deines Kummers versteht.)"},
  {t:"p", x:"**Schmerzlich durchschnittlich, du passt keine Fähigkeiten an. Würfle W8 auf der Waffentabelle. Würfle W4 auf der Rüstungstabelle, aber würfle neu, wenn du schwere Rüstung erhältst. Du beginnst mit zweien der folgenden:**"}
 ]},
 {h:"Besitz", wide:1, x:[
  {t:"cards", x:[
   {n:"1", h:"Die Klinge deiner Ahnen", b:"Dieses prächtige, offenkundig magische, sprechende Schwert ist geckenhaft, unzuverlässig und verachtet dich insgeheim. Es verhöhnt deine Misserfolge und entwickelt, wenn es ständig enttäuscht wird, eine Chance von 1 zu 6, dich oder deine Gefährten „versehentlich“ anzugreifen. Verursacht W6+1 Schaden. Angriff/Verteidigung SG10."},
   {n:"2", h:"„Poltroon“ der Hofnarr", b:"Praktisch nutzlos, persönlich lästig und emotional zehrend, aber Poltroons Herumhüpfen lässt Feinde im Kampf den Fokus verlieren. In den ersten zwei Runden erhalten du und deine Verbündeten +2 auf Angriff/Verteidigung."},
   {n:"3", h:"Barbarister das Unglaubliche Pferd", b:"Barbarister ist magisch, intelligent, arrogant und eitel. Er kann auch sprechen. Wenn du ihn überzeugen kannst, sich zu kümmern, addiert Barbarister gelegentlich +2 auf Präsenzproben, die Logik und Intellekt betreffen. Das Pferd ist vielleicht klüger als du und sich dessen durchaus bewusst."},
   {n:"4", h:"Hamfund der Knappe", b:"Dieser zutiefst feige Diener fungiert nur als Wächter der Scheide des verfluchten Schwertes Eurekia. Einmal pro Kampf, wenn Ham gefunden wird, kann Eurekia gezogen werden. Das Schwert verursacht 2W6 Schaden, und bei jedem Schwung mit Eurekia wird ein W6 gewürfelt. Bei einer 1 wird der Knappe erschlagen und Eurekia verschwindet für immer."},
   {n:"5", h:"Das Schlangenhaut-Geschenk", b:"Eine teure, in Schlangenhaut gebundene Sandelholzkiste. Sie enthält einen scheinbar gewöhnlichen, in Seide gewickelten Dolch. Der Dolch verursacht W4 Schaden, aber bei einer 1 stirbt das Ziel sofort an tödlichem Gift, das aus der Klinge tropft."},
   {n:"6", h:"Horn der Schleswig-Lords!", b:"Einmal pro Tag stößt du einen Ton aus dieser verbeulten alten Trompete aus und legst eine Probe auf Präsenz SG12 ab. Eine Kreatur darf ihre nächste Nicht-Kampf-Probe automatisch bestehen."}
  ]}
 ]},
 {h:"Es lief alles so gut, bis … W6", x:[
  {t:"liste", x:["dein Palast in Wästland in Trümmer fiel.","dein Karawanenkönigreich Tveland in Armut versank.","König Fathmu IX.s Bruder Zigmund, dein Vater, ermordet wurde.","das südliche Reich Südglans im Meer versank.","Anthelia ein Geschenk edlen Blutes forderte.","zwei junge Prinzen westlich von Bergen Chrypt entführt wurden und in der schwarzen Schlucht der Osthänge verschwanden."]}
 ]}
]},
{id:"priester", t:"Ketzerischer Priester", p:55, cols:2, s:[
 {h:"5 · Ketzerischer Priester", p:55, wide:1, x:[
  {t:"p", c:"w", x:"Beginnt mit 3W6 × 10s und W4 Omen. TP: Zähigkeit + W8"},
  {t:"p", x:"Gejagt von den Zweiköpfigen Basilisken des Wahren Glaubens, ist dieser Ketzer raunend in Ruinen anzutreffen, wie er endlos über staubige Straßen trottet und nachts Kathedralen schändet."},
  {t:"p", x:"**Fähigkeiten:** Einsichtig, würfle 3W6+2 für Präsenz. Gebrechlich, würfle 3W6−2 für Stärke. Würfle W8 auf der Waffentabelle und darfst Mächte auch in mittlerer Rüstung einsetzen. Du beginnst mit einem der folgenden:"}
 ]},
 {h:"Besitz", wide:1, x:[
  {t:"cards", x:[
   {n:"1", h:"Heiliger Hirtenstab", b:"Sein Kopf ist ein Haken aus Menschenknochen, beschriftet mit überlappenden Anti-Gebeten. Dieser Stab hakt durch andere Welten. Der Stab verursacht 2W4 Schaden, außer bei gottlosen Menschen."},
   {n:"2", h:"Gestohlene Mitra", b:"Beim Tragen dieses heiligen Huts verblasst der üble Körper des Priesters und wird im Kampf schwer zu treffen (Verteidigung SG10). Über die Ohren gezogen, wird der Priester außerhalb von Kämpfen fast unsichtbar und prüft Heimlichkeit gegen SG8."},
   {n:"3", h:"Liste der Sünden", b:"Ein langes und genaues Dokument, abgeglichen mit der Wirklichkeit, um unsichtbare Übeltäter zu entdecken. Bei erfolgreicher Probe auf Präsenz SG10 umgibt ein seltsames Licht böse Kreaturen. Der Besitzer der Liste verteidigt sich mit +2 gegen jedes so entdeckte Wesen."},
   {n:"4", h:"Die gotteslästerliche Nechrubel-Bibel", b:"So überaus gotteslästerlich, dass selbst die Priester sie nur einmal pro Tag durchblättern können. Würfle beim Lesen einen Würfel. **Gerades Ergebnis:** Für den Rest des Tages heilen SC schon nach fünf Minuten Rast W4 TP. **Ungerades Ergebnis:** Der Priester wird von dämonischen Halluzinationen geplagt. Der SL darf W3 Dinge erfinden, die nur der Priester sehen kann, und sie dem Spieler wie wahr beschreiben. Die Wirkung endet mit Sonnenaufgang."},
   {n:"5", h:"Steine aus Thel-Emas’ Verlorenem Tempel", b:"Wirf die Steine auf den Boden. Ihr Muster verrät, ob in einem Nebenraum Gefahr lauert. Die Steine können lügen. Der Priester legt eine Probe auf Präsenz SG10 ab, um zu sehen, ob sie wahr sind, aber nach einem Misserfolg darf er erst wieder prüfen, wenn die Sonne untergegangen ist."},
   {n:"6", h:"(Falscher Jesus) Kruzifix 666", b:"Das Kruzifix kann bei Begegnungen mit Untoten sowie geringeren Trollen und Goblins eingesetzt werden. Prüfe die Moral (addiere oder subtrahiere den Präsenzmodifikator des Priesters), um zu sehen, ob sich die Kreaturen verbeugen und freundlich entfernen."}
  ]}
 ]},
 {h:"Unheilige Herkunft W6", x:[
  {t:"liste", x:["Galgenbeck, nahe der Kathedrale der Zweiköpfigen Basilisken.","Massakrierter Alliáns-Kult, einziger Überlebender.","Die Krypten von Grift.","Tempelruinen im Tal der Unglücklichen Untoten.","Einer der vielen Graven-Tosk-Diebestunnel.","Geheime Kirche in Bergen Chrypt."]}
 ]}
]},
{id:"kraeutermeister", t:"Okkulter Kräutermeister", p:56, cols:2, s:[
 {h:"6 · Okkulter Kräutermeister", p:56, wide:1, x:[
  {t:"p", c:"w", x:"Beginnt mit 2W6 × 10s und W2 Omen. TP: Zähigkeit + W6"},
  {t:"p", x:"*Geboren aus dem Pilz, aufgezogen in der Lichtung, beobachtet vom Auge des Mondes in einem silberschwarzen Teich.*"},
  {t:"p", x:"**Fähigkeiten:** Zäh wie Holz, würfle 3W6+2 für Zähigkeit. Arm an Eiweiß, würfle 3W6−2 für Stärke. Würfle W6 auf der Waffentabelle und W2 auf der Rüstungstabelle. Du trägst ein tragbares Labor bei dir und suchst ständig nach oft verbrauchten Zutaten. Täglich hast du die Materialien, um zwei zufällig bestimmte Absude herzustellen, und kannst insgesamt W4 Dosen brauen. Unbenutzt verlieren sie nach 24 Stunden ihre Wirkung."}
 ]},
 {h:"Absude W8", wide:1, x:[
  {t:"cards", x:[
   {n:"1", h:"Rotes Gift", b:"Zähigkeit SG12 oder −W10 TP."},
   {n:"2", h:"Ezumiels Dampf", b:"Bestehe eine Probe SG14 oder schwere (und wohl unterhaltsame) Halluzinationen für W4 Stunden."},
   {n:"3", h:"Südlicher Froschtopf", b:"Erbrich dich W4 Stunden lang; bestehe eine Probe SG14, sonst kannst du nichts anderes tun."},
   {n:"4", h:"Elixir Vitalis", b:"Heilt W6 TP und stoppt Infektion. Kann süchtig machen."},
   {n:"5", h:"Spinnen-Eulen-Suppe", b:"Sieh im Dunkeln, klettere 30 Minuten lang an Wänden."},
   {n:"6", h:"Fernors Philtre", b:"Durchsichtiges Öl, muss direkt ins Auge getupft werden. Heilt Infektion und gibt +2 auf Präsenzproben für W4 Stunden."},
   {n:"7", h:"Hyphos’ kraftraubendes Schnupfpulver", b:"Berserker! Zwei Angriffe pro Runde, aber Verteidigung SG14. Hält einen Kampf. Muss geschnupft werden, verursacht Niesen."},
   {n:"8", h:"Schwarzes Gift", b:"Zähigkeit SG14 oder −W6 TP und eine Stunde lang geblendet."}
  ]}
 ]},
 {h:"Herkunft W8", p:57, x:[
  {t:"p", x:"Wahrscheinlich aufgewachsen in:"},
  {t:"tab", rows:[["1–3","ruhige Abgeschiedenheit im Dunkel von Sarkash"],["4","die illegalen Mitternachtsmärkte von Schleswig"]]},
  {t:"p", x:"… kann aber auch stammen aus:"},
  {t:"tab", rows:[["5","die Ketzerinsel Crëlut, zwei Seemeilen östlich von Grift"],["6","die alten gefrorenen Ruinen unweit von Alliáns"],["7","ein kleines Hexenhäuschen in Galgenbeck"],["8","die Ruinen des Anwesens des Schattenkönigs, dick von Erinnerungen an Pilze und Rauch"]]}
 ]}
]}
);
