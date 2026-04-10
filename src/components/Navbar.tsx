import { motion } from 'motion/react';
import { Coffee } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl"
    >
      <div className="glass rounded-full px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Coffee className="text-cafe-gold w-6 h-6" />
          <span className="font-serif text-xl font-bold tracking-tight">Lumina</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          {['Menu', 'Gallery', 'Reviews', 'Location'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium hover:text-cafe-gold transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
        
        <button className="bg-cafe-gold text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-cafe-gold/90 transition-all active:scale-95">
          Visit Us
        </button>
      </div>
    </motion.nav>
  );
}
