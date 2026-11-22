/* Erwachsenen-Anziehung (Corebook Kap. 10, S. 132–143) – deutsche Übersetzung des Buchtexts.
   {{schwedisch|amerikanisch}} = Name je nach „Unser Loop“. */
window.MYS = window.MYS || {};
window.MYS.grownup = {
  id: "grownup", name: "Erwachsenen-Anziehung", bild: "m-grownup", buch: "tftl_core", jahreszeit: "Herbst",
  intro: "Der Herbstwind ist frisch und kühl. Die Ruhe des Alltags legt sich über die Gegend. Doch etwas anderes liegt in der Luft. Ein Geschmack von etwas Verbotenem, von etwas unnatürlich Verlockendem. Die Kinder bemerken, wie Erwachsene sich seltsam verhalten und Opfer ihrer Begierde werden. Kann das finstere Komplott rechtzeitig gestoppt werden, oder gehen die Erwachsenen freiwillig ihrem Untergang entgegen?",
  phasen: [
    {id: "wahrheit", name: "Wahrheit", abschnitte: [
      {id: "wahrheit", titel: "Die Wahrheit hinter dem Mysterium", s: 133, html: `
<p class="hint">Dieses Mysterium kann in einer Sitzung gespielt werden. Es kann als zweiter Teil der Kampagne „Vier Jahreszeiten des Wahnsinns“ verwendet werden.</p>
<p>Die Wissenschaftlerin {{Lena Thelin|Diane Peterson}} will sich an ihren früheren Kollegen und Vorgesetzten bei {{Riksenergi|DARPA}} rächen, seit sie entlassen wurde, weil sie keine Projekte abschließen konnte und Anweisungen nicht befolgen wollte.</p>
<p>Lena hat eine Maschine erfunden, die die Fähigkeit besitzt, Menschen anzuziehen: Sie will, dass sie in ihrer Nähe bleiben und sie beschützen, und weckt in ihnen ihre ursprünglichsten Instinkte – Aggression, Denken in Hierarchien und Sexualität. Lenas Plan war, ihre Erfindung, die sie Künstlicher Bindungsknoten (englisch Artificial Attachment Node, kurz ArAN) nennt, auf {{Svartsjölandet|Boulder Beach}} aufzustellen, damit alle Erwachsenen {{auf den Mälarinseln|in Boulder City}} von ihr angezogen werden. Dann wollte sie in die Forschungsanlagen eindringen, sich nehmen, was sie wollte, und den Rest zerstören.</p>
<p>Der ArAN braucht gewaltige Energiemengen. Lena musste ihn an den Gravitron anschließen. Es gelang ihr, einen unterirdischen Tunnel nahe dem Zugangstunnel P-1 auf {{Väntholmen auf Svartsjölandet|bei Hemenway Pass}} zu finden und zu betreten. Sie stellte den ArAN auf {{Väntholmen|Hemenway Pass}} auf, verband ihn mit dem Gravitron und schaltete ihn ein. Sofort begann er, Erwachsene anzuziehen. Lena erkannte ihren Fehler zu spät: Auch sie ist eine Erwachsene und wurde augenblicklich von ihrer eigenen Schöpfung gefangen genommen.</p>`},
      {id: "herbst", titel: "Herbst auf den Mälarinseln", s: 134, loop: "maelar", fassung: "Mälarinseln", html: `
<p>Auf den Inseln ist es kalt und windig, und der Regen scheint waagerecht zu fallen. Dunkle Wolken ziehen über den Himmel, und mächtige Gewitter toben in der Gegend. Die Blätter sind rot, gelb und orange gefärbt und liegen in Haufen am Boden. Überall gibt es Pfützen, in denen Regenwürmer und Frösche sitzen, und die Vögel ziehen in Pfeilformation nach Süden.</p>
<p>Das Klassenzimmer riecht nach nassen Kleidern, und der Unterricht scheint nie zu enden. In den Pausen stehen die Schüler frierend in Gruppen oder gehen auf matschigen Pfaden zwischen kahlen Bäumen auf Entdeckungstour. Im Sportunterricht werden die Kinder nach draußen gezwungen, um Orientierungslauf oder Laufen zu üben. Der Alltag geht weiter – Arbeit und Schule, Frühstück und Abendessen, Zähneputzen und klingelnde Wecker. Die Tage werden kürzer und dunkler, und die Kälte lässt alle Mützen und Handschuhe anziehen. Drehende Fahrradräder spritzen Schlamm und Regenwasser auf.</p>`},
      {id: "herbst-bc", titel: "Herbst in Boulder City", s: 134, loop: "boulder", fassung: "Boulder City", html: `
<p>Die glühende Hitze lässt in Boulder City nach, sobald die Schule wieder beginnt. Zum Glück haben die Schulen Klimaanlagen, sodass sie erträglich, wenn auch langweilig sind. Kinder finden oft Gründe, für Aktivitäten nach der Schule zu bleiben, statt sich in der heißesten Tageszeit nach Hause schleppen zu müssen. Footballspieler trainieren oft schon morgens, um einen Hitzschlag zu vermeiden.</p>
<p>Im Oktober sind die Temperaturen aber auf ein erträgliches Maß gesunken, und die Leute sind viel mehr unterwegs. Es liegt ein frischer Biss in der Luft. Es ist gutes Angelwetter, und endlich ist es kühl genug, den Grill für ein Essen im Freien anzuwerfen.</p>`}
    ]},
    {id: "kids", name: "Kids einführen", abschnitte: [
      {id: "kids", titel: "Die Kinder einführen", s: 134, html: `
<p>Jedes Kind bekommt eine Szene aus dem Alltag. Der Spielleiter sollte versuchen, Erwachsene in die Szenen einzubauen, damit sie vom ArAN angezogen werden und später in der Geschichte verschwinden können. Papa klopft an die Tür und bietet Kekse an. Eine Tante bleibt im Haus, weil sie Urlaub hat (aber jeder weiß, dass sie kürzlich ihr ganzes Geld verspielt und ihr Haus verkaufen musste).</p>`}
    ]},
    {id: "mysterium", name: "Mysterium einführen", abschnitte: [
      {id: "mysterium", titel: "Das Mysterium einführen", s: 134, html: `
<p>Ein Erwachsener verschwindet. Es kann ein Lehrer sein, ein Elternteil oder ein älteres Geschwister. Die Person ist 16 Jahre oder älter und hat sich unbemerkt davongeschlichen. Das Kind wacht morgens auf, und seine Mutter ist fort. Der Lehrer erscheint nicht zum Unterricht. Das Zimmer des älteren Bruders ist morgens leer, und das Bett ist noch gemacht.</p>
<p>Mit einem erfolgreichen Wurf auf <span class='f'>untersuchen</span> entdeckt das Kind, dass der Erwachsene mitten in dem, was er gerade tat, aufgebrochen ist und sich Mühe gegeben hat, ungesehen zu verschwinden. Es gibt keine Anzeichen dafür, dass der Erwachsene gegen seinen Willen entführt wurde, und keine Spuren anderer Menschen, die ihm geholfen oder ihn verfolgt hätten. Folgt das Kind den Spuren des Erwachsenen, verliert es sie irgendwo auf dem Weg nach {{Väntholmen|Hemenway Pass}}.</p>`}
    ]}
  ]
};
