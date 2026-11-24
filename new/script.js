/* ✏️ EDIT THIS PART — make it yours */
/* All of the personal text, dates, photos, and links live in this configuration. */
const C = {
  title: "Five Years of Us",
  since: "2021-11-25T00:00:00",      // the day you got together
  anniversary: "2026-11-25T00:00:00", // your 5th anniversary
  yourName: "Me",
  musicSrc: "",   // optional: your own song as an audio data URL. Empty = built-in music box tune
  question: "Will you go on a date with me?",
  questionSub: "It’s our 5th anniversary, and I want to do it right.",
  noLines: ["No","Are you sure?","Really sure?","Think again 🥺","Wrong button!","Nice try 😏","Just say yes","Too slow!","Can’t catch me","Press yes already 💛"],
  /* Photos: add your image file path or image URL in "src". */
  photos: [
    {src:"photos/5.jpg",cap:"Simple Data Ket Walang Pera"},{src:"photos/7.jpg",cap:"Sweet yarn"},
    {src:"photos/firsttrip.jpg",cap:"Diyan lang sa drt nag-gagala"},{src:"photos/silly.jpg",cap:"Tamang pa-cute lang"},
    {src:"photos/3.jpg",cap:"Nag gala lang"},{src:"photos/img1.jpg",cap:"Drt lang ulit"}
  ],
  letter: [
    "Loveee.",
    "Happyyyy 5th Anniversaryyyy.",
    "Grabe nakaka-limang taon na pala tayo magkasama whaahah.",
    "Salamat sa pag-suporta sa iba't-ibang desisyon ko sa buhay, sa pag-tanggap sa'kin kung sino man ako at sa iba pang mga bagay.",
    "Mahal kita bilang ikaw, bilang eikoo shaa wahahha.",
    "Lagi mo ko pinapasaya kahit pagod or stress man ako, at nandyan ka palagi sa tabi ko.",
    "You never fail to make me happy whahahaah, kahit simpleng bonding lang natin kahit nasa bahay lang masaya na eh, basta kasama ka.",
    "Sa limang taon na yun, nakita natin ang isa't isa mag-grow at mag-mature, sa dami ng pagsubok na pinagdaanan natin hindi tayo sumuko.",
    "Naalala mo ba yung unang ride natin, yung sa drt pa, ang OA natin sobrang aga natin umalis hahahaha kaya nagpalipas pa tayo oras.",
    "Tapos yung pinaka malayo natin napuntahan as of now is yung bataan, nung papunta masaya pa eh wala pa pagod nararamdaman eh ahahahah, kaso nung paguwi na power-off na eh HAHAH, pagod na.",
    "Mga ganung memories masaya balikan simpleng rides or bonding lang natin is special na para sakin.",
    "Salamat love ha, sa pag sabay sa mga trip ko sa buhay kahit weird yung iba ahahahhah.",
    "More memories and rides to come hehehe.",
    "Hoping baling araw naka four wheels naman tayo pag nagagala kasama kanya-kanya natin family.",
    "Saan naman kayo tayo mag pupunta lugar? ahahhaha.",
    "Laking pasasalamat ko talaga sayo love, kasi lagi nagging impact mo sakin, positive impact ah ahahaha.",
    "You helped me grow and matuto sa mga pagkakamali ko, ginuide mo ko to be a better person for myself, and ang dami ko natutunan don.",
    "Mas nagging mature ako dahil sayo, salamat sa pag-sermon sakin, pag-pasaway ako or mali yung nagawa ko, yun ang nagging way para matuto ako.",
    "Thank you so much love, for loving me for who i am, and accepting my flaws.",
    "Kahit na may anger issue ako tinaggap mo parin ako huhu, pero tinutulungan mo naman ako mapigilan yun.",
    "Pangako ko na mamahalin kita sa araw-araw, at sasamahan din kita sa mga trip at supporthan ka sa mga desisyon mo sa buhay.",
    "Nandito lang ako palagi sa tabi mo pag nalulungkot ka or may problema ka, lagi ako makikinig at papagaanin ang loob mo.",
    "Ayun lang love, hindi ko na pahabain pa.",
    "I love you so much, my love."
  ],
  reasons: [
    "Your laugh makes my whole day better",
    "You make ordinary days feel special",
    "You’re kind, even when it’s hard",
    "I’m fully myself around you",
    "Home is wherever you are"
  ],
  reasonImage: "photos/2.jpg", // add her photo here
  place: "RESE Guiguinto",
  placeArea: "Guiguinto, Bulacan",
  dateText: "Nov 28, 2026",
  timeText: "7:00 PM",   // change to your real time
  dates: [["🍽️","Good food first"],["📸","Photos together"],["🍰","Dessert after"],["🎲","Surprise me"]],
  pickReply: "Perfect plan. See you there! 💖"
};

const $=s=>document.querySelector(s);
const reduce=matchMedia('(prefers-reduced-motion:reduce)').matches;
/* Optional floating hearts: this is skipped for users who prefer reduced motion. */
if(!reduce)for(let i=0;i<20;i++){const s=document.createElement('i');s.className='star';s.textContent='♥';s.style.left=Math.random()*100+'vw';s.style.fontSize=(12+Math.random()*26)+'px';s.style.animationDuration=(10+Math.random()*12)+'s';s.style.animationDelay=(-Math.random()*20)+'s';document.body.appendChild(s)}

/* build the pages */
/* Page template and content assembly: C becomes HTML, then #book receives the result. */
const leaf=(cls,key,inner)=>`<section class="leaf ${cls}" data-k="${key}"><div class="in">${inner}</div></section>`;
let h='';
h+=leaf('cover','cover',`<div class="five foil">5</div><h1 class="foil">${C.title}</h1><p>A little book, just for you</p>`);
h+=leaf('','ask',`<div class="bear" aria-hidden="true">🧸</div><h1>${C.question}</h1><p class="k">${C.questionSub}</p><div class="btns"><button id="yes">Yes! 💛</button><span id="ph" hidden></span><button id="no">No</button></div><div id="msg" aria-live="polite"></div>`);
h+=leaf('','count',`<h2>Five years</h2><p class="k">and counting, every second</p><div class="big">5</div><div class="timer" id="timer"></div><div id="cd"></div>`);
for(let i=0;i<C.photos.length;i+=2){
  /* Each photo is loaded directly from the "src" path in C.photos. */
  const pol=p=>`<div class="pol"><div class="img"><img src="${p.src}" alt="${p.cap}"></div><p>${p.cap}</p></div>`;
  h+=leaf('','photo',`<h2>Memories</h2><p class="k">A few of my favorites</p><div class="pols">${C.photos.slice(i,i+2).map(pol).join('')}</div>`);
}
h+=leaf('ruled','letter',`<div class="letter" id="letter">${C.letter.map(p=>`<p>${p}</p>`).join('')}<p>${C.yourName} ♥</p></div>`);
h+=leaf('','why',`<h2>Five reasons</h2><p class="k">One for every year</p><div class="reason-layout"><img class="reason-photo" src="${C.reasonImage}" alt="A favorite photo of her"><ul class="rs">${C.reasons.map(r=>`<li>${r}</li>`).join('')}</ul></div>`);
h+=leaf('','date',`<h2>So, our date</h2><p class="k">You said yes, so here’s where I’m taking you</p><div class="ticket"><div class="tk-main"><small>Where</small><b>${C.place}</b><span>${C.placeArea}</span></div><div class="tk-side"><div><small>When</small><b>${C.dateText}</b></div><div><small>Time</small><b>${C.timeText}</b></div></div></div><a class="map" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(C.place+' Bulacan')}" target="_blank" rel="noopener">📍 Open in Maps</a><p class="k" style="margin:22px 0 10px">What should we do first?</p><div class="chips">${C.dates.map(d=>`<button class="chip">${d[0]} ${d[1]}</button>`).join('')}</div><div id="pick" aria-live="polite"></div>`);
h+=leaf('','end',`<div style="font-size:4rem">💛</div><h1 class="foil" style="font-size:clamp(2.4rem,9vw,3.6rem);background-image:linear-gradient(100deg,#e0409a,#9b4dff 50%,#e0409a)">Happy 5th Anniversary</h1><p class="k" style="margin-top:14px">Nov 25, 2026. The end of one chapter, and the start of the next.</p><button class="again" id="again">Celebrate again</button>`);
$('#book').innerHTML=h;
const leaves=[...document.querySelectorAll('.leaf')],N=leaves.length;
leaves.forEach((l,i)=>l.style.zIndex=N-i);

/* page turning */
/* Navigation state: cur tracks the active page and controls page flipping. */
let cur=0,yesd=false,spoken=false;
const prev=$('#prev'),next=$('#next');
function go(n){
  if(!yesd&&n>1)n=1;
  n=Math.max(0,Math.min(N-1,n));
  cur=n;
  leaves.forEach((l,i)=>l.classList.toggle('gone',i<n));
  prev.disabled=n===0;
  next.disabled=n===N-1||(n===1&&!yesd);
  next.textContent=n===0?'Open ›':'Next ›';
  $('#pg').textContent=n===0?'':(n===1&&!yesd?'Say yes to continue':`Page ${n} of ${N-1}`);
  const k=leaves[n].dataset.k;
  if(k==='letter')reveal();
  if(k==='end')burst();
}
prev.onclick=()=>go(cur-1);next.onclick=()=>go(cur+1);
addEventListener('keydown',e=>{if(e.key==='ArrowRight')go(cur+1);if(e.key==='ArrowLeft')go(cur-1)});
let tx=0;
addEventListener('touchstart',e=>tx=e.touches[0].clientX,{passive:true});
addEventListener('touchend',e=>{const d=e.changedTouches[0].clientX-tx;if(Math.abs(d)>70&&!e.target.closest('#no'))go(cur+(d<0?1:-1))},{passive:true});

/* the No button runs away (inside the page) */
/* The No button moves around until it is no longer close to the pointer. */
const no=$('#no'),yes=$('#yes'),ph=$('#ph'),askLeaf=leaves[1];let tries=0,last=0;
function dodge(px,py){
  if(!no.classList.contains('run')){
    const r=no.getBoundingClientRect(),lr=askLeaf.getBoundingClientRect();
    ph.hidden=false;ph.style.display='inline-block';ph.style.width=r.width+'px';ph.style.height=r.height+'px';
    no.style.left=(r.left-lr.left)+'px';no.style.top=(r.top-lr.top+askLeaf.scrollTop)+'px';
    no.classList.add('run');
  }
  const W=askLeaf.clientWidth,H=askLeaf.clientHeight,w=no.offsetWidth,h=no.offsetHeight,m=14;
  let nx,ny,k=0;
  do{nx=m+Math.random()*(W-w-2*m);ny=m+Math.random()*(H-h-2*m);k++}
  while(k<40&&px!=null&&Math.hypot(nx+w/2-px,ny+h/2-py)<150);
  requestAnimationFrame(()=>{no.style.left=nx+'px';no.style.top=ny+'px'});
  tries++;
  no.textContent=C.noLines[Math.min(tries,C.noLines.length-1)];
  yes.style.setProperty('--s',Math.min(1+tries*.08,1.6));
  $('#msg').textContent=tries>3?'The “No” button is feeling shy.':'';
}
function near(e){
  if(cur!==1)return;
  const r=no.getBoundingClientRect(),lr=askLeaf.getBoundingClientRect();
  if(Math.hypot(e.clientX-(r.left+r.width/2),e.clientY-(r.top+r.height/2))<85+r.width/3&&Date.now()-last>130){last=Date.now();dodge(e.clientX-lr.left,e.clientY-lr.top+askLeaf.scrollTop)}
}
addEventListener('pointermove',near);
['pointerdown','click','focus'].forEach(ev=>no.addEventListener(ev,e=>{e.preventDefault();const lr=askLeaf.getBoundingClientRect();dodge(e.clientX!=null?e.clientX-lr.left:null,e.clientY!=null?e.clientY-lr.top:null);if(ev==='focus')no.blur()}));

/* YES */
/* Saying yes unlocks the rest of the book and starts on the live counter page. */
yes.onclick=()=>{
  yesd=true;no.style.display='none';ph.style.display='none';
  $('#msg').textContent='I knew you’d say yes 💛';
  burst();setTimeout(()=>go(2),1500);go(1);
};

/* live counter */
/* Calculate elapsed relationship time and the countdown to the anniversary. */
const since=new Date(C.since).getTime(),ann=new Date(C.anniversary).getTime();
function draw(){
  const t=$('#timer');if(!t)return;
  const d=Math.max(0,Date.now()-since)/1000;
  t.innerHTML=[[Math.floor(d/86400),'days'],[Math.floor(d%86400/3600),'hours'],[Math.floor(d%3600/60),'minutes'],[Math.floor(d%60),'seconds']].map(v=>`<div><b>${v[0]}</b><small>${v[1]}</small></div>`).join('');
  const left=ann-Date.now();
  $('#cd').textContent=left>0?`Our 5th anniversary is in ${Math.floor(left/3600000)}h ${Math.floor(left%3600000/60000)}m`:'Happy 5th anniversary! 🥂';
}
draw();setInterval(draw,1000);

/* letter reveal */
/* Reveal each paragraph as the letter page opens. */
function reveal(){
  if(spoken)return;spoken=true;
  document.querySelectorAll('#letter p').forEach((p,i)=>setTimeout(()=>p.classList.add('show'),reduce?0:500+i*1700));
}

/* date picker */
/* Selecting an option highlights the chip and shows the confirmation message. */
document.querySelectorAll('.chip').forEach(c=>c.onclick=()=>{
  document.querySelectorAll('.chip').forEach(x=>x.classList.remove('sel'));c.classList.add('sel');
  $('#pick').textContent=C.pickReply;burst();
});
$('#again').onclick=burst;

/* confetti */
/* Canvas particles provide the heart/confetti burst on key celebrations. */
const cv=$('#fx'),cx=cv.getContext('2d');let parts=[],run=false;
function size(){cv.width=innerWidth;cv.height=innerHeight}size();addEventListener('resize',size);
function burst(){
  const cols=['#ff8ccb','#c026d3','#ffffff','#a855f7','#ffd1ea'];
  for(let i=0;i<(reduce?25:150);i++)parts.push({x:innerWidth/2,y:innerHeight*.6,vx:(Math.random()-.5)*16,vy:-Math.random()*17-4,s:6+Math.random()*7,c:cols[i%5],r:Math.random()*6,vr:(Math.random()-.5)*.4,h:i%5===0});
  if(!run)tick();
}
function tick(){
  run=true;cx.clearRect(0,0,cv.width,cv.height);
  parts.forEach(p=>{p.vy+=.32;p.x+=p.vx;p.y+=p.vy;p.r+=p.vr;cx.save();cx.translate(p.x,p.y);cx.rotate(p.r);cx.fillStyle=p.c;
    if(p.h){cx.font=p.s*2+'px serif';cx.fillText('♥',0,0)}else cx.fillRect(-p.s/2,-p.s/2,p.s,p.s*.6);cx.restore()});
  parts=parts.filter(p=>p.y<innerHeight+40);
  if(parts.length)requestAnimationFrame(tick);else{run=false;cx.clearRect(0,0,cv.width,cv.height)}
}
/* music: a soft music-box tune made in the browser (or your own file) */
/* Music setup: use C.musicSrc when provided, otherwise synthesize notes with Web Audio. */
const mus=$('#mus');let on=false,started=false,ctx,master,timer,step=0,nextT=0,audio;
const mf=m=>440*Math.pow(2,(m-69)/12);
const BARS=[
 {r:48,a:[60,64,67,72,67,64,67,64],m:[76,0,0,74,72,0,0,0]},
 {r:45,a:[57,60,64,69,64,60,64,60],m:[69,0,72,0,76,0,74,0]},
 {r:41,a:[60,65,69,72,69,65,69,65],m:[77,0,0,76,74,0,72,0]},
 {r:43,a:[59,62,67,71,67,62,67,62],m:[74,0,0,0,71,0,0,0]},
 {r:48,a:[60,64,67,72,67,64,67,64],m:[79,0,76,0,72,0,76,0]},
 {r:45,a:[57,60,64,69,64,60,64,60],m:[81,0,79,0,76,0,72,0]},
 {r:41,a:[60,65,69,72,69,65,69,65],m:[77,0,81,0,79,0,77,0]},
 {r:43,a:[59,62,67,71,67,62,67,62],m:[74,0,79,0,74,0,71,0]}
];
function note(m,t,vol,len){
  [[1,1],[2,.25]].forEach(([mul,g])=>{
    const o=ctx.createOscillator(),e=ctx.createGain();
    o.type=mul===1?'sine':'triangle';o.frequency.value=mf(m)*mul;
    e.gain.setValueAtTime(0,t);e.gain.linearRampToValueAtTime(vol*g,t+.008);e.gain.exponentialRampToValueAtTime(.0001,t+len);
    o.connect(e);e.connect(master);o.start(t);o.stop(t+len+.05);
  });
}
function sched(){
  while(nextT<ctx.currentTime+.35){
    const b=BARS[Math.floor(step/8)%BARS.length],i=step%8;
    if(i===0)note(b.r,nextT,.22,2.4);
    note(b.a[i],nextT,.09,1.2);
    if(b.m[i])note(b.m[i],nextT,.15,1.8);
    nextT+=.4;step++;
  }
}
function startMusic(){
  started=true;
  if(C.musicSrc){
    audio=audio||Object.assign(new Audio(C.musicSrc),{loop:true,volume:.6});
    audio.play().catch(()=>{});
    return;
  }
  if(!ctx){
    ctx=new (window.AudioContext||window.webkitAudioContext)();
    master=ctx.createGain();master.gain.value=.55;
    const dl=ctx.createDelay(1),fb=ctx.createGain(),wet=ctx.createGain();
    dl.delayTime.value=.42;fb.gain.value=.35;wet.gain.value=.4;
    master.connect(ctx.destination);master.connect(dl);dl.connect(fb);fb.connect(dl);dl.connect(wet);wet.connect(ctx.destination);
    nextT=ctx.currentTime+.1;timer=setInterval(sched,100);
  }
  ctx.resume();
}
function stopMusic(){
  if(audio)audio.pause();
  if(ctx)ctx.suspend();
}
function setMusic(v){
  on=v;mus.classList.remove('hint');mus.setAttribute('aria-pressed',v);
  mus.innerHTML=v?'🎵 <span>Music on</span>':'🔇 <span>Music off</span>';
  v?startMusic():stopMusic();
}
mus.onclick=e=>{e.stopPropagation();setMusic(!on)};
mus.classList.add('hint');
addEventListener('pointerdown',e=>{if(!started&&!e.target.closest('#mus'))setMusic(true)},{once:false});
addEventListener('keydown',()=>{if(!started)setMusic(true)});
document.addEventListener('visibilitychange',()=>{if(!on)return;document.hidden?stopMusic():startMusic()});
go(0);