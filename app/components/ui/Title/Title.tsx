import { fullDateFormat } from "@/app/utils/formatDate";
import React from "react";

const Title = ({ scoresQuery }) => {
	const { isFetched } = scoresQuery;
	return (

        <div className="mb-12">
			<h1 className="text-center text-2xl">Today&apos;s games:</h1>
			<h2 className="text-center text-2xl">{fullDateFormat()}</h2>
		</div>
	);
};

export default Title;
