/* Regeln: Buchbilder je Eintrag. HH_BILD["<unter>/<eintrag>"] = [Gruppe …], Gruppe = {s:[Bildnamen], w:Breite in px}; Bilder liegen schon freigestellt unter img/grundbuch/full/. */
window.HH_BILD = window.HH_BILD || {};
(function(){
function g(n, w){ return {s: n.split(" ").map(function(x){ return "grundbuch-" + x; }), w: w}; }
var B = window.HH_BILD;
B["charakter/bogen"] = [g("s042-ii-charakter", 250), g("s043-ii-charakter", 190), g("s046-ii-charakter", 300)];
B["berufe/soldiers"] = [g("s051-ii-charakter", 320)];
B["berufe/scholars"] = [g("s055-iii-scholars", 300)];
B["berufe/hunters"] = [g("s059-iii-scholars", 300)];
B["berufe/criminals"] = [g("s063-iii-scholars", 300)];
B["berufe/duelists"] = [g("s067-iii-scholars", 300)];
B["berufe/handlers"] = [g("s071-iii-scholars", 300)];
B["berufe/beetle"] = [g("s074-iii-beetle", 320)];
B["berufe/bumblebee"] = [g("s075-iii-bumblebee", 280)];
B["berufe/gecko"] = [g("s076-iii-gecko", 300)];
B["berufe/mouse"] = [g("s077-iii-mouse", 260)];
B["berufe/traits"] = [g("s078-iii-traits", 230), g("s079-iii-traits", 300)];
B["spielen/wuerfel"] = [g("s084-iiii-regeln-einleitung", 320), g("s085-iiii-regeln-einleitung", 220)];
B["spielen/action"] = [g("s087-iiii-action-rolls", 320), g("s090-iiii-action-rolls", 340), g("s092-iiii-action-rolls", 230)];
B["spielen/reaction"] = [g("s096-iiii-action-rolls", 300)];
B["spielen/stress"] = [g("s098-iiii-stress", 320)];
B["spielen/skills"] = [g("s100-iiii-fields-skills s101-iiii-fields-skills s102-iiii-fields-skills s103-iiii-fields-skills", 440)];
B["spielen/moves"] = [g("s105-iiii-moves", 230)];
B["spielen/hilfe"] = [g("s106-iiii-help-hindrance s107-iiii-help-hindrance", 330)];
B["spielen/kampf"] = [g("s113-iiii-combat", 340), g("s114-iiii-combat", 340), g("s116-iiii-combat", 300), g("s117-iiii-combat", 280)];
B["spielen/schiessen"] = [g("s119-iiii-shooting", 340)];
B["spielen/zustaende"] = [g("s123-iiii-conditions-decorum", 340)];
B["spielen/decorum"] = [g("s126-iiii-conditions-decorum", 340)];
})();
