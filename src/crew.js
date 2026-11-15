import {students} from './data.js';
import {readState,readCrew,updateCrew} from './store.js';

const esc = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
let tab='friends', conversation=null, profile=null, feedback='';
export function openTripChat(id){tab='messages';conversation=id;profile=null}
export function openStudentProfile(id){profile=students.find(s=>s.id===id)?.id||null;conversation=null;tab='friends'}
const person = id => students.find(s => s.id===id);
const avatar = (name, id='') => `<span class="crew-avatar crew-avatar-${esc(id)}" aria-hidden="true">${esc(name.charAt(0))}</span>`;
const conversations = () => [...readCrew().friends.map(person).filter(Boolean).map(s=>({id:s.id,title:s.displayName,subtitle:`${s.city} · Sample student`})),...readState().trips.map(t=>({id:t.id,title:t.title,subtitle:'Sample trip group',trip:true}))];
function content(){
  const c=readCrew();
  if(profile){const s=person(profile);return `<div class="crew-list-head"><button class="crew-back" data-crew-action="close-profile" aria-label="Back to connections">←</button><h2>Sample profile</h2></div><div class="crew-row">${avatar(s.displayName,s.id)}<span class="crew-row-copy"><strong>${esc(s.displayName)}</strong><small>${esc(s.city)} · ${esc(s.interests)}</small></span></div><p class="crew-footnote">Fictional student · This profile is part of the demo.</p>${c.friends.includes(s.id)?`<button class="crew-action" data-crew-action="message" data-id="${esc(s.id)}">Open demo conversation</button>`:''}`}
  if(tab==='messages' && conversation){
    const entry=conversations().find(x=>x.id===conversation);
    if(!entry){conversation=null;return content()}
    const messages=c.messages[entry.id]||[];
    return `<div class="chat-header"><button class="crew-back" data-crew-action="back" aria-label="Back to messages">←</button>${avatar(entry.title,entry.id)}<div><strong>${esc(entry.title)}</strong><small>${esc(entry.subtitle)}</small></div>${entry.trip?`<a href="#roves/${esc(entry.id)}">View trip ↗</a>`:''}</div><div class="chat-messages" aria-label="Conversation"><p class="chat-caption">SAMPLE CONVERSATION · ONLY ON THIS DEVICE</p>${messages.map(m=>`<div class="chat-bubble ${m.from==='you'?'mine':''}">${esc(m.text)}</div>`).join('')}</div><form class="chat-compose" id="crew-compose"><label class="sr-only" for="crew-message">Write a message</label><input id="crew-message" name="message" maxlength="500" placeholder="Write a message…" autocomplete="off" required><button type="submit">Send</button></form><p class="crew-footnote">Demo only: messages are not sent to other people.</p>`;
  }
  if(tab==='messages') return `<div class="crew-list-head"><h2>Messages</h2><span>Sample inbox</span></div><div class="crew-list">${conversations().map(entry=>{const msgs=c.messages[entry.id]||[];const last=msgs.at(-1);return `<button class="crew-row" data-crew-action="open" data-id="${esc(entry.id)}">${avatar(entry.title,entry.id)}<span class="crew-row-copy"><strong>${esc(entry.title)}</strong><small>${esc(last?.text||entry.subtitle)}</small></span><span class="crew-arrow">›</span></button>`}).join('')}</div><p class="crew-footnote">Your conversations and trip chats will appear here.</p>`;
  if(tab==='friends') return `<div class="crew-list-head"><h2>Connections</h2><span>${c.friends.length} friends</span></div>${c.requests.length?`<div class="crew-section-label">FRIEND REQUESTS</div>${c.requests.map(id=>{const s=person(id);return s?`<div class="crew-row">${avatar(s.displayName,s.id)}<span class="crew-row-copy"><strong>${esc(s.displayName)}</strong><small>${esc(s.city)} · Sample student</small></span><button class="crew-action" data-crew-action="accept" data-id="${esc(s.id)}">Accept</button></div>`:''}).join('')}`:''}<div class="crew-section-label">YOUR FRIENDS</div>${c.friends.length?c.friends.map(id=>{const s=person(id);return s?`<div class="crew-row">${avatar(s.displayName,s.id)}<span class="crew-row-copy"><strong>${esc(s.displayName)}</strong><small>${esc(s.city)} · ${esc(s.interests)}</small></span><button class="crew-action secondary" data-crew-action="message" data-id="${esc(s.id)}">Message</button></div>`:''}).join(''):'<p class="crew-empty">No connections yet. Find students in Discover.</p>'}`;
  return `<div class="crew-list-head"><h2>Find your people</h2><span>Sample students</span></div><p class="crew-intro-copy">Meet students exploring beyond their own program.</p><div class="crew-list">${students.map(s=>{const status=c.friends.includes(s.id)?'Friends':c.requests.includes(s.id)?'Requested you':c.sent.includes(s.id)?'Requested':'Connect';return `<div class="crew-row">${avatar(s.displayName,s.id)}<span class="crew-row-copy"><strong>${esc(s.displayName)}</strong><small>${esc(s.city)} · ${esc(s.interests)}</small></span><button class="crew-action ${status==='Connect'?'':'secondary'}" data-crew-action="connect" data-id="${esc(s.id)}" ${status==='Connect'?'':'disabled'}>${status}</button></div>`}).join('')}</div>`;
}
export function renderCrew(root){
  root.innerHTML=`<section class="crew-page"><div class="crew-title"><div><span class="eyebrow">YOUR PEOPLE, YOUR PLANS</span><h1>Crew</h1><p>Good company makes the journey.</p></div><span class="crew-demo-badge">✦ Sample community</span></div><div class="crew-shell"><div class="crew-tabs" role="group" aria-label="Crew sections">${[['messages','Messages'],['friends','Friends'],['discover','Discover']].map(([id,label])=>`<button data-crew-tab="${id}" aria-pressed="${tab===id}">${label}${id==='friends'&&readCrew().requests.length?`<span class="crew-count">${readCrew().requests.length}</span>`:''}</button>`).join('')}</div><div class="crew-panel">${content()}</div></div><p class="crew-status" role="status">${esc(feedback)}</p><p class="crew-disclosure">Demo mode · People and conversations are fictional. Changes stay in this browser.</p></section>`;
  feedback='';
}
export function handleCrewClick(event,root){
  const target=event.target.closest('[data-crew-tab],[data-crew-action]');if(!target||!root.contains(target))return;
  if(target.dataset.crewTab){tab=target.dataset.crewTab;conversation=null;profile=null}
  const id=target.dataset.id, action=target.dataset.crewAction;
  if(action==='open'||action==='message'){conversation=id;profile=null;tab='messages'}
  if(action==='close-profile'){profile=null;history.replaceState(null,'','#crew')}
  if(action==='back')conversation=null;
  if(action==='accept'){const ok=updateCrew(c=>{c.requests=c.requests.filter(x=>x!==id);if(!c.friends.includes(id))c.friends.push(id)});feedback=ok?'Connection added. You can now add them to a trip in Roves.':'Saved for this session only.'}
  if(action==='connect'){const ok=updateCrew(c=>{if(!c.sent.includes(id))c.sent.push(id)});feedback=ok?'Request saved in this demo; no request was sent.':'Saved for this session only; no request was sent.'}
  renderCrew(root);
}
export function handleCrewSubmit(event,root){
  if(event.target.id!=='crew-compose')return;event.preventDefault();const input=event.target.elements.message;const text=input.value.trim();if(!text)return;
  const ok=updateCrew(c=>{(c.messages[conversation] ||= []).push({from:'you',text})});
  feedback=ok?'Saved in this browser; no message was sent.':'Saved for this session only; no message was sent.';renderCrew(root);root.querySelector('#crew-message')?.focus();
}
