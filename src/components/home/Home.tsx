import Banner from "./Banner";
import Section from "../Section";
import Card from "../Card";
import TopProjects from "./top_project.json";

const Home = () => {
  // const php_core_tags = [
  //   { id: 1, name: "HTML" },
  //   { id: 2, name: "Tailwindcss" },
  //   { id: 3, name: "Laravel" },
  //   { id: 4, name: "Livewire" },
  // ];

  return (
    <div>
      <Banner />
      <Section name="My Top Projects">
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
