import { css, keyframes } from 'styled-components';
import { NeonStyleAllPropsRequired, StyledNeonProps } from '../index.types';
import { getTextShadow, disableAnimationForReducedMotion } from './base';
import { scaleSize } from '../../utils/cssSize';

const flickerAnimation = (neonStyle: NeonStyleAllPropsRequired) => keyframes`
  0%, 18%, 22%, 25%, 53%, 57%, 100% {
    text-shadow: ${getTextShadow(neonStyle)};
  }
  
  20%, 24%, 55% {
    text-shadow: none;
  }
`;

const subtleFlickerAnimation = (neonStyle: NeonStyleAllPropsRequired) => keyframes`
  100% {
    text-shadow: ${getTextShadow(neonStyle)};
  }
  
 0% {
   text-shadow: 
     0 0 4px #fff,
     0 0 10px #fff,
     0 0 18px #fff,
     0 0 ${scaleSize(neonStyle.fontSize, 0.57)} ${neonStyle.color},
     0 0 ${scaleSize(neonStyle.fontSize!, 1.09)} ${neonStyle.color},
     0 0 ${scaleSize(neonStyle.fontSize!, 1.19)} ${neonStyle.color},
     0 0 ${scaleSize(neonStyle.fontSize!, 1.4)} ${neonStyle.color},
     0 0 ${scaleSize(neonStyle.fontSize!, 2.08)} ${neonStyle.color};
  }
`;

export const flicker = css<StyledNeonProps>`
  animation: ${({ neonStyle }) => flickerAnimation(neonStyle)} 1.5s infinite alternate;
  ${disableAnimationForReducedMotion}
`;

export const subtleFlicker = css<StyledNeonProps>`
  animation: ${({ neonStyle }) => subtleFlickerAnimation(neonStyle)} 0.11s ease-in-out infinite alternate;
  ${disableAnimationForReducedMotion}
`;
