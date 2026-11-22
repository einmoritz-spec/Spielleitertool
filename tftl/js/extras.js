/* Würfel-Seite, Notizen-Stift und i-Knopf (Tales from the Loop und Things from the Flood; Speicher-Präfix aus TCTX.ls) */
(function(){
  function esc(s){ return String(s == null ? "" : s).replace(/[&<>"]/g, function(c){ return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]; }); }
  function LS(){ return (window.TCTX && TCTX.ls) || "tftl_"; }
  function isFlood(){ return window.TCTX && TCTX.area === "flood"; }
  var X = window.TX = {};

  /* ---------- Notizen (Stift) ---------- */
  var PEN = '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20l1-4L16.5 4.5a2 2 0 013 3L8 19z"/><path d="M14.5 6.5l3 3"/></svg>';
  function nAll(){ try{ return JSON.parse(localStorage.getItem(LS() + "notes_v1") || "{}") || {}; }catch(e){ return {}; } }
  X.pen = function(key){ var has = !!String(nAll()[key] || "").trim(); return '<button type="button" class="tpen' + (has ? ' has' : '') + '" data-nk="' + esc(key) + '" aria-label="Notizen" title="Notizen">' + PEN + '</button>'; };
  function notePop(btn){
    var old = document.querySelector(".tnote"), same = old && old._b === btn; if(old) old.remove(); if(same) return;
    var key = btn.getAttribute("data-nk"), p = document.createElement("div"); p.className = "tnote"; p._b = btn;
    p.innerHTML = '<button type="button" class="x" aria-label="Schließen">×</button><textarea placeholder="Notizen …"></textarea>';
    var ta = p.querySelector("textarea"); ta.value = nAll()[key] || "";
    ta.oninput = function(){ var o = nAll(); o[key] = ta.value; try{ localStorage.setItem(LS() + "notes_v1", JSON.stringify(o)); }catch(e){} btn.classList.toggle("has", !!ta.value.trim()); };
    p.querySelector(".x").onclick = function(){ p.remove(); };
    var r = btn.getBoundingClientRect(), w = Math.min(380, innerWidth - 16);
    p.style.width = w + "px"; p.style.top = Math.round(r.bottom + 6) + "px"; p.style.left = Math.max(8, Math.min(innerWidth - w - 8, r.right - w)) + "px";
    document.body.appendChild(p); ta.focus();
  }
  document.addEventListener("click", function(e){
    var b = e.target.closest && e.target.closest(".tpen"); if(b){ notePop(b); return; }
    var n = document.querySelector(".tnote"); if(n && !n.contains(e.target)) n.remove();
  });
  window.addEventListener("hashchange", function(){ var n = document.querySelector(".tnote"); if(n) n.remove(); });

  /* ---------- i-Knopf ---------- */
  function infoSec(){
    var C = window.TCTX || {}, D = C.NACHDATA && C.NACHDATA.welt;
    var id = isFlood() ? "flut" : "loop-spiel";
    return D && D.abschnitte && D.abschnitte.filter(function(a){ return a.id === id; })[0] || null;
  }
  X.info = function(){
    var top = document.getElementById("top"), old = document.getElementById("tInfo"); if(old) old.remove();
    var C = window.TCTX || {}; if(!top || (C.area !== "tftl" && C.area !== "flood")) return;
    var sec = infoSec(); if(!sec) return;
    var b = document.createElement("button"); b.id = "tInfo"; b.className = "tb-info"; b.setAttribute("aria-label", sec.titel); b.title = sec.titel; b.textContent = "i";
    b.onclick = function(){
      var m = document.createElement("div"); m.className = "tinfo";
      var logo = isFlood() ? "assets/logos/things-from-the-flood-stack.webp" : "assets/logos/tales-from-the-loop.webp";
      var body = (sec.bloecke || []).filter(function(x){ return x[0] === "p" || x[0] === "h"; }).slice(0, 4).map(function(x){ return x[0] === "h" ? '<h3>' + x[1] + '</h3>' : '<p>' + x[1] + '</p>'; }).join("");
      m.innerHTML = '<div class="tinfo-b"></div><div class="tinfo-p"><img class="tinfo-l' + (isFlood() ? ' fl' : '') + '" src="../' + logo + '" alt=""><h2>' + esc(sec.titel) + '</h2>' + body + '<a class="pgl" data-b="' + C.book + '" data-s="' + sec.s + '">S. ' + sec.s + '</a></div>';
      m.onclick = function(e){ if(e.target.classList.contains("tinfo-b")) m.remove(); var a = e.target.closest(".pgl"); if(a){ m.remove(); BV.open(a.dataset.b, +a.dataset.s); } };
      document.body.appendChild(m);
    };
    top.insertBefore(b, top.querySelector(".tb-burger"));
  };

  /* ---------- Würfel ---------- */
  var W = {n: 4, dice: null, bonus: 0, pushed: false, luck: false, st: false, sh: false, sc: 0, kid: "", sk: "", it: "", scUsed: {}};
  function d6(){ return 1 + Math.floor(Math.random() * 6); }
  function succ(){ return W.dice ? W.dice.filter(function(d){ return d === 6; }).length + W.bonus : 0; }
  function reroll(){ W.dice = W.dice.map(function(d){ return d === 6 ? 6 : d6(); }); }
  function num(v){ v = parseInt(v, 10); return isNaN(v) ? 0 : v; }
  /* Teen-/Kid-Bögen aus dem Speicher der Bögen-Seite (kids.js) */
  function kidsKey(){ return (window.TCTX && TCTX.kidsKey) || "tftl_kids_v1"; }
  function kidsData(){ try{ var d = JSON.parse(localStorage.getItem(kidsKey()) || "null"); return d && d.kids ? d : null; }catch(e){ return null; } }
  function kidsSave(d){ try{ localStorage.setItem(kidsKey(), JSON.stringify(d)); }catch(e){} }
  function KK(){ return (window.TCTX && TCTX.KIDS) || window.KIDS || null; }
  function kidName(k){ return k.name || (isFlood() ? "Neuer Teen" : "Neues Kid"); }
  function itemsOf(k){
    var o = [["", "Kein Gegenstand", 0]];
    if(String(k.item || "").trim()) o.push(["i", k.item + " (+2)", 2]);
    (k.items || []).forEach(function(it, i){ var b = num(it[1]); if(String(it[0] || "").trim() && b > 0) o.push(["i" + i, it[0] + " (+" + b + ")", b]); });
    return o;
  }
  /* Pool = Attribut + Fertigkeit + Gegenstandsbonus − leichte Zustände (mind. 1); Gebrochen = automatischer Misserfolg */
  function calc(k){
    var K = KK(); if(!K || !k) return null;
    var sk = K.skills.filter(function(s){ return s[0] === W.sk; })[0] || K.skills[0];
    var at = K.attr.filter(function(a){ return a[1] === sk[2]; })[0];
    var it = itemsOf(k).filter(function(o){ return o[0] === W.it; })[0] || ["", "", 0];
    var z = k.z || {}, lv = ["ver", "ang", "ers", "verl"].filter(function(q){ return z[q]; }).length;
    return {sk: sk, broken: !!z.geb, n: Math.max(1, num((k.a || {})[at && at[0]]) + num((k.s || {})[sk[0]]) + it[2] - lv)};
  }
  function curKid(d){ return d && W.kid ? d.kids.filter(function(k){ return k.id === W.kid; })[0] || null : null; }
  function narben(k){ return (k.narben || []).map(function(n, i){ return {t: n.t, acc: n.acc, i: i}; }).filter(function(n){ return String(n.t || "").trim(); }); }
  function applyPool(k){ var c = calc(k); if(c && !c.broken) W.n = Math.min(20, c.n); }
  window.renderWuerfel = function(app){
    var fl = isFlood(); app.className = "page";
    function draw(){
      var d = kidsData(), k = curKid(d), K = KK(), c = k ? calc(k) : null, brk = !!(c && c.broken);
      if(W.kid && !k) W.kid = "";
      var h = '<h1>Würfel</h1>';
      if(d && d.kids.length && K){
        var opt = function(arr, cur){ return arr.map(function(o){ return '<option value="' + esc(o[0]) + '"' + (o[0] === cur ? ' selected' : '') + '>' + esc(o[1]) + '</option>'; }).join(""); };
        h += '<div class="ps wz-p"><select data-wp="kid">' + opt([["", "Von Hand"]].concat(d.kids.map(function(x){ return [x.id, kidName(x)]; })), W.kid) + '</select>' +
          (k ? '<select data-wp="sk">' + opt(K.skills.map(function(s){ return [s[0], s[1] + ' (' + s[2] + ')']; }), c.sk[0]) + '</select>' +
          '<select data-wp="it">' + opt(itemsOf(k).map(function(o){ return [o[0], o[1]]; }), W.it) + '</select>' : '') + '</div>';
      }
      h += '<div class="wz"><div class="wz-n"><button class="chip" data-w="-">−</button><b>' + W.n + '</b><span>W6</span><button class="chip" data-w="+">+</button></div>' +
        '<button class="chip f" data-w="roll"' + (brk ? ' disabled' : '') + '>Würfeln</button>' + (brk ? '<span class="chip">Gebrochen = Misserfolg</span>' : '') + '</div>';
      if(W.dice){
        var s = succ();
        h += '<div class="dr wz-d">' + W.dice.map(function(d){ return '<i class="d' + (d === 6 ? ' s6' : '') + '">' + d + '</i>'; }).join("") + Array(W.bonus + 1).join('<i class="d s6 x">6</i>') + '</div>' +
          '<div class="rs ' + (s ? 'ok' : 'no') + '">' + (s ? s + (s === 1 ? ' Erfolg' : ' Erfolge') : 'Misserfolg') + '</div><div class="px">';
        if(!W.pushed) h += '<button class="chip rx" data-w="push">Forcieren</button>';
        if(fl){
          if(k){
            if(String(k.scham || "").trim() && !k.schamUsed) h += '<button class="chip rx" data-w="sh">Scham</button>';
            narben(k).forEach(function(n){ if(!n.acc) h += '<button class="chip rx" data-w="n' + n.i + '">Narbe: ' + esc(n.t.length > 16 ? n.t.slice(0, 15) + '…' : n.t) + '</button>'; });
          } else {
            if(!W.sh) h += '<button class="chip rx" data-w="sh">Scham</button>';
            h += '<button class="chip rx" data-w="sc">Narbe' + (W.sc ? ' (' + W.sc + ' eingesetzt)' : '') + '</button>';
          }
        } else { if(!W.luck) h += '<button class="chip rx" data-w="luck">Glück</button>'; if(!W.st) h += '<button class="chip rx" data-w="st">Stolz</button>'; }
        h += '</div>';
      }
      if(fl && k){
        var ns = narben(k);
        h += '<div class="wz-sc"><small>Narben</small>' + (ns.length ? ns.map(function(n){ return '<div class="nr' + (n.acc ? ' used' : '') + '"><span>' + esc(n.t) + '</span><button class="pb nb' + (n.acc ? ' used' : '') + '" data-nb="' + n.i + '">' + (n.acc ? 'Akzeptiert' : 'Frei') + '</button></div>'; }).join("") : '<div class="nr leer">Keine Narben</div>') + '</div>';
      }
      app.innerHTML = h;
    }
    app.onchange = function(e){
      var t = e.target, a = t.dataset && t.dataset.wp; if(!a) return;
      if(a === "kid"){ W.kid = t.value; W.sk = ""; W.it = ""; var k = curKid(kidsData()); if(k) applyPool(k); }
      else { W[a] = t.value; var k2 = curKid(kidsData()); if(k2) applyPool(k2); }
      draw();
    };
    app.onclick = function(e){
      var nb = e.target.closest("[data-nb]");
      if(nb){ var d = kidsData(), k = curKid(d), n = k && (k.narben || [])[+nb.dataset.nb]; if(n){ n.acc = !n.acc; kidsSave(d); draw(); } return; }
      var b = e.target.closest("[data-w]"); if(!b || b.disabled) return; var a = b.dataset.w;
      if(a === "-") W.n = Math.max(1, W.n - 1); else if(a === "+") W.n = Math.min(20, W.n + 1);
      else if(a === "roll"){ W.dice = []; for(var i = 0; i < W.n; i++) W.dice.push(d6()); W.bonus = 0; W.pushed = W.luck = W.st = W.sh = false; W.sc = 0; }
      else if(a === "push"){ W.pushed = true; reroll(); }
      else if(a === "luck"){ W.luck = true; reroll(); }
      else if(a === "st"){ W.st = true; W.bonus++; }
      else if(a === "sc"){ W.sc++; W.bonus++; }
      else if(a === "sh"){
        var d2 = kidsData(), k2 = curKid(d2);
        if(k2){ k2.schamUsed = true; kidsSave(d2); } else W.sh = true;
        W.bonus++;
      }
      else if(a.charAt(0) === "n"){
        var d3 = kidsData(), k3 = curKid(d3), n3 = k3 && (k3.narben || [])[+a.slice(1)];
        if(n3 && !n3.acc){ n3.acc = true; kidsSave(d3); W.bonus++; }
      }
      draw();
    };
    draw();
  };
})();
