import json
I="../../../vaesen/img/"
ROWS=[
 {"b":"Grundregelwerk","k":"Einführung","cov":"cover_grundregelwerk","m":[("tanz","Der Tanz der Träume","Upsala","","")]},
 {"b":"Seasons of Mystery","k":"Mysteriensammlung","cov":"cover_seasons","link":"Vorwort","m":[("som_tod","Ein Tanz mit dem Tod","Dalarna","Frühling",""),("som_feuer","Feuerherz","Småland","Sommer","Countdown 1 / 4"),("som_teufel","Der Teufel im Moor","Jütland","Herbst",""),("som_winter","Ein Wintermärchen","Ingermanland","Winter","")]},
 {"b":"A Wicked Secret","k":"Mysteriensammlung","cov":"cover_wicked","m":[("wick_8","Das Silber des Meeres","","",""),("wick_30","Ein böses Geheimnis","","",""),("wick_62","Die Nachtsau","","",""),("wick_80","Das Lied vom fallenden Stern","","","")]},
 {"b":"City of My Nightmares","k":"Kampagne · Stockholm","cov":"cover_city","link":"Einführung","m":[("city_14","Witterung eines Mörders","","1",""),("city_42","Lied an den Mond","","2",""),("city_66","Die Spukbibliothek","","3",""),("city_86","Stadt meiner Albträume","","4","")]},
 {"b":"The Lost Mountain Saga","k":"Kampagne · Lappland","cov":"cover_lost","link":"Einführung","m":[("lost_14","Pflicht und Verzweiflung","","1",""),("lost_28","Der Beginn des Falls","","2",""),("lost_46","Wo die Sonne stirbt","","3",""),("lost_58","Der Prinz und die Hexe","","4",""),("lost_70","Die Saga vom verlorenen Berg","","5","")]},
]
HEAD='<!doctype html><html lang="de"><meta charset="utf-8"><link rel="stylesheet" href="../start/base.css"><style>%s</style><body><div class="wrap"><div class="sh">Mysterien</div>%s</div></body></html>'
GRP="""
.grps{display:flex;flex-wrap:wrap;gap:22px 34px}
.grp .gh{display:flex;align-items:baseline;gap:12px;border-bottom:1px solid rgba(122,101,82,.35);padding-bottom:5px;margin-bottom:10px}
.grp .gh b{font-family:Mar;font-weight:400;font-size:19px;letter-spacing:.06em;color:var(--red)}
.grp .gh span{font-style:italic;color:var(--soft);font-size:14.5px}.grp .gh a{margin-left:auto;font-family:Mar;font-size:12.5px;letter-spacing:.14em;color:var(--red);border-bottom:1px solid var(--red)}
.grp .cs{display:flex;gap:6px}"""
COMMON=".wrap{padding:30px 50px 50px}.sh{margin:0 0 18px}"
def a(): # Medaillon quer: Kreis links, Text rechts, Buchkopf als Zeile
    css=COMMON+"""
.bk{display:flex;align-items:baseline;gap:14px;margin:26px 0 10px;border-bottom:1px solid rgba(122,101,82,.35);padding-bottom:6px}
.bk:first-of-type{margin-top:0}
.bk b{font-family:Mar;font-weight:400;font-size:21px;letter-spacing:.06em;color:var(--red)}
.bk span{font-style:italic;color:var(--soft);font-size:15px}.bk a{margin-left:auto;font-family:Mar;font-size:13px;letter-spacing:.14em;color:var(--red);border-bottom:1px solid var(--red)}
.gr{display:grid;grid-template-columns:repeat(4,1fr);gap:8px 10px}.gr.g5{grid-template-columns:repeat(5,1fr)}
.md{display:flex;align-items:center;gap:12px;padding:8px 10px 8px 4px;border-radius:4px;transition:background .2s}
.md:hover{background:rgba(255,255,255,.4)}.md img{width:80px;flex:none;transition:transform .25s}.md:hover img{transform:scale(1.06) rotate(-3deg)}
.md .k{font-family:Mar;font-size:11.5px;letter-spacing:.2em;color:var(--red);text-transform:uppercase}
.md b{display:block;font-family:Mar;font-weight:400;font-size:17.5px;letter-spacing:.04em;line-height:1.15}
.md small{font-style:italic;color:var(--soft);font-size:14.5px}.md em{display:block;font-style:normal;font-size:13.5px;color:var(--red)}
.two{display:grid;grid-template-columns:1fr 4.4fr;gap:26px}"""
    def row(R,n=None):
        g='<div class="gr%s">'%(" g5" if len(R["m"])==5 else "")+"".join(f'<div class="md"><img src="em/{i}.png"><div>{"<span class=k>"+(("Teil "+k) if k.isdigit() else k)+"</span>" if k else ""}<b>{t}</b>{"<small>"+o+"</small>" if o else ""}{"<em>"+p+"</em>" if p else ""}</div></div>' for i,t,o,k,p in R["m"])+"</div>"
        return f'<div class="bk"><b>{R["b"]}</b><span>{R["k"]}</span>{"<a>"+R["link"]+"</a>" if R.get("link") else ""}</div>'+g
    r0=ROWS[0];r0g=row(r0).replace('class="gr"','class="gr" style="grid-template-columns:1fr"')
    body='<div class="two"><div>'+r0g+'</div><div>'+row(ROWS[1])+'</div></div>'+"".join(row(R) for R in ROWS[2:])
    return HEAD%(css,body)
def b(): # Titel im Kreis: Plakette unten im Bildkreis
    css=COMMON+"""
.row{display:grid;grid-template-columns:190px 1fr;gap:20px;align-items:center;margin-bottom:22px}
.lab b{display:block;font-family:Mar;font-weight:400;font-size:21px;letter-spacing:.05em;color:var(--red);line-height:1.1}
.lab span{display:block;font-style:italic;color:var(--soft);font-size:15px;margin-top:3px}.lab a{display:inline-block;margin-top:8px;font-family:Mar;font-size:13px;letter-spacing:.14em;color:var(--red);border-bottom:1px solid var(--red)}
.cs{display:flex;gap:6px}
.c{position:relative;width:206px;flex:none}.c img{width:100%;display:block;transition:transform .25s}.c:hover img{transform:scale(1.05)}
.c .pl{position:absolute;left:16%;right:14%;bottom:17%;text-align:center;color:#f6efdf;font-family:Mar;font-size:15px;letter-spacing:.05em;line-height:1.12;text-shadow:0 1px 3px rgba(0,0,0,.9),0 0 10px rgba(0,0,0,.7)}
.c .pl:before{content:"";position:absolute;left:4%;right:4%;top:-8px;bottom:-8px;z-index:-1;background:rgba(28,18,11,.82);border-radius:3px}
.c .pl small{display:block;font-family:EBG;font-style:italic;font-size:12.5px;letter-spacing:0;opacity:.9}
.c .n{position:absolute;top:6%;left:4%;font-family:Mar;font-size:13px;color:#f3ecd9;background:var(--red);border-radius:50%;width:24px;height:24px;display:grid;place-items:center}"""
    css+=GRP
    def row(R):
        cs="".join(f'<div class="c"><img src="em/{i}.png">{"<span class=n>"+k+"</span>" if k.isdigit() else ""}<div class="pl">{t}{"<small>"+(k+" · " if k and not k.isdigit() else "")+o+"</small>" if (o or (k and not k.isdigit())) else ""}</div></div>' for i,t,o,k,p in R["m"])
        return f'<div class="grp"><div class="gh"><b>{R["b"]}</b><span>{R["k"]}</span>{"<a>"+R["link"]+"</a>" if R.get("link") else ""}</div><div class="cs">{cs}</div></div>'
    return HEAD%(css,'<div class="grps">'+"".join(row(R) for R in ROWS)+'</div>')
def c(): # Siegel: Titel als Bogenschrift unter dem Ring
    css=COMMON+"""
.row{display:grid;grid-template-columns:190px 1fr;gap:20px;align-items:center;margin-bottom:10px}
.lab b{display:block;font-family:Mar;font-weight:400;font-size:21px;letter-spacing:.05em;color:var(--red);line-height:1.1}
.lab span{display:block;font-style:italic;color:var(--soft);font-size:15px;margin-top:3px}.lab a{display:inline-block;margin-top:8px;font-family:Mar;font-size:13px;letter-spacing:.14em;color:var(--red);border-bottom:1px solid var(--red)}
.cs{display:flex;gap:4px;justify-content:space-between}.c{width:205px;flex:none}.grp.full{flex:1 1 100%}.grp.full .cs{justify-content:flex-start;gap:calc((100% - 5*205px)/4)}.c svg{width:100%;display:block;overflow:visible}
.c text{font-family:Mar;font-size:21px;letter-spacing:2.2px;fill:#4a2a1c}.c text.s{font-family:EBG;font-style:italic;font-size:16px;letter-spacing:.5px;fill:#7a6552}
.c:hover image{transform:scale(1.04);transform-origin:50% 45%}.c image{transition:transform .25s}"""
    css+=GRP
    def row(R):
        out=""
        for j,(i,t,o,k,p) in enumerate(R["m"]):
            sub=(k+" · " if k and not k.isdigit() else ("Teil "+k+" · " if k.isdigit() else ""))+o
            sub=sub.rstrip(" ·")
            uid=f"{i}"
            out+=f'''<div class="c"><svg viewBox="0 0 230 256"><defs><path id="p{uid}" d="M 14 150 A 101 101 0 0 0 216 150"/><path id="q{uid}" d="M 2 110 A 113 113 0 0 0 228 110"/></defs>
<image href="em/{i}.png" x="27" y="0" width="176" height="198"/>
<text text-anchor="middle" style="font-size:{21 if len(t)<=18 else (18.5 if len(t)<=23 else 16.5)}px;letter-spacing:{2.2 if len(t)<=23 else 1.2}px"><textPath href="#q{uid}" startOffset="50%">{t}</textPath></text>
{f'<text class="s" text-anchor="middle" x="115" y="247">{sub}</text>' if sub else ''}</svg></div>'''
        full=" full" if R["b"] not in ("Grundregelwerk","Seasons of Mystery") else ""
        return f'<div class="grp{full}"><div class="gh"><b>{R["b"]}</b><span>{R["k"]}</span>{"<a>"+R["link"]+"</a>" if R.get("link") else ""}</div><div class="cs">{out}</div></div>'
    return HEAD%(css,'<div class="grps">'+"".join(row(R) for R in ROWS)+'</div>')
for n,f in [("va",a),("vb",b),("vc",c)]: open(n+".html","w").write(f())
