const coords={barcelona:[2.1686,41.3874],madrid:[-3.7038,40.4168],lisbon:[-9.1393,38.7223]};
const COUNTRY_ZOOM=3, CITY_ZOOM=12, MAX_ZOOM=256;

export function mountGlobe(cities,onSelect){
 const canvas=document.querySelector('#earth'),ctx=canvas.getContext('2d'),status=document.querySelector('#location-status'),chooser=document.querySelector('#city-chooser'),labels=document.querySelector('#city-labels'),stage=document.querySelector('.globe-stage');
 let rotation=[-2.1686,-41.3874,0],land=null,detail=null,detailedWorld=null,boundaries=[],zoom=1,drag=null,frame=0,pointers=new Map(),pinch=null,settleTimer=0,focusPending=null;
 const pixelRatio=Math.min(3,Math.max(2,window.devicePixelRatio||1));
 canvas.width=Math.round(700*pixelRatio);canvas.height=Math.round(700*pixelRatio);ctx.setTransform(pixelRatio,0,0,pixelRatio,0,0);
 const projection=d3.geoOrthographic().translate([350,350]).clipAngle(90).precision(.15),path=d3.geoPath(projection,ctx),graticule=d3.geoGraticule10();
 const cityButtons=cities.map(c=>{const b=document.createElement('button');b.type='button';b.className='globe-city';b.textContent=c.name;b.setAttribute('aria-label','Explore '+c.name);b.onclick=()=>select(c);labels.append(b);return b});
 let countryLabels=[];
 const clampZoom=z=>Math.max(1,Math.min(MAX_ZOOM,z));
 const center=()=>[-rotation[0],-rotation[1]];
 const beginExploring=()=>document.querySelector('#globe-view')?.classList.add('has-started');
 // Match a finger or mouse movement to the distance it travels on the map.
 // Longitude needs extra adjustment as meridians converge toward the poles.
 function dragRotation(start,dx,dy,atZoom){
  const width=Math.max(1,canvas.getBoundingClientRect().width);
  const degreesPerPixel=180/Math.PI*700/(322*width*atZoom);
  const longitudeScale=Math.max(.25,Math.cos(start[1]*Math.PI/180));
  return [start[0]+dx*degreesPerPixel/longitudeScale,Math.max(-89,Math.min(89,start[1]-dy*degreesPerPixel)),0];
 }
 function zoomSensitivity(atZoom){return .002/(1+.28*Math.log2(atZoom))}
 function draw(){
  projection.rotate(rotation).scale(322*zoom);ctx.clearRect(0,0,700,700);stage.classList.toggle('is-zoomed',zoom>1.03);
  ctx.beginPath();path({type:'Sphere'});ctx.fillStyle='#398ba1';ctx.fill();
  ctx.beginPath();path(graticule);ctx.strokeStyle='rgba(169,211,211,.20)';ctx.lineWidth=.7;ctx.stroke();
  if(land){
   const nearby=d3.geoDistance([-4,40],center())<.5,shape=detailedWorld&&zoom>=4&&nearby?detailedWorld:land;
   ctx.beginPath();path(shape);ctx.fillStyle='#47745e';ctx.fill();
   ctx.beginPath();path(shape);ctx.strokeStyle='rgba(226,239,220,.40)';ctx.lineWidth=Math.max(.35,.8/(canvas.getBoundingClientRect().width/700));ctx.stroke();
  }
  if(zoom>=COUNTRY_ZOOM)boundaries.forEach(g=>{if(!g)return;const lines=g.type==='Polygon'?g.coordinates:g.type==='MultiPolygon'?g.coordinates.flat():[];ctx.beginPath();path({type:'MultiLineString',coordinates:lines});ctx.strokeStyle='rgba(246,235,208,.85)';ctx.lineWidth=Math.max(.3,1.4/(canvas.getBoundingClientRect().width/700));ctx.stroke()});
  const occupied=[],box=canvas.getBoundingClientRect(),scale=box.width/700;
  [...countryLabels].sort((a,b)=>d3.geoDistance(a.point,center())-d3.geoDistance(b.point,center())).forEach(({button,point})=>{
   button.hidden=true;if(zoom<2||zoom>=CITY_ZOOM||d3.geoDistance(point,center())>1.42)return;
   const p=projection(point);if(!p||p[0]<0||p[0]>700||p[1]<0||p[1]>700)return;
   const x=p[0]*scale,y=p[1]*scale,w=Math.max(24,button.textContent.length*6.3),h=16;
   if(occupied.some(a=>Math.abs(a.x-x)<(a.w+w)/2+8&&Math.abs(a.y-y)<(a.h+h)/2+4))return;
   occupied.push({x,y,w,h});button.hidden=false;button.style.left=(p[0]/7)+'%';button.style.top=(p[1]/7)+'%';
  });
  cities.forEach((c,i)=>{const b=cityButtons[i],v=coords[c.id];b.hidden=true;if(zoom<CITY_ZOOM||!v||d3.geoDistance(v,center())>1.42)return;const p=projection(v);if(!p||p[0]<0||p[0]>700||p[1]<0||p[1]>700)return;b.hidden=false;b.style.left=(p[0]/7)+'%';b.style.top=(p[1]/7)+'%'});
 }
 function animate(point,targetZoom,done){
  cancelAnimationFrame(frame);let start=[...rotation],target=[-point[0],-point[1],0],delta=((target[0]-start[0]+540)%360)-180,startZoom=zoom,t0=performance.now();
  function step(now){let t=Math.min(1,(now-t0)/650),e=t*t*(3-2*t);rotation=[start[0]+delta*e,start[1]+(target[1]-start[1])*e,0];zoom=startZoom+(targetZoom-startZoom)*e;draw();if(t<1)frame=requestAnimationFrame(step);else if(done)done()}
  frame=requestAnimationFrame(step);
 }
 function select(c){if(!c||!coords[c.id])return;beginExploring();clearTimeout(settleTimer);chooser.hidden=true;document.querySelector('#find-city').setAttribute('aria-expanded','false');status.textContent='Opening '+c.name+'…';animate(coords[c.id],Math.max(zoom,14),()=>onSelect(c))}
 function focusCountry(item){if(!item)return;beginExploring();clearTimeout(settleTimer);focusPending=null;status.textContent='Zoom closer to see available city guides.';animate(item.point,Math.max(zoom,5))}
 function contains(g,p){
  if(!g)return false;const ring=r=>{let hit=false;for(let i=0,j=r.length-1;i<r.length;j=i++){let [x,y]=r[i],[xx,yy]=r[j];if(((y>p[1])!==(yy>p[1]))&&p[0]<(xx-x)*(p[1]-y)/(yy-y)+x)hit=!hit}return hit};
  const polys=g.type==='Polygon'?[g.coordinates]:g.type==='MultiPolygon'?g.coordinates:[];return polys.some(poly=>ring(poly[0])&&!poly.slice(1).some(ring));
 }
 function countryAt(point){return countryLabels.find(item=>contains(item.feature.geometry,point))}
 function scheduleCountryFocus(point){if(!point||focusPending)return;const item=countryAt(point);if(!item)return;focusPending=item;clearTimeout(settleTimer);settleTimer=setTimeout(()=>{if(focusPending===item)focusCountry(item)},220)}
 function prepareDetailedWorld(){
  if(!land||!detail)return;
  // The detailed asset covers only these countries; retain the rest of the world.
  const replaced=new Set(['ESP','PRT','MAR','FRA','AND','DZA']);
  detailedWorld={type:'FeatureCollection',features:[...land.features.filter(f=>!replaced.has(f.properties.ADM0_A3)),...detail.features]};
 }
 draw();
 Promise.all([fetch('./vendor/countries.geojson').then(r=>{if(!r.ok)throw Error();return r.json()}),fetch('./vendor/city-boundaries.json').then(r=>{if(!r.ok)throw Error();return r.json()})]).then(([l,b])=>{
  land=l;boundaries=b;countryLabels=l.features.map(feature=>{const p=feature.properties,point=[Number(p.LABEL_X),Number(p.LABEL_Y)],button=document.createElement('button');button.type='button';button.className='globe-country';button.textContent=p.NAME_EN||p.NAME;button.setAttribute('aria-label','Zoom into '+button.textContent);const item={feature,point,button,rank:Number(p.LABELRANK)||9};button.onclick=()=>focusCountry(item);labels.append(button);return item}).filter(x=>x.button.textContent&&x.point.every(Number.isFinite)).sort((a,b)=>a.rank-b.rank);
  prepareDetailedWorld();draw();
 }).catch(()=>{status.textContent='Map details unavailable. Use Search cities.'});
 fetch('./vendor/iberia-50m.geojson').then(r=>{if(!r.ok)throw Error();return r.json()}).then(data=>{detail=data;prepareDetailedWorld();draw()}).catch(()=>{});
 canvas.addEventListener('pointerdown',e=>{cancelAnimationFrame(frame);clearTimeout(settleTimer);focusPending=null;pointers.set(e.pointerId,[e.clientX,e.clientY]);canvas.setPointerCapture(e.pointerId);if(pointers.size===1)drag={x:e.clientX,y:e.clientY,rotation:[...rotation],zoom};if(pointers.size===2){let p=[...pointers.values()];pinch={distance:Math.max(1,Math.hypot(p[0][0]-p[1][0],p[0][1]-p[1][1])),zoom,point:center(),rotation:[...rotation],midpoint:[(p[0][0]+p[1][0])/2,(p[0][1]+p[1][1])/2]};drag=null}});
 canvas.addEventListener('pointermove',e=>{if(!pointers.has(e.pointerId))return;pointers.set(e.pointerId,[e.clientX,e.clientY]);if(pointers.size===2&&pinch){let p=[...pointers.values()],d=Math.max(1,Math.hypot(p[0][0]-p[1][0],p[0][1]-p[1][1])),midpoint=[(p[0][0]+p[1][0])/2,(p[0][1]+p[1][1])/2];zoom=clampZoom(pinch.zoom*Math.pow(d/pinch.distance,1/(1+.28*Math.log2(pinch.zoom))));rotation=dragRotation(pinch.rotation,midpoint[0]-pinch.midpoint[0],midpoint[1]-pinch.midpoint[1],zoom);draw()}else if(drag){rotation=dragRotation(drag.rotation,e.clientX-drag.x,e.clientY-drag.y,drag.zoom);draw()}});
 function release(e){if(drag&&!drag.afterPinch&&Math.hypot(e.clientX-drag.x,e.clientY-drag.y)<6){const box=canvas.getBoundingClientRect(),p=projection.invert([(e.clientX-box.left)*700/box.width,(e.clientY-box.top)*700/box.height]);if(p){if(zoom>=CITY_ZOOM){const i=boundaries.findIndex(g=>contains(g,p));if(i>=0)select(cities[i])}else{const country=countryAt(p);if(country)focusCountry(country)}}}const focusPoint=pinch&&pinch.zoom<COUNTRY_ZOOM&&zoom>=COUNTRY_ZOOM?pinch.point:drag?.focusPoint;pointers.delete(e.pointerId);pinch=null;const remaining=[...pointers.values()][0];drag=remaining?{x:remaining[0],y:remaining[1],rotation:[...rotation],zoom,afterPinch:true,focusPoint}:null;if(!remaining&&focusPoint)scheduleCountryFocus(focusPoint)}
 canvas.addEventListener('pointerup',release);canvas.addEventListener('pointercancel',e=>{pointers.delete(e.pointerId);drag=null;pinch=null});
 stage.addEventListener('wheel',e=>{if(e.target.closest('.find-wrap'))return;e.preventDefault();cancelAnimationFrame(frame);const rect=canvas.getBoundingClientRect(),point=[(e.clientX-rect.left)*700/rect.width,(e.clientY-rect.top)*700/rect.height],before=projection.invert(point),oldZoom=zoom,delta=e.deltaY*(e.deltaMode===1?16:e.deltaMode===2?rect.height:1);zoom=clampZoom(zoom*Math.exp(-Math.max(-120,Math.min(120,delta))*zoomSensitivity(zoom)));projection.scale(322*zoom);const after=projection.invert(point);if(before&&after){rotation[0]+=((after[0]-before[0]+540)%360)-180;rotation[1]=Math.max(-89,Math.min(89,rotation[1]+after[1]-before[1]))}draw();if(oldZoom<COUNTRY_ZOOM&&zoom>=COUNTRY_ZOOM)scheduleCountryFocus(before||center())},{passive:false});
 const search=document.querySelector('#find-city'),options=[...chooser.querySelectorAll('[data-city]')],empty=chooser.querySelector('.city-search-empty');
 function updateSearch(){const q=search.value.trim().toLocaleLowerCase();let count=0;options.forEach(b=>{const show=!q||b.textContent.toLocaleLowerCase().includes(q);b.hidden=!show;if(show)count++});empty.hidden=count>0;chooser.hidden=false;search.setAttribute('aria-expanded','true')}
 function closeSearch(){chooser.hidden=true;search.setAttribute('aria-expanded','false')}
 search.addEventListener('focus',()=>{beginExploring();updateSearch()});search.addEventListener('input',updateSearch);
 search.addEventListener('keydown',e=>{if(e.key==='Escape'){closeSearch();search.blur()}else if(e.key==='ArrowDown'){e.preventDefault();if(chooser.hidden)updateSearch();options.find(b=>!b.hidden)?.focus()}else if(e.key==='Enter'){const first=options.find(b=>!b.hidden);if(first){e.preventDefault();first.click()}}});
 options.forEach((b,i)=>{b.onclick=()=>{search.value='';select(cities.find(c=>c.id===b.dataset.city))};b.addEventListener('keydown',e=>{if(e.key==='Escape'){closeSearch();search.focus();closeSearch()}else if(e.key==='ArrowDown'||e.key==='ArrowUp'){e.preventDefault();const visible=options.filter(x=>!x.hidden),index=visible.indexOf(b),next=index+(e.key==='ArrowDown'?1:-1);if(next<0)search.focus();else visible[Math.min(next,visible.length-1)]?.focus()}})});
 stage.addEventListener('pointerdown',e=>{beginExploring();if(!e.target.closest('.find-wrap'))closeSearch()});
 stage.addEventListener('wheel',beginExploring,{passive:true});
 return {redraw:()=>{cancelAnimationFrame(frame);zoom=1;status.textContent='Drag or zoom, then choose a country or city.';draw()}};
}
