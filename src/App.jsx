import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToHash from "./ScrollToHash";

import Header from "./components/IndexPage/Header";
import Banner from "./components/IndexPage/Banner";
import Looks from "./components/IndexPage/Looks";
import Launches from "./components/IndexPage/Launches";
import News from "./components/IndexPage/News";
import Footer from "./components/IndexPage/Footer";

import BannerBlog from "./components/BlogPage/BannerBlog";
import GlossyHair from "./components/BlogPage/GlossyHair";
import Foundation from "./components/BlogPage/Foundation";
import Haircare from "./components/BlogPage/HairCare";
import SkinCare from "./components/BlogPage/SkinCare";
import CleanHair from "./components/BlogPage/CleanHair";

import BannerShop from "./components/ShopPage/BannerShop";
import Products from "./components/ShopPage/Products/products";
import ProductsData from "./components/ShopPage/ProductsData/product";

import Bag from "./components/BagPage";
import BagProvider from "./context/BagContext";

function App() {
  return (
    <BagProvider>
      <Router>
        <ScrollToHash />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Banner />
                <div id="looks">
                  <Looks />
                </div>
                <Launches />
                <News />
                <Footer />
              </>
            }
          />

          <Route
            path="/looks"
            element={
              <>
                <Header />
                <Footer />
              </>
            }
          />

          <Route
            path="/products"
            element={
              <>
                <Header />
                <BannerShop />
                <Products productsdata={ProductsData} />
                <Footer />
              </>
            }
          />

          <Route
            path="/blog"
            element={
              <>
                <Header />
                <BannerBlog />
                <GlossyHair />
                <Foundation />
                <Haircare />
                <SkinCare />
                <CleanHair />
                <Footer />
              </>
            }
          />

          <Route
            path="/bag"
            element={
              <>
                <Header />
                <Bag />
                <Footer />
              </>
            }
          />
        </Routes>
      </Router>
    </BagProvider>
  );
}

export default App;
