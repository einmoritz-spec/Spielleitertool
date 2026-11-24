import glob,re
k=open('kopf.txt').read()
for f in glob.glob('*.tpl'):
    open(f[:-4]+'.html','w').write(open(f).read().replace('<!--KOPF-->',k).replace('<!--RAHMEN-->',open('rahmen.txt').read()).replace('<!--STIFT-->',open('stift.txt').read()))
