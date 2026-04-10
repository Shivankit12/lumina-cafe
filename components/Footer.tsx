import { motion } from 'motion/react';
import { Coffee, Instagram, Twitter, Facebook, Mail, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-cafe-dark py-24 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cafe-gold/30 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 mb-20">
          <div className="lg:col-span-5 space-y-10">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-cafe-gold flex items-center justify-center text-white shadow-[0_0_30px_rgba(197,160,89,0.3)]">
                <Coffee size={24} />
              </div>
              <span className="font-serif text-4xl font-bold tracking-tight text-white italic">Lumina</span>
            </div>
            <p className="text-white/50 text-xl font-light italic leading-relaxed max-w-md">
              Crafting moments of clarity and connection through the art of specialty coffee. 
              Join our community of dreamers and doers.
            </p>
            <div className="flex gap-6">
              {[Instagram, Twitter, Facebook].map((Icon, i) => (
                <motion.a 
                  key={i} 
                  href="#" 
                  whileHover={{ y: -5, color: "#c5a059" }}
                  className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-white transition-all"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 space-y-8">
            <h4 className="font-serif text-2xl text-white italic">Explore</h4>
            <ul className="space-y-4">
              {['Menu', 'Gallery', 'Reviews', 'Location'].map((item) => (
                <li key={item}>
                  <motion.a 
                    href={`#${item.toLowerCase()}`} 
                    whileHover={{ x: 5, color: "#c5a059" }}
                    className="text-white/40 hover:text-cafe-gold transition-colors text-lg italic"
                  >
                    {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5 space-y-8">
            <h4 className="font-serif text-2xl text-white italic">Join the Ritual</h4>
            <p className="text-white/40 text-lg italic">Get brewing tips and exclusive event invites.</p>
            <div className="relative group">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full bg-white/5 border border-white/10 rounded-3xl px-8 py-6 text-white text-lg focus:outline-none focus:border-cafe-gold focus:bg-white/10 transition-all italic"
              />
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-12 h-12 bg-cafe-gold text-white rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-cafe-gold/20 transition-all"
              >
                <ArrowRight size={20} />
              </motion.button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-white/20 text-sm uppercase tracking-[0.3em]">© 2024 Lumina Café. All rights reserved.</p>
          <div className="flex gap-12">
            {['Privacy Policy', 'Terms of Service'].map((item) => (
              <motion.a 
                key={item}
                href="#" 
                whileHover={{ color: "#c5a059" }}
                className="text-white/20 hover:text-cafe-gold text-xs uppercase tracking-widest transition-colors"
              >
                {item}
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Background Text Decoration */}
      <div className="absolute -bottom-20 -right-20 text-[30vw] font-serif italic text-white/[0.02] whitespace-nowrap pointer-events-none select-none">
        Lumina
      </div>
    </footer>
  );
}
