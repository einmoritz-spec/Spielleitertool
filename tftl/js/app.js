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
  function go(area, page){ location.hash = (area==="tftl" ? "" : area + "/") + page; }
  window.go = go;

  function head(a){
    var d = B[a], lg;
    if(d.logo) lg = '<span class="lgm" role="img" aria-label="' + esc(d.title) + '" style="width:' + d.logoW + 'px;height:' + d.logoH + 'px;-webkit-mask-image:url(../' + d.logo + ');mask-image:url(../' + d.logo + ')"></span>';
    else { lg = '<span class="lgm" role="img" aria-label="Tales from the Loop" style="width:' + S.logoMask[1] + 'px;height:' + S.logoMask[2] + 'px;-webkit-mask-image:url(' + S.logoMask[0] + ');mask-image:url(' + S.logoMask[0] + ')"></span>';
      if(d.sub) lg += '<span class="sub-logo"><i></i><span class="lgm" role="img" aria-label="' + esc(d.title) + '" style="width:' + d.subW + 'px;height:' + d.subH + 'px;-webkit-mask-image:url(../' + d.sub + ');mask-image:url(../' + d.sub + ')"></span></span>'; }
    document.getElementById("top").innerHTML =
      '<button class="brand" onclick="go(\'' + a + '\',\'start\')" aria-label="' + esc(d.title) + '">' + lg + '</button><div class="topbar-spacer"></div>' +
      '<button class="tb-burger" onclick="openMenu(true)" aria-label="Menü öffnen" title="Menü"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg></button>';
  }
  function menu(a){
    var d = B[a], p = a==="tftl" ? "" : a + "/";
    var h = '<h3>Nachschlagen</h3>' + window.NACH.map(function(n){ return '<button onclick="openMenu(false);location.hash=\'' + p + 'nach/' + n[0] + '\'">' + esc(n[1]) + '</button>'; }).join("") +
      '<h3>Werkzeuge</h3>' + [["schirm","Spielleiterschirm"],["bogen","Charakterbogen"],["wuerfel","Würfel"],["galerie","Galerie"]].map(function(n){ return '<button onclick="openMenu(false);location.hash=\'' + p + n[0] + '\'">' + n[1] + '</button>'; }).join("") +
      '<h3>Bücher</h3>' + d.books.map(function(id){ return '<button onclick="openMenu(false);BV.open(\'' + id + '\',1)">' + esc(nameOf(id)) + '</button>'; }).join("");
    document.getElementById("mmP").innerHTML = h;
  }
  function render(){
    var r = route(), d = B[r.area];
    document.body.className = (d.cls || "") + (document.body.classList.contains("nohead") ? " nohead" : "");
    document.title = d.title;
    head(r.area); menu(r.area);
    var tabsEl = document.getElementById("tabs");
    document.getElementById("app").onclick = null;
    if(r.area==="tftl" && r.page==="m" && window.renderLeitstand){ window.renderLeitstand(document.getElementById("app"), tabsEl, r.rest); return; }
    tabsEl.innerHTML = d.tabs.map(function(t){ return '<a href="#' + (r.area==="tftl" ? "" : r.area + "/") + t[0] + '"' + (t[0]===r.page ? ' class="on"' : '') + '>' + t[1] + '</a>'; }).join("");
    var tab = d.tabs.filter(function(t){ return t[0]===r.page; })[0];
    var app = document.getElementById("app"); app.className = "page";
    if(r.area==="tftl" && r.page==="start" && window.renderStart) window.renderStart(app);
    else if(r.area==="tftl" && r.page==="kids" && window.renderKids) window.renderKids(app);
    else if(r.area==="tftl" && r.page==="bogen" && window.renderBogen) window.renderBogen(app, r.rest[0]);
    else if(r.area==="tftl" && r.page==="mysterien" && window.renderMysterien) window.renderMysterien(app);
    else app.innerHTML = '<h1>' + esc(tab ? tab[1] : r.page) + '</h1>';
    window.scrollTo(0, 0);
  }
  window.openMenu = function(on){ document.getElementById("mmB").classList.toggle("on", on); document.getElementById("mmP").classList.toggle("on", on); };
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
  render();
})();
