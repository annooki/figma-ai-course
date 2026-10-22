import './Skill.css';

/* Props and defaults follow the Figma component "Skill" */
export type SkillProps = {
  titleText?: string;
  contentText?: string;
};

/** Figma "Skill" (desktop, tablet, mobile). */
export function Skill({
  titleText = 'UX & Interaction Design',
  contentText = 'I design complex flows that feel simple: bulk actions, edge cases, validation and error states. I think in user journeys, not single screens.',
}: SkillProps) {
  return (
    <div className="skill">
      <h3 className="skill__title">{titleText}</h3>
      <p className="body-text">{contentText}</p>
    </div>
  );
}
