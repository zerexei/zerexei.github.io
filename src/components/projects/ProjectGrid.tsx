import React from 'react';
import { Project } from '../../data/projects';
import { Tag } from '../common/Tag';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="card p-6 flex flex-col group h-full hover:border-accent/20">
      <div className="space-y-4 flex-1">
        <div className="flex items-start justify-between">
          <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-accent transition-colors">
            {project.title}
          </h3>
          <div className="flex items-center gap-3">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-accent transition-colors">
                <Github size={18} />
              </a>
            )}
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-accent transition-colors">
                <ExternalLink size={18} />
              </a>
            )}
          </div>
        </div>
        
        <p className="text-zinc-400 text-sm leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 pt-2">
          {project.tech.map((t) => (
            <span key={t} className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export const ProjectGrid: React.FC<{ projects: Project[] }> = ({ projects }) => {
  return (
    <div className="py-20 space-y-12">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight text-white">Other Noteworthy Projects</h2>
        <p className="text-zinc-500">
          A collection of backend services, tools, and experiments.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};
