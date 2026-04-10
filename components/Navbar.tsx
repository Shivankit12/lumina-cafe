import { motion } from 'motion/react';
import { Coffee } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl"
    >
      <div className="liquid-glass rounded-full px-8 py-4 flex items-center justify-between">
        <Link href="/">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-full bg-cafe-gold/10 flex items-center justify-center group-hover:bg-cafe-gold/20 transition-colors">
              <Coffee className="text-cafe-gold w-6 h-6" />
            </div>
            <span className="font-serif text-xl font-bold tracking-tight">Lumina</span>
          </motion.div>
        </Link>
        
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
