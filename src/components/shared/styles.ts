import { css } from 'styled-components';
import { NeonStyle } from '../index.types';
import { scaleSize } from '../../utils/cssSize';

export const baseStyle = css<NeonStyle>`
  color: #fff;
  font-weight: 400;
  font-size: ${({ fontSize }: NeonStyle) => fontSize};
  text-shadow: ${({ fontSize, color }: NeonStyle) =>
    `0 0 7px #fff,
     0 0 10px #fff, 
     0 0 21px #fff, 
     0 0 ${scaleSize(fontSize!, 0.63)} ${color}, 
     0 0 ${scaleSize(fontSize!, 1.22)} ${color}, 
     0 0 ${scaleSize(fontSize!, 1.37)} ${color}, 
     0 0 ${scaleSize(fontSize!, 1.52)} ${color}, 
     0 0 ${scaleSize(fontSize!, 2.25)} ${color};
    `};
`;
