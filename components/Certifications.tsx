
import React from 'react';
import { CERTIFICATIONS } from '../constants';
import { Award, Calendar, ExternalLink } from 'lucide-react';

const Certifications: React.FC = () => {
  return (
    <section className="py-24 bg-black/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Credentials</h2>
          <p className="text-gray-400 font-mono text-sm uppercase tracking-[0.2em]">Verified Proof of Skill</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert, index) => (
            <div 
              key={index} 
              className="flex flex-col bg-gray-900/30 p-8 rounded-2xl border border-white/5 hover:border-emerald-500/20 transition-all group"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                  <Award className="text-emerald-400 w-5 h-5" />
                </div>
                <div className="flex items-center space-x-1 text-gray-500 font-mono text-xs">
                  <Calendar className="w-3 h-3" />
                  <span>{cert.year}</span>
                </div>
              </div>
              
              <h3 className="text-lg font-bold mb-2 group-hover:text-emerald-400 transition-colors leading-tight">
                {cert.name}
              </h3>
              <p className="text-emerald-500/70 text-sm font-mono mb-4">{cert.issuer}</p>
              
              {cert.description && (
                <p className="text-gray-400 text-sm mt-auto">
                  {cert.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
