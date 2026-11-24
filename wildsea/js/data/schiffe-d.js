/* Schiffe, Kap. 8 – Schritt 2: Ausstattung, Motive bis Räume (Corebook S. 174–177) */
window.WS_NACH = window.WS_NACH || {}; WS_NACH.schiffe = WS_NACH.schiffe || [];
(function(L){ var K = "Schritt 2 · Ausstattung";
function E(n){ return n === 0 ? "Gratis" : n === 1 ? "1 Einsatz" : n + " Einsätze"; }
function I(n, k, x, l){ var c = {c:n + " · " + E(k)}; if(x) c.x = x; if(l) c.l = l; return c; }
L.push({id:"ausstattung", k:K, t:"Schritt 2: Ausstattung", p:174, b:[
 {a:"Ist der Entwurf deines Schiffs entschieden, ist es Zeit für die Ausstattung. Sie stellt die spezielleren Aspekte deines Schiffs dar, die nützlichen Extras und persönlichen Noten, die es von einem einfachen Gefährt zu einem dauerhaften Zuhause machen. Konkret deckt der Ausstattungsabschnitt Motive, Zusätze, Räume, Bewaffnung und Vorreiter ab.\nAuch hier könnt ihr eure Einsätze zusammenlegen, doch viele der Ausstattungen passen zu bestimmten Wahlen von Blutlinie, Posten oder Herkunft besser als zu anderen. Scheut euch nicht, Entscheidungen zu treffen, die euch direkt nützen, und gebt eure Einsätze für etwas aus, das euch ins Auge fällt.\nKeine Ausstattung ist für ein Schiff unerlässlich, doch viele von ihnen können das Leben auf den Wellen (besonders auf längeren Reisen) erheblich leichter machen. Einsätze für Ausstattung auszugeben ist völlig optional."}
]});
L.push({id:"motive", k:K, t:"Motive [Optional]", p:174, b:[
 {a:"Eine Ausstattungswahl, die dein gesamtes Gefährt betrifft: Ein Motiv erlaubt es dir, dein Schiff auf eine bestimmte Tätigkeit „auszurichten“ (etwa Bergen oder Erkunden).\nMechanisch gibt dir ein Motiv nicht nur eine Reihe nützlicher Ausrüstung und Absonderlichkeiten für dein Schiff, es beeinflusst auch, wie andere dich wahrnehmen – Schiffe mit gewähltem Motiv werden selbst von unerfahrenen Seglern leicht als eine bestimmte Art Gefährt erkannt.\nWenn du Einsätze für ein Motiv ausgibst, notiere die Vorteile, die es verleiht. Du kannst nur ein Motiv für dein Schiff wählen – wähle weise, wenn du hier Einsätze ausgibst."},
 {h:"Gemeinsamer Denkraum"},
 {a:"Der Kauf eines Motivs für dein Schiff kann außerdem jedem Spieler am Tisch helfen, sich in die richtige Vorstellung davon zu versetzen, wie das Schiff aussehen könnte, auch ohne viele Feinheiten zu besprechen. Dennoch lohnt es sich, Aussehen und Gefühl des Schiffs als Ganzes zu beschreiben – ein Motiv gibt ein allgemeines Thema, aber wenige Einzelheiten."},
 {h:"Ressourcen zusammenkratzen"},
 {a:"Eines der wichtigsten Dinge, die ein Motiv einer Crew gibt, ist eine Reihe erzählerischer Erlaubnisse, das Wissen, dass dein Schiff wahrscheinlich bestimmte Dinge an Bord hat, auch wenn ihr sie nicht genau ausbuchstabiert habt. Das erlaubt es dir, dein eigenes Schiff auf See nach minderwertigen Ressourcen zu durchsuchen, in Schränken und Spinden nach Bergegut und Proben zu wühlen, die zum Thema deines Gefährts passen. Die Durchsuchung eines Schiffs mit dem Jagdmotiv könnte etwa eine rostige Menschenfalle, alte Bogensehnen und Speerspitzen oder die Knochen früherer Beute zutage fördern."},
 {h:"Verfügbare Motive"},
 {a:"Es steckt viel Wahres darin, sich für den Erfolg zu kleiden – ein Motiv erlaubt es dir, dieses Prinzip auf dein ganzes Gefährt auszudehnen. Ein Motiv lässt die Art von Arbeit, der deine Crew regelmäßig nachgeht, für andere auf einen Blick erkennbar werden."},
 I("Transport",2,"Egal, was auf den Wellen geschieht, egal, welche Probleme oder Kuriositäten ihre Bewohner umtreiben, es wird immer Platz geben für jene, die bereit sind, Passagiere von A nach B zu bringen. Auf Schiffen mit Transportmotiv gibt es wahrscheinlich …",["Einen sauberen und professionellen Anstrich, um potenzielle Passagiere anzulocken","Eingebaute Passagierquartiere mit unterschiedlichem Komfort","Einen stabil gebauten Schutzraum, geeignet für Passagiere, die nicht kämpfen wollen, falls das Schiff angegriffen oder geentert wird"]),
 I("Frachtverkehr",2,"Ebenso unverzichtbar wie der Transport von Passagieren: Die Beförderung und der Handel mit Fracht sind ein verlässlicher Weg zum Erfolg für zuverlässige Typen. Diese Schiffe haben wahrscheinlich …",["Laufplanken, Winden und Ladeluken für schnelles Be- und Entladen im Hafen","Einen erweiterten Frachtbereich mit zusätzlicher Sicherung und Netzen für seltsam geformte Pakete","Einen verlässlichen, in die Schiffsstruktur eingebauten Frachtkran zum Halten und Befördern besonders schwerer Kisten und Gegenstände"]),
 I("Jagd",2,"Der älteste Beruf der Wildsea: Ein Schiff mit Jagdmotiv hat wahrscheinlich …",["Trophäen aus Knochen, Fell oder Chitin, gut sichtbar am Außenrumpf zur Schau gestellt","Einen umgebauten Frachtbereich samt Tiergehegen","Eine Auswahl an Jagd- und Schlachtwerkzeugen, die Crewmitgliedern, die auf oder unter Deck kämpfen, leichten Zugang zu NK-Scharf- oder Stich-Schaden gibt"]),
 I("Bergung",2,"Nützlich für Schrotthändler, Baggerer und Wrackbändiger; Bergungsschiffe haben wahrscheinlich …",["Ein zerkratztes und verbeultes Aussehen, sodass du selbst fast wie ein Wrack wirkst","Einen umgebauten Frachtbereich mit Werkbänken und Werkzeugen zum Zerlegen","Einen in die Schiffsstruktur eingebauten Greifkran, um große Wrackteile zu packen und an Deck zu hieven oder hinter dem Schiff herzuschleppen"]),
 I("Wegfindung",2,"Wegfinder-Schiffe sind auf hartnäckige Erkundung ausgelegt und haben wahrscheinlich …",["Schmuck und Tand verschiedener kontaktierter Kulturen am Rumpf befestigt","Einen verstärkten Maschinenraum mit einem zweiten Satz Dichtungen oder Schotten, die ihn schützen","Eine Auswahl an Wildnis-Räumwerkzeugen, die Crewmitgliedern, die auf oder unter Deck kämpfen, leichten Zugang zu Hieb- oder Säge-Schaden gibt"]),
 I("Plünderung",2,"Für Wildsegler, die mit Gewalt im Sinn auf die Wellen hinausfahren, aus edlen oder weniger edlen Gründen. Schiffe mit Plündermotiv haben wahrscheinlich …",["Befestigte Deckreling, die der Crew Deckung beim Schießen (oder Beschossenwerden) gibt","Schottentüren, die geschlossen und verriegelt werden können, um Enterkommandos zu isolieren","Eine Waffenkammer-Kiste mit Waffen, die als Beute aus früheren Begegnungen genommen wurden und Crewmitgliedern, die auf oder unter Deck kämpfen, leichten Zugang zu Stumpf- oder Explosion-Schaden gibt"]),
 I("Rettung",2,"Eures ist die Art von Schiff, die Leute rufen, wenn andere Schiffe nicht in den Hafen zurückkehren. Schiffe mit Rettungsmotiv haben wahrscheinlich …",["Notfallmedizin für einige der häufigeren Leiden der Wellen","Ein Photoskop, um Wrackglitzern oder Notsignalfackeln aus großer Entfernung auszumachen","Einen Isolationsraum, gepackt mit weichem Bernsteinharz, um die Crew auf einer Reise von Krankheiten abzuschirmen und deren Fortschreiten zu verlangsamen"]),
 I("Forschung",2,"Die Geheimnisse der rauschenden Wellen sind ein Ei, das darauf wartet zu schlüpfen, und ein Forschungsschiff ist genau das richtige Werkzeug, um es aufzubrechen. Forschungsschiffe haben wahrscheinlich …",["Ein höheres Maß an allgemeiner Technologie zur Schau als üblich","Eine Bibliothek, um neue Erkenntnisse festzuhalten und in Geheimnisse und Wissen einzutauchen","Eine Snapograph-Anordnung, ein komplexes deckmontiertes Fotosystem, um Bilder der Wellen einzufangen und auf lichtempfindliches Papier zu drucken"]),
 I("Unterhaltung",2,"Für Schauspieler, Musiker, Künstler und Wanderzirkusse, all jene, die ihren Lebensunterhalt damit verdienen, das Publikum zu verzaubern. Schiffe mit Unterhaltungsmotiv haben wahrscheinlich …",["Ein knalliges Aussehen, das ins Auge fällt","Eine ins Hauptdeck eingebaute Theaterbühne","Kostümvorräte zur Darstellung verschiedener Glaubensrichtungen und Figuren"])
]});
L.push({id:"zusaetze", k:K, t:"Zusätze [Optional]", p:176, b:[
 {a:"Eine breite Kategorie von Ausstattungen, die jene Dinge abdeckt, die das Leben auf den Wellen für alle ein klein wenig leichter machen."},
 {h:"Allgemeine Zusätze"},
 {a:"Ohne ein einigenderes Thema als „Nützlichkeit“. Diese Zusätze gewähren erzählerische Erlaubnisse in einer Vielzahl von Situationen und geben dir meist mehr Optionen im Umgang mit deinem eigenen Schiff und den umgebenden Wellen."},
 I("Ankersystem",0,"Kettenlängen mit schweren gebogenen Haken, mit denen Schiffe an den Ästen der Wildsea verankert werden. Fast jedes Schiff hat dies serienmäßig."),
 I("Takelseile",1,"Über dem Deck gespannte Seile für verschiedene Zwecke, oft beklettert, als Sicherungsleinen für Ausflüge über den Schiffsrand genutzt oder mit trocknender Wäsche behängt."),
 I("Glühwürmchen-Laternen",1,"Ein Netz aus Laternen, deren leuchtende Bewohner mit einem Klopfen aufs Glas geweckt oder in den Schlaf geschickt werden, bereit, jeden Teil des Schiffs zu erhellen."),
 I("Leuchtende Blüten",1,"Flecken aus Moos oder blühenden Pflanzen, die in den dunkleren Stunden fahles Licht abgeben."),
 I("Chemischer Scheinwerfer",1,"Erhellt die Umgebung mit tageslichtgleicher Klarheit."),
 I("Überlebensstation",1,"Enthält Fackeln, Flaggen, Enterhaken, Verbände und Notrationen."),
 I("Frachtkran",1,"Ein stabiler Kran zum Be- und Entladen von Fracht, fähig, extrem schwere Gegenstände zu tragen, ohne das Schiff aus dem Gleichgewicht zu bringen."),
 I("Magnet des Wrackjägers",1,"Ein kurioser elektromagnetischer Kran, oft von Bergern benutzt. Mit den Reglern am Kran lässt sich der Magnetismus verstärken, verringern oder ganz abschalten."),
 I("Signalfackeln",1,"Farbcodierte Fackeln, die in den Himmel geschossen werden, um Funde, Bedrohungen und Positionen zu übermitteln. Zum wirksamen Gebrauch oder Verstehen ist zumindest ein Grundstock der Signalsprache nötig."),
 I("Blendlaternen",1,"Eine Reihe aus Lichtern und Blenden für blinkende optische Signale über riesige Entfernungen. Zum wirksamen Gebrauch oder Verstehen ist zumindest ein Grundstock der Signalsprache nötig."),
 I("Dampfpfeife",1,"Eine schrille, durchdringende Pfeife, um deine Anwesenheit anzukündigen oder die scheueren Bewohner der See zu verscheuchen."),
 I("Vox-Horn",1,"Ein tiefes, dröhnendes Horn, das sich auch als wirksamer Stimmverstärker nutzen lässt."),
 I("Leinensegel-Gleiter",1,"Ein Gleiter, mit einem langen Seil am Deck vertäut, der an windigen Tagen Erkundung aus der Luft erlaubt."),
 I("Abgerichtete Boten",2,"Fliegende Kreaturen, abgerichtet, ferne Landmassen (oder nahe Schiffe) aufzusuchen, ihnen Nachrichten zu überbringen und mit Antworten zurückzukehren. Wenn du abgerichtete Boten wählst, lege die Art der Kreatur fest, die du einsetzt (etwa Libellen oder Krähen)."),
 I("Festband-Funk",2,"Ein Kurzstrecken-Funksystem, das rauschbehaftete Signale senden und empfangen kann, beruhend auf kürzlich wiederentdeckter vorverdanter Technologie. Erlaubt sofortige Kommunikation, ist aber auf fragile Antennen am obersten Teil des Schiffs angewiesen."),
 {h:"Üppige Zusätze"},
 {a:"Ausstattungen, die auf das Sammeln zusätzlicher Ressourcen im Verlauf einer Reise ausgerichtet sind. Diese Zusätze gewähren noch mehr erzählerische Erlaubnisse in einer Vielzahl von Situationen und geben dir meist mehr Optionen im Umgang mit deinem eigenen Schiff und den umgebenden Wellen."},
 I("Fruchtbaum",1,"Ein uralter, an deinem Deck verwurzelter Baum, beladen mit schnell wachsenden Früchten.",["Du erhältst automatisch eine Probe auf Fruchtbasis, wenn du eine Aufgabe einsetzt, um dich um den Fruchtbaum zu kümmern."]),
 I("Nachtfarm",1,"Eine dunkle, überdachte Erdgrube zum Züchten von Pilzen.",["Du erhältst automatisch eine Probe auf Pilzbasis, wenn du eine Aufgabe einsetzt, um dich um die Nachtfarm zu kümmern."]),
 I("Blitzableiter",1,"Eine mehrzinkige Metallanordnung, die Blitze anzieht und in Keramikbatterien speichert.",["Du erhältst automatisch eine geladene Keramikbatterie, wann immer dein Schiff in einen Gewittersturm gerät."]),
 I("Wasserreiniger",2,"Ein Trichterfiltersystem.",["Du erhältst automatisch ein Fass Frischwasser mit dem Merkmal „Rein“, wann immer du Anker wirfst oder bei Regenwetter einen Pfad schneidest."]),
 I("Trawlernetze",2,"Verstärkte Netze, die bei entspannten Reisen über die Schiffsseiten gehängt werden, um größere Insekten und kleine Säugetiere zu fangen, bevor sie wieder eingeholt werden.",["Du erhältst automatisch eine normale Probe, wenn du einen Pfad schneidest."])
]});
L.push({id:"raeume", k:K, t:"Räume [Optional]", p:177, b:[
 {a:"Unterteilungen des Schiffs, ausgestattet für spezielle Aufgaben. Obwohl nischiger als ein Motiv, erfüllen Räume denselben Zweck – sie neigen den Betrieb und die Fähigkeiten deines Schiffs dazu, in verschiedenen Situationen oder für verschiedene Blutlinien, Herkünfte oder Posten nützlich zu sein.\nRäume machen dein Schiff nicht größer, daher wird das Hinzufügen vieler Räume zu einem kleinen oder Nano-Gefährt es ziemlich beengt zurücklassen."},
 {h:"Das Grundlayout"},
 {a:"Selbst wenn du beschließt, keine Einsätze für die spezifischen Räume dieses Abschnitts auszugeben, wird dein Schiff kaum eine hohle Hülle sein (es sei denn, genau das ist dein Ziel). Alle Wildsea-Gefährte haben serienmäßig ein Grundlayout aus Räumen, meist bestehend aus …"},
 {l:["Einer Steuerkabine","Einem Hauptdeck","Crewquartieren","Einem Maschinenraum","Einem Frachtraum"]},
 {h:"Gewöhnliche Räume"},
 {a:"Auf vielen Schiffen zu finden, aber definitiv nicht auf allen. Diese Räume passen besonders zu Crews, die ihr Gefährt als Zuhause behandeln statt nur als Beförderungsmittel."},
 I("Kombüse",1,"Ein Raum zum Zusammenkommen, Kochen und Essen, gefüllt mit Pfannen, Kochgeschirr und meist einem chemischen Herd."),
 I("Krankenstation",1,"Ein sauberer Raum mit Tischen und weichen Betten für Verwundete und ihre Pfleger."),
 I("Werkstatt",1,"Ein (wahrscheinlich vollgestellter) Raum mit Schmiede- und Reparaturwerkzeugen sowie einer mechanischen Werkbank."),
 I("Navigationssuite",1,"Ein Raum, der der Lagerung und Nutzung von Karten, Seekarten und Navigationsausrüstung gewidmet ist."),
 I("Metzgerei",1,"Ein sauberer Raum zum Ausnehmen und Konservieren von Proben."),
 I("Schankstube",1,"Zum Herstellen, Lagern und Konsumieren von Bier, Met und Spirituosen (der alkoholischen Art). Meist mit bequemen Sitzgelegenheiten und vielleicht Kartentischen eingerichtet."),
 I("Schutzraum",1,"Ein kleiner Raum mit gesalzenen Vorräten und Schlafrollen, von innen dreifach verriegelbar und äußerst schwer aufzubrechen."),
 I("Kühlraum",1,"Ein isolierter Raum, in dem der Atem in der Luft nebelt, perfekt zum Lagern verderblicher Waren und um dem Sonnenglast zu entkommen."),
 I("Luxusquartiere",1,"Einzelne Schlafräume für jedes Crewmitglied, komplett mit weichen Möbeln und geschmackvoller Dekoration."),
 I("Linsenraum",1,"Ein Raum voller Teleskope und Okularlupen mit beherrschendem Ausblick, eine gute Innenalternative zu einer Beobachtungsplattform."),
 I("Arrestzelle",1,"Eine Hängematte. Ein Eimer. Eine abschließbare Tür und ein Satz Eisenstangen. Die beengten Verhältnisse der meisten Schiffe lassen selten viel mehr zu."),
 I("Frachtraum-Erweiterung",1,"Ein größerer Raum mit Frachtnetzen, Wandregalen und verstärkten Bereichen für gefährlichere Gegenstände."),
 I("Unterdeck-Turnhalle",1,"Ein Satz Gewichte, Seile und Fitnessgeräte, um in Form zu bleiben, ohne sich in die Baumwipfel zu wagen."),
 {h:"Äußere Strukturen"},
 {a:"Aufs Deck oder die Außenseite des Rumpfs gebaut. Diese Räume werden von feindlichen Gewässern mit größerer Wahrscheinlichkeit beschädigt."},
 I("Liegestuhl-Zelt",1,"Ein Ruhebereich auf dem Schiffsdeck, dessen Segeltuch Schatten und eine Pause vom Wind bietet, ohne unter Deck eingesperrt zu sein."),
 I("Beobachtungsplattform",1,"Ein strebenartiger Auswuchs mit unvergleichlichem Blick auf die umgebenden Wellen, meist mit irgendeiner Verbindung zur Steuerkabine."),
 I("Unterdickicht-Plattform",1,"Eine stabile Tür, die zu einer offenen Plattform am Fuß des Schiffs führt, meist achtern, unterhalb der Reitlinie."),
 I("Kuppel",1,"Eine Blase aus Glas oder Bernstein, meist an der Seite oder am Heck des Schiffs, mit einem kleinen Sitz darin.")
]});
})(WS_NACH.schiffe);
