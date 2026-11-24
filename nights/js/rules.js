/* Regelblatt (Schublade), Würfler und Glossar-Tooltips. Daten: js/data/regeln/*.js */
(function(){
  const R = () => window.NIGHTS.rules;
  const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
  let tab = "wuerfel", hard = false, kraft = 0, hist = [];
  const TABS = [["wuerfel","Würfeln"],["aktionen","Aktionen"],["wurf","Wurf & Kraft"],["zust","Zustände"],["hinw","Hinweise"],["mom","Momentum"],["glossar","Glossar"]];

  function ensure(){
    if(document.getElementById("rulesDrawer")) return;
    const d = document.createElement("aside"); d.id = "rulesDrawer"; d.hidden = true; d.setAttribute("aria-label","Regelblatt");
    d.innerHTML = '<div class="rd-head"><b>Regelblatt</b><button class="rd-close" onclick="closeRules()" aria-label="Schließen">✕</button></div><div class="rd-tabs" id="rdTabs"></div><div class="rd-body" id="rdBody"></div>';
    document.body.appendChild(d);
    const tip = document.createElement("div"); tip.id = "glTip"; tip.hidden = true; document.body.appendChild(tip);
  }
  window.openRules = function(t){ ensure(); if(t) tab = t; document.getElementById("rulesDrawer").hidden = false; document.body.classList.add("rules-open"); render(); };
  window.closeRules = function(){ const d = document.getElementById("rulesDrawer"); if(d) d.hidden = true; document.body.classList.remove("rules-open"); };
  window.toggleRules = function(){ const d = document.getElementById("rulesDrawer"); (d && !d.hidden) ? closeRules() : openRules(); };
  window.rulesTab = function(t){ tab = t; render(); };

  function render(){
    document.getElementById("rdTabs").innerHTML = TABS.map(t => `<button class="${t[0]===tab?"on":""}" onclick="rulesTab('${t[0]}')">${t[1]}</button>`).join("");
    const b = document.getElementById("rdBody"); let h = "";
    if(tab==="wuerfel") h = diceHtml();
    else if(tab==="aktionen") h = R().aktionen.map(a => `<div class="rd-card"><b>${esc(a.n)}</b> <small>S. ${a.s}</small><div class="rd-when">${esc(a.wann)}</div><p>${esc(a.erg)}</p></div>`).join("");
    else if(tab==="glossar") h = R().glossar.map(g => `<div class="rd-card"><b>${esc(g.t)}</b> <small>S. ${g.s}</small><p>${esc(g.d)}</p></div>`).join("");
    else { const a = R().abschnitte.find(x => x.id===tab); h = `<h4 class="rd-h">${esc(a.t)} <small>${a.s}</small></h4><ul class="rd-list">${a.items.map(i => `<li>${esc(i)}</li>`).join("")}</ul>`;
      if(tab==="zust") h += `<table class="rd-tab"><tr><th>Stufe</th><th>Bedeutung</th></tr>${R().stufen.map(s => `<tr><td>${s[0]}</td><td>${esc(s[1])}</td></tr>`).join("")}</table>`; }
    b.innerHTML = h;
  }

  /* ---- Würfler ---- */
  function hmVal(k){ if(k<=0) return k; const m = R().hardmode; return k>=7 ? 4 : m[k][1]; }
  function cat(total, d){ return total<=6 ? ["Fehlschlag","miss"] : total<=9 ? ["Erfolg mit Preis (7–9)","mid"] : total<12 ? ["Voller Erfolg (10+)","hit"] : ["Mega! (12+)","mega"]; }
  function diceHtml(){
    const eff = hard ? hmVal(kraft) : kraft;
    const last = hist[0];
    return `<div class="dice"><div class="dice-row"><span>Kraft</span><button onclick="diceK(-1)">−</button><b id="diceK">${kraft>0?"+":""}${kraft}</b><button onclick="diceK(1)">+</button></div>
      <label class="dice-hm"><input type="checkbox" ${hard?"checked":""} onchange="diceHard(this.checked)"> Hard Mode${hard?` (zählt als ${eff>0?"+":""}${eff})`:""}</label>
      <button class="dice-go" onclick="diceRoll()">2W6 würfeln</button>
      ${last?`<div class="dice-res ${last.c[1]}"><div class="dd"><i>${last.a}</i><i>${last.b}</i></div><div><b>${last.total}</b> <small>${last.a}+${last.b} ${last.e>=0?"+":"−"} ${Math.abs(last.e)}</small><div>${last.c[0]}</div></div></div>`:""}
      ${hist.length>1?`<div class="dice-hist">Zuletzt: ${hist.slice(1,6).map(x=>`<span class="${x.c[1]}">${x.total}</span>`).join(" ")}</div>`:""}
      <p class="rd-note">Hinweis: Laut Buch würfelt die SL nie. Der Würfler ist für Spieler:innen-Würfe am Tisch oder Tests gedacht. Hard-Mode-Tabelle: Kraft 0→0, 1→1, 2→2, 3→2, 4→3, 5→3, 6→3, 7+→4; negativ bleibt.</p></div>`;
  }
  window.diceK = d => { kraft = Math.max(-6, Math.min(12, kraft + d)); render(); };
  window.diceHard = v => { hard = !!v; render(); };
  window.diceRoll = () => { const a = 1+Math.floor(Math.random()*6), b = 1+Math.floor(Math.random()*6), e = hard ? hmVal(kraft) : kraft, total = a+b+e; hist.unshift({a,b,e,total,c:cat(total)}); hist = hist.slice(0,8); render(); };

  /* ---- Tooltips ---- */
  const STUFE = ["","gering","minderschwer","erheblich","dramatisch","RAUS (handlungsunfähig)","SL (tot/verwandelt)"];
  const AUTO = ["momentum","spektrum","limit","mega","slaktion","fpunkte","marker","ausbrennen","hardmode","zustand"];
  function showTip(el, html){
    ensure(); const tip = document.getElementById("glTip"); tip.innerHTML = html; tip.hidden = false;
    const r = el.getBoundingClientRect(), w = Math.min(320, window.innerWidth-16);
    tip.style.width = w+"px"; tip.style.left = Math.max(8, Math.min(window.innerWidth-w-8, r.left))+"px";
    const th = tip.offsetHeight; tip.style.top = (r.bottom + th + 12 > window.innerHeight ? Math.max(8, r.top - th - 8) : r.bottom + 6)+"px";
  }
  function hideTip(){ const t = document.getElementById("glTip"); if(t) t.hidden = true; }
  document.addEventListener("click", e => {
    const g = e.target.closest && e.target.closest(".gl"); const t = e.target.closest && e.target.closest(".blk t, .th-spec t, .th-moves t");
    if(g){ const x = R().glossar.find(y => y.k===g.dataset.g); if(x){ showTip(g, `<b>${esc(x.t)}</b><p>${esc(x.d)}</p><small>Handbuch S. ${x.s}</small>`); return; } }
    if(t){ const m = t.textContent.trim().match(/^(.*?)\s*(\d)$/); if(m){ const st = +m[2]; showTip(t, `<b>Zustand: ${esc(m[1])}</b><p>Stufe ${st} – ${STUFE[st]||""}. Wirkt auf die Kraft: Stufe ${st} als Bonus oder Malus (nur der höchste hilfreiche und der höchste hinderliche Zustand zählen).</p><small>Handbuch S. 218</small>`); return; } }
    if(!(e.target.closest && e.target.closest("#glTip"))) hideTip();
  });
  window.addEventListener("scroll", hideTip, {passive:true});
  window.glossarize = function(root){
    const terms = R().glossar.filter(g => AUTO.includes(g.k)), done = {};
    root.querySelectorAll(".blk-p").forEach(p => {
      const w = document.createTreeWalker(p, NodeFilter.SHOW_TEXT, null), nodes = []; let n; while(n = w.nextNode()) nodes.push(n);
      nodes.forEach(node => { if(node.parentNode.closest("t,button,a")) return;
        for(const g of terms){ if(done[g.k]) continue; const m = node.nodeValue.match(new RegExp("(^|[^\\wÄÖÜäöüß])("+g.re+")(?![\\wÄÖÜäöüß])")); if(!m) continue;
          const i = m.index + m[1].length, txt = m[2]; const span = document.createElement("span"); span.className = "gl"; span.dataset.g = g.k; span.textContent = txt;
          const after = node.splitText(i); after.nodeValue = after.nodeValue.slice(txt.length); node.parentNode.insertBefore(span, after); done[g.k] = 1; return; }
      });
    });
  };
  document.addEventListener("keydown", e => { if(e.key==="Escape") { hideTip(); } });
})();
