
import { Github, ShieldCheck, FileText, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Text File Hider",
      description:
        "A secure Java application to encrypt and decrypt text files using password protection, ensuring privacy and safe file handling.",
      image: "/images/text-file-hider.png", 
      icon: <FileText className="h-6 w-6" />,
      tech: ["Java", "MySql", "Nodemailer"],
      github: "https://github.com/Atharv190/Text-File-Hider",
    },
    {
      title: "ATS Score Checker",
      description:
        "A web app that analyzes resumes against job descriptions using NLP and ML as well as API to generate an ATS compatibility score.",
      image: "/images/ats-checker.png",
      icon: <ShieldCheck className="h-6 w-6" />,
      tech: ["React", "Node.js", "Flask", "Python", "MySQL", "API"],
      github: "https://github.com/your-username/ats-score-checker",
      live: "#"
    }
  ];
  
  

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-16">
          <span className="text-purple-400 text-sm font-semibold tracking-wider uppercase mb-2">Portfolio</span>
          <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-gradient-to-b from-white/5 to-white/0 backdrop-blur-sm border border-white/10 hover:border-purple-500/50 transition-all duration-300"
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
              </div>

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-white/10 hover:bg-purple-500 text-white transition-colors"
                  >
                    <Github className="h-6 w-6" />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-white/10 hover:bg-blue-500 text-white transition-colors"
                  >
                    <ExternalLink className="h-6 w-6" />
                  </a>
                </div>
              </div>

              <div className="p-6 relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-purple-500/20 text-purple-400">
                    {project.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                </div>

                <p className="text-gray-400 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm rounded-full bg-white/5 text-gray-300 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
