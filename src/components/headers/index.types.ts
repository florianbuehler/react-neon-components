import { HTMLProps } from 'react';
import { NeonProps, StyledNeonProps } from '../index.types';

export type NeonHeaderProps = NeonProps & HTMLProps<HTMLHeadingElement>;

export type StyledNeonHeaderProps = {
  headerProps: HTMLProps<HTMLHeadingElement>;
} & StyledNeonProps;
