import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: "Elena Rossi",
    role: "Food Critic",
    text: "The Lumina Gold Latte is a revelation. The balance of honey and espresso is perfect.",
    rating: 5
  },
  {
    name: "Marcus Thorne",
    role: "Digital Nomad",
    text: "Best workspace in the city. The atmosphere is quiet yet inspiring, and the coffee is consistent.",
    rating: 5
  },
  {
    name: "Sarah Jenkins",
    role: "Local Resident",
    text: "Their saffron croissants are addictive. I come here every Saturday morning without fail.",
    rating: 5
  }
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-cafe-cream">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl mb-4">What They Say</h2>
          <div className="flex justify-center gap-1 text-cafe-gold">
            {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={20} />)}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-cafe-gold/10 relative"
            >
              <div className="text-4xl text-cafe-gold/20 font-serif absolute top-4 right-8">"</div>
              <p className="text-cafe-dark/80 italic mb-6 leading-relaxed">
                {review.text}
              </p>
              <div>
                <h4 className="font-bold text-cafe-dark">{review.name}</h4>
                <span className="text-xs text-cafe-gold uppercase tracking-widest">{review.role}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
