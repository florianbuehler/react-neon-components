export enum Effect {
  Glow = 'glow',
  Flicker = 'flicker',
  SubtleFlicker = 'subtle-flicker',
  Pulsate = 'pulsate'
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
