import React, { useState } from "react";
import { compareAsc, format } from "date-fns";
import Logos from "../Logos/Logos";
import { useQuery } from "@tanstack/react-query";
import fetchLogo from "@/app/features/teams/api/get-logo";
import { formatTime } from "@/app/utils/formatTime";

type Logo = {
	teamAbv: string;
	teamCity: string;
	espnLogo1: string;
};

const dates = [
	new Date(1995, 2, 3),
	new Date(1987, 1, 11),
	new Date(1989, 6, 10),
];

console.log(dates.sort(compareAsc));


const ScoreCard = ({ scoreData, isScoreFetching }) => {
	const [homeLogo, setHomeLogo] = useState([]);
	const [visitorLogo, setVisitorLogo] = useState([]);

	const {
		datetime,
		home_team,
		home_team_score,
		period,
		time,
		visitor_team,
		visitor_team_score,
	} = scoreData;

	const {
		isPending: isLogoPending,
		error: logoError,
		data: logoIcon,
	} = useQuery({ queryKey: ["logos"], queryFn: fetchLogo });

	if (logoError) {
		return <span>There was an error getting the Logo!</span>;
	}

	if (isScoreFetching) {
		return <span>Loading Scores...</span>;
	}

	return (
		<>
			<div className="bg-gray-900 text-white p-4 rounded-lg shadow-lg max-h-64 flex items-center justify-between md:w-56 lg:w-64 lg:h-32 hover:bg-gray-500 hover:cursor-pointer">
				<div className="text-center max-w-24">
					<h3 className="text-sm font-semibold">
						{!isScoreFetching
							? home_team.name
							: "Loading"}
					</h3>
					<p className="text-2xl">
						{!isScoreFetching
							? home_team_score
							: "Loading"}
					</p>
				</div>
				<div className="flex flex-col justify-center items-center">
					<p className="text-md font-bold">VS</p>
						{!isScoreFetching && <p>{(period > 0 && time !== "Final") && time}</p>}
						{!isScoreFetching && <p>{period === 5 && "OT"}</p>}
						{!isScoreFetching && <p>{period > 5 && `${period - 4}OT`}</p>}
					
				<div>
					<p>{period === 0 ? formatTime(datetime) : null}</p>
					<p>{time === "Final" ? "Final" : null}</p>
				</div>
				</div>
				<div className="text-center">
					<h3 className="text-sm font-semibold">
						{!isScoreFetching
							? visitor_team.name
							: "Loading"}
					</h3>
					<p className="text-2xl">
						{!isScoreFetching
							? visitor_team_score
							: "Loading"}
					</p>
				</div>
			</div>
		</>
	);
};

export default ScoreCard;
