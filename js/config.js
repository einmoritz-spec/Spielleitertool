/* ==================================================================
   DATA — Wake of the Oldways
   Quellen: Wake_of_the_Oldways_Narrator_Guide.md, Vorlesetexte_DE.md,
   Legend_in_the_Mist_Twilight_Deck_Challenges.md sowie ergänzend
   Legend In The Mist RPG – Hearts of Ravensdale I (S. 315–332)
   für Cooking the Sapsauce, Willow und Local Disaster.
   ================================================================== */

const CAMPAIGN_TITLE = "Wake of the Oldways";

// Zentrale Liste aller Tastatur-Shortcuts — dient sowohl als Datenquelle
// für die Legende auf dem Startbildschirm (renderOverview) als auch als
// Referenz beim Lesen des Codes. Die eigentliche Bindung der Fenster-
// Shortcuts (öffnen/schließen per Taste) steht bei den keydown-Listenern
// weiter unten; "h"/"#"/"<"/Pfeiltasten/Escape sind eigene, ältere
// Listener und hier nur zu Dokumentationszwecken mit aufgeführt.
const KEYBOARD_SHORTCUTS = [
  { key:"F", label:"Suche öffnen/schließen" },
  { key:"M", label:"Karte öffnen/schließen" },
  { key:"P", label:"Profile öffnen/schließen" },
  { key:"X", label:"Charakter erstellen öffnen/schließen" },
  { key:"S", label:"Shop öffnen/schließen" },
  { key:"R", label:"Rasten öffnen/schließen" },
  { key:"L", label:"Lore öffnen/schließen" },
  { key:"G", label:"Regelglossar öffnen/schließen" },
  { key:"A", label:"Action Grimoire öffnen/schließen" },
  { key:"T", label:"Themenbuch-Fragen öffnen/schließen" },
  { key:"C", label:"Challenges öffnen/schließen" },
  { key:"W", label:"Würfel & Zufall öffnen/schließen" },
  { key:"O", label:"Orte öffnen/schließen" },
  { key:"N", label:"NPCs öffnen/schließen" },
  { key:"V", label:"Favoriten öffnen/schließen" },
  { key:"E", label:"Szenentext bearbeiten (im Abenteuer; Strg+S speichert)" },
  { key:"H", label:"Kopfzeile ein-/ausblenden" },
  { key:",", label:"Kopfzeilen-Einstellungen öffnen/schließen" },
  { key:"Rechtsklick", label:"auf Kopfzeilen-Knopf: ausblenden / Beschriftung an-aus" },
  { key:"#", label:"Spoiler-Schutz (Bildschirm verwischen)" },
  { key:"Esc", label:"Offenes Fenster schließen" },
  { key:"←/→", label:"Vorherige/nächste Szene (im Abenteuer)" },
  { key:"<", label:"Seitenleiste ein-/ausklappen (im Abenteuer)" },
];
