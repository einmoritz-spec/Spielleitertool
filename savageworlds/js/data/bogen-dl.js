/* Deadlands für den Charakterbogen: Arkane Hintergründe, Handicaps und neue Mächte (aus DLD, Buch S. 15–17, 55–78) */
(function(){
var D = window.DLD || {}, RG = {"Anfänger": 0, "Fortgeschritten": 1, "Veteran": 2, "Heroisch": 3, "Legendär": 4};
function seite(k){ var v = D[k]; if(typeof v === "function"){ try{ v = v(); }catch(e){ v = null; } } return v || {secs: []}; }
function karten(k){ var out = []; seite(k).secs.forEach(function(s){ (s.b || []).forEach(function(b){ (b.cards || []).forEach(function(x){ out.push(x); }); }); }); return out; }
function ohneEn(n){ return String(n || "").replace(/\s*\([A-Z][^)]*\)$/, ""); }

/* Handicaps */
window.SW_HANDICAPS_DL = karten("charaktere/handicaps").filter(function(x){ return x.tag && x.tag[0] !== "k"; }).map(function(x){
  var w = String(x.tag[1] || "").toLowerCase(); return {n: x.n, w: /leicht oder schwer/.test(w) ? "leicht/schwer" : /schwer/.test(w) ? "schwer" : "leicht", s: ["DL"], p: x.pg, kurz: x.s};
});

/* Neue Mächte */
window.SW_MACHTE_DL = karten("maechte/neu").filter(function(x){ return x.tag && x.tag[1] !== "Änderung"; }).map(function(x){
  var k = {}; (x.k || []).forEach(function(p){ k[p[0]] = p[1]; });
  return {n: ohneEn(x.n), r: RG[k.Rang] != null ? RG[k.Rang] : 0, mp: k.Machtpunkte || "", rw: k.Reichweite || "", wd: k.Dauer || "", au: "", b: x.b || [], s: ["DL"], dl: 1};
});

/* Arkane Hintergründe */
var AHD = [
  {n: "Blessed", seite: "maechte/blessed", f: "Glaube (Willenskraft)", sm: "Heiliges Symbol und zwei weitere Mächte aus der Liste", mp: "15", p: 55, al: "Wunder",
   av: "Arkaner Schutz, Verbannen, Barriere, Tierfreund, Blenden, Eigenschaft erhöhen/senken, Verwirrung, Abwehren, Arkanes entdecken, Aufheben, Weissagung, Elementarmanipulation, Empathie, Schutz vor Naturgewalten, Chaos, Heilung, Heiliges Symbol, Licht, Schmerzlinderung, Schutz, Linderung, Wiederauferstehung, Heiligung, Trägheit/Beschleunigung, Waffe verbessern, Sprachen sprechen, Betäuben, Kriegersegen"},
  {n: "Chi Master", seite: "maechte/chi", f: "Fokus (Willenskraft)", sm: "Abwehren und zwei weitere Mächte aus der Liste", mp: "15", p: 57, al: "Begabt",
   av: "Arkaner Schutz, Eigenschaft erhöhen/senken, Graben, Fluch, Dunkelsicht, Abwehren, Arkanes entdecken, Empathie, Schutz vor Naturgewalten, Fernsicht, Heilung, Schmerzlinderung, Schutz, Linderung, Trägheit/Beschleunigung, Waffe verbessern, Wandkrabbler, Kriegersegen"},
  {n: "Huckster", seite: "maechte/huckster", f: "Zaubern (Verstand)", sm: "3", mp: "10", p: 63, al: "Magie",
   av: "Ammo Whammy, Arkaner Schutz, Barriere, Tierfreund, Blenden, Geschoss, Eigenschaft erhöhen/senken, Strahl, Verwirrung, Schadensfeld, Abwehren, Arkanes entdecken/verbergen, Verkleiden, Aufheben, Weissagung, Elementarmanipulation, Empathie, Verstricken, Schutz vor Naturgewalten, Fernsicht, Furcht, Chaos, Illusion, Unberührbarkeit, Unsichtbarkeit, Licht/Dunkelheit, Schmerzlinderung, Objekt auslesen, Schutz, Marionette, Trägheit/Beschleunigung, Schlummer, Geräusch/Stille, Sprachen sprechen, Betäuben, Verbündeten beschwören, Telekinese, Teleportation, Krimskrams, Wandkrabbler"},
  {n: "Mad Scientist", seite: "maechte/scientist", f: "Verrückte Wissenschaft (Verstand)", sm: "2", mp: "15", p: 68, al: "Verrückte Wissenschaft",
   av: "Arkaner Schutz, Barriere, Tierfreund, Flächenschlag, Blenden, Geschoss, Eigenschaft erhöhen/senken, Graben, Strahl, Verwirrung, Schadensfeld, Dunkelsicht, Abwehren, Arkanes entdecken/verbergen, Verkleiden, Aufheben, Machtpunkte entziehen, Elementarmanipulation, Empathie, Verstricken, Schutz vor Naturgewalten, Fernsicht, Furcht, Fliegen, Chaos, Heilung, Illusion, Unberührbarkeit, Unsichtbarkeit, Licht/Dunkelheit, Gedankenleere, Schmerzlinderung, Schutz, Marionette, Linderung, Schrumpfen, Trägheit/Beschleunigung, Schlummer, Waffe verbessern, Geräusch/Stille, Sprachen sprechen, Betäuben, Telekinese, Teleportation, Wandkrabbler, Kriegersegen, Zombie"},
  {n: "Shaman", seite: "maechte/shaman", f: "Glaube (Willenskraft)", sm: "2", mp: "15", p: 72, al: "Wunder",
   av: "Arkaner Schutz, Verbannen, Tierfreund, Blenden, Eigenschaft erhöhen/senken, Graben, Verwirrung, Fluch, Dunkelsicht, Abwehren, Arkanes entdecken/verbergen, Verkleiden, Aufheben, Weissagung, Machtpunkte entziehen, Elementarmanipulation, Empathie, Verstricken, Schutz vor Naturgewalten, Fernsicht, Furcht, Wachsen, Chaos, Heilung, Heiliges Symbol, Unberührbarkeit, Schmerzlinderung, Schutz, Linderung, Wiederauferstehung, Heiligung, Gestaltwandeln, Trägheit/Beschleunigung, Schlummer, Waffe verbessern, Sprachen sprechen, Verbündeten beschwören, Teleportation, Wandkrabbler, Kriegersegen, Wildnisreise"}
];
function name(p){
  var L = (window.SW_MACHTE || []).concat(window.SW_MACHTE_DL || []), hit = L.filter(function(m){ return m.n === p; })[0] || L.filter(function(m){ return m.n.split("/").indexOf(p) > -1; })[0];
  return hit ? hit.n : p;
}
window.SW_AH_DL = [];
var TAL = {}; (window.SW_TALENTE || []).forEach(function(t){ TAL[t.n] = t; });
AHD.forEach(function(a){
  var t = TAL["Arkaner Hintergrund (" + a.n + ")"] || {}, sp = [[a.al, "dürfen Talente nehmen, die den Arkanen Hintergrund (" + a.al + ") voraussetzen"]];
  var txt = JSON.stringify(seite(a.seite)), re = /\*\*([^*]+):\*\*\s*([^"]*)/g, m;
  while((m = re.exec(txt)) && sp.length < 6){ if(m[1] !== a.al && !/^(Adlerklaue|Affe|Betrunkener|Gottesanbeterin|Shuai|Tan Tui|Wing Chun|Schlangenöl|Fokussierendes|Peptonic)/.test(m[1])) sp.push([m[1], m[2].replace(/\\"/g, '"').slice(0, 400)]); }
  window.SW_AH_DL.push({id: "dl_" + a.n.toLowerCase().replace(/\W/g, ""), n: a.n, s: ["DL"], req: t.v || "", f: a.f, sm: a.sm, mp: a.mp, p: a.p, bk: "sw_dl", dl: 1,
    av: a.av.split(/,\s*/).map(name), sp: sp, b: []});
});
})();
