/* Text-Blöcke (Plan Abschnitt 6) – Grundausstattung: p, h, ul, tab, etikett, box. Wird in den Bauschritten 2–7 erweitert. */
function BLK(list){
 return (list || []).map(function(b){
  if(b.t === "p") return '<p>' + md(b.x) + '</p>';
  if(b.t === "h") return '<h4>' + md(b.x) + (b.p ? pgl(b.p) : "") + '</h4>';
  if(b.t === "ul") return '<ul>' + b.x.map(function(i){ return '<li>' + md(i) + '</li>'; }).join("") + '</ul>';
  if(b.t === "etikett") return '<span class="etikett">' + esc(b.h) + '</span><p>' + md(b.b || "") + '</p>';
  if(b.t === "box") return '<div class="box ' + (b.c || "") + '">' + (b.h ? '<span class="etikett">' + esc(b.h) + '</span>' : "") + (b.b ? BLK(b.b) : '<p>' + md(b.x || "") + '</p>') + '</div>';
  if(b.t === "tab") return '<table class="rt">' + (b.cols ? '<thead><tr>' + b.cols.map(function(c){ return '<th>' + esc(c) + '</th>'; }).join("") + '</tr></thead>' : "") +
    '<tbody>' + b.rows.map(function(r){ return '<tr>' + r.map(function(c){ return '<td>' + md(c) + '</td>'; }).join("") + '</tr>'; }).join("") + '</tbody></table>';
  return "";
 }).join("");
}
