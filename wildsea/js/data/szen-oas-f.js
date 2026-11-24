/* Szenario One-Armed Scissor – Spielerinhalte & Schiffe (Abenteuerheft S. 26–30) */
window.WS_NACH = window.WS_NACH || {}; WS_NACH["one-armed-scissor"] = WS_NACH["one-armed-scissor"] || [];
(function(L){ var K = "Spielerinhalte";
L.push({id:"spielographer", k:K, t:"Spielographer", p:26, b:[
 {h:"Posten: Spielographer"},
 {a:"Du hast das Fieber des geschriebenen Wortes gepackt, und die einzige Behandlung ist, es an andere weiterzugeben.\nManche Wildsegler gehen ihr ganzes Leben, ohne ein Buch aufzuschlagen. Nicht, dass es keine gäbe – Dock-Mönche verfassen noch Schriftrollen, Zollbeamte notieren Frachtmengen, Dichter klatschen Worte aufs Papier und binden sie in Wolfsleder zur Verbreitung –, sondern weil die den Gefahren der See abgerungenen Stunden so oft mit Wartung und Planung gefüllt sind, dass die Freuden eines guten Buchs leicht auf der Strecke bleiben.\nAber es ist irgendwie schade – an jedem Tag werden Tausende von Geschichten ins Dasein gesponnen, über die rauschenden Wellen hinweg, Erzählungen von Überleben und Heldentum und Verlust und Stolz. Sie werden von Segler zu Segler weitergereicht, oder sie sterben mit ihren Crews … Worte, verloren an die Winde. Es ist das Los eines Spielographers, das zu ändern, ein selbstgeschriebenes Buch nach dem anderen. Überflute die Welt mit Geschichten, und manche davon bleiben vielleicht hängen."},
 {c:"Tinte ist nicht die einzige Waffe, noch Papier der einzige Schild", x:"Was ist ein Buch, wenn man es genau nimmt? Eine Fülle an Informationen, die andere lesen sollen, gesammelt in irgendeiner körperlichen Form. Und auf der Wildsee reicht das, woraus ein „Buch“ bestehen kann, weit über Papier, Tinte und Leder hinaus. Ein Spielographer meißelt seine Geschichten vielleicht in monumentale Steintafeln, ein anderer lässt Worte aus sechs Federn gleichzeitig fließen (jede Hand schreibt in einer anderen Schrift), wieder ein anderer fädelt Flüstern durch Wandteppiche zu Siegeln, die bei Mondlicht zucken."},
 {c:"Die Seele einer Geschichte", x:"Bei einem solchen Reichtum an Geschichten zur Auswahl: Wie grenzt man ein, worüber man tatsächlich schreiben will? Für manche Spielographer ist das eine Frage, die sie ihre gesamte Laufbahn verfolgt und sie in Stapeln unfertiger Arbeit ertrinken und schlaflos mit dem richtungslosen Drang zu schaffen zurücklässt. Für andere ist sie im Nu beantwortet – sie sehen etwas geschehen und schreiben es so gut sie können nieder. Wer kann wirklich sagen, was ehrlicher, was angemessener ist als das andere?"},
 {c:"Fragen zum Nachdenken", x:"Wenn du Elemente des Spielographers in deinen Charakter einbaust, bedenke die folgenden Fragen …", l:["Wie viele Bücher hast du auf dem Konto, und wurden sie je von anderen Augen als deinen eigenen gesehen?","Konzentrierst du dich auf die Wirklichkeit der Welt um dich herum oder auf bequemere Fiktionen?","Schreibst du in Prosa, in Poesie, in Code oder in etwas noch Fremderem?"]},
 {c:"Alternative Darstellungen", x:"Ein Spielographer ließe sich mühelos zu einem traditionelleren Bibliothekar anpassen, einem Hüter und Sammler von Büchern. Er könnte auch in die ganz andere Richtung gehen und sich mit dem Horizoneer verbinden, um mündliche Überlieferungen durch die Zeitalter weiterzutragen und sich auf die Aufführung der Erzählung zu konzentrieren, statt auf ihre Festhaltung."},
 {erz:"„Schreib es auf! Schreib alles auf!“ – Clarence T’Mob, Ketra-Spielographer"}
]});
function A(n, len, art, x){ return {c:n, x:len + "er-Leiste · " + art + "\n" + x}; }
L.push({id:"spielographer-aspekte", k:K, t:"Aspekte & Schnellstart-Kit", p:27, b:[
 {h:"Aspekte"},
 {a:"Deine Aspekte machen deinen Charakter einzigartig und geben ihm Wege, die normalen Regeln der Wildsea zu brechen. Sie wirken außerdem bis zu einem gewissen Grad als erzählerische Erlaubnis – wähle Aspekte, die dich ansprechen und die du in deine Geschichte weben kannst. Bei der Schnellstart-Erstellung wählst du 2 Aspekte aus der Liste unten."},
 A("Das Wort zähmen", 3, "Eigenschaft", "Du bist immun gegen arconautischen Zwang und Verwirrung durch geschriebene oder gesprochene Worte und widerstehst jedem Schaden oder jeder Wirkung, die dadurch verursacht würde, dass Flüstern in die Welt freigesetzt wird."),
 A("Inspiration", 3, "Eigenschaft", "Hat ein Crewkamerad auf die Erfüllung eines Antriebs hingearbeitet (oder einen Meilenstein erreicht), erhältst du bis zum Ende der nächsten Szene erhöhte Wucht bei Aktionen oder Aufgaben, die du für ein persönliches Projekt unternimmst."),
 A("Das Ende umschreiben", 2, "Eigenschaft", "Wann immer ein Crewkamerad das letzte Kästchen einer seiner Leisten markieren würde, kannst du ein Flüstern verbrauchen. Tust du das, bleibt dieses Kästchen unmarkiert und du reißt den Fokus an dich."),
 A("Ruhe des Schreibers", 1, "Eigenschaft", "Wann immer du einem literarischen Projekt irgendeiner Art ein Kästchen hinzufügst oder eine literaturbasierte Ressource (wie ein Buch oder eine Seekarte) erhältst, leere eine Schadensmarkierung von einer deiner Eigenschaften."),
 A("Wir beide wissen, wie das endet", 3, "Eigenschaft", "Verbrenne, um einem Crewmitglied deiner Wahl zu erlauben, bei Angriff und Verteidigung gegen eine Gefahr, der du schon begegnet bist, den Abzug zu ignorieren (für die Dauer einer Szene)."),
 A("Schreibhammer-Ordinator", 4, "Ausrüstung", "Eine klobige Maschine zum Drucken von Schrift auf Papier, die so oft klemmt, wie sie funktioniert. Verursacht NK-Stumpf-Schaden und kann markiert werden, um einer Seekarte einen negativen Marker zu entfernen."),
 A("Rosenkodex", 2, "Ausrüstung", "Ein wunderschöner Stein, in mehreren Sprachen beschrieben. Nutze eine Aufgabe, um den Kodex zu studieren und einen vorübergehenden Rang in zwei Sprachen deiner Wahl zu erhalten, bis du diesen Aspekt erneut nutzt. Markierst du während dieser Aufgabe den Kodex, erhalten auch deine Crewkameraden für dieselbe Dauer einen vorübergehenden Rang in einer dieser Sprachen."),
 {c:"Das Meisterwerk", x:"3er-Leiste · Komplexe Ausrüstung\nDas ist mehr als ein Tagebuch, mehr als ein Buch … Das ist eine lebendige Geschichte deiner selbst, deines Schiffs und deiner Crewkameraden. Wenn du das Meisterwerk als Aspekt wählst, erhält es zwei Vorteile deiner Wahl aus der folgenden Liste …", l:["Notizen am Rand: Du kannst alle Schriften der rauschenden Wellen lesen (aber nicht sprechen), als hättest du Grundkenntnisse jeder Sprache.","Erinnere dich an den einen: Wenn du diese Eigenschaft nimmst, wähle entweder Bestien, Pflanzen, Insekten, Konstrukte oder Marauders. Du bist immun gegen Schaden (aber nicht gegen damit verbundene Wirkungen) durch den ersten Angriff deiner gewählten Quelle in jeder Szene.","Das Garn: Du kennst deine Geschichten. Behandle Konflikte als Triumphe, wenn du jemanden überzeugst oder dich mit ihm anfreundest, indem du eine Geschichte von Ereignissen erzählst, an denen du beteiligt warst.","Details zum Wälzer hinzufügen: Immer wenn ein Crewkamerad ein Flüstern erhält, markiere das Meisterwerk, um eine Seekarte zu erhalten, die zu diesem Flüstern gehört."]},
 A("Schmierpapier-Notizbuch", 2, "Ausrüstung", "Wann immer du eine Aufgabe nutzt, erhältst du außerdem die Ressource Hastig gekritzelte Notizen."),
 A("Federhund", 2, "Gefährte", "Ein entfernter Vetter des Nadelwolfs, der NK-Stich-Schaden verursacht. Du kannst eine Aufgabe nutzen, um eine Ressource zu erhalten, entweder Hundetinte, Hundefeder oder Hundebindung."),
 {h:"Schnellstart-Kit"},
 {a:"Wenn du einen Schnellstart-Charakter erstellst und Spielographer als Posten wählst, erhältst du folgende Boni …"},
 {tab:{k:["Wahl","Optionen"],z:[
  ["Stärke (wähle 1)","Instinkt, Schärfe, Gezeiten"],
  ["Fertigkeiten & Sprachen (wähle 5)","Fertigkeiten: Schürfen, Rasseln, Spüren, Studieren, Beeinflussen\nSprachen: Chthonisch, Saprekk, Gaudimm, Klopfen, Messingzunge, Raka Spit, Lyre-Bite, Alte Hand, Signalsprache, Highvin"],
  ["Ressourcen (wähle 2)","Bergegut: Kreidestücke, Zerrissene Seiten\nProben: Farbstoff, Chitin-Schiefertafel\nFlüstern: Noch ein Wort, Geschichten enden nie\nSeekarten: Eine kommentierte Liste, Ein Bucheinband, der Wegbeschreibungen zeigt"],
  ["Antrieb (wähle 1)","Das Meisterwerk auf befriedigende Weise vollenden\nEine wahre Geschichte deiner Crew lesen, die ein Fremder geschrieben hat"],
  ["Morast (wähle 1)","Worte schwimmen auf der Seite vor dir\nEin Zittern der Hand, das deine Schrift unleserlich macht"]]}}
]});
})(WS_NACH["one-armed-scissor"]);
(function(L){ var K = "Anhang";
function W(a, b, c, d, e, f){ return {tab:{k:["Panzerung","Dichtung","Tempo","Sägen","Tarnung","Neigung"],z:[[a,b,c,d,e,f]]}}; }
L.push({id:"schiff-skeleton-key", k:K, t:"The Skeleton Key", p:28, b:[
 {a:"Vorgefertigtes Crewschiff. Einsätze: 15 von 15 verbraucht."},
 {h:"Werte"},
 W(3,2,2,3,2,1),
 {c:"Entwurf", x:"Größe: Klein (1 Einsatz)\nRahmen: Stabil (1 Einsatz)\nRumpf: Keramik (2 Einsätze)\nBiss: Sägebug (1 Einsatz), Unterschuppen (1 Einsatz)\nAntrieb: Federwerk (1 Einsatz)"},
 {c:"Ausstattung (Motive, Zusätze, Räume)", l:["Ankersystem (gratis)","Glühwürmchen-Laternen (1 Einsatz)","Frachtkran (1 Einsatz)","Signalfackeln (1 Einsatz)","Werkstatt (1 Einsatz)","Kombüse (1 Einsatz)","Harpunenturm (2 Einsätze)","Lemuren-Rudel (1 Einsatz)"]},
 {c:"Bewaffnung", l:["Sägebug (massiver NK-Säge-Schaden)","Unterschuppen (massiver NK-Scharf-Schaden)","Harpunenturm (massiver FK-Stich-Schaden)"]},
 {c:"Unterbesatzung", x:"Lemuren-Rudel (Rudel): Das Schiff frei von Insekten halten"}
]});
L.push({id:"schiff-one-armed-scissor", k:K, t:"The One-Armed Scissor (Schiff)", p:29, b:[
 {a:"Das Bibliotheksschiff der Scissor-Crew. Einsätze: 18 von 18 verbraucht."},
 {h:"Werte"},
 W(3,1,2,2,1,4),
 {c:"Entwurf", x:"Größe: Groß (1 Einsatz)\nRahmen: Schnittig (1 Einsatz)\nRumpf: Riffeisen (1 Einsatz), Breitholz (1 Einsatz)\nBiss: Langkiefer (2 Einsätze), Enterhaken-Batterie (1 Einsatz)\nAntrieb: Chemiekompressor (1 Einsatz)"},
 {c:"Ausstattung (Motive, Zusätze, Räume)", l:["Ankersystem (gratis)","Glühwürmchen-Laternen (1 Einsatz)","Frachtkran (1 Einsatz)","Kombüse (1 Einsatz)","Frachtraum-Erweiterung (1 Einsatz)","Wildbucht-Tore (1 Einsatz)","Linsenraum (1 Einsatz)","Navigationssuite (1 Einsatz)"]},
 {c:"Bewaffnung", l:["Langkiefer (massiver NK-Säge-Schaden)","Enterhaken-Batterie (massiver FK-Stich-Schaden)"]},
 {c:"Vorreiter", x:"Seitenwinder mit Flachbett (3 Einsätze)\nPanzerung 2, Dichtung 3, Tempo 1, Sägen 2, Tarnung 1, Neigung 3"},
 {c:"Fracht und Passagiere", l:["Stapel uralter Bücher","Seekarten ferner Orte","(Mögliche) Wegbeschreibung zum Hanging Manor"]}
]});
L.push({id:"schiff-southern-march", k:K, t:"The Southern March (Schiff)", p:30, b:[
 {a:"Jackalbone-Marauder-Schiff. Einsätze: 15 von 15 verbraucht."},
 {h:"Werte"},
 W(3,2,4,3,1,2),
 {c:"Entwurf", x:"Größe: Klein (1 Einsatz)\nRahmen: Leicht (1 Einsatz)\nRumpf: Riffeisen (1 Einsatz), Leviathan-Knochen (1 Einsatz)\nBiss: Impeller (1 Einsatz), Häcksler (2 Einsätze)\nAntrieb: Magnetspulen (2 Einsätze)"},
 {c:"Ausstattung (Motive, Zusätze, Räume)", l:["Ankersystem (gratis)","Plündermotiv (2 Einsätze)","Magnet des Wrackjägers (1 Einsatz)","Kombüse (1 Einsatz)"]},
 {c:"Bewaffnung", l:["Impeller (massiver NK-Explosions-Schaden)","Häcksler (massiver NK-Säge-Schaden)","Schrapnellkanone (massiver FK-Säge-Schaden)"]},
 {c:"Notizen", x:"Das Plündermotiv gibt starke Schottentüren, verstärkte Deckreling und eine Waffenkammer mit zusätzlichen Waffen."}
]});
})(WS_NACH["one-armed-scissor"]);
