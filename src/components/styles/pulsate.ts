import { css, keyframes } from 'styled-components';
import { NeonStyleAllPropsRequired, StyledNeonProps } from '../index.types';
import { text, getTextShadow, disableAnimationForReducedMotion } from './base';
import { scaleSize } from '../../utils/cssSize';

const pulsateAnimation = (neonStyle: NeonStyleAllPropsRequired) => keyframes`
  100% {
    text-shadow: ${getTextShadow(neonStyle)};
  }
  
 0% {
   text-shadow: 
     0 0 2px #fff,
     0 0 4px #fff,
     0 0 6px #fff,
     0 0 ${scaleSize(neonStyle.fontSize, 0.15)} ${neonStyle.color},
     0 0 ${scaleSize(neonStyle.fontSize, 0.67)} ${neonStyle.color},
     0 0 ${scaleSize(neonStyle.fontSize, 0.82)} ${neonStyle.color},
     0 0 ${scaleSize(neonStyle.fontSize, 1.04)} ${neonStyle.color},
     0 0 ${scaleSize(neonStyle.fontSize, 1.19)} ${neonStyle.color};
  }
`;

export const pulsate = css<StyledNeonProps>`
  ${text}

  animation: ${({ neonStyle }) => pulsateAnimation(neonStyle)} 1.5s infinite alternate;
  ${disableAnimationForReducedMotion}
`;
