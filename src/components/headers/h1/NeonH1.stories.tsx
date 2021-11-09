import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import NeonH1 from './NeonH1';
import { Effect } from '../../index.types';

export default {
  title: 'Headers/NeonH1',
  component: NeonH1
} as ComponentMeta<typeof NeonH1>;

const Template: ComponentStory<typeof NeonH1> = (args) => <NeonH1 {...args} />;

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
