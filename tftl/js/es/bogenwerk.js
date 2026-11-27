/* The Electric State – Bogen-Werkzeuge: Symbolleiste mit Tooltips (Zufall, Vorlagen, Leeren, Teilen, Datei sichern/laden, PDF),
   Archetyp-Auswahl mit Info, Buchvorschläge für Talente, Traum, Schwäche und Ausrüstung. Umhüllt ES.renderBogen (bogen.js). */
(function(){
  var ES = window.ES; if(!ES || !ES.renderBogen) return;
  var orig = ES.renderBogen;
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
  var ATK = {"Stärke": "st", "Geschick": "ge", "Verstand": "ve", "Empathie": "em"};
  var VORN = ["Jo", "Sam", "Robin", "Casey", "Jamie", "Morgan", "Dana", "Quinn", "Riley", "Alex", "Kim", "Lou"];
  var NACH = ["Harlan", "Okafor", "Brandt", "Salazar", "Whitcomb", "Reyes", "Novak", "Tate", "Lindqvist", "Moreau", "Kowalski", "Dunn"];
  function R(){ return ES.R; }
  function sym(p){ return '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' + p + '</svg>'; }
  function esc(s){ return R().esc(s); }
  function toast(t){ var d = document.createElement("div"); d.className = "bw-toast"; d.textContent = t; document.body.appendChild(d); setTimeout(function(){ d.remove(); }, 2600); }
  function wf(n){ return Math.floor(Math.random() * n); }
  function pick(a){ return a[wf(a.length)]; }
  function plain(h){ var d = document.createElement("div"); d.innerHTML = h || ""; return d.textContent.replace(/\s+/g, " ").trim(); }
  function tab(t){ return (t || []).map(function(x){ return x[1]; }); }
  function archs(){ return ES.ARCHETYPEN || []; }
  function filled(k){ return !!(k.name || k.arch || k.song || k.desc || k.traum || k.schw || (k.talente || []).some(Boolean) || (k.ausr || []).some(Boolean)); }
  function save(D){ R().setD(D); R().save(); }
  function ersetze(app, rest, fn){
    var id = rest[0], D = R().load(); R().setD(D); var i = D.map(function(x){ return x.id; }).indexOf(id); if(i < 0) return;
    var n = R().neu(); n.id = id; fn(n); D[i] = n; save(D); window.ES.renderBogen(app, rest);
  }

  /* ---------- Charakter erzeugen ---------- */
  function wuerfe(){ var a = []; for(var i = 0; i < 4; i++){ var d; do d = 1 + wf(6); while(d < 2); a.push(d); } return a; }
  function fuelle(k, a, rnd, pre){
    k.arch = a.name;
    if(pre){
      k.name = pre.name; k.song = pre.song || ""; k.a = {st: String(pre.a.st), ge: String(pre.a.ge), ve: String(pre.a.ve), em: String(pre.a.em)};
      var t = (pre.talente || []).slice(); while(t.length < 4) t.push(""); k.talente = t;
      k.traum = pre.traum || ""; k.schw = pre.schwaeche || "";
      var au = (pre.ausruestung || []).slice(); if(pre.neurocaster) au.push("Neurocaster: " + pre.neurocaster); while(au.length < 4) au.push(""); k.ausr = au.slice(0, 4);
      k.pid = pre.id;
    } else {
      k.name = pick(VORN) + " " + pick(NACH);
      var w = wuerfe().sort(function(x, y){ return y - x; }), key = ATK[a.schluessel] || "st", rest = ["st", "ge", "ve", "em"].filter(function(x){ return x !== key; }), obj = {};
      obj[key] = w[0]; rest.sort(function(){ return Math.random() - .5; }).forEach(function(x, i){ obj[x] = w[i + 1]; });
      k.a = {}; Object.keys(obj).forEach(function(x){ k.a[x] = String(obj[x]); });
      var sum = w[0] + w[1] + w[2] + w[3], tl = [pick(tab(a.talente))]; if(sum <= 15){ var o = tab(a.talente).filter(function(x){ return x !== tl[0]; }); if(o.length) tl.push(pick(o)); }
      while(tl.length < 4) tl.push(""); k.talente = tl;
      k.traum = pick(tab(a.traum)); k.schw = pick(tab(a.schwaeche)); k.ausr = [pick(tab(a.gegenstand)), "", "", ""];
      if(a.geld && /D6/.test(a.geld)) k.bargeld = (wf(6) + 1) * 100 + " $";
    }
    var z = R().zielOf(k); if(z){ k.ziel = z.ziel; k.bedr = z.bedrohung; }
    return k;
  }

  /* ---------- Teilen, Datei ---------- */
  function b64u(s){ var u = new TextEncoder().encode(s), b = ""; u.forEach(function(c){ b += String.fromCharCode(c); }); return btoa(b).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, ""); }
  function ub64(t){ t = t.replace(/-/g, "+").replace(/_/g, "/"); while(t.length % 4) t += "="; var b = atob(t), u = new Uint8Array(b.length); for(var i = 0; i < b.length; i++) u[i] = b.charCodeAt(i); return new TextDecoder().decode(u); }
  function clean(k){ var o = JSON.parse(JSON.stringify(k)); delete o.id; delete o.pid; delete o.spann; return o; }
  function teilen(k){
    var url = location.href.split("#")[0] + "#es/bogen/teilen~" + b64u(JSON.stringify(clean(k)));
    if(navigator.share){ navigator.share({title: (k.name || "Reisende(r)") + " – The Electric State", url: url}).catch(function(){}); return; }
    (navigator.clipboard ? navigator.clipboard.writeText(url) : Promise.reject()).then(function(){ toast("Link kopiert"); }, function(){ prompt("Link zum Teilen:", url); });
  }
  function sichern(k){
    var b = new Blob([JSON.stringify(clean(k), null, 1)], {type: "application/json"}), a = document.createElement("a");
    a.href = URL.createObjectURL(b); a.download = "The Electric State – " + ((k.name || "").trim() || "Reisende(r)") + ".json"; document.body.appendChild(a); a.click(); a.remove();
  }
  function neuesKid(o){
    var D = R().load(), n = Object.assign(R().neu(), o); n.id = "r" + Date.now().toString(36) + wf(99);
    var dup = D.filter(function(x){ return JSON.stringify(clean(x)) === JSON.stringify(clean(n)); })[0]; if(dup) return dup.id;
    D.push(n); R().setD(D); R().save(); return n.id;
  }
  function laden(file){
    if(!file) return; var r = new FileReader();
    r.onload = function(){ try{ var o = JSON.parse(r.result); if(!o || typeof o !== "object" || !o.a) throw 0; location.hash = "es/bogen/" + neuesKid(o); }catch(e){ toast("Das ist keine Bogen-Datei aus diesem Tool."); } };
    r.readAsText(file);
  }

  /* ---------- Popups ---------- */
  function popWeg(){ document.querySelectorAll(".bw-pop,.bw-info").forEach(function(e){ e.remove(); }); }
  function popUp(anchor, html, w){
    popWeg(); var p = document.createElement("div"); p.className = "bw-pop"; p.innerHTML = html; document.body.appendChild(p);
    var r = anchor.getBoundingClientRect(); p.style.left = Math.max(8, Math.min(r.left, innerWidth - (w || 260) - 8)) + "px"; p.style.top = (r.bottom + 4) + "px"; p.style.width = (w || 260) + "px";
    var h = p.getBoundingClientRect().height; if(r.bottom + 4 + h > innerHeight) p.style.top = Math.max(8, innerHeight - h - 8) + "px";
    return p;
  }
  function infoUp(p, titel, html){
    document.querySelectorAll(".bw-info").forEach(function(e){ e.remove(); });
    var i = document.createElement("div"); i.className = "bw-info"; i.innerHTML = '<h4>' + esc(titel) + '</h4>' + html; document.body.appendChild(i);
    var r = p.getBoundingClientRect(), w = Math.min(340, innerWidth - r.right - 12);
    if(w < 220){ i.style.left = Math.max(8, r.left - 340) + "px"; i.style.width = "332px"; } else { i.style.left = r.right + "px"; i.style.width = w + "px"; }
    i.style.top = r.top + "px"; i.style.maxHeight = Math.min(innerHeight - r.top - 8, 440) + "px";
  }
  function archInfo(a){
    return (a.zitat ? '<p><i>„' + esc(a.zitat.t) + '“</i> – ' + esc(a.zitat.von) + '</p>' : '') + '<p>' + esc(plain(a.html)) + '</p>' +
      (a.schluessel ? '<p><b>Schlüsselattribut:</b> ' + esc(a.schluessel) + '</p>' : '') + (a.s ? '<p class="s">S. ' + a.s + '</p>' : '');
  }
  function archWahl(app, rest, inp){
    var L = archs(), cur = R().norm(inp.value);
    var p = popUp(inp, L.map(function(a, i){ return '<div class="pz"><button class="pn' + (R().norm(a.name) === cur ? ' sel' : '') + '" data-i="' + i + '">' + esc(a.name) + '</button><button class="pi" data-t="' + i + '" title="Info" aria-label="Info">i</button></div>'; }).join(""), 250);
    p.onclick = function(e){
      var b = e.target.closest("button"); if(!b) return; e.stopPropagation();
      if(b.dataset.t != null){ var a = L[+b.dataset.t]; infoUp(p, a.name, archInfo(a)); return; }
      var a2 = L[+b.dataset.i], D = R().load(); R().setD(D); var k = D.filter(function(x){ return x.id === rest[0]; })[0]; if(!k) return;
      k.arch = a2.name; if(!k.ziel && !k.bedr){ var z = R().zielOf(k); if(z){ k.ziel = z.ziel; k.bedr = z.bedrohung; } }
      save(D); popWeg(); ES.renderBogen(app, rest);
    };
  }
  function vorschlaege(k, path){
    var a = R().arch(k); if(!a) return [];
    if(/^talente\.\d$/.test(path)) return tab(a.talente);
    if(path === "traum") return tab(a.traum);
    if(path === "schw") return tab(a.schwaeche);
    if(/^ausr\.\d$/.test(path)) return tab(a.gegenstand);
    return [];
  }
  function vorschlagWahl(app, rest, btn){
    var path = btn.dataset.f, D = R().load(); R().setD(D); var k = D.filter(function(x){ return x.id === rest[0]; })[0]; if(!k) return;
    var L = vorschlaege(k, path); if(!L.length){ toast("Erst einen Archetyp wählen."); return; }
    var p = popUp(btn, L.map(function(x, i){ return '<div class="pz"><button class="pn txt" data-i="' + i + '">' + esc(x) + '</button></div>'; }).join(""), 300);
    p.onclick = function(e){
      var b = e.target.closest("button"); if(!b) return; e.stopPropagation();
      var D2 = R().load(); R().setD(D2); var k2 = D2.filter(function(x){ return x.id === rest[0]; })[0]; if(!k2) return;
      R().set(k2, path, L[+b.dataset.i]); save(D2); popWeg(); ES.renderBogen(app, rest);
    };
  }
  function vorlagen(app, rest, btn){
    var V = ES.VORGEFERTIGT || [];
    var p = popUp(btn, '<h4 class="bw-h4">Vorgefertigte Reisende</h4>' + V.map(function(v, i){ var a = archs().filter(function(x){ return x.id === v.archetyp; })[0]; return '<div class="pz"><button class="pn" data-i="' + i + '">' + esc(v.name) + '<em>' + esc(a ? a.name : "") + '</em></button><button class="pi" data-t="' + i + '" title="Info" aria-label="Info">i</button></div>'; }).join(""), 310);
    p.onclick = function(e){
      var b = e.target.closest("button"); if(!b) return; e.stopPropagation();
      if(b.dataset.t != null){ var v = V[+b.dataset.t]; infoUp(p, v.name, '<p>' + esc(plain(v.text)) + '</p>' + (v.s ? '<p class="s">S. ' + v.s + '</p>' : '')); return; }
      var v2 = V[+b.dataset.i], a = archs().filter(function(x){ return x.id === v2.archetyp; })[0]; if(!a) return;
      var D = R().load(); R().setD(D); var cur = D.filter(function(x){ return x.id === rest[0]; })[0];
      if(cur && filled(cur) && !confirm("Die Einträge dieses Bogens durch die Vorlage ersetzen?")) return;
      popWeg(); ersetze(app, rest, function(n){ fuelle(n, a, false, v2); });
    };
  }

  /* ---------- Bogen verbessern ---------- */
  function enhance(app, rest){
    var D = R().load(); R().setD(D); var k = D.filter(function(x){ return x.id === rest[0]; })[0]; if(!k) return;
    var kt = app.querySelector(".rk"); if(!kt) return;
    var ib = function(ic, tip, act){ return '<button class="bwi" data-act="' + act + '" data-tip="' + tip + '" aria-label="' + tip + '">' + sym(IC[ic]) + '</button>'; };
    var pdf = kt.querySelector("#bPdf"), prn = kt.querySelector("#bPrint"), del = kt.querySelector("#bDel");
    function mach(el, ic, tip){ if(!el) return; el.className = "bwi"; el.setAttribute("data-tip", tip); el.setAttribute("aria-label", tip); el.innerHTML = sym(IC[ic]); }
    mach(pdf, "pdf", "Als ausfüllbares PDF speichern"); mach(prn, "druck", "Drucken"); mach(del, "weg", "Reisende(n) löschen");
    kt.classList.add("bw-kt");
    var back = kt.querySelector("a.chip");
    if(back){
      var ch = document.createElement("span"); ch.className = "tk-chips noprint";
      ch.innerHTML = D.map(function(x){ return '<a class="tk-chip' + (x.id === k.id ? " on" : "") + '" href="#es/bogen/' + x.id + '">' + esc((x.name || "").trim() || "Neuer Bogen") + '</a>'; }).join("") + '<button type="button" class="tk-plus" data-tip="Neuen Bogen anlegen" aria-label="Neuen Bogen anlegen">+</button>';
      back.parentNode.replaceChild(ch, back);
      ch.querySelector(".tk-plus").onclick = function(){ var D2 = R().load(), n = R().neu(); D2.push(n); R().setD(D2); R().save(); location.hash = "es/bogen/" + n.id; };
    }
    var tools = document.createElement("span"); tools.className = "bw-tools noprint";
    tools.innerHTML = ib("zufall", "Zufällige(n) Reisende(n) erstellen", "zufall") + ib("vorlage", "Vorgefertigte(n) Reisende(n) einsetzen", "vorlage") + ib("leeren", "Bogen leeren", "leeren") + ib("teilen", "Link teilen", "teilen") + ib("sichern", "Als Datei sichern", "sichern") +
      '<label class="bwi" data-tip="Datei laden" aria-label="Datei laden">' + sym(IC.laden) + '<input type="file" accept=".json,application/json" hidden></label>';
    kt.insertBefore(tools, pdf || kt.lastChild);
    tools.querySelector("input").onchange = function(){ laden(this.files[0]); this.value = ""; };
    tools.onclick = function(e){
      var b = e.target.closest("[data-act]"); if(!b) return; e.stopPropagation();
      var a = b.dataset.act, D2 = R().load(); R().setD(D2); var cur = D2.filter(function(x){ return x.id === rest[0]; })[0]; if(!cur) return;
      if(a === "zufall"){ if(filled(cur) && !confirm("Die Einträge dieses Bogens durch eine(n) zufällige(n) Reisende(n) ersetzen?")) return; var L = archs(); if(!L.length) return; ersetze(app, rest, function(n){ fuelle(n, pick(L), true); }); toast("Zufällige(r) Reisende(r) erstellt"); }
      if(a === "vorlage") vorlagen(app, rest, b);
      if(a === "leeren"){ if(filled(cur) && !confirm("Alle Einträge dieses Bogens löschen?")) return; ersetze(app, rest, function(){}); }
      if(a === "teilen") teilen(cur);
      if(a === "sichern") sichern(cur);
    };
    var ai = app.querySelector('input[data-p="arch"]');
    if(ai){ ai.removeAttribute("list"); ai.readOnly = true; ai.classList.add("bw-sel"); ai.onclick = function(e){ e.stopPropagation(); archWahl(app, rest, ai); }; }
    ["talente.0", "talente.1", "talente.2", "talente.3", "traum", "schw", "ausr.0", "ausr.1", "ausr.2", "ausr.3"].forEach(function(p){
      if(!vorschlaege(k, p).length) return;
      var inp = app.querySelector('[data-p="' + p + '"]'); if(!inp) return;
      if(/^talente/.test(p)) inp.removeAttribute("list");
      var host = document.createElement("span"); host.className = "bw-w"; inp.before(host); host.appendChild(inp);
      var b = document.createElement("button"); b.type = "button"; b.className = "bw-dd noprint"; b.dataset.f = p; b.setAttribute("data-tip", "Vorschläge aus dem Buch"); b.setAttribute("aria-label", "Vorschläge aus dem Buch"); b.textContent = "▾";
      b.onclick = function(e){ e.stopPropagation(); vorschlagWahl(app, rest, b); };
      host.appendChild(b);
    });
  }

  ES.renderBogen = function(app, rest){
    var id = rest && rest[0];
    if(id && String(id).indexOf("teilen~") === 0){
      try{ var o = JSON.parse(ub64(String(id).slice(7))); if(!o || !o.a) throw 0; var nid = neuesKid(o); LK.an(); toast("Reisende(r) übernommen"); location.replace(location.href.split("#")[0] + "#es/bogen/" + nid); }
      catch(e){ app.className = "page"; app.innerHTML = "<h1>Link ungültig</h1>"; }
      return;
    }
    popWeg(); orig(app, rest); enhance(app, rest || []);
  };
  document.addEventListener("click", function(e){ if(!e.target.closest(".bw-pop,.bw-info")) popWeg(); });
  document.addEventListener("keydown", function(e){ if(e.key === "Escape" && document.querySelector(".bw-pop,.bw-info")){ e.stopImmediatePropagation(); e.preventDefault(); popWeg(); } }, true);
  window.addEventListener("hashchange", popWeg);
})();
