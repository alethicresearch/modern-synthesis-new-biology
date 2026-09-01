/* Full serpentine milestone preview: loaded after app.js so it can extend the shared rendering helpers without duplicating the roadmap logic. */
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

const popupPreviewStyle = document.createElement('style');
popupPreviewStyle.textContent = `
  .snake-tooltip{width:330px!important;line-height:1.42!important}
  .snake-tooltip-title{font-size:.88rem!important;margin:5px 0 7px!important}
  .snake-tooltip-description{display:block!important;color:#f4f1eb!important;margin:0 0 8px!important;font-size:.77rem!important}
  .snake-tooltip-why{display:block!important;color:#d8d2c9!important;margin:0 0 9px!important;padding-top:7px!important;border-top:1px solid rgba(255,255,255,.12)!important;font-size:.73rem!important}
  .snake-tooltip-why strong{display:inline!important;color:#fff!important;font-size:inherit!important}
  @media(max-width:720px){
    .snake-node.popup-open .snake-tooltip{width:min(320px,calc(100vw - 28px))!important;max-height:70vh!important;overflow:auto!important}
    .snake-tooltip-description{font-size:.78rem!important}
    .snake-tooltip-why{font-size:.74rem!important}
  }
`;
document.head.appendChild(popupPreviewStyle);
