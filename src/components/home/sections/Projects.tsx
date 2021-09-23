import Card, { TagType } from "../../Card";
import Section from "../../Section";

import projects from "../../data/projects.json";

interface ProjectType {
  id: number;
  name: string;
  description: string;
  url: string;
  tags: TagType[];
}

const Projects = () => {
  return (
    <Section title="Projects" moreItemsUrl="https://github.com/zerexei/">
      {projects.map((project: ProjectType) => {
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
