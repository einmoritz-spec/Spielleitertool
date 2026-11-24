/* Regel-Nachschlagewerk (Metro-Grundbuch), eigene deutsche Kurzfassung nach Themen. Seiten = Buchseiten. */
var OS_REGELN = [
 {id:"szene", titel:"Szenenablauf", seite:76, bloecke:[
  {t:"liste", items:["**Einrichten:** SL beschreibt Ort, Einsatz und Challenges, kündigt Threats an, gibt das Spotlight weiter („Was tust du?“).","**Aktion:** Spieler:in erzählt die Aktion. Dramatisch und ungewiss → Wurf. Wenn der Grad des Erfolgs zählt → Effects wählen.","**Consequences:** bei Miss, gemischtem Treffer oder ignorierter Threat. Betroffene dürfen oft mit einem Wurf abschwächen (Mitigate)."]},
  {t:"liste", items:["**Quick:** nur Wurf, ein Treffer überwindet die Challenge.","**Tracked:** nach dem Treffer Power auf Status-Tiers ausgeben, bis das Limit erreicht ist."]}
 ]},
 {id:"wurf", titel:"Wurf & Power", seite:87, bloecke:[
  {t:"p", x:"**2W6 + Power.** Power = hilfreiche Tags (+1 je Tag), hindernde Tags (−1 je Tag), bester positiver Status (+Tier), schlechtester negativer Status (−Tier), dazu Scale-Unterschied."},
  {t:"tabelle", kopf:["Summe","Ergebnis"], zeilen:[["10+","Voller Treffer"],["7–9","Gemischter Treffer, Consequences"],["6 oder weniger","Miss"]]},
  {t:"liste", items:["Nur relevante Tags zählen, Entscheidung liegt bei der SL.","**Keine Doppelnutzung:** ein Tag zählt nur einmal je Aktion und Abschwächung.","**Schlangenaugen (1+1)** sind immer ein Miss, **Boxcars (6+6)** immer ein Treffer mit 10+, egal wie hoch die Power ist.","Von allen Status zählen nur der beste positive und der schlechteste negative."]}
 ]},
 {id:"effects", titel:"Effects (Tabelle)", seite:91, bloecke:[
  {t:"tabelle", kopf:["Gruppe","Effect","Wirkung","Kosten"], zeilen:[
   ["Gegner","Attack","Ziel bekommt schädlichen Status","1 / Tier"],
   ["Gegner","Disrupt","Ziel bekommt hinderndes Tag oder Status","1 / Tier · 2 / Tag"],
   ["Gegner","Influence","Ziel bekommt zwingenden Status","1 / Tier"],
   ["Gegner","Weaken","Nützlichen Tag oder Status des Ziels entfernen","1 / Tier · 2 / Tag"],
   ["Selbst / Verbündete","Bestow","Neue Fähigkeit per Tag","2 / Tag"],
   ["Selbst / Verbündete","Create","Neues Objekt oder Wesen per Tag","2 / Tag"],
   ["Selbst / Verbündete","Enhance","Hilfreicher Status","1 / Tier"],
   ["Selbst / Verbündete","Restore","Schädlichen Status senken oder verbrannten Power-Tag zurückholen","1 / Tier · 2 / Tag"],
   ["Prozess","Advance","Fortschritts-Status erhöhen","1 / Tier"],
   ["Prozess","Set Back","Fortschritts-Status senken","1 / Tier"],
   ["Sonstiges","Discover","Wertvolles Detail erfahren","1 / Detail"],
   ["Sonstiges","Extra Feat","Zusätzliche Kleinigkeit in der Aktion","1 / Feat"]]},
  {t:"liste", items:["Nur Treffer (10+ oder 7–9) erlauben Effects.","Bei 10+ darf man Consequences annehmen und so +1 Power erhalten.","Effects müssen zur erzählten Aktion passen.","Standard: ein Ziel in Menschengröße, mehr verlangt Scale."]}
 ]},
 {id:"tags", titel:"Tags & Status: was wann", seite:93, bloecke:[
  {t:"liste", items:["**Story-Tag:** Ding, Wesen oder Eigenschaft (Schwert, Leibwächter, Nachtsicht). Zählt immer +1 und bleibt.","**Status:** vorübergehender Zustand mit Tier (verwundet-3, hinter-Deckung-2). Eignet sich für Limits und Abschwächen.","Liegt der Fokus auf dem Ding → Tag, auf dem Zustand daraus → Status.","Status überwinden Challenges, Tags helfen nur."]}
 ]},
 {id:"status", titel:"Status, Tiers & Limits", seite:104, bloecke:[
  {t:"tabelle", kopf:["Tier","Stärke"], zeilen:[["1","Leicht"],["2","Gering"],["3","Deutlich"],["4","Dramatisch"],["5","Kampfunfähig"],["6","Tödlich oder dauerhafte Verwandlung"]]},
  {t:"liste", items:["**Stapeln:** derselbe Status, der erneut erzielt wird, bekommt eine weitere Markierung: Wounded-4 + Wounded-4 = Wounded-5.","**Limit:** Höchst-Tier einer Figur oder Challenge, bei PCs standardmäßig 5. Wird das Limit erreicht, ist sie vorübergehend überwunden; wird es überschritten, dauerhaft. Tier 6 ist immer dauerhaft.","Challenges würfeln keine Power: ihre Status verändern die Power der Spieleraktionen gegen sie."]}
 ]},
 {id:"consequences", titel:"Consequences & Abschwächen", seite:98, bloecke:[
  {t:"liste", items:["**Erzählerisch:** Situation verschärfen, neue Challenge, etwas Gewünschtes verwehren, Zukunft trüber machen.","**Mit Effects:** Status geben, Tags brennen oder entfernen, Challenges stärken, Prozesse vorantreiben.","Erzählerische Consequences lassen sich nicht abschwächen."]},
  {t:"h", x:"Mitigate (Wurf zum Abschwächen)"},
  {t:"tabelle", kopf:["Wurf","Ergebnis"], zeilen:[["6−","Voller Effekt trifft"],["7–9","Power ausgeben zum Abschwächen"],["10+","+1 Power und Reaktive Effects"]]},
  {t:"liste", items:["1 Power blockt einen Tier des eingehenden Status, 2 Power blocken einen Tag.","Tags der auslösenden Aktion zählen nicht doppelt."]}
 ]},
 {id:"loadout", titel:"Loadout", seite:114, bloecke:[
  {t:"liste", items:["Loadout ist das fünfte Theme. Alle Tags starten verbrannt.","**Load Up:** vor dem Job 1 Power sammeln, 1 Power zum Laden und 1 Power pro Tag.","**Load Off:** nach dem Job verbrennen alle übrigen Loadout-Tags.","Gegenstände dürfen in der Downtime getauscht werden, wenn sie nicht maßgeschneidert sind.","Neue Tags kommen durch Beute oder Kataloge ins Loadout."]}
 ]},
 {id:"scale", titel:"Scale", seite:118, bloecke:[
  {t:"tabelle", kopf:["Scale","Größe","Anzahl"], zeilen:[["0","Mensch","Einer"],["1","Raum","Wenige"],["2","Haus","Mehrere"],["3","Hochhaus","Viele"],["4","Block","Masse"]]},
  {t:"liste", items:["PCs haben Scale 0, die Crew Scale 1.","Jede Stufe Scale-Vorsprung der Challenge: −1 Power für dich, ihre Status +1 Tier.","Gleiches gilt für Aktionen, die mehr als ein Ziel betreffen."]}
 ]},
 {id:"power", titel:"Power-Optionen", seite:121, bloecke:[
  {t:"liste", items:["**Burn:** einen positiven Tag vor dem Wurf verbrennen, er zählt +3 statt +1. Pro Aktion darf nur ein positiver Tag verbrannt werden.","**Self / Mythos / Noise:** passt die Aktion zu einer Themen-Art, zählt die Zahl der Themes dieser Art.","**Go Out In A Blaze:** Opfer verlangt Theme-Tags oder ein Theme für ein großes Ziel.","**Reaktive Effects:** bei 10+ im Abschwächen zusätzlich Gefährten schützen, Energie absorbieren oder einen Extra Feat nutzen."]}
 ]},
 {id:"downtime", titel:"Downtime", seite:124, bloecke:[
  {t:"liste", items:["Jede Person wählt: **3 Power** für Effects (ohne Wurf) oder ein **Upgrade-Kästchen**.","Restore verbrannter Tags kostet in der Downtime 1 Power pro Szene.","Typische Wahl: Vorbereiten (Bestow, Create, Enhance), Zeit mit jemandem (Bestow, Disrupt), Recherche (Discover).","Danach Load Up und neue Szene."]}
 ]}
];
