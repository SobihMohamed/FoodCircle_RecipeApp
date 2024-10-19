import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Footer from "./components/footer";

import MainPage from "./components/mainpage";
import MealInfo from "./components/MealInfo";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Favourite from "./components/Favourite";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/Meals" element={<MainPage />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/MealInfo" element={<MealInfo />} />
          <Route path="/Favourite" element={<Favourite />}></Route>
        </Routes>
        {/* <MainPage /> */}
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
