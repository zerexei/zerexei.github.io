const Projects = () => {
  return (
    <section id="projects" className="pt-6 pb-12">
      <h2 className="text-center mb-12 text-2xl font-bold tracking-tight sm:text-4xl text-primary">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {[1, 1, 1, 1, 1, 1, 1].map(() => {
          return (
            <div className="group/project p-2 min-h-[15rem] cursor-pointer">
              <div className="flex flex-col h-full w-full p-4 rounded-md border border-gray-500 group-hover/project:bg-gray-800 shadow-md shadow-gray-800">
                <div className="flex-1 mb-6">
                  <h5 className="text-2xl font-semibold mb-2">Lorem Ipsum</h5>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Est id culpa tenetur atque dolorum fugit ab
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {['html', 'css', 'js', 'php', 'sql'].map((x) => {
                    return (
                      <span className="py-px px-4 text-xs border border-red-400 font-bold text-red-400 rounded-full">
                        {x}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
