import { Skill, type SkillProps } from '../Skill/Skill';
import './Skills.css';

export type SkillsProps = {
  headlineText?: string;
  /** Skill items. Defaults to three default Skill instances, as in Figma. */
  skills?: SkillProps[];
  id?: string;
};

/** Figma "Section/Skills": 3-column grid on desktop/tablet, a single column on mobile. */
export function Skills({ headlineText = 'Headline', skills = [{}, {}, {}], id }: SkillsProps) {
  return (
    <section className="skills" id={id}>
      <div className="skills__container">
        <span className="skills__decoration" aria-hidden="true" />
        <h2 className="skills__title headline-lg">{headlineText}</h2>
        {skills.map((skill, i) => (
          <Skill key={i} {...skill} />
        ))}
      </div>
    </section>
  );
}
