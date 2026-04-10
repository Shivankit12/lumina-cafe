import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax effect simulated by motion */}
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=2078&auto=format&fit=crop" 
          alt="Cafe Interior" 
          className="w-full h-full object-cover brightness-50"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      <div className="relative z-10 text-center px-4 max-w-5xl">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span className="text-cafe-gold uppercase tracking-[0.3em] text-sm font-bold mb-6 block">
            Est. 2024 • Specialty Coffee
          </span>
          <h1 className="text-6xl md:text-8xl text-white mb-8 leading-[0.9]">
            Where Every Sip <br /> 
            <span className="italic font-light">Tells a Story</span>
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light">
            Experience the art of brewing in an atmosphere designed for inspiration. 
            From bean to cup, we celebrate the ritual of coffee.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-cafe-gold text-white px-8 py-4 rounded-full flex items-center gap-2 group transition-all"
            >
              Explore Menu
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="glass text-white px-8 py-4 rounded-full hover:bg-white/20 transition-all"
            >
              Our Story
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
