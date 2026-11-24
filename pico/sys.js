/* Pico – Konfiguration der Startseite. Header-Bild: img/hero.webp + "noHero" entfernen; Logo: logoImg/logoMask setzen */
window.SYS = {
 "id": "pico",
 "name": "Pico",
 "defaultBook": "pi_core",
 "fonts": [
  [
   "Jost",
   "jost-latin-700-normal.woff2",
   700
  ],
  [
   "Merri",
   "merriweather-latin-400-normal.woff2",
   400
  ]
 ],
 "vars": {
  "bg": "#f5f2ea",
  "ink": "#222222",
  "soft": "#6c6a63",
  "acc": "#f2735b",
  "line": "#d9d5c8",
  "card": "#ffffff",
  "top": "#1d4a47",
  "topInk": "#ffffff",
  "logoFont": "Jost,sans-serif",
  "logoSize": "26px",
  "logoLs": ".04em",
  "h2Font": "700 22px Jost,sans-serif",
  "cardFont": "700 21px Jost,sans-serif",
  "cardCase": "none",
  "cardSize": "21px",
  "body": "Merri,Georgia,serif",
  "panel-raised": "#ffffff"
 },
 "groups": [
  {
   "grp": "Regeln",
   "items": [
    {
     "id": "pi_core",
     "name": "Core Digital V1",
     "lang": "EN",
     "sub": ""
    }
   ]
  }
 ],
 "logoMask": [
  "../assets/logos/pico.webp",
  73,
  36
 ],
 "heroPos": "center 40%"
};
