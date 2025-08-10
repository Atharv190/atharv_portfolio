import { Code2, Brain, Lightbulb, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const highlights = [
    {
      icon: <Code2 className="h-8 w-8 text-purple-500 group-hover:scale-110 transition-transform duration-300" />,
      title: "Clean Code",
      description: "Writing elegant, maintainable, and efficient code solutions"
    },
    {
      icon: <Brain className="h-8 w-8 text-blue-500 group-hover:scale-110 transition-transform duration-300" />,
      title: "Problem Solver",
      description: "Solving problems with clear thinking and strategy"
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-indigo-500 group-hover:scale-110 transition-transform duration-300" />,
      title: "Innovative",
      description: "Exploring creative ideas through emerging technologies"
    },
    {
      icon: <Rocket className="h-8 w-8 text-pink-500 group-hover:scale-110 transition-transform duration-300" />,
      title: "Fast Learner",
      description: "Quickly adapting to new tech and concepts"
    }
  ];

  return (
    <section 
      id="about" 
      className="py-20 relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900"
    >
      {/* Background effects matching Hero */}
      <div className="absolute inset-0">
        {/* Radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-800/20 via-black to-gray-900 animate-pulse-slow"></div>

        {/* Subtle grid */}
        <div className="absolute inset-0 bg-[size:60px_60px] bg-[linear-gradient(to_right,_rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,_rgba(255,255,255,0.02)_1px,transparent_1px)] animate-grid-slow"></div>

        {/* Floating blobs */}
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-purple-500/10 rounded-full blur-3xl animate-float-slightly-different" />
        <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-blue-500/10 rounded-full blur-3xl animate-float-slightly delay-1000" />
      </div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-12">
          <motion.span 
            initial={{ opacity: 0, y: -20, scale: 0.8 }} 
            animate={{ opacity: 1, y: 0, scale: 1 }} 
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            className="text-purple-400 text-sm font-semibold tracking-wider uppercase mb-2"
          >
            About Me
          </motion.span>
          
          <motion.div 
            initial={{ scaleX: 0, opacity: 0 }} 
            animate={{ scaleX: 1, opacity: 1 }} 
            transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
            className="w-20 h-1.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full origin-left"
          />
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Left: Text & Stats */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.6 }} 
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="backdrop-blur-lg bg-white/5 p-6 rounded-xl shadow-lg border border-white/10">
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
                👋 I’m a 3rd-year Computer Engineering student passionate about transforming ideas into real-world technology. Whether it’s writing clean, efficient code 💻 or designing engaging digital experiences 🎨, I thrive at the intersection of logic and creativity.
              </p>
              <br />
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
                🚀 Beyond coding, I actively participate in hackathons 🏆, contribute to open-source projects 🌐, and learn continuously through tech communities 🤝. I’m always eager to build, collaborate, and grow.
              </p>
              <span className="mt-6 block text-white/90 font-medium">
                💡 Let’s connect and create something impactful together!
              </span>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-4">
              <div className="bg-blue-500/10 text-blue-300 px-5 py-2 rounded-full border border-blue-500/20 shadow-sm">
                🚀 4+ Projects Built
              </div>
              <div className="bg-indigo-500/10 text-indigo-300 px-5 py-2 rounded-full border border-indigo-500/20 shadow-sm">
                🎯 2+ Hackathons Attended
              </div>
            </div>
          </motion.div>

          {/* Right: Highlights */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.6 }} 
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {highlights.map((item, index) => (
              <motion.div 
                key={index} 
                whileHover={{ scale: 1.05 }} 
                className="group bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 transition duration-300"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
