import {initialTrips} from './data.js';
const key='rove-demo-v1';
let memory;
export function readState(){if(memory)return memory; try { const saved=JSON.parse(localStorage.getItem(key)); if(saved && Array.isArray(saved.trips)) return memory=saved; } catch {} return memory={trips:structuredClone(initialTrips),votes:{}}}
export function savePlace(tripId,placeId){const s=readState(),trip=s.trips.find(t=>t.id===tripId);if(!trip)return false;if(!trip.placeIds.includes(placeId))trip.placeIds.push(placeId);return persist(s)}
export function vote(placeId,direction){const s=readState();s.votes[placeId]=s.votes[placeId]===direction?0:direction;return persist(s)}
function persist(s){memory=s;try{localStorage.setItem(key,JSON.stringify(s));return true}catch{return false}}
