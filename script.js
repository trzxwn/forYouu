
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const IMG={cat:'assets/inline-06.webp',horse:'assets/inline-07.webp',dolphin:'assets/inline-08.webp',jelly:'assets/inline-09.webp',scroll:'assets/inline-10.webp',kitten:'assets/kitten.webp',sea:'assets/inline-11.webp',turtle:'assets/inline-12.webp',coral1:'assets/inline-13.webp',betta:'assets/inline-14.webp',cluster:'assets/inline-15.webp',coral2:'assets/inline-16.webp',manta1:'assets/inline-17.webp',manta2:'assets/inline-18.webp'};
const AR={"turtle": 0.942, "coral1": 1.0, "betta": 1.203, "cluster": 0.964, "coral2": 1.681, "manta1": 1.15, "manta2": 0.734, "dolphin": 0.605};
const STARS=['assets/inline-19.webp','assets/inline-20.webp','assets/inline-21.webp','assets/inline-22.webp','assets/inline-23.webp','assets/inline-24.webp'];
/* ===== CONFIG FILES: edit the files in config/ ===== */
const CFG={...window.BIRTHDAY_PROFILE,photos:window.BIRTHDAY_PHOTOS,music:window.BIRTHDAY_MUSIC};
$('#md').addEventListener('click',()=>{$('#md').style.display='none'});
$$('.nm').forEach(e=>e.textContent=CFG.name);$('#hbn').textContent=CFG.name;$('#hbq').textContent=CFG.description;$('#hba').textContent=CFG.age;$('#lb').innerHTML=CFG.letter.map(t=>`<p class="mb-3">${t}</p>`).join('');
/* zodiac + loader constellation */
const Z=[[10,20],[22,34],[35,28],[48,44],[40,62],[58,70]],mk=(pts,w)=>pts.map((p,i)=>i?`<line x1="${pts[i-1][0]*w}" y1="${pts[i-1][1]}" x2="${p[0]*w}" y2="${p[1]}"/>`:'').join('')+pts.map(p=>`<circle cx="${p[0]*w}" cy="${p[1]}" r="2"/>`).join('');
const ZD=[
{n:'Leo',g:'♌',p:'left:1%;top:4%;width:min(44vw,220px)',s:[[20,72,2.3,'#cfe2ff'],[22,60,1],[27,46,1.6],[28,34,1.1],[24,26,1.1],[16,30,1.2],[60,38,1.5],[60,54,1.1],[90,50,1.7]],e:[[0,1],[1,2],[2,3],[3,4],[4,5],[2,6],[6,8],[8,7],[7,6],[7,0]]},
{n:'Gemini',g:'♊',p:'right:2%;top:9%;width:min(36vw,190px)',s:[[30,12,1.7,'#e8f0ff'],[44,14,1.9,'#ffd9a0'],[32,36,1.1],[18,56,1.1],[12,72,1],[48,38,1.1],[58,52,.9],[52,76,1.4],[28,50,.8]],e:[[0,1],[0,2],[2,3],[3,4],[1,5],[5,6],[5,7],[2,5],[2,8]]},
{n:'Sagittarius',g:'♐',p:'left:-2%;top:45%;width:min(42vw,220px)',s:[[34,74,1.6],[30,54,1.2],[30,40,1.2],[50,32,1.1],[58,46,1.7,'#cfe2ff'],[56,66,1.3],[68,58,1],[14,62,1.2]],e:[[0,5],[5,4],[4,3],[3,2],[2,1],[1,0],[4,6],[6,5],[1,7]]},
{n:'Scorpius',g:'♏',p:'right:-3%;top:46%;width:min(50vw,260px)',s:[[24,12,1.2],[28,24,1.5],[24,34,1],[38,40,1.2],[40,50,2.4,'#ff9b8a'],[44,58,1],[48,68,1.3],[52,78,1.1],[58,86,1.1],[70,90,1.2],[80,84,1.4],[86,74,1],[84,66,1.2],[78,60,1.6]],e:[[0,1],[1,2],[1,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11],[11,12],[12,13]]},
{n:'Libra',g:'♎',p:'left:22%;top:76%;width:min(32vw,170px)',s:[[66,20,1.5],[24,40,1.5],[46,68,1.1],[74,50,1.1],[84,30,.8]],e:[[1,0],[0,3],[3,2],[2,1],[0,4]]},
{n:'Cancer',g:'♋',p:'right:16%;top:80%;width:min(26vw,140px)',s:[[48,48,1.2],[50,36,1.1],[42,12,1],[28,66,1.1],[64,90,1.2]],e:[[0,1],[1,2],[0,3],[0,4]]}];
function buildZod(){$('#zod').innerHTML=ZD.map(z=>`<div class="zc" style="${z.p}"><svg viewBox="0 0 100 100">${z.e.map(([a,b])=>`<line class="zl" x1="${z.s[a][0]}" y1="${z.s[a][1]}" x2="${z.s[b][0]}" y2="${z.s[b][1]}"/>`).join('')}${z.s.map(t=>`<circle cx="${t[0]}" cy="${t[1]}" r="${t[2]*3.4}" fill="url(#gl)"/><circle class="zs" style="animation-delay:-${(Math.random()*3).toFixed(1)}s" cx="${t[0]}" cy="${t[1]}" r="${t[2]*.85}" fill="${t[3]||'#fff'}"/>`).join('')}</svg><b>${z.g}\uFE0E ${z.n}</b></div>`).join('')}
buildZod();
const P2=[[15,70],[45,40],[75,60],[105,25],[135,55],[170,30]];$('#cn').innerHTML=mk(P2,1);
/* loader */
let p=0;const cs=$$('#cn circle'),ls=$$('#cn line'),iv=setInterval(()=>{p=Math.min(100,p+Math.random()*6+2);$('#bar').style.width=p+'%';$('#pc').textContent=Math.floor(p)+'%';cs.forEach((c,i)=>c.classList.toggle('on',p>i*100/cs.length));ls.forEach((l,i)=>l.classList.toggle('on',p>(i+1)*100/cs.length));
 if(p>=100){clearInterval(iv);setTimeout(()=>{$('#ldw').classList.add('hidden');$('#pw').classList.remove('hidden');gsap.from('#pw',{opacity:0,y:14});$('#pin input').focus()},400)}},120);
/* pin */
const ins=$$('#pin input');ins.forEach((el,i)=>{el.oninput=()=>{el.value=el.value.replace(/\D/g,'');if(el.value&&ins[i+1])ins[i+1].focus();if(ins.every(x=>x.value))chk()};el.onkeydown=e=>{if(e.key==='Backspace'&&!el.value&&ins[i-1])ins[i-1].focus()}});
function chk(){if(ins.map(x=>x.value).join('')===CFG.pin)return unlock();const b=$('#pin');b.classList.remove('bad');void b.offsetWidth;b.classList.add('bad');$('#hint').textContent=CFG.hint;setTimeout(()=>{ins.forEach(x=>x.value='');ins[0].focus();b.classList.remove('bad')},700)}
function unlock(){initAudio();spark(innerWidth/2,innerHeight/2,28,160);$('#app').classList.remove('lock');setTimeout(reveal,700);gsap.to('#gate',{scale:1.6,opacity:0,duration:1.1,ease:'power2.in',onComplete:()=>{$('#gate').style.display='none'}})}
/* sparkle + dust */
function spark(x,y,n,d,c){for(let i=0;i<n;i++){const s=document.createElement('i');s.className='sp';s.style.left=x+'px';s.style.top=y+'px';if(c)s.style.background=c;document.body.appendChild(s);const a=Math.random()*6.28,r=d*(.4+Math.random());gsap.to(s,{x:Math.cos(a)*r,y:Math.sin(a)*r+(d>100?40:0),opacity:0,scale:.2,duration:.7+Math.random()*.8,ease:'power2.out',onComplete:()=>s.remove()})}}
let lt=0;addEventListener('pointermove',e=>{const t=performance.now();if(t-lt>45){lt=t;spark(e.clientX,e.clientY,1,24)}gsap.to('#px1',{x:(e.clientX/innerWidth-.5)*-18,y:(e.clientY/innerHeight-.5)*-12,duration:1.2,overwrite:true})},{passive:true});
addEventListener('pointerdown',e=>spark(e.clientX,e.clientY,8,50));
/* next buttons */
$$('[data-n]').forEach(b=>b.onclick=()=>b.closest('section').nextElementSibling.scrollIntoView({behavior:'smooth'}));
const DEER_SRC='assets/deer.webp';new Image().src=DEER_SRC;
function reveal(){const d=document.getElementById('deer');d.src=DEER_SRC;const T=1.8;
gsap.timeline().fromTo(d,{opacity:0,scale:.5,y:24},{opacity:1,scale:1,y:0,duration:1.2,ease:'back.out(1.5)'},0)
.to('#hb1',{opacity:1,y:0,duration:.9},T+.1).fromTo('#hbn',{opacity:0,scale:.6},{opacity:1,scale:1,duration:1.1,ease:'back.out(1.6)'},T+.5).to(['#hbq','#hba','#wish'],{opacity:1,duration:.9,stagger:.3},T+1.3)}
$('#wish').onclick=()=>{const s=document.createElement('img'),sz=gsap.utils.random(34,84,1),W=innerWidth,H=innerHeight,x=gsap.utils.random(12,Math.max(13,W-sz-12),1),y=gsap.utils.random(H*.1,Math.max(H*.1+1,H*.75-sz),1);
 s.src=STARS[Math.floor(Math.random()*STARS.length)];s.alt='';s.style.cssText=`position:fixed;z-index:120;pointer-events:none;width:${sz}px;left:${x}px;top:${y}px;filter:drop-shadow(0 0 10px #b78cff)`;document.body.appendChild(s);
 gsap.timeline({onComplete:()=>s.remove()}).fromTo(s,{scale:0,opacity:0,rotate:gsap.utils.random(-40,40)},{scale:1,opacity:1,rotate:gsap.utils.random(-12,12),duration:.9,ease:'back.out(2)'}).to(s,{y:-30,duration:1.6,ease:'sine.inOut'},'<').to(s,{opacity:0,scale:.6,duration:.8,ease:'power1.in'},'+=.5');
 $('#wish').textContent='Permintaanmu terbang ke bintang';spark(x+sz/2,y+sz/2,10,sz*1.3,'#cdb8ff')};
/* gallery */
const FR=[{"src": 'assets/inline-25.webp', "ar": 0.5625, "hole": [0.1128, 0.0538, 0.7828, 0.9034]}, {"src": 'assets/inline-26.webp', "ar": 0.6625, "hole": [0.19, 0.17, 0.62, 0.67]}, {"src": 'assets/inline-27.webp', "ar": 1.0213, "hole": [0.26, 0.17, 0.54, 0.74]}];
const gr=$('#gr'),ZG='♈♉♊♋♌♍♎♏♐♑♒♓',LY=[[2,3,40,-7,0],[57,8,40,6,1],[22,56,50,4,2],[60,80,36,-6,0],[2,90,38,5,1],[26,128,50,-4,2]],ED=[[0,1],[0,2],[1,2],[2,3],[2,4],[4,5],[3,5]],zn=[50,-12];
const pins=LY.map(([x,y,w,r,f])=>{const h=w/FR[f].ar,t=r*Math.PI/180;return[x+w/2+h/2*Math.sin(t),y+h/2-h/2*Math.cos(t)]});
const ring=`<svg id="zr" viewBox="-50 -50 100 100"><circle r="47" fill="none" stroke="#cdb8ff" stroke-opacity=".45" stroke-width=".4"/><circle r="36" fill="none" stroke="#cdb8ff" stroke-opacity=".3" stroke-width=".3" stroke-dasharray="1 1.4"/>${[...ZG].map((g,i)=>{const a=i*Math.PI/6;return`<text x="${(41.5*Math.sin(a)).toFixed(1)}" y="${(-41.5*Math.cos(a)).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="5.5" fill="#e6d9ff" fill-opacity=".8">${g}\uFE0E</text>`}).join('')}</svg>`;
const ln=[...ED.map(([a,b])=>[pins[a],pins[b]]),[zn,pins[0]],[zn,pins[1]]];
gr.innerHTML=`<div id="zrw" style="left:8%;width:84%;aspect-ratio:1;top:${((zn[1]-42)/1.75).toFixed(2)}%">${ring}</div><svg id="cl" viewBox="0 0 100 175">${ln.map(([a,b])=>`<line class="cl" pathLength="1" x1="${a[0].toFixed(1)}" y1="${a[1].toFixed(1)}" x2="${b[0].toFixed(1)}" y2="${b[1].toFixed(1)}"/>`).join('')}${pins.map(p=>`<circle class="pn" cx="${p[0].toFixed(1)}" cy="${p[1].toFixed(1)}" r="3.4" fill="url(#gl)"/><circle class="pn" cx="${p[0].toFixed(1)}" cy="${p[1].toFixed(1)}" r=".9" fill="#fff"/>`).join('')}<circle cx="${zn[0]}" cy="${zn[1]}" r="6.5" fill="rgba(30,14,80,.85)" stroke="#f5d98b" stroke-width=".4"/><text x="${zn[0]}" y="${zn[1]}" font-size="7" text-anchor="middle" dominant-baseline="central" fill="#f5d98b">${CFG.zodiac[0]}\uFE0E</text><text x="${zn[0]}" y="${zn[1]+10.5}" font-size="3.2" text-anchor="middle" fill="#f5d98b" letter-spacing=".4">${CFG.zodiac[1].toUpperCase()}</text></svg>`;
const cards=CFG.photos.map((d,i)=>{const [x,y,w,r,f]=LY[i],F=FR[f],c=document.createElement('div'),hl=F.hole;c.className='card';c.style.cssText=`left:${x}%;top:${(y/1.75).toFixed(2)}%;width:${w}%;aspect-ratio:${F.ar};z-index:${[2,3,1,3,2,1][i]}`;c.innerHTML=`<div class="ph" style="left:${hl[0]*100}%;top:${hl[1]*100}%;width:${hl[2]*100}%;height:${hl[3]*100}%">${d[2]}</div><img class="fr" alt="" src="${F.src}">`;gsap.set(c,{rotate:r});gr.appendChild(c);
 c.onpointermove=e=>{const b=c.getBoundingClientRect();gsap.to(c,{transformPerspective:600,rotateY:((e.clientX-b.left)/b.width-.5)*22,rotateX:-((e.clientY-b.top)/b.height-.5)*22,duration:.3})};
 c.onpointerleave=()=>gsap.to(c,{rotateX:0,rotateY:0,duration:.6,ease:'elastic.out(1,.5)'});
 c.onclick=()=>{const m=$('#mi'),ph=c.querySelector('.ph');m.style.backgroundImage=ph.style.backgroundImage;m.textContent=ph.style.backgroundImage?'':d[2];$('#mt').textContent=d[0];$('#mc').textContent=d[1];$('#md').style.display='flex';gsap.from('#md>div',{scale:.5,opacity:0,duration:.6,ease:'back.out(1.7)'})};return c});
cards.forEach((c,i)=>{const src=CFG.photos[i][5];if(src){const ph=c.querySelector('.ph');ph.style.backgroundImage=`url("${src}")`;ph.style.backgroundSize='cover';ph.textContent=''}});
let galleryEntered=false,galleryVisible=false;const galleryFloatTweens=[];
new IntersectionObserver(es=>es.forEach(e=>{galleryVisible=e.isIntersecting;galleryFloatTweens.forEach(t=>galleryVisible?t.resume():t.pause());if(galleryVisible&&!galleryEntered){galleryEntered=true;
 gsap.fromTo('#zrw',{opacity:0,scale:.6},{opacity:.55,scale:1,duration:1.6,ease:'power2.out'});
 gsap.to('#cl .cl',{strokeDashoffset:0,duration:1.3,stagger:.14,ease:'power1.inOut',delay:.3});
 gsap.to('#cl .pn',{opacity:1,duration:.6,stagger:.05,delay:.7});
 cards.forEach((c,i)=>gsap.from(c,{x:gsap.utils.random(-220,220),y:gsap.utils.random(-260,260),scale:0,rotate:gsap.utils.random(-60,60),opacity:0,duration:1.4,ease:'elastic.out(1,.55)',delay:.5+i*.2,onComplete:()=>{const t=gsap.to(c,{y:'+=3',duration:2.5+Math.random()*1.5,yoyo:true,repeat:-1,ease:'sine.inOut',paused:!galleryVisible});galleryFloatTweens.push(t)} }))}}),{threshold:.2}).observe($('#s2'));
/* envelope */
$('.pp').style.backgroundImage=`url(${IMG.scroll})`;$('#kit').src=IMG.kitten;$('#catImg').src=IMG.cat;
let opened=0;$('#seal').onclick=()=>{if(opened)return;opened=1;spark(innerWidth/2,innerHeight/2,20,110,'#ffb3e6');const t=gsap.timeline();
 t.to('#seal',{scale:0,opacity:0,duration:.4}).to('#flap',{rotateX:180,zIndex:0,duration:.8}).to('.lt',{y:-120,duration:.8,ease:'power2.out'},'-=.2').to('.lt',{scale:1.2,opacity:0,duration:.5},'+=.2')
 .add(()=>{$('#paper').style.display='flex';$('#lb').scrollTop=0;gsap.fromTo('.pp',{scale:.3,y:200,opacity:0},{scale:1,y:0,opacity:1,duration:.9,ease:'back.out(1.4)'});gsap.fromTo('#lc',{opacity:0},{opacity:1,duration:.6,delay:.8});gsap.fromTo('#lb p',{opacity:0,y:12},{opacity:1,y:0,stagger:.35,delay:.7})})};
$('#lc').onclick=()=>{gsap.to('.pp,#lc',{scale:.3,y:200,opacity:0,duration:.5,onComplete:()=>{$('#paper').style.display='none';gsap.set('.pp,#lc',{clearProps:'transform,opacity'});gsap.set(['#seal','.lt','#flap'],{clearProps:'all'});opened=0}})};
/* cake */
let off=0;[[17,27.8],[31.5,36.6],[47,39],[62,36.6],[76.6,30]].forEach(([x,y])=>{const c=document.createElement('button');c.className='cd';c.style.left=x+'%';c.style.top=y+'%';c.innerHTML='<i></i><span class="fm"></span>';c.setAttribute('aria-label','lilin');
 c.onclick=()=>{if(c.classList.contains('off'))return;c.classList.add('off');spark(c.getBoundingClientRect().left+5,c.getBoundingClientRect().top,6,30,'#aaa');fxInit();const rr=c.getBoundingClientRect();fxSmoke(rr.left+rr.width/2,rr.top);if(++off===5)finale()};$('#ck').appendChild(c)});
function confetti(){const cl=['#cdb8ff','#f5d98b','#9b6fd6','#ffb3e6','#7c9bff'];for(let i=0;i<50;i++){const e=document.createElement('i');e.style.cssText=`position:fixed;z-index:190;top:-20px;left:${Math.random()*100}vw;width:8px;height:12px;background:${cl[i%5]};pointer-events:none`;document.body.appendChild(e);gsap.to(e,{y:innerHeight+40,x:gsap.utils.random(-80,80),rotate:gsap.utils.random(-540,540),duration:gsap.utils.random(2,4),delay:Math.random()*.8,ease:'power1.in',onComplete:()=>e.remove()})}}
/* sea */
const SE=$('#seaEl');let ANI=[],DT=null;
function spreadPos(items,W,H){const out=[];items.forEach(([w,h])=>{let best=null,bs=-1;for(let k=0;k<80;k++){const x=gsap.utils.random(0,Math.max(1,W-w)),y=gsap.utils.random(H*.05,Math.max(H*.2,H*.72-h)),cx=x+w/2,cy=y+h/2;let s=1e9;out.forEach(o=>s=Math.min(s,Math.hypot(cx-o.cx,cy-o.cy)));if(s>bs){bs=s;best={x,y,cx,cy}}}out.push(best)});return out}
function pickT(el,w,h,W,H){const MIN=Math.min(W,H)*.32,ym=Math.max(H*.2,H-h-200);let best=null,bs=-1;
 for(let k=0;k<20;k++){const x=gsap.utils.random(-w*.1,W-w*.9),y=gsap.utils.random(H*.04,ym),cx=x+w/2,cy=y+h/2;let s=1e9;
  ANI.forEach(o=>{if(o===el)return;const ox=gsap.getProperty(o,'x')+o.offsetWidth/2,oy=gsap.getProperty(o,'y')+o.offsetHeight/2;s=Math.min(s,Math.hypot(cx-o._cx,cy-o._cy),Math.hypot(cx-ox,cy-oy))});
  if(s>bs){bs=s;best=[x,y,cx,cy]}if(s>MIN)break}return best}
function buildSea(){gsap.killTweensOf(Array.from(SE.querySelectorAll('*')));gsap.set('#fin',{xPercent:-50,yPercent:-50});const W=innerWidth,H=innerHeight;
 let h=`<div id="bgi" style="background-image:url(${IMG.sea})"></div><div id="bgo"></div>`;
 for(let i=0;i<4;i++)h+=`<div class="ray" style="left:${i*26}%;transform:rotate(${-14+i*9}deg)"></div>`;
 for(let i=0;i<14;i++)h+=`<div class="sw" style="left:${i*7.5}%;height:${50+Math.random()*90}px;opacity:0"></div>`;
 for(let i=0;i<14;i++){const s=4+Math.random()*10;h+=`<span class="bb" style="left:${Math.random()*100}%;width:${s}px;height:${s}px"></span>`}
 /* [kelas, gambar, lebar, arah] — posisi awal disebar menjauh satu sama lain */
 const LST=[['fi','dolphin',84,'r'],['bt','betta',104,'l'],['mt','manta1',100],['tt','turtle',82,'l'],['jf',null,70],['bt','betta',84,'l'],['fi','dolphin',68,'r'],['mt','manta2',70],['jf',null,58],['hs',null,46]];
 const hh=a=>a[1]?a[2]/AR[a[1]]:(a[0]==='hs'?a[2]*1.6:a[2]*1.1);
 const pos=spreadPos(LST.map(a=>[a[2],hh(a)]),W,H);
 LST.forEach((a,i)=>{const [c,k,w,n]=a,p=pos[i],st=`left:${p.x.toFixed(0)}px;top:${p.y.toFixed(0)}px;width:${w}px;opacity:0`;
  if(c==='jf')h+=`<img class="im jf" src="${IMG.jelly}" style="${st}">`;
  else if(c==='hs')h+=`<img class="im hs" src="${IMG.horse}" style="${st}">`;
  else if(c==='mt')h+=`<img class="im mt" src="${IMG[k]}" style="${st}">`;
  else h+=`<div class="im cr ${c}" data-n="${n}" style="${st};aspect-ratio:${AR[k]}"><img class="a" src="${IMG[k]}"><img class="b" src="${IMG[k]}"></div>`});
 h+=`<img class="im dc" src="${IMG.coral2}" style="left:-6%;bottom:-2%;width:min(62vw,300px);opacity:0"><img class="im dc" src="${IMG.cluster}" style="left:calc(50% - min(23vw,130px));bottom:-3%;width:min(46vw,260px);opacity:0"><img class="im dc" src="${IMG.coral1}" style="right:-4%;bottom:-2%;width:min(40vw,200px);opacity:0">`;
 SE.innerHTML=h}
$('#dive').onclick=e=>{DT&&DT.kill();buildSea();const x=e.clientX,y=e.clientY;SE.parentNode.style.display='block';document.body.classList.add('sea');
 gsap.fromTo('#sea',{clipPath:`circle(0% at ${x}px ${y}px)`},{clipPath:`circle(150% at ${x}px ${y}px)`,duration:1.1,ease:'power2.inOut',onComplete:()=>{document.body.classList.add('dive');gsap.set('#sea',{clearProps:'clipPath'})}});
 const t=DT=gsap.timeline({delay:.3});
 t.to('#bgi',{opacity:1,duration:.7}).to('.ray',{opacity:.7,duration:1,stagger:.15},'-=.5').to('.sw',{opacity:1,scaleY:1,duration:.7,stagger:.03},'-=.9').from('.sw',{scaleY:0,duration:.7,stagger:.03},'<')
 .fromTo('.dc',{opacity:0,scaleY:.2},{opacity:1,scaleY:1,duration:.7,stagger:.12,ease:'back.out(1.4)'},'-=.6').to('.jf,.hs',{opacity:.95,duration:.5,stagger:.08},'-=.4').to('.fi,.bt,.tt,.mt',{opacity:.95,duration:.4,stagger:.08},'-=.3').add(loops).add(seaBoom,'+=.3')};
function loops(){gsap.utils.toArray('.ray').forEach((r,i)=>gsap.to(r,{rotate:'+=6',duration:5+i,yoyo:true,repeat:-1,ease:'sine.inOut'}));
 gsap.utils.toArray('.sw').forEach(s=>gsap.to(s,{skewX:gsap.utils.random(-9,9),duration:gsap.utils.random(2,3.5),yoyo:true,repeat:-1,ease:'sine.inOut'}));
function wander(el,o){const go=()=>{const W=innerWidth,H=innerHeight,w=el.offsetWidth||80,h=el.offsetHeight||90,[nx,ny,tcx,tcy]=pickT(el,w,h,W,H),cx=gsap.getProperty(el,'x'),cy=gsap.getProperty(el,'y'),dx=nx-cx,dy=ny-cy,dist=Math.hypot(dx,dy)||1,sg=dx>0?1:-1;el._cx=tcx;el._cy=tcy;
  gsap.to(el,{x:nx,y:ny,duration:dist/o.v*gsap.utils.random(.8,1.3),ease:'sine.inOut',onComplete:go});
  if(el.classList.contains('cr')){const want=sg>0?'r':'l',same=want===el.dataset.n;if(el._f!==want){el._f=want;gsap.to(el.children[0],{opacity:same?1:0,duration:.45});gsap.to(el.children[1],{opacity:same?0:1,duration:.45})}gsap.to(el,{rotate:gsap.utils.clamp(-26,26,Math.atan2(dy,Math.abs(dx))*57.3*sg*.5),duration:1})}
  else if(o.base!=null){const t=Math.atan2(dy,dx)*57.3-o.base,r0=gsap.getProperty(el,'rotate')||0,df=((t-r0)%360+540)%360-180;gsap.to(el,{rotate:r0+df,duration:1.3,ease:'sine.inOut'})}
  else gsap.to(el,{rotate:gsap.utils.clamp(-18,18,dx/W*45),duration:1.4})};
 if(!el._w){el._w=1;const ox=el.offsetLeft,oy=el.offsetTop;gsap.set(el,{left:0,top:0,x:ox,y:oy})}go()}
 ANI=gsap.utils.toArray('.jf,.fi,.bt,.tt,.mt,.hs');ANI.forEach(el=>{el._cx=el.offsetLeft+el.offsetWidth/2;el._cy=el.offsetTop+el.offsetHeight/2});
 gsap.utils.toArray('.jf').forEach((j,i)=>{wander(j,{v:26});gsap.to(j,{scaleY:.86,duration:1.3+i*.2,yoyo:true,repeat:-1,ease:'sine.inOut'})});
 gsap.utils.toArray('.fi').forEach(f=>wander(f,{v:95}));
 gsap.utils.toArray('.bt').forEach(f=>wander(f,{v:42}));
 gsap.utils.toArray('.tt').forEach(f=>wander(f,{v:18}));
 gsap.utils.toArray('.mt').forEach((f,i)=>wander(f,{v:48,base:i?221:150}));
 gsap.utils.toArray('.hs').forEach(h=>wander(h,{v:22}));
 gsap.utils.toArray('.dc').forEach(d=>gsap.to(d,{rotate:gsap.utils.random(-2.2,2.2),duration:gsap.utils.random(3,5),yoyo:true,repeat:-1,ease:'sine.inOut'}));
 gsap.to('#bgi',{scale:1.07,x:-12,duration:22,yoyo:true,repeat:-1,ease:'sine.inOut'});
 gsap.utils.toArray('.bb').forEach(b=>gsap.to(b,{y:-innerHeight-40,x:gsap.utils.random(-30,30),duration:gsap.utils.random(5,10),repeat:-1,delay:Math.random()*6,ease:'none'}))}
$('#up2').onclick=()=>{SEAK=0;SG.mode='none';SG.el=null;$('#sea').classList.remove('gl2');DT&&DT.kill();document.body.classList.remove('dive','sea');$('#app').scrollTop=0;gsap.to('#sea',{opacity:0,duration:.8,onComplete:()=>{gsap.killTweensOf(Array.from(SE.querySelectorAll('*')));gsap.killTweensOf('#bgi');ANI=[];SE.innerHTML='';$('#sea').style.display='none';gsap.set('#sea',{opacity:1});gsap.set('#fin',{opacity:0});$('#s1').scrollIntoView({behavior:'smooth'})}})};
/* ===== FINALE BOOM ===== */
const FX={cv:null,x:null,ps:[],run:0,W:0,H:0},FIN={on:0,done:0},R=(a,b)=>a+Math.random()*(b-a);
const PAL=[['#ffffff','#cfe0ff'],['#b78cff','#e6d9ff'],['#f5d98b','#fff1c4'],['#7cc3ff','#d6eeff'],['#ff9ad5','#ffd6ee'],['#9db8ff','#ffffff']];
function fxInit(){if(FX.cv)return;const c=FX.cv=document.createElement('canvas');c.style.cssText='position:fixed;inset:0;width:100%;height:100%;z-index:195;pointer-events:none';document.body.appendChild(c);FX.x=c.getContext('2d');fxSize();addEventListener('resize',fxSize)}
function fxSize(){const d=Math.min(devicePixelRatio||1,2);FX.W=innerWidth;FX.H=innerHeight;FX.cv.width=FX.W*d;FX.cv.height=FX.H*d;FX.x.setTransform(d,0,0,d,0,0)}
function fxAdd(p){p.age=0;if(p.drag==null)p.drag=.985;if(p.g==null)p.g=0;if(p.sz==null)p.sz=2;if(p.tr==null)p.tr=.035;if(p.life==null)p.life=1.5;FX.ps.push(p);if(FX.ps.length>1500)FX.ps.splice(0,200)}
function fxStart(){if(FX.run)return;FX.run=1;let last=performance.now();const loop=t=>{const dt=Math.min(.05,(t-last)/1000);last=t;fxStep(dt);if(FX.ps.length)requestAnimationFrame(loop);else{FX.run=0;FX.x.clearRect(0,0,FX.W,FX.H)}};requestAnimationFrame(loop)}
function fxStep(dt){const x=FX.x,W=FX.W,H=FX.H,k=dt*60,out=[];x.clearRect(0,0,W,H);
 for(const p of FX.ps){p.age+=dt;if(p.age>=p.life){if(p.type==='r')burst(p.x,p.y,p.shape,p.pal,p.S);continue}
  const f=1-p.age/p.life;
  if(p.type==='r'){p.x+=p.vx*dt;p.y+=p.vy*dt;fxAdd({type:'s',x:p.x,y:p.y,vx:R(-15,15),vy:R(10,40),drag:.9,sz:1.6,col:'#ffe7b0',life:.4,tr:.02});x.globalCompositeOperation='lighter';x.globalAlpha=1;x.fillStyle='#fff';x.beginPath();x.arc(p.x,p.y,2.4,0,6.283);x.fill()}
  else if(p.type==='s'){const d=Math.pow(p.drag,k);p.vx*=d;p.vy=p.vy*d+p.g*dt;p.x+=p.vx*dt;p.y+=p.vy*dt;x.globalCompositeOperation='lighter';x.globalAlpha=Math.min(1,f*1.6)*(p.tw?.55+.45*Math.random():1);x.strokeStyle=p.col;x.lineWidth=p.sz;x.lineCap='round';x.beginPath();x.moveTo(p.x-p.vx*p.tr,p.y-p.vy*p.tr);x.lineTo(p.x,p.y);x.stroke()}
  else if(p.type==='c'){const d=Math.pow(p.drag,k);p.vx*=d;p.vy=p.vy*d+p.g*dt;p.x+=p.vx*dt;p.y+=p.vy*dt;p.rot+=p.vr*dt;p.fl+=dt*9;x.globalCompositeOperation='source-over';x.globalAlpha=Math.min(1,f*4);x.fillStyle=p.col;x.save();x.translate(p.x,p.y);x.rotate(p.rot);x.scale(1,Math.cos(p.fl));x.fillRect(-p.w/2,-p.h/2,p.w,p.h);x.restore()}
  else if(p.type==='k'){p.x+=p.vx*dt;p.y+=p.vy*dt;p.sz+=dt*16;x.globalCompositeOperation='source-over';x.globalAlpha=.38*f;x.fillStyle='#c8d2ff';x.beginPath();x.arc(p.x,p.y,p.sz,0,6.283);x.fill()}
  else if(p.type==='l'){p.y+=p.vy*dt;p.x+=Math.sin(p.age*1.5+p.ph)*22*dt;const a=Math.min(1,p.age*1.5)*Math.min(1,p.life-p.age);x.globalCompositeOperation='lighter';x.fillStyle=p.col;x.globalAlpha=.07*a;x.beginPath();x.arc(p.x,p.y,p.sz*5,0,6.283);x.fill();x.globalAlpha=.18*a;x.beginPath();x.arc(p.x,p.y,p.sz*2.4,0,6.283);x.fill();x.globalAlpha=.95*a;x.beginPath();x.arc(p.x,p.y,p.sz,0,6.283);x.fill()}
  else if(p.type==='o'){p.y+=p.vy*dt;p.x+=Math.sin(p.age*3+p.ph)*18*dt;if(p.y<-20)continue;x.globalCompositeOperation='lighter';x.globalAlpha=.75*Math.min(1,f*2.2);x.strokeStyle='#cfefff';x.lineWidth=1.4;x.beginPath();x.arc(p.x,p.y,p.sz,0,6.283);x.stroke();x.globalAlpha*=.8;x.fillStyle='#fff';x.beginPath();x.arc(p.x-p.sz*.35,p.y-p.sz*.35,p.sz*.18,0,6.283);x.fill()}
  else if(p.type==='f'){p.x+=p.vx*dt;p.y=p.y0+Math.sin(p.age*p.fq+p.ph)*p.amp;const tx=p.x-p.vx*.12,ty=p.y0+Math.sin((p.age-.12)*p.fq+p.ph)*p.amp;x.globalCompositeOperation='lighter';x.globalAlpha=.9*Math.min(1,f*3);x.strokeStyle=p.col;x.lineWidth=p.sz;x.lineCap='round';x.beginPath();x.moveTo(tx,ty);x.lineTo(p.x,p.y);x.stroke();x.fillStyle='#fff';x.beginPath();x.arc(p.x,p.y,p.sz*.7,0,6.283);x.fill()}
  else if(p.type==='g'){if(!SEAK)continue;if(SG.el){const e=SG.el.getBoundingClientRect();SG.cx=e.left+e.width/2;SG.cy=e.top+e.height/2}
   let tx,ty,kk;
   if(SG.mode==='swirl'){const a=p.a0+p.age*p.w,rr=p.r0*(1+.08*Math.sin(p.age*2+p.i));tx=SG.cx+Math.cos(a)*rr;ty=SG.cy+Math.sin(a)*rr*.62;kk=14}
   else if(SG.mode==='heart'){const t=p.i/p.n*6.283,pu=1+.06*Math.sin(p.age*7),hx=Math.pow(Math.sin(t),3),hy=-(13*Math.cos(t)-5*Math.cos(2*t)-2*Math.cos(3*t)-Math.cos(4*t))/16;tx=SG.cx+hx*SG.S*pu;ty=SG.cy-SG.S*.08+hy*SG.S*pu;kk=34}
   else{tx=p.x;ty=p.y-200;kk=3}
   p.vx+=(tx-p.x)*kk*dt;p.vy+=(ty-p.y)*kk*dt;const dm=Math.pow(.96,k);p.vx*=dm;p.vy*=dm;p.x+=p.vx*dt;p.y+=p.vy*dt;
   x.globalCompositeOperation='lighter';x.globalAlpha=Math.min(1,p.age*2)*Math.min(1,(p.life-p.age)*1.5);x.strokeStyle=p.col;x.lineWidth=p.sz;x.lineCap='round';x.beginPath();x.moveTo(p.x-p.vx*.045,p.y-p.vy*.045);x.lineTo(p.x,p.y);x.stroke();x.fillStyle='#fff';x.beginPath();x.arc(p.x,p.y,p.sz*.6,0,6.283);x.fill()}
  out.push(p)}
 x.globalAlpha=1;x.globalCompositeOperation='source-over';
 FX.ps=out}
function burst(x,y,shape,pal,S){sndPop();const pts=[];
 if(shape==='ring')for(let i=0;i<64;i++){const a=i/64*6.283;pts.push([Math.cos(a),Math.sin(a)])}
 else if(shape==='star'){const V=[];for(let i=0;i<10;i++){const a=-Math.PI/2+i*Math.PI/5,r=i%2?.42:1;V.push([Math.cos(a)*r,Math.sin(a)*r])}for(let i=0;i<10;i++){const A2=V[i],B2=V[(i+1)%10];for(let j=0;j<9;j++){const u=j/9;pts.push([A2[0]+(B2[0]-A2[0])*u,A2[1]+(B2[1]-A2[1])*u])}}}
 else if(shape==='heart')for(let i=0;i<70;i++){const t=i/70*6.283;pts.push([Math.pow(Math.sin(t),3),-(13*Math.cos(t)-5*Math.cos(2*t)-2*Math.cos(3*t)-Math.cos(4*t))/16])}
 else for(let i=0;i<90;i++){const a=R(0,6.283),r=Math.sqrt(Math.random());pts.push([Math.cos(a)*r,Math.sin(a)*r])}
 pts.forEach(([a,b],i)=>fxAdd(FX.uw?{type:'s',x,y,vx:a*S,vy:b*S,drag:.955,g:-45,sz:R(2.6,4.2),col:pal[i%3?0:1],life:R(1.8,2.6),tr:.012,tw:1}:{type:'s',x,y,vx:a*S,vy:b*S,drag:.962,g:shape==='sphere'?160:90,sz:R(1.6,2.8),col:pal[i%3?0:1],life:R(1.3,2),tr:.04,tw:1}));
 for(let i=0;i<14;i++)fxAdd({type:'s',x,y,vx:R(-1,1)*S*.3,vy:R(-1,1)*S*.3,drag:.95,g:FX.uw?-40:60,sz:1.5,col:'#fff',life:R(.8,1.4),tr:.03,tw:1});fxStart()}
function launch(x,ty,shape,pal,S){const H=FX.H;fxAdd({type:'r',x,y:H+10,vx:R(-20,20),vy:-(H+10-ty)/.85,life:.85,shape,pal,S});fxStart()}
function cannon(side){const W=FX.W,H=FX.H,cols=['#ffffff','#cfe0ff','#b78cff','#f5d98b','#7cc3ff','#ff9ad5'];for(let i=0;i<70;i++){const a=R(-1.45,-.75),sp=R(700,1300);fxAdd({type:'c',x:side?W:0,y:H,vx:Math.cos(a)*sp*(side?-1:1),vy:Math.sin(a)*sp,g:700,drag:.985,rot:R(0,6),vr:R(-9,9),fl:R(0,6),w:R(6,10),h:R(10,16),col:cols[i%6],life:R(3,4.8)})}fxStart()}
function fxSmoke(x,y){for(let i=0;i<7;i++)fxAdd({type:'k',x:x+R(-3,3),y,vx:R(-12,12),vy:R(-70,-40),sz:R(3,6),life:R(1.2,2)});fxStart()}
function shoot(){fxAdd({type:'s',x:R(.4,1.1)*FX.W,y:R(-.1,.25)*FX.H,vx:-R(700,1000),vy:R(350,550),drag:1,sz:2.4,col:'#fff',life:R(.9,1.3),tr:.16});fxStart()}
function lantern(c){fxAdd({type:'l',x:R(.05,.95)*FX.W,y:FX.H+20,vy:-R(50,100),sz:R(3,6),life:R(6,9),ph:R(0,6),col:c?['#7cf0ff','#b78cff','#d6fbff','#ffd98a'][Math.floor(Math.random()*4)]:(Math.random()<.6?'#ffd98a':'#bcd2ff')});fxStart()}
function twk(){const d=document.createElement('div'),z=R(10,22);d.className='tw4';d.style.cssText=`left:${R(8,88)}%;top:${R(8,72)}%;width:${z}px;height:${z}px`;$('#ck').appendChild(d);setTimeout(()=>d.remove(),1100)}
/* suara */
function fxOut(){const c=A.c;if(!A.fx){A.fx=c.createGain();A.fx.connect(c.destination)}A.fx.gain.value=A.mute?0:1;return A.fx}
function noise(dur){const c=A.c,b=c.createBuffer(1,c.sampleRate*dur,c.sampleRate),d=b.getChannelData(0);for(let i=0;i<d.length;i++)d[i]=(Math.random()*2-1)*Math.pow(1-i/d.length,2);const s=c.createBufferSource();s.buffer=b;return s}
function sndBoom(){if(!A.c)return;const c=A.c,t=c.currentTime,out=fxOut(),o=c.createOscillator(),g=c.createGain();o.frequency.setValueAtTime(150,t);o.frequency.exponentialRampToValueAtTime(28,t+.8);g.gain.setValueAtTime(1,t);g.gain.exponentialRampToValueAtTime(.001,t+1);o.connect(g);g.connect(out);o.start(t);o.stop(t+1.05);
 const n=noise(.7),f=c.createBiquadFilter(),ng=c.createGain();f.type='lowpass';f.frequency.value=1400;ng.gain.value=.8;n.connect(f);f.connect(ng);ng.connect(out);n.start(t)}
let lastPop=0;function sndPop(){if(!A.c)return;const now=performance.now();if(now-lastPop<70)return;lastPop=now;const c=A.c,n=noise(.35),f=c.createBiquadFilter(),g=c.createGain();f.type='highpass';f.frequency.value=900;g.gain.value=.22;n.connect(f);f.connect(g);g.connect(fxOut());n.start(c.currentTime)}
function bell(fr,t,d,v){const c=A.c,out=fxOut();[[1,1],[2.76,.35],[5.4,.12]].forEach(([m,a])=>{const o=c.createOscillator(),g=c.createGain();o.frequency.value=fr*m;g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(v*a,t+.01);g.gain.exponentialRampToValueAtTime(.0001,t+d);o.connect(g);g.connect(out);o.start(t);o.stop(t+d+.05)})}
function sndMelody(){if(!A.c)return;const B=.42,N=[[392,.75],[392,.25],[440,1],[392,1],[523.25,1],[493.88,2],[392,.75],[392,.25],[440,1],[392,1],[587.33,1],[523.25,2],[392,.75],[392,.25],[783.99,1],[659.25,1],[523.25,1],[493.88,1],[440,1],[698.46,.75],[698.46,.25],[659.25,1],[523.25,1],[587.33,1],[523.25,2]];let t=A.c.currentTime+1.1;N.forEach(([f,b])=>{bell(f,t,1.6,.22);t+=b*B})}
/* aksi utama */
function finale(){if(FIN.on)return;FIN.on=1;FIN.done=0;FX.uw=0;fxInit();const ck=$('#ck').getBoundingClientRect(),cx=ck.left+ck.width/2,cy=ck.top+ck.height*.42,W=innerWidth,H=innerHeight,T=(f,ms)=>setTimeout(f,ms);
 if(A.c){A.c.resume();A.m.gain.setTargetAtTime(A.mute?0:.18,A.c.currentTime,.15)}
 sndBoom();navigator.vibrate&&navigator.vibrate([90,50,180,60,90]);
 const fl=document.createElement('div');fl.className='fl2';fl.style.background=`radial-gradient(circle at ${cx}px ${cy}px,#fff 0,#dbe6ff 18%,rgba(150,120,255,.5) 45%,transparent 75%)`;document.body.appendChild(fl);T(()=>fl.remove(),1100);
 [0,.18,.36].forEach(d=>{const r=document.createElement('div');r.className='rg';r.style.cssText=`left:${cx}px;top:${cy}px;animation-delay:${d}s`;document.body.appendChild(r);T(()=>r.remove(),2000)});
 const s4=$('#s4');s4.classList.add('shk2');T(()=>s4.classList.remove('shk2'),800);
 $('#ckimg').classList.add('glow');T(()=>$('#ckimg').classList.remove('glow'),6700);
 cannon(0);cannon(1);T(()=>{cannon(0);cannon(1)},900);
 /* judul */
 const o=document.createElement('div');o.id='bt2';const wd=(t,d0)=>`<span class="wd">${[...t].map((ch,i)=>`<span class="lx" style="animation-delay:${(d0+i*.07).toFixed(2)}s">${ch}</span>`).join('')}</span>`;
 o.innerHTML=`<div class="l1">${wd('Selamat',.4)} ${wd('Ulang',.9)} ${wd('Tahun',1.3)}</div><div class="l2">${wd(CFG.name,1.8)}</div>`;document.body.appendChild(o);T(()=>o.classList.add('out'),6200);T(()=>o.remove(),7400);
 /* kembang api */
 const SH=['sphere','star','ring','heart','sphere','star'],pk=()=>PAL[Math.floor(Math.random()*PAL.length)];
 const vol=(ms,n)=>T(()=>{for(let i=0;i<n;i++)T(()=>launch(R(.12,.88)*W,R(.12,.5)*H,SH[Math.floor(Math.random()*SH.length)],pk(),R(280,400)),i*160)},ms);
 T(()=>launch(W/2,H*.28,'heart',PAL[4],400),500);
 [300,1100,1700,2300,2900,3500,4100,4700,5300].forEach((m,i)=>vol(m,i%2?3:2));
 T(()=>[.15,.32,.5,.68,.85].forEach((u,i)=>T(()=>launch(u*W,H*(.18+(i%2)*.14),'star',PAL[i%PAL.length],420),i*110)),6200);
 for(let i=0;i<34;i++)T(lantern,1200+i*150);
 [700,1500,2500,3500,4600].forEach(m=>T(shoot,m));
 let n=0;const iv=setInterval(()=>{if(++n>55)clearInterval(iv);else twk()},130);
 sndMelody();
 T(()=>gsap.to('#ckm',{opacity:1,duration:1}),6800);
 T(()=>{FIN.done=1},9000);
 T(()=>{if(A.c)A.m.gain.setTargetAtTime(A.mute?0:1,A.c.currentTime,.8)},11500)}
$('#ck').addEventListener('click',()=>{if(!FIN.done)return;FIN.on=0;FIN.done=0;off=0;$$('.cd').forEach(c=>c.classList.remove('off'));gsap.to('#ckm',{opacity:0,duration:.4})});
/* ===== BOOM LAUT ===== */
let SEAK=0;const PSEA=[['#7cf0ff','#d6fbff'],['#b78cff','#e6d9ff'],['#5affc8','#d0fff0'],['#ff9ad5','#ffd6ee'],['#9db8ff','#ffffff'],['#f5d98b','#fff1c4']];
function bubble(){fxAdd({type:'o',x:R(0,FX.W),y:FX.H+R(0,40),vy:-R(140,380),sz:R(3,15),life:R(2.5,4.5),ph:R(0,6)});fxStart()}
function shoal(dir){const W=FX.W,H=FX.H;for(let i=0;i<30;i++)setTimeout(()=>{if(!SEAK)return;fxAdd({type:'f',x:dir?-20:W+20,y0:H*.42+R(-6,6),vx:(dir?1:-1)*380,amp:28,fq:3.4,ph:0,sz:2.6,col:['#7cf0ff','#b78cff','#5affc8'][i%3],life:(W+60)/380});fxStart()},i*55)}
const SG={mode:'none',cx:0,cy:0,S:100,el:null};
function sndSea(){if(!A.c)return;const c=A.c,t=c.currentTime,out=fxOut();
 const n=noise(3),nf=c.createBiquadFilter(),ng=c.createGain();nf.type='lowpass';nf.frequency.value=380;ng.gain.value=.5;n.connect(nf);nf.connect(ng);ng.connect(out);n.start(t);
 const o=c.createOscillator(),g=c.createGain(),f=c.createBiquadFilter();o.frequency.setValueAtTime(95,t+.3);o.frequency.exponentialRampToValueAtTime(190,t+1.6);o.frequency.exponentialRampToValueAtTime(70,t+3.4);f.type='lowpass';f.frequency.value=500;g.gain.setValueAtTime(0,t+.3);g.gain.linearRampToValueAtTime(.22,t+1.1);g.gain.linearRampToValueAtTime(0,t+3.6);o.connect(f);f.connect(g);g.connect(out);o.start(t+.3);o.stop(t+3.7);
 bell(783.99,t+1.7,2,.14);[587.33,739.99,880,1174.7,1480,1760].forEach((fr,i)=>bell(fr,t+2+i*.13,1.6,.1));
 [293.66,369.99,440,587.33].forEach(fr=>{const o2=c.createOscillator(),g2=c.createGain();o2.frequency.value=fr;g2.gain.setValueAtTime(0,t+2.4);g2.gain.linearRampToValueAtTime(.05,t+3.6);g2.gain.linearRampToValueAtTime(.05,t+9);g2.gain.linearRampToValueAtTime(0,t+10.8);o2.connect(g2);g2.connect(out);o2.start(t+2.4);o2.stop(t+10.9)});
 [587.33,739.99,880].forEach((fr,i)=>bell(fr,t+5.2+i*.12,2.2,.16));
 [1174.7,1480,1760,2349].forEach((fr,i)=>bell(fr,t+8+i*.12,2,.1));
 for(let i=0;i<10;i++){const tt=t+1+Math.random()*5,b=c.createOscillator(),bg=c.createGain();b.frequency.setValueAtTime(R(500,900),tt);b.frequency.exponentialRampToValueAtTime(R(1200,2000),tt+.07);bg.gain.setValueAtTime(.05,tt);bg.gain.exponentialRampToValueAtTime(.0001,tt+.1);b.connect(bg);bg.connect(out);b.start(tt);b.stop(tt+.12)}}
/* Kejutan laut: kerang raksasa -> mutiara -> pusaran ikan cahaya -> hati */
function seaBoom(){const k=SEAK=Date.now();fxInit();FX.uw=0;const W=innerWidth,H=innerHeight,T=(f,ms)=>setTimeout(()=>{if(SEAK===k)f()},ms),sea=$('#sea');
 if(A.c){A.c.resume();A.m.gain.setTargetAtTime(A.mute?0:.25,A.c.currentTime,.4)}
 sndSea();
 /* 1. laut hening, makhluk berpendar */
 sea.classList.add('gl2');
 /* 2. kerang muncul dari dasar */
 const cw=Math.min(W*.46,170),cl=document.createElement('div');cl.id='clam';
 cl.style.cssText=`position:absolute;left:${W/2-cw/2}px;bottom:${Math.max(14,H*.045)}px;width:${cw}px;z-index:3;opacity:0;pointer-events:none;filter:drop-shadow(0 0 18px rgba(180,150,255,.7))`;
 cl.innerHTML=`<svg viewBox="0 0 200 130" width="${cw}" style="display:block;overflow:visible"><defs><linearGradient id="cg1" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e9c9ff"/><stop offset="1" stop-color="#6d49c4"/></linearGradient><linearGradient id="cg2" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#bff6ff"/><stop offset=".55" stop-color="#b78cff"/><stop offset="1" stop-color="#7c3aed"/></linearGradient></defs><ellipse id="cin" cx="100" cy="80" rx="84" ry="26" fill="url(#gl)" style="opacity:0"/><path d="M12 78Q100 160 188 78Q100 98 12 78Z" fill="url(#cg1)" stroke="#f1e4ff" stroke-width="1.5"/><path d="M30 84Q100 138 170 84M52 88Q100 118 148 88" stroke="rgba(255,255,255,.35)" stroke-width="1.2" fill="none"/><g id="ctop" style="transform-box:view-box;transform-origin:12px 78px"><path d="M12 78Q100 -22 188 78Q100 62 12 78Z" fill="url(#cg2)" stroke="#f1e4ff" stroke-width="1.5"/><path d="M100 78L47 46M100 78L74 32M100 78L100 28M100 78L126 32M100 78L153 46" stroke="rgba(255,255,255,.4)" stroke-width="1.2" fill="none"/></g></svg>`;SE.appendChild(cl);
 T(()=>{cl.animate([{opacity:0,transform:'translateY(130%)'},{opacity:1,transform:'translateY(0)'}],{duration:1100,easing:'cubic-bezier(.2,.9,.3,1)',fill:'forwards'});for(let i=0;i<14;i++)T(bubble,i*80)},500);
 T(()=>{cl.querySelector('#ctop').animate([{transform:'rotate(0deg)'},{transform:'rotate(-40deg)'}],{duration:1100,easing:'cubic-bezier(.3,1.4,.5,1)',fill:'forwards'});cl.querySelector('#cin').animate([{opacity:0},{opacity:1}],{duration:900,fill:'forwards'})},1700);
 /* 3. mutiara keluar dan melayang naik */
 const S0=Math.min(W*.3,H*.2);let pr=null;
 T(()=>{const r=cl.getBoundingClientRect(),sx=r.left+r.width/2,sy=r.top+r.height*.58,ty=H*.4;pr=document.createElement('div');pr.id='prl';
  pr.style.cssText=`position:absolute;left:${sx-15}px;top:${ty-15}px;width:30px;height:30px;border-radius:50%;z-index:4;pointer-events:none;opacity:0;background:radial-gradient(circle at 35% 30%,#fff 0,#ffe9f7 30%,#d6c4ff 65%,#9b6fd6 100%);box-shadow:0 0 22px 8px rgba(255,235,255,.8),0 0 60px 20px rgba(150,220,255,.45)`;SE.appendChild(pr);SG.el=pr;
  pr.animate([{opacity:0,transform:`translateY(${sy-ty}px) scale(.4)`},{opacity:1,transform:`translateY(${(sy-ty)*.85}px) scale(.6)`,offset:.15},{opacity:1,transform:'translateY(0) scale(1.6)'}],{duration:2300,easing:'cubic-bezier(.3,.6,.3,1)',fill:'forwards'});
  navigator.vibrate&&navigator.vibrate(40);
  const sp=setInterval(()=>{if(SEAK!==k||!pr.isConnected){clearInterval(sp);return}const e=pr.getBoundingClientRect();fxAdd({type:'s',x:e.left+e.width/2+R(-8,8),y:e.top+e.height/2+R(-8,8),vx:R(-20,20),vy:R(10,40),drag:.97,g:20,sz:2,col:'#fff',life:R(.8,1.3),tr:.03,tw:1});fxStart()},80);setTimeout(()=>clearInterval(sp),4200)},2300);
 /* 4. pusaran ikan cahaya */
 T(()=>{SG.S=S0;SG.mode='swirl';for(let i=0;i<84;i++)setTimeout(()=>{if(SEAK!==k)return;const side=Math.random()<.5;fxAdd({type:'g',i,n:84,x:side?-20:W+20,y:R(.2,.8)*H,vx:(side?1:-1)*R(150,300),vy:R(-60,60),a0:R(0,6.283),r0:R(.5,1.2)*S0*.9,w:R(1.3,1.9),sz:R(1.8,3.2),col:['#7cf0ff','#b78cff','#5affc8','#d6fbff'][i%4],life:6.2-i*.02});fxStart()},i*20)},3000);
 /* 5. membentuk hati */
 T(()=>{SG.mode='heart'},5200);
 const o=document.createElement('div');o.id='bt2';const wd=(t,d0)=>`<span class="wd">${[...t].map((ch,i)=>`<span class="lx" style="animation-delay:${(d0+i*.07).toFixed(2)}s">${ch}</span>`).join('')}</span>`;
 o.innerHTML=`<div class="l1">${wd('Di',.2)} ${wd('laut',.4)} ${wd('sedalam',.65)} ${wd('ini,',1.05)}</div><div class="l2" style="font-size:clamp(2rem,11vw,4.2rem);color:#bff6ff">${wd('kamu',1.3)} ${wd('mutiaranya',1.55)}</div>`;
 T(()=>document.body.appendChild(o),5000);T(()=>o.classList.add('out'),9600);T(()=>o.remove(),10800);
 /* 6. mutiara larut jadi cahaya lembut */
 T(()=>{SG.mode='free';if(pr)pr.animate([{opacity:1,transform:'translateY(0) scale(1.6)'},{opacity:0,transform:'translateY(-10px) scale(3.4)'}],{duration:1400,fill:'forwards'});
  const e=pr?pr.getBoundingClientRect():{left:W/2,top:H*.4,width:0,height:0},b=document.createElement('div');b.style.cssText=`position:absolute;inset:0;z-index:4;pointer-events:none;opacity:0;background:radial-gradient(circle at ${e.left+e.width/2}px ${e.top+e.height/2}px,rgba(255,255,255,.85),rgba(160,240,255,.35) 25%,transparent 60%)`;SE.appendChild(b);b.animate([{opacity:0},{opacity:.8,offset:.4},{opacity:0}],{duration:1800,easing:'ease-in-out'}).onfinish=()=>b.remove();
  for(let i=0;i<26;i++)T(()=>lantern(1),i*90)},8000);
 T(()=>gsap.to('#fin',{opacity:1,duration:.9}),10600);
 setTimeout(()=>{if(A.c)A.m.gain.setTargetAtTime(A.mute?0:1,A.c.currentTime,.8)},12500)}
/* ===== AUDIO ===== */
const TR=CFG.music.map(t=>({n:t.title,a:t.album,cover:t.cover,s:t.s,ch:t.ch,el:t.src?new Audio(t.src):null}));
TR.forEach(t=>{if(t.el)t.el.loop=true});
const A={c:null,m:null,i:0,k:0,t0:0,on:0,mute:0,iv:null};
function initAudio(){if(A.c)return;A.c=new(window.AudioContext||window.webkitAudioContext)();A.m=A.c.createGain();A.m.gain.value=1;A.m.connect(A.c.destination);play()}
function chord(){const T=TR[A.i],c=A.c,t=c.currentTime,f=T.ch[A.k++%T.ch.length];f.forEach((fr,j)=>{const o=c.createOscillator(),g=c.createGain();o.type=j?'sine':'triangle';o.frequency.value=fr;g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(.06,t+1.4);g.gain.linearRampToValueAtTime(0,t+T.s+1);o.connect(g);g.connect(A.m);o.start(t);o.stop(t+T.s+1.2)});
 const o=c.createOscillator(),g=c.createGain();o.frequency.value=f[2]*4;g.gain.setValueAtTime(.025,t+1.2);g.gain.exponentialRampToValueAtTime(.0001,t+3.2);o.connect(g);g.connect(A.m);o.start(t+1.2);o.stop(t+3.3)}
function play(){if(!A.c)return;A.on=1;clearInterval(A.iv);const T=TR[A.i];if(T.el){T.el.muted=!!A.mute;T.el.play()}else{A.c.resume();chord();A.iv=setInterval(chord,T.s*1000)}ui()}
function pause(){A.on=0;clearInterval(A.iv);const T=TR[A.i];if(T.el)T.el.pause();else A.c&&A.c.suspend();ui()}
function go(d){const T=TR[A.i];if(T.el){T.el.pause();T.el.currentTime=0}A.i=(A.i+d+TR.length)%TR.length;A.k=0;A.t0=A.c.currentTime;if(A.on){A.c.resume();play()}ui()}
function ui(){const T=TR[A.i],vn=$('#vn');$('#tt').textContent=T.n;$('#ta').textContent=T.a;vn.textContent=T.cover?'':'🎵';vn.style.backgroundImage=T.cover?`url("${T.cover}")`:'';vn.style.backgroundSize=T.cover?'cover':'';vn.style.backgroundPosition=T.cover?'center':'';$('#pp').textContent=A.on?'⏸':'▶';$('#pb').classList.toggle('on',!!A.on);vn.classList.toggle('spin',!!A.on)}
const fm=s=>Math.floor(s/60)+':'+String(Math.floor(s%60)).padStart(2,'0');
setInterval(()=>{if(!A.c)return;const T=TR[A.i];let cur,dur=60;if(T.el){cur=T.el.currentTime;dur=T.el.duration||60}else cur=(A.c.currentTime-A.t0)%60;$('#pf').style.width=cur/dur*100+'%';$('#t1').textContent=fm(cur);$('#t2').textContent=fm(dur)},500);
$('#pr').onclick=e=>{const T=TR[A.i];if(T.el){const r=e.currentTarget.getBoundingClientRect();T.el.currentTime=(e.clientX-r.left)/r.width*T.el.duration}};
$('#pb').onclick=()=>{const m=$('#pm'),o=m.style.display==='block';if(!o){m.style.display='block';gsap.from(m,{scale:.7,opacity:0,y:20,duration:.4,ease:'back.out(1.6)',transformOrigin:'bottom right'});if(!A.c)initAudio()}else m.style.display='none'};
$('#pp').onclick=()=>A.on?pause():play();$('#nt').onclick=()=>go(1);$('#pv').onclick=()=>go(-1);
$('#mu').onclick=()=>{A.mute=!A.mute;A.m.gain.value=A.mute?0:1;TR.forEach(t=>t.el&&(t.el.muted=!!A.mute));$('#mu').textContent=A.mute?'🔇':'🔊'};
