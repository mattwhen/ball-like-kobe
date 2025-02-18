import React from "react";
import Image from "next/image";

const ScoreCard = ({ scoreData, isPlayersFetching, isScoreFetching, logo }) => {
    const { id, date, home_team, home_team_score, period, status, season, visitor_team, visitor_team_score } = scoreData; 
    
    console.log(scoreData);
    
	
	return (
		<>
			<div className="bg-gray-900 text-white p-4 rounded-lg shadow-lg flex justify-between w-full max-w-md">
				<div className="text-center">
					<h3 className="text-lg font-semibold">{!isPlayersFetching || !isScoreFetching ? home_team.name : "Loading"}</h3>
                    {/* <Image src={`${logo.nbaComLogo1}`} width={50} height={50} /> */}
					<p className="text-2xl">{!isPlayersFetching || !isScoreFetching ? home_team_score : "Loading"}</p>
				</div>
                <div className="flex flex-col">
				<p className="text-xl font-bold">VS</p>
                <p>{!isPlayersFetching || !isScoreFetching ? status : "Loading"}</p>
                </div>
				<div className="text-center">
					<h3 className="text-lg font-semibold">{!isPlayersFetching || !isScoreFetching ? visitor_team.name : "Loading"}</h3>
					<p className="text-2xl">{!isPlayersFetching || !isScoreFetching ? visitor_team_score : "Loading"}</p>
				</div>

			</div>
		</>
	);
};

export default ScoreCard;
