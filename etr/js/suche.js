/* Eat the Reich – Volltextsuche (Taste f). Index aus allen Datenfiles. */
GSuche.add(function(add){
  function secs(list, route, bereich){ (list||[]).forEach(function(s){ add(s.titel, bereich, "#"+route+(s.id?"/"+s.id:""), s.b); }); }
  secs(window.ETR_EINSTIEG, "intro", "Einführung");
  secs(window.ETR_REGELN, "regeln", "Regeln");
  secs(window.ETR_FIGINTRO, "figuren", "Figuren");
  (window.ETR_FIGUREN||[]).forEach(function(c){ add(c.name, "Figuren", "#figuren/"+c.id, c); });
  secs(window.ETR_MISSION, "mission", "Mission");
  secs(window.ETR_LEITUNG, "leitung", "Spielleitung");
  secs(window.ETR_KARTE, "karte", "Mission");
  secs(window.ETR_CHECK, "check", "Evil-Check");
  secs(window.ETR_ANHANG, "anhang", "Anhang");
  [["s3","ETR_S3"],["s2","ETR_S2"],["s1","ETR_S1"]].forEach(function(s){
    var d = window[s[1]]; if(!d) return;
    add(d.titel, "Sektoren", "#"+s[0], d.intro);
    (d.orte||[]).forEach(function(o){
      add(o.name, d.titel, "#"+s[0]+"/"+o.id, o);
      (o.gegner||[]).forEach(function(g){ add(g.name, "Gegner", "#"+s[0]+"/"+o.id, g); });
    });
    secs(d.outro, s[0], d.titel);
  });
  (window.ETR_GEGNER||[]).forEach(function(g){ add(g.name, "Gegner", "#gegner", g); });
});
window.sucheOpen = GSuche.open;
