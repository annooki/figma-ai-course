import type { Meta, StoryObj } from '@storybook/react-vite';
import { skillDesktop, skillMobile, skillTablet } from '../../stories/breakpoints';
import { Skill } from './Skill';

const meta = {
  title: 'Sections/Skill',
  component: Skill,
} satisfies Meta<typeof Skill>;

export default meta;
type Story = StoryObj<typeof meta>;

/* Frame widths are the Figma Skill variant widths */
export const Desktop: Story = { globals: skillDesktop };
export const Tablet: Story = { globals: skillTablet };
export const Mobile: Story = { globals: skillMobile };
