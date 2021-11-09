import React from 'react';
import styled from 'styled-components';
import { NeonHeaderProps, StyledNeonHeaderProps } from '../index.types';
import { Effect, NeonStyleAllPropsRequired } from '../../index.types';
import { text, border } from '../../styles';
import { getStyleForEffect } from '../../../utils/effect';

const StyledH1 = styled.h1.attrs<StyledNeonHeaderProps>(({ headerProps }) => ({
  ...headerProps
}))<StyledNeonHeaderProps>`
  display: inline-block;
  ${text}

  ${({ neonStyle }) => getStyleForEffect(neonStyle.effect)}
  
  ${({ neonStyle }) => neonStyle.border && border}
`;

const NeonH1: React.FC<NeonHeaderProps> = ({
  children,
  effect,
  color,
  fontSize,
  border,
  ...headerProps
}): React.ReactElement => {
  const neonStyle: NeonStyleAllPropsRequired = {
    effect: effect ?? Effect.Glow,
    color,
    fontSize: fontSize ?? '4.2rem',
    border: border ?? false
  };

  return (
    <StyledH1 neonStyle={neonStyle} headerProps={headerProps}>
      {children}
    </StyledH1>
  );
};

export default NeonH1;
