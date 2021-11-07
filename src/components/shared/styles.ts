import { css } from 'styled-components';
import { StyledNeonProps } from '../index.types';
import { scaleSize } from '../../utils/cssSize';

export const baseStyle = css<StyledNeonProps>`
  color: #fff;
  font-weight: 400;
  font-size: ${({ neonStyle }: StyledNeonProps) => neonStyle.fontSize};
  text-shadow: ${({ neonStyle }: StyledNeonProps) =>
    `0 0 7px #fff,
     0 0 10px #fff, 
     0 0 21px #fff, 
     0 0 ${scaleSize(neonStyle.fontSize, 0.63)} ${neonStyle.color}, 
     0 0 ${scaleSize(neonStyle.fontSize!, 1.22)} ${neonStyle.color}, 
     0 0 ${scaleSize(neonStyle.fontSize!, 1.37)} ${neonStyle.color}, 
     0 0 ${scaleSize(neonStyle.fontSize!, 1.52)} ${neonStyle.color}, 
     0 0 ${scaleSize(neonStyle.fontSize!, 2.25)} ${neonStyle.color};
    `};
`;
