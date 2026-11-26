/* Werkzeug › Leiten S. 172–176 (Express-Malprogramm). Gestaltung: triangle/werkzeug-d.css (Klassen wkd-) */
(function(){
  var T = typeof tx === "function" ? tx : function(s){ return s; };
  /* Text mit Auszeichnung; ‹o|Wort› färbt ein Wort der Handschrift (o orange, g grün, p pink, b blau, r rot) */
  function H(s){ return T(s).replace(/‹(\w+)\|(.*?)›/g, '<span class="$1">$2</span>'); }
  function Zi(n){ return "img/zeichen/" + n + ".png"; }
  function Zb(n, c, st){ return '<img class="' + (c || "") + '" src="' + Zi(n) + '" alt=""' + (st ? ' style="' + st + '"' : '') + '>'; }
  function Kb(n, c){ return '<img class="' + (c || "") + '" src="img/regeln/full/' + n + '.webp" alt="">'; }
  function hand(s, c){ return '<div class="wkd-hand ' + (c || "") + '">' + H(s) + '</div>'; }
  function wa(text, farben, c){ var i = 0; return '<span class="wkd-wa ' + (c || "") + '">' + text.split("").map(function(ch){ if(ch === " ") return " "; var f = farben[i++ % farben.length]; return '<span style="color:' + f + ';transform:translateY(' + ((i * 7 % 5) - 2) * 2 + 'px) rotate(' + ((i * 11 % 7) - 3) + 'deg)">' + ch + '</span>'; }).join("") + '</span>'; }
  var REGEN = ["#0aa5f0", "#2a6ee8", "#e8232f", "#f06a1a", "#f2b200", "#52b82f", "#17b39a", "#8a3fc0", "#d6249f"];
  var HANDLE = '<i class="h a"></i><i class="h b"></i><i class="h c"></i><i class="h d"></i>';

  /* ---------- S. 172 ---------- */
  var optionen =
    '<div class="wkd-opt"><h4>Allgemein</h4>' +
    '<div class="ck"><i>✔</i><span>Taskleiste ausblenden</span></div>' +
    '<div class="reg"></div><div class="sel"><span>4-Farben (CMYK)</span></div>' +
    '<h4>Hintergrundbild</h4><div class="lst"><div>Einsperrung</div><div>Beschränkung</div><div>Einsamkeit</div><div>Unterdrückung</div><div class="a">Blau</div></div>' +
    '<h4>Seitensparer</h4><div class="lst"><div>Labyrinth 6</div><div class="a">Labyrinth 7</div><div>Labyrinth 8</div><div>Labyrinth 9</div><div>Labyrinth 10</div></div>' +
    '<h4>Energiesparmodus</h4><div>Buch schließen bei Inaktivität nach:</div><div class="sel" style="margin-top:8px"><span>7 Minuten</span></div></div>';
  var kum172 =
    '<div class="kum172"><div class="blase"><p>dann fange ich mal an, ein paar dinge zu ändern...</p></div>' + Zb("wkd-kumpel-s172", "k") + Zb("wkd-stift-1", "s") + '</div>';

  TA_TEXT["w/leiten/uneinig"] = [
    {t:"os", art:"wirbel", cls:"wkd wkd-172", b:[{t:"sp", x:[
      [{t:"html", x:kum172}, {t:"prog", art:"manual", cls:"wkd-man opt-fenster", titel:"Anzeigeoptionen", b:[{t:"html", x:optionen}]}],
      [{t:"prog", art:"express", cls:"wkd-ex", titel:"**Express** (Testversion – noch 4 Seiten)", b:[
        {t:"html", x:'<div class="wkd-sel">' + HANDLE + '<p><b>Irgendwann</b> werden sich deine Agenten bei manchen Dingen uneinig sein – vielleicht darüber, wie sie zu mir stehen, ganz sicher darüber, wie Einsätze enden sollen. wenn du mal Zeit hast, schau dir an, was Agenten auf den verschiedenen Work-Life-Balance-Leisten entdecken werden.</p></div>'},
        {t:"html", x:'<div class="wkd-typ">' + H('Unterschiedliche Einsatzergebnisse führen zu unterschiedlichen Vorteilen – und Verlusten – für Agenten.') + '<br><mark>Darüber wird es vermutlich Konflikte geben.</mark></div>'},
        {t:"html", x:'<div class="wkd-grob"><div class="vl">Grob gesagt:</div><div class="ov"><p>Anomalien einzufangen bedeutet neue Anforderungen und eine mächtigere Agency.</p><p>Anomalien zu zerstören bedeutet flexible Agenten-Entwicklung und eine sicherere Realität.</p><p>Anomalien zu befreien bedeutet neue Kräfte und eine größere Gemeinschaft von Anomalien.</p></div></div>'},
        {t:"html", x:'<div class="wkd-b-reihe"><div class="wkd-spalte"><div class="wkd-dunkel">Und das ist noch bevor man auf die Gefühle in einer konkreten Situation eingeht.</div><div class="wkd-dunkel kursiv" style="transform:rotate(-2deg);margin-left:6%">Menschen sind verschieden.</div><div class="wkd-dunkel kursiv" style="margin-left:0;transform:rotate(1deg)">Die Welt ist kompliziert.</div></div><div class="wkd-blob rosa">' + hand('persönlich finde ich, die meisten Anomalien sollten frei sein, aber manchmal muss man verlieren, um später zu gewinnen. zum glück seid ihr nicht bloß Agenten – ihr seid auch ein haufen leute, die ein spiel spielen.') + '</div></div>'},
        "Kleine Reibereien (kurze Wortgefechte, spielerisches Necken oder Streiche, unterschiedliche Ziele und so weiter) sind zu erwarten. Wird es aber ernster – insbesondere wenn Agenten einen Streit nur durch direktes, gegensätzliches Handeln wie einen Kampf oder zwischenmenschliche Sabotage klären können –, versuche, es nicht zu einem „Geschichtenwettstreit“ werden zu lassen, egal ob du die Konfliktregeln verwendest oder nicht.",
        {t:"html", x:'<div class="wkd-zeile2"><div class="wkd-klebe gelb"><p>sprich früh und oft mit deinem team darüber, was für geschichten ihr erzählen wollt. wenn sie wirklich darüber nachdenken, wollen sie meistens nicht einen haufen Anomalien für immer ins gefängnis stecken, oder? zumindest nicht die meisten von ihnen.</p></div><div class="wkd-klebe blau"><p>du willst, dass Agenten streiten, weil du willst, dass sie nachdenken, und konflikte machen unsere werte klarer. lass der welt keine einfachen, klaren antworten – das ist es, was die Agency will.</p></div></div>'},
        "und niemand hat etwas davon, wenn deine Agenten das Spielen hassen. Wenn es wichtig ist, dass dein Team durchgehend einig ist, damit das Spiel Spaß macht, ist es in Ordnung, das zuzulassen. am ende sollen sie ihre entscheidung als gruppe treffen. ob sie hoffen, mich zu befreien, der Agency die welt zu schenken oder alles in die luft fliegen zu lassen … es braucht mehr als einen Agenten. es braucht mehr als ein Außenteam! der status quo ist ein harter brocken."
      ]}]
    ]}]}
  ];

  /* ---------- S. 173 ---------- */
  var pfeil = '<span class="wkd-pfeil"><svg viewBox="0 0 30 26"><path d="M2 4c14-2 24 4 24 18M19 15l7 8 5-9" fill="none" stroke="#3b4fa6" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg></span>';
  var kopf173 =
    '<div class="wkd-e-kopf"><div class="o">Einsätze, Teil 2:</div><div class="wkd-e-titel">' + '<b>' + "Ermittlungen".split("").map(function(c){ return "<span>" + c + "</span>"; }).join("") + '</b>' + Zb("wkd-lupe") + '</div>' + Zb("wkd-waage", "wkd-e-waage") + '</div>';
  var zwei173 =
    '<div class="wkd-e-row">' +
    hand('Die Triangle ordnet Einsätze in klare Kategorien ein, aber wie alles, was sie sagt, ist das ‹u|zu einfach›. Jeder Einsatz kann Elemente ‹o|jeder› ‹g|Art› enthalten, und die unterschiedlichen Fähigkeiten deiner Agenten finden mehr Verwendung, wenn du mischst.') +
    hand('Du musst deine Agenten je nach Kategorie briefen – und ‹o|beurteilen› –, aber wenn du während eines einzelnen Einsatzes zwischen ihnen wechselst, erschaffst du eine interessante, komplizierte Welt. Die Triangle weicht nie von der Kategorie ab, aber sie tun es, äh …') .replace('</div>', pfeil + '</div>') +
    '</div>';
  var zwischen =
    '<div class="inn"><h4 class="ab"><span>' + Zb("symbol-warnung") + 'Zwischenspiele</span></h4><div class="sp sp2" style="display:grid;grid-template-columns:1fr 1fr;gap:12px 36px"><div><p>Gelegentlich kann während eines Einsatzes ein neuer Einsatz beginnen. Die beteiligten Agenten sollten im Außendienst gebrieft und über die Ziele des neuen Einsatzes informiert werden. Diese Einsätze ersetzen die bisherigen nicht, und</p></div><div><p>Agenten sind für die Ergebnisse aller aktiven Einsätze voll verantwortlich. Da sie gleichzeitig stattfinden, wirken sie sich nicht auf die Zeit aus, die bis zum nächsten geplanten Einsatz zur Verfügung steht.</p></div></div></div>';
  var mitte173 =
    '<div class="wkd-e-mitte"><div class="wkd-notiz-r">' + Zb("wkd-herzen-dreieck", "d") + hand('So, lass uns mit diesem Gedanken ermitteln. Die ‹r|Agency› würde ‹p|es lieben›, wenn du Agenten sofort zur Begegnung schickst, aber das ist laaaangweilig. Mehr Zeit im Außendienst heißt mehr Zeit für deine Agenten, zu ‹g|wachsen› und füreinander zu sorgen.') + Zb("wkd-pflanze", "wkd-pflanze") + '</div>' +
    '<div class="wkd-notiz-l">' + Zb("wkd-smileys-katze") + hand('Ihre Fürsorge schafft ‹o|Kameradschaft›, und Kameradschaft führt zu gegenseitiger Unterstützung ‹u|gegen dieses› ‹p|spießige Viereck› von einem ‹p|Dreieck›.', "o") + '</div></div>';
  var sel173 = '<div class="wkd-sel dreh">' + HANDLE + '<p>Wenn sie genug vom Unsinn der Agency durchschauen, werden sie sich dagegen auflehnen. Vielleicht kündigen sie sogar. wäre das nicht was.</p></div>';
  var gross173 = '<div class="wkd-gross-serif"><p>Du musst in dieser Phase nicht alles ausplanen. Tatsächlich ist es langweilig, wenn du es tust. Deine Agenten werden allerlei überraschende Entscheidungen treffen, weil sie Menschen sind, und du darfst die Realität um sie herum gestalten! Folge, wohin sie führen. Du brauchst nur ein paar grundlegende Dinge bereit.</p></div>';
  var wichtig173 =
    '<div class="wkd-wichtig"><div class="kum">' + Kb("buddy-06-s173", "k") + Zb("wkd-stift-1", "s", "transform:rotate(180deg) rotate(-8deg)") + '<div class="blase"><p>Dieses Gestalten-Zeug ist leicht.</p></div></div>' +
    '<div class="rechts"><div class="tag">Am wichtigsten:</div>' + hand('Gib ihnen viele Gründe, ihre Kräfte zu nutzen!!!!!!!!!!!!!! Du willst, dass sie würfeln und massenweise Chaos erzeugen. Warum? Damit du es für ‹u|Chaos-Effekte› ausgeben kannst.') + '<div class="burst"><span class="wkd-burst">Chaos-<br>Effekte!</span></div></div></div>';

  TA_TEXT["w/leiten/ermittlungen"] = [
    {t:"os", art:"wirbel", cls:"wkd wkd-173", b:[
      {t:"prog", art:"express", cls:"wkd-ex wkd-kont", titel:"Express", b:[
        {t:"html", x:kopf173}, {t:"html", x:zwei173},
        {t:"prog", art:"manual", cls:"wkd-man", titel:"MyManual ‘98", b:[{t:"html", x:zwischen}]},
        {t:"html", x:mitte173}, {t:"html", x:sel173}, {t:"html", x:gross173}, {t:"html", x:wichtig173}
      ]}
    ]}
  ];

  /* ---------- S. 174–175 ---------- */
  var kopf174 =
    '<div class="wkd-r-kopf" style="display:grid;grid-template-columns:minmax(0,1.2fr) minmax(0,1fr);gap:0 26px;align-items:start;margin-bottom:18px">' +
    '<div style="position:relative">' + Zb("wkd-geist-gruen", "", "position:absolute;left:44px;top:-6px;width:38px") + Zb("wkd-geist-blau", "", "position:absolute;right:20px;top:-4px;width:34px") +
    '<div style="padding-top:34px">' + wa("Anomalie-", REGEN, "z2") + '</div><div style="margin-top:-52px">' + '<span class="wkd-wa z2" style="margin:0 0 6px 56px;transform:rotate(-7deg)">' + "Bergung".split("").map(function(c, i){ return '<span style="color:' + REGEN[(i + 2) % 9] + '">' + c + '</span>'; }).join("") + '</span></div>' +
    '<div class="wkd-blob rosa" style="margin-top:-6px;background:#dde5f6;border-radius:70px 90px 60px 90px/60px 60px 70px 80px;padding:28px 36px">' + hand('Das ist die häufigste Einsatzart und der Hauptgrund, warum die ‹r|Agency› dieses Spiel macht. Sie sollte wohl mehr als die Hälfte deiner Einsätze ausmachen, aber ich bin nicht dein Chef. werd seltsam damit, wenn du willst.', "mitte") + '</div></div>' +
    '<div>' + Zb("wkd-spielautomat", "", "width:100%;max-width:280px;display:block;margin:0 0 -8px auto") + '<div class="wkd-blob weiss">' + hand('Gut gebaute Anomalien treiben Agenten dazu, ‹o|Rätsel› zu lösen, ‹g|Herausforderungen› zu meistern und etwas über sich selbst zu lernen, indem sie ‹p|schwere Entscheidungen› treffen. Gehen wir die eins nach dem anderen durch.') + '</div></div></div>';
  var raetsel =
    '<div style="position:relative">' + Kb("buddy-08-s174", "", "") .replace('<img class=""', '<img class="wkd-kum8" style="position:absolute;left:-92px;top:-12px;width:104px;z-index:3"') +
    '<h3 class="wkd-r" style="margin-left:34px">Rätsel</h3>' +
    '<div class="wkd-rtx cap"><p>Anomalien im Zentrum eines <i>Rätsels</i> sind meist verschlossen und verborgen; ihre Gegenwart zeigt sich nur an den Auswirkungen ihres Tuns. Typischerweise folgen gute <i>Rätsel</i> diesem Muster:</p></div>' +
    '<div style="clear:both"></div>' +
    ['Ein merkwürdiges Ereignis, das auf dem <i>Impuls</i> der Anomalie beruht, macht die Agency auf eine Anomalie aufmerksam.',
     'Agenten werden zu dem merkwürdigen Ereignis <i>gebrieft</i> und untersuchen, was geschehen ist.',
     'Ihre erste Ermittlung fördert mehrere <i>Hinweise</i> zutage, die verschiedene Wege für weitere Ermittlungen eröffnen.',
     'Jeder dieser Wege liefert weitere Hinweise, die auf die <i>Domäne</i> der Anomalie deuten.',
     'In der Domäne der Anomalie beginnen sie die <i>Begegnung</i>.'].map(function(s){ return '<div class="wkd-schritt">' + T(s.replace(/<i>/g, "§i§").replace(/<\/i>/g, "§/i§")).replace(/§i§/g, "<i>").replace(/§\/i§/g, "</i>") + '</div>'; }).join("") +
    '<div class="wkd-r-wolke">' + Zb("wkd-pfote", "wkd-pfote") + hand('Der beste Rat, den ich für Rätsel habe: Du kannst nie zu viele Hinweise haben. Wenn eine persönliche Information durch den dicken Schädel eines Agenten dringen soll, musst du sie ihm auf so sieben verschiedene Arten sagen. Gibst du ihnen nur einen Weg, etwas Wichtiges zu erfahren, sollte der besser direkt ihre Agenten anschreien: ‹b|„Ich bin ein Hinweis!“›') + '</div></div>';
  raetsel = raetsel.replace("ihre Agenten anschreien", "deine Agenten anschreien");
  var raetselRechts =
    '<div class="wkd-gold"><p class="l">' + T("Hinweise stammen meist aus der Erkundung von Orten, an denen die Anomalie aktiv war, aus Gesprächen mit Leuten, die ihr begegnet sind, und aus dem kreativen Einsatz von Fähigkeiten.") + '</p>' +
    '<p>' + T("Aufgebrachte Anomalien geben Agenten vielleicht auch direkt einen Hinweis, indem sie mit Kleinen Anomalien oder eigenen Plänen auf sie losgehen. Wie auch immer sie sie erhalten: Hinweise sollten Agenten ebenso viel über die Anomalie lehren, wie sie zu ihr führen. Wenn sie die Begegnung beginnen, sollten sie verstehen, was die Anomalie will, und idealerweise etwas ") + '<i>Empathie</i> für sie haben.</p>' +
    '<p>' + T("Versteckt sich eine Anomalie hinter einem langen Rätsel, ist sie meist ziemlich leicht zu fangen oder zu beseitigen. Das Rätsel war ihre Rüstung – auch wenn sie sich vielleicht wehrt, indem sie sich in eine Herausforderung verwandelt oder eine schwere Entscheidung als letzte Verteidigung einsetzt.") + '</p></div>';
  var herausf =
    '<div class="wkd-herausf"><div class="wkd-pixw"><span class="fl"></span><span class="wkd-pix">Herausforderungen</span></div>' +
    '<div class="wkd-blob gruen" style="background:#e2f3d3">' + hand('Das ist ein weiter Begriff für alle Fälle, in denen ‹b|Anomalien› den Abschluss des Einsatzes für deine Agenten besonders schwer machen. Das sind meine Lieblingsarten von ‹b|Anomalien›: Sie sind laut, sie sind offensichtlich, und sie zu finden ist nicht schwer. Sie zu fangen ist eine andere Geschichte.') + '</div>' +
    '<div style="text-align:center"><span class="wkd-pill">Gute Herausforderungen sind so:</span></div>' +
    hand('Ein komplexes Hindernis wird klar.', "ueb") +
    '<div class="wkd-hf-bild">' + Zb("wkd-mond") + '<div class="wkd-hf-txt">' + T("(Eine Anomalie ist aufgetaucht und umkreist den Mond, ist nur auf der Bühne während einer Broadway-Aufführung zugänglich oder fügt jedem, der sie direkt ansieht, 10 Schaden zu.)") + '</div></div>' +
    '<div class="wkd-hf-stakes">' + Zb("wkd-laser") + hand('Was beim Scheitern auf dem Spiel steht, wird klar.', "ueb") + '<div class="wkd-hf-txt klein wkd-hf-laser">' + T("(Die Mond-Anomalie lädt einen weltzerstörenden ").replace(/$/, "") + '<mark>riesig</mark>' + T("Laser auf, am Ende der Broadway-Aufführung wird jeder Zuschauer zu einem Losen Ende, oder die gefährlich sichtbare Anomalie bewegt sich auf ein Live-Fernsehstudio zu.)") + '</div></div>' +
    '<div class="wkd-hf-boom">' + Zb("wkd-bumm") + hand('Agenten müssen sorgfältig planen und ihre Werkzeuge kreativ einsetzen, um das Problem zu lösen – oder die Folgen ihres Scheiterns tragen.') + '</div>' +
    '<div class="wkd-hf-lang"><p>Schlag mit Herausforderungen große Bögen. Mit meiner Hilfe und der der Agency steht Agenten so viel Macht zur Verfügung. Für motivierte Agenten ist nichts unmöglich, und sie werden äußerst motiviert sein, ihre Kräfte auf große und beeindruckende Weise einzusetzen.</p>' +
    '<p>Der Schlüssel zu den besten Herausforderungen ist Offenheit für viele Lösungen. Lass Agenten groß gewinnen, belohne Kreativität und lass dann die Herausforderung mit einer Eskalation antworten. Selbst wenn Agenten die Bedrohung nicht aufhalten, sollte es sich anfühlen, als wäre es knapp gewesen.</p>' +
    '<p>Und denk immer an die Ripple Gun. Wirkt eine Herausforderung zu frustrierend oder unmöglich, erschießen Agenten sie einfach. Manchmal ist das sogar der richtige Zug für die Sicherheit der Welt! Irgendwie langweilig, allerdings.</p></div></div>';
  var G = function(s){ return T(s.replace(/<i>/g, "§i§").replace(/<\/i>/g, "§/i§")).replace(/§i§/g, "<i>").replace(/§\/i§/g, "</i>"); };
  var entscheidungen =
    '<div class="wkd-tc">' + Zb("wkd-zier-oben", "oben") + '<h3 class="fr">Schwere Entscheidungen</h3>' + Zb("wkd-zier-teiler", "teiler") +
    '<p>' + G("Jede Anomalie bringt eine eingebaute schwere Entscheidung mit: <i>Was machst du mit ihr?</i> Fängst du sie ein, beseitigst du sie oder lässt du sie frei? Wenn du die Lieblingsoption der Agency (Einfangen) schwerer verdaulich machst, kannst du interessante Entscheidungen für deine Agenten schaffen und verändern, wie sie ihre Arbeit sehen. Indem du die Einzelheiten der Anomalie änderst, kannst du ihnen schwierige Situationen geben, anhand derer sie entscheiden, wer sie wirklich sein wollen.") + '</p>' +
    '<div class="fz"><p>' + G("Was passiert, wenn eine Anomalie wirklich Menschen hilft? <i>Sind sie bereit, das Missfallen der Agency zu riskieren, damit sie ihre Arbeit fortsetzen kann?</i>") + '</p>' +
    '<p>' + G("Was passiert, wenn eine Anomalie extrem gefährlich und mächtig wirkt und die Agency sie unbedingt erforschen will? <i>Sind sie bereit, sie zu zerstören, statt ihre Macht in Produkte verwandeln zu lassen?</i>") + '</p>' +
    '<p>' + G("Wie gehen sie mit einer Anomalie um, die gefangen <i>werden will</i>? <i>Warnen sie die Agency? Ermitteln sie, warum?</i>") + '</p></div>' +
    '<p>' + G("Aber das ist nur die große Entscheidung. Viele weitere Fragen können im Verlauf des Einsatzes auftauchen, wenn du Lose Enden, Anomalien mit menschlichen Verbindungen und die komplizierten Kräfte von Anomalien bedenkst.") + '</p>' +
    '<div class="fz gs"><p>' + G("Wird ein Agent ein Loses Ende hinnehmen, statt schöne Erinnerungen an eine Anomalie zu trüben? Wie weit geht ein Agent, um ein besonders zähes und emotionales Loses Ende zu entfernen?") + '</p>' +
    '<p>' + G("Sollen Menschen außerhalb der Agency von Anomalien profitieren dürfen? Ändert sich das, wenn die Menschen den Status quo unterstützen oder bekämpfen?") + '</p>' +
    '<p>' + G("Was, wenn sich die Ziel-Anomalie als ein weiterer Resonant herausstellt? Was werden sie tun, wenn sie jemanden fangen sollen, der ihnen so ähnlich ist?") + '</p>' +
    '<p>' + G("Was, wenn der Fokus einer Anomalie ein bedeutsames Opfer verlangt, um sie zu beruhigen?") + '</p></div>' + Zb("wkd-zier-unten", "unten") + '<div style="height:26px"></div></div>';

  TA_TEXT["w/leiten/bergung"] = [
    {t:"os", art:"wirbel", cls:"wkd wkd-174", b:[
      {t:"prog", art:"express", cls:"wkd-ex", titel:"**Express** (Testversion – noch 2 Seiten)", b:[
        {t:"html", x:kopf174},
        {t:"sp", x:[[{t:"html", x:raetsel}], [{t:"html", x:raetselRechts}]]},
        {t:"html", x:'<div style="height:30px"></div>'},
        {t:"sp", x:[[{t:"html", x:herausf}], [{t:"html", x:entscheidungen}]]}
      ]}
    ]}
  ];

  /* ---------- S. 176 ---------- */
  var reg176 =
    '<div class="wkd-abg" style="display:block"><img class="logo" src="img/regeln/full/os-logo-express.webp" alt="">' +
    '<div class="reg">Der Testzeitraum für diese Software ist abgelaufen. <span>Bitte registriere dich, um fortzufahren.</span></div>' +
    '<div class="feld">E-Mail-Adresse</div><div class="feld">XXX–XXX–XXX</div><div class="knoepfe"><b>Online kaufen</b><b>Aktivieren</b></div>' +
    '<div style="display:flex;align-items:flex-end;gap:14px;margin-top:30px"><div class="wkd-intranet"><i>A</i>Intranet<br>Adventurer</div>' +
    '<div style="position:relative;flex:1"><div class="blase" style="position:static;margin:0 0 8px;padding:8px 14px 4px;border:0;font:400 14px/1.2 Fig,sans-serif;max-width:190px;box-shadow:-3px 3px 0 #0d0518;border-radius:8px"><p style="margin:0 0 6px">hacke mich ins mainframe ... ... ... ich bin drin.</p></div></div>' + Zb("wkd-kumpel-s176-hack", "", "width:112px;margin-left:auto") + '</div></div>';
  var manual176 =
    '<div class="wkd-abg" style="display:block"><div style="display:flex;justify-content:flex-end;align-items:flex-end;gap:10px;margin:0 0 -14px;position:relative;z-index:5"><div style="display:flex;flex-direction:column;gap:8px;align-items:flex-end;padding-bottom:30px"><div class="blase" style="position:static;margin:0;padding:6px 16px;font:400 14px Fig,sans-serif;border-radius:8px;box-shadow:-3px 3px 0 #0d0518">geizkragen!</div><div class="blase" style="position:static;margin:0;padding:6px 16px;font:400 14px Fig,sans-serif;border-radius:8px;box-shadow:-3px 3px 0 #0d0518">ist ja auch egal. mir war eh langweilig</div></div>' + Kb("buddy-09-s176", "", "") .replace('<img class=""', '<img class="" style="width:104px;display:block"') + '</div></div>';
  var aufr =
    '<div class="inn"><h4>' + Zb("symbol-aufraeumen") + 'Aufräum-Einsätze</h4><div class="sp sp2" style="display:grid;grid-template-columns:1fr 1fr;gap:12px 28px"><div>' +
    '<p>Zeigen Agenten Verschleißerscheinungen und brauchen sie Arbeit mit etwas weniger Druck, erwäge einen Aufräum-Einsatz! Viele andere Außenteams sind im Außendienst unterwegs, und nicht alle sind so vorsichtig, wie dein Team es sicher sein wird. Jemand muss ihre Fehler beheben, und Aufräum-Einsätze sind das Nächste an Urlaub, was du ohne Urlaubstage bekommen kannst.<sup>*</sup></p>' +
    '<p class="fn" style="margin-top:-6px">*Dieser Satz ist kein Eingeständnis, dass es bezahlten Urlaub gibt.</p>' +
    '<p>Aufräum-Einsätze sind immer die Folge eines Ereignisses, das viele Lose Enden erzeugt hat. Zum Beispiel:</p>' +
    ['Ein anderes Außenteam, in deiner Zweigstelle oder einer anderen, hat eine ' + T("Anomalie") + ' gefangen, dabei aber zu viel Aufmerksamkeit erregt.', 'Eine umherziehende ' + T("Anomalie") + ' ist durch die Region deiner Zweigstelle gezogen, hat ein Chaos hinterlassen, ist aber nicht mehr da.', 'Eine ' + T("Anomalie") + ' ist Hollow geworden und hat eine riesige, dramatische Spur in der Realität hinterlassen, bevor sie verschwand.', 'Lose Enden aus den früheren Einsätzen dieses Außenteams haben sich zusammengefunden und begonnen, eine Botschaft zu verbreiten.'].map(function(s){ return '<div class="rot"><p>' + s + '</p></div>'; }).join("") +
    '</div><div>' +
    '<p>Ereignisse wie diese laufen Gefahr, sich zu Ereignissen der Entwirrung auszuweiten. Ein Aufräum-Einsatz ist erforderlich, wenn ein Ereignis mehr als 50 zusammenhängende Lose Enden erzeugt. Die Zahl der beteiligten Lose Enden hat keine Obergrenze. Zu Beginn eines solchen Einsatzes gibst du den Agenten ein physisches Gebiet oder eine bestimmte Gemeinschaft vor, in der die Lose Enden konzentriert sind. Die Lose Enden werden alle zu ihrer Verantwortung, und alle, die sie bis zum Ende nicht aufgespürt und bereinigt haben, werden zur Gesamtzahl der Lose Enden deiner Zweigstelle addiert!</p>' +
    '<p>Ein Zeitlimit für diese Einsätze kann verhindern, dass Agenten Firmenressourcen verschwenden.</p></div></div></div>';
  var notiz176 = '<div class="wkd-b1" style="max-width:none;margin-top:26px">' + hand('Aufräum-Einsätze sind eine gute Gelegenheit für dein Außenteam, sich besser kennenzulernen. nach der ersten Einrichtung laufen sie ganz in Eigenregie, also hat dein Team eine tolle Gelegenheit, zu erkunden, mit seinen Kräften herumzuspielen und viele interessante Leute zu treffen. wenn du die vorbereitest, brauchst du eigentlich nur drei Dinge.', "wkd-aufr") + '</div>';
  reg176 = reg176.replace('<div style="display:flex;align-items:flex-end;gap:14px;margin-top:30px">', notiz176 + '<div style="display:flex;align-items:flex-end;gap:14px;margin-top:20px">');
  var unten176 =
    '<div><div class="wkd-pillen"><p class="p1"><b>1</b>Das auslösende anomale Ereignis</p><p class="p2"><b>2</b><span>Ein interessantes Umfeld oder eine verbundene Gemeinschaft (etwa die gesamte Besetzung und Crew einer Seifenoper, oder Leute, die zum selben Musikfestival gegangen sind, oder alle in der Stadt, die Derick heißen)</span></p><p class="p3"><b>3</b>Eine Liste von Figuren oder eng verbundenen Gruppen innerhalb von Nr. 2</p></div>' +
    '<div class="wkd-sel2">' + HANDLE + '<p>' + T("Denk daran, dass Lose Enden nicht 1:1 Menschen entsprechen, und es ist in Ordnung, wenn eine Lösung mehrere Lose Enden auf einmal beseitigt. Ist der Anführer einer Gruppe überzeugt, nichts Seltsames gesehen zu haben, verbreitet sich das bald in der Gruppe. Kluge Agenten versuchen oft, alle mit einem großen Zug zu bereinigen (zum Beispiel mit einer gut durchdachten Druckerpresse-Mitteilung), daher kann es helfen, für ein paar besonders widerstandsfähige Lose Enden eine Idee bereitzuhalten, warum sie sich von breiten Zügen nicht ganz so leicht beeindrucken lassen.") + '</p></div></div>';

  TA_TEXT["w/leiten/aufraeumen"] = [
    {t:"os", art:"wirbel", cls:"wkd wkd-176", b:[
      {t:"prog", art:"express", cls:"wkd-ex wkd-176", titel:"**Express** (Testversion abgelaufen – jetzt upgraden)", b:[
        {t:"sp", x:[[{t:"html", x:reg176}], [{t:"html", x:manual176}, {t:"prog", art:"manual", cls:"wkd-man", titel:"MyManual ‘98", b:[{t:"html", x:aufr}]}]]},
        {t:"html", x:unten176}
      ]}
    ]}
  ];
})();
