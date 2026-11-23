/* Suche (#suche/<begriff>) und Galerie (#galerie) – Knöpfe in der Kopfzeile, Taste „/“ öffnet die Suche */
"use strict";
(function(){
  var PFAD = /^(abenteuer|monster|kap|volk|beruf)\/[\w\-.]+$/;
  function norm(s){ return String(s || "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/ß/g, "ss").replace(/[*§]/g, ""); }
  /* beliebige Datenstruktur → reiner Text (Bildpfade und Schlüssel ausgelassen) */
  function flat(o, out){
    out = out || [];
    if(o == null) return out;
    if(typeof o === "string"){ if(!PFAD.test(o)) out.push(o.replace(/[*§]/g, "")); return out; }
    if(typeof o === "number") return out;
    if(Array.isArray(o)){ o.forEach(function(x){ flat(x, out); }); return out; }
    if(typeof o === "object") Object.keys(o).forEach(function(k){ if(k === "img" || k === "pin" || k === "p" || k === "id" || k === "wesen" || k === "be" || k === "typ" || k === "strip" || k === "r") return; flat(o[k], out); });
    return out;
  }
  var IDX = null;
  function add(typ, titel, hash, o, extra){
    var t = flat(o).join(" ").replace(/\s+/g, " ");
    IDX.push({typ: typ, titel: titel, hash: hash, text: t, n: norm(titel + " " + (extra || "") + " " + t), nt: norm(titel)});
  }
  function bauen(){
    IDX = [];
    var N = window.DB_NACH || {};
    Object.keys(N).forEach(function(k){
      var K = N[k]; if(!K || !K.abs) return;
      K.abs.forEach(function(a){ add("Regelbuch", (K.n ? K.n + ". " : "") + K.t + " › " + a.t, "n/" + K.id + "/" + a.id, a.b); });
    });
    (window.DB_MON || []).forEach(function(m){ add("Bestiarium", m.t, "n/be/" + m.id, [m.text, m.sonder, m.att, m.typen, m.ru, m.gr]); });
    if(window.DB_BEKOPF) DB_BEKOPF.abs.forEach(function(a){ add("Bestiarium", "Bestiarium › " + (a.t || "Monster im Spiel"), "n/be/imspiel", a.b); });
    var AB = window.DB_AB || {};
    Object.keys(AB).forEach(function(id){
      var A = AB[id]; if(!A || A.stub) return;
      var g = "Abenteuer";
      add(g, A.t, "a/" + id + "/lage", [A.lage, A.vl, A.schluss, A.hinweis], "");
      (A.bereiche || []).forEach(function(B){
        (B.orte || []).forEach(function(o){ add(g, A.t + " › " + (o.n ? o.n + ". " : "") + o.t, "a/" + id + "/" + B.id + "/" + o.n, [o.vl, o.st, o.b, o.nach], B.t); });
      });
      Object.keys(A.figuren || {}).forEach(function(f){ var F = A.figuren[f]; add(g, A.t + " › " + F.t, "a/" + id + "/figuren", F); });
      Object.keys(A.kaesten || {}).forEach(function(f){ var F = A.kaesten[f]; add(g, A.t + " › " + (F.k || F.t || f), "a/" + id + "/figuren", F); });
      (A.tabellen || []).forEach(function(t){ add(g, A.t + " › " + t.h, "a/" + id + "/tabellen", t); });
      if(A.reisen) add(g, A.t + " › Reisen", "a/" + id + "/reisen", A.reisen);
    });
    var BD = window.DB_BAND || {};
    Object.keys(BD).forEach(function(b){
      var E = BD[b].einf; if(!E) return;
      if(E.length && E[0] && E[0].b) E.forEach(function(s){ add("Abenteuer", BD[b].t + " › " + s.t, "k/" + b + "/einf", s.b); });
      else add("Abenteuer", BD[b].t + " › Einführung", "k/" + b + "/einf", E);
    });
  }
  var RE = {};
  function treffer(q){
    var w = norm(q).split(/\s+/).filter(function(x){ return x.length > 1 || /\d/.test(x); });
    if(!w.length) return {w: w, r: []};
    var r = [];
    IDX.forEach(function(e){
      var s = 0;
      for(var i = 0; i < w.length; i++){
        var re = RE[w[i]] || (RE[w[i]] = new RegExp("(^|[^a-z0-9])" + w[i].replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
        if(!re.test(e.n)) return;
        s += 1 + (e.nt.indexOf(w[i]) >= 0 ? 12 : 0) + Math.min(5, (e.n.split(w[i]).length - 1) * .5);
      }
      r.push({e: e, s: s});
    });
    r.sort(function(a, b){ return b.s - a.s; });
    return {w: w, r: r};
  }
  function ausschnitt(e, w){
    var t = e.text, nt = norm(t), p = -1;
    for(var i = 0; i < w.length && p < 0; i++) p = nt.indexOf(w[i]);
    if(p < 0) return esc(t.slice(0, 140));
    var a = Math.max(0, p - 60), s = t.slice(a, a + 200);
    s = (a > 0 ? "… " : "") + esc(s) + (a + 200 < t.length ? " …" : "");
    return s;
  }
  function marke(html, w){
    w.forEach(function(x){
      var re = new RegExp("(" + x.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")", "gi");
      html = html.replace(/(<[^>]*>)|([^<]+)/g, function(m, tag, txt){ return tag ? tag : txt.replace(re, "<mark>$1</mark>"); });
    });
    return html;
  }
  window.sucheLauf = function(q){
    if(!IDX) bauen();
    var out = document.getElementById("sErg"); if(!out) return;
    var R = treffer(q), r = R.r;
        if(!R.w.length){ out.innerHTML = ""; return; }
    if(!r.length){ out.innerHTML = '<div class="s-leer">Nichts gefunden.</div>'; return; }
    var gr = {}, order = [];
    ["Regelbuch", "Bestiarium", "Abenteuer"].forEach(function(t){ gr[t] = []; }); r.forEach(function(x){ var g = gr[x.e.typ]; if(g.length < 30) g.push(x.e); }); order = ["Regelbuch", "Bestiarium", "Abenteuer"].filter(function(t){ return gr[t].length; });
    out.innerHTML = '<div class="s-zahl">' + r.length + ' Treffer' + (order.length ? ' (je Bereich die besten 30)' : '') + '</div>' + order.map(function(t){
      return '<h3 class="s-gr">' + esc(t) + '</h3><div class="s-raster">' + gr[t].map(function(e){
        return '<a class="s-karte" href="#' + e.hash + '"><b>' + marke(esc(e.titel), R.w) + '</b><span>' + marke(ausschnitt(e, R.w), R.w) + '</span></a>';
      }).join("") + '</div>';
    }).join("");
  };
  /* Suche als Overlay (Taste „f“ oder Lupe) */
  window.sucheOpen = function(q){
    if(document.getElementById("sIn")){ document.getElementById("sIn").focus(); document.getElementById("sIn").select(); return; }
    var m = modal('<div class="suche"><input id="sIn" type="search" autocomplete="off" placeholder="Suchen in Regelbuch, Bestiarium und Abenteuern …" value="' + esc(q || "") + '" oninput="sucheLauf(this.value)"><div id="sErg" onclick="if(event.target.closest(\'a\')) document.querySelector(\'.sov\').remove()"></div></div>', true);
    m.classList.add("sov");
    var i = document.getElementById("sIn"); i.focus();
    i.onkeydown = function(e){ if(e.key === "Escape"){ m.remove(); return; } if(e.key === "Enter"){ var a = document.querySelector("#sErg a"); if(a){ a.click(); } } };
    if(q) sucheLauf(q);
  };
  DB_VIEWS.suche = function(h){
    setTimeout(function(){ sucheOpen(h[1] || ""); }, 0);
    return viewStart();
  };

  /* ---------- Galerie ---------- */
  var GAL = null, VOLK = [["elf","Elf"],["ente","Ente"],["halbling","Halbling"],["mensch","Mensch"],["wolfsmensch","Wolfsmensch"],["zwerg","Zwerg"]];
  function galBauen(){
    var seen = {}; GAL = [];
    function walk(o, q, label, hash){
      if(o == null) return;
      if(typeof o === "string"){ if(PFAD.test(o) && !seen[o]){ seen[o] = 1; GAL.push({src: o, label: label, q: q, hash: hash}); } return; }
      if(typeof o !== "object") return;
      if(Array.isArray(o)){ o.forEach(function(x){ walk(x, q, label, hash); }); return; }
      var l = o.t || o.k || o.h || label;
      Object.keys(o).forEach(function(k){ walk(o[k], q, typeof o[k] === "object" ? l : (k === "img" ? l : label), hash); });
    }
    var N = window.DB_NACH || {};
    Object.keys(N).forEach(function(k){ var K = N[k]; if(!K || !K.abs) return; K.abs.forEach(function(a){ walk(a, "Regelbuch", a.t, "n/" + K.id + "/" + a.id); }); });
    (window.DB_MON || []).forEach(function(m){ if(m.img && !seen[m.img]){ seen[m.img] = 1; GAL.push({src: /^monster\//.test(m.img) ? m.img : "monster/" + m.img, label: m.t, q: "Bestiarium", hash: "n/be/" + m.id}); } });
    [["beruf","barde","Barde"],["beruf","dieb","Dieb"],["beruf","gelehrter","Gelehrter"],["beruf","haendler","Händler"],["beruf","handwerker","Handwerker"],["beruf","jaeger","Jäger"],["beruf","krieger","Krieger"],["beruf","magier","Magier"],["beruf","ritter","Ritter"],["beruf","seefahrer","Seefahrer"]].forEach(function(x){ var k = x[0] + "/" + x[1]; if(!seen[k]){ seen[k] = 1; GAL.push({src: k, label: "Beruf: " + x[2], q: "Regelbuch", hash: "n/sc"}); } });
    VOLK.forEach(function(v){ var k = "volk/" + v[0]; if(!seen[k]){ seen[k] = 1; GAL.push({src: k, label: "Volk: " + v[1], q: "Regelbuch", hash: "n/sc"}); } });
    var AB = window.DB_AB || {};
    Object.keys(AB).forEach(function(id){
      var A = AB[id]; if(!A || A.stub) return;
      var q = (window.DB_BAND && DB_BAND[A.band] && DB_BAND[A.band].t) || "Abenteuer";
      if(A.img) walk(A.img, q, A.t, "a/" + id + "/lage");
      (A.bereiche || []).forEach(function(B){ walk(B.karte, q, A.t + " · " + B.t + " (Karte)", "a/" + id + "/" + B.id); (B.orte || []).forEach(function(o){ walk(o, q, A.t + " · " + o.t, "a/" + id + "/" + B.id + "/" + o.n); }); });
      Object.keys(A.figuren || {}).forEach(function(f){ walk(A.figuren[f], q, A.t + " · " + A.figuren[f].t, "a/" + id + "/figuren"); });
      Object.keys(A.kaesten || {}).forEach(function(f){ walk(A.kaesten[f], q, A.t, "a/" + id + "/figuren"); });
      walk(A.handouts, q, A.t + " · Handout", "a/" + id + "/lage"); walk(A.lage, q, A.t, "a/" + id + "/lage"); walk(A.reisen, q, A.t, "a/" + id + "/reisen"); walk(A.schluss, q, A.t, "a/" + id + "/lage");
    });
    var BD = window.DB_BAND || {};
    Object.keys(BD).forEach(function(b){ walk(BD[b].einf, BD[b].t || "Abenteuer", BD[b].t, "k/" + b + "/einf"); });
  }
  window.galFilter = function(){
    var q = (document.getElementById("gIn").value || ""), n = norm(q), sel = (ST.galq || "");
    var chip = document.querySelector(".g-chips .on"); sel = chip ? chip.getAttribute("data-q") : "";
    var out = document.getElementById("gGrid"), html = "", cnt = 0, last = null;
    GAL.forEach(function(g){
      if(sel && g.q !== sel) return;
      if(n && norm(g.label + " " + g.src).indexOf(n) < 0) return;
      cnt++;
      html += '<figure class="g-bild"><img loading="lazy" class="mul" src="' + IMG(g.src) + '" alt="" onclick="zoom(this.src)"><figcaption><a href="#' + g.hash + '">' + esc(g.label || "") + '</a></figcaption></figure>';
    });
    out.innerHTML = html || '<div class="s-leer">Keine Bilder.</div>';
    document.getElementById("gZahl").textContent = cnt + " Bilder";
  };
  window.galChip = function(el){ [].forEach.call(document.querySelectorAll(".g-chips span"), function(s){ s.classList.remove("on"); }); el.classList.add("on"); galFilter(); };
  DB_VIEWS.galerie = function(){
    if(!GAL) galBauen();
    var qs = []; GAL.forEach(function(g){ if(qs.indexOf(g.q) < 0) qs.push(g.q); });
    setTimeout(function(){ if(document.getElementById("gGrid")) galFilter(); }, 0);
    return '<div class="galerie"><div class="g-kopf"><div class="g-chips"><span class="on" data-q="" onclick="galChip(this)">Alle</span>' + qs.map(function(q){ return '<span data-q="' + esc(q) + '" onclick="galChip(this)">' + esc(q) + '</span>'; }).join("") +
      '</div><input id="gIn" type="search" placeholder="Bilder filtern …" oninput="galFilter()"><span id="gZahl" class="g-zahl"></span></div><div id="gGrid" class="g-raster"></div></div>';
  };

  /* Knöpfe in der Kopfzeile + Taste „/“ */
  function knoepfe(){
    var burger = document.querySelector(".topbar .tb-burger"); if(!burger || document.getElementById("tbSuche")) return;
    function btn(id, titel, svg, hash){
      var b = document.createElement("button"); b.className = "ib tm-info"; b.id = id; b.title = titel; b.setAttribute("aria-label", titel);
      b.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' + svg + '</svg>';
      b.onclick = function(){ if(hash === "suche") sucheOpen(); else go(hash); }; burger.parentNode.insertBefore(b, burger);
    }
    btn("tbSuche", "Suche", '<circle cx="11" cy="11" r="6.5"/><path d="M16 16l5 5"/>', "suche");
    btn("tbGalerie", "Galerie", '<rect x="3.5" y="4.5" width="17" height="15" rx="1.5"/><circle cx="9" cy="10" r="1.6"/><path d="M4 18l5-5 4 4 3-3 4 4"/>', "galerie");
  }
  document.addEventListener("DOMContentLoaded", knoepfe); setTimeout(knoepfe, 400); setTimeout(knoepfe, 1500);
  document.addEventListener("keydown", function(e){
    if((e.key !== "f" && e.key !== "F" && e.key !== "/") || /INPUT|TEXTAREA|SELECT/.test((e.target || {}).tagName || "") || e.ctrlKey || e.metaKey || e.altKey) return;
    e.preventDefault(); sucheOpen();
  });
})();
