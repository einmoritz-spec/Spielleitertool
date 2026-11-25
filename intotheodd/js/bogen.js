/* Charakterbogen: im Tool ausfüllen (wird im Browser gespeichert) und als ausfüllbares PDF laden */
var BG_KEY = "ito_bogen_v1";
function bgLoad(){ try{ return JSON.parse(localStorage.getItem(BG_KEY) || "{}"); }catch(e){ return {}; } }
function bgSave(){
  var o = {}; [].forEach.call(document.querySelectorAll(".sheet [data-f]"), function(e){ o[e.dataset.f] = e.value; });
  try{ localStorage.setItem(BG_KEY, JSON.stringify(o)); }catch(e){}
}
function bgIn(f, v, cls, ph){ return '<input class="' + (cls || "") + '" data-f="' + f + '" value="' + esc(v[f] || "") + '" placeholder="' + esc(ph || "") + '" oninput="bgSave()">'; }
function bgTa(f, v, cls){ return '<textarea class="' + (cls || "") + '" data-f="' + f + '" oninput="bgSave()">' + esc(v[f] || "") + '</textarea>'; }
function viewBogen(){
  var v = bgLoad();
  function wert(k, t){ return '<div class="bw"><b>' + t + '</b><div class="bwn">' + bgIn(k + "n", v, "big") + '<i>jetzt</i></div><div class="bwm">' + bgIn(k + "m", v, "mid") + '<i>Höchstwert</i></div></div>'; }
  var waf = [0, 1, 2].map(function(i){ return '<div class="bz">' + bgIn("w" + i, v, "", "Waffe") + bgIn("ws" + i, v, "sm", "Schaden") + '</div>'; }).join("");
  return '<div class="rp"><div class="sheet"><header><h2>Charakterbogen</h2><span>Into the Odd</span></header>' +
    '<div class="brow"><label>Name' + bgIn("name", v) + '</label><label>Herkunft und Startpaket' + bgIn("her", v) + '</label></div>' +
    '<div class="bws">' + wert("st", "Stärke") + wert("ge", "Geschicklichkeit") + wert("wi", "Willenskraft") + '<div class="bw"><b>Trefferschutz</b><div class="bwn">' + bgIn("hpn", v, "big") + '<i>jetzt</i></div><div class="bwm">' + bgIn("hpm", v, "mid") + '<i>Höchstwert</i></div></div><div class="bw"><b>Rüstung</b><div class="bwn">' + bgIn("rue", v, "big") + '<i>Punkte</i></div></div></div>' +
    '<div class="bcols"><div><h3>Waffen</h3>' + waf + '<h3>Geld</h3><div class="bz">' + bgIn("g", v, "sm", "Gold") + bgIn("s", v, "sm", "Silber") + bgIn("k", v, "sm", "Kupfer") + '</div><h3>Erfahrung</h3>' + bgIn("erf", v, "", "Expeditionen und Stufe") + '</div>' +
    '<div><h3>Ausrüstung</h3>' + bgTa("aus", v, "tall") + '</div><div><h3>Arcana</h3>' + bgTa("arc", v, "tall") + '</div></div>' +
    '<h3>Kritischer Schaden und Notizen</h3>' + bgTa("not", v, "note") + '</div>' +
    '<div class="bbtn noprint"><button id="bgPdf" onclick="bgPdf(this)">Als ausfüllbares PDF laden</button><button onclick="bgClear()">Leeren</button></div></div>';
}
function bgPdf(b){ bgSave(); FillPDF.make(document.querySelector(".sheet"), {name:"Into the Odd – " + ((bgLoad().name) || "Charakterbogen"), knopf:b, bg:"#fbfaf6"}); }
function bgClear(){ if(confirm("Alle Felder leeren?")){ try{ localStorage.removeItem(BG_KEY); }catch(e){} render(); } }
