/* Das Lied des Mantikors (Arkand S. 12) – deutsche Fassung. §…§ = Fertigkeit. Modell: plan/dragonbane/ABENTEUER_PLAN.md §2 */
window.DB_AB = window.DB_AB || {};
DB_AB["ark-lied"] = {
 id:"ark-lied", t:"Das Lied des Mantikors", band:"ark", buch:"db_ark", p:12, img:"abenteuer/ark-titel", kurz:"4 Orte",
 lage:[
  "Es gibt unzählige Gründe, warum die Spielercharaktere nach Arkand kommen könnten. Vielleicht suchen sie gleichgesinnte Freidenker oder Zuflucht vor Verfolgung. Im Folgenden findest du eine Zufallsbegegnung, die die Charaktere nach Arkand führen kann: *Das Lied des Mantikors*. Diese Begegnung kann überall in der Wildnis stattfinden, am besten jedoch einige Tage oder Wochen Fußmarsch von der Stadt entfernt. Wenn das für deine Spielgruppe nicht passt, steht es dir natürlich frei, dir einen anderen Grund für ihren Besuch der Stadt auszudenken.",
  {h:"Der Auftrag", p:12},
  "Drei mutige Abenteurer, ausgesandt vom exzentrischen Akelius, dem Tiermeister von Arkand, haben nach tagelanger unermüdlicher Spurensuche einen Mantikor aus seinem Versteck gelockt. Doch der Mantikor erweist sich rasch als weit gefährlicher als erwartet. Zwei der Abenteurer sind schwer verwundet, und der dritte bricht zusammen, gerade als die Spielercharaktere eintreffen. Lies den Spielern Folgendes vor oder spiele es aus:",
  {zit:[
   "„Nach Tagen des Marschierens durch die Wildnis steigt ihr einen langen Hügel hinauf, bereit, einen guten Platz zum Lagern zu finden und eure müden Glieder auszuruhen. Gerade als ihr den Kamm erreicht, zerreißt ein furchtbarer Schrei die Luft – ein Schrei äußerster Qual.",
   "Als ihr von der Hügelkuppe hinabblickt, seht ihr ein riesiges geflügeltes Ungeheuer mit dichter, wilder Mähne und einem Stachelschwanz, das sich über einem knienden Zwerg aufbäumt, der eine Axt mit beiden Händen über den Kopf hält. Neben dem Zwerg liegen zwei reglose Körper in unnatürlicher Haltung.",
   "Noch während ihr überlegt, was ihr tun sollt, stürzt sich die Bestie auf den Zwerg und wirft ihn zu Boden. Mit ohrenbetäubendem Gebrüll reißt das Ungeheuer das Maul auf, bereit, ihm den Rest zu geben.“"
  ]},
  "Was als Nächstes geschieht, liegt bei den Spielercharakteren!"
 ],
 bereiche:[
  {id:"ablauf", t:"Ablauf", orte:[
   {n:"1", t:"Der Kampf gegen den Mantikor", p:12, wesen:["lied-mantikor"],
    b:[
     "Sobald du den Text vorgelesen hast, beginnt die erste Kampfrunde. Ein erfolgreicher §Tierkunde§-Wurf (keine Aktion) verrät, dass es sich bei der Kreatur um einen Mantikor handelt (siehe Mantikor im Bestiarium). Er ist weit von den Spielercharakteren entfernt. Der Mantikor kämpft, bis er 0 TP erreicht, doch ihn zu besiegen heißt nicht, dass er tot ist, nur schwer verwundet. Ein erfolgreicher §Heilkunde§-Wurf hält den Mantikor bis nach Arkand am Leben."
    ]},
   {n:"2", t:"Die Abenteurer", p:12, wesen:["lied-agritho","lied-budorin","lied-indoril"],
    b:[
     "Die drei Abenteurer sind der Zwerg Budorin, der Elf Indoril und ein Mensch namens Agritho. Wenn die Spielercharaktere eintreffen, stehen alle drei bei 0 TP. Sie können drei Runden überleben. Erfolgreiche §Heilkunde§-Würfe bringen sie wieder auf die Beine, sichtlich erschüttert und den Charakteren zutiefst dankbar für ihre Hilfe. Die Abenteurer können ihren Auftrag erklären und sind bereit, die Belohnung mit den Spielercharakteren zu teilen. Die Aufteilung der Belohnung lässt sich mit §Feilschen§ aushandeln. Agritho trägt außerdem einen Brief von Akelius bei sich, der ihnen erlaubt, den Mantikor in die Stadt zu bringen."
    ]},
   {n:"3", t:"Ankunft in Arkand", p:12,
    b:[
     "Die Gruppe erreicht das Westtor von Arkand. Nachdem sie ihr Anliegen erklärt und Akelius’ Brief vorgelegt hat, wird ihr Einlass gewährt. Haben die Spielercharaktere den Brief nicht, darf der Mantikor nicht in die Stadt gebracht werden. Dann muss einer von ihnen losgehen und bei Akelius einen holen."
    ]},
   {n:"4", t:"Begegnung mit Akelius", p:12,
    b:[
     "In Akelius’ Menagerie und Kuriositäten ist Akelius begeistert von der Leistung der Spielercharaktere. Ist der Mantikor am Leben, erzählt er ihnen, wie wunderbar es sein wird, im Theater spannende Unterhaltung zu haben. Die Belohnung für einen lebenden Mantikor beträgt 200 Goldmünzen, für einen toten nur 100. Erfolgreiches §Feilschen§ erhöht die Belohnung (bis zu höchstens 300 bzw. 200 Goldmünzen). Akelius dankt ihnen für ihre Mühen, wünscht ihnen Glück und lädt sie – falls die Verhandlungen halbwegs gut verliefen – wieder ein, um künftige Aufträge zu besprechen."
    ]}
  ]}
 ],
 figuren:{
  "lied-mantikor":{typ:"monster", t:"Mantikor", p:12, be:"mantikor", text:[]},
  "lied-agritho":{typ:"nsc", t:"Agritho (Monsterjäger)", p:17, tp:17, werte:[["Schadensbonus GEW","+W4"],["TP","17"],["WP","12"]],
   zl:[["Fertigkeiten","Bögen 12, Wildniskunde 10, Jagen & Fischen 13, Speere 14"],["Talente","Blitzschnell, Robust × 2"],["Ausrüstung","Langbogen, Langspeer, Lederrüstung"]], text:[]},
  "lied-budorin":{typ:"nsc", t:"Budorin (Monsterjäger)", p:17, tp:21, werte:[["Schadensbonus STÄ","+W4"],["TP","21"],["WP","13"]],
   zl:[["Fertigkeiten","Äxte 15, Wildniskunde 8, Armbrüste 13, Jagen & Fischen 10"],["Talente","Drachentöter, Furchtlos, Robust × 3, Schildblock"],["Ausrüstung","Schwere Armbrust, Großer Schild, Streitaxt, Lederrüstung"]], text:[]},
  "lied-indoril":{typ:"nsc", t:"Indoril (Monsterjäger)", p:17, tp:15, werte:[["Schadensbonus GEW","+W4"],["TP","15"],["WP","14"]],
   zl:[["Fertigkeiten","Bögen 16, Wildniskunde 16, Jagen & Fischen 16, Schwerter 12"],["Talente","Monsterjäger, Pfadfinder, Quartiermeister, Robust"],["Ausrüstung","Breitschwert, Langbogen, Lederrüstung"]], text:[]}
 },
 schluss:[
  {h:"Abschluss", p:12},
  "Mit Gold im Beutel und bester Laune sind die Spielercharaktere bereit, Arkand in all seinem Schmutz und Glanz zu erkunden. Haben sie sich mit den Abenteurern angefreundet, werden sie eingeladen, mit einer Runde Met im Witzlosen Einhorn zu feiern. Es könnte der Beginn einer langen und ereignisreichen Nacht sein …"
 ]
};
