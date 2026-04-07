import React from 'react';
import { resumeData } from '../../data/resume';
import { Tag } from '../common/Tag';
import { Briefcase } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="space-y-16 py-20 animate-slide-up">
      <div className="space-y-4 max-w-2xl">
        <h2 className="text-3xl font-bold tracking-tight text-white flex items-center gap-2">
          <Briefcase className="text-accent" size={24} /> Experience
        </h2>
        <p className="text-zinc-400 text-lg">
          I've worked on complex backend systems, focusing on architecture design, asynchronous processing, and performance optimization in production environments.
        </p>
      </div>

      <div className="space-y-0">
        {resumeData.experience.map((exp, index) => (
          <div key={index} className="grid grid-cols-1 md:grid-cols-[160px_auto_1fr] gap-x-8 group">
            {/* Date Column */}
            <div className="hidden md:block text-right pt-1">
              <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest group-hover:text-accent transition-colors">
                {exp.period}
              </span>
            </div>

            {/* Timeline Line & Dot Column */}
            <div className="relative flex flex-col items-center">
              {/* Dot */}
              <div className="w-3 h-3 rounded-full border-2 border-zinc-800 bg-zinc-900 z-10 mt-1.5 group-hover:border-accent group-hover:bg-accent transition-all duration-300 shadow-[0_0_0_4px_rgba(10,10,10,1)]" />
              {/* Vertical Line */}
              {index !== resumeData.experience.length - 1 && (
                <div className="w-px flex-1 bg-zinc-800 group-hover:bg-accent/20 transition-colors" />
              )}
            </div>

            {/* Content Column */}
            <div className="pb-16 pt-0.5 space-y-6">
              <div className="space-y-2">
                <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2">
                  <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-accent transition-colors">
                    {exp.role}
                  </h3>
                  <span className="md:hidden text-xs font-mono text-zinc-500 uppercase tracking-widest">
                    {exp.period}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-zinc-400 text-sm">
                  <span className="font-semibold text-zinc-300">{exp.company}</span>
                  <span>•</span>
                  <span>{exp.location}</span>
                </div>
              </div>

              <div className="space-y-4 text-zinc-400 leading-relaxed max-w-2xl">
                {exp.description.map((desc, i) => (
                  <p key={i}>{desc}</p>
                ))}
                <ul className="space-y-3">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex gap-3 text-sm">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-zinc-700 shrink-0 group-hover:bg-accent/50 transition-colors" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {exp.technologies.map((tech) => (
                  <Tag key={tech}>{tech}</Tag>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
