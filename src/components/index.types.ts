import { Effect } from '../enums';
import { StyledProps } from 'styled-components';

export type NeonProps = {
  color: string;
  fontSize?: string;
  effect?: Effect;
  border?: boolean;
  reflection?: boolean;
};

export type NeonStyle = {
  color: string;
  fontSize: string;
  effect: Effect;
  border: boolean;
  reflection: boolean;
};

export type StyledNeonProps = StyledProps<{
  neonStyle: NeonStyle;
  content?: string;
}>;
