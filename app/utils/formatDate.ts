export const currentDate = () => {
	// Today's date:
	const date = new Date(); // format YYYYMMDD
	const year = date.getFullYear();
	const month = String(date.getMonth() + 1).padStart(2, "0");
	const currentDay = String(date.getDate()).padStart(2, "0");
	const formatDate = `${year}-${month}-${currentDay}`; // Formats in YYYY-MM-DD

	return formatDate;
};

export const setDate = () => {

}


