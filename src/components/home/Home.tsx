import Banner from "./Banner";
import Section from "../Section";
import Card from "../Card";
import TopProjects from "./top_project.json";
import Articles from "./articles.json";

const Home = () => {
  return (
    <div>
      <Banner />
      <Section name="Top Projects">
        <span id="TopProjects"></span>
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
    </div>
  );
};

export default Home;
