import React from 'react';
import styled from 'styled-components';

const scaleSize = (size: string, factor: number): string => {
  if (size.endsWith('rem')) {
    return `${parseFloat(size.slice(0, -3)) * factor}${size.slice(-3)}`;
  }

  if (size.endsWith('em') || size.endsWith('px')) {
    return `${parseFloat(size.slice(0, -2)) * factor}${size.slice(-2)}`;
  }

  throw new Error();
};

const StyledH1 = styled.h1<NeonStyle>`
  margin-top: 10rem;
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

type NeonStyle = {
  color: string;
  fontSize?: string;
};

const NeonH1: React.FC<NeonStyle> = ({ children, ...neonStyle }): React.ReactElement => {
  neonStyle.fontSize = neonStyle.fontSize ?? '4.2rem';

  return <StyledH1 {...neonStyle}>{children}</StyledH1>;
};

export default NeonH1;
