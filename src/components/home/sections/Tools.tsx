import Card, { CardType } from "../../Card";
import Section from "../../Section";

import tools from "../../data/tools.json";

const Tools = () => {
  return (
    <Section title="tools" moreItemsUrl="/tools">
      {tools.map((tool: CardType) => {
        return (
          <Card
            key={tool.id}
            name={tool.name}
            description={tool.description}
            url={tool.url}
            tags={tool.tags}
          />
        );
      })}
    </Section>
  );
};

export default Tools;
