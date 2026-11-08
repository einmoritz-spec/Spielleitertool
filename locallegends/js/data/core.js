/* ============================================================
   DATENMODELL
   ============================================================ */

const DISTRICTS = [
  {id:"chinatown", num:1, title:"Chinatown", en:"Chinatown", sub:"Ein Bezirk kriegerischer Halbgötter und altehrwürdiger Traditionen",
    status:"ready", teaser:"Hinter dem Tempeltor aus geschnitztem Drachenholz treffen uralte Familienfehden auf Kung-Fu-Legenden. Ein Fall: „Ein vorausgesagtes Gegenmittel“."},
  {id:"fortune_row", num:2, title:"Fortune Row", sub:"Glitzernde Casinos, riskante Heists", status:"ready", teaser:"Zwischen glitzernden Casino-Türmen und der endlos gewundenen Snake wird um Glück selbst gespielt, gestohlen und betrogen. Ein Fall: „All About the Mani“."},
  {id:"happyville", num:3, title:"Happyville", sub:"Gepflegte Rasenflächen, verborgene Wahrheiten", status:"ready", teaser:"Hinter Lattenzäunen und Nebeldecke ringen Gatekeeper und Albtraum-Rift um eine Vorstadt, die niemand je verlassen soll. Ein Fall: „Amnesia Town“."},
  {id:"independence", num:4, title:"Independence", sub:"Widerstand gegen die Mächte von oben", status:"ready", teaser:"Eine Gemeinschaft trauert um eine verlorene Tochter, während ein atemraubendes Wesen im Verborgenen lauert. Ein Fall: „The Unwanted Guest“."},
  {id:"colonia_sombras", num:5, title:"La Colonia de Sombras", sub:"Gemeinschaft der Schatten", status:"ready", teaser:"Eine Serie ritueller Morde bedroht die Nachbarschaft, während eine erwachte Todesgöttin einen Riss zwischen den Welten öffnet. Ein Fall: „The Black Butterfly Murders“."},
  {id:"campus", num:6, title:"The Campus", sub:"Verbotenes Wissen, geheime Orden", status:"ready", teaser:"Ein durcheinandergebrachtes Buch bringt einen Dämon der Unwissenheit auf den Campus. Ein Fall: „Words Fail“."},
  {id:"sunken_city", num:7, title:"The Sunken City", sub:"Türme unter der Bucht", status:"ready", teaser:"Ein Todeskult will einen weltzerstörenden Leviathan erwecken, während uralte Sorgen ihn niederhalten. Ein Fall: „Leviathan's Sorrow“."},
  {id:"tourist_trap", num:8, title:"Tourist Trap", sub:"Ein Test für den eigenen Willen", status:"ready", teaser:"Kreidezeichnungen erwachen zu tödlichen Monstern, während eine Öko-Terroristin ihren Schöpfer rekrutieren will. Ein Fall: „The Maestro of Chalk“."},
  {id:"undertrash", num:9, title:"The Undertrash", sub:"Das Reich unter der Stadt", status:"ready", teaser:"Ein Vampir, der sich selbst neu erschafft, jagt eine uralte Mutter-Gottheit durch die Tunnel unter der Stadt. Ein Fall: „Where Light Fears to Tread“."},
];

/* ---------- Hilfsfunktion für Danger/Themen-Statblöcke ---------- */
function D(name, epithet, statLine, moves, softMoves, tellMoves, desc, rating){
  return {name, epithet, statLine, moves:moves||[], softMoves:softMoves||[], tellMoves:tellMoves||[], desc:desc||"", rating:rating||0};
}
