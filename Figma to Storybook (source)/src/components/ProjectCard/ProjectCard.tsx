import type { ReactNode } from 'react';
import placeholder from '../../assets/placeholder.png';
import { LinkButton } from '../LinkButton/LinkButton';
import './ProjectCard.css';

/* Props and defaults follow the Figma component "Section/ProjectCard" */
export type ProjectCardProps = {
  headlineText?: string;
  contentText?: string;
  /** Warm background. Figma: "Has bg" */
  hasBg?: boolean;
  /** 16:9 image slot. Defaults to the Figma placeholder. */
  children?: ReactNode;
  linkHref?: string;
};

/** Figma "Section/ProjectCard" (desktop, tablet, mobile). */
export function ProjectCard({
  headlineText = 'Headline',
  contentText = 'I run moonlearning.io, a hands-on learning platform for UI design, Figma, and AI-powered product building. I cut through the noise and help people move from overthinking to designing and building.',
  hasBg = true,
  children,
  linkHref,
}: ProjectCardProps) {
  return (
    <section className={['project', hasBg && 'project--warm'].filter(Boolean).join(' ')}>
      <div className="project__container">
        <div className="project__image">{children ?? <img src={placeholder} alt="" />}</div>
        <div className="project__content">
          <h2 className="project__title">{headlineText}</h2>
          <p className="body-text">{contentText}</p>
          <LinkButton href={linkHref} />
        </div>
      </div>
    </section>
  );
}
