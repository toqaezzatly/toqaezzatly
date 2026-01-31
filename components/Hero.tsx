
import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../constants';
import { ChevronRight, ShieldCheck, Mail, Linkedin, Github } from 'lucide-react';

const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const fullText = "identifying vulnerabilities before they do.";
  
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] -z-10 animate-pulse delay-700"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 rounded-full mb-6">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span className="text-emerald-400 text-xs font-mono uppercase tracking-widest">Available for Security Audits</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
              I secure your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-500">
                Digital Assets
              </span>
            </h1>

            <div className="font-mono text-lg md:text-xl text-gray-400 mb-8 h-8">
              <span className="text-emerald-500">$</span> root_access: {text}<span className="animate-pulse">_</span>
            </div>

            <p className="text-gray-400 text-lg mb-10 max-w-lg leading-relaxed">
              Professional Penetration Tester and Cybersecurity Engineer specializing in offensive security, network analysis, and secure code development.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <a href="#projects" className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-lg font-bold transition-all shadow-lg shadow-emerald-500/20 flex items-center space-x-2">
                <span>View My Work</span>
                <ChevronRight className="w-4 h-4" />
              </a>
              <a href="#contact" className="bg-white/5 hover:bg-white/10 border border-white/10 px-8 py-4 rounded-lg font-bold transition-all">
                Let's Talk
              </a>
            </div>

            <div className="flex space-x-6">
              <a href={PERSONAL_INFO.github} target="_blank" className="text-gray-500 hover:text-white transition-colors"><Github className="w-6 h-6" /></a>
              <a href={PERSONAL_INFO.linkedin} target="_blank" className="text-gray-500 hover:text-white transition-colors"><Linkedin className="w-6 h-6" /></a>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="text-gray-500 hover:text-white transition-colors"><Mail className="w-6 h-6" /></a>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative z-10 bg-gray-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl">
              <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/5">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                </div>
                <div className="text-xs text-gray-500 font-mono">bash — toqa@cyber-lab</div>
              </div>
              <div className="font-mono text-sm space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="text-emerald-500">➜</span>
                  <span className="text-cyan-400">~</span>
                  <span className="text-white">whoami</span>
                </div>
                <div className="text-gray-400 pl-6">toqa_ayman_gomaa</div>
                <div className="flex items-center space-x-2">
                  <span className="text-emerald-500">➜</span>
                  <span className="text-cyan-400">~</span>
                  <span className="text-white">ls skills/</span>
                </div>
                <div className="grid grid-cols-2 gap-2 pl-6 text-emerald-400/80">
                  <span>- pentesting.sh</span>
                  <span>- web_sec.api</span>
                  <span>- network_scan.pcap</span>
                  <span>- exploit_dev.py</span>
                </div>
                <div className="flex items-center space-x-2 pt-4">
                  <span className="text-emerald-500">➜</span>
                  <span className="text-cyan-400">~</span>
                  <span className="text-white">./scanner --target web_app_2025</span>
                </div>
                <div className="text-yellow-400/80 pl-6 animate-pulse">[*] Analyzing target...</div>
                <div className="text-red-400/80 pl-6 animate-pulse">[!] Critical vulnerability found: SQLi</div>
                <div className="text-emerald-400/80 pl-6 animate-pulse">[+] Solution: Mitigation report generated.</div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-500/20 blur-3xl rounded-full"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-cyan-500/20 blur-3xl rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
