import type { ProjectCardProps, SkillProps } from '../components';

/* Real page content. It lives in the app only, not in the components or Storybook. */

export const LINKEDIN_URL = 'https://www.linkedin.com/in/anna-horodecka-449037192';

export const projects: ProjectCardProps[] = [
  {
    headlineText: 'One-click checkout for Royal Mail senders',
    contentText:
      "Integrating Fastlane by PayPal into Royal Mail's Send an item checkout so returning customers can pay with saved details. I worked through OTP, address and card display decisions with PayPal and the development team.",
    hasBg: false,
  },
  {
    headlineText: 'AI assistant for sending parcels',
    contentText:
      "Designing Postie, an AI chat assistant on Royal Mail's Send an item page. It started by helping people choose the right parcel size and service, then grew to cover the main sending journey, including tracking.",
  },
  {
    headlineText: 'Bulk postage for hundreds of orders at once',
    contentText:
      'Designing the multi-order Apply postage flow in ClickAndDrop for sellers who ship at scale. The focus: smart weight logic, editing package contents, and clear feedback when only part of a batch fails.',
    hasBg: false,
  },
  {
    headlineText: 'From audit to design system',
    contentText:
      "Auditing ClickAndDrop's live components to find where code and design had drifted apart, then turning the findings into a Figma design system with shared tokens, components and rules for designers and developers.",
  },
];

export const about = {
  headlineText: 'About me',
  contentText: `Hi, I'm Anna, a UX/product designer based in Poland. I design tools for shipping and logistics, from AI chat assistants to bulk workflows that people use every day. I like turning messy, complex processes into flows that feel simple. I work closely with developers to make sure the result holds up after handoff.

Outside of work, I'm in love with diving and travelling slowly and far. I recently spent eight months exploring Asia. I'm also learning to sail, which turns out to be a lot like product design: read the conditions, adjust, keep moving.`,
  photoAlt: 'Portrait of Anna Horodecka',
};

const skill: SkillProps = {
  titleText: 'UX & Interaction Design',
  contentText:
    'I design complex flows that feel simple: bulk actions, edge cases, validation and error states. I think in user journeys, not single screens.',
};

/* Figma repeats the same skill three times (see Gaps.md #2) */
export const skills: SkillProps[] = [skill, skill, skill];
