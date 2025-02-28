import { fullDateFormat } from "@/app/utils/formatDate";
import React from "react";

type ScoresQuery = {
	isPending: boolean;
	isFetching: boolean;
	error: string;
	data: Game[];
};

const Title: React.FC<ScoresQuery> = ({ scoresQuery, selectedDate }) => {
	return (
		<div className="mb-12">
			<h2 className="text-center text-2xl">{fullDateFormat(selectedDate)}</h2>
		</div>
	);
};

export default Title;
 