import type { CSSProperties, HTMLAttributes } from 'react';

export type ColorScaleName = 'red' | 'orange' | 'yellow' | 'green' | 'teal' | 'blue' | 'violet' | 'rose' | 'slate' | 'neutral';
export type ColorTone = 25 | 50 | 75 | 100 | 150 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 850 | 900 | 950 | 975;

export interface ColorToken {
  name: string;
  scale: ColorScaleName;
  tone: ColorTone;
  hex: string;
  rgb: string;
  hsl: string;
}

export interface ColorSwatchProps extends Omit<HTMLAttributes<HTMLButtonElement>, 'color'> {
  color: ColorToken | string;
  showValue?: boolean;
  size?: number | string;
  style?: CSSProperties;
}
