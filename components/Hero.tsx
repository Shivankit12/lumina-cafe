import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax effect simulated by motion */}
      <motion.div 
        initial={{ scale: 1.2, filter: "blur(10px)" }}
        animate={{ scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=2078&auto=format&fit=crop" 
          alt="Cafe Interior" 
          className="w-full h-full object-cover brightness-[0.4]"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      <div className="relative z-10 text-center px-4 max-w-5xl">
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.span 
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            animate={{ opacity: 1, letterSpacing: "0.3em" }}
            transition={{ duration: 1.5, delay: 0.8 }}
            className="text-cafe-gold uppercase text-sm font-bold mb-8 block"
          >
            Est. 2024 • Specialty Coffee
          </motion.span>
          <h1 className="text-6xl md:text-9xl text-white mb-10 leading-[0.85] font-serif">
            Where Every Sip <br /> 
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="italic font-light text-cafe-gold"
            >
              Tells a Story
            </motion.span>
          </h1>
          <p className="text-white/60 text-lg md:text-2xl max-w-2xl mx-auto mb-12 font-light italic">
            Experience the art of brewing in an atmosphere designed for inspiration. 
            From bean to cup, we celebrate the ritual of coffee.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px -10px rgba(197, 160, 89, 0.5)"
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-cafe-gold text-white px-10 py-5 rounded-full flex items-center gap-3 group transition-all text-lg font-medium"
            >
              Explore Menu
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <Link href="/story">
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(255, 255, 255, 0.15)",
                  borderColor: "rgba(255, 255, 255, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                className="glass text-white px-10 py-5 rounded-full transition-all text-lg font-medium border border-white/10"
              >
                Our Story
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          duration: 5, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
        className="absolute bottom-20 right-20 hidden lg:block"
      >
        <div className="liquid-glass p-6 rounded-2xl rotate-12">
          <p className="text-white text-sm font-serif italic">"Best espresso in town"</p>
          <span className="text-cafe-gold text-xs">— Daily Brew</span>
        </div>
      </motion.div>
    </section>
  );
}
