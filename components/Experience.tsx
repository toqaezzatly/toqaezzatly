
import React from 'react';
import { EXPERIENCES } from '../constants';
import { Briefcase, MapPin } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">Timeline</h2>
          <p className="text-gray-400 font-mono text-sm uppercase tracking-[0.2em] text-center">The Journey So Far</p>
        </div>

        <div className="relative border-l border-emerald-500/20 ml-4 md:ml-0">
          {EXPERIENCES.map((exp, index) => (
            <div key={index} className="mb-12 relative pl-8 md:pl-0 md:flex items-center group">
              {/* Dot indicator */}
              <div className="absolute -left-[9px] md:left-1/2 md:-ml-[9px] w-[18px] h-[18px] bg-black border-2 border-emerald-500 rounded-full z-10 group-hover:scale-125 transition-transform"></div>
              
              {/* Date side - only desktop */}
              <div className="hidden md:block md:w-1/2 md:pr-12 md:text-right">
                <div className="text-emerald-500 font-mono text-sm font-bold tracking-widest">{exp.period}</div>
                <div className="text-gray-500 text-xs font-mono uppercase mt-1">{exp.company}</div>
              </div>

              {/* Content side */}
              <div className="md:w-1/2 md:pl-12">
                <div className="md:hidden text-emerald-500 font-mono text-sm font-bold mb-1">{exp.period} — {exp.company}</div>
                <div className="bg-gray-900/40 p-6 rounded-2xl border border-white/5 group-hover:border-emerald-500/20 transition-all shadow-xl shadow-black/20">
                  <h3 className="text-xl font-bold mb-2 flex items-center space-x-2">
                    <Briefcase className="w-4 h-4 text-emerald-400" />
                    <span>{exp.role}</span>
                  </h3>
                  <p className="text-gray-400 mb-4">{exp.description}</p>
                  {exp.details && (
                    <ul className="space-y-2">
                      {exp.details.map((detail, dIdx) => (
                        <li key={dIdx} className="text-sm text-gray-500 flex items-start space-x-2">
                          <span className="text-emerald-500 mt-1">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
