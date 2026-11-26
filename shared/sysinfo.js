/* Info-Knopf (i) in der Kopfzeile neben dem Buch-Symbol.
   Öffnet ein Pop-up mit dem Wichtigsten zum System auf einen Blick.
   Inhalte: shared/info/<system>.js (eine Datei pro System, werden erst beim Öffnen geladen).
   Wird von toolmenu.js eingebunden; nutzt window.gmToolCur() und window.gmToolBase. */
(function(){
  var BASE = window.gmToolBase || "";
  /* Systemkennung (toolmenu) -> Info-Datei. Nur ausgebaute Systeme. */
  var MAP = {savageworlds:"savageworlds", discworld:"discworld", household:"household", hh_garten:"household", moerkborg:"moerkborg", wake:"wake", cityofmist:"cityofmist", cm_rw:"cityofmist", cm_ss:"cityofmist", locallegends:"locallegends", paynetown:"nights", otherscape:"otherscape", vaesen:"vaesen", etr:"etr", wildsea:"wildsea", pico:"pico", mausritter:"mausritter", cairn:"cairn", slugblaster:"slugblaster", dragonbane:"dragonbane", heart:"heart", ht_dagger:"heart", spire:"spire", tftl:"tftl", tftl_flood:"tftl_flood", tftl_es:"tftl_es", compass:"compass"};
  window.GM_INFO = window.GM_INFO || {};
  function key(){ try{ return MAP[window.gmToolCur ? window.gmToolCur() : ""] || null; }catch(e){ return null; } }

  var css = document.createElement("style");
  css.textContent = [
    ".topbar .tm-info{flex:none;margin-left:auto!important;margin-right:6px;width:40px;height:40px;padding:0;display:inline-flex;align-items:center;justify-content:center;background:rgba(127,127,127,.10);border:1px solid rgba(127,127,127,.38);border-radius:10px;color:inherit;cursor:pointer;transition:filter .15s}",
    ".topbar .tm-info:hover{filter:brightness(.96)}",
    ".topbar .tm-info ~ .tm-book,.topbar .tm-info ~ .tm-map{margin-left:0!important}",
    ".gi-ov{position:fixed;inset:0;z-index:100000;display:flex;align-items:center;justify-content:center;padding:24px;background:rgba(10,8,6,.55);backdrop-filter:blur(2px);animation:giF .16s ease-out}",
    "@keyframes giF{from{opacity:0}to{opacity:1}}@keyframes giU{from{opacity:0;transform:translateY(8px) scale(.985)}to{opacity:1;transform:none}}",
    ".gi-box{position:relative;width:min(960px,96vw);max-height:92vh;overflow:auto;border-radius:14px;box-shadow:0 24px 70px rgba(0,0,0,.45);animation:giU .2s ease-out;scrollbar-width:thin}",
    ".gi-head{display:flex;align-items:center;gap:16px;padding:14px 18px 14px 22px;min-height:62px}",
    ".gi-head .gi-logo{display:flex;align-items:center;min-height:34px}",
    ".gi-head .gi-logo>*{pointer-events:none}",
    ".gi-head .gi-tag{font-size:12.5px;letter-spacing:.09em;text-transform:uppercase;opacity:.78;margin-left:2px}",
    ".gi-x{margin-left:auto;flex:none;width:34px;height:34px;border-radius:9px;border:1px solid rgba(127,127,127,.35);background:rgba(127,127,127,.1);color:inherit;cursor:pointer;display:inline-flex;align-items:center;justify-content:center}",
    ".gi-body{display:grid;grid-template-columns:1.05fr 1fr;gap:26px;padding:22px 24px 8px}",
    ".gi-h{margin:0 0 8px;font-size:13px;letter-spacing:.14em;text-transform:uppercase;color:var(--gi-acc);font-weight:700}",
    ".gi-set{margin:0 0 16px;font-size:15.5px;line-height:1.55}",
    ".gi-facts{display:grid;grid-template-columns:auto 1fr;gap:7px 14px;margin:0;font-size:14px;line-height:1.4}",
    ".gi-facts dt{font-weight:700;white-space:nowrap;opacity:.72;font-size:12px;letter-spacing:.06em;text-transform:uppercase;padding-top:2px}",
    ".gi-facts dd{margin:0}",
    ".gi-roll{margin:0 0 14px}",
    ".gi-roll .gi-f{font-size:13.5px;margin:0 0 7px;opacity:.85}",
    ".gi-roll .gi-f>b{font-size:16px;opacity:1;margin-right:6px}",
    ".gi-bands{display:flex;gap:6px}",
    ".gi-band{flex:1;border-radius:9px;padding:8px 10px 8px;border:1px solid rgba(127,127,127,.28);background:rgba(127,127,127,.08);min-width:0}",
    ".gi-band>b{display:block;font-size:19px;line-height:1.05;margin-bottom:3px;font-variant-numeric:tabular-nums}",
    ".gi-band>span{display:block;font-size:12.5px;line-height:1.3;opacity:.88}",
    ".gi-band.bad>b{color:var(--gi-bad)}.gi-band.mid>b{color:var(--gi-mid)}.gi-band.good>b{color:var(--gi-good)}.gi-band.twist>b{color:var(--gi-acc)}",
    ".gi-cards{display:grid;grid-template-columns:1fr 1fr;gap:8px}",
    ".gi-card{border-radius:9px;padding:9px 11px;border:1px solid rgba(127,127,127,.26);background:rgba(127,127,127,.06)}",
    ".gi-card>b{display:block;font-size:13.5px;margin-bottom:2px;color:var(--gi-acc)}",
    ".gi-card>span{display:block;font-size:13px;line-height:1.38;opacity:.9}",
    ".gi-flow{grid-column:1/-1;display:flex;flex-wrap:wrap;align-items:center;gap:6px 4px;padding:12px 0 4px;border-top:1px solid rgba(127,127,127,.22);margin-top:2px}",
    ".gi-flow .gi-h{margin:0 10px 0 0}",
    ".gi-flow span{font-size:13px;padding:4px 10px;border-radius:999px;border:1px solid rgba(127,127,127,.3);background:rgba(127,127,127,.07)}",
    ".gi-flow i{font-style:normal;opacity:.45;font-size:12px}",
    ".gi-foot{height:14px}",
    "@media (max-width:760px){.gi-body{grid-template-columns:1fr}.gi-cards{grid-template-columns:1fr}}"
  ].join("");
  document.head.appendChild(css);

  function lum(c){ var m = (c||"").match(/\d+(\.\d+)?/g); if(!m || m.length<3) return null; if(m.length>3 && +m[3]===0) return null; return 0.299*m[0]+0.587*m[1]+0.114*m[2]; }
  function solid(el){ while(el){ var cs = getComputedStyle(el); if(lum(cs.backgroundColor)!==null) return cs; el = el.parentElement; } return null; }
  function vis(el){ if(!el) return false; var r = el.getBoundingClientRect(); return r.width>0 && r.height>0; }
  /* Schrift der Überschriften dieser Seite übernehmen (sichtbare h1–h3) */
  function headFont(){
    var hs = document.querySelectorAll("main h1, main h2, main h3, h1, h2, h3");
    for(var i=0;i<hs.length;i++){ if(vis(hs[i]) && !hs[i].closest(".topbar,.gi-ov,.tm-dd")) return getComputedStyle(hs[i]).fontFamily; }
    return "";
  }

  /* Logo aus der Kopfzeile übernehmen: berechnete Optik (auch CSS-Hintergrund-Logos) auf die Kopie übertragen */
  var LOOK = ["display","width","height","backgroundImage","backgroundSize","backgroundPosition","backgroundRepeat","backgroundColor","color","fontFamily","fontSize","fontWeight","fontStyle","letterSpacing","textTransform","textShadow","filter","lineHeight","paddingTop","paddingRight","paddingBottom","paddingLeft","alignItems","flexDirection","justifyContent","whiteSpace","objectFit","webkitMaskImage","maskImage","webkitMaskSize","webkitMaskRepeat","webkitMaskPosition"];
  function copyLook(a, b){
    var cs = getComputedStyle(a); LOOK.forEach(function(k){ try{ if(cs[k]!==undefined) b.style[k] = cs[k]; }catch(e){} });
    if(cs.display==="none") b.style.display = "none";
    var ac = a.children, bc = b.children; for(var i=0;i<ac.length && i<bc.length;i++) copyLook(ac[i], bc[i]);
  }
  var ov = null;
  function close(){ if(ov){ ov.remove(); ov = null; document.removeEventListener("keydown", onKey, true); } }
  function onKey(e){ if(e.key==="Escape"){ e.stopPropagation(); close(); } }
  function esc(s){ return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"); }
  function md(s){ return esc(s).replace(/\*\*(.+?)\*\*/g,"<b>$1</b>").replace(/\*(.+?)\*/g,"<i>$1</i>"); }

  function render(D){
    close();
    var bar = document.querySelector(".topbar"), brand = bar && bar.querySelector(".brand");
    var rs = getComputedStyle(document.documentElement), v = function(n){ return (rs.getPropertyValue(n)||"").trim(); };
    var bodyCs = getComputedStyle(document.body), pageCs = solid(document.querySelector("main")) || solid(document.body) || getComputedStyle(document.documentElement);
    var barCs = bar ? (solid(bar) || getComputedStyle(bar)) : null;
    var S = D.stil || {};
    var bg = S.bg || pageCs.backgroundColor, fg = S.fg || bodyCs.color;
    var lb = lum(getComputedStyle(document.body).color);
    ov = document.createElement("div"); ov.className = "gi-ov";
    var box = document.createElement("div"); box.className = "gi-box"; box.setAttribute("role","dialog"); box.setAttribute("aria-modal","true"); box.setAttribute("aria-label","Überblick");
    box.style.background = bg; box.style.color = fg; box.style.fontFamily = S.ff || bodyCs.fontFamily;
    if(!S.bg && pageCs.backgroundImage && pageCs.backgroundImage!=="none" && !/gradient\(.*fixed/.test(pageCs.backgroundImage)){ box.style.backgroundImage = pageCs.backgroundImage; box.style.backgroundSize = pageCs.backgroundSize; }
    var acc = S.acc || v("--acc") || v("--accent") || v("--red") || (brand ? getComputedStyle(brand).color : fg);
    box.style.setProperty("--gi-acc", acc);
    box.style.setProperty("--gi-bad", S.bad || "#c0392b"); box.style.setProperty("--gi-mid", S.mid || "#c98a12"); box.style.setProperty("--gi-good", S.good || "#2e8b57");
    if(S.border) box.style.border = S.border;
    var hf = S.hf || headFont();

    var bcs = bar ? getComputedStyle(bar) : null, hbg = S.hbg || (bcs ? ((bcs.backgroundImage && bcs.backgroundImage!=="none" ? bcs.backgroundImage+"," : "") + (lum(bcs.backgroundColor)!==null ? bcs.backgroundColor : barCs.backgroundColor)) : "");
    var ib = bar && bar.querySelector(".tb-burger,.tm-book,.ib"), hfgc = ib ? getComputedStyle(ib).color : (bcs ? bcs.color : "");
    var head = '<div class="gi-head" style="'+(bcs ? 'background:'+hbg+';color:'+(S.hfg||hfgc)+';border-bottom:'+(parseFloat(bcs.borderBottomWidth)>0 ? bcs.borderBottomWidth+' solid '+bcs.borderBottomColor : '1px solid rgba(127,127,127,.25)') : '')+'">'
      + '<div class="gi-logo"></div>'+(D.tag ? '<div class="gi-tag">'+esc(D.tag)+'</div>' : '')
      + '<button class="gi-x" type="button" aria-label="Schließen"><svg viewBox="0 0 12 12" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M2 2l8 8M10 2l-8 8"/></svg></button></div>';
    var hst = hf ? ' style="font-family:'+hf.replace(/"/g,"'")+'"' : '';
    var left = '<div><h3 class="gi-h"'+hst+'>Das Setting</h3><p class="gi-set">'+md(D.setting)+'</p>'
      + '<dl class="gi-facts">'+(D.fakten||[]).map(function(f){ return '<dt>'+esc(f[0])+'</dt><dd>'+md(f[1])+'</dd>'; }).join("")+'</dl></div>';
    var W = D.wurf, right = '<div><h3 class="gi-h"'+hst+'>So funktioniert’s</h3>';
    if(W) right += '<div class="gi-roll"><p class="gi-f"><b>'+esc(W.f)+'</b>'+(W.n ? md(W.n) : '')+'</p><div class="gi-bands">'+W.s.map(function(s){ return '<div class="gi-band '+(s[2]||'')+'"><b'+hst+'>'+esc(s[0])+'</b><span>'+md(s[1])+'</span></div>'; }).join("")+'</div></div>';
    right += '<div class="gi-cards">'+(D.kern||[]).map(function(k){ return '<div class="gi-card"><b>'+esc(k[0])+'</b><span>'+md(k[1])+'</span></div>'; }).join("")+'</div></div>';
    var flow = D.ablauf ? '<div class="gi-flow"><h3 class="gi-h"'+hst+'>'+esc(D.ablauf.t)+'</h3>'+D.ablauf.s.map(function(x){ return '<span>'+md(x)+'</span>'; }).join('<i>›</i>')+'</div>' : '';
    if(D.html){ if(D.css){ var cst = document.createElement("style"); cst.className = "gi-own"; cst.textContent = D.css; box.appendChild(cst); }
      box.innerHTML = head + (D.css ? '<style>'+D.css+'</style>' : '') + '<div class="gi-own-body">'+(typeof D.html === "function" ? D.html(window.gmToolBase || "") : D.html)+'</div><div class="gi-foot"></div>'; }
    else box.innerHTML = head + (D.css ? '<style>'+D.css+'</style>' : '') + '<div class="gi-body">'+left+right+flow+'</div><div class="gi-foot"></div>';
    if(brand){ var lg = brand.cloneNode(true); lg.removeAttribute("href"); lg.removeAttribute("onclick"); lg.removeAttribute("id"); copyLook(brand, lg); lg.style.margin = "0"; lg.style.pointerEvents = "none"; lg.style.border = "0"; lg.style.boxShadow = "none"; box.querySelector(".gi-logo").appendChild(lg); }
    ov.appendChild(box);
    ov.addEventListener("click", function(e){ if(e.target===ov || e.target.closest(".gi-x")) close(); });
    document.addEventListener("keydown", onKey, true);
    document.body.appendChild(ov);
    box.querySelector(".gi-x").focus({preventScroll:true});
  }

  function open(){
    var k = key(); if(!k) return;
    if(GM_INFO[k]) return render(GM_INFO[k]);
    var s = document.createElement("script"); s.src = BASE + "shared/info/" + k + ".js";
    s.onload = function(){ if(GM_INFO[k]) render(GM_INFO[k]); };
    document.head.appendChild(s);
  }
  window.gmInfoOpen = open;

  function btn(){
    var bar = document.querySelector(".topbar"); if(!bar || !key() || bar.querySelector(".tm-info,.tm-info-own")) return;
    var ICON = '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="9.2"/><path d="M12 10.6v6"/><circle cx="12" cy="7.3" r=".6" fill="currentColor" stroke-width="1.4"/></svg>';
    /* Seiten mit eigenem Buch-Knopf (Wildsea, Pico): gleiche Klasse wie der Buch-Knopf übernehmen */
    var own = !bar.querySelector(".tm-book") && bar.querySelector('button[aria-label="Buch öffnen"]');
    if(own){ var o = document.createElement("button"); o.type = "button"; o.className = own.className + " tm-info-own"; o.setAttribute("aria-label","Überblick"); o.title = "Überblick"; o.innerHTML = ICON.replace(' width="22" height="22"',''); o.addEventListener("click", function(e){ e.stopPropagation(); open(); }); own.insertAdjacentElement("beforebegin", o); return; }
    var burger = bar.querySelector(".tb-burger"); if(!burger) return;
    var ref = bar.querySelector(".tm-map") || bar.querySelector(".tm-book"); if(!ref){ if(window.gmBook) return; ref = burger; }
    var b = document.createElement("button"); b.type = "button"; b.className = "tm-info"; b.setAttribute("aria-label","Überblick"); b.title = "Überblick";
    b.innerHTML = ICON;
    var src = bar.querySelector(".tm-book") || burger, cs = getComputedStyle(src);
    b.style.color = cs.color; b.style.backgroundColor = cs.backgroundColor; b.style.borderStyle = cs.borderTopStyle; b.style.borderColor = cs.borderTopColor; b.style.borderWidth = cs.borderTopWidth; b.style.borderRadius = cs.borderRadius; if(cs.height) b.style.height = cs.height;
    b.addEventListener("click", function(e){ e.stopPropagation(); open(); });
    ref.insertAdjacentElement("beforebegin", b);
  }
  new MutationObserver(btn).observe(document.documentElement, {childList:true, subtree:true});
  if(document.readyState==="loading") document.addEventListener("DOMContentLoaded", btn); else btn();
})();
