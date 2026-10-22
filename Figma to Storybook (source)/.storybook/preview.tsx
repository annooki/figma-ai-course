import type { Decorator, Preview } from '@storybook/react-vite';
import { DsRoot } from '../src/components';
import { frames } from '../src/stories/breakpoints';
import '../src/index.css';
import './preview.css';

const withTheme: Decorator = (Story, context) => {
  const theme = context.globals.theme;
  if (theme === 'light' || theme === 'dark') {
    document.documentElement.dataset.theme = theme;
  } else {
    delete document.documentElement.dataset.theme;
  }
  return <Story />;
};

/*
 * Renders the story in a frame like a Figma frame: the Figma width,
 * the breakpoint mode set on it, and a height that hugs the content.
 * Stories without a frame are shown at their own size in desktop mode.
 */
const withFrame: Decorator = (Story, context) => {
  const frame = frames[context.globals.frame as string];
  return (
    <div className="sb-frame" style={frame ? { width: frame.width } : undefined}>
      <DsRoot breakpoint={frame?.breakpoint ?? 'desktop'}>
        <Story />
      </DsRoot>
    </div>
  );
};

const preview: Preview = {
  tags: ['autodocs'],
  decorators: [withFrame, withTheme],
  globalTypes: {
    theme: {
      description: 'Light / dark theme (Figma modes)',
      toolbar: {
        title: 'Theme',
        icon: 'mirror',
        items: [
          { value: 'light', title: 'Light', icon: 'sun' },
          { value: 'dark', title: 'Dark', icon: 'moon' },
          { value: 'system', title: 'Follow system', icon: 'browser' },
        ],
        dynamicTitle: true,
      },
    },
    frame: {
      description: 'Frame width and breakpoint mode (Figma >1280, >800, <800)',
      toolbar: {
        title: 'Frame',
        icon: 'grow',
        items: [
          { value: 'none', title: 'Hug content (desktop mode)' },
          { value: 'desktop', title: 'Desktop · 1280' },
          { value: 'tablet', title: 'Tablet · 800' },
          { value: 'mobile', title: 'Mobile · 375' },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    theme: 'light',
    frame: 'none',
  },
  parameters: {
    layout: 'padded',
    options: {
      storySort: {
        order: ['Introduction', 'Foundations', ['Colours', 'Typography', 'Spacing & radius'], 'Primitives', 'Layout', 'Sections'],
      },
    },
    backgrounds: { disable: true },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      // 'todo' - show a11y violations in the test UI only
      test: 'todo',
    },
  },
};

export default preview;
