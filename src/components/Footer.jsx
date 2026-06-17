export default function Footer() {
  return (
    <footer className="bg-primary pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <h1 className="text-3xl font-serif tracking-widest text-white mb-6">
              AURA<span className="text-accent">.</span>
            </h1>
            <p className="text-gray-400 font-light text-sm mb-6">
              Defining modern elegance through minimalist design and premium craftsmanship.
            </p>
            <div className="flex space-x-4 text-gray-400">
              {/* Instagram Icon */}
              <svg className="w-5 h-5 hover:text-accent cursor-pointer transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              {/* Twitter Icon */}
              <svg className="w-5 h-5 hover:text-accent cursor-pointer transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              {/* Facebook Icon */}
              <svg className="w-5 h-5 hover:text-accent cursor-pointer transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Shop</h4>
            <ul className="space-y-4 text-sm font-light text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">New Arrivals</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Men's Collection</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Women's Collection</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Accessories</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Support</h4>
            <ul className="space-y-4 text-sm font-light text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Client Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Care Guide</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Legal</h4>
            <ul className="space-y-4 text-sm font-light text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-xs font-light mb-4 md:mb-0">
            &copy; 2026 AURA Studio. All rights reserved.
          </p>
          <div className="flex space-x-6 text-xs text-gray-500 font-light">
            <span>Region: Global</span>
            <span>Currency: USD</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
