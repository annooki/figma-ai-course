import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import { Icon, type IconName } from '../Icon/Icon';
import './Button.css';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary';
export type ButtonState = 'default' | 'hover' | 'active' | 'focus';

/* Props and defaults follow the Figma component "Button" */
type BaseProps = {
  variant?: ButtonVariant;
  /** Forces a visual state (for docs). Real hover/press/focus work without it. */
  state?: ButtonState;
  text?: string;
  showLeftIcon?: boolean;
  showRightIcon?: boolean;
  /** Figma: "Swap icon" */
  swapIcon?: IconName;
  className?: string;
};

type AsLink = BaseProps & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps> & { href: string };
type AsButton = BaseProps & Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & { href?: undefined };

export type ButtonProps = AsLink | AsButton;

/** Figma "Button": primary, secondary and tertiary, with hover, active and focus states. */
export function Button({
  variant = 'primary',
  state,
  text = 'Label',
  showLeftIcon = true,
  showRightIcon = true,
  swapIcon = 'chevrons-right',
  className,
  ...rest
}: ButtonProps) {
  const classes = ['btn', `btn--${variant}`, className].filter(Boolean).join(' ');
  const forced = state && state !== 'default' ? state : undefined;

  const content = (
    <>
      {showLeftIcon && <Icon name={swapIcon} size={20} className="btn__icon" />}
      {variant === 'tertiary' ? <span className="btn__label">{text}</span> : text}
      {showRightIcon && <Icon name={swapIcon} size={20} className="btn__icon" />}
    </>
  );

  if (rest.href !== undefined) {
    return (
      <a className={classes} data-state={forced} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {content}
      </a>
    );
  }

  const { type = 'button', ...buttonRest } = rest as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button className={classes} data-state={forced} type={type} {...buttonRest}>
      {content}
    </button>
  );
}

/** Opens absolute URLs in a new tab */
export const externalLink = (href: string) =>
  /^https?:/.test(href) ? { target: '_blank', rel: 'noopener' } : {};
