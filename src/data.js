// Stable sample IDs are shared between discovery and trip planning.
export const cities = [
  {id:'barcelona',name:'Barcelona',country:'Spain',position:{x:44,y:46},description:'Sunshine, late dinners, and a city made for wandering.',tag:'Coastal favorite',color:'#e2aa82'},
  {id:'madrid',name:'Madrid',country:'Spain',position:{x:36,y:54},description:'Long lunches, art-filled afternoons, and lively plazas.',tag:'City energy',color:'#d6b68f'},
  {id:'lisbon',name:'Lisbon',country:'Portugal',position:{x:25,y:58},description:'Hillside views, tiled streets, and a little bit of magic.',tag:'Weekend escape',color:'#a9c6b3'}
];
export const places = [
  {id:'bunkers',cityId:'barcelona',name:'Bunkers del Carmel',category:'Viewpoint',tip:'Bring a snack and come before sunset for a view over the whole city.',author:'Maya',votes:24},
  {id:'mercat',cityId:'barcelona',name:'Mercat de Santa Caterina',category:'Food',tip:'A colorful market for a casual lunch between classes.',author:'Leo',votes:18},
  {id:'retiro',cityId:'madrid',name:'Retiro Park',category:'Outdoors',tip:'Pack a picnic and take the afternoon slow.',author:'Sofia',votes:21},
  {id:'alfama',cityId:'lisbon',name:'Alfama',category:'Neighborhood',tip:'Get a little lost in the side streets and find a viewpoint.',author:'Sam',votes:16},
  {"id":"sample-bcn-hostel","cityId":"barcelona","name":"Sample hostel","category":"Hostel","tip":"Example student note for a place to stay.","author":"Demo student","votes":8},
  {"id":"sample-bcn-nightlife","cityId":"barcelona","name":"Sample music venue","category":"Nightlife","tip":"Example student note for an evening out.","author":"Demo student","votes":6},
  {"id":"sample-mad-cafe","cityId":"madrid","name":"Sample café","category":"Food","tip":"Example student note for a café.","author":"Demo student","votes":9},
  {"id":"sample-mad-hostel","cityId":"madrid","name":"Sample hostel","category":"Hostel","tip":"Example student note for a place to stay.","author":"Demo student","votes":7},
  {"id":"sample-mad-nightlife","cityId":"madrid","name":"Sample music venue","category":"Nightlife","tip":"Example student note for an evening out.","author":"Demo student","votes":5},
  {"id":"sample-lis-cafe","cityId":"lisbon","name":"Sample café","category":"Food","tip":"Example student note for a café.","author":"Demo student","votes":9},
  {"id":"sample-lis-hostel","cityId":"lisbon","name":"Sample hostel","category":"Hostel","tip":"Example student note for a place to stay.","author":"Demo student","votes":7},
  {"id":"sample-lis-nightlife","cityId":"lisbon","name":"Sample music venue","category":"Nightlife","tip":"Example student note for an evening out.","author":"Demo student","votes":5}
];
export const students = [{id:'maya',displayName:'Maya',city:'Barcelona',interests:'Coffee runs · Weekend trips'},{id:'leo',displayName:'Leo',city:'Barcelona',interests:'Food · Photography'},{id:'sofia',displayName:'Sofia',city:'Madrid',interests:'Art · Outdoors'}];
export const initialTrips = [{id:'trip-barcelona',cityId:'barcelona',title:'A weekend in Barcelona',dates:'Your next adventure',placeIds:[],participantIds:[]}];
