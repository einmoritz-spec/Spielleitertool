/* Discworld – Gruppenakte und Charakterbögen (Buch S. 218–219), originalgetreu, als ausfüllbares PDF
   Hintergründe: img/bogen/seite1.jpg (Gruppenakte + 1 Charakter), seite2.jpg (2 Charaktere), je 612 × 792 pt.
   Felder liegen in pt-Koordinaten auf den Linien des Originals. */
(function(){
  var KEY = "dw_bogen_v1", D;
  function laden(){ try{ D = JSON.parse(localStorage.getItem(KEY)) || {}; }catch(e){ D = {}; } }
  function sichern(){ try{ localStorage.setItem(KEY, JSON.stringify(D)); }catch(e){} }
  laden();

  /* Felder: [schlüssel, x, y (Linie), breite, art] – Textfelder sitzen 14 pt über der Linie */
  function sc(i, B){
    var p = "c" + i + ".", L = [];
    L.push([p + "folgen0", 128, 61 + B, 368]);
    [76, 90.5, 104.5].forEach(function(y, k){ L.push([p + "folgen" + (k + 1), 52, y + B, 444]); });
    L.push([p + "name", 128, 139 + B, 282]);
    L.push([p + "pron", 360, 157 + B, 44, "mitte"]);
    L.push([p + "org", 128, 175 + B, 282]);
    L.push([p + "hg0", 128, 202.5 + B, 282]); L.push([p + "hg1", 128, 216.5 + B, 282]);
    L.push([p + "nische", 128, 244 + B, 282]);
    [272.5, 286.5, 301].forEach(function(y, k){ L.push([p + "mar" + k, 128, y + B, 282]); });
    L.push([p + "kern", 128, 335 + B, 282]);
    L.push([p + "glueck", 504, 106 + B, 30, "glueck"]);
    L.push([p + "bild", 429, 166 + B, 131, "bild", 172]);
    return L;
  }
  var GR = [["g.name", 52, 84, 245], ["g.org", 52, 140, 245],
    ["g.ziel0", 52, 195, 509], ["g.ziel1", 52, 216.5, 509], ["g.ziel2", 52, 237.5, 509],
    ["g.verg0", 52, 295, 245], ["g.verg1", 52, 314, 245], ["g.verg2", 52, 335, 245],
    ["g.gegen0", 316, 295, 245], ["g.gegen1", 316, 314, 245], ["g.gegen2", 316, 335, 245]];
  var SEITEN = [{bg:"img/bogen/seite1.jpg", f:GR.concat(sc(0, 405.9))}, {bg:"img/bogen/seite2.jpg", f:sc(1, 0).concat(sc(2, 405.9))}];

  function pc(v, ges){ return (v / ges * 100).toFixed(3) + "%"; }
  var BSP = {"c.nische":1, "c.mar0":1, "c.mar1":1, "c.mar2":1, "g.ziel0":1, "g.verg0":1, "g.gegen0":1};
  function feld(f){
    var k = f[0], v = D[k] || "", art = f[4] || "";
    if(art === "bild"){
      var st = "left:" + pc(f[1], 612) + ";top:" + pc(f[2], 792) + ";width:" + pc(f[3], 612) + ";height:" + pc(f[5], 792);
      return '<label class="bf-bild' + (v ? " voll" : "") + '" style="' + st + '" title="Bild wählen">' + (v ? '<img src="' + v + '" alt=""><button class="weg noprint" onclick="event.preventDefault();dwBild(\'' + k + '\',null)" title="Bild entfernen">×</button>' : "") +
        '<input type="file" accept="image/*" onchange="dwBild(\'' + k + '\',this.files[0])"></label>';
    }
    var h = art === "glueck" ? 24 : 14, st2 = "left:" + pc(f[1], 612) + ";top:" + pc(f[2] - h, 792) + ";width:" + pc(f[3], 612) + ";height:" + pc(h, 792);
    var cap = f[3] / 5.9, fsz = (art !== "glueck" && v.length > cap) ? ";font-size:" + Math.max(1.6, 2.55 * cap / v.length).toFixed(2) + "cqw" : "";
    st2 += fsz;
    var bsp = BSP[k.replace(/^c\d\./, "c.")];
    if(/\.hg[01]$/.test(k)) return '<input class="bf wahl" style="' + st2 + '" value="' + esc(v) + '" data-k="' + k + '" readonly onclick="dwHg(this,event)" title="Hintergrund wählen" autocomplete="off">';
    if(bsp){
      var dd = '<button class="bf-dd noprint" style="left:' + pc(f[1] + f[3] - 13, 612) + ';top:' + pc(f[2] - h + 1, 792) + ';width:' + pc(12, 612) + ';height:' + pc(12, 792) + '" data-k="' + k + '" onclick="dwBsp(this,event)" title="Beispiele anzeigen – du kannst auch frei schreiben" aria-label="Beispiele">▾</button>';
      return '<input class="bf" style="' + st2 + '" value="' + esc(v) + '" data-k="' + k + '" oninput="dwSetze(this)" autocomplete="off" spellcheck="false">' + dd;
    }
    if(/(^|\.)org$/.test(k)) return '<input class="bf wahl" style="' + st2 + '" value="' + esc(v) + '" data-k="' + k + '" readonly onclick="dwOrgPop(this,event)" title="Organisation wählen" autocomplete="off">';
    return '<input class="bf' + (art ? " " + art : "") + '" style="' + st2 + '" value="' + esc(v) + '" data-k="' + k + '" oninput="dwSetze(this)" autocomplete="off" spellcheck="false">';
  }
  window.dwSetze = function(el){ D[el.dataset.k] = el.value; sichern(); };
  window.dwBild = function(k, file){
    if(!file){ delete D[k]; sichern(); render(); return; }
    var r = new FileReader();
    r.onload = function(){ var im = new Image(); im.onload = function(){
      var s = Math.min(1, 700 / Math.max(im.width, im.height)), c = document.createElement("canvas");
      c.width = Math.round(im.width * s); c.height = Math.round(im.height * s); c.getContext("2d").drawImage(im, 0, 0, c.width, c.height);
      D[k] = c.toDataURL("image/jpeg", .85); sichern(); render(); }; im.src = r.result; };
    r.readAsDataURL(file);
  };
  window.dwLeeren = function(){ if(!confirm("Alle Einträge auf den Bögen löschen?")) return; D = {}; sichern(); render(); };

  window.viewBogen = function(B, gi){
    return '<div class="bogenwrap"><div class="bogenleiste"><span class="vorwrap"><button class="ib" onclick="dwVorPop(event)" data-tip="Vorgefertigte Charaktere einsetzen" aria-label="Vorgefertigte Charaktere"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3.2"/><path d="M3 20c0-3.5 2.7-6 6-6s6 2.5 6 6"/><circle cx="17.5" cy="9" r="2.4"/><path d="M17 14.2c2.6.2 4.5 2.2 4.5 5.3"/></svg></button><div class="vorpop" hidden></div></span><button class="ib" onclick="dwZufall()" data-tip="Zufällig ausfüllen (Gruppe und 3 Charaktere)" aria-label="Zufällig ausfüllen"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3.5" y="3.5" width="17" height="17" rx="3"/><circle cx="8.5" cy="8.5" r=".9" fill="currentColor"/><circle cx="15.5" cy="8.5" r=".9" fill="currentColor"/><circle cx="12" cy="12" r=".9" fill="currentColor"/><circle cx="8.5" cy="15.5" r=".9" fill="currentColor"/><circle cx="15.5" cy="15.5" r=".9" fill="currentColor"/></svg></button><button class="ib" onclick="dwLeeren()" data-tip="Leeren" aria-label="Leeren"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3.5 12a8.5 8.5 0 1 0 2.6-6.1"/><path d="M3.5 4v5h5"/></svg></button><button class="ib" onclick="dwLink(this)" data-tip="Link teilen (ohne Bilder)" aria-label="Link teilen"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="2.6"/><circle cx="6" cy="12" r="2.6"/><circle cx="18" cy="19" r="2.6"/><path d="M8.3 10.7l7.4-4.3M8.3 13.3l7.4 4.3"/></svg></button><button class="ib" onclick="dwJsonOut()" data-tip="Als Datei sichern" aria-label="Als Datei sichern"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4v11"/><path d="M7 11l5 5 5-5"/><path d="M5 20h14"/></svg></button><label class="bogenbtn ib" data-tip="Datei laden" aria-label="Datei laden"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 16V5"/><path d="M7 9l5-5 5 5"/><path d="M5 20h14"/></svg><input type="file" accept=".json,application/json" hidden onchange="dwJsonIn(this)"></label><button class="haupt ib" onclick="dwPdf(this)" data-tip="Als PDF speichern" aria-label="Als PDF speichern"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 3h11l4 4v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"/><path d="M7.5 3v5h8V3"/><rect x="7" y="13" width="10" height="8"/></svg></button></div><div class="boegen">' +
      SEITEN.map(function(S){ return '<div class="dwb"><img class="bg" src="' + S.bg + '" alt="">' + S.f.map(feld).join("") + "</div>"; }).join("") + "</div></div>";
  };



  /* ---------- Auswahlfelder: Organisation (Dropdown mit Info-Popup je Eintrag) ---------- */
  function orgInfo(pg){
    var t = (pg.b || []).filter(function(x){ return typeof x === "string"; })[0] || "";
    t = t.replace(/\*/g, ""); if(t.length > 420){ var cut = t.slice(0, 420), i = Math.max(cut.lastIndexOf(". "), cut.lastIndexOf("! ")); t = i > 120 ? cut.slice(0, i + 1) : cut.replace(/\s+\S*$/, "") + " …"; }
    return t;
  }
  function popWeg(){ document.querySelectorAll(".orgpop,.orginfo").forEach(function(e){ e.remove(); }); }
  window.dwOrgPop = function(el, e){
    e.stopPropagation(); var offen = document.querySelector(".orgpop"); popWeg(); if(offen && offen.dataset.k === el.dataset.k) return;
    var L = DW.K.charaktere.filter(function(pg){ return tab("wz-" + pg.id); }), r = el.getBoundingClientRect();
    var p = document.createElement("div"); p.className = "orgpop"; p.dataset.k = el.dataset.k;
    p.style.left = Math.max(8, Math.min(r.left, innerWidth - 330)) + "px"; p.style.top = (r.bottom + 4) + "px";
    p.innerHTML = '<div class="op-z"><button class="op-n" data-n="">– keine –</button></div>' + L.map(function(pg, i){
      return '<div class="op-z"><button class="op-n" data-n="' + esc(pg.t) + '">' + esc(pg.t) + '</button><button class="op-i" data-i="' + i + '" title="Info" aria-label="Info">i</button></div>'; }).join("");
    document.body.appendChild(p);
    var h = p.getBoundingClientRect().height; if(r.bottom + 4 + h > innerHeight) p.style.top = Math.max(8, innerHeight - h - 8) + "px";
    p.addEventListener("click", function(ev){
      ev.stopPropagation(); var b = ev.target.closest("button"); if(!b) return;
      if(b.dataset.n !== undefined){ D[el.dataset.k] = b.dataset.n; popWeg(); sichern(); render(); return; }
      infoKarte(b, L[+b.dataset.i].t, orgInfo(L[+b.dataset.i]));
    });
  };
  document.addEventListener("click", popWeg);

  /* ---------- Auswahlhilfen: Hintergrund (feste Auswahl) und Beispiele für Nische, Marotten, Ziel, Vergangenheit, Gegenwart ---------- */
  function seite(id){ return DW.K.charaktere.filter(function(p){ return p.id === id; })[0]; }
  function textNach(id, kopf){
    var pg = seite(id), b = pg ? pg.b : [], go = !kopf, i;
    for(i = 0; i < b.length; i++){
      if(!go){ if(b[i] && b[i].t === "h" && b[i].x === kopf) go = true; continue; }
      if(typeof b[i] === "string") return b[i];
      if(b[i] && b[i].t === "h") break;
    }
    return "";
  }
  function kurzText(t){
    t = String(t).replace(/\*/g, ""); if(t.length <= 420) return t;
    var cut = t.slice(0, 420), i = Math.max(cut.lastIndexOf(". "), cut.lastIndexOf("! "));
    return i > 120 ? cut.slice(0, i + 1) : cut.replace(/\s+\S*$/, "") + " …";
  }
  function neuPop(el, breit){
    var offen = document.querySelector(".orgpop"), same = offen && offen.dataset.k === el.dataset.k; popWeg(); if(same) return null;
    var r = el.getBoundingClientRect(), p = document.createElement("div"); p.className = "orgpop"; p.dataset.k = el.dataset.k;
    if(breit) p.style.width = breit + "px";
    p.style.left = Math.max(8, Math.min(r.left, innerWidth - (breit || 320) - 10)) + "px"; p.style.top = (r.bottom + 4) + "px";
    p.addEventListener("click", function(ev){ ev.stopPropagation(); });
    p._r = r; return p;
  }
  function zeigPop(p){
    document.body.appendChild(p);
    var h = p.getBoundingClientRect().height; if(p._r.bottom + 4 + h > innerHeight) p.style.top = Math.max(8, innerHeight - h - 8) + "px";
  }
  function infoKarte(btn, titel, text){
    var old = document.querySelector(".orginfo"); if(old) old.remove();
    document.querySelectorAll(".orgpop .op-i.sel").forEach(function(x){ x.classList.remove("sel"); }); btn.classList.add("sel");
    var pop = btn.closest(".orgpop"), q = pop.getBoundingClientRect(), c = document.createElement("div"); c.className = "orginfo";
    c.innerHTML = "<b>" + esc(titel) + "</b><p>" + esc(kurzText(text)) + "</p>";
    c.style.top = q.top + "px"; c.style.maxHeight = q.height + "px";
    var rechts = q.right + 330 + 8 < innerWidth; c.style.left = rechts ? (q.right - 1) + "px" : (q.left - 330 + 1) + "px"; c.classList.add(rechts ? "re" : "li");
    c.addEventListener("click", function(x){ x.stopPropagation(); }); document.body.appendChild(c);
  }

  var SPEZ = ["Mensch", "Zwerg", "Troll", "Golem", "Wasserspeier", "Igor", "Zombie"];
  function spezInfo(n){ return textNach("uebliche", n) || textNach("ungewoehnliche", n); }
  window.dwHg = function(el, e){
    e.stopPropagation(); var p = neuPop(el, 600); if(!p) return;
    var pre = el.dataset.k.replace(/hg[01]$/, ""), herk = tab("wtherkunft").rows.map(function(x){ return x[1]; }), biz = tab("wtbizarr").rows.map(function(x){ return x[1]; });
    function it(art, n, info, cur){ return '<div class="op-z"><button class="op-n' + (cur === n ? " sel" : "") + '" data-a="' + art + '" data-n="' + esc(n) + '">' + esc(n) + '</button>' + (info ? '<button class="op-i" data-t="' + esc(n) + '" title="Info" aria-label="Info">i</button>' : "") + "</div>"; }
    function fuell(){
      var sp = D[pre + "spez"] || "", hk = D[pre + "herk"] || "";
      p.innerHTML = '<div class="op-sp"><div><h4>Spezies</h4>' + SPEZ.map(function(n){ return it("s", n, spezInfo(n), sp); }).join("") + '<h4>Ausgesprochen bizarr</h4>' + biz.map(function(n){ return it("s", n, "", sp); }).join("") + '</div><div><h4>Herkunft</h4>' + herk.map(function(n){ return it("h", n, "", hk); }).join("") +
        '<div class="op-z"><button class="op-n" data-a="x" data-n="">– keine –</button></div></div></div>';
    }
    fuell(); zeigPop(p);
    p.addEventListener("click", function(ev){
      var b = ev.target.closest("button"); if(!b) return;
      if(b.dataset.t){ var n = b.dataset.t; infoKarte(b, n, spezInfo(n)); return; }
      if(b.dataset.a === "x"){ delete D[pre + "spez"]; delete D[pre + "herk"]; }
      else if(b.dataset.a === "s") D[pre + "spez"] = b.dataset.n; else if(b.dataset.a === "h") D[pre + "herk"] = b.dataset.n;
      var sp = D[pre + "spez"] || "", hk = D[pre + "herk"] || "", t = sp + (sp && hk ? ", " : "") + hk.charAt(0).toLowerCase() + hk.slice(1);
      var z = umbrechen(t, 40, 2); D[pre + "hg0"] = z[0] || ""; D[pre + "hg1"] = z[1] || ""; sichern(); render(); fuell();
    });
  };

  function bspGruppen(k){
    var pre = k.replace(/\.[a-z]+\d?$/, "."), f = k.replace(/^c\d\./, "").replace(/^g\./, ""), o = D[pre + "org"] || D["g.org"] || "", pg = DW.K.charaktere.filter(function(x){ return x.t === o && tab("wz-" + x.id); })[0], G = [];
    function antw(rows){ return rows.map(function(r){ return {kopf:r[1], x:saetze(r[2])}; }); }
    function einf(rows, kopf){ return {kopf:kopf, x:rows.map(function(r){ return saetze(r[1])[0] || r[1]; })}; }
    if(/^nische/.test(f)){ if(pg) G.push({kopf:pg.t, x:tab("wn-" + pg.id).rows.map(function(r){ return r[1]; })}); else DW.K.charaktere.forEach(function(x){ if(tab("wn-" + x.id)) G.push({kopf:x.t, x:tab("wn-" + x.id).rows.map(function(r){ return r[1]; })}); }); }
    else if(/^mar/.test(f)){ if(pg) G.push({gr:"Marotten deiner Organisation", f:antw(tab("wm-" + pg.id).rows)}); G.push({gr:"Allgemeine Marotten", f:antw(tab("wtmarotte").rows)}); }
    else if(/^ziel/.test(f)){ if(pg) G.push({kopf:pg.t, x:tab("wz-" + pg.id).rows.map(function(r){ return r[1]; })}); else DW.K.charaktere.forEach(function(x){ if(tab("wz-" + x.id)) G.push({kopf:x.t, x:tab("wz-" + x.id).rows.map(function(r){ return r[1]; })}); }); }
    else if(/^verg/.test(f)) G.push({gr:"Gruppenvergangenheit", f:antw(tab("wtvergangen").rows)});
    else if(/^gegen/.test(f)) G.push({gr:"Gruppengegenwart", f:antw(tab("wtgegenwart").rows)});
    return G;
  }
  var BSP_INFO = {nische:["Nische", "nische-marotten", "Nische"], mar:["Marotten", "nische-marotten", "Marotten"], ziel:["Gruppenziel", "ziel", ""], verg:["Gruppenvergangenheit", "vergangenheit", ""], gegen:["Gruppengegenwart", "gegenwart", ""]};
  window.dwBsp = function(btn, e){
    e.stopPropagation(); var k = btn.dataset.k, p = neuPop(btn, 460); if(!p) return;
    var f = k.replace(/^c\d\./, "").replace(/^g\./, ""), art = f.replace(/\d$/, ""), inf = BSP_INFO[art], G = bspGruppen(k), n = 0, list = [];
    var html = '<div class="op-kopf"><span>Beispiele – du kannst auch frei schreiben</span><button class="op-i" data-g="1" title="Info" aria-label="Info">i</button></div>';
    G.forEach(function(g){
      if(g.f) g.f.forEach(function(r){ html += '<h4>' + esc(r.kopf) + '</h4>' + r.x.map(function(t){ list.push(t); return '<div class="op-z"><button class="op-n" data-i="' + (list.length - 1) + '">' + esc(t) + '</button></div>'; }).join(""); });
      else { html += '<h4>' + esc(g.kopf) + '</h4>' + g.x.map(function(t){ list.push(t); return '<div class="op-z"><button class="op-n" data-i="' + (list.length - 1) + '">' + esc(t) + '</button></div>'; }).join(""); }
    });
    if(!G.length) html += '<div class="op-z"><span class="op-n">Wähle zuerst eine Organisation.</span></div>';
    p.innerHTML = html; zeigPop(p);
    p.addEventListener("click", function(ev){
      var b = ev.target.closest("button"); if(!b) return;
      if(b.dataset.g){ infoKarte(b, inf[0], kurzText(textNach(inf[1], inf[2]) || (seite(inf[1]) || {b:[]}).b.filter(function(x){ return typeof x === "string"; })[0] || "")); return; }
      var t = list[+b.dataset.i]; if(t === undefined) return;
      var pre = k.replace(/[a-z]+\d?$/, "");
      if(/^(ziel|verg|gegen)/.test(f)){ var br = art === "ziel" ? 78 : 36; umbrechen(t, br, 3).concat(["", "", ""]).slice(0, 3).forEach(function(x, i){ D[pre + art + i] = x; }); }
      else D[k] = t;
      popWeg(); sichern(); render();
    });
  };

  /* ---------- Vorgefertigte Gruppe und Charaktere (S. 94–96) einsetzen ---------- */
  function vorDaten(){
    var r = {g:null, c:[]};
    (function suche(x){ if(!x) return; if(Array.isArray(x)) return x.forEach(suche);
      if(typeof x === "object"){ if(x.t === "gruppe" && !r.g) r.g = x; if(x.t === "scs" && !r.c.length) r.c = x.x; Object.keys(x).forEach(function(k){ suche(x[k]); }); } })(DW.K.charaktere.filter(function(p){ return p.id === "vorgefertigt"; }));
    return r;
  }
  window.dwVorPop = function(e){
    e.stopPropagation();
    var p = e.currentTarget.parentNode.querySelector(".vorpop"), d = vorDaten();
    if(!p.hidden){ p.hidden = true; return; }
    p.innerHTML = (d.g ? '<button class="vp-g" onclick="dwVorG()"><b>Gruppe</b> ' + esc(d.g.name) + '</button>' : "") +
      d.c.map(function(c, i){ return '<div class="vp-c"><span>' + esc(c.name) + '</span><em>Bogen ' + [1, 2, 3].map(function(n){ return '<button onclick="dwVorC(' + i + ',' + (n - 1) + ')">' + n + "</button>"; }).join("") + "</em></div>"; }).join("");
    p.hidden = false;
    setTimeout(function(){ document.addEventListener("click", function z(ev){ if(!p.contains(ev.target)){ p.hidden = true; document.removeEventListener("click", z); } }); }, 0);
  };
  function vorFertig(){ document.querySelectorAll(".vorpop").forEach(function(p){ p.hidden = true; }); sichern(); render(); }
  window.dwVorG = function(){
    var g = vorDaten().g; if(!g) return;
    D["g.name"] = g.name; D["g.org"] = g.org;
    umbrechen(g.ziel, 78, 3).concat(["", "", ""]).slice(0, 3).forEach(function(t, i){ D["g.ziel" + i] = t; });
    umbrechen(g.verg, 36, 3).concat(["", "", ""]).slice(0, 3).forEach(function(t, i){ D["g.verg" + i] = t; });
    umbrechen(g.gegen, 36, 3).concat(["", "", ""]).slice(0, 3).forEach(function(t, i){ D["g.gegen" + i] = t; });
    vorFertig();
  };
  window.dwVorC = function(i, slot){
    var c = vorDaten().c[i]; if(!c) return; var p = "c" + slot + ".";
    var hg = umbrechen(c.hg, 40, 2), pr = c.pron.split("/")[0].toLowerCase();
    D[p + "name"] = c.name; D[p + "pron"] = pr; D[p + "org"] = c.org; D[p + "hg0"] = hg[0] || ""; D[p + "hg1"] = hg[1] || "";
    D[p + "nische"] = c.nische; [0, 1, 2].forEach(function(k){ D[p + "mar" + k] = c.marotten[k] || ""; });
    D[p + "glueck"] = "4"; D[p + "kern"] = ""; delete D[p + "spez"]; delete D[p + "herk"]; [0, 1, 2, 3].forEach(function(k){ D[p + "folgen" + k] = ""; });
    vorFertig();
  };

  /* ---------- Zufall: Gruppe und drei Charaktere nach den Regeln (S. 50–70) auswürfeln ---------- */
  function wf(n){ return Math.floor(Math.random() * n); }
  function pick(a){ return a[wf(a.length)]; }
  function tab(id){
    var f = null;
    (function suche(x){ if(f || !x) return; if(Array.isArray(x)) return x.forEach(suche);
      if(typeof x === "object"){ if(x.t === "wt" && x.id === id){ f = x; return; } Object.keys(x).forEach(function(k){ suche(x[k]); }); } })(DW.K.charaktere);
    return f;
  }
  function saetze(t){ return String(t).replace(/\*/g, "").split(";").map(function(a){ return a.trim().replace(/\.$/, ""); }).filter(Boolean); }
  function kurz(a, max){ var k = a.filter(function(x){ return x.length <= max; }); return pick(k.length ? k : a); }
  function umbrechen(t, breite, n){
    var w = t.split(" "), z = [], l = "";
    w.forEach(function(x){ if((l + " " + x).trim().length > breite && l){ z.push(l); l = x; } else l = (l + " " + x).trim(); });
    if(l) z.push(l); return z.slice(0, n);
  }
  var MENSCH = ["Sam","Fred","William","Rob","Gerhart","Trevor","Juliette","Betty","Victor","Rosy","Havelock","Mustrum","Horace","Sybil","Sacharissa","Adora","Ysabel","Treibe-mich-selbst-in-den-Ruin","Alter","Hustend","Ganz-und-gar"],
    FAMILIE = ["Selachii","Rust","d’Eath"],
    ZW_V = ["Fröhlich","Grinsi","Schüchtern","Gimlet","Hwel","Glod","Karotte","Rhys","Schnabel","Snori","Albrecht","Modo","Björn","Eifrig","Lars","Nils","Pors","Grapschtopf","Setha","Gunder","Toin"],
    ZW_N = ["Gimlet","Felsschmetterer","Eisengießerssohn","Starkimarm","Kleinpo","Gutberg","Cuddy","Eisenkruste","Glodssohnssohn","Albrechtson","Snorivetter","Rhyssohn","Schinkenbrecher","Farnschild","Eisenbieger","Ringgießer","Helmklug","Beinstark","Mausehammer","Donnerstoß","Schüchternsohn","Fußstampfer"],
    TROLL = ["Fels","Ziegel","Feuerstein","Rubin","Detritus","Chrysopras","Bauxit","Kohlenwand","Blaujohn","Klinker","Hornstein","Glimmer","Schiefer","Phyllit","Kreidig","Diamant"],
    HERKUNFT = ["aus den Schatten","aus vornehmem Hause","aus einer Familie mit einem bescheidenen Geschäft in Ankh-Morpork","geboren unter einem glücklichen Stern","aufgezogen von liebevollen, wenn auch unklugen Eltern","aufgezogen von einer anderen Spezies","kennt sich aus","kommt nicht viel raus","is’ nich’ von hier","probiert mal was Neues"];
  function figur(org, p){
    var sp, art, name, pron = pick(["er","sie"]), w20 = 1 + wf(20), herk = wf(10);
    if(w20 <= 15){ sp = pick(["Mensch","Zwerg","Troll"]); art = sp; }
    else if(w20 <= 19){ sp = pick(["Golem","Wasserspeier","Igor","Zombie"]); art = sp; }
    else { var bz = tab("wtbizarr"); sp = bz.rows[wf(bz.rows.length)][1]; art = "bizarr"; pron = "es"; }
    if(art === "Mensch" || art === "Zombie" || art === "bizarr") name = pick(MENSCH) + (art === "Mensch" && herk === 1 ? " " + pick(FAMILIE) : "");
    else if(art === "Zwerg") name = pick(ZW_V) + " " + pick(ZW_N);
    else if(art === "Troll") name = pick(TROLL);
    else if(art === "Golem") name = pick(["Anghammarad","Dorfl","Pumpe " + (1 + wf(99))]);
    else if(art === "Wasserspeier") name = pick(["Gesims-über-dem-Breitweg","Wächter Fallrohr"]);
    else if(art === "Igor"){ name = pick(["Igor","Igorina"]); pron = name === "Igorina" ? "sie" : "er"; }
    if(art === "Golem" || art === "Wasserspeier") pron = "es";
    var fn = name.split(" ")[0];
    if(["Juliette","Betty","Rosy","Sybil","Sacharissa","Adora","Ysabel"].indexOf(fn) > -1) pron = "sie";
    else if(["Sam","Fred","William","Rob","Gerhart","Trevor","Victor","Havelock","Mustrum","Horace"].indexOf(fn) > -1) pron = "er";
    var o = {};
    o.name = name; o.pron = pron; o.org = org.name;
    var hk = HERKUNFT[herk], vz = umbrechen(sp + (/^aus |^kommt|^is’|^probiert|^kennt/.test(hk) ? " " : ", ") + hk, 40, 2);
    o.hg0 = vz[0] || ""; o.hg1 = vz[1] || "";
    o.nische = kurz(org.nischen, 40);
    var g = tab("wtmarotte").rows, r = [], idx = {}, quellen = [org.marotten, g, g];
    quellen.forEach(function(tb){ for(var v = 0; v < 40; v++){ var i = wf(tb.length), k = saetze(tb[i][2]).filter(function(x){ return x.length <= 40; });
      if(k.length && !idx[tb === g ? "g" + i : "o" + i]){ idx[tb === g ? "g" + i : "o" + i] = 1; r.push(pick(k)); return; } } });
    while(r.length < 3) r.push("");
    o.mar = r; o.glueck = "4";
    return o;
  }
  function organisationen(){
    var L = [];
    DW.K.charaktere.forEach(function(pg){ var z = tab("wz-" + pg.id); if(!z) return;
      L.push({name:pg.t.replace(/^(.*), Schüler der$/, "Schüler der $1"), ziele:z.rows.map(function(x){ return x[1]; }), nischen:tab("wn-" + pg.id).rows.map(function(x){ return x[1]; }), marotten:tab("wm-" + pg.id).rows}); });
    return L;
  }
  window.dwZufall = function(){
    if(Object.keys(D).some(function(k){ return !/\.bild$/.test(k) && D[k]; }) && !confirm("Alle Einträge durch eine zufällige Gruppe ersetzen? (Bilder bleiben)")) return;
    var bilder = {}; Object.keys(D).forEach(function(k){ if(/\.bild$/.test(k)) bilder[k] = D[k]; });
    var org = pick(organisationen()), n = {};
    n["g.name"] = pick(["Das Rauchende Gnu","Die Kummerkastentanten","Die Verdammten Narren","Die Prima Kumpels","Die Unaussprechlichen","Die Neue Firma","Der Dünne Braune Schmier","Die Ins und Outs","Die Käsehändler","Die Erleuchteten Brüder der Ebenholzschwarzen Nacht","Die Ninja-Moriskentänzer von Neu-Ankh","Die Gesellschaft der Kunstfreunde, hüstel"]);
    n["g.org"] = org.name;
    umbrechen(pick(org.ziele).replace(/\*/g, ""), 78, 3).forEach(function(t, i){ n["g.ziel" + i] = t; });
    var v = tab("wtvergangen").rows, ge = tab("wtgegenwart").rows;
    umbrechen(kurz(saetze(pick(v)[2]), 90), 36, 3).forEach(function(t, i){ n["g.verg" + i] = t; });
    umbrechen(kurz(saetze(pick(ge)[2]), 90), 36, 3).forEach(function(t, i){ n["g.gegen" + i] = t; });
    [0, 1, 2].forEach(function(c){
      var f = figur(org), p = "c" + c + ".";
      n[p + "name"] = f.name; n[p + "pron"] = f.pron; n[p + "org"] = f.org; n[p + "hg0"] = f.hg0; n[p + "hg1"] = f.hg1; n[p + "nische"] = f.nische;
      f.mar.forEach(function(t, i){ n[p + "mar" + i] = t; }); n[p + "glueck"] = f.glueck;
    });
    D = Object.assign(bilder, n); sichern(); render();
  };

  /* ---------- Teilen (Link) und Datei (JSON) ---------- */
  function b64u(buf){ var s = "", a = new Uint8Array(buf); for(var i = 0; i < a.length; i++) s += String.fromCharCode(a[i]); return btoa(s).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, ""); }
  function ub64(t){ t = t.replace(/-/g, "+").replace(/_/g, "/"); while(t.length % 4) t += "="; var b = atob(t), a = new Uint8Array(b.length); for(var i = 0; i < b.length; i++) a[i] = b.charCodeAt(i); return a; }
  function ohneBilder(){ var o = {}; Object.keys(D).forEach(function(k){ if(!/\.bild$/.test(k) && D[k]) o[k] = D[k]; }); return o; }
  function pack(){
    var txt = JSON.stringify(ohneBilder());
    if(!window.CompressionStream) return Promise.resolve("k" + b64u(new TextEncoder().encode(txt)));
    return new Response(new Blob([txt]).stream().pipeThrough(new CompressionStream("deflate-raw"))).arrayBuffer().then(function(b){ return "d" + b64u(b); });
  }
  function entpack(t){
    var a = ub64(t.slice(1));
    var p = t[0] === "k" ? Promise.resolve(new TextDecoder().decode(a)) : new Response(new Blob([a]).stream().pipeThrough(new DecompressionStream("deflate-raw"))).text();
    return p.then(JSON.parse);
  }
  function hinweis(t){ var d = document.createElement("div"); d.className = "dw-toast"; d.textContent = t; document.body.appendChild(d); setTimeout(function(){ d.remove(); }, 2600); }
  window.dwLink = function(){
    pack().then(function(c){
      var u = location.href.split("#")[0] + "#bogen=" + c;
      if(navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(u).then(function(){ hinweis("Link kopiert – Bilder sind nicht enthalten."); }, function(){ prompt("Link kopieren:", u); });
      else prompt("Link kopieren:", u);
    });
  };
  window.dwJsonOut = function(){
    var n = (D["g.name"] || "Gruppenakte").trim() || "Gruppenakte";
    var a = document.createElement("a"); a.href = URL.createObjectURL(new Blob([JSON.stringify({spiel:"discworld-boegen", daten:D}, null, 1)], {type:"application/json"}));
    a.download = "Discworld – " + n + ".json"; a.click();
  };
  window.dwJsonIn = function(inp){
    var f = inp.files && inp.files[0]; if(!f) return;
    var r = new FileReader(); r.onload = function(){
      try{ var o = JSON.parse(r.result); var d = o && o.daten ? o.daten : o; if(!d || typeof d !== "object") throw 0;
        if(!confirm("Aktuelle Einträge durch die Datei ersetzen?")) return;
        D = d; sichern(); render(); hinweis("Datei geladen.");
      }catch(e){ alert("Diese Datei ist kein Discworld-Bogen."); }
    }; r.readAsText(f); inp.value = "";
  };
  if(window.LK) LK.init(function(h){ return /^#k\/charaktere\/5/.test(h) || /^#bogen=/.test(h); });
  (function(){
    var m = /^#bogen=([dk][A-Za-z0-9_-]+)$/.exec(location.hash); if(!m) return;
    entpack(m[1]).then(function(d){
      LK.an(); history.replaceState(null, "", location.href.split("#")[0] + "#k/charaktere/5");
      if(!Object.keys(D).length || confirm("Geteilten Bogen laden? Deine bisherigen Einträge werden ersetzt.")){ var bilder = {}; Object.keys(D).forEach(function(k){ if(/\.bild$/.test(k)) bilder[k] = D[k]; }); D = Object.assign(bilder, d); sichern(); }
      render();
    }, function(){});
  })();

  /* ---------- PDF ---------- */
  var ROOT = "../";
  function js(src){ return new Promise(function(res, rej){ var s = document.createElement("script"); s.src = ROOT + src; s.onload = res; s.onerror = function(){ rej(new Error(src + " fehlt")); }; document.head.appendChild(s); }); }
  function bytes(u){ return fetch(u).then(function(r){ return r.arrayBuffer(); }); }
  window.dwPdf = function(knopf){
    var alt = knopf.innerHTML; knopf.style.opacity = ".5"; knopf.disabled = true;
    (window.PDFLib ? Promise.resolve() : js("shared/lib/pdf-lib.min.js")).then(function(){ return window.fontkit ? 0 : js("shared/lib/fontkit.umd.min.js"); }).then(function(){
      var L = PDFLib;
      return L.PDFDocument.create().then(function(doc){
        doc.setTitle("Discworld – Gruppenakte und Charakterbögen"); doc.setCreator("Spielleitertool"); doc.registerFontkit(fontkit);
        return Promise.all([bytes(ROOT + "assets/fonts/pdf/eb-garamond-latin-400-italic.ttf"), bytes(SEITEN[0].bg), bytes(SEITEN[1].bg)]).then(function(x){
          return doc.embedFont(x[0], {subset:false}).then(function(font){
            return Promise.all([doc.embedJpg(x[1]), doc.embedJpg(x[2])]).then(function(bg){
              var form = doc.getForm(), tinte = L.rgb(.13, .09, .07), bilder = [];
              SEITEN.forEach(function(S, si){
                var page = doc.addPage([612, 792]); page.drawImage(bg[si], {x:0, y:0, width:612, height:792});
                S.f.forEach(function(f){
                  var k = f[0], v = D[k] || "", art = f[4] || "";
                  if(art === "bild"){ if(v) bilder.push([page, f, v]); return; }
                  var h = art === "glueck" ? 26 : 16, t = form.createTextField(k.replace(/\./g, "_"));
                  t.setText(v);
                  t.addToPage(page, {x:f[1], y:792 - f[2] + 1, width:f[3], height:h, font:font, textColor:tinte, borderWidth:0, backgroundColor:undefined, borderColor:undefined});
                  var fs = art === "glueck" ? 20 : 11; while(v && fs > 6 && font.widthOfTextAtSize(v, fs) > f[3] - 4) fs -= .5;
                  t.setFontSize(fs); if(art) t.setAlignment(L.TextAlignment.Center);
                });
              });
              form.updateFieldAppearances(font);
              return Promise.all(bilder.map(function(b){
                return doc.embedJpg(b[2]).then(function(im){
                  var f = b[1], bw = f[3] - 8, bh = f[5] - 8, s = Math.min(bw / im.width, bh / im.height), w = im.width * s, h = im.height * s;
                  b[0].drawImage(im, {x:f[1] + 4 + (bw - w) / 2, y:792 - f[2] - 4 - bh + (bh - h) / 2, width:w, height:h});
                });
              })).then(function(){ return doc.save(); });
            });
          });
        });
      });
    }).then(function(b){
      knopf.innerHTML = alt; knopf.style.opacity = ""; knopf.disabled = false;
      var n = (D["g.name"] || "Gruppenakte").trim() || "Gruppenakte";
      if(window.FillPDF && FillPDF.ausgeben) FillPDF.ausgeben(b, "Discworld – " + n + ".pdf");
      else { var a = document.createElement("a"); a.href = URL.createObjectURL(new Blob([b], {type:"application/pdf"})); a.download = "Discworld – " + n + ".pdf"; a.click(); }
    }, function(e){ knopf.innerHTML = alt; knopf.style.opacity = ""; knopf.disabled = false; alert("Das PDF konnte nicht erstellt werden: " + (e && e.message || e)); });
  };
})();

DW.reg("charaktere", [{id:"boegen", g:5, t:"Gruppenakte und Charakterbögen", p:218, ansicht:"viewBogen", b:[]}]);
