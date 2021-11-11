import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import NeonH4 from './NeonH4';
import { Effect } from '../../../enums';

export default {
  title: 'Headers/NeonH4',
  component: NeonH4
} as ComponentMeta<typeof NeonH4>;

const Template: ComponentStory<typeof NeonH4> = (args) => <NeonH4 {...args} />;

export const Glow = Template.bind({});
Glow.args = {
  color: 'red',
  effect: Effect.Glow,
  border: false,
  children: 'Neon'
};

export const Flicker = Template.bind({});
Flicker.args = {
  color: 'red',
  effect: Effect.Flicker,
  border: false,
  children: 'Neon'
};

export const SubtleFlicker = Template.bind({});
SubtleFlicker.args = {
  color: 'red',
  effect: Effect.SubtleFlicker,
  border: false,
  children: 'Neon'
};

export const Pulsate = Template.bind({});
Pulsate.args = {
  color: 'red',
  effect: Effect.Pulsate,
  border: false,
  children: 'Neon'
};
