import type { Meta, StoryObj } from '@storybook/react-vite';
import { desktop, mobile, tablet } from '../../stories/breakpoints';
import { About } from './About';

const meta = {
  title: 'Sections/About',
  component: About,
  argTypes: { children: { control: false } },
} satisfies Meta<typeof About>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Desktop: Story = { globals: desktop };
export const Tablet: Story = { globals: tablet };
export const Mobile: Story = { globals: mobile };
