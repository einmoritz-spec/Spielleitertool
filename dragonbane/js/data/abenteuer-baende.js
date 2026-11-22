/* Abenteuer-Bände (Übersicht #abenteuer, Band-Seite #k/<band>). ab = Abenteuer-Ids (DB_AB[id], js/data/ab-<id>.js).
   einf = Einführung (Vorbereitungsseite): Blöcke wie DB_NACH ODER Abschnitte [{id,t,p,b:[Blöcke]}] (dann mit Seitenleiste). */
window.DB_AB = window.DB_AB || {};
window.DB_BAENDE = [
  {id:"rb", t:"Die Burg des Raubritters", buch:"db_rb", img:"abenteuer/burg", mul:1, ab:["burg"]},
  {id:"dk", t:"Das Geheimnis des Drachenkaisers", buch:"db_adv", img:"abenteuer/dk-titel", einf:[],
   ab:["dk-eroeffnung","aussenposten","nebeltal-reisen","ridderhoehe","bothild","purpurflamme","seufzer","orakel","trollspitze","totaugen","malus","vortag","wegesende","nebelinsel"]},
  {id:"st", t:"Der versinkende Turm", buch:"db_st", img:"abenteuer/turm-titel", ab:["turm"]},
  {id:"pg", t:"Pfad des Ruhms", buch:"db_pg", img:"abenteuer/pg-titel", einf:[], ab:["pg-wald","pg-tore","pg-herz"]}
];
window.DB_BAND = {};
DB_BAENDE.forEach(function(b){ DB_BAND[b.id] = b; });
