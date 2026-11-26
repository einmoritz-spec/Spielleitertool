/* Playwall › K (S. 234–235). Im Buch sind große Teile blau geschwärzt; der darunterliegende Text steht hier wortweise wie im Buch:
   Stellen zwischen § § sind geschwärzt (Klick deckt auf), der Rest steht offen. */
var TA_PWT = window.TA_PWT || (window.TA_PWT = {});

function pwkS(s, c){
  var h = s.split("§").map(function(t, i){ return !t ? "" : i % 2 ? "<span>" + tx(t) + "</span>" : tx(t); }).join("");
  return {t:"html", x:'<p class="schwarz blau pwk-s' + (c ? " " + c : "") + '" onclick="this.classList.toggle(\'auf\')">' + h + '</p>'};
}

TA_PWT.K1 = {art:"dunkel", bild:"playwall-k1-aktenkoffer", t:"Der Anormale Aktenkoffer", s:234, b:[
 {t:"html", x:'<i class="pwk-marke"></i>'},
 pwkS("§Obwohl er nur schlecht verstanden wird, erfüllt§ der Anormale Aktenkoffer §zuverlässig alle§ Funktionen §des§ Normalen Aktenkoffers §und kann eine unglaubliche Erfolgsbilanz vorweisen.§ Gestützt §von Chitinpanzerung und dumpfem Bewusstsein, musst du ihn jedes Mal füttern,§ nachdem du Belohnungen für den Fang einer Anomalie beansprucht hast. §Entweder mit Steak, einer§ von diesem Aktenkoffer festgesetzten §Anomalie oder gezieltem Lob.§ Du darfst seine verborgene Fähigkeit §aktivieren, indem du eine Losung sprichst:§ Tust du §das nicht,§ bietet er der Anomalie §eine sichere Zelle. Es gibt keine§ verborgene Hintertür, §durch die sie§ aus dem Vault entkommen könnte, ohne §irgendeine§ Spur zu hinterlassen. Du darfst diese Fähigkeit jederzeit auslösen, §sogar als Reaktion auf Handlungen, die voraussetzen, dass sich die Anomalie im Vault befand,§ aber nur einmal in deiner Laufbahn. Tust du es, gilt sie für alle Spieleffekte von da an als Entkommen. §Das einzigartige Resonanzmuster der Anomalie bedeutet, dass§ ihr Entkommen nicht §zu vermeiden ist; es wird§ auf dich zurückgeführt."),
 pwkS("Er ist außerdem ein stilvolles Haustier für Agenten, die geschickt darin sind, Lose Enden niedrig zu halten. Da er jedoch §nicht§ echt ist, erhältst du 1 Verweis für das Lesen dieser Seite und solltest deinen General Manager entsprechend benachrichtigen.")
]};

/* Fähigkeitskasten von S. 235: Kopf (geschwärzt) mit $-Zeichen, darunter ein Muster-Bogen */
function pwkFeld(kopf, auf, ueb){
  return '<div class="pwk-fb">' + pwkS(kopf, "pwk-fett").x + (auf || "") +
    '<div class="pwh-bogen" style="--r:' + (ueb ? 1.4 : -1.4) + 'deg"><div class="pwh-kopf"><div><span class="pwh-linie"></span><span class="pwh-linie"></span></div>' +
    '<div class="pwh-gs"><div>Geübt? <i>' + (ueb ? "X" : "") + '</i></div><div>Seite <u></u></div></div></div>' +
    [0, 1].map(function(){ return '<p class="pwh-a"><span><span class="pwh-linie" style="margin:8px 0 4px"></span></span><span class="pwh-k"><i></i><i></i><i></i></span><b class="pwh-co">__</b></p>'; }).join("") + '</div></div>';
}

TA_PWT.K2 = {t:"Anomalie-Fähigkeiten", s:235, b:[
 pwkS("Alle Agenten §sind Resonanten, das heißt, sie sind alle mit einer einzigartigen Anomalie verbunden. Diese Anomalien§ haben §genau drei für den Einsatz im Außendienst zugelassene§ Fähigkeiten, §und alle haben einige Eigenschaften gemeinsam, die wir hier umreißen§."),
 {t:"sp", x:[
  [pwkS("Solange du angestellt bist, §können wir von§ der Agency §deine Persönlichkeit dominant und deine Gestalt stabil halten. Wir§ beschränken den Einsatz deiner persönlichen Anomalie §auf bestimmte Fähigkeiten,§ weil §du ohne unsere Hilfe schnell von deiner eigenen§ Kraft überwältigt würdest."),
   {t:"klein", x:"**GM:** Eine Schar Diebe?"}],
  [pwkS("§Dein GM wird§ diesen Bericht prüfen §und eine Note vergeben, die die Leistung deines Außenteams anzeigt. Superlative§ werden erklärt, nachdem dein erster Einsatz abgeschlossen ist.")]
 ]},
 {t:"sp", x:[
  [{t:"html", x:pwkFeld("Fähigkeiten §erfordern einen Auslöser oder Kosten, die eintreten§ müssen, §bevor sie§ eingesetzt werden können.",
      pwkS("Öffne dein §inneres§ Auge …", "pwk-auf").x + pwkS("§Schüttle jemandes Hand …§", "pwk-auf pwk-kurz").x + pwkS("§Wenn dir jemand etwas wegnehmen will …§", "pwk-auf pwk-kurz").x, 0)}],
  [{t:"html", x:pwkFeld("Fähigkeiten §erfordern einen Auslöser oder Kosten, die eintreten müssen, bevor sie§ eingesetzt werden können.", "", 1)},
   pwkS("§Sie enthalten Wirkungen§ bei Erfolg oder Fehlschlag §eines Wurfs§.", "pwk-fett")]
 ]}
]};
