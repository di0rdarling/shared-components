import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Stepper, { StepperProps } from './stepper';

export default {
    title: 'Components/Stepper',
    component: Stepper,
} as Meta;

const Template: Story<StepperProps> = (args) => <Stepper {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    stages: [{
        label: 'Step 1',
        status: 'completed'
    }, {
        label: 'Step 2',
        status: 'current'
    }, {
        label: 'Step 3',
        status: 'uncompleted'
    }, {
        label: 'Step 4',
        status: 'uncompleted'
    },]
};