import {initialTrips} from './data.js';
const key='rove-demo-v1';
let memory;
export function readState(){if(memory)return memory; try { const saved=JSON.parse(localStorage.getItem(key)); if(saved && Array.isArray(saved.trips)){if(!saved.interests)saved.interests={};return memory=saved} } catch {} return memory={trips:structuredClone(initialTrips),votes:{},interests:{}}}
export function savePlace(tripId,placeId){const s=readState(),trip=s.trips.find(t=>t.id===tripId);if(!trip)return false;if(!trip.placeIds.includes(placeId))trip.placeIds.push(placeId);return persist(s)}
export function vote(placeId,direction){const s=readState();s.votes[placeId]=s.votes[placeId]===direction?0:direction;return persist(s)}
export function markInterest(tripId){const s=readState();if(!s.interests)s.interests={};s.interests[tripId]=!s.interests[tripId];return persist(s)}
function persist(s){memory=s;try{localStorage.setItem(key,JSON.stringify(s));return true}catch{return false}}
