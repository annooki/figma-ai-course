import type { Meta, StoryObj } from '@storybook/react-vite';
import { desktop, mobile, tablet } from '../../stories/breakpoints';
import { ProjectCard } from './ProjectCard';

const meta = {
  title: 'Sections/Project card',
  component: ProjectCard,
  argTypes: { children: { control: false } },
} satisfies Meta<typeof ProjectCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Desktop: Story = { globals: desktop };
export const Tablet: Story = { globals: tablet };
export const Mobile: Story = { globals: mobile };

/** "Has bg" off: page background instead of the warm one */
export const WithoutBackground: Story = { globals: desktop, args: { hasBg: false } };
