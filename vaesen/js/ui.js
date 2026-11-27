/* Vaesen – Startseite (Mysterien, Spielhilfen, Bücher), Ortskarten und Spielleiterschirm (Taste S). Texte kommen aus den Buchdaten. */

/* ---------- Startseite ---------- */
function uiStart(){
  /* Mysterien: ein gemeinsamer Bildstreifen, gruppiert nach Buch */
  function tile(id, emb){
    var M = window.VAE_MYS && VAE_MYS[id]; if(!M) return "";
    var st = {}; try{ st = JSON.parse(localStorage.getItem("vae_som_" + id + "_v1") || (id === "tanz" ? localStorage.getItem("vae_tanz_v1") : null) || "{}"); }catch(e){}
    var scd = (st.cd || []).length, scl = Object.keys(st.clue || {}).length, last = ({hg: 1, an: 1, orte: 1, kf: 1, ns: 1})[st.last] ? st.last : "hg";
    return '<a class="vs-my' + (emb ? ' vs-emb' : '') + '" onclick="go(\'som/' + id + '/' + last + '\')" style="--im:url(img/' + M.bild + '.webp)"><span class="vs-k">' + esc(emb ? "Einführung" : (M.zeit || "")) + '</span><span class="vs-t"><b>' + esc(M.titel) + '</b><small>' + esc((M.ort || "").split(" · ")[0]) + '</small><em>Countdown ' + scd + ' / ' + (M.cd ? M.cd.length : 4) + ' · Hinweise ' + scl + '</em><i>' + (scd || scl ? "Weiterspielen" : "Starten") + '</i></span></a>';
  }
  var tanz = tile("tanz", 1);
  var som = "";
  ["tod", "feuer", "teufel", "winter"].forEach(function(id){ som += tile(id); });
  var wic = ""; ["silber", "geheimnis", "nachtsau", "stern"].forEach(function(id){ wic += tile(id); });
  var cit = ""; ["mord","lied"].forEach(function(id){ cit += tile(id); });
  var grp = '<div class="vs-grp" style="flex:1"><div class="vs-gh">Grundregelwerk</div><div class="vs-row">' + tanz + '</div></div>' +
    (som ? '<div class="vs-grp" style="flex:4"><div class="vs-gh">Seasons of Mystery<button onclick="uiVorwort()">Vorwort</button></div><div class="vs-row">' + som + '</div></div>' : '') +
    (wic ? '<div class="vs-grp" style="flex:2"><div class="vs-gh">A Wicked Secret</div><div class="vs-row">' + wic + '</div></div>' : '') +
    (cit ? '<div class="vs-grp" style="flex:2"><div class="vs-gh">City of My Nightmares<button onclick="uiEinfuehrung(\'city\')">Einführung</button></div><div class="vs-row">' + cit + '</div></div>' : '');
  /* Bereiche des Grundregelwerks */
  var big = {vaesen:1};
  var areas = HEAD.map(function(h){ return area(h[0]); }).map(function(a){
    return '<a class="vs-ar' + (big[a.id] ? ' vs-wide' : '') + '" onclick="go(\'' + a.id + '\')" style="--im:url(' + IMG(a.img) + ');--pos:' + a.pos + '"><b>' + esc(a.t) + '<small>' + esc(a.s) + '</small></b></a>';
  }).join("");
  /* Bücher: hochkant, lückenlos */
  var books = [];
  VAE_BUECHER.forEach(function(g){ g.items.forEach(function(b){ if(b.cover) books.push(b); }); });
  var shelf = books.map(function(b){
    return '<a class="vs-bk' + (b.on ? '' : ' vs-off') + '" onclick="BV.open(\'' + b.id + '\',1)" style="--im:url(img/' + b.cover + ')"><b>' + esc(b.name.replace("Vaesen – ", "")).replace("Grundregelwerk", "Grund&shy;regelwerk") + '<small>' + esc(b.on ? b.sub : "Noch nicht eingebaut") + '</small></b></a>';
  }).join("");
  return '<div class="vs-hero"><img src="../assets/logos/vaesen-rot.webp" alt="Vaesen"></div><div class="vs">' +
    '<div class="vs-sh">Grundregelwerk</div><div class="vs-strip">' + areas + '</div>' +
    '<div class="vs-sh">Mysterien</div><div class="vs-mys">' + grp + '</div>' +
    '<div class="vs-sh">Bücher</div><div class="vs-books">' + shelf + '</div></div>';
}

/* ---------- Ortskarten (Norden, Gesellschaft): Kästen des Buchs als zugeklappte Karten ---------- */
function uiCards(boxes){
  return '<div class="vu-pl">' + boxes.map(function(b){
    return '<div class="vu-pk" onclick="this.classList.toggle(\'vu-open\')"><h4>' + b.h + '</h4><p>' + b.x + '</p></div>';
  }).join("") + '</div>';
}

/* ---------- Spielleiterschirm ---------- */
var SCH_TABS = [["Proben & Zustände", "pz"], ["Kampf", "ka"], ["Verletzungen", "ve"], ["Gefahren & Heilung", "gh"], ["Ausrüstung", "au"]];
var SCH = {tab:"pz", crit:"k", hit:""};
function schAll(){ return VAE_KONFLIKT_1.concat(VAE_KONFLIKT_2); }
function schIdx(a, h, from){ for(var i = from || 0; i < a.length; i++) if(a[i].t === "h" && a[i].x === h) return i; return -1; }
function schRng(a, from, to){ var i = schIdx(a, from), j = to ? schIdx(a, to, i + 1) : a.length; if(i < 0) return []; if(j < 0) j = a.length; return a.slice(i, j); }
function schHtml(bl){ return bl.map(blk).join(""); }
function schBody(){
  var K = schAll(), t = SCH.tab;
  if(t === "pz"){
    var pr = VAE_REGELN.filter(function(r){ return r.id === "probe"; })[0], zu = VAE_REGELN.filter(function(r){ return r.id === "zustaende"; })[0];
    return '<div class="vu-cc"><div class="vu-sc"><h3>Fertigkeitsprobe <span class="pg">S. ' + pr.p + '</span></h3>' + schHtml(pr.b) + '</div><div class="vu-sc"><h3>Zustände <span class="pg">S. ' + zu.p + '</span></h3>' + schHtml(zu.b) + '</div><div class="vu-sc">' + schHtml(schRng(K, "Furcht", "Explosionen")) + '</div></div>';
  }
  if(t === "ka") return '<div class="vu-cc">' + schHtml(schRng(K, "Kampf", "Verletzungen")) + '</div>';
  if(t === "ve"){
    var tbls = K.filter(function(b){ return b.t === "tbl" && b.head[0] === "W66"; }), cur = tbls[SCH.crit === "k" ? 0 : 1], ver = schRng(K, "Verletzungen", "Furcht").filter(function(b){ return b !== tbls[0] && b !== tbls[1] && !(b.t === "h" && /^(Körperliche|Geistige) kritische Verletzungen$/.test(b.x)); });
    var rows = cur.rows.map(function(r){ return '<tr' + (SCH.hit === r[0] ? ' class="vu-hit" id="schHit"' : '') + '><td>' + r[0] + '</td><td><b>' + r[1] + '</b>' + (r[2] === "Ja" ? ' <span class="pg" style="color:var(--red)">' + cur.head[2].toLowerCase() + ' · ' + r[3] + '</span>' : (r[3] !== "—" ? ' <span class="pg">' + r[3] + '</span>' : '')) + '</td><td class="vu-d">' + r[4] + '</td></tr>'; }).join("");
    var d = SCH.hit ? [SCH.hit[0], SCH.hit[1]] : ["–", "–"];
    return '<div class="vu-vg"><div class="vu-cc vu-c2">' + schHtml(ver) + '</div><div class="vu-crit"><div class="vu-tg"><a class="' + (SCH.crit === "k" ? "on" : "") + '" onclick="schCrit(\'k\')">Körperlich</a><a class="' + (SCH.crit === "g" ? "on" : "") + '" onclick="schCrit(\'g\')">Geistig</a></div>' +
      '<div class="vu-roll66"><div class="vu-die">' + d[0] + '</div><div class="vu-die">' + d[1] + '</div><button class="btn fill" onclick="schRoll()">W66 würfeln</button></div><div class="vu-ctw"><table class="vu-ct">' + rows + '</table></div></div></div>';
  }
  return "";
}
function schGh(){
  var K = schAll(), a = K.slice(schIdx(K, "Explosionen")), i2 = schIdx(VAE_KONFLIKT_2, "Ausrüstung");
  return a.slice(0, VAE_KONFLIKT_1.length - schIdx(K, "Explosionen")).concat(VAE_KONFLIKT_2.slice(0, i2));
}
function schRender(){
  var ov = document.getElementById("schirm"); if(!ov) return;
  var kl = VAE_MYS.winter && VAE_MYS.winter.kaelte, body = SCH.tab === "ka2" && kl ? '<div class="vu-cc" data-pgbook="vae_seasons"><div class="vu-sc"><h3>' + kl.t + ' <span class="pg">S. ' + kl.p + '</span></h3><p>' + kl.x.replace(/KRAFT/g, "<b>KRAFT</b>") + '</p></div></div>' : SCH.tab === "gh" ? '<div class="vu-cc">' + schHtml(schGh()) + '</div>' : (SCH.tab === "au" ? '<div class="vu-cc">' + schHtml(VAE_KONFLIKT_2.slice(schIdx(VAE_KONFLIKT_2, "Ausrüstung"))) + '</div>' : schBody());
  var tabs = SCH_TABS.concat(window.VAE_MYS && VAE_MYS.winter && VAE_MYS.winter.kaelte && /^#som\/winter/.test(location.hash) ? [["Kälte", "ka2"]] : []);
  ov.innerHTML = '<div class="vu-hd2">' + tabs.map(function(t){ return '<a class="' + (t[1] === SCH.tab ? "on" : "") + '" onclick="schTab(\'' + t[1] + '\')">' + t[0] + '</a>'; }).join("") + '<span class="vu-x" onclick="schClose()">✕</span></div><div class="vu-bd">' + body + '</div>';
  var h = document.getElementById("schHit"), w = ov.querySelector(".vu-ctw"); if(h && w) w.scrollTop = h.offsetTop - w.clientHeight / 2;
}
function schOpen(tab){
  if(tab) SCH.tab = tab;
  var b = document.getElementById("schB");
  if(!b){ b = document.createElement("div"); b.id = "schB"; b.className = "vu-scr-b"; b.onclick = schClose; document.body.appendChild(b); var o = document.createElement("div"); o.id = "schirm"; o.className = "vu-scr"; document.body.appendChild(o); }
  schRender();
}
function schClose(){ var a = document.getElementById("schB"), b = document.getElementById("schirm"); if(a) a.remove(); if(b) b.remove(); }
function schTab(t){ SCH.tab = t; schRender(); }
function schCrit(c){ SCH.crit = c; SCH.hit = ""; schRender(); }
function schRoll(){ var a = 1 + Math.floor(Math.random() * 6), b = 1 + Math.floor(Math.random() * 6); SCH.hit = "" + a + b; schRender(); }
document.addEventListener("keydown", function(e){
  var t = e.target, tg = t && t.tagName;
  if(e.key === "Escape" && document.getElementById("schirm")){ schClose(); return; }
  if(e.ctrlKey || e.metaKey || e.altKey || tg === "INPUT" || tg === "TEXTAREA" || tg === "SELECT" || (t && t.isContentEditable)) return;
  if(e.key === "s" || e.key === "S"){ if(document.getElementById("schirm")) schClose(); else schOpen(); }
});

var VU_VW = ['In diesem Band findest du vier gruselige Mysterien für Vaesen – Nordic Horror Roleplaying. Die Fälle folgen dem Lauf der Jahreszeiten durch ein Jahr im Mythischen Norden und können der Reihe nach oder nach Belieben des Spielleiters verstreut gespielt werden.', 'Mit Ein Tanz mit dem Tod beginnen wir im Frühling. Wenn die Blumen erwachen und die Bäume aus dem Schlaf steigen, gehen wir in den Norden, in die Provinz Dalarna mit ihren sanften Hügeln und mächtigen Seen. In einem malerischen, abgelegenen Dorf wurde ein schreckliches Verbrechen begangen, das irgendwie mit einem überirdischen Vaesen zusammenzuhängen scheint.', 'In Feuerherz wächst die religiöse Inbrunst im ländlichen Småland, als der heißeste Sommer seit Menschengedenken gewaltige Waldbrände, Missernten, weitverbreitete Armut und eine Massenauswanderung nach Amerika auslöst. Werden die Spielercharaktere herausfinden, was dahintersteckt – und davon erzählen können?', 'In Der Teufel im Moor reisen wir im Herbst nach Westen, in das windgepeitschte Moor von Grimsted Lyng auf der dänischen Halbinsel Jütland, und untersuchen eine Schauergeschichte, in der die Moderne gegen die alten Bräuche antritt.', 'Und zuletzt entfernen wir uns ein Stück von den Kernlanden des Mythischen Nordens. In Ein Wintermärchen reisen die Charaktere in die verschneiten Wälder Ingermanlands östlich der Ostsee, wo sie unter den glitzernden Wintersternen von einem geheimnisvollen Gegner herausgefordert werden.', 'Hier sind sie nun: vier Jahreszeiten voller Geheimnisse. Es ist Zeit, die Koffer zu packen, die Bücher abzustauben und die Laternen zu entzünden. Das Abenteuer wartet.'];
function uiEinfuehrung(k){ var I = (window.VU_INTRO || {})[k]; if(!I) return; var o = document.createElement('div'); o.className = 'vu-vwo'; o.onclick = function(ev){ if(ev.target === o) o.remove(); }; o.innerHTML = '<div class="vu-vwc vu-intro"><span class="vu-x" onclick="this.closest(\'.vu-vwo\').remove()">✕</span><h2>' + esc(I.titel) + ' <small>' + esc(I.p) + '</small></h2>' + I.abschnitte.map(function(a){ return '<h3>' + esc(a.h) + ' <small>S. ' + a.p + '</small></h3>' + (a.img ? '<div class="vu-ii">' + a.img.map(function(n){ return '<img src="img/' + n + '.webp" alt="">'; }).join('') + '</div>' : '') + a.t.map(function(x){ return '<p>' + x + '</p>'; }).join(''); }).join('') + '</div>'; document.body.appendChild(o); }
function uiVorwort(){ var o = document.createElement('div'); o.className = 'vu-vwo'; o.onclick = function(ev){ if(ev.target === o) o.remove(); }; o.innerHTML = '<div class="vu-vwc"><span class="vu-x" onclick="this.closest(\'.vu-vwo\').remove()">✕</span><h2>Vorwort <small>S. 3</small></h2>' + VU_VW.map(function(t){ return '<p>' + t + '</p>'; }).join('') + '</div>'; document.body.appendChild(o); }
