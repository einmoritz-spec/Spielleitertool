/* City of Mist – gemeinsame Helfer und Routing.
   Hash: #start (Übersetting-Start) | #ss/… (Shadows & Showdowns) | #rw/<tab>[/<abschnitt>] (Grundregelwerk).
   Alte Hashes (#spieler, #sl/…) werden auf #ss/… umgelenkt. */
function esc(s){ return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"); }
function md(s){ return esc(s).replace(/\*\*(.+?)\*\*/g,"<b>$1</b>").replace(/(^|[^*\w])\*([^*\s][^*]*?)\*(?!\*)/g,"$1<i>$2</i>"); }
function pg(p,pe){ return p ? '<span class="pg">S. '+p+(pe&&pe!==p?'–'+pe:'')+'</span>' : ''; }
function pips(n){ return n>0 ? '<span class="pips">'+'◆'.repeat(n)+'</span>' : ''; }
function route(){
  var h=(location.hash||"").slice(1).split("/");
  if(h[0]==="spieler"||h[0]==="sl") h.unshift("ss");
  if(h[0]==="tb") return {sys:"tb",tab:h[1]||"",sub:h[2]||"",cat:h[3]||""};
  if(h[0]==="ss"||h[0]==="rw") return {sys:h[0],tab:h[1]||"start",sub:h[2]||"",cat:h[3]||""};
  return {sys:"hub",tab:"start",sub:"",cat:""};
}
function go(path){ location.hash=path; }
function gs(path){ go("ss/"+path); }
function gr(path){ go("rw/"+path); }

/* Bilder ungeschnitten einbauen: Klasse nach Seitenverhältnis (Streifen ganzbreit, Querformat/Quadrat/Hochformat schwebend im Text) */
function imFit(i){ if(!i.naturalHeight) return; var r=i.naturalWidth/i.naturalHeight; i.classList.add(r>=2.2?'im-strip':r>=1.25?'im-land':r>=0.85?'im-sq':r>=0.45?'im-port':'im-tall'); }
function imf(name){ return '<img class="imf" data-lb loading="lazy" alt="" src="img/'+name+'.webp" onload="imFit(this)">'; }
