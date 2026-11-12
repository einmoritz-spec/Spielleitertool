/* ============================================================
   Charakterbogen (PDF) — füllt den ORIGINALEN, ausfüllbaren Charakterbogen von
   Legend in the Mist (assets/charakterbogen.pdf: Hero Card, Backpack, Fellowship
   Card, 4 Theme Cards + Rückseiten) mit den Daten eines Charakters und liest
   solche PDFs wieder ein.
     CharSheet.fill(character)     → Promise<Uint8Array>   ausgefülltes PDF
     CharSheet.download(character) → lädt das PDF herunter
     CharSheet.share(character)    → Teilen-Menü des Geräts, sonst Download
     CharSheet.read(arrayBuffer)   → Promise<Charakter>     liest ein (ggf. von Hand
                                      geändertes) PDF zurück (Formularfelder)
   Zusätzlich steckt der komplette Charakter als JSON im PDF (Info-Eintrag
   LMCharacter) – so gehen auch Daten ohne Feld auf dem Bogen nicht verloren.
   Alles läuft lokal im Browser (pdf-lib, shared/lib/pdf-lib.min.js).
   ============================================================ */
var CharSheet = (function(){
  const ROOT = new URL("../", (document.currentScript && document.currentScript.src) || location.href).href;
  const MAP={"name":"Text Field 36","player":"Text Field 35","fellowship":[["Text Field 2","Text Field 30"],["Text Field 4","Text Field 32"],["Text Field 3","Text Field 31"],["Text Field 5","Text Field 33"],["Text Field 6","Text Field 34"]],"promise":["Check Box 521","Check Box 522","Check Box 523","Check Box 524","Check Box 525"],"quint":["Text Field 429","Text Field 428","Text Field 427","Text Field 430"],"backpack":["Text Field 17","Text Field 10","Text Field 22","Text Field 8","Text Field 18","Text Field 12","Text Field 24","Text Field 20","Text Field 14","Text Field 27"],"notes":["Text Field 26","Text Field 21","Text Field 16","Text Field 29"],"fel":{"title":"Text Field 48","tags":["Text Field 52","Text Field 43","Text Field 47","Text Field 44","Text Field 49","Text Field 45","Text Field 50"],"weak":["Text Field 46","Text Field 51"],"quest":["Text Field 55","Text Field 54","Text Field 53"],"scratch":["Check Box 509","Check Box 5013","Check Box 5014","Check Box 5015","Check Box 5016","Check Box 5017","Check Box 5018","Check Box 5019"],"abandon":["Check Box 512","Check Box 511","Check Box 510"],"improve":["Check Box 515","Check Box 514","Check Box 513"],"milestone":["Check Box 518","Check Box 517","Check Box 516"],"special":["Text Field 56","Text Field 60","Text Field 58","Text Field 61","Text Field 59","Text Field 62","Text Field 64","Text Field 63","Text Field 67","Text Field 65","Text Field 68","Text Field 66","Text Field 69","Text Field 70","Text Field 71"]},"themes":[{"type":"Text Field 42","lines":["Text Field 23","Text Field 9","Text Field 19","Text Field 13","Text Field 25","Text Field 15","Text Field 28"],"weak":["Text Field 37","Text Field 38"],"quest":["Text Field 41","Text Field 40","Text Field 39"],"scratch":["Check Box 5021","Check Box 5022","Check Box 5023","Check Box 5024","Check Box 5025","Check Box 5026","Check Box 5027"],"abandon":["Check Box 528","Check Box 527","Check Box 526"],"improve":["Check Box 531","Check Box 530","Check Box 529"],"milestone":["Check Box 534","Check Box 533","Check Box 532"],"special":["Text Field 153","Text Field 111","Text Field 135","Text Field 119","Text Field 144","Text Field 123","Text Field 148","Text Field 155","Text Field 154","Text Field 158","Text Field 156","Text Field 159","Text Field 157","Text Field 160","Text Field 161","Text Field 162"]},{"type":"Text Field 73","lines":["Text Field 80","Text Field 72","Text Field 78","Text Field 74","Text Field 81","Text Field 75","Text Field 83"],"weak":["Text Field 76","Text Field 84"],"quest":["Text Field 82","Text Field 79","Text Field 77"],"scratch":["Check Box 5029","Check Box 5030","Check Box 5031","Check Box 5032","Check Box 5033","Check Box 5034","Check Box 5035"],"abandon":["Check Box 537","Check Box 536","Check Box 535"],"improve":["Check Box 540","Check Box 539","Check Box 538"],"milestone":["Check Box 543","Check Box 542","Check Box 541"],"special":["Text Field 165","Text Field 163","Text Field 172","Text Field 167","Text Field 174","Text Field 169","Text Field 176","Text Field 166","Text Field 164","Text Field 173","Text Field 168","Text Field 175","Text Field 170","Text Field 177","Text Field 171","Text Field 178"]},{"type":"Text Field 87","lines":["Text Field 101","Text Field 85","Text Field 97","Text Field 89","Text Field 103","Text Field 91","Text Field 107"],"weak":["Text Field 93","Text Field 109"],"quest":["Text Field 105","Text Field 99","Text Field 95"],"scratch":["Check Box 5037","Check Box 5038","Check Box 5039","Check Box 5040","Check Box 5041","Check Box 5042","Check Box 5043"],"abandon":["Check Box 546","Check Box 545","Check Box 544"],"improve":["Check Box 549","Check Box 548","Check Box 547"],"milestone":["Check Box 552","Check Box 551","Check Box 550"],"special":["Text Field 181","Text Field 179","Text Field 188","Text Field 183","Text Field 190","Text Field 185","Text Field 192","Text Field 182","Text Field 180","Text Field 189","Text Field 184","Text Field 191","Text Field 186","Text Field 193","Text Field 187","Text Field 194"]},{"type":"Text Field 88","lines":["Text Field 102","Text Field 86","Text Field 98","Text Field 90","Text Field 104","Text Field 92","Text Field 108"],"weak":["Text Field 94","Text Field 110"],"quest":["Text Field 106","Text Field 100","Text Field 96"],"scratch":["Check Box 5045","Check Box 5046","Check Box 5047","Check Box 5048","Check Box 5049","Check Box 5050","Check Box 5051"],"abandon":["Check Box 555","Check Box 554","Check Box 553"],"improve":["Check Box 558","Check Box 557","Check Box 556"],"milestone":["Check Box 561","Check Box 560","Check Box 559"],"special":["Text Field 197","Text Field 195","Text Field 204","Text Field 199","Text Field 206","Text Field 201","Text Field 208","Text Field 198","Text Field 196","Text Field 205","Text Field 200","Text Field 207","Text Field 202","Text Field 209","Text Field 203","Text Field 210"]}]};
  let libP = null;
  function lib(){
    if(window.PDFLib) return Promise.resolve(window.PDFLib);
    if(libP) return libP;
    return libP = new Promise((res,rej)=>{ const s = document.createElement("script"); s.src = ROOT+"shared/lib/pdf-lib.min.js"; s.onload = ()=>res(window.PDFLib); s.onerror = ()=>rej(new Error("pdf-lib konnte nicht geladen werden")); document.head.appendChild(s); });
  }
  const str = v => (typeof v==="string" ? v : (v==null ? "" : String(v)));
  const b64enc = s => { const u = new TextEncoder().encode(s); let b = ""; u.forEach(c=>b+=String.fromCharCode(c)); return btoa(b); };
  const b64dec = s => { const b = atob(s), u = new Uint8Array(b.length); for(let i=0;i<b.length;i++) u[i]=b.charCodeAt(i); return new TextDecoder().decode(u); };
  const INFO_KEY = "LMCharacter";

  /* ---------- Schreiben ---------- */
  async function fill(c){
    const L = await lib(), { PDFDocument, StandardFonts, PDFName, PDFString, TextAlignment } = L;
    const bytes = await (await fetch(ROOT+"assets/charakterbogen.pdf")).arrayBuffer();
    const doc = await PDFDocument.load(bytes), form = doc.getForm();
    const font = await doc.embedFont(StandardFonts.TimesRoman), bold = await doc.embedFont(StandardFonts.TimesRomanBold);
    const safe = (s,f)=>{ let o = ""; for(const ch of str(s).replace(/\s+/g," ")){ try{ (f||font).encodeText(ch); o += ch; }catch(e){ o += "?"; } } return o.trim(); };
    const fields = {};
    const tf = n=>{ if(fields[n]) return fields[n]; try{ const f = form.getTextField(n); const w = f.acroField.getWidgets()[0], r = w.getRectangle(); if(r.height>24 && n!==MAP.name){ w.setRectangle({x:r.x,y:r.y,width:r.width,height:20}); } fields[n] = f; return f; }catch(e){ return null; } };
    const put = (n,text,o)=>{
      o = o||{}; const f = tf(n); if(!f) return; const fnt = o.font||font; const t = safe(text,fnt); const r = f.acroField.getWidgets()[0].getRectangle();
      let sz = o.max||11; const maxW = r.width-6; while(sz>6 && fnt.widthOfTextAtSize(t,sz)>maxW) sz -= .5;
      let out = t; while(out.length>1 && fnt.widthOfTextAtSize(out,sz)>maxW) out = out.slice(0,-1);
      f.setText(out); f.setFontSize(sz); if(o.center) f.setAlignment(TextAlignment.Center); f.updateAppearances(fnt);
    };
    const chk = (n,on)=>{ try{ const b = form.getCheckBox(n); on ? b.check() : b.uncheck(); }catch(e){} };
    const pips = (names,n)=>names.forEach((nm,i)=>chk(nm,i<(n|0)));
    const wrap = (text,width,sz,fnt,n)=>{ const out = [], words = safe(text,fnt).split(" ").filter(Boolean); let cur = "";
      for(const w of words){ const t = cur ? cur+" "+w : w; if(fnt.widthOfTextAtSize(t,sz)<=width || !cur) cur = t; else { out.push(cur); cur = w; } } if(cur) out.push(cur); return out.length<=n ? out : null; };
    const putWrapped = (names,text)=>{
      const f0 = tf(names[0]); if(!f0) return; const w = f0.acroField.getWidgets()[0].getRectangle().width-6; let lines = null, sz = 10;
      for(; sz>=6.5; sz-=.5){ lines = wrap(text,w,sz,font,names.length); if(lines) break; }
      if(!lines){ sz = 6.5; lines = wrap(text,w,sz,font,99).slice(0,names.length); }
      names.forEach((n,i)=>put(n,lines[i]||"",{max:sz}));
    };
    const theme = (th,m,nTags)=>{
      th = th||{}; const tags = Array.isArray(th.powerTags) ? th.powerTags : [], meta = Array.isArray(th.powerTagsMeta) ? th.powerTagsMeta : [];
      if(m.type) put(m.type,th.category,{font:bold,max:11});
      put(m.lines[0],th.title,{font:bold}); chk(m.scratch[0],!!th.titleScratched);
      for(let i=0;i<nTags;i++){ put(m.lines[i+1],tags[i]||""); chk(m.scratch[i+1],!!(meta[i] && meta[i].scratched)); }
      put(m.weak[0],th.weakness); put(m.weak[1],th.weakness2);
      putWrapped(m.quest,th.quest);
      pips(m.abandon,th.abandon); pips(m.improve,th.improve); pips(m.milestone,th.milestone);
      const sp = Array.isArray(th.specialImprovements) ? th.specialImprovements : [];
      m.special.forEach((n,i)=>put(n,sp[i]||""));
    };
    /* Hero Card */
    { const f = tf(MAP.name), nm = safe(c.name,bold); if(f){ f.enableMultiline(); f.setAlignment(TextAlignment.Center); let sz = 24; const wd = f.acroField.getWidgets()[0].getRectangle(); for(;sz>9;sz-=1){ const lines = wrap(nm,wd.width-8,sz,bold,3); if(lines && lines.length*sz*1.15<=wd.height-6) break; } f.setText(nm); f.setFontSize(sz); f.updateAppearances(bold); } }
    put(MAP.player,c.playerName);
    const fel = Array.isArray(c.fellowship) ? c.fellowship : [];
    MAP.fellowship.forEach((p,i)=>{ put(p[0],fel[i] && fel[i].companion); put(p[1],fel[i] && fel[i].tag); });
    pips(MAP.promise,c.promise);
    const q = Array.isArray(c.quintessences) ? c.quintessences : []; MAP.quint.forEach((n,i)=>put(n,q[i]||""));
    const bp = Array.isArray(c.backpackItems) ? c.backpackItems : []; MAP.backpack.forEach((n,i)=>put(n,bp[i]||""));
    noteLines(c).forEach((t,i)=>{ if(MAP.notes[i]) put(MAP.notes[i],t); });
    /* Theme Cards */
    const th = Array.isArray(c.themes) ? c.themes : []; MAP.themes.forEach((m,i)=>theme(th[i],m,6));
    theme(c.fellowshipTheme,Object.assign({type:null},MAP.fel,{lines:[MAP.fel.title].concat(MAP.fel.tags),scratch:MAP.fel.scratch}),7);
    /* Rohdaten im PDF ablegen */
    try{ doc.getInfoDict().set(PDFName.of(INFO_KEY),PDFString.of(b64enc(JSON.stringify(c)))); doc.setTitle((c.name||"Charakter")+" – Charakterbogen"); doc.setSubject("Legend in the Mist – Charakterbogen"); }catch(e){}
    return await doc.save();
  }
  /* Notizen-Zeilen: Trope/Notiz + Abschlussnotiz, sonst eigene Liste */
  function noteLines(c){ if(Array.isArray(c.notes) && c.notes.length) return c.notes.map(str); return [str(c.tropeTitle||c.extraNote), str(c.closingNote)].filter((t,i,a)=>t || a.slice(i+1).some(Boolean)); }

  /* ---------- Lesen ---------- */
  async function read(buf){
    const L = await lib(), { PDFDocument, PDFName } = L;
    const doc = await PDFDocument.load(buf,{ignoreEncryption:true}), form = doc.getForm();
    if(!form.getFields().some(f=>f.getName()===MAP.name)) throw new Error("Das ist kein Charakterbogen von Legend in the Mist.");
    const txt = n=>{ try{ return form.getTextField(n).getText()||""; }catch(e){ return ""; } };
    const chk = n=>{ try{ return form.getCheckBox(n).isChecked(); }catch(e){ return false; } };
    const cnt = names=>names.filter(chk).length;
    let raw = null;
    const nz = s=>str(s).replace(/\s+/g," ").trim();
    const pick = (f,r)=>{ f = nz(f); r = nz(r); return (f && r && r.length>f.length && r.startsWith(f)) ? r : f; };
    try{ const v = doc.getInfoDict().get(PDFName.of(INFO_KEY)); if(v) raw = JSON.parse(b64dec(v.decodeText())); }catch(e){}
    const theme = (m,nTags,i,rt)=>{
      rt = rt||{}; const rtags = Array.isArray(rt.powerTags) ? rt.powerTags : [];
      const lines = m.lines.map(txt), scr = m.scratch.map(chk), tags = [], meta = [];
      for(let k=1;k<=nTags;k++) if(lines[k].trim()){ tags.push(pick(lines[k],rtags[k-1])); meta.push({scratched:scr[k]}); }
      const t = { num:i+1, category:m.type?txt(m.type).trim():"", title:pick(lines[0],rt.title), titleScratched:scr[0], powerTags:tags, powerTagsMeta:meta,
        weakness:pick(txt(m.weak[0]),rt.weakness), weakness2:pick(txt(m.weak[1]),rt.weakness2), quest:pick(m.quest.map(txt).map(s=>s.trim()).filter(Boolean).join(" "),rt.quest),
        abandon:cnt(m.abandon), improve:cnt(m.improve), milestone:cnt(m.milestone), specialImprovements:m.special.map(txt).map(s=>s.trim()).filter(Boolean) };
      const has = t.category||t.title||tags.length||t.weakness||t.weakness2||t.quest||t.abandon||t.improve||t.milestone||t.specialImprovements.length||scr.some(Boolean);
      return has ? t : null;
    };
    const themes = MAP.themes.map((m,i)=>theme(m,6,i,raw && raw.themes && raw.themes[i])).filter(Boolean);
    const fm = Object.assign({type:null},MAP.fel,{lines:[MAP.fel.title].concat(MAP.fel.tags),scratch:MAP.fel.scratch});
    const ft = theme(fm,7,0,raw && raw.fellowshipTheme); if(ft) delete ft.num;
    const notes = MAP.notes.map(txt).map(s=>s.trim());
    const same = raw && JSON.stringify(noteLines(raw).map(s=>s.trim()))===JSON.stringify(notes.filter((t,i,a)=>t || a.slice(i+1).some(Boolean)));
    const c = {
      name:pick(txt(MAP.name),raw && raw.name)||"Importierter Charakter", playerName:txt(MAP.player).trim(),
      tropeTitle: same ? str(raw.tropeTitle||raw.extraNote) : notes[0]||"", closingNote: same ? str(raw.closingNote) : notes[1]||"", notes:notes.filter(Boolean),
      backpackItems:MAP.backpack.map((n,i)=>pick(txt(n),raw && raw.backpackItems && raw.backpackItems[i])).filter(Boolean),
      fellowship:MAP.fellowship.map(p=>({companion:txt(p[0]).trim(),tag:txt(p[1]).trim()})).filter(r=>r.companion||r.tag),
      promise:cnt(MAP.promise), quintessences:MAP.quint.map(txt).map(s=>s.trim()).filter(Boolean),
      themes, createdAt:(raw && raw.createdAt) || "",
    };
    if(ft) c.fellowshipTheme = ft;
    c.extraNote = c.tropeTitle;
    return c;
  }

  /* ---------- Speichern / Teilen ---------- */
  const fname = c=>(str(c.name).trim().replace(/[^a-zA-Z0-9äöüÄÖÜß _-]/g,"").replace(/\s+/g,"_").slice(0,60)||"charakter")+"_Charakterbogen.pdf";
  async function download(c){
    const blob = new Blob([await fill(c)],{type:"application/pdf"}), url = URL.createObjectURL(blob), a = document.createElement("a");
    a.href = url; a.download = fname(c); document.body.appendChild(a); a.click(); a.remove(); setTimeout(()=>URL.revokeObjectURL(url),4000);
  }
  async function share(c){
    const file = new File([await fill(c)],fname(c),{type:"application/pdf"});
    try{ if(navigator.canShare && navigator.canShare({files:[file]})){ await navigator.share({files:[file],title:"Charakter: "+c.name}); return; } }catch(e){ if(e && e.name==="AbortError") return; }
    const url = URL.createObjectURL(file), a = document.createElement("a"); a.href = url; a.download = file.name; document.body.appendChild(a); a.click(); a.remove(); setTimeout(()=>URL.revokeObjectURL(url),4000);
  }
  return { fill, read, download, share };
})();
