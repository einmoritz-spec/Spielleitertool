/* Überblick: Household (Grundbuch Vol. I, Kapitel „How to Play“, Kapitel VIII „Saga“). Eigenes Layout (html + css). */
GM_INFO.household = {
  tag: "",
  stil: { bg: "#f4eee2", fg: "#2d2530", acc: "#6e4b8c", ff: "Gar,Georgia,serif", hf: "Fell,serif" },
  css: ".gi-own-body{padding:16px 28px 4px;font-size:15px;line-height:1.5}.gi-own-body h3{font:400 15px Fell,serif;letter-spacing:.12em;text-transform:uppercase;color:#6e4b8c;margin:0 0 10px;display:flex;align-items:center;gap:12px}.gi-own-body h3:after{content:'';flex:1;height:1px;background:#c9b27a}"
   + ".hi-top{display:grid;grid-template-columns:1fr 1.15fr;gap:30px}.hi-top p{margin:0 0 12px}"
   + ".hi-fakten{display:grid;grid-template-columns:auto 1fr;gap:6px 14px;font-size:14.5px;margin:0}.hi-fakten dt{font:400 14px Fell,serif;color:#6e4b8c;letter-spacing:.04em;white-space:nowrap}.hi-fakten dd{margin:0}"
   + ".hi-fields{display:grid;grid-template-columns:repeat(4,1fr);gap:10px}.hi-field{text-align:center}.hi-field .im{height:96px;display:flex;align-items:flex-end;justify-content:center;margin-bottom:6px}.hi-field .im img{max-height:96px;max-width:100%;filter:drop-shadow(0 3px 5px rgba(40,20,40,.3))}"
   + ".hi-field b{display:block;font:400 19px Fell,serif;color:#35203b;letter-spacing:.03em}.hi-field small{display:block;font-size:13px;line-height:1.35;color:#7a6c78;margin-top:2px}"
   + ".hi-wurf{margin-top:16px}.hi-pool{font-size:14.5px;color:#5e5160;margin:0 0 10px}.hi-pool b{color:#35203b;font-weight:600}"
   + ".hi-res{display:grid;grid-template-columns:1fr 1fr;column-gap:34px}.hi-r{display:flex;align-items:center;gap:14px;padding:5px 0;border-bottom:1px dotted #d6c79f}.hi-d{flex:none;width:200px;display:flex;gap:3px;align-items:center}.hi-d img{height:29px;width:auto;display:block}"
   + ".hi-r b{display:block;font:400 17px Fell,serif;color:#35203b;line-height:1.1}.hi-r span{font-size:13.5px;color:#6a5d68;line-height:1.3;display:block}"
   + ".hi-kern{display:grid;grid-template-columns:repeat(4,1fr);gap:0 24px;margin-top:12px}.hi-kern div{padding:4px 0}.hi-kern b{display:block;font:400 16px Fell,serif;color:#6e4b8c;letter-spacing:.03em}.hi-kern span{font-size:13.5px;line-height:1.38;color:#4a3e48;display:block}",
  html: function(base){
    var W = base + "household/img/wuerfel/", F = base + "household/img/grundbuch/thumb/";
    function d(){ return [].map.call(arguments, function(n){ return '<img src="' + W + n + '.png" alt="">'; }).join(""); }
    function res(dice, t, s){ return '<div class="hi-r"><div class="hi-d">' + dice + '</div><div><b>' + t + '</b><span>' + s + '</span></div></div>'; }
    function fld(img, name, sk, sym){ return '<div class="hi-field"><div class="im"><img src="' + F + img + '.webp" alt=""></div><b>' + name + '</b><small>' + sk + '</small></div>'; }
    return '<div class="hi-top"><div><h3>Das Setting</h3>'
     + '<p>In <b>Household</b> spielt ihr <b>Littlings</b>, winzige Wesen, die im Inneren eines großen Hauses leben: Faeries, Sprites, Sluagh und andere Völker, verteilt auf die Nationen <b>Realm, Hearth, Free Dominions</b> und <b>Horde</b>. Es ist eine romantische, aufregende Vergangenheit, und ihr erzählt gemeinsam die Geschichte von Littlings, deren Namen es nie in die Geschichtsbücher geschafft haben.</p>'
     + '<dl class="hi-fakten"><dt>Ihr spielt</dt><dd>Littlings mit Beruf, Merkmale, Asse und Verträge</dd><dt>Spielleitung</dt><dd>führt die Geschichte, spielt Nebenfiguren und Gegner</dd><dt>Aufbau</dt><dd>Sitzung, Szene, Paragraph (ein Abenteuer), Kapitel (ein Jahr)</dd></dl></div>'
     + '<div><h3>Die vier Felder</h3><div class="hi-fields">'
     + fld("grundbuch-s100-iiii-fields-skills", "Gesellschaft", "Art · Charme · Redegewandtheit · Etikette · Anmut")
     + fld("grundbuch-s101-iiii-fields-skills", "Wissenschaft", "Fürsorge · Handwerk · Kultur · Einsicht · Ermittlung")
     + fld("grundbuch-s102-iiii-fields-skills", "Krieg", "Athletik · Autorität · Kampf · Stärke · Wille")
     + fld("grundbuch-s103-iiii-fields-skills", "Straße", "Vorsicht · Geschick · Ausweichen · Erkundung · Schießen")
     + '</div></div></div>'
     + '<div class="hi-wurf"><h3>Der Wurf</h3><p class="hi-pool"><b>Würfelpool aus Feld + Fertigkeit</b>, 2 bis 9 Würfel. Ein Erfolg sind zwei oder mehr gleiche Seiten, die Farbe ist egal. 1 Erfolg einer höheren Stufe zählt wie 3 der niedrigeren.</p><div class="hi-res">'
     + res(d("kreuz", "kreuz"), "einfacher Erfolg", "zwei Gleiche")
     + res(d("karo", "karo", "karo"), "kritischer Erfolg", "drei Gleiche")
     + res(d("herz", "herz", "herz", "herz"), "extremer Erfolg", "vier Gleiche")
     + res(d("pik", "pik", "pik", "pik", "pik"), "unmöglicher Erfolg", "fünf Gleiche")
     + res(d("haus", "haus", "haus", "haus", "haus", "haus"), "Jackpot!", "sechs und mehr: du beschreibst die Szene frei")
     + res(d("kreuz", "karo", "herz", "pik", "hh"), "Misserfolg", "kein Paar: die Spielleitung wählt eine Konsequenz")
     + '</div></div>'
     + '<div class="hi-kern">'
     + '<div><b>Schwierigkeit</b><span>Einfach, Kritisch, Extrem oder Unmöglich. Die Spielleitung muss sie nicht offenlegen.</span></div>'
     + '<div><b>Neuwurf</b><span>Ab einem einfachen Erfolg wirfst du alle Würfel ohne Erfolg neu. Gelingt nichts Besseres, verlierst du einen Erfolg.</span></div>'
     + '<div><b>All In</b><span>Nach einem besseren Ergebnis darfst du noch einmal neu werfen. Ohne Verbesserung verlierst du alle Erfolge.</span></div>'
     + '<div><b>Modifikatoren</b><span>Jedes +1 ist ein Würfel mehr, jedes −1 einer weniger. Nie unter 2 und nie über 9 Würfel.</span></div>'
     + '</div>';
  }
};
