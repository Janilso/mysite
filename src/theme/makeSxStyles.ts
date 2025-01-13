import { SxStyleType } from './types';

export const makeSxStyles = <T extends Record<string, SxStyleType>>(
  styles: T
): T => styles;
