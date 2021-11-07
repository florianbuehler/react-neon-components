export enum Effect {
  Glow = 'Glow',
  Flicker = 'Flicker'
}

export type NeonStyle = {
  effect?: Effect;
  color: string;
  fontSize?: string;
};

export type NeonStyleAllPropsRequired = {
  [Property in keyof NeonStyle]-?: NeonStyle[Property];
};

export type StyledNeonProps = {
  neonStyle: NeonStyleAllPropsRequired;
};
