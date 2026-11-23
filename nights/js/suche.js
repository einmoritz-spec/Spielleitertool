/* Nights of Paynetown – Volltextsuche (Taste „f“). Fälle werden beim ersten Öffnen komplett nachgeladen. */
(function(){
  GSuche.skip.sz = 1; GSuche.skip.box = 1; GSuche.skip.i = 1; GSuche.skip.stars = 1; GSuche.skip.size = 1;
  GSuche.add(function(add){
    const N = window.NIGHTS, C = N.campaign, R = N.rules || {}, tx = s => String(s || "").replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
    for(const n in N.cases){ const c = N.cases[n], ex = C.extras && C.extras[n];
      const area = ex ? ex.title : "Fall " + n + " · " + c.title;
      const secT = {}; c.sections.forEach(s => secT[s.id] = s.title);
      const bySec = {}, threats = [];
      for(const pg in c.pages) for(const b of (c.pages[pg].blocks || [])){
        if(!b.sec) continue;
        if(b.t === "threat"){ threats.push(b); continue; }
        (bySec[b.sec] = bySec[b.sec] || []).push(b.x);
      }
      c.sections.forEach(s => add(ex ? s.title : c.title + " › " + s.title, area, "#/case/" + n + "/sec/" + s.id, [s.title, bySec[s.id]]));
      threats.forEach(b => add(tx(b.name), "Gegner & Personen", "#/case/" + n + "/sec/" + b.sec, [c.title, secT[b.sec], b.spectra, b.items, b.desc]));
      (c.figures || []).forEach(f => { if(f.kind === "handout"){ const sid = figSec(c, f); add(f.title, "Handouts", "#/case/" + n + "/sec/" + sid, [c.title, secT[sid]]); } });
      if(c.eisberg) c.eisberg.nodes.forEach(nd => add(nd.label, "Eisberg", "#/case/" + n + "/sec/" + nd.target, [c.title, "Schicht " + nd.layer, secT[nd.target]]));
    }
    (R.aktionen || []).forEach(a => add(a.n, "Regeln", () => openRules("aktionen"), [a.wann, a.erg]));
    (R.abschnitte || []).forEach(a => add(a.t, "Regeln", () => openRules(a.id), a.items));
    (R.stufen || []).length && add("Zustandsstufen", "Regeln", () => openRules("zust"), R.stufen);
    (R.glossar || []).forEach(g => add(g.t, "Glossar", () => openRules("glossar"), g.d));
    ((N.map || {}).spots || []).forEach(s => add(s.label, "Stadtkarte", "#/map", s.links.map(l => l.t)));
    Object.keys(C.cases).forEach(n => add("Fall " + n + ": " + C.cases[n].title, "Kampagne", "#/case/" + n, [C.cases[n].title]));
  });
  window.sucheOpen = function(q){ Promise.all(READY.map(loadCase)).then(function(){ GSuche.open(q); }); };
})();
