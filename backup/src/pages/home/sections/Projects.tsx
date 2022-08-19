import Card, { CardType } from "../../../components/Card";
import Section from "../../../components/Section";

import projects from "../../../data/projects.json";

const Projects = () => {
  return (
    <Section title="Projects" moreItemsUrl="https://github.com/zerexei/">
      {projects.map((project: CardType) => {
        return (
          <Card
            key={project.id}
            name={project.name}
            description={project.description}
            url={project.url}
            tags={project.tags}
          />
        );
      })}
    </Section>
  );
};

export default Projects;
