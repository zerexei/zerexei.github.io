import AboutMe from '../components/AboutMe';

// https://docs.github.com/en/rest/repos?apiVersion=2022-11-28
// fetch('https://api.github.com/repos/zerexei/dotfiles/contents/linux')
// fetch(
//   'https://api.github.com/repos/zerexei/dotfiles/contents/windows/.bashrc?ref=main'
// )
//   .then((response) => response.json())
//   .then((json) => console.log(json));

export default () => {
  return (
    <>
      {/* ABOUT ME */}
      <AboutMe />

      {/* PROJECTS */}
      <section>
        <h2>Projects</h2>
        <p>Currently Not Yet Available</p>
      </section>
    </>
  );
};
