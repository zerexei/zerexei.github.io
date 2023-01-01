import AboutMe from '../components/AboutMe';

const technologies = [
  { src: '/src/assets/icons/technology/html.svg', alt: 'html icon' },
  { src: '/src/assets/icons/technology/css.svg', alt: 'css icon' },
  { src: '/src/assets/icons/technology/js.svg', alt: 'js icon' },
  { src: '/src/assets/icons/technology/php.svg', alt: 'php icon' },
  { src: '/src/assets/icons/technology/typescript.svg', alt: 'typescrip icon' },
  { src: '/src/assets/icons/technology/linux.svg', alt: 'linux icon' },
  { src: '/src/assets/icons/technology/git.svg', alt: 'git icon' },
  { src: '/src/assets/icons/technology/reactjs.svg', alt: 'reactjs icon' },
  { src: '/src/assets/icons/technology/vuejs.svg', alt: 'vuejs icon' },
  { src: '/src/assets/icons/technology/laravel.svg', alt: 'laravel icon' },
  {
    src: '/src/assets/icons/technology/tailwindcss.png',
    alt: 'tailwindcss icon',
  },
  { src: '/src/assets/icons/technology/livewire.png', alt: 'livewire icon' },
  { src: '/src/assets/icons/technology/alpinejs.png', alt: 'alpinejs icon' },
  { src: '/src/assets/icons/technology/nodejs.svg', alt: 'nodejs icon' },
  // { src: '/src/assets/icons/technology/expressjs.png', alt: 'expressjs icon' },
  { src: '/src/assets/icons/technology/npm.svg', alt: 'npm icon' },
  { src: '/src/assets/icons/technology/kotlin.svg', alt: 'kotlin icon' },
  { src: '/src/assets/icons/technology/mysql.svg', alt: 'mysql icon' },
  { src: '/src/assets/icons/technology/sqlite.svg', alt: 'sqlite icon' },
  {
    src: '/src/assets/icons/technology/postgresql.png',
    alt: 'postgresql icon',
  },
  { src: '/src/assets/icons/technology/mariadb.png', alt: 'mariadb icon' },
  { src: '/src/assets/icons/technology/mongodb.svg', alt: 'mongodb icon' },
  { src: '/src/assets/icons/technology/prisma.png', alt: 'prisma icon' },
  { src: '/src/assets/icons/technology/stripe.svg', alt: 'stripe icon' },
  { src: '/src/assets/icons/technology/paynamics.jpeg', alt: 'paynamics icon' },
  { src: '/src/assets/icons/technology/vscode.svg', alt: 'vscode icon' },
  {
    src: '/src/assets/icons/technology/android_studio.png',
    alt: 'android studio icon',
  },
  { src: '/src/assets/icons/technology/laragon.png', alt: 'laragon icon' },
  { src: '/src/assets/icons/technology/notion.svg', alt: 'notion icon' },
];

export default () => {
  return (
    <>
      {/* ABOUT ME */}
      <AboutMe />

      {/* TECHNOLOGY USED */}
      <section>
        <h2>Technology Used</h2>
        <div className="flex flex-wrap gap-4 px-4 py-6 rounded-md shadow-2xl shadow-gray-400 bg-gray-50 dark:shadow-none">
          {/* TODO: Add condition for width/height */}
          {technologies.map((tech, index) => {
            return (
              <img
                key={index}
                src={`https://raw.githubusercontent.com/zerexei/zerexei.github.io/main${tech.src}`}
                alt={tech.alt}
                className="h-12 w-12"
              ></img>
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
