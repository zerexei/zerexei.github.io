import React from 'react';
import { resumeData } from '../../data/resume';
import { Button } from '../common/Button';
import { Github, Mail, Linkedin, FileText } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-12 py-20 md:py-32 animate-fade-in">
      <div className="flex-1 space-y-8 text-center md:text-left">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
            {resumeData.name}
          </h1>
          <h2 className="text-xl md:text-2xl font-medium text-zinc-400 font-mono tracking-tight">
            {resumeData.title}
          </h2>
        </div>
        
        <p className="text-lg text-zinc-400 max-w-xl leading-relaxed">
          {resumeData.summary}
        </p>

        <div className="flex flex-wrap items-center gap-3 justify-center md:justify-start">
          {resumeData.skills.backend.slice(0, 3).map((skill) => (
            <span key={skill} className="px-3 py-1 text-xs font-mono bg-zinc-900 border border-zinc-800 rounded-full text-zinc-400">
              {skill}
            </span>
          ))}
          <span className="text-zinc-600 text-xs font-mono">& more</span>
        </div>

        <div className="flex flex-wrap items-center gap-4 justify-center md:justify-start">
          <Button variant="primary" onClick={() => window.open(resumeData.github, '_blank')}>
            <Github className="mr-2 h-4 w-4" /> GitHub
          </Button>
          <Button variant="secondary" onClick={() => window.open(`mailto:${resumeData.email}`)}>
            <Mail className="mr-2 h-4 w-4" /> Email
          </Button>
          <div className="flex items-center gap-4 ml-2">
            <a href={resumeData.linkedin} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-zinc-400 hover:text-white transition-colors flex items-center gap-1 text-sm font-medium">
              <FileText size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-accent to-zinc-600 rounded-full blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
        <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-zinc-800 bg-zinc-900 group-hover:border-accent/30 transition-colors duration-500">
          <img 
            src="https://github.com/zerexei.png" 
            alt={resumeData.name} 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};
