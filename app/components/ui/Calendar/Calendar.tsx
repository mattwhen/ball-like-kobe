import React from 'react';

type CalendarProps = {
  selectedDate: string,
  setSelectedDate: (date: string) => void,
}

const Calendar: React.FC<CalendarProps> = ({selectedDate, setSelectedDate}) => {

  return (
    <div className='flex flex-col p-6 mt-5 items-center justify-between w-full max-w-sm bg-gray-900 text-white rounded-lg shadow-lg'>
      <input className='text-black' step={"1"} type="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)}/>
    </div>
  );
}

export default Calendar;
