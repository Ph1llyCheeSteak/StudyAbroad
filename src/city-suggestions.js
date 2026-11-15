// Lightweight, explainable suggestions based only on this browser's demo activity.
export function suggestCities(cities, places, state) {
  const savedIds = new Set([...(state.savedPosts || []), ...(state.trips || []).flatMap(t => t.placeIds || [])]);
  const savedPlaces = places.filter(place => savedIds.has(place.id));
  const categories = new Set(savedPlaces.map(place => place.category.toLowerCase()));
  const planned = new Set((state.trips || []).filter(t => t.id !== 'trip-barcelona').map(t => t.cityId));
  const positive = new Set(Object.entries(state.votes || {}).filter(([, vote]) => vote > 0).map(([id]) => id));
  return cities.map((city, index) => {
    const cityPlaces = places.filter(place => place.cityId === city.id);
    const matching = cityPlaces.find(place => categories.has(place.category.toLowerCase()) && !savedIds.has(place.id));
    const liked = cityPlaces.some(place => positive.has(place.id));
    const hasPlan = planned.has(city.id);
    const sampleVotes = cityPlaces.reduce((sum, place) => sum + (Number(place.votes) || 0), 0);
    const score = (matching ? 3 : 0) + (hasPlan ? 2 : 0) + (liked ? 1 : 0);
    const reason = matching ? `Matches your saved ${matching.category.toLowerCase()} picks` : hasPlan ? 'In your plans' : liked ? 'You liked a place here' : `${sampleVotes} sample upvotes`;
    return {city, reason, score, sampleVotes, index};
  }).sort((a, b) => b.score - a.score || b.sampleVotes - a.sampleVotes || a.index - b.index);
}
