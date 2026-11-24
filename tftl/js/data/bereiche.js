/* Bereiche (Tales from the Loop, Things from the Flood, The Electric State): Tabs, Logos, Bücher */
window.BEREICHE = {
  tftl: {
    cls: "", title: "Tales from the Loop",
    tabs: [["start","Vorbereitung"],["mysterien","Mysterien"],["kids","Kids"],["karte","Karte"]],
    werkzeuge: [["bogen","Charakterbogen"],["galerie","Galerie"]],
    books: ["tftl_core","tftl_a1","tftl_a2","tftl_a3","tftl_a4","tftl_z1"]
  },
  flood: {
    cls: "flood", title: "Things from the Flood", logo: "assets/logos/things-from-the-flood.webp", logoW: 252, logoH: 26,
    werkzeuge: [["bogen","Charakterbogen"],["galerie","Galerie"]],
    tabs: [["start","Vorbereitung"],["mysterien","Mysterien"],["kids","Teens"],["karte","Karte"]],
    books: ["tftl_flood"]
  },
  es: {
    cls: "es", title: "The Electric State", logo: "assets/logos/electric-state.webp", logoW: 54, logoH: 36,
    tabs: [["start","Vorbereitung"],["reise","Reise"],["reisende","Reisende"],["karte","Karte"]],
    nach: [["welt","Willkommen","es/w-welcome","Willkommen im Electric State"],["pacifica","Pacifica","es/w-pacifica","Der Staat Pacifica"],["reisende","Reisende","es/w-reisende","Deine Reisenden"],["kampf","Kampf & Neuronik","es/w-kampf","Kampf & Neuronik"],["reise","Die Reise","es/w-reise","Die Reise"],["bedrohungen","Bedrohungen","es/w-bedrohungen","Bedrohungen"]],
    werkzeuge: [["bogen","Charakterbogen"],["fahrzeug","Fahrzeugbogen"],["galerie","Galerie"]],
    books: ["tftl_es"]
  }
};
window.NACH = [["welt","Die Welt","w-welcome","Willkommen im Loop"],["loops","Loops"],["kids","Kids","w-kids","Die Kids"],["aerger","Ärger","w-trouble","Ärger"],["mysterium","Das Mysterium","w-mystery","Das Mysterium"],["landschaft","Mystery-Landschaft","w-landscape","Mystery-Landschaft"],["schirm","Spielleiterschirm"]];
