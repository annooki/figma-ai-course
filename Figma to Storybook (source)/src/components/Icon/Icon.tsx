import type { CSSProperties } from 'react';
import chevronsRight from '../../assets/icons/chevrons-right.svg';
import arrowRightLong from '../../assets/icons/arrow-right-long.svg';
import xmarkLarge from '../../assets/icons/xmark-large.svg';
import bars from '../../assets/icons/bars.svg';
import './Icon.css';

const icons = {
  'chevrons-right': chevronsRight,
  'arrow-right-long': arrowRightLong,
  'xmark-large': xmarkLarge,
  bars,
} as const;

export type IconName = keyof typeof icons;

export type IconProps = {
  name: IconName;
  /** Size in px. Figma: 24 (library), 20 (in buttons), 32 (nav menu) */
  size?: number;
  className?: string;
};

/**
 * Figma "Icons" (light style). The SVG is used as a mask, so the icon
 * takes the current text colour and follows hover states and themes.
 */
export function Icon({ name, size = 24, className }: IconProps) {
  const style = {
    '--icon-size': `${size}px`,
    '--icon-src': `url("${icons[name]}")`,
  } as CSSProperties;

  return <span className={['icon', className].filter(Boolean).join(' ')} style={style} aria-hidden="true" />;
}

export const iconNames = Object.keys(icons) as IconName[];
