/* Vaesen – Regeln (Grundregelwerk Kap. 3, S. 37–48). Blöcke: {t:"p"|"ul"|"box"|"tbl"…} */
var VAE_REGELN = [
 {id:"probe", titel:"Fertigkeitsprobe", p:38, b:[
  {t:"p",x:"Fertigkeiten lassen dich schwierige Lagen meistern. Es gibt zwölf, jede gehört zu einem Attribut. Du addierst <b>Fertigkeitswert + Attributswert</b>; die Summe ist die Zahl der W6, die du wirfst. Jede <b>6</b> ist ein Erfolg – meist genügt ein einziger."},
  {t:"p",x:"Jeder Charakter darf jede Fertigkeit einsetzen, auch bei Wert 0 – dann würfelst du nur die Würfel des Attributs. Gleiches gilt für Handlungen, die keine eigene Fertigkeit abdeckt."},
  {t:"box",h:"Mittel und Zweck",x:"Sag vor dem Wurf, was dein Charakter tut und was er erreichen will. Die Spielleitung darf nachfragen oder das Ziel ändern, wenn es zu unrealistisch ist (z. B. einen Feind per MANIPULATION zum Selbstmord bringen)."},
  {t:"h",x:"Modifikatoren"},
  {t:"p",x:"Alles, was den Wurf beeinflusst, wird zusammengezählt: Ein Talent mit +2 und ein Vorteil mit +2 ergeben vier zusätzliche Würfel; ein Zustand zieht einen Würfel ab."},
  {t:"h",x:"Ein einziger Wurf"},
  {t:"p",x:"Pro Handlung gibt es <b>einen</b> Wurf für die ganze Situation – nicht einen je Teilschritt. Das Ergebnis kann lange nachwirken (Tage für Herstellen oder Heilen). Ausnahme ist der Kampf (Kap. 5)."},
  {t:"h",x:"Misslungene Proben"},
  {t:"p",x:"Etwas Nachteiliges oder Unerwartetes passiert. Die SL sagt vorher, was bei Misslingen droht. Bei besonders gefährlichen Proben erleidest du zusätzlich einen <b>Zustand</b> (gleiche Art wie die Fertigkeit, du wählst welchen). Manchmal wirst du sofort <b>Gebrochen</b>."},
  {t:"h",x:"Würfel erneut werfen (Wurf forcieren)"},
  {t:"p",x:"Nach einem Fehlwurf (oder auch Erfolg, um mehr Erfolge zu bekommen) kannst du <b>einmal pro Handlung</b> alle Würfel außer den Sechsen neu werfen. Dafür erleidest du <b>einen Zustand</b>: körperlich bei Physis/Präzision, geistig bei Logik/Empathie. Der Zustand wirkt erst nach dem Wurf – man kann dadurch Gebrochen werden."},
  {t:"h",x:"Die Geschichte muss weitergehen"},
  {t:"p",x:"Blockiert ein Fehlwurf den Spielfluss, kann die SL drei Mittel nutzen:"},
  {t:"ul",x:["<b>Folgen:</b> Du hast Erfolg, aber etwas anderes geht schief (die Info bekommst du, doch das Wesen hat dich in der Bibliothek bemerkt).","<b>Zustände:</b> Du erreichst dein Ziel, wählst aber einen Zustand (der Fels ist weg, du bist erschöpft).","<b>Anforderungen:</b> Du bekommst einen Teil; mehr erfordert mehr (die Info ist in einer fremden Sprache)."]},
 ]},
 {id:"schwierigkeit", titel:"Schwierigkeit & Hilfe", p:41, b:[
  {t:"tbl",head:["Schwierigkeit","Nötige Erfolge"],rows:[["Normal","1"],["Herausfordernd","2"],["Schwierig","3"]]},
  {t:"p",x:"<b>Gegenseitige Hilfe:</b> Jede helfende Person gibt +1 auf deine Probe, höchstens +3. Die SL entscheidet, ob die Hilfe wirklich nützt."},
  {t:"p",x:"<b>Parallele Handlungen</b> (alle schleichen gleichzeitig) können sich nicht helfen – jeder würfelt allein. Manche Fertigkeiten erlauben es, überzählige Erfolge an andere weiterzugeben."},
  {t:"p",x:"<b>Vorteil:</b> Du kannst deinen Vorteil einsetzen, um die Erfolgschance zu erhöhen – die SL muss erklären können, warum er hilft."},
  {t:"h",x:"Gegenwürfe"},
  {t:"p",x:"Versucht jemand, dich aufzuhalten, würfeln beide. Mehr Erfolge gewinnt; bei Gleichstand gibt es weder Erfolg noch Misserfolg. Gegen SCs dürfen beide forcieren; bleibt es gleich, einigt man sich auf einen <b>Kompromiss</b> – beide bekommen etwas, aber mit Preis."},
  {t:"h",x:"Erfolgschancen"},
  {t:"tbl",head:["Würfel","Chance","Mit Forcieren"],rows:[["1","17 %","31 %"],["2","31 %","52 %"],["3","42 %","67 %"],["4","52 %","77 %"],["5","60 %","84 %"],["6","67 %","89 %"],["7","72 %","92 %"],["8","77 %","95 %"],["9","81 %","96 %"],["10","84 %","97 %"]]},
 ]},
 {id:"zustaende", titel:"Zustände", p:40, b:[
  {t:"p",x:"Zustände entstehen beim Forcieren oder als Folge misslungener Proben. Es gibt zwei Arten:"},
  {t:"cols",x:[["Körperlich","Gehören zu <b>Physis</b> und <b>Präzision</b>.",["Erschöpft","Zerschlagen","Verwundet"]],["Geistig","Gehören zu <b>Logik</b> und <b>Empathie</b>.",["Wütend","Verängstigt","Hoffnungslos"]]]},
  {t:"p",x:"Jeder Zustand zieht <b>1 Würfel</b> bei allen Proben der betroffenen Art ab; Zustände <b>addieren sich</b>. Du würfelst aber immer mindestens einen Würfel."},
  {t:"box",h:"Gebrochen",x:"Hast du schon drei Zustände einer Art und erleidest einen vierten, bist du <b>Gebrochen</b>: schwer verletzt, vorübergehend wahnsinnig oder am Ende. Du kannst keine Handlungen ausführen und erleidest eine kritische Verletzung (S. 64)."},
 ]},
 {id:"fertigkeiten", titel:"Die zwölf Fertigkeiten", p:44, b:[{t:"skills"}]},
];
var VAE_ATTR = [
 {n:"Physis", c:"Körperliche Kraft und Konstitution", s:[["Beweglichkeit","Agility","Klettern, Ausweichen, Springen, Reiten, Balancieren, Schwimmen"],["Nahkampf","Close Combat","Kämpfen mit Fäusten, Messern, Äxten und anderen Nahkampfwaffen"],["Kraft","Force","Heben, Stoßen, Brechen, Ausdauer und rohe Gewalt"]]},
 {n:"Präzision", c:"Geschick und ruhige Hand", s:[["Heilkunde","Medicine","Wunden versorgen, Krankheiten erkennen, Gifte behandeln"],["Fernkampf","Ranged Combat","Schusswaffen, Bögen, Wurfwaffen"],["Heimlichkeit","Stealth","Schleichen, Verstecken, Taschendiebstahl, Schlösser öffnen"]]},
 {n:"Logik", c:"Verstand und Wissen", s:[["Nachforschung","Investigation","Spuren lesen, Hinweise finden, Zusammenhänge erkennen"],["Gelehrsamkeit","Learning","Wissen über Geschichte, Sprachen, Okkultes und Vaesen"],["Wachsamkeit","Vigilance","Wachsam sein, Gefahren spüren, nicht überrascht werden"]]},
 {n:"Empathie", c:"Menschenkenntnis und Ausstrahlung", s:[["Inspiration","Inspiration","Andere aufmuntern, anführen, begeistern und ermutigen"],["Manipulation","Manipulation","Überreden, Lügen, Bluffen, Einschüchtern"],["Beobachtung","Observation","Menschen lesen, Lügen erkennen, Details bemerken"]]}
];
