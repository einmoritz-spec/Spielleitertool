/* The Spire – Bereiche des Tools (Navigation, Burger-Menü, Startseite).
   Nachschlagen: SP_NACH_BEREICHE[id] = {t, buch, p, grp}; Bereiche mit gleichem grp teilen sich eine Tab-Leiste.
   Inhalte kommen später je Bereich in eigene Datendateien (plan/SPIRE_PLAN.md, Abschnitt 5) und hängen sich an window.SP_NACH[id]. */
window.SP_NACH_BEREICHE = {
  kurz:         {t:"Spire in Kürze",     buch:"qs",  p:1},
  welt:         {t:"Die Welt",           buch:"cmf", p:1},
  regeln:       {t:"Regeln",             buch:"cmf", p:9,   grp:"regeln"},
  kampf:        {t:"Kampf",              buch:"cmf", p:77,  grp:"regeln"},
  klassen:      {t:"Klassen",            buch:"cmf", p:25,  grp:"klassen"},
  extra:        {t:"Extra-Fortschritte", buch:"cmf", p:69,  grp:"klassen"},
  fertigkeiten: {t:"Fertigkeiten",       buch:"cmf", p:17,  grp:"klassen"},
  ausruestung:  {t:"Ausrüstung",         buch:"cmf", p:19,  grp:"klassen"},
  bindungen:    {t:"Bindungen",          buch:"cmf", p:23,  grp:"klassen"},
  spielleitung: {t:"Spielleitung",       buch:"cmf", p:173},
  mg:           {t:"Magister's Guide",   buch:"gm",  p:4},
  goetter:      {t:"Neue Götter",        buch:"cmf", p:183, grp:"anhang"},
  anhang:       {t:"Anhänge",            buch:"cmf", p:205, grp:"anhang"}
};
/* Startseite, Block „Vorbereitung“ (Entwurf 1): Kachelbild nur als Ausschnitt im Kachelkopf */
window.SP_KACHELN = [
  {t:"Regeln",                      s:"Kernmechanik · Stress · Fallout · Kampf",                 buch:"cmf", p:9,   img:"kapitel/regeln-S012",          pos:"center 30%", go:"nach/regeln"},
  {t:"Fertigkeiten und Ausrüstung", s:"Domänen · Kniffe · Tags · Bindungen",                     buch:"cmf", p:17,  img:"kapitel/ausruestung-S020",     pos:"center 30%", go:"nach/fertigkeiten"},
  {t:"Buch der Masken",             s:"22 Masken · Fortschritte · Ausrüstung",                   buch:"z1",  p:null, img:"masken/titel",               pos:"center 35%", go:"masken"},
  {t:"Klassen",                     s:"10 Klassen · Extra-Fortschritte · Dienstzeit",                 buch:"cmf", p:25,  img:"klasse/azurite",               pos:"center 20%", go:"nach/klassen"},
  {t:"Spire in Kürze",              s:"Die Regeln aus dem Quickstart",                           buch:"qs",  p:1,   img:"titel/qs-cover",               pos:"center 60%", go:"nach/kurz"},
  {t:"Spielleitung",                s:"Revolution · Schwierigkeit · Schurken · Magie",           buch:"cmf", p:173, img:"kapitel/spielleitung-S180",    pos:"center 25%", go:"nach/spielleitung"},
  {t:"Magister's Guide",            s:"Freiheit · Beats · Erwerbungen · Unterschlupf",           buch:"gm",  p:4,   img:"kapitel/mg-unterschlupf-S016", pos:"center 30%", go:"nach/mg"},
  {t:"Götter und Anhänge",          s:"Neue Götter · Drow-Glossar",                              buch:"cmf", p:183, img:"gott/luxulyan",                pos:"center 30%", go:"nach/goetter", folgt:1}
];
/* Startseite, Block „Losschlagen“: die vier Spielbereiche (= Haupt-Tabs) */
window.SP_SPIEL = [
  {id:"zelle",  t:"Die Zelle", tab:"Zelle",  s:"Stress · Fallout · Bindungen", buch:"cmf", p:11, img:"kapitel/zwischen-klassen-extra-S068", pos:"center 40%"},
  {id:"stadt",  t:"Die Stadt", tab:"Stadt",  s:"Karte · Domänen · Distrikte", buch:"cmf", p:81, img:"kapitel/welt-S004", pos:"center 35%"},
  {id:"gegner", t:"Gegner",    tab:"Gegner", s:"Werteblöcke · Begegnungen", buch:"cmf", p:77, img:"kapitel/kampf-S078", pos:"center 30%"},
  {id:"zufall", t:"Zufall",    tab:"Zufall", s:"W10-Tabellen für die Straße", buch:"cmf", p:200, img:"kapitel/zwischen-hoch-nieder-S116", pos:"center 45%"}
];
/* Abenteuer (Leitstand folgt in spire/js/abenteuer.js) */
window.SP_ABENTEUER = window.SP_ABENTEUER || {};
SP_ABENTEUER.snuff = {t:"Snuff Out the Sun", buch:"qs", p:18, bis:24, img:"abenteuer/snuff-titel",
  k:"Die Sonnenkirche, geliebt von den erobernden Aelfir, bereitet die rituelle Hinrichtung ihres derzeitigen Erzbischofs vor …",
  q:["Quickstart", "S. 18–24", "6 vorgefertigte Figuren"]};
/* Revolution (S. 175 ff.) */
window.SP_REVOLUTION = {p:175, stufen:["Aufziehender Sturm", "Der Schlag", "Die Folgen"]};
