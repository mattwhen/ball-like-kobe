const apiKey = process.env.NEXT_PUBLIC_API_KEY_1;
import { BalldontlieAPI } from "@balldontlie/sdk";

const fetchPlayers = async () => {
	try {
		const api = new BalldontlieAPI({ apiKey: apiKey });
		const players = await api.nba.getPlayers();

		
		return players.data;
	} catch (error) {
		console.error("Error fetching players! ", error);
	}
};

export default fetchPlayers;
