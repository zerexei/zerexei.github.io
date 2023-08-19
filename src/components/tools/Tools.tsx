import { useMemo, useState } from 'react';
import InputSearchTool from './InputSearchTool';

type Tool = {
  id: number;
  title: string;
  description: string;
  url: string;
};

const Tools = () => {
  const [search, setSearch] = useState<string>('');

  const handleSearch = (value: string) => {
    setSearch(value);
  };

  const tools: Tool[] = useMemo(() => {
    return [
      {
        id: 1,
        title: 'React',
        description: 'A JavaScript library for building user interfaces',
        url: 'https://reactjs.org/',
      },
      {
        id: 2,
        title: 'Vue.js',
        description: 'The Progressive JavaScript Framework',
        url: 'https://vuejs.org/',
      },
      {
        id: 3,
        title: 'Angular',
        description:
          'A platform for building mobile and desktop web applications',
        url: 'https://angular.io/',
      },
      {
        id: 4,
        title: 'Node.js',
        description:
          "A JavaScript runtime built on Chrome's V8 JavaScript engine",
        url: 'https://nodejs.org/',
      },
      {
        id: 5,
        title: 'Express.js',
        description:
          'A fast, unopinionated, minimalist web framework for Node.js',
        url: 'https://expressjs.com/',
      },
      {
        id: 6,
        title: 'Next.js',
        description: 'The React Framework for Production',
        url: 'https://nextjs.org/',
      },
      {
        id: 7,
        title: 'Gatsby',
        description: 'A modern web framework for building websites and apps',
        url: 'https://www.gatsbyjs.com/',
      },
      {
        id: 8,
        title: 'Webpack',
        description: 'A module bundler for modern JavaScript applications',
        url: 'https://webpack.js.org/',
      },
      {
        id: 9,
        title: 'Babel',
        description:
          'A toolchain for converting ECMAScript 2015+ code into a backwards compatible version of JavaScript',
        url: 'https://babeljs.io/',
      },
      {
        id: 10,
        title: 'TypeScript',
        description:
          'A typed superset of JavaScript that compiles to plain JavaScript',
        url: 'https://www.typescriptlang.org/',
      },
      {
        id: 11,
        title: 'GraphQL',
        description:
          'A query language for APIs and a runtime for executing those queries',
        url: 'https://graphql.org/',
      },
      {
        id: 12,
        title: 'REST API',
        description:
          'A set of architectural principles for building web services',
        url: 'https://restfulapi.net/',
      },
      {
        id: 13,
        title: 'MongoDB',
        description: 'A document-oriented NoSQL database',
        url: 'https://www.mongodb.com/',
      },
      {
        id: 14,
        title: 'MySQL',
        description: 'An open-source relational database management system',
        url: 'https://www.mysql.com/',
      },
      {
        id: 15,
        title: 'PostgreSQL',
        description:
          'A powerful, open source object-relational database system',
        url: 'https://www.postgresql.org/',
      },
      {
        id: 16,
        title: 'Firebase',
        description: 'A mobile and web application development platform',
        url: 'https://firebase.google.com/',
      },
      {
        id: 17,
        title: 'AWS',
        description: 'A cloud computing platform by Amazon',
        url: 'https://aws.amazon.com/',
      },
      {
        id: 18,
        title: 'Docker',
        description:
          'A platform for building, shipping, and running distributed applications',
        url: 'https://www.docker.com/',
      },
      {
        id: 19,
        title: 'Jest',
        description: 'A JavaScript testing framework',
        url: 'https://jestjs.io/',
      },
      {
        id: 20,
        title: 'ESLint',
        description:
          'A pluggable and configurable linter tool for identifying and reporting on patterns in JavaScript',
        url: 'https://eslint.org/',
      },
    ];
  }, []);

  const filteredTools = useMemo(() => {
    return tools.filter((item) => {
      const haystack = item.title.toLowerCase();
      const needle = search.toLowerCase();
      return haystack.indexOf(needle) > -1;
    });
  }, [search, tools]);

  return (
    <section id="tools" className="py-12 min-h-[85vh]">
      <div className="flex items-end mb-12 md:mx-12">
        <h2 className="flex-1 text-2xl font-bold tracking-tight sm:text-4xl text-primary">
          Tools
        </h2>

        <div>
          <InputSearchTool search={search} handleSearch={handleSearch} />
        </div>
      </div>

      {filteredTools.length > 0 && (
        <div className="flex flex-wrap justify-center gap-4">
          {filteredTools.map((tool) => (
            <div
              key={tool.id}
              className="group/tool h-[15rem] w-[15rem] flex flex-col p-4 rounded-md border border-gray-500 group-hover/project:bg-gray-800 shadow-md shadow-gray-800 cursor-pointer"
            >
              <h3 className="mb-2 text-2xl font-semibold group-hover/tool:underline">
                {tool.title}
              </h3>
              <p className="text-sm text-gray-500">{tool.description}</p>
            </div>
          ))}
        </div>
      )}

      {filteredTools.length === 0 && (
        <div className="flex items-center justify-center">
          <p className="mt-12 text-4xl font-bold">Nothing found...</p>
        </div>
      )}
    </section>
  );
};

export default Tools;
