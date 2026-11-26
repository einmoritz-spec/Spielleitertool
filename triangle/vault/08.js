/* The Vault 08 – Weird Dog: eigene Bausteine (TA_VB) */
/* Eröffnungsseite (S. 130): Kinderkritzelei-Titel, Pfotenspuren, Rede in Dunkelrot */
var wdAlt = TA_VB.handout;
TA_VB.handout = function(b, ctx){
  if(b.art !== "notiz" || ctx.id !== "weird-dog") return wdAlt ? wdAlt(b, ctx) : VB.handout(b);
  var pfote = '<svg viewBox="0 0 40 44"><ellipse cx="20" cy="30" rx="11" ry="9"/><ellipse cx="7" cy="19" rx="4.6" ry="6" transform="rotate(-20 7 19)"/><ellipse cx="15" cy="10" rx="4.6" ry="6.5" transform="rotate(-6 15 10)"/><ellipse cx="26" cy="10" rx="4.6" ry="6.5" transform="rotate(6 26 10)"/><ellipse cx="34" cy="19" rx="4.6" ry="6" transform="rotate(20 34 19)"/></svg>';
  var stiefel = '<svg viewBox="0 0 30 46"><path d="M6 4c6-5 18-3 19 5 1 9-3 12-3 20 0 6 3 8 2 12-3 4-17 4-20 0-2-4 1-6 1-11 0-10-6-16 1-26z"/><path class="l" d="M6 14h17M6 21h17M7 28h15M7 35h15"/></svg>';
  var spur = [[56,8,pfote,-30,52],[66,16,pfote,12,46],[76,6,pfote,-60,40],[60,28,pfote,28,50],[70,34,pfote,-20,52],[82,26,pfote,40,46],[74,40,pfote,-10,52],[86,32,pfote,25,44],[93,52,pfote,-40,50],[80,60,pfote,10,48],[92,70,pfote,-25,44],[70,78,pfote,35,46],[88,86,pfote,-12,50],
    [52,52,stiefel,-20,52],[61,60,stiefel,10,52],[76,56,stiefel,-30,56],[84,66,stiefel,15,56],[58,84,pfote,20,40]];
  var dek = spur.map(function(s){ return '<i style="left:' + s[0] + '%;top:' + s[1] + '%;width:' + s[4] + 'px;transform:rotate(' + s[3] + 'deg)">' + s[2] + '</i>'; }).join("");
  var x = b.x || [], html = "";
  x.forEach(function(z, i){
    var rede = /^\*\*(.+)\*\*$/.exec(z);
    if(i === 0 && rede){ html += '<h2 class="wd-kopf"><span>Du bist</span> <b>nichts,</b> <span>und du bist allein.</span></h2>'; return; }
    if(rede){ html += '<p class="wd-rede" style="--k:' + (i % 3) + '">' + tx(rede[1]) + '</p>'; return; }
    html += '<p class="wd-text" style="--k:' + (i % 4) + '">' + tx(z) + '</p>';
  });
  var name = String(b.h || "").split(" – ");
  return '<div class="vho ho-notiz wd-seite"><div class="wd-spur">' + dek + '</div><div class="wd-inhalt">' + html + '</div><div class="wd-fuss"><b>' + esc(name[0] || "") + '</b><span>' + esc(name[1] || "") + '</span></div></div>';
};
