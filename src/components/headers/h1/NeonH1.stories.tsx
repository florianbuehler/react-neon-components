import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import NeonH1 from './NeonH1';

export default {
  title: 'Headers/NeonH1',
  component: NeonH1
} as ComponentMeta<typeof NeonH1>;

const Template: ComponentStory<typeof NeonH1> = (args) => <NeonH1 {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  color: 'red',
  children: 'Neon',
  onClick: () => console.log('click'),
  id: 'my id'
};
