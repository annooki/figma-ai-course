import type { ImgHTMLAttributes } from 'react';
import './ThemedImage.css';

export type ThemedImageProps = Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'> & {
  /** Image for the light theme */
  light: string;
  /** Image for the dark theme */
  dark: string;
};

/**
 * Renders the light or dark version of a Figma asset.
 * Follows the system theme, or `<html data-theme>` when it is set.
 */
export function ThemedImage({ light, dark, className, alt = '', ...rest }: ThemedImageProps) {
  return (
    <span className={['themed-image', className].filter(Boolean).join(' ')}>
      <img className="themed-image__light" src={light} alt={alt} {...rest} />
      <img className="themed-image__dark" src={dark} alt={alt} {...rest} />
    </span>
  );
}
