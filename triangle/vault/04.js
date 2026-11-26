/* The Vault 04 – ZBARRO #641: eigene Bausteine */
"use strict";
/* Checkliste „Das Zbarro wiedereröffnen“: Punkte anklicken = erledigt (grau) */
TA_VB["zb-check"] = function(b, ctx){
  var s = vst(ctx.id), n = 0;
  var html = b.x.map(function(x, i){ var key = "zbc" + i, ok = s.x[key]; if(ok) n++;
    return '<li class="' + (ok ? "ok" : "") + '" onclick="zbCheck(' + i + ')"><em>' + (i + 1) + '</em><span>' + tx(x) + '</span></li>'; }).join("");
  return '<div class="zb-check"><div class="zbk"><i>' + n + ' / ' + b.x.length + '</i></div><ol>' + html + '</ol></div>';
};
function zbCheck(i){ var s = vst(VCTX.id), k = "zbc" + i; if(s.x[k]) delete s.x[k]; else s.x[k] = 1; save(); render(); }
