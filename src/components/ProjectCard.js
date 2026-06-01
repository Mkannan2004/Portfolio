const ProjectCard = ({ title, desc, tech, link }) => {
  return (
    <div className="group relative bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-cyan-500/50 transition-all">
      <div className="h-48 bg-gray-800 flex items-center justify-center">
      
        <span className="text-gray-600">Project Preview</span>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition">{title}</h3>
        <p className="text-gray-400 text-sm mb-4">{desc}</p>
        <div className="flex gap-2 mb-4">
          {tech.map((t) => (
            <span key={t} className="text-xs bg-gray-800 px-2 py-1 rounded text-cyan-300">{t}</span>
          ))}
        </div>
        <a href={link} className="text-sm font-semibold underline underline-offset-4">Live Demo</a>
      </div>
    </div>
  );
};
export default ProjectCard;
