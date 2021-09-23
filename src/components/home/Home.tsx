// components
import Banner from "./Banner";
import Card from "../Card";
import Section from "../Section";
import Projects from "./sections/Projects";
import Articles from "./sections/Articles";

// datas
import Tools from "../data/tools.json";

const Home = () => {
  return (
    <div>
      <Banner />
      <span id="main-content" className="invinsible"></span>
      <Projects />
      <Articles />
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
