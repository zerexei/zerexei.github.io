import UpIcon from '@/Components/Includes/Icons/UpIcon';
import { useEffect } from 'react';
import { register } from 'swiper/element/bundle';

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

  // ++> swiper

  register();

  useEffect(() => {
    // swiper element
    const swiperEl = document.querySelector('swiper-container');
    if (!swiperEl) return;

    // swiper parameters
    const swiperParams = {
      slidesPerView: 9, // 3
      loop: true,
      autoplay: {
        delay: 1000,
      },
      breakpoints: {
        768: {
          slidesPerView: 6,
        },
        1024: {
          slidesPerView: 9,
        },
      },
    };

    // now we need to assign all parameters to Swiper element
    Object.assign(swiperEl, swiperParams);

    // and now initialize it
    swiperEl.initialize();
  });

  return (
    <section id="technologies" className="pt-6 pb-12">
      <h2 className="mb-12 text-2xl font-bold tracking-tight text-center sm:text-4xl text-primary">
        Technologies
      </h2>
      <div className="">
        <swiper-container init="false">
          {technologies.map((tool: string, index: number) => {
            return (
              <swiper-slide key={index}>
                <div className="flex items-center gap-2 px-4 py-1 text-sm border border-transparent rounded-full cursor-pointer hover:text-red-300 hover:border-red-400">
                  <div className="rounded-full text-slate-300">
                    <UpIcon />
                  </div>
                  <div className="flex-1 text-sm text-red-500 truncate">
                    {tool}
                  </div>
                </div>
              </swiper-slide>
            );
          })}
        </swiper-container>
      </div>
    </section>
  );
};

export default Technologies;
