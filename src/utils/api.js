const axios = require('axios');

const fetchData = () => {
	const MARVEL_API_KEY = process.env.MARVEL_API_KEY;
	const API_PATH = 'https://gateway.marvel.com:443/v1/public/characters/1009368';
	const MARVEL_API_CHARACTER = `${API_PATH}?apikey=${MARVEL_API_KEY}`;
	const MARVEL_API_COMICS = `${API_PATH}/comics?title=iron%20man&apikey=${MARVEL_API_KEY}`;
		
	return axios.all([
		axios.get(MARVEL_API_CHARACTER),
		axios.get(MARVEL_API_COMICS)
	])
	.then(axios.spread((character, comics) => {
		return [character.data.data.results[0], comics.data.data.results];
	}));
};

export default fetchData;