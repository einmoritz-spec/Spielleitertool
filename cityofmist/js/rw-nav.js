/* Grundregelwerk (Spieler:innen-Handbuch, DE) – Gliederung. p = gedruckte Buchseite (PDF-Seite − 2).
   Daten pro Abschnitt: js/data/regelwerk/<id>*.js (rwAdd), Dateiliste in rw-files.js (erzeugt mit tools/regelwerk/build_manifest.py). */
var CM_RW = {};
function rwAdd(id, arr){ (CM_RW[id]=CM_RW[id]||[]).push.apply(CM_RW[id],arr); }
var CM_RW_NAV = {
 tabs:[{id:"start",t:"Start"},{id:"welt",t:"Welt"},{id:"charakter",t:"Charakter"},{id:"regeln",t:"Regeln"},{id:"entwicklung",t:"Entwicklung"}],
 extra:[{id:"dokumente",t:"Dokumente"},{id:"spielbeispiel",t:"Spielbeispiel"}],
 secs:{
  welt:[{id:"einstieg",t:"Einstieg",p:2,pe:17},{id:"grundlagen",t:"Grundlagen",p:18,pe:33},{id:"bezirke",t:"Stadtbezirke",p:34,pe:39}],
  charakter:[{id:"serie",t:"Serienkonzept",p:40,pe:53},{id:"erschaffung",t:"Charaktererschaffung",p:54,pe:81},{id:"team",t:"Dein Team",p:144,pe:155},{id:"tag",t:"Ein Tag wie jeder andere",p:156,pe:161}],
  regeln:[{id:"kurzreferenz",t:"Kurzreferenz",p:162,pe:165},{id:"konversation",t:"Konversation",p:166,pe:171},{id:"aktionen",t:"Aktionen",p:172,pe:181},{id:"grundaktionen",t:"Grundlegende Aktionen",p:182,pe:197},{id:"cineastisch",t:"Cineastische Aktionen",p:198,pe:203},{id:"ressourcen",t:"Spielressourcen",p:204,pe:217},{id:"zustaende",t:"Zustände",p:218,pe:226},{id:"hinweise",t:"Hinweise & Momentum",p:227,pe:235},{id:"nebencharaktere",t:"Nebencharaktere",p:236,pe:239}],
  entwicklung:[{id:"entwicklung",t:"Charakterentwicklung",p:240,pe:260},{id:"krise",t:"Krise & Neuanfang",p:261,pe:269},{id:"avatar",t:"Avatar & Einschlafen",p:270,pe:281},{id:"extra",t:"Zusätzliche Themen",p:282,pe:295}],
  dokumente:[{id:"dokumente",t:"Dokumente",p:296,pe:301}],
  spielbeispiel:[{id:"spielbeispiel",t:"Spielbeispiel",p:302,pe:307}]
 },
 kapitel:[
  {t:"Einstieg",d:"Was man wissen muss, um loszulegen",p:8,tab:"welt",secs:["einstieg"]},
  {t:"1. Grundlagen",d:"Risse und die Stadt",p:18,tab:"welt",secs:["grundlagen","bezirke"]},
  {t:"2. Wer bist du?",d:"Wie man eine Geschichte erzählt",p:40,tab:"charakter",secs:["serie","erschaffung","team","tag"]},
  {t:"3. Ermittlungen",d:"Wie man das Spiel spielt",p:162,tab:"regeln",secs:["kurzreferenz","konversation","aktionen","grundaktionen","cineastisch","ressourcen","zustaende","hinweise","nebencharaktere"]},
  {t:"4. Augenblicke der Wahrheit",d:"Wie man seinen Charakter entwickelt",p:240,tab:"entwicklung",secs:["entwicklung","krise","avatar","extra"]},
  {t:"Anhang",d:"Spieler:innen-Dokumente und Spielbeispiel",p:296,tab:"dokumente",secs:["dokumente","spielbeispiel"]}
 ]
};
function rwSecInfo(id){ for(var t in CM_RW_NAV.secs){ var l=CM_RW_NAV.secs[t]; for(var i=0;i<l.length;i++) if(l[i].id===id) return {sec:l[i],tab:t}; } return null; }
