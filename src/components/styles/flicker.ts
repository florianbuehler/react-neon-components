import { css, keyframes } from 'styled-components';
import { NeonStyleAllPropsRequired, StyledNeonProps } from '../index.types';
import { text, getTextShadow } from './base';

const flickerAnimation = (neonStyle: NeonStyleAllPropsRequired) => keyframes`
  0%, 18%, 22%, 25%, 53%, 57%, 100% {
    text-shadow: ${getTextShadow(neonStyle)};
  }
  
  20%, 24%, 55% {
    text-shadow: none;
  }
`;

export const flicker = css<StyledNeonProps>`
  ${text}
  animation: ${({ neonStyle }) => flickerAnimation(neonStyle)} 1.5s infinite alternate;
`;
