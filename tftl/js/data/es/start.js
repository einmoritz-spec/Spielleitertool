/* The Electric State – Vorbereitung (Kacheln, Chips, Reise-Block) */
window.ES = window.ES || {};
ES.NACHSETS = {welt:["k1"], pacifica:["k2a","k2b"], reisende:["k3"], kampf:["k4a","k4b"], reise:["k5a","k5b"], bedrohungen:["k6"]};
ES.START = {
  hero: "es/hero",
  welt: [
    ["Willkommen im Electric State","Das Spiel · Die Reise · Würfeln · Prinzipien","Kap. 1 · S. 6","es/w-welcome","nach/welt"],
    ["Der Staat Pacifica","Wie es dazu kam · Neuronik · Pacifica · Konzerne · Nachbarn","Kap. 2 · S. 19","es/w-pacifica","nach/pacifica","center 60%"],
    ["Bedrohungen","Gewalttätige · Manipulative · Technologische · Umwelt · Persönliche","Kap. 6 · S. 134","es/w-bedrohungen","nach/bedrohungen"]
  ],
  spiel: [
    ["Deine Reisenden","Archetypen · Attribute · Gesundheit & Hoffnung · Spannung","Kap. 3 · S. 49","es/w-reisende","nach/reisende"],
    ["Kampf & Neuronik","Zonen · Schaden · Neurocasten · Drohnen · Fahrzeuge","Kap. 4 · S. 76","es/w-kampf","nach/kampf"],
    ["Die Reise","Reise planen · Halte vorbereiten · Halt spielen","Kap. 5 · S. 110","es/w-reise","nach/reise","center 30%"]
  ],
  chips: [["Charakterbogen","bogen",1],["Fahrzeugbogen","fahrzeug"],["Karte von Pacifica","karte/pacifica"],["Galerie","galerie"]],
  reise: {name:"Into the Dust", s:152, bild:"es/r-dust", halte:["engel","mord","drohnen"],
    halteNamen:{engel:"Der Engel in der Maschine", mord:"Mord am Straßenrand", drohnen:"Drohnenschiff-Friedhof"},
    halteBild:{engel:["es/h-engel","center 25%"], mord:["es/h-mord","center"], drohnen:["es/h-drohnen","center 40%"]},
    start:"San Francisco Memorial City", ziel:"Grenzübergang Primm",
    zahl:"Into the Dust · Kap. 7 · S. 152 · 3 Halte · 6 Begegnungen"}
};
