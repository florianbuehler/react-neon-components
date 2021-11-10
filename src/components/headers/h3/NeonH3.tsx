import React from 'react';
import styled from 'styled-components';
import { NeonHeaderProps, StyledNeonHeaderProps } from '../index.types';
import { Effect, NeonStyle } from '../../index.types';
import { text, border } from '../../styles';
import { getStyleForEffect } from '../../../utils/effect';

const StyledH3 = styled.h3.attrs<StyledNeonHeaderProps>(({ headerProps }) => ({
  ...headerProps
}))<StyledNeonHeaderProps>`
  display: inline-block;
  ${text}

  ${({ neonStyle }) => getStyleForEffect(neonStyle.effect)}
  
  ${({ neonStyle }) => neonStyle.border && border}
`;

const NeonH3: React.FC<NeonHeaderProps> = ({
  children,
  color,
  fontSize,
  effect,
  border,
  ...headerProps
}): React.ReactElement => {
  const neonStyle: NeonStyle = {
    color,
    fontSize: fontSize ?? '2.4rem',
    effect: effect ?? Effect.Glow,
    border: border ?? false
  };

  return (
    <StyledH3 neonStyle={neonStyle} headerProps={headerProps}>
      {children}
    </StyledH3>
  );
};

export default NeonH3;
