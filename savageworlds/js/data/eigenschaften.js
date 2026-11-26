/* Eigenschaften und Fertigkeiten – Zusammenfassung (Abenteuer-Edition S. 58). n=Name, a=Attribut, t=Kurzbeschreibung, g=Grundfertigkeit */
var SW_ATTR = [
{
"n": "Geschicklichkeit",
"t": "Flinkheit, Fingerfertigkeit und körperliche Koordinationsgabe von Muskeln und Reflexen."
},
{
"n": "Konstitution",
"t": "Ausdauer, Gesundheit und Konstitution."
},
{
"n": "Stärke",
"t": "Rohe Muskelkraft."
},
{
"n": "Verstand",
"t": "Intellekt, Wahrnehmungsgabe und die Fähigkeit, komplexe Informationen zu verarbeiten."
},
{
"n": "Willenskraft",
"t": "Innere Stärke und Entschlossenheit."
}
];
var SW_SKILLS = [
{
"n": "Allgemeinwissen",
"a": "Verstand",
"t": "Allgemeines Wissen über die Welt eines Charakters.",
"g": true
},
{
"n": "Athletik",
"a": "Geschicklichkeit",
"t": "Athletische Koordinationsgabe und Können. Klettern, Springen, Balancieren, Ringen, Skifahren, Schwimmen, Werfen und Fangen.",
"g": true
},
{
"n": "Darbietung",
"a": "Willenskraft",
"t": "Singen, Tanzen, Schauspielerei und andere Formen öffentlichen Ausdrucks.",
"g": false
},
{
"n": "Diebeskunst",
"a": "Geschicklichkeit",
"t": "Fingerfertigkeit, Taschendiebstahl, Schlösserknacken und andere typische zwielichtige Taten.",
"g": false
},
{
"n": "Einschüchtern",
"a": "Willenskraft",
"t": "Die Fähigkeit eines Charakters, andere mit Drohungen dazu zu bringen, das zu tun, was er will.",
"g": false
},
{
"n": "Elektronik",
"a": "Verstand",
"t": "Die Verwendung von elektronischen Geräten und Systemen.",
"g": false
},
{
"n": "Fahren",
"a": "Geschicklichkeit",
"t": "Die Fähigkeit, Bodenfahrzeuge zu kontrollieren, zu steuern und zu bedienen.",
"g": false
},
{
"n": "Fokus",
"a": "Willenskraft",
"t": "Die arkane Fertigkeit für den Arkanen Hintergrund (Begabt).",
"g": false
},
{
"n": "Geisteswissenschaften",
"a": "Verstand",
"t": "Wissen über die freien Künste, Sozialwissenschaften, Literatur, Geschichte etc.",
"g": false
},
{
"n": "Glaube",
"a": "Willenskraft",
"t": "Die arkane Fertigkeit für den Arkanen Hintergrund (Wunder).",
"g": false
},
{
"n": "Glücksspiel",
"a": "Verstand",
"t": "Übung und Vertrautheit mit Glückspielen aller Art.",
"g": false
},
{
"n": "Hacken",
"a": "Verstand",
"t": "Programmieren und Einbrechen in Computersysteme.",
"g": false
},
{
"n": "Heilen",
"a": "Verstand",
"t": "Die Fähigkeit, Wunden und Krankheiten zu behandeln und zu heilen sowie forensische Beweise zu deuten.",
"g": false
},
{
"n": "Heimlichkeit",
"a": "Geschicklichkeit",
"t": "Die Fähigkeit zu schleichen und sich zu verstecken.",
"g": true
},
{
"n": "Kämpfen",
"a": "Geschicklichkeit",
"t": "Können im bewaffneten und unbewaffneten Kampf.",
"g": false
},
{
"n": "Kriegskunst",
"a": "Verstand",
"t": "Strategie, Taktik und das Verständnis von militärischen Einsätzen. Wichtig für Massenschlachten.",
"g": false
},
{
"n": "Naturwissenschaften",
"a": "Verstand",
"t": "Wissen über wissenschaftliche Felder wie Biologie, Chemie, Geologie, Ingenieurskunst etc.",
"g": false
},
{
"n": "Okkultismus",
"a": "Verstand",
"t": "Wissen über übernatürliche Ereignisse, Kreaturen, Geschichte und Methoden.",
"g": false
},
{
"n": "Pilot",
"a": "Geschicklichkeit",
"t": "Fähigkeit Fahrzeuge zu lenken, die sich in drei Dimensionen bewegen, wie Flugzeuge, Helikopter, Raumschiffe etc.",
"g": false
},
{
"n": "Provozieren",
"a": "Verstand",
"t": "Andere beleidigen oder erniedrigen. Fast immer als Herausfordern (siehe Seite 104).",
"g": false
},
{
"n": "Psionik",
"a": "Verstand",
"t": "Die arkane Fertigkeit für den Arkanen Hintergrund (Psionik).",
"g": false
},
{
"n": "Recherche",
"a": "Verstand",
"t": "Schriftliche Informationen in verschiedenen Quellen finden.",
"g": false
},
{
"n": "Reiten",
"a": "Geschicklichkeit",
"t": "Die Fähigkeit des Charakters, auf ein zahmes Tier aufzusteigen, es zu kontrollieren und zu reiten.",
"g": false
},
{
"n": "Reparieren",
"a": "Verstand",
"t": "Die Fähigkeit, mechanische und elektrische Geräte zu reparieren.",
"g": false
},
{
"n": "Schießen",
"a": "Geschicklichkeit",
"t": "Präzision mit allen Arten von Fernkampfwaffen.",
"g": false
},
{
"n": "Seefahrt",
"a": "Geschicklichkeit",
"t": "Die Fähigkeit, ein Boot, Schiff oder anderes Wasserfahrzeug zu steuern.",
"g": false
},
{
"n": "Sprache",
"a": "Verstand",
"t": "Kenntnisse und Sprachfähigkeiten in einer Fremdsprache.",
"g": false
},
{
"n": "Überleben",
"a": "Verstand",
"t": "Die Fähigkeit, Nahrung, Wasser oder einen Unterschlupf zu finden und Spuren zu lesen.",
"g": false
},
{
"n": "Überreden",
"a": "Willenskraft",
"t": "Die Fähigkeit, andere zu überzeugen, das zu tun, was du willst.",
"g": true
},
{
"n": "Verrückte Wissenschaft",
"a": "Verstand",
"t": "Die arkane Fertigkeit für den Arkanen Hintergrund (Verrückte Wissenschaft).",
"g": false
},
{
"n": "Wahrnehmung",
"a": "Verstand",
"t": "Allgemeine Aufmerksamkeit und Sinnesschärfe.",
"g": true
},
{
"n": "Zaubern",
"a": "Verstand",
"t": "Die arkane Fertigkeit für den Arkanen Hintergrund (Magie).",
"g": false
}
];
