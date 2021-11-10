import React from 'react';
import styled from 'styled-components';
import { NeonHeaderProps, StyledNeonHeaderProps } from '../index.types';
import { Effect, NeonStyle } from '../../index.types';
import { text, border } from '../../styles';
import { getStyleForEffect } from '../../../utils/effect';

const StyledH4 = styled.h4.attrs<StyledNeonHeaderProps>(({ headerProps }) => ({
  ...headerProps
}))<StyledNeonHeaderProps>`
  display: inline-block;
  ${text}

  ${({ neonStyle }) => getStyleForEffect(neonStyle.effect)}
  
  ${({ neonStyle }) => neonStyle.border && border}
`;

const NeonH4: React.FC<NeonHeaderProps> = ({
  children,
  color,
  fontSize,
  effect,
  border,
  ...headerProps
}): React.ReactElement => {
  const neonStyle: NeonStyle = {
    color,
    fontSize: fontSize ?? '2.1rem',
    effect: effect ?? Effect.Glow,
    border: border ?? false
  };

  return (
    <StyledH4 neonStyle={neonStyle} headerProps={headerProps}>
      {children}
    </StyledH4>
  );
};

export default NeonH4;
