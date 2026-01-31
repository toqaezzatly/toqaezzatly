
import React from 'react';
import { SKILL_CATEGORIES } from '../constants';
import * as Icons from 'lucide-react';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Tactical Arsenal</h2>
          <p className="text-gray-400 font-mono text-sm uppercase tracking-[0.2em]">Tools & Technologies</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILL_CATEGORIES.map((category, index) => {
            const IconComponent = (Icons as any)[category.icon];
            return (
              <div 
                key={index}
                className="group bg-gray-900/40 border border-white/5 p-8 rounded-2xl hover:border-emerald-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/5"
              >
                <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-500/20 transition-colors">
                  <IconComponent className="text-emerald-400 w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-emerald-400 transition-colors">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, sIdx) => (
                    <span 
                      key={sIdx}
                      className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-sm text-gray-400 font-mono hover:text-emerald-400 hover:border-emerald-500/30 transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
