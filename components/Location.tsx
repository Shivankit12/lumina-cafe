import { motion } from 'motion/react';
import { MapPin, Clock, Phone, Mail, Navigation } from 'lucide-react';

export default function Location() {
  return (
    <section id="location" className="py-24 bg-cafe-cream text-cafe-dark overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="space-y-6">
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-cafe-gold font-serif italic text-xl"
              >
                Find Your Sanctuary
              </motion.span>
              <h2 className="text-6xl md:text-8xl font-serif leading-tight">
                Visit <br />
                <span className="italic font-light">Lumina</span>
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-cafe-gold">
                  <MapPin size={20} />
                  <h4 className="font-bold uppercase tracking-widest text-xs">Address</h4>
                </div>
                <p className="text-xl font-light italic">
                  123 Artisan Alley,<br />
                  Creative Quarter, NY 10001
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-cafe-gold">
                  <Clock size={20} />
                  <h4 className="font-bold uppercase tracking-widest text-xs">Hours</h4>
                </div>
                <p className="text-xl font-light italic">
                  Mon - Fri: 7am - 8pm<br />
                  Sat - Sun: 8am - 9pm
                </p>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-cafe-dark text-white px-10 py-5 rounded-full flex items-center gap-3 group transition-all"
            >
              <Navigation size={20} className="group-hover:rotate-45 transition-transform" />
              <span>Get Directions</span>
            </motion.button>
          </motion.div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              className="relative aspect-square rounded-[60px] overflow-hidden shadow-2xl border-8 border-white"
            >
              <img 
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2066&auto=format&fit=crop" 
                alt="Map View"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-cafe-gold/10 mix-blend-multiply" />
              
              {/* Pulsing Marker */}
              <motion.div 
                animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-cafe-gold rounded-full blur-sm"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-cafe-gold rounded-full border-2 border-white shadow-lg" />
            </motion.div>

            {/* Floating Info Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-10 -left-10 md:-left-20 liquid-glass p-8 rounded-[40px] shadow-2xl border border-white/20 max-w-xs"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-cafe-gold flex items-center justify-center text-white">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-cafe-dark/40">Call Us</h4>
                  <p className="font-serif italic text-lg">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-cafe-gold flex items-center justify-center text-white">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-cafe-dark/40">Email</h4>
                  <p className="font-serif italic text-lg">hello@lumina.cafe</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Background Text Decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-serif italic text-cafe-gold/5 whitespace-nowrap pointer-events-none select-none">
        Lumina Sanctuary
      </div>
    </section>
  );
}
