import type { Meta, StoryObj } from '@storybook/react-vite';
import { Icon, iconNames } from './Icon';

const meta = {
  title: 'Primitives/Icon',
  component: Icon,
  args: { name: 'chevrons-right', size: 24 },
  argTypes: { name: { control: 'select', options: iconNames } },
  decorators: [(Story) => <div style={{ color: 'var(--text-primary)' }}><Story /></div>],
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const AllIcons: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: 'flex', gap: 32, fontFamily: 'var(--font-family-syne)', fontSize: 12 }}>
      {iconNames.map((name) => (
        <div key={name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          <Icon name={name} />
          {name}
        </div>
      ))}
    </div>
  ),
};
