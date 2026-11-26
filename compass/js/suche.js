/* Volltextsuche (Taste „f“): durchsucht den Text aller lokal hinterlegten PDFs dieses Systems (Seite für Seite).
   Der Seitentext wird einmal aus den im Browser gespeicherten PDFs gelesen und lokal zwischengespeichert.
   Treffer öffnen das Buch auf der passenden Seite. */
(function(){
  var S = window.SYS, books = [], ready = null, prog = null, pdfjs = null;
  S.groups.forEach(function(g){ g.items.forEach(function(b){ books.push({id: b.id, name: b.name, grp: g.grp}); }); });
  var BASE = new URL("../bookviewer/lib/", location.href.split("#")[0]).href;

  function idb(name, store){
    return new Promise(function(res, rej){
      var r = indexedDB.open(name, 1);
      r.onupgradeneeded = function(){ if(!r.result.objectStoreNames.contains(store)) r.result.createObjectStore(store); };
      r.onsuccess = function(){ res(r.result); }; r.onerror = function(){ rej(r.error); };
    });
  }
  function get(db, store, k){ return new Promise(function(res){ var q = db.transaction(store).objectStore(store).get(k); q.onsuccess = function(){ res(q.result || null); }; q.onerror = function(){ res(null); }; }); }
  function put(db, store, k, v){ return new Promise(function(res){ var t = db.transaction(store, "readwrite"); t.objectStore(store).put(v, k); t.oncomplete = function(){ res(true); }; t.onerror = function(){ res(false); }; }); }
  async function lib(){
    if(pdfjs) return pdfjs;
    pdfjs = await import(BASE + "pdf.min.mjs");
    if(!pdfjs.GlobalWorkerOptions.workerSrc) pdfjs.GlobalWorkerOptions.workerSrc = BASE + "pdf.worker.min.mjs";
    return pdfjs;
  }
  function bar(p){
    if(p == null){ if(prog){ prog.remove(); prog = null; } return; }
    if(!prog){
      prog = document.createElement("div");
      prog.style.cssText = "position:fixed;left:50%;bottom:18px;transform:translateX(-50%);z-index:100001;background:#161a26;color:#e6e9f2;border-radius:8px;padding:8px 16px;font:14px system-ui,sans-serif;box-shadow:0 6px 24px rgba(0,0,0,.5)";
      document.body.appendChild(prog);
    }
    prog.textContent = Math.round(p * 100) + " %";
  }
  async function laden(){
    var bdb = await idb("bookviewer_books", "b"), cdb = await idb("gm_suche_text", "t"), out = [], done = 0, total = books.length;
    for(var i = 0; i < books.length; i++){
      var b = books[i], blob = await get(bdb, "b", b.id);
      if(blob){
        var sig = blob.size + ":" + (blob.lastModified || 0), c = await get(cdb, "t", b.id), pages;
        if(c && c.sig === sig) pages = c.pages;
        else {
          try{
            var l = await lib(), dc = await l.getDocument({data: await blob.arrayBuffer()}).promise;
            pages = [];
            for(var n = 1; n <= dc.numPages; n++){
              var pg = await dc.getPage(n), tc = await pg.getTextContent();
              pages.push(tc.items.map(function(it){ return typeof it.str === "string" ? it.str + (it.hasEOL ? "\n" : " ") : ""; }).join("").replace(/\s+/g, " ").trim());
              if(n % 8 === 0) bar((done + n / dc.numPages) / total);
            }
            await put(cdb, "t", b.id, {sig: sig, pages: pages});
          }catch(e){ pages = []; }
        }
        out.push({b: b, pages: pages});
      }
      done++; bar(done / total);
    }
    return out;
  }
  function off(k){ try{ var v = localStorage.getItem("bookviewer_offset_" + k); if(v !== null) return parseInt(v) || 0; }catch(e){} return 0; }
  function bereit(){
    if(!ready) ready = laden().then(function(data){
      GSuche.add(function(add){
        books.forEach(function(b){ add(b.name, b.grp, function(){ BV.open(b.id, 1); }, b.name); });
        data.forEach(function(d){
          var o = off(d.b.id);
          d.pages.forEach(function(t, i){
            if(!t) return;
            var s = i + 1 - o; if(s < 1) s = i + 1;
            add(d.b.name + " › S. " + s, d.b.name, function(){ BV.open(d.b.id, s); }, t);
          });
        });
      });
      bar(null);
    }, function(){ bar(null); ready = null; });
    return ready;
  }
  /* Inhalte des Tools selbst (Adventure Journal, Staffeln, Folgen) */
  var inh = null, TYP = {prose: 1, cards: 1, tiles: 1, box: 1, script: 1, steps: 1, table: 1, chips: 1, list: 1, quote: 1, n: 1, d: 1, cut: 1, clue: 1, img: 1};
  function rein(o){
    if(Array.isArray(o)) return o.map(rein);
    if(o && typeof o === "object"){ var r = {}; Object.keys(o).forEach(function(k){ if(k === "t" && TYP[o[k]]) return; if(k === "style" || k === "cols" || k === "fold" || k === "dark") return; r[k] = rein(o[k]); }); return r; }
    return typeof o === "string" ? o.replace(/\{[a-zA-Z]+:[^}|]*\|?([^}]*)\}/g, "$1") : o;
  }
  function inhalt(){
    if(!inh) inh = new Promise(function(res){
      INH.loadAll(function(){
        GSuche.add(function(add){
          INH.areas().forEach(function(a){
            var D = BC_DATA[a.id]; if(!D || !D.subs) return;
            D.subs.forEach(function(s){ add(a.t + " › " + s.t, a.grp === "aj" ? "Adventure Journal" : BC_BUCH[a.grp].t, "#a/" + a.id + "/" + s.id, rein(s.blocks)); });
          });
          Object.keys(BC_EP).forEach(function(id){ var E = BC_EP[id]; add((E.lab ? E.lab + " › " : "") + E.t, "Folgen", "#e/" + id, rein([E.intro, E.scenes, E.outro])); });
        });
        res();
      });
    });
    return inh;
  }
  window.sucheOpen = function(){ Promise.all([bereit(), inhalt()]).then(function(){ GSuche.open(); }); };
  function _alt(){ bereit().then(function(){ GSuche.open(); }); };
  window.sucheOpen = window.sucheOpen;
  if(window.requestIdleCallback) requestIdleCallback(function(){ inhalt(); bereit(); }, {timeout: 4000}); else setTimeout(function(){ inhalt(); bereit(); }, 2000);
})();
