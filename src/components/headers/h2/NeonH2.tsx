import React from 'react';
import styled from 'styled-components';
import { NeonHeaderProps, StyledNeonHeaderProps } from '../index.types';
import { NeonStyle } from '../../index.types';
import { Effect } from '../../../enums';
import { text, border } from '../../styles';
import { getStyleForEffect } from '../../../utils/effect';

const StyledH2 = styled.h2.attrs<StyledNeonHeaderProps>(({ headerProps }) => ({
  ...headerProps
}))<StyledNeonHeaderProps>`
  display: inline-block;
  ${text}

  ${({ neonStyle }) => getStyleForEffect(neonStyle.effect)}
  
  ${({ neonStyle }) => neonStyle.border && border}
`;

const NeonH2: React.FC<NeonHeaderProps> = ({
  children,
  color,
  fontSize,
  effect,
  border,
  ...headerProps
}): React.ReactElement => {
  const neonStyle: NeonStyle = {
    color,
    fontSize: fontSize ?? '3.1rem',
    effect: effect ?? Effect.Glow,
    border: border ?? false
  };

  return (
    <StyledH2 neonStyle={neonStyle} headerProps={headerProps}>
      {children}
    </StyledH2>
  );
};

export default NeonH2;
