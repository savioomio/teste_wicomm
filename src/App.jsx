import React from 'react'; 
import Header from './components/Header';
import Carousel from './components/Carousel'; 
import CardBeneficios from './components/CardBeneficios';
import CollectionFeature from './components/CollectionFeature';
import ProductShowcase from './components/ProductShowcase';
import CategoryNavigation from './components/CategoryNavigation';
import CatEverything from './components/CatEverything';
import CatSpotlight from './components/CatSpotlight';
import Gallery from './components/Gallery';
import NewsletterSubscription from './components/NewsletterSubscription';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <div className="App w-[1280px] mx-auto overflow-y-auto overflow-x-hidden">
      {/* Header fixo */}
      <header className="fixed top-0 mt-[30px] mx-[20px] w-[1240px] h-[41px] bg-gray-900 border-solid border-[1px] border-white text-white z-[5000]" role="banner">
        <Header />
      </header>

      {/* Contêiner do Carousel */}
      <div className="relative mt-[10px]">
        <div className="w-full">
          <Carousel />
        </div>
        <hr className="h-[9px] bg-[#262626] w-[1180px] mx-auto" />
      </div>

      <main className="relative">
        <CardBeneficios />
        <CollectionFeature />
        <ProductShowcase />
        <CategoryNavigation />
        <CatEverything />
        <CatSpotlight />
        <Gallery />
        <div className="w-[1240px] h-[1px] bg-black mx-auto"></div>
        <NewsletterSubscription />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
