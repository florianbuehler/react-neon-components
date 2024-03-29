﻿import { css } from 'styled-components';
import { NeonStyle, StyledNeonProps } from '../index.types';
import { scaleSize } from '../../utils/cssSize';

export const getTextShadow = (neonStyle: NeonStyle): string =>
  `0 0 ${scaleSize(neonStyle.fontSize, 0.1)} #fff,
   0 0 ${scaleSize(neonStyle.fontSize, 0.15)} #fff, 
   0 0 ${scaleSize(neonStyle.fontSize, 0.31)} #fff, 
   0 0 ${scaleSize(neonStyle.fontSize, 0.62)} ${neonStyle.color}, 
   0 0 ${scaleSize(neonStyle.fontSize!, 1.22)} ${neonStyle.color}, 
   0 0 ${scaleSize(neonStyle.fontSize!, 1.37)} ${neonStyle.color}, 
   0 0 ${scaleSize(neonStyle.fontSize!, 1.52)} ${neonStyle.color}, 
   0 0 ${scaleSize(neonStyle.fontSize!, 2.25)} ${neonStyle.color};
  `;

export const text = css<StyledNeonProps>`
  color: #fff;
  font-weight: 400;
  font-size: ${({ neonStyle }: StyledNeonProps) => neonStyle.fontSize};
  margin: 0.25rem;
`;

export const textShadow = css<StyledNeonProps>`
  text-shadow: ${({ neonStyle }) => getTextShadow(neonStyle)};
`;

// if the user prefers reduced motion we only display the glowing effect
export const disableAnimationForReducedMotion = css<StyledNeonProps>`
  @media screen and (prefers-reduced-motion) {
    animation: none;

    ${textShadow}
  }
`;

export const border = css<StyledNeonProps>`
  border: ${({ neonStyle }) => `${scaleSize(neonStyle.fontSize, 0.06)} solid #fff`};
  border-radius: ${({ neonStyle }) => scaleSize(neonStyle.fontSize, 0.5)};
  padding: 0.4em;
  box-shadow: ${({ neonStyle }) =>
    `0 0 ${scaleSize(neonStyle.fontSize, 0.05)} #fff,
     0 0 ${scaleSize(neonStyle.fontSize, 0.19)} ${neonStyle.color},
     0 0 ${scaleSize(neonStyle.fontSize, 0.48)} ${neonStyle.color},
     0 0 ${scaleSize(neonStyle.fontSize, 0.67)} ${neonStyle.color},
     inset 0 0 ${scaleSize(neonStyle.fontSize, 0.31)} ${neonStyle.color}
    `};
`;

export const reflection = css<StyledNeonProps>`
  position: relative;
  padding-bottom: ${({ neonStyle }) => neonStyle.fontSize};

  &:before {
    content: '${({ content }) => content}';
    top: ${({ neonStyle }) => neonStyle.fontSize};
    position: absolute;
    transform: scale(1, -1);
    backface-visibility: hidden;
    z-index: -1;
    text-shadow: ${({ neonStyle }) => `
      0 0px ${scaleSize(neonStyle.fontSize, 0.07)} #fff,
      0 2px ${scaleSize(neonStyle.fontSize, 0.1)} #fff,
      0 4px ${scaleSize(neonStyle.fontSize, 0.51)} #fff,
      0 10px ${scaleSize(neonStyle.fontSize, 0.4)} ${neonStyle.color},
      0 10px ${scaleSize(neonStyle.fontSize!, 0.8)} ${neonStyle.color},
      0 20px ${scaleSize(neonStyle.fontSize!, 0.9)} ${neonStyle.color},
      0 20px ${scaleSize(neonStyle.fontSize!, 1)} ${neonStyle.color},
      0 20px ${scaleSize(neonStyle.fontSize!, 1.6)} ${neonStyle.color};`};
  }
`;
