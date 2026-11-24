/* Gemeinsame Daten-Container und Helfer. Abenteuerdateien rufen OS_ADV.push / OS_ADV_PART auf. */
var OS_ADV = [];
function OS_ADV_PART(id, sektionen){ const a = OS_ADV.find(x=>x.id===id); if(a) a.sektionen.push(...sektionen); }
