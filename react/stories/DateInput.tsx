export type CALENDER_TYPE = 'start' | 'end';

export const DateInput = ({ 
    calenderType, 
    dateValue,
    max,
    min,
    onChange 
} : { 
    calenderType: CALENDER_TYPE; 
    dateValue: string;
    max?: string;
    min?: string;
    onChange: (date: string) => void;
}) => {

    return (
        <div className='m-10'>            
            <h2 className='font-semibold'>{ calenderType === 'start' ? 'Start Date' : 'End Date'}</h2>
            <input 
                className='p-2 border border-blue-200 rounded'
                type='date' 
                min={min || undefined}
                max={max || undefined}
                onChange={(e) => onChange(e.target.value)}
                value={dateValue}
            ></input>
        </div>
    )
}