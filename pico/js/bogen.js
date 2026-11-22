/* Interaktive Bögen: #bogen/picnic · #bogen/odyssey (Charakterbogen) · #streifzug (Streifzugbogen). Fester Seitenaufbau 720×912 px = 7,5×9,5 in = Buchformat → druckt passgenau als PDF. */
function BG(v){ ST.bogen = ST.bogen || {}; return ST.bogen[v] = ST.bogen[v] || {f:{}, h:{}, s:{}, m:-1, o:{}}; }
function bf(v, k, ph, cls, area){ var val = BG(v).f[k] || ""; return area ? '<textarea class="bf ' + (cls || "") + '" data-v="' + v + '" data-k="' + k + '" placeholder="' + (ph || "") + '">' + esc(val) + '</textarea>' : '<input class="bf ' + (cls || "") + '" data-v="' + v + '" data-k="' + k + '" placeholder="' + (ph || "") + '" value="' + esc(val) + '">'; }
function bHerzen(v, k, n){ var st = BG(v).h[k] || [], o = ""; for(var i = 0; i < n; i++){ var s = st[i] || 0; o += '<i class="h' + (s === 1 ? ' m' : s === 2 ? ' x' : '') + '" onclick="bHerz(\'' + v + '\',\'' + k + '\',' + i + ')"></i>' + ((i % 5 === 4 && i < n - 1) ? '<b class="gap"></b>' : ''); } return '<span class="hearts big">' + o + '</span>'; }
function bHerz(v, k, i){ var h = BG(v).h; h[k] = h[k] || []; hCycle(h[k], i); save(); render(); }
function bSkill(v, k){ var s = BG(v).s; s[k] = ((s[k] || 0) + 1) % 4; save(); render(); }
function bMood(v, i){ var b = BG(v); b.m = b.m === i ? -1 : i; save(); render(); }
function bDot(v, k, i){ var o = BG(v).o; o[k] = o[k] === i + 1 ? i : i + 1; save(); render(); }
function bAll(v){ var b = BG(v); if(!confirm("Den ganzen Bogen leeren?")) return; ST.bogen[v] = {f:{}, h:{}, s:{}, m:-1, o:{}}; save(); render(); }
function bPrint(){ window.print(); }
function bPdf(knopf){
  if(!window.FillPDF) return;
  var nm = document.querySelector('.sheet .bf[data-k="name"], .sheet .bf[data-k="tname"]'), t = (location.hash || "").indexOf("streifzug") >= 0 ? "Streifzugbogen" : "Charakterbogen";
  FillPDF.make(document.querySelector(".sheet"), {name:"Pico – " + ((nm && nm.value) || t), knopf:knopf, marks:[["i.h", "m x", "punkt"], [".mc", "on", "punkt"], ["i.dt", "m", "punkt"]], texts:[[".rk", "r1 r2 r3"]]});
}
var BSK = [["Bewegen",[["Flitzen","flitzen"],["Schleichen","schleichen"],["Klettern","klettern"],["Fliegen","fliegen"],["Graben","graben"],["Schwimmen","schwimmen"]]],
 ["Anfreunden",[["Quasseln","quasseln"],["Erschrecken","erschrecken"],["Prahlen","prahlen"],["Kümmern","kuemmern"],["Blenden","blenden"],["Zähmen","zaehmen"]]],
 ["Finden",[["Spüren","spueren"],["Denken","denken"],["Jagen","jagen"],["Werkeln","werkeln"],["Stöbern","stoebern"],["Kartieren","kartieren"]]],
 ["Raufen",[["Hauen","hauen"],["Brutzeln","brutzeln"],["Beißen","beissen"],["Tanzen","tanzen"],["Schlitzen","schlitzen"],["Schützen","schuetzen"]]]];
function bSkills(v){
  return '<div class="bx skills"><h2>Fertigkeiten</h2><small>Höchster Rang: 3</small>' + BSK.map(function(g){ return '<h5>' + g[0] + '</h5><div class="sk2">' + g[1].map(function(s){ var r = BG(v).s[s[1]] || 0; return '<span class="sk" onclick="bSkill(\'' + v + '\',\'' + s[1] + '\')"><i class="rk r' + r + '">' + (r || "") + '</i>' + s[0] + '</span>'; }).join("") + '</div>'; }).join("") + '</div>';
}
function bAspekte(v, n){
  var o = ""; for(var i = 0; i < n; i++) o += '<div class="asp">' + bf(v, "a" + i + "n", "", "pill") + bHerzen(v, "a" + i, 15) + bf(v, "a" + i + "t", "", "box", 1) + '</div>';
  return '<div class="bx aspekte"><h2>Aspekte</h2>' + (n < 6 ? '<small>… und Augmente</small>' : '') + o + '</div>';
}
function bStimmung(v){
  var m = BG(v).m, c = ""; for(var i = 0; i < 5; i++){ c += '<span class="mc' + (m === i ? ' on' : '') + '" onclick="bMood(\'' + v + '\',' + i + ')">' + (i === 2 ? 'OK' : '') + '</span>' + (i < 4 ? '<s></s>' : ''); }
  return '<div class="bx mood"><h2>Stimmung</h2><div class="ml">' + bf(v, "ml", "", "pill s") + '<div class="mcs">' + c + '</div>' + bf(v, "mr", "", "pill s") + '</div>' + bf(v, "m1", "", "pill") + bf(v, "m2", "", "pill") + '</div>';
}
function bBits(v, odd){
  var slots = ""; for(var i = 0; i < (odd ? 1 : 10); i++) slots += bf(v, "bit" + i, "", "pill");
  return '<div class="bx bits"><h2>Bröckchen &amp; Krimskrams</h2><div class="slots">Tragplätze: Start 6 · Aktuell ' + bf(v, "cur", "", "cur") + '</div>' + (odd ? bf(v, "bits", "", "box", 1) : '<div class="sl2">' + slots + '</div>') + '</div>';
}
function bRaetsel(v){ return '<div class="bx raetsel"><h2>Rätsel</h2><div class="rr">' + bf(v, "rq", "?", "box sq", 1) + '<svg class="tri" viewBox="0 0 60 56"><path d="M4 6h52L30 50z" fill="none" stroke="#222" stroke-width="5" stroke-linejoin="round"/><circle cx="30" cy="22" r="6" fill="none" stroke="#222" stroke-width="4"/></svg><div class="r3">' + bf(v, "r1", "›", "pill") + bf(v, "r2", "›", "pill") + bf(v, "r3", "›", "pill") + '</div></div></div>'; }
function bKopf(v, odd){
  return '<div class="bx name"><h2>Name</h2>' + bf(v, "name", "", "pill big") + '<div class="ps"><span>Pseudo</span>' + bf(v, "pseudo", "", "pill s") + '<span class="hex">' + bf(v, "nek", "n", "nek") + '</span></div>' + bf(v, "desc", "Beschreibung", "box", 1) + '</div>';
}
function bild(v){
  var src = BG(v).pic; return '<div class="bx pic" onclick="bPic(\'' + v + '\')">' + (src ? '<img src="' + src + '" alt="">' : '<span>Bild</span>') + '</div>';
}
function bPic(v){ var i = document.createElement("input"); i.type = "file"; i.accept = "image/*"; i.onchange = function(){ var f = i.files[0]; if(!f) return; var r = new FileReader(); r.onload = function(){ var im = new Image(); im.onload = function(){ var c = document.createElement("canvas"), k = Math.min(1, 480 / Math.max(im.width, im.height)); c.width = im.width * k; c.height = im.height * k; c.getContext("2d").drawImage(im, 0, 0, c.width, c.height); BG(v).pic = c.toDataURL("image/jpeg", .8); save(); render(); }; im.src = r.result; }; r.readAsDataURL(f); }; i.click(); }
function bTop(v, label){
  return '<div class="btop"><div class="bl"><img src="../assets/logos/pico.webp" alt="Pico"><span>Charakterbogen</span></div><div class="bv">' + label + '</div>' + bf(v, "spieler", "[Spielername]", "pill s") + '</div>';
}
function bogenPage(v, inner, size, label){
  var lv = v.split(":")[0];
  return '<div class="bartabs noprint"><a class="' + (lv === "picnic" ? 'on' : '') + '" onclick="go(\'bogen/picnic\')">Charakterbogen (Pic-nic)</a><a class="' + (lv === "odyssey" ? 'on' : '') + '" onclick="go(\'bogen/odyssey\')">Charakterbogen (Pic-odyssey)</a><a class="' + (lv === "streifzug" ? 'on' : '') + '" onclick="go(\'streifzug\')">Streifzugbogen</a><span class="sp"></span>' + bLinkBtn() + '<button class="chip ink" onclick="bPdf(this)">PDF</button><button class="chip o" style="--c:var(--ink)" onclick="bAll(\'' + v + '\')">Leeren</button></div>' +
    '<style>@page{size:' + size + ';margin:0}</style><div class="sheetwrap"><div class="sheet ' + lv + '">' + inner + '</div></div>';
}
function viewBogen(sel, slot){
  setTheme(false, "var(--teal)");
  var v = sel === "odyssey" ? "odyssey" : "picnic"; if(slot) v += ":" + slot;
  if(v.split(":")[0] === "picnic") return bogenPage(v, bTop(v, "Kurzes Pic-nic") + '<div class="g1">' + bKopf(v) + bild(v) + '</div><div class="g2">' + bSkills(v) + bAspekte(v, 4) + '</div><div class="g3">' + bStimmung(v) + bBits(v) + '</div><div class="g4">' + bRaetsel(v) + '<div class="bx creations"><h2>Kreationen</h2>' + bf(v, "kre", "", "box", 1) + '</div></div>', "7.5in 9.5in");
  return bogenPage(v, bTop(v, "Langer Pic-odyssee") + '<div class="bgl"><div class="col">' + bKopf(v) + bStimmung(v) + '<div class="bx creations"><h2>Kreationen</h2>' + bf(v, "kre", "", "box", 1) + '</div>' + bSkills(v) + '</div><div class="col">' + bRaetsel(v) + bBits(v, 1) + bAspekte(v, 6) + '</div></div>', "7.5in 9.5in");
}
/* ---- Streifzugbogen ---- */
function bDots(v, k, n, cls){ var cur = BG(v).o[k] || 0, o = ""; for(var i = 0; i < n; i++) o += '<i class="dt ' + (cls || "") + (i < cur ? ' m' : '') + '" onclick="bDot(\'' + v + '\',\'' + k + '\',' + i + ')"></i>'; return o; }
/* Streifzug: Titan aus den 12 Titanen übernehmen */
function bTitanen(){ var k = (PI_NACH.titanen || {kapitel:[]}).kapitel.filter(function(x){ return x.id === "auswahl" || /auswahl/.test(x.id); })[0]; var c = k && k.b.filter(function(b){ return b && b.t === "cards"; })[0]; return c ? c.x : []; }
function bTitan(name){
  var t = bTitanen().filter(function(x){ return x.t === name; })[0]; if(!t) return; var f = BG("streifzug").f, o = BG("streifzug").o, sec = "", D = {};
  t.b.forEach(function(b){ if(b && b.t === "h4"){ sec = b.x; D[sec] = []; } else if(sec) D[sec].push(b); });
  function txt(L){ var r = []; (L || []).forEach(function(b){ if(typeof b === "string") r.push(b.replace(/\*/g, "")); else if(b.t === "ul") b.x.forEach(function(x){ r.push("• " + x.replace(/\*/g, "")); }); else if(b.t === "dl") b.x.forEach(function(x){ r.push(x[0] + ": " + x[1].replace(/\*/g, "")); }); }); return r.join("\n"); }
  f.tier = t.t; f.gg = txt(D["Gunst gewinnen"]); f.aura = txt(D["Aura"]); f.vorteil = txt(D["Besondere Vorteile"]);
  for(var j = 0; j < 6; j++){ delete f["gs" + j]; delete o["gsd" + j]; }
  var j2 = 0; (D["Gigafertigkeiten"] || []).forEach(function(b){ if(b.t === "ul") b.x.forEach(function(line){ var m = /Rang (\d):\s*(.*)/.exec(line); if(!m) return; m[2].split(/,\s*/).forEach(function(nm){ if(j2 < 6){ f["gs" + j2] = nm; o["gsd" + j2] = parseInt(m[1], 10); j2++; } }); }); });
  save(); render();
}
function bTitanSel(){ return '<select class="tsel" onchange="bTitan(this.value)"><option value="">Titan wählen …</option>' + bTitanen().map(function(t){ return '<option>' + esc(t.t) + '</option>'; }).join("") + '</select>'; }
function viewStreif(){
  setTheme(false, "var(--olive)"); var v = "streifzug", S = BG(v), lang = S.f.var === "odyssey", n = lang ? 12 : 8, bauten = lang ? 6 : 4;
  var tb = ""; for(var i = 0; i < bauten; i++) tb += '<div class="tb">' + bf(v, "tb" + i + "n", "Merkmal", "pill s") + bf(v, "tb" + i, "", "box", 1) + '<div class="tbd">' + bDots(v, "tbd" + i, 3, "sq") + '</div></div>';
  var gs = ""; for(var j = 0; j < 6; j++) gs += '<div class="gcol">' + bf(v, "gs" + j, "", "box s", 1) + '<div>' + bDots(v, "gsd" + j, 3, "sq") + '</div></div>';
  var inner = '<div class="btop"><div class="bl"><img src="../assets/logos/pico.webp" alt="Pico"><span>Streifzugbogen</span></div><div class="bv"><label><input type="checkbox" onchange="BG(\'streifzug\').f.var=this.checked?\'odyssey\':\'\';save();render()" ' + (lang ? "checked" : "") + '> Langes Pic-odyssee</label></div></div>' +
   '<div class="sg1"><div class="bx"><h2>Name &amp; Tier</h2>' + bf(v, "tname", "Name", "pill") + bf(v, "tier", "Tier", "pill") + '</div><div class="bx"><h2>Gunst</h2>' + bf(v, "gunst", "", "pill big") + '</div><div class="bx"><h2>Gunst gewinnen</h2>' + bf(v, "gg", "", "box", 1) + '</div></div>' +
   '<div class="sg2"><div class="bx"><h2>Reise</h2><div class="jr' + (lang ? ' dense' : '') + '">' + bDots(v, "reise", n) + '</div><div class="tn"><span>Tag</span><span>Nacht</span></div></div><div class="bx"><h2>Wahrheiten</h2>' + bf(v, "wahr", "", "box", 1) + '</div><div class="bx"><h2>Bröckchen, Krimskrams, Brocken &amp; Notizen</h2>' + bf(v, "notiz", "", "box", 1) + '</div></div>' +
   '<div class="sg3"><div class="bx"><h2>Gigafertigkeiten</h2><small>Höchster Rang: 3</small><div class="gcs">' + gs + '</div></div><div class="bx"><h2>Aura</h2>' + bf(v, "aura", "", "box", 1) + '</div><div class="bx"><h2>Besondere Vorteile</h2>' + bf(v, "vorteil", "", "box", 1) + '</div></div>' +
   '<div class="bx den"><h2>Titanenbau</h2><div class="tbs" style="grid-template-columns:repeat(' + (lang ? 3 : 2) + ',1fr)">' + tb + '</div></div>';
  return bogenPage(v, inner, "9.5in 7.5in").replace('<style>@page', '<div class="noprint tselbar">' + bTitanSel() + '</div><style>@page');
}

/* Link für Mitspieler: eigenständige Seite nur mit den Bögen (pico/bogen.html) */
function bLinkBtn(){ return window.SOLO ? "" : '<button class="chip ink o" id="bLink" onclick="bCopyLink()">Link für Mitspieler</button>'; }
function bCopyLink(){
  var h = (location.hash || "").replace(/^#/, "").split("/"), keep = h[0] === "bogen" ? h.slice(0, 2) : h[0] === "streifzug" ? ["streifzug"] : [];
  var u = new URL("bogen.html", location.href).href + (keep.length ? "#" + keep.join("/") : ""), b = document.getElementById("bLink");
  var ok = function(){ if(b){ var t = b.textContent; b.textContent = "Kopiert"; setTimeout(function(){ b.textContent = t; }, 1600); } };
  if(navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(u).then(ok, function(){ prompt("Link:", u); });
  else { try{ var ta = document.createElement("textarea"); ta.value = u; document.body.appendChild(ta); ta.select(); document.execCommand("copy"); ta.remove(); ok(); }catch(e){ prompt("Link:", u); } }
}
