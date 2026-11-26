/* Playwall › A (S. 200–204). Aufbau je Dokument: TA_PWT[Code] = {t:Titel, s:Buchseite, b:[Blöcke]}.
   Blöcke wie im Handbuch; Fähigkeiten als {t:"faehig", h, x, erg:[["ok"|"plus"|"nein", Text]], f, a:[[Antwort, Code]]} wie in der ARK. */
var TA_PWT = window.TA_PWT || (window.TA_PWT = {});

/* A1 Einsatzbericht: ausfüllbares Formular, Werte in localStorage "ta_a1" */
function pwaLies(){ try { return JSON.parse(localStorage.getItem("ta_a1") || "{}") || {}; } catch(e){ return {}; } }
function pwaMerk(el){ try { var d = pwaLies(); d[el.getAttribute("data-k")] = el.type === "checkbox" ? (el.checked ? 1 : 0) : el.value; localStorage.setItem("ta_a1", JSON.stringify(d)); } catch(e){} }
function pwaA1(){
  var d = pwaLies(), Z = function(n){ return "img/zeichen/" + n + ".png"; };
  function e(v){ return String(v == null ? "" : v).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;"); }
  function T(k, ph){ return '<input type="text" data-k="' + k + '" value="' + e(d[k]) + '" oninput="pwaMerk(this)" aria-label="' + e(ph || k) + '">'; }
  function A(k){ return '<textarea data-k="' + k + '" oninput="pwaMerk(this)" aria-label="' + k + '">' + e(d[k]) + '</textarea>'; }
  function C(k){ return '<input type="checkbox" data-k="' + k + '"' + (d[k] ? " checked" : "") + ' onchange="pwaMerk(this)">'; }
  function opt(k, ic, h, s){ return '<label>' + C(k) + '<img src="' + Z(ic) + '" alt=""><span><b>' + h + '</b>' + s + '</span></label>'; }
  function zeilen(n, spalten, pre){ var o = ""; for(var i = 0; i < n; i++){ o += '<div class="z">'; for(var j = 0; j < spalten; j++) o += T(pre + i + "_" + j); o += '</div>'; } return o; }
  var an = ["Alias", "Verhalten", "Fokus", "Domäne"].map(function(l, i){ return '<div><span class="l">' + l + '</span>' + T("an" + i, l) + '</div>'; }).join("");
  return '<div class="pwa-bogen">' +
   '<div class="pwa-st"><h3>Anomalie-Status</h3><div class="pwa-opt">' +
    opt("st0", "pikto-neutralisiert", "Neutralisiert", "Keine Auswirkung auf die Leistungskennzahlen") +
    opt("st1", "pikto-gefangen", "Gefangen", "+<b class=\"drei\" style=\"display:inline;color:var(--rot);font-size:inherit\">3</b> Belobigungen pro Agent") +
    opt("st2", "pikto-entkommen", "Entkommen", "+<b style=\"display:inline;color:var(--rot);font-size:inherit\">3</b> Verweise pro Agent") +
    '<label class="so">' + C("st3") + '<span><b>Sonstiges:</b>' + T("st3t", "Sonstiges") + '</span></label></div></div>' +
   '<div class="pwa-en"><div style="display:grid;gap:12px"><div class="pwa-box rot"><b>Endnote <small>Nur für<br>den GM</small></b>' + T("end", "Endnote") + '</div>' +
    '<div class="pwa-box"><b>Chaos-Pool <img src="' + Z("symbol-chaos-wirbel") + '" alt=""></b>' + T("chaos", "Chaos-Pool") + '</div></div></div>' +
   '<div class="pwa-an"><h3>Anomalie-Analyse</h3><div class="pwa-tab">' + an + '</div></div>' +
   '<div class="pwa-au"><h3 style="margin:0 0 -4px">Auszeichnungen</h3>' +
    '<div class="pwa-box rot"><b>MVP <img src="' + Z("symbol-mvp") + '" alt=""></b>' + A("mvp") + '</div>' +
    '<div class="pwa-box"><b>Probezeit <img src="' + Z("symbol-probezeit") + '" alt=""></b>' + A("probe") + '</div>' +
    '<div class="pwa-box"><b>Teilnahme <img src="' + Z("symbol-teilnehmer") + '" alt=""></b>' + A("teil") + '</div></div>' +
   '<div class="pwa-lo"><h3>Lose Enden</h3><div class="pwa-tab"><div class="kp"><span>Name</span><span>Anzahl</span><span>Notizen</span></div>' + zeilen(6, 3, "lo") + '</div></div>' +
   '<div class="pwa-zi"><h3>Optionale Ziele</h3><div class="pwa-tab"><div class="kp"><span>Ziel</span><span>Belohnung</span><span>Von Agent</span></div>' + zeilen(3, 3, "zi") + '</div></div>' +
   '<p class="pwa-fuss">Ein ausgefüllter Einsatzbericht bringt jedem Mitglied des Teams <b style="color:var(--rot)">3</b> Belobigungen ein.<br>Ein gründlicher Einsatzbericht bringt jedem Mitglied des Teams 6 Belobigungen ein.</p></div>';
}

TA_PWT.A1 = {t:"Einsatzbericht", s:200, b:[
 {t:"html", get x(){ return pwaA1(); }}
]};

TA_PWT.A2 = {art:"dunkel", bild:"playwall-a2-ripple-gun-waffe", t:"Ripple Gun Ultima", s:201, b:[
 {t:"lead", x:"Ein Relikt von unglaublicher Macht."},
 "Die Ripple Gun Ultima vereint die realitätsstabilisierenden Eigenschaften der Ripple Gun mit der erdbebengleichen Wucht der Ultima-Klinge. Sie ist eine fiktive Schöpfung, ersonnen, um willensschwache Agenten wie dich auszusieben. Ihre Funktion „Zenkada-Beschwörung“, die Agenten befähigt, anomale wie gewöhnliche Feinde mit Hilfe einer Schar engelhafter Streiter zu erledigen, ist ebenso fiktiv, und ihre Verwendung geht genau mit jener schwachen Impulskontrolle einher, die die Produktivität deines Außenteams untergräbt.",
 "***Bitte teile deinem GM mit, dass du einen Verweis für das Lesen unbefugter Seiten erhalten hast, und stufe dein Ansehen entsprechend herab.***",
 "Die folgende Tabelle mit fiktiven Kräften, die durch die nicht existierende Ripple Gun: Ultima freigeschaltet werden, dient dazu, fehlgeleitete Agenten weiter in Versuchung zu führen, die sich zu so etwas hingezogen fühlen könnten:",
 {t:"tab", kopf:["Fertigkeit", "QS", "Wirkung"], x:[
  ["MAGICA", "1", "Erzeuge einen glänzenden Ball anomaler Energie, den du auf ein beliebiges Ziel werfen kannst, um 1 Schaden zu verursachen."],
  ["RANDANTE", "3", "Rufe einen Blitz auf jedes Mitglied des gegnerischen Teams herab, der jeweils 3 Elektroschaden verursacht."],
  ["STRETTO", "3", "Friere ein Ziel an Ort und Stelle ein. Wähle einen anderen Agenten: Er darf bis zu drei Qualitätssicherungen in Präsenz, Professionalität oder Geschick wieder aufladen."],
  ["BLIGHTED BLADE SPIN", "6", "Wende auf jedes Ziel, das du wahrnehmen kannst, SCHICKSALSSPERRE an."],
  ["ULTIMA ELIMINATUS", "10", "Reiße ein Ziel vollständig aus der Realität. Beginne mit der LETZTEN VERGELTUNG. Ziehe 7 Karten aus einer beliebigen Kombination der Decks anderer Spieler."]
 ]}
]};

TA_PWT.A3 = {art:"rang", t:"Sachbearbeiter", s:202, b:[
 {t:"sp", x:[
  ["**Glückwunsch, Agent!**",
   "Dein Einsatz für die Mission der Agency ist im Team nicht unbemerkt geblieben, und wir freuen uns, deine erste Beförderung bekannt zu geben! Die Agency hat hohe Erwartungen an deinen weiteren Erfolg.",
   "Du fragst dich vielleicht, was wir mit den Anomalien machen, die du erfolgreich gefangen hast. Ganz einfach: Wir erforschen sie! Unsere Architekten schaffen ihnen im Vault ein gemütliches Zuhause und nutzen ihre Fähigkeiten, um Produkte zu entwickeln, die wir zur Finanzierung unserer Mission verkaufen.",
   "Damit kommen wir zu deinem ersten Vorteil."],
  [{t:"h3", x:"Vault-Anfrage"},
   "Endet ein Einsatz mit dem Fang einer Anomalie, kannst du aus ihren Fähigkeiten Anforderungen erstellen. Wenn du Zeit auf deine Kompetenz verwendest, darfst du zusätzlich zu allen anderen Effekten eine zuvor gefangene Anomalie wählen und eine **Vault-Anfrage** stellen.",
   "Jeder Agent, auch der GM, kann besprechen, welche Wirkung eine aus der gefangenen Anomalie hergestellte Anforderung seiner Meinung nach hätte. Haben sich alle auf eine Wirkung geeinigt, die jeder angemessen findet, legt der GM den Belobigungswert der Anforderung fest. Nur Agenten mit Zugang zur Vault-Anfrage können diese Anforderungen kaufen, sobald sie verfügbar sind. Für jede gefangene Anomalie kann nur eine Anforderung erstellt werden, sie kann aber beliebig oft gekauft werden.",
   "Nutze diese Anforderungen, um deine künftigen Einsätze immer effizienter und erfolgreicher zu machen."]
 ]}
]};

TA_PWT.A4 = {t:"Ein Faden (1/?)", s:202, b:[
 {t:"faehig", h:"Ein Faden (1/?)", x:"Das Schicksal spult sich nach deinem Willen ab. Binde den Faden eines Ziels um deinen Finger und würfle **Professionalität**.",
  erg:[
   ["ok", "**Bei Erfolg** trägst du seinen Faden bei dir und kannst ihn um einen Ort, eine Person oder einen Gegenstand schlingen. So stellst du sicher, dass das Ziel in naher Zukunft eine Verbindung zu diesem Ding knüpft. *(Die Ziele müssen weder Menschen noch am Leben sein.)* Diese Fäden sind nur für dich sichtbar und können auf dem Weg zum festgelegten Ziel durch alles hindurchgehen."],
   ["plus", "**Für jede weitere {3}** kannst du den Faden um ein weiteres Ding schlingen und so eine Zeitleiste für die kommenden Unternehmungen des Ziels bilden. Alle Entscheidungen, die es zu diesen Zielen führen, fühlen sich für es wie natürliche, eigene Entscheidungen an."],
   ["plus", "**Bei Triszendenz** wähle eines:\n**Knoten:** Du kannst seinen Faden an etwas binden, das für den Rest seines Lebens wichtig wird. Es kann sein Schicksal nicht mehr vom Schicksal dessen lösen, woran du diesen Knoten geknüpft hast.\n**Schere:** Du kannst einen bestehenden Faden zwischen ihm und etwas anderem durchtrennen – einem Plan, einer Zukunft, einer Möglichkeit. Wähle etwas, womit es in seiner Zukunft nie wieder in Berührung kommt."],
   ["nein", "**Bei Fehlschlag** steuert das Ziel unabwendbar auf ein vorherbestimmtes Ende zu. Du erfährst von einem beunruhigenden künftigen Ereignis, an dem es teilnehmen wird und das du nicht verhindern kannst. Du darfst es gern versuchen, aber du wirst scheitern."]
  ]}
]};

TA_PWT.A5 = {t:"Von A nach B", s:202, b:[
 {t:"faehig", h:"Von A nach B", x:"Du siehst den kürzesten Weg zwischen einem Gedanken und einem anderen. Nenne den Gedanken, den du bei einem Ziel hervorrufen willst *(„Ich mag diese Person.“, „Ich sollte eine Pause machen.“, „Morgen kommt nicht.“)*, und würfle **Empathie**.",
  erg:[
   ["ok", "**Bei Erfolg** weißt du, wie es zu diesem Gedanken gelangt. Der Spieler, der dein Ziel verkörpert, sagt dir, welche Schritte nötig sind, um es dorthin zu bringen."],
   ["plus", "**Bei jeder dritten {3}** darfst du einen weiteren Gedanken nennen und erhältst auch dorthin einen Weg."],
   ["plus", "**Bei Triszendenz** ist es nur ein einziger Schritt, um es zu jedem Gedanken zu bringen, und du entscheidest, welcher."],
   ["nein", "**Bei Fehlschlag** wird der Verstand des Ziels verdichtet, geschärft und beginnt, Verbindungen herzustellen, die ihm nie zuvor möglich waren. Seine Verdachtsmomente, besonders gegen dich, finden mühelos Belege. Du hast ein Genie erschaffen, und es ist klug genug, das zu wissen. Diese Person ist allein schon 10 Lose Enden wert und dir bereits weit voraus."]
  ],
  f:"Ich wünschte, die Leute würden …", a:[["Einfach tun, was ich sage.", "H1"], ["Versuchen, mich zu verstehen.", "S4"]]}
]};

TA_PWT.A6 = {t:"Achillesferse", s:203, b:[
 {t:"sp", x:[
  ["Du bist gegen alle Formen von Schaden unempfindlich – bis auf eine Sache. Jeder Spieler am Tisch, Agent wie GM, schreibt heimlich eine der folgenden Möglichkeiten auf einen Zettel (oder eine andere, die dein GM genehmigt):",
   {t:"liste", x:["Sonnenlicht", "Wasser", "Eisen", "Papier", "Ein bekannter Satz aus einem beliebten Werk der Fiktion *[schreibe den Satz auf]*", "Längerer Blickkontakt", "Absichtlich ignoriert werden"]}],
  ["Wähle einen der Zettel zufällig aus. Die gewählte Möglichkeit ist deine **Ferse** und ab jetzt tödlich für dich.",
   "Jede Berührung mit deiner Ferse verursacht sofort 3 Schaden. Er kann nicht mit Universalempfänger umverteilt und auf keine Weise abgewehrt werden – außer durch den Einsatz von QS.",
   "Wendest du Mitfühlender Schmerz auf deine Ferse an, erfährt ein anderes Ziel, dem du die Wirkung zufügst, sie ganz normal (in den meisten Fällen ist sie bestenfalls unangenehm) und nicht ihre besondere Wirkung auf dich.",
   "Zwischen zwei Einsätzen darfst du dieses Verfahren einmal wiederholen, um eine neue Ferse zu wählen."]
 ]}
]};

TA_PWT.A7 = {t:"Arbeitslos", s:203, b:[
 "**Lieber Agent,**",
 "mit schwerem Herzen müssen wir verkünden, dass dein Arbeitsverhältnis mit sofortiger Wirkung beendet ist. Nachdem die Effekte der in dieser Phase verbrachten Zeit vollständig abgewickelt sind, meldest du dich im Vault zu einem Austrittsgespräch, bevor du in die Welt zurückkehrst, um das Leben voll gefährlicher Macht zu führen, das du so offensichtlich ersehnst.",
 "Bitte räume deinen Schreibtisch, sammle alle persönlichen Gegenstände ein und ruf jemanden an, falls du eine Heimfahrt brauchst. Das Austrittsgespräch dauert nur wenige Minuten. Es tut uns leid, dass diese Stelle nicht zu dir gepasst hat, und wir wünschen dir für deine weitere berufliche Zukunft alles Gute.",
 "Mit besten Grüßen",
 {t:"notiz", x:"Sie lügen. LAUF."},
 {t:"notiz", pos:"rechts", x:"[[Z1]]"}
]};

TA_PWT.A8 = {t:"Das macht den Unterschied", s:203, b:[
 {t:"faehig", h:"Das macht den Unterschied", x:"Wenn dir zwei Wege angeboten werden, nimm beide. Würfle **Doppelzüngigkeit**.",
  erg:[
   ["ok", "**Bei Erfolg** erlebst du die Realität auf beiden Wegen gleichzeitig. Der GM und die anderen Agenten beschreiben ihre nächsten Reaktionen auf beide Möglichkeiten bis zu einer Minute in die Zukunft oder bis nach einem weiteren Wurf, der gemacht und aufgelöst wurde, je nachdem, was zuerst eintritt. Dann wählst du, welchen Weg du tatsächlich gehst. Jedes Chaos, das auf einem der beiden Wege entsteht, bleibt bestehen, nachdem ein Weg gewählt wurde."],
   ["plus", "**Für jede weitere {3}** kannst du diesen Effekt in rascher Folge erneut nutzen, etwa in mehreren Augenblicken eines einzigen Kampfes, an Abzweigungen desselben Labyrinths oder in Teilen desselben Gesprächs. Wendest du dich einer anderen Aufgabe zu, endet dieser Effekt."],
   ["nein", "**Bei Fehlschlag** nimmst du die gefährlichste aller möglichen Optionen – die womöglich nicht einmal eine ist, von der du wusstest, dass es sie gibt –, vom GM gewählt. Alle müssen mit den Folgen leben."]
  ]}
]};

TA_PWT.A9 = {t:"Alleskönner", s:204, b:[
 {t:"sp", x:[
  ["Wähle einen Lieblingsgegenstand, den du mit höchster Bequemlichkeit auflädst. Der Gegenstand behält sein ursprüngliches Aussehen (Stift, Brecheisen, Glühbirne), wird aber zum **Alleskönner**, einem Gegenstand, der zu allem fähig ist.",
   "Immer wenn du versuchst, damit ein Problem zu lösen, das sich mit einem beliebigen gewöhnlichen Werkzeug, Gerät oder Apparat lösen ließe, funktioniert es. In der Regel erfüllt der Alleskönner jeweils eine einfache, gewöhnliche Funktion.",
   "Wenn du ihn erschaffst, kann der Alleskönner außerdem Folgendes:",
   {t:"liste", x:["Schutz vor den Elementen", "Fahrzeug für zwei (Geschwindigkeit eines Pferdes)", "Textilfabrik (druckt jedes gewöhnliche Textil, einen Meter pro Minute)", "Meditationsführer", "Kunst- und Antiquitätengutachter"]}],
  [{t:"faehig", h:"Alleskönner erweitern", x:"Möchtest du dem Alleskönner zusätzliche komplexe Werkzeuge oder Funktionen hinzufügen, würfle **Initiative**.",
    erg:[
     ["ok", "**Bei Erfolg** fügst du der Liste etwas hinzu. Der Alleskönner kann die gewünschte Funktion für immer ausführen. Denk daran: Er sieht immer aus wie der ursprüngliche Gegenstand und kann Lose Enden erzeugen, wenn man ihn bei ausgefallenen Funktionen sieht."],
     ["plus", "**Bei Triszendenz** darfst du der Liste auch jede dir bekannte Anforderung hinzufügen, ausgenommen Erstanforderungen. Nach einmaliger Verwendung wird die Anforderung von der Liste gestrichen."],
     ["nein", "**Bei Fehlschlag** kann der Alleskönner die Funktion, die du hinzufügen wolltest, niemals erfüllen."]
    ]},
   "Das Universum kann sich dem Alleskönner widersetzen. GMs können das Ergebnis „Bei Fehlschlag“ auslösen, selbst wenn der Wurf gelungen ist, indem sie 10 Chaos ausgeben. *(Das kann das verfügbare Chaos ins Negative treiben.)*"]
 ]}
]};

TA_PWT.A10 = {t:"Wechselnde Perspektiven", s:204, b:[
 "Wenn du Erzwungene Perspektive einsetzt, kannst du einen betroffenen Gegenstand frei auf eine neue Größe ändern, die der Perspektive eines beliebigen aktuellen Beobachters entspricht. Außerdem kannst du frei entscheiden, ob er mit seinem neuen oder seinem ursprünglichen Gewicht beziehungsweise seiner ursprünglichen Dichte mit der Welt wechselwirkt, und das nach Belieben hin und her ändern. Vergrößerte Gegenstände lassen sich mühelos schwingen, und verkleinerte Gegenstände können nach dem Wurf an Tempo und Wucht gewinnen."
]};

TA_PWT.A11 = {t:"Wie die Kids sagen", s:204, b:[
 {t:"faehig", h:"Wie die Kids sagen", x:"Du passt immer dazu. Sprich einen beliebigen Satz zu einem Ziel und würfle **Doppelzüngigkeit**.",
  erg:[
   ["ok", "**Bei Erfolg** wird der Satz zu einem anerkannten Szene-Ausdruck für eine von dir gewählte Bevölkerungsgruppe des Ziels *(Teenager, Cellist, Weeaboo usw.)*. Teile seine Bedeutung und gängige Verwendungen mit deinem GM und deinen Mitagenten. Menschen aus dieser Gruppe verwenden ihn nun passend, und falls du ihn im Lauf des letzten Tages gesagt hast, gilt rückwirkend, dass du ihn in dieser Bedeutung benutzt hast. Deine Verwendung dieses Satzes weist dich bei ihnen als jemanden aus, der „Bescheid weiß“."],
   ["plus", "**Bei Triszendenz** erkennt das Ziel dich als beliebten Trendsetter seiner Gruppe an und hört bei jedem deiner Worte genau zu. Alles, was du sagst, könnte ein neuer Ausdruck werden."],
   ["nein", "**Bei Fehlschlag** denkt jeder, der den gewählten Satz ausspricht, lebhaft an dich, ohne zu wissen, warum. Füge Lose Enden hinzu, die dazu passen, wie verbreitet der Satz ist."]
  ],
  f:"Ich denke, am besten gewinnt man Menschen für sich, indem man …", a:[["Man selbst bleibt, egal was passiert.", "O2"], ["Sich ihrer Stimmung anpasst.", "M7"]]}
]};

TA_PWT.A12 = {t:"Fragen später", s:204, b:[
 "Bis zu eine Stunde, nachdem du jemanden getötet oder Eliminiert hast, kannst du direkt mit ihm sprechen, als wäre er anwesend.",
 "Füge außerdem Eliminieren den folgenden Text hinzu:",
 {t:"faehig", h:"Eliminieren", x:"",
  erg:[["plus", "**Bei Triszendenz** darfst du jemanden oder etwas, das du soeben Eliminiert hast, durch ein früheres Ziel von Eliminieren ersetzen und es wieder zum Leben oder zum Dasein zurückbringen."]],
  f:"Woran würde ich lieber teilnehmen?", a:[["An einer wilden Party.", "S17"], ["An einem vertrauten Gespräch.", "B8"]]}
]};
