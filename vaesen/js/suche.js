/* Vaesen – Volltextsuche (Taste f). Index aus allen Datenfiles. */
GSuche.add(function(add){
  GSuche.skip.karte = 1; GSuche.skip.paper = 1; GSuche.skip.form = 1; GSuche.skip.klein = 1; GSuche.skip.en = 1;
  function secList(list, bereich, kopf, route){ (list || []).forEach(function(s){ add((kopf ? kopf + " › " : "") + (s.t || s.titel), bereich, "#" + route(s), s.b); }); }

  /* Regeln */
  (window.VAE_REGELN || []).forEach(function(r){ add(r.titel, "Regeln", "#regeln/" + r.id, r.b); });

  /* Kapitel mit Gruppen (Konflikt, Talente, Gesellschaft, Norden) */
  var K = window.VAE_KAP || {};
  function groups(id, bereich, base){
    var k = K[id]; if(!k) return;
    (k.groups || []).forEach(function(g){ secList(g.secs, bereich, g.h && g.h !== "undefined" ? g.h : "", function(s){ return base + "/" + s.id; }); });
  }
  groups("konflikt", "Regeln", "kapitel/konflikt");
  groups("talente", "Regeln", "kapitel/talente");
  groups("gesellschaft", "Die Gesellschaft", "gesellschaft");
  groups("norden", "Mythischer Norden", "norden");

  /* Kapitel mit Tabs (Mysterium, Tanz der Träume – Buchtext) */
  function tabbed(id, bereich, base){
    var k = K[id]; if(!k) return;
    (k.tabs || []).forEach(function(t){
      if(t.secs) secList(t.secs, bereich, t.t, function(s){ return base + "/" + t.id + "/" + s.id; });
      else if(t.figs) t.figs.forEach(function(f){ add(t.t + " › " + f.n, bereich, "#" + base + "/" + t.id, f); });
      else add(t.t, bereich, "#" + base + "/" + t.id, t.b);
    });
  }
  tabbed("mysterium", "Das Mysterium", "mysterium");
  tabbed("tanz", "Tanz der Träume", "kapitel/tanz");

  /* Vaesen */
  ["t-menschen", "t-magie", "t-regeln", "t-nsc", "t-tiere"].forEach(function(id){ if(K[id]) add(K[id].titel, "Vaesen", "#vaesen/" + id, K[id].b); });
  var D = window.VAE_DETAIL || {};
  (window.VAE_WESEN || []).forEach(function(v){ add(v.name, "Vaesen", "#vaesen/" + v.id, [v, D[v.id]]); });

  /* Charaktere */
  (window.VAE_ARCH || []).forEach(function(a){ add(a.name, "Charaktere", "#charaktere/" + a.id, a); });
  if(window.VAE_ALTER) add("Persönlichkeit › Alter", "Charaktere", "#charaktere/persoenlichkeit", window.VAE_ALTER);
  if(window.VAE_ATTR) add("Fertigkeiten und Attribute", "Charaktere", "#regeln/fertigkeiten", window.VAE_ATTR);
  if(window.RES) add("Ressourcen", "Charaktere", "#charaktere/ausruestung", window.RES);


  /* Seasons of Mystery */
  Object.keys(window.VAE_MYS || {}).forEach(function(id){
    var m = VAE_MYS[id], B = "Mysterium: " + m.titel, r = "#som/" + id + "/";
    add(m.titel, B, r + "hg", [m.zeit, m.ort, m.warnung]);
    function put(titel, tab, d){ if(d != null) add(m.titel + " › " + titel, B, r + tab, d); }
    put("Hintergrund", "hg", m.hg);
    put("Anreise", "an", m.an);
    put("Orte", "orte", m.orteIntro);
    (m.orte || []).forEach(function(o){ add(m.titel + " › " + o.t, B, r + "orte/" + o.id, o); });
    put("Konfrontation", "kf", m.kf);
    put("Hinweise", "hw", [m.cdIntro, m.cd, m.kaelte]);
    (m.ho || []).forEach(function(h){ add(m.titel + " › " + (h.t || "Handout"), B, r + "ho", h); });
    put("Nachspiel", "ns", m.ns);
    Object.keys(m.figs || {}).forEach(function(f){ add(m.titel + " › " + m.figs[f].n, B, r + "fg/" + f, m.figs[f]); });
    if(m.wesen || m.nock || m.kaesten) put("Figuren", "fg", [m.wesen, m.nock, m.kaesten]);
  });

  if(window.VU_VW) add("Vorwort (S. 3)", "Bücher", function(){ if(window.uiVorwort) uiVorwort(); }, window.VU_VW);

  /* Bücher */
  (window.VAE_BUECHER || []).forEach(function(g){ (g.items || []).forEach(function(b){ add(b.name, "Bücher", "#buecher", [b.name, b.sub]); }); });
});
window.sucheOpen = GSuche.open;
