# Gaps & open questions: Figma → HTML/CSS

Source: `My-project` → page **✏️ Design** (node `1:56`). It has 6 frames: Desktop (1280), Tablet (800) and Mobile (375), each in a light and a dark version.

Each item says what I found, **what I did for now** (so the page still works) and **the question for you**. Nothing below is final until you answer.

## Synced with Figma on 2026-10-22

What changed in the code to match Figma:
- **Primary button (light theme):** lighter coral background (`#ef9993`), dark text (`#161616`). Pressed is now `#e56a64`.
- **Hover colour for tertiary buttons and "find out more" links (light theme):** darker coral `#9c3d38`.
- **Project cards on mobile:** they now alternate backgrounds like on desktop and tablet (light Mobile frame).
- Both `styles.css` and `design-system/src/tokens.css` are updated. Spacing tokens didn't change.

## Status (updated 2026-10-22)

| # | Topic | Status |
|---|---|---|
| 1 | Project images | ⏳ Waiting for you: placeholders in use |
| 2 | Skills content | ⏳ Waiting for you |
| 3 | "find out more" links | ⏳ Waiting for you: `href="#"` |
| 4 | About "contact" button | ⏳ Waiting for you: LinkedIn for now |
| 5 | Nav link targets | ⏳ Waiting for you: in-page scroll for now |
| 6 | Mobile menu open state | ⏳ Waiting for design: icon does nothing yet |
| 7 | Tablet About heading | ⏳ Fix in Figma: now says "Abot me" (typo). Code uses "About me" |
| 8 | About vs Skills heading size | ⏳ Waiting for you: copied as in Figma |
| 9 | Card backgrounds on mobile | ✅ Alternating now. ⏳ Dark Mobile frame still has all 4 warm |
| 10 | About paragraph spacing | ⏳ Waiting for you: 12px everywhere |
| 11 | Decoration overlap | ⏳ Waiting for you: kept as in Figma |
| 12 | Breakpoint ranges | ⏳ Waiting for you: ≥1280 / 800–1279 / <800 |
| 13 | Light/dark toggle | ⏳ Waiting for you: follows system setting |
| 14 | Hover/focus states | ✅ **Done** for buttons and links: see below |
| 15 | Heading levels | ⏳ Confirm: h1 hero, h2 sections, h3 skills |
| 16 | Heavy About photo | ✅ **Done**: see below |
| 17 | Photo alt text | ⏳ Confirm wording |
| 18 | Page title / meta | ⏳ Waiting for you |
| 19 | Google Fonts vs self-hosted | ⏳ Waiting for you |
| 20 | Tertiary button label clipped | ⏳ Fix in Figma: label-wrapper is fixed at 43px |
| 21 | Dark theme hover/pressed colours | ✅ **Checked 2026-10-22**: all 32 colour semantics match Figma in light and dark |

---

## 🔴 Missing content

### 1. Project images are placeholders
All 4 project cards use a grey checkerboard (transparency pattern) image in every frame.
- **For now:** I used that placeholder (`assets/project-placeholder.png`).
- **❓ Question:** Can you add the real project images (16:9) in Figma or send me the files?

### 2. Skills section has the same text three times
All 3 skills say "UX & Interaction Design" with the same description.
- **For now:** I copied them exactly as they are.
- **❓ Question:** What are the real skill 2 and skill 3 (title and text)? The Figma grid also has room for a second row. Are more skills coming?

### 3. "find out more →" links go nowhere
None of the 4 links has a destination.
- **For now:** `href="#"`.
- **❓ Question:** Where should each link go: a case-study page, an external page, or a PDF? Do case-study pages exist yet?

### 4. "contact" button in the About section has no link
The **nav** "contact" button and the **footer** "Contact" link both go to LinkedIn, but the About section button has no link.
- **For now:** I pointed it to the same LinkedIn URL.
- **❓ Question:** Is LinkedIn right here, or should it be email (`mailto:`) or a contact form?

### 5. The nav links (work. / about. / skills.) have no targets
- **For now:** They scroll to the matching sections (`#work`, `#about`, `#skills`).
- **❓ Question:** Is scrolling within the page what you want, or should they go to separate pages?

### 6. Mobile menu (hamburger) has no design for the open state
The mobile nav only shows the ☰ icon. There's no open menu, close icon or animation.
- **For now:** The icon is there as a button but does nothing when tapped.
- **❓ Question:** How should the open menu look: full screen, a dropdown, or a side drawer? Which items go in it (work, about, skills, contact)?

---

## 🟠 Inconsistencies between frames

### 7. Tablet About heading has a typo
The **light tablet** frame now says "Abot me" (before it was the placeholder "Headline"). The dark tablet and all other frames say "About me".
- **For now:** I used "About me".
- **❓ Question:** Can you confirm and fix it in Figma?

### 8. About heading size doesn't match the Skills heading size
Both headings use the same token (`font-size/500`, style `headline/lg`), but they come out at different sizes:

| | Desktop | Tablet | Mobile |
|---|---|---|---|
| "About me" | 48px | **40px** | **32px** |
| "Skills" | 48px | 48px | 48px |

- **For now:** I copied each size exactly as in Figma.
- **❓ Question:** Should both headings be the same size? If so, which values? This looks like a token or override slip on the Skills heading.

### 9. Project card backgrounds on mobile
The **light** Mobile frame now alternates like Desktop and Tablet (cards 2 and 4 warm). The **dark** Mobile frame still has all 4 cards warm.
- **Done:** The code alternates on every screen size.
- **❓ Question:** Can you turn off "Has bg" on cards 1 and 3 in the dark Mobile frame too?

### 10. Paragraph spacing in the About text differs on mobile
The light Mobile frame has an extra empty paragraph between the two paragraphs, so the gap is bigger there. Dark Mobile and the other frames don't have it.
- **For now:** The same 12px gap on all screen sizes.
- **❓ Question:** Is the bigger gap on mobile wanted?

### 11. The Skills decoration circle overlaps the third skill title
On all breakpoints, the semi-transparent pink circle sits on top of the 3rd "UX & Interaction Design" heading.
- **For now:** I kept it as in Figma (the text stays above the circle).
- **❓ Question:** Is the overlap intentional, or should the circle move or sit behind the content?

---

## 🟡 Behaviour not defined in the design

### 12. Breakpoint ranges
The frames are named "Desktop >1280", "Tablet >800" and "Mobile <800".
- **For now:** Desktop **≥ 1280px**, Tablet **800–1279px**, Mobile **< 800px**. Between breakpoints the layout stretches fluidly, and content is capped at 1200px wide on desktop.
- **❓ Question:** Are those ranges right? On very wide screens (1440, 1920), should the coloured backgrounds stretch full width while content stays at 1200px? That's what I did.

### 13. Light/dark mode switching
The design has light and dark versions but no toggle.
- **For now:** The page follows the visitor's system setting (`prefers-color-scheme`). Logo, menu icon, decoration and separator switch to their dark versions automatically.
- **❓ Question:** Do you want a visible light/dark toggle? If yes, where should it go, and what should it look like?

### 14. ✅ Hover, focus and pressed states
- **Done:** I added the states from the ❖ Components page (Button primary/tertiary, Link button), with light and dark token values:
  - **Primary (contact):** hover = lighter coral, pressed = darker coral, focus = 2px border.
  - **Tertiary (work./about./skills.):** hover = coral text, pressed/focus = coral underline.
  - **Link (find out more):** hover = coral text, pressed/focus = coral underline.
- "Focus" shows only when moving through the page with the keyboard (Tab), not on mouse click. That's the standard web behaviour.
- **Remember:** the code doesn't update when you change Figma. If you edit these states later, tell me and I'll pull them in again.
- **❓ Still open:**
  - The footer "Contact" link and the mobile ☰ menu button have no states in Figma. Should they reuse the Link/tertiary states?
  - Should the state changes animate (e.g. a 150ms fade), or switch instantly as now?
  - The **secondary** button variant exists in Figma but isn't used on the page, so I didn't add it.

---

## 🔵 Technical / accessibility notes

### 15. Heading levels (HTML semantics)
In Figma every project title is marked as `<h1>`, and the hero has two `<h1>`s.
- **For now:** One `<h1>` (hero). Project titles, About and Skills are `<h2>`. Skill titles are `<h3>`. This only affects structure for screen readers and SEO, not the look.
- **❓ Question:** OK with this?

### 16. ✅ The About photo was very heavy (11.5 MB, 2560×3840)
It's shown at most 440×440px but was cropped from a large PNG, so mobile users had to download 11.5 MB.
- **Done:** I cropped it to the same framing as in Figma and exported `assets/about-photo.jpg` (880×880 for sharp retina screens, **175 KB**). The page now uses that file, and it loads lazily.
- The original `assets/about-photo.png` is still in the folder but the page no longer uses it. You can delete it, or keep it as the source file.
- If you change the crop in Figma later, the JPG needs re-exporting.

### 17. Alt text for the photo
The design doesn't say what screen readers should announce.
- **For now:** `alt="Portrait of Anna Horodecka"`. Project placeholders and decorative shapes have empty alt.
- **❓ Question:** Is that wording fine? Once the real project images are in, what alt text should each one have?

### 18. Page title / meta description
Not in the design.
- **For now:** `<title>Anna Horodecka · UX, AI, Product Design</title>`. No meta description.
- **❓ Question:** What title and description do you want for search results and link previews (and a favicon)?

### 19. Fonts are loaded from Google Fonts
Syne (400/500/700), Poppins (400) and Monoton.
- **❓ Question:** OK to use Google Fonts, or should the fonts be self-hosted (e.g. for GDPR)?

---

### 20. Tertiary button label can be clipped in Figma
In the Button component, the `label-wrapper` in the default and hover states has a fixed width of 43px with clipping. Longer labels get cut off: on the Tablet frame "about." shows as "about".
- **For now:** The code sizes the label to its text, so nothing is cut off.
- **❓ Fix in Figma:** Set the label-wrapper width to Hug in all tertiary states.

### 21. Dark theme hover and pressed colours
The light theme states changed in Figma (see the sync notes at the top). The Components page only shows the light theme, so I couldn't check whether the dark hover/pressed values changed too.
- **For now:** Dark theme states keep their previous values.
- **❓ Question:** Did you change any dark colours for hover/pressed? If so, tell me and I'll update them.

## Files

- `index.html`: the page
- `styles.css`: all styles. The Figma variables are CSS custom properties at the top, light and dark, overridden per breakpoint.
- `assets/`: logo, menu icon, decoration, separator (light + `-dark` versions), project placeholder, about photo
