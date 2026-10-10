import { useState } from 'react';
import type { ColorSwatchProps, ColorToken } from './types.js';

export function ColorSwatch({ color, showValue = true, size = 48, style, ...props }: ColorSwatchProps) {
  const [copied, setCopied] = useState(false);
  const token = typeof color === 'string' ? { name: color, hex: color } : color;
  const copy = async () => {
    await navigator.clipboard.writeText(token.hex);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1200);
  };

  return <button aria-label={`Copy ${token.name}`} type="button" {...props} style={{ ...style, alignItems: 'center', background: token.hex, border: 0, borderRadius: 8, color: '#fff', cursor: 'pointer', display: 'inline-flex', font: 'inherit', height: size, justifyContent: 'center', minWidth: size, textShadow: '0 1px 3px rgb(0 0 0 / 35%)' }} onClick={(event) => { props.onClick?.(event); void copy(); }}>
    {showValue ? (copied ? 'Copied' : token.name) : null}
  </button>;
}
