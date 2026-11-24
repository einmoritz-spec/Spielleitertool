import json,re,difflib,sys,os
ROOT='/home/claude/spielleitertool'
# (label, layer, cx, cy[, w, h])
E={
2:(44,[0,0,470],[("Theresa Nguyen",0,34.2,10.8),("Autounfallstelle",0,49.2,10.4),("Officers Das & Quinn",0,64.8,10.8),("Goldie",1,30.6,18.5),("Privatdetektiv Holliday",1,44.7,18.5),("Ecke Pine und 5th",1,58.1,18.1),("Rondo's Diner und Shinobi Sushi",1,71.7,17.7),("David Nguyens Wohnung",2,35.3,27.5),("Detektei Holliday",2,49.4,27.5),("Wohnung der Woodworths",2,62.2,26.3),("Der Spuk",2,75.3,26.7),("Verlassener Rummelplatz",3,53.3,35.0),("Kontrollraum",4,49.2,43.2)]),
3:(64,[0,0,470],[("Eine verzweifelte Mutter",0,33.7,11.8),("Frühere Fälle",0,49.2,11.4),("Nebenrollen",0,64.8,11.4),("Wohnung der Familie Jones",1,30.6,19.6),("Die Privatklinik von Heilung für die Gebrochenen",1,44.8,19.2),("Supervision",1,58.1,19.2),("Der misslungene Golem",1,72.8,19.8),("Die Anstalt",2,43.3,27.5),("Die Historische Gesellschaft",2,57.6,27.9),("Die „Spezialabteilung“",3,42.8,35.0),("Aurora Glas",3,57.6,35.3),("Ein Schneesturm des Hasses",4,49.2,43.6)]),
4:(91,[0,0,440],[("Hans Woods",0,27.6,7.9),("Berichte über eine neue Droge",0,42.8,7.9),("Risse verschwinden oder verlieren ihre Kräfte",0,58.3,7.9),("Kandis-Konsument:innen",0,80.8,7.9),("Frau Leckermauls Haus",1,22.2,16.5),("Das Schwimmbad",1,35.8,16.1),("The Bowl",1,49.4,15.7),("Will Harris' Wohnung",1,63.9,16.1),("Charlies Spielzimmer",1,78.9,16.9),("Hans' Loft",2,33.0,24.0),("Das Kandis-Drogenlabor",2,45.6,23.6),("Foxy Supreme",2,58.9,25.1),("Auf dem Trip",2,72.2,25.9),("Lieferung an Magnum Opus",3,40.6,32.2),("Die alte Aurora-Glashütte",3,57.6,34.6),("Lebkuchenhaus",4,49.2,40.8)]),
5:(117,[0,0,500],[("Suchende",0,27.8,14.5),("Ariadne",0,42.8,14.1),("Sich um Suchende sorgen",0,57.2,13.7),("Athanor",0,70.3,13.4),("Silvio Yadao",0,84.1,13.4),("Prof. Clay",1,40.0,22.4),("1x1 der Alchemie",1,56.4,22.8),("Chinatown-Festival",1,71.7,22.0),("Die Silo-Prüfung",2,40.6,29.5),("Valériens Kuriosa",2,55.2,30.6),("Die Ausgrabungsstätte",2,69.4,30.6),("Whirlers Kommune",3,38.6,37.7),("Das Narrenfest",3,53.1,38.5),("Alona Wainwright",3,66.1,38.1),("Die Katakomben",4,53.9,47.1),("Schadensbegrenzung des Zirkels",0,85.6,34.6,7,26)]),
6:(154,[0,372,800],[("Ariadne",0,21.7,49.5),("Armands Einladung",0,36.1,49.5),("Schatzjagd",0,48.9,49.9),("Der Kult des Magnum Opus",0,61.9,49.6),("Ichor-Lieferung",0,74.7,49.1),("Foyer",1,28.7,58.9),("Das verlassene Haus",1,42.6,58.9),("Quartiere der Jünger:innen",1,56.3,59.3),("Ichor-Destillerie",1,71.9,58.9),("Aqua-Fortis-Zisterne",2,49.8,67.6),("Goldmine",3,43.3,74.2),("Essenz-Gewölbe",3,57.8,74.2),("Armands Labor",4,48.9,81.7)]),
7:(184,[0,350,795],[("Anruf der Bürgermeisterin",0,35.0,52.2),("Bandenaktivitäten",0,50.3,52.2),("Hilferuf der BEBEBÜ",0,64.8,52.2),("Chinarestaurant Double Dragon",1,28.7,60.5),("Basketballplatz",1,42.0,60.5),("Bewegung Besorgter Bürger:innen",1,56.4,60.5),("Gemeinschaftsgarten",1,72.0,60.1),("Autobahnblockaden",2,35.9,68.0),("Schrottplatz",2,50.0,68.0),("Überwucherte Ruine",2,64.2,68.0),("Bürger:innenversammlung",3,43.3,76.2),("Haus am See",3,58.1,76.6),("Schlacht um das 63. Revier",4,49.8,84.4)]),
8:(212,[0,352,785],[("Städtische Beamte",0,29.4,49.1),("Verlassene Hauptstraße",0,44.1,48.7),("Eine Queste von Artus",0,58.9,49.1),("Im Auftrag der Pfarrerin",0,72.8,49.1),("Kanzlei Clarke",1,38.7,58.5),("Chicken & Egg Food Truck",1,52.4,58.5),("Kirche des Heiligen Geistes",1,66.1,58.5),("Rice Immobilien",2,40.0,66.8),("Zuhause der Navarros",2,53.3,66.8),("Grey Alley",2,66.3,66.8),("Fritzberg",3,38.9,73.4),("Grabhöhle",3,53.3,74.2),("Evas Luxusvilla",3,65.6,74.2),("Evas Elternhaus",4,50.6,82.1)]),
9:(237,[0,0,430],[("Zwischen den Fronten",0,41.7,8.6),("Lars Erikson",0,56.1,7.9),("Vince Beaumont",0,70.9,7.9),("Blutbad in der Innenstadt",1,34.8,16.5),("Die Grenzlande",1,48.9,16.9),("Der Steinaltar",1,61.7,16.9),("Camelot",1,74.8,16.9),("Schlacht an der Calmann-Brücke",2,40.9,24.7),("Ray Gibbons' Junggesellenbude",2,54.2,24.7),("Das Geheimnis des Königs",2,68.1,24.7),("Risse allüberall",3,48.3,32.2),("Ray Gibbons",3,62.8,33.0),("Le Griffon Segréant",4,57.2,40.8)]),
10:(262,[0,20,770],[("Nachforschungen über Corbin Payne",1,10.9,29.5),("Die erste Gralsritter:in",1,24.2,24.4),("Nachforschungen über den geheimen Schmerz",1,38.1,29.5),("Die zweite Gralsritter:in",2,23.3,42.8),("Corbin Tower",2,10.0,47.9),("Angriff auf die Stadt",2,37.6,47.9),("Corbin Payne höchstpersönlich",2,23.9,52.6),("Nachforschungen über den Gral",2,39.1,57.0),("Die dritte Gralsritter:in",3,23.9,68.3),("Parkside Café",3,10.6,73.0),("Was sein muss",3,36.1,72.7),("Die Abwrackwerft",3,25.0,79.0)]),
}
def norm(t):
    t=t.lower()
    for a,b in (('ä','ae'),('ö','oe'),('ü','ue'),('ß','ss'),('é','e')): t=t.replace(a,b)
    return re.sub(r'[^a-z0-9 ]+',' ',t).split()
STOP={'der','die','das','den','dem','des','von','im','in','am','an','und','auf','eine','ein','zu','vom','zum','zur'}
def load(n):
    s=open(f'{ROOT}/nights/js/data/case{n:02d}.js').read(); k=f'cases[{n}]='; return json.loads(s[s.index(k)+len(k):].rstrip().rstrip(';'))
def sid(t): 
    t=t.lower()
    for a,b in (('ä','ae'),('ö','oe'),('ü','ue'),('ß','ss')): t=t.replace(a,b)
    return re.sub(r'[^a-z0-9]+','-',t).strip('-')
def best(label,layer,secs,case):
    lt={w for w in norm(label) if w not in STOP}
    sc=[]
    for s in secs:
        if s['kind']!='place': continue
        st={w for w in norm(s['title']) if w not in STOP}
        if not lt or not st: continue
        j=len(lt&st)/min(len(lt),len(st))
        r=difflib.SequenceMatcher(None,' '.join(sorted(lt)),' '.join(sorted(st))).ratio()
        sc.append((max(j,r),s['id'],s['title']))
    sc.sort(reverse=True)
    return sc[0] if sc and sc[0][0]>=0.7 and not (case==9 and label=='Ray Gibbons') else None
for n,(pg,(x0,y0,y1),nodes) in E.items():
    p=f'cases/case{n:02d}.json'; d=json.load(open(p)); c=load(n)
    d['figures']=[f for f in d.get('figures',[]) if f['id']!='eisberg']
    W,H=595,842
    d['figures'].insert(0,{"id":"eisberg","page":pg,"kind":"eisberg","title":"Der Eisberg","box":[0,y0,295 if n==10 else 595,y1]})
    layers={}
    for s in c['sections']:
        if s['kind']=='layer':
            m=re.search(r'(?:SCHICHT|AKT) (\d)',s['title']); 
            if m: layers[int(m.group(1))]=s['id']
    out=[]
    for node in nodes:
        label,layer,cx,cy=node[:4]
        b=best(label,layer,c['sections'],n)
        tgt=b[1] if b else layers.get(layer)
        print(n,label,'->',(b[2] if b else 'LAYER '+str(layers.get(layer))),round(b[0],2) if b else '')
        o={"label":label,"cx":cx,"cy":cy,"layer":layer,"target":tgt}
        if len(node)>4: o['w']=node[4]; o['h']=node[5]
        out.append(o)
    d['eisberg']={"page":pg,"fig":"eisberg","nodes":out}
    json.dump(d,open(p,'w'),ensure_ascii=False,indent=1)
