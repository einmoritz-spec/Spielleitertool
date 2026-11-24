/* The Spire – Bindungen (The City Must Fall, S. 23–24). Bindungs-Fallout selbst steht in fallout.js. */
window.SP_BIND = {
  t:"Bindungen", p:23,
  einl:"Bindungen sind Verbindungen, die die Spielerfiguren mit anderen Menschen, Gruppen oder Organisationen in Spire teilen. Eine Bindung ist eine grundsätzlich positive Verbindung, wenn auch vielleicht eine komplizierte.",
  abschnitte:[
    {id:"einleitung", t:"Bindungen", k:"Bindungen", p:23, b:[
      "Spielleitung, vergib Bindungen als Belohnung an die Figuren, wenn sie Verbündete anwerben oder Ziele erreichen."]},
    {id:"helfen", t:"Deinen Freunden helfen", p:23, b:[
      "Einmal pro Situation darfst du, wenn du auf eine Weise handelst, die jemandem nützt, mit dem du eine Bindung teilst, dies mit Meisterschaft tun."]},
    {id:"nsc", t:"NSC-Bindungen", p:23, b:[
      "Du kannst eine NSC-Bindung bitten, in deinem Namen einen Gefallen zu tun – etwas, das sie normalerweise nicht tun würde und das sie und die Beziehung unter Stress und Gefahr setzt. Sie ist nicht verpflichtet, zu tun, worum du bittest – und die Spielleitung kann eine Probe verlangen, um sie zur Zusammenarbeit zu bewegen –, aber wenn sie es tut, erleidet sie Stress entsprechend dem Ausmaß des erbetenen Gefallens.",
      "Behandle das Erweisen eines Gefallens als normalen Wurf. Eine NSC-Bindung würfelt 1W10, +1W10, wenn es in ihrem Fachgebiet liegt, +1W10, wenn es in ihrer Nachbarschaft oder ihrem Zuhause liegt. Erleidet eine NSC-Bindung Stress, wenn sie würfelt, um eine Aufgabe zu erfüllen, behandle die Beziehung als separaten, der Figur zugeordneten Widerstand und weise ihm den Stress zu.",
      {t:"schwarz", h:"Beispielhafte Stressstufen", b:[
        {t:"dl", x:[
          ["1 Stress", "Rat oder Zugang zu allgemeinen Informationen in ihrem Bereich geben; sicheren Durchgang durch von ihr kontrollierten Raum gestatten; vorübergehende Unterkunft anbieten."],
          ["W3 Stress", "Dir und deinen Kameraden Zugang zu einem privaten Bereich oder einer Veranstaltung verschaffen; dir ein Ausrüstungsstück leihen; bei einer Autorität in ihrem Bereich ein gutes Wort für dich einlegen; bei kleineren Verfehlungen ein Auge zudrücken."],
          ["W6 Stress", "Dir ein wertvolles Ausrüstungsstück schenken; dir und deinen Kameraden einen sicheren Zufluchtsort bieten; das Vertrauen eines Außenstehenden verraten; bei schweren Verfehlungen ein Auge zudrücken; kleinere Verfehlungen begehen; Handlungen mit mäßigem Risiko ausführen."],
          ["W8 Stress", "Einen Freund verraten; schwere Verfehlungen begehen; Handlungen mit hohem Risiko ausführen; dem Ministerium große Mengen an Ressourcen spenden."]]}]},
      {t:"bsp", x:"*Beispiel: Lozlyn hat eine NSC-Bindung zu Jackson Crouch, einem ketzerischen Rückbau-Ingenieur, der in den Straßen von Red Row düstere Galvanik-Geräte verhökert. Sie bittet ihn, ihr eine experimentelle Waffe zu leihen, an der er für einen bevorstehenden Überfall gearbeitet hat, und die Spielleitung würfelt, um das Ergebnis ihrer Bitte zu bestimmen. Das liegt in Jacksons Fachgebiet und erfordert auch nicht, dass er seinen Heimatdistrikt verlässt, also würfelt die Spielleitung 3W10. Der höchste Würfel ist eine 7, was bedeutet, dass Crouch Lozlyn die Waffe (für eine Weile) anvertraut, aber die Beziehung W3 Stress erleidet. Crouch murrt über die Zumutung, händigt die Waffe aber aus und bittet sie, diese nicht auch noch kaputt zu machen.*"},
      "Du kannst Stress von einer Bindung entfernen, indem du deinem Verbündeten im Gegenzug einen Gefallen tust; je größer der Gefallen, desto mehr Stress entfernst du."]},
    {id:"fallout", t:"Bindungs-Fallout", p:24, chip:{t:"Bindungs-Fallout, Liste", go:"nach/regeln/fallout/bindung"}, b:[
      "Bindungen zählen nicht zu deinem Gesamtstress für Fallout – sie werden getrennt behandelt, jede auf ihrer eigenen Leiste. Am Ende jeder Sitzung würfelst du für jede Bindung, auf die in dieser Sitzung Stress markiert wurde, auf Fallout. Bindungs-Fallout ist im Fallout-Abschnitt auf S. 11 beschrieben.",
      "(Ist eine Bindung vorübergehend, etwa eine, die man durch einen Zauber oder eine Klassenfähigkeit erhalten hat, würfle auf Fallout, wenn sie entfernt wird.)"]},
    {id:"stufe", t:"Bindungsstufe", p:24, b:[
      "Es gibt drei Stufen von NSC-Bindungen: Einzelperson, das ist eine einzelne Person; Straße, das ist eine kleine bis mittlere Organisation; und Stadt, das ist eine distriktweite Organisation mit beträchtlichem Einfluss.",
      {t:"bsp", x:"*Beispiel: Catspaw, ein Ritter der Norddocks, ist auf Einzelpersonen-Stufe; Catspaws Ritterorden, Das Rätselnde Schwein, ist auf Straßen-Stufe; die Ritter der Norddocks sind auf Stadt-Stufe.*"},
      "Die Stufe einer Bindung spiegelt ihre Gesamtfähigkeiten und das Ausmaß wider, in dem sie arbeitet. Spielleitung und Spielende sind aufgerufen, hier ihren gesunden Menschenverstand zu nutzen und fair zu beurteilen, was eine Organisation einer bestimmten Größe erreichen könnte.",
      "Wirkt eine Bindung gegen ein Wesen mit niedrigerer Stufe als ihre eigene, tut sie dies mit Meisterschaft. Eine Bindung kann nicht gegen ein Wesen mit höherer Stufe als ihre eigene wirken, also versucht, darin ein stufengerechtes Wesen zu finden, dem sie sich widmen kann.",
      {t:"bsp", x:"*Beispiel: Ginge der Orden des Rätselnden Schweins gegen einen einzelnen Spion vor, würfelten sie einen zusätzlichen Würfel; nähmen sie es mit einer rivalisierenden Kneipe auf, wäre es ein normaler Wurf; und sie haben nicht den Einfluss, es mit den Rittern als ganzer Organisation aufzunehmen.*"}]},
    {id:"kombinieren", t:"Bindungen kombinieren", p:24, b:[
      "Du kannst zwei Bindungen gleicher Stufe und ähnlicher Beschreibung kombinieren, um sie zu einer Bindung der nächsthöheren Stufe aufzuwerten. Hättest du zum Beispiel eine Bindung zu Catspaw aus dem vorigen Beispiel sowie eine Bindung zu Moore, einem Schmuggler, könntest du beide entfernen und durch „Flussvolk“ als Bindung der Straßen-Stufe ersetzen. Du hast immer noch eine Verbindung zu Moore und Catspaw, aber die einzelnen Verbindungen sind dir weniger wichtig als die Beziehung zu den Menschen, die allgemein rund um die Flussdocks leben."]}
  ]
};
