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

  /* Serpentine: compact, with a protected caption lane and small outside turn cues. */
  .snake-shell{margin:14px 0 10px!important;padding:8px 0 4px!important}
  .snake-scroll{padding:30px 0 8px!important;overflow:visible!important}
  .snake-timeline{padding-inline:0!important;min-width:900px!important;overflow:visible!important}
  .snake-row{height:84px!important;margin-inline:56px!important;overflow:visible!important}
  .snake-row:first-child{margin-top:2px!important}
  .snake-row-years{position:relative!important;z-index:4!important;font-size:.58rem!important;line-height:1!important;letter-spacing:.05em!important;padding:0 0 7px!important}
  .snake-track{height:46px!important;padding-inline:2px!important;overflow:visible!important}
  .snake-node{min-width:12px!important;overflow:visible!important}
  .snake-dot{width:11px!important;height:11px!important;margin-top:-6px!important}
  .snake-node.anchor .snake-dot{width:11px!important;height:11px!important;margin-top:-6px!important;outline-width:1px!important}
  .snake-anchor-text{top:29px!important;width:104px!important;font-size:.52rem!important;line-height:1.10!important;color:#4e4b45!important;z-index:5!important;overflow:visible!important;max-height:none!important;white-space:normal!important;overflow-wrap:normal!important;word-break:normal!important;hyphens:none!important}
  .snake-anchor-text b{display:none!important}
  .snake-track>.snake-node:first-child .snake-anchor-text{left:0!important;right:auto!important;transform:none!important;text-align:left!important}
  .snake-track>.snake-node:last-child .snake-anchor-text{left:auto!important;right:0!important;transform:none!important;text-align:right!important}

  /* Give rows carrying visible anchor captions modest extra clearance. */
  .snake-row:has(.snake-node.anchor){height:94px!important}

  /* A small symbolic turn: outside the row, ending before the next row-year label. */
  .snake-turn{height:0!important;margin-top:-27px!important;margin-bottom:18px!important;z-index:1!important;position:relative!important}
  .snake-turn span{width:24px!important;height:22px!important;top:-10px!important;border-width:1.5px!important;border-radius:0 14px 14px 0!important}
  .snake-turn.right span{right:28px!important}
  .snake-turn.left span{left:28px!important}

  /* Direction: start at 2022, climb the turns, finish at 2030. */
  .snake-row:last-child .snake-track::before,.snake-row:first-child .snake-track::after,.snake-turn::after{content:"";position:absolute;width:0;height:0;z-index:7}
  .snake-row:last-child .snake-track::before{left:-2px;top:-5px;border-top:5px solid transparent;border-bottom:5px solid transparent;border-left:8px solid #9b958a;transform:translateX(-1px)}
  .snake-row:first-child .snake-track::after{right:-8px;top:-5px;border-top:5px solid transparent;border-bottom:5px solid transparent;border-left:8px solid #9b958a}
  .snake-turn.right::after{right:48px;top:-12px;border-top:4px solid transparent;border-bottom:4px solid transparent;border-right:7px solid #9b958a}
  .snake-turn.left::after{left:48px;top:-12px;border-top:4px solid transparent;border-bottom:4px solid transparent;border-left:7px solid #9b958a}

  /* One semantic dimension only: color/dash. All dots have the same base size. */
  .snake-key{display:flex;align-items:center;justify-content:center;gap:13px;flex-wrap:wrap;margin:18px 0 22px!important;color:#706c64;font-size:.64rem;line-height:1.2}
  .snake-key-label{font-weight:750;color:#5f5b54;margin-right:2px}
  .snake-key-item{display:inline-flex;align-items:center;gap:5px;white-space:nowrap}
  .snake-key-dot{display:inline-block;width:9px;height:9px;border-radius:50%;border:2px solid #f7f6f2;outline:1px solid #7d786f;background:#706b63}
  .snake-key-dot.commitment{background:#8d8578}.snake-key-dot.qualification{background:#526c80}.snake-key-dot.adoption{background:#4d7257}.snake-key-dot.prospective{background:#f7f6f2;outline:2px dashed #7d786f}

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
  #new-biology-roadmap{margin-top:28px!important;padding-top:20px!important}
  #new-biology-roadmap .roadmap-record{padding-bottom:24px!important}
  #new-biology-roadmap .roadmap-record .event-date{font-size:.70rem!important}
  #new-biology-roadmap .roadmap-record .institution{font-size:.62rem!important;letter-spacing:.055em!important}
  #new-biology-roadmap .roadmap-record h2{font-size:1.08rem!important;line-height:1.18!important;margin:.22rem 0 .42rem!important}
  #new-biology-roadmap .roadmap-record p{font-size:.80rem!important;line-height:1.42!important;margin:.34rem 0!important}
  #new-biology-roadmap .roadmap-record .record-sources{font-size:.66rem!important;line-height:1.35!important;margin-top:10px!important;padding-top:8px!important}
  #new-biology-roadmap .roadmap-record .event-card{padding:15px 17px!important}
  #view-roadmap .controls{padding:8px 0 16px!important}
  .source-methods{margin-top:42px}

  /* Compact non-Roadmap views by ~20%. */
  #view-evidence .kicker,#view-analysis .kicker,#view-sources .kicker{font-size:.61rem!important}
  #view-evidence .section-intro h2,#view-analysis .section-intro h2,#view-sources .section-intro h2{font-size:clamp(1.45rem,3.2vw,2.5rem)!important}
  #view-evidence .section-intro>p:not(.kicker),#view-analysis .section-intro>p:not(.kicker),#view-sources .section-intro>p:not(.kicker){font-size:.82rem!important;line-height:1.45!important}
  #view-evidence .block-head h3,#view-analysis .block-head h3,#view-sources .block-head h3,#view-sources .resource-list h3,#view-evidence .prose-card h3,#view-analysis .prose-card h3,#view-sources .prose-card h3{font-size:1.24rem!important}
  #view-evidence .data-card h4,#view-analysis .data-card h4,#view-sources .data-card h4,#view-evidence .metric-card h4,#view-analysis .metric-card h4,#view-sources .metric-card h4,#view-evidence .prose-card h4,#view-analysis .prose-card h4,#view-sources .prose-card h4{font-size:.92rem!important}
  #view-evidence .data-card p,#view-analysis .data-card p,#view-sources .data-card p,#view-evidence .metric-card p,#view-analysis .metric-card p,#view-sources .metric-card p,#view-evidence .prose-card p,#view-analysis .prose-card p,#view-sources .prose-card p{font-size:.80rem!important;line-height:1.43!important}
  #view-evidence .micro-note,#view-analysis .micro-note,#view-sources .micro-note{font-size:.66rem!important;line-height:1.4!important}
  #view-evidence .caution,#view-analysis .caution,#view-sources .caution{font-size:.80rem!important;line-height:1.42!important}
  #view-evidence .summary strong,#view-analysis .summary strong,#view-sources .summary strong,#view-evidence .evidence-summary strong,#view-analysis .analysis-summary strong{font-size:1.6rem!important}
  #view-evidence .summary span,#view-analysis .summary span,#view-sources .summary span,#view-evidence .evidence-summary span,#view-analysis .analysis-summary span{font-size:.61rem!important}
  #view-evidence .metric-card strong,#view-analysis .metric-card strong,#view-sources .metric-card strong,#view-sources .source-layer-card strong{font-size:1.64rem!important}
  #view-evidence .institution,#view-analysis .institution,#view-sources .institution{font-size:.62rem!important}
  #view-evidence .tag,#view-analysis .tag,#view-sources .tag{font-size:.58rem!important}
  #view-evidence .source,#view-analysis .source,#view-sources .source{font-size:.62rem!important}
  #view-evidence .status,#view-analysis .status,#view-sources .status{font-size:.56rem!important}
  #view-evidence .inline-check,#view-analysis .inline-check,#view-sources .inline-check{font-size:.64rem!important}
  #view-sources .source-layer-link,#view-sources .resource-list a{font-size:.80rem!important}

  @media(max-width:960px) and (min-width:721px){
    .snake-timeline{min-width:820px!important}
    .snake-row{margin-inline:48px!important}
    .snake-row:has(.snake-node.anchor){height:92px!important}
    .snake-anchor-text{width:94px!important;font-size:.49rem!important}
    .snake-turn span{width:20px!important;height:20px!important;top:-9px!important}
    .snake-turn.right span{right:26px!important}.snake-turn.left span{left:26px!important}
    .snake-turn.right::after{right:43px!important}.snake-turn.left::after{left:43px!important}
  }
  @media(max-width:720px){
    .hero h1{font-size:clamp(1.8rem,9vw,2.6rem)!important}
    .snake-shell{margin:10px 0 7px!important;padding:6px 0 3px!important}
    .snake-scroll{padding:22px 0 6px!important}
    .snake-timeline{min-width:0!important;width:100%!important;overflow:visible!important}
    .snake-row{height:72px!important;margin-inline:28px!important;overflow:visible!important}
    .snake-row:first-child{margin-top:1px!important}
    .snake-row-years{font-size:.51rem!important;padding-bottom:4px!important}
    .snake-track{height:39px!important;overflow:visible!important}
    .snake-anchor-text{display:none!important;top:24px!important;width:76px!important;font-size:.43rem!important;line-height:1.08!important;overflow:visible!important;max-height:none!important;white-space:normal!important;overflow-wrap:normal!important;word-break:normal!important;hyphens:none!important}
    .snake-node[data-node-id="2022-12-fda-modernization-2"] .snake-anchor-text,
    .snake-node[data-node-id="2025-04-10-fda-roadmap"] .snake-anchor-text,
    .snake-node[data-node-id="2025-12-aim-mash-qualification"] .snake-anchor-text,
    .snake-node[data-node-id="2026-08-31-fda-icmra-endotoxin"] .snake-anchor-text,
    .snake-node[data-node-id="prospective-mps-reusable-qualification"] .snake-anchor-text,
    .snake-node[data-node-id="prospective-composable-qualification"] .snake-anchor-text{display:block!important}
    .snake-row:has(.snake-node[data-node-id="2022-12-fda-modernization-2"]),
    .snake-row:has(.snake-node[data-node-id="2025-04-10-fda-roadmap"]),
    .snake-row:has(.snake-node[data-node-id="2025-12-aim-mash-qualification"]),
    .snake-row:has(.snake-node[data-node-id="2026-08-31-fda-icmra-endotoxin"]),
    .snake-row:has(.snake-node[data-node-id="prospective-mps-reusable-qualification"]),
    .snake-row:has(.snake-node[data-node-id="prospective-composable-qualification"]){height:84px!important}
    .snake-node[data-node-id="2022-12-fda-modernization-2"] .snake-anchor-text,
    .snake-node[data-node-id="2025-12-aim-mash-qualification"] .snake-anchor-text,
    .snake-node[data-node-id="prospective-mps-reusable-qualification"] .snake-anchor-text{width:82px!important;text-align:left!important}
    .snake-node[data-node-id="prospective-composable-qualification"] .snake-anchor-text{width:82px!important;text-align:right!important}
    .snake-turn{margin-top:-21px!important;margin-bottom:12px!important}
    .snake-turn span{width:16px!important;height:17px!important;top:-8px!important;border-radius:0 11px 11px 0!important}
    .snake-turn.right span{right:10px!important}.snake-turn.left span{left:10px!important}
    .snake-turn.right::after{right:23px!important;top:-10px!important}.snake-turn.left::after{left:23px!important;top:-10px!important}
    .snake-key{justify-content:flex-start;gap:8px 10px!important;margin:16px 0 20px!important;font-size:.54rem!important}
    .snake-key-label{flex-basis:100%;margin-bottom:-2px}
    .snake-key-dot{width:8px!important;height:8px!important}
    .snake-node.popup-open .snake-tooltip.snake-smart-popup{width:min(320px,calc(100vw - 20px))!important}
    .snake-tooltip-description{font-size:.78rem!important}.snake-tooltip-why{font-size:.74rem!important}
    #new-biology-roadmap .roadmap-record h2{font-size:1rem!important}
    #new-biology-roadmap .roadmap-record p{font-size:.76rem!important}
    #new-biology-roadmap .roadmap-record .event-card{padding:13px 14px!important}
    #view-evidence .section-intro h2,#view-analysis .section-intro h2,#view-sources .section-intro h2{font-size:1.38rem!important}
    #view-evidence .block-head h3,#view-analysis .block-head h3,#view-sources .block-head h3,#view-sources .resource-list h3,#view-evidence .prose-card h3,#view-analysis .prose-card h3,#view-sources .prose-card h3{font-size:1.15rem!important}
  }
  @media(max-width:380px){
    .hero h1{font-size:1.8rem!important}
    .snake-row{height:70px!important;margin-inline:25px!important}
    .snake-row:has(.snake-node[data-node-id="2022-12-fda-modernization-2"]),
    .snake-row:has(.snake-node[data-node-id="2025-12-aim-mash-qualification"]),
    .snake-row:has(.snake-node[data-node-id="2026-08-31-fda-icmra-endotoxin"]),
    .snake-row:has(.snake-node[data-node-id="prospective-mps-reusable-qualification"]),
    .snake-row:has(.snake-node[data-node-id="prospective-composable-qualification"]){height:82px!important}
    .snake-anchor-text{font-size:.41rem!important;width:70px!important}
    .snake-node[data-node-id="2025-04-10-fda-roadmap"] .snake-anchor-text{display:none!important}
    .snake-turn.right span{right:9px!important}.snake-turn.left span{left:9px!important}
    .snake-turn.right::after{right:22px!important}.snake-turn.left::after{left:22px!important}
    .snake-key{font-size:.52rem!important}
  }
`;
document.head.appendChild(uiStyle);

/* Compact visual key: color is the furthest observed stage; dashed means prospective. */
const snakeShell=document.querySelector('#view-roadmap .snake-shell');
if(snakeShell&&!snakeShell.querySelector('.snake-key')){
  const key=document.createElement('div');
  key.className='snake-key';
  key.setAttribute('aria-label','Roadmap dot key');
  key.innerHTML='<span class="snake-key-label">Dot key:</span><span class="snake-key-item"><i class="snake-key-dot commitment"></i>Commitment</span><span class="snake-key-item"><i class="snake-key-dot qualification"></i>Qualification</span><span class="snake-key-item"><i class="snake-key-dot adoption"></i>Adoption</span><span class="snake-key-item"><i class="snake-key-dot prospective"></i>Prospective</span>';
  snakeShell.appendChild(key);
}

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

/* Header metadata: retain only the updated date visually, but keep loader targets in the DOM. */
document.querySelectorAll('.hero-meta span:not(#last-updated)').forEach(el=>el.hidden=true);
