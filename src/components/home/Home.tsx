import Banner from "./Banner";
import Section from "../Section";
import Card from "../Card";
import TopProjects from "./top_project.json";

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
    </div>
  );
};

export default Home;
