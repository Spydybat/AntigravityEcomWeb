import { motion } from 'framer-motion';
import heroImg from '../assets/hero.png';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/60 to-transparent z-10" />
        <img 
          src={heroImg} 
          alt="Premium Fashion" 
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="max-w-2xl"
        >
          <span className="text-accent tracking-[0.2em] text-sm uppercase mb-4 block font-semibold">
            Fall / Winter Collection 2026
          </span>
          <h1 className="text-5xl md:text-7xl font-serif text-white leading-tight mb-6">
            Redefine Your <br />
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Aesthetic.</span>
          </h1>
          <p className="text-gray-300 text-lg mb-10 max-w-lg font-light">
            Discover our latest collection of premium streetwear and minimalist luxury. Crafted for those who demand excellence in every thread.
          </p>
          
          <div className="flex space-x-4">
            <button className="bg-accent text-primary px-8 py-4 font-semibold tracking-wide uppercase hover:bg-white transition-colors duration-300 flex items-center group">
              Explore Collection
              <span className="ml-3 group-hover:translate-x-2 transition-transform duration-300">→</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
