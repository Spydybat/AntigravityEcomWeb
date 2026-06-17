export default function Newsletter() {
  return (
    <section className="py-24 bg-primary relative overflow-hidden border-t border-white/5">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">Join The Inner Circle</h2>
        <p className="text-gray-400 font-light mb-10 max-w-xl mx-auto">
          Subscribe to receive exclusive access to private sales, early access to new collections, and curated editorial content.
        </p>
        
        <form className="flex flex-col sm:flex-row max-w-xl mx-auto gap-4">
          <input 
            type="email" 
            placeholder="Enter your email address" 
            className="flex-1 bg-transparent border-b border-gray-600 px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors placeholder-gray-500"
            required
          />
          <button 
            type="submit" 
            className="bg-accent text-primary px-8 py-3 uppercase tracking-widest text-sm font-semibold hover:bg-white transition-colors whitespace-nowrap"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
