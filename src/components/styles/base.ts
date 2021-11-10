import { css } from 'styled-components';
import { NeonStyle, StyledNeonProps } from '../index.types';
import { scaleSize } from '../../utils/cssSize';

export const getTextShadow = (neonStyle: NeonStyle): string =>
  `0 0 7px #fff,
   0 0 10px #fff, 
   0 0 21px #fff, 
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
  border: 0.2rem solid #fff;
  border-radius: 2rem;
  padding: 0.4em;
  box-shadow: ${({ neonStyle }) =>
    `0 0 0.2rem #fff,
     0 0 0.2rem #fff,
     0 0 ${scaleSize(neonStyle.fontSize, 0.19)} ${neonStyle.color},
     0 0 ${scaleSize(neonStyle.fontSize, 0.48)} ${neonStyle.color},
     0 0 ${scaleSize(neonStyle.fontSize, 0.67)} ${neonStyle.color},
     inset 0 0 ${scaleSize(neonStyle.fontSize, 0.31)} ${neonStyle.color}
    `};
`;
