import React from "react";
import { useQuery } from "@tanstack/react-query";
import fetchBoxScores from "./features/boxscores/api/get-boxscores";
import fetchPlayers from "./features/active-players/api/get-players";
import Title from "./components/ui/Title/Title";
import Table from "./components/ui/Table/Table";
import Container from "./components/layouts/Container";

const App = () => {
	const scoresQuery = useQuery({
		queryKey: ["liveScore"],
		queryFn: fetchBoxScores,
		staleTime: 60000, // 1 minute refresh
	});

	const playersQuery = useQuery({
		queryKey: ["players"],
		queryFn: fetchPlayers,
	});

	return (
		<>
			<div className="flex flex-col">
				<Title scoresQuery={scoresQuery} />
				{/* <Table scoresQuery={scoresQuery} playersQuery={playersQuery} /> */}
				<Container scoresQuery={scoresQuery} playersQuery={playersQuery} />
			</div>
		</>
	);
};

export default App;
