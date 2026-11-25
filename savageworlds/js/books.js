/* Savage Worlds – Bücher (Bookviewer). off = PDF-Seite minus Buchseite */
var SW_BUECHER = [
 {grp:"Regeln", items:[{id:"sw_de", name:"Abenteuer-Edition, 5. Auflage", lang:"DE", off:1}]},
 {grp:"Setting", items:[{id:"sw_dl", name:"Deadlands: The Weird West", lang:"EN", off:2}]},
 {grp:"Zusatz", items:[
  {id:"sw_fan", name:"Fantasy Companion", lang:"EN", off:2},
  {id:"sw_hor", name:"Horror Companion", lang:"EN", off:2},
  {id:"sw_sf", name:"Science Fiction Companion", lang:"EN", off:2},
  {id:"sw_sup", name:"Super Powers Companion", lang:"EN", off:2},
  {id:"sw_wb", name:"World Builder & Game Master’s Guide", lang:"EN", off:1}
 ]}
];
/* Genres: Schlüssel, Name, Buch-Kürzel, Akzentfarbe */
var SW_GENRES = [
 {id:"grw", t:"Grundregeln", book:"sw_de", c:"#a51f1a"},
 {id:"fan", t:"Fantasy", book:"sw_fan", c:"#3f6b2f"},
 {id:"hor", t:"Horror", book:"sw_hor", c:"#5b1616"},
 {id:"sf", t:"Science-Fiction", book:"sw_sf", c:"#0f6f86"},
 {id:"sup", t:"Superkräfte", book:"sw_sup", c:"#b3301c"}
];
