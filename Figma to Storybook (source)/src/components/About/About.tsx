import type { ReactNode } from 'react';
import placeholder from '../../assets/placeholder.png';
import { Button, externalLink } from '../Button/Button';
import './About.css';

/* Props and defaults follow the Figma component "Section/About" */
export type AboutProps = {
  headlineText?: string;
  /** Body text. A blank line starts a new paragraph. */
  contentText?: string;
  /** Square image slot. Defaults to the Figma placeholder. */
  children?: ReactNode;
  contactHref?: string;
  id?: string;
};

/** Figma "Section/About" (desktop, tablet, mobile). On mobile the image goes on top. */
export function About({
  headlineText = 'Headline',
  contentText = "Welcome to my portfolio! I'm Kim, a passionate graphic UI designer dedicated to crafting visual experiences that resonate with users. My goal is to design interfaces that not only grab attention but also facilitate smooth navigation.  I carefully select colour palettes that evoke the right emotions and typography that enhances clarity. I believe that intuitive design is key to guiding users effortlessly on their journey.",
  children,
  contactHref = '#',
  id,
}: AboutProps) {
  return (
    <section className="about" id={id}>
      <div className="about__container">
        <div className="about__content">
          <div className="about__text">
            <h2 className="about__title headline-lg">{headlineText}</h2>
            {contentText.split(/\n\s*\n/).map((paragraph, i) => (
              <p className="body-text" key={i}>
                {paragraph}
              </p>
            ))}
          </div>
          <Button variant="primary" href={contactHref} {...externalLink(contactHref)} text="contact" showLeftIcon={false} showRightIcon={false} />
        </div>
        <div className="about__image">{children ?? <img src={placeholder} alt="" />}</div>
      </div>
    </section>
  );
}
