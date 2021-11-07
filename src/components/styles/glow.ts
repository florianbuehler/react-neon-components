import { css } from 'styled-components';
import { StyledNeonProps } from '../index.types';
import { text, getTextShadow } from './base';

export const glow = css<StyledNeonProps>`
  ${text}
  text-shadow: ${({ neonStyle }) => getTextShadow(neonStyle)};
`;
