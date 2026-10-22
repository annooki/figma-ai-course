import { useSyncExternalStore, type ReactNode } from 'react';

export type Breakpoint = 'desktop' | 'tablet' | 'mobile';

const queries = {
  mobile: '(max-width: 799px)',
  tablet: '(max-width: 1279px)',
};

function getBreakpoint(): Breakpoint {
  if (window.matchMedia(queries.mobile).matches) return 'mobile';
  if (window.matchMedia(queries.tablet).matches) return 'tablet';
  return 'desktop';
}

function subscribe(onChange: () => void) {
  const lists = Object.values(queries).map((q) => window.matchMedia(q));
  lists.forEach((l) => l.addEventListener('change', onChange));
  return () => lists.forEach((l) => l.removeEventListener('change', onChange));
}

/** Current breakpoint from the window width: ≥1280 desktop · 800–1279 tablet · <800 mobile */
export function useWindowBreakpoint(): Breakpoint {
  return useSyncExternalStore(subscribe, getBreakpoint, () => 'desktop');
}

export type DsRootProps = {
  /**
   * The Figma breakpoint mode (>1280, >800, <800) for everything inside.
   * Leave empty to follow the window width.
   */
  breakpoint?: Breakpoint;
  children: ReactNode;
};

/** Sets the breakpoint mode for the components inside, like a Figma variable mode on a frame. */
export function DsRoot({ breakpoint, children }: DsRootProps) {
  const fromWindow = useWindowBreakpoint();
  return <div data-breakpoint={breakpoint ?? fromWindow}>{children}</div>;
}
