/* Regelblatt (eigene Kurzfassung der Kernmechanik) und Würfler */
const RULES_HTML = `
<div class="roller" id="roller">
  <div class="rl-row"><label>Power</label>
    <button class="btn" onclick="rlStep(-1)">−</button><input type="number" id="rlPower" value="0" aria-label="Power"><button class="btn" onclick="rlStep(1)">+</button>
    <button class="rl-go" onclick="rlRoll()">Würfeln 2W6</button></div>
  <div class="rl-out" id="rlOut"></div>
  <div class="rl-log" id="rlLog"></div>
</div>
<h3>Der Wurf</h3>
<p>2W6 + Power. <b>Power</b> = +1 je hilfreichem Tag, −1 je hinderndem Tag, + Tier des besten hilfreichen Status, − Tier des schlechtesten schädlichen Status (dazu ggf. Scale-Unterschied). Power kann negativ sein.</p>
<table class="rt"><tr><th>Ergebnis</th><th>Bedeutung</th></tr>
<tr><td><b>10+</b></td><td>Voller Erfolg, keine Consequences</td></tr>
<tr><td><b>7–9</b></td><td>Erfolg, aber mit Consequences</td></tr>
<tr><td><b>6−</b></td><td>Miss: Consequences, kein Nutzen</td></tr>
<tr><td>Snake Eyes (1+1)</td><td>immer Miss</td></tr>
<tr><td>Boxcars (6+6)</td><td>immer voller Erfolg</td></tr></table>
<h3>Effects (Power ausgeben)</h3>
<table class="rt"><tr><td>1 Power</td><td>1 Tier Status hinzufügen oder entfernen · Discover (nützliches Detail) · Extra Feat</td></tr>
<tr><td>2 Power</td><td>1 Tag hinzufügen oder entfernen</td></tr></table>
<h3>Power-Optionen</h3>
<p><b>Burn:</b> einen eigenen positiven Tag vor dem Wurf verbrennen, er zählt +3 statt +1.<br><b>Push:</b> bei 10+ Consequences annehmen für +1 Power.<br><b>Go Out In A Blaze:</b> Theme opfern bzw. Figur riskieren für ein großes narratives Ziel.</p>
<h3>Spielleitung</h3>
<p><b>Consequences</b> entstehen bei Miss/7–9 und wenn eine Threat zuschlägt. Die Spielleitung würfelt nie. <b>Mitigate:</b> Spieler:in kann Consequences mit einem eigenen Wurf abschwächen (1 Power = 1 Status-Tier, 2 Power = 1 Tag).</p>`;
function toggleRules(){
  const d = document.getElementById("rulesDrawer");
  if(d.hidden){ if(!document.getElementById("rollerBuilt")){ document.getElementById("rulesBody").innerHTML = RULES_HTML + '<span id="rollerBuilt"></span>'; } d.hidden = false; }
  else d.hidden = true;
}
function openRules(){ const d = document.getElementById("rulesDrawer"); if(d.hidden) toggleRules(); }
function rlStep(d){ const i = document.getElementById("rlPower"); i.value = (+i.value||0)+d; }
const RL_LOG = [];
function rlRoll(){
  const p = +document.getElementById("rlPower").value||0;
  const a = 1+Math.floor(Math.random()*6), b = 1+Math.floor(Math.random()*6), sum = a+b, tot = sum+p;
  let cls, txt;
  if(a===1&&b===1){ cls="miss"; txt="Snake Eyes – Miss"; }
  else if(a===6&&b===6){ cls="hit"; txt="Boxcars – voller Erfolg"; }
  else if(tot>=10){ cls="hit"; txt="Voller Erfolg"; }
  else if(tot>=7){ cls="mix"; txt="Erfolg mit Consequences"; }
  else { cls="miss"; txt="Miss"; }
  document.getElementById("rlOut").innerHTML = `<span class="die">${a}</span><span class="die">${b}</span><span>${sum} ${p>=0?"+":"−"} ${Math.abs(p)} = <b>${tot}</b></span><span class="rl-res ${cls}">${txt}</span>`;
  RL_LOG.unshift(`${a}+${b}${p?(p>0?"+":"")+p:""} = ${tot}`); if(RL_LOG.length>6) RL_LOG.pop();
  document.getElementById("rlLog").textContent = "Zuletzt: " + RL_LOG.join(" · ");
}
