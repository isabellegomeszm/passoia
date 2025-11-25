import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/IndexPage/Header"
import Banner from "./components/IndexPage/Banner"
import Looks from "./components/IndexPage/Looks"
import Lancamentos from "./components/IndexPage/Lancamentos"
import Novidades from "./components/IndexPage/Novidades"
import Footer from "./components/IndexPage/Footer"

import Header2 from "./components/IndexPage/Header"


function App() {
  return(
    <Router>
      <Routes>
        <Route 
          path="/"
          element={
            <>
              <Header/>
              <Banner/>
              <Looks/>
              <Lancamentos/>
              <Novidades/>
              <Footer/>
            </>
          }
        />

        <Route
          path="/looks"
          element={
            <>
              <Header/>
              <Footer/>
            </>
          }
        />
      </Routes>
    </Router>
  )
}

export default App;