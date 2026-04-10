import { motion } from 'motion/react';

const images = [
  {
    url: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop",
    title: "Morning Ritual",
    desc: "The perfect start to your day"
  },
  {
    url: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop",
    title: "Artisan Space",
    desc: "Designed for inspiration"
  },
  {
    url: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?q=80&w=2089&auto=format&fit=crop",
    title: "Master Roasters",
    desc: "Precision in every bean"
  },
  {
    url: "https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1974&auto=format&fit=crop",
    title: "Cold Brew",
    desc: "Slow dripped perfection"
  }
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-cafe-dark text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl mb-6 font-serif italic"
            >
              The Atmosphere
            </motion.h2>
            <p className="text-white/50 text-xl font-light italic">
              A glimpse into the soul of Lumina. Where architecture meets aroma.
            </p>
          </div>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="hidden md:block"
          >
            <div className="w-32 h-px bg-cafe-gold/30" />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative aspect-[3/4] rounded-[40px] overflow-hidden cursor-pointer [perspective:1000px]"
            >
              <motion.div 
                className="w-full h-full transition-all duration-700 ease-out group-hover:[transform:rotateY(10deg)_rotateX(5deg)]"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <img 
                  src={img.url} 
                  alt={img.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cafe-dark via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="space-y-2"
                  >
                    <h3 className="text-2xl font-serif italic">{img.title}</h3>
                    <p className="text-white/60 text-sm font-light">{img.desc}</p>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
