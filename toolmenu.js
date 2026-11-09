/* Systemwechsel: Rechtsklick bzw. Langdruck auf den Systemnamen (.brand) in der Kopfzeile öffnet ein Auswahlfenster. */
(function(){
  var SRC = document.currentScript && document.currentScript.src || "";
  var BASE = SRC.replace(/toolmenu\.js.*$/, "");
  var TOOLS = [
    ["wake","Wake of the Oldways","Legend in the Mist – Erzähler-Tafel",""],
    ["locallegends","Local Legends","City of Mist – Fall-Akte","locallegends/"],
    ["paynetown","Nights of Paynetown","City of Mist – Kampagne","nights/"],
    ["otherscape","Otherscape","Cyberpunk-Fantasy – Regeln, Tokyo, Abenteuer","otherscape/"]
  ];
  var css = document.createElement("style");
  css.textContent = ".tm-bd{position:fixed;inset:0;z-index:99999;background:rgba(0,0,0,.6);display:flex;align-items:center;justify-content:center;padding:16px}.tm-box{width:min(420px,100%);background:#1b1816;color:#eee;border:1px solid #4a423a;border-radius:12px;padding:16px;box-shadow:0 10px 40px rgba(0,0,0,.6);font-family:inherit}.tm-box h2{margin:0 0 10px;font-size:17px}.tm-box button{display:block;width:100%;text-align:left;margin:0 0 8px;padding:11px 13px;border-radius:8px;border:1px solid #4a423a;background:#26211d;color:inherit;font:inherit;cursor:pointer}.tm-box button small{display:block;opacity:.65;font-size:12px;margin-top:2px}.tm-box button.on{border-color:#c9a24b;background:rgba(201,162,75,.12)}.tm-x{text-align:center!important;opacity:.8}";
  document.head.appendChild(css);
  function close(){ var e = document.getElementById("tmBd"); if(e) e.remove(); }
  function cur(){ var p = location.pathname; return /\/locallegends\//.test(p) ? "locallegends" : /\/nights\//.test(p) ? "paynetown" : /\/otherscape\//.test(p) ? "otherscape" : "wake"; }
  function open(){
    close(); var c = cur(), d = document.createElement("div"); d.className = "tm-bd"; d.id = "tmBd";
    d.innerHTML = '<div class="tm-box"><h2>System wechseln</h2>' + TOOLS.map(function(t){ return '<button data-m="'+t[0]+'" class="'+(t[0]===c?"on":"")+'"><b>'+t[1]+'</b><small>'+t[2]+(t[0]===c?" (aktuell)":"")+'</small></button>'; }).join("") + '<button class="tm-x">Abbrechen</button></div>';
    d.addEventListener("click", function(e){
      var b = e.target.closest("button"); if(e.target===d || (b && b.classList.contains("tm-x"))) return close();
      if(!b) return; var m = b.dataset.m; if(m===c) return close();
      try{ localStorage.setItem("gm_tool_mode_v1", m); }catch(x){}
      var t = TOOLS.filter(function(t){ return t[0]===m; })[0]; location.href = BASE + t[3];
    });
    document.body.appendChild(d);
  }
  document.addEventListener("keydown", function(e){ if(e.key==="Escape") close(); });
  document.addEventListener("contextmenu", function(e){ if(e.target.closest && e.target.closest(".brand")){ e.preventDefault(); open(); } });
  var tm = null, fired = false;
  document.addEventListener("touchstart", function(e){ if(!(e.target.closest && e.target.closest(".brand"))) return; fired = false; tm = setTimeout(function(){ fired = true; open(); }, 550); }, {passive:true});
  ["touchend","touchmove","touchcancel"].forEach(function(n){ document.addEventListener(n, function(){ clearTimeout(tm); }, {passive:true}); });
  document.addEventListener("click", function(e){ if(fired && e.target.closest && e.target.closest(".brand")){ e.preventDefault(); e.stopPropagation(); fired = false; } }, true);
})();
