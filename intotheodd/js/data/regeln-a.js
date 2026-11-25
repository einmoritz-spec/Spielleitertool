/* Into the Odd – Einführung, Kapitel 1 und 2 (Corebook S. 4–13), deutsch */
var ITO = window.ITO = window.ITO || {};
ITO.einf = {
 welt: [
  "**Die Welt ist zu groß für Entdecker** und zu alt für Gelehrte. Expeditionen kehren mit Geschichten von bizarren, wundersamen und grauenvollen Orten zurück.",
  "Ihr seid Erforscher und trotzt dem Unbekannten auf der Suche nach Reichtum, Wissen und Macht. Vor allem aber sucht ihr **Arcana**: seltsame Geräte mit unnatürlichen Kräften. Sie reichen von einem schlichten Schmuckstück bis zu gewaltigen Skulpturen. Es gibt viele religiöse und wissenschaftliche Theorien über ihre Herkunft, doch die meisten landen irgendwo dazwischen.",
  "**Die Bürger strömen nach Bastion.** Seine riesigen Industrien bieten gefährliche, aber verlässliche Arbeit, und seine Docks schicken Gewehre, Chemikalien und Zeitungen zu fernen Nachbarn. Unter der Stadt erstreckt sich der Untergrund ebenso weit: Kanäle winden sich zu Tunneln und verbergen uralte Höhlen und vergessene Gewölbe.",
  "Gefallene Städte sind mit Statuen von Sternwesen geschmückt, Kultisten lassen ihre Inbrunst Wirklichkeit werden, und streitlustige Gewerkschaften bereiten sich auf eine kosmische Invasion vor. Vertraute Landschaften werden von seltsamem Unkraut überwuchert, ätzende Nebel kriechen vom Meer heran, und pechschwarze Berge beobachten vom Horizont. Diese seltsame Welt wurde von Wesen beeinflusst, die fremder sind, als wir uns vorstellen können."
 ],
 neu: [
  ["Wie spielt man?", "Ein Spieler ist die Spielleitung. Sie beschreibt die Lage, in der sich die Charaktere gerade befinden. Die Spieler stellen Fragen und lassen ihre Charaktere mit der Umgebung interagieren. Die Spielleitung sagt ihnen, was geschieht oder welche Würfel sie werfen müssen, um den Ausgang zu bestimmen. Euer Ziel: Schätze finden und einen üblen Tod vermeiden."],
  ["Was braucht man?", "Einen Satz Würfel (W4, W6, W8, W10, W12 und W20), Stifte und Papier. Die Spielleitung bereitet einen Ort vor, den die Charaktere erkunden, oder nutzt einen fertigen Abenteuerort."]
 ]
};
ITO.char = {
 werte: [
  ["Stärke", "STÄ", "Kampfkraft, Ausdauer und Zähigkeit."],
  ["Geschicklichkeit", "GES", "Anmut, Athletik und Reflexe."],
  ["Willenskraft", "WIL", "Selbstvertrauen, Disziplin und Ausstrahlung."]
 ],
 intro: "Würfelt für jeden Wert 3W6, in dieser Reihenfolge. 10 ist der Durchschnitt. Charaktere beginnen mit W6 Trefferschutz (hp), einem Maß dafür, wie gut sie lebensgefährlichem Schaden ausweichen.",
 kaesten: [
  ["Startpaket", "Schlagt in der Startpaket-Tabelle nach, um Ausrüstung und Besonderheiten eures Charakters zu finden. Zusätzlich gilt für jede Expedition: Rationen, Laternen sowie einfache Kletter-, Karten- und Campingausrüstung sind vorhanden."],
  ["Gefährten", "Bei kleinen Spielergruppen darf jeder Spieler einen oder mehrere Gefährten erschaffen. Würfelt ihre Werte der Reihe nach und gebt ihnen 1 hp und eine Handwaffe."]
 ],
 start: {
  p: "S. 10",
  intro: "Vergleicht euren höchsten Wert mit eurem Trefferschutz. Waffen nennen ihren Schadenswurf, mit Sp markierte sind sperrig. Arcana werden zufällig bestimmt (siehe Arcana). Hätten zwei Charaktere dieselbe Ausrüstung, nimmt der zweite sein Startpaket aus der Spalte links, oder rechts, falls das nicht geht.",
  hp: ["1 hp","2 hp","3 hp","4 hp","5 hp","6 hp"],
  rows: [
   ["3–9", [["Schwert (W6), Pistole (W6), Moderne Rüstung.","Spürt unirdische Wesen in der Nähe"],["Muskete (W8 Sp), Schwert (W6), Blendgranate.","Spürt Arcana in der Nähe"],["Muskete (W8 Sp), Keule (W6).","Immun gegen extreme Hitze und Kälte"],["Pistole (W6), Messer (W6).","Telepathie, wenn das Ziel einen WIL-Rettungswurf verpatzt"],["Donnerbüchse (W8 Sp), Beil (W6), Köter.","Träume zeigen die unentdeckte Umgebung"],["Muskete (W8 Sp), Beil (W6), Blendgranate, Arcanum.","Eiserne Gliedmaße"]]],
   ["10", [["Gewehr (W8 Sp), Bajonett (W6), Laternenjunge, Arcanum."],["Muskete (W8 Sp), Beil (W6), Falke, Arcanum."],["Muskete (W8 Sp), Schutzhandschuhe, Arcanum."],["Claymore (W8 Sp), Pistole (W6), 2 Säureflaschen, Arcanum."],["Pistolenpaar (W8 Sp), Stahldraht, Enterhaken, Arcanum."],["Gewehr (W8 Sp), Streitkolben (W6), Adler, Gift."]]],
   ["11", [["Gewehr (W8 Sp), Moderne Rüstung, Jagdhund, Arcanum."],["Beil (W6), Pistole (W6), Bolzenschneider, Arcanum."],["Muskete (W8 Sp), Holzhammer, Murmeln, Feiner Hut, Arcanum."],["Muskete (W8 Sp), Bajonett (W6), Köter mit telepathischer Verbindung."],["Machete (W6), Pistolenpaar (W8 Sp), Sprechender Papagei.","Schläft nie"],["Keule (W6), 3 Bomben, Rakete.","Dunkelsicht"]]],
   ["12", [["Keule (W6), Wurfmesser, Arcanum."],["Muskete (W8 Sp), Maultier, Arcanum."],["Spitzhacke (W6), Handschellen, Arcanum."],["Pistole (W6), Rakete.","Giftimmun"],["Harpunengewehr (W8 Sp), Schlagstock (W6), Säure.","Leicht magnetisch"],["Schmiedehammer (W8 Sp), Dolch (W6), Kette."]]],
   ["13", [["Pistole (W6), Äther, Gift, Arcanum."],["Schwert (W6), Pistole (W6), Primitive Rüstung."],["Pistole (W6), Rauchbombe, Köter, Schaufel."],["Muskete (W8 Sp), Tragbarer Rammbock, Spielset."],["Bolzenschneider, Donnerbüchse (W8 Sp), Fiedel."],["Langaxt (W8 Sp), Rum, Bombe."]]],
   ["14", [["Gehstock (W6), Säure, Fernrohr, Arcanum."],["Pistole (W6), Glocke, Stahldraht, Rauchbombe."],["Langaxt (W8 Sp), Wurfäxte, Brandöl."],["Pistole (W6), Säge, Tierfalle, Fernrohr."],["Pistole (W6), Schmierfett, Handbohrer, Trommel."],["Dolch (W6), Brandöl, Spiegel."]]],
   ["15", [["Pistolenpaar (W8 Sp), Kanarienvogel, Äther."],["Langaxt (W8 Sp), Frettchen, Brandöl."],["Keule (W6), Äther, Brecheisen, Flöte."],["Bogen (W6 Sp), Messer (W6), Rakete, Brandöl."],["Schwert & Dolch (W8 Sp), Lupe.","Verlorenes Auge"],["Pistole (W6), Messer (W6), Bombe, Säge."]]],
   ["16", [["Muskete (W8 Sp), Taschenuhr, Bombe."],["Stab (W6 Sp), Zange, Leim."],["Beil (W6), Netz, Brandöl.","Verbranntes Gesicht"],["Pistole (W6), Peitsche (W6), Zigarren.","Verlorenes Auge"],["Pistole (W6), Säure, Tierabwehrmittel.","Handprothese"],["Pistole (W6), Bombe, Schaufel.","Glühende Augen"]]],
   ["17", [["Hellebarde (W8 Sp), Attrappen-Pistole, Künstliche Lunge."],["Pistole (W6), Netz, Trompete.","Beinprothese"],["Keule (W6), Farbe, Brecheisen.","Laute Stimme"],["Muskete (W8 Sp), Akkordeon.","Keine Nase / kein Geruchssinn"],["Schwert (W6), Stahldraht.","Hässliche Mutation"],["Stab (W6 Sp), Wurfmesser (W6)."]]],
   ["18", [["Garrotte (W6), Muskete (W8 Sp).","Stumm"],["Pistole (W6), Schmierfett, Metallsäge.","Ein Arm"],["Pistole (W6), Zigarren, Gift.","Flüchtig"],["Schwert (W6), Schild.","Analphabet"],["Schwert (W6), Frettchen, Zerlumpte Kleidung.","Schulden (3 g)"],["Streitkolben (W6), Taube.","Entstellt"]]]
  ]
 },
 ausr: {
  p: "S. 12",
  geld: "100 Pence (p) sind ein Schilling (s). 100 Schilling sind ein Gulden (g).",
  gruppen: [
   ["Waffen", [["Unbewaffneter Angriff","–","W4 Schaden."],["Primitive Waffe","1 s","W6 Schaden, sperrig. Bogen, Mistgabel, Barhocker usw."],["Handwaffe","2 s","W6 Schaden. Dolch, Schwert, Pistole, Keule usw."],["Feldwaffe","10 s","W8 Schaden, sperrig. Muskete, Pistolenpaar, Schwert und Dolch, Hellebarde usw."],["Edle Waffe","30 s","W8 Schaden. Feiner Säbel, Duellpistole, Rapier usw."],["Schwere Feuerwaffe","1 g","W10 Schaden, sperrig. Kann nicht gleichzeitig bewegt und abgefeuert werden. Elefantenbüchse, Langgewehr usw."]]],
   ["Rüstungen", [["Moderne Rüstung","50 s","Rüstung 1. Brustpanzer und Helm."],["Primitive Rüstung","25 s","Rüstung 1, sperrig. Veraltete oder zeremonielle Rüstung."],["Schild","10 s","+1 Rüstung, sperrig."]]],
   ["Sprengstoff & Chemikalien", [["Blendgranate","10 s","Blendet kurz jeden, der einen GES-Rettungswurf verpatzt."],["Brandöl","10 s","Setzt ein Gebiet in Brand. Alle darin erleiden jede Runde W6 Schaden."],["Bombe","20 s","W10 Explosion."],["Rakete","20 s","W10 und eine bunte Explosion."],["Rauchbombe","10 s","Füllt beim Entzünden einen Raum mit Rauch. Angriffe durch den Rauch sind beeinträchtigt."],["Gift","20 s","Wer es zu sich nimmt, verliert W20 STÄ."],["Äther","10 s","Eingeatmet: STÄ-Rettungswurf oder eine Stunde bewusstlos."],["Säure","10 s","W6 Schaden, frisst sich durch die meisten Materialien."],["Gegengift","10 s","Neutralisiert die meisten Gifte."]]],
   ["Werkzeug & Luxus", [["Werkzeug","je 1 s","Brecheisen, Säge, Leim, Lupe, Handschellen, Tierfalle, Dietriche, Spiegel, Schreibset, Angel, Schaufel, Enterhaken, Teleskopstange, 20 Fuß Seil, Haken usw."],["Luxusgüter","1 g","Uhrwerkgegenstände, Thermometer, aufwendige Kleidung, Schmuck, Zierrat, Fernrohr usw."]]],
   ["Unterkunft & Verpflegung", [["Unterkunft (pro Woche)","1–20 s","Bett im Schlafsaal 1 s · Zimmer in der Pension 10 s · Stadthaus 20 s."],["Essen & Trinken","10 p–1 s","Brot und Brühe 10 p · Flasche Gin oder Rum 50 p · Pastete und Wein 50 p · Feines Mahl 1 s."]]],
   ["Tiere", [["Reittiere","5 s–1 g","Maultier oder Lama 5 s bis Pferd 1 g."],["Hunde","5–50 s","Köter 5 s (STÄ W10, W6 Biss) bis Jagdhund 50 s (STÄ 2W6, W6 Biss)."],["Vögel","10–50 s","Papagei oder Rabe 10 s (STÄ W6, W4 Krallen) bis Falke oder Habicht 50 s (STÄ W8, W6 Krallen)."]]],
   ["Gefolge (Kosten pro Tag)", [["Laternenjunge","1 s","STÄ 2W6, Laterne, Keule."],["Söldner","5 s","2W6 hp, Muskete, Schwert."],["Experte","10 s","Pistole, Fachwissen auf einem bestimmten Gebiet."]]]
  ],
  gefolge: "Gefolgsleute haben W6 hp und Werte von 10, sofern nichts anderes steht."
 }
};
