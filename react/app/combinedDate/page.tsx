"use client";

import { useState } from 'react';
import { CALENDER_TYPE, DateInput } from "../../stories/DateInput";
import { Button } from "../../stories/Button";

export default function CombinedDate() {
    const [startDateSelected, setStartDateSelected] = useState('');
    const [showEndDate, setShowEndDate] = useState(false);
    const [endDateSelected, setEndDateSelected] = useState('');
    const today = new Date().toISOString().split("T")[0];

    const testDates = [
        "2024-01-15",
        "2024-02-25",
        "2024-03-07",
        "2024-04-12",
        "2024-05-20",
        "2024-06-08",
        "2024-07-17",
        "2024-08-22",
        "2024-09-10",
        "2024-10-30",
        "2024-11-11",
        "2024-12-28"
      ];

    const setCheckbox = () => {
        setShowEndDate(!showEndDate);
        setEndDateSelected('');
    }  

    const reset = () => {
        setStartDateSelected('');
        setEndDateSelected('');
        setShowEndDate(false);
    };

    return (
        <div className='bg-sky-200 h-screen p-10 flex flex-col'>
            <h1 className='text-4xl font-bold mt-10 mx-10'>Combined Date</h1>
            <DateInput 
                calenderType={'start' as CALENDER_TYPE} 
                dateValue={startDateSelected} 
                min={today}
                onChange={setStartDateSelected} 
            />
            <div className='flex flex-row ml-10'>
                <Button 
                    primary={true}
                    label={`${showEndDate ? 'Remove' : 'Add'} end date`}
                    onClick={setCheckbox}
                ></Button>
            </div>
            {showEndDate && 
                <DateInput 
                    calenderType={'end' as CALENDER_TYPE} 
                    dateValue={endDateSelected} 
                    min={startDateSelected}
                    onChange={setEndDateSelected} 
                />
            }
            <div className='m-10'>
                <div className='flex flex-row'>
                    <h2 className='text-lg font-semibold mr-10'>Test Data</h2>
                    <button 
                        className='border border-blue-200 rounded bg-white p-1' 
                        onClick={reset}
                    >
                        Reset
                    </button>
                </div>
                {startDateSelected && <div className='my-2 font-medium'>Dates after {startDateSelected} {endDateSelected ? `and before ${endDateSelected}` : ''}</div>}
                {testDates.map((date) => {
                    if (date > startDateSelected && ((endDateSelected && endDateSelected > date) || !showEndDate)) {
                        return <div key={date}>{new Date(date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</div>
                    };
                })}  
            </div>
        </div>
    )
}