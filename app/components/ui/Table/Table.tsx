"use client";
import fetchPlayers from "@/app/features/active-players/api/get-players";
import fetchBoxScores from "@/app/features/boxscores/api/get-boxscores";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import ScoreCard from "../ScoreCard/ScoreCard";
import fetchLogo from "@/app/features/teams/api/get-logo";
import Calendar from "../Calendar/Calendar";

const Table = () => {
	const {
		isPending: isPlayersPending,
		error: playersError,
		data: playersData,
		isFetching: isPlayersFetching,
	} = useQuery({
		queryKey: ["players"],
		queryFn: fetchPlayers,
	});

	const {
		isPending: isScorePending,
		error: scoreError,
		data: scoreData,
		isFetching: isScoreFetching,
	} = useQuery({
		queryKey: ["liveScore"],
		queryFn: fetchBoxScores,
	});

	const { isPending: isLogoPending, error: logoError, data: logoIcon } = useQuery({ queryKey: ["logos"], queryFn: fetchLogo });

	if (playersError) {
		return <span>Error: {playersError.message}</span>;
	}

	if (scoreError) {
		return <span>Error: {scoreError.message}</span>;
	}

	if (logoError) {
		return <span>Error: {logoError.message} </span>
	}

	return (
		<div className="flex flex-col">
			{scoreData?.length !== 0 ? scoreData?.map((game) => (
				<ScoreCard
					key={game.id}
					scoreData={game}
					isPlayersFetching={isPlayersFetching}
					isScoreFetching={isScoreFetching}
					logo={logoIcon}
				/>
			)) : <div className="flex flex-col items-center justify-between w-full max-w-md bg-gray-900 text-white p-4 rounded-lg shadow-lg">
					<div className="">No games today!</div>
				</div>}
				<Calendar />
		</div>
	);
};

export default Table;
