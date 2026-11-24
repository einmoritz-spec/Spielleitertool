/* Charaktererstellung (Metro-Grundbuch S. 190–195): eigene deutsche Zusammenfassung der Schritte und Leitfragen. Themebook-Fragen (S. 196–251) sind nicht enthalten. */
var OS_CHARAKTERERSTELLUNG = {
 "titel": "Eigene Charaktererstellung",
 "intro": "Bei der eigenen Charaktererstellung entwirfst du Themen, Power-Tags, Schwächen-Tags und Motivationen selbst, indem du Fragen beantwortest. Die Schritte bauen aufeinander auf.",
 "schritte": [
  {"id":"konzept","p":190,"titel":"Schritt 1: Charakterkonzept",
   "text":"Jeder Otherscape-Charakter ist ein Überlebender in einer techno-mythischen Dystopie. Er verankert sich in seiner eigenen Identität und wird von den Verlockungen neuer Technik und legendärer Magie beeinflusst. Mythos-Themen verbinden ihn mit Geschichte und Mythologie. Noise-Themen versprechen neue Anwendungen von Wissenschaft und Technik. Dazwischen steht das alltägliche Selbst. Mythos und Noise geben Macht, das Selbst gibt ihr Bedeutung.",
   "leitfragen":[
    "Womit verbringst du deine Zeit? Hast du Beruf, Auftrag oder Berufung?",
    "Zu welcher Kultur, Gruppe, Schicht oder Gemeinschaft gehörst du, oder möchtest du gehören?",
    "Wie nutzt du Technik? Gehört sie zu deinem Alltag? Bist du Early Adopter, freiwillig oder nicht?",
    "Welche inneren oder äußeren Kräfte treiben dich zur Veränderung? Was oder wer hält dich bei dir selbst?",
    "Woher kommst du? Gibt es eine Vergangenheit, die du lieber vergessen würdest? Warum liegt dir noch daran?",
    "Mit wem bist du trotz allem noch verbunden? Wie helft ihr euch gegenseitig oder stört euch?",
    "Hast du jemals eine Quelle erworben? Wie hat sie dich verändert? Was hast du dafür geopfert?"
   ]},
  {"id":"themen","p":190,"titel":"Schritt 2: Themen wählen",
   "text":"Wähle vier Themen aus den 14 Themenarten. Jede Kombination ist erlaubt. Du kannst die vier wichtigsten Aspekte deines Charakters notieren und passende Themenarten zuordnen oder umgekehrt. Empfohlen ist, keine Themenart doppelt zu nehmen, außer es gibt einen guten Grund. Aus dem Gleichgewicht von Selbst-, Mythos- und Noise-Themen ergibt sich die Essenz, die du auf der Charakterkarte notierst (Buch S. 134)."},
  {"id":"themebooks","p":190,"titel":"Schritt 3: Themenbuch-Fragen beantworten",
   "text":"Jedes Themenbuch enthält einen Fragebogen, der dir hilft, eigene Tags und Motivationen zu finden. Deine Antworten werden zu Power-Tags, Schwächen-Tags und Motivationen.",
   "extra":"Zusatzfrage: In einem deiner vier Themen darfst du optional eine zusätzliche Power-Tag-Frage und eine zusätzliche Schwächen-Tag-Frage beantworten. So erhältst du in diesem Thema je einen zusätzlichen Power-Tag und einen zusätzlichen Schwächen-Tag.",
   "powerTags":{
    "anzahl":"Jedes Themenbuch hat zehn Power-Tag-Fragen. Die erste (fett gedruckt) ist Pflicht, dazu wählst du zwei weitere. Die Antworten werden zu Power-Tags.",
    "regeln":[
     "Ein Power-Tag muss immer etwas Nützliches beschreiben. Neutrale Eigenschaften ohne Vorteil gehören nicht hinein.",
     "Zur Präzisierung fragst du: Welche Handlungen würde dieser Power-Tag verstärken?",
     "Mögliche Arten: Verbündete und Kontakte, Augmentierungen, Hintergrund und Beruf, Schlagworte, Ausrüstung und Gerät, Hard- und Software."
    ]},
   "schwaechenTags":{
    "anzahl":"Jedes Themenbuch hat vier Schwächen-Tag-Fragen. Du beantwortest genau eine. Die Antwort wird zum Schwächen-Tag des Themas.",
    "regeln":[
     "Ein Schwächen-Tag muss die Handlungen deines Charakters behindern. Eine Stärke, die dem Charakter nur hilft, gehört nicht hierher. Sie kann aber eine gute Identität sein.",
     "Zur Präzisierung fragst du: Welche Handlungen würde dieser Schwächen-Tag behindern?",
     "Schwächen sind wichtig für das Wachstum deines Charakters (Buch S. 133). Wähle weder zu spezifische noch zu breite Schwächen.",
     "Mögliche Arten: Sprüche, Hintergrund, verweigerte Privilegien, Fehler in Methoden, Schwächen bei Gerät und Technik, hemmende Persönlichkeitszüge, Wissenslücken, Zwänge, Rivalen und Abhängige, Einschränkungen."
    ]}
  },
  {"id":"identitaeten","p":193,"titel":"Identitäten (nur Selbst-Themen)",
   "text":"Eine Identität ist eine Aussage, an die dein Charakter fest glaubt und die ihn zum Handeln treibt. Sie ist sein Schwerpunkt. Eine Identität kann eine Überzeugung über sich selbst, ein Versprechen, ein Vorurteil, eine Grenze, ein großer Wunsch, eine starke Emotion oder eine Weltanschauung sein. Sie muss ernst gemeint sein und immer mit dem Charakter und seinem Thema zusammenhängen. Jedes Selbst-Thema hat eine eigene Identität. Wer wiederholt gegen seine Identität handelt, verliert das Thema mit der Zeit, und seine Fähigkeiten verschwinden oder verlieren an Bedeutung.",
   "fragen":["Was denkt oder fühlt dein Charakter über diesen Lebensaspekt oder wegen ihm?"]},
  {"id":"rituale","p":194,"titel":"Rituale (nur Mythos-Themen)",
   "text":"Ein Ritual stammt aus deinem Mythos und beginnt immer mit „Ich muss …“. Es ist eine echte Forderung oder Aufgabe, die der Mythos vom Charakter verlangt, nie etwas Belangloses. Ein Ritual kann eine regelmäßige okkulte Handlung sein, das Beschaffen übernatürlicher Energien, das Verhalten im Sinne der Erzählung der Quelle, eine legendäre Aufgabe oder eine Rolle in der Beziehung zum Wesen der Quelle. Wer das Ritual zu lange vernachlässigt, verliert den Mythos, und seine Kräfte werden unzugänglich oder unwichtig. Jedes Ritual muss also mit den Kräften des Themas zusammenhängen.",
   "fragen":["Wie will dein Mythos, dass du seine Geschichte in der Welt weitererzählst?"]},
  {"id":"itches","p":195,"titel":"Triebe (nur Noise-Themen)",
   "text":"Ein Trieb ist ein drängendes Bedürfnis, das aus dem Zugang zu einer futuristischen Technik entsteht. Er beschreibt entweder ein zwanghaftes Verhalten oder eine übersteigerte menschliche Regung. Ein Trieb beginnt immer mit einem Verb, etwa „Erkunde neue VR-Welten“. Er sollte sich wie ein Drang anfühlen, der bald gestillt werden will. Wer einem Trieb zu lange widersteht, verliert das Thema, dem er gehört. Jedes Noise-Thema hat einen eigenen Trieb.",
   "fragen":["Was drängt dich diese Technik zu tun?"]},
  {"id":"beziehungen","p":195,"titel":"Beziehungen in der Gruppe",
   "text":"Spielt ihr in einer Gruppe, kann jeder Charakter zu jedem anderen Mitspieler genau einen Beziehungs-Tag haben. Die Vorschläge in den Themenbüchern verbinden das Thema mit einem Mitspieler. Lass dir die Beziehung von dem anderen Spieler bestätigen. Trage die Namen der anderen Charaktere mit dem gewählten Beziehungs-Tag auf deiner Charakterkarte ein."},
  {"id":"ausruestung","p":195,"titel":"Schritt 4: Ausrüstung wählen",
   "text":"Dein Ausrüstungsthema (Buch S. 114) beginnt mit drei Power-Tags und einem Schwächen-Tag. Wähle Gegenstände aus dem Straßenkatalog (S. 252) und notiere ihre Tags auf der Ausrüstungskarte. Die Power-Tags dürfen drei Gegenstände, einen Gegenstand mit mehreren Eigenschaften oder eine Mischung davon darstellen. Mindestens einer der Gegenstände braucht einen Schwächen-Tag. Wähle Gegenstände, die deine Fähigkeiten ergänzen und dir sonst nicht verfügbare Optionen bieten."},
  {"id":"tags-klassen","p":192,"titel":"Spezifische, breite und zu breite Tags",
   "text":"Fast alle Power-Tags sind spezifisch: Sie helfen in einem begrenzten Feld oder einer klar umrissenen Situation. Breite Tags nützen in vielen Situationen, dürfen aber nur einmal über alle Themen des Charakters vorkommen. Zu breite Tags, die in fast jeder Situation gelten, müssen herabgestuft werden, sodass sie nur indirekt wirken und zunächst eine vorbereitende Handlung erfordern.",
   "beispiele":{"breit":["Gerissen","Verschlagen"],"zuBreit":["Glücklich","Kann Magie wirken"]}},
  {"id":"auslegung","p":191,"titel":"Interpretation abstimmen",
   "text":"Während der Erstellung sollte der Spielleiter interessante Fragen stellen und Vorschläge machen. Er prüft jedes Tag, jedes Ritual, jeden Trieb und jede Identität auf die Regeln dieses Abschnitts und stellt sicher, dass er die Deutung des Spielers versteht. Sobald Spielleiter und Spieler eine Deutung abgestimmt haben, ändern sie sie nur gemeinsam."}
 ]
};
