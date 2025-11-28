import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react"
import ScrollToHash from "./ScrollToHash";

import Header from "./components/IndexPage/Header"
import Banner from "./components/IndexPage/Banner"
import Looks from "./components/IndexPage/Looks"
import Launches from "./components/IndexPage/Launches"
import News from "./components/IndexPage/News"
import Footer from "./components/IndexPage/Footer"
import BannerBlog from "./components/BlogPage/BannerBlog";
import GlossyHair from "./components/BlogPage/GlossyHair"
import Foundation from "./components/BlogPage/Foundation"
import Haircare from "./components/BlogPage/HairCare"
import SkinCare from "./components/BlogPage/SkinCare"
import CleanHair from "./components/BlogPage/CleanHair"




function App() {
  
  const [bag, setBag] = useState([]);  // ESTADO GLOBAL DO CARRINHO

  useEffect(() => {
    const savedBag = localStorage.getItem("bag");
    if (savedBag) {
      setBag(JSON.parse(savedBag));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("bag", JSON.stringify(bag));
  }, [bag]);

  const addToBag = (product) => {
    setBag(prev => [...prev, product]);
  };

  return(
      <Router>
        <ScrollToHash />
        <Routes>
          <Route 
            path="/"
            element={
              <>
                <Header bagCount={bag.length} />
                <Banner/>
                <div id="looks">
                  <Looks/>
                </div>              
                <Launches addToBag={addToBag} />
                <News/>
                <Footer/>
              </>
            }
          />

        <Route
          path="/looks"
          element={
            <>
              <Header bagCount={bag.length} />
              <Footer/>
            </>
          }
        />

        <Route
          path="/products"
          element={
            <>
              <Header bagCount={bag.length} />
              <Footer/>
            </>
          }
        />

        <Route
          path="/blog"
          element={
            <>
              <Header bagCount={bag.length} />
              <BannerBlog/>
              <GlossyHair/>
              <Foundation/>
              <Haircare/>
              <SkinCare/>
              <CleanHair/>
              <Footer/>
            </>
          }
        />

        <Route
            path="/bag"
            element={
              <>
                <Header bagCount={bag.length} />
                <Footer/>
              </>
            }
        />
      </Routes>
    </Router>
  )
}

export default App;