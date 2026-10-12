# @mosmox-ui/colors

Named tonal color tokens and a small React ColorSwatch component for Mosmox UI and other React applications.

The package provides 10 color scales with 16 tones each: 160 generated color tokens. Each token includes a semantic name, scale, tone, and HEX, RGB, and HSL values.

## Requirements

- React 18 or newer when using ColorSwatch.
- Node.js with npm, pnpm, or Yarn.

## Installation

~~~bash
npm install @mosmox-ui/colors
~~~

~~~bash
pnpm add @mosmox-ui/colors
yarn add @mosmox-ui/colors
~~~

## Color scales and tones

The main colors export is indexed by scale and tone:

~~~tsx
import { colors } from '@mosmox-ui/colors';

const accent = colors.blue[500];

export function PrimaryAction() {
  return <button style={{ backgroundColor: accent.hex, color: '#fff' }}>Continue</button>;
}
~~~

Available scales: red, orange, yellow, green, teal, blue, violet, rose, slate, and neutral.

Every scale contains tones: 25, 50, 75, 100, 150, 200, 300, 400, 500, 600, 700, 800, 850, 900, 950, and 975. The neutral scale is a grayscale ramp for surfaces, borders, text, and overlays.

## Color token API

Each entry in colors is a ColorToken:

~~~ts
type ColorToken = {
  name: string;
  scale: ColorScaleName;
  tone: ColorTone;
  hex: string;
  rgb: string;
  hsl: string;
};
~~~

## Lookup by semantic name

Use getColor when a color name comes from configuration or another runtime source:

~~~tsx
import { getColor } from '@mosmox-ui/colors';

const accent = getColor('Red Core');
const surface = getColor('slate whisper');

if (accent) {
  document.documentElement.style.setProperty('--accent', accent.hex);
}
~~~

Names are trimmed, case-insensitive, and tolerate repeated whitespace. Unknown names return undefined.

## Catalog helpers

~~~tsx
import { colorByName, colorScales, colorTones, colors } from '@mosmox-ui/colors';

for (const scale of colorScales) {
  for (const tone of colorTones) {
    console.log(colors[scale][tone].hex);
  }
}

const allNamedColors = Object.values(colorByName);
~~~

The @mosmox-ui/colors/tokens subpath exports token data and lookup helpers without importing the React swatch:

~~~tsx
import { colorByName, colors, getColor } from '@mosmox-ui/colors/tokens';
~~~

## React ColorSwatch

ColorSwatch renders a button filled with the selected color. Clicking it copies the token HEX value to the clipboard and briefly changes the label to Copied.

~~~tsx
import { ColorSwatch, colors } from '@mosmox-ui/colors';

export function AccentPreview() {
  return <ColorSwatch color={colors.blue[500]} />;
}
~~~

A raw CSS color string is also supported:

~~~tsx
<ColorSwatch color="#1C7C72" showValue={false} size={40} />
~~~

### ColorSwatch props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| color | ColorToken or string | — | Token object or raw color value. Required. |
| showValue | boolean | true | Shows the token name or supplied string; shows Copied after copying. |
| size | number or string | 48 | Swatch height and minimum width. Numbers are pixels; strings may use CSS units. |
| style | CSSProperties | — | Inline styles merged with component defaults. |
| onClick | standard button handler | — | Called before the HEX value is copied. |
| standard button props | HTML button attributes | — | Other attributes, including aria-* attributes, are forwarded. |

Clipboard access requires HTTPS or localhost.

## TypeScript exports

~~~tsx
import type {
  ColorScaleName,
  ColorSwatchProps,
  ColorToken,
  ColorTone,
} from '@mosmox-ui/colors';
~~~

- ColorScaleName — union of the ten scale names.
- ColorTone — union of the sixteen supported tones.
- ColorToken — shape of one generated color.
- ColorSwatchProps — props accepted by ColorSwatch.

## Build from source

~~~bash
cd colors
npm install
npm run typecheck
npm run build
~~~

typecheck validates TypeScript without emitting files. build emits JavaScript and declarations to dist/.

## Package contents

The published package includes dist/, src/, README.md, and LICENSE. It is tree-shakeable and declares sideEffects: false.

## License

@mosmox-ui/colors is distributed under the MIT License. See LICENSE.

## Links

- npm package: https://www.npmjs.com/package/@mosmox-ui/colors
- GitHub repository: https://github.com/mosmox-ui/Colors
- Documentation: [**ui.mosmox.com/docs/**](https://ui.mosmox.com/docs/)
- Mosmox UI GitHub organization: https://github.com/mosmox-ui
