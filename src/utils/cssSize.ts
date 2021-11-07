export const scaleSize = (size: string, factor: number): string => {
  if (size.endsWith('rem')) {
    return `${parseFloat(size.slice(0, -3)) * factor}${size.slice(-3)}`;
  }

  if (size.endsWith('em') || size.endsWith('px')) {
    return `${parseFloat(size.slice(0, -2)) * factor}${size.slice(-2)}`;
  }

  throw new Error();
};
