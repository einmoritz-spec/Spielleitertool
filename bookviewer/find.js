/* Textsuche für die PDF-Ansichten (Taste „f“): durchsucht alle Seiten, springt zu Treffern und markiert sie. Gemeinsam für Buchleser und Otherscape. */
var BVFind = (function(){
  var A = null, panel, inp, cnt, Q = "", hits = [], cur = -1, SDOC = null, token = 0, CACHE = new WeakMap();
  var CSS = ".bvf{position:fixed;left:50%;bottom:14px;transform:translateX(-50%);z-index:10001;display:flex;gap:6px;align-items:center;background:#161a26;border:1px solid #2a3046;border-radius:12px;padding:7px 8px;box-shadow:0 6px 24px rgba(0,0,0,.6);color:#e6e9f2;font:14px system-ui,sans-serif;max-width:calc(100vw - 16px)}.bvf[hidden]{display:none}.bvf input{width:min(260px,46vw);min-width:0;background:#0d1019;border:1px solid #2a3046;border-radius:8px;color:#e6e9f2;padding:7px 9px;font:inherit}.bvf button{flex:none;background:#1f2536;border:1px solid #2a3046;border-radius:8px;padding:6px 10px;color:#e6e9f2;cursor:pointer;font:inherit}.bvf span{white-space:nowrap;color:#9aa4bf;font-size:13px;min-width:54px;text-align:center}";
  var MC = document.createElement("canvas").getContext("2d"); MC.font = "100px sans-serif";
  function mw(s){ return MC.measureText(s).width; }
  function fold(s){ var o = ""; for(var i = 0; i < s.length; i++){ var d = s[i].normalize("NFD"); o += d[0].toLowerCase(); } return o; }
  async function ptext(dc, n){
    var m = CACHE.get(dc); if(!m){ m = {}; CACHE.set(dc, m); } if(m[n]) return m[n];
    var pg = await dc.getPage(n), tc = await pg.getTextContent(), s = "", map = [];
    tc.items.forEach(function(it){ if(typeof it.str !== "string") return; var a = s.length; s += it.str; map.push({a:a, b:s.length, it:it}); s += it.hasEOL ? "\n" : " "; });
    return m[n] = {s:fold(s), map:map};
  }
  function build(){
    if(panel) return;
    var st = document.createElement("style"); st.textContent = CSS; document.head.appendChild(st);
    panel = document.createElement("div"); panel.className = "bvf"; panel.hidden = true;
    panel.innerHTML = '<input type="search" placeholder="Suchen" aria-label="Im Buch suchen" autocomplete="off"><span></span><button type="button" data-d="-1" aria-label="Voriger Treffer">▲</button><button type="button" data-d="1" aria-label="Nächster Treffer">▼</button><button type="button" data-x aria-label="Suche schließen">✕</button>';
    document.body.appendChild(panel); inp = panel.querySelector("input"); cnt = panel.querySelector("span");
    panel.addEventListener("click", function(e){ var b = e.target.closest("button"); if(!b) return; if(b.hasAttribute("data-x")) close(); else step(+b.dataset.d); });
    inp.addEventListener("keydown", function(e){
      e.stopPropagation();
      if(e.key === "Escape"){ close(); }
      else if(e.key === "Enter"){ e.preventDefault(); if(fold(inp.value.trim()) !== Q || !hits.length && Q) run(); else step(e.shiftKey ? -1 : 1); }
    });
  }
  function init(a){ A = a; build(); }
  function isOpen(){ return !!panel && !panel.hidden; }
  function open(){ build(); panel.hidden = false; inp.focus(); inp.select(); }
  function close(){ if(!panel) return; panel.hidden = true; Q = ""; hits = []; cur = -1; cnt.textContent = ""; if(A) A.redraw(); }
  async function run(){
    var q = fold(inp.value.trim()); if(!q){ Q = ""; hits = []; cur = -1; cnt.textContent = ""; A.redraw(); return; }
    var my = ++token, dc = await A.doc(); if(!dc) return; Q = q; SDOC = dc; hits = []; cur = -1;
    var from = A.cur();
    for(var n = 1; n <= dc.numPages; n++){
      if(my !== token) return; var t = await ptext(dc, n), i = 0;
      while((i = t.s.indexOf(q, i)) >= 0){ hits.push({p:n, s:i, e:i + q.length}); i += q.length; }
      if(n % 5 === 0 || n === dc.numPages) cnt.textContent = "… " + Math.round(n / dc.numPages * 100) + "%";
    }
    if(!hits.length){ cnt.textContent = "0 Treffer"; A.redraw(); return; }
    cur = hits.findIndex(function(h){ return h.p >= from; }); if(cur < 0) cur = 0; jump();
  }
  function jump(){ cnt.textContent = (cur + 1) + " / " + hits.length; A.go(hits[cur].p); }
  function step(d){ if(!hits.length){ if(inp.value.trim()) run(); return; } cur = (cur + d + hits.length) % hits.length; jump(); }
  async function hilite(cvs, nums, dc){
    if(!Q || dc !== SDOC || !hits.length) return;
    for(var k = 0; k < cvs.length; k++){
      var n = nums[k], ph = hits.filter(function(h){ return h.p === n; }); if(!ph.length) continue;
      var t = await ptext(dc, n), vp = cvs[k].vp, ctx = cvs[k].cv.getContext("2d"); ctx.save(); ctx.globalCompositeOperation = "multiply";
      ph.forEach(function(h){
        ctx.fillStyle = hits[cur] === h ? "rgba(255,110,0,.6)" : "rgba(255,215,0,.55)";
        t.map.forEach(function(m){
          if(m.b <= h.s || m.a >= h.e || m.b === m.a) return;
          var it = m.it, i0 = Math.max(h.s, m.a) - m.a, i1 = Math.min(h.e, m.b) - m.a, full = mw(it.str) || 1, f0 = mw(it.str.slice(0, i0)) / full, f1 = mw(it.str.slice(0, i1)) / full, tr = it.transform, ht = it.height || Math.abs(tr[3]) || 10;
          var x0 = tr[4] + it.width * f0, x1 = tr[4] + it.width * f1, y0 = tr[5] - ht * 0.2, y1 = tr[5] + ht * 0.85;
          var p1 = vp.convertToViewportPoint(x0, y0), p2 = vp.convertToViewportPoint(x1, y1);
          ctx.fillRect(Math.min(p1[0], p2[0]), Math.min(p1[1], p2[1]), Math.abs(p2[0] - p1[0]), Math.abs(p2[1] - p1[1]));
        });
      });
      ctx.restore();
    }
  }
  return { init:init, open:open, close:close, isOpen:isOpen, hilite:hilite };
})();
