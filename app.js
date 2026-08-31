const state={events:[],search:'',stage:'all',institution:'all',year:'all',material:true};
const $=s=>document.querySelector(s);
const esc=s=>String(s??'').replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
const label=s=>s.replaceAll('-',' ').replace(/\b\w/g,m=>m.toUpperCase());

function fillSelect(el,values){for(const value of values){const o=document.createElement('option');o.value=value;o.textContent=label(value);el.appendChild(o)}}
function filtered(){const q=state.search.toLowerCase().trim();return state.events.filter(e=>{
  if(state.material&&e.materiality!=='high')return false;
  if(state.stage!=='all'&&!e.stage.includes(state.stage))return false;
  if(state.institution!=='all'&&e.institution!==state.institution)return false;
  if(state.year!=='all'&&!e.date.startsWith(state.year))return false;
  if(q&&!`${e.title} ${e.summary} ${e.institution} ${e.stage.join(' ')} ${e.domain.join(' ')}`.toLowerCase().includes(q))return false;
  return true;
}).sort((a,b)=>b.date.localeCompare(a.date))}
function countStage(events,stage){return events.filter(e=>e.stage.includes(stage)).length}
function render(){const events=filtered();$('#visible-count').textContent=events.length;$('#commitment-count').textContent=countStage(events,'commitment');$('#qualification-count').textContent=countStage(events,'qualification');$('#adoption-count').textContent=countStage(events,'adoption');$('#empty').hidden=events.length>0;
  $('#timeline').innerHTML=events.map(e=>`<article class="event"><div class="event-date">${esc(e.display_date)}</div><div class="event-card"><div class="event-top"><div><div class="institution">${esc(e.institution)}</div><h2>${esc(e.title)}</h2></div><span class="status ${e.source_status==='primary_source_verified'?'verified':''}">${esc(label(e.source_status))}</span></div><p>${esc(e.summary)}</p><div class="tags">${e.stage.map(x=>`<span class="tag">${esc(label(x))}</span>`).join('')}${e.domain.map(x=>`<span class="tag">${esc(label(x))}</span>`).join('')}</div><p class="source">${e.source_url?`<a href="${esc(e.source_url)}" target="_blank" rel="noopener">Primary source ↗</a> · `:''}${esc(e.manuscript_ref||'')}</p></div></article>`).join('')}
function bind(){$('#search').addEventListener('input',e=>{state.search=e.target.value;render()});$('#stage').addEventListener('change',e=>{state.stage=e.target.value;render()});$('#institution').addEventListener('change',e=>{state.institution=e.target.value;render()});$('#year').addEventListener('change',e=>{state.year=e.target.value;render()});$('#material').addEventListener('change',e=>{state.material=e.target.checked;render()});$('#reset').addEventListener('click',()=>{state.search='';state.stage='all';state.institution='all';state.year='all';state.material=true;$('#search').value='';$('#stage').value='all';$('#institution').value='all';$('#year').value='all';$('#material').checked=true;render()})}
async function init(){try{const r=await fetch('data/events.json',{cache:'no-store'});if(!r.ok)throw new Error(`HTTP ${r.status}`);const data=await r.json();state.events=data.events;$('#last-updated').textContent=`Updated ${data.updated}`;$('#event-count').textContent=`${state.events.length} events`;fillSelect($('#stage'),[...new Set(state.events.flatMap(e=>e.stage))].sort());fillSelect($('#institution'),[...new Set(state.events.map(e=>e.institution))].sort());fillSelect($('#year'),[...new Set(state.events.map(e=>e.date.slice(0,4)))].sort().reverse());bind();render()}catch(err){$('#timeline').innerHTML=`<p class="empty">Roadmap data could not be loaded: ${esc(err.message)}</p>`}}
init();
