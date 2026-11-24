/* Vaesen – Startseite (Mysterien, Spielhilfen, Bücher), Ortskarten und Spielleiterschirm (Taste S). Texte kommen aus den Buchdaten. */

/* ---------- Startseite ---------- */
function uiTzProgress(){
  var s = tzLoad(), c = tzClues(), tot = c.upsala.length + c.speisesaal.list.length + c.dachboden.length + c.nora.probe.length;
  var got = Object.keys(s.clue).length;
  return {cd:s.cd.length, cdTot:4, got:got, tot:tot, last:s.last || "", any:!!(s.cd.length || got)};
}
function uiStart(){
  var pr = uiTzProgress(), lastName = "";
  TANZ.tabs.forEach(function(t){ if(t[1] === pr.last) lastName = t[0]; });
  var pct = Math.round(((pr.cd / pr.cdTot) + (pr.got / pr.tot)) / 2 * 100);
  var advS = '', advO = '';
  var adv = '<div class="vu-ac vu-big" onclick="go(\'tanz/' + (pr.last || "hg") + '\')"><span class="vu-cont">' + (pr.any ? "Weiterspielen" : "Starten") + '</span><div class="vu-im" style="background-image:url(img/tanz/eroeffnung.webp)"></div><div class="vu-tx"><h3>Tanz der Träume</h3><div class="vu-src">Grundregelwerk · S. 196</div>' +
    '<div class="vu-prog"><span>Countdown <b>' + pr.cd + ' / ' + pr.cdTot + '</b></span><span>Hinweise <b>' + pr.got + ' / ' + pr.tot + '</b>' + (lastName ? '</span><span><b>' + lastName + '</b>' : '') + '</span></div><div class="vu-bar"><i style="width:' + pct + '%"></i></div></div></div>';
  var books = [];
  VAE_BUECHER.forEach(function(g){ g.items.forEach(function(b){ if(b.cover) books.push(b); }); });
  var sm = window.VAE_MYS && VAE_MYS.tod ? 1 : 0;
  ["tod", "feuer", "teufel", "winter"].forEach(function(id){
    var M = window.VAE_MYS && VAE_MYS[id]; if(!M) return;
    var st = JSON.parse(localStorage.getItem("vae_som_" + id + "_v1") || "{}"), scd = (st.cd || []).length, scl = Object.keys(st.clue || {}).length;
    advS += '<div class="vu-ac" onclick="go(\'som/' + id + '/' + (st.last || "hg") + '\')"><span class="vu-cont">' + (scd || scl ? "Weiterspielen" : "Starten") + '</span><div class="vu-im" style="background-image:url(img/' + M.bild + '.webp)"></div><div class="vu-tx"><h3>' + esc(M.titel) + '</h3><div class="vu-src">Seasons of Mystery · S. ' + M.p + '</div><div class="vu-prog"><span>Countdown <b>' + scd + ' / ' + (M.cd ? M.cd.length : 4) + '</b></span><span>Hinweise <b>' + scl + '</b></span></div></div></div>';
  });
  books.filter(function(b){ return [sm ? "" : "vae_seasons", "vae_wicked", "vae_city"].indexOf(b.id) > -1; }).forEach(function(b){
    advO += '<div class="vu-ac vu-off" onclick="BV.open(\'' + b.id + '\',1)"><div class="vu-im" style="background-image:url(img/' + b.cover + ')"></div><div class="vu-tx"><h3>' + esc(b.name) + '</h3><div class="vu-src">' + esc(b.sub) + '</div><div class="vu-st">Noch nicht eingebaut</div></div></div>';
  });
  var tools = AREAS.filter(function(a){ return a.id !== "tanz"; }).map(function(a){
    return '<div class="vu-tl" onclick="go(\'' + a.id + '\')"><div class="vu-im" style="background-image:url(' + IMG(a.img, "thumb") + ');background-position:' + a.pos + '"></div><b>' + esc(a.t).replace("Charaktererstellung", "Charakter-<br>erstellung") + '</b></div>';
  }).join("");
  var shelf = books.map(function(b){ return '<div class="vu-bk" onclick="BV.open(\'' + b.id + '\',1)"><img src="img/' + b.cover + '" alt=""><div><b>' + esc(b.name) + '</b><small>' + esc(b.sub) + '</small></div></div>'; }).join("");
  return '<div class="vu-m1hero" style="background-image:url(img/hero_naeck.webp)"><div class="ht"><img src="../assets/logos/vaesen-rot.webp" alt="Vaesen"><p>Mythisches Skandinavien im 19. Jahrhundert. Die Gesellschaft jagt Vaesen – Wesen aus Sagen und Aberglauben.</p></div></div>' +
   '<div class="vu-m1"><div><div class="vu-sh"><h2>Spielhilfen</h2></div><div class="vu-tools">' + tools + '</div>' +
   '<div class="vu-sh" style="margin-top:26px"><h2>Grundregelwerk</h2></div><div class="vu-adv">' + adv + '</div>' +
   '<div class="vu-sea"><div class="vu-seah"><img src="img/cover_seasons.webp" alt=""><div><h2>Seasons of Mystery</h2><small>Vier Mysterien durchs Jahr · Frühling, Sommer, Herbst, Winter</small></div><button class="vu-vwb" onclick="uiVorwort()">Vorwort <span>S. 3</span></button></div><div class="vu-adv">' + advS + '</div></div>' +
   (advO ? '<div class="vu-sh" style="margin-top:26px"><h2>Weitere Bände</h2></div><div class="vu-adv vu-offrow">' + advO + '</div>' : '') + '</div>' +
   '<div><div class="vu-sh"><h2>Bücher</h2></div><div class="vu-shelf2">' + shelf + '</div></div></div>';
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
function uiVorwort(){ var o = document.createElement('div'); o.className = 'vu-vwo'; o.onclick = function(ev){ if(ev.target === o) o.remove(); }; o.innerHTML = '<div class="vu-vwc"><span class="vu-x" onclick="this.closest(\'.vu-vwo\').remove()">✕</span><h2>Vorwort <small>S. 3</small></h2>' + VU_VW.map(function(t){ return '<p>' + t + '</p>'; }).join('') + '</div>'; document.body.appendChild(o); }
