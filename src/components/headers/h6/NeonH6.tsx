import React from 'react';
import styled from 'styled-components';
import { NeonHeaderProps, StyledNeonHeaderProps } from '../index.types';
import { Effect, NeonStyle } from '../../index.types';
import { text, border } from '../../styles';
import { getStyleForEffect } from '../../../utils/effect';

const StyledH6 = styled.h6.attrs<StyledNeonHeaderProps>(({ headerProps }) => ({
  ...headerProps
}))<StyledNeonHeaderProps>`
  display: inline-block;
  ${text}

  ${({ neonStyle }) => getStyleForEffect(neonStyle.effect)}
  
  ${({ neonStyle }) => neonStyle.border && border}
`;

const NeonH6: React.FC<NeonHeaderProps> = ({
  children,
  color,
  fontSize,
  effect,
  border,
  ...headerProps
}): React.ReactElement => {
  const neonStyle: NeonStyle = {
    color,
    fontSize: fontSize ?? '1.5rem',
    effect: effect ?? Effect.Glow,
    border: border ?? false
  };

  return (
    <StyledH6 neonStyle={neonStyle} headerProps={headerProps}>
      {children}
    </StyledH6>
  );
};

export default NeonH6;
