'use strict';
const intro=document.querySelector('.brand-intro');
if(intro){try{if(sessionStorage.getItem('ire-intro-seen'))intro.remove();sessionStorage.setItem('ire-intro-seen','1');}catch{}setTimeout(()=>intro.remove(),1400);}
const pause=document.querySelector('.promise-pause');
const ticker=document.querySelector('.promise-track');
if(ticker){
 const source=ticker.firstElementChild.innerHTML;
 const fitTicker=()=>{
  const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
  const group=ticker.firstElementChild;group.innerHTML=source;
  if(!reduced){while(group.getBoundingClientRect().width<ticker.parentElement.clientWidth+100){group.insertAdjacentHTML('beforeend','<span aria-hidden="true" class="ticker-repeat">'+source+'</span>');}}
  const copy=group.cloneNode(true);copy.setAttribute('aria-hidden','true');ticker.lastElementChild.replaceWith(copy);
  ticker.style.setProperty('--ticker-duration',Math.max(20,group.getBoundingClientRect().width/30)+'s');
 };
 document.fonts.ready.then(fitTicker);new ResizeObserver(fitTicker).observe(ticker.parentElement);matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change',fitTicker);
}
pause?.addEventListener('click',()=>{const stopped=pause.getAttribute('aria-pressed')!=='true';pause.setAttribute('aria-pressed',String(stopped));pause.setAttribute('aria-label',stopped?'흐르는 문구 재생':'흐르는 문구 일시정지');pause.textContent=stopped?'▷':'Ⅱ';pause.closest('.promise-strip').classList.toggle('is-paused',stopped);});
// Event pages do not load the image gallery script that also controls navigation.
if(!document.querySelector('#photo-modal')){const button=document.querySelector('.menu-toggle'),menu=document.querySelector('#nav');button?.addEventListener('click',()=>{const open=button.getAttribute('aria-expanded')!=='true';button.setAttribute('aria-expanded',String(open));button.setAttribute('aria-label',open?'메뉴 닫기':'메뉴 열기');menu.classList.toggle('open',open);});document.addEventListener('keydown',e=>{if(e.key==='Escape'){button?.setAttribute('aria-expanded','false');menu?.classList.remove('open');}});}
if(document.querySelector('#recommended-name')){
 const choices=[...beefRecipes,...porkRecipes];let current='';try{current=sessionStorage.getItem('ire-last-recipe')||'';}catch{}
 function recommend(){const options=choices.filter(r=>r.id!==current);const r=options[Math.floor(Math.random()*options.length)];current=r.id;try{sessionStorage.setItem('ire-last-recipe',r.id);}catch{}
 document.querySelector('#recommended-cut').textContent=r.cut;
 document.querySelector('#recommended-name').textContent=r.name;
 document.querySelector('#recommended-intro').textContent=r.intro;
 const photo=document.querySelector('#recommended-photo');photo.src='/images/'+r.image;photo.alt=r.name;
 for(const id of ['recommended-link','recommended-photo-link'])document.getElementById(id).href='/recipes/'+r.id+'/';
 }
 recommend();document.querySelector('#another-recipe').addEventListener('click',recommend);
}
