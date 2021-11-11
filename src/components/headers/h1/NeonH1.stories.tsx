import React from 'react';
import { Meta, Story } from '@storybook/react';
import NeonH1 from './NeonH1';
import { NeonHeaderProps } from '../index.types';
import { Effect } from '../../../enums';

export default {
  title: 'Headers/NeonH1',
  component: NeonH1,
  argTypes: {
    size: {
      control: { type: 'number', min: 0 }
    },
    unit: {
      options: ['px', 'em', 'rem'],
      control: { type: 'select' }
    }
  }
} as Meta<NeonHeaderProps & { size: number; unit: string }>;

const Template: Story<NeonHeaderProps & { size: number; unit: string }> = ({ size, unit, ...args }) => {
  const fontSize = size && unit ? `${size}${unit}` : undefined;

  return <NeonH1 fontSize={fontSize} {...args} />;
};

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
