BC_PART["herausforderungen/risiko"] = {id: "risiko", t: "Risiko", sub: "Wiederholungswurf · Szene 3", s: 72, blocks: [
  {h: "Nach dem Wurf", s: 72},
  {t: "prose", p: [
    "Wenn du gewürfelt und den Erfolg bekommen hast, den du brauchtest – oder sogar mehrere Erfolge oder einen höheren Erfolg –, dann herzlichen Glückwunsch! Du hast die Herausforderung bestanden.",
    "Wenn du aber nicht den erhofften Erfolg oder gar keinen Erfolg gewürfelt hast, kannst du noch ein paar Dinge versuchen, um dich vor dem Scheitern zu retten."
  ]},
  {t: "box", h: "Das ist mein Job!", p: [
    "Die Expertisen eines Abenteurers stehen für die Bereiche, in denen er besonders bewandert ist und vor dem Scheitern keine Angst hat. Jedes Mal, wenn ein Abenteurer für eine Probe würfelt, kann er den Schicksalsmeister und seine Mitspieler fragen, ob eine seiner Expertisen für die Probe relevant ist, um einen kostenlosen Wiederholungswurf zu bekommen. Die Expertise Pistolen kommt zum Beispiel nicht nur beim Schießen ins Spiel, sondern kann auch nützlich sein, um ein bestimmtes Modell zu erkennen, eine Waffe zu reparieren oder ihren Wert einzuschätzen.",
    "Manche Expertisen, etwa Heldentum und Unterstützung, sind weniger spezifisch als andere und lassen sich in vielen Situationen einsetzen, je nach Einfallsreichtum und Überlegung der Spieler."
  ]},
  {t: "cards", cols: 3, items: [
    {h: "Risiko", s: 72, p: [
      "Wenn du mindestens 1 Erfolg beliebiger Art gewürfelt hast, mit dem Ergebnis aber nicht zufrieden bist, kannst du dich entscheiden, weiterzumachen und ein Risiko einzugehen.",
      "Bedenke, dass ein Risiko deine Erfolgschancen stark erhöht, weshalb es empfehlenswert ist, bei den meisten Würfen ein Risiko einzugehen.",
      "Dazu nimmst du alle Würfel, die nicht Teil eines Erfolgs waren, und wirfst sie neu. Beachte, dass du nicht wählen kannst, welche Würfel du behältst und welche du neu wirfst. Du musst alle Würfel behalten, die du in irgendeiner Kombination gewürfelt hast, und den Rest neu werfen. Würfelst du mindestens 1 zusätzlichen Erfolg, umso besser. Du verbesserst deine Lage.",
      "Wenn du zum Beispiel für eine Probe mit 4 Würfeln {w:1,3,3,6} würfelst, willst du es vielleicht riskieren. Dazu legst du die 2 {w:3} beiseite und wirfst die anderen 2 Würfel neu. Würfelst du dabei ein weiteres Paar oder wenigstens eine zusätzliche {w:3}, hast du Glück. Hast du aber ein Risiko genommen und keine zusätzlichen Erfolge gewürfelt, musst du 1 deiner zuvor gewürfelten Erfolge streichen.",
      "Wenn du zum Beispiel fünf Würfel geworfen hast, {w:2,3,4,4,5} bekommen hast, ein Risiko eingegangen bist und keine zusätzlichen Erfolge erzielt hast, wolltest du zu viel. Du verlierst das Paar, das du zuvor gewürfelt hattest."
    ]},
    {h: "Wiederholungswurf", s: 73, p: [
      "Es gibt Fälle, in denen du ein Risiko eingehen kannst, ohne irgendetwas zu riskieren. Wenn sich die Gelegenheit bietet, nutzt du sie besser, denn du hast nichts zu verlieren und alles zu gewinnen.",
      "Wenn du eine Probe würfelst, die zu einer deiner Expertisen passt, kannst du dich auf einen Wiederholungswurf verlassen. Ein Wiederholungswurf ersetzt die normale Risiko-Regel und erlaubt dir, Würfel neu zu werfen, ohne einen Erfolg zu verlieren.",
      "Wenn du zum Beispiel Mediziner bist und eine Probe auf Erste Hilfe würfelst, kannst du deine Expertise Medizin einsetzen, um einen Wiederholungswurf zu bekommen. Auch wenn du keine zusätzlichen Erfolge würfelst, musst du so keinen zuvor gewürfelten Erfolg streichen, wie es bei einem normalen Risiko der Fall wäre.",
      "Falls du dich fragst: Ja, das heißt, dass du einen Wiederholungswurf auch dann einsetzen kannst, wenn du mit dem ersten Wurf keinen einzigen Erfolg erzielt hast."
    ]},
    {k: "Weiter riskieren", h: "Alles oder nichts", s: 73, p: [
      "Nachdem du ein Risiko eingegangen bist oder dank deiner Expertise einen Wiederholungswurf gemacht hast, bist du mit dem Ergebnis vielleicht immer noch unzufrieden. Hast du nach dem Risiko oder dem Wiederholungswurf mindestens 1 zusätzlichen Erfolg erzielt, fühlst du dich vielleicht glücklich genug, es mit Alles oder nichts zu versuchen.",
      "Bei Alles oder nichts wirfst du ein letztes Mal alle Würfel neu, die zu keinem Erfolg gehören. Erzielst du mindestens 1 zusätzlichen Erfolg, hast du immer noch Glück. Andernfalls verlierst du ALLE zuvor gewürfelten Erfolge. Nicht umsonst heißt es „Alles oder nichts“.",
      "Kurz gesagt: Nach dem ersten Wurf kannst du ein Risiko eingehen oder einen Wiederholungswurf machen (wenn du eine passende Expertise hast). Erzielst du mit dem zweiten Wurf mindestens 1 zusätzlichen Erfolg, kannst du es mit Alles oder nichts versuchen und sehen, wie es ausgeht."
    ]}
  ]},
  {t: "script", h: "Szene 3 – Wiederholungswurf und Risiko", lines: [
    {n: "Schicksalsmeister", p: "Ihr habt euch vor ein paar Stunden getrennt, um die beiden Kartenhälften zu besorgen, und beide wart ihr erfolgreich … aber jetzt seid ihr im Dschungel verirrt, die Sonne ist euer einziger Orientierungspunkt, und selbst die scheint besorgniserregend schnell unterzugehen. Jeder von euch muss einen Weg finden, sich zu orientieren und vor Einbruch der Dunkelheit zum Lager zurückzukehren. Das ist eine KRITISCHE Herausforderung. Wenn ihr keine besseren Ideen habt, könnt ihr auf SPÄHEN würfeln."},
    {n: "Didi", p: "Ich habe hierher gefunden. Wie schwer kann es sein, zurückzufinden? Ich falte die Karte und stecke sie ein. Dann drehe ich mich um und suche meine eigenen Fußspuren."},
    {r: "Entscheidet sich für eine SPÄHEN-Probe, um seine eigenen Fußspuren zu finden. Würfelt 4 Würfel (2 für die Rauten in WILDNIS, 2 für die in SPÄHEN) und erhält {w:2,4,4,5}. Es ist nur ein EINFACHER Erfolg"},
    {n: "Didi", p: "Tja, das reicht nicht. Ich habe keine Expertise, die mir helfen könnte, also muss ich es riskieren. Los geht’s!"},
    {r: "Legt das Paar {w:4,4} beiseite und wirft die anderen 2 Würfel neu: {w:1,5}. Da er keine zusätzlichen Erfolge gewürfelt hat, verliert er sogar seinen ersten EINFACHEN Erfolg"},
    {n: "Schicksalsmeister", p: "Das ist ein totales Scheitern! Beim Blick auf den Boden findest du nur Schlamm und Wurzeln, also gehst du zögernd in irgendeine Richtung. Manchmal glaubst du, diesen oder jenen Baum wiederzuerkennen, aber in Wahrheit bist du einfach nur verirrt."},
    {n: "Laura", p: "Ich rolle die halbe Karte zusammen und stecke sie in meine Tasche. Ich sehe mich um. Ich mache mir mehr Sorgen um Didi als um mich selbst, entscheide mich aber trotzdem, zum Lager zurückzugehen, und hoffe, ihn dort zu treffen."},
    {r: "Entscheidet sich für eine SPÄHEN-Probe, um ihren Weg zurück zu finden. Würfelt 5 Würfel (3 für die Rauten in WILDNIS, 2 für die in SPÄHEN) und erhält {w:1,1,3,5,6}. Es ist nur ein EINFACHER Erfolg"},
    {n: "Laura", p: "Ein einfacher Erfolg reicht nicht, aber ich habe eine Expertise in Orientierung, die wie die Faust aufs Auge passt. Ich mache einen Wiederholungswurf."},
    {r: "Legt den EINFACHEN Erfolg {w:1,1} beiseite und wirft die anderen 3 Würfel neu: {w:1,1,6}. Ihr EINFACHER Erfolg ist zu einem EXTREMEN Erfolg geworden"},
    {n: "Schicksalsmeister", p: "Du findest dich so mühelos zurecht, dass du ohne Probleme zum Lager kommst. Auf dem Weg dorthin lässt dich dein EXTREMER Erfolg die ungeschickten Spuren erkennen, die Didi hinterlassen hat und die in eine ganz andere Richtung führen, und du kannst ihnen folgen, um ihn zu finden."},
    {n: "Laura", p: "Natürlich tue ich das, und ich versuche, es schnell zu machen."},
    {n: "Schicksalsmeister", p: "Didi, dir dreht sich schon der Kopf, und du bist ziemlich sicher, dass du völlig verloren bist. Zum Glück taucht Laura plötzlich aus dem Gestrüpp auf, und du kannst erleichtert aufatmen."},
    {n: "Laura", p: "„Wo wolltest du denn hin? Komm, wir gehen zurück.“"},
    {n: "Didi", p: "Ich grinse sie an. „Ich habe dich gesucht. Ich warte schon seit einer Stunde im Lager …“ Ich habe vielleicht keine Expertise in Orientierung, aber Lügen sind meine Spezialität!"}
  ]}
]};
