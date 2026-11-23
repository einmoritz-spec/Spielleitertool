/* Die Seelentinte (Arkand S. 76–77) – deutsche Fassung. §…§ = Fertigkeit in Kapitälchen. Modell: plan/dragonbane/ABENTEUER_PLAN.md §2 */
window.DB_AB = window.DB_AB || {};
DB_AB["ark-tinte"] = {
 id:"ark-tinte", mul:1, t:"Die Seelentinte", band:"ark-dung", buch:"db_ark", p:76, img:"abenteuer/ark-tinte-titel",
 lage:[
  {h:"Die Lage", p:76},
  "Tief in den rauheren Vierteln des Dungs gibt es einen Ort, der Arkands radikalste Freidenker anzieht – jene, die von einer Zeit mit weit weniger Einschränkungen der persönlichen Freiheit träumen, als das gegenwärtige Regime sie auferlegt.",
  "Die Seelentinte dient seit Langem als Treffpunkt Gleichgesinnter, die frei über die Legenden rund um verschiedene Dämonenfürsten und ihre angeblichen Philosophien debattieren, ohne sich zwangsläufig einem von ihnen zu verschreiben. Der Tätowierer Kontar ist selbst neugierig, was ein aktiverer dämonischer Einfluss für die Stadt bedeuten könnte, und ermuntert zu Spekulationen darüber, wo solcher Einfluss bereits am Werk sein mag.",
  "Derzeit werden einige brisante Themen diskutiert. Allem voran wächst die Unzufriedenheit über das, was viele als Hexenjagd der Erdbrüder auf Freidenker empfinden, und es wird gefragt, ob es an der Zeit ist, zurückzuschlagen. Mehrere Stammgäste sind zu Markoths Graben gegangen und verändert zurückgekehrt, auch wenn sie sich große Mühe geben, das unter hohen Kragen oder eng gewickelten Umhängen zu verbergen. Und erst kürzlich sind ein paar Kultisten der A'thana in der Seelentinte aufgetaucht, um neue Anhänger für ihre Spinnenkönigin anzuwerben.",
  "Welche Seite werden die Spielercharaktere wählen?",
  {stein:{h:"Abenteueraufhänger", b:[{ul:[
   "*In die Arme der Kultisten:* Die Spielercharaktere können über die Zufallsbegegnungen Auf zu Markoths Graben (S. 22) und Debattierende Kultisten (S. 61) oder das Gerücht Die Seelentinte (S. 62) zur Seelentinte gelangen. Dort haben sie Gelegenheit, Kontar und seinen Kreis Gleichgesinnter kennenzulernen. Das könnte ein erster Schritt zu einer tieferen Verstrickung in die dämonische Seite Arkands sein.",
   "*Infiltration:* Wenn ihr die Kampagne Im Dienst der Bannwirker (S. 15) spielt, gibt es für die Spielercharaktere viele Gründe, die Seelentinte zu besuchen. Doch verdeckte Arbeit ist alles andere als sicher. Die Stammgäste der Seelentinte haben keine Liebe für Spitzel, und wenn die Charaktere beim Betreten des Sanatoriums der Läuterung gesehen werden, haben sie besser eine sehr überzeugende Ausrede."
  ]}]}}
 ],
 bereiche:[
  {id:"huette", t:"Die Hütte", karte:{img:"abenteuer/ark-tinte-karte", p:77}, orte:[
   {n:"1", t:"Fassade", p:76, pin:[49.6,87.2], wesen:[],
    vl:"An der Wand der kleinen Hütte spannt sich eine gegerbte Haut unbestimmter Herkunft und verkündet, dass sich hinter dieser unscheinbaren Fassade die Seelentinte befindet. Eine bleiche Orkfrau mit Spinnennetz-Tätowierungen auf der Hand stochert mit einem rostigen Dolch gelangweilt in ihren gelben Nägeln. Hinter einem schwarzen Vorhang dringt der Geruch verbrannten Fleisches auf die Straße.",
    st:[
     {k:"Die Orkin", x:"Idra, eine Kultistin der A'thana, besucht die Seelentinte seit Kurzem auf der Suche nach neuen Anhängern für den Kult. Sie lauscht aufmerksam den Gesprächen und versucht, die beeinflussbarsten Köpfe herauszufinden. Findet sie jemand Vielversprechenden, folgt sie ihm aus dem Tätowierstudio und beginnt ein scheinbar beiläufiges Gespräch, das sie rasch auf einen Streich lenkt, bei dem sie Hilfe braucht (sie trägt einen Käfig mit Spinnen bei sich; siehe den Abenteuerort A'thanas Hort)."},
     {k:"Die Haut", x:"Ein gelungener §Tierkunde§-Wurf verrät, dass die Haut höchstwahrscheinlich von einem Menschen stammt."},
     {k:"Norden", x:"Vorhang zum Tätowierstudio (Ort 2)."}
    ]},
   {n:"2", t:"Tätowierstudio", p:76, pin:[49.4,51.3], wesen:["ark-tinte-kontar"],
    vl:"In einem Raum, kaum größer als ein großzügiger Abort, steht ein stabiler Stuhl aus dunklem Holz mit dicken Fesseln. Außerdem gibt es einen Arbeitshocker, einen kleinen Tisch voller Nadeln und Tintengläser und eine Feuerstelle, in der Nadeln erhitzt werden. An den Wänden hängen Tätowierungen auf etwas, das wie echte Haut aussieht.",
    st:[
     {k:"Kultisten", x:"Dämonenkultisten versammeln sich hier oft, um zuzusehen, wie ihren Brüdern und Schwestern ihre Überzeugungen in die Haut gebrannt werden. Ist das Studio geöffnet, sind stets mindestens so viele Kultisten anwesend, wie es Spielercharaktere gibt."},
     {k:"Die Einweihung", x:"Zeigen die Charaktere sichtbare Zeichen der Treue zu Drachen, zum Tempel des Wahren Feuers, zu Elrita Blutauge oder ähnlichen Ideologien, werden sie höflich gebeten zu gehen. Andernfalls werden sie gebeten, ihr Anliegen zu nennen. Wollen sie bleiben, zuhören und an den Diskussionen teilnehmen, bietet Kontar ihnen eine einfache Tätowierung an – einen schwarzen Punkt in einem Wellenkreis –, um anderen in Arkand zu zeigen, dass sie Freidenker sind."},
     {k:"Verfolgt", x:"Haben die Charaktere Zeichen der Loyalität zu Drachen oder zum Tempel des Wahren Feuers gezeigt, werden sie von Kultisten verfolgt, wenn sie die Seelentinte verlassen. Von nun an kannst du, wann immer es passend erscheint, Dämonenkultisten auftauchen lassen, um den Charakteren eine Lektion zu erteilen! Siehe die Zufallsbegegnung Debattierende Kultisten auf S. 61."},
     {k:"Kontar", x:"Kontar ist fast immer in seinem Studio und meist damit beschäftigt, jemandem seine Kunst in die Haut zu stechen. Doch er vermisst seine Freundin Uniala, die Gerüchten zufolge von den Erdbrüdern verschleppt wurde, und sucht eifrig fähige Leute, die ihm bei seiner Rache helfen."},
     {k:"Gerüchte", x:"Bleiben die Charaktere eine Weile, können sie Gerüchte über Markoths Graben aufschnappen (mehrere Kultisten waren dort und wurden körperlich davon gezeichnet), über Duendors Drachenreiterakademie (manche träumen davon, Artefakte zu finden, die im Kampf gegen Drachen nützlich sein könnten), über den Kult der A'thana (ihre Anhänger sind oft in der Seelentinte anzutreffen und sprechen gern über ihre Sache) oder über die Erdbrüder (Kontar ist nicht der Einzige, der sich an ihnen rächen will)."},
     {k:"Die Tätowierungen", x:"Ein gelungener §Mythen & Legenden§-Wurf erlaubt den Charakteren, die Symbole von Markoth und Sathmog zu erkennen."},
     {k:"Süden", x:"Schwarzer Vorhang oder Tür zur Fassade (Ort 1)."},
     {k:"Norden", x:"Vorhang zum Schlafzimmer (Ort 3)."}
    ]},
   {n:"3", t:"Schlafzimmer", p:77, pin:[49.5,29.3], wesen:[],
    vl:"Eine kleine Nische mit einem abgewetzten Teppich, einem niedrigen, schiefen Bett und einem direkt in die zugige Wand eingebauten Abort.",
    st:[
     {k:"Kontars Schwarzes Buch", x:"Im feuchten Stroh der Matratze versteckt (zu finden, indem man dort sucht oder mit einem gelungenen §Entdecken§-Wurf) liegt Kontars schwarzes Buch, in dem er jedes Gerücht notiert hat, das er in der Seelentinte gehört hat. Als Spielleiter kannst du daraus beliebige Gerüchte wählen, die zu deiner Kampagne passen."},
     {k:"Süden", x:"Vorhang zum Tätowierstudio (Ort 2)."},
     {k:"Unten", x:"Der obere Teil des Aborts lässt sich abnehmen, was einen hervorragenden Fluchtweg ins Wasser unter der Hütte freigibt."}
    ]}
  ]}
 ],
 figuren:{
  "ark-tinte-kontar":{typ:"nsc", t:"Kontar", p:77, tp:26,
   werte:[["Bewegung","12"],["Schadensbonus STÄ","+W6"],["TP","26"]],
   zl:[["Rüstung","–"],["Fertigkeiten","Täuschen 14, Raufen 14, Handwerk 14, Heilkunde 12, Mythen & Legenden 14, Überzeugen 16"],["Talente","Berserker, Schlachtruf, Furchtlos, Wuchtiger Schlag, Robust × 5"],["Waffen","Großer Kriegshammer (Fertigkeitswert 14, Schaden 2W10)"]],
   text:["Kontar, ein Mensch, hegt tiefen Hass auf Drachen und ihre Anbeter. Er weigert sich, irgendwelche Motive mit Drachen zu tätowieren, da sie Unterdrückung und ein überholtes Weltbild verkörpern. Es sei denn natürlich, sie werden tot und gedemütigt dargestellt. Dann ist es etwas ganz anderes! Er ist groß, kahl und von Hals bis Fuß stark tätowiert (außer im Gesicht). In letzter Zeit sorgt er sich um seine vermisste Freundin Uniala, die spurlos von den Straßen der Stadt verschwunden ist."]}
 },
 tabellen:[
  {id:"tattoos", h:"Tätowierungen", strip:"Tätowierungen", p:77, cols:["Größe","Preis","Zeit","Motive"], rows:[
   ["Winzig","2 Silber","Ein Viertel","Ein winziger Anker, ein Herz oder ein Totenschädel"],
   ["Klein","4 Silber","Drei Viertel","Ein kleines Schwert, eine Axt oder ein Schild"],
   ["Mittel","5 Gold","Ein halber Tagesabschnitt","Ein Totenschädel auf der Schulter oder eine Seeschlange entlang des Unterarms"],
   ["Groß","10 Gold","Ein Tagesabschnitt","Abgetrennte Drachenflügel über den Schulterblättern (ein passendes Schicksal für Drachen, findet Kontar)"],
   ["Riesig","30 Gold","Zwei Tagesabschnitte mit mindestens zwei Tagen Ruhe dazwischen","Ein Mantikor, der den gesamten Rücken bedeckt, oder eine Schlange, die sich von der Schulter bis zur Hand windet"]
  ]}
 ]
};
