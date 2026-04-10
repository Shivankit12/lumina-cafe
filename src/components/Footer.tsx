import { Coffee, Instagram, Twitter, Facebook, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-cafe-cream py-20 border-t border-cafe-gold/10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Coffee className="text-cafe-gold w-8 h-8" />
              <span className="font-serif text-3xl font-bold tracking-tight">Lumina</span>
            </div>
            <p className="text-cafe-dark/60 max-w-sm mb-8">
              Crafting moments of clarity and connection through the art of specialty coffee. 
              Join our community of dreamers and doers.
            </p>
            <div className="flex gap-4">
              {[Instagram, Twitter, Facebook].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-10 h-10 rounded-full border border-cafe-gold/20 flex items-center justify-center text-cafe-dark hover:bg-cafe-gold hover:text-white transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-serif text-xl mb-6">Quick Links</h4>
            <ul className="space-y-4 text-cafe-dark/60">
              {['Menu', 'Gallery', 'Reviews', 'Location'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="hover:text-cafe-gold transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-xl mb-6">Newsletter</h4>
            <p className="text-sm text-cafe-dark/60 mb-4">Get brewing tips and event invites.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Your email" 
                className="w-full bg-white border border-cafe-gold/20 rounded-full px-6 py-3 text-sm focus:outline-none focus:border-cafe-gold transition-colors"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-cafe-gold text-white rounded-full flex items-center justify-center hover:bg-cafe-gold/90 transition-all">
                <Mail size={14} />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-cafe-gold/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-cafe-dark/40 uppercase tracking-widest">
          <p>© 2024 Lumina Café. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-cafe-gold">Privacy Policy</a>
            <a href="#" className="hover:text-cafe-gold">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
