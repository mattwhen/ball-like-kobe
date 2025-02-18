import React, { useState } from 'react';
import { currentDate } from '@/app/utils/formatDate';

const Calendar = () => {
    const [dateSelect, setDateSelect] = useState("");

    const handleDateChange = (e) => {
        const dateValue = e.target.value;
        console.log("Date value: ", dateValue);
        
        setDateSelect(dateValue);
    }

  return (
    <div className='flex flex-col items-center justify-between w-full max-w-md bg-gray-900 text-white p-4 rounded-lg shadow-lg'>
      <input className='text-black' step={"1"} type="date" value={currentDate()} onChange={handleDateChange}/>
      <button></button>
    </div>
  );
}

export default Calendar;
