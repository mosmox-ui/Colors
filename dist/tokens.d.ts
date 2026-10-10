import type { ColorScaleName, ColorToken, ColorTone } from './types.js';
export declare const colorTones: ColorTone[];
export declare const colors: Record<ColorScaleName, Record<ColorTone, ColorToken>>;
export declare const colorScales: ColorScaleName[];
export declare const colorByName: Record<string, ColorToken>;
export declare function getColor(name: string): ColorToken | undefined;
