import React from 'react';
import styled from 'styled-components';
import { NeonHeaderProps, StyledNeonHeaderProps } from '../index.types';
import { Effect, NeonStyleAllPropsRequired } from '../../index.types';
import { getStyleForEffect } from '../../../utils/effect';

const StyledH1 = styled.h1.attrs<StyledNeonHeaderProps>(({ headerProps }) => ({
  ...headerProps
}))<StyledNeonHeaderProps>`
  ${({ neonStyle }) => getStyleForEffect(neonStyle.effect)}
`;

const NeonH1: React.FC<NeonHeaderProps> = ({
  children,
  effect,
  color,
  fontSize,
  ...headerProps
}): React.ReactElement => {
  const neonStyle: NeonStyleAllPropsRequired = {
    effect: effect ?? Effect.Glow,
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
