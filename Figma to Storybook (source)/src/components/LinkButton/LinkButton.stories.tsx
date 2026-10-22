import type { Meta, StoryObj } from '@storybook/react-vite';
import { LinkButton } from './LinkButton';

const meta = {
  title: 'Primitives/Link button',
  component: LinkButton,
  argTypes: {
    state: { control: 'inline-radio', options: ['default', 'hover', 'active', 'focus'] },
  },
} satisfies Meta<typeof LinkButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const AllStates: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      <LinkButton />
      <LinkButton state="hover" />
      <LinkButton state="active" />
      <LinkButton state="focus" />
    </div>
  ),
};
