
import { Code2, Brain, Lightbulb, Rocket } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code2 className="h-8 w-8 text-purple-500" />,
      title: "Clean Code",
      description: "Writing elegant, maintainable, and efficient code solutions"
    },
    {
      icon: <Brain className="h-8 w-8 text-blue-500" />,
      title: "Problem Solver",
      description: "Solving problems with clear thinking"
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-indigo-500" />,
      title: "Innovative",
      description: "Exploring creative solutions through emerging technologies"
    },
    {
      icon: <Rocket className="h-8 w-8 text-pink-500" />,
      title: "Fast Learner",
      description: "Quickly adapting to new technologies and concepts"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-16">
          <span className="text-purple-400 text-sm font-semibold tracking-wider uppercase mb-2">About Me</span>
          <h2 className="text-4xl font-bold text-white mb-4"></h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1623479322729-28b25c16b011?w=600&h=800&fit=crop"
                alt="Profile"
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg"></div>
            <div className="absolute -bottom-4 -right-4 w-full h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg"></div>
          </div>

          <div className="space-y-8">
<div className="backdrop-blur-lg bg-white/5 p-6 rounded-xl shadow-lg border border-white/10 max-w-xl mx-auto mb-12 text-center">
  <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
    I'm a <span className="text-purple-400 font-semibold">2nd-year Computer Engineering student</span> with a passion for turning ideas into real-world tech. I love blending logic with creativity to build clean, responsive, and meaningful digital experiences. 💻✨
  </p>
  <br />
  <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
    Outside class, you’ll find me joining <span className="text-blue-400 font-semibold">hackathons</span>, exploring <span className="text-purple-300 font-semibold">open source</span>, and learning with <span className="text-blue-300 font-semibold">tech communities</span>. I'm always excited to learn, build, and collaborate. 🚀🤝
    <br />
    <span className="mt-4 block text-white/80 font-medium">Let’s connect, innovate, and shape the future together! 🚀✨</span>
  </p>
</div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                  <div className="mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full border border-blue-500/20">
                3+ Projects
              </div>
              <div className="bg-indigo-500/10 text-indigo-400 px-4 py-2 rounded-full border border-indigo-500/20">
                2+ Hackathons
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;