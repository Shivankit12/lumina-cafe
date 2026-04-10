import { motion, useScroll, useTransform } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Location from './components/Location';
import Footer from './components/Footer';

function App() {
  const { scrollYProgress } = useScroll();
  
  // Simple 3D scroll effect for the main container
  const rotateX = useTransform(scrollYProgress, [0, 0.2], [0, 5]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  return (
    <div className="relative bg-cafe-dark overflow-x-hidden">
      <Navbar />
      
      <motion.div
        style={{
          perspective: '1200px',
        }}
      >
        <motion.div
          style={{
            rotateX,
            scale,
            transformStyle: 'preserve-3d',
          }}
          className="origin-top"
        >
          <Hero />
        </motion.div>
      </motion.div>

      <main className="relative z-20">
        <Menu />
        <Gallery />
        <Reviews />
        <Location />
      </main>

      <Footer />
      
      {/* Scroll Progress Indicator */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-cafe-gold origin-left z-[100]"
        style={{ scaleX: scrollYProgress }}
      />
    </div>
  );
}

export default App;
