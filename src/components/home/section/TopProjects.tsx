import Card, { TagType } from "../../Card";
import Section from "../../Section";

import projects from "../../data/top_project.json";

interface ProjectType {
  id: number;
  name: string;
  description: string;
  url: string;
  tags: TagType[];
}

const TopProjects = () => {
  return (
    <Section title="Top Projects" moreItemsUrl="https://github.com/zerexei/">
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

export default TopProjects;
