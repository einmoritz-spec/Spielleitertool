/* ==================================================================
   WÜRFEL- & ZUFALLSTOOL (2W6+Power-Wurf, Yes-But-Inspiration, Namen)
   ================================================================== */
// Reine GM-Hilfsmittel am Tisch, kein Bezug zu den Abenteuer-Daten.
// DICE_YES_BUT_TABLE: 20 generische, stimmungsneutrale Komplikations-
// Impulse (kein "richtiger" Zufallsgenerator im Buch — eigene, an den
// campaignweiten Complication-Mustern orientierte Sammlung, siehe die
// wiederkehrenden Complication-Optionen in den Challenge-Threats). Dient
// als Inspiration, wenn der Erzähler bei einem 7–9-Ergebnis ("Ja, aber…")
// oder einer Complication schnell einen Impuls braucht.
const DICE_YES_BUT_TABLE = [
  "Es gelingt — aber jemand Unbeteiligtes bemerkt, was gerade passiert ist.",
  "Es gelingt — aber ihr verliert dabei etwas Kleines, das euch später fehlen wird (streiche einen Gegenstands-Tag).",
  "Es gelingt — aber es dauert länger als gedacht (time-passes-1).",
  "Es gelingt — aber ihr werdet dabei getrennt (Complication).",
  "Es gelingt — aber ihr schuldet jemandem jetzt einen Gefallen.",
  "Es gelingt — aber ein lauter Nebeneffekt zieht unerwünschte Aufmerksamkeit an.",
  "Es gelingt — aber nur, wenn jemand ein Zugeständnis macht oder einen Tag opfert.",
  "Es gelingt — aber die Wahrheit kommt nur teilweise ans Licht; ein Detail bleibt verborgen.",
  "Es gelingt — aber ihr hinterlasst eine Spur, die später zurückverfolgt werden kann.",
  "Es gelingt — aber ein Verbündeter oder NSC gerät dadurch in eine unangenehme Lage.",
  "Es gelingt — aber der Erfolg fühlt sich falsch oder unvollständig an (ein Hero-Gefühl eurer Wahl).",
  "Es gelingt — aber ihr müsst euch zwischen zwei guten Optionen entscheiden, nicht beide.",
  "Es gelingt — aber jemand widerspricht eurer Version der Ereignisse.",
  "Es gelingt — aber ihr löst gleichzeitig eine kleinere, unabhängige Bedrohung aus.",
  "Es gelingt — aber der Preis wird erst später fällig (merkt euch das für eine spätere Szene).",
  "Es gelingt — aber nicht so vollständig, wie erhofft; eine Teilkomplikation bleibt bestehen.",
  "Es gelingt — aber ihr müsst dafür etwas Lautes, Auffälliges oder Riskantes tun.",
  "Es gelingt — aber ein wichtiges Detail stellt sich erst jetzt als falsch heraus.",
  "Es gelingt — aber eine dritte Partei erfährt zeitgleich davon und handelt selbst.",
  "Es gelingt — aber die Erleichterung ist nur von kurzer Dauer; ein neues Problem zeichnet sich sofort ab.",
];

// NAME_TABLE: eigene, an den Namenskonventionen der Kampagne orientierte
// Vorschlagsliste (pastoral-englisch/dalisch angehaucht, wie Willow,
// Kerrid, Verdan, Rosamund, Codprice) — KEINE Buchinhalte, rein erfunden
// als Schnellgriff für spontan benötigte NSC-Namen am Tisch.
const NAME_TABLE = {
  female: ["Aveline","Brynna","Ceridwen","Dawnie","Elswyth","Fenna","Gwynna","Hettie","Isolde","Jenna","Kessa","Lorwyn","Mirin","Nettle","Orla","Pell","Rowena","Sibbet","Tamsin","Wrenna"],
  male: ["Aldric","Berrin","Colm","Dunstan","Erwin","Farlan","Gareth","Hobb","Ivo","Jorik","Kester","Larken","Merrick","Nils","Oswin","Perrin","Reece","Sten","Torvin","Wystan"],
  neutral: ["Ash","Brae","Corvin","Dell","Emrys","Fen","Greer","Haven","Iris","Jay","Kell","Linden","Marren","Nyle","Orrin","Rue","Sage","Teal","Wren","Yarrow"],
  surname: ["Ashcombe","Barleycorn","Codprice","Cresswell","Fallowfield","Greybrook","Hollowmere","Longacre","Millhouse","Oakhollow","Pemberwick","Rushford","Stonewick","Thistlewick","Underhedge","Wickerly","Windham","Wrenfield","Yewgate","Coldmarsh"],
};
