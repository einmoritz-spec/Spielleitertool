/* Startseite aus SYS (sys.js): Kopfzeile mit Logo, Header-Bild, Kacheln der Bücher nach Gruppen. Bücher öffnen das lokal hinterlegte PDF (bookviewer). */
(function(){
  var S = window.SYS, R = document.documentElement;
  function esc(s){ return String(s).replace(/[&<>"]/g, function(c){ return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]; }); }
  Object.keys(S.vars).forEach(function(k){ R.style.setProperty("--" + k, S.vars[k]); });
  var ff = (S.fonts || []).map(function(f){ return "@font-face{font-family:" + f[0] + ";font-weight:" + (f[2] || 400) + ";font-display:swap;src:url(../assets/fonts/" + f[1] + ") format('woff2')}"; }).join("");
  var st = document.createElement("style"); st.textContent = ff; document.head.appendChild(st);
  document.title = S.name;
  var logo = S.logoMask ? '<span class="lgm" role="img" aria-label="' + esc(S.name) + '" style="width:' + S.logoMask[1] + 'px;height:' + S.logoMask[2] + 'px;-webkit-mask-image:url(' + S.logoMask[0] + ');mask-image:url(' + S.logoMask[0] + ')"></span>' : S.logoImg ? '<img src="' + S.logoImg + '" alt="' + esc(S.name) + '">' : esc(S.logoText || S.name);
  var all = []; S.groups.forEach(function(g){ g.items.forEach(function(b){ all.push({key:b.id, name:b.name + " (" + b.lang + ")"}); }); });
  function tile(b){ return '<button class="bk" onclick="BV.open(\'' + b.id + '\',1)"><b>' + esc(b.name) + '</b><small>' + (b.sub ? esc(b.sub) + ' · ' : '') + '<span class="lg ' + (b.lang === "DE" ? "de" : "") + '">' + b.lang + '</span></small></button>'; }
  document.body.innerHTML =
    '<div class="topbar"><button class="brand" onclick="location.hash=\'\';scrollTo(0,0)" aria-label="' + esc(S.name) + '">' + logo + '</button><div class="topbar-spacer"></div>' +
    '<button class="tb-burger" onclick="openMenu(true)" aria-label="Menü öffnen" title="Menü"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg></button></div>' +
    '<div class="hero" style="background-image:url(img/hero.webp)' + (S.heroPos ? ';background-position:' + S.heroPos : '') + '"></div>' +
    '<div class="page">' + S.groups.map(function(g){ return '<section class="grp"><h2>' + esc(g.grp) + '</h2><div class="bks">' + g.items.map(tile).join("") + '</div></section>'; }).join("") + '</div>' +
    '<div class="mm-backdrop" id="mmB" onclick="openMenu(false)"></div><div class="mm-panel" id="mmP">' +
    S.groups.map(function(g){ return '<h3>' + esc(g.grp) + '</h3>' + g.items.map(function(b){ return '<button onclick="openMenu(false);BV.open(\'' + b.id + '\',1)">' + esc(b.name) + '</button>'; }).join(""); }).join("") + '</div>';
  window.openMenu = function(on){ document.getElementById("mmB").classList.toggle("on", on); document.getElementById("mmP").classList.toggle("on", on); };
  document.addEventListener("keydown", function(e){ if(e.key === "Escape") openMenu(false); });
  try{ localStorage.setItem("gm_tool_mode_v1", S.id); }catch(e){}
  BV.init({ libBase:"../bookviewer/lib/", defaultBook:S.defaultBook, books:all, openSettings:function(){ openMenu(true); } });
  window.gmBook = function(){ return {name:S.groups[0].items[0].name, open:function(){ BV.open(S.defaultBook, 1); }}; };
})();
