/*
 * Story globals that render a component in a frame of the Figma width.
 * The frame height hugs the content, like a Figma frame.
 * Widths: Desktop 1280 · Tablet 800 · Mobile 375 (Figma breakpoint variants).
 */
export const desktop = { frame: 'desktop' };
export const tablet = { frame: 'tablet' };
export const mobile = { frame: 'mobile' };

/* Skill variants are narrower than a page: 352 · 218 · 327 */
export const skillDesktop = { frame: 'skill-desktop' };
export const skillTablet = { frame: 'skill-tablet' };
export const skillMobile = { frame: 'skill-mobile' };

export const frames: Record<string, { width: number; breakpoint: 'desktop' | 'tablet' | 'mobile' }> = {
  desktop: { width: 1280, breakpoint: 'desktop' },
  tablet: { width: 800, breakpoint: 'tablet' },
  mobile: { width: 375, breakpoint: 'mobile' },
  'skill-desktop': { width: 352, breakpoint: 'desktop' },
  'skill-tablet': { width: 218, breakpoint: 'tablet' },
  'skill-mobile': { width: 327, breakpoint: 'mobile' },
};
