/* Local Legends – Volltextsuche (Taste „f“; „m“ = Stadtkarte). Treffer springen per Zustand (Bezirk/Tab/Fall) zur Stelle. */
(function(){
  const nz = s => String(s || "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/ß/g, "ss").replace(/\s+/g, " ").trim();
  function foc(t){
    if(!t) return;
    setTimeout(function(){
      const n = nz(t), els = [].slice.call(document.querySelectorAll("#app .loc-h, #app .danger-head h4, #app .th-head h3, #app .section-head h2, #app .card > h3, #app .app-row b"));
      const el = els.find(e => nz(e.textContent).indexOf(n) === 0) || els.find(e => nz(e.textContent).indexOf(n) >= 0);
      if(!el) return;
      const sec = el.closest(".section.collapsed"); if(sec) sec.classList.remove("collapsed");
      ["loc-card", "danger-card", "theme-card", "ps-card"].forEach(c => { const p = el.closest("." + c); if(p) p.classList.add("open"); });
      el.scrollIntoView({block: "start"}); window.scrollBy(0, -80);
    }, 80);
  }
  const dist = (id, tab, t) => () => { goDistrict(id); if(tab && tab !== "overview") setDistTab(tab); foc(t); };
  const cse = (id, tab, t) => () => { goCase(id); if(tab && tab !== "overview") setCaseTab(tab); foc(t); };
  const anchor = (id, n, a) => () => { goCase(id); iceGo(n, a); };
  const hasT = x => x && (x.name || x.title);
  GSuche.skip.moves = 0;

  GSuche.add(function(add){
    const T = x => String(x || "").replace(/<[^>]+>/g, "");
    const cases = [];
    DISTRICTS.forEach(function(d){
      const c = d.data; if(!c) return; const D = d.title;
      if(c.intro){
        add(D + " › Übersicht", "Bezirke", dist(d.id, "overview"), [c.quote, c.intro, c.tagline, c.howToUse, c.howToIntro, c.howToUseIntro, c.namesNote, c.beyondMist, c.phoropterHistory, c.otherMythoi, c.chowsSpoiler, c.gate, c.secretSocieties, d.sub]);
        (c.customMoves || []).forEach(m => add(D + " › " + m.name, "Custom Moves", dist(d.id, "overview", m.name), m));
        (c.playerOptions || []).forEach(o => add(D + " › " + o.name, "Spieleroptionen", dist(d.id, "overview", o.name), o));
        (c.places || []).forEach(p => add(D + " › " + p.name, "Orte", dist(d.id, "places", p.name), p));
        (c.locals || []).forEach(l => add(D + " › " + l.name, "Locals & Gegner", dist(d.id, "locals", l.name), l));
        (c.localThemes || []).forEach(l => add(D + " › " + l.name, "Locals & Gegner", dist(d.id, "locals", l.name), l));
        (c.chanceEncounters || []).forEach(l => add(D + " › " + l.name, "Zufallsbegegnungen", dist(d.id, "chance", l.name), l));
        (c.powerSets || []).forEach(p => add(D + " › " + p.name, "Power Sets", dist(d.id, "powersets", p.name), p));
        if(c.themebook) add(D + " › " + (c.themebook.name || "Themenbuch"), "Power Sets", dist(d.id, "powersets", c.themebook.name), c.themebook);
        if(c.heistRules){ const h = c.heistRules; add(D + " › Heists", "Heists", dist(d.id, "heists"), [h.intro, h.prepSequence, h.threeCards, h.quickGenerator]);
          (h.terminology || []).forEach(t => add(t.t, "Heists", dist(d.id, "heists", "Heist-Terminologie"), t.x));
          add(D + " › Heists (Rest)", "Heists", dist(d.id, "heists"), h); }
      }
      if(c.case) cases.push([d, c.case]);
    });
    if(typeof FORGED_FRAMED !== "undefined" && !DISTRICTS.some(d => d.data && d.data.case === FORGED_FRAMED.case)) cases.push([{id: "forged_framed", title: "Forged & Framed"}, FORGED_FRAMED.case]);
    cases.forEach(function(p){
      const d = p[0], cs = p[1], id = d.id, D = d.title + " › Fall";
      add(D + ": " + cs.title, "Fälle", cse(id, "overview"), [cs.subtitle, cs.teaser, cs.intro, cs.background, cs.fourthMurder, cs.icebergNote, cs.miniThemeKits]);
      (cs.depths || []).forEach(function(dp){
        const tab = "depth" + dp.n, DT = D + " › Depth " + dp.n + ": " + dp.title;
        add(DT, "Fälle", cse(id, tab), [dp.intro, dp.text, dp.prep && [dp.prep.title, dp.prep.text, dp.prep.moveBox], dp.dangers && "", dp.powderkeg && dp.powderkeg.name]);
        (dp.hooks || []).forEach((h, i) => { if(typeof h === "string") return; add(DT + " › " + (h.name || "Aufhänger"), "Fälle", h.name ? anchor(id, dp.n, "h" + i) : cse(id, tab), h); });
        (dp.locations || []).forEach(function(l, i){
          const go = anchor(id, dp.n, "l" + i);
          add(DT + " › " + l.name, "Fälle", go, [l.readaloud, l.text, l.mythos, l.tables, l.clues, l.clues2, l.gmNote, l.moveBox, (l.themes || []).map(t => [t.name, t.identity, t.power, t.weak])]);
          (l.dangers || []).forEach(g => add(g.name, "Locals & Gegner", go, g));
          (l.images || []).forEach(im => add(im.caption || l.name, "Handouts", go, [d.title, l.name]));
          (l.handouts || []).forEach(h => add(h.title || h.kind || l.name, "Handouts", go, [d.title, l.name, h.text, h.x]));
        });
        const go2 = cse(id, tab);
        (dp.dangers || []).forEach(g => add(g.name, "Locals & Gegner", cse(id, tab, g.name), g));
        if(dp.prep) (dp.prep.dangers || []).forEach(g => add(g.name, "Locals & Gegner", cse(id, tab, g.name), g));
        if(dp.powderkeg) add(DT + " › " + dp.powderkeg.name, "Fälle", go2, dp.powderkeg);
      });
      add(D + ": " + cs.title + " › Aftermath", "Fälle", cse(id, "aftermath"), [cs.aftermathIntro, cs.aftermath]);
    });
    if(typeof VILLAINS !== "undefined") VILLAINS.forEach(function(v){
      const go = () => goVillain(v.id), V = "Kleinschurke: " + v.title;
      add(V, "Kleinschurken", go, [v.tagline, v.subtitle, v.mythos, v.villain, v.villainRole, v.accomplices, v.keyLocationNames, v.intro, v.howToUse, v.background, v.operation, v.inPerson, v.abilities, v.sidebars, v.notes]);
      (v.hooks || []).forEach(h => add(V + " › " + (h.name || "Hook"), "Kleinschurken", () => { goVillain(v.id); foc(h.name); }, h));
      (v.locations || []).forEach(l => add(V + " › " + l.name, "Kleinschurken", () => { goVillain(v.id); foc(l.name); }, l));
      (v.dangers || []).forEach(g => add(g.name, "Locals & Gegner", () => { goVillain(v.id); foc(g.name); }, g));
    });
    if(typeof GUIDE !== "undefined"){
      const g = GUIDE, go = () => goGuide();
      ["introduction", "whatsInBook", "crimeBoardMap", "bonusContent", "howToUseBook"].forEach(k => g[k] && add("Einleitung › " + (g[k].title || k), "Einleitung", go, g[k]));
      const cg = g.cityGuide;
      if(cg){ add("Stadtführer › " + (cg.title || "Guide to the City"), "Einleitung", go, [cg.quote, cg.intro, cg.closing]);
        (cg.districts || []).forEach(x => add("Stadtführer › " + x.name, "Einleitung", () => { goGuide(); foc(x.name); }, x.text));
        if(cg.alreadyKnow){ add("Stadtführer › " + cg.alreadyKnow.title, "Einleitung", go, [cg.alreadyKnow.intro, cg.alreadyKnow.subtitle]); (cg.alreadyKnow.areas || []).forEach(a => add("Stadtführer › " + a.name, "Einleitung", () => { goGuide(); foc(a.name); }, a.text)); }
        if(cg.placesWorthSeeing) add("Stadtführer › " + cg.placesWorthSeeing.title, "Einleitung", () => { goGuide(); foc(cg.placesWorthSeeing.title); }, cg.placesWorthSeeing);
      }
    }
    if(typeof APPENDIX !== "undefined"){
      const A = APPENDIX, AN = {mythoi: "Mythoi", dangers: "Dangers", themeKits: "Theme Kits"}, dn = id => (A.districtNames && A.districtNames[id]) || id || "";
      Object.keys(AN).forEach(function(tab){ (A[tab] && A[tab].entries || []).forEach(function(x){
        const t = x.mythos || x.name || x.title;
        add(t, "Register · " + AN[tab], () => { goAppendix(tab); state.appQ = t; render(); }, [x.logos, x.type, x.ratingText, dn(x.district), "S. " + x.page]);
      }); });
      add("Register › Bezirksnamen", "Register", () => goAppendix(), A.districtNames);
    }
    if(typeof RULES_GLOSSARY !== "undefined") RULES_GLOSSARY.forEach(g => add(g.t, "Regeln", () => { openModal("rulesModal"); setTimeout(() => { const e = [].slice.call(document.querySelectorAll("#rulesList .gloss-entry")).find(x => nz(x.querySelector("b").textContent) === nz(g.t)); if(e) e.scrollIntoView({block: "start"}); }, 60); }, g.d));
    add("Stadtkarte", "Karten", () => openCityMap(), DISTRICTS.map(d => d.title));
  });
  window.sucheOpen = GSuche.open;
})();
