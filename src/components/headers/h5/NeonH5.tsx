import React from 'react';
import styled from 'styled-components';
import { NeonHeaderProps, StyledNeonHeaderProps } from '../index.types';
import { Effect, NeonStyle } from '../../index.types';
import { text, border } from '../../styles';
import { getStyleForEffect } from '../../../utils/effect';

const StyledH5 = styled.h5.attrs<StyledNeonHeaderProps>(({ headerProps }) => ({
  ...headerProps
}))<StyledNeonHeaderProps>`
  display: inline-block;
  ${text}

  ${({ neonStyle }) => getStyleForEffect(neonStyle.effect)}
  
  ${({ neonStyle }) => neonStyle.border && border}
`;

const NeonH5: React.FC<NeonHeaderProps> = ({
  children,
  color,
  fontSize,
  effect,
  border,
  ...headerProps
}): React.ReactElement => {
  const neonStyle: NeonStyle = {
    color,
    fontSize: fontSize ?? '1.75rem',
    effect: effect ?? Effect.Glow,
    border: border ?? false
  };

  return (
    <StyledH5 neonStyle={neonStyle} headerProps={headerProps}>
      {children}
    </StyledH5>
  );
};

export default NeonH5;
