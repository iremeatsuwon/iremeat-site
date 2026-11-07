'use strict';
// A restrained physical response on pointer devices, never required to use a link.
const spatialMotion=matchMedia('(prefers-reduced-motion: reduce)');
const spatialPointer=matchMedia('(hover: hover) and (pointer: fine)');
document.querySelectorAll('[data-tilt]').forEach(el=>{
  let frame=0;
  const reset=()=>{cancelAnimationFrame(frame);el.style.removeProperty('transform');};
  el.addEventListener('pointermove',e=>{
    if(spatialMotion.matches||!spatialPointer.matches)return;
    const box=el.getBoundingClientRect();
    const x=(e.clientX-box.left)/box.width-.5,y=(e.clientY-box.top)/box.height-.5;
    const rotation=el.classList.contains('hero-photo')?-6:el.classList.contains('gift-visual')?5:0;
    cancelAnimationFrame(frame);frame=requestAnimationFrame(()=>{
      el.style.transform=`perspective(1200px) rotateX(${-y*5}deg) rotateY(${x*6}deg) rotateZ(${rotation}deg) translateY(-4px)`;
    });
  });
  el.addEventListener('pointerleave',reset);el.addEventListener('blur',reset);spatialMotion.addEventListener('change',reset);
});
