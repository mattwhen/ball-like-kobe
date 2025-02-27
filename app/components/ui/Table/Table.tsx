"use client";
import React, { useState } from "react";
import ScoreCard from "../ScoreCard/ScoreCard";
import Calendar from "../Calendar/Calendar";

type ScoresQuery = {
	isPending: boolean;
	isFetching: boolean;
	error: string;
	data: Game[];
};

type Game = {
	datetime: string;
	home_team_score: number;
	home_team: {
		id: number;
		city: string;
		name: string;
		full_name: string;
	};
	period: number;
	visitor_team: string;
	visitor_team_score: number;
};

type TableProps = {
	scoresQuery: ScoresQuery;
};

const Table: React.FC<TableProps> = ({ scoresQuery }) => {
	const {
		isPending: isScorePending,
		error: scoreError,
		data: scoreData,
		isFetching: isScoreFetching,
	} = scoresQuery;

	if (isScorePending) {
		return <span>Seeing if there are any games today...</span>;
	}

	if (scoreError) {
		return <span>Error: {scoreError}</span>;
	}

	return (
		<div>
			<div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
				{scoreData?.length !== 0 ? (
					scoreData?.map((game) => (
						<ScoreCard
							key={game.id}
							scoreData={game}
							isScoreFetching={isScoreFetching}
						/>
					))
				) : (
					<div className="flex flex-col items-center justify-between w-full max-w-md bg-gray-900 text-white p-4 rounded-lg shadow-lg">
						<div className="">No games today!</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Table;
