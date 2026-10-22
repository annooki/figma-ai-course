import type { Meta, StoryObj } from '@storybook/react-vite';
import { desktop, mobile, tablet } from '../../stories/breakpoints';
import { Hero } from './Hero';

const meta = {
  title: 'Sections/Hero',
  component: Hero,
} satisfies Meta<typeof Hero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Desktop: Story = { globals: desktop };
export const Tablet: Story = { globals: tablet };
export const Mobile: Story = { globals: mobile };
