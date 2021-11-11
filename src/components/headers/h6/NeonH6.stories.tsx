import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import NeonH6 from './NeonH6';
import { Effect } from '../../../enums';

export default {
  title: 'Headers/NeonH6',
  component: NeonH6
} as ComponentMeta<typeof NeonH6>;

const Template: ComponentStory<typeof NeonH6> = (args) => <NeonH6 {...args} />;

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
