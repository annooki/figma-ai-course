import type { Meta, StoryObj } from '@storybook/react-vite';
import { Picture } from './Picture';

const meta = {
  title: 'Sections/Picture',
  component: Picture,
} satisfies Meta<typeof Picture>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Figma sizes: 440 (desktop), 356 (tablet), 327 (mobile) */
export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 40, alignItems: 'center' }}>
      {[440, 356, 327].map((size) => (
        <div key={size} style={{ width: size }}>
          <Picture {...args} />
        </div>
      ))}
    </div>
  ),
};
