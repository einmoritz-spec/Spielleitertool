/* Zusätzliche Buchillustrationen (Seite = Buchseite; erscheinen im Abschnitt, der diese Seite enthält).
   Porträts nur bei Figuren, deren Bild im Buch direkt zur Karte gehört. */
(function(){ var A = {
 "tokyo-ueberblick": [{p:9, src:"img/art/tokyo-s9.webp", cap:"Illustration"}, {p:12, src:"img/art/tokyo-s12.webp", cap:"Illustration"}, {p:14, src:"img/art/tokyo-s14.webp", cap:"Illustration"}, {p:19, src:"img/art/tokyo-s19.webp", cap:"Illustration"}, {p:22, src:"img/art/tokyo-s22.webp", cap:"Illustration"}, {p:27, src:"img/art/tokyo-s27.webp", cap:"Illustration"}, {p:30, src:"img/art/tokyo-s30.webp", cap:"Illustration"}, {p:39, src:"img/art/tokyo-s39.webp", cap:"Illustration"}],
 "tokyo-bezirke": [{p:32, src:"img/art/tokyo-s32.webp", cap:"Illustration"}, {p:34, src:"img/art/tokyo-s34.webp", cap:"Illustration"}],
 "gegner-a": [{p:97, src:"img/art/tokyo-s97.webp", cap:"Illustration"}, {p:104, src:"img/art/tokyo-s104.webp", cap:"Illustration"}],
 "gegner-b": [{p:120, src:"img/art/tokyo-s120.webp", cap:"Illustration"}],
 "gegner-c": [{p:133, src:"img/art/tokyo-s133.webp", cap:"Illustration"}, {p:137, src:"img/art/tokyo-s137.webp", cap:"Illustration"}, {p:147, src:"img/art/tokyo-s147.webp", cap:"Illustration"}],
 "fraktion-bureau": [{p:156, src:"img/art/tokyo-s156.webp", cap:"Illustration"}],
 "fraktion-ghost-market": [{p:163, src:"img/art/tokyo-s163.webp", cap:"Illustration"}, {p:166, src:"img/art/tokyo-s166.webp", cap:"Illustration"}],
 "fraktion-king-enma": [{p:172, src:"img/art/tokyo-s172.webp", cap:"Illustration"}],
 "fraktion-neo-samurai": [{p:178, src:"img/art/tokyo-s178.webp", cap:"Illustration"}],
 "fraktion-oni-gangs": [{p:187, src:"img/art/tokyo-s187.webp", cap:"Illustration"}, {p:191, src:"img/art/tokyo-s191.webp", cap:"Illustration"}],
 "fraktion-soma": [{p:195, src:"img/art/tokyo-s195.webp", cap:"Illustration"}],
 "fraktion-taiyo": [{p:204, src:"img/art/tokyo-s204.webp", cap:"Illustration"}],
 "fraktion-tokoyo": [{p:213, src:"img/art/tokyo-s213.webp", cap:"Illustration"}],
 "fraktion-yakuza": [{p:224, src:"img/art/tokyo-s224.webp", cap:"Illustration"}],
 "fraktion-viral": [{p:232, src:"img/art/tokyo-s232.webp", cap:"Illustration"}, {p:236, src:"img/art/tokyo-s236.webp", cap:"Illustration"}],
 "anthill": [{p:242, src:"img/art/tokyo-s242.webp", cap:"Illustration"}],
 "biting-bullet": [{p:253, src:"img/art/tokyo-s253.webp", cap:"Illustration"}]
};
 for(var k in A){ OS_ART[k] = (OS_ART[k]||[]).concat(A[k]); }
})();
/* Porträts für Challenge-Karten: Name der Challenge -> Bild (Slug in img/art) */
var OS_PORTRAITS = {"Yuki-onna": {"p": 100, "slug": "tokyo-s100"}, "Tesso, the Iron Rat": {"p": 109, "slug": "tokyo-s109"}, "Umibōzu Nano Swarm": {"p": 112, "slug": "tokyo-s112"}, "Bōsōzoku Rider": {"p": 124, "slug": "tokyo-s124"}, "Skywatcher": {"p": 208, "slug": "tokyo-s208"}, "Onryō": {"p": 122, "slug": "tokyo-s122"}, "Ichiro": {"p": 304, "slug": "tokyo-s304"}};
/* Titelbilder der Theme-Books (Gruppenname der Kits -> Bild) */
var OS_KITBOOKS = {"Zugehörigkeit": {"p": 196, "slug": "metro-s196"}, "Besitz": {"p": 200, "slug": "metro-s200"}, "Expertise": {"p": 204, "slug": "metro-s204"}, "Horizont": {"p": 208, "slug": "metro-s208"}, "Persönlichkeit": {"p": 212, "slug": "metro-s212"}, "Belastete Vergangenheit": {"p": 216, "slug": "metro-s216"}, "Artefakt": {"p": 220, "slug": "metro-s220"}, "Gefährte": {"p": 224, "slug": "metro-s224"}, "Esoterik": {"p": 228, "slug": "metro-s228"}, "Exposition": {"p": 232, "slug": "metro-s232"}, "Augmentierung": {"p": 236, "slug": "metro-s236"}, "Spitzentechnik": {"p": 240, "slug": "metro-s240"}, "Cyberspace": {"p": 244, "slug": "metro-s244"}, "Drohnen": {"p": 248, "slug": "metro-s248"}};
