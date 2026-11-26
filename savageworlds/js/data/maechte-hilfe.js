/* Hilfsfunktionen für Mächte-Daten der Zusatzbände */
window.SW_MH = {
  /* Zusatzmodifikator an bestehende Macht hängen: mod(Machtname, [Name, Kosten, Text], Quelle) */
  mod: function(n, m, s){ var p = SW_MACHTE.filter(function(x){ return x.n === n; })[0]; if(!p) { console.warn("Macht fehlt: " + n); return; } (p.m = p.m || []).push([m[0], m[1], m[2], [s]]); },
  add: function(a){ SW_MACHTE.push.apply(SW_MACHTE, a); },
  ah: function(a){ SW_AH.push.apply(SW_AH, a); },
  reg: function(a){ SW_MREGELN.push.apply(SW_MREGELN, a); }
};
