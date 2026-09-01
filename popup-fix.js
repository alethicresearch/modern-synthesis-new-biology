/* Consolidated roadmap UI refinements. Loaded after app.js. */
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
      <button class="timeline-jump" type="button" data-jump-id="${esc(r.id)}" aria-label="Jump to expanded New Biology Roadmap record">↳ <span>Roadmap</span></button>
    </div>
  </div>`;
};

/* Interface cleanup. */
const evidenceIntro=document.querySelector('#view-evidence .section-intro');
if(evidenceIntro){
  evidenceIntro.querySelector('h2')?.remove();
  evidenceIntro.querySelectorAll(':scope > p:not(.kicker)').forEach(el=>el.remove());
}
const sourcesView=document.querySelector('#view-sources');
const methodsView=document.querySelector('#view-methods');
const methodsGrid=methodsView?.querySelector('.methods-grid');
if(sourcesView&&methodsGrid){
  const section=document.createElement('section');
  section.className='source-methods evidence-block';
  section.innerHTML='<div class="block-head"><div><p class="kicker">Methods + provenance</p></div></div>';
  section.appendChild(methodsGrid);
  sourcesView.appendChild(section);
}
document.querySelector('.view-tab[data-view="methods"]')?.remove();
methodsView?.remove();
if(location.hash==='#methods') history.replaceState(null,'','#sources');
document.querySelector('.snake-note')?.remove();
document.querySelector('#selected-detail')?.remove();
document.querySelector('#view-roadmap .legend')?.remove();

const uiStyle=document.createElement('style');
uiStyle.textContent=`
  .hero h1{font-size:clamp(2rem,4.7vw,4rem)!important}

  /* Serpentine composition: compact rows, true outer connector gutters, protected caption lanes. */
  .snake-shell{margin:16px 0 12px!important;padding:10px 0 6px!important}
  .snake-scroll{padding:32px 0 10px!important;overflow:visible!important}
  .snake-timeline{padding-inline:0!important;min-width:900px!important;overflow:visible!important}
  .snake-row{height:82px!important;margin-inline:56px!important}
  .snake-row:first-child{margin-top:4px!important}
  .snake-row-years{font-size:.58rem!important;line-height:1!important;letter-spacing:.05em!important;padding:0 1px 6px!important}
  .snake-track{height:46px!important;padding-inline:2px!important}
  .snake-node{min-width:12px!important}
  .snake-dot{width:11px!important;height:11px!important;margin-top:-6px!important}
  .snake-node.anchor .snake-dot{width:15px!important;height:15px!important;margin-top:-8px!important}
  .snake-anchor-text{top:16px!important;width:94px!important;font-size:.54rem!important;line-height:1.10!important;color:#4e4b45!important;z-index:5!important}
  .snake-anchor-text b{font-size:.53rem!important;margin-bottom:2px!important}
  .snake-track>.snake-node:first-child .snake-anchor-text{left:0!important;right:auto!important;transform:none!important;text-align:left!important}
  .snake-track>.snake-node:last-child .snake-anchor-text{left:auto!important;right:0!important;transform:none!important;text-align:right!important}
  .snake-turn{height:8px!important;margin-top:-34px!important;margin-bottom:22px!important;z-index:1!important}
  .snake-turn span{width:50px!important;height:38px!important;top:-1px!important;border-radius:0 24px 24px 0!important}
  .snake-turn.right span{right:6px!important}
  .snake-turn.left span{left:6px!important}

  /* Popup preview. */
  .snake-tooltip{width:330px!important;line-height:1.42!important;pointer-events:auto!important}
  .snake-tooltip-title{font-size:.88rem!important;margin:5px 0 7px!important}
  .snake-tooltip-description{display:block!important;color:#f4f1eb!important;margin:0 0 8px!important;font-size:.77rem!important}
  .snake-tooltip-why{display:block!important;color:#d8d2c9!important;margin:0 0 9px!important;padding-top:7px!important;border-top:1px solid rgba(255,255,255,.12)!important;font-size:.73rem!important}
  .snake-tooltip-why strong{display:inline!important;color:#fff!important;font-size:inherit!important}
  .snake-node .snake-tooltip.snake-smart-popup{position:fixed!important;left:var(--popup-left)!important;top:var(--popup-top)!important;right:auto!important;bottom:auto!important;transform:none!important;max-width:calc(100vw - 20px)!important;max-height:none!important;overflow:visible!important;z-index:1000!important}
  .snake-node .snake-tooltip.snake-smart-popup.snake-popup-scroll{max-height:calc(100vh - 20px)!important;overflow-y:auto!important;overscroll-behavior:contain;-webkit-overflow-scrolling:touch}
  .snake-node.popup-open .snake-tooltip{display:block!important}
  .snake-node .snake-tooltip.snake-smart-popup::after{content:""!important;position:absolute!important;width:0!important;height:0!important;transform:none!important;border-style:solid!important}
  .snake-node .snake-tooltip.snake-smart-popup[data-placement="top"]::after{left:var(--arrow-x)!important;top:auto!important;bottom:-7px!important;border-width:7px 7px 0!important;border-color:#22211f transparent transparent!important}
  .snake-node .snake-tooltip.snake-smart-popup[data-placement="bottom"]::after{left:var(--arrow-x)!important;top:-7px!important;bottom:auto!important;border-width:0 7px 7px!important;border-color:transparent transparent #22211f!important}
  .snake-node .snake-tooltip.snake-smart-popup[data-placement="left"]::after{left:auto!important;right:-7px!important;top:var(--arrow-y)!important;bottom:auto!important;border-width:7px 0 7px 7px!important;border-color:transparent transparent transparent #22211f!important}
  .snake-node .snake-tooltip.snake-smart-popup[data-placement="right"]::after{left:-7px!important;right:auto!important;top:var(--arrow-y)!important;bottom:auto!important;border-width:7px 7px 7px 0!important;border-color:transparent #22211f transparent transparent!important}

  /* Compact complete Roadmap records. */
  #new-biology-roadmap{margin-top:30px!important;padding-top:22px!important}
  #new-biology-roadmap .roadmap-record{padding-bottom:24px!important}
  #new-biology-roadmap .roadmap-record .event-date{font-size:.70rem!important}
  #new-biology-roadmap .roadmap-record .institution{font-size:.62rem!important;letter-spacing:.055em!important}
  #new-biology-roadmap .roadmap-record h2{font-size:1.08rem!important;line-height:1.18!important;margin:.22rem 0 .42rem!important}
  #new-biology-roadmap .roadmap-record p{font-size:.80rem!important;line-height:1.42!important;margin:.34rem 0!important}
  #new-biology-roadmap .roadmap-record .record-sources{font-size:.66rem!important;line-height:1.35!important;margin-top:10px!important;padding-top:8px!important}
  #new-biology-roadmap .roadmap-record .event-card{padding:15px 17px!important}
  #view-roadmap .controls{padding-top:10px!important}
  .source-methods{margin-top:42px}

  @media(max-width:960px) and (min-width:721px){
    .snake-timeline{min-width:820px!important}
    .snake-row{margin-inline:48px!important}
    .snake-turn span{width:42px!important}
    .snake-turn.right span{right:6px!important}.snake-turn.left span{left:6px!important}
    .snake-anchor-text{width:84px!important;font-size:.51rem!important}
  }
  @media(max-width:720px){
    .hero h1{font-size:clamp(1.8rem,9vw,2.6rem)!important}
    .snake-shell{margin:12px 0 8px!important;padding:8px 0 4px!important}
    .snake-scroll{padding:24px 0 8px!important}
    .snake-timeline{min-width:0!important;width:100%!important}
    .snake-row{height:72px!important;margin-inline:30px!important}
    .snake-row:first-child{margin-top:2px!important}
    .snake-row-years{font-size:.52rem!important;padding-bottom:4px!important}
    .snake-track{height:40px!important}
    .snake-anchor-text{top:14px!important;width:58px!important;font-size:.47rem!important;line-height:1.04!important}
    .snake-anchor-text b{font-size:.46rem!important;margin-bottom:1px!important}
    .snake-turn{height:7px!important;margin-top:-29px!important;margin-bottom:19px!important}
    .snake-turn span{width:26px!important;height:32px!important;border-radius:0 19px 19px 0!important}
    .snake-turn.right span{right:4px!important}.snake-turn.left span{left:4px!important}
    .snake-node.popup-open .snake-tooltip.snake-smart-popup{width:min(320px,calc(100vw - 20px))!important}
    .snake-tooltip-description{font-size:.78rem!important}.snake-tooltip-why{font-size:.74rem!important}
    #new-biology-roadmap .roadmap-record h2{font-size:1rem!important}
    #new-biology-roadmap .roadmap-record p{font-size:.76rem!important}
    #new-biology-roadmap .roadmap-record .event-card{padding:13px 14px!important}
  }
  @media(max-width:380px){.hero h1{font-size:1.8rem!important}.snake-row{margin-inline:26px!important}.snake-anchor-text{width:54px!important;font-size:.45rem!important}}
`;
document.head.appendChild(uiStyle);

function positionSnakePopup(node){
  if(!node)return;
  const dot=node.querySelector('.snake-dot'),tip=node.querySelector('.snake-tooltip');
  if(!dot||!tip)return;
  const margin=10,gap=14,vw=innerWidth,vh=innerHeight,dr=dot.getBoundingClientRect();
  tip.classList.add('snake-smart-popup');tip.classList.remove('snake-popup-scroll');
  const oldDisplay=tip.style.display,oldVisibility=tip.style.visibility;
  tip.style.visibility='hidden';tip.style.display='block';tip.style.width=`${Math.min(330,Math.max(240,vw-margin*2))}px`;tip.style.maxHeight='none';
  const w=Math.min(tip.offsetWidth,vw-margin*2),naturalH=tip.scrollHeight,maxH=Math.max(180,vh-margin*2),h=Math.min(naturalH,maxH);
  if(naturalH>maxH)tip.classList.add('snake-popup-scroll');
  const spaces={top:dr.top-margin,bottom:vh-dr.bottom-margin,left:dr.left-margin,right:vw-dr.right-margin};
  const need={top:h+gap,bottom:h+gap,left:w+gap,right:w+gap};
  const candidates=['top','bottom','right','left'].map(p=>({p,space:spaces[p],fit:spaces[p]>=need[p],score:spaces[p]-need[p]+((p==='top'||p==='bottom')?36:0)}));
  const placement=(candidates.filter(c=>c.fit).sort((a,b)=>b.score-a.score)[0]||candidates.sort((a,b)=>b.space-a.space)[0]).p;
  const cx=dr.left+dr.width/2,cy=dr.top+dr.height/2;let left,top;
  if(placement==='top'){left=cx-w/2;top=dr.top-h-gap}else if(placement==='bottom'){left=cx-w/2;top=dr.bottom+gap}else if(placement==='left'){left=dr.left-w-gap;top=cy-h/2}else{left=dr.right+gap;top=cy-h/2}
  left=Math.max(margin,Math.min(left,vw-w-margin));top=Math.max(margin,Math.min(top,vh-h-margin));
  tip.dataset.placement=placement;tip.style.setProperty('--popup-left',`${Math.round(left)}px`);tip.style.setProperty('--popup-top',`${Math.round(top)}px`);tip.style.setProperty('--arrow-x',`${Math.max(14,Math.min(w-14,cx-left))}px`);tip.style.setProperty('--arrow-y',`${Math.max(14,Math.min(h-14,cy-top))}px`);tip.style.visibility=oldVisibility;tip.style.display=oldDisplay;
}
function positionActiveSnakePopup(){const n=document.querySelector('.snake-node.popup-open')||document.querySelector('.snake-node:focus-within')||document.querySelector('.snake-node:hover');if(n)positionSnakePopup(n)}
document.addEventListener('pointerover',e=>{const n=e.target.closest?.('.snake-node');if(n)requestAnimationFrame(()=>positionSnakePopup(n))});
document.addEventListener('focusin',e=>{const n=e.target.closest?.('.snake-node');if(n)requestAnimationFrame(()=>positionSnakePopup(n))});
document.addEventListener('click',e=>{const d=e.target.closest?.('.snake-dot');if(d)requestAnimationFrame(()=>positionSnakePopup(d.closest('.snake-node')))});
addEventListener('resize',()=>requestAnimationFrame(positionActiveSnakePopup));
addEventListener('scroll',e=>{if(e.target instanceof Element&&e.target.closest('.snake-tooltip'))return;requestAnimationFrame(positionActiveSnakePopup)},true);
