import logo from '../../assets/logo.svg';
import logoDark from '../../assets/logo-dark.svg';
import { ThemedImage } from '../ThemedImage/ThemedImage';

export type LogoProps = {
  /** Accessible name. Leave empty when the logo is decorative. */
  alt?: string;
  className?: string;
};

/** Figma "Logo": 48 × 48 circle, light and dark versions. */
export function Logo({ alt = '', className }: LogoProps) {
  return <ThemedImage light={logo} dark={logoDark} width={48} height={48} alt={alt} className={className} />;
}
