import { css } from 'styled-components';
import { StyledNeonProps } from '../index.types';
import { textShadow } from './base';

export const glow = css<StyledNeonProps>`
  ${textShadow}
`;
