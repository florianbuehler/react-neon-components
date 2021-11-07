import { Interpolation, ThemeProps } from 'styled-components';
import { Effect, StyledNeonProps } from '../components/index.types';
import { flicker, glow } from '../components/styles';

export const getStyleForEffect = (effect: Effect): readonly Interpolation<StyledNeonProps & ThemeProps<any>>[] => {
  switch (effect) {
    case Effect.Glow:
      return glow;
    case Effect.Flicker:
      return flicker;
  }
};
