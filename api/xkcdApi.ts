import axios from 'axios';
import Comic from '../services/models';
const BASE_URL: string = 'https://xkcd.com';

const xkcdApi = axios.create({
	baseURL: BASE_URL,
});

export const getLatestComicNumber = async (): Promise<number> => {
	const latestComicResponse = await xkcdApi.get('/info.0.json');
	return latestComicResponse.data.num;
};

export const fetchComic = async (pageParam: number): Promise<Comic> => {
	try {
		const response = await xkcdApi.get(
			`https://xkcd.com/${pageParam}/info.0.json`
		);
		return response.data;
	} catch (error) {
		console.error('Error fetching comic:', error);
		throw error;
	}
};
