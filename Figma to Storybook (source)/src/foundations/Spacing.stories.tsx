import type { Meta, StoryObj } from '@storybook/react-vite';
import { aliasOf, figmaName, modes, radiusPrimitives, spacePrimitives, spaceSemantics } from './tokens';
import './Foundations.css';

const meta = {
  title: 'Foundations/Spacing & radius',
  tags: ['!autodocs'],
  parameters: { controls: { disable: true } },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

/** Figma collection "space primitives" */
export const SpacePrimitives: Story = {
  render: () => (
    <div className="fd">
      <section>
        <h2>space primitives</h2>
        <table>
          <tbody>
            {spacePrimitives.map(([name, value]) => (
              <tr key={name}>
                <td>
                  <code>{figmaName(name)}</code>
                </td>
                <td>{value}</td>
                <td>
                  <div className="fd__bar" style={{ width: `var(${name})` }} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  ),
};

const Alias = ({ value }: { value: string }) => {
  const alias = aliasOf(value)!;
  return (
    <>
      {modes.desktop[alias]} <code className="fd__muted">{figmaName(alias)}</code>
    </>
  );
};

/** Figma collection "space semantics", modes >1280, >800 and <800 */
export const SpaceSemantics: Story = {
  render: () => (
    <div className="fd">
      <section>
        <h2>space semantics</h2>
        <table>
          <thead>
            <tr>
              <th>Token</th>
              <th>&gt;1280</th>
              <th>&gt;800</th>
              <th>&lt;800</th>
            </tr>
          </thead>
          <tbody>
            {spaceSemantics.map((name) => (
              <tr key={name}>
                <td>
                  <code>{figmaName(name)}</code>
                </td>
                <td>
                  <Alias value={modes.desktop[name]} />
                </td>
                <td>
                  <Alias value={modes.tablet[name]} />
                </td>
                <td>
                  <Alias value={modes.mobile[name]} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  ),
};

/** Figma collection "radius primitives" */
export const Radius: Story = {
  render: () => (
    <div className="fd">
      <section>
        <h2>radius primitives</h2>
        <div style={{ display: 'flex', gap: 24 }}>
          {radiusPrimitives.map(([name, value]) => (
            <div className="fd__swatch" key={name}>
              <div className="fd__radius" style={{ borderRadius: `var(${name})` }} />
              <code>{figmaName(name)}</code>
              <span className="fd__muted">{value}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  ),
};
