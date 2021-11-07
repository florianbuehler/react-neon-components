import React from 'react';
import styled from 'styled-components';
import { baseStyle } from '../../shared/styles';
import { NeonHeaderProps, StyledNeonHeaderProps } from '../index.types';
import { NeonStyleAllPropsRequired } from '../../index.types';

const StyledH1 = styled.h1.attrs<StyledNeonHeaderProps>(({ headerProps }) => ({
  ...headerProps
}))<StyledNeonHeaderProps>`
  ${baseStyle};
`;

const NeonH1: React.FC<NeonHeaderProps> = ({ children, color, fontSize, ...headerProps }): React.ReactElement => {
  const neonStyle: NeonStyleAllPropsRequired = {
    color,
    fontSize: fontSize ?? '4.2rem'
  };

  return (
    <StyledH1 neonStyle={neonStyle} headerProps={headerProps}>
      {children}
    </StyledH1>
  );
};

export default NeonH1;
