'use strict';
const beefRecipes=[
 {id:'grill',name:'소고기 구이',image:'ire-beef-grill.webp',intro:'고기 본연의 맛을 즐기는 한 접시',cut:'구이용 소고기',time:'2인분 / 약 20분',ingredients:'구이용 소고기 400g, 양송이버섯 4개, 마늘 6쪽, 식용유 약간, 소금과 후추 약간',steps:['고기 표면의 물기를 키친타월로 닦고 소금과 후추를 가볍게 뿌려주세요.','팬을 충분히 달군 뒤 식용유를 조금 두르고 고기를 겹치지 않게 올려주세요.','앞뒤로 노릇하게 굽고 두께에 맞춰 불을 조절하며 원하는 정도로 익혀주세요.','버섯과 마늘을 함께 구워 담고, 고기는 잠시 두었다 먹기 좋은 크기로 잘라주세요.'],tip:'구이용이라고 말씀해 주시면 드실 인원에 맞춰 부위와 양을 안내해 드릴게요.'},
 {id:'galbi',name:'양념 LA갈비',image:'ire-la-galbi.webp',intro:'달콤짭짤한 양념으로 즐기는 갈비구이',cut:'LA갈비용 소갈비',time:'2인분 / 조리 약 30분, 재우기 2시간 별도',ingredients:'LA갈비 600g, 간장 4큰술, 물 4큰술, 배즙 4큰술, 설탕 1큰술, 다진 마늘 1큰술, 맛술 2큰술, 참기름 1작은술, 후추 약간, 대파 약간',steps:['갈비의 뼛가루를 찬물로 짧게 씻어 제거한 뒤 물기를 닦아주세요.','간장, 물, 배즙, 설탕, 마늘, 맛술, 참기름과 후추를 섞어 양념을 만드세요.','갈비에 양념을 골고루 묻혀 냉장고에서 약 2시간 재워주세요.','팬에 갈비와 양념을 조금 넣고 중불에서 앞뒤로 익혀주세요. 뼈 주변까지 충분히 익으면 불을 줄여 양념을 졸이고 대파를 올려주세요.'],tip:'양념이 타기 시작하면 물을 조금씩 더해주세요. LA갈비용 부위의 준비 여부는 방문 전에 문의해 주세요.'},
 {id:'bulgogi',name:'소불고기',image:'ire-bulgogi.webp',intro:'채소를 넉넉히 넣어 온 가족이 함께',cut:'불고기용 소고기',time:'2인분 / 약 25분',ingredients:'불고기용 소고기 400g, 양파 1/2개, 대파 1대, 버섯 100g, 간장 3큰술, 배즙 3큰술, 설탕 1큰술, 다진 마늘 1큰술, 참기름 1작은술, 후추 약간',steps:['양파와 버섯은 먹기 좋게 썰고 대파는 어슷하게 썰어주세요.','간장, 배즙, 설탕, 마늘, 참기름과 후추를 섞어 고기에 골고루 버무려주세요.','달군 팬에 고기를 넣고 뭉치지 않게 풀어가며 볶아주세요.','양파와 버섯을 더해 고기 속까지 충분히 익힌 뒤 대파를 넣어 마무리해 주세요.'],tip:'촉촉하게 드시려면 볶을 때 물을 조금 더해주세요. 불고기용으로 얇게 손질해 달라고 말씀해 주세요.'}
];
const porkRecipes=[
 {id:'pork-grill',name:'삼겹살 구이',image:'ire-dinner-illustration.webp',intro:'노릇하게 구워 쌈채소와 함께',cut:'구이용 삼겹살',time:'2인분 / 약 25분',ingredients:'삼겹살 400g, 마늘 6쪽, 상추와 깻잎 적당량, 쌈장, 소금과 후추 약간',steps:['삼겹살 표면의 물기를 닦고 쌈채소는 씻어 물기를 빼주세요.','달군 팬에 삼겹살을 겹치지 않게 올리고 중불에서 앞뒤로 노릇하게 구워주세요.','먹기 좋은 크기로 잘라 단면과 속까지 충분히 익혀주세요. 마늘도 함께 구워주세요.','기름을 가볍게 뺀 뒤 쌈채소와 쌈장을 곁들여 따뜻할 때 드세요.'],tip:'취급하는 돼지고기는 암돼지입니다. 구이용 두께와 필요한 양을 편하게 말씀해 주세요.'},
 {id:'jeyuk',name:'삼겹살 제육볶음',image:'ire-jeyuk-editorial.webp',intro:'매콤달콤한 양념으로 든든한 한 끼',cut:'얇게 썬 삼겹살',time:'2인분 / 약 25분',ingredients:'삼겹살 400g, 양파 1/2개, 대파 1대, 양배추 100g, 고추장 2큰술, 고춧가루 1큰술, 간장 1큰술, 설탕 1큰술, 다진 마늘 1큰술, 맛술 1큰술, 참기름 1작은술, 후추 약간',steps:['삼겹살과 양배추는 한입 크기로 썰고 양파와 대파도 먹기 좋게 썰어주세요.','고추장, 고춧가루, 간장, 설탕, 마늘, 맛술과 후추를 섞어 양념을 준비해 주세요.','달군 팬에 삼겹살을 먼저 볶다가 양파, 양배추와 양념을 넣고 고기 속까지 충분히 익혀주세요.','양념이 뻑뻑하면 물을 조금 더해주세요. 대파를 넣어 볶은 뒤 불을 끄고 참기름을 둘러주세요.'],tip:'제육볶음용이라고 말씀해 주시면 볶기 편한 두께로 손질해 드릴게요.'},
 {id:'kimchi',name:'삼겹살 김치찌개',image:'ire-kimchi-jjigae.webp',intro:'잘 익은 김치와 끓여 깊고 구수하게',cut:'찌개용 삼겹살',time:'2인분 / 약 35분',ingredients:'삼겹살 250g, 잘 익은 김치 300g, 두부 1/2모, 양파 1/2개, 대파 1/2대, 물 600ml, 김칫국물 3큰술, 다진 마늘 1작은술, 고춧가루 1작은술, 국간장 약간',steps:['삼겹살과 김치를 먹기 좋게 썰고 양파, 두부, 대파도 준비해 주세요.','냄비에 삼겹살을 중불로 볶다가 김치를 넣고 3분 정도 더 볶아주세요.','물과 김칫국물, 양파, 마늘과 고춧가루를 넣고 끓어오르면 중약불로 줄여 약 20분 끓여주세요.','고기가 속까지 익었는지 확인한 뒤 두부와 대파를 넣고 5분 더 끓여주세요. 맛을 보고 부족한 간은 국간장으로 조금씩 맞춰주세요.'],tip:'김치의 짠맛과 신맛에 따라 물과 간을 조절해 주세요. 찌개용으로 먹기 좋게 손질해 드릴게요.'}
];
const beefDialog=document.querySelector('#beef-recipes'),beefView=document.querySelector('#beef-view');
let activeRecipes=beefRecipes,activeMeat='소고기';
let beefOpener;
function showBeefList(){
 beefView.innerHTML=`<h2 id="beef-dialog-title" tabindex="-1">오늘은 ${activeMeat}로 무엇을 만들까요?</h2><p class="beef-intro">마음에 드는 요리를 골라보세요. 재료와 만드는 순서를 안내해 드릴게요.</p><div class="beef-dishes"></div>`;
 const grid=beefView.querySelector('.beef-dishes');
 activeRecipes.forEach(r=>{const card=document.createElement('article');card.className='beef-dish';card.innerHTML=`<img src="/images/${r.image}" alt="${r.name}" width="1448" height="1086"><div><h3>${r.name}</h3><p>${r.intro}</p><button class="button red" type="button" aria-label="${r.name} 레시피 보기">레시피 보기 <span>↗</span></button></div>`;card.querySelector('button').addEventListener('click',()=>{location.href='/recipes/'+r.id+'/';});grid.append(card);});
 beefDialog.scrollTop=0;
}
function showBeefRecipe(r){
 beefView.innerHTML=`<button class="beef-back" type="button">← 다른 요리 보기</button><div class="beef-detail"><img src="/images/${r.image}" alt="${r.name}" width="1448" height="1086"><div><span class="recipe-question">${r.cut}</span><h2 id="beef-dialog-title" tabindex="-1">${r.name}</h2><p class="beef-time">${r.time}</p><h3>준비할 재료</h3><p>${r.ingredients}</p><h3>이렇게 만들어보세요</h3><ol>${r.steps.map(step=>`<li>${step}</li>`).join('')}</ol><p class="beef-tip">${r.tip}</p><a class="button red" href="tel:01099299291">요리에 맞는 부위 문의 ↗</a></div></div>`;
 beefView.querySelector('.beef-back').addEventListener('click',()=>{showBeefList();document.querySelector('#beef-dialog-title').focus();});
 beefDialog.scrollTop=0;document.querySelector('#beef-dialog-title').focus();
}
document.querySelectorAll('[data-open-beef],[data-open-pork]').forEach(b=>b.addEventListener('click',()=>{const pork=b.hasAttribute('data-open-pork');activeRecipes=pork?porkRecipes:beefRecipes;activeMeat=pork?'돼지고기':'소고기';beefOpener=b;document.querySelector('.beef-toolbar>span').textContent=activeMeat+' 요리 모음';showBeefList();beefDialog.showModal();document.body.classList.add('modal-open');document.querySelector('#beef-close').focus();}));
document.querySelector('#beef-close').addEventListener('click',()=>beefDialog.close());
beefDialog.addEventListener('close',()=>{document.body.classList.remove('modal-open');beefOpener?.focus({preventScroll:true});});
