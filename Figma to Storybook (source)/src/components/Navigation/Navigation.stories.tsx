import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { desktop, mobile, tablet } from '../../stories/breakpoints';
import { Navigation } from './Navigation';

const meta = {
  title: 'Layout/Navigation',
  component: Navigation,
  args: { onMenuToggle: fn() },
} satisfies Meta<typeof Navigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Desktop: Story = { globals: desktop };
export const Tablet: Story = { globals: tablet };
export const Mobile: Story = { globals: mobile };
