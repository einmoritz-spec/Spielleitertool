/* Cairn – Karten und Abbildungen aus dem Wardenhandbuch (Beschriftungen im Original englisch) */
(function(){
  function im(n){ return [{t:"img", src:"karten/" + n + ".webp"}]; }
  function raster(L){ return {t:"grid", n:2, x:L.map(im)}; }
  function K(id){ return CN.get("weltenbau", id); }
  K("topografie").b.push(raster(["region-1","region-2","region-3","region-4"]));
  K("orte-von-interesse").b.push(raster(["region-5","region-6"]));
  K("dungeon-karte").b.push(raster(["dungeon-1","dungeon-2"]));
  K("dungeon-beispiel-tempel").b.unshift({t:"img", src:"karten/tempel.webp"});
  K("wald-geist").b.push(raster(["wald-1","wald-2"]));
  K("wald-beispiel").b.unshift({t:"img", src:"karten/wald-karte.webp"});
})();
