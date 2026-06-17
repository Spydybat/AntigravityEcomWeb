import { motion } from 'framer-motion';
import mensImg from '../assets/mens.png';
import womensImg from '../assets/womens.png';

const categories = [
  {
    id: 1,
    name: "Men's Collection",
    image: mensImg,
    link: "#mens"
  },
  {
    id: 2,
    name: "Women's Collection",
    image: womensImg,
    link: "#womens"
  }
];

export default function Categories() {
  return (
    <section className="py-24 bg-primary" id="collections">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-serif text-white mb-2">Curated Collections</h2>
            <p className="text-gray-400 font-light">Explore our distinct lines crafted for modern elegance.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <motion.div 
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative h-[600px] overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500 z-10" />
              <img 
                src={category.image} 
                alt={category.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center">
                <h3 className="text-4xl font-serif text-white mb-6 transform group-hover:-translate-y-2 transition-transform duration-500 text-glow">
                  {category.name}
                </h3>
                <button className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-3 uppercase tracking-widest text-sm hover:bg-white hover:text-primary">
                  Shop Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
