import { css } from 'styled-components';
import { NeonStyleAllPropsRequired, StyledNeonProps } from '../index.types';
import { scaleSize } from '../../utils/cssSize';

export const text = css<StyledNeonProps>`
  color: #fff;
  font-weight: 400;
  font-size: ${({ neonStyle }: StyledNeonProps) => neonStyle.fontSize};
`;

export const getTextShadow = (neonStyle: NeonStyleAllPropsRequired): string =>
  `0 0 7px #fff,
   0 0 10px #fff, 
   0 0 21px #fff, 
   0 0 ${scaleSize(neonStyle.fontSize, 0.62)} ${neonStyle.color}, 
   0 0 ${scaleSize(neonStyle.fontSize!, 1.22)} ${neonStyle.color}, 
   0 0 ${scaleSize(neonStyle.fontSize!, 1.37)} ${neonStyle.color}, 
   0 0 ${scaleSize(neonStyle.fontSize!, 1.52)} ${neonStyle.color}, 
   0 0 ${scaleSize(neonStyle.fontSize!, 2.25)} ${neonStyle.color};
  `;
