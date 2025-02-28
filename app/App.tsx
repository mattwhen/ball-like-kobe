import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import fetchBoxScores from "./features/boxscores/api/get-boxscores";
import fetchPlayers from "./features/active-players/api/get-players";
import Title from "./components/ui/Title/Title";
import Table from "./components/ui/Table/Table";
import Container from "./components/layouts/Container";

const App = () => {
	const [selectedDate, setSelectedDate] = useState("");

	const scoresQuery = useQuery({
		queryKey: ["liveScore", selectedDate],
		queryFn: ({ queryKey }) => fetchBoxScores(queryKey[1]),
		staleTime: 60000, // Cache data for 1 minute 
		refetchInterval: 60000 // Refetch every minute
	});

	const playersQuery = useQuery({
		queryKey: ["players"],
		queryFn: fetchPlayers,
	});

	return (
		<>
			<div className="flex flex-col">
				<Title scoresQuery={scoresQuery} selectedDate={selectedDate} />
				<Container scoresQuery={scoresQuery} selectedDate={selectedDate} setSelectedDate={setSelectedDate} playersQuery={playersQuery} />
			</div>
		</>
	);
};

export default App;
