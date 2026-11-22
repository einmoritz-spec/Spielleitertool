/* SLUGBLASTER – Nachschlagen · Spielablauf (Kap. 1), Spielleitung (Kap. 4), Spiel verändern, Demo.
   Seitenleiste links (einklappbar, Taste b), Inhalt als Raster. Daten: data/k1.js, k1b.js, k4.js, veraendern.js, demo.js. */
var SBR = (function(){
  var BER = [["regeln", "Spielablauf"], ["teenager", "Teenager"], ["spielleitung", "Spielleitung"], ["veraendern", "Spiel verändern"], ["demo", "Demo"]];
  var FARBE = {regeln: "var(--lila)", teenager: "var(--pink)", spielleitung: "var(--mint)", veraendern: "var(--lila)", demo: "var(--lila)"};
  function D(ber){ return ber === "regeln" ? SB_REGELN : ber === "spielleitung" ? SB_SPIELLEITUNG : ber === "veraendern" ? SB_VERAENDERN : null; }
  /* Text mit **fett**, *kursiv*; „S. 12“ wird zum unscheinbaren Seitenlink */
  function tx(s){ return md(s).replace(/S\. (\d+)(–\d+)?/g, function(m, a, b){ return '<span class="pg" onclick="openBook(\'sb_core\',' + a + ')">S. ' + a + (b || "") + '</span>'; }); }
  function ul(a, c){ return '<ul class="dot">' + a.map(function(x){ return '<li>' + tx(x) + '</li>'; }).join("") + '</ul>'; }
  function ol(a){ return '<ol class="rgo">' + a.map(function(x){ return '<li>' + tx(x) + '</li>'; }).join("") + '</ol>'; }
  function plak(k){ return '<span class="plk ' + (k[1] === "trouble" ? "tr" : "st") + '">' + k[0] + ' ' + (k[1] === "trouble" ? "Trouble" : "Style") + '</span>'; }
  function hl(el){ el.classList.toggle("hl"); }

  function box(b){
    var inner = "";
    if(b.b) inner = b.b.map(blk).join("");
    else if(b.list) inner = '<ul class="bl">' + b.x.map(function(x){ return '<li>' + tx(x) + '</li>'; }).join("") + '</ul>';
    else inner = b.x.map(function(x){ return /^[•]/.test(x) ? '<p class="bp">' + tx(x.replace(/^•\s*/, "")) + '</p>' : '<p>' + tx(x) + '</p>'; }).join("");
    return '<div class="box rgb ' + (b.c || "lila") + '">' + (b.h ? '<div class="cap">' + esc(b.h) + '</div>' : "") + inner + '</div>';
  }
  function bar(b){ return '<div class="bar rgbar"><div class="cap">' + esc(b.h) + '</div>' + b.x.map(function(x){ return /^[•]/.test(x) ? '<p class="bp">' + tx(x.replace(/^•\s*/, "")) + '</p>' : '<p>' + tx(x) + '</p>'; }).join("") + '</div>'; }
  function d6(b){
    return '<div class="rgt">' + (b.h ? '<div class="ct">' + esc(b.h) + '</div>' : "") + '<table class="d6"><tr><th>W6</th><th></th></tr>' + b.r.map(function(r){ return '<tr onclick="SBR.hl(this)"><td class="n">' + r[0] + '</td><td>' + tx(r[1]) + '</td></tr>'; }).join("") + '</table></div>';
  }
  function res(b){ return '<div class="rgres">' + b.r.map(function(r){ return '<div><b class="k">' + r[0] + '</b><p><b>' + tx(r[1]) + '</b> ' + tx(r[2]) + '</p></div>'; }).join("") + '</div>'; }
  function note(b){ return '<p class="rgn"><span class="note' + (b.c ? " " + b.c : "") + '">' + tx(b.x) + '</span></p>'; }

  /* Kreislauf S. 13 */
  var STA = [
    ["Run wählen", "Entscheidet, was eure Crew im nächsten Run tun soll (S. 28)", ["Was ist euer Ziel?", "Was ist der Preis?", "Was ist das Hindernis?"]],
    ["Auffrischen", "", ["Boost/Kick auffüllen (S. 19)", "Die SL sammelt Bite (S. 145)"]],
    ["Der Run!", "Action! Abenteuer! Unfug!", ["Mit Aktionswürfen Dinge tun (S. 18)", "Probleme überleben und Slams und Trouble ansammeln (S. 20–21)", "Style durch Tricks verdienen (S. 23)"]],
    ["Desaster??", "Jeder Spieler macht einen Disaster-Wurf, um zu sehen, ob er zu viel Trouble markiert hat (S. 21)", []],
    ["Aufräumen", "", ["Style-Boni einsammeln (S. 29)", "Slams löschen", "Fraktionen verschieben (S. 126)"]],
    ["Downtime!", "Schule! Hausarbeiten! Gefühle!", ["Freies, szenenbasiertes Rollenspiel", "Style und Trouble für Beats ausgeben (S. 24), die deinen Charakter wachsen lassen, Szenen vorbereiten und Ereignisse auslösen (S. 26–27)"]]
  ];
  function cyc(){
    return '<div class="rgcy">' + STA.map(function(s, i){
      return '<div class="cs"><div class="no">' + (i + 1) + '</div><h4>' + s[0] + '</h4>' + (s[1] ? '<p>' + tx(s[1]) + '</p>' : "") + (s[2].length ? ul(s[2]) : "") + '</div>' + (i < 5 ? '<span class="ar">→</span>' : "");
    }).join("") + '<div class="ep"><b>Folge</b> dauert 2–4 Stunden · 5–10 Folgen in einer vollen Staffel</div></div>';
  }
  /* Beats, Gelegenheiten, Touren aus den Tafel-Daten */
  function mom(b){
    var g = SB_MOMENTE[b.k], arr = g.x || [g];
    return '<div class="rgm">' + arr.map(function(m){
      return '<div class="mo"><div class="mh">' + plak(m.k) + '<b>' + esc(m.t) + (m.p ? " " : "") + '</b>' + (m.p ? pgl(m.p) : "") + '</div><p>' + tx(m.x) + '</p>' + (m.l ? ul(m.l) : "") + '</div>';
    }).join("") + '</div>';
  }
  function gel(b){
    var G = b.k === "g" ? SB_GELEGENHEITEN : SB_HERAUSFORDERUNGEN;
    if(b.m) return ul(G.mods);
    return '<div class="rgt gel"><div class="ct">' + G.t + ' ' + pgl(G.p) + '</div><table class="d6"><tr><th>W6</th><th>Ergebnis</th><th></th><th>Oder</th></tr>' + G.z.map(function(z){
      return '<tr onclick="SBR.hl(this)"><td class="n">' + z[0] + '</td><td><b>' + esc(z[1][0]) + '.</b> ' + tx(z[1][1]) + '</td><td class="od">oder</td><td><b>' + esc(z[2][0]) + '.</b> ' + tx(z[2][1]) + '</td></tr>';
    }).join("") + '</table></div>';
  }
  function w66(){
    return '<div class="rgt"><div class="ct">Run-Ideen (W66)</div><div class="rg66">' + SB_TOUREN.map(function(t){ return '<div class="r" onclick="SBR.hl(this)"><b class="n">' + t[0] + '</b><span>' + tx(t[1]) + '</span></div>'; }).join("") + '</div><p class="rgn"><span class="note">' + esc(SB_TOUREN_NOTIZ) + '</span></p></div>';
  }
  function preise(){ return '<div class="box rgb lila"><div class="cap">Preis-Ideen</div><ul class="bl">' + SB_PREISE.map(function(p){ return '<li><b>' + esc(p.t) + '.</b> ' + tx(p.x) + '</li>'; }).join("") + '</ul></div>'; }
  /* SL-Aktionen S. 145 */
  function slakt(){
    var A = SB_SLAKTIONEN;
    function g(t, a){ return '<div class="ct">' + t + '</div>' + ul(a); }
    return g("Jederzeit kannst du …", A.jederzeit) + g("Wenn sie ein Problem würfeln …", A.problem) + g("Gib 1 Bite aus, um …", A.bite1) + g("Gib 2 Bite aus, um …", A.bite2);
  }
  function slbite(){ var A = SB_SLAKTIONEN; return '<div class="box rgb mint"><div class="cap">Bite ' + pgl(A.p) + '</div>' + A.biteText.split("\n").map(function(x){ return '<p>' + tx(x) + '</p>'; }).join("") + '</div>'; }
  function gefahr(b){
    var G = SB_GEFAHR[b.k], h = '<h3 class="rgh3">' + esc(G.t) + ' ' + pgl(G.p) + '</h3><p>' + tx(G.intro) + '</p>' + (G.x ? ul(G.x) : "");
    if(G.nach) h += G.nach.split("\n").map(function(x){ return '<p>' + tx(x) + '</p>'; }).join("");
    if(G.n) h += '<p class="rgn"><span class="note">' + tx(G.n) + '</span></p>';
    if(b.k === "disaster") h += d6({h:"Disaster-Ideen", r: SB_GEFAHR.ideen.map(function(i, n){ return [n + 1, "**" + i[0] + ".** " + i[1]]; })});
    return h;
  }
  function hind(){ var H = SB_HINDERNISSE; return '<h3 class="rgh3">Hindernisse ' + pgl(H.p) + '</h3><p>' + tx(H.intro) + '</p>' + ul(H.x); }
  /* Leisten-Beispiele S. 149 (Beispielzeichnungen, nicht bedienbar) */
  function leisten(){
    function pt(c, a){ return (29 + 26 * Math.cos(a)).toFixed(1) + " " + (29 + 26 * Math.sin(a)).toFixed(1); }
    function uhr(n, x){ var h = '<svg class="clock" viewBox="0 0 58 58">'; for(var i = 0; i < n; i++){ var a0 = -Math.PI / 2 + i * 2 * Math.PI / n, a1 = -Math.PI / 2 + (i + 1) * 2 * Math.PI / n; h += '<path d="M29 29L' + pt(0, a0) + 'A26 26 0 0 1 ' + pt(0, a1) + 'Z" fill="' + (i < x ? "#2fb996" : "#fff") + '" stroke="#000" stroke-width="3" stroke-linejoin="round"/>'; } return h + '</svg>'; }
    return '<div class="rgle"><div class="ct">Wie Leisten aussehen</div><div class="lz">' + uhr(4, 1) + uhr(6, 3) + uhr(8, 5) + '</div><div class="lz"><span class="wortl">' + "GEFASST".split("").map(function(c, i){ return '<i class="' + (i < 3 ? "x" : "") + '">' + c + '</i>'; }).join("") + '</span><span class="strich"><b>3/5</b></span></div></div>';
  }
  /* Partys S. 161 – Tabellen am Seitenbild gegen das Buch prüfen */
  var PARTY = {
    gaeste: ["The Thrashers", "The Heads", "The Mavens", "The Freaks", "The Normies", "Die Spieler wählen"],
    ort: [["Haus", "Skate-Shop", "Gemeindehalle"], ["Musikclub", "Pool", "Kirche"], ["Strand", "Dach", "Jugendzentrum"], ["Firmenzentrale", "Büsche", "Schulturnhalle"], ["Tanzclub", "Straßenblock", "Leerstehendes Gebäude"], ["Skatepark", "Wohnheim", "Etwas anderes"]],
    dazu: ["einer *unfreundlichen* oder schlechteren Crew", "einem *unfreundlichen* oder schlechteren Sponsor", "einer *unfreundlichen* oder schlechteren Obrigkeit", "einer *neutralen* oder besseren Crew", "einem *neutralen* oder besseren Sponsor", "einer *neutralen* oder besseren Obrigkeit"],
    hoert: [[11,"Unendlich Pizza von Infinite Pizza"],[12,"bodenlose Getränke"],[13,"Go-Go-Tänzer / Tanz-Battles"],[14,"holografische Promi-Auftritte"],[15,"jemand Berühmtes"],[16,"Gratis-Swag!"],[21,"Live-Musik / ein genialer DJ"],[22,"Karaoke / Rap-Battle / Mitsingen"],[23,"Kostümpflicht / Dresscode"],[24,"Skate-Demos / Hoverboard-Wettbewerb"],[25,"abgefahrene Zeitphänomene"],[26,"Hackathon / Gear-Jam"],[31,"Halfpipe / Mini-Ramp / Rail"],[32,"Videospiele / Live-Slugblasting-Feeds"],[33,"ein großes Showdown"],[34,"physikverbiegende Tanzfläche"],[35,"heimliche Knutsch-Ecken"],[36,"Schaum / Konfetti / Körperfarbe / Feuerwerk / Glitzer"],[41,"Bass, der deine Wellenform spaltet"],[42,"kurzer Zugang zu einer seltenen Euphorie-Kugel"],[43,"Lagerfeuer / riesiges Aquarium / Film"],[44,"Fernsehübertragungen / umherziehende Dokumentarfilmer"],[45,"eine Schale Empyrean-*Cauchy*-Beeren"],[46,"Schwimmen"],[51,"Weitspiele / Beer-Pong / Bring-your-own-Laser-Tag"],[52,"eine Chance für einen von euch, mit seinem Schwarm zu reden"],[53,"ein ganzer Haufen heißer Leute"],[54,"Truth or Dare mit hohem Einsatz"],[55,"eine Enthüllung, Produkteinführung oder große Ankündigung"],[56,"ein Sharing-Kreis"],[61,"eine Tombola, Preisverleihung oder ein besonderer Toast"],[62,"süße Tiere zum Anfassen"],[63,"eine Fotobox"],[64,"dieses Kind aus Thennis Spar, das die Zukunft sehen kann"],[65,"ein seltenes multidimensionales Phänomen"],[66,"ein spezielles Portal, nur für eine Nacht"]]
  };
  function party(){
    var P = PARTY;
    var gaeste = '<div class="rgt"><div class="ct">Gäste</div><p class="pt">Hauptsächlich [A], mit einer kleineren Menge [B]. (Je 1W6)</p><table class="d6"><tr><th>W6</th><th>Clique</th></tr>' + P.gaeste.map(function(g, i){ return '<tr onclick="SBR.hl(this)"><td class="n">' + (i + 1) + '</td><td>' + g + '</td></tr>'; }).join("") + '</table></div>';
    var ort = '<div class="rgt"><div class="ct">Ort</div><table class="d6"><tr><th>W6</th><th>1–2</th><th>3–4</th><th>5–6</th></tr>' + P.ort.map(function(r, i){ return '<tr><td class="n">' + (i + 1) + '</td>' + r.map(function(c){ return '<td onclick="SBR.hl(this)">' + c + '</td>'; }).join("") + '</tr>'; }).join("") + '</table></div>';
    var dazu = '<div class="rgt"><div class="ct">Und mindestens ein oder zwei Mitglieder von …</div>' + ul(P.dazu) + '</div>';
    var hoert = '<div class="rgt"><div class="ct">Du hast gehört, es wird geben …</div><div class="rghoert">' + P.hoert.map(function(x){ return '<span onclick="SBR.hl(this)"><b>' + x[0] + '</b> ' + tx(x[1]) + '</span>'; }).join("") + '</div></div>';
    return gaeste + ort + dazu + hoert;
  }

  var BL = {
    p: function(b){ return '<p class="pt">' + tx(b.x) + '</p>'; },
    h: function(b){ return '<h3 class="rgh3">' + tx(b.x) + '</h3>'; },
    ul: function(b){ return ul(b.x); }, ol: function(b){ return ol(b.x); },
    box: box, bar: bar, d6: d6, res: res, note: note, cyc: cyc, mom: mom, gel: gel, w66: w66, preise: preise,
    slakt: slakt, slbite: slbite, gefahr: gefahr, hind: hind, leisten: leisten, party: party
  };
  function blk(b){ try{ return BL[b.t](b); }catch(e){ return ""; } }
  function zelle(c){
    var span = !Array.isArray(c) && c.s === 2, bl = Array.isArray(c) ? c : c.b;
    return '<div class="rgc' + (span ? " w2" : "") + '">' + bl.map(blk).join("") + '</div>';
  }

  /* ---------- Navigation ---------- */
  function nav(ber){
    return '<nav class="tabs nbar">' + BER.map(function(b){ return '<a class="' + (b[0] === ber ? "on" : "") + '" onclick="go(\'nach/' + b[0] + '\')">' + b[1] + '</a>'; }).join("") + '<span class="sp"></span></nav>';
  }
  function zu(){ try{ return localStorage.getItem("sb_side") === "0"; }catch(e){ return false; } }
  function toggle(){
    var w = document.querySelector(".rgw"); if(!w) return;
    var on = w.classList.toggle("zu"); try{ localStorage.setItem("sb_side", on ? "0" : "1"); }catch(e){}
  }
  function seite(ber, id){
    var d = D(ber), s = null; d.s.forEach(function(x){ if(x.id === id) s = x; }); if(!s) s = d.s[0];
    var side = '<aside class="rgs"><button class="rgz" onclick="SBR.toggle()" aria-label="Seitenleiste einklappen" title="Seitenleiste einklappen (b)">‹</button>' +
      d.s.map(function(x){ return '<a class="' + (x.id === s.id ? "on" : "") + '" onclick="go(\'nach/' + ber + '/' + x.id + '\')">' + esc(kurz(x.t)) + '</a>'; }).join("") + '</aside>';
    var main = '<main class="rgm2"><div class="rgk"><h1>' + esc(s.t) + '</h1>' + pgl(s.p) + '</div><div class="rgg">' + s.g.map(zelle).join("") + '</div></main>';
    return '<div class="rgw ' + ber + (zu() ? " zu" : "") + '"><button class="rgo2" onclick="SBR.toggle()" aria-label="Seitenleiste ausklappen" title="Seitenleiste ausklappen (b)">›</button>' + side + main + '</div>';
  }
  /* ---------- Demo ---------- */
  function dlg(b){
    return '<div class="dlg">' + b.map(function(z){
      if(!z[0]) return '<p class="rgi">' + tx(z[1]) + '</p>';
      return '<p class="' + (z[0] === "SL" ? "sl" : "") + '"><b>' + esc(z[0]) + ':</b> ' + tx(z[1]) + '</p>';
    }).join("") + '</div>';
  }
  function demo(){
    return '<div class="rgdemo">' + SB_DEMO.map(function(s){
      return '<section><div class="rgk"><h1>' + esc(s.t) + '</h1>' + pgl(s.p) + '</div><p class="rgn"><span class="note">' + tx(s.note) + '</span></p><div class="rgdg">' + s.g.map(function(g){ return '<div class="rgdc"><div class="ct">' + pgl(g.p) + '</div>' + dlg(g.b) + '</div>'; }).join("") + '</div></section>';
    }).join("") + '</div>';
  }
  function view(a){
    var ber = a[0] || "regeln";
    return '<div class="nachw rg-' + ber + '" style="--tc:' + (FARBE[ber] || "var(--lila)") + '">' + nav(ber) + (ber === "demo" ? demo() : seite(ber, a[1])) + '</div>';
  }
  /* Tasten: b = Seitenleiste, ↑/↓ = Abschnitt, ←/→ = Haupt-Tab (nur in diesen Ansichten) */
  document.addEventListener("keydown", function(e){
    if(/INPUT|TEXTAREA|SELECT/.test((e.target || {}).tagName || "") || e.ctrlKey || e.metaKey || e.altKey || document.querySelector(".modal,.gzoom")) return;
    var h = (location.hash || "").slice(1).split("/").map(decodeURIComponent);
    if(h[0] !== "nach") return;
    var ber = h[1] || "regeln";
    if(e.key === "b" && D(ber)){ toggle(); return; }
    if(e.key === "ArrowLeft" || e.key === "ArrowRight"){
      var ix = -1; BER.forEach(function(x, i){ if(x[0] === ber) ix = i; });
      var n = BER[ix + (e.key === "ArrowRight" ? 1 : -1)]; if(n){ go("nach/" + n[0]); e.preventDefault(); }
    }
    if((e.key === "ArrowUp" || e.key === "ArrowDown") && D(ber)){
      var d = D(ber), cur = 0; d.s.forEach(function(x, i){ if(x.id === (h[2] || d.s[0].id)) cur = i; });
      var m = d.s[cur + (e.key === "ArrowDown" ? 1 : -1)]; if(m){ go("nach/" + ber + "/" + m.id); e.preventDefault(); }
    }
  });
  return {view: view, BER: BER, nav: nav, toggle: toggle, hl: hl};
})();
