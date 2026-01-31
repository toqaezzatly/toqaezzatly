
import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { Terminal } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-white/5 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="flex items-center space-x-2">
            <Terminal className="text-emerald-500 w-5 h-5" />
            <span className="font-mono font-bold text-gray-400">
              © {new Date().getFullYear()} TOQA_EZZATLY.sh
            </span>
          </div>

          <div className="flex space-x-8 text-xs font-mono text-gray-500 uppercase tracking-widest">
            <a href="#about" className="hover:text-emerald-400 transition-colors">Privacy</a>
            <a href="#contact" className="hover:text-emerald-400 transition-colors">Contact</a>
            <a href={PERSONAL_INFO.github} target="_blank" className="hover:text-emerald-400 transition-colors">GitHub</a>
          </div>

          <div className="text-xs text-gray-600 font-mono">
            Crafted with React, Tailwind & Gemini 3
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
