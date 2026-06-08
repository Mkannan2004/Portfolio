import React from 'react';

const ProjectCard = ({ title, desc, tech, link, github }) => {
  return (
    <div className="group relative bg-slate-900/60 backdrop-blur-md rounded-2xl overflow-hidden border border-slate-800 hover:border-cyan-500/40 transition-all duration-500 hover:shadow-[0_0_50px_-12px_rgba(6,182,212,0.2)] flex flex-col md:flex-row w-full max-w-4xl mx-auto min-h-[280px]">
      
     
      <div className="w-full md:w-2/5 bg-gradient-to-br from-slate-800/80 to-slate-950 flex items-center justify-center relative overflow-hidden border-b md:border-b-0 md:border-r border-slate-800/60 shrink-0">
        <div className="absolute inset-0 bg-cyan-500/[0.02] group-hover:bg-cyan-500/[0.06] transition-all duration-500" />
        
      
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:14px_24px]" />
        
        <span className="z-10 text-slate-400 font-semibold text-xs tracking-widest uppercase group-hover:text-cyan-400 transition-colors duration-500 bg-slate-900/80 px-4 py-2 rounded-full border border-slate-800">
          Project Preview
        </span>
      </div>

     
      <div className="p-8 flex flex-col justify-between flex-grow w-full md:w-3/5">
        
        <div>
     
          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300 tracking-tight">
            {title}
          </h3>

          
          <p className="text-slate-400 text-base leading-relaxed mb-6 font-normal">
            {desc}
          </p>
        </div>

        <div>
        
          <div className="flex gap-2 mb-6 flex-wrap">
            {tech.map((t) => (
              <span
                key={t}
                className="text-xs font-medium bg-slate-800/40 px-3 py-1 rounded-md text-cyan-400 border border-slate-700/30"
              >
                {t}
              </span>
            ))}
          </div>

        
          <div className="flex items-center gap-6 pt-4 border-t border-slate-800/60">
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white text-sm font-semibold hover:text-cyan-400 transition-colors duration-200"
              >
                Live Demo
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}

            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white text-sm font-semibold hover:text-slate-400 transition-colors duration-200"
              >
                GitHub
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
              </a>
            )}
          </div>

        </div>
      </div>

    </div>
  );
};

export default ProjectCard;