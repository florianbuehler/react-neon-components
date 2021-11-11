import React from 'react';
import styled from 'styled-components';
import { NeonHeaderProps, StyledNeonHeaderProps } from '../index.types';
import { NeonStyle } from '../../index.types';
import { Effect } from '../../../enums';
import { text, border, reflection } from '../../styles';
import { getStyleForEffect } from '../../../utils/effect';

const StyledH3 = styled.h3.attrs<StyledNeonHeaderProps>(({ headerProps }) => ({
  ...headerProps
}))<StyledNeonHeaderProps>`
  display: inline-block;
  ${text}

  ${({ neonStyle }) => getStyleForEffect(neonStyle.effect)}
  
  ${({ neonStyle }) => neonStyle.border && border}

  ${({ neonStyle }) => neonStyle.reflection && reflection}
`;

const NeonH3: React.FC<NeonHeaderProps> = ({
  children,
  color,
  fontSize,
  effect,
  border,
  reflection,
  ...headerProps
}): React.ReactElement => {
  const neonStyle: NeonStyle = {
    color,
    fontSize: fontSize ?? '2.4rem',
    effect: effect ?? Effect.Glow,
    border: border ?? false,
    reflection: reflection ?? false
  };

  return (
    <StyledH3 neonStyle={neonStyle} headerProps={headerProps} content={children?.toString()}>
      {children}
    </StyledH3>
  );
};

export default NeonH3;
