import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToHash from "./ScrollToHash";
import { useEffect } from "react";

import Header from "./components/IndexPage/Header";
import Banner from "./components/IndexPage/Banner";
import Looks from "./components/IndexPage/Looks";
import Launches from "./components/IndexPage/Launches";
import News from "./components/IndexPage/News";
import Footer from "./components/IndexPage/Footer";

import BannerLooks from "./components/LooksPage/BannerLooks";
import Eyes from "./components/LooksPage/Eyes/eyes";
import Lips from "./components/LooksPage/Lips/lips";
import Face from "./components/LooksPage/Face/face";
import Hair from "./components/LooksPage/Hair/hair";

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

import { CheckoutProvider } from "./context/CheckoutContext";
import CheckoutLogin from "./components/CheckoutPage/checkoutlogin";
import CheckoutCreateAccount from "./components/CheckoutPage/checkoutsignup";
import CheckoutData from "./components/CheckoutPage/checkoutdata";
import CheckoutDelivery from "./components/CheckoutPage/checkoutdelivery";
import CheckoutPayment from "./components/CheckoutPage/checkoutpayment";
import CheckoutReview from "./components/CheckoutPage/checkoutreview"

function App() {
  return (
    <BagProvider>
      <CheckoutProvider>
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
                  <BannerLooks />
                  <Eyes />
                  <Lips />
                  <Face />
                  <Hair />
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

            <Route
              path="/checkout/login"
              element={
                <>
                  <Header />
                  <CheckoutLogin />
                  <Footer />
                </>
              }
            />

            <Route
              path="/checkout/create-account"
              element={
                <>
                  <Header />
                  <CheckoutCreateAccount />
                  <Footer />
                </>
              }
            />

            <Route
              path="/checkout/data"
              element={
                <>
                  <Header />
                  <CheckoutData />
                  <Footer />
                </>
              }
            />

            <Route
              path="/checkout/delivery"
              element={
                <>
                  <Header />
                  <CheckoutDelivery />
                  <Footer />
                </>
              }
            />

            <Route
              path="/checkout/payment"
              element={
                <>
                  <Header />
                  <CheckoutPayment />
                  <Footer />
                </>
              }
            />

             <Route
              path="/checkout/review"
              element={
                <>
                  <Header />
                  <CheckoutReview />
                  <Footer />
                </>
              }
            />
          </Routes>
        </Router>
      </CheckoutProvider>
    </BagProvider>
  );
}

export default App;
