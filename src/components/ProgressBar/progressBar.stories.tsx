import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import ProgressBar, { ProgressBarProps } from './progressBar';
import { palette } from '../../palette';

export default {
    title: 'Components/Progress Bar',
    component: ProgressBar,
} as Meta;

const Template: Story<ProgressBarProps> = (args) => <ProgressBar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    percentage: 60,
    primaryColour: palette.blue
};
