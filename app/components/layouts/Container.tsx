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
    selectedDate: string;
    setSelectedDate: (date: string) => void;
};

const Container: React.FC<TableProps> = ({ scoresQuery, selectedDate, setSelectedDate }) => {
    
	return (
		<div>
			<Table scoresQuery={scoresQuery} />
			<div className="flex justify-center">
				<Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
			</div>
		</div>
	);
};

export default Container;
