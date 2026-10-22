import type { Meta, StoryObj } from '@storybook/react-vite';
import { desktop, mobile, tablet } from '../../stories/breakpoints';
import { Footer } from './Footer';

const meta = {
  title: 'Layout/Footer',
  component: Footer,
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Desktop: Story = { globals: desktop };
export const Tablet: Story = { globals: tablet };
export const Mobile: Story = { globals: mobile };
