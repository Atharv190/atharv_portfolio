import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative py-20 overflow-hidden bg-gradient-to-br from-black via-[#0a0a0f] to-black"
    >
      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 animate-pulse bg-[radial-gradient(circle_at_20%_30%,rgba(139,92,246,0.2),transparent),radial-gradient(circle_at_80%_70%,rgba(59,130,246,0.2),transparent)]"></div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-1.5 h-1.5 bg-purple-400 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0.3,
              scale: Math.random() * 0.8 + 0.2,
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              x: [null, Math.random() * window.innerWidth],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: Math.random() * 8 + 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-purple-400 text-sm tracking-widest uppercase">Contact</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">
            Let’s Build Something <span className="text-purple-400">Amazing</span>
          </h2>
          <div className="w-24 h-1 mt-4 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info Section */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {[
              {
                icon: <Mail className="w-6 h-6" />,
                title: 'Email',
                value: 'atharvmarathe5@gmail.com',
                color: 'purple',
              },
              {
                icon: <Phone className="w-6 h-6" />,
                title: 'Phone',
                value: '+91 9028657039',
                color: 'blue',
              },
              {
                icon: <MapPin className="w-6 h-6" />,
                title: 'Location',
                value: 'Shirpur, Dhule',
                color: 'indigo',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-5 bg-white/5 backdrop-blur-lg p-5 rounded-xl border border-white/10 hover:shadow-lg hover:shadow-purple-500/20 transition-all"
              >
                <div
                  className={`p-4 rounded-xl bg-${item.color}-600/20 text-${item.color}-400`}
                >
                  {item.icon}
                </div>
                <div>
                  <p className="text-sm text-gray-400">{item.title}</p>
                  <p className="text-lg font-semibold text-white">{item.value}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Form Section */}
          <motion.form
            className="bg-white/5 backdrop-blur-lg p-8 rounded-xl border border-white/10 shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              {['Name', 'Email'].map((label, i) => (
                <div key={i} className="relative">
                  <input
                    type={label === 'Email' ? 'email' : 'text'}
                    placeholder=" "
                    className="peer w-full px-4 pt-5 pb-2 bg-transparent border border-white/20 rounded-lg text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                  />
                  <label className="absolute left-4 top-2 text-sm text-gray-400 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-2 peer-focus:text-sm peer-focus:text-purple-400">
                    {label}
                  </label>
                </div>
              ))}

              <div className="relative">
                <textarea
                  rows={4}
                  placeholder=" "
                  className="peer w-full px-4 pt-5 pb-2 bg-transparent border border-white/20 rounded-lg text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                ></textarea>
                <label className="absolute left-4 top-2 text-sm text-gray-400 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-2 peer-focus:text-sm peer-focus:text-purple-400">
                  Message
                </label>
              </div>

              {/* Animated Send Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 py-3 px-6 rounded-lg font-semibold text-white shadow-lg hover:shadow-purple-500/30 transition-all"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </motion.button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
