import { motion } from 'motion/react';
import { MapPin, Clock, Phone } from 'lucide-react';

export default function Location() {
  return (
    <section id="location" className="py-24 bg-cafe-dark text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-5xl md:text-7xl mb-6">Find Us In <br /><span className="text-cafe-gold italic">The Heart</span></h2>
              <p className="text-white/50 max-w-md">
                Located in the historic district, Lumina is a sanctuary for coffee lovers and dreamers alike.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center group-hover:bg-cafe-gold transition-colors">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xl font-serif mb-1">Address</h4>
                  <p className="text-white/50">123 Artisan Way, Coffee District<br />San Francisco, CA 94103</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center group-hover:bg-cafe-gold transition-colors">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xl font-serif mb-1">Hours</h4>
                  <p className="text-white/50">Mon - Fri: 7am - 8pm<br />Sat - Sun: 8am - 9pm</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center group-hover:bg-cafe-gold transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xl font-serif mb-1">Contact</h4>
                  <p className="text-white/50">+1 (555) 123-4567<br />hello@luminacafe.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            className="relative aspect-square"
          >
            <div className="absolute inset-0 border-2 border-cafe-gold/30 rounded-full animate-[spin_20s_linear_infinite]" />
            <div className="absolute inset-4 border border-white/10 rounded-full" />
            
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full h-full rounded-3xl overflow-hidden glass p-2">
                <img 
                  src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=1974&auto=format&fit=crop" 
                  alt="Map Location" 
                  className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="w-8 h-8 bg-cafe-gold rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(197,160,89,0.5)]"
                  >
                    <div className="w-3 h-3 bg-white rounded-full" />
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
