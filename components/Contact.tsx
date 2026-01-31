
import React, { useState } from 'react';
import { PERSONAL_INFO } from '../constants';
import { Mail, Phone, MapPin, Send, MessageSquareCode } from 'lucide-react';
import { getSecurityInsights } from '../services/gemini';

const Contact: React.FC = () => {
  const [chatInput, setChatInput] = useState('');
  const [chatResponse, setChatResponse] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleChat = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;
    
    setIsTyping(true);
    setChatResponse('Analyzing inquiry...');
    const result = await getSecurityInsights(chatInput);
    setChatResponse(result || 'No response found.');
    setIsTyping(false);
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Initialize Connection</h2>
            <p className="text-gray-400 text-lg mb-10 max-w-md">
              Whether you need a full security audit, a technical consultation, or just want to talk shop, my inbox is always open.
            </p>

            <div className="space-y-8">
              <div className="flex items-center space-x-6 group">
                <div className="w-14 h-14 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl flex items-center justify-center group-hover:bg-emerald-500/20 transition-all">
                  <Mail className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <div className="text-sm font-mono text-gray-500 uppercase">Email</div>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="text-lg font-bold text-white hover:text-emerald-400 transition-colors">
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-6 group">
                <div className="w-14 h-14 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl flex items-center justify-center group-hover:bg-emerald-500/20 transition-all">
                  <Phone className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <div className="text-sm font-mono text-gray-500 uppercase">Signal / Phone</div>
                  <div className="text-lg font-bold text-white">
                    {PERSONAL_INFO.phone}
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-6 group">
                <div className="w-14 h-14 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl flex items-center justify-center group-hover:bg-emerald-500/20 transition-all">
                  <MapPin className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <div className="text-sm font-mono text-gray-500 uppercase">Base Location</div>
                  <div className="text-lg font-bold text-white">
                    {PERSONAL_INFO.location}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/40 p-8 rounded-3xl border border-white/5 relative overflow-hidden">
            <div className="flex items-center space-x-3 mb-6 border-b border-white/5 pb-4">
              <MessageSquareCode className="text-emerald-400 w-5 h-5" />
              <h3 className="font-mono text-sm uppercase tracking-widest text-emerald-400">Security Assistant v1.0</h3>
            </div>
            
            <p className="text-gray-400 text-sm mb-6 font-mono">
              Ask me anything about Toqa's security background, her tools, or a quick vulnerability question.
            </p>

            <form onSubmit={handleChat} className="space-y-4">
              <div className="relative">
                <input 
                  type="text" 
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  placeholder="Ask the AI agent..."
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-emerald-500/50 transition-all placeholder:text-gray-600 font-mono text-sm"
                />
                <button 
                  type="submit"
                  disabled={isTyping}
                  className="absolute right-2 top-2 bottom-2 bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white px-4 rounded-lg transition-all"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>

            <div className="mt-8 bg-black/50 border border-white/5 rounded-2xl p-6 min-h-[160px] relative">
              {chatResponse ? (
                <div className="font-mono text-sm leading-relaxed text-gray-300">
                  <span className="text-emerald-500">Agent:</span> {chatResponse}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-full text-gray-600 font-mono text-xs text-center">
                  <div className="animate-pulse mb-2">Waiting for query...</div>
                  <div>Example: "What are her best projects?"</div>
                </div>
              )}
              
              {isTyping && (
                <div className="absolute bottom-4 right-6 flex space-x-1">
                  <div className="w-1 h-1 bg-emerald-400 rounded-full animate-bounce"></div>
                  <div className="w-1 h-1 bg-emerald-400 rounded-full animate-bounce delay-100"></div>
                  <div className="w-1 h-1 bg-emerald-400 rounded-full animate-bounce delay-200"></div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
