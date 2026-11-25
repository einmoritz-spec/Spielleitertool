/* „HexMap for Tiny Adventurers“ (Carlos Martins, Mausritter Third Party Licence), aus dem Englischen übersetzt */
var MR = window.MR || {};
MR.aussen = {
 start:[
  ["Du wachst in Sumpfhof [Feld 1] auf. Du weißt nicht, wie du dorthin gekommen bist. Nach einem Gespräch mit den Bewohnern erfährst du, dass man dich bewusstlos im Tümpel [Feld 14] gefunden hat.",["Wie/warum wurdest du fortgespült?"]],
  ["Du bist eine Straßenmaus – es ist das erste Mal, dass du außerhalb der Stadt [Feld 16] bist.",["Warum willst du die Außenlande erkunden?","Musst du zurück nach Hause? Warum?","Wird man dich nach dem, was du getan hast, willkommen heißen?"]],
  ["Drei Fraktionen sind im Spiel. Jede verfolgt ihre eigenen Pläne. Für dich gibt es aber kein klares Ziel – finde deinen Weg unterwegs und erkunde die Außenlande.",["Gestalte die Welt und mach sie zu einem besseren Ort."]]
 ],
 fraktionen:[
  ["Rattenbanditen",["Rücksichtslose Bande","Geheimes Versteck"],[["Eine Handelsroute beherrschen",2]]],
  ["Krähenzirkel",["Gerissene Rabenvogel-Vetteln","Krächzende Gesangsmagie","Hochaufragender Seherturm"],[["Eine Bauernmaus entführen",2],["Eine Wettermaschine bauen",5]]],
  ["Katzendame Azura",["Furchteinflößende Erscheinung","Angeheuerte Söldner und Banditen","Unermesslicher Reichtum"],[["Bestechungsgelder von einer Siedlung eintreiben",3],["Eine Siedlung unterwerfen",5]]]
 ],
 geruechte:["Die Banditen planen, die Katzendame zu töten","Ein Blitz hat sowohl die Buche als auch die Katzendame getroffen! Seitdem ist sie noch anspruchsvoller","Abfall der Menschen wird lebensgefährlich","Würfle W20 – nimm das Gerücht des Felds (bei einer 20 wählt die Spielerin das Feld)","Krähen sammeln Material, um einen Todesstrahl zu bauen","Das Wasser aus der Stadt kann dir besondere Kräfte verleihen"],
 begegnungen:["Händler aus Steinglanz [Feld 8]","Aggressive Fraktionsmitglieder – je nach Nähe zum Versteck","Diplomatische Fraktionsmitglieder – je nach Nähe zum Versteck","Die Begegnung des Felds","Der Auslöser des Felds (Ereignis/Abenteuer-Samen)","Verletzter Spatz in Not"],
 /* Feld: [Nr., Name, Gerücht, Begegnung, Auslöser, SL-Notizen[]] */
 felder:[
  [1,"„Sumpfhof“","Sie wissen, wie man mit Geistern spricht","Reisende Maus (Hochstaplerin)","Eine Krankheit ist ausgebrochen",["Eine kleine Siedlung (etwa 3 Familien) mit beunruhigend hohen, verdrehten Türmen. Halbwegs regiert von einem Ausschuss aus Plündermäusen.","Die Bewohner sind dafür bekannt, Müllhaufen [Feld 14] sorgfältig zu durchsuchen und am Bach zu faulenzen.","Taverne: Schwarze Biene – gewürzte Ofenkarotte [Feld 17]","Das Dorf ist über einem rostigen Fahrrad gebaut. Behandle die Mäuse als lässige Hippies. Das Wasser aus Feld 14 vergiftet die Mäuse.","Krähen haben den Fundort [Feld 14] beansprucht und verlangen einen Anteil an den Funden.","Die Katze hält Abstand – sie fürchtet sich vor den seltsamen Geräuschen von hier (und weiß nicht, dass sie von Mäusen stammen).","Banditen sind oft in der Taverne – sie sind so willkommen wie alle anderen Reisenden."]],
  [2,"Stiller Feldweg","Die Katzendame und die Banditen beanspruchen dieses Stück Land (Handelsroute). Krieg zieht herauf","Gierige Banditen (Fraktion)","Ein Zaubererturm kommt auf dem Rücken einer Schildkröte an",[]],
  [3,"Kaskaden-Wasserfälle","Das Wasser hat geheime Eigenschaften","Nervöse Libellen","Eine frisch gekrönte Biene sucht einen Ort für ein neues Volk (hängt mit Gerücht 8 zusammen)",["Das Versteck der Banditen liegt hinter dem Wasserfall."]],
  [4,"Hohler Baumstumpf","Die Bewohner sind seltsam verdreht","Beschützender Hundertfüßer","Eine Versuchsperson findet nicht nach Hause",[]],
  [5,"Abflussrohr-Mündung","Für die Menschenstadt [Feld 16] wird ein Wegzoll verlangt","Müllritter (Ratten)","Eine seltsam schnell wachsende Pflanze in der Nähe",["Der Eingang wird von Kakerlakensoldaten bewacht. Das Spinnenartefakt (hängt mit Samen 17 zusammen) oder ein anderer Schatz gewährt Durchlass (Plündern 14)."]],
  [6,"Überwucherte Ruinen","Hier liegt ein riesiger Traktorreifen. Einst ein uralter Nagerweiler, wurde er von den Spinnen übernommen","Giftspinne","Eine Sammlerin will einen verlorenen Schatz zurückholen (hängt mit Auslöser 17 und Gerücht 5 zusammen)",[]],
  [7,"Buche, vom Blitz gespalten","Die Katze starb, als der Blitz den Baum traf. Die Krähen haben sie wieder zum Leben erweckt","Katzendame Azura","Ein Bandit (Ratte) gerät in eine Falle",["Versteck der Katzendame."]],
  [8,"Riesiger Findling","Die Bienen sind vor Ewigkeiten fortgezogen und werden nie zurückkehren","Jagender Adler","Die Katzendame verlangt einen hohen Zehnt",["Oben liegt ein Gehöft namens „Steinglanz“, bekannt für seinen meditativen Pilzgarten. Eine freie Siedlung, von einem Rat regiert. Die Mäuse hier tragen fein bestickte Kleidung. Die meisten sind Händler (die oft Wachen brauchen).","Taverne: Silberritter – Pilzeintopf","Behandle die Bewohner als vornehme Mäuse. Sie verkaufen Pilze nach Sumpfhof [Feld 1] und an andere Orte (nicht auf der Karte).","Die Katze meidet das Wasser, hat den Ort aber verarmen lassen, indem sie die Handelsrouten stört. Es gibt eine Abmachung: Die Mäuse werden gegen Waren vor Banditen geschützt.","Banditen überfallen die Händler, so oft sie können (besonders auf dem Weg [Feld 2]).","Die Krähen haben (noch) nichts mit ihnen zu tun."]],
  [9,"Trittsteine","Jenseits dieses Punkts ist das Land nicht sicher","Bösartige Wasserschlange","Ein Läufer mit wichtigen Nachrichten hat sich verirrt (muss in die Stadt [Feld 16])",[]],
  [10,"Wurzelgewirr","Spukboden … Mäuse, die den Friedhof betraten, kamen nie zurück","Verstörter Geist","Seltsame magische Anomalie",["Begräbnisstätte uralter Mäuse."]],
  [11,"Hecke","Der Weg führt ins Nirgendwo","Hungersnot-Schlange","Ein Eulenzauberer will einen Zauber zurückholen",[]],
  [12,"Belebte Straße","Ein gefährlicher Menschenpfeifer bringt alle Mäuse dazu, ihm zu gehorchen","Neugieriger Fuchs","Eine reisende Theatertruppe kommt an",[]],
  [13,"Gesicht in der alten Eiche","Der Geist ist im Baum gefangen","Rätselhafte Fee","Der Ort wurde von Menschen beschädigt …",[]],
  [14,"Fauliger Tümpel","Das Wasser vergiftet das Land","Verrückter Frosch","Ihr findet Schlangeneier",["Plündern (Gift widerstehen): Würfle 2W6 – bei über 9 ist ein Schatz zu finden."]],
  [15,"Riesige Kiefer","Die Krähen können dir jeden Gegenstand besorgen, den du willst (hängt mit Auslöser 5 zusammen)","Undurchsichtige Krähe (Fraktion)","Eine Kräuterkundige (Krähe) sucht ein Heilmittel",["Hauptquartier der Krähen. Hoch und schwer zugänglich."]],
  [16,"Steinmauer","Die Eule lässt keinen Nager passieren","Wachsame Eule (hängt mit Auslöser 11 zusammen)","Ihr beobachtet einen zwielichtigen Handel der Krähen",[]],
  [17,"Weizenfeld","Die Vogelscheuche lebt (die Krähen hassen sie)","Bescheidene Maus (Bäuerin)","Großmutter Spinne hat einen uralten Schatz verloren (hängt mit Auslöser 6 und Gerücht 5 zusammen)",[]],
  [18,"Spatzennest","Die Katzendame gibt dir alles für ein paar Vögel","Besitzergreifende Eichhörnchen","Je nach Jahreszeit: Frühling – Vogelmutter, die ihre Eier beschützt · Sommer – Vogeljunges, aus dem Nest gefallen · Herbst – junge Vögel wollen ausfliegen · Winter – Vogel mit gebrochenem Flügel, alt und grau",[]],
  [19,"Menschen-Wanderweg","Die Dorfhunde töten dich, wenn du die Brücke überquerst","Froschritter","Die Katzendame will unterhalten werden. Die Spatzen können lustig sein … (hängt mit Auslöser 12 zusammen)",[]]
 ],
 pins:{9:[51.6,13.5],8:[34.0,22.2],10:[58.7,22.9],11:[79.8,28.1],2:[50.5,31.1],3:[72.7,44.1],7:[33.6,40.6],19:[12.5,38.7],18:[18.1,54.2],6:[38.3,55.9],4:[69.7,54.0],12:[88.0,54.0],17:[14.6,62.5],5:[50.0,69.3],13:[86.4,63.0],16:[37.6,77.8],14:[68.8,81.8],15:[51.6,87.0],1:[51.2,48.8]}
};
