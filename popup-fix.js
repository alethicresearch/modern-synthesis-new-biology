/* Full serpentine milestone preview + viewport-aware popup positioning. Loaded after app.js. */
tooltip = function(r){
  const why = r.record_type === 'prospective' ? r.rationale : r.why_it_matters;
  return `<div class="snake-tooltip" role="dialog" aria-label="${esc(r.title)} preview">
    <span class="snake-tooltip-date">${esc(r.display_date||year(r))} · ${esc(r.institution||'Prospective')}</span>
    <b class="snake-tooltip-title">${esc(r.title)}</b>
    <span class="snake-tooltip-description">${esc(r.summary||'')}</span>
    ${why ? `<span class="snake-tooltip-why"><strong>Why it matters.</strong> ${esc(why)}</span>` : ''}
    <em>${esc((r.stage||[]).map(lab).join(' · '))}</em>
    <div class="snake-tooltip-actions">
      <span class="tooltip-source">${sourceBasis(r,true)}</span>
      <button class="timeline-jump" type="button" data-jump-id="${esc(r.id)}" title="Jump to expanded New Biology Roadmap record" aria-label="Jump to expanded New Biology Roadmap record">↳ <span>Roadmap</span></button>
    </div>
  </div>`;
};

/* Simplify section intros and fold Methods into Sources. */
const evidenceIntro=document.querySelector('#view-evidence .section-intro');
if(evidenceIntro){
  evidenceIntro.querySelector('h2')?.remove();
  evidenceIntro.querySelectorAll(':scope > p:not(.kicker)').forEach(el=>el.remove());
}
const sourcesView=document.querySelector('#view-sources');
const methodsView=document.querySelector('#view-methods');
const methodsGrid=methodsView?.querySelector('.methods-grid');
if(sourcesView&&methodsGrid){
  const methodsSection=document.createElement('section');
  methodsSection.className='source-methods evidence-block';
  methodsSection.innerHTML='<div class="block-head"><div><p class="kicker">Methods + provenance</p></div></div>';
  methodsSection.appendChild(methodsGrid);
  sourcesView.appendChild(methodsSection);
}
document.querySelector('.view-tab[data-view="methods"]')?.remove();
methodsView?.remove();
if(location.hash==='#methods') history.replaceState(null,'','#sources');

const popupPreviewStyle = document.createElement('style');
popupPreviewStyle.textContent = `
  .hero h1{font-size:clamp(2rem,4.7vw,4rem)!important}
  .snake-tooltip{width:330px!important;line-height:1.42!important}
  .snake-tooltip-title{font-size:.88rem!important;margin:5px 0 7px!important}
  .snake-tooltip-description{display:block!important;color:#f4f1eb!important;margin:0 0 8px!important;font-size:.77rem!important}
  .snake-tooltip-why{display:block!important;color:#d8d2c9!important;margin:0 0 9px!important;padding-top:7px!important;border-top:1px solid rgba(255,255,255,.12)!important;font-size:.73rem!important}
  .snake-tooltip-why strong{display:inline!important;color:#fff!important;font-size:inherit!important}

  /* Keep each serpentine connector outside the timeline row, in a dedicated side gutter. */
  .snake-timeline{padding-inline:30px!important}
  .snake-turn.right span{right:-26px!important}
  .snake-turn.left span{left:-26px!important}

  .snake-node .snake-tooltip.snake-smart-popup{
    position:fixed!important;
    left:var(--popup-left)!important;
    top:var(--popup-top)!important;
    right:auto!important;
    bottom:auto!important;
    transform:none!important;
    max-width:calc(100vw - 20px)!important;
    max-height:none!important;
    overflow:visible!important;
    z-index:1000!important;
  }
  .snake-node .snake-tooltip.snake-smart-popup.snake-popup-scroll{
    max-height:calc(100vh - 20px)!important;
    overflow-y:auto!important;
    overscroll-behavior:contain;
    -webkit-overflow-scrolling:touch;
  }
  .snake-node .snake-tooltip.snake-smart-popup::after{
    content:""!important;
    position:absolute!important;
    width:0!important;
    height:0!important;
    transform:none!important;
    border-style:solid!important;
  }
  .snake-node .snake-tooltip.snake-smart-popup[data-placement="top"]::after{
    left:var(--arrow-x)!important;top:auto!important;bottom:-7px!important;
    border-width:7px 7px 0 7px!important;
    border-color:#22211f transparent transparent transparent!important;
  }
  .snake-node .snake-tooltip.snake-smart-popup[data-placement="bottom"]::after{
    left:var(--arrow-x)!important;top:-7px!important;bottom:auto!important;
    border-width:0 7px 7px 7px!important;
    border-color:transparent transparent #22211f transparent!important;
  }
  .snake-node .snake-tooltip.snake-smart-popup[data-placement="left"]::after{
    left:auto!important;right:-7px!important;top:var(--arrow-y)!important;bottom:auto!important;
    border-width:7px 0 7px 7px!important;
    border-color:transparent transparent transparent #22211f!important;
  }
  .snake-node .snake-tooltip.snake-smart-popup[data-placement="right"]::after{
    left:-7px!important;right:auto!important;top:var(--arrow-y)!important;bottom:auto!important;
    border-width:7px 7px 7px 0!important;
    border-color:transparent #22211f transparent transparent!important;
  }
  .source-methods{margin-top:42px}
  @media(max-width:720px){
    .hero h1{font-size:clamp(1.8rem,9vw,2.6rem)!important}
    .snake-timeline{padding-inline:18px!important}
    .snake-turn.right span{right:-16px!important}
    .snake-turn.left span{left:-16px!important}
    .snake-node.popup-open .snake-tooltip.snake-smart-popup{width:min(320px,calc(100vw - 20px))!important}
    .snake-tooltip-description{font-size:.78rem!important}
    .snake-tooltip-why{font-size:.74rem!important}
  }
  @media(max-width:380px){.hero h1{font-size:1.8rem!important}}
`;
document.head.appendChild(popupPreviewStyle);

function positionSnakePopup(node){
  if(!node) return;
  const dot=node.querySelector('.snake-dot');
  const tip=node.querySelector('.snake-tooltip');
  if(!dot||!tip) return;

  const margin=10, gap=14;
  const vw=window.innerWidth, vh=window.innerHeight;
  const dr=dot.getBoundingClientRect();

  tip.classList.add('snake-smart-popup');
  tip.classList.remove('snake-popup-scroll');
  const oldDisplay=tip.style.display;
  const oldVisibility=tip.style.visibility;
  tip.style.visibility='hidden';
  tip.style.display='block';
  tip.style.setProperty('--popup-left','0px');
  tip.style.setProperty('--popup-top','0px');
  tip.style.width=`${Math.min(330,Math.max(240,vw-margin*2))}px`;
  tip.style.maxHeight='none';

  const w=Math.min(tip.offsetWidth,vw-margin*2);
  const naturalH=tip.scrollHeight;
  const maxViewportH=Math.max(180,vh-margin*2);
  const h=Math.min(naturalH,maxViewportH);
  if(naturalH>maxViewportH) tip.classList.add('snake-popup-scroll');

  const spaces={top:dr.top-margin,bottom:vh-dr.bottom-margin,left:dr.left-margin,right:vw-dr.right-margin};
  const need={top:h+gap,bottom:h+gap,left:w+gap,right:w+gap};
  const verticalBias=36;
  const candidates=['top','bottom','right','left'].map(p=>({p,space:spaces[p],fit:spaces[p]>=need[p],score:spaces[p]-need[p]+((p==='top'||p==='bottom')?verticalBias:0)}));
  const placement=(candidates.filter(c=>c.fit).sort((a,b)=>b.score-a.score)[0]||candidates.sort((a,b)=>b.space-a.space)[0]).p;

  const cx=dr.left+dr.width/2, cy=dr.top+dr.height/2;
  let left,top;
  if(placement==='top'){left=cx-w/2;top=dr.top-h-gap}
  else if(placement==='bottom'){left=cx-w/2;top=dr.bottom+gap}
  else if(placement==='left'){left=dr.left-w-gap;top=cy-h/2}
  else{left=dr.right+gap;top=cy-h/2}

  left=Math.max(margin,Math.min(left,vw-w-margin));
  top=Math.max(margin,Math.min(top,vh-h-margin));
  const arrowX=Math.max(14,Math.min(w-14,cx-left));
  const arrowY=Math.max(14,Math.min(h-14,cy-top));

  tip.dataset.placement=placement;
  tip.style.setProperty('--popup-left',`${Math.round(left)}px`);
  tip.style.setProperty('--popup-top',`${Math.round(top)}px`);
  tip.style.setProperty('--arrow-x',`${Math.round(arrowX)}px`);
  tip.style.setProperty('--arrow-y',`${Math.round(arrowY)}px`);
  tip.style.visibility=oldVisibility;
  tip.style.display=oldDisplay;
}

function positionActiveSnakePopup(){
  const node=document.querySelector('.snake-node.popup-open') || document.querySelector('.snake-node:focus-within') || document.querySelector('.snake-node:hover');
  if(node) positionSnakePopup(node);
}

document.addEventListener('pointerover',e=>{
  const node=e.target.closest?.('.snake-node');
  if(node) requestAnimationFrame(()=>positionSnakePopup(node));
});
document.addEventListener('focusin',e=>{
  const node=e.target.closest?.('.snake-node');
  if(node) requestAnimationFrame(()=>positionSnakePopup(node));
});
document.addEventListener('click',e=>{
  const dot=e.target.closest?.('.snake-dot');
  if(dot) requestAnimationFrame(()=>positionSnakePopup(dot.closest('.snake-node')));
});
window.addEventListener('resize',()=>requestAnimationFrame(positionActiveSnakePopup));
window.addEventListener('scroll',e=>{
  if(e.target instanceof Element && e.target.closest('.snake-tooltip')) return;
  requestAnimationFrame(positionActiveSnakePopup);
},true);
