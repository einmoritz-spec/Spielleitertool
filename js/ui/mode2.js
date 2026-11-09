/* ============================================================
   Modus 2 — alternative Spielansicht für Wake of the Oldways.
   Reine Umordnung der Standardansicht: Es wird nichts neu
   geschrieben und nichts weggelassen. Alle Elemente der normalen
   Szene werden nur verschoben (Abschnitte links, Figuren/Challenges/
   Revelations/Belohnung/Notizen rechts). Standard bleibt Modus 1.
   ============================================================ */
const M2 = {
  map:false, sec:0,
  on(){ try{ return localStorage.getItem("wake.mode2")==="1"; }catch(e){ return false; } },
  set(v){ try{ localStorage.setItem("wake.mode2", v?"1":"0"); }catch(e){} M2.map=false; M2.sec=0; render(); },
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
    return `<div class="wk-head"><div class="crumbs"><a onclick="goOverview()">Start</a> › ${esc(adv.title)} <span class="wk-meta">· ${adv.scenes.length} Szenen · ${esc(adv.en)}</span></div></div><div class="case-tabbar">${mapTab}${tabs}</div>`;
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
        <div class="m2-box">${renderAdventureNotes(adv)}</div>
      </div>
    </div>`;
  },

  /* ---------- Szene umordnen (nur DOM verschieben) ---------- */
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
    const secs = [];
    const newSec = label => { const d = document.createElement("div"); d.className = "m2-sec"; d.dataset.label = label; secs.push(d); main.appendChild(d); return d; };
    const labelOf = s => { const l = s.querySelector(":scope > .section-label, :scope > details > summary.section-label"); if(!l) return ""; const c = l.cloneNode(true); c.querySelectorAll("button,.line,.raven-icon").forEach(x=>x.remove()); return c.textContent.trim(); };
    const sideBox = (el, chip) => { side.appendChild(el); };
    const isHeadingP = el => { if(el.tagName!=="P") return null; const f = el.firstElementChild; if(!f || !f.classList.contains("section-heading")) return null; let n = el.firstChild; while(n && n!==f){ if(n.textContent.trim()) return null; n = n.nextSibling; } return f.textContent.trim().replace(/:$/,""); };

    let first = null;                       // Abschnitt "Einstieg"
    const ensureFirst = () => first || (first = newSec("Einstieg"));
    let seenFlow = false;
    sections.forEach(s=>{
      const flow = s.querySelector(":scope > .flow");
      if(flow){
        seenFlow = true;
        const lab = s.querySelector(":scope > .section-label");
        let cur = ensureFirst(); if(lab) cur.appendChild(lab);
        let curLabel = "Einstieg";
        [].slice.call(flow.childNodes).forEach(el=>{
          if(el.nodeType!==1){
            if(!el.textContent.trim()) return;
            let lw = cur.lastElementChild; if(!lw || !lw.classList.contains("flow")){ lw = document.createElement("div"); lw.className = "flow"; cur.appendChild(lw); }
            lw.appendChild(el); return;
          }
          const h = isHeadingP(el);
          if(h){ cur = newSec(h); curLabel = h; }
          if(wide && (el.classList.contains("challenge") || el.classList.contains("npc-grid"))){
            const nameEl = el.querySelector(".ch-name, .npc-top");
            const nm = nameEl ? nameEl.textContent.trim().replace(/\s+/g," ").slice(0,60) : "";
            const ptr = document.createElement("div"); ptr.className = "m2-ptr";
            ptr.textContent = (el.classList.contains("challenge")?"Challenge: ":"Figur: ")+nm+" · rechts";
            const target = el; ptr.onclick = ()=>target.scrollIntoView({block:"center",behavior:"smooth"});
            cur.appendChild(ptr); sideBox(el, curLabel);
          } else {
            let w = cur.lastElementChild; if(!w || !w.classList.contains("flow")){ w = document.createElement("div"); w.className = "flow"; cur.appendChild(w); }
            w.appendChild(el);
          }
        });
        s.remove();
        return;
      }
      const isChall = !!s.querySelector(":scope > .section-label .collapse-all-btn");
      const isNpc = !!s.querySelector(":scope > .npc-grid");
      const isRev = !!s.querySelector(":scope > .reveal-row");
      const lab = labelOf(s);
      if(isChall || isNpc || isRev || lab==="Belohnung"){ if(wide){ sideBox(s); } else { newSec(lab||"Weiteres").appendChild(s); } return; }
      if(!seenFlow && s.querySelector(":scope > .readaloud") && !lab){ ensureFirst().appendChild(s); return; }
      let name = lab || (s.querySelector(".tip") ? "Tipps" : s.querySelector(".growth-details") ? "Wachstum" : "Weiteres");
      newSec(name).appendChild(s);
    });
    const live = secs.filter(d=>d.children.length);
    secs.filter(d=>!d.children.length).forEach(d=>d.remove());
    if(notes) side.appendChild(notes);

    /* Revelations abhakbar */
    const rev = M2.store("rev",{});
    (side.querySelectorAll(".reveal-row").length ? side : main).querySelectorAll(".reveal-row").forEach((row,ri)=>{
      const key = adv.id+":"+state.sceneIdx+":"+ri;
      const b = document.createElement("button"); b.className = "m2-cb"+(rev[key]?" on":""); b.title = "Gefunden"; b.textContent = rev[key]?"✓":"";
      b.onclick = ()=>{ const r = M2.store("rev",{}); r[key] = !r[key]; M2.save("rev",r); b.classList.toggle("on", !!r[key]); b.textContent = r[key]?"✓":""; };
      row.insertBefore(b, row.firstChild);
    });

    /* Abschnitts-Knöpfe */
    const pills = document.createElement("div"); pills.className = "m2-pills";
    live.forEach((d,i)=>{ const b = document.createElement("button"); b.className = "m2-pill"; b.textContent = d.dataset.label; b.onclick = ()=>M2.show(i); pills.appendChild(b); });
    if(live.length>1){ const b = document.createElement("button"); b.className = "m2-pill m2-all"; b.textContent = "Alles"; b.onclick = ()=>M2.show(-1); pills.appendChild(b); }

    const cols = document.createElement("div"); cols.className = "m2-cols"+(side.children.length?"":" m2-noside");
    cols.appendChild(main); if(side.children.length) cols.appendChild(side);
    const anchor = head ? head.nextSibling : sw.firstChild;
    sw.insertBefore(cols, anchor);
    if(head) sw.insertBefore(pills, head); else sw.insertBefore(pills, cols);
    M2._n = live.length;
    if(typeof EDIT!=="undefined" && EDIT.on) M2.sec = -1;
    if(M2.sec >= live.length) M2.sec = 0;
    M2.show(live.length>1 ? M2.sec : -1, true);

    /* Sprungleiste (Handy) */
    if(!wide){
      const bar = document.createElement("div"); bar.className = "m2-jump";
      [["Vorlesen",".m2-sec:not(.m2-hide) .readaloud"],["Ablauf",".m2-pills"],["Challenges",".challenge"],["Figuren",".npc-grid"],["Notizen",".adv-notes"]].forEach(x=>{
        const b = document.createElement("button"); b.textContent = x[0];
        b.onclick = ()=>{ let t = document.querySelector(".stage-wrap "+x[1]); if(t && t.closest(".m2-hide")){ M2.show(-1); } if(t) t.scrollIntoView({block:"start",behavior:"smooth"}); };
        if(document.querySelector(".stage-wrap "+x[1])) bar.appendChild(b);
      });
      document.querySelectorAll("body > .m2-jump, #app > .m2-jump").forEach(x=>x.remove());
      document.getElementById("app").appendChild(bar);
    }
  },
  show(i, quiet){
    M2.sec = i;
    const secs = document.querySelectorAll(".m2-main > .m2-sec");
    secs.forEach((d,k)=>d.classList.toggle("m2-hide", i>=0 && k!==i));
    document.querySelectorAll(".m2-pills .m2-pill").forEach((b,k)=>b.classList.toggle("active", b.classList.contains("m2-all") ? i<0 : k===i));
    if(!quiet){ const p = document.querySelector(".m2-pills"); if(p && p.getBoundingClientRect().top<0) p.scrollIntoView({block:"start"}); }
  },
  step(d){ if(!M2._n || M2._n<2) return; let i = M2.sec<0 ? (d>0?0:M2._n-1) : M2.sec+d; if(i<0||i>=M2._n) return; M2.show(i); }
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
