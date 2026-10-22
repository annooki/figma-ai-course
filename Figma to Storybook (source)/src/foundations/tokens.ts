import tokensCss from '../tokens.css?raw';

/*
 * Reads the tokens straight from tokens.css, so the Foundations
 * pages always show exactly what the components use.
 */

function block(selector: string): string {
  const start = tokensCss.indexOf(selector);
  if (start === -1) return '';
  const open = tokensCss.indexOf('{', start);
  return tokensCss.slice(open + 1, tokensCss.indexOf('}', open));
}

function declarations(css: string): Record<string, string> {
  const out: Record<string, string> = {};
  for (const [, name, value] of css.matchAll(/(--[\w-]+):\s*([^;]+);/g)) out[name] = value.trim();
  return out;
}

const firstRoot = declarations(block(':root {'));
const tablet = declarations(block(':is([data-breakpoint="tablet"], [data-breakpoint="mobile"]) {'));
const mobileOnly = declarations(block('[data-breakpoint="mobile"] {'));
const light = declarations(block('/* ---------- colour semantics: light'));
const dark = declarations(block(':root[data-theme="dark"] {'));

export const modes = {
  desktop: firstRoot,
  tablet: { ...firstRoot, ...tablet },
  mobile: { ...firstRoot, ...tablet, ...mobileOnly },
};

/* Parts of Figma names that contain a hyphen themselves */
const compounds = ['font-size', 'font-family', 'font-weight', 'link-hover', 'icon-hover', 'padding-x', 'padding-y', 'gap-xl', 'gap-lg', 'gap-md', 'gap-sm'];

/** "--color-coral-500" → "color/coral/500", "--text-link-hover" → "text/link-hover" (the Figma name) */
export const figmaName = (cssVar: string) =>
  compounds.reduce((name, c) => name.replaceAll(c.replace('-', '/'), c), cssVar.replace(/^--/, '').replace(/-/g, '/'));

/** "var(--color-coral-500)" → "--color-coral-500" */
export const aliasOf = (value: string) => value.match(/var\((--[\w-]+)\)/)?.[1];

export const primitiveColors = Object.entries(firstRoot)
  .filter(([name]) => name.startsWith('--color-'))
  .map(([name, value]) => ({ name, value, family: name.replace('--color-', '').split('-')[0] }));

export const semanticColors = Object.keys(light)
  .filter((name) => name.startsWith('--'))
  .map((name) => ({ name, light: aliasOf(light[name])!, dark: aliasOf(dark[name])! }));

export const hexOf = (cssVar: string) => firstRoot[cssVar];

export const spacePrimitives = Object.entries(firstRoot).filter(([n]) => n.startsWith('--space-'));
export const radiusPrimitives = Object.entries(firstRoot).filter(([n]) => n.startsWith('--radius-'));

export const spaceSemantics = Object.keys(firstRoot).filter((n) => {
  const v = firstRoot[n];
  return v.startsWith('var(--space-');
});

export const fontSizes = Object.keys(firstRoot).filter((n) => n.startsWith('--font-size-'));
