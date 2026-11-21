/* Hilfsfunktionen für Blutlinien-, Herkunfts- und Posten-Daten */
window.WS_NACH = window.WS_NACH || {}; WS_NACH.charaktere = WS_NACH.charaktere || [];
window.WSH = {
 asp: function(n, len, art, x){ return {c:n, x:len + "er-Leiste · " + art + "\n" + x}; },
 aspHead: function(){ return [{h:"Aspekte"},{a:"Deine Aspekte machen deinen Charakter einzigartig und geben ihm Wege, die normalen Regeln der Wildsea zu brechen. Sie wirken außerdem bis zu einem gewissen Grad als erzählerische Erlaubnis – wähle Aspekte, die dich ansprechen und die du in deine Geschichte weben kannst. Bei der Schnellstart-Erstellung wählst du 2 Aspekte aus der Liste."}]; },
 fragen: function(was, l){ return {c:"Fragen zum Nachdenken", x:"Wenn du Elemente " + was + " in deinen Charakter einbaust, bedenke die folgenden Fragen …", l:l}; },
 kit: function(was, rows){ return [{h:"Schnellstart-Kit"},{a:"Wenn du einen Schnellstart-Charakter erstellst und " + was + " wählst, erhältst du folgende Boni …"},{tab:{k:["Wahl","Optionen"],z:rows}}]; },
 q: function(t, wer){ return {erz:"„" + t + "“ – " + wer}; }
};
