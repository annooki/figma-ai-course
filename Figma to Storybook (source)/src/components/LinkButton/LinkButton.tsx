import type { AnchorHTMLAttributes } from 'react';
import './LinkButton.css';

export type LinkButtonState = 'default' | 'hover' | 'active' | 'focus';

export type LinkButtonProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'children'> & {
  /** Forces a visual state (for docs). Real hover/press/focus work without it. */
  state?: LinkButtonState;
  text?: string;
};

/** Figma "Link button" */
export function LinkButton({ state, className, text = 'find out more  →', href = '#', ...rest }: LinkButtonProps) {
  return (
    <a
      className={['link-button', className].filter(Boolean).join(' ')}
      data-state={state && state !== 'default' ? state : undefined}
      href={href}
      {...rest}
    >
      {text}
    </a>
  );
}
