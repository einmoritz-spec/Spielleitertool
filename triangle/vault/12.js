/* The Vault 12 – Nosedive: eigene Bausteine (TA_VB) */
/* Gruppenchat der Hosts (S. 198, S. 208): farbige Sprechblasen je Host, Mimi rechts, Emotionstext groß */
var ND_FARBE = {Venice:"ve", Mimi:"mi", Feast:"fe", Wodge:"wo", Leyden:"le"};
var ndAlt = TA_VB.handout;
TA_VB.handout = function(b, ctx){
  if(ctx.id !== "nosedive" || b.art !== "chat") return ndAlt ? ndAlt(b, ctx) : VB.handout(b);
  var fund = /Caleb/.test(b.h || "");
  var bl = b.x.map(function(z){
    var t = String(z.x).split("\n"), haupt = t[0], notiz = (t[1] || "").replace(/\*/g, ""), daumen = / 👍$/.test(haupt);
    if(daumen) haupt = haupt.replace(/ 👍$/, "");
    var k = ND_FARBE[z.von] || "ve", anh = /^Anhang:/.test(haupt), emo = /Emotionstext/.test(notiz);
    return '<div class="nd-bl ' + k + (z.von === "Mimi" ? " r" : "") + (emo ? " emo" : "") + '"><p' + (anh ? ' class="anh"' : '') + ' title="' + esc(z.von) + '">' + tx(haupt) + (daumen ? '<i class="nd-daumen">👍</i>' : '') + '</p>' + (notiz ? '<small>' + esc(notiz) + '</small>' : '') + '</div>';
  }).join("");
  if(!fund) return '<div class="nd-handy"><div class="nd-chat">' + bl + '</div></div>';
  return '<div class="nd-fund"><div class="nd-chat">' + bl + '</div><div class="nd-titel"><svg viewBox="0 0 300 900" preserveAspectRatio="none"><path d="M300 0L90 420 200 400 0 870 300 520 180 540 300 240z" fill="#f9ec00"/></svg><b>NOSEDIVE</b><span>von Caleb Zane Huett</span></div></div>';
};
