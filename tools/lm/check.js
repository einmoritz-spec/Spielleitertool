// node tools/lm/check.js <id>  – lädt js/data/lm/<id>*.js, prüft Struktur
const fs=require("fs"),path=require("path"),id=process.argv[2];const dir=path.join(__dirname,"../../js/data/lm");
const all=[];global.lmAdd=(i,e)=>{if(i!==id)throw new Error("falsche ID "+i);all.push(...e);};
fs.readdirSync(dir).filter(f=>f===id+".js"||new RegExp("^"+id+"-\\d+\\.js$").test(f)).forEach(f=>{eval(fs.readFileSync(path.join(dir,f),"utf8"));console.log("geladen",f,fs.statSync(path.join(dir,f)).size+"B");});
const kinds=["box","tbl","fq","tg","kv","dlg"];let err=0,words=0;
function blk(b,w){if(typeof b==="string"){words+=b.split(/\s+/).length;return;}const k=Object.keys(b);if(k.length!==1||!kinds.includes(k[0])){console.log("FEHLER Block",w,JSON.stringify(b).slice(0,80));err++;return;}
 if(b.box)(b.box.b||[]).forEach(x=>blk(x,w));if(b.tbl)b.tbl.r.forEach(r=>r.forEach(c=>words+=String(c).split(/\s+/).length));if(b.kv)b.kv.forEach(p=>words+=(p[0]+" "+p[1]).split(/\s+/).length);if(b.dlg)b.dlg.forEach(p=>words+=p[1].split(/\s+/).length);if(b.fq)words+=b.fq.q.split(/\s+/).length;if(b.tg)words+=b.tg.i.length;}
all.forEach(e=>{if(!e.name||typeof e.p!=="number"){console.log("FEHLER Karte",e.name);err++;}if(!(e.body&&e.body.length)&&!(e.aside&&e.aside.length)){console.log("FEHLER leer",e.name);err++;}(e.body||[]).forEach(b=>blk(b,e.name));(e.aside||[]).forEach(b=>blk(b,e.name));});
console.log(all.length+" Karten, ~"+words+" Wörter, S. "+Math.min(...all.map(e=>e.p))+"–"+Math.max(...all.map(e=>e.pe||e.p)));console.log(err?err+" Fehler":"Struktur OK");