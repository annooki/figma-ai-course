import type { Meta, StoryObj } from '@storybook/react-vite';
import { figmaName, hexOf, primitiveColors, semanticColors } from './tokens';
import './Foundations.css';

const meta = {
  title: 'Foundations/Colours',
  tags: ['!autodocs'],
  parameters: { controls: { disable: true } },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

/** Figma collection "colour primitives" */
export const Primitives: Story = {
  render: () => (
    <div className="fd">
      {['coral', 'sand', 'neutral'].map((family) => (
        <section key={family}>
          <h2>{family}</h2>
          <div className="fd__swatches">
            {primitiveColors
              .filter((c) => c.family === family)
              .map((c) => (
                <div className="fd__swatch" key={c.name}>
                  <div className="fd__chip" style={{ background: `var(${c.name})` }} />
                  <code>{figmaName(c.name).replace('color/', '')}</code>
                  <span className="fd__muted">{c.value}</span>
                </div>
              ))}
          </div>
        </section>
      ))}
    </div>
  ),
};

const Mode = ({ alias }: { alias: string }) => (
  <span className="fd__mode">
    <span className="fd__dot" style={{ background: `var(${alias})` }} />
    <span>
      <code>{figmaName(alias)}</code>
      <br />
      <span className="fd__muted">{hexOf(alias)}</span>
    </span>
  </span>
);

/** Figma collection "colour semantics", modes light and dark. Use these in components. */
export const Semantics: Story = {
  render: () => (
    <div className="fd">
      <section>
        <h2>colour semantics</h2>
        <p className="fd__note">Each token points to a primitive, per mode. The Theme toolbar switches the mode for the components.</p>
        <table>
          <thead>
            <tr>
              <th>Token</th>
              <th>CSS variable</th>
              <th>light</th>
              <th>dark</th>
            </tr>
          </thead>
          <tbody>
            {semanticColors.map((c) => (
              <tr key={c.name}>
                <td>
                  <code>{figmaName(c.name)}</code>
                </td>
                <td>
                  <code className="fd__muted">{c.name}</code>
                </td>
                <td>
                  <Mode alias={c.light} />
                </td>
                <td>
                  <Mode alias={c.dark} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  ),
};
