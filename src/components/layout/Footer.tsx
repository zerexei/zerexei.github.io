import React from 'react';
import { resumeData } from '../../data/resume';
import { Github, Linkedin, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-zinc-800 py-12 md:py-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-lg font-bold tracking-tighter mb-4">
              AD<span className="text-zinc-500">.</span>
            </h3>
            <p className="text-zinc-500 text-sm max-w-xs">
              Backend Software Engineer focusing on distributed systems, performance, and reliability.
            </p>
          </div>
          <div className="flex flex-col md:items-end gap-6">
            <div className="flex items-center gap-6">
              <a href={resumeData.github} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href={resumeData.linkedin} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href={`mailto:${resumeData.email}`} className="text-zinc-400 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
            <p className="text-zinc-600 text-xs font-mono">
              © {new Date().getFullYear()} Angelo Dave Arcillas. Built with React & Tailwind.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
