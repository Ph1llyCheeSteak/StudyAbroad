// Wikimedia Commons photographs. See the visible source and license link on each image.
const photos={
 bunkers:{file:'bunkers.jpg',alt:'View of Barcelona from Bunkers del Carmel',author:'Alexey Komarov',license:'CC BY-SA 4.0',url:'https://commons.wikimedia.org/wiki/File:Barcelona,_View_from_Bunkers_del_Carmel.jpg',licenseUrl:'https://creativecommons.org/licenses/by-sa/4.0/'},
 mercat:{file:'market.jpg',alt:'Mercat de Santa Caterina in Barcelona',author:'Sergio Calleja',license:'CC BY-SA 2.0',url:'https://commons.wikimedia.org/wiki/File:Mercat_de_Santa_Caterina_(Barcelona).jpg',licenseUrl:'https://creativecommons.org/licenses/by-sa/2.0/'},
 'park-guell':{file:'park-guell.jpg',alt:'View from the terrace at Park Güell',author:'Daniel Kraft',license:'CC BY-SA 3.0',url:'https://commons.wikimedia.org/wiki/File:Parc_G%C3%BCell_Terrace.jpg',licenseUrl:'https://creativecommons.org/licenses/by-sa/3.0/'},
 'sagrada-familia':{file:'sagrada.jpg',alt:'Exterior of the Sagrada Família in Barcelona',author:'Didier Descouens',license:'CC BY-SA 4.0',url:'https://commons.wikimedia.org/wiki/File:Barcelona_-_Exterior_of_the_Apse_of_the_Sagrada_Fam%C3%ADlia_-_Western_exposure.jpg',licenseUrl:'https://creativecommons.org/licenses/by-sa/4.0/'},
 retiro:{file:'retiro.jpg',alt:'Monument at El Retiro park in Madrid',author:'Carlos Delgado',license:'CC BY-SA 3.0',url:'https://commons.wikimedia.org/wiki/File:Monumento_a_Alfonso_XII_de_Espa%C3%B1a_en_los_Jardines_del_Retiro_-_04.jpg',licenseUrl:'https://creativecommons.org/licenses/by-sa/3.0/'},
 'plaza-mayor':{file:'plaza-mayor.jpg',alt:'Plaza Mayor in Madrid',author:'Carlos Delgado',license:'CC BY-SA 3.0',url:'https://commons.wikimedia.org/wiki/File:Plaza_Mayor_de_Madrid_-_01.jpg',licenseUrl:'https://creativecommons.org/licenses/by-sa/3.0/'}
};
const illustrative={
 housing:{file:'hostel.jpg',alt:'Illustrative photo of a hostel interior',author:'Holycharly',license:'CC BY-SA 3.0',url:'https://commons.wikimedia.org/wiki/File:Alberg_021-reception.jpg',licenseUrl:'https://creativecommons.org/licenses/by-sa/3.0/',illustrative:true},
 nightlife:{file:'nightclub.jpg',alt:'Illustrative photo of people at a concert',author:'Stefan Schweihofer',license:'CC0',url:'https://commons.wikimedia.org/wiki/File:Cheerful_club_environment,_hands_up.jpg',licenseUrl:'https://creativecommons.org/publicdomain/zero/1.0/',illustrative:true},
 food:{...photos.mercat,alt:'Illustrative photo of a Barcelona market',illustrative:true},
 other:{...photos['park-guell'],alt:'Illustrative photo of Park Güell, Barcelona',illustrative:true}
};
export function placePhoto(place){
 if(photos[place.id])return photos[place.id];
 if(!place.id.startsWith('sample-'))return null;
 const category=String(place.category||'').toLowerCase();
 if(/hostel|hotel|housing|living|residence/.test(category))return illustrative.housing;
 if(/nightlife|club/.test(category))return illustrative.nightlife;
 if(/food|cafe|café/.test(category))return illustrative.food;
 return illustrative.other;
}
export function photoElement(photo){
 const figure=document.createElement('figure');figure.className='place-photo';
 const img=document.createElement('img');img.src='./assets/place-photos/'+photo.file;img.alt=photo.alt;img.loading='lazy';img.addEventListener('error',()=>{figure.hidden=true},{once:true});
 const caption=document.createElement('figcaption');if(photo.illustrative)caption.append('Illustrative photo, not this place · ');
 const source=document.createElement('a');source.href=photo.url;source.target='_blank';source.rel='noopener noreferrer';source.textContent=photo.author+' / Wikimedia Commons';
 const license=document.createElement('a');license.href=photo.licenseUrl;license.target='_blank';license.rel='noopener noreferrer';license.textContent=photo.license;
 caption.append(source,' · ',license,' · resized/cropped');figure.append(img,caption);return figure;
}
