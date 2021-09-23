// components
import Banner from "./Banner";
import Card from "../Card";
import Section from "../Section";

// datas
import Articles from "../data/articles.json";
import Tools from "../data/tools.json";
import TopProjects from "../data/top_project.json";

const Home = () => {
  return (
    <div>
      <Banner />
      <span id="main-content" className="invinsible"></span>
      <Section title="Top Projects" moreItemsUrl="https://github.com/zerexei/">
        {TopProjects.map((project) => {
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

      <Section
        title="Articles"
        moreItemsUrl="https://medium.com/@angeloarcillas64"
      >
        {Articles.map((article) => {
          return (
            <Card
              key={article.id}
              name={article.name}
              description={article.description}
              url={article.url}
              tags={article.tags}
            />
          );
        })}
      </Section>

      <Section title="tools" moreItemsUrl="/tools">
        {Tools.map((tool) => {
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
    </div>
  );
};

export default Home;
