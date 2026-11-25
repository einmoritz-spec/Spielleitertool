/* Into the Odd – Kapitel 6 (Nach der Expedition, S. 36–38) und Kapitel 7 (Unternehmen und Krieg, S. 39–41) */
var ITO = window.ITO = window.ITO || {};
ITO.nach = {
 intro: "Meist ist das Ziel einer Expedition, in einer geheimnisvollen Umgebung wertvolle Schätze oder mächtige Arcana zu finden. Eine erfolgreiche Expedition ist schlicht eine, die mit etwas Vorzeigbarem in Sicherheit zurückkehrt. Das kann ein verlorenes Artefakt sein, ein schreckliches Geheimnis oder einfach eine gute Geschichte.",
 kaesten: [
  ["Erfahrungsstufen","Hat ein Charakter die genannten Voraussetzungen erfüllt, steigt er zur nächsten Erfahrungsstufe auf. Bei jedem Aufstieg erhält er W6 hp und würfelt W20 für jeden seiner Werte. Ist der Wurf höher als der Wert, steigt dieser um 1."],
  ["Ruf","Mit den Erfahrungsstufen werden Charaktere von den Menschen, denen sie begegnen, womöglich anders behandelt."]
 ],
 stufen: [
  ["Novize","Ein brandneuer Charakter. Du bist bereit für eine Expedition."],
  ["Profi","Du hast mindestens eine Expedition überlebt."],
  ["Experte","Du hast seit dem Erreichen der Profi-Stufe mindestens drei gefährliche Expeditionen überlebt."],
  ["Veteran","Du hast seit dem Erreichen der Experten-Stufe mindestens fünf gefährliche Expeditionen überlebt und einen Lehrling aufgenommen."],
  ["Meister","Du hast einen Lehrling von mindestens Experten-Stufe und seit dem Erreichen der Veteranen-Stufe mit ihm eine gefährliche Expedition überlebt."],
  ["Darüber hinaus","Auch auf Meister-Stufe kann ein Charakter noch größere Ziele haben: den Wunsch nach einem Vermächtnis, nach Unsterblichkeit oder nach kosmischer Erhebung."]
 ]
};
ITO.krieg = {
 intro: "Zwischen den Expeditionen könnt ihr euch an einem Geschäftsunternehmen versuchen oder eine organisierte Streitmacht aufstellen. Abteilungen und Unternehmen kosten 10 g in der Gründung. Abteilungen verlangen weitere W6 g Unterhalt pro Monat, sonst meutern sie.",
 kaesten: [
  ["Einkommen","Neue Unternehmen erwirtschaften W4 g Einkommen pro Monat. Sie sind außerdem einer Bedrohung ausgesetzt, die W4 g Verluste verursacht, solange sie nicht abgewehrt wird. Kann ein Unternehmen seine Schulden nicht bezahlen, bricht es zusammen."],
  ["Wachstum","Macht ein Unternehmen Gewinn, rückt sein Einkommen auf die nächste Würfelart vor, höchstens bis W12. Dieser größere Würfel gilt allerdings auch für Verluste durch Bedrohungen."],
  ["Lehrlinge","Jederzeit könnt ihr einen Lehrling aufnehmen. Nehmt einen willigen Nichtspielercharakter oder würfelt ihn neu aus und lasst ihn unter eurer Anleitung wie üblich die Erfahrungsstufen durchlaufen."],
  ["Schlachten","Angriffe von Abteilungen gegen Einzelne sind gesteigert. Abteilungen nehmen durch Angriffe Einzelner keinen Schaden, es sei denn, sie sind explosiv oder entsprechend großflächig. Riskante Wagnisse können einen WIL-Rettungswurf des Anführers verlangen."],
  ["Verluste","Erleidet eine Abteilung kritischen Schaden, ist sie gebrochen und kann erst nach einer Sammlung wieder handeln. Bei STÄ 0 ist die Abteilung ausgelöscht. Ist die Hälfte einer Streitmacht gebrochen, müssen die übrigen Abteilungen einen WIL-Rettungswurf bestehen, sonst fliehen sie. hp und Werte erholen sich durch kurze und lange Rasten genau wie bei Einzelnen."],
  ["Verbesserungen","Die Ausrüstung einer Abteilung kostet das Zwanzigfache des Einzelpreises. Abteilungen beginnen mit W6 hp und steigen genau wie Einzelne in den Erfahrungsstufen auf."],
  ["Schiffe und Bauwerke","Sie ignorieren Angriffe, die schwächer sind als eine Kanone, und werden bei 0 hp zerstört. Die Wiederherstellung von hp dauert einen Tag Reparatur."]
 ],
 anfuehrer: [
  ["Yuren Spinner von der Schwarzen-Stern-Gruppe","STÄ 8, 13 hp, 5 g","Getrieben davon, Tyrannen zu stürzen und dabei reich zu werden.",[["Revolutionäre Abteilung","7 hp, Musketen (W8)."],["Untergrund-Brennerei","W4 g Einkommen."],["Schmugglerring","W6 g Einkommen."]]],
  ["Königin Essa XI., abgesetzte Aristokratin","GES 14, 5 hp","Getrieben davon, ihre Blutlinie zu bewahren und köstliche Kreaturen zu essen.",[["Königliche Garde-Abteilung","10 hp, Pferde, Moderne Rüstung, Äxte (W8)."],["Lakaien-Abteilung","7 hp, Hellebarden (W8)."],["Reptilienkult","W10 g Einkommen."],["Verborgener Weinberg","W6 g Einkommen."]]]
 ],
 schiffe: [
  ["Kanone","2 g","W12 Schaden."],["Haus","10 g","10 hp, Rüstung 1."],["Fabrik","100 g","14 hp, Rüstung 1."],["Festung","200 g","15 hp, Rüstung 3, Kanonen (W12)."],
  ["Ruderboot","50 s","4 hp."],["Galeone","100 g","10 hp, Rüstung 1, Kanonenbatterie (W12 Explosion)."],["Kriegsschiff","500 g","15 hp, Rüstung 2, Kanonenbatterie (W12 Explosion)."],["Flaggschiff","1.000 g","20 hp, Rüstung 2, Kanonenbatterie (W12 Explosion)."],["Panzerschiff","2.000 g","16 hp, Rüstung 3, Kanonen (W12)."]
 ]
};
