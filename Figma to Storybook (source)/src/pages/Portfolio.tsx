import { About, Footer, Hero, Navigation, Picture, ProjectCard, Skills } from '../components';
import { about, LINKEDIN_URL, projects, skills } from './content';

/** The portfolio page: Figma components filled with the real content. */
export function Portfolio() {
  return (
    <>
      <Navigation contactHref={LINKEDIN_URL} />
      <main>
        <Hero />
        <div id="work">
          {projects.map((project) => (
            <ProjectCard key={project.headlineText} {...project} />
          ))}
        </div>
        <About id="about" headlineText={about.headlineText} contentText={about.contentText} contactHref={LINKEDIN_URL}>
          <Picture alt={about.photoAlt} />
        </About>
        <Skills id="skills" headlineText="Skills" skills={skills} />
      </main>
      <Footer linkHref={LINKEDIN_URL} />
    </>
  );
}
