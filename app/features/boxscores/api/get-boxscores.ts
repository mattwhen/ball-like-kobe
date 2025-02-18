const API_KEY = process.env.NEXT_PUBLIC_API_KEY_1;
import { BalldontlieAPI } from "@balldontlie/sdk";
import { currentDate } from "../../../utils/formatDate";


const fetchBoxScores = async () => {
    try {
        const api = new BalldontlieAPI({ apiKey: API_KEY });
        const games = await api.nba.getGames({dates: [currentDate()]})
        
        console.log("Games: ", games);
        
        return games.data;
    } catch (error) {
        console.error("Error fetching box scores! ", error)
    }
}

export default fetchBoxScores;