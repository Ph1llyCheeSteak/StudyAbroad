import {initialTrips} from './data.js';
const key='rove-demo-v1';
let memory;
export function readState(){if(memory)return memory; try { const saved=JSON.parse(localStorage.getItem(key)); if(saved && Array.isArray(saved.trips)) return memory=saved; } catch {} return memory={trips:structuredClone(initialTrips),votes:{}}}
export function savePlace(tripId,placeId){const s=readState(),trip=s.trips.find(t=>t.id===tripId);if(!trip)return false;if(!trip.placeIds.includes(placeId))trip.placeIds.push(placeId);return persist(s)}
export function vote(placeId,direction){const s=readState();s.votes[placeId]=s.votes[placeId]===direction?0:direction;return persist(s)}
// Crew shares the same browser-local state and persistence boundary as trips.
export function readCrew(){const s=readState();return s.crew ||= {friends:['maya'],requests:['leo'],sent:[],messages:{maya:[{from:'maya',text:'Hey! Want to explore the city this weekend?' }],'trip-barcelona':[{from:'maya',text:'Excited to plan this weekend together!'}]}}}
export function updateCrew(change){const c=readCrew();change(c);return persist(readState())}
function persist(s){memory=s;try{localStorage.setItem(key,JSON.stringify(s));return true}catch{return false}}
