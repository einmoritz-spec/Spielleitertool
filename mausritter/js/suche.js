/* Volltextsuche (Taste „f“) über Regeln, Spielleitung, Mäuse und die drei Abenteuer */
(function(){
  GSuche.add(function(add){
    MR.regeln.forEach(function(s){ add(s.t, "Regeln", "#regeln/" + s.id, s.b); });
    MR.sl.forEach(function(s){ add(s.t, "Spielleitung", "#sl/" + s.id, s.b); });
    MR.zauber.forEach(function(z){ add(z[0], "Regeln › Zauber", "#regeln/magie", z[2]); });
    MR.maeuse.forEach(function(m){ add(m.name, "Mäuse", "#maeuse/spielmaeuse/" + m.id, [m.hg, m.text, m.aus]); });
    MR.karten.forEach(function(k){ add(k[1], "Mäuse › " + k[2], "#maeuse/gegenstaende", k[1]); });
    var G = MR.garten;
    add("Einstieg", "Der verbotene Garten", "#garten/einstieg", G.einstieg);
    G.orte.forEach(function(o){ add(o[0] + " · " + o[1], "Der verbotene Garten", "#garten/garten/" + o[0], [o[4], o[5]]); });
    add("Fallentunnel", "Der verbotene Garten", "#garten/tunnel", G.tunnel);
    add("Begegnungen", "Der verbotene Garten", "#garten/begegnungen", [G.begegnung, G.wesen]);
    add("Schätze", "Der verbotene Garten", "#garten/schaetze", G.schaetze.tab.map(function(x){ return x[0]; }));
    var A = MR.anwesen;
    A.orte.forEach(function(o){ add(o[0] + " · " + o[1], "Das Anwesen", "#anwesen/karte/" + o[0], [o[2], o[3]]); });
    A.klinkerhafen.orte.forEach(function(o){ add(o[1], "Das Anwesen › Klinkerhafen", "#anwesen/klinkerhafen/" + o[0], [o[2], o[3]]); });
    add("Audrey Pipp, Ereignisse, Aufträge, Speisekarte", "Das Anwesen › Klinkerhafen", "#anwesen/klinkerhafen", [A.klinkerhafen.audrey, A.klinkerhafen.ereignisse, A.klinkerhafen.auftraege, A.klinkerhafen.speise]);
    A.siedlungen.forEach(function(s){ add(s[0], "Das Anwesen › Siedlungen", "#anwesen/siedlungen", s); });
    A.fraktionen.forEach(function(s){ add(s[0], "Das Anwesen › Fraktionen", "#anwesen/fraktionen", s); });
    add("Verbindungen", "Das Anwesen", "#anwesen/verbindungen", A.verbindungen);
    add("Kampagne", "Das Anwesen", "#anwesen/kampagne", [A.intro, A.start, A.ende, A.begegnungen, A.geruechte]);
    var X = MR.aussen;
    X.felder.forEach(function(f){ add(f[0] + " · " + f[1], "Die Außenlande", "#aussen/karte/" + f[0], f.slice(2)); });
    X.fraktionen.forEach(function(f){ add(f[0], "Die Außenlande › Fraktionen", "#aussen/fraktionen", f); });
    add("Start", "Die Außenlande", "#aussen/start", X.start);
    add("Gerüchte und Begegnungen", "Die Außenlande", "#aussen/tabellen", [X.geruechte, X.begegnungen]);
  });
  window.sucheOpen = GSuche.open;
})();
