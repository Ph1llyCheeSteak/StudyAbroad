// Stable sample IDs are shared between discovery and trip planning.
export const cities = [
  {id:'barcelona',name:'Barcelona',country:'Spain',position:{x:44,y:46},description:'Sunshine, late dinners, and a city made for wandering.',tag:'Coastal favorite',color:'#e2aa82'},
  {id:'madrid',name:'Madrid',country:'Spain',position:{x:36,y:54},description:'Long lunches, art-filled afternoons, and lively plazas.',tag:'City energy',color:'#d6b68f'},
  {id:'lisbon',name:'Lisbon',country:'Portugal',position:{x:25,y:58},description:'Hillside views, tiled streets, and a little bit of magic.',tag:'Weekend escape',color:'#a9c6b3'}
];
export const places = [
  {id:'bunkers',cityId:'barcelona',name:'Bunkers del Carmel',category:'Viewpoint',tip:'Bring a snack and come before sunset for a view over the whole city.',author:'Maya',votes:24},
  {id:'mercat',cityId:'barcelona',name:'Mercat de Santa Caterina',category:'Food',tip:'A colorful market for a casual lunch between classes.',author:'Leo',votes:18},
  {id:'park-guell',cityId:'barcelona',name:'Park Güell',category:'Outdoors',coordinates:[41.4145,2.1527],tip:'A colorful park with sweeping city views.',author:'Maya',votes:31},
  {id:'sagrada-familia',cityId:'barcelona',name:'Sagrada Família',category:'Sightseeing',coordinates:[41.4036,2.1744],tip:'A landmark worth seeing up close; check opening hours before visiting.',author:'Demo student',votes:22},
  {id:'sample-bcn-rooftop',cityId:'barcelona',name:'Sample rooftop club',category:'Nightlife',coordinates:[41.392,2.174],tip:'A fictional late-night spot for trying the nightlife filter.',author:'Demo student',votes:-3},
  {id:'sample-bcn-dance',cityId:'barcelona',name:'Sample dance club',category:'Nightlife',coordinates:[41.38,2.187],tip:'A fictional music and dancing pick for the demo.',author:'Demo student',votes:12},
  {id:'sample-bcn-residence',cityId:'barcelona',name:'Sample student residence',category:'Housing',coordinates:[41.402,2.17],tip:'A fictional shared stay for trying the housing filter.',author:'Demo student',votes:11},
  {id:'sample-bcn-cafe',cityId:'barcelona',name:'Sample neighborhood café',category:'Food',coordinates:[41.399,2.16],tip:'A fictional café for a relaxed afternoon.',author:'Demo student',votes:14},
  {id:'sample-bcn-gallery',cityId:'barcelona',name:'Sample art gallery',category:'Entertainment',coordinates:[41.386,2.157],tip:'A fictional gallery for an easy afternoon out.',author:'Demo student',votes:16},
  {id:'retiro',cityId:'madrid',name:'Retiro Park',category:'Outdoors',tip:'Pack a picnic and take the afternoon slow.',author:'Sofia',votes:21},
  {id:'plaza-mayor',cityId:'madrid',name:'Plaza Mayor',category:'Sightseeing',coordinates:[40.4154,-3.7074],tip:'A historic square for a stroll through central Madrid.',author:'Demo student',votes:20},
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
