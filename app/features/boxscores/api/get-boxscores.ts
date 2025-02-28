const API_KEY = process.env.NEXT_PUBLIC_API_KEY_1;
import { BalldontlieAPI } from "@balldontlie/sdk";
import { currentDate } from "../../../utils/formatDate";


const fetchBoxScores = async (date: string) => {
    console.log("Box score date: ", date);
    
    try {
        const api = new BalldontlieAPI({ apiKey: API_KEY });
        const games = await api.nba.getGames({dates: [date]})
        
        const sortGames = games.data.toSorted((a, b) => a.id - b.id);
        
        console.log("Live Games: ", sortGames);
        return sortGames;
    } catch (error) {
        console.error("Error fetching box scores! ", error)
    }
}

export default fetchBoxScores;