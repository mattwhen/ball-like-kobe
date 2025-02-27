const API_KEY = process.env.NEXT_PUBLIC_API_KEY_2;

const url =
	"https://tank01-fantasy-stats.p.rapidapi.com/getNBATeams?schedules=false&rosters=false&statsToGet=averages&topPerformers=true&teamStats=true";
const options = {
	headers: {
		"x-rapidapi-key": `${API_KEY}`,
		"x-rapidapi-host": "tank01-fantasy-stats.p.rapidapi.com",
	},
};

const fetchLogo = async () => {
	try {
		const response = await fetch(url, options);
		const data = await response.json();

		return data.body.map((logo: string[]) => logo.espnLogo1);
	} catch (error) {
		console.error(error);
	}
};

export default fetchLogo;
