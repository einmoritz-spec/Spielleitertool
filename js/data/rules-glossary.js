/* ==================================================================
   RULES_GLOSSARY — vollständiges Regel-Glossar aus dem Core Book,
   Appendices S. 231–233 ("Glossary"). Vollständig ins Deutsche übersetzt,
   Reihenfolge wie im Buch alphabetisch nach dem englischen Fachbegriff
   (so wie im Original nachgeschlagen wird). Eigenständiges Nachschlage-
   Fenster (siehe #rulesModal/openRulesGloss unten) — bewusst NICHT über
   state.view geroutet, damit ein Klick während einer laufenden
   Adventure-Szene nicht aus dieser herauswirft; das Fenster legt sich
   nur als Overlay darüber, exakt wie die Karte (#mapModal).
   ================================================================== */
const RULES_GLOSSARY = [
  { en:"Abandon", cat:"C", term:"Abandon (Aufgeben)", page:"S. 75, 192", body:[
    `Eine Spur auf dem Theme-Bogen eines Helden, die festhält, wie nah es daran ist, ersetzt zu werden. Handelt der Held auf eine Weise gegen eine Quest, die die spielende Person als bedeutsam empfindet, markiert sie Abandon auf dem Theme der Quest. Ist das dritte Abandon markiert, wird das Theme ersetzt (S. 192).`,
  ]},
  { en:"Action", cat:"A", term:"Action (Aktion)", page:"S. 149", body:[
    `Die Spielphase, die der Aktion eines Helden gewidmet ist. Nachdem der Erzähler die Szene etabliert (Establish) hat und einer spielenden Person das Spotlight übergibt, beschreibt diese die Aktion ihres Helden. Der Erzähler entscheidet dann, wie dies aufgelöst wird — auf eine von drei Arten, auch Outcomes genannt: Simple, Quick oder Detailed.`,
    `(Challenges handeln in anderen Phasen, mittels Threats und Consequences.)`,
  ]},
  { en:"Adventure", cat:"D", term:"Adventure (Abenteuer)", page:"", body:[
    `Eine Legend-in-the-Mist-Geschichte mit Anfang, Mitte und Ende, meist bestehend aus mehreren Szenen, gespielt über eine oder mehrere Sitzungen.`,
  ]},
  { en:"Burn a Tag for Power", cat:"B", term:"Burn a Tag for Power (Einen Tag für Power verbrennen)", page:"S. 158", body:[
    `Vor einem Wurf kann eine spielende Person freiwillig genau einen Power- oder Story-Tag durchstreichen (scratch), der der Aktion direkt hilfreich ist, um dafür 3 Power zu erhalten (statt der üblichen 1 Power des Tags).`,
  ]},
  { en:"Camping", cat:"D", term:"Camping (Lagern)", page:"S. 179", body:[
    `Eine Szene, in der die Fellowship rastet, sich erholt und vorbereitet, typischerweise mit geringem oder keinem Einsatz. Eine besonders lange solche Phase nennt man Sojourn.`,
    `Während eines Camps oder Sojourns geschieht in dieser Reihenfolge: Der Erzähler lässt Story-Tags verfallen (expire); der Aufenthaltsort wird etabliert; jeder Held verbringt zwei Zeitabschnitte mit Rasten, Reflektieren oder Camp-Aktionen; das Fellowship-Theme erholt Tags.`,
  ]},
  { en:"Challenge", cat:"A", term:"Challenge (Herausforderung)", page:"Vol. II, S. 104", body:[
    `Eine Challenge ist jemand oder etwas, das den Helden oder ihrem Vorhaben im Weg steht. Sie präsentiert Threats, die zu Consequences werden können, und die Helden müssen handeln, um sie zu überwinden. Ist eine Challenge überwunden, hört sie auf, die Ziele der Helden zu behindern.`,
    `Eine Challenge mit Limit ist darauf ausgelegt, über mehrere Aktionen hinweg überwunden zu werden und im Mittelpunkt einer Szene zu stehen. Eine Challenge ohne Limit ist darauf ausgelegt, mit einer einzigen Quick-Aktion überwunden zu werden.`,
  ]},
  { en:"Consequences", cat:"A", term:"Consequences (Konsequenzen)", page:"S. 160", body:[
    `Eine Story-Entwicklung, die den Helden das Leben schwerer macht. Zugleich der Name der Spielphase, in der der Erzähler Consequences verhängt. Consequences können eintreten, wenn:`,
    `<ul><li>Die Helden eine Threat ignoriert haben.</li><li>Der Erzähler sich entscheidet, einen Weakness-Tag zu invoken, und erklärt, wie dessen Präsenz eine nachteilige Entwicklung bewirkt.</li><li>Eine Aktion zu Consequences geführt hat. Bei einer Simple-Aktion ist dies die Entscheidung des Erzählers. Bei einem Wurf für eine Quick- oder Detailed-Aktion führt ein Endergebnis (Würfel + Power) von 9 oder weniger (oder eine gewürfelte Doppel-Eins) zu Consequences.</li></ul>`,
    `Consequences können rein erzählerisch sein oder negative Spiel-Effects umfassen. Bevor Consequence-Effects auf einen Helden angewendet werden, kann der Erzähler diesem erlauben, eine Reaction zu würfeln, um sie abzuschwächen.`,
  ]},
  { en:"Detailed", cat:"A", term:"Detailed (Detailliert)", page:"S. 151", body:[
    `Eine Art, die Aktion eines Helden aufzulösen, wenn der Erzähler (a) einen Konflikt mit mehr Details, Zug um Zug, durchspielen möchte, (b) den Erfolgsgrad messen will, oder (c) die spielende Person das genaue Ergebnis wählen lassen will.`,
    `Die spielende Person würfelt wie bei einer Quick-Aktion und gibt dann die Power der Aktion für passende Effects aus.`,
  ]},
  { en:"Effects", cat:"B", term:"Effects (Effekte)", page:"S. 154", body:[
    `Das Ergebnis einer Aktion oder von Consequences, dargestellt durch Spielelemente wie Tags und Status. Ein Held kann Power ausgeben, oder ein Erzähler kann Consequences nutzen, um Spielelemente zu manipulieren und Vorteile zu erlangen: Tags erschaffen oder entfernen, Status verleihen oder verringern, und für einen Helden neue Details entdecken oder zusätzliche Feats wählen (S. 157).`,
    `Die Power-Ausgabe eines Helden entsteht meist in einer Detailed-Aktion oder während Camp/Sojourn. Der Erzähler gibt keine Power aus und kann eine beliebige Anzahl von Effects in beliebiger Stärke wählen.`,
  ]},
  { en:"Establish", cat:"A", term:"Establish (Etablieren)", page:"S. 146", body:[
    `Die Spielphase, die der Darstellung der aktuellen Situation in einer Szene gewidmet ist. Zu Beginn einer Szene und zu Beginn jeder Runde beschreibt oder aktualisiert der Erzähler die Szene, neue Entwicklungen, den Einsatz, die Challenges und ihre Threats — und übergibt dann einem Helden das Spotlight, damit dieser eine Aktion vornehmen kann.`,
  ]},
  { en:"Expire", cat:"D", term:"Expire (Verfallen)", page:"", body:[
    `Die Entscheidung des Erzählers, einen Story-Tag oder Status zu entfernen, wenn er erzählerisch keinen Sinn mehr ergibt. Dies geschieht typischerweise während Establish (bei kurzlebigen Tags), am Ende einer Szene, oder zu Beginn eines Camps oder Sojourns.`,
  ]},
  { en:"Hero", cat:"C", term:"Hero (Held/Heldin)", page:"", body:[
    `Eine der Hauptfiguren eines Legend-in-the-Mist-Spiels, dargestellt und gesteuert von einer der spielenden Personen.`,
  ]},
  { en:"Improve", cat:"C", term:"Improve (Verbessern-Spur)", page:"S. 187", body:[
    `Eine Spur auf dem Theme-Bogen eines Helden, die dessen schrittweise Verbesserung festhält. Ein Held markiert Improve auf einem Theme, wenn dessen Weakness-Tag invoked wird, oder wenn während des Camps Reflect gewählt wird. Ist das dritte Improve markiert, setzt der Held die Spur auf null zurück und erhält eine Improvement.`,
  ]},
  { en:"Improvement", cat:"C", term:"Improvement (Verbesserung)", page:"S. 187", body:[
    `Eine Weiterentwicklung für ein Theme, die dessen Nutzen erhöht, meist durch das Hinzufügen eines Power-Tags. Ein Theme erhält eine Improvement, wenn das dritte Improve darauf markiert ist, oder wenn während eines Sojourns Reflect gewählt wird.`,
  ]},
  { en:"Invoke", cat:"B", term:"Invoke (Anrufen)", page:"", body:[
    `Das Benennen eines relevanten Tags oder Status durch einen Helden oder den Erzähler beim Zählen von Power für eine Quick-Aktion, Detailed-Aktion oder einen Reaction-Wurf. Der Erzähler kann auch die Weakness-Tags eines Helden invoken, um Consequences zu erzeugen.`,
  ]},
  { en:"Journey", cat:"D", term:"Journey (Reise)", page:"", body:[
    `Eine Challenge, die einen schrittweisen Fortschritt durch eine Landschaft, durch Zeit oder durch einen Prozess darstellt, gespielt als Abfolge kurzer Vignettes.`,
  ]},
  { en:"Lessen", cat:"B", term:"Lessen (Abschwächen)", page:"S. 162", body:[
    `Die Power eines erfolgreichen Reaction-Wurfs nutzen, um Effects zu verringern oder zu entfernen, die als Consequences erhalten wurden — durch Ausgabe derselben Power-Menge, die diese Effects erzeugen würde.`,
  ]},
  { en:"Limit", cat:"B", term:"Limit (Limit)", page:"S. 169", body:[
    `Jeder Held und manche Challenges besitzen ein oder mehrere Limits: eine Zahl zwischen 1 und 6, die die höchste Stufe angibt, die von einem bestimmten Status genommen werden kann. Wird ein Limit erreicht, ist der Held oder die Challenge überwunden und kann keine Aktion mehr vornehmen, für die dieser Status relevant wäre. Das Limit eines Helden für jeden Status ist 5.`,
    `Helden müssen unter Umständen erst handeln, um die Limits einer Challenge aufzudecken. Übersteigt die Stufe eines Status ein Limit, werden dessen Effects auf tödliche oder transformative Weise langanhaltend oder dauerhaft. Ein Limit wird mit rotem Hintergrund geschrieben, die Stufe (max.) in einem Schild oder in Klammern, etwa <code>harm(4)</code>.`,
  ]},
  { en:"Might", cat:"C", term:"Might (Macht)", page:"S. 171–175", body:[
    `<span class="section-heading">Grundprinzip</span>
    <p>Might stellt den grundlegenden Unterschied zwischen drei Fähigkeits-Ebenen dar: <strong>Origin</strong> (0), das Gewöhnliche; <strong>Adventure</strong> (3), das Bemerkenswerte; und <strong>Greatness</strong> (6), das Unglaubliche. Die mächtigen (mighty) Aspekte eines Helden werden durch dessen Adventure- und Greatness-Themes bestimmt.</p>`,
    `Wenn eine spielende Person die Aktion ihres Helden beschreibt, kann der Erzähler entscheiden, die Might des Helden mit der für die Aktion im jeweiligen Aspekt erforderlichen Might zu vergleichen:
<ul>
<li>Stimmen beide Might-Stufen überein (der häufigste Fall), ist der Held weder Imperiled noch Favored.</li>
<li>Versucht der Held eine Aufgabe <strong>über</strong> seiner Might, ist er <strong>Imperiled</strong> (gefährdet).</li>
<li>Versucht der Held eine Aufgabe <strong>unter</strong> seiner Might, ist er <strong>Favored</strong> (begünstigt).</li>
</ul>`,
    `<span class="section-heading">Imperiled (gefährdet)</span>
    <p>Ein Held, der eine Aktion eine Might-Stufe über der eigenen versucht (Origin vs. Adventure, oder Adventure vs. Greatness), handelt Imperiled. Er scheitert entweder automatisch (bei Simple-Aktionen) oder verliert zusätzlich zu allen gezählten Tags und Status <strong>3 Power</strong> (bei Quick- oder Detailed-Aktionen).</p>
    <p>Diese Strafe gilt nicht für Reactions. Stattdessen erhöht der Erzähler, nimmt der Held Consequences von einer Quelle eine Might-Stufe über der eigenen hin, die Effects dieser Consequences um <strong>3 Status-Stufen oder einen Tag</strong>.</p>
    <p>Im Extremfall liegt der Held zwei Might-Stufen unter dem Erforderlichen (Origin vs. Greatness): Er ist dann <strong>Extremely Imperiled</strong> (extrem gefährdet) — seine Aktion verliert 6 Power, und erhaltene Consequences werden um 6 Status-Stufen oder 3 Tags erhöht.</p>`,
    `<span class="section-heading">Favored (begünstigt)</span>
    <p>Ein Held, der eine Aktion eine Might-Stufe unter der eigenen versucht (Adventure vs. Origin, oder Greatness vs. Adventure), handelt Favored. Er gelingt entweder automatisch (bei Simple-Aktionen) oder gewinnt zusätzlich zu allen gezählten Tags und Status <strong>3 Power</strong> (bei Quick- oder Detailed-Aktionen).</p>
    <p>Dieser Bonus gilt nicht für Reactions. Stattdessen verringert der Erzähler, nimmt der Held Consequences von einer Quelle eine Might-Stufe unter der eigenen hin, die Effects dieser Consequences um <strong>3 Status-Stufen oder einen Tag</strong> — was die Consequences potenziell vollständig aufheben kann.</p>
    <p>Im Extremfall liegt der Held zwei Might-Stufen über dem Erforderlichen (Greatness vs. Origin): Er ist dann <strong>Extremely Favored</strong> (extrem begünstigt) — seine Aktion gewinnt 6 Power, und erhaltene Consequences werden um 6 Status-Stufen oder 3 Tags verringert.</p>`,
    `<span class="section-heading">Wann ist man Imperiled?</span>
<ul>
<li>Du bist der Gegenseite dramatisch unterlegen.</li>
<li>Du hast weit weniger Fähigkeiten, als benötigt werden.</li>
<li>Du stehst einem deutlich größeren Gegner gegenüber.</li>
<li>Du versuchst, ein größeres Gebiet oder eine größere Gruppe abzudecken, als du normalerweise beherrschst.</li>
<li>Du setzt vergleichsweise unterlegene Magie oder Macht ein.</li>
<li>Du hast zu wenig Einfluss, um dies durchzuziehen.</li>
</ul>`,
    `<span class="section-heading">Wann ist man Favored?</span>
<ul>
<li>Du übertriffst deine Gegner dramatisch.</li>
<li>Du hast weit mehr Fähigkeiten, als benötigt werden.</li>
<li>Du bist deutlich größer als dein Gegner.</li>
<li>Du bist deinem Ziel zahlenmäßig deutlich überlegen.</li>
<li>Du setzt magische Macht von größerem Ausmaß ein, als nötig wäre.</li>
<li>Du verfügst über weit mehr Einfluss, als deine Gegner oder die Situation erfordern.</li>
</ul>`,
    `<span class="section-heading">Peril überwinden</span>
    <p>Ist ein Held Imperiled, weil er einer mächtigeren Aufgabe gegenübersteht, kann er:</p>
<ul>
<li>Einen Tag für Power verbrennen (S. 158).</li>
<li>Versuchen, eine Vulnerability zu entdecken, die das Kräfteverhältnis ausgleichen würde.</li>
<li>Versuchen, sich anders auf die Challenge einzulassen, sodass die eigene Might (oder deren Fehlen) zu einem Vorteil statt einem Nachteil wird.</li>
</ul>`,
    `<span class="section-heading">Might als Nachteil (Might as a Detriment)</span>
    <p>Might ist nicht immer von Vorteil — die eigene Macht kann sich gegen einen wenden, egal ob Challenge oder Held! Der Erzähler kann entscheiden, dass ein mächtiger Aspekt als Hindernis für eine Aktion in einem anderen Aspekt wirkt. Das geschieht häufig, wenn der mächtige Aspekt einengt, begrenzt oder stört, oder wenn das Ziel der Aktion angesichts der eigenen Might unpassend, belanglos oder unter der eigenen Würde erscheint.</p>
    <p>Beispiele: Die Größe eines Ogers (Adventure in Größe) kann gegen ihn arbeiten, wenn er versucht, winzige Gegenstände zu verstecken oder zu handhaben; das politische Leben eines Königs (Greatness in Einfluss) kann bedeuten, dass er wenig Zeit fürs Kochen hat oder das Treiben der Dienerschaft nicht bemerkt; und der feurige Atem eines Drachen (Greatness in Zerstörung) ist keine Waffe, die für Diskretion, Subtilität oder Zurückhaltung bekannt ist.</p>
    <p>Kann ein Held die Might eines Gegners gegen diesen wenden, ist er <strong>Favored</strong> — selbst wenn er selbst geringere Might besitzt. Behindern die mächtigen Aspekte eines Helden diesen bei einer bestimmten Aufgabe, ist er <strong>Imperiled</strong>.</p>`,
    `<span class="section-heading">Wann wirkt gegnerische Might als Nachteil?</span>
    <p>Die Might eines Gegners (Adventure oder Greatness) wirkt zu dessen Nachteil, wenn:</p>
<ul>
<li>Seine Might es ihm erschwert, dorthin zu gelangen oder dort zu handeln, wo du bist, oder in deiner Größenordnung zu agieren.</li>
<li>Er versucht, etwas zu verbergen, das schlicht zu groß oder zu auffällig ist.</li>
<li>Seine Aufmerksamkeit auf größere Dinge gerichtet ist als auf dich.</li>
<li>Er nach deinen Regeln oder auf deinem Niveau spielt.</li>
<li>Er auf eine Weise interagiert, die er nicht gewohnt ist angesichts seiner Might.</li>
</ul>`,
    `<span class="section-heading">Wann wirkt eigene Might als Nachteil?</span>
    <p>Die eigene Might (Adventure oder Greatness) kann zu deinem eigenen Nachteil wirken, wenn:</p>
<ul>
<li>Du eine Aufgabe versuchst, für die deine Werkzeuge oder Fähigkeiten zu groß, grob oder pauschal sind.</li>
<li>Du versuchst, subtil, nuanciert oder verborgen zu handeln, deine Might aber Aufmerksamkeit erregt.</li>
<li>Du versuchst, etwas oder jemanden zu bemerken oder zu finden, das/den du normalerweise als unwichtig oder unter deiner Würde betrachten würdest.</li>
<li>Du in Umgebungen oder auf Arten interagierst, die dir fremd sind oder mit denen du wegen deiner Might den Kontakt verloren hast.</li>
<li>Du zu sehr mit deinen mächtigen Vorhaben und Sorgen beschäftigt bist, um richtig aufzupassen.</li>
</ul>`,
    `<span class="section-heading">Gegnerische Might ausnutzen</span>
    <p>Die Might einer Challenge gegen sie selbst wirken zu lassen, erfordert meist kluges Nachdenken und eine gezielte Aktion. Es hängt stark von der Situation ab, Momente oder Orte zu finden, an denen ein mächtiger Aspekt zum Nachteil wird. Ein bescheidener Totengräber (Origin) kann einen übersehenen Zugangspunkt finden und sich in ein schlafendes, befestigtes Heerlager schleichen (Adventure), weil er ausnutzen kann, dass die Patrouillen ein großes Gebiet abdecken müssen — steht das Lager jedoch in Alarmbereitschaft, machen Dutzende aktive Soldaten auf Eindringlingssuche die Aufgabe schwerer, nicht leichter.</p>`,
    `<span class="section-heading">Sonderfälle</span>
    <p>Heben sich Vor- und Nachteile der Might gegenseitig auf, wird die Figur für diese Aktion wie auf Origin-Stufe behandelt.</p>
    <p>Manchmal ist ein Held bei einer bestimmten Aufgabe zugleich mächtig, während auch die Might einer Challenge gegen ihn eingesetzt wird. Der Erzähler berücksichtigt all dies und entscheidet einfach zwischen Favored und Extremely Favored. Dasselbe gilt umgekehrt, ist ein Held sowohl durch die Might einer Challenge im Nachteil als auch durch seine eigene Might behindert.</p>`,
    `<span class="section-heading">Detailed Might (Scale)</span>
    <p>Der Erzähler kann sich für eine detailliertere Version von Might entscheiden, auch <strong>Scale</strong> genannt. Dabei wird die für eine Aktion erforderliche Might anhand der Schwierigkeit der Aktion und des Ausmaßes ihrer Wirkung bestimmt — etwa des betroffenen Gebiets oder der Anzahl betroffener Personen —, um einen genaueren Wert für die benötigte Might zu ermitteln.</p>
    <p>Nutze die Scale-Tabelle als Orientierung. Wähle die Beschreibung unter Area, Size oder Numbers, die den Umfang der Aktion am besten beschreibt. Dieser Might-Wert wird von der Power der Aktion <strong>abgezogen</strong>. Werte aus verschiedenen Spalten können kombiniert werden.</p>
<ul>
<li>Ein ermutigendes Lied (Origin in Performance, 0) für die gesamte Fellowship (1) = Power −1</li>
<li>Ein außergewöhnlicher Zauber (Adventure in Magie, 3), der einen Raum betrifft (1) = Power −4</li>
</ul>`,
    `<table class="rg-table"><tr><th>Might</th><th>Detailed Might (Scale)</th><th>Area</th><th>Size</th><th>Group</th></tr>
<tr><td>Origin</td><td>0</td><td>Eine Person</td><td>Ein Mensch</td><td>Ein Individuum</td></tr>
<tr><td></td><td>1</td><td>Ein Raum</td><td>Ein Pferd</td><td>Eine Handvoll</td></tr>
<tr><td>Adventure</td><td>2</td><td>Ein Haus</td><td>Ein Oger</td><td>Ein Dutzend oder zwei</td></tr>
<tr><td></td><td>3</td><td>Ein Dorf</td><td>Ein Riese</td><td>Eine Menge</td></tr>
<tr><td></td><td>4</td><td>Eine Stadt</td><td>Ein Titan</td><td>Ein Clan</td></tr>
<tr><td>Greatness</td><td>5</td><td>Eine Region</td><td>Ein Drache</td><td>Eine Armee</td></tr>
<tr><td></td><td>6</td><td>Ein Königreich</td><td>Ein Koloss</td><td>Eine Nation</td></tr>
</table>`,
    `<span class="section-heading">Might einer Gruppe</span>
    <p>Bei Nutzung von Scale können Gruppen als eine einzige Einheit behandelt werden, indem die Might eines typischen Mitglieds um die in der Numbers-Spalte angegebene Might erhöht wird. Dies gilt nur, wenn die Anzahl der Gruppe sowohl für die Aufgabe von Vorteil ist (z. B. im Kampf, als Arbeitskraft) als auch anwendbar ist (z. B. können alle Gruppenmitglieder dasselbe Ziel/dieselbe Aufgabe beeinflussen).</p>
<ul>
<li>Eine Handvoll (1) Banditen (Might 0) hat Might 1.</li>
<li>Eine Armee (5) von Drachen (Might 5) hat Might 10.</li>
</ul>`,
    `<p>Die Might einer Gruppe kann zur Power einer Heldenaktion addiert werden, wenn sie von Vorteil ist (z. B. wenn ein Held die Gruppe anführt), oder davon abgezogen werden, wenn sie von Nachteil ist (z. B. wenn ein Held gegen einen Schwarm teuflischer Widersacher kämpft).</p>
    <p>Der Erzähler kann größere Gruppen in kleinere aufteilen, bis hin zu einzelnen Mitgliedern, und sie als separate Challenges behandeln, oder kleinere Gruppen zu einer größeren zusammenfassen und als eine einzige Challenge behandeln. Eine übliche Consequence für viele Gruppen-Challenges besteht darin, ihre Numbers zu erhöhen — sie sammeln oder rufen weitere Mitglieder herbei und steigern so die potenzielle Gefahr der Challenge.</p>`,
    `<span class="section-heading">Konsequenzen anpassen (bei Scale)</span>
    <p>Consequences werden um eine Anzahl Status-Stufen angepasst, die dem Power-Modifikator der Aktion entspricht, oder um eine Anzahl Tags gleich der Hälfte des Power-Modifikators (abgerundet). Ein gewöhnlicher Musiker (Origin, 0), der die Aufmerksamkeit einer Dorftaverne (2) hält, verliert 2 Power — die Consequences dieser Aktion werden um 2 Status-Stufen oder 1 Tag erhöht.</p>`,
    `<span class="section-heading">Flächenwirkungs-Aktionen (Area Effect Actions)</span>
    <p>Nimmt ein Held eine Aktion vor, die ein Gebiet betrifft — etwa einen Auftritt (charmed-2 bei allen im Raum) oder das Entfachen eines Feuers auf einem Feld (burning-3 auf dem Feld) —, kann dies eine gemischte Gruppe von Challenges innerhalb des Gebiets betreffen. Teilen alle oder die meisten Ziele denselben Tag, Status oder dieselbe Might, die die Power der Aktion beeinflussen würde, gilt dies für die gesamte Aktion. Sind etwa alle Highglade-Adligen <em>hard to impress</em> (schwer zu beeindrucken), erleidet das Bezaubern aller im Raum wie üblich −1 Power.</p>
    <p>Sobald die Aktion aufgelöst ist, passt der Erzähler die Effects für jede Challenge einzeln an, basierend auf deren verbleibenden Tags, Status und Might. Bei einem brennenden Feld (burning-3) könnte ein Heuballen, der leicht brennt (<em>burns easily</em>), burning-4 erhalten (+1 Stufe für die +1 Power, die der Tag normalerweise gäbe), während eine steinerne Kreatur mit mächtiger Feuerresistenz möglicherweise gar keinen burning-Status erhält (−3 Stufen für die −3 Power, die Imperiled normalerweise geben würde).</p>`,
    `<span class="section-heading">Für dich als Spielleiter</span>
    <p>Might ist eines der zentralen Werkzeuge, um Kampagnen glaubwürdig zu skalieren — nutze es bewusst, um überlegene wie unterlegene Gegner spielbar zu machen, ohne auf reine Zahlenwerte zurückgreifen zu müssen. Erinnere Spieler:innen aktiv daran, nach Wegen zu suchen, gegnerische Might auszunutzen, statt nur ihre eigene Unterlegenheit zu akzeptieren — das ist oft der interessantere Spielzug als der reine Kampf gegen ungünstige Power-Modifikatoren.</p>`,
  ]},
  { en:"Milestone", cat:"C", term:"Milestone (Meilenstein)", page:"S. 187", body:[
    `Eine Spur auf dem Theme-Bogen eines Helden, die festhält, wie nah es daran ist, sich weiterzuentwickeln (evolve). Erreicht der Held einen neuen bedeutsamen Fortschritt im Verfolgen einer Quest, markiert die spielende Person Milestone auf dem Theme der Quest. Ist das dritte Milestone markiert, entwickelt sich das Theme weiter (S. 190).`,
  ]},
  { en:"Power", cat:"B", term:"Power (Power)", page:"S. 152", body:[
    `Eine Zahl, die die Wirkung und Erfolgswahrscheinlichkeit einer Aktion zusammenfasst. Sie wird bei einer Quick-Aktion, Detailed-Aktion oder Reaction zu einem Würfelwurf addiert und bei einer Detailed-Aktion oder Reaction für Effects ausgegeben. Power-Ausgabe kann manchmal auch unabhängig von einem Wurf entstehen, etwa bei einer Camp- oder Sojourn-Aktion.`,
  ]},
  { en:"Quest", cat:"C", term:"Quest (Quest)", page:"S. 188", body:[
    `Ein Ziel oder eine Überzeugung des Helden, verknüpft mit einem seiner Themes. Der Quest eines Themes zu folgen und Milestones zu markieren, kann zur Weiterentwicklung (evolve) des Themes führen (S. 190); sich von ihr abzuwenden und Abandon zu markieren, kann zum Ersetzen des Themes führen (S. 192).`,
  ]},
  { en:"Quick", cat:"A", term:"Quick (Schnell)", page:"S. 151", body:[
    `Eine Art, die Aktion eines Helden zügig aufzulösen, wenn Risiko oder Unsicherheit im Spiel sind, während das Erzähltempo hoch bleibt. Die spielende Person zählt Power, indem sie relevante Tags und Status invoked, und würfelt.`,
    `Ein Endergebnis (Würfel + Power) von 9 oder weniger (oder eine gewürfelte Doppel-Eins) führt zu Consequences; ein Endergebnis von 7 oder mehr (oder eine gewürfelte Doppel-Sechs) führt zu Success; ein Endergebnis von 7–9 führt zu beidem.`,
  ]},
  { en:"Reaction", cat:"A", term:"Reaction (Reaktion)", page:"S. 171", body:[
    `Wenn Consequences verhängt werden, kann der Erzähler einem Helden erlauben, einen Reaction-Wurf zu machen, um zu versuchen, die Effects abzuschwächen.`,
  ]},
  { en:"Recover a Power Tag", cat:"B", term:"Recover a Power Tag (Einen Power-Tag wiederherstellen)", page:"", body:[
    `Die Durchstreichung (scratch) eines Power-Tags aufheben, sodass er wieder verfügbar ist, um in Aktionen invoked zu werden. Dies erfordert normalerweise eine Aktion oder die Wahl von Rest während Camp oder Sojourn.`,
  ]},
  { en:"Relevant", cat:"B", term:"Relevant (Relevant)", page:"S. 152", body:[
    `Ein Tag oder Status ist relevant, wenn er eine Aktion direkt beeinflusst, positiv oder negativ. Ein relevanter Tag kann dem Helden gehören, einem anderen Helden, einer Challenge, in der Szene vorhanden sein, oder aus einer anderen Quelle stammen.`,
    `Der Erzähler entscheidet letztgültig, ob ein Tag oder Status relevant ist und somit beim Zählen von Power invoked werden kann. Ist ein Tag nur indirekt relevant, etwa weil er broad ist (S. 78), kann eine Prep-Aktion nötig sein (S. 153).`,
  ]},
  { en:"Scene", cat:"D", term:"Scene (Szene)", page:"", body:[
    `Ein Teil der Geschichte, der an einem bestimmten Ort zu einer bestimmten Zeit spielt. Innerhalb einer Szene arbeiten Helden darauf hin, ihre Ziele zu erreichen und den Einsatz zu gewinnen, während Challenges sich ihnen in den Weg stellen. Eine Szene kann mehrere Runden (Turns) umfassen.`,
  ]},
  { en:"Scratch a Tag", cat:"B", term:"Scratch a Tag (Einen Tag durchstreichen)", page:"S. 76", body:[
    `Wird ein Power-Tag durchgestrichen (scratch), gilt er bis zur Wiederherstellung als nicht verfügbar; ein Story-Tag wird dabei entfernt. Weakness-Tags können nicht durchgestrichen werden.`,
  ]},
  { en:"Series", cat:"D", term:"Series (Serie)", page:"", body:[
    `Eine längere Legend-in-the-Mist-Geschichte, die aus mehreren Abenteuern besteht, verbunden durch ein gemeinsames Setting, eine übergeordnete Quest, oder einen übergreifenden Schurken. Gespielt über viele Sitzungen.`,
  ]},
  { en:"Session", cat:"D", term:"Session (Sitzung)", page:"", body:[
    `Spielzeit, die dem Spielen von Legend in the Mist gewidmet ist. Eine Sitzung umfasst oft das Durchspielen mehrerer Szenen.`,
  ]},
  { en:"Simple", cat:"A", term:"Simple (Einfach)", page:"S. 150", body:[
    `Die unkomplizierteste Art, die Aktion eines Helden aufzulösen: Der Erzähler entscheidet, ob die Aktion gelingt (Success), Consequences nach sich zieht, oder beides — und was Success bzw. Consequences konkret bedeuten.`,
  ]},
  { en:"Sojourning", cat:"D", term:"Sojourning (Sojourn)", page:"", body:[
    `Siehe Camping.`,
  ]},
  { en:"Spotlight", cat:"A", term:"Spotlight (Rampenlicht)", page:"S. 148", body:[
    `Der Zustand eines Helden, der im Mittelpunkt der aktuellen Runde steht. Ein Held, der gerade an der Reihe ist, hat „das Spotlight" bzw. „ist im Spotlight". Der Erzähler entscheidet, wie das Spotlight zwischen den Runden unter den Helden wandert.`,
  ]},
  { en:"Status", cat:"B", term:"Status (Status)", page:"S. 166", body:[
    `Ein Status ist ein spezieller Tag, der einen vorübergehenden Zustand darstellt und eine Stufe besitzt, die dessen Intensität von 1 (mild) bis 6 (tödlich oder transformativ) angibt. Status werden mit grünem Hintergrund geschrieben, etwa <code>confident-2</code>.`,
  ]},
  { en:"Success", cat:"A", term:"Success (Erfolg)", page:"S. 150", body:[
    `Ein mögliches Ergebnis einer Aktion, bei dem der Held erreicht, was er will, oder Fortschritt dahin macht. Bei einem Simple- oder Quick-Outcome erklärt der Erzähler, was ein Success in der Szene bedeutet, und kann ihn auch mit positiven Effects darstellen. Bei einem Detailed-Outcome wird ein Success durch von der spielenden Person ausgegebene Power (mindestens 1) auf Effects ausgedrückt.`,
  ]},
  { en:"Tag", cat:"B", term:"Tag (Tag)", page:"S. 76", body:[
    `Kurze Beschreibungen, die Eigenschaften, Fähigkeiten, Ressourcen, Objekte und Verbündete beschreiben, die für die Geschichte wichtig oder wirkungsvoll sind. Tags legen fest, was in der Geschichte wahr ist, und können einer Aktion eines Helden Power verleihen, wenn sie invoked werden. Tags können sich zu einem Theme zusammenfügen.`,
    `Ein Tag, der für viele verschiedene Arten von Aktionen relevant ist, heißt „broad"; ist er nur indirekt relevant, kann der Erzähler vor der Nutzung eine zusätzliche Prep-Aktion verlangen. Es gibt drei Arten von Tags:`,
    `<ul>
      <li><strong>Power-Tag:</strong> Ein dauerhafter, hilfreicher (positiver) Tag eines Helden. Power-Tags entstehen bei der Heldenerschaffung (S. 77), als Improvement, oder beim Erhalt neuer Themes (S. 190 und 192). Werden sie durchgestrichen (scratch), sind sie vorübergehend nicht verfügbar, bis sie wiederhergestellt werden. Power-Tags werden mit gelbem Hintergrund geschrieben, etwa <code>bowmanship</code>.</li>
      <li><strong>Weakness-Tag:</strong> Ein dauerhafter, hinderlicher (negativer) Tag eines Helden. Weakness-Tags entstehen bei der Heldenerschaffung (S. 77), als Improvement, oder beim Erhalt neuer Themes (S. 190 und 192). Wird er negativ für einen Wurf invoked, oder vom Erzähler für Consequences, markiert der Held Improve auf dem Theme des Tags. Weakness-Tags können nicht durchgestrichen werden. Sie werden mit orangefarbenem Hintergrund geschrieben, etwa <code>overconfident</code>.</li>
      <li><strong>Story-Tag:</strong> Ein vorübergehender Tag, der einem Helden gehört (aufbewahrt im Backpack, S. 76), einer Challenge, oder der Szene. Er kann sowohl hilfreich als auch hinderlich invoked werden. Für einen Helden erfordert das Erschaffen von Story-Tags typischerweise eine Aktion. Durchgestrichene Story-Tags werden aus dem Spiel entfernt. Story-Tags können verfallen (expire), wenn und wann der Erzähler dies entscheidet. Story-Tags werden mit gelbem Hintergrund geschrieben, etwa <code>shield</code> — es sei denn, sie sind bewusst als hinderlich gedacht, dann mit orangefarbenem Hintergrund, etwa <code>brittle</code>.</li>
      <li><strong>Single-use-Tag</strong> (S. 165): Ein Story-Tag, der beim ersten Invoke in einer Aktion durchgestrichen wird und nicht für Power verbrannt werden kann.</li>
    </ul>`,
  ]},
  { en:"Theme", cat:"C", term:"Theme (Thema)", page:"", body:[
    `Eine Sammlung verwandter Tags, die ein einzelnes Ding beschreiben. Ein Theme baut sich um einen zentralen Power-Tag auf, den „Theme-Titel", mit weiteren Tags, die zusätzliche Eigenschaften (Power-Tags) und Schwächen (Weakness-Tag) beschreiben.`,
    `Jeder Held hat vier Themes, jeweils mit Power-Tags, Weakness-Tags und einer Quest. Ein Theme kann erschaffen werden, indem Tags aus einem Theme-Kit gewählt werden, oder mittels eines Fragebogens namens Themebook. Es wird auf einer Theme-Karte festgehalten, die Teil des Charakterbogens eines Helden ist.`,
  ]},
  { en:"Threat", cat:"A", term:"Threat (Bedrohung)", page:"S. 147", body:[
    `Eine Beschreibung, die der Erzähler während Establish präsentiert, typischerweise eine Handlung einer Challenge, die ein unerwünschtes Ergebnis für die Helden verspricht. In der Consequence-Phase einer Runde kann der Erzähler eine unbeachtet gebliebene Threat in Consequences verwandeln.`,
  ]},
  { en:"Turn", cat:"A", term:"Turn (Runde)", page:"S. 146", body:[
    `Ein vollständiger Zyklus des Spielablaufs: Establish – Action – Consequence.`,
  ]},
  { en:"Narrative Shield", cat:"A", term:"Narrative Shield (Erzählerischer Schutzschild)", page:"S. 156", body:[
    `Gelingt eine Aktion (Success), wird sie auf die vom Helden beabsichtigte Weise abgeschlossen und dadurch in der Geschichte wahr — der Held erschlägt den Ghul, fängt den stürzenden Müllerssohn auf, oder fertigt eine wunderschöne Ebenholz-Figur. Diese neue „Wahrheit" verhindert widersprüchliche Ereignisse.`,
    `Erstens lässt sie sich normalerweise nicht ohne eine Consequence rückgängig machen. Zweitens ist sie mindestens für die Dauer der laufenden Runde vor Consequences geschützt — der Erzähler kann also nicht dieselbe Runde nutzen, um einen soeben errungenen Erfolg direkt wieder zu kassieren. Der Erzähler kann diesen Schutz je nach Situation auch länger ausdehnen, um dem Erfolg mehr Gewicht zu verleihen, etwa: „Trotz Kratzern und Kreischen hältst du die Imps mit deinem Schild vorerst weiter zurück."`,
  ]},
  { en:"Extra Feat", cat:"B", term:"Extra Feat (Zusatz-Kunststück)", page:"S. 157", body:[
    `Ein Effect, den eine spielende Person bei einer Detailed-Aktion zusätzlich zu den anderen Effects wählen kann. Ein Extra Feat ist ein Sammelbegriff für alles, was ein Held über den Haupteffekt einer erfolgreichen Aktion hinaus noch erreicht — er muss innerhalb der beschriebenen Aktion realistisch erreichbar sein. Ein Extra Feat wirkt sich <strong>nur</strong> auf die Erzählung aus, ohne Tags oder Status zu verändern; das muss über andere Effects bezahlt werden. Der Erzähler entscheidet letztlich, was ein Extra Feat bewirken kann.`,
    `Häufige Extra Feats sind u. a.: das Spotlight für eine Folgeaktion behalten, einen Nebenaspekt der Szene beeinflussen, oder — wie im Buchbeispiel — nach einem gezielten Schlag sofort noch anzugreifen, oder nach dem Flüchten zusätzlich noch eine Tür zu blockieren.`,
  ]},
  { en:"Broad", cat:"B", term:"Broad (Weitreichender Tag)", page:"S. 78", body:[
    `Ein Tag, der für sehr viele unterschiedliche Arten von Aktionen relevant sein kann (z. B. „reich" oder „berühmt"), heißt broad. Ist ein solcher Tag für eine konkrete Aktion nur indirekt relevant, kann der Erzähler verlangen, dass zuerst eine Prep-Aktion (S. 153) genommen wird, bevor er tatsächlich invoked werden darf — so wird verhindert, dass ein einzelner, sehr allgemeiner Tag praktisch immer zählt.`,
  ]},
  { en:"Backpack", cat:"C", term:"Backpack (Rucksack)", page:"S. 76", body:[
    `Der Bereich auf dem Charakterbogen eines Helden, in dem dessen Story-Tags aufbewahrt werden — im Unterschied zu den festen Power- und Weakness-Tags der vier Themes. Story-Tags im Backpack entstehen typischerweise durch eine Aktion (z. B. „einen nützlichen Gegenstand finden oder herstellen") und können anschließend wie jeder andere Story-Tag invoked, durchgestrichen (scratch) oder verfallen (expire) werden.`,
  ]},
  { en:"Fellowship", cat:"D", term:"Fellowship (Gemeinschaft)", page:"S. 138", body:[
    `Der Zusammenschluss der Helden einer Gruppe zu einer gemeinsamen Gefährtenschaft, mit einer eigenen, geteilten Fellowship Card. Die Fellowship besitzt ein eigenes Theme (Theme-Titel, zwei weitere Power-Tags, ein Weakness-Tag und eine Quest) nach denselben Regeln wie Helden-Themes — es kann ebenso verbessert, ersetzt oder weiterentwickelt werden (Improve/Abandon/Milestone).`,
    `Das Fellowship-Theme ist geteilter Besitz: Jeder Held kann seine Tags invoken, wenn sie relevant sind, und der Erzähler kann seinen Weakness-Tag für jeden beliebigen Helden invoken. Zusätzlich hält die Fellowship Card die Relationship-Tags fest, die beschreiben, wie die Helden zueinander stehen (z. B. „bosom buddies", „cannot relate").`,
  ]},
];
