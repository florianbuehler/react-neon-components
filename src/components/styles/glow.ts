import { css } from 'styled-components';
import { StyledNeonProps } from '../index.types';
import { text, textShadow } from './base';

export const glow = css<StyledNeonProps>`
  ${text}
  ${textShadow}
`;
