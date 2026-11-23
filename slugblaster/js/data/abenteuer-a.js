/* Slugblaster – Abenteuer „Saubere Sache“ (eigene Folge, kein Buchinhalt): Überblick, Figuren, Leisten.
   Szenen in abenteuer-b.js. Verweise: S. n = Regelbuch; [[route|Text]] = Seite im Tool. */
var SB_AB = {
  id: "saubere-sache",
  t: "Saubere Sache",
  zeile: "Ein Video-Jam in Popularia · eine Firmenübernahme · ein Seifenmonster",
  dauer: "1 Folge · 3–4 Stunden · 2–4 Slugger",

  /* ---------- Überblick ---------- */
  kurz: [
    "Morgen übernimmt **Miper** den Kult-Laden **Scram Cat**. Heute steigt deshalb der allerletzte **Scram Cat Jam**: ein Video-Wettbewerb an der legendären **12-Stufen-Hubba** auf der Promenade von [[welten/popularia|Popularia]]. Wer bis Sonnenuntergang den besten 60-Sekunden-Clip bei Corey vom *Slugblaster Magazine* abgibt, landet auf dem Cover der Abschiedsausgabe.",
    "Die Crew muss aus Hillview raus (die übliche Dünnzone ist dicht), eine Line durch [[welten/vastiche|Vastiche]] und [[welten/prismatia|Prismatia]] fahren, in Popularia an ein Jam-Bändchen kommen, die Rivalen-Crew [[fraktionen/crews|BRB]] ausstechen und ihren Clip drehen."
  ],
  geheim: {
    t: "Was wirklich los ist",
    x: [
      "Miper-CEO **Tristen Voss** will die Übernahme mit einem Knall feiern: Bei Sonnenuntergang präsentiert er auf der Jam-Bühne **Miper Sauber®** – ein Hartlicht-Käfig mit Fangdrohnen, der „Slugblasting endlich sicher macht“.",
      "Für die Live-Vorführung hat ein Miper-Trupp in Prismatia ein echtes Monster eingefangen: [[monster|Sudsy]], das Seifenmonster (S. 124). Es schwappt in einem Tank in einem Laster hinter dem Scram-Cat-Laden. Babysitterin ist die unbezahlte Praktikantin **Robin**, die seit 31 Stunden nicht geschlafen hat.",
      "Sudsy wird von Schmutz angezogen. Und nichts ist schmutziger als eine Promenade voller verschwitzter Slugger, Pizzafett und Kids, die seit drei Welten durch Staub fahren. Das geht schief. Die Frage ist nur, wann – und ob die Crew dabei die Kamera laufen lässt."
    ]
  },
  run: {
    ziel: "Einen Clip an der 12-Stufen-Hubba drehen und bis Sonnenuntergang bei Corey abgeben.",
    preis: [
      ["Mega-Preis: Cover", "Der Gewinner-Clip kommt aufs Cover der Abschiedsausgabe: **5 Crew-Style** (Bonus) und die **Gunst von The Old Guard**."],
      ["Zeug", "Ken und Esther legen ein **Scram-Cat-Abschiedsboard** dazu (eins der letzten vor Miper) – oder 3 Bauteile."],
      ["Nebenbei", "Wer Sudsy stoppt, Robin hilft oder Miper bloßstellt, verändert Fraktionsstatus (siehe Heimweg)."]
    ],
    hind: [
      "**Kein Weg raus:** DARA testet an der Kiesgrube eine Zonensperre, und Doorways protestiert daneben.",
      "**Kein Bändchen, kein Slot:** Ohne Jam-Bändchen von Scram Cat darf niemand an die Hubba. Es gibt nur noch wenige.",
      "**Die Zeit läuft:** Abgabe bei Sonnenuntergang in Popularia. Wer trödelt, verpasst den Jam.",
      "**Rivalen:** BRB hat die besten Slots im Abendlicht schon reserviert."
    ],
    bite: "Mega-Preis = schwerer Run: Die SL startet mit **+2 Bite** zusätzlich zum Auffrischen (S. 145)."
  },
  vorbereitung: [
    "Druckt die Bögen aus oder nutzt die [[crew|Charakterbögen]] im Tool.",
    "Startet auf der [[folge|Folge-Tafel]] den Run und frischt auf: Boost und Kick voll, Bite = 1 pro Spieler **+2**.",
    "Lest **Was wirklich los ist** und den Eintrag zu [[monster|Sudsy]] (S. 124).",
    "Die Leisten startet ihr direkt aus den Szenen – sie erscheinen dann auch auf der Folge-Tafel."
  ],
  ablauf: [
    ["hillview", "Hillview", "Ankündigung · Zonensperre · Burn"],
    ["line", "Die Line", "Vastiche · Prismatia · Sudsys Spur"],
    ["popularia", "Popularia", "Scram Cat · Laster · Imani"],
    ["jam", "Der Jam", "Corey · BRB · der Clip"],
    ["finale", "Schaumalarm!", "Voss’ Show · Sudsy · Verfolgung"],
    ["heimweg", "Heimweg", "Peelback · Disaster · Hausarrest?"],
    ["downtime", "Downtime", "Coreys Urteil · Beats · Haken"]
  ],

  /* ---------- Leisten (ids = Schlüssel in ST.leisten) ---------- */
  leisten: {
    sonne:   {t: "Sonnenuntergang", art: "gefahr", typ: "uhr", n: 8, wann: "1 Feld bei jedem Jump Cut über längere Strecken, bei Umwegen und bei Problemen wie „das dauert“. Voll = die Abgabe schließt, Voss betritt die Bühne (→ Schaumalarm)."},
    tank:    {t: "Sudsys Tank", art: "gefahr", typ: "uhr", n: 6, wann: "1 Feld, wenn jemand am Laster herumfummelt, Robin gestresst wird, Dreck in die Nähe kommt oder du 1 Bite ausgibst. Voll = Sudsy bricht sofort aus (→ Schaumalarm)."},
    clip:    {t: "Der Clip", art: "fortschritt", typ: "uhr", n: 6, wann: "1 Feld pro gelandetem Trick an einem guten Spot unterwegs (Kick = mehr). Bestimmt Coreys Urteil in der Downtime."},
    hubbaC:  {t: "HUBBA – Crew", art: "gefahr", typ: "wort", wort: "HUBBA", wann: "Game of HUBBA gegen BRB: Jeder verpatzte Trick (1–3) der Crew = 1 Buchstabe."},
    hubbaB:  {t: "HUBBA – BRB", art: "fortschritt", typ: "wort", wort: "HUBBA", wann: "Jeder Trick der Crew, den BRB nachmachen muss und verpatzt = 1 Buchstabe für BRB."},
    sudsy:   {t: "Sudsy bändigen", art: "fortschritt", typ: "uhr", n: 8, wann: "Wirksame Aktionen gegen Sudsy: viel Wasser, Öl, Drohnen umprogrammieren, es ins Meer locken. Normale Laser bringen fast nichts."},
    schaum:  {t: "Promenade im Schaum", art: "gefahr", typ: "kasten", n: 5, wann: "Verfolgung: 1 Feld bei jedem langsamen Wegpunkt (1–3). Voll = Sudsy hat euch eingeholt."},
    peel:    {t: "Peelback", art: "gefahr", typ: "uhr", n: 4, wann: "Nur für Bananen (S. 93): 1 Feld bei großem Stress oder Bite. Voll = Rückschnappen nach Hillview."}
  },

  /* ---------- Figuren ---------- */
  nsc: [
    {id: "corey", t: "Corey", rolle: "Redakteur des *Slugblaster Magazine*, Jury", frak: ["old-guard", "The Old Guard"], p: 134,
      wesen: "alt/28, mürrisch, lebt und atmet Slugblasting", will: "Einen Clip mit Seele. Keine Werbung, keine Gimmicks, Respekt vor der Geschichte.", stimme: "Sitzt auf einem Rettungsschwimmer-Hochstuhl, Camcorder in der einen, Megafon in der anderen Hand. Sagt „Nee.“ öfter als alles andere.",
      zitat: "„Ich hab den ersten Burn in Popularia gesehen. Ihr müsst mich schon *überraschen*.“"},
    {id: "ken-esther", t: "Ken & Esther", rolle: "Geschwister, Mitinhaber von Scram Cat", frak: ["scram-cat", "Scram Cat"], p: 136,
      wesen: "Ken: naiv, optimistisch, komplett bekifft. Esther: resigniert, genervt, komplett bekifft.", will: "Ken: einen letzten schönen Tag. Esther: wissen, was Miper in dem brummenden Laster hinter ihrem Laden versteckt.", stimme: "Ken umarmt jeden. Esther antwortet auf jede Frage mit einer Gegenfrage.",
      zitat: "Ken: „Zwanzig Jahre, Leute! Zwanzig!“ – Esther: „Und morgen gehört das Schild einem Typen namens Tristen?“"},
    {id: "imani", t: "Imani", rolle: "Mipers Prüferin vor Ort", frak: ["miper", "Miper"], p: 136,
      wesen: "aufmerksam, datengetrieben, das kommt in ihren Bericht", will: "Eine saubere Übernahme ohne PR-Desaster. Sie ahnt, dass Voss’ Show ein Risiko ist, hat aber keine Beweise.", stimme: "Tippt beim Reden auf einem Tablet. „Interessant.“ heißt bei ihr „Ihr steckt in Schwierigkeiten.“",
      zitat: "„Bringt mir Fakten. Fotos, Videos, Seriennummern. Dann reden wir über Bändchen.“"},
    {id: "robin", t: "Robin", rolle: "Unbezahlte Miper-Praktikantin, Sudsys Babysitterin", frak: ["miper", "Miper"], p: 136,
      wesen: "verängstigt, überarbeitet", will: "Nicht gefeuert werden. Schlafen. Dass Sudsy nicht traurig ist (es schnurrt, wenn man es mit Lavendelseife füttert).", stimme: "Redet zu schnell, entschuldigt sich ständig, hält eine Gießkanne wie eine Waffe.",
      zitat: "„Bitte nicht klopfen! Es mag kein Klopfen! Es mag eigentlich nur Lavendel.“"},
    {id: "voss", t: "Tristen Voss", rolle: "Gefeierter Visionär und CEO von Miper", frak: ["miper", "Miper"], p: 136,
      wesen: "leidenschaftlich, arrogant, ehrgeizig", will: "Den perfekten Moment: Sonnenuntergang, Live-Stream, Miper Sauber® fängt ein Monster, Jubel.", stimme: "Rollkragen, Headset, Pausen für den Applaus. Benutzt „disruptiv“ als Kompliment.",
      zitat: "„Slugblasting. Aber sauber.“"},
    {id: "brb", t: "BRB", rolle: "Rivalen-Crew: brave, ehrgeizige Laserblader", frak: ["brb", "BRB"], p: 128, bild: "galerie/thumb/buch-s128-1351",
      wesen: "K-jump (Pfadfinderin, treibt sich selbst an) · Whiplash (loyal, alles ist ein Wettbewerb, schlechter Verlierer) · Bez (Noise-Cancelling-Kopfhörer, erfindet Tricks im Kopf)", will: "Den Jam gewinnen, mit Bestzeit, sauber und nach Plan. Sie mögen Scram Cat und The Old Guard, hassen gimmickhafte Stunts.", stimme: "Haben ein Klemmbrett mit Slot-Liste. Whiplash fordert alles und jeden heraus.",
      zitat: "Whiplash: „Game of HUBBA. Jetzt. Oder seid ihr nur zum Zugucken hier?“"},
    {id: "dara", t: "Officers Koop & Penner", rolle: "DARA-Raumzeit-Polizei in Hillview", frak: ["dara", "DARA"], p: 133,
      wesen: "tollpatschig, leicht zu provozieren, die Hosen rutschen beim Rennen", will: "Die neue experimentelle Zonensperre an der Kiesgrube testen, ohne dass Dr. Slate schimpft.", stimme: "Koop liest alles von einer Karteikarte vor. Penner isst dabei Sonnenblumenkerne.",
      zitat: "Koop: „Dieser Bereich ist … (blättert) … dimensional gesperrt. Bis auf Weiteres. Oder bis 18 Uhr.“"},
    {id: "doorways", t: "Karen & Jason", rolle: "Doorways-Elterngruppe", frak: ["doorways", "Doorways"], p: 135,
      wesen: "Karen: stur, wütend, irgendetwas stimmt nicht und niemand hört zu. Jason, der Jugendleiter: fröhlich, tiefe Überzeugung, „no cap, my homies“.", will: "Karen: dass DARA die Zone für immer zumacht. Jason: Gratis-Peelback-Kits loswerden und mit euch über Gefühle reden.", stimme: "Karen filmt alles hochkant. Jason macht Fingerpistolen.",
      zitat: "Jason: „Wenn ihr schon portalt, dann wenigstens mit Helm, my homies!“"},
    {id: "sudsy", t: "Sudsy", rolle: "Seifenmonster aus einem Industrieunfall in Prismatia", frak: null, p: 124, monster: "sudsy",
      wesen: "Hinterlässt ätzenden Schaum, schwillt zu wütendem Schaum an, angezogen von Schmutz, schrubbt, bis nichts als Knochen übrig sind.", will: "Dreck. Viel Dreck. Und Lavendel.", stimme: "Blubbert. Schnurrt, wenn es zufrieden ist. Quietscht wie nasse Turnschuhe, wenn es wütend wird.",
      zitat: "*blubb*",
      werte: ["Stürmt auf dich zu und schwillt zu wütendem Schaum an.", "Anfällig für Öl und große Mengen Wasser – kleine Mengen Wasser stärken es sogar.", "Tropft durch Risse, ergießt sich über Barrikaden.", "Durchnässt dich mit Reinigungsmittel: *glitschig, geblendet, verbrannt, ätzende Ausrüstung*.", "Treibt dich in wachsende Haufen dicken Schaums.", "Umhüllt dich vollständig und flieht dann irgendwohin, wo es in Ruhe schrubben kann."]}
  ]
};
