import Project from "./Project";

const Projects = () => {
  /**
   * TODO: Create a json file
   *
   */
  const project_list = [
    {
      title: "Project Ttile 1",
      url: "#",
      role: "Web Developer",
      year: 2022,
      img_url: "https://picsum.photos/200",
      description: "lorem ipsum",
    },
    {
      title: "Project Ttile 2",
      url: "#",
      role: "Web Developer",
      year: 2022,
      img_url: "https://picsum.photos/200",
      description: "lorem ipsum",
    },
    {
      title: "Project Ttile 3",
      url: "#",
      role: "Web Developer",
      year: 2022,
      img_url: "https://picsum.photos/200",
      description: "lorem ipsum",
    },
    {
      title: "Project Ttile 4",
      url: "#",
      role: "Web Developer",
      year: 2022,
      img_url: "https://picsum.photos/200",
      description: "lorem ipsum",
    },
    {
      title: "Project Ttile 5",
      url: "#",
      role: "Web Developer",
      year: 2022,
      img_url: "https://picsum.photos/200",
      description: "lorem ipsum",
    },
  ];
  return (
    <div className="mb-12">
      <h2 className="mb-6 text-2xl font-bold">Projects</h2>
      <div>
        {project_list.map((project) => (
          <Project
            title={project.title}
            url={project.url}
            role={project.role}
            year={project.year}
            img_url={project.img_url}
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
};
export default Projects;
