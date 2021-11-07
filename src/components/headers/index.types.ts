import { HTMLProps } from 'react';
import { NeonStyle, StyledNeonProps } from '../index.types';

export type NeonHeaderProps = NeonStyle & HTMLProps<HTMLHeadingElement>;

export type StyledNeonHeaderProps = {
  headerProps: HTMLProps<HTMLHeadingElement>;
} & StyledNeonProps;
