import { motion } from 'motion/react';

const images = [
  "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1974&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1525648199074-cee30ba79a4a?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2071&auto=format&fit=crop",
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-cafe-dark text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl mb-4">The Atmosphere</h2>
          <p className="text-white/50 italic">Capturing the essence of Lumina.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 [perspective:1000px]">
          {images.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, rotateY: 45, translateZ: -100 }}
              whileInView={{ opacity: 1, rotateY: 0, translateZ: 0 }}
              whileHover={{ 
                scale: 1.05, 
                rotateY: idx % 2 === 0 ? 10 : -10,
                translateZ: 50,
                boxShadow: "0 20px 40px rgba(0,0,0,0.4)"
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="relative aspect-[4/5] rounded-2xl overflow-hidden cursor-pointer group"
            >
              <img 
                src={src} 
                alt={`Gallery ${idx}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <span className="text-cafe-gold font-serif italic">View Moment</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
