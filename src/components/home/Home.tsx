import Banner from "./Banner";
import Section from "../Section";
import Card from "../Card";
import TopProjects from "../data/top_project.json";
import Articles from "../data/articles.json";
import Tools from "../data/tools.json";

const Home = () => {
  return (
    <div>
      <Banner />
      <span id="main-content" className="w-0"></span>
      <Section name="Top Projects" moreItemsUrl="https://github.com/zerexei/">
        {TopProjects.map((project) => {
          return (
            <Card
              name={project.name}
              description={project.description}
              url={project.url}
              tags={project.tags}
            />
          );
        })}
      </Section>

      <Section
        name="Articles"
        moreItemsUrl="https://medium.com/@angeloarcillas64"
      >
        {Articles.map((article) => {
          return (
            <Card
              name={article.name}
              description={article.description}
              url={article.url}
              tags={article.tags}
            />
          );
        })}
      </Section>

      <Section name="tools" moreItemsUrl="/tools">
        {Tools.map((tool) => {
          return (
            <Card
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
