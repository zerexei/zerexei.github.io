import Banner from "./Banner";
import Section from "../Section";
import Card from "../Card";
import TopProjects from "../data/top_project.json";
import Articles from "../data/articles.json";
import Utilities from "../data/utilities.json";

const Home = () => {
  return (
    <div>
      <Banner />
      <span id="main-content" className="w-0"></span>
      <Section name="Top Projects">
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

      <Section name="Articles">
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

      <Section name="Utilities">
        {Utilities.map((utility) => {
          return (
            <Card
              name={utility.name}
              description={utility.description}
              url={utility.url}
              tags={utility.tags}
            />
          );
        })}
      </Section>
    </div>
  );
};

export default Home;
