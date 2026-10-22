import { useState } from 'react';
import { Button, externalLink } from '../Button/Button';
import { Icon } from '../Icon/Icon';
import { Logo } from '../Logo/Logo';
import './Navigation.css';

export type NavLink = { label: string; href: string };

export type NavigationProps = {
  links?: NavLink[];
  contactLabel?: string;
  contactHref?: string;
  /** Called when the mobile menu button is toggled */
  onMenuToggle?: (open: boolean) => void;
};

/* Labels as in the Figma component; link targets are not in Figma */
const defaultLinks: NavLink[] = [
  { label: 'work.', href: '#work' },
  { label: 'about.', href: '#about' },
  { label: 'skills.', href: '#skills' },
];

/**
 * Figma "Navigation" (desktop, tablet, mobile). Below 800px the links are
 * replaced by a menu button. The open menu has no design yet: the button
 * only swaps to the close icon and reports its state.
 */
export function Navigation({ links = defaultLinks, contactLabel = 'contact', contactHref = '#', onMenuToggle }: NavigationProps) {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
    onMenuToggle?.(!open);
  };

  return (
    <header className="nav">
      <Logo className="nav__logo" />

      <nav className="nav__links" aria-label="Main">
        {links.map((link) => (
          <Button key={link.href} variant="tertiary" href={link.href} text={link.label} showLeftIcon={false} showRightIcon={false} />
        ))}
        <Button variant="primary" href={contactHref} {...externalLink(contactHref)} text={contactLabel} showLeftIcon={false} showRightIcon={false} />
      </nav>

      <button className="nav__menu" type="button" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={toggle}>
        <Icon name={open ? 'xmark-large' : 'bars'} size={32} />
      </button>
    </header>
  );
}
