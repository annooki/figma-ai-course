import separator from '../../assets/separator.svg';
import separatorDark from '../../assets/separator-dark.svg';
import { ThemedImage } from '../ThemedImage/ThemedImage';
import './Footer.css';

export type FooterProps = {
  copyright?: string;
  linkLabel?: string;
  linkHref?: string;
};

/** Figma "Footer" (desktop, tablet, mobile). Defaults are the Figma component's text and link. */
export function Footer({
  copyright = '© 2026 Anna Horodecka',
  linkLabel = 'Contact',
  linkHref = 'https://www.linkedin.com/in/anna-horodecka-449037192',
}: FooterProps) {
  return (
    <footer className="footer">
      <span>{copyright}</span>
      <ThemedImage light={separator} dark={separatorDark} width={8} height={8} />
      <a href={linkHref} target="_blank" rel="noopener">
        {linkLabel}
      </a>
    </footer>
  );
}
