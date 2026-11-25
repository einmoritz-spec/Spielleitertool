/* Cairn – Zierbilder aus dem Wardenhandbuch (am Kapitelanfang) */
(function(){
 var Z={
  "weltenbau/setting-samen":["z00-s4"],
  "weltenbau/fraktionen":["z02-s6", "z03-s7"],
  "weltenbau/topografie":["z04-s8", "z06-s10"],
  "weltenbau/zusammenfuegen":["z07-s16", "z08-s16"],
  "weltenbau/dungeon-erschaffen":["z09-s18"],
  "weltenbau/dungeon-bewohner":["z10-s20"],
  "weltenbau/dungeon-karte":["z11-s21"],
  "weltenbau/dungeon-spezial":["z12-s24", "z13-s24"],
  "weltenbau/wald-geist":["z14-s30"],
  "weltenbau/wald-poi":["z16-s32"],
  "weltenbau/wald-beispiel":["z17-s35"],
  "weltenbau/wald-beispiel-1-4":["z18-s36"],
  "weltenbau/wald-beispiel-5-9":["z20-s39"],
  "werkzeuge/monster-umwandeln":["z23-s56"],
  "werkzeuge/namen-verfahren":["z24-s59"],
  "werkzeuge/wachstum-grundlagen":["z25-s63"],
  "werkzeuge/wachstum-beispiele":["z26-s64", "z27-s64", "z28-s65", "z29-s65", "z30-s66", "z31-s66", "z32-s67"],
  "rat/hintergruende-erschaffen":["z33-s76"],
  "rat/pointcrawls":["z34-s77"],
  "rat/faq-dungeon":["z35-s78"],
  "vald/sl-der-wald":["z36-s91"],
  "vald/sl-die-nachbarn":["z37-s92"],
  "vald/sl-die-wurzeln":["z38-s92"],
  "vald/sl-fraktionen":["z39-s93", "z40-s93", "z41-s93"]
 };
 Object.keys(Z).forEach(function(k){ var p=k.split("/"), c=CN.get(p[0],p[1]); if(!c) return; var v=Z[k]; c.b.unshift({t:"deko", x:v.slice(0,3)}); if(v.length>3) c.b.push({t:"deko", x:v.slice(3)}); });
})();
