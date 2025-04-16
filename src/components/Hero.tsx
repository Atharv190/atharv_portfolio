
import { Github, Linkedin, Terminal, Code, Cpu } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900"
    >
      <div className="absolute inset-0 overflow-hidden">
       
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-800/20 via-black to-gray-900 animate-pulse-slow"
        ></div>
        <div
          className="absolute inset-0 bg-[size:60px_60px] bg-[linear-gradient(to_right,_rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,_rgba(255,255,255,0.02)_1px,transparent_1px)] animate-grid-slow"
        ></div>

        {/* Option 2: Flowing Gradient Waves (Commented Out - Adjusted colors) */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-700 opacity-20 animate-gradient-flow" style={{
          backgroundSize: '200% 200%',
        }}></div> */}

        {/* Option 3: Abstract Particle Field (Commented Out) */}
        {/* <div id="particle-canvas" className="absolute inset-0"></div> */}

        <div className="absolute w-96 h-96 -top-48 -left-48 bg-purple-500/10 rounded-full blur-3xl animate-float-slightly-different" />
        <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-blue-500/10 rounded-full blur-3xl animate-float-slightly delay-1000" />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Terminal className="absolute top-1/4 left-1/4 text-white/5 w-24 h-24 animate-float-slow-rotate" />
        <Code className="absolute top-1/3 right-1/4 text-white/5 w-16 h-16 animate-float-reverse" />
        <Cpu className="absolute bottom-1/4 left-1/3 text-white/5 w-20 h-20 animate-float-delay-rotate" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="relative inline-block mb-8 group">
            <div className="w-56 h-56 rounded-full overflow-hidden border-4 border-white/10 relative z-10">
              <img
                src="/images/bb.jpeg"
                alt="Profile"
                className="w-full h-full object-cover rounded-full"
                loading="lazy"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-xl opacity-40 group-hover:opacity-60 animate-spin-faster transition-opacity duration-500" />
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-2">
            Hi, I'm Atharv 
          </h1>

          <p className="text-base sm:text-xl text-gray-400 mb-6 font-mono animate-typing overflow-hidden whitespace-nowrap border-r-2 border-gray-400 pr-4 w-[32ch] mx-auto">
            Crafting code with creativity...💡
          </p>

          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="px-4 py-2 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20 font-semibold animate-pulse-text">
              💻 Developer
            </span>
            <span className="px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 font-semibold animate-pulse-text-delay">
              🛠 Engineer
            </span>
            <span className="px-4 py-2 rounded-full bg-pink-500/10 text-pink-400 border border-pink-500/20 font-semibold animate-pulse-text-longer-delay">
              🚀 Tech Enthusiast
            </span>
          </div>

          <div className="backdrop-blur-lg bg-white/5 p-6 rounded-xl shadow-lg border border-white/10 max-w-2xl mx-auto mb-12">
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              👋 Hey there! I’m <span className="text-purple-400 font-semibold">Atharv Marathe</span>, a Computer Science student 👨‍💻 passionate about building the future of technology 🚀.
              <br />I love designing user-centric experiences with ✨ beautiful front-end code and ⚙ seamless logic.
            </p>
          </div>

          <div className="flex justify-center items-center gap-6 flex-wrap">
            <a
              href="#contact"
              className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium shadow-lg hover:shadow-[0_0_20px_rgba(128,0,255,0.6)] hover:scale-105 transition-all duration-300 animate-glow"
            >
              🚀 Let's Collaborate
            </a>
            <a
              href="/images/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium border border-white/20 animate-border-pulse"
            >
              📄 Download CV
            </a>
            <div className="flex gap-3">
              <a
                href="https://github.com/Atharv190"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors animate-icon-float"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/atharvmarathe19"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors animate-icon-float-delay"
              >
                <Linkedin className="h-6 w-6" />
              </a>
               <a
              href="mailto:atharvmarathe5@gmail.com"
              className="text-gray-400 hover:text-yellow-400 transition-transform hover:scale-125 duration-200"
            >
              <Mail className="h-5 w-5" />
            </a>
              <a
  href="https://www.codechef.com/users/atharvmarathe" 
  target="_blank"
  rel="noopener noreferrer"
  title="CodeChef"
  className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors"
>
  <img
    src="https://cdn.codechef.com/images/cc-logo.svg"
    alt="CodeChef"
    className="h-6 w-6"
  />
</a>
            </div>
          </div>
        </div>

        {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow">
          <a href="#about" className="text-white/50 hover:text-white transition-colors text-sm flex flex-col items-center">
            <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1">
              <div className="w-1.5 h-3 bg-white/50 rounded-full animate-scroll-indicator" />
            </div>
            <span className="mt-2">Scroll Down</span>
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
