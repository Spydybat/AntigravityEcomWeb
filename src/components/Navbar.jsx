import { ShoppingBag, Search, User, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 top-0 transition-all duration-300 bg-primary/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer">
            <h1 className="text-3xl font-serif tracking-widest text-white">
              AURA<span className="text-accent">.</span>
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {['New Arrivals', 'Men', 'Women', 'Collections'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-gray-300 hover:text-accent transition-colors duration-200 text-sm tracking-wider uppercase">
                {item}
              </a>
            ))}
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-6">
            <button className="text-gray-300 hover:text-accent transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="text-gray-300 hover:text-accent transition-colors">
              <User className="w-5 h-5" />
            </button>
            <button className="text-gray-300 hover:text-accent transition-colors relative">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-2 -right-2 bg-accent text-primary text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                2
              </span>
            </button>
            <button className="md:hidden text-gray-300 hover:text-accent">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
