import { format } from "date-fns";

export const formatTime = (time: string) => {
	const date = new Date(time);

	const formattedTime = format(date, "h:mm a");

	return formattedTime;
};
