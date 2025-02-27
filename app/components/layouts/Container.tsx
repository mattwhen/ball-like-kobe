import React, { useState } from "react";
import Table from "../ui/Table/Table";
import Calendar from "../ui/Calendar/Calendar";

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

const Container: React.FC<TableProps> = ({ scoresQuery }) => {
    const [dateSelect, setDateSelect] = useState("");
    
	return (
		<div>
			<Table scoresQuery={scoresQuery} />
			<div className="flex justify-center">
				<Calendar dateSelect={dateSelect} setDateSelect={setDateSelect}/>
			</div>
		</div>
	);
};

export default Container;
