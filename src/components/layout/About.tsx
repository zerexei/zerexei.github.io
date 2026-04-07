import React from 'react';
import { resumeData } from '../../data/resume';
import { Tag } from '../common/Tag';
import { Briefcase } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="space-y-16 py-20 animate-slide-up">
      <div className="space-y-4 max-w-2xl">
        <h2 className="text-3xl font-bold tracking-tight text-white flex items-center gap-2">
          <Briefcase className="text-zinc-500" size={24} /> Experience
        </h2>
        <p className="text-zinc-400 text-lg">
          I've worked on high-scale systems and complex architectures, from startups to established companies.
        </p>
      </div>

      <div className="space-y-12">
        {resumeData.experience.map((exp, index) => (
          <div key={index} className="relative pl-8 md:pl-0">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-48 top-0 bottom-0 w-px bg-zinc-800" />
            
            <div className="flex flex-col md:flex-row gap-8">
              {/* Date Column */}
              <div className="md:w-40 md:text-right shrink-0">
                <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest leading-6 block py-1">
                  {exp.period}
                </span>
              </div>

              {/* Content Column */}
              <div className="space-y-6 flex-1">
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-white leading-tight">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-2 text-zinc-400 text-sm">
                    <span className="font-semibold text-zinc-300">{exp.company}</span>
                    <span>•</span>
                    <span>{exp.location}</span>
                  </div>
                </div>

                <div className="space-y-4 text-zinc-400 leading-relaxed">
                  {exp.description.map((desc, i) => (
                    <p key={i}>{desc}</p>
                  ))}
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="mt-2.5 w-1 h-1 rounded-full bg-zinc-600 shrink-0" />
                        <span className="text-sm">{achievement}</span>
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
          </div>
        ))}
      </div>
    </div>
  );
};
