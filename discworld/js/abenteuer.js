/* Discworld – Abenteueransicht: #a/<abenteuer>[/<szene>]
   Unterleiste: die drei Abenteuer als Umschalter; Seitenleiste: Szenen; rechts alles flach.
   Notizen nur als Stift-Symbol (je Szene, localStorage). */
var PEN = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><path d="M4 20h4L19 9l-4-4L4 16z"/><path d="M13.5 6.5l4 4"/></svg>';
function notiz(k){
  ST.notes = ST.notes || {};
  var m = modal('<h3 class="nt-h">Notizen</h3><textarea class="nt" id="ntx"></textarea>', "notizm"), t = m.querySelector("textarea");
  t.value = ST.notes[k] || ""; t.focus();
  t.addEventListener("input", function(){ ST.notes[k] = t.value; save(); });
  var x = m.querySelector(".mx"); x.onclick = function(){ m.remove(); render(); };
}
function viewAbenteuer(id, sid){
  var A = DW.AB[id]; if(!A) return viewStart();
  kopf("abenteuer");
  var unter = '<nav class="unter abu">' + ABENTEUER.map(function(x){ return '<a class="' + (x.id === id ? "on" : "") + (DW.AB[x.id] ? "" : " leer") + '" onclick="' + (DW.AB[x.id] ? "go('a/" + x.id + "')" : "") + '">' + esc(x.t) + "</a>"; }).join("") +
    '<span class="sp"></span><a class="pen' + (ST.notes && ST.notes["a:" + id] ? " has" : "") + '" onclick="notiz(\'a:' + id + '\')" title="Notizen">' + PEN + "</a></nav>";
  var S = A.szenen, cur = S.filter(function(s){ return s.id === sid; })[0] || S[0];
  ST.ab = ST.ab || {}; ST.ab[id] = cur.id; save();
  var side = '<nav class="side">' + S.map(function(s, i){ var t = String(s.t).split(" – ");
    return '<a class="' + (s === cur ? "on" : "") + '" onclick="go(\'a/' + id + "/" + s.id + '\')">' + esc(t[0]) + (t[1] ? "<small>" + esc(t[1]) + "</small>" : "") + (i === 0 ? '<button class="fold" onclick="event.stopPropagation();falten()" title="Leiste einklappen (<)">‹</button>' : "") + "</a>"; }).join("") + "</nav>";
  var body = '<section class="ab szene"><header class="kh"><h2>' + esc(cur.t) + (cur.p ? ' <a class="pg" onclick="buch(' + cur.p + ')">S. ' + cur.p + "</a>" : "") + "</h2>" + (cur.kurz ? '<p class="motto">' + esc(cur.kurz) + "</p>" : "") + "</header>" +
    '<div class="txt">' + (cur.img ? bildTag(cur.img) : "") + blk(cur.b) + "</div></section>";
  return unter + lay(side, body);
}
