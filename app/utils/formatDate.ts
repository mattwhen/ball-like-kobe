import { setDate, format, getDate, getMonth, parseISO } from "date-fns";

export const currentDate = () => {
	// Today's date:
	const date = new Date(); // format YYYYMMDD

	const year = date.getFullYear();
	const month = String(date.getMonth() + 1).padStart(2, "0");
	const currentDay = String(date.getDate()).padStart(2, "0");

	// // Formats in YYYY-MM-DD
	const formatDate = `${year}-${month}-${currentDay}`;

	return formatDate;
};

export const fullDateFormat = (calendarDate) => {
	console.log("Date: ", calendarDate);
	
	if (calendarDate) {
		const dateObj = typeof calendarDate === "string" ? parseISO(calendarDate) : calendarDate;
		return format(dateObj, "MMMM dd, yyyy");
	} else {
		const result = format(new Date(), "MMMM dd, yyyy");
		return result;
	}
};
