export enum Effect {
  Glow = 'glow',
  Flicker = 'flicker',
  SubtleFlicker = 'subtle-flicker',
  Pulsate = 'pulsate'
}

export type NeonProps = {
  color: string;
  fontSize?: string;
  effect?: Effect;
  border?: boolean;
};

export type NeonStyle = {
  color: string;
  fontSize: string;
  effect: Effect;
  border: boolean;
};

export type StyledNeonProps = {
  neonStyle: NeonStyle;
};
