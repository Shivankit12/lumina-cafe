import { motion } from 'motion/react';

const menuItems = [
  {
    category: "Signature Brews",
    items: [
      { name: "Lumina Gold Latte", price: "$6.50", desc: "House blend with honey and edible gold flakes" },
      { name: "Midnight Espresso", price: "$4.00", desc: "Double shot of our darkest roast" },
      { name: "Velvet Flat White", price: "$5.50", desc: "Silky microfoam over rich espresso" },
    ]
  },
  {
    category: "Artisanal Pastries",
    items: [
      { name: "Saffron Croissant", price: "$5.00", desc: "Flaky layers with a hint of saffron" },
      { name: "Matcha Cheesecake", price: "$7.50", desc: "Creamy matcha on a sesame crust" },
      { name: "Almond Pain au Chocolat", price: "$6.00", desc: "Classic with a nutty twist" },
    ]
  }
];

export default function Menu() {
  return (
    <section id="menu" className="py-24 px-4 relative overflow-hidden bg-cafe-cream">
      {/* Liquid Glass Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-24 -left-24 w-96 h-96 bg-cafe-gold/10 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            x: [0, -40, 0],
            y: [0, -20, 0]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-24 -right-24 w-80 h-80 bg-cafe-gold/5 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="liquid-glass p-8 md:p-20 rounded-[40px] border border-white/20">
          <div className="text-center mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl mb-4"
            >
              Our Curated Menu
            </motion.h2>
            <p className="text-cafe-dark/60 max-w-xl mx-auto italic">
              Hand-selected beans and locally sourced ingredients, crafted with passion.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            {menuItems.map((cat, idx) => (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
              >
                <h3 className="text-2xl font-serif text-cafe-gold mb-8 border-b border-cafe-gold/20 pb-2">
                  {cat.category}
                </h3>
                <div className="space-y-8">
                  {cat.items.map((item) => (
                    <motion.div 
                      key={item.name} 
                      whileHover={{ x: 10 }}
                      className="group cursor-pointer"
                    >
                      <div className="flex justify-between items-baseline mb-1">
                        <h4 className="text-xl font-medium group-hover:text-cafe-gold transition-colors">
                          {item.name}
                        </h4>
                        <span className="text-cafe-gold font-serif">{item.price}</span>
                      </div>
                      <p className="text-cafe-dark/50 text-sm italic">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
