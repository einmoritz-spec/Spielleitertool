/* The Spire – Bücher (Bookviewer). PDF-Seite = Buchseite + off. Die drei ersten sind eingebaut, die übrigen werden später ergänzt.
   pre = Vorsatz der Seitenangabe („MG S. 12“), img = Cover (sonst img/cover/<id>, wenn cover:true), abenteuer = Platzhalter auf der Startseite. */
var SP_BUECHER = [
 {grp:"Regeln", items:[
  {id:"sp_cmf", name:"The City Must Fall", lang:"EN", off:5, sub:"Grundregelwerk", pre:"", core:true, img:"titel/cmf-cover"},
  {id:"sp_gm", name:"Magister's Guide", lang:"EN", off:0, sub:"Spielleiterbuch", pre:"MG ", core:true, img:"titel/gm-cover"},
  {id:"sp_qs", name:"Quickstart", lang:"EN", off:1, sub:"Schnellstart", pre:"QS ", core:true, cover:true}]},
 {grp:"Setting", items:[
  {id:"sp_s1", name:"Sourcebook: Sin", lang:"EN", off:0, pre:"Sin ", cover:true},
  {id:"sp_s2", name:"Sourcebook: Strata", lang:"EN", off:5, pre:"Strata ", cover:true},
  {id:"sp_s3", name:"Blood and Dust", lang:"EN", cover:true, abenteuer:"Blood and Dust"}]},
 {grp:"Abenteuer", items:[
  {id:"sp_a1", name:"Campaign Frame: The Kings of Silver", lang:"EN", off:2, pre:"KoS ", cover:true, abenteuer:"The Kings of Silver"},
  {id:"sp_a2", name:"Eidolon Sky", lang:"EN", off:2, pre:"ES ", cover:true, abenteuer:"Eidolon Sky"}]},
 {grp:"Zusatz", items:[
  {id:"sp_z1", name:"Book of Masks", lang:"EN", cover:true},
  {id:"sp_z2", name:"Sourcebook: Codex of the Deep Spire", lang:"EN", off:2, pre:"Codex ", cover:true},
  {id:"sp_z3", name:"Sourcebook: Shadow Operations", lang:"EN", off:2, pre:"SO ", cover:true},
  {id:"sp_z4", name:"Sourcebook: Black Magic", lang:"EN", off:2, pre:"BM ", cover:true},
  {id:"sp_z5", name:"Sourcebook: Secrets Kept from the Sun", lang:"EN", off:2, pre:"SKS ", cover:true}]},
 {grp:"Material", items:[{id:"sp_m1", name:"Maps", lang:"EN"}]}
];
