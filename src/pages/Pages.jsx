import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Arts from "./Arts";
import Contact from "./Contact";
import Art from "./Art";
import About from "./About"

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/resmler" element={<Arts />} />
      <Route path="/elaqe" element={<Contact />} />
      <Route path="/art/:name" element={<Art />} />
      <Route path="/haqqında" element={<About />} />
    </Routes>
  );
}

export default Pages;
