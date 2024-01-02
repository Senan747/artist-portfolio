import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Home from "./Home";
import Arts from "./Arts";
import Contact from "./Contact";
import Art from "./Art";
import About from "./About";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Pages() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path={`/`} element={<Home />} />
        <Route path={`/arts`} element={<Arts />} />
        <Route path={`/contact`} element={<Contact />} />
        <Route path={`/art/:id`} element={<Art />} />
        <Route path={`/about`} element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default Pages;
