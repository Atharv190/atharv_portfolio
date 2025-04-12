
import { 
  Code2, Globe, Terminal, Cpu, 
  Server, Settings, Layers, Cloud, 
  GitBranch, CpuIcon, FileCode, Code 
} from 'lucide-react';

const Skills = () => {
  const mainSkills = [
    {
      name: "Frontend Development",
      icon: <Layers className="h-8 w-8 text-purple-400" />,
      description: "Building responsive and interactive user interfaces",
      technologies: ["HTML", "CSS", "Javascript"]
    },
    {
      name: "Backend Development",
      icon: <Server className="h-8 w-8 text-blue-400" />,
      description: "Creating robust server-side applications",
      technologies: ["Node.js", "Python", "MongoDB"]
    },
  ];

  const technicalSkills = [
    {
      category: "Programming",
      icon: <Code className="h-5 w-5 text-blue-400" />,
      skills: [
        { name: "C++", level: "Advanced", icon: <FileCode className="h-4 w-4 text-blue-300" /> },
        { name: "Python", level: "Intermediate", icon: <FileCode className="h-4 w-4 text-yellow-400" /> },
        { name: "Java", level: "Intermediate", icon: <FileCode className="h-4 w-4 text-red-400" /> },
      ]
    },
    {
      category: "Web Technologies",
      icon: <Globe className="h-5 w-5 text-purple-400" />,
      skills: [
        { name: "HTML5/CSS3", level: "Intermediate", icon: <FileCode className="h-4 w-4 text-orange-500" /> },
        { name: "React.js", level: "Beginner", icon: <CpuIcon className="h-4 w-4 text-blue-500" /> },
        { name: "Node.js", level: "Intermediate", icon: <Code2 className="h-4 w-4 text-green-500" /> },
      ]
    },
    {
      category: "Tools & DevOps",
      icon: <Settings className="h-5 w-5 text-green-400" />,
      skills: [
        { name: "Git & GitHub", level: "Intermediate", icon: <GitBranch className="h-4 w-4 text-orange-600" /> },
        { name: "AWS", level: "Beginner", icon: <Cloud className="h-4 w-4 text-yellow-500" /> },
        { name: "Postman", level: "Intermediate", icon: <Terminal className="h-4 w-4 text-orange-400" /> }
      ]
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Advanced':
        return 'bg-green-400/20 text-green-400 border-green-400/20';
      case 'Intermediate':
        return 'bg-blue-400/20 text-blue-400 border-blue-400/20';
      case 'Beginner':
        return 'bg-purple-400/20 text-purple-400 border-purple-400/20';
      default:
        return 'bg-gray-400/20 text-gray-400 border-gray-400/20';
    }
  };

  return (
    <section id="skills" className="py-20 bg-gray-900 relative overflow-hidden">
      
      <div className="absolute inset-0">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative flex flex-col items-center">
        <div className="flex flex-col items-center mb-16 text-center">
          <span className="text-purple-400 text-sm font-semibold tracking-wider uppercase mb-2">Expertise</span>
          <h2 className="text-4xl font-bold text-white mb-4">Technical Skills</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
        </div>

       
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {mainSkills.map((skill, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white/5 via-white/10 to-white/5 backdrop-blur-sm shadow-lg rounded-xl p-6 border border-white/10 hover:scale-105 hover:border-purple-500/50 transition-all duration-300 w-full max-w-md"
            >
              <div className="flex flex-col items-center text-center gap-4 mb-4">
                <div className="p-4 rounded-full bg-white/5">{skill.icon}</div>
                <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
              </div>
              <p className="text-gray-400 mb-4 text-sm text-center">{skill.description}</p>
              <div className="flex justify-center flex-wrap gap-2">
                {skill.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm rounded-full bg-white/5 text-gray-300 border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

       
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {technicalSkills.map((category, index) => (
            <div key={index} className="space-y-6">
              <div className="flex items-center justify-center gap-2">
                {category.icon}
                <h3 className="text-xl font-semibold text-white">{category.category}</h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill, i) => (
                  <div
                    key={i}
                    className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:border-purple-500/50 transition-all duration-300"
                  >
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        {skill.icon}
                        <span className="text-gray-300">{skill.name}</span>
                      </div>
                      <span className={`px-3 py-1 text-sm rounded-full border ${getLevelColor(skill.level)}`}>
                        {skill.level}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        
        <div className="w-full flex justify-center mt-16">
          <div className="w-full max-w-3xl px-8 py-6 bg-gradient-to-r from-[#0f172a] to-[#1e293b] rounded-2xl shadow-lg border border-white/10">
            <h3 className="text-2xl font-semibold text-white text-center mb-6">Currently Learning</h3>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4">
              <div className="flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-md rounded-lg border border-white/10 hover:scale-105 transition-transform duration-300">
                <Cpu className="h-5 w-5 text-blue-400" />
                <span className="text-white">Machine Learning</span>
              </div>
              <div className="flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-md rounded-lg border border-white/10 hover:scale-105 transition-transform duration-300">
                <Globe className="h-5 w-5 text-purple-400" />
                <span className="text-white">Web3 Technologies</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;