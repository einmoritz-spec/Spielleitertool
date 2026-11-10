/* ============================================================
   Modus 2 — alternative Spielansicht für Wake of the Oldways.
   Reine Umordnung der Standardansicht: Es wird nichts neu
   geschrieben und nichts weggelassen. Alle Elemente der normalen
   Szene werden nur verschoben (Abschnitte links, Figuren/Challenges/
   Revelations/Belohnung/Notizen rechts). Standard bleibt Modus 1.
   ============================================================ */
const M2 = {
  map:false, sec:0,
  on(){ try{ return sessionStorage.getItem("wake.mode2")==="1"; }catch(e){ return false; } },
  set(v){ try{ sessionStorage.setItem("wake.mode2", v?"1":"0"); }catch(e){} M2.map=false; M2.sec=0; render(); },
  wide(){ return window.innerWidth>=1100; },
  store(k,d){ try{ return JSON.parse(localStorage.getItem("wake.m2."+k))||d; }catch(e){ return d; } },
  save(k,v){ try{ localStorage.setItem("wake.m2."+k, JSON.stringify(v)); }catch(e){} },

  /* ---------- Tab-Leiste (mit Wegkarte) ---------- */
  tabs(adv){
    const tabs = adv.scenes.map((s,i)=>{
      const active = !M2.map && i===state.sceneIdx;
      const checkable = s.kind!=="intro";
      const done = checkable && !!state.scenesCompleted[sceneCompleteKey(adv.id, i)];
      const eyebrow = s.kind==="intro" ? "Übersicht" : s.kind==="aftermath" ? "Abschluss" : "Szene "+i+(s.optional?" · optional":"");
      const chk = checkable ? `<button class="trail-check ${done?'done':''}" onclick="event.stopPropagation(); toggleSceneCompleted('${adv.id}', ${i})" title="${done?'Als nicht erledigt markieren':'Als erledigt markieren'}">${done?'✓':''}</button>` : "";
      return `<div class="case-tab ${active?'active':''} ${done?'done':''}" role="button" tabindex="0" onclick="goScene(${i})" title="${esc(effTitle(adv.id,s))}"><span class="ct-eyebrow">${eyebrow}</span><span class="ct-title">${esc(effTitle(adv.id,s))}</span>${chk}</div>`;
    }).join("");
    const mapTab = `<div class="case-tab ${M2.map?'active':''}" role="button" tabindex="0" onclick="M2.openMap()"><span class="ct-eyebrow">Abenteuer</span><span class="ct-title">Wegkarte</span></div>`;
    return `<div class="wk-head"><div class="crumbs"><a onclick="goOverview()">Start</a> › ${esc(adv.title)} <span class="wk-meta">· ${adv.scenes.length} Szenen · ${esc(adv.en)}</span></div></div><div class="case-tabbar">${mapTab}${tabs}${noteTileHere(adv)}</div>`;
  },
  openMap(){ if(typeof guardEditLeave==="function" && !guardEditLeave()) return; M2.map=true; render(); window.scrollTo({top:0}); },

  /* ---------- Wegkarte ---------- */
  renderMap(adv){
    const rev = M2.store("rev",{});
    const cards = adv.scenes.map((s,i)=>{
      const checkable = s.kind!=="intro";
      const done = checkable && !!state.scenesCompleted[sceneCompleteKey(adv.id, i)];
      const here = i===state.sceneIdx;
      const eyebrow = s.kind==="intro" ? "Übersicht" : s.kind==="aftermath" ? "Abschluss" : "Szene "+i+(s.optional?" · optional":"");
      const npcs = (s.npcs||[]).map(n=>n.name), chs = (s.challenges||[]).map(c=>c.name);
      const rv = (s.revelations||[]), rvFound = rv.filter((r,ri)=>rev[adv.id+":"+i+":"+ri]).length;
      const lines = [];
      if(s.summary) lines.push(esc(s.summary));
      if(npcs.length) lines.push("Figuren: "+npcs.map(esc).join(" · "));
      if(chs.length) lines.push("Challenges: "+chs.map(c=>`<b>${esc(c)}</b>`).join(" · "));
      const cnt = [];
      if((s.readAloud||[]).length) cnt.push((s.readAloud||[]).length+" Vorlesetext"+((s.readAloud||[]).length>1?"e":""));
      if(rv.length) cnt.push("Revelations "+rvFound+"/"+rv.length);
      if((s.rewards||[]).length) cnt.push("Belohnung");
      if(cnt.length) lines.push(cnt.join(" · "));
      return `<button class="m2-card ${done?'done':''} ${here?'here':''}" onclick="goScene(${i})"><small>${eyebrow} · ${esc(s.page||"")}</small><b>${esc(effTitle(adv.id,s))}</b><span>${lines.join("<br>")}</span></button>`;
    }).join("");
    const recent = M2.store("recent",[]).filter(r=>r.adv===adv.id).slice(0,8);
    const recHtml = recent.length ? recent.map(r=>`<button class="m2-rec" onclick="goScene(${r.scene})"><b>${esc(r.name)}</b><span>${esc(r.kind)} · ${r.scene===0?'Übersicht':'Szene '+r.scene}</span></button>`).join("") : `<div class="m2-empty">Noch nichts geöffnet.</div>`;
    return `<div class="m2-map">
      <h1>${esc(adv.title)} · Wegkarte</h1>
      <div class="m2-mapmeta">Das ganze Abenteuer auf einer Seite · Grün = gespielt, Gold = hier seid ihr · Tipp auf eine Karte öffnet die Szene</div>
      <div class="m2-cards">${cards}</div>
      <div class="m2-maprow">
        <div class="m2-box"><h4>Zuletzt geöffnet</h4>${recHtml}</div>
      </div>
    </div>`;
  },

  /* ---------- Szene umordnen (nur DOM verschieben, nichts ausblenden) ---------- */
  layout(adv){
    const sw = document.querySelector(".stage-wrap"); if(!sw || sw.dataset.m2) return;
    sw.dataset.m2 = "1";
    const wide = M2.wide();
    const kids = [].slice.call(sw.children);
    const head = kids.find(k=>k.classList.contains("scene-head"));
    const notes = kids.find(k=>k.classList.contains("adv-notes"));
    const sections = kids.filter(k=>k.classList.contains("section"));
    const main = document.createElement("div"); main.className = "m2-main";
    const side = document.createElement("aside"); side.className = "m2-side";
    const blocks = [];
    const newBlock = (label, kind) => {
      const d = document.createElement("section"); d.className = "m2-block"+(kind?" m2-"+kind:"");
      const h = document.createElement("div"); h.className = "m2-bh";
      const n = document.createElement("i"); h.appendChild(n);
      const t = document.createElement("span"); t.className = "m2-bt m2-gen"; t.textContent = label; h.appendChild(t);
      d.appendChild(h); d._h = h; d._t = t; d._label = label; blocks.push(d); main.appendChild(d); return d;
    };
    const labelNode = s => s.querySelector(":scope > .section-label, :scope > details > summary.section-label");
    const labelOf = s => { const l = labelNode(s); if(!l) return ""; const c = l.cloneNode(true); c.querySelectorAll("button,.line,.raven-icon").forEach(x=>x.remove()); return c.textContent.trim(); };
    const headingOf = el => { if(el.nodeType!==1 || el.tagName!=="P") return null; const f = el.firstElementChild; if(!f || !f.classList.contains("section-heading")) return null; let n = el.firstChild; while(n && n!==f){ if(n.textContent.trim()) return null; n = n.nextSibling; } return f; };
    const isCard = el => el.nodeType===1 && (el.classList.contains("challenge") || el.classList.contains("npc-grid"));
    const flowBox = b => { let w = b.lastElementChild; if(!w || !w.classList.contains("flow")){ w = document.createElement("div"); w.className = "flow"; b.appendChild(w); } return w; };
    const toSide = (el, block) => { el._block = block; side._cards.push(el); };
    side._cards = []; const sideSecs = [];

    /* Kurzfassung „Auf einen Blick“ (nur Modus 2, eigene Stichpunkte zusätzlich zum Originaltext) */
    const sc = adv.scenes[state.sceneIdx];
    if(sc && sc.quick && sc.quick.length){
      const qb = newBlock("Auf einen Blick","quick"); const ul = document.createElement("ul");
      sc.quick.forEach(q=>{ const li = document.createElement("li"); li.innerHTML = (typeof LS==="function") ? LS(q) : q; ul.appendChild(li); });
      qb.appendChild(ul);
    }
    sections.forEach(s=>{
      const flow = s.querySelector(":scope > .flow");
      if(flow){
        const nodes = [].slice.call(flow.childNodes).filter(n=>n.nodeType===1 || n.textContent.trim());
        let cur = null, pending = [];
        const start = (label, hEl) => { cur = newBlock(label, "flowb"); if(hEl){ cur._t.textContent = ""; cur._t.classList.remove("m2-gen"); cur._t.appendChild(hEl); } pending.forEach(c=>place(c)); pending = []; };
        const place = el => {
          if(wide){
            const nameEl = el.querySelector(".ch-name, .npc-top");
            const c = nameEl ? nameEl.cloneNode(true) : null; if(c) c.querySelectorAll(".ch-optional-tag,.ch-subtitle,.npc-role,[class*=pip],[class*=diff]").forEach(x=>x.remove());
            const nm = c ? c.textContent.replace(/[◆◇❖]/g,"").trim().replace(/\s+/g," ").slice(0,60) : "";
            const ptr = document.createElement("div"); ptr.className = "m2-ptr";
            ptr.textContent = "→ "+(el.classList.contains("challenge")?"Challenge: ":"Figur: ")+nm;
            ptr.onclick = ()=>{ el.scrollIntoView({block:"center",behavior:"smooth"}); el.classList.add("m2-flash"); setTimeout(()=>el.classList.remove("m2-flash"),1200); };
            cur.appendChild(ptr); toSide(el, cur);
          } else { cur.appendChild(el); }
        };
        nodes.forEach((el,k)=>{
          const hEl = headingOf(el);
          if(hEl){ start(hEl.textContent.trim(), hEl); if(el.textContent.trim()) flowBox(cur).appendChild(el); else el.remove(); return; }
          if(isCard(el)){
            /* Karten direkt vor einer Zwischenüberschrift gehören zum folgenden Block */
            let m = k+1; while(m<nodes.length && isCard(nodes[m])) m++;
            if(m<nodes.length && headingOf(nodes[m])){ pending.push(el); return; }
            if(!cur) start("Überblick"); place(el); return;
          }
          if(!cur) start("Überblick");
          if(el.nodeType===1 && (el.classList.contains("readaloud"))){ cur.appendChild(el); return; }
          flowBox(cur).appendChild(el);
        });
        if(pending.length){ if(!cur) start("Überblick"); pending.forEach(c=>place(c)); }
        s.remove(); return;
      }
      const isChall = !!s.querySelector(":scope > .section-label .collapse-all-btn");
      const isNpc = !!s.querySelector(":scope > .npc-grid");
      const isRev = !!s.querySelector(":scope > .reveal-row");
      const lab = labelOf(s);
      if(isChall || isNpc || isRev || lab==="Belohnung"){ s._kind = isNpc?"npc":isChall?"ch":isRev?"rev":"rew"; sideSecs.push(s); return; }
      if(s.querySelector(":scope > .readaloud") && !lab){ const b = newBlock("Vorlesen","read"); b.appendChild(s); return; }
      const name = lab || (s.querySelector(".tip") ? "Tipps" : s.querySelector(".growth-details") ? "Wachstum" : "Weiteres");
      const b = newBlock(name, "extra"); const ln = labelNode(s);
      if(ln && !ln.closest("details")){ b._t.textContent = ""; b._t.classList.remove("m2-gen"); while(ln.firstChild) b._t.appendChild(ln.firstChild); ln.remove(); }
      b.appendChild(s);
    });
    blocks.forEach((b,i)=>{ b._h.firstChild.textContent = String(i+1); b.id = "m2b"+i; });

    /* Rechte Spalte: Figuren, Challenges (mit Block-Nummer), Revelations, Belohnung, Notizen */
    const order = ["npc","ch","rev","rew"];
    const sideAdd = el => (wide ? side : main).appendChild(el);
    const posNpc = side._cards.filter(c=>c.classList.contains("npc-grid")), posCh = side._cards.filter(c=>c.classList.contains("challenge"));
    const badge = c => { if(!c._block) return; const b = document.createElement("button"); b.className = "m2-badge"; b.textContent = "Block "+c._block._h.firstChild.textContent+" · "+c._block._label; b.onclick = ()=>c._block.scrollIntoView({block:"start",behavior:"smooth"}); side.appendChild(b); };
    const group = (title) => { const h = document.createElement("div"); h.className = "m2-sh"; h.textContent = title; side.appendChild(h); };
    const secOf = k => sideSecs.find(s=>s._kind===k);
    if(wide){
      if(posNpc.length || secOf("npc")){ group("Figuren"); posNpc.forEach(c=>{ badge(c); side.appendChild(c); }); if(secOf("npc")) side.appendChild(secOf("npc")); }
      if(posCh.length || secOf("ch")){ group("Challenges"); posCh.forEach(c=>{ badge(c); side.appendChild(c); }); if(secOf("ch")) side.appendChild(secOf("ch")); }
      if(secOf("rev")) side.appendChild(secOf("rev"));
      if(secOf("rew")) side.appendChild(secOf("rew"));
      /* Challenges rechts standardmäßig offen */
      side.querySelectorAll(".challenge:not(.open)").forEach(c=>{ c.classList.add("open"); if(c.id && state.openChallenges) state.openChallenges.add(c.id); });
    } else {
      order.forEach(k=>{ const s = secOf(k); if(s){ const b = document.createElement("section"); b.className = "m2-block m2-extra m2-plain"; b.appendChild(s); main.appendChild(b); } });
    }
    if(notes) (wide?side:main).appendChild(notes);

    /* Revelations und Belohnungen abhakbar */
    const chk = M2.store("rev",{});
    const addCb = (row, key) => { const b = document.createElement("button"); b.className = "m2-cb"+(chk[key]?" on":""); b.title = "Abhaken"; b.textContent = chk[key]?"✓":"";
      b.onclick = ()=>{ const r = M2.store("rev",{}); r[key] = !r[key]; M2.save("rev",r); b.classList.toggle("on", !!r[key]); b.textContent = r[key]?"✓":""; }; row.insertBefore(b, row.firstChild); row.classList.add("m2-row"); };
    const root = wide ? side : main;
    root.querySelectorAll(".reveal-row").forEach((row,ri)=>addCb(row, adv.id+":"+state.sceneIdx+":"+ri));
    const rw = sideSecs.find(s=>s._kind==="rew"); if(rw) rw.querySelectorAll("li").forEach((li,ri)=>addCb(li, adv.id+":"+state.sceneIdx+":rw"+ri));

    /* Sprungknöpfe zu den Blöcken (alles bleibt sichtbar) */
    const pills = document.createElement("div"); pills.className = "m2-pills";
    blocks.forEach((d,i)=>{ const b = document.createElement("button"); b.className = "m2-pill"; b.textContent = (i+1)+" · "+d._label; b.onclick = ()=>M2.show(i); pills.appendChild(b); });

    const cols = document.createElement("div"); cols.className = "m2-cols"+(side.children.length?"":" m2-noside");
    cols.appendChild(main); if(side.children.length) cols.appendChild(side);
    sw.insertBefore(cols, head ? head.nextSibling : sw.firstChild);
    if(blocks.length>1) sw.insertBefore(pills, cols);
    M2._n = blocks.length; M2.sec = 0;

    /* Sprungleiste (Handy) */
    document.querySelectorAll("#app > .m2-jump").forEach(x=>x.remove());
    if(!wide){
      const bar = document.createElement("div"); bar.className = "m2-jump";
      [["Vorlesen",".readaloud"],["Ablauf",".m2-flowb"],["Figuren",".npc-grid"],["Challenges",".challenge"],["Notizen",".adv-notes"]].forEach(x=>{
        const t = document.querySelector(".stage-wrap "+x[1]); if(!t) return;
        const b = document.createElement("button"); b.textContent = x[0]; b.onclick = ()=>t.scrollIntoView({block:"start",behavior:"smooth"}); bar.appendChild(b);
      });
      document.getElementById("app").appendChild(bar);
    }
  },
  show(i){
    const b = document.getElementById("m2b"+i); if(!b) return; M2.sec = i;
    b.scrollIntoView({block:"start",behavior:"smooth"});
    document.querySelectorAll(".m2-pills .m2-pill").forEach((p,k)=>p.classList.toggle("active", k===i));
  },
  step(d){ if(!M2._n) return; const i = Math.max(0, Math.min(M2._n-1, M2.sec+d)); M2.show(i); }
};

/* Szene wechseln: Wegkarte schließen, Abschnitt zurücksetzen */
{ const _go = goScene; goScene = function(i){ const was = M2.map; M2.map = false; if(i!==state.sceneIdx || was) M2.sec = 0; if(was && i===state.sceneIdx){ render(); window.scrollTo({top:0}); return; } _go(i); }; }

/* Zuletzt geöffnet merken */
document.addEventListener("click", e=>{
  if(!M2.on()) return;
  const h = e.target.closest && e.target.closest(".stage-wrap .challenge-head, .stage-wrap .npc-top");
  if(!h) return;
  const isCh = h.classList.contains("challenge-head");
  const nmEl = isCh ? h.querySelector(".ch-name") : h;
  if(!nmEl) return;
  const c = nmEl.cloneNode(true); c.querySelectorAll(".ch-optional-tag,.ch-subtitle,.npc-role,.diff-pips,.ch-diff").forEach(x=>x.remove());
  const name = c.textContent.replace(/[◆◇❖]/g,"").trim().replace(/\s+/g," ").slice(0,60); if(!name) return;
  let r = M2.store("recent",[]).filter(x=>!(x.name===name && x.adv===state.advId));
  r.unshift({name, kind:isCh?"Challenge":"Figur", adv:state.advId, scene:state.sceneIdx}); M2.save("recent", r.slice(0,30));
}, true);

/* Breitenwechsel über die Spaltengrenze: neu aufbauen */
{ let w = M2.wide(); window.addEventListener("resize", ()=>{ const n = M2.wide(); if(n!==w){ w = n; if(M2.on() && state.view==="adventure") render(); } }); }
