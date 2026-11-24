/* Regelübersicht (Corebook S. 90) – vier Reiter für den gelben Regelspiegel am Spieltisch.
   Abschnitt: {h:Etikett, rows:[[Schlüssel,Text]]} · {h, p:Text} · {zw:[{h,p},{h,p}]} */
var MB_REGELSPIEGEL = {
 p:90,
 tabs:[
  {id:"proben", t:"Proben", x:[
   {h:"Fähigkeiten", rows:[
    ["Geschicklichkeit","Verteidigen, Balancieren, Schwimmen, Fliehen"],
    ["Präsenz","Wahrnehmen, Zielen, Bezaubern, Mächte wirken"],
    ["Stärke","Zermalmen, Heben, Zuschlagen, Ringen"],
    ["Zähigkeit","Gift/Kälte/Hitze widerstehen, einen Sturz überleben"]]},
   {h:"Proben", p:"Würfle W20 ± Fähigkeit. **Gleich oder höher als der SG** ist ein Erfolg. Kreaturen addieren keine Fähigkeit, sie würfeln nur einen unmodifizierten W20 gegen den SG."},
   {h:"Schwierigkeitsgrade (SG)", rows:[["6","unglaublich einfach"],["8","Routine"],["10","ziemlich einfach"],["12","normal"],["14","schwierig"],["16","wirklich schwer"],["18","sollte nicht möglich sein"]]}
  ]},
  {id:"kampf", t:"Kampf", x:[
   {h:"Initiative W6", rows:[["1–3","Feinde beginnen"],["4–6","Spielercharaktere beginnen"],["einzeln","Geschicklichkeit + W6"]]},
   {h:"Angriff & Verteidigung", rows:[["Nahkampf","SG12 Stärke"],["Fernkampf","SG12 Präsenz"],["Verteidigung","SG12 Geschicklichkeit"]]},
   {zw:[
    {h:"Krit · 20", p:"**Angriff:** ×2 Schaden, Rüstung/Schutz eine Stufe niedriger. **Verteidigung:** SC erhält einen freien Angriff."},
    {h:"Patzer · 1", p:"**Angriff:** Waffe bricht oder geht verloren. **Verteidigung:** SC nimmt doppelten Schaden, Rüstung eine Stufe niedriger."}]},
   {h:"Gebrochen (0 TP) W4", rows:[
    ["1","W4 Runden bewusstlos, erwacht mit W4 TP."],
    ["2","W6: 1–5 gebrochene/abgetrennte Gliedmaße, 6 Auge verloren. W4 Runden handlungsunfähig, dann W4 TP."],
    ["3","Blutung: Tod in W2 Stunden ohne Behandlung. Alle Proben in der ersten Stunde SG16, in der letzten SG18."],
    ["4","Tot."]]},
   {h:"Rüstungsstufen", rows:[["1. leicht","−W2"],["2. mittel *","−W4"],["3. schwer **","−W6"]], fnraw:"* +2 SG Geschicklichkeitsproben · ** +4 SG Geschicklichkeitsproben (Verteidigung +2 SG)"}
  ]},
  {id:"unterwegs", t:"Unterwegs", x:[
   {h:"Rast", rows:[["Verschnaufen","heile W4 TP"],["Eine Nacht Schlaf","heile W6 TP"]], fn:"**Infektion:** Keine Heilung beim Rasten. Nimm jeden Tag W6 Schaden."},
   {h:"Reaktion (2W6)", rows:[["2–3","Töten!"],["4–6","Zornig"],["7–8","Gleichgültig"],["9–10","Fast freundlich"],["11–12","Hilfsbereit"]]},
   {h:"Moral (2W6)", p:"**Moral würfeln, wenn:** der Anführer getötet wird · die Hälfte der Gruppe ausgeschaltet ist · ein einzelner Feind nur noch ⅓ TP hat. Würfelst du über dem Moralwert der Kreatur, würfle W6: **1–3** flieht, **4–6** ergibt sich."}
  ]},
  {id:"maechte", t:"Mächte", x:[
   {h:"Eine Macht wirken", p:"Lege eine **Präsenz-SG12**-Probe ab. Misslingt sie, wirkt die Macht nicht, und der Wirker nimmt W2 TP Schaden, wird für eine Stunde benommen und kann in dieser Zeit keine Mächte einsetzen. Zu Patzern siehe S. 44."},
   {h:"Anzahl pro Tag", p:"Ein SC kann seine Mächte insgesamt **Präsenz + W4**-mal pro Tag einsetzen. Würfle die Gesamtzahl jeden Tag neu."}
  ]}
 ]
};
