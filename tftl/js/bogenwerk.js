/* Bogen-Werkzeuge für Kids (Tales from the Loop) und Teens (Things from the Flood):
   Symbolleiste mit Tooltips (Zufall, Vorlagen, Leeren, Teilen, Datei sichern/laden, PDF),
   Auswahllisten mit Info (Typ, Alter) und Buchvorschläge für Problem, Antrieb, Stolz, Anker, Gegenstände, Beziehungen.
   Setzt auf kids.js auf (umhüllt window.renderBogen); der Bogen selbst bleibt unverändert. */
(function(){
  var orig = window.renderBogen; if(!orig) return;
  var IC = {
    zufall: '<rect x="3.5" y="3.5" width="17" height="17" rx="3"/><circle cx="8.5" cy="8.5" r=".9" fill="currentColor"/><circle cx="15.5" cy="8.5" r=".9" fill="currentColor"/><circle cx="12" cy="12" r=".9" fill="currentColor"/><circle cx="8.5" cy="15.5" r=".9" fill="currentColor"/><circle cx="15.5" cy="15.5" r=".9" fill="currentColor"/>',
    vorlage: '<circle cx="12" cy="8" r="3.5"/><path d="M5 20c0-3.9 3.1-6 7-6s7 2.1 7 6"/>',
    leeren: '<path d="M20 12a8 8 0 1 1-2.6-5.9"/><path d="M20 4v5h-5"/>',
    teilen: '<circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="6" r="2.5"/><circle cx="18" cy="18" r="2.5"/><path d="M8.2 10.8l7.6-3.6M8.2 13.2l7.6 3.6"/>',
    sichern: '<path d="M12 4v11M7 11l5 5 5-5M5 20h14"/>',
    laden: '<path d="M12 16V5M7 9l5-5 5 5M5 20h14"/>',
    pdf: '<path d="M5 4h11l3 3v13H5z"/><path d="M8 4v5h7V4M8 20v-6h8v6"/>',
    druck: '<path d="M7 9V4h10v5M6 17H4v-7h16v7h-2"/><rect x="7" y="14" width="10" height="6"/>',
    weg: '<path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13"/>'
  };
  function sym(p){ return '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' + p + '</svg>'; }
  function esc(s){ return String(s == null ? "" : s).replace(/[&<>"]/g, function(c){ return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]; }); }
  function ctx(){ return window.TCTX || {}; }
  function key(){ return ctx().kidsKey || "tftl_kids_v1"; }
  function rd(){ try{ var d = JSON.parse(localStorage.getItem(key()) || "null"); if(d && d.kids) return d; }catch(e){} return {kids: []}; }
  function wr(d){ try{ localStorage.setItem(key(), JSON.stringify(d)); }catch(e){ toast("Speicher voll."); } }
  function kidOf(d, id){ return d.kids.filter(function(k){ return k.id === id; })[0]; }
  function toast(t){ var d = document.createElement("div"); d.className = "bw-toast"; d.textContent = t; document.body.appendChild(d); setTimeout(function(){ d.remove(); }, 2600); }
  function boulder(){ try{ return localStorage.getItem((ctx().ls || "tftl_") + "loop") === "boulder"; }catch(e){ return false; } }
  function nm(t){ return String(t == null ? "" : t).replace(/\{\{([^|}]*)\|([^}]*)\}\}/g, function(m, a, c){ return boulder() ? c : a; }); }
  function wf(n){ return Math.floor(Math.random() * n); }
  function typ(k){ var id = String(k.typ || "").trim().toLowerCase(); return (ctx().TYPEN || []).filter(function(t){ return t.id === id || String(t.name).toLowerCase() === id; })[0]; }
  function ktyp(k){ var id = String(k.typ || "").trim().toLowerCase(); return (ctx().KIDS.typen || []).filter(function(t){ return t[0] === id || t[1].toLowerCase() === id; })[0]; }

  /* ---------- Kid erzeugen (Zufall / Vorlage) ---------- */
  function neuKid(){ return window.KIDSHELP && window.KIDSHELP.neu ? window.KIDSHELP.neu() : {id: "k" + Date.now().toString(36), a: {}, z: {}, s: {}, rel: {}, items: [["",""],["",""],["",""],["",""],["",""]]}; }
  function namen(t, i, rnd){
    var L = (t.namen || []).map(nm), list = [];
    var m = L.filter(function(x){ return /^Mädchen\w*:/.test(x); })[0], j = L.filter(function(x){ return /^Jungen\w*:/.test(x); })[0];
    var src = (rnd ? (wf(2) ? m : j) : (i % 2 ? j : m)) || m || j || "";
    list = src.replace(/^[^:]*:\s*/, "").split(/,\s*/).filter(Boolean);
    return list.length ? list[rnd ? wf(list.length) : 0] : "";
  }
  /* Punkte verteilen: Attribute = Alter (je 1–5), Fertigkeiten = 10 (Schlüssel bis 3, sonst bis 1) */
  function verteile(k, t, rnd){
    var K = ctx().KIDS, age = parseInt(k.alter, 10) || 12, a = {}, s = {}, w = {};
    K.attr.forEach(function(x){ a[x[0]] = 1; w[x[0]] = 0; });
    var keyId = (t.key || []).map(function(n){ var f = K.skills.filter(function(x){ return x[1] === n; })[0]; return f ? f[0] : null; }).filter(Boolean);
    keyId.forEach(function(id){ var at = K.skills.filter(function(x){ return x[0] === id; })[0][2], ak = K.attr.filter(function(x){ return x[1] === at; })[0]; if(ak) w[ak[0]]++; });
    var rest = ((K.flags || {}).scham ? 14 : age) - K.attr.length, guard = 400;
    while(rest > 0 && guard--){
      var opts = K.attr.map(function(x){ return x[0]; }).filter(function(x){ return a[x] < 5; }); if(!opts.length) break;
      var pick;
      if(rnd) pick = opts[wf(opts.length)];
      else { opts.sort(function(x, y){ return (w[y] - a[y] * .5) - (w[x] - a[x] * .5); }); pick = opts[0]; }
      a[pick]++; rest--;
    }
    K.skills.forEach(function(x){ s[x[0]] = 0; });
    var pts = 10; guard = 400;
    if(!rnd){ var pl = [3, 3, 2]; keyId.forEach(function(id, i){ var v = Math.min(pl[i] || 2, pts); s[id] = v; pts -= v; }); }
    while(pts > 0 && guard--){
      var cand = K.skills.map(function(x){ return x[0]; }).filter(function(id){ return s[id] < (keyId.indexOf(id) >= 0 ? 3 : 1); }); if(!cand.length) break;
      var c = rnd ? cand[wf(cand.length)] : cand[0]; s[c]++; pts--;
    }
    k.a = a; k.s = s;
  }
  function fuelle(k, t, i, rnd){
    var K = ctx().KIDS, kt = (K.typen || []).filter(function(x){ return x[0] === t.id; })[0];
    k.typ = kt ? kt[1] : t.name;
    var pk = function(L){ return L && L.length ? nm(L[rnd ? wf(L.length) : 0]) : ""; };
    k.name = namen(t, i, rnd);
    var sc = (K.flags || {}).scham, A = K.alter || [10, 15];
    k.alter = String(rnd ? A[0] + wf(A[1] - A[0] + 1) : (sc ? A[0] + 1 : 12));
    verteile(k, t, rnd);
    if(sc) k.scham = pk(t.scham); else k.pride = pk(t.pride);
    k.problem = pk(t.problem); k.drive = pk(t.drive); k.anker = pk(t.anker); k.item = pk(t.items);
    k.rel = k.rel || {};
    if(t.relK && t.relK.length){ k.rel.r0 = pk(t.relK); k.rel.r1 = rnd ? pk(t.relK) : nm(t.relK[1] || t.relK[0]); }
    if(t.relN && t.relN.length) k.rel.r4 = pk(t.relN);
    return k;
  }
  function ersetze(app, id, fn){
    var d = rd(), k = kidOf(d, id); if(!k) return;
    var n = neuKid(); n.id = id; fn(n); var i = d.kids.indexOf(k); d.kids[i] = n; wr(d); window.renderBogen(app, id);
  }
  function filled(k){ return !!(k.name || k.typ || k.problem || k.drive || k.pride || k.item || k.desc || k.notes); }

  /* ---------- Teilen, Datei ---------- */
  function b64u(s){ var u = new TextEncoder().encode(s), b = ""; u.forEach(function(c){ b += String.fromCharCode(c); }); return btoa(b).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, ""); }
  function ub64(t){ t = t.replace(/-/g, "+").replace(/_/g, "/"); while(t.length % 4) t += "="; var b = atob(t), u = new Uint8Array(b.length); for(var i = 0; i < b.length; i++) u[i] = b.charCodeAt(i); return new TextDecoder().decode(u); }
  function clean(k){ var o = JSON.parse(JSON.stringify(k)); delete o.id; return o; }
  function bookName(){ return ctx().area === "flood" ? "Things from the Flood" : "Tales from the Loop"; }
  function teilen(k){
    var url = location.href.split("#")[0] + "#" + (ctx().p || "") + "bogen/teilen~" + b64u(JSON.stringify(clean(k)));
    if(navigator.share){ navigator.share({title: (k.name || "Charakter") + " – " + bookName(), url: url}).catch(function(){}); return; }
    (navigator.clipboard ? navigator.clipboard.writeText(url) : Promise.reject()).then(function(){ toast("Link kopiert"); }, function(){ prompt("Link zum Teilen:", url); });
  }
  function sichern(k){
    var b = new Blob([JSON.stringify(clean(k), null, 1)], {type: "application/json"}), a = document.createElement("a");
    a.href = URL.createObjectURL(b); a.download = bookName() + " – " + ((k.name || "").trim() || "Charakter") + ".json"; document.body.appendChild(a); a.click(); a.remove();
  }
  function neuesKid(o){
    var d = rd(), n = Object.assign(neuKid(), o); n.id = "k" + Date.now().toString(36) + wf(99);
    var dup = d.kids.filter(function(x){ return JSON.stringify(clean(x)) === JSON.stringify(clean(n)); })[0];
    if(dup) return dup.id;
    d.kids.push(n); wr(d); return n.id;
  }
  function laden(file){
    if(!file) return;
    var r = new FileReader();
    r.onload = function(){ try{ var o = JSON.parse(r.result); if(!o || typeof o !== "object" || !o.a) throw 0; location.hash = (ctx().p || "") + "bogen/" + neuesKid(o); }catch(e){ toast("Das ist keine Bogen-Datei aus diesem Tool."); } };
    r.readAsText(file);
  }

  /* ---------- Popups ---------- */
  function popWeg(){ document.querySelectorAll(".bw-pop,.bw-info").forEach(function(e){ e.remove(); }); }
  function popUp(anchor, html, w){
    popWeg();
    var p = document.createElement("div"); p.className = "bw-pop"; p.innerHTML = html; document.body.appendChild(p);
    var r = anchor.getBoundingClientRect(); p.style.left = Math.max(8, Math.min(r.left, innerWidth - (w || 260) - 8)) + "px"; p.style.top = (r.bottom + 4) + "px"; p.style.width = (w || 260) + "px";
    var h = p.getBoundingClientRect().height; if(r.bottom + 4 + h > innerHeight){ p.style.top = Math.max(8, innerHeight - h - 8) + "px"; }
    return p;
  }
  function infoUp(p, titel, html){
    document.querySelectorAll(".bw-info").forEach(function(e){ e.remove(); });
    var i = document.createElement("div"); i.className = "bw-info"; i.innerHTML = '<h4>' + esc(titel) + '</h4>' + html; document.body.appendChild(i);
    var r = p.getBoundingClientRect(), w = Math.min(340, innerWidth - r.right - 12);
    if(w < 220){ i.style.left = Math.max(8, r.left - 340) + "px"; i.style.width = "332px"; } else { i.style.left = r.right + "px"; i.style.width = w + "px"; }
    i.style.top = r.top + "px"; i.style.maxHeight = Math.min(innerHeight - r.top - 8, 440) + "px";
  }
  function typInfo(t){
    var kt = t.key && t.key.length ? '<p><b>Schlüsselfertigkeiten:</b> ' + t.key.map(esc).join(", ") + '</p>' : "";
    return '<p>' + esc(nm(t.text || "")) + '</p>' + kt + (t.s ? '<p class="s">S. ' + t.s + '</p>' : '');
  }
  function typWahl(app, id, inp){
    var T = ctx().TYPEN || [], cur = inp.value.toLowerCase();
    var p = popUp(inp, T.map(function(t, i){ return '<div class="pz"><button class="pn' + (String(t.name).toLowerCase() === cur ? ' sel' : '') + '" data-i="' + i + '">' + esc(t.name) + '</button><button class="pi" data-t="' + i + '" title="Info" aria-label="Info">i</button></div>'; }).join(""), 250);
    p.onclick = function(e){
      var b = e.target.closest("button"); if(!b) return; e.stopPropagation();
      if(b.dataset.t != null){ var t = T[+b.dataset.t]; infoUp(p, t.name, typInfo(t)); return; }
      var t2 = T[+b.dataset.i], d = rd(), k = kidOf(d, id); if(!k) return;
      var kt = (ctx().KIDS.typen || []).filter(function(x){ return x[0] === t2.id; })[0]; k.typ = kt ? kt[1] : t2.name; wr(d); popWeg(); window.renderBogen(app, id);
    };
  }
  function alterWahl(app, id, inp){
    var A = ctx().KIDS.alter || [10, 15], h = "";
    for(var a = A[0]; a <= A[1]; a++) h += '<div class="pz"><button class="pn' + (String(a) === inp.value ? ' sel' : '') + '" data-a="' + a + '">' + a + '</button></div>';
    var p = popUp(inp, h, 110);
    p.onclick = function(e){ var b = e.target.closest("button"); if(!b) return; e.stopPropagation(); var d = rd(), k = kidOf(d, id); if(!k) return; k.alter = b.dataset.a; wr(d); popWeg(); window.renderBogen(app, id); };
  }
  /* Buchvorschläge je Feld */
  function vorschlaege(k, path){
    var t = typ(k); if(!t) return [];
    var f = {pride: "pride", problem: "problem", drive: "drive", anker: "anker", item: "items", scham: "scham", aufhaenger: "aufhaenger"}[path];
    if(!f && /^rel\.r[0-3]$/.test(path)) f = "relK";
    if(!f && /^rel\.r[45]$/.test(path)) f = "relN";
    if(!f && /^items\.\d+\.0$/.test(path)) f = "items";
    return ((f && t[f]) || []).map(nm);
  }
  function vorschlagWahl(app, id, btn){
    var path = btn.dataset.f, d = rd(), k = kidOf(d, id); if(!k) return;
    var L = vorschlaege(k, path); if(!L.length){ toast("Erst einen Typ wählen."); return; }
    var p = popUp(btn, L.map(function(x, i){ return '<div class="pz"><button class="pn txt" data-i="' + i + '">' + esc(x) + '</button></div>'; }).join(""), 320);
    p.onclick = function(e){
      var b = e.target.closest("button"); if(!b) return; e.stopPropagation();
      var d2 = rd(), k2 = kidOf(d2, id); if(!k2) return;
      var a = path.split("."), o = k2; for(var i = 0; i < a.length - 1; i++){ if(o[a[i]] == null) o[a[i]] = {}; o = o[a[i]]; } o[a[a.length - 1]] = L[+b.dataset.i];
      wr(d2); popWeg(); window.renderBogen(app, id);
    };
  }

  /* ---------- Bogen verbessern ---------- */
  function enhance(app, id){
    var d = rd(), k = kidOf(d, id); if(!k) return;
    var kt = app.querySelector(".kt"); if(!kt) return;
    var ib = function(ic, tip, act){ return '<button class="bwi" data-act="' + act + '" data-tip="' + tip + '" aria-label="' + tip + '">' + sym(IC[ic]) + '</button>'; };
    var pdf = kt.querySelector("#bPdf"), prn = kt.querySelector("#bPrint"), del = kt.querySelector("#bDel");
    function mach(el, ic, tip){ if(!el) return; el.className = "bwi"; el.setAttribute("data-tip", tip); el.setAttribute("aria-label", tip); el.innerHTML = sym(IC[ic]); }
    mach(pdf, "pdf", "Als ausfüllbares PDF speichern"); mach(prn, "druck", "Drucken"); mach(del, "weg", (ctx().L || {}).kid === "Teen" ? "Teen löschen" : "Kid löschen");
    kt.querySelectorAll(".chip:not(.bwi)").forEach(function(c){ c.classList.add("bw-back"); });
    var tools = document.createElement("span"); tools.className = "bw-tools noprint";
    tools.innerHTML = ib("zufall", "Zufälligen Charakter erstellen", "zufall") + ib("vorlage", "Vorgefertigten Charakter einsetzen", "vorlage") + ib("leeren", "Bogen leeren", "leeren") + ib("teilen", "Link teilen", "teilen") + ib("sichern", "Als Datei sichern", "sichern") +
      '<label class="bwi" data-tip="Datei laden" aria-label="Datei laden">' + sym(IC.laden) + '<input type="file" accept=".json,application/json" hidden></label>';
    kt.insertBefore(tools, pdf || kt.lastChild);
    kt.classList.add("bw-kt");
    tools.querySelector("input").onchange = function(){ laden(this.files[0]); this.value = ""; };
    tools.onclick = function(e){
      var b = e.target.closest("[data-act]"); if(!b) return; e.stopPropagation();
      var a = b.dataset.act, cur = kidOf(rd(), id); if(!cur) return;
      if(a === "zufall"){ if(filled(cur) && !confirm("Die Einträge dieses Bogens durch einen zufälligen Charakter ersetzen?")) return; var T = ctx().TYPEN || []; if(!T.length) return; ersetze(app, id, function(n){ fuelle(n, T[wf(T.length)], 0, true); }); toast("Zufälliger Charakter erstellt"); }
      if(a === "vorlage") vorlagen(app, id, b);
      if(a === "leeren"){ if(filled(cur) && !confirm("Alle Einträge dieses Bogens löschen?")) return; ersetze(app, id, function(){}); }
      if(a === "teilen") teilen(cur);
      if(a === "sichern") sichern(cur);
    };
    /* Typ und Alter: Auswahllisten */
    var ti = app.querySelector('input[data-p="typ"]'), ai = app.querySelector('input[data-p="alter"]');
    if(ti){ ti.removeAttribute("list"); ti.readOnly = true; ti.classList.add("bw-sel"); ti.onclick = function(e){ e.stopPropagation(); typWahl(app, id, ti); }; }
    if(ai){ ai.readOnly = true; ai.classList.add("bw-sel"); ai.onclick = function(e){ e.stopPropagation(); alterWahl(app, id, ai); }; }
    /* Buchvorschläge */
    if(typ(k)) app.querySelectorAll("input.bf[data-p]").forEach(function(inp){
      var p = inp.dataset.p; if(!vorschlaege(k, p).length) return;
      var host = inp.closest(".fd") || inp.closest(".it") || inp.parentNode; host.classList.add("bw-h");
      var b = document.createElement("button"); b.type = "button"; b.className = "bw-dd noprint"; b.dataset.f = p; b.setAttribute("data-tip", "Vorschläge aus dem Buch"); b.setAttribute("aria-label", "Vorschläge aus dem Buch"); b.textContent = "▾";
      b.onclick = function(e){ e.stopPropagation(); vorschlagWahl(app, id, b); };
      inp.after(b);
    });
  }
  function vorlagen(app, id, btn){
    var T = ctx().TYPEN || [];
    var p = popUp(btn, '<h4 class="bw-h4">Vorgefertigte Charaktere</h4>' + T.map(function(t, i){ return '<div class="pz"><button class="pn" data-i="' + i + '">' + esc(t.name) + '<em>' + esc(namen(t, i, false)) + '</em></button><button class="pi" data-t="' + i + '" title="Info" aria-label="Info">i</button></div>'; }).join(""), 270);
    p.onclick = function(e){
      var b = e.target.closest("button"); if(!b) return; e.stopPropagation();
      var t = T[+(b.dataset.t != null ? b.dataset.t : b.dataset.i)], pre = fuelle(neuKid(), t, +(b.dataset.t != null ? b.dataset.t : b.dataset.i), false);
      if(b.dataset.t != null){
        infoUp(p, t.name + " – " + pre.name, '<p><b>Alter:</b> ' + esc(pre.alter) + '</p>' + (pre.problem ? '<p><b>Problem:</b> ' + esc(pre.problem) + '</p>' : '') + (pre.drive ? '<p><b>Antrieb:</b> ' + esc(pre.drive) + '</p>' : '') + (pre.item ? '<p><b>Gegenstand:</b> ' + esc(pre.item) + '</p>' : '') + '<p class="s">Setzt Typ, Name, Alter, Attribute, Fertigkeiten und Buchvorschläge ein.</p>'); return;
      }
      var cur = kidOf(rd(), id); if(cur && filled(cur) && !confirm("Die Einträge dieses Bogens durch die Vorlage ersetzen?")){ return; }
      popWeg(); ersetze(app, id, function(n){ fuelle(n, t, +b.dataset.i, false); });
    };
  }

  window.renderBogen = function(app, id){
    var c = ctx();
    if(c.area === "es") return orig(app, id);
    if(id && String(id).indexOf("teilen~") === 0){
      try{ var o = JSON.parse(ub64(String(id).slice(7))); if(!o || !o.a) throw 0; var nid = neuesKid(o); toast("Charakter übernommen"); location.replace(location.href.split("#")[0] + "#" + (c.p || "") + "bogen/" + nid); }
      catch(e){ app.className = "page"; app.innerHTML = "<h1>Link ungültig</h1>"; }
      return;
    }
    popWeg(); orig(app, id); enhance(app, id);
  };
  window.renderBogen.ctx = true;
  document.addEventListener("click", function(e){ if(!e.target.closest(".bw-pop,.bw-info")) popWeg(); });
  document.addEventListener("keydown", function(e){ if(e.key === "Escape" && document.querySelector(".bw-pop,.bw-info")){ e.stopImmediatePropagation(); e.preventDefault(); popWeg(); } }, true);
  window.addEventListener("hashchange", popWeg);
})();
