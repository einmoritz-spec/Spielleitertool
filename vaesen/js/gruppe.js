/* Vaesen – Gruppe-Leiste: Spielercharaktere (aus der Charaktererstellung) mit anklickbaren Zuständen, unten im Abenteuer. */
var GRP_KEY = "vae_grp_v1", GRP = null;
function grpLoad(){ if(!GRP){ try{ GRP = JSON.parse(localStorage.getItem(GRP_KEY) || "{}"); }catch(e){ GRP = {}; } GRP.z = GRP.z || {}; } return GRP; }
function grpSave(){ try{ localStorage.setItem(GRP_KEY, JSON.stringify(GRP)); }catch(e){} }
function grpZ(){ var z = VAE_REGELN.filter(function(r){ return r.id === "zustaende"; })[0].b[1].x; return {k:z[0][2], g:z[1][2]}; }
function grpTabOk(){ return cur === "som" && ["an", "orte", "kf"].indexOf(sub.split("/")[1]) > -1; }
function grpPlayers(){ return loadChars().filter(function(c){ return c.spielt; }); }
function grpRow(id, art, lab, names, st){
  return '<div class="vu-zr" title="' + lab + '">' + names.map(function(n, i){ return '<span class="vu-zz' + (st[i] ? ' vu-on' : '') + '" onclick="grpTog(\'' + id + '\',\'' + art + '\',' + i + ')">' + n + '</span>'; }).join("") +
    '<span class="vu-zz vu-bro' + (st[3] ? ' vu-on' : '') + '" onclick="grpTog(\'' + id + '\',\'' + art + '\',3)">Gebrochen</span></div>';
}
function grpHtml(){
  var g = grpLoad(), chars = grpPlayers(), zn = grpZ();
  if(g.hide) return '<div class="vu-dock vu-min" onclick="grpHide(false)"><div class="vu-lab2">▴ GRUPPE</div></div>';
  return '<div class="vu-dock"><div class="vu-lab">GRUPPE</div>' + chars.map(function(c){
    var ar = VAE_ARCH.filter(function(x){ return x.id === c.arch; })[0] || {name:""}, z = g.z[c.id] || {k:[0, 0, 0, 0], g:[0, 0, 0, 0]};
    var br = z.k[3] || z.g[3];
    return '<div class="vu-pc' + (br ? ' vu-br' : '') + '"><img src="' + IMG("charaktere_archetyp_" + c.arch, "thumb") + '" alt=""><div><div class="vu-nm"><b>' + esc(c.name || ar.name) + '</b><small>' + esc(ar.name) + ' · ' + ATTRS.map(function(k){ return k.slice(0, 2) + " " + c.attr[k]; }).join(" · ") + '</small></div>' +
      grpRow(c.id, "k", "Körperl.", zn.k, z.k) + grpRow(c.id, "g", "Geistig", zn.g, z.g) + '</div></div>';
  }).join("") + '<div class="vu-add" onclick="grpHide(true)" title="Gruppe einklappen">⌄</div></div>';
}
function grpTog(id, art, i){
  var g = grpLoad(); g.z[id] = g.z[id] || {k:[0, 0, 0, 0], g:[0, 0, 0, 0]}; g.z[id][art][i] = g.z[id][art][i] ? 0 : 1; grpSave(); grpAfter();
}
function grpHide(on){ grpLoad().hide = on ? 1 : 0; grpSave(); grpAfter(); }
function grpAfter(){
  var el = document.getElementById("grpDock");
  if(!grpTabOk() || !grpPlayers().length){ if(el) el.remove(); document.body.classList.remove("has-dock"); return; }
  if(!el){ el = document.createElement("div"); el.id = "grpDock"; document.body.appendChild(el); }
  el.innerHTML = grpHtml(); document.body.classList.toggle("has-dock", !grpLoad().hide);
}
