/* Schiffe · Schiffsgärten – Gartenbogen als Nachschlage-Abschnitt (S. 7, 9, 38). Daten stammen aus WS_GARTEN_BOGEN / WS_GARTEN_SAAT (schiffe-sg-daten.js davor laden). */
window.WS_NACH = window.WS_NACH || {}; WS_NACH.schiffe = WS_NACH.schiffe || [];
(function(L){ var K = "Schiffsgärten", Q = "sg", B = WS_GARTEN_BOGEN;
function tabelle(a){ return {tab:{k:["Wurf","Ergebnis","Wirkung"], z:a.map(function(r){ return [r.w, r.name, r.text]; })}}; }
L.push({id:"sg-bogen-nachschlagen", k:K, t:"Gartenbogen: Aufbau & Tabellen", p:38, q:Q, b:[
 {a:"Übersicht über den Gartenbogen (S. 38) mit allen Angaben, die er festhält. Erläuterungen dazu stehen auf S. 7, 9, 12 und 13."},
 {h:"Aufbau"},
 {l:["Notizen: freies Feld, lang genug für Projektleisten (etwa zum Selbstbau von Beeten und Nährböden).",
  "Beete: Platz für " + B.beete + " nummerierte Beete (Beet 1 bis 4), jedes mit Beet-Typ, Nährboden und Platz für Boni oder Nachteile dieser Kombination.",
  "Viertel: je Beet " + B.viertel + " Viertel (1/4 oben links, 2/4 oben rechts, 3/4 unten links, 4/4 unten rechts).",
  "Je Viertel: Pflanzenname, Typ, Wachstumsleiste (" + B.leiste.reihen + " Reihen zu je " + B.leiste.proReihe + " Kästchen, höchstens " + B.leiste.max + "), Marker und Details.",
  "Kästchen der Wachstumsleiste sind leer, markiert oder verbrannt."]},
 {h:"Saatarten und ihre Wirkung"},
 {tab:{k:["Marker","Zusätzliche Kästchen","Zusätzliche Viertel"], z:WS_GARTEN_SAAT.map(function(s){ return [s.name, s.leiste ? "+" + s.leiste : "–", s.viertel ? "+" + s.viertel : "–"]; })}},
 {h:"Gartenwurf (eine Pflanze pflegen)"},
 tabelle(B.gartenwurf),
 {h:"Ernte-Wurf (Beet)"},
 tabelle(B.ernteWurf),
 {h:"Zeit und Aufmerksamkeit"},
 {l:["Zeit: Markiere bei allen Pflanzen ein Kästchen auf der Wachstumsleiste, " + B.zeitMarkieren[0].charAt(0).toLowerCase() + B.zeitMarkieren[0].slice(1) + ", oder " + B.zeitMarkieren[1].charAt(0).toLowerCase() + B.zeitMarkieren[1].slice(1) + ".",
  "Aufmerksamkeit: " + B.aufmerksamkeit]},
 {box:"Fäulnis (optional, S. 13)", x:[B.faulen.replace(/^Optional \(S\. 13\): /, "")]}
]});
})(WS_NACH.schiffe);
