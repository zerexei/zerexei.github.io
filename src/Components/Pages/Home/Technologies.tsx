import UpIcon from '@/Components/Includes/Icons/UpIcon';

const Technologies = () => {
  const technologies = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Angular',
    'Vue.js',
    'Node.js',
    'Express.js',
    'Next.js',
    'Gatsby',
    'Nuxt.js',
    'jQuery',
    'Bootstrap',
    'Tailwind CSS',
    'Sass',
    'Less',
    'Stylus',
    'Webpack',
    'Babel',
    'TypeScript',
    'GraphQL',
    'REST API',
    'WebSocket',
    'MongoDB',
    'MySQL',
    'PostgreSQL',
    'Firebase',
    'AWS',
    'Heroku',
    'Netlify',
    'Docker',
    'Kubernetes',
    'Jest',
    'Mocha',
    'Chai',
    'Enzyme',
    'Cypress',
    'Puppeteer',
    'ESLint',
    'Prettier',
    'Webpack Dev Server',
    'Storybook',
    'Figma',
    'Sketch',
    'Adobe XD',
    'Git',
    'GitHub',
    'Bitbucket',
    'GitLab',
    'Travis CI',
    'CircleCI',
  ];

  return (
    <section id="technologies" className="pt-6 pb-12">
      <h2 className="mb-12 text-2xl font-bold tracking-tight text-center sm:text-4xl text-primary">
        Technologies
      </h2>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tool: string, index: number) => {
          return (
            <div key={index} className="flex items-center gap-2 px-4 py-1 text-sm border border-transparent rounded-full cursor-pointer hover:text-red-300 hover:border-red-400">
              <div className="rounded-full p-1.5 text-slate-300">
                <UpIcon />
              </div>
              <div className="flex-1 text-sm text-red-500">{tool}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Technologies;
