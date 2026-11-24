/* SLUGBLASTER – Spielleiterschirm: kompakte Übersicht aus dem Regelbuch (Kap. 1 + 4), deutsch. Keine eigenen Regeln – nur Buchtext in Kurzform.
   Reiter Regeln · SL · Beats; Spalten = Arrays von Kästen {h, c (Farbe), x (Zeilen, „·“ = Aufzählung), p (Buchseite)}. Beats kommen live aus momente.js. */
var SB_SCHIRM = {
 regeln:[
  [
   {h:"Aktionswurf", p:18, c:"lila", x:["Sag, was du versuchst, würfle 1W6.","**6** Erfolg · **4–5** Erfolg, aber ein Problem · **1–3** Fehlschlag und ein Problem.","Mehrere Würfel: das höchste Ergebnis zählt.","Die SL bestimmt Wirkung (Tempo, Ton, gesunder Menschenverstand, S. 153) und Probleme."]},
   {h:"Boost · Kick · Dare", p:19, x:["**Boost:** +1W6 auf einen Aktionswurf.","**Kick:** steigert die mögliche Wirkung; bleibt ausgegeben, auch wenn die Aktion scheitert.","Boost und Kick werden vor dem Wurf ausgegeben und frischen sich zu Beginn jedes Runs auf.","**Dare** (einmal pro Wurf): +1W6, +1 Kick oder 1 Trouble löschen – wenn du die SL 1 Bite gewinnen lässt, sie ein zusätzliches Problem (von dir vorgeschlagen) einführen lässt oder 1 Trouble markierst."]},
   {h:"Teamwork & Teilen", p:19, x:["Boost, Kick oder Dares für einen Teamkameraden einsetzen.","Slams füreinander einstecken (oder nopen).","Bauteile teilen oder tauschen · Style spenden.","Trouble kannst du nicht teilen."]}
  ],
  [
   {h:"Probleme", p:20, c:"lila", x:["Bei einem gewürfelten Problem: **Snag** (Wendung, macht es gefährlicher oder komplizierter) oder **Slam** (anhaltendes Problem für Körper, Geist, Seele oder Gerät).","Slam ins Kästchen schreiben; sind alle voll und es kommt ein neuer Slam: **Disaster**.","Slams klären sich beim Aufräumen, manche früher, wenn es Sinn ergibt."]},
   {h:"Nope!", p:20, x:["Du willst keinen Slam? Sag „Nope!“, beschreibe die coole Aktion, mit der du ihm entgehst, und markiere **2 Trouble**.","Nur Slams, keine Snags."]},
   {h:"Trouble & Disaster", p:21, c:"mag", x:["Der 8. Trouble löst das Disaster aus. Trouble löschst du in der Downtime mit Beats.","**Disaster-Wurf** (gegen Ende des Runs): 1W6 pro leerem Trouble-Kästchen, höchster zählt.","**6** Easy Street: kein Disaster, +1 Style · **4–5** Close Call: kein Disaster, +1 Trouble · **1–3** Disaster: etwas wirklich Schlimmes (S. 155), Doom."]}
  ],
  [
   {h:"Trick", p:23, x:["Vor dem Wurf „Guck mal!“ sagen: Alle Probleme sind schlimmer, bei Erfolg **+1 Style**.","Jeder ausgegebene Kick bringt +1 Style, wenn der Trick gelingt."]},
   {h:"Doom · Bruch · Legacy · Ruhm", p:21, x:["**Doom:** Narben und Schulden, bestimmt den Epilog; löschbar mit bestimmten Beats.","**Bruch:** Crew-Drama. Neuer Bruch bei vollen Kästchen: ihr trennt euch, alle +1 Doom, ein oder mehr SC verlassen die Crew.","**Legacy:** bleibende Leistungen; bestimmt den Epilog; kann durch Disaster verloren gehen.","**Ruhm:** Crew-Stufe, mit Style freigeschaltet (sechs Stufen, S. 77)."]},
   {h:"Kreislauf einer Folge", p:13, c:"lila", x:["1 Tour wählen (Ziel, Preis, Hindernis)","2 Auffrischen (Boost/Kick, Bite)","3 Die Tour!","4 Desaster??","5 Aufräumen (Style-Boni, Slams löschen, Fraktionen)","6 Downtime (Beats, freie Szenen)","Eine Folge dauert 2–4 Stunden, eine Staffel hat 5–10 Folgen. Am Ende: Epilog (S. 30)."]}
  ]
 ],
 sl:[
  [
   {h:"SL-Aktionen & Bite", p:145, c:"mint", live:"slakt"},
  ],
  [
   {h:"Gefahr", p:154, x:["**Snag:** neues Hindernis oder neue Bedrohung, Aufgabe wird komplexer (Leiste), Situation gefährlicher (künftige Probleme schlimmer), große Wendung, Besitz geht verloren. Wird nicht genopet.","**Slam:** meist einmaliger Stich – körperlich, mental, emotional oder an der Ausrüstung.","**Schlimmere Probleme** (Trick, Flucht verweigert): zwei normale Probleme, alle bekommen einen Slam oder jemand bekommt einen Super-Slam.","**Super-Slam:** mit *super* davor; beim Löschen fällt nur der Verstärker weg. Ein Nope vermeidet den Verstärker, zwei alles."]},
   {h:"Gruppenwurf & Leisten", p:148, x:["**Gruppenwurf:** ein Spieler würfelt für alle, jeder kann boosten/kicken; Erfolg gilt für alle, Probleme treffen alle.","**Leiste:** erste Leiste in einer Szene = Tempo-Entscheidung (oft 4–6 Felder). Erfolge markieren 1 (oder mehr), Gefahr rückt mit der Zeit oder bei Problemen/Bite vor."]},
   {h:"Verfolgungsjagd", p:158, x:["1 Gang bringen: „Es jagt euch! Wohin geht ihr?“","2 Kurs: Ziellinie und 3–5 Wegpunkte (Anzahl bekannt).","3 Einsatz nennen und Gefahrenleiste (3–5 Felder) setzen. Füllt sie sich, verlieren die SC.","4 Aktionen, um *schnell* durch jeden Wegpunkt zu kommen; Fehlschlag (1–3) = *langsam* und Leiste markieren."]}
  ],
  [
   {h:"Disaster-Ideen", p:155, c:"mag", live:"ideen"},
   {h:"Ton in Kürze", p:150, x:["Gonzo, aber nicht albern. Die SC sterben nicht und töten keine Menschen.","Peelback ist der Schleudersitz, wenn etwas die Plausibilität zu weit dehnt.","Im Zweifel Ja sagen und einen Wurf verlangen."]}
  ]
 ]
};
