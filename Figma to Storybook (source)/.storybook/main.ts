import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  "stories": [
    "../src/Introduction.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@chromatic-com/storybook",
    "@storybook/addon-vitest",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
    "@storybook/addon-mcp"
  ],
  "framework": "@storybook/react-vite",
  // Reads the TypeScript prop types, so Docs show the Figma properties with types
  "typescript": {
    "reactDocgen": "react-docgen-typescript",
    "reactDocgenTypescriptOptions": {
      "tsconfigPath": "./tsconfig.app.json",
      "shouldExtractLiteralValuesFromEnum": true,
      "shouldRemoveUndefinedFromOptional": true
    }
  }
};
export default config;