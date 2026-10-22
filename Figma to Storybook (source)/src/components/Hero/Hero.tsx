import './Hero.css';

export type HeroProps = {
  /** Display title. Line breaks and spaces are kept. */
  text?: string;
};

/** Figma "Section/Hero" (desktop, tablet, mobile). */
export function Hero({ text = 'UX . AI.\n PRODUCT   DESIGN.' }: HeroProps) {
  return (
    <section className="hero">
      <div className="hero__container">
        <p className="hero__name">Anna Horodecka</p>
        <h1 className="hero__title">{text}</h1>
      </div>
    </section>
  );
}
