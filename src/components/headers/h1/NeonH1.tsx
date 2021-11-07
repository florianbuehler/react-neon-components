import React from 'react';
import styled from 'styled-components';
import { NeonStyle } from '../../index.types';
import { baseStyle } from '../../shared/styles';

const StyledH1 = styled.h1<NeonStyle>`
  ${baseStyle};
`;

const NeonH1: React.FC<NeonStyle> = ({ children, ...neonStyle }): React.ReactElement => {
  neonStyle.fontSize = neonStyle.fontSize ?? '4.2rem';

  return <StyledH1 {...neonStyle}>{children}</StyledH1>;
};

export default NeonH1;
