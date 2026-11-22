/* Karte (Paket B2): Pins in % des Bilds. Pins nur an im Buch beschrifteten Orten; ungefaehr = gestrichelt */
window.ES = window.ES || {};
ES.KARTE = {
 bilder:{pacifica:"es/karte-pacifica", route:"es/karte-route"},
 reise:[
  {id:"start", name:"San Francisco Memorial City", s:154, lab:"d", pin:{route:[16.7,21.4]}},
  {id:"engel", halt:"engel", name:"Der Engel in der Maschine", s:169, lage:"Vororte von Stockton im Central Valley.", pin:{route:[27.5,20.0]}},
  {id:"mord", halt:"mord", name:"Mord am Straßenrand", s:180, lage:"In den Bergen der Sierra Nevada.", ungefaehr:1, pin:{route:[43.6,4.6]}},
  {id:"drohnen", halt:"drohnen", name:"Drohnenschiff-Friedhof", s:191, lage:"Im Death Valley, in Sichtweite einer großen Festversammlung in der Wüste.", pin:{route:[82.0,48.4]}},
  {id:"ziel", name:"Grenzübergang Primm", s:154, pin:{route:[94.3,60.0], pacifica:[95.7,60.3]}}
 ],
 pacifica:[
  {id:"la", name:"Los Angeles", s:40, nach:"pacifica/k2b/los-angeles", pin:{pacifica:[67.2,90.0]}},
  {id:"sac", name:"Sacramento", s:40, nach:"pacifica/k2b/sacramento", pin:{pacifica:[36.4,7.5]}},
  {id:"sf", name:"San Francisco", s:42, nach:"pacifica/k2b/san-francisco", pin:{pacifica:[28.9,21.0]}},
  {id:"no", name:"Der Norden und Osten", s:42, nach:"pacifica/k2b/norden-osten"},
  {id:"ki", name:"Die Küste und die Inseln", s:43, nach:"pacifica/k2b/kueste-inseln"},
  {id:"bw", name:"Blackwelt-Sperrzone", s:46, nach:"pacifica/k2b/blackwelt", pin:{pacifica:[83.3,36.9]}}
 ]
};
