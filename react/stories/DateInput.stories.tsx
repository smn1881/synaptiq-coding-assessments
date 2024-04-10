import type { Meta, StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';
import { DateInput } from './DateInput';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof DateInput> = {
  title: 'Example/DataInput',
  component: DateInput,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof DateInput>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const StartDate: Story = {
    args: { 
        calenderType: 'start',
        dateValue: '04-11-2024',
    },
    render: function Render(args) {
        const [{}, updateArgs] = useArgs();
    
        function onChange(date: any) {
          updateArgs({ dateValue: date });
        }
    
        return <DateInput {...args} onChange={onChange} />;
    },
};

export const EndDate: Story = {
    args: { 
        calenderType: 'end',
        dateValue: '04-11-2024',
    },
    render: function Render(args) {
      const [{}, updateArgs] = useArgs();
  
      function onChange(date: any) {
        updateArgs({ dateValue: date });
      }
  
      return <DateInput {...args} onChange={onChange} />;
  },
};
