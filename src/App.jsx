import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import FeaturedProducts from './components/FeaturedProducts';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <main className="bg-primary min-h-screen">
      <Navbar />
      <Hero />
      <FeaturedProducts />
      <Categories />
      <Newsletter />
      <Footer />
    </main>
  );
}

export default App;
