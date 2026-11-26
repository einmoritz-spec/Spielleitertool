/* The Vault 02 – Dead Quiet: eigene Bausteine (TA_VB) */
/* Forum „Caddy Corner Community Listserv“ (Eröffnungsseite S. 24): grüne Kopfleiste, weiße Kommentarkarten, Namen farbig */
var DQ_FARBE = {needsleep:"#2f9e5b", senioritis:"#d9692b", highscoresimms:"#e0452c", highscoremanny:"#8a63c9", twojacks1:"#4a9be0", twojacks2:"#6c5fc9"};
TA_VB.handout = function(b, ctx){
  if(b.art !== "forum") return VB.handout(b);
  var letzte = "", erster = true;
  var posts = (b.x || []).map(function(z){
    var m = /^(.*?)\s*\(([^)]*)\)(?:\s*[–-]\s*(.*))?$/.exec(z.von) || [0, z.von, "", ""];
    var name = m[1], zeit = m[2].split(",")[0].trim(), titel = m[3] || "", text = z.x, meta = "";
    var lk = /\s*\(☆\s*(\d+)\s*·\s*(\d+)\s*Kommentare?\)\s*$/.exec(text);
    if(lk){ text = text.slice(0, lk.index); meta = '<span class="dq-lk"><i>☆</i> ' + lk[1] + ' <i>💬</i> ' + lk[2] + '</span>'; }
    var trenn = (!erster && zeit !== letzte) ? '<hr class="dq-trenn">' : "";
    var kopf = '<b style="color:' + (DQ_FARBE[name.toLowerCase()] || "#2f9e5b") + '">' + esc(name) + '</b><time>' + esc(zeit.replace(/^vor /, "")) + (zeit ? " her" : "") + '</time>';
    var h = trenn + (erster ? '<article class="dq-post dq-haupt"><h4>' + tx(titel) + '</h4><div class="dq-von">' + kopf + '</div><p>' + tx(text) + '</p>' + meta + '</article>'
                            : '<article class="dq-post">' + '<div class="dq-von">' + kopf + '</div><p>' + tx(text) + '</p></article>');
    letzte = zeit; erster = false; return h;
  }).join("");
  return '<div class="vho ho-forum"><div class="dq-leiste"><span class="dq-logo"></span>' + tx(b.h) + '<span class="dq-burger"></span></div><div class="dq-liste">' + posts + '</div></div>';
};
/* Pindrop-Bildschirm (S. 34): Punktestand als Arcade-Anzeige */
TA_VB.pindrop = function(b){
  return '<div class="dq-arcade"><div class="dq-screen">' + b.x.map(function(r){ return '<span>' + esc(r[0]) + '</span><span>' + esc(r[1]) + '</span>'; }).join("") + '</div></div>';
};
/* Sonderregel mit „+5“-Chaos (S. 27): Knopf schreibt der Anomalie 5 Chaos gut */
TA_VB.kasten = function(b){
  if(!b.plus) return VB._faehig(b);
  return '<div class="dq-plus"><button type="button" onclick="vZahl(\'c\',' + b.plus + ')" title="' + b.plus + ' Chaos hinzufügen"><b>+' + b.plus + '</b><img src="' + Z("symbol-chaos-wirbel") + '" alt=""></button><div><h3>' + tx(b.h) + '</h3>' + taB(b.b || []) + '</div></div>';
};
