const coords={barcelona:[2.1686,41.3874],madrid:[-3.7038,40.4168],lisbon:[-9.1393,38.7223]};
export function mountGlobe(cities){
 const canvas=document.querySelector('#earth'),ctx=canvas.getContext('2d'),status=document.querySelector('#location-status'),marker=document.querySelector('#city-board-marker'),menu=document.querySelector('#board-menu');
 let rotation=[0,-25,0],land=null,drag=null,userLocation=null;
 const projection=d3.geoOrthographic().translate([350,350]).scale(322).clipAngle(90).precision(.4);
 const path=d3.geoPath(projection,ctx),graticule=d3.geoGraticule10();
 function draw(){
  projection.rotate(rotation);ctx.clearRect(0,0,700,700);
  ctx.beginPath();path({type:'Sphere'});ctx.fillStyle='#398ba1';ctx.fill();
  ctx.beginPath();path(graticule);ctx.strokeStyle='#6aabba';ctx.lineWidth=1;ctx.stroke();
  if(land){ctx.beginPath();path(land);ctx.fillStyle='#47745e';ctx.fill();}
  if(userLocation&&d3.geoDistance(userLocation,[-rotation[0],-rotation[1]])<Math.PI/2){const [x,y]=projection(userLocation);ctx.beginPath();ctx.arc(x,y,9,0,Math.PI*2);ctx.fillStyle='#194f59';ctx.fill();ctx.strokeStyle='#fff';ctx.lineWidth=3;ctx.stroke();}
  const anchor=[-3.7,40.4],visible=d3.geoDistance(anchor,[-rotation[0],-rotation[1]])<1.48;
  if(visible){const [x,y]=projection(anchor);marker.style.left=(x/7)+'%';marker.style.top=(y/7)+'%';marker.hidden=false}else{marker.hidden=true;menu.hidden=true;marker.setAttribute('aria-expanded','false')}
 }
 draw();
 fetch('./vendor/countries.geojson').then(r=>{if(!r.ok)throw Error();return r.json()}).then(data=>{land=data;draw()}).catch(()=>{status.textContent='Map details unavailable. Choose a city below.'});
 canvas.addEventListener('pointerdown',e=>{drag={x:e.clientX,y:e.clientY,rotation:[...rotation]};canvas.setPointerCapture(e.pointerId)});
 canvas.addEventListener('pointermove',e=>{if(!drag)return;rotation=[drag.rotation[0]+(e.clientX-drag.x)*.45,Math.max(-89,Math.min(89,drag.rotation[1]-(e.clientY-drag.y)*.45)),0];draw()});
 canvas.addEventListener('pointerup',()=>drag=null);canvas.addEventListener('pointercancel',()=>drag=null);
 marker.addEventListener('click',()=>{menu.hidden=!menu.hidden;marker.setAttribute('aria-expanded',String(!menu.hidden));if(!menu.hidden)menu.querySelector('a')?.focus()});
 document.querySelector('#locate').addEventListener('click',()=>{if(!navigator.geolocation){status.textContent='Location is unavailable. Choose a city below.';return}status.textContent='Finding your location…';navigator.geolocation.getCurrentPosition(p=>{userLocation=[p.coords.longitude,p.coords.latitude];rotation=[-userLocation[0],-userLocation[1],0];draw();status.textContent='Globe centered on your approximate location. Choose an available city below.'},()=>{status.textContent='Location unavailable or not allowed. Choose a city below.'},{timeout:10000,maximumAge:300000})});
 document.querySelectorAll('[data-center-city]').forEach(button=>button.addEventListener('click',()=>{const v=coords[button.dataset.centerCity];if(v){rotation=[-v[0],-v[1],0];draw();status.textContent=(cities.find(c=>c.id===button.dataset.centerCity)?.name||'City')+' centered on the globe.'}}));
}
