export type NeonStyle = {
  color: string;
  fontSize?: string;
};

export type NeonStyleAllPropsRequired = {
  color: string;
  fontSize: string;
};

export type StyledNeonProps = {
  neonStyle: NeonStyleAllPropsRequired;
};
