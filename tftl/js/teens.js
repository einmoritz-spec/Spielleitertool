/* Teen-Bogen (Things from the Flood): möglichst nah am Original-Bogen (m_sheet_flood.pdf, S. 213).
   window.FLOODSHEET(k, H) liefert das HTML des Bogens; H = window.KIDSHELP aus kids.js. */
(function(){
  window.FLOODSHEET = function(k, H){
    var K = window.TCTX && window.TCTX.KIDS || window.FLOOD.KIDS, inp = H.inp, chk = H.chk;
    function bar(t, extra){ return '<h5>' + t + (extra ? '<em>' + extra + '</em>' : '') + '</h5>'; }
    function row(label, inner, i){ return '<div class="fs-r r' + (i % 2) + '"><span>' + label + '</span>' + inner + '</div>'; }
    function fld(t, inner, cls){ return '<label class="fs-f ' + (cls || "") + '"><small>' + t + '</small>' + inner + '</label>'; }
    var typSel = '<input class="bf" data-p="typ" list="typl" value="' + H.esc(k.typ) + '"><datalist id="typl">' + K.typen.map(function(t){ return '<option value="' + t[1] + '">'; }).join("") + '</datalist>';
    var rel = [1, 2, 3, 4].map(function(n, i){ return fld("Teen " + n + ":", inp(k, "rel.r" + i), "ln"); }).join("") +
      fld("Reibung:", inp(k, "rel.rf"), "ln hi") + fld("NSC 1:", inp(k, "rel.r4"), "ln") + fld("NSC 2:", inp(k, "rel.r5"), "ln");
    var items = fld("Kultgegenstand:", inp(k, "item") + '<b class="fs-b2">+2</b>', "ln hi it0") +
      [0, 1, 2, 3].map(function(i){ return '<div class="fs-f ln it">' + inp(k, "items." + i + ".0") + inp(k, "items." + i + ".1", "num") + '</div>'; }).join("");
    return '<div class="sheet fsh" id="sheet">' +
      '<img class="fsh-logo" src="img/flood/sheet-logo.webp" alt="Things from the Flood"><div class="fsh-bar"><i></i><span>Charakterbogen</span><i></i></div>' +
      '<div class="fsh-top"><div class="fsh-l">' +
        '<div class="fs-bx">' + bar("Attribute") + K.attr.map(function(a, i){ return row(a[1], inp(k, "a." + a[0], "num"), i); }).join("") + '</div>' +
        '<div class="fs-bx">' + bar("Fertigkeiten") + K.skills.map(function(s, i){ return row(s[1] + ' <em>(' + s[2] + ')</em>', inp(k, "s." + s[0], "num"), i); }).join("") + '</div>' +
        '<div class="fs-bx">' + bar("Erfahrung") + '<div class="fs-xp">' + [0,1,2,3,4,5,6,7,8,9].map(function(i){ return chk(k, "xp.x" + i); }).join("") + '</div></div>' +
      '</div><div class="fsh-r">' +
        '<div class="fs-inf">' + fld("Name:", inp(k, "name")) + fld("Typ:", typSel) + fld("Alter:", inp(k, "alter")) + fld("Lieblingslied:", inp(k, "song")) +
          fld("Antrieb:", inp(k, "drive")) + fld("Anker:", inp(k, "anker")) + fld("Problem:", inp(k, "problem"), "w2") +
          fld("Scham:", inp(k, "scham") + chk(k, "schamUsed"), "w2 sc") + fld("Beschreibung:", inp(k, "desc"), "w2") + '</div>' +
        '<div class="fs-bx">' + bar("Beziehungen") + rel + '</div>' +
        '<div class="fsh-two"><div class="fs-bx">' + bar("Gegenstände", "Bonus") + items + '</div>' +
        '<div class="fs-bx">' + bar("Notizen") + '<textarea class="bf nt" data-p="notes">' + H.esc(k.notes) + '</textarea></div></div>' +
      '</div></div><div class="fsh-line"></div>' +
      '<div class="fsh-bot"><div class="fs-bx">' + bar("Zustände") + K.zustaende.map(function(z, i){ return row(z[1], chk(k, "z." + z[0]), i); }).join("") + '</div>' +
      '<div class="fs-bx fs-sc">' + bar("Narben", "Akzeptiert") + [0,1,2,3,4].map(function(i){ return '<label class="fs-f ln sr r' + (i % 2) + '"><small>Narbe ' + (i + 1) + ':</small>' + inp(k, "narben." + i + ".t") + chk(k, "narben." + i + ".acc") + '</label>'; }).join("") + '</div></div>' +
      '</div>';
  };
})();
