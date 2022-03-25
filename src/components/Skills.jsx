import html_url from "./../assets/skills/html.jpeg";
import css_url from "./../assets/skills/css.jpeg";
import js_url from "./../assets/skills/js.jpeg";
import ts_url from "./../assets/skills/ts.jpeg";
import php_url from "./../assets/skills/php.jpeg";
import sql_url from "./../assets/skills/sql.jpeg";
import tailwindcss_url from "./../assets/skills/tailwindcss.jpeg";
import react_url from "./../assets/skills/react.jpeg";
import laravel_url from "./../assets/skills/laravel.jpeg";
import postgres_url from "./../assets/skills/postgres.jpeg";
import express_url from "./../assets/skills/express.jpeg";
import git_url from "./../assets/skills/git.jpeg";
import linux_url from "./../assets/skills/linux.jpeg";
import livewire_url from "./../assets/skills/livewire.jpeg";
import node_url from "./../assets/skills/node.jpeg";
import docker_url from "./../assets/skills/docker.jpeg";
import responsive_design_url from "./../assets/skills/responsive-design.jpeg";

/**
 * TODO: Import using a json file
 */
const Skills = () => {
  const language_icons = [
    { id: 1, name: "HTML", url: html_url },
    { id: 2, name: "CSS", url: css_url },
    { id: 3, name: "Javascript", url: js_url },
    { id: 4, name: "PHP", url: php_url },
    { id: 5, name: "SQL", url: sql_url },
    { id: 6, name: "Typescript", url: ts_url },
    { id: 7, name: "Tailwindcss", url: tailwindcss_url },
    { id: 8, name: "React.js", url: react_url },
    { id: 9, name: "Laravel", url: laravel_url },
    { id: 10, name: "Node.js", url: node_url },
    { id: 11, name: "Express.js", url: express_url },
    { id: 12, name: "Postgresql", url: postgres_url },
    { id: 13, name: "Livewire", url: livewire_url },
    { id: 14, name: "Git", url: git_url },
    { id: 15, name: "Linux", url: linux_url },
    { id: 16, name: "Docker", url: docker_url },
    { id: 17, name: "responsive design", url: responsive_design_url },
  ];

  return (
    <div className="mb-12">
      <h2 className="mb-6 text-2xl font-bold">Skills</h2>
      <div className="flex flex-wrap gap-4 items-center">
        {language_icons.map((icon) => {
          return (
            <p key={icon.id}>
              <img
                src={icon.url}
                alt={icon.name + " icon"}
                title={icon.name}
                className="object-contain object-center w-12 h-12"
              />
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
