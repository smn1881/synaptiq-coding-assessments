import { render, screen } from '@testing-library/react';
import { DateInput } from './DateInput';

describe('DateInput', () => {
    test('should display Start Date if calenderType is start ', () => {
        const component = render(
            <DateInput
                calenderType='start'
                dateValue='2024-04-30'
                onChange={()=>null}
            />
          );
       expect(screen.getByText('Start Date')).toBeInTheDocument();
       expect(screen.queryByText('End Date')).not.toBeInTheDocument();
    });

    test('should display End Date if calenderType is end ', () => {
        const component = render(
            <DateInput
                calenderType='end'
                dateValue='2024-04-30'
                onChange={()=>null}
            />
          );
       expect(screen.queryByText('Start Date')).not.toBeInTheDocument();
       expect(screen.getByText('End Date')).toBeInTheDocument();
    });
 });