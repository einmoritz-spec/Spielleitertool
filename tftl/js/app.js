/* Tales from the Loop – Hülle: Kopfzeile, Tabs, Routen, Burger-Menü, Tasten (h = Header aus/ein) */
(function(){
  var S = window.SYS, B = window.BEREICHE, R = document.documentElement;
  function esc(s){ return String(s).replace(/[&<>"]/g, function(c){ return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]; }); }
  Object.keys(S.vars).forEach(function(k){ R.style.setProperty("--" + k, S.vars[k]); });
  var ff = (S.fonts || []).map(function(f){ return "@font-face{font-family:" + f[0] + ";font-weight:" + (f[2] || 400) + ";font-display:swap;src:url(../assets/fonts/" + f[1] + ") format('woff2')}"; }).join("");
  var st = document.createElement("style"); st.textContent = ff; document.head.appendChild(st);
  var OFF = {tftl_core:3, tftl_flood:1, tftl_es:4, tftl_a1:1, tftl_a2:1, tftl_a3:1, tftl_a4:5, tftl_z1:5};
  var all = []; S.groups.forEach(function(g){ g.items.forEach(function(b){ all.push({key:b.id, name:b.name + " (" + b.lang + ")", off:OFF[b.id] || 0}); }); });
  function nameOf(id){ for(var i=0;i<all.length;i++) if(all[i].key===id) return all[i].name; return id; }

  function route(){
    var h = location.hash.replace(/^#/, "").split("/"), area = "tftl", page = h[0] || "start";
    if(page === "flood" || page === "es"){ area = page; page = h[1] || "start"; }
    return {area:area, page:page, rest:h.slice(area==="tftl"?1:2)};
  }
  /* Kontext je Bereich: Präfix, Speicher-Präfix, Buch und Daten – Renderer lesen window.TCTX */
  function ctx(a){
    var F = window.FLOOD || {};
    if(a === "flood") return {area:"flood", p:"flood/", ls:"flood_", book:"tftl_flood",
      START:F.START, MYSTERIEN:F.MYSTERIEN, MYS:F.MYS, NACH:F.NACH, NACHDATA:F.NACHDATA, SETS:F.SETS,
      TYPEN:F.TYPEN, KIDS:F.KIDS, KARTE:F.KARTE, kidsKey:"flood_teens_v1", sheet:"FLOODSHEET", L:F.L};
    if(a === "es"){ var E = window.ES || {}; return {area:"es", p:"es/", ls:"es_", book:"tftl_es",
      START:E.START, NACH:B.es.nach, NACHDATA:window.NACHDATA_ES, SETS:E.NACHSETS, L:{}}; }
    return {area:a, p:a==="tftl" ? "" : a + "/", ls:"tftl_", book:"tftl_core",
      START:window.START, MYSTERIEN:window.MYSTERIEN, MYS:window.MYS, NACH:window.NACH, NACHDATA:window.NACHDATA,
      SETS:null, TYPEN:window.TYPEN, KIDS:window.KIDS, KARTE:window.KARTE, kidsKey:"tftl_kids_v1", sheet:null,
      L:{kid:"Kid", kids:"Kids", unsere:"Unsere Kids", showdown:"Showdown", typBoxes:null}};
  }
  function go(area, page){ location.hash = (area==="tftl" ? "" : area + "/") + page; }
  window.go = go;

  function head(a){
    var d = B[a], lg;
    if(d.logo && a === "flood") lg = '<span class="lgm" role="img" aria-label="' + esc(d.title) + '" style="width:' + d.logoW + 'px;height:' + d.logoH + 'px;-webkit-mask-image:url(../' + d.logo + ');mask-image:url(../' + d.logo + ')"></span>';
    else if(d.logo) lg = '<span class="lgm" role="img" aria-label="' + esc(d.title) + '" style="width:' + d.logoW + 'px;height:' + d.logoH + 'px;-webkit-mask-image:url(../' + d.logo + ');mask-image:url(../' + d.logo + ')"></span>';
    else { lg = '<span class="lgm" role="img" aria-label="Tales from the Loop" style="width:' + S.logoMask[1] + 'px;height:' + S.logoMask[2] + 'px;-webkit-mask-image:url(' + S.logoMask[0] + ');mask-image:url(' + S.logoMask[0] + ')"></span>';
      if(d.sub) lg += '<span class="sub-logo"><i></i><span class="lgm" role="img" aria-label="' + esc(d.title) + '" style="width:' + d.subW + 'px;height:' + d.subH + 'px;-webkit-mask-image:url(../' + d.sub + ');mask-image:url(../' + d.sub + ')"></span></span>'; }
    document.getElementById("top").innerHTML =
      '<button class="brand" onclick="go(\'tftl\',\'hub\')" aria-label="' + esc(d.title) + '">' + lg + '</button><div class="topbar-spacer"></div>' +
      '<button class="tb-burger" onclick="openMenu(true)" aria-label="Menü öffnen" title="Menü"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg></button>';
  }
  function menu(a){
    var d = B[a], p = a==="tftl" ? "" : a + "/", C = ctx(a);
    var h = '<h3>Nachschlagen</h3>' + (d.nach || C.NACH || []).map(function(n){ return '<button onclick="openMenu(false);location.hash=\'' + p + 'nach/' + n[0] + '\'">' + esc(n[1]) + '</button>'; }).join("") +
      '<h3>Werkzeuge</h3>' + (d.werkzeuge || [["schirm","Spielleiterschirm"],["bogen","Charakterbogen"],["galerie","Galerie"]]).map(function(n){ return '<button onclick="openMenu(false);location.hash=\'' + p + n[0] + '\'">' + n[1] + '</button>'; }).join("") +
      '<h3>Bücher</h3>' + d.books.map(function(id){ return '<button onclick="openMenu(false);BV.open(\'' + id + '\',1)">' + esc(nameOf(id)) + '</button>'; }).join("");
    document.getElementById("mmP").innerHTML = h;
  }
  function render(){
    var r = route(), d = B[r.area];
    var t2 = document.getElementById("tabs2"); if(t2) t2.remove();
    document.body.className = (d.cls || "") + (document.body.classList.contains("nohead") ? " nohead" : "");
    document.title = d.title;
    window.TCTX = ctx(r.area);
    var ok = r.area==="tftl" || r.area==="flood", pre = r.area==="tftl" ? "" : r.area + "/";
    head(r.area); menu(r.area); if(window.TX) TX.info();
    if(r.area==="tftl" && r.page==="schirm"){ location.replace("#nach/schirm"); return; }
    var tabsEl = document.getElementById("tabs");
    if(r.area==="tftl" && r.page==="hub" && window.renderHub){ document.body.classList.add("hub"); tabsEl.innerHTML = ""; var ha = document.getElementById("app"); ha.className = "page hub-pg"; ha.onclick = null; if(tc) tc.setAttribute("content", "#f08a1c"); window.renderHub(ha); window.scrollTo(0, 0); return; }
    document.getElementById("app").onclick = null;
    var tc = document.querySelector('meta[name=theme-color]'); if(tc) tc.setAttribute("content", r.area==="es" ? "#33464a" : "#f08a1c");
    if(r.area==="es" && window.ES && ES.route){ ES.route(r.page, r.rest, document.getElementById("app"), tabsEl); return; }
    if(ok && r.page==="m" && window.renderLeitstand && (r.area==="tftl" || window.renderLeitstand.ctx)){ window.renderLeitstand(document.getElementById("app"), tabsEl, r.rest); return; }
    if(ok && r.page==="nach" && window.renderNach){ document.getElementById("app").className = "page"; window.renderNach(document.getElementById("app"), tabsEl, r.rest); window.scrollTo(0, 0); return; }
    tabsEl.innerHTML = (window.TX_TABS && window.TX_TABS(window.TCTX, r.page)) || d.tabs.map(function(t){ return '<a href="#' + pre + t[0] + '"' + (t[0]===r.page ? ' class="on"' : '') + '>' + t[1] + '</a>'; }).join("");
    var sh = window.TX_SUBHTML && window.TX_SUBHTML(window.TCTX, r.page);
    if(!sh && r.page === "karte" && window.TX_WELT) sh = window.TX_WELT(window.TCTX, "", "", true);
    if(sh){ var t2 = document.createElement("nav"); t2.id = "tabs2"; t2.className = "unter u0"; t2.innerHTML = sh; tabsEl.parentNode.insertBefore(t2, tabsEl.nextSibling); document.body.classList.add("hu"); }
    var tab = d.tabs.filter(function(t){ return t[0]===r.page; })[0];
    var app = document.getElementById("app"); app.className = "page";
    if(ok && r.page==="start" && window.renderStart) window.renderStart(app);
    else if(ok && r.page==="karte" && window.renderKarte) window.renderKarte(app);
    else if(ok && r.page==="kids" && window.renderKids && (r.area==="tftl" || window.renderKids.ctx)) window.renderKids(app);
    else if(ok && r.page==="bogen" && window.renderBogen && (r.area==="tftl" || window.renderKids.ctx)) window.renderBogen(app, r.rest[0]);
    else if(ok && r.page==="mysterien" && window.renderMysterien) window.renderMysterien(app);
    else if(ok && r.page==="wuerfel" && window.renderWuerfel) window.renderWuerfel(app);
    else if(ok && r.page==="galerie" && window.Galerie && Galerie.has(r.area==="flood" ? "tftl_flood" : "tftl")) Galerie.open(r.area==="flood" ? "tftl_flood" : "tftl");
    else app.innerHTML = '<h1>' + esc(tab ? tab[1] : r.page) + '</h1>';
    window.scrollTo(0, 0);
  }
  window.openMenu = function(on){ document.getElementById("mmB").classList.toggle("on", on); document.getElementById("mmP").classList.toggle("on", on); };
  /* Pfeiltasten: links/rechts = Tabs oben, hoch/runter = Kapitel in der Seitenleiste; Esc = eine Ebene zurück */
  function sicht(el){ return !!(el.offsetWidth || el.offsetHeight) && getComputedStyle(el).visibility !== "hidden"; }
  function schritt(list, d){
    list = list.filter(sicht); if(!list.length) return false;
    var i = -1; list.forEach(function(x, k){ if(i < 0 && /(^|\s)on(\s|$)/.test(x.className)) i = k; });
    var j = i < 0 ? (d > 0 ? 0 : list.length - 1) : i + d; if(j < 0 || j >= list.length) return true;
    location.hash = list[j].getAttribute("href"); return true;
  }
  function eltern(h){
    var m = h.match(/^(flood\/|es\/)?(.*)$/), p = m[1] || "", r = (m[2] || "").split("/").filter(Boolean), es = p === "es/";
    if(!r.length || r[0] === "start") return r.length || p ? "hub" : "hub";
    if(r[0] === "hub") return "";
    if(r[0] === "m") return p + "mysterien";
    if(r[0] === "nach") return r.length > 2 ? p + "nach/" + r[1] : p + "start";
    if(r[0] === "bogen") return es ? "es/reisende" : p + "kids";
    if(es && r[0] === "fahrzeug") return "es/reisende";
    return p + "start";
  }
  function offen(){
    var o = document.getElementById("bvOverlay"); if(o && !o.hidden) return true;
    var m = document.querySelector(".nscm, .lbx"); if(m){ m.remove(); return true; }
    var mp = document.getElementById("mmP"); if(mp && mp.classList.contains("on")){ openMenu(false); return true; }
    return false;
  }
  document.addEventListener("keydown", function(e){
    if(/INPUT|TEXTAREA|SELECT/.test((e.target.tagName || "")) || e.target.isContentEditable || e.ctrlKey || e.metaKey || e.altKey || e.shiftKey) return;
    if(e.key === "Escape"){ if(offen()) return; var z = eltern(location.hash.replace(/^#/, "")); if(z){ e.preventDefault(); location.hash = z; } return; }
    if(!/^Arrow(Left|Right|Up|Down)$/.test(e.key)) return;
    var o = document.getElementById("bvOverlay"); if((o && !o.hidden) || document.querySelector(".nscm, .lbx")) return;
    var d = /Right|Down/.test(e.key) ? 1 : -1, ok;
    if(/Left|Right/.test(e.key)) ok = schritt(Array.prototype.slice.call(document.querySelectorAll('.tabs a[href^="#"]:not(.mt)')), d);
    else { var sd = document.querySelector(".lay:not(.collapsed) .side, #app:not(.nsc) .nside"); ok = sd && schritt(Array.prototype.slice.call(sd.querySelectorAll('a[href^="#"]:not(.nj)')), d); }
    if(ok) e.preventDefault();
  });
  document.addEventListener("keydown", function(e){
    if(e.key === "Escape") openMenu(false);
    if(/INPUT|TEXTAREA|SELECT/.test((e.target.tagName||"")) || e.ctrlKey || e.metaKey || e.altKey) return;
    if(e.key === "h") document.body.classList.toggle("nohead");
  });
  window.addEventListener("hashchange", render);
  try{ localStorage.setItem("gm_tool_mode_v1", S.id); }catch(e){}
  BV.init({ libBase:"../bookviewer/lib/", defaultBook:S.defaultBook, books:all, openSettings:function(){ openMenu(true); } });
  window.gmBook = function(){
    var a = route().area, ids = B[a].books;
    return {name:nameOf(ids[0]), books: ids.length>1 ? ids.map(function(id){ var it; S.groups.forEach(function(g){ g.items.forEach(function(b){ if(b.id===id) it = b; }); }); return {name:it.name, sub:(it.sub||"") + " " + it.lang, open:function(){ BV.open(id, 1); }}; }) : null, open:function(){ BV.open(ids[0], 1); }};
  };
  try{ if(!location.hash.replace(/^#/, "") && !sessionStorage.getItem("tftl_hub")) history.replaceState(null, "", "#hub"); sessionStorage.setItem("tftl_hub", "1"); }catch(e){}
  render();
})();
