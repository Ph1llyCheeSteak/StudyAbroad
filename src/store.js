import {initialTrips} from './data.js';
const key='rove-demo-v1';
let memory;
export function readState(){if(memory)return memory; try { const saved=JSON.parse(localStorage.getItem(key)); if(saved && Array.isArray(saved.trips)) return memory=saved; } catch {} return memory={trips:structuredClone(initialTrips),votes:{}}}
export function savePlace(tripId,placeId){const s=readState(),trip=s.trips.find(t=>t.id===tripId);if(!trip)return false;if(!trip.placeIds.includes(placeId))trip.placeIds.push(placeId);return persist(s)}
export function vote(placeId,direction){const s=readState();s.votes[placeId]=s.votes[placeId]===direction?0:direction;return persist(s)}
// Trip planning uses the same browser-local trip records as Explore.
export function createTrip({cityId,title,dates,placeIds=[],participantIds=[],description=""}){const s=readState(),id='trip-'+(globalThis.crypto?.randomUUID?.()||Date.now().toString(36)+'-'+Math.random().toString(36).slice(2,8));s.trips.push({id,cityId,title,dates,description,placeIds:[...new Set(placeIds)],participantIds:[...new Set(participantIds)]});return {id,saved:persist(s)}}
export function addTripParticipant(tripId,studentId){const s=readState(),trip=s.trips.find(t=>t.id===tripId);if(!trip)return false;trip.participantIds ||= [];if(!trip.participantIds.includes(studentId))trip.participantIds.push(studentId);return persist(s)}
// Crew shares the same browser-local state and persistence boundary as trips.
export function readCrew(){const s=readState();return s.crew ||= {friends:['maya'],requests:['leo'],sent:[],messages:{maya:[{from:'maya',text:'Hey! Want to explore the city this weekend?' }],'trip-barcelona':[{from:'maya',text:'Excited to plan this weekend together!'}]}}}
export function updateCrew(change){const c=readCrew();change(c);return persist(readState())}
function persist(s){memory=s;try{localStorage.setItem(key,JSON.stringify(s));return true}catch{return false}}

export function savedPosts(){return readState().savedPosts ||= []}
export function toggleSaved(id){const a=savedPosts(),i=a.indexOf(id);if(i<0)a.push(id);else a.splice(i,1);return persist(readState())}
export function editTrip(id,values){const t=readState().trips.find(x=>x.id===id);if(!t)return false;Object.assign(t,values);return persist(readState())}

export function updateQuests(fn){const s=readState();s.quests ||= [];s.questVotes ||= {};s.questComments ||= {};fn(s);return persist(s)}

// Board-post snapshots use stable IDs and share the existing local trip store.
export function boardPosts(){return readState().boardPosts ||= {}}
export function saveBoardPost(post){const s=readState();(s.boardPosts ||= {})[post.id]=post;const ids=s.savedPosts ||= [];if(!ids.includes(post.id))ids.push(post.id);return persist(s)}
