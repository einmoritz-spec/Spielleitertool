/* Welt › Atlas (Guide Anhang III, S.199–207): Stadtkarten, nach Nation geordnet */
(function(){
var H = window.HH_TEXT = window.HH_TEXT || {};
function karte(n){ return {t: "bild", s: "guide-" + n, w: "voll"}; }
H["haus/welt/atlas"] = [
  {id: "realm", t: "Realm", b: [
    {t: "h", x: "Highlight Astraviya", p: 200}, karte("s200-atlas-highlight-astraviya"),
    {t: "h", x: "Lowlight Astraviya", p: 201}, karte("s201-atlas-lowlight-astraviya")]},
  {id: "hearth", t: "Hearth", b: [
    {t: "h", x: "Wallford", p: 202}, karte("s202-atlas-wallford"),
    {t: "h", x: "Chesterfield by-the-fire", p: 203}, karte("s203-atlas-chesterfield-by-the-fire")]},
  {id: "dominions", t: "Free Dominions", b: [
    {t: "h", x: "Beddingham", p: 204}, karte("s204-atlas-beddingham"),
    {t: "h", x: "Tuberdam", p: 205}, karte("s205-atlas-tuberdam")]},
  {id: "horde", t: "Horde", b: [
    {t: "h", x: "Al Sehir", p: 206}, karte("s206-atlas-al-sehir"),
    {t: "h", x: "Viletia", p: 207}, karte("s207-atlas-viletia")]}
];
window.HH_INH = window.HH_INH || {};
window.HH_INH["haus/welt/atlas"] = function(P){
  var e = H["haus/welt/atlas"].filter(function(x){ return x.id === P.sel; })[0] || H["haus/welt/atlas"][0];
  return '<div class="sec txt"><h2>' + esc(e.t) + '</h2>' + blk(e.b, "hh_r2") + '</div>';
};
})();
