/* Mörk Borg – Bibliothek (Startseite). status: "bereit" (deutsch im Tool, route) | "pdf" (nur Original, Bookviewer-Id buch). */
MB_BUECHER.push(
 {grp:"Abenteuer", items:[{id:"mb_tco", name:"Tragic Castle Obsession", lang:"EN", off:0},{id:"mb_adv", name:"Adventures", lang:"EN", off:0},{id:"mb_ddg", name:"NiG Demon Dog", lang:"EN", off:0}]},
 {grp:"Zusatz", items:[{id:"mb_z1", name:"Cult Heretic", lang:"EN", off:0},{id:"mb_z2", name:"Cult Feretory", lang:"EN", off:0},{id:"mb_z3", name:"Solitary Depths", lang:"EN", off:0},{id:"mb_z4", name:"Vast Grimm", lang:"EN", off:0},{id:"mb_z5", name:"Porkin the Void", lang:"EN", off:0},{id:"mb_z6", name:"Gutter PVNKS", lang:"EN", off:0},{id:"mb_z7", name:"Innistrad x Mörk Borg", lang:"EN", off:0},{id:"mb_z8", name:"Forbidden Psalm", lang:"EN", off:0},{id:"mb_z9", name:"Forbidden Psalm Rotten Bits", lang:"EN", off:0},{id:"mb_z10", name:"Book of Misery", lang:"EN", off:0},{id:"mb_z11", name:"Box of Shadows", lang:"EN", off:0}]},
 {grp:"Material", items:[{id:"mb_m2", name:"Cy Map", lang:"EN", off:0}]},
 {grp:"Hacks", items:[{id:"mb_h1", name:"Ronin", lang:"EN", off:0},{id:"mb_h2", name:"Bork Borg", lang:"EN", off:0},{id:"mb_h3", name:"Dukk Borg", lang:"EN", off:0},{id:"mb_h4", name:"Orc Borg", lang:"EN", off:0},{id:"mb_h5", name:"Fisk Borg", lang:"EN", off:0},{id:"mb_h6", name:"Star Borg", lang:"EN", off:0},{id:"mb_h7", name:"Blood Borg", lang:"EN", off:0},{id:"mb_h8", name:"Cy_Borg", lang:"EN", off:0}]}
);
var MB_BIB = {
 abenteuer:[
  {t:"Rotblack Sludge", sub:"Grundregelwerk · S. 73", bild:"abenteuer/rotblack-karte", status:"bereit", route:"abenteuer"},
  {t:"Adventures", sub:"Sammelband", bild:"cover/mb_a1", status:"pdf", buch:"mb_adv"},
  {t:"Tragic Castle Obsession", typo:"Tragic Castle", status:"pdf", buch:"mb_tco"},
  {t:"Demon Dog", typo:"Demon Dog", status:"pdf", buch:"mb_ddg"}
 ],
 zusatz:[
  {t:"Book of Misery", f:"y", g:"big", buch:"mb_z10"},{t:"Cult Heretic", f:"k", buch:"mb_z1"},{t:"Cult Feretory", f:"w", buch:"mb_z2"},{t:"Box of Shadows", f:"p", g:"wide", buch:"mb_z11"},
  {t:"Forbidden Psalm", f:"k", g:"wide", buch:"mb_z8"},{t:"Rotten Bits", f:"w", sub:"Forbidden Psalm", buch:"mb_z9"},{t:"Vast Grimm", f:"y", buch:"mb_z4"},
  {t:"Porkin the Void", f:"p", buch:"mb_z5"},{t:"Solitary Depths", f:"k", g:"wide", buch:"mb_z3"},{t:"Innistrad × Mörk Borg", f:"w", g:"wide", sub:"Ausrüstung", buch:"mb_z7"},{t:"Gutter PVNKS", f:"y", sub:"Cy_Borg", buch:"mb_z6"}
 ],
 hacks:[
  {t:"Cy_Borg", c:"h1", buch:"mb_h8"},{t:"Ronin", c:"h2", buch:"mb_h1"},{t:"Bork Borg", c:"h3", buch:"mb_h2"},{t:"Orc Borg", c:"h4", buch:"mb_h4"},
  {t:"Fisk Borg", c:"h5", buch:"mb_h5"},{t:"Star Borg", c:"h6", buch:"mb_h6"},{t:"Blood Borg", c:"h7", buch:"mb_h7"},{t:"Dukk Borg", c:"h8", buch:"mb_h3"}
 ],
 material:[{t:"Charakterbogen", buch:"mb_m1"},{t:"Cy-Karte", buch:"mb_m2"}]
};
