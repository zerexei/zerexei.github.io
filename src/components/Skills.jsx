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
    { name: "HTML", url: html_url },
    { name: "CSS", url: css_url },
    { name: "Javascript", url: js_url },
    { name: "PHP", url: php_url },
    { name: "SQL", url: sql_url },
    { name: "Typescript", url: ts_url },
    { name: "Tailwindcss", url: tailwindcss_url },
    { name: "React.js", url: react_url },
    { name: "Laravel", url: laravel_url },
    { name: "Node.js", url: node_url },
    { name: "Express.js", url: express_url },
    { name: "Postgresql", url: postgres_url },
    { name: "Livewire", url: livewire_url },
    { name: "Git", url: git_url },
    { name: "Linux", url: linux_url },
    { name: "Docker", url: docker_url },
    { name: "responsive design", url: responsive_design_url },
  ];

  return (
    <div>
      <h2 className="mb-6 text-2xl font-bold">Skills</h2>
      <div className="flex flex-wrap gap-4 items-center">
        {language_icons.map((icon) => {
          return (
            <p>
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
