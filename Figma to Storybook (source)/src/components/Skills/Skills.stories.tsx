import type { Meta, StoryObj } from '@storybook/react-vite';
import { desktop, mobile, tablet } from '../../stories/breakpoints';
import { Skills } from './Skills';

const meta = {
  title: 'Sections/Skills',
  component: Skills,
} satisfies Meta<typeof Skills>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Desktop: Story = { globals: desktop };
export const Tablet: Story = { globals: tablet };
export const Mobile: Story = { globals: mobile };
