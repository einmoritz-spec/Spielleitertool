/* The Vault 06 – GRIDHOG: eigene Bausteine (TA_VB) */
/* Verkehrsleittafel (S. 94): LED-Punktmatrix, die Zeilen laufen nacheinander durch */
var ghAlt = TA_VB.handout;
TA_VB.handout = function(b, ctx){
  if(ctx.id !== "gridhog" || b.art !== "schild") return ghAlt ? ghAlt(b, ctx) : VB.handout(b);
  return '<div class="gh-tafel"><div class="gh-led">' + b.x.map(function(z, i){ return '<p style="--i:' + i + '">' + esc(z) + '</p>'; }).join("") +
    '<i class="b1"></i><i class="b2"></i><i class="b3"></i><i class="b4"></i><i class="b5"></i><i class="b6"></i></div>' +
    '<div class="gh-name"><b>GRIDHOG</b><span>von Sean Ireland</span></div></div>';
};
/* Loops und Chaos (S. 99): jeder betretene Loop bringt 10 eigenes Chaos; bei 0 stürzt er ab */
TA_VB.loops = function(b, ctx){
  var L = vst(ctx.id).x.loops || [];
  return '<div class="gh-loops"><h4>' + esc(b.h) + pgl(b.p, "ta_vault") + '</h4><p>Betreten Agenten einen Loop, kommen 10 Chaos hinzu, die nur dort gelten. Fällt es auf 0, stürzt der Loop ab.</p>' +
    L.map(function(n, i){ return '<div class="gh-loop' + (n <= 0 ? " ab" : "") + '"><span>Loop ' + (i + 1) + '</span><button onclick="ghL(' + i + ',-1)">–</button><b>' + n + '</b><button onclick="ghL(' + i + ',1)">+</button>' + (n <= 0 ? '<em>stürzt ab</em>' : '') + '<a onclick="ghL(' + i + ',0)" title="entfernen">×</a></div>'; }).join("") +
    '<button class="gh-neu" onclick="ghL(-1)">+ Loop betreten (10 Chaos)</button></div>';
};
function ghL(i, d){
  var s = vst(VCTX.id), L = s.x.loops = s.x.loops || [];
  if(i < 0) L.push(10); else if(d === 0) L.splice(i, 1); else L[i] = Math.max(0, L[i] + d);
  save(); render();
}
