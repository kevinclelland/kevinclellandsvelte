import { LASTFM_KEY } from '$env/static/private'


export const load = async () => {
	const url = `https://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user=kevinclelland&api_key=${LASTFM_KEY}&format=json&limit=5&period=1month`
	
	const res = await fetch(url);
	const data = await res.json();
	const albums = data.topalbums.album;
	return { albums };
};