import { CSSProperties } from 'react';
import { chartBars, metrics } from './birthdayData';

export { chartBars, metrics };

export function useCssNumber(property: string, value: number): CSSProperties {
  return { [property]: value } as CSSProperties;
}
