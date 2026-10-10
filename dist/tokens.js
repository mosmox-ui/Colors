export const colorTones = [25, 50, 75, 100, 150, 200, 300, 400, 500, 600, 700, 800, 850, 900, 950, 975];
const toneNames = ['Whisper', 'Mist', 'Pale', 'Soft', 'Light', 'Gentle', 'Mid', 'Bright', 'Core', 'Bold', 'Strong', 'Deep', 'Ink', 'Night', 'Shadow', 'Void'];
const lightness = [98, 96, 93, 89, 84, 77, 69, 60, 51, 43, 35, 28, 23, 17, 11, 7];
const scales = {
    red: { label: 'Red', hue: 350, saturation: 82 },
    orange: { label: 'Orange', hue: 24, saturation: 88 },
    yellow: { label: 'Yellow', hue: 44, saturation: 88 },
    green: { label: 'Green', hue: 152, saturation: 58 },
    teal: { label: 'Teal', hue: 184, saturation: 72 },
    blue: { label: 'Blue', hue: 226, saturation: 84 },
    violet: { label: 'Violet', hue: 266, saturation: 76 },
    rose: { label: 'Rose', hue: 330, saturation: 74 },
    slate: { label: 'Slate', hue: 215, saturation: 18 },
    neutral: { label: 'Neutral', hue: 0, saturation: 0 },
};
function hslToHex(hue, saturation, value) {
    const s = saturation / 100;
    const l = value / 100;
    const chroma = (1 - Math.abs(2 * l - 1)) * s;
    const segment = hue / 60;
    const x = chroma * (1 - Math.abs((segment % 2) - 1));
    const match = l - chroma / 2;
    const [r, g, b] = segment < 1 ? [chroma, x, 0] : segment < 2 ? [x, chroma, 0] : segment < 3 ? [0, chroma, x] : segment < 4 ? [0, x, chroma] : segment < 5 ? [x, 0, chroma] : [chroma, 0, x];
    return `#${[r, g, b].map((channel) => Math.round((channel + match) * 255).toString(16).padStart(2, '0')).join('').toUpperCase()}`;
}
function hexToRgb(hex) {
    const value = hex.slice(1);
    return [Number.parseInt(value.slice(0, 2), 16), Number.parseInt(value.slice(2, 4), 16), Number.parseInt(value.slice(4, 6), 16)];
}
function buildToken(scale, tone, index) {
    const definition = scales[scale];
    const hex = hslToHex(definition.hue, definition.saturation, lightness[index]);
    const [r, g, b] = hexToRgb(hex);
    return { name: `${definition.label} ${toneNames[index]}`, scale, tone, hex, rgb: `rgb(${r}, ${g}, ${b})`, hsl: `hsl(${definition.hue}, ${definition.saturation}%, ${lightness[index]}%)` };
}
export const colors = Object.fromEntries(Object.entries(scales).map(([scale]) => [scale, Object.fromEntries(colorTones.map((tone, index) => [tone, buildToken(scale, tone, index)]))]));
export const colorScales = Object.keys(scales);
export const colorByName = Object.fromEntries(Object.values(colors).flatMap((scale) => Object.values(scale)).map((token) => [token.name, token]));
function normalizeColorName(name) {
    return name.trim().toLowerCase().replace(/\s+/g, ' ');
}
export function getColor(name) {
    const normalizedName = normalizeColorName(name);
    return Object.values(colorByName).find((token) => normalizeColorName(token.name) === normalizedName);
}
