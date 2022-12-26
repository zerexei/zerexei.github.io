import AboutMe from '../components/AboutMe';

export default () => {
  return (
    <>
      {/* ABOUT ME */}
      <AboutMe />

      {/* TECHNOLOGY USED */}
      <section>
        <h2>Technology Used</h2>
        <div className="flex flex-wrap gap-4">
          {[...Array(22).keys()].map((v, index) => {
            return (
              <span key={index} className="bg-gray-400 p-8 rounded-full"></span>
            );
          })}
        </div>
      </section>

      {/* PROJECTS */}
      <section>
        <h2>Projects</h2>
        <p>Currently Not Yet Available</p>
      </section>
    </>
  );
};
