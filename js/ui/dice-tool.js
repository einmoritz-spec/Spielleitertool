/* ---------- Würfel- & Zufallstool ---------- */
function openDice(){
  document.getElementById("diceModal").classList.add("open");
  renderDiceModal();
}
function closeDice(){
  document.getElementById("diceModal").classList.remove("open");
}
function setDiceTab(tab){
  state.diceTab = tab;
  renderDiceModal();
}
function adjustDicePower(delta){
  state.dicePower = Math.max(-3, Math.min(8, state.dicePower + delta));
  renderDiceModal();
}
function rollDice(){
  const d1 = 1 + Math.floor(Math.random()*6);
  const d2 = 1 + Math.floor(Math.random()*6);
  const power = state.dicePower;
  const total = d1 + d2 + power;
  const isDoubleOne = d1===1 && d2===1;
  const isDoubleSix = d1===6 && d2===6;
  const consequence = total<=9 || isDoubleOne;
  const success = total>=7 || isDoubleSix;
  let outcome;
  if(consequence && success) outcome = "both";
  else if(success) outcome = "success";
  else outcome = "consequence";
  state.diceLastRoll = { d1, d2, power, total, outcome, isDoubleOne, isDoubleSix };
  renderDiceModal();
}
function rollYesBut(){
  let idx;
  do{ idx = Math.floor(Math.random()*DICE_YES_BUT_TABLE.length); }
  while(idx===state.diceLastYesBut && DICE_YES_BUT_TABLE.length>1);
  state.diceLastYesBut = idx;
  renderDiceModal();
}
function setDiceNameFilter(f){
  state.diceNameFilter = f;
  renderDiceModal();
}
function rollName(){
  const f = state.diceNameFilter;
  const pools = f==="any" ? ["female","male","neutral"] : [f];
  const pool = pools[Math.floor(Math.random()*pools.length)];
  const first = NAME_TABLE[pool][Math.floor(Math.random()*NAME_TABLE[pool].length)];
  const surname = NAME_TABLE.surname[Math.floor(Math.random()*NAME_TABLE.surname.length)];
  state.diceLastName = `${first} ${surname}`;
  renderDiceModal();
}
function renderDiceModal(){
  const tab = state.diceTab;
  document.getElementById("diceTabs").innerHTML = `
    <button class="dice-tab-btn ${tab==='roll'?'active':''}" onclick="setDiceTab('roll')">🎲 2W6-Wurf</button>
    <button class="dice-tab-btn ${tab==='yesbut'?'active':''}" onclick="setDiceTab('yesbut')">💭 Yes, But…</button>
    <button class="dice-tab-btn ${tab==='name'?'active':''}" onclick="setDiceTab('name')">📛 Namen</button>`;

  let body = "";
  if(tab==="roll"){
    const r = state.diceLastRoll;
    body = `
    <div class="dice-pane">
      <div class="dice-row">
        <span class="dice-power-label">Power</span>
        <div class="dice-power-ctrl">
          <button class="dice-power-btn" onclick="adjustDicePower(-1)" aria-label="Power verringern">–</button>
          <span class="dice-power-val">${state.dicePower>0?'+':''}${state.dicePower}</span>
          <button class="dice-power-btn" onclick="adjustDicePower(1)" aria-label="Power erhöhen">+</button>
        </div>
        <button class="dice-roll-btn" onclick="rollDice()">2W6 würfeln</button>
      </div>
      ${r ? `
      <div class="dice-result">
        <div class="dice-pips">
          <div class="dice-pip ${r.d1===1?'one':''} ${r.d1===6?'six':''}">${r.d1}</div>
          <div class="dice-pip ${r.d2===1?'one':''} ${r.d2===6?'six':''}">${r.d2}</div>
        </div>
        <div class="dice-total">Würfel + Power = <strong>${r.total}</strong> <span style="color:var(--text-faint)">(${r.d1}+${r.d2}${r.power!==0?(r.power>0?'+'+r.power:r.power):''})</span></div>
        <span class="dice-outcome ${r.outcome}">${r.outcome==='both'?'Erfolg mit Folgen (7–9)':r.outcome==='success'?'Voller Erfolg':'Nur Folgen (Consequences)'}</span>
        ${r.isDoubleOne?`<div class="dice-note">Doppel-Eins gewürfelt — Folgen treten auch bei hohem Power-Bonus ein.</div>`:``}
        ${r.isDoubleSix?`<div class="dice-note">Doppel-Sechs gewürfelt — Erfolg gilt auch bei niedrigem Power-Bonus.</div>`:``}
      </div>` : `<div class="dice-result empty">Noch nicht gewürfelt.</div>`}
      <div class="dice-hint">Regel: Endergebnis 9 oder weniger (oder Doppel-Eins) → Consequences. 7 oder mehr (oder Doppel-Sechs) → Success. 7–9 → beides. Siehe 📖 Regelglossar, „Roll the Dice“.</div>
    </div>`;
  } else if(tab==="yesbut"){
    const idx = state.diceLastYesBut;
    body = `
    <div class="dice-pane">
      <div class="dice-row">
        <button class="dice-roll-btn" onclick="rollYesBut()">Impuls ziehen</button>
      </div>
      ${idx!==null ? `
      <div class="dice-yesbut-card">
        <div class="dice-yesbut-num">Impuls ${idx+1} / ${DICE_YES_BUT_TABLE.length}</div>
        <div class="dice-yesbut-text">${esc(DICE_YES_BUT_TABLE[idx])}</div>
      </div>` : `<div class="dice-result empty">Noch kein Impuls gezogen.</div>`}
      <div class="dice-hint">Eigene Inspirationssammlung für „Ja, aber…“-Ergebnisse (7–9) oder wenn spontan eine Complication ausformuliert werden muss — kein Buchinhalt, sondern freie GM-Hilfe.</div>
    </div>`;
  } else if(tab==="name"){
    const f = state.diceNameFilter;
    body = `
    <div class="dice-pane">
      <div class="dice-name-filters">
        <button class="dice-tab-btn ${f==='any'?'active':''}" onclick="setDiceNameFilter('any')">Beliebig</button>
        <button class="dice-tab-btn ${f==='female'?'active':''}" onclick="setDiceNameFilter('female')">Weiblich</button>
        <button class="dice-tab-btn ${f==='male'?'active':''}" onclick="setDiceNameFilter('male')">Männlich</button>
        <button class="dice-tab-btn ${f==='neutral'?'active':''}" onclick="setDiceNameFilter('neutral')">Neutral</button>
      </div>
      <div class="dice-row"><button class="dice-roll-btn" onclick="rollName()">Namen würfeln</button></div>
      <div class="dice-name-result">${state.diceLastName ? esc(state.diceLastName) : "—"}</div>
      <div class="dice-hint">Eigene, an den Namenskonventionen der Kampagne orientierte Vorschlagsliste (pastoral-englisch/dalisch) für spontan benötigte NSCs — kein Buchinhalt.</div>
    </div>`;
  }
  document.getElementById("diceBody").innerHTML = body;
}
