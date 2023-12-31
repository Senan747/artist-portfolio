import "./App.css";
import Pages from "./pages/Pages";
import { motion, useScroll } from "framer-motion"


function App() {
  return (
    <div className="min-h-screen relative">
      <div className="bg-image absolute min-h-screen inset-0 z-0"></div>
      <div className="bg-yellow-500 opacity-10 absolute inset-0 z-0"></div>
      <div className="relative z-10">
        <Pages />
      </div>
    </div>
  );
}

export default App;
