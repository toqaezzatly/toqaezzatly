
import React from 'react';
import { PROJECTS } from '../constants';
import { ExternalLink, Folder, Award } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 space-y-4 md:space-y-0">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Mission Log</h2>
            <p className="text-gray-400 font-mono text-sm uppercase tracking-[0.2em]">Field Operations & Research</p>
          </div>
          <a href="#" className="text-emerald-400 hover:text-emerald-300 flex items-center space-x-2 font-mono text-sm">
            <span>View All Archives</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <div 
              key={index}
              className="relative group bg-gray-900/60 rounded-2xl overflow-hidden border border-white/5 hover:border-emerald-500/20 transition-all duration-500"
            >
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-emerald-500/10 rounded-lg">
                    <Folder className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div className="flex items-center space-x-4">
                    {project.grade && (
                      <div className="flex items-center space-x-1 px-2 py-1 bg-yellow-500/10 text-yellow-500 rounded text-xs font-bold border border-yellow-500/20">
                        <Award className="w-3 h-3" />
                        <span>Grade: {project.grade}</span>
                      </div>
                    )}
                    {project.link && (
                      <a href={project.link} target="_blank" className="text-gray-500 hover:text-emerald-400 transition-colors">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                <div className="text-xs font-mono text-emerald-500 mb-2 uppercase tracking-widest">{project.category}</div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-emerald-400 transition-colors">{project.title}</h3>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tIdx) => (
                    <span 
                      key={tIdx}
                      className="text-[10px] font-mono px-2 py-1 bg-emerald-500/5 text-emerald-400/80 rounded border border-emerald-500/10"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
