import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: "Elena Rossi",
    role: "Food Critic",
    text: "The Lumina Gold Latte is a revelation. The balance of honey and espresso is perfect, and the atmosphere is unmatched.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop"
  },
  {
    name: "Marcus Thorne",
    role: "Architect",
    text: "As a designer, I appreciate the attention to detail in the space. It's the perfect environment for deep work.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Sarah Jenkins",
    role: "Local Artist",
    text: "Lumina has become my second home. The staff knows my order by heart, and the pastries are always fresh.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop"
  }
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-cafe-cream overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            className="w-16 h-16 bg-cafe-gold/10 rounded-full flex items-center justify-center text-cafe-gold mx-auto mb-6"
          >
            <Quote size={32} />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-serif italic mb-6"
          >
            Voices of Lumina
          </motion.h2>
          <p className="text-cafe-dark/50 text-xl font-light italic">
            What our community says about their experience.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="liquid-glass p-10 rounded-[50px] border border-white/20 flex flex-col items-center text-center group"
            >
              <div className="relative mb-8">
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-xl">
                  <img 
                    src={review.image} 
                    alt={review.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-2 border-2 border-dashed border-cafe-gold/30 rounded-full"
                />
              </div>

              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-cafe-gold text-cafe-gold" />
                ))}
              </div>

              <p className="text-cafe-dark/70 italic leading-relaxed mb-8 text-lg">
                "{review.text}"
              </p>

              <div>
                <h4 className="text-xl font-serif italic">{review.name}</h4>
                <p className="text-cafe-gold text-xs uppercase tracking-widest font-bold">{review.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-cafe-gold/5 to-transparent pointer-events-none" />
    </section>
  );
}
