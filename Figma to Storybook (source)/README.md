# Portfolio design system (React + Storybook)

React components built from the Figma page **❖ Components** (`My-project`, node `1:57`), with Storybook on top.

From the `03 Week 3` folder (inside `design-system/` the same commands work, with `npm install` instead of `npm run setup`):

```bash
npm run setup       # first time only: installs design-system dependencies
npm run storybook   # http://localhost:6006
npm run dev         # the full portfolio page with real content
```

## Storybook

- **Introduction**: how the system works and how to update it when Figma changes.
- **Foundations**: colours (primitives + light/dark semantics), typography (all Figma text styles), spacing and radius. They're read straight from `src/tokens.css`.
- **Primitives / Layout / Sections**: every Figma component, with a **Docs** page listing its Figma properties (types, defaults, descriptions) and all its stories.

## Components

| Group | Component | Figma node |
|---|---|---|
| Primitives | `Button` (primary / secondary / tertiary × default / hover / active / focus) | `3:553` |
| | `LinkButton` ("find out more →", 4 states) | `16:157` |
| | `Icon` (chevrons-right, arrow-right-long, xmark-large, bars) | `12:254` |
| | `Logo` | `12:346` |
| Layout | `Navigation`, `Footer` | `85:1113`, `85:1169` |
| Sections | `Hero`, `ProjectCard`, `About`, `Picture`, `Skill`, `Skills` | `85:1180`, `20:263`, `85:1229`, `244:1266`, `239:662`, `85:1250` |

- **Components, not content:** each component's props and defaults match the Figma component (`headlineText`, `contentText`, `hasBg`, image slot as `children`…). Storybook shows those defaults ("Headline", placeholder text and images). The real content lives only in the app: [`src/pages/content.ts`](src/pages/content.ts), used by [`src/pages/Portfolio.tsx`](src/pages/Portfolio.tsx).
- **Breakpoints = Figma modes:** `<DsRoot breakpoint="desktop|tablet|mobile">` sets the mode (>1280, >800, <800) for everything inside, like a variable mode on a Figma frame. Leave it empty to follow the window width (Desktop ≥1280, Tablet 800–1279, Mobile <800), which is what the app does.
- **Storybook frames:** each story renders in a frame with the Figma width (1280 / 800 / 375, or the Skill variant widths) and a height that hugs the content, like a Figma frame. Use the **Frame** toolbar to switch.
- **Theme:** use the **Theme** toolbar in Storybook. In the app the theme follows the system, or you can force it with `<html data-theme="light|dark">`.
- **States:** hover, press and focus work for real. The `state` prop only forces a look, for the docs.
- **Tokens:** [`src/tokens.css`](src/tokens.css) is a 1:1 copy of the Figma variable collections. Primitives (colour, space, radius, text) are aliased by semantic tokens, just like in Figma. Modes become CSS: `colour semantics` light/dark switches with `prefers-color-scheme` or `data-theme`, and `text primitives` / `space semantics` (>1280, >800, <800) switch with `data-breakpoint` (set by `DsRoot`). Fixed frame sizes that aren't variables live in `src/index.css`. Text styles are in [`src/typography.css`](src/typography.css) as `.text-…` classes.

## Assumptions to check

1. **Mobile menu:** the button switches between the bars and xmark icons and calls `onMenuToggle`. The open menu panel itself still has no design (Gaps.md #6).
2. **ProjectCard `hasBg`** is applied as given at every breakpoint, so cards alternate on mobile too, like the light Mobile frame in Figma. The dark Mobile frame still shows every card warm (Gaps.md #9).
3. **Skills heading size** now follows `font-size/500` per breakpoint mode (48 / 40 / 32), like the About heading. The Figma frames show 48 everywhere because the Skills component has no breakpoint mode set on it (Gaps.md #8).
