/* THE SPIRE – Buch der Masken (Zusatzbuch „The Book of Masks“, 24 S.). PDF-Seite = Buchseite (Bookviewer-ID sp_z1).
   Kopf, Einleitung (S. 3) und Vorwort des Kurators (S. 4); die Abschnitte mit den Masken liegen in masken-neuerscheinung.js, masken-klassiker.js,
   masken-diener.js und masken-amaranth.js und hängen sich an SP_MASKEN.abschnitte.
   Maske: {id, t, p, img, b:[Absätze], regel:{art:"ausruestung|fortschritt|szene", t, stufe:"niedrig|mittel", klasse, fl, tags, x}, mehr:{t, x}}
   Himmelsmasken: {id, t, p, sub:[{id, t, oder, img, x}], regel}. Die Absätze nutzen das Markup von md() (*kursiv*, **fett**, [[Originalname]]). */
window.SP_MASKEN = {
  t: "Das Buch der Masken", en: "The Book of Masks", buch: "z1", p: 1,
  von: "Von Lysk Dünne-Hände-Kratzend [[Thin-Hands-Scratching]]",
  mit: "(mit Hilfe von Grant Howitt und Christopher Taylor)",
  fuer: "Zur Verwendung mit dem Spire-Rollenspiel",
  einl: {p: 3, b: [
    "*Angesichts der Bedeutung von Masken in Spire stellt dieses Buch einige der interessanteren Modelle vor, die für Drow und Aelfir erhältlich sind.*",
    "Der Großteil des Buches ist aus der Sicht von Lysk Dünne-Hände-Kratzend geschrieben, einem versierten Maskenmacher; dazwischen finden sich Abschnitte mit Regeln für jede Maske, falls du sie in deinen Spielen verwenden möchtest.",
    "Manche sind Ausrüstungsgegenstände; andere, mit wirkungsvolleren Kräften, werden als Fortschritte behandelt. Eine davon ist eine Szene, weil du sie dir nicht leisten kannst."
  ]},
  vorwort: {t: "Vorwort des Kurators", p: 4, b: [
    "*Die Maske macht den Elf.*",
    "Zeitlose Weisheit, doch: Wir müssen die Wahrheiten der Alten hin und wieder prüfen – wie man ein ererbtes Diamantstück prüft oder das Gesicht eines geliebten Geschwisters – um zu sehen, welchen weiteren Wert sie uns in dieser neuen, vorwärtsblickenden Ära schenken können.",
    "Was ist eine Maske? Sie ist vollkommen, wo Unvollkommenheit herrscht. Sie ist die süße und wahre Ordnung der Dinge: die Hand des Elfen, die dem ungeordneten Kosmos heilige Struktur aufprägt, um das Brutale schön und das Ausgemergelte heilig zu machen.",
    "Ein unverhülltes Gesicht zu erblicken heißt, in die Seele zu starren und die Schutzwälle herunterzureißen, die wir errichtet haben, damit niemand außer den Göttern unser Wesen sehen kann. Wir beweinen die Unmaskierten, die ihr Leben wie Tiere leben, jede ihrer Regungen und Begierden groß auf ihre unbedeckte Schande geschrieben. Sie kennen keine Heiligkeit und können sie nicht kennen. Dieser Strom von Tränen ist unsere Bürde, doch wir tragen sie gern.",
    "Da wir unser Gesicht vor allen außer den Allerheiligsten verbergen, da wir diesen Kreuzzug gegen die Profanität führen – ist es nicht recht, dass unsere gesegneten Fassaden angemessene seien? Sollten wir unsere Gesichter nicht denselben Maßstäben unterwerfen wie die Oper, den Krieg, die Psalmodie, den Gartenbau oder jede andere der Begünstigten Künste? Warum sollten wir uns auf etwas anderes beschränken als eine Fülle von Personae, eine wahre Maskerade von Masken, damit wir stets das passendste Gesicht haben?",
    "Wir haben unsere größte Auswahl an Masken aller Zeiten für Eure Begutachtung zusammengetragen – weit mehr, als wir in diesem Katalog aufzuführen hoffen können. Wir beschwören Euch: Betretet unsere Boutique, oder lasst Euer Personal eine Privatvorführung an einem Ort Eurer Wahl arrangieren, und Ihr werdet staunen, was wir zu bieten haben.",
    "Seid nicht zurückhaltend in Eurer Darbietung, teurer Freund; seid alles, was Ihr sein müsst, alles, was recht ist, mit unserem erstaunlichen Sortiment. Mit klassischen Stilen, neuen Moden und Dienermasken haben wir für jeden Anlass etwas.",
    "Schlagt jetzt zu und vereinbart einen Termin. Denkt daran: Die Maske macht zwar den Elf…",
    "*Der Elf macht die Maske.*"
  ], gruss: ["Hochachtungsvoll,", "Lysk Dünne-Hände-Kratzend"]},
  /* Seitenverhältnis Höhe/Breite der Maskenbilder (für die Spaltenaufteilung) */
  ar: {"aegis-bollwerk": 0.75, "desteraner": 1.29, "donnerhelm": 1.3, "doppelmaske": 0.99, "ediktmaske": 1.22, "ewiges-eis": 0.76, "exzisionsmaske": 1.05, "fokusmaske": 0.82, "himmelsmaske-bruder-herbst": 1.73, "himmelsmaske-mutter-winter": 1.2, "himmelsmaske-schwester-fruehling": 0.87, "himmelsmaske-vater-sommer": 1.46, "immermaske": 1.21, "kokonmaske": 1.3, "nacktmaske": 0.91, "schattenglasmaske": 0.79, "schild": 0.89, "spiegelmaske": 1.08, "spinnling": 0.53, "titel": 1.03, "todesmaskerade": 1.03, "trauermaske": 0.8, "vizard-intravenoes": 0.92},
  abschnitte: []
};
