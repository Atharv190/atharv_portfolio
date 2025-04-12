
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-black relative overflow-hidden">
      
      <div className="absolute inset-0">
        <div className="absolute -top-1/3 -right-1/3 w-[500px] h-[500px] bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/3 -left-1/3 w-[500px] h-[500px] bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="flex flex-col items-center mb-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-purple-400 text-sm font-semibold tracking-wider uppercase mb-2">Contact</span>
          <h2 className="text-4xl font-bold text-white mb-4">Let’s Work Together</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 shadow-md hover:shadow-purple-500/20 transition-shadow">
              <h3 className="text-2xl font-bold text-white mb-6">🚀 Let's Connect</h3>
              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-purple-600/20 text-purple-400 shadow-inner shadow-purple-500/10">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email me at</p>
                    <p className="text-lg text-white font-semibold hover:underline transition-all duration-300 cursor-pointer">
                      atharvmarathe5@gmail.com
                    </p>
                  </div>
                </div>

               
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-blue-600/20 text-blue-400 shadow-inner shadow-blue-500/10">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Call me on</p>
                    <p className="text-lg text-white font-semibold hover:text-blue-300 transition-colors duration-300">
                      +91 9028657039
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-indigo-600/20 text-indigo-400 shadow-inner shadow-indigo-500/10">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Based in</p>
                    <p className="text-lg text-white font-semibold">Shirpur, Dhule</p>
                  </div>
                </div>
              </div>
            </div>

           
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                {
                  icon: <MessageSquare className="h-6 w-6 text-purple-400 mb-2" />,
                  title: 'Open to Collaborate',
                  subtitle: 'Let’s build something great together',
                },
                {
                  icon: <Clock className="h-6 w-6 text-blue-400 mb-2" />,
                  title: 'Timely Replies',
                  subtitle: 'Typically responds within 24 hours',
                },
                {
                  icon: <Send className="h-6 w-6 text-indigo-400 mb-2" />,
                  title: 'Remote Friendly',
                  subtitle: 'Open to freelance & remote roles',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 flex flex-col items-center text-center hover:scale-105 transition-transform shadow hover:shadow-md"
                >
                  {item.icon}
                  <span className="text-white font-bold">{item.title}</span>
                  <span className="text-gray-400 text-sm">{item.subtitle}</span>
                </div>
              ))}
            </div>
          </motion.div>

          
          <motion.form
            className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 shadow-md hover:shadow-blue-500/20 transition-shadow"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-8">
              
              {[
                { id: 'name', type: 'text', label: 'Name' },
                { id: 'email', type: 'email', label: 'Email' },
              ].map((input, i) => (
                <div className="relative" key={i}>
                  <input
                    type={input.type}
                    id={input.id}
                    placeholder=" "
                    className="peer w-full bg-white/10 border border-white/10 rounded-lg px-4 pt-5 pb-2 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                  />
                  <label
                    htmlFor={input.id}
                    className="absolute left-4 top-2 text-sm text-gray-400 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-2 peer-focus:text-sm peer-focus:text-purple-400"
                  >
                    {input.label}
                  </label>
                </div>
              ))}

              
              <div className="relative">
                <textarea
                  id="message"
                  rows={4}
                  placeholder=" "
                  className="peer w-full bg-white/10 border border-white/10 rounded-lg px-4 pt-5 pb-2 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                ></textarea>
                <label
                  htmlFor="message"
                  className="absolute left-4 top-2 text-sm text-gray-400 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-2 peer-focus:text-sm peer-focus:text-purple-400"
                >
                  Message
                </label>
              </div>

             
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 px-6 rounded-xl font-semibold hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Send className="h-5 w-5" />
                Send Message
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
