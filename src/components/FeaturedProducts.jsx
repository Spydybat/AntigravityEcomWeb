import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Obsidian Trench Coat',
    price: '$450',
    image: 'https://images.unsplash.com/photo-1551028719-01c1eb562251?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 2,
    name: 'Minimalist Silk Blouse',
    price: '$280',
    image: 'https://images.unsplash.com/photo-1598554747436-c9293d6a588f?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 3,
    name: 'Tailored Wool Trousers',
    price: '$320',
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 4,
    name: 'Onyx Leather Jacket',
    price: '$890',
    image: 'https://images.unsplash.com/photo-1520975954732-57dd22299614?auto=format&fit=crop&q=80&w=600'
  }
];

export default function FeaturedProducts() {
  return (
    <section className="py-24 bg-secondary" id="new arrivals">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-4xl font-serif text-white mb-4">The Edit</h2>
          <div className="w-16 h-0.5 bg-accent mb-6"></div>
          <p className="text-gray-400 font-light text-center max-w-2xl">
            Our most sought-after pieces this season. Elevate your wardrobe with these timeless essentials.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {products.map((product, index) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden aspect-[3/4] mb-6 bg-primary">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out opacity-80 group-hover:opacity-100"
                />
                
                {/* Add to Cart Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <button className="w-full bg-white text-primary py-3 flex items-center justify-center space-x-2 font-semibold uppercase tracking-wider text-sm hover:bg-accent transition-colors">
                    <ShoppingBag className="w-4 h-4" />
                    <span>Add to Bag</span>
                  </button>
                </div>
              </div>
              
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-white font-medium mb-1 group-hover:text-accent transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-400 text-sm">Premium Blend</p>
                </div>
                <span className="text-white font-serif">{product.price}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
