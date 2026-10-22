import { Fragment } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { iconNames } from '../Icon/Icon';
import { Button, type ButtonState, type ButtonVariant } from './Button';

const meta = {
  title: 'Primitives/Button',
  component: Button,
  argTypes: {
    variant: { control: 'inline-radio', options: ['primary', 'secondary', 'tertiary'] },
    state: { control: 'inline-radio', options: ['default', 'hover', 'active', 'focus'] },
    swapIcon: { control: 'select', options: iconNames },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
export const Secondary: Story = { args: { variant: 'secondary' } };
export const Tertiary: Story = { args: { variant: 'tertiary' } };

const variants: ButtonVariant[] = ['primary', 'secondary', 'tertiary'];
const states: ButtonState[] = ['default', 'hover', 'active', 'focus'];

/** Every variant and state, laid out like the Figma component set. */
export const AllVariants: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'auto repeat(3, auto)', gap: 24, alignItems: 'center' }}>
      <span />
      {variants.map((v) => (
        <strong key={v} style={{ fontFamily: 'var(--font-family-syne)', color: 'var(--text-primary)' }}>{v}</strong>
      ))}
      {states.map((s) => (
        <Fragment key={s}>
          <span style={{ fontFamily: 'var(--font-family-syne)', color: 'var(--text-secondary)' }}>{s}</span>
          {variants.map((v) => (
            <Button key={v + s} variant={v} state={s} />
          ))}
        </Fragment>
      ))}
    </div>
  ),
};
