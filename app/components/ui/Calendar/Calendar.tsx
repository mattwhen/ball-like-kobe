import React from 'react';
import { currentDate, setDate } from '@/app/utils/formatDate';

const Calendar = ( {setDateSelect: string}) => {
    

    const handleDateChange = (e) => {
        const dateValue = e.target.value;

        setDateSelect(dateValue);
    }

  return (
    <div className='flex flex-col p-6 mt-5 items-center justify-between w-full max-w-sm bg-gray-900 text-white rounded-lg shadow-lg'>
      <input className='text-black' step={"1"} type="date"  onChange={handleDateChange}/>
    </div>
  );
}

export default Calendar;
